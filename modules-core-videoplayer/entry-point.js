! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "040ecf24-5228-4b1e-8cf2-470e9ced9e36", e._sentryDebugIdIdentifier = "sentry-dbid-040ecf24-5228-4b1e-8cf2-470e9ced9e36")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-videoplayer",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register([], (function(e, t) {
  return {
    execute: function() {
      e((() => {
        var e, r, a, o, n, d, c = {
            5144: (e, t, r) => {
              (0, r(3454).w)(1)
            },
            3454: (e, t, r) => {
              const a = r(8294).y;
              t.w = function(e) {
                if (e || (e = 1), !r.y.meta || !r.y.meta.url) throw console.error("__system_context__", r.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                r.p = a(r.y.meta.url, e)
              }
            },
            3787: (e, t, r) => {
              r(5144)
            },
            8294: (e, t, r) => {
              t.y = function(e, t) {
                var r = document.createElement("a");
                r.href = e;
                for (var a = "/" === r.pathname[0] ? r.pathname : "/" + r.pathname, o = 0, n = a.length; o !== t && n >= 0;) "/" === a[--n] && o++;
                if (o !== t) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + t + ") is greater than the number of directories (" + o + ") in the URL path " + e);
                var d = a.slice(0, n + 1);
                return r.protocol + "//" + r.host + d
              };
              Number.isInteger
            },
            8157: (e, t, r) => {
              "use strict";
              var a = {
                  "./bootstrap": () => r.e(756).then((() => () => r(2756))),
                  "./index": () => Promise.all([r.e(338), r.e(229), r.e(188), r.e(623), r.e(966), r.e(10), r.e(581), r.e(918), r.e(94), r.e(136)]).then((() => () => r(8136))),
                  "./tina": () => Promise.all([r.e(229), r.e(188), r.e(966), r.e(853), r.e(10), r.e(92)]).then((() => () => r(6092))),
                  "./tinaBlockTemplates": () => Promise.all([r.e(229), r.e(188), r.e(966), r.e(853), r.e(10), r.e(92)]).then((() => () => r(6092)))
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
            }
          },
          f = {};

        function l(e) {
          var t = f[e];
          if (void 0 !== t) return t.exports;
          var r = f[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return c[e].call(r.exports, r, r.exports, l), r.loaded = !0, r.exports
        }
        return l.m = c, l.c = f, l.y = t, l.amdO = {}, l.n = e => {
          var t = e && e.__esModule ? () => e.default : () => e;
          return l.d(t, {
            a: t
          }), t
        }, r = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, l.t = function(t, a) {
          if (1 & a && (t = this(t)), 8 & a) return t;
          if ("object" == typeof t && t) {
            if (4 & a && t.__esModule) return t;
            if (16 & a && "function" == typeof t.then) return t
          }
          var o = Object.create(null);
          l.r(o);
          var n = {};
          e = e || [null, r({}), r([]), r(r)];
          for (var d = 2 & a && t;
            "object" == typeof d && !~e.indexOf(d); d = r(d)) Object.getOwnPropertyNames(d).forEach((e => n[e] = () => t[e]));
          return n.default = () => t, l.d(o, n), o
        }, l.d = (e, t) => {
          for (var r in t) l.o(t, r) && !l.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: t[r]
          })
        }, l.f = {}, l.e = e => Promise.all(Object.keys(l.f).reduce(((t, r) => (l.f[r](e, t), t)), [])), l.u = e => "js/" + {
          5: "18fcd5cd86d6133197abd54890b8b6f9",
          10: "33048b0000946fe5c4dd3a2d7dde7b9a",
          13: "17dd787632918a2e923ee6b3a191e5d9",
          63: "2e3c1274025017b2d5d676c6424c343f",
          75: "49fedb02ff4876e74f268154c02f73a2",
          92: "a2894685da71f3bf11579b904f23ebe3",
          94: "e6ffafb3fd6f4ca9dca028c028b63ac2",
          96: "349d0268c228347555ab746cd71cf789",
          136: "e3a92a7ba7621d9567cfefeb47466a88",
          138: "ec971e276139ffbc8747944339430a41",
          170: "62e67653b92c77e15f88fde91ef5c384",
          188: "2ebe502fd7ec3cd6ab1245333226d0cd",
          229: "6a37f4a67fa3cc423e3b23385f41d126",
          282: "d71aa52f858aeaf1e8d9b41de9da9a43",
          328: "da7f5980494e2377142657e694f19ab7",
          338: "3b0baeeb1c4d66a93dc6be5624ab14a8",
          384: "8aedd1a43700c34740d87bbec78a0cce",
          394: "fa872fdd76598e0600d8bfb120d1a326",
          425: "af3ad51c6240362b5bffe754d7d24068",
          456: "c8d44471d57833dfba1a438caedaab70",
          508: "91c04cad15c58b28009c15fe8ed610e2",
          577: "de2913a826282e8c7756419d566c2599",
          580: "30b7ae29b0a0ba8cb3623e7a361ee924",
          581: "2143e43738b5d23c56b8972cdf78d4e5",
          601: "b4c3325c27e1118523a1427cf496ef8c",
          605: "6d6181210bc80865e9bc55945fdca1eb",
          623: "4bd7e43c7b04f775cdbeb2c0ab1e4d03",
          688: "21f5e73aab8178a4718dba3c7af65bd7",
          712: "9092818b1e8d5f39d6a035fc0d5e1acd",
          728: "3f6bac505a58d980c23c824c3df27bf2",
          735: "f4446cd6cd5d0f7492eb40dcf5bd4a02",
          756: "686d83a57550556bfd18108f7d9e9aaf",
          806: "97a73fc6fe654eaab07c07562f271498",
          837: "a36a223367c4c1593c4c47244889b824",
          853: "8d46cc6c139a3fa587afa26d38d07e83",
          918: "fad17679f5a7e8d19107d3339b64c0b5",
          924: "c80556406714d40dd358a68983680c32",
          927: "130e18d6bfe5c9a46215c681af88e631",
          947: "ad419e734d952be5ade73565b17d5f7f",
          966: "97decd42e8b6b53dc0ad06a11e96f6a2",
          978: "44e1578f6e71ac560018b07b075ee3ca",
          986: "298178e9e5a16057b303b0cc205f1a06",
          999: "adee09dfe6105463fdd462457e20ca15"
        } [e] + ".js", l.miniCssF = e => "css/" + {
          92: "e1ecfbd5d60b0822f094e505eee8adf4",
          94: "63056a052c2f8918123bb085e38869b2",
          136: "0046b5682c8fe97c8afdbca1931f1243",
          328: "c93a94af96ec28203142bf5e00fef0f7",
          837: "a126229ede95b503bfddbd53efcedae3",
          947: "c93a94af96ec28203142bf5e00fef0f7"
        } [e] + ".css", l.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), l.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), a = {}, o = "@rockstargames/modules-core-videoplayer:", l.l = (e, t, r, n) => {
          if (a[e]) a[e].push(t);
          else {
            var d, c;
            if (void 0 !== r)
              for (var f = document.getElementsByTagName("script"), i = 0; i < f.length; i++) {
                var s = f[i];
                if (s.getAttribute("src") == e || s.getAttribute("data-webpack") == o + r) {
                  d = s;
                  break
                }
              }
            d || (c = !0, (d = document.createElement("script")).charset = "utf-8", d.timeout = 120, l.nc && d.setAttribute("nonce", l.nc), d.setAttribute("data-webpack", o + r), d.src = e), a[e] = [t];
            var u = (t, r) => {
                d.onerror = d.onload = null, clearTimeout(b);
                var o = a[e];
                if (delete a[e], d.parentNode && d.parentNode.removeChild(d), o && o.forEach((e => e(r))), t) return t(r)
              },
              b = setTimeout(u.bind(null, void 0, {
                type: "timeout",
                target: d
              }), 12e4);
            d.onerror = u.bind(null, d.onerror), d.onload = u.bind(null, d.onload), c && document.head.appendChild(d)
          }
        }, l.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, l.nmd = e => (e.paths = [], e.children || (e.children = []), e), n = {}, d = {}, l.f.remotes = (e, t) => {
          l.o(n, e) && n[e].forEach((e => {
            var r = l.R;
            r || (r = []);
            var a = d[e];
            if (!(r.indexOf(a) >= 0)) {
              if (r.push(a), a.p) return t.push(a.p);
              var o = t => {
                  t || (t = new Error("Container missing")), "string" == typeof t.message && (t.message += '\nwhile loading "' + a[1] + '" from ' + a[2]), l.m[e] = () => {
                    throw t
                  }, a.p = 0
                },
                n = (e, r, n, d, c, f) => {
                  try {
                    var l = e(r, n);
                    if (!l || !l.then) return c(l, d, f);
                    var i = l.then((e => c(e, d)), o);
                    if (!f) return i;
                    t.push(a.p = i)
                  } catch (e) {
                    o(e)
                  }
                },
                c = (e, t, o) => n(t.get, a[1], r, 0, f, o),
                f = t => {
                  a.p = 1, l.m[e] = e => {
                    e.exports = t()
                  }
                };
              n(l, a[2], 0, 0, ((e, t, r) => e ? n(l.I, a[0], 0, e, c, r) : o()), 1)
            }
          }))
        }, (() => {
          l.S = {};
          var e = {},
            t = {};
          l.I = (r, a) => {
            a || (a = []);
            var o = t[r];
            if (o || (o = t[r] = {}), !(a.indexOf(o) >= 0)) {
              if (a.push(o), e[r]) return e[r];
              l.o(l.S, r) || (l.S[r] = {});
              var n = l.S[r],
                d = "@rockstargames/modules-core-videoplayer",
                c = (e, t, r, a) => {
                  var o = n[e] = n[e] || {},
                    c = o[t];
                  (!c || !c.loaded && (!a != !c.eager ? a : d > c.from)) && (o[t] = {
                    get: r,
                    from: d,
                    eager: !!a
                  })
                },
                f = [];
              return "default" === r && (c("@gsap/react", "2.1.0", (() => Promise.all([l.e(229), l.e(581), l.e(13)]).then((() => () => l(7013))))), c("@popperjs/core", "2.11.8", (() => l.e(63).then((() => () => l(1063))))), c("@rsgweb/intl", "0.0.0", (() => l.e(924).then((() => () => l(7924))))), c("@rsgweb/locale-tools", "1.0.0", (() => Promise.all([l.e(688), l.e(927), l.e(229), l.e(188), l.e(986)]).then((() => () => l(9986))))), c("@rsgweb/modules-core-agegate", "0.0.0", (() => Promise.all([l.e(728), l.e(229), l.e(966), l.e(918), l.e(328)]).then((() => () => l(9328))))), c("@rsgweb/rockstar-account", "0.0.0", (() => Promise.all([l.e(688), l.e(580), l.e(384), l.e(229), l.e(188), l.e(623), l.e(966), l.e(170), l.e(75)]).then((() => () => l(5456))))), c("@rsgweb/utils", "1.0.0", (() => Promise.all([l.e(688), l.e(580), l.e(229), l.e(188), l.e(623), l.e(966), l.e(170), l.e(96)]).then((() => () => l(3012))))), c("graphql", "16.10.0", (() => l.e(601).then((() => () => l(601))))), c("gsap", "0.0.0", (() => l.e(138).then((() => () => l(3138))))), c("hammerjs", "2.0.8", (() => l.e(712).then((() => () => l(7712))))), c("lodash", "4.17.21", (() => l.e(999).then((() => () => l(1999))))), c("react-dom", "18.2.0", (() => Promise.all([l.e(577), l.e(229)]).then((() => () => l(8577))))), c("react-popper", "2.3.0", (() => Promise.all([l.e(229), l.e(853), l.e(5), l.e(806)]).then((() => () => l(2806))))), c("react-router-dom", "6.17.0", (() => Promise.all([l.e(282), l.e(229)]).then((() => () => l(282))))), c("react", "18.2.0", (() => l.e(508).then((() => () => l(508))))), c("uuid", "9.0.1", (() => l.e(978).then((() => () => l(8978)))))), e[r] = f.length ? Promise.all(f).then((() => e[r] = 1)) : 1
            }
          }
        })(), (() => {
          var e;
          l.g.importScripts && (e = l.g.location + "");
          var t = l.g.document;
          if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
            var r = t.getElementsByTagName("script");
            if (r.length)
              for (var a = r.length - 1; a > -1 && (!e || !/^http(s?):/.test(e));) e = r[a--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), l.p = e
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
                for (var d = 0, c = 1, f = !0;; c++, d++) {
                  var l, i, s = c < r.length ? (typeof r[c])[0] : "";
                  if (d >= a.length || "o" == (i = (typeof(l = a[d]))[0])) return !f || ("u" == s ? c > o && !n : "" == s != n);
                  if ("u" == i) {
                    if (!f || "u" != s) return !1
                  } else if (f)
                    if (s == i)
                      if (c <= o) {
                        if (l != r[c]) return !1
                      } else {
                        if (n ? l > r[c] : l < r[c]) return !1;
                        l != r[c] && (f = !1)
                      }
                  else if ("s" != s && "n" != s) {
                    if (n || c <= o) return !1;
                    f = !1, c--
                  } else {
                    if (c <= o || i < s != n) return !1;
                    f = !1
                  } else "s" != s && "n" != s && (f = !1, c--)
                }
              }
              var u = [],
                b = u.pop.bind(u);
              for (d = 1; d < r.length; d++) {
                var p = r[d];
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
                  var d = r[a],
                    c = (typeof d)[0];
                  if (n != c) return "o" == n && "n" == c || "s" == c || "u" == n;
                  if ("o" != n && "u" != n && o != d) return o < d;
                  a++
                }
              })(r, a) ? r : a), 0)) && n[a]
            },
            a = (e => function(t, r, a, o) {
              var n = l.I(t);
              return n && n.then ? n.then(e.bind(e, t, l.S[t], r, a, o)) : e(t, l.S[t], r, a, o)
            })(((e, t, a, o, n) => {
              var d = t && l.o(t, a) && r(t, a, o);
              return d ? (e => (e.loaded = 1, e.get()))(d) : n()
            })),
            o = {},
            n = {
              2229: () => a("default", "react", [1, 18, 2, 0], (() => l.e(508).then((() => () => l(508))))),
              6188: () => a("default", "lodash", [1, 4, 17, 21], (() => l.e(999).then((() => () => l(1999))))),
              9623: () => a("default", "react-router-dom", [1, 6, 11, 2], (() => l.e(282).then((() => () => l(282))))),
              5966: () => a("default", "@rsgweb/utils", [1, "workspace:^"], (() => Promise.all([l.e(688), l.e(580), l.e(188), l.e(623), l.e(170)]).then((() => () => l(3012))))),
              1569: () => a("default", "uuid", [1, 9, 0, 0], (() => l.e(978).then((() => () => l(8978))))),
              1788: () => a("default", "@rsgweb/locale-tools", [1, "workspace:^"], (() => Promise.all([l.e(688), l.e(927), l.e(188), l.e(605)]).then((() => () => l(9986))))),
              3581: () => a("default", "gsap", [1, "workspace:^"], (() => l.e(138).then((() => () => l(3138))))),
              2918: () => a("default", "@rsgweb/rockstar-account", [1, "workspace:^"], (() => Promise.all([l.e(688), l.e(580), l.e(384), l.e(188), l.e(623), l.e(170), l.e(456)]).then((() => () => l(5456))))),
              66: () => a("default", "@rsgweb/intl", [1, "workspace:^"], (() => l.e(924).then((() => () => l(7924))))),
              4848: () => a("default", "hammerjs", [1, 2, 0, 8], (() => l.e(712).then((() => () => l(7712))))),
              5971: () => a("default", "react-popper", [1, 2, 3, 0], (() => Promise.all([l.e(853), l.e(5), l.e(425)]).then((() => () => l(2806))))),
              7224: () => a("default", "@rsgweb/modules-core-agegate", [1, "workspace:^"], (() => Promise.all([l.e(728), l.e(947)]).then((() => () => l(9328))))),
              7654: () => a("default", "@gsap/react", [1, 2, 1, 0], (() => l.e(394).then((() => () => l(7013))))),
              4853: () => a("default", "react-dom", [1, 18, 2, 0], (() => l.e(577).then((() => () => l(8577))))),
              6565: () => a("default", "graphql", [1, 16, 9, 0], (() => l.e(601).then((() => () => l(601))))),
              9005: () => a("default", "@popperjs/core", [1, 2, 11, 7], (() => l.e(63).then((() => () => l(1063)))))
            },
            d = {
              5: [9005],
              10: [1569, 1788],
              94: [66, 4848, 5971, 7224, 7654],
              170: [6565],
              188: [6188],
              229: [2229],
              581: [3581],
              623: [9623],
              853: [4853],
              918: [2918],
              966: [5966]
            },
            c = {};
          l.f.consumes = (e, t) => {
            l.o(d, e) && d[e].forEach((e => {
              if (l.o(o, e)) return t.push(o[e]);
              if (!c[e]) {
                var r = t => {
                  o[e] = 0, l.m[e] = r => {
                    delete l.c[e], r.exports = t()
                  }
                };
                c[e] = !0;
                var a = t => {
                  delete o[e], l.m[e] = r => {
                    throw delete l.c[e], t
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
              614: 0
            };
            l.f.miniCss = (t, r) => {
              e[t] ? r.push(e[t]) : 0 !== e[t] && {
                92: 1,
                94: 1,
                136: 1,
                328: 1,
                837: 1,
                947: 1
              } [t] && r.push(e[t] = (e => new Promise(((t, r) => {
                var a = l.miniCssF(e),
                  o = l.p + a;
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
                        c = r && r.target && r.target.href || t,
                        f = new Error("Loading CSS chunk " + e + " failed.\n(" + c + ")");
                      f.code = "CSS_CHUNK_LOAD_FAILED", f.type = d, f.request = c, n.parentNode && n.parentNode.removeChild(n), o(f)
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
            614: 0
          };
          l.f.j = (t, r) => {
            var a = l.o(e, t) ? e[t] : void 0;
            if (0 !== a)
              if (a) r.push(a[2]);
              else if (/^(10|188|229|5|581|623|853|918|966)$/.test(t)) e[t] = 0;
            else {
              var o = new Promise(((r, o) => a = e[t] = [r, o]));
              r.push(a[2] = o);
              var n = l.p + l.u(t),
                d = new Error;
              l.l(n, (r => {
                if (l.o(e, t) && (0 !== (a = e[t]) && (e[t] = void 0), a)) {
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
                c = r[2],
                f = 0;
              if (n.some((t => 0 !== e[t]))) {
                for (a in d) l.o(d, a) && (l.m[a] = d[a]);
                c && c(l)
              }
              for (t && t(r); f < n.length; f++) o = n[f], l.o(e, o) && e[o] && e[o][0](), e[o] = 0
            },
            r = self.webpackChunk_rockstargames_modules_core_videoplayer = self.webpackChunk_rockstargames_modules_core_videoplayer || [];
          r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
        })(), l(3787), l(8157)
      })())
    }
  }
}));