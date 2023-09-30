const Server  = require("socket.io").Server;

const MAX_DATA = 20

const io = new Server(3000, { 
    cors: {
        origin: '*'
    }
});


let generateRandom = (base = 25, min = 0, max = 100) => {

    // find diff
    let difference = max - min;

    // generate random number 
    let rand = Math.random();

    // multiply with difference 
    rand = Math.floor( rand * difference);

    // add with min value 
    rand = rand + min;

    return base + (rand/100);
}

console.log(generateRandom());

let newData = () => {
    return {
        value: generateRandom(base = 0),
        datetime: {
            date: new Date().toLocaleDateString(),
            time: new Date().toLocaleTimeString()
        }
    }
}

io.on("connection", (socket) => {

  socket.emit('new',  newData() );

});

setInterval(function() {

    io.emit('new', newData() );

}, 1000);
