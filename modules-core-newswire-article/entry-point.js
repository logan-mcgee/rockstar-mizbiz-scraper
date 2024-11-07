! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "4713e280-995e-48d0-b6e0-bf7d58e867a3", e._sentryDebugIdIdentifier = "sentry-dbid-4713e280-995e-48d0-b6e0-bf7d58e867a3")
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
    f = {},
    n = {},
    c = {};
  return Object.defineProperty(a, "__esModule", {
    value: !0
  }), Object.defineProperty(r, "__esModule", {
    value: !0
  }), Object.defineProperty(o, "__esModule", {
    value: !0
  }), Object.defineProperty(d, "__esModule", {
    value: !0
  }), Object.defineProperty(f, "__esModule", {
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
                for (var r = "/" === a.pathname[0] ? a.pathname : "/" + a.pathname, o = 0, d = r.length; o !== t && d >= 0;) "/" === r[--d] && o++;
                if (o !== t) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + t + ") is greater than the number of directories (" + o + ") in the URL path " + e);
                var f = r.slice(0, d + 1);
                return a.protocol + "//" + a.host + f
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
              e.exports = f
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
          for (var d = 2 & a && t;
            "object" == typeof d && !~e.indexOf(d); d = s(d)) Object.getOwnPropertyNames(d).forEach((e => o[e] = () => t[e]));
          return o.default = () => t, m.d(r, o), r
        }, m.d = (e, t) => {
          for (var a in t) m.o(t, a) && !m.o(e, a) && Object.defineProperty(e, a, {
            enumerable: !0,
            get: t[a]
          })
        }, m.f = {}, m.e = e => Promise.all(Object.keys(m.f).reduce(((t, a) => (m.f[a](e, t), t)), [])), m.u = e => "js/" + {
          199: "4f26d03993db537e83e6ac0f4a993ab9",
          207: "4c6f54af0546121331db01f1db335f8d",
          285: "f304e1815054bfc761622a10ab692d27",
          353: "c69bf50bfe1c51c72361b9e2f397368b",
          381: "b87f23fcebf9231ece9584ac5b40aa55",
          732: "61394d05cf669f2ef410f86dbedba41d",
          825: "5f28948e7773c38b1fd14d0f69f7b514",
          1156: "cc922efc646be03a6e96db0c8dc79076",
          1189: "088b6db54fa622a0ab8566fc188fc06c",
          1223: "d7324adc6b1a8f1763ea0eaf0ce8f2a7",
          1225: "e4d5270cd895a0d0e225334983ca63e6",
          1331: "fcc77bf603a81114a55d783e34c67dc3",
          1360: "435a5223e9b728f10fa4d03ee700502b",
          1403: "ddb9799907f7446101f8ded56fdf5523",
          1469: "a7c77a5f0a1ae54ff9f5c06f239ea283",
          1879: "fd6db654d72fc6bdacfc5fe94abe7b4c",
          2553: "226f61efb3f5a8f27c83c83c015e359c",
          2723: "5a020abb333a0c8d69b95dfa17ecb05a",
          2956: "29d409c091e8ebe2b8c149d778761940",
          3380: "b07d15a92a8ec86be71c0c2a8291be23",
          3524: "7b538e307750dd7c22f3e84ae9477c12",
          3712: "a99fe0587a83947b8d11d130924fba0e",
          4105: "c96fe7b5cece61a9985ccc4b1e57d8f5",
          4143: "305e8fef049060d55f4805fb541c63db",
          4196: "adcc5f1c58866bd46f6704fc47e3f85a",
          4216: "f2f4dbea0b729e46b66a44e8e8ebef3b",
          4303: "f2411546dc4964b7e54e90b1d45fe668",
          4451: "a3a6d23610e790114b8a429599a78ded",
          5133: "244f1bd12aebe7e9dcd5edc073a8b017",
          5238: "25cd8e88ce286aec41da94256b3d9847",
          5283: "6d000bff2e5e4055998417de3ac42dd1",
          5800: "a3f930b523bd8e9acb4713637d39d03e",
          6008: "e4eed8d092b3c770dc77129999f05125",
          6022: "ee7da3ca54be30dff2102e2786848f99",
          6119: "f295673e355d351bbc5d05f178c9b585",
          6348: "d76cb7ef771897adc1102e5af123e1c8",
          6524: "e8a69ccef51a9058636be1a9a954cfba",
          6632: "d0630f0b43a26ea65610b0fde5027822",
          6757: "6ea0a2b941facd6d78ddcc02936b60ea",
          6758: "61a634351df31ff6e1cde7cd0c8c19c0",
          6878: "52e0d48a43f97a75bc7d62a5d120a5ff",
          7185: "c2666a9149566bae8996633b276aa7ad",
          7207: "da957446ae2156d9c488a2801a17472c",
          7322: "6e014b984e38e64b57df879a82ad6a9f",
          7426: "08f02413bd0ef68ab910143b537ed243",
          7533: "3d5415e1a33e093ecd60af0c96e7b4e3",
          7601: "ae23b21670c8fac97fdf716145dbc8dd",
          7764: "fdb349d3de60575d35726d5d3488f7ab",
          7989: "83150e6b5b7c04216439ee4d9efc30fa",
          8066: "2363398a32b92ec8bd17515732abfe83",
          8089: "8bab15068b5f8709c6793d02556eb838",
          8158: "83134c2096bc2b696742a2dcfd515a53",
          8407: "89d369fbace1d513bd0b21d0d3f3e07b",
          8425: "9e7435197cb5aabb2ba131c19605dd73",
          8500: "ca913ede90b46106197f2e96318d408e",
          9100: "46e3fade073120f1a9438119640aca99",
          9113: "585293410ef5d94da8ad37fe1523ffa5",
          9191: "567845dd54ba52c3588ba112fd783e40",
          9269: "34f56b91aaee0949d8412d6e00cbd632",
          9415: "612fec2d7dcc713c4bd6f47f07bc9cea",
          9429: "283ab70685881cde2bc8e3cad669caa3",
          9435: "040f4b3166696515dc2b6533ebdba049",
          9493: "d954671b5fb8a740a9ea8c408e52bb6b",
          9663: "d01b70c034668c64fd6d859a768ba3ea",
          9756: "be7258c116a16079869651fe03002a28"
        } [e] + ".js", m.miniCssF = e => "css/" + {
          353: "2437cf6a7a9dc144e5eb8c961218836a",
          732: "7804a8964f391fe5e1b3d2ce77453b1e",
          2553: "162bba8a2ff14a549bfd752b0d185e40",
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
            var o, d;
            if (void 0 !== a)
              for (var f = document.getElementsByTagName("script"), n = 0; n < f.length; n++) {
                var c = f[n];
                if (c.getAttribute("src") == e || c.getAttribute("data-webpack") == l + a) {
                  o = c;
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
                d = (e, a, d, f, n, c) => {
                  try {
                    var s = e(a, d);
                    if (!s || !s.then) return n(s, f, c);
                    var i = s.then((e => n(e, f)), o);
                    if (!c) return i;
                    t.push(r.p = i)
                  } catch (e) {
                    o(e)
                  }
                },
                f = (e, t, o) => d(t.get, r[1], a, 0, n, o),
                n = t => {
                  r.p = 1, m.m[e] = e => {
                    e.exports = t()
                  }
                };
              d(m, r[2], 0, 0, ((e, t, a) => e ? d(m.I, r[0], 0, e, f, a) : o()), 1)
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
                f = "@rockstargames/modules-core-newswire-article",
                n = (e, t, a, r) => {
                  var o = d[e] = d[e] || {},
                    n = o[t];
                  (!n || !n.loaded && (!r != !n.eager ? r : f > n.from)) && (o[t] = {
                    get: a,
                    from: f,
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
                    var d = e => e && e.init && e.init(m.S[a], r);
                    if (o.then) return s.push(o.then(d, t));
                    var f = d(o);
                    if (f && f.then) return s.push(f.catch(t))
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
                  d = o < 0;
                d && (o = -o - 1);
                for (var f = 0, n = 1, c = !0;; n++, f++) {
                  var s, i, l = n < a.length ? (typeof a[n])[0] : "";
                  if (f >= r.length || "o" == (i = (typeof(s = r[f]))[0])) return !c || ("u" == l ? n > o && !d : "" == l != d);
                  if ("u" == i) {
                    if (!c || "u" != l) return !1
                  } else if (c)
                    if (l == i)
                      if (n <= o) {
                        if (s != a[n]) return !1
                      } else {
                        if (d ? s > a[n] : s < a[n]) return !1;
                        s != a[n] && (c = !1)
                      }
                  else if ("s" != l && "n" != l) {
                    if (d || n <= o) return !1;
                    c = !1, n--
                  } else {
                    if (n <= o || i < l != d) return !1;
                    c = !1
                  } else "s" != l && "n" != l && (c = !1, n--)
                }
              }
              var u = [],
                b = u.pop.bind(u);
              for (f = 1; f < a.length; f++) {
                var p = a[f];
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
                  var f = a[r],
                    n = (typeof f)[0];
                  if (d != n) return "o" == d && "n" == n || "s" == n || "u" == d;
                  if ("o" != d && "u" != d && o != f) return o < f;
                  r++
                }
              })(a, r) ? a : r), 0)) && d[r]
            },
            r = (e => function(t, a, r, o) {
              var d = m.I(t);
              return d && d.then ? d.then(e.bind(e, t, m.S[t], a, r, o)) : e(t, m.S[t], a, r, o)
            })(((e, t, r, o, d) => {
              var f = t && m.o(t, r) && a(t, r, o);
              return f ? (e => (e.loaded = 1, e.get()))(f) : d()
            })),
            o = {},
            d = {
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
            f = {
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
            m.o(f, e) && f[e].forEach((e => {
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
                  var f = d[e]();
                  f.then ? t.push(o[e] = f.then(a).catch(r)) : a(f)
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
                      var o = (f = a[r]).getAttribute("data-href") || f.getAttribute("href");
                      if ("stylesheet" === f.rel && (o === e || o === t)) return f
                    }
                    var d = document.getElementsByTagName("style");
                    for (r = 0; r < d.length; r++) {
                      var f;
                      if ((o = (f = d[r]).getAttribute("data-href")) === e || o === t) return f
                    }
                  })(r, o)) return t();
                ((e, t, a, r, o) => {
                  var d = document.createElement("link");
                  d.rel = "stylesheet", d.type = "text/css", d.onerror = d.onload = a => {
                    if (d.onerror = d.onload = null, "load" === a.type) r();
                    else {
                      var f = a && ("load" === a.type ? "missing" : a.type),
                        n = a && a.target && a.target.href || t,
                        c = new Error("Loading CSS chunk " + e + " failed.\n(" + n + ")");
                      c.code = "CSS_CHUNK_LOAD_FAILED", c.type = f, c.request = n, d.parentNode && d.parentNode.removeChild(d), o(c)
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
                f = new Error;
              m.l(d, (a => {
                if (m.o(e, t) && (0 !== (r = e[t]) && (e[t] = void 0), r)) {
                  var o = a && ("load" === a.type ? "missing" : a.type),
                    d = a && a.target && a.target.src;
                  f.message = "Loading chunk " + t + " failed.\n(" + o + ": " + d + ")", f.name = "ChunkLoadError", f.type = o, f.request = d, r[1](f)
                }
              }), "chunk-" + t, t)
            }
          };
          var t = (t, a) => {
              var r, o, d = a[0],
                f = a[1],
                n = a[2],
                c = 0;
              if (d.some((t => 0 !== e[t]))) {
                for (r in f) m.o(f, r) && (m.m[r] = f[r]);
                n && n(m)
              }
              for (t && t(a); c < d.length; c++) o = d[c], m.o(e, o) && e[o] && e[o][0](), e[o] = 0
            },
            a = self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || [];
          a.forEach(t.bind(null, 0)), a.push = t.bind(null, a.push.bind(a))
        })(), m.nc = void 0, m(32160), m(68623)
      })())
    }
  }
}));