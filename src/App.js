import './App.css';
import { useState } from 'react';

function App() {

  let [titles, setTitles] = useState(['봄 코트 추천', '여름 코트 추천', '가을 코트 추천']);
  let [good, setGood] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{color: 'red', fontSize: '18px'}}>React Blog</h4>
      </div>
      <button
        onClick={() => {
          let copy = [...titles];
          copy[0] = '남자 코트 추천';
          setTitles(copy);
        }}
      >변경</button>
      <button
        onClick={() => {
          let copy = [...titles];
          copy = copy.sort();
          setTitles(copy);
        }}
      >
        정렬
      </button>
      <div className="list">
        <h4>{ titles[0] } <span onClick={ () => setGood(good+1) }>👍</span> {good} </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{ titles[1] }</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{ titles[2] }</h4>
        <p>2월 17일 발행</p>
      </div>

      <Modal/>

    </div>
  );
}

function Modal() {
  return (
    <div className='modal'>
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
