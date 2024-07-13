
 // Function to check the device orientation
 function checkOrientation() {
    // Check if the device is in portrait orientation
    if (window.matchMedia("(orientation: landscape)").matches) {
      // Redirect to the portrait webpage
      window.location.href = "index.php";
    } else {
      // Redirect to the landscape webpage only if not already redirected
      if (!window.location.href.includes("error.html")) {
        window.location.href = "error.html";
      }
    }
  }
  
  // Call the function initially
  checkOrientation();
  
  // Variable to track if already redirected
  var redirected = false;
  
  // Add an event listener to detect orientation changes
  window.addEventListener("orientationchange", function() {
    // Check if the device is in portrait orientation
    if (window.matchMedia("(orientation: landscape)").matches) {
      // Redirect to the portrait webpage only if not already redirected
      if (!window.location.href.includes("index.php")) {
        window.location.href = "index.php";
      }
    } else {
      // Redirect to the landscape webpage only if not already redirected
      if (!redirected) {
        window.location.href = "error.html";
        redirected = true;
      }
    }
  });