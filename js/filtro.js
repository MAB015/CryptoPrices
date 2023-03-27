// Api Assets URL
const urlCoincapApi = "https://api.coincap.io/v2"
// Api Icons URL
const urlIcons = "https://static.coincap.io/assets/icons"

console.log("Hola");

function verCryptocurrency() {
    console.log("Hola");
    // Obtener el valor del input
    const cryptoCurrency = document.getElementById("cryptoCurrency-name").value.toLowerCase();
    // Obtener el elemento donde se mostrará el resultado
    const res = document.getElementById("table-resultado-price");
    // Limpiando el resultado
    res.innerHTML = "";
    // Llamando a la API
    fetch(`${urlCoincapApi}/assets/${cryptoCurrency}`)
        .then(response => response.json())
        .then(datos => {
            const cryptoCurrency = datos.data;
            console.log(cryptoCurrency);
            // Creación de elementos
            const ranking = document.createElement("p");
            const nombre = document.createElement("p");
            const imagen = document.createElement("img");
            const priceUsd = document.createElement("p");
            const marketCapUsd= document.createElement("p");
            const volumeUsd24Hr = document.createElement("p");

            // Asignación a elementos
            ranking.innerHTML = "Ranking: " + cryptoCurrency.rank;
            nombre.innerText = cryptoCurrency.name + " (" + cryptoCurrency.symbol + ")";
            imagen.src = `${urlIcons}/${cryptoCurrency.symbol.toLowerCase()}@2x.png`;
            imagen.alt = `${cryptoCurrency.name}`;
            priceUsd.innerHTML = "Precio USD: " + cryptoCurrency.priceUsd;
            marketCapUsd.innerHTML = "Mercado Usd: " + cryptoCurrency.marketCapUsd;
            volumeUsd24Hr.innerHTML = "Volumen 24H: " + cryptoCurrency.volumeUsd24Hr;

            // Agregando Elementos
            res.appendChild(ranking);
            res.appendChild(nombre);
            res.appendChild(imagen);
            res.appendChild(priceUsd);
            res.appendChild(marketCapUsd);
            res.appendChild(volumeUsd24Hr);
        })
        .catch(error => console.error(error))
}