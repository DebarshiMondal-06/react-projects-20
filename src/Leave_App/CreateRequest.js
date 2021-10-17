import React, { useEffect, useState } from 'react';
import moment from "moment";



const CreateRequest = () => {

  const [value, setValue] = useState('');
  const [dates, setDates] = useState({
    startDate: '',
    endDate: ''
  });
  const [noDays, setNoDays] = useState(0);
  const { startDate, endDate } = dates;



  useEffect(() => {
    if (startDate && endDate) {
      var from = moment(startDate)
      var to = moment(endDate)
      const noDays = to.diff(from, 'days');
      noDays > 0 ? setNoDays(noDays) : setNoDays(0);
    }
  }, [startDate, endDate]);



  const submit_data = () => {
    if (noDays > 0 && value) {
      console.log(startDate, endDate);
      console.log(value);
    }
  }




  return <div className="col-md-9 create--leave">
    <span> <label>Start Date:</label> <input type="date" className="form-control"
     value={startDate} onChange={(e) => setDates({ ...dates, startDate: e.target.value })} />
    </span>
    <span> <label>Last Date:</label><input type="date" className="form-control"
      value={endDate} onChange={(e) => setDates({ ...dates, endDate: e.target.value })} />
    </span>
    <span> <label>Comment:</label> <input style={{ width: 300 }} type="text" className="form-control"
      value={value} onChange={(e) => setValue(e.target.value)} />
    </span>

    <span className="text-center"> <label>No of Days:</label> <br /> <b style={{ fontSize: 28 }}>
      {noDays}
    </b> </span>&nbsp;
    <button className="btn btn-info" onClick={() => submit_data()}>
      <i className="fas fa-plus"></i>
    </button>
    <button className="btn btn-warning" onClick={() => {
      setDates({ endDate: '', startDate: '' });
      setValue('');
      setNoDays(0);
    }}>
      <i className="fas fa-redo-alt"></i>
    </button>
  </div>
}

export default CreateRequest
