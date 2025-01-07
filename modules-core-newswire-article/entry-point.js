! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "e9d66ab1-e3a4-4b53-92b3-115f73e282a2", e._sentryDebugIdIdentifier = "sentry-dbid-e9d66ab1-e3a4-4b53-92b3-115f73e282a2")
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
  var r = {},
    a = {},
    o = {},
    d = {},
    c = {},
    n = {},
    f = {};
  return Object.defineProperty(r, "__esModule", {
    value: !0
  }), Object.defineProperty(a, "__esModule", {
    value: !0
  }), Object.defineProperty(o, "__esModule", {
    value: !0
  }), Object.defineProperty(d, "__esModule", {
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
        r[t] = e[t]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(t) {
        a[t] = e[t]
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
            6539: (e, t, r) => {
              (0, r(13403).w)(1)
            },
            13403: (e, t, r) => {
              const a = r(75659).y;
              t.w = function(e) {
                if (e || (e = 1), !r.y.meta || !r.y.meta.url) throw console.error("__system_context__", r.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                r.p = a(r.y.meta.url, e)
              }
            },
            32160: (e, t, r) => {
              r(6539)
            },
            75659: (e, t, r) => {
              t.y = function(e, t) {
                var r = document.createElement("a");
                r.href = e;
                for (var a = "/" === r.pathname[0] ? r.pathname : "/" + r.pathname, o = 0, d = a.length; o !== t && d >= 0;) "/" === a[--d] && o++;
                if (o !== t) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + t + ") is greater than the number of directories (" + o + ") in the URL path " + e);
                var c = a.slice(0, d + 1);
                return r.protocol + "//" + r.host + c
              };
              Number.isInteger
            },
            68623: (e, t, r) => {
              "use strict";
              var a = {
                  "./NewswireArticle": () => Promise.all([r.e(3524), r.e(1223), r.e(9269), r.e(4303), r.e(1225), r.e(1189), r.e(6878), r.e(7187), r.e(1403), r.e(1156), r.e(8089), r.e(7185), r.e(285), r.e(1879), r.e(207), r.e(8407), r.e(6758), r.e(9756), r.e(7989), r.e(9493), r.e(2553), r.e(9415), r.e(7207), r.e(825)]).then((() => () => r(80825))),
                  "./NewswireTitle": () => Promise.all([r.e(1403), r.e(1156), r.e(8089), r.e(7185), r.e(285), r.e(353)]).then((() => () => r(85184))),
                  "./components": () => Promise.all([r.e(3524), r.e(1223), r.e(9269), r.e(4303), r.e(1225), r.e(1189), r.e(1403), r.e(1156), r.e(8089), r.e(7185), r.e(285), r.e(1879), r.e(207), r.e(8407), r.e(6758), r.e(9756), r.e(7989), r.e(9493), r.e(2553)]).then((() => () => r(26750))),
                  "./index": () => Promise.all([r.e(3524), r.e(1223), r.e(9269), r.e(4303), r.e(1225), r.e(1189), r.e(1403), r.e(1156), r.e(8089), r.e(7185), r.e(285), r.e(1879), r.e(207), r.e(8407), r.e(6758), r.e(9756), r.e(7989), r.e(9493), r.e(2553), r.e(9415), r.e(4216)]).then((() => () => r(74216))),
                  "./tinaBlockTemplates": () => Promise.all([r.e(7601), r.e(1403), r.e(1156), r.e(8089), r.e(7185), r.e(1879), r.e(8407), r.e(6758), r.e(5800)]).then((() => () => r(75800))),
                  "./types": () => Promise.all([r.e(3524), r.e(1223), r.e(9269), r.e(4303), r.e(1225), r.e(1189), r.e(6878), r.e(7187), r.e(1403), r.e(1156), r.e(8089), r.e(7185), r.e(285), r.e(1879), r.e(207), r.e(8407), r.e(6758), r.e(9756), r.e(7989), r.e(9493), r.e(2553), r.e(9415), r.e(7207), r.e(9435)]).then((() => () => r(69435)))
                },
                o = (e, t) => (r.R = t, t = r.o(a, e) ? a[e]() : Promise.resolve().then((() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                })), r.R = void 0, t),
                d = (e, t) => {
                  if (r.S) {
                    var a = "default",
                      o = r.S[a];
                    if (o && o !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return r.S[a] = e, r.I(a, t)
                  }
                };
              r.d(t, {
                get: () => o,
                init: () => d
              })
            },
            61024: e => {
              "use strict";
              e.exports = r
            },
            49787: e => {
              "use strict";
              e.exports = a
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
          var r = h[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return p[e].call(r.exports, r, r.exports, m), r.loaded = !0, r.exports
        }
        return m.m = p, m.c = h, m.y = t, m.amdO = {}, m.n = e => {
          var t = e && e.__esModule ? () => e.default : () => e;
          return m.d(t, {
            a: t
          }), t
        }, s = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, m.t = function(t, r) {
          if (1 & r && (t = this(t)), 8 & r) return t;
          if ("object" == typeof t && t) {
            if (4 & r && t.__esModule) return t;
            if (16 & r && "function" == typeof t.then) return t
          }
          var a = Object.create(null);
          m.r(a);
          var o = {};
          e = e || [null, s({}), s([]), s(s)];
          for (var d = 2 & r && t;
            "object" == typeof d && !~e.indexOf(d); d = s(d)) Object.getOwnPropertyNames(d).forEach((e => o[e] = () => t[e]));
          return o.default = () => t, m.d(a, o), a
        }, m.d = (e, t) => {
          for (var r in t) m.o(t, r) && !m.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: t[r]
          })
        }, m.f = {}, m.e = e => Promise.all(Object.keys(m.f).reduce(((t, r) => (m.f[r](e, t), t)), [])), m.u = e => "js/" + {
          199: "6130d920b46d76b73e09b4dd2c847197",
          207: "4c6f54af0546121331db01f1db335f8d",
          285: "80a8e416b3aa0070ab98a643172eef39",
          353: "7f9377d46de33196050f3d0873dc58ec",
          381: "ff99bae65a9f689c20e3117e9825f892",
          732: "61394d05cf669f2ef410f86dbedba41d",
          825: "16ab20cedfc4faedbb3c31869f9bf04d",
          881: "4a5fa9f1c490117b6a0d75648384d6a3",
          1156: "cc922efc646be03a6e96db0c8dc79076",
          1189: "eb835eb54cec7b46a6617a634c7fc824",
          1223: "2538c51728b4b2a5efc9d39084e3cd47",
          1225: "ef23e9fe4c1f8238f206c0eeddec2767",
          1331: "cf2e09fde57ee6f7dbba400e06918f15",
          1403: "ddb9799907f7446101f8ded56fdf5523",
          1469: "9ae5b4ad29988017cf35c38542cc26e7",
          1622: "49c002047fa9193228b17fcbaddcea93",
          1879: "fd6db654d72fc6bdacfc5fe94abe7b4c",
          2495: "55fffc27932c93f909146d4bd46a6617",
          2553: "ac7b7ef9774b3f1ffc2bbcd1b1dc228f",
          2808: "55c68b06873ef71d625f9152b8da943d",
          2939: "ed1c11fd8b0f6a34db0bc249481a641b",
          2956: "86f7eacdbb6633ae3596113115c48777",
          3380: "3031acf6b49615ce5a9b73660075be77",
          3431: "23876c1e8cb56d35ca196ae6d2511bf9",
          3464: "cf62a608e2e98d3770cdc3161a2d0de5",
          3524: "7b4ff605171d20bc4fe8d2ed0f3d321c",
          3712: "57857af4bd7e5a666552b4956dec45fe",
          4105: "6a4a085d34beb22b6f864720e30ebbc8",
          4143: "bfdd8f74c522a15bb091cf7298439c6d",
          4216: "be6f38c176e8aa3f9009ac19835ff4ad",
          4303: "23607032023f032c0588d29982555558",
          4451: "545ed1bc62597dea1740e1f0c3c7b44a",
          4876: "8bdcb9ace6547be1d26fb409d4553967",
          4992: "9c6c0e4aaaf0ee8a6ba5a364715ae1c0",
          5238: "9b0ce5fb80d20dd20db269db3e94e319",
          5283: "a5aced2597c3a4b44d706b2410664711",
          5342: "789b7d2b62196b2b2d6ea19ad02aa6bd",
          5800: "c3a1e400c01554352789f44714ea962c",
          6008: "9b8aed37c21b373532021c90153b8ae6",
          6524: "7eaa9c62fd6ae2c7ed69a9287e2c8c02",
          6632: "07b8f92dc29accbe15120e345f5c0a01",
          6758: "2b7efe8a86506ced3d27adab157fdf78",
          6808: "69c93cb46c20d6dd5982940bca89f4f8",
          6878: "26dfeeec006c122d292c8b5ec95fb30e",
          6996: "e33d0745898219c45450c585a783721e",
          7123: "727eb9e2592707102d228306177d05f2",
          7185: "c2666a9149566bae8996633b276aa7ad",
          7187: "fe5e9f9051296a79b22c326c22fe372d",
          7207: "da957446ae2156d9c488a2801a17472c",
          7533: "55f79711ffd41d1810d4fb5ac529a941",
          7601: "1e31ecf9935146a29b69507c5df7d4cf",
          7781: "b384bb14cff1af877d94d62fc1a2628e",
          7989: "83150e6b5b7c04216439ee4d9efc30fa",
          8066: "39d1b5b4966fd37ae33aba56e403937e",
          8089: "8bab15068b5f8709c6793d02556eb838",
          8290: "8c3cafcfd6e9c2bf8b59f8bcfb8fd893",
          8314: "12041e3b8e3841a6c59a263e1f0e3686",
          8407: "89d369fbace1d513bd0b21d0d3f3e07b",
          9269: "bac9f3a2b0885afd90d788938ee30dce",
          9415: "612fec2d7dcc713c4bd6f47f07bc9cea",
          9429: "1e62b509a2fe624bc6eb3fd47184b8b4",
          9435: "f4b3bea8eba9dc0d430392e9b339be48",
          9493: "d954671b5fb8a740a9ea8c408e52bb6b",
          9756: "fb1266debf0f7fa2888b01e53cc9aa3e",
          9853: "7db6f6b0e4484b609c1210b189b9a1eb"
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
        }(), m.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), i = {}, l = "@rockstargames/modules-core-newswire-article:", m.l = (e, t, r, a) => {
          if (i[e]) i[e].push(t);
          else {
            var o, d;
            if (void 0 !== r)
              for (var c = document.getElementsByTagName("script"), n = 0; n < c.length; n++) {
                var f = c[n];
                if (f.getAttribute("src") == e || f.getAttribute("data-webpack") == l + r) {
                  o = f;
                  break
                }
              }
            o || (d = !0, (o = document.createElement("script")).charset = "utf-8", o.timeout = 120, m.nc && o.setAttribute("nonce", m.nc), o.setAttribute("data-webpack", l + r), o.src = e), i[e] = [t];
            var s = (t, r) => {
                o.onerror = o.onload = null, clearTimeout(u);
                var a = i[e];
                if (delete i[e], o.parentNode && o.parentNode.removeChild(o), a && a.forEach((e => e(r))), t) return t(r)
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
            var r = m.R;
            r || (r = []);
            var a = b[e];
            if (!(r.indexOf(a) >= 0)) {
              if (r.push(a), a.p) return t.push(a.p);
              var o = t => {
                  t || (t = new Error("Container missing")), "string" == typeof t.message && (t.message += '\nwhile loading "' + a[1] + '" from ' + a[2]), m.m[e] = () => {
                    throw t
                  }, a.p = 0
                },
                d = (e, r, d, c, n, f) => {
                  try {
                    var s = e(r, d);
                    if (!s || !s.then) return n(s, c, f);
                    var i = s.then((e => n(e, c)), o);
                    if (!f) return i;
                    t.push(a.p = i)
                  } catch (e) {
                    o(e)
                  }
                },
                c = (e, t, o) => d(t.get, a[1], r, 0, n, o),
                n = t => {
                  a.p = 1, m.m[e] = e => {
                    e.exports = t()
                  }
                };
              d(m, a[2], 0, 0, ((e, t, r) => e ? d(m.I, a[0], 0, e, c, r) : o()), 1)
            }
          }))
        }, (() => {
          m.S = {};
          var e = {},
            t = {};
          m.I = (r, a) => {
            a || (a = []);
            var o = t[r];
            if (o || (o = t[r] = {}), !(a.indexOf(o) >= 0)) {
              if (a.push(o), e[r]) return e[r];
              m.o(m.S, r) || (m.S[r] = {});
              var d = m.S[r],
                c = "@rockstargames/modules-core-newswire-article",
                n = (e, t, r, a) => {
                  var o = d[e] = d[e] || {},
                    n = o[t];
                  (!n || !n.loaded && (!a != !n.eager ? a : c > n.from)) && (o[t] = {
                    get: r,
                    from: c,
                    eager: !!a
                  })
                },
                f = e => {
                  var t = e => {
                    return t = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(t));
                    var t
                  };
                  try {
                    var o = m(e);
                    if (!o) return;
                    var d = e => e && e.init && e.init(m.S[r], a);
                    if (o.then) return s.push(o.then(d, t));
                    var c = d(o);
                    if (c && c.then) return s.push(c.catch(t))
                  } catch (e) {
                    t(e)
                  }
                },
                s = [];
              return "default" === r && (n("@foundry/react", "1.19.0", (() => Promise.all([m.e(1223), m.e(1225), m.e(6878), m.e(4992), m.e(1403), m.e(9493), m.e(6632)]).then((() => () => m(14992))))), n("@rockstargames/locale-tools", "1.0.0", (() => Promise.all([m.e(1223), m.e(8066), m.e(1403), m.e(4143)]).then((() => () => m(24143))))), n("@rockstargames/modules-core-carousel", "1.2.4", (() => Promise.all([m.e(3524), m.e(9269), m.e(1403), m.e(1156), m.e(8089), m.e(732), m.e(3712)]).then((() => () => m(51331))))), n("@rockstargames/modules-core-engagement", "0.0.2", (() => Promise.all([m.e(3524), m.e(9269), m.e(4303), m.e(1469), m.e(1403), m.e(1156), m.e(285), m.e(207), m.e(8407), m.e(9756), m.e(5342)]).then((() => () => m(87027))))), n("@rockstargames/modules-core-group-of-items", "1.2.0", (() => Promise.all([m.e(3524), m.e(1403), m.e(1156), m.e(8089), m.e(7185), m.e(1879), m.e(207), m.e(7989), m.e(2495)]).then((() => () => m(42495))))), n("@rockstargames/modules-sc-ugc-spotlight", "1.1.3", (() => m.e(381).then((() => () => m(20381))))), n("dompurify", "2.4.7", (() => m.e(2956).then((() => () => m(72956))))), n("lodash", "4.17.21", (() => m.e(9429).then((() => () => m(79429))))), n("react-dom", "18.2.0", (() => Promise.all([m.e(5283), m.e(1403)]).then((() => () => m(15283))))), n("react-dom", "18.2.0", (() => Promise.all([m.e(7533), m.e(1403)]).then((() => () => m(47533))))), n("react-jsx-parser", "1.29.0", (() => Promise.all([m.e(1403), m.e(5238)]).then((() => () => m(85238))))), n("react-router-dom", "6.17.0", (() => Promise.all([m.e(4105), m.e(6008), m.e(1403)]).then((() => () => m(76008))))), n("react-router-dom", "6.17.0", (() => Promise.all([m.e(4105), m.e(4451), m.e(1403)]).then((() => () => m(4451))))), n("react", "18.2.0", (() => m.e(3380).then((() => () => m(23380))))), n("text-balancer", "1.0.5", (() => m.e(199).then((() => () => m(20199))))), f(99466), f(92969), f(25136), f(60404), f(61024), f(29441), f(49787)), s.length ? e[r] = Promise.all(s).then((() => e[r] = 1)) : e[r] = 1
            }
          }
        })(), (() => {
          var e;
          m.g.importScripts && (e = m.g.location + "");
          var t = m.g.document;
          if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
            var r = t.getElementsByTagName("script");
            if (r.length)
              for (var a = r.length - 1; a > -1 && (!e || !/^http(s?):/.test(e));) e = r[a--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), m.p = e
        })(), (() => {
          var e = e => {
              var t = e => e.split(".").map((e => +e == e ? +e : e)),
                r = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
                a = r[1] ? t(r[1]) : [];
              return r[2] && (a.length++, a.push.apply(a, t(r[2]))), r[3] && (a.push([]), a.push.apply(a, t(r[3]))), a
            },
            t = (r, a) => {
              if (0 in r) {
                a = e(a);
                var o = r[0],
                  d = o < 0;
                d && (o = -o - 1);
                for (var c = 0, n = 1, f = !0;; n++, c++) {
                  var s, i, l = n < r.length ? (typeof r[n])[0] : "";
                  if (c >= a.length || "o" == (i = (typeof(s = a[c]))[0])) return !f || ("u" == l ? n > o && !d : "" == l != d);
                  if ("u" == i) {
                    if (!f || "u" != l) return !1
                  } else if (f)
                    if (l == i)
                      if (n <= o) {
                        if (s != r[n]) return !1
                      } else {
                        if (d ? s > r[n] : s < r[n]) return !1;
                        s != r[n] && (f = !1)
                      }
                  else if ("s" != l && "n" != l) {
                    if (d || n <= o) return !1;
                    f = !1, n--
                  } else {
                    if (n <= o || i < l != d) return !1;
                    f = !1
                  } else "s" != l && "n" != l && (f = !1, n--)
                }
              }
              var u = [],
                b = u.pop.bind(u);
              for (c = 1; c < r.length; c++) {
                var p = r[c];
                u.push(1 == p ? b() | b() : 2 == p ? b() & b() : p ? t(p, a) : !b())
              }
              return !!b()
            },
            r = (r, a, o) => {
              var d = r[a];
              return (a = Object.keys(d).reduce(((r, a) => !t(o, a) || r && !((t, r) => {
                t = e(t), r = e(r);
                for (var a = 0;;) {
                  if (a >= t.length) return a < r.length && "u" != (typeof r[a])[0];
                  var o = t[a],
                    d = (typeof o)[0];
                  if (a >= r.length) return "u" == d;
                  var c = r[a],
                    n = (typeof c)[0];
                  if (d != n) return "o" == d && "n" == n || "s" == n || "u" == d;
                  if ("o" != d && "u" != d && o != c) return o < c;
                  a++
                }
              })(r, a) ? r : a), 0)) && d[a]
            },
            a = (e => function(t, r, a, o) {
              var d = m.I(t);
              return d && d.then ? d.then(e.bind(e, t, m.S[t], r, a, o)) : e(t, m.S[t], r, a, o)
            })(((e, t, a, o, d) => {
              var c = t && m.o(t, a) && r(t, a, o);
              return c ? (e => (e.loaded = 1, e.get()))(c) : d()
            })),
            o = {},
            d = {
              71403: () => a("default", "react", [1, 18, 2, 0], (() => m.e(3380).then((() => () => m(23380))))),
              61631: () => a("default", "dompurify", [1, 2, 4, 1], (() => m.e(2956).then((() => () => m(72956))))),
              89779: () => a("default", "react-router-dom", [1, 6, 11, 2], (() => Promise.all([m.e(4105), m.e(6008)]).then((() => () => m(76008))))),
              96717: () => a("default", "@rockstargames/locale-tools", [1, "workspace:*"], (() => Promise.all([m.e(1223), m.e(8066), m.e(6524)]).then((() => () => m(24143))))),
              79493: () => a("default", "react-dom", [1, 18, 2, 0], (() => m.e(7533).then((() => () => m(47533))))),
              5217: () => a("default", "@rockstargames/modules-core-group-of-items", [1, "workspace:*"], (() => m.e(4876).then((() => () => m(42495))))),
              32503: () => a("default", "@rockstargames/modules-core-engagement", [1, "workspace:*"], (() => Promise.all([m.e(1469), m.e(5342)]).then((() => () => m(87027))))),
              37920: () => a("default", "text-balancer", [1, 1, 0, 5], (() => m.e(199).then((() => () => m(20199))))),
              54252: () => a("default", "lodash", [1, 4, 17, 21], (() => m.e(9429).then((() => () => m(79429))))),
              99096: () => a("default", "@foundry/react", [1, 1, 14, 2], (() => Promise.all([m.e(6878), m.e(4992)]).then((() => () => m(14992))))),
              26527: () => a("default", "@rockstargames/modules-core-carousel", [1, "workspace:*"], (() => Promise.all([m.e(732), m.e(1331)]).then((() => () => m(51331))))),
              66713: () => a("default", "@rockstargames/modules-sc-ugc-spotlight", [1, "workspace:*"], (() => m.e(381).then((() => () => m(20381))))),
              85865: () => a("default", "react-jsx-parser", [1, "workspace:*"], (() => m.e(5238).then((() => () => m(85238))))),
              57172: () => a("default", "react-router-dom", [1, 6, 11, 2], (() => Promise.all([m.e(4105), m.e(4451)]).then((() => () => m(4451)))))
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
              if (m.o(o, e)) return t.push(o[e]);
              if (!n[e]) {
                var r = t => {
                  o[e] = 0, m.m[e] = r => {
                    delete m.c[e], r.exports = t()
                  }
                };
                n[e] = !0;
                var a = t => {
                  delete o[e], m.m[e] = r => {
                    throw delete m.c[e], t
                  }
                };
                try {
                  var c = d[e]();
                  c.then ? t.push(o[e] = c.then(r).catch(a)) : r(c)
                } catch (e) {
                  a(e)
                }
              }
            }))
          }
        })(), (() => {
          if ("undefined" != typeof document) {
            var e = {
              6947: 0
            };
            m.f.miniCss = (t, r) => {
              e[t] ? r.push(e[t]) : 0 !== e[t] && {
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
              } [t] && r.push(e[t] = (e => new Promise(((t, r) => {
                var a = m.miniCssF(e),
                  o = m.p + a;
                if (((e, t) => {
                    for (var r = document.getElementsByTagName("link"), a = 0; a < r.length; a++) {
                      var o = (c = r[a]).getAttribute("data-href") || c.getAttribute("href");
                      if ("stylesheet" === c.rel && (o === e || o === t)) return c
                    }
                    var d = document.getElementsByTagName("style");
                    for (a = 0; a < d.length; a++) {
                      var c;
                      if ((o = (c = d[a]).getAttribute("data-href")) === e || o === t) return c
                    }
                  })(a, o)) return t();
                ((e, t, r, a, o) => {
                  var d = document.createElement("link");
                  d.rel = "stylesheet", d.type = "text/css", d.onerror = d.onload = r => {
                    if (d.onerror = d.onload = null, "load" === r.type) a();
                    else {
                      var c = r && ("load" === r.type ? "missing" : r.type),
                        n = r && r.target && r.target.href || t,
                        f = new Error("Loading CSS chunk " + e + " failed.\n(" + n + ")");
                      f.code = "CSS_CHUNK_LOAD_FAILED", f.type = c, f.request = n, d.parentNode && d.parentNode.removeChild(d), o(f)
                    }
                  }, d.href = t, document.head.appendChild(d)
                })(e, o, 0, t, r)
              })))(t).then((() => {
                e[t] = 0
              }), (r => {
                throw delete e[t], r
              })))
            }
          }
        })(), (() => {
          var e = {
            6947: 0
          };
          m.f.j = (t, r) => {
            var a = m.o(e, t) ? e[t] : void 0;
            if (0 !== a)
              if (a) r.push(a[2]);
              else if (/^(1(156|403|879)|7(185|207|32|989)|94(15|93)|(2|84)07|8089)$/.test(t)) e[t] = 0;
            else {
              var o = new Promise(((r, o) => a = e[t] = [r, o]));
              r.push(a[2] = o);
              var d = m.p + m.u(t),
                c = new Error;
              m.l(d, (r => {
                if (m.o(e, t) && (0 !== (a = e[t]) && (e[t] = void 0), a)) {
                  var o = r && ("load" === r.type ? "missing" : r.type),
                    d = r && r.target && r.target.src;
                  c.message = "Loading chunk " + t + " failed.\n(" + o + ": " + d + ")", c.name = "ChunkLoadError", c.type = o, c.request = d, a[1](c)
                }
              }), "chunk-" + t, t)
            }
          };
          var t = (t, r) => {
              var a, o, d = r[0],
                c = r[1],
                n = r[2],
                f = 0;
              if (d.some((t => 0 !== e[t]))) {
                for (a in c) m.o(c, a) && (m.m[a] = c[a]);
                n && n(m)
              }
              for (t && t(r); f < d.length; f++) o = d[f], m.o(e, o) && e[o] && e[o][0](), e[o] = 0
            },
            r = self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || [];
          r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
        })(), m.nc = void 0, m(32160), m(68623)
      })())
    }
  }
}));