! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "0eefaae0-c5e6-4730-88d0-a30d84fedf66", e._sentryDebugIdIdentifier = "sentry-dbid-0eefaae0-c5e6-4730-88d0-a30d84fedf66")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-gtao-license-plate",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register([], (function(e, t) {
  return {
    execute: function() {
      e((() => {
        var e, r, a, n, o, f, d = {
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
                for (var a = "/" === r.pathname[0] ? r.pathname : "/" + r.pathname, n = 0, o = a.length; n !== t && o >= 0;) "/" === a[--o] && n++;
                if (n !== t) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + t + ") is greater than the number of directories (" + n + ") in the URL path " + e);
                var f = a.slice(0, o + 1);
                return r.protocol + "//" + r.host + f
              };
              Number.isInteger
            },
            6557: (e, t, r) => {
              "use strict";
              var a = {
                  "./bootstrap": () => r.e(427).then((() => () => r(3427))),
                  "./index": () => Promise.all([r.e(285), r.e(637), r.e(262), r.e(229), r.e(188), r.e(113), r.e(375), r.e(988), r.e(853), r.e(619), r.e(862)]).then((() => () => r(6862)))
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
            }
          },
          s = {};

        function l(e) {
          var t = s[e];
          if (void 0 !== t) return t.exports;
          var r = s[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return d[e].call(r.exports, r, r.exports, l), r.loaded = !0, r.exports
        }
        return l.m = d, l.c = s, l.y = t, l.amdO = {}, l.n = e => {
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
          var n = Object.create(null);
          l.r(n);
          var o = {};
          e = e || [null, r({}), r([]), r(r)];
          for (var f = 2 & a && t;
            "object" == typeof f && !~e.indexOf(f); f = r(f)) Object.getOwnPropertyNames(f).forEach((e => o[e] = () => t[e]));
          return o.default = () => t, l.d(n, o), n
        }, l.d = (e, t) => {
          for (var r in t) l.o(t, r) && !l.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: t[r]
          })
        }, l.f = {}, l.e = e => Promise.all(Object.keys(l.f).reduce(((t, r) => (l.f[r](e, t), t)), [])), l.u = e => "js/" + {
          11: "0c213bb7108c8a544fe430779b8b929d",
          75: "75914380d6e397ce3e18197e00d8f432",
          113: "9f0100ca6c3eb8387dd6f15784e89704",
          138: "72b5049c6dec77b677a45d125e243ab2",
          144: "65147ac962df7025ecd40ff2f811417c",
          188: "8a18d9b89925315c91452458eb3e2e55",
          229: "2567013dfdab22290d5b9705a37688dd",
          262: "92b34076879e06702b8b68bdfd5cc88d",
          270: "e80e5a7fad1fe11d7157542e3070a84a",
          282: "7d148b5193ddbc3671eeef04dbeb26a5",
          285: "24d0f720e5fc647049469f41169a29c2",
          288: "1a502164b9649545a967da6841de71f3",
          375: "92b9532f11e0271d252f2f1acfcee24e",
          384: "c29c61421fc61d59fd15debc33183197",
          416: "46316d001b86e03b78cb3bce1dc5c8b5",
          427: "138445694e420e8bd10efe8475e6c00a",
          436: "8c955d6608410f6b2d5618b9b0e56307",
          456: "ee59a2b941aded4f93e52341eae9589a",
          508: "8afda73e250f3ef541df6a46638dc068",
          577: "03bdf66ed3dc604b5f6439de38358f9c",
          605: "f38fd0cafa00be91bf74d604785b1e45",
          619: "a41c2919da961f128e5a4112a4d7dec6",
          637: "98ffd1845e9f39e0c58cb44b130584fc",
          735: "46bb9fea773820d780fcc4cb00211fda",
          821: "60f776882f136a195c8759d7cedc3b5e",
          853: "923d401ef5a20224f919f3184a00b9ef",
          862: "7d82fbef92e5c6154d0e2c341d7c383d",
          916: "9a349d68141c4613fd45283b1e665824",
          927: "4f3771b6e87a245d74a6b2ed2c4db831",
          936: "5215cb27bcdc874f1dd4b405a0b97724",
          986: "23d2d979ed83342e85c7c3aafae2d93d",
          988: "cfecd2009f92fbe8503585447e2ff851",
          999: "ee3bc45b24d4411f076d17b7d40b4884"
        } [e] + ".js", l.miniCssF = e => "css/" + {
          144: "4b952672492b74cb6a0118fdfeec26e5",
          270: "75194a949b5aa5bed944f1c6f42c0c3b",
          619: "babeaf03198200ae4e8a8b1272c0d213"
        } [e] + ".css", l.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), l.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), a = {}, n = "@rockstargames/modules-gtao-license-plate:", l.l = (e, t, r, o) => {
          if (a[e]) a[e].push(t);
          else {
            var f, d;
            if (void 0 !== r)
              for (var s = document.getElementsByTagName("script"), i = 0; i < s.length; i++) {
                var c = s[i];
                if (c.getAttribute("src") == e || c.getAttribute("data-webpack") == n + r) {
                  f = c;
                  break
                }
              }
            f || (d = !0, (f = document.createElement("script")).charset = "utf-8", f.timeout = 120, l.nc && f.setAttribute("nonce", l.nc), f.setAttribute("data-webpack", n + r), f.src = e), a[e] = [t];
            var u = (t, r) => {
                f.onerror = f.onload = null, clearTimeout(b);
                var n = a[e];
                if (delete a[e], f.parentNode && f.parentNode.removeChild(f), n && n.forEach((e => e(r))), t) return t(r)
              },
              b = setTimeout(u.bind(null, void 0, {
                type: "timeout",
                target: f
              }), 12e4);
            f.onerror = u.bind(null, f.onerror), f.onload = u.bind(null, f.onload), d && document.head.appendChild(f)
          }
        }, l.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, l.nmd = e => (e.paths = [], e.children || (e.children = []), e), o = {}, f = {}, l.f.remotes = (e, t) => {
          l.o(o, e) && o[e].forEach((e => {
            var r = l.R;
            r || (r = []);
            var a = f[e];
            if (!(r.indexOf(a) >= 0)) {
              if (r.push(a), a.p) return t.push(a.p);
              var n = t => {
                  t || (t = new Error("Container missing")), "string" == typeof t.message && (t.message += '\nwhile loading "' + a[1] + '" from ' + a[2]), l.m[e] = () => {
                    throw t
                  }, a.p = 0
                },
                o = (e, r, o, f, d, s) => {
                  try {
                    var l = e(r, o);
                    if (!l || !l.then) return d(l, f, s);
                    var i = l.then((e => d(e, f)), n);
                    if (!s) return i;
                    t.push(a.p = i)
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
                f = "@rockstargames/modules-gtao-license-plate",
                d = (e, t, r, a) => {
                  var n = o[e] = o[e] || {},
                    d = n[t];
                  (!d || !d.loaded && (!a != !d.eager ? a : f > d.from)) && (n[t] = {
                    get: r,
                    from: f,
                    eager: !!a
                  })
                },
                s = [];
              return "default" === r && (d("@react-spring/web", "9.7.3", (() => Promise.all([l.e(416), l.e(229), l.e(853)]).then((() => () => l(2416))))), d("@react-three/fiber", "7.0.29", (() => Promise.all([l.e(288), l.e(229), l.e(988)]).then((() => () => l(3288))))), d("@rsgweb/locale-tools", "1.0.0", (() => Promise.all([l.e(285), l.e(927), l.e(229), l.e(188), l.e(986)]).then((() => () => l(9986))))), d("@rsgweb/modules-core-user-action-menu", "0.0.0", (() => Promise.all([l.e(285), l.e(637), l.e(916), l.e(229), l.e(188), l.e(113), l.e(375), l.e(144), l.e(270)]).then((() => () => l(8144))))), d("@rsgweb/rockstar-account", "0.0.0", (() => Promise.all([l.e(285), l.e(637), l.e(384), l.e(229), l.e(188), l.e(113), l.e(75)]).then((() => () => l(5456))))), d("@rsgweb/utils", "1.0.0", (() => Promise.all([l.e(285), l.e(637), l.e(229), l.e(188), l.e(113)]).then((() => () => l(3012))))), d("@use-gesture/react", "10.3.0", (() => Promise.all([l.e(11), l.e(229)]).then((() => () => l(5011))))), d("gsap", "0.0.0", (() => l.e(138).then((() => () => l(3138))))), d("lodash", "4.17.21", (() => l.e(999).then((() => () => l(1999))))), d("react-dom", "18.2.0", (() => Promise.all([l.e(577), l.e(229)]).then((() => () => l(8577))))), d("react-router-dom", "6.17.0", (() => Promise.all([l.e(282), l.e(229)]).then((() => () => l(282))))), d("react", "18.2.0", (() => l.e(508).then((() => () => l(508))))), d("stackblur-canvas", "2.6.0", (() => l.e(436).then((() => () => l(6436))))), d("three", "0.141.0", (() => l.e(821).then((() => () => l(2821)))))), e[r] = s.length ? Promise.all(s).then((() => e[r] = 1)) : 1
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
                for (var f = 0, d = 1, s = !0;; d++, f++) {
                  var l, i, c = d < r.length ? (typeof r[d])[0] : "";
                  if (f >= a.length || "o" == (i = (typeof(l = a[f]))[0])) return !s || ("u" == c ? d > n && !o : "" == c != o);
                  if ("u" == i) {
                    if (!s || "u" != c) return !1
                  } else if (s)
                    if (c == i)
                      if (d <= n) {
                        if (l != r[d]) return !1
                      } else {
                        if (o ? l > r[d] : l < r[d]) return !1;
                        l != r[d] && (s = !1)
                      }
                  else if ("s" != c && "n" != c) {
                    if (o || d <= n) return !1;
                    s = !1, d--
                  } else {
                    if (d <= n || i < c != o) return !1;
                    s = !1
                  } else "s" != c && "n" != c && (s = !1, d--)
                }
              }
              var u = [],
                b = u.pop.bind(u);
              for (f = 1; f < r.length; f++) {
                var h = r[f];
                u.push(1 == h ? b() | b() : 2 == h ? b() & b() : h ? t(h, a) : !b())
              }
              return !!b()
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
                  var f = r[a],
                    d = (typeof f)[0];
                  if (o != d) return "o" == o && "n" == d || "s" == d || "u" == o;
                  if ("o" != o && "u" != o && n != f) return n < f;
                  a++
                }
              })(r, a) ? r : a), 0)) && o[a]
            },
            a = (e => function(t, r, a, n) {
              var o = l.I(t);
              return o && o.then ? o.then(e.bind(e, t, l.S[t], r, a, n)) : e(t, l.S[t], r, a, n)
            })(((e, t, a, n, o) => {
              var f = t && l.o(t, a) && r(t, a, n);
              return f ? (e => (e.loaded = 1, e.get()))(f) : o()
            })),
            n = {},
            o = {
              2229: () => a("default", "react", [1, 18, 2, 0], (() => l.e(508).then((() => () => l(508))))),
              6188: () => a("default", "lodash", [1, 4, 17, 21], (() => l.e(999).then((() => () => l(1999))))),
              5966: () => a("default", "@rsgweb/utils", [1, "workspace:^"], (() => () => l(3012))),
              9623: () => a("default", "react-router-dom", [1, 6, 11, 2], (() => l.e(282).then((() => () => l(282))))),
              1788: () => a("default", "@rsgweb/locale-tools", [1, "workspace:^"], (() => Promise.all([l.e(927), l.e(605)]).then((() => () => l(9986))))),
              2918: () => a("default", "@rsgweb/rockstar-account", [1, "workspace:^"], (() => Promise.all([l.e(384), l.e(456)]).then((() => () => l(5456))))),
              3988: () => a("default", "three", [4, 0, 141, 0], (() => l.e(821).then((() => () => l(2821))))),
              4853: () => a("default", "react-dom", [1, 18, 2, 0], (() => l.e(577).then((() => () => l(8577))))),
              270: () => a("default", "@rsgweb/modules-core-user-action-menu", [1, "workspace:^"], (() => Promise.all([l.e(916), l.e(144)]).then((() => () => l(8144))))),
              1858: () => a("default", "@react-three/fiber", [1, 7, 0, 0], (() => l.e(288).then((() => () => l(3288))))),
              2548: () => a("default", "stackblur-canvas", [1, 2, 5, 0], (() => l.e(436).then((() => () => l(6436))))),
              2811: () => a("default", "@use-gesture/react", [1, 10, 2, 23], (() => l.e(11).then((() => () => l(5011))))),
              3581: () => a("default", "gsap", [1, "workspace:^"], (() => l.e(138).then((() => () => l(3138))))),
              3983: () => a("default", "@react-spring/web", [1, 9, 6, 1], (() => l.e(416).then((() => () => l(2416)))))
            },
            f = {
              113: [5966, 9623],
              188: [6188],
              229: [2229],
              375: [1788, 2918],
              619: [270, 1858, 2548, 2811, 3581, 3983],
              853: [4853],
              988: [3988]
            },
            d = {};
          l.f.consumes = (e, t) => {
            l.o(f, e) && f[e].forEach((e => {
              if (l.o(n, e)) return t.push(n[e]);
              if (!d[e]) {
                var r = t => {
                  n[e] = 0, l.m[e] = r => {
                    delete l.c[e], r.exports = t()
                  }
                };
                d[e] = !0;
                var a = t => {
                  delete n[e], l.m[e] = r => {
                    throw delete l.c[e], t
                  }
                };
                try {
                  var f = o[e]();
                  f.then ? t.push(n[e] = f.then(r).catch(a)) : r(f)
                } catch (e) {
                  a(e)
                }
              }
            }))
          }
        })(), (() => {
          if ("undefined" != typeof document) {
            var e = {
              502: 0
            };
            l.f.miniCss = (t, r) => {
              e[t] ? r.push(e[t]) : 0 !== e[t] && {
                144: 1,
                270: 1,
                619: 1
              } [t] && r.push(e[t] = (e => new Promise(((t, r) => {
                var a = l.miniCssF(e),
                  n = l.p + a;
                if (((e, t) => {
                    for (var r = document.getElementsByTagName("link"), a = 0; a < r.length; a++) {
                      var n = (f = r[a]).getAttribute("data-href") || f.getAttribute("href");
                      if ("stylesheet" === f.rel && (n === e || n === t)) return f
                    }
                    var o = document.getElementsByTagName("style");
                    for (a = 0; a < o.length; a++) {
                      var f;
                      if ((n = (f = o[a]).getAttribute("data-href")) === e || n === t) return f
                    }
                  })(a, n)) return t();
                ((e, t, r, a, n) => {
                  var o = document.createElement("link");
                  o.rel = "stylesheet", o.type = "text/css", o.onerror = o.onload = r => {
                    if (o.onerror = o.onload = null, "load" === r.type) a();
                    else {
                      var f = r && ("load" === r.type ? "missing" : r.type),
                        d = r && r.target && r.target.href || t,
                        s = new Error("Loading CSS chunk " + e + " failed.\n(" + d + ")");
                      s.code = "CSS_CHUNK_LOAD_FAILED", s.type = f, s.request = d, o.parentNode && o.parentNode.removeChild(o), n(s)
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
            502: 0
          };
          l.f.j = (t, r) => {
            var a = l.o(e, t) ? e[t] : void 0;
            if (0 !== a)
              if (a) r.push(a[2]);
              else if (/^([19]88|229|270|853)$/.test(t)) e[t] = 0;
            else {
              var n = new Promise(((r, n) => a = e[t] = [r, n]));
              r.push(a[2] = n);
              var o = l.p + l.u(t),
                f = new Error;
              l.l(o, (r => {
                if (l.o(e, t) && (0 !== (a = e[t]) && (e[t] = void 0), a)) {
                  var n = r && ("load" === r.type ? "missing" : r.type),
                    o = r && r.target && r.target.src;
                  f.message = "Loading chunk " + t + " failed.\n(" + n + ": " + o + ")", f.name = "ChunkLoadError", f.type = n, f.request = o, a[1](f)
                }
              }), "chunk-" + t, t)
            }
          };
          var t = (t, r) => {
              var a, n, o = r[0],
                f = r[1],
                d = r[2],
                s = 0;
              if (o.some((t => 0 !== e[t]))) {
                for (a in f) l.o(f, a) && (l.m[a] = f[a]);
                d && d(l)
              }
              for (t && t(r); s < o.length; s++) n = o[s], l.o(e, n) && e[n] && e[n][0](), e[n] = 0
            },
            r = self.webpackChunk_rockstargames_modules_gtao_license_plate = self.webpackChunk_rockstargames_modules_gtao_license_plate || [];
          r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
        })(), l.nc = void 0, l(3787), l(6557)
      })())
    }
  }
}));