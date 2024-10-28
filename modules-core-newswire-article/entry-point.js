! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "f64906e9-92eb-4bcb-ab5f-e03774aa6ee2", e._sentryDebugIdIdentifier = "sentry-dbid-f64906e9-92eb-4bcb-ab5f-e03774aa6ee2")
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
    f = {},
    d = {},
    n = {},
    c = {};
  return Object.defineProperty(a, "__esModule", {
    value: !0
  }), Object.defineProperty(r, "__esModule", {
    value: !0
  }), Object.defineProperty(o, "__esModule", {
    value: !0
  }), Object.defineProperty(f, "__esModule", {
    value: !0
  }), Object.defineProperty(d, "__esModule", {
    value: !0
  }), Object.defineProperty(n, "__esModule", {
    value: !0
  }), Object.defineProperty(c, "__esModule", {
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
        f[t] = e[t]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(t) {
        d[t] = e[t]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(t) {
        n[t] = e[t]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(t) {
        c[t] = e[t]
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
                for (var r = "/" === a.pathname[0] ? a.pathname : "/" + a.pathname, o = 0, f = r.length; o !== t && f >= 0;) "/" === r[--f] && o++;
                if (o !== t) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + t + ") is greater than the number of directories (" + o + ") in the URL path " + e);
                var d = r.slice(0, f + 1);
                return a.protocol + "//" + a.host + d
              };
              Number.isInteger
            },
            68623: (e, t, a) => {
              "use strict";
              var r = {
                  "./NewswireArticle": () => Promise.all([a.e(3524), a.e(1223), a.e(9269), a.e(4303), a.e(1225), a.e(1189), a.e(6878), a.e(6348), a.e(1403), a.e(1156), a.e(8089), a.e(7185), a.e(285), a.e(1879), a.e(207), a.e(8407), a.e(6758), a.e(9756), a.e(7989), a.e(9493), a.e(2553), a.e(9415), a.e(7207), a.e(825)]).then((() => () => a(80825))),
                  "./NewswireTitle": () => Promise.all([a.e(1403), a.e(1156), a.e(8089), a.e(7185), a.e(285), a.e(353)]).then((() => () => a(85184))),
                  "./components": () => Promise.all([a.e(3524), a.e(1223), a.e(9269), a.e(4303), a.e(1225), a.e(1189), a.e(1403), a.e(1156), a.e(8089), a.e(7185), a.e(285), a.e(1879), a.e(207), a.e(8407), a.e(6758), a.e(9756), a.e(7989), a.e(9493), a.e(2553)]).then((() => () => a(26750))),
                  "./index": () => Promise.all([a.e(3524), a.e(1223), a.e(9269), a.e(4303), a.e(1225), a.e(1189), a.e(1403), a.e(1156), a.e(8089), a.e(7185), a.e(285), a.e(1879), a.e(207), a.e(8407), a.e(6758), a.e(9756), a.e(7989), a.e(9493), a.e(2553), a.e(9415), a.e(4216)]).then((() => () => a(74216))),
                  "./tinaBlockTemplates": () => Promise.all([a.e(7601), a.e(1403), a.e(1156), a.e(8089), a.e(7185), a.e(1879), a.e(8407), a.e(6758), a.e(5800)]).then((() => () => a(75800))),
                  "./types": () => Promise.all([a.e(3524), a.e(1223), a.e(9269), a.e(4303), a.e(1225), a.e(1189), a.e(6878), a.e(6348), a.e(1403), a.e(1156), a.e(8089), a.e(7185), a.e(285), a.e(1879), a.e(207), a.e(8407), a.e(6758), a.e(9756), a.e(7989), a.e(9493), a.e(2553), a.e(9415), a.e(7207), a.e(9435)]).then((() => () => a(69435)))
                },
                o = (e, t) => (a.R = t, t = a.o(r, e) ? r[e]() : Promise.resolve().then((() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                })), a.R = void 0, t),
                f = (e, t) => {
                  if (a.S) {
                    var r = "default",
                      o = a.S[r];
                    if (o && o !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return a.S[r] = e, a.I(r, t)
                  }
                };
              a.d(t, {
                get: () => o,
                init: () => f
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
              e.exports = f
            },
            25136: e => {
              "use strict";
              e.exports = d
            },
            99466: e => {
              "use strict";
              e.exports = n
            },
            92969: e => {
              "use strict";
              e.exports = c
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
          for (var f = 2 & a && t;
            "object" == typeof f && !~e.indexOf(f); f = s(f)) Object.getOwnPropertyNames(f).forEach((e => o[e] = () => t[e]));
          return o.default = () => t, m.d(r, o), r
        }, m.d = (e, t) => {
          for (var a in t) m.o(t, a) && !m.o(e, a) && Object.defineProperty(e, a, {
            enumerable: !0,
            get: t[a]
          })
        }, m.f = {}, m.e = e => Promise.all(Object.keys(m.f).reduce(((t, a) => (m.f[a](e, t), t)), [])), m.u = e => "js/" + {
          199: "d7ef591d01f0b860c8d810ec0b04fed9",
          207: "4c6f54af0546121331db01f1db335f8d",
          285: "5a46c629bbfa3deac51ddb533be867cf",
          353: "d86caffa1dbe72c2b23bb74650e46c24",
          381: "1dc6ccd0f7f99ba4a6bf0bbaaf1056cb",
          732: "61394d05cf669f2ef410f86dbedba41d",
          825: "c7e68266aa785e5296e5cdd5e707c919",
          1156: "cc922efc646be03a6e96db0c8dc79076",
          1189: "d9517168ef28b41dd3edf1521a660753",
          1223: "bcd56e0617f676aeb70e2f8a065bc50e",
          1225: "d770645ade31363b649372b8f931b306",
          1331: "d6e80d2a9a24e9fffc99a5080274b3f7",
          1360: "6b28403d1139fe18c03395a441f3af4b",
          1403: "ddb9799907f7446101f8ded56fdf5523",
          1469: "414a9ac930614f96fd854b470bbc1771",
          1879: "fd6db654d72fc6bdacfc5fe94abe7b4c",
          2553: "bf2aaa5605d9f75138e860a4b960b271",
          2723: "3f306ec291be080de4cb662649a955a8",
          2956: "431ff752d0368fd444c205bf1899a65d",
          3380: "74fe5d77505558264fb9a1c02e65ad24",
          3524: "4e8e41d3d74af8e5da37a1955433174c",
          3712: "f51a08516b0bfec4def18d3a70edfaaf",
          4105: "2305f00cf8a0eda86d4bdf510b111950",
          4143: "9b55235bf124a1f2e66e03385be140ff",
          4196: "1d61c77305b3d63e8030a18ed5fc4fe1",
          4216: "90ec52765acde9985131a6f3dc861d79",
          4303: "374ba135c83ecb6a1ec29f6cbf469b3d",
          4451: "779ac532c4b17fd2d50bb1f7b09bb57f",
          5133: "c5cac004dc27592e6f53d1110c401fe1",
          5238: "83ee23b65fc7a4a057d9020f4d13f045",
          5283: "a6ccc518db25aafd39a1759060a40583",
          5800: "bf9d85df7ac4cb63e6df79d8b739828f",
          6008: "f3c325b88aced5fa95bc7fb0dbef9d9c",
          6022: "35502cbefe234c14004e3ccac6944e02",
          6119: "e48f861b74de717e2971234e1331e3e7",
          6348: "7d270eb0ed891606c3901194ffdd858e",
          6524: "02bf2d1a8c02002db59b8c6f2ffa27d4",
          6632: "681a60857ec9340e2df9b4d370c2c0f4",
          6757: "3eb719c59fcab322664cd7591ee52da2",
          6758: "10a4cb8e8e4c487af8708700467485c6",
          6878: "9b98f6f27193b38fd828f3bc91ceb186",
          7185: "c2666a9149566bae8996633b276aa7ad",
          7207: "da957446ae2156d9c488a2801a17472c",
          7322: "8d191756131bef7b948385e3ce1eda56",
          7426: "990dd66147bec77bb44d22b146decaaf",
          7533: "eddfe43b21b98963d5031c24c1875b46",
          7601: "9abee4a51f56edd54b0a84c4720138ed",
          7764: "d40e993e77ca91398d87f87fb0349add",
          7989: "83150e6b5b7c04216439ee4d9efc30fa",
          8066: "e39f2598cac40ff5098441fffcc14690",
          8089: "8bab15068b5f8709c6793d02556eb838",
          8158: "f5e305ac2d892188cf862ae3341a6b1d",
          8407: "89d369fbace1d513bd0b21d0d3f3e07b",
          8425: "3ee6e9c491f587f6851c27d67ac30483",
          8500: "b075a4b4d09f0f73ef0d54160768f0ef",
          9100: "cfc4eee66c9ea819b8f9cde0c49a8446",
          9113: "514f3e8e947933ecb6a0a5d810c7403f",
          9191: "38ad5f3eb03b5048450e59542e40841f",
          9269: "f9cc9461ed0c80fa6c58c58aa510897e",
          9415: "612fec2d7dcc713c4bd6f47f07bc9cea",
          9429: "21bd5dae4075d5e0867311250d1165d2",
          9435: "703b00354b30122aaad9efdf83810afc",
          9493: "d954671b5fb8a740a9ea8c408e52bb6b",
          9663: "81bfa4389b57f5fada290e60837c5366",
          9756: "3918b32df67fe21fa9dd4da8506fbeee"
        } [e] + ".js", m.miniCssF = e => "css/" + {
          353: "2437cf6a7a9dc144e5eb8c961218836a",
          732: "7804a8964f391fe5e1b3d2ce77453b1e",
          2553: "cca4774de069364195c488cc7b929d8e",
          3712: "b8df5e4b23fe38de94f67a48602e6f3b",
          6119: "2d1c0b9b67883648652d608f8448f059",
          6348: "9faecd686b2cf12df9b83800d0499158",
          6757: "03e70232c89eeedc725a1dedeef33174",
          6758: "4b0ed39075607cfb88e45f4fbf45a999",
          7185: "14e901cdb3151040ad44fc13b493452e",
          7207: "7430346e4fd1d070d6bc7f6e85beebf7",
          7322: "1368323c31eba1a41eb9227ad26818d4",
          7989: "2d479fdc2ad051cd66458cf1c2f66dff",
          8500: "6f20a493edeb0af706306a7600db3c5a",
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
            var o, f;
            if (void 0 !== a)
              for (var d = document.getElementsByTagName("script"), n = 0; n < d.length; n++) {
                var c = d[n];
                if (c.getAttribute("src") == e || c.getAttribute("data-webpack") == l + a) {
                  o = c;
                  break
                }
              }
            o || (f = !0, (o = document.createElement("script")).charset = "utf-8", o.timeout = 120, m.nc && o.setAttribute("nonce", m.nc), o.setAttribute("data-webpack", l + a), o.src = e), i[e] = [t];
            var s = (t, a) => {
                o.onerror = o.onload = null, clearTimeout(u);
                var r = i[e];
                if (delete i[e], o.parentNode && o.parentNode.removeChild(o), r && r.forEach((e => e(a))), t) return t(a)
              },
              u = setTimeout(s.bind(null, void 0, {
                type: "timeout",
                target: o
              }), 12e4);
            o.onerror = s.bind(null, o.onerror), o.onload = s.bind(null, o.onload), f && document.head.appendChild(o)
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
                f = (e, a, f, d, n, c) => {
                  try {
                    var s = e(a, f);
                    if (!s || !s.then) return n(s, d, c);
                    var i = s.then((e => n(e, d)), o);
                    if (!c) return i;
                    t.push(r.p = i)
                  } catch (e) {
                    o(e)
                  }
                },
                d = (e, t, o) => f(t.get, r[1], a, 0, n, o),
                n = t => {
                  r.p = 1, m.m[e] = e => {
                    e.exports = t()
                  }
                };
              f(m, r[2], 0, 0, ((e, t, a) => e ? f(m.I, r[0], 0, e, d, a) : o()), 1)
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
              var f = m.S[a],
                d = "@rockstargames/modules-core-newswire-article",
                n = (e, t, a, r) => {
                  var o = f[e] = f[e] || {},
                    n = o[t];
                  (!n || !n.loaded && (!r != !n.eager ? r : d > n.from)) && (o[t] = {
                    get: a,
                    from: d,
                    eager: !!r
                  })
                },
                c = e => {
                  var t = e => {
                    return t = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(t));
                    var t
                  };
                  try {
                    var o = m(e);
                    if (!o) return;
                    var f = e => e && e.init && e.init(m.S[a], r);
                    if (o.then) return s.push(o.then(f, t));
                    var d = f(o);
                    if (d && d.then) return s.push(d.catch(t))
                  } catch (e) {
                    t(e)
                  }
                },
                s = [];
              return "default" === a && (n("@foundry/react", "1.14.1", (() => Promise.all([m.e(1223), m.e(1225), m.e(6878), m.e(7322), m.e(1403), m.e(9493), m.e(6632)]).then((() => () => m(97322))))), n("@rockstargames/locale-tools", "1.0.0", (() => Promise.all([m.e(1223), m.e(8066), m.e(1403), m.e(4143)]).then((() => () => m(24143))))), n("@rockstargames/modules-core-carousel", "1.2.4", (() => Promise.all([m.e(3524), m.e(9269), m.e(1403), m.e(1156), m.e(8089), m.e(732), m.e(3712)]).then((() => () => m(51331))))), n("@rockstargames/modules-core-engagement", "0.0.2", (() => Promise.all([m.e(3524), m.e(9269), m.e(4303), m.e(1469), m.e(1403), m.e(1156), m.e(285), m.e(207), m.e(8407), m.e(9756), m.e(6757)]).then((() => () => m(13772))))), n("@rockstargames/modules-core-group-of-items", "1.2.0", (() => Promise.all([m.e(3524), m.e(1403), m.e(1156), m.e(8089), m.e(7185), m.e(1879), m.e(207), m.e(7989), m.e(8500)]).then((() => () => m(18500))))), n("@rockstargames/modules-sc-ugc-spotlight", "1.1.3", (() => m.e(381).then((() => () => m(20381))))), n("dompurify", "2.4.7", (() => m.e(2956).then((() => () => m(72956))))), n("lodash", "4.17.21", (() => m.e(9429).then((() => () => m(79429))))), n("react-dom", "18.2.0", (() => Promise.all([m.e(5283), m.e(1403)]).then((() => () => m(15283))))), n("react-dom", "18.2.0", (() => Promise.all([m.e(7533), m.e(1403)]).then((() => () => m(47533))))), n("react-jsx-parser", "1.29.0", (() => Promise.all([m.e(1403), m.e(5238)]).then((() => () => m(85238))))), n("react-router-dom", "6.17.0", (() => Promise.all([m.e(4105), m.e(6008), m.e(1403)]).then((() => () => m(76008))))), n("react-router-dom", "6.17.0", (() => Promise.all([m.e(4105), m.e(4451), m.e(1403)]).then((() => () => m(4451))))), n("react", "18.2.0", (() => m.e(3380).then((() => () => m(23380))))), n("text-balancer", "1.0.5", (() => m.e(199).then((() => () => m(20199))))), c(99466), c(92969), c(25136), c(60404), c(61024), c(29441), c(49787)), s.length ? e[a] = Promise.all(s).then((() => e[a] = 1)) : e[a] = 1
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
                  f = o < 0;
                f && (o = -o - 1);
                for (var d = 0, n = 1, c = !0;; n++, d++) {
                  var s, i, l = n < a.length ? (typeof a[n])[0] : "";
                  if (d >= r.length || "o" == (i = (typeof(s = r[d]))[0])) return !c || ("u" == l ? n > o && !f : "" == l != f);
                  if ("u" == i) {
                    if (!c || "u" != l) return !1
                  } else if (c)
                    if (l == i)
                      if (n <= o) {
                        if (s != a[n]) return !1
                      } else {
                        if (f ? s > a[n] : s < a[n]) return !1;
                        s != a[n] && (c = !1)
                      }
                  else if ("s" != l && "n" != l) {
                    if (f || n <= o) return !1;
                    c = !1, n--
                  } else {
                    if (n <= o || i < l != f) return !1;
                    c = !1
                  } else "s" != l && "n" != l && (c = !1, n--)
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
              var f = a[r];
              return (r = Object.keys(f).reduce(((a, r) => !t(o, r) || a && !((t, a) => {
                t = e(t), a = e(a);
                for (var r = 0;;) {
                  if (r >= t.length) return r < a.length && "u" != (typeof a[r])[0];
                  var o = t[r],
                    f = (typeof o)[0];
                  if (r >= a.length) return "u" == f;
                  var d = a[r],
                    n = (typeof d)[0];
                  if (f != n) return "o" == f && "n" == n || "s" == n || "u" == f;
                  if ("o" != f && "u" != f && o != d) return o < d;
                  r++
                }
              })(a, r) ? a : r), 0)) && f[r]
            },
            r = (e => function(t, a, r, o) {
              var f = m.I(t);
              return f && f.then ? f.then(e.bind(e, t, m.S[t], a, r, o)) : e(t, m.S[t], a, r, o)
            })(((e, t, r, o, f) => {
              var d = t && m.o(t, r) && a(t, r, o);
              return d ? (e => (e.loaded = 1, e.get()))(d) : f()
            })),
            o = {},
            f = {
              71403: () => r("default", "react", [1, 18, 2, 0], (() => m.e(3380).then((() => () => m(23380))))),
              61631: () => r("default", "dompurify", [1, 2, 4, 1], (() => m.e(2956).then((() => () => m(72956))))),
              89779: () => r("default", "react-router-dom", [1, 6, 11, 2], (() => Promise.all([m.e(4105), m.e(6008)]).then((() => () => m(76008))))),
              96717: () => r("default", "@rockstargames/locale-tools", [1, "workspace:*"], (() => Promise.all([m.e(1223), m.e(8066), m.e(6524)]).then((() => () => m(24143))))),
              79493: () => r("default", "react-dom", [1, 18, 2, 0], (() => m.e(7533).then((() => () => m(47533))))),
              32503: () => r("default", "@rockstargames/modules-core-engagement", [1, "workspace:*"], (() => Promise.all([m.e(1469), m.e(6757)]).then((() => () => m(13772))))),
              37920: () => r("default", "text-balancer", [1, 1, 0, 5], (() => m.e(199).then((() => () => m(20199))))),
              48309: () => r("default", "@foundry/react", [1, 1, 14, 1], (() => Promise.all([m.e(6878), m.e(7322)]).then((() => () => m(97322))))),
              54252: () => r("default", "lodash", [1, 4, 17, 21], (() => m.e(9429).then((() => () => m(79429))))),
              74459: () => r("default", "@rockstargames/modules-core-group-of-items", [1, "workspace:*"], (() => m.e(6119).then((() => () => m(18500))))),
              26527: () => r("default", "@rockstargames/modules-core-carousel", [1, "workspace:*"], (() => Promise.all([m.e(732), m.e(1331)]).then((() => () => m(51331))))),
              66713: () => r("default", "@rockstargames/modules-sc-ugc-spotlight", [1, "workspace:*"], (() => m.e(381).then((() => () => m(20381))))),
              85865: () => r("default", "react-jsx-parser", [1, "workspace:*"], (() => m.e(5238).then((() => () => m(85238))))),
              57172: () => r("default", "react-router-dom", [1, 6, 11, 2], (() => Promise.all([m.e(4105), m.e(4451)]).then((() => () => m(4451)))))
            },
            d = {
              285: [89779, 96717],
              1403: [71403],
              2553: [32503, 37920, 48309, 54252, 74459],
              6757: [57172],
              7185: [61631],
              7207: [85865],
              9415: [26527, 66713],
              9493: [79493]
            },
            n = {};
          m.f.consumes = (e, t) => {
            m.o(d, e) && d[e].forEach((e => {
              if (m.o(o, e)) return t.push(o[e]);
              if (!n[e]) {
                var a = t => {
                  o[e] = 0, m.m[e] = a => {
                    delete m.c[e], a.exports = t()
                  }
                };
                n[e] = !0;
                var r = t => {
                  delete o[e], m.m[e] = a => {
                    throw delete m.c[e], t
                  }
                };
                try {
                  var d = f[e]();
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
                2553: 1,
                3712: 1,
                6119: 1,
                6348: 1,
                6757: 1,
                6758: 1,
                7185: 1,
                7207: 1,
                7322: 1,
                7989: 1,
                8500: 1,
                9756: 1
              } [t] && a.push(e[t] = (e => new Promise(((t, a) => {
                var r = m.miniCssF(e),
                  o = m.p + r;
                if (((e, t) => {
                    for (var a = document.getElementsByTagName("link"), r = 0; r < a.length; r++) {
                      var o = (d = a[r]).getAttribute("data-href") || d.getAttribute("href");
                      if ("stylesheet" === d.rel && (o === e || o === t)) return d
                    }
                    var f = document.getElementsByTagName("style");
                    for (r = 0; r < f.length; r++) {
                      var d;
                      if ((o = (d = f[r]).getAttribute("data-href")) === e || o === t) return d
                    }
                  })(r, o)) return t();
                ((e, t, a, r, o) => {
                  var f = document.createElement("link");
                  f.rel = "stylesheet", f.type = "text/css", f.onerror = f.onload = a => {
                    if (f.onerror = f.onload = null, "load" === a.type) r();
                    else {
                      var d = a && ("load" === a.type ? "missing" : a.type),
                        n = a && a.target && a.target.href || t,
                        c = new Error("Loading CSS chunk " + e + " failed.\n(" + n + ")");
                      c.code = "CSS_CHUNK_LOAD_FAILED", c.type = d, c.request = n, f.parentNode && f.parentNode.removeChild(f), o(c)
                    }
                  }, f.href = t, document.head.appendChild(f)
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
              var f = m.p + m.u(t),
                d = new Error;
              m.l(f, (a => {
                if (m.o(e, t) && (0 !== (r = e[t]) && (e[t] = void 0), r)) {
                  var o = a && ("load" === a.type ? "missing" : a.type),
                    f = a && a.target && a.target.src;
                  d.message = "Loading chunk " + t + " failed.\n(" + o + ": " + f + ")", d.name = "ChunkLoadError", d.type = o, d.request = f, r[1](d)
                }
              }), "chunk-" + t, t)
            }
          };
          var t = (t, a) => {
              var r, o, f = a[0],
                d = a[1],
                n = a[2],
                c = 0;
              if (f.some((t => 0 !== e[t]))) {
                for (r in d) m.o(d, r) && (m.m[r] = d[r]);
                n && n(m)
              }
              for (t && t(a); c < f.length; c++) o = f[c], m.o(e, o) && e[o] && e[o][0](), e[o] = 0
            },
            a = self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || [];
          a.forEach(t.bind(null, 0)), a.push = t.bind(null, a.push.bind(a))
        })(), m.nc = void 0, m(32160), m(68623)
      })())
    }
  }
}));