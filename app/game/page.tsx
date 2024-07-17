import GameBoard from "../components/GameBoard"
import Logic from "../components/Logic"

export default function Game(){
    return(
        <div className="min-h-screen p-5 flex flex-row">
            <Logic/>
           <GameBoard/>
        </div>
    )
}