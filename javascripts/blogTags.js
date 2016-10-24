function showAll(tag) {
  var elements = document.getElementsByClassName("postIndexItem")
  // Hide every blog post item
  for(var i = 0; i < elements.length; i++) {
     elements.item(i).style.display = "none";
  }
  // Unhide every selected blog post item
  var showElements = document.getElementsByClassName(tag);
  for(var j = 0; j < showElements.length; j++) {
     showElements.item(j).style.display = "block";
  }
}

function reset() {
  var elementsToReset = document.getElementsByClassName("postIndexItem")
  // Hide every blog post item
  for(var i = 0; i < ele  mentsToReset.length; i++) {
     elementsToReset.item(i).style.display = "block";
  }
}
