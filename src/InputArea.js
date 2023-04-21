import { Button, TextField, Box } from "@mui/material";

export default function InputArea({ 
    newItem, setNewItem, newDescription, setNewDescription, addItem 
}) {
    return (
        <Box className="input-area">
            <TextField 
                id="taskname" 
                className="input-field"
                label="Task Title" 
                variant="outlined" 
                placeholder="Task name"
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
                fullWidth
            />
            <br/>
            <TextField
                id="description" 
                className="input-field"
                label="Task Description" 
                variant="outlined" 
                multiline
                placeholder="Task description"
                value={newDescription}
                onChange={(e) => setNewDescription(e.target.value)}
                fullWidth
            />
            <br/>
            <Button
                className="form-button" 
                variant="contained"
                onClick={() => addItem()}
            >
                Add Task
            </Button>
        </Box>
        
    )
}