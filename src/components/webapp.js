/* eslint-disable react/no-array-index-key */
import React, { Component } from 'react';
import DataTile from './dataTile';
import Data from '../data.json';

class WebApp extends Component {
    renderTiles = () => {
      return Data.data.map((item, i) => {
        return (
          <DataTile key={i}
            title={item.Reading}
            preddiff={item['Predicted Difficulty (1-5)']}
            actdiff={item['Actual Difficulty (1-5)']}
            time={item['Reading Time (mins)']}
            wordcount={item['Word Count']}
            speed={item['Reading Speed']}
            comprehension={item['Comprehension (1-5)']}
            photos={item.Photos}
            _week={item._week}
            average={item.average}
          />
        );
      });
    }

    render() {
      console.log('we got here first');
      return (
        <div className="webAppPage">
          {this.renderTiles()}
        </div>
      );
    }
}

export default WebApp;
