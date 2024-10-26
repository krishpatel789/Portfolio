

import './App.css'
import { useState } from 'react';

function App() {
  // Step 1: Define a state variable to track which content is being displayed
  const [isContentOne, setIsContentOne] = useState(true);

  // Step 2: Define the two different content sections
  const contentOne = (
      <div>
      <header>
        <h1>Hari Krishna</h1>
        <h2>Curious Developer</h2>
    </header>
    <section>
        <h3>About Me</h3>
        <p>Hi! I'm Hari Krishna, a developer driven by curiosity and a passion for discovering new technologies. I enjoy exploring innovative solutions and taking on challenges that push my skills to the next level.</p>
    </section>
    <section>
        <h3>Skills</h3>
        <ul>
            <li>Web Development</li>
            <li>Problem Solving</li>
            <li>Creative Thinking</li>
            <li>Project Management</li>
        </ul>
    </section>
    <section>
        <h3>My Approach</h3>
        <p>As a curious developer, I believe in a hands-on approach, constantly experimenting and learning to improve my craft. I aim to create efficient, user-focused solutions that make a real impact.</p>
    </section>
    <footer>
        <p>Connect with me to collaborate or share ideas!</p>
        
    </footer>
      </div>

    
  );

  const contentTwo = (
    <div>
      <h1>Rey Mawa niku a edhi, Just a Little Reminder</h1>
    <p>
        I know life has its ups and downs, and sometimes it feels like you're going through it all alone. But remember, I'm here for you, and you don’t have to face everything on your own.
    </p>
    <p>
        You've always been strong, even when you didn’t have all the answers. It’s okay to feel lost sometimes, but don’t let the tough moments define you. Take it one step at a time; brighter days are coming.
    </p>
    <div >
        <p>Every storm runs out of rain.</p>
        <p>You have within you, right now, everything you need to deal with whatever the world can throw at you.</p>
        <p>Believe you can and you're halfway there.</p>
    </div>
    <p>
        Stay strong, Heroo. You’re more resilient than you realize, and I’m proud to call you my friend.
    </p>
    <b>TOUGH TIMES NEVER LAST, BUT TOUGH PEOPLE DO...</b>
    </div>
    
  );

  // Step 3: Toggle function to switch between contents
  const toggleContent = () => {
    setIsContentOne(!isContentOne);
  };

  return (
    <div>
      {/* Button to toggle content */}
      <button onClick={toggleContent}>
        {isContentOne ? 'Switch to Content Two' : 'Switch to Content One'}
      </button>
      {/* Display content based on state */}
      {isContentOne ? contentOne : contentTwo}

      
    </div>
  );
}

export default App;

