import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {  
  return (
  <main>
    <div className='container'>
      <h3>questions and answers about login</h3>
      <div>
        {data.map((item) => {
          return <SingleQuestion id={item.id} 
                                 title={item.title} 
                                 info={item.info}
                                 />
        })}
      </div>
    </div>
  </main>);
}

export default App;
