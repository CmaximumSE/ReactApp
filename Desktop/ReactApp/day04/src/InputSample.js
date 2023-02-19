import React, { useRef, useState } from 'react';

function InputSample() {
    const [inputs, setInputs] = useState({
        name: '',
        nickName: ''
    });

    const nameInput = useRef()
    console.log(nameInput);

    const {name, nickName} = inputs

    const onReset = () => {
        setInputs({ name: "", nickName: "" });
        nameInput.current.focus();
    }
    
    const onChange = (e) => {
        const {value, name} = e.target;
        setInputs({ ...inputs, [name]:value });
    }

    const onClick = (e) => {
        setInputs({ name: "", nickName: ""});
    }

  return (
    <div>
      <input placeholder="이름" name='name' value={name} onChange={onChange} ref={nameInput}/>
      <input placeholder="닉네임" name='nickName' onChange={onChange}/>
      <button onClick={onReset}>초기화</button>
      <div>
        <p><b>값:</b>{name}({nickName})</p>
      </div>
    </div>
  );
}

export default InputSample;