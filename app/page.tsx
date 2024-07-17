'use client'
import { useRouter } from 'next/navigation'

export default function Home() {
    const router = useRouter()

  return (
       <div className="flex flex-col justify-center	min-h-screen">
        <h1 className="text-5xl font-bold text-center">WELCOME TO MINES GAME.</h1>
        <button onClick ={() => {router.push("/game")}} className="border rounded mt-5 font-semibold self-center px-3.5 py-1.5">PLAY GAME</button>
       </div>
  );
}
