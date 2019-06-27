# Open Chat

## Arquitetura

### Frontend
* create-react-app para configurar o nosso sistema de compilação, fornecendo:
* React, uma biblioteca de renderização que você provavelmente já ouviu falar.
* Bootstrap, um componente de interface.

#### Estrutura

```
openchat
  react
    └── public
      ├── favicon.ico
      ├── index.html
      └── manifest.json  
    └── src
      └── assets
        ├── fonts
          └── Roboto-Light.ttf
      └── components
        └── chat
          └── chat-form.jsx
          └── chat-list.jsx
          └── chat-message.jsx
        └── container
          └── container.jsx
        └── login
          └── login.css
          └── login.jsx
      ├── index.css
      └── index.js
```

#### Bootstrap

A configuração foi feita em react/public/index.html adicionando as configurações:
```
/* Na HEAD */
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">

/* No fim do BODY */
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>

```

### Backend
* GraphQL, um framework que vamos utilizar como nossa API
