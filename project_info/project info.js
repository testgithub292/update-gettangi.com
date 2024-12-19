  
  
  /*-------road map script ---------------------------*/
  // Show the paragraph with a transition effect
  window.onload = function() {
    document.getElementById('infoParagraph').classList.add('show');
};



// animation text

  // Function to handle the intersection observer
  const sections = document.querySelectorAll('.sectiontext');
  const options = {
      root: null, // Use the viewport as the container
      threshold: 0.1 // Trigger when 10% of the section is visible
  };

  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target); // Stop observing once it becomes visible
          }
      });
  }, options);

  sections.forEach(section => {
      observer.observe(section); // Observe each section
  });
