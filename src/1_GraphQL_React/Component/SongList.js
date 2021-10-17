/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import { DELETE_SONG, Load_Songs } from '../Queries';


const SongList = () => {
  const { loading, data, refetch } = useQuery(Load_Songs);
  const [deleteSong] = useMutation(DELETE_SONG);


  const delete_song = (id) => {
    deleteSong({
      variables: {
        _id: id
      }
    }).then(() => {
      refetch();
    });
  }


  return <section className="container">
    {
      loading
        ? <h2 className="text-center">Loading...</h2>
        : <main className="row mt-5">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <article className="mb-4">
              <Link to="/add">
                <button className="btn btn-secondary" style={{ float: 'right' }}>Add</button>
              </Link>
              <h1 className="heading">SongList</h1>
            </article>
            {
              data.allSongs.map((items, i) => {
                const { title } = items;
                return <section key={i} className="title-section">
                  <li className="song-name text-capitalize">
                    <Link style={{ color: 'grey' }} to={`/song/${items._id}`}>{title} </Link>
                    <i style={{ float: 'right' }}
                      onClick={() => delete_song(items._id)} className="mt-1 fas fa-trash-alt">
                    </i>&nbsp;
                  </li>
                  <br />
                </section>
              })
            }
            {
              data.allSongs.length > 0 ? null : <section className="text-center" style={{ marginTop: 80 }}>
                <h3>No Data 😕</h3>
              </section>
            }
          </div>
          <div className="col-md-3"></div>
        </main>
    }
  </section>
}

export default SongList
