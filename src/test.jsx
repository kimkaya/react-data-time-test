import './App.css';
import React from 'react';
import TestMyName from './T/TestMyName';
import TestName from './T/TestName';
import TestCounter from './T/TestCounter';
import TestCounter2 from './T/TestCounter2';
import Tstore from './T/Tstore';




class App extends React.Component {
 // state는 초기 데이터
  constructor(props) {
    super(props);
    this.state = {
    information: [
      {
        id: 0,
        name: '김미선',
        job: '모델'
      },
      {
        id: 1,
        name: '김성태',
        job: '식당사장'
      },
      {
        id: 2,
        name: '최준봉',
        job: '사장'
      },
      {
        id: 3,
        name: '조준',
        job: '유튜버'
      }
    ],
  }
  }
  

  

  render() {
    const { information } = this.state; //어디서 불러오는지(state 안에)
    const id = information[0].id; // 데이터 안에 어떤걸 불러오는지
    const number = 2
    const con = 1
    console.log(id);
    return (
      <div>

        {/* <TestCounter />
        <TestName Myname ='colin' />
        <TestMyName />
        {JSON.stringify(information)}
        <TestCounter2 /> */}
          
        <div>{id === 1 ? (<div>{JSON.stringify(information[0])}</div>) : (<div>{JSON.stringify(information[3])}</div>)}</div>//id가 1이면 information[0]를 보여주고 아니면 information[3]을 보여줘라
        <div>{number === 2 && (<div>{JSON.stringify(information[2])}</div>)}</div>//넘버가 2이면
        <div>{con === 1 ? (<div>{JSON.stringify(information[1])}</div>) : (<div>{JSON.stringify(information[0])}</div>)}</div>
        <div>{id === 0 && (<div>{JSON.stringify(information[0])}</div>)}</div>
      


      {/* <Tstore /> */}
      </div>
    );
  }

    





















}


export default App;