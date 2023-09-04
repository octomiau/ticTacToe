/* const Square= ({id, player}) => {
  const [color, setColor] = React.useState('green');
  const palet = ["blue", "red", "green"];
  const getRandomColor =()=> palet[Math.floor(Math.random()*3)];
  return (
  //change color of square onclick
    <button onClick ={e => {
      const newColor = getRandomColor();
      setColor(newColor);
      e.target.style.background = color;
      e.stopPropagation(); // stop the event from reaching the parent
    }} style={{ background: color}}>
      <h1>{id}</h1>
    </button>
  );
};

const Board = () => {
  const [player, setPlayer] = React.useState(1);
 
  function renderSquare(i){
    return <Square id={i} player={player}></Square>;
  }
  return (
    <div className="game-board"
      onClick={(e) => { 
      setPlayer((player + 1) % 2);
      e.target.style.background = 'red';
      status = `Player ${player}`;
      }}>

      <div className="game-board" 
      onClick={() => { setPlayer(player === 1 ? 2 : 1); }}>
        <div className="grid-row"></div>
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
      </div>
      <div id="info">
        <h1>Turn of player {player}</h1>
      </div>
    </div>
  );
};

// ========================================

ReactDOM.render(<Board />, document.getElementById("root"));
*/
const Square = ({ id, player }) => {
  const [color, setColor] = React.useState('green');
  const palet = ["blue", "red", "green"];
  const getRandomColor = () => palet[Math.floor(Math.random() * 3)];
  
  return (
    <button 
      onClick={e => {
        const newColor = getRandomColor();
        setColor(newColor);
        e.stopPropagation();
      }} 
      style={{ background: color }}
    >
      <h1>{id}</h1>
    </button>
  );
};

const Board = () => {
  const [player, setPlayer] = React.useState(1);

  function renderSquare(i){
    return <Square id={i} player={player} />;
  }

  return (
    <div className="game-board" onClick={() => { setPlayer(player === 1 ? 2 : 1); }}>
      <div className="grid-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div id="info">
        <h1>Turn of player {player}</h1>
      </div>
    </div>
  );
};

ReactDOM.render(<Board />, document.getElementById("root"));
