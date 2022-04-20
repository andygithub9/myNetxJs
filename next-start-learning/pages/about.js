import React, { useState } from 'react';

const About = () => {
  const [msg, setMsg] = useState();

  const eventHandler = async () => {
    const res = await fetch('/api/hello')
    const data = await res.json()
    console.log('data: ', data);
    setMsg(JSON.stringify(data, null, 2))
  }

  const btn_click = async (e) => {
    await eventHandler()
  }

  return (
    <React.Fragment>
      <h1>About</h1>
      <hr />
      <div>
        <button onClick={(e) => btn_click(e)} >request hello api</button>
        <pre>
          {msg}
        </pre>
      </div>
    </React.Fragment >
  );
};

export default About;
