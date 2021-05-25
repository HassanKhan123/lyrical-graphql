import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { gql, useMutation } from '@apollo/client';

const SongCreate = (props) => {
  let history = useHistory();
  const [title, setTitle] = useState('');

  const ADD_SONG = gql`
    mutation AddSong($title: String) {
      addSong(title: $title) {
        title
      }
    }
  `;

  const [addSong] = useMutation(ADD_SONG);

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      await addSong({ variables: { title } });
      history.push('/');
    } catch (err) {
      console.log('error', err);
    }
    setTitle('');
  };
  return (
    <div className='container'>
      <Link to='/'>Back</Link>
      <h3>Create a New Song!</h3>
      <form onSubmit={submitHandler}>
        <label>Song Title:</label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
      </form>
    </div>
  );
};

export default SongCreate;
