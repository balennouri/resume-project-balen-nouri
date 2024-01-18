function sendMail(contactForm) {
    emailjs.send("Yservice_xcen2j1", "balen", {
            "from_name": contactForm.name.value,
            "from_email": contactForm.emailaddress.value,
            "project_request": contactForm.projectsummary.value
        })
        .then(
            function (response) {
                console.log("SUCCESS", response);
                // Show the thank you modal
                $('#thankYouModal').modal('show');

                // Event listener for modal close
                $('#thankYouModal').on('hidden.bs.modal', function () {
                    // Reset the form here
                    contactForm.reset();
                });
            },
            function (error) {
                console.log("FAILED", error);
            });
    return false;
}