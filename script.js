document.getElementById('add-task-button').addEventListener('click', function() {
  const taskTitle = document.getElementById('task-title').value;
  const taskDetails = document.getElementById('task-details').value;

  if (taskTitle.trim() === '') {
      alert('Por favor, ingrese un título para la tarea.');
      return;
  }

  const taskCard = document.createElement('div');
  taskCard.className = 'task-card bg-dark text-white p-3 mb-3 text-center mt-2';

  const taskTitleElement = document.createElement('h3');
  taskTitleElement.textContent = taskTitle;

  const taskDetailsElement = document.createElement('p');
  taskDetailsElement.textContent = taskDetails;

  const deleteButton = document.createElement('button');
  deleteButton.className = 'delete-task-button';
  deleteButton.textContent = 'Borrar';

  deleteButton.addEventListener('click', function() {
      taskCard.remove();
  });

  taskCard.appendChild(taskTitleElement);
  taskCard.appendChild(taskDetailsElement);
  taskCard.appendChild(deleteButton);

  document.getElementById('task-list').appendChild(taskCard);

  document.getElementById('task-title').value = '';
  document.getElementById('task-details').value = '';
});

