// Load saved theme from localStorage
window.onload = function () {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark");
  }
};

// Toggle theme and save preference
document.getElementById("themeToggleBtn").addEventListener("click", function () {
  document.body.classList.toggle("dark");

  // Save current theme
  const isDark = document.body.classList.contains("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");

  // Animate the image on click
  const img = document.getElementById("imageElement");
  img.classList.remove("animate-bounce");
  void img.offsetWidth; // trigger reflow to restart animation
  img.classList.add("animate-bounce");
});
