function myFunction() {
    var x = document.getElementById("demo");
    if (x.className.indexOf("w3-show") == -1)  {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}
// function navbar() {
//     var x = document.getElementById("myTopnav");
//     if (x.className === "topnav") {
//       x.className += " responsive";
//     } else {
//       x.className = "topnav";
//     }
//   }

function firstrun(){
  document.getElementById('expandedImg').src = "http://hdqwalls.com/download/mercedes-amg-gtr-4k-wp-1920x1080.jpg"
}

  function openNav() {
    document.getElementById("myNav").style.height = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.height = "0%";
  }
  var slideIndex = 1;
  var t;
  
  showSlides(slideIndex);
  
  function plusSlides(n) {    
    slideIndex = slideIndex + n;
    clearTimeout(t);
    showSlides(slideIndex);
    console.log(slideIndex);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
  
    var i;
    var slides = document.getElementsByClassName("mySlides");
  
    if (n == undefined) {
      n = ++slideIndex;
    }
  
    if (n > slides.length) {
      slideIndex = 1
    }
  
    if (n < 1) {
      slideIndex = slides.length
    }
  
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
  
    slides[slideIndex - 1].style.display = "block";
    t = setTimeout(showSlides, 3000);
  }




  function myFunction(imgs) {
    var expandImg = document.getElementById("expandedImg");
    document.getElementById('expandedImg').style.display = 'block'
    document.getElementById('vid').style.display = 'none'
    // var imgText = document.getElementById("imgtext");
    expandImg.src = imgs.src;
    // imgText.innerHTML = imgs.alt;
    expandImg.parentElement.style.display = "block";
  }
  function myFunction1(iframes) {
    var expandVid = document.getElementById("vid");
    document.getElementById('expandedImg').style.display='none'
    document.getElementById('vid').style.display = 'block'
    // var imgText = document.getElementById("imgtext");
    expandVid.src ="https://www.youtube.com/embed/TxHEHWxMpWw";
    // <iframe width="560" height="315" src="https://www.youtube.com/embed/TxHEHWxMpWw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    // imgText.innerHTML = imgs.alt;
    expandVid.parentElement.style.display = "block";

    
  }