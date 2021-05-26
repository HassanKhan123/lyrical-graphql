import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';

import fetchSong from '../queries/fetchSong';

const SongDetail = (props) => {
  const FETCH_SONG = fetchSong;
  console.log('params', props);

  const { data, loading, error } = useQuery(FETCH_SONG, {
    variables: {
      id: props.match.params.id,
    },
  });

  console.log('DATA========', data, loading, error);

  return (
    <div>
      <h3>Song Detail</h3>
    </div>
  );
};

export default SongDetail;
