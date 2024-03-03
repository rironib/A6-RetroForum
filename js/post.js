fetch("https://openapi.programming-hero.com/api/retro-forum/latest-posts")
  .then((res) => res.json())
  .then((data) => loadData(data))
  .catch((error) => {
    console.error("Error fetching or parsing JSON:", error);
  });

function loadData(data) {
  const postContainer = document.getElementById("post-container");

  data.forEach((post) => {
    const postDiv = document.createElement("div");
    postDiv.className = "p-6 border rounded-xl";

    const postedDate = post.author.posted_date
      ? post.author.posted_date
      : "No Publish Date";
    const designation = post.author.designation
      ? post.author.designation
      : "Unknown";

    postDiv.innerHTML = `
      <div class="w-full h-48 bg-[#12132D0D] mb-6 rounded-xl overflow-hidden">
          <img class="w-auto h-auto" src="${post.cover_image}" alt="">
      </div>
      <div class="flex items-center text-[#12132D99] gap-2 mb-3">
          <img class="w-5 h-5" src="images/icons/calendar.svg" alt="">
          ${postedDate}
      </div>
      <h3 class="text-xl font-bold mb-3">${post.title}</h3>
      <p class="text-[#12132D99] mb-4">${post.description}</p>
      <div class="flex gap-3">
          <img class="w-10 h-10 rounded-full" src="${post.profile_image}" alt="">
          <div>
              <h5 class="font-bold">${post.author.name}</h5>
              <h6 class="text-sm text-[#12132D99]">${designation}</h6>
          </div>
      </div>`;

    postContainer.appendChild(postDiv);
  });
}
