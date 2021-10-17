import React from 'react';
import TwitterLogin from "react-twitter-login";
import Axios from 'axios';
import { useCookies } from 'react-cookie';

const App = () => {
  const [c, setCookie] = useCookies();



  const authHandler = (err, data) => {

    console.log(data);


    const url = 'https://ot39qtb9rj.execute-api.ap-south-1.amazonaws.com/dev/verify_twitter';
    Axios({
      method: 'POST',
      url,
      data
    }).then((item) => {
      const { email, description, id_str, name, location } = item.data && item.data.message;

      setCookie('data', JSON.stringify({ email, description, id_str, name, location }), {
        path: '/'
      });

      // window.location.href = '/details';

    }).catch((err) => {
      console.log(err);
    });
  };


  return <section style={{ marginTop: 60 }}>
    <div className="text-center">
      <h2>TwitterLogin</h2>

      <TwitterLogin
        authCallback={authHandler}
        consumerKey="0WXACwqKyvzmps02EhBTQe0ip"
        consumerSecret="ddiuTqeAzUfGgNaOmzFbs5NSvgs2CL69Gg8Huc07SJG256gj3w"
      />
    </div>
  </section>
}

export default App
