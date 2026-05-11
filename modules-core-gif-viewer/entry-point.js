try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "ba3dfd90-98fe-4cec-b9f6-eb332d76d682", e._sentryDebugIdIdentifier = "sentry-dbid-ba3dfd90-98fe-4cec-b9f6-eb332d76d682")
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
            8419(e, a, r) {
              (0, r(7411).w)(1)
            },
            7411(e, a, r) {
              const t = r(7027).y;
              a.w = function(e) {
                if (e || (e = 1), !r.y.meta || !r.y.meta.url) throw console.error("__system_context__", r.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                r.p = t(r.y.meta.url, e)
              }
            },
            3032(e, a, r) {
              r(8419)
            },
            7027(e, a, r) {
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
            4848(e, a, r) {
              "use strict";
              var t = {
                  "./index": () => Promise.all([r.e(1127), r.e(3331), r.e(9741)]).then(() => () => r(9741)),
                  "./lazy": () => Promise.all([r.e(1127), r.e(181), r.e(3331), r.e(2364)]).then(() => () => r(2364)),
                  "./tina": () => Promise.all([r.e(898), r.e(1127), r.e(8429), r.e(3331), r.e(8732)]).then(() => () => r(792)),
                  "./tinaBlockTemplates": () => Promise.all([r.e(898), r.e(1127), r.e(8429), r.e(3331), r.e(8732)]).then(() => () => r(792))
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
          131: "e945b310e02ae17d0b3bae42ca1aec74",
          278: "657c439994a4b9a0be62bad5803d4f92",
          299: "c4a5082daf1de4ce85b3fb86832db171",
          314: "0f194b8b259b81d455426a44a3cd3d6a",
          662: "541b33370ad3322ca75ccfa4291b9a6a",
          824: "8c8c17962ea8c19602122fdd96e155ae",
          898: "a7778f186b1d7daea403f5792c446b11",
          907: "cd6e3e23c7c8c3bfe2763b88252ab980",
          1054: "d004f7c0f6a27cba5293e1b1d7e6b00d",
          1098: "4c6856d284be029a8f8e16282a7df733",
          1242: "8c4ae8937f0a3cc18f80caa3b53bdc7a",
          1395: "2da56d96d9bf174770215960d6f662d6",
          1822: "cc0c2be15c49c98338b4c139de7fed30",
          1868: "ec73877ff383baab99cdca5a1ab76273",
          2156: "be104ec5783e18d6cbfcae89c395b842",
          2171: "480b8b4d3fe797a5fd721c52bedaf485",
          2221: "5082b1b002126f23ea045d24d90183df",
          2243: "45954afd138d20a0354febd35c0c14b7",
          2295: "882aaacd66b613670e6b3a5d35eb906e",
          2347: "7cae0d096401655fbe5b19dd87ae9f5b",
          2364: "adbc9f391319cec7b7beb29ec87d7edb",
          2365: "725bb5951d84a8cbab3c9831b48c4bc7",
          2398: "3f731bc67946b0bab94c4aeb98762414",
          2466: "3eaedc9ead26c4ab607d0e8e674b4076",
          2642: "353ef9ce37e8e47a8483bd1d33144a32",
          2678: "d780e88ea595f5bb319cbf4e418d3db1",
          2864: "54d5db5215bc4c7f456471a0d6d48de1",
          3034: "87b55288783c7e92be6d1b4d8451b300",
          3197: "edfb8637b72577215ec29beb2368c6f9",
          3343: "0567f6d201bb1a0d617be82151769c80",
          3370: "8f9f0dc33dabaaa24557ec047422e552",
          3475: "e2d31fdb77bc9cac4f630da507899959",
          3486: "6f3258bec14a1edc67259acd52450caf",
          3697: "353c88da2e7224f223a8563c3c323dd2",
          3885: "3a094609e63ce259e429da8907fd654c",
          3941: "d0f04c36ff17bc73f3bb7aabe39c0bd3",
          4011: "c36f5ce380d9cddc0b4c20355d78ff3b",
          4528: "3a37789e9d7fcee71a61b7f931025aec",
          4578: "7b21673085b15bb671d2c3a1593bfbd5",
          4621: "3d49ce6142de6de291791adc0498ef2a",
          4700: "9f9fb5bbb1c85411cd249c42786133e4",
          4710: "96988fa15426fa720b116907e195b821",
          4731: "6407cef4ed057d5cec353503cd2f4922",
          4799: "ce801e6b1a54dae1e896ffc1a5729126",
          4851: "2dde2587adb010b0dc377f5a95a4cdf5",
          4861: "d5095d78475f125a301689e7f9df70fa",
          4913: "35ffdd074e51c05cc6a4261367b0d1fc",
          5018: "e1dcad089f43fedfab3dc87b2a61fe0d",
          5233: "251ad5f9465204b9384df6cfa8ff9673",
          5259: "3bc23f32cb4edbb0f6995ffa3a3690ba",
          5389: "3f4b0a72fcae927f9e9b0fc5917d92e8",
          5455: "eaaff2435763cba0a343fa7165c57dde",
          5530: "892070986e75a87564e6d32fed8e8dbb",
          5639: "796f682a87d1812d001c617f1cfa284e",
          5663: "224f1e7f065dc757653950b37afa6ab3",
          5742: "d5792f66cbcade38e7286713a678db76",
          5830: "2f21bb9143bd68718aca784534d37634",
          5832: "e5a3b93089b47b658d63ff976c9b1f2f",
          5932: "d0efdc6408732892fe48d15c61d7fca6",
          6267: "758c82fc391285015fcb6ea2c95486fc",
          6280: "c9b6b4e8f72208159291375ff751b292",
          6285: "92cdce756323b65baf9410240093aea6",
          6361: "6a48acd738c39a25362b7b0194b06bc2",
          6664: "8f626bf094466690aae5f4ae421fcce9",
          6879: "f276284d74ac9d754d64a60530832768",
          6891: "fa433c9926c186fb0d98847464303f65",
          6997: "7f4a6295f59148c0bb1dd4cdf0336c9d",
          7010: "47af332b8c95ddf9907063db0b004544",
          7073: "8b83e0f3ca00b9ef6d49a4a4ccaf44ef",
          7436: "a82aed9772d48f7ea5d12b0599cfb34c",
          7452: "ebe8fd1e3cdb141d69c7b9177f7b17c2",
          7453: "907d8a44d3e8db6acd2c5b75bd067e4d",
          7970: "37a0d666e5335573c1cf5ebef4d75e4b",
          8272: "9e6643282df369af540ab2c31dc2f3b4",
          8391: "1c14fae45996c6343f8133e3979882d9",
          8431: "d8dfc6b0b5cec2adb1e91e0d7c1c81bd",
          8732: "b4ef439f0ef11274b37c2ea2770f1bdb",
          8755: "9f9110b9537fb9b7b2d55de154fe9610",
          8880: "5b571f42646d60ed230d60a9ba427d28",
          8970: "c60f77da3d765296911e5748f7745711",
          9022: "56822176a2e207d907477b077e73b35d",
          9028: "edd8657606eb1ff23630fb9679e9a5a2",
          9126: "55468376fb0066d706b394b24fba41b7",
          9377: "624be13a73b1f39c8e55f864ba0718bb",
          9615: "13c2de93703b98d0e7a1d40f2782468c",
          9741: "77b920ea06d012dd8a5a8eedc83d3b19",
          9936: "d87e8a412c4d2e118b25c35638880f77",
          9990: "b9393c42d97a96141e5e2223b8095c3d"
        } [e] + ".js", S.miniCssF = e => "css/" + {
          2364: "ce5ff43a63621cf81236cc6e4165a5db",
          8732: "b5328e2f95f5b178239a08711e5d52f6",
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
            c || (n = !0, (c = document.createElement("script")).charset = "utf-8", S.nc && c.setAttribute("nonce", S.nc), c.setAttribute("data-webpack", f + r), c.src = e), t[e] = [a];
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
              return "default" === r && (n("@rsgweb/utils", "0.0.0", () => Promise.all([S.e(898), S.e(1395), S.e(1127), S.e(181), S.e(5455), S.e(2295)]).then(() => () => S(8035))), n("react-dom", "18.3.1", () => Promise.all([S.e(1098), S.e(1127)]).then(() => () => S(1098))), n("react-router-dom", "6.30.3", () => Promise.all([S.e(5389), S.e(1127), S.e(8429)]).then(() => () => S(5389))), n("react", "18.3.1", () => S.e(8431).then(() => () => S(8431)))), e[r] = o.length ? Promise.all(o).then(() => e[r] = 1) : 1
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
          3331: () => g("default", "@rsgweb/utils", !1, [0], () => Promise.all([S.e(898), S.e(1395), S.e(181), S.e(5455)]).then(() => () => S(8035))),
          181: () => g("default", "react-router-dom", !1, [1, 6, 11, 2], () => Promise.all([S.e(5389), S.e(8429)]).then(() => () => S(5389))),
          8429: () => g("default", "react-dom", !1, [1, 18, 2, 0], () => S.e(1098).then(() => () => S(1098)))
        }, w = {
          181: [181],
          1127: [1127],
          3331: [3331],
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
                8732: 1,
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
              else if (/^(1127|181|3331|8429)$/.test(a)) e[a] = 0;
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