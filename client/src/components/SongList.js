import React from 'react';
import { gql, useQuery } from '@apollo/client';

const SongList = () => {
  const query = gql`
    {
      songs {
        title
      }
    }
  `;

  const { data } = useQuery(query);
  console.log('DATA===========', data);
  return <div>SongList</div>;
};

export default SongList;
