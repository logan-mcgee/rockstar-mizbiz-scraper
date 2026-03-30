try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "26c5a8e3-f9f5-472e-9b24-6f90f04bf12a", e._sentryDebugIdIdentifier = "sentry-dbid-26c5a8e3-f9f5-472e-9b24-6f90f04bf12a")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-gif-viewer",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register([], function(e, a) {
  return {
    execute: function() {
      e((() => {
        var e, r, t, f, d, c, n, o, b, i, l, s, u, p, h, m, g, y, v, w, _, k = {
            3032: (e, a, r) => {
              r(8419)
            },
            4848: (e, a, r) => {
              "use strict";
              var t = {
                  "./index": () => Promise.all([r.e(1127), r.e(8136), r.e(9741)]).then(() => () => r(9741)),
                  "./lazy": () => Promise.all([r.e(1127), r.e(181), r.e(8136), r.e(2364)]).then(() => () => r(2364)),
                  "./tina": () => Promise.all([r.e(2029), r.e(1127), r.e(8429), r.e(8136), r.e(3079)]).then(() => () => r(792)),
                  "./tinaBlockTemplates": () => Promise.all([r.e(2029), r.e(1127), r.e(8429), r.e(8136), r.e(3079)]).then(() => () => r(792))
                },
                f = (e, a) => (r.R = a, a = r.o(t, e) ? t[e]() : Promise.resolve().then(() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                }), r.R = void 0, a),
                d = (e, a) => {
                  if (r.S) {
                    var t = "default",
                      f = r.S[t];
                    if (f && f !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return r.S[t] = e, r.I(t, a)
                  }
                };
              r.d(a, {
                get: () => f,
                init: () => d
              })
            },
            7027: (e, a, r) => {
              a.y = function(e, a) {
                var r = document.createElement("a");
                r.href = e;
                for (var t = "/" === r.pathname[0] ? r.pathname : "/" + r.pathname, f = 0, d = t.length; f !== a && d >= 0;) "/" === t[--d] && f++;
                if (f !== a) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + a + ") is greater than the number of directories (" + f + ") in the URL path " + e);
                var c = t.slice(0, d + 1);
                return r.protocol + "//" + r.host + c
              };
              Number.isInteger
            },
            7411: (e, a, r) => {
              const t = r(7027).y;
              a.w = function(e) {
                if (e || (e = 1), !r.y.meta || !r.y.meta.url) throw console.error("__system_context__", r.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                r.p = t(r.y.meta.url, e)
              }
            },
            8419: (e, a, r) => {
              (0, r(7411).w)(1)
            }
          },
          E = {};

        function S(e) {
          var a = E[e];
          if (void 0 !== a) return a.exports;
          var r = E[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return k[e].call(r.exports, r, r.exports, S), r.loaded = !0, r.exports
        }
        return S.m = k, S.c = E, S.y = a, S.amdO = {}, S.n = e => {
          var a = e && e.__esModule ? () => e.default : () => e;
          return S.d(a, {
            a
          }), a
        }, r = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, S.t = function(a, t) {
          if (1 & t && (a = this(a)), 8 & t) return a;
          if ("object" == typeof a && a) {
            if (4 & t && a.__esModule) return a;
            if (16 & t && "function" == typeof a.then) return a
          }
          var f = Object.create(null);
          S.r(f);
          var d = {};
          e = e || [null, r({}), r([]), r(r)];
          for (var c = 2 & t && a;
            ("object" == typeof c || "function" == typeof c) && !~e.indexOf(c); c = r(c)) Object.getOwnPropertyNames(c).forEach(e => d[e] = () => a[e]);
          return d.default = () => a, S.d(f, d), f
        }, S.d = (e, a) => {
          for (var r in a) S.o(a, r) && !S.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: a[r]
          })
        }, S.f = {}, S.e = e => Promise.all(Object.keys(S.f).reduce((a, r) => (S.f[r](e, a), a), [])), S.u = e => "js/" + {
          131: "9623c1d6ce5e1d072ecbb04d9fa75708",
          278: "206e1e11e19c6e915c9f6fac0d185841",
          299: "de5a40f2d4d805d92ea510636af240d5",
          314: "494959b4ff968df60fca0ca0f05f6b63",
          662: "730c2a22e7ceb70c72fffe3ed334e20b",
          824: "c1dbe063ccbdab56c169693856274a2a",
          907: "c04ae1984aecd215169e5ca75c663994",
          1054: "d8754ba985641d56c6a6eb8ae8fda06e",
          1098: "6088236704329063d62194f6609a3224",
          1242: "7b7257be20445443595b76ae8aae0fb1",
          1822: "ba23233d439ad2b60f77ae561c8b8a65",
          1868: "48666ec6ac50138f2fc84a27c3fbdd24",
          2029: "7b0bc1726846fc5da4b93b4a79346f79",
          2156: "9b28ea6d5f430f6d73480b7894d5bb36",
          2171: "fdd85161a64531ba2c9106c2eca034e0",
          2221: "a327be0eab5c8367616b899180cff6ef",
          2243: "2b6fdf7f035c870424f2c632fbcbfef8",
          2250: "e1e2b480eedb41efbb9c85420f991611",
          2295: "5740c1ac5830b703b8797056489bbd0c",
          2347: "753ab3305d55c63be2b75b4be01660e1",
          2364: "f2eab187a5625d27ea71893209276ad2",
          2365: "389048ae3e49bdea19eb82b1725f5252",
          2398: "9a3a74730aee080cc70c3e826b0e093a",
          2466: "97889333e0357de7278aa1c075bc726b",
          2642: "edafa77484d813012cb28bbe6bb0f498",
          2678: "40c8867a5f750e2656e01fe4862299a4",
          2864: "c6db130a1403459a2e02d8aa072c91ee",
          3034: "e69d1aceec6e9ba9906a28cd3b905c76",
          3079: "e0a3d31bdffab14c78bb3aa58cde6a0d",
          3197: "7e4bdaba7d3a1a774910c518cf54fdfa",
          3343: "715125373fda5eb22a81bd43aec4141f",
          3370: "62b97773ac69d1e25a0d5466ad921d18",
          3475: "dbd4d674957fbb3e4ec700be1a177444",
          3486: "662b6ee447a82e145143f480f7b6f634",
          3697: "1545ba9f4eb923baaccf84e161d1cf85",
          3885: "109cbef18618f4bf2dc39446acde9757",
          3941: "e409cb84176fd073dd1bb1905dfc68e0",
          4011: "36d6a32c543bfe62666fd8865b391183",
          4528: "3004b47c2dc2649f68e4324407e9d32f",
          4578: "0bca97451f916d2b9555a9e3e5bb50d3",
          4621: "e6519a3a0710e97e7751767558b43a9b",
          4700: "48b560c4b2111a3fae40bbbba4542489",
          4710: "42d3b94ad2a985fbc86eaade75a90d44",
          4731: "40c4ca93fb05f94e9932fff0dba75fd5",
          4799: "7d2b3f62d725e39a642c99774f7d86bf",
          4851: "c53f5f4f3ea83bc95a1c8b330896a92c",
          4861: "7ae66a37b5b4b7f592541b5265758cc8",
          4913: "1cb449e94d21f51921e17b463309fc1d",
          5018: "b5fd7ccf1ab8e2d4ef0c11c4c930af2c",
          5233: "5547511521af01d73d1b03f844086091",
          5259: "0846f1fbc54e50533ae3207d05cd43a8",
          5389: "d3dd886966a0a8fe3e4b026e3c1f8d69",
          5530: "b8360c810ebc87926bb174913de9b6b7",
          5639: "4c330283985d98a88962e52ba5e9abfa",
          5663: "585f173558f7d44a899d2d229da32423",
          5742: "826c9846cf78e4cea2b3e1999c888300",
          5830: "022031305d3511288edbdc6c2b3420a2",
          5832: "2d90488c9b7ff0ce651b29330752672e",
          5932: "fc7b3d7fe848677243013c2e88c5684a",
          6267: "921a9b38626a3fb94b3390ea50c281d5",
          6280: "a3cc9544b8e3955bcc7e8673c27efad3",
          6285: "ab89cd1b01fc10953f5335b4bbdfca64",
          6361: "466b5f0952192d1c058c3532ac119e41",
          6664: "9e5e0da99787821be71156307a8c03b4",
          6879: "cd6f1831216702094af647ac0f98ec54",
          6891: "b8a3e4fda6228ac25de67c0a07aa89f2",
          6997: "3bd45b129791de5ea1febb1a81c37776",
          7010: "1d7e35ddb2ca54e5e174f60e5cc9a41b",
          7073: "9756d69d9b0c05489ddcc9524fd2817c",
          7436: "0bd9dde5aa38a962dcd3698cadf887d9",
          7452: "95293a58d31d99c39413e375e34d01dd",
          7453: "e0f39ead5dff838455ca990707cf46b0",
          7970: "b564937d38acb190a0e7ffb7e8a7b4f9",
          8044: "bd5c3d5cbcb823e600494e75a5999937",
          8272: "61043ce68eb8fb74f759de407e899841",
          8391: "f888ba5209d0ed35f2da1fcf5ab8ab3e",
          8431: "30b7d3a459966cf5726e42d5a5b84a82",
          8755: "3d10deb8bb97186e825ecd76eab19461",
          8880: "959ef0f0c34a34a579d393da68a33f0c",
          8970: "f45a26f28ec169c5c601079766810563",
          9022: "d87b9e07514fc554fbc4c0add20dffa1",
          9028: "8d6890b32e75028b286ca6aadf0a64c8",
          9126: "9799f217f0b86bdf2f5a94b2b5eec3a4",
          9377: "f669c8f802a90d11f1e5582c80ca957d",
          9615: "f988acf286d2f4c1bb7244144d438414",
          9741: "ab53c0c7f091c66deecf8ea676eb1415",
          9936: "4f691e2967e7ea52d391d3fff528b8fd",
          9990: "bb2dc01ad4c65b1c54e5d80b41404d1e"
        } [e] + ".js", S.miniCssF = e => "css/" + {
          2364: "debb098fe4eb10cc6ea2338c25eeda9f",
          3079: "b11d8af9d5f0f47ad9c9716859e25471",
          9741: "7a398e1a54d4e611af2d855ec6db3b77"
        } [e] + ".css", S.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), S.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), t = {}, f = "@rockstargames/modules-core-gif-viewer:", S.l = (e, a, r, d) => {
          if (t[e]) t[e].push(a);
          else {
            var c, n;
            if (void 0 !== r)
              for (var o = document.getElementsByTagName("script"), b = 0; b < o.length; b++) {
                var i = o[b];
                if (i.getAttribute("src") == e || i.getAttribute("data-webpack") == f + r) {
                  c = i;
                  break
                }
              }
            c || (n = !0, (c = document.createElement("script")).charset = "utf-8", c.timeout = 120, S.nc && c.setAttribute("nonce", S.nc), c.setAttribute("data-webpack", f + r), c.src = e), t[e] = [a];
            var l = (a, r) => {
                c.onerror = c.onload = null, clearTimeout(s);
                var f = t[e];
                if (delete t[e], c.parentNode && c.parentNode.removeChild(c), f && f.forEach(e => e(r)), a) return a(r)
              },
              s = setTimeout(l.bind(null, void 0, {
                type: "timeout",
                target: c
              }), 12e4);
            c.onerror = l.bind(null, c.onerror), c.onload = l.bind(null, c.onload), n && document.head.appendChild(c)
          }
        }, S.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, S.nmd = e => (e.paths = [], e.children || (e.children = []), e), (() => {
          S.S = {};
          var e = {},
            a = {};
          S.I = (r, t) => {
            t || (t = []);
            var f = a[r];
            if (f || (f = a[r] = {}), !(t.indexOf(f) >= 0)) {
              if (t.push(f), e[r]) return e[r];
              S.o(S.S, r) || (S.S[r] = {});
              var d = S.S[r],
                c = "@rockstargames/modules-core-gif-viewer",
                n = (e, a, r, t) => {
                  var f = d[e] = d[e] || {},
                    n = f[a];
                  (!n || !n.loaded && (!t != !n.eager ? t : c > n.from)) && (f[a] = {
                    get: r,
                    from: c,
                    eager: !!t
                  })
                },
                o = [];
              return "default" === r && (n("@rsgweb/utils", "0.0.0", () => Promise.all([S.e(2029), S.e(2250), S.e(1127), S.e(181), S.e(8044), S.e(2295)]).then(() => () => S(8859))), n("react-dom", "18.3.1", () => Promise.all([S.e(1098), S.e(1127)]).then(() => () => S(1098))), n("react-router-dom", "6.30.1", () => Promise.all([S.e(5389), S.e(1127), S.e(8429)]).then(() => () => S(5389))), n("react", "18.3.1", () => S.e(8431).then(() => () => S(8431)))), e[r] = o.length ? Promise.all(o).then(() => e[r] = 1) : 1
            }
          }
        })(), (() => {
          var e;
          S.g.importScripts && (e = S.g.location + "");
          var a = S.g.document;
          if (!e && a && (a.currentScript && "SCRIPT" === a.currentScript.tagName.toUpperCase() && (e = a.currentScript.src), !e)) {
            var r = a.getElementsByTagName("script");
            if (r.length)
              for (var t = r.length - 1; t > -1 && (!e || !/^http(s?):/.test(e));) e = r[t--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), S.p = e
        })(), d = e => {
          var a = e => e.split(".").map(e => +e == e ? +e : e),
            r = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
            t = r[1] ? a(r[1]) : [];
          return r[2] && (t.length++, t.push.apply(t, a(r[2]))), r[3] && (t.push([]), t.push.apply(t, a(r[3]))), t
        }, c = (e, a) => {
          e = d(e), a = d(a);
          for (var r = 0;;) {
            if (r >= e.length) return r < a.length && "u" != (typeof a[r])[0];
            var t = e[r],
              f = (typeof t)[0];
            if (r >= a.length) return "u" == f;
            var c = a[r],
              n = (typeof c)[0];
            if (f != n) return "o" == f && "n" == n || "s" == n || "u" == f;
            if ("o" != f && "u" != f && t != c) return t < c;
            r++
          }
        }, n = e => {
          var a = e[0],
            r = "";
          if (1 === e.length) return "*";
          if (a + .5) {
            r += 0 == a ? ">=" : -1 == a ? "<" : 1 == a ? "^" : 2 == a ? "~" : a > 0 ? "=" : "!=";
            for (var t = 1, f = 1; f < e.length; f++) t--, r += "u" == (typeof(c = e[f]))[0] ? "-" : (t > 0 ? "." : "") + (t = 2, c);
            return r
          }
          var d = [];
          for (f = 1; f < e.length; f++) {
            var c = e[f];
            d.push(0 === c ? "not(" + o() + ")" : 1 === c ? "(" + o() + " || " + o() + ")" : 2 === c ? d.pop() + " " + d.pop() : n(c))
          }
          return o();

          function o() {
            return d.pop().replace(/^\((.+)\)$/, "$1")
          }
        }, o = (e, a) => {
          if (0 in e) {
            a = d(a);
            var r = e[0],
              t = r < 0;
            t && (r = -r - 1);
            for (var f = 0, c = 1, n = !0;; c++, f++) {
              var b, i, l = c < e.length ? (typeof e[c])[0] : "";
              if (f >= a.length || "o" == (i = (typeof(b = a[f]))[0])) return !n || ("u" == l ? c > r && !t : "" == l != t);
              if ("u" == i) {
                if (!n || "u" != l) return !1
              } else if (n)
                if (l == i)
                  if (c <= r) {
                    if (b != e[c]) return !1
                  } else {
                    if (t ? b > e[c] : b < e[c]) return !1;
                    b != e[c] && (n = !1)
                  }
              else if ("s" != l && "n" != l) {
                if (t || c <= r) return !1;
                n = !1, c--
              } else {
                if (c <= r || i < l != t) return !1;
                n = !1
              } else "s" != l && "n" != l && (n = !1, c--)
            }
          }
          var s = [],
            u = s.pop.bind(s);
          for (f = 1; f < e.length; f++) {
            var p = e[f];
            s.push(1 == p ? u() | u() : 2 == p ? u() & u() : p ? o(p, a) : !u())
          }
          return !!u()
        }, b = (e, a) => e && S.o(e, a), i = e => (e.loaded = 1, e.get()), l = e => Object.keys(e).reduce((a, r) => (e[r].eager && (a[r] = e[r]), a), {}), s = (e, a, r) => {
          var t = r ? l(e[a]) : e[a];
          return Object.keys(t).reduce((e, a) => !e || !t[e].loaded && c(e, a) ? a : e, 0)
        }, u = (e, a, r, t) => "Unsatisfied version " + r + " from " + (r && e[a][r].from) + " of shared singleton module " + a + " (required " + n(t) + ")", p = e => {
          throw new Error(e)
        }, h = e => {
          "undefined" != typeof console && console.warn && console.warn(e)
        }, m = (e, a, r) => r ? r() : ((e, a) => p("Shared module " + a + " doesn't exist in shared scope " + e))(e, a), g = (e => function(a, r, t, f, d) {
          var c = S.I(a);
          return c && c.then && !t ? c.then(e.bind(e, a, S.S[a], r, !1, f, d)) : e(a, S.S[a], r, t, f, d)
        })((e, a, r, t, f, d) => {
          if (!b(a, r)) return m(e, r, d);
          var c = s(a, r, t);
          return o(f, c) || h(u(a, r, c, f)), i(a[r][c])
        }), y = {}, v = {
          1127: () => g("default", "react", !1, [1, 18, 2, 0], () => S.e(8431).then(() => () => S(8431))),
          8136: () => g("default", "@rsgweb/utils", !1, [4, 0, 0, 0], () => Promise.all([S.e(2029), S.e(2250), S.e(181), S.e(8044)]).then(() => () => S(8859))),
          181: () => g("default", "react-router-dom", !1, [1, 6, 11, 2], () => Promise.all([S.e(5389), S.e(8429)]).then(() => () => S(5389))),
          8429: () => g("default", "react-dom", !1, [1, 18, 2, 0], () => S.e(1098).then(() => () => S(1098)))
        }, w = {
          181: [181],
          1127: [1127],
          8136: [8136],
          8429: [8429]
        }, _ = {}, S.f.consumes = (e, a) => {
          S.o(w, e) && w[e].forEach(e => {
            if (S.o(y, e)) return a.push(y[e]);
            if (!_[e]) {
              var r = a => {
                y[e] = 0, S.m[e] = r => {
                  delete S.c[e], r.exports = a()
                }
              };
              _[e] = !0;
              var t = a => {
                delete y[e], S.m[e] = r => {
                  throw delete S.c[e], a
                }
              };
              try {
                var f = v[e]();
                f.then ? a.push(y[e] = f.then(r).catch(t)) : r(f)
              } catch (e) {
                t(e)
              }
            }
          })
        }, (() => {
          if ("undefined" != typeof document) {
            var e = {
              9737: 0
            };
            S.f.miniCss = (a, r) => {
              e[a] ? r.push(e[a]) : 0 !== e[a] && {
                2364: 1,
                3079: 1,
                9741: 1
              } [a] && r.push(e[a] = (e => new Promise((a, r) => {
                var t = S.miniCssF(e),
                  f = S.p + t;
                if (((e, a) => {
                    for (var r = document.getElementsByTagName("link"), t = 0; t < r.length; t++) {
                      var f = (c = r[t]).getAttribute("data-href") || c.getAttribute("href");
                      if ("stylesheet" === c.rel && (f === e || f === a)) return c
                    }
                    var d = document.getElementsByTagName("style");
                    for (t = 0; t < d.length; t++) {
                      var c;
                      if ((f = (c = d[t]).getAttribute("data-href")) === e || f === a) return c
                    }
                  })(t, f)) return a();
                ((e, a, r, t, f) => {
                  var d = document.createElement("link");
                  d.rel = "stylesheet", d.type = "text/css", S.nc && (d.nonce = S.nc), d.onerror = d.onload = r => {
                    if (d.onerror = d.onload = null, "load" === r.type) t();
                    else {
                      var c = r && r.type,
                        n = r && r.target && r.target.href || a,
                        o = new Error("Loading CSS chunk " + e + " failed.\n(" + c + ": " + n + ")");
                      o.name = "ChunkLoadError", o.code = "CSS_CHUNK_LOAD_FAILED", o.type = c, o.request = n, d.parentNode && d.parentNode.removeChild(d), f(o)
                    }
                  }, d.href = a, document.head.appendChild(d)
                })(e, f, 0, a, r)
              }))(a).then(() => {
                e[a] = 0
              }, r => {
                throw delete e[a], r
              }))
            }
          }
        })(), (() => {
          var e = {
            9737: 0
          };
          S.f.j = (a, r) => {
            var t = S.o(e, a) ? e[a] : void 0;
            if (0 !== t)
              if (t) r.push(t[2]);
              else if (/^(1127|181|8136|8429)$/.test(a)) e[a] = 0;
            else {
              var f = new Promise((r, f) => t = e[a] = [r, f]);
              r.push(t[2] = f);
              var d = S.p + S.u(a),
                c = new Error;
              S.l(d, r => {
                if (S.o(e, a) && (0 !== (t = e[a]) && (e[a] = void 0), t)) {
                  var f = r && ("load" === r.type ? "missing" : r.type),
                    d = r && r.target && r.target.src;
                  c.message = "Loading chunk " + a + " failed.\n(" + f + ": " + d + ")", c.name = "ChunkLoadError", c.type = f, c.request = d, t[1](c)
                }
              }, "chunk-" + a, a)
            }
          };
          var a = (a, r) => {
              var t, f, [d, c, n] = r,
                o = 0;
              if (d.some(a => 0 !== e[a])) {
                for (t in c) S.o(c, t) && (S.m[t] = c[t]);
                n && n(S)
              }
              for (a && a(r); o < d.length; o++) f = d[o], S.o(e, f) && e[f] && e[f][0](), e[f] = 0
            },
            r = self.webpackChunk_rockstargames_modules_core_gif_viewer = self.webpackChunk_rockstargames_modules_core_gif_viewer || [];
          r.forEach(a.bind(null, 0)), r.push = a.bind(null, r.push.bind(r))
        })(), S(3032), S(4848)
      })())
    }
  }
});