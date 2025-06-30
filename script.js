document.querySelectorAll("img").forEach(imagen => 
imagen.addEventListener("click", () =>  document.body.style.backgroundImage = `url(${imagen.src})` ))