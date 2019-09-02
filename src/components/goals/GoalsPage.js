import React from 'react';
import Frame from '../Frame';

const Plans = () => {
  return (
    <Frame className="goals__frame">
      <div className="goals__title-box">
       <h1 className="goals__title">Goals</h1>
        <p className="goals__title-text">A page dedicated to my software goals.</p>
      </div>
      
      <section className="goals__list-groups">
        <section className="goals__list-group-1">
          <h2 className="goals__sub-title">Areas to improve</h2>
          <ol className="goals__list">
            <li>Need more exposure to unit testing</li>
            <li>Refine skills in current languages I use</li>
            <li>Re-learn Java since I keep running into it</li>
            <li>Improve UI/UX design skills</li>
            <li>Learn Wordpress to start freelancing</li>
            <li>Catch up on software literature</li>
            <li>Learn more CS fundamentals</li>
          </ol>
        </section>
        
        <section className="goals__list-group-2">
          <h2 className="goals__sub-title">Ways to improve</h2>
          <ol className="goals__list">
            <li>Build a small but heavy logic based project</li>
            <li>Start reading the more advanced sections of the docs</li>
            <li>Take a course off udemy</li>
            <li>Go to awwwards at least once a day and analyze the designs</li>
            <li>Take a course off udemy</li>
            <li>Read books on best practices, design patterns, etc.</li>
            <li>Watch videos on networking, databases, AI, machine learning, OS</li>
          </ol>
        </section>
      </section>

      <div className="goals__focus-box">
        <h2 className="goals__sub-title">Current Focus</h2>
        <ul className="goals__list-todos">
          <li>Build a project using tdd</li>                    
          <li>Experimenting with machine learning</li>
        </ul>
      </div>
    </Frame>
  )
}

export default Plans;