function init() {
  var formDivId = document.createElement("div");
  formDivId.setAttribute('id', 'search-form');
  var label = document.createElement("div");
  label.setAttribute('id', 'label');
  label.innerHTML = "YouTube Query Search";
  formDivId.appendChild(label);

  var lineBreak = document.createElement("br");
  formDivId.appendChild(lineBreak);

  var inputType = document.createElement("input");
  inputType.setAttribute("type", "text");
  inputType.setAttribute("id", "incomingQuery");
  inputType.setAttribute("name", "inputQuery");
  inputType.setAttribute("placeholder", "Enter the keyword");
  inputType.setAttribute("size", 50);
  formDivId.appendChild(inputType);

  var button = document.createElement("button");
  button.setAttribute("id", "querySearch");
  button.setAttribute('onclick', 'searchByKeyword();');
  button.innerHTML = "Search";
  formDivId.appendChild(button);

  var nextButton = document.createElement("button");
  nextButton.setAttribute("id", "buttonNext");
  nextButton.innerHTML = "Next Page";
  nextButton.setAttribute("onclick", "nextPage()");
  formDivId.appendChild(nextButton);

  var lineBreak = document.createElement("br");
  formDivId.appendChild(lineBreak);

  var prevButton = document.createElement("button");
  prevButton.setAttribute("id", "buttonPrev");
  prevButton.innerHTML = "Previous Page";
  prevButton.setAttribute("onclick", "prevPage()");
  formDivId.appendChild(prevButton);

  // var label = document.createElement("label");
  // label.setAttribute("name:","current page number");
  // var currentPageNumber = document.createElement("input");
  // currentPageNumber.setAttribute("type", "text");
  // currentPageNumber.setAttribute("id", "currentPageNumber");
  // currentPageNumber.setAttribute("name", "currentPageNumber");
  // currentPageNumber.setAttribute("placeholder", "Page number");
  // currentPageNumber.setAttribute("size", 20);
  // formDivId.appendChild(currentPageNumber);
  document.querySelector('body').prepend(formDivId);

}

function init2() {
  gapi.client.setApiKey('AIzaSyDiXfGbdU645g0kbAPks8c39vqSewdA3Ug');
  gapi.client.load('youtube', 'v3', function () {});
}






