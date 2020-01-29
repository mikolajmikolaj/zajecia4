//alert("hello");

//Add layers to a map
require([
   "esri/Map",
   "esri/views/MapView",
   "esri/layers/FeatureLayer"
 ], function(Map, MapView, FeatureLayer) {
   var map = new Map({
            basemap: "topo-vector",
   });
   let mapContainer = new MapView({
      container: "mapa",  // miejsce gdzie chcemy osadzić mapę (bierzemy klasę z pliku html //
      map: map,  //czyli nasza zmienna z mapą bazową zdefiniowana wcześniej //
      center: [-95.80500,38.02700],
      zoom: 4
   });

    // Parks and open spaces (polygons)
    var warstwa = new FeatureLayer({
      url: "https://services3.arcgis.com/GVgbJbqm8hXASVYi/ArcGIS/rest/services/USA%20States/FeatureServer/0"
    });

    map.add(warstwa, 0);

})


//Add a sketch widget
//require([
//   "esri/Map",
//   "esri/views/MapView",
//   "esri/layers/GraphicsLayer",
//   "esri/widgets/Sketch",
// ], function(Map, MapView, GraphicsLayer, Sketch) {
//    //*** ADD ***//
//    var graphicsLayer = new GraphicsLayer();
//
//    var map = new Map({
//      basemap: "topo-vector",
//      //*** ADD ***//
//      layers: [graphicsLayer]
//    });
//   let map1 = new Map({basemap:"topo"});
//   let mapContainer = new MapView({
//            container: "mapa",  // miejsce gdzie chcemy osadzić mapę (bierzemy klasę z pliku html //
//            map: map,  //czyli nasza zmienna z mapą bazową zdefiniowana wcześniej //
//            center: [20.80500,52.02700],
//            zoom: 6
//   });
//   var sketch = new Sketch({
//      view: mapContainer,
//      layer: graphicsLayer
//    });
//   
//    mapContainer.ui.add(sketch, "top-right");
//   })

//Select a basemap from an ArcGIS Online group
//require([
//   "esri/Map",
//   "esri/views/MapView",
//   "esri/widgets/BasemapToggle",
//   "esri/widgets/BasemapGallery"
// ], function(Map, MapView, BasemapToggle, BasemapGallery) {
//   let map1 = new Map({basemap:"topo"});
//   let mapContainer = new MapView({
//             container: "mapa",  // miejsce gdzie chcemy osadzić mapę (bierzemy klasę z pliku html //
//            map: map1  //czyli nasza zmienna z mapą bazową zdefiniowana wcześniej //
//   });
//   var basemapGallery = new BasemapGallery({
//      view: mapContainer,
//      source: {
//        portal: {
//          url: "https://www.arcgis.com",
//          useVectorBasemaps: true  // Load vector tile basemaps
//        }
//      }
//    });

//    mapContainer.ui.add(basemapGallery, "top-right");
//})

// zwykła mapa dodana do strony
//require (["esri/Map", "esri/views/MapView"],
//   function(Map, MapView)
//   {
//    let map1 = new Map({basemap:"topo"}); //słowo klucz new + nazwa modułu
//    
//    let mapContainer = new MapView({
//        container: "mapa",  // miejsce gdzie chcemy osadzić mapę (bierzemy klasę z pliku html //
//        map: map1  //czyli nasza zmienna z mapą bazową zdefiniowana wcześniej //
//     });       
//  })