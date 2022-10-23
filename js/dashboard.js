const addWrokoutBtn = document.querySelector("#addWorkoutBtn");
const workoutList = document.querySelector("#workoutList");
const workoutAdded = document.querySelector(".workoutAdded");

addWrokoutBtn.addEventListener("click", onClick);

function onClick(evt) {
    console.log("OnClick was called", evt);
    addWorkout(workoutAdded.value);
}

function addWorkout (context) {
    const li = document.createElement("li");
    li.innerText = context;
    workoutList.appendChild(li);
}
