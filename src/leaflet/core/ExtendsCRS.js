var L = require("leaflet");
L.CRS.BaiduCRS = L.extend({}, L.CRS.EPSG3857, {

    code: 'BaiduCRS',
    scale: function (zoom) {
        return (6378137 * Math.PI * 2) / Math.pow(2, 18 - zoom)
    },

    transformation: (function () {
        var scale = 0.5 / (Math.PI * 6378137);
        return new L.Transformation(scale, 0, -scale, 0);
    }())
});

var tdt_WGS84_resolutions = [];

for (var i = 0; i < 20; i++) {
    tdt_WGS84_resolutions.push(0.703125 * 2 / (Math.pow(2, i)));
}

L.CRS.TianDiTu_WGS84 = new L.Proj.CRS("EPSG:4326", '', {
    origin: [-180, 90],
    resolutions: tdt_WGS84_resolutions,
    bounds: L.bounds([-180, -90], [180, 90])
});

var tdt_Mercator_resolutions = [];
for (var i = 0; i < 20; i++) {
    tdt_Mercator_resolutions.push(78271.5169640203125 * 2 / (Math.pow(2, i)));
}

L.CRS.TianDiTu_Mercator = new L.Proj.CRS("EPSG:3857", '', {
    origin: [-20037508.3427892, 20037508.3427892],
    resolutions: tdt_Mercator_resolutions,
    bounds: L.bounds([-20037508.3427892, -20037508.3427892], [20037508.3427892, 20037508.3427892])
});