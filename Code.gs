function doGet() {
  return HtmlService.createHtmlOutputFromFile("index.html").setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}
