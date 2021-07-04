
// if ("serviceWorker" in navigator) {
//   window.addEventListener("load", function () {
//     navigator.serviceWorker.register("sw.js", { scope: "/" }).then(
//       function (registration) {
//         // Registration was successful
//         console.log(
//           "ServiceWorker registration successful with scope: ",
//           registration.scope
//         );
//       },
//       function (err) {
//         // registration failed :(
//         console.log("ServiceWorker registration failed: ", err);
//       }
//     );
//   });
// } 
      
//ip loc
//  function getIP(json) {
//    if (json.country && json.city) {
//      var div = document.getElementById("ipLookup");
//      div.innerHTML =
//        "" + json.countryCode + "|  " + json.city + ", " + json.country + "";
//    }
//  }