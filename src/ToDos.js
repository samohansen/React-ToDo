import { Divider, IconButton, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Button, TextField, Box } from "@mui/material";

export default function ToDos({ 
  items, deleteItem, showEdit, 
  setShowEdit, updatedText, setUpdatedText, 
  editItem, updatedDescription, setUpdatedDescription
}) {
    return (
      <ul>
        {items.map((item) => {
          return (
            <div className="list-area">
              <Divider/>
              <Box
                className="list-item"
                sx={{ m: 1 }}  
                key={item.id} 
                onClick={() => setShowEdit(item.id)}
              >
                <Box>
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: 'bold' }}
                  >
                    {item.value}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    sx={{ fontWeight: 'light', color: 'gray' }}
                  >
                    {item.description}
                  </Typography>
                </Box>
                
                {/* Icon Area  */}
                <Box>
                  <IconButton 
                      aria-label="edit"
                      className="IconButton"
                      onClick={() => setShowEdit(item.id)}
                      sx={{ m: .5 }}
                  >
                      <EditIcon />
                  </IconButton>

                  <IconButton 
                      aria-label="delete"
                      className="IconButton"
                      onClick={() => deleteItem(item.id)}
                      sx={{ m: .5 }}
                  >
                      <DeleteIcon />
                  </IconButton>
                </Box>
              </Box>
  
              {/* Edit Area */}

              {showEdit === item.id ? (
                <Box 
                  className="edit-area"
                  sx={{ mb: 2.5 }}  
                >
                  <TextField 
                        id="updateValue" 
                        className="input-field"
                        variant="outlined" 
                        placeholder="Task Name"
                        value={updatedText}
                        onChange={(e) => setUpdatedText(e.target.value)}
                        size="small"
                    />
                    <TextField 
                        id="updateDescription" 
                        className="input-field"
                        variant="outlined" 
                        placeholder="Task Description"
                        value={updatedDescription}
                        onChange={(e) => setUpdatedDescription(e.target.value)}
                        size="small"
                    />

                  <Button
                    className="form-button" 
                    variant="contained"
                    color="warning"
                    onClick={() => editItem(item.id, updatedText, updatedDescription)}
                    >
                        Update
                  </Button>
                  <Button
                    className="form-button" 
                    variant="outlined"
                    color="warning"
                    onClick={() => setShowEdit(-1)}
                    >
                        Close
                  </Button>
                </Box>
              ) : null}
              
            </div>
          );
        })}
      </ul>
    );
  }