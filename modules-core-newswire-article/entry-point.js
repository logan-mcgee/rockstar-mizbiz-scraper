! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "3e6da76c-f509-4581-a515-88b7bbf6508b", e._sentryDebugIdIdentifier = "sentry-dbid-3e6da76c-f509-4581-a515-88b7bbf6508b")
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
    n = {},
    c = {},
    f = {};
  return Object.defineProperty(a, "__esModule", {
    value: !0
  }), Object.defineProperty(r, "__esModule", {
    value: !0
  }), Object.defineProperty(o, "__esModule", {
    value: !0
  }), Object.defineProperty(d, "__esModule", {
    value: !0
  }), Object.defineProperty(n, "__esModule", {
    value: !0
  }), Object.defineProperty(c, "__esModule", {
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
                for (var r = "/" === a.pathname[0] ? a.pathname : "/" + a.pathname, o = 0, d = r.length; o !== t && d >= 0;) "/" === r[--d] && o++;
                if (o !== t) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + t + ") is greater than the number of directories (" + o + ") in the URL path " + e);
                var n = r.slice(0, d + 1);
                return a.protocol + "//" + a.host + n
              };
              Number.isInteger
            },
            68623: (e, t, a) => {
              "use strict";
              var r = {
                  "./NewswireArticle": () => Promise.all([a.e(3524), a.e(1223), a.e(9269), a.e(4303), a.e(7542), a.e(9048), a.e(7319), a.e(1403), a.e(1156), a.e(8089), a.e(7185), a.e(285), a.e(1879), a.e(207), a.e(8407), a.e(6758), a.e(9756), a.e(7989), a.e(5245), a.e(1011), a.e(1702), a.e(7207), a.e(825)]).then((() => () => a(80825))),
                  "./NewswireTitle": () => Promise.all([a.e(1403), a.e(1156), a.e(8089), a.e(7185), a.e(285), a.e(353)]).then((() => () => a(85184))),
                  "./components": () => Promise.all([a.e(3524), a.e(1223), a.e(9269), a.e(4303), a.e(7542), a.e(9048), a.e(1403), a.e(1156), a.e(8089), a.e(7185), a.e(285), a.e(1879), a.e(207), a.e(8407), a.e(6758), a.e(9756), a.e(7989), a.e(5245)]).then((() => () => a(26750))),
                  "./index": () => Promise.all([a.e(3524), a.e(1223), a.e(9269), a.e(4303), a.e(7542), a.e(9048), a.e(1403), a.e(1156), a.e(8089), a.e(7185), a.e(285), a.e(1879), a.e(207), a.e(8407), a.e(6758), a.e(9756), a.e(7989), a.e(5245), a.e(1702), a.e(4216)]).then((() => () => a(74216))),
                  "./tinaBlockTemplates": () => Promise.all([a.e(7601), a.e(1403), a.e(1156), a.e(8089), a.e(7185), a.e(1879), a.e(8407), a.e(6758), a.e(7368)]).then((() => () => a(97368))),
                  "./types": () => Promise.all([a.e(3524), a.e(1223), a.e(9269), a.e(4303), a.e(7542), a.e(9048), a.e(7319), a.e(1403), a.e(1156), a.e(8089), a.e(7185), a.e(285), a.e(1879), a.e(207), a.e(8407), a.e(6758), a.e(9756), a.e(7989), a.e(5245), a.e(1011), a.e(1702), a.e(7207), a.e(5946)]).then((() => () => a(45946)))
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
              e.exports = n
            },
            99466: e => {
              "use strict";
              e.exports = c
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
          199: "8d449d67983506ca71a6fddafceed04f",
          207: "4c6f54af0546121331db01f1db335f8d",
          285: "d48b79eecdaa8921f686da653f5b6d74",
          353: "fa759fd260c7b992bbb0e10e3561f7b2",
          381: "f5360e08d77bed31578e00620c1c3f2f",
          732: "61394d05cf669f2ef410f86dbedba41d",
          825: "85e5c8ba1410c04d9712b7601a0d6e09",
          915: "a3929ddf1c29656e0e6edafc6bd687a2",
          1011: "8a6f9a69801621d812330ae4012e5fa6",
          1156: "cc922efc646be03a6e96db0c8dc79076",
          1223: "cd9fa2562937ef580628b27042f500a3",
          1331: "47fe72444df93091fd4ee194cd6df573",
          1403: "ddb9799907f7446101f8ded56fdf5523",
          1469: "51011918d3221e9c06e76a5a25be6309",
          1702: "3d1c26fd5fdd551619470c92ee27540c",
          1871: "5628d9c8d45b73ea6d5488f13f064993",
          1879: "fd6db654d72fc6bdacfc5fe94abe7b4c",
          2956: "6749f9363775e18f3f7ec377c72bd137",
          3064: "aeab16a9e80b444913287d518ba43b9a",
          3380: "890697522241477c0ec588a362861e0d",
          3407: "04f62fab1ba7aa0e169fa64042c9d1c8",
          3524: "808751dd0220bc5faa2513038947ff83",
          3712: "aa3c5e0b4979e1a9055e57af89e50648",
          4105: "31c4f756a5df0e64c6a49034d82291bb",
          4143: "66643a19b506827f006a7ee2f69861e2",
          4191: "82269d3e0e517dc41608fe45749e9245",
          4216: "5266cbb751cb3ab158ddb27c4e5c7c84",
          4303: "c89f0bc4c267784ce8b6391049272aa2",
          4315: "7cf655a37f3600c0641b40d034ad5c14",
          4451: "36b57b1ccd5704a5e1cd6ecea652a8c5",
          4820: "f0e46e6862a37b584ef63ab7b67d85d5",
          5238: "2c9d2d416df3b0923304807c52ed2296",
          5245: "a2d08848bde764c7ba79b56e916a381b",
          5254: "9cf295745bd9827b5a833a55183d96e6",
          5283: "bb0f4cd9036534eb6ab52a42423b920d",
          5662: "7fef4a7b264afb0e00e35d9e04e290d8",
          5891: "667677bfb4f1741b02c39742d19fb317",
          5946: "ddeb7defeb2d1cdcba5ee9fe0b1f2164",
          6008: "c4eb4348a70f88b3323b46b0d7ffcb3e",
          6054: "812d20dcf26233cba6bab1a3302472a7",
          6119: "864ca5d8210c8ee91940f5cb528c96fe",
          6198: "d83c4a49531e335e83918b0abe3796cc",
          6524: "1d204ce64da00f8d860223205e0de4bd",
          6757: "4d5b5401699ea1c7a7f3f2825db509fe",
          6758: "c2a1a340f464897379feb3e74e3016c6",
          7185: "c2666a9149566bae8996633b276aa7ad",
          7207: "da957446ae2156d9c488a2801a17472c",
          7319: "da4405d1346710dd1d2e7e6f39227fe2",
          7368: "7592ca285b687a93d6627db25bdbc4e2",
          7533: "d831306c91c726463ee6b1316747a226",
          7542: "5df862b1477eed7b918051c54448b2d5",
          7601: "9f2e0a25ac0ba26dab47c41063200277",
          7989: "83150e6b5b7c04216439ee4d9efc30fa",
          8066: "a7a0532cbfa73ae8aedcdbebe4233f03",
          8089: "8bab15068b5f8709c6793d02556eb838",
          8108: "c76f246a8c93a6e235b23df723afe9d7",
          8407: "89d369fbace1d513bd0b21d0d3f3e07b",
          8500: "a553f163405fcddf41decee6be5652e9",
          8653: "e9098e263aed390c77e5e66a90406b02",
          8917: "3e71e12810a1ee184e8bac14a2b113eb",
          9048: "013900281ae03196b631b30e781d44a0",
          9269: "1998d37ab74b4933dbb931bf046a5f13",
          9429: "66d67a20b972623e2204940542d95159",
          9613: "82513991d3524165279f5ca755ee0126",
          9756: "039157a1769a5059eb2ff517a4974f6e"
        } [e] + ".js", m.miniCssF = e => "css/" + {
          353: "2437cf6a7a9dc144e5eb8c961218836a",
          732: "7804a8964f391fe5e1b3d2ce77453b1e",
          1871: "fc7fb91c3f332bb12a6b912c9fb722a8",
          3712: "85da1b5692003905e3aeacc551368771",
          5245: "3f8159158cf973e8181d6be4d34a0309",
          5662: "fc7fb91c3f332bb12a6b912c9fb722a8",
          6119: "2d1c0b9b67883648652d608f8448f059",
          6757: "03e70232c89eeedc725a1dedeef33174",
          6758: "1007990ea5bb7411af41642c61386494",
          7185: "d24f8af72e222478f3ce0e27f9503b3c",
          7207: "7430346e4fd1d070d6bc7f6e85beebf7",
          7319: "9faecd686b2cf12df9b83800d0499158",
          7989: "2d479fdc2ad051cd66458cf1c2f66dff",
          8500: "8dd9a0b6cae3671a65afa3f1fa7558c6",
          9756: "c1cb7e7241b325f27c6a585c756dd4ef"
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
              for (var n = document.getElementsByTagName("script"), c = 0; c < n.length; c++) {
                var f = n[c];
                if (f.getAttribute("src") == e || f.getAttribute("data-webpack") == l + a) {
                  o = f;
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
          5245: [70396, 78417, 90588],
          6758: [26398, 55140, 64064, 73379],
          7368: [11438, 17523, 33809, 44019, 83166],
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
                d = (e, a, d, n, c, f) => {
                  try {
                    var s = e(a, d);
                    if (!s || !s.then) return c(s, n, f);
                    var i = s.then((e => c(e, n)), o);
                    if (!f) return i;
                    t.push(r.p = i)
                  } catch (e) {
                    o(e)
                  }
                },
                n = (e, t, o) => d(t.get, r[1], a, 0, c, o),
                c = t => {
                  r.p = 1, m.m[e] = e => {
                    e.exports = t()
                  }
                };
              d(m, r[2], 0, 0, ((e, t, a) => e ? d(m.I, r[0], 0, e, n, a) : o()), 1)
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
                n = "@rockstargames/modules-core-newswire-article",
                c = (e, t, a, r) => {
                  var o = d[e] = d[e] || {},
                    c = o[t];
                  (!c || !c.loaded && (!r != !c.eager ? r : n > c.from)) && (o[t] = {
                    get: a,
                    from: n,
                    eager: !!r
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
                    var d = e => e && e.init && e.init(m.S[a], r);
                    if (o.then) return s.push(o.then(d, t));
                    var n = d(o);
                    if (n && n.then) return s.push(n.catch(t))
                  } catch (e) {
                    t(e)
                  }
                },
                s = [];
              return "default" === a && (c("@foundry/react", "1.14.1", (() => Promise.all([m.e(1223), m.e(7542), m.e(7319), m.e(4191), m.e(1403), m.e(1011), m.e(5662)]).then((() => () => m(44191))))), c("@rockstargames/locale-tools", "1.0.0", (() => Promise.all([m.e(1223), m.e(8066), m.e(1403), m.e(4143)]).then((() => () => m(24143))))), c("@rockstargames/modules-core-carousel", "1.2.4", (() => Promise.all([m.e(3524), m.e(9269), m.e(1403), m.e(1156), m.e(8089), m.e(732), m.e(3712)]).then((() => () => m(51331))))), c("@rockstargames/modules-core-engagement", "0.0.2", (() => Promise.all([m.e(3524), m.e(9269), m.e(4303), m.e(1469), m.e(1403), m.e(1156), m.e(285), m.e(207), m.e(8407), m.e(9756), m.e(6757)]).then((() => () => m(13772))))), c("@rockstargames/modules-core-group-of-items", "1.2.0", (() => Promise.all([m.e(3524), m.e(1403), m.e(1156), m.e(8089), m.e(7185), m.e(1879), m.e(207), m.e(7989), m.e(8500)]).then((() => () => m(18500))))), c("@rockstargames/modules-sc-ugc-spotlight", "1.1.3", (() => m.e(381).then((() => () => m(20381))))), c("dompurify", "2.4.7", (() => m.e(2956).then((() => () => m(72956))))), c("lodash", "4.17.21", (() => m.e(9429).then((() => () => m(79429))))), c("react-dom", "18.2.0", (() => Promise.all([m.e(5283), m.e(1403)]).then((() => () => m(15283))))), c("react-dom", "18.2.0", (() => Promise.all([m.e(7533), m.e(1403)]).then((() => () => m(47533))))), c("react-jsx-parser", "1.29.0", (() => Promise.all([m.e(1403), m.e(5238)]).then((() => () => m(85238))))), c("react-router-dom", "6.17.0", (() => Promise.all([m.e(4105), m.e(6008), m.e(1403)]).then((() => () => m(76008))))), c("react-router-dom", "6.17.0", (() => Promise.all([m.e(4105), m.e(4451), m.e(1403)]).then((() => () => m(4451))))), c("react", "18.2.0", (() => m.e(3380).then((() => () => m(23380))))), c("text-balancer", "1.0.5", (() => m.e(199).then((() => () => m(20199))))), f(99466), f(92969), f(25136), f(60404), f(61024), f(29441), f(49787)), s.length ? e[a] = Promise.all(s).then((() => e[a] = 1)) : e[a] = 1
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
                for (var n = 0, c = 1, f = !0;; c++, n++) {
                  var s, i, l = c < a.length ? (typeof a[c])[0] : "";
                  if (n >= r.length || "o" == (i = (typeof(s = r[n]))[0])) return !f || ("u" == l ? c > o && !d : "" == l != d);
                  if ("u" == i) {
                    if (!f || "u" != l) return !1
                  } else if (f)
                    if (l == i)
                      if (c <= o) {
                        if (s != a[c]) return !1
                      } else {
                        if (d ? s > a[c] : s < a[c]) return !1;
                        s != a[c] && (f = !1)
                      }
                  else if ("s" != l && "n" != l) {
                    if (d || c <= o) return !1;
                    f = !1, c--
                  } else {
                    if (c <= o || i < l != d) return !1;
                    f = !1
                  } else "s" != l && "n" != l && (f = !1, c--)
                }
              }
              var u = [],
                b = u.pop.bind(u);
              for (n = 1; n < a.length; n++) {
                var p = a[n];
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
                  var n = a[r],
                    c = (typeof n)[0];
                  if (d != c) return "o" == d && "n" == c || "s" == c || "u" == d;
                  if ("o" != d && "u" != d && o != n) return o < n;
                  r++
                }
              })(a, r) ? a : r), 0)) && d[r]
            },
            r = (e => function(t, a, r, o) {
              var d = m.I(t);
              return d && d.then ? d.then(e.bind(e, t, m.S[t], a, r, o)) : e(t, m.S[t], a, r, o)
            })(((e, t, r, o, d) => {
              var n = t && m.o(t, r) && a(t, r, o);
              return n ? (e => (e.loaded = 1, e.get()))(n) : d()
            })),
            o = {},
            d = {
              71403: () => r("default", "react", [1, 18, 2, 0], (() => m.e(3380).then((() => () => m(23380))))),
              61631: () => r("default", "dompurify", [1, 2, 4, 1], (() => m.e(2956).then((() => () => m(72956))))),
              89779: () => r("default", "react-router-dom", [1, 6, 11, 2], (() => Promise.all([m.e(4105), m.e(6008)]).then((() => () => m(76008))))),
              96717: () => r("default", "@rockstargames/locale-tools", [1, "workspace:*"], (() => Promise.all([m.e(1223), m.e(8066), m.e(6524)]).then((() => () => m(24143))))),
              32503: () => r("default", "@rockstargames/modules-core-engagement", [1, "workspace:*"], (() => Promise.all([m.e(1469), m.e(6757)]).then((() => () => m(13772))))),
              37920: () => r("default", "text-balancer", [1, 1, 0, 5], (() => m.e(199).then((() => () => m(20199))))),
              54252: () => r("default", "lodash", [1, 4, 17, 21], (() => m.e(9429).then((() => () => m(79429))))),
              74459: () => r("default", "@rockstargames/modules-core-group-of-items", [1, "workspace:*"], (() => m.e(6119).then((() => () => m(18500))))),
              79493: () => r("default", "react-dom", [1, 18, 2, 0], (() => m.e(7533).then((() => () => m(47533))))),
              41011: () => r("default", "react-dom", [1, 18, 2, 0], (() => m.e(5283).then((() => () => m(15283))))),
              26527: () => r("default", "@rockstargames/modules-core-carousel", [1, "workspace:*"], (() => Promise.all([m.e(732), m.e(1331)]).then((() => () => m(51331))))),
              29210: () => r("default", "@foundry/react", [1, 1, 14, 1], (() => Promise.all([m.e(7319), m.e(4191), m.e(1011), m.e(1871)]).then((() => () => m(44191))))),
              66713: () => r("default", "@rockstargames/modules-sc-ugc-spotlight", [1, "workspace:*"], (() => m.e(381).then((() => () => m(20381))))),
              85865: () => r("default", "react-jsx-parser", [1, "workspace:*"], (() => m.e(5238).then((() => () => m(85238))))),
              57172: () => r("default", "react-router-dom", [1, 6, 11, 2], (() => Promise.all([m.e(4105), m.e(4451)]).then((() => () => m(4451)))))
            },
            n = {
              285: [89779, 96717],
              1011: [41011],
              1403: [71403],
              1702: [26527, 29210, 66713],
              5245: [32503, 37920, 54252, 74459, 79493],
              6757: [57172],
              7185: [61631],
              7207: [85865]
            },
            c = {};
          m.f.consumes = (e, t) => {
            m.o(n, e) && n[e].forEach((e => {
              if (m.o(o, e)) return t.push(o[e]);
              if (!c[e]) {
                var a = t => {
                  o[e] = 0, m.m[e] = a => {
                    delete m.c[e], a.exports = t()
                  }
                };
                c[e] = !0;
                var r = t => {
                  delete o[e], m.m[e] = a => {
                    throw delete m.c[e], t
                  }
                };
                try {
                  var n = d[e]();
                  n.then ? t.push(o[e] = n.then(a).catch(r)) : a(n)
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
                1871: 1,
                3712: 1,
                5245: 1,
                5662: 1,
                6119: 1,
                6757: 1,
                6758: 1,
                7185: 1,
                7207: 1,
                7319: 1,
                7989: 1,
                8500: 1,
                9756: 1
              } [t] && a.push(e[t] = (e => new Promise(((t, a) => {
                var r = m.miniCssF(e),
                  o = m.p + r;
                if (((e, t) => {
                    for (var a = document.getElementsByTagName("link"), r = 0; r < a.length; r++) {
                      var o = (n = a[r]).getAttribute("data-href") || n.getAttribute("href");
                      if ("stylesheet" === n.rel && (o === e || o === t)) return n
                    }
                    var d = document.getElementsByTagName("style");
                    for (r = 0; r < d.length; r++) {
                      var n;
                      if ((o = (n = d[r]).getAttribute("data-href")) === e || o === t) return n
                    }
                  })(r, o)) return t();
                ((e, t, a, r, o) => {
                  var d = document.createElement("link");
                  d.rel = "stylesheet", d.type = "text/css", d.onerror = d.onload = a => {
                    if (d.onerror = d.onload = null, "load" === a.type) r();
                    else {
                      var n = a && ("load" === a.type ? "missing" : a.type),
                        c = a && a.target && a.target.href || t,
                        f = new Error("Loading CSS chunk " + e + " failed.\n(" + c + ")");
                      f.code = "CSS_CHUNK_LOAD_FAILED", f.type = n, f.request = c, d.parentNode && d.parentNode.removeChild(d), o(f)
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
              else if (/^(1(87[19]|011|156|403|702)|7(185|207|32|989)|(2|84)07|8089)$/.test(t)) e[t] = 0;
            else {
              var o = new Promise(((a, o) => r = e[t] = [a, o]));
              a.push(r[2] = o);
              var d = m.p + m.u(t),
                n = new Error;
              m.l(d, (a => {
                if (m.o(e, t) && (0 !== (r = e[t]) && (e[t] = void 0), r)) {
                  var o = a && ("load" === a.type ? "missing" : a.type),
                    d = a && a.target && a.target.src;
                  n.message = "Loading chunk " + t + " failed.\n(" + o + ": " + d + ")", n.name = "ChunkLoadError", n.type = o, n.request = d, r[1](n)
                }
              }), "chunk-" + t, t)
            }
          };
          var t = (t, a) => {
              var r, o, d = a[0],
                n = a[1],
                c = a[2],
                f = 0;
              if (d.some((t => 0 !== e[t]))) {
                for (r in n) m.o(n, r) && (m.m[r] = n[r]);
                c && c(m)
              }
              for (t && t(a); f < d.length; f++) o = d[f], m.o(e, o) && e[o] && e[o][0](), e[o] = 0
            },
            a = self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || [];
          a.forEach(t.bind(null, 0)), a.push = t.bind(null, a.push.bind(a))
        })(), m.nc = void 0, m(32160), m(68623)
      })())
    }
  }
}));