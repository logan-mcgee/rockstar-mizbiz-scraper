! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "4b10932b-25dc-4d5e-904d-335f4b20cb39", e._sentryDebugIdIdentifier = "sentry-dbid-4b10932b-25dc-4d5e-904d-335f4b20cb39")
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
    l = {},
    u = {},
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
  }), Object.defineProperty(l, "__esModule", {
    value: !0
  }), Object.defineProperty(u, "__esModule", {
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
        l[t] = e[t]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(t) {
        u[t] = e[t]
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
        var e, k, _, w, j, O, P = {
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
              e.exports = l
            },
            48854: e => {
              "use strict";
              e.exports = u
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
          x = {};

        function E(e) {
          var t = x[e];
          if (void 0 !== t) return t.exports;
          var r = x[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return P[e].call(r.exports, r, r.exports, E), r.loaded = !0, r.exports
        }
        return E.m = P, E.c = x, E.y = t, E.amdO = {}, E.n = e => {
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
          104: "d370dcd8f978bcfd71d415618e7cd235",
          312: "eff6420ad446e54a432b1588739f5e4b",
          708: "d63f952b87f2f43d9a22468ad9ce2773",
          1620: "0b39d532f92c0692a1ce643d5778d468",
          1664: "d757a75ff226f5a9698f2fd9212880b3",
          1708: "a9b7c1818ffadde4c46fefe70e7e9e37",
          2104: "765a374b9bdfd7de5e792030d9434c37",
          2176: "f0d9b0c5730467afa3e41492cb8fcbc7",
          2190: "702c06768ac87ff85af694db9e79a7aa",
          2307: "d22d1cad4e77a7e745d7672b543598f8",
          2860: "7155fa4fee025286ddd7fb2fd92f1225",
          2895: "7f2a57d50ed23f10436d4c51504e810c",
          2948: "3736be97210dea11a857f9a1ee63920b",
          3052: "b88967dfe46556f9d656846b19fd5b68",
          3061: "401d7ba21656e1349b0a3b305e688fe4",
          3168: "39ee74c619d8a0fcf927dd0c516d4673",
          3228: "88d98f25bfca587f1049311711230eb4",
          3664: "fe6a3cf01e8ac2636e78f5bd9f6f898d",
          3690: "8d97f1a5b0e5c9190aa33b024acb952f",
          3716: "60f706a49561f2ed92aba3bb330d65ac",
          3924: "9b773480b9533fa53e4a40f5d1bc40b1",
          4524: "0e8859514e1206c23da30629abe55c45",
          4832: "7ebef93ceb7d681778821ace50993993",
          4848: "33b76c46ce07539ffc486f3dc36f43d2",
          5240: "36aff96088a688504a2d5adc65522b68",
          5272: "581fbb0602cf73979371cae651a54a81",
          5276: "1dc8958daf73e79619ad0cf38992cd8e",
          5400: "e44efb4e1d4d59c01c5233550f65a860",
          5432: "abef91ba0197eb7f8e746fe339ed8e96",
          5924: "1e858d0a62fd50a41a7e5dfc3430254f",
          6236: "d67ff811433fce728e509342dbe9a8ae",
          6735: "bccaf36a98b07341aab6259ea0bcf7bc",
          6764: "632fdac051694fa5d0bcbfc0a52dcacd",
          6868: "ae43b5913a4c6da2700c4e39190d8204",
          6872: "cb55115b3b2664dd4b61f3c9e87f1e9e",
          7084: "86acd2d885064d38e5bb95abbeb5f0e8",
          7100: "96c6852b4e5b4e24fa1c97920213def9",
          7140: "867913e02207c6232f2ad7c283a8d517",
          7396: "136bce1c18c2627521827d40fb1a925a",
          7648: "b87108f8104898202eb003bc8fe426fe",
          8092: "6d8315717690d98246d2fb205dec3bf6",
          8304: "15528773259c01b9445cd7e9f4c41f9e",
          8488: "22dab72372e89e710d967f05623d134e",
          8560: "bba910b37c49c1f8b50d2be6bf7bc570",
          8584: "fde960cb1dbd5b7f5fd0ef99d3eeb1d4",
          8832: "438b546c389f1ac498dbef699f16e330",
          9088: "84b5bd1c77de2a45f79ef8f6727a0d5a",
          9144: "39649873157bc1d7667084bab5c8baaa",
          9408: "0561909a77dcf8da9906e01b561c5188",
          9440: "5ccd055d267e63231e9b01db395f0926",
          9464: "fd09a97ac5176dfd29f169946ed33864",
          9952: "3cb477d287e7a0636139a1ed1c67416d",
          9968: "d438de9f9e91ecfd6e8724e47d36ded1"
        } [e] + ".js", E.miniCssF = e => "css/" + {
          104: "155d11ab836e7fde3eb6b51946544369",
          3052: "147e7681e4652c3ec756cd8cc50d2d22",
          4848: "7fb66004b78740a79e6ff9fac36a6200",
          5400: "94c46fd080b8a39a934e5c0c326f83f3",
          5432: "147e7681e4652c3ec756cd8cc50d2d22",
          7084: "a2ed73535f946736c217c6a045f39877",
          8488: "2331442915f4be02dd7a76b8ac4ede98",
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
          8488: [1740, 28540, 45652, 73784, 95356],
          8832: [8832],
          9952: [49952]
        }, O = {
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
              return "default" === r && (c("@foundry/theme", "1.4.2", (() => Promise.all([E.e(7084), E.e(1664), E.e(5272), E.e(2307)]).then((() => () => E(85272))))), c("@rockstargames/components", "1.14.0", (() => Promise.all([E.e(8092), E.e(9440), E.e(1664), E.e(8488), E.e(3924), E.e(2860)]).then((() => () => E(61044))))), c("@rockstargames/locale-tools", "1.0.0", (() => Promise.all([E.e(8092), E.e(9408), E.e(1664), E.e(3061), E.e(5924)]).then((() => () => E(8304))))), c("@rockstargames/modules-core-screenshot-viewer", "1.1.2", (() => Promise.all([E.e(1664), E.e(8584), E.e(5432)]).then((() => () => E(55432))))), c("@rockstargames/router", "1.0.0", (() => Promise.all([E.e(1664), E.e(8584), E.e(2895)]).then((() => () => E(85276))))), c("dompurify", "2.4.7", (() => E.e(8560).then((() => () => E(8560))))), c("framer-motion", "7.10.3", (() => Promise.all([E.e(7648), E.e(1664), E.e(2176)]).then((() => () => E(57648))))), c("history", "4.10.1", (() => E.e(6764).then((() => () => E(49144))))), c("react-dom", "18.2.0", (() => Promise.all([E.e(3716), E.e(1664)]).then((() => () => E(63716))))), c("react-focus-lock", "2.9.6", (() => Promise.all([E.e(312), E.e(1664), E.e(9968)]).then((() => () => E(90312))))), c("react-jsx-parser", "1.29.0", (() => Promise.all([E.e(1664), E.e(708)]).then((() => () => E(70708))))), c("react-router-dom", "6.17.0", (() => Promise.all([E.e(3168), E.e(4832), E.e(1664), E.e(16)]).then((() => () => E(84832))))), c("react-router-dom", "6.17.0", (() => Promise.all([E.e(3168), E.e(3664), E.e(1664), E.e(16)]).then((() => () => E(93664))))), c("react-router-dom", "6.17.0", (() => Promise.all([E.e(3168), E.e(2104), E.e(1664), E.e(3228)]).then((() => () => E(82104))))), c("react-router", "6.17.0", (() => Promise.all([E.e(3168), E.e(9088), E.e(1664)]).then((() => () => E(79088))))), c("react-router", "6.17.0", (() => Promise.all([E.e(3168), E.e(4524), E.e(1664)]).then((() => () => E(34524))))), c("react", "18.2.0", (() => E.e(7100).then((() => () => E(99480))))), f(9344), f(33864), f(81128), f(88428), f(50800), f(63314), f(25358), f(14472), f(26880), f(5576), f(3304), f(46924), f(44718), f(62996), f(48854), f(80510), f(36620), f(93660)), d.length ? e[r] = Promise.all(d).then((() => e[r] = 1)) : e[r] = 1
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
                  var d, i, l = c < r.length ? (typeof r[c])[0] : "";
                  if (s >= a.length || "o" == (i = (typeof(d = a[s]))[0])) return !f || ("u" == l ? c > o && !n : "" == l != n);
                  if ("u" == i) {
                    if (!f || "u" != l) return !1
                  } else if (f)
                    if (l == i)
                      if (c <= o) {
                        if (d != r[c]) return !1
                      } else {
                        if (n ? d > r[c] : d < r[c]) return !1;
                        d != r[c] && (f = !1)
                      }
                  else if ("s" != l && "n" != l) {
                    if (n || c <= o) return !1;
                    f = !1, c--
                  } else {
                    if (c <= o || i < l != n) return !1;
                    f = !1
                  } else "s" != l && "n" != l && (f = !1, c--)
                }
              }
              var u = [],
                b = u.pop.bind(u);
              for (s = 1; s < r.length; s++) {
                var p = r[s];
                u.push(1 == p ? b() | b() : 2 == p ? b() & b() : p ? t(p, a) : !b())
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
              51664: () => a("default", "react", [1, 18, 2, 0], (() => E.e(7100).then((() => () => E(99480))))),
              9860: () => a("default", "@rockstargames/components", [1, "workspace:*"], (() => Promise.all([E.e(8092), E.e(9440), E.e(8488)]).then((() => () => E(61044))))),
              41272: () => a("default", "@rockstargames/locale-tools", [1, "workspace:*"], (() => Promise.all([E.e(8092), E.e(9408), E.e(3061), E.e(8304)]).then((() => () => E(8304))))),
              36960: () => a("default", "react-focus-lock", [1, 2, 9, 6], (() => E.e(312).then((() => () => E(90312))))),
              50968: () => a("default", "framer-motion", [1, 7, 5, 1], (() => E.e(7648).then((() => () => E(57648))))),
              57013: () => a("default", "react-router-dom", [1, 6, 11, 2], (() => Promise.all([E.e(3168), E.e(4832), E.e(16)]).then((() => () => E(84832))))),
              77364: () => a("default", "react-dom", [1, 18, 2, 0], (() => E.e(3716).then((() => () => E(63716))))),
              89416: () => a("default", "dompurify", [1, 2, 4, 1], (() => E.e(8560).then((() => () => E(8560))))),
              98584: () => a("default", "react-router-dom", [1, 6, 11, 2], (() => Promise.all([E.e(3168), E.e(2104), E.e(3228)]).then((() => () => E(82104))))),
              10016: () => a("default", "react-router", [1, 6, 11, 2], (() => E.e(9088).then((() => () => E(79088))))),
              13228: () => a("default", "react-router", [1, 6, 11, 2], (() => E.e(4524).then((() => () => E(34524))))),
              60328: () => a("default", "react-router-dom", [1, 6, 11, 2], (() => Promise.all([E.e(3168), E.e(3664), E.e(16)]).then((() => () => E(93664))))),
              68196: () => a("default", "@foundry/theme", [1, 1, 4, 2], (() => Promise.all([E.e(5272), E.e(9464)]).then((() => () => E(85272))))),
              69460: () => a("default", "react-jsx-parser", [1, "workspace:*"], (() => E.e(708).then((() => () => E(70708))))),
              77508: () => a("default", "history", [1, 5, 3, 0], (() => E.e(9144).then((() => () => E(49144))))),
              81968: () => a("default", "@rockstargames/router", [1, "workspace:*"], (() => Promise.all([E.e(8584), E.e(5276)]).then((() => () => E(85276))))),
              5330: () => a("default", "@rockstargames/modules-core-screenshot-viewer", [1, "workspace:*"], (() => Promise.all([E.e(8584), E.e(3052)]).then((() => () => E(55432)))))
            },
            s = {
              16: [10016],
              1664: [51664],
              2948: [5330],
              3228: [13228],
              3924: [9860, 41272],
              4848: [60328, 68196, 69460, 77508, 81968],
              8488: [36960, 50968, 57013, 77364, 89416],
              8584: [98584]
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
                104: 1,
                3052: 1,
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
              else if (/^(1(6(|20|64)|708)|3(061|228|690|924)|7(084|140|396)|2190|2948|6735|6868|8584|8832|9464|9952)$/.test(t)) e[t] = 0;
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