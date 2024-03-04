const discussContainer = document.getElementById("discuss-container");
const readContainer = document.getElementById("read-container");

const fetchDiscussData = async (searchText) => {
  try {
    const res = await fetch(
      `https://openapi.programming-hero.com/api/retro-forum/posts?category=${searchText}`
    );
    const data = await res.json();
    const posts = data.posts;
    loadDiscussData(posts);
  } catch (error) {
    const postDiv = document.createElement("div");
    postDiv.className = "flex justify-center";

    postDiv.innerHTML = `
                        <div role="alert" class="alert alert-error flex text-white">
                            <img class="w-5 h-5" src="images/icons/error.svg" alt="">
                            <span>No results were found for your request!</span>
                        </div>`;
    discussContainer.appendChild(postDiv);
  }
};

fetchDiscussData("");

const loadDiscussData = (posts) => {
  discussContainer.textContent = "";

  if (posts.length === 0) {
    const postDiv = document.createElement("div");
    postDiv.className = "alert alert-error flex text-white";

    postDiv.innerHTML = `<img class="w-5 h-5" src="images/icons/error.svg">
                          <span>No results were found for your request!</span>`;
    discussContainer.appendChild(postDiv);
  }

  posts.forEach((post) => {
    const postDiv = document.createElement("div");
    postDiv.id = "post";
    postDiv.className =
      "w-full bg-[#12132D0D] flex flex-col lg:flex-row gap-6 p-4 lg:p-10 border rounded-xl";

    const badge = post.isActive ? "badge-success" : "badge-error";

    postDiv.innerHTML = `
      <div class="indicator w-24 h-24 bg-white rounded-xl">
        <span class="indicator-item badge ${badge} border-2 border-white"></span>
        <img class="w-full rounded-xl" src="${post.image}" alt="${post.author.name}">
      </div>
      <div class="w-full post-content">
        <div class="flex gap-5 mb-3">
          <span># ${post.category}</span>
          <h6>Author : <span>${post.author.name}</span></h6>
        </div>
        <div id="discuss-title" class="font-mulish text-[#12132D] text-2xl font-bold mb-4">${post.title}</div>
        <div class="mb-5 pb-5 text-[#12132D99] border-b-2 border-dashed">${post.description}</div>
        <div class="flex justify-between">
          <div class="flex items-center gap-2 lg:gap-2 text-[#12132D99]">
            <img src="images/icons/comment.svg" alt="">
            <span>${post.comment_count}</span>
            <span></span>
            <img src="images/icons/eye.svg" alt="">
            <span id="view-time">${post.view_count}</span>
            <span></span>
            <img src="images/icons/time.svg" alt="">
            <span>${post.posted_time} min</span>
          </div>
          <button class="read-button">
            <img src="images/icons/email.svg" alt="">
          </button>
        </div>
      </div>`;

    discussContainer.appendChild(postDiv);
  });
  //
};

// Handle Search

const searchBtn = () => {
  const searchInput = document.getElementById("search-input");
  const searchText = searchInput.value;

  fetchDiscussData(searchText);

  // Spinner
  const spinner = () => {
    discussContainer.classList.add("hidden");
    readContainer.classList.add("hidden");

    const createLoadingSpinner = () => {
      const loadingSpinner = document.createElement("div");
      loadingSpinner.className = "w-full flex justify-center items-center";
      loadingSpinner.innerHTML = `<div class="loading loading-infinity loading-lg"></div>`;
      return loadingSpinner;
    };

    const loadingSpinner = createLoadingSpinner();

    const loadingContainer = document.getElementById("discuss-section");

    loadingContainer.appendChild(loadingSpinner);

    setTimeout(function () {
      loadingSpinner.remove();

      discussContainer.classList.remove("hidden");
      readContainer.classList.remove("hidden");
    }, 1000);
  };
  spinner();
};
