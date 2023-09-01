let reverse = false;
function toggleIndex() {
  var Index = document.getElementById("Index");
  if (Index.style.display === "none") {
    Index.style.display = "block";
    if (!reverse) {
      Index.classList.add("roll-in-blurred-left");
      Index.classList.remove("roll-in-blurred-left-Reverse");
      reverse = true;
    }
  } else {
    if (reverse){
        Index.classList.add("roll-in-blurred-left-Reverse");
        Index.classList.remove("roll-in-blurred-left");
        reverse = false;
    }
    Index.style.display = "none";
  }
}

window.onload = function() {
    var Index = document.getElementById("Index");
    var headings = document.querySelectorAll("h2");
    for (var i = 0; i < headings.length; i++) {
        var heading = headings[i];
        if (!heading.id) {
            heading.id = heading.textContent.replace(/\s+/g, '-').toLowerCase();
        }
        var link = document.createElement("a");
        link.href = "#" + heading.id;
        link.textContent = heading.textContent;
        Index.appendChild(link);
    }
}
