window.addEventListener('load', () => {
    const landingContent = document.getElementById('landing');
    setTimeout(() => {
      landingContent.style.transform = 'translateY(0)';
      landingContent.style.opacity = '1';
    }, 500); // Start animation after 500ms
  });