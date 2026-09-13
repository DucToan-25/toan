// Lấy tất cả các phần tử có class là 'box'
const boxes = document.querySelectorAll('.box');

// Duyệt qua từng ô và thêm sự kiện click
boxes.forEach(box => {
    box.addEventListener('click', function() {
        // Xóa màu nền (class active) của các ô khác
        boxes.forEach(b => {
            if(b !== this) {
                b.classList.remove('active');
            }
        });
        
        // Bật/tắt màu nền cho ô đang được click
        this.classList.toggle('active');
    });
});