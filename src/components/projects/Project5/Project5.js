import React from 'react';
import Project from '../Project';
import ProjectList from '../ProjectList';
import image from './project-5c.png';

const Project3 = () => (
    <Project
        liveProject="https://gonzalez-movie.herokuapp.com/"
        sourceCode="https://github.com/GeovanniG/MovieApp"  
        image={image} 
        title="Movie/Series Diplayer with Postgres for Storing Likes/Dislikes" 
        items={[
            `If you are unsure about what to watch next, head over to the app and see what is popular.`,
            `This app will show you what movies are currently on air as well as popular/top rated series. 
              If you happen to enjoy a movie/series and are logged in the app with save your movie/series`
        ]}    
    >
        <ProjectList 
            title="Tech Used" 
            items={[
                `React`,
                `Redux using React Hooks`,
                `Postgres`,
                'APIs',
                'Node',
                'Express'
            ]}
        />

        <ProjectList 
            title="Lessons Learned" 
            items={[
                `NoSQL and SQL have almost the same functionalities`,
                `There are two main places to store tokens: localStorage, cookies. With each having pros/cons`,
                'The React hook useEffect can cause performance issues if used incorrectly',
                `It's best to create a table for each object and use REFERENCES between objects`,

            ]} 
        />

        <ProjectList 
            title="To do" 
            items={[
                `Add more functionalities for logged in users: delete/update account`,
                `Fix issue with card when clicked`,
                `Fix/Finish up links/pages in footer`,
                `Improve data retrieval speed, i.e, maybe redesign database`,
                `Fix up image in modal`
            ]} 
        />
    </Project>
)

export default Project3;