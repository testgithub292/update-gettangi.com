

/*document.addEventListener("DOMContentLoaded", function() {
    // Display loading animation for 2 seconds
    setTimeout(function() {
        // Hide loading animation and show content
        document.getElementById('loading').style.display = 'none';
        //document.getElementById('content').style.display = 'block';
        document.body.style.overflow = 'auto'; // Enable scrolling after loading
    }, 2000); // Set delay to 2 seconds (2000 ms)
});*/

/*document.addEventListener("DOMContentLoaded", function() {
    // Check if the modal has already been shown
    if (!localStorage.getItem("modalShown")) {
        // Display loading animation for 2 seconds
        setTimeout(function() {
            // Hide loading animation and show content
            document.getElementById('loading').style.display = 'none';
            document.body.style.overflow = 'auto'; // Enable scrolling after loading
            
            // Show the Bootstrap modal
            var myModal = new bootstrap.Modal(document.getElementById('exampleModal'), {
                keyboard: true
            });
            myModal.show();

            // Set a flag in localStorage to indicate the modal has been shown
            localStorage.setItem("modalShown", "true");
        }, 2000); // Set delay to 2 seconds (2000 ms)
    } else {
        // Hide loading animation immediately if modal has already been shown
        document.getElementById('loading').style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});*/

document.addEventListener("DOMContentLoaded", function() {
    // Display loading animation for 2 seconds
    setTimeout(function() {
        // Hide loading animation and show content
        document.getElementById('loading').style.display = 'none';
        document.body.style.overflow = 'auto'; // Enable scrolling after loading

        // Trigger Bootstrap modal
        var myModal = new bootstrap.Modal(document.getElementById('exampleModal'), {
            keyboard: true
        });
        myModal.show();
    }, 2000); // Set delay to 2 seconds (2000 ms)
});

//-------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------

    // Získání reference na tlačítko
    var scrollTopBtn = document.getElementById("scrollTopBtn");

    // Při scrollování stránky
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollTopBtn.style.display = "block";
        } else {
            scrollTopBtn.style.display = "none";
        }
    }

    // Při kliknutí na tlačítko se přesune na začátek stránky
    scrollTopBtn.onclick = function() {
        document.body.scrollTop = 0; // Pro Safari
        document.documentElement.scrollTop = 0; // Pro Chrome, Firefox, IE a Opera
    }


    /*document.addEventListener("DOMContentLoaded", function () {
        const incentivesDropdown = document.querySelector('.dropdown-submenu');
    
        incentivesDropdown.addEventListener('click', function (e) {
            e.stopPropagation(); // Prevents the dropdown from closing
        });
    });*/
    



     // Function to handle intersection
 /* const handleIntersection = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible'); // Add visible class to trigger animation
                }
            });
        };

        // Create an intersection observer
        const observer = new IntersectionObserver(handleIntersection);

        // Observe the heading and content
        observer.observe(document.getElementById('heading_section3'));
        observer.observe(document.getElementById('content_section3'));*/




        /*-------------------------------------------*/
         // JavaScript to stop the video when modal is closed
  document.getElementById('exampleModal').addEventListener('hidden.bs.modal', function () {
    var video = document.getElementById('modalVideo');
    video.pause();
    video.currentTime = 0; // Optional: Reset video to the beginning
  });


  
  // animation text

  // Function to handle the intersection observer
  const sections = document.querySelectorAll('.section');
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

 

// card script

/*let lastScrollTop = 0; // Last scroll position
let animationTriggered = false; // Flag to track if animation has been triggered

window.addEventListener('scroll', function() {
    const card = document.getElementById('myCard');
    const cardPosition = card.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    // Get current scroll position
    const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Check if the card is in the viewport and scroll direction is down
    if (cardPosition < windowHeight && cardPosition > 0 && currentScrollTop > lastScrollTop && !animationTriggered) {
        card.classList.add('visible');
        animationTriggered = true; // Set flag to true after animation is triggered
    }

    // Reset the flag if the card is not in the viewport
    if (cardPosition > windowHeight || cardPosition < 0) {
        animationTriggered = false; // Reset flag when card is out of view
    }

    // Update last scroll position
    lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // For Mobile or negative scrolling
});*/

/*-----------------------------------------------------*/

const words = document.querySelectorAll('.word');

// Rename the observer to avoid conflict
const wordsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        } else {
            entry.target.classList.remove('animate');
        }
    });
});

words.forEach(word => {
    wordsObserver.observe(word); // Use wordsObserver instead of observer
});



//---------------------------------------------------------------

const cards = document.querySelectorAll('.boxes_item');

const scrollobserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show'); // Remove for repeated animations
        }
    });
}, {
    threshold: 0.5 // 50% of the card must be visible
});

cards.forEach(card => scrollobserver.observe(card));


//--------------------------------------------------------------------

const wcards = document.querySelectorAll('.menu_item');

const withoutscrollobserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show'); // Remove for repeated animations
        }
    });
}, {
    threshold: 0.5 // 50% of the card must be visible
});

wcards.forEach(card => withoutscrollobserver.observe(card));


/*------------------------------------------------------------*/

  // Get references to elements
  const fullLine = document.getElementById('fullLine');
  const animatedText = document.getElementById('animatedText');
  const logo = document.getElementById('logo');
  const modal = document.getElementById('exampleModal');

  // Modal close event
  modal.addEventListener('hidden.bs.modal', () => {
    // Show full line text
    fullLine.classList.add('visible');

    // After full line animation, show split text animation
    setTimeout(() => {
      animatedText.classList.add('active');

      // After text animation, show logo animation
      setTimeout(() => {
        logo.classList.add('visible');
      }, 1000);
    }, 800); // Delay for full line animation
  });


  //---------------------------------------------------------------------------

  window.onscroll = function() {hideButtonsOnScroll()};

  function hideButtonsOnScroll() {
      var button1 = document.getElementById("fixedBtn");
      var button2 = document.getElementById("fixedButtontop");
      var footer = document.querySelector("footer");
      var footerPosition = footer.getBoundingClientRect().top;
      
      // Buttons ko hide karna jab footer screen ke andar aaye
      if (footerPosition <= window.innerHeight) {
          button1.style.display = "none";
          button2.style.display = "none";
      } else {
          button1.style.display = "block";
          button2.style.display = "block";
      }
  }


 
  // When the user scrolls, hide or show the button based on the footer position
  /*window.onscroll = function () {
      hideButtonOnScroll();
  };

  function hideButtonOnScroll() {
      var button = document.getElementById("fixedBtn");
      var footer = document.querySelector("footer");
      var footerPosition = footer.getBoundingClientRect().top;

      // Hide button when footer comes into view
      if (footerPosition <= window.innerHeight) {
          button.style.display = "none";
      } else {
          button.style.display = "block";
      }
  }

  // Function to handle modal close and replace button with a video
  function handleModalClose() {
      var button = document.getElementById("fixedBtn");
      var videoContainer = document.getElementById("videoContainer");

      // Hide the button
      button.style.display = "none";

      // Show the video
      videoContainer.style.display = "block";
  }

  // Attach the function to the modal close event
  document.getElementById("myModal").addEventListener("hidden.bs.modal", handleModalClose);*/


  
  
  
 