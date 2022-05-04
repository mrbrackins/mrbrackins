import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './Nav'
import Projects from './Projects'
function App() {
    
    return (
        <div>
            <Nav></Nav>
            <Projects></Projects>
        </div>
    );
}
export default App;
// DOM element
if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}