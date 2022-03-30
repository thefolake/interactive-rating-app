import './App.scss';
import CircularButton from "./components/CircularButton/CircularButton";
import { useState } from "react";

const App = () => {

  const [value, setValue] = useState(0);
  const [submit, isSubmitted] = useState(false);
  const handleChange = (e) => {
    const value = e.target.value;

    setValue(value);
  };

  const handleSubmit = () => {
    isSubmitted(true)
  };

  return (
    <main className="container">
      <div className='content'>
        {
          submit ?
              <div className='thank-you'>
                <img src="../images/illustration-thank-you.svg" alt="thank-you-illustration"/>
                <p className='selected-value'>You selected {value} out of 5</p>

                <div className='thank-you-heading'>
                  <h1>Thank you!</h1>
                  <p>
                    We appreciate you taking the time to give a rating.
                    If you ever need more support, don't hesitate to get in touch!
                  </p>
                </div>
              </div>
              :
              <>
                <img src="../images/icon-star.svg" alt="icon-star" className='icon-star'/>
                <div className='heading'>
                  <h1>How did we do?</h1>
                  <p>
                    Please let us know how we did with your support request. All feedback is
                    appreciated to help us improve our offering!
                  </p>
                </div>
                <div className='rating'>
                  <CircularButton value='1' onClick={handleChange}> 1 </CircularButton>
                  <CircularButton value='2' onClick={handleChange}> 2 </CircularButton>
                  <CircularButton value='3' onClick={handleChange}> 3 </CircularButton>
                  <CircularButton value='4' onClick={handleChange}> 4 </CircularButton>
                  <CircularButton value='5' onClick={handleChange}> 5 </CircularButton>
                </div>
                <button className='submit' onClick={handleSubmit}>Submit</button>
              </>
        }
      </div>
    </main>
  );
}

export default App;
