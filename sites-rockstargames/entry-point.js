! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "5a085000-4b90-4f03-a3bc-31d35e4f880b", e._sentryDebugIdIdentifier = "sentry-dbid-5a085000-4b90-4f03-a3bc-31d35e4f880b")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-rockstargames",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register(["@rockstargames/graph-client", "@rockstargames/intl", "@rockstargames/modules-core-card", "@rockstargames/modules-core-gif-viewer", "@rockstargames/modules-core-header", "@rockstargames/modules-core-newswire-article", "@rockstargames/modules-core-sc-user", "@rockstargames/modules-core-screenshot-viewer", "@rockstargames/modules-core-videoplayer", "@rockstargames/sites-careers", "@rockstargames/sites-gta", "@rockstargames/sites-gta-gen9", "@rockstargames/sites-gta-trilogy", "@rockstargames/sites-gta-tv", "@rockstargames/sites-legacy", "@rockstargames/sites-red-dead-online", "@rockstargames/sites-red-dead-redemption-2", "@rockstargames/sites-rockstar-tv", "@rockstargames/tina", "@rockstargames/utils"], (function(e, t) {
  var r = {},
    a = {},
    o = {},
    n = {},
    s = {},
    c = {},
    f = {},
    d = {},
    i = {},
    u = {},
    l = {},
    b = {},
    p = {},
    h = {},
    m = {},
    g = {},
    y = {},
    v = {},
    k = {},
    _ = {};
  return Object.defineProperty(r, "__esModule", {
    value: !0
  }), Object.defineProperty(a, "__esModule", {
    value: !0
  }), Object.defineProperty(o, "__esModule", {
    value: !0
  }), Object.defineProperty(n, "__esModule", {
    value: !0
  }), Object.defineProperty(s, "__esModule", {
    value: !0
  }), Object.defineProperty(c, "__esModule", {
    value: !0
  }), Object.defineProperty(f, "__esModule", {
    value: !0
  }), Object.defineProperty(d, "__esModule", {
    value: !0
  }), Object.defineProperty(i, "__esModule", {
    value: !0
  }), Object.defineProperty(u, "__esModule", {
    value: !0
  }), Object.defineProperty(l, "__esModule", {
    value: !0
  }), Object.defineProperty(b, "__esModule", {
    value: !0
  }), Object.defineProperty(p, "__esModule", {
    value: !0
  }), Object.defineProperty(h, "__esModule", {
    value: !0
  }), Object.defineProperty(m, "__esModule", {
    value: !0
  }), Object.defineProperty(g, "__esModule", {
    value: !0
  }), Object.defineProperty(y, "__esModule", {
    value: !0
  }), Object.defineProperty(v, "__esModule", {
    value: !0
  }), Object.defineProperty(k, "__esModule", {
    value: !0
  }), Object.defineProperty(_, "__esModule", {
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
        n[t] = e[t]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(t) {
        s[t] = e[t]
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
        d[t] = e[t]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(t) {
        i[t] = e[t]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(t) {
        u[t] = e[t]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(t) {
        l[t] = e[t]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(t) {
        b[t] = e[t]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(t) {
        p[t] = e[t]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(t) {
        h[t] = e[t]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(t) {
        m[t] = e[t]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(t) {
        g[t] = e[t]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(t) {
        y[t] = e[t]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(t) {
        v[t] = e[t]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(t) {
        k[t] = e[t]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(t) {
        _[t] = e[t]
      }))
    }],
    execute: function() {
      e((() => {
        var e, w, j, O, x, E, P = {
            54364: (e, t, r) => {
              (0, r(47284).G)(1)
            },
            47284: (e, t, r) => {
              const a = r(87984).Q;
              t.G = function(e) {
                if (e || (e = 1), !r.y.meta || !r.y.meta.url) throw console.error("__system_context__", r.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                r.p = a(r.y.meta.url, e)
              }
            },
            93824: (e, t, r) => {
              r(54364)
            },
            87984: (e, t, r) => {
              t.Q = function(e, t) {
                var r = document.createElement("a");
                r.href = e;
                for (var a = "/" === r.pathname[0] ? r.pathname : "/" + r.pathname, o = 0, n = a.length; o !== t && n >= 0;) "/" === a[--n] && o++;
                if (o !== t) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + t + ") is greater than the number of directories (" + o + ") in the URL path " + e);
                var s = a.slice(0, n + 1);
                return r.protocol + "//" + r.host + s
              };
              Number.isInteger
            },
            30650: (e, t, r) => {
              "use strict";
              var a = {
                  "./bootstrap": () => r.e(236).then((() => () => r(46236))),
                  "./components": () => Promise.all([r.e(664), r.e(61), r.e(952), r.e(280), r.e(240)]).then((() => () => r(64280)))
                },
                o = (e, t) => (r.R = t, t = r.o(a, e) ? a[e]() : Promise.resolve().then((() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                })), r.R = void 0, t),
                n = (e, t) => {
                  if (r.S) {
                    var a = "default",
                      o = r.S[a];
                    if (o && o !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return r.S[a] = e, r.I(a, t)
                  }
                };
              r.d(t, {
                get: () => o,
                init: () => n
              })
            },
            33864: e => {
              "use strict";
              e.exports = r
            },
            50800: e => {
              "use strict";
              e.exports = a
            },
            97672: e => {
              "use strict";
              e.exports = o
            },
            5576: e => {
              "use strict";
              e.exports = n
            },
            63314: e => {
              "use strict";
              e.exports = s
            },
            25358: e => {
              "use strict";
              e.exports = c
            },
            81128: e => {
              "use strict";
              e.exports = f
            },
            56672: e => {
              "use strict";
              e.exports = d
            },
            14472: e => {
              "use strict";
              e.exports = i
            },
            46924: e => {
              "use strict";
              e.exports = u
            },
            44718: e => {
              "use strict";
              e.exports = l
            },
            62996: e => {
              "use strict";
              e.exports = b
            },
            48854: e => {
              "use strict";
              e.exports = p
            },
            26880: e => {
              "use strict";
              e.exports = h
            },
            36620: e => {
              "use strict";
              e.exports = m
            },
            80510: e => {
              "use strict";
              e.exports = g
            },
            93660: e => {
              "use strict";
              e.exports = y
            },
            3304: e => {
              "use strict";
              e.exports = v
            },
            88428: e => {
              "use strict";
              e.exports = k
            },
            9344: e => {
              "use strict";
              e.exports = _
            }
          },
          M = {};

        function S(e) {
          var t = M[e];
          if (void 0 !== t) return t.exports;
          var r = M[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return P[e].call(r.exports, r, r.exports, S), r.loaded = !0, r.exports
        }
        return S.m = P, S.c = M, S.y = t, S.amdO = {}, S.n = e => {
          var t = e && e.__esModule ? () => e.default : () => e;
          return S.d(t, {
            a: t
          }), t
        }, w = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, S.t = function(t, r) {
          if (1 & r && (t = this(t)), 8 & r) return t;
          if ("object" == typeof t && t) {
            if (4 & r && t.__esModule) return t;
            if (16 & r && "function" == typeof t.then) return t
          }
          var a = Object.create(null);
          S.r(a);
          var o = {};
          e = e || [null, w({}), w([]), w(w)];
          for (var n = 2 & r && t;
            "object" == typeof n && !~e.indexOf(n); n = w(n)) Object.getOwnPropertyNames(n).forEach((e => o[e] = () => t[e]));
          return o.default = () => t, S.d(a, o), a
        }, S.d = (e, t) => {
          for (var r in t) S.o(t, r) && !S.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: t[r]
          })
        }, S.f = {}, S.e = e => Promise.all(Object.keys(S.f).reduce(((t, r) => (S.f[r](e, t), t)), [])), S.u = e => "js/" + {
          16: "8901e6d10c174508741b133df8afa275",
          61: "cc40abc6155f8371466cec04f83794c6",
          64: "321281feea6ebdace10b75e540bfb9d3",
          72: "3b629233a96fb57623394115a194cf2b",
          88: "be7137d7719009b62b3ac09e19055698",
          100: "6c6be826dddc27a5ae699438cbcd46e5",
          104: "788388fc7f054af853e7fbe8d4f661b4",
          140: "690bb21b04b5a907d2b270e3feb622c1",
          144: "7c88ae316aea88c83cd16c6ceb1ed608",
          168: "a98819e78d8f9f7df893ff0cded7af0c",
          190: "85fd5ad2038f0c57756d0e57310c7548",
          226: "5474adf45a05ce2c7c605b01a576211c",
          228: "6e116db03e9d5293bc6a0bab083b02bf",
          236: "348bdc9047377ff10ead37ba9c64d012",
          240: "28669360088ddf3b67b2ebf60c1e9dd7",
          256: "2a098475817dc85d7074cc07e013a1c5",
          276: "0ec22fbc80230faa2e085679426bdea4",
          280: "8a0da4e87961f7ecfcf579ad2bae9be0",
          304: "b2e58dd2e4dfca6eafb558f318dbb5e4",
          396: "f169e3f53fd9db766772ea288d05cdae",
          400: "829c1273dc8ff9e7940d1e9ab3a7e660",
          408: "23bc09fcae96830911411d15af33ee5e",
          452: "887cf0c067f77a203379bf59b707ad4a",
          480: "bdf80c76ccabb5653311e7517369285c",
          484: "32561f4ec01649ab808e4ca884639725",
          524: "4b5691b157f20fe67648cca5d32a0df0",
          560: "cfba8e8aff72ec365d8f6be1087fd25e",
          572: "1029ae86ba41c5b9451d90971174a6ba",
          584: "e28c611f27ac21cad258044dac1ae9ba",
          598: "0f368eb0e59890fdb58ba0d27b0f641a",
          620: "7e0c635d85830ea1cc251abdb28a08bf",
          648: "2c6c1455666803665d1227929878a26f",
          664: "3e4537f287ec9227bc06bb670e286551",
          672: "b5fa5afe779c9cf72832e1546797c9ee",
          690: "f0b9f746802e44698a80040befe15db1",
          696: "453f90294a34ba8266e04ab99b143e8a",
          708: "84e861ff48c75478c629c27ba5573800",
          716: "19cb3ab172dd3edc66618124ab7ec8b3",
          735: "776d39a6096f45568c3a03057c310d67",
          764: "98ef119b843833c30df10b84636ecf44",
          792: "574b063631d8b5b76443af16dec72a6b",
          832: "e299cc8078a863f475346662dc273708",
          860: "9603c41d246e49db391d7fb1975c4de0",
          868: "8b5ca408150f4c9d2fe21a9539bc15df",
          895: "041cc2e53f537653983dfeaaa5b1f470",
          952: "ea2a4efe67b95892dac502e4106dd3fc"
        } [e] + ".js", S.miniCssF = e => "css/" + {
          226: "38c97fd28278c251a3912ef23989021a",
          280: "63e8209a3ba7f21685a3016053342b52",
          400: "3842bc2be60b96e32d864a417fe42534",
          480: "47bf684458c1b2bf56e62f0c741595b9"
        } [e] + ".css", S.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), S.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), j = {}, O = "@rockstargames/sites-rockstargames:", S.l = (e, t, r, a) => {
          if (j[e]) j[e].push(t);
          else {
            var o, n;
            if (void 0 !== r)
              for (var s = document.getElementsByTagName("script"), c = 0; c < s.length; c++) {
                var f = s[c];
                if (f.getAttribute("src") == e || f.getAttribute("data-webpack") == O + r) {
                  o = f;
                  break
                }
              }
            o || (n = !0, (o = document.createElement("script")).charset = "utf-8", o.timeout = 120, S.nc && o.setAttribute("nonce", S.nc), o.setAttribute("data-webpack", O + r), o.src = e), j[e] = [t];
            var d = (t, r) => {
                o.onerror = o.onload = null, clearTimeout(i);
                var a = j[e];
                if (delete j[e], o.parentNode && o.parentNode.removeChild(o), a && a.forEach((e => e(r))), t) return t(r)
              },
              i = setTimeout(d.bind(null, void 0, {
                type: "timeout",
                target: o
              }), 12e4);
            o.onerror = d.bind(null, o.onerror), o.onload = d.bind(null, o.onload), n && document.head.appendChild(o)
          }
        }, S.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, S.nmd = e => (e.paths = [], e.children || (e.children = []), e), x = {
          61: [3061],
          140: [47140],
          190: [82190],
          226: [8720, 19548, 27864, 42132, 42708, 55120, 67308, 75016, 77715, 84644, 85092, 91336],
          256: [1740, 28540, 73784],
          396: [7396],
          480: [1532, 45652, 95356],
          484: [55484],
          572: [49952],
          620: [71620],
          690: [53690],
          708: [21708],
          735: [6735],
          832: [8832],
          868: [86868],
          952: [33052, 42836, 45792]
        }, E = {
          1532: ["default", "./operations/queries", 33864],
          1740: ["default", "./index", 88428],
          3061: ["default", "./hooks", 9344],
          6735: ["default", "./index", 93660],
          7396: ["default", "./index", 46924],
          8720: ["default", "./modules", 97672],
          8832: ["default", "./destination", 44718],
          19548: ["default", "./onetrust", 9344],
          21708: ["default", "./index", 48854],
          27864: ["default", "./graph/policies", 81128],
          28540: ["default", "./operations/fragments/paging.graphql", 33864],
          33052: ["default", "./index", 33864],
          42132: ["default", "./index", 63314],
          42708: ["default", "./providers", 81128],
          42836: ["default", "./index", 81128],
          45652: ["default", "./helpers/uploads", 88428],
          45792: ["default", "./index", 9344],
          47140: ["default", "./index", 80510],
          49952: ["default", "./index", 26880],
          53690: ["default", "./lazy", 5576],
          55120: ["default", "./messages", 50800],
          55484: ["default", "./index", 56672],
          67308: ["default", "./operations/fragments/video-fields.graphql", 33864],
          71620: ["default", "./index", 62996],
          73784: ["default", "./operations/fragments/newswire-post.graphql", 33864],
          75016: ["default", "./index", 50800],
          77715: ["default", "./providers", 9344],
          82190: ["default", "./site-routes/RedDeadRedemption", 36620],
          84644: ["default", "./index", 14472],
          85092: ["default", "./gtm", 9344],
          86868: ["default", "./index", 3304],
          91336: ["default", "./NewswireArticle", 25358],
          95356: ["default", "./helpers", 88428]
        }, S.f.remotes = (e, t) => {
          S.o(x, e) && x[e].forEach((e => {
            var r = S.R;
            r || (r = []);
            var a = E[e];
            if (!(r.indexOf(a) >= 0)) {
              if (r.push(a), a.p) return t.push(a.p);
              var o = t => {
                  t || (t = new Error("Container missing")), "string" == typeof t.message && (t.message += '\nwhile loading "' + a[1] + '" from ' + a[2]), S.m[e] = () => {
                    throw t
                  }, a.p = 0
                },
                n = (e, r, n, s, c, f) => {
                  try {
                    var d = e(r, n);
                    if (!d || !d.then) return c(d, s, f);
                    var i = d.then((e => c(e, s)), o);
                    if (!f) return i;
                    t.push(a.p = i)
                  } catch (e) {
                    o(e)
                  }
                },
                s = (e, t, o) => n(t.get, a[1], r, 0, c, o),
                c = t => {
                  a.p = 1, S.m[e] = e => {
                    e.exports = t()
                  }
                };
              n(S, a[2], 0, 0, ((e, t, r) => e ? n(S.I, a[0], 0, e, s, r) : o()), 1)
            }
          }))
        }, (() => {
          S.S = {};
          var e = {},
            t = {};
          S.I = (r, a) => {
            a || (a = []);
            var o = t[r];
            if (o || (o = t[r] = {}), !(a.indexOf(o) >= 0)) {
              if (a.push(o), e[r]) return e[r];
              S.o(S.S, r) || (S.S[r] = {});
              var n = S.S[r],
                s = "@rockstargames/sites-rockstargames",
                c = (e, t, r, a) => {
                  var o = n[e] = n[e] || {},
                    c = o[t];
                  (!c || !c.loaded && (!a != !c.eager ? a : s > c.from)) && (o[t] = {
                    get: r,
                    from: s,
                    eager: !!a
                  })
                },
                f = e => {
                  var t = e => {
                    return t = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(t));
                    var t
                  };
                  try {
                    var o = S(e);
                    if (!o) return;
                    var n = e => e && e.init && e.init(S.S[r], a);
                    if (o.then) return d.push(o.then(n, t));
                    var s = n(o);
                    if (s && s.then) return d.push(s.catch(t))
                  } catch (e) {
                    t(e)
                  }
                },
                d = [];
              return "default" === r && (c("@rockstargames/components", "1.14.0", (() => Promise.all([S.e(72), S.e(598), S.e(664), S.e(256), S.e(952), S.e(480), S.e(860)]).then((() => () => S(58568))))), c("@rockstargames/locale-tools", "1.0.0", (() => Promise.all([S.e(408), S.e(664), S.e(61), S.e(64)]).then((() => () => S(8304))))), c("@rockstargames/router", "1.0.0", (() => Promise.all([S.e(664), S.e(584), S.e(895)]).then((() => () => S(85276))))), c("dompurify", "2.4.7", (() => S.e(560).then((() => () => S(8560))))), c("framer-motion", "7.10.3", (() => Promise.all([S.e(648), S.e(664), S.e(672)]).then((() => () => S(57648))))), c("history", "4.10.1", (() => S.e(764).then((() => () => S(49144))))), c("react-dom", "18.2.0", (() => Promise.all([S.e(716), S.e(664)]).then((() => () => S(63716))))), c("react-jsx-parser", "1.29.0", (() => Promise.all([S.e(696), S.e(664)]).then((() => () => S(94696))))), c("react-router-dom", "6.17.0", (() => Promise.all([S.e(168), S.e(452), S.e(664), S.e(16)]).then((() => () => S(84832))))), c("react-router-dom", "6.17.0", (() => Promise.all([S.e(168), S.e(104), S.e(664), S.e(228)]).then((() => () => S(82104))))), c("react-router", "6.17.0", (() => Promise.all([S.e(168), S.e(88), S.e(664)]).then((() => () => S(79088))))), c("react-router", "6.17.0", (() => Promise.all([S.e(168), S.e(524), S.e(664)]).then((() => () => S(34524))))), c("react", "18.2.0", (() => S.e(100).then((() => () => S(77100))))), f(9344), f(33864), f(81128), f(88428), f(50800), f(97672), f(63314), f(25358), f(14472), f(26880), f(5576), f(3304), f(56672), f(46924), f(44718), f(62996), f(48854), f(80510), f(36620), f(93660)), d.length ? e[r] = Promise.all(d).then((() => e[r] = 1)) : e[r] = 1
            }
          }
        })(), (() => {
          var e;
          S.g.importScripts && (e = S.g.location + "");
          var t = S.g.document;
          if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
            var r = t.getElementsByTagName("script");
            if (r.length)
              for (var a = r.length - 1; a > -1 && !e;) e = r[a--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), S.p = e
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
                  n = o < 0;
                n && (o = -o - 1);
                for (var s = 0, c = 1, f = !0;; c++, s++) {
                  var d, i, u = c < r.length ? (typeof r[c])[0] : "";
                  if (s >= a.length || "o" == (i = (typeof(d = a[s]))[0])) return !f || ("u" == u ? c > o && !n : "" == u != n);
                  if ("u" == i) {
                    if (!f || "u" != u) return !1
                  } else if (f)
                    if (u == i)
                      if (c <= o) {
                        if (d != r[c]) return !1
                      } else {
                        if (n ? d > r[c] : d < r[c]) return !1;
                        d != r[c] && (f = !1)
                      }
                  else if ("s" != u && "n" != u) {
                    if (n || c <= o) return !1;
                    f = !1, c--
                  } else {
                    if (c <= o || i < u != n) return !1;
                    f = !1
                  } else "s" != u && "n" != u && (f = !1, c--)
                }
              }
              var l = [],
                b = l.pop.bind(l);
              for (s = 1; s < r.length; s++) {
                var p = r[s];
                l.push(1 == p ? b() | b() : 2 == p ? b() & b() : p ? t(p, a) : !b())
              }
              return !!b()
            },
            r = (r, a, o) => {
              var n = r[a];
              return (a = Object.keys(n).reduce(((r, a) => !t(o, a) || r && !((t, r) => {
                t = e(t), r = e(r);
                for (var a = 0;;) {
                  if (a >= t.length) return a < r.length && "u" != (typeof r[a])[0];
                  var o = t[a],
                    n = (typeof o)[0];
                  if (a >= r.length) return "u" == n;
                  var s = r[a],
                    c = (typeof s)[0];
                  if (n != c) return "o" == n && "n" == c || "s" == c || "u" == n;
                  if ("o" != n && "u" != n && o != s) return o < s;
                  a++
                }
              })(r, a) ? r : a), 0)) && n[a]
            },
            a = (e => function(t, r, a, o) {
              var n = S.I(t);
              return n && n.then ? n.then(e.bind(e, t, S.S[t], r, a, o)) : e(t, S.S[t], r, a, o)
            })(((e, t, a, o, n) => {
              var s = t && S.o(t, a) && r(t, a, o);
              return s ? (e => (e.loaded = 1, e.get()))(s) : n()
            })),
            o = {},
            n = {
              51664: () => a("default", "react", [1, 18, 2, 0], (() => S.e(100).then((() => () => S(77100))))),
              9860: () => a("default", "@rockstargames/components", [1, "workspace:*"], (() => Promise.all([S.e(72), S.e(598), S.e(256), S.e(480)]).then((() => () => S(58568))))),
              41272: () => a("default", "@rockstargames/locale-tools", [1, "workspace:*"], (() => Promise.all([S.e(408), S.e(61), S.e(304)]).then((() => () => S(8304))))),
              50968: () => a("default", "framer-motion", [1, 7, 5, 1], (() => S.e(648).then((() => () => S(57648))))),
              57013: () => a("default", "react-router-dom", [1, 6, 11, 2], (() => Promise.all([S.e(168), S.e(452), S.e(16)]).then((() => () => S(84832))))),
              77364: () => a("default", "react-dom", [1, 18, 2, 0], (() => S.e(716).then((() => () => S(63716))))),
              89416: () => a("default", "dompurify", [1, 2, 4, 1], (() => S.e(560).then((() => () => S(8560))))),
              98584: () => a("default", "react-router-dom", [1, 6, 11, 2], (() => Promise.all([S.e(168), S.e(104), S.e(228)]).then((() => () => S(82104))))),
              10016: () => a("default", "react-router", [1, 6, 11, 2], (() => S.e(88).then((() => () => S(79088))))),
              13228: () => a("default", "react-router", [1, 6, 11, 2], (() => S.e(524).then((() => () => S(34524))))),
              33309: () => a("default", "react-jsx-parser", [1, 1, 29, 0], (() => S.e(696).then((() => () => S(94696))))),
              77508: () => a("default", "history", [1, 5, 3, 0], (() => S.e(144).then((() => () => S(49144))))),
              81968: () => a("default", "@rockstargames/router", [1, "workspace:*"], (() => Promise.all([S.e(584), S.e(276)]).then((() => () => S(85276)))))
            },
            s = {
              16: [10016],
              226: [33309, 77508, 81968],
              228: [13228],
              256: [41272, 50968, 57013, 77364, 89416],
              584: [98584],
              664: [51664],
              952: [9860]
            },
            c = {};
          S.f.consumes = (e, t) => {
            S.o(s, e) && s[e].forEach((e => {
              if (S.o(o, e)) return t.push(o[e]);
              if (!c[e]) {
                var r = t => {
                  o[e] = 0, S.m[e] = r => {
                    delete S.c[e], r.exports = t()
                  }
                };
                c[e] = !0;
                var a = t => {
                  delete o[e], S.m[e] = r => {
                    throw delete S.c[e], t
                  }
                };
                try {
                  var s = n[e]();
                  s.then ? t.push(o[e] = s.then(r).catch(a)) : r(s)
                } catch (e) {
                  a(e)
                }
              }
            }))
          }
        })(), (() => {
          if ("undefined" != typeof document) {
            var e = {
              536: 0
            };
            S.f.miniCss = (t, r) => {
              e[t] ? r.push(e[t]) : 0 !== e[t] && {
                226: 1,
                280: 1,
                400: 1,
                480: 1
              } [t] && r.push(e[t] = (e => new Promise(((t, r) => {
                var a = S.miniCssF(e),
                  o = S.p + a;
                if (((e, t) => {
                    for (var r = document.getElementsByTagName("link"), a = 0; a < r.length; a++) {
                      var o = (s = r[a]).getAttribute("data-href") || s.getAttribute("href");
                      if ("stylesheet" === s.rel && (o === e || o === t)) return s
                    }
                    var n = document.getElementsByTagName("style");
                    for (a = 0; a < n.length; a++) {
                      var s;
                      if ((o = (s = n[a]).getAttribute("data-href")) === e || o === t) return s
                    }
                  })(a, o)) return t();
                ((e, t, r, a, o) => {
                  var n = document.createElement("link");
                  n.rel = "stylesheet", n.type = "text/css", n.onerror = n.onload = r => {
                    if (n.onerror = n.onload = null, "load" === r.type) a();
                    else {
                      var s = r && ("load" === r.type ? "missing" : r.type),
                        c = r && r.target && r.target.href || t,
                        f = new Error("Loading CSS chunk " + e + " failed.\n(" + c + ")");
                      f.code = "CSS_CHUNK_LOAD_FAILED", f.type = s, f.request = c, n.parentNode && n.parentNode.removeChild(n), o(f)
                    }
                  }, n.href = t, document.head.appendChild(n)
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
            536: 0
          };
          S.f.j = (t, r) => {
            var a = S.o(e, t) ? e[t] : void 0;
            if (0 !== a)
              if (a) r.push(a[2]);
              else if (/^(1(40|6|90)|6(1|20|64|90)|(22|70|86)8|[45]84|(57|83|95)2|256|396|735)$/.test(t)) e[t] = 0;
            else {
              var o = new Promise(((r, o) => a = e[t] = [r, o]));
              r.push(a[2] = o);
              var n = S.p + S.u(t),
                s = new Error;
              S.l(n, (r => {
                if (S.o(e, t) && (0 !== (a = e[t]) && (e[t] = void 0), a)) {
                  var o = r && ("load" === r.type ? "missing" : r.type),
                    n = r && r.target && r.target.src;
                  s.message = "Loading chunk " + t + " failed.\n(" + o + ": " + n + ")", s.name = "ChunkLoadError", s.type = o, s.request = n, a[1](s)
                }
              }), "chunk-" + t, t)
            }
          };
          var t = (t, r) => {
              var a, o, n = r[0],
                s = r[1],
                c = r[2],
                f = 0;
              if (n.some((t => 0 !== e[t]))) {
                for (a in s) S.o(s, a) && (S.m[a] = s[a]);
                c && c(S)
              }
              for (t && t(r); f < n.length; f++) o = n[f], S.o(e, o) && e[o] && e[o][0](), e[o] = 0
            },
            r = self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || [];
          r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
        })(), S(93824), S(30650)
      })())
    }
  }
}));