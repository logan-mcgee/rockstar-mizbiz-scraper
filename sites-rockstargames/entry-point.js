! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "1fff9189-7fa0-476a-9ae6-708b3da668da", e._sentryDebugIdIdentifier = "sentry-dbid-1fff9189-7fa0-476a-9ae6-708b3da668da")
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
    c = {},
    s = {},
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
  }), Object.defineProperty(c, "__esModule", {
    value: !0
  }), Object.defineProperty(s, "__esModule", {
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
        c[t] = e[t]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(t) {
        s[t] = e[t]
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
                var c = a.slice(0, n + 1);
                return r.protocol + "//" + r.host + c
              };
              Number.isInteger
            },
            30650: (e, t, r) => {
              "use strict";
              var a = {
                  "./bootstrap": () => r.e(6236).then((() => () => r(46236))),
                  "./components": () => Promise.all([r.e(1664), r.e(3061), r.e(3924), r.e(104), r.e(5240)]).then((() => () => r(20104)))
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
              e.exports = c
            },
            81128: e => {
              "use strict";
              e.exports = s
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
          104: "3f3470ce7032c14341dfdfae965c040b",
          312: "3d7140f5868175d5f251e9a1c8048007",
          708: "349b987d4927349b24fe3c0ac71f7f2a",
          1620: "0b39d532f92c0692a1ce643d5778d468",
          1664: "d757a75ff226f5a9698f2fd9212880b3",
          1708: "a9b7c1818ffadde4c46fefe70e7e9e37",
          2104: "13c8178bff0b2561a52e41f5017621a6",
          2176: "28ba88375df69d4b8475086ed6081b58",
          2190: "702c06768ac87ff85af694db9e79a7aa",
          2307: "a8c408e47ec5a2b77b269b7be1840cf5",
          2860: "d063fc072ba7a8eb60f0c05b5b0970b2",
          2895: "1bccca9bcd5c9074044538c3f837b872",
          2948: "3736be97210dea11a857f9a1ee63920b",
          3052: "e8b8c08a51381a87d168c56130af7b4b",
          3061: "401d7ba21656e1349b0a3b305e688fe4",
          3168: "22ec539ba1fa3e97166be160b574089b",
          3228: "88d98f25bfca587f1049311711230eb4",
          3664: "49fa24dd8b8b4bc1afa5066173651bc7",
          3690: "8d97f1a5b0e5c9190aa33b024acb952f",
          3716: "a540182f1cbbf56587560bfea562162e",
          3924: "9b773480b9533fa53e4a40f5d1bc40b1",
          4268: "4f36a9387a19565557fbdad1717c89c7",
          4524: "37c5255581b6c6db448862899d2b9b0c",
          4832: "9a440c0be2a298930f47aae96d0f9dd0",
          4848: "fb8eda229077098e4fc28fbecc5a7c74",
          5240: "4990de73d64ceb1ff90b5389ddd12d26",
          5272: "c19ae879961901fe8dc5ea8c845f7f4b",
          5276: "71a8a9bb3a91722ab174e86ccbabedb6",
          5400: "d4c4e07adf3b827a4f60e4a5b4e650d5",
          5432: "30121ca303a10f44bd2c5480cde5f789",
          5924: "35b62086656dadbf5d99783e9fd5d97d",
          6236: "edeab2516d435c91c54c5912f985ae69",
          6735: "bccaf36a98b07341aab6259ea0bcf7bc",
          6764: "f637a84d52e0947064149c75f7246c13",
          6868: "ae43b5913a4c6da2700c4e39190d8204",
          6872: "3d08cf54fa78019b7f3a550b78d02364",
          7084: "86acd2d885064d38e5bb95abbeb5f0e8",
          7100: "27590ea7e28ee07fad5e0789cfee1eda",
          7140: "867913e02207c6232f2ad7c283a8d517",
          7396: "136bce1c18c2627521827d40fb1a925a",
          7648: "947e672c986a4159312d4b7c6233802a",
          8092: "168886e54f867fccc28ada7268f26186",
          8304: "e48f9143f33f91790273474ff118163e",
          8488: "06847a8833bac12f4e69fa4745bdbeff",
          8560: "c85bfad7bad8baeeb22d575f0752c3e6",
          8584: "fde960cb1dbd5b7f5fd0ef99d3eeb1d4",
          8832: "438b546c389f1ac498dbef699f16e330",
          9088: "42a43ae7c4f834ddfd8879ad51cde545",
          9144: "6cf02a675a9809b99a2069a7e904eaa0",
          9408: "1a3e0462e64d6fc11d26d9263eb811c0",
          9464: "fd09a97ac5176dfd29f169946ed33864",
          9640: "9f4ee0706352df899acdb4f845a4daf7",
          9952: "3cb477d287e7a0636139a1ed1c67416d",
          9968: "90bba51f935562d5314b3ea51092f330"
        } [e] + ".js", E.miniCssF = e => "css/" + {
          104: "51b9cdcf8b169bf8a7dc734696321feb",
          3052: "147e7681e4652c3ec756cd8cc50d2d22",
          4268: "99df8002ac4dfabc31414fcbef9c06c7",
          4848: "884c3da9e8081819e7229f9dd9e2a9b3",
          5400: "37206e8892d6e18630cd568d55c80e28",
          5432: "147e7681e4652c3ec756cd8cc50d2d22",
          7084: "a2ed73535f946736c217c6a045f39877",
          8488: "82448699d7cd2f114384e3386a3005dd",
          9464: "a2ed73535f946736c217c6a045f39877"
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
              for (var c = document.getElementsByTagName("script"), s = 0; s < c.length; s++) {
                var f = c[s];
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
          1620: [71620],
          1708: [21708],
          2190: [82190],
          3061: [3061],
          3690: [53690],
          3924: [33052, 42836, 45792],
          4848: [19548, 27864, 42132, 42708, 53264, 55120, 75016, 77715, 84644, 85092, 91336],
          6735: [6735],
          6868: [86868],
          7140: [47140],
          7396: [7396],
          8488: [1532, 1740, 28540, 45652, 73784, 95356],
          8832: [8832],
          9952: [49952]
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
          53264: ["default", "./operations/fragments/video2-fields.graphql", 33864],
          53690: ["default", "./lazy", 5576],
          55120: ["default", "./messages", 50800],
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
                n = (e, r, n, c, s, f) => {
                  try {
                    var d = e(r, n);
                    if (!d || !d.then) return s(d, c, f);
                    var i = d.then((e => s(e, c)), o);
                    if (!f) return i;
                    t.push(a.p = i)
                  } catch (e) {
                    o(e)
                  }
                },
                c = (e, t, o) => n(t.get, a[1], r, 0, s, o),
                s = t => {
                  a.p = 1, E.m[e] = e => {
                    e.exports = t()
                  }
                };
              n(E, a[2], 0, 0, ((e, t, r) => e ? n(E.I, a[0], 0, e, c, r) : o()), 1)
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
                c = "@rockstargames/sites-rockstargames",
                s = (e, t, r, a) => {
                  var o = n[e] = n[e] || {},
                    s = o[t];
                  (!s || !s.loaded && (!a != !s.eager ? a : c > s.from)) && (o[t] = {
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
                    var o = E(e);
                    if (!o) return;
                    var n = e => e && e.init && e.init(E.S[r], a);
                    if (o.then) return d.push(o.then(n, t));
                    var c = n(o);
                    if (c && c.then) return d.push(c.catch(t))
                  } catch (e) {
                    t(e)
                  }
                },
                d = [];
              return "default" === r && (s("@foundry/theme", "1.4.2", (() => Promise.all([E.e(7084), E.e(1664), E.e(5272), E.e(2307)]).then((() => () => E(85272))))), s("@rockstargames/components", "1.14.0", (() => Promise.all([E.e(8092), E.e(4268), E.e(1664), E.e(8488), E.e(3924), E.e(2860)]).then((() => () => E(61044))))), s("@rockstargames/locale-tools", "1.0.0", (() => Promise.all([E.e(8092), E.e(9408), E.e(1664), E.e(3061), E.e(5924)]).then((() => () => E(8304))))), s("@rockstargames/modules-core-screenshot-viewer", "1.1.2", (() => Promise.all([E.e(1664), E.e(8584), E.e(5432)]).then((() => () => E(55432))))), s("@rockstargames/router", "1.0.0", (() => Promise.all([E.e(1664), E.e(8584), E.e(2895)]).then((() => () => E(85276))))), s("dompurify", "2.4.7", (() => E.e(8560).then((() => () => E(8560))))), s("framer-motion", "7.10.3", (() => Promise.all([E.e(7648), E.e(1664), E.e(2176)]).then((() => () => E(57648))))), s("history", "4.10.1", (() => E.e(6764).then((() => () => E(49144))))), s("react-dom", "18.2.0", (() => Promise.all([E.e(3716), E.e(1664)]).then((() => () => E(63716))))), s("react-focus-lock", "2.9.6", (() => Promise.all([E.e(312), E.e(1664), E.e(9968)]).then((() => () => E(90312))))), s("react-jsx-parser", "1.29.0", (() => E.e(708).then((() => () => E(70708))))), s("react-router-dom", "6.17.0", (() => Promise.all([E.e(3168), E.e(4832), E.e(1664), E.e(16)]).then((() => () => E(84832))))), s("react-router-dom", "6.17.0", (() => Promise.all([E.e(3168), E.e(3664), E.e(1664), E.e(16)]).then((() => () => E(93664))))), s("react-router-dom", "6.17.0", (() => Promise.all([E.e(3168), E.e(2104), E.e(1664), E.e(3228)]).then((() => () => E(82104))))), s("react-router", "6.17.0", (() => Promise.all([E.e(3168), E.e(9088), E.e(1664)]).then((() => () => E(79088))))), s("react-router", "6.17.0", (() => Promise.all([E.e(3168), E.e(4524), E.e(1664)]).then((() => () => E(34524))))), s("react", "16.14.0", (() => E.e(9640).then((() => () => E(89640))))), s("react", "18.2.0", (() => E.e(7100).then((() => () => E(99480))))), f(9344), f(33864), f(81128), f(88428), f(50800), f(63314), f(25358), f(14472), f(26880), f(5576), f(3304), f(46924), f(44718), f(62996), f(48854), f(80510), f(36620), f(93660)), d.length ? e[r] = Promise.all(d).then((() => e[r] = 1)) : e[r] = 1
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
                for (var c = 0, s = 1, f = !0;; s++, c++) {
                  var d, i, u = s < r.length ? (typeof r[s])[0] : "";
                  if (c >= a.length || "o" == (i = (typeof(d = a[c]))[0])) return !f || ("u" == u ? s > o && !n : "" == u != n);
                  if ("u" == i) {
                    if (!f || "u" != u) return !1
                  } else if (f)
                    if (u == i)
                      if (s <= o) {
                        if (d != r[s]) return !1
                      } else {
                        if (n ? d > r[s] : d < r[s]) return !1;
                        d != r[s] && (f = !1)
                      }
                  else if ("s" != u && "n" != u) {
                    if (n || s <= o) return !1;
                    f = !1, s--
                  } else {
                    if (s <= o || i < u != n) return !1;
                    f = !1
                  } else "s" != u && "n" != u && (f = !1, s--)
                }
              }
              var l = [],
                b = l.pop.bind(l);
              for (c = 1; c < r.length; c++) {
                var p = r[c];
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
                  var c = r[a],
                    s = (typeof c)[0];
                  if (n != s) return "o" == n && "n" == s || "s" == s || "u" == n;
                  if ("o" != n && "u" != n && o != c) return o < c;
                  a++
                }
              })(r, a) ? r : a), 0)) && n[a]
            },
            a = (e => function(t, r, a, o) {
              var n = E.I(t);
              return n && n.then ? n.then(e.bind(e, t, E.S[t], r, a, o)) : e(t, E.S[t], r, a, o)
            })(((e, t, a, o, n) => {
              var c = t && E.o(t, a) && r(t, a, o);
              return c ? (e => (e.loaded = 1, e.get()))(c) : n()
            })),
            o = {},
            n = {
              51664: () => a("default", "react", [1, 18, 2, 0], (() => E.e(7100).then((() => () => E(99480))))),
              9860: () => a("default", "@rockstargames/components", [1, "workspace:*"], (() => Promise.all([E.e(8092), E.e(4268), E.e(8488)]).then((() => () => E(61044))))),
              41272: () => a("default", "@rockstargames/locale-tools", [1, "workspace:*"], (() => Promise.all([E.e(8092), E.e(9408), E.e(3061), E.e(8304)]).then((() => () => E(8304))))),
              36960: () => a("default", "react-focus-lock", [1, 2, 9, 6], (() => E.e(312).then((() => () => E(90312))))),
              50968: () => a("default", "framer-motion", [1, 7, 5, 1], (() => E.e(7648).then((() => () => E(57648))))),
              57013: () => a("default", "react-router-dom", [1, 6, 11, 2], (() => Promise.all([E.e(3168), E.e(4832), E.e(16)]).then((() => () => E(84832))))),
              77364: () => a("default", "react-dom", [1, 18, 2, 0], (() => E.e(3716).then((() => () => E(63716))))),
              89416: () => a("default", "dompurify", [1, 2, 4, 1], (() => E.e(8560).then((() => () => E(8560))))),
              98584: () => a("default", "react-router-dom", [1, 6, 11, 2], (() => Promise.all([E.e(3168), E.e(2104), E.e(3228)]).then((() => () => E(82104))))),
              92548: () => a("default", "react", [1, 18, 2, 0], (() => E.e(9640).then((() => () => E(89640))))),
              10016: () => a("default", "react-router", [1, 6, 11, 2], (() => E.e(9088).then((() => () => E(79088))))),
              13228: () => a("default", "react-router", [1, 6, 11, 2], (() => E.e(4524).then((() => () => E(34524))))),
              60328: () => a("default", "react-router-dom", [1, 6, 11, 2], (() => Promise.all([E.e(3168), E.e(3664), E.e(16)]).then((() => () => E(93664))))),
              68196: () => a("default", "@foundry/theme", [1, 1, 4, 2], (() => Promise.all([E.e(5272), E.e(9464)]).then((() => () => E(85272))))),
              69460: () => a("default", "react-jsx-parser", [1, "workspace:*"], (() => E.e(708).then((() => () => E(70708))))),
              77508: () => a("default", "history", [1, 5, 3, 0], (() => E.e(9144).then((() => () => E(49144))))),
              81968: () => a("default", "@rockstargames/router", [1, "workspace:*"], (() => Promise.all([E.e(8584), E.e(5276)]).then((() => () => E(85276))))),
              5330: () => a("default", "@rockstargames/modules-core-screenshot-viewer", [1, "workspace:*"], (() => Promise.all([E.e(8584), E.e(3052)]).then((() => () => E(55432)))))
            },
            c = {
              16: [10016],
              708: [92548],
              1664: [51664],
              2948: [5330],
              3228: [13228],
              3924: [9860, 41272],
              4848: [60328, 68196, 69460, 77508, 81968],
              8488: [36960, 50968, 57013, 77364, 89416],
              8584: [98584]
            },
            s = {};
          E.f.consumes = (e, t) => {
            E.o(c, e) && c[e].forEach((e => {
              if (E.o(o, e)) return t.push(o[e]);
              if (!s[e]) {
                var r = t => {
                  o[e] = 0, E.m[e] = r => {
                    delete E.c[e], r.exports = t()
                  }
                };
                s[e] = !0;
                var a = t => {
                  delete o[e], E.m[e] = r => {
                    throw delete E.c[e], t
                  }
                };
                try {
                  var c = n[e]();
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
              536: 0
            };
            E.f.miniCss = (t, r) => {
              e[t] ? r.push(e[t]) : 0 !== e[t] && {
                104: 1,
                3052: 1,
                4268: 1,
                4848: 1,
                5400: 1,
                5432: 1,
                7084: 1,
                8488: 1,
                9464: 1
              } [t] && r.push(e[t] = (e => new Promise(((t, r) => {
                var a = E.miniCssF(e),
                  o = E.p + a;
                if (((e, t) => {
                    for (var r = document.getElementsByTagName("link"), a = 0; a < r.length; a++) {
                      var o = (c = r[a]).getAttribute("data-href") || c.getAttribute("href");
                      if ("stylesheet" === c.rel && (o === e || o === t)) return c
                    }
                    var n = document.getElementsByTagName("style");
                    for (a = 0; a < n.length; a++) {
                      var c;
                      if ((o = (c = n[a]).getAttribute("data-href")) === e || o === t) return c
                    }
                  })(a, o)) return t();
                ((e, t, r, a, o) => {
                  var n = document.createElement("link");
                  n.rel = "stylesheet", n.type = "text/css", n.onerror = n.onload = r => {
                    if (n.onerror = n.onload = null, "load" === r.type) a();
                    else {
                      var c = r && ("load" === r.type ? "missing" : r.type),
                        s = r && r.target && r.target.href || t,
                        f = new Error("Loading CSS chunk " + e + " failed.\n(" + s + ")");
                      f.code = "CSS_CHUNK_LOAD_FAILED", f.type = c, f.request = s, n.parentNode && n.parentNode.removeChild(n), o(f)
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
              else if (/^(1(6(|20|64)|708)|3(061|228|690|924)|7(084|140|396)|2190|2948|6735|6868|8584|8832|9464|9952)$/.test(t)) e[t] = 0;
            else {
              var o = new Promise(((r, o) => a = e[t] = [r, o]));
              r.push(a[2] = o);
              var n = E.p + E.u(t),
                c = new Error;
              E.l(n, (r => {
                if (E.o(e, t) && (0 !== (a = e[t]) && (e[t] = void 0), a)) {
                  var o = r && ("load" === r.type ? "missing" : r.type),
                    n = r && r.target && r.target.src;
                  c.message = "Loading chunk " + t + " failed.\n(" + o + ": " + n + ")", c.name = "ChunkLoadError", c.type = o, c.request = n, a[1](c)
                }
              }), "chunk-" + t, t)
            }
          };
          var t = (t, r) => {
              var a, o, n = r[0],
                c = r[1],
                s = r[2],
                f = 0;
              if (n.some((t => 0 !== e[t]))) {
                for (a in c) E.o(c, a) && (E.m[a] = c[a]);
                s && s(E)
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