! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "0bdf49dc-8b85-49a3-b7a9-f19925f168e7", e._sentryDebugIdIdentifier = "sentry-dbid-0bdf49dc-8b85-49a3-b7a9-f19925f168e7")
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
    d = {},
    c = {},
    f = {},
    n = {};
  return Object.defineProperty(a, "__esModule", {
    value: !0
  }), Object.defineProperty(r, "__esModule", {
    value: !0
  }), Object.defineProperty(o, "__esModule", {
    value: !0
  }), Object.defineProperty(d, "__esModule", {
    value: !0
  }), Object.defineProperty(c, "__esModule", {
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
        d[t] = e[t]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(t) {
        c[t] = e[t]
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
                for (var r = "/" === a.pathname[0] ? a.pathname : "/" + a.pathname, o = 0, d = r.length; o !== t && d >= 0;) "/" === r[--d] && o++;
                if (o !== t) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + t + ") is greater than the number of directories (" + o + ") in the URL path " + e);
                var c = r.slice(0, d + 1);
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
                o = (e, t) => (a.R = t, t = a.o(r, e) ? r[e]() : Promise.resolve().then((() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                })), a.R = void 0, t),
                d = (e, t) => {
                  if (a.S) {
                    var r = "default",
                      o = a.S[r];
                    if (o && o !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return a.S[r] = e, a.I(r, t)
                  }
                };
              a.d(t, {
                get: () => o,
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
              e.exports = o
            },
            60404: e => {
              "use strict";
              e.exports = d
            },
            25136: e => {
              "use strict";
              e.exports = c
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
          for (var d = 2 & a && t;
            "object" == typeof d && !~e.indexOf(d); d = s(d)) Object.getOwnPropertyNames(d).forEach((e => o[e] = () => t[e]));
          return o.default = () => t, m.d(r, o), r
        }, m.d = (e, t) => {
          for (var a in t) m.o(t, a) && !m.o(e, a) && Object.defineProperty(e, a, {
            enumerable: !0,
            get: t[a]
          })
        }, m.f = {}, m.e = e => Promise.all(Object.keys(m.f).reduce(((t, a) => (m.f[a](e, t), t)), [])), m.u = e => "js/" + {
          199: "c765d8dfd1604c829562df196d6c992a",
          207: "4c6f54af0546121331db01f1db335f8d",
          285: "2a19544c9025eb42a20950121810825a",
          353: "008188b9627b03fac2b9b0a2c7c48e61",
          381: "78b725d4fa22c30f0c35857d62785e23",
          732: "61394d05cf669f2ef410f86dbedba41d",
          825: "ca7bf29436e32e7b10fdb569ec06816e",
          881: "143ba3ea8e2a90ea2a74de9099c90c40",
          1156: "cc922efc646be03a6e96db0c8dc79076",
          1189: "180de08e9dc13492836c6cfb81325747",
          1223: "13248bf369b66db88a05646ea87daef9",
          1225: "83c5d07490cc9c2609ee31ee4178883b",
          1331: "db1310a604b20393289c74ea99486856",
          1403: "ddb9799907f7446101f8ded56fdf5523",
          1469: "4112e82077912d1b43285983a85dd45a",
          1622: "4baa6ecccc3d2fb06016f8e2c733aad6",
          1879: "fd6db654d72fc6bdacfc5fe94abe7b4c",
          2495: "976edaea8960c6d64efbad23ec3c275f",
          2553: "22aef994e7b7795022fe5d0443ee773f",
          2808: "4e1bdee1ab3be93e94b948c5a4637b60",
          2939: "0b7bf1693d99203d2624293c538ca8dc",
          2956: "754a995d4fd9bc99ba30a65a671f16f4",
          3380: "dd8716e08610a6dfffb9ace9530358e9",
          3431: "65bc49b23a6a8b944d8fc831dad31b78",
          3464: "18795082151cf98ed872fb7329d15b35",
          3524: "c09ed3660b0230f93e3b7b1495bbcdd7",
          3712: "96ee801d410cfe2965cd4a1f2724fa06",
          4105: "88204760c52e60e3600a499b942c79c3",
          4143: "4a7a8854dda14d546992aedc895b6112",
          4216: "0770f949089e2a01990611ec023f29f8",
          4303: "4f511d4f3bea5f743740c2f461541c23",
          4451: "780cd4a1894439dd91013335b4610153",
          4876: "0338401c0fec13476683850b710afbfa",
          4992: "dbf0c0e91f16fd08394f6757cd09deae",
          5238: "731f465b31e5a8f02b91863a3de4b40a",
          5283: "176d7da75726c9eab1b32b0430f04c67",
          5800: "66462140bf076c873bde03bf2f8157ed",
          6008: "a9218743f676b9d40e413a8ac78f2637",
          6524: "8f2d9c0afcfb7ca1e7c7e224bb23e6ba",
          6632: "83eca4538bc14587a352f7814156b5b3",
          6757: "9585877ab61b2a7ccf1721ecf637e6fe",
          6758: "bd896cbcf3c09cce8724de13a4fe7a3a",
          6808: "f21f1cc8fd59069b778387ba2e943385",
          6878: "18d4d89f3df55b1a4523ac9fd0429b27",
          6996: "7fa19f047207ac2dc44ad214e0d2a220",
          7123: "38fb453b99887fff0a58ff0d02853029",
          7185: "c2666a9149566bae8996633b276aa7ad",
          7187: "ee0af9da9fe9763187d329f9f0c0d595",
          7207: "da957446ae2156d9c488a2801a17472c",
          7533: "6d608ded4e9fba5278d9ee471d6925dc",
          7601: "3c292584749d299e5fe80e8477005306",
          7781: "1b9b03ac170a9ece6c4dc597c769f906",
          7989: "83150e6b5b7c04216439ee4d9efc30fa",
          8066: "0168819c368a5f4fbaaf393a2f010079",
          8089: "8bab15068b5f8709c6793d02556eb838",
          8290: "5672dfc08ebe70d6a495b5cb93541127",
          8314: "44992e8d0b9c3282fabc602e541ac8ad",
          8407: "89d369fbace1d513bd0b21d0d3f3e07b",
          9269: "97d1f1de4fae7755b964d5f418f6e26a",
          9415: "612fec2d7dcc713c4bd6f47f07bc9cea",
          9429: "e3e3998e8178d5490d96ea6c36951171",
          9435: "851cdf1ccadf967ada43547f332e98c7",
          9493: "d954671b5fb8a740a9ea8c408e52bb6b",
          9756: "a664695ae213aaffff762bc10299f3bb",
          9853: "c858aad5ad0c2efbb883167157fbf7c2"
        } [e] + ".js", m.miniCssF = e => "css/" + {
          353: "2437cf6a7a9dc144e5eb8c961218836a",
          732: "7804a8964f391fe5e1b3d2ce77453b1e",
          2495: "b08ca19edfaeb652f00d0630da87be9c",
          2553: "162bba8a2ff14a549bfd752b0d185e40",
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
            var o, d;
            if (void 0 !== a)
              for (var c = document.getElementsByTagName("script"), f = 0; f < c.length; f++) {
                var n = c[f];
                if (n.getAttribute("src") == e || n.getAttribute("data-webpack") == l + a) {
                  o = n;
                  break
                }
              }
            o || (d = !0, (o = document.createElement("script")).charset = "utf-8", o.timeout = 120, m.nc && o.setAttribute("nonce", m.nc), o.setAttribute("data-webpack", l + a), o.src = e), i[e] = [t];
            var s = (t, a) => {
                o.onerror = o.onload = null, clearTimeout(u);
                var r = i[e];
                if (delete i[e], o.parentNode && o.parentNode.removeChild(o), r && r.forEach((e => e(a))), t) return t(a)
              },
              u = setTimeout(s.bind(null, void 0, {
                type: "timeout",
                target: o
              }), 12e4);
            o.onerror = s.bind(null, o.onerror), o.onload = s.bind(null, o.onload), d && document.head.appendChild(o)
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
                d = (e, a, d, c, f, n) => {
                  try {
                    var s = e(a, d);
                    if (!s || !s.then) return f(s, c, n);
                    var i = s.then((e => f(e, c)), o);
                    if (!n) return i;
                    t.push(r.p = i)
                  } catch (e) {
                    o(e)
                  }
                },
                c = (e, t, o) => d(t.get, r[1], a, 0, f, o),
                f = t => {
                  r.p = 1, m.m[e] = e => {
                    e.exports = t()
                  }
                };
              d(m, r[2], 0, 0, ((e, t, a) => e ? d(m.I, r[0], 0, e, c, a) : o()), 1)
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
              var d = m.S[a],
                c = "@rockstargames/modules-core-newswire-article",
                f = (e, t, a, r) => {
                  var o = d[e] = d[e] || {},
                    f = o[t];
                  (!f || !f.loaded && (!r != !f.eager ? r : c > f.from)) && (o[t] = {
                    get: a,
                    from: c,
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
                    var d = e => e && e.init && e.init(m.S[a], r);
                    if (o.then) return s.push(o.then(d, t));
                    var c = d(o);
                    if (c && c.then) return s.push(c.catch(t))
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
                  d = o < 0;
                d && (o = -o - 1);
                for (var c = 0, f = 1, n = !0;; f++, c++) {
                  var s, i, l = f < a.length ? (typeof a[f])[0] : "";
                  if (c >= r.length || "o" == (i = (typeof(s = r[c]))[0])) return !n || ("u" == l ? f > o && !d : "" == l != d);
                  if ("u" == i) {
                    if (!n || "u" != l) return !1
                  } else if (n)
                    if (l == i)
                      if (f <= o) {
                        if (s != a[f]) return !1
                      } else {
                        if (d ? s > a[f] : s < a[f]) return !1;
                        s != a[f] && (n = !1)
                      }
                  else if ("s" != l && "n" != l) {
                    if (d || f <= o) return !1;
                    n = !1, f--
                  } else {
                    if (f <= o || i < l != d) return !1;
                    n = !1
                  } else "s" != l && "n" != l && (n = !1, f--)
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
            a = (a, r, o) => {
              var d = a[r];
              return (r = Object.keys(d).reduce(((a, r) => !t(o, r) || a && !((t, a) => {
                t = e(t), a = e(a);
                for (var r = 0;;) {
                  if (r >= t.length) return r < a.length && "u" != (typeof a[r])[0];
                  var o = t[r],
                    d = (typeof o)[0];
                  if (r >= a.length) return "u" == d;
                  var c = a[r],
                    f = (typeof c)[0];
                  if (d != f) return "o" == d && "n" == f || "s" == f || "u" == d;
                  if ("o" != d && "u" != d && o != c) return o < c;
                  r++
                }
              })(a, r) ? a : r), 0)) && d[r]
            },
            r = (e => function(t, a, r, o) {
              var d = m.I(t);
              return d && d.then ? d.then(e.bind(e, t, m.S[t], a, r, o)) : e(t, m.S[t], a, r, o)
            })(((e, t, r, o, d) => {
              var c = t && m.o(t, r) && a(t, r, o);
              return c ? (e => (e.loaded = 1, e.get()))(c) : d()
            })),
            o = {},
            d = {
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
            c = {
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
            m.o(c, e) && c[e].forEach((e => {
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
                  var c = d[e]();
                  c.then ? t.push(o[e] = c.then(a).catch(r)) : a(c)
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
                      var o = (c = a[r]).getAttribute("data-href") || c.getAttribute("href");
                      if ("stylesheet" === c.rel && (o === e || o === t)) return c
                    }
                    var d = document.getElementsByTagName("style");
                    for (r = 0; r < d.length; r++) {
                      var c;
                      if ((o = (c = d[r]).getAttribute("data-href")) === e || o === t) return c
                    }
                  })(r, o)) return t();
                ((e, t, a, r, o) => {
                  var d = document.createElement("link");
                  d.rel = "stylesheet", d.type = "text/css", d.onerror = d.onload = a => {
                    if (d.onerror = d.onload = null, "load" === a.type) r();
                    else {
                      var c = a && ("load" === a.type ? "missing" : a.type),
                        f = a && a.target && a.target.href || t,
                        n = new Error("Loading CSS chunk " + e + " failed.\n(" + f + ")");
                      n.code = "CSS_CHUNK_LOAD_FAILED", n.type = c, n.request = f, d.parentNode && d.parentNode.removeChild(d), o(n)
                    }
                  }, d.href = t, document.head.appendChild(d)
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
              var d = m.p + m.u(t),
                c = new Error;
              m.l(d, (a => {
                if (m.o(e, t) && (0 !== (r = e[t]) && (e[t] = void 0), r)) {
                  var o = a && ("load" === a.type ? "missing" : a.type),
                    d = a && a.target && a.target.src;
                  c.message = "Loading chunk " + t + " failed.\n(" + o + ": " + d + ")", c.name = "ChunkLoadError", c.type = o, c.request = d, r[1](c)
                }
              }), "chunk-" + t, t)
            }
          };
          var t = (t, a) => {
              var r, o, d = a[0],
                c = a[1],
                f = a[2],
                n = 0;
              if (d.some((t => 0 !== e[t]))) {
                for (r in c) m.o(c, r) && (m.m[r] = c[r]);
                f && f(m)
              }
              for (t && t(a); n < d.length; n++) o = d[n], m.o(e, o) && e[o] && e[o][0](), e[o] = 0
            },
            a = self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || [];
          a.forEach(t.bind(null, 0)), a.push = t.bind(null, a.push.bind(a))
        })(), m.nc = void 0, m(32160), m(68623)
      })())
    }
  }
}));