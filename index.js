const renderNavFooter = () => {
  const navBar = document.getElementById("nav-bar");
  const footer = document.getElementById("footer");
  const navHtml = `
        <div class="logo">
          <img src="images/logo.png" alt="logo in the nav bar" />
          <p class="nav-heading">My Learning Journal</p>
        </div>
        <ul class="nav-links">
          <a href="index.html"><li class="section-link">Home</li></a>
          <a href="about.html"><li class="section-link">About Me</li></a>
        </ul>
    `;

  const footerHtml = `
    <div class="footer-text">
        <h3>My Learning Journal</h3>
        <p>Copyright ©️ 2024</p>
      </div>
    `;
  if (navBar) {
    navBar.innerHTML = navHtml;
  }

  if (footer) {
    footer.innerHTML = footerHtml;
  }
};

renderNavFooter();

const heroText = document.getElementById("hero-text");
if (heroText) {
  heroText.addEventListener("click", () => {
    location.href = "blog-post.html";
  });
}

const showHiddenPosts = () => {
  const hiddenPosts = document.querySelectorAll(".hidden");
  const viewMore = document.getElementById("view-more");

  if (viewMore) {
    viewMore.addEventListener("click", () => {
      hiddenPosts.forEach((post) => post.classList.toggle("hidden"));
      viewMore.style.display = "none";
    });
  }
};

showHiddenPosts();
