import camManImg from '../images/campaign-manager-img.PNG';
import watchMeNowImg from '../images/WatchmeNowhomepage.png';

const projects = [
  {
    id: 1,
    name: "Campaign Manager",
    description:
      "Full stack application using node.js, express.js, mysql2, sequelize, express-handlebars, sequelize to organize and manage Campaigns in DND. Users can login as either a dm or a player. As dms, a user can login and create campaigns they are involved in to manage. As players, users can log in to join different campaigns and store their characters linked to different campaigns.",
    img: camManImg,
    url: "https://vast-temple-92235.herokuapp.com/",
  },
  {
    id: 2,
    name: "Watch Me Now",
    description:
      "When searching for films to watch, it is often difficult to find what streaming services it is currently on. We wanted an app to combine IMDB, Rotten Tomatoes score, and the ability to add to watchlist to keep track of all movies a user wants to see and the option to rate it once watched. When I go to the homepage, I see my watchlist and have the choice to click on different movies added to it and see on what streaming websites it is available. When I click on the search bar, I can search for any movie and am presented with the ability to rate it, see what streaming services it is on, its Rotten Tomatoes and IMDB rating, and film description.",
    img: watchMeNowImg,
    url: "https://zym0tic.github.io/watchlist-maker/",
  },
];

// function Projects() {
//   return <Portfolio projects={projects} />;
// }

// export default Projects;
export default projects;
