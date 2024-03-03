document.addEventListener("DOMContentLoaded", function () {
  const readButtons = document.querySelectorAll("#read-button");

  readButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const post = button.closest("#post");
      post.classList.remove("bg-[#12132D0D]");
      post.classList.add("bg-[#797DFC1A]", "border-[#797DFC]");

      const discussTitle = post.querySelector("#discuss-title").textContent;
      const viewTime = post.querySelector("#view-time").textContent;

      const readList = document.getElementById("read-list");
      const readElement = document.createElement("div");
      readElement.className =
        "flex justify-between gap-1 bg-white p-4 rounded-xl";

      readElement.innerHTML = `
            <h2 class="font-mulish font-bold">${discussTitle}</h2>
            <div class="flex items-center gap-1 pe-4 text-[#12132D99]">
              <img class="w-5 h-5" src="images/icons/eye.svg" alt=""> ${viewTime}
            </div>
          `;
      readList.appendChild(readElement);

      const totalRead = document.getElementById("total-read");
      totalRead.innerText = `(${readList.childElementCount})`;
    });
  });
});
