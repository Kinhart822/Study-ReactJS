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

#### ⚙️ Cấu trúc cơ bản

```jsx
import { useState } from "react";

function Component() {
  const [state, setState] = useState(initialValue);
}
```

- **`state`**: Giá trị hiện tại của trạng thái.
- **`setState`**: Hàm dùng để cập nhật giá trị mới cho state.
- **`initialValue`**: Giá trị khởi tạo ban đầu.

#### 💡 Các đặc điểm quan trọng

- **Re-render**: Component sẽ được thực thi lại ngay sau khi hàm `setState` được gọi với một giá trị khác giá trị hiện tại.
- **Initial State chỉ dùng 1 lần**: Giá trị khởi tạo chỉ được nạp vào state trong lần đầu tiên component được **mount**.
- **Thay thế hoàn toàn (Replace)**: Hàm `setState` của Hook sẽ **thay thế hoàn toàn** giá trị cũ bằng giá trị mới.

> [!TIP]
> **Lazy Initialization**: Nếu `initialValue` cần tính toán phức tạp, hãy truyền vào một callback:
> `const [state, setState] = useState(() => complexComputation());`

#### ⚠️ Lưu ý khi cập nhật State

**a. Cập nhật state với Callback (Functional Updates)**
Khi giá trị mới phụ thuộc trực tiếp vào giá trị cũ, hoặc bạn gọi `setState` nhiều lần liên tiếp, hãy sử dụng dạng callback để tránh lỗi **stale state**:

```jsx
const handleIncrease = () => {
  setCounter((prev) => prev + 1);
  setCounter((prev) => prev + 1);
  setCounter((prev) => prev + 1); // Kết quả sẽ là +3 thay vì +1
};
```

**b. Làm việc với Object và Array**
Vì React thay thế hoàn toàn dữ liệu, bạn **phải** dùng Spread Operator (`...`) để bảo toàn các dữ liệu cũ không thay đổi:

```jsx
const [user, setUser] = useState({ name: "John", age: 20 });

const updateAge = () => {
  setUser({
    ...user, // Copy lại toàn bộ info cũ
    age: 21, // Chỉ ghi đè mỗi age
  });
};
```

---

### 2. `One-way / Two-way Binding`

Trong React, cơ chế truyền dữ liệu mặc định là **One-way binding** (ràng buộc một chiều), nhưng chúng ta có thể dễ dàng mô phỏng **Two-way binding** (ràng buộc hai chiều) thông qua sự kết hợp giữa `state` và các sự kiện (`events`).

#### a. One-way Binding (Mặc định)

Dữ liệu chỉ chảy theo một hướng: từ **Code (State)** ra **Giao diện (UI)**. Khi state thay đổi, UI sẽ cập nhật theo, nhưng khi người dùng nhập vào input, state sẽ không tự động thay đổi nếu ta không xử lý.

#### b. Two-way Binding (Mô phỏng)

Dữ liệu ràng buộc cả hai chiều: **State ↔ UI**.

- Khi State thay đổi → Input hiển thị giá trị mới.
- Khi người dùng nhập vào Input → State lập tức cập nhật giá trị mới.

#### c. Các ví dụ thực tế

**1. Ràng buộc với Input Text**

```jsx
const [name, setName] = useState("");

<input
  value={name} // State -> UI
  onChange={(e) => setName(e.target.value)} // UI -> State
/>;
```

**2. Ràng buộc với Radio (Chọn 1)**
Lưu trữ `id` hoặc `value` của mục được chọn vào state. Khi chọn mục mới, ta ghi đè giá trị cũ.

```jsx
const [checked, setChecked] = useState(1); // Mặc định chọn id = 1

{
  courses.map((course) => (
    <div key={course.id}>
      <input
        type="radio"
        checked={checked === course.id}
        onChange={() => setChecked(course.id)}
      />
      {course.name}
    </div>
  ));
}
```

**3. Ràng buộc với Checkbox (Chọn nhiều)**
Sử dụng mảng `[]` để lưu trữ danh sách các `id` được chọn. Cần logic để thêm/xóa `id` khi người dùng tích/bỏ tích.

```jsx
const [selected, setSelected] = useState([]);

const handleCheck = (id) => {
  setSelected((prev) => {
    const isChecked = prev.includes(id);
    if (isChecked) {
      return prev.filter((item) => item !== id); // Bỏ chọn
    } else {
      return [...prev, id]; // Chọn thêm
    }
  });
};

{
  courses.map((course) => (
    <div key={course.id}>
      <input
        type="checkbox"
        checked={selected.includes(course.id)}
        onChange={() => handleCheck(course.id)}
      />
      {course.name}
    </div>
  ));
}
```

**4. Quản lý Form với Object**
Thay vì dùng nhiều `useState` lẻ tẻ cho từng input, ta nên gộp chúng vào một object duy nhất:

```jsx
const [form, setForm] = useState({ name: '', email: '' });

const handleChange = (e) => {
  setForm({
    ...form,
    [e.target.name]: e.target.value
  });
};

<input name="name" value={form.name} onChange={handleChange} />
<input name="email" value={form.email} onChange={handleChange} />
```

### 3. `Mounted / Unmounted`

Trong React, **Mounted** và **Unmounted** là hai trạng thái quan trọng mô tả sự hiện diện của một component trong giao diện người dùng (DOM).

- **Mounted**: Thời điểm một component được React chèn vào cây DOM. Component đã hoàn tất quá trình khởi tạo và hiển thị lên trình duyệt.
- **Unmounted**: Thời điểm một component bị gỡ bỏ khỏi cây DOM. Mọi dữ liệu tạm thời trong state của component đó sẽ bị xóa sạch khỏi bộ nhớ.

##### Cách thực hiện Toggle (Ẩn/Hiện)

Để chuyển đổi giữa trạng thái Mounted và Unmounted, chúng ta thường sử dụng một biến boolean trong `state` kết hợp với toán tử logic `&&`.

```jsx
function Content() {
  return <h1>Nội dung đang hiển thị!</h1>;
}

function App() {
  const [show, setShow] = useState(false);

  return (
    <div style={{ padding: 20 }}>
      {/* Khi click, 'show' sẽ đảo ngược false <-> true */}
      <button onClick={() => setShow(!show)}>Toggle Content</button>

      {/* 
        Nếu show là true -> Content được MOUNTED
        Nếu show là false -> Content bị UNMOUNTED 
      */}
      {show && <Content />}
    </div>
  );
}
```

##### Tại sao cần hiểu Mounted/Unmounted?

Việc nắm vững hai trạng thái này cực kỳ quan trọng khi bắt đầu làm việc với **`useEffect`**, vì ta sẽ cần phải biết khi nào nên "dọn dẹp" (cleanup) các tác vụ như:

- Hủy bỏ các hàm hẹn giờ (`setTimeout`, `setInterval`).
- Ngắt kết nối các API/WebSocket.
- Gỡ bỏ các sự kiện lắng nghe (`addEventListener`) khỏi `window` hoặc `document`.

---

### 4. `useEffect`

`useEffect` là Hook dùng để xử lý các **Side Effects** (tác động phụ) trong component.

#### a. Side Effects là gì?

Là khi một hành động phần mềm làm thay đổi dữ liệu bên ngoài phạm vi của nó. Một số ví dụ phổ biến trong React:

- Cập nhật DOM thủ công (vd: thay đổi `document.title`).
- Gọi API (Fetch data).
- Thiết lập các trình lắng nghe sự kiện (Listen DOM events như scroll, resize).
- Cleanup (Dọn dẹp bộ nhớ, hủy subscription, clear timer).

#### b. Cấu trúc và Quy tắc chung

```javascript
useEffect(callback, [dependencies]);
```

1. **Callback** luôn được gọi sau khi component được render (vừa mount xong hoặc vừa re-render xong).
2. **Cleanup function** (hàm trả về từ callback) sẽ được gọi trước khi component unmount hoặc trước khi lần callback kế tiếp được chạy.

---

#### c. Ba trường hợp sử dụng phổ biến

| Trường hợp       | Cú pháp                       | Đặc điểm                                                     |
| :--------------- | :---------------------------- | :----------------------------------------------------------- |
| **Trường hợp 1** | `useEffect(callback)`         | Chạy callback **mỗi khi** component re-render.               |
| **Trường hợp 2** | `useEffect(callback, [])`     | Chỉ chạy callback **1 lần duy nhất** sau khi mounted.        |
| **Trường hợp 3** | `useEffect(callback, [deps])` | Chạy lại callback mỗi khi **giá trị trong `deps` thay đổi**. |

##### 1. `useEffect(callback)`

- Ít dùng vì nó chạy quá nhiều lần.
- Thường dùng cho các logic cần đồng bộ với UI sau mỗi lần render.

##### 2. `useEffect(callback, [])`

- **Dùng nhiều nhất** để gọi API, khởi tạo dữ liệu.
- Giúp tránh việc gửi request liên tục (Infinite Loop) khi có `setState` bên trong callback.

##### 3. `useEffect(callback, [deps])`

- Dùng khi bạn muốn hành động phụ xảy ra chỉ khi một dữ liệu cụ thể (state hoặc props) thay đổi.

---

#### d. Cơ chế dọn dẹp (Cleanup Function)

Khi bạn dùng `addEventListener` hoặc `setInterval`, bạn **phải** dọn dẹp để tránh rò rỉ bộ nhớ (Memory Leak). **Hàm dọn dẹp sẽ luôn được gọi trước khi component bị gỡ bỏ (unmount) hoặc trước khi lần callback tiếp theo được thực thi.**

```javascript
useEffect(() => {
  const handleScroll = () => {
    console.log(window.scrollY);
  };

  window.addEventListener('scroll', handleScroll);

  // Cleanup function: Tự động chạy khi unmount
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
```

---

#### e. Ví dụ minh họa

1. Nếu bạn gọi `setState` trong `useEffect` mà không có `[]`, nó sẽ gây ra vòng lặp vô tận:

```javascript
// ❌ SAI: Gây Infinite Loop (Request liên tục)
useEffect(() => {
  fetch("https://api.example.com/data")
    .then((res) => res.json())
    .then((data) => setData(data)); // setData gây re-render -> useEffect chạy lại -> fetch lại
});

// ✅ ĐÚNG: Chỉ fetch 1 lần khi mount
useEffect(() => {
  fetch("https://api.example.com/data")
    .then((res) => res.json())
    .then((data) => setData(data));
}, []); // Thêm mảng rỗng để chặn vòng lặp
```

2. Xử lý Timer (setInterval / setTimeout) & Lỗi Stale Closure

Khi làm việc với timer trong `useEffect`, nếu không cẩn thận bạn sẽ gặp lỗi giá trị state bị "cũ" (chỉ lấy giá trị lúc khởi tạo).

- **Cách sai (Bị lỗi Closure)**: Dùng biến state trực tiếp trong `setInterval`.

```javascript
// ❌ Cách sai: Bị lỗi Stale Closure
useEffect(() => {
  const timer = setInterval(() => {
    // 'countdown' ở đây luôn bị gán với giá trị khởi tạo (ví dụ 180)
    // do biến bị "đóng gói" trong closure của lần đầu mount.
    // Kết quả: State chỉ giảm xuống 179 rồi đứng yên mãi ở đó.
    setCountdown(countdown - 1);
  }, 1000);

  return () => clearInterval(timer);
}, []); // Mảng rỗng khiến interval chỉ được tạo 1 lần duy nhất
```

- **Cách đúng**: Sử dụng **callback function** trong hàm setState để luôn lấy được giá trị mới nhất (`prev`).

```javascript
// ✅ Cách làm đúng: Chỉ tạo setInterval 1 lần và dùng callback
useEffect(() => {
  const timer = setInterval(() => {
    // setCountdown nhận vào 1 callback và React sẽ truyền state mới nhất vào 'prev'
    setCountdown((prev) => prev - 1);
  }, 1000);

  return () => clearInterval(timer);
}, []);
```

##### 2. Preview Ảnh (Xử lý Memory Leak với Blob)

Khi tạo link xem trước ảnh bằng `URL.createObjectURL(file)`, trình duyệt sẽ giữ file đó trong bộ nhớ cho đến khi bạn đóng tab hoặc gọi hàm dọn dẹp.

```javascript
useEffect(() => {
  // Cleanup: Xóa file tạm trong bộ nhớ mỗi khi chọn ảnh mới
  // hoặc khi component bị gỡ bỏ.
  return () => {
    avatar && URL.revokeObjectURL(avatar.preview);
  };
}, [avatar]);

const handlePreviewAvatar = (e) => {
  const file = e.target.files[0];
  file.preview = URL.createObjectURL(file); // Tạo link tạm
  setAvatar(file);
};
```

##### 3. Custom Events (Fake Comment / Chat)

Trong các trường hợp cần lắng nghe sự kiện từ bên ngoài hoặc giữa các thành phần không có quan hệ cha-con trực tiếp, ta có thể dùng `window.dispatchEvent`.

```javascript
// Lắng nghe sự kiện "lesson-1"
useEffect(() => {
  const handleComment = (e) => {
    console.log(e.detail); // Lấy dữ liệu gửi kèm
  };

  window.addEventListener("lesson-1", handleComment);

  return () => {
    window.removeEventListener("lesson-1", handleComment);
  };
}, []);
```

---

### 5. `useLayoutEffect`

`useLayoutEffect` có cách dùng tương tự `useEffect`, nhưng nó khác biệt ở **thời điểm thực thi**. Nó được dùng để xử lý các vấn đề về giao diện bị "nháy" (flicker) khi state thay đổi.

#### a. So sánh thứ tự thực hiện

| Đặc điểm        | `useEffect`                       | `useLayoutEffect`              |
| :-------------- | :-------------------------------- | :----------------------------- |
| **Thứ tự**      | Sau khi UI đã render              | Trước khi UI render (Sync)     |
| **Trải nghiệm** | Có thể thấy UI bị nháy giá trị cũ | UI luôn mượt mà, không nháy    |
| **Hiệu năng**   | Tốt hơn (Bất đồng bộ)             | Kém hơn một chút (Chặn render) |

#### b. Luồng hoạt động

**useEffect:**

1. Cập nhật lại state.
2. Cập nhật DOM (mutated).
3. Render lại UI.
4. Gọi cleanup nếu deps thay đổi.
5. Gọi `useEffect` callback.

**useLayoutEffect:**

1. Cập nhật lại state.
2. Cập nhật DOM (mutated).
3. Gọi cleanup nếu deps thay đổi (Sync).
4. Gọi `useLayoutEffect` callback (Sync).
5. Render lại UI.

#### c. Khi nào nên dùng?

- Khi cần tính toán lại kích thước hoặc vị trí của một phần tử DOM ngay khi nó xuất hiện.
- Khi cần sửa đổi giá trị hiển thị mà giá trị đó phụ thuộc vào một state vừa thay đổi (ví dụ: Reset counter về 0 khi vượt quá 10).

```javascript
import { useLayoutEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  useLayoutEffect(() => {
    if (count > 3) {
      setCount(0); // Sẽ không bao giờ thấy số 4 hiển thị trên màn hình
    }
  }, [count]);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}
```

---

### 6. `useRef`

`useRef` trả về một đối tượng ref có thuộc tính `.current` được khởi tạo bằng đối số truyền vào. Giá trị trả về sẽ **tồn tại xuyên suốt vòng đời** của component.

#### a. Đặc điểm quan trọng

1. **Không gây re-render**: Khi bạn thay đổi giá trị của `ref.current`, component sẽ **không** bị render lại (khác hoàn toàn với `useState`).
2. **Lưu tham chiếu**: Thường dùng để lưu các giá trị bên ngoài luồng render (như Timer ID, hoặc giá trị cũ của state).
3. **Truy cập DOM**: Dùng để lấy tham chiếu trực tiếp đến một phần tử HTML.

#### b. Các trường hợp sử dụng

##### 1. Lưu giá trị bền vững (Timer ID)

Nếu bạn lưu `timerId` bằng một biến thường (`let timerId`), khi component re-render, biến đó sẽ bị reset về `undefined`. `useRef` giúp giữ lại giá trị đó.

```javascript
const timerId = useRef();

const handleStart = () => {
  timerId.current = setInterval(() => {
    setCount((prev) => prev - 1);
  }, 1000);
};

const handleStop = () => {
  clearInterval(timerId.current);
};
```

##### 2. Truy cập DOM element

Sử dụng thuộc tính `ref` của React để liên kết với một phần tử.

```javascript
const h1Ref = useRef();

useEffect(() => {
  // Lấy tọa độ, kích thước của thẻ h1 sau khi mount
  const rect = h1Ref.current.getBoundingClientRect();
  console.log(rect);
}, []);

return <h1 ref={h1Ref}>Hello</h1>;
```

##### 3. Lưu giá trị cũ (Previous State)

Vì `useEffect` chạy sau khi render, ta có thể tận dụng nó để lưu lại giá trị của render hiện tại vào ref để dùng cho render kế tiếp.

```javascript
const prevCount = useRef();

useEffect(() => {
  prevCount.current = count;
}, [count]);

console.log("Current:", count, "Previous:", prevCount.current);
```

---

### 7. `React.memo()` (HOC)

`React.memo()` không phải là một Hook, mà là một **Higher Order Component (HOC)**. Nó dùng để bao bọc một component nhằm ngăn chặn việc nó bị re-render không cần thiết khi component cha re-render.

#### a. Cơ chế hoạt động

1. `React.memo()` kiểm tra các **props** của component sau khi component cha re-render.
2. Nếu tất cả các props **giữ nguyên giá trị** (so sánh nông - shallow compare bằng toán tử `===`), nó sẽ bỏ qua việc render lại component này.
3. Nếu có ít nhất một prop **thay đổi giá trị**, component mới thực hiện re-render.

#### b. Khi nào nên dùng?

- Khi component của bạn được render thường xuyên với cùng một tập hợp props.
- Khi component chứa logic xử lý UI phức tạp hoặc nặng nề (nhiều tính toán hoặc DOM elements).
- Khi props nhận vào chủ yếu là các kiểu dữ liệu nguyên thủy (string, number, boolean).

```javascript
import { memo } from "react";

function Content({ count }) {
  console.log("Re-rendered");
  return <h1>{count}</h1>;
}

// Chỉ render lại khi prop 'count' thay đổi
export default memo(Content);
```

#### c. Lưu ý quan trọng

- **Props là Objects/Arrays/Functions**: Vì React so sánh nông, mỗi khi component cha re-render, các objects/arrays/functions được khai báo bên trong cha sẽ được tạo mới (địa chỉ vùng nhớ mới). Điều này khiến `React.memo()` hiểu lầm là props đã thay đổi và vẫn cho phép re-render.
- Để giải quyết vấn đề trên, chúng ta cần kết hợp với `useMemo` hoặc `useCallback` (Xem chi tiết tại [Mục 8 - useCallback](#8-usecallback)).

---

### 8. `useCallback`

`useCallback` là Hook giúp bạn **ghi nhớ (memorize)** một callback function, nhằm tránh việc tạo lại hàm đó một cách không cần thiết sau mỗi lần component re-render.

#### a. Vấn đề cần giải quyết

Trong React, mỗi khi một component re-render, mọi biến và hàm khai báo bên trong nó đều được khởi tạo lại (với địa chỉ vùng nhớ mới).

- Nếu bạn truyền một hàm vào component con đã được bọc bởi `React.memo()`.
- React sẽ so sánh nông (shallow comparison) các props.
- Vì hàm ở mỗi lần render là một tham chiếu mới, `React.memo` sẽ hiểu lầm là prop đã thay đổi -> **Component con vẫn bị re-render vô ích.**

#### b. Cách hoạt động

```javascript
const handleAction = useCallback(() => {
  // Logic xử lý
}, [dependencies]);
```

1. **Callback**: Hàm mà bạn muốn ghi nhớ.
2. **Dependencies**: Mảng các phụ thuộc. Hàm chỉ được tạo mới (cập nhật tham chiếu) khi một trong các giá trị trong mảng này thay đổi.
3. **Trả về**: Trả về chính callback đó nhưng với địa chỉ vùng nhớ được giữ nguyên qua các lần render (nếu deps không đổi).

#### c. Khi nào nên dùng?

- Khi bạn cần truyền các hàm xử lý xuống các **components con** và components đó đã được tối ưu bằng `React.memo`.
- Giúp giảm thiểu việc re-render các components con phức tạp, từ đó tối ưu hiệu năng toàn cục.

#### d. Ví dụ minh họa

```jsx
// App.js (Cha)
const handleIncrease = useCallback(() => {
    setCount(prev => prev + 1);
}, []); // [] giúp hàm luôn giữ nguyên tham chiếu

return <Content onIncrease={handleIncrease} />;

// Content.js (Con)
export default memo(Content); // Content chỉ re-render khi onIncrease thực sự thay đổi
```

---

### 9. `useMemo`

`useMemo` là Hook giúp bạn **ghi nhớ (memoize)** một giá trị được tính toán phức tạp, nhằm tránh việc tính toán lại giá trị đó sau mỗi lần component re-render nếu dữ liệu đầu vào không thay đổi.

#### a. So sánh `useCallback` vs `useMemo`

| Đặc điểm | `useCallback` | `useMemo` |
| :--- | :--- | :--- |
| **Mục đích** | Ghi nhớ một **tham chiếu hàm**. | Ghi nhớ một **giá trị** (kết quả của hàm). |
| **Trả về** | Chính cái hàm đó. | Kết quả sau khi thực thi hàm. |
| **Khi nào dùng** | Khi truyền hàm xuống component con (để tránh re-render con). | Khi có logic tính toán nặng (vòng lặp, xử lý mảng lớn...). |

#### b. Cách hoạt động

```javascript
const memoizedValue = useMemo(() => {
    // Logic tính toán phức tạp
    return result;
}, [dependencies]);
```

1. **Callback**: Hàm chứa logic tính toán. Giá trị trả về của hàm này chính là giá trị mà `useMemo` sẽ lưu giữ.
2. **Dependencies**: Mảng phụ thuộc. Logic tính toán chỉ chạy lại khi một trong các giá trị trong mảng này thay đổi.

#### c. Ví dụ minh họa

Sử dụng `useMemo` để tính tổng tiền trong giỏ hàng. Nếu người dùng chỉ thay đổi tên khách hàng (làm component re-render) mà không thay đổi danh sách sản phẩm, React sẽ không cần tính toán lại tổng tiền.

```jsx
const total = useMemo(() => {
    console.log('Calculating...');
    return products.reduce((acc, current) => acc + current.price, 0);
}, [products]); // Chỉ tính lại khi 'products' thay đổi
```

---
