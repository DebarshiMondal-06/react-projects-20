import React, { useEffect, useState } from 'react'
import { questions } from './data';

const App = () => {

  const [state, setState] = useState(0);
  const [values, setValues] = useState(questions[state]);
  const [check, setCheck] = useState({
    check1: false,
    check2: false,
    check3: false,
  });


  useEffect(() => {
    if (state < questions.length - 1 && state >= 0) {
      setValues(questions[state]);
    } else {
      setState(0);
    }
  }, [state]);




  return <section className="container">
    <div className="mt-5">
      <h1 className="text-center">Question/Answers</h1>
    </div>
    <section style={{ margin: '50px 0px', width: '50%' }}>
      <h4>{values.questionNo}.) {values.question}</h4>
      <article style={{ display: 'flex', flexDirection: 'column' }}>
        <div class="form-check" style={{ margin: '8px 15px' }}>
          <label class="form-check-label"> {values.option1} </label>
          <input class="form-check-input" type="radio" name={`${values.questionNo}`} checked={check.check1}
            onClick={() => setCheck({ check1: true, check2: false, check3: false })} />
        </div>
        <div class="form-check" style={{ margin: '8px 15px' }}>
          <label class="form-check-label"> {values.option2} </label>
          <input class="form-check-input" type="radio" name={`${values.questionNo}`} checked={check.check2}
            onClick={() => setCheck({ check1: false, check2: true, check3: false })} />
        </div>
        <div class="form-check" style={{ margin: '8px 15px' }}>
          <label class="form-check-label"> {values.option3} </label>
          <input class="form-check-input" type="radio" name={`${values.questionNo}`} checked={check.check3}
            onClick={() => setCheck({ check1: false, check2: false, check3: true })} />
        </div>
        {/* <div class="form-check" style={{ margin: '8px 15px' }}>
          <label class="form-check-label"> {values.option4} </label>
          <input class="form-check-input" type="radio" name={`${values.questionNo}`} />
        </div> */}
      </article>
      <article className="mt-5">
        <div style={{ float: 'right' }} onClick={() => {
          setState(state + 1);
          setCheck({ check3: false, check1: false, check2: false })
        }}>
          <button className="btn btn-primary">Next</button>
        </div>
        <div style={{ float: 'left' }} onClick={() => {
          setState(state - 1);
          setCheck({ check3: false, check1: false, check2: false })
        }}>
          <button className="btn btn-primary">Prevoius</button>
        </div>
      </article>
    </section>
  </section>
}

export default App


