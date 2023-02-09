(self.webpackChunk_rockstargames_polyfills = self.webpackChunk_rockstargames_polyfills || []).push([
  [618, 179], {
    3618: (t, r, e) => {
      "use strict";
      e.r(r), e(9119), e(8529)
    },
    8228: (t, r, e) => {
      var n = e(4978),
        o = e(3061),
        i = TypeError;
      t.exports = function(t) {
        if (n(t)) return t;
        throw i(o(t) + " is not a function")
      }
    },
    8695: (t, r, e) => {
      var n = e(399),
        o = String,
        i = TypeError;
      t.exports = function(t) {
        if (n(t)) return t;
        throw i(o(t) + " is not an object")
      }
    },
    720: (t, r, e) => {
      var n = e(3185),
        o = e(991),
        i = e(6947),
        a = function(t) {
          return function(r, e, a) {
            var u, c = n(r),
              s = i(c),
              p = o(a, s);
            if (t && e != e) {
              for (; s > p;)
                if ((u = c[p++]) != u) return !0
            } else
              for (; s > p; p++)
                if ((t || p in c) && c[p] === e) return t || p || 0;
            return !t && -1
          }
        };
      t.exports = {
        includes: a(!0),
        indexOf: a(!1)
      }
    },
    5546: (t, r, e) => {
      var n = e(9943);
      t.exports = n([].slice)
    },
    5940: (t, r, e) => {
      var n = e(9943),
        o = n({}.toString),
        i = n("".slice);
      t.exports = function(t) {
        return i(o(t), 8, -1)
      }
    },
    2012: (t, r, e) => {
      var n = e(2124),
        o = e(2585),
        i = e(3255),
        a = e(2469);
      t.exports = function(t, r, e) {
        for (var u = o(r), c = a.f, s = i.f, p = 0; p < u.length; p++) {
          var f = u[p];
          n(t, f) || e && n(e, f) || c(t, f, s(r, f))
        }
      }
    },
    7902: (t, r, e) => {
      var n = e(5659),
        o = e(2469),
        i = e(7299);
      t.exports = n ? function(t, r, e) {
        return o.f(t, r, i(1, e))
      } : function(t, r, e) {
        return t[r] = e, t
      }
    },
    7299: t => {
      t.exports = function(t, r) {
        return {
          enumerable: !(1 & t),
          configurable: !(2 & t),
          writable: !(4 & t),
          value: r
        }
      }
    },
    6585: (t, r, e) => {
      var n = e(7809),
        o = e(2469);
      t.exports = function(t, r, e) {
        return e.get && n(e.get, r, {
          getter: !0
        }), e.set && n(e.set, r, {
          setter: !0
        }), o.f(t, r, e)
      }
    },
    5589: (t, r, e) => {
      var n = e(4978),
        o = e(2469),
        i = e(7809),
        a = e(4767);
      t.exports = function(t, r, e, u) {
        u || (u = {});
        var c = u.enumerable,
          s = void 0 !== u.name ? u.name : r;
        if (n(e) && i(e, s, u), u.global) c ? t[r] = e : a(r, e);
        else {
          try {
            u.unsafe ? t[r] && (c = !0) : delete t[r]
          } catch (t) {}
          c ? t[r] = e : o.f(t, r, {
            value: e,
            enumerable: !1,
            configurable: !u.nonConfigurable,
            writable: !u.nonWritable
          })
        }
        return t
      }
    },
    4767: (t, r, e) => {
      var n = e(4725),
        o = Object.defineProperty;
      t.exports = function(t, r) {
        try {
          o(n, t, {
            value: r,
            configurable: !0,
            writable: !0
          })
        } catch (e) {
          n[t] = r
        }
        return r
      }
    },
    5659: (t, r, e) => {
      var n = e(972);
      t.exports = !n((function() {
        return 7 != Object.defineProperty({}, 1, {
          get: function() {
            return 7
          }
        })[1]
      }))
    },
    1359: t => {
      var r = "object" == typeof document && document.all,
        e = void 0 === r && void 0 !== r;
      t.exports = {
        all: r,
        IS_HTMLDDA: e
      }
    },
    8686: (t, r, e) => {
      var n = e(4725),
        o = e(399),
        i = n.document,
        a = o(i) && o(i.createElement);
      t.exports = function(t) {
        return a ? i.createElement(t) : {}
      }
    },
    4908: (t, r, e) => {
      var n = e(1423);
      t.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(n)
    },
    4966: (t, r, e) => {
      var n = e(5940),
        o = e(4725);
      t.exports = "process" == n(o.process)
    },
    1423: (t, r, e) => {
      var n = e(9817);
      t.exports = n("navigator", "userAgent") || ""
    },
    3444: (t, r, e) => {
      var n, o, i = e(4725),
        a = e(1423),
        u = i.process,
        c = i.Deno,
        s = u && u.versions || c && c.version,
        p = s && s.v8;
      p && (o = (n = p.split("."))[0] > 0 && n[0] < 4 ? 1 : +(n[0] + n[1])), !o && a && (!(n = a.match(/Edge\/(\d+)/)) || n[1] >= 74) && (n = a.match(/Chrome\/(\d+)/)) && (o = +n[1]), t.exports = o
    },
    4842: t => {
      t.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
    },
    5005: (t, r, e) => {
      var n = e(4725),
        o = e(3255).f,
        i = e(7902),
        a = e(5589),
        u = e(4767),
        c = e(2012),
        s = e(6475);
      t.exports = function(t, r) {
        var e, p, f, l, v, y = t.target,
          g = t.global,
          b = t.stat;
        if (e = g ? n : b ? n[y] || u(y, {}) : (n[y] || {}).prototype)
          for (p in r) {
            if (l = r[p], f = t.dontCallGetSet ? (v = o(e, p)) && v.value : e[p], !s(g ? p : y + (b ? "." : "#") + p, t.forced) && void 0 !== f) {
              if (typeof l == typeof f) continue;
              c(l, f)
            }(t.sham || f && f.sham) && i(l, "sham", !0), a(e, p, l, t)
          }
      }
    },
    972: t => {
      t.exports = function(t) {
        try {
          return !!t()
        } catch (t) {
          return !0
        }
      }
    },
    8621: (t, r, e) => {
      var n = e(9375),
        o = Function.prototype,
        i = o.apply,
        a = o.call;
      t.exports = "object" == typeof Reflect && Reflect.apply || (n ? a.bind(i) : function() {
        return a.apply(i, arguments)
      })
    },
    9868: (t, r, e) => {
      var n = e(9943),
        o = e(8228),
        i = e(9375),
        a = n(n.bind);
      t.exports = function(t, r) {
        return o(t), void 0 === r ? t : i ? a(t, r) : function() {
          return t.apply(r, arguments)
        }
      }
    },
    9375: (t, r, e) => {
      var n = e(972);
      t.exports = !n((function() {
        var t = function() {}.bind();
        return "function" != typeof t || t.hasOwnProperty("prototype")
      }))
    },
    8748: (t, r, e) => {
      var n = e(9375),
        o = Function.prototype.call;
      t.exports = n ? o.bind(o) : function() {
        return o.apply(o, arguments)
      }
    },
    7763: (t, r, e) => {
      var n = e(5659),
        o = e(2124),
        i = Function.prototype,
        a = n && Object.getOwnPropertyDescriptor,
        u = o(i, "name"),
        c = u && "something" === function() {}.name,
        s = u && (!n || n && a(i, "name").configurable);
      t.exports = {
        EXISTS: u,
        PROPER: c,
        CONFIGURABLE: s
      }
    },
    9943: (t, r, e) => {
      var n = e(9375),
        o = Function.prototype,
        i = o.bind,
        a = o.call,
        u = n && i.bind(a, a);
      t.exports = n ? function(t) {
        return t && u(t)
      } : function(t) {
        return t && function() {
          return a.apply(t, arguments)
        }
      }
    },
    9817: (t, r, e) => {
      var n = e(4725),
        o = e(4978),
        i = function(t) {
          return o(t) ? t : void 0
        };
      t.exports = function(t, r) {
        return arguments.length < 2 ? i(n[t]) : n[t] && n[t][r]
      }
    },
    4897: (t, r, e) => {
      var n = e(8228),
        o = e(4872);
      t.exports = function(t, r) {
        var e = t[r];
        return o(e) ? void 0 : n(e)
      }
    },
    4725: (t, r, e) => {
      var n = function(t) {
        return t && t.Math == Math && t
      };
      t.exports = n("object" == typeof globalThis && globalThis) || n("object" == typeof window && window) || n("object" == typeof self && self) || n("object" == typeof e.g && e.g) || function() {
        return this
      }() || Function("return this")()
    },
    2124: (t, r, e) => {
      var n = e(9943),
        o = e(1531),
        i = n({}.hasOwnProperty);
      t.exports = Object.hasOwn || function(t, r) {
        return i(o(t), r)
      }
    },
    5753: t => {
      t.exports = {}
    },
    8446: (t, r, e) => {
      var n = e(9817);
      t.exports = n("document", "documentElement")
    },
    5803: (t, r, e) => {
      var n = e(5659),
        o = e(972),
        i = e(8686);
      t.exports = !n && !o((function() {
        return 7 != Object.defineProperty(i("div"), "a", {
          get: function() {
            return 7
          }
        }).a
      }))
    },
    8092: (t, r, e) => {
      var n = e(9943),
        o = e(972),
        i = e(5940),
        a = Object,
        u = n("".split);
      t.exports = o((function() {
        return !a("z").propertyIsEnumerable(0)
      })) ? function(t) {
        return "String" == i(t) ? u(t, "") : a(t)
      } : a
    },
    7483: (t, r, e) => {
      var n = e(9943),
        o = e(4978),
        i = e(2125),
        a = n(Function.toString);
      o(i.inspectSource) || (i.inspectSource = function(t) {
        return a(t)
      }), t.exports = i.inspectSource
    },
    4977: (t, r, e) => {
      var n, o, i, a = e(9818),
        u = e(4725),
        c = e(9943),
        s = e(399),
        p = e(7902),
        f = e(2124),
        l = e(2125),
        v = e(1300),
        y = e(5753),
        g = "Object already initialized",
        b = u.TypeError,
        m = u.WeakMap;
      if (a || l.state) {
        var d = l.state || (l.state = new m),
          h = c(d.get),
          x = c(d.has),
          S = c(d.set);
        n = function(t, r) {
          if (x(d, t)) throw b(g);
          return r.facade = t, S(d, t, r), r
        }, o = function(t) {
          return h(d, t) || {}
        }, i = function(t) {
          return x(d, t)
        }
      } else {
        var w = v("state");
        y[w] = !0, n = function(t, r) {
          if (f(t, w)) throw b(g);
          return r.facade = t, p(t, w, r), r
        }, o = function(t) {
          return f(t, w) ? t[w] : {}
        }, i = function(t) {
          return f(t, w)
        }
      }
      t.exports = {
        set: n,
        get: o,
        has: i,
        enforce: function(t) {
          return i(t) ? o(t) : n(t, {})
        },
        getterFor: function(t) {
          return function(r) {
            var e;
            if (!s(r) || (e = o(r)).type !== t) throw b("Incompatible receiver, " + t + " required");
            return e
          }
        }
      }
    },
    4978: (t, r, e) => {
      var n = e(1359),
        o = n.all;
      t.exports = n.IS_HTMLDDA ? function(t) {
        return "function" == typeof t || t === o
      } : function(t) {
        return "function" == typeof t
      }
    },
    6475: (t, r, e) => {
      var n = e(972),
        o = e(4978),
        i = /#|\.prototype\./,
        a = function(t, r) {
          var e = c[u(t)];
          return e == p || e != s && (o(r) ? n(r) : !!r)
        },
        u = a.normalize = function(t) {
          return String(t).replace(i, ".").toLowerCase()
        },
        c = a.data = {},
        s = a.NATIVE = "N",
        p = a.POLYFILL = "P";
      t.exports = a
    },
    4872: t => {
      t.exports = function(t) {
        return null == t
      }
    },
    399: (t, r, e) => {
      var n = e(4978),
        o = e(1359),
        i = o.all;
      t.exports = o.IS_HTMLDDA ? function(t) {
        return "object" == typeof t ? null !== t : n(t) || t === i
      } : function(t) {
        return "object" == typeof t ? null !== t : n(t)
      }
    },
    6339: t => {
      t.exports = !1
    },
    6471: (t, r, e) => {
      var n = e(9817),
        o = e(4978),
        i = e(3335),
        a = e(2409),
        u = Object;
      t.exports = a ? function(t) {
        return "symbol" == typeof t
      } : function(t) {
        var r = n("Symbol");
        return o(r) && i(r.prototype, u(t))
      }
    },
    6947: (t, r, e) => {
      var n = e(3036);
      t.exports = function(t) {
        return n(t.length)
      }
    },
    7809: (t, r, e) => {
      var n = e(972),
        o = e(4978),
        i = e(2124),
        a = e(5659),
        u = e(7763).CONFIGURABLE,
        c = e(7483),
        s = e(4977),
        p = s.enforce,
        f = s.get,
        l = Object.defineProperty,
        v = a && !n((function() {
          return 8 !== l((function() {}), "length", {
            value: 8
          }).length
        })),
        y = String(String).split("String"),
        g = t.exports = function(t, r, e) {
          "Symbol(" === String(r).slice(0, 7) && (r = "[" + String(r).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"), e && e.getter && (r = "get " + r), e && e.setter && (r = "set " + r), (!i(t, "name") || u && t.name !== r) && (a ? l(t, "name", {
            value: r,
            configurable: !0
          }) : t.name = r), v && e && i(e, "arity") && t.length !== e.arity && l(t, "length", {
            value: e.arity
          });
          try {
            e && i(e, "constructor") && e.constructor ? a && l(t, "prototype", {
              writable: !1
            }) : t.prototype && (t.prototype = void 0)
          } catch (t) {}
          var n = p(t);
          return i(n, "source") || (n.source = y.join("string" == typeof r ? r : "")), t
        };
      Function.prototype.toString = g((function() {
        return o(this) && f(this).source || c(this)
      }), "toString")
    },
    1634: t => {
      var r = Math.ceil,
        e = Math.floor;
      t.exports = Math.trunc || function(t) {
        var n = +t;
        return (n > 0 ? e : r)(n)
      }
    },
    2469: (t, r, e) => {
      var n = e(5659),
        o = e(5803),
        i = e(9755),
        a = e(8695),
        u = e(4818),
        c = TypeError,
        s = Object.defineProperty,
        p = Object.getOwnPropertyDescriptor;
      r.f = n ? i ? function(t, r, e) {
        if (a(t), r = u(r), a(e), "function" == typeof t && "prototype" === r && "value" in e && "writable" in e && !e.writable) {
          var n = p(t, r);
          n && n.writable && (t[r] = e.value, e = {
            configurable: "configurable" in e ? e.configurable : n.configurable,
            enumerable: "enumerable" in e ? e.enumerable : n.enumerable,
            writable: !1
          })
        }
        return s(t, r, e)
      } : s : function(t, r, e) {
        if (a(t), r = u(r), a(e), o) try {
          return s(t, r, e)
        } catch (t) {}
        if ("get" in e || "set" in e) throw c("Accessors not supported");
        return "value" in e && (t[r] = e.value), t
      }
    },
    3255: (t, r, e) => {
      var n = e(5659),
        o = e(8748),
        i = e(5452),
        a = e(7299),
        u = e(3185),
        c = e(4818),
        s = e(2124),
        p = e(5803),
        f = Object.getOwnPropertyDescriptor;
      r.f = n ? f : function(t, r) {
        if (t = u(t), r = c(r), p) try {
          return f(t, r)
        } catch (t) {}
        if (s(t, r)) return a(!o(i.f, t, r), t[r])
      }
    },
    4245: (t, r, e) => {
      var n = e(7971),
        o = e(4842).concat("length", "prototype");
      r.f = Object.getOwnPropertyNames || function(t) {
        return n(t, o)
      }
    },
    4461: (t, r) => {
      r.f = Object.getOwnPropertySymbols
    },
    3335: (t, r, e) => {
      var n = e(9943);
      t.exports = n({}.isPrototypeOf)
    },
    7971: (t, r, e) => {
      var n = e(9943),
        o = e(2124),
        i = e(3185),
        a = e(720).indexOf,
        u = e(5753),
        c = n([].push);
      t.exports = function(t, r) {
        var e, n = i(t),
          s = 0,
          p = [];
        for (e in n) !o(u, e) && o(n, e) && c(p, e);
        for (; r.length > s;) o(n, e = r[s++]) && (~a(p, e) || c(p, e));
        return p
      }
    },
    5452: (t, r) => {
      "use strict";
      var e = {}.propertyIsEnumerable,
        n = Object.getOwnPropertyDescriptor,
        o = n && !e.call({
          1: 2
        }, 1);
      r.f = o ? function(t) {
        var r = n(this, t);
        return !!r && r.enumerable
      } : e
    },
    3737: (t, r, e) => {
      var n = e(8748),
        o = e(4978),
        i = e(399),
        a = TypeError;
      t.exports = function(t, r) {
        var e, u;
        if ("string" === r && o(e = t.toString) && !i(u = n(e, t))) return u;
        if (o(e = t.valueOf) && !i(u = n(e, t))) return u;
        if ("string" !== r && o(e = t.toString) && !i(u = n(e, t))) return u;
        throw a("Can't convert object to primitive value")
      }
    },
    2585: (t, r, e) => {
      var n = e(9817),
        o = e(9943),
        i = e(4245),
        a = e(4461),
        u = e(8695),
        c = o([].concat);
      t.exports = n("Reflect", "ownKeys") || function(t) {
        var r = i.f(u(t)),
          e = a.f;
        return e ? c(r, e(t)) : r
      }
    },
    4488: (t, r, e) => {
      "use strict";
      var n = e(8695);
      t.exports = function() {
        var t = n(this),
          r = "";
        return t.hasIndices && (r += "d"), t.global && (r += "g"), t.ignoreCase && (r += "i"), t.multiline && (r += "m"), t.dotAll && (r += "s"), t.unicode && (r += "u"), t.unicodeSets && (r += "v"), t.sticky && (r += "y"), r
      }
    },
    6436: (t, r, e) => {
      var n = e(4872),
        o = TypeError;
      t.exports = function(t) {
        if (n(t)) throw o("Can't call method on " + t);
        return t
      }
    },
    1300: (t, r, e) => {
      var n = e(2868),
        o = e(4577),
        i = n("keys");
      t.exports = function(t) {
        return i[t] || (i[t] = o(t))
      }
    },
    2125: (t, r, e) => {
      var n = e(4725),
        o = e(4767),
        i = "__core-js_shared__",
        a = n[i] || o(i, {});
      t.exports = a
    },
    2868: (t, r, e) => {
      var n = e(6339),
        o = e(2125);
      (t.exports = function(t, r) {
        return o[t] || (o[t] = void 0 !== r ? r : {})
      })("versions", []).push({
        version: "3.25.3",
        mode: n ? "pure" : "global",
        copyright: "© 2014-2022 Denis Pushkarev (zloirock.ru)",
        license: "https://github.com/zloirock/core-js/blob/v3.25.3/LICENSE",
        source: "https://github.com/zloirock/core-js"
      })
    },
    9496: (t, r, e) => {
      var n = e(3444),
        o = e(972);
      t.exports = !!Object.getOwnPropertySymbols && !o((function() {
        var t = Symbol();
        return !String(t) || !(Object(t) instanceof Symbol) || !Symbol.sham && n && n < 41
      }))
    },
    3773: (t, r, e) => {
      var n, o, i, a, u = e(4725),
        c = e(8621),
        s = e(9868),
        p = e(4978),
        f = e(2124),
        l = e(972),
        v = e(8446),
        y = e(5546),
        g = e(8686),
        b = e(1157),
        m = e(4908),
        d = e(4966),
        h = u.setImmediate,
        x = u.clearImmediate,
        S = u.process,
        w = u.Dispatch,
        O = u.Function,
        j = u.MessageChannel,
        P = u.String,
        E = 0,
        I = {};
      try {
        n = u.location
      } catch (t) {}
      var k = function(t) {
          if (f(I, t)) {
            var r = I[t];
            delete I[t], r()
          }
        },
        M = function(t) {
          return function() {
            k(t)
          }
        },
        C = function(t) {
          k(t.data)
        },
        T = function(t) {
          u.postMessage(P(t), n.protocol + "//" + n.host)
        };
      h && x || (h = function(t) {
        b(arguments.length, 1);
        var r = p(t) ? t : O(t),
          e = y(arguments, 1);
        return I[++E] = function() {
          c(r, void 0, e)
        }, o(E), E
      }, x = function(t) {
        delete I[t]
      }, d ? o = function(t) {
        S.nextTick(M(t))
      } : w && w.now ? o = function(t) {
        w.now(M(t))
      } : j && !m ? (a = (i = new j).port2, i.port1.onmessage = C, o = s(a.postMessage, a)) : u.addEventListener && p(u.postMessage) && !u.importScripts && n && "file:" !== n.protocol && !l(T) ? (o = T, u.addEventListener("message", C, !1)) : o = "onreadystatechange" in g("script") ? function(t) {
        v.appendChild(g("script")).onreadystatechange = function() {
          v.removeChild(this), k(t)
        }
      } : function(t) {
        setTimeout(M(t), 0)
      }), t.exports = {
        set: h,
        clear: x
      }
    },
    991: (t, r, e) => {
      var n = e(7527),
        o = Math.max,
        i = Math.min;
      t.exports = function(t, r) {
        var e = n(t);
        return e < 0 ? o(e + r, 0) : i(e, r)
      }
    },
    3185: (t, r, e) => {
      var n = e(8092),
        o = e(6436);
      t.exports = function(t) {
        return n(o(t))
      }
    },
    7527: (t, r, e) => {
      var n = e(1634);
      t.exports = function(t) {
        var r = +t;
        return r != r || 0 === r ? 0 : n(r)
      }
    },
    3036: (t, r, e) => {
      var n = e(7527),
        o = Math.min;
      t.exports = function(t) {
        return t > 0 ? o(n(t), 9007199254740991) : 0
      }
    },
    1531: (t, r, e) => {
      var n = e(6436),
        o = Object;
      t.exports = function(t) {
        return o(n(t))
      }
    },
    8426: (t, r, e) => {
      var n = e(8748),
        o = e(399),
        i = e(6471),
        a = e(4897),
        u = e(3737),
        c = e(8390),
        s = TypeError,
        p = c("toPrimitive");
      t.exports = function(t, r) {
        if (!o(t) || i(t)) return t;
        var e, c = a(t, p);
        if (c) {
          if (void 0 === r && (r = "default"), e = n(c, t, r), !o(e) || i(e)) return e;
          throw s("Can't convert object to primitive value")
        }
        return void 0 === r && (r = "number"), u(t, r)
      }
    },
    4818: (t, r, e) => {
      var n = e(8426),
        o = e(6471);
      t.exports = function(t) {
        var r = n(t, "string");
        return o(r) ? r : r + ""
      }
    },
    3061: t => {
      var r = String;
      t.exports = function(t) {
        try {
          return r(t)
        } catch (t) {
          return "Object"
        }
      }
    },
    4577: (t, r, e) => {
      var n = e(9943),
        o = 0,
        i = Math.random(),
        a = n(1..toString);
      t.exports = function(t) {
        return "Symbol(" + (void 0 === t ? "" : t) + ")_" + a(++o + i, 36)
      }
    },
    2409: (t, r, e) => {
      var n = e(9496);
      t.exports = n && !Symbol.sham && "symbol" == typeof Symbol.iterator
    },
    9755: (t, r, e) => {
      var n = e(5659),
        o = e(972);
      t.exports = n && o((function() {
        return 42 != Object.defineProperty((function() {}), "prototype", {
          value: 42,
          writable: !1
        }).prototype
      }))
    },
    1157: t => {
      var r = TypeError;
      t.exports = function(t, e) {
        if (t < e) throw r("Not enough arguments");
        return t
      }
    },
    9818: (t, r, e) => {
      var n = e(4725),
        o = e(4978),
        i = n.WeakMap;
      t.exports = o(i) && /native code/.test(String(i))
    },
    8390: (t, r, e) => {
      var n = e(4725),
        o = e(2868),
        i = e(2124),
        a = e(4577),
        u = e(9496),
        c = e(2409),
        s = o("wks"),
        p = n.Symbol,
        f = p && p.for,
        l = c ? p : p && p.withoutSetter || a;
      t.exports = function(t) {
        if (!i(s, t) || !u && "string" != typeof s[t]) {
          var r = "Symbol." + t;
          u && i(p, t) ? s[t] = p[t] : s[t] = c && f ? f(r) : l(r)
        }
        return s[t]
      }
    },
    9119: (t, r, e) => {
      var n = e(4725),
        o = e(5659),
        i = e(6585),
        a = e(4488),
        u = e(972),
        c = n.RegExp,
        s = c.prototype;
      o && u((function() {
        var t = !0;
        try {
          c(".", "d")
        } catch (r) {
          t = !1
        }
        var r = {},
          e = "",
          n = t ? "dgimsy" : "gimsy",
          o = function(t, n) {
            Object.defineProperty(r, t, {
              get: function() {
                return e += n, !0
              }
            })
          },
          i = {
            dotAll: "s",
            global: "g",
            ignoreCase: "i",
            multiline: "m",
            sticky: "y"
          };
        for (var a in t && (i.hasIndices = "d"), i) o(a, i[a]);
        return Object.getOwnPropertyDescriptor(s, "flags").get.call(r) !== n || e !== n
      })) && i(s, "flags", {
        configurable: !0,
        get: a
      })
    },
    6643: (t, r, e) => {
      var n = e(5005),
        o = e(4725),
        i = e(3773).clear;
      n({
        global: !0,
        bind: !0,
        enumerable: !0,
        forced: o.clearImmediate !== i
      }, {
        clearImmediate: i
      })
    },
    8529: (t, r, e) => {
      e(6643), e(5029)
    },
    5029: (t, r, e) => {
      var n = e(5005),
        o = e(4725),
        i = e(3773).set;
      n({
        global: !0,
        bind: !0,
        enumerable: !0,
        forced: o.setImmediate !== i
      }, {
        setImmediate: i
      })
    }
  }
]);