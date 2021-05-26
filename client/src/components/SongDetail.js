import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';

import fetchSong from '../queries/fetchSong';

const SongDetail = (props) => {
  const FETCH_SONG = fetchSong;

  const { data, loading, error } = useQuery(FETCH_SONG, {
    variables: {
      id: props.match.params.id,
    },
  });

  if (loading) {
    return <h3>Loading.....</h3>;
  }

  return (
    <div>
      <Link to='/'>Back</Link>
      <h3>{data.song.title}</h3>
    </div>
  );
};

export default SongDetail;
