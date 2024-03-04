document.addEventListener("DOMContentLoaded", function () {
  const discussContainer = document.getElementById("discuss-container");
  const readContainer = document.getElementById("read-container");
  const postContainer = document.getElementById("post-container");

  discussContainer.classList.add("hidden");
  readContainer.classList.add("hidden");
  postContainer.classList.add("hidden");

  const createLoadingSpinner = () => {
    const loadingSpinner = document.createElement("div");
    loadingSpinner.className = "w-full flex justify-center items-center";
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

    discussContainer.classList.remove("hidden");
    readContainer.classList.remove("hidden");
    postContainer.classList.remove("hidden");
  }, 1000);
});
