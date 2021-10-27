function playSound(e) {
    // select the audio element associated with the pressed key
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  //  select the key itself to run the css key animation
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
      // Stop the funtion from running if there's no audio ass. with that key
      if (!audio) return; 
      audio.currentTime = 0; // rewind to the start of the audio everytime key is pressed
      audio.play();
      // Add the playing class to activate the css animation
      key.classList.add("playing");
  };

  function removeTransition(e) {
    if (e.propertyName !== "transform") return; // skip it if it's not a transform
    // this refers to what was called in the forEach event listener
    this.classList.remove("playing");
  }

  const keys = document.querySelectorAll(".key");
  keys.forEach(key => key.addEventListener("transitionend", removeTransition));
  document.addEventListener("keydown", playSound);