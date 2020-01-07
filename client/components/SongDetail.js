import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import FetchSong from '../queries/FetchSong';

class SongDetail extends Component {

	render() {
    console.log(this.props)
		return(
      <div>
        <h3>Song Detail</h3>
      </div>
    )
	}
}

//pulls song ID from the URL as props.params and passes it to the graphql helper
export default graphql(FetchSong, {
  options: (props) => { return { variables: { id: props.params.id } } }
})(SongDetail);
