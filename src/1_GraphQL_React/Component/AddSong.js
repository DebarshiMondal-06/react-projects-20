import React from 'react'
import { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useMutation } from '@apollo/client';
import { ADD_SONG, Load_Songs } from '../Queries';


const AddSong = () => {
  const history = useHistory();
  const [song, setSong] = useState('');
  const [btnLoader, setBtnLoader] = useState(false);


  const [createSong] = useMutation(ADD_SONG);


  const set_song = () => {
    setBtnLoader(true);
    createSong({
      variables: {
        title: song
      },
      refetchQueries: [{
        query: Load_Songs
      }]
    }).then(() => {
      setSong('');
      setBtnLoader(false);
      setTimeout(() => {
        history.push('/');
      }, 1500);
    });
  }


  return <section className="add-song">
    <h2>Create a Song</h2>
    <main style={{ width: '50%' }}>
      <div className="mt-2">
        <label>Song Name: {song}</label>
        <input
          value={song}
          onChange={(e) => setSong(e.target.value)}
          className="form-control"
          type="text"
          placeholder="Type here" />
      </div>
      <Link to="/"><button className="btn btn-dark">Back</button></Link>&nbsp;
      <button type="submit" onClick={() => set_song()} className="btn btn-primary">Add&nbsp;&nbsp;

        <article className={`${btnLoader ? 'loader' : 'fas fa-check'}`}></article>

      </button>
    </main>
  </section>
}

export default AddSong
