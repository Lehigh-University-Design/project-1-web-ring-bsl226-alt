function scare() {
    document.getElementById('scary').style.display = 'block';
    setTimeout(function() {
        document.getElementById('scary').style.display = 'none';
    }, 1000);
    return;
}
