
const span = document.querySelector("h1 span");

const wordsList = [
  "Developer..",
  "Programer",
  "Coder...",
  "Front-End-Developer.",
];

function autoType(wordsList, element) {
  let wordIndex = 0;
  let charecterIndex = 0;
  let reverseType = false;
  let skipUpdate = 0;

  const intervalId = setInterval(() => {
    if (skipUpdate) {
      skipUpdate--;
      return;
    }

    if (!reverseType) {
      skipUpdate = 2;
      element.innerText = element.innerText + wordsList[wordIndex][charecterIndex];
      charecterIndex++;
    } else {
      element.innerText = element.innerText.slice(0, element.innerText.length - 1);
      charecterIndex--;
    }

    if (charecterIndex === wordsList[wordIndex].length) {
      skipUpdate = 7;
      reverseType = true;
    }

    if (element.innerText.length === 0 && reverseType) {
      reverseType = false;
      wordIndex++;
    }

    if (wordIndex === wordsList.length) {
      wordIndex = 0;
    }
  }, 100);
}


autoType(wordsList, span);