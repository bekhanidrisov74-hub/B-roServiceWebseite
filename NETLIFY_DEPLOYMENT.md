# Netlify Deployment-Anleitung für BM Solution Website

## 🚀 Komplette Schritt-für-Schritt-Anleitung

### Schritt 1: Git Repository einrichten

Öffnen Sie ein Terminal im Projektverzeichnis und führen Sie aus:

```powershell
# Git Repository initialisieren
git init

# Alle Dateien zum Repository hinzufügen
git add .

# Ersten Commit erstellen
git commit -m "Initial commit: BM Solution Website"
```

### Schritt 2: GitHub Repository erstellen (empfohlen)

1. Gehen Sie zu: **https://github.com**
2. Klicken Sie auf **"New Repository"** (grüner Button)
3. Repository-Name: `bm-solution-website`
4. **Wichtig:** Setzen Sie es auf **Private** (für geschäftliche Webseiten)
5. Klicken Sie auf **"Create repository"**

Nach der Erstellung führen Sie folgende Befehle aus:

```powershell
# Remote Repository hinzufügen (URL von GitHub kopieren)
git remote add origin https://github.com/IHR_USERNAME/bm-solution-website.git

# Code zu GitHub pushen
git branch -M main
git push -u origin main
```

### Schritt 3: Netlify Account erstellen

1. Gehen Sie zu: **https://www.netlify.com**
2. Klicken Sie auf **"Sign up"**
3. Wählen Sie **"Sign up with GitHub"** (empfohlen)
4. Autorisieren Sie Netlify mit Ihrem GitHub-Account

### Schritt 4: Website auf Netlify deployen

#### Option A: Über GitHub verbinden (empfohlen)

1. In Netlify klicken Sie auf **"Add new site"** → **"Import an existing project"**
2. Wählen Sie **"Deploy with GitHub"**
3. Suchen Sie nach `bm-solution-website` und wählen Sie es aus
4. Konfigurieren Sie die Build-Einstellungen:
   - **Branch to deploy:** `main`
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Klicken Sie auf **"Deploy site"**

#### Option B: Drag & Drop (schneller Test)

1. Führen Sie lokal aus: `npm run build`
2. In Netlify ziehen Sie den `dist` Ordner auf die Upload-Zone
3. ⚠️ **Nachteil:** Keine automatischen Updates bei Änderungen

### Schritt 5: Custom Domain konfigurieren (Optional)

1. Gehen Sie zu **Site settings** → **Domain management**
2. Klicken Sie auf **"Add custom domain"**
3. Geben Sie Ihre Domain ein (z.B. `bmsolution.at`)
4. Folgen Sie den DNS-Konfigurationsanweisungen
5. Netlify bietet kostenloses SSL/HTTPS über Let's Encrypt

### Schritt 6: Umgebungsvariablen setzen

Für Ihr Kontaktformular müssen Sie den Web3Forms API-Key als Umgebungsvariable setzen:

1. Gehen Sie zu **Site settings** → **Environment variables**
2. Klicken Sie auf **"Add a variable"**
3. Key: `VITE_WEB3FORMS_KEY`
4. Value: Ihr Web3Forms Access Key
5. Klicken Sie auf **"Save"**

**Dann in `src/components/Kontakt.tsx` ändern Sie:**

```typescript
access_key: import.meta.env.VITE_WEB3FORMS_KEY || 'YOUR_WEB3FORMS_ACCESS_KEY',
```

## 📋 Wichtige Build-Einstellungen

Die Datei `netlify.toml` in Ihrem Projektstamm enthält alle Konfigurationen:

- **Build Command:** `npm run build`
- **Publish Directory:** `dist`
- **Node Version:** 18 oder höher

## 🔄 Continuous Deployment

Nach dem Setup:
- Jeder Push zu GitHub → Automatisches Deployment auf Netlify
- Preview Deployments für Pull Requests
- Rollback zu älteren Versionen möglich

## 🌐 Ihre Website ist live!

Nach dem Deployment erhalten Sie URLs wie:
- Netlify-Subdomain: `https://ihr-site-name.netlify.app`
- Custom Domain: `https://bmsolution.at` (nach DNS-Konfiguration)

## 🛠️ Nützliche Netlify-Features

### 1. **Formulare (Alternative zu Web3Forms)**
Netlify hat eingebaute Form-Handling:
- Bis zu 100 Submissions/Monat kostenlos
- Spam-Schutz integriert
- E-Mail-Benachrichtigungen

### 2. **Analytics**
- Serverless Analytics verfügbar
- DSGVO-konform
- Keine Cookies erforderlich

### 3. **Functions**
- Serverless Functions für Backend-Logik
- Ideal für API-Endpoints

### 4. **Deploy Hooks**
- Automatische Rebuilds per Webhook
- Integration mit CMS-Systemen

## ⚡ Performance-Optimierungen

Netlify bietet automatisch:
- ✅ Global CDN
- ✅ Asset-Optimierung
- ✅ HTTP/2
- ✅ GZIP/Brotli-Kompression
- ✅ Caching
- ✅ Free SSL/HTTPS

## 🔍 Troubleshooting

### Problem: 404 bei React Router
Wird automatisch durch `netlify.toml` gelöst mit der Redirect-Rule.

### Problem: Build schlägt fehl
Überprüfen Sie:
1. Node-Version (mindestens 18)
2. Dependencies sind in `package.json`
3. Build-Command ist korrekt

### Problem: Umgebungsvariablen funktionieren nicht
- Stellen Sie sicher, dass sie mit `VITE_` beginnen
- Rebuild nach dem Hinzufügen von Variablen

## 💰 Kosten

Netlify Free Tier enthält:
- ✅ 100 GB Bandbreite/Monat
- ✅ 300 Build-Minuten/Monat
- ✅ Unlimitierte Websites
- ✅ Free SSL
- ✅ Continuous Deployment
- ✅ Form Submissions (100/Monat)

Für BM Solution vollkommen ausreichend! 🎉

## 📞 Support

- Netlify Docs: https://docs.netlify.com
- Netlify Community: https://answers.netlify.com
- Status: https://www.netlifystatus.com

---

**Geschätzte Zeit für komplettes Setup:** 15-20 Minuten
**Schwierigkeitsgrad:** Einfach bis mittel
