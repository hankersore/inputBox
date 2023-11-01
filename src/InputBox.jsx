import React, { useState } from 'react';

const InputBox = () => {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [value3, setValue3] = useState('');

  const handleChange1 = (event) => {
    setValue1(event.target.value);
  };
  const handleChange2 = (event) => {
    setValue2(event.target.value);
  };
  const handleChange3 = (event) => {
    setValue3(event.target.value);
  };

  return (
    <div>
      <div className="box1">
        <input type="text" value={value1} onChange={handleChange1}/>
        <div className="box2">
        <input type="text" value={value2} onChange={handleChange2}/>
          <div className="box3">
         <input type="text" value={value3} onChange={handleChange3}/>
          <div className="box4"><p>{value1}</p><p>{value2}</p><p>{value3}</p></div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default InputBox;

