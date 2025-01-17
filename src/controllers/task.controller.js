import Task from '../models/task.models.js';

export const getTasks = async (req, res) => {
	const tasks = await Task.find();
	res.json(tasks);
};

export const getTask = async (req, res) => {
	const task = await Task.findById(req.params.id);
	if (!task) return res.status(404).json({ message: 'Task not found' });
	res.json(task);
};

export const createTask = async (req, res) => {
	const { title, description, date } = req.body;

	const newTask = new Task({
		title,
		description,
		date,
	});

	const saveTask = await newTask.save();
	res.json(saveTask);
};

export const updateTask = async (req, res) => {
	const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
		new: true,
	});
	if (!task) return res.status(404).json({ message: 'Task not found.' });
	res.json(task);
};

export const deleteTask = async (req, res) => {
	const task = await Task.findByIdAndDelete(req.params.id);
	if (!task) return res.status(404).json({ message: 'Task not found.' });
	res.json(task);
};
