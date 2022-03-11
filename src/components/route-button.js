/* eslint-disable react/no-did-update-set-state */
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class RouteButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // most buttons should be of type "primaryButton" or "secondaryButton"
      // feel free to add other types (which dictate what css class to use) as needed
      type: props.type,
      destination: props.destination,
      text: props.text,
      isDisabled: props.disabled,
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      this.setState({
        isDisabled: this.props.disabled,
      });
    }
  }

  // Disable functionality from https://stackoverflow.com/questions/49297357/disabling-navlink-react-router
  handleClick(e) {
    if (this.state.isDisabled) {
      e.preventDefault();
    } else if (this.props.onClick) {
      this.props.onClick();
    }
  }

  render() {
    return (
      <NavLink onClick={(e) => this.handleClick(e)}
        to={this.state.destination}
        className={`themedButton ${this.state.isDisabled ? 'disabledNavlink' : this.state.type} routeButton`}
      >{this.state.text}
      </NavLink>
    );
  }
}

export default RouteButton;
