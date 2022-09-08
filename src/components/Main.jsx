import React, {useState, useEffect} from 'react'
import {nanoid} from 'nanoid'
import Confetti from 'react-confetti'
import Die from './Die'

const Main = () => {

    const generateNum = () =>{
        return     {
            value: Math.ceil(Math.random() * 6),
            isHeld: false,
            id: nanoid()
        }
    }

    const allNewDice = ()=>{
        let diceArr = []
        for(let i = 0; i < 10; i++){
            diceArr.push(
            generateNum()
        )
        }
        return diceArr
    }

const[diceNum, setDiceNum] = useState(allNewDice()) 
const [tenzies, setTenzies] = useState(false)

const dieHeld = diceNum.every(die => die.isHeld)
useEffect(()=>{
   const firstNum = diceNum[0].value
   const allNumSame = diceNum.every(num => num.value === firstNum)
   if(dieHeld && allNumSame){
    setTenzies(true)
   }

}, [diceNum])

const rollDice = ()=>{
    if(!tenzies){setDiceNum(oldDiceNum => oldDiceNum.map(die => {
        return die.isHeld? die : generateNum()
    }))}else{
        setTenzies(false)
        setDiceNum(allNewDice)
    }
}

const holdDice = (id)=>{
     setDiceNum(prevSetDiceNum => 
        prevSetDiceNum.map(dice => {
           return  dice.id === id? 
           {...dice, isHeld: !dice.isHeld} :
            dice
     }) )
}



  return (
    <main className='main-container'>
        {tenzies && <Confetti />}
        <div className='inner-box'>
            <h1 className='head-text tc'>Tenzies</h1>
            {tenzies ? <h2 className='won-text'>YOU WON!!!</h2> : <p className='text tc'>
            Roll until all dice are the same. 
            Click each die to freeze it at its current 
            value between rolls.</p>}
            <div className='dices'>
                {diceNum.map(alldice =>{
                return <Die 
                key = {alldice.id} 
                value = {alldice.value}
                isHeld = {alldice.isHeld}
                holdDie = {() => holdDice(alldice.id)}
                />
                })}
            </div>
            <button
            className='dice-button'
            onClick={rollDice}
            >
            {tenzies? 'NEW GAME' : 'ROLL'}
            </button>
        </div>
    </main>
  )
}

export default Main
