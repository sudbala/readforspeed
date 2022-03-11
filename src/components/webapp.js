import React, { Component } from 'react';

class WebApp extends Component {
    renderText = () => {
      return (
        <div className="paragraph">
          <p>
            Webapp Page
          </p>
        </div>
      );
    }

    render() {
      return (
        <div className="homePage">
          {this.renderText()}
        </div>
      );
    }
}

export default WebApp;
