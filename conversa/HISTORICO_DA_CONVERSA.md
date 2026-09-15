# 📜 Histórico Completo da Conversa - Criação do PROVALAB

**Projeto:** PROVALAB - Simulador e Gerador de Provas Escolares para o 6º Ano do Ensino Fundamental  
**Data:** 14 de setembro de 2026  
**Localização:** `C:\Users\alexandre.farias\Documents\PERSONAL\PROVALAB`

---

## 1. Pergunta Inicial do Usuário
> *"Meu filho está no sexto ano do ensino fundamental. E possível criar uma aplicação para celular onde o aluno escolha o assunto e a aplicação construa uma prova de 10 ou 20 questões?"*

### Resposta e Viabilidade:
- **Sim, é totalmente viável!**
- Explicamos a viabilidade de uma aplicação mobile-first no formato **PWA (Progressive Web App)**, que pode ser acessada pelo Chrome no celular e instalada na tela de início com 1 toque, rodando em tela cheia como um aplicativo nativo.
- Apresentamos as opções de banco de questões pré-cadastradas (alinhadas à BNCC) e geração dinâmica sob demanda via Inteligência Artificial.

---

## 2. Segunda Pergunta: Uso de IA Sem Custo de Tokens
> *"Mas se eu quiser que as questões sejam geradas na hora sem o banco de questões é possível fazer isso usando somente o google por trás sem custo de token para o usuário?"*

### Resposta sobre a Gratuidade do Google Gemini:
- **Sim, 100% gratuito e viável!**
- O **Google AI Studio** oferece um plano gratuito (Free Tier) para a API do Gemini (como o `gemini-2.5-flash` / `gemini-1.5-flash`), permitindo até **1.500 requisições diárias sem nenhum custo** e sem necessidade de cartão de crédito.
- Para o aluno, o custo é zero: o app faz apenas **uma única requisição estruturada em JSON** para o Google por prova, recebendo todas as 10 ou 20 questões formatadas em apenas 2 a 3 segundos.

---

## 3. Especificação dos Requisitos do App
> *"Vamos gerar uma primeira versão do App. Quero campo para escolher a disciplina, campo para colocar os assuntos que quer gerar a prova e a escolha de 10 ou 20 questões. Também um campo para escolher o nível de dificuldade das questões com fácil, médio, difícil e misto.*  
> *Quero um formato de prova online onde o aluno vai marcando as opções e quando ele finalizar mostra um resumo das questões respondidas. Caso ele esqueça de alguma mostre essa informação para o aluno voltar e responder. Também quero que guarde localmente no dispositivo o histórico das respostas. Por isso precisa gerar um db local. Lembre-se que isso será um aplicativo para celular. Então lembre-se que será usado para Android. Precisa salvar no celular também."*

---

## 4. O Que Foi Desenvolvido e Implementado

### A. Interface e Experiência no Celular Android (PWA)
- Layout 100% responsivo com foco em toque (*mobile touch*), botões amplos, contrastes nítidos e ícone na tela de início via `manifest.json`.
- Servidor configurado com `--host` permitindo acesso direto pelo celular no mesmo Wi-Fi.

### B. Formulário de Configuração da Prova (`src/components/ExamConfig.jsx`)
- **Disciplina:** Seleção de matérias do 6º ano (Matemática, Ciências, História, Geografia, Língua Portuguesa, Língua Inglesa, Arte ou personalizada).
- **Assunto:** Campo de texto livre com **sugestões rápidas de temas da BNCC** com 1 clique (ex: *Frações e Decimais*, *Grécia e Roma*, *Células e Tecidos*, etc.).
- **Tamanho:** 10 ou 20 questões.
- **Dificuldade:** Fácil, Médio, Difícil e Misto.

### C. Prova Interativa Online (`src/components/ExamRunner.jsx`)
- Barra de progresso visual no topo (*"Questão X de Y"*).
- Grade de navegação rápida de questões com status colorido (verde = respondida, azul = atual, cinza = em branco).
- Alternativas A, B, C e D com seleção clara.

### D. Alerta de Questões Esquecidas (`src/components/PendingModal.jsx`)
- Ao clicar em *"Finalizar Prova"*, o sistema calcula o preenchimento.
- Se houver questões em branco, exibe um alerta de atenção destacando exatamente quais questões faltam (ex: *Questão 4*, *Questão 8*).
- O aluno pode clicar no botão da questão esquecida para ser levado diretamente até ela e responder antes de entregar.

### E. Gabarito com Explicação do Professor (`src/components/ExamResult.jsx`)
- Nota final de 0.0 a 10.0 com aproveitamento percentual e confetes para notas $\ge 7.0$.
- Mostra o que o aluno marcou vs a alternativa correta.
- **Explicação Didática Passo a Passo** em cada questão, essencial para fixação do 6º ano.

### F. Banco de Dados Local no Celular (`src/db/database.js`)
- Implementado com **IndexedDB** via biblioteca **Dexie.js**.
- Os dados ficam salvos de forma permanente na memória interna do celular/navegador.
- Tela de **Histórico** (`src/components/HistoryView.jsx`) com evolução de notas, total de questões feitas e reabertura de provas passadas.

### G. Conexão com Google Gemini e Modo Offline (`src/services/`)
- Integração com Google AI Studio via `gemini.js`.
- Banco de simulados offline com questões completas de 6º ano para funcionar mesmo sem internet ou sem chave de API.

---

## 5. Estrutura dos Arquivos em `PROVALAB`

- `PROVALAB/`
  - `src/` (Código-fonte dos componentes, banco de dados e serviços)
  - `public/manifest.json` (Configuração PWA para Android)
  - `conversa/` (Cópias dos planos, walkthrough e deste resumo)
  - `README.md` (Instruções rápidas de uso e execução)

---

## 6. Como Executar

```bash
npm run dev -- --host
```
- Acesse no computador em `http://localhost:5173/` ou no celular pelo IP da sua rede Wi-Fi.

---

## 7. Evolução: PROVALAB, Tema Escuro e Suporte a 6º, 7º e 8º Ano
> *"Vamos fazer algumas mudanças. Primeiro quero mudar o nome da aplicação. Sai GeraProva e entra PROVALAB. Depois eu quero uma versão mais escura. Aproveite e implemente esse switch de tema claro e escuro. Depois eu quero que deixe a opção de escolher 6º, 7º ou 8º ano ao invés de travar no 6º ano."*

### O que foi implementado:
1. **Renomeação para PROVALAB:**
   - Nome atualizado em `index.html`, `manifest.json` (PWA Android), cabeçalho e banco de dados local.
2. **Tema Escuro & Switch de Tema (Claro / Escuro):**
   - Implementado modo escuro nativo com Tailwind CSS v4 (`dark:`).
   - Botão no cabeçalho com ícones de Sol e Lua para alternar instantaneamente.
   - Padrão configurado para o tema escuro com persistência de preferência no dispositivo (`localStorage`).
3. **Suporte a 6º, 7º e 8º Ano do Ensino Fundamental:**
   - Seletor rápido de série escolar no topo da configuração da prova.
   - Banco de tópicos e sugestões da BNCC atualizados dinamicamente de acordo com o ano escolar escolhido.
   - Prompt da IA Gemini adaptado dinamicamente para o currículo e faixa etária da série escolhida.
   - Banco de questões offline ampliado com questões para 6º, 7º e 8º anos.
   - Histórico e resultados gravam e exibem a série escolar correspondente de cada avaliação realizada.

