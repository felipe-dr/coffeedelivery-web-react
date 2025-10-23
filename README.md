<p align="center">
  <h1 align="center">Coffee Delivery - Desafio 02</h1>
  <p align="center">Projeto desenvolvido durante a formação <strong>React.js</strong>.</p>
</p>

<p align="center">
  <img src="https://img.shields.io/github/repo-size/felipe-dr/coffeedelivery-web-react?style=for-the-badge&color=4e5acf" alt="Repo size" />
  <a aria-label="Last Commit" href="https://github.com/felipe-dr/coffeedelivery-web-react/commits/main">
    <img src="https://img.shields.io/github/last-commit/felipe-dr/coffeedelivery-web-react?style=for-the-badge&color=4e5acf" alt="Last commit on GitHub" />
  </a>
  <!-- <img src="https://img.shields.io/badge/license-MIT-4e5acf?style=for-the-badge" alt="License" /> -->
  <img src="https://img.shields.io/badge/status-em andamento-blue?style=for-the-badge" alt="Status" />
</p>

<br>

<p align="center">
  <a target="_blank" href="https://react.dev/">
    <img src="https://img.shields.io/static/v1?style=plastic&color=red&label=React.js&message=TS&logo=react" alt="React.js" />
  </a>
  <a target="_blank" href="https://www.typescriptlang.org/">
    <img src="https://img.shields.io/static/v1?style=plastic&color=red&label=Typescript&message=TS&logo=typescript" alt="Typescript" />
  </a>
  <a target="_blank" href="https://reactrouter.com/">
    <img src="https://img.shields.io/static/v1?style=plastic&color=red&label=ReactRouter&message=TS&logo=reactrouter" alt="ReactRouter" />
  </a>
  <a target="_blank" href="https://react-hook-form.com/">
    <img src="https://img.shields.io/static/v1?style=plastic&color=red&label=ReactHookForm&message=TS&logo=react-hook-form" alt="ReactHookForm" />
  </a>
  <a target="_blank" href="https://zod.dev/">
    <img src="https://img.shields.io/static/v1?style=plastic&color=red&label=Zod&message=TS&logo=zod" alt="Zod" />
  </a>
  <a target="_blank" href="https://date-fns.org/">
    <img src="https://img.shields.io/static/v1?style=plastic&color=red&label=Date-fns&message=TS&logo=datefns" alt="Date-fns" />
  </a>
  <a target="_blank" href="https://immerjs.github.io/immer/">
    <img src="https://img.shields.io/static/v1?style=plastic&color=red&label=Immer&message=TS&logo=immer" alt="Immer" />
  </a>
  <a target="_blank" href="https://phosphoricons.com/">
    <img src="https://img.shields.io/static/v1?style=plastic&color=red&label=Phosphoricons&message=TS&logo=phosphoricons" alt="Phosphoricons" />
  </a>
  <a target="_blank" href="https://vite.dev/">
    <img src="https://img.shields.io/static/v1?style=plastic&color=red&label=Vite&message=TS&logo=vite" alt="Vite" />
  </a>
</p>

<p align="center">
  <a target="_blank" href="https://styled-components.com/">
    <img src="https://img.shields.io/static/v1?style=plastic&color=red&label=StyledComponents&message=TS&logo=styled-components" alt="StyledComponents" />
  </a>
</p>

## Índice

<ol>
  <li><a href="#sobre">Sobre</a></li>
  <li><a href="#requisitos-e-funcionalidades">Requisitos e funcionalidades</a></li>
  <li><a href="#como-executar">Como executar</a></li>
  <li><a href="#tecnologias">Tecnologias</a></li>
  <li><a href="#autor">Autor</a></li>
</ol>

## Sobre

Aplicação de coffee delivery desenvolvida em React.js com o Vite e Typescript, afim de possibilitar que o usuário liste cafés disponíveis, gerencie um carrinho de compras e finalize pedidos.

## Requisitos e funcionalidades

- [ ] O usuário deve visualizar a listagem de cafés disponíveis com nome, descrição, preço e opções de quantidade;
- [ ] O usuário pode adicionar uma quantidade específica de cafés ao carrinho;
- [ ] O usuário pode aumentar ou diminuir a quantidade de itens já no carrinho;
- [ ] O usuário deve conseguir remover itens individualmente do carrinho;
- [ ] No Header deve aparecer o total de itens adicionados ao carrinho;
- [ ] Deve existir um formulário de endereço de entrega, com campos validados ( CEP, rua, bairro, cidade, UF, etc );
- [ ] O usuário deve escolher o método de pagamento ( cartão de crédito, débito ou dinheiro );
- [ ] O sistema deve exibir o valor total da compra, calculado a partir da soma dos itens e suas quantidades;
- [ ] Após confirmar, deve ser exibida uma página de sucesso do pedido, contendo o resumo do endereço e pagamento;

## Como executar

Se estiver utilizando outro gerenciador de pacotes, basta trocar o `pnpm` por `npm`, `yarn`, etc.

### Pré-requisitos

- Node.js ( versão 14 ou superior )

Instalar as dependências do projeto.

```bash
pnpm install
```

### Localmente

```bash
pnpm dev
```

A aplicação estará disponível em http://localhost:3000.

## Tecnologias

- [React.js](https://react.dev/)
- [Typescript](https://www.typescriptlang.org/)
- [ReactRouter](https://reactrouter.com/)
- [ReactHookForm](https://react-hook-form.com/)
- [Zod](https://zod.dev/)
- [Date-fns](https://date-fns.org/)
- [Immer](https://immerjs.github.io/immer/)
- [Phosphoricons](https://phosphoricons.com/)
- [Vite](https://vite.dev/)
- [StyledComponents](https://styled-components.com/)

> **DICA !**
>
> Todas as demais dependências utilizadas podem ser visualizados acessando o [package.json](./package.json).

## Autor

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/felipe-dr">
        <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/62888625?s=96&v=4" width="100px;" alt="Avatar do autor" />
        <br />
        <sub>
          <b>Felipe DR</b>
        </sub>
      </a>
      <br />
      <a href="mailto:felipe.corp7@gmail.com" title="E-mail">📩</a>
    </td>
  </tr>
</table>
