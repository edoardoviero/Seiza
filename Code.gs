/**
 * Seiza · candidature #SeizaCourt → Google Sheets
 * 1. Crea un Foglio Google, poi Estensioni > Apps Script e incolla questo file.
 * 2. Esegui > Distribuisci > Nuova distribuzione > Tipo "App web".
 *    Esegui come: te stesso. Chi ha accesso: Chiunque.
 * 3. Copia l'URL della App web e incollalo in candidatura/index.html,
 *    nella riga: const CONFIG={SHEETS_URL:'',PRIVACY_URL:''};
 * Ogni candidatura diventa una riga. Le colonne si creano da sole alla prima candidatura.
 */
function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const data = JSON.parse(e.postData.contents);
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Candidature')
      || SpreadsheetApp.getActiveSpreadsheet().insertSheet('Candidature');
    const keys = Object.keys(data);
    if (sheet.getLastRow() === 0) sheet.appendRow(keys);
    const header = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    keys.forEach(k => { if (header.indexOf(k) === -1) { header.push(k); sheet.getRange(1, header.length).setValue(k); } });
    sheet.appendRow(header.map(h => data[h] !== undefined ? data[h] : ''));
    return ContentService.createTextOutput(JSON.stringify({ ok: true })).setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}
