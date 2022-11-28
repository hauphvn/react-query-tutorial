import React from 'react';
import { Link } from "react-router-dom";
type HomeProps = {
  className?: string
}
function Home(props: HomeProps) {
  return (
    <div>
      <p>Home</p>
      <hr/>
      <ul>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/redux-post'}>Redux post</Link></li>
        <li><Link to={'/react-query-post'}>React query post</Link></li>
      </ul>
    </div>
  );
}

export default Home;
