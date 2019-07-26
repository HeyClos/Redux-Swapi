// we'll need axios
import axios from "axios";

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure
export const FETCHING = "FETCHING";
export const SUCCESS = "SUCCESS";
export const FAILURE = "FAILURE";

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator


export const getPeople = () => dispatch => {
    dispatch({ type:FETCHING });
    const request = axios.get(`https://swapi.co/api/people/`);
    request.then(response => {
        console.log(response)
      dispatch({
          type: SUCCESS, 
          payload: response.data.results});
    })
    .catch(err => {
      dispatch({
          type: FAILURE, 
          error: err});
    });
  };

// export const getPhoto = () => dispatch => {
//   dispatch({ type: FETCH_PHOTO_START });
//   return axios.get('https://api.nasa.gov/planetary/apod?api_key=oRfyRS10eDa3d4gEBPvksyA0XJ0gnCMfVNFY1PNw')
//   .then(res => {
//     dispatch({
//       type: FETCH_PHOTO_SUCCESS,
//       payload: res.data
//     })
//   })
//   .catch(({error}) => {
//     console.log(error)
//     dispatch({
//       type: FETCH_PHOTO_FAILURE
//     })
//   })
// };
