<!--
 Copyright (c) 2023 Rafael F. Meneses
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->
# Mapas

Como *wrapper* dos mapas está sendo utilizado o [Leaflet](https://leafletjs.com/), já para integração com o React estamos utilizando o [React Leaflet](https://react-leaflet.js.org/).

## Provedor

São os fornecedores dos `tiles`, estes são usados para montar o mapa.

As `TileLayer`s com imagem de satélite estão sendo providas pelo **Esri World Imagery**, você pode encontrar a nota de permissão de uso [aqui](https://www.esri.com/arcgis-blog/products/constituent-engagement/constituent-engagement/esri-world-imagery-in-openstreetmap/).
> Fique atento com utilizar o google maps, já que isso pode infringir os termos de uso.

Acesse a lista de provedores gratuitos [aqui](http://leaflet-extras.github.io/leaflet-providers/preview/index.html).

## Styling

O *styling* do componente é feito utilizando `className`s estáticos, estes podem ser modificados no arquivo `app.css`. Para encontrar o nome da classe você pode utilizar o inspetor do seu navegador.  