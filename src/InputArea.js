
export default function InputArea({ newItem, setNewItem, addItem }) {
    return (
        <div className="input-area">
            <input
                type="text"
                placeholder="Add an item..."
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
            />
            <button onClick={() => addItem()}>Add</button>
        </div>
    )
}