import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../Modal/Modal';
import homeAnime from './../../assets/home_anime.gif';
import './Home.css';


class Home extends Component { 
    state = { showModal: false };

    componentDidMount() {
        setTimeout(() => {
            this.setState({ showModal: true});
        }, 1000);
    }

    closeModal = () => {
        this.setState({ showModal: false});
    }

    render() { 
        return (
            <div className="home-container">
                {this.state.showModal && <Modal closeModal={this.closeModal}/>}
                <div className="header-text">
                    <h1>Welcome To My Portfolio</h1>
                    <p>This is Kartik Sambhu, a front end developer!!</p>
                </div>
                <div className="head-btns">
                    <Link to='/about' className='btn btn-white'>
                        <p className="btn-text"> Know More About Me</p>
                    </Link>
                    <Link to='/contact' className='btn btn-transparent'>
                        <p className="btn-text">Mail Mee!</p>
                    </Link>
                </div>
                <div className="splash-image">
                    <img src={homeAnime} alt="animation" className='home-anime' />
                </div>
            </div>
        );
    }
}
 
export default Home;