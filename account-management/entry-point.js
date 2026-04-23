try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "c9f49191-f7eb-4fc1-a740-69086f1f9e49", e._sentryDebugIdIdentifier = "sentry-dbid-c9f49191-f7eb-4fc1-a740-69086f1f9e49")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160",
    packageName: "@rockstargames/account-management"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register([], function(e, a) {
  return {
    execute: function() {
      e((() => {
        var e, t, r, f, n, d, o, c, b, i, l, s, u, p, h, m, y, g, v, w, E, _ = {
            126: (e, a, t) => {
              const r = t(60358).y;
              a.w = function(e) {
                if (e || (e = 1), !t.y.meta || !t.y.meta.url) throw console.error("__system_context__", t.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                t.p = r(t.y.meta.url, e)
              }
            },
            11e3: (e, a, t) => {
              (0, t(126).w)(1)
            },
            14666: (e, a, t) => {
              "use strict";
              var r = {
                  "./main": () => Promise.all([t.e(3798), t.e(9498), t.e(4914), t.e(6672), t.e(7723)]).then(() => () => t(8515))
                },
                f = (e, a) => (t.R = a, a = t.o(r, e) ? r[e]() : Promise.resolve().then(() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                }), t.R = void 0, a),
                n = (e, a) => {
                  if (t.S) {
                    var r = "default",
                      f = t.S[r];
                    if (f && f !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return t.S[r] = e, t.I(r, a)
                  }
                };
              t.d(a, {
                get: () => f,
                init: () => n
              })
            },
            55483: (e, a, t) => {
              t(11e3)
            },
            60358: (e, a, t) => {
              a.y = function(e, a) {
                var t = document.createElement("a");
                t.href = e;
                for (var r = "/" === t.pathname[0] ? t.pathname : "/" + t.pathname, f = 0, n = r.length; f !== a && n >= 0;) "/" === r[--n] && f++;
                if (f !== a) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + a + ") is greater than the number of directories (" + f + ") in the URL path " + e);
                var d = r.slice(0, n + 1);
                return t.protocol + "//" + t.host + d
              };
              Number.isInteger
            }
          },
          S = {};

        function k(e) {
          var a = S[e];
          if (void 0 !== a) return a.exports;
          var t = S[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return _[e].call(t.exports, t, t.exports, k), t.loaded = !0, t.exports
        }
        return k.m = _, k.c = S, k.y = a, k.n = e => {
          var a = e && e.__esModule ? () => e.default : () => e;
          return k.d(a, {
            a
          }), a
        }, t = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, k.t = function(a, r) {
          if (1 & r && (a = this(a)), 8 & r) return a;
          if ("object" == typeof a && a) {
            if (4 & r && a.__esModule) return a;
            if (16 & r && "function" == typeof a.then) return a
          }
          var f = Object.create(null);
          k.r(f);
          var n = {};
          e = e || [null, t({}), t([]), t(t)];
          for (var d = 2 & r && a;
            ("object" == typeof d || "function" == typeof d) && !~e.indexOf(d); d = t(d)) Object.getOwnPropertyNames(d).forEach(e => n[e] = () => a[e]);
          return n.default = () => a, k.d(f, n), f
        }, k.d = (e, a) => {
          for (var t in a) k.o(a, t) && !k.o(e, t) && Object.defineProperty(e, t, {
            enumerable: !0,
            get: a[t]
          })
        }, k.f = {}, k.e = e => Promise.all(Object.keys(k.f).reduce((a, t) => (k.f[t](e, a), a), [])), k.u = e => ({
          131: "40fbe3ff03cc0d05f984",
          278: "4c3488604566d046e60e",
          299: "d5a27e3eb6013c232cb2",
          314: "5f98e004227094934c79",
          551: "f1cebb0c68ee1f7b9429",
          602: "4b3ba3e5219f4e6a8a41",
          642: "5fd0afaa5be2f0a1b90c",
          662: "d441128796f13f83c8d6",
          824: "8af29119ab6cb7c8a73e",
          907: "4200ef8ad93399122e7c",
          961: "38407ac22720f9ff5aff",
          1052: "d668143d28ce765c5514",
          1054: "1c5baffe3b37b7a45442",
          1160: "65277f9bf2d7d6f60d2a",
          1242: "906b073b2c92567b69b1",
          1423: "ac115a6ff619e4827b17",
          1637: "6f8dd06e2f9bdbf956ee",
          1706: "e1796fee5d5728d3aec9",
          1799: "82a8537bf382ef366c1c",
          1822: "d682fbdf217fcd629b74",
          1868: "8f790d7a10657c53b512",
          2156: "ac2a6fb952b6430f7e7c",
          2171: "a006df96732a19fa2d35",
          2221: "7f5bc6ce7306b5cd99a8",
          2243: "da2bb041ad39def6e9a9",
          2347: "bb5f0e0ad982044059f5",
          2365: "a422dbbd8b82e76f1343",
          2398: "5b77f38653a4730a7e86",
          2466: "0f1ee4d6cef487863188",
          2505: "c16c98f0771caae7d7bb",
          2642: "110f78fcb72854501523",
          2648: "288bcd19c2afecfcf907",
          2678: "8e7bf3955ca29e1a6845",
          2864: "b00b06c62c254e6a4e35",
          3034: "3de97d4fd305b8948311",
          3197: "266493bf067f258335d0",
          3343: "ec82ff999a4d6304db3c",
          3370: "1002c75251fdf4f327c7",
          3475: "41a4ca05031c8569619f",
          3486: "e4aa8cf3e6be5bf40e7b",
          3682: "06e43629287566fefd21",
          3697: "ce9c73dfdec1a888f898",
          3798: "813e4ae060531ea367e6",
          3885: "1004e7c0a5d2f6324e6c",
          3941: "03d928f16048406d27d1",
          4011: "ff3e2102b755b1932fc3",
          4471: "f4d4fba9696598be54e1",
          4528: "9ddb19cebd0d47c2eacd",
          4618: "958ccbc5a505644f44e9",
          4621: "9b5a093ada767340c2ec",
          4700: "01c091bff01bdc3421f4",
          4710: "d7062712b49128abdd12",
          4731: "d30fbf704adc492e623b",
          4781: "1cc61dbde4fd3c389cab",
          4786: "5b9c49d6a8fbca0969ac",
          4799: "2d51203ddb8d77140349",
          4851: "e36ebe938ad14409cf1d",
          4861: "7d57bfc2fbaef4181de2",
          4913: "fa06007dfef187b6754f",
          5018: "ce1a40279989e560c080",
          5048: "05438c7661a1b7eb4b06",
          5110: "3e2cb30ce0a686aa6b12",
          5233: "be22215e31e86cca2eaf",
          5259: "3f0b5b5f207c27b9eebf",
          5530: "878209aa1db66b755d9b",
          5593: "ea96d30cf4a1b8020e6b",
          5639: "e742cdd08002bacb6266",
          5663: "e0c9b0ae77429d45853c",
          5739: "9a2611b1ae8249ae7712",
          5742: "9f84caf7cd4f71754450",
          5801: "734b8c18fa6c3dabc392",
          5830: "f2930e262fe5fe004c2a",
          5832: "f2b8389a069b74fcd93a",
          6267: "ad8dbd3dc5590ae848a9",
          6280: "a1bddd7b90d231c55e30",
          6285: "b0faf96501301625ea09",
          6361: "6a51f082c4982b711271",
          6540: "7708314b615736c75f7a",
          6564: "cb7bce4dc9e0854ed8ac",
          6582: "c0f9c2a17b8d014f7f88",
          6589: "e0c59522fc67099229b8",
          6664: "1fb79ef5234de842bf12",
          6758: "2b13310e75414168578e",
          6855: "1d0e57527e33fc4d82bf",
          6879: "99e8fdc52f168b750b97",
          6891: "daf2487c608812a47066",
          6997: "bf521e4af479dfed455f",
          7010: "d44c229923223070ef1c",
          7073: "aeb5f2117df39d2f948c",
          7436: "0b00781eb55ebbbc8b97",
          7452: "00682bb42dc58ea6e8e0",
          7453: "5787513458507f5c28b5",
          7553: "7660de5c16d072c32f23",
          7723: "6ce4c42b8b70736f2848",
          7792: "c79acbbea03dde0c74a3",
          7970: "443ad3d5905d7c223f8e",
          8134: "54921574817c892d9909",
          8166: "219388ed628f69cf67d6",
          8272: "13682098aa3a7f48afec",
          8348: "da66eeff134bc67242a9",
          8391: "a0f06d98a88b9b1544c4",
          8432: "6365e2a229bb3c9fa4a9",
          8729: "a1daa5473b383d50f26a",
          8755: "96726ef26ac92e7ca18a",
          8880: "26685c1615c3d35066e5",
          8970: "8dec781cc50e64cea1f9",
          9022: "908436507abb6e08083e",
          9028: "fcc47683e94352b999f9",
          9126: "efebd2b39a8dea28d17c",
          9359: "c477fed3a1fee5e0d2bc",
          9377: "dd6775d93be9a768d524",
          9430: "f7990ede2713da1f7e79",
          9498: "8f59e228836f681342ee",
          9615: "8d16f12bbdd6786dcd6b",
          9936: "511a81f501784b26b048",
          9990: "1cfa753aabc926f849ff"
        } [e] + ".js"), k.miniCssF = e => "css/" + {
          3798: "bfbbe3558d2731786f68",
          7792: "4d39b6f8e52685ece1ab",
          9498: "76acc0e574947ef0e6ef"
        } [e] + ".css", k.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), k.hmd = e => ((e = Object.create(e)).children || (e.children = []), Object.defineProperty(e, "exports", {
          enumerable: !0,
          set: () => {
            throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " + e.id)
          }
        }), e), k.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), r = {}, f = "account-management:", k.l = (e, a, t, n) => {
          if (r[e]) r[e].push(a);
          else {
            var d, o;
            if (void 0 !== t)
              for (var c = document.getElementsByTagName("script"), b = 0; b < c.length; b++) {
                var i = c[b];
                if (i.getAttribute("src") == e || i.getAttribute("data-webpack") == f + t) {
                  d = i;
                  break
                }
              }
            d || (o = !0, (d = document.createElement("script")).charset = "utf-8", d.timeout = 120, k.nc && d.setAttribute("nonce", k.nc), d.setAttribute("data-webpack", f + t), d.src = e), r[e] = [a];
            var l = (a, t) => {
                d.onerror = d.onload = null, clearTimeout(s);
                var f = r[e];
                if (delete r[e], d.parentNode && d.parentNode.removeChild(d), f && f.forEach(e => e(t)), a) return a(t)
              },
              s = setTimeout(l.bind(null, void 0, {
                type: "timeout",
                target: d
              }), 12e4);
            d.onerror = l.bind(null, d.onerror), d.onload = l.bind(null, d.onload), o && document.head.appendChild(d)
          }
        }, k.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, k.nmd = e => (e.paths = [], e.children || (e.children = []), e), (() => {
          k.S = {};
          var e = {},
            a = {};
          k.I = (t, r) => {
            r || (r = []);
            var f = a[t];
            if (f || (f = a[t] = {}), !(r.indexOf(f) >= 0)) {
              if (r.push(f), e[t]) return e[t];
              k.o(k.S, t) || (k.S[t] = {});
              var n = k.S[t],
                d = "account-management",
                o = (e, a, t, r) => {
                  var f = n[e] = n[e] || {},
                    o = f[a];
                  (!o || !o.loaded && (!r != !o.eager ? r : d > o.from)) && (f[a] = {
                    get: t,
                    from: d,
                    eager: !!r
                  })
                },
                c = [];
              return "default" === t && (o("@foundry/react", "5.19.0", () => Promise.all([k.e(3798), k.e(7792), k.e(4914), k.e(6672)]).then(() => () => k(87792))), o("react-dom", "18.3.1", () => Promise.all([k.e(961), k.e(4914)]).then(() => () => k(40961))), o("react-router-dom", "6.30.1", () => Promise.all([k.e(2648), k.e(4914), k.e(6672)]).then(() => () => k(92648))), o("react", "18.3.1", () => k.e(6540).then(() => () => k(96540)))), e[t] = c.length ? Promise.all(c).then(() => e[t] = 1) : 1
            }
          }
        })(), k.p = "/", n = e => {
          var a = e => e.split(".").map(e => +e == e ? +e : e),
            t = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
            r = t[1] ? a(t[1]) : [];
          return t[2] && (r.length++, r.push.apply(r, a(t[2]))), t[3] && (r.push([]), r.push.apply(r, a(t[3]))), r
        }, d = (e, a) => {
          e = n(e), a = n(a);
          for (var t = 0;;) {
            if (t >= e.length) return t < a.length && "u" != (typeof a[t])[0];
            var r = e[t],
              f = (typeof r)[0];
            if (t >= a.length) return "u" == f;
            var d = a[t],
              o = (typeof d)[0];
            if (f != o) return "o" == f && "n" == o || "s" == o || "u" == f;
            if ("o" != f && "u" != f && r != d) return r < d;
            t++
          }
        }, o = e => {
          var a = e[0],
            t = "";
          if (1 === e.length) return "*";
          if (a + .5) {
            t += 0 == a ? ">=" : -1 == a ? "<" : 1 == a ? "^" : 2 == a ? "~" : a > 0 ? "=" : "!=";
            for (var r = 1, f = 1; f < e.length; f++) r--, t += "u" == (typeof(d = e[f]))[0] ? "-" : (r > 0 ? "." : "") + (r = 2, d);
            return t
          }
          var n = [];
          for (f = 1; f < e.length; f++) {
            var d = e[f];
            n.push(0 === d ? "not(" + c() + ")" : 1 === d ? "(" + c() + " || " + c() + ")" : 2 === d ? n.pop() + " " + n.pop() : o(d))
          }
          return c();

          function c() {
            return n.pop().replace(/^\((.+)\)$/, "$1")
          }
        }, c = (e, a) => {
          if (0 in e) {
            a = n(a);
            var t = e[0],
              r = t < 0;
            r && (t = -t - 1);
            for (var f = 0, d = 1, o = !0;; d++, f++) {
              var b, i, l = d < e.length ? (typeof e[d])[0] : "";
              if (f >= a.length || "o" == (i = (typeof(b = a[f]))[0])) return !o || ("u" == l ? d > t && !r : "" == l != r);
              if ("u" == i) {
                if (!o || "u" != l) return !1
              } else if (o)
                if (l == i)
                  if (d <= t) {
                    if (b != e[d]) return !1
                  } else {
                    if (r ? b > e[d] : b < e[d]) return !1;
                    b != e[d] && (o = !1)
                  }
              else if ("s" != l && "n" != l) {
                if (r || d <= t) return !1;
                o = !1, d--
              } else {
                if (d <= t || i < l != r) return !1;
                o = !1
              } else "s" != l && "n" != l && (o = !1, d--)
            }
          }
          var s = [],
            u = s.pop.bind(s);
          for (f = 1; f < e.length; f++) {
            var p = e[f];
            s.push(1 == p ? u() | u() : 2 == p ? u() & u() : p ? c(p, a) : !u())
          }
          return !!u()
        }, b = (e, a) => e && k.o(e, a), i = e => (e.loaded = 1, e.get()), l = e => Object.keys(e).reduce((a, t) => (e[t].eager && (a[t] = e[t]), a), {}), s = (e, a, t) => {
          var r = t ? l(e[a]) : e[a];
          return Object.keys(r).reduce((e, a) => !e || !r[e].loaded && d(e, a) ? a : e, 0)
        }, u = (e, a, t, r) => "Unsatisfied version " + t + " from " + (t && e[a][t].from) + " of shared singleton module " + a + " (required " + o(r) + ")", p = e => {
          throw new Error(e)
        }, h = e => {
          "undefined" != typeof console && console.warn && console.warn(e)
        }, m = (e, a, t) => t ? t() : ((e, a) => p("Shared module " + a + " doesn't exist in shared scope " + e))(e, a), y = (e => function(a, t, r, f, n) {
          var d = k.I(a);
          return d && d.then && !r ? d.then(e.bind(e, a, k.S[a], t, !1, f, n)) : e(a, k.S[a], t, r, f, n)
        })((e, a, t, r, f, n) => {
          if (!b(a, t)) return m(e, t, n);
          var d = s(a, t, r);
          return c(f, d) || h(u(a, t, d, f)), i(a[t][d])
        }), g = {}, v = {
          44914: () => y("default", "react", !1, [1, 18, 2, 0], () => k.e(6540).then(() => () => k(96540))),
          86672: () => y("default", "react-dom", !1, [1, 18, 2, 0], () => k.e(961).then(() => () => k(40961))),
          23342: () => y("default", "@foundry/react", !1, [2, 5, 19], () => k.e(7792).then(() => () => k(87792))),
          76716: () => y("default", "react-router-dom", !1, [1, 6, 11, 2], () => k.e(2648).then(() => () => k(92648)))
        }, w = {
          4914: [44914],
          6672: [86672],
          7723: [23342, 76716]
        }, E = {}, k.f.consumes = (e, a) => {
          k.o(w, e) && w[e].forEach(e => {
            if (k.o(g, e)) return a.push(g[e]);
            if (!E[e]) {
              var t = a => {
                g[e] = 0, k.m[e] = t => {
                  delete k.c[e], t.exports = a()
                }
              };
              E[e] = !0;
              var r = a => {
                delete g[e], k.m[e] = t => {
                  throw delete k.c[e], a
                }
              };
              try {
                var f = v[e]();
                f.then ? a.push(g[e] = f.then(t).catch(r)) : t(f)
              } catch (e) {
                r(e)
              }
            }
          })
        }, (() => {
          if ("undefined" != typeof document) {
            var e = {
              5711: 0
            };
            k.f.miniCss = (a, t) => {
              e[a] ? t.push(e[a]) : 0 !== e[a] && {
                3798: 1,
                7792: 1,
                9498: 1
              } [a] && t.push(e[a] = (e => new Promise((a, t) => {
                var r = k.miniCssF(e),
                  f = k.p + r;
                if (((e, a) => {
                    for (var t = document.getElementsByTagName("link"), r = 0; r < t.length; r++) {
                      var f = (d = t[r]).getAttribute("data-href") || d.getAttribute("href");
                      if ("stylesheet" === d.rel && (f === e || f === a)) return d
                    }
                    var n = document.getElementsByTagName("style");
                    for (r = 0; r < n.length; r++) {
                      var d;
                      if ((f = (d = n[r]).getAttribute("data-href")) === e || f === a) return d
                    }
                  })(r, f)) return a();
                ((e, a, t, r, f) => {
                  var n = document.createElement("link");
                  n.rel = "stylesheet", n.type = "text/css", k.nc && (n.nonce = k.nc), n.onerror = n.onload = t => {
                    if (n.onerror = n.onload = null, "load" === t.type) r();
                    else {
                      var d = t && t.type,
                        o = t && t.target && t.target.href || a,
                        c = new Error("Loading CSS chunk " + e + " failed.\n(" + d + ": " + o + ")");
                      c.name = "ChunkLoadError", c.code = "CSS_CHUNK_LOAD_FAILED", c.type = d, c.request = o, n.parentNode && n.parentNode.removeChild(n), f(c)
                    }
                  }, n.href = a, document.head.appendChild(n)
                })(e, f, 0, a, t)
              }))(a).then(() => {
                e[a] = 0
              }, t => {
                throw delete e[a], t
              }))
            }
          }
        })(), (() => {
          var e = {
            5711: 0
          };
          k.f.j = (a, t) => {
            var r = k.o(e, a) ? e[a] : void 0;
            if (0 !== r)
              if (r) t.push(r[2]);
              else if (/^(4914|6672)$/.test(a)) e[a] = 0;
            else {
              var f = new Promise((t, f) => r = e[a] = [t, f]);
              t.push(r[2] = f);
              var n = k.p + k.u(a),
                d = new Error;
              k.l(n, t => {
                if (k.o(e, a) && (0 !== (r = e[a]) && (e[a] = void 0), r)) {
                  var f = t && ("load" === t.type ? "missing" : t.type),
                    n = t && t.target && t.target.src;
                  d.message = "Loading chunk " + a + " failed.\n(" + f + ": " + n + ")", d.name = "ChunkLoadError", d.type = f, d.request = n, r[1](d)
                }
              }, "chunk-" + a, a)
            }
          };
          var a = (a, t) => {
              var r, f, [n, d, o] = t,
                c = 0;
              if (n.some(a => 0 !== e[a])) {
                for (r in d) k.o(d, r) && (k.m[r] = d[r]);
                o && o(k)
              }
              for (a && a(t); c < n.length; c++) f = n[c], k.o(e, f) && e[f] && e[f][0](), e[f] = 0
            },
            t = self.webpackChunkaccount_management = self.webpackChunkaccount_management || [];
          t.forEach(a.bind(null, 0)), t.push = a.bind(null, t.push.bind(t))
        })(), k.nc = void 0, k(55483), k(14666)
      })())
    }
  }
});