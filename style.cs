body {
    font-family: Arial, sans-serif;
    text-align: center;
}

.board {
    display: grid;
    grid-template-columns: repeat(3, 100px);
    grid-template-rows: repeat(3, 100px);
    gap: 5px;
    margin: 20px auto;
    width: 320px;
}

.cell {
    width: 100px;
    height: 100px;
    background: linear-gradient(135deg, #ff9a9e, #fad0c4);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2em;
    cursor: pointer;
    border-radius: 10px;
}

.cell.taken {
    pointer-events: none;
}

#status {
    font-size: 1.5em;
    margin: 20px 0;
}

button {
    padding: 10px 20px;
    font-size: 1em;
    background: #007BFF;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 5px;
}

button:hover {
    background: #0056b3;
}