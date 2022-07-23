var wms_layers = [];

        var lyr_GoogleRoad_0 = new ol.layer.Tile({
            'title': 'GoogleRoad_0',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: [new ol.Attribution({html: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>'})],
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });var format_SAL_SA_2013copy_1 = new ol.format.GeoJSON();
var features_SAL_SA_2013copy_1 = format_SAL_SA_2013copy_1.readFeatures(json_SAL_SA_2013copy_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SAL_SA_2013copy_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_SAL_SA_2013copy_1.addFeatures(features_SAL_SA_2013copy_1);var lyr_SAL_SA_2013copy_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SAL_SA_2013copy_1, 
                style: style_SAL_SA_2013copy_1,
    title: 'SAL_SA_2013 copy<br />\
    <img src="styles/legend/SAL_SA_2013copy_1_0.png" /> #N/A<br />\
    <img src="styles/legend/SAL_SA_2013copy_1_1.png" /> A<br />\
    <img src="styles/legend/SAL_SA_2013copy_1_2.png" /> B<br />\
    <img src="styles/legend/SAL_SA_2013copy_1_3.png" /> C <br />\
    <img src="styles/legend/SAL_SA_2013copy_1_4.png" /> D<br />\
    <img src="styles/legend/SAL_SA_2013copy_1_5.png" /> E<br />\
    <img src="styles/legend/SAL_SA_2013copy_1_6.png" /> F<br />\
    <img src="styles/legend/SAL_SA_2013copy_1_7.png" /> G<br />\
    <img src="styles/legend/SAL_SA_2013copy_1_8.png" /> H<br />\
    <img src="styles/legend/SAL_SA_2013copy_1_9.png" /> I<br />\
    <img src="styles/legend/SAL_SA_2013copy_1_10.png" /> J<br />\
    <img src="styles/legend/SAL_SA_2013copy_1_11.png" /> K<br />\
    <img src="styles/legend/SAL_SA_2013copy_1_12.png" /> L<br />\
    <img src="styles/legend/SAL_SA_2013copy_1_13.png" /> M<br />\
    <img src="styles/legend/SAL_SA_2013copy_1_14.png" /> N<br />\
    <img src="styles/legend/SAL_SA_2013copy_1_15.png" /> O<br />\
    <img src="styles/legend/SAL_SA_2013copy_1_16.png" /> P<br />\
    <img src="styles/legend/SAL_SA_2013copy_1_17.png" /> S<br />\
    <img src="styles/legend/SAL_SA_2013copy_1_18.png" /> <br />'
        });var format_Provincialshapefile_2 = new ol.format.GeoJSON();
var features_Provincialshapefile_2 = format_Provincialshapefile_2.readFeatures(json_Provincialshapefile_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Provincialshapefile_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Provincialshapefile_2.addFeatures(features_Provincialshapefile_2);var lyr_Provincialshapefile_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Provincialshapefile_2, 
                style: style_Provincialshapefile_2,
                title: '<img src="styles/legend/Provincialshapefile_2.png" /> Provincial shapefile'
            });var format_SampledSALScsv_3 = new ol.format.GeoJSON();
var features_SampledSALScsv_3 = format_SampledSALScsv_3.readFeatures(json_SampledSALScsv_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SampledSALScsv_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_SampledSALScsv_3.addFeatures(features_SampledSALScsv_3);var lyr_SampledSALScsv_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SampledSALScsv_3, 
                style: style_SampledSALScsv_3,
    title: 'Sampled SALS csv<br />\
    <img src="styles/legend/SampledSALScsv_3_0.png" /> A<br />\
    <img src="styles/legend/SampledSALScsv_3_1.png" /> B<br />\
    <img src="styles/legend/SampledSALScsv_3_2.png" /> C<br />\
    <img src="styles/legend/SampledSALScsv_3_3.png" /> D<br />\
    <img src="styles/legend/SampledSALScsv_3_4.png" /> E<br />\
    <img src="styles/legend/SampledSALScsv_3_5.png" /> F<br />\
    <img src="styles/legend/SampledSALScsv_3_6.png" /> G<br />\
    <img src="styles/legend/SampledSALScsv_3_7.png" /> H<br />\
    <img src="styles/legend/SampledSALScsv_3_8.png" /> I<br />\
    <img src="styles/legend/SampledSALScsv_3_9.png" /> J<br />\
    <img src="styles/legend/SampledSALScsv_3_10.png" /> K<br />\
    <img src="styles/legend/SampledSALScsv_3_11.png" /> L<br />\
    <img src="styles/legend/SampledSALScsv_3_12.png" /> M<br />\
    <img src="styles/legend/SampledSALScsv_3_13.png" /> O<br />\
    <img src="styles/legend/SampledSALScsv_3_14.png" /> S<br />\
    <img src="styles/legend/SampledSALScsv_3_15.png" /> <br />'
        });

lyr_GoogleRoad_0.setVisible(true);lyr_SAL_SA_2013copy_1.setVisible(true);lyr_Provincialshapefile_2.setVisible(true);lyr_SampledSALScsv_3.setVisible(true);
var layersList = [lyr_GoogleRoad_0,lyr_SAL_SA_2013copy_1,lyr_Provincialshapefile_2,lyr_SampledSALScsv_3];
lyr_SAL_SA_2013copy_1.set('fieldAliases', {'SAL_CODE': 'SAL_CODE', 'SAL_CODE_s': 'SAL_CODE_s', 'SP_CODE': 'SP_CODE', 'SP_CODE_st': 'SP_CODE_st', 'SP_NAME': 'SP_NAME', 'MP_CODE': 'MP_CODE', 'MP_CODE_st': 'MP_CODE_st', 'MP_NAME': 'MP_NAME', 'MN_MDB_C': 'MN_MDB_C', 'MN_CODE': 'MN_CODE', 'MN_CODE_st': 'MN_CODE_st', 'MN_NAME': 'MN_NAME', 'DC_MDB_C': 'DC_MDB_C', 'DC_MN_C': 'DC_MN_C', 'DC_MN_C_st': 'DC_MN_C_st', 'DC_NAME': 'DC_NAME', 'PR_MDB_C': 'PR_MDB_C', 'PR_CODE': 'PR_CODE', 'PR_CODE_st': 'PR_CODE_st', 'PR_NAME': 'PR_NAME', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'SAL shapefile centroid_Cluster_group': 'SAL shapefile centroid_Cluster_group', });
lyr_Provincialshapefile_2.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'ADM1_EN': 'ADM1_EN', 'ADM1_PCODE': 'ADM1_PCODE', 'ADM1_REF': 'ADM1_REF', 'ADM1ALT1EN': 'ADM1ALT1EN', 'ADM1ALT2EN': 'ADM1ALT2EN', 'ADM0_EN': 'ADM0_EN', 'ADM0_PCODE': 'ADM0_PCODE', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', 'ADM1_ID': 'ADM1_ID', });
lyr_SampledSALScsv_3.set('fieldAliases', {'SAL_CODE': 'SAL_CODE', 'SAL_CODE_s': 'SAL_CODE_s', 'SP_CODE': 'SP_CODE', 'SP_CODE_st': 'SP_CODE_st', 'SP_NAME': 'SP_NAME', 'MP_CODE': 'MP_CODE', 'MP_CODE_st': 'MP_CODE_st', 'MP_NAME': 'MP_NAME', 'MN_MDB_C': 'MN_MDB_C', 'MN_CODE': 'MN_CODE', 'MN_CODE_st': 'MN_CODE_st', 'MN_NAME': 'MN_NAME', 'DC_MDB_C': 'DC_MDB_C', 'DC_MN_C': 'DC_MN_C', 'DC_MN_C_st': 'DC_MN_C_st', 'DC_NAME': 'DC_NAME', 'PR_MDB_C': 'PR_MDB_C', 'PR_CODE': 'PR_CODE', 'PR_CODE_st': 'PR_CODE_st', 'PR_NAME': 'PR_NAME', 'Shape_Leng': 'Shape_Leng', 'population': 'population', 'Households': 'Households', 'urban/rural': 'urban/rural', '15-17': '15-17', '18-24 years': '18-24 years', '25-34 years': '25-34 years', '35-49': '35-49', '50-64 years': '50-64 years', '65+': '65+', 'Shape_Area': 'Shape_Area', 'LAT(y)': 'LAT(y)', 'Long(X)': 'Long(X)', 'WardNumber': 'WardNumber', 'Cluster': 'Cluster', 'Cluster_group': 'Cluster_group', 'WardNumber_1': 'WardNumber_1', 'OBJECTID': 'OBJECTID', 'ProvinceCo': 'ProvinceCo', 'ProvinceNa': 'ProvinceNa', 'LocalMunic': 'LocalMunic', 'WardNumber original': 'WardNumber original', 'random number': 'random number', 'Ranked': 'Ranked', 'sampled': 'sampled', 'WardID': 'WardID', 'LocalMun_1': 'LocalMun_1', 'DistrictMu': 'DistrictMu', 'District_1': 'District_1', 'Year': 'Year', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', 'Area': 'Area', });
lyr_SAL_SA_2013copy_1.set('fieldImages', {'SAL_CODE': 'TextEdit', 'SAL_CODE_s': 'TextEdit', 'SP_CODE': 'TextEdit', 'SP_CODE_st': 'TextEdit', 'SP_NAME': 'TextEdit', 'MP_CODE': 'TextEdit', 'MP_CODE_st': 'TextEdit', 'MP_NAME': 'TextEdit', 'MN_MDB_C': 'TextEdit', 'MN_CODE': 'TextEdit', 'MN_CODE_st': 'TextEdit', 'MN_NAME': 'TextEdit', 'DC_MDB_C': 'TextEdit', 'DC_MN_C': 'TextEdit', 'DC_MN_C_st': 'TextEdit', 'DC_NAME': 'TextEdit', 'PR_MDB_C': 'TextEdit', 'PR_CODE': 'TextEdit', 'PR_CODE_st': 'TextEdit', 'PR_NAME': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'SAL shapefile centroid_Cluster_group': 'TextEdit', });
lyr_Provincialshapefile_2.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'ADM1_EN': 'TextEdit', 'ADM1_PCODE': 'TextEdit', 'ADM1_REF': 'TextEdit', 'ADM1ALT1EN': 'TextEdit', 'ADM1ALT2EN': 'TextEdit', 'ADM0_EN': 'TextEdit', 'ADM0_PCODE': 'TextEdit', 'date': 'TextEdit', 'validOn': 'TextEdit', 'validTo': 'TextEdit', 'ADM1_ID': 'TextEdit', });
lyr_SampledSALScsv_3.set('fieldImages', {'SAL_CODE': 'TextEdit', 'SAL_CODE_s': 'TextEdit', 'SP_CODE': 'TextEdit', 'SP_CODE_st': 'TextEdit', 'SP_NAME': 'TextEdit', 'MP_CODE': 'TextEdit', 'MP_CODE_st': 'TextEdit', 'MP_NAME': 'TextEdit', 'MN_MDB_C': 'TextEdit', 'MN_CODE': 'TextEdit', 'MN_CODE_st': 'TextEdit', 'MN_NAME': 'TextEdit', 'DC_MDB_C': 'TextEdit', 'DC_MN_C': 'TextEdit', 'DC_MN_C_st': 'TextEdit', 'DC_NAME': 'TextEdit', 'PR_MDB_C': 'TextEdit', 'PR_CODE': 'TextEdit', 'PR_CODE_st': 'TextEdit', 'PR_NAME': 'TextEdit', 'Shape_Leng': 'TextEdit', 'population': 'TextEdit', 'Households': 'TextEdit', 'urban/rural': 'TextEdit', '15-17': 'TextEdit', '18-24 years': 'TextEdit', '25-34 years': 'TextEdit', '35-49': 'TextEdit', '50-64 years': 'TextEdit', '65+': 'TextEdit', 'Shape_Area': 'TextEdit', 'LAT(y)': 'TextEdit', 'Long(X)': 'TextEdit', 'WardNumber': 'TextEdit', 'Cluster': 'TextEdit', 'Cluster_group': 'TextEdit', 'WardNumber_1': 'TextEdit', 'OBJECTID': 'TextEdit', 'ProvinceCo': 'TextEdit', 'ProvinceNa': 'TextEdit', 'LocalMunic': 'TextEdit', 'WardNumber original': 'TextEdit', 'random number': 'TextEdit', 'Ranked': 'TextEdit', 'sampled': 'TextEdit', 'WardID': 'TextEdit', 'LocalMun_1': 'TextEdit', 'DistrictMu': 'TextEdit', 'District_1': 'TextEdit', 'Year': 'TextEdit', 'Shape__Are': 'TextEdit', 'Shape__Len': 'TextEdit', 'Area': 'TextEdit', });
lyr_SAL_SA_2013copy_1.set('fieldLabels', {'SAL_CODE': 'no label', 'SAL_CODE_s': 'no label', 'SP_CODE': 'no label', 'SP_CODE_st': 'no label', 'SP_NAME': 'no label', 'MP_CODE': 'no label', 'MP_CODE_st': 'no label', 'MP_NAME': 'no label', 'MN_MDB_C': 'no label', 'MN_CODE': 'no label', 'MN_CODE_st': 'no label', 'MN_NAME': 'no label', 'DC_MDB_C': 'no label', 'DC_MN_C': 'no label', 'DC_MN_C_st': 'no label', 'DC_NAME': 'no label', 'PR_MDB_C': 'no label', 'PR_CODE': 'no label', 'PR_CODE_st': 'no label', 'PR_NAME': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'SAL shapefile centroid_Cluster_group': 'no label', });
lyr_Provincialshapefile_2.set('fieldLabels', {'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'ADM1_EN': 'no label', 'ADM1_PCODE': 'no label', 'ADM1_REF': 'no label', 'ADM1ALT1EN': 'no label', 'ADM1ALT2EN': 'no label', 'ADM0_EN': 'no label', 'ADM0_PCODE': 'no label', 'date': 'no label', 'validOn': 'no label', 'validTo': 'no label', 'ADM1_ID': 'no label', });
lyr_SampledSALScsv_3.set('fieldLabels', {'SAL_CODE': 'no label', 'SAL_CODE_s': 'no label', 'SP_CODE': 'no label', 'SP_CODE_st': 'no label', 'SP_NAME': 'no label', 'MP_CODE': 'no label', 'MP_CODE_st': 'no label', 'MP_NAME': 'no label', 'MN_MDB_C': 'no label', 'MN_CODE': 'no label', 'MN_CODE_st': 'no label', 'MN_NAME': 'no label', 'DC_MDB_C': 'no label', 'DC_MN_C': 'no label', 'DC_MN_C_st': 'no label', 'DC_NAME': 'no label', 'PR_MDB_C': 'no label', 'PR_CODE': 'no label', 'PR_CODE_st': 'no label', 'PR_NAME': 'no label', 'Shape_Leng': 'no label', 'population': 'no label', 'Households': 'no label', 'urban/rural': 'no label', '15-17': 'no label', '18-24 years': 'no label', '25-34 years': 'no label', '35-49': 'no label', '50-64 years': 'no label', '65+': 'no label', 'Shape_Area': 'no label', 'LAT(y)': 'no label', 'Long(X)': 'no label', 'WardNumber': 'no label', 'Cluster': 'no label', 'Cluster_group': 'no label', 'WardNumber_1': 'no label', 'OBJECTID': 'no label', 'ProvinceCo': 'no label', 'ProvinceNa': 'no label', 'LocalMunic': 'no label', 'WardNumber original': 'no label', 'random number': 'no label', 'Ranked': 'no label', 'sampled': 'no label', 'WardID': 'no label', 'LocalMun_1': 'no label', 'DistrictMu': 'no label', 'District_1': 'no label', 'Year': 'no label', 'Shape__Are': 'no label', 'Shape__Len': 'no label', 'Area': 'no label', });
lyr_SampledSALScsv_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});