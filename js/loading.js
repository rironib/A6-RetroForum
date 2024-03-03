document.addEventListener("DOMContentLoaded", function () {
  const discussContainer = document.getElementById("discuss-container");
  const readContainer = document.getElementById("read-container");
  const postContainer = document.getElementById("post-container");

  discussContainer.style.display =
    readContainer.style.display =
    postContainer.style.display =
      "none";

  const createLoadingSpinner = () => {
    const loadingSpinner = document.createElement("div");
    loadingSpinner.classList.add("flex", "justify-center", "items-center");
    loadingSpinner.innerHTML = `<div class="loading loading-infinity loading-lg"></div>`;
    return loadingSpinner;
  };

  const loadingSpinnerOne = createLoadingSpinner();
  const loadingSpinnerTwo = createLoadingSpinner();

  const loadingContainerOne = document.getElementById("discuss-section");
  const loadingContainerTwo = document.getElementById("post-section");

  loadingContainerOne.appendChild(loadingSpinnerOne);
  loadingContainerTwo.appendChild(loadingSpinnerTwo);

  setTimeout(function () {
    loadingSpinnerOne.remove();
    loadingSpinnerTwo.remove();

    discussContainer.style.display = readContainer.style.display = "block";
    postContainer.style.display = "grid";
  }, 2000);
});
