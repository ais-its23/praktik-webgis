var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_upnv_jatim_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "upnv_jatim",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/upnv_jatim_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [0.000000, -350.000000, 350.000000, 0.000000]
                            })
                        });
var lyr_unesa_lidahwetan_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "unesa_lidahwetan",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/unesa_lidahwetan_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [0.000000, -263.000000, 350.000000, 0.000000]
                            })
                        });
var lyr_unesa_ketintang_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "unesa_ketintang",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/unesa_ketintang_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [0.000000, -233.000000, 350.000000, 0.000000]
                            })
                        });
var lyr_unair_c_4 = new ol.layer.Image({
                            opacity: 1,
                            title: "unair_c",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/unair_c_4.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [0.000000, -252.000000, 350.000000, 0.000000]
                            })
                        });
var lyr_unair_b_5 = new ol.layer.Image({
                            opacity: 1,
                            title: "unair_b",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/unair_b_5.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [0.000000, -270.000000, 350.000000, 0.000000]
                            })
                        });
var lyr_unair_a_6 = new ol.layer.Image({
                            opacity: 1,
                            title: "unair_a",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/unair_a_6.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [0.000000, -198.000000, 350.000000, 0.000000]
                            })
                        });
var lyr_uin_7 = new ol.layer.Image({
                            opacity: 1,
                            title: "uin",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/uin_7.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [0.000000, -233.000000, 350.000000, 0.000000]
                            })
                        });
var lyr_its_sukolilo_8 = new ol.layer.Image({
                            opacity: 1,
                            title: "its_sukolilo",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/its_sukolilo_8.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [0.000000, -233.000000, 350.000000, 0.000000]
                            })
                        });
var lyr_its_manyar_9 = new ol.layer.Image({
                            opacity: 1,
                            title: "its_manyar",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/its_manyar_9.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [0.000000, -197.000000, 350.000000, 0.000000]
                            })
                        });
var format_aksesibilitas_univunion_10 = new ol.format.GeoJSON();
var features_aksesibilitas_univunion_10 = format_aksesibilitas_univunion_10.readFeatures(json_aksesibilitas_univunion_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_aksesibilitas_univunion_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_aksesibilitas_univunion_10.addFeatures(features_aksesibilitas_univunion_10);
var lyr_aksesibilitas_univunion_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_aksesibilitas_univunion_10, 
                style: style_aksesibilitas_univunion_10,
                popuplayertitle: "aksesibilitas_univ — union",
                interactive: true,
                title: '<img src="styles/legend/aksesibilitas_univunion_10.png" /> aksesibilitas_univ — union'
            });
var format_univ_surabaya_11 = new ol.format.GeoJSON();
var features_univ_surabaya_11 = format_univ_surabaya_11.readFeatures(json_univ_surabaya_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_univ_surabaya_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_univ_surabaya_11.addFeatures(features_univ_surabaya_11);
var lyr_univ_surabaya_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_univ_surabaya_11, 
                style: style_univ_surabaya_11,
                popuplayertitle: "univ_surabaya",
                interactive: true,
                title: '<img src="styles/legend/univ_surabaya_11.png" /> univ_surabaya'
            });

lyr_OSMStandard_0.setVisible(true);lyr_upnv_jatim_1.setVisible(true);lyr_unesa_lidahwetan_2.setVisible(true);lyr_unesa_ketintang_3.setVisible(true);lyr_unair_c_4.setVisible(true);lyr_unair_b_5.setVisible(true);lyr_unair_a_6.setVisible(true);lyr_uin_7.setVisible(true);lyr_its_sukolilo_8.setVisible(true);lyr_its_manyar_9.setVisible(true);lyr_aksesibilitas_univunion_10.setVisible(true);lyr_univ_surabaya_11.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_upnv_jatim_1,lyr_unesa_lidahwetan_2,lyr_unesa_ketintang_3,lyr_unair_c_4,lyr_unair_b_5,lyr_unair_a_6,lyr_uin_7,lyr_its_sukolilo_8,lyr_its_manyar_9,lyr_aksesibilitas_univunion_10,lyr_univ_surabaya_11];
lyr_aksesibilitas_univunion_10.set('fieldAliases', {'fid': 'fid', 'Access': 'Access', });
lyr_univ_surabaya_11.set('fieldAliases', {'fid': 'fid', 'Nama': 'Nama', 'Kampus': 'Kampus', });
lyr_aksesibilitas_univunion_10.set('fieldImages', {'fid': '', 'Access': '', });
lyr_univ_surabaya_11.set('fieldImages', {'fid': '', 'Nama': '', 'Kampus': '', });
lyr_aksesibilitas_univunion_10.set('fieldLabels', {'fid': 'hidden field', 'Access': 'header label - always visible', });
lyr_univ_surabaya_11.set('fieldLabels', {'fid': 'hidden field', 'Nama': 'inline label - always visible', 'Kampus': 'inline label - always visible', });
lyr_univ_surabaya_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});