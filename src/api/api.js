export const API_URL = "https://api.themoviedb.org/3"
export const API_KEY_3 = "3f1cf69b161c9865ecb563afc274607a"
export const API_KEY_4 = "https://api.themoviedb.org/3"



// export const moviesApi = {
//     getMovies: () => {
//     }
// }



export const fetchApi = (url, options = {}) => {
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

// export const login = async () => {
//     try {
//         const data = await fetchApi(`${API_URL}/authentication/token/new?api_key=${API_KEY_3}`)

//         const response = await fetchApi(`${API_URL}/authentication/token/validate_with_login?api_key=${API_KEY_3}` ,
//             {
//                 method: "POST",
//                 mode: "cors",
//                 headers: {
//                     "Content-type": "application/json"
//                 },
//                 body: JSON.stringify({
//                     username: "andrey-dum",
//                     password: "aa20081992aa",
//                     request_token: data.request_token
//                 })
//         })

//         const { session_id } = await fetchApi(`${API_URL}/authentication/session/new?api_key=${API_KEY_3}` ,
//         {
//             method: "POST",
//             mode: "cors",
//             headers: {
//                 "Content-type": "application/json"
//             },
//             body: JSON.stringify({
//                 request_token: response.request_token
//             })  
//         })

//         console.log('session_id', session_id);

//     } catch (error) {
//         console.log('error: ', error)
//     }
// }