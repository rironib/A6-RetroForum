const fetchPostData = async () => {
  try {
    const res = await fetch(
      "https://openapi.programming-hero.com/api/retro-forum/latest-posts"
    );
    const posts = await res.json();

    loadPostData(posts);
  } catch (error) {
    const postContainer = document.getElementById("post-container");

    const postDiv = document.createElement("div");
    postDiv.className = "flex justify-center";

    postDiv.innerHTML = `
                        <div role="alert" class="lg:w-1/2 alert alert-error flex text-white">
                            <img class="w-5 h-5" src="images/icons/error.svg" alt="">
                            <span>No results were found for your request!</span>
                        </div>`;
    postContainer.appendChild(postDiv);
  }
};

fetchPostData();

const loadPostData = (posts) => {
  const postContainer = document.getElementById("post-container");
  const displayGrid = document.createElement("div");
  displayGrid.className =
    "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4";

  posts.forEach((post) => {
    const postedDate = post.author.posted_date
      ? post.author.posted_date
      : "No Publish Date";
    const designation = post.author.designation
      ? post.author.designation
      : "Unknown";

    const postDiv = document.createElement("div");
    postDiv.className = "p-6 border rounded-xl";

    postDiv.innerHTML = `
    <div class="h-full flex flex-col justify-between">
      <div>
        <div class="w-full h-48 bg-[#12132D0D] mb-6 rounded-xl overflow-hidden">
          <img class="w-auto h-auto" src="${post.cover_image}" alt="">
        </div>
    
        <div class="flex items-center text-[#12132D99] gap-2 mb-3">
          <img class="w-5 h-5" src="images/icons/calendar.svg" alt=""> ${postedDate}
        </div>
        <h3 class="text-xl font-bold mb-3">${post.title}</h3>
        <p class="text-[#12132D99] mb-4">${post.description}</p>
      </div>
      <div class="flex gap-3">
        <img class="w-10 h-10 rounded-full" src="${post.profile_image}" alt="">
        <div>
          <h5 class="font-bold">${post.author.name}</h5>
          <h6 class="text-sm text-[#12132D99]">${designation}</h6>
        </div>
      </div>
    </div>
    `;

    displayGrid.appendChild(postDiv);
  });
  postContainer.appendChild(displayGrid);
};
