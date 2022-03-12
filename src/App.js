import 'tachyons';
import ArtList from './ArtList';
import {robots} from './robots';
import Search from './Search'
import React from 'react';

class App extends React.Component {
  
  constructor () {
    super()
    this.state = {
      robots: robots,
      search: ''
    }
  }

  update = (event) => {
    this.setState({search: event.target.value}) 
  }

  render() {
    
    const filteredRobots = this.state.robots.filter(robots => {
      return robots.name.toLowerCase().includes(this.state.search.toLowerCase())
    })
    
    return (
    
    <div className="tc">
      <nav className='pa3 ph5-ns'>
        <h1 class="tc  db black-400 mb0 lh-title mw15 "> Robo Gods NFT Store</h1>
      </nav>
      <Search update={this.update}/>
    <ArtList robots={filteredRobots}/>
    </div>
    );
  }
}

export default App;
