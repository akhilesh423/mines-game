'use client'
import GameBoard from "../components/GameBoard"
import { useState } from "react"

export default function Game(){
    const [noOfMines, setNoOfMines] = useState('3')
    const [startGame, setStartGame] = useState(false)

    const handleStartGame = () => {
        setStartGame(true)
    }

    return(
        <div className="h-screen w-screen p-5 flex flex-row">
             <div className="w-full max-w-sm p-5 grey-bg rounded-lg">
        <label>Mines</label>
      <select onChange={(e)=> {
        setNoOfMines(e.target.value)
      }} id="dropdown" className="border w-full p-3 black-bg rounded" value={noOfMines}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>

      <button onClick={handleStartGame} className="border w-full p-3 mt-5 rounded-md">START</button>
        </div>
    
           <GameBoard mines ={noOfMines} startGame = {startGame}/>
        </div>
    )
}