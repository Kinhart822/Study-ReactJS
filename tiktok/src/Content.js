import Paragraph from "./Paragraph";

/**
 * React.memo() -> Higher Order Component (HOC)
 * 
 * 1. memo() kiểm tra các props của component sau mỗi lần re-render.
 * 2. Nếu ít nhất một trong các props thay đổi, nó sẽ cho phép component re-render.
 * 3. Nếu tất cả props giữ nguyên giá trị (so sánh ===), nó sẽ ngăn re-render 
 *    để tối ưu hiệu năng.
 * 
 * Dòng console.log bên dưới giúp chúng ta kiểm tra xem Content có bị 
 * re-render hay không khi state ở App thay đổi.
 */

// function Content({ count }) {
//     console.log("Re-render: Content Component");

//     return (
//         <div style={{ padding: 20, border: '1px solid #ccc', marginTop: 20 }}>
//             <h2 style={{ color: '#ff4757' }}>Content Component (Memoized)</h2>
//             <p>Giá trị count truyền từ cha: <strong>{count}</strong></p>
//             <p>Nếu bạn thay đổi state KHÔNG liên quan đến props này, component này sẽ không re-render.</p>
//         </div>
//     );
// }

/**
 * useCallback Hook
 */
// function Content({ onIncrease }) {
//     console.log("Re-render: Content Component");

//     return (
//         <>
//             {/* Cú pháp Fragment: <></> hoặc <>
//                 Dùng để nhóm các phần tử lại với nhau mà không cần thêm thẻ div bao quanh
//             */}
//             <h2 style={{ color: '#ff4757' }}>Hello World</h2>
//             <button onClick={onIncrease}>Increase</button>
//         </>
//     );
// }

// export default memo(Content);

/**
 * useContext Hook
 */
function Content() {
    return (
        <div>
            <Paragraph />
        </div>
    );
}

export default Content;
