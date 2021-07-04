"use strict";
var series, dataset, onlyValues, minValue, maxValue, paletteScale, mapWorld, zoomOpts, mapbox = document.getElementById("dataMapWorld");
mapbox && (dataset = {}, onlyValues = (series = [
    ["AUS", 50],
    ["FRA", 77],
    ["SWZ", 58],
    ["USA", 26],
    ["RUS", 46]
]).map(function (e) {
    return e[1]
}), minValue = Math.min.apply(null, onlyValues), maxValue = Math.max.apply(null, onlyValues), paletteScale = d3.scale.linear().domain([minValue, maxValue]).range([extend.primaryColorDarker, extend.primaryColorLight]), series.forEach(function (e) {
    var o = e[0],
        r = e[1];
    dataset[o] = {
        numberOfThings: r,
        fillColor: paletteScale(r)
    }
}), mapWorld = new Datamap({
    element: mapbox,
    projection: "mercator",
    setProjection: function (e) {
        var o = d3.geo.mercator().center([12, 30]).scale(120);
        return {
            path: d3.geo.path().projection(o),
            projection: o
        }
    },
    fills: {
        defaultFill: colors.mutedColor
    },
    data: dataset,
    responsive: !0,
    aspectRatio: .45,
    geographyConfig: {
        borderColor: colors.backgroundColor,
        highlightBorderWidth: 1,
        highlightFillColor: function (e) {
            return e.fillColor || base.primaryColor
        },
        highlightBorderColor: base.primaryColorLighter,
        popupTemplate: function (e, o) {
            if (o) return ['<div class="hoverinfo">', "<strong>", e.properties.name, "</strong>", "<br>Count: <strong>", o.numberOfThings, "</strong>", "</div>"].join("")
        }
    }
}), zoomOpts = {
    scaleFactor: 1,
    center: {
        lat: "12",
        lng: "30"
    },
    transition: {
        duration: 1e3
    }
}, mapWorld.zoomto(zoomOpts), window.addEventListener("resize", function () {
    mapWorld.resize(), mapWorld.zoomto(zoomOpts)
}));

var mapUSA, mapUSABox = document.getElementById("dataMapUSA");
mapUSABox && (mapUSA = new Datamap({
    element: mapUSABox,
    scope: "usa",
    responsive: !0,
    aspectRatio: .45,
    data: {
        CA: {
            fillKey: "MEDIUM"
        },
        TX: {
            fillKey: "HIGH"
        },
        WA: {
            fillKey: "HIGH"
        },
        OK: {
            fillKey: "MEDIUM"
        },
        NC: {
            fillKey: "MEDIUM"
        },
        IN: {
            fillKey: "LOW"
        },
        IL: {
            fillKey: "LOW"
        },
        MT: {
            fillKey: "HIGH"
        }
    },
    fills: {
        HIGH: base.primaryColorLight,
        MEDIUM: base.primaryColor,
        LOW: base.primaryColorDark,
        defaultFill: colors.mutedColor
    },
    geographyConfig: {
        borderColor: colors.borderColor,
        highlightBorderWidth: 1
    }
}), window.addEventListener("resize", function () {
    mapUSA.resize()
}));
