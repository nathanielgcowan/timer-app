"use client"
import { useState } from 'react';
import { IoIosAdd } from "react-icons/io";
import { RiSubtractFill } from "react-icons/ri";

export default function Home() {  
  const [count, setCount] = useState(0);

  function add() {
    setCount(count + 1);
  }
  function subtract() {
    setCount(count - 1)
  }

  return (
    <>
      <button onClick={subtract}>
        <RiSubtractFill />
      </button>
      { count }
      <button onClick={add}>
        <IoIosAdd />
      </button>
    </>
  );
}
