# Molopyane Surgery website starter

A responsive static website built with HTML, CSS and JavaScript.

## Included
- `index.html` — one-page practice website
- `css/style.css` — responsive styling and subtle CSS animations
- `js/script.js` — mobile navigation, reveal animations and WhatsApp appointment-request flow
- `images/` — crops from the supplied flyer: practice logo and illustrated clinician

## Before publishing
1. The WhatsApp mobile number is configured as `27633645261` (+27 63 364 5261).
2. The preferred domain is `molopyanehealthcare.co.za`; it still needs to be registered and connected.
3. The intended appointments email is `appointments@molopyanehealthcare.co.za`; create the mailbox with the chosen email provider before publishing it as an active contact channel.
4. Confirm the displayed practice name, services, address, contact number and whether the listed services are currently offered.
5. Confirm that the practice has permission to use the supplied logo and illustrated clinician image.

## Run locally in VS Code
1. Extract the ZIP.
2. Open the `molopyane-website` folder in VS Code.
3. Install the **Live Server** extension.
4. Right-click `index.html` and choose **Open with Live Server**.
5. Test the page on desktop and mobile widths.

## Appointment flow
The form does not store medical information or confirm a booking. It creates a WhatsApp message to `+27 63 364 5261` with the patient's name, contact number, requested service and preferred date/time. The patient must tick the consent checkbox and press Send in WhatsApp, and the practice must reply to confirm availability. Do not invite patients to submit symptoms or medical histories through this form.

## Deployment suggestion
The site is static and can be deployed to Netlify from a GitHub repository. In Netlify, import the repository and use the project root (`.`) as the publish directory. Add the custom domain under **Domain management** after registering it. Keep the email provider's MX records when changing DNS/nameservers.

## Content source and items to verify
The supplied four-page business profile describes Molopyane Surgery (Inc.), Dr Molopyane & Stoffel, over 20 years' experience, mission, vision, values and general/surgical services. The supplied flyer gives the telephone number and Zakhe Road address, and contains the illustrated clinician and circular logo used here. Confirm current operating hours, WhatsApp number, email address, medical-aid/payment information and the exact services available before launch.

