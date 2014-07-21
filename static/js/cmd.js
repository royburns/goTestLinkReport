! function (t, e) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function (t) {
        if (!t.document) throw new Error("jQuery requires a window with a document");
        return e(t)
    } : e(t)
}("undefined" != typeof window ? window : this, function (t, e) {
    function n(t) {
        var e = t.length,
            n = te.type(t);
        return "function" === n || te.isWindow(t) ? !1 : 1 === t.nodeType && e ? !0 : "array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t
    }

    function r(t, e, n) {
        if (te.isFunction(e)) return te.grep(t, function (t, r) {
            return !!e.call(t, r, t) !== n
        });
        if (e.nodeType) return te.grep(t, function (t) {
            return t === e !== n
        });
        if ("string" == typeof e) {
            if (se.test(e)) return te.filter(e, t, n);
            e = te.filter(e, t)
        }
        return te.grep(t, function (t) {
            return U.call(e, t) >= 0 !== n
        })
    }

    function i(t, e) {
        for (;
            (t = t[e]) && 1 !== t.nodeType;);
        return t
    }

    function o(t) {
        var e = de[t] = {};
        return te.each(t.match(he) || [], function (t, n) {
            e[n] = !0
        }), e
    }

    function a() {
        J.removeEventListener("DOMContentLoaded", a, !1), t.removeEventListener("load", a, !1), te.ready()
    }

    function s() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function () {
                return {}
            }
        }), this.expando = te.expando + Math.random()
    }

    function l(t, e, n) {
        var r;
        if (void 0 === n && 1 === t.nodeType)
            if (r = "data-" + e.replace(be, "-$1").toLowerCase(), n = t.getAttribute(r), "string" == typeof n) {
                try {
                    n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : Fe.test(n) ? te.parseJSON(n) : n
                } catch (i) {}
                ye.set(t, e, n)
            } else n = void 0;
        return n
    }

    function u() {
        return !0
    }

    function c() {
        return !1
    }

    function f() {
        try {
            return J.activeElement
        } catch (t) {}
    }

    function p(t, e) {
        return te.nodeName(t, "table") && te.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
    }

    function h(t) {
        return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
    }

    function d(t) {
        var e = Pe.exec(t.type);
        return e ? t.type = e[1] : t.removeAttribute("type"), t
    }

    function g(t, e) {
        for (var n = 0, r = t.length; r > n; n++) ve.set(t[n], "globalEval", !e || ve.get(e[n], "globalEval"))
    }

    function m(t, e) {
        var n, r, i, o, a, s, l, u;
        if (1 === e.nodeType) {
            if (ve.hasData(t) && (o = ve.access(t), a = ve.set(e, o), u = o.events)) {
                delete a.handle, a.events = {};
                for (i in u)
                    for (n = 0, r = u[i].length; r > n; n++) te.event.add(e, i, u[i][n])
            }
            ye.hasData(t) && (s = ye.access(t), l = te.extend({}, s), ye.set(e, l))
        }
    }

    function v(t, e) {
        var n = t.getElementsByTagName ? t.getElementsByTagName(e || "*") : t.querySelectorAll ? t.querySelectorAll(e || "*") : [];
        return void 0 === e || e && te.nodeName(t, e) ? te.merge([t], n) : n
    }

    function y(t, e) {
        var n = e.nodeName.toLowerCase();
        "input" === n && ke.test(t.type) ? e.checked = t.checked : ("input" === n || "textarea" === n) && (e.defaultValue = t.defaultValue)
    }

    function F(e, n) {
        var r = te(n.createElement(e)).appendTo(n.body),
            i = t.getDefaultComputedStyle ? t.getDefaultComputedStyle(r[0]).display : te.css(r[0], "display");
        return r.detach(), i
    }

    function b(t) {
        var e = J,
            n = ze[t];
        return n || (n = F(t, e), "none" !== n && n || (Me = (Me || te("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = Me[0].contentDocument, e.write(), e.close(), n = F(t, e), Me.detach()), ze[t] = n), n
    }

    function x(t, e, n) {
        var r, i, o, a, s = t.style;
        return n = n || He(t), n && (a = n.getPropertyValue(e) || n[e]), n && ("" !== a || te.contains(t.ownerDocument, t) || (a = te.style(t, e)), Re.test(a) && Ie.test(e) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a
    }

    function w(t, e) {
        return {
            get: function () {
                return t() ? void delete this.get : (this.get = e).apply(this, arguments)
            }
        }
    }

    function C(t, e) {
        if (e in t) return e;
        for (var n = e[0].toUpperCase() + e.slice(1), r = e, i = Ye.length; i--;)
            if (e = Ye[i] + n, e in t) return e;
        return r
    }

    function k(t, e, n) {
        var r = We.exec(e);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : e
    }

    function T(t, e, n, r, i) {
        for (var o = n === (r ? "border" : "content") ? 4 : "width" === e ? 1 : 0, a = 0; 4 > o; o += 2) "margin" === n && (a += te.css(t, n + we[o], !0, i)), r ? ("content" === n && (a -= te.css(t, "padding" + we[o], !0, i)), "margin" !== n && (a -= te.css(t, "border" + we[o] + "Width", !0, i))) : (a += te.css(t, "padding" + we[o], !0, i), "padding" !== n && (a += te.css(t, "border" + we[o] + "Width", !0, i)));
        return a
    }

    function _(t, e, n) {
        var r = !0,
            i = "width" === e ? t.offsetWidth : t.offsetHeight,
            o = He(t),
            a = "border-box" === te.css(t, "boxSizing", !1, o);
        if (0 >= i || null == i) {
            if (i = x(t, e, o), (0 > i || null == i) && (i = t.style[e]), Re.test(i)) return i;
            r = a && (K.boxSizingReliable() || i === t.style[e]), i = parseFloat(i) || 0
        }
        return i + T(t, e, n || (a ? "border" : "content"), r, o) + "px"
    }

    function A(t, e) {
        for (var n, r, i, o = [], a = 0, s = t.length; s > a; a++) r = t[a], r.style && (o[a] = ve.get(r, "olddisplay"), n = r.style.display, e ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && Ce(r) && (o[a] = ve.access(r, "olddisplay", b(r.nodeName)))) : o[a] || (i = Ce(r), (n && "none" !== n || !i) && ve.set(r, "olddisplay", i ? n : te.css(r, "display"))));
        for (a = 0; s > a; a++) r = t[a], r.style && (e && "none" !== r.style.display && "" !== r.style.display || (r.style.display = e ? o[a] || "" : "none"));
        return t
    }

    function E(t, e, n, r, i) {
        return new E.prototype.init(t, e, n, r, i)
    }

    function B() {
        return setTimeout(function () {
            Qe = void 0
        }), Qe = te.now()
    }

    function S(t, e) {
        var n, r = 0,
            i = {
                height: t
            };
        for (e = e ? 1 : 0; 4 > r; r += 2 - e) n = we[r], i["margin" + n] = i["padding" + n] = t;
        return e && (i.opacity = i.width = t), i
    }

    function j(t, e, n) {
        for (var r, i = (nn[e] || []).concat(nn["*"]), o = 0, a = i.length; a > o; o++)
            if (r = i[o].call(n, e, t)) return r
    }

    function D(t, e, n) {
        var r, i, o, a, s, l, u, c = this,
            f = {},
            p = t.style,
            h = t.nodeType && Ce(t),
            d = ve.get(t, "fxshow");
        n.queue || (s = te._queueHooks(t, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function () {
            s.unqueued || l()
        }), s.unqueued++, c.always(function () {
            c.always(function () {
                s.unqueued--, te.queue(t, "fx").length || s.empty.fire()
            })
        })), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], u = te.css(t, "display"), "none" === u && (u = b(t.nodeName)), "inline" === u && "none" === te.css(t, "float") && (p.display = "inline-block")), n.overflow && (p.overflow = "hidden", c.always(function () {
            p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
        }));
        for (r in e)
            if (i = e[r], Je.exec(i)) {
                if (delete e[r], o = o || "toggle" === i, i === (h ? "hide" : "show")) {
                    if ("show" !== i || !d || void 0 === d[r]) continue;
                    h = !0
                }
                f[r] = d && d[r] || te.style(t, r)
            }
        if (!te.isEmptyObject(f)) {
            d ? "hidden" in d && (h = d.hidden) : d = ve.access(t, "fxshow", {}), o && (d.hidden = !h), h ? te(t).show() : c.done(function () {
                te(t).hide()
            }), c.done(function () {
                var e;
                ve.remove(t, "fxshow");
                for (e in f) te.style(t, e, f[e])
            });
            for (r in f) a = j(h ? d[r] : 0, r, c), r in d || (d[r] = a.start, h && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0))
        }
    }

    function $(t, e) {
        var n, r, i, o, a;
        for (n in t)
            if (r = te.camelCase(n), i = e[r], o = t[n], te.isArray(o) && (i = o[1], o = t[n] = o[0]), n !== r && (t[r] = o, delete t[n]), a = te.cssHooks[r], a && "expand" in a) {
                o = a.expand(o), delete t[r];
                for (n in o) n in t || (t[n] = o[n], e[n] = i)
            } else e[r] = i
    }

    function N(t, e, n) {
        var r, i, o = 0,
            a = en.length,
            s = te.Deferred().always(function () {
                delete l.elem
            }),
            l = function () {
                if (i) return !1;
                for (var e = Qe || B(), n = Math.max(0, u.startTime + u.duration - e), r = n / u.duration || 0, o = 1 - r, a = 0, l = u.tweens.length; l > a; a++) u.tweens[a].run(o);
                return s.notifyWith(t, [u, o, n]), 1 > o && l ? n : (s.resolveWith(t, [u]), !1)
            },
            u = s.promise({
                elem: t,
                props: te.extend({}, e),
                opts: te.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: e,
                originalOptions: n,
                startTime: Qe || B(),
                duration: n.duration,
                tweens: [],
                createTween: function (e, n) {
                    var r = te.Tween(t, u.opts, e, n, u.opts.specialEasing[e] || u.opts.easing);
                    return u.tweens.push(r), r
                },
                stop: function (e) {
                    var n = 0,
                        r = e ? u.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; r > n; n++) u.tweens[n].run(1);
                    return e ? s.resolveWith(t, [u, e]) : s.rejectWith(t, [u, e]), this
                }
            }),
            c = u.props;
        for ($(c, u.opts.specialEasing); a > o; o++)
            if (r = en[o].call(u, t, c, u.opts)) return r;
        return te.map(c, j, u), te.isFunction(u.opts.start) && u.opts.start.call(t, u), te.fx.timer(te.extend(l, {
            elem: t,
            anim: u,
            queue: u.opts.queue
        })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }

    function L(t) {
        return function (e, n) {
            "string" != typeof e && (n = e, e = "*");
            var r, i = 0,
                o = e.toLowerCase().match(he) || [];
            if (te.isFunction(n))
                for (; r = o[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (t[r] = t[r] || []).unshift(n)) : (t[r] = t[r] || []).push(n)
        }
    }

    function P(t, e, n, r) {
        function i(s) {
            var l;
            return o[s] = !0, te.each(t[s] || [], function (t, s) {
                var u = s(e, n, r);
                return "string" != typeof u || a || o[u] ? a ? !(l = u) : void 0 : (e.dataTypes.unshift(u), i(u), !1)
            }), l
        }
        var o = {},
            a = t === wn;
        return i(e.dataTypes[0]) || !o["*"] && i("*")
    }

    function O(t, e) {
        var n, r, i = te.ajaxSettings.flatOptions || {};
        for (n in e) void 0 !== e[n] && ((i[n] ? t : r || (r = {}))[n] = e[n]);
        return r && te.extend(!0, t, r), t
    }

    function q(t, e, n) {
        for (var r, i, o, a, s = t.contents, l = t.dataTypes;
            "*" === l[0];) l.shift(), void 0 === r && (r = t.mimeType || e.getResponseHeader("Content-Type"));
        if (r)
            for (i in s)
                if (s[i] && s[i].test(r)) {
                    l.unshift(i);
                    break
                }
        if (l[0] in n) o = l[0];
        else {
            for (i in n) {
                if (!l[0] || t.converters[i + " " + l[0]]) {
                    o = i;
                    break
                }
                a || (a = i)
            }
            o = o || a
        }
        return o ? (o !== l[0] && l.unshift(o), n[o]) : void 0
    }

    function M(t, e, n, r) {
        var i, o, a, s, l, u = {},
            c = t.dataTypes.slice();
        if (c[1])
            for (a in t.converters) u[a.toLowerCase()] = t.converters[a];
        for (o = c.shift(); o;)
            if (t.responseFields[o] && (n[t.responseFields[o]] = e), !l && r && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = o, o = c.shift())
                if ("*" === o) o = l;
                else if ("*" !== l && l !== o) {
            if (a = u[l + " " + o] || u["* " + o], !a)
                for (i in u)
                    if (s = i.split(" "), s[1] === o && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
                        a === !0 ? a = u[i] : u[i] !== !0 && (o = s[0], c.unshift(s[1]));
                        break
                    }
            if (a !== !0)
                if (a && t["throws"]) e = a(e);
                else try {
                    e = a(e)
                } catch (f) {
                    return {
                        state: "parsererror",
                        error: a ? f : "No conversion from " + l + " to " + o
                    }
                }
        }
        return {
            state: "success",
            data: e
        }
    }

    function z(t, e, n, r) {
        var i;
        if (te.isArray(e)) te.each(e, function (e, i) {
            n || _n.test(t) ? r(t, i) : z(t + "[" + ("object" == typeof i ? e : "") + "]", i, n, r)
        });
        else if (n || "object" !== te.type(e)) r(t, e);
        else
            for (i in e) z(t + "[" + i + "]", e[i], n, r)
    }

    function I(t) {
        return te.isWindow(t) ? t : 9 === t.nodeType && t.defaultView
    }
    var R = [],
        H = R.slice,
        G = R.concat,
        W = R.push,
        U = R.indexOf,
        X = {},
        V = X.toString,
        Y = X.hasOwnProperty,
        Q = "".trim,
        K = {},
        J = t.document,
        Z = "2.1.0",
        te = function (t, e) {
            return new te.fn.init(t, e)
        },
        ee = /^-ms-/,
        ne = /-([\da-z])/gi,
        re = function (t, e) {
            return e.toUpperCase()
        };
    te.fn = te.prototype = {
        jquery: Z,
        constructor: te,
        selector: "",
        length: 0,
        toArray: function () {
            return H.call(this)
        },
        get: function (t) {
            return null != t ? 0 > t ? this[t + this.length] : this[t] : H.call(this)
        },
        pushStack: function (t) {
            var e = te.merge(this.constructor(), t);
            return e.prevObject = this, e.context = this.context, e
        },
        each: function (t, e) {
            return te.each(this, t, e)
        },
        map: function (t) {
            return this.pushStack(te.map(this, function (e, n) {
                return t.call(e, n, e)
            }))
        },
        slice: function () {
            return this.pushStack(H.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        eq: function (t) {
            var e = this.length,
                n = +t + (0 > t ? e : 0);
            return this.pushStack(n >= 0 && e > n ? [this[n]] : [])
        },
        end: function () {
            return this.prevObject || this.constructor(null)
        },
        push: W,
        sort: R.sort,
        splice: R.splice
    }, te.extend = te.fn.extend = function () {
        var t, e, n, r, i, o, a = arguments[0] || {},
            s = 1,
            l = arguments.length,
            u = !1;
        for ("boolean" == typeof a && (u = a, a = arguments[s] || {}, s++), "object" == typeof a || te.isFunction(a) || (a = {}), s === l && (a = this, s--); l > s; s++)
            if (null != (t = arguments[s]))
                for (e in t) n = a[e], r = t[e], a !== r && (u && r && (te.isPlainObject(r) || (i = te.isArray(r))) ? (i ? (i = !1, o = n && te.isArray(n) ? n : []) : o = n && te.isPlainObject(n) ? n : {}, a[e] = te.extend(u, o, r)) : void 0 !== r && (a[e] = r));
        return a
    }, te.extend({
        expando: "jQuery" + (Z + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (t) {
            throw new Error(t)
        },
        noop: function () {},
        isFunction: function (t) {
            return "function" === te.type(t)
        },
        isArray: Array.isArray,
        isWindow: function (t) {
            return null != t && t === t.window
        },
        isNumeric: function (t) {
            return t - parseFloat(t) >= 0
        },
        isPlainObject: function (t) {
            if ("object" !== te.type(t) || t.nodeType || te.isWindow(t)) return !1;
            try {
                if (t.constructor && !Y.call(t.constructor.prototype, "isPrototypeOf")) return !1
            } catch (e) {
                return !1
            }
            return !0
        },
        isEmptyObject: function (t) {
            var e;
            for (e in t) return !1;
            return !0
        },
        type: function (t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? X[V.call(t)] || "object" : typeof t
        },
        globalEval: function (t) {
            var e, n = eval;
            t = te.trim(t), t && (1 === t.indexOf("use strict") ? (e = J.createElement("script"), e.text = t, J.head.appendChild(e).parentNode.removeChild(e)) : n(t))
        },
        camelCase: function (t) {
            return t.replace(ee, "ms-").replace(ne, re)
        },
        nodeName: function (t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        },
        each: function (t, e, r) {
            var i, o = 0,
                a = t.length,
                s = n(t);
            if (r) {
                if (s)
                    for (; a > o && (i = e.apply(t[o], r), i !== !1); o++);
                else
                    for (o in t)
                        if (i = e.apply(t[o], r), i === !1) break
            } else if (s)
                for (; a > o && (i = e.call(t[o], o, t[o]), i !== !1); o++);
            else
                for (o in t)
                    if (i = e.call(t[o], o, t[o]), i === !1) break; return t
        },
        trim: function (t) {
            return null == t ? "" : Q.call(t)
        },
        makeArray: function (t, e) {
            var r = e || [];
            return null != t && (n(Object(t)) ? te.merge(r, "string" == typeof t ? [t] : t) : W.call(r, t)), r
        },
        inArray: function (t, e, n) {
            return null == e ? -1 : U.call(e, t, n)
        },
        merge: function (t, e) {
            for (var n = +e.length, r = 0, i = t.length; n > r; r++) t[i++] = e[r];
            return t.length = i, t
        },
        grep: function (t, e, n) {
            for (var r, i = [], o = 0, a = t.length, s = !n; a > o; o++) r = !e(t[o], o), r !== s && i.push(t[o]);
            return i
        },
        map: function (t, e, r) {
            var i, o = 0,
                a = t.length,
                s = n(t),
                l = [];
            if (s)
                for (; a > o; o++) i = e(t[o], o, r), null != i && l.push(i);
            else
                for (o in t) i = e(t[o], o, r), null != i && l.push(i);
            return G.apply([], l)
        },
        guid: 1,
        proxy: function (t, e) {
            var n, r, i;
            return "string" == typeof e && (n = t[e], e = t, t = n), te.isFunction(t) ? (r = H.call(arguments, 2), i = function () {
                return t.apply(e || this, r.concat(H.call(arguments)))
            }, i.guid = t.guid = t.guid || te.guid++, i) : void 0
        },
        now: Date.now,
        support: K
    }), te.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (t, e) {
        X["[object " + e + "]"] = e.toLowerCase()
    });
    var ie = function (t) {
        function e(t, e, n, r) {
            var i, o, a, s, l, u, f, d, g, m;
            if ((e ? e.ownerDocument || e : z) !== D && j(e), e = e || D, n = n || [], !t || "string" != typeof t) return n;
            if (1 !== (s = e.nodeType) && 9 !== s) return [];
            if (N && !r) {
                if (i = ye.exec(t))
                    if (a = i[1]) {
                        if (9 === s) {
                            if (o = e.getElementById(a), !o || !o.parentNode) return n;
                            if (o.id === a) return n.push(o), n
                        } else if (e.ownerDocument && (o = e.ownerDocument.getElementById(a)) && q(e, o) && o.id === a) return n.push(o), n
                    } else {
                        if (i[2]) return Z.apply(n, e.getElementsByTagName(t)), n;
                        if ((a = i[3]) && C.getElementsByClassName && e.getElementsByClassName) return Z.apply(n, e.getElementsByClassName(a)), n
                    }
                if (C.qsa && (!L || !L.test(t))) {
                    if (d = f = M, g = e, m = 9 === s && t, 1 === s && "object" !== e.nodeName.toLowerCase()) {
                        for (u = p(t), (f = e.getAttribute("id")) ? d = f.replace(be, "\\$&") : e.setAttribute("id", d), d = "[id='" + d + "'] ", l = u.length; l--;) u[l] = d + h(u[l]);
                        g = Fe.test(t) && c(e.parentNode) || e, m = u.join(",")
                    }
                    if (m) try {
                        return Z.apply(n, g.querySelectorAll(m)), n
                    } catch (v) {} finally {
                        f || e.removeAttribute("id")
                    }
                }
            }
            return x(t.replace(le, "$1"), e, n, r)
        }

        function n() {
            function t(n, r) {
                return e.push(n + " ") > k.cacheLength && delete t[e.shift()], t[n + " "] = r
            }
            var e = [];
            return t
        }

        function r(t) {
            return t[M] = !0, t
        }

        function i(t) {
            var e = D.createElement("div");
            try {
                return !!t(e)
            } catch (n) {
                return !1
            } finally {
                e.parentNode && e.parentNode.removeChild(e), e = null
            }
        }

        function o(t, e) {
            for (var n = t.split("|"), r = t.length; r--;) k.attrHandle[n[r]] = e
        }

        function a(t, e) {
            var n = e && t,
                r = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || V) - (~t.sourceIndex || V);
            if (r) return r;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === e) return -1;
            return t ? 1 : -1
        }

        function s(t) {
            return function (e) {
                var n = e.nodeName.toLowerCase();
                return "input" === n && e.type === t
            }
        }

        function l(t) {
            return function (e) {
                var n = e.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && e.type === t
            }
        }

        function u(t) {
            return r(function (e) {
                return e = +e, r(function (n, r) {
                    for (var i, o = t([], n.length, e), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }

        function c(t) {
            return t && typeof t.getElementsByTagName !== X && t
        }

        function f() {}

        function p(t, n) {
            var r, i, o, a, s, l, u, c = G[t + " "];
            if (c) return n ? 0 : c.slice(0);
            for (s = t, l = [], u = k.preFilter; s;) {
                (!r || (i = ue.exec(s))) && (i && (s = s.slice(i[0].length) || s), l.push(o = [])), r = !1, (i = ce.exec(s)) && (r = i.shift(), o.push({
                    value: r,
                    type: i[0].replace(le, " ")
                }), s = s.slice(r.length));
                for (a in k.filter)!(i = de[a].exec(s)) || u[a] && !(i = u[a](i)) || (r = i.shift(), o.push({
                    value: r,
                    type: a,
                    matches: i
                }), s = s.slice(r.length));
                if (!r) break
            }
            return n ? s.length : s ? e.error(t) : G(t, l).slice(0)
        }

        function h(t) {
            for (var e = 0, n = t.length, r = ""; n > e; e++) r += t[e].value;
            return r
        }

        function d(t, e, n) {
            var r = e.dir,
                i = n && "parentNode" === r,
                o = R++;
            return e.first ? function (e, n, o) {
                for (; e = e[r];)
                    if (1 === e.nodeType || i) return t(e, n, o)
            } : function (e, n, a) {
                var s, l, u = [I, o];
                if (a) {
                    for (; e = e[r];)
                        if ((1 === e.nodeType || i) && t(e, n, a)) return !0
                } else
                    for (; e = e[r];)
                        if (1 === e.nodeType || i) {
                            if (l = e[M] || (e[M] = {}), (s = l[r]) && s[0] === I && s[1] === o) return u[2] = s[2];
                            if (l[r] = u, u[2] = t(e, n, a)) return !0
                        }
            }
        }

        function g(t) {
            return t.length > 1 ? function (e, n, r) {
                for (var i = t.length; i--;)
                    if (!t[i](e, n, r)) return !1;
                return !0
            } : t[0]
        }

        function m(t, e, n, r, i) {
            for (var o, a = [], s = 0, l = t.length, u = null != e; l > s; s++)(o = t[s]) && (!n || n(o, r, i)) && (a.push(o), u && e.push(s));
            return a
        }

        function v(t, e, n, i, o, a) {
            return i && !i[M] && (i = v(i)), o && !o[M] && (o = v(o, a)), r(function (r, a, s, l) {
                var u, c, f, p = [],
                    h = [],
                    d = a.length,
                    g = r || b(e || "*", s.nodeType ? [s] : s, []),
                    v = !t || !r && e ? g : m(g, p, t, s, l),
                    y = n ? o || (r ? t : d || i) ? [] : a : v;
                if (n && n(v, y, s, l), i)
                    for (u = m(y, h), i(u, [], s, l), c = u.length; c--;)(f = u[c]) && (y[h[c]] = !(v[h[c]] = f));
                if (r) {
                    if (o || t) {
                        if (o) {
                            for (u = [], c = y.length; c--;)(f = y[c]) && u.push(v[c] = f);
                            o(null, y = [], u, l)
                        }
                        for (c = y.length; c--;)(f = y[c]) && (u = o ? ee.call(r, f) : p[c]) > -1 && (r[u] = !(a[u] = f))
                    }
                } else y = m(y === a ? y.splice(d, y.length) : y), o ? o(null, a, y, l) : Z.apply(a, y)
            })
        }

        function y(t) {
            for (var e, n, r, i = t.length, o = k.relative[t[0].type], a = o || k.relative[" "], s = o ? 1 : 0, l = d(function (t) {
                return t === e
            }, a, !0), u = d(function (t) {
                return ee.call(e, t) > -1
            }, a, !0), c = [
                function (t, n, r) {
                    return !o && (r || n !== E) || ((e = n).nodeType ? l(t, n, r) : u(t, n, r))
                }
            ]; i > s; s++)
                if (n = k.relative[t[s].type]) c = [d(g(c), n)];
                else {
                    if (n = k.filter[t[s].type].apply(null, t[s].matches), n[M]) {
                        for (r = ++s; i > r && !k.relative[t[r].type]; r++);
                        return v(s > 1 && g(c), s > 1 && h(t.slice(0, s - 1).concat({
                            value: " " === t[s - 2].type ? "*" : ""
                        })).replace(le, "$1"), n, r > s && y(t.slice(s, r)), i > r && y(t = t.slice(r)), i > r && h(t))
                    }
                    c.push(n)
                }
            return g(c)
        }

        function F(t, n) {
            var i = n.length > 0,
                o = t.length > 0,
                a = function (r, a, s, l, u) {
                    var c, f, p, h = 0,
                        d = "0",
                        g = r && [],
                        v = [],
                        y = E,
                        F = r || o && k.find.TAG("*", u),
                        b = I += null == y ? 1 : Math.random() || .1,
                        x = F.length;
                    for (u && (E = a !== D && a); d !== x && null != (c = F[d]); d++) {
                        if (o && c) {
                            for (f = 0; p = t[f++];)
                                if (p(c, a, s)) {
                                    l.push(c);
                                    break
                                }
                            u && (I = b)
                        }
                        i && ((c = !p && c) && h--, r && g.push(c))
                    }
                    if (h += d, i && d !== h) {
                        for (f = 0; p = n[f++];) p(g, v, a, s);
                        if (r) {
                            if (h > 0)
                                for (; d--;) g[d] || v[d] || (v[d] = K.call(l));
                            v = m(v)
                        }
                        Z.apply(l, v), u && !r && v.length > 0 && h + n.length > 1 && e.uniqueSort(l)
                    }
                    return u && (I = b, E = y), g
                };
            return i ? r(a) : a
        }

        function b(t, n, r) {
            for (var i = 0, o = n.length; o > i; i++) e(t, n[i], r);
            return r
        }

        function x(t, e, n, r) {
            var i, o, a, s, l, u = p(t);
            if (!r && 1 === u.length) {
                if (o = u[0] = u[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && C.getById && 9 === e.nodeType && N && k.relative[o[1].type]) {
                    if (e = (k.find.ID(a.matches[0].replace(xe, we), e) || [])[0], !e) return n;
                    t = t.slice(o.shift().value.length)
                }
                for (i = de.needsContext.test(t) ? 0 : o.length; i-- && (a = o[i], !k.relative[s = a.type]);)
                    if ((l = k.find[s]) && (r = l(a.matches[0].replace(xe, we), Fe.test(o[0].type) && c(e.parentNode) || e))) {
                        if (o.splice(i, 1), t = r.length && h(o), !t) return Z.apply(n, r), n;
                        break
                    }
            }
            return A(t, u)(r, e, !N, n, Fe.test(t) && c(e.parentNode) || e), n
        }
        var w, C, k, T, _, A, E, B, S, j, D, $, N, L, P, O, q, M = "sizzle" + -new Date,
            z = t.document,
            I = 0,
            R = 0,
            H = n(),
            G = n(),
            W = n(),
            U = function (t, e) {
                return t === e && (S = !0), 0
            },
            X = "undefined",
            V = 1 << 31,
            Y = {}.hasOwnProperty,
            Q = [],
            K = Q.pop,
            J = Q.push,
            Z = Q.push,
            te = Q.slice,
            ee = Q.indexOf || function (t) {
                for (var e = 0, n = this.length; n > e; e++)
                    if (this[e] === t) return e;
                return -1
            },
            ne = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            re = "[\\x20\\t\\r\\n\\f]",
            ie = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            oe = ie.replace("w", "w#"),
            ae = "\\[" + re + "*(" + ie + ")" + re + "*(?:([*^$|!~]?=)" + re + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + oe + ")|)|)" + re + "*\\]",
            se = ":(" + ie + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + ae.replace(3, 8) + ")*)|.*)\\)|)",
            le = new RegExp("^" + re + "+|((?:^|[^\\\\])(?:\\\\.)*)" + re + "+$", "g"),
            ue = new RegExp("^" + re + "*," + re + "*"),
            ce = new RegExp("^" + re + "*([>+~]|" + re + ")" + re + "*"),
            fe = new RegExp("=" + re + "*([^\\]'\"]*?)" + re + "*\\]", "g"),
            pe = new RegExp(se),
            he = new RegExp("^" + oe + "$"),
            de = {
                ID: new RegExp("^#(" + ie + ")"),
                CLASS: new RegExp("^\\.(" + ie + ")"),
                TAG: new RegExp("^(" + ie.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + ae),
                PSEUDO: new RegExp("^" + se),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + re + "*(even|odd|(([+-]|)(\\d*)n|)" + re + "*(?:([+-]|)" + re + "*(\\d+)|))" + re + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + ne + ")$", "i"),
                needsContext: new RegExp("^" + re + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + re + "*((?:-\\d)?\\d*)" + re + "*\\)|)(?=[^-]|$)", "i")
            },
            ge = /^(?:input|select|textarea|button)$/i,
            me = /^h\d$/i,
            ve = /^[^{]+\{\s*\[native \w/,
            ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            Fe = /[+~]/,
            be = /'|\\/g,
            xe = new RegExp("\\\\([\\da-f]{1,6}" + re + "?|(" + re + ")|.)", "ig"),
            we = function (t, e, n) {
                var r = "0x" + e - 65536;
                return r !== r || n ? e : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
            };
        try {
            Z.apply(Q = te.call(z.childNodes), z.childNodes), Q[z.childNodes.length].nodeType
        } catch (Ce) {
            Z = {
                apply: Q.length ? function (t, e) {
                    J.apply(t, te.call(e))
                } : function (t, e) {
                    for (var n = t.length, r = 0; t[n++] = e[r++];);
                    t.length = n - 1
                }
            }
        }
        C = e.support = {}, _ = e.isXML = function (t) {
            var e = t && (t.ownerDocument || t).documentElement;
            return e ? "HTML" !== e.nodeName : !1
        }, j = e.setDocument = function (t) {
            var e, n = t ? t.ownerDocument || t : z,
                r = n.defaultView;
            return n !== D && 9 === n.nodeType && n.documentElement ? (D = n, $ = n.documentElement, N = !_(n), r && r !== r.top && (r.addEventListener ? r.addEventListener("unload", function () {
                j()
            }, !1) : r.attachEvent && r.attachEvent("onunload", function () {
                j()
            })), C.attributes = i(function (t) {
                return t.className = "i", !t.getAttribute("className")
            }), C.getElementsByTagName = i(function (t) {
                return t.appendChild(n.createComment("")), !t.getElementsByTagName("*").length
            }), C.getElementsByClassName = ve.test(n.getElementsByClassName) && i(function (t) {
                return t.innerHTML = "<div class='a'></div><div class='a i'></div>", t.firstChild.className = "i", 2 === t.getElementsByClassName("i").length
            }), C.getById = i(function (t) {
                return $.appendChild(t).id = M, !n.getElementsByName || !n.getElementsByName(M).length
            }), C.getById ? (k.find.ID = function (t, e) {
                if (typeof e.getElementById !== X && N) {
                    var n = e.getElementById(t);
                    return n && n.parentNode ? [n] : []
                }
            }, k.filter.ID = function (t) {
                var e = t.replace(xe, we);
                return function (t) {
                    return t.getAttribute("id") === e
                }
            }) : (delete k.find.ID, k.filter.ID = function (t) {
                var e = t.replace(xe, we);
                return function (t) {
                    var n = typeof t.getAttributeNode !== X && t.getAttributeNode("id");
                    return n && n.value === e
                }
            }), k.find.TAG = C.getElementsByTagName ? function (t, e) {
                return typeof e.getElementsByTagName !== X ? e.getElementsByTagName(t) : void 0
            } : function (t, e) {
                var n, r = [],
                    i = 0,
                    o = e.getElementsByTagName(t);
                if ("*" === t) {
                    for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }, k.find.CLASS = C.getElementsByClassName && function (t, e) {
                return typeof e.getElementsByClassName !== X && N ? e.getElementsByClassName(t) : void 0
            }, P = [], L = [], (C.qsa = ve.test(n.querySelectorAll)) && (i(function (t) {
                t.innerHTML = "<select t=''><option selected=''></option></select>", t.querySelectorAll("[t^='']").length && L.push("[*^$]=" + re + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || L.push("\\[" + re + "*(?:value|" + ne + ")"), t.querySelectorAll(":checked").length || L.push(":checked")
            }), i(function (t) {
                var e = n.createElement("input");
                e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && L.push("name" + re + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || L.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), L.push(",.*:")
            })), (C.matchesSelector = ve.test(O = $.webkitMatchesSelector || $.mozMatchesSelector || $.oMatchesSelector || $.msMatchesSelector)) && i(function (t) {
                C.disconnectedMatch = O.call(t, "div"), O.call(t, "[s!='']:x"), P.push("!=", se)
            }), L = L.length && new RegExp(L.join("|")), P = P.length && new RegExp(P.join("|")), e = ve.test($.compareDocumentPosition), q = e || ve.test($.contains) ? function (t, e) {
                var n = 9 === t.nodeType ? t.documentElement : t,
                    r = e && e.parentNode;
                return t === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(r)))
            } : function (t, e) {
                if (e)
                    for (; e = e.parentNode;)
                        if (e === t) return !0;
                return !1
            }, U = e ? function (t, e) {
                if (t === e) return S = !0, 0;
                var r = !t.compareDocumentPosition - !e.compareDocumentPosition;
                return r ? r : (r = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & r || !C.sortDetached && e.compareDocumentPosition(t) === r ? t === n || t.ownerDocument === z && q(z, t) ? -1 : e === n || e.ownerDocument === z && q(z, e) ? 1 : B ? ee.call(B, t) - ee.call(B, e) : 0 : 4 & r ? -1 : 1)
            } : function (t, e) {
                if (t === e) return S = !0, 0;
                var r, i = 0,
                    o = t.parentNode,
                    s = e.parentNode,
                    l = [t],
                    u = [e];
                if (!o || !s) return t === n ? -1 : e === n ? 1 : o ? -1 : s ? 1 : B ? ee.call(B, t) - ee.call(B, e) : 0;
                if (o === s) return a(t, e);
                for (r = t; r = r.parentNode;) l.unshift(r);
                for (r = e; r = r.parentNode;) u.unshift(r);
                for (; l[i] === u[i];) i++;
                return i ? a(l[i], u[i]) : l[i] === z ? -1 : u[i] === z ? 1 : 0
            }, n) : D
        }, e.matches = function (t, n) {
            return e(t, null, null, n)
        }, e.matchesSelector = function (t, n) {
            if ((t.ownerDocument || t) !== D && j(t), n = n.replace(fe, "='$1']"), !(!C.matchesSelector || !N || P && P.test(n) || L && L.test(n))) try {
                var r = O.call(t, n);
                if (r || C.disconnectedMatch || t.document && 11 !== t.document.nodeType) return r
            } catch (i) {}
            return e(n, D, null, [t]).length > 0
        }, e.contains = function (t, e) {
            return (t.ownerDocument || t) !== D && j(t), q(t, e)
        }, e.attr = function (t, e) {
            (t.ownerDocument || t) !== D && j(t);
            var n = k.attrHandle[e.toLowerCase()],
                r = n && Y.call(k.attrHandle, e.toLowerCase()) ? n(t, e, !N) : void 0;
            return void 0 !== r ? r : C.attributes || !N ? t.getAttribute(e) : (r = t.getAttributeNode(e)) && r.specified ? r.value : null
        }, e.error = function (t) {
            throw new Error("Syntax error, unrecognized expression: " + t)
        }, e.uniqueSort = function (t) {
            var e, n = [],
                r = 0,
                i = 0;
            if (S = !C.detectDuplicates, B = !C.sortStable && t.slice(0), t.sort(U), S) {
                for (; e = t[i++];) e === t[i] && (r = n.push(i));
                for (; r--;) t.splice(n[r], 1)
            }
            return B = null, t
        }, T = e.getText = function (t) {
            var e, n = "",
                r = 0,
                i = t.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof t.textContent) return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling) n += T(t)
                } else if (3 === i || 4 === i) return t.nodeValue
            } else
                for (; e = t[r++];) n += T(e);
            return n
        }, k = e.selectors = {
            cacheLength: 50,
            createPseudo: r,
            match: de,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function (t) {
                    return t[1] = t[1].replace(xe, we), t[3] = (t[4] || t[5] || "").replace(xe, we), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                },
                CHILD: function (t) {
                    return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                },
                PSEUDO: function (t) {
                    var e, n = !t[5] && t[2];
                    return de.CHILD.test(t[0]) ? null : (t[3] && void 0 !== t[4] ? t[2] = t[4] : n && pe.test(n) && (e = p(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                }
            },
            filter: {
                TAG: function (t) {
                    var e = t.replace(xe, we).toLowerCase();
                    return "*" === t ? function () {
                        return !0
                    } : function (t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    }
                },
                CLASS: function (t) {
                    var e = H[t + " "];
                    return e || (e = new RegExp("(^|" + re + ")" + t + "(" + re + "|$)")) && H(t, function (t) {
                        return e.test("string" == typeof t.className && t.className || typeof t.getAttribute !== X && t.getAttribute("class") || "")
                    })
                },
                ATTR: function (t, n, r) {
                    return function (i) {
                        var o = e.attr(i, t);
                        return null == o ? "!=" === n : n ? (o += "", "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o + " ").indexOf(r) > -1 : "|=" === n ? o === r || o.slice(0, r.length + 1) === r + "-" : !1) : !0
                    }
                },
                CHILD: function (t, e, n, r, i) {
                    var o = "nth" !== t.slice(0, 3),
                        a = "last" !== t.slice(-4),
                        s = "of-type" === e;
                    return 1 === r && 0 === i ? function (t) {
                        return !!t.parentNode
                    } : function (e, n, l) {
                        var u, c, f, p, h, d, g = o !== a ? "nextSibling" : "previousSibling",
                            m = e.parentNode,
                            v = s && e.nodeName.toLowerCase(),
                            y = !l && !s;
                        if (m) {
                            if (o) {
                                for (; g;) {
                                    for (f = e; f = f[g];)
                                        if (s ? f.nodeName.toLowerCase() === v : 1 === f.nodeType) return !1;
                                    d = g = "only" === t && !d && "nextSibling"
                                }
                                return !0
                            }
                            if (d = [a ? m.firstChild : m.lastChild], a && y) {
                                for (c = m[M] || (m[M] = {}), u = c[t] || [], h = u[0] === I && u[1], p = u[0] === I && u[2], f = h && m.childNodes[h]; f = ++h && f && f[g] || (p = h = 0) || d.pop();)
                                    if (1 === f.nodeType && ++p && f === e) {
                                        c[t] = [I, h, p];
                                        break
                                    }
                            } else if (y && (u = (e[M] || (e[M] = {}))[t]) && u[0] === I) p = u[1];
                            else
                                for (;
                                    (f = ++h && f && f[g] || (p = h = 0) || d.pop()) && ((s ? f.nodeName.toLowerCase() !== v : 1 !== f.nodeType) || !++p || (y && ((f[M] || (f[M] = {}))[t] = [I, p]), f !== e)););
                            return p -= i, p === r || p % r === 0 && p / r >= 0
                        }
                    }
                },
                PSEUDO: function (t, n) {
                    var i, o = k.pseudos[t] || k.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                    return o[M] ? o(n) : o.length > 1 ? (i = [t, t, "", n], k.setFilters.hasOwnProperty(t.toLowerCase()) ? r(function (t, e) {
                        for (var r, i = o(t, n), a = i.length; a--;) r = ee.call(t, i[a]), t[r] = !(e[r] = i[a])
                    }) : function (t) {
                        return o(t, 0, i)
                    }) : o
                }
            },
            pseudos: {
                not: r(function (t) {
                    var e = [],
                        n = [],
                        i = A(t.replace(le, "$1"));
                    return i[M] ? r(function (t, e, n, r) {
                        for (var o, a = i(t, null, r, []), s = t.length; s--;)(o = a[s]) && (t[s] = !(e[s] = o))
                    }) : function (t, r, o) {
                        return e[0] = t, i(e, null, o, n), !n.pop()
                    }
                }),
                has: r(function (t) {
                    return function (n) {
                        return e(t, n).length > 0
                    }
                }),
                contains: r(function (t) {
                    return function (e) {
                        return (e.textContent || e.innerText || T(e)).indexOf(t) > -1
                    }
                }),
                lang: r(function (t) {
                    return he.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(xe, we).toLowerCase(),
                        function (e) {
                            var n;
                            do
                                if (n = N ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return n = n.toLowerCase(), n === t || 0 === n.indexOf(t + "-");
                            while ((e = e.parentNode) && 1 === e.nodeType);
                            return !1
                        }
                }),
                target: function (e) {
                    var n = t.location && t.location.hash;
                    return n && n.slice(1) === e.id
                },
                root: function (t) {
                    return t === $
                },
                focus: function (t) {
                    return t === D.activeElement && (!D.hasFocus || D.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                },
                enabled: function (t) {
                    return t.disabled === !1
                },
                disabled: function (t) {
                    return t.disabled === !0
                },
                checked: function (t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && !!t.checked || "option" === e && !!t.selected
                },
                selected: function (t) {
                    return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
                },
                empty: function (t) {
                    for (t = t.firstChild; t; t = t.nextSibling)
                        if (t.nodeType < 6) return !1;
                    return !0
                },
                parent: function (t) {
                    return !k.pseudos.empty(t)
                },
                header: function (t) {
                    return me.test(t.nodeName)
                },
                input: function (t) {
                    return ge.test(t.nodeName)
                },
                button: function (t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && "button" === t.type || "button" === e
                },
                text: function (t) {
                    var e;
                    return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                },
                first: u(function () {
                    return [0]
                }),
                last: u(function (t, e) {
                    return [e - 1]
                }),
                eq: u(function (t, e, n) {
                    return [0 > n ? n + e : n]
                }),
                even: u(function (t, e) {
                    for (var n = 0; e > n; n += 2) t.push(n);
                    return t
                }),
                odd: u(function (t, e) {
                    for (var n = 1; e > n; n += 2) t.push(n);
                    return t
                }),
                lt: u(function (t, e, n) {
                    for (var r = 0 > n ? n + e : n; --r >= 0;) t.push(r);
                    return t
                }),
                gt: u(function (t, e, n) {
                    for (var r = 0 > n ? n + e : n; ++r < e;) t.push(r);
                    return t
                })
            }
        }, k.pseudos.nth = k.pseudos.eq;
        for (w in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) k.pseudos[w] = s(w);
        for (w in {
            submit: !0,
            reset: !0
        }) k.pseudos[w] = l(w);
        return f.prototype = k.filters = k.pseudos, k.setFilters = new f, A = e.compile = function (t, e) {
            var n, r = [],
                i = [],
                o = W[t + " "];
            if (!o) {
                for (e || (e = p(t)), n = e.length; n--;) o = y(e[n]), o[M] ? r.push(o) : i.push(o);
                o = W(t, F(i, r))
            }
            return o
        }, C.sortStable = M.split("").sort(U).join("") === M, C.detectDuplicates = !!S, j(), C.sortDetached = i(function (t) {
            return 1 & t.compareDocumentPosition(D.createElement("div"))
        }), i(function (t) {
            return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function (t, e, n) {
            return n ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
        }), C.attributes && i(function (t) {
            return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
        }) || o("value", function (t, e, n) {
            return n || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
        }), i(function (t) {
            return null == t.getAttribute("disabled")
        }) || o(ne, function (t, e, n) {
            var r;
            return n ? void 0 : t[e] === !0 ? e.toLowerCase() : (r = t.getAttributeNode(e)) && r.specified ? r.value : null
        }), e
    }(t);
    te.find = ie, te.expr = ie.selectors, te.expr[":"] = te.expr.pseudos, te.unique = ie.uniqueSort, te.text = ie.getText, te.isXMLDoc = ie.isXML, te.contains = ie.contains;
    var oe = te.expr.match.needsContext,
        ae = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        se = /^.[^:#\[\.,]*$/;
    te.filter = function (t, e, n) {
        var r = e[0];
        return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === r.nodeType ? te.find.matchesSelector(r, t) ? [r] : [] : te.find.matches(t, te.grep(e, function (t) {
            return 1 === t.nodeType
        }))
    }, te.fn.extend({
        find: function (t) {
            var e, n = this.length,
                r = [],
                i = this;
            if ("string" != typeof t) return this.pushStack(te(t).filter(function () {
                for (e = 0; n > e; e++)
                    if (te.contains(i[e], this)) return !0
            }));
            for (e = 0; n > e; e++) te.find(t, i[e], r);
            return r = this.pushStack(n > 1 ? te.unique(r) : r), r.selector = this.selector ? this.selector + " " + t : t, r
        },
        filter: function (t) {
            return this.pushStack(r(this, t || [], !1))
        },
        not: function (t) {
            return this.pushStack(r(this, t || [], !0))
        },
        is: function (t) {
            return !!r(this, "string" == typeof t && oe.test(t) ? te(t) : t || [], !1).length
        }
    });
    var le, ue = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        ce = te.fn.init = function (t, e) {
            var n, r;
            if (!t) return this;
            if ("string" == typeof t) {
                if (n = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : ue.exec(t), !n || !n[1] && e) return !e || e.jquery ? (e || le).find(t) : this.constructor(e).find(t);
                if (n[1]) {
                    if (e = e instanceof te ? e[0] : e, te.merge(this, te.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : J, !0)), ae.test(n[1]) && te.isPlainObject(e))
                        for (n in e) te.isFunction(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
                    return this
                }
                return r = J.getElementById(n[2]), r && r.parentNode && (this.length = 1, this[0] = r), this.context = J, this.selector = t, this
            }
            return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : te.isFunction(t) ? "undefined" != typeof le.ready ? le.ready(t) : t(te) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), te.makeArray(t, this))
        };
    ce.prototype = te.fn, le = te(J);
    var fe = /^(?:parents|prev(?:Until|All))/,
        pe = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    te.extend({
        dir: function (t, e, n) {
            for (var r = [], i = void 0 !== n;
                (t = t[e]) && 9 !== t.nodeType;)
                if (1 === t.nodeType) {
                    if (i && te(t).is(n)) break;
                    r.push(t)
                }
            return r
        },
        sibling: function (t, e) {
            for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
            return n
        }
    }), te.fn.extend({
        has: function (t) {
            var e = te(t, this),
                n = e.length;
            return this.filter(function () {
                for (var t = 0; n > t; t++)
                    if (te.contains(this, e[t])) return !0
            })
        },
        closest: function (t, e) {
            for (var n, r = 0, i = this.length, o = [], a = oe.test(t) || "string" != typeof t ? te(t, e || this.context) : 0; i > r; r++)
                for (n = this[r]; n && n !== e; n = n.parentNode)
                    if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && te.find.matchesSelector(n, t))) {
                        o.push(n);
                        break
                    }
            return this.pushStack(o.length > 1 ? te.unique(o) : o)
        },
        index: function (t) {
            return t ? "string" == typeof t ? U.call(te(t), this[0]) : U.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (t, e) {
            return this.pushStack(te.unique(te.merge(this.get(), te(t, e))))
        },
        addBack: function (t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }), te.each({
        parent: function (t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function (t) {
            return te.dir(t, "parentNode")
        },
        parentsUntil: function (t, e, n) {
            return te.dir(t, "parentNode", n)
        },
        next: function (t) {
            return i(t, "nextSibling")
        },
        prev: function (t) {
            return i(t, "previousSibling")
        },
        nextAll: function (t) {
            return te.dir(t, "nextSibling")
        },
        prevAll: function (t) {
            return te.dir(t, "previousSibling")
        },
        nextUntil: function (t, e, n) {
            return te.dir(t, "nextSibling", n)
        },
        prevUntil: function (t, e, n) {
            return te.dir(t, "previousSibling", n)
        },
        siblings: function (t) {
            return te.sibling((t.parentNode || {}).firstChild, t)
        },
        children: function (t) {
            return te.sibling(t.firstChild)
        },
        contents: function (t) {
            return t.contentDocument || te.merge([], t.childNodes)
        }
    }, function (t, e) {
        te.fn[t] = function (n, r) {
            var i = te.map(this, e, n);
            return "Until" !== t.slice(-5) && (r = n), r && "string" == typeof r && (i = te.filter(r, i)), this.length > 1 && (pe[t] || te.unique(i), fe.test(t) && i.reverse()), this.pushStack(i)
        }
    });
    var he = /\S+/g,
        de = {};
    te.Callbacks = function (t) {
        t = "string" == typeof t ? de[t] || o(t) : te.extend({}, t);
        var e, n, r, i, a, s, l = [],
            u = !t.once && [],
            c = function (o) {
                for (e = t.memory && o, n = !0, s = i || 0, i = 0, a = l.length, r = !0; l && a > s; s++)
                    if (l[s].apply(o[0], o[1]) === !1 && t.stopOnFalse) {
                        e = !1;
                        break
                    }
                r = !1, l && (u ? u.length && c(u.shift()) : e ? l = [] : f.disable())
            },
            f = {
                add: function () {
                    if (l) {
                        var n = l.length;
                        ! function o(e) {
                            te.each(e, function (e, n) {
                                var r = te.type(n);
                                "function" === r ? t.unique && f.has(n) || l.push(n) : n && n.length && "string" !== r && o(n)
                            })
                        }(arguments), r ? a = l.length : e && (i = n, c(e))
                    }
                    return this
                },
                remove: function () {
                    return l && te.each(arguments, function (t, e) {
                        for (var n;
                            (n = te.inArray(e, l, n)) > -1;) l.splice(n, 1), r && (a >= n && a--, s >= n && s--)
                    }), this
                },
                has: function (t) {
                    return t ? te.inArray(t, l) > -1 : !(!l || !l.length)
                },
                empty: function () {
                    return l = [], a = 0, this
                },
                disable: function () {
                    return l = u = e = void 0, this
                },
                disabled: function () {
                    return !l
                },
                lock: function () {
                    return u = void 0, e || f.disable(), this
                },
                locked: function () {
                    return !u
                },
                fireWith: function (t, e) {
                    return !l || n && !u || (e = e || [], e = [t, e.slice ? e.slice() : e], r ? u.push(e) : c(e)), this
                },
                fire: function () {
                    return f.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!n
                }
            };
        return f
    }, te.extend({
        Deferred: function (t) {
            var e = [
                    ["resolve", "done", te.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", te.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", te.Callbacks("memory")]
                ],
                n = "pending",
                r = {
                    state: function () {
                        return n
                    },
                    always: function () {
                        return i.done(arguments).fail(arguments), this
                    },
                    then: function () {
                        var t = arguments;
                        return te.Deferred(function (n) {
                            te.each(e, function (e, o) {
                                var a = te.isFunction(t[e]) && t[e];
                                i[o[1]](function () {
                                    var t = a && a.apply(this, arguments);
                                    t && te.isFunction(t.promise) ? t.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === r ? n.promise() : this, a ? [t] : arguments)
                                })
                            }), t = null
                        }).promise()
                    },
                    promise: function (t) {
                        return null != t ? te.extend(t, r) : r
                    }
                },
                i = {};
            return r.pipe = r.then, te.each(e, function (t, o) {
                var a = o[2],
                    s = o[3];
                r[o[1]] = a.add, s && a.add(function () {
                    n = s
                }, e[1 ^ t][2].disable, e[2][2].lock), i[o[0]] = function () {
                    return i[o[0] + "With"](this === i ? r : this, arguments), this
                }, i[o[0] + "With"] = a.fireWith
            }), r.promise(i), t && t.call(i, i), i
        },
        when: function (t) {
            var e, n, r, i = 0,
                o = H.call(arguments),
                a = o.length,
                s = 1 !== a || t && te.isFunction(t.promise) ? a : 0,
                l = 1 === s ? t : te.Deferred(),
                u = function (t, n, r) {
                    return function (i) {
                        n[t] = this, r[t] = arguments.length > 1 ? H.call(arguments) : i, r === e ? l.notifyWith(n, r) : --s || l.resolveWith(n, r)
                    }
                };
            if (a > 1)
                for (e = new Array(a), n = new Array(a), r = new Array(a); a > i; i++) o[i] && te.isFunction(o[i].promise) ? o[i].promise().done(u(i, r, o)).fail(l.reject).progress(u(i, n, e)) : --s;
            return s || l.resolveWith(r, o), l.promise()
        }
    });
    var ge;
    te.fn.ready = function (t) {
        return te.ready.promise().done(t), this
    }, te.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function (t) {
            t ? te.readyWait++ : te.ready(!0)
        },
        ready: function (t) {
            (t === !0 ? --te.readyWait : te.isReady) || (te.isReady = !0, t !== !0 && --te.readyWait > 0 || (ge.resolveWith(J, [te]), te.fn.trigger && te(J).trigger("ready").off("ready")))
        }
    }), te.ready.promise = function (e) {
        return ge || (ge = te.Deferred(), "complete" === J.readyState ? setTimeout(te.ready) : (J.addEventListener("DOMContentLoaded", a, !1), t.addEventListener("load", a, !1))), ge.promise(e)
    }, te.ready.promise();
    var me = te.access = function (t, e, n, r, i, o, a) {
        var s = 0,
            l = t.length,
            u = null == n;
        if ("object" === te.type(n)) {
            i = !0;
            for (s in n) te.access(t, e, s, n[s], !0, o, a)
        } else if (void 0 !== r && (i = !0, te.isFunction(r) || (a = !0), u && (a ? (e.call(t, r), e = null) : (u = e, e = function (t, e, n) {
            return u.call(te(t), n)
        })), e))
            for (; l > s; s++) e(t[s], n, a ? r : r.call(t[s], s, e(t[s], n)));
        return i ? t : u ? e.call(t) : l ? e(t[0], n) : o
    };
    te.acceptData = function (t) {
        return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
    }, s.uid = 1, s.accepts = te.acceptData, s.prototype = {
        key: function (t) {
            if (!s.accepts(t)) return 0;
            var e = {},
                n = t[this.expando];
            if (!n) {
                n = s.uid++;
                try {
                    e[this.expando] = {
                        value: n
                    }, Object.defineProperties(t, e)
                } catch (r) {
                    e[this.expando] = n, te.extend(t, e)
                }
            }
            return this.cache[n] || (this.cache[n] = {}), n
        },
        set: function (t, e, n) {
            var r, i = this.key(t),
                o = this.cache[i];
            if ("string" == typeof e) o[e] = n;
            else if (te.isEmptyObject(o)) te.extend(this.cache[i], e);
            else
                for (r in e) o[r] = e[r];
            return o
        },
        get: function (t, e) {
            var n = this.cache[this.key(t)];
            return void 0 === e ? n : n[e]
        },
        access: function (t, e, n) {
            var r;
            return void 0 === e || e && "string" == typeof e && void 0 === n ? (r = this.get(t, e), void 0 !== r ? r : this.get(t, te.camelCase(e))) : (this.set(t, e, n), void 0 !== n ? n : e)
        },
        remove: function (t, e) {
            var n, r, i, o = this.key(t),
                a = this.cache[o];
            if (void 0 === e) this.cache[o] = {};
            else {
                te.isArray(e) ? r = e.concat(e.map(te.camelCase)) : (i = te.camelCase(e), e in a ? r = [e, i] : (r = i, r = r in a ? [r] : r.match(he) || [])), n = r.length;
                for (; n--;) delete a[r[n]]
            }
        },
        hasData: function (t) {
            return !te.isEmptyObject(this.cache[t[this.expando]] || {})
        },
        discard: function (t) {
            t[this.expando] && delete this.cache[t[this.expando]]
        }
    };
    var ve = new s,
        ye = new s,
        Fe = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        be = /([A-Z])/g;
    te.extend({
        hasData: function (t) {
            return ye.hasData(t) || ve.hasData(t)
        },
        data: function (t, e, n) {
            return ye.access(t, e, n)
        },
        removeData: function (t, e) {
            ye.remove(t, e)
        },
        _data: function (t, e, n) {
            return ve.access(t, e, n)
        },
        _removeData: function (t, e) {
            ve.remove(t, e)
        }
    }), te.fn.extend({
        data: function (t, e) {
            var n, r, i, o = this[0],
                a = o && o.attributes;
            if (void 0 === t) {
                if (this.length && (i = ye.get(o), 1 === o.nodeType && !ve.get(o, "hasDataAttrs"))) {
                    for (n = a.length; n--;) r = a[n].name, 0 === r.indexOf("data-") && (r = te.camelCase(r.slice(5)), l(o, r, i[r]));
                    ve.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof t ? this.each(function () {
                ye.set(this, t)
            }) : me(this, function (e) {
                var n, r = te.camelCase(t);
                if (o && void 0 === e) {
                    if (n = ye.get(o, t), void 0 !== n) return n;
                    if (n = ye.get(o, r), void 0 !== n) return n;
                    if (n = l(o, r, void 0), void 0 !== n) return n
                } else this.each(function () {
                    var n = ye.get(this, r);
                    ye.set(this, r, e), -1 !== t.indexOf("-") && void 0 !== n && ye.set(this, t, e)
                })
            }, null, e, arguments.length > 1, null, !0)
        },
        removeData: function (t) {
            return this.each(function () {
                ye.remove(this, t)
            })
        }
    }), te.extend({
        queue: function (t, e, n) {
            var r;
            return t ? (e = (e || "fx") + "queue", r = ve.get(t, e), n && (!r || te.isArray(n) ? r = ve.access(t, e, te.makeArray(n)) : r.push(n)), r || []) : void 0
        },
        dequeue: function (t, e) {
            e = e || "fx";
            var n = te.queue(t, e),
                r = n.length,
                i = n.shift(),
                o = te._queueHooks(t, e),
                a = function () {
                    te.dequeue(t, e)
                };
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === e && n.unshift("inprogress"), delete o.stop, i.call(t, a, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function (t, e) {
            var n = e + "queueHooks";
            return ve.get(t, n) || ve.access(t, n, {
                empty: te.Callbacks("once memory").add(function () {
                    ve.remove(t, [e + "queue", n])
                })
            })
        }
    }), te.fn.extend({
        queue: function (t, e) {
            var n = 2;
            return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? te.queue(this[0], t) : void 0 === e ? this : this.each(function () {
                var n = te.queue(this, t, e);
                te._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && te.dequeue(this, t)
            })
        },
        dequeue: function (t) {
            return this.each(function () {
                te.dequeue(this, t)
            })
        },
        clearQueue: function (t) {
            return this.queue(t || "fx", [])
        },
        promise: function (t, e) {
            var n, r = 1,
                i = te.Deferred(),
                o = this,
                a = this.length,
                s = function () {
                    --r || i.resolveWith(o, [o])
                };
            for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; a--;) n = ve.get(o[a], t + "queueHooks"), n && n.empty && (r++, n.empty.add(s));
            return s(), i.promise(e)
        }
    });
    var xe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        we = ["Top", "Right", "Bottom", "Left"],
        Ce = function (t, e) {
            return t = e || t, "none" === te.css(t, "display") || !te.contains(t.ownerDocument, t)
        },
        ke = /^(?:checkbox|radio)$/i;
    ! function () {
        var t = J.createDocumentFragment(),
            e = t.appendChild(J.createElement("div"));
        e.innerHTML = "<input type='radio' checked='checked' name='t'/>", K.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", K.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
    }();
    var Te = "undefined";
    K.focusinBubbles = "onfocusin" in t;
    var _e = /^key/,
        Ae = /^(?:mouse|contextmenu)|click/,
        Ee = /^(?:focusinfocus|focusoutblur)$/,
        Be = /^([^.]*)(?:\.(.+)|)$/;
    te.event = {
        global: {},
        add: function (t, e, n, r, i) {
            var o, a, s, l, u, c, f, p, h, d, g, m = ve.get(t);
            if (m)
                for (n.handler && (o = n, n = o.handler, i = o.selector), n.guid || (n.guid = te.guid++), (l = m.events) || (l = m.events = {}), (a = m.handle) || (a = m.handle = function (e) {
                    return typeof te !== Te && te.event.triggered !== e.type ? te.event.dispatch.apply(t, arguments) : void 0
                }), e = (e || "").match(he) || [""], u = e.length; u--;) s = Be.exec(e[u]) || [], h = g = s[1], d = (s[2] || "").split(".").sort(), h && (f = te.event.special[h] || {}, h = (i ? f.delegateType : f.bindType) || h, f = te.event.special[h] || {}, c = te.extend({
                    type: h,
                    origType: g,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && te.expr.match.needsContext.test(i),
                    namespace: d.join(".")
                }, o), (p = l[h]) || (p = l[h] = [], p.delegateCount = 0, f.setup && f.setup.call(t, r, d, a) !== !1 || t.addEventListener && t.addEventListener(h, a, !1)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), te.event.global[h] = !0)
        },
        remove: function (t, e, n, r, i) {
            var o, a, s, l, u, c, f, p, h, d, g, m = ve.hasData(t) && ve.get(t);
            if (m && (l = m.events)) {
                for (e = (e || "").match(he) || [""], u = e.length; u--;)
                    if (s = Be.exec(e[u]) || [], h = g = s[1], d = (s[2] || "").split(".").sort(), h) {
                        for (f = te.event.special[h] || {}, h = (r ? f.delegateType : f.bindType) || h, p = l[h] || [], s = s[2] && new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length; o--;) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(t, c));
                        a && !p.length && (f.teardown && f.teardown.call(t, d, m.handle) !== !1 || te.removeEvent(t, h, m.handle), delete l[h])
                    } else
                        for (h in l) te.event.remove(t, h + e[u], n, r, !0);
                te.isEmptyObject(l) && (delete m.handle, ve.remove(t, "events"))
            }
        },
        trigger: function (e, n, r, i) {
            var o, a, s, l, u, c, f, p = [r || J],
                h = Y.call(e, "type") ? e.type : e,
                d = Y.call(e, "namespace") ? e.namespace.split(".") : [];
            if (a = s = r = r || J, 3 !== r.nodeType && 8 !== r.nodeType && !Ee.test(h + te.event.triggered) && (h.indexOf(".") >= 0 && (d = h.split("."), h = d.shift(), d.sort()), u = h.indexOf(":") < 0 && "on" + h, e = e[te.expando] ? e : new te.Event(h, "object" == typeof e && e), e.isTrigger = i ? 2 : 3, e.namespace = d.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = r), n = null == n ? [e] : te.makeArray(n, [e]), f = te.event.special[h] || {}, i || !f.trigger || f.trigger.apply(r, n) !== !1)) {
                if (!i && !f.noBubble && !te.isWindow(r)) {
                    for (l = f.delegateType || h, Ee.test(l + h) || (a = a.parentNode); a; a = a.parentNode) p.push(a), s = a;
                    s === (r.ownerDocument || J) && p.push(s.defaultView || s.parentWindow || t)
                }
                for (o = 0;
                    (a = p[o++]) && !e.isPropagationStopped();) e.type = o > 1 ? l : f.bindType || h, c = (ve.get(a, "events") || {})[e.type] && ve.get(a, "handle"), c && c.apply(a, n), c = u && a[u], c && c.apply && te.acceptData(a) && (e.result = c.apply(a, n), e.result === !1 && e.preventDefault());
                return e.type = h, i || e.isDefaultPrevented() || f._default && f._default.apply(p.pop(), n) !== !1 || !te.acceptData(r) || u && te.isFunction(r[h]) && !te.isWindow(r) && (s = r[u], s && (r[u] = null), te.event.triggered = h, r[h](), te.event.triggered = void 0, s && (r[u] = s)), e.result
            }
        },
        dispatch: function (t) {
            t = te.event.fix(t);
            var e, n, r, i, o, a = [],
                s = H.call(arguments),
                l = (ve.get(this, "events") || {})[t.type] || [],
                u = te.event.special[t.type] || {};
            if (s[0] = t, t.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, t) !== !1) {
                for (a = te.event.handlers.call(this, t, l), e = 0;
                    (i = a[e++]) && !t.isPropagationStopped();)
                    for (t.currentTarget = i.elem, n = 0;
                        (o = i.handlers[n++]) && !t.isImmediatePropagationStopped();)(!t.namespace_re || t.namespace_re.test(o.namespace)) && (t.handleObj = o, t.data = o.data, r = ((te.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s), void 0 !== r && (t.result = r) === !1 && (t.preventDefault(), t.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, t), t.result
            }
        },
        handlers: function (t, e) {
            var n, r, i, o, a = [],
                s = e.delegateCount,
                l = t.target;
            if (s && l.nodeType && (!t.button || "click" !== t.type))
                for (; l !== this; l = l.parentNode || this)
                    if (l.disabled !== !0 || "click" !== t.type) {
                        for (r = [], n = 0; s > n; n++) o = e[n], i = o.selector + " ", void 0 === r[i] && (r[i] = o.needsContext ? te(i, this).index(l) >= 0 : te.find(i, this, null, [l]).length), r[i] && r.push(o);
                        r.length && a.push({
                            elem: l,
                            handlers: r
                        })
                    }
            return s < e.length && a.push({
                elem: this,
                handlers: e.slice(s)
            }), a
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function (t, e) {
                return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (t, e) {
                var n, r, i, o = e.button;
                return null == t.pageX && null != e.clientX && (n = t.target.ownerDocument || J, r = n.documentElement, i = n.body, t.pageX = e.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0), t.pageY = e.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)), t.which || void 0 === o || (t.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), t
            }
        },
        fix: function (t) {
            if (t[te.expando]) return t;
            var e, n, r, i = t.type,
                o = t,
                a = this.fixHooks[i];
            for (a || (this.fixHooks[i] = a = Ae.test(i) ? this.mouseHooks : _e.test(i) ? this.keyHooks : {}), r = a.props ? this.props.concat(a.props) : this.props, t = new te.Event(o), e = r.length; e--;) n = r[e], t[n] = o[n];
            return t.target || (t.target = J), 3 === t.target.nodeType && (t.target = t.target.parentNode), a.filter ? a.filter(t, o) : t
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function () {
                    return this !== f() && this.focus ? (this.focus(), !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function () {
                    return this === f() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function () {
                    return "checkbox" === this.type && this.click && te.nodeName(this, "input") ? (this.click(), !1) : void 0
                },
                _default: function (t) {
                    return te.nodeName(t.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function (t) {
                    void 0 !== t.result && (t.originalEvent.returnValue = t.result)
                }
            }
        },
        simulate: function (t, e, n, r) {
            var i = te.extend(new te.Event, n, {
                type: t,
                isSimulated: !0,
                originalEvent: {}
            });
            r ? te.event.trigger(i, null, e) : te.event.dispatch.call(e, i), i.isDefaultPrevented() && n.preventDefault()
        }
    }, te.removeEvent = function (t, e, n) {
        t.removeEventListener && t.removeEventListener(e, n, !1)
    }, te.Event = function (t, e) {
        return this instanceof te.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.getPreventDefault && t.getPreventDefault() ? u : c) : this.type = t, e && te.extend(this, e), this.timeStamp = t && t.timeStamp || te.now(), void(this[te.expando] = !0)) : new te.Event(t, e)
    }, te.Event.prototype = {
        isDefaultPrevented: c,
        isPropagationStopped: c,
        isImmediatePropagationStopped: c,
        preventDefault: function () {
            var t = this.originalEvent;
            this.isDefaultPrevented = u, t && t.preventDefault && t.preventDefault()
        },
        stopPropagation: function () {
            var t = this.originalEvent;
            this.isPropagationStopped = u, t && t.stopPropagation && t.stopPropagation()
        },
        stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = u, this.stopPropagation()
        }
    }, te.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function (t, e) {
        te.event.special[t] = {
            delegateType: e,
            bindType: e,
            handle: function (t) {
                var n, r = this,
                    i = t.relatedTarget,
                    o = t.handleObj;
                return (!i || i !== r && !te.contains(r, i)) && (t.type = o.origType, n = o.handler.apply(this, arguments), t.type = e), n
            }
        }
    }), K.focusinBubbles || te.each({
        focus: "focusin",
        blur: "focusout"
    }, function (t, e) {
        var n = function (t) {
            te.event.simulate(e, t.target, te.event.fix(t), !0)
        };
        te.event.special[e] = {
            setup: function () {
                var r = this.ownerDocument || this,
                    i = ve.access(r, e);
                i || r.addEventListener(t, n, !0), ve.access(r, e, (i || 0) + 1)
            },
            teardown: function () {
                var r = this.ownerDocument || this,
                    i = ve.access(r, e) - 1;
                i ? ve.access(r, e, i) : (r.removeEventListener(t, n, !0), ve.remove(r, e))
            }
        }
    }), te.fn.extend({
        on: function (t, e, n, r, i) {
            var o, a;
            if ("object" == typeof t) {
                "string" != typeof e && (n = n || e, e = void 0);
                for (a in t) this.on(a, e, n, t[a], i);
                return this
            }
            if (null == n && null == r ? (r = e, n = e = void 0) : null == r && ("string" == typeof e ? (r = n, n = void 0) : (r = n, n = e, e = void 0)), r === !1) r = c;
            else if (!r) return this;
            return 1 === i && (o = r, r = function (t) {
                return te().off(t), o.apply(this, arguments)
            }, r.guid = o.guid || (o.guid = te.guid++)), this.each(function () {
                te.event.add(this, t, r, n, e)
            })
        },
        one: function (t, e, n, r) {
            return this.on(t, e, n, r, 1)
        },
        off: function (t, e, n) {
            var r, i;
            if (t && t.preventDefault && t.handleObj) return r = t.handleObj, te(t.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof t) {
                for (i in t) this.off(i, e, t[i]);
                return this
            }
            return (e === !1 || "function" == typeof e) && (n = e, e = void 0), n === !1 && (n = c), this.each(function () {
                te.event.remove(this, t, n, e)
            })
        },
        trigger: function (t, e) {
            return this.each(function () {
                te.event.trigger(t, e, this)
            })
        },
        triggerHandler: function (t, e) {
            var n = this[0];
            return n ? te.event.trigger(t, e, n, !0) : void 0
        }
    });
    var Se = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        je = /<([\w:]+)/,
        De = /<|&#?\w+;/,
        $e = /<(?:script|style|link)/i,
        Ne = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Le = /^$|\/(?:java|ecma)script/i,
        Pe = /^true\/(.*)/,
        Oe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        qe = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    qe.optgroup = qe.option, qe.tbody = qe.tfoot = qe.colgroup = qe.caption = qe.thead, qe.th = qe.td, te.extend({
        clone: function (t, e, n) {
            var r, i, o, a, s = t.cloneNode(!0),
                l = te.contains(t.ownerDocument, t);
            if (!(K.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || te.isXMLDoc(t)))
                for (a = v(s), o = v(t), r = 0, i = o.length; i > r; r++) y(o[r], a[r]);
            if (e)
                if (n)
                    for (o = o || v(t), a = a || v(s), r = 0, i = o.length; i > r; r++) m(o[r], a[r]);
                else m(t, s);
            return a = v(s, "script"), a.length > 0 && g(a, !l && v(t, "script")), s
        },
        buildFragment: function (t, e, n, r) {
            for (var i, o, a, s, l, u, c = e.createDocumentFragment(), f = [], p = 0, h = t.length; h > p; p++)
                if (i = t[p], i || 0 === i)
                    if ("object" === te.type(i)) te.merge(f, i.nodeType ? [i] : i);
                    else if (De.test(i)) {
                for (o = o || c.appendChild(e.createElement("div")), a = (je.exec(i) || ["", ""])[1].toLowerCase(), s = qe[a] || qe._default, o.innerHTML = s[1] + i.replace(Se, "<$1></$2>") + s[2], u = s[0]; u--;) o = o.lastChild;
                te.merge(f, o.childNodes), o = c.firstChild, o.textContent = ""
            } else f.push(e.createTextNode(i));
            for (c.textContent = "", p = 0; i = f[p++];)
                if ((!r || -1 === te.inArray(i, r)) && (l = te.contains(i.ownerDocument, i), o = v(c.appendChild(i), "script"), l && g(o), n))
                    for (u = 0; i = o[u++];) Le.test(i.type || "") && n.push(i);
            return c
        },
        cleanData: function (t) {
            for (var e, n, r, i, o, a, s = te.event.special, l = 0; void 0 !== (n = t[l]); l++) {
                if (te.acceptData(n) && (o = n[ve.expando], o && (e = ve.cache[o]))) {
                    if (r = Object.keys(e.events || {}), r.length)
                        for (a = 0; void 0 !== (i = r[a]); a++) s[i] ? te.event.remove(n, i) : te.removeEvent(n, i, e.handle);
                    ve.cache[o] && delete ve.cache[o]
                }
                delete ye.cache[n[ye.expando]]
            }
        }
    }), te.fn.extend({
        text: function (t) {
            return me(this, function (t) {
                return void 0 === t ? te.text(this) : this.empty().each(function () {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = t)
                })
            }, null, t, arguments.length)
        },
        append: function () {
            return this.domManip(arguments, function (t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = p(this, t);
                    e.appendChild(t)
                }
            })
        },
        prepend: function () {
            return this.domManip(arguments, function (t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = p(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            })
        },
        before: function () {
            return this.domManip(arguments, function (t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        },
        after: function () {
            return this.domManip(arguments, function (t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        },
        remove: function (t, e) {
            for (var n, r = t ? te.filter(t, this) : this, i = 0; null != (n = r[i]); i++) e || 1 !== n.nodeType || te.cleanData(v(n)), n.parentNode && (e && te.contains(n.ownerDocument, n) && g(v(n, "script")), n.parentNode.removeChild(n));
            return this
        },
        empty: function () {
            for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (te.cleanData(v(t, !1)), t.textContent = "");
            return this
        },
        clone: function (t, e) {
            return t = null == t ? !1 : t, e = null == e ? t : e, this.map(function () {
                return te.clone(this, t, e)
            })
        },
        html: function (t) {
            return me(this, function (t) {
                var e = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                if ("string" == typeof t && !$e.test(t) && !qe[(je.exec(t) || ["", ""])[1].toLowerCase()]) {
                    t = t.replace(Se, "<$1></$2>");
                    try {
                        for (; r > n; n++) e = this[n] || {}, 1 === e.nodeType && (te.cleanData(v(e, !1)), e.innerHTML = t);
                        e = 0
                    } catch (i) {}
                }
                e && this.empty().append(t)
            }, null, t, arguments.length)
        },
        replaceWith: function () {
            var t = arguments[0];
            return this.domManip(arguments, function (e) {
                t = this.parentNode, te.cleanData(v(this)), t && t.replaceChild(e, this)
            }), t && (t.length || t.nodeType) ? this : this.remove()
        },
        detach: function (t) {
            return this.remove(t, !0)
        },
        domManip: function (t, e) {
            t = G.apply([], t);
            var n, r, i, o, a, s, l = 0,
                u = this.length,
                c = this,
                f = u - 1,
                p = t[0],
                g = te.isFunction(p);
            if (g || u > 1 && "string" == typeof p && !K.checkClone && Ne.test(p)) return this.each(function (n) {
                var r = c.eq(n);
                g && (t[0] = p.call(this, n, r.html())), r.domManip(t, e)
            });
            if (u && (n = te.buildFragment(t, this[0].ownerDocument, !1, this), r = n.firstChild, 1 === n.childNodes.length && (n = r), r)) {
                for (i = te.map(v(n, "script"), h), o = i.length; u > l; l++) a = n, l !== f && (a = te.clone(a, !0, !0), o && te.merge(i, v(a, "script"))), e.call(this[l], a, l);
                if (o)
                    for (s = i[i.length - 1].ownerDocument, te.map(i, d), l = 0; o > l; l++) a = i[l], Le.test(a.type || "") && !ve.access(a, "globalEval") && te.contains(s, a) && (a.src ? te._evalUrl && te._evalUrl(a.src) : te.globalEval(a.textContent.replace(Oe, "")))
            }
            return this
        }
    }), te.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (t, e) {
        te.fn[t] = function (t) {
            for (var n, r = [], i = te(t), o = i.length - 1, a = 0; o >= a; a++) n = a === o ? this : this.clone(!0), te(i[a])[e](n), W.apply(r, n.get());
            return this.pushStack(r)
        }
    });
    var Me, ze = {},
        Ie = /^margin/,
        Re = new RegExp("^(" + xe + ")(?!px)[a-z%]+$", "i"),
        He = function (t) {
            return t.ownerDocument.defaultView.getComputedStyle(t, null)
        };
    ! function () {
        function e() {
            s.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%", o.appendChild(a);
            var e = t.getComputedStyle(s, null);
            n = "1%" !== e.top, r = "4px" === e.width, o.removeChild(a)
        }
        var n, r, i = "padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box",
            o = J.documentElement,
            a = J.createElement("div"),
            s = J.createElement("div");
        s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", K.clearCloneStyle = "content-box" === s.style.backgroundClip, a.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", a.appendChild(s), t.getComputedStyle && te.extend(K, {
            pixelPosition: function () {
                return e(), n
            },
            boxSizingReliable: function () {
                return null == r && e(), r
            },
            reliableMarginRight: function () {
                var e, n = s.appendChild(J.createElement("div"));
                return n.style.cssText = s.style.cssText = i, n.style.marginRight = n.style.width = "0", s.style.width = "1px", o.appendChild(a), e = !parseFloat(t.getComputedStyle(n, null).marginRight), o.removeChild(a), s.innerHTML = "", e
            }
        })
    }(), te.swap = function (t, e, n, r) {
        var i, o, a = {};
        for (o in e) a[o] = t.style[o], t.style[o] = e[o];
        i = n.apply(t, r || []);
        for (o in e) t.style[o] = a[o];
        return i
    };
    var Ge = /^(none|table(?!-c[ea]).+)/,
        We = new RegExp("^(" + xe + ")(.*)$", "i"),
        Ue = new RegExp("^([+-])=(" + xe + ")", "i"),
        Xe = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Ve = {
            letterSpacing: 0,
            fontWeight: 400
        },
        Ye = ["Webkit", "O", "Moz", "ms"];
    te.extend({
        cssHooks: {
            opacity: {
                get: function (t, e) {
                    if (e) {
                        var n = x(t, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function (t, e, n, r) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var i, o, a, s = te.camelCase(e),
                    l = t.style;
                return e = te.cssProps[s] || (te.cssProps[s] = C(l, s)), a = te.cssHooks[e] || te.cssHooks[s], void 0 === n ? a && "get" in a && void 0 !== (i = a.get(t, !1, r)) ? i : l[e] : (o = typeof n, "string" === o && (i = Ue.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(te.css(t, e)), o = "number"), null != n && n === n && ("number" !== o || te.cssNumber[s] || (n += "px"), K.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (l[e] = "inherit"), a && "set" in a && void 0 === (n = a.set(t, n, r)) || (l[e] = "", l[e] = n)), void 0)
            }
        },
        css: function (t, e, n, r) {
            var i, o, a, s = te.camelCase(e);
            return e = te.cssProps[s] || (te.cssProps[s] = C(t.style, s)), a = te.cssHooks[e] || te.cssHooks[s], a && "get" in a && (i = a.get(t, !0, n)), void 0 === i && (i = x(t, e, r)), "normal" === i && e in Ve && (i = Ve[e]), "" === n || n ? (o = parseFloat(i), n === !0 || te.isNumeric(o) ? o || 0 : i) : i
        }
    }), te.each(["height", "width"], function (t, e) {
        te.cssHooks[e] = {
            get: function (t, n, r) {
                return n ? 0 === t.offsetWidth && Ge.test(te.css(t, "display")) ? te.swap(t, Xe, function () {
                    return _(t, e, r)
                }) : _(t, e, r) : void 0
            },
            set: function (t, n, r) {
                var i = r && He(t);
                return k(t, n, r ? T(t, e, r, "border-box" === te.css(t, "boxSizing", !1, i), i) : 0)
            }
        }
    }), te.cssHooks.marginRight = w(K.reliableMarginRight, function (t, e) {
        return e ? te.swap(t, {
            display: "inline-block"
        }, x, [t, "marginRight"]) : void 0
    }), te.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (t, e) {
        te.cssHooks[t + e] = {
            expand: function (n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++) i[t + we[r] + e] = o[r] || o[r - 2] || o[0];
                return i
            }
        }, Ie.test(t) || (te.cssHooks[t + e].set = k)
    }), te.fn.extend({
        css: function (t, e) {
            return me(this, function (t, e, n) {
                var r, i, o = {},
                    a = 0;
                if (te.isArray(e)) {
                    for (r = He(t), i = e.length; i > a; a++) o[e[a]] = te.css(t, e[a], !1, r);
                    return o
                }
                return void 0 !== n ? te.style(t, e, n) : te.css(t, e)
            }, t, e, arguments.length > 1)
        },
        show: function () {
            return A(this, !0)
        },
        hide: function () {
            return A(this)
        },
        toggle: function (t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function () {
                Ce(this) ? te(this).show() : te(this).hide()
            })
        }
    }), te.Tween = E, E.prototype = {
        constructor: E,
        init: function (t, e, n, r, i, o) {
            this.elem = t, this.prop = n, this.easing = i || "swing", this.options = e, this.start = this.now = this.cur(), this.end = r, this.unit = o || (te.cssNumber[n] ? "" : "px")
        },
        cur: function () {
            var t = E.propHooks[this.prop];
            return t && t.get ? t.get(this) : E.propHooks._default.get(this)
        },
        run: function (t) {
            var e, n = E.propHooks[this.prop];
            return this.pos = e = this.options.duration ? te.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : E.propHooks._default.set(this), this
        }
    }, E.prototype.init.prototype = E.prototype, E.propHooks = {
        _default: {
            get: function (t) {
                var e;
                return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = te.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0) : t.elem[t.prop]
            },
            set: function (t) {
                te.fx.step[t.prop] ? te.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[te.cssProps[t.prop]] || te.cssHooks[t.prop]) ? te.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
            }
        }
    }, E.propHooks.scrollTop = E.propHooks.scrollLeft = {
        set: function (t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    }, te.easing = {
        linear: function (t) {
            return t
        },
        swing: function (t) {
            return .5 - Math.cos(t * Math.PI) / 2
        }
    }, te.fx = E.prototype.init, te.fx.step = {};
    var Qe, Ke, Je = /^(?:toggle|show|hide)$/,
        Ze = new RegExp("^(?:([+-])=|)(" + xe + ")([a-z%]*)$", "i"),
        tn = /queueHooks$/,
        en = [D],
        nn = {
            "*": [
                function (t, e) {
                    var n = this.createTween(t, e),
                        r = n.cur(),
                        i = Ze.exec(e),
                        o = i && i[3] || (te.cssNumber[t] ? "" : "px"),
                        a = (te.cssNumber[t] || "px" !== o && +r) && Ze.exec(te.css(n.elem, t)),
                        s = 1,
                        l = 20;
                    if (a && a[3] !== o) {
                        o = o || a[3], i = i || [], a = +r || 1;
                        do s = s || ".5", a /= s, te.style(n.elem, t, a + o); while (s !== (s = n.cur() / r) && 1 !== s && --l)
                    }
                    return i && (a = n.start = +a || +r || 0, n.unit = o, n.end = i[1] ? a + (i[1] + 1) * i[2] : +i[2]), n
                }
            ]
        };
    te.Animation = te.extend(N, {
            tweener: function (t, e) {
                te.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" ");
                for (var n, r = 0, i = t.length; i > r; r++) n = t[r], nn[n] = nn[n] || [], nn[n].unshift(e)
            },
            prefilter: function (t, e) {
                e ? en.unshift(t) : en.push(t)
            }
        }), te.speed = function (t, e, n) {
            var r = t && "object" == typeof t ? te.extend({}, t) : {
                complete: n || !n && e || te.isFunction(t) && t,
                duration: t,
                easing: n && e || e && !te.isFunction(e) && e
            };
            return r.duration = te.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in te.fx.speeds ? te.fx.speeds[r.duration] : te.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function () {
                te.isFunction(r.old) && r.old.call(this), r.queue && te.dequeue(this, r.queue)
            }, r
        }, te.fn.extend({
            fadeTo: function (t, e, n, r) {
                return this.filter(Ce).css("opacity", 0).show().end().animate({
                    opacity: e
                }, t, n, r)
            },
            animate: function (t, e, n, r) {
                var i = te.isEmptyObject(t),
                    o = te.speed(e, n, r),
                    a = function () {
                        var e = N(this, te.extend({}, t), o);
                        (i || ve.get(this, "finish")) && e.stop(!0)
                    };
                return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
            },
            stop: function (t, e, n) {
                var r = function (t) {
                    var e = t.stop;
                    delete t.stop, e(n)
                };
                return "string" != typeof t && (n = e, e = t, t = void 0), e && t !== !1 && this.queue(t || "fx", []), this.each(function () {
                    var e = !0,
                        i = null != t && t + "queueHooks",
                        o = te.timers,
                        a = ve.get(this);
                    if (i) a[i] && a[i].stop && r(a[i]);
                    else
                        for (i in a) a[i] && a[i].stop && tn.test(i) && r(a[i]);
                    for (i = o.length; i--;) o[i].elem !== this || null != t && o[i].queue !== t || (o[i].anim.stop(n), e = !1, o.splice(i, 1));
                    (e || !n) && te.dequeue(this, t)
                })
            },
            finish: function (t) {
                return t !== !1 && (t = t || "fx"), this.each(function () {
                    var e, n = ve.get(this),
                        r = n[t + "queue"],
                        i = n[t + "queueHooks"],
                        o = te.timers,
                        a = r ? r.length : 0;
                    for (n.finish = !0, te.queue(this, t, []), i && i.stop && i.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
                    for (e = 0; a > e; e++) r[e] && r[e].finish && r[e].finish.call(this);
                    delete n.finish
                })
            }
        }), te.each(["toggle", "show", "hide"], function (t, e) {
            var n = te.fn[e];
            te.fn[e] = function (t, r, i) {
                return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(S(e, !0), t, r, i)
            }
        }), te.each({
            slideDown: S("show"),
            slideUp: S("hide"),
            slideToggle: S("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function (t, e) {
            te.fn[t] = function (t, n, r) {
                return this.animate(e, t, n, r)
            }
        }), te.timers = [], te.fx.tick = function () {
            var t, e = 0,
                n = te.timers;
            for (Qe = te.now(); e < n.length; e++) t = n[e], t() || n[e] !== t || n.splice(e--, 1);
            n.length || te.fx.stop(), Qe = void 0
        }, te.fx.timer = function (t) {
            te.timers.push(t), t() ? te.fx.start() : te.timers.pop()
        }, te.fx.interval = 13, te.fx.start = function () {
            Ke || (Ke = setInterval(te.fx.tick, te.fx.interval))
        }, te.fx.stop = function () {
            clearInterval(Ke), Ke = null
        }, te.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, te.fn.delay = function (t, e) {
            return t = te.fx ? te.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function (e, n) {
                var r = setTimeout(e, t);
                n.stop = function () {
                    clearTimeout(r)
                }
            })
        },
        function () {
            var t = J.createElement("input"),
                e = J.createElement("select"),
                n = e.appendChild(J.createElement("option"));
            t.type = "checkbox", K.checkOn = "" !== t.value, K.optSelected = n.selected, e.disabled = !0, K.optDisabled = !n.disabled, t = J.createElement("input"), t.value = "t", t.type = "radio", K.radioValue = "t" === t.value
        }();
    var rn, on, an = te.expr.attrHandle;
    te.fn.extend({
        attr: function (t, e) {
            return me(this, te.attr, t, e, arguments.length > 1)
        },
        removeAttr: function (t) {
            return this.each(function () {
                te.removeAttr(this, t)
            })
        }
    }), te.extend({
        attr: function (t, e, n) {
            var r, i, o = t.nodeType;
            if (t && 3 !== o && 8 !== o && 2 !== o) return typeof t.getAttribute === Te ? te.prop(t, e, n) : (1 === o && te.isXMLDoc(t) || (e = e.toLowerCase(), r = te.attrHooks[e] || (te.expr.match.bool.test(e) ? on : rn)), void 0 === n ? r && "get" in r && null !== (i = r.get(t, e)) ? i : (i = te.find.attr(t, e), null == i ? void 0 : i) : null !== n ? r && "set" in r && void 0 !== (i = r.set(t, n, e)) ? i : (t.setAttribute(e, n + ""), n) : void te.removeAttr(t, e))
        },
        removeAttr: function (t, e) {
            var n, r, i = 0,
                o = e && e.match(he);
            if (o && 1 === t.nodeType)
                for (; n = o[i++];) r = te.propFix[n] || n, te.expr.match.bool.test(n) && (t[r] = !1), t.removeAttribute(n)
        },
        attrHooks: {
            type: {
                set: function (t, e) {
                    if (!K.radioValue && "radio" === e && te.nodeName(t, "input")) {
                        var n = t.value;
                        return t.setAttribute("type", e), n && (t.value = n), e
                    }
                }
            }
        }
    }), on = {
        set: function (t, e, n) {
            return e === !1 ? te.removeAttr(t, n) : t.setAttribute(n, n), n
        }
    }, te.each(te.expr.match.bool.source.match(/\w+/g), function (t, e) {
        var n = an[e] || te.find.attr;
        an[e] = function (t, e, r) {
            var i, o;
            return r || (o = an[e], an[e] = i, i = null != n(t, e, r) ? e.toLowerCase() : null, an[e] = o), i
        }
    });
    var sn = /^(?:input|select|textarea|button)$/i;
    te.fn.extend({
        prop: function (t, e) {
            return me(this, te.prop, t, e, arguments.length > 1)
        },
        removeProp: function (t) {
            return this.each(function () {
                delete this[te.propFix[t] || t]
            })
        }
    }), te.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function (t, e, n) {
            var r, i, o, a = t.nodeType;
            if (t && 3 !== a && 8 !== a && 2 !== a) return o = 1 !== a || !te.isXMLDoc(t), o && (e = te.propFix[e] || e, i = te.propHooks[e]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(t, n, e)) ? r : t[e] = n : i && "get" in i && null !== (r = i.get(t, e)) ? r : t[e]
        },
        propHooks: {
            tabIndex: {
                get: function (t) {
                    return t.hasAttribute("tabindex") || sn.test(t.nodeName) || t.href ? t.tabIndex : -1
                }
            }
        }
    }), K.optSelected || (te.propHooks.selected = {
        get: function (t) {
            var e = t.parentNode;
            return e && e.parentNode && e.parentNode.selectedIndex, null
        }
    }), te.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        te.propFix[this.toLowerCase()] = this
    });
    var ln = /[\t\r\n\f]/g;
    te.fn.extend({
        addClass: function (t) {
            var e, n, r, i, o, a, s = "string" == typeof t && t,
                l = 0,
                u = this.length;
            if (te.isFunction(t)) return this.each(function (e) {
                te(this).addClass(t.call(this, e, this.className))
            });
            if (s)
                for (e = (t || "").match(he) || []; u > l; l++)
                    if (n = this[l], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(ln, " ") : " ")) {
                        for (o = 0; i = e[o++];) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                        a = te.trim(r), n.className !== a && (n.className = a)
                    }
            return this
        },
        removeClass: function (t) {
            var e, n, r, i, o, a, s = 0 === arguments.length || "string" == typeof t && t,
                l = 0,
                u = this.length;
            if (te.isFunction(t)) return this.each(function (e) {
                te(this).removeClass(t.call(this, e, this.className))
            });
            if (s)
                for (e = (t || "").match(he) || []; u > l; l++)
                    if (n = this[l], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(ln, " ") : "")) {
                        for (o = 0; i = e[o++];)
                            for (; r.indexOf(" " + i + " ") >= 0;) r = r.replace(" " + i + " ", " ");
                        a = t ? te.trim(r) : "", n.className !== a && (n.className = a)
                    }
            return this
        },
        toggleClass: function (t, e) {
            var n = typeof t;
            return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : this.each(te.isFunction(t) ? function (n) {
                te(this).toggleClass(t.call(this, n, this.className, e), e)
            } : function () {
                if ("string" === n)
                    for (var e, r = 0, i = te(this), o = t.match(he) || []; e = o[r++];) i.hasClass(e) ? i.removeClass(e) : i.addClass(e);
                else(n === Te || "boolean" === n) && (this.className && ve.set(this, "__className__", this.className), this.className = this.className || t === !1 ? "" : ve.get(this, "__className__") || "")
            })
        },
        hasClass: function (t) {
            for (var e = " " + t + " ", n = 0, r = this.length; r > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(ln, " ").indexOf(e) >= 0) return !0;
            return !1
        }
    });
    var un = /\r/g;
    te.fn.extend({
        val: function (t) {
            var e, n, r, i = this[0]; {
                if (arguments.length) return r = te.isFunction(t), this.each(function (n) {
                    var i;
                    1 === this.nodeType && (i = r ? t.call(this, n, te(this).val()) : t, null == i ? i = "" : "number" == typeof i ? i += "" : te.isArray(i) && (i = te.map(i, function (t) {
                        return null == t ? "" : t + ""
                    })), e = te.valHooks[this.type] || te.valHooks[this.nodeName.toLowerCase()], e && "set" in e && void 0 !== e.set(this, i, "value") || (this.value = i))
                });
                if (i) return e = te.valHooks[i.type] || te.valHooks[i.nodeName.toLowerCase()], e && "get" in e && void 0 !== (n = e.get(i, "value")) ? n : (n = i.value, "string" == typeof n ? n.replace(un, "") : null == n ? "" : n)
            }
        }
    }), te.extend({
        valHooks: {
            select: {
                get: function (t) {
                    for (var e, n, r = t.options, i = t.selectedIndex, o = "select-one" === t.type || 0 > i, a = o ? null : [], s = o ? i + 1 : r.length, l = 0 > i ? s : o ? i : 0; s > l; l++)
                        if (n = r[l], !(!n.selected && l !== i || (K.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && te.nodeName(n.parentNode, "optgroup"))) {
                            if (e = te(n).val(), o) return e;
                            a.push(e)
                        }
                    return a
                },
                set: function (t, e) {
                    for (var n, r, i = t.options, o = te.makeArray(e), a = i.length; a--;) r = i[a], (r.selected = te.inArray(te(r).val(), o) >= 0) && (n = !0);
                    return n || (t.selectedIndex = -1), o
                }
            }
        }
    }), te.each(["radio", "checkbox"], function () {
        te.valHooks[this] = {
            set: function (t, e) {
                return te.isArray(e) ? t.checked = te.inArray(te(t).val(), e) >= 0 : void 0
            }
        }, K.checkOn || (te.valHooks[this].get = function (t) {
            return null === t.getAttribute("value") ? "on" : t.value
        })
    }), te.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (t, e) {
        te.fn[e] = function (t, n) {
            return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
        }
    }), te.fn.extend({
        hover: function (t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        },
        bind: function (t, e, n) {
            return this.on(t, null, e, n)
        },
        unbind: function (t, e) {
            return this.off(t, null, e)
        },
        delegate: function (t, e, n, r) {
            return this.on(e, t, n, r)
        },
        undelegate: function (t, e, n) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
        }
    });
    var cn = te.now(),
        fn = /\?/;
    te.parseJSON = function (t) {
        return JSON.parse(t + "")
    }, te.parseXML = function (t) {
        var e, n;
        if (!t || "string" != typeof t) return null;
        try {
            n = new DOMParser, e = n.parseFromString(t, "text/xml")
        } catch (r) {
            e = void 0
        }
        return (!e || e.getElementsByTagName("parsererror").length) && te.error("Invalid XML: " + t), e
    };
    var pn, hn, dn = /#.*$/,
        gn = /([?&])_=[^&]*/,
        mn = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        vn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        yn = /^(?:GET|HEAD)$/,
        Fn = /^\/\//,
        bn = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        xn = {},
        wn = {},
        Cn = "*/".concat("*");
    try {
        hn = location.href
    } catch (kn) {
        hn = J.createElement("a"), hn.href = "", hn = hn.href
    }
    pn = bn.exec(hn.toLowerCase()) || [], te.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: hn,
            type: "GET",
            isLocal: vn.test(pn[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Cn,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": te.parseJSON,
                "text xml": te.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (t, e) {
            return e ? O(O(t, te.ajaxSettings), e) : O(te.ajaxSettings, t)
        },
        ajaxPrefilter: L(xn),
        ajaxTransport: L(wn),
        ajax: function (t, e) {
            function n(t, e, n, a) {
                var l, c, v, y, b, w = e;
                2 !== F && (F = 2, s && clearTimeout(s), r = void 0, o = a || "", x.readyState = t > 0 ? 4 : 0, l = t >= 200 && 300 > t || 304 === t, n && (y = q(f, x, n)), y = M(f, y, x, l), l ? (f.ifModified && (b = x.getResponseHeader("Last-Modified"), b && (te.lastModified[i] = b), b = x.getResponseHeader("etag"), b && (te.etag[i] = b)), 204 === t || "HEAD" === f.type ? w = "nocontent" : 304 === t ? w = "notmodified" : (w = y.state, c = y.data, v = y.error, l = !v)) : (v = w, (t || !w) && (w = "error", 0 > t && (t = 0))), x.status = t, x.statusText = (e || w) + "", l ? d.resolveWith(p, [c, w, x]) : d.rejectWith(p, [x, w, v]), x.statusCode(m), m = void 0, u && h.trigger(l ? "ajaxSuccess" : "ajaxError", [x, f, l ? c : v]), g.fireWith(p, [x, w]), u && (h.trigger("ajaxComplete", [x, f]), --te.active || te.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (e = t, t = void 0), e = e || {};
            var r, i, o, a, s, l, u, c, f = te.ajaxSetup({}, e),
                p = f.context || f,
                h = f.context && (p.nodeType || p.jquery) ? te(p) : te.event,
                d = te.Deferred(),
                g = te.Callbacks("once memory"),
                m = f.statusCode || {},
                v = {},
                y = {},
                F = 0,
                b = "canceled",
                x = {
                    readyState: 0,
                    getResponseHeader: function (t) {
                        var e;
                        if (2 === F) {
                            if (!a)
                                for (a = {}; e = mn.exec(o);) a[e[1].toLowerCase()] = e[2];
                            e = a[t.toLowerCase()]
                        }
                        return null == e ? null : e
                    },
                    getAllResponseHeaders: function () {
                        return 2 === F ? o : null
                    },
                    setRequestHeader: function (t, e) {
                        var n = t.toLowerCase();
                        return F || (t = y[n] = y[n] || t, v[t] = e), this
                    },
                    overrideMimeType: function (t) {
                        return F || (f.mimeType = t), this
                    },
                    statusCode: function (t) {
                        var e;
                        if (t)
                            if (2 > F)
                                for (e in t) m[e] = [m[e], t[e]];
                            else x.always(t[x.status]);
                        return this
                    },
                    abort: function (t) {
                        var e = t || b;
                        return r && r.abort(e), n(0, e), this
                    }
                };
            if (d.promise(x).complete = g.add, x.success = x.done, x.error = x.fail, f.url = ((t || f.url || hn) + "").replace(dn, "").replace(Fn, pn[1] + "//"), f.type = e.method || e.type || f.method || f.type, f.dataTypes = te.trim(f.dataType || "*").toLowerCase().match(he) || [""], null == f.crossDomain && (l = bn.exec(f.url.toLowerCase()), f.crossDomain = !(!l || l[1] === pn[1] && l[2] === pn[2] && (l[3] || ("http:" === l[1] ? "80" : "443")) === (pn[3] || ("http:" === pn[1] ? "80" : "443")))), f.data && f.processData && "string" != typeof f.data && (f.data = te.param(f.data, f.traditional)), P(xn, f, e, x), 2 === F) return x;
            u = f.global, u && 0 === te.active++ && te.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !yn.test(f.type), i = f.url, f.hasContent || (f.data && (i = f.url += (fn.test(i) ? "&" : "?") + f.data, delete f.data), f.cache === !1 && (f.url = gn.test(i) ? i.replace(gn, "$1_=" + cn++) : i + (fn.test(i) ? "&" : "?") + "_=" + cn++)), f.ifModified && (te.lastModified[i] && x.setRequestHeader("If-Modified-Since", te.lastModified[i]), te.etag[i] && x.setRequestHeader("If-None-Match", te.etag[i])), (f.data && f.hasContent && f.contentType !== !1 || e.contentType) && x.setRequestHeader("Content-Type", f.contentType), x.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Cn + "; q=0.01" : "") : f.accepts["*"]);
            for (c in f.headers) x.setRequestHeader(c, f.headers[c]);
            if (f.beforeSend && (f.beforeSend.call(p, x, f) === !1 || 2 === F)) return x.abort();
            b = "abort";
            for (c in {
                success: 1,
                error: 1,
                complete: 1
            }) x[c](f[c]);
            if (r = P(wn, f, e, x)) {
                x.readyState = 1, u && h.trigger("ajaxSend", [x, f]), f.async && f.timeout > 0 && (s = setTimeout(function () {
                    x.abort("timeout")
                }, f.timeout));
                try {
                    F = 1, r.send(v, n)
                } catch (w) {
                    if (!(2 > F)) throw w;
                    n(-1, w)
                }
            } else n(-1, "No Transport");
            return x
        },
        getJSON: function (t, e, n) {
            return te.get(t, e, n, "json")
        },
        getScript: function (t, e) {
            return te.get(t, void 0, e, "script")
        }
    }), te.each(["get", "post"], function (t, e) {
        te[e] = function (t, n, r, i) {
            return te.isFunction(n) && (i = i || r, r = n, n = void 0), te.ajax({
                url: t,
                type: e,
                dataType: i,
                data: n,
                success: r
            })
        }
    }), te.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {
        te.fn[e] = function (t) {
            return this.on(e, t)
        }
    }), te._evalUrl = function (t) {
        return te.ajax({
            url: t,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, te.fn.extend({
        wrapAll: function (t) {
            var e;
            return te.isFunction(t) ? this.each(function (e) {
                te(this).wrapAll(t.call(this, e))
            }) : (this[0] && (e = te(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
                for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                return t
            }).append(this)), this)
        },
        wrapInner: function (t) {
            return this.each(te.isFunction(t) ? function (e) {
                te(this).wrapInner(t.call(this, e))
            } : function () {
                var e = te(this),
                    n = e.contents();
                n.length ? n.wrapAll(t) : e.append(t)
            })
        },
        wrap: function (t) {
            var e = te.isFunction(t);
            return this.each(function (n) {
                te(this).wrapAll(e ? t.call(this, n) : t)
            })
        },
        unwrap: function () {
            return this.parent().each(function () {
                te.nodeName(this, "body") || te(this).replaceWith(this.childNodes)
            }).end()
        }
    }), te.expr.filters.hidden = function (t) {
        return t.offsetWidth <= 0 && t.offsetHeight <= 0
    }, te.expr.filters.visible = function (t) {
        return !te.expr.filters.hidden(t)
    };
    var Tn = /%20/g,
        _n = /\[\]$/,
        An = /\r?\n/g,
        En = /^(?:submit|button|image|reset|file)$/i,
        Bn = /^(?:input|select|textarea|keygen)/i;
    te.param = function (t, e) {
        var n, r = [],
            i = function (t, e) {
                e = te.isFunction(e) ? e() : null == e ? "" : e, r[r.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
            };
        if (void 0 === e && (e = te.ajaxSettings && te.ajaxSettings.traditional), te.isArray(t) || t.jquery && !te.isPlainObject(t)) te.each(t, function () {
            i(this.name, this.value)
        });
        else
            for (n in t) z(n, t[n], e, i);
        return r.join("&").replace(Tn, "+")
    }, te.fn.extend({
        serialize: function () {
            return te.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                var t = te.prop(this, "elements");
                return t ? te.makeArray(t) : this
            }).filter(function () {
                var t = this.type;
                return this.name && !te(this).is(":disabled") && Bn.test(this.nodeName) && !En.test(t) && (this.checked || !ke.test(t))
            }).map(function (t, e) {
                var n = te(this).val();
                return null == n ? null : te.isArray(n) ? te.map(n, function (t) {
                    return {
                        name: e.name,
                        value: t.replace(An, "\r\n")
                    }
                }) : {
                    name: e.name,
                    value: n.replace(An, "\r\n")
                }
            }).get()
        }
    }), te.ajaxSettings.xhr = function () {
        try {
            return new XMLHttpRequest
        } catch (t) {}
    };
    var Sn = 0,
        jn = {},
        Dn = {
            0: 200,
            1223: 204
        },
        $n = te.ajaxSettings.xhr();
    t.ActiveXObject && te(t).on("unload", function () {
        for (var t in jn) jn[t]()
    }), K.cors = !!$n && "withCredentials" in $n, K.ajax = $n = !!$n, te.ajaxTransport(function (t) {
        var e;
        return K.cors || $n && !t.crossDomain ? {
            send: function (n, r) {
                var i, o = t.xhr(),
                    a = ++Sn;
                if (o.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (i in t.xhrFields) o[i] = t.xhrFields[i];
                t.mimeType && o.overrideMimeType && o.overrideMimeType(t.mimeType), t.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                for (i in n) o.setRequestHeader(i, n[i]);
                e = function (t) {
                    return function () {
                        e && (delete jn[a], e = o.onload = o.onerror = null, "abort" === t ? o.abort() : "error" === t ? r(o.status, o.statusText) : r(Dn[o.status] || o.status, o.statusText, "string" == typeof o.responseText ? {
                            text: o.responseText
                        } : void 0, o.getAllResponseHeaders()))
                    }
                }, o.onload = e(), o.onerror = e("error"), e = jn[a] = e("abort"), o.send(t.hasContent && t.data || null)
            },
            abort: function () {
                e && e()
            }
        } : void 0
    }), te.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function (t) {
                return te.globalEval(t), t
            }
        }
    }), te.ajaxPrefilter("script", function (t) {
        void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
    }), te.ajaxTransport("script", function (t) {
        if (t.crossDomain) {
            var e, n;
            return {
                send: function (r, i) {
                    e = te("<script>").prop({
                        async: !0,
                        charset: t.scriptCharset,
                        src: t.url
                    }).on("load error", n = function (t) {
                        e.remove(), n = null, t && i("error" === t.type ? 404 : 200, t.type)
                    }), J.head.appendChild(e[0])
                },
                abort: function () {
                    n && n()
                }
            }
        }
    });
    var Nn = [],
        Ln = /(=)\?(?=&|$)|\?\?/;
    te.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var t = Nn.pop() || te.expando + "_" + cn++;
            return this[t] = !0, t
        }
    }), te.ajaxPrefilter("json jsonp", function (e, n, r) {
        var i, o, a, s = e.jsonp !== !1 && (Ln.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && Ln.test(e.data) && "data");
        return s || "jsonp" === e.dataTypes[0] ? (i = e.jsonpCallback = te.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(Ln, "$1" + i) : e.jsonp !== !1 && (e.url += (fn.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function () {
            return a || te.error(i + " was not called"), a[0]
        }, e.dataTypes[0] = "json", o = t[i], t[i] = function () {
            a = arguments
        }, r.always(function () {
            t[i] = o, e[i] && (e.jsonpCallback = n.jsonpCallback, Nn.push(i)), a && te.isFunction(o) && o(a[0]), a = o = void 0
        }), "script") : void 0
    }), te.parseHTML = function (t, e, n) {
        if (!t || "string" != typeof t) return null;
        "boolean" == typeof e && (n = e, e = !1), e = e || J;
        var r = ae.exec(t),
            i = !n && [];
        return r ? [e.createElement(r[1])] : (r = te.buildFragment([t], e, i), i && i.length && te(i).remove(), te.merge([], r.childNodes))
    };
    var Pn = te.fn.load;
    te.fn.load = function (t, e, n) {
        if ("string" != typeof t && Pn) return Pn.apply(this, arguments);
        var r, i, o, a = this,
            s = t.indexOf(" ");
        return s >= 0 && (r = t.slice(s), t = t.slice(0, s)), te.isFunction(e) ? (n = e, e = void 0) : e && "object" == typeof e && (i = "POST"), a.length > 0 && te.ajax({
            url: t,
            type: i,
            dataType: "html",
            data: e
        }).done(function (t) {
            o = arguments, a.html(r ? te("<div>").append(te.parseHTML(t)).find(r) : t)
        }).complete(n && function (t, e) {
            a.each(n, o || [t.responseText, e, t])
        }), this
    }, te.expr.filters.animated = function (t) {
        return te.grep(te.timers, function (e) {
            return t === e.elem
        }).length
    };
    var On = t.document.documentElement;
    te.offset = {
        setOffset: function (t, e, n) {
            var r, i, o, a, s, l, u, c = te.css(t, "position"),
                f = te(t),
                p = {};
            "static" === c && (t.style.position = "relative"), s = f.offset(), o = te.css(t, "top"), l = te.css(t, "left"), u = ("absolute" === c || "fixed" === c) && (o + l).indexOf("auto") > -1, u ? (r = f.position(), a = r.top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(l) || 0), te.isFunction(e) && (e = e.call(t, n, s)), null != e.top && (p.top = e.top - s.top + a), null != e.left && (p.left = e.left - s.left + i), "using" in e ? e.using.call(t, p) : f.css(p)
        }
    }, te.fn.extend({
        offset: function (t) {
            if (arguments.length) return void 0 === t ? this : this.each(function (e) {
                te.offset.setOffset(this, t, e)
            });
            var e, n, r = this[0],
                i = {
                    top: 0,
                    left: 0
                },
                o = r && r.ownerDocument;
            if (o) return e = o.documentElement, te.contains(e, r) ? (typeof r.getBoundingClientRect !== Te && (i = r.getBoundingClientRect()), n = I(o), {
                top: i.top + n.pageYOffset - e.clientTop,
                left: i.left + n.pageXOffset - e.clientLeft
            }) : i
        },
        position: function () {
            if (this[0]) {
                var t, e, n = this[0],
                    r = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === te.css(n, "position") ? e = n.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), te.nodeName(t[0], "html") || (r = t.offset()), r.top += te.css(t[0], "borderTopWidth", !0), r.left += te.css(t[0], "borderLeftWidth", !0)), {
                    top: e.top - r.top - te.css(n, "marginTop", !0),
                    left: e.left - r.left - te.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                for (var t = this.offsetParent || On; t && !te.nodeName(t, "html") && "static" === te.css(t, "position");) t = t.offsetParent;
                return t || On
            })
        }
    }), te.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (e, n) {
        var r = "pageYOffset" === n;
        te.fn[e] = function (i) {
            return me(this, function (e, i, o) {
                var a = I(e);
                return void 0 === o ? a ? a[n] : e[i] : void(a ? a.scrollTo(r ? t.pageXOffset : o, r ? o : t.pageYOffset) : e[i] = o)
            }, e, i, arguments.length, null)
        }
    }), te.each(["top", "left"], function (t, e) {
        te.cssHooks[e] = w(K.pixelPosition, function (t, n) {
            return n ? (n = x(t, e), Re.test(n) ? te(t).position()[e] + "px" : n) : void 0
        })
    }), te.each({
        Height: "height",
        Width: "width"
    }, function (t, e) {
        te.each({
            padding: "inner" + t,
            content: e,
            "": "outer" + t
        }, function (n, r) {
            te.fn[r] = function (r, i) {
                var o = arguments.length && (n || "boolean" != typeof r),
                    a = n || (r === !0 || i === !0 ? "margin" : "border");
                return me(this, function (e, n, r) {
                    var i;
                    return te.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (i = e.documentElement, Math.max(e.body["scroll" + t], i["scroll" + t], e.body["offset" + t], i["offset" + t], i["client" + t])) : void 0 === r ? te.css(e, n, a) : te.style(e, n, r, a)
                }, e, o ? r : void 0, o, null)
            }
        })
    }), te.fn.size = function () {
        return this.length
    }, te.fn.andSelf = te.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
        return te
    });
    var qn = t.jQuery,
        Mn = t.$;
    return te.noConflict = function (e) {
        return t.$ === te && (t.$ = Mn), e && t.jQuery === te && (t.jQuery = qn), te
    }, typeof e === Te && (t.jQuery = t.$ = te), te
}), + function (t) {
    "use strict";
    var e = function (n, r) {
        this.options = t.extend({}, e.DEFAULTS, r), this.$window = t(window).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(n), this.affixed = this.unpin = this.pinnedOffset = null, this.checkPosition()
    };
    e.RESET = "affix affix-top affix-bottom", e.DEFAULTS = {
        offset: 0
    }, e.prototype.getPinnedOffset = function () {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(e.RESET).addClass("affix");
        var t = this.$window.scrollTop(),
            n = this.$element.offset();
        return this.pinnedOffset = n.top - t
    }, e.prototype.checkPositionWithEventLoop = function () {
        setTimeout(t.proxy(this.checkPosition, this), 1)
    }, e.prototype.checkPosition = function () {
        if (this.$element.is(":visible")) {
            var n = t(document).height(),
                r = this.$window.scrollTop(),
                i = this.$element.offset(),
                o = this.options.offset,
                a = o.top,
                s = o.bottom;
            "object" != typeof o && (s = a = o), "function" == typeof a && (a = o.top(this.$element)), "function" == typeof s && (s = o.bottom(this.$element));
            var l = null != this.unpin && r + this.unpin <= i.top ? !1 : null != s && i.top + this.$element.height() >= n - s ? "bottom" : null != a && a >= r ? "top" : !1;
            if (this.affixed !== l) {
                null != this.unpin && this.$element.css("top", "");
                var u = "affix" + (l ? "-" + l : ""),
                    c = t.Event(u + ".bs.affix");
                this.$element.trigger(c), c.isDefaultPrevented() || (this.affixed = l, this.unpin = "bottom" == l ? this.getPinnedOffset() : null, this.$element.removeClass(e.RESET).addClass(u).trigger(t.Event(u.replace("affix", "affixed"))), "bottom" == l && this.$element.offset({
                    top: i.top
                }))
            }
        }
    };
    var n = t.fn.affix;
    t.fn.affix = function (n) {
        return this.each(function () {
            var r = t(this),
                i = r.data("bs.affix"),
                o = "object" == typeof n && n;
            i || r.data("bs.affix", i = new e(this, o)), "string" == typeof n && i[n]()
        })
    }, t.fn.affix.Constructor = e, t.fn.affix.noConflict = function () {
        return t.fn.affix = n, this
    }, t(window).on("load", function () {
        t('[data-spy="affix"]').each(function () {
            var e = t(this),
                n = e.data();
            n.offset = n.offset || {}, n.offsetBottom && (n.offset.bottom = n.offsetBottom), n.offsetTop && (n.offset.top = n.offsetTop), e.affix(n)
        })
    })
}(jQuery), + function (t) {
    "use strict";
    var e = '[data-dismiss="alert"]',
        n = function (n) {
            t(n).on("click", e, this.close)
        };
    n.prototype.close = function (e) {
        function n() {
            o.trigger("closed.bs.alert").remove()
        }
        var r = t(this),
            i = r.attr("data-target");
        i || (i = r.attr("href"), i = i && i.replace(/.*(?=#[^\s]*$)/, ""));
        var o = t(i);
        e && e.preventDefault(), o.length || (o = r.hasClass("alert") ? r : r.parent()), o.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (o.removeClass("in"), t.support.transition && o.hasClass("fade") ? o.one(t.support.transition.end, n).emulateTransitionEnd(150) : n())
    };
    var r = t.fn.alert;
    t.fn.alert = function (e) {
        return this.each(function () {
            var r = t(this),
                i = r.data("bs.alert");
            i || r.data("bs.alert", i = new n(this)), "string" == typeof e && i[e].call(r)
        })
    }, t.fn.alert.Constructor = n, t.fn.alert.noConflict = function () {
        return t.fn.alert = r, this
    }, t(document).on("click.bs.alert.data-api", e, n.prototype.close)
}(jQuery), + function (t) {
    "use strict";
    var e = function (n, r) {
        this.$element = t(n), this.options = t.extend({}, e.DEFAULTS, r), this.isLoading = !1
    };
    e.DEFAULTS = {
        loadingText: "loading..."
    }, e.prototype.setState = function (e) {
        var n = "disabled",
            r = this.$element,
            i = r.is("input") ? "val" : "html",
            o = r.data();
        e += "Text", o.resetText || r.data("resetText", r[i]()), r[i](o[e] || this.options[e]), setTimeout(t.proxy(function () {
            "loadingText" == e ? (this.isLoading = !0, r.addClass(n).attr(n, n)) : this.isLoading && (this.isLoading = !1, r.removeClass(n).removeAttr(n))
        }, this), 0)
    }, e.prototype.toggle = function () {
        var t = !0,
            e = this.$element.closest('[data-toggle="buttons"]');
        if (e.length) {
            var n = this.$element.find("input");
            "radio" == n.prop("type") && (n.prop("checked") && this.$element.hasClass("active") ? t = !1 : e.find(".active").removeClass("active")), t && n.prop("checked", !this.$element.hasClass("active")).trigger("change")
        }
        t && this.$element.toggleClass("active")
    };
    var n = t.fn.button;
    t.fn.button = function (n) {
        return this.each(function () {
            var r = t(this),
                i = r.data("bs.button"),
                o = "object" == typeof n && n;
            i || r.data("bs.button", i = new e(this, o)), "toggle" == n ? i.toggle() : n && i.setState(n)
        })
    }, t.fn.button.Constructor = e, t.fn.button.noConflict = function () {
        return t.fn.button = n, this
    }, t(document).on("click.bs.button.data-api", "[data-toggle^=button]", function (e) {
        var n = t(e.target);
        n.hasClass("btn") || (n = n.closest(".btn")), n.button("toggle"), e.preventDefault()
    })
}(jQuery), + function (t) {
    "use strict";
    var e = function (e, n) {
        this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = n, this.paused = this.sliding = this.interval = this.$active = this.$items = null, "hover" == this.options.pause && this.$element.on("mouseenter", t.proxy(this.pause, this)).on("mouseleave", t.proxy(this.cycle, this))
    };
    e.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0
    }, e.prototype.cycle = function (e) {
        return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
    }, e.prototype.getActiveIndex = function () {
        return this.$active = this.$element.find(".item.active"), this.$items = this.$active.parent().children(".item"), this.$items.index(this.$active)
    }, e.prototype.to = function (e) {
        var n = this,
            r = this.getActiveIndex();
        return e > this.$items.length - 1 || 0 > e ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function () {
            n.to(e)
        }) : r == e ? this.pause().cycle() : this.slide(e > r ? "next" : "prev", t(this.$items[e]))
    }, e.prototype.pause = function (e) {
        return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, e.prototype.next = function () {
        return this.sliding ? void 0 : this.slide("next")
    }, e.prototype.prev = function () {
        return this.sliding ? void 0 : this.slide("prev")
    }, e.prototype.slide = function (e, n) {
        var r = this.$element.find(".item.active"),
            i = n || r[e](),
            o = this.interval,
            a = "next" == e ? "left" : "right",
            s = "next" == e ? "first" : "last",
            l = this;
        if (!i.length) {
            if (!this.options.wrap) return;
            i = this.$element.find(".item")[s]()
        }
        if (i.hasClass("active")) return this.sliding = !1;
        var u = t.Event("slide.bs.carousel", {
            relatedTarget: i[0],
            direction: a
        });
        return this.$element.trigger(u), u.isDefaultPrevented() ? void 0 : (this.sliding = !0, o && this.pause(), this.$indicators.length && (this.$indicators.find(".active").removeClass("active"), this.$element.one("slid.bs.carousel", function () {
            var e = t(l.$indicators.children()[l.getActiveIndex()]);
            e && e.addClass("active")
        })), t.support.transition && this.$element.hasClass("slide") ? (i.addClass(e), i[0].offsetWidth, r.addClass(a), i.addClass(a), r.one(t.support.transition.end, function () {
            i.removeClass([e, a].join(" ")).addClass("active"), r.removeClass(["active", a].join(" ")), l.sliding = !1, setTimeout(function () {
                l.$element.trigger("slid.bs.carousel")
            }, 0)
        }).emulateTransitionEnd(1e3 * r.css("transition-duration").slice(0, -1))) : (r.removeClass("active"), i.addClass("active"), this.sliding = !1, this.$element.trigger("slid.bs.carousel")), o && this.cycle(), this)
    };
    var n = t.fn.carousel;
    t.fn.carousel = function (n) {
        return this.each(function () {
            var r = t(this),
                i = r.data("bs.carousel"),
                o = t.extend({}, e.DEFAULTS, r.data(), "object" == typeof n && n),
                a = "string" == typeof n ? n : o.slide;
            i || r.data("bs.carousel", i = new e(this, o)), "number" == typeof n ? i.to(n) : a ? i[a]() : o.interval && i.pause().cycle()
        })
    }, t.fn.carousel.Constructor = e, t.fn.carousel.noConflict = function () {
        return t.fn.carousel = n, this
    }, t(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", function (e) {
        var n, r = t(this),
            i = t(r.attr("data-target") || (n = r.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "")),
            o = t.extend({}, i.data(), r.data()),
            a = r.attr("data-slide-to");
        a && (o.interval = !1), i.carousel(o), (a = r.attr("data-slide-to")) && i.data("bs.carousel").to(a), e.preventDefault()
    }), t(window).on("load", function () {
        t('[data-ride="carousel"]').each(function () {
            var e = t(this);
            e.carousel(e.data())
        })
    })
}(jQuery), + function (t) {
    "use strict";
    var e = function (n, r) {
        this.$element = t(n), this.options = t.extend({}, e.DEFAULTS, r), this.transitioning = null, this.options.parent && (this.$parent = t(this.options.parent)), this.options.toggle && this.toggle()
    };
    e.DEFAULTS = {
        toggle: !0
    }, e.prototype.dimension = function () {
        var t = this.$element.hasClass("width");
        return t ? "width" : "height"
    }, e.prototype.show = function () {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var e = t.Event("show.bs.collapse");
            if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                var n = this.$parent && this.$parent.find("> .panel > .in");
                if (n && n.length) {
                    var r = n.data("bs.collapse");
                    if (r && r.transitioning) return;
                    n.collapse("hide"), r || n.data("bs.collapse", null)
                }
                var i = this.dimension();
                this.$element.removeClass("collapse").addClass("collapsing")[i](0), this.transitioning = 1;
                var o = function (e) {
                    return e && e.target != this.$element[0] ? void this.$element.one(t.support.transition.end, t.proxy(o, this)) : (this.$element.removeClass("collapsing").addClass("collapse in")[i]("auto"), this.transitioning = 0, void this.$element.trigger("shown.bs.collapse"))
                };
                if (!t.support.transition) return o.call(this);
                var a = t.camelCase(["scroll", i].join("-"));
                this.$element.one(t.support.transition.end, t.proxy(o, this)).emulateTransitionEnd(350)[i](this.$element[0][a])
            }
        }
    }, e.prototype.hide = function () {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var e = t.Event("hide.bs.collapse");
            if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                var n = this.dimension();
                this.$element[n](this.$element[n]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"), this.transitioning = 1;
                var r = function (e) {
                    return e && e.target != this.$element[0] ? void this.$element.one(t.support.transition.end, t.proxy(r, this)) : (this.transitioning = 0, void this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse"))
                };
                return t.support.transition ? void this.$element[n](0).one(t.support.transition.end, t.proxy(r, this)).emulateTransitionEnd(350) : r.call(this)
            }
        }
    }, e.prototype.toggle = function () {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    };
    var n = t.fn.collapse;
    t.fn.collapse = function (n) {
        return this.each(function () {
            var r = t(this),
                i = r.data("bs.collapse"),
                o = t.extend({}, e.DEFAULTS, r.data(), "object" == typeof n && n);
            !i && o.toggle && "show" == n && (n = !n), i || r.data("bs.collapse", i = new e(this, o)), "string" == typeof n && i[n]()
        })
    }, t.fn.collapse.Constructor = e, t.fn.collapse.noConflict = function () {
        return t.fn.collapse = n, this
    }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (e) {
        var n, r = t(this),
            i = r.attr("data-target") || e.preventDefault() || (n = r.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, ""),
            o = t(i),
            a = o.data("bs.collapse"),
            s = a ? "toggle" : r.data(),
            l = r.attr("data-parent"),
            u = l && t(l);
        a && a.transitioning || (u && u.find('[data-toggle="collapse"][data-parent="' + l + '"]').not(r).addClass("collapsed"), r[o.hasClass("in") ? "addClass" : "removeClass"]("collapsed")), o.collapse(s)
    })
}(jQuery), + function (t) {
    "use strict";

    function e(e) {
        t(r).remove(), t(i).each(function () {
            var r = n(t(this)),
                i = {
                    relatedTarget: this
                };
            r.hasClass("open") && (r.trigger(e = t.Event("hide.bs.dropdown", i)), e.isDefaultPrevented() || r.removeClass("open").trigger("hidden.bs.dropdown", i))
        })
    }

    function n(e) {
        var n = e.attr("data-target");
        n || (n = e.attr("href"), n = n && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
        var r = n && t(n);
        return r && r.length ? r : e.parent()
    }
    var r = ".dropdown-backdrop",
        i = '[data-toggle="dropdown"]',
        o = function (e) {
            t(e).on("click.bs.dropdown", this.toggle)
        };
    o.prototype.toggle = function (r) {
        var i = t(this);
        if (!i.is(".disabled, :disabled")) {
            var o = n(i),
                a = o.hasClass("open");
            if (e(), !a) {
                "ontouchstart" in document.documentElement && !o.closest(".navbar-nav").length && t('<div class="dropdown-backdrop"/>').insertAfter(t(this)).on("click", e);
                var s = {
                    relatedTarget: this
                };
                if (o.trigger(r = t.Event("show.bs.dropdown", s)), r.isDefaultPrevented()) return;
                i.trigger("focus"), o.toggleClass("open").trigger("shown.bs.dropdown", s)
            }
            return !1
        }
    }, o.prototype.keydown = function (e) {
        if (/(38|40|27)/.test(e.keyCode)) {
            var r = t(this);
            if (e.preventDefault(), e.stopPropagation(), !r.is(".disabled, :disabled")) {
                var o = n(r),
                    a = o.hasClass("open");
                if (!a || a && 27 == e.keyCode) return 27 == e.which && o.find(i).trigger("focus"), r.trigger("click");
                var s = " li:not(.divider):visible a",
                    l = o.find('[role="menu"]' + s + ', [role="listbox"]' + s);
                if (l.length) {
                    var u = l.index(l.filter(":focus"));
                    38 == e.keyCode && u > 0 && u--, 40 == e.keyCode && u < l.length - 1 && u++, ~u || (u = 0), l.eq(u).trigger("focus")
                }
            }
        }
    };
    var a = t.fn.dropdown;
    t.fn.dropdown = function (e) {
        return this.each(function () {
            var n = t(this),
                r = n.data("bs.dropdown");
            r || n.data("bs.dropdown", r = new o(this)), "string" == typeof e && r[e].call(n)
        })
    }, t.fn.dropdown.Constructor = o, t.fn.dropdown.noConflict = function () {
        return t.fn.dropdown = a, this
    }, t(document).on("click.bs.dropdown.data-api", e).on("click.bs.dropdown.data-api", ".dropdown form", function (t) {
        t.stopPropagation()
    }).on("click.bs.dropdown.data-api", i, o.prototype.toggle).on("keydown.bs.dropdown.data-api", i + ', [role="menu"], [role="listbox"]', o.prototype.keydown)
}(jQuery), + function (t) {
    "use strict";
    var e = function (e) {
        this.element = t(e)
    };
    e.prototype.show = function () {
        var e = this.element,
            n = e.closest("ul:not(.dropdown-menu)"),
            r = e.data("target");
        if (r || (r = e.attr("href"), r = r && r.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
            var i = n.find(".active:last a")[0],
                o = t.Event("show.bs.tab", {
                    relatedTarget: i
                });
            if (e.trigger(o), !o.isDefaultPrevented()) {
                var a = t(r);
                this.activate(e.parent("li"), n), this.activate(a, a.parent(), function () {
                    e.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: i
                    })
                })
            }
        }
    }, e.prototype.activate = function (e, n, r) {
        function i() {
            o.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"), e.addClass("active"), a ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu") && e.closest("li.dropdown").addClass("active"), r && r()
        }
        var o = n.find("> .active"),
            a = r && t.support.transition && o.hasClass("fade");
        a ? o.one(t.support.transition.end, i).emulateTransitionEnd(150) : i(), o.removeClass("in")
    };
    var n = t.fn.tab;
    t.fn.tab = function (n) {
        return this.each(function () {
            var r = t(this),
                i = r.data("bs.tab");
            i || r.data("bs.tab", i = new e(this)), "string" == typeof n && i[n]()
        })
    }, t.fn.tab.Constructor = e, t.fn.tab.noConflict = function () {
        return t.fn.tab = n, this
    }, t(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function (e) {
        e.preventDefault(), t(this).tab("show")
    })
}(jQuery), + function (t) {
    "use strict";

    function e() {
        var t = document.createElement("bootstrap"),
            e = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
        for (var n in e)
            if (void 0 !== t.style[n]) return {
                end: e[n]
            };
        return !1
    }
    t.fn.emulateTransitionEnd = function (e) {
        var n = !1,
            r = this;
        t(this).one(t.support.transition.end, function () {
            n = !0
        });
        var i = function () {
            n || t(r).trigger(t.support.transition.end)
        };
        return setTimeout(i, e), this
    }, t(function () {
        t.support.transition = e()
    })
}(jQuery), + function (t) {
    "use strict";

    function e(n, r) {
        var i, o = t.proxy(this.process, this);
        this.$element = t(t(n).is("body") ? window : n), this.$body = t("body"), this.$scrollElement = this.$element.on("scroll.bs.scrollspy", o), this.options = t.extend({}, e.DEFAULTS, r), this.selector = (this.options.target || (i = t(n).attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "") || "") + " .nav li > a", this.offsets = t([]), this.targets = t([]), this.activeTarget = null, this.refresh(), this.process()
    }
    e.DEFAULTS = {
        offset: 10
    }, e.prototype.refresh = function () {
        var e = this.$element[0] == window ? "offset" : "position";
        this.offsets = t([]), this.targets = t([]);
        var n = this;
        this.$body.find(this.selector).map(function () {
            var r = t(this),
                i = r.data("target") || r.attr("href"),
                o = /^#./.test(i) && t(i);
            return o && o.length && o.is(":visible") && [
                [o[e]().top + (!t.isWindow(n.$scrollElement.get(0)) && n.$scrollElement.scrollTop()), i]
            ] || null
        }).sort(function (t, e) {
            return t[0] - e[0]
        }).each(function () {
            n.offsets.push(this[0]), n.targets.push(this[1])
        })
    }, e.prototype.process = function () {
        var t, e = this.$scrollElement.scrollTop() + this.options.offset,
            n = this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight),
            r = n - this.$scrollElement.height(),
            i = this.offsets,
            o = this.targets,
            a = this.activeTarget;
        if (e >= r) return a != (t = o.last()[0]) && this.activate(t);
        if (a && e <= i[0]) return a != (t = o[0]) && this.activate(t);
        for (t = i.length; t--;) a != o[t] && e >= i[t] && (!i[t + 1] || e <= i[t + 1]) && this.activate(o[t])
    }, e.prototype.activate = function (e) {
        this.activeTarget = e, t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active");
        var n = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
            r = t(n).parents("li").addClass("active");
        r.parent(".dropdown-menu").length && (r = r.closest("li.dropdown").addClass("active")), r.trigger("activate.bs.scrollspy")
    };
    var n = t.fn.scrollspy;
    t.fn.scrollspy = function (n) {
        return this.each(function () {
            var r = t(this),
                i = r.data("bs.scrollspy"),
                o = "object" == typeof n && n;
            i || r.data("bs.scrollspy", i = new e(this, o)), "string" == typeof n && i[n]()
        })
    }, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function () {
        return t.fn.scrollspy = n, this
    }, t(window).on("load.bs.scrollspy.data-api", function () {
        t('[data-spy="scroll"]').each(function () {
            var e = t(this);
            e.scrollspy(e.data())
        })
    })
}(jQuery), + function (t) {
    "use strict";
    var e = function (e, n) {
        this.options = n, this.$body = t(document.body), this.$element = t(e), this.$backdrop = this.isShown = null, this.scrollbarWidth = 0, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function () {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    e.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, e.prototype.toggle = function (t) {
        return this.isShown ? this.hide() : this.show(t)
    }, e.prototype.show = function (e) {
        var n = this,
            r = t.Event("show.bs.modal", {
                relatedTarget: e
            });
        this.$element.trigger(r), this.isShown || r.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.$body.addClass("modal-open"), this.setScrollbar(), this.escape(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.backdrop(function () {
            var r = t.support.transition && n.$element.hasClass("fade");
            n.$element.parent().length || n.$element.appendTo(n.$body), n.$element.show().scrollTop(0), r && n.$element[0].offsetWidth, n.$element.addClass("in").attr("aria-hidden", !1), n.enforceFocus();
            var i = t.Event("shown.bs.modal", {
                relatedTarget: e
            });
            r ? n.$element.find(".modal-dialog").one(t.support.transition.end, function () {
                n.$element.trigger("focus").trigger(i)
            }).emulateTransitionEnd(300) : n.$element.trigger("focus").trigger(i)
        }))
    }, e.prototype.hide = function (e) {
        e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.$body.removeClass("modal-open"), this.resetScrollbar(), this.escape(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one(t.support.transition.end, t.proxy(this.hideModal, this)).emulateTransitionEnd(300) : this.hideModal())
    }, e.prototype.enforceFocus = function () {
        t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function (t) {
            this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
        }, this))
    }, e.prototype.escape = function () {
        this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.bs.modal", t.proxy(function (t) {
            27 == t.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keyup.dismiss.bs.modal")
    }, e.prototype.hideModal = function () {
        var t = this;
        this.$element.hide(), this.backdrop(function () {
            t.removeBackdrop(), t.$element.trigger("hidden.bs.modal")
        })
    }, e.prototype.removeBackdrop = function () {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, e.prototype.backdrop = function (e) {
        var n = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var r = t.support.transition && n;
            if (this.$backdrop = t('<div class="modal-backdrop ' + n + '" />').appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function (t) {
                t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this))
            }, this)), r && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
            r ? this.$backdrop.one(t.support.transition.end, e).emulateTransitionEnd(150) : e()
        } else !this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"), t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one(t.support.transition.end, e).emulateTransitionEnd(150) : e()) : e && e()
    }, e.prototype.checkScrollbar = function () {
        document.body.clientWidth >= window.innerWidth || (this.scrollbarWidth = this.scrollbarWidth || this.measureScrollbar())
    }, e.prototype.setScrollbar = function () {
        var t = parseInt(this.$body.css("padding-right") || 0);
        this.scrollbarWidth && this.$body.css("padding-right", t + this.scrollbarWidth)
    }, e.prototype.resetScrollbar = function () {
        this.$body.css("padding-right", "")
    }, e.prototype.measureScrollbar = function () {
        var t = document.createElement("div");
        t.className = "modal-scrollbar-measure", this.$body.append(t);
        var e = t.offsetWidth - t.clientWidth;
        return this.$body[0].removeChild(t), e
    };
    var n = t.fn.modal;
    t.fn.modal = function (n, r) {
        return this.each(function () {
            var i = t(this),
                o = i.data("bs.modal"),
                a = t.extend({}, e.DEFAULTS, i.data(), "object" == typeof n && n);
            o || i.data("bs.modal", o = new e(this, a)), "string" == typeof n ? o[n](r) : a.show && o.show(r)
        })
    }, t.fn.modal.Constructor = e, t.fn.modal.noConflict = function () {
        return t.fn.modal = n, this
    }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (e) {
        var n = t(this),
            r = n.attr("href"),
            i = t(n.attr("data-target") || r && r.replace(/.*(?=#[^\s]+$)/, "")),
            o = i.data("bs.modal") ? "toggle" : t.extend({
                remote: !/#/.test(r) && r
            }, i.data(), n.data());
        n.is("a") && e.preventDefault(), i.modal(o, this).one("hide", function () {
            n.is(":visible") && n.trigger("focus")
        })
    })
}(jQuery), + function (t) {
    "use strict";
    var e = function (t, e) {
        this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null, this.init("tooltip", t, e)
    };
    e.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    }, e.prototype.init = function (e, n, r) {
        this.enabled = !0, this.type = e, this.$element = t(n), this.options = this.getOptions(r), this.$viewport = this.options.viewport && t(this.options.viewport.selector || this.options.viewport);
        for (var i = this.options.trigger.split(" "), o = i.length; o--;) {
            var a = i[o];
            if ("click" == a) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
            else if ("manual" != a) {
                var s = "hover" == a ? "mouseenter" : "focusin",
                    l = "hover" == a ? "mouseleave" : "focusout";
                this.$element.on(s + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = t.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, e.prototype.getDefaults = function () {
        return e.DEFAULTS
    }, e.prototype.getOptions = function (e) {
        return e = t.extend({}, this.getDefaults(), this.$element.data(), e), e.delay && "number" == typeof e.delay && (e.delay = {
            show: e.delay,
            hide: e.delay
        }), e
    }, e.prototype.getDelegateOptions = function () {
        var e = {},
            n = this.getDefaults();
        return this._options && t.each(this._options, function (t, r) {
            n[t] != r && (e[t] = r)
        }), e
    }, e.prototype.enter = function (e) {
        var n = e instanceof this.constructor ? e : t(e.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
        return clearTimeout(n.timeout), n.hoverState = "in", n.options.delay && n.options.delay.show ? void(n.timeout = setTimeout(function () {
            "in" == n.hoverState && n.show()
        }, n.options.delay.show)) : n.show()
    }, e.prototype.leave = function (e) {
        var n = e instanceof this.constructor ? e : t(e.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
        return clearTimeout(n.timeout), n.hoverState = "out", n.options.delay && n.options.delay.hide ? void(n.timeout = setTimeout(function () {
            "out" == n.hoverState && n.hide()
        }, n.options.delay.hide)) : n.hide()
    }, e.prototype.show = function () {
        var e = t.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            if (this.$element.trigger(e), e.isDefaultPrevented()) return;
            var n = this,
                r = this.tip();
            this.setContent(), this.options.animation && r.addClass("fade");
            var i = "function" == typeof this.options.placement ? this.options.placement.call(this, r[0], this.$element[0]) : this.options.placement,
                o = /\s?auto?\s?/i,
                a = o.test(i);
            a && (i = i.replace(o, "") || "top"), r.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(i), this.options.container ? r.appendTo(this.options.container) : r.insertAfter(this.$element);
            var s = this.getPosition(),
                l = r[0].offsetWidth,
                u = r[0].offsetHeight;
            if (a) {
                var c = i,
                    f = this.$element.parent(),
                    p = this.getPosition(f);
                i = "bottom" == i && s.top + s.height + u - p.scroll > p.height ? "top" : "top" == i && s.top - p.scroll - u < 0 ? "bottom" : "right" == i && s.right + l > p.width ? "left" : "left" == i && s.left - l < p.left ? "right" : i, r.removeClass(c).addClass(i)
            }
            var h = this.getCalculatedOffset(i, s, l, u);
            this.applyPlacement(h, i), this.hoverState = null;
            var d = function () {
                n.$element.trigger("shown.bs." + n.type)
            };
            t.support.transition && this.$tip.hasClass("fade") ? r.one(t.support.transition.end, d).emulateTransitionEnd(150) : d()
        }
    }, e.prototype.applyPlacement = function (e, n) {
        var r = this.tip(),
            i = r[0].offsetWidth,
            o = r[0].offsetHeight,
            a = parseInt(r.css("margin-top"), 10),
            s = parseInt(r.css("margin-left"), 10);
        isNaN(a) && (a = 0), isNaN(s) && (s = 0), e.top = e.top + a, e.left = e.left + s, t.offset.setOffset(r[0], t.extend({
            using: function (t) {
                r.css({
                    top: Math.round(t.top),
                    left: Math.round(t.left)
                })
            }
        }, e), 0), r.addClass("in");
        var l = r[0].offsetWidth,
            u = r[0].offsetHeight;
        "top" == n && u != o && (e.top = e.top + o - u);
        var c = this.getViewportAdjustedDelta(n, e, l, u);
        c.left ? e.left += c.left : e.top += c.top;
        var f = c.left ? 2 * c.left - i + l : 2 * c.top - o + u,
            p = c.left ? "left" : "top",
            h = c.left ? "offsetWidth" : "offsetHeight";
        r.offset(e), this.replaceArrow(f, r[0][h], p)
    }, e.prototype.replaceArrow = function (t, e, n) {
        this.arrow().css(n, t ? 50 * (1 - t / e) + "%" : "")
    }, e.prototype.setContent = function () {
        var t = this.tip(),
            e = this.getTitle();
        t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
    }, e.prototype.hide = function () {
        function e() {
            "in" != n.hoverState && r.detach(), n.$element.trigger("hidden.bs." + n.type)
        }
        var n = this,
            r = this.tip(),
            i = t.Event("hide.bs." + this.type);
        return this.$element.trigger(i), i.isDefaultPrevented() ? void 0 : (r.removeClass("in"), t.support.transition && this.$tip.hasClass("fade") ? r.one(t.support.transition.end, e).emulateTransitionEnd(150) : e(), this.hoverState = null, this)
    }, e.prototype.fixTitle = function () {
        var t = this.$element;
        (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
    }, e.prototype.hasContent = function () {
        return this.getTitle()
    }, e.prototype.getPosition = function (e) {
        e = e || this.$element;
        var n = e[0],
            r = "BODY" == n.tagName;
        return t.extend({}, "function" == typeof n.getBoundingClientRect ? n.getBoundingClientRect() : null, {
            scroll: r ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop(),
            width: r ? t(window).width() : e.outerWidth(),
            height: r ? t(window).height() : e.outerHeight()
        }, r ? {
            top: 0,
            left: 0
        } : e.offset())
    }, e.prototype.getCalculatedOffset = function (t, e, n, r) {
        return "bottom" == t ? {
            top: e.top + e.height,
            left: e.left + e.width / 2 - n / 2
        } : "top" == t ? {
            top: e.top - r,
            left: e.left + e.width / 2 - n / 2
        } : "left" == t ? {
            top: e.top + e.height / 2 - r / 2,
            left: e.left - n
        } : {
            top: e.top + e.height / 2 - r / 2,
            left: e.left + e.width
        }
    }, e.prototype.getViewportAdjustedDelta = function (t, e, n, r) {
        var i = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return i;
        var o = this.options.viewport && this.options.viewport.padding || 0,
            a = this.getPosition(this.$viewport);
        if (/right|left/.test(t)) {
            var s = e.top - o - a.scroll,
                l = e.top + o - a.scroll + r;
            s < a.top ? i.top = a.top - s : l > a.top + a.height && (i.top = a.top + a.height - l)
        } else {
            var u = e.left - o,
                c = e.left + o + n;
            u < a.left ? i.left = a.left - u : c > a.width && (i.left = a.left + a.width - c)
        }
        return i
    }, e.prototype.getTitle = function () {
        var t, e = this.$element,
            n = this.options;
        return t = e.attr("data-original-title") || ("function" == typeof n.title ? n.title.call(e[0]) : n.title)
    }, e.prototype.tip = function () {
        return this.$tip = this.$tip || t(this.options.template)
    }, e.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, e.prototype.validate = function () {
        this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
    }, e.prototype.enable = function () {
        this.enabled = !0
    }, e.prototype.disable = function () {
        this.enabled = !1
    }, e.prototype.toggleEnabled = function () {
        this.enabled = !this.enabled
    }, e.prototype.toggle = function (e) {
        var n = e ? t(e.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type) : this;
        n.tip().hasClass("in") ? n.leave(n) : n.enter(n)
    }, e.prototype.destroy = function () {
        clearTimeout(this.timeout), this.hide().$element.off("." + this.type).removeData("bs." + this.type)
    };
    var n = t.fn.tooltip;
    t.fn.tooltip = function (n) {
        return this.each(function () {
            var r = t(this),
                i = r.data("bs.tooltip"),
                o = "object" == typeof n && n;
            (i || "destroy" != n) && (i || r.data("bs.tooltip", i = new e(this, o)), "string" == typeof n && i[n]())
        })
    }, t.fn.tooltip.Constructor = e, t.fn.tooltip.noConflict = function () {
        return t.fn.tooltip = n, this
    }
}(jQuery), + function (t) {
    "use strict";
    var e = function (t, e) {
        this.init("popover", t, e)
    };
    if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
    e.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), e.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), e.prototype.constructor = e, e.prototype.getDefaults = function () {
        return e.DEFAULTS
    }, e.prototype.setContent = function () {
        var t = this.tip(),
            e = this.getTitle(),
            n = this.getContent();
        t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").empty()[this.options.html ? "string" == typeof n ? "html" : "append" : "text"](n), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
    }, e.prototype.hasContent = function () {
        return this.getTitle() || this.getContent()
    }, e.prototype.getContent = function () {
        var t = this.$element,
            e = this.options;
        return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
    }, e.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    }, e.prototype.tip = function () {
        return this.$tip || (this.$tip = t(this.options.template)), this.$tip
    };
    var n = t.fn.popover;
    t.fn.popover = function (n) {
        return this.each(function () {
            var r = t(this),
                i = r.data("bs.popover"),
                o = "object" == typeof n && n;
            (i || "destroy" != n) && (i || r.data("bs.popover", i = new e(this, o)), "string" == typeof n && i[n]())
        })
    }, t.fn.popover.Constructor = e, t.fn.popover.noConflict = function () {
        return t.fn.popover = n, this
    }
}(jQuery),
function () {
    function t(t, e, n) {
        for (var r = (n || 0) - 1, i = t ? t.length : 0; ++r < i;)
            if (t[r] === e) return r;
        return -1
    }

    function e(e, n) {
        var r = typeof n;
        if (e = e.cache, "boolean" == r || null == n) return e[n] ? 0 : -1;
        "number" != r && "string" != r && (r = "object");
        var i = "number" == r ? n : v + n;
        return e = (e = e[r]) && e[i], "object" == r ? e && t(e, n) > -1 ? 0 : -1 : e ? 0 : -1
    }

    function n(t) {
        var e = this.cache,
            n = typeof t;
        if ("boolean" == n || null == t) e[t] = !0;
        else {
            "number" != n && "string" != n && (n = "object");
            var r = "number" == n ? t : v + t,
                i = e[n] || (e[n] = {});
            "object" == n ? (i[r] || (i[r] = [])).push(t) : i[r] = !0
        }
    }

    function r(t) {
        return t.charCodeAt(0)
    }

    function i(t, e) {
        for (var n = t.criteria, r = e.criteria, i = -1, o = n.length; ++i < o;) {
            var a = n[i],
                s = r[i];
            if (a !== s) {
                if (a > s || "undefined" == typeof a) return 1;
                if (s > a || "undefined" == typeof s) return -1
            }
        }
        return t.index - e.index
    }

    function o(t) {
        var e = -1,
            r = t.length,
            i = t[0],
            o = t[r / 2 | 0],
            a = t[r - 1];
        if (i && "object" == typeof i && o && "object" == typeof o && a && "object" == typeof a) return !1;
        var s = l();
        s["false"] = s["null"] = s["true"] = s.undefined = !1;
        var u = l();
        for (u.array = t, u.cache = s, u.push = n; ++e < r;) u.push(t[e]);
        return u
    }

    function a(t) {
        return "\\" + X[t]
    }

    function s() {
        return d.pop() || []
    }

    function l() {
        return g.pop() || {
            array: null,
            cache: null,
            criteria: null,
            "false": !1,
            index: 0,
            "null": !1,
            number: null,
            object: null,
            push: null,
            string: null,
            "true": !1,
            undefined: !1,
            value: null
        }
    }

    function u(t) {
        t.length = 0, d.length < F && d.push(t)
    }

    function c(t) {
        var e = t.cache;
        e && c(e), t.array = t.cache = t.criteria = t.object = t.number = t.string = t.value = null, g.length < F && g.push(t)
    }

    function f(t, e, n) {
        e || (e = 0), "undefined" == typeof n && (n = t ? t.length : 0);
        for (var r = -1, i = n - e || 0, o = Array(0 > i ? 0 : i); ++r < i;) o[r] = t[e + r];
        return o
    }

    function p(n) {
        function d(t) {
            return t && "object" == typeof t && !Jr(t) && Nr.call(t, "__wrapped__") ? t : new g(t)
        }

        function g(t, e) {
            this.__chain__ = !!e, this.__wrapped__ = t
        }

        function F(t) {
            function e() {
                if (r) {
                    var t = f(r);
                    Lr.apply(t, arguments)
                }
                if (this instanceof e) {
                    var o = Y(n.prototype),
                        a = n.apply(o, t || arguments);
                    return Se(a) ? a : o
                }
                return n.apply(i, t || arguments)
            }
            var n = t[0],
                r = t[2],
                i = t[4];
            return Kr(e, t), e
        }

        function X(t, e, n, r, i) {
            if (n) {
                var o = n(t);
                if ("undefined" != typeof o) return o
            }
            var a = Se(t);
            if (!a) return t;
            var l = Ar.call(t);
            if (!H[l]) return t;
            var c = Yr[l];
            switch (l) {
            case P:
            case O:
                return new c(+t);
            case M:
            case R:
                return new c(t);
            case I:
                return o = c(t.source, T.exec(t)), o.lastIndex = t.lastIndex, o
            }
            var p = Jr(t);
            if (e) {
                var h = !r;
                r || (r = s()), i || (i = s());
                for (var d = r.length; d--;)
                    if (r[d] == t) return i[d];
                o = p ? c(t.length) : {}
            } else o = p ? f(t) : oi({}, t);
            return p && (Nr.call(t, "index") && (o.index = t.index), Nr.call(t, "input") && (o.input = t.input)), e ? (r.push(t), i.push(o), (p ? Qe : li)(t, function (t, a) {
                o[a] = X(t, e, n, r, i)
            }), h && (u(r), u(i)), o) : o
        }

        function Y(t) {
            return Se(t) ? zr(t) : {}
        }

        function Q(t, e, n) {
            if ("function" != typeof t) return Jn;
            if ("undefined" == typeof e || !("prototype" in t)) return t;
            var r = t.__bindData__;
            if ("undefined" == typeof r && (Qr.funcNames && (r = !t.name), r = r || !Qr.funcDecomp, !r)) {
                var i = Dr.call(t);
                Qr.funcNames || (r = !_.test(i)), r || (r = S.test(i), Kr(t, r))
            }
            if (r === !1 || r !== !0 && 1 & r[1]) return t;
            switch (n) {
            case 1:
                return function (n) {
                    return t.call(e, n)
                };
            case 2:
                return function (n, r) {
                    return t.call(e, n, r)
                };
            case 3:
                return function (n, r, i) {
                    return t.call(e, n, r, i)
                };
            case 4:
                return function (n, r, i, o) {
                    return t.call(e, n, r, i, o)
                }
            }
            return Ln(t, e)
        }

        function K(t) {
            function e() {
                var t = l ? a : this;
                if (i) {
                    var d = f(i);
                    Lr.apply(d, arguments)
                }
                if ((o || c) && (d || (d = f(arguments)), o && Lr.apply(d, o), c && d.length < s)) return r |= 16, K([n, p ? r : -4 & r, d, null, a, s]);
                if (d || (d = arguments), u && (n = t[h]), this instanceof e) {
                    t = Y(n.prototype);
                    var g = n.apply(t, d);
                    return Se(g) ? g : t
                }
                return n.apply(t, d)
            }
            var n = t[0],
                r = t[1],
                i = t[2],
                o = t[3],
                a = t[4],
                s = t[5],
                l = 1 & r,
                u = 2 & r,
                c = 4 & r,
                p = 8 & r,
                h = n;
            return Kr(e, t), e
        }

        function J(n, r) {
            var i = -1,
                a = le(),
                s = n ? n.length : 0,
                l = s >= y && a === t,
                u = [];
            if (l) {
                var f = o(r);
                f ? (a = e, r = f) : l = !1
            }
            for (; ++i < s;) {
                var p = n[i];
                a(r, p) < 0 && u.push(p)
            }
            return l && c(r), u
        }

        function te(t, e, n, r) {
            for (var i = (r || 0) - 1, o = t ? t.length : 0, a = []; ++i < o;) {
                var s = t[i];
                if (s && "object" == typeof s && "number" == typeof s.length && (Jr(s) || pe(s))) {
                    e || (s = te(s, e, n));
                    var l = -1,
                        u = s.length,
                        c = a.length;
                    for (a.length += u; ++l < u;) a[c++] = s[l]
                } else n || a.push(s)
            }
            return a
        }

        function ee(t, e, n, r, i, o) {
            if (n) {
                var a = n(t, e);
                if ("undefined" != typeof a) return !!a
            }
            if (t === e) return 0 !== t || 1 / t == 1 / e;
            var l = typeof t,
                c = typeof e;
            if (!(t !== t || t && U[l] || e && U[c])) return !1;
            if (null == t || null == e) return t === e;
            var f = Ar.call(t),
                p = Ar.call(e);
            if (f == N && (f = z), p == N && (p = z), f != p) return !1;
            switch (f) {
            case P:
            case O:
                return +t == +e;
            case M:
                return t != +t ? e != +e : 0 == t ? 1 / t == 1 / e : t == +e;
            case I:
            case R:
                return t == wr(e)
            }
            var h = f == L;
            if (!h) {
                var d = Nr.call(t, "__wrapped__"),
                    g = Nr.call(e, "__wrapped__");
                if (d || g) return ee(d ? t.__wrapped__ : t, g ? e.__wrapped__ : e, n, r, i, o);
                if (f != z) return !1;
                var m = t.constructor,
                    v = e.constructor;
                if (m != v && !(Be(m) && m instanceof m && Be(v) && v instanceof v) && "constructor" in t && "constructor" in e) return !1
            }
            var y = !i;
            i || (i = s()), o || (o = s());
            for (var F = i.length; F--;)
                if (i[F] == t) return o[F] == e;
            var b = 0;
            if (a = !0, i.push(t), o.push(e), h) {
                if (F = t.length, b = e.length, a = b == F, a || r)
                    for (; b--;) {
                        var x = F,
                            w = e[b];
                        if (r)
                            for (; x-- && !(a = ee(t[x], w, n, r, i, o)););
                        else if (!(a = ee(t[b], w, n, r, i, o))) break
                    }
            } else si(e, function (e, s, l) {
                return Nr.call(l, s) ? (b++, a = Nr.call(t, s) && ee(t[s], e, n, r, i, o)) : void 0
            }), a && !r && si(t, function (t, e, n) {
                return Nr.call(n, e) ? a = --b > -1 : void 0
            });
            return i.pop(), o.pop(), y && (u(i), u(o)), a
        }

        function ne(t, e, n, r, i) {
            (Jr(e) ? Qe : li)(e, function (e, o) {
                var a, s, l = e,
                    u = t[o];
                if (e && ((s = Jr(e)) || ui(e))) {
                    for (var c = r.length; c--;)
                        if (a = r[c] == e) {
                            u = i[c];
                            break
                        }
                    if (!a) {
                        var f;
                        n && (l = n(u, e), (f = "undefined" != typeof l) && (u = l)), f || (u = s ? Jr(u) ? u : [] : ui(u) ? u : {}), r.push(e), i.push(u), f || ne(u, e, n, r, i)
                    }
                } else n && (l = n(u, e), "undefined" == typeof l && (l = e)), "undefined" != typeof l && (u = l);
                t[o] = u
            })
        }

        function re(t, e) {
            return t + jr(Vr() * (e - t + 1))
        }

        function ie(n, r, i) {
            var a = -1,
                l = le(),
                f = n ? n.length : 0,
                p = [],
                h = !r && f >= y && l === t,
                d = i || h ? s() : p;
            if (h) {
                var g = o(d);
                l = e, d = g
            }
            for (; ++a < f;) {
                var m = n[a],
                    v = i ? i(m, a, n) : m;
                (r ? !a || d[d.length - 1] !== v : l(d, v) < 0) && ((i || h) && d.push(v), p.push(m))
            }
            return h ? (u(d.array), c(d)) : i && u(d), p
        }

        function oe(t) {
            return function (e, n, r) {
                var i = {};
                n = d.createCallback(n, r, 3);
                var o = -1,
                    a = e ? e.length : 0;
                if ("number" == typeof a)
                    for (; ++o < a;) {
                        var s = e[o];
                        t(i, s, n(s, o, e), e)
                    } else li(e, function (e, r, o) {
                        t(i, e, n(e, r, o), o)
                    });
                return i
            }
        }

        function ae(t, e, n, r, i, o) {
            var a = 1 & e,
                s = 2 & e,
                l = 4 & e,
                u = 16 & e,
                c = 32 & e;
            if (!s && !Be(t)) throw new Cr;
            u && !n.length && (e &= -17, u = n = !1), c && !r.length && (e &= -33, c = r = !1);
            var p = t && t.__bindData__;
            if (p && p !== !0) return p = f(p), p[2] && (p[2] = f(p[2])), p[3] && (p[3] = f(p[3])), !a || 1 & p[1] || (p[4] = i), !a && 1 & p[1] && (e |= 8), !l || 4 & p[1] || (p[5] = o), u && Lr.apply(p[2] || (p[2] = []), n), c && qr.apply(p[3] || (p[3] = []), r), p[1] |= e, ae.apply(null, p);
            var h = 1 == e || 17 === e ? F : K;
            return h([t, e, n, r, i, o])
        }

        function se(t) {
            return ei[t]
        }

        function le() {
            var e = (e = d.indexOf) === yn ? t : e;
            return e
        }

        function ue(t) {
            return "function" == typeof t && Er.test(t)
        }

        function ce(t) {
            var e, n;
            return t && Ar.call(t) == z && (e = t.constructor, !Be(e) || e instanceof e) ? (si(t, function (t, e) {
                n = e
            }), "undefined" == typeof n || Nr.call(t, n)) : !1
        }

        function fe(t) {
            return ni[t]
        }

        function pe(t) {
            return t && "object" == typeof t && "number" == typeof t.length && Ar.call(t) == N || !1
        }

        function he(t, e, n, r) {
            return "boolean" != typeof e && null != e && (r = n, n = e, e = !1), X(t, e, "function" == typeof n && Q(n, r, 1))
        }

        function de(t, e, n) {
            return X(t, !0, "function" == typeof e && Q(e, n, 1))
        }

        function ge(t, e) {
            var n = Y(t);
            return e ? oi(n, e) : n
        }

        function me(t, e, n) {
            var r;
            return e = d.createCallback(e, n, 3), li(t, function (t, n, i) {
                return e(t, n, i) ? (r = n, !1) : void 0
            }), r
        }

        function ve(t, e, n) {
            var r;
            return e = d.createCallback(e, n, 3), Fe(t, function (t, n, i) {
                return e(t, n, i) ? (r = n, !1) : void 0
            }), r
        }

        function ye(t, e, n) {
            var r = [];
            si(t, function (t, e) {
                r.push(e, t)
            });
            var i = r.length;
            for (e = Q(e, n, 3); i-- && e(r[i--], r[i], t) !== !1;);
            return t
        }

        function Fe(t, e, n) {
            var r = ti(t),
                i = r.length;
            for (e = Q(e, n, 3); i--;) {
                var o = r[i];
                if (e(t[o], o, t) === !1) break
            }
            return t
        }

        function be(t) {
            var e = [];
            return si(t, function (t, n) {
                Be(t) && e.push(n)
            }), e.sort()
        }

        function xe(t, e) {
            return t ? Nr.call(t, e) : !1
        }

        function we(t) {
            for (var e = -1, n = ti(t), r = n.length, i = {}; ++e < r;) {
                var o = n[e];
                i[t[o]] = o
            }
            return i
        }

        function Ce(t) {
            return t === !0 || t === !1 || t && "object" == typeof t && Ar.call(t) == P || !1
        }

        function ke(t) {
            return t && "object" == typeof t && Ar.call(t) == O || !1
        }

        function Te(t) {
            return t && 1 === t.nodeType || !1
        }

        function _e(t) {
            var e = !0;
            if (!t) return e;
            var n = Ar.call(t),
                r = t.length;
            return n == L || n == R || n == N || n == z && "number" == typeof r && Be(t.splice) ? !r : (li(t, function () {
                return e = !1
            }), e)
        }

        function Ae(t, e, n, r) {
            return ee(t, e, "function" == typeof n && Q(n, r, 2))
        }

        function Ee(t) {
            return Rr(t) && !Hr(parseFloat(t))
        }

        function Be(t) {
            return "function" == typeof t
        }

        function Se(t) {
            return !(!t || !U[typeof t])
        }

        function je(t) {
            return $e(t) && t != +t
        }

        function De(t) {
            return null === t
        }

        function $e(t) {
            return "number" == typeof t || t && "object" == typeof t && Ar.call(t) == M || !1
        }

        function Ne(t) {
            return t && "object" == typeof t && Ar.call(t) == I || !1
        }

        function Le(t) {
            return "string" == typeof t || t && "object" == typeof t && Ar.call(t) == R || !1
        }

        function Pe(t) {
            return "undefined" == typeof t
        }

        function Oe(t, e, n) {
            var r = {};
            return e = d.createCallback(e, n, 3), li(t, function (t, n, i) {
                r[n] = e(t, n, i)
            }), r
        }

        function qe(t) {
            var e = arguments,
                n = 2;
            if (!Se(t)) return t;
            if ("number" != typeof e[2] && (n = e.length), n > 3 && "function" == typeof e[n - 2]) var r = Q(e[--n - 1], e[n--], 2);
            else n > 2 && "function" == typeof e[n - 1] && (r = e[--n]);
            for (var i = f(arguments, 1, n), o = -1, a = s(), l = s(); ++o < n;) ne(t, i[o], r, a, l);
            return u(a), u(l), t
        }

        function Me(t, e, n) {
            var r = {};
            if ("function" != typeof e) {
                var i = [];
                si(t, function (t, e) {
                    i.push(e)
                }), i = J(i, te(arguments, !0, !1, 1));
                for (var o = -1, a = i.length; ++o < a;) {
                    var s = i[o];
                    r[s] = t[s]
                }
            } else e = d.createCallback(e, n, 3), si(t, function (t, n, i) {
                e(t, n, i) || (r[n] = t)
            });
            return r
        }

        function ze(t) {
            for (var e = -1, n = ti(t), r = n.length, i = dr(r); ++e < r;) {
                var o = n[e];
                i[e] = [o, t[o]]
            }
            return i
        }

        function Ie(t, e, n) {
            var r = {};
            if ("function" != typeof e)
                for (var i = -1, o = te(arguments, !0, !1, 1), a = Se(t) ? o.length : 0; ++i < a;) {
                    var s = o[i];
                    s in t && (r[s] = t[s])
                } else e = d.createCallback(e, n, 3), si(t, function (t, n, i) {
                    e(t, n, i) && (r[n] = t)
                });
            return r
        }

        function Re(t, e, n, r) {
            var i = Jr(t);
            if (null == n)
                if (i) n = [];
                else {
                    var o = t && t.constructor,
                        a = o && o.prototype;
                    n = Y(a)
                }
            return e && (e = d.createCallback(e, r, 4), (i ? Qe : li)(t, function (t, r, i) {
                return e(n, t, r, i)
            })), n
        }

        function He(t) {
            for (var e = -1, n = ti(t), r = n.length, i = dr(r); ++e < r;) i[e] = t[n[e]];
            return i
        }

        function Ge(t) {
            for (var e = arguments, n = -1, r = te(e, !0, !1, 1), i = e[2] && e[2][e[1]] === t ? 1 : r.length, o = dr(i); ++n < i;) o[n] = t[r[n]];
            return o
        }

        function We(t, e, n) {
            var r = -1,
                i = le(),
                o = t ? t.length : 0,
                a = !1;
            return n = (0 > n ? Wr(0, o + n) : n) || 0, Jr(t) ? a = i(t, e, n) > -1 : "number" == typeof o ? a = (Le(t) ? t.indexOf(e, n) : i(t, e, n)) > -1 : li(t, function (t) {
                return ++r >= n ? !(a = t === e) : void 0
            }), a
        }

        function Ue(t, e, n) {
            var r = !0;
            e = d.createCallback(e, n, 3);
            var i = -1,
                o = t ? t.length : 0;
            if ("number" == typeof o)
                for (; ++i < o && (r = !!e(t[i], i, t)););
            else li(t, function (t, n, i) {
                return r = !!e(t, n, i)
            });
            return r
        }

        function Xe(t, e, n) {
            var r = [];
            e = d.createCallback(e, n, 3);
            var i = -1,
                o = t ? t.length : 0;
            if ("number" == typeof o)
                for (; ++i < o;) {
                    var a = t[i];
                    e(a, i, t) && r.push(a)
                } else li(t, function (t, n, i) {
                    e(t, n, i) && r.push(t)
                });
            return r
        }

        function Ve(t, e, n) {
            e = d.createCallback(e, n, 3);
            var r = -1,
                i = t ? t.length : 0;
            if ("number" != typeof i) {
                var o;
                return li(t, function (t, n, r) {
                    return e(t, n, r) ? (o = t, !1) : void 0
                }), o
            }
            for (; ++r < i;) {
                var a = t[r];
                if (e(a, r, t)) return a
            }
        }

        function Ye(t, e, n) {
            var r;
            return e = d.createCallback(e, n, 3), Ke(t, function (t, n, i) {
                return e(t, n, i) ? (r = t, !1) : void 0
            }), r
        }

        function Qe(t, e, n) {
            var r = -1,
                i = t ? t.length : 0;
            if (e = e && "undefined" == typeof n ? e : Q(e, n, 3), "number" == typeof i)
                for (; ++r < i && e(t[r], r, t) !== !1;);
            else li(t, e);
            return t
        }

        function Ke(t, e, n) {
            var r = t ? t.length : 0;
            if (e = e && "undefined" == typeof n ? e : Q(e, n, 3), "number" == typeof r)
                for (; r-- && e(t[r], r, t) !== !1;);
            else {
                var i = ti(t);
                r = i.length, li(t, function (t, n, o) {
                    return n = i ? i[--r] : --r, e(o[n], n, o)
                })
            }
            return t
        }

        function Je(t, e) {
            var n = f(arguments, 2),
                r = -1,
                i = "function" == typeof e,
                o = t ? t.length : 0,
                a = dr("number" == typeof o ? o : 0);
            return Qe(t, function (t) {
                a[++r] = (i ? e : t[e]).apply(t, n)
            }), a
        }

        function Ze(t, e, n) {
            var r = -1,
                i = t ? t.length : 0;
            if (e = d.createCallback(e, n, 3), "number" == typeof i)
                for (var o = dr(i); ++r < i;) o[r] = e(t[r], r, t);
            else o = [], li(t, function (t, n, i) {
                o[++r] = e(t, n, i)
            });
            return o
        }

        function tn(t, e, n) {
            var i = -1 / 0,
                o = i;
            if ("function" != typeof e && n && n[e] === t && (e = null), null == e && Jr(t))
                for (var a = -1, s = t.length; ++a < s;) {
                    var l = t[a];
                    l > o && (o = l)
                } else e = null == e && Le(t) ? r : d.createCallback(e, n, 3), Qe(t, function (t, n, r) {
                    var a = e(t, n, r);
                    a > i && (i = a, o = t)
                });
            return o
        }

        function en(t, e, n) {
            var i = 1 / 0,
                o = i;
            if ("function" != typeof e && n && n[e] === t && (e = null), null == e && Jr(t))
                for (var a = -1, s = t.length; ++a < s;) {
                    var l = t[a];
                    o > l && (o = l)
                } else e = null == e && Le(t) ? r : d.createCallback(e, n, 3), Qe(t, function (t, n, r) {
                    var a = e(t, n, r);
                    i > a && (i = a, o = t)
                });
            return o
        }

        function nn(t, e, n, r) {
            if (!t) return n;
            var i = arguments.length < 3;
            e = d.createCallback(e, r, 4);
            var o = -1,
                a = t.length;
            if ("number" == typeof a)
                for (i && (n = t[++o]); ++o < a;) n = e(n, t[o], o, t);
            else li(t, function (t, r, o) {
                n = i ? (i = !1, t) : e(n, t, r, o)
            });
            return n
        }

        function rn(t, e, n, r) {
            var i = arguments.length < 3;
            return e = d.createCallback(e, r, 4), Ke(t, function (t, r, o) {
                n = i ? (i = !1, t) : e(n, t, r, o)
            }), n
        }

        function on(t, e, n) {
            return e = d.createCallback(e, n, 3), Xe(t, function (t, n, r) {
                return !e(t, n, r)
            })
        }

        function an(t, e, n) {
            if (t && "number" != typeof t.length && (t = He(t)), null == e || n) return t ? t[re(0, t.length - 1)] : h;
            var r = sn(t);
            return r.length = Ur(Wr(0, e), r.length), r
        }

        function sn(t) {
            var e = -1,
                n = t ? t.length : 0,
                r = dr("number" == typeof n ? n : 0);
            return Qe(t, function (t) {
                var n = re(0, ++e);
                r[e] = r[n], r[n] = t
            }), r
        }

        function ln(t) {
            var e = t ? t.length : 0;
            return "number" == typeof e ? e : ti(t).length
        }

        function un(t, e, n) {
            var r;
            e = d.createCallback(e, n, 3);
            var i = -1,
                o = t ? t.length : 0;
            if ("number" == typeof o)
                for (; ++i < o && !(r = e(t[i], i, t)););
            else li(t, function (t, n, i) {
                return !(r = e(t, n, i))
            });
            return !!r
        }

        function cn(t, e, n) {
            var r = -1,
                o = Jr(e),
                a = t ? t.length : 0,
                f = dr("number" == typeof a ? a : 0);
            for (o || (e = d.createCallback(e, n, 3)), Qe(t, function (t, n, i) {
                var a = f[++r] = l();
                o ? a.criteria = Ze(e, function (e) {
                    return t[e]
                }) : (a.criteria = s())[0] = e(t, n, i), a.index = r, a.value = t
            }), a = f.length, f.sort(i); a--;) {
                var p = f[a];
                f[a] = p.value, o || u(p.criteria), c(p)
            }
            return f
        }

        function fn(t) {
            return t && "number" == typeof t.length ? f(t) : He(t)
        }

        function pn(t) {
            for (var e = -1, n = t ? t.length : 0, r = []; ++e < n;) {
                var i = t[e];
                i && r.push(i)
            }
            return r
        }

        function hn(t) {
            return J(t, te(arguments, !0, !0, 1))
        }

        function dn(t, e, n) {
            var r = -1,
                i = t ? t.length : 0;
            for (e = d.createCallback(e, n, 3); ++r < i;)
                if (e(t[r], r, t)) return r;
            return -1
        }

        function gn(t, e, n) {
            var r = t ? t.length : 0;
            for (e = d.createCallback(e, n, 3); r--;)
                if (e(t[r], r, t)) return r;
            return -1
        }

        function mn(t, e, n) {
            var r = 0,
                i = t ? t.length : 0;
            if ("number" != typeof e && null != e) {
                var o = -1;
                for (e = d.createCallback(e, n, 3); ++o < i && e(t[o], o, t);) r++
            } else if (r = e, null == r || n) return t ? t[0] : h;
            return f(t, 0, Ur(Wr(0, r), i))
        }

        function vn(t, e, n, r) {
            return "boolean" != typeof e && null != e && (r = n, n = "function" != typeof e && r && r[e] === t ? null : e, e = !1), null != n && (t = Ze(t, n, r)), te(t, e)
        }

        function yn(e, n, r) {
            if ("number" == typeof r) {
                var i = e ? e.length : 0;
                r = 0 > r ? Wr(0, i + r) : r || 0
            } else if (r) {
                var o = An(e, n);
                return e[o] === n ? o : -1
            }
            return t(e, n, r)
        }

        function Fn(t, e, n) {
            var r = 0,
                i = t ? t.length : 0;
            if ("number" != typeof e && null != e) {
                var o = i;
                for (e = d.createCallback(e, n, 3); o-- && e(t[o], o, t);) r++
            } else r = null == e || n ? 1 : e || r;
            return f(t, 0, Ur(Wr(0, i - r), i))
        }

        function bn() {
            for (var n = [], r = -1, i = arguments.length, a = s(), l = le(), f = l === t, p = s(); ++r < i;) {
                var h = arguments[r];
                (Jr(h) || pe(h)) && (n.push(h), a.push(f && h.length >= y && o(r ? n[r] : p)))
            }
            var d = n[0],
                g = -1,
                m = d ? d.length : 0,
                v = [];
            t: for (; ++g < m;) {
                var F = a[0];
                if (h = d[g], (F ? e(F, h) : l(p, h)) < 0) {
                    for (r = i, (F || p).push(h); --r;)
                        if (F = a[r], (F ? e(F, h) : l(n[r], h)) < 0) continue t;
                    v.push(h)
                }
            }
            for (; i--;) F = a[i], F && c(F);
            return u(a), u(p), v
        }

        function xn(t, e, n) {
            var r = 0,
                i = t ? t.length : 0;
            if ("number" != typeof e && null != e) {
                var o = i;
                for (e = d.createCallback(e, n, 3); o-- && e(t[o], o, t);) r++
            } else if (r = e, null == r || n) return t ? t[i - 1] : h;
            return f(t, Wr(0, i - r))
        }

        function wn(t, e, n) {
            var r = t ? t.length : 0;
            for ("number" == typeof n && (r = (0 > n ? Wr(0, r + n) : Ur(n, r - 1)) + 1); r--;)
                if (t[r] === e) return r;
            return -1
        }

        function Cn(t) {
            for (var e = arguments, n = 0, r = e.length, i = t ? t.length : 0; ++n < r;)
                for (var o = -1, a = e[n]; ++o < i;) t[o] === a && (Or.call(t, o--, 1), i--);
            return t
        }

        function kn(t, e, n) {
            t = +t || 0, n = "number" == typeof n ? n : +n || 1, null == e && (e = t, t = 0);
            for (var r = -1, i = Wr(0, Br((e - t) / (n || 1))), o = dr(i); ++r < i;) o[r] = t, t += n;
            return o
        }

        function Tn(t, e, n) {
            var r = -1,
                i = t ? t.length : 0,
                o = [];
            for (e = d.createCallback(e, n, 3); ++r < i;) {
                var a = t[r];
                e(a, r, t) && (o.push(a), Or.call(t, r--, 1), i--)
            }
            return o
        }

        function _n(t, e, n) {
            if ("number" != typeof e && null != e) {
                var r = 0,
                    i = -1,
                    o = t ? t.length : 0;
                for (e = d.createCallback(e, n, 3); ++i < o && e(t[i], i, t);) r++
            } else r = null == e || n ? 1 : Wr(0, e);
            return f(t, r)
        }

        function An(t, e, n, r) {
            var i = 0,
                o = t ? t.length : i;
            for (n = n ? d.createCallback(n, r, 1) : Jn, e = n(e); o > i;) {
                var a = i + o >>> 1;
                n(t[a]) < e ? i = a + 1 : o = a
            }
            return i
        }

        function En() {
            return ie(te(arguments, !0, !0))
        }

        function Bn(t, e, n, r) {
            return "boolean" != typeof e && null != e && (r = n, n = "function" != typeof e && r && r[e] === t ? null : e, e = !1), null != n && (n = d.createCallback(n, r, 3)), ie(t, e, n)
        }

        function Sn(t) {
            return J(t, f(arguments, 1))
        }

        function jn() {
            for (var t = -1, e = arguments.length; ++t < e;) {
                var n = arguments[t];
                if (Jr(n) || pe(n)) var r = r ? ie(J(r, n).concat(J(n, r))) : n
            }
            return r || []
        }

        function Dn() {
            for (var t = arguments.length > 1 ? arguments : arguments[0], e = -1, n = t ? tn(hi(t, "length")) : 0, r = dr(0 > n ? 0 : n); ++e < n;) r[e] = hi(t, e);
            return r
        }

        function $n(t, e) {
            var n = -1,
                r = t ? t.length : 0,
                i = {};
            for (e || !r || Jr(t[0]) || (e = []); ++n < r;) {
                var o = t[n];
                e ? i[o] = e[n] : o && (i[o[0]] = o[1])
            }
            return i
        }

        function Nn(t, e) {
            if (!Be(e)) throw new Cr;
            return function () {
                return --t < 1 ? e.apply(this, arguments) : void 0
            }
        }

        function Ln(t, e) {
            return arguments.length > 2 ? ae(t, 17, f(arguments, 2), null, e) : ae(t, 1, null, null, e)
        }

        function Pn(t) {
            for (var e = arguments.length > 1 ? te(arguments, !0, !1, 1) : be(t), n = -1, r = e.length; ++n < r;) {
                var i = e[n];
                t[i] = ae(t[i], 1, null, null, t)
            }
            return t
        }

        function On(t, e) {
            return arguments.length > 2 ? ae(e, 19, f(arguments, 2), null, t) : ae(e, 3, null, null, t)
        }

        function qn() {
            for (var t = arguments, e = t.length; e--;)
                if (!Be(t[e])) throw new Cr;
            return function () {
                for (var e = arguments, n = t.length; n--;) e = [t[n].apply(this, e)];
                return e[0]
            }
        }

        function Mn(t, e) {
            return e = "number" == typeof e ? e : +e || t.length, ae(t, 4, null, null, null, e)
        }

        function zn(t, e, n) {
            var r, i, o, a, s, l, u, c = 0,
                f = !1,
                p = !0;
            if (!Be(t)) throw new Cr;
            if (e = Wr(0, e) || 0, n === !0) {
                var d = !0;
                p = !1
            } else Se(n) && (d = n.leading, f = "maxWait" in n && (Wr(e, n.maxWait) || 0), p = "trailing" in n ? n.trailing : p);
            var g = function () {
                    var n = e - (gi() - a);
                    if (0 >= n) {
                        i && Sr(i);
                        var f = u;
                        i = l = u = h, f && (c = gi(), o = t.apply(s, r), l || i || (r = s = null))
                    } else l = Pr(g, n)
                },
                m = function () {
                    l && Sr(l), i = l = u = h, (p || f !== e) && (c = gi(), o = t.apply(s, r), l || i || (r = s = null))
                };
            return function () {
                if (r = arguments, a = gi(), s = this, u = p && (l || !d), f === !1) var n = d && !l;
                else {
                    i || d || (c = a);
                    var h = f - (a - c),
                        v = 0 >= h;
                    v ? (i && (i = Sr(i)), c = a, o = t.apply(s, r)) : i || (i = Pr(m, h))
                }
                return v && l ? l = Sr(l) : l || e === f || (l = Pr(g, e)), n && (v = !0, o = t.apply(s, r)), !v || l || i || (r = s = null), o
            }
        }

        function In(t) {
            if (!Be(t)) throw new Cr;
            var e = f(arguments, 1);
            return Pr(function () {
                t.apply(h, e)
            }, 1)
        }

        function Rn(t, e) {
            if (!Be(t)) throw new Cr;
            var n = f(arguments, 2);
            return Pr(function () {
                t.apply(h, n)
            }, e)
        }

        function Hn(t, e) {
            if (!Be(t)) throw new Cr;
            var n = function () {
                var r = n.cache,
                    i = e ? e.apply(this, arguments) : v + arguments[0];
                return Nr.call(r, i) ? r[i] : r[i] = t.apply(this, arguments)
            };
            return n.cache = {}, n
        }

        function Gn(t) {
            var e, n;
            if (!Be(t)) throw new Cr;
            return function () {
                return e ? n : (e = !0, n = t.apply(this, arguments), t = null, n)
            }
        }

        function Wn(t) {
            return ae(t, 16, f(arguments, 1))
        }

        function Un(t) {
            return ae(t, 32, null, f(arguments, 1))
        }

        function Xn(t, e, n) {
            var r = !0,
                i = !0;
            if (!Be(t)) throw new Cr;
            return n === !1 ? r = !1 : Se(n) && (r = "leading" in n ? n.leading : r, i = "trailing" in n ? n.trailing : i), G.leading = r, G.maxWait = e, G.trailing = i, zn(t, e, G)
        }

        function Vn(t, e) {
            return ae(e, 16, [t])
        }

        function Yn(t) {
            return function () {
                return t
            }
        }

        function Qn(t, e, n) {
            var r = typeof t;
            if (null == t || "function" == r) return Q(t, e, n);
            if ("object" != r) return nr(t);
            var i = ti(t),
                o = i[0],
                a = t[o];
            return 1 != i.length || a !== a || Se(a) ? function (e) {
                for (var n = i.length, r = !1; n-- && (r = ee(e[i[n]], t[i[n]], null, !0)););
                return r
            } : function (t) {
                var e = t[o];
                return a === e && (0 !== a || 1 / a == 1 / e)
            }
        }

        function Kn(t) {
            return null == t ? "" : wr(t).replace(ii, se)
        }

        function Jn(t) {
            return t
        }

        function Zn(t, e, n) {
            var r = !0,
                i = e && be(e);
            e && (n || i.length) || (null == n && (n = e), o = g, e = t, t = d, i = be(e)), n === !1 ? r = !1 : Se(n) && "chain" in n && (r = n.chain);
            var o = t,
                a = Be(o);
            Qe(i, function (n) {
                var i = t[n] = e[n];
                a && (o.prototype[n] = function () {
                    var e = this.__chain__,
                        n = this.__wrapped__,
                        a = [n];
                    Lr.apply(a, arguments);
                    var s = i.apply(t, a);
                    if (r || e) {
                        if (n === s && Se(s)) return this;
                        s = new o(s), s.__chain__ = e
                    }
                    return s
                })
            })
        }

        function tr() {
            return n._ = _r, this
        }

        function er() {}

        function nr(t) {
            return function (e) {
                return e[t]
            }
        }

        function rr(t, e, n) {
            var r = null == t,
                i = null == e;
            if (null == n && ("boolean" == typeof t && i ? (n = t, t = 1) : i || "boolean" != typeof e || (n = e, i = !0)), r && i && (e = 1), t = +t || 0, i ? (e = t, t = 0) : e = +e || 0, n || t % 1 || e % 1) {
                var o = Vr();
                return Ur(t + o * (e - t + parseFloat("1e-" + ((o + "").length - 1))), e)
            }
            return re(t, e)
        }

        function ir(t, e) {
            if (t) {
                var n = t[e];
                return Be(n) ? t[e]() : n
            }
        }

        function or(t, e, n) {
            var r = d.templateSettings;
            t = wr(t || ""), n = ai({}, n, r);
            var i, o = ai({}, n.imports, r.imports),
                s = ti(o),
                l = He(o),
                u = 0,
                c = n.interpolate || B,
                f = "__p += '",
                p = xr((n.escape || B).source + "|" + c.source + "|" + (c === A ? k : B).source + "|" + (n.evaluate || B).source + "|$", "g");
            t.replace(p, function (e, n, r, o, s, l) {
                return r || (r = o), f += t.slice(u, l).replace(j, a), n && (f += "' +\n__e(" + n + ") +\n'"), s && (i = !0, f += "';\n" + s + ";\n__p += '"), r && (f += "' +\n((__t = (" + r + ")) == null ? '' : __t) +\n'"), u = l + e.length, e
            }), f += "';\n";
            var g = n.variable,
                m = g;
            m || (g = "obj", f = "with (" + g + ") {\n" + f + "\n}\n"), f = (i ? f.replace(x, "") : f).replace(w, "$1").replace(C, "$1;"), f = "function(" + g + ") {\n" + (m ? "" : g + " || (" + g + " = {});\n") + "var __t, __p = '', __e = _.escape" + (i ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + f + "return __p\n}";
            var v = "\n/*\n//# sourceURL=" + (n.sourceURL || "/lodash/template/source[" + $+++"]") + "\n*/";
            try {
                var y = vr(s, "return " + f + v).apply(h, l)
            } catch (F) {
                throw F.source = f, F
            }
            return e ? y(e) : (y.source = f, y)
        }

        function ar(t, e, n) {
            t = (t = +t) > -1 ? t : 0;
            var r = -1,
                i = dr(t);
            for (e = Q(e, n, 1); ++r < t;) i[r] = e(r);
            return i
        }

        function sr(t) {
            return null == t ? "" : wr(t).replace(ri, fe)
        }

        function lr(t) {
            var e = ++m;
            return wr(null == t ? "" : t) + e
        }

        function ur(t) {
            return t = new g(t), t.__chain__ = !0, t
        }

        function cr(t, e) {
            return e(t), t
        }

        function fr() {
            return this.__chain__ = !0, this
        }

        function pr() {
            return wr(this.__wrapped__)
        }

        function hr() {
            return this.__wrapped__
        }
        n = n ? Z.defaults(V.Object(), n, Z.pick(V, D)) : V;
        var dr = n.Array,
            gr = n.Boolean,
            mr = n.Date,
            vr = n.Function,
            yr = n.Math,
            Fr = n.Number,
            br = n.Object,
            xr = n.RegExp,
            wr = n.String,
            Cr = n.TypeError,
            kr = [],
            Tr = br.prototype,
            _r = n._,
            Ar = Tr.toString,
            Er = xr("^" + wr(Ar).replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/toString| for [^\]]+/g, ".*?") + "$"),
            Br = yr.ceil,
            Sr = n.clearTimeout,
            jr = yr.floor,
            Dr = vr.prototype.toString,
            $r = ue($r = br.getPrototypeOf) && $r,
            Nr = Tr.hasOwnProperty,
            Lr = kr.push,
            Pr = n.setTimeout,
            Or = kr.splice,
            qr = kr.unshift,
            Mr = function () {
                try {
                    var t = {},
                        e = ue(e = br.defineProperty) && e,
                        n = e(t, t, t) && e
                } catch (r) {}
                return n
            }(),
            zr = ue(zr = br.create) && zr,
            Ir = ue(Ir = dr.isArray) && Ir,
            Rr = n.isFinite,
            Hr = n.isNaN,
            Gr = ue(Gr = br.keys) && Gr,
            Wr = yr.max,
            Ur = yr.min,
            Xr = n.parseInt,
            Vr = yr.random,
            Yr = {};
        Yr[L] = dr, Yr[P] = gr, Yr[O] = mr, Yr[q] = vr, Yr[z] = br, Yr[M] = Fr, Yr[I] = xr, Yr[R] = wr, g.prototype = d.prototype;
        var Qr = d.support = {};
        Qr.funcDecomp = !ue(n.WinRTError) && S.test(p), Qr.funcNames = "string" == typeof vr.name, d.templateSettings = {
            escape: /<%-([\s\S]+?)%>/g,
            evaluate: /<%([\s\S]+?)%>/g,
            interpolate: A,
            variable: "",
            imports: {
                _: d
            }
        }, zr || (Y = function () {
            function t() {}
            return function (e) {
                if (Se(e)) {
                    t.prototype = e;
                    var r = new t;
                    t.prototype = null
                }
                return r || n.Object()
            }
        }());
        var Kr = Mr ? function (t, e) {
                W.value = e, Mr(t, "__bindData__", W)
            } : er,
            Jr = Ir || function (t) {
                return t && "object" == typeof t && "number" == typeof t.length && Ar.call(t) == L || !1
            },
            Zr = function (t) {
                var e, n = t,
                    r = [];
                if (!n) return r;
                if (!U[typeof t]) return r;
                for (e in n) Nr.call(n, e) && r.push(e);
                return r
            },
            ti = Gr ? function (t) {
                return Se(t) ? Gr(t) : []
            } : Zr,
            ei = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;"
            },
            ni = we(ei),
            ri = xr("(" + ti(ni).join("|") + ")", "g"),
            ii = xr("[" + ti(ei).join("") + "]", "g"),
            oi = function (t, e, n) {
                var r, i = t,
                    o = i;
                if (!i) return o;
                var a = arguments,
                    s = 0,
                    l = "number" == typeof n ? 2 : a.length;
                if (l > 3 && "function" == typeof a[l - 2]) var u = Q(a[--l - 1], a[l--], 2);
                else l > 2 && "function" == typeof a[l - 1] && (u = a[--l]);
                for (; ++s < l;)
                    if (i = a[s], i && U[typeof i])
                        for (var c = -1, f = U[typeof i] && ti(i), p = f ? f.length : 0; ++c < p;) r = f[c], o[r] = u ? u(o[r], i[r]) : i[r];
                return o
            },
            ai = function (t, e, n) {
                var r, i = t,
                    o = i;
                if (!i) return o;
                for (var a = arguments, s = 0, l = "number" == typeof n ? 2 : a.length; ++s < l;)
                    if (i = a[s], i && U[typeof i])
                        for (var u = -1, c = U[typeof i] && ti(i), f = c ? c.length : 0; ++u < f;) r = c[u], "undefined" == typeof o[r] && (o[r] = i[r]);
                return o
            },
            si = function (t, e, n) {
                var r, i = t,
                    o = i;
                if (!i) return o;
                if (!U[typeof i]) return o;
                e = e && "undefined" == typeof n ? e : Q(e, n, 3);
                for (r in i)
                    if (e(i[r], r, t) === !1) return o;
                return o
            },
            li = function (t, e, n) {
                var r, i = t,
                    o = i;
                if (!i) return o;
                if (!U[typeof i]) return o;
                e = e && "undefined" == typeof n ? e : Q(e, n, 3);
                for (var a = -1, s = U[typeof i] && ti(i), l = s ? s.length : 0; ++a < l;)
                    if (r = s[a], e(i[r], r, t) === !1) return o;
                return o
            },
            ui = $r ? function (t) {
                if (!t || Ar.call(t) != z) return !1;
                var e = t.valueOf,
                    n = ue(e) && (n = $r(e)) && $r(n);
                return n ? t == n || $r(t) == n : ce(t)
            } : ce,
            ci = oe(function (t, e, n) {
                Nr.call(t, n) ? t[n]++ : t[n] = 1
            }),
            fi = oe(function (t, e, n) {
                (Nr.call(t, n) ? t[n] : t[n] = []).push(e)
            }),
            pi = oe(function (t, e, n) {
                t[n] = e
            }),
            hi = Ze,
            di = Xe,
            gi = ue(gi = mr.now) && gi || function () {
                return (new mr).getTime()
            },
            mi = 8 == Xr(b + "08") ? Xr : function (t, e) {
                return Xr(Le(t) ? t.replace(E, "") : t, e || 0)
            };
        return d.after = Nn, d.assign = oi, d.at = Ge, d.bind = Ln, d.bindAll = Pn, d.bindKey = On, d.chain = ur, d.compact = pn, d.compose = qn, d.constant = Yn, d.countBy = ci, d.create = ge, d.createCallback = Qn, d.curry = Mn, d.debounce = zn, d.defaults = ai, d.defer = In, d.delay = Rn, d.difference = hn, d.filter = Xe, d.flatten = vn, d.forEach = Qe, d.forEachRight = Ke, d.forIn = si, d.forInRight = ye, d.forOwn = li, d.forOwnRight = Fe, d.functions = be, d.groupBy = fi, d.indexBy = pi, d.initial = Fn, d.intersection = bn, d.invert = we, d.invoke = Je, d.keys = ti, d.map = Ze, d.mapValues = Oe, d.max = tn, d.memoize = Hn, d.merge = qe, d.min = en, d.omit = Me, d.once = Gn, d.pairs = ze, d.partial = Wn, d.partialRight = Un, d.pick = Ie, d.pluck = hi, d.property = nr, d.pull = Cn, d.range = kn, d.reject = on, d.remove = Tn, d.rest = _n, d.shuffle = sn, d.sortBy = cn, d.tap = cr, d.throttle = Xn, d.times = ar, d.toArray = fn, d.transform = Re, d.union = En, d.uniq = Bn, d.values = He, d.where = di, d.without = Sn, d.wrap = Vn, d.xor = jn, d.zip = Dn, d.zipObject = $n, d.collect = Ze, d.drop = _n, d.each = Qe, d.eachRight = Ke, d.extend = oi, d.methods = be, d.object = $n, d.select = Xe, d.tail = _n, d.unique = Bn, d.unzip = Dn, Zn(d), d.clone = he, d.cloneDeep = de, d.contains = We, d.escape = Kn, d.every = Ue, d.find = Ve, d.findIndex = dn, d.findKey = me, d.findLast = Ye, d.findLastIndex = gn, d.findLastKey = ve, d.has = xe, d.identity = Jn, d.indexOf = yn, d.isArguments = pe, d.isArray = Jr, d.isBoolean = Ce, d.isDate = ke, d.isElement = Te, d.isEmpty = _e, d.isEqual = Ae, d.isFinite = Ee, d.isFunction = Be, d.isNaN = je, d.isNull = De, d.isNumber = $e, d.isObject = Se, d.isPlainObject = ui, d.isRegExp = Ne, d.isString = Le, d.isUndefined = Pe, d.lastIndexOf = wn, d.mixin = Zn, d.noConflict = tr, d.noop = er, d.now = gi, d.parseInt = mi, d.random = rr, d.reduce = nn, d.reduceRight = rn, d.result = ir, d.runInContext = p, d.size = ln, d.some = un, d.sortedIndex = An, d.template = or, d.unescape = sr, d.uniqueId = lr, d.all = Ue, d.any = un, d.detect = Ve, d.findWhere = Ve, d.foldl = nn, d.foldr = rn, d.include = We, d.inject = nn, Zn(function () {
            var t = {};
            return li(d, function (e, n) {
                d.prototype[n] || (t[n] = e)
            }), t
        }(), !1), d.first = mn, d.last = xn, d.sample = an, d.take = mn, d.head = mn, li(d, function (t, e) {
            var n = "sample" !== e;
            d.prototype[e] || (d.prototype[e] = function (e, r) {
                var i = this.__chain__,
                    o = t(this.__wrapped__, e, r);
                return i || null != e && (!r || n && "function" == typeof e) ? new g(o, i) : o
            })
        }), d.VERSION = "2.4.1", d.prototype.chain = fr, d.prototype.toString = pr, d.prototype.value = hr, d.prototype.valueOf = hr, Qe(["join", "pop", "shift"], function (t) {
            var e = kr[t];
            d.prototype[t] = function () {
                var t = this.__chain__,
                    n = e.apply(this.__wrapped__, arguments);
                return t ? new g(n, t) : n
            }
        }), Qe(["push", "reverse", "sort", "unshift"], function (t) {
            var e = kr[t];
            d.prototype[t] = function () {
                return e.apply(this.__wrapped__, arguments), this
            }
        }), Qe(["concat", "slice", "splice"], function (t) {
            var e = kr[t];
            d.prototype[t] = function () {
                return new g(e.apply(this.__wrapped__, arguments), this.__chain__)
            }
        }), d
    }
    var h, d = [],
        g = [],
        m = 0,
        v = +new Date + "",
        y = 75,
        F = 40,
        b = " 	\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000",
        x = /\b__p \+= '';/g,
        w = /\b(__p \+=) '' \+/g,
        C = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
        k = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
        T = /\w*$/,
        _ = /^\s*function[ \n\r\t]+\w/,
        A = /<%=([\s\S]+?)%>/g,
        E = RegExp("^[" + b + "]*0+(?=.$)"),
        B = /($^)/,
        S = /\bthis\b/,
        j = /['\n\r\t\u2028\u2029\\]/g,
        D = ["Array", "Boolean", "Date", "Function", "Math", "Number", "Object", "RegExp", "String", "_", "attachEvent", "clearTimeout", "isFinite", "isNaN", "parseInt", "setTimeout"],
        $ = 0,
        N = "[object Arguments]",
        L = "[object Array]",
        P = "[object Boolean]",
        O = "[object Date]",
        q = "[object Function]",
        M = "[object Number]",
        z = "[object Object]",
        I = "[object RegExp]",
        R = "[object String]",
        H = {};
    H[q] = !1, H[N] = H[L] = H[P] = H[O] = H[M] = H[z] = H[I] = H[R] = !0;
    var G = {
            leading: !1,
            maxWait: 0,
            trailing: !1
        },
        W = {
            configurable: !1,
            enumerable: !1,
            value: null,
            writable: !1
        },
        U = {
            "boolean": !1,
            "function": !0,
            object: !0,
            number: !1,
            string: !1,
            undefined: !1
        },
        X = {
            "\\": "\\",
            "'": "'",
            "\n": "n",
            "\r": "r",
            "	": "t",
            "\u2028": "u2028",
            "\u2029": "u2029"
        },
        V = U[typeof window] && window || this,
        Y = U[typeof exports] && exports && !exports.nodeType && exports,
        Q = U[typeof module] && module && !module.nodeType && module,
        K = Q && Q.exports === Y && Y,
        J = U[typeof global] && global;
    !J || J.global !== J && J.window !== J || (V = J);
    var Z = p();
    "function" == typeof define && "object" == typeof define.amd && define.amd ? (V._ = Z, define(function () {
        return Z
    })) : Y && Q ? K ? (Q.exports = Z)._ = Z : Y._ = Z : V._ = Z
}.call(this),
    function () {
        var t = [].indexOf || function (t) {
                for (var e = 0, n = this.length; n > e; e++)
                    if (e in this && this[e] === t) return e;
                return -1
            },
            e = [].slice;
        ! function (t, e) {
            return "function" == typeof define && define.amd ? define("waypoints", ["jquery"], function (n) {
                return e(n, t)
            }) : e(t.jQuery, t)
        }(this, function (n, r) {
            var i, o, a, s, l, u, c, f, p, h, d, g, m, v, y, F;
            return i = n(r), f = t.call(r, "ontouchstart") >= 0, s = {
                horizontal: {},
                vertical: {}
            }, l = 1, c = {}, u = "waypoints-context-id", d = "resize.waypoints", g = "scroll.waypoints", m = 1, v = "waypoints-waypoint-ids", y = "waypoint", F = "waypoints", o = function () {
                function t(t) {
                    var e = this;
                    this.$element = t, this.element = t[0], this.didResize = !1, this.didScroll = !1, this.id = "context" + l++, this.oldScroll = {
                        x: t.scrollLeft(),
                        y: t.scrollTop()
                    }, this.waypoints = {
                        horizontal: {},
                        vertical: {}
                    }, t.data(u, this.id), c[this.id] = this, t.bind(g, function () {
                        var t;
                        return e.didScroll || f ? void 0 : (e.didScroll = !0, t = function () {
                            return e.doScroll(), e.didScroll = !1
                        }, r.setTimeout(t, n[F].settings.scrollThrottle))
                    }), t.bind(d, function () {
                        var t;
                        return e.didResize ? void 0 : (e.didResize = !0, t = function () {
                            return n[F]("refresh"), e.didResize = !1
                        }, r.setTimeout(t, n[F].settings.resizeThrottle))
                    })
                }
                return t.prototype.doScroll = function () {
                    var t, e = this;
                    return t = {
                        horizontal: {
                            newScroll: this.$element.scrollLeft(),
                            oldScroll: this.oldScroll.x,
                            forward: "right",
                            backward: "left"
                        },
                        vertical: {
                            newScroll: this.$element.scrollTop(),
                            oldScroll: this.oldScroll.y,
                            forward: "down",
                            backward: "up"
                        }
                    }, !f || t.vertical.oldScroll && t.vertical.newScroll || n[F]("refresh"), n.each(t, function (t, r) {
                        var i, o, a;
                        return a = [], o = r.newScroll > r.oldScroll, i = o ? r.forward : r.backward, n.each(e.waypoints[t], function (t, e) {
                            var n, i;
                            return r.oldScroll < (n = e.offset) && n <= r.newScroll ? a.push(e) : r.newScroll < (i = e.offset) && i <= r.oldScroll ? a.push(e) : void 0
                        }), a.sort(function (t, e) {
                            return t.offset - e.offset
                        }), o || a.reverse(), n.each(a, function (t, e) {
                            return e.options.continuous || t === a.length - 1 ? e.trigger([i]) : void 0
                        })
                    }), this.oldScroll = {
                        x: t.horizontal.newScroll,
                        y: t.vertical.newScroll
                    }
                }, t.prototype.refresh = function () {
                    var t, e, r, i = this;
                    return r = n.isWindow(this.element), e = this.$element.offset(), this.doScroll(), t = {
                        horizontal: {
                            contextOffset: r ? 0 : e.left,
                            contextScroll: r ? 0 : this.oldScroll.x,
                            contextDimension: this.$element.width(),
                            oldScroll: this.oldScroll.x,
                            forward: "right",
                            backward: "left",
                            offsetProp: "left"
                        },
                        vertical: {
                            contextOffset: r ? 0 : e.top,
                            contextScroll: r ? 0 : this.oldScroll.y,
                            contextDimension: r ? n[F]("viewportHeight") : this.$element.height(),
                            oldScroll: this.oldScroll.y,
                            forward: "down",
                            backward: "up",
                            offsetProp: "top"
                        }
                    }, n.each(t, function (t, e) {
                        return n.each(i.waypoints[t], function (t, r) {
                            var i, o, a, s, l;
                            return i = r.options.offset, a = r.offset, o = n.isWindow(r.element) ? 0 : r.$element.offset()[e.offsetProp], n.isFunction(i) ? i = i.apply(r.element) : "string" == typeof i && (i = parseFloat(i), r.options.offset.indexOf("%") > -1 && (i = Math.ceil(e.contextDimension * i / 100))), r.offset = o - e.contextOffset + e.contextScroll - i, r.options.onlyOnScroll && null != a || !r.enabled ? void 0 : null !== a && a < (s = e.oldScroll) && s <= r.offset ? r.trigger([e.backward]) : null !== a && a > (l = e.oldScroll) && l >= r.offset ? r.trigger([e.forward]) : null === a && e.oldScroll >= r.offset ? r.trigger([e.forward]) : void 0
                        })
                    })
                }, t.prototype.checkEmpty = function () {
                    return n.isEmptyObject(this.waypoints.horizontal) && n.isEmptyObject(this.waypoints.vertical) ? (this.$element.unbind([d, g].join(" ")), delete c[this.id]) : void 0
                }, t
            }(), a = function () {
                function t(t, e, r) {
                    var i, o;
                    r = n.extend({}, n.fn[y].defaults, r), "bottom-in-view" === r.offset && (r.offset = function () {
                        var t;
                        return t = n[F]("viewportHeight"), n.isWindow(e.element) || (t = e.$element.height()), t - n(this).outerHeight()
                    }), this.$element = t, this.element = t[0], this.axis = r.horizontal ? "horizontal" : "vertical", this.callback = r.handler, this.context = e, this.enabled = r.enabled, this.id = "waypoints" + m++, this.offset = null, this.options = r, e.waypoints[this.axis][this.id] = this, s[this.axis][this.id] = this, i = null != (o = t.data(v)) ? o : [], i.push(this.id), t.data(v, i)
                }
                return t.prototype.trigger = function (t) {
                    return this.enabled ? (null != this.callback && this.callback.apply(this.element, t), this.options.triggerOnce ? this.destroy() : void 0) : void 0
                }, t.prototype.disable = function () {
                    return this.enabled = !1
                }, t.prototype.enable = function () {
                    return this.context.refresh(), this.enabled = !0
                }, t.prototype.destroy = function () {
                    return delete s[this.axis][this.id], delete this.context.waypoints[this.axis][this.id], this.context.checkEmpty()
                }, t.getWaypointsByElement = function (t) {
                    var e, r;
                    return (r = n(t).data(v)) ? (e = n.extend({}, s.horizontal, s.vertical), n.map(r, function (t) {
                        return e[t]
                    })) : []
                }, t
            }(), h = {
                init: function (t, e) {
                    var r;
                    return null == e && (e = {}), null == (r = e.handler) && (e.handler = t), this.each(function () {
                        var t, r, i, s;
                        return t = n(this), i = null != (s = e.context) ? s : n.fn[y].defaults.context, n.isWindow(i) || (i = t.closest(i)), i = n(i), r = c[i.data(u)], r || (r = new o(i)), new a(t, r, e)
                    }), n[F]("refresh"), this
                },
                disable: function () {
                    return h._invoke(this, "disable")
                },
                enable: function () {
                    return h._invoke(this, "enable")
                },
                destroy: function () {
                    return h._invoke(this, "destroy")
                },
                prev: function (t, e) {
                    return h._traverse.call(this, t, e, function (t, e, n) {
                        return e > 0 ? t.push(n[e - 1]) : void 0
                    })
                },
                next: function (t, e) {
                    return h._traverse.call(this, t, e, function (t, e, n) {
                        return e < n.length - 1 ? t.push(n[e + 1]) : void 0
                    })
                },
                _traverse: function (t, e, i) {
                    var o, a;
                    return null == t && (t = "vertical"), null == e && (e = r), a = p.aggregate(e), o = [], this.each(function () {
                        var e;
                        return e = n.inArray(this, a[t]), i(o, e, a[t])
                    }), this.pushStack(o)
                },
                _invoke: function (t, e) {
                    return t.each(function () {
                        var t;
                        return t = a.getWaypointsByElement(this), n.each(t, function (t, n) {
                            return n[e](), !0
                        })
                    }), this
                }
            }, n.fn[y] = function () {
                var t, r;
                return r = arguments[0], t = 2 <= arguments.length ? e.call(arguments, 1) : [], h[r] ? h[r].apply(this, t) : n.isFunction(r) ? h.init.apply(this, arguments) : n.isPlainObject(r) ? h.init.apply(this, [null, r]) : n.error(r ? "The " + r + " method does not exist in jQuery Waypoints." : "jQuery Waypoints needs a callback function or handler option.")
            }, n.fn[y].defaults = {
                context: r,
                continuous: !0,
                enabled: !0,
                horizontal: !1,
                offset: 0,
                triggerOnce: !1
            }, p = {
                refresh: function () {
                    return n.each(c, function (t, e) {
                        return e.refresh()
                    })
                },
                viewportHeight: function () {
                    var t;
                    return null != (t = r.innerHeight) ? t : i.height()
                },
                aggregate: function (t) {
                    var e, r, i;
                    return e = s, t && (e = null != (i = c[n(t).data(u)]) ? i.waypoints : void 0), e ? (r = {
                        horizontal: [],
                        vertical: []
                    }, n.each(r, function (t, i) {
                        return n.each(e[t], function (t, e) {
                            return i.push(e)
                        }), i.sort(function (t, e) {
                            return t.offset - e.offset
                        }), r[t] = n.map(i, function (t) {
                            return t.element
                        }), r[t] = n.unique(r[t])
                    }), r) : []
                },
                above: function (t) {
                    return null == t && (t = r), p._filter(t, "vertical", function (t, e) {
                        return e.offset <= t.oldScroll.y
                    })
                },
                below: function (t) {
                    return null == t && (t = r), p._filter(t, "vertical", function (t, e) {
                        return e.offset > t.oldScroll.y
                    })
                },
                left: function (t) {
                    return null == t && (t = r), p._filter(t, "horizontal", function (t, e) {
                        return e.offset <= t.oldScroll.x
                    })
                },
                right: function (t) {
                    return null == t && (t = r), p._filter(t, "horizontal", function (t, e) {
                        return e.offset > t.oldScroll.x
                    })
                },
                enable: function () {
                    return p._invoke("enable")
                },
                disable: function () {
                    return p._invoke("disable")
                },
                destroy: function () {
                    return p._invoke("destroy")
                },
                extendFn: function (t, e) {
                    return h[t] = e
                },
                _invoke: function (t) {
                    var e;
                    return e = n.extend({}, s.vertical, s.horizontal), n.each(e, function (e, n) {
                        return n[t](), !0
                    })
                },
                _filter: function (t, e, r) {
                    var i, o;
                    return (i = c[n(t).data(u)]) ? (o = [], n.each(i.waypoints[e], function (t, e) {
                        return r(i, e) ? o.push(e) : void 0
                    }), o.sort(function (t, e) {
                        return t.offset - e.offset
                    }), n.map(o, function (t) {
                        return t.element
                    })) : []
                }
            }, n[F] = function () {
                var t, n;
                return n = arguments[0], t = 2 <= arguments.length ? e.call(arguments, 1) : [], p[n] ? p[n].apply(null, t) : p.aggregate.call(null, n)
            }, n[F].settings = {
                resizeThrottle: 100,
                scrollThrottle: 30
            }, i.load(function () {
                return n[F]("refresh")
            })
        })
    }.call(this),
    function (t) {
        "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? module.exports = t : t(jQuery)
    }(function (t) {
        function e(e) {
            var a = e || window.event,
                s = l.call(arguments, 1),
                u = 0,
                c = 0,
                f = 0,
                p = 0;
            if (e = t.event.fix(a), e.type = "mousewheel", "detail" in a && (f = -1 * a.detail), "wheelDelta" in a && (f = a.wheelDelta), "wheelDeltaY" in a && (f = a.wheelDeltaY), "wheelDeltaX" in a && (c = -1 * a.wheelDeltaX), "axis" in a && a.axis === a.HORIZONTAL_AXIS && (c = -1 * f, f = 0), u = 0 === f ? c : f, "deltaY" in a && (f = -1 * a.deltaY, u = f), "deltaX" in a && (c = a.deltaX, 0 === f && (u = -1 * c)), 0 !== f || 0 !== c) {
                if (1 === a.deltaMode) {
                    var h = t.data(this, "mousewheel-line-height");
                    u *= h, f *= h, c *= h
                } else if (2 === a.deltaMode) {
                    var d = t.data(this, "mousewheel-page-height");
                    u *= d, f *= d, c *= d
                }
                return p = Math.max(Math.abs(f), Math.abs(c)), (!o || o > p) && (o = p, r(a, p) && (o /= 40)), r(a, p) && (u /= 40, c /= 40, f /= 40), u = Math[u >= 1 ? "floor" : "ceil"](u / o), c = Math[c >= 1 ? "floor" : "ceil"](c / o), f = Math[f >= 1 ? "floor" : "ceil"](f / o), e.deltaX = c, e.deltaY = f, e.deltaFactor = o, e.deltaMode = 0, s.unshift(e, u, c, f), i && clearTimeout(i), i = setTimeout(n, 200), (t.event.dispatch || t.event.handle).apply(this, s)
            }
        }

        function n() {
            o = null
        }

        function r(t, e) {
            return c.settings.adjustOldDeltas && "mousewheel" === t.type && e % 120 === 0
        }
        var i, o, a = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
            s = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
            l = Array.prototype.slice;
        if (t.event.fixHooks)
            for (var u = a.length; u;) t.event.fixHooks[a[--u]] = t.event.mouseHooks;
        var c = t.event.special.mousewheel = {
            version: "3.1.9",
            setup: function () {
                if (this.addEventListener)
                    for (var n = s.length; n;) this.addEventListener(s[--n], e, !1);
                else this.onmousewheel = e;
                t.data(this, "mousewheel-line-height", c.getLineHeight(this)), t.data(this, "mousewheel-page-height", c.getPageHeight(this))
            },
            teardown: function () {
                if (this.removeEventListener)
                    for (var t = s.length; t;) this.removeEventListener(s[--t], e, !1);
                else this.onmousewheel = null
            },
            getLineHeight: function (e) {
                return parseInt(t(e)["offsetParent" in t.fn ? "offsetParent" : "parent"]().css("fontSize"), 10)
            },
            getPageHeight: function (e) {
                return t(e).height()
            },
            settings: {
                adjustOldDeltas: !0
            }
        };
        t.fn.extend({
            mousewheel: function (t) {
                return t ? this.bind("mousewheel", t) : this.trigger("mousewheel")
            },
            unmousewheel: function (t) {
                return this.unbind("mousewheel", t)
            }
        })
    }),
    function (t, e) {
        function n(t, e) {
            var n;
            if ("string" == typeof t && "string" == typeof e) return localStorage[t] = e, !0;
            if ("object" == typeof t && "undefined" == typeof e) {
                for (n in t) t.hasOwnProperty(n) && (localStorage[n] = t[n]);
                return !0
            }
            return !1
        }

        function r(t, e) {
            var n, r, i;
            if (n = new Date, n.setTime(n.getTime() + 31536e6), r = "; expires=" + n.toGMTString(), "string" == typeof t && "string" == typeof e) return document.cookie = t + "=" + e + r + "; path=/", !0;
            if ("object" == typeof t && "undefined" == typeof e) {
                for (i in t) t.hasOwnProperty(i) && (document.cookie = i + "=" + t[i] + r + "; path=/");
                return !0
            }
            return !1
        }

        function i(t) {
            return localStorage[t]
        }

        function o(t) {
            var e, n, r, i;
            for (e = t + "=", n = document.cookie.split(";"), r = 0; r < n.length; r++) {
                for (i = n[r];
                    " " === i.charAt(0);) i = i.substring(1, i.length);
                if (0 === i.indexOf(e)) return i.substring(e.length, i.length)
            }
            return null
        }

        function a(t) {
            return delete localStorage[t]
        }

        function s(t) {
            return r(t, "", -1)
        }

        function l(t, e) {
            var n = [],
                r = t.length;
            if (e > r) return [t];
            for (var i = 0; r > i; i += e) n.push(t.substring(i, i + e));
            return n
        }

        function u(e) {
            var n = e ? [e] : [],
                r = 0;
            t.extend(this, {
                get: function () {
                    return n
                },
                rotate: function () {
                    return 1 === n.length ? n[0] : (r === n.length - 1 ? r = 0 : ++r, n[r])
                },
                length: function () {
                    return n.length
                },
                set: function (t) {
                    for (var e = n.length; e--;)
                        if (n[e] === t) return void(r = e);
                    this.append(t)
                },
                front: function () {
                    return n[r]
                },
                append: function (t) {
                    n.push(t)
                }
            })
        }

        function c(e) {
            var n = e ? [e] : [];
            t.extend(this, {
                size: function () {
                    return n.length
                },
                pop: function () {
                    if (0 === n.length) return null;
                    var t = n[n.length - 1];
                    return n = n.slice(0, n.length - 1), t
                },
                push: function (t) {
                    return n = n.concat([t]), t
                },
                top: function () {
                    return n.length > 0 ? n[n.length - 1] : null
                }
            })
        }

        function f(e, n) {
            var r = !0;
            "string" == typeof e && "" !== e && (e += "_");
            var i = t.Storage.get(e + "commands");
            i = i ? new Function("return " + i + ";")() : [];
            var o = i.length - 1;
            t.extend(this, {
                append: function (a) {
                    r && i[i.length - 1] !== a && (i.push(a), n && i.length > n && (i = i.slice(-n)), o = i.length - 1, t.Storage.set(e + "commands", t.json_stringify(i)))
                },
                data: function () {
                    return i
                },
                reset: function () {
                    o = i.length - 1
                },
                last: function () {
                    return i[length - 1]
                },
                end: function () {
                    return o === i.length - 1
                },
                position: function () {
                    return o
                },
                current: function () {
                    return i[o]
                },
                next: function () {
                    return o < i.length - 1 && ++o, -1 !== o ? i[o] : void 0
                },
                previous: function () {
                    var t = o;
                    return o > 0 && --o, -1 !== t ? i[o] : void 0
                },
                clear: function () {
                    i = [], this.purge()
                },
                enabled: function () {
                    return r
                },
                enable: function () {
                    r = !0
                },
                purge: function () {
                    t.Storage.remove(e + "commands")
                },
                disable: function () {
                    r = !1
                }
            })
        }

        function p(e) {
            return t("<div>" + t.terminal.strip(e) + "</div>").text().length
        }

        function h(t) {
            var e = /([\^\$\[\]\(\)\+\*\.\|])/g;
            return t.replace(e, "\\$1")
        }

        function d(t, e) {
            var n = t.split(/(\s+)/);
            return {
                name: n[0],
                args: e(n.slice(2).join("")),
                rest: t.replace(new RegExp("^" + h(n[0]) + " "), "")
            }
        }

        function g(e) {
            var n = t(window).scrollTop(),
                r = n + t(window).height(),
                i = t(e).offset().top,
                o = i + t(e).height();
            return o >= n && r >= i
        }

        function m(e) {
            var n = t('<div class="terminal"><span>&nbsp;</span></div>').appendTo("body"),
                r = n.find("span").width();
            n.remove();
            var i = Math.floor(e.width() / r);
            if (v(e)) {
                var o = 20,
                    a = e.innerWidth() - e.width();
                i -= Math.ceil((o - a / 2) / (r - 1))
            }
            return i
        }

        function v(t) {
            return t.get(0).scrollHeight > t.innerHeight()
        }
        t.omap = function (e, n) {
            var r = {};
            return t.each(e, function (t, i) {
                r[t] = n.call(e, t, i)
            }), r
        };
        var y = "undefined" != typeof window.localStorage;
        t.extend({
                Storage: {
                    set: y ? n : r,
                    get: y ? i : o,
                    remove: y ? a : s
                }
            }), jQuery.fn.extend({
                everyTime: function (t, e, n, r, i) {
                    return this.each(function () {
                        jQuery.timer.add(this, t, e, n, r, i)
                    })
                },
                oneTime: function (t, e, n) {
                    return this.each(function () {
                        jQuery.timer.add(this, t, e, n, 1)
                    })
                },
                stopTime: function (t, e) {
                    return this.each(function () {
                        jQuery.timer.remove(this, t, e)
                    })
                }
            }), jQuery.extend({
                timer: {
                    guid: 1,
                    global: {},
                    regex: /^([0-9]+)\s*(.*s)?$/,
                    powers: {
                        ms: 1,
                        cs: 10,
                        ds: 100,
                        s: 1e3,
                        das: 1e4,
                        hs: 1e5,
                        ks: 1e6
                    },
                    timeParse: function (t) {
                        if (t === e || null === t) return null;
                        var n = this.regex.exec(jQuery.trim(t.toString()));
                        if (n[2]) {
                            var r = parseInt(n[1], 10),
                                i = this.powers[n[2]] || 1;
                            return r * i
                        }
                        return t
                    },
                    add: function (t, e, n, r, i, o) {
                        var a = 0;
                        if (jQuery.isFunction(n) && (i || (i = r), r = n, n = e), e = jQuery.timer.timeParse(e), !("number" != typeof e || isNaN(e) || 0 >= e)) {
                            i && i.constructor !== Number && (o = !!i, i = 0), i = i || 0, o = o || !1, t.$timers || (t.$timers = {}), t.$timers[n] || (t.$timers[n] = {}), r.$timerID = r.$timerID || this.guid++;
                            var s = function () {
                                o && s.inProgress || (s.inProgress = !0, (++a > i && 0 !== i || r.call(t, a) === !1) && jQuery.timer.remove(t, n, r), s.inProgress = !1)
                            };
                            s.$timerID = r.$timerID, t.$timers[n][r.$timerID] || (t.$timers[n][r.$timerID] = window.setInterval(s, e)), this.global[n] || (this.global[n] = []), this.global[n].push(t)
                        }
                    },
                    remove: function (t, e, n) {
                        var r, i = t.$timers;
                        if (i) {
                            if (e) {
                                if (i[e]) {
                                    if (n) n.$timerID && (window.clearInterval(i[e][n.$timerID]), delete i[e][n.$timerID]);
                                    else
                                        for (var o in i[e]) i[e].hasOwnProperty(o) && (window.clearInterval(i[e][o]), delete i[e][o]);
                                    for (r in i[e])
                                        if (i[e].hasOwnProperty(r)) break;
                                    r || (r = null, delete i[e])
                                }
                            } else
                                for (var a in i) i.hasOwnProperty(a) && this.remove(t, a, n);
                            for (r in i)
                                if (i.hasOwnProperty(r)) break;
                            r || (t.$timers = null)
                        }
                    }
                }
            }), (jQuery.browser && jQuery.browser.msie || /(msie) ([\w.]+)/.exec(navigator.userAgent.toLowerCase())) && jQuery(window).one("unload", function () {
                var t = jQuery.timer.global;
                for (var e in t)
                    if (t.hasOwnProperty(e))
                        for (var n = t[e], r = n.length; --r;) jQuery.timer.remove(n[r], e)
            }),
            function (t) {
                if (String.prototype.split.toString().match(/\[native/)) {
                    var e, n = String.prototype.split,
                        r = /()??/.exec("")[1] === t;
                    return e = function (e, i, o) {
                        if ("[object RegExp]" !== Object.prototype.toString.call(i)) return n.call(e, i, o);
                        var a, s, l, u, c = [],
                            f = (i.ignoreCase ? "i" : "") + (i.multiline ? "m" : "") + (i.extended ? "x" : "") + (i.sticky ? "y" : ""),
                            p = 0;
                        for (i = new RegExp(i.source, f + "g"), e += "", r || (a = new RegExp("^" + i.source + "$(?!\\s)", f)), o = o === t ? -1 >>> 0 : o >>> 0;
                            (s = i.exec(e)) && (l = s.index + s[0].length, !(l > p && (c.push(e.slice(p, s.index)), !r && s.length > 1 && s[0].replace(a, function () {
                                for (var e = 1; e < arguments.length - 2; e++) arguments[e] === t && (s[e] = t)
                            }), s.length > 1 && s.index < e.length && Array.prototype.push.apply(c, s.slice(1)), u = s[0].length, p = l, c.length >= o)));) i.lastIndex === s.index && i.lastIndex++;
                        return p === e.length ? (u || !i.test("")) && c.push("") : c.push(e.slice(p)), c.length > o ? c.slice(0, o) : c
                    }, String.prototype.split = function (t, n) {
                        return e(this, t, n)
                    }, e
                }
            }(), t.json_stringify = function (n, r) {
                var i, o = "";
                r = r === e ? 1 : r;
                var a = typeof n;
                switch (a) {
                case "function":
                    o += n;
                    break;
                case "boolean":
                    o += n ? "true" : "false";
                    break;
                case "object":
                    if (null === n) o += "null";
                    else if (n instanceof Array) {
                        o += "[";
                        var s = n.length;
                        for (i = 0; s - 1 > i; ++i) o += t.json_stringify(n[i], r + 1);
                        o += t.json_stringify(n[s - 1], r + 1) + "]"
                    } else {
                        o += "{";
                        for (var l in n) n.hasOwnProperty(l) && (o += '"' + l + '":' + t.json_stringify(n[l], r + 1));
                        o += "}"
                    }
                    break;
                case "string":
                    var u = n,
                        c = {
                            "\\\\": "\\\\",
                            '"': '\\"',
                            "/": "\\/",
                            "\\n": "\\n",
                            "\\r": "\\r",
                            "\\t": "\\t"
                        };
                    for (i in c) c.hasOwnProperty(i) && (u = u.replace(new RegExp(i, "g"), c[i]));
                    o += '"' + u + '"';
                    break;
                case "number":
                    o += String(n)
                }
                return o += r > 1 ? "," : "", 1 === r && (o = o.replace(/,([\]}])/g, "$1")), o.replace(/([\[{]),/g, "$1")
            }, t.fn.cmd = function (n) {
                function r() {
                    D.toggleClass("inverted")
                }

                function i() {
                    b = "(reverse-i-search)`" + T + "': ", N()
                }

                function o() {
                    b = F, k = !1, _ = null, T = ""
                }

                function a(t) {
                    var e, n, r = w.data(),
                        o = r.length;
                    if (t && _ > 0 && (o -= _), T.length > 0)
                        for (var a = T.length; a > 0; a--) {
                            n = T.substring(0, a).replace(/([.*+{}\[\]?])/g, "\\$1"), e = new RegExp(n);
                            for (var s = o; s--;)
                                if (e.test(r[s])) return _ = r.length - s, B = 0, d.set(r[s], !0), $(), void(T.length !== a && (T = T.substring(0, a), i()))
                        }
                    T = ""
                }

                function s() {
                    var t = d.width(),
                        e = D.innerWidth();
                    v = Math.floor(t / e)
                }

                function u(t) {
                    var e = t.substring(0, v - y),
                        n = t.substring(v - y);
                    return [e].concat(l(n, v))
                }

                function c() {
                    m.focus(), d.oneTime(1, function () {
                        d.insert(m.val()), m.blur().val("")
                    })
                }

                function h(t) {
                    var r, s, l;
                    if ("function" == typeof n.keydown && (r = n.keydown(t), r !== e)) return r;
                    if (S) {
                        if (38 === t.which || 80 === t.which && t.ctrlKey || (L = !0), !k || 35 !== t.which && 36 !== t.which && 37 !== t.which && 38 !== t.which && 39 !== t.which && 40 !== t.which && 13 !== t.which && 27 !== t.which) {
                            if (t.altKey) return 68 === t.which ? (d.set(E.slice(0, B) + E.slice(B).replace(/[^ ]+ |[^ ]+$/, ""), !0), !1) : !0;
                            if (13 === t.keyCode) {
                                w && E && (n.historyFilter && n.historyFilter(E) || !n.historyFilter) && w.append(E);
                                var u = E;
                                w.reset(), d.set(""), n.commands && n.commands(u), "function" == typeof b && N()
                            } else if (8 === t.which) k ? (T = T.slice(0, -1), i()) : "" !== E && B > 0 && (E = E.slice(0, B - 1) + E.slice(B, E.length), --B, $());
                            else if (9 !== t.which || t.ctrlKey || t.altKey) {
                                if (46 === t.which) return "" !== E && B < E.length && (E = E.slice(0, B) + E.slice(B + 1, E.length), $()), !0;
                                if (w && 38 === t.which || 80 === t.which && t.ctrlKey) L ? (C = E, d.set(w.current())) : d.set(w.previous()), L = !1;
                                else if (w && 40 === t.which || 78 === t.which && t.ctrlKey) d.set(w.end() ? C : w.next());
                                else if (37 === t.which || 66 === t.which && t.ctrlKey)
                                    if (t.ctrlKey && 66 !== t.which) {
                                        l = B - 1, s = 0, " " === E[l] && --l;
                                        for (var f = l; f > 0; --f) {
                                            if (" " === E[f] && " " !== E[f + 1]) {
                                                s = f + 1;
                                                break
                                            }
                                            if ("\n" === E[f] && "\n" !== E[f + 1]) {
                                                s = f;
                                                break
                                            }
                                        }
                                        d.position(s)
                                    } else B > 0 && (--B, $());
                                else if (82 === t.which && t.ctrlKey) k ? a(!0) : (F = b, i(), C = E, E = "", $(), k = !0);
                                else if (71 == t.which && t.ctrlKey) k && (b = F, N(), E = C, $(), k = !1, T = "");
                                else if (39 === t.which || 70 === t.which && t.ctrlKey)
                                    if (t.ctrlKey && 70 !== t.which) {
                                        " " === E[B] && ++B;
                                        var p = E.slice(B).match(/\S[\n\s]{2,}|[\n\s]+\S?/);
                                        !p || p[0].match(/^\s+$/) ? B = E.length : " " !== p[0][0] ? B += p.index + 1 : (B += p.index + p[0].length - 1, " " !== p[0][p[0].length - 1] && --B), $()
                                    } else B < E.length && (++B, $());
                                else {
                                    if (123 === t.which) return !0;
                                    if (36 === t.which) d.position(0);
                                    else if (35 === t.which) d.position(E.length);
                                    else {
                                        if (t.shiftKey && 45 == t.which) return c(), !0;
                                        if (!t.ctrlKey && !t.metaKey) return !0;
                                        if (192 === t.which) return !0;
                                        if (t.metaKey) {
                                            if (82 === t.which) return !0;
                                            if (76 === t.which) return !0
                                        }
                                        if (t.shiftKey) {
                                            if (84 === t.which) return !0
                                        } else {
                                            if (87 === t.which) {
                                                if ("" !== E) {
                                                    var g = E.slice(0, B),
                                                        m = E.slice(B + 1),
                                                        v = g.match(/([^ ]+ *$)/);
                                                    B = g.length - v[0].length, E = g.slice(0, B) + m, $()
                                                }
                                                return !1
                                            }
                                            if (72 === t.which) return "" !== E && B > 0 && (E = E.slice(0, --B), B < E.length - 1 && (E += E.slice(B)), $()), !1;
                                            if (65 === t.which) d.position(0);
                                            else if (69 === t.which) d.position(E.length);
                                            else {
                                                if (88 === t.which || 67 === t.which || 84 === t.which) return !0;
                                                if (86 === t.which) return c(), !0;
                                                if (75 === t.which) 0 === B ? d.set("") : B !== E.length && d.set(E.slice(0, B));
                                                else if (85 === t.which) d.set(E.slice(B, E.length)), d.position(0);
                                                else if (17 === t.which) return !1
                                            }
                                        }
                                    }
                                }
                            } else d.insert("	")
                        } else o(), N(), 27 === t.which && (E = ""), $(), h.call(this, t);
                        return !1
                    }
                }
                var d = this,
                    g = d.data("cmd");
                if (g) return g;
                d.addClass("cmd"), d.append('<span class="prompt"></span><span></span><span class="cursor">&nbsp;</span><span></span>');
                var m = t("<textarea/>").addClass("clipboard").appendTo(d);
                n.width && d.width(n.width);
                var v, y, F, b, x, w, C, k = !1,
                    T = "",
                    _ = null,
                    A = n.mask || !1,
                    E = "",
                    B = 0,
                    S = n.enabled,
                    j = n.historySize || 60,
                    D = d.find(".cursor"),
                    $ = function (e) {
                        function n(e, n) {
                            var r = e.length;
                            if (n === r) a.html(t.terminal.encode(e, !0)), D.html("&nbsp;"), s.html("");
                            else if (0 === n) a.html(""), D.html(t.terminal.encode(e.slice(0, 1), !0)), s.html(t.terminal.encode(e.slice(1), !0));
                            else {
                                var i = t.terminal.encode(e.slice(0, n), !0);
                                a.html(i);
                                var o = e.slice(n, n + 1);
                                D.html(" " === o ? "&nbsp;" : t.terminal.encode(o, !0)), s.html(n === e.length - 1 ? "" : t.terminal.encode(e.slice(n + 1), !0))
                            }
                        }

                        function r(e) {
                            return "<div>" + t.terminal.encode(e, !0) + "</div>"
                        }

                        function i(e) {
                            var n = s;
                            t.each(e, function (e, i) {
                                n = t(r(i)).insertAfter(n).addClass("clear")
                            })
                        }

                        function o(e) {
                            t.each(e, function (t, e) {
                                a.before(r(e))
                            })
                        }
                        var a = D.prev(),
                            s = D.next();
                        return function () {
                            var c, f, p = A ? E.replace(/./g, "*") : E;
                            if (e.find("div").remove(), a.html(""), p.length > v - y - 1 || p.match(/\n/)) {
                                var h, d = p.match(/\t/g),
                                    g = d ? 3 * d.length : 0;
                                if (d && (p = p.replace(/\t/g, "\x00\x00\x00\x00")), p.match(/\n/)) {
                                    var m = p.split("\n");
                                    for (f = v - y - 1, c = 0; c < m.length - 1; ++c) m[c] += " ";
                                    for (m[0].length > f ? (h = [m[0].substring(0, f)], h = h.concat(l(m[0].substring(f), v))) : h = [m[0]], c = 1; c < m.length; ++c) m[c].length > v ? h = h.concat(l(m[c], v)) : h.push(m[c])
                                } else h = u(p); if (d && (h = t.map(h, function (t) {
                                    return t.replace(/\x00\x00\x00\x00/g, "	")
                                })), f = h[0].length, 0 === f && 1 === h.length);
                                else if (f > B) n(h[0], B), i(h.slice(1));
                                else if (B === f) a.before(r(h[0])), n(h[1], 0), i(h.slice(2));
                                else {
                                    var F = h.length;
                                    if (f > B) n(h[0], B), i(h.slice(1));
                                    else if (B === f) a.before(r(h[0])), n(h[1], 0), i(h.slice(2));
                                    else {
                                        var b = h.slice(-1)[0],
                                            x = p.length - B,
                                            w = b.length,
                                            C = 0;
                                        if (w >= x) o(h.slice(0, -1)), C = w === x ? 0 : w - x, n(b, C + g);
                                        else if (3 === F) a.before("<div>" + t.terminal.encode(h[0], !0) + "</div>"), n(h[1], B - f - 1), s.after('<div class="clear">' + t.terminal.encode(h[2], !0) + "</div>");
                                        else {
                                            var k, T;
                                            for (C = B, c = 0; c < h.length; ++c) {
                                                var _ = h[c].length;
                                                if (!(C > _)) break;
                                                C -= _
                                            }
                                            T = h[c], k = c, C === T.length && (C = 0, T = h[++k]), n(T, C), o(h.slice(0, k)), i(h.slice(k + 1))
                                        }
                                    }
                                }
                            } else "" === p ? (a.html(""), D.html("&nbsp;"), s.html("")) : n(p, B)
                        }
                    }(d),
                    N = function () {
                        function e(e) {
                            y = p(e), n.html(t.terminal.format(t.terminal.encode(e)))
                        }
                        var n = d.find(".prompt");
                        return function () {
                            switch (typeof b) {
                            case "string":
                                e(b);
                                break;
                            case "function":
                                b(e)
                            }
                        }
                    }(),
                    L = !0,
                    P = [];
                t.extend(d, {
                    name: function (t) {
                        if (t !== e) {
                            x = t, w = new f(t, j);
                            var n = P.length;
                            return n && !P[n - 1].enabled() && w.disable(), P.push(w), d
                        }
                        return x
                    },
                    purge: function () {
                        for (var t = P.length; t--;) P[t].purge();
                        return P = [], d
                    },
                    history: function () {
                        return w
                    },
                    set: function (t, r) {
                        return t !== e && (E = t, r || (B = E.length), $(), "function" == typeof n.onCommandChange && n.onCommandChange(E)), d
                    },
                    insert: function (t, e) {
                        return B === E.length ? E += t : E = 0 === B ? t + E : E.slice(0, B) + t + E.slice(B), e || (B += t.length), $(), "function" == typeof n.onCommandChange && n.onCommandChange(E), d
                    },
                    get: function () {
                        return E
                    },
                    commands: function (t) {
                        return t ? (n.commands = t, d) : t
                    },
                    destroy: function () {
                        return t(document.documentElement || window).unbind(".cmd"), d.stopTime("blink", r), d.find(".cursor").next().remove().end().prev().remove().end().remove(), d.find(".prompt, .clipboard").remove(), d.removeClass("cmd").removeData("cmd"), d
                    },
                    prompt: function (t) {
                        if (t === e) return b;
                        if ("string" != typeof t && "function" != typeof t) throw "prompt must be a function or string";
                        return b = t, N(), $(), d
                    },
                    position: function (t) {
                        return "number" == typeof t ? (B = 0 > t ? 0 : t > E.length ? E.length : t, $(), d) : B
                    },
                    visible: function () {
                        var t = d.visible;
                        return function () {
                            t.apply(d, []), $(), N()
                        }
                    }(),
                    show: function () {
                        var t = d.show;
                        return function () {
                            t.apply(d, []), $(), N()
                        }
                    }(),
                    resize: function (t) {
                        return t ? v = t : s(), $(), d
                    },
                    enable: function () {
                        return S || (D.addClass("inverted"), d.everyTime(500, "blink", r), S = !0), d
                    },
                    isenabled: function () {
                        return S
                    },
                    disable: function () {
                        return S && (d.stopTime("blink", r), D.removeClass("inverted"), S = !1), d
                    },
                    mask: function (t) {
                        return "boolean" == typeof t ? (A = t, $(), d) : A
                    }
                }), d.name(n.name || n.prompt || ""), b = n.prompt || "> ", N(), (n.enabled === e || n.enabled === !0) && d.enable();
                return t(document.documentElement || window).bind("keypress.cmd", function (r) {
                    var o;
                    if (r.ctrlKey && 99 === r.which) return !0;
                    if (k || "function" != typeof n.keypress || (o = n.keypress(r)), o !== e && !o) return o;
                    if (S) {
                        if (t.inArray(r.which, [38, 13, 0, 8]) > -1 && 123 !== r.keyCode && (38 !== r.which || !r.shiftKey)) return !1;
                        if (!r.ctrlKey && (!r.altKey || 100 !== r.which) || r.altKey) return k ? (T += String.fromCharCode(r.which), a(), i()) : d.insert(String.fromCharCode(r.which)), !1
                    }
                }).bind("keydown.cmd", h), d.data("cmd", d), d
            };
        var F = /(\[\[[gbiuso]*;[^;]*;[^\]]*\](?:[^\]]*\\\][^\]]*|[^\]]*|[^\[]*\[[^\]]*)\]?)/,
            b = /\[\[([gbiuso]*);([^;]*);([^;\]]*);?([^;\]]*);?([^\]]*)\]([^\]]*\\\][^\]]*|[^\]]*|[^\[]*\[[^\]]*)\]?/g,
            x = /\[\[([gbiuso]*;[^;\]]*;[^;\]]*(?:;|[^\]()]*);?[^\]]*)\]([^\]]*\\\][^\]]*|[^\]]*|[^\[]*\[[^\]]*)\]?/gi,
            w = /#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})/,
            C = /('[^']*'|"(\\"|[^"])*"|\/(\\\/|[^\/])*\/|(\\ |[^ ])+|[\w-]+)/g,
            k = /(\[\[[gbiuso]*;[^;]*;[^\]]*\])/,
            T = /\[\[[gbiuso]*;[^;]*;[^\]]*\]?$/;
        t.terminal = {
            split_equal: function (t, e) {
                for (var n = !1, r = !1, i = "", o = [], a = t.replace(x, function (t, e, n) {
                    var r = e.match(/;/g).length;
                    return r = 2 == r ? ";;" : 3 == r ? ";" : "", "[[" + e + r + n.replace(/\\\]/g, "&#93;").replace(/\n/g, "\\n") + "]" + n + "]"
                }).split(/\n/g), s = 0, l = a.length; l > s; ++s)
                    if ("" !== a[s])
                        for (var u = a[s], c = 0, f = 0, p = 0, h = u.length; h > p; ++p) {
                            if ("[" === u[p] && "[" === u[p + 1]) n = !0;
                            else if (n && "]" === u[p]) r ? (n = !1, r = !1) : r = !0;
                            else if (n && r || !n) {
                                if ("&" === u[p]) {
                                    var d = u.substring(p).match(/^(&[^;]+;)/);
                                    if (!d) throw "Unclosed html entity in line " + (s + 1) + " at char " + (p + 1);
                                    p += d[1].length - 2, p === h - 1 && o.push(g + d[1]);
                                    continue
                                }
                                "]" === u[p] && "\\" === u[p - 1] ? --f : ++f
                            }
                            if (f === e || p === h - 1) {
                                var g = u.substring(c, p + 1);
                                i && (g = i + g, g.match("]") && (i = "")), c = p + 1, f = 0;
                                var m = g.match(x);
                                if (m) {
                                    var v = m[m.length - 1];
                                    if ("]" !== v[v.length - 1]) i = v.match(k)[1], g += "]";
                                    else if (g.match(T)) {
                                        {
                                            var y = g.length;
                                            y - v[v.length - 1].length
                                        }
                                        g = g.replace(T, ""), i = v.match(k)[1]
                                    }
                                }
                                o.push(g)
                            }
                        } else o.push("");
                return o
            },
            encode: function (t, e) {
                return t = e ? t.replace(/&(?![^=]+=)/g, "&amp;") : t.replace(/&(?!#[0-9]+;|[a-zA-Z]+;|[^= "]+=[^=])/g, "&amp;"), t.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/ /g, "&nbsp;").replace(/\t/g, "&nbsp;&nbsp;&nbsp;&nbsp;")
            },
            format: function (e, n) {
                t.extend({}, {
                    linksNoReferrer: !1
                }, n || {});
                if ("string" == typeof e) {
                    var r = e.split(F);
                    return r && r.length > 1 && (e = t.map(r, function (t) {
                        return "" === t ? t : "[" === t.substring(0, 1) ? t.replace(b, function (t, e, n, r, i, o, a) {
                            if ("" === a) return "";
                            a = a.replace(/\\]/g, "]");
                            var s = ""; - 1 !== e.indexOf("b") && (s += "font-weight:bold;");
                            var l = []; - 1 !== e.indexOf("u") && l.push("underline"), -1 !== e.indexOf("s") && l.push("line-through"), -1 !== e.indexOf("o") && l.push("overline"), l.length && (s += "text-decoration:" + l.join(" ") + ";"), -1 !== e.indexOf("i") && (s += "font-style:italic;"), n.match(w) && (s += "color:" + n + ";", -1 !== e.indexOf("g") && (s += "text-shadow:0 0 5px " + n + ";")), r.match(w) && (s += "background-color:" + r);
                            var u = '<span style="' + s + '"' + ("" !== i ? ' class="' + i + '"' : "") + ' data-text="' + ("" === o ? a : o.replace(/&#93;/g, "]")).replace('"', "&quote;") + '">' + a + "</span>";
                            return u
                        }) : "<span>" + t + "</span>"
                    }).join("")), t.map(e.split(/(<\/?span[^>]*>)/g), function (t) {
                        return t
                    }).join("").replace(/<span><br\/?><\/span>/g, "<br/>")
                }
                return ""
            },
            escape_brackets: function (t) {
                return t.replace(/\[/g, "&#91;").replace(/\]/g, "&#93;")
            },
            strip: function (t) {
                return t.replace(b, "$6")
            },
            active: function () {
                return N.front()
            },
            from_ntroff: function (t) {
                return t.replace(/((?:_\x08.|.\x08_)+)/g, function (t) {
                    return "[[u;;]" + t.replace(/_x08|\x08_|_\u0008|\u0008_/g, "") + "]"
                }).replace(/((?:.\x08.)+)/g, function (t) {
                    return "[[b;#fff;]" + t.replace(/(.)(?:\x08|\u0008)(.)/g, function (t, e, n) {
                        return n
                    }) + "]"
                })
            },
            ansi_colors: {
                normal: {
                    black: "#000",
                    red: "#A00",
                    green: "#008400",
                    yellow: "#A50",
                    blue: "#00A",
                    magenta: "#A0A",
                    cyan: "#0AA",
                    white: "#AAA"
                },
                faited: {
                    black: "#000",
                    red: "#640000",
                    green: "#006100",
                    yellow: "#737300",
                    blue: "#000087",
                    magenta: "#650065",
                    cyan: "#008787",
                    white: "#818181"
                },
                bold: {
                    black: "#000",
                    red: "#F55",
                    green: "#44D544",
                    yellow: "#FF5",
                    blue: "#55F",
                    magenta: "#F5F",
                    cyan: "#5FF",
                    white: "#FFF"
                },
                palette: ["#000000", "#AA0000", "#00AA00", "#AA5500", "#0000AA", "#AA00AA", "#00AAAA", "#AAAAAA", "#555555", "#FF5555", "#55FF55", "#FFFF55", "#5555FF", "#FF55FF", "#55FFFF", "#FFFFFF", "#000000", "#00005F", "#000087", "#0000AF", "#0000D7", "#0000FF", "#005F00", "#005F5F", "#005F87", "#005FAF", "#005FD7", "#005FFF", "#008700", "#00875F", "#008787", "#0087AF", "#0087D7", "#00AF00", "#00AF5F", "#00AF87", "#00AFAF", "#00AFD7", "#00AFFF", "#00D700", "#00D75F", "#00D787", "#00D7AF", "#00D7D7", "#00D7FF", "#00FF00", "#00FF5F", "#00FF87", "#00FFAF", "#00FFD7", "#00FFFF", "#5F0000", "#5F005F", "#5F0087", "#5F00AF", "#5F00D7", "#5F00FF", "#5F5F00", "#5F5F5F", "#5F5F87", "#5F5FAF", "#5F5FD7", "#5F5FFF", "#5F8700", "#5F875F", "#5F8787", "#5F87AF", "#5F87D7", "#5F87FF", "#5FAF00", "#5FAF5F", "#5FAF87", "#5FAFAF", "#5FAFD7", "#5FAFFF", "#5FD700", "#5FD75F", "#5FD787", "#5FD7AF", "#5FD7D7", "#5FD7FF", "#5FFF00", "#5FFF5F", "#5FFF87", "#5FFFAF", "#5FFFD7", "#5FFFFF", "#870000", "#87005F", "#870087", "#8700AF", "#8700D7", "#8700FF", "#875F00", "#875F5F", "#875F87", "#875FAF", "#875FD7", "#875FFF", "#878700", "#87875F", "#878787", "#8787AF", "#8787D7", "#8787FF", "#87AF00", "#87AF5F", "#87AF87", "#87AFAF", "#87AFD7", "#87AFFF", "#87D700", "#87D75F", "#87D787", "#87D7AF", "#87D7D7", "#87D7FF", "#87FF00", "#87FF5F", "#87FF87", "#87FFAF", "#87FFD7", "#87FFFF", "#AF0000", "#AF005F", "#AF0087", "#AF00AF", "#AF00D7", "#AF00FF", "#AF5F00", "#AF5F5F", "#AF5F87", "#AF5FAF", "#AF5FD7", "#AF5FFF", "#AF8700", "#AF875F", "#AF8787", "#AF87AF", "#AF87D7", "#AF87FF", "#AFAF00", "#AFAF5F", "#AFAF87", "#AFAFAF", "#AFAFD7", "#AFAFFF", "#AFD700", "#AFD75F", "#AFD787", "#AFD7AF", "#AFD7D7", "#AFD7FF", "#AFFF00", "#AFFF5F", "#AFFF87", "#AFFFAF", "#AFFFD7", "#AFFFFF", "#D70000", "#D7005F", "#D70087", "#D700AF", "#D700D7", "#D700FF", "#D75F00", "#D75F5F", "#D75F87", "#D75FAF", "#D75FD7", "#D75FFF", "#D78700", "#D7875F", "#D78787", "#D787AF", "#D787D7", "#D787FF", "#D7AF00", "#D7AF5F", "#D7AF87", "#D7AFAF", "#D7AFD7", "#D7AFFF", "#D7D700", "#D7D75F", "#D7D787", "#D7D7AF", "#D7D7D7", "#D7D7FF", "#D7FF00", "#D7FF5F", "#D7FF87", "#D7FFAF", "#D7FFD7", "#D7FFFF", "#FF0000", "#FF005F", "#FF0087", "#FF00AF", "#FF00D7", "#FF00FF", "#FF5F00", "#FF5F5F", "#FF5F87", "#FF5FAF", "#FF5FD7", "#FF5FFF", "#FF8700", "#FF875F", "#FF8787", "#FF87AF", "#FF87D7", "#FF87FF", "#FFAF00", "#FFAF5F", "#FFAF87", "#FFAFAF", "#FFAFD7", "#FFAFFF", "#FFD700", "#FFD75F", "#FFD787", "#FFD7AF", "#FFD7D7", "#FFD7FF", "#FFFF00", "#FFFF5F", "#FFFF87", "#FFFFAF", "#FFFFD7", "#FFFFFF", "#080808", "#121212", "#1C1C1C", "#262626", "#303030", "#3A3A3A", "#444444", "#4E4E4E", "#585858", "#626262", "#6C6C6C", "#767676", "#808080", "#8A8A8A", "#949494", "#9E9E9E", "#A8A8A8", "#B2B2B2", "#BCBCBC", "#C6C6C6", "#D0D0D0", "#DADADA", "#E4E4E4", "#EEEEEE"]
            },
            from_ansi: function () {
                function e(e) {
                    var i, o = e.split(";"),
                        a = !1,
                        s = !1,
                        l = !1,
                        u = [],
                        c = "",
                        f = "",
                        p = !1,
                        h = !1,
                        d = !1,
                        g = t.terminal.ansi_colors.palette;
                    for (var m in o) {
                        switch (i = parseInt(o[m], 10)) {
                        case 1:
                            u.push("b"), l = !0, a = !1;
                            break;
                        case 4:
                            u.push("u");
                            break;
                        case 3:
                            u.push("i");
                            break;
                        case 5:
                            d = !0;
                            break;
                        case 38:
                            p = !0;
                            break;
                        case 48:
                            h = !0;
                            break;
                        case 2:
                            a = !0, l = !1;
                            break;
                        case 7:
                            s = !0;
                            break;
                        default:
                            p && d && g[i - 1] ? c = g[i - 1] : n[i] && (c = n[i]), h && d && g[i - 1] ? f = g[i - 1] : r[i] && (f = r[i])
                        }
                        5 !== i && (d = !1)
                    }
                    if (s)
                        if (c && f) {
                            var v = f;
                            f = c, c = v
                        } else c = "black", f = "white";
                    var y, F;
                    return y = F = l ? t.terminal.ansi_colors.bold : a ? t.terminal.ansi_colors.faited : t.terminal.ansi_colors.normal, [u.join(""), p ? c : y[c], h ? f : F[f]]
                }
                var n = {
                        30: "black",
                        31: "red",
                        32: "green",
                        33: "yellow",
                        34: "blue",
                        35: "magenta",
                        36: "cyan",
                        37: "white",
                        39: "white"
                    },
                    r = {
                        40: "black",
                        41: "red",
                        42: "green",
                        43: "yellow",
                        44: "blue",
                        45: "magenta",
                        46: "cyan",
                        47: "white",
                        49: "black"
                    };
                return function (t) {
                    var n = t.split(/(\x1B\[[0-9;]*[A-Za-z])/g);
                    if (1 == n.length) return t;
                    var r = [];
                    n.length > 3 && "[0m" == n.slice(0, 3).join("") && (n = n.slice(3));
                    for (var i, o, a, s, l = !1, u = 0; u < n.length; ++u)
                        if (s = n[u].match(/^\x1B\[([0-9;]*)([A-Za-z])$/)) switch (s[2]) {
                        case "m":
                            if ("" === s[1]) continue;
                            a = "0" !== s[1] ? e(s[1]) : ["", ""], l ? (r.push("]"), "0" == s[1] ? (l = !1, i = o = "") : (a[1] = a[1] || i, a[2] = a[2] || o, r.push("[[" + a.join(";") + "]"), a[1] && (i = a[1]), a[2] && (o = a[2]))) : (l = !0, r.push("[[" + a.join(";") + "]"), a[1] && (i = a[1]), a[2] && (o = a[2]))
                        } else r.push(n[u]);
                    return l && r.push("]"), r.join("")
                }
            }(),
            parseArguments: function (e) {
                return t.map(e.match(C) || [], function (t) {
                    return "'" === t[0] && "'" === t[t.length - 1] ? t.replace(/^'|'$/g, "") : '"' === t[0] && '"' === t[t.length - 1] ? (t = t.replace(/^"|"$/g, "").replace(/\\([" ])/g, "$1"), t.replace(/\\\\|\\t|\\n/g, function (t) {
                        return "t" === t[1] ? "	" : "n" === t[1] ? "\n" : "\\"
                    }).replace(/\\x([0-9a-f]+)/gi, function (t, e) {
                        return String.fromCharCode(parseInt(e, 16))
                    }).replace(/\\0([0-7]+)/g, function (t, e) {
                        return String.fromCharCode(parseInt(e, 8))
                    })) : "/" === t[0] && "/" == t[t.length - 1] ? new RegExp(t.replace(/^\/|\/$/g, "")) : t.match(/^-?[0-9]+$/) ? parseInt(t, 10) : t.match(/^[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?$/) ? parseFloat(t) : t.replace(/\\ /g, " ")
                })
            },
            splitArguments: function (e) {
                return t.map(e.match(C) || [], function (t) {
                    return "'" === t[0] && "'" === t[t.length - 1] ? t.replace(/^'|'$/g, "") : '"' === t[0] && '"' === t[t.length - 1] ? t.replace(/^"|"$/g, "").replace(/\\([" ])/g, "$1") : "/" === t[0] && "/" == t[t.length - 1] ? t : t.replace(/\\ /g, " ")
                })
            },
            parseCommand: function (e) {
                return d(e, t.terminal.parseArguments)
            },
            splitCommand: function (e) {
                return d(e, t.terminal.splitArguments)
            },
            test: function () {
                function e() {
                    r.css("height", t(window).height() - 20)
                }

                function n(t, e) {
                    r.echo(e + " &#91;" + (t ? "[[b;#44D544;]PASS]" : "[[b;#FF5555;]FAIL]") + "&#93;")
                }
                var r = t.terminal.active();
                if (!r) {
                    r = t("body").terminal(t.noop).css("margin", 0);
                    var i = (r.outerHeight() - r.height(), t(window));
                    i.resize(e).resize()
                }
                r.echo("Testing...");
                var o = 'name "foo bar" baz /^asd [x]/ str\\ str 10 1e10',
                    a = t.terminal.splitCommand(o);
                n("name" === a.name && "foo bar" === a.args[0] && "baz" === a.args[1] && "/^asd [x]/" === a.args[2] && "str str" === a.args[3] && "10" === a.args[4] && "1e10" === a.args[5], "$.terminal.splitCommand"), a = t.terminal.parseCommand(o), n("name" === a.name && "foo bar" === a.args[0] && "baz" === a.args[1] && "regexp" === t.type(a.args[2]) && "^asd [x]" === a.args[2].source && "str str" === a.args[3] && 10 === a.args[4] && 1e10 === a.args[5], "$.terminal.parseCommand"), o = "[2;31;46mFoo[1;3;4;32;45mBar[0m[7mBaz", n("[[;#640000;#008787]Foo][[biu;#44D544;#F5F]Bar][[;#000;#AAA]Baz]" === t.terminal.from_ansi(o), "$.terminal.from_ansi"), o = "[[biugs;#fff;#000]Foo][[i;;;foo]Bar][[ous;;]Baz]", r.echo("$.terminal.format"), n('<span style="font-weight:bold;text-decoration:underline line-through;font-style:italic;color:#fff;text-shadow:0 0 5px #fff;background-color:#000" data-text="Foo">Foo</span><span style="font-style:italic;" class="foo" data-text="Bar">Bar</span><span style="text-decoration:underline line-through overline;" data-text="Baz">Baz</span>' === t.terminal.format(o), "	formatting"), o = "http://terminal.jcubic.pl/examples.php https://www.google.com/?q=jquery%20terminal", n('<a target="_blank" href="http://terminal.jcubic.pl/examples.php">http://terminal.jcubic.pl/examples.php</a> <a target="_blank" href="https://www.google.com/?q=jquery%20terminal">https://www.google.com/?q=jquery%20terminal</a>' === t.terminal.format(o), "	urls"), o = "foo@bar.com baz.quux@example.com", n('<a href="mailto:foo@bar.com">foo@bar.com</a> <a href="mailto:baz.quux@example.com">baz.quux@example.com</a>' === t.terminal.format(o), "	emails"), o = "-_-[[biugs;#fff;#000]Foo]-_-[[i;;;foo]Bar]-_-[[ous;;]Baz]-_-", n("-_-Foo-_-Bar-_-Baz-_-" === t.terminal.strip(o), "$.terminal.strip"), o = "[[bui;#fff;]Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed dolor nisl, in suscipit justo. Donec a enim et est porttitor semper at vitae augue. Proin at nulla at dui mattis mattis. Nam a volutpat ante. Aliquam consequat dui eu sem convallis ullamcorper. Nulla suscipit, massa vitae suscipit ornare, tellus] est [[b;;#f00]consequat nunc, quis blandit elit odio eu arcu. Nam a urna nec nisl varius sodales. Mauris iaculis tincidunt orci id commodo. Aliquam] non magna quis [[i;;]tortor malesuada aliquam] eget ut lacus. Nam ut vestibulum est. Praesent volutpat tellus in eros dapibus elementum. Nam laoreet risus non nulla mollis ac luctus [[ub;#fff;]felis dapibus. Pellentesque mattis elementum augue non sollicitudin. Nullam lobortis fermentum elit ac mollis. Nam ac varius risus. Cras faucibus euismod nulla, ac auctor diam rutrum sit amet. Nulla vel odio erat], ac mattis enim.", r.echo("$.terminal.split_equal");
                for (var s = [10, 40, 60, 400], l = s.length; l--;) {
                    for (var u = t.terminal.split_equal(o, s[l]), c = !0, f = 0; f < u.length; ++f)
                        if (t.terminal.strip(u[f]).length > s[l]) {
                            c = !1;
                            break
                        }
                    n(c, "	split " + s[l])
                }
            }
        }, t.fn.visible = function () {
            return this.css("visibility", "visible")
        }, t.fn.hidden = function () {
            return this.css("visibility", "hidden")
        };
        var _ = 0;
        t.jrpc = function (e, n, r, i, o) {
            var a = t.json_stringify({
                jsonrpc: "2.0",
                method: n,
                params: r,
                id: ++_
            });
            return t.ajax({
                url: e,
                data: a,
                success: i,
                error: o,
                contentType: "application/json",
                dataType: "json",
                async: !0,
                cache: !1,
                type: "POST"
            })
        };
        var A = "0.7.12",
            E = !A.match(/^\{\{/),
            B = "Copyright (c) 2011-2013 Jakub Jankiewicz <http://jcubic.pl>",
            S = E ? " version " + A : " ",
            j = new RegExp(" {" + S.length + "}$"),
            D = [
                ["jQuery Terminal", "(c) 2011-2013 jcubic"],
                ["jQuery Terminal Emulator" + (E ? " v. " + A : ""), B.replace(/ *<.*>/, "")],
                ["jQuery Terminal Emulator" + (E ? S : ""), B.replace(/^Copyright /, "")],
                ["      _______                 ________                        __", "     / / _  /_ ____________ _/__  ___/______________  _____  / /", " __ / / // / // / _  / _/ // / / / _  / _/     / /  \\/ / _ \\/ /", "/  / / // / // / ___/ // // / / / ___/ // / / / / /\\  / // / /__", "\\___/____ \\\\__/____/_/ \\__ / /_/____/_//_/ /_/ /_/  \\/\\__\\_\\___/", "         \\/          /____/                                   ".replace(j, " ") + S, B],
                ["      __ _____                     ________                              __", "     / // _  /__ __ _____ ___ __ _/__  ___/__ ___ ______ __ __  __ ___  / /", " __ / // // // // // _  // _// // / / // _  // _//     // //  \\/ // _ \\/ /", "/  / // // // // // ___// / / // / / // ___// / / / / // // /\\  // // / /__", "\\___//____ \\\\___//____//_/ _\\_  / /_//____//_/ /_/ /_//_//_/ /_/ \\__\\_\\___/", "          \\/              /____/                                          ".replace(j, "") + S, B]
            ];
        t.terminal.defaults = {
            prompt: "> ",
            history: !0,
            exit: !0,
            clear: !0,
            enabled: !0,
            historySize: 60,
            checkArity: !0,
            displayExceptions: !0,
            cancelableAjax: !0,
            processArguments: !0,
            linksNoReferrer: !1,
            login: null,
            outputLimit: -1,
            tabcompletion: null,
            historyFilter: null,
            onInit: t.noop,
            onClear: t.noop,
            onBlur: t.noop,
            onFocus: t.noop,
            onTerminalChange: t.noop,
            onExit: t.noop,
            keypress: t.noop,
            keydown: t.noop
        };
        var $ = [],
            N = new u;
        t.fn.terminal = function (n, r) {
            function i(e) {
                return "function" == typeof V.processArguments ? d(e, V.processArguments) : V.processArguments ? t.terminal.parseCommand(e) : t.terminal.splitCommand(e)
            }

            function o(e) {
                P.echo("string" == typeof e ? e : e instanceof Array ? t.map(e, function (e) {
                    return t.json_stringify(e)
                }).join(" ") : "object" == typeof e ? t.json_stringify(e) : e)
            }

            function a(e) {
                var n = function (n, r) {
                    P.pause(), t.jrpc(e, n, r, function (t) {
                        t.error ? P.error("&#91;RPC&#93; " + t.error.message) : o(t.result), P.resume()
                    }, function (t, e) {
                        "abort" !== e && P.error("&#91;AJAX&#93; " + e + " - Server reponse is: \n" + t.responseText), P.resume()
                    })
                };
                return function (t, e) {
                    if ("" !== t)
                        if (t = i(t), V.login && "help" !== t.name) {
                            var r = e.token();
                            r ? n(t.name, [r].concat(t.args)) : e.error("&#91;AUTH&#93; Access denied (no token)")
                        } else n(t.name, t.args)
                }
            }

            function s(n, r) {
                return function (o, a) {
                    if ("" !== o) {
                        o = i(o);
                        var l = n[o.name],
                            u = t.type(l);
                        if ("function" === u) {
                            if (!r || l.length === o.args.length) return l.apply(P, o.args);
                            P.error("&#91;Arity&#93; wrong number of arguments. Function '" + o.name + "' expect " + l.length + " got " + o.args.length)
                        } else if ("object" === u || "string" === u) {
                            var c = [];
                            if ("object" === u) {
                                for (var f in l) l.hasOwnProperty(f) && c.push(f);
                                l = s(l, r)
                            }
                            a.push(l, {
                                prompt: o.name + "> ",
                                name: o.name,
                                completion: "object" === u ? function (t, e, n) {
                                    n(c)
                                } : e
                            })
                        } else a.error("Command '" + o.name + "' Not Found")
                    }
                }
            }

            function l(e, n) {
                n = n || t.noop;
                var r = t.type(e),
                    i = {};
                if ("string" === r) P.pause(), t.jrpc(e, "system.describe", [], function (r) {
                    var l = [];
                    if (r.procs) {
                        var u = {};
                        t.each(r.procs, function (n, r) {
                            l.push(r.name), u[r.name] = function () {
                                var n = Array.prototype.slice.call(arguments);
                                V.checkArity && r.params && r.params.length !== n.length ? P.error("&#91;Arity&#93; wrong number of arguments.Function '" + r.name + "' expect " + r.params.length + " got " + n.length) : (P.pause(), t.jrpc(e, r.name, n, function (t) {
                                    t.error ? P.error("&#91;RPC&#93; " + t.error.message) : o(t.result), P.resume()
                                }, function (t, e) {
                                    "abort" !== e && P.error("&#91;AJAX&#93; " + e + " - Server reponse is: \n" + t.responseText), P.resume()
                                }))
                            }
                        }), i.interpreter = s(u, !1), i.completion = function (t, e, n) {
                            n(l)
                        }
                    } else i.interpreter = a(e), i.completion = V.completion;
                    P.resume(), n(i)
                }, function () {
                    i.completion = V.completion, i.interpreter = a(e), n(i)
                });
                else if ("object" === r) {
                    var l = [];
                    for (var u in e) l.push(u);
                    i.interpreter = s(e, !0), i.completion = function (t, e, n) {
                        n(l)
                    }, n(i)
                } else {
                    if ("undefined" === r) e = t.noop;
                    else if ("function" !== r) throw r + " is invalid interpreter value";
                    n({
                        interpreter: e,
                        completion: V.completion
                    })
                }
            }

            function u(t) {
                return "string" == typeof t ? t : "string" == typeof t.fileName ? t.fileName + ": " + t.message : t.message
            }

            function f(e, n) {
                if (V.displayExceptions) {
                    var r = u(e);
                    P.error("&#91;" + n + "&#93;: " + r), "string" == typeof e.fileName && (P.pause(), t.get(e.fileName, function (t) {
                        P.resume();
                        var n = e.lineNumber - 1,
                            r = t.split("\n")[n];
                        r && P.error("&#91;" + e.lineNumber + "&#93;: " + r)
                    })), e.stack && P.error(e.stack)
                }
            }

            function p() {
                var t = O.prop ? O.prop("scrollHeight") : O.attr("scrollHeight");
                O.scrollTop(t)
            }

            function y(t, e) {
                try {
                    if ("function" == typeof e) e(function () {});
                    else if ("string" != typeof e) {
                        var n = t + " must be string or function";
                        throw n
                    }
                } catch (r) {
                    return f(r, t.toUpperCase()), !1
                }
                return !0
            }

            function F(e, n) {
                try {
                    var r = t.extend({
                        raw: !1,
                        finalize: t.noop
                    }, n || {});
                    e = "function" === t.type(e) ? e() : e, e = "string" === t.type(e) ? e : String(e);
                    var i, o;
                    if (r.raw || (e = t.terminal.encode(e)), e = t.terminal.from_ntroff(e), e = t.terminal.from_ansi(e), j.push(L), !r.raw && (e.length > z || e.match(/\n/))) {
                        var a = t.terminal.split_equal(e, z);
                        for (i = 0, o = a.length; o > i; ++i) j.push("" === a[i] || "\r" === a[i] ? "&nbsp" : r.raw ? a[i] : t.terminal.format(a[i], {
                            linksNoReferer: V.linksNoReferer
                        }))
                    } else r.raw || (e = t.terminal.format(e, {
                        linksNoReferer: V.linksNoReferer
                    })), j.push(e);
                    j.push(r.finalize)
                } catch (s) {
                    j = [], alert("Internal Exception(draw_line):" + u(s) + "\n" + s.stack)
                }
            }

            function b() {
                try {
                    var e;
                    if (V.outputLimit >= 0) {
                        for (var n, r = P.rows(), i = 0 === V.outputLimit ? r : V.outputLimit, o = 0, a = t("<div/>"), s = j.length; s--;)
                            if ("function" == typeof j[s]) n = j[s], e = t("<div/>");
                            else if (j[s] === L) {
                            e.prependTo(a);
                            try {
                                n(e)
                            } catch (l) {
                                f(l, "USER:echo(finalize)")
                            }
                        } else if (e.prepend("<div>" + j[s] + "</div>"), ++o === i) {
                            if (j[s - 1] !== L) try {
                                n(e)
                            } catch (l) {
                                f(l, "USER:echo(finalize)")
                            }
                            break
                        }
                        a.children().appendTo(M)
                    } else t.each(j, function (n, r) {
                        if (r === L) e = t("<div></div>");
                        else if ("function" == typeof r) {
                            e.appendTo(M);
                            try {
                                r(e)
                            } catch (i) {
                                f(i, "USER:echo(finalize)")
                            }
                        } else t("<div/>").html(r).appendTo(e).width("100%")
                    });
                    p(), j = []
                } catch (l) {
                    alert("flush " + u(l) + "\n" + l.stack)
                }
            }

            function x() {
                V.greetings === e ? P.echo(P.signature) : V.greetings && P.echo(V.greetings)
            }

            function w(e) {
                e = t.terminal.escape_brackets(t.terminal.encode(e, !0));
                var n = Z.prompt();
                Z.mask() && (e = e.replace(/./g, "*")), "function" == typeof n ? n(function (t) {
                    P.echo(t + e)
                }) : P.echo(n + e)
            }

            function C(t, n) {
                try {
                    q = t;
                    var r = J.top();
                    if ("exit" === t && V.exit)
                        if (1 === J.size())
                            if (V.login) T();
                            else {
                                var i = "You can't exit from main interpeter";
                                n || w(t), P.echo(i)
                            } else P.pop("exit");
                    else {
                        n || w(t);
                        var o = W.length - 1;
                        if ("clear" === t && V.clear) P.clear();
                        else {
                            var a = r.interpreter(t, P);
                            a !== e && (o === W.length - 1 ? (W.pop(), a !== !1 && P.echo(a)) : W = a === !1 ? W.slice(0, o).concat(W.slice(o + 1)) : W.slice(0, o).concat([a]).concat(W.slice(o + 1)), P.resize())
                        }
                    }
                } catch (s) {
                    throw f(s, "USER"), P.resume(), s
                }
            }

            function k() {
                var e = null;
                Z.prompt("login: "), V.history && Z.history().disable(), Z.commands(function (n) {
                    try {
                        if (w(n), e) {
                            if (Z.mask(!1), P.pause(), "function" != typeof V.login) throw "Value of login property must be a function";
                            var r = n;
                            V.login(e, r, function (n) {
                                if (n) {
                                    var r = V.name;
                                    r = (r ? r + "_" : "") + U + "_", t.Storage.set(r + "token", n), t.Storage.set(r + "login", e), Z.commands(C), B()
                                } else P.error("Wrong password try again"), Z.prompt("login: "), e = null;
                                P.resume()
                            }, P)
                        } else e = n, Z.prompt("password: "), Z.mask(!0)
                    } catch (i) {
                        throw f(i, "LOGIN", P), i
                    }
                })
            }

            function T() {
                if ("function" == typeof V.onBeforelogout) try {
                    if (V.onBeforelogout(P) === !1) return
                } catch (e) {
                    throw f(e, "onBeforelogout"), e
                }
                var n = (V.name ? V.name + "_" : "") + U + "_";
                if (t.Storage.remove(n + "token"), t.Storage.remove(n + "login"), V.history && Z.history().disable(), k(), "function" == typeof V.onAfterlogout) try {
                    V.onAfterlogout(P)
                } catch (e) {
                    throw f(e, "onAfterlogout"), e
                }
            }

            function _(e) {
                var n = (V.name ? V.name + "_" : "") + U + "_interpreters",
                    r = t.Storage.get(n);
                r = r ? new Function("return " + r + ";")() : [], -1 == t.inArray(e, r) && (r.push(e), t.Storage.set(n, t.json_stringify(r)))
            }

            function E() {
                var t = J.top(),
                    e = (V.name ? V.name + "_" : "") + U + (H.length ? "_" + H.join("_") : "");
                _(e), Z.name(e), Z.prompt("function" == typeof t.prompt ? function (e) {
                    t.prompt(e, P)
                } : t.prompt), Z.set(""), "function" == typeof t.onStart && t.onStart(P)
            }

            function B() {
                if (E(), V.history && Z.history().enable(), x(), "function" == typeof V.onInit) try {
                    V.onInit(P)
                } catch (t) {
                    throw f(t, "OnInit"), t
                }
            }

            function S(n) {
                var r, i, o = J.top();
                if ("function" === t.type(o.keydown) && (r = o.keydown(n, P), r !== e)) return r;
                if (P.oneTime(10, function () {
                    Q()
                }), "function" === t.type(V.keydown) && (r = V.keydown(n, P), r !== e)) return r;
                if (P.paused()) {
                    if (68 === n.which && n.ctrlKey) {
                        if ($.length) {
                            for (i = $.length; i--;) {
                                var a = $[i];
                                if (4 !== a.readyState) try {
                                    a.abort()
                                } catch (s) {
                                    P.error("error in aborting ajax")
                                }
                            }
                            $ = [], P.resume()
                        }
                        return !1
                    }
                } else {
                    if (9 !== n.which && (G = 0), 68 === n.which && n.ctrlKey) return "" === Z.get() ? J.size() > 1 || V.login !== e ? P.pop("") : (P.resume(), P.echo("")) : P.set_command(""), !1;
                    if (V.tabcompletion && 9 === n.which) {
                        ++G;
                        var l, u = Z.get().substring(0, Z.position()),
                            c = u.split(" ");
                        if (1 == c.length) l = c[0];
                        else
                            for (l = c[c.length - 1], i = c.length - 1; i > 0 && "\\" == c[i - 1][c[i - 1].length - 1]; i--) l = c[i - 1] + " " + l;
                        var f = new RegExp("^" + h(l));
                        return J.top().completion(P, l, function (t) {
                            var e = Z.get().substring(0, Z.position());
                            if (e === u) {
                                var n = [];
                                for (i = t.length; i--;) f.test(t[i]) && n.push(t[i]);
                                if (1 === n.length) P.insert(n[0].replace(f, ""));
                                else if (n.length > 1)
                                    if (G >= 2) w(u), P.echo(n.join("	")), G = 0;
                                    else {
                                        var r = !1;
                                        t: for (var o = l.length; o < n[0].length; ++o) {
                                            for (i = 1; i < n.length; ++i)
                                                if (n[0].charAt(o) !== n[i].charAt(o)) break t;
                                            r = !0
                                        }
                                        r && P.insert(n[0].slice(0, o).replace(f, ""))
                                    }
                            }
                        }), !1
                    }
                    if (86 === n.which && n.ctrlKey) return void P.oneTime(1, function () {
                        p()
                    });
                    if (9 === n.which && n.ctrlKey) {
                        if (N.length() > 1) return P.focus(!1), !1
                    } else 34 === n.which ? P.scroll(P.height()) : 33 === n.which ? P.scroll(-P.height()) : P.attr({
                        scrollTop: P.attr("scrollHeight")
                    })
                }
            }
            var j = [],
                L = 1,
                P = this;
            if (this.length > 1) return this.each(function () {
                t.fn.terminal.call(t(this), n, t.extend({
                    name: P.selector
                }, r))
            });
            if (P.data("terminal")) return P.data("terminal");
            if (0 === P.length) throw 'Sorry, but terminal said that "' + P.selector + '" is not valid selector!';
            var O, q, M, z, I, R, H = [],
                G = 0,
                W = [],
                U = N.length(),
                X = [],
                V = t.extend({}, t.terminal.defaults, {
                    name: P.selector
                }, r || {}),
                Y = !V.enabled;
            t.extend(P, t.omap({
                clear: function () {
                    M.html(""), Z.set(""), W = [];
                    try {
                        V.onClear(P)
                    } catch (t) {
                        throw f(t, "onClear"), t
                    }
                    return P.attr({
                        scrollTop: 0
                    }), P
                },
                export_view: function () {
                    return {
                        prompt: P.get_prompt(),
                        command: P.get_command(),
                        position: Z.position(),
                        lines: W.slice(0)
                    }
                },
                import_view: function (t) {
                    return P.set_prompt(t.prompt), P.set_command(t.command), Z.position(t.position), W = t.lines, P.resize(), P
                },
                exec: function (t, e) {
                    return Y ? X.push([t, e]) : C(t, e), P
                },
                commands: function () {
                    return J.top().interpreter
                },
                greetings: function () {
                    return x(), P
                },
                paused: function () {
                    return Y
                },
                pause: function () {
                    return Z && (Y = !0, P.disable(), Z.hidden()), P
                },
                resume: function () {
                    if (Z) {
                        P.enable();
                        var t = X;
                        for (X = []; t.length;) {
                            var e = t.shift();
                            P.exec.apply(P, e)
                        }
                        Z.visible(), p()
                    }
                    return P
                },
                cols: function () {
                    return z
                },
                rows: function () {
                    var e = t('<div class="terminal"><span>&nbsp;</span></div>').appendTo("body"),
                        n = Math.floor(P.height() / e.height());
                    return e.remove(), n
                },
                history: function () {
                    return Z.history()
                },
                next: function () {
                    if (1 === N.length()) return P; {
                        var e = P.offset().top;
                        P.height(), P.scrollTop()
                    }
                    if (g(P)) {
                        N.front().disable();
                        var n = N.rotate().enable(),
                            r = n.offset().top - 50;
                        t("html,body").animate({
                            scrollTop: r
                        }, 500);
                        try {
                            V.onTerminalChange(n)
                        } catch (i) {
                            throw f(i, "onTerminalChange"), i
                        }
                        return n
                    }
                    return P.enable(), t("html,body").animate({
                        scrollTop: e - 50
                    }, 500), P
                },
                focus: function (t, e) {
                    return P.oneTime(1, function () {
                        if (1 === N.length())
                            if (t === !1) try {
                                e || V.onBlur(P) === !1 || P.disable()
                            } catch (n) {
                                throw f(n, "onBlur"), n
                            } else try {
                                    e || V.onFocus(P) === !1 || P.enable()
                                } catch (n) {
                                    throw f(n, "onFocus"), n
                                } else if (t === !1) P.next();
                                else {
                                    var r = N.front();
                                    if (r != P && (r.disable(), !e)) try {
                                        V.onTerminalChange(P)
                                    } catch (n) {
                                        throw f(n, "onTerminalChange"), n
                                    }
                                    N.set(P), P.enable()
                                }
                    }), P
                },
                enable: function () {
                    return z === e && P.resize(), Y && Z && (Z.enable(), Y = !1), P
                },
                disable: function () {
                    return Z && (Y = !0, Z.disable()), P
                },
                enabled: function () {
                    return Y
                },
                signature: function () {
                    var t = P.cols(),
                        e = 15 > t ? null : 35 > t ? 0 : 55 > t ? 1 : 64 > t ? 2 : 75 > t ? 3 : 4;
                    return null !== e ? D[e].join("\n") + "\n" : ""
                },
                version: function () {
                    return A
                },
                get_command: function () {
                    return Z.get()
                },
                insert: function (t) {
                    if ("string" == typeof t) return Z.insert(t), P;
                    throw "insert function argument is not a string"
                },
                set_prompt: function (t) {
                    return y("prompt", t) && (Z.prompt("function" == typeof t ? function (e) {
                        t(e, P)
                    } : t), J.top().prompt = t), P
                },
                get_prompt: function () {
                    return J.top().prompt
                },
                set_command: function (t) {
                    return Z.set(t), P
                },
                set_mask: function (t) {
                    return Z.mask(t), P
                },
                get_output: function (e) {
                    return e ? W : t.map(W, function (t) {
                        return "function" == typeof t[0] ? t[0]() : t[0]
                    }).join("\n")
                },
                resize: function (e, n) {
                    e && n && (P.width(e), P.height(n)), e = P.width(), n = P.height();
                    var r = m(P);
                    if (r !== z) {
                        z = r, Z.resize(z);
                        var i = M.empty().detach();
                        t.each(W, function (t, e) {
                            F.apply(null, e)
                        }), Z.before(i), b(), "function" != typeof V.onResize || R === n && I === e || V.onResize(P), (R !== n || I !== e) && (R = n, I = e)
                    }
                    return P
                },
                flush: function () {
                    b()
                },
                echo: function (e, n) {
                    try {
                        e = e || "";
                        var r = t.extend({
                            flush: !0,
                            raw: !1,
                            finalize: t.noop
                        }, n || {});
                        if (j = [], F(e, r), r.flush && b(), W.push([e, r]), r.outputLimit >= 0) {
                            var i = 0 === r.outputLimit ? P.rows() : r.outputLimit,
                                o = M.find("div div");
                            o.length > i && o.slice(0, W.length - i + 1).remove()
                        }
                        Q()
                    } catch (a) {
                        alert("terminal.echo " + u(a) + "\n" + a.stack)
                    }
                    return P
                },
                error: function (e, n) {
                    return P.echo("[[;#f00;]" + t.terminal.escape_brackets(e).replace(/\\$/, "&#92;") + "]", n)
                },
                scroll: function (t) {
                    var e;
                    return t = Math.round(t), O.prop ? (t > O.prop("scrollTop") && t > 0 && O.prop("scrollTop", 0), e = O.prop("scrollTop"), O.scrollTop(e + t), P) : (t > O.attr("scrollTop") && t > 0 && O.attr("scrollTop", 0), e = O.attr("scrollTop"), O.scrollTop(e + t), P)
                },
                logout: V.login ? function () {
                    for (; J.size() > 1;) J.pop();
                    return T(), P
                } : function () {
                    throw "You don't have login function"
                },
                token: V.login ? function () {
                    var e = V.name;
                    return t.Storage.get((e ? e + "_" : "") + U + "_token")
                } : t.noop,
                login_name: V.login ? function () {
                    var e = V.name;
                    return t.Storage.get((e ? e + "_" : "") + U + "_login")
                } : t.noop,
                name: function () {
                    return J.top().name
                },
                push: function (e, n) {
                    if (n && (!n.prompt || y("prompt", n.prompt)) || !n) {
                        n = n || {}, n.name = n.name || q, n.prompt = n.prompt || n.name + " ", H.push(n.name);
                        var r = J.top();
                        r && (r.mask = Z.mask()), l(e, function (e) {
                            J.push(t.extend({}, e, n)), E()
                        })
                    }
                    return P
                },
                pop: function (n) {
                    if (n !== e && w(n), H.pop(), J.top().name === V.name) {
                        if (V.login && (T(), "function" === t.type(V.onExit))) try {
                            V.onExit(P)
                        } catch (r) {
                            throw f(r, "onExit"), r
                        }
                    } else {
                        var i = J.pop();
                        if (E(), "function" === t.type(i.onExit)) try {
                            i.onExit(P)
                        } catch (r) {
                            throw f(r, "onExit"), r
                        }
                        P.set_mask(J.top().mask)
                    }
                    return P
                },
                level: function () {
                    return J.size()
                },
                reset: function () {
                    for (P.clear(); J.size() > 1;) J.pop();
                    return B(), P
                },
                purge: function () {
                    var e = (V.name ? V.name + "_" : "") + U + "_",
                        n = t.Storage.get(e + "interpreters");
                    return t.each(new Function("return " + n + ";")(), function (e, n) {
                        t.Storage.remove(n + "_commands")
                    }), t.Storage.remove(e + "interpreters"), t.Storage.remove(e + "token"), t.Storage.remove(e + "login"), P
                },
                destroy: function () {
                    return Z.destroy().remove(), M.remove(), t(document).unbind(".terminal"), t(window).unbind(".terminal"), P.unbind("click, mousewheel"), P.removeData("terminal").removeClass("terminal"), V.width && P.css("width", ""), V.height && P.css("height", ""), P
                }
            }, function (t, e) {
                return function () {
                    try {
                        return e.apply(this, Array.prototype.slice.apply(arguments))
                    } catch (n) {
                        throw "exec" !== t && f(n, "TERMINAL"), n
                    }
                }
            }));
            var Q = function () {
                var t = v(P);
                return function () {
                    t !== v(P) && (P.resize(), t = v(P))
                }
            }();
            if (V.width && P.width(V.width), V.height && P.height(V.height), O = navigator.userAgent.toLowerCase().match(/(webkit)[ \/]([\w.]+)/) || "body" != P[0].tagName.toLowerCase() ? P : t("html"), t(document).bind("ajaxSend.terminal", function (t, e) {
                $.push(e)
            }), M = t("<div>").addClass("terminal-output").appendTo(P), P.addClass("terminal"), ("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch) && (P.click(function () {
                P.find("textarea").focus()
            }), P.find("textarea").focus()), V.login && "function" == typeof V.onBeforeLogin) try {
                V.onBeforeLogin(P)
            } catch (K) {
                throw f(K, "onBeforeLogin"), K
            }
            if ("string" != typeof n || "string" != typeof V.login && !V.login || (V.login = function (e) {
                return function (r, i, o) {
                    P.pause(), t.jrpc(n, e, [r, i], function (t) {
                        P.resume(), o(!t.error && t.result ? t.result : null)
                    }, function (t, e) {
                        P.resume(), P.error("&#91;AJAX&#92; Response: " + e + "\n" + t.responseText)
                    })
                }
            }("boolean" === t.type(V.login) ? "login" : V.login)), N.append(P), y("prompt", V.prompt)) {
                var J, Z;
                l(n, function (n) {
                    J = new c(t.extend({
                        name: V.name,
                        prompt: V.prompt,
                        greetings: V.greetings
                    }, n)), Z = t("<div/>").appendTo(P).cmd({
                        prompt: V.prompt,
                        history: V.history,
                        historyFilter: V.historyFilter,
                        historySize: V.historySize,
                        width: "100%",
                        keydown: S,
                        keypress: V.keypress ? function (t) {
                            return V.keypress(t, P)
                        } : null,
                        onCommandChange: function (e) {
                            if ("function" === t.type(V.onCommandChange)) try {
                                V.onCommandChange(e, P)
                            } catch (n) {
                                throw f(n, "onCommandChange"), n
                            }
                            p()
                        },
                        commands: C
                    }), V.enabled === !0 ? P.focus(e, !0) : P.disable(), t(document).bind("click.terminal", function (e) {
                        t(e.target).parents().hasClass("terminal") || V.onBlur(P) === !1 || P.disable()
                    }), P.click(function () {
                        P.focus()
                    }), V.login && P.token && !P.token() && P.login_name && !P.login_name() ? k() : B(), P.is(":visible") && (z = m(P), Z.resize(z)), P.oneTime(100, function () {
                        t(window).bind("resize.terminal", function () {
                            if (P.is(":visible")) {
                                var t = P.width(),
                                    e = P.height();
                                (R !== e || I !== t) && P.resize()
                            }
                        })
                    }), "function" === t.type(t.fn.init.prototype.mousewheel) && P.mousewheel(function (t, e) {
                        return P.scroll(e > 0 ? -40 : 40), !1
                    }, !0)
                })
            }
            return P.data("terminal", P), P
        }
    }(jQuery), ! function (t) {
        var e = {
            animation: "dissolve",
            separator: ",",
            interval: 5e3,
            speed: 200
        };
        t.fx.step.textShadowBlur = function (e) {
            t(e.elem).prop("textShadowBlur", e.now).css({
                textShadow: "0 0 " + Math.floor(e.now) + "px black"
            })
        }, t.fn.textrotator = function (n) {
            var r = t.extend({}, e, n);
            return this.each(function () {
                var e = t(this),
                    n = [];
                t.each(e.text().split(r.separator), function (t, e) {
                    n.push(e)
                }), e.text(n[0]);
                var i = function () {
                    switch (r.animation) {
                    case "dissolve":
                        e.animate({
                            textShadowBlur: 20,
                            opacity: 0
                        }, 500, function () {
                            o = t.inArray(e.text(), n), o + 1 == n.length && (o = -1), e.text(n[o + 1]).animate({
                                textShadowBlur: 0,
                                opacity: 1
                            }, 500)
                        });
                        break;
                    case "flip":
                        e.find(".back").length > 0 && e.html(e.find(".back").html());
                        var i = e.text(),
                            o = t.inArray(i, n);
                        o + 1 == n.length && (o = -1), e.html(""), t("<span class='front'>" + i + "</span>").appendTo(e), t("<span class='back'>" + n[o + 1] + "</span>").appendTo(e), e.wrapInner("<span class='rotating' />").find(".rotating").hide().addClass("flip").show().css({
                            "-webkit-transform": " rotateY(-180deg)",
                            "-moz-transform": " rotateY(-180deg)",
                            "-o-transform": " rotateY(-180deg)",
                            transform: " rotateY(-180deg)"
                        });
                        break;
                    case "flipUp":
                        e.find(".back").length > 0 && e.html(e.find(".back").html());
                        var i = e.text(),
                            o = t.inArray(i, n);
                        o + 1 == n.length && (o = -1), e.html(""), t("<span class='front'>" + i + "</span>").appendTo(e), t("<span class='back'>" + n[o + 1] + "</span>").appendTo(e), e.wrapInner("<span class='rotating' />").find(".rotating").hide().addClass("flip up").show().css({
                            "-webkit-transform": " rotateX(-180deg)",
                            "-moz-transform": " rotateX(-180deg)",
                            "-o-transform": " rotateX(-180deg)",
                            transform: " rotateX(-180deg)"
                        });
                        break;
                    case "flipCube":
                        e.find(".back").length > 0 && e.html(e.find(".back").html());
                        var i = e.text(),
                            o = t.inArray(i, n);
                        o + 1 == n.length && (o = -1), e.html(""), t("<span class='front'>" + i + "</span>").appendTo(e), t("<span class='back'>" + n[o + 1] + "</span>").appendTo(e), e.wrapInner("<span class='rotating' />").find(".rotating").hide().addClass("flip cube").show().css({
                            "-webkit-transform": " rotateY(180deg)",
                            "-moz-transform": " rotateY(180deg)",
                            "-o-transform": " rotateY(180deg)",
                            transform: " rotateY(180deg)"
                        });
                        break;
                    case "flipCubeUp":
                        e.find(".back").length > 0 && e.html(e.find(".back").html());
                        var i = e.text(),
                            o = t.inArray(i, n);
                        o + 1 == n.length && (o = -1), e.html(""), t("<span class='front'>" + i + "</span>").appendTo(e), t("<span class='back'>" + n[o + 1] + "</span>").appendTo(e), e.wrapInner("<span class='rotating' />").find(".rotating").hide().addClass("flip cube up").show().css({
                            "-webkit-transform": " rotateX(180deg)",
                            "-moz-transform": " rotateX(180deg)",
                            "-o-transform": " rotateX(180deg)",
                            transform: " rotateX(180deg)"
                        });
                        break;
                    case "spin":
                        e.find(".rotating").length > 0 && e.html(e.find(".rotating").html()), o = t.inArray(e.text(), n), o + 1 == n.length && (o = -1), e.wrapInner("<span class='rotating spin' />").find(".rotating").hide().text(n[o + 1]).show().css({
                            "-webkit-transform": " rotate(0) scale(1)",
                            "-moz-transform": "rotate(0) scale(1)",
                            "-o-transform": "rotate(0) scale(1)",
                            transform: "rotate(0) scale(1)"
                        });
                        break;
                    case "fade":
                        e.fadeOut(r.speed, function () {
                            o = t.inArray(e.text(), n), o + 1 == n.length && (o = -1), e.text(n[o + 1]).fadeIn(r.speed)
                        })
                    }
                };
                setInterval(i, r.interval)
            })
        }
    }(window.jQuery),
    function (t) {
        function e(t, e) {
            return t.toFixed(e.decimals)
        }
        t.fn.countTo = function (e) {
            return e = e || {}, t(this).each(function () {
                function n() {
                    c += a, u++, r(c), "function" == typeof i.onUpdate && i.onUpdate.call(s, c), u >= o && (l.removeData("countTo"), clearInterval(f.interval), c = i.to, "function" == typeof i.onComplete && i.onComplete.call(s, c))
                }

                function r(t) {
                    var e = i.formatter.call(s, t, i);
                    l.text(e)
                }
                var i = t.extend({}, t.fn.countTo.defaults, {
                        from: t(this).data("from"),
                        to: t(this).data("to"),
                        speed: t(this).data("speed"),
                        refreshInterval: t(this).data("refresh-interval"),
                        decimals: t(this).data("decimals")
                    }, e),
                    o = Math.ceil(i.speed / i.refreshInterval),
                    a = (i.to - i.from) / o,
                    s = this,
                    l = t(this),
                    u = 0,
                    c = i.from,
                    f = l.data("countTo") || {};
                l.data("countTo", f), f.interval && clearInterval(f.interval), f.interval = setInterval(n, i.refreshInterval), r(c)
            })
        }, t.fn.countTo.defaults = {
            from: 0,
            to: 0,
            speed: 1e3,
            refreshInterval: 100,
            decimals: 0,
            formatter: e,
            onUpdate: null,
            onComplete: null
        }
    }(jQuery),
    function (t, e, n) {
        "use strict";

        function r(n) {
            if (i = e.documentElement, o = e.body, G(), ae = this, n = n || {}, fe = n.constants || {}, n.easing)
                for (var r in n.easing) X[r] = n.easing[r];
            ye = n.edgeStrategy || "set", ue = {
                beforerender: n.beforerender,
                render: n.render
            }, ce = n.forceHeight !== !1, ce && (Ne = n.scale || 1), pe = n.mobileDeceleration || k, de = n.smoothScrolling !== !1, ge = n.smoothScrollingDuration || T, me = {
                targetTop: ae.getScrollTop()
            }, Re = (n.mobileCheck || function () {
                return /Android|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent || navigator.vendor || t.opera)
            })(), Re ? (le = e.getElementById("skrollr-body"), le && oe(), V(), Ee(i, [y, x], [F])) : Ee(i, [y, b], [F]), ae.refresh(), xe(t, "resize orientationchange", function () {
                var t = i.clientWidth,
                    e = i.clientHeight;
                (e !== Me || t !== qe) && (Me = e, qe = t, ze = !0)
            });
            var a = W();
            return function s() {
                K(), be = a(s)
            }(), ae
        }
        var i, o, a = t.skrollr = {
                get: function () {
                    return ae
                },
                init: function (t) {
                    return ae || new r(t)
                },
                VERSION: "0.6.21"
            },
            s = Object.prototype.hasOwnProperty,
            l = t.Math,
            u = t.getComputedStyle,
            c = "touchstart",
            f = "touchmove",
            p = "touchcancel",
            h = "touchend",
            d = "skrollable",
            g = d + "-before",
            m = d + "-between",
            v = d + "-after",
            y = "skrollr",
            F = "no-" + y,
            b = y + "-desktop",
            x = y + "-mobile",
            w = "linear",
            C = 1e3,
            k = .004,
            T = 200,
            _ = "start",
            A = "end",
            E = "center",
            B = "bottom",
            S = "___skrollable_id",
            j = /^(?:input|textarea|button|select)$/i,
            D = /^\s+|\s+$/g,
            $ = /^data(?:-(_\w+))?(?:-?(-?\d*\.?\d+p?))?(?:-?(start|end|top|center|bottom))?(?:-?(top|center|bottom))?$/,
            N = /\s*([\w\-\[\]]+)\s*:\s*(.+?)\s*(?:;|$)/gi,
            L = /^([a-z\-]+)\[(\w+)\]$/,
            P = /-([a-z])/g,
            O = function (t, e) {
                return e.toUpperCase()
            },
            q = /[\-+]?[\d]*\.?[\d]+/g,
            M = /\{\?\}/g,
            z = /rgba?\(\s*-?\d+\s*,\s*-?\d+\s*,\s*-?\d+/g,
            I = /[a-z\-]+-gradient/g,
            R = "",
            H = "",
            G = function () {
                var t = /^(?:O|Moz|webkit|ms)|(?:-(?:o|moz|webkit|ms)-)/;
                if (u) {
                    var e = u(o, null);
                    for (var r in e)
                        if (R = r.match(t) || +r == r && e[r].match(t)) break;
                    if (!R) return R = H = "", n;
                    R = R[0], "-" === R.slice(0, 1) ? (H = R, R = {
                        "-webkit-": "webkit",
                        "-moz-": "Moz",
                        "-ms-": "ms",
                        "-o-": "O"
                    }[R]) : H = "-" + R.toLowerCase() + "-"
                }
            },
            W = function () {
                var e = t.requestAnimationFrame || t[R.toLowerCase() + "RequestAnimationFrame"],
                    n = je();
                return (Re || !e) && (e = function (e) {
                    var r = je() - n,
                        i = l.max(0, 1e3 / 60 - r);
                    return t.setTimeout(function () {
                        n = je(), e()
                    }, i)
                }), e
            },
            U = function () {
                var e = t.cancelAnimationFrame || t[R.toLowerCase() + "CancelAnimationFrame"];
                return (Re || !e) && (e = function (e) {
                    return t.clearTimeout(e)
                }), e
            },
            X = {
                begin: function () {
                    return 0
                },
                end: function () {
                    return 1
                },
                linear: function (t) {
                    return t
                },
                quadratic: function (t) {
                    return t * t
                },
                cubic: function (t) {
                    return t * t * t
                },
                swing: function (t) {
                    return -l.cos(t * l.PI) / 2 + .5
                },
                sqrt: function (t) {
                    return l.sqrt(t)
                },
                outCubic: function (t) {
                    return l.pow(t - 1, 3) + 1
                },
                bounce: function (t) {
                    var e;
                    if (.5083 >= t) e = 3;
                    else if (.8489 >= t) e = 9;
                    else if (.96208 >= t) e = 27;
                    else {
                        if (!(.99981 >= t)) return 1;
                        e = 91
                    }
                    return 1 - l.abs(3 * l.cos(1.028 * t * e) / e)
                }
            };
        r.prototype.refresh = function (t) {
            var r, i, o = !1;
            for (t === n ? (o = !0, se = [], Ie = 0, t = e.getElementsByTagName("*")) : t = [].concat(t), r = 0, i = t.length; i > r; r++) {
                var a = t[r],
                    s = a,
                    l = [],
                    u = de,
                    c = ye;
                if (a.attributes) {
                    for (var f = 0, p = a.attributes.length; p > f; f++) {
                        var h = a.attributes[f];
                        if ("data-anchor-target" !== h.name)
                            if ("data-smooth-scrolling" !== h.name)
                                if ("data-edge-strategy" !== h.name) {
                                    var g = h.name.match($);
                                    if (null !== g) {
                                        var m = {
                                            props: h.value,
                                            element: a
                                        };
                                        l.push(m);
                                        var v = g[1];
                                        v && (m.constant = v.substr(1));
                                        var y = g[2];
                                        /p$/.test(y) ? (m.isPercentage = !0, m.offset = (0 | y.slice(0, -1)) / 100) : m.offset = 0 | y;
                                        var F = g[3],
                                            b = g[4] || F;
                                        F && F !== _ && F !== A ? (m.mode = "relative", m.anchors = [F, b]) : (m.mode = "absolute", F === A ? m.isEnd = !0 : m.isPercentage || (m.offset = m.offset * Ne))
                                    }
                                } else c = h.value;
                        else u = "off" !== h.value;
                        else if (s = e.querySelector(h.value), null === s) throw 'Unable to find anchor target "' + h.value + '"'
                    }
                    if (l.length) {
                        var x, w, C;
                        !o && S in a ? (C = a[S], x = se[C].styleAttr, w = se[C].classAttr) : (C = a[S] = Ie++, x = a.style.cssText, w = Ae(a)), se[C] = {
                            element: a,
                            styleAttr: x,
                            classAttr: w,
                            anchorTarget: s,
                            keyFrames: l,
                            smoothScrolling: u,
                            edgeStrategy: c
                        }, Ee(a, [d], [])
                    }
                }
            }
            for (ke(), r = 0, i = t.length; i > r; r++) {
                var k = se[t[r][S]];
                k !== n && (J(k), te(k))
            }
            return ae
        }, r.prototype.relativeToAbsolute = function (t, e, n) {
            var r = i.clientHeight,
                o = t.getBoundingClientRect(),
                a = o.top,
                s = o.bottom - o.top;
            return e === B ? a -= r : e === E && (a -= r / 2), n === B ? a += s : n === E && (a += s / 2), a += ae.getScrollTop(), 0 | a + .5
        }, r.prototype.animateTo = function (t, e) {
            e = e || {};
            var r = je(),
                i = ae.getScrollTop();
            return he = {
                startTop: i,
                topDiff: t - i,
                targetTop: t,
                duration: e.duration || C,
                startTime: r,
                endTime: r + (e.duration || C),
                easing: X[e.easing || w],
                done: e.done
            }, he.topDiff || (he.done && he.done.call(ae, !1), he = n), ae
        }, r.prototype.stopAnimateTo = function () {
            he && he.done && he.done.call(ae, !0), he = n
        }, r.prototype.isAnimatingTo = function () {
            return !!he
        }, r.prototype.setScrollTop = function (e, n) {
            return ve = n === !0, Re ? He = l.min(l.max(e, 0), $e) : t.scrollTo(0, e), ae
        }, r.prototype.getScrollTop = function () {
            return Re ? He : t.pageYOffset || i.scrollTop || o.scrollTop || 0
        }, r.prototype.getMaxScrollTop = function () {
            return $e
        }, r.prototype.on = function (t, e) {
            return ue[t] = e, ae
        }, r.prototype.off = function (t) {
            return delete ue[t], ae
        }, r.prototype.destroy = function () {
            var t = U();
            t(be), Ce(), Ee(i, [F], [y, b, x]);
            for (var e = 0, r = se.length; r > e; e++) ie(se[e].element);
            i.style.overflow = o.style.overflow = "auto", i.style.height = o.style.height = "auto", le && a.setStyle(le, "transform", "none"), ae = n, le = n, ue = n, ce = n, $e = 0, Ne = 1, fe = n, pe = n, Le = "down", Pe = -1, qe = 0, Me = 0, ze = !1, he = n, de = n, ge = n, me = n, ve = n, Ie = 0, ye = n, Re = !1, He = 0, Fe = n
        };
        var V = function () {
                var r, a, s, u, d, g, m, v, y, F, b, x;
                xe(i, [c, f, p, h].join(" "), function (t) {
                    var i = t.changedTouches[0];
                    for (u = t.target; 3 === u.nodeType;) u = u.parentNode;
                    switch (d = i.clientY, g = i.clientX, F = t.timeStamp, j.test(u.tagName) || t.preventDefault(), t.type) {
                    case c:
                        r && r.blur(), ae.stopAnimateTo(), r = u, a = m = d, s = g, y = F;
                        break;
                    case f:
                        j.test(u.tagName) && e.activeElement !== u && t.preventDefault(), v = d - m, x = F - b, ae.setScrollTop(He - v, !0), m = d, b = F;
                        break;
                    default:
                    case p:
                    case h:
                        var o = a - d,
                            w = s - g,
                            C = w * w + o * o;
                        if (49 > C) {
                            if (!j.test(r.tagName)) {
                                r.focus();
                                var k = e.createEvent("MouseEvents");
                                k.initMouseEvent("click", !0, !0, t.view, 1, i.screenX, i.screenY, i.clientX, i.clientY, t.ctrlKey, t.altKey, t.shiftKey, t.metaKey, 0, null), r.dispatchEvent(k)
                            }
                            return
                        }
                        r = n;
                        var T = v / x;
                        T = l.max(l.min(T, 3), -3);
                        var _ = l.abs(T / pe),
                            A = T * _ + .5 * pe * _ * _,
                            E = ae.getScrollTop() - A,
                            B = 0;
                        E > $e ? (B = ($e - E) / A, E = $e) : 0 > E && (B = -E / A, E = 0), _ *= 1 - B, ae.animateTo(0 | E + .5, {
                            easing: "outCubic",
                            duration: _
                        })
                    }
                }), t.scrollTo(0, 0), i.style.overflow = o.style.overflow = "hidden"
            },
            Y = function () {
                var t, e, n, r, o, a, s, u, c, f, p, h = i.clientHeight,
                    d = Te();
                for (u = 0, c = se.length; c > u; u++)
                    for (t = se[u], e = t.element, n = t.anchorTarget, r = t.keyFrames, o = 0, a = r.length; a > o; o++) s = r[o], f = s.offset, p = d[s.constant] || 0, s.frame = f, s.isPercentage && (f *= h, s.frame = f), "relative" === s.mode && (ie(e), s.frame = ae.relativeToAbsolute(n, s.anchors[0], s.anchors[1]) - f, ie(e, !0)), s.frame += p, ce && !s.isEnd && s.frame > $e && ($e = s.frame);
                for ($e = l.max($e, _e()), u = 0, c = se.length; c > u; u++) {
                    for (t = se[u], r = t.keyFrames, o = 0, a = r.length; a > o; o++) s = r[o], p = d[s.constant] || 0, s.isEnd && (s.frame = $e - s.offset + p);
                    t.keyFrames.sort(De)
                }
            },
            Q = function (t, e) {
                for (var n = 0, r = se.length; r > n; n++) {
                    var i, o, l = se[n],
                        u = l.element,
                        c = l.smoothScrolling ? t : e,
                        f = l.keyFrames,
                        p = f[0].frame,
                        h = f[f.length - 1].frame,
                        y = p > c,
                        F = c > h,
                        b = f[y ? 0 : f.length - 1];
                    if (y || F) {
                        if (y && -1 === l.edge || F && 1 === l.edge) continue;
                        switch (Ee(u, [y ? g : v], [g, m, v]), l.edge = y ? -1 : 1, l.edgeStrategy) {
                        case "reset":
                            ie(u);
                            continue;
                        case "ease":
                            c = b.frame;
                            break;
                        default:
                        case "set":
                            var x = b.props;
                            for (i in x) s.call(x, i) && (o = re(x[i].value), a.setStyle(u, i, o));
                            continue
                        }
                    } else 0 !== l.edge && (Ee(u, [d, m], [g, v]), l.edge = 0);
                    for (var w = 0, C = f.length - 1; C > w; w++)
                        if (c >= f[w].frame && f[w + 1].frame >= c) {
                            var k = f[w],
                                T = f[w + 1];
                            for (i in k.props)
                                if (s.call(k.props, i)) {
                                    var _ = (c - k.frame) / (T.frame - k.frame);
                                    _ = k.props[i].easing(_), o = ne(k.props[i].value, T.props[i].value, _), o = re(o), a.setStyle(u, i, o)
                                }
                            break
                        }
                }
            },
            K = function () {
                ze && (ze = !1, ke());
                var t, e, r = ae.getScrollTop(),
                    i = je();
                if (he) i >= he.endTime ? (r = he.targetTop, t = he.done, he = n) : (e = he.easing((i - he.startTime) / he.duration), r = 0 | he.startTop + e * he.topDiff), ae.setScrollTop(r, !0);
                else if (!ve) {
                    var o = me.targetTop - r;
                    o && (me = {
                        startTop: Pe,
                        topDiff: r - Pe,
                        targetTop: r,
                        startTime: Oe,
                        endTime: Oe + ge
                    }), me.endTime >= i && (e = X.sqrt((i - me.startTime) / ge), r = 0 | me.startTop + e * me.topDiff)
                }
                if (Re && le && a.setStyle(le, "transform", "translate(0, " + -He + "px) " + Fe), ve || Pe !== r) {
                    Le = r > Pe ? "down" : Pe > r ? "up" : Le, ve = !1;
                    var s = {
                            curTop: r,
                            lastTop: Pe,
                            maxTop: $e,
                            direction: Le
                        },
                        l = ue.beforerender && ue.beforerender.call(ae, s);
                    l !== !1 && (Q(r, ae.getScrollTop()), Pe = r, ue.render && ue.render.call(ae, s)), t && t.call(ae, !1)
                }
                Oe = i
            },
            J = function (t) {
                for (var e = 0, n = t.keyFrames.length; n > e; e++) {
                    for (var r, i, o, a, s = t.keyFrames[e], l = {}; null !== (a = N.exec(s.props));) o = a[1], i = a[2], r = o.match(L), null !== r ? (o = r[1], r = r[2]) : r = w, i = i.indexOf("!") ? Z(i) : [i.slice(1)], l[o] = {
                        value: i,
                        easing: X[r]
                    };
                    s.props = l
                }
            },
            Z = function (t) {
                var e = [];
                return z.lastIndex = 0, t = t.replace(z, function (t) {
                    return t.replace(q, function (t) {
                        return 100 * (t / 255) + "%"
                    })
                }), H && (I.lastIndex = 0, t = t.replace(I, function (t) {
                    return H + t
                })), t = t.replace(q, function (t) {
                    return e.push(+t), "{?}"
                }), e.unshift(t), e
            },
            te = function (t) {
                var e, n, r = {};
                for (e = 0, n = t.keyFrames.length; n > e; e++) ee(t.keyFrames[e], r);
                for (r = {}, e = t.keyFrames.length - 1; e >= 0; e--) ee(t.keyFrames[e], r)
            },
            ee = function (t, e) {
                var n;
                for (n in e) s.call(t.props, n) || (t.props[n] = e[n]);
                for (n in t.props) e[n] = t.props[n]
            },
            ne = function (t, e, n) {
                var r, i = t.length;
                if (i !== e.length) throw "Can't interpolate between \"" + t[0] + '" and "' + e[0] + '"';
                var o = [t[0]];
                for (r = 1; i > r; r++) o[r] = t[r] + (e[r] - t[r]) * n;
                return o
            },
            re = function (t) {
                var e = 1;
                return M.lastIndex = 0, t[0].replace(M, function () {
                    return t[e++]
                })
            },
            ie = function (t, e) {
                t = [].concat(t);
                for (var n, r, i = 0, o = t.length; o > i; i++) r = t[i], n = se[r[S]], n && (e ? (r.style.cssText = n.dirtyStyleAttr, Ee(r, n.dirtyClassAttr)) : (n.dirtyStyleAttr = r.style.cssText, n.dirtyClassAttr = Ae(r), r.style.cssText = n.styleAttr, Ee(r, n.classAttr)))
            },
            oe = function () {
                Fe = "translateZ(0)", a.setStyle(le, "transform", Fe);
                var t = u(le),
                    e = t.getPropertyValue("transform"),
                    n = t.getPropertyValue(H + "transform"),
                    r = e && "none" !== e || n && "none" !== n;
                r || (Fe = "")
            };
        a.setStyle = function (t, e, n) {
            var r = t.style;
            if (e = e.replace(P, O).replace("-", ""), "zIndex" === e) r[e] = isNaN(n) ? n : "" + (0 | n);
            else if ("float" === e) r.styleFloat = r.cssFloat = n;
            else try {
                R && (r[R + e.slice(0, 1).toUpperCase() + e.slice(1)] = n), r[e] = n
            } catch (i) {}
        };
        var ae, se, le, ue, ce, fe, pe, he, de, ge, me, ve, ye, Fe, be, xe = a.addEvent = function (e, n, r) {
                var i = function (e) {
                    return e = e || t.event, e.target || (e.target = e.srcElement), e.preventDefault || (e.preventDefault = function () {
                        e.returnValue = !1
                    }), r.call(this, e)
                };
                n = n.split(" ");
                for (var o, a = 0, s = n.length; s > a; a++) o = n[a], e.addEventListener ? e.addEventListener(o, r, !1) : e.attachEvent("on" + o, i), Ge.push({
                    element: e,
                    name: o,
                    listener: r
                })
            },
            we = a.removeEvent = function (t, e, n) {
                e = e.split(" ");
                for (var r = 0, i = e.length; i > r; r++) t.removeEventListener ? t.removeEventListener(e[r], n, !1) : t.detachEvent("on" + e[r], n)
            },
            Ce = function () {
                for (var t, e = 0, n = Ge.length; n > e; e++) t = Ge[e], we(t.element, t.name, t.listener);
                Ge = []
            },
            ke = function () {
                var t = ae.getScrollTop();
                $e = 0, ce && !Re && (o.style.height = "auto"), Y(), ce && !Re && (o.style.height = $e + i.clientHeight + "px"), Re ? ae.setScrollTop(l.min(ae.getScrollTop(), $e)) : ae.setScrollTop(t, !0), ve = !0
            },
            Te = function () {
                var t, e, n = i.clientHeight,
                    r = {};
                for (t in fe) e = fe[t], "function" == typeof e ? e = e.call(ae) : /p$/.test(e) && (e = e.slice(0, -1) / 100 * n), r[t] = e;
                return r
            },
            _e = function () {
                var t = le && le.offsetHeight || 0,
                    e = l.max(t, o.scrollHeight, o.offsetHeight, i.scrollHeight, i.offsetHeight, i.clientHeight);
                return e - i.clientHeight
            },
            Ae = function (e) {
                var n = "className";
                return t.SVGElement && e instanceof t.SVGElement && (e = e[n], n = "baseVal"), e[n]
            },
            Ee = function (e, r, i) {
                var o = "className";
                if (t.SVGElement && e instanceof t.SVGElement && (e = e[o], o = "baseVal"), i === n) return e[o] = r, n;
                for (var a = e[o], s = 0, l = i.length; l > s; s++) a = Se(a).replace(Se(i[s]), " ");
                a = Be(a);
                for (var u = 0, c = r.length; c > u; u++) - 1 === Se(a).indexOf(Se(r[u])) && (a += " " + r[u]);
                e[o] = Be(a)
            },
            Be = function (t) {
                return t.replace(D, "")
            },
            Se = function (t) {
                return " " + t + " "
            },
            je = Date.now || function () {
                return +new Date
            },
            De = function (t, e) {
                return t.frame - e.frame
            },
            $e = 0,
            Ne = 1,
            Le = "down",
            Pe = -1,
            Oe = je(),
            qe = 0,
            Me = 0,
            ze = !1,
            Ie = 0,
            Re = !1,
            He = 0,
            Ge = []
    }(window, document),
    function (t) {
        var e, n, r = "0.4.2",
            i = "hasOwnProperty",
            o = /[\.\/]/,
            a = "*",
            s = function () {},
            l = function (t, e) {
                return t - e
            },
            u = {
                n: {}
            },
            c = function (t, r) {
                t = String(t);
                var i, o = n,
                    a = Array.prototype.slice.call(arguments, 2),
                    s = c.listeners(t),
                    u = 0,
                    f = [],
                    p = {},
                    h = [],
                    d = e;
                e = t, n = 0;
                for (var g = 0, m = s.length; m > g; g++) "zIndex" in s[g] && (f.push(s[g].zIndex), s[g].zIndex < 0 && (p[s[g].zIndex] = s[g]));
                for (f.sort(l); f[u] < 0;)
                    if (i = p[f[u++]], h.push(i.apply(r, a)), n) return n = o, h;
                for (g = 0; m > g; g++)
                    if (i = s[g], "zIndex" in i)
                        if (i.zIndex == f[u]) {
                            if (h.push(i.apply(r, a)), n) break;
                            do
                                if (u++, i = p[f[u]], i && h.push(i.apply(r, a)), n) break;
                            while (i)
                        } else p[i.zIndex] = i;
                else if (h.push(i.apply(r, a)), n) break;
                return n = o, e = d, h.length ? h : null
            };
        c._events = u, c.listeners = function (t) {
            var e, n, r, i, s, l, c, f, p = t.split(o),
                h = u,
                d = [h],
                g = [];
            for (i = 0, s = p.length; s > i; i++) {
                for (f = [], l = 0, c = d.length; c > l; l++)
                    for (h = d[l].n, n = [h[p[i]], h[a]], r = 2; r--;) e = n[r], e && (f.push(e), g = g.concat(e.f || []));
                d = f
            }
            return g
        }, c.on = function (t, e) {
            if (t = String(t), "function" != typeof e) return function () {};
            for (var n = t.split(o), r = u, i = 0, a = n.length; a > i; i++) r = r.n, r = r.hasOwnProperty(n[i]) && r[n[i]] || (r[n[i]] = {
                n: {}
            });
            for (r.f = r.f || [], i = 0, a = r.f.length; a > i; i++)
                if (r.f[i] == e) return s;
            return r.f.push(e),
                function (t) {
                    +t == +t && (e.zIndex = +t)
                }
        }, c.f = function (t) {
            var e = [].slice.call(arguments, 1);
            return function () {
                c.apply(null, [t, null].concat(e).concat([].slice.call(arguments, 0)))
            }
        }, c.stop = function () {
            n = 1
        }, c.nt = function (t) {
            return t ? new RegExp("(?:\\.|\\/|^)" + t + "(?:\\.|\\/|$)").test(e) : e
        }, c.nts = function () {
            return e.split(o)
        }, c.off = c.unbind = function (t, e) {
            if (!t) return void(c._events = u = {
                n: {}
            });
            var n, r, s, l, f, p, h, d = t.split(o),
                g = [u];
            for (l = 0, f = d.length; f > l; l++)
                for (p = 0; p < g.length; p += s.length - 2) {
                    if (s = [p, 1], n = g[p].n, d[l] != a) n[d[l]] && s.push(n[d[l]]);
                    else
                        for (r in n) n[i](r) && s.push(n[r]);
                    g.splice.apply(g, s)
                }
            for (l = 0, f = g.length; f > l; l++)
                for (n = g[l]; n.n;) {
                    if (e) {
                        if (n.f) {
                            for (p = 0, h = n.f.length; h > p; p++)
                                if (n.f[p] == e) {
                                    n.f.splice(p, 1);
                                    break
                                }!n.f.length && delete n.f
                        }
                        for (r in n.n)
                            if (n.n[i](r) && n.n[r].f) {
                                var m = n.n[r].f;
                                for (p = 0, h = m.length; h > p; p++)
                                    if (m[p] == e) {
                                        m.splice(p, 1);
                                        break
                                    }!m.length && delete n.n[r].f
                            }
                    } else {
                        delete n.f;
                        for (r in n.n) n.n[i](r) && n.n[r].f && delete n.n[r].f
                    }
                    n = n.n
                }
        }, c.once = function (t, e) {
            var n = function () {
                return c.unbind(t, n), e.apply(this, arguments)
            };
            return c.on(t, n)
        }, c.version = r, c.toString = function () {
            return "You are running Eve " + r
        }, "undefined" != typeof module && module.exports ? module.exports = c : "undefined" != typeof define ? define("eve", [], function () {
            return c
        }) : t.eve = c
    }(this),
    function (t, e) {
        "function" == typeof define && define.amd ? define(["eve"], function (n) {
            return e(t, n)
        }) : e(t, t.eve)
    }(this, function (t, e) {
        var n = function (e) {
                var n = {},
                    r = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || t.msRequestAnimationFrame || function (t) {
                        setTimeout(t, 16)
                    },
                    i = Array.isArray || function (t) {
                        return t instanceof Array || "[object Array]" == Object.prototype.toString.call(t)
                    },
                    o = 0,
                    a = "M" + (+new Date).toString(36),
                    s = function () {
                        return a + (o++).toString(36)
                    },
                    l = Date.now || function () {
                        return +new Date
                    },
                    u = function (t) {
                        var e = this;
                        if (null == t) return e.s;
                        var n = e.s - t;
                        e.b += e.dur * n, e.B += e.dur * n, e.s = t
                    },
                    c = function (t) {
                        var e = this;
                        return null == t ? e.spd : void(e.spd = t)
                    },
                    f = function (t) {
                        var e = this;
                        return null == t ? e.dur : (e.s = e.s * t / e.dur, void(e.dur = t))
                    },
                    p = function () {
                        var t = this;
                        delete n[t.id], e("mina.stop." + t.id, t)
                    },
                    h = function () {
                        var t = this;
                        t.pdif || (delete n[t.id], t.pdif = t.get() - t.b)
                    },
                    d = function () {
                        var t = this;
                        t.pdif && (t.b = t.get() - t.pdif, delete t.pdif, n[t.id] = t)
                    },
                    g = function () {
                        var t = 0;
                        for (var o in n)
                            if (n.hasOwnProperty(o)) {
                                var a, s = n[o],
                                    l = s.get();
                                if (t++, s.s = (l - s.b) / (s.dur / s.spd), s.s >= 1 && (delete n[o], s.s = 1, t--, function (t) {
                                    setTimeout(function () {
                                        e("mina.finish." + t.id, t)
                                    })
                                }(s)), i(s.start)) {
                                    a = [];
                                    for (var u = 0, c = s.start.length; c > u; u++) a[u] = +s.start[u] + (s.end[u] - s.start[u]) * s.easing(s.s)
                                } else a = +s.start + (s.end - s.start) * s.easing(s.s);
                                s.set(a)
                            }
                        t && r(g)
                    },
                    m = function (t, e, i, o, a, l, v) {
                        var y = {
                            id: s(),
                            start: t,
                            end: e,
                            b: i,
                            s: 0,
                            dur: o - i,
                            spd: 1,
                            get: a,
                            set: l,
                            easing: v || m.linear,
                            status: u,
                            speed: c,
                            duration: f,
                            stop: p,
                            pause: h,
                            resume: d
                        };
                        n[y.id] = y;
                        var F, b = 0;
                        for (F in n)
                            if (n.hasOwnProperty(F) && (b++, 2 == b)) break;
                        return 1 == b && r(g), y
                    };
                return m.time = l, m.getById = function (t) {
                    return n[t] || null
                }, m.linear = function (t) {
                    return t
                }, m.easeout = function (t) {
                    return Math.pow(t, 1.7)
                }, m.easein = function (t) {
                    return Math.pow(t, .48)
                }, m.easeinout = function (t) {
                    if (1 == t) return 1;
                    if (0 == t) return 0;
                    var e = .48 - t / 1.04,
                        n = Math.sqrt(.1734 + e * e),
                        r = n - e,
                        i = Math.pow(Math.abs(r), 1 / 3) * (0 > r ? -1 : 1),
                        o = -n - e,
                        a = Math.pow(Math.abs(o), 1 / 3) * (0 > o ? -1 : 1),
                        s = i + a + .5;
                    return 3 * (1 - s) * s * s + s * s * s
                }, m.backin = function (t) {
                    if (1 == t) return 1;
                    var e = 1.70158;
                    return t * t * ((e + 1) * t - e)
                }, m.backout = function (t) {
                    if (0 == t) return 0;
                    t -= 1;
                    var e = 1.70158;
                    return t * t * ((e + 1) * t + e) + 1
                }, m.elastic = function (t) {
                    return t == !!t ? t : Math.pow(2, -10 * t) * Math.sin(2 * (t - .075) * Math.PI / .3) + 1
                }, m.bounce = function (t) {
                    var e, n = 7.5625,
                        r = 2.75;
                    return 1 / r > t ? e = n * t * t : 2 / r > t ? (t -= 1.5 / r, e = n * t * t + .75) : 2.5 / r > t ? (t -= 2.25 / r, e = n * t * t + .9375) : (t -= 2.625 / r, e = n * t * t + .984375), e
                }, t.mina = m, m
            }("undefined" == typeof e ? function () {} : e),
            r = function () {
                function r(t, e) {
                    if (t) {
                        if (t.tagName) return T(t);
                        if (t instanceof b) return t;
                        if (null == e) return t = N.doc.querySelector(t), T(t)
                    }
                    return t = null == t ? "100%" : t, e = null == e ? "100%" : e, new k(t, e)
                }

                function i(t, e) {
                    if (e) {
                        if ("string" == typeof t && (t = i(t)), "string" == typeof e) return "xlink:" == e.substring(0, 6) ? t.getAttributeNS(oe, e.substring(6)) : "xml:" == e.substring(0, 4) ? t.getAttributeNS(ae, e.substring(4)) : t.getAttribute(e);
                        for (var n in e)
                            if (e[L](n)) {
                                var r = P(e[n]);
                                r ? "xlink:" == n.substring(0, 6) ? t.setAttributeNS(oe, n.substring(6), r) : "xml:" == n.substring(0, 4) ? t.setAttributeNS(ae, n.substring(4), r) : t.setAttribute(n, r) : t.removeAttribute(n)
                            }
                    } else t = N.doc.createElementNS(ae, t);
                    return t
                }

                function o(t, e) {
                    return e = P.prototype.toLowerCase.call(e), "finite" == e ? isFinite(t) : "array" == e && (t instanceof Array || Array.isArray && Array.isArray(t)) ? !0 : "null" == e && null === t || e == typeof t && null !== t || "object" == e && t === Object(t) || U.call(t).slice(8, -1).toLowerCase() == e
                }

                function a(t) {
                    if ("function" == typeof t || Object(t) !== t) return t;
                    var e = new t.constructor;
                    for (var n in t) t[L](n) && (e[n] = a(t[n]));
                    return e
                }

                function s(t, e) {
                    for (var n = 0, r = t.length; r > n; n++)
                        if (t[n] === e) return t.push(t.splice(n, 1)[0])
                }

                function l(t, e, n) {
                    function r() {
                        var i = Array.prototype.slice.call(arguments, 0),
                            o = i.join("\u2400"),
                            a = r.cache = r.cache || {},
                            l = r.count = r.count || [];
                        return a[L](o) ? (s(l, o), n ? n(a[o]) : a[o]) : (l.length >= 1e3 && delete a[l.shift()], l.push(o), a[o] = t.apply(e, i), n ? n(a[o]) : a[o])
                    }
                    return r
                }

                function u(t, e, n, r, i, o) {
                    if (null == i) {
                        var a = t - n,
                            s = e - r;
                        return a || s ? (180 + 180 * M.atan2(-s, -a) / H + 360) % 360 : 0
                    }
                    return u(t, e, i, o) - u(n, r, i, o)
                }

                function c(t) {
                    return t % 360 * H / 180
                }

                function f(t) {
                    return 180 * t / H % 360
                }

                function p(t, e, n, r, i, o) {
                    return null == e && "[object SVGMatrix]" == U.call(t) ? (this.a = t.a, this.b = t.b, this.c = t.c, this.d = t.d, this.e = t.e, void(this.f = t.f)) : void(null != t ? (this.a = +t, this.b = +e, this.c = +n, this.d = +r, this.e = +i, this.f = +o) : (this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.e = 0, this.f = 0))
                }

                function h(t) {
                    var e = [];
                    return t = t.replace(/(?:^|\s)(\w+)\(([^)]+)\)/g, function (t, n, r) {
                        return r = r.split(/\s*,\s*|\s+/), "rotate" == n && 1 == r.length && r.push(0, 0), "scale" == n && (2 == r.length && r.push(0, 0), 1 == r.length && r.push(r[0], 0, 0)), e.push("skewX" == n ? ["m", 1, 0, M.tan(c(r[0])), 1, 0, 0] : "skewY" == n ? ["m", 1, M.tan(c(r[0])), 0, 1, 0, 0] : [n.charAt(0)].concat(r)), t
                    }), e
                }

                function d(t, e) {
                    var n = me(t),
                        r = new p;
                    if (n)
                        for (var i = 0, o = n.length; o > i; i++) {
                            var a, s, l, u, c, f = n[i],
                                h = f.length,
                                d = P(f[0]).toLowerCase(),
                                g = f[0] != d,
                                m = g ? r.invert() : 0;
                            "t" == d && 2 == h ? r.translate(f[1], 0) : "t" == d && 3 == h ? g ? (a = m.x(0, 0), s = m.y(0, 0), l = m.x(f[1], f[2]), u = m.y(f[1], f[2]), r.translate(l - a, u - s)) : r.translate(f[1], f[2]) : "r" == d ? 2 == h ? (c = c || e, r.rotate(f[1], c.x + c.width / 2, c.y + c.height / 2)) : 4 == h && (g ? (l = m.x(f[2], f[3]), u = m.y(f[2], f[3]), r.rotate(f[1], l, u)) : r.rotate(f[1], f[2], f[3])) : "s" == d ? 2 == h || 3 == h ? (c = c || e, r.scale(f[1], f[h - 1], c.x + c.width / 2, c.y + c.height / 2)) : 4 == h ? g ? (l = m.x(f[2], f[3]), u = m.y(f[2], f[3]), r.scale(f[1], f[1], l, u)) : r.scale(f[1], f[1], f[2], f[3]) : 5 == h && (g ? (l = m.x(f[3], f[4]), u = m.y(f[3], f[4]), r.scale(f[1], f[2], l, u)) : r.scale(f[1], f[2], f[3], f[4])) : "m" == d && 7 == h && r.add(f[1], f[2], f[3], f[4], f[5], f[6])
                        }
                    return r
                }

                function m(t, e) {
                    if (null == e) {
                        var n = !0;
                        if (e = t.node.getAttribute("linearGradient" == t.type || "radialGradient" == t.type ? "gradientTransform" : "pattern" == t.type ? "patternTransform" : "transform"), !e) return new p;
                        e = h(e)
                    } else e = r._.rgTransform.test(e) ? P(e).replace(/\.{3}|\u2026/g, t._.transform || G) : h(e), o(e, "array") && (e = r.path ? r.path.toString.call(e) : P(e)), t._.transform = e;
                    var i = d(e, t.getBBox(1));
                    return n ? i : void(t.matrix = i)
                }

                function v(t) {
                    var e = r._.someDefs;
                    if (e && ve(e.ownerDocument.documentElement, e)) return e;
                    var n = t.node.ownerSVGElement && T(t.node.ownerSVGElement) || t.node.parentNode && T(t.node.parentNode) || r.select("svg") || r(0, 0),
                        i = n.select("defs"),
                        o = null == i ? !1 : i.node;
                    return o || (o = C("defs", n.node).node), r._.someDefs = o, o
                }

                function y(t, e, n) {
                    function r(t) {
                        return null == t ? G : t == +t ? t : (i(u, {
                            width: t
                        }), u.getBBox().width)
                    }

                    function o(t) {
                        return null == t ? G : t == +t ? t : (i(u, {
                            height: t
                        }), u.getBBox().height)
                    }

                    function a(r, i) {
                        null == e ? l[r] = i(t.attr(r)) : r == e && (l = i(null == n ? t.attr(r) : n))
                    }
                    var s = v(t),
                        l = {},
                        u = s.querySelector(".svg---mgr");
                    switch (u || (u = i("rect"), i(u, {
                        width: 10,
                        height: 10,
                        "class": "svg---mgr"
                    }), s.appendChild(u)), t.type) {
                    case "rect":
                        a("rx", r), a("ry", o);
                    case "image":
                        a("width", r), a("height", o);
                    case "text":
                        a("x", r), a("y", o);
                        break;
                    case "circle":
                        a("cx", r), a("cy", o), a("r", r);
                        break;
                    case "ellipse":
                        a("cx", r), a("cy", o), a("rx", r), a("ry", o);
                        break;
                    case "line":
                        a("x1", r), a("x2", r), a("y1", o), a("y2", o);
                        break;
                    case "marker":
                        a("refX", r), a("markerWidth", r), a("refY", o), a("markerHeight", o);
                        break;
                    case "radialGradient":
                        a("fx", r), a("fy", o);
                        break;
                    case "tspan":
                        a("dx", r), a("dy", o);
                        break;
                    default:
                        a(e, r)
                    }
                    return l
                }

                function F(t) {
                    o(t, "array") || (t = Array.prototype.slice.call(arguments, 0));
                    for (var e = 0, n = 0, r = this.node; this[e];) delete this[e++];
                    for (e = 0; e < t.length; e++) "set" == t[e].type ? t[e].forEach(function (t) {
                        r.appendChild(t.node)
                    }) : r.appendChild(t[e].node);
                    var i = r.childNodes;
                    for (e = 0; e < i.length; e++) this[n++] = T(i[e]);
                    return this
                }

                function b(t) {
                    if (t.snap in se) return se[t.snap];
                    var e, n = this.id = ie();
                    try {
                        e = t.ownerSVGElement
                    } catch (r) {}
                    if (this.node = t, e && (this.paper = new k(e)), this.type = t.tagName, this.anims = {}, this._ = {
                        transform: []
                    }, t.snap = n, se[n] = this, "g" == this.type) {
                        this.add = F;
                        for (var i in k.prototype) k.prototype[L](i) && (this[i] = k.prototype[i])
                    }
                }

                function x(t) {
                    for (var e, n = 0, r = t.length; r > n; n++)
                        if (e = e || t[n]) return e
                }

                function w(t) {
                    this.node = t
                }

                function C(t, e) {
                    var n = i(t);
                    e.appendChild(n);
                    var r = T(n);
                    return r.type = t, r
                }

                function k(t, e) {
                    var n, r, o, a = k.prototype;
                    if (t && "svg" == t.tagName) {
                        if (t.snap in se) return se[t.snap];
                        n = new b(t), r = t.getElementsByTagName("desc")[0], o = t.getElementsByTagName("defs")[0], r || (r = i("desc"), r.appendChild(N.doc.createTextNode("Created with Snap")), n.node.appendChild(r)), o || (o = i("defs"), n.node.appendChild(o)), n.defs = o;
                        for (var s in a) a[L](s) && (n[s] = a[s]);
                        n.paper = n.root = n
                    } else n = C("svg", N.doc.body), i(n.node, {
                        height: e,
                        version: 1.1,
                        width: t,
                        xmlns: ae
                    });
                    return n
                }

                function T(t) {
                    return t ? t instanceof b || t instanceof w ? t : "svg" == t.tagName ? new k(t) : new b(t) : t
                }

                function _() {
                    return this.selectAll("stop")
                }

                function A(t, e) {
                    var n = i("stop"),
                        o = {
                            offset: +e + "%"
                        };
                    return t = r.color(t), o["stop-color"] = t.hex, t.opacity < 1 && (o["stop-opacity"] = t.opacity), i(n, o), this.node.appendChild(n), this
                }

                function E() {
                    if ("linearGradient" == this.type) {
                        var t = i(this.node, "x1") || 0,
                            e = i(this.node, "x2") || 1,
                            n = i(this.node, "y1") || 0,
                            o = i(this.node, "y2") || 0;
                        return r._.box(t, n, M.abs(e - t), M.abs(o - n))
                    }
                    var a = this.node.cx || .5,
                        s = this.node.cy || .5,
                        l = this.node.r || 0;
                    return r._.box(a - l, s - l, 2 * l, 2 * l)
                }

                function B(t, n) {
                    function r(t, e) {
                        for (var n = (e - u) / (t - c), r = c; t > r; r++) s[r].offset = +(+u + n * (r - c)).toFixed(2);
                        c = t, u = e
                    }
                    var o, a = x(e("snap.util.grad.parse", null, n));
                    if (!a) return null;
                    a.params.unshift(t), o = "l" == a.type.toLowerCase() ? S.apply(0, a.params) : j.apply(0, a.params), a.type != a.type.toLowerCase() && i(o.node, {
                        gradientUnits: "userSpaceOnUse"
                    });
                    var s = a.stops,
                        l = s.length,
                        u = 0,
                        c = 0;
                    l--;
                    for (var f = 0; l > f; f++) "offset" in s[f] && r(f, s[f].offset);
                    for (s[l].offset = s[l].offset || 100, r(l, s[l].offset), f = 0; l >= f; f++) {
                        var p = s[f];
                        o.addStop(p.color, p.offset)
                    }
                    return o
                }

                function S(t, e, n, r, o) {
                    var a = C("linearGradient", t);
                    return a.stops = _, a.addStop = A, a.getBBox = E, null != e && i(a.node, {
                        x1: e,
                        y1: n,
                        x2: r,
                        y2: o
                    }), a
                }

                function j(t, e, n, r, o, a) {
                    var s = C("radialGradient", t);
                    return s.stops = _, s.addStop = A, s.getBBox = E, null != e && i(s.node, {
                        cx: e,
                        cy: n,
                        r: r
                    }), null != o && null != a && i(s.node, {
                        fx: o,
                        fy: a
                    }), s
                }

                function D(t) {
                    return function (n) {
                        if (e.stop(), n instanceof w && 1 == n.node.childNodes.length && ("radialGradient" == n.node.firstChild.tagName || "linearGradient" == n.node.firstChild.tagName || "pattern" == n.node.firstChild.tagName) && (n = n.node.firstChild, v(this).appendChild(n), n = T(n)), n instanceof b)
                            if ("radialGradient" == n.type || "linearGradient" == n.type || "pattern" == n.type) {
                                n.node.id || i(n.node, {
                                    id: n.id
                                });
                                var o = le(n.node.id)
                            } else o = n.attr(t);
                        else if (o = r.color(n), o.error) {
                            var a = B(v(this), n);
                            a ? (a.node.id || i(a.node, {
                                id: a.id
                            }), o = le(a.node.id)) : o = n
                        } else o = P(o);
                        var s = {};
                        s[t] = o, i(this.node, s), this.node.style[t] = G
                    }
                }

                function $(t) {
                    for (var e = [], n = t.childNodes, r = 0, i = n.length; i > r; r++) {
                        var o = n[r];
                        3 == o.nodeType && e.push(o.nodeValue), "tspan" == o.tagName && e.push(1 == o.childNodes.length && 3 == o.firstChild.nodeType ? o.firstChild.nodeValue : $(o))
                    }
                    return e
                }
                r.version = "0.2.0", r.toString = function () {
                    return "Snap v" + this.version
                }, r._ = {};
                var N = {
                    win: t,
                    doc: t.document
                };
                r._.glob = N;
                var L = "hasOwnProperty",
                    P = String,
                    O = parseFloat,
                    q = parseInt,
                    M = Math,
                    z = M.max,
                    I = M.min,
                    R = M.abs,
                    H = (M.pow, M.PI),
                    G = (M.round, ""),
                    W = " ",
                    U = Object.prototype.toString,
                    X = /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\))\s*$/i,
                    V = /^url\(#?([^)]+)\)$/,
                    Y = "	\n\f\r \xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029",
                    Q = new RegExp("[," + Y + "]+"),
                    K = (new RegExp("[" + Y + "]", "g"), new RegExp("[" + Y + "]*,[" + Y + "]*")),
                    J = {
                        hs: 1,
                        rg: 1
                    },
                    Z = new RegExp("([a-z])[" + Y + ",]*((-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?[" + Y + "]*,?[" + Y + "]*)+)", "ig"),
                    te = new RegExp("([rstm])[" + Y + ",]*((-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?[" + Y + "]*,?[" + Y + "]*)+)", "ig"),
                    ee = new RegExp("(-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?)[" + Y + "]*,?[" + Y + "]*", "ig"),
                    ne = 0,
                    re = "S" + (+new Date).toString(36),
                    ie = function () {
                        return re + (ne++).toString(36)
                    },
                    oe = "http://www.w3.org/1999/xlink",
                    ae = "http://www.w3.org/2000/svg",
                    se = {},
                    le = r.url = function (t) {
                        return "url('#" + t + "')"
                    };
                r._.$ = i, r._.id = ie, r.format = function () {
                    var t = /\{([^\}]+)\}/g,
                        e = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g,
                        n = function (t, n, r) {
                            var i = r;
                            return n.replace(e, function (t, e, n, r, o) {
                                e = e || r, i && (e in i && (i = i[e]), "function" == typeof i && o && (i = i()))
                            }), i = (null == i || i == r ? t : i) + ""
                        };
                    return function (e, r) {
                        return P(e).replace(t, function (t, e) {
                            return n(t, e, r)
                        })
                    }
                }();
                var ue = function () {
                    function t() {
                        this.parentNode.removeChild(this)
                    }
                    return function (e, n) {
                        var r = N.doc.createElement("img"),
                            i = N.doc.body;
                        r.style.cssText = "position:absolute;left:-9999em;top:-9999em", r.onload = function () {
                            n.call(r), r.onload = r.onerror = null, i.removeChild(r)
                        }, r.onerror = t, i.appendChild(r), r.src = e
                    }
                }();
                r._.clone = a, r._.cacher = l, r.rad = c, r.deg = f, r.angle = u, r.is = o, r.snapTo = function (t, e, n) {
                        if (n = o(n, "finite") ? n : 10, o(t, "array")) {
                            for (var r = t.length; r--;)
                                if (R(t[r] - e) <= n) return t[r]
                        } else {
                            t = +t;
                            var i = e % t;
                            if (n > i) return e - i;
                            if (i > t - n) return e - i + t
                        }
                        return e
                    },
                    function (t) {
                        function e(t) {
                            return t[0] * t[0] + t[1] * t[1]
                        }

                        function n(t) {
                            var n = M.sqrt(e(t));
                            t[0] && (t[0] /= n), t[1] && (t[1] /= n)
                        }
                        t.add = function (t, e, n, r, i, o) {
                            var a, s, l, u, c = [
                                    [],
                                    [],
                                    []
                                ],
                                f = [
                                    [this.a, this.c, this.e],
                                    [this.b, this.d, this.f],
                                    [0, 0, 1]
                                ],
                                h = [
                                    [t, n, i],
                                    [e, r, o],
                                    [0, 0, 1]
                                ];
                            for (t && t instanceof p && (h = [
                                [t.a, t.c, t.e],
                                [t.b, t.d, t.f],
                                [0, 0, 1]
                            ]), a = 0; 3 > a; a++)
                                for (s = 0; 3 > s; s++) {
                                    for (u = 0, l = 0; 3 > l; l++) u += f[a][l] * h[l][s];
                                    c[a][s] = u
                                }
                            return this.a = c[0][0], this.b = c[1][0], this.c = c[0][1], this.d = c[1][1], this.e = c[0][2], this.f = c[1][2], this
                        }, t.invert = function () {
                            var t = this,
                                e = t.a * t.d - t.b * t.c;
                            return new p(t.d / e, -t.b / e, -t.c / e, t.a / e, (t.c * t.f - t.d * t.e) / e, (t.b * t.e - t.a * t.f) / e)
                        }, t.clone = function () {
                            return new p(this.a, this.b, this.c, this.d, this.e, this.f)
                        }, t.translate = function (t, e) {
                            return this.add(1, 0, 0, 1, t, e)
                        }, t.scale = function (t, e, n, r) {
                            return null == e && (e = t), (n || r) && this.add(1, 0, 0, 1, n, r), this.add(t, 0, 0, e, 0, 0), (n || r) && this.add(1, 0, 0, 1, -n, -r), this
                        }, t.rotate = function (t, e, n) {
                            t = c(t), e = e || 0, n = n || 0;
                            var r = +M.cos(t).toFixed(9),
                                i = +M.sin(t).toFixed(9);
                            return this.add(r, i, -i, r, e, n), this.add(1, 0, 0, 1, -e, -n)
                        }, t.x = function (t, e) {
                            return t * this.a + e * this.c + this.e
                        }, t.y = function (t, e) {
                            return t * this.b + e * this.d + this.f
                        }, t.get = function (t) {
                            return +this[P.fromCharCode(97 + t)].toFixed(4)
                        }, t.toString = function () {
                            return "matrix(" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)].join() + ")"
                        }, t.offset = function () {
                            return [this.e.toFixed(4), this.f.toFixed(4)]
                        }, t.split = function () {
                            var t = {};
                            t.dx = this.e, t.dy = this.f;
                            var r = [
                                [this.a, this.c],
                                [this.b, this.d]
                            ];
                            t.scalex = M.sqrt(e(r[0])), n(r[0]), t.shear = r[0][0] * r[1][0] + r[0][1] * r[1][1], r[1] = [r[1][0] - r[0][0] * t.shear, r[1][1] - r[0][1] * t.shear], t.scaley = M.sqrt(e(r[1])), n(r[1]), t.shear /= t.scaley;
                            var i = -r[0][1],
                                o = r[1][1];
                            return 0 > o ? (t.rotate = f(M.acos(o)), 0 > i && (t.rotate = 360 - t.rotate)) : t.rotate = f(M.asin(i)), t.isSimple = !(+t.shear.toFixed(9) || t.scalex.toFixed(9) != t.scaley.toFixed(9) && t.rotate), t.isSuperSimple = !+t.shear.toFixed(9) && t.scalex.toFixed(9) == t.scaley.toFixed(9) && !t.rotate, t.noRotation = !+t.shear.toFixed(9) && !t.rotate, t
                        }, t.toTransformString = function (t) {
                            var e = t || this.split();
                            return e.isSimple ? (e.scalex = +e.scalex.toFixed(4), e.scaley = +e.scaley.toFixed(4), e.rotate = +e.rotate.toFixed(4), (e.dx || e.dy ? "t" + [+e.dx.toFixed(4), +e.dy.toFixed(4)] : G) + (1 != e.scalex || 1 != e.scaley ? "s" + [e.scalex, e.scaley, 0, 0] : G) + (e.rotate ? "r" + [+e.rotate.toFixed(4), 0, 0] : G)) : "m" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)]
                        }
                    }(p.prototype), r.Matrix = p, r.getRGB = l(function (t) {
                        if (!t || (t = P(t)).indexOf("-") + 1) return {
                            r: -1,
                            g: -1,
                            b: -1,
                            hex: "none",
                            error: 1,
                            toString: he
                        };
                        if ("none" == t) return {
                            r: -1,
                            g: -1,
                            b: -1,
                            hex: "none",
                            toString: he
                        };
                        if (!(J[L](t.toLowerCase().substring(0, 2)) || "#" == t.charAt()) && (t = ce(t)), !t) return {
                            r: -1,
                            g: -1,
                            b: -1,
                            hex: "none",
                            error: 1,
                            toString: he
                        };
                        var e, n, i, a, s, l, u = t.match(X);
                        return u ? (u[2] && (i = q(u[2].substring(5), 16), n = q(u[2].substring(3, 5), 16), e = q(u[2].substring(1, 3), 16)), u[3] && (i = q((s = u[3].charAt(3)) + s, 16), n = q((s = u[3].charAt(2)) + s, 16), e = q((s = u[3].charAt(1)) + s, 16)), u[4] && (l = u[4].split(K), e = O(l[0]), "%" == l[0].slice(-1) && (e *= 2.55), n = O(l[1]), "%" == l[1].slice(-1) && (n *= 2.55), i = O(l[2]), "%" == l[2].slice(-1) && (i *= 2.55), "rgba" == u[1].toLowerCase().slice(0, 4) && (a = O(l[3])), l[3] && "%" == l[3].slice(-1) && (a /= 100)), u[5] ? (l = u[5].split(K), e = O(l[0]), "%" == l[0].slice(-1) && (e /= 100), n = O(l[1]), "%" == l[1].slice(-1) && (n /= 100), i = O(l[2]), "%" == l[2].slice(-1) && (i /= 100), ("deg" == l[0].slice(-3) || "\xb0" == l[0].slice(-1)) && (e /= 360), "hsba" == u[1].toLowerCase().slice(0, 4) && (a = O(l[3])), l[3] && "%" == l[3].slice(-1) && (a /= 100), r.hsb2rgb(e, n, i, a)) : u[6] ? (l = u[6].split(K), e = O(l[0]), "%" == l[0].slice(-1) && (e /= 100), n = O(l[1]), "%" == l[1].slice(-1) && (n /= 100), i = O(l[2]), "%" == l[2].slice(-1) && (i /= 100), ("deg" == l[0].slice(-3) || "\xb0" == l[0].slice(-1)) && (e /= 360), "hsla" == u[1].toLowerCase().slice(0, 4) && (a = O(l[3])), l[3] && "%" == l[3].slice(-1) && (a /= 100), r.hsl2rgb(e, n, i, a)) : (e = I(M.round(e), 255), n = I(M.round(n), 255), i = I(M.round(i), 255), a = I(z(a, 0), 1), u = {
                            r: e,
                            g: n,
                            b: i,
                            toString: he
                        }, u.hex = "#" + (16777216 | i | n << 8 | e << 16).toString(16).slice(1), u.opacity = o(a, "finite") ? a : 1, u)) : {
                            r: -1,
                            g: -1,
                            b: -1,
                            hex: "none",
                            error: 1,
                            toString: he
                        }
                    }, r), r.hsb = l(function (t, e, n) {
                        return r.hsb2rgb(t, e, n).hex
                    }), r.hsl = l(function (t, e, n) {
                        return r.hsl2rgb(t, e, n).hex
                    }), r.rgb = l(function (t, e, n, r) {
                        if (o(r, "finite")) {
                            var i = M.round;
                            return "rgba(" + [i(t), i(e), i(n), +r.toFixed(2)] + ")"
                        }
                        return "#" + (16777216 | n | e << 8 | t << 16).toString(16).slice(1)
                    });
                var ce = function (t) {
                        var e = N.doc.getElementsByTagName("head")[0],
                            n = "rgb(255, 0, 0)";
                        return (ce = l(function (t) {
                            if ("red" == t.toLowerCase()) return n;
                            e.style.color = n, e.style.color = t;
                            var r = N.doc.defaultView.getComputedStyle(e, G).getPropertyValue("color");
                            return r == n ? null : r
                        }))(t)
                    },
                    fe = function () {
                        return "hsb(" + [this.h, this.s, this.b] + ")"
                    },
                    pe = function () {
                        return "hsl(" + [this.h, this.s, this.l] + ")"
                    },
                    he = function () {
                        return 1 == this.opacity || null == this.opacity ? this.hex : "rgba(" + [this.r, this.g, this.b, this.opacity] + ")"
                    },
                    de = function (t, e, n) {
                        if (null == e && o(t, "object") && "r" in t && "g" in t && "b" in t && (n = t.b, e = t.g, t = t.r), null == e && o(t, string)) {
                            var i = r.getRGB(t);
                            t = i.r, e = i.g, n = i.b
                        }
                        return (t > 1 || e > 1 || n > 1) && (t /= 255, e /= 255, n /= 255), [t, e, n]
                    },
                    ge = function (t, e, n, i) {
                        t = M.round(255 * t), e = M.round(255 * e), n = M.round(255 * n);
                        var a = {
                            r: t,
                            g: e,
                            b: n,
                            opacity: o(i, "finite") ? i : 1,
                            hex: r.rgb(t, e, n),
                            toString: he
                        };
                        return o(i, "finite") && (a.opacity = i), a
                    };
                r.color = function (t) {
                    var e;
                    return o(t, "object") && "h" in t && "s" in t && "b" in t ? (e = r.hsb2rgb(t), t.r = e.r, t.g = e.g, t.b = e.b, t.opacity = 1, t.hex = e.hex) : o(t, "object") && "h" in t && "s" in t && "l" in t ? (e = r.hsl2rgb(t), t.r = e.r, t.g = e.g, t.b = e.b, t.opacity = 1, t.hex = e.hex) : (o(t, "string") && (t = r.getRGB(t)), o(t, "object") && "r" in t && "g" in t && "b" in t && !("error" in t) ? (e = r.rgb2hsl(t), t.h = e.h, t.s = e.s, t.l = e.l, e = r.rgb2hsb(t), t.v = e.b) : (t = {
                        hex: "none"
                    }, t.r = t.g = t.b = t.h = t.s = t.v = t.l = -1, t.error = 1)), t.toString = he, t
                }, r.hsb2rgb = function (t, e, n, r) {
                    o(t, "object") && "h" in t && "s" in t && "b" in t && (n = t.b, e = t.s, t = t.h, r = t.o), t *= 360;
                    var i, a, s, l, u;
                    return t = t % 360 / 60, u = n * e, l = u * (1 - R(t % 2 - 1)), i = a = s = n - u, t = ~~t, i += [u, l, 0, 0, l, u][t], a += [l, u, u, l, 0, 0][t], s += [0, 0, l, u, u, l][t], ge(i, a, s, r)
                }, r.hsl2rgb = function (t, e, n, r) {
                    o(t, "object") && "h" in t && "s" in t && "l" in t && (n = t.l, e = t.s, t = t.h), (t > 1 || e > 1 || n > 1) && (t /= 360, e /= 100, n /= 100), t *= 360;
                    var i, a, s, l, u;
                    return t = t % 360 / 60, u = 2 * e * (.5 > n ? n : 1 - n), l = u * (1 - R(t % 2 - 1)), i = a = s = n - u / 2, t = ~~t, i += [u, l, 0, 0, l, u][t], a += [l, u, u, l, 0, 0][t], s += [0, 0, l, u, u, l][t], ge(i, a, s, r)
                }, r.rgb2hsb = function (t, e, n) {
                    n = de(t, e, n), t = n[0], e = n[1], n = n[2];
                    var r, i, o, a;
                    return o = z(t, e, n), a = o - I(t, e, n), r = 0 == a ? null : o == t ? (e - n) / a : o == e ? (n - t) / a + 2 : (t - e) / a + 4, r = (r + 360) % 6 * 60 / 360, i = 0 == a ? 0 : a / o, {
                        h: r,
                        s: i,
                        b: o,
                        toString: fe
                    }
                }, r.rgb2hsl = function (t, e, n) {
                    n = de(t, e, n), t = n[0], e = n[1], n = n[2];
                    var r, i, o, a, s, l;
                    return a = z(t, e, n), s = I(t, e, n), l = a - s, r = 0 == l ? null : a == t ? (e - n) / l : a == e ? (n - t) / l + 2 : (t - e) / l + 4, r = (r + 360) % 6 * 60 / 360, o = (a + s) / 2, i = 0 == l ? 0 : .5 > o ? l / (2 * o) : l / (2 - 2 * o), {
                        h: r,
                        s: i,
                        l: o,
                        toString: pe
                    }
                }, r.parsePathString = function (t) {
                    if (!t) return null;
                    var e = r.path(t);
                    if (e.arr) return r.path.clone(e.arr);
                    var n = {
                            a: 7,
                            c: 6,
                            o: 2,
                            h: 1,
                            l: 2,
                            m: 2,
                            r: 4,
                            q: 4,
                            s: 4,
                            t: 2,
                            v: 1,
                            u: 3,
                            z: 0
                        },
                        i = [];
                    return o(t, "array") && o(t[0], "array") && (i = r.path.clone(t)), i.length || P(t).replace(Z, function (t, e, r) {
                        var o = [],
                            a = e.toLowerCase();
                        if (r.replace(ee, function (t, e) {
                            e && o.push(+e)
                        }), "m" == a && o.length > 2 && (i.push([e].concat(o.splice(0, 2))), a = "l", e = "m" == e ? "l" : "L"), "o" == a && 1 == o.length && i.push([e, o[0]]), "r" == a) i.push([e].concat(o));
                        else
                            for (; o.length >= n[a] && (i.push([e].concat(o.splice(0, n[a]))), n[a]););
                    }), i.toString = r.path.toString, e.arr = r.path.clone(i), i
                };
                var me = r.parseTransformString = function (t) {
                    if (!t) return null;
                    var e = [];
                    return o(t, "array") && o(t[0], "array") && (e = r.path.clone(t)), e.length || P(t).replace(te, function (t, n, r) {
                        {
                            var i = [];
                            n.toLowerCase()
                        }
                        r.replace(ee, function (t, e) {
                            e && i.push(+e)
                        }), e.push([n].concat(i))
                    }), e.toString = r.path.toString, e
                };
                r._.svgTransform2string = h, r._.rgTransform = new RegExp("^[a-z][" + Y + "]*-?\\.?\\d", "i"), r._.transform2matrix = d, r._unit2px = y;
                var ve = N.doc.contains || N.doc.compareDocumentPosition ? function (t, e) {
                    var n = 9 == t.nodeType ? t.documentElement : t,
                        r = e && e.parentNode;
                    return t == r || !(!r || 1 != r.nodeType || !(n.contains ? n.contains(r) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(r)))
                } : function (t, e) {
                    if (e)
                        for (; e;)
                            if (e = e.parentNode, e == t) return !0;
                    return !1
                };
                r._.getSomeDefs = v, r.select = function (t) {
                        return T(N.doc.querySelector(t))
                    }, r.selectAll = function (t) {
                        for (var e = N.doc.querySelectorAll(t), n = (r.set || Array)(), i = 0; i < e.length; i++) n.push(T(e[i]));
                        return n
                    },
                    function (t) {
                        function a(t) {
                            function e(t, e) {
                                var n = i(t.node, e);
                                n = n && n.match(a), n = n && n[2], n && "#" == n.charAt() && (n = n.substring(1), n && (l[n] = (l[n] || []).concat(function (n) {
                                    var r = {};
                                    r[e] = le(n), i(t.node, r)
                                })))
                            }

                            function n(t) {
                                var e = i(t.node, "xlink:href");
                                e && "#" == e.charAt() && (e = e.substring(1), e && (l[e] = (l[e] || []).concat(function (e) {
                                    t.attr("xlink:href", "#" + e)
                                })))
                            }
                            for (var r, o = t.selectAll("*"), a = /^\s*url\(("|'|)(.*)\1\)\s*$/, s = [], l = {}, u = 0, c = o.length; c > u; u++) {
                                r = o[u], e(r, "fill"), e(r, "stroke"), e(r, "filter"), e(r, "mask"), e(r, "clip-path"), n(r);
                                var f = i(r.node, "id");
                                f && (i(r.node, {
                                    id: r.id
                                }), s.push({
                                    old: f,
                                    id: r.id
                                }))
                            }
                            for (u = 0, c = s.length; c > u; u++) {
                                var p = l[s[u].old];
                                if (p)
                                    for (var h = 0, d = p.length; d > h; h++) p[h](s[u].id)
                            }
                        }

                        function s(t, e, n) {
                            return function (r) {
                                var i = r.slice(t, e);
                                return 1 == i.length && (i = i[0]), n ? n(i) : i
                            }
                        }

                        function l(t) {
                            return function () {
                                var e = t ? "<" + this.type : "",
                                    n = this.node.attributes,
                                    r = this.node.childNodes;
                                if (t)
                                    for (var i = 0, o = n.length; o > i; i++) e += " " + n[i].name + '="' + n[i].value.replace(/"/g, '\\"') + '"';
                                if (r.length) {
                                    for (t && (e += ">"), i = 0, o = r.length; o > i; i++) 3 == r[i].nodeType ? e += r[i].nodeValue : 1 == r[i].nodeType && (e += T(r[i]).toString());
                                    t && (e += "</" + this.type + ">")
                                } else t && (e += "/>");
                                return e
                            }
                        }
                        t.attr = function (t, n) {
                            {
                                var r = this;
                                r.node
                            }
                            if (!t) return r;
                            if (o(t, "string")) {
                                if (!(arguments.length > 1)) return x(e("snap.util.getattr." + t, r));
                                var i = {};
                                i[t] = n, t = i
                            }
                            for (var a in t) t[L](a) && e("snap.util.attr." + a, r, t[a]);
                            return r
                        }, t.getBBox = function (t) {
                            var e = this;
                            if ("use" == e.type && (e = e.original), e.removed) return {};
                            var n = e._;
                            return t ? (n.bboxwt = r.path.get[e.type] ? r.path.getBBox(e.realPath = r.path.get[e.type](e)) : r._.box(e.node.getBBox()), r._.box(n.bboxwt)) : (e.realPath = (r.path.get[e.type] || r.path.get.deflt)(e), n.bbox = r.path.getBBox(r.path.map(e.realPath, e.matrix)), r._.box(n.bbox))
                        };
                        var u = function () {
                            return this.string
                        };
                        t.transform = function (t) {
                            var e = this._;
                            if (null == t) {
                                var n = new p(this.node.getCTM()),
                                    r = m(this),
                                    o = r.toTransformString(),
                                    a = P(r) == P(this.matrix) ? e.transform : o;
                                return {
                                    string: a,
                                    globalMatrix: n,
                                    localMatrix: r,
                                    diffMatrix: n.clone().add(r.invert()),
                                    global: n.toTransformString(),
                                    local: o,
                                    toString: u
                                }
                            }
                            return t instanceof p && (t = t.toTransformString()), m(this, t), this.node && ("linearGradient" == this.type || "radialGradient" == this.type ? i(this.node, {
                                gradientTransform: this.matrix
                            }) : "pattern" == this.type ? i(this.node, {
                                patternTransform: this.matrix
                            }) : i(this.node, {
                                transform: this.matrix
                            })), this
                        }, t.parent = function () {
                            return T(this.node.parentNode)
                        }, t.append = t.add = function (t) {
                            if (t) {
                                if ("set" == t.type) {
                                    var e = this;
                                    return t.forEach(function (t) {
                                        e.add(t)
                                    }), this
                                }
                                t = T(t), this.node.appendChild(t.node), t.paper = this.paper
                            }
                            return this
                        }, t.appendTo = function (t) {
                            return t && (t = T(t), t.append(this)), this
                        }, t.prepend = function (t) {
                            if (t) {
                                t = T(t);
                                var e = t.parent();
                                this.node.insertBefore(t.node, this.node.firstChild), this.add && this.add(), t.paper = this.paper, this.parent() && this.parent().add(), e && e.add()
                            }
                            return this
                        }, t.prependTo = function (t) {
                            return t = T(t), t.prepend(this), this
                        }, t.before = function (t) {
                            if ("set" == t.type) {
                                var e = this;
                                return t.forEach(function (t) {
                                    var n = t.parent();
                                    e.node.parentNode.insertBefore(t.node, e.node), n && n.add()
                                }), this.parent().add(), this
                            }
                            t = T(t);
                            var n = t.parent();
                            return this.node.parentNode.insertBefore(t.node, this.node), this.parent() && this.parent().add(), n && n.add(), t.paper = this.paper, this
                        }, t.after = function (t) {
                            t = T(t);
                            var e = t.parent();
                            return this.node.nextSibling ? this.node.parentNode.insertBefore(t.node, this.node.nextSibling) : this.node.parentNode.appendChild(t.node), this.parent() && this.parent().add(), e && e.add(), t.paper = this.paper, this
                        }, t.insertBefore = function (t) {
                            t = T(t);
                            var e = this.parent();
                            return t.node.parentNode.insertBefore(this.node, t.node), this.paper = t.paper, e && e.add(), t.parent() && t.parent().add(), this
                        }, t.insertAfter = function (t) {
                            t = T(t);
                            var e = this.parent();
                            return t.node.parentNode.insertBefore(this.node, t.node.nextSibling), this.paper = t.paper, e && e.add(), t.parent() && t.parent().add(), this
                        }, t.remove = function () {
                            var t = this.parent();
                            return this.node.parentNode && this.node.parentNode.removeChild(this.node), delete this.paper, this.removed = !0, t && t.add(), this
                        }, t.select = function (t) {
                            return T(this.node.querySelector(t))
                        }, t.selectAll = function (t) {
                            for (var e = this.node.querySelectorAll(t), n = (r.set || Array)(), i = 0; i < e.length; i++) n.push(T(e[i]));
                            return n
                        }, t.asPX = function (t, e) {
                            return null == e && (e = this.attr(t)), +y(this, t, e)
                        }, t.use = function () {
                            var t, e = this.node.id;
                            return e || (e = this.id, i(this.node, {
                                id: e
                            })), t = "linearGradient" == this.type || "radialGradient" == this.type || "pattern" == this.type ? C(this.type, this.node.parentNode) : C("use", this.node.parentNode), i(t.node, {
                                "xlink:href": "#" + e
                            }), t.original = this, t
                        }, t.clone = function () {
                            var t = T(this.node.cloneNode(!0));
                            return i(t.node, "id") && i(t.node, {
                                id: t.id
                            }), a(t), t.insertAfter(this), t
                        }, t.toDefs = function () {
                            var t = v(this);
                            return t.appendChild(this.node), this
                        }, t.pattern = function (t, e, n, r) {
                            var a = C("pattern", v(this));
                            return null == t && (t = this.getBBox()), o(t, "object") && "x" in t && (e = t.y, n = t.width, r = t.height, t = t.x), i(a.node, {
                                x: t,
                                y: e,
                                width: n,
                                height: r,
                                patternUnits: "userSpaceOnUse",
                                id: a.id,
                                viewBox: [t, e, n, r].join(" ")
                            }), a.node.appendChild(this.node), a
                        }, t.marker = function (t, e, n, r, a, s) {
                            var l = C("marker", v(this));
                            return null == t && (t = this.getBBox()), o(t, "object") && "x" in t && (e = t.y, n = t.width, r = t.height, a = t.refX || t.cx, s = t.refY || t.cy, t = t.x), i(l.node, {
                                viewBox: [t, e, n, r].join(W),
                                markerWidth: n,
                                markerHeight: r,
                                orient: "auto",
                                refX: a || 0,
                                refY: s || 0,
                                id: l.id
                            }), l.node.appendChild(this.node), l
                        };
                        var c = function (t, e, r, i) {
                            "function" != typeof r || r.length || (i = r, r = n.linear), this.attr = t, this.dur = e, r && (this.easing = r), i && (this.callback = i)
                        };
                        r.animation = function (t, e, n, r) {
                            return new c(t, e, n, r)
                        }, t.inAnim = function () {
                            var t = this,
                                e = [];
                            for (var n in t.anims) t.anims[L](n) && ! function (t) {
                                e.push({
                                    anim: new c(t._attrs, t.dur, t.easing, t._callback),
                                    curStatus: t.status(),
                                    status: function (e) {
                                        return t.status(e)
                                    },
                                    stop: function () {
                                        t.stop()
                                    }
                                })
                            }(t.anims[n]);
                            return e
                        }, r.animate = function (t, r, i, o, a, s) {
                            "function" != typeof a || a.length || (s = a, a = n.linear);
                            var l = n.time(),
                                u = n(t, r, l, l + o, n.time, i, a);
                            return s && e.once("mina.finish." + u.id, s), u
                        }, t.stop = function () {
                            for (var t = this.inAnim(), e = 0, n = t.length; n > e; e++) t[e].stop();
                            return this
                        }, t.animate = function (t, r, i, a) {
                            "function" != typeof i || i.length || (a = i, i = n.linear), t instanceof c && (a = t.callback, i = t.easing, r = i.dur, t = t.attr);
                            var l, u, f, p, h = [],
                                d = [],
                                g = {},
                                m = this;
                            for (var v in t)
                                if (t[L](v)) {
                                    m.equal ? (p = m.equal(v, P(t[v])), l = p.from, u = p.to, f = p.f) : (l = +m.attr(v), u = +t[v]);
                                    var y = o(l, "array") ? l.length : 1;
                                    g[v] = s(h.length, h.length + y, f), h = h.concat(l), d = d.concat(u)
                                }
                            var F = n.time(),
                                b = n(h, d, F, F + r, n.time, function (t) {
                                    var e = {};
                                    for (var n in g) g[L](n) && (e[n] = g[n](t));
                                    m.attr(e)
                                }, i);
                            return m.anims[b.id] = b, b._attrs = t, b._callback = a, e.once("mina.finish." + b.id, function () {
                                delete m.anims[b.id], a && a.call(m)
                            }), e.once("mina.stop." + b.id, function () {
                                delete m.anims[b.id]
                            }), m
                        };
                        var f = {};
                        t.data = function (t, n) {
                            var i = f[this.id] = f[this.id] || {};
                            if (0 == arguments.length) return e("snap.data.get." + this.id, this, i, null), i;
                            if (1 == arguments.length) {
                                if (r.is(t, "object")) {
                                    for (var o in t) t[L](o) && this.data(o, t[o]);
                                    return this
                                }
                                return e("snap.data.get." + this.id, this, i[t], t), i[t]
                            }
                            return i[t] = n, e("snap.data.set." + this.id, this, n, t), this
                        }, t.removeData = function (t) {
                            return null == t ? f[this.id] = {} : f[this.id] && delete f[this.id][t], this
                        }, t.outerSVG = t.toString = l(1), t.innerSVG = l()
                    }(b.prototype), r.parse = function (t) {
                        var e = N.doc.createDocumentFragment(),
                            n = !0,
                            r = N.doc.createElement("div");
                        if (t = P(t), t.match(/^\s*<\s*svg(?:\s|>)/) || (t = "<svg>" + t + "</svg>", n = !1), r.innerHTML = t, t = r.getElementsByTagName("svg")[0])
                            if (n) e = t;
                            else
                                for (; t.firstChild;) e.appendChild(t.firstChild);
                        return r.innerHTML = G, new w(e)
                    }, w.prototype.select = b.prototype.select, w.prototype.selectAll = b.prototype.selectAll, r.fragment = function () {
                        for (var t = Array.prototype.slice.call(arguments, 0), e = N.doc.createDocumentFragment(), n = 0, i = t.length; i > n; n++) {
                            var o = t[n];
                            o.node && o.node.nodeType && e.appendChild(o.node), o.nodeType && e.appendChild(o), "string" == typeof o && e.appendChild(r.parse(o).node)
                        }
                        return new w(e)
                    },
                    function (t) {
                        t.el = function (t, e) {
                                return C(t, this.node).attr(e)
                            }, t.rect = function (t, e, n, r, i, a) {
                                var s;
                                return null == a && (a = i), o(t, "object") && "x" in t ? s = t : null != t && (s = {
                                    x: t,
                                    y: e,
                                    width: n,
                                    height: r
                                }, null != i && (s.rx = i, s.ry = a)), this.el("rect", s)
                            }, t.circle = function (t, e, n) {
                                var r;
                                return o(t, "object") && "cx" in t ? r = t : null != t && (r = {
                                    cx: t,
                                    cy: e,
                                    r: n
                                }), this.el("circle", r)
                            }, t.image = function (t, e, n, r, a) {
                                var s = C("image", this.node);
                                if (o(t, "object") && "src" in t) s.attr(t);
                                else if (null != t) {
                                    var l = {
                                        "xlink:href": t,
                                        preserveAspectRatio: "none"
                                    };
                                    null != e && null != n && (l.x = e, l.y = n), null != r && null != a ? (l.width = r, l.height = a) : ue(t, function () {
                                        i(s.node, {
                                            width: this.offsetWidth,
                                            height: this.offsetHeight
                                        })
                                    }), i(s.node, l)
                                }
                                return s
                            }, t.ellipse = function (t, e, n, r) {
                                var i = C("ellipse", this.node);
                                return o(t, "object") && "cx" in t ? i.attr(t) : null != t && i.attr({
                                    cx: t,
                                    cy: e,
                                    rx: n,
                                    ry: r
                                }), i
                            }, t.path = function (t) {
                                var e = C("path", this.node);
                                return o(t, "object") && !o(t, "array") ? e.attr(t) : t && e.attr({
                                    d: t
                                }), e
                            }, t.group = t.g = function (e) {
                                var n = C("g", this.node);
                                n.add = F;
                                for (var r in t) t[L](r) && (n[r] = t[r]);
                                return 1 == arguments.length && e && !e.type ? n.attr(e) : arguments.length && n.add(Array.prototype.slice.call(arguments, 0)), n
                            }, t.text = function (t, e, n) {
                                var r = C("text", this.node);
                                return o(t, "object") ? r.attr(t) : null != t && r.attr({
                                    x: t,
                                    y: e,
                                    text: n || ""
                                }), r
                            }, t.line = function (t, e, n, r) {
                                var i = C("line", this.node);
                                return o(t, "object") ? i.attr(t) : null != t && i.attr({
                                    x1: t,
                                    x2: n,
                                    y1: e,
                                    y2: r
                                }), i
                            }, t.polyline = function (t) {
                                arguments.length > 1 && (t = Array.prototype.slice.call(arguments, 0));
                                var e = C("polyline", this.node);
                                return o(t, "object") && !o(t, "array") ? e.attr(t) : null != t && e.attr({
                                    points: t
                                }), e
                            }, t.polygon = function (t) {
                                arguments.length > 1 && (t = Array.prototype.slice.call(arguments, 0));
                                var e = C("polygon", this.node);
                                return o(t, "object") && !o(t, "array") ? e.attr(t) : null != t && e.attr({
                                    points: t
                                }), e
                            },
                            function () {
                                t.gradient = function (t) {
                                    return B(this.defs, t)
                                }, t.gradientLinear = function (t, e, n, r) {
                                    return S(this.defs, t, e, n, r)
                                }, t.gradientRadial = function (t, e, n, r, i) {
                                    return j(this.defs, t, e, n, r, i)
                                }, t.toString = function () {
                                    var t, e = N.doc.createDocumentFragment(),
                                        n = N.doc.createElement("div"),
                                        r = this.node.cloneNode(!0);
                                    return e.appendChild(n), n.appendChild(r), i(r, {
                                        xmlns: ae
                                    }), t = n.innerHTML, e.removeChild(e.firstChild), t
                                }, t.clear = function () {
                                    for (var t, e = this.node.firstChild; e;) t = e.nextSibling, "defs" != e.tagName && e.parentNode.removeChild(e), e = t
                                }
                            }()
                    }(k.prototype), r.ajax = function (t, n, r, i) {
                        var a = new XMLHttpRequest,
                            s = ie();
                        if (a) {
                            if (o(n, "function")) i = r, r = n, n = null;
                            else if (o(n, "object")) {
                                var l = [];
                                for (var u in n) n.hasOwnProperty(u) && l.push(encodeURIComponent(u) + "=" + encodeURIComponent(n[u]));
                                n = l.join("&")
                            }
                            return a.open(n ? "POST" : "GET", t, !0), a.setRequestHeader("X-Requested-With", "XMLHttpRequest"), n && a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), r && (e.once("snap.ajax." + s + ".0", r), e.once("snap.ajax." + s + ".200", r), e.once("snap.ajax." + s + ".304", r)), a.onreadystatechange = function () {
                                4 == a.readyState && e("snap.ajax." + s + "." + a.status, i, a)
                            }, 4 == a.readyState ? a : (a.send(n), a)
                        }
                    }, r.load = function (t, e, n) {
                        r.ajax(t, function (t) {
                            var i = r.parse(t.responseText);
                            n ? e.call(n, i) : e(i)
                        })
                    }, e.on("snap.util.attr.mask", function (t) {
                        if (t instanceof b || t instanceof w) {
                            if (e.stop(), t instanceof w && 1 == t.node.childNodes.length && (t = t.node.firstChild, v(this).appendChild(t), t = T(t)), "mask" == t.type) var n = t;
                            else n = C("mask", v(this)), n.node.appendChild(t.node), !n.node.id && i(n.node, {
                                id: n.id
                            });
                            i(this.node, {
                                mask: le(n.id)
                            })
                        }
                    }),
                    function (t) {
                        e.on("snap.util.attr.clip", t), e.on("snap.util.attr.clip-path", t), e.on("snap.util.attr.clipPath", t)
                    }(function (t) {
                        if (t instanceof b || t instanceof w) {
                            if (e.stop(), "clipPath" == t.type) var n = t;
                            else n = C("clipPath", v(this)), n.node.appendChild(t.node), !n.node.id && i(n.node, {
                                id: n.id
                            });
                            i(this.node, {
                                "clip-path": le(n.id)
                            })
                        }
                    }), e.on("snap.util.attr.fill", D("fill")), e.on("snap.util.attr.stroke", D("stroke"));
                var ye = /^([lr])(?:\(([^)]*)\))?(.*)$/i;
                e.on("snap.util.grad.parse", function (t) {
                    t = P(t);
                    var e = t.match(ye);
                    if (!e) return null;
                    var n = e[1],
                        r = e[2],
                        i = e[3];
                    return r = r.split(/\s*,\s*/).map(function (t) {
                        return +t == t ? +t : t
                    }), 1 == r.length && 0 == r[0] && (r = []), i = i.split("-"), i = i.map(function (t) {
                        t = t.split(":");
                        var e = {
                            color: t[0]
                        };
                        return t[1] && (e.offset = t[1]), e
                    }), {
                        type: n,
                        params: r,
                        stops: i
                    }
                }), e.on("snap.util.attr.d", function (t) {
                    e.stop(), o(t, "array") && o(t[0], "array") && (t = r.path.toString.call(t)), t = P(t), t.match(/[ruo]/i) && (t = r.path.toAbsolute(t)), i(this.node, {
                        d: t
                    })
                })(-1), e.on("snap.util.attr.#text", function (t) {
                    e.stop(), t = P(t);
                    for (var n = N.doc.createTextNode(t); this.node.firstChild;) this.node.removeChild(this.node.firstChild);
                    this.node.appendChild(n)
                })(-1), e.on("snap.util.attr.path", function (t) {
                    e.stop(), this.attr({
                        d: t
                    })
                })(-1), e.on("snap.util.attr.viewBox", function (t) {
                    var n;
                    n = o(t, "object") && "x" in t ? [t.x, t.y, t.width, t.height].join(" ") : o(t, "array") ? t.join(" ") : t, i(this.node, {
                        viewBox: n
                    }), e.stop()
                })(-1), e.on("snap.util.attr.transform", function (t) {
                    this.transform(t), e.stop()
                })(-1), e.on("snap.util.attr.r", function (t) {
                    "rect" == this.type && (e.stop(), i(this.node, {
                        rx: t,
                        ry: t
                    }))
                })(-1), e.on("snap.util.attr.textpath", function (t) {
                    if (e.stop(), "text" == this.type) {
                        var n, r, a;
                        if (!t && this.textPath) {
                            for (r = this.textPath; r.node.firstChild;) this.node.appendChild(r.node.firstChild);
                            return r.remove(), void delete this.textPath
                        }
                        if (o(t, "string")) {
                            var s = v(this),
                                l = T(s.parentNode).path(t);
                            s.appendChild(l.node), n = l.id, l.attr({
                                id: n
                            })
                        } else t = T(t), t instanceof b && (n = t.attr("id"), n || (n = t.id, t.attr({
                            id: n
                        }))); if (n)
                            if (r = this.textPath, a = this.node, r) r.attr({
                                "xlink:href": "#" + n
                            });
                            else {
                                for (r = i("textPath", {
                                    "xlink:href": "#" + n
                                }); a.firstChild;) r.appendChild(a.firstChild);
                                a.appendChild(r), this.textPath = T(r)
                            }
                    }
                })(-1), e.on("snap.util.attr.text", function (t) {
                    if ("text" == this.type) {
                        for (var n = this.node, r = function (t) {
                            var e = i("tspan");
                            if (o(t, "array"))
                                for (var n = 0; n < t.length; n++) e.appendChild(r(t[n]));
                            else e.appendChild(N.doc.createTextNode(t));
                            return e.normalize && e.normalize(), e
                        }; n.firstChild;) n.removeChild(n.firstChild);
                        for (var a = r(t); a.firstChild;) n.appendChild(a.firstChild)
                    }
                    e.stop()
                })(-1);
                var Fe = {
                    "alignment-baseline": 0,
                    "baseline-shift": 0,
                    clip: 0,
                    "clip-path": 0,
                    "clip-rule": 0,
                    color: 0,
                    "color-interpolation": 0,
                    "color-interpolation-filters": 0,
                    "color-profile": 0,
                    "color-rendering": 0,
                    cursor: 0,
                    direction: 0,
                    display: 0,
                    "dominant-baseline": 0,
                    "enable-background": 0,
                    fill: 0,
                    "fill-opacity": 0,
                    "fill-rule": 0,
                    filter: 0,
                    "flood-color": 0,
                    "flood-opacity": 0,
                    font: 0,
                    "font-family": 0,
                    "font-size": 0,
                    "font-size-adjust": 0,
                    "font-stretch": 0,
                    "font-style": 0,
                    "font-variant": 0,
                    "font-weight": 0,
                    "glyph-orientation-horizontal": 0,
                    "glyph-orientation-vertical": 0,
                    "image-rendering": 0,
                    kerning: 0,
                    "letter-spacing": 0,
                    "lighting-color": 0,
                    marker: 0,
                    "marker-end": 0,
                    "marker-mid": 0,
                    "marker-start": 0,
                    mask: 0,
                    opacity: 0,
                    overflow: 0,
                    "pointer-events": 0,
                    "shape-rendering": 0,
                    "stop-color": 0,
                    "stop-opacity": 0,
                    stroke: 0,
                    "stroke-dasharray": 0,
                    "stroke-dashoffset": 0,
                    "stroke-linecap": 0,
                    "stroke-linejoin": 0,
                    "stroke-miterlimit": 0,
                    "stroke-opacity": 0,
                    "stroke-width": 0,
                    "text-anchor": 0,
                    "text-decoration": 0,
                    "text-rendering": 0,
                    "unicode-bidi": 0,
                    visibility: 0,
                    "word-spacing": 0,
                    "writing-mode": 0
                };
                e.on("snap.util.attr", function (t) {
                        var n = e.nt(),
                            r = {};
                        n = n.substring(n.lastIndexOf(".") + 1), r[n] = t;
                        var o = n.replace(/-(\w)/gi, function (t, e) {
                                return e.toUpperCase()
                            }),
                            a = n.replace(/[A-Z]/g, function (t) {
                                return "-" + t.toLowerCase()
                            });
                        Fe[L](a) ? this.node.style[o] = null == t ? G : t : i(this.node, r)
                    }), e.on("snap.util.getattr.transform", function () {
                        return e.stop(), this.transform()
                    })(-1), e.on("snap.util.getattr.textpath", function () {
                        return e.stop(), this.textPath
                    })(-1),
                    function () {
                        function t(t) {
                            return function () {
                                e.stop();
                                var n = N.doc.defaultView.getComputedStyle(this.node, null).getPropertyValue("marker-" + t);
                                return "none" == n ? n : r(N.doc.getElementById(n.match(V)[1]))
                            }
                        }

                        function n(t) {
                            return function (n) {
                                e.stop();
                                var r = "marker" + t.charAt(0).toUpperCase() + t.substring(1);
                                if ("" == n || !n) return void(this.node.style[r] = "none");
                                if ("marker" == n.type) {
                                    var o = n.node.id;
                                    return o || i(n.node, {
                                        id: n.id
                                    }), void(this.node.style[r] = le(o))
                                }
                            }
                        }
                        e.on("snap.util.getattr.marker-end", t("end"))(-1), e.on("snap.util.getattr.markerEnd", t("end"))(-1), e.on("snap.util.getattr.marker-start", t("start"))(-1), e.on("snap.util.getattr.markerStart", t("start"))(-1), e.on("snap.util.getattr.marker-mid", t("mid"))(-1), e.on("snap.util.getattr.markerMid", t("mid"))(-1), e.on("snap.util.attr.marker-end", n("end"))(-1), e.on("snap.util.attr.markerEnd", n("end"))(-1), e.on("snap.util.attr.marker-start", n("start"))(-1), e.on("snap.util.attr.markerStart", n("start"))(-1), e.on("snap.util.attr.marker-mid", n("mid"))(-1), e.on("snap.util.attr.markerMid", n("mid"))(-1)
                    }(), e.on("snap.util.getattr.r", function () {
                        return "rect" == this.type && i(this.node, "rx") == i(this.node, "ry") ? (e.stop(), i(this.node, "rx")) : void 0
                    })(-1), e.on("snap.util.getattr.text", function () {
                        if ("text" == this.type || "tspan" == this.type) {
                            e.stop();
                            var t = $(this.node);
                            return 1 == t.length ? t[0] : t
                        }
                    })(-1), e.on("snap.util.getattr.#text", function () {
                        return this.node.textContent
                    })(-1), e.on("snap.util.getattr.viewBox", function () {
                        e.stop();
                        var t = i(this.node, "viewBox").split(Q);
                        return r._.box(+t[0], +t[1], +t[2], +t[3])
                    })(-1), e.on("snap.util.getattr.points", function () {
                        var t = i(this.node, "points");
                        return e.stop(), t.split(Q)
                    }), e.on("snap.util.getattr.path", function () {
                        var t = i(this.node, "d");
                        return e.stop(), t
                    }), e.on("snap.util.getattr", function () {
                        var t = e.nt();
                        t = t.substring(t.lastIndexOf(".") + 1);
                        var n = t.replace(/[A-Z]/g, function (t) {
                            return "-" + t.toLowerCase()
                        });
                        return Fe[L](n) ? N.doc.defaultView.getComputedStyle(this.node, null).getPropertyValue(n) : i(this.node, t)
                    });
                var be = function (t) {
                    var e = t.getBoundingClientRect(),
                        n = t.ownerDocument,
                        r = n.body,
                        i = n.documentElement,
                        o = i.clientTop || r.clientTop || 0,
                        a = i.clientLeft || r.clientLeft || 0,
                        s = e.top + (g.win.pageYOffset || i.scrollTop || r.scrollTop) - o,
                        l = e.left + (g.win.pageXOffset || i.scrollLeft || r.scrollLeft) - a;
                    return {
                        y: s,
                        x: l
                    }
                };
                return r.getElementByPoint = function (t, e) {
                    var n = this,
                        r = (n.canvas, N.doc.elementFromPoint(t, e));
                    if (N.win.opera && "svg" == r.tagName) {
                        var i = be(r),
                            o = r.createSVGRect();
                        o.x = t - i.x, o.y = e - i.y, o.width = o.height = 1;
                        var a = r.getIntersectionList(o, null);
                        a.length && (r = a[a.length - 1])
                    }
                    return r ? T(r) : null
                }, r.plugin = function (t) {
                    t(r, b, k, N)
                }, N.win.Snap = r, r
            }();
        return r.plugin(function (t, e) {
            function n(t) {
                var e = n.ps = n.ps || {};
                return e[t] ? e[t].sleep = 100 : e[t] = {
                    sleep: 100
                }, setTimeout(function () {
                    for (var n in e) e[O](n) && n != t && (e[n].sleep--, !e[n].sleep && delete e[n])
                }), e[t]
            }

            function r(t, e, n, r) {
                return null == t && (t = e = n = r = 0), null == e && (e = t.y, n = t.width, r = t.height, t = t.x), {
                    x: t,
                    y: e,
                    width: n,
                    w: n,
                    height: r,
                    h: r,
                    x2: t + n,
                    y2: e + r,
                    cx: t + n / 2,
                    cy: e + r / 2,
                    r1: z.min(n, r) / 2,
                    r2: z.max(n, r) / 2,
                    r0: z.sqrt(n * n + r * r) / 2,
                    path: w(t, e, n, r),
                    vb: [t, e, n, r].join(" ")
                }
            }

            function i() {
                return this.join(",").replace(q, "$1")
            }

            function o(t) {
                var e = P(t);
                return e.toString = i, e
            }

            function a(t, e, n, r, i, o, a, s, u) {
                return null == u ? h(t, e, n, r, i, o, a, s) : l(t, e, n, r, i, o, a, s, d(t, e, n, r, i, o, a, s, u))
            }

            function s(n, r) {
                function i(t) {
                    return +(+t).toFixed(3)
                }
                return t._.cacher(function (t, o, s) {
                    t instanceof e && (t = t.attr("d")), t = j(t);
                    for (var u, c, f, p, h, d = "", g = {}, m = 0, v = 0, y = t.length; y > v; v++) {
                        if (f = t[v], "M" == f[0]) u = +f[1], c = +f[2];
                        else {
                            if (p = a(u, c, f[1], f[2], f[3], f[4], f[5], f[6]), m + p > o) {
                                if (r && !g.start) {
                                    if (h = a(u, c, f[1], f[2], f[3], f[4], f[5], f[6], o - m), d += ["C" + i(h.start.x), i(h.start.y), i(h.m.x), i(h.m.y), i(h.x), i(h.y)], s) return d;
                                    g.start = d, d = ["M" + i(h.x), i(h.y) + "C" + i(h.n.x), i(h.n.y), i(h.end.x), i(h.end.y), i(f[5]), i(f[6])].join(), m += p, u = +f[5], c = +f[6];
                                    continue
                                }
                                if (!n && !r) return h = a(u, c, f[1], f[2], f[3], f[4], f[5], f[6], o - m)
                            }
                            m += p, u = +f[5], c = +f[6]
                        }
                        d += f.shift() + f
                    }
                    return g.end = d, h = n ? m : r ? g : l(u, c, f[0], f[1], f[2], f[3], f[4], f[5], 1)
                }, null, t._.clone)
            }

            function l(t, e, n, r, i, o, a, s, l) {
                var u = 1 - l,
                    c = G(u, 3),
                    f = G(u, 2),
                    p = l * l,
                    h = p * l,
                    d = c * t + 3 * f * l * n + 3 * u * l * l * i + h * a,
                    g = c * e + 3 * f * l * r + 3 * u * l * l * o + h * s,
                    m = t + 2 * l * (n - t) + p * (i - 2 * n + t),
                    v = e + 2 * l * (r - e) + p * (o - 2 * r + e),
                    y = n + 2 * l * (i - n) + p * (a - 2 * i + n),
                    F = r + 2 * l * (o - r) + p * (s - 2 * o + r),
                    b = u * t + l * n,
                    x = u * e + l * r,
                    w = u * i + l * a,
                    C = u * o + l * s,
                    k = 90 - 180 * z.atan2(m - y, v - F) / I;
                return {
                    x: d,
                    y: g,
                    m: {
                        x: m,
                        y: v
                    },
                    n: {
                        x: y,
                        y: F
                    },
                    start: {
                        x: b,
                        y: x
                    },
                    end: {
                        x: w,
                        y: C
                    },
                    alpha: k
                }
            }

            function u(e, n, i, o, a, s, l, u) {
                t.is(e, "array") || (e = [e, n, i, o, a, s, l, u]);
                var c = S.apply(null, e);
                return r(c.min.x, c.min.y, c.max.x - c.min.x, c.max.y - c.min.y)
            }

            function c(t, e, n) {
                return e >= t.x && e <= t.x + t.width && n >= t.y && n <= t.y + t.height
            }

            function f(t, e) {
                return t = r(t), e = r(e), c(e, t.x, t.y) || c(e, t.x2, t.y) || c(e, t.x, t.y2) || c(e, t.x2, t.y2) || c(t, e.x, e.y) || c(t, e.x2, e.y) || c(t, e.x, e.y2) || c(t, e.x2, e.y2) || (t.x < e.x2 && t.x > e.x || e.x < t.x2 && e.x > t.x) && (t.y < e.y2 && t.y > e.y || e.y < t.y2 && e.y > t.y)
            }

            function p(t, e, n, r, i) {
                var o = -3 * e + 9 * n - 9 * r + 3 * i,
                    a = t * o + 6 * e - 12 * n + 6 * r;
                return t * a - 3 * e + 3 * n
            }

            function h(t, e, n, r, i, o, a, s, l) {
                null == l && (l = 1), l = l > 1 ? 1 : 0 > l ? 0 : l;
                for (var u = l / 2, c = 12, f = [-.1252, .1252, -.3678, .3678, -.5873, .5873, -.7699, .7699, -.9041, .9041, -.9816, .9816], h = [.2491, .2491, .2335, .2335, .2032, .2032, .1601, .1601, .1069, .1069, .0472, .0472], d = 0, g = 0; c > g; g++) {
                    var m = u * f[g] + u,
                        v = p(m, t, n, i, a),
                        y = p(m, e, r, o, s),
                        F = v * v + y * y;
                    d += h[g] * z.sqrt(F)
                }
                return u * d
            }

            function d(t, e, n, r, i, o, a, s, l) {
                if (!(0 > l || h(t, e, n, r, i, o, a, s) < l)) {
                    var u, c = 1,
                        f = c / 2,
                        p = c - f,
                        d = .01;
                    for (u = h(t, e, n, r, i, o, a, s, p); W(u - l) > d;) f /= 2, p += (l > u ? 1 : -1) * f, u = h(t, e, n, r, i, o, a, s, p);
                    return p
                }
            }

            function g(t, e, n, r, i, o, a, s) {
                if (!(H(t, n) < R(i, a) || R(t, n) > H(i, a) || H(e, r) < R(o, s) || R(e, r) > H(o, s))) {
                    var l = (t * r - e * n) * (i - a) - (t - n) * (i * s - o * a),
                        u = (t * r - e * n) * (o - s) - (e - r) * (i * s - o * a),
                        c = (t - n) * (o - s) - (e - r) * (i - a);
                    if (c) {
                        var f = l / c,
                            p = u / c,
                            h = +f.toFixed(2),
                            d = +p.toFixed(2);
                        if (!(h < +R(t, n).toFixed(2) || h > +H(t, n).toFixed(2) || h < +R(i, a).toFixed(2) || h > +H(i, a).toFixed(2) || d < +R(e, r).toFixed(2) || d > +H(e, r).toFixed(2) || d < +R(o, s).toFixed(2) || d > +H(o, s).toFixed(2))) return {
                            x: f,
                            y: p
                        }
                    }
                }
            }

            function m(t, e, n) {
                var r = u(t),
                    i = u(e);
                if (!f(r, i)) return n ? 0 : [];
                for (var o = h.apply(0, t), a = h.apply(0, e), s = ~~(o / 5), c = ~~(a / 5), p = [], d = [], m = {}, v = n ? 0 : [], y = 0; s + 1 > y; y++) {
                    var F = l.apply(0, t.concat(y / s));
                    p.push({
                        x: F.x,
                        y: F.y,
                        t: y / s
                    })
                }
                for (y = 0; c + 1 > y; y++) F = l.apply(0, e.concat(y / c)), d.push({
                    x: F.x,
                    y: F.y,
                    t: y / c
                });
                for (y = 0; s > y; y++)
                    for (var b = 0; c > b; b++) {
                        var x = p[y],
                            w = p[y + 1],
                            C = d[b],
                            k = d[b + 1],
                            T = W(w.x - x.x) < .001 ? "y" : "x",
                            _ = W(k.x - C.x) < .001 ? "y" : "x",
                            A = g(x.x, x.y, w.x, w.y, C.x, C.y, k.x, k.y);
                        if (A) {
                            if (m[A.x.toFixed(4)] == A.y.toFixed(4)) continue;
                            m[A.x.toFixed(4)] = A.y.toFixed(4);
                            var E = x.t + W((A[T] - x[T]) / (w[T] - x[T])) * (w.t - x.t),
                                B = C.t + W((A[_] - C[_]) / (k[_] - C[_])) * (k.t - C.t);
                            E >= 0 && 1 >= E && B >= 0 && 1 >= B && (n ? v++ : v.push({
                                x: A.x,
                                y: A.y,
                                t1: E,
                                t2: B
                            }))
                        }
                    }
                return v
            }

            function v(t, e) {
                return F(t, e)
            }

            function y(t, e) {
                return F(t, e, 1)
            }

            function F(t, e, n) {
                t = j(t), e = j(e);
                for (var r, i, o, a, s, l, u, c, f, p, h = n ? 0 : [], d = 0, g = t.length; g > d; d++) {
                    var v = t[d];
                    if ("M" == v[0]) r = s = v[1], i = l = v[2];
                    else {
                        "C" == v[0] ? (f = [r, i].concat(v.slice(1)), r = f[6], i = f[7]) : (f = [r, i, r, i, s, l, s, l], r = s, i = l);
                        for (var y = 0, F = e.length; F > y; y++) {
                            var b = e[y];
                            if ("M" == b[0]) o = u = b[1], a = c = b[2];
                            else {
                                "C" == b[0] ? (p = [o, a].concat(b.slice(1)), o = p[6], a = p[7]) : (p = [o, a, o, a, u, c, u, c], o = u, a = c);
                                var x = m(f, p, n);
                                if (n) h += x;
                                else {
                                    for (var w = 0, C = x.length; C > w; w++) x[w].segment1 = d, x[w].segment2 = y, x[w].bez1 = f, x[w].bez2 = p;
                                    h = h.concat(x)
                                }
                            }
                        }
                    }
                }
                return h
            }

            function b(t, e, n) {
                var r = x(t);
                return c(r, e, n) && F(t, [
                    ["M", e, n],
                    ["H", r.x2 + 10]
                ], 1) % 2 == 1
            }

            function x(t) {
                var e = n(t);
                if (e.bbox) return P(e.bbox);
                if (!t) return r();
                t = j(t);
                for (var i, o = 0, a = 0, s = [], l = [], u = 0, c = t.length; c > u; u++)
                    if (i = t[u], "M" == i[0]) o = i[1], a = i[2], s.push(o), l.push(a);
                    else {
                        var f = S(o, a, i[1], i[2], i[3], i[4], i[5], i[6]);
                        s = s.concat(f.min.x, f.max.x), l = l.concat(f.min.y, f.max.y), o = i[5], a = i[6]
                    }
                var p = R.apply(0, s),
                    h = R.apply(0, l),
                    d = H.apply(0, s),
                    g = H.apply(0, l),
                    m = r(p, h, d - p, g - h);
                return e.bbox = P(m), m
            }

            function w(t, e, n, r, o) {
                if (o) return [
                    ["M", t + o, e],
                    ["l", n - 2 * o, 0],
                    ["a", o, o, 0, 0, 1, o, o],
                    ["l", 0, r - 2 * o],
                    ["a", o, o, 0, 0, 1, -o, o],
                    ["l", 2 * o - n, 0],
                    ["a", o, o, 0, 0, 1, -o, -o],
                    ["l", 0, 2 * o - r],
                    ["a", o, o, 0, 0, 1, o, -o],
                    ["z"]
                ];
                var a = [
                    ["M", t, e],
                    ["l", n, 0],
                    ["l", 0, r],
                    ["l", -n, 0],
                    ["z"]
                ];
                return a.toString = i, a
            }

            function C(t, e, n, r, o) {
                if (null == o && null == r && (r = n), null != o) var a = Math.PI / 180,
                    s = t + n * Math.cos(-r * a),
                    l = t + n * Math.cos(-o * a),
                    u = e + n * Math.sin(-r * a),
                    c = e + n * Math.sin(-o * a),
                    f = [
                        ["M", s, u],
                        ["A", n, n, 0, +(o - r > 180), 0, l, c]
                    ];
                else f = [
                    ["M", t, e],
                    ["m", 0, -r],
                    ["a", n, r, 0, 1, 1, 0, 2 * r],
                    ["a", n, r, 0, 1, 1, 0, -2 * r],
                    ["z"]
                ];
                return f.toString = i, f
            }

            function k(e) {
                var r = n(e),
                    a = String.prototype.toLowerCase;
                if (r.rel) return o(r.rel);
                t.is(e, "array") && t.is(e && e[0], "array") || (e = t.parsePathString(e));
                var s = [],
                    l = 0,
                    u = 0,
                    c = 0,
                    f = 0,
                    p = 0;
                "M" == e[0][0] && (l = e[0][1], u = e[0][2], c = l, f = u, p++, s.push(["M", l, u]));
                for (var h = p, d = e.length; d > h; h++) {
                    var g = s[h] = [],
                        m = e[h];
                    if (m[0] != a.call(m[0])) switch (g[0] = a.call(m[0]), g[0]) {
                    case "a":
                        g[1] = m[1], g[2] = m[2], g[3] = m[3], g[4] = m[4], g[5] = m[5], g[6] = +(m[6] - l).toFixed(3), g[7] = +(m[7] - u).toFixed(3);
                        break;
                    case "v":
                        g[1] = +(m[1] - u).toFixed(3);
                        break;
                    case "m":
                        c = m[1], f = m[2];
                    default:
                        for (var v = 1, y = m.length; y > v; v++) g[v] = +(m[v] - (v % 2 ? l : u)).toFixed(3)
                    } else {
                        g = s[h] = [], "m" == m[0] && (c = m[1] + l, f = m[2] + u);
                        for (var F = 0, b = m.length; b > F; F++) s[h][F] = m[F]
                    }
                    var x = s[h].length;
                    switch (s[h][0]) {
                    case "z":
                        l = c, u = f;
                        break;
                    case "h":
                        l += +s[h][x - 1];
                        break;
                    case "v":
                        u += +s[h][x - 1];
                        break;
                    default:
                        l += +s[h][x - 2], u += +s[h][x - 1]
                    }
                }
                return s.toString = i, r.rel = o(s), s
            }

            function T(e) {
                var r = n(e);
                if (r.abs) return o(r.abs);
                if (L(e, "array") && L(e && e[0], "array") || (e = t.parsePathString(e)), !e || !e.length) return [
                    ["M", 0, 0]
                ];
                var a, s = [],
                    l = 0,
                    u = 0,
                    c = 0,
                    f = 0,
                    p = 0;
                "M" == e[0][0] && (l = +e[0][1], u = +e[0][2], c = l, f = u, p++, s[0] = ["M", l, u]);
                for (var h, d, g = 3 == e.length && "M" == e[0][0] && "R" == e[1][0].toUpperCase() && "Z" == e[2][0].toUpperCase(), m = p, v = e.length; v > m; m++) {
                    if (s.push(h = []), d = e[m], a = d[0], a != a.toUpperCase()) switch (h[0] = a.toUpperCase(), h[0]) {
                        case "A":
                            h[1] = d[1], h[2] = d[2], h[3] = d[3], h[4] = d[4], h[5] = d[5], h[6] = +(d[6] + l), h[7] = +(d[7] + u);
                            break;
                        case "V":
                            h[1] = +d[1] + u;
                            break;
                        case "H":
                            h[1] = +d[1] + l;
                            break;
                        case "R":
                            for (var y = [l, u].concat(d.slice(1)), F = 2, b = y.length; b > F; F++) y[F] = +y[F] + l, y[++F] = +y[F] + u;
                            s.pop(), s = s.concat($(y, g));
                            break;
                        case "O":
                            s.pop(), y = C(l, u, d[1], d[2]), y.push(y[0]), s = s.concat(y);
                            break;
                        case "U":
                            s.pop(), s = s.concat(C(l, u, d[1], d[2], d[3])), h = ["U"].concat(s[s.length - 1].slice(-2));
                            break;
                        case "M":
                            c = +d[1] + l, f = +d[2] + u;
                        default:
                            for (F = 1, b = d.length; b > F; F++) h[F] = +d[F] + (F % 2 ? l : u)
                        } else if ("R" == a) y = [l, u].concat(d.slice(1)), s.pop(), s = s.concat($(y, g)), h = ["R"].concat(d.slice(-2));
                        else if ("O" == a) s.pop(), y = C(l, u, d[1], d[2]), y.push(y[0]), s = s.concat(y);
                    else if ("U" == a) s.pop(), s = s.concat(C(l, u, d[1], d[2], d[3])), h = ["U"].concat(s[s.length - 1].slice(-2));
                    else
                        for (var x = 0, w = d.length; w > x; x++) h[x] = d[x]; if (a = a.toUpperCase(), "O" != a) switch (h[0]) {
                    case "Z":
                        l = c, u = f;
                        break;
                    case "H":
                        l = h[1];
                        break;
                    case "V":
                        u = h[1];
                        break;
                    case "M":
                        c = h[h.length - 2], f = h[h.length - 1];
                    default:
                        l = h[h.length - 2], u = h[h.length - 1]
                    }
                }
                return s.toString = i, r.abs = o(s), s
            }

            function _(t, e, n, r) {
                return [t, e, n, r, n, r]
            }

            function A(t, e, n, r, i, o) {
                var a = 1 / 3,
                    s = 2 / 3;
                return [a * t + s * n, a * e + s * r, a * i + s * n, a * o + s * r, i, o]
            }

            function E(e, n, r, i, o, a, s, l, u, c) {
                var f, p = 120 * I / 180,
                    h = I / 180 * (+o || 0),
                    d = [],
                    g = t._.cacher(function (t, e, n) {
                        var r = t * z.cos(n) - e * z.sin(n),
                            i = t * z.sin(n) + e * z.cos(n);
                        return {
                            x: r,
                            y: i
                        }
                    });
                if (c) k = c[0], T = c[1], w = c[2], C = c[3];
                else {
                    f = g(e, n, -h), e = f.x, n = f.y, f = g(l, u, -h), l = f.x, u = f.y;
                    var m = (z.cos(I / 180 * o), z.sin(I / 180 * o), (e - l) / 2),
                        v = (n - u) / 2,
                        y = m * m / (r * r) + v * v / (i * i);
                    y > 1 && (y = z.sqrt(y), r = y * r, i = y * i);
                    var F = r * r,
                        b = i * i,
                        x = (a == s ? -1 : 1) * z.sqrt(W((F * b - F * v * v - b * m * m) / (F * v * v + b * m * m))),
                        w = x * r * v / i + (e + l) / 2,
                        C = x * -i * m / r + (n + u) / 2,
                        k = z.asin(((n - C) / i).toFixed(9)),
                        T = z.asin(((u - C) / i).toFixed(9));
                    k = w > e ? I - k : k, T = w > l ? I - T : T, 0 > k && (k = 2 * I + k), 0 > T && (T = 2 * I + T), s && k > T && (k -= 2 * I), !s && T > k && (T -= 2 * I)
                }
                var _ = T - k;
                if (W(_) > p) {
                    var A = T,
                        B = l,
                        S = u;
                    T = k + p * (s && T > k ? 1 : -1), l = w + r * z.cos(T), u = C + i * z.sin(T), d = E(l, u, r, i, o, 0, s, B, S, [T, A, w, C])
                }
                _ = T - k;
                var j = z.cos(k),
                    D = z.sin(k),
                    $ = z.cos(T),
                    N = z.sin(T),
                    L = z.tan(_ / 4),
                    P = 4 / 3 * r * L,
                    O = 4 / 3 * i * L,
                    q = [e, n],
                    M = [e + P * D, n - O * j],
                    R = [l + P * N, u - O * $],
                    H = [l, u];
                if (M[0] = 2 * q[0] - M[0], M[1] = 2 * q[1] - M[1], c) return [M, R, H].concat(d);
                d = [M, R, H].concat(d).join().split(",");
                for (var G = [], U = 0, X = d.length; X > U; U++) G[U] = U % 2 ? g(d[U - 1], d[U], h).y : g(d[U], d[U + 1], h).x;
                return G
            }

            function B(t, e, n, r, i, o, a, s, l) {
                var u = 1 - l;
                return {
                    x: G(u, 3) * t + 3 * G(u, 2) * l * n + 3 * u * l * l * i + G(l, 3) * a,
                    y: G(u, 3) * e + 3 * G(u, 2) * l * r + 3 * u * l * l * o + G(l, 3) * s
                }
            }

            function S(t, e, n, r, i, o, a, s) {
                var l, u = i - 2 * n + t - (a - 2 * i + n),
                    c = 2 * (n - t) - 2 * (i - n),
                    f = t - n,
                    p = (-c + z.sqrt(c * c - 4 * u * f)) / 2 / u,
                    h = (-c - z.sqrt(c * c - 4 * u * f)) / 2 / u,
                    d = [e, s],
                    g = [t, a];
                return W(p) > "1e12" && (p = .5), W(h) > "1e12" && (h = .5), p > 0 && 1 > p && (l = B(t, e, n, r, i, o, a, s, p), g.push(l.x), d.push(l.y)), h > 0 && 1 > h && (l = B(t, e, n, r, i, o, a, s, h), g.push(l.x), d.push(l.y)), u = o - 2 * r + e - (s - 2 * o + r), c = 2 * (r - e) - 2 * (o - r), f = e - r, p = (-c + z.sqrt(c * c - 4 * u * f)) / 2 / u, h = (-c - z.sqrt(c * c - 4 * u * f)) / 2 / u, W(p) > "1e12" && (p = .5), W(h) > "1e12" && (h = .5), p > 0 && 1 > p && (l = B(t, e, n, r, i, o, a, s, p), g.push(l.x), d.push(l.y)), h > 0 && 1 > h && (l = B(t, e, n, r, i, o, a, s, h), g.push(l.x), d.push(l.y)), {
                    min: {
                        x: R.apply(0, g),
                        y: R.apply(0, d)
                    },
                    max: {
                        x: H.apply(0, g),
                        y: H.apply(0, d)
                    }
                }
            }

            function j(t, e) {
                var r = !e && n(t);
                if (!e && r.curve) return o(r.curve);
                for (var i = T(t), a = e && T(e), s = {
                    x: 0,
                    y: 0,
                    bx: 0,
                    by: 0,
                    X: 0,
                    Y: 0,
                    qx: null,
                    qy: null
                }, l = {
                    x: 0,
                    y: 0,
                    bx: 0,
                    by: 0,
                    X: 0,
                    Y: 0,
                    qx: null,
                    qy: null
                }, u = (function (t, e) {
                    var n, r;
                    if (!t) return ["C", e.x, e.y, e.x, e.y, e.x, e.y];
                    switch (!(t[0] in {
                        T: 1,
                        Q: 1
                    }) && (e.qx = e.qy = null), t[0]) {
                    case "M":
                        e.X = t[1], e.Y = t[2];
                        break;
                    case "A":
                        t = ["C"].concat(E.apply(0, [e.x, e.y].concat(t.slice(1))));
                        break;
                    case "S":
                        n = e.x + (e.x - (e.bx || e.x)), r = e.y + (e.y - (e.by || e.y)), t = ["C", n, r].concat(t.slice(1));
                        break;
                    case "T":
                        e.qx = e.x + (e.x - (e.qx || e.x)), e.qy = e.y + (e.y - (e.qy || e.y)), t = ["C"].concat(A(e.x, e.y, e.qx, e.qy, t[1], t[2]));
                        break;
                    case "Q":
                        e.qx = t[1], e.qy = t[2], t = ["C"].concat(A(e.x, e.y, t[1], t[2], t[3], t[4]));
                        break;
                    case "L":
                        t = ["C"].concat(_(e.x, e.y, t[1], t[2]));
                        break;
                    case "H":
                        t = ["C"].concat(_(e.x, e.y, t[1], e.y));
                        break;
                    case "V":
                        t = ["C"].concat(_(e.x, e.y, e.x, t[1]));
                        break;
                    case "Z":
                        t = ["C"].concat(_(e.x, e.y, e.X, e.Y))
                    }
                    return t
                }), c = function (t, e) {
                    if (t[e].length > 7) {
                        t[e].shift();
                        for (var n = t[e]; n.length;) t.splice(e++, 0, ["C"].concat(n.splice(0, 6)));
                        t.splice(e, 1), h = H(i.length, a && a.length || 0)
                    }
                }, f = function (t, e, n, r, o) {
                    t && e && "M" == t[o][0] && "M" != e[o][0] && (e.splice(o, 0, ["M", r.x, r.y]), n.bx = 0, n.by = 0, n.x = t[o][1], n.y = t[o][2], h = H(i.length, a && a.length || 0))
                }, p = 0, h = H(i.length, a && a.length || 0); h > p; p++) {
                    i[p] = u(i[p], s), c(i, p), a && (a[p] = u(a[p], l)), a && c(a, p), f(i, a, s, l, p), f(a, i, l, s, p);
                    var d = i[p],
                        g = a && a[p],
                        m = d.length,
                        v = a && g.length;
                    s.x = d[m - 2], s.y = d[m - 1], s.bx = M(d[m - 4]) || s.x, s.by = M(d[m - 3]) || s.y, l.bx = a && (M(g[v - 4]) || l.x), l.by = a && (M(g[v - 3]) || l.y), l.x = a && g[v - 2], l.y = a && g[v - 1]
                }
                return a || (r.curve = o(i)), a ? [i, a] : i
            }

            function D(t, e) {
                if (!e) return t;
                var n, r, i, o, a, s, l;
                for (t = j(t), i = 0, a = t.length; a > i; i++)
                    for (l = t[i], o = 1, s = l.length; s > o; o += 2) n = e.x(l[o], l[o + 1]), r = e.y(l[o], l[o + 1]), l[o] = n, l[o + 1] = r;
                return t
            }

            function $(t, e) {
                for (var n = [], r = 0, i = t.length; i - 2 * !e > r; r += 2) {
                    var o = [{
                        x: +t[r - 2],
                        y: +t[r - 1]
                    }, {
                        x: +t[r],
                        y: +t[r + 1]
                    }, {
                        x: +t[r + 2],
                        y: +t[r + 3]
                    }, {
                        x: +t[r + 4],
                        y: +t[r + 5]
                    }];
                    e ? r ? i - 4 == r ? o[3] = {
                        x: +t[0],
                        y: +t[1]
                    } : i - 2 == r && (o[2] = {
                        x: +t[0],
                        y: +t[1]
                    }, o[3] = {
                        x: +t[2],
                        y: +t[3]
                    }) : o[0] = {
                        x: +t[i - 2],
                        y: +t[i - 1]
                    } : i - 4 == r ? o[3] = o[2] : r || (o[0] = {
                        x: +t[r],
                        y: +t[r + 1]
                    }), n.push(["C", (-o[0].x + 6 * o[1].x + o[2].x) / 6, (-o[0].y + 6 * o[1].y + o[2].y) / 6, (o[1].x + 6 * o[2].x - o[3].x) / 6, (o[1].y + 6 * o[2].y - o[3].y) / 6, o[2].x, o[2].y])
                }
                return n
            }
            var N = e.prototype,
                L = t.is,
                P = t._.clone,
                O = "hasOwnProperty",
                q = /,?([a-z]),?/gi,
                M = parseFloat,
                z = Math,
                I = z.PI,
                R = z.min,
                H = z.max,
                G = z.pow,
                W = z.abs,
                U = s(1),
                X = s(),
                V = s(0, 1),
                Y = t._unit2px,
                Q = {
                    path: function (t) {
                        return t.attr("path")
                    },
                    circle: function (t) {
                        var e = Y(t);
                        return C(e.cx, e.cy, e.r)
                    },
                    ellipse: function (t) {
                        var e = Y(t);
                        return C(e.cx, e.cy, e.rx, e.ry)
                    },
                    rect: function (t) {
                        var e = Y(t);
                        return w(e.x, e.y, e.width, e.height, e.rx, e.ry)
                    },
                    image: function (t) {
                        var e = Y(t);
                        return w(e.x, e.y, e.width, e.height)
                    },
                    text: function (t) {
                        var e = t.node.getBBox();
                        return w(e.x, e.y, e.width, e.height)
                    },
                    g: function (t) {
                        var e = t.node.getBBox();
                        return w(e.x, e.y, e.width, e.height)
                    },
                    symbol: function (t) {
                        var e = t.getBBox();
                        return w(e.x, e.y, e.width, e.height)
                    },
                    line: function (t) {
                        return "M" + [t.attr("x1"), t.attr("y1"), t.attr("x2"), t.attr("y2")]
                    },
                    polyline: function (t) {
                        return "M" + t.attr("points")
                    },
                    polygon: function (t) {
                        return "M" + t.attr("points") + "z"
                    },
                    svg: function (t) {
                        var e = t.node.getBBox();
                        return w(e.x, e.y, e.width, e.height)
                    },
                    deflt: function (t) {
                        var e = t.node.getBBox();
                        return w(e.x, e.y, e.width, e.height)
                    }
                };
            t.path = n, t.path.getTotalLength = U, t.path.getPointAtLength = X, t.path.getSubpath = function (t, e, n) {
                if (this.getTotalLength(t) - n < 1e-6) return V(t, e).end;
                var r = V(t, n, 1);
                return e ? V(r, e).end : r
            }, N.getTotalLength = function () {
                return this.node.getTotalLength ? this.node.getTotalLength() : void 0
            }, N.getPointAtLength = function (t) {
                return X(this.attr("d"), t)
            }, N.getSubpath = function (e, n) {
                return t.path.getSubpath(this.attr("d"), e, n)
            }, t._.box = r, t.path.findDotsAtSegment = l, t.path.bezierBBox = u, t.path.isPointInsideBBox = c, t.path.isBBoxIntersect = f, t.path.intersection = v, t.path.intersectionNumber = y, t.path.isPointInside = b, t.path.getBBox = x, t.path.get = Q, t.path.toRelative = k, t.path.toAbsolute = T, t.path.toCubic = j, t.path.map = D, t.path.toString = i, t.path.clone = o
        }), r.plugin(function (t) {
            var e = Math.max,
                n = Math.min,
                r = function (t) {
                    if (this.items = [], this.length = 0, this.type = "set", t)
                        for (var e = 0, n = t.length; n > e; e++) t[e] && (this[this.items.length] = this.items[this.items.length] = t[e], this.length++)
                },
                i = r.prototype;
            i.push = function () {
                for (var t, e, n = 0, r = arguments.length; r > n; n++) t = arguments[n], t && (e = this.items.length, this[e] = this.items[e] = t, this.length++);
                return this
            }, i.pop = function () {
                return this.length && delete this[this.length--], this.items.pop()
            }, i.forEach = function (t, e) {
                for (var n = 0, r = this.items.length; r > n; n++)
                    if (t.call(e, this.items[n], n) === !1) return this;
                return this
            }, i.remove = function () {
                for (; this.length;) this.pop().remove();
                return this
            }, i.attr = function (t) {
                for (var e = 0, n = this.items.length; n > e; e++) this.items[e].attr(t);
                return this
            }, i.clear = function () {
                for (; this.length;) this.pop()
            }, i.splice = function (t, i) {
                t = 0 > t ? e(this.length + t, 0) : t, i = e(0, n(this.length - t, i));
                var o, a = [],
                    s = [],
                    l = [];
                for (o = 2; o < arguments.length; o++) l.push(arguments[o]);
                for (o = 0; i > o; o++) s.push(this[t + o]);
                for (; o < this.length - t; o++) a.push(this[t + o]);
                var u = l.length;
                for (o = 0; o < u + a.length; o++) this.items[t + o] = this[t + o] = u > o ? l[o] : a[o - u];
                for (o = this.items.length = this.length -= i - u; this[o];) delete this[o++];
                return new r(s)
            }, i.exclude = function (t) {
                for (var e = 0, n = this.length; n > e; e++)
                    if (this[e] == t) return this.splice(e, 1), !0;
                return !1
            }, i.insertAfter = function (t) {
                for (var e = this.items.length; e--;) this.items[e].insertAfter(t);
                return this
            }, i.getBBox = function () {
                for (var t = [], r = [], i = [], o = [], a = this.items.length; a--;)
                    if (!this.items[a].removed) {
                        var s = this.items[a].getBBox();
                        t.push(s.x), r.push(s.y), i.push(s.x + s.width), o.push(s.y + s.height)
                    }
                return t = n.apply(0, t), r = n.apply(0, r), i = e.apply(0, i), o = e.apply(0, o), {
                    x: t,
                    y: r,
                    x2: i,
                    y2: o,
                    width: i - t,
                    height: o - r,
                    cx: t + (i - t) / 2,
                    cy: r + (o - r) / 2
                }
            }, i.clone = function (t) {
                t = new r;
                for (var e = 0, n = this.items.length; n > e; e++) t.push(this.items[e].clone());
                return t
            }, i.toString = function () {
                return "Snap\u2018s set"
            }, i.type = "set", t.set = function () {
                var t = new r;
                return arguments.length && t.push.apply(t, Array.prototype.slice.call(arguments, 0)), t
            }
        }), r.plugin(function (t, e) {
            function n(t) {
                var e = t[0];
                switch (e.toLowerCase()) {
                case "t":
                    return [e, 0, 0];
                case "m":
                    return [e, 1, 0, 0, 1, 0, 0];
                case "r":
                    return 4 == t.length ? [e, 0, t[2], t[3]] : [e, 0];
                case "s":
                    return 5 == t.length ? [e, 1, 1, t[3], t[4]] : 3 == t.length ? [e, 1, 1] : [e, 1]
                }
            }

            function r(e, r, i) {
                r = f(r).replace(/\.{3}|\u2026/g, e), e = t.parseTransformString(e) || [], r = t.parseTransformString(r) || [];
                for (var o, a, u, c, p = Math.max(e.length, r.length), h = [], d = [], g = 0; p > g; g++) {
                    if (u = e[g] || n(r[g]), c = r[g] || n(u), u[0] != c[0] || "r" == u[0].toLowerCase() && (u[2] != c[2] || u[3] != c[3]) || "s" == u[0].toLowerCase() && (u[3] != c[3] || u[4] != c[4])) {
                        e = t._.transform2matrix(e, i()), r = t._.transform2matrix(r, i()), h = [
                            ["m", e.a, e.b, e.c, e.d, e.e, e.f]
                        ], d = [
                            ["m", r.a, r.b, r.c, r.d, r.e, r.f]
                        ];
                        break
                    }
                    for (h[g] = [], d[g] = [], o = 0, a = Math.max(u.length, c.length); a > o; o++) o in u && (h[g][o] = u[o]), o in c && (d[g][o] = c[o])
                }
                return {
                    from: l(h),
                    to: l(d),
                    f: s(h)
                }
            }

            function i(t) {
                return t
            }

            function o(t) {
                return function (e) {
                    return +e.toFixed(3) + t
                }
            }

            function a(e) {
                return t.rgb(e[0], e[1], e[2])
            }

            function s(t) {
                var e, n, r, i, o, a, s = 0,
                    l = [];
                for (e = 0, n = t.length; n > e; e++) {
                    for (o = "[", a = ['"' + t[e][0] + '"'], r = 1, i = t[e].length; i > r; r++) a[r] = "val[" + s+++"]";
                    o += a + "]", l[e] = o
                }
                return Function("val", "return Snap.path.toString.call([" + l + "])")
            }

            function l(t) {
                for (var e = [], n = 0, r = t.length; r > n; n++)
                    for (var i = 1, o = t[n].length; o > i; i++) e.push(t[n][i]);
                return e
            }
            var u = {},
                c = /[a-z]+$/i,
                f = String;
            u.stroke = u.fill = "colour", e.prototype.equal = function (e, n) {
                var p, h, d = f(this.attr(e) || ""),
                    g = this;
                if (d == +d && n == +n) return {
                    from: +d,
                    to: +n,
                    f: i
                };
                if ("colour" == u[e]) return p = t.color(d), h = t.color(n), {
                    from: [p.r, p.g, p.b, p.opacity],
                    to: [h.r, h.g, h.b, h.opacity],
                    f: a
                };
                if ("transform" == e || "gradientTransform" == e || "patternTransform" == e) return n instanceof t.Matrix && (n = n.toTransformString()), t._.rgTransform.test(n) || (n = t._.svgTransform2string(n)), r(d, n, function () {
                    return g.getBBox(1)
                });
                if ("d" == e || "path" == e) return p = t.path.toCubic(d, n), {
                    from: l(p[0]),
                    to: l(p[1]),
                    f: s(p[0])
                };
                if ("points" == e) return p = f(d).split(","), h = f(n).split(","), {
                    from: p,
                    to: h,
                    f: function (t) {
                        return t
                    }
                };
                var m = d.match(c),
                    v = f(n).match(c);
                return m && m == v ? {
                    from: parseFloat(d),
                    to: parseFloat(n),
                    f: o(m)
                } : {
                    from: this.asPX(e),
                    to: this.asPX(e, n),
                    f: i
                }
            }
        }), r.plugin(function (t, n, r, i) {
            for (var o = n.prototype, a = "hasOwnProperty", s = ("createTouch" in i.doc), l = ["click", "dblclick", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "touchstart", "touchmove", "touchend", "touchcancel"], u = {
                mousedown: "touchstart",
                mousemove: "touchmove",
                mouseup: "touchend"
            }, c = function (t) {
                var e = "y" == t ? "scrollTop" : "scrollLeft";
                return i.doc.documentElement[e] || i.doc.body[e]
            }, f = function () {
                this.returnValue = !1
            }, p = function () {
                return this.originalEvent.preventDefault()
            }, h = function () {
                this.cancelBubble = !0
            }, d = function () {
                return this.originalEvent.stopPropagation()
            }, g = function () {
                return i.doc.addEventListener ? function (t, e, n, r) {
                    var i = s && u[e] ? u[e] : e,
                        o = function (i) {
                            var o = c("y"),
                                l = c("x");
                            if (s && u[a](e))
                                for (var f = 0, h = i.targetTouches && i.targetTouches.length; h > f; f++)
                                    if (i.targetTouches[f].target == t || t.contains(i.targetTouches[f].target)) {
                                        var g = i;
                                        i = i.targetTouches[f], i.originalEvent = g, i.preventDefault = p, i.stopPropagation = d;
                                        break
                                    }
                            var m = i.clientX + l,
                                v = i.clientY + o;
                            return n.call(r, i, m, v)
                        };
                    return e !== i && t.addEventListener(e, o, !1), t.addEventListener(i, o, !1),
                        function () {
                            return e !== i && t.removeEventListener(e, o, !1), t.removeEventListener(i, o, !1), !0
                        }
                } : i.doc.attachEvent ? function (t, e, n, r) {
                    var o = function (t) {
                        t = t || i.win.event;
                        var e = c("y"),
                            o = c("x"),
                            a = t.clientX + o,
                            s = t.clientY + e;
                        return t.preventDefault = t.preventDefault || f, t.stopPropagation = t.stopPropagation || h, n.call(r, t, a, s)
                    };
                    t.attachEvent("on" + e, o);
                    var a = function () {
                        return t.detachEvent("on" + e, o), !0
                    };
                    return a
                } : void 0
            }(), m = [], v = function (n) {
                for (var r, i = n.clientX, o = n.clientY, a = c("y"), l = c("x"), u = m.length; u--;) {
                    if (r = m[u], s) {
                        for (var f, p = n.touches && n.touches.length; p--;)
                            if (f = n.touches[p], f.identifier == r.el._drag.id || r.el.node.contains(f.target)) {
                                i = f.clientX, o = f.clientY, (n.originalEvent ? n.originalEvent : n).preventDefault();
                                break
                            }
                    } else n.preventDefault(); {
                        var h = r.el.node;
                        t._.glob, h.nextSibling, h.parentNode, h.style.display
                    }
                    i += l, o += a, e("snap.drag.move." + r.el.id, r.move_scope || r.el, i - r.el._drag.x, o - r.el._drag.y, i, o, n)
                }
            }, y = function (n) {
                t.unmousemove(v).unmouseup(y);
                for (var r, i = m.length; i--;) r = m[i], r.el._drag = {}, e("snap.drag.end." + r.el.id, r.end_scope || r.start_scope || r.move_scope || r.el, n);
                m = []
            }, F = l.length; F--;)! function (e) {
                t[e] = o[e] = function (n, r) {
                    return t.is(n, "function") && (this.events = this.events || [], this.events.push({
                        name: e,
                        f: n,
                        unbind: g(this.shape || this.node || i.doc, e, n, r || this)
                    })), this
                }, t["un" + e] = o["un" + e] = function (t) {
                    for (var n = this.events || [], r = n.length; r--;)
                        if (n[r].name == e && (n[r].f == t || !t)) return n[r].unbind(), n.splice(r, 1), !n.length && delete this.events, this;
                    return this
                }
            }(l[F]);
            o.hover = function (t, e, n, r) {
                return this.mouseover(t, n).mouseout(e, r || n)
            }, o.unhover = function (t, e) {
                return this.unmouseover(t).unmouseout(e)
            };
            var b = [];
            o.drag = function (n, r, i, o, a, s) {
                function l(l, u, c) {
                    (l.originalEvent || l).preventDefault(), this._drag.x = u, this._drag.y = c, this._drag.id = l.identifier, !m.length && t.mousemove(v).mouseup(y), m.push({
                        el: this,
                        move_scope: o,
                        start_scope: a,
                        end_scope: s
                    }), r && e.on("snap.drag.start." + this.id, r), n && e.on("snap.drag.move." + this.id, n), i && e.on("snap.drag.end." + this.id, i), e("snap.drag.start." + this.id, a || o || this, u, c, l)
                }
                if (!arguments.length) {
                    var u;
                    return this.drag(function (t, e) {
                        this.attr({
                            transform: u + (u ? "T" : "t") + [t, e]
                        })
                    }, function () {
                        u = this.transform().local
                    })
                }
                return this._drag = {}, b.push({
                    el: this,
                    start: l
                }), this.mousedown(l), this
            }, o.undrag = function () {
                for (var n = b.length; n--;) b[n].el == this && (this.unmousedown(b[n].start), b.splice(n, 1), e.unbind("snap.drag.*." + this.id));
                return !b.length && t.unmousemove(v).unmouseup(y), this
            }
        }), r.plugin(function (t, n, r) {
            var i = (n.prototype, r.prototype),
                o = /^\s*url\((.+)\)/,
                a = String,
                s = t._.$;
            t.filter = {}, i.filter = function (e) {
                var r = this;
                "svg" != r.type && (r = r.paper);
                var i = t.parse(a(e)),
                    o = t._.id(),
                    l = (r.node.offsetWidth, r.node.offsetHeight, s("filter"));
                return s(l, {
                    id: o,
                    filterUnits: "userSpaceOnUse"
                }), l.appendChild(i.node), r.defs.appendChild(l), new n(l)
            }, e.on("snap.util.getattr.filter", function () {
                e.stop();
                var n = s(this.node, "filter");
                if (n) {
                    var r = a(n).match(o);
                    return r && t.select(r[1])
                }
            }), e.on("snap.util.attr.filter", function (r) {
                if (r instanceof n && "filter" == r.type) {
                    e.stop();
                    var i = r.node.id;
                    i || (s(r.node, {
                        id: r.id
                    }), i = r.id), s(this.node, {
                        filter: t.url(i)
                    })
                }
                r && "none" != r || (e.stop(), this.node.removeAttribute("filter"))
            }), t.filter.blur = function (e, n) {
                null == e && (e = 2);
                var r = null == n ? e : [e, n];
                return t.format('<feGaussianBlur stdDeviation="{def}"/>', {
                    def: r
                })
            }, t.filter.blur.toString = function () {
                return this()
            }, t.filter.shadow = function (e, n, r, i) {
                return i = i || "#000", null == r && (r = 4), "string" == typeof r && (i = r, r = 4), null == e && (e = 0, n = 2), null == n && (n = e), i = t.color(i), t.format('<feGaussianBlur in="SourceAlpha" stdDeviation="{blur}"/><feOffset dx="{dx}" dy="{dy}" result="offsetblur"/><feFlood flood-color="{color}"/><feComposite in2="offsetblur" operator="in"/><feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>', {
                    color: i,
                    dx: e,
                    dy: n,
                    blur: r
                })
            }, t.filter.shadow.toString = function () {
                return this()
            }, t.filter.grayscale = function (e) {
                return null == e && (e = 1), t.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {b} {h} 0 0 0 0 0 1 0"/>', {
                    a: .2126 + .7874 * (1 - e),
                    b: .7152 - .7152 * (1 - e),
                    c: .0722 - .0722 * (1 - e),
                    d: .2126 - .2126 * (1 - e),
                    e: .7152 + .2848 * (1 - e),
                    f: .0722 - .0722 * (1 - e),
                    g: .2126 - .2126 * (1 - e),
                    h: .0722 + .9278 * (1 - e)
                })
            }, t.filter.grayscale.toString = function () {
                return this()
            }, t.filter.sepia = function (e) {
                return null == e && (e = 1), t.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {h} {i} 0 0 0 0 0 1 0"/>', {
                    a: .393 + .607 * (1 - e),
                    b: .769 - .769 * (1 - e),
                    c: .189 - .189 * (1 - e),
                    d: .349 - .349 * (1 - e),
                    e: .686 + .314 * (1 - e),
                    f: .168 - .168 * (1 - e),
                    g: .272 - .272 * (1 - e),
                    h: .534 - .534 * (1 - e),
                    i: .131 + .869 * (1 - e)
                })
            }, t.filter.sepia.toString = function () {
                return this()
            }, t.filter.saturate = function (e) {
                return null == e && (e = 1), t.format('<feColorMatrix type="saturate" values="{amount}"/>', {
                    amount: 1 - e
                })
            }, t.filter.saturate.toString = function () {
                return this()
            }, t.filter.hueRotate = function (e) {
                return e = e || 0, t.format('<feColorMatrix type="hueRotate" values="{angle}"/>', {
                    angle: e
                })
            }, t.filter.hueRotate.toString = function () {
                return this()
            }, t.filter.invert = function (e) {
                return null == e && (e = 1), t.format('<feComponentTransfer><feFuncR type="table" tableValues="{amount} {amount2}"/><feFuncG type="table" tableValues="{amount} {amount2}"/><feFuncB type="table" tableValues="{amount} {amount2}"/></feComponentTransfer>', {
                    amount: e,
                    amount2: 1 - e
                })
            }, t.filter.invert.toString = function () {
                return this()
            }, t.filter.brightness = function (e) {
                return null == e && (e = 1), t.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}"/><feFuncG type="linear" slope="{amount}"/><feFuncB type="linear" slope="{amount}"/></feComponentTransfer>', {
                    amount: e
                })
            }, t.filter.brightness.toString = function () {
                return this()
            }, t.filter.contrast = function (e) {
                return null == e && (e = 1), t.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}" intercept="{amount2}"/><feFuncG type="linear" slope="{amount}" intercept="{amount2}"/><feFuncB type="linear" slope="{amount}" intercept="{amount2}"/></feComponentTransfer>', {
                    amount: e,
                    amount2: .5 - e / 2
                })
            }, t.filter.contrast.toString = function () {
                return this()
            }
        }), r
    }), window.scrollReveal = function (t) {
        "use strict";

        function e(e) {
            this.docElem = t.document.documentElement, this.options = this.extend(this.defaults, e), this.styleBank = [], 1 == this.options.init && this.init()
        }
        return e.prototype = {
            defaults: {
                after: "0s",
                enter: "bottom",
                move: "24px",
                over: "0.66s",
                easing: "ease-in-out",
                viewportFactor: .33,
                reset: !1,
                init: !0
            },
            init: function () {
                this.scrolled = !1;
                var e = this;
                this.elems = Array.prototype.slice.call(this.docElem.querySelectorAll("[data-scroll-reveal]")), this.elems.forEach(function (t) {
                    e.styleBank[t] || (e.styleBank[t] = t.getAttribute("style")), e.update(t)
                });
                var n = function () {
                        e.scrolled || (e.scrolled = !0, setTimeout(function () {
                            e._scrollPage()
                        }, 60))
                    },
                    r = function () {
                        function t() {
                            e._scrollPage(), e.resizeTimeout = null
                        }
                        e.resizeTimeout && clearTimeout(e.resizeTimeout), e.resizeTimeout = setTimeout(t, 200)
                    };
                t.addEventListener("scroll", n, !1), t.addEventListener("resize", r, !1)
            },
            _scrollPage: function () {
                var t = this;
                this.elems.forEach(function (e) {
                    t.update(e)
                }), this.scrolled = !1
            },
            parseLanguage: function (t) {
                function e(t) {
                    var e = [],
                        n = ["from", "the", "and", "then", "but", "with"];
                    return t.forEach(function (t) {
                        n.indexOf(t) > -1 || e.push(t)
                    }), e
                }
                var n = t.getAttribute("data-scroll-reveal").split(/[, ]+/),
                    r = {};
                return n = e(n), n.forEach(function (t, e) {
                    switch (t) {
                    case "enter":
                        return void(r.enter = n[e + 1]);
                    case "after":
                        return void(r.after = n[e + 1]);
                    case "wait":
                        return void(r.after = n[e + 1]);
                    case "move":
                        return void(r.move = n[e + 1]);
                    case "ease":
                        return r.move = n[e + 1], void(r.ease = "ease");
                    case "ease-in":
                        return r.move = n[e + 1], void(r.easing = "ease-in");
                    case "ease-in-out":
                        return r.move = n[e + 1], void(r.easing = "ease-in-out");
                    case "ease-out":
                        return r.move = n[e + 1], void(r.easing = "ease-out");
                    case "over":
                        return void(r.over = n[e + 1]);
                    case "emit":
                        return void(r.emit = n[e + 1]);
                    default:
                        return
                    }
                }), r
            },
            update: function (e) {
                var n = this.genCSS(e),
                    r = this.styleBank[e];
                if (null != r ? r += ";" : r = "", e.getAttribute("data-scroll-reveal-initialized") || (e.setAttribute("style", r + n.initial), e.setAttribute("data-scroll-reveal-initialized", !0)), !this.isElementInViewport(e, this.options.viewportFactor)) return void(this.options.reset && e.setAttribute("style", r + n.initial + n.reset));
                if (!e.getAttribute("data-scroll-reveal-complete") && this.isElementInViewport(e, this.options.viewportFactor)) {
                    if (e.setAttribute("style", r + n.target + n.transition), n.emitter) {
                        var i = t[n.emitter];
                        "function" == typeof i && i()
                    }
                    return void(this.options.reset || setTimeout(function () {
                        "" != r ? e.setAttribute("style", r) : e.removeAttribute("style"), e.setAttribute("data-scroll-reveal-complete", !0)
                    }, n.totalDuration))
                }
            },
            genCSS: function (t) {
                var e, n, r, i = this.parseLanguage(t);
                i.enter ? (("top" == i.enter || "bottom" == i.enter) && (e = i.enter, n = "y"), ("left" == i.enter || "right" == i.enter) && (e = i.enter, n = "x")) : (("top" == this.options.enter || "bottom" == this.options.enter) && (e = this.options.enter, n = "y"), ("left" == this.options.enter || "right" == this.options.enter) && (e = this.options.enter, n = "x")), i.emit && (r = i.emit), ("top" == e || "left" == e) && (i.move = i.move ? "-" + i.move : "-" + this.options.move);
                var o = i.move || this.options.move,
                    a = i.over || this.options.over,
                    s = i.after || this.options.after,
                    l = i.easing || this.options.easing,
                    u = "-webkit-transition: -webkit-transform " + a + " " + l + " " + s + ",  opacity " + a + " " + l + " " + s + ";transition: transform " + a + " " + l + " " + s + ", opacity " + a + " " + l + " " + s + ";-webkit-perspective: 1000;-webkit-backface-visibility: hidden;",
                    c = "-webkit-transition: -webkit-transform " + a + " " + l + " 0s,  opacity " + a + " " + l + " " + s + ";transition: transform " + a + " " + l + " 0s,  opacity " + a + " " + l + " " + s + ";-webkit-perspective: 1000;-webkit-backface-visibility: hidden;",
                    f = "-webkit-transform: translate" + n + "(" + o + ");transform: translate" + n + "(" + o + ");opacity: 0;",
                    p = "-webkit-transform: translate" + n + "(0);transform: translate" + n + "(0);opacity: 1;";
                return {
                    transition: u,
                    initial: f,
                    target: p,
                    reset: c,
                    emitter: r,
                    totalDuration: 1e3 * (parseFloat(a) + parseFloat(s))
                }
            },
            getViewportH: function () {
                var e = this.docElem.clientHeight,
                    n = t.innerHeight;
                return n > e ? n : e
            },
            getOffset: function (t) {
                var e = 0,
                    n = 0;
                do isNaN(t.offsetTop) || (e += t.offsetTop), isNaN(t.offsetLeft) || (n += t.offsetLeft); while (t = t.offsetParent);
                return {
                    top: e,
                    left: n
                }
            },
            isElementInViewport: function (e, n) {
                var r = t.pageYOffset,
                    i = r + this.getViewportH(),
                    o = e.offsetHeight,
                    a = this.getOffset(e).top,
                    s = a + o,
                    n = n || 0;
                return i >= a + o * n && s >= r || "fixed" == (e.currentStyle ? e.currentStyle : t.getComputedStyle(e, null)).position
            },
            extend: function (t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                return t
            }
        }, e
    }(window),
    function (t, e) {
        if ("object" == typeof exports && exports) e(exports);
        else {
            var n = {};
            e(n), "function" == typeof define && define.amd ? define(n) : t.Mustache = n
        }
    }(this, function (t) {
        function e(t, e) {
            return F.call(t, e)
        }

        function n(t) {
            return !e(g, t)
        }

        function r(t) {
            return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
        }

        function i(t) {
            return String(t).replace(/[&<>"'\/]/g, function (t) {
                return w[t]
            })
        }

        function o(t) {
            this.string = t, this.tail = t, this.pos = 0
        }

        function a(t, e) {
            this.view = t || {}, this.parent = e, this._cache = {}
        }

        function s() {
            this.clearCache()
        }

        function l(e, n, r, i) {
            for (var o, a, s, u = "", c = 0, f = e.length; f > c; ++c) switch (o = e[c], a = o[1], o[0]) {
            case "#":
                if (s = r.lookup(a), "object" == typeof s)
                    if (x(s))
                        for (var p = 0, h = s.length; h > p; ++p) u += l(o[4], n, r.push(s[p]), i);
                    else s && (u += l(o[4], n, r.push(s), i));
                else if ("function" == typeof s) {
                    var d = null == i ? null : i.slice(o[3], o[5]);
                    s = s.call(r.view, d, function (t) {
                        return n.render(t, r)
                    }), null != s && (u += s)
                } else s && (u += l(o[4], n, r, i));
                break;
            case "^":
                s = r.lookup(a), (!s || x(s) && 0 === s.length) && (u += l(o[4], n, r, i));
                break;
            case ">":
                s = n.getPartial(a), "function" == typeof s && (u += s(r));
                break;
            case "&":
                s = r.lookup(a), null != s && (u += s);
                break;
            case "name":
                s = r.lookup(a), null != s && (u += t.escape(s));
                break;
            case "text":
                u += a
            }
            return u
        }

        function u(t) {
            for (var e, n = [], r = n, i = [], o = 0, a = t.length; a > o; ++o) switch (e = t[o], e[0]) {
            case "#":
            case "^":
                i.push(e), r.push(e), r = e[4] = [];
                break;
            case "/":
                var s = i.pop();
                s[5] = e[2], r = i.length > 0 ? i[i.length - 1][4] : n;
                break;
            default:
                r.push(e)
            }
            return n
        }

        function c(t) {
            for (var e, n, r = [], i = 0, o = t.length; o > i; ++i) e = t[i], e && ("text" === e[0] && n && "text" === n[0] ? (n[1] += e[1], n[3] = e[3]) : (n = e, r.push(e)));
            return r
        }

        function f(t) {
            return [new RegExp(r(t[0]) + "\\s*"), new RegExp("\\s*" + r(t[1]))]
        }

        function p(e, i) {
            function a() {
                if (T && !_)
                    for (; k.length;) delete C[k.pop()];
                else k = [];
                T = !1, _ = !1
            }
            if (e = e || "", i = i || t.tags, "string" == typeof i && (i = i.split(d)), 2 !== i.length) throw new Error("Invalid tags: " + i.join(", "));
            for (var s, l, p, g, F, b = f(i), x = new o(e), w = [], C = [], k = [], T = !1, _ = !1; !x.eos();) {
                if (s = x.pos, p = x.scanUntil(b[0]))
                    for (var A = 0, E = p.length; E > A; ++A) g = p.charAt(A), n(g) ? k.push(C.length) : _ = !0, C.push(["text", g, s, s + 1]), s += 1, "\n" == g && a();
                if (!x.scan(b[0])) break;
                if (T = !0, l = x.scan(y) || "name", x.scan(h), "=" === l ? (p = x.scanUntil(m), x.scan(m), x.scanUntil(b[1])) : "{" === l ? (p = x.scanUntil(new RegExp("\\s*" + r("}" + i[1]))), x.scan(v), x.scanUntil(b[1]), l = "&") : p = x.scanUntil(b[1]), !x.scan(b[1])) throw new Error("Unclosed tag at " + x.pos);
                if (F = [l, p, s, x.pos], C.push(F), "#" === l || "^" === l) w.push(F);
                else if ("/" === l) {
                    if (0 === w.length) throw new Error('Unopened section "' + p + '" at ' + s);
                    var B = w.pop();
                    if (B[1] !== p) throw new Error('Unclosed section "' + B[1] + '" at ' + s)
                } else if ("name" === l || "{" === l || "&" === l) _ = !0;
                else if ("=" === l) {
                    if (i = p.split(d), 2 !== i.length) throw new Error("Invalid tags at " + s + ": " + i.join(", "));
                    b = f(i)
                }
            }
            var B = w.pop();
            if (B) throw new Error('Unclosed section "' + B[1] + '" at ' + x.pos);
            return C = c(C), u(C)
        }
        var h = /\s*/,
            d = /\s+/,
            g = /\S/,
            m = /\s*=/,
            v = /\s*\}/,
            y = /#|\^|\/|>|\{|&|=|!/,
            F = RegExp.prototype.test,
            b = Object.prototype.toString,
            x = Array.isArray || function (t) {
                return "[object Array]" === b.call(t)
            },
            w = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;",
                "/": "&#x2F;"
            };
        o.prototype.eos = function () {
            return "" === this.tail
        }, o.prototype.scan = function (t) {
            var e = this.tail.match(t);
            return e && 0 === e.index ? (this.tail = this.tail.substring(e[0].length), this.pos += e[0].length, e[0]) : ""
        }, o.prototype.scanUntil = function (t) {
            var e, n = this.tail.search(t);
            switch (n) {
            case -1:
                e = this.tail, this.pos += this.tail.length, this.tail = "";
                break;
            case 0:
                e = "";
                break;
            default:
                e = this.tail.substring(0, n), this.tail = this.tail.substring(n), this.pos += n
            }
            return e
        }, a.make = function (t) {
            return t instanceof a ? t : new a(t)
        }, a.prototype.push = function (t) {
            return new a(t, this)
        }, a.prototype.lookup = function (t) {
            var e = this._cache[t];
            if (!e) {
                if ("." == t) e = this.view;
                else
                    for (var n = this; n;) {
                        if (t.indexOf(".") > 0) {
                            e = n.view;
                            for (var r = t.split("."), i = 0; e && i < r.length;) e = e[r[i++]]
                        } else e = n.view[t]; if (null != e) break;
                        n = n.parent
                    }
                this._cache[t] = e
            }
            return "function" == typeof e && (e = e.call(this.view)), e
        }, s.prototype.clearCache = function () {
            this._cache = {}, this._partialCache = {}
        }, s.prototype.compile = function (e, n) {
            var r = this._cache[e];
            if (!r) {
                var i = t.parse(e, n);
                r = this._cache[e] = this.compileTokens(i, e)
            }
            return r
        }, s.prototype.compilePartial = function (t, e, n) {
            var r = this.compile(e, n);
            return this._partialCache[t] = r, r
        }, s.prototype.getPartial = function (t) {
            return t in this._partialCache || !this._loadPartial || this.compilePartial(t, this._loadPartial(t)), this._partialCache[t]
        }, s.prototype.compileTokens = function (t, e) {
            var n = this;
            return function (r, i) {
                if (i)
                    if ("function" == typeof i) n._loadPartial = i;
                    else
                        for (var o in i) n.compilePartial(o, i[o]);
                return l(t, n, a.make(r), e)
            }
        }, s.prototype.render = function (t, e, n) {
            return this.compile(t)(e, n)
        }, t.name = "mustache.js", t.version = "0.7.2", t.tags = ["{{", "}}"], t.Scanner = o, t.Context = a, t.Writer = s, t.parse = p, t.escape = i;
        var C = new s;
        t.clearCache = function () {
            return C.clearCache()
        }, t.compile = function (t, e) {
            return C.compile(t, e)
        }, t.compilePartial = function (t, e, n) {
            return C.compilePartial(t, e, n)
        }, t.compileTokens = function (t, e) {
            return C.compileTokens(t, e)
        }, t.render = function (t, e, n) {
            return C.render(t, e, n)
        }, t.to_html = function (e, n, r, i) {
            var o = t.render(e, n, r);
            return "function" != typeof i ? o : void i(o)
        }
    }),
    function () {
        $(function () {
            var t;
            return $("#contact").length ? (t = $("#contact form button"), $("#contact form").submit(function (e) {
                return t.prop("disabled", !0), $.ajax({
                    type: "POST",
                    url: "https://mandrillapp.com/api/1.0/messages/send.json",
                    data: {
                        key: __env.MANDRILL_KEY,
                        message: {
                            subject: "Message from " + $("#name").val(),
                            from_email: $("#email").val(),
                            from_name: $("#name").val(),
                            to: [{
                                email: "support@divshot.com",
                                name: "Divshot",
                                type: "to"
                            }],
                            autotext: !0,
                            html: $("#message").val()
                        }
                    }
                }).done(function (e) {
                    return $("#email, #name, #message").val(""), "sent" === e[0].status ? t.html("<i class='flaticon solid checkmark-2'></i> Message Sent!") : t.prop("disabled", !1)
                }), e.preventDefault()
            })) : void 0
        })
    }.call(this),
    function () {
        $(function () {
            return $("#sign-up-form").attr("action", "" + __env.AUTH_ORIGIN + "/register"), $("#sign-up-github").attr("href", "" + __env.AUTH_ORIGIN + "/auth/github"), $("#sign-up-modal").on("show.bs.modal", function () {
                return $(".modal").modal("hide")
            }), $("#sign-up-modal").on("shown.bs.modal", function (t) {
                var e;
                return e = $(this).find("form"), $(this).find("#email").focus(), e.find("#returnUrl").val($(t.relatedTarget).data("return") ? $(t.relatedTarget).data("return") : "")
            }), $("#perk-modal").on("show.bs.modal", function (t) {
                var e, n, r, i;
                return i = $(t.relatedTarget).data("title"), e = $(t.relatedTarget).data("partner"), r = $(this).find(".perk-template").html(), Mustache.parse(r), n = Mustache.render("{{=<% %>=}}" + r, {
                    title: i,
                    partner: e
                }), $(this).find(".perk-content").html(n)
            })
        })
    }.call(this);
var npmMessages = ["[[;#F1F1F2;#646B6E]npm] [[;#B6F97A;#5C6268]http] [[;#FF93FB;transparent]GET] http://registry.npmjs.org/divshot-cli", "[[;#F1F1F2;#646B6E]npm] [[;#B6F97A;#5C6268]http] [[;#FF93FB;transparent]200] http://registry.npmjs.org/divshot-cli", "[[;#F1F1F2;#646B6E]npm] [[;#B6F97A;#5C6268]http] [[;#FF93FB;transparent]GET] http://registry.npmjs.org/regular", "[[;#F1F1F2;#646B6E]npm] [[;#B6F97A;#5C6268]http] [[;#FF93FB;transparent]GET] http://registry.npmjs.org/divshot", "[[;#F1F1F2;#646B6E]npm] [[;#B6F97A;#5C6268]http] [[;#FF93FB;transparent]GET] http://registry.npmjs.org/mkdirp", "[[;#F1F1F2;#646B6E]npm] [[;#B6F97A;#5C6268]http] [[;#FF93FB;transparent]GET] http://registry.npmjs.org/form-data", "[[;#F1F1F2;#646B6E]npm] [[;#B6F97A;#5C6268]http] [[;#FF93FB;transparent]GET] http://registry.npmjs.org/glob", "[[;#F1F1F2;#646B6E]npm] [[;#B6F97A;#5C6268]http] [[;#FF93FB;transparent]GET] http://registry.npmjs.org/fstream", "[[;#F1F1F2;#646B6E]npm] [[;#B6F97A;#5C6268]http] [[;#FF93FB;transparent]GET] http://registry.npmjs.org/archiver", "[[;#F1F1F2;#646B6E]npm] [[;#B6F97A;#5C6268]http] [[;#FF93FB;transparent]GET] https://github.com/divshot/node-tar/tarball/master", "[[;#F1F1F2;#646B6E]npm] [[;#B6F97A;#5C6268]http] [[;#FF93FB;transparent]GET] http://registry.npmjs.org/file", "[[;#F1F1F2;#646B6E]npm] [[;#B6F97A;#5C6268]http] [[;#FF93FB;transparent]GET] http://registry.npmjs.org/superstatic", "[[;#F1F1F2;#646B6E]npm] [[;#B6F97A;#5C6268]http] [[;#FF93FB;transparent]GET] http://registry.npmjs.org/commander", "[[;#F1F1F2;#646B6E]npm] [[;#B6F97A;#5C6268]http] [[;#FF93FB;transparent]GET] http://registry.npmjs.org/request", "[[;#F1F1F2;#646B6E]npm] [[;#B6F97A;#5C6268]http] [[;#FF93FB;transparent]GET] http://registry.npmjs.org/optimist", "[[;#F1F1F2;#646B6E]npm] [[;#B6F97A;#5C6268]http] [[;#FF93FB;transparent]GET] http://registry.npmjs.org/lodash", "[[;#F1F1F2;#646B6E]npm] [[;#B6F97A;#5C6268]http] [[;#FF93FB;transparent]GET] http://registry.npmjs.org/promptly", "[[;#F1F1F2;#646B6E]npm] [[;#B6F97A;#5C6268]http] [[;#FF93FB;transparent]GET] http://registry.npmjs.org/fstream-ignore/0.0.7", "[[;#F1F1F2;#646B6E]npm] [[;#B6F97A;#5C6268]http] [[;#FF93FB;transparent]GET] http://registry.npmjs.org/feedback/0.3.0", "[[;#F1F1F2;#646B6E]npm] [[;#B6F97A;#5C6268]http] [[;#FF93FB;transparent]GET] http://registry.npmjs.org/async", "[[;#F1F1F2;#646B6E]npm] [[;#B6F97A;#5C6268]http] [[;#FF93FB;transparent]GET] http://registry.npmjs.org/slug", "[[;#F1F1F2;#646B6E]npm] [[;#B6F97A;#5C6268]http] [[;#FF93FB;transparent]GET] http://registry.npmjs.org/moment", "[[;#F1F1F2;#646B6E]npm] [[;#B6F97A;#5C6268]http] [[;#FF93FB;transparent]GET] http://registry.npmjs.org/pretty-print/0.2.2", "[[;#F1F1F2;#646B6E]npm] [[;#B6F97A;#5C6268]http] [[;#FF93FB;transparent]GET] http://registry.npmjs.org/home-dir", "[[;#F1F1F2;#646B6E]npm] [[;#B6F97A;#5C6268]http] [[;#FF93FB;transparent]GET] http://registry.npmjs.org/minimatch", "[[;#F1F1F2;#646B6E]npm] [[;#B6F97A;#5C6268]http] [[;#FF93FB;transparent]GET] http://registry.npmjs.org/through", "[[;#F1F1F2;#646B6E]npm] [[;#B6F97A;#5C6268]http] [[;#FF93FB;transparent]GET] http://registry.npmjs.org/jsun", "[[;#F1F1F2;#646B6E]npm] [[;#B6F97A;#5C6268]http] [[;#FF93FB;transparent]GET] http://registry.npmjs.org/chalk", "[[;#F1F1F2;#646B6E]npm] [[;#B6F97A;#5C6268]http] [[;#FF93FB;transparent]GET] http://registry.npmjs.org/split", "[[;#F1F1F2;#646B6E]npm] [[;#B6F97A;#5C6268]http] [[;#FF93FB;transparent]GET] http://registry.npmjs.org/shrub", "[[;#F1F1F2;#646B6E]npm] [[;#B6F97A;#5C6268]http] [[;#FF93FB;transparent]GET] http://registry.npmjs.org/strip-ansi", "[[;#F1F1F2;#646B6E]npm] [[;#B6F97A;#5C6268]http] [[;#FF93FB;transparent]GET] http://registry.npmjs.org/feedback", "[[;#F1F1F2;#646B6E]npm] [[;#B6F97A;#5C6268]http] [[;#FF93FB;transparent]GET] http://registry.npmjs.org/colors", "[[;#F1F1F2;#646B6E]npm] [[;#B6F97A;#5C6268]http] [[;#FF93FB;transparent]GET] http://registry.npmjs.org/combined-stream", "[[;#F1F1F2;#646B6E]npm] [[;#B6F97A;#5C6268]http] [[;#FF93FB;transparent]GET] http://registry.npmjs.org/mime", "[[;#F1F1F2;#646B6E]npm] [[;#B6F97A;#5C6268]http] [[;#FF93FB;transparent]GET] https://github.com/divshot/node-tar/tarball/master", "[[;#F1F1F2;#646B6E]npm] [[;#B6F97A;#5C6268]http] [[;#FF93FB;transparent]200] http://registry.npmjs.org/has-color", "[[;#F1F1F2;#646B6E]npm] [[;#B6F97A;#5C6268]http] [[;#FF93FB;transparent]304] http://registry.npmjs.org/strip-ansi", "[[;#F1F1F2;#646B6E]npm] [[;#B6F97A;#5C6268]http] [[;#FF93FB;transparent]304] http://registry.npmjs.org/ansi-styles", "[[;#F1F1F2;#646B6E]npm] [[;#B6F97A;#5C6268]http] [[;#FF93FB;transparent]GET] http://registry.npmjs.org/zlib", "[[;#F1F1F2;#646B6E]npm] [[;#B6F97A;#5C6268]http] [[;#FF93FB;transparent]200] http://registry.npmjs.org/mime", "[[;#F1F1F2;#646B6E]npm] [[;#B6F97A;#5C6268]http] [[;#FF93FB;transparent]200] http://registry.npmjs.org/colors", "[[;#F1F1F2;#646B6E]npm] [[;#B6F97A;#5C6268]http] [[;#FF93FB;transparent]200] http://registry.npmjs.org/feedback", "[[;#F1F1F2;#646B6E]npm] [[;#B6F97A;#5C6268]http] [[;#FF93FB;transparent]GET] http://registry.npmjs.org/walk", "[[;#F1F1F2;#646B6E]npm] [[;#B6F97A;#5C6268]http] [[;#FF93FB;transparent]304] http://registry.npmjs.org/combined-stream", "[[;#F1F1F2;#646B6E]npm] [[;#B6F97A;#5C6268]http] [[;#FF93FB;transparent]GET] http://registry.npmjs.org/read", "[[;#F1F1F2;#646B6E]npm] [[;#B6F97A;#5C6268]http] [[;#FF93FB;transparent]GET] http://registry.npmjs.org/unicode", "[[;#F1F1F2;#646B6E]npm] [[;#B6F97A;#5C6268]http] [[;#FF93FB;transparent]200] http://registry.npmjs.org/zlib", "[[;#F1F1F2;#646B6E]npm] [[;#B6F97A;#5C6268]http] [[;#FF93FB;transparent]304] http://registry.npmjs.org/delayed-stream/0.0.5", "[[;#F1F1F2;#646B6E]npm] [[;#B6F97A;#5C6268]http] [[;#FF93FB;transparent]GET] http://registry.npmjs.org/block-stream", "[[;#F1F1F2;#646B6E]npm] [[;#B6F97A;#5C6268]http] [[;#FF93FB;transparent]200] http://registry.npmjs.org/minimist/-/minimist-0.0.8.tgz", "[[;#F1F1F2;#646B6E]npm] [[;#B6F97A;#5C6268]http] [[;#FF93FB;transparent]304] http://registry.npmjs.org/lodash.defaults", "[[;#F1F1F2;#646B6E]npm] [[;#B6F97A;#5C6268]http] [[;#FF93FB;transparent]304] http://registry.npmjs.org/sequence", "[[;#F1F1F2;#646B6E]npm] [[;#B6F97A;#5C6268]http] [[;#FF93FB;transparent]GET] http://registry.npmjs.org/readable-stream", "[[;#F1F1F2;#646B6E]npm] [[;#B6F97A;#5C6268]http] [[;#FF93FB;transparent]GET] http://registry.npmjs.org/iconv-lite", "[[;#F1F1F2;#646B6E]npm] [[;#B6F97A;#5C6268]http] [[;#FF93FB;transparent]200] http://registry.npmjs.org/narrator/0.5.11", "[[;#F1F1F2;#646B6E]npm] [[;#B6F97A;#5C6268]http] [[;#FF93FB;transparent]GET] http://registry.npmjs.org/narrator/-/narrator-0.5.11.tgz", "[[;#F1F1F2;#646B6E]npm] [[;#B6F97A;#5C6268]http] [[;#FF93FB;transparent]200] http://registry.npmjs.org/block-stream", "[[;#F1F1F2;#646B6E]npm] [[;#B6F97A;#5C6268]http] [[;#FF93FB;transparent]200] https://github.com/divshot/node-tar/tarball/master", "[[;#F1F1F2;#646B6E]npm] [[;#B6F97A;#5C6268]http] [[;#FF93FB;transparent]200] http://registry.npmjs.org/readable-stream", "[[;#F1F1F2;#646B6E]npm] [[;#B6F97A;#5C6268]http] [[;#FF93FB;transparent]200] http://registry.npmjs.org/iconv-lite", "[[;#F1F1F2;#646B6E]npm] [[;#B6F97A;#5C6268]http] [[;#FF93FB;transparent]GET] http://registry.npmjs.org/readable-stream/-/readable-stream-1.0.26.tgz", "[[;#F1F1F2;#646B6E]npm] [[;#B6F97A;#5C6268]http] [[;#FF93FB;transparent]200] http://registry.npmjs.org/narrator/-/narrator-0.5.11.tgz", "[[;#F1F1F2;#646B6E]npm] [[;#B6F97A;#5C6268]http] [[;#FF93FB;transparent]200] http://registry.npmjs.org/readable-stream/-/readable-stream-1.0.26.tgz", "[[;#F1F1F2;#646B6E]npm] [[;#B6F97A;#5C6268]http] [[;#FF93FB;transparent]GET] http://registry.npmjs.org/connect", "[[;#F1F1F2;#646B6E]npm] [[;#B6F97A;#5C6268]http] [[;#FF93FB;transparent]GET] http://registry.npmjs.org/hyperquest", "[[;#F1F1F2;#646B6E]npm] [[;#B6F97A;#5C6268]http] [[;#FF93FB;transparent]GET] http://registry.npmjs.org/chokidar", "[[;#F1F1F2;#646B6E]npm] [[;#B6F97A;#5C6268]http] [[;#FF93FB;transparent]GET] http://registry.npmjs.org/hyperquest", "[[;#F1F1F2;#646B6E]npm] [[;#B6F97A;#5C6268]http] [[;#FF93FB;transparent]GET] http://registry.npmjs.org/mix-into", "[[;#F1F1F2;#646B6E]npm] [[;#B6F97A;#5C6268]http] [[;#FF93FB;transparent]GET] http://registry.npmjs.org/tiny-element", "[[;#F1F1F2;#646B6E]npm] [[;#B6F97A;#5C6268]http] [[;#FF93FB;transparent]GET] http://registry.npmjs.org/JSONStream", "[[;#F1F1F2;#646B6E]npm] [[;#B6F97A;#5C6268]http] [[;#FF93FB;transparent]GET] http://registry.npmjs.org/as-stream", "[[;#F1F1F2;#646B6E]npm] [[;#B6F97A;#5C6268]http] [[;#FF93FB;transparent]GET] http://registry.npmjs.org/through2", "[[;#F1F1F2;#646B6E]npm] [[;#B6F97A;#5C6268]http] [[;#FF93FB;transparent]GET] http://registry.npmjs.org/filereader-stream/0.0.1", "[[;#F1F1F2;#646B6E]npm] [[;#B6F97A;#5C6268]http] [[;#FF93FB;transparent]GET] http://registry.npmjs.org/readable-stream/-/readable-stream-1.1.11.tgz", "[[;#F1F1F2;#646B6E]npm] [[;#B6F97A;#5C6268]http] [[;#FF93FB;transparent]200] http://registry.npmjs.org/tap-spec", "[[;#F1F1F2;#646B6E]npm] [[;#B6F97A;#5C6268]http] [[;#FF93FB;transparent]GET] http://registry.npmjs.org/hoek", "[[;#F1F1F2;#646B6E]npm] [[;#B6F97A;#5C6268]http] [[;#FF93FB;transparent]GET] http://registry.npmjs.org/boom", "[[;#F1F1F2;#646B6E]npm] [[;#B6F97A;#5C6268]http] [[;#FF93FB;transparent]GET] http://registry.npmjs.org/sntp", "[[;#F1F1F2;#646B6E]npm] [[;#B6F97A;#5C6268]http] [[;#FF93FB;transparent]GET] http://registry.npmjs.org/cryptiles", "[[;#F1F1F2;#646B6E]npm] [[;#B6F97A;#5C6268]http] [[;#FF93FB;transparent]GET] http://registry.npmjs.org/debuglog/-/debuglog-0.0.2.tgz", "[[;#F1F1F2;#646B6E]npm] [[;#B6F97A;#5C6268]http] [[;#FF93FB;transparent]GET] http://registry.npmjs.org/lodash._objecttypes", "[[;#F1F1F2;#646B6E]npm] [[;#B6F97A;#5C6268]http] [[;#FF93FB;transparent]GET] http://registry.npmjs.org/lodash.keys", "[[;#F1F1F2;#646B6E]npm] [[;#B6F97A;#5C6268]http] [[;#FF93FB;transparent]200] http://registry.npmjs.org/qs/0.6.5", "[[;#F1F1F2;#646B6E]npm] [[;#B6F97A;#5C6268]http] [[;#FF93FB;transparent]GET] http://registry.npmjs.org/qs/-/qs-0.6.5.tgz", "[[;#F1F1F2;#646B6E]npm] [[;#B6F97A;#5C6268]http] [[;#FF93FB;transparent]200] http://registry.npmjs.org/object-keys", "[[;#F1F1F2;#646B6E]npm] [[;#B6F97A;#5C6268]http] [[;#FF93FB;transparent]200] http://registry.npmjs.org/cookie-signature/1.0.1", "[[;#F1F1F2;#646B6E]npm] [[;#B6F97A;#5C6268]http] [[;#FF93FB;transparent]GET] http://registry.npmjs.org/tap-parser", "[[;#F1F1F2;#646B6E]npm] [[;#B6F97A;#5C6268]http] [[;#FF93FB;transparent]GET] http://registry.npmjs.org/cookie-signature/-/cookie-signature-1.0.1.tgz", "[[;#F1F1F2;#646B6E]npm] [[;#B6F97A;#5C6268]http] [[;#FF93FB;transparent]200] http://registry.npmjs.org/buffer-crc32/0.2.1", "[[;#F1F1F2;#646B6E]npm] [[;#B6F97A;#5C6268]http] [[;#FF93FB;transparent]GET] http://registry.npmjs.org/buffer-crc32/-/buffer-crc32-0.2.1.tgz", "[[;#F1F1F2;#646B6E]npm] [[;#B6F97A;#5C6268]http] [[;#FF93FB;transparent]304] http://registry.npmjs.org/cookie/0.1.0", "[[;#F1F1F2;#646B6E]npm] [[;#B6F97A;#5C6268]http] [[;#FF93FB;transparent]200] http://registry.npmjs.org/send/0.1.4", "[[;#F1F1F2;#646B6E]npm] [[;#B6F97A;#5C6268]http] [[;#FF93FB;transparent]304] http://registry.npmjs.org/bytes/0.2.0", "[[;#F1F1F2;#646B6E]npm] [[;#B6F97A;#5C6268]http] [[;#FF93FB;transparent]GET] http://registry.npmjs.org/send/-/send-0.1.4.tgz", "[[;#F1F1F2;#646B6E]npm] [[;#B6F97A;#5C6268]http] [[;#FF93FB;transparent]200] http://registry.npmjs.org/hoek", "[[;#F1F1F2;#646B6E]npm] [[;#B6F97A;#5C6268]http] [[;#FF93FB;transparent]200] http://registry.npmjs.org/fresh/0.2.0", "[[;#F1F1F2;#646B6E]npm] [[;#B6F97A;#5C6268]http] [[;#FF93FB;transparent]GET] http://registry.npmjs.org/fresh/-/fresh-0.2.0.tgz", "[[;#F1F1F2;#646B6E]npm] [[;#B6F97A;#5C6268]http] [[;#FF93FB;transparent]200] http://registry.npmjs.org/pause/0.0.1", "[[;#F1F1F2;#646B6E]npm] [[;#B6F97A;#5C6268]http] [[;#FF93FB;transparent]GET] http://registry.npmjs.org/pause/-/pause-0.0.1.tgz", "[[;#F1F1F2;#646B6E]npm] [[;#B6F97A;#5C6268]http] [[;#FF93FB;transparent]200] http://registry.npmjs.org/methods/0.0.1", "[[;#F1F1F2;#646B6E]npm] [[;#B6F97A;#5C6268]http] [[;#FF93FB;transparent]200] http://registry.npmjs.org/uid2/0.0.2", "[[;#F1F1F2;#646B6E]npm] [[;#B6F97A;#5C6268]http] [[;#FF93FB;transparent]304] http://registry.npmjs.org/raw-body/0.0.3", "[[;#F1F1F2;#646B6E]npm] [[;#B6F97A;#5C6268]http] [[;#FF93FB;transparent]GET] http://registry.npmjs.org/methods/-/methods-0.0.1.tgz", "[[;#F1F1F2;#646B6E]npm] [[;#B6F97A;#5C6268]http] [[;#FF93FB;transparent]GET] http://registry.npmjs.org/uid2/-/uid2-0.0.2.tgz", "[[;#F1F1F2;#646B6E]npm] [[;#B6F97A;#5C6268]http] [[;#FF93FB;transparent]304] http://registry.npmjs.org/negotiator/0.2.8", "[[;#F1F1F2;#646B6E]npm] [[;#B6F97A;#5C6268]http] [[;#FF93FB;transparent]200] http://registry.npmjs.org/debug", "[[;#F1F1F2;#646B6E]npm] [[;#B6F97A;#5C6268]http] [[;#FF93FB;transparent]304] http://registry.npmjs.org/multiparty/2.2.0", "[[;#F1F1F2;#646B6E]npm] [[;#B6F97A;#5C6268]http] [[;#FF93FB;transparent]200] http://registry.npmjs.org/qs/-/qs-0.6.5.tgz", "[[;#F1F1F2;#646B6E]npm] [[;#B6F97A;#5C6268]http] [[;#FF93FB;transparent]200] http://registry.npmjs.org/cookie-signature/-/cookie-signature-1.0.1.tgz", "[[;#F1F1F2;#646B6E]npm] [[;#B6F97A;#5C6268]http] [[;#FF93FB;transparent]200] http://registry.npmjs.org/lodash._objecttypes", "[[;#F1F1F2;#646B6E]npm] [[;#B6F97A;#5C6268]http] [[;#FF93FB;transparent]200] http://registry.npmjs.org/debuglog/-/debuglog-0.0.2.tgz", "[[;#F1F1F2;#646B6E]npm] [[;#B6F97A;#5C6268]http] [[;#FF93FB;transparent]200] http://registry.npmjs.org/buffer-crc32/-/buffer-crc32-0.2.1.tgz", "[[;#F1F1F2;#646B6E]npm] [[;#B6F97A;#5C6268]http] [[;#FF93FB;transparent]200] http://registry.npmjs.org/send/-/send-0.1.4.tgz", "[[;#F1F1F2;#646B6E]npm] [[;#B6F97A;#5C6268]http] [[;#FF93FB;transparent]GET] http://registry.npmjs.org/url-join/-/url-join-0.0.1.tgz", "[[;#F1F1F2;#646B6E]npm] [[;#B6F97A;#5C6268]http] [[;#FF93FB;transparent]304] http://registry.npmjs.org/browser-request", "[[;#F1F1F2;#646B6E]npm] [[;#B6F97A;#5C6268]http] [[;#FF93FB;transparent]200] http://registry.npmjs.org/extend", "[[;#F1F1F2;#646B6E]npm] [[;#B6F97A;#5C6268]http] [[;#FF93FB;transparent]200] http://registry.npmjs.org/lodash._shimkeys", "[[;#F1F1F2;#646B6E]npm] [[;#B6F97A;#5C6268]http] [[;#FF93FB;transparent]200] http://registry.npmjs.org/jsonparse/-/jsonparse-0.0.5.tgz", "/usr/local/share/npm/bin/divshot -> /usr/local/share/npm/lib/node_modules/divshot-cli/bin/divshot.js", "\u251c\u2500\u2500 home-dir@0.1.2", "\u251c\u2500\u2500 jsun@0.1.0", "\u251c\u2500\u2500 drainer@0.1.0", "\u251c\u2500\u2500 regular@0.1.6", "\u251c\u2500\u2500 file@0.2.2", "\u251c\u2500\u2500 sizer@0.1.1", "\u251c\u2500\u2500 optimist@0.6.1 (wordwrap@0.0.2, minimist@0.0.8)", "\u251c\u2500\u2500 lodash@2.2.1", "\u251c\u2500\u2500 tarzan@0.1.3 (zlib@1.0.5)", "\u251c\u2500\u2500 archiver@0.4.10 (readable-stream@1.0.26, iconv-lite@0.2.11)", "\u251c\u2500\u2500 divshot@0.4.8 (lodash.defaults@2.2.1, narrator@0.5.11)", "\u251c\u2500\u2500 request@2.27.0 (json-stringify-safe@5.0.0, forever-agent@0.5.2, aws-sign@0.3.0, qs@0.6.6, tunnel-agent@0.3.0, oauth-sign@0.3.0, cookie-jar@0.3.0, node-uuid@1.4.1, mime@1.2.11, hawk@1.0.0, http-signature@0.10.0)", "\u251c\u2500\u2500 moment@2.4.0", "\u251c\u2500\u2500 superstatic@0.5.4 (colors@0.6.2, mime@1.2.11, chokidar@0.7.1, hyperquest@0.1.8, connect@2.9.2)", "\u251c\u2500\u2500 slug@0.3.4 (unicode@0.5.3)", "\u2514\u2500\u2500 divshot-upload@0.1.8 (as-stream@0.1.1, filereader-stream@0.0.1, mix-into@0.1.3, hyperquest@0.2.0, through2@0.4.1, readable-stream@1.1.11, JSONStream@0.7.1, tiny-element@0.1.3)"];
(function () {
    $(function () {
        return $(".rotate").textrotator({
            animation: "fade",
            separator: ",",
            interval: 5e3,
            speed: 320
        }), $(".counter").countTo({
            formatter: function (t, e) {
                return t = t.toFixed(e.decimals), t = t.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            }
        })
    })
}).call(this),
    function () {
        var t = [].slice;
        $(function () {
            var e, n, r;
            return e = function () {
                var e, n, r;
                return r = arguments[0], n = arguments[1], e = 3 <= arguments.length ? t.call(arguments, 2) : [], setTimeout.apply(null, [n, 1e3 * r].concat(t.call(e)))
            }, r = function () {
                return _.defer(function () {
                    return $("#intro .cli").css("height", $("#browser-preview img").height() + "px")
                })
            }, $("#intro .cli-wrapper").length ? (r(), $(window).load(function () {
                return r()
            }), $(window).resize(function () {
                return r()
            }), n = {
                prompt: "$ ",
                greetings: !1,
                onInit: function (t) {
                    return t.set_prompt(""), t.echo("Start building static web apps with Divshot in seconds."), t.echo("Just type `divshot init` below to get started."), e(0, function () {
                        return t.echo(" ")
                    }), e(0, function () {
                        return t.echo("Type [[b;#fec600;transparent]divshot init]")
                    }), e(0, function () {
                        return t.echo(" ")
                    }), e(0, function () {
                        return t.set_prompt("$ ")
                    })
                },
                onFocus: function () {
                    return analytics.track("Lander CLI Focused"), $(".cli").addClass("focus")
                },
                onBlur: function () {
                    return $(".cli").removeClass("focus")
                }
            }, $(".cli-wrapper").terminal(function (t, n) {
                analytics.track("Lander CLI Command", {
                    command: t
                }), "divshot init" === t ? (n.set_prompt(""), e(2, function () {
                    return n.echo(" ")
                }), e(2, function () {
                    return n.echo("Initiate a new [[;#A7D6FD;transparent]Divshot.io] app.")
                }), e(2, function () {
                    return n.echo(" ")
                }), e(2, function () {
                    return n.echo("name: (dojo)")
                }), e(3, function () {
                    return n.echo("app directory: (current)")
                }), e(4, function () {
                    return n.echo("clean urls: (y/n) y")
                }), e(5, function () {
                    return n.echo("error page: (url or path)")
                }), e(6, function () {
                    return n.echo("Would you like to create a Divshot.io app from this app?: (y/n) y")
                }), e(7, function () {
                    return n.echo(" ")
                }), e(8, function () {
                    return n.echo("[[b;#B6F972;transparent]Success:] [[;#A7D6FD;transparent]Divshot.io] app created")
                }), e(9, function () {
                    return n.echo(" ")
                }), e(10, function () {
                    return n.echo('echo "<iframe src="//www.youtube.com/embed/V8ZdGmgj0PQ" />" > index.html')
                }), e(11, function () {
                    return n.echo(" ")
                }), e(12, function () {
                    return n.echo('[[i;#fff;]"I know kung fu."]')
                }), e(13, function () {
                    return n.echo(" ")
                }), e(14, function () {
                    return n.echo("[[b;#fff;]Show me.]")
                }), e(15, function () {
                    return n.echo(" ")
                }), e(15, function () {
                    return n.echo("Type [[b;#fec600;transparent]divshot push]")
                }), e(15, function () {
                    return n.echo(" ")
                }), e(15, function () {
                    return n.set_prompt("$ ")
                })) : "divshot push" === t ? (n.set_prompt(""), e(2, function () {
                    return n.echo(" ")
                }), e(2, function () {
                    return n.echo("Build created")
                }), e(3, function () {
                    return n.echo("Deploying build ...")
                }), e(4, function () {
                    return n.echo("Ready to Extract Tape Archive... (spinning up read head and platter)")
                }), e(5, function () {
                    return n.echo("[[b;#B6F972;transparent]Success:] Deployed divshot.json")
                }), e(5.5, function () {
                    return n.echo("[[b;#B6F972;transparent]Success:] Deployed index.html")
                }), e(5.8, function () {
                    return n.echo("Finalizing build ...")
                }), e(6, function () {
                    return n.echo("Build finalized")
                }), e(6.2, function () {
                    return n.echo("Releasing build to development ...")
                }), e(6.5, function () {
                    return n.echo("Build released")
                }), e(7, function () {
                    return n.echo("[[b;#B6F972;transparent]Success:] Application deployed to [[;#fff;transparent]development]")
                }), e(8, function () {
                    return n.echo('You can view your app at:<br><a href="http://development.dojo.divshot.io" onclick="analytics.track(\'Clicked Dojo Link\')" target="_blank">http://development.dojo.divshot.io</a>', {
                        raw: !0
                    })
                }), e(8, function () {
                    return n.echo(" ")
                }), e(8, function () {
                    return n.set_prompt("$ ")
                })) : n.echo("I'm sorry, Dev. I'm afraid I can't do that.")
            }, n)) : void 0
        })
    }.call(this),
    function () {
        var t = [].slice;
        $(function () {
            var e, n;
            return e = function () {
                var e, n, r;
                return r = arguments[0], n = arguments[1], e = 3 <= arguments.length ? t.call(arguments, 2) : [], setTimeout.apply(null, [n, 1e3 * r].concat(t.call(e)))
            }, $("#features .cli-wrapper").length ? (n = {
                prompt: "$ ",
                greetings: !1,
                onInit: function (t) {
                    return t.set_prompt(""), e(0, function () {
                        return t.echo("Wake up, Dev...")
                    }), e(0, function () {
                        return t.echo("The Matrix has you...")
                    }), e(0, function () {
                        return t.echo(" ")
                    }), e(0, function () {
                        return t.echo("Type [[b;#fec600;transparent]npm install -g divshot-cli]")
                    }), e(0, function () {
                        return t.echo(" ")
                    }), e(0, function () {
                        return t.set_prompt("$ ")
                    })
                },
                onFocus: function () {
                    return analytics.track("Lander CLI Focused"), $(".cli").addClass("focus")
                },
                onBlur: function () {
                    return $(".cli").removeClass("focus")
                }
            }, $(".cli-wrapper").terminal(function (t, n) {
                return analytics.track("Lander CLI Command", {
                    command: t
                }), "npm install -g divshot-cli" === t ? (n.set_prompt(""), void _.each(npmMessages, function (t, r) {
                    return _.delay(function () {
                        return n.echo(t)
                    }, 10 * r), r === npmMessages.length - 1 ? (e(20 * r / 1e3 + 0, function () {
                        return n.echo(" ")
                    }), e(20 * r / 1e3 + 1.5, function () {
                        return n.echo("[[i;#fff;]Take the red pill]")
                    }), e(20 * r / 1e3 + 2, function () {
                        return n.echo("[[i;#fff;]and I show you how deep]")
                    }), e(20 * r / 1e3 + 2.5, function () {
                        return n.echo("[[i;#fff;]the rabbit-hole goes.]")
                    }), e(20 * r / 1e3 + 3, function () {
                        return n.echo(" ")
                    }), e(20 * r / 1e3 + 3, function () {
                        return n.echo("Type [[b;#fec600;transparent]divshot init]")
                    }), e(20 * r / 1e3 + 3, function () {
                        return n.echo(" ")
                    }), e(20 * r / 1e3 + 3, function () {
                        return n.set_prompt("$ ")
                    })) : void 0
                })) : void("divshot init" === t ? (n.set_prompt(""), e(2, function () {
                    return n.echo(" ")
                }), e(2, function () {
                    return n.echo("Initiate a new [[;#A7D6FD;transparent]Divshot.io] app.")
                }), e(2, function () {
                    return n.echo(" ")
                }), e(2, function () {
                    return n.echo("name: (dojo)")
                }), e(3, function () {
                    return n.echo("app directory: (current)")
                }), e(4, function () {
                    return n.echo("clean urls: (y/n) y")
                }), e(5, function () {
                    return n.echo("error page: (url or path)")
                }), e(6, function () {
                    return n.echo("Would you like to create a Divshot.io app from this app?: (y/n) y")
                }), e(7, function () {
                    return n.echo(" ")
                }), e(8, function () {
                    return n.echo("[[b;#B6F972;transparent]Success:] [[;#A7D6FD;transparent]Divshot.io] app created")
                }), e(9, function () {
                    return n.echo(" ")
                }), e(10, function () {
                    return n.echo('echo "<iframe src="//www.youtube.com/embed/V8ZdGmgj0PQ" />" > index.html')
                }), e(11, function () {
                    return n.echo(" ")
                }), e(12, function () {
                    return n.echo('[[i;#fff;]"I know kung fu."]')
                }), e(13, function () {
                    return n.echo(" ")
                }), e(14, function () {
                    return n.echo("[[b;#fff;]Show me.]")
                }), e(15, function () {
                    return n.echo(" ")
                }), e(15, function () {
                    return n.echo("Type [[b;#fec600;transparent]divshot push]")
                }), e(15, function () {
                    return n.echo(" ")
                }), e(15, function () {
                    return n.set_prompt("$ ")
                })) : "divshot push" === t ? (n.set_prompt(""), e(2, function () {
                    return n.echo(" ")
                }), e(2, function () {
                    return n.echo("Build created")
                }), e(3, function () {
                    return n.echo("Deploying build ...")
                }), e(4, function () {
                    return n.echo("Ready to Extract Tape Archive... (spinning up read head and platter)")
                }), e(5, function () {
                    return n.echo("[[b;#B6F972;transparent]Success:] Deployed divshot.json")
                }), e(5.5, function () {
                    return n.echo("[[b;#B6F972;transparent]Success:] Deployed index.html")
                }), e(5.8, function () {
                    return n.echo("Finalizing build ...")
                }), e(6, function () {
                    return n.echo("Build finalized")
                }), e(6.2, function () {
                    return n.echo("Releasing build to development ...")
                }), e(6.5, function () {
                    return n.echo("Build released")
                }), e(7, function () {
                    return n.echo("[[b;#B6F972;transparent]Success:] Application deployed to [[;#fff;transparent]development]")
                }), e(8, function () {
                    return n.echo('You can view your app at:<br><a href="http://development.dojo.divshot.io" onclick="analytics.track(\'Clicked Dojo Link\')" target="_blank">http://development.dojo.divshot.io</a>', {
                        raw: !0
                    })
                }), e(8, function () {
                    return n.echo(" ")
                }), e(8, function () {
                    return n.set_prompt("$ ")
                })) : n.echo("I'm sorry, Dev. I'm afraid I can't do that."))
            }, n)) : void 0
        })
    }.call(this),
    function () {
        $(function () {
            var t, e, n;
            if ($("#static-apps").length) return e = Snap("#static-apps"), n = $("#static-apps"), Snap.load(n.data("url"), function (t) {
                return e.append(t), e.attr({
                    opacity: .15
                })
            }), t = function () {
                return n.hasClass("active") ? void 0 : (_.each(e.selectAll("#Layer_3 rect"), function (t, e) {
                    var n;
                    return n = t.getBBox().width, t.attr({
                        width: 0
                    }), setTimeout(function () {
                        return function () {
                            return t.animate({
                                width: n
                            }, 600, mina.easeinout)
                        }
                    }(this), 10 * e)
                }), _.each(e.selectAll("#Layer_3 polygon, #Layer_3 polyline, #Layer_3 circle"), function (t, e) {
                    return t.transform("s0"), setTimeout(function () {
                        return function () {
                            return t.animate({
                                transform: "t0, scale(1)"
                            }, 320, mina.easeinout)
                        }
                    }(this), 22 * e)
                }), n.addClass("active"))
            }, window.appThumbnails = t
        })
    }.call(this),
    function () {
        $(function () {
            var t, e, n;
            if ($("#laptop-animation").length) return t = Snap("#laptop-animation"), e = $("#laptop-animation"), Snap.load(e.data("url"), function (e) {
                return t.append(e)
            }), n = function () {
                return e.hasClass("active") ? void 0 : (_.each(t.selectAll("#code-lines  > rect, #Line_graph rect, #Chat rect, #List rect"), function (t, e) {
                    var n;
                    return n = t.getBBox().width, t.attr({
                        width: 0
                    }), setTimeout(function () {
                        return function () {
                            return t.animate({
                                width: n
                            }, 1e3, mina.easeinout)
                        }
                    }(this), 33 * e)
                }), _.each(t.selectAll(".highlight rect"), function (t, e) {
                    var n;
                    return n = t.getBBox().width, t.attr({
                        width: 0
                    }), setTimeout(function () {
                        return function () {
                            return t.animate({
                                width: n
                            }, 1e3, mina.easeinout)
                        }
                    }(this), 33 * e)
                }), _.each(t.selectAll(".graph-point > path"), function (t, e) {
                    return t.transform("s0"), setTimeout(function () {
                        return function () {
                            return t.animate({
                                transform: "t0, scale(1)"
                            }, 320, mina.easeinout)
                        }
                    }(this), 100 * e)
                }), e.addClass("active"))
            }, window.laptopLoad = n
        })
    }.call(this),
    function () {
        $(function () {
            var t, e;
            if ($("#node-map").length) return t = Snap("#node-map"), Snap.load($("#node-map").data("url"), function (e) {
                return t.append(e)
            }), e = function () {
                return $("#node-map .pulse").length ? void 0 : $("#node-map").find("circle").each(function (t) {
                    return setTimeout(function (t) {
                        return function () {
                            var e;
                            return e = $('<div class="pulse"></div>').appendTo("#node-map"), e.css({
                                top: $(t).position().top,
                                left: $(t).position().left
                            })
                        }
                    }(this), 500 * t)
                })
            }, window.mapPulse = e
        })
    }.call(this),
    function () {
        $(function () {
            var t;
            return analytics.track("Viewed Lander", {
                title: document.title,
                url: window.location.pathname
            }), $('a[href="/pricing"]').each(function () {
                return analytics.trackLink(this, "Clicked Pricing Link", {
                    placement: $(this).data("placement")
                })
            }), $('.navbar-nav a[href="' + window.location.pathname + '"]').addClass("active"), /Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(navigator.userAgent || navigator.vendor || window.opera) || (t = skrollr.init({
                easing: "sqrt",
                smoothScrollingDuration: 500,
                forceHeight: !1
            }), window.scrollReveal = new scrollReveal), $("#about .bio").tooltip({
                container: "body"
            }), $('#pricing [data-toggle="tooltip"]').tooltip({
                container: "body",
                template: '<div class="tooltip pricing-tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'
            }), olark("api.box.onExpand", function () {
                return $(document).trigger("click.terminal")
            })
        })
    }.call(this);