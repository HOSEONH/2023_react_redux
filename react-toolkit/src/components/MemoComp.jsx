import React, { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { addMemoRedux, addMemoToolkit, deleteMemoRedux, deleteMemoSplice } from '../slices/memoSlice';

export default function MemoComp() {
  const memo = useSelector((state)=>(state.memo));
  const [input, setInput] = useState("")

  const dispatch = useDispatch()
  return (
    <div>
        {
            // memo배열의 index 값을 전달하여 splice를 이용하여 삭제
            // 다양한 삭제 방법 중 하나
            memo.map((m, index)=>(
                <div key={m.id}>
                    <h3>{m.text}</h3>
                    <p>{m.date}</p>
                    <button 
                        onClick={()=>{dispatch(deleteMemoRedux(m.id))}}>
                        X
                    </button>
                    <button 
                        onClick={()=>{dispatch(deleteMemoSplice(index))}}>
                        index-X
                    </button>
                </div>
            ))
        }
        {/**
         * 1. memo redux 내용 확인 후, slice 와 비교
         * 2. input태그를 이용해서 입력받아와서 수정하기
         *  >> 3시50분에 같이 확인!
         */}
        <input type="text" value={input} onChange={(e)=>{setInput(e.target.value)}}/>
        <button onClick={()=>{ dispatch( addMemoRedux({text:input, date :"2023-05-15"}) )}}>
            메모추가
        </button>
        <button onClick={()=>{dispatch( addMemoToolkit({text:input, date:"2023-05-15"}))}}>
            Toolkit형태로 추가
        </button>
    </div>
  )
}