import React, { useState } from 'react';
import { gql, useMutation } from '@apollo/client';

const SongCreate = () => {
  const [title, setTitle] = useState('');

  const ADD_SONG = gql`
    mutation AddSong($title: String) {
      addSong(title: $title) {
        title
      }
    }
  `;

  const [addSong] = useMutation(ADD_SONG);

  const submitHandler = (e) => {
    e.preventDefault();

    addSong({ variables: { title } });
    setTitle('');
  };
  return (
    <div className='container'>
      <h3>Create a New Song!</h3>
      <form onSubmit={submitHandler}>
        <label>Song Title:</label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
      </form>
    </div>
  );
};

export default SongCreate;
