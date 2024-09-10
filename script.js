document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.image');

  images.forEach(image => {
    image.addEventListener('dragstart', dragStart);
    image.addEventListener('dragover', dragOver);
    image.addEventListener('drop', drop);
  });

  function dragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.id);
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
      const parent = dropzone.parentNode;
      parent.insertBefore(draggableElement, dropzone.nextSibling);
    }
  }
});
