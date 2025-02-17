! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "78cf56a1-37b1-4c36-bd6e-113791af277b", e._sentryDebugIdIdentifier = "sentry-dbid-78cf56a1-37b1-4c36-bd6e-113791af277b")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-gta-gen9",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [5637], {
    44970: (e, t, n) => {
      var r = n(45590).Symbol;
      e.exports = r
    },
    56203: (e, t, n) => {
      var r = n(44970),
        a = n(97390),
        o = n(65461),
        s = r ? r.toStringTag : void 0;
      e.exports = function(e) {
        return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : s && s in Object(e) ? a(e) : o(e)
      }
    },
    50811: (e, t, n) => {
      var r = n(72089),
        a = /^\s+/;
      e.exports = function(e) {
        return e ? e.slice(0, r(e) + 1).replace(a, "") : e
      }
    },
    94239: (e, t, n) => {
      var r = "object" == typeof n.g && n.g && n.g.Object === Object && n.g;
      e.exports = r
    },
    97390: (e, t, n) => {
      var r = n(44970),
        a = Object.prototype,
        o = a.hasOwnProperty,
        s = a.toString,
        i = r ? r.toStringTag : void 0;
      e.exports = function(e) {
        var t = o.call(e, i),
          n = e[i];
        try {
          e[i] = void 0;
          var r = !0
        } catch (e) {}
        var a = s.call(e);
        return r && (t ? e[i] = n : delete e[i]), a
      }
    },
    65461: e => {
      var t = Object.prototype.toString;
      e.exports = function(e) {
        return t.call(e)
      }
    },
    45590: (e, t, n) => {
      var r = n(94239),
        a = "object" == typeof self && self && self.Object === Object && self,
        o = r || a || Function("return this")();
      e.exports = o
    },
    72089: e => {
      var t = /\s/;
      e.exports = function(e) {
        for (var n = e.length; n-- && t.test(e.charAt(n)););
        return n
      }
    },
    12296: (e, t, n) => {
      var r = n(88660),
        a = n(21383),
        o = n(48635),
        s = Math.max,
        i = Math.min;
      e.exports = function(e, t, n) {
        var c, l, f, u, d, b, g = 0,
          p = !1,
          v = !1,
          m = !0;
        if ("function" != typeof e) throw new TypeError("Expected a function");

        function y(t) {
          var n = c,
            r = l;
          return c = l = void 0, g = t, u = e.apply(r, n)
        }

        function h(e) {
          var n = e - b;
          return void 0 === b || n >= t || n < 0 || v && e - g >= f
        }

        function x() {
          var e = a();
          if (h(e)) return k(e);
          d = setTimeout(x, function(e) {
            var n = t - (e - b);
            return v ? i(n, f - (e - g)) : n
          }(e))
        }

        function k(e) {
          return d = void 0, m && c ? y(e) : (c = l = void 0, u)
        }

        function _() {
          var e = a(),
            n = h(e);
          if (c = arguments, l = this, b = e, n) {
            if (void 0 === d) return function(e) {
              return g = e, d = setTimeout(x, t), p ? y(e) : u
            }(b);
            if (v) return clearTimeout(d), d = setTimeout(x, t), y(b)
          }
          return void 0 === d && (d = setTimeout(x, t)), u
        }
        return t = o(t) || 0, r(n) && (p = !!n.leading, f = (v = "maxWait" in n) ? s(o(n.maxWait) || 0, t) : f, m = "trailing" in n ? !!n.trailing : m), _.cancel = function() {
          void 0 !== d && clearTimeout(d), g = 0, c = b = l = d = void 0
        }, _.flush = function() {
          return void 0 === d ? u : k(a())
        }, _
      }
    },
    88660: e => {
      e.exports = function(e) {
        var t = typeof e;
        return null != e && ("object" == t || "function" == t)
      }
    },
    10939: e => {
      e.exports = function(e) {
        return null != e && "object" == typeof e
      }
    },
    23771: (e, t, n) => {
      var r = n(56203),
        a = n(10939);
      e.exports = function(e) {
        return "symbol" == typeof e || a(e) && "[object Symbol]" == r(e)
      }
    },
    21383: (e, t, n) => {
      var r = n(45590);
      e.exports = function() {
        return r.Date.now()
      }
    },
    48635: (e, t, n) => {
      var r = n(50811),
        a = n(88660),
        o = n(23771),
        s = /^[-+]0x[0-9a-f]+$/i,
        i = /^0b[01]+$/i,
        c = /^0o[0-7]+$/i,
        l = parseInt;
      e.exports = function(e) {
        if ("number" == typeof e) return e;
        if (o(e)) return NaN;
        if (a(e)) {
          var t = "function" == typeof e.valueOf ? e.valueOf() : e;
          e = a(t) ? t + "" : t
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = r(e);
        var n = i.test(e);
        return n || c.test(e) ? l(e.slice(2), n ? 2 : 8) : s.test(e) ? NaN : +e
      }
    },
    81402: (e, t, n) => {
      "use strict";
      n.d(t, {
        C: () => s,
        f: () => i
      });
      var r = n(63461);

      function a(e) {
        return e
      }

      function o(e, t) {
        void 0 === t && (t = a);
        var n = [],
          r = !1;
        return {
          read: function() {
            if (r) throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
            return n.length ? n[n.length - 1] : e
          },
          useMedium: function(e) {
            var a = t(e, r);
            return n.push(a),
              function() {
                n = n.filter((function(e) {
                  return e !== a
                }))
              }
          },
          assignSyncMedium: function(e) {
            for (r = !0; n.length;) {
              var t = n;
              n = [], t.forEach(e)
            }
            n = {
              push: function(t) {
                return e(t)
              },
              filter: function() {
                return n
              }
            }
          },
          assignMedium: function(e) {
            r = !0;
            var t = [];
            if (n.length) {
              var a = n;
              n = [], a.forEach(e), t = n
            }
            var o = function() {
                var n = t;
                t = [], n.forEach(e)
              },
              s = function() {
                return Promise.resolve().then(o)
              };
            s(), n = {
              push: function(e) {
                t.push(e), s()
              },
              filter: function(e) {
                return t = t.filter(e), n
              }
            }
          }
        }
      }

      function s(e, t) {
        return void 0 === t && (t = a), o(e, t)
      }

      function i(e) {
        void 0 === e && (e = {});
        var t = o(null);
        return t.options = (0, r.__assign)({
          async: !0,
          ssr: !1
        }, e), t
      }
    },
    79512: (e, t, n) => {
      "use strict";
      n.d(t, {
        A: () => c
      });
      var r = n(9623);
      const a = {
        pillBtn: "rockstargames-sites-gta-gen9a76545929bba4f1522661c9f297ea3c5",
        selected: "rockstargames-sites-gta-gen9e5b12527bec7eae7fce9642c9827cc3b",
        plusButton: "rockstargames-sites-gta-gen9b35e9ba36ecaabe08c02c44808110761",
        small: "rockstargames-sites-gta-gen9b3ba679464048120f8440e7ae0d14086",
        btnText: "rockstargames-sites-gta-gen9e146813e6b911567a15379239351bb9f",
        btnTexticon: "rockstargames-sites-gta-gen9add785fa73d6a7f8cdf490add2819974",
        whiteBtn: "rockstargames-sites-gta-gen9d94aba4fb4bae812e14f8715816752c2",
        blackBtn: "rockstargames-sites-gta-gen9d3207a3907ff5e6cc1498c67d5562087",
        transparentBtn: "rockstargames-sites-gta-gen9d4515b6bf9a4c714239cac9e27932235",
        iconBtn: "rockstargames-sites-gta-gen9a305be36306fd7f0977b052ccab54910",
        link: "rockstargames-sites-gta-gen9a73b743df91203999c432aceb1093e62",
        xboxone: "rockstargames-sites-gta-gen9cadebea37980f01b56560143374013b3",
        xboxseriesxs: "rockstargames-sites-gta-gen9c28e2bcbd4ed4fc95b67860cb7033999",
        ps4: "rockstargames-sites-gta-gen9af1b302b53e77d0da20f92de2973fd29",
        ps5: "rockstargames-sites-gta-gen9b5164622a2b180ed2b04eab4d489763b",
        pc: "rockstargames-sites-gta-gen9c4a7b17bb99afb02a9f9b9b133be7844"
      };
      var o = n(91029);
      const s = e => {
          let {
            children: t,
            className: n,
            onClick: r,
            style: a,
            ariaLabel: s
          } = e;
          return (0, o.jsx)("button", {
            className: n,
            onClick: r,
            style: a,
            type: "button",
            "aria-label": s,
            children: t
          })
        },
        i = e => {
          let {
            children: t,
            className: n,
            onClick: a,
            style: s,
            to: i,
            ariaLabel: c
          } = e;
          return (0, o.jsx)(r.NavLink, {
            className: n,
            onClick: a,
            style: s,
            to: i,
            "aria-label": c,
            children: t
          })
        },
        c = e => {
          let {
            btnColor: t = "#fff",
            className: n = "",
            consoleBtn: r,
            icon: c = "",
            img: l,
            labelColor: f = "#000",
            onClick: u,
            secondText: d,
            size: b,
            text: g,
            to: p,
            type: v = "",
            ariaLabel: m
          } = e;
          const y = [a.plusButton, a[v] ?? "", a[b] ?? "", a[r] ?? "", n].join(" "),
            h = {
              "--hvr-color": t ?? f,
              "--hvr-bg-color": f ?? t,
              "--hvr-border-color": t ?? f
            },
            x = (0, o.jsxs)(o.Fragment, {
              children: [l ? (0, o.jsx)("img", {
                src: l,
                alt: ""
              }) : "", (0, o.jsxs)("div", {
                className: a.btnText,
                icon: c,
                children: [g, d ? (0, o.jsx)("span", {
                  children: d
                }) : ""]
              })]
            });
          if (p) {
            if (p.startsWith("http")) {
              const e = p.startsWith(document.location.origin) ? "_self" : "_blank";
              return (0, o.jsx)("span", {
                onClick: u,
                onKeyDown: u,
                className: y,
                role: "button",
                "aria-label": m,
                tabIndex: 0,
                children: (0, o.jsx)("a", {
                  href: p,
                  target: e,
                  children: x
                })
              })
            }
            return (0, o.jsx)(i, {
              className: y,
              onClick: u,
              style: {
                ...h
              },
              to: p,
              ariaLabel: m,
              children: x
            })
          }
          return (0, o.jsx)(s, {
            className: y,
            onClick: u,
            style: {
              ...h
            },
            ariaLabel: m,
            children: x
          })
        }
    }
  }
]);