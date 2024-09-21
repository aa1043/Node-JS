const fs = require('fs');
const filepath = "./task.json";

const loadTasks = () => {
  try {
    const dataBuffer = fs.readFileSync(filepath);
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {

  }
};

const saveTasks = (tasks) => {
  const dataJSON = JSON.stringify(tasks);
  fs.writeFileSync(filepath, dataJSON);
};

const addTask = (task) => {
  const tasks = loadTasks();  // Load existing tasks (or an empty array if none exist)
  tasks.push({ task });  // Push the new task into the array
  saveTasks(tasks);  // Save the updated task array
  console.log("Task Added");
};

const listTasks =()=>
{
  const tasks=loadTasks()
  tasks.forEach((task,index)=>
  console.log(`${index+1}:${task.task}`)
  )
}
const command = process.argv[2];
const argument = process.argv[3];

if (command === 'add') {
  addTask(argument);
} else if (command === 'list') {
  listTasks();
} else if (command === 'remove') {
  removeTask(parseInt(argument));
} else {
  console.log("Command Not Found");
}
