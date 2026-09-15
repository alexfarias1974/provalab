# Walkthrough: Primeira Versão do Aplicativo GeraProva (6º Ano)

Desenvolvemos a primeira versão do aplicativo mobile-first **GeraProva**, planejado para estudantes do 6º ano do Ensino Fundamental. O aplicativo permite gerar simulados de 10 ou 20 questões por disciplina e assunto, valida questões em branco antes da entrega, traz gabarito com explicação didática e armazena todo o histórico localmente no celular via IndexedDB.

---

## 📱 Acesso Rápido

O servidor local já está ativo:
- **No Computador / Navegador:** [http://localhost:5173/](http://localhost:5173/)
- **No Celular Android (mesma rede Wi-Fi):** `http://10.24.1.52:5173/`

> [!TIP]
> **Como instalar como App no celular Android:**
> 1. Abra o link no **Google Chrome** do celular.
> 2. Toque nos três pontinhos do menu do Chrome (canto superior direito).
> 3. Toque em **"Adicionar à tela inicial"** ou **"Instalar aplicativo"**.
> 4. O ícone do **GeraProva** será adicionado à sua tela de início e rodará em tela cheia como um aplicativo nativo.

---

## 🛠️ O que foi Desenvolvido

### 1. Seleção e Configuração da Prova
- **Disciplinas do 6º Ano:** Matemática, Língua Portuguesa, Ciências, História, Geografia, Língua Inglesa, Arte e campo livre.
- **Sugestões Rápidas de Conteúdo:** Badges com temas comuns da BNCC do 6º ano (*Frações e Decimais*, *Grécia e Roma*, *Células e Tecidos*, *Classes de Palavras*, etc.).
- **Tamanho da Prova:** Seletor visual de **10** ou **20** questões.
- **Nível de Dificuldade:** Botões para **Fácil**, **Médio**, **Difícil** e **Misto**.

### 2. Prova Online Interativa (Mobile-First)
- Grade de navegação rápida com os números de 1 a 10 (ou 1 a 20).
- Cores indicativas:
  - Verde: Questão respondida.
  - Azul: Questão em foco no momento.
  - Branco/Cinza: Questão em branco.
- Alternativas grandes com toque fácil para telas touch (A, B, C, D).

### 3. Alerta Inteligente de Questões Pendentes
- Ao tocar em **"Finalizar Prova"**, o sistema analisa o preenchimento:
  - Se todas foram respondidas: parabeniza e solicita confirmação de entrega.
  - **Se houver questões esquecidas:** exibe um aviso em destaque (*"Atenção! Questões em branco detectadas"*) listando os botões das questões pendentes (ex: *Questão 4*, *Questão 8*).
  - O aluno pode tocar no botão da questão pendente para voltar diretamente para ela e responder!

### 4. Correção e Gabarito com Explicações Didáticas
- Nota final calculada de **0.0 a 10.0** com percentual de acertos e confetes comemorativos para notas a partir de 7.0.
- Filtro para revisar: *Todas as questões*, *Apenas Acertos* ou *Apenas Erros*.
- **Explicação do Professor:** Cada questão detalha o porquê da alternativa correta, auxiliando no aprendizado imediato.

### 5. Banco de Dados Local no Celular (IndexedDB)
- Utiliza **IndexedDB** através da biblioteca `Dexie.js`.
- O histórico de provas, notas, datas, respostas do aluno e explicações ficam gravados diretamente no armazenamento interno do celular do aluno.
- Aba **Histórico**: permite acompanhar o progresso das notas, média geral e reabrir qualquer prova realizada para reler o gabarito.

### 6. Integração com a Inteligência Artificial do Google
- **Google AI Studio (Gemini Flash):**
  - Chave de API 100% gratuita configurável no próprio app (ícone de chave no canto superior).
  - Geração de 10 ou 20 questões em poucos segundos em uma única requisição.
- **Modo Simulado BNCC Offline:**
  - Caso o app esteja sem internet ou sem chave de API configurada, ele utiliza um banco simulado interno de questões do 6º ano, funcionando sem travar.

---

## 📁 Arquivos Criados

Localização do projeto: `C:\Users\alexandre.farias\.gemini\antigravity\scratch\prova-facil-6ano`

- [`src/App.jsx`](file:///C:/Users/alexandre.farias/.gemini/antigravity/scratch/prova-facil-6ano/src/App.jsx) - Orquestrador de telas e fluxo de dados.
- [`src/db/database.js`](file:///C:/Users/alexandre.farias/.gemini/antigravity/scratch/prova-facil-6ano/src/db/database.js) - Camada de banco de dados IndexedDB (Dexie).
- [`src/services/gemini.js`](file:///C:/Users/alexandre.farias/.gemini/antigravity/scratch/prova-facil-6ano/src/services/gemini.js) - Integração com a API do Google Gemini.
- [`src/services/mockQuestions.js`](file:///C:/Users/alexandre.farias/.gemini/antigravity/scratch/prova-facil-6ano/src/services/mockQuestions.js) - Banco simulado de questões da BNCC do 6º ano.
- [`src/components/ExamConfig.jsx`](file:///C:/Users/alexandre.farias/.gemini/antigravity/scratch/prova-facil-6ano/src/components/ExamConfig.jsx) - Formulário de configuração de matéria, assunto, quantidade e dificuldade.
- [`src/components/ExamRunner.jsx`](file:///C:/Users/alexandre.farias/.gemini/antigravity/scratch/prova-facil-6ano/src/components/ExamRunner.jsx) - Interface da prova interativa no celular.
- [`src/components/PendingModal.jsx`](file:///C:/Users/alexandre.farias/.gemini/antigravity/scratch/prova-facil-6ano/src/components/PendingModal.jsx) - Modal com o resumo e alerta de questões esquecidas.
- [`src/components/ExamResult.jsx`](file:///C:/Users/alexandre.farias/.gemini/antigravity/scratch/prova-facil-6ano/src/components/ExamResult.jsx) - Tela de nota e gabarito comentado.
- [`src/components/HistoryView.jsx`](file:///C:/Users/alexandre.farias/.gemini/antigravity/scratch/prova-facil-6ano/src/components/HistoryView.jsx) - Tela de histórico de avaliações salvas no celular.
- [`src/components/ApiKeyModal.jsx`](file:///C:/Users/alexandre.farias/.gemini/antigravity/scratch/prova-facil-6ano/src/components/ApiKeyModal.jsx) - Modal para inserção da chave gratuita do Gemini.
- [`public/manifest.json`](file:///C:/Users/alexandre.farias/.gemini/antigravity/scratch/prova-facil-6ano/public/manifest.json) - Manifesto PWA para instalação no Android.
