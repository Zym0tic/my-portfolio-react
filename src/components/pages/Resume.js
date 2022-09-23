import React from 'react';
import resume from '../../PDF/luke-resume.pdf';

export default function Resume() {
  return (
    <div>
      <h1>Resume</h1>
      <div>
      <a
        href= { resume }
        download
      >
        Click here to download Resume
      </a>
    </div>
    <h2>Proficiencies</h2>
    <ul>
      <li>HTML5</li>
      <li>CSS3</li>
      <li>JavaScript</li>
      <li>Bootstrap</li>
      <li>Node.js</li>
      <li>Express.js</li>
      <li>MySQL/Sequelize</li>
      <li>MongoDB/Mongoose</li>
    </ul>
    </div>
  );
}
