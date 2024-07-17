
import Tile from "./Tile"
import { useState,useEffect } from "react"

type MinesArrayType = number[];

export default function GameBoard(props:any){
    const lengthOfArray = 25
    let minesArray = Array(lengthOfArray).fill(0);
    const [minesIndexArray, setMinesIndexArray] = useState<MinesArrayType>([]); 
    const{mines, startGame} = props

    useEffect(() => {
        setGame()
    },[startGame])

    const setGame = () => {
        console.log(`props is ${mines}`)
        for(let i = 0; i < mines; i++){
            let randomIndex;
            do {
                randomIndex = Math.floor(Math.random() * lengthOfArray);
            } while (minesArray[randomIndex] === 1);
            minesArray[randomIndex] = 1;
            
        }
        setMinesIndexArray(minesArray)
    

    }

    console.log(minesIndexArray)
    

    return(
        <div className="grid grid-cols-5 gap-4 grow max-w-2xl m-auto">
          {minesIndexArray.map((eachItem, index) => (
                    <Tile key={index} id={index} number={eachItem} startGame= {startGame}/>
                ))}
        </div>
    )
}