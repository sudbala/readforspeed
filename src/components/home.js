import React, { Component } from 'react';
import RouteButton from './route-button';

class HomePage extends Component {
    renderText = () => {
      return (
        <div className="paragraph">
          <p>
            Welcome to readForSpeed. This is a small webapp I programmed to showcase how my facial expressions change based on the
            readings I am doing. In addition, I track, with my own made up metrics, my reading speed and comprehensibility. Please
            click enter below to check it out!
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
