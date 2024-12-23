// Function to filter wallpapers based on the selected category
function filterWallpapersByCategory(filter) {
  const wallpapers = document.querySelectorAll(".wallpaper, .mwallpaper");
  const buttons = document.querySelectorAll(".filterButton");

  // Update active button styles
  buttons.forEach((button) => {
    if (button.innerText.toLowerCase().includes(filter)) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  // Show or hide wallpapers based on the filter
  wallpapers.forEach((wallpaper) => {
    const categories = wallpaper.dataset.category.split(",");
    if (filter === "all" || categories.includes(filter)) {
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

// Combine both filters for a seamless experience
function applyCombinedFilters(filter = "all") {
  const searchInput = document.getElementById("searchBar").value.toLowerCase();
  const wallpapers = document.querySelectorAll(".wallpaper, .mwallpaper");

  wallpapers.forEach((wallpaper) => {
    const categories = wallpaper.dataset.category.split(",");
    const text = wallpaper.querySelector("p").innerText.toLowerCase();

    // Check if it matches the category and search input
    if ((filter === "all" || categories.includes(filter)) && text.includes(searchInput)) {
      wallpaper.style.display = "block";
    } else {
      wallpaper.style.display = "none";
    }
  });

  // Update active button styles
  const buttons = document.querySelectorAll(".filterButton");
  buttons.forEach((button) => {
    if (button.innerText.toLowerCase().includes(filter)) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });
}
   
