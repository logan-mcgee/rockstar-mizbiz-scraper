! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "a3ae4b50-a527-47cf-a5e6-f09a670a3803", e._sentryDebugIdIdentifier = "sentry-dbid-a3ae4b50-a527-47cf-a5e6-f09a670a3803")
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
}, System.register(["@rockstargames/graph-client", "@rockstargames/intl", "@rockstargames/modules-core-gif-viewer", "@rockstargames/modules-core-header", "@rockstargames/modules-core-newswire-article", "@rockstargames/modules-core-sc-user", "@rockstargames/modules-core-videoplayer", "@rockstargames/sites-careers", "@rockstargames/sites-gta", "@rockstargames/sites-gta-gen9", "@rockstargames/sites-gta-trilogy", "@rockstargames/sites-gta-tv", "@rockstargames/sites-legacy", "@rockstargames/sites-red-dead-online", "@rockstargames/sites-red-dead-redemption-2", "@rockstargames/sites-rockstar-tv", "@rockstargames/tina", "@rockstargames/utils"], (function(e, t) {
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
    v = {};
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
    }],
    execute: function() {
      e((() => {
        var e, k, _, w, j, O, x = {
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
                  "./components": () => Promise.all([r.e(664), r.e(61), r.e(544), r.e(104), r.e(240)]).then((() => () => r(20104)))
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
            5576: e => {
              "use strict";
              e.exports = o
            },
            63314: e => {
              "use strict";
              e.exports = n
            },
            25358: e => {
              "use strict";
              e.exports = s
            },
            81128: e => {
              "use strict";
              e.exports = c
            },
            14472: e => {
              "use strict";
              e.exports = f
            },
            46924: e => {
              "use strict";
              e.exports = d
            },
            44718: e => {
              "use strict";
              e.exports = i
            },
            62996: e => {
              "use strict";
              e.exports = u
            },
            48854: e => {
              "use strict";
              e.exports = l
            },
            26880: e => {
              "use strict";
              e.exports = b
            },
            36620: e => {
              "use strict";
              e.exports = p
            },
            80510: e => {
              "use strict";
              e.exports = h
            },
            93660: e => {
              "use strict";
              e.exports = m
            },
            3304: e => {
              "use strict";
              e.exports = g
            },
            88428: e => {
              "use strict";
              e.exports = y
            },
            9344: e => {
              "use strict";
              e.exports = v
            }
          },
          P = {};

        function E(e) {
          var t = P[e];
          if (void 0 !== t) return t.exports;
          var r = P[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return x[e].call(r.exports, r, r.exports, E), r.loaded = !0, r.exports
        }
        return E.m = x, E.c = P, E.y = t, E.amdO = {}, E.n = e => {
          var t = e && e.__esModule ? () => e.default : () => e;
          return E.d(t, {
            a: t
          }), t
        }, k = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, E.t = function(t, r) {
          if (1 & r && (t = this(t)), 8 & r) return t;
          if ("object" == typeof t && t) {
            if (4 & r && t.__esModule) return t;
            if (16 & r && "function" == typeof t.then) return t
          }
          var a = Object.create(null);
          E.r(a);
          var o = {};
          e = e || [null, k({}), k([]), k(k)];
          for (var n = 2 & r && t;
            "object" == typeof n && !~e.indexOf(n); n = k(n)) Object.getOwnPropertyNames(n).forEach((e => o[e] = () => t[e]));
          return o.default = () => t, E.d(a, o), a
        }, E.d = (e, t) => {
          for (var r in t) E.o(t, r) && !E.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: t[r]
          })
        }, E.f = {}, E.e = e => Promise.all(Object.keys(E.f).reduce(((t, r) => (E.f[r](e, t), t)), [])), E.u = e => "js/" + {
          16: "8901e6d10c174508741b133df8afa275",
          32: "2340391886e99a078cc177cdd5767a49",
          52: "4ec8e082d6b6048c6f47222ca138a81b",
          61: "cc40abc6155f8371466cec04f83794c6",
          88: "42da44e6bb96a5fae924d8a81fb60c0a",
          100: "2f096c7fdeebb3729957f33ec4654754",
          104: "794036c9433d6f124242399d511d9e12",
          120: "1a6edc079cf9f1ffc3ec8cccde0b9dd9",
          140: "690bb21b04b5a907d2b270e3feb622c1",
          144: "8364fb6a54d293a84d297a0004ae2043",
          168: "1c87ee834d9a79a955fce1f23f223a67",
          190: "85fd5ad2038f0c57756d0e57310c7548",
          228: "6e116db03e9d5293bc6a0bab083b02bf",
          236: "f49bc0f443708514ab6ccaca6d673e20",
          240: "289423f9a123b93dfc7064b1c8091431",
          276: "f5c71f16d64bd1e94974d990ef953817",
          283: "1402875ec04bd4d68cc1250c10e853b3",
          304: "452e1e922f04acd36e714ea5cc3fb5b0",
          312: "710a86eccf88906199bf9b0189dd9ec3",
          396: "f169e3f53fd9db766772ea288d05cdae",
          400: "4be025d9889e68866f678ab564cd35f9",
          408: "7596398fa4bf7a9e3a4988dbce29bf28",
          432: "6c928873e793b1373e798e80dc3cad0c",
          452: "809b55977e8dcb3d3380fad86dbbc19b",
          524: "121675fca6cec04eadd63baff635aef1",
          544: "3cb2ba062378c3cef33d85cb53eafdf2",
          560: "c4bf85c0806c30a2a80956632f63e5f8",
          584: "e28c611f27ac21cad258044dac1ae9ba",
          620: "7e0c635d85830ea1cc251abdb28a08bf",
          648: "1ab1624750b4b9197a6723626df54f8a",
          664: "3e4537f287ec9227bc06bb670e286551",
          676: "0f12cbd31be58f2f32883ec82d3d2ef8",
          690: "f0b9f746802e44698a80040befe15db1",
          696: "5a2fc38f28da0d1ca50b7e710f58dda5",
          700: "79f61f90bef05d811bf44402659981b2",
          708: "84e861ff48c75478c629c27ba5573800",
          716: "b5cecc776add696c47ec71426b5b1793",
          723: "1f8cd0a4a4edd1fb3cddc096784a96c9",
          735: "776d39a6096f45568c3a03057c310d67",
          792: "fabe0027b528847810002fd6caed4806",
          832: "e299cc8078a863f475346662dc273708",
          860: "b0b3f9deb028b7e05af3ee2043ee15bf",
          868: "8b5ca408150f4c9d2fe21a9539bc15df",
          895: "6a4f607e89597bad49be9b17cc231cbc",
          924: "908006d9416489b510de496efed83e0f",
          948: "1342cbf4ed3b12aef6d0c601c635cc97",
          952: "ea2a4efe67b95892dac502e4106dd3fc",
          968: "a6922562919f18b6f88975646f22a396"
        } [e] + ".js", E.miniCssF = e => "css/" + {
          52: "147e7681e4652c3ec756cd8cc50d2d22",
          104: "51b9cdcf8b169bf8a7dc734696321feb",
          400: "3842bc2be60b96e32d864a417fe42534",
          432: "147e7681e4652c3ec756cd8cc50d2d22",
          676: "5d422d2ffdab316e79fa5c9c0ecc2cc1",
          700: "a1491a2ef2207cd17b684c65851924b6"
        } [e] + ".css", E.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), E.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), _ = {}, w = "@rockstargames/sites-rockstargames:", E.l = (e, t, r, a) => {
          if (_[e]) _[e].push(t);
          else {
            var o, n;
            if (void 0 !== r)
              for (var s = document.getElementsByTagName("script"), c = 0; c < s.length; c++) {
                var f = s[c];
                if (f.getAttribute("src") == e || f.getAttribute("data-webpack") == w + r) {
                  o = f;
                  break
                }
              }
            o || (n = !0, (o = document.createElement("script")).charset = "utf-8", o.timeout = 120, E.nc && o.setAttribute("nonce", E.nc), o.setAttribute("data-webpack", w + r), o.src = e), _[e] = [t];
            var d = (t, r) => {
                o.onerror = o.onload = null, clearTimeout(i);
                var a = _[e];
                if (delete _[e], o.parentNode && o.parentNode.removeChild(o), a && a.forEach((e => e(r))), t) return t(r)
              },
              i = setTimeout(d.bind(null, void 0, {
                type: "timeout",
                target: o
              }), 12e4);
            o.onerror = d.bind(null, o.onerror), o.onload = d.bind(null, o.onload), n && document.head.appendChild(o)
          }
        }, E.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, E.nmd = e => (e.paths = [], e.children || (e.children = []), e), j = {
          61: [3061],
          120: [1740, 28540, 73784],
          140: [47140],
          190: [82190],
          396: [7396],
          544: [33052, 42836, 45792],
          620: [71620],
          676: [1532, 45652, 95356],
          690: [53690],
          700: [19548, 27864, 42132, 42708, 55120, 67308, 75016, 77715, 84644, 85092, 91336],
          708: [21708],
          735: [6735],
          832: [8832],
          868: [86868],
          952: [49952]
        }, O = {
          1532: ["default", "./operations/queries", 33864],
          1740: ["default", "./index", 88428],
          3061: ["default", "./hooks", 9344],
          6735: ["default", "./index", 93660],
          7396: ["default", "./index", 46924],
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
        }, E.f.remotes = (e, t) => {
          E.o(j, e) && j[e].forEach((e => {
            var r = E.R;
            r || (r = []);
            var a = O[e];
            if (!(r.indexOf(a) >= 0)) {
              if (r.push(a), a.p) return t.push(a.p);
              var o = t => {
                  t || (t = new Error("Container missing")), "string" == typeof t.message && (t.message += '\nwhile loading "' + a[1] + '" from ' + a[2]), E.m[e] = () => {
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
                  a.p = 1, E.m[e] = e => {
                    e.exports = t()
                  }
                };
              n(E, a[2], 0, 0, ((e, t, r) => e ? n(E.I, a[0], 0, e, s, r) : o()), 1)
            }
          }))
        }, (() => {
          E.S = {};
          var e = {},
            t = {};
          E.I = (r, a) => {
            a || (a = []);
            var o = t[r];
            if (o || (o = t[r] = {}), !(a.indexOf(o) >= 0)) {
              if (a.push(o), e[r]) return e[r];
              E.o(E.S, r) || (E.S[r] = {});
              var n = E.S[r],
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
                    var o = E(e);
                    if (!o) return;
                    var n = e => e && e.init && e.init(E.S[r], a);
                    if (o.then) return d.push(o.then(n, t));
                    var s = n(o);
                    if (s && s.then) return d.push(s.catch(t))
                  } catch (e) {
                    t(e)
                  }
                },
                d = [];
              return "default" === r && (c("@rockstargames/components", "1.14.0", (() => Promise.all([E.e(968), E.e(32), E.e(664), E.e(120), E.e(544), E.e(676), E.e(860)]).then((() => () => E(77444))))), c("@rockstargames/locale-tools", "1.0.0", (() => Promise.all([E.e(408), E.e(664), E.e(61), E.e(924)]).then((() => () => E(8304))))), c("@rockstargames/modules-core-screenshot-viewer", "1.1.2", (() => Promise.all([E.e(664), E.e(584), E.e(432)]).then((() => () => E(55432))))), c("@rockstargames/router", "1.0.0", (() => Promise.all([E.e(664), E.e(584), E.e(895)]).then((() => () => E(85276))))), c("dompurify", "2.4.7", (() => E.e(560).then((() => () => E(8560))))), c("framer-motion", "7.10.3", (() => Promise.all([E.e(648), E.e(664)]).then((() => () => E(57648))))), c("history", "4.10.1", (() => E.e(144).then((() => () => E(49144))))), c("react-dom", "18.2.0", (() => Promise.all([E.e(716), E.e(664)]).then((() => () => E(63716))))), c("react-focus-lock", "2.9.6", (() => Promise.all([E.e(968), E.e(312), E.e(664)]).then((() => () => E(90312))))), c("react-jsx-parser", "1.29.0", (() => Promise.all([E.e(696), E.e(664)]).then((() => () => E(94696))))), c("react-router-dom", "6.17.0", (() => Promise.all([E.e(168), E.e(452), E.e(664), E.e(16)]).then((() => () => E(84832))))), c("react-router-dom", "6.17.0", (() => Promise.all([E.e(168), E.e(283), E.e(664), E.e(16)]).then((() => () => E(93664))))), c("react-router-dom", "6.17.0", (() => Promise.all([E.e(168), E.e(723), E.e(664), E.e(228)]).then((() => () => E(82104))))), c("react-router", "6.17.0", (() => Promise.all([E.e(168), E.e(88), E.e(664)]).then((() => () => E(79088))))), c("react-router", "6.17.0", (() => Promise.all([E.e(168), E.e(524), E.e(664)]).then((() => () => E(34524))))), c("react", "18.2.0", (() => E.e(100).then((() => () => E(99480))))), f(9344), f(33864), f(81128), f(88428), f(50800), f(63314), f(25358), f(14472), f(26880), f(5576), f(3304), f(46924), f(44718), f(62996), f(48854), f(80510), f(36620), f(93660)), d.length ? e[r] = Promise.all(d).then((() => e[r] = 1)) : e[r] = 1
            }
          }
        })(), (() => {
          var e;
          E.g.importScripts && (e = E.g.location + "");
          var t = E.g.document;
          if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
            var r = t.getElementsByTagName("script");
            if (r.length)
              for (var a = r.length - 1; a > -1 && !e;) e = r[a--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), E.p = e
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
              var n = E.I(t);
              return n && n.then ? n.then(e.bind(e, t, E.S[t], r, a, o)) : e(t, E.S[t], r, a, o)
            })(((e, t, a, o, n) => {
              var s = t && E.o(t, a) && r(t, a, o);
              return s ? (e => (e.loaded = 1, e.get()))(s) : n()
            })),
            o = {},
            n = {
              51664: () => a("default", "react", [1, 18, 2, 0], (() => E.e(100).then((() => () => E(99480))))),
              9860: () => a("default", "@rockstargames/components", [1, "workspace:*"], (() => Promise.all([E.e(968), E.e(32), E.e(120), E.e(676)]).then((() => () => E(77444))))),
              41272: () => a("default", "@rockstargames/locale-tools", [1, "workspace:*"], (() => Promise.all([E.e(408), E.e(61), E.e(304)]).then((() => () => E(8304))))),
              36960: () => a("default", "react-focus-lock", [1, 2, 9, 6], (() => Promise.all([E.e(968), E.e(312)]).then((() => () => E(90312))))),
              50968: () => a("default", "framer-motion", [1, 7, 5, 1], (() => E.e(648).then((() => () => E(57648))))),
              57013: () => a("default", "react-router-dom", [1, 6, 11, 2], (() => Promise.all([E.e(168), E.e(452), E.e(16)]).then((() => () => E(84832))))),
              77364: () => a("default", "react-dom", [1, 18, 2, 0], (() => E.e(716).then((() => () => E(63716))))),
              89416: () => a("default", "dompurify", [1, 2, 4, 1], (() => E.e(560).then((() => () => E(8560))))),
              98584: () => a("default", "react-router-dom", [1, 6, 11, 2], (() => Promise.all([E.e(168), E.e(723), E.e(228)]).then((() => () => E(82104))))),
              10016: () => a("default", "react-router", [1, 6, 11, 2], (() => E.e(88).then((() => () => E(79088))))),
              13228: () => a("default", "react-router", [1, 6, 11, 2], (() => E.e(524).then((() => () => E(34524))))),
              33309: () => a("default", "react-jsx-parser", [1, 1, 29, 0], (() => E.e(696).then((() => () => E(94696))))),
              60328: () => a("default", "react-router-dom", [1, 6, 11, 2], (() => Promise.all([E.e(168), E.e(283), E.e(16)]).then((() => () => E(93664))))),
              77508: () => a("default", "history", [1, 5, 3, 0], (() => E.e(144).then((() => () => E(49144))))),
              81968: () => a("default", "@rockstargames/router", [1, "workspace:*"], (() => Promise.all([E.e(584), E.e(276)]).then((() => () => E(85276))))),
              5330: () => a("default", "@rockstargames/modules-core-screenshot-viewer", [1, "workspace:*"], (() => Promise.all([E.e(584), E.e(52)]).then((() => () => E(55432)))))
            },
            s = {
              16: [10016],
              120: [36960, 50968, 57013, 77364, 89416],
              228: [13228],
              544: [9860, 41272],
              584: [98584],
              664: [51664],
              700: [33309, 60328, 77508, 81968],
              948: [5330]
            },
            c = {};
          E.f.consumes = (e, t) => {
            E.o(s, e) && s[e].forEach((e => {
              if (E.o(o, e)) return t.push(o[e]);
              if (!c[e]) {
                var r = t => {
                  o[e] = 0, E.m[e] = r => {
                    delete E.c[e], r.exports = t()
                  }
                };
                c[e] = !0;
                var a = t => {
                  delete o[e], E.m[e] = r => {
                    throw delete E.c[e], t
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
            E.f.miniCss = (t, r) => {
              e[t] ? r.push(e[t]) : 0 !== e[t] && {
                52: 1,
                104: 1,
                400: 1,
                432: 1,
                676: 1,
                700: 1
              } [t] && r.push(e[t] = (e => new Promise(((t, r) => {
                var a = E.miniCssF(e),
                  o = E.p + a;
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
          E.f.j = (t, r) => {
            var a = E.o(e, t) ? e[t] : void 0;
            if (0 !== a)
              if (a) r.push(a[2]);
              else if (/^(1([249]0|6)|6(1|20|64|90)|(22|70|86|94)8|396|544|584|735|832|952)$/.test(t)) e[t] = 0;
            else {
              var o = new Promise(((r, o) => a = e[t] = [r, o]));
              r.push(a[2] = o);
              var n = E.p + E.u(t),
                s = new Error;
              E.l(n, (r => {
                if (E.o(e, t) && (0 !== (a = e[t]) && (e[t] = void 0), a)) {
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
                for (a in s) E.o(s, a) && (E.m[a] = s[a]);
                c && c(E)
              }
              for (t && t(r); f < n.length; f++) o = n[f], E.o(e, o) && e[o] && e[o][0](), e[o] = 0
            },
            r = self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || [];
          r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
        })(), E.nc = void 0, E(93824), E(30650)
      })())
    }
  }
}));