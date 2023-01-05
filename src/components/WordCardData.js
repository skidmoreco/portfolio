import project2 from "../assets/project3.jpg";
import project3 from "../assets/project3.jpg";
import project4 from "../assets/project3.jpg";
import project5 from "../assets/project2.jpg";
import project6 from "../assets/project2.jpg";



const projectCardData = [
    {
        imgsrc: project2,
        title: 'J.A.T.E.',
        text: 'Created a text editor that runs in the browser. The app is a single-page application that meets the PWA criteria. Implemented methods for getting and storing data to an IndexedDB database. The app also fully functions while offline!',
        liveLink: "https://obscure-peak-52361.herokuapp.com/",
        sourceLink: "https://github.com/skidmoreco/PWAtexteditor"

    },
    {
        imgsrc: project3,
        title: 'socialnetworkAPI',
        text: 'Built an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. Also used Express.js for routing, a MongoDB database, and the Mongoose ODM.',
        liveLink: "https://drive.google.com/file/d/1CCYI0ITm4UY7gQSzDi_HsGwdofUOOGZI/view",
        sourceLink: "https://github.com/skidmoreco/PWAtexteditor"
    },
    {
        imgsrc: project4,
        title: 'employeeTracker',
        text: 'Created a command-line application in a CMS (Content Management System) format, that an employer could use to view, update, add, & delete employee information using Inquirer package. Also utilizing MySQL2 packages to be able to connect to the MySQL database to perform queries & the console.table package to print MySQL rows to the console.',
        sourceLink: "https://github.com/skidmoreco/SQL-employee-tracker",
        liveLink: "https://drive.google.com/file/d/1Py_aLS7SkUIapnNmT9OlQ_DeLrPADyQB/view"
    },
    {
        imgsrc: project5,
        title: 'helloHiker',
        text: 'For this project, we created a collaborative MERN-stack single-page application, combining a scalable MongoDB back end, a GraphQL API, and an Express.js and Node.js server with a React front end, implementing user authentication with JWT to build a user-focused platform.',
        liveLink: "https://hellohiker.herokuapp.com/",
        sourceLink: "https://github.com/ShahidHashmi1/HelloHiker"
    },
    {
        imgsrc: project5,
        title: 'APIweatherdashboard',
        text: 'Created a weather dashboard that will run in the browser and features dynamically updated HTML & CSS, while using a 5 Day Weather Forecase to retrieve weather data for cities.',
        liveLink: "https://skidmoreco.github.io/api-weather-dashboard/",
        sourceLink: "https://github.com/skidmoreco/api-weather-dashboard"
    },
    {
        imgsrc: project6,
        title: 'passwordGenerator',
        text: 'Created a Password Generator using HTML, CSS & JavaScript. Allows the user to select whether they want the password to include uppercase/lowercase letters, numbers & any special characters.',
        liveLink: "https://skidmoreco.github.io/password-generator/",
        sourceLink: "https://github.com/skidmoreco/password-generator"
    },

];


export default projectCardData