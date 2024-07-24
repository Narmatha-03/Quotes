var quote = [
    "If you want to live a happy life, tie it to a goal, not to people or things",
    "You must expect great things of yourself before you can do them",
    "You don't have to be great to start, but you have to start to be great",
    "Everything you want is on the other side of fear",
    "All is Well",
    "Never let the fear of striking out keep you from playing the game",
    "Don't settle for what life gives you; make life better and build something",
    "The best way to predict your future is to create it",
    "I believe every human has a finite number of heartbeats.I don't intend to waste any of mine",
    "It had long since come to my attention that people of accomplishment rarely sat back and let things happen to them.They went out and happened to things"
];
function quotes() {
    var a = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    var c = Math.floor(Math.random() * 255);
    d = `rgb(${a},${b},${c})`;
    document.body.style.backgroundColor = d;
    var e = Math.floor(Math.random() * 10);
    document.getElementById('root').innerHTML = quote[e];
}