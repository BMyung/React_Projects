function Square(){
    return React.createElement('h1', { style: { backgroundColor: 'blue', display: "inline-block", height: 250, width: 250, color: "white", verticalAlign: "top" } }, 'White on Blue')
}

ReactDOM.render( Square(), document.getElementById('blue'));
ReactDOM.render(
    React.createElement('h1', { style: { backgroundColor: 'red', display: "inline-block", height: 250, width: 250, color: "blue", verticalAlign: "top"  } }, 'blue on red'),
    document.getElementById('red')
    );
ReactDOM.render(
    React.createElement('h1', { style: { backgroundColor: 'pink', display: "inline-block", height: 250, width: 250, color: "green", verticalAlign: "top" } },  'green on pink'),
    document.getElementById('pink')
    );