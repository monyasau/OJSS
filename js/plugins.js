// When the user scrolls the page, execute myFunction
// window.onscroll = function () {
//   scrollfunc();
// };

// function scrollfunc() {
//   var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
//   var height =
//     document.documentElement.scrollHeight -
//     document.documentElement.clientHeight;
//   var scrolled = (winScroll / height) * 100;
//   document.getElementById("myBar").style.width = scrolled + "%";
// }
// document.cookie = "trial=i am a trial cookie; max-age=1200000000;";
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
  var nav = document.getElementById("myTopnav");
  if (nav.className === "topnav") {
    nav.className += " responsive";
  } else {
    nav.className = "topnav";
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
// const lastvisit = new Date;
// document.cookie = "lastvisit=" + lastvisit + ";path=/;" + "max-age=88000;";
// document.cookie = "firstvisit=" + lastvisit + ";path=/;" + "max-age=1200000000;" + "secure=yes";
// const a = document.createElement("b");
// var link = 'https://www.olanre.netlify.com';
// a.href = "Olajide Olanrewaju";
d = new Date;
document.getElementById("year").innerHTML = "Copyright &copy;" + d.getFullYear() + " Odokekere Junior Secondary School.";
// document.getElementById("year").innerHTML = "Copyright &copy;" + d.getFullYear() + " Odokekere Junior Secondary School. Designed by  " + a.href.link("https://olanre.netlify.com") /**/;
/*Odokekere Junior Secondary School. Designed by <a href="www.olanre.netlify.com" style="color: #666666; font-size: 1.3em;">Olajide Olanrewaju</a>" */

// slideshow gallery

              var slideslideIndex = 1;
              slideshowSlides(slideslideIndex);

              function slideplusSlides(sliden) {
                slideshowSlides((slideslideIndex += sliden));
              }

              function slidecurrentSlide(sliden) {
                slideshowSlides((slideslideIndex = sliden));
              }

              function slideshowSlides(sliden) {
                var slidei;
                var slideslides = document.getElementsByClassName(
                  "slidemySlides"
                );
                var slidedots = document.getElementsByClassName("slidedemo");
                if (sliden > slideslides.length) {
                  slideslideIndex = 1;
                }
                if (sliden < 1) {
                  slideslideIndex = slideslides.length;
                }
                for (slidei = 0; slidei < slideslides.length; slidei++) {
                  slideslides[slidei].style.display = "none";
                }
                for (slidei = 0; slidei < slidedots.length; slidei++) {
                  slidedots[slidei].className = slidedots[
                    slidei
                  ].className.replace(" slideactive", "");
                }
                slideslides[slideslideIndex - 1].style.display = "flex";
                slidedots[slideslideIndex - 1].className += " slideactive";
}
              
// var slidecursor = document.getElementById("slidecursor");
// slidecursor.innerHTML = new Date;

// lastvisit side
var days = 730; // days until cookie expires = 2 years.
var lastvisit = new Object();
var firstvisitmsg = "This is your first visit to this page. Welcome!";
lastvisit.subsequentvisitmsg =
  "Welcome back visitor! Your last visit was on <b>[displaydate]</b>";

lastvisit.getCookie = function (Name) {
  var re = new RegExp(Name + "=[^;]+", "i");
  if (document.cookie.match(re))
    return document.cookie.match(re)[0].split("=")[1];
  return "";
};

lastvisit.setCookie = function (name, value, days) {
  var expireDate = new Date();

  var expstring = expireDate.setDate(expireDate.getDate() + parseInt(days));
  document.cookie =
    name + "=" + value + "; expires=" + expireDate.toGMTString() + "; path=/";
};

lastvisit.showmessage = function () {
  var wh = new Date();
  if (lastvisit.getCookie("visitc") == "") {
    lastvisit.setCookie("visitc", wh, days);
    document.write(firstvisitmsg);
  } else {
    var lv = lastvisit.getCookie("visitc");
    var lvp = Date.parse(lv);
    var now = new Date();
    now.setTime(lvp);
    var day = new Array("Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat");
    var month = new Array(
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    );
    var dd = now.getDate();
    var dy = now.getDay();
    dy = day[dy];
    var mn = now.getMonth();
    mn = month[mn];
    yy = now.getFullYear();
    var hh = now.getHours();
    var ampm = "AM";
    if (hh >= 12) {
      ampm = "PM";
    }
    if (hh > 12) {
      hh = hh - 12;
    }
    if (hh == 0) {
      hh = 12;
    }
    if (hh < 10) {
      hh = "0" + hh;
    }
    var mins = now.getMinutes();
    if (mins < 10) {
      mins = "0" + mins;
    }
    var secs = now.getSeconds();
    if (secs < 10) {
      secs = "0" + secs;
    }
    var dispDate =
      dy +
      ", " +
      mn +
      " " +
      dd +
      ", " +
      yy +
      " " +
      hh +
      ":" +
      mins +
      ":" +
      secs +
      " " +
      ampm;
    document.getElementById("visit").innerHTML =      lastvisit.subsequentvisitmsg.replace("[displaydate]", dispDate);
  }

  lastvisit.setCookie("visitc", wh, days);
};

lastvisit.showmessage();

// Return today's date and time
// var currentTime = new Date()

// // returns the month (from 0 to 11)
// var month = currentTime.getMonth() + 1

// // returns the day of the month (from 1 to 31)
// var day = currentTime.getDate()

// // returns the year (four digits)
// var year = currentTime.getFullYear()

// // write output MM/dd/yyyy
// document.write(month + "/" + day + "/" + year)
// function func() {
//   setInterval(function(){ alert("Hello"); }, 3000);
// }

// console.clear();