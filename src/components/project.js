import camManImg from '../images/campaign-manager-img.PNG';
import watchMeNowImg from '../images/WatchmeNowhomepage.png';
import criminalMedals from '../images/criminal-medals.PNG';
import noteTaker from '../images/note-taker.PNG';
import jate from '../images/jate.PNG';

const projects = [
  {
    id: 1,
    name: "Campaign Manager",
    description:
      "Full stack application using node.js, express.js, mysql2, sequelize, express-handlebars, sequelize to organize and manage Campaigns in DND. Users can login as either a dm or a player. As dms, a user can login and create campaigns they are involved in to manage. As players, users can log in to join different campaigns and store their characters linked to different campaigns.",
    img: camManImg,
    url: "https://vast-temple-92235.herokuapp.com/",
    repo: "https://github.com/Zym0tic/campaign-manager",
  },
  {
    id: 2,
    name: "Watch Me Now",
    description:
      "When searching for films to watch, it is often difficult to find what streaming services it is currently on. We wanted an app to combine IMDB, Rotten Tomatoes score, and the ability to add to watchlist to keep track of all movies a user wants to see and the option to rate it once watched. When I go to the homepage, I see my watchlist and have the choice to click on different movies added to it and see on what streaming websites it is available. When I click on the search bar, I can search for any movie and am presented with the ability to rate it, see what streaming services it is on, its Rotten Tomatoes and IMDB rating, and film description.",
    img: watchMeNowImg,
    url: "https://zym0tic.github.io/watchlist-maker/",
    repo: "https://github.com/Zym0tic/watchlist-maker",
  },
  {
    id: 3,
    name: "Criminal Medals",
    description:
      "The front end for a professional jewlery business based out of Philadelphia. This is in progress and the back end will full funtionality is on it's way. In the future I will use react for the views, express.js for the server, mongoDB/Mongoose for the database and node.js to make a complete MERN app.",
    img: criminalMedals,
    url: "https://zym0tic.github.io/criminal-medals-preview/",
    repo: "https://github.com/Zym0tic/criminal-medals-preview",
  },
  {
    id: 4,
    name: "Note Taker",
    description:
      "A full stack app which when you add a note it will save and open up again. you can add new notes as many times as you want. This application is deployed on Heroku",
    img: noteTaker,
    url: "https://shielded-plains-71563.herokuapp.com/",
    repo: "https://github.com/Zym0tic/note-taker",
  },
  {
    id: 5,
    name: "JATE",
    description:
      "A text editor app where you can enter code snippets to be saved for the next time you want to open it. This application was a test app for creating a PWA which can be installed on any device.",
    img: jate,
    url: "https://zym0tic.github.io/watchlist-maker/",
    repo: "https://github.com/Zym0tic/PWA-text-editor",
  },
  {
    id: 6,
    name: "JATE",
    description:
      "A text editor app where you can enter code snippets to be saved for the next time you want to open it. This application was a test app for creating a PWA which can be installed on any device.",
    img: jate,
    url: "https://zym0tic.github.io/watchlist-maker/",
    repo: "https://github.com/Zym0tic/PWA-text-editor",
  },
];

export default projects;
