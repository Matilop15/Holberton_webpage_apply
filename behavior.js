document.addEventListener("DOMContentLoaded", function(event) {
    var thumbnailElement = document.getElementById("smart_thumbnail");
    thumbnailElement.addEventListener("click", function() {
	if (thumbnailElement.className == "c") {
	    thumbnailElement.className = "small";
	}else{
	    thumbnailElement.className = "c";
	}
    });
});

 function myFunction(imgs) {
  var expandImg = document.getElementById("expandedImg");
  var imgText = document.getElementById("imgtext");
  expandImg.src = imgs.src;
  imgText.innerHTML = imgs.alt;
  expandImg.parentElement.style.display = "block";
}

function myFunction2(imgs2) {
  var expandImg2 = document.getElementById("expandedImg2");
  var imgText2 = document.getElementById("imgtext2");
  expandImg2.src = imgs2.src;
  imgText2.innerHTML = imgs2.alt;
  expandImg2.parentElement.style.display = "block";
}
