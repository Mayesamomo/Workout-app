const form = document.getElementById('workout-form');
const exerciseName = document.getElementById('exercise-name');
const sets = document.getElementById('sets');
const reps = document.getElementById('reps');
const time = document.getElementById('time');
const savedExercises = JSON.parse(localStorage.getItem('exercises')) || [];

form.addEventListener('submit', function (e) {
  e.preventDefault();
  if (exerciseName.value && sets.value && reps.value && time.value) {
    const newExercise = {
      exerciseName: exerciseName.value,
      sets: sets.value,
      reps: reps.value,
      time: time.value
    };
    savedExercises.push(newExercise);
    localStorage.setItem('exercises', JSON.stringify(savedExercises));
    displaySavedExercises();
    form.reset();
  }
});

function displaySavedExercises() {
  const savedExercisesTable = document.getElementById('saved-exercises');
  savedExercisesTable.innerHTML = '';
  savedExercises.forEach(function(exercise) {
    const tr = document.createElement('tr');
    const tdExerciseName = document.createElement('td');
    tdExerciseName.textContent = exercise.exerciseName;
    const tdSets = document.createElement('td');
    tdSets.textContent = exercise.sets;
    const tdReps = document.createElement('td');
    tdReps.textContent = exercise.reps;
    const tdTime = document.createElement('td');
    tdTime.textContent = exercise.time;
    tr.appendChild(tdExerciseName);
    tr.appendChild(tdSets);
    tr.appendChild(tdReps);
    tr.appendChild(tdTime);
    savedExercisesTable.appendChild(tr);
  });
}

displaySavedExercises();
