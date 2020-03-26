import React, { Component } from 'react';
import './Home.css'

class Home extends Component {
    render(){
      //   let links = this.props.menuLinks.map((link, i) =>{
      //  return(
      //   <div key={i} className="dottedBox">
        
      //  <i aria-hidden="true" className={`fa ${ link.icon }`}></i>
      //   <a href={link.link} target="_self">{link.text}</a>
      // </div>
      //   )});
           const links = this.props.menuLinks.map((link, i) => {
             return  (
        //  (link.text !=='Home') ?
           <div key={i} className="dotted">   
                <i aria-hidden="true" className={`fas ${ link.icon }`}></i>    
        {i!==0 ? <a href={link.link} target="_self">{link.text}</a> : <input type='file'/>}
                  </div> 
        // : ''
                ); 
            }); 
      
  return (
    <div>
   <h2 style={{color: 'Green'}}>Family time </h2>
   <h1 style={{color:'black'}}> Adjustment system of Records:</h1>
   <h4 style={{color:'black'}}> ASOR: Asystem For MAking manual Reporting adjustment for General Accounts</h4>
        
          <div className="links">
      
              { links }
    
          </div>
          // </div>
 ) 
}
}
export default Home;
