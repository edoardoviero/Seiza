# Seiza · sito e candidature, pronto per Vercel

## Cosa c'è
- `index.html`: il sito (Italia 3D, Stazione Sirio, #SeizaCourt).
- `candidatura/index.html`: l'applicativo per candidarsi a #SeizaCourt (seiza.it/candidatura/).
- `favicon.svg`, `favicon.ico`, `apple-touch-icon.png`, `og-image.png`: icone e anteprima per i social.
- `vercel.json`: indirizzi puliti.
- `google-sheets/Code.gs`: lo script che salva le candidature in un Foglio Google.

Sono pagine statiche: nessun build, nessuna dipendenza da installare. Three.js e i font arrivano da cdnjs e Google Fonts.

## Pubblicare su Vercel
1. Vai su vercel.com > Add New > Project.
2. Trascina questa cartella (oppure caricala su un repository GitHub e importalo).
3. Framework preset: "Other". Build command: vuoto. Output directory: `.` (la radice).
4. Deploy. Avrai un indirizzo tipo `seiza-xxx.vercel.app` per controllare tutto.

## Collegare il dominio (oggi su Netlify)
1. In Vercel: Project > Settings > Domains > aggiungi `seiza.it` e `www.seiza.it`.
2. Vercel mostra i record DNS da impostare (di solito un record A per `seiza.it` e un CNAME per `www`).
3. Modificali dove sono gestiti oggi i DNS (Netlify o il registrar).
4. ATTENZIONE: non toccare i record della posta (MX, SPF/TXT, autodiscover di Outlook). Cambia solo A e CNAME del sito.
5. Quando Vercel segna il dominio come valido, il sito Netlify può essere spento.

## Attivare le candidature (dopo l'informativa privacy)
1. Segui le istruzioni in cima a `google-sheets/Code.gs` e copia l'URL della App web.
2. Apri `candidatura/index.html`, cerca `const CONFIG=` e incolla:
   - `SHEETS_URL`: l'URL della App web di Google Apps Script;
   - `PRIVACY_URL`: il link all'informativa privacy di Stefano.
3. Con `PRIVACY_URL` compilato compare la casella di consenso obbligatoria prima dell'invio.
4. Finché `SHEETS_URL` è vuoto, l'applicativo funziona in anteprima e non invia nulla.

## Da completare
- Loghi di Stazione Sirio nella pagina della stazione (in attesa del pack).
- Informativa privacy (Stefano).
