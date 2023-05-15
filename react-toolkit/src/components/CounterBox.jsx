import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { increment, decriment, incrementByAmount } from '../slices/counterSlice';

export default function CounterBox() {
  const counter = useSelector((state)=>(state.counter.value))
  const counter2 = useSelector((state)=>(state.counterReducer.value))

  // 임의로 증가할 값을 useState
  const [num, setNum] = useState(1);

  const dispatch = useDispatch();
  return (
    <div>
      <h3>{counter}, {counter2}</h3>
      <button onClick={()=>{dispatch(increment())}}>
        +1
      </button>
      <button onClick={()=>{dispatch(decriment())}}>
        -1
      </button>
      
      {/** num값을 바꾸기위한 input태그 작성
       *  *input태그로 받아온 값은 문자열! 
      */}
      <input type="text" />
      <button onClick={()=>{
        // 매개변수로 전달되는 값은 payload로 사용할 수 있다
        dispatch(incrementByAmount(num))
      }}>
        {num} 값 만큼 증가
      </button>
    </div>
  )
}
