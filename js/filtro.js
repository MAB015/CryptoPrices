// Api Assets URL
const urlCoincapApi = "https://api.coincap.io/v2"
// Api Icons URL
const urlIcons = "https://static.coincap.io/assets/icons"

// const cryptoCurrencyValue = document.querySelector("#cryptoCurrency-name");
console.log("HolaFiltro")


function verCryptocurrency() {
    console.log("Hola2");
    // // Obtener el valor del input
    const cryptoCurrencyValue = document.getElementById("cryptoCurrency-name").value.toLowerCase();
    // // Obtener el elemento donde se mostrará el resultado
    const resp = document.getElementById("table-resultado-price");
    // const resp = document.querySelector("#table-resultado-price");
    // Limpiando el resultado
    // res.innerHTML = "";
    // Llamando a la API
    fetch(`${urlCoincapApi}/assets/${cryptoCurrencyValue}`)
        .then(response => response.json())
        .then(datos => {
            const cryptoCurrencyData = datos.data;
            console.log(cryptoCurrencyData);
            // Creación de elementos
            const ranking = document.createElement("p");
            const nombre = document.createElement("p");
            const imagen = document.createElement("img");
            const priceUsd = document.createElement("p");
            const marketCapUsd= document.createElement("p");
            const volumeUsd24Hr = document.createElement("p");

            // Asignación a elementos
            ranking.innerHTML = "Ranking: " + cryptoCurrencyData.rank;
            nombre.innerText = cryptoCurrencyData.name + " (" + cryptoCurrencyData.symbol + ")";
            imagen.src = `${urlIcons}/${cryptoCurrencyData.symbol.toLowerCase()}@2x.png`;
            imagen.alt = `${cryptoCurrencyData.name}`;
            priceUsd.innerHTML = "Precio USD: " + cryptoCurrencyData.priceUsd;
            marketCapUsd.innerHTML = "Mercado Usd: " + cryptoCurrencyData.marketCapUsd;
            volumeUsd24Hr.innerHTML = "Volumen 24H: " + cryptoCurrencyData.volumeUsd24Hr;

            // Agregando Elementos
            resp.appendChild(ranking);
            resp.appendChild(nombre);
            resp.appendChild(imagen);
            resp.appendChild(priceUsd);
            resp.appendChild(marketCapUsd);
            resp.appendChild(volumeUsd24Hr);

        })
        .catch(error => console.error(error))

        // location.href = "../html/filtro.html"
}