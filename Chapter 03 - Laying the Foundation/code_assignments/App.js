import React from 'react';
import ReactDOM from 'react-dom/client';

const Title = () => <h1 id="heading" className="title">Namaste React using jsx 🚀</h1>;
const subtitle = <h2 className="subtitle">I am subtitle</h2>
const HeadingComponent = () => (
<div id="container">
    <Title /> {/* Composing Components , i.e, writing one component inside another */}
    {subtitle}😅 {/* Using JSX to render an element */}
    {/* Using JSX to render a variable */}  
    <h1 id="heading" className= "headingg">Functional Component using jsx 🚀</h1>
</div>
)
  


ReactDOM.createRoot(document.getElementById("root")).render(<HeadingComponent />);