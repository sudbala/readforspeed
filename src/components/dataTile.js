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
      return <img className="image" key={index} src={image} alt="info" width="220" height="150" />;
    });
  }

  render() {
    return (
      <div className="dataTile" onClick={this.toggleActive} role="button" tabIndex={0}>
        <div className="dataTile-numbers">
          <div className="title">
            <h1>{this.props.title}</h1>
          </div>
          <div className="data-contents">
            <div className="data-content">
              <h3>Predicted Difficulty (1-5)</h3>
              <h3>{this.props.preddiff}</h3>
            </div>
            <div className="data-content">
              <h3>Actual Difficulty (1-5)</h3>
              <h3>{this.props.actdiff}</h3>
            </div>
            <div className="data-content">
              <h3>Reading Time (mins)</h3>
              <h3>{this.props.time}</h3>
            </div>
            <div className="data-content">
              <h3>Word Count</h3>
              <h3>{this.props.wordcount}</h3>
            </div>
            <div className="data-content">
              <h3>Reading Speed</h3>
              <h3>{this.props.speed}</h3>
            </div>
            <div className="data-content">
              <h3>Comprehension (1-5)</h3>
              <h3>{this.props.comprehension}</h3>
            </div>
          </div>
        </div>
        <div className="dataTile-photos">
          {this.state.isActive && <div className="photo-container"><h3>Photos</h3><div className="photos">{this.renderPhotos()}</div></div>}
        </div>
      </div>

    );
  }
}

export default DataTile;
