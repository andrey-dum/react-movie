import React, {useState} from 'react'
import MovieApi from '../../api/api'

import {getUser, updateAuth} from '../../store/auth/actions'
import {useDispatch} from 'react-redux'

import Cookies from 'universal-cookie'
import { useActions } from '../../hooks/useActions'

const cookies = new Cookies()

export default function LoginForm({handleClose}) {
    const dispatch = useDispatch()

    const { getUser } = useActions()
    
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
        setFormError({})
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

    // const updateSessionId = (session_id) => {
    //     cookies.set('session_id', session_id, {
    //       path: "/",
    //       maxAge: 3600
    //     })
    // }
      


    const login = async () => {
        setloading(true)
        try {
            const data = await MovieApi.get(`/authentication/token/new`)

            const response = await MovieApi.post(`/authentication/token/validate_with_login` ,
                {
                    body: {
                        username: userData.username,
                        password: userData.password,
                        request_token: data.request_token
                    }
            })
      
            const { session_id } = await MovieApi.post(`/authentication/session/new` ,
            {
                body: {
                    request_token: response.request_token
                }
            })
    
            // const user = await MovieApi.get(`/account`, {
            //     params: {
            //         session_id: session_id
            //     }
            // })
            
        
            setloading(false)
            handleClose()

            getUser(session_id)

            // dispatch(updateAuth({user: user, sessionId: session_id}))
            // updateSessionId(session_id)
        } catch (error) {
            setFormError({
                message: error.status_message
            })
            // console.log('error: ', error)
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
