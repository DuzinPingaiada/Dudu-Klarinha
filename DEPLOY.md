# Publicar o Infinity OS para usar no celular

Para usar o app no celular sem erros, publique-o na internet. É grátis e leva 2 minutos.

## Opção 1: Firebase Hosting (recomendado - você já tem o projeto)

1. Instale o Firebase CLI (uma vez só):
   ```
   npm install -g firebase-tools
   ```

2. Faça login:
   ```
   firebase login
   ```

3. Publique:
   ```
   firebase deploy
   ```

4. Pronto! O app estará em: **https://infinity-os-ba26f.web.app**

   Abra esse link no celular e salve como favorito ou instale como app (PWA).

---

## Opção 2: Vercel (alternativa simples)

1. Acesse [vercel.com](https://vercel.com) e faça login com GitHub
2. Clique em "Add New" → "Project"
3. Importe a pasta do projeto (ou conecte o repositório)
4. Clique em "Deploy"
5. Você receberá uma URL tipo: **https://euiklara.vercel.app**

---

## Depois de publicar

- Abra a URL no celular
- Use "Instalar no celular" (o banner que aparece)
- O app funcionará como um app nativo, sem erros
