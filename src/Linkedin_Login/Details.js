import React from 'react'
import { useCookies } from 'react-cookie'




const Details = () => {

  const [cookie] = useCookies();

  return (
    <div className="mt-5 text-center">
      <h1>Data</h1>
      <article>
        
        <h4>ID: {cookie.data && cookie.data.id_str}</h4>
        <h4>Email: {cookie.data && cookie.data.email}</h4>
        <h4>Name: {cookie.data && cookie.data.name}</h4>
        <h4>Description: {cookie.data && cookie.data.description}</h4>
        <h4>Location: {cookie.data && cookie.data.location}</h4>

      </article>
    </div>
  )
}

export default Details
