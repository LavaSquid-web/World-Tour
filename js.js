function toggleReadMore(button) {
  const blogCard = button.closest('.blog-card');
  const moreText = blogCard.querySelector('.more-text');

  if (moreText.style.display === "inline") {
    moreText.style.display = "none";
    button.textContent = "Read More";
  } else {
    moreText.style.display = "inline";
    button.textContent = "Read Less";
  }
}