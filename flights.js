document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Simulating flight search
    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;
    const date = document.getElementById('date').value;

    // Here you would typically send a request to a server to fetch flight results
    // For demonstration purposes, let's just display a message with the search parameters
    const flightResults = document.getElementById('flightResults');
    flightResults.innerHTML = `<p>Searching flights from ${from} to ${to} on ${date}...</p>`;
    flightResults.classList.remove('hidden');
});
