// Api Assets URL
const urlCoincapApi = "https://api.coincap.io/v2"
// Api Icons URL
const urlIcons = "https://static.coincap.io/assets/icons"

// Element in DOM to add the table
const sectionTablePrices = document.querySelector(".table-prices"); 


// Fetch
fetch(`${urlCoincapApi}/assets?limit=10`)
    .then(response => response.json())
    .then(datos => {
        
        
        const cryptoCurrencyArray = datos.data

        // Crear la tabla
        const table = document.createElement('table')
        // Crear la cabecera
        const tableHeader = document.createElement('tr')
        // Crear las columnas de la cabecera
        const rankHeader = document.createElement('th')
        // const imgHeader = document.createElement('th')
        const nameHeader = document.createElement('th')
        nameHeader.colSpan = 2
        const symbolHeader = document.createElement('th')
        const priceUsdHeader = document.createElement('th')
        const marketCapUsdHeader = document.createElement('th')
        // Agregar los textos a las columnas
        rankHeader.innerText = 'RANK';
        // imgHeader.innerText = ' ';
        nameHeader.innerText = 'NAME';
        symbolHeader.innerText = 'SYMBOL'
        priceUsdHeader.innerText = 'PRICE'
        marketCapUsdHeader.innerText = 'MARKET CAP USD'
        // Agregue las columnas a la cabecera
        tableHeader.appendChild(rankHeader)
        tableHeader.appendChild(nameHeader)
        tableHeader.appendChild(symbolHeader)
        tableHeader.appendChild(priceUsdHeader)
        tableHeader.appendChild(marketCapUsdHeader)
        // Agregar a la cabecera de la tabla
        table.appendChild(tableHeader)
        
        for (let i = 0; i < cryptoCurrencyArray.length; i++) {
            
            // Crear Fila
            const cryptoCurrencyRow = document.createElement('tr');
            // Crear las columnas
            const rankHeader = document.createElement('td')
            const imgHeader = document.createElement('td')
            const nameHeader = document.createElement('td');
            const symbolHeader = document.createElement('td');
            const priceUsdHeader = document.createElement('td');
            const marketCapUsdHeader = document.createElement('td');
            // Agregue los datos a la columna
            rankHeader.innerText = cryptoCurrencyArray[i].rank;
            imgHeader.innerHTML = `<img src="${urlIcons}/${cryptoCurrencyArray[i].symbol.toLowerCase()}@2x.png" alt="${cryptoCurrencyArray[i].name}"></img>`;
            nameHeader.innerText = cryptoCurrencyArray[i].name;
            symbolHeader.innerText = cryptoCurrencyArray[i].symbol;
            priceUsdHeader.innerText = cryptoCurrencyArray[i].priceUsd;
            marketCapUsdHeader.innerText = cryptoCurrencyArray[i].marketCapUsd;
            // Agregar columnas a la fila
            cryptoCurrencyRow.appendChild(rankHeader);
            cryptoCurrencyRow.appendChild(imgHeader);
            cryptoCurrencyRow.appendChild(nameHeader);
            cryptoCurrencyRow.appendChild(symbolHeader);
            cryptoCurrencyRow.appendChild(priceUsdHeader);
            cryptoCurrencyRow.appendChild(marketCapUsdHeader);
            // Agregar la fila a la Tabla
            table.appendChild(cryptoCurrencyRow);
        }


        // Agregar la tabla al body
        sectionTablePrices.insertAdjacentElement("afterbegin", table);
        // document.body.appendChild(table);
    })

    .catch(error => console.error(error));