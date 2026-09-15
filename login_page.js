// =================================
// SHOW / HIDE PASSWORD
// =================================

const togglePassword =
    document.getElementById("togglePassword");

const password =
    document.getElementById("password");


togglePassword.addEventListener(
    "click",
    function () {

        if (password.type === "password") {

            password.type = "text";

            togglePassword.textContent = "🙈";

        }

        else {

            password.type = "password";

            togglePassword.textContent = "👁";

        }

    }
);



// =================================
// LOGIN FORM
// =================================

const loginForm =
    document.getElementById("loginForm");


loginForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const email =
            document.getElementById("email")
            .value
            .trim();


        const pass =
            password
            .value
            .trim();


        if (email === "" || pass === "") {

            alert(
                "Please enter your email and password."
            );

            return;

        }


        alert("Login successful!");


        /*
            Later, when dashboard is ready:

            window.location.href =
                "dashboard.html";
        */

    }
);



// =================================
// LEFT / RIGHT PANEL SWITCH
// =================================

const loginContent =
    document.getElementById("loginContent");


const infoPanel =
    document.getElementById("infoPanel");


const switchButton =
    document.getElementById("switchButton");



function switchPanels() {

    loginContent.classList.toggle(
        "switched"
    );

}



// =================================
// CLICK LIBRARY PANEL
// =================================

infoPanel.addEventListener(
    "click",
    function (event) {

        if (
            event.target !== switchButton
        ) {

            switchPanels();

        }

    }
);



// =================================
// CLICK SWITCH BUTTON
// =================================

switchButton.addEventListener(
    "click",
    function (event) {

        event.stopPropagation();

        switchPanels();

    }
);