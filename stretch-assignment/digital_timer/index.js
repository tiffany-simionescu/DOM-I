window.onload = function() {
  // timer variables
  let msTens = 0;
  let msHundreds = 0;
  let secondOnes = 0;
  let secondTens = 0;

  // Name of function
  let Interval;

  // Assign identifiers to timer nodes
  let addMsHundreds = document.querySelector("#msHundreds");
  let addMsTens = document.querySelector("#msTens");
  let addSecondOnes = document.querySelector("#secondOnes");
  let addSecondTens = document.querySelector("#secondTens");

  // Assign identifiers to button nodes
  let buttonStart = document.querySelector("#button-start");
  let buttonStop = document.querySelector("#button-stop");
  let buttonReset = document.querySelector("#button-reset");

  // Start Button
  buttonStart.addEventListener("click", e => {
    clearInterval(Interval);
    Interval = setInterval(digitalTimer, 10);
  });

  // Stop Button
  buttonStop.addEventListener("click", e => {
    clearInterval(Interval);
  });

  //Reset Button
  buttonReset.onclick = function() {
    // Remove redDigit class
    addMsHundreds.classList.remove("redDigit");
    addMsTens.classList.remove("redDigit");
    addSecondOnes.classList.remove("redDigit");
    addSecondTens.classList.remove("redDigit");

    clearInterval(Interval);

    msTens = "-";
    msHundreds = "-";
    secondOnes = "-";
    secondTens = "-";

    addMsHundreds.textContent = `${msHundreds}`;
    addMsTens.textContent = `${msTens}`;
    addSecondOnes.textContent = `${secondOnes}`;
    addSecondTens.textContent = `${secondTens}`;

    msTens = 0;
    msHundreds = 0;
    secondOnes = 0;
    secondTens = 0;
  };

  function digitalTimer() {
    msHundreds += 1;

    if (msHundreds < 9) {
      addMsHundreds.textContent = `${msHundreds}`;
    }

    if (msHundreds > 9) {
      msTens += 1;
      addMsTens.textContent = `${msTens}`;
      msHundreds = 0;
      addMsHundreds.textContent = `${msHundreds}`;
    }

    if (msTens < 9) {
      addMsTens.textContent = `${msTens}`;
    }

    if (msTens > 9) {
      secondOnes += 1;
      addSecondOnes.textContent = `${secondOnes}`;
      msTens = 0;
      addMsTens.textContent = `${msTens}`;
    }

    if (secondOnes < 9) {
      addSecondOnes.textContent = `${secondOnes}`;
    }

    if (secondOnes > 9) {
      secondTens += 1;
      addSecondTens.textContent = `${secondTens}`;
      secondOnes = 0;
      addSecondOnes.textContent = `${secondOnes}`;
    }

    if (secondTens === 1) {
      clearInterval(Interval);
      msTens = 0;
      msHundreds = 0;
      secondOnes = 0;
      secondTens = 1;
      addMsHundreds.textContent = `${msHundreds}`;
      addMsTens.textContent = `${msTens}`;
      addSecondOnes.textContent = `${secondOnes}`;
      addSecondTens.textContent = `${secondTens}`;
      addMsHundreds.className += " redDigit";
      addMsTens.className += " redDigit";
      addSecondOnes.className += " redDigit";
      addSecondTens.className += " redDigit";
      document.body.style.backgroundPosition = "center";
      document.body.style.backgroundSize = "cover";
    }
  }
};
