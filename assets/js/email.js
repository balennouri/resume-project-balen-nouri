function sendMail(contactForm) {
    emailjs.send("gmail", "balennouri", {
            "from_name": contactForm.name.value,
            "from_email": contactForm.emailaddress.value,
            "project_request": contactForm.projectsummary.value
        })
        .then(
            function (response) {
                console.log("SUCCESS", response);
                alert("Thank you for your message")
            },
            function (error) {
                console.log("FAILED", error);
            }
        );
        return false;  // To block from loading a new page
}