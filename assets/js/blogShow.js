const blogSlider = document.querySelector(".blog-slider");
const listBlog = document.querySelectorAll(".blog .blog-list");
const dots = document.querySelectorAll(".blog .dot");

let currentIndexBlog = 0;
let intervalBlog;

// Hàm để chuyển blog
const nextBlog = (index) => {
    blogSlider.style.transform = `translateX(-${index * 100}%)`;
    currentIndexBlog = index;

    // Cập nhật trạng thái "active" cho dot
    dots.forEach((dot, dotIndex) => {
        if (dotIndex === index) {
            dot.classList.add("active");
        } else {
            dot.classList.remove("active");
        }
    });
};

// Hàm để tự động chuyển blog
const autoNextBlog = () => {
    currentIndexBlog++;
    if (currentIndexBlog >= listBlog.length) {
        currentIndexBlog = 0;
    }
    nextBlog(currentIndexBlog);
};

// Khởi động lại interval
const restartInterval = () => {
    clearInterval(intervalBlog); // Xóa interval hiện tại
    intervalBlog = setInterval(autoNextBlog, 5000); // Tạo interval mới
};

// Gán sự kiện click cho mỗi dot
Array.from(dots).forEach((dot, index) => {
    dot.onclick = () => {
        nextBlog(index); // Chuyển đến blog tương ứng
        restartInterval(); // Khởi động lại interval
    };
});

// Bắt đầu auto chuyển blog
intervalBlog = setInterval(autoNextBlog, 5000);
