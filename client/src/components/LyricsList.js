import React from 'react';

const LyricsList = (props) => {
  return (
    <ul className='collection'>
      {props.lyrics.map((lyric) => {
        return (
          <li key={lyric.id} className='collection-item'>
            {lyric.content}
          </li>
        );
      })}
    </ul>
  );
};

export default LyricsList;
