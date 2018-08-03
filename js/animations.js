
function setInitialStates() {
    hideAll([travelMenu,
             shopMenu, 
             activMenu,
             logo,
             itemField,
             travelList,
             footer,
             soon,
             sooner,
             soonP,
             soonAct
             ]);
}

var tween = TweenMax.to({}, 1, {});
var body = document.getElementsByTagName("body");
var moveElTr = document.getElementsByClassName("tNav");
var moveElSh = document.getElementsByClassName("sNav");
var moveElAct = document.getElementsByClassName("aNav");

var travelMenu = document.getElementsByClassName("travelMenu");
var shopMenu = document.getElementsByClassName("shopMenu");
var activMenu = document.getElementsByClassName("activMenu");
var logo = document.getElementsByClassName("logo");

//starred
var red = document.getElementsByClassName("soon");
var red2 = document.getElementsByClassName("sooner");
var red3 = document.getElementsByClassName("soonP");

var tNav = document.getElementsByClassName("tNav");
var sNav = document.getElementsByClassName("sNav");
var aNav = document.getElementsByClassName("aNav");

var topAnim = document.getElementsByClassName("topAnim");
var itemField = document.getElementsByClassName("itemField");
var travelList = document.getElementsByClassName("travelList");
var footer = document.getElementsByTagName("footer");
var soonAct = document.getElementsByClassName("soonAct");

//on start animation
tween.seek(0).kill(); //reset

var twnDelay = 0;

twnDelay = 0.3;

TweenMax.from(travelMenu, 0.35, { opacity:0, ease:Power2.easeIn, delay: twnDelay});
twnDelay += 0.3;

TweenMax.from(shopMenu, 0.35, { opacity:0, ease:Power2.easeIn, delay: twnDelay});
TweenMax.from(logo, 1.1, {x:"-100%", ease:Power2.easeIn, delay: twnDelay});

twnDelay += 0.3;

TweenMax.from(activMenu, 0.35, { opacity:0, ease:Power2.easeIn, delay: twnDelay});

twnDelay += 0.8;

TweenMax.from(red, 0.15, { opacity:0, ease:Power2.easeIn, delay: twnDelay});
TweenMax.from(red2, 0.15, { opacity:0, ease:Power2.easeIn, delay: twnDelay});
TweenMax.from(red3, 0.15, { opacity:0, ease:Power2.easeIn, delay: twnDelay});

//on click main navigation
$(".travelMenu").on("click", function(){

  tween.seek(0).kill(); //reset

  var twnDelay = 0;

  TweenMax.to(moveElTr, 0.25, {left: "1.2%",ease:Power2.easeIn, delay: twnDelay });
  twnDelay = 0.25;
  TweenMax.to(body, 0.4, {opacity:0, ease:Power2.easeIn, delay: twnDelay, onComplete: function() { window.location.href = "indexTravel.html"; } });
  return false;
});

$(".shopMenu").on("click", function(){

  tween.seek(0).kill(); //reset

  var twnDelay = 0;

  TweenMax.to(moveElSh, 0.25, {left: "1.2%",ease:Power2.easeIn, delay: twnDelay });
  twnDelay = 0.25;
  TweenMax.to(body, 0.4, {opacity:0, ease:Power2.easeIn, delay: twnDelay, onComplete: function() { window.location.href = "indexShopping.html"; } });
  return false;
});

$(".activMenu").on("click", function(){

  tween.seek(0).kill(); //reset

  var twnDelay = 0;

  TweenMax.to(red, 0.25, {opacity:0, ease:Power2.easeIn, delay: twnDelay });
  TweenMax.to(red2, 0.25, {opacity:0, ease:Power2.easeIn, delay: twnDelay });
  TweenMax.to(red3, 0.25, {opacity:0, ease:Power2.easeIn, delay: twnDelay });
  TweenMax.to(moveElAct, 0.25, {left: "1.2%",ease:Power2.easeIn, delay: twnDelay });
  twnDelay = 0.25;
  TweenMax.to(body, 0.4, {opacity:0, ease:Power2.easeIn, delay: twnDelay, onComplete: function() { window.location.href = "indexActivities.html"; } });
  return false;
});

//for all pages same animation
tween.seek(0).kill(); //reset

var twnDelay = 0;

twnDelay = 0.2;

TweenMax.from(itemField, 0.4, {scale:0, opacity:0, ease:Power2.easeIn, delay: twnDelay});
twnDelay += 0.4;

TweenMax.to(topAnim, 0.4, {y:"43%", ease:Power3.easeIn, delay: twnDelay});

twnDelay += 0.3;

TweenMax.to(travelList, 0.6, {x:"-100%", opacity:1, ease:Power2.easeIn, delay: twnDelay});

twnDelay += 0.2;

TweenMax.to(footer, 1.2, {y:"-57%", ease:Power3.easeIn, delay: twnDelay});

twnDelay += 1.8;

TweenMax.from(soonAct, 0.5, {opacity:0, ease:Power2.easeIn, delay: twnDelay });

// functionality



function hideAll(whichOnes) {
    for (q = 0; q < whichOnes.length; q++) {
        $(whichOnes[q]).hide();
    }
}