# 🧪 ProvaLAB - Laboratório de Simulados Escolares (6º ao 8º Ano)

Aplicativo mobile-first otimizado para Android que permite a estudantes do **6º, 7º e 8º ano do Ensino Fundamental** gerar e realizar provas online personalizadas de 10 ou 20 questões por disciplina e assunto.

O aplicativo conta com **modo escuro/claro nativo** com alternância em 1 toque, se conecta à API gratuita do **Google Gemini** para gerar avaliações sob demanda alinhadas à BNCC, valida se há questões esquecidas antes da entrega, traz gabarito comentado com explicações didáticas e salva todo o histórico localmente no celular (via **IndexedDB**).

---

## 🚀 Como Executar o Projeto Web

No terminal dentro da pasta `PROVALAB`:

```bash
# Iniciar o servidor de desenvolvimento para celular e computador
npm run dev -- --host
```

- **No computador:** Abra no navegador em [http://localhost:5173/](http://localhost:5173/)
- **No celular Android:** Conecte o celular na mesma rede Wi-Fi e acesse o IP local exibido no terminal.

---

## 📱 Como Gerar o APK Nativo no Android Studio

O projeto já inclui a pasta nativa `android/` configurada com o **Capacitor**:

1. Abra o **Android Studio**.
2. Clique em **Open** e selecione a pasta:
   ```
   PROVALAB/android
   ```
3. Aguarde o Gradle sincronizar as dependências.
4. No menu superior, clique em:
   **Build** ➔ **Build Bundle(s) / APK(s)** ➔ **Build APK(s)**.
5. Ao concluir, clique em **locate** para acessar seu arquivo `app-debug.apk` pronto para instalar no celular.

Se fizer alterações no código web e quiser sincronizar com o Android Studio:
```bash
npm run android:build
```

---

## 📋 Funcionalidades Principais

1. **Seleção de Série Escolar (6º, 7º ou 8º Ano):**
   - Seletor rápido para escolher entre o **6º Ano**, **7º Ano** e **8º Ano** do Ensino Fundamental II.
   - Atualiza instantaneamente as sugestões de tópicos curriculares alinhadas à BNCC específica da série selecionada.
   - Adapta a linguagem e complexidade das perguntas geradas pela IA do Google Gemini.

2. **Alternância de Tema (Modo Escuro e Modo Claro):**
   - Botão no cabeçalho (ícone de Sol e Lua) para alternar entre o tema escuro confortável e o tema claro.
   - Preferência salva automaticamente no dispositivo.

3. **Configuração da Prova:**
   - **Disciplinas:** Matemática, Língua Portuguesa, Ciências, História, Geografia, Língua Inglesa, Arte e campo livre.
   - **Sugestões Rápidas de Conteúdo:** Temas da BNCC para 6º, 7º e 8º ano (*Frações, Inteiros, Equações, Notação Científica, Células, Biomas, Puberdade, Grécia, Feudalismo, Iluminismo*, etc.).
   - **Tamanho da Avaliação:** Seletor entre **10** ou **20** questões.
   - **Nível de Dificuldade:** Fácil, Médio, Difícil e Misto.

4. **Formato de Prova Online Interativa:**
   - Barra de progresso visual em tempo real.
   - Grade de navegação rápida de questões com status (respondida = verde, pendente = âmbar/cinza).
   - Alternativas com botões amplos para fácil toque em telas de celular.

5. **Alerta Inteligente de Questões Esquecidas:**
   - Ao tocar em **"Finalizar Prova"**, o aplicativo verifica se ficou alguma em branco.
   - Mostra o total respondido e lista exatamente quais faltam (ex.: *Questões 4 e 8 pendentes*).
   - O aluno pode tocar na questão faltante e ir direto para ela para responder.

6. **Gabarito com Explicação do Professor:**
   - Nota calculada de 0 a 10 e percentual de acertos.
   - Efeito de confetes para notas acima de 7.0.
   - Detalhamento de cada questão: o que o aluno marcou vs resposta certa.
   - **Explicação didática** passo a passo de cada resolução.

7. **Banco de Dados Local no Celular (IndexedDB):**
   - Utiliza IndexedDB através do **Dexie.js**.
   - Todo o histórico de provas, ano escolar, notas, datas, respostas e explicações fica armazenado no próprio aparelho do aluno.
   - Aba **Histórico**: permite consultar a média geral de notas, total de provas feitas e reabrir qualquer prova anterior.

6. **Integração com Google Gemini (100% Gratuito):**
   - Chave gratuita da API do Google Gemini via Google AI Studio configurável no próprio app.
   - **Modo Simulado BNCC Offline:** caso esteja sem internet ou sem chave configurada, utiliza o banco interno de questões sem travar.

---

## 📁 Estrutura de Pastas

```
PROVALAB/
├── src/
│   ├── components/
│   │   ├── Header.jsx         # Cabeçalho mobile com navegação
│   │   ├── ExamConfig.jsx     # Seleção de matéria, assunto, 10/20 questões e nível
│   │   ├── ExamRunner.jsx     # Execução e marcação da prova
│   │   ├── PendingModal.jsx   # Modal de confirmação e alerta de questões esquecidas
│   │   ├── ExamResult.jsx     # Nota, gabarito e explicação didática
│   │   ├── HistoryView.jsx    # Histórico de provas no IndexedDB
│   │   └── ApiKeyModal.jsx    # Modal de configuração da chave do Gemini
│   ├── db/
│   │   └── database.js        # Banco de dados local IndexedDB (Dexie)
│   ├── services/
│   │   ├── gemini.js          # Chamada à API do Google Gemini Flash
│   │   └── mockQuestions.js   # Banco simulado offline da BNCC do 6º ano
│   ├── App.jsx                # Orquestrador de telas
│   └── index.css              # Estilos Tailwind v4 e utilitários mobile
├── public/
│   └── manifest.json          # Configuração PWA para instalação no Android
├── conversa/                  # Cópia completa do histórico da conversa e planejamento
│   ├── implementation_plan.md
│   └── walkthrough.md
├── index.html                 # Shell HTML com meta tags mobile
├── vite.config.js             # Configuração do Vite com suporte a rede local (--host)
└── package.json
```
