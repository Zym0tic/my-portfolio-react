import React from 'react';
import LukeImg from '.../images/luke-hiroshima.jpg';

export default function Home() {
  return (
    <div>
      <h1>About</h1>
      <img className="img-fluid" src= {LukeImg} alt="BigCo Inc. logo"/>
      <p>
      I am a Canadian born programmer currently living and studying web development in Philadelphia, PA. I started out learning HTML, CSS, JavaScript, React, and Bootstrap on my own and have become a master Googler. I have recently decided to continue my journey by taking the Penn LPS immersive Full-Stack Bootcamp in hopes that it can help me on my path to gaining a full-time Developer position. Aside from coding my passions include: Music, Motorcycles, Cooking, Nature and hanging out with my dog Casca.
      </p>
    </div>
  );
}
