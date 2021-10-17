import { useMutation } from '@apollo/client';
import React, { useState } from 'react'
import { ADD_LYRICS_SONG } from '../Queries';


const AddLyric = ({ data, id, refetch }) => {

  const [lyric, setlyric] = useState('');
  const [addLyricToSong] = useMutation(ADD_LYRICS_SONG);


  const attach_lyrics = () => {
    addLyricToSong({
      variables: {
        content: lyric,
        songId: id
      }
    }).then(() => {
      setlyric('');
      refetch();
    });
  }


  return <article className="mb-4">
    <h2 className="text-capitalize">{data && data.getSong.title}</h2>
    <h6>Add Lyrics</h6>
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      <input value={lyric}
        onChange={(e) => setlyric(e.target.value)}
        style={{ width: '80%' }}
        className="form-control"
        type="text"
      />
      &nbsp;&nbsp;
      <button onClick={() => attach_lyrics()} style={{ width: '100px', letterSpacing: 1 }}
        className="btn btn-secondary">Add</button>
    </div>
  </article>
}

export default AddLyric
