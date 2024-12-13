const express =require('express');
const router=express.Router();
const tasks=require('./MOCK_DATA.json');

router.get('/', (req, res) => {
	res.status(200).json(tasks);
});

router.get('/:id', (req, res) => {
	const taskid=req.params.id
	const task=tasks.find(task=>task.id===taskid);
	if(task){
		res.status(200).json(tasks);

	}else{
		res.status(404).json('error not found');
	}
});

router.post('/', (req, res) => {
	// Crear una tarea
});

router.put('/:id', (req, res) => {
	// Editar la tarea identificada con id...
});

router.delete('/:id', (req, res) => {
	// Eliminar la tarea identificada con id...
});

module.exports=router;