# Configuração do Firebase - Infinity OS

Para que você e sua namorada possam fazer login e gerenciar as finanças na mesma conta, siga estes passos:

## 1. Criar o projeto no Firebase

1. Acesse [Firebase Console](https://console.firebase.google.com/)
2. Clique em **"Adicionar projeto"** (ou use um existente)
3. Dê um nome (ex: `infinity-os`) e continue
4. O Google Analytics é opcional — pode desativar se quiser
5. Clique em **"Criar projeto"**

## 2. Ativar Authentication (E-mail/senha)

1. No menu lateral, vá em **"Authentication"** (Build > Authentication)
2. Clique em **"Começar"**
3. Aba **"Sign-in method"** → clique em **"E-mail/senha"**
4. Ative a primeira opção (**"E-mail/senha"**) e salve

## 3. Criar o usuário compartilhado

1. Na mesma tela de Authentication, abra a aba **"Users"**
2. Clique em **"Adicionar usuário"**
3. Cadastre um **e-mail** e **senha** que vocês dois vão usar
   - Ex: `eduardo.klara@gmail.com` e uma senha que ambos conheçam
4. Clique em **"Adicionar usuário"**

## 4. Criar o Firestore Database

1. No menu lateral, vá em **"Firestore Database"** (Build > Firestore Database)
2. Clique em **"Criar banco de dados"**
3. Escolha **"Começar no modo de produção"** (as regras serão ajustadas no próximo passo)
4. Escolha a região mais próxima (ex: `southamerica-east1` para São Paulo)
5. Clique em **"Ativar"**

## 5. Configurar as regras de segurança

1. Na tela do Firestore, abra a aba **"Regras"**
2. Substitua o conteúdo pelas regras do arquivo `firestore.rules` deste projeto
3. Ou copie e cole:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

4. Clique em **"Publicar"**

## 6. Obter a configuração do app

1. Clique no ícone de **engrenagem** ao lado de "Visão geral do projeto"
2. Em **"Seus aplicativos"**, clique no ícone **Web** `</>`
3. Dê um nome ao app (ex: `Infinity OS`) e registre
4. Copie o objeto `firebaseConfig` que aparecer

## 7. Colar no seu projeto

1. Abra o arquivo **`firebase-config.js`**
2. Substitua os valores do objeto `firebaseConfig` pelos que você copiou:

```javascript
const firebaseConfig = {
    apiKey: "sua-api-key-aqui",
    authDomain: "seu-projeto.firebaseapp.com",
    projectId: "seu-projeto-id",
    storageBucket: "seu-projeto.appspot.com",
    messagingSenderId: "123456789",
    appId: "1:123456789:web:abc123"
};
```

3. Salve o arquivo

## Pronto

Agora, quando você ou sua namorada acessarem o Infinity OS:

- A tela de login será exibida
- Usem o **mesmo e-mail e senha** que criaram no passo 3
- Os dados financeiros serão sincronizados em tempo real entre os dois
- Se já havia dados no navegador, eles serão migrados na primeira conexão

## Hospedagem (opcional)

Para usar de qualquer lugar (celular, computador, etc.):

- O Firebase oferece **Firebase Hosting** grátis
- Ou use **GitHub Pages**, **Vercel** ou **Netlify** para publicar o projeto
- O `index.html` e `firebase-config.js` precisam estar no mesmo diretório
