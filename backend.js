// Function to filter wallpapers based on the selected category
function filterWallpapersByCategory(filter) {
  const wallpapers = document.querySelectorAll(".wallpaper, .mwallpaper");
  const buttons = document.querySelectorAll(".filterButton");

  // Update active button styles
  buttons.forEach((button) => {
    if (button.innerText.toLowerCase().includes(filter.replace(",", " "))) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  // Show or hide wallpapers based on the filter
  wallpapers.forEach((wallpaper) => {
    const categories = wallpaper.dataset.category.split(",");
    const filterParts = filter.split(",");

    // Check if the wallpaper matches all parts of the filter
    const matches = filterParts.every((part) => categories.includes(part));

    if (filter === "all" || matches) {
      wallpaper.style.display = "block"; // Show matching wallpapers
    } else {
      wallpaper.style.display = "none"; // Hide non-matching wallpapers
    }
  });
}

// Function to filter wallpapers based on the search input
function filterWallpapers() {
  const searchInput = document.getElementById("searchBar").value.toLowerCase();
  const wallpapers = document.querySelectorAll(".wallpaper, .mwallpaper");

  wallpapers.forEach((wallpaper) => {
    const text = wallpaper.querySelector("p").innerText.toLowerCase();
    if (text.includes(searchInput)) {
      wallpaper.style.display = "block"; // Show wallpaper if it matches the search
    } else {
      wallpaper.style.display = "none"; // Hide wallpaper if it doesn't match
    }
  });
}

// Function to combine category and search filters
function applyCombinedFilters(filter = "all") {
  const searchInput = document.getElementById("searchBar").value.toLowerCase();
  const wallpapers = document.querySelectorAll(".wallpaper, .mwallpaper");

  wallpapers.forEach((wallpaper) => {
    const categories = wallpaper.dataset.category.split(",");
    const text = wallpaper.querySelector("p").innerText.toLowerCase();
    const filterParts = filter.split(",");

    // Check if it matches the category filter and search input
    const matchesCategory = filter === "all" || filterParts.every((part) => categories.includes(part));
    const matchesSearch = text.includes(searchInput);

    if (matchesCategory && matchesSearch) {
      wallpaper.style.display = "block"; // Show if matches both filters
    } else {
      wallpaper.style.display = "none"; // Hide if it doesn't match
    }
  });

  // Update active button styles
  const buttons = document.querySelectorAll(".filterButton");
  buttons.forEach((button) => {
    if (button.innerText.toLowerCase().includes(filter.replace(",", " "))) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });
}

// Attach event listeners to buttons and search bar
document.querySelectorAll(".filterButton").forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.innerText.toLowerCase().replace(" ", ",");
    applyCombinedFilters(filter);
  });
});

document.getElementById("searchBar").addEventListener("input", () => {
  const activeFilter = document.querySelector(".filterButton.active");
  const filter = activeFilter ? activeFilter.innerText.toLowerCase().replace(" ", ",") : "all";
  applyCombinedFilters(filter);
});
