const SPREADSHEET_ID = "1nP_o3Wov0TnZE_6H-9ah5qvt2bKgZ7L4s_FTuGhLVTo";
const SHEET_NAME = "Statistics";

function saveStatistics(playerName, moves,time, completed) {
  const sheet = getOrCreateSheet(SHEET_NAME);
  sheet.appendRow([playerName, moves, time, completed]);
}

function getOrCreateSheet(sheetName) {
  const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
  
  let sheet = spreadsheet.getSheetByName(sheetName);

  if (!sheet) {
    sheet = spreadsheet.insertSheet(sheetName);
    sheet.appendRow(['Name', 'Moves', 'Time', 'Completed']);
  }

  return sheet;
}

function loadStatistics() {
  const sheet = getOrCreateSheet(SHEET_NAME);
  const data = sheet.getDataRange().getValues().slice(1); // skip the header

  const sortedData = data.sort((a, b) => b[3] - a[3]); // Sort by completion state

  return sortedData.map(([name, moves, time, completed]) => ({ name, moves, time, completed }));
}