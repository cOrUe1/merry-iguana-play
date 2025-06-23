function doPost(e) {
  var sheetId = 'ID_DEL_TUO_FOGLIO_GOOGLE'; // <<< SOSTITUISCI CON L'ID DEL TUO FOGLIO GOOGLE
  var sheet = SpreadsheetApp.openById(sheetId).getActiveSheet();

  var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
  var rowData = [];

  // Ensure the order of data matches the headers in the sheet
  // The order here must match the order of headers in your Google Sheet
  // e.g., Timestamp, Nome, Cognome, Email, Numero, Consenso Privacy, Prodotto
  rowData.push(e.parameter.Timestamp);
  rowData.push(e.parameter.Nome);
  rowData.push(e.parameter.Cognome);
  rowData.push(e.parameter.Email);
  rowData.push(e.parameter.Numero);
  rowData.push(e.parameter['Consenso Privacy']); // Use bracket notation for spaces
  rowData.push(e.parameter.Prodotto);

  sheet.appendRow(rowData);

  return ContentService.createTextOutput(JSON.stringify({ "result": "success", "row": rowData }))
    .setMimeType(ContentService.MimeType.JSON);
}