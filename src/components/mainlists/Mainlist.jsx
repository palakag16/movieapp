import React from 'react';
import List from '../list/List';
import { useSelector } from "react-redux";
const Mainlist = () => {
  const movies = useSelector((state) => state.movieReducer.movies);

  const slice1 = movies.slice(0, 10);
  const slice2 = movies.slice(10, 20);
  const slice3 = movies.slice(20, 30);
  return <div style={{ margin: "100px 0px 0px 0px" }}>
    <List data={slice1} title="Continue to Watch" />
    <List data={slice2} title="Trending's Now"/>
    <List data={slice3} title="Blockbuster Hits"/>
  </div>;
};

export default Mainlist;
