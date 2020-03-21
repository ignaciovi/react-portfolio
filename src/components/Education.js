import React, { Component } from 'react';

const Education  = (props) => {
  const data = props.portfolioData;
  let edList;
  edList = data.education.map((ed, i) => (
    <div className="stepper__list" key={ i }>
      <div className="stepper__item">
        <div className="stepper__step">
          <div className="stepper__education">
            <div className="stepper__circle stepper__circle__education"> </div>
            <div className="stepper__education-heading"> { ed.title } </div>
          </div>
        </div>
        <div className="stepper__info">
          <div className="stepper__body__white">
            <h3 className="stepper__title"> { ed.company }</h3>
            {ed.description.map((bulletPoint,j) => (
            <div className="stepper__sub" key={ j }> { bulletPoint } </div>))}
          </div>
        </div>              
      </div>
    </div>     
  ))
	return(
    <section className="site-section" id="work">
      <div className="container">       
        <h1 className="site-heading"> Education  </h1>
        <div className="stepper">
           { edList }                             
        </div>
      </div>
    </section>	  
		)
}



export default Education ;