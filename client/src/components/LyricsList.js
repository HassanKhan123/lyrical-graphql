import React from 'react';
import { gql, useMutation } from '@apollo/client';

const LyricsList = (props) => {
  const LIKE_LYRIC = gql`
    mutation LikeLyric($id: ID) {
      likeLyric(id: $id) {
        id
        likes
      }
    }
  `;

  const [likeLyric] = useMutation(LIKE_LYRIC);
  const thumbsUpLyric = async (id, likes) => {
    try {
      await likeLyric({
        variables: { id },
        optimisticResponse: {
          __typename: 'Mutation',
          likeLyric: {
            id,
            __typename: 'LyricType',
            likes: likes + 1,
          },
        },
      });
    } catch (err) {
      console.log('error', err);
    }
  };
  return (
    <ul className='collection'>
      {props.lyrics.map((lyric) => {
        return (
          <li key={lyric.id} className='collection-item'>
            {lyric.content}
            <div className='vote-box'>
              <i
                className='material-icons'
                onClick={() => thumbsUpLyric(lyric.id, lyric.likes)}
              >
                thumb_up
              </i>
              {lyric.likes}
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default LyricsList;
