
/* =========================================
   MOLOPYANE SURGERY WEBSITE
   Main JavaScript
========================================= */


/* 1. MOBILE NAVIGATION */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", function () {

        navLinks.classList.toggle("active");

        const isOpen = navLinks.classList.contains("active");

        menuToggle.setAttribute("aria-expanded", isOpen);

        menuToggle.textContent = isOpen ? "✕" : "☰";

    });

    document.querySelectorAll(".nav-links a").forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

            menuToggle.setAttribute("aria-expanded", "false");

            menuToggle.textContent = "☰";

        });

    });

}


/* 2. APPOINTMENT DATE VALIDATION */

const dateInput = document.getElementById("appointmentDate");

if (dateInput) {

    const today = new Date();

    const localDate = new Date(
        today.getTime() - today.getTimezoneOffset() * 60000
    ).toISOString().split("T")[0];

    dateInput.min = localDate;

}


/* 3. WHATSAPP APPOINTMENT FORM */

const appointmentForm = document.getElementById("appointmentForm");

if (appointmentForm) {

    appointmentForm.addEventListener("submit", function (event) {

        event.preventDefault();

        // Collect form information
        const name = document
            .getElementById("patientName")
            .value.trim();

        const phone = document
            .getElementById("patientPhone")
            .value.trim();

        const service = document
            .getElementById("service")
            .value;

        const date = document
            .getElementById("appointmentDate")
            .value;

        const consent = document
            .getElementById("consent")
            .checked;


        // Validate information
        if (!name || !phone || !service || !date || !consent) {

            alert("Please complete all required fields.");

            return;

        }


        // Format appointment date
        const formattedDate = new Date(date + "T12:00:00")
            .toLocaleDateString("en-ZA", {
                day: "numeric",
                month: "long",
                year: "numeric"
            });


        // Create WhatsApp message
        const message =

`Hello Molopyane Surgery,

I would like to request an appointment.

Name: ${name}
Contact Number: ${phone}
Service: ${service}
Preferred Date: ${formattedDate}

Please let me know whether this date is available.

Thank you.`;


        // Practice WhatsApp number
        const whatsappNumber = "27633645261";


        // Generate WhatsApp URL
        const whatsappURL =

            "https://wa.me/" + whatsappNumber +
            "?text=" + encodeURIComponent(message);


        // Open WhatsApp
        window.open(
            whatsappURL,
            "_blank",
            "noopener"
        );

    });

}


/* 4. SCROLL ANIMATIONS */

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver(

        (entries, observerInstance) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observerInstance.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.15
        }

    );


    revealElements.forEach(element => {

        observer.observe(element);

    });

} else {

    // Fallback for older browsers
    revealElements.forEach(element => {

        element.classList.add("visible");

    });

}


/* 5. DYNAMIC COPYRIGHT YEAR */

const yearElement = document.getElementById("year");

if (yearElement) {

    yearElement.textContent = new Date().getFullYear();

}


/* 6. CONSOLE MESSAGE */

console.log(
    "Molopyane Surgery website successfully loaded."
);
