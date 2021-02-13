import React, {useState} from 'react'
import { API_KEY_3, API_URL } from '../../api/api'

export default function LoginForm() {
    const [userData, setUserData] = useState({
        username: '',
        password: '',
        errors: {}
    });
    const [formError, setFormError] = useState({})
    const [loading, setloading] = useState(false)
   

    const validateFileds = () => {
        const errors = {}
        if (userData.username === '') {
           errors.username= "Поле не может быть пустым"
        }
        if (userData.password === '') {
           errors.password= "Поле не может быть пустым"
        }

        return errors
    }

    const onChangeHandler = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value,
            errors: {
                ...userData.errors,
                [e.target.name]: null
            }
        })
    }
    const handleBlur = (e) => {
        const errors = validateFileds()
        if(Object.keys(errors).length > 0) {
            setUserData({
                ...userData,
                errors: {...userData.errors, ...errors}
            })
       
        }
       
    }

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
        setloading(true)
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
                        username: userData.username,
                        password: userData.password,
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
            setloading(false)
        } catch (error) {
            setFormError({
                message: error.status_message
            })
            console.log('error: ', error)
            setloading(false)
        }
    }
    
    const onLogin = (e) => {
        e.preventDefault()
        const errors = validateFileds()
        if(Object.keys(errors).length > 0) {
            setUserData({
                ...userData,
                errors: {...userData.errors, ...errors}
            })
       
        } else {
            login()
        }
    }

    return (
        <form>
            <div className="mb-3">
                <label htmlFor="username" className="form-label">Login</label>
                <input
                    value={userData.username}
                    onChange={onChangeHandler} 
                    onBlur={handleBlur}
                    type="text"
                    className="form-control" 
                    name="username"
                    id="username" 
                />
                { userData.errors.username && <div className="invalid-feedback" style={{color: 'red'}}>{userData.errors.username}</div> }
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                    
                    value={userData.password}
                    onChange={onChangeHandler}
                    onBlur={handleBlur}
                    id="password" 
                    name="password"
                    type="password" 
                    className="form-control" 
                />
                { userData.errors.password && <div className="invalid-feedback" style={{color: 'red'}}>{userData.errors.password}</div> }
            </div>
            <button 
                type="submit" 
                className="btn btn-primary"
                onClick={onLogin}
                disabled={loading}
            >Войти</button>
            {formError.message && <div className="invalid-feedback" style={{color: 'red'}}>{formError.message}</div>}
        </form>
    )
}
