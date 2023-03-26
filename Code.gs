function doGet() {
  return HtmlService.createHtmlOutputFromFile("index.html").setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function doPost(e) {
  const { playerName, timeTaken, moves } = JSON.parse(e.postData.contents);
  savePlayerResult(playerName, timeTaken, moves);
  return ContentService.createTextOutput(JSON.stringify({ result: 'success' })).setMimeType(ContentService.MimeType.JSON);
}
