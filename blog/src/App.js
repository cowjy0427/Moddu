import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';

function App() {

  let [글제목,글제목변경]= useState(['남자 코트 추천','강남 우동 맛집','글제목3']);
  let [따봉, 따봉변경]=useState(0);
  let posts='강남 고기 맛집';
  /*function 제목바꾸기(){
   var newArray=[...글제목]; //deep copy, 별개의 array 생성
   newArray[0]='여자 코트 추천'
   글제목변경(newArray);  
  }*/

  function 제목바꾸기(){
    var newArray=[...글제목];
    if(newArray[0]==='남자 코트 추천')
    {
      newArray[0]='여자 코트 추천';
    }
    else
    {
      newArray[0]='남자 코트 추천';
    }
    글제목변경(newArray);
  }



  return (
    <div className="App">
     <div className="black-nav">
       <div>개발 Blog</div>
     </div>
     <button onClick={제목바꾸기 }>버튼</button>

     <div className="list">
       <h3>{ 글제목[0] } <span onClick={()=>{ 따봉변경(따봉+1) }}>👍</span>{따봉}</h3>
       <p>2월 17일 발행</p>
       <hr/>
     </div>
     <div className="list">
       <h3>{ 글제목[1] }</h3>
       <p>2월 18일 발행</p>
       <hr/>
     </div>
     <div className="list">
       <h3>{ 글제목[2] }</h3>
       <p>2월 19일 발행</p>
       <hr/>
     </div>

     <Modal/>


     
    </div>
  );
}

function Modal(){//component
  return(//return 내부를 묶을 때 의미없는 div 쓰기 싫으면 <></>
    <div className="modal">
       <h2>제목</h2>
       <p>날짜</p>
       <p>상세내용</p>
     </div>
  )
}



export default App;
