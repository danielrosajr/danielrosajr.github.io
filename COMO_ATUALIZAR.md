# Como atualizar o Arvak Labs

## 1. Abrir e executar

```bash
cd arvak-labs
npm install
npm run dev
```

## 2. Adicionar projeto

Edite `src/data/projects.js` e acrescente um objeto ao array `projects`, mantendo os demais. Exemplo de estrutura (altere tudo para dados reais):

```js
{
  id: 'meu-projeto', slug: 'meu-projeto', name: 'Meu Projeto',
  monogram: 'MP', categories: ['Aplicativos'],
  short: 'Descrição curta do projeto.',
  description: 'Descrição completa do que o projeto faz.',
  problem: 'Problema resolvido.',
  features: ['Função principal'], technologies: ['JavaScript'],
  status: 'Em desenvolvimento', featured: false,
  updated: '2026-10-23', version: '',
  liveUrl: '', repoUrl: '', docsUrl: '',
  challenges: [], learnings: [], cover: '', screenshots: []
}
```

**Não crie duas entradas com o mesmo `id` ou `slug`.** Campos opcionais como URLs, versão e imagens podem ficar vazios. Os valores possíveis de `status` estão em `src/data/site.js`.

## 3. Editar categoria, tecnologia e status

Altere `categories`, `technologies` ou `status` no mesmo objeto. Adicione uma categoria nova ao array `categories` em `src/data/site.js` antes de utilizá-la.

## 4. Adicionar imagens

Coloque a capa, por exemplo, em `public/images/meu-projeto.png` e use `cover: '/images/meu-projeto.png'`. Para capturas, use `screenshots: ['/images/tela1.png']`. Prefira imagens otimizadas em WebP. O caminho é absoluto em relação à raiz deste site principal.

## 5. Definir links

Em `liveUrl` insira o URL público e testado do app, em `repoUrl` o repositório público, e em `docsUrl` a documentação. Caso não existam, mantenha `''`; botões vazios não aparecem.

## 6. Atualizar novidades

Adicione entradas verificadas em `src/data/updates.js`, por exemplo:

```js
export const updates = [
  {date:'2026-10-23',title:'Lançamento publicado',text:'Descrição breve.',slug:'meu-projeto'}
]
```

## 7. Publicar atualizações

```bash
npm run build
git add .
git commit -m "feat: update project catalog"
git push
```

Confira **Actions** no GitHub e abra o site após a execução ficar verde. Para alterações em outros computadores, faça `git pull` antes de editar.

## Problemas comuns

- **Página branca:** abra F12 → Console e inspecione erros de JavaScript. Rode `npm install && npm run build`.
- **CSS ou scripts 404:** confirme que o repositório se chama exatamente `danielrosajr.github.io` e que `base: '/'` está em `vite.config.js`.
- **Erro 404 em página de projeto:** use URLs com `/#/projeto/slug`, porque o portal utiliza roteamento por hash.
- **Workflow falhou:** veja o passo com erro em **Actions**. Verifique `npm install`, `package-lock.json` e a seleção **Settings → Pages → GitHub Actions**.
- **Push negado:** verifique o remote (`git remote -v`) e autentique com `gh auth login` ou SSH, sem colocar senhas no repositório.
