import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import HandleAPI from './components/HandleAPI';
import HandleTodos from './components/HandleTodos';
import useTimer from './hooks/useTimer';

const App = () => {

  const {count} = useTimer()

  return (
    <>
      {/* <HandleAPI /> */}
      {/* <HandleTodos /> */}
      
    </>
  )
}

export default App