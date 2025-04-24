/*
<div id="parent">
    <div id="child1">
        <h1>I am Child 1</h1>
    </div>
    <div id="child2">
    <h1>I am Child 2</h1>
    </div>
</div>

*/

const parent = React.createElement( "div", {id: "parent"}, [
    React.createElement("div", {id: "child1"}, React.createElement("h1", {id:"heading"}, "I am Child 1")),
    React.createElement("div", {id: "child2"}, React.createElement("h2", {id:"heading"}, "I am Child 2"))])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);