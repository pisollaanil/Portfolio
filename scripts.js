document.addEventListener('DOMContentLoaded', () => {
  // Smooth scrolling for navigation links
  document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Initialize EmailJS with your Public Key (User ID)
  emailjs.init('qORUfUXu3OAgeElGb'); // Public Key

  // Contact form submission
  const contactForm = document.getElementById('contactForm');
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent default form submission

    // Retrieve form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Prepare data to send
    const formData = {
      to_name: name,
      from_name: email,
      message: message
    };
    console.log(formData);

    // Send email using EmailJS
    emailjs.send('service_pn8wxvm', 'template_gqbmoc3', formData)
      .then(function(response) {
        alert(`Thank you, ${name}! Your message has been sent successfully.`);
        contactForm.reset();
      })
      .catch(function(error) {
        console.error('Failed to send email. Error:', error);
        alert('Oops! An error occurred while sending your message. Please try again later.');
      });
  });

  // Bootstrap collapse functionality
  $(document).ready(function() {
    $('#moreEducation').on('show.bs.collapse', function () {
      $('#viewLessButton').removeClass('d-none');
      $('button[data-target="#moreEducation"]:not(#viewLessButton)').addClass('d-none');
    });
    $('#moreEducation').on('hide.bs.collapse', function () {
      $('#viewLessButton').addClass('d-none');
      $('button[data-target="#moreEducation"]:not(#viewLessButton)').removeClass('d-none');
    });
  });
});
