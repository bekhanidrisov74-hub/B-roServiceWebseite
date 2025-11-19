# 🚀 Schnellstart: Netlify Deployment

## Schritt 1: Git Repository erstellen
```powershell
git init
git add .
git commit -m "Initial commit: BM Solution Website"
```

## Schritt 2: GitHub Repository erstellen und pushen
1. Gehen Sie zu https://github.com und erstellen Sie ein neues Repository
2. Dann:
```powershell
git remote add origin https://github.com/IHR_USERNAME/bm-solution-website.git
git branch -M main
git push -u origin main
```

## Schritt 3: Netlify Deployment
1. Gehen Sie zu https://www.netlify.com
2. Sign up mit GitHub
3. "Add new site" → "Import an existing project"
4. Wählen Sie Ihr Repository
5. Build-Einstellungen:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. "Deploy site" klicken

## ✅ Fertig!
Ihre Website ist in 2-3 Minuten live! 🎉

---

## 🔄 Updates deployen
Nach dem initialen Setup:
```powershell
git add .
git commit -m "Beschreibung der Änderungen"
git push
```
→ Netlify deployt automatisch!

---

## 🌐 Ihre URLs
- Netlify: https://IHR-SITE-NAME.netlify.app
- Custom Domain: Unter Site Settings → Domain management konfigurieren

---

## 🔑 Web3Forms API Key setzen
Site Settings → Environment variables → Add variable:
- Key: `VITE_WEB3FORMS_KEY`
- Value: Ihr Access Key

Dann in `src/components/Kontakt.tsx`:
```typescript
access_key: import.meta.env.VITE_WEB3FORMS_KEY || 'fallback-key',
```

---

**Zeit bis zur Live-Website:** 10-15 Minuten
**Schwierigkeit:** Einfach ⭐⭐☆☆☆
