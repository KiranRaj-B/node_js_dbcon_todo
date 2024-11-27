//this is the way to update the things 
const { connect } = require("./connectDB.js");
const Todo = require("./todoModel.js");

// Create a new Todo
const CreateTodo = async () => {
    try {
        await connect(); // Connect to the database
        const todo = await Todo.create({
            title: "New Todo",
            dueDate: new Date(),
            completed: false,
        });
        console.log(`Created Todo with ID: ${todo.id}`);
    } catch (error) {
        console.error("Error creating Todo:", error);
    }
};

// Update an existing Todo
const UpdateTodo = async () => {
    try {
        await connect(); // Connect to the database
        const [updated] = await Todo.update(
            { completed: true }, // Update the 'completed' field to true
            { where: { title: 'New Todo' } } // Find the Todo by title
        );
        
        if (updated) {
            console.log('Todo updated successfully');
        } else {
            console.log('Todo not found or nothing was updated');
        }
    } catch (error) {
        console.error("Error updating Todo:", error);
    }
};

// Delete a Todo
const DeleteTodo = async () => {
    try {
        await connect(); // Connect to the database
        const deleted = await Todo.destroy({
            where: { title: 'New Todo' } // Find the Todo by title and delete it
        });

        if (deleted) {
            console.log('Todo deleted successfully');
        } else {
            console.log('Todo not found');
        }
    } catch (error) {
        console.error("Error deleting Todo:", error);
    }
};

// Run all operations sequentially
(async () => {
    await CreateTodo();  // Create a new Todo
    await UpdateTodo();  // Update the Todo
    await DeleteTodo();  // Delete the Todo
})();
