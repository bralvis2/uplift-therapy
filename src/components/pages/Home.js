import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
        <div>
          <h2>Home</h2>
          <p>Therapy can provide a wide range of benefits to individuals who are struggling 
            with various mental health concerns or life challenges. One of the primary benefits 
            of therapy is the opportunity to gain insight into one's thoughts, feelings, and 
            behaviors, and to develop a deeper understanding of oneself. Therapy can also provide 
            a safe and supportive environment for individuals to explore their emotions, process 
            difficult experiences, and develop coping strategies for managing stress and other 
            challenges. In addition, therapy can improve communication skills, enhance 
            relationships, and foster personal growth and development. Ultimately, therapy can help 
            individuals to achieve greater self-awareness, increase their resilience, and lead a 
            more fulfilling and satisfying life.</p>
            <button>
              <Link to={'/contact'} className="nav-link">Contact</Link>
            </button>
        </div>
    );
  }
}

export default Home;