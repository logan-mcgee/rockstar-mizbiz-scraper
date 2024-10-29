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
    f = {},
    o = {},
    d = {},
    n = {},
    c = {};
  return Object.defineProperty(a, "__esModule", {
    value: !0
  }), Object.defineProperty(r, "__esModule", {
    value: !0
  }), Object.defineProperty(f, "__esModule", {
    value: !0
  }), Object.defineProperty(o, "__esModule", {
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
        f[t] = e[t]
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
                for (var r = "/" === a.pathname[0] ? a.pathname : "/" + a.pathname, f = 0, o = r.length; f !== t && o >= 0;) "/" === r[--o] && f++;
                if (f !== t) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + t + ") is greater than the number of directories (" + f + ") in the URL path " + e);
                var d = r.slice(0, o + 1);
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
                f = (e, t) => (a.R = t, t = a.o(r, e) ? r[e]() : Promise.resolve().then((() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                })), a.R = void 0, t),
                o = (e, t) => {
                  if (a.S) {
                    var r = "default",
                      f = a.S[r];
                    if (f && f !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return a.S[r] = e, a.I(r, t)
                  }
                };
              a.d(t, {
                get: () => f,
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
              e.exports = f
            },
            60404: e => {
              "use strict";
              e.exports = o
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
          var f = {};
          e = e || [null, s({}), s([]), s(s)];
          for (var o = 2 & a && t;
            "object" == typeof o && !~e.indexOf(o); o = s(o)) Object.getOwnPropertyNames(o).forEach((e => f[e] = () => t[e]));
          return f.default = () => t, m.d(r, f), r
        }, m.d = (e, t) => {
          for (var a in t) m.o(t, a) && !m.o(e, a) && Object.defineProperty(e, a, {
            enumerable: !0,
            get: t[a]
          })
        }, m.f = {}, m.e = e => Promise.all(Object.keys(m.f).reduce(((t, a) => (m.f[a](e, t), t)), [])), m.u = e => "js/" + {
          199: "e0f036b13d8634d6a31fc3a8740831af",
          207: "4c6f54af0546121331db01f1db335f8d",
          285: "cf112f4cfccf83e655381ad18ee9e766",
          353: "f9428f66055a2a9c87de5f79d1a918be",
          381: "222dfd1b745ce7716d99536c112d942e",
          732: "61394d05cf669f2ef410f86dbedba41d",
          825: "408a1f4dcb01a7e78d70b91233f3df9e",
          1156: "cc922efc646be03a6e96db0c8dc79076",
          1189: "167cd737c6f9288d97170c4684e94642",
          1223: "e06b5218c1d3ba6733d2497825ae0fc0",
          1225: "f123a60fe88f3346f79ebaf78734f88a",
          1331: "9ab79058daca62c0f3f1b6bd1b659d4b",
          1360: "117aec902734ba8d715f1e219828537c",
          1403: "ddb9799907f7446101f8ded56fdf5523",
          1469: "5eaadebadfbd2e3174b2e1fa2bf68c24",
          1879: "fd6db654d72fc6bdacfc5fe94abe7b4c",
          2553: "a03ac8fb45720fd8205f8768eb04c30a",
          2723: "03161493aac1c344ec84b0497b507d11",
          2956: "ace67fbc8cabf8091088c178a92b157c",
          3380: "ce8e73469ff5dc56d3b4642013ec5bb5",
          3524: "022dd358d13a6c39c0720044e5ab3f7b",
          3712: "7acbb7d2c7e15d9bf0a85ee5fc1217da",
          4105: "57485e8739f17e4ae824dfe9451cc41f",
          4143: "55da5c61958eb7d1c487a2074e452274",
          4196: "0482ce67350674a5d8585cfab8605880",
          4216: "3b6cc9366bebc0dbe0b0140a149139e7",
          4303: "f5bdd46d8af5a990605b9d81d0838b47",
          4451: "684c96943209c4d905231a1a39119878",
          5133: "46c4119f9a6bb3e8967d5870ea3e2b9f",
          5238: "5b7d7e6282ad26e3410611fbcd125dd9",
          5283: "d81e5d686e7b04797f59ac28b25924af",
          5800: "002dd44db9bbd032558fecee2a95a973",
          6008: "063f775048928a85f245f7f271c801fb",
          6022: "748a43a339d065b588734b6590ba0d8c",
          6119: "02806394100033bcbdb0bec674fae20a",
          6348: "fe308c9db115c41ef45fc56057600144",
          6524: "01544571c21b69ac579b854978fea170",
          6632: "0854612b1c64a2ade41bd4504f6bec35",
          6757: "9e11e04f646376189c746a8f02e525b7",
          6758: "6e77304dfb4bc807a409b066d35151c2",
          6878: "ed1628a0ce9bd9829e87da52133898df",
          7185: "c2666a9149566bae8996633b276aa7ad",
          7207: "da957446ae2156d9c488a2801a17472c",
          7322: "e3c2756d1e2de9125a882eef266f8316",
          7426: "09c431e23c11173af3d61f35b5cc8dbc",
          7533: "b9b2c770f2dec4596f1559b42c75d87b",
          7601: "a2bd65f9445308d57c0974d03983ab30",
          7764: "a4895e7238d084d7b296d8a47a513fe6",
          7989: "83150e6b5b7c04216439ee4d9efc30fa",
          8066: "5abf89aef4a068518c4f90a04dfbdb3f",
          8089: "8bab15068b5f8709c6793d02556eb838",
          8158: "7bc8866f9810dac7848b3099e0faa072",
          8407: "89d369fbace1d513bd0b21d0d3f3e07b",
          8425: "d84b637bdbc0e44896db2574f698f294",
          8500: "4cc7445923a335eabcacfdc17cb435ef",
          9100: "3b9ef7e147ab001c444e5edfb53e3625",
          9113: "daea389b7bd9beb3078cab8b2de5b2bc",
          9191: "e46f4ac52ead43999752503b051f9668",
          9269: "adcc0f8635e9ce592126ebf4fe24e9e3",
          9415: "612fec2d7dcc713c4bd6f47f07bc9cea",
          9429: "7744063dcd94178505472484a7a1866f",
          9435: "0848499d26a6aa39330087798d7eb370",
          9493: "d954671b5fb8a740a9ea8c408e52bb6b",
          9663: "1908202af8d4e8b2eee050ef67202ca4",
          9756: "696fcf60d00d8dcd871859ae5ffcb2fd"
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
            var f, o;
            if (void 0 !== a)
              for (var d = document.getElementsByTagName("script"), n = 0; n < d.length; n++) {
                var c = d[n];
                if (c.getAttribute("src") == e || c.getAttribute("data-webpack") == l + a) {
                  f = c;
                  break
                }
              }
            f || (o = !0, (f = document.createElement("script")).charset = "utf-8", f.timeout = 120, m.nc && f.setAttribute("nonce", m.nc), f.setAttribute("data-webpack", l + a), f.src = e), i[e] = [t];
            var s = (t, a) => {
                f.onerror = f.onload = null, clearTimeout(u);
                var r = i[e];
                if (delete i[e], f.parentNode && f.parentNode.removeChild(f), r && r.forEach((e => e(a))), t) return t(a)
              },
              u = setTimeout(s.bind(null, void 0, {
                type: "timeout",
                target: f
              }), 12e4);
            f.onerror = s.bind(null, f.onerror), f.onload = s.bind(null, f.onload), o && document.head.appendChild(f)
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
              var f = t => {
                  t || (t = new Error("Container missing")), "string" == typeof t.message && (t.message += '\nwhile loading "' + r[1] + '" from ' + r[2]), m.m[e] = () => {
                    throw t
                  }, r.p = 0
                },
                o = (e, a, o, d, n, c) => {
                  try {
                    var s = e(a, o);
                    if (!s || !s.then) return n(s, d, c);
                    var i = s.then((e => n(e, d)), f);
                    if (!c) return i;
                    t.push(r.p = i)
                  } catch (e) {
                    f(e)
                  }
                },
                d = (e, t, f) => o(t.get, r[1], a, 0, n, f),
                n = t => {
                  r.p = 1, m.m[e] = e => {
                    e.exports = t()
                  }
                };
              o(m, r[2], 0, 0, ((e, t, a) => e ? o(m.I, r[0], 0, e, d, a) : f()), 1)
            }
          }))
        }, (() => {
          m.S = {};
          var e = {},
            t = {};
          m.I = (a, r) => {
            r || (r = []);
            var f = t[a];
            if (f || (f = t[a] = {}), !(r.indexOf(f) >= 0)) {
              if (r.push(f), e[a]) return e[a];
              m.o(m.S, a) || (m.S[a] = {});
              var o = m.S[a],
                d = "@rockstargames/modules-core-newswire-article",
                n = (e, t, a, r) => {
                  var f = o[e] = o[e] || {},
                    n = f[t];
                  (!n || !n.loaded && (!r != !n.eager ? r : d > n.from)) && (f[t] = {
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
                    var f = m(e);
                    if (!f) return;
                    var o = e => e && e.init && e.init(m.S[a], r);
                    if (f.then) return s.push(f.then(o, t));
                    var d = o(f);
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
                var f = a[0],
                  o = f < 0;
                o && (f = -f - 1);
                for (var d = 0, n = 1, c = !0;; n++, d++) {
                  var s, i, l = n < a.length ? (typeof a[n])[0] : "";
                  if (d >= r.length || "o" == (i = (typeof(s = r[d]))[0])) return !c || ("u" == l ? n > f && !o : "" == l != o);
                  if ("u" == i) {
                    if (!c || "u" != l) return !1
                  } else if (c)
                    if (l == i)
                      if (n <= f) {
                        if (s != a[n]) return !1
                      } else {
                        if (o ? s > a[n] : s < a[n]) return !1;
                        s != a[n] && (c = !1)
                      }
                  else if ("s" != l && "n" != l) {
                    if (o || n <= f) return !1;
                    c = !1, n--
                  } else {
                    if (n <= f || i < l != o) return !1;
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
            a = (a, r, f) => {
              var o = a[r];
              return (r = Object.keys(o).reduce(((a, r) => !t(f, r) || a && !((t, a) => {
                t = e(t), a = e(a);
                for (var r = 0;;) {
                  if (r >= t.length) return r < a.length && "u" != (typeof a[r])[0];
                  var f = t[r],
                    o = (typeof f)[0];
                  if (r >= a.length) return "u" == o;
                  var d = a[r],
                    n = (typeof d)[0];
                  if (o != n) return "o" == o && "n" == n || "s" == n || "u" == o;
                  if ("o" != o && "u" != o && f != d) return f < d;
                  r++
                }
              })(a, r) ? a : r), 0)) && o[r]
            },
            r = (e => function(t, a, r, f) {
              var o = m.I(t);
              return o && o.then ? o.then(e.bind(e, t, m.S[t], a, r, f)) : e(t, m.S[t], a, r, f)
            })(((e, t, r, f, o) => {
              var d = t && m.o(t, r) && a(t, r, f);
              return d ? (e => (e.loaded = 1, e.get()))(d) : o()
            })),
            f = {},
            o = {
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
              if (m.o(f, e)) return t.push(f[e]);
              if (!n[e]) {
                var a = t => {
                  f[e] = 0, m.m[e] = a => {
                    delete m.c[e], a.exports = t()
                  }
                };
                n[e] = !0;
                var r = t => {
                  delete f[e], m.m[e] = a => {
                    throw delete m.c[e], t
                  }
                };
                try {
                  var d = o[e]();
                  d.then ? t.push(f[e] = d.then(a).catch(r)) : a(d)
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
                  f = m.p + r;
                if (((e, t) => {
                    for (var a = document.getElementsByTagName("link"), r = 0; r < a.length; r++) {
                      var f = (d = a[r]).getAttribute("data-href") || d.getAttribute("href");
                      if ("stylesheet" === d.rel && (f === e || f === t)) return d
                    }
                    var o = document.getElementsByTagName("style");
                    for (r = 0; r < o.length; r++) {
                      var d;
                      if ((f = (d = o[r]).getAttribute("data-href")) === e || f === t) return d
                    }
                  })(r, f)) return t();
                ((e, t, a, r, f) => {
                  var o = document.createElement("link");
                  o.rel = "stylesheet", o.type = "text/css", o.onerror = o.onload = a => {
                    if (o.onerror = o.onload = null, "load" === a.type) r();
                    else {
                      var d = a && ("load" === a.type ? "missing" : a.type),
                        n = a && a.target && a.target.href || t,
                        c = new Error("Loading CSS chunk " + e + " failed.\n(" + n + ")");
                      c.code = "CSS_CHUNK_LOAD_FAILED", c.type = d, c.request = n, o.parentNode && o.parentNode.removeChild(o), f(c)
                    }
                  }, o.href = t, document.head.appendChild(o)
                })(e, f, 0, t, a)
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
              var f = new Promise(((a, f) => r = e[t] = [a, f]));
              a.push(r[2] = f);
              var o = m.p + m.u(t),
                d = new Error;
              m.l(o, (a => {
                if (m.o(e, t) && (0 !== (r = e[t]) && (e[t] = void 0), r)) {
                  var f = a && ("load" === a.type ? "missing" : a.type),
                    o = a && a.target && a.target.src;
                  d.message = "Loading chunk " + t + " failed.\n(" + f + ": " + o + ")", d.name = "ChunkLoadError", d.type = f, d.request = o, r[1](d)
                }
              }), "chunk-" + t, t)
            }
          };
          var t = (t, a) => {
              var r, f, o = a[0],
                d = a[1],
                n = a[2],
                c = 0;
              if (o.some((t => 0 !== e[t]))) {
                for (r in d) m.o(d, r) && (m.m[r] = d[r]);
                n && n(m)
              }
              for (t && t(a); c < o.length; c++) f = o[c], m.o(e, f) && e[f] && e[f][0](), e[f] = 0
            },
            a = self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || [];
          a.forEach(t.bind(null, 0)), a.push = t.bind(null, a.push.bind(a))
        })(), m.nc = void 0, m(32160), m(68623)
      })())
    }
  }
}));