import { useEffect, useState } from "react";

// 1. useState: Cơ bản với kiểu dữ liệu nguyên thủy (số)
// Giải thích: 
// - counter: Trạng thái hiện tại (bắt đầu là 1)
// - setCounter: Hàm dùng để cập nhật trạng thái
// - handleIncrease: Hàm tăng giá trị counter lên 1 mỗi khi click
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

// 2. useState: Xử lý với Object
// Giải thích:
// - Khi cập nhật object/array trong React, cần dùng toán tử spread (...) 
//   để bảo lưu các thuộc tính cũ, nếu không chúng sẽ bị mất (ghi đè hoàn toàn).
// function App() {
//   const [info, setInfo] = useState({
//     name: "John",
//     age: 30,
//     address: "123 Main St",
//   });

//   const handleUpdate = () => {
//     setInfo({
//       ...info,
//       bio: "Hello World", // Thêm thuộc tính bio mà không làm mất name, age, address
//     });
//   };

//   return (
//     <div className="App">
//       <h1>{JSON.stringify(info)}</h1>
//       <button onClick={handleUpdate}>Update</button>
//     </div>
//   );
// }

// 3. Ứng dụng: Lấy phần thưởng ngẫu nhiên
// Giải thích: Sử dụng Math.random để chọn ngẫu nhiên phần tử trong mảng.
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

// 4. One-way / Two-way binding & LocalStorage
// Giải thích:
// - One-way binding: Dữ liệu từ component xuống UI (render).
// - Two-way binding: Dữ liệu từ UI cập nhật ngược lại state (qua onChange/value).
// - localStorage: Lưu dữ liệu bền vững ở trình duyệt.
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
//       return newTodos
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

// Mounted / Unmounted
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

// 5. useEffect: Xử lý Side Effects (API calls, DOM events, v.v.)
const lessons = [
  { id: 1, name: "ReactJS" },
  { id: 2, name: "JavaScript" },
  { id: 3, name: "HTML/CSS" },
];

function App() {
  const [title, setTitle] = useState("");
  const [showContent, setShowContent] = useState(false);  // Trạng thái đóng/mở nội dung chính
  const [posts, setPosts] = useState([]);                 // Danh sách dữ liệu từ API
  const [type, setType] = useState("posts");              // Loại API (posts, comments, albums)
  const [showGoToTop, setShowGoToTop] = useState(false);  // Trạng thái ẩn/hiện nút "Go to Top"
  const [width, setWidth] = useState(window.innerWidth);  // Chiều rộng màn hình
  const [countdown, setCountdown] = useState(180);        // Đồng hồ đếm ngược
  const [count, setCount] = useState(1);                  // Bộ đếm
  const [avatar, setAvatar] = useState();                 // Ảnh đại diện
  const [lessonId, setLessonId] = useState(1);            // ID bài học

  const tabs = ["posts", "comments", "albums"];

  /**
   * useEffect(callback)
   * - Gọi callback mỗi khi component re-render
   * - Gọi callback sau khi component thêm element vào DOM
   * 
   * useEffect(callback, [])
   * - Chỉ gọi callback 1 lần duy nhất sau khi component được mounted
   * 
* useEffect(callback, [deps])
   * - Callback sẽ được gọi lại mỗi khi dependency (deps) thay đổi
   * 
   * CHUNG:
   * 1. Callback luôn được gọi sau khi component được mounted
   * 2. Cleanup function luôn được gọi trước khi component unmounted
   * 3. Cleanup function luôn được gọi trước khi callback được gọi (trừ lần mount đầu tiên)
   */

  // useEffect(() => {
  //   console.log("Mounted / Re-rendered");
  // });

  // CASE 1: useEffect(callback, [type])
  // - Callback được gọi khi 'type' thay đổi.
  // - Dùng để call API mỗi khi chuyển Tab.
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      });
  }, [type]);

  // CASE 2: useEffect(callback, [])
  // - Chỉ gọi callback 1 lần duy nhất sau khi Component mounted.
  // - Dùng để đăng ký các DOM Event listener.
  useEffect(() => {
    const handleScroll = () => {
      // Logic: Nếu cuộn quá 200px thì hiện nút Go to Top
      if (window.scrollY >= 200) {
        setShowGoToTop(true);
      } else {
        setShowGoToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // CLEANUP FUNCTION: Cực kỳ quan trọng để tránh Memory Leak
    // Hàm này sẽ tự động được gọi trước khi Component bị gỡ bỏ (unmounted)
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // CASE 3: useEffect(callback, [])
  // - Dùng để cập nhật chiều rộng màn hình mỗi khi resize.
  // - Nên dùng [] để listener chỉ được add 1 lần duy nhất khi Mount.
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // CLEANUP FUNCTION
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // CASE 4: useEffect(callback, [])
  // - Dùng để cập nhật đồng hồ đếm ngược mỗi giây.
  // - Tại sao dùng []? Để setInterval chỉ chạy duy nhất 1 lần.
  useEffect(() => {
    // Cách dùng setCountdown(countdown - 1) sẽ bị lỗi Closure (luôn lấy giá trị 180 ban đầu)
    // Vì vậy phải dùng callback: (prev) => prev - 1 để lấy giá trị mới nhất của State
    // setInterval(() => {
    //   setCountdown(countdown -1)
    //   console.log(countdown); 
    // }, 1000); 

    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
      console.log('Countdown counting...');
    }, 1000);

    // CLEANUP FUNCTION: Dọn dẹp timer khi component Unmount để tránh Memory Leak
    return () => {
      clearInterval(timer);
    };
  }, []);

  // CASE 5: useEffect(callback, [])
  useEffect(() => {
    console.log('Mounted or Re-render');

    // CLEANUP FUNCTION
    return () => {
      console.log('Cleanup');
    };
  }, [count]);

  // CASE 6: Preview ảnh
  useEffect(() => {
    return () => {
      avatar && URL.revokeObjectURL(avatar.preview);
    };
  }, [avatar]);

  const handlePreviewImage = (e) => {
    const file = e.target.files[0];
    file.preview = URL.createObjectURL(file);
    setAvatar(file);
    console.log(file.preview);
  };

  // CASE 7: Lắng nghe Custom Event (Fake Comment)
  useEffect(() => {
    const handleComment = (e) => {
      console.log(e.detail);
    };

    window.addEventListener(`lesson-${lessonId}`, handleComment);

    // CLEANUP FUNCTION
    return () => {
      window.removeEventListener(`lesson-${lessonId}`, handleComment);
    };
  }, [lessonId]);

  return (
    <div className="App" style={{ padding: 32 }}>

      {/* Nút đóng/mở nội dung để demo Mounted/Unmounted */}
      <button onClick={() => setShowContent(!showContent)}>
        {showContent ? "Hide Content" : "Show Content"}
      </button>

      {showContent && (
        <div>
          {/* Tabs điều hướng: Mỗi tab tương ứng với một loại dữ liệu (posts, comments, albums) */}
          <div>
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setType(tab)}
                style={
                  tab === type
                    ? {
                      margin: 8,
                      padding: 8,
                      cursor: "pointer",
                      color: "#fff",
                      backgroundColor: "#000",
                    }
                    : {
                      margin: 8,
                      padding: 8,
                      cursor: "pointer",
                      color: "#000",
                      backgroundColor: "#fff",
                    }
                }
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Nút Go to Top: Chỉ hiển thị khi showGoToTop === true (scroll > 200px) */}
          {showGoToTop && (
            <button
              style={{
                position: "fixed",
                bottom: 20,
                right: 20,
                padding: 8,
                cursor: "pointer",
              }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Go to Top
            </button>
          )}

          <div>
            {/* Input tiêu đề: Demo cơ chế Two-way binding và useEffect re-render */}
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Nhập tiêu đề..."
            />
            {/* Hiển thị danh sách dữ liệu lấy từ API */}
            <ul>
              {posts.map((post) => (
                <li key={post.id}>{post.title || post.name}</li>
              ))}
            </ul>
          </div>

          {/* Hiển thị chiều rộng màn hình */}
          <div>
            <h1>{width}</h1>
          </div>

          {/* Đồng hồ đếm ngược */}
          <div>
            <h1>{countdown}</h1>
          </div>

          {/* Bộ đếm */}
          <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>Increase</button>
          </div>

          {/* Upload ảnh */}
          <div>
            <input type="file" onChange={handlePreviewImage} />
            {avatar && <img src={avatar.preview} alt="Preview" width={200} height={200} />}
          </div>

          {/* Dropdown chọn bài học */}
          <div>
            <ul>
              {lessons.map((lesson) => (
                <li
                  key={lesson.id}
                  style={{
                    padding: 8,
                    cursor: "pointer",
                    color: lessonId === lesson.id ? "red" : "#333",
                  }}
                  onClick={() => setLessonId(lesson.id)}>
                  {lesson.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
