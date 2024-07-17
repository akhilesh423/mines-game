import "../globals.css"

export default function Tile(props:any){
    return(
        <div className="tile-color flex flex-row items-center justify-center h-48 w-48 rounded drop-shadow-2xl">
           <h1 className="font-bold">{props.content}</h1>
        </div>
    )
}