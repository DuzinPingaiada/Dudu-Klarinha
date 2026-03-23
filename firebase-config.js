/**
 * Firebase Configuration - Infinity OS
 * 
 * Para configurar:
 * 1. Acesse https://console.firebase.google.com/
 * 2. Crie um projeto (ou use existente)
 * 3. Em "Authentication" > "Sign-in method" > habilite "E-mail/senha"
 * 4. Em "Firestore Database" > "Criar banco" (modo produção)
 * 5. Em "Configurações do projeto" (ícone engrenagem) > "Seus apps" > Web
 * 6. Copie o firebaseConfig e cole abaixo
 */

const firebaseConfig = {
    apiKey: "COLOQUE_SUA_API_KEY_AQUI",
    authDomain: "SEU_PROJETO.firebaseapp.com",
    projectId: "SEU_PROJETO_ID",
    storageBucket: "SEU_PROJETO.appspot.com",
    messagingSenderId: "SEU_SENDER_ID",
    appId: "SEU_APP_ID"
};
