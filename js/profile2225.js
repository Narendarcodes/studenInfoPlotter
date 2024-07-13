document.addEventListener('DOMContentLoaded', function () {
     const videos = document.getElementsByClassName('video-item');
     const iframes = document.querySelectorAll('iframe');
     const assicontainer = document.getElementById('assignmentcontainer');
     const zerosub = document.getElementById("nothing");

     for (let i = 0; i < 5; i++) {
          if (iframes[i].src == "https://drive.google.com/file/d/NOT%20AVAILABLE/preview") {
               videos[i].style.display = "none";
            
          }
     }

     //no. of videos available
     function available() {
          let count = 0;
          for (let i = 0; i < 5; i++) {
               if (videos[i].style.display == "none") {
                    count++;
               }
          }
          return count;
     }

     //resizing the assignment container according to availability of videos
     if (available() == 5 ) {
          assicontainer.style.height = "250px";
          zerosub.style.display = "block";
     }
     else if(available() == 4 || available() == 3 ){
          assicontainer.style.height = "450px";
          
     }
     else if(available() == 2 || available() == 1){
          assicontainer.style.height = "800px";
     }

     // Function to redirect to the error page
function redirectToErrorPage() {
  window.location.href = "../error.html"; // Replace "error.html" with the actual URL of your error page
}

// Event listener for orientation change
window.addEventListener("orientationchange", function() {
  if (window.orientation === 0 || window.orientation === 180) {
    redirectToErrorPage();
  }
  
  
});


})

