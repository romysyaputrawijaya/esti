const envelope = document.getElementById('envelope');
const letter = document.getElementById('letter');
const music = document.getElementById('music'); // Menangkap elemen audio
const flowerContainer = document.getElementById('flowerContainer'); // Tempat untuk bunga

envelope.addEventListener('click', function() {
    const flap = document.querySelector('.flap');
    
    // Animasi membuka amplop
    flap.style.transform = 'rotateX(-180deg)';
    
    // Setelah amplop dibuka, tampilkan surat dan mulai musik
    setTimeout(function() {
        envelope.style.transform = 'scale(0.8)';
        letter.style.display = 'block';
        music.play(); // Mulai memutar musik
        
        // Setelah menampilkan surat, tampilkan animasi bunga
        setTimeout(showFlower, 2000);
    }, 1000);
});

// Fungsi untuk membuat bunga
function showFlower() {
    const flower = document.createElement('div');
    flower.classList.add('flower');
    
    const petal1 = document.createElement('div');
    petal1.classList.add('petal');
    petal1.style.transform = 'rotate(0deg) translateX(-30px)';
    
    const petal2 = document.createElement('div');
    petal2.classList.add('petal');
    petal2.style.transform = 'rotate(60deg) translateX(-30px)';
    
    const petal3 = document.createElement('div');
    petal3.classList.add('petal');
    petal3.style.transform = 'rotate(120deg) translateX(-30px)';
    
    const petal4 = document.createElement('div');
    petal4.classList.add('petal');
    petal4.style.transform = 'rotate(180deg) translateX(-30px)';
    
    const petal5 = document.createElement('div');
    petal5.classList.add('petal');
    petal5.style.transform = 'rotate(240deg) translateX(-30px)';
    
    const petal6 = document.createElement('div');
    petal6.classList.add('petal');
    petal6.style.transform = 'rotate(300deg) translateX(-30px)';
    
    const stem = document.createElement('div');
    stem.classList.add('stem');
    
    flower.appendChild(petal1);
    flower.appendChild(petal2);
    flower.appendChild(petal3);
    flower.appendChild(petal4);
    flower.appendChild(petal5);
    flower.appendChild(petal6);
    flower.appendChild(stem);
    
    flowerContainer.appendChild(flower);
}
