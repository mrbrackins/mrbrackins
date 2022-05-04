import React from 'react';
import ReactDOM from 'react-dom';
function Projects() {
    const navStyle = {
        marginTop: 20,
       
      }
    return (
        <div className='projects_container'>
<div className='projects'>
           <div className='project'>
           <p><strong>RGB Color Game</strong> <a href="https://rgb.mrbrackins.com/">View</a></p> 
           <img className='project_image' src="https://images.mrbrackins.com/wp-content/uploads/2022/05/Screen-Shot-2022-05-04-at-7.41.53-AM.png"/>
          
           <p>Tooling: HTML, CSS, JS</p>
           <a href="https://github.com/mrbrackins/RGB_ColorPickerGame"><p>Github</p></a>
           </div>


           <div className='project'>
           <p><strong>Twitch Clone</strong> <a href="https://mrbrackins.github.io/">View</a></p> 
           <img className='project_image' src="https://images.mrbrackins.com/wp-content/uploads/2022/05/Screen-Shot-2022-05-03-at-4.39.42-PM.png"/>
          
           <p>Tooling: React, Redux, Webpack, PostCSS, Gulp Pug, Expess, Node</p>
           <a href="https://github.com/mrbrackins/mrbrackins.github.io"><p>Github</p></a>
           
           </div>


           <div className='project'>
           <p><strong>Protect Our Culture Landing Page</strong> <a href="https://protectourculture.org/">View</a></p> 
           <img className='project_image' src="https://images.mrbrackins.com/wp-content/uploads/2022/05/Screen-Shot-2022-05-04-at-7.43.46-AM-1.png"/>
          
           <p>Tooling: Wordpress, LiveCanvas, HTML, CSS, JS</p>
           </div>


           <div className='project'>
           <p><strong>Table of 10 Mastermind Website</strong> <a href="https://tableof10mastermind.com/">View</a></p> 
           <img className='project_image' src="https://images.mrbrackins.com/wp-content/uploads/2022/05/Screen-Shot-2022-05-04-at-7.45.11-AM.png"/>
          
           <p>Tooling: Laravel, Vue JS, Blade</p>
        
           </div>


          

           
          
           
       </div>
    
        </div>
       
    );
}
export default Projects;
// DOM element
if (document.getElementById('projects')) {
    ReactDOM.render(<Projects />, document.getElementById('projects'));
}