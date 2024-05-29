import Task from "../models/task.js";
import messageFormat from "../config/message.js";
import { getPagination } from "../helpers/getPagination.js";
// import Task from "../models/task.js";

export const createTask = async (req, res) => {
    if (!req.body.title) {
        return res.status(400).send({message: 'content cannot be empty'});
    }
    try {
        const newTask = new Task({
            title: req.body.title,
            description: req.body.description,
            done: req.body.done ? req.body.done : false,
        });
        const taskSaved = await newTask.save();
        console.log("aqui2");
        res.json(taskSaved);
    } catch (error) {
        messageFormat(error.message, "danger");
        res.status(500);
    }
};

export const findAllTasks = async (req, res) => {
    try {
         const { size, page, title} = req.query;

         const condition = title ? {
            title: {$regex: new RegExp(title), $options: "i"},
         } : {};

         const { limit, offset } = getPagination(page, size);

         const data = await Task.paginate(condition, { offset, limit });
         res.json({
            totalItems: data.totalDocs,
            tasks: data.docs,
            totalPages: data.totalPages,
            currentPage: data.page
         });
    }catch (error) {
};
}

export const findOneTask = async (req, res) => {

    try {
        const task = await Task.findById(req.params.id);
        if (!task){
            return res.status(400).json({ message: `Task with id ${req.params.id}does not exist`})
        }
        res.json(task);
    } catch (error) {
        messageFormat(error.message, "danger");
        res.status(500);
    }
};

export const findAllDonetasks = async (req, res) => {
    try {
        const tasks = await Task.find({ done: true });
        res.json(tasks);
    } catch (error) {
        messageFormat(error.message, "danger");
        res.status(500);
    }
};

export const deleteTask = async (req, res) => {
    try {
        const data = await Task.findByIdAndDelete(req.params.id);
        res.json(data);
    } catch (error) {
        messageFormat(error.message, "danger");
        res.status(500);
    }
};

export const updateTask = async (req, res) => {
    try {
        const updateTask = await Task.findByIdAndUpdate(req.params.id, req.body);
        res.json(updateTask);
    } catch (error) {
        messageFormat(error.message, "danger");
        res.status(500);
    }
};