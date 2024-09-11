document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.image');
  let draggedElement = null; // Track the currently dragged element

  images.forEach(image => {
    image.addEventListener('dragstart', dragStart);
    image.addEventListener('dragover', dragOver);
    image.addEventListener('drop', drop);
  });

  function dragStart(e) {
    draggedElement = e.target; // Store the element being dragged
    e.dataTransfer.setData('text/plain', e.target.id); // Set data to transfer
  }

  function dragOver(e) {
    e.preventDefault(); // Allow the drop
  }

  function drop(e) {
    e.preventDefault();
    const dropzone = e.target; // Element where the drop occurs

    if (dropzone.classList.contains('image') && draggedElement) {
      // Swap the backgroundImage of the draggedElement and the dropzone
      const tempImage = dropzone.style.backgroundImage;
      dropzone.style.backgroundImage = draggedElement.style.backgroundImage;
      draggedElement.style.backgroundImage = tempImage;

      // Reset the draggedElement after the drop
      draggedElement = null;
    }
  }
});
