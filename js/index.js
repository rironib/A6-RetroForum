let globalData = null;

async function fetchData() {
  try {
    const response = await fetch(
      "https://openapi.programming-hero.com/api/retro-forum/posts"
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    globalData = data.posts;

    loadDiscussData(globalData);
  } catch (error) {
    console.error("Error fetching or parsing JSON:", error);
  }
}

fetchData();

function loadDiscussData(data) {
  const discussContainer = document.getElementById("discuss-container");

  data.forEach((post) => {
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
            <img src="images/icons/time.svg" alt="">
            <span id="view-time">${post.view_count}</span>
            <span></span>
            <img src="images/icons/eye.svg" alt="">
            <span>${post.posted_time}</span>
          </div>
          <button class="read-button">
            <img src="images/icons/email.svg" alt="">
          </button>
        </div>
      </div>`;

    discussContainer.appendChild(postDiv);
  });
}
