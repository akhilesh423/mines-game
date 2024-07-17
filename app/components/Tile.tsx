import { useState } from "react";
import Image from "next/image";
import gem from "../gem.png"; 
import bomb from "../bomb.png"; 

export default function Tile(props: any) {
    const { number,startGame } = props;
    const [isClicked, setIsClicked] = useState(false);
    const [gameOver, setGameOver] = useState(false);

    const handleClick = () => {
        if(startGame){
            if(number === 0){
                let audio = new Audio ("/gemSound.wav")
                audio.play();
            }
            else if(number === 1){
                let audio = new Audio ("/blastSound.wav")
                audio.play();
                setGameOver(true)
            }
            setIsClicked(true);
        }
       
    };

    return (
        <div className={`${
            isClicked ? "bg-zinc-800" : "tile-color hover:bg-slate-600"
        } flex flex-col items-center justify-center rounded drop-shadow-2xl`}
        onClick={handleClick}
        style={{
            cursor: 'pointer',
            paddingBottom: '100%', 
            position: 'relative', 
        }}

    >
        {isClicked || gameOver ? (
                number === 0 ? (
                    <Image src={gem} alt="gem" layout="fill" objectFit="contain" />
                ) : (
                    <Image src={bomb} alt="bomb" layout="fill" objectFit="contain"className="p-4" />
                )
            ) : null}
    </div>
);

}
