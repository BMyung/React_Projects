// const myButton = React.createElement("button", null, 'Click Me!');
// console.log(JSON.stringify(myButton));

const hello = React.createElement("span", null, "Hello Dojo");
const title = React.createElement("h2", null, "Things I Need To Do:")

ReactDOM.render(hello, document.getElementById("hello"));
ReactDOM.render(title, document.getElementById("content"));

// ReactDOM.render(myButton, document.getElementById('title'));