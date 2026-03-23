/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: { sans: ['Plus Jakarta Sans', 'sans-serif'] },
      colors: {
        dark: { 50:'#0a0a0f', 100:'#060609', 200:'#030306' },
        accent: { DEFAULT:'#6366f1', light:'#818cf8', dark:'#4f46e5', glow:'rgba(99,102,241,0.15)' },
        success: { DEFAULT:'#10b981', light:'#34d399' },
        danger: { DEFAULT:'#ef4444', light:'#f87171' },
        warning: { DEFAULT:'#f59e0b', light:'#fbbf24' },
        pink: { DEFAULT:'#ec4899', light:'#f472b6' }
      }
    }
  },
  plugins: []
};
