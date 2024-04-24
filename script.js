function printTicket(ticketType) {
    var popup = document.getElementById("popup");
    popup.style.display = "block";


    setTimeout(function() {
        popup.style.display = "none";
        window.location.href = 'index.html';
    }, 1000);
}
