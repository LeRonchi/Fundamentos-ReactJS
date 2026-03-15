# 📌 Fundamentos ReactJS

Projeto em desenvolvimento criado para estudar os **fundamentos do
ReactJS utilizando Vite**.\
A aplicação tem como objetivo praticar **componentização, organização de estrutura, props e estilização com CSS Modules**.

Este repositório faz parte do meu processo de aprendizado durante a
graduação em **Análise e Desenvolvimento de Sistemas**, com foco em
desenvolvimento front-end moderno.

------------------------------------------------------------------------

## 🚧 Status do Projeto

⚙️ **Em desenvolvimento**

O projeto ainda está evoluindo conforme avanço nos estudos de React.
Novas funcionalidades e melhorias serão adicionadas progressivamente.

------------------------------------------------------------------------

## 🛠️ Tecnologias Utilizadas

-   ReactJS
-   Vite
-   JavaScript (ES6+)
-   CSS Modules
-   HTML5

------------------------------------------------------------------------

## 📂 Estrutura do Projeto

    fundamentos-reactjs
    │
    ├── assets
    │   └── ignite-logo.svg
    │
    ├── components
    │   ├── Header.jsx
    │   ├── Header.module.css
    │   ├── Sidebar.jsx
    │   └── Sidebar.module.css
    │
    ├── App.jsx
    ├── App.module.css
    ├── global.css
    ├── main.jsx
    └── Post.jsx

------------------------------------------------------------------------

## 📚 Conceitos Praticados

-   Componentização
-   Props
-   Estruturação de projetos React
-   CSS Modules
-   Organização de código
-   Layout com Grid

Exemplo de componente utilizado no projeto:

``` jsx
export function Post(props) {
  return (
    <div>
      <strong>{props.author}</strong>
      <p>{props.content}</p>
    </div>
  )
}
```

------------------------------------------------------------------------


## 🌐 Projeto Online

Veja o projeto rodando:

https://leronchi.github.io/fundamentos-reactjs

------------------------------------------------------------------------

## 👨‍💻 Autor

**Leandro Ronchi**

🎓 Estudante de Análise e Desenvolvimento de Sistemas\
💻 Interessado em tecnologia, infraestrutura e desenvolvimento

GitHub:\
https://github.com/LeRonchi
