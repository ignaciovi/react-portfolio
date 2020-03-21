import React, { Component } from 'react';


const Projects = (props) => {
	return (
    <section className="site-section site-standard" id="project">
      <div className="container">       
        <h1 className="site-heading"> My Recent Projects </h1>
        <div className="row">
			   { props.children }   
        </div>        
      </div>
    </section>
		)
}

export default Projects;