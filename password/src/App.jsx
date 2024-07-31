import { useCallback, useEffect, useState, useRef } from "react";
//use ref to take refrence
//useeffect i used to re run the function
//callback is used to memorize the functio

function App() {
  const [length, setLength] = useState(10);
  const [numberAllow, setNumberAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [password, setPassword] = useState("");

  //useref hook

  const passwordref = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllow) str += "0123456789";
    if (charAllow) str += "?{}!@#$%^&*()";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllow, charAllow, setPassword]);

  const copypassword = useCallback(() => {
    passwordref.current?.select();
    //copy to clipboard is used to copy the text
    window.navigator.clipboard.writeText(password);
  }, [password]);

  //page jab re run hoga tab chalay ga or yah array may jo dependencies hain aus may koi change aega to yah wapis re run hogaF
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllow, charAllow, passwordGenerator]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800">
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="=text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly
            ref={passwordref}
          />
          <button
            onClick={copypassword}
            className="outline-none bg-blue-950 text-white px-3 py-0.5 shrink-0"
          >
            Copy
          </button>
        </div>
        <div className="flex flex-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={8}
              max={20}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length:{length}</label>
          </div>
          <div className="flex items-center gap-x-1 rounded-xl">
            <input
              type="checkbox"
              defaultChecked={numberAllow}
              id="NumberInput"
              onChange={(e) => {
                setNumberAllow((prev) => !prev);
              }}
            />
            <label>Numbers</label>
          </div>
          <div className="flex items-center gap-x-1 rounded-xl">
            <input
              type="checkbox"
              defaultChecked={charAllow}
              id="NumberChat"
              onChange={(e) => {
                setCharAllow((prev) => !prev);
              }}
            />
            <label>Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
