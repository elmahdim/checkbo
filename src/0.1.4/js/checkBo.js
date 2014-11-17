/*
 * checkBo lightweight jQuery plugin v0.1.4 by  @ElmahdiMahmoud
 * Licensed under the MIT license - https://github.com/elmahdim/checkbo/blob/master/LICENSE
 *
 * Custom checkbox and radio
 * Author URL: elmahdim.com
 */
(function (b, t, u, v) {
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
                a.parent(f).hasClass("checked") ? a.text(c) : a.text(b)
            }
            function m(a) {
                var c = a.attr("data-show");
                a = a.attr("data-hide");
                b(c).removeClass("is-hidden");
                b(a).addClass("is-hidden")
            }
            var e = b(this),
                f = e.find(".cb-checkbox"),
                h = e.find(".cb-radio"),
                n = e.find(".cb-switcher"),
                p = f.find("input:checkbox"),
                q = h.find("input:radio");
            p.wrap('<span class="cb-inner"><i></i></span>');
            q.wrap('<span class="cb-inner"><i></i></span>');
            var r = new g("input:checkbox"),
                s = new g("input:radio");
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
            p.on("change", k);
            q.on("change", k);
            f.find("a").on("click", function (a) {
                a.stopPropagation()
            });
            f.on("click", function (a) {
                a.preventDefault();
                r.checkbox(b(this));
                a = b(this).attr("data-toggle");
                b(a).toggleClass("is-hidden");
                m(b(this))
            });
            h.on("click", function (a) {
                a.preventDefault();
                s.radiobtn(b(this), b(this).find("input:radio").attr("name"));
                m(b(this))
            });
            b.fn.toggleCheckbox = function () {
                this.prop("checked", !this.is(":checked"))
            };
            b.fn.switcherChecker = function () {
                var a = b(this),
                    c = a.find("input"),
                    d = a.find(".cb-state");
                c.is(":checked") ? (a.addClass("checked"), d.html(c.attr("data-state-on"))) : (a.removeClass("checked"), d.html(c.attr("data-state-off")))
            };
            n.on("click", function (a) {
                a.preventDefault();
                a = b(this);
                a.find("input").toggleCheckbox();
                a.switcherChecker();
                b(a.attr("data-toggle")).toggleClass("is-hidden")
            });
            n.each(function () {
                b(this).switcherChecker()
            });
            if (c.checkAllButton && c.checkAllTarget) {
                var d = b(this);
                d.find(b(c.checkAllButton)).on("click", function () {
                    d.find(c.checkAllTarget).find("input:checkbox").each(function () {
                        d.find(b(c.checkAllButton)).hasClass("checked") ? d.find(c.checkAllTarget).find("input:checkbox").prop("checked", !0).change() : d.find(c.checkAllTarget).find("input:checkbox").prop("checked", !1).change()
                    });
                    l(d.find(b(c.checkAllButton)).find(".toggle-text"), c.checkAllTextDefault, c.checkAllTextToggle)
                });
                d.find(c.checkAllTarget).find(f).on("click", function () {
                    d.find(c.checkAllButton).find("input:checkbox").prop("checked", !1).change().removeClass("checked");
                    l(d.find(b(c.checkAllButton)).find(".toggle-text"), c.checkAllTextDefault, c.checkAllTextToggle)
                })
            }
            e.find('[checked="checked"]').closest("label").addClass("checked");
            e.find("input").is("input:disabled") && e.find("input:disabled").closest("label").off().addClass("disabled")
        })
    }
})(jQuery, window, document);