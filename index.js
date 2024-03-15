const banner_card_2 = document.querySelector('.banner_card_2');
    const Hotels = document.getElementById('Hotels');
    const tryBtn = document.querySelector('.Hotels');
    const Flights = document.getElementById('Flights');
    const tryBtn1 = document.querySelector('.Flights');
    const Cars = document.getElementById('Cars');
    const tryBtn2 = document.querySelector('.Cars');

    Hotels.addEventListener('click', () => {
        banner_card_2.style.display = 'block';
        tryBtn.style.display = 'block';
        tryBtn1.style.display = 'none';
        tryBtn2.style.display = 'none';
    });

   

    Flights.addEventListener('click', () => {
        banner_card_2.style.display = 'block';
        tryBtn1.style.display = 'block';
        tryBtn.style.display = 'none';
        tryBtn2.style.display = 'none';
    });
    

    Cars.addEventListener('click', () => {
        banner_card_2.style.display = 'block';
        tryBtn2.style.display = 'block';
        tryBtn.style.display = 'none';
        tryBtn1.style.display = 'none';
    });