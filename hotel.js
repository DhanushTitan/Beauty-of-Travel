document.getElementById('book-now').addEventListener('click', function() {
    const roomType = document.getElementById('room-type').value;
    const checkInDate = document.getElementById('check-in-date').value;
    const checkOutDate = document.getElementById('check-out-date').value;
    const breakfast = document.getElementById('breakfast').checked;
    const lunch = document.getElementById('lunch').checked;
    const dinner = document.getElementById('dinner').checked;
  
    // Here you can implement further logic, like sending the booking details to a server or displaying a confirmation message.
    console.log('Room Type:', roomType);
    console.log('Check-in Date:', checkInDate);
    console.log('Check-out Date:', checkOutDate);
    console.log('Breakfast:', breakfast);
    console.log('Lunch:', lunch);
    console.log('Dinner:', dinner);
  });
  