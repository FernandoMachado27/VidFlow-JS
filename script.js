const api = fetch("http://localhost:3000/videos") // retorna a promise -> deve estar fulfilled
.then(res => console.log(res.json())) 