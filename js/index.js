document.addEventListener('DOMContentLoaded', function () {
    const ortxt = document.getElementById("ortxt");
    const search = document.getElementById("search");
    const buttons = document.getElementById("buttons");
    const submitform = document.getElementsByClassName("submitform");
    const batch = document.getElementById("batch");
    const form = document.querySelector('form');
    const pattern1 = /23001-CS-/i;
    const pattern2 = /22001-CS-/i;

    form.addEventListener('submit', (e) => {
        const input = form.elements[1];

        if (input.value.length < 12 || (!pattern2.test(input.value) && !pattern1.test(input.value))) {
            e.preventDefault();
            input.value = '';
            input.placeholder = "Please enter the correct pin";
            const style = document.createElement('style');
            style.innerHTML = `::placeholder { color:red; }`;
            document.head.appendChild(style);
        } else {
            document.head.remove(style);
        }
            if (pattern2.test(input.value)) {
                form.action = "profilepages/profile2225.php";
            } else if (pattern1.test(input.value)) {
                form.action = "error404.html";
            }
        }
    );


    function opensearchbypin() {
        search.style.display = "block";
        buttons.style.display = "none";
        ortxt.style.display = "none";
        submitform[0].style.display = "none";
        batch.style.display = "none";
    }

    function opensubmitform() {
        search.style.display = "none";
        buttons.style.display = "none";
        ortxt.style.display = "none";
        batch.style.display = "none";
        submitform[0].style.display = "block";

    }

    document.getElementById("searchbypin").addEventListener("click", opensearchbypin);
    document.getElementById("submitform").addEventListener("click", opensubmitform);

    // Function to check the device orientation
    function checkOrientation() {
        // Check if the device is in portrait orientation
        if (window.matchMedia("(orientation: portrait)").matches) {
            // Redirect to the portrait webpage
            window.location.href = "error.html";
        } else {
            // Redirect to the landscape webpage only if not already redirected
            if (!window.location.href.includes("index.php")) {
                window.location.href = "index.php";
            }
        }
    }

    // Call the function initially
    //checkOrientation();

    // Variable to track if already redirected
    var redirected = false;

    // Add an event listener to detect orientation changes
    window.addEventListener("orientationchange", function () {
        // Check if the device is in portrait orientation
        if (window.matchMedia("(orientation: portrait)").matches) {
            // Redirect to the portrait webpage only if not already redirected
            if (!window.location.href.includes("error.html")) {
                window.location.href = "error.html";
            }
        } else {
            // Redirect to the landscape webpage only if not already redirected
            if (!redirected) {
                window.location.href = "index.php";
                redirected = true;
            }
        }
    });


});

