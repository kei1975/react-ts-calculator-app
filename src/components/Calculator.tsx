import React, { useState } from 'react'
import { calculate, State } from '../logic/calculate'
import ButtonPanel from './ButtonPanel'
import Display from './Display'
import "../styles/Calculator.scss"

export default function Calculator() {
    const [state, setState] = useState<State>({
        current: "0",
        operand: 0, //計算に使う数値を覚えておく
        operator: null,
        isNextClear: false
    })
    const buttonHandler = (code: string) => {
        // console.log(code)
        const nextState = calculate(code, state)
        setState(nextState)
    }
  return (
    <div>
        <Display value={state.current}/>
        <ButtonPanel buttonHandler={buttonHandler} />
    </div>
  )
}
