function toggleDescription(event) {
  const post = event.target.closest('.post');
  const description = post.querySelector('.post__description');
  const button = post.querySelector('.toggle-button');

  if (description.style.display === "none" || description.style.display === "") {
    description.style.display = "block";
    button.textContent = "Collapse Abstract";
  } else {
    description.style.display = "none";
    button.textContent = "Expand Abstract";
  }
}