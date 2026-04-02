import "./GlobalStyles.css";

function GlobalStyles({ children }) {
  // Component này chỉ dùng để ôm ứng dụng và nhúng file CSS Global vào.
  // Không render thêm bất kì thẻ HTML thừa nào.
  return children;
}

export default GlobalStyles;
