import React, {useState} from 'react'

import LoginForm from './LoginForm';
import ModalBox from '../UIComponents/ModalBox'

export default function Login({updateUser}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

   


    // const login = () => {
    //     fetchApi(`${API_URL}/authentication/token/new?api_key=${API_KEY_3}`)
    //     .then(data => {
    //         return fetchApi(`${API_URL}/authentication/token/validate_with_login?api_key=${API_KEY_3}` ,
    //         {
    //             method: "POST",
    //             mode: "cors",
    //             headers: {
    //                 "Content-type": "application/json"
    //             },
    //             body: JSON.stringify({
    //                 username: "andrey-dum",
    //                 password: "aa20081992aa",
    //                 request_token: data.request_token
    //             })
    //         })
    //     })
    //     .then(data => {
    //         return fetchApi(`${API_URL}/authentication/session/new?api_key=${API_KEY_3}`,
    //         {
    //             method: "POST",
    //             mode: "cors",
    //             headers: {
    //                 "Content-type": "application/json"
    //             },
    //             body: JSON.stringify({
    //                 request_token: data.request_token
    //             })  
    //         })
    //     })
    //     .then(data => console.log('data: ', data))
    //     .catch(e => console.log('error: ', e))
    //}


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
                <LoginForm updateUser={updateUser} handleClose={handleClose} />
            </ModalBox>
        </div>
    )
}
