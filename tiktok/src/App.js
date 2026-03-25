import { useState } from "react";

// function App() {
//   const [counter, setCounter] = useState(1);

//   const handleIncrease = () => {
//     setCounter(counter + 1);
//   };

//   return (
//     <div className="App">
//       <h1>{counter}</h1>
//       <button onClick={handleIncrease}>Increase</button>
//     </div>
//   );
// }

function App() {
  const [info, setInfo] = useState({
    name: "John",
    age: 30,
    address: "123 Main St",
  });

  const handleUpdate = () => {
    setInfo({
      ...info,
      bio: "Hello World",
    });
  };

  return (
    <div className="App">
      <h1>{JSON.stringify(info)}</h1>
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
}


export default App;
