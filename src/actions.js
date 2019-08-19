import { CHANGE_SEARCH_FIELD,
         RESQEST_ROBOTS_PENDING,
         RESQEST_ROBOTS_SUCCESS,
         RESQEST_ROBOTS_FAILED
} from './constants.js';

export const setSearchField = (text) => ({
        type: "CHANGE_SEARCH_FIELD",
        payload: text
})

export const requestRobots = () => (dispatch) => {
        dispatch({ type: RESQEST_ROBOTS_PENDING });
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => dispatch({ type: RESQEST_ROBOTS_SUCCESS, payload: data }))
            .catch(error => dispatch({type: RESQEST_ROBOTS_FAILED, payload: error }))
}

