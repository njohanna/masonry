// a simple mobile menu

document.querySelector(".mobileMenu").onclick=function(){
    var clickMenu = document.querySelector(".mobileMenu").classList;//for icons 
    var mainNav = document.getElementById("mainNav").classList;
    if(mainNav.contains("onOffMenu")){
      mainNav.remove("onOffMenu");
    }else{
      mainNav.add("onOffMenu");
    }
  }