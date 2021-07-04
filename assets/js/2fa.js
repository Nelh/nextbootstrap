$(document).ready(function () {
    var o = $(".digits input"),
        k = [8, 13, 37, 39, 46];

    o.each(function (i, item) {

        $(item).on("input", function (a) {
            console.log(a, i, o.length);
            if ((i + 1) < o.length) {
                o[i + 1].focus();
            }
            return false;
        });

        $(item).on("keydown", function (a) {
            var b = a.which || a.keyCode;
            if ($.inArray(b, k) !== -1) {
                a.preventDefault();
                if (b === 8) {
                    if ($(this).val()) {
                        $(this).val("")
                    } else {
                        if (i > 0) {
                            o[i - 1].focus();
                        }
                    }
                } else {
                    if (b === 37) {
                        o[i - 1].focus();
                    } else {
                        if (b === 39) {
                            o[i + 1].focus();
                        } else {
                            if (b === 46 && $(this).val()) {
                                $(this).val("");
                                console.log.length(a);
                            }
                        }
                    }
                }
                return false
            }

        });
    });

    o.on("keypress", function (b) {
        var c = b.which || b.keyCode;
        if (c < 48 || c > 57) {
            var a = b.ctrlKey || b.metaKey;
            if ((!a && c != 9) || (a && c === 122)) {
                b.preventDefault();
                return false
            }
        }
    });

    o.on("paste", function (a) {
        var f = a && a.originalEvent ? a.originalEvent : a,
            e = /^[0-9]+$/,
            g;
        a.preventDefault();
        if (f.clipboardData && f.clipboardData.getData) {
            g = f.clipboardData.getData("text/plain").replace("-", "").replace(" ", "")
        } else {
            if (window.clipboardData && window.clipboardData.getData) {
                g = window.clipboardData.getData("text").replace("-", "").replace(" ", "")
            }
        }
        if (g && g.match(e)) {
            var d = o.length,
                c = 0;
            g = g.substr(0, d - c).split("");
            for (var b = 0; b < g.length; b++) {
                o.eq(b + c).val(g[b])
            }
            if ((c + g.length) < d) {
                o.eq((c + g.length)).focus().select()
            } else {
                o.eq((d - 1)).focus()
            }
        }
        return false
    });

});