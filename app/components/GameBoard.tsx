import Tile from "./Tile"

export default function GameBoard(){
    return(
        <div className="grid grid-cols-5 gap-4 w-full max-w-7xl border p-5">
           <Tile content = "Bomb"/>
        </div>
    )
}