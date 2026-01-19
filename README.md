# Study ReactJS

## react.html

1. DOM thuần
2. React element
3. Render React → DOM thật
4. So sánh DOM vs React element

## react_jsx.html

1. JSX
2. JSX vs React.createElement
3. React.Fragment

## react_type_element.html & react_type_element_exercise.html

1. Type element
2. Props element
3. Children element
4. Exercise

## react_prop.html & react_prop_exercise.html

1. Props
2. Exercise

## react_dom.html

1. Basic JSX & Components
2. Props in JSX

## React + Webpack

**Init project**

```bash
npm init -y
```

**Cấu trúc tệp tin hệ thống:**

- **`package.json`**: file chứa thông tin dự án như: tên dự án, phiên bản, mô tả, các thư viện được sử dụng trong dự án, v.v

- **`package-lock.json`**: file chứa thông tin chi tiết về các gói đã cài đặt, giúp đảm bảo rằng khi người khác cài đặt dự án, họ sẽ nhận được cùng một cấu hình.

- **`node_modules`**: Nơi lưu trữ mã nguồn của tất cả các gói dependencies.

**Install dependencies:**

```bash
npm install ... --save-dev
```

```bash
npm install ... --save
```

- **`--save-dev`**: Đánh dấu 2 thư viện này chỉ dùng trong khi phát triển, khi dự án đẩy lên production sẽ không có các thư viện này.

- **`--save`**: Đánh dấu 2 thư viện này dùng trong cả khi phát triển và khi dự án đẩy lên production. (ừ phiên bản NPM 5 trở đi thì --save được thêm vào mặc định)

**Dependencies:**

- **`babel-core`**: Chuyển đổi ES6 về ES5

- **`babel-loader`**: Cho phép chuyển các files Javascript sử dụng Babel & Webpack

- **`babel-preset-env`**: Cài đặt sẵn giúp bạn sử dụng Javascript mới nhất trên nhiều môi trường khác nhau (nhiều trình duyệt khác nhau). Gói này đơn giản là support truyển đổi ES6, ES7, ES8, ES... về ES5.

- **`babel-preset-react`**: Hỗ trợ chuyển đổi JSX về Javascript

**Khái niệm webpack:**

- **`webpack`**: là một “module bundler”

Nó gom, phân tích và đóng gói toàn bộ code (JS, CSS, ảnh, font, …)
thành 1 hoặc vài file để trình duyệt chạy được.

- **📦 Bundler = đóng gói**

- **`webpack.config.js`**: file cấu hình webpack

- **`html-webpack-plugin`**: Tự động import file bundle.js vào index.html

- **`File .babelrc`**: dùng để cấu hình cho thư viện Babel.
