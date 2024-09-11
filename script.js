document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.image');

  images.forEach(image => {
    image.addEventListener('dragstart', dragStart);
    image.addEventListener('dragover', dragOver);
    image.addEventListener('drop', drop);
  });
let draggedImage;

function dragStart(e) {
  draggedImage = e.target.style.backgroundImage;
  e.dataTransfer.setData('text/plain', e.target.id);
}

	function dragOver(e) {
    e.preventDefault(); // This is necessary to allow a drop
}
	
function drop(e) {
  e.preventDefault();
  const id = e.dataTransfer.getData('text');
  const draggableElement = document.getElementById(id);
  const dropzone = e.target;

  if (dropzone.classList.contains('image')) {
    // Swap the backgroundImage of the draggedElement and the dropzone
    const tempImage = dropzone.style.backgroundImage;
    dropzone.style.backgroundImage = draggedImage;
    draggableElement.style.backgroundImage = tempImage;
  }
}
});
