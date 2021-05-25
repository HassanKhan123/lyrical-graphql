import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery, useMutation, gql } from '@apollo/client';

import fetchSongs from '../queries/fetchSongs';

const SongList = () => {
  const query = fetchSongs;
  const { data, loading, error } = useQuery(query);

  const DELETE_SONG = gql`
    mutation DeleteSong($id: ID) {
      deleteSong(id: $id) {
        id
      }
    }
  `;

  const [deleteSong] = useMutation(DELETE_SONG);

  const deleteHandler = async (id) => {
    try {
      await deleteSong({
        variables: { id },
        // refetchQueries: [{ query: fetchSongs }],
      });
    } catch (err) {
      console.log('error', err);
    }
  };

  const renderSongs = () => {
    return (
      data &&
      data.songs.map(({ id, title }) => {
        return (
          <li key={id} className='collection-item'>
            {title}
            <i className='material-icons' onClick={() => deleteHandler(id)}>
              delete
            </i>
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
