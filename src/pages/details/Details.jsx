import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { selectedMovie,removeSelected } from '../../redux/actions/index';
import {
    PlayArrow,
    Add,
    ThumbUpAltOutlined,
    ThumbDownOutlined,
} from "@material-ui/icons";
import './detail.scss';
const Details = () => {
    const { id } = useParams();
    const movies = useSelector((state) =>state.movieReducer.movies);
    const dispatch = useDispatch();
    useEffect(() => {
        if (id !== '') {
            dispatch(selectedMovie(id));
        }
        return ()=>{
            dispatch(removeSelected());
        }
    }, [])
    return (<>
    {movies.map((el)=>{
       return <div className='moviedetails'>
        <div className='leftside'>
            <img
                src="http://hdfreewallpaper.net/wp-content/uploads/2015/12/hd-cartoons-free-wallappers-for-desktop.jpg"
                alt=""
            />
        </div>
        <div className="itemInfo">
            <div className='title'>{el.title}</div>
            <div className='desc'> {el.overview}</div>
            <div className="genre">{el.media_type}</div>

            <div className="icons">
                <PlayArrow className="icon" />
                <Add className="icon" />
                <ThumbUpAltOutlined className="icon" />
                <ThumbDownOutlined className="icon" /> 
                
            </div>
            <div className="itemInfoTop">
                <span>1 hour 14 mins</span>
                <span className="limit">+16</span>
                <span>1999</span>
            </div>
        </div>

    </div>
    })}   
    </>)
}

export default Details;
