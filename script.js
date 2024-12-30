

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
    // Initially hide scrollbar
    document.body.style.overflow = 'hidden'; // Hide scrollbar during loading

    // Display loading animation for 2 seconds
    setTimeout(function() {
        // Hide loading animation and show content
        document.getElementById('loading').style.display = 'none';
        
        // Optional: Trigger Bootstrap modal if needed
        var myModal = new bootstrap.Modal(document.getElementById('exampleModal'), {
            keyboard: true
        });
        myModal.show();

        // Keep the scrollbar hidden after the loading is done
        document.body.style.overflow = 'hidden'; // Keep the scrollbar hidden
    }, 2000); // Set delay to 2 seconds (2000 ms)
});

//-------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------

    // Získání reference na tlačítko
    /*var scrollTopBtn = document.getElementById("scrollTopBtn");

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
    }*/


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
  const logo = document.getElementById('logofirstlineanimation');
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


// Get button elements
/*const fixedBtn = document.getElementById('fixedBtn');
const fixedButtontop = document.getElementById('fixedButtontop'); // Optional
const scrollTopBtn = document.getElementById('scrollTopBtn'); // Optional

// Variables to track scrolling and hover state
let scrollTimer;
let hoverTimer;
let isHovering = false;

// Single scroll event handler
window.onscroll = function () {
    if (!isHovering) {
        hideButtonsOnScroll();
        scrollFunction();
        handleFixedButtonVisibility();
    }
};

// Hide buttons when footer is in view
function hideButtonsOnScroll() {
    const footer = document.querySelector('footer');
    const footerPosition = footer.getBoundingClientRect().top;

    if (footerPosition <= window.innerHeight) {
        fixedBtn.style.display = 'none';
        if (fixedButtontop) fixedButtontop.style.display = 'none';
    } else {
        fixedBtn.style.display = 'block';
        if (fixedButtontop) fixedButtontop.style.display = 'block';
    }
}

// Show/hide scroll-to-top button
function scrollFunction() {
    if (scrollTopBtn) {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollTopBtn.style.display = 'block';
        } else {
            scrollTopBtn.style.display = 'none';
        }
    }
}

// Handle visibility of fixed button on scroll
function handleFixedButtonVisibility() {
    // Show the button on scroll
    fixedBtn.style.display = 'block';

    // Clear the timer if it exists
    if (scrollTimer) clearTimeout(scrollTimer);

    // Hide the button 1 second after scroll stops
    scrollTimer = setTimeout(() => {
        if (!isHovering) {
            fixedBtn.style.display = 'none';
        }
    }, 1000);
}

// Add hover events to prevent hiding
fixedBtn.addEventListener('mouseover', () => {
    isHovering = true;
    if (hoverTimer) clearTimeout(hoverTimer); // Clear hover timer if active
});

fixedBtn.addEventListener('mouseout', () => {
    isHovering = false;

    // Start a timer to hide the button 1 second after mouse leaves
    hoverTimer = setTimeout(() => {
        if (!isHovering) {
            fixedBtn.style.display = 'none';
        }
    }, 1000);
});

// Scroll to top on button click
if (scrollTopBtn) {
    scrollTopBtn.onclick = function () {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
    };
}
*/
const fixedBtn = document.getElementById('fixedBtn');
const fixedButtontop = document.getElementById('fixedButtontop'); // Optional
const scrollTopBtn = document.getElementById('scrollTopBtn'); // Optional

// Variables to track scrolling and hover state
let scrollTimer;
let hoverTimer;
let isHovering = false;

// Single scroll event handler
window.onscroll = function () {
    if (!isHovering) {
        hideButtonsOnScroll();
        scrollFunction();
        handleFixedButtonVisibility();
    }
};

// Hide buttons when footer is in view
function hideButtonsOnScroll() {
    const footer = document.querySelector('footer');
    const footerPosition = footer.getBoundingClientRect().top;

    if (footerPosition <= window.innerHeight) {
        fixedBtn.style.display = 'none';
        if (fixedButtontop) fixedButtontop.style.display = 'none';
    } else {
        fixedBtn.style.display = 'block';
        if (fixedButtontop) fixedButtontop.style.display = 'block';
    }
}

// Show/hide scroll-to-top button
function scrollFunction() {
    if (scrollTopBtn) {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollTopBtn.style.display = 'block';
        } else {
            scrollTopBtn.style.display = 'none';
        }
    }
}

// Handle visibility of fixed button on scroll
function handleFixedButtonVisibility() {
    // Show the button on scroll
    fixedBtn.style.display = 'block';

    // Clear the timer if it exists
    if (scrollTimer) clearTimeout(scrollTimer);

    // Hide the button 1 second after scroll stops
    scrollTimer = setTimeout(() => {
        if (!isHovering) {
            fixedBtn.style.display = 'none';
        }
    }, 1000);
}

// Add hover events to prevent hiding
fixedBtn.addEventListener('mouseover', () => {
    isHovering = true;
    if (hoverTimer) clearTimeout(hoverTimer); // Clear hover timer if active
});

fixedBtn.addEventListener('mouseout', () => {
    isHovering = false;

    // Start a timer to hide the button 1 second after mouse leaves
    hoverTimer = setTimeout(() => {
        if (!isHovering) {
            fixedBtn.style.display = 'none';
        }
    }, 1000);
});

// Scroll to top on button click
if (scrollTopBtn) {
    scrollTopBtn.onclick = function () {
        // Scroll to top of the page
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera

        // Reset sections to the first section
        if (typeof updateSlide === 'function') {
            updateSlide(0); // Ensure this function is defined in your section script
        }
    };
}

/*--------------------------------------------------------------------*/


document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("exampleModal");
    const modalVideo = document.getElementById("modalVideo");
    const miniVideoContainer = document.getElementById("miniVideoContainer");
    const miniVideo = document.getElementById("miniVideo");
  
    // When modal starts closing
    modal.addEventListener("hide.bs.modal", () => {
      modalVideo.pause();
      modalVideo.currentTime = 0; // Reset the main video
    });
  
    // When modal is completely closed
    modal.addEventListener("hidden.bs.modal", () => {
      miniVideoContainer.classList.add("active");
  
      // Start shrinking animation after appearing
      setTimeout(() => {
        miniVideoContainer.classList.add("shrinking");
      }, 500);
  
      // Play mini video
      miniVideo.play();
    });
  
    // Hide mini video when clicked
    miniVideoContainer.addEventListener("click", () => {
      miniVideoContainer.classList.remove("active", "shrinking");
      miniVideo.pause();
    });
  });
  

 
/*  let isHeadingVisible = false; // Track whether the heading is currently visible

  document.addEventListener("scroll", function () {
    const headingTangi = document.getElementById("hedingtangi");
    const scrollY = window.scrollY; // Get current scroll position
  
    // Show the heading when user scrolls down more than 200px
    if (!isHeadingVisible && scrollY > 190) {
      headingTangi.style.display = "block"; // Show the heading
      isHeadingVisible = true; // Mark as visible
    }
  
    // Hide the heading when user scrolls back up less than 200px
    if (isHeadingVisible && scrollY <= 190) {
      headingTangi.style.display = "none"; // Hide the heading
      isHeadingVisible = false; // Mark as not visible
    }
  });
  */

  
  
  
 /*-------------------------------------------------------*/
 /*-----------------------------------------------------------------*/
 //----------------------------------------
 /*const panelWrap = document.getElementById('panelWrap');
const dots = document.querySelectorAll('.dot');
const upArrow = document.getElementById('upArrow');
const downArrow = document.getElementById('downArrow');

let currentIndex = 0;
const totalSections = dots.length;
let isScrolling = false;
let sliderLocked = true; // Lock slider by default
let hideScrollbar = true; // Track if scrollbar should be hidden

// Function to update slide
function updateSlide(index) {
    if (index < 0 || index >= totalSections) return;

    panelWrap.style.transform = `translateY(-${index * 100}vh)`;
    currentIndex = index;

    // Unlock website scroll only when slider is fully completed
    if (currentIndex === totalSections - 1 || currentIndex === 0) {
        sliderLocked = false; // Unlock scroll
    } else {
        sliderLocked = true; // Lock scroll
    }

    // Hide scroll bar when at the top section
    if (currentIndex === 0) {
        document.body.style.overflow = 'hidden';
        hideScrollbar = true;
    }

    // Show scroll bar when transitioning from top to bottom and reaching the bottom
    if (currentIndex === totalSections - 1) {
        document.body.style.overflow = 'auto';
        hideScrollbar = false;
    }

    // Hide scroll bar when navigating from bottom to top and reaching the first section
    if (currentIndex === 0 && hideScrollbar) {
        document.body.style.overflow = 'hidden';
    }
}

// Lock or unlock page scrolling
function toggleScrollLock(lock) {
    document.body.style.overflow = lock ? 'hidden' : 'auto';
}

// Event listeners for dots
dots.forEach((dot, i) => {
    dot.addEventListener('click', () => updateSlide(i));
});

// Event listeners for arrows
upArrow.addEventListener('click', () => {
    if (currentIndex > 0) updateSlide(currentIndex - 1);
});
downArrow.addEventListener('click', () => {
    if (currentIndex < totalSections - 1) updateSlide(currentIndex + 1);
});

// Mouse wheel scroll
document.addEventListener('wheel', (e) => {
    if (isScrolling) return;

    if (!sliderLocked && window.scrollY > 0) return; // Normal scroll if slider is unlocked

    e.preventDefault(); // Prevent normal scroll while slider is active
    isScrolling = true;

    setTimeout(() => (isScrolling = false), 800); // Prevent rapid scrolling

    if (e.deltaY > 0 && currentIndex < totalSections - 1) {
        updateSlide(currentIndex + 1); // Scroll down
    } else if (e.deltaY < 0 && currentIndex > 0) {
        updateSlide(currentIndex - 1); // Scroll up
    }
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (isScrolling) return;

    if (!sliderLocked && window.scrollY > 0) return; // Normal scroll if slider is unlocked

    isScrolling = true;

    setTimeout(() => (isScrolling = false), 800); // Prevent rapid scrolling

    if (e.key === 'ArrowDown' && currentIndex < totalSections - 1) {
        updateSlide(currentIndex + 1); // Scroll down
    } else if (e.key === 'ArrowUp' && currentIndex > 0) {
        updateSlide(currentIndex - 1); // Scroll up
    }
});

// Touch gestures
let touchStartY = 0;
let touchEndY = 0;

document.addEventListener('touchstart', (e) => {
    touchStartY = e.touches[0].clientY;
});

document.addEventListener('touchend', (e) => {
    touchEndY = e.changedTouches[0].clientY;

    if (isScrolling) return;

    if (!sliderLocked && window.scrollY > 0) return; // Normal scroll if slider is unlocked

    isScrolling = true;

    setTimeout(() => (isScrolling = false), 800); // Prevent rapid scrolling

    if (touchStartY - touchEndY > 50 && currentIndex < totalSections - 1) {
        updateSlide(currentIndex + 1); // Scroll down
    } else if (touchEndY - touchStartY > 50 && currentIndex > 0) {
        updateSlide(currentIndex - 1); // Scroll up
    }
});

// Scroll event to re-lock slider
document.addEventListener('scroll', () => {
    if (!sliderLocked && window.scrollY === 0 && hideScrollbar) {
        sliderLocked = true; // Re-lock slider at the top
        toggleScrollLock(true);
    } else if (!sliderLocked && window.scrollY > 0 && !hideScrollbar) {
        toggleScrollLock(false); // Unlock scroll for rest of the website
    }
});

// Initial lock
toggleScrollLock(true);

// Transition end listener
panelWrap.addEventListener('transitionend', () => {
    if (!sliderLocked && currentIndex !== 0) toggleScrollLock(false); // Enable normal scrolling after slider completes
});

*/
const panelWrap = document.getElementById('panelWrap');
const dots = document.querySelectorAll('.dot');
const upArrow = document.getElementById('upArrow');
const downArrow = document.getElementById('downArrow');

let currentIndex = 0;
const totalSections = dots.length;
let isScrolling = false;
let sliderLocked = true; // Lock slider by default
let hideScrollbar = true; // Track if scrollbar should be hidden

// Function to update slide
function updateSlide(index) {
    if (index < 0 || index >= totalSections) return;

    panelWrap.style.transform = `translateY(-${index * 100}vh)`;
    currentIndex = index;

    // Unlock website scroll only when slider is fully completed
    if (currentIndex === totalSections - 1 || currentIndex === 0) {
        sliderLocked = false; // Unlock scroll
    } else {
        sliderLocked = true; // Lock scroll
    }

    // Hide scroll bar when at the top section
    if (currentIndex === 0) {
        document.body.style.overflow = 'hidden';
        hideScrollbar = true;
    }

    // Show scroll bar when transitioning from top to bottom and reaching the bottom
    if (currentIndex === totalSections - 1) {
        document.body.style.overflow = 'auto';
        hideScrollbar = false;
    }

    // Hide scroll bar when navigating from bottom to top and reaching the first section
    if (currentIndex === 0 && hideScrollbar) {
        document.body.style.overflow = 'hidden';
    }

    // Update active dot
    updateActiveDot(currentIndex);
}

// Lock or unlock page scrolling
function toggleScrollLock(lock) {
    document.body.style.overflow = lock ? 'hidden' : 'auto';
}

// Event listeners for dots
dots.forEach((dot, i) => {
    dot.addEventListener('click', () => updateSlide(i));
});

// Event listeners for arrows
upArrow.addEventListener('click', () => {
    if (currentIndex > 0) updateSlide(currentIndex - 1);
});
downArrow.addEventListener('click', () => {
    if (currentIndex < totalSections - 1) updateSlide(currentIndex + 1);
});

// Mouse wheel scroll
document.addEventListener('wheel', (e) => {
    if (isScrolling) return;

    if (!sliderLocked && window.scrollY > 0) return; // Normal scroll if slider is unlocked

    e.preventDefault(); // Prevent normal scroll while slider is active
    isScrolling = true;

    setTimeout(() => (isScrolling = false), 800); // Prevent rapid scrolling

    if (e.deltaY > 0 && currentIndex < totalSections - 1) {
        updateSlide(currentIndex + 1); // Scroll down
    } else if (e.deltaY < 0 && currentIndex > 0) {
        updateSlide(currentIndex - 1); // Scroll up
    }
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (isScrolling) return;

    if (!sliderLocked && window.scrollY > 0) return; // Normal scroll if slider is unlocked

    isScrolling = true;

    setTimeout(() => (isScrolling = false), 800); // Prevent rapid scrolling

    if (e.key === 'ArrowDown' && currentIndex < totalSections - 1) {
        updateSlide(currentIndex + 1); // Scroll down
    } else if (e.key === 'ArrowUp' && currentIndex > 0) {
        updateSlide(currentIndex - 1); // Scroll up
    }
});

// Touch gestures
let touchStartY = 0;
let touchEndY = 0;

document.addEventListener('touchstart', (e) => {
    touchStartY = e.touches[0].clientY;
});

document.addEventListener('touchend', (e) => {
    touchEndY = e.changedTouches[0].clientY;

    if (isScrolling) return;

    if (!sliderLocked && window.scrollY > 0) return; // Normal scroll if slider is unlocked

    isScrolling = true;

    setTimeout(() => (isScrolling = false), 800); // Prevent rapid scrolling

    if (touchStartY - touchEndY > 50 && currentIndex < totalSections - 1) {
        updateSlide(currentIndex + 1); // Scroll down
    } else if (touchEndY - touchStartY > 50 && currentIndex > 0) {
        updateSlide(currentIndex - 1); // Scroll up
    }
});

// Scroll event to re-lock slider
document.addEventListener('scroll', () => {
    if (!sliderLocked && window.scrollY === 0 && hideScrollbar) {
        sliderLocked = true; // Re-lock slider at the top
        toggleScrollLock(true);
    } else if (!sliderLocked && window.scrollY > 0 && !hideScrollbar) {
        toggleScrollLock(false); // Unlock scroll for rest of the website
    }
});

// Update active dot based on current section
function updateActiveDot(index) {
    dots.forEach((dot, i) => {
        if (i === index) {
            dot.classList.add('active'); // Highlight the current dot
        } else {
            dot.classList.remove('active'); // Remove highlight from other dots
        }
    });
}

// Initial lock
toggleScrollLock(true);

// Transition end listener
panelWrap.addEventListener('transitionend', () => {
    if (!sliderLocked && currentIndex !== 0) toggleScrollLock(false); // Enable normal scrolling after slider completes
});


//--------------------------------------------------------------------------------
function showIntroCard(cardId) {
    const cards = document.querySelectorAll('.intro-card');
    const menuItems = document.querySelectorAll('.intro-menu a');
    
    // Reset the active class and hide all cards
    cards.forEach(card => {
        card.classList.remove('active');
        card.style.display = 'none';
        card.style.opacity = 0;
    });

    // Show the selected card
    const activeCard = document.getElementById(cardId);
    activeCard.classList.add('active');
    activeCard.style.display = 'flex'; // Show active card again

    // Reset active class on menu items
    menuItems.forEach((item) => {
        item.classList.remove('active');
    });

    // Set active class on the selected menu item
    const activeMenuItem = document.querySelector(`.intro-menu a[onclick="showIntroCard('${cardId}')"]`);
    if (activeMenuItem) {
        activeMenuItem.classList.add('active');
    }
}

//------------------------------------------------------

const strings = ["TOKEN", "PAYMENT"];
    const typedElement = document.getElementById("typed");
    let currentIndexpage = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
      const currentString = strings[currentIndexpage];
      const typingSpeed = isDeleting ? 80 : 150; // Smoother speed adjustments

      if (!isDeleting) {
        charIndex++;
        typedElement.textContent = currentString.slice(0, charIndex);

        if (charIndex === currentString.length) {
          isDeleting = true;
          setTimeout(type, 2000); // Hold before deleting
          return;
        }
      } else {
        charIndex--;
        typedElement.textContent = currentString.slice(0, charIndex);

        if (charIndex === 0) {
          isDeleting = false;
          currentIndexpage = (currentIndexpage + 1) % strings.length; // Move to next string
        }
      }

      setTimeout(type, typingSpeed);
    }

    type();
    

    //======================================================================================

    