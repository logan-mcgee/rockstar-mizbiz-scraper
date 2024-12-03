! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "f0b4bceb-e8cf-4e3d-aaae-6654e36c4f24", e._sentryDebugIdIdentifier = "sentry-dbid-f0b4bceb-e8cf-4e3d-aaae-6654e36c4f24")
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
    o = {},
    c = {},
    d = {},
    f = {},
    n = {};
  return Object.defineProperty(a, "__esModule", {
    value: !0
  }), Object.defineProperty(r, "__esModule", {
    value: !0
  }), Object.defineProperty(o, "__esModule", {
    value: !0
  }), Object.defineProperty(c, "__esModule", {
    value: !0
  }), Object.defineProperty(d, "__esModule", {
    value: !0
  }), Object.defineProperty(f, "__esModule", {
    value: !0
  }), Object.defineProperty(n, "__esModule", {
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
        o[t] = e[t]
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
        f[t] = e[t]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(t) {
        n[t] = e[t]
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
                for (var r = "/" === a.pathname[0] ? a.pathname : "/" + a.pathname, o = 0, c = r.length; o !== t && c >= 0;) "/" === r[--c] && o++;
                if (o !== t) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + t + ") is greater than the number of directories (" + o + ") in the URL path " + e);
                var d = r.slice(0, c + 1);
                return a.protocol + "//" + a.host + d
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
                o = (e, t) => (a.R = t, t = a.o(r, e) ? r[e]() : Promise.resolve().then((() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                })), a.R = void 0, t),
                c = (e, t) => {
                  if (a.S) {
                    var r = "default",
                      o = a.S[r];
                    if (o && o !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return a.S[r] = e, a.I(r, t)
                  }
                };
              a.d(t, {
                get: () => o,
                init: () => c
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
              e.exports = o
            },
            60404: e => {
              "use strict";
              e.exports = c
            },
            25136: e => {
              "use strict";
              e.exports = d
            },
            99466: e => {
              "use strict";
              e.exports = f
            },
            92969: e => {
              "use strict";
              e.exports = n
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
          var o = {};
          e = e || [null, s({}), s([]), s(s)];
          for (var c = 2 & a && t;
            "object" == typeof c && !~e.indexOf(c); c = s(c)) Object.getOwnPropertyNames(c).forEach((e => o[e] = () => t[e]));
          return o.default = () => t, m.d(r, o), r
        }, m.d = (e, t) => {
          for (var a in t) m.o(t, a) && !m.o(e, a) && Object.defineProperty(e, a, {
            enumerable: !0,
            get: t[a]
          })
        }, m.f = {}, m.e = e => Promise.all(Object.keys(m.f).reduce(((t, a) => (m.f[a](e, t), t)), [])), m.u = e => "js/" + {
          199: "54386d2893fc62e59105cd5560b8bf63",
          207: "4c6f54af0546121331db01f1db335f8d",
          285: "e387511857a504a218101e6f51f94d68",
          353: "fe18e7958b9ee9df137c4d94852b260e",
          381: "8d1162c2fa623e1cc2581f41d95b416e",
          732: "61394d05cf669f2ef410f86dbedba41d",
          825: "c362679409538c87acfc1c9b66f38f25",
          881: "1de351e90fc3670bbaa0fc92eecee36b",
          1156: "cc922efc646be03a6e96db0c8dc79076",
          1189: "3efc5dcef2daa4ae354c9700e14d7eb3",
          1223: "0814bde8545d9e4cb957dd209e1dd1f6",
          1225: "0dc44dc65b02f09168c26cdcaab1d089",
          1331: "e0bb7d59b59310f18c64c50658404923",
          1403: "ddb9799907f7446101f8ded56fdf5523",
          1469: "29d927ce24cc52a4549bace2566b4314",
          1622: "3216110810f4dc610aab1019ba7bae2b",
          1879: "fd6db654d72fc6bdacfc5fe94abe7b4c",
          2495: "1774a67b05973759e8fcd271b5388adc",
          2553: "2e0aa56e60c607b93bb834baf3b18c6a",
          2808: "707f47c040103f570808e11cefec5abd",
          2939: "b72dfd4cb1634cc19786a74e075deacc",
          2956: "8013277a8a20491976d9fb23257aebba",
          3380: "05cd74aa1174dab3d239d7d60da93c5d",
          3431: "02f4e6a029a770cf5231abc78e09853e",
          3464: "3c64df653f41dc9810dad4ed1f7f840d",
          3524: "47a0ccf67304eb1d8ef403e4096bd926",
          3712: "bf56a4cb830713ee23cd40134a5ed2e1",
          4105: "46c340c2b873410df958762bbe10206f",
          4143: "8266baf3c0e629a1a8faf165f7acf02d",
          4216: "8ca31515ad99e6abd4cfde53b69d5e56",
          4303: "0d469efb16689954f507d46d57529671",
          4451: "95581e591dd126d110f1c540d6e26092",
          4876: "337db7de4248ce1073307ec5f6f3d0fa",
          4992: "6bd39b8488c5a817a3b2a8f206243f89",
          5238: "16665fb04164982f25ddb844afbb5135",
          5283: "77344fbbd0a3b939e17ab7a99054b1b6",
          5800: "d0535dfa359dc34279b11881d404fc2d",
          6008: "ac413ec8eda7936dfc79e03950fa3f1c",
          6524: "6f4f43e31f14d8c001262a5226206302",
          6632: "4ac91d243856df54d001f3544486d775",
          6757: "536a1df8c90e07b7653afbba92dbea86",
          6758: "ab9d2635f968d31dbdbabc0e72552eb0",
          6808: "bb3de2fd07413febe9e7ac93e54aaa58",
          6878: "c7e2bd1c4f91eab92801496636860413",
          6996: "b9cb76c561c4ed53f6da2de8aad30e7e",
          7123: "559d18c31f896c02643d72e65280a419",
          7185: "c2666a9149566bae8996633b276aa7ad",
          7187: "3e81ee74fdacebc28a3486a68e180b5c",
          7207: "da957446ae2156d9c488a2801a17472c",
          7533: "91a82782fad41d4978b13e56fcd8ac38",
          7601: "ac8f969933b08a26d0a6a12aa143ead8",
          7781: "dddb02a4a2669fac50fe88435bc3e9c0",
          7989: "83150e6b5b7c04216439ee4d9efc30fa",
          8066: "d997629493be3bca624d016c45594766",
          8089: "8bab15068b5f8709c6793d02556eb838",
          8290: "3eeba2494ca8a07eaf0986362445c48b",
          8314: "7e7dc69938d7d6645868805ea4818029",
          8407: "89d369fbace1d513bd0b21d0d3f3e07b",
          9269: "b889648e1b8361ab4d84d978dc973454",
          9415: "612fec2d7dcc713c4bd6f47f07bc9cea",
          9429: "f1d78259e6d8dea69819efba175a20f1",
          9435: "ee100c02865af67a54f1dd17a73dd094",
          9493: "d954671b5fb8a740a9ea8c408e52bb6b",
          9756: "2bd629502ef884c78393091613791180",
          9853: "c1ce3dd0aeb3fbd736e1da03aa886b5c"
        } [e] + ".js", m.miniCssF = e => "css/" + {
          353: "18711930c6a0de62fd4ccccb273e060d",
          732: "7804a8964f391fe5e1b3d2ce77453b1e",
          2495: "b08ca19edfaeb652f00d0630da87be9c",
          2553: "83f1c44f58b98134470042db6800ef4f",
          3712: "b8df5e4b23fe38de94f67a48602e6f3b",
          4876: "55fa91f8f01d7b3f66b429c407c31ad5",
          4992: "2b35314f2a2d77a8a199e02d5cb9bad0",
          6757: "03e70232c89eeedc725a1dedeef33174",
          6758: "4b0ed39075607cfb88e45f4fbf45a999",
          7185: "14e901cdb3151040ad44fc13b493452e",
          7187: "bd1f235fa318fbbfb685016ac24c4271",
          7207: "7430346e4fd1d070d6bc7f6e85beebf7",
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
            var o, c;
            if (void 0 !== a)
              for (var d = document.getElementsByTagName("script"), f = 0; f < d.length; f++) {
                var n = d[f];
                if (n.getAttribute("src") == e || n.getAttribute("data-webpack") == l + a) {
                  o = n;
                  break
                }
              }
            o || (c = !0, (o = document.createElement("script")).charset = "utf-8", o.timeout = 120, m.nc && o.setAttribute("nonce", m.nc), o.setAttribute("data-webpack", l + a), o.src = e), i[e] = [t];
            var s = (t, a) => {
                o.onerror = o.onload = null, clearTimeout(u);
                var r = i[e];
                if (delete i[e], o.parentNode && o.parentNode.removeChild(o), r && r.forEach((e => e(a))), t) return t(a)
              },
              u = setTimeout(s.bind(null, void 0, {
                type: "timeout",
                target: o
              }), 12e4);
            o.onerror = s.bind(null, o.onerror), o.onload = s.bind(null, o.onload), c && document.head.appendChild(o)
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
              var o = t => {
                  t || (t = new Error("Container missing")), "string" == typeof t.message && (t.message += '\nwhile loading "' + r[1] + '" from ' + r[2]), m.m[e] = () => {
                    throw t
                  }, r.p = 0
                },
                c = (e, a, c, d, f, n) => {
                  try {
                    var s = e(a, c);
                    if (!s || !s.then) return f(s, d, n);
                    var i = s.then((e => f(e, d)), o);
                    if (!n) return i;
                    t.push(r.p = i)
                  } catch (e) {
                    o(e)
                  }
                },
                d = (e, t, o) => c(t.get, r[1], a, 0, f, o),
                f = t => {
                  r.p = 1, m.m[e] = e => {
                    e.exports = t()
                  }
                };
              c(m, r[2], 0, 0, ((e, t, a) => e ? c(m.I, r[0], 0, e, d, a) : o()), 1)
            }
          }))
        }, (() => {
          m.S = {};
          var e = {},
            t = {};
          m.I = (a, r) => {
            r || (r = []);
            var o = t[a];
            if (o || (o = t[a] = {}), !(r.indexOf(o) >= 0)) {
              if (r.push(o), e[a]) return e[a];
              m.o(m.S, a) || (m.S[a] = {});
              var c = m.S[a],
                d = "@rockstargames/modules-core-newswire-article",
                f = (e, t, a, r) => {
                  var o = c[e] = c[e] || {},
                    f = o[t];
                  (!f || !f.loaded && (!r != !f.eager ? r : d > f.from)) && (o[t] = {
                    get: a,
                    from: d,
                    eager: !!r
                  })
                },
                n = e => {
                  var t = e => {
                    return t = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(t));
                    var t
                  };
                  try {
                    var o = m(e);
                    if (!o) return;
                    var c = e => e && e.init && e.init(m.S[a], r);
                    if (o.then) return s.push(o.then(c, t));
                    var d = c(o);
                    if (d && d.then) return s.push(d.catch(t))
                  } catch (e) {
                    t(e)
                  }
                },
                s = [];
              return "default" === a && (f("@foundry/react", "1.19.0", (() => Promise.all([m.e(1223), m.e(1225), m.e(6878), m.e(4992), m.e(1403), m.e(9493), m.e(6632)]).then((() => () => m(14992))))), f("@rockstargames/locale-tools", "1.0.0", (() => Promise.all([m.e(1223), m.e(8066), m.e(1403), m.e(4143)]).then((() => () => m(24143))))), f("@rockstargames/modules-core-carousel", "1.2.4", (() => Promise.all([m.e(3524), m.e(9269), m.e(1403), m.e(1156), m.e(8089), m.e(732), m.e(3712)]).then((() => () => m(51331))))), f("@rockstargames/modules-core-engagement", "0.0.2", (() => Promise.all([m.e(3524), m.e(9269), m.e(4303), m.e(1469), m.e(1403), m.e(1156), m.e(285), m.e(207), m.e(8407), m.e(9756), m.e(6757)]).then((() => () => m(13772))))), f("@rockstargames/modules-core-group-of-items", "1.2.0", (() => Promise.all([m.e(3524), m.e(1403), m.e(1156), m.e(8089), m.e(7185), m.e(1879), m.e(207), m.e(7989), m.e(2495)]).then((() => () => m(42495))))), f("@rockstargames/modules-sc-ugc-spotlight", "1.1.3", (() => m.e(381).then((() => () => m(20381))))), f("dompurify", "2.4.7", (() => m.e(2956).then((() => () => m(72956))))), f("lodash", "4.17.21", (() => m.e(9429).then((() => () => m(79429))))), f("react-dom", "18.2.0", (() => Promise.all([m.e(5283), m.e(1403)]).then((() => () => m(15283))))), f("react-dom", "18.2.0", (() => Promise.all([m.e(7533), m.e(1403)]).then((() => () => m(47533))))), f("react-jsx-parser", "1.29.0", (() => Promise.all([m.e(1403), m.e(5238)]).then((() => () => m(85238))))), f("react-router-dom", "6.17.0", (() => Promise.all([m.e(4105), m.e(6008), m.e(1403)]).then((() => () => m(76008))))), f("react-router-dom", "6.17.0", (() => Promise.all([m.e(4105), m.e(4451), m.e(1403)]).then((() => () => m(4451))))), f("react", "18.2.0", (() => m.e(3380).then((() => () => m(23380))))), f("text-balancer", "1.0.5", (() => m.e(199).then((() => () => m(20199))))), n(99466), n(92969), n(25136), n(60404), n(61024), n(29441), n(49787)), s.length ? e[a] = Promise.all(s).then((() => e[a] = 1)) : e[a] = 1
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
                var o = a[0],
                  c = o < 0;
                c && (o = -o - 1);
                for (var d = 0, f = 1, n = !0;; f++, d++) {
                  var s, i, l = f < a.length ? (typeof a[f])[0] : "";
                  if (d >= r.length || "o" == (i = (typeof(s = r[d]))[0])) return !n || ("u" == l ? f > o && !c : "" == l != c);
                  if ("u" == i) {
                    if (!n || "u" != l) return !1
                  } else if (n)
                    if (l == i)
                      if (f <= o) {
                        if (s != a[f]) return !1
                      } else {
                        if (c ? s > a[f] : s < a[f]) return !1;
                        s != a[f] && (n = !1)
                      }
                  else if ("s" != l && "n" != l) {
                    if (c || f <= o) return !1;
                    n = !1, f--
                  } else {
                    if (f <= o || i < l != c) return !1;
                    n = !1
                  } else "s" != l && "n" != l && (n = !1, f--)
                }
              }
              var u = [],
                b = u.pop.bind(u);
              for (d = 1; d < a.length; d++) {
                var p = a[d];
                u.push(1 == p ? b() | b() : 2 == p ? b() & b() : p ? t(p, r) : !b())
              }
              return !!b()
            },
            a = (a, r, o) => {
              var c = a[r];
              return (r = Object.keys(c).reduce(((a, r) => !t(o, r) || a && !((t, a) => {
                t = e(t), a = e(a);
                for (var r = 0;;) {
                  if (r >= t.length) return r < a.length && "u" != (typeof a[r])[0];
                  var o = t[r],
                    c = (typeof o)[0];
                  if (r >= a.length) return "u" == c;
                  var d = a[r],
                    f = (typeof d)[0];
                  if (c != f) return "o" == c && "n" == f || "s" == f || "u" == c;
                  if ("o" != c && "u" != c && o != d) return o < d;
                  r++
                }
              })(a, r) ? a : r), 0)) && c[r]
            },
            r = (e => function(t, a, r, o) {
              var c = m.I(t);
              return c && c.then ? c.then(e.bind(e, t, m.S[t], a, r, o)) : e(t, m.S[t], a, r, o)
            })(((e, t, r, o, c) => {
              var d = t && m.o(t, r) && a(t, r, o);
              return d ? (e => (e.loaded = 1, e.get()))(d) : c()
            })),
            o = {},
            c = {
              71403: () => r("default", "react", [1, 18, 2, 0], (() => m.e(3380).then((() => () => m(23380))))),
              61631: () => r("default", "dompurify", [1, 2, 4, 1], (() => m.e(2956).then((() => () => m(72956))))),
              89779: () => r("default", "react-router-dom", [1, 6, 11, 2], (() => Promise.all([m.e(4105), m.e(6008)]).then((() => () => m(76008))))),
              96717: () => r("default", "@rockstargames/locale-tools", [1, "workspace:*"], (() => Promise.all([m.e(1223), m.e(8066), m.e(6524)]).then((() => () => m(24143))))),
              79493: () => r("default", "react-dom", [1, 18, 2, 0], (() => m.e(7533).then((() => () => m(47533))))),
              5217: () => r("default", "@rockstargames/modules-core-group-of-items", [1, "workspace:*"], (() => m.e(4876).then((() => () => m(42495))))),
              32503: () => r("default", "@rockstargames/modules-core-engagement", [1, "workspace:*"], (() => Promise.all([m.e(1469), m.e(6757)]).then((() => () => m(13772))))),
              37920: () => r("default", "text-balancer", [1, 1, 0, 5], (() => m.e(199).then((() => () => m(20199))))),
              54252: () => r("default", "lodash", [1, 4, 17, 21], (() => m.e(9429).then((() => () => m(79429))))),
              99096: () => r("default", "@foundry/react", [1, 1, 14, 2], (() => Promise.all([m.e(6878), m.e(4992)]).then((() => () => m(14992))))),
              26527: () => r("default", "@rockstargames/modules-core-carousel", [1, "workspace:*"], (() => Promise.all([m.e(732), m.e(1331)]).then((() => () => m(51331))))),
              66713: () => r("default", "@rockstargames/modules-sc-ugc-spotlight", [1, "workspace:*"], (() => m.e(381).then((() => () => m(20381))))),
              85865: () => r("default", "react-jsx-parser", [1, "workspace:*"], (() => m.e(5238).then((() => () => m(85238))))),
              57172: () => r("default", "react-router-dom", [1, 6, 11, 2], (() => Promise.all([m.e(4105), m.e(4451)]).then((() => () => m(4451)))))
            },
            d = {
              285: [89779, 96717],
              1403: [71403],
              2553: [5217, 32503, 37920, 54252, 99096],
              6757: [57172],
              7185: [61631],
              7207: [85865],
              9415: [26527, 66713],
              9493: [79493]
            },
            f = {};
          m.f.consumes = (e, t) => {
            m.o(d, e) && d[e].forEach((e => {
              if (m.o(o, e)) return t.push(o[e]);
              if (!f[e]) {
                var a = t => {
                  o[e] = 0, m.m[e] = a => {
                    delete m.c[e], a.exports = t()
                  }
                };
                f[e] = !0;
                var r = t => {
                  delete o[e], m.m[e] = a => {
                    throw delete m.c[e], t
                  }
                };
                try {
                  var d = c[e]();
                  d.then ? t.push(o[e] = d.then(a).catch(r)) : a(d)
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
                6757: 1,
                6758: 1,
                7185: 1,
                7187: 1,
                7207: 1,
                7989: 1,
                9756: 1
              } [t] && a.push(e[t] = (e => new Promise(((t, a) => {
                var r = m.miniCssF(e),
                  o = m.p + r;
                if (((e, t) => {
                    for (var a = document.getElementsByTagName("link"), r = 0; r < a.length; r++) {
                      var o = (d = a[r]).getAttribute("data-href") || d.getAttribute("href");
                      if ("stylesheet" === d.rel && (o === e || o === t)) return d
                    }
                    var c = document.getElementsByTagName("style");
                    for (r = 0; r < c.length; r++) {
                      var d;
                      if ((o = (d = c[r]).getAttribute("data-href")) === e || o === t) return d
                    }
                  })(r, o)) return t();
                ((e, t, a, r, o) => {
                  var c = document.createElement("link");
                  c.rel = "stylesheet", c.type = "text/css", c.onerror = c.onload = a => {
                    if (c.onerror = c.onload = null, "load" === a.type) r();
                    else {
                      var d = a && ("load" === a.type ? "missing" : a.type),
                        f = a && a.target && a.target.href || t,
                        n = new Error("Loading CSS chunk " + e + " failed.\n(" + f + ")");
                      n.code = "CSS_CHUNK_LOAD_FAILED", n.type = d, n.request = f, c.parentNode && c.parentNode.removeChild(c), o(n)
                    }
                  }, c.href = t, document.head.appendChild(c)
                })(e, o, 0, t, a)
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
              var o = new Promise(((a, o) => r = e[t] = [a, o]));
              a.push(r[2] = o);
              var c = m.p + m.u(t),
                d = new Error;
              m.l(c, (a => {
                if (m.o(e, t) && (0 !== (r = e[t]) && (e[t] = void 0), r)) {
                  var o = a && ("load" === a.type ? "missing" : a.type),
                    c = a && a.target && a.target.src;
                  d.message = "Loading chunk " + t + " failed.\n(" + o + ": " + c + ")", d.name = "ChunkLoadError", d.type = o, d.request = c, r[1](d)
                }
              }), "chunk-" + t, t)
            }
          };
          var t = (t, a) => {
              var r, o, c = a[0],
                d = a[1],
                f = a[2],
                n = 0;
              if (c.some((t => 0 !== e[t]))) {
                for (r in d) m.o(d, r) && (m.m[r] = d[r]);
                f && f(m)
              }
              for (t && t(a); n < c.length; n++) o = c[n], m.o(e, o) && e[o] && e[o][0](), e[o] = 0
            },
            a = self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || [];
          a.forEach(t.bind(null, 0)), a.push = t.bind(null, a.push.bind(a))
        })(), m.nc = void 0, m(32160), m(68623)
      })())
    }
  }
}));