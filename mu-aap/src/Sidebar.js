import React from 'react';
import './App.css';

class Sidebar extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          isOpen : true
      }
      this._menuToggle = this._menuToggle.bind(this);
      this._handleDocumentClick = this._handleDocumentClick.bind(this);
    }
  
    componentWillUnmount() {
      document.removeEventListener('click', this._handleDocumentClick, false);
    }
    _handleDocumentClick(e) {
      if (!this.refs.root.contains(e.target) && this.state.isOpen === true) {
        this.setState({
        isOpen: false
      });
      };
    }
    _menuToggle(e) {
      e.stopPropagation();
      this.props.stateStatus(!this.state.isOpen);
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
  
    render() {
        let menuStatus = this.state.isOpen ? 'isopen' : '';
      let links = this.props.menuLinks.map((link, i) => 
      <li ref={i + 1}>  
      <img src={link.icon}/>
       {/* <i aria-hidden="true" className={`fa ${ link.icon }`}> {link.icon}</i> */}
     <a href={link.link} target="_self">{link.text}</a>
    </li>);
      return (
        <div ref="root">
       <div className="menubar">
          <div className="hambclicker" onClick={ this._menuToggle }></div>
          <div id="hambmenu" className={ menuStatus }><span></span><span></span><span></span><span></span></div>
          <div className="title">
            <span>{ this.props.title }</span>
          </div>
        </div>
       
        <div>
          <div className={menuStatus} id='menu'>
            <ul>
              { links }
            </ul>
          </div>
          </div>
          </div>
      )
    }
  }
   
export default Sidebar;