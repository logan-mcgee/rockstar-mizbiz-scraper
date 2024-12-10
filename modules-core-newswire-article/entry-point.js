! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "9cc30dc2-464c-4ebf-8c5e-7af11eb86be6", e._sentryDebugIdIdentifier = "sentry-dbid-9cc30dc2-464c-4ebf-8c5e-7af11eb86be6")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-newswire-article",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register(["@rockstargames/graph-client", "@rockstargames/intl", "@rockstargames/modules-core-gif-viewer", "@rockstargames/modules-core-sc-user", "@rockstargames/modules-core-videoplayer", "@rockstargames/tina", "@rockstargames/utils"], (function(e, t) {
  var a = {},
    r = {},
    c = {},
    d = {},
    o = {},
    n = {},
    f = {};
  return Object.defineProperty(a, "__esModule", {
    value: !0
  }), Object.defineProperty(r, "__esModule", {
    value: !0
  }), Object.defineProperty(c, "__esModule", {
    value: !0
  }), Object.defineProperty(d, "__esModule", {
    value: !0
  }), Object.defineProperty(o, "__esModule", {
    value: !0
  }), Object.defineProperty(n, "__esModule", {
    value: !0
  }), Object.defineProperty(f, "__esModule", {
    value: !0
  }), {
    setters: [function(e) {
      Object.keys(e).forEach((function(t) {
        a[t] = e[t]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(t) {
        r[t] = e[t]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(t) {
        c[t] = e[t]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(t) {
        d[t] = e[t]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(t) {
        o[t] = e[t]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(t) {
        n[t] = e[t]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(t) {
        f[t] = e[t]
      }))
    }],
    execute: function() {
      e((() => {
        var e, s, i, l, u, b, p = {
            6539: (e, t, a) => {
              (0, a(13403).w)(1)
            },
            13403: (e, t, a) => {
              const r = a(75659).y;
              t.w = function(e) {
                if (e || (e = 1), !a.y.meta || !a.y.meta.url) throw console.error("__system_context__", a.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                a.p = r(a.y.meta.url, e)
              }
            },
            32160: (e, t, a) => {
              a(6539)
            },
            75659: (e, t, a) => {
              t.y = function(e, t) {
                var a = document.createElement("a");
                a.href = e;
                for (var r = "/" === a.pathname[0] ? a.pathname : "/" + a.pathname, c = 0, d = r.length; c !== t && d >= 0;) "/" === r[--d] && c++;
                if (c !== t) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + t + ") is greater than the number of directories (" + c + ") in the URL path " + e);
                var o = r.slice(0, d + 1);
                return a.protocol + "//" + a.host + o
              };
              Number.isInteger
            },
            68623: (e, t, a) => {
              "use strict";
              var r = {
                  "./NewswireArticle": () => Promise.all([a.e(3524), a.e(1223), a.e(9269), a.e(4303), a.e(1225), a.e(1189), a.e(6878), a.e(7187), a.e(1403), a.e(1156), a.e(8089), a.e(7185), a.e(285), a.e(1879), a.e(207), a.e(8407), a.e(6758), a.e(9756), a.e(7989), a.e(9493), a.e(2553), a.e(9415), a.e(7207), a.e(825)]).then((() => () => a(80825))),
                  "./NewswireTitle": () => Promise.all([a.e(1403), a.e(1156), a.e(8089), a.e(7185), a.e(285), a.e(353)]).then((() => () => a(85184))),
                  "./components": () => Promise.all([a.e(3524), a.e(1223), a.e(9269), a.e(4303), a.e(1225), a.e(1189), a.e(1403), a.e(1156), a.e(8089), a.e(7185), a.e(285), a.e(1879), a.e(207), a.e(8407), a.e(6758), a.e(9756), a.e(7989), a.e(9493), a.e(2553)]).then((() => () => a(26750))),
                  "./index": () => Promise.all([a.e(3524), a.e(1223), a.e(9269), a.e(4303), a.e(1225), a.e(1189), a.e(1403), a.e(1156), a.e(8089), a.e(7185), a.e(285), a.e(1879), a.e(207), a.e(8407), a.e(6758), a.e(9756), a.e(7989), a.e(9493), a.e(2553), a.e(9415), a.e(4216)]).then((() => () => a(74216))),
                  "./tinaBlockTemplates": () => Promise.all([a.e(7601), a.e(1403), a.e(1156), a.e(8089), a.e(7185), a.e(1879), a.e(8407), a.e(6758), a.e(5800)]).then((() => () => a(75800))),
                  "./types": () => Promise.all([a.e(3524), a.e(1223), a.e(9269), a.e(4303), a.e(1225), a.e(1189), a.e(6878), a.e(7187), a.e(1403), a.e(1156), a.e(8089), a.e(7185), a.e(285), a.e(1879), a.e(207), a.e(8407), a.e(6758), a.e(9756), a.e(7989), a.e(9493), a.e(2553), a.e(9415), a.e(7207), a.e(9435)]).then((() => () => a(69435)))
                },
                c = (e, t) => (a.R = t, t = a.o(r, e) ? r[e]() : Promise.resolve().then((() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                })), a.R = void 0, t),
                d = (e, t) => {
                  if (a.S) {
                    var r = "default",
                      c = a.S[r];
                    if (c && c !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return a.S[r] = e, a.I(r, t)
                  }
                };
              a.d(t, {
                get: () => c,
                init: () => d
              })
            },
            61024: e => {
              "use strict";
              e.exports = a
            },
            49787: e => {
              "use strict";
              e.exports = r
            },
            29441: e => {
              "use strict";
              e.exports = c
            },
            60404: e => {
              "use strict";
              e.exports = d
            },
            25136: e => {
              "use strict";
              e.exports = o
            },
            99466: e => {
              "use strict";
              e.exports = n
            },
            92969: e => {
              "use strict";
              e.exports = f
            }
          },
          h = {};

        function m(e) {
          var t = h[e];
          if (void 0 !== t) return t.exports;
          var a = h[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return p[e].call(a.exports, a, a.exports, m), a.loaded = !0, a.exports
        }
        return m.m = p, m.c = h, m.y = t, m.amdO = {}, m.n = e => {
          var t = e && e.__esModule ? () => e.default : () => e;
          return m.d(t, {
            a: t
          }), t
        }, s = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, m.t = function(t, a) {
          if (1 & a && (t = this(t)), 8 & a) return t;
          if ("object" == typeof t && t) {
            if (4 & a && t.__esModule) return t;
            if (16 & a && "function" == typeof t.then) return t
          }
          var r = Object.create(null);
          m.r(r);
          var c = {};
          e = e || [null, s({}), s([]), s(s)];
          for (var d = 2 & a && t;
            "object" == typeof d && !~e.indexOf(d); d = s(d)) Object.getOwnPropertyNames(d).forEach((e => c[e] = () => t[e]));
          return c.default = () => t, m.d(r, c), r
        }, m.d = (e, t) => {
          for (var a in t) m.o(t, a) && !m.o(e, a) && Object.defineProperty(e, a, {
            enumerable: !0,
            get: t[a]
          })
        }, m.f = {}, m.e = e => Promise.all(Object.keys(m.f).reduce(((t, a) => (m.f[a](e, t), t)), [])), m.u = e => "js/" + {
          199: "97df2ffa65278044f432b6d409e67f88",
          207: "4c6f54af0546121331db01f1db335f8d",
          285: "661ccd322a508ce2d18c159828576db7",
          353: "339b21ab139e373891c8804e79c76d54",
          381: "418363375c3be90923281605b659b34f",
          732: "61394d05cf669f2ef410f86dbedba41d",
          825: "56ad5f8da8c4a330a7bcc2be3c510ac0",
          881: "cf27b07855ab273ce51038190b763617",
          1156: "cc922efc646be03a6e96db0c8dc79076",
          1189: "48f2c3e3cf462a55485f0072c85840d3",
          1223: "cac270148f8ff7874da65af2aca25da3",
          1225: "65788d53def3551e25005d59039aeb69",
          1331: "0b5d51a946e432348f7dcd4f3fa47f72",
          1403: "ddb9799907f7446101f8ded56fdf5523",
          1469: "04259abd62dc811f4405dc9d8e116c43",
          1622: "a7d6e9c0a95c31e2e359995bbfe9c7e8",
          1879: "fd6db654d72fc6bdacfc5fe94abe7b4c",
          2495: "bdd36fb9f340b7c79d73b5aefb6639d9",
          2553: "a29d3a04f539beb0bae38c7bb3277930",
          2808: "56cd1bb3eaf58270aa27c96da9b82c6c",
          2939: "42d1e3dca79477abfeeeae9b74dec7c7",
          2956: "31668566ff999ee2108fa5254281f1b7",
          3380: "5247ccdd81ae3cc545537c5f49720453",
          3431: "e47447dbe42922c6b91e65e8046fe7cc",
          3464: "4c1a3ecf9c1e5d3c873d4dcb269b766b",
          3524: "71cbd819d2308ea5b2560cac1a12cf2b",
          3712: "1f0105f0be026b3a401c1cec0819202f",
          4105: "8117bc9fa9ad749141223e8c4ca34ad2",
          4143: "0d0d8d73fdf2e15e6baf21c0b8962374",
          4216: "0852f318a89d2e63f31c7ef32d26aa58",
          4303: "cfd3b2df0ed423c47f4eb78afcca1ad4",
          4451: "2c8d33d17941e550cf104fb78d115b37",
          4876: "fdb016d62d9815fb86428db55751ba83",
          4992: "8e804ed28ac3454c4c0e5d976ca7305a",
          5238: "144b52e664b3ed7abc0ecf7f3ef7aeb7",
          5283: "8501d7a18d17da81b2de12837b3fbf35",
          5342: "87e8d788af063804bb2dc7b32be38ac1",
          5800: "146906616982705f4fe423b562ad05b9",
          6008: "289ccd9eb3cbf3163c5aad08dbd5854f",
          6524: "ee57736ee32cb116d200df733e69b13f",
          6632: "21aca67bd2abc82305662f3cfa5d8747",
          6758: "dfb315d9a31ecb16bac02f675cee6989",
          6808: "aa881b33575dcb1938d4e440748cdc14",
          6878: "735d7b406b3bd505c2eadbad4b87aed9",
          6996: "a33d024782b1192bef0ac48cc6e2cf7c",
          7123: "d107d71688a75d5c4b5e25e8f6d8866e",
          7185: "c2666a9149566bae8996633b276aa7ad",
          7187: "ed8994a218d6465f239d76178c04c7cf",
          7207: "da957446ae2156d9c488a2801a17472c",
          7533: "2d30f35cdcf0f3877dfc91039464b9bb",
          7601: "7785ad08a8e42a447e33a271db63bfcc",
          7781: "7b4383c62faf12dd96ac563d73a9d1f6",
          7989: "83150e6b5b7c04216439ee4d9efc30fa",
          8066: "4fa1968ec1b7ec7d7afa2900985646c9",
          8089: "8bab15068b5f8709c6793d02556eb838",
          8290: "68f6ac1b8e0cd5df9d7f61d21598b954",
          8314: "79039467e8c9fce5026bc36f0b8a60e1",
          8407: "89d369fbace1d513bd0b21d0d3f3e07b",
          9269: "a4dc31c6aecbb3fc00ad372316798600",
          9415: "612fec2d7dcc713c4bd6f47f07bc9cea",
          9429: "b8090d754b6d0a71b1f488d2a12310e5",
          9435: "90f97f83dd8867f88784c3c9802a006b",
          9493: "d954671b5fb8a740a9ea8c408e52bb6b",
          9756: "b2a94faab74a6bb7a63af5059be4fe79",
          9853: "4c3dcd55ca3f7d72f6a31ef4aac210a9"
        } [e] + ".js", m.miniCssF = e => "css/" + {
          353: "18711930c6a0de62fd4ccccb273e060d",
          732: "7804a8964f391fe5e1b3d2ce77453b1e",
          2495: "fc9d09ede16f176d4bfcddbe67b7386e",
          2553: "8c0430f14493609e006f3578865e31c5",
          3712: "b8df5e4b23fe38de94f67a48602e6f3b",
          4876: "3ca63ccb7d679ba37b97863db3aa29fa",
          4992: "2b35314f2a2d77a8a199e02d5cb9bad0",
          5342: "d7a0fa50d12bf5218511da15a8de9c39",
          6758: "4b0ed39075607cfb88e45f4fbf45a999",
          7185: "14e901cdb3151040ad44fc13b493452e",
          7187: "bd1f235fa318fbbfb685016ac24c4271",
          7207: "da765f37e8fa2feef83d178ed0e0256f",
          7989: "2d479fdc2ad051cd66458cf1c2f66dff",
          9756: "42311820f84dac14ae05ea8000b0335d"
        } [e] + ".css", m.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), m.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), i = {}, l = "@rockstargames/modules-core-newswire-article:", m.l = (e, t, a, r) => {
          if (i[e]) i[e].push(t);
          else {
            var c, d;
            if (void 0 !== a)
              for (var o = document.getElementsByTagName("script"), n = 0; n < o.length; n++) {
                var f = o[n];
                if (f.getAttribute("src") == e || f.getAttribute("data-webpack") == l + a) {
                  c = f;
                  break
                }
              }
            c || (d = !0, (c = document.createElement("script")).charset = "utf-8", c.timeout = 120, m.nc && c.setAttribute("nonce", m.nc), c.setAttribute("data-webpack", l + a), c.src = e), i[e] = [t];
            var s = (t, a) => {
                c.onerror = c.onload = null, clearTimeout(u);
                var r = i[e];
                if (delete i[e], c.parentNode && c.parentNode.removeChild(c), r && r.forEach((e => e(a))), t) return t(a)
              },
              u = setTimeout(s.bind(null, void 0, {
                type: "timeout",
                target: c
              }), 12e4);
            c.onerror = s.bind(null, c.onerror), c.onload = s.bind(null, c.onload), d && document.head.appendChild(c)
          }
        }, m.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, m.nmd = e => (e.paths = [], e.children || (e.children = []), e), u = {
          207: [40207],
          825: [42158],
          1156: [74401, 42756],
          1879: [31879],
          2553: [70396, 78417, 90588],
          5800: [11438, 17523, 33809, 44019, 83166],
          6758: [26398, 55140, 64064, 73379],
          8089: [28089],
          8407: [58407],
          9756: [94566]
        }, b = {
          11438: ["default", "./tinaBlockTemplates", 29441],
          17523: ["default", "./tina", 25136],
          26398: ["default", "./helpers", 99466],
          28089: ["default", "./helpers/uploads", 99466],
          31879: ["default", "./index", 25136],
          33809: ["default", "./ui", 99466],
          40207: ["default", "./index", 60404],
          42158: ["default", "./providers", 92969],
          42756: ["default", "./index", 92969],
          44019: ["default", "./tinaBlockTemplates", 25136],
          55140: ["default", "./properties", 99466],
          58407: ["default", "./index", 61024],
          64064: ["default", "./index", 29441],
          70396: ["default", "./hooks", 92969],
          73379: ["default", "./functions", 92969],
          74401: ["default", "./index", 99466],
          78417: ["default", "./operations/fragments/paging.graphql", 61024],
          83166: ["default", "./tina", 29441],
          90588: ["default", "./operations/fragments/newswire-post.graphql", 61024],
          94566: ["default", "./messages", 49787]
        }, m.f.remotes = (e, t) => {
          m.o(u, e) && u[e].forEach((e => {
            var a = m.R;
            a || (a = []);
            var r = b[e];
            if (!(a.indexOf(r) >= 0)) {
              if (a.push(r), r.p) return t.push(r.p);
              var c = t => {
                  t || (t = new Error("Container missing")), "string" == typeof t.message && (t.message += '\nwhile loading "' + r[1] + '" from ' + r[2]), m.m[e] = () => {
                    throw t
                  }, r.p = 0
                },
                d = (e, a, d, o, n, f) => {
                  try {
                    var s = e(a, d);
                    if (!s || !s.then) return n(s, o, f);
                    var i = s.then((e => n(e, o)), c);
                    if (!f) return i;
                    t.push(r.p = i)
                  } catch (e) {
                    c(e)
                  }
                },
                o = (e, t, c) => d(t.get, r[1], a, 0, n, c),
                n = t => {
                  r.p = 1, m.m[e] = e => {
                    e.exports = t()
                  }
                };
              d(m, r[2], 0, 0, ((e, t, a) => e ? d(m.I, r[0], 0, e, o, a) : c()), 1)
            }
          }))
        }, (() => {
          m.S = {};
          var e = {},
            t = {};
          m.I = (a, r) => {
            r || (r = []);
            var c = t[a];
            if (c || (c = t[a] = {}), !(r.indexOf(c) >= 0)) {
              if (r.push(c), e[a]) return e[a];
              m.o(m.S, a) || (m.S[a] = {});
              var d = m.S[a],
                o = "@rockstargames/modules-core-newswire-article",
                n = (e, t, a, r) => {
                  var c = d[e] = d[e] || {},
                    n = c[t];
                  (!n || !n.loaded && (!r != !n.eager ? r : o > n.from)) && (c[t] = {
                    get: a,
                    from: o,
                    eager: !!r
                  })
                },
                f = e => {
                  var t = e => {
                    return t = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(t));
                    var t
                  };
                  try {
                    var c = m(e);
                    if (!c) return;
                    var d = e => e && e.init && e.init(m.S[a], r);
                    if (c.then) return s.push(c.then(d, t));
                    var o = d(c);
                    if (o && o.then) return s.push(o.catch(t))
                  } catch (e) {
                    t(e)
                  }
                },
                s = [];
              return "default" === a && (n("@foundry/react", "1.19.0", (() => Promise.all([m.e(1223), m.e(1225), m.e(6878), m.e(4992), m.e(1403), m.e(9493), m.e(6632)]).then((() => () => m(14992))))), n("@rockstargames/locale-tools", "1.0.0", (() => Promise.all([m.e(1223), m.e(8066), m.e(1403), m.e(4143)]).then((() => () => m(24143))))), n("@rockstargames/modules-core-carousel", "1.2.4", (() => Promise.all([m.e(3524), m.e(9269), m.e(1403), m.e(1156), m.e(8089), m.e(732), m.e(3712)]).then((() => () => m(51331))))), n("@rockstargames/modules-core-engagement", "0.0.2", (() => Promise.all([m.e(3524), m.e(9269), m.e(4303), m.e(1469), m.e(1403), m.e(1156), m.e(285), m.e(207), m.e(8407), m.e(9756), m.e(5342)]).then((() => () => m(87027))))), n("@rockstargames/modules-core-group-of-items", "1.2.0", (() => Promise.all([m.e(3524), m.e(1403), m.e(1156), m.e(8089), m.e(7185), m.e(1879), m.e(207), m.e(7989), m.e(2495)]).then((() => () => m(42495))))), n("@rockstargames/modules-sc-ugc-spotlight", "1.1.3", (() => m.e(381).then((() => () => m(20381))))), n("dompurify", "2.4.7", (() => m.e(2956).then((() => () => m(72956))))), n("lodash", "4.17.21", (() => m.e(9429).then((() => () => m(79429))))), n("react-dom", "18.2.0", (() => Promise.all([m.e(5283), m.e(1403)]).then((() => () => m(15283))))), n("react-dom", "18.2.0", (() => Promise.all([m.e(7533), m.e(1403)]).then((() => () => m(47533))))), n("react-jsx-parser", "1.29.0", (() => Promise.all([m.e(1403), m.e(5238)]).then((() => () => m(85238))))), n("react-router-dom", "6.17.0", (() => Promise.all([m.e(4105), m.e(6008), m.e(1403)]).then((() => () => m(76008))))), n("react-router-dom", "6.17.0", (() => Promise.all([m.e(4105), m.e(4451), m.e(1403)]).then((() => () => m(4451))))), n("react", "18.2.0", (() => m.e(3380).then((() => () => m(23380))))), n("text-balancer", "1.0.5", (() => m.e(199).then((() => () => m(20199))))), f(99466), f(92969), f(25136), f(60404), f(61024), f(29441), f(49787)), s.length ? e[a] = Promise.all(s).then((() => e[a] = 1)) : e[a] = 1
            }
          }
        })(), (() => {
          var e;
          m.g.importScripts && (e = m.g.location + "");
          var t = m.g.document;
          if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
            var a = t.getElementsByTagName("script");
            if (a.length)
              for (var r = a.length - 1; r > -1 && (!e || !/^http(s?):/.test(e));) e = a[r--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), m.p = e
        })(), (() => {
          var e = e => {
              var t = e => e.split(".").map((e => +e == e ? +e : e)),
                a = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
                r = a[1] ? t(a[1]) : [];
              return a[2] && (r.length++, r.push.apply(r, t(a[2]))), a[3] && (r.push([]), r.push.apply(r, t(a[3]))), r
            },
            t = (a, r) => {
              if (0 in a) {
                r = e(r);
                var c = a[0],
                  d = c < 0;
                d && (c = -c - 1);
                for (var o = 0, n = 1, f = !0;; n++, o++) {
                  var s, i, l = n < a.length ? (typeof a[n])[0] : "";
                  if (o >= r.length || "o" == (i = (typeof(s = r[o]))[0])) return !f || ("u" == l ? n > c && !d : "" == l != d);
                  if ("u" == i) {
                    if (!f || "u" != l) return !1
                  } else if (f)
                    if (l == i)
                      if (n <= c) {
                        if (s != a[n]) return !1
                      } else {
                        if (d ? s > a[n] : s < a[n]) return !1;
                        s != a[n] && (f = !1)
                      }
                  else if ("s" != l && "n" != l) {
                    if (d || n <= c) return !1;
                    f = !1, n--
                  } else {
                    if (n <= c || i < l != d) return !1;
                    f = !1
                  } else "s" != l && "n" != l && (f = !1, n--)
                }
              }
              var u = [],
                b = u.pop.bind(u);
              for (o = 1; o < a.length; o++) {
                var p = a[o];
                u.push(1 == p ? b() | b() : 2 == p ? b() & b() : p ? t(p, r) : !b())
              }
              return !!b()
            },
            a = (a, r, c) => {
              var d = a[r];
              return (r = Object.keys(d).reduce(((a, r) => !t(c, r) || a && !((t, a) => {
                t = e(t), a = e(a);
                for (var r = 0;;) {
                  if (r >= t.length) return r < a.length && "u" != (typeof a[r])[0];
                  var c = t[r],
                    d = (typeof c)[0];
                  if (r >= a.length) return "u" == d;
                  var o = a[r],
                    n = (typeof o)[0];
                  if (d != n) return "o" == d && "n" == n || "s" == n || "u" == d;
                  if ("o" != d && "u" != d && c != o) return c < o;
                  r++
                }
              })(a, r) ? a : r), 0)) && d[r]
            },
            r = (e => function(t, a, r, c) {
              var d = m.I(t);
              return d && d.then ? d.then(e.bind(e, t, m.S[t], a, r, c)) : e(t, m.S[t], a, r, c)
            })(((e, t, r, c, d) => {
              var o = t && m.o(t, r) && a(t, r, c);
              return o ? (e => (e.loaded = 1, e.get()))(o) : d()
            })),
            c = {},
            d = {
              71403: () => r("default", "react", [1, 18, 2, 0], (() => m.e(3380).then((() => () => m(23380))))),
              61631: () => r("default", "dompurify", [1, 2, 4, 1], (() => m.e(2956).then((() => () => m(72956))))),
              89779: () => r("default", "react-router-dom", [1, 6, 11, 2], (() => Promise.all([m.e(4105), m.e(6008)]).then((() => () => m(76008))))),
              96717: () => r("default", "@rockstargames/locale-tools", [1, "workspace:*"], (() => Promise.all([m.e(1223), m.e(8066), m.e(6524)]).then((() => () => m(24143))))),
              79493: () => r("default", "react-dom", [1, 18, 2, 0], (() => m.e(7533).then((() => () => m(47533))))),
              5217: () => r("default", "@rockstargames/modules-core-group-of-items", [1, "workspace:*"], (() => m.e(4876).then((() => () => m(42495))))),
              32503: () => r("default", "@rockstargames/modules-core-engagement", [1, "workspace:*"], (() => Promise.all([m.e(1469), m.e(5342)]).then((() => () => m(87027))))),
              37920: () => r("default", "text-balancer", [1, 1, 0, 5], (() => m.e(199).then((() => () => m(20199))))),
              54252: () => r("default", "lodash", [1, 4, 17, 21], (() => m.e(9429).then((() => () => m(79429))))),
              99096: () => r("default", "@foundry/react", [1, 1, 14, 2], (() => Promise.all([m.e(6878), m.e(4992)]).then((() => () => m(14992))))),
              26527: () => r("default", "@rockstargames/modules-core-carousel", [1, "workspace:*"], (() => Promise.all([m.e(732), m.e(1331)]).then((() => () => m(51331))))),
              66713: () => r("default", "@rockstargames/modules-sc-ugc-spotlight", [1, "workspace:*"], (() => m.e(381).then((() => () => m(20381))))),
              85865: () => r("default", "react-jsx-parser", [1, "workspace:*"], (() => m.e(5238).then((() => () => m(85238))))),
              57172: () => r("default", "react-router-dom", [1, 6, 11, 2], (() => Promise.all([m.e(4105), m.e(4451)]).then((() => () => m(4451)))))
            },
            o = {
              285: [89779, 96717],
              1403: [71403],
              2553: [5217, 32503, 37920, 54252, 99096],
              5342: [57172],
              7185: [61631],
              7207: [85865],
              9415: [26527, 66713],
              9493: [79493]
            },
            n = {};
          m.f.consumes = (e, t) => {
            m.o(o, e) && o[e].forEach((e => {
              if (m.o(c, e)) return t.push(c[e]);
              if (!n[e]) {
                var a = t => {
                  c[e] = 0, m.m[e] = a => {
                    delete m.c[e], a.exports = t()
                  }
                };
                n[e] = !0;
                var r = t => {
                  delete c[e], m.m[e] = a => {
                    throw delete m.c[e], t
                  }
                };
                try {
                  var o = d[e]();
                  o.then ? t.push(c[e] = o.then(a).catch(r)) : a(o)
                } catch (e) {
                  r(e)
                }
              }
            }))
          }
        })(), (() => {
          if ("undefined" != typeof document) {
            var e = {
              6947: 0
            };
            m.f.miniCss = (t, a) => {
              e[t] ? a.push(e[t]) : 0 !== e[t] && {
                353: 1,
                732: 1,
                2495: 1,
                2553: 1,
                3712: 1,
                4876: 1,
                4992: 1,
                5342: 1,
                6758: 1,
                7185: 1,
                7187: 1,
                7207: 1,
                7989: 1,
                9756: 1
              } [t] && a.push(e[t] = (e => new Promise(((t, a) => {
                var r = m.miniCssF(e),
                  c = m.p + r;
                if (((e, t) => {
                    for (var a = document.getElementsByTagName("link"), r = 0; r < a.length; r++) {
                      var c = (o = a[r]).getAttribute("data-href") || o.getAttribute("href");
                      if ("stylesheet" === o.rel && (c === e || c === t)) return o
                    }
                    var d = document.getElementsByTagName("style");
                    for (r = 0; r < d.length; r++) {
                      var o;
                      if ((c = (o = d[r]).getAttribute("data-href")) === e || c === t) return o
                    }
                  })(r, c)) return t();
                ((e, t, a, r, c) => {
                  var d = document.createElement("link");
                  d.rel = "stylesheet", d.type = "text/css", d.onerror = d.onload = a => {
                    if (d.onerror = d.onload = null, "load" === a.type) r();
                    else {
                      var o = a && ("load" === a.type ? "missing" : a.type),
                        n = a && a.target && a.target.href || t,
                        f = new Error("Loading CSS chunk " + e + " failed.\n(" + n + ")");
                      f.code = "CSS_CHUNK_LOAD_FAILED", f.type = o, f.request = n, d.parentNode && d.parentNode.removeChild(d), c(f)
                    }
                  }, d.href = t, document.head.appendChild(d)
                })(e, c, 0, t, a)
              })))(t).then((() => {
                e[t] = 0
              }), (a => {
                throw delete e[t], a
              })))
            }
          }
        })(), (() => {
          var e = {
            6947: 0
          };
          m.f.j = (t, a) => {
            var r = m.o(e, t) ? e[t] : void 0;
            if (0 !== r)
              if (r) a.push(r[2]);
              else if (/^(1(156|403|879)|7(185|207|32|989)|94(15|93)|(2|84)07|8089)$/.test(t)) e[t] = 0;
            else {
              var c = new Promise(((a, c) => r = e[t] = [a, c]));
              a.push(r[2] = c);
              var d = m.p + m.u(t),
                o = new Error;
              m.l(d, (a => {
                if (m.o(e, t) && (0 !== (r = e[t]) && (e[t] = void 0), r)) {
                  var c = a && ("load" === a.type ? "missing" : a.type),
                    d = a && a.target && a.target.src;
                  o.message = "Loading chunk " + t + " failed.\n(" + c + ": " + d + ")", o.name = "ChunkLoadError", o.type = c, o.request = d, r[1](o)
                }
              }), "chunk-" + t, t)
            }
          };
          var t = (t, a) => {
              var r, c, d = a[0],
                o = a[1],
                n = a[2],
                f = 0;
              if (d.some((t => 0 !== e[t]))) {
                for (r in o) m.o(o, r) && (m.m[r] = o[r]);
                n && n(m)
              }
              for (t && t(a); f < d.length; f++) c = d[f], m.o(e, c) && e[c] && e[c][0](), e[c] = 0
            },
            a = self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || [];
          a.forEach(t.bind(null, 0)), a.push = t.bind(null, a.push.bind(a))
        })(), m.nc = void 0, m(32160), m(68623)
      })())
    }
  }
}));