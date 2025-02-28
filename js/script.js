// Wait for the document to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Video switching functionality
    const video1 = document.getElementById('video1');
    const video2 = document.getElementById('video2');
    const videos = [video1, video2];
    let currentVideoIndex = 0;
    
    // Function to switch videos
    function switchVideo() {
      // Hide current video
      videos[currentVideoIndex].classList.remove('active');
      
      // Update index to next video
      currentVideoIndex = (currentVideoIndex + 1) % videos.length;
      
      // Show next video
      videos[currentVideoIndex].classList.add('active');
      
      // Ensure the next video plays from the beginning
      videos[currentVideoIndex].currentTime = 0;
      videos[currentVideoIndex].play();
    }
    
    // Add event listener for when the first video ends
    video1.addEventListener('ended', switchVideo);
    video2.addEventListener('ended', switchVideo);
    
    // Make sure the first video is playing
    video1.play();
    
    // Navbar background change on scroll
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
    
    // Add active class to nav links based on scroll position
    const sections = document.querySelectorAll('section, header');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', function() {
      let current = '';
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= (sectionTop - 200)) {
          current = section.getAttribute('id');
        }
      });
      
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
          link.classList.add('active');
        }
      });
    });
  });

window.addEventListener("load", () => {
    const grid = document.querySelector(".gallery-grid");
    let images = grid.querySelectorAll(".gallery-item");

    images.forEach(img => {
        img.style.breakInside = "avoid"; // Prevents images from breaking across columns
    });
});
