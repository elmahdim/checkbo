/*
 * checkBo lightweight jQuery plugin v0.1.0 by  @ElmahdiMahmoud
 * Licensed under the MIT license - https://github.com/elmahdim/checkbo/blob/master/LICENSE
 *
 * Custom checkbox and radio
 * Author URL: elmahdim.com
 */
(function (b, q, r, s) {
    b.fn.checkBo = function (c) {
        c = b.extend({}, {
            checkAllButton: null,
            checkAllTarget: null
        }, c);
        return this.each(function () {
            function f(a) {
                this.input = a
            }
            function k() {
                var a = b(this).is(":checked");
                b(this).closest("label").toggleClass("checked", a)
            }
            var d = b(this),
                g = d.find(".cb-checkbox"),
                h = d.find(".cb-radio"),
                l = g.find("input:checkbox"),
                m = h.find("input:radio");
            l.wrap("<span><i></i></span>");
            m.wrap("<span><i></i></span>");
            var n = new f("input:checkbox"),
                p = new f("input:radio");
            f.prototype.checkbox = function (a) {
                var b = a.find(this.input).is(":checked");
                a.find(this.input).prop("checked", !b).trigger("change")
            };
            f.prototype.radiobtn = function (a, c) {
                a.parent().find('input:radio[name="' + c + '"]').each(function () {
                    var a = b(this);
                    a.prop("checked", !1);
                    a.closest(a.closest(h)).removeClass("checked")
                });
                a.addClass("checked");
                a.find(this.input).get(0).checked = a.hasClass("checked");
                a.find(this.input).change()
            };
            l.on("change", k);
            m.on("change", k);
            g.on("click", function (a) {
                a.preventDefault();
                n.checkbox(b(this))
            });
            h.on("click", function (a) {
                a.preventDefault();
                p.radiobtn(b(this), b(this).find("input:radio").attr("name"))
            });
            if (c.checkAllButton && c.checkAllTarget) {
                var e = b(this);
                e.find(b(c.checkAllButton)).on("click", function () {
                    e.find(c.checkAllTarget).find("input:checkbox").each(function () {
                        var a = b(this);
                        e.find(b(c.checkAllButton)).hasClass("checked") ? a.prop("checked", !0).change() : a.prop("checked", !1).change()
                    });
                    return !1
                });
                e.find(c.checkAllTarget).find(g).each(function () {
                    b(this).on("click", function () {
                        e.find(c.checkAllButton).find("input:checkbox").prop("checked", !1).change().removeClass("checked")
                    })
                })
            }
            d.find('[checked="checked"]').closest("label").addClass("checked");
            d.find("input").is("input:disabled") && d.find("input:disabled").closest("label").off().addClass("disabled")
        })
    }
})(jQuery, window, document);