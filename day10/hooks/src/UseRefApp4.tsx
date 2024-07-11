import React, { useState, useRef, useEffect } from "react";

const UseRefApp4 = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  
  useEffect(() => {
    if (inputRef.current !== null) {
      // 바로 input창으로 마우스커서 향하게
      inputRef.current.focus();
      console.log(inputRef.current);
      inputRef.current.addEventListener("dblclick", () => {
        alert("test");
      });
    }
  });

  const login = () => {
    // !: null 체크
    alert(`환영합니다. ${inputRef.current!.value}`)
    // ?: null이어도 상관없다
    inputRef.current?.focus()
  }

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="username"/>
      <button onClick={login}>로그인</button>
    </div>
  )
}

export default UseRefApp4;