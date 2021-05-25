import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import fetchSongs from '../queries/fetchSongs';

const SongList = () => {
  const query = fetchSongs;

  const { data, loading, error } = useQuery(query);

  const renderSongs = () => {
    return (
      data &&
      data.songs.map((song) => {
        return (
          <li key={song.id} className='collection-item'>
            {song.title}
          </li>
        );
      })
    );
  };
  return (
    <div className='container'>
      {error ? (
        <p>{error.message}</p>
      ) : loading ? (
        <h1>Loading ....</h1>
      ) : (
        <div>
          <ul className='collection'>{renderSongs()}</ul>
          <Link to='/song/new' className='btn-floating btn-large red right'>
            <i className='material-icons'>add</i>
          </Link>
        </div>
      )}
    </div>
  );
};

export default SongList;
