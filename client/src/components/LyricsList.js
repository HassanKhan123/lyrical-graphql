import React from 'react';

const LyricsList = (props) => {
  const likeLyric = (id) => {
    console.log('LIKED', id);
  };
  return (
    <ul className='collection'>
      {props.lyrics.map((lyric) => {
        return (
          <li key={lyric.id} className='collection-item'>
            {lyric.content}

            <i className='material-icons' onClick={() => likeLyric(lyric.id)}>
              thumb_up
            </i>
          </li>
        );
      })}
    </ul>
  );
};

export default LyricsList;
