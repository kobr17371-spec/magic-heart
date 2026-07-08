document.getElementById('magic-btn').addEventListener('click', function() {
    // 1. Скрываем стартовый экран
    document.getElementById('start-screen').classList.add('hidden');
    
    // 2. Генерируем море текста на фоне
    const bg = document.getElementById('love-bg');
    bg.classList.remove('hidden');
    
    // Повторяем фразу много раз, пока она не забьет весь экран
    const phrase = "Я тебя люблю ";
    bg.innerText = phrase.repeat(3000); 

    // 3. Показываем экран с сердцем
    document.getElementById('result-screen').classList.remove('hidden');

    // 4. Плавно проявляем фото девушки внутри сердца
    setTimeout(() => {
        document.getElementById('final-photo').style.opacity = '1';
    }, 200);
});