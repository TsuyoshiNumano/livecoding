function doGet(e) {
  var todo = e.parameter.todo;
  var sheet = SpreadsheetApp.getActiveSheet();
  sheet.appendRow([todo])
  var data = getAllData();
  return ContentService.createTextOutput(JSON.stringify(data)).setMimeType(ContentService.MimeType.JSON);
}

function getAllData() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var data = sheet.getRange("A1:A"+ sheet.getLastRow()).getValues();
  var returnValue = [];
  data.map(function(d){
    returnValue.push(d[0])
  })
  return returnValue
}

