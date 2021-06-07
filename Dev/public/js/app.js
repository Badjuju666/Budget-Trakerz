if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err))
  })
}

//this code is check for check if the serviceworker file is available if available then it'll register it for pwa prompt and pwa workspace
//you can check in browser if the service worker is in the right place and if it is register or not.