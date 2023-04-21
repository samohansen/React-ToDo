export default function ToDos({ items, deleteItem, showEdit, setShowEdit, updatedText, setUpdatedText, editItem }) {
    return (
      <ul>
        {items.map((item) => {
          return (
            <div>
              <li key={item.id} onClick={() => setShowEdit(item.id)}>
                {item.value}
                <button
                  className="delete-button"
                  onClick={() => deleteItem(item.id)}
                >
                  ❌
                </button>
                <button
                    className="edit-button"
                    onClick={() => setShowEdit(item.id)}    
                >
                    ✏️
                </button>
              </li>
  
              {showEdit === item.id ? (
                <div>
                  <input
                    type="text"
                    value={updatedText}
                    onChange={(e) => setUpdatedText(e.target.value)}
                  />
                  <button onClick={() => editItem(item.id, updatedText)}>
                    Update
                  </button>
                </div>
              ) : null}
            </div>
          );
        })}
      </ul>
    );
  }