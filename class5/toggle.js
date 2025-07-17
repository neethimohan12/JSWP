 // Starter code
    const toggleBtn = document.getElementById('toggle');
    let isOn = false;

    toggleBtn.addEventListener('click', () => {
      isOn = !isOn; // Toggle the boolean

      if (isOn) {
        toggleBtn.textContent = "ON";
        toggleBtn.style.backgroundColor = "green";
      } else {
        toggleBtn.textContent = "OFF";
        toggleBtn.style.backgroundColor = "red";
      }
    });