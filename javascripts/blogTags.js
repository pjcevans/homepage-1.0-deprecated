function showAll(tag) {
  var elements = document.getElementsByClassName("postIndexItem");
  // Hide every blog post item
  for(var i = 0; i < elements.length; i++) {
     elements.item(i).style.order = 1;
     elements.item(i).style.opacity = 0;
     elements.item(i).style.transition = "opacity .5s ease-in-out";
     //elements.item(i).style.display = "none";
  }
  // Unhide every selected blog post item
  var showElements = document.getElementsByClassName(tag);
  for(var j = 0; j < showElements.length; j++) {
     showElements.item(j).style.order = -1;
     showElements.item(j).style.opacity = 1;
     //showElements.item(j).style.display = "block";
  }
}

function reset() {
  var elementsToReset = document.getElementsByClassName("postIndexItem");
  // Show every blog post item
  for(var i = 0; i < elementsToReset.length; i++) {
    elementsToReset.item(i).style.order = 1;
    elementsToReset.item(i).style.opacity = 1;
    elementsToReset.item(i).style.transition = "opacity .5s ease-in-out";
    //elementsToReset.item(i).style.display = "block";
  }
}
