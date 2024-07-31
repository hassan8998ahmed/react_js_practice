import { useState } from "react"


function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
     <div className="w-full h-screen duration-200" style={{
      backgroundColor: color
     }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
     <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
      <button onClick={() => {setColor("green")}} className="outline-non px-4 rounded-full text-shite shadow-xl" style={{
        backgroundColor: "green"
      }}>Green</button>
      <button onClick={() => {setColor("red")}} className="outline-non px-4 rounded-full text-shite shadow-xl" style={{
        backgroundColor: "red"
      }}>Red</button>
      <button onClick={() => {setColor("yellow")}} className="outline-non px-4 rounded-full text-shite shadow-xl" style={{
        backgroundColor: "yellow"
      }}>Yellow</button>
     </div>

      </div>
     </div>
    </>
  )
}

export default App
