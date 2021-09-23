import React from 'react';
import { Link } from 'react-router-dom';
import './component.css';



const BookCard = ({ rawData }) => {


  return <section className="card_section">
    {
      rawData.map((item, i) => {
        const { img, title, book_id } = item;

        return <Link to={`/view/${book_id}`} key={i}>
          <div className="card" style={{ width: '21rem', border: 'none', cursor: 'pointer' }}>
            <img src={img} className="card_image p-3 card-img-top"
              alt="SOME" width="300" height="200" />
            <div className="card-body" style={{ marginTop: -15 }}>
              <h4 className="h5 card_title p-0">{title}</h4>
            </div>
          </div>
        </Link>
      })
    }
  </section>
}

export default BookCard
