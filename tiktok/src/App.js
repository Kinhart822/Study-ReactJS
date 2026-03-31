import { useMemo, useState, useRef } from "react";

/**
 * 1. useState: Cơ bản với kiểu dữ liệu nguyên thủy (số)
 * Giải thích: 
 * - counter: Trạng thái hiện tại (bắt đầu là 1)
 * - setCounter: Hàm dùng để cập nhật trạng thái
 * - handleIncrease: Hàm tăng giá trị counter lên 1 mỗi khi click
 */
// function App() {
//   const [counter, setCounter] = useState(1);
//   const handleIncrease = () => setCounter(counter + 1);
//   return (
//     <div className="App">
//       <h1>{counter}</h1>
//       <button onClick={handleIncrease}>Increase</button>
//     </div>
//   );
// }

/**
 * 2. useState: Xử lý với Object
 */
// function App() {
//   const [info, setInfo] = useState({ name: "John", age: 30 });
//   const handleUpdate = () => setInfo({ ...info, bio: "Hello World" });
//   return (
//     <div className="App">
//       <h1>{JSON.stringify(info)}</h1>
//       <button onClick={handleUpdate}>Update</button>
//     </div>
//   );
// }

/**
 * 3. Ứng dụng: Lấy phần thưởng ngẫu nhiên
 */
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

/**
 * 4. One-way / Two-way binding & LocalStorage
 * Giải thích:
 * - One-way binding: Dữ liệu từ component xuống UI (render).
 * - Two-way binding: Dữ liệu từ UI cập nhật ngược lại state (qua onChange/value).
 * - localStorage: Lưu dữ liệu bền vững ở trình duyệt.
 */

// const course = [
//   { id: 1, name: "HTML, CSS" },
//   { id: 2, name: "JavaScript" },
//   { id: 3, name: "ReactJS" }
// ]

// function App() {
//   const todoStorage = localStorage.getItem("todos");
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [checkedRadio, setCheckedRadio] = useState(false);
//   const [checked, setChecked] = useState([]);

//   // State cho danh sách công việc, khởi tạo từ localStorage
//   const [todos, setTodos] = useState(todoStorage ? JSON.parse(todoStorage) : []);
//   const [todo, setTodo] = useState("");

//   const handleSubmit = () => {
//     console.log({ name, email, checkedRadio, selectedIds: checked });
//   };

//   // Xử lý Checkbox: Chọn nhiều
//   const handleCheck = (id) => {
//     setChecked(prev => {
//       const isChecked = prev.includes(id);
//       if (isChecked) {
//         return prev.filter(item => item !== id); // Bỏ chọn
//       } else {
//         return [...prev, id]; // Thêm lựa chọn mới
//       }
//     });
//   };

//   // Xử lý thêm công việc và lưu vào LocalStorage
//   const handleAddTodo = () => {
//     setTodos(prev => {
//       const newTodos = [...prev, todo];
//       localStorage.setItem("todos", JSON.stringify(newTodos));
//       return newTodos;
//     });
//     setTodo(""); // Reset ô nhập liệu
//   };

//   return (
//     <div className="App" style={{ padding: 32 }}>
//       <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
//       <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />

//       <div>
//         {course.map((item) => (
//           <div key={item.id}>
//             <input
//               type="radio"
//               checked={checkedRadio === item.id}
//               onChange={() => setCheckedRadio(item.id)}
//             />
//             <input
//               type="checkbox"
//               checked={checked.includes(item.id)}
//               onChange={() => handleCheck(item.id)}
//             />
//             {item.name}
//           </div>
//         ))}
//       </div>
//       <button onClick={handleSubmit}>Submit</button>

//       <div style={{ padding: 32 }}>
//         <input value={todo} onChange={(e) => setTodo(e.target.value)} placeholder="Todo" />
//         <button onClick={handleAddTodo}>Add</button>
//         <ul>
//           {todos.map((todo, index) => <li key={index}>{todo}</li>)}
//         </ul>
//       </div>
//     </div>
//   );
// }

/**
 * 5. Mounted / Unmounted
 */
// function Content() {
//   return (
//     <div>
//       <h1>Content</h1>
//     </div>
//   );
// }

// function App() {
//   const [showContent, setShowContent] = useState(false);

//   const handleShowContent = () => {
//     setShowContent(!showContent);
//   };

//   return (
//     <div className="App">
//       <button onClick={handleShowContent}>Show/Hide Content</button>
//       {showContent ? <Content /> : null}
//     </div>
//   );
// }

/**
 * 6. useEffect: Xử lý Side Effects (API calls, DOM events, v.v.)
 */
// const lessons = [
//   { id: 1, name: "ReactJS" },
//   { id: 2, name: "JavaScript" },
//   { id: 3, name: "HTML/CSS" },
// ];

// function App() {
//   const [title, setTitle] = useState("");
//   const [showContent, setShowContent] = useState(false);  // Trạng thái đóng/mở nội dung chính
//   const [posts, setPosts] = useState([]);                 // Danh sách dữ liệu từ API
//   const [type, setType] = useState("posts");              // Loại API (posts, comments, albums)
//   const [showGoToTop, setShowGoToTop] = useState(false);  // Trạng thái ẩn/hiện nút "Go to Top"
//   const [width, setWidth] = useState(window.innerWidth);  // Chiều rộng màn hình
//   const [countdown, setCountdown] = useState(180);        // Đồng hồ đếm ngược
//   const [count, setCount] = useState(1);                  // Bộ đếm
//   const [avatar, setAvatar] = useState();                 // Ảnh đại diện
//   const [lessonId, setLessonId] = useState(1);            // ID bài học

//   const tabs = ["posts", "comments", "albums"];

//   /**
//    * useEffect(callback)
//    * - Gọi callback mỗi khi component re-render
//    * - Gọi callback sau khi component thêm element vào DOM
//    * 
//    * useEffect(callback, [])
//    * - Chỉ gọi callback 1 lần duy nhất sau khi component được mounted
//    * 
// * useEffect(callback, [deps])
//    * - Callback sẽ được gọi lại mỗi khi dependency (deps) thay đổi
//    * 
//    * CHUNG:
//    * 1. Callback luôn được gọi sau khi component được mounted
//    * 2. Cleanup function luôn được gọi trước khi component unmounted
//    * 3. Cleanup function luôn được gọi trước khi callback được gọi (trừ lần mount đầu tiên)
//    */

//   // useEffect(() => {
//   //   console.log("Mounted / Re-rendered");
//   // });

//   // CASE 1: useEffect(callback, [type])
//   // - Callback được gọi khi 'type' thay đổi.
//   // - Dùng để call API mỗi khi chuyển Tab.
//   useEffect(() => {
//     document.title = `Count: ${count}`;
//   }, [count]);
//   return (
//     <div className="App">
//       <h1>{count}</h1>
//       <button onClick={() => setCount(count + 1)}>Increase</button>
//     </div>
//   );
// }

/**
 * 7. useLayoutEffect
 * SO SÁNH THỨ TỰ THỰC THI
 * useEffect:
 * 1. Cập nhật lại state
 * 2. Cập nhật DOM (mutated)
 * 3. Render lại UI
 * 4. Gọi cleanup nếu deps thay đổi
 * 5. Gọi useEffect callback
 * 
 * useLayoutEffect:
 * 1. Cập nhật lại state
 * 2. Cập nhật DOM (mutated)
 * 3. Gọi cleanup nếu deps thay đổi (Sync)
 * 4. Gọi useLayoutEffect callback (Sync)
 * 5. Render lại UI
 */
// function App() {
//   const [counter, setCounter] = useState(0);

//   useLayoutEffect(() => {
//     // Nếu giá trị vượt quá 3, reset về 0 ngay lập tức 
//     // trước khi người dùng kịp thấy số lỗi trên màn hình.
//     if (counter > 3) {
//       setCounter(0);
//     }
//   }, [counter]);

//   useEffect(() => {
//     // Nếu giá trị vượt quá 3, reset về 0 ngay lập tức 
//     // nhưng sẽ bị giật nhẹ chuyển từ 4 -> 0 vì phải chờ DOM render xong mới cập nhật.
//     if (counter > 3) {
//       setCounter(0);
//     }
//   }, [counter]);

//   const handleIncrease = () => {
//     setCounter(counter + 1);
//   };

//   return (
//     <div className="App" style={{ padding: 32 }}>
//       <h1>{counter}</h1>
//       <button onClick={handleIncrease}>Increase</button>
//     </div>
//   );
// }

/**
 * 8. useRef Hook
 * 
 * Mục đích: 
 * 1. Lưu các giá trị qua tham chiếu bên ngoài function component 
 *    để giá trị KHÔNG bị reset khi component re-render.
 * 2. Truy cập DOM element trực tiếp.
 * 3. Lưu trữ giá trị cũ (Previous state).
 * 
 * Đặc điểm:
 * - useRef trả về một đối tượng có thuộc tính 'current'.
 * - Khi giá trị trong 'current' thay đổi, component KHÔNG re-render.
 */
// function App() {
//   const [count, setCount] = useState(60);

//   // const timerIdRef = useRef(99); // object
//   // console.log(timerIdRef.current);

//   // let timerId;

//   // 1. Lưu giá trị bền vững (Timer ID)
//   // Nếu dùng biến thường (let timerId), nó sẽ bị reset về undefined mỗi khi re-render
//   const timerId = useRef();

//   // 2. Lưu giá trị cũ (Previous State)
//   const prevCount = useRef();

//   // 3. Truy cập DOM element
//   const h1Ref = useRef();

//   // Mỗi khi count thay đổi, lưu lại giá trị hiện tại vào prevCount
//   // useEffect chạy sau render nên prevCount.current lúc in ra ở thân hàm sẽ là giá trị CŨ
//   useEffect(() => {
//     prevCount.current = count;
//   }, [count]);

//   // Lấy thông tin tọa độ/kích thước thẻ h1 sau khi mount
//   useEffect(() => {
//     const rect = h1Ref.current.getBoundingClientRect();
//     console.log('DOM Rect:', rect);
//   }, []);

//   const handleStart = () => {
//     // Ngăn chặn tạo nhiều timer nếu bấm Start liên tục
//     if (timerId.current) return;

//     timerId.current = setInterval(() => {
//       setCount(prev => prev - 1);
//     }, 1000);
//     console.log('Start Timer ID:', timerId.current);
//   };

//   const handleStop = () => {
//     // ban đầu là id vẫn có thể log ra là 60
//     // nhưng nếu để tiếp tục sẽ undefined
//     // vì khi re-render thì hàm App() sẽ được gọi lại và timerId sẽ bị reset về undefined 
//     // console.log('timerId', timerId);
//     // clearInterval(timerId);

//     console.log('Stop Timer ID:', timerId.current);
//     clearInterval(timerId.current);
//     timerId.current = null; // Reset ref
//   };

//   // Xem sự thay đổi giữa giá trị hiện tại và giá trị cũ
//   console.log(`Current: ${count} | Previous: ${prevCount.current}`);

//   return (
//     <div className="App" style={{ padding: 32 }}>
//       <h1 ref={h1Ref} style={{ fontSize: '4rem' }}>{count}</h1>
//       <button
//         style={{ padding: '8px 16px', marginRight: 8 }}
//         onClick={handleStart}
//       >
//         Start
//       </button>
//       <button
//         style={{ padding: '8px 16px' }}
//         onClick={handleStop}
//       >
//         Stop
//       </button>
//     </div>
//   );
// }

/**
 * 9. React.memo() HOC
 * 
 * Khái niệm: 
 * - memo() là một Higher Order Component (HOC).
 * - Dùng để bao bọc các component con nhằm tránh việc chúng bị re-render 
 *   không cần thiết khi component cha re-render.
 * 
 * Khi nào sử dụng:
 * - Khi component con nhận vào các props "nguyên thủy" (string, number, boolean) 
 *   và muốn nó chỉ render lại khi các props này thực sự thay đổi.
 * - Tránh lãng phí tài nguyên xử lý UI.
 */

// function App() {
//   const [count, setCount] = useState(0);
//   const [count2, setCount2] = useState(0);

//   const increase = () => {
//     setCount(prev => prev + 1);
//   };

//   const increase2 = () => {
//     setCount2(prev => prev + 1);
//   };

//   return (
//     <div className="App" style={{ padding: 32 }}>
//       {/* 
//               Component Content chỉ nhận prop 'count'. 
//               Nhờ React.memo, khi chúng ta bấm 'Increase 2' (chỉ thay đổi count2),
//               Content sẽ KHÔNG bị re-render (Check console log).
//             */}
//       <Content count={count} />

//       <div style={{ marginTop: 20 }}>
//         <h1>Count 1: {count}</h1>
//         <h1>Count 2: {count2}</h1>
//         <button onClick={increase}>Increase 1 (Affects Content)</button>
//         <button onClick={increase2} style={{ marginLeft: 10 }}>
//           Increase 2 (Does not affect Content)
//         </button>
//       </div>
//     </div>
//   );
// }

/**
 * 10. useCallback Hook
 * 
 * Khái niệm: 
 * - Dùng để tránh việc tạo mới một hàm không cần thiết sau mỗi lần re-render.
 * - Giải quyết vấn đề re-render của component con khi truyền object, array, function qua props 
 *   (nếu component con đã được bao bọc bởi React.memo).
 * 
 * Cách hoạt động:
 * - useCallback nhận vào một callback function và một mảng dependencies.
 * - Nó sẽ trả về một memoized version của callback (giữ nguyên địa chỉ vùng nhớ).
 * - Hàm chỉ được tạo mới khi một trong các dependencies thay đổi.
 */
// function App() {
//   const [count, setCount] = useState(0);

//   /**
//    * ❌ Cách chưa tối ưu:
//    * Mỗi lần App re-render, hàm này sẽ được tạo mới (địa chỉ vùng nhớ mới).
//    * Dẫn đến component con (Content) sẽ luôn bị re-render vì prop 'onIncrease' thay đổi,
//    * mặc dù Content đã được bọc trong React.memo().
//    */
//   // const handleIncrease = () => {
//   //   setCount(prev => prev + 1);
//   // };

//   /**
//    * ✅ Cách xử lý đúng: 
//    * Dùng useCallback để "ghi nhớ" (memoize) hàm này.
//    * Nó sẽ trả về một tham chiếu hàm duy nhất qua các lần render nếu dependencies không đổi.
//    * => Giúp React.memo ở component con hoạt động hiệu quả.
//    */
//   const handleIncrease = useCallback(() => {
//     setCount(prev => prev + 1);
//   }, []); // [] : Chỉ khởi tạo hàm 1 lần duy nhất khi Mount

//   return (
//     <div className="App" style={{ padding: 32 }}>
//       {/* 
//           - Tên props bắt đầu bằng 'on' (onIncrease) để thể hiện sự kiện.
//           - Tên hàm xử lý bắt đầu bằng 'handle' (handleIncrease).
//       */}
//       <Content onIncrease={handleIncrease} />

//       <div style={{ marginTop: 20 }}>
//         <h1>Count: {count}</h1>
//       </div>
//     </div>
//   );
// }

/**
 * 11. useMemo Hook
 * 
 * Khái niệm: 
 * - Dùng để "ghi nhớ" (memoize) một giá trị được tính toán phức tạp.
 * - Tránh việc tính toán lại giá trị này sau mỗi lần re-render nếu dữ liệu đầu vào (dependencies) không thay đổi.
 * 
 * Cách hoạt động:
 * - useMemo nhận vào một callback function và một mảng dependencies.
 * - Nó sẽ trả về giá trị được tính toán từ callback.
 * - Giá trị này chỉ được tính toán lại khi một trong các dependencies thay đổi.
 */
function App() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [products, setProducts] = useState([]);

  const nameRef = useRef();

  const handleAddProduct = () => {
    // Tránh thêm sản phẩm trống
    if (!name || !price) return;

    setProducts([
      ...products,
      {
        name,
        price: Number(price), // Chuyển đổi sang số
      },
    ]);

    // Reset form và focus lại vào ô 'Name'
    setName("");
    setPrice("");
    nameRef.current.focus();
  };

  /**
   * Dùng useMemo để tối ưu hiệu năng:
   * - 'total' chỉ được tính toán lại khi danh sách 'products' thay đổi.
   * - Nếu nhập vào các ô input (làm App re-render), biến 'total' sẽ được lấy từ bộ nhớ (memo), 
   *   không cần chạy lại vòng lặp reduce tốn tài nguyên.
   */
  const total = useMemo(() => {
    console.log("Tính toán lại tổng tiền...");

    // array.reduce((accumulator, currentValue) => {
    // xử lý
    // return accumulator;
    // }, initialValue);

    // accumulator: giá trị tích lũy
    // currentValue: giá trị hiện tại
    // initialValue: giá trị ban đầu
    const result = products.reduce((acc, product) => {
      return acc + product.price;
    }, 0);
    return result;
  }, [products]);

  return (
    <div className="App" style={{ padding: 40, maxWidth: 600, margin: '0 auto' }}>
      <h1 style={{ color: '#2f3542' }}>Quản lý sản phẩm</h1>
      
      <div style={{ display: 'flex', gap: 10, marginBottom: 20 }}>
        <input
          value={name}
          ref={nameRef}
          style={{ padding: '8px 12px', borderRadius: 4, border: '1px solid #ccc', flex: 2 }}
          placeholder="Tên sản phẩm..."
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          value={price}
          style={{ padding: '8px 12px', borderRadius: 4, border: '1px solid #ccc', flex: 1 }}
          placeholder="Giá..."
          onChange={(e) => setPrice(e.target.value)}
        />
        <button 
          onClick={handleAddProduct}
          style={{ 
            padding: '8px 24px', 
            backgroundColor: '#2ed573', 
            color: '#fff', 
            border: 'none', 
            borderRadius: 4, 
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          Thêm
        </button>
      </div>

      <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#ff4757', marginBottom: 20 }}>
        Tổng cộng: {total.toLocaleString()} đ
      </div>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {products.map((product, index) => (
          <li 
            key={index} 
            style={{ 
              padding: '12px', 
              borderBottom: '1px solid #f1f2f6', 
              display: 'flex', 
              justifyContent: 'space-between' 
            }}
          >
            <span>{product.name}</span>
            <span style={{ color: '#747d8c' }}>{product.price.toLocaleString()} đ</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
