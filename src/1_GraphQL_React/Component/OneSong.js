/* eslint-disable jsx-a11y/accessible-emoji */
import { useQuery } from '@apollo/client';
import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { GET_ONE_SONG } from '../Queries';
import AddLyric from './AddLyric';
import ShowLyrics from './ShowLyrics';

const OneSong = () => {
  const { id } = useParams();
  const { data, refetch, loading } = useQuery(GET_ONE_SONG,
    {
      variables: { _id: id },
      fetchPolicy: 'network-only'
    });




  if (loading) {
    return <section className="mt-5 text-center">
      Loading...
    </section>
  }
  return <section className="container-sm">
    <main className="row mt-5">
      <div className="col-md-2"></div>
      <div className="col-md-1">
        <Link to="/"><i className="fas fa-2x fa-long-arrow-alt-left"></i></Link>
      </div>
      <div className="col-md-6">
        <AddLyric data={data} id={id} refetch={refetch} />
        <article>
          <h5 style={{ fontFamily: 'cursive', marginTop: 40 }}>Available Lyrics</h5>
          <div className="mt-4">
            {
              data && data.getSong.lyric.map((item, i) => {
                return <ShowLyrics key={i} {...item} />
              })
            }
            {
              data && data.getSong.lyric.length > 0 ? null : <section className="text-center mt-5">
                <p>No Lyrics Found! 😕</p>
              </section>
            }
          </div>
        </article>
      </div>
      <div className="col-md-3"></div>
    </main>
  </section>
}

export default OneSong;
