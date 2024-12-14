var wms_layers = [];


        var lyr__0 = new ol.layer.Tile({
            'title': '地理院地図',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png'
            })
        });
var format__1 = new ol.format.GeoJSON();
var features__1 = format__1.readFeatures(json__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1.addFeatures(features__1);
var lyr__1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__1, 
                style: style__1,
                popuplayertitle: '本星崎村',
                interactive: true,
                title: '<img src="styles/legend/_1.png" /> 本星崎村'
            });
var format__2 = new ol.format.GeoJSON();
var features__2 = format__2.readFeatures(json__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__2.addFeatures(features__2);
var lyr__2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__2, 
                style: style__2,
                popuplayertitle: '前浜村',
                interactive: true,
                title: '<img src="styles/legend/_2.png" /> 前浜村'
            });
var format__3 = new ol.format.GeoJSON();
var features__3 = format__3.readFeatures(json__3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__3.addFeatures(features__3);
var lyr__3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__3, 
                style: style__3,
                popuplayertitle: '千竃村',
                interactive: true,
                title: '<img src="styles/legend/_3.png" /> 千竃村'
            });

lyr__0.setVisible(true);lyr__1.setVisible(true);lyr__2.setVisible(true);lyr__3.setVisible(true);
var layersList = [lyr__0,lyr__1,lyr__2,lyr__3];
lyr__1.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'id': 'id', '小字': '小字', 'layer': 'layer', 'path': 'path', });
lyr__2.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'id': 'id', '小字': '小字', 'layer': 'layer', 'path': 'path', });
lyr__3.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'id': 'id', '小字': '小字', '筆ID': '筆ID', 'version': 'version', '座標系': '座標系', '測地系判別': '測地系判別', '地図名': '地図名', '地図番号': '地図番号', '縮尺分母': '縮尺分母', '地図種類': '地図種類', '地図分類': '地図分類', '市区町村コード': '市区町村コード', '市区町村名': '市区町村名', '大字コード': '大字コード', '丁目コード': '丁目コード', '小字コード': '小字コード', '予備コード': '予備コード', '大字名': '大字名', '丁目名': '丁目名', '小字名': '小字名', '予備名': '予備名', '地番': '地番', '精度区分': '精度区分', '座標値種別': '座標値種別', '筆界未定構成筆': '筆界未定構成筆', '代表点緯度': '代表点緯度', '代表点経度': '代表点経度', 'layer': 'layer', 'path': 'path', });
lyr__1.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'id': 'TextEdit', '小字': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr__2.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'id': 'TextEdit', '小字': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr__3.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'id': 'TextEdit', '小字': 'TextEdit', '筆ID': 'TextEdit', 'version': 'TextEdit', '座標系': 'TextEdit', '測地系判別': 'TextEdit', '地図名': 'TextEdit', '地図番号': 'TextEdit', '縮尺分母': 'TextEdit', '地図種類': 'TextEdit', '地図分類': 'TextEdit', '市区町村コード': 'TextEdit', '市区町村名': 'TextEdit', '大字コード': 'TextEdit', '丁目コード': 'TextEdit', '小字コード': 'TextEdit', '予備コード': 'TextEdit', '大字名': 'TextEdit', '丁目名': 'TextEdit', '小字名': 'TextEdit', '予備名': 'TextEdit', '地番': 'TextEdit', '精度区分': 'TextEdit', '座標値種別': 'TextEdit', '筆界未定構成筆': 'TextEdit', '代表点緯度': 'TextEdit', '代表点経度': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr__1.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'id': 'no label', '小字': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr__2.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'id': 'no label', '小字': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr__3.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'id': 'no label', '小字': 'no label', '筆ID': 'no label', 'version': 'no label', '座標系': 'no label', '測地系判別': 'no label', '地図名': 'no label', '地図番号': 'no label', '縮尺分母': 'no label', '地図種類': 'no label', '地図分類': 'no label', '市区町村コード': 'no label', '市区町村名': 'no label', '大字コード': 'no label', '丁目コード': 'no label', '小字コード': 'no label', '予備コード': 'no label', '大字名': 'no label', '丁目名': 'no label', '小字名': 'no label', '予備名': 'no label', '地番': 'no label', '精度区分': 'no label', '座標値種別': 'no label', '筆界未定構成筆': 'no label', '代表点緯度': 'no label', '代表点経度': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr__3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});