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

// function App() {
//   const [info, setInfo] = useState({
//     name: "John",
//     age: 30,
//     address: "123 Main St",
//   });

//   const handleUpdate = () => {
//     setInfo({
//       ...info,
//       bio: "Hello World",
//     });
//   };

//   return (
//     <div className="App">
//       <h1>{JSON.stringify(info)}</h1>
//       <button onClick={handleUpdate}>Update</button>
//     </div>
//   );
// }

// const gifts = ["CPU", "RAM", "SSD"];

// function App() {
//   const [gift, setGift] = useState(gifts[0]);

//   const randomGift = () => {
//     const randomGift = gifts[Math.floor(Math.random() * gifts.length)];
//     setGift(randomGift);
//   };

//   return (
//     <div className="App">
//       <h1>{gift || "Chưa có phần thưởng"}</h1>
//       <button onClick={randomGift}>Random Gift</button>
//     </div>
//   );
// }

// One-way/Two-way binding
// const course = [
//   {
//     id: 1,
//     name: "HTML, CSS"
//   },
//   {
//     id: 2,
//     name: "JavaScript"
//   },
//   {
//     id: 3,
//     name: "ReactJS"
//   }
// ]

// function App() {
//   const todoStorage = localStorage.getItem("todos");
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [checkedRadio, setCheckedRadio] = useState(false);
//   const [checked, setChecked] = useState([]);

//   // Todo list
//   const [todos, setTodos] = useState(todoStorage ? JSON.parse(todoStorage) : []);
//   const [todo, setTodo] = useState("");

//   const handleSubmit = () => {
//     console.log(name, email, checkedRadio);
//     console.log({ id: checked });
//   };

//   const handleCheck = (id) => {
//     setChecked(prev => {
//       const isChecked = prev.includes(id);
//       if (isChecked) {
//         return prev.filter(item => item !== id);
//       } else {
//         return [...prev, id];
//       }
//     });
//   };

//   const handleAddTodo = () => {
//     setTodos(prev => {
//       const newTodos = [...prev, todo];

//       console.log(newTodos);
//       const data = JSON.stringify(newTodos);
//       localStorage.setItem("todos", data);

//       return newTodos
//     });
//     setTodo("");
//   };

//   return (
//     <div className="App" style={{ padding: 32 }}>
//       <input
//         type="text"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         placeholder="Name"
//       />
//       <input
//         type="text"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         placeholder="Email"
//       />
//       <div>
//         {course.map((item) => (
//           <div key={item.id}>
//             <input
//               type="radio"
//               // name="course" // Phải thêm name để radio hoạt động đúng cho chọn 1 thôi
//               checked={checkedRadio === item.id}
//               onChange={(e) => setCheckedRadio(item.id)}
//             />

//             <input
//               type="checkbox"
//               checked={checked.includes(item.id)}
//               onChange={(e) => handleCheck(item.id)}
//             />
//             {item.name}
//           </div>
//         ))}
//       </div>
//       <button onClick={handleSubmit}>Submit</button>

//       <div style={{ padding: 32 }}>
//         <div>
//           <input
//             type="text"
//             value={todo}
//             onChange={(e) => setTodo(e.target.value)}
//             placeholder="Todo"
//           />
//           <button onClick={handleAddTodo}>Add</button>
//         </div>
//         <ul>
//           {todos.map((todo, index) => (
//             <li key={index}>{todo}</li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// Mounted / Unmounted
function Content() {
  return (
    <div>
      <h1>Content</h1>
    </div>
  );
}

function App() {
  const [showContent, setShowContent] = useState(false);

  const handleShowContent = () => {
    setShowContent(!showContent);
  };

  return (
    <div className="App">
      <button onClick={handleShowContent}>Show/Hide Content</button>
      {showContent && <Content />}
    </div>
  );
}
export default App;
