import React, { useState } from 'react';

const SongCreate = () => {
  const [title, setTitle] = useState('');
  return (
    <div className='container'>
      <h3>Create a New Song!</h3>
      <form>
        <label>Song Title:</label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
      </form>
    </div>
  );
};

export default SongCreate;
