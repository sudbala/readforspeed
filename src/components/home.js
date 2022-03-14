import React, { Component } from 'react';
import RouteButton from './route-button';

class HomePage extends Component {
    renderText = () => {
      return (
        <div className="paragraph">
          <p>
            Welcome to readForSpeed. For my self-quantification project in my Data and Bodies class, I decided to track reading speed, comprehension,
            and time it takes to read. This is all showcased in the app when you click enter. After sometime, I decided to add in facial expressions
            to the mix, which is also showcased in the app. To use the app, simply click enter, and view the data displayed for each week. For each
            week, there is the pre and post-difficulty measurements, comprehension, word count, reading speed, and the averages of the photos taken
            during the reading. If you would like to look at the actual photos taken during the reading, please click on the tile and it should open
            a component for you to view. If you would like more information about the project, please read the artist statement linked
            below! Please enjoy!
            <br />
            <a className="artist-statement" href="https://drive.google.com/file/d/1DyTlbkf9--MLLhAFVGKerwsbTGNvm0Z8/view?usp=sharing" target="_blank" rel="noreferrer">
              View Artist Statement
            </a>
          </p>
        </div>
      );
    }

    renderButton = () => {
      return (
        <RouteButton
          type="primaryButton"
          text="Enter"
          onClick={() => {}}
          disabled={false}
          destination="/webapp"
        />
      );
    }

    render() {
      return (
        <div className="homePage">
          {this.renderText()}
          <div className="button-container">
            {this.renderButton()}
          </div>
        </div>
      );
    }
}

export default HomePage;
