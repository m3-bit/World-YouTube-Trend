function doGet() {
  var htmlTemplate = HtmlService.createTemplateFromFile('index');
  var htmlOutput = htmlTemplate.evaluate()
    .setTitle('World YouTube Trend')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1, user-scalable=no');
  return htmlOutput
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent()
}

function getData(la) {
  var url = 'https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&videoCategoryId=28&key=AIzaSyDVDZqLpXIiesjPLn9L4yKQeenCp2CyL1g&regionCode=' + la;
  var response = UrlFetchApp.fetch(url, { 'muteHttpExceptions': true });
  var json = response.getContentText();
  var data = JSON.parse(json);
  return data
}