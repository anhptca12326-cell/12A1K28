// 1. Tìm tất cả các cụm Slider trên trang
const groups = document.querySelectorAll('.content-container');

groups.forEach((group) => {
    const track = group.querySelector('.thanhtruot');
    const nextBtn = group.querySelector('.next');
    const prevBtn = group.querySelector('.prev');
    
    let currentIndex = 0;
    const cardsPerView = 5;
    const totalCards = track.querySelectorAll('.khungan').length;
    const maxIndex = totalCards - cardsPerView;

    // Sự kiện khi ấn nút Tới
    nextBtn.addEventListener('click', () => {
        currentIndex++;
        if (currentIndex > maxIndex) currentIndex = 0;
        updateSlider();
    });

    // Sự kiện khi ấn nút Lùi
    prevBtn.addEventListener('click', () => {
        currentIndex--;
        if (currentIndex < 0) currentIndex = maxIndex; 
        updateSlider();
    });

    function updateSlider() {
        track.style.transform = `translateX(-${currentIndex * 20.2}%)`;
    }
});


function hien(id, btn) {

    const group = btn.closest('.content-container');
    const contents = group.querySelectorAll('.active');

    contents.forEach(item => {
        item.classList.remove('active');
        item.classList.add('hidden');
    });

    const target = group.querySelector('#' + id);
    target.classList.remove('hidden');
    target.classList.add('active');
}
