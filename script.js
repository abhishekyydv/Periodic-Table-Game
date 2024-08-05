document.addEventListener("DOMContentLoaded", () => {
  const elements = [
    { symbol: "H", name: "Hydrogen" },
    { symbol: "He", name: "Helium" },
    { symbol: "Li", name: "Lithium" },
    { symbol: "Be", name: "Beryllium" },
    { symbol: "B", name: "Boron" },
    { symbol: "C", name: "Carbon" },
    { symbol: "N", name: "Nitrogen" },
    { symbol: "O", name: "Oxygen" },
    { symbol: "F", name: "Fluorine" },
    { symbol: "Ne", name: "Neon" },
    { symbol: "Na", name: "Sodium" },
    { symbol: "Mg", name: "Magnesium" },
    { symbol: "Al", name: "Aluminum" },
    { symbol: "Si", name: "Silicon" },
    { symbol: "P", name: "Phosphorus" },
    { symbol: "S", name: "Sulfur" },
    { symbol: "Cl", name: "Chlorine" },
    { symbol: "Ar", name: "Argon" },
    { symbol: "K", name: "Potassium" },
    { symbol: "Ca", name: "Calcium" },
    { symbol: "Sc", name: "Scandium" },
    { symbol: "Ti", name: "Titanium" },
    { symbol: "V", name: "Vanadium" },
    { symbol: "Cr", name: "Chromium" },
    { symbol: "Mn", name: "Manganese" },
    { symbol: "Fe", name: "Iron" },
    { symbol: "Co", name: "Cobalt" },
    { symbol: "Ni", name: "Nickel" },
    { symbol: "Cu", name: "Copper" },
    { symbol: "Zn", name: "Zinc" },
    { symbol: "Ga", name: "Gallium" },
    { symbol: "Ge", name: "Germanium" },
    { symbol: "As", name: "Arsenic" },
    { symbol: "Se", name: "Selenium" },
    { symbol: "Br", name: "Bromine" },
    { symbol: "Kr", name: "Krypton" },
    { symbol: "Rb", name: "Rubidium" },
    { symbol: "Sr", name: "Strontium" },
    { symbol: "Y", name: "Yttrium" },
    { symbol: "Zr", name: "Zirconium" },
    { symbol: "Nb", name: "Niobium" },
    { symbol: "Mo", name: "Molybdenum" },
    { symbol: "Tc", name: "Technetium" },
    { symbol: "Ru", name: "Ruthenium" },
    { symbol: "Rh", name: "Rhodium" },
    { symbol: "Pd", name: "Palladium" },
    { symbol: "Ag", name: "Silver" },
    { symbol: "Cd", name: "Cadmium" },
    { symbol: "In", name: "Indium" },
    { symbol: "Sn", name: "Tin" },
    { symbol: "Sb", name: "Antimony" },
    { symbol: "Te", name: "Tellurium" },
    { symbol: "I", name: "Iodine" },
    { symbol: "Xe", name: "Xenon" },
    { symbol: "Cs", name: "Cesium" },
    { symbol: "Ba", name: "Barium" },
    { symbol: "La", name: "Lanthanum" },
    { symbol: "Ce", name: "Cerium" },
    { symbol: "Pr", name: "Praseodymium" },
    { symbol: "Nd", name: "Neodymium" },
    { symbol: "Pm", name: "Promethium" },
    { symbol: "Sm", name: "Samarium" },
    { symbol: "Eu", name: "Europium" },
    { symbol: "Gd", name: "Gadolinium" },
    { symbol: "Tb", name: "Terbium" },
    { symbol: "Dy", name: "Dysprosium" },
    { symbol: "Ho", name: "Holmium" },
    { symbol: "Er", name: "Erbium" },
    { symbol: "Tm", name: "Thulium" },
    { symbol: "Yb", name: "Ytterbium" },
    { symbol: "Lu", name: "Lutetium" },
    { symbol: "Hf", name: "Hafnium" },
    { symbol: "Ta", name: "Tantalum" },
    { symbol: "W", name: "Tungsten" },
    { symbol: "Re", name: "Rhenium" },
    { symbol: "Os", name: "Osmium" },
    { symbol: "Ir", name: "Iridium" },
    { symbol: "Pt", name: "Platinum" },
    { symbol: "Au", name: "Gold" },
    { symbol: "Hg", name: "Mercury" },
    { symbol: "Tl", name: "Thallium" },
    { symbol: "Pb", name: "Lead" },
    { symbol: "Bi", name: "Bismuth" },
    { symbol: "Po", name: "Polonium" },
    { symbol: "At", name: "Astatine" },
    { symbol: "Rn", name: "Radon" },
    { symbol: "Fr", name: "Francium" },
    { symbol: "Ra", name: "Radium" },
    { symbol: "Ac", name: "Actinium" },
    { symbol: "Th", name: "Thorium" },
    { symbol: "Pa", name: "Protactinium" },
    { symbol: "U", name: "Uranium" },
    { symbol: "Np", name: "Neptunium" },
    { symbol: "Pu", name: "Plutonium" },
    { symbol: "Am", name: "Americium" },
    { symbol: "Cm", name: "Curium" },
    { symbol: "Bk", name: "Berkelium" },
    { symbol: "Cf", name: "Californium" },
    { symbol: "Es", name: "Einsteinium" },
    { symbol: "Fm", name: "Fermium" },
    { symbol: "Md", name: "Mendelevium" },
    { symbol: "No", name: "Nobelium" },
    { symbol: "Lr", name: "Lawrencium" },
  ];

  let currentElement = null;
  let score = 0;

  const elementNameDisplay = document.getElementById("element-name");
  const scoreDisplay = document.getElementById("score");
  const startButton = document.getElementById("start-game");
  const endButton = document.getElementById("end-game");
  const periodicTable = document.getElementById("periodic-table");

  function getRandomElement() {
    const randomIndex = Math.floor(Math.random() * elements.length);
    return elements[randomIndex];
  }

  function updateScore(value) {
    score += value;
    scoreDisplay.textContent = score;
  }

  function startGame() {
    currentElement = getRandomElement();
    elementNameDisplay.textContent = currentElement.name;
    // Remove previous highlights
    Array.from(periodicTable.getElementsByClassName("correct")).forEach(
      (cell) => cell.classList.remove("correct")
    );
    Array.from(periodicTable.getElementsByClassName("wrong")).forEach((cell) =>
      cell.classList.remove("wrong")
    );
    periodicTable.addEventListener("click", checkAnswer); // Reattach event listener
  }

  function endGame() {
    elementNameDisplay.textContent = `Game Over! Final Score: ${score}`;
    currentElement = null; // End game
    periodicTable.removeEventListener("click", checkAnswer); // Remove event listener
  }

  function checkAnswer(event) {
    if (!currentElement) return;

    const clickedElement = event.target;
    if (clickedElement.classList.contains("element")) {
      const symbol = clickedElement.getAttribute("data-symbol");
      const name = clickedElement.getAttribute("data-name");

      if (name === currentElement.name) {
        clickedElement.classList.add("correct");
        updateScore(50);
      } else {
        clickedElement.classList.add("wrong");
        updateScore(-50);
      }

      // Set new random element for next round
      currentElement = getRandomElement();
      elementNameDisplay.textContent = currentElement.name;
    }
  }

  startButton.addEventListener("click", startGame);
  endButton.addEventListener("click", endGame);
});
