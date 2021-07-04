"use strict";
var base = {
        defaultFontFamily: "Overpass, sans-serif",
        primaryColor: "#1e272e",
        secondaryColor: "#0f9aee",
        successColor: "#2ecc71",
        warningColor: "#e67e22",
        infoColor: "#8e44ad",
        dangerColor: "#df3670",
        darkColor: "#343a40",
        lightColor: "#f2f3f6"
    },
    extend = {
        primaryColorLight: tinycolor(base.primaryColor).lighten(10).toString(),
        primaryColorLighter: tinycolor(base.primaryColor).lighten(30).toString(),
        primaryColorDark: tinycolor(base.primaryColor).darken(2).toString(),
        primaryColorDarker: tinycolor(base.primaryColor).darken(5).toString()
    },
    chartColors = [base.primaryColor, base.successColor, "#6f42c1", extend.primaryColorLighter],
    colors = {
        bodyColor: "#6c757d",
        headingColor: "#495057",
        borderColor: "#e9ecef",
        backgroundColor: "#f8f9fa",
        mutedColor: "#adb5bd",
        chartTheme: "light"
    },
    darkColor = {
        bodyColor: "#adb5bd",
        headingColor: "#e9ecef",
        borderColor: "#212529",
        backgroundColor: "#495057",
        mutedColor: "#adb5bd",
        chartTheme: "dark"
    };