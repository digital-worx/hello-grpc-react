import React, { Component } from 'react';
import { Button } from "../components/button";
import './home.css';

class Response extends Component {

  constructor(props) {
    super(props);
    console.log('prop', props)
    this.state = props.location.state;
    this.socialMediaList = ["name", "dev"]
  }
  goHome() {
    const { history } = this.props;
    if (history) history.push('/');
  }
  render() {

    return (
      <div className="Home">
        <header className="Home-header">
          <div style={{ textAlign: 'left' }}><h2>Response:</h2><pre>{JSON.stringify(this.state, null, 2)}</pre></div>
          <div style={{ marginTop: '.5rem' }}>
            <Button
              description="Home"
              onClick={() => {
                this.goHome();
              }}
            />
          </div>
        </header>
      </div >
    );
  }
}

export default Response;