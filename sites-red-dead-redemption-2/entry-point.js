! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "7b995d04-088d-4b51-b4bf-4d8cc8208742", e._sentryDebugIdIdentifier = "sentry-dbid-7b995d04-088d-4b51-b4bf-4d8cc8208742")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-red-dead-redemption-2",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register(["@rockstargames/modules-core-videoplayer"], (function(e, t) {
  var r = {};
  return Object.defineProperty(r, "__esModule", {
    value: !0
  }), {
    setters: [function(e) {
      Object.keys(e).forEach((function(t) {
        r[t] = e[t]
      }))
    }],
    execute: function() {
      e((() => {
        var e, a, n, o, d, i, s = {
            35144: (e, t, r) => {
              (0, r(13454).w)(1)
            },
            13454: (e, t, r) => {
              const a = r(38294).y;
              t.w = function(e) {
                if (e || (e = 1), !r.y.meta || !r.y.meta.url) throw console.error("__system_context__", r.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                r.p = a(r.y.meta.url, e)
              }
            },
            23787: (e, t, r) => {
              r(35144)
            },
            38294: (e, t, r) => {
              t.y = function(e, t) {
                var r = document.createElement("a");
                r.href = e;
                for (var a = "/" === r.pathname[0] ? r.pathname : "/" + r.pathname, n = 0, o = a.length; n !== t && o >= 0;) "/" === a[--o] && n++;
                if (n !== t) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + t + ") is greater than the number of directories (" + n + ") in the URL path " + e);
                var d = a.slice(0, o + 1);
                return r.protocol + "//" + r.host + d
              };
              Number.isInteger
            },
            85819: (e, t, r) => {
              "use strict";
              var a = {
                  "./index": () => Promise.all([r.e(285), r.e(207), r.e(384), r.e(677), r.e(229), r.e(188), r.e(118), r.e(700)]).then((() => () => r(75700)))
                },
                n = (e, t) => (r.R = t, t = r.o(a, e) ? a[e]() : Promise.resolve().then((() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                })), r.R = void 0, t),
                o = (e, t) => {
                  if (r.S) {
                    var a = "default",
                      n = r.S[a];
                    if (n && n !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return r.S[a] = e, r.I(a, t)
                  }
                };
              r.d(t, {
                get: () => n,
                init: () => o
              })
            },
            25136: e => {
              "use strict";
              e.exports = r
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
          return s[e].call(r.exports, r, r.exports, l), r.loaded = !0, r.exports
        }
        return l.m = s, l.c = f, l.y = t, l.amdO = {}, l.n = e => {
          var t = e && e.__esModule ? () => e.default : () => e;
          return l.d(t, {
            a: t
          }), t
        }, a = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, l.t = function(t, r) {
          if (1 & r && (t = this(t)), 8 & r) return t;
          if ("object" == typeof t && t) {
            if (4 & r && t.__esModule) return t;
            if (16 & r && "function" == typeof t.then) return t
          }
          var n = Object.create(null);
          l.r(n);
          var o = {};
          e = e || [null, a({}), a([]), a(a)];
          for (var d = 2 & r && t;
            "object" == typeof d && !~e.indexOf(d); d = a(d)) Object.getOwnPropertyNames(d).forEach((e => o[e] = () => t[e]));
          return o.default = () => t, l.d(n, o), n
        }, l.d = (e, t) => {
          for (var r in t) l.o(t, r) && !l.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: t[r]
          })
        }, l.f = {}, l.e = e => Promise.all(Object.keys(l.f).reduce(((t, r) => (l.f[r](e, t), t)), [])), l.u = e => "js/" + {
          118: "be37f574fc21be6d8f0f5d78b7580a8a",
          188: "eb99083764fdef7407a1fadf110f53e2",
          207: "285c8953c0bbc44b61a4fa43e8256ac8",
          229: "9f00bea662fd41a565868f56ec1e535c",
          282: "cfa040fe9128e3812b6b9dedb0106501",
          285: "32e12956c37fc155d5bbabb54ec1667a",
          328: "5a8e56245ad0b966fa11e7b5fe90ea10",
          384: "6ca6499c61f1f3f2a81398e76ac12cdf",
          508: "dbc039a2a847f025d01323cbb3779d3c",
          605: "eff7bba7f6bdbd3b7b4bf5904498600c",
          677: "80330cbdff79822af121b6218dcd0bfa",
          700: "9a9bc68ac8e9a1137152d6b79762b05c",
          728: "4aebd37a9499e8226134b5440d48da5d",
          927: "d2d0cfaadf460b52e1fa2c9e154cae69",
          947: "aeb30b9d4f37e0753da7590aa150c795",
          986: "614c2bc6f52cac5a5e1c2c60bbb3b785",
          999: "6c3eea17a439c935f76f8880de299433"
        } [e] + ".js", l.miniCssF = e => "css/" + {
          328: "2a6e5afbb4f76d7b4a91c9798cc23843",
          700: "8c2f7cda479273bd028695bbf7a64880",
          947: "2a6e5afbb4f76d7b4a91c9798cc23843"
        } [e] + ".css", l.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), l.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), n = {}, o = "@rockstargames/sites-red-dead-redemption-2:", l.l = (e, t, r, a) => {
          if (n[e]) n[e].push(t);
          else {
            var d, i;
            if (void 0 !== r)
              for (var s = document.getElementsByTagName("script"), f = 0; f < s.length; f++) {
                var c = s[f];
                if (c.getAttribute("src") == e || c.getAttribute("data-webpack") == o + r) {
                  d = c;
                  break
                }
              }
            d || (i = !0, (d = document.createElement("script")).charset = "utf-8", d.timeout = 120, l.nc && d.setAttribute("nonce", l.nc), d.setAttribute("data-webpack", o + r), d.src = e), n[e] = [t];
            var u = (t, r) => {
                d.onerror = d.onload = null, clearTimeout(p);
                var a = n[e];
                if (delete n[e], d.parentNode && d.parentNode.removeChild(d), a && a.forEach((e => e(r))), t) return t(r)
              },
              p = setTimeout(u.bind(null, void 0, {
                type: "timeout",
                target: d
              }), 12e4);
            d.onerror = u.bind(null, d.onerror), d.onload = u.bind(null, d.onload), i && document.head.appendChild(d)
          }
        }, l.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, l.nmd = e => (e.paths = [], e.children || (e.children = []), e), d = {
          700: [31879]
        }, i = {
          31879: ["default", "./index", 25136]
        }, l.f.remotes = (e, t) => {
          l.o(d, e) && d[e].forEach((e => {
            var r = l.R;
            r || (r = []);
            var a = i[e];
            if (!(r.indexOf(a) >= 0)) {
              if (r.push(a), a.p) return t.push(a.p);
              var n = t => {
                  t || (t = new Error("Container missing")), "string" == typeof t.message && (t.message += '\nwhile loading "' + a[1] + '" from ' + a[2]), l.m[e] = () => {
                    throw t
                  }, a.p = 0
                },
                o = (e, r, o, d, i, s) => {
                  try {
                    var f = e(r, o);
                    if (!f || !f.then) return i(f, d, s);
                    var l = f.then((e => i(e, d)), n);
                    if (!s) return l;
                    t.push(a.p = l)
                  } catch (e) {
                    n(e)
                  }
                },
                d = (e, t, n) => o(t.get, a[1], r, 0, s, n),
                s = t => {
                  a.p = 1, l.m[e] = e => {
                    e.exports = t()
                  }
                };
              o(l, a[2], 0, 0, ((e, t, r) => e ? o(l.I, a[0], 0, e, d, r) : n()), 1)
            }
          }))
        }, (() => {
          l.S = {};
          var e = {},
            t = {};
          l.I = (r, a) => {
            a || (a = []);
            var n = t[r];
            if (n || (n = t[r] = {}), !(a.indexOf(n) >= 0)) {
              if (a.push(n), e[r]) return e[r];
              l.o(l.S, r) || (l.S[r] = {});
              var o = l.S[r],
                d = "@rockstargames/sites-red-dead-redemption-2",
                i = (e, t, r, a) => {
                  var n = o[e] = o[e] || {},
                    i = n[t];
                  (!i || !i.loaded && (!a != !i.eager ? a : d > i.from)) && (n[t] = {
                    get: r,
                    from: d,
                    eager: !!a
                  })
                },
                s = [];
              return "default" === r && (i("@rsgweb/locale-tools", "1.0.0", (() => Promise.all([l.e(285), l.e(927), l.e(229), l.e(188), l.e(986)]).then((() => () => l(89986))))), i("@rsgweb/modules-core-agegate", "0.0.0", (() => Promise.all([l.e(285), l.e(207), l.e(384), l.e(728), l.e(229), l.e(188), l.e(118), l.e(328)]).then((() => () => l(49328))))), i("@rsgweb/utils", "1.0.0", (() => Promise.all([l.e(285), l.e(207), l.e(229), l.e(188), l.e(118)]).then((() => () => l(75811))))), i("lodash", "4.17.21", (() => l.e(999).then((() => () => l(71999))))), i("react-router-dom", "6.17.0", (() => Promise.all([l.e(282), l.e(229)]).then((() => () => l(70282))))), i("react", "18.2.0", (() => l.e(508).then((() => () => l(50508))))), (e => {
                var t = e => {
                  return t = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(t));
                  var t
                };
                try {
                  var n = l(25136);
                  if (!n) return;
                  var o = e => e && e.init && e.init(l.S[r], a);
                  if (n.then) return s.push(n.then(o, t));
                  var d = o(n);
                  if (d && d.then) return s.push(d.catch(t))
                } catch (e) {
                  t(e)
                }
              })()), s.length ? e[r] = Promise.all(s).then((() => e[r] = 1)) : e[r] = 1
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
                var n = r[0],
                  o = n < 0;
                o && (n = -n - 1);
                for (var d = 0, i = 1, s = !0;; i++, d++) {
                  var f, l, c = i < r.length ? (typeof r[i])[0] : "";
                  if (d >= a.length || "o" == (l = (typeof(f = a[d]))[0])) return !s || ("u" == c ? i > n && !o : "" == c != o);
                  if ("u" == l) {
                    if (!s || "u" != c) return !1
                  } else if (s)
                    if (c == l)
                      if (i <= n) {
                        if (f != r[i]) return !1
                      } else {
                        if (o ? f > r[i] : f < r[i]) return !1;
                        f != r[i] && (s = !1)
                      }
                  else if ("s" != c && "n" != c) {
                    if (o || i <= n) return !1;
                    s = !1, i--
                  } else {
                    if (i <= n || l < c != o) return !1;
                    s = !1
                  } else "s" != c && "n" != c && (s = !1, i--)
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
            r = (r, a, n) => {
              var o = r[a];
              return (a = Object.keys(o).reduce(((r, a) => !t(n, a) || r && !((t, r) => {
                t = e(t), r = e(r);
                for (var a = 0;;) {
                  if (a >= t.length) return a < r.length && "u" != (typeof r[a])[0];
                  var n = t[a],
                    o = (typeof n)[0];
                  if (a >= r.length) return "u" == o;
                  var d = r[a],
                    i = (typeof d)[0];
                  if (o != i) return "o" == o && "n" == i || "s" == i || "u" == o;
                  if ("o" != o && "u" != o && n != d) return n < d;
                  a++
                }
              })(r, a) ? r : a), 0)) && o[a]
            },
            a = (e => function(t, r, a, n) {
              var o = l.I(t);
              return o && o.then ? o.then(e.bind(e, t, l.S[t], r, a, n)) : e(t, l.S[t], r, a, n)
            })(((e, t, a, n, o) => {
              var d = t && l.o(t, a) && r(t, a, n);
              return d ? (e => (e.loaded = 1, e.get()))(d) : o()
            })),
            n = {},
            o = {
              62229: () => a("default", "react", [1, 18, 2, 0], (() => l.e(508).then((() => () => l(50508))))),
              16188: () => a("default", "lodash", [1, 4, 17, 21], (() => l.e(999).then((() => () => l(71999))))),
              9623: () => a("default", "react-router-dom", [1, 6, 11, 2], (() => l.e(282).then((() => () => l(70282))))),
              95966: () => a("default", "@rsgweb/utils", [1, "workspace:^"], (() => () => l(75811))),
              47224: () => a("default", "@rsgweb/modules-core-agegate", [1, "workspace:^"], (() => Promise.all([l.e(728), l.e(947)]).then((() => () => l(49328))))),
              81788: () => a("default", "@rsgweb/locale-tools", [1, "workspace:^"], (() => Promise.all([l.e(927), l.e(605)]).then((() => () => l(89986)))))
            },
            d = {
              118: [9623, 95966],
              188: [16188],
              229: [62229],
              700: [47224, 81788]
            },
            i = {};
          l.f.consumes = (e, t) => {
            l.o(d, e) && d[e].forEach((e => {
              if (l.o(n, e)) return t.push(n[e]);
              if (!i[e]) {
                var r = t => {
                  n[e] = 0, l.m[e] = r => {
                    delete l.c[e], r.exports = t()
                  }
                };
                i[e] = !0;
                var a = t => {
                  delete n[e], l.m[e] = r => {
                    throw delete l.c[e], t
                  }
                };
                try {
                  var d = o[e]();
                  d.then ? t.push(n[e] = d.then(r).catch(a)) : r(d)
                } catch (e) {
                  a(e)
                }
              }
            }))
          }
        })(), (() => {
          if ("undefined" != typeof document) {
            var e = {
              82: 0
            };
            l.f.miniCss = (t, r) => {
              e[t] ? r.push(e[t]) : 0 !== e[t] && {
                328: 1,
                700: 1,
                947: 1
              } [t] && r.push(e[t] = (e => new Promise(((t, r) => {
                var a = l.miniCssF(e),
                  n = l.p + a;
                if (((e, t) => {
                    for (var r = document.getElementsByTagName("link"), a = 0; a < r.length; a++) {
                      var n = (d = r[a]).getAttribute("data-href") || d.getAttribute("href");
                      if ("stylesheet" === d.rel && (n === e || n === t)) return d
                    }
                    var o = document.getElementsByTagName("style");
                    for (a = 0; a < o.length; a++) {
                      var d;
                      if ((n = (d = o[a]).getAttribute("data-href")) === e || n === t) return d
                    }
                  })(a, n)) return t();
                ((e, t, r, a, n) => {
                  var o = document.createElement("link");
                  o.rel = "stylesheet", o.type = "text/css", o.onerror = o.onload = r => {
                    if (o.onerror = o.onload = null, "load" === r.type) a();
                    else {
                      var d = r && ("load" === r.type ? "missing" : r.type),
                        i = r && r.target && r.target.href || t,
                        s = new Error("Loading CSS chunk " + e + " failed.\n(" + i + ")");
                      s.code = "CSS_CHUNK_LOAD_FAILED", s.type = d, s.request = i, o.parentNode && o.parentNode.removeChild(o), n(s)
                    }
                  }, o.href = t, document.head.appendChild(o)
                })(e, n, 0, t, r)
              })))(t).then((() => {
                e[t] = 0
              }), (r => {
                throw delete e[t], r
              })))
            }
          }
        })(), (() => {
          var e = {
            82: 0
          };
          l.f.j = (t, r) => {
            var a = l.o(e, t) ? e[t] : void 0;
            if (0 !== a)
              if (a) r.push(a[2]);
              else if (/^(188|229)$/.test(t)) e[t] = 0;
            else {
              var n = new Promise(((r, n) => a = e[t] = [r, n]));
              r.push(a[2] = n);
              var o = l.p + l.u(t),
                d = new Error;
              l.l(o, (r => {
                if (l.o(e, t) && (0 !== (a = e[t]) && (e[t] = void 0), a)) {
                  var n = r && ("load" === r.type ? "missing" : r.type),
                    o = r && r.target && r.target.src;
                  d.message = "Loading chunk " + t + " failed.\n(" + n + ": " + o + ")", d.name = "ChunkLoadError", d.type = n, d.request = o, a[1](d)
                }
              }), "chunk-" + t, t)
            }
          };
          var t = (t, r) => {
              var a, n, o = r[0],
                d = r[1],
                i = r[2],
                s = 0;
              if (o.some((t => 0 !== e[t]))) {
                for (a in d) l.o(d, a) && (l.m[a] = d[a]);
                i && i(l)
              }
              for (t && t(r); s < o.length; s++) n = o[s], l.o(e, n) && e[n] && e[n][0](), e[n] = 0
            },
            r = self.webpackChunk_rockstargames_sites_red_dead_redemption_2 = self.webpackChunk_rockstargames_sites_red_dead_redemption_2 || [];
          r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
        })(), l(23787), l(85819)
      })())
    }
  }
}));