# Web3Forms Setup-Anleitung

## So richten Sie das Kontaktformular ein:

### Schritt 1: Web3Forms Access Key erhalten

1. Gehen Sie zu: **https://web3forms.com**
2. Klicken Sie auf **"Get Started for Free"**
3. Geben Sie Ihre E-Mail-Adresse ein: **office@bmsolution.at**
4. Sie erhalten einen **Access Key** per E-Mail

### Schritt 2: Access Key in die Webseite einfügen

1. Öffnen Sie die Datei: `src/components/Kontakt.tsx`
2. Suchen Sie nach Zeile 96 (ungefähr)
3. Ersetzen Sie `YOUR_WEB3FORMS_ACCESS_KEY` durch Ihren echten Access Key:

```typescript
access_key: 'IHR_ECHTER_ACCESS_KEY_HIER',
```

### Schritt 3: Testen

1. Speichern Sie die Datei
2. Öffnen Sie die Webseite: http://localhost:5173
3. Scrollen Sie zum Kontaktformular
4. Füllen Sie alle Felder aus und senden Sie eine Testanfrage
5. Überprüfen Sie Ihr E-Mail-Postfach: **office@bmsolution.at**

## Features des Kontaktformulars

✅ **E-Mail-Versand** direkt an office@bmsolution.at  
✅ **Keine Backend-Server** erforderlich  
✅ **Kostenlos** (bis zu 250 E-Mails pro Monat im Free Plan)  
✅ **Spam-Schutz** integriert  
✅ **Erfolgsmeldungen** und Fehlerbehandlung  
✅ **Loading-Animation** während des Sendens  

## Was passiert beim Absenden?

1. Benutzer füllt das Formular aus
2. Formular wird validiert
3. Daten werden an Web3Forms API gesendet
4. Web3Forms leitet die E-Mail an office@bmsolution.at weiter
5. Benutzer sieht Erfolgsmeldung
6. Sie erhalten eine E-Mail mit allen Formularinformationen:
   - Name
   - E-Mail
   - Telefon
   - Unternehmen
   - Gewünschtes Paket
   - Nachricht

## Alternative: FormSpree

Falls Sie lieber FormSpree verwenden möchten:

1. Gehen Sie zu: https://formspree.io
2. Registrieren Sie sich mit office@bmsolution.at
3. Erstellen Sie ein neues Formular
4. Kopieren Sie den Form-Endpoint
5. Ersetzen Sie in Kontakt.tsx die URL:
   ```typescript
   const response = await fetch('https://formspree.io/f/IHR_FORMSPREE_ID', {
   ```

## Support

Bei Fragen oder Problemen:
- Web3Forms Dokumentation: https://docs.web3forms.com
- FormSpree Dokumentation: https://help.formspree.io
