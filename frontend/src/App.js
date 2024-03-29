import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';

function App() {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch('/members')
  //     .then(res => res.json())
  //     .then(data => {
  //       setData(data);
  //       console.log(data);
  //     });
  // }, []);

  return (
    <div>
      <Navbar />
      {/* {data.member === undefined ? (
        <p>Loading ...</p>
      ) : (
        data.member.map((member, i) => <p key={i}>{member}</p>)
      )} */}

    </div>
  )};

export default App
