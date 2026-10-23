# Arvak Labs — Ideias que viram realidade

Portal independente de aplicativos, ferramentas, mods e experimentos, com catálogo local, pesquisa, filtros, páginas de projetos, portfólio e temas claro/escuro.

## Stack

Vue 3, Vue Router (hash), Vite, JavaScript, CSS, GitHub Actions e GitHub Pages. Sem backend, banco ou autenticação.

## Executar no Ubuntu

Requer Node.js 22 LTS ou versão compatível e npm.

```bash
node -v
npm -v
git --version
npm install
npm run dev
```

Abra o endereço mostrado pelo Vite (normalmente `http://localhost:5173/`).

## Build de produção

```bash
npm run build
npm run preview
```

O resultado está em `dist/`.

## Publicação no GitHub Pages

1. Crie no GitHub o repositório **público** `danielrosajr.github.io`, sem inicializá-lo com README.
2. Na pasta do projeto, execute:

```bash
git init
git branch -M main
git add .
git commit -m "feat: launch Arvak Labs v1.0"
git remote add origin https://github.com/danielrosajr/danielrosajr.github.io.git
git push -u origin main
```

3. Em **Settings → Pages → Build and deployment → Source**, selecione **GitHub Actions**.
4. Abra a aba **Actions**, acompanhe o workflow **Publicar Arvak Labs** até ficar verde. Se necessário, use `Run workflow` para iniciar novamente.
5. Acesse `https://danielrosajr.github.io/`.

O arquivo `.github/workflows/deploy.yml` já está pronto, e `vite.config.js` usa `base: '/'` para o repositório especial `username.github.io`.

**Autenticação:** ao executar push HTTPS, entre pelo Git Credential Manager ou GitHub CLI (`gh auth login`), ou use SSH previamente configurado. Não compartilhe tokens nem coloque credenciais no código.

## Editar conteúdo

| Arquivo | Uso |
|---|---|
| `src/data/projects.js` | Aplicativos e metadados |
| `src/data/site.js` | Perfil, links, categorias, tecnologias |
| `src/data/updates.js` | Novidades reais |
| `src/style.css` | Visual e responsividade |
| `public/` | Imagens e ícones |

Veja [COMO_ATUALIZAR.md](COMO_ATUALIZAR.md) para exemplos.

## Estrutura

```text
.github/workflows/deploy.yml
public/favicon.svg
public/og-cover.svg
src/components/ProjectCard.vue
src/data/{projects,site,updates}.js
src/views/{Home,Explore,ProjectDetail,About,Portfolio,NotFound}.vue
src/App.vue
src/main.js
src/style.css
index.html
vite.config.js
package.json
package-lock.json (gerado após npm install)
README.md
COMO_ATUALIZAR.md
.gitignore
```

## Links e dados

O portal não depende da API do GitHub em execução. Os links de projetos são editados manualmente. Não publique links privados, chaves de API ou dados pessoais. Imagens ausentes são substituídas por monogramas; projetos sem URL publicada não exibem botão de acesso.

## Contribuição e problemas

Abra um issue no repositório principal com descrição e etapas para reproduzir. Alterações podem ser propostas em pull requests. Licença não definida para este repositório; nenhuma permissão geral de reutilização é presumida.
