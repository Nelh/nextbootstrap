(function () {
    $(document).ready(function () {
        $('.datatable').DataTable();
        // tiles circle Charts
        var gauge1, svgg1 = document.getElementById("gauge1");
        svgg1 && (gauge1 = Gauge(svgg1, {
            max: 100,
            dialStartAngle: -90,
            dialEndAngle: -90.001,
            value: 100,
            label: function (e) {
                return Math.round(100 * e) / 100
            },
            color: function (e) {
                return e < 20 ? base.primaryColor : e < 40 ? base.successColor : e < 60 ? base.warningColor : base.dangerColor
            }
        }), function e() {
            gauge1.setValue(90), gauge1.setValueAnimated(40, 1), window.setTimeout(e, 6e3)
        }());

        var gauge2, svgg2 = document.getElementById("gauge2");
        svgg2 && (gauge2 = Gauge(svgg2, {
            max: 100,
            value: 46,
            dialStartAngle: -0,
            dialEndAngle: -90.001
        }), function e() {
            gauge2.setValue(40), gauge2.setValueAnimated(30, 1), window.setTimeout(e, 6e3)
        }());

        var gauge3, svgg3 = document.getElementById("gauge3");
        svgg3 && (gauge3 = Gauge(svgg3, {
            max: 100,
            dialStartAngle: -90,
            dialEndAngle: -90.001,
            value: 80,
            label: function (e) {
                return Math.round(100 * e) / 100
            }
        }), function e() {
            gauge3.setValue(40), gauge3.setValueAnimated(30, 1), window.setTimeout(e, 6e3)
        }());

        var gauge4, svgg4 = document.getElementById("gauge4");
        svgg4 && (gauge4 = Gauge(svgg4, {
            max: 500,
            dialStartAngle: 90,
            dialEndAngle: 0,
            value: 50,
            label: function (e) {
                return Math.round(100 * e) / 100
            }
        }), function e() {
            gauge4.setValue(40), gauge4.setValueAnimated(30, 1), window.setTimeout(e, 6e3)
        }());
    });
})()
