# FIIs App

App web gratuito para acompanhamento de FIIs com HTML, CSS, JS, Firebase, GitHub e Vercel.

## Recursos
- listagem de FIIs
- busca e filtros
- favoritos
- carteira com preço médio
- calendário de dividendos
- login com Google

## Como rodar localmente
Basta servir a pasta `public` em um servidor local.

Exemplo com VS Code:
- instalar extensão Live Server
- abrir `public/index.html`
- iniciar Live Server

## Como configurar Firebase
1. Criar projeto no Firebase
2. Ativar Authentication com Google
3. Ativar Firestore Database
4. Copiar credenciais do projeto
5. Colar em `public/js/firebase-config.js`

## Estrutura do banco
- `users/{uid}/portfolio`
- `users/{uid}/favorites`

## Como subir no GitHub
1. criar repositório
2. subir os arquivos
3. fazer push para `main`

## Como publicar na Vercel
1. conectar a conta GitHub à Vercel
2. importar o repositório
3. manter framework como `Other`
4. definir root como padrão do projeto
5. deploy

## Observações
- a base `fiis.json` é demonstrativa
- para produção, atualize os dados periodicamente
- o app permanece gratuito enquanto o uso ficar dentro das cotas grátis dos serviços