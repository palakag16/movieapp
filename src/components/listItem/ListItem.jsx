import "./listItem.scss";
import { useNavigate } from 'react-router-dom';


export default function ListItem({ data }) {
  const navigate = useNavigate();
  const { overview, media_type, id } = data;


  return (
    <div
      className="listItem" onClick={() => { navigate(`/${id}`) }}>
      <img
        src="http://hdfreewallpaper.net/wp-content/uploads/2015/12/hd-cartoons-free-wallappers-for-desktop.jpg"
        alt=""
      />

      <div className="moviedesc">{overview.slice(0, 80) + " " + "..."}</div>
      <div className="movieInfo"><span>2h 22m</span> <div><span className="greydot">.</span>{media_type}</div></div>

    </div>
  );
}
