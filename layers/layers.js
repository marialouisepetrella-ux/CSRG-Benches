var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_BenchesCleanv2CSRGBenches_1 = new ol.format.GeoJSON();
var features_BenchesCleanv2CSRGBenches_1 = format_BenchesCleanv2CSRGBenches_1.readFeatures(json_BenchesCleanv2CSRGBenches_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BenchesCleanv2CSRGBenches_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BenchesCleanv2CSRGBenches_1.addFeatures(features_BenchesCleanv2CSRGBenches_1);
var lyr_BenchesCleanv2CSRGBenches_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BenchesCleanv2CSRGBenches_1, 
                style: style_BenchesCleanv2CSRGBenches_1,
                popuplayertitle: 'Benches Clean v2 - CSRG Benches',
                interactive: true,
                title: '<img src="styles/legend/BenchesCleanv2CSRGBenches_1.png" /> Benches Clean v2 - CSRG Benches'
            });

lyr_OSMStandard_0.setVisible(true);lyr_BenchesCleanv2CSRGBenches_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_BenchesCleanv2CSRGBenches_1];
lyr_BenchesCleanv2CSRGBenches_1.set('fieldAliases', {'ID': 'ID', 'OLD ID': 'OLD ID', 'DONOR': 'DONOR', 'PLAQUE': 'PLAQUE', 'YEAR': 'YEAR', 'CONDITION': 'CONDITION', 'MATERIAL': 'MATERIAL', 'LAST CHECKED': 'LAST CHECKED', 'MADE BY': 'MADE BY', 'TYPE': 'TYPE', 'LOCATION ZONE': 'LOCATION ZONE', 'Notes': 'Notes', 'Misc': 'Misc', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_BenchesCleanv2CSRGBenches_1.set('fieldImages', {'ID': 'TextEdit', 'OLD ID': 'TextEdit', 'DONOR': 'TextEdit', 'PLAQUE': 'TextEdit', 'YEAR': 'TextEdit', 'CONDITION': 'TextEdit', 'MATERIAL': 'TextEdit', 'LAST CHECKED': 'TextEdit', 'MADE BY': 'TextEdit', 'TYPE': 'TextEdit', 'LOCATION ZONE': 'TextEdit', 'Notes': 'TextEdit', 'Misc': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_BenchesCleanv2CSRGBenches_1.set('fieldLabels', {'ID': 'no label', 'OLD ID': 'no label', 'DONOR': 'no label', 'PLAQUE': 'no label', 'YEAR': 'no label', 'CONDITION': 'no label', 'MATERIAL': 'no label', 'LAST CHECKED': 'no label', 'MADE BY': 'no label', 'TYPE': 'no label', 'LOCATION ZONE': 'no label', 'Notes': 'no label', 'Misc': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_BenchesCleanv2CSRGBenches_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});