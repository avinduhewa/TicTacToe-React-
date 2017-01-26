/* eslint-disable */
import React from 'react';

export default class Layout extends React.Component {

  render() {
    const background = {
      height: '769px',
      backgroundImage: 'url("./assets/img/wallpaper.png")',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    };
    return (
      <div class="text-center" style={background}>
        <div class="jumbotron text-center" style={{backgroundColor:'rgba(0,0,0,0)', color:'#4e5d6c'}}>
          <h1>TicTacToe</h1>
          <p>A simple TicTacToe game made using ReactJS</p>
        </div>
        <p><a class="btn btn-primary btn-lg">Create game</a></p>
      </div>
    );
  }
}
