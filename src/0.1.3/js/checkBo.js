/*
 * checkBo lightweight jQuery plugin v0.1.3 by  @ElmahdiMahmoud
 * Licensed under the MIT license - https://github.com/elmahdim/checkbo/blob/master/LICENSE
 *
 * Custom checkbox and radio
 * Author URL: elmahdim.com
 */
(function (b, s, t, u) {
    b.fn.checkBo = function (c) {
        c = b.extend({}, {
            checkAllButton: null,
            checkAllTarget: null,
            checkAllTextDefault: null,
            checkAllTextToggle: null
        }, c);
        return this.each(function () {
            function g(a) {
                this.input = a
            }
            function k() {
                var a = b(this).is(":checked");
                b(this).closest("label").toggleClass("checked", a)
            }
            function l(a, b, c) {
                a.parent(e).hasClass("checked") ? a.text(c) : a.text(b)
            }
            function m(a) {
                var c = a.attr("data-show");
                a = a.attr("data-hide");
                b(c).removeClass("is-hidden");
                b(a).addClass("is-hidden")
            }
            var f = b(this),
                e = f.find(".cb-checkbox"),
                h = f.find(".cb-radio"),
                n = e.find("input:checkbox"),
                p = h.find("input:radio");
            n.wrap('<span class="cb-inner"><i></i></span>');
            p.wrap('<span class="cb-inner"><i></i></span>');
            var q = new g("input:checkbox"),
                r = new g("input:radio");
            g.prototype.checkbox = function (a) {
                var b = a.find(this.input).is(":checked");
                a.find(this.input).prop("checked", !b).trigger("change")
            };
            g.prototype.radiobtn = function (a, c) {
                var d = b('input:radio[name="' + c + '"]');
                d.prop("checked", !1);
                d.closest(d.closest(h)).removeClass("checked");
                a.addClass("checked");
                a.find(this.input).get(0).checked = a.hasClass("checked");
                a.find(this.input).change()
            };
            n.on("change", k);
            p.on("change", k);
            e.find("a").on("click", function (a) {
                a.stopPropagation()
            });
            e.on("click", function (a) {
                a.preventDefault();
                q.checkbox(b(this));
                a = b(this).attr("data-toggle");
                b(a).toggleClass("is-hidden");
                m(b(this))
            });
            h.on("click", function (a) {
                a.preventDefault();
                r.radiobtn(b(this), b(this).find("input:radio").attr("name"));
                m(b(this))
            });
            if (c.checkAllButton && c.checkAllTarget) {
                var d = b(this);
                d.find(b(c.checkAllButton)).on("click", function () {
                    d.find(c.checkAllTarget).find("input:checkbox").each(function () {
                        d.find(b(c.checkAllButton)).hasClass("checked") ? d.find(c.checkAllTarget).find("input:checkbox").prop("checked", !0).change() : d.find(c.checkAllTarget).find("input:checkbox").prop("checked", !1).change()
                    });
                    l(d.find(b(c.checkAllButton)).find(".toggle-text"), c.checkAllTextDefault, c.checkAllTextToggle)
                });
                d.find(c.checkAllTarget).find(e).on("click", function () {
                    d.find(c.checkAllButton).find("input:checkbox").prop("checked", !1).change().removeClass("checked");
                    l(d.find(b(c.checkAllButton)).find(".toggle-text"), c.checkAllTextDefault, c.checkAllTextToggle)
                })
            }
            f.find('[checked="checked"]').closest("label").addClass("checked");
            f.find("input").is("input:disabled") && f.find("input:disabled").closest("label").off().addClass("disabled")
        })
    }
})(jQuery, window, document);