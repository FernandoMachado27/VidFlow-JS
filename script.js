const containerVideos = document.querySelector(".videos__container"); // captura lista ul do HTML


async function buscarEMostrarVideos(){
    const busca = await fetch("http://localhost:3000/videos") // retorna a promise -> deve estar fulfilled, await aguarda que a busca seja feita para continuar o código
    const videos = await busca.json(); // retorna dados da API em json
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
}

buscarEMostrarVideos();