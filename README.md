## Setup dự án
1/ npm install or npm i (sudo)
2/ xóa StrictMode và index.css trong main.jsx
3/ xóa tinh gọn file app.jsx
4/ xóa file app.css và index.css

## REDUX
- Bước 1: phải có các reducer function
- Bước 2: mỗi reducer thì tạo ra các action
- Bước 3: dùng combireducer để kết hợp các reducer thành 1
- Bước 4: dùng createStore truyền vào combiReducer để tạo thành 1 store.
- Bước 5: dùng component Provider để bọc toàn bộ hệ thống. Và Props vào cho component Provider 1 store là store được tạo ra ở bước trên.
- Bước 6: sử dụng
6.1 Để lấy dữ liệu ta dùng useSelector
6.2 Để thay đổi store ta dùng useDipatch truyền vào cho dispatch các action tương ứng.