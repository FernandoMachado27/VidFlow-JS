const containerVideos = document.querySelector(".videos__container"); // captura lista ul do HTML

async function buscarEMostrarVideos(){
    try{
        const busca = await fetch("http://localhost:3000/videos") // retorna a promise -> deve estar fulfilled, await aguarda que a busca seja feita para continuar o código
        const videos = await busca.json(); // retorna dados da API em json
            videos.forEach((video)=>{ // para cada video...
                if(video.categoria == ""){
                    throw new Error('Vídeo não tem categoria');
                }
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
    } catch(error){
        containerVideos.innerHTML = `<p>Houve um erro ao carregar os vídeos: ${error}</p>`        
    } 
}

buscarEMostrarVideos();

// eventos com a barra de pesquisa:

const barraDePesquisa = document.querySelector(".pesquisar__input");

barraDePesquisa.addEventListener("input", filtrarPesquisa);

function filtrarPesquisa(){
    const videos = document.querySelectorAll(".videos__item");

    if(barraDePesquisa.value != ""){
        for(let video of videos){ // vamos percorrer todos os videos
            let titulo = video.querySelector(".titulo-video").textContent.toLowerCase(); // pegando os titulos da API e transformando em minusculo
            let valorFiltro = barraDePesquisa.value.toLowerCase(); // pegando o titulo passado na barra de pesquisa e transformando em minusculo

            if(!titulo.includes(valorFiltro)){ // se o titlulo não inclui o valor da barra de pesquisa
                video.style.display = "none"; // vou sumir com o video
            } else {
                video.style.display = "block"; // se ambos foram iguais, exibe os videos
            }
        } 
    } else { // senão, todos os videos aparecem
        videos.forEach(video => video.style.display = 'block');
    }
}