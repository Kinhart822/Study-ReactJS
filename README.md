# Study ReactJS

Kho lưu trữ kiến thức cơ bản tổng hợp về **ReactJS**.

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Webpack](https://img.shields.io/badge/Webpack-8DD6F9?style=for-the-badge&logo=webpack&logoColor=black)](https://webpack.js.org/)
[![NodeJS](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)

---

## 📚 Mục lục

1. [Phần 1: ReactJS là gì?](#-phần-1-reactjs-là-gì)
2. [Phần 2: React Fundamentals (Cơ bản)](#-phần-2-react-fundamentals-cơ-bản)
3. [Phần 3: React + Webpack (Tự cấu hình)](#-phần-3-react--webpack-tự-cấu-hình)
4. [Phần 4: Create React App & Modern Tools](#-phần-4-create-react-app--modern-tools)
5. [Phần 5: React Hooks](#-phần-5-react-hooks)

---

## 📘 Phần 1: ReactJS là gì?

### 📒 Khái niệm

React là một thư viện JavaScript mã nguồn mở được phát triển bởi Meta, chuyên dùng để xây dựng giao diện người dùng (UI) hiện đại, hoặc còn gọi là **Single Page Application (SPA)**.

Thư viện này tập trung vào việc phát triển các thành phần (components) có khả năng tái sử dụng cao, giúp tối ưu hóa quy trình phát triển ứng dụng web, hoạt động dựa trên cơ chế **CSR (Client-Side Rendering)**.

Quy trình hoạt động của React xoay quanh 4 khái niệm cốt lõi:

- **Component-Based Architecture**:
  - UI được chia nhỏ thành các phần độc lập (components).
  - Mỗi phần tự quản lý trạng thái (state) và logic riêng.
  - Giúp mã nguồn dễ bảo trì và tái sử dụng linh hoạt trong dự án.
- **Virtual DOM (DOM ảo)**:
  - Tạo ra bản sao (copy) của DOM thật trong bộ nhớ.
  - **Diffing**: So sánh sự khác biệt khi dữ liệu/state thay đổi.
  - **Reconciliation**: Chỉ cập nhật những phần thực sự thay đổi lên trình duyệt.
  - → Giúp tối ưu hiệu suất render vượt trội so với thao tác DOM truyền thống.
- **Declarative UI**:
  - Lập trình theo phong cách "khai báo" (mô tả kết quả muốn có).
  - Chỉ cần mô tả giao diện trông như thế nào ở từng trạng thái.
  - React tự xử lý việc cập nhật DOM để khớp với trạng thái đó.
- **JSX (JavaScript XML)**:
  - Cú pháp đặc biệt cho phép viết HTML trực tiếp trong tệp JavaScript.
  - Giúp code UI trở nên trực quan, dễ đọc và dễ bảo trì.
  ```jsx
  const App = () => {
    return <h1>Hello World</h1>;
  };
  ```

### 🌐 CSR và SSR

Tùy vào nhu cầu cụ thể của dự án, developer có thể lựa chọn giữa hai cơ chế render chính:

#### 1. CSR (Client-Side Rendering)

Trình duyệt tải một file HTML trống cùng với các file JavaScript, sau đó nội dung mới bắt đầu được render tại máy khách.

- ✅ **Ưu điểm**:
  - Phù hợp với SPA, Dashboard hoặc ứng dụng đòi hỏi tính tương tác cao.
  - Trải nghiệm mượt mà, chuyển trang nhanh sau lần load đầu tiên.
- ❌ **Nhược điểm**:
  - Tốc độ tải trang đầu tiên thường bị chậm do file JS nặng.
  - SEO gặp khó khăn vì bot tìm kiếm khó đọc được nội dung render bằng JS.

#### 2. SSR (Server-Side Rendering)

Máy chủ sẽ xử lý dữ liệu và trả về HTML đã có đầy đủ nội dung hoàn chỉnh cho trình duyệt.

- ✅ **Ưu điểm**:
  - **SEO cực tốt**: Google Bot dễ dàng lập chỉ mục nội dung trang web.
  - Tốc độ hiển thị nội dung ngay lập tức trong lần truy cập đầu tiên.
- ❌ **Nhược điểm**:
  - Cấu hình hệ thống phức tạp và đòi hỏi Server cấu hình đủ mạnh.
  - Gây áp lực xử lý lớn lên phía backend khi có nhiều lượt truy cập đồng thời.

### ❓ Vì sao nên sử dụng React?

Việc lựa chọn React mang lại nhiều lợi ích thiết thực nhờ khả năng **tái sử dụng component** cực cao, **hiệu suất tối ưu** vượt trội và một **hệ sinh thái khổng lồ** (Next.js, React Native, Redux). Bên cạnh đó, với **cộng đồng hỗ trợ lớn nhất thế giới**, bạn sẽ luôn dễ dàng tìm thấy tài liệu, giải pháp và các thư viện bổ trợ cho mọi yêu cầu phát triển phức tạp.

## 📙 Phần 2: React Fundamentals (Cơ bản)

**Thư mục:** [`lessons/`](./lessons)

Ở phần này sẽ tìm hiểu cách React hoạt động cơ bản trước khi đi sâu vào chi tiết cài đặt dự án, bằng cách nhúng trực tiếp React vào tệp HTML thông qua CDN, chưa cần cài đặt môi trường phức tạp.

### Các bài học chính:

1. **DOM vs React Element**
   - Tệp: [`react.html`](./lessons/react.html), [`react_dom.html`](./lessons/react_dom.html)
   - Sự khác biệt giữa DOM thật (Browser) và React Element (Virtual DOM).
   - Cách React render UI ra trình duyệt.

2. **JSX (JavaScript XML)**
   - Tệp: [`react_jsx.html`](./lessons/react_jsx.html)
   - Cú pháp JSX giúp viết HTML trong JavaScript dễ dàng hơn.
   - So sánh JSX với `React.createElement`.
   - Sử dụng `React.Fragment`.

3. **Components, Props, Elements & Type**
   - Tệp: [`react_type_element.html`](./lessons/react_type_element.html), [`react_prop.html`](./lessons/react_prop.html)
   - **Element**: Là các đối tượng nhỏ nhất cấu thành ứng dụng (vd: `const element = <h1>Hello</h1>`).
   - **Component**: Cách chia nhỏ UI thành các phần độc lập, có thể tái sử dụng.
   - **Props**: "Properties" - cơ chế truyền dữ liệu từ component cha xuống component con.

#### 💡 Functional Components vs Class Components

**a. Khái niệm:**

- **Functional Component:** Là một hàm JavaScript nhận `props` và trả về JSX. Kể từ khi có **Hooks**, đây là cách viết chuẩn và hiện đại nhất.
- **Class Component:** Sử dụng cú pháp Class của ES6 để định nghĩa component. Nó quản lý trạng thái (state) và vòng đời (lifecycle) thông qua các phương thức của class.

**b. Ví dụ:**

- **Functional Component (Khuyên dùng):**

```jsx
function Welcome(props) {
  return <h1>Chào mừng {props.name}!</h1>;
}
```

- **Class Component:**

```jsx
class Welcome extends React.Component {
  render() {
    return <h1>Chào mừng {this.props.name}!</h1>;
  }
}
```

**c. So sánh chi tiết:**

| Đặc điểm               | Functional Component                     | Class Component                               |
| :--------------------- | :--------------------------------------- | :-------------------------------------------- |
| **Cú pháp**            | Đơn giản, ngắn gọn                       | Phức tạp, nhiều "boilerplate" code            |
| **State (Trạng thái)** | Sử dụng `useState` Hook                  | Sử dụng `this.state` & `this.setState`        |
| **Lifecycle**          | Sử dụng `useEffect` Hook                 | `componentDidMount`, `componentDidUpdate`,... |
| **Hiệu năng**          | Tốt hơn (không tốn chi phí tạo instance) | Kém hơn một chút                              |

**d. Khi nào dùng cái nào?**

- **Luôn ưu tiên Functional Components + Hooks** cho mọi dự án mới. Code sẽ sạch hơn, dễ test và dễ tái sử dụng logic (Custom Hooks).
- **Chỉ dùng Class Components khi:**
  - Bảo trì các dự án cũ (Legacy code).
  - Cần sử dụng các tính năng mà Hooks chưa hỗ trợ (hiếm), ví dụ: **Error Boundaries** (`componentDidCatch`).

---

## 🛠️ Phần 3: React + Webpack (Tự cấu hình)

**Thư mục:** [`react-webpack/`](./react-webpack)

Sau khi hiểu cơ bản, chúng ta chuyển sang môi trường phát triển thực tế. Thay vì dùng CDN, ta sẽ cài đặt các thư viện qua `npm` và đóng gói mã nguồn bằng `webpack`.

### 1. Khởi tạo dự án

```bash
npm init -y                  # Tạo file package.json
npm install react react-dom  # Cài đặt thư viện React
```

### 2. Cấu trúc thư mục chuẩn

- `package.json`: Quản lý dependencies và scripts.
- `src/`: Chứa mã nguồn (index.js, components...).
- `public/`: Chứa index.html template.
- `build/`: Chứa code đã được đóng gói (output).

### 3. Webpack & Babel

Để trình duyệt hiểu được JSX và ES6+, ta cần các công cụ chuyển đổi:

- **Webpack**: Module bundler - gom tất cả file JS, CSS, ảnh... thành 1 file duy nhất (`bundle.js`).
- **Babel**: Trình biên dịch - chuyển đổi JSX/ES6 về Javascript thường (ES5) để chạy được trên mọi trình duyệt.
  - `babel-loader`: Cầu nối giữa Webpack và Babel.
  - `@babel/preset-react`: Chuyển đổi JSX.
  - `@babel/preset-env`: Chuyển đổi ES6+.

**Cấu hình Webpack cơ bản (`webpack.config.js`):**

```javascript
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js", // Điểm bắt đầu (Entry point) để Webpack bắt đầu thu thập các dependency
  output: {
    path: path.join(__dirname, "/build"), // Thư mục chứa các tệp sau khi đã được đóng gói
    filename: "bundle.js", // Tên tệp đầu ra duy nhất
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Tìm các file có đuôi .js
        exclude: /node_modules/, // Bỏ qua thư mục thư viện để tối ưu tốc độ build
        use: ["babel-loader"], // Sử dụng Babel để biên dịch JS (ES6+, JSX)
      },
      {
        test: /\.css$/, // Tìm các file .css
        use: ["style-loader", "css-loader"], // Loaders để xử lý và nhúng CSS vào HTML
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html", // Tự động tạo file HTML và nhúng bundle.js vào đó
    }),
  ],
};
```

#### 📌 Giải chi tiết các thành phần:

1.  **Entry**: Là "cửa ngõ" của dự án. Webpack sẽ bắt đầu từ file này để "lần" theo các file `import` khác, từ đó tạo ra một sơ đồ phụ thuộc (**Dependency Graph**).

    _Ví dụ về luồng phụ thuộc:_

    ```text
    index.js
    └── App.js
         └── Header.js
               └── logo.png
    ```

2.  **Output**: Khai báo nơi Webpack sẽ xuất (export) tệp đã đóng gói. Thông thường ta dùng file `bundle.js` và lưu vào thư mục `build/` hoặc `dist/`.
3.  **Module (Loaders)**:
    - Webpack mặc định chỉ hiểu được JavaScript và JSON.
    - **Loaders** giúp Webpack hiểu và xử lý các loại file khác (CSS, Images, JSX, v.v.) và chuyển đổi chúng thành các module hợp lệ.
4.  **Plugins**:
    - Dùng để thực hiện các tác vụ rộng hơn, can thiệp vào toàn bô quy trình đóng gói.
    - Ví dụ: Tối ưu hóa bundle, quản lý tệp tĩnh, inject script vào file HTML template.

#### 💡 Phân biệt Loader và Plugin:

| Đặc điểm      | **Loader**                                                 | **Plugin**                                                       |
| :------------ | :--------------------------------------------------------- | :--------------------------------------------------------------- |
| **Phạm vi**   | Hoạt động ở cấp độ **từng tệp đơn lẻ** khi file được load. | Hoạt động ở cấp độ **toàn bộ quy trình build**.                  |
| **Nhiệm vụ**  | Chuyển đổi (Transform) file từ dạng này sang dạng khác.    | Thực hiện các tác vụ phức tạp (Tối ưu, Nén, Quản lý tài nguyên). |
| **Cách dùng** | Khai báo trong mục `module.rules`.                         | Khai báo trong mục `plugins` và khởi tạo bằng `new`.             |
| **Ví dụ**     | `babel-loader`, `css-loader`, `file-loader`.               | `HtmlWebpackPlugin`, `MiniCssExtractPlugin`.                     |

---

## 🚀 Phần 4: Create React App & Modern Tools

**Thư mục:** [`tiktok/`](./tiktok)

Việc cấu hình Webpack thủ công rất tốt để hiểu bản chất, nhưng tốn thời gian. **Create React App (CRA)** là công cụ giúp ta có ngay một dự án React hoàn chỉnh chỉ với 1 lệnh.

### 1. Khởi tạo

```bash
npx create-react-app my-app
# Hoặc tạo trong thư mục hiện tại:
npx create-react-app .
```

#### 💡 Lưu ý về Modern React

Hiện tại `Create React App` đã không còn được khuyến nghị. Thay vào đó, hãy sử dụng **Vite**:

```bash
npm create vite@latest my-app -- --template react
```

CRA tự động thiết lập Webpack, Babel, và các cấu hình cơ bản.

#### ⚡ Vite là gì? Khác gì so với Webpack?

**Vite** là thế hệ công cụ build (build tool) tiếp theo, được thiết kế để giải quyết các vấn đề về hiệu suất mà các công cụ cũ như Webpack thường gặp phải khi dự án trở nên lớn.

**Sự khác biệt cốt lõi:**

1.  **Cơ chế Dev Server**:
    - **Webpack**: Phải đóng gói (Bundle) toàn bộ mã nguồn của dự án trước khi có thể khởi động server. Dự án càng lớn, thời gian chờ càng lâu.
    - **Vite**: Tận dụng các trình duyệt hiện đại hỗ trợ **Native ESM**. Nó khởi động server ngay lập tức và chỉ "phục vụ" các tệp tin mà trình duyệt yêu cầu tại thời điểm đó.
2.  **Hot Module Replacement (HMR)**:
    - Khi bạn thay đổi code, Vite chỉ cập nhật đúng module đó mà không cần tính toán lại toàn bộ bundle, giúp việc phản hồi gần như tức thì bất kể kích thước dự án.

**Bảng so sánh chi tiết:**

| Đặc điểm             | **Webpack**                          | **Vite**                                     |
| :------------------- | :----------------------------------- | :------------------------------------------- |
| **Triết lý**         | Bundler-based (Gom tất cả rồi chạy). | Native ESM-based (Chạy rồi mới lấy khi cần). |
| **Tốc độ Start**     | Chậm (Phụ thuộc size dự án).         | Cực nhanh (Gần như tức thì).                 |
| **Công cụ đóng gói** | Webpack Core.                        | Rollup (Tối ưu hơn cho Production).          |
| **Cấu hình**         | Phức tạp, nhiều boilerplate.         | Đơn giản, cấu hình mặc định đã rất tốt.      |

**Ví dụ lệnh khởi tạo Vite:**

```bash
npm create vite@latest my-app --template react
```

**Lợi ích khi dùng Vite:**

- Khởi động dự án trong tích tắc.
- Trải nghiệm lập trình (DX) mượt mà, không giật lag khi lưu file.
- Code đầu ra (build) sạch và nhẹ hơn.

### 2. Cấu trúc dự án CRA

Dự án trong thư mục `tiktok/` là một ví dụ về CRA:

```text
tiktok/
├── node_modules/     # Thư viện cài đặt
├── public/           # Tệp tĩnh (index.html, favicon, v.v.)
├── src/              # Code chính của ứng dụng
│   ├── App.js        # Component gốc
│   └── index.js      # Điểm khởi chạy ứng dụng
├── package.json      # Danh sách dependency
└── vite.config.js    # (Nếu dùng Vite)
```

### 3. Scripts (`package.json`)

- `npm start`: Chạy server development (Localhost:3000).
- `npm run build`: Đóng gói ứng dụng ra thư mục `build/` (Production ready).
- `npm run eject`: "Bắn" cấu hình Webpack ra ngoài để tùy chỉnh (Không thể hoàn tác).

### 4. So sánh NPM - NPX - YARN

Để dễ hình dung, hãy tưởng tượng bạn đang cần một chiếc **máy khoan** để sửa nhà:

#### **📦 NPM (Node Package Manager)**

- **Là gì**: Trình quản lý gói mặc định đi kèm với Node.js.
- **Nhiệm vụ**: Tải và quản lý các thư viện (dependencies) cho dự án của bạn (lưu vào `node_modules`).
- **Ví dụ**: Bạn **mua** một chiếc máy khoan, mang về nhà cất vào kho để dùng lâu dài.
- **Khi nào dùng**:
  - Khi cần cài đặt các thư viện để sử dụng trong code (như `react`, `lodash`).
  - Khi cần quản lý các scripts trong dự án (ví dụ: `npm start`, `npm build`).

#### **⚡ NPX (Node Package Execute)**

- **Là gì**: Một công cụ đi kèm với NPM (phiên bản 5.2+) dùng để thực thi các gói mà không cần cài đặt cố định.
- **Nhiệm vụ**: Tải package về từ npm (có thể lưu trong cache), chạy trực tiếp mà không cần cài đặt vào project hay global, có thể dùng lại được do được lưu tạm trong cache.
- **Ví dụ**: Bạn đi **thuê** một chiếc máy khoan, dùng xong rồi trả ngay, không làm chật kho nhà bạn.
- **Khi nào dùng**:
  - Khi cần chạy các công cụ CLI chỉ dùng một lần (ví dụ: `npx create-react-app`, `npx vite`).
  - Khi muốn dùng phiên bản mới nhất của một công cụ mà không muốn cập nhật bản global trong máy.

#### **🧶 YARN**

- **Là gì**: Một trình quản lý gói thay thế cho NPM, được Facebook phát triển để tối ưu tốc độ và tính ổn định.
- **Nhiệm vụ**: Hoàn toàn tương tự NPM nhưng có cơ chế lưu bộ nhớ đệm (cache) và xử lý tiến trình song song tốt hơn.
- **Ví dụ**: Bạn chọn mua máy khoan ở một **cửa hàng khác** hiện đại hơn, phục vụ nhanh hơn nhưng vẫn là chiếc máy khoan đó.
- **Khi nào dùng**:
  - Khi làm việc trong các dự án lớn yêu cầu tốc độ cài đặt nhanh.
  - Khi dự án đã có sẵn file `yarn.lock` (do đồng nghiệp hoặc team quy định).

---

## ⚓ Phần 5: React Hooks

**Hooks** là những hàm đặc biệt được đưa vào từ phiên bản React 16.8, cho phép bạn sử dụng state và các tính năng khác của React mà không cần viết Class.

### 📒 Khái niệm chung
1.  **Chỉ áp dụng cho Functional Component**: Hooks không hoạt động bên trong Class Component.
2.  **Sạch sẽ và tối giản**: Giúp logic của component trở nên tập trung, không bị chia nhỏ ra các phương thức vòng đời (lifecycle) phức tạp.
3.  **Dễ tái sử dụng**: Bạn có thể tự tạo Custom Hooks để chia sẻ logic giữa các component một cách linh hoạt.
4.  **Quy tắc sử dụng**:
    - Luôn gọi Hooks ở cấp cao nhất của hàm (không gọi trong vòng lặp, điều kiện hoặc hàm lồng nhau).
    - Chỉ gọi Hooks từ các React Functional Components hoặc Custom Hooks.

---

### 1. `useState`

`useState` được dùng khi bạn muốn một giá trị (dữ liệu) thay đổi thì giao diện sẽ tự động được cập nhật (re-render) để phản ánh sự thay đổi đó.

#### ⚙️ Cấu trúc cơ bản:
```jsx
import { useState } from "react";

function Component() {
  const [state, setState] = useState(initialValue);
}
```
-   `state`: Giá trị hiện tại của trạng thái.
-   `setState`: Hàm dùng để cập nhật giá trị mới cho `state`.
-   `initialValue`: Giá trị khởi tạo ban đầu.

#### 💡 Các đặc điểm quan trọng:

1.  **Re-render**: Component sẽ được thực thi lại (re-render) ngay sau khi hàm `setState` được gọi với một giá trị khác giá trị hiện tại.
2.  **Initial State chỉ dùng 1 lần**: Giá trị khởi tạo chỉ được nạp vào `state` trong lần đầu tiên component được mount. Trong các lần re-render sau, React sẽ lấy giá trị đang lưu trong bộ nhớ.
3.  **Thay thế hoàn toàn (Replace)**: Khác với `this.setState` trong Class Component (merge state), hàm `setState` của Hook sẽ **thay thế hoàn toàn** giá trị cũ bằng giá trị mới.

---

#### 🚀 Các trường hợp sử dụng nâng cao:

**a. Callback cho Initial State (Lazy Initialization)**
Nếu giá trị khởi tạo cần một phép tính phức tạp hoặc tốn thời gian, bạn nên truyền vào một callback để React chỉ thực thi nó một lần duy nhất:
```jsx
const [state, setState] = useState(() => {
    // Tính toán phức tạp ở đây...
    return result;
});
```

**b. Callback cho setState (Functional Updates)**
Khi bạn muốn cập nhật state nhiều lần liên tiếp hoặc giá trị mới phụ thuộc trực tiếp vào giá trị cũ, hãy sử dụng dạng callback:

*Ví dụ lỗi (Tăng 1 thay vì 3):*
```jsx
const handleIncrease = () => {
    setCounter(counter + 1);
    setCounter(counter + 1); 
    setCounter(counter + 1); // Cả 3 dòng đều dùng chung giá trị counter cũ tại thời điểm render đó.
};
```

*Ví dụ đúng (Tăng 3):*
```jsx
const handleIncrease = () => {
    setCounter(prev => prev + 1);
    setCounter(prev => prev + 1);
    setCounter(prev => prev + 1); // Mỗi dòng đều lấy giá trị mới nhất từ `prev`.
};
```

**c. Làm việc với Object và Array**
Vì `useState` thay thế hoàn toàn dữ liệu, khi cập nhật Object hoặc Array, bạn **phải sử dụng Spread Operator (`...`)** để giữ lại các giá trị cũ:
```jsx
const [user, setUser] = useState({ name: 'John', age: 20 });

const updateAge = () => {
    setUser({
        ...user, // Copy lại toàn bộ info cũ
        age: 21  // Chỉ ghi đè mỗi age
    });
};
```

---

_Happy Coding!_ 🚀
