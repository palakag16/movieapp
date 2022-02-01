import axios from "axios"

export const removeSelected = ()=>{
    return{
        type:"REMOVE_SELECTED",
        
    }

}

export const selectedMovie = (movieid)=>{
    return {
        type: "SELECTED_MOVIE",
        payload:movieid
    }
}

export const fetchmovies = ()=> async (dispatch)=>{
        const resp = await axios.get('https://api.themoviedb.org/3/list/55?api_key=b480228b5ffdd47a7c1bfb65db08ffa8&language=en-US');
        dispatch({
            type: "FETCH_DATA",
            payload:resp.data.items
        })
    }
