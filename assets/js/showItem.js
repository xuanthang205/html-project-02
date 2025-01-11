const feedbackList = document.querySelector('.feedback-list');
const feedbackItems = document.querySelectorAll('.feedback-item');
const totalItems = feedbackItems.length;

let currentIndex = 1;
const showNextItem = () => {
    // Đặt phần tử hiện tại di chuyển sang trái
    feedbackList.style.transform = `translateX(-${currentIndex * 100}%)`;

    // Cập nhật chỉ số phần tử hiện tại
    currentIndex++;
    if(currentIndex >= totalItems) {
        currentIndex = 0;
    }
};

let interval = setInterval(showNextItem, 2000);

feedbackList.onmousedown = function() {
    clearInterval(interval);
    feedbackList.style.cursor = 'pointer';
}

feedbackList.onmouseup = function() {
    interval = setInterval(showNextItem, 2000);
    feedbackList.style.cursor = 'default';
}




