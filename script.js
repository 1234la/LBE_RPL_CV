
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var quotes = this.nextElementSibling;
    if (quotes.style.display === "block") {
      quotes.style.display = "none";
    } else {
      quotes.style.display = "block";
    }
  });
}

