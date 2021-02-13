import React from 'react'
import { API_KEY_3, API_URL } from '../../api/api'

export default function Login() {

    const fetchApi = (url, options = {}) => {
        return new Promise((resolve, reject) => {
            fetch(url, options)
                .then(res => {
                    if(res.status < 400) {
                        return res.json()
                    } else {
                        throw res
                    }
                })
                .then(data => {
                   resolve(data)
                })
                .catch(res => {
                    res.json().then(e => {
                        reject(e)
                    })
                })
       })
    }

    const login = async () => {
        try {
            const data = await fetchApi(`${API_URL}/authentication/token/new?api_key=${API_KEY_3}`)

            const response = await fetchApi(`${API_URL}/authentication/token/validate_with_login?api_key=${API_KEY_3}` ,
                {
                    method: "POST",
                    mode: "cors",
                    headers: {
                        "Content-type": "application/json"
                    },
                    body: JSON.stringify({
                        username: "andrey-dum",
                        password: "aa20081992aa",
                        request_token: data.request_token
                    })
            })

            const { session_id } = await fetchApi(`${API_URL}/authentication/session/new?api_key=${API_KEY_3}` ,
            {
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    request_token: response.request_token
                })  
            })

            console.log('session_id', session_id);
   
        } catch (error) {
            console.log('error: ', error)
        }
    }


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
                onClick={login}
            >
                Login
            </button>
        </div>
    )
}
