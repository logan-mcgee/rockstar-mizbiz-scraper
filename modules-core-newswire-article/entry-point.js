! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "d4f9ac10-422a-4e5d-acc3-7cfd93887b86", e._sentryDebugIdIdentifier = "sentry-dbid-d4f9ac10-422a-4e5d-acc3-7cfd93887b86")
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
    d = {},
    o = {},
    c = {},
    n = {},
    f = {};
  return Object.defineProperty(a, "__esModule", {
    value: !0
  }), Object.defineProperty(r, "__esModule", {
    value: !0
  }), Object.defineProperty(d, "__esModule", {
    value: !0
  }), Object.defineProperty(o, "__esModule", {
    value: !0
  }), Object.defineProperty(c, "__esModule", {
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
        d[t] = e[t]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(t) {
        o[t] = e[t]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(t) {
        c[t] = e[t]
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
                for (var r = "/" === a.pathname[0] ? a.pathname : "/" + a.pathname, d = 0, o = r.length; d !== t && o >= 0;) "/" === r[--o] && d++;
                if (d !== t) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + t + ") is greater than the number of directories (" + d + ") in the URL path " + e);
                var c = r.slice(0, o + 1);
                return a.protocol + "//" + a.host + c
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
                d = (e, t) => (a.R = t, t = a.o(r, e) ? r[e]() : Promise.resolve().then((() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                })), a.R = void 0, t),
                o = (e, t) => {
                  if (a.S) {
                    var r = "default",
                      d = a.S[r];
                    if (d && d !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return a.S[r] = e, a.I(r, t)
                  }
                };
              a.d(t, {
                get: () => d,
                init: () => o
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
              e.exports = d
            },
            60404: e => {
              "use strict";
              e.exports = o
            },
            25136: e => {
              "use strict";
              e.exports = c
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
          var d = {};
          e = e || [null, s({}), s([]), s(s)];
          for (var o = 2 & a && t;
            "object" == typeof o && !~e.indexOf(o); o = s(o)) Object.getOwnPropertyNames(o).forEach((e => d[e] = () => t[e]));
          return d.default = () => t, m.d(r, d), r
        }, m.d = (e, t) => {
          for (var a in t) m.o(t, a) && !m.o(e, a) && Object.defineProperty(e, a, {
            enumerable: !0,
            get: t[a]
          })
        }, m.f = {}, m.e = e => Promise.all(Object.keys(m.f).reduce(((t, a) => (m.f[a](e, t), t)), [])), m.u = e => "js/" + {
          199: "eae86ac2fda43692bdba6ec869b16fc2",
          207: "4c6f54af0546121331db01f1db335f8d",
          285: "84e23687c7b37a55f7882d42db420d10",
          353: "94e707a45530dcf869f76c4c64560e51",
          381: "0a5ad2598a8f9fab65bbc0cf8643de62",
          732: "61394d05cf669f2ef410f86dbedba41d",
          825: "134c751cae08ed2cb3052f8c6b65d3cb",
          881: "8b435a916fa283b5f44c6b83784dfc33",
          1156: "cc922efc646be03a6e96db0c8dc79076",
          1189: "5bf2c4dbf9a1cdbc8db8f8eb77b9f891",
          1223: "e1151f58045288cc396888fb4c0e00c3",
          1225: "e2531688d36a3fad0315571222f3a06a",
          1331: "2f18c8d7929472dbbab76cad70432629",
          1403: "ddb9799907f7446101f8ded56fdf5523",
          1469: "1506e5fccee00a49610a97a12c84a043",
          1622: "21c7640082826891f08538851271b234",
          1879: "fd6db654d72fc6bdacfc5fe94abe7b4c",
          2495: "6fd305fa441b33041f3b4b9187481142",
          2553: "8b2fedfeb72f65495bba7e6599298590",
          2808: "600aec9a46d5a1a55c924bf95f0acb84",
          2939: "a76ffea702ed7495353a06e3131f014d",
          2956: "5f7264462c82cc4aa80304b3f0d08f86",
          3380: "fa94242c9e77f74c40c4da9ec02a8512",
          3431: "a6570e74f1e7fff16911d89a431241c4",
          3464: "35689048a3c23b945e7f87d1171370d9",
          3524: "c44d3953ac37f76f98efab3942949311",
          3712: "7678e9cf87af7dbecf35a854b468a285",
          4105: "42f6ada2114d45216bb142e78abb341d",
          4143: "a22e9b471d0b34909a8f550d49adf962",
          4216: "a4132734377961459f67b12c5a157bd7",
          4303: "ed50f8b13c8224e5968b76ff6d99b312",
          4451: "0b1e95e1e531a1f074dd917aa5342db5",
          4876: "3e8936e22926d2ccb04f22c4bd9eb047",
          4992: "1fa974afe7169bdecc0809f01417174b",
          5238: "a00003e5717cd82d548d8c43fae2d41a",
          5283: "09e861ac3ae55d1bf4fd30d1c6f1d10f",
          5342: "c531bd40ae974c7c9a9dddca65bd8a62",
          5800: "4ae457ccb93aea8f41c65775b7475eb6",
          6008: "9a6e74f3b01d9c188cde14e5214c9e8a",
          6524: "ba937abaac0fa4290d42128f7f754915",
          6632: "1355c3042968ff1cae571e503b1b981b",
          6758: "0e673938cd054edd186a9b1db51ecab6",
          6808: "7cb643b53a1a2e18da41da1a20f06d4e",
          6878: "828fae5d9e8eb6c7a6e09663fe471871",
          6996: "58551de15d699ee16b7c985a6bd7ae28",
          7123: "226de66585a6a0942acc92dfd31e6ef1",
          7185: "c2666a9149566bae8996633b276aa7ad",
          7187: "da57681d11ba6ad744cf5b2c30889c88",
          7207: "da957446ae2156d9c488a2801a17472c",
          7533: "13b6e7103d110e5910389a2c97bcee0f",
          7601: "d0b20a7f6d56a6d69e51b2b56bf8c838",
          7781: "88c767a37f5aac616f38cefe97184da3",
          7989: "83150e6b5b7c04216439ee4d9efc30fa",
          8066: "dd0b24cced6967b8cf1b0273f4cfedf5",
          8089: "8bab15068b5f8709c6793d02556eb838",
          8290: "79a5b8e6da2769a2cde8ceee8d17d41c",
          8314: "a425f0268cca79b44b29c462a6280f7f",
          8407: "89d369fbace1d513bd0b21d0d3f3e07b",
          9269: "b62d7e87626ae54eda92b49802329c34",
          9415: "612fec2d7dcc713c4bd6f47f07bc9cea",
          9429: "cb1c0d5b839debd4db42cdcec223c97e",
          9435: "5ccdeaabcb62897ea388d1c34bba4b24",
          9493: "d954671b5fb8a740a9ea8c408e52bb6b",
          9756: "ef0f86bb2fbc551d814b0e951a91b67b",
          9853: "e35b7556aac50a819d138afc04819204"
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
            var d, o;
            if (void 0 !== a)
              for (var c = document.getElementsByTagName("script"), n = 0; n < c.length; n++) {
                var f = c[n];
                if (f.getAttribute("src") == e || f.getAttribute("data-webpack") == l + a) {
                  d = f;
                  break
                }
              }
            d || (o = !0, (d = document.createElement("script")).charset = "utf-8", d.timeout = 120, m.nc && d.setAttribute("nonce", m.nc), d.setAttribute("data-webpack", l + a), d.src = e), i[e] = [t];
            var s = (t, a) => {
                d.onerror = d.onload = null, clearTimeout(u);
                var r = i[e];
                if (delete i[e], d.parentNode && d.parentNode.removeChild(d), r && r.forEach((e => e(a))), t) return t(a)
              },
              u = setTimeout(s.bind(null, void 0, {
                type: "timeout",
                target: d
              }), 12e4);
            d.onerror = s.bind(null, d.onerror), d.onload = s.bind(null, d.onload), o && document.head.appendChild(d)
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
              var d = t => {
                  t || (t = new Error("Container missing")), "string" == typeof t.message && (t.message += '\nwhile loading "' + r[1] + '" from ' + r[2]), m.m[e] = () => {
                    throw t
                  }, r.p = 0
                },
                o = (e, a, o, c, n, f) => {
                  try {
                    var s = e(a, o);
                    if (!s || !s.then) return n(s, c, f);
                    var i = s.then((e => n(e, c)), d);
                    if (!f) return i;
                    t.push(r.p = i)
                  } catch (e) {
                    d(e)
                  }
                },
                c = (e, t, d) => o(t.get, r[1], a, 0, n, d),
                n = t => {
                  r.p = 1, m.m[e] = e => {
                    e.exports = t()
                  }
                };
              o(m, r[2], 0, 0, ((e, t, a) => e ? o(m.I, r[0], 0, e, c, a) : d()), 1)
            }
          }))
        }, (() => {
          m.S = {};
          var e = {},
            t = {};
          m.I = (a, r) => {
            r || (r = []);
            var d = t[a];
            if (d || (d = t[a] = {}), !(r.indexOf(d) >= 0)) {
              if (r.push(d), e[a]) return e[a];
              m.o(m.S, a) || (m.S[a] = {});
              var o = m.S[a],
                c = "@rockstargames/modules-core-newswire-article",
                n = (e, t, a, r) => {
                  var d = o[e] = o[e] || {},
                    n = d[t];
                  (!n || !n.loaded && (!r != !n.eager ? r : c > n.from)) && (d[t] = {
                    get: a,
                    from: c,
                    eager: !!r
                  })
                },
                f = e => {
                  var t = e => {
                    return t = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(t));
                    var t
                  };
                  try {
                    var d = m(e);
                    if (!d) return;
                    var o = e => e && e.init && e.init(m.S[a], r);
                    if (d.then) return s.push(d.then(o, t));
                    var c = o(d);
                    if (c && c.then) return s.push(c.catch(t))
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
                var d = a[0],
                  o = d < 0;
                o && (d = -d - 1);
                for (var c = 0, n = 1, f = !0;; n++, c++) {
                  var s, i, l = n < a.length ? (typeof a[n])[0] : "";
                  if (c >= r.length || "o" == (i = (typeof(s = r[c]))[0])) return !f || ("u" == l ? n > d && !o : "" == l != o);
                  if ("u" == i) {
                    if (!f || "u" != l) return !1
                  } else if (f)
                    if (l == i)
                      if (n <= d) {
                        if (s != a[n]) return !1
                      } else {
                        if (o ? s > a[n] : s < a[n]) return !1;
                        s != a[n] && (f = !1)
                      }
                  else if ("s" != l && "n" != l) {
                    if (o || n <= d) return !1;
                    f = !1, n--
                  } else {
                    if (n <= d || i < l != o) return !1;
                    f = !1
                  } else "s" != l && "n" != l && (f = !1, n--)
                }
              }
              var u = [],
                b = u.pop.bind(u);
              for (c = 1; c < a.length; c++) {
                var p = a[c];
                u.push(1 == p ? b() | b() : 2 == p ? b() & b() : p ? t(p, r) : !b())
              }
              return !!b()
            },
            a = (a, r, d) => {
              var o = a[r];
              return (r = Object.keys(o).reduce(((a, r) => !t(d, r) || a && !((t, a) => {
                t = e(t), a = e(a);
                for (var r = 0;;) {
                  if (r >= t.length) return r < a.length && "u" != (typeof a[r])[0];
                  var d = t[r],
                    o = (typeof d)[0];
                  if (r >= a.length) return "u" == o;
                  var c = a[r],
                    n = (typeof c)[0];
                  if (o != n) return "o" == o && "n" == n || "s" == n || "u" == o;
                  if ("o" != o && "u" != o && d != c) return d < c;
                  r++
                }
              })(a, r) ? a : r), 0)) && o[r]
            },
            r = (e => function(t, a, r, d) {
              var o = m.I(t);
              return o && o.then ? o.then(e.bind(e, t, m.S[t], a, r, d)) : e(t, m.S[t], a, r, d)
            })(((e, t, r, d, o) => {
              var c = t && m.o(t, r) && a(t, r, d);
              return c ? (e => (e.loaded = 1, e.get()))(c) : o()
            })),
            d = {},
            o = {
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
            c = {
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
            m.o(c, e) && c[e].forEach((e => {
              if (m.o(d, e)) return t.push(d[e]);
              if (!n[e]) {
                var a = t => {
                  d[e] = 0, m.m[e] = a => {
                    delete m.c[e], a.exports = t()
                  }
                };
                n[e] = !0;
                var r = t => {
                  delete d[e], m.m[e] = a => {
                    throw delete m.c[e], t
                  }
                };
                try {
                  var c = o[e]();
                  c.then ? t.push(d[e] = c.then(a).catch(r)) : a(c)
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
                  d = m.p + r;
                if (((e, t) => {
                    for (var a = document.getElementsByTagName("link"), r = 0; r < a.length; r++) {
                      var d = (c = a[r]).getAttribute("data-href") || c.getAttribute("href");
                      if ("stylesheet" === c.rel && (d === e || d === t)) return c
                    }
                    var o = document.getElementsByTagName("style");
                    for (r = 0; r < o.length; r++) {
                      var c;
                      if ((d = (c = o[r]).getAttribute("data-href")) === e || d === t) return c
                    }
                  })(r, d)) return t();
                ((e, t, a, r, d) => {
                  var o = document.createElement("link");
                  o.rel = "stylesheet", o.type = "text/css", o.onerror = o.onload = a => {
                    if (o.onerror = o.onload = null, "load" === a.type) r();
                    else {
                      var c = a && ("load" === a.type ? "missing" : a.type),
                        n = a && a.target && a.target.href || t,
                        f = new Error("Loading CSS chunk " + e + " failed.\n(" + n + ")");
                      f.code = "CSS_CHUNK_LOAD_FAILED", f.type = c, f.request = n, o.parentNode && o.parentNode.removeChild(o), d(f)
                    }
                  }, o.href = t, document.head.appendChild(o)
                })(e, d, 0, t, a)
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
              var d = new Promise(((a, d) => r = e[t] = [a, d]));
              a.push(r[2] = d);
              var o = m.p + m.u(t),
                c = new Error;
              m.l(o, (a => {
                if (m.o(e, t) && (0 !== (r = e[t]) && (e[t] = void 0), r)) {
                  var d = a && ("load" === a.type ? "missing" : a.type),
                    o = a && a.target && a.target.src;
                  c.message = "Loading chunk " + t + " failed.\n(" + d + ": " + o + ")", c.name = "ChunkLoadError", c.type = d, c.request = o, r[1](c)
                }
              }), "chunk-" + t, t)
            }
          };
          var t = (t, a) => {
              var r, d, o = a[0],
                c = a[1],
                n = a[2],
                f = 0;
              if (o.some((t => 0 !== e[t]))) {
                for (r in c) m.o(c, r) && (m.m[r] = c[r]);
                n && n(m)
              }
              for (t && t(a); f < o.length; f++) d = o[f], m.o(e, d) && e[d] && e[d][0](), e[d] = 0
            },
            a = self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || [];
          a.forEach(t.bind(null, 0)), a.push = t.bind(null, a.push.bind(a))
        })(), m.nc = void 0, m(32160), m(68623)
      })())
    }
  }
}));