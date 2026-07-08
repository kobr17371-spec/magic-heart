document.getElementById('magic-btn').addEventListener('click', function() {
    document.getElementById('start-screen').classList.add('hidden');
    
    const bg = document.getElementById('love-bg');
    bg.classList.remove('hidden');
    
    const phrase = "Я тебя люблю ";
    bg.innerText = phrase.repeat(3000); 

    document.getElementById('result-screen').classList.remove('hidden');

    setTimeout(() => {
        document.getElementById('final-photo').style.opacity = '1';
    }, 200);
});

// --- МАГИЯ ФЕЙЕРВЕРКА ИЗ СЕРДЕЧЕК ---

const loveTitle = document.getElementById('love-title');

loveTitle.addEventListener('click', function(e) {
    // Создаем 30 сердечек для одного взрыва
    for (let i = 0; i < 30; i++) {
        createBurstHeart(e.clientX, e.clientY);
    }
});

function createBurstHeart(clickX, clickY) {
    const heart = document.createElement('div');
    heart.className = 'burst-heart';
    heart.innerText = '❤️';
    
    // Появляются точно там, где кликнули мышкой или нажали пальцем
    heart.style.left = clickX + 'px';
    heart.style.top = clickY + 'px';
    
    // Случайный размер для каждого сердечка
    const size = Math.random() * 20 + 10;
    heart.style.fontSize = size + 'px';
    
    // Генерируем случайное направление полета (угол и расстояние)
    const angle = Math.random() * Math.PI * 2;
    const velocity = Math.random() * 150 + 50; 
    const x = Math.cos(angle) * velocity;
    const y = Math.sin(angle) * velocity;
    
    // Передаем эти координаты в CSS переменные
    heart.style.setProperty('--x', `${x}px`);
    heart.style.setProperty('--y', `${y}px`);
    
    document.body.appendChild(heart);
    
    // Удаляем сердечко после окончания анимации (через 1 секунду)
    setTimeout(() => {
        heart.remove();
    }, 1000);
}
