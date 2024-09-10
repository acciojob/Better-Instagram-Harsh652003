document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.image');

  images.forEach(image => {
    image.addEventListener('dragstart', dragStart);
    image.addEventListener('dragover', dragOver);
    image.addEventListener('drop', drop);
  });

function dragStart(e) {
  console.log("dragStart is triggered");
  e.dataTransfer.setData('text/plain', e.currentTarget.id);
}
  function dragOver(e) {
    e.preventDefault(); // Prevent default to allow drop
  }
function drop(e) {
  e.preventDefault();
  const id = e.dataTransfer.getData('text');
  const draggableElement = document.getElementById(id);
  const dropzone = e.target;

  if (dropzone.classList.contains('image')) {
    // Extract the URLs from the backgroundImage property
    let urlRegex = /url\("([^"]*)"\)/;
    let draggableUrl = draggableElement.style.backgroundImage.match(urlRegex)[1];
    let dropzoneUrl = dropzone.style.backgroundImage.match(urlRegex)[1];
    // Swap the background images
    draggableElement.style.backgroundImage = `url("${dropzoneUrl}")`;
    dropzone.style.backgroundImage = `url("${draggableUrl}")`;
  }
}
});
