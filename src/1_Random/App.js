import React from 'react'
import { useState } from 'react';



const App = () => {
  const items = [
    { id: 1, step: 1, val: '' },
    { id: 2, step: 2, val: '' },
  ];
  const [state, setState] = useState(items);
  console.log(state);


  const add_more = (val) => {
    const addd = {
      id: val + 1,
      step: val + 1,
      val: ''
    };
    setState([...state, addd]);
  };

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...state];
    list[index][name] = value;
    setState(list);
  };



  return <section className="container" style={{ marginTop: 50 }}>
    <h6>{state.length >= 5 && 'Input Cannot Exceed Further...'}</h6>
    <div>
      {
        state.map((item, i) => {
          return <div key={i} className="p-2">
            <label>Steps: {item.step}</label>
            <input name="val" val={item.val} type="text" onChange={(e) => handleInputChange(e, i)} />
            &nbsp;&nbsp;<button className="btn" onClick={() => {
              var listy = [...state];
              listy.splice(i, 1);
              setState(listy);
            }} style={{ padding: 5, fontSize: 25 }}>**</button>
          </div>
        })
      }
      <button onClick={() => state.length <= 4 && add_more(state.length)}
        className="btn btn-secondary">Add More</button>
    </div>
  </section>
}

export default App
