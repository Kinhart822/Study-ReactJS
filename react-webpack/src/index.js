import React from 'react';
import { createRoot } from 'react-dom/client'; // nạp thư viện react-dom/client (React 18+)

// Tạo component App
function App() {
    return (
        <div>
            <h1>Xin chào anh em F8!</h1>
            <h2>Fuck</h2>
        </div>
    )
}

// Render component App vào #root element
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);

