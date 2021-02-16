import {useDispatch} from 'react-redux'
import { bindActionCreators } from 'redux'

import * as AppActionCreators from '../store/auth/actions'
import * as MoviesActionCreators from '../store/movies/actions'

const ActionCreators = {
    ...AppActionCreators,
    ...MoviesActionCreators
}


export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(ActionCreators, dispatch)
}