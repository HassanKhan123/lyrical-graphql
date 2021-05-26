import React, { useState } from 'react';
import { gql, useMutation } from '@apollo/client';

const LyricCreate = (props) => {
  const [content, setContent] = useState('');

  const ADD_LYRIC = gql`
    mutation AddLyricToSong($content: String, $songId: ID) {
      addLyricToSong(content: $content, songId: $songId) {
        id
        lyrics {
          content
        }
      }
    }
  `;

  const [addLyric] = useMutation(ADD_LYRIC);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await addLyric({
        variables: { content, songId: props.songId },
        // refetchQueries: [{ query: fetchSongs }],
      });
    } catch (err) {
      console.log('error', err);
    }
    setContent('');
  };

  return (
    <form onSubmit={submitHandler}>
      <label>Add a lyric</label>
      <input value={content} onChange={(e) => setContent(e.target.value)} />
    </form>
  );
};

export default LyricCreate;
