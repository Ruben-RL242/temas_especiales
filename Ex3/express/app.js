const express = require('express');
const app = express();

const PORT = 3000;

app.get('/', (_, res) => {
  res.send({
    message: 'Hello world'
  });
}); 

 app.get('/random', (_, res) => {
    res.send({
        message: `Número aleatorio: ${Math.floor(Math.random() * (11 - 1)+1)}`
    });
}); 

function fibonacci(){
    let arr=[];
    const sol = [0, 1];
    for (let i = 2; i<= 11; i++) {
        sol[i] = sol[i -1] + sol[i - 2];
        element=sol[i]
        arr.push(element);
    }

    return arr;
}

app.post('/fibonacci', (_, res) => {
    res.send({
        message: `Los primeros 10 números de fibonacci son: ${fibonacci()}`
    });
});

app.post('/', (_, res) => {
  res.send({
    message: 'Foo bar'
  });
});



app.put('/foo', (req, res) => {
  res.send({
    method: req.method,
    url: req.url
  })
});

app.listen(PORT, () => {
  console.log(` tarea esta corriendo en el puerto:${PORT}`);
});