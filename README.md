# Arvak Labs — Ideas Made Real (v1.1)

Portal independente de aplicativos, ferramentas, mods e experimentos, com catálogo local, pesquisa, filtros, páginas de projetos, portfólio e temas claro/escuro.

## Idiomas / Languages

English is the default. The header includes an EN / PT-BR language selector that saves the visitor’s preference in localStorage. Interface strings are in `src/data/i18n.js`; bilingual project descriptions are in `src/data/projects.js`.

## Projetos / Projects

The catalog includes 10 publicly confirmed repositories as of October 23, 2026. Pages links are included only for repositories showing `has_pages: true` in GitHub metadata. This is not proof of an accessible deployment. Test the links individually before promotion.

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
src/data/{projects,site,updates,i18n}.js
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

## Atualizar sem usar terminal (GitHub web)

Como o repositório já existe, a forma mais simples é abrir a página principal do projeto no GitHub e usar **Add file → Upload files**, enviando a estrutura atualizada; porém, o uploader de navegador pode não incluir arquivos/pastas ocultos como `.github/`. Confira se `.github/workflows/deploy.yml` aparece no repositório. Se estiver faltando, crie esse arquivo com **Add file → Create new file** e digite o caminho completo. Em Settings → Pages, selecione **GitHub Actions**. Na aba Actions, confira se o workflow compilou e publicou o site. Não envie apenas o ZIP como um arquivo único: ele precisa ser extraído antes do upload.

Para substituir arquivos já existentes, abra cada um no GitHub, clique no ícone de edição, substitua o conteúdo e confirme o commit. Para muitos arquivos de uma só vez, GitHub Desktop ou github.dev podem ser mais práticos do que o upload web.
