const containerVideos = document.querySelector(".videos__container"); // captura lista ul do HTML

const api = fetch("http://localhost:3000/videos") // retorna a promise -> deve estar fulfilled
.then(res => res.json()) // retorna dados da API em json
.then((videos) =>
    videos.forEach((video)=>{ // para cada video...
        containerVideos.innerHTML += `
            <li class="videos__item">
                <iframe src="${video.url}" title"${video.titulo}" frameborder="0" allowfullscreen></iframe>
                    <div class="descricao-video">
                        <img class="img-canal" src"${video.imagem}" alt="Logo do Canal">
                        <h3 class="titulo-video">${video.titulo}</h3>
                            <p class="titulo-canal">${video.descricao}</p>
                    </div>   
            </li>
        `; // inserir os videos no HTML
    })
)

.catch((error) =>{
    containerVideos.innerHTML = `<p> Houve um erro ao carrecar os vídeos: ${error} </p>`;
})