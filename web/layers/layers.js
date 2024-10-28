
// var container = document.getElementById('popup');
// var content = document.getElementById('popup-content');
// var closer = document.getElementById('popup-closer');

// var overlay = new ol.Overlay({
//   element: container,
//   autoPan: true,
//   autoPanAnimation: {
//     duration: 250
//   }
// });

// closer.onclick = function() {
//   overlay.setPosition(undefined);
//   closer.blur();
//   return false;
// };




      var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            source: new ol.source.OSM(),        
            title: 'OpenStreetMap'
          });
var format_lulcOm2022_1 = new ol.format.GeoJSON();
var features_lulcOm2022_1 = format_lulcOm2022_1.readFeatures(json_lulcOm2022_1, 
        {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lulcOm2022_1 = new ol.source.Vector({
attributions: ' ',
});
jsonSource_lulcOm2022_1.addFeatures(features_lulcOm2022_1);
var lyr_lulcOm2022_1 = new ol.layer.Vector({
            declutter: false,
            source:jsonSource_lulcOm2022_1, 
            style: style_lulcOm2022_1,
            popuplayertitle: "lulcOm2022",
            interactive: true,
title: 'lulcOm2022<br />\
<img src="styles/legend/lulcOm2022_1_0.png" /> Agriculture<br />\
<img src="styles/legend/lulcOm2022_1_1.png" /> Barren<br />\
<img src="styles/legend/lulcOm2022_1_2.png" /> Industrial<br />\
<img src="styles/legend/lulcOm2022_1_3.png" /> Urban<br />'
    });
var format_lulcOm1985_2 = new ol.format.GeoJSON();
var features_lulcOm1985_2 = format_lulcOm1985_2.readFeatures(json_lulcOm1985_2, 
        {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lulcOm1985_2 = new ol.source.Vector({
attributions: ' ',
});
jsonSource_lulcOm1985_2.addFeatures(features_lulcOm1985_2);
var lyr_lulcOm1985_2 = new ol.layer.Vector({
            declutter: false,
            source:jsonSource_lulcOm1985_2, 
            style: style_lulcOm1985_2,
            popuplayertitle: "lulcOm1985",
            interactive: true,
title: 'lulcOm1985<br />\
<img src="styles/legend/lulcOm1985_2_0.png" /> Agriculture<br />\
<img src="styles/legend/lulcOm1985_2_1.png" /> Barren<br />\
<img src="styles/legend/lulcOm1985_2_2.png" /> Industrial<br />\
<img src="styles/legend/lulcOm1985_2_3.png" /> Urban<br />'
    });
var format_changeDetection_3 = new ol.format.GeoJSON();
var features_changeDetection_3 = format_changeDetection_3.readFeatures(json_changeDetection_3, 
        {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_changeDetection_3 = new ol.source.Vector({
attributions: ' ',
});
jsonSource_changeDetection_3.addFeatures(features_changeDetection_3);
var lyr_changeDetection_3 = new ol.layer.Vector({
            declutter: false,
            source:jsonSource_changeDetection_3, 
            style: style_changeDetection_3,
            popuplayertitle: "changeDetection",
            interactive: true,
title: 'changeDetection<br />\
<img src="styles/legend/changeDetection_3_0.png" /> Changed<br />\
<img src="styles/legend/changeDetection_3_1.png" /> UnChanged<br />'
    });

lyr_OpenStreetMap_0.setVisible(true);lyr_lulcOm2022_1.setVisible(true);lyr_lulcOm1985_2.setVisible(true);lyr_changeDetection_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_changeDetection_3,lyr_lulcOm1985_2,lyr_lulcOm2022_1];
lyr_lulcOm2022_1.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', 'LandCover': 'LandCover', 'Area(sqm)': 'Area(sqm)', 'sskm': 'sskm', 'Area(sqkm)': 'Area(sqkm)', });
lyr_lulcOm1985_2.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', 'LandCover': 'LandCover', 'Area(sqm)': 'Area(sqm)', 'Area(sqkm)': 'Area(sqkm)', });
lyr_changeDetection_3.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', 'LandCover': 'LandCover', 'Area(sqm)': 'Area(sqm)', 'Area(sqkm)': 'Area(sqkm)', });
lyr_lulcOm2022_1.set('fieldImages', {'fid': 'TextEdit', 'DN': 'Range', 'LandCover': 'TextEdit', 'Area(sqm)': 'Range', 'sskm': 'TextEdit', 'Area(sqkm)': 'TextEdit', });
lyr_lulcOm1985_2.set('fieldImages', {'fid': 'TextEdit', 'DN': 'Range', 'LandCover': 'TextEdit', 'Area(sqm)': 'Range', 'Area(sqkm)': 'TextEdit', });
lyr_changeDetection_3.set('fieldImages', {'fid': '', 'DN': '', 'LandCover': '', 'Area(sqm)': '', 'Area(sqkm)': '', });
lyr_lulcOm2022_1.set('fieldLabels', {'fid': 'no label', 'DN': 'no label', 'LandCover': 'inline label - visible with data', 'Area(sqm)': 'no label', 'sskm': 'no label', 'Area(sqkm)': 'inline label - visible with data', });
lyr_lulcOm1985_2.set('fieldLabels', {'fid': 'no label', 'DN': 'no label', 'LandCover': 'inline label - visible with data', 'Area(sqm)': 'no label', 'Area(sqkm)': 'inline label - visible with data', });
lyr_changeDetection_3.set('fieldLabels', {'fid': 'no label', 'DN': 'no label', 'LandCover': 'inline label - visible with data', 'Area(sqm)': 'no label', 'Area(sqkm)': 'inline label - visible with data', });
lyr_changeDetection_3.on('precompose', function(evt) {
evt.context.globalCompositeOperation = 'normal';
});


  
//   map.on('click', function(evt) {

//         var coordinate = evt.coordinate;
//         var hdms = ol.coordinate.toStringHDMS(ol.proj.transform(
//             coordinate, 'EPSG:3857', 'EPSG:4326'));

//         content.innerHTML = '<p>You clicked here:</p><code>' + hdms +
//             '</code>';
//         overlay.setPosition(coordinate);
//       });

//     var layerSwitcher2 = new ol.control.LayerSwitcher({
//       tipLabel: "Layers"
//   });
//   map.addControl(layerSwitcher2);

      


  