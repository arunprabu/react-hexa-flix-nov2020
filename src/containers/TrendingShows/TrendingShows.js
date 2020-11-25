import React, { Component } from 'react';

// Class comp with state inside constructor -- for lists and keys example
class TrendingShows extends Component {

  constructor(){
    super();
    console.log(this);
    this.state = {
      showsList: [
        { id: 1, name: 'Planet Earth', host: 'David Attenborough', isInWatchlist: false },
        { id: 2, name: 'India Vs Aus Cricket', host: 'Ganguly', isInWatchlist: false },
        { id: 3, name: 'Man Vs Wild', host: 'Bear Grylls', isInWatchlist: false },
        { id: 4, name: 'Planet Earth 2', host: 'David Attenborough', isInWatchlist: false },
      ]
    }
  }

  // adding event handler to toggle watchlist
  addToWatchlistHandler(index){
    console.log(this);
    console.log(index);
    this.setState({
      showsList: [
        { id: 1, name: 'Planet Earth', host: 'David Attenborough', isInWatchlist: true },
        { id: 2, name: 'India Vs Aus Cricket', host: 'Ganguly', isInWatchlist: false },
        { id: 3, name: 'Man Vs Wild', host: 'Bear Grylls', isInWatchlist: false },
        { id: 4, name: 'Planet Earth 2', host: 'David Attenborough', isInWatchlist: false },
      ]
    });
  }

  render() {
    // ideal place for you to write js -- looping with map
    // ideal place for comp specific transformations in JSX
    let shows = null; 

    if( this.state.showsList && this.state.showsList.length > 0) {
      // looping thru with map to extract array elements -- map is from es2015
      shows = this.state.showsList.map( (show, index) => {
        return(
          <li className='list-group-item' key={`show${show.id}`}>
            #{show.id}. {show.name} - hosted by {show.host}
            <button type='button' className='btn btn-primary float-right' onClick={this.addToWatchlistHandler.bind(this, index)}>
              { show.isInWatchlist? 'In Watchlist' : 'Add to Watchlist' }
            </button>
          </li>
        )
      });
    }
    
    return (
      <div className='container text-left'>
        <h2>Trending Shows List | Lists and Keys Example</h2>

        <ul className='list-group'>
          { /* will have conditionals -- if/else */ }

          {
            this.state.showsList && this.state.showsList.length > 0 ? 
              shows
            :
            <div className='alert alert-danger'>No Trending shows found!</div>
          }
        </ul>
      </div>
    )
  }
}

export default TrendingShows;
