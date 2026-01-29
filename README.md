# Study ReactJS

Chào mừng bạn đến với kho lưu trữ kiến thức **Study ReactJS**. Đây là nơi tổng hợp lộ trình học tập từ những khái niệm cơ bản nhất của React (Fundamentals) cho đến việc tự cấu hình môi trường phát triển (Webpack) và sử dụng các công cụ hiện đại (CRA, Vite).

## 📚 Mục lục

1. [Phần 1: React Fundamentals (Cơ bản)](#phần-1-react-fundamentals-cơ-bản)
2. [Phần 2: React + Webpack (Tự cấu hình)](#phần-2-react--webpack-tự-cấu-hình)
3. [Phần 3: Create React App & Modern Tools](#phần-3-create-react-app--modern-tools)

---

## Phần 1: React Fundamentals (Cơ bản)

Thư mục: [`lessons/`](./lessons)

Ở phần này, chúng ta tìm hiểu cách React hoạt động "dưới gầm máy" bằng cách nhúng trực tiếp React vào tệp HTML thông qua CDN, chưa cần cài đặt môi trường phức tạp.

### Các bài học chính:

1.  **DOM vs React Element**
    - Tệp: [`react.html`](./lessons/react.html)
    - Sự khác biệt giữa DOM thật (Browser) và React Element (Virtual DOM).
    - Cách React render UI ra trình duyệt.

2.  **JSX (JavaScript XML)**
    - Tệp: [`react_jsx.html`](./lessons/react_jsx.html)
    - Cú pháp JSX giúp viết HTML trong JavaScript dễ dàng hơn.
    - So sánh JSX với `React.createElement`.
    - Sử dụng `React.Fragment`.

3.  **Components, Props & Elements**
    - Tệp: [`react_type_element.html`](./lessons/react_type_element.html), [`react_prop.html`](./lessons/react_prop.html)
    - **Element**: Là các đối tượng nhỏ nhất cấu thành ứng dụng.
    - **Component**: Cách chia nhỏ UI thành các phần có thể tái sử dụng.
    - **Props**: Cơ chế truyền dữ liệu từ cha xuống con.

4.  **React DOM & Thực hành**
    - Tệp: [`react_dom.html`](./lessons/react_dom.html)
    - Các bài tập nhỏ trong [`react_prop_exercise.html`](./lessons/react_prop_exercise.html).

---

## Phần 2: React + Webpack (Tự cấu hình)

Thư mục: [`react-webpack/`](./react-webpack)

Sau khi hiểu cơ bản, chúng ta chuyển sang môi trường phát triển thực tế. Thay vì dùng CDN, ta sẽ cài đặt các thư viện qua `npm` và đóng gói mã nguồn bằng `webpack`.

### 1. Khởi tạo dự án

```bash
npm init -y          # Tạo file package.json
npm install react react-dom # Cài đặt thư viện React
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
module.exports = {
  entry: "./src/index.js", // Điểm bắt đầu
  output: {
    filename: "bundle.js", // File đầu ra
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ["babel-loader"], // Dùng Babel cho file JS
      },
    ],
  },
  // ...
};
```

---

## Phần 3: Create React App & Modern Tools

Thư mục: [`tiktok/`](./tiktok)

Việc cấu hình Webpack thủ công rất tốt để hiểu bản chất, nhưng tốn thời gian. **Create React App (CRA)** là công cụ giúp ta có ngay một dự án React hoàn chỉnh chỉ với 1 lệnh.

### 1. Khởi tạo

```bash
npx create-react-app my-app
# Hoặc tạo trong thư mục hiện tại:
npx create-react-app .
```

### 2. Cấu trúc dự án CRA

Dự án trong thư mục `tiktok/` là một ví dụ về CRA:

- **`src/index.js`**: Điểm khởi chạy ứng dụng (Render App component vào DOM).
- **`public/`**: Chứa assets tĩnh.
- **`node_modules`**: Được cài đặt tự động, chứa sẵn Webpack/Babel đã được cấu hình ẩn.

### 3. Scripts (`package.json`)

- `npm start`: Chạy server development (Localhost:3000).
- `npm run build`: Đóng gói ứng dụng ra thư mục `build/` (Production ready).
- `npm run eject`: "Bắn" cấu hình Webpack ra ngoài để tùy chỉnh (Không thể hoàn tác).

### 4. So sánh NPM - NPX - YARN

Để hiểu rõ hơn, hãy tưởng tượng bạn cần dùng một cái khoan (tool).

#### **NPM (Node Package Manager)**

- **Là gì:** Công cụ mặc định đi kèm với NodeJS để quản lý các gói (thư viện).
- **Nhiệm vụ:** Tải thư viện về máy (store local hoặc global), lưu vào `node_modules`.
- **Cách dùng:** Bạn phải mua (install) cái khoan về nhà, cất vào kho rồi mới lôi ra dùng.
- **Ví dụ:**
  ```bash
  npm install create-react-app --global  # Cài đặt bộ tool vào máy
  create-react-app my-app                # Sau đó mới dùng được lệnh này
  ```
- **Khi nào dùng:** Khi muốn cài đặt các thư viện để sử dụng lâu dài cho dự án (ví dụ: `react`, `axios`, `lodash`).

#### **NPX (Node Package Execute)**

- **Là gì:** Công cụ đi kèm với NPM (từ phiên bản 5.2+), giúp chạy trực tiếp các package.
- **Nhiệm vụ:** Tải bộ code về thư mục tạm, chạy nó, rồi xóa đi ngay lập tức. Không tốn dung lượng ổ cứng lâu dài.
- **Cách dùng:** Bạn thuê cái khoan, khoan xong trả luôn, không cần mua về cất kho.
- **Ví dụ:**
  ```bash
  npx create-react-app my-app
  ```
  _Dòng lệnh này làm 3 việc:_
  1. Tải `create-react-app` bản mới nhất về.
  2. Chạy lệnh tạo project.
  3. Xóa `create-react-app` đi.
- **Khi nào dùng:**
  - Khi cần chạy các công cụ CLI (Command Line Interface) chỉ dùng 1 lần (như khởi tạo dự án).
  - Khi muốn thử một thư viện mà không muốn cài rác máy.
  - Luôn đảm bảo dùng phiên bản mới nhất của tool đó.

#### **YARN**

- **Là gì:** Là một trình quản lý gói (Package Manager) giống NPM, được Facebook tạo ra để khắc phục các nhược điểm của NPM thời xưa (chậm, lỗi bảo mật).
- **Đặc điểm:**
  - Cài đặt gói siêu tốc (do cache tốt và tải song song).
  - Tính ổn định cao (file `yarn.lock` chặt chẽ hơn `package-lock.json` ngày xưa).
- **Cách dùng:** Tương tự NPM.
  - NPM: `npm install react`
  - YARN: `yarn add react`
- **Khi nào dùng:**
  - Khi dự án lớn, cần tốc độ cài đặt nhanh.
  - Khi team hoặc công ty quy định sử dụng Yarn.
  - _Lưu ý:_ Hiện tại NPM đã cải tiến rất nhiều nên khoảng cách giữa NPM và Yarn không còn quá lớn.

### 💡 Lưu ý về Modern React

Hiện tại `Create React App` đã không còn được khuyến nghị cho các dự án mới bởi đội ngũ React. Thay vào đó, cộng đồng chuyển sang sử dụng **Vite** vì tốc độ vượt trội.

**Khởi tạo với Vite:**

```bash
npm create vite@latest my-app -- --template react
```

---

_Happy Coding!_ 🚀
