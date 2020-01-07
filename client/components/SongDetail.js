import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import FetchSong from '../queries/FetchSong';
import { Link } from 'react-router';
import LyricCreate from './LyricCreate';

class SongDetail extends Component {

	render() {
    const { song } = this.props.data
    if (!song) { return <div></div> }

		return(
      <div>
      <Link
        to="/"
      >
        Back
      </Link>
        <h3>{song.title}</h3>
        <LyricCreate songId={this.props.params.id} />
      </div>
    )
	}
}

//pulls song ID from the URL as props.params and passes it to the graphql helper
export default graphql(FetchSong, {
  options: (props) => { return { variables: { id: props.params.id } } }
})(SongDetail);
