// When the user scrolls the page, execute myFunction
window.onscroll = function () {
  scrollfunc();
};

function scrollfunc() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}
document.cookie = "trial=i am a trial cookie; max-age=1200000000;";
// document.cookie = userdata + "=" + ";" + expires + ";path=/";

// function setCookie(cname, cvalue, exdays) {
//   var d = new Date();
//   d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
//   var expires = "expires="+d.toUTCString();
//   document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
// }

// function getCookie(cname) {
//   var name = cname + "=";
//   var ca = document.cookie.split(';');
//   for(var i = 0; i < ca.length; i++) {
//     var c = ca[i];
//     while (c.charAt(0) == ' ') {
//       c = c.substring(1);
//     }
//     if (c.indexOf(name) == 0) {
//       return c.substring(name.length, c.length);
//     }
//   }
//   return "";
// }

// function checkCookie() {
//   var user = getCookie("username");
//   if (user != "") {
//     alert("Welcome again " + user);
//   } else {
//     user = prompt("Please enter your name:", "");
//     if (user != "" && user != null) {
//       setCookie("username", user, 365);
//     }
//   }
// }

//dropdown
function dropdown() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
// ip loc
//  function getIP(json) {
//    if (json.country && json.city) {
//      var div = document.getElementById("ipLookup");
//      div.innerHTML =
//        "" + json.countryCode + "|  " + json.city + ", " + json.country + "";
//    }
//  }

const images = ["001", "002", "003", "004"];
const imgElem = document.querySelector("#img");
function randomValueFromArray(array) {
  const randomNo = Math.floor(Math.random() * array.length);
  return array[randomNo];
}
setInterval(() => {
  const randomChoice = randomValueFromArray(images);
  imgElem.src = `/assets/svg/${randomChoice}.svg`;
}, 3000);
document.getElementById("year").innerHTML = " Copyright &copy;"+  d.getFullYear() + " Odokekere Junior Secondary School. Designed by Olajide Olanrewaju  <a href='www.olanre.netlify.com' >Olajide Olanrewaju</a>" /*"Odokekere Junior Secondary School. Designed by <a href="www.olanre.netlify.com" style="color: #666666; font-size: 1.3em;">Olajide Olanrewaju</a>" */;

// function func() {
//   setInterval(function(){ alert("Hello"); }, 3000);
// }
