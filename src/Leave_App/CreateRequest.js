import React, { useState } from 'react'

const CreateRequest = () => {

  const [value, setValue] = useState();

  const submit_data = () => {

  }


  return <section className="contact_main">
    <form className="card shadow contact_card">
      <h2>Contact Here</h2>
      <section className="row mb-3">
        <div className="col-md-6">
          <label className="form-label">First</label>
          <input type="text" className="form-control"
            onChange={(e) => setValue({ ...value, firstname: e.target.value })} />
        </div>
        <div className="col-md-6">
          <label className="form-label">Last</label>
          <input type="text" className="form-control"
            onChange={(e) => setValue({ ...value, lastname: e.target.value })} />
        </div>
      </section>
      <div className="mb-3">
        <label className="form-label">Email address</label>
        <input type="email" className="form-control"
          onChange={(e) => setValue({ ...value, email: e.target.value })} />
      </div>
      <div className="mb-3">
        <label className="form-label">Message</label>
        <textarea type="text" className="form-control"
          onChange={(e) => setValue({ ...value, message: e.target.value })}></textarea>
      </div>
      <button type="button" className="btn btn-primary contact_btn"
        onClick={() => submit_data()}>
        Submit Here
      </button>
    </form>
  </section>
}

export default CreateRequest
