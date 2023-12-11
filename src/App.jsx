import {useState} from 'react';
import './App.css'

function App() {
  const [Color, setColor] = useState("violet");

  return (
    <div className="w-full h-screen duration-1000 justify-center flex" style={{backgroundColor: Color}}>
      <div className="fixed flex flex-wrap bottom-12 justify-center bg-white p-6 rounded-2xl w-auto">
        <div className="flex flex-wrap justify-center gap-4 ">
          <button className="text-white bg-red-800 px-7 py-4 rounded-xl" onClick={() => {
            setColor("red")
          }}>Red
          </button>
          <button className="text-white bg-green-800 px-7 py-4 rounded-xl" onClick={() => {
            setColor("green")
          }}>Green
          </button>
          <button className="text-white bg-blue-800 px-7 py-4 rounded-xl" onClick={() => {
            setColor("blue")
          }}>Blue
          </button>
          <button className="text-white bg-yellow-400 px-7 py-4 rounded-xl" onClick={() => {
            setColor("yellow")
          }}>Yellow
          </button>
          <button className="text-white bg-black px-7 py-4 rounded-xl" onClick={() => {
            setColor("black")
          }}>Black
          </button>
          <button className="text-white bg-orange-900 px-7 py-4 rounded-xl" onClick={() => {
            setColor("orange")
          }}>Orange
          </button>
          <button className="text-white bg-purple-800 px-7 py-4 rounded-xl" onClick={() => {
            setColor("purple")
          }}>Purple
          </button>
          <button className="text-white bg-pink-800 px-7 py-4 rounded-xl" onClick={() => {
            setColor("pink")
          }}>Pink
          </button>
          <button className="text-white bg-cyan-800 px-7 py-4 rounded-xl" onClick={() => {
            setColor("cyan")
          }}>Cyan
          </button>
        </div>
      </div>
    </div>
  )
}

export default App