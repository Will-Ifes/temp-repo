# Posts · busca e testes de interface

Aplicação React que combina posts e imagens do JSONPlaceholder, com busca e carregamento incremental.

Estudo com Create React App e Testing Library. O nome do repositório é histórico.

## Destaques

- Consulta paralela de posts e imagens.
- Busca por título e estado vazio.
- Carregamento incremental.
- Arquivos de testes de componentes e da página Home.

<details>
<summary><strong>Organização e código</strong></summary>

### Por dentro do código

| Código | O que observar |
| --- | --- |
| [`src/utils/load-posts.js`](src/utils/load-posts.js) | Consulta e combinação dos dados. |
| [`src/templates/Home/index.jsx`](src/templates/Home/index.jsx) | Busca e paginação. |
| [`src/templates/Home/Home.spec.jsx`](src/templates/Home/Home.spec.jsx) | Teste da página. |
| [`src/components/Button/Button.spec.jsx`](src/components/Button/Button.spec.jsx) | Teste de componente. |

</details>

<details>
<summary><strong>Executar e consultar</strong></summary>

### Executar localmente

Requer Node.js e npm compatíveis com as dependências versionadas.

```bash
git clone https://github.com/Will-Ifes/temp-repo.git
cd temp-repo
npm install
npm start
```

Abra o endereço informado pelo servidor no terminal.

### Comandos disponíveis

| Comando | Script versionado |
| --- | --- |
| `npm start` | `react-scripts start` |
| `npm run build` | `react-scripts build` |
| `npm test` | `react-scripts test` |

</details>

<details>
<summary>Escopo e referências</summary>

Depende de APIs externas. A atualização da lista e as dependências do efeito de carregamento são pontos de revisão para evitar comportamento inesperado.

</details>

---

Mantido por **Will Oliveira** · [Perfil](https://github.com/Will-Ifes) · [LinkedIn](https://www.linkedin.com/in/wildemberg-de-jesus-oliveira/)
