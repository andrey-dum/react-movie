import React, {useState} from 'react'

import LoginForm from './LoginForm';
import ModalBox from '../UIComponents/ModalBox'

export default function Login({updateSessionId}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
           
            <button
                className="btn btn-outline-light" 
                type="button"
                onClick={handleShow}
            >
                Login
            </button>
            <ModalBox
                title={'Авторизация'}
                show={show}
                handleClose={handleClose}
                handleShow={handleShow}
            >
                <LoginForm 
                    handleClose={handleClose} 
                    updateSessionId={updateSessionId} 
                />
            </ModalBox>
        </div>
    )
}
