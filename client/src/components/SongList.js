import React from 'react';
import { gql, useQuery } from '@apollo/client';

const SongList = () => {
  const query = gql`
    {
      songs {
        id
        title
      }
    }
  `;

  const { data, loading, error } = useQuery(query);

  const renderSongs = () => {
    return (
      data &&
      data.songs.map((song) => {
        return <li key={song.id}>{song.title}</li>;
      })
    );
  };
  return (
    <div>
      {error ? (
        <p>{error.message}</p>
      ) : loading ? (
        <h1>Loading ....</h1>
      ) : (
        renderSongs()
      )}
    </div>
  );
};

export default SongList;
