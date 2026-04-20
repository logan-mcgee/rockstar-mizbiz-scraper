try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "c8ced50a-f607-4079-8c6f-7147cb68ab13", e._sentryDebugIdIdentifier = "sentry-dbid-c8ced50a-f607-4079-8c6f-7147cb68ab13")
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
                  "./tina": () => Promise.all([r.e(3262), r.e(1127), r.e(8429), r.e(8136), r.e(3079)]).then(() => () => r(792)),
                  "./tinaBlockTemplates": () => Promise.all([r.e(3262), r.e(1127), r.e(8429), r.e(8136), r.e(3079)]).then(() => () => r(792))
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
          131: "1be9ac92ea112c6b4ed279cc1b569535",
          278: "14ea4a7c7f16b40b74abd71400759cc8",
          299: "1504642cd2c449abcb868e35308a1629",
          314: "3c7d2a496e463a4efd7f9de7a5d0ca9d",
          662: "48699205e57fb03dfd84c9a625df4641",
          824: "6386c8c01c5c15d005441af823ca65b4",
          907: "5efcb8d1bb87fe17d37bc119b3a4eb8e",
          1054: "f8972abd0826283b7bf699d22be25e84",
          1098: "a5a43c27ef4b44f71cfb25071eeaf980",
          1242: "a5f381e724ee5a944dbd7617ae8872e2",
          1822: "d08da1ec4dd146947a3ed268ee7bd19c",
          1868: "c3fc32144b70ebefb38ccf16cd66cc91",
          2156: "0fa4cb575162bda306d2021dbeaac2fd",
          2171: "900dba46b3217fe234a904ae12311df2",
          2221: "16b562d235bd2da8784b0fba6a8ac955",
          2243: "46418db907a95c6c3a4ff200fa641003",
          2250: "cf8e928ca386b1dbf16d98c0f769e023",
          2295: "bdf12fce5c8dbae3b6fed49d9ebfe45c",
          2306: "0da0f764c7abe87a5876748b96add8c8",
          2347: "5f27c0a10e4f20b3f31b21b0b5b4dae7",
          2364: "65955745c29088983818054c31e6e5a5",
          2365: "18dbb6ed1a5ccb009b65ab6c8e14bfea",
          2398: "de4877ec4da9f52591318578525029e3",
          2466: "55b025a35126c091dccb896a9d6dedb6",
          2642: "6423229e6294fca1d929fba4b79df8fa",
          2678: "0a90fd27700f9402fdd62dd476b60f18",
          2864: "76ab2619638786a765b6f9397e8c5212",
          3034: "abd8c5df5c29a92fa74cb5216a248de7",
          3079: "6547877bf67ce468c2631569a4b1e81e",
          3197: "7457335c71b0e9b5ba93e7aed91aef60",
          3262: "80c9c751ee03e5ede9dfe45e1b8871b5",
          3343: "c39dffe3488f905464053366e10d70ad",
          3370: "74e7dd226d6a5350d201bdc4a7a69341",
          3475: "ee48b113e6e352f1ed08a2eb429e8138",
          3486: "a2ffa17a70a456db8419f937ab031cab",
          3697: "59c0cf857bb28cc44b164b3460a91ea7",
          3885: "ba26958da6d958da9ae009aa1ed41361",
          3941: "c7ff6bbfb11f315bf75c840e7d13645e",
          4011: "8c55e544b0fac8cb720c0aa74cef0952",
          4528: "8cfa26058d1cb9ef5198ecdff29e097d",
          4578: "dec122ec8f90a74fefafe720f91295af",
          4621: "9f09a2f20cf763ad8dba4c5145fe07df",
          4700: "c54557379284ccf978fc40ba089dd24a",
          4710: "9a3fb33d76bd959a9350df102c03392b",
          4731: "57a325509a8450b83b1a6842726653b1",
          4799: "dd159f9f881773f4f54cb861887e608a",
          4851: "6d3879059454a7a612e2862735092454",
          4861: "4b1c6ee674b2d737fbb097bd035969f1",
          4913: "39800dd383ecd8b988d739d16c3962bd",
          5018: "41edb3f860791b0314e4a4efc9776fa5",
          5233: "3dea1d58a3db55886a9d8a7d50271b4f",
          5259: "ec354c6bd12f5c509109ca04eaa23c38",
          5389: "6205a0912885eb85b95e405ff601fed0",
          5530: "a2d17ecac8307d1e740dc1bdb94a172e",
          5639: "671dbd415afa0131786067051dc0e113",
          5663: "6c60d5c53c230c9dcab3af4f1d2f2014",
          5742: "dd9d3b27d080617c1771cc1edd9ca69e",
          5830: "e569c810032551c38a3b6e20e47a001d",
          5832: "28741c694de872d5fe3778bb48a2cdd2",
          6267: "52fdcbfbae59720b4e4b21149a50444f",
          6280: "1a0936dbccabe83c4d42c2668801aacd",
          6285: "55837ae43616fa1e010582afb01a50e4",
          6361: "11fc59a7b299c716e2ebad5ab0f1da95",
          6664: "1d5eafaf66c300b49c3f657e6c77180a",
          6879: "d01162d64886334685bfc9fd5c834eb5",
          6891: "9e834dbc374698565d206e62334051c3",
          6997: "f7d95c9653621d60cf74138e2622ce76",
          7010: "7ffcae4fbadfb7e6f0a7cdf95a49259f",
          7073: "c43051d1e612532e6e82a1f8e4e624b6",
          7436: "70ed1e9f98587c15f44a5a88146e9a4b",
          7452: "ae152c481a649cdafe6601b85120318c",
          7453: "aaf326aae486c57288f26274dabdf809",
          7907: "f598fb0ed516f5a7097c8db91a61775b",
          7970: "4446932acce35e43c16acb9878084d0e",
          8272: "f6f105dbda58b7e7ce735a632bb09cfc",
          8391: "a68e4578d781f1ffeeed18d583f27201",
          8431: "58cfea59a816aa2a4129e0cd5e7b7faf",
          8755: "a5a8d8deaf8f485c0fd458eec2e09d84",
          8880: "59872ecf5e74316dd7790b85cdef750c",
          8970: "a39a4be901b6a6950aa78f3390adefa0",
          9022: "be32b380b9fdf5d54e772be29f3baed7",
          9028: "03f0479f467b968eab1a9d45862b9b97",
          9126: "e2142277b74cbae251c7a484fbd92b93",
          9377: "aab995a41eac34f20e27c3eb9830675b",
          9615: "decfd11f04385ac3789649c69e1ca114",
          9741: "e901e3dfe4c41d31fda14b19c7be85c6",
          9936: "e7d1e191a2ae51b30cc70051011eed96",
          9990: "130a57cea0fa5562c3726be2f13442b4"
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
              return "default" === r && (n("@rsgweb/utils", "0.0.0", () => Promise.all([S.e(3262), S.e(2250), S.e(1127), S.e(181), S.e(7907), S.e(2295)]).then(() => () => S(9772))), n("react-dom", "18.3.1", () => Promise.all([S.e(1098), S.e(1127)]).then(() => () => S(1098))), n("react-router-dom", "6.30.1", () => Promise.all([S.e(5389), S.e(1127), S.e(8429)]).then(() => () => S(5389))), n("react", "18.3.1", () => S.e(8431).then(() => () => S(8431)))), e[r] = o.length ? Promise.all(o).then(() => e[r] = 1) : 1
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
          8136: () => g("default", "@rsgweb/utils", !1, [4, 0, 0, 0], () => Promise.all([S.e(3262), S.e(2250), S.e(181), S.e(7907)]).then(() => () => S(9772))),
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