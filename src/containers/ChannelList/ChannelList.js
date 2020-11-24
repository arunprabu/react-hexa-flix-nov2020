// rcce
import React, { Component } from 'react';
import Channel from '../../components/Channel/Channel';

// class comp can have states
class ChannelList extends Component {

  // data within the comp in state
  // changing the state will result in re-rendering of the comp
  // merge with the unchanged existing properties
  // it will call the render() method again.
  
  state = {
    tvChannelList: [
      { name: 'Star Sports', info: '#1 Sport Channel'},
      { name: 'Discovery', info: '#1 Infotainment Channel'},
      { name: 'NatGeo', info: 'Infotainment Channel'}
    ],
    numberOfPaidChannels: 20
  }

  addToFavHandler = () => {
    // changing the state is okay in a simple react app.
    // but not in a bigger enterprise app.
    // changing the state will result in unwanted behaviours in the child comp tree
    
    this.setState({
      tvChannelList: [
        { name: 'Star Sports [Added]', info: '#1 Sport Channel'},
        { name: 'Discovery', info: '#1 Infotainment Channel'},
        { name: 'NatGeo', info: 'Infotainment Channel'}
      ]
    });
  
  }


  render() {

    console.log(this.state);

    return (
      <div className='container text-left'>
        <h2>Channel List | States Demo</h2>
      
        <div className='row'>
          <Channel 
            name={this.state.tvChannelList[0].name}
            info={this.state.tvChannelList[0].info}
            addToFav={this.addToFavHandler}/>

          <Channel 
            name={this.state.tvChannelList[1].name}
            info={this.state.tvChannelList[1].info}/>

          <Channel 
            name={this.state.tvChannelList[2].name}
            info={this.state.tvChannelList[2].info}/>

        </div>
      </div>
    )
  }
}

export default ChannelList;