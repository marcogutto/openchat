# Open Chat

## Arquitetura

### Frontend
* create-react-app para configurar o nosso sistema de compilação, fornecendo:
* React, uma biblioteca de renderização que você provavelmente já ouviu falar.
* Webpack, uma ferramenta de 'build' (não vamos mexer com isso, mas apenas deixar o create-react-app lidar com isso).
* Jest, uma ferramenta de teste com ênfase no React.
* React Router v4, a última versão do 'router' mais popular para React.
* Material-UI, um componente de interface.

## Estrutura

```
openchat
  react
    └── public
      ├── favicon.ico
      ├── index.html
      └── manifest.json  
    └── src
      └── assets
        └── fonts
          Roboto-Light.ttf
      └── components
        └── layout
          └── container
            └── left-container
              ├── left-container.css
              └── left-container.jsx
            └── right-container
              ├── right-container.css
              └── right-container.jsx
      ├── index.css
      └── index.js
```
