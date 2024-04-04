! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "1ba97548-252e-438b-ba03-c93ffda36690", e._sentryDebugIdIdentifier = "sentry-dbid-1ba97548-252e-438b-ba03-c93ffda36690")
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
}, System.register(["@rockstargames/graph-client", "@rockstargames/modules-core-card", "@rockstargames/modules-core-carousel", "@rockstargames/modules-core-engagement", "@rockstargames/modules-core-gif-viewer", "@rockstargames/modules-core-group-of-items", "@rockstargames/modules-core-sc-user", "@rockstargames/modules-core-videoplayer", "@rockstargames/modules-sc-ugc-spotlight", "@rockstargames/tina", "@rockstargames/utils"], (function(e, t) {
  var r = {},
    a = {},
    o = {},
    n = {},
    s = {},
    c = {},
    i = {},
    d = {},
    f = {},
    l = {},
    u = {};
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
  }), Object.defineProperty(i, "__esModule", {
    value: !0
  }), Object.defineProperty(d, "__esModule", {
    value: !0
  }), Object.defineProperty(f, "__esModule", {
    value: !0
  }), Object.defineProperty(l, "__esModule", {
    value: !0
  }), Object.defineProperty(u, "__esModule", {
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
        i[t] = e[t]
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
        l[t] = e[t]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(t) {
        u[t] = e[t]
      }))
    }],
    execute: function() {
      e((() => {
        var e, p, h, b, m = {
            4364: (e, t, r) => {
              (0, r(7284).G)(1)
            },
            7284: (e, t, r) => {
              const a = r(7984).Q;
              t.G = function(e) {
                if (e || (e = 1), !r.y.meta || !r.y.meta.url) throw console.error("__system_context__", r.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                r.p = a(r.y.meta.url, e)
              }
            },
            3824: (e, t, r) => {
              r(4364)
            },
            7984: (e, t, r) => {
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
            5468: (e, t, r) => {
              "use strict";
              var a = {
                  "./NewswireArticle": () => Promise.all([r.e(664), r.e(436), r.e(812), r.e(736), r.e(52), r.e(556), r.e(784), r.e(16), r.e(680)]).then((() => () => r(680))),
                  "./NewswireTitle": () => Promise.all([r.e(664), r.e(436), r.e(312)]).then((() => () => r(1312))),
                  "./components": () => Promise.all([r.e(664), r.e(436), r.e(812), r.e(736), r.e(52)]).then((() => () => r(2052))),
                  "./index": () => Promise.all([r.e(664), r.e(436), r.e(812), r.e(736), r.e(52), r.e(556), r.e(68)]).then((() => () => r(6068))),
                  "./tinaBlockTemplates": () => Promise.all([r.e(664), r.e(436), r.e(812), r.e(368), r.e(660)]).then((() => () => r(8660))),
                  "./types": () => Promise.all([r.e(664), r.e(436), r.e(812), r.e(736), r.e(52), r.e(556), r.e(16), r.e(216)]).then((() => () => r(9216)))
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
            3864: e => {
              "use strict";
              e.exports = r
            },
            7672: e => {
              "use strict";
              e.exports = a
            },
            3096: e => {
              "use strict";
              e.exports = o
            },
            8542: e => {
              "use strict";
              e.exports = n
            },
            5576: e => {
              "use strict";
              e.exports = s
            },
            72: e => {
              "use strict";
              e.exports = c
            },
            1128: e => {
              "use strict";
              e.exports = i
            },
            4472: e => {
              "use strict";
              e.exports = d
            },
            2354: e => {
              "use strict";
              e.exports = f
            },
            8428: e => {
              "use strict";
              e.exports = l
            },
            9344: e => {
              "use strict";
              e.exports = u
            }
          },
          g = {};

        function y(e) {
          var t = g[e];
          if (void 0 !== t) return t.exports;
          var r = g[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return m[e].call(r.exports, r, r.exports, y), r.loaded = !0, r.exports
        }
        return y.m = m, y.c = g, y.y = t, y.amdO = {}, y.n = e => {
          var t = e && e.__esModule ? () => e.default : () => e;
          return y.d(t, {
            a: t
          }), t
        }, y.d = (e, t) => {
          for (var r in t) y.o(t, r) && !y.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: t[r]
          })
        }, y.f = {}, y.e = e => Promise.all(Object.keys(y.f).reduce(((t, r) => (y.f[r](e, t), t)), [])), y.u = e => "js/" + {
          16: "36ff3763713ec97535dd84a3d09c7b29",
          52: "9a3af70210364358a62c05a92470cdbc",
          68: "e86fc6ec7f2e6acd8e99b3ed81ef99f5",
          100: "e6c0cf71f2d4201b25252332da6b336b",
          184: "528d19f6f204047d5e9c7c3bb65a39ee",
          216: "689fc550138e732524bd760cfb09e192",
          240: "56b9bf3bec5dd447721e33f515782065",
          312: "3574aea1bd64542399450017ea39cab5",
          368: "4cc6880ce8c0affd206d3dc8caed0937",
          396: "2265495886c3524a6c8b517fbc7b8e0c",
          404: "b5f61dbf50cbd50da2cc357ec2a81144",
          436: "33be23bdd6e635f45c62157b0a1e064f",
          556: "1e3c8d3117cc76fb780db8e27ac30372",
          560: "dee4d78ff2d00093441f992aef5069da",
          660: "0e67c1cb7474f6e6bb95a2b16f02a242",
          664: "4a6c87897c87f6d0707052f2e5a9b65e",
          680: "76b74dca366652de75ffe020ec78086d",
          716: "a68570b49d87f0d904d1417aef1ca7fb",
          718: "12f4b9754741cc26b5ad9e821797cbb2",
          736: "2d274c50a536db863674cc4e8ed88362",
          784: "e0a94b9136c499a93e48ed7d15a22558",
          812: "d2876cf67293d9e6c22988e4e4ec59df",
          856: "73cca647eb782be9d48112ef84a37650",
          928: "19e877356e18ab0dc9f1fa7cc9c5b133"
        } [e] + ".js", y.miniCssF = e => "css/" + {
          16: "39ff1dafce4f00ed5e4e8d89a4e075ae",
          52: "b7f681dcfa8846ed4637f053ed64ae73",
          312: "38cfc95a9203c101bd489ff5c88bc10d",
          368: "8b37b03006bedc02b349b4e790ec7aff",
          928: "e905196c7be2f08904c2fc33194d6074"
        } [e] + ".css", y.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), y.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), e = {}, p = "@rockstargames/modules-core-newswire-article:", y.l = (t, r, a, o) => {
          if (e[t]) e[t].push(r);
          else {
            var n, s;
            if (void 0 !== a)
              for (var c = document.getElementsByTagName("script"), i = 0; i < c.length; i++) {
                var d = c[i];
                if (d.getAttribute("src") == t || d.getAttribute("data-webpack") == p + a) {
                  n = d;
                  break
                }
              }
            n || (s = !0, (n = document.createElement("script")).charset = "utf-8", n.timeout = 120, y.nc && n.setAttribute("nonce", y.nc), n.setAttribute("data-webpack", p + a), n.src = t), e[t] = [r];
            var f = (r, a) => {
                n.onerror = n.onload = null, clearTimeout(l);
                var o = e[t];
                if (delete e[t], n.parentNode && n.parentNode.removeChild(n), o && o.forEach((e => e(a))), r) return r(a)
              },
              l = setTimeout(f.bind(null, void 0, {
                type: "timeout",
                target: n
              }), 12e4);
            n.onerror = f.bind(null, n.onerror), n.onload = f.bind(null, n.onload), s && document.head.appendChild(n)
          }
        }, y.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, y.nmd = e => (e.paths = [], e.children || (e.children = []), e), h = {
          52: [2112, 4644, 7047, 8460, 9812],
          368: [5356, 5652],
          436: [1740, 5792],
          556: [4316, 8508],
          660: [1736, 2104, 4344, 5988, 7256, 9468, 9572],
          680: [7715],
          736: [3061],
          784: [3784],
          812: [3052],
          928: [1532, 2836, 8540]
        }, b = {
          1532: ["default", "./operations/queries", 3864],
          1736: ["default", "./tinaBlockTemplates", 5576],
          1740: ["default", "./index", 8428],
          2104: ["default", "./ui", 8428],
          2112: ["default", "./index", 8542],
          2836: ["default", "./index", 1128],
          3052: ["default", "./index", 3864],
          3061: ["default", "./hooks", 9344],
          3784: ["default", "./operations/fragments/newswire-post.graphql", 3864],
          4316: ["default", "./index", 3096],
          4344: ["default", "./tina", 4472],
          4644: ["default", "./index", 4472],
          5356: ["default", "./helpers", 8428],
          5652: ["default", "./helpers/uploads", 8428],
          5792: ["default", "./index", 9344],
          5988: ["default", "./functions", 9344],
          7047: ["default", "./components", 7672],
          7256: ["default", "./tina", 5576],
          7715: ["default", "./providers", 9344],
          8460: ["default", "./index", 5576],
          8508: ["default", "./index", 2354],
          8540: ["default", "./operations/fragments/paging.graphql", 3864],
          9468: ["default", "./properties", 8428],
          9572: ["default", "./tinaBlockTemplates", 4472],
          9812: ["default", "./index", 72]
        }, y.f.remotes = (e, t) => {
          y.o(h, e) && h[e].forEach((e => {
            var r = y.R;
            r || (r = []);
            var a = b[e];
            if (!(r.indexOf(a) >= 0)) {
              if (r.push(a), a.p) return t.push(a.p);
              var o = t => {
                  t || (t = new Error("Container missing")), "string" == typeof t.message && (t.message += '\nwhile loading "' + a[1] + '" from ' + a[2]), y.m[e] = () => {
                    throw t
                  }, a.p = 0
                },
                n = (e, r, n, s, c, i) => {
                  try {
                    var d = e(r, n);
                    if (!d || !d.then) return c(d, s, i);
                    var f = d.then((e => c(e, s)), o);
                    if (!i) return f;
                    t.push(a.p = f)
                  } catch (e) {
                    o(e)
                  }
                },
                s = (e, t, o) => n(t.get, a[1], r, 0, c, o),
                c = t => {
                  a.p = 1, y.m[e] = e => {
                    e.exports = t()
                  }
                };
              n(y, a[2], 0, 0, ((e, t, r) => e ? n(y.I, a[0], 0, e, s, r) : o()), 1)
            }
          }))
        }, (() => {
          y.S = {};
          var e = {},
            t = {};
          y.I = (r, a) => {
            a || (a = []);
            var o = t[r];
            if (o || (o = t[r] = {}), !(a.indexOf(o) >= 0)) {
              if (a.push(o), e[r]) return e[r];
              y.o(y.S, r) || (y.S[r] = {});
              var n = y.S[r],
                s = "@rockstargames/modules-core-newswire-article",
                c = (e, t, r, a) => {
                  var o = n[e] = n[e] || {},
                    c = o[t];
                  (!c || !c.loaded && (!a != !c.eager ? a : s > c.from)) && (o[t] = {
                    get: r,
                    from: s,
                    eager: !!a
                  })
                },
                i = e => {
                  var t = e => {
                    return t = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(t));
                    var t
                  };
                  try {
                    var o = y(e);
                    if (!o) return;
                    var n = e => e && e.init && e.init(y.S[r], a);
                    if (o.then) return d.push(o.then(n, t));
                    var s = n(o);
                    if (s && s.then) return d.push(s.catch(t))
                  } catch (e) {
                    t(e)
                  }
                },
                d = [];
              return "default" === r && (c("@rockstargames/components", "1.14.0", (() => Promise.all([y.e(396), y.e(664), y.e(436), y.e(812), y.e(736), y.e(368), y.e(784), y.e(928), y.e(240)]).then((() => () => y(5120))))), c("dompurify", "2.4.7", (() => y.e(560).then((() => () => y(8560))))), c("lodash", "4.17.21", (() => y.e(404).then((() => () => y(9784))))), c("react-dom", "18.2.0", (() => Promise.all([y.e(716), y.e(664)]).then((() => () => y(8952))))), c("react-jsx-parser", "1.29.0", (() => Promise.all([y.e(856), y.e(664)]).then((() => () => y(6856))))), c("react-router-dom", "6.17.0", (() => Promise.all([y.e(718), y.e(664)]).then((() => () => y(5718))))), c("react", "18.2.0", (() => y.e(100).then((() => () => y(7100))))), c("text-balancer", "1.0.5", (() => y.e(184).then((() => () => y(6184))))), i(8428), i(9344), i(3864), i(7672), i(8542), i(5576), i(72), i(4472), i(3096), i(2354), i(1128)), d.length ? e[r] = Promise.all(d).then((() => e[r] = 1)) : e[r] = 1
            }
          }
        })(), (() => {
          var e;
          y.g.importScripts && (e = y.g.location + "");
          var t = y.g.document;
          if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
            var r = t.getElementsByTagName("script");
            if (r.length)
              for (var a = r.length - 1; a > -1 && !e;) e = r[a--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), y.p = e
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
                for (var s = 0, c = 1, i = !0;; c++, s++) {
                  var d, f, l = c < r.length ? (typeof r[c])[0] : "";
                  if (s >= a.length || "o" == (f = (typeof(d = a[s]))[0])) return !i || ("u" == l ? c > o && !n : "" == l != n);
                  if ("u" == f) {
                    if (!i || "u" != l) return !1
                  } else if (i)
                    if (l == f)
                      if (c <= o) {
                        if (d != r[c]) return !1
                      } else {
                        if (n ? d > r[c] : d < r[c]) return !1;
                        d != r[c] && (i = !1)
                      }
                  else if ("s" != l && "n" != l) {
                    if (n || c <= o) return !1;
                    i = !1, c--
                  } else {
                    if (c <= o || f < l != n) return !1;
                    i = !1
                  } else "s" != l && "n" != l && (i = !1, c--)
                }
              }
              var u = [],
                p = u.pop.bind(u);
              for (s = 1; s < r.length; s++) {
                var h = r[s];
                u.push(1 == h ? p() | p() : 2 == h ? p() & p() : h ? t(h, a) : !p())
              }
              return !!p()
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
              var n = y.I(t);
              return n && n.then ? n.then(e.bind(e, t, y.S[t], r, a, o)) : e(t, y.S[t], r, a, o)
            })(((e, t, a, o, n) => {
              var s = t && y.o(t, a) && r(t, a, o);
              return s ? (e => (e.loaded = 1, e.get()))(s) : n()
            })),
            o = {},
            n = {
              1664: () => a("default", "react", [1, 18, 2, 0], (() => y.e(100).then((() => () => y(7100))))),
              9860: () => a("default", "@rockstargames/components", [1, "workspace:*"], (() => Promise.all([y.e(396), y.e(812), y.e(736), y.e(368), y.e(784), y.e(928)]).then((() => () => y(5120))))),
              9416: () => a("default", "dompurify", [1, 2, 4, 1], (() => y.e(560).then((() => () => y(8560))))),
              3660: () => a("default", "lodash", [1, 4, 17, 21], (() => y.e(404).then((() => () => y(9784))))),
              2064: () => a("default", "text-balancer", [1, 1, 0, 5], (() => y.e(184).then((() => () => y(6184))))),
              6280: () => a("default", "react-jsx-parser", [1, 1, 29, 0], (() => y.e(856).then((() => () => y(6856))))),
              7013: () => a("default", "react-router-dom", [1, 6, 11, 2], (() => y.e(718).then((() => () => y(5718))))),
              7364: () => a("default", "react-dom", [1, 18, 2, 0], (() => y.e(716).then((() => () => y(8952)))))
            },
            s = {
              16: [6280],
              52: [2064],
              436: [9860],
              664: [1664],
              736: [3660],
              812: [9416],
              928: [7013, 7364]
            },
            c = {};
          y.f.consumes = (e, t) => {
            y.o(s, e) && s[e].forEach((e => {
              if (y.o(o, e)) return t.push(o[e]);
              if (!c[e]) {
                var r = t => {
                  o[e] = 0, y.m[e] = r => {
                    delete y.c[e], r.exports = t()
                  }
                };
                c[e] = !0;
                var a = t => {
                  delete o[e], y.m[e] = r => {
                    throw delete y.c[e], t
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
              92: 0
            };
            y.f.miniCss = (t, r) => {
              e[t] ? r.push(e[t]) : 0 !== e[t] && {
                16: 1,
                52: 1,
                312: 1,
                368: 1,
                928: 1
              } [t] && r.push(e[t] = (e => new Promise(((t, r) => {
                var a = y.miniCssF(e),
                  o = y.p + a;
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
                        i = new Error("Loading CSS chunk " + e + " failed.\n(" + c + ")");
                      i.code = "CSS_CHUNK_LOAD_FAILED", i.type = s, i.request = c, n.parentNode && n.parentNode.removeChild(n), o(i)
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
            92: 0
          };
          y.f.j = (t, r) => {
            var a = y.o(e, t) ? e[t] : void 0;
            if (0 !== a)
              if (a) r.push(a[2]);
              else if (/^((1|43|55|73)6|368|664|784|812)$/.test(t)) e[t] = 0;
            else {
              var o = new Promise(((r, o) => a = e[t] = [r, o]));
              r.push(a[2] = o);
              var n = y.p + y.u(t),
                s = new Error;
              y.l(n, (r => {
                if (y.o(e, t) && (0 !== (a = e[t]) && (e[t] = void 0), a)) {
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
                i = 0;
              if (n.some((t => 0 !== e[t]))) {
                for (a in s) y.o(s, a) && (y.m[a] = s[a]);
                c && c(y)
              }
              for (t && t(r); i < n.length; i++) o = n[i], y.o(e, o) && e[o] && e[o][0](), e[o] = 0
            },
            r = self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || [];
          r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
        })(), y(3824), y(5468)
      })())
    }
  }
}));