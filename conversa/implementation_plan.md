# Plano de Implementação: Aplicativo de Provas do 6º Ano (Android / Mobile PWA)

Criação de uma aplicação mobile-first otimizada para Android que permite ao aluno do 6º ano gerar e realizar provas personalizadas de 10 ou 20 questões por disciplina e assunto, com validação de questões pendentes, correção detalhada com explicações e banco de dados local persistente no dispositivo.

---

## Revisão do Usuário Necessária

> [!IMPORTANT]
> **Formato da Aplicação para Celular (Android):**
> A aplicação será construída como um **PWA (Progressive Web App)** moderno com **React + Tailwind CSS + Vite**.
> - **Vantagem para o Android:** Pode ser acessado diretamente pelo Chrome no celular e instalado na tela de início com 1 toque ("Adicionar à tela inicial"). Ele ganha ícone de app, roda em tela cheia sem barra de navegador e funciona de forma independente.
> - **Banco de Dados Local:** Utilizaremos **IndexedDB** (via biblioteca de alta performance), que é o banco de dados nativo do Android/Chrome no próprio aparelho, garantindo que o histórico e as provas fiquem salvos permanentemente no celular sem depender de servidores externos.
> - **Chave da API do Google:** O aplicativo terá uma tela de configurações simples para inserir a chave gratuita do Google AI Studio (Gemini). Também incluiremos simulados prontos para testar de imediato mesmo sem chave.

---

## Funcionalidades e Requisitos Atendidos

### 1. Tela de Criação da Prova (Configurações)
- **Disciplina:** Seleção com matérias do 6º ano (Matemática, Língua Portuguesa, Ciências, História, Geografia, Inglês, Artes) + campo personalizado.
- **Assunto:** Campo de texto livre + sugestões rápidas de temas comuns da BNCC do 6º ano (ex.: *Frações e Decimais*, *Grécia e Roma*, *Células e Tecidos*, *Classes de Palavras*).
- **Quantidade de Questões:** Seletor entre **10** ou **20** questões.
- **Nível de Dificuldade:** Seletor com botões para **Fácil**, **Médio**, **Difícil** e **Misto**.
- **Integração com o Google:** Geração em tempo real via Gemini Flash (1 única requisição com prompt estruturado em JSON para retorno em poucos segundos).

### 2. Formato da Prova Online (Mobile-First)
- Interface limpa com cards grandes e toque facilitado para telas touch de celular.
- Navegação entre questões ou painel de navegação rápida (mostrando quais já foram respondidas e quais estão pendentes).
- Barra de progresso visual em tempo real (ex.: *"Respondidas: 16 de 20"*).

### 3. Validação ao Finalizar
- Ao tocar em **"Finalizar Prova"**, o sistema abre um resumo detalhado:
  - Mostra o total de questões marcadas vs. total da prova.
  - Se faltar alguma: **Alerta destacado indicando exatamente os números das questões esquecidas** (ex.: *"Atenção! As questões 4, 9 e 12 não foram respondidas"*).
  - Botão de ação: **"Voltar e responder questões pendentes"** (com redirecionamento direto para a questão).
  - Botão de entrega: **"Confirmar entrega"**.

### 4. Correção e Gabarito Explicado
- Nota calculada (0 a 10) e porcentagem de acertos.
- Feedback por questão:
  - Alternativa escolhida pelo aluno vs. alternativa correta.
  - **Explicação didática passo a passo** do porquê da resposta correta (essencial para o 6º ano).

### 5. Banco de Dados Local no Celular
- Estrutura no **IndexedDB** (persistente no Android):
  - Tabela de **Provas Realizadas**: data/hora, disciplina, assunto, nível, nota, total de acertos, tempo de prova.
  - Tabela de **Questões e Respostas**: texto da questão, opções, o que o aluno marcou, gabarito e explicação.
- Aba de **Histórico**:
  - Consulta de todas as notas anteriores.
  - Possibilidade de reabrir qualquer prova para rever as explicações.
  - Estatísticas gerais de evolução do estudante.

---

## Proposta de Mudanças e Estrutura de Arquivos

Diretório do projeto: `C:\Users\alexandre.farias\.gemini\antigravity\scratch\prova-facil-6ano`

### [NEW] Arquitetura da Aplicação

```
prova-facil-6ano/
├── index.html                 # PWA shell com meta tags mobile para Android
├── manifest.json               # Configuração PWA (ícone, nome, display standalone)
├── package.json               # Dependências: React, Lucide-React, Tailwind, Dexie (IndexedDB)
├── vite.config.js             # Configuração Vite com suporte a rede local (--host)
├── src/
│   ├── main.jsx               # Ponto de entrada
│   ├── App.jsx                # Controle de telas (Configuração, Prova, Resumo/Resultado, Histórico, Configurações de API)
│   ├── index.css              # Estilos Tailwind e animações mobile touch
│   ├── db/
│   │   └── database.js        # Banco de dados local Dexie / IndexedDB no Android
│   ├── services/
│   │   ├── gemini.js          # Chamada direta e otimizada à API do Google Gemini
│   │   └── mockQuestions.js   # Banco simulado de emergência para testar offline
│   └── components/
│       ├── Header.jsx         # Cabeçalho mobile com navegação e status
│       ├── ExamConfig.jsx     # Formulário de configuração da prova (disciplina, assunto, 10/20, dificuldade)
│       ├── ExamRunner.jsx     # Tela da prova interativa com alternativas e navegação
│       ├── PendingModal.jsx   # Modal de resumo e aviso de questões pendentes antes de entregar
│       ├── ExamResult.jsx     # Resultado, pontuação e gabarito comentado
│       ├── HistoryView.jsx    # Histórico de provas salvas no banco de dados local
│       └── ApiKeyModal.jsx    # Modal de configuração da chave gratuita do Gemini
```

---

## Plano de Verificação

### Testes Automatizados e de Build
- Instalação das dependências com `npm.cmd install`.
- Build de produção com `npm.cmd run build` para garantir zero erros de compilação ou TypeScript/JSX.

### Verificação Manual
1. Iniciar o servidor com `npm.cmd run dev -- --host`.
2. Testar no navegador emulando celular Android (viewport mobile):
   - Preencher disciplina, assunto, 10 questões, dificuldade Fácil.
   - Gerar prova (testar tanto com chave do Gemini quanto com o modo de demonstração).
   - Deixar propositalmente 2 questões em branco e clicar em "Finalizar Prova".
   - Verificar se o alerta de questões pendentes é exibido com os números exatos.
   - Clicar em "Voltar e responder" e checar se volta para as pendentes.
   - Preencher as restantes e entregar a prova.
   - Conferir se a nota e as explicações são exibidas corretamente.
   - Acessar a tela de "Histórico" e verificar se a prova ficou gravada no banco de dados local (IndexedDB).
   - Recarregar a página e garantir que os dados continuam salvos no dispositivo.
