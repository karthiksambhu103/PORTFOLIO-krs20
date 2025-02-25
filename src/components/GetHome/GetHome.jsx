import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import homeIconWhite from './../../assets/home_white.png';
import homeIconBlack from './../../assets/home_black.png';
import './GetHome.css';

class GoHome extends Component {
    navigateToHome = () => {
        const { history } = this.props;
        history.push('/');
    }

    
    render() {   
        const { location } = this.props;
        const whiteBtn = location.pathname === '/'; 
        return (  
            <button className={`go-home-btn ${
                whiteBtn ? 'white-bkg' : 'black-bkg'
            }`} onClick={this.navigateToHome}>
                <img 
                    className='home-icon'
                    src={whiteBtn ? homeIconBlack : homeIconWhite}
                    alt="Home icon"
                />
            </button>
        );
    }
}
 
export default withRouter(GoHome);