document.addEventListener('DOMContentLoaded', function () {
    const section1 = document.getElementById("section-1");
    const section2 = document.getElementById("section-2");
    const ortxt = document.getElementById("ortxt");
    const search = document.getElementById("search");
    const first = document.getElementById("first");
    const second = document.getElementById("second");
    const clickicon = document.getElementById("clickicon");
    const buttons = document.getElementById("buttons");
    const submitform =document.getElementsByClassName("submitform");

    function opensection1() {
        section1.style.display = "block";
        section2.style.display = "none";
        samething();
    }

    function opensection2() {
        section2.style.display = "block";
        section1.style.display = "none";
        samething();
    }

    function samething() {
        second.style.display = "block";
        first.style.display = "none";
        ortxt.style.display = "none";
        search.style.display = "none";
    }

    function opensearchbypin() {
        search.style.display = "block";
        buttons.style.display = "none";
        ortxt.style.display = "none";
        section2.style.display = "none";
        section1.style.display = "none";
        second.style.display = "none";
        first.style.display = "none";
        clickicon.style.display = "none";
        submitform[0].style.display="none";
    }
    
    function opensubmitform()
    {
       search.style.display = "none";
       buttons.style.display = "none";
       ortxt.style.display = "none";
       section2.style.display = "none";
       section1.style.display = "none";
       second.style.display = "none";
       first.style.display = "none";
       clickicon.style.display = "none";
       submitform[0].style.display = "block";
    }

    // Attach event listeners to the appropriate elements
    document.getElementById("sec1btn").addEventListener("click", opensection1);
    document.getElementById("sec2btn").addEventListener("click", opensection2);
    document.getElementById("searchbypin").addEventListener("click", opensearchbypin);
    document.getElementById("submitform").addEventListener("click", opensubmitform);

    const form = document.querySelector('form');
    const pattern = /23001-CS-/i;
    
    form.addEventListener('submit', (e) => {
      const input = form.elements[1]; // Assuming the first input element is the one you want to check
    
         if (input.value.length < 12 || !pattern.test(input.value)) {
              e.preventDefault();
              input.value = '';
              input.placeholder = "Please enter the correct pin";
              const style = document.createElement('style');
              style.innerHTML = `::placeholder { color:red; }`;
              document.head.appendChild(style);
         }
         
         
    });


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
      
   
    
});

