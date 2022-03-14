/* eslint-disable react/no-array-index-key */
import React, { Component } from 'react';

class DataTile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
    };
  }

  toggleActive = () => {
    this.setState((prevState) => ({
      isActive: !prevState.isActive,
    }));
  }

  importAll = (r) => {
    return r.keys().map(r);
  }

  renderPhotos = () => {
    return this.props.photos.map((image, index) => {
      return <img className="image" key={index} src={image} alt="info" width="270" height="150" />;
    });
  }

  render() {
    return (
      <div className={`dataTile week${this.props._week}`} onClick={this.toggleActive} role="button" tabIndex={0}>
        <div className="dataTile-numbers">
          <div className="title">
            <h3>{this.props.title} (Week {this.props._week})</h3>
          </div>
          <div className="data-contents">
            <div className="data-content">
              <h6>Predicted Difficulty (1-5)</h6>
              <h6>{this.props.preddiff}</h6>
            </div>
            <div className="data-content">
              <h6>Actual Difficulty (1-5)</h6>
              <h6>{this.props.actdiff}</h6>
            </div>
            <div className="data-content">
              <h6>Reading Time (mins)</h6>
              <h6>{this.props.time}</h6>
            </div>
            <div className="data-content">
              <h6>Word Count</h6>
              <h6>{this.props.wordcount}</h6>
            </div>
            <div className="data-content">
              <h6>Reading Speed</h6>
              <h6>{this.props.speed}</h6>
            </div>
            <div className="data-content">
              <h6>Comprehension (1-5)</h6>
              <h6>{this.props.comprehension}</h6>
            </div>
            <div className="averaged-photo">
              <h6>Average Photo While Reading</h6>
              <img className="image" src={this.props.average} alt="info" width="270" height="150" />
            </div>
          </div>
        </div>
        <div className="dataTile-photos slide-in">
          {this.state.isActive && <div className="photo-container"><h6>Photos</h6><div className="photos">{this.renderPhotos()}</div></div>}
        </div>
      </div>

    );
  }
}

export default DataTile;
