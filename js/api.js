'use strict';

function cargarPaises()
{
    let select = document.getElementById('regiones');
    let region = select.options[select.selectedIndex].value;

    let url = 'https://restcountries.eu/rest/v2/all';
    fetch(url)
        .then(data => data.json())
        .then(data => {
            let paises = data;

            let region_paises = [];
            paises.forEach(item => {
                if (item.region == region) {
                    region_paises.push(item.name);
                }
            });

            if (region_paises.length > 0) {
                establecesPaises(region_paises, region);
            }
        });
}

function establecesPaises(paises, region)
{
    let titulo = 'Hay ' + paises.length
        + ' países en "' + region + '"';

    let html = '';
    paises.forEach(item => {
        html += '<li>' + item + '</li>';
    });

    document.getElementById('seleccionar-region').innerHTML = titulo;
    document.getElementById('paises').innerHTML = html;
}

document.querySelector('#regiones')
    .addEventListener('change', cargarPaises);
