! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "20f23505-b000-4f41-9fb3-3a710f24c53b", e._sentryDebugIdIdentifier = "sentry-dbid-20f23505-b000-4f41-9fb3-3a710f24c53b")
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
                for (var a = "/" === r.pathname[0] ? r.pathname : "/" + r.pathname, o = 0, n = a.length; o !== t && n >= 0;) "/" === a[--n] && o++;
                if (o !== t) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + t + ") is greater than the number of directories (" + o + ") in the URL path " + e);
                var c = a.slice(0, n + 1);
                return r.protocol + "//" + r.host + c
              };
              Number.isInteger
            },
            4500: (e, t, r) => {
              "use strict";
              var a = {
                  "./bootstrap": () => r.e(8837).then((() => () => r(8837))),
                  "./components": () => Promise.all([r.e(1403), r.e(396), r.e(8712), r.e(6632)]).then((() => () => r(18712)))
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
            39247: e => {
              "use strict";
              e.exports = n
            },
            66819: e => {
              "use strict";
              e.exports = c
            },
            60404: e => {
              "use strict";
              e.exports = s
            },
            25136: e => {
              "use strict";
              e.exports = f
            },
            98674: e => {
              "use strict";
              e.exports = d
            },
            71127: e => {
              "use strict";
              e.exports = i
            },
            11955: e => {
              "use strict";
              e.exports = u
            },
            58678: e => {
              "use strict";
              e.exports = l
            },
            94316: e => {
              "use strict";
              e.exports = b
            },
            40308: e => {
              "use strict";
              e.exports = p
            },
            40041: e => {
              "use strict";
              e.exports = h
            },
            50644: e => {
              "use strict";
              e.exports = m
            },
            74251: e => {
              "use strict";
              e.exports = g
            },
            99466: e => {
              "use strict";
              e.exports = y
            },
            92969: e => {
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
          109: "af0e357ba41f76c76d5071367637a6c6",
          339: "1164f84e8d0b9c9aff97f2fa98c24429",
          396: "f169e3f53fd9db766772ea288d05cdae",
          621: "dc47c13cefbdf7acf2b862875cd9ff1e",
          665: "6b6d3a10c159c396f75e85184cefe542",
          1171: "f39daed231865d33c466f91686affecb",
          1403: "97b020b692b3bc7b293f0e1a70e0dc4d",
          1626: "1a821a20005818702c8126fb54dfe381",
          1689: "7debcbc058dedbbd6354f902b0c1c3f2",
          2366: "0040b2b55bae5987cf4d93409b6688d2",
          2405: "08dc736e9035acae4fb2cc1580ebe72e",
          2889: "8080567e19ad20228682b7522495e947",
          2956: "8f88fa1d56244970b8eef1e5e38937f2",
          3002: "fb3846d439f97a82d429e178a78bfdfb",
          3043: "5698f865daf1ad7135a32f4373a513bd",
          3127: "8a7c8fb55d53c07603bfc1ac18c1147d",
          3137: "6fad3aa841b61d020d8713acb0bd6e50",
          3326: "e53eed7d550374046f58ab329d0afa7e",
          3380: "5b2634190a3ac8b4b71605d8add2939b",
          3416: "36a0de19a237e068064bcd21fd3accf3",
          4001: "62cb88cbdc5b21497bade28f48c56e15",
          4007: "7c73427b451d6f5603208356c7252d36",
          4105: "5183fad0d564afa6c4af8dd8a4197ca6",
          4143: "893dd4aea0657555a4009dc4e1786186",
          4410: "a04b21ece4259e5916b47e5d38169442",
          5033: "a690a6bc341f4fd410749ef4cf96081d",
          5238: "c71cc5b4a10a39a31e51647334fb1ea2",
          5261: "7ca6dade9f6982dc69128da75e60ef25",
          5595: "e04ee7dd3b09cedf1f467bd871946583",
          5749: "405bcfa7ebd27d597324f90e21992a60",
          5933: "0ce185ebe85b63759149a269d94de30a",
          6008: "a0ac9526dbe944640a690b000c5d6221",
          6388: "714533f969b065dd0c2890f1443db7d5",
          6524: "34e7c2f4d694002361b3c36d95f1f468",
          6632: "f455e614266100e807863e125b777e9a",
          6766: "63dff820b1c113e52ea4c83bd6e20ece",
          7533: "f4e884c1fec9c66fda23010020a412b4",
          7538: "d9f7c5641a68d94b66a9510eeac456cd",
          7977: "0d15169b12392aa1d5f6a733c465634e",
          8066: "0c1870befcd6e9c4a47a997b485ae48e",
          8155: "012f8c9ca37a8d6c72415e2386cc1e3d",
          8712: "285f70fe0a18abd4d6dcab77c591e11b",
          8778: "35d9094055fbc81abe7315d74abcf016",
          8837: "239a6ef62ce1a0b0c1fe1db7947f154f",
          8987: "6cf1a79f902cd3b509e1aae50f0ec903",
          9147: "bd3790b7b70e3a4c1cb84ffb6eb393e0",
          9343: "eee3c78df2dac2063c86caa02711a762",
          9516: "82d88da7fa64fa18aeac281f9e9c1ba0",
          9899: "4ded5f6b83f0a885e47f7db65b4147de",
          9985: "6bd7d4329c504aea199bd1463e6de7c3"
        } [e] + ".js", E.miniCssF = e => "css/" + {
          339: "00be16a5f7d8019476cb628ed296e0bb",
          2366: "d4efb5c8ca00f0d82e4419e2b6335676",
          3127: "94c46fd080b8a39a934e5c0c326f83f3",
          4007: "147e7681e4652c3ec756cd8cc50d2d22",
          6388: "147e7681e4652c3ec756cd8cc50d2d22",
          8712: "5e5ff5a1dd480c7c9abffb6b66e1aa12",
          9985: "d4efb5c8ca00f0d82e4419e2b6335676"
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
          339: [11716, 26398, 28089, 28300, 31879, 35662, 42158, 43426, 52757, 63902, 74401, 78417, 78722, 90588, 98010],
          396: [70396],
          1626: [41626],
          2405: [12405],
          3137: [53137],
          3326: [43326],
          3416: [33416],
          6766: [36766],
          7538: [47538],
          8712: [40207, 42756, 58407],
          8778: [78778],
          8987: [88987],
          9147: [29147]
        }, O = {
          11716: ["default", "./graph/policies", 60404],
          12405: ["default", "./index", 58678],
          26398: ["default", "./helpers", 99466],
          28089: ["default", "./helpers/uploads", 99466],
          28300: ["default", "./operations/fragments/video2-fields.graphql", 61024],
          29147: ["default", "./index", 50644],
          31879: ["default", "./index", 25136],
          33416: ["default", "./index", 40041],
          35662: ["default", "./gtm", 92969],
          36766: ["default", "./index", 11955],
          40207: ["default", "./index", 60404],
          41626: ["default", "./lazy", 29441],
          42158: ["default", "./providers", 92969],
          42756: ["default", "./index", 92969],
          43326: ["default", "./destination", 71127],
          43426: ["default", "./index", 39247],
          47538: ["default", "./site-routes/RedDeadRedemption", 40308],
          52757: ["default", "./providers", 60404],
          53137: ["default", "./index", 98674],
          58407: ["default", "./index", 61024],
          63902: ["default", "./index", 49787],
          70396: ["default", "./hooks", 92969],
          74401: ["default", "./index", 99466],
          78417: ["default", "./operations/fragments/paging.graphql", 61024],
          78722: ["default", "./NewswireArticle", 66819],
          78778: ["default", "./index", 74251],
          88987: ["default", "./index", 94316],
          90588: ["default", "./operations/fragments/newswire-post.graphql", 61024],
          98010: ["default", "./onetrust", 92969]
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
              return "default" === r && (s("@foundry/theme", "1.9.3", (() => Promise.all([E.e(2366), E.e(1403), E.e(4001), E.e(5933)]).then((() => () => E(24001))))), s("@rockstargames/locale-tools", "1.0.0", (() => Promise.all([E.e(8066), E.e(1403), E.e(396), E.e(4143)]).then((() => () => E(24143))))), s("@rockstargames/modules-core-screenshot-viewer", "1.1.2", (() => Promise.all([E.e(1403), E.e(4410), E.e(4007)]).then((() => () => E(54007))))), s("@rockstargames/router", "1.0.0", (() => Promise.all([E.e(1403), E.e(4410), E.e(3002)]).then((() => () => E(73002))))), s("dompurify", "2.4.7", (() => E.e(2956).then((() => () => E(72956))))), s("framer-motion", "7.10.3", (() => Promise.all([E.e(5749), E.e(1689), E.e(1403)]).then((() => () => E(5749))))), s("history", "4.10.1", (() => E.e(2889).then((() => () => E(2889))))), s("prop-types", "15.8.1", (() => E.e(7977).then((() => () => E(37977))))), s("react-dom", "18.2.0", (() => Promise.all([E.e(7533), E.e(1403)]).then((() => () => E(47533))))), s("react-focus-lock", "2.9.6", (() => Promise.all([E.e(109), E.e(1403), E.e(9516), E.e(8155)]).then((() => () => E(80109))))), s("react-jsx-parser", "1.29.0", (() => Promise.all([E.e(1403), E.e(5238)]).then((() => () => E(85238))))), s("react-router-dom", "6.17.0", (() => Promise.all([E.e(5261), E.e(6008), E.e(1403), E.e(9899)]).then((() => () => E(76008))))), s("react-router-dom", "6.17.0", (() => Promise.all([E.e(5261), E.e(1171), E.e(1403), E.e(9899)]).then((() => () => E(31171))))), s("react-router-dom", "6.17.0", (() => Promise.all([E.e(5261), E.e(5033), E.e(1403), E.e(665)]).then((() => () => E(75033))))), s("react-router", "6.17.0", (() => Promise.all([E.e(5261), E.e(4105), E.e(1403)]).then((() => () => E(64105))))), s("react-router", "6.17.0", (() => Promise.all([E.e(5261), E.e(3043), E.e(1403)]).then((() => () => E(83043))))), s("react", "18.2.0", (() => E.e(3380).then((() => () => E(23380))))), f(92969), f(61024), f(60404), f(49787), f(39247), f(66819), f(25136), f(99466), f(94316), f(29441), f(74251), f(98674), f(71127), f(11955), f(58678), f(40041), f(40308), f(50644)), d.length ? e[r] = Promise.all(d).then((() => e[r] = 1)) : e[r] = 1
            }
          }
        })(), (() => {
          var e;
          E.g.importScripts && (e = E.g.location + "");
          var t = E.g.document;
          if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
            var r = t.getElementsByTagName("script");
            if (r.length)
              for (var a = r.length - 1; a > -1 && (!e || !/^http(s?):/.test(e));) e = r[a--].src
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
              71403: () => a("default", "react", [1, 18, 2, 0], (() => E.e(3380).then((() => () => E(23380))))),
              25076: () => a("default", "react-router-dom", [1, 6, 11, 2], (() => Promise.all([E.e(5261), E.e(1171), E.e(9899)]).then((() => () => E(31171))))),
              89779: () => a("default", "react-router-dom", [1, 6, 11, 2], (() => Promise.all([E.e(5261), E.e(6008), E.e(9899)]).then((() => () => E(76008))))),
              96717: () => a("default", "@rockstargames/locale-tools", [1, "workspace:*"], (() => Promise.all([E.e(8066), E.e(6524)]).then((() => () => E(24143))))),
              14410: () => a("default", "react-router-dom", [1, 6, 11, 2], (() => Promise.all([E.e(5261), E.e(5033), E.e(665)]).then((() => () => E(75033))))),
              39516: () => a("default", "prop-types", [1, 15, 8, 1], (() => E.e(7977).then((() => () => E(37977))))),
              99899: () => a("default", "react-router", [1, 6, 11, 2], (() => E.e(4105).then((() => () => E(64105))))),
              80665: () => a("default", "react-router", [1, 6, 11, 2], (() => E.e(3043).then((() => () => E(83043))))),
              53181: () => a("default", "framer-motion", [1, 7, 5, 1], (() => E.e(5749).then((() => () => E(5749))))),
              56864: () => a("default", "react-focus-lock", [1, 2, 9, 6], (() => E.e(109).then((() => () => E(80109))))),
              59785: () => a("default", "@foundry/theme", [1, 1, 4, 2], (() => Promise.all([E.e(4001), E.e(9985)]).then((() => () => E(24001))))),
              61631: () => a("default", "dompurify", [1, 2, 4, 1], (() => E.e(2956).then((() => () => E(72956))))),
              75301: () => a("default", "@rockstargames/router", [1, "workspace:*"], (() => Promise.all([E.e(4410), E.e(621)]).then((() => () => E(73002))))),
              79493: () => a("default", "react-dom", [1, 18, 2, 0], (() => E.e(7533).then((() => () => E(47533))))),
              85865: () => a("default", "react-jsx-parser", [1, "workspace:*"], (() => E.e(5238).then((() => () => E(85238))))),
              90619: () => a("default", "history", [1, 5, 3, 0], (() => E.e(2889).then((() => () => E(2889))))),
              39343: () => a("default", "@rockstargames/modules-core-screenshot-viewer", [1, "workspace:*"], (() => Promise.all([E.e(4410), E.e(6388)]).then((() => () => E(54007)))))
            },
            c = {
              339: [53181, 56864, 59785, 61631, 75301, 79493, 85865, 90619],
              665: [80665],
              1403: [71403],
              4410: [14410],
              8712: [25076, 89779, 96717],
              9343: [39343],
              9516: [39516],
              9899: [99899]
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
              1149: 0
            };
            E.f.miniCss = (t, r) => {
              e[t] ? r.push(e[t]) : 0 !== e[t] && {
                339: 1,
                2366: 1,
                3127: 1,
                4007: 1,
                6388: 1,
                8712: 1,
                9985: 1
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
            1149: 0
          };
          E.f.j = (t, r) => {
            var a = E.o(e, t) ? e[t] : void 0;
            if (0 !== a)
              if (a) r.push(a[2]);
              else if (/^(3((32|41|9)6|137)|9(147|343|516|899|985)|(162|236|676)6|1403|2405|4410|665|7538|8778|8987)$/.test(t)) e[t] = 0;
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
        })(), E.nc = void 0, E(32160), E(4500)
      })())
    }
  }
}));