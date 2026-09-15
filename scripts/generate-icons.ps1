Add-Type -AssemblyName System.Drawing

$code = @"
using System;
using System.Drawing;
using System.Drawing.Drawing2D;
using System.Drawing.Imaging;
using System.Collections.Generic;

public class IconHelper {
    public static Bitmap MakeTransparentCorners(Bitmap src) {
        int w = src.Width;
        int h = src.Height;
        Bitmap dst = new Bitmap(w, h, PixelFormat.Format32bppArgb);

        for (int y = 0; y < h; y++) {
            for (int x = 0; x < w; x++) {
                dst.SetPixel(x, y, src.GetPixel(x, y));
            }
        }

        bool[,] visited = new bool[w, h];
        Queue<Point> q = new Queue<Point>();

        Point[] seeds = new Point[] {
            new Point(0, 0), new Point(w - 1, 0),
            new Point(0, h - 1), new Point(w - 1, h - 1),
            new Point(w / 2, 0), new Point(0, h / 2),
            new Point(w - 1, h / 2), new Point(w / 2, h - 1),
            new Point(5, 5), new Point(w - 6, 5),
            new Point(5, h - 6), new Point(w - 6, h - 6)
        };

        foreach (var p in seeds) {
            Color c = src.GetPixel(p.X, p.Y);
            if (c.R > 220 && c.G > 220 && c.B > 220 && !visited[p.X, p.Y]) {
                q.Enqueue(p);
                visited[p.X, p.Y] = true;
            }
        }

        while (q.Count > 0) {
            Point p = q.Dequeue();
            dst.SetPixel(p.X, p.Y, Color.FromArgb(0, 0, 0, 0));

            int[] dx = { -1, 1, 0, 0 };
            int[] dy = { 0, 0, -1, 1 };

            for (int i = 0; i < 4; i++) {
                int nx = p.X + dx[i];
                int ny = p.Y + dy[i];

                if (nx >= 0 && nx < w && ny >= 0 && ny < h && !visited[nx, ny]) {
                    Color nc = src.GetPixel(nx, ny);
                    if (nc.R > 215 && nc.G > 215 && nc.B > 215) {
                        visited[nx, ny] = true;
                        q.Enqueue(new Point(nx, ny));
                    }
                }
            }
        }
        return dst;
    }

    public static Bitmap Resize(Bitmap src, int width, int height) {
        Bitmap dst = new Bitmap(width, height, PixelFormat.Format32bppArgb);
        using (Graphics g = Graphics.FromImage(dst)) {
            g.SmoothingMode = SmoothingMode.HighQuality;
            g.InterpolationMode = InterpolationMode.HighQualityBicubic;
            g.PixelOffsetMode = PixelOffsetMode.HighQuality;
            g.DrawImage(src, new Rectangle(0, 0, width, height));
        }
        return dst;
    }

    public static Bitmap MakeRound(Bitmap src, int size) {
        Bitmap dst = new Bitmap(size, size, PixelFormat.Format32bppArgb);
        using (Graphics g = Graphics.FromImage(dst)) {
            g.SmoothingMode = SmoothingMode.HighQuality;
            g.InterpolationMode = InterpolationMode.HighQualityBicubic;
            g.PixelOffsetMode = PixelOffsetMode.HighQuality;
            using (GraphicsPath path = new GraphicsPath()) {
                path.AddEllipse(0, 0, size, size);
                g.SetClip(path);
                g.DrawImage(src, new Rectangle(0, 0, size, size));
            }
        }
        return dst;
    }

    public static Bitmap MakeAdaptiveForeground(Bitmap src, int totalSize, float contentScale) {
        Bitmap dst = new Bitmap(totalSize, totalSize, PixelFormat.Format32bppArgb);
        int contentSize = (int)(totalSize * contentScale);
        int offset = (totalSize - contentSize) / 2;

        using (Graphics g = Graphics.FromImage(dst)) {
            g.SmoothingMode = SmoothingMode.HighQuality;
            g.InterpolationMode = InterpolationMode.HighQualityBicubic;
            g.PixelOffsetMode = PixelOffsetMode.HighQuality;
            g.DrawImage(src, new Rectangle(offset, offset, contentSize, contentSize));
        }
        return dst;
    }

    public static Bitmap MakeSplash(Bitmap icon, int width, int height, Color bgColor) {
        Bitmap dst = new Bitmap(width, height, PixelFormat.Format32bppArgb);
        using (Graphics g = Graphics.FromImage(dst)) {
            g.Clear(bgColor);
            g.SmoothingMode = SmoothingMode.HighQuality;
            g.InterpolationMode = InterpolationMode.HighQualityBicubic;
            int iconSize = Math.Min(width, height) / 2;
            int x = (width - iconSize) / 2;
            int y = (height - iconSize) / 2;
            g.DrawImage(icon, new Rectangle(x, y, iconSize, iconSize));
        }
        return dst;
    }
}
"@
Add-Type -TypeDefinition $code -ReferencedAssemblies System.Drawing

$srcPath = "C:\Users\alexandre.farias\.gemini\antigravity\brain\26bc78f6-3fad-4117-8b99-c8dbe30eb432\.user_uploaded\media_1789476819659.jpg"
$raw = [System.Drawing.Bitmap]::FromFile($srcPath)
Write-Output "Step 1: Removing white corners..."
$trans = [IconHelper]::MakeTransparentCorners($raw)
$trans.Save("android\icon_master_transparent.png", [System.Drawing.Imaging.ImageFormat]::Png)

Write-Output "Step 2: Generating Android Mipmaps..."
$densities = @(
    @{ name = "mdpi"; launcher = 48; foreground = 108 },
    @{ name = "hdpi"; launcher = 72; foreground = 162 },
    @{ name = "xhdpi"; launcher = 96; foreground = 216 },
    @{ name = "xxhdpi"; launcher = 144; foreground = 324 },
    @{ name = "xxxhdpi"; launcher = 192; foreground = 432 }
)

foreach ($d in $densities) {
    $dir = "android\app\src\main\res\mipmap-$($d.name)"
    if (!(Test-Path $dir)) { New-Item -ItemType Directory -Path $dir -Force }

    # 1. ic_launcher.png
    $bLauncher = [IconHelper]::Resize($trans, $d.launcher, $d.launcher)
    $bLauncher.Save("$dir\ic_launcher.png", [System.Drawing.Imaging.ImageFormat]::Png)
    $bLauncher.Dispose()

    # 2. ic_launcher_round.png
    $bRound = [IconHelper]::MakeRound($trans, $d.launcher)
    $bRound.Save("$dir\ic_launcher_round.png", [System.Drawing.Imaging.ImageFormat]::Png)
    $bRound.Dispose()

    # 3. ic_launcher_foreground.png (scaled to ~72% for adaptive safe zone)
    $bFore = [IconHelper]::MakeAdaptiveForeground($trans, $d.foreground, 0.72)
    $bFore.Save("$dir\ic_launcher_foreground.png", [System.Drawing.Imaging.ImageFormat]::Png)
    $bFore.Dispose()

    Write-Output "Generated mipmap-$($d.name)"
}

Write-Output "Step 3: Generating Web Icons (public/ and dist/)..."
$webSizes = @(
    @{ name = "public\icon-192.png"; size = 192 },
    @{ name = "public\icon-512.png"; size = 512 },
    @{ name = "public\apple-touch-icon.png"; size = 180 },
    @{ name = "public\favicon.png"; size = 64 }
)
foreach ($w in $webSizes) {
    $b = [IconHelper]::Resize($trans, $w.size, $w.size)
    $b.Save($w.name, [System.Drawing.Imaging.ImageFormat]::Png)
    $b.Dispose()
}

Write-Output "Step 4: Generating Splash Screen..."
$splashColor = [System.Drawing.Color]::FromArgb(255, 11, 15, 25) # matching dark theme #0b0f19
$bSplash = [IconHelper]::MakeSplash($trans, 480, 800, $splashColor)
$bSplash.Save("android\app\src\main\res\drawable\splash.png", [System.Drawing.Imaging.ImageFormat]::Png)
$bSplash.Dispose()

$raw.Dispose()
$trans.Dispose()
Write-Output "All icons generated successfully!"
