import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

const Modal = ({ closeModal }) => {
    return ReactDOM.createPortal(
        <div onClick={closeModal} className="modal-overlay">
            <div onClick={(e) => e.stopPropagation()} className="modal-container">
                <div className="upper-section">
                    <h1>Hello Viewer!!!</h1>
                    <p className="close" onClick={closeModal}>&times;</p>
                </div>
                <div className="middle-section">
                    <h3>I'm Kartik Sambhu, a Front-End Developer!</h3>
                    <p>Do You Wish To Collab for a Project With Me?</p>
                    <p>Contact Me using the contact tab given.</p>
                    <p>OR Connect With Me On LinkedIn --&gt;&gt;</p>
                </div>
                <div className="lower-section">
                    {/* Change this anchor tag to a button */}
                    <button onClick={closeModal} className='modal-btn btn-red'>Close</button>
                    <a href="https://www.linkedin.com/in/kartik-sambhu-b94300270/" target="_blank" rel='noreferrer' className='modal-btn btn-green'>
                        Connect Now!!
                    </a>
                </div>
            </div>
        </div>,
        document.getElementById('modal')
    );
}

export default Modal;
