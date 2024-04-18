function share(platform) {
    var url = 'https://bcgameairdrop.github.io/bc.game-/';

    switch(platform) {
        case 'whatsapp':
            url = 'https://wa.me/?text=' + encodeURIComponent(url);
            break;
        case 'instagram':
            url = 'https://www.instagram.com/?url=' + encodeURIComponent(url);
            break;
        case 'facebook':
            url = 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(url);
            break;
        default:
            break;
    }

    // Open the sharing link
    var sharingWindow = window.open(url, '_blank');

    // Wait for a short delay (you can adjust this value)
    setTimeout(function() {
        // Redirect to https://bc.co
        window.location.href = 'https://bc.co';
    }, 1000); // Delay in milliseconds (e.g., 1000 milliseconds = 1 second)
}
