! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "c2458163-cd81-4c20-856f-2a3a1f15ff46", e._sentryDebugIdIdentifier = "sentry-dbid-c2458163-cd81-4c20-856f-2a3a1f15ff46")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "90b9af281bd1b5c2955354a97f6fab1985234888",
  packageName: "@rockstargames/modules-core-videoplayer",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "90b9af281bd1b5c2955354a97f6fab1985234888"
}, System.register(["@rockstargames/graph-client", "@rockstargames/intl", "@rockstargames/modules-core-agegate", "@rockstargames/modules-core-sc-user", "@rockstargames/tina", "@rockstargames/utils"], (function(e, t) {
  var r = {},
    a = {},
    o = {},
    n = {},
    d = {},
    f = {};
  return Object.defineProperty(r, "__esModule", {
    value: !0
  }), Object.defineProperty(a, "__esModule", {
    value: !0
  }), Object.defineProperty(o, "__esModule", {
    value: !0
  }), Object.defineProperty(n, "__esModule", {
    value: !0
  }), Object.defineProperty(d, "__esModule", {
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
        n[t] = e[t]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(t) {
        d[t] = e[t]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(t) {
        f[t] = e[t]
      }))
    }],
    execute: function() {
      e((() => {
        var e, s, i, c, l = {
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
                var d = a.slice(0, n + 1);
                return r.protocol + "//" + r.host + d
              };
              Number.isInteger
            },
            65536: (e, t, r) => {
              "use strict";
              var a = {
                  "./bootstrap": () => r.e(236).then((() => () => r(46236))),
                  "./index": () => Promise.all([r.e(664), r.e(372), r.e(804), r.e(660), r.e(724), r.e(800)]).then((() => () => r(6800))),
                  "./tina": () => Promise.all([r.e(664), r.e(804), r.e(660), r.e(532), r.e(68)]).then((() => () => r(65068))),
                  "./tinaBlockTemplates": () => Promise.all([r.e(664), r.e(804), r.e(660), r.e(532), r.e(68)]).then((() => () => r(65068)))
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
            25430: e => {
              "use strict";
              e.exports = o
            },
            81128: e => {
              "use strict";
              e.exports = n
            },
            88428: e => {
              "use strict";
              e.exports = d
            },
            9344: e => {
              "use strict";
              e.exports = f
            }
          },
          u = {};

        function p(e) {
          var t = u[e];
          if (void 0 !== t) return t.exports;
          var r = u[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return l[e].call(r.exports, r, r.exports, p), r.loaded = !0, r.exports
        }
        return p.m = l, p.c = u, p.y = t, p.amdO = {}, p.n = e => {
          var t = e && e.__esModule ? () => e.default : () => e;
          return p.d(t, {
            a: t
          }), t
        }, p.d = (e, t) => {
          for (var r in t) p.o(t, r) && !p.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: t[r]
          })
        }, p.f = {}, p.e = e => Promise.all(Object.keys(p.f).reduce(((t, r) => (p.f[r](e, t), t)), [])), p.u = e => "js/" + {
          61: "4badf4f19163415b16d3eec26bdf7b75",
          68: "06397831c0476fe8ddd87bbfb355025c",
          84: "24b13c14f7f83f8107f34df44bd8cb87",
          92: "40e020d903192008ffcf860ea23f3d83",
          100: "6d158065222fe163f24b09b1129e8698",
          132: "a84440d766e50a384ae812c136b74c73",
          236: "e8abeb55636d5ba145c3b11de3a494e8",
          240: "f473edfda7660ea03a6a81d1a774d757",
          304: "da8df0954aba2880256731e9c960aa8f",
          324: "d6623933428ebe18de00e9ccadc05923",
          364: "298e6a2b6ff50fdbc938bdcd30aea3e1",
          372: "f91bde5c6e398c71b513dcded7df63de",
          378: "eab7ab0d395062f759d002e878e9e6d7",
          408: "d26bc3f82aa32675be7a5706c9adec2c",
          512: "7443ca7d47c8ffa06472179bdc055d35",
          532: "4a1323184690a9e97bd030edb45df771",
          544: "75e9455762ca5ab6b9eb8addc59b01d4",
          560: "82e8a6ba6239ba7a8f5cc828cfc36f51",
          660: "ef1299e0420fc4c03c1334731567fa4b",
          664: "ac868ef8a85fd8d71926d723b8773d61",
          716: "046343a9d92536e424aed8875c3dd6ee",
          718: "947fd53d72a6d8a56aeef58fc10b1f31",
          724: "4c160ffbc50a7cbd8434bd2ea87b6cc1",
          772: "03848dd66e5591041e5eedbacc1bef06",
          784: "f871c9dee9b4aa0846ae29e49923f0dc",
          792: "ecd5ae4616d940248f50cc6a280936fd",
          800: "f471a3234cff09426642e6c26b4bb175",
          804: "c16dc7e47fa9edf16cd0804b8cb529a0",
          924: "8349e46993e25155e70f1d880901b3fa"
        } [e] + ".js", p.miniCssF = e => "css/" + {
          84: "d7ca61fd6a2aad8173bb0f6e692cae25",
          324: "a126229ede95b503bfddbd53efcedae3",
          724: "b487ba29e6f65821b1fffd89c37e0fef",
          800: "62034eb29621b1ccaf0c43836e9b5782"
        } [e] + ".css", p.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), p.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), e = {}, s = "@rockstargames/modules-core-videoplayer:", p.l = (t, r, a, o) => {
          if (e[t]) e[t].push(r);
          else {
            var n, d;
            if (void 0 !== a)
              for (var f = document.getElementsByTagName("script"), i = 0; i < f.length; i++) {
                var c = f[i];
                if (c.getAttribute("src") == t || c.getAttribute("data-webpack") == s + a) {
                  n = c;
                  break
                }
              }
            n || (d = !0, (n = document.createElement("script")).charset = "utf-8", n.timeout = 120, p.nc && n.setAttribute("nonce", p.nc), n.setAttribute("data-webpack", s + a), n.src = t), e[t] = [r];
            var l = (r, a) => {
                n.onerror = n.onload = null, clearTimeout(u);
                var o = e[t];
                if (delete e[t], n.parentNode && n.parentNode.removeChild(n), o && o.forEach((e => e(a))), r) return r(a)
              },
              u = setTimeout(l.bind(null, void 0, {
                type: "timeout",
                target: n
              }), 12e4);
            n.onerror = l.bind(null, n.onerror), n.onload = l.bind(null, n.onload), d && document.head.appendChild(n)
          }
        }, p.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, p.nmd = e => (e.paths = [], e.children || (e.children = []), e), i = {
          61: [3061],
          68: [32104, 89468],
          84: [1740, 28540, 45652, 73784, 95356],
          324: [42708, 75016, 85092],
          372: [42836, 45792],
          532: [1532],
          724: [16660, 55120],
          804: [33052]
        }, c = {
          1532: ["default", "./operations/queries", 33864],
          1740: ["default", "./index", 88428],
          3061: ["default", "./hooks", 9344],
          16660: ["default", "./index", 25430],
          28540: ["default", "./operations/fragments/paging.graphql", 33864],
          32104: ["default", "./ui", 88428],
          33052: ["default", "./index", 33864],
          42708: ["default", "./providers", 81128],
          42836: ["default", "./index", 81128],
          45652: ["default", "./helpers/uploads", 88428],
          45792: ["default", "./index", 9344],
          55120: ["default", "./messages", 50800],
          73784: ["default", "./operations/fragments/newswire-post.graphql", 33864],
          75016: ["default", "./index", 50800],
          85092: ["default", "./gtm", 9344],
          89468: ["default", "./properties", 88428],
          95356: ["default", "./helpers", 88428]
        }, p.f.remotes = (e, t) => {
          p.o(i, e) && i[e].forEach((e => {
            var r = p.R;
            r || (r = []);
            var a = c[e];
            if (!(r.indexOf(a) >= 0)) {
              if (r.push(a), a.p) return t.push(a.p);
              var o = t => {
                  t || (t = new Error("Container missing")), "string" == typeof t.message && (t.message += '\nwhile loading "' + a[1] + '" from ' + a[2]), p.m[e] = () => {
                    throw t
                  }, a.p = 0
                },
                n = (e, r, n, d, f, s) => {
                  try {
                    var i = e(r, n);
                    if (!i || !i.then) return f(i, d, s);
                    var c = i.then((e => f(e, d)), o);
                    if (!s) return c;
                    t.push(a.p = c)
                  } catch (e) {
                    o(e)
                  }
                },
                d = (e, t, o) => n(t.get, a[1], r, 0, f, o),
                f = t => {
                  a.p = 1, p.m[e] = e => {
                    e.exports = t()
                  }
                };
              n(p, a[2], 0, 0, ((e, t, r) => e ? n(p.I, a[0], 0, e, d, r) : o()), 1)
            }
          }))
        }, (() => {
          p.S = {};
          var e = {},
            t = {};
          p.I = (r, a) => {
            a || (a = []);
            var o = t[r];
            if (o || (o = t[r] = {}), !(a.indexOf(o) >= 0)) {
              if (a.push(o), e[r]) return e[r];
              p.o(p.S, r) || (p.S[r] = {});
              var n = p.S[r],
                d = "@rockstargames/modules-core-videoplayer",
                f = (e, t, r, a) => {
                  var o = n[e] = n[e] || {},
                    f = o[t];
                  (!f || !f.loaded && (!a != !f.eager ? a : d > f.from)) && (o[t] = {
                    get: r,
                    from: d,
                    eager: !!a
                  })
                },
                s = e => {
                  var t = e => {
                    return t = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(t));
                    var t
                  };
                  try {
                    var o = p(e);
                    if (!o) return;
                    var n = e => e && e.init && e.init(p.S[r], a);
                    if (o.then) return i.push(o.then(n, t));
                    var d = n(o);
                    if (d && d.then) return i.push(d.catch(t))
                  } catch (e) {
                    t(e)
                  }
                },
                i = [];
              return "default" === r && (f("@rockstargames/components", "1.14.0", (() => Promise.all([p.e(92), p.e(544), p.e(664), p.e(372), p.e(804), p.e(660), p.e(364), p.e(532), p.e(84), p.e(240)]).then((() => () => p(43080))))), f("@rockstargames/locale-tools", "1.0.0", (() => Promise.all([p.e(92), p.e(408), p.e(664), p.e(61), p.e(924)]).then((() => () => p(8304))))), f("dompurify", "2.4.7", (() => p.e(560).then((() => () => p(8560))))), f("hammerjs", "2.0.8", (() => p.e(772).then((() => () => p(65772))))), f("lodash", "4.17.21", (() => p.e(784).then((() => () => p(79784))))), f("react-dom", "18.2.0", (() => Promise.all([p.e(716), p.e(664)]).then((() => () => p(63716))))), f("react-intersection-observer", "9.5.2", (() => Promise.all([p.e(664), p.e(512)]).then((() => () => p(41512))))), f("react-router-dom", "6.17.0", (() => Promise.all([p.e(718), p.e(664)]).then((() => () => p(45718))))), f("react", "18.2.0", (() => p.e(100).then((() => () => p(77100))))), f("uuid", "9.0.1", (() => p.e(378).then((() => () => p(11378))))), s(81128), s(9344), s(33864), s(50800), s(25430), s(88428)), i.length ? e[r] = Promise.all(i).then((() => e[r] = 1)) : e[r] = 1
            }
          }
        })(), (() => {
          var e;
          p.g.importScripts && (e = p.g.location + "");
          var t = p.g.document;
          if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
            var r = t.getElementsByTagName("script");
            if (r.length)
              for (var a = r.length - 1; a > -1 && !e;) e = r[a--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), p.p = e
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
                for (var d = 0, f = 1, s = !0;; f++, d++) {
                  var i, c, l = f < r.length ? (typeof r[f])[0] : "";
                  if (d >= a.length || "o" == (c = (typeof(i = a[d]))[0])) return !s || ("u" == l ? f > o && !n : "" == l != n);
                  if ("u" == c) {
                    if (!s || "u" != l) return !1
                  } else if (s)
                    if (l == c)
                      if (f <= o) {
                        if (i != r[f]) return !1
                      } else {
                        if (n ? i > r[f] : i < r[f]) return !1;
                        i != r[f] && (s = !1)
                      }
                  else if ("s" != l && "n" != l) {
                    if (n || f <= o) return !1;
                    s = !1, f--
                  } else {
                    if (f <= o || c < l != n) return !1;
                    s = !1
                  } else "s" != l && "n" != l && (s = !1, f--)
                }
              }
              var u = [],
                p = u.pop.bind(u);
              for (d = 1; d < r.length; d++) {
                var h = r[d];
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
                  var d = r[a],
                    f = (typeof d)[0];
                  if (n != f) return "o" == n && "n" == f || "s" == f || "u" == n;
                  if ("o" != n && "u" != n && o != d) return o < d;
                  a++
                }
              })(r, a) ? r : a), 0)) && n[a]
            },
            a = (e => function(t, r, a, o) {
              var n = p.I(t);
              return n && n.then ? n.then(e.bind(e, t, p.S[t], r, a, o)) : e(t, p.S[t], r, a, o)
            })(((e, t, a, o, n) => {
              var d = t && p.o(t, a) && r(t, a, o);
              return d ? (e => (e.loaded = 1, e.get()))(d) : n()
            })),
            o = {},
            n = {
              51664: () => a("default", "react", [1, 18, 2, 0], (() => p.e(100).then((() => () => p(77100))))),
              41272: () => a("default", "@rockstargames/locale-tools", [1, "workspace:*"], (() => Promise.all([p.e(92), p.e(408), p.e(61), p.e(304)]).then((() => () => p(8304))))),
              57013: () => a("default", "react-router-dom", [1, 6, 11, 2], (() => p.e(718).then((() => () => p(45718))))),
              68e3: () => a("default", "uuid", [1, 9, 0, 0], (() => p.e(378).then((() => () => p(11378))))),
              97860: () => a("default", "hammerjs", [1, 2, 0, 8], (() => p.e(772).then((() => () => p(65772))))),
              9860: () => a("default", "@rockstargames/components", [1, "workspace:*"], (() => Promise.all([p.e(92), p.e(544), p.e(372), p.e(660), p.e(364), p.e(532), p.e(84)]).then((() => () => p(43080))))),
              73660: () => a("default", "lodash", [1, 4, 17, 21], (() => p.e(784).then((() => () => p(79784))))),
              77364: () => a("default", "react-dom", [1, 18, 2, 0], (() => p.e(716).then((() => () => p(63716))))),
              60380: () => a("default", "react-intersection-observer", [1, 9, 5, 2], (() => p.e(132).then((() => () => p(41512))))),
              89416: () => a("default", "dompurify", [1, 2, 4, 1], (() => p.e(560).then((() => () => p(8560)))))
            },
            d = {
              84: [60380, 89416],
              364: [77364],
              372: [41272, 57013, 68e3, 97860],
              660: [73660],
              664: [51664],
              804: [9860]
            },
            f = {};
          p.f.consumes = (e, t) => {
            p.o(d, e) && d[e].forEach((e => {
              if (p.o(o, e)) return t.push(o[e]);
              if (!f[e]) {
                var r = t => {
                  o[e] = 0, p.m[e] = r => {
                    delete p.c[e], r.exports = t()
                  }
                };
                f[e] = !0;
                var a = t => {
                  delete o[e], p.m[e] = r => {
                    throw delete p.c[e], t
                  }
                };
                try {
                  var d = n[e]();
                  d.then ? t.push(o[e] = d.then(r).catch(a)) : r(d)
                } catch (e) {
                  a(e)
                }
              }
            }))
          }
        })(), (() => {
          if ("undefined" != typeof document) {
            var e = {
              968: 0
            };
            p.f.miniCss = (t, r) => {
              e[t] ? r.push(e[t]) : 0 !== e[t] && {
                84: 1,
                324: 1,
                724: 1,
                800: 1
              } [t] && r.push(e[t] = (e => new Promise(((t, r) => {
                var a = p.miniCssF(e),
                  o = p.p + a;
                if (((e, t) => {
                    for (var r = document.getElementsByTagName("link"), a = 0; a < r.length; a++) {
                      var o = (d = r[a]).getAttribute("data-href") || d.getAttribute("href");
                      if ("stylesheet" === d.rel && (o === e || o === t)) return d
                    }
                    var n = document.getElementsByTagName("style");
                    for (a = 0; a < n.length; a++) {
                      var d;
                      if ((o = (d = n[a]).getAttribute("data-href")) === e || o === t) return d
                    }
                  })(a, o)) return t();
                ((e, t, r, a, o) => {
                  var n = document.createElement("link");
                  n.rel = "stylesheet", n.type = "text/css", n.onerror = n.onload = r => {
                    if (n.onerror = n.onload = null, "load" === r.type) a();
                    else {
                      var d = r && ("load" === r.type ? "missing" : r.type),
                        f = r && r.target && r.target.href || t,
                        s = new Error("Loading CSS chunk " + e + " failed.\n(" + f + ")");
                      s.code = "CSS_CHUNK_LOAD_FAILED", s.type = d, s.request = f, n.parentNode && n.parentNode.removeChild(n), o(s)
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
            968: 0
          };
          p.f.j = (t, r) => {
            var a = p.o(e, t) ? e[t] : void 0;
            if (0 !== a)
              if (a) r.push(a[2]);
              else if (/^(6(1|60|64)|364|372|532|804)$/.test(t)) e[t] = 0;
            else {
              var o = new Promise(((r, o) => a = e[t] = [r, o]));
              r.push(a[2] = o);
              var n = p.p + p.u(t),
                d = new Error;
              p.l(n, (r => {
                if (p.o(e, t) && (0 !== (a = e[t]) && (e[t] = void 0), a)) {
                  var o = r && ("load" === r.type ? "missing" : r.type),
                    n = r && r.target && r.target.src;
                  d.message = "Loading chunk " + t + " failed.\n(" + o + ": " + n + ")", d.name = "ChunkLoadError", d.type = o, d.request = n, a[1](d)
                }
              }), "chunk-" + t, t)
            }
          };
          var t = (t, r) => {
              var a, o, n = r[0],
                d = r[1],
                f = r[2],
                s = 0;
              if (n.some((t => 0 !== e[t]))) {
                for (a in d) p.o(d, a) && (p.m[a] = d[a]);
                f && f(p)
              }
              for (t && t(r); s < n.length; s++) o = n[s], p.o(e, o) && e[o] && e[o][0](), e[o] = 0
            },
            r = self.webpackChunk_rockstargames_modules_core_videoplayer = self.webpackChunk_rockstargames_modules_core_videoplayer || [];
          r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
        })(), p(93824), p(65536)
      })())
    }
  }
}));
//# sourceMappingURL=remote-entry.js.map