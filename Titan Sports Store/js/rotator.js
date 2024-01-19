var banner = [
    ["banner1", "img/Banner.png"],
    ["banner2", "img/Banner2.png"],
    ["banner3", "img/Banner3.png"],
    ["banner4", "img/Banner4.png"]
];
function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}
shuffle(banner);
document.getElementById('banner').innerHTML = '<a href="' + banner[0][0] + '" target="_blank" rel="nofollow"><img src="' + banner[0][1] + '" height="350" width="350" alt="350x350 Banner Ad" /></a>';