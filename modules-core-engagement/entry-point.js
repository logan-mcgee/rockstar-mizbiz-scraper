! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "08d3c9e0-5e86-4fb5-9fd8-87193db8f28d", e._sentryDebugIdIdentifier = "sentry-dbid-08d3c9e0-5e86-4fb5-9fd8-87193db8f28d")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "90b9af281bd1b5c2955354a97f6fab1985234888",
  packageName: "@rockstargames/modules-core-engagement",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "90b9af281bd1b5c2955354a97f6fab1985234888"
}, System.register(["@rockstargames/graph-client", "@rockstargames/intl", "@rockstargames/modules-core-sc-user", "@rockstargames/tina", "@rockstargames/utils"], (function(e, t) {
  var r = {},
    a = {},
    n = {},
    o = {},
    s = {};
  return Object.defineProperty(r, "__esModule", {
    value: !0
  }), Object.defineProperty(a, "__esModule", {
    value: !0
  }), Object.defineProperty(n, "__esModule", {
    value: !0
  }), Object.defineProperty(o, "__esModule", {
    value: !0
  }), Object.defineProperty(s, "__esModule", {
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
        n[t] = e[t]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(t) {
        o[t] = e[t]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(t) {
        s[t] = e[t]
      }))
    }],
    execute: function() {
      e((() => {
        var e, i, d, l, f = {
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
                for (var a = "/" === r.pathname[0] ? r.pathname : "/" + r.pathname, n = 0, o = a.length; n !== t && o >= 0;) "/" === a[--o] && n++;
                if (n !== t) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + t + ") is greater than the number of directories (" + n + ") in the URL path " + e);
                var s = a.slice(0, o + 1);
                return r.protocol + "//" + r.host + s
              };
              Number.isInteger
            },
            8680: (e, t, r) => {
              "use strict";
              var a = {
                  "./index": () => Promise.all([r.e(848), r.e(664), r.e(588), r.e(204)]).then((() => () => r(4880))),
                  "./tina": () => r.e(356).then((() => () => r(4356)))
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
            3864: e => {
              "use strict";
              e.exports = r
            },
            800: e => {
              "use strict";
              e.exports = a
            },
            1128: e => {
              "use strict";
              e.exports = n
            },
            8428: e => {
              "use strict";
              e.exports = o
            },
            9344: e => {
              "use strict";
              e.exports = s
            }
          },
          c = {};

        function u(e) {
          var t = c[e];
          if (void 0 !== t) return t.exports;
          var r = c[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return f[e].call(r.exports, r, r.exports, u), r.loaded = !0, r.exports
        }
        return u.m = f, u.c = c, u.y = t, u.amdO = {}, u.n = e => {
          var t = e && e.__esModule ? () => e.default : () => e;
          return u.d(t, {
            a: t
          }), t
        }, u.d = (e, t) => {
          for (var r in t) u.o(t, r) && !u.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: t[r]
          })
        }, u.f = {}, u.e = e => Promise.all(Object.keys(u.f).reduce(((t, r) => (u.f[r](e, t), t)), [])), u.u = e => "js/" + {
          61: "3f5387e589c51f70ddf4e8d5ab3a78d7",
          88: "c20cd0c9436f4ceb2a19af69cd656898",
          100: "0c77dab0aea7d34008c0f2f80fa6c9b7",
          132: "b94fde4a5a77b6e48d7e0c43813bfcf3",
          176: "2c134122247b1220648b93b3a06fd336",
          204: "3e3441cbeccc60a7d0066d3eaa74e210",
          288: "bc2ea6188a33ad453e608594babb4ca6",
          304: "321689822c76b020c500bb5613546ea7",
          356: "36d4d21e87b8fe54afb643ea382196fe",
          408: "b185bea80885042945f91571a19f29db",
          480: "2169a42b1be94dae2b90d5812e7415fc",
          512: "08ca6adc66b86586d6fbdb6f6a7ce861",
          588: "57059887556708ce4d469dc20d6e7f26",
          664: "5c68c119147c2cc7d1689c10e8c9819e",
          756: "5b208f49289209bf9f1b74ced120f772",
          832: "bb770b6d191583875e554393854c71a6",
          848: "382b65b7e47f4ea79d9a2d46206a9709",
          900: "9eff045945588c51e05065a71fc83049",
          924: "538cdc9af9ef26bedc517be730a1b467",
          952: "ca7317abefbc1fbfbfbec388b107ad00"
        } [e] + ".js", u.miniCssF = e => "css/" + {
          204: "10785c82e2700b941efb6111c6c8d45c",
          480: "5567efd1b67c441402815b8fd477c7d9"
        } [e] + ".css", u.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), u.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), e = {}, i = "@rockstargames/modules-core-engagement:", u.l = (t, r, a, n) => {
          if (e[t]) e[t].push(r);
          else {
            var o, s;
            if (void 0 !== a)
              for (var d = document.getElementsByTagName("script"), l = 0; l < d.length; l++) {
                var f = d[l];
                if (f.getAttribute("src") == t || f.getAttribute("data-webpack") == i + a) {
                  o = f;
                  break
                }
              }
            o || (s = !0, (o = document.createElement("script")).charset = "utf-8", o.timeout = 120, u.nc && o.setAttribute("nonce", u.nc), o.setAttribute("data-webpack", i + a), o.src = t), e[t] = [r];
            var c = (r, a) => {
                o.onerror = o.onload = null, clearTimeout(p);
                var n = e[t];
                if (delete e[t], o.parentNode && o.parentNode.removeChild(o), n && n.forEach((e => e(a))), r) return r(a)
              },
              p = setTimeout(c.bind(null, void 0, {
                type: "timeout",
                target: o
              }), 12e4);
            o.onerror = c.bind(null, o.onerror), o.onload = c.bind(null, o.onload), s && document.head.appendChild(o)
          }
        }, u.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, u.nmd = e => (e.paths = [], e.children || (e.children = []), e), d = {
          61: [3061],
          204: [5120],
          356: [9468],
          480: [1532, 3784, 5356, 5652, 8540],
          588: [1740, 2836, 3052, 5792]
        }, l = {
          1532: ["default", "./operations/queries", 3864],
          1740: ["default", "./index", 8428],
          2836: ["default", "./index", 1128],
          3052: ["default", "./index", 3864],
          3061: ["default", "./hooks", 9344],
          3784: ["default", "./operations/fragments/newswire-post.graphql", 3864],
          5120: ["default", "./messages", 800],
          5356: ["default", "./helpers", 8428],
          5652: ["default", "./helpers/uploads", 8428],
          5792: ["default", "./index", 9344],
          8540: ["default", "./operations/fragments/paging.graphql", 3864],
          9468: ["default", "./properties", 8428]
        }, u.f.remotes = (e, t) => {
          u.o(d, e) && d[e].forEach((e => {
            var r = u.R;
            r || (r = []);
            var a = l[e];
            if (!(r.indexOf(a) >= 0)) {
              if (r.push(a), a.p) return t.push(a.p);
              var n = t => {
                  t || (t = new Error("Container missing")), "string" == typeof t.message && (t.message += '\nwhile loading "' + a[1] + '" from ' + a[2]), u.m[e] = () => {
                    throw t
                  }, a.p = 0
                },
                o = (e, r, o, s, i, d) => {
                  try {
                    var l = e(r, o);
                    if (!l || !l.then) return i(l, s, d);
                    var f = l.then((e => i(e, s)), n);
                    if (!d) return f;
                    t.push(a.p = f)
                  } catch (e) {
                    n(e)
                  }
                },
                s = (e, t, n) => o(t.get, a[1], r, 0, i, n),
                i = t => {
                  a.p = 1, u.m[e] = e => {
                    e.exports = t()
                  }
                };
              o(u, a[2], 0, 0, ((e, t, r) => e ? o(u.I, a[0], 0, e, s, r) : n()), 1)
            }
          }))
        }, (() => {
          u.S = {};
          var e = {},
            t = {};
          u.I = (r, a) => {
            a || (a = []);
            var n = t[r];
            if (n || (n = t[r] = {}), !(a.indexOf(n) >= 0)) {
              if (a.push(n), e[r]) return e[r];
              u.o(u.S, r) || (u.S[r] = {});
              var o = u.S[r],
                s = "@rockstargames/modules-core-engagement",
                i = (e, t, r, a) => {
                  var n = o[e] = o[e] || {},
                    i = n[t];
                  (!i || !i.loaded && (!a != !i.eager ? a : s > i.from)) && (n[t] = {
                    get: r,
                    from: s,
                    eager: !!a
                  })
                },
                d = e => {
                  var t = e => {
                    return t = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(t));
                    var t
                  };
                  try {
                    var n = u(e);
                    if (!n) return;
                    var o = e => e && e.init && e.init(u.S[r], a);
                    if (n.then) return l.push(n.then(o, t));
                    var s = o(n);
                    if (s && s.then) return l.push(s.catch(t))
                  } catch (e) {
                    t(e)
                  }
                },
                l = [];
              return "default" === r && (i("@rockstargames/components", "1.14.0", (() => Promise.all([u.e(176), u.e(756), u.e(848), u.e(664), u.e(480), u.e(588)]).then((() => () => u(8568))))), i("@rockstargames/locale-tools", "1.0.0", (() => Promise.all([u.e(408), u.e(664), u.e(61), u.e(304)]).then((() => () => u(8304))))), i("framer-motion", "7.10.3", (() => Promise.all([u.e(176), u.e(900), u.e(664)]).then((() => () => u(1900))))), i("framer-motion", "7.10.3", (() => Promise.all([u.e(176), u.e(952), u.e(664)]).then((() => () => u(5952))))), i("react-intersection-observer", "9.5.2", (() => Promise.all([u.e(664), u.e(512)]).then((() => () => u(1512))))), i("react-router-dom", "6.17.0", (() => Promise.all([u.e(88), u.e(832), u.e(664)]).then((() => () => u(4832))))), i("react-router-dom", "6.17.0", (() => Promise.all([u.e(88), u.e(288), u.e(664)]).then((() => () => u(288))))), i("react", "18.2.0", (() => u.e(100).then((() => () => u(7100))))), d(3864), d(1128), d(8428), d(9344), d(800)), l.length ? e[r] = Promise.all(l).then((() => e[r] = 1)) : e[r] = 1
            }
          }
        })(), (() => {
          var e;
          u.g.importScripts && (e = u.g.location + "");
          var t = u.g.document;
          if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
            var r = t.getElementsByTagName("script");
            if (r.length)
              for (var a = r.length - 1; a > -1 && !e;) e = r[a--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), u.p = e
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
                for (var s = 0, i = 1, d = !0;; i++, s++) {
                  var l, f, c = i < r.length ? (typeof r[i])[0] : "";
                  if (s >= a.length || "o" == (f = (typeof(l = a[s]))[0])) return !d || ("u" == c ? i > n && !o : "" == c != o);
                  if ("u" == f) {
                    if (!d || "u" != c) return !1
                  } else if (d)
                    if (c == f)
                      if (i <= n) {
                        if (l != r[i]) return !1
                      } else {
                        if (o ? l > r[i] : l < r[i]) return !1;
                        l != r[i] && (d = !1)
                      }
                  else if ("s" != c && "n" != c) {
                    if (o || i <= n) return !1;
                    d = !1, i--
                  } else {
                    if (i <= n || f < c != o) return !1;
                    d = !1
                  } else "s" != c && "n" != c && (d = !1, i--)
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
            r = (r, a, n) => {
              var o = r[a];
              return (a = Object.keys(o).reduce(((r, a) => !t(n, a) || r && !((t, r) => {
                t = e(t), r = e(r);
                for (var a = 0;;) {
                  if (a >= t.length) return a < r.length && "u" != (typeof r[a])[0];
                  var n = t[a],
                    o = (typeof n)[0];
                  if (a >= r.length) return "u" == o;
                  var s = r[a],
                    i = (typeof s)[0];
                  if (o != i) return "o" == o && "n" == i || "s" == i || "u" == o;
                  if ("o" != o && "u" != o && n != s) return n < s;
                  a++
                }
              })(r, a) ? r : a), 0)) && o[a]
            },
            a = (e => function(t, r, a, n) {
              var o = u.I(t);
              return o && o.then ? o.then(e.bind(e, t, u.S[t], r, a, n)) : e(t, u.S[t], r, a, n)
            })(((e, t, a, n, o) => {
              var s = t && u.o(t, a) && r(t, a, n);
              return s ? (e => (e.loaded = 1, e.get()))(s) : o()
            })),
            n = {},
            o = {
              1664: () => a("default", "react", [1, 18, 2, 0], (() => u.e(100).then((() => () => u(7100))))),
              1272: () => a("default", "@rockstargames/locale-tools", [1, "workspace:*"], (() => Promise.all([u.e(408), u.e(61), u.e(924)]).then((() => () => u(8304))))),
              9496: () => a("default", "react-intersection-observer", [1, 9, 4, 3], (() => u.e(132).then((() => () => u(1512))))),
              9860: () => a("default", "@rockstargames/components", [1, "workspace:*"], (() => Promise.all([u.e(176), u.e(756), u.e(480)]).then((() => () => u(8568))))),
              7272: () => a("default", "framer-motion", [1, 7, 5, 1], (() => Promise.all([u.e(176), u.e(900)]).then((() => () => u(1900))))),
              9844: () => a("default", "react-router-dom", [1, 6, 11, 2], (() => Promise.all([u.e(88), u.e(288)]).then((() => () => u(288))))),
              968: () => a("default", "framer-motion", [1, 7, 5, 1], (() => u.e(952).then((() => () => u(5952))))),
              7013: () => a("default", "react-router-dom", [1, 6, 11, 2], (() => Promise.all([u.e(88), u.e(832)]).then((() => () => u(4832)))))
            },
            s = {
              204: [7272, 9844],
              480: [968, 7013],
              588: [1272, 9496, 9860],
              664: [1664]
            },
            i = {};
          u.f.consumes = (e, t) => {
            u.o(s, e) && s[e].forEach((e => {
              if (u.o(n, e)) return t.push(n[e]);
              if (!i[e]) {
                var r = t => {
                  n[e] = 0, u.m[e] = r => {
                    delete u.c[e], r.exports = t()
                  }
                };
                i[e] = !0;
                var a = t => {
                  delete n[e], u.m[e] = r => {
                    throw delete u.c[e], t
                  }
                };
                try {
                  var s = o[e]();
                  s.then ? t.push(n[e] = s.then(r).catch(a)) : r(s)
                } catch (e) {
                  a(e)
                }
              }
            }))
          }
        })(), (() => {
          if ("undefined" != typeof document) {
            var e = {
              188: 0
            };
            u.f.miniCss = (t, r) => {
              e[t] ? r.push(e[t]) : 0 !== e[t] && {
                204: 1,
                480: 1
              } [t] && r.push(e[t] = (e => new Promise(((t, r) => {
                var a = u.miniCssF(e),
                  n = u.p + a;
                if (((e, t) => {
                    for (var r = document.getElementsByTagName("link"), a = 0; a < r.length; a++) {
                      var n = (s = r[a]).getAttribute("data-href") || s.getAttribute("href");
                      if ("stylesheet" === s.rel && (n === e || n === t)) return s
                    }
                    var o = document.getElementsByTagName("style");
                    for (a = 0; a < o.length; a++) {
                      var s;
                      if ((n = (s = o[a]).getAttribute("data-href")) === e || n === t) return s
                    }
                  })(a, n)) return t();
                ((e, t, r, a, n) => {
                  var o = document.createElement("link");
                  o.rel = "stylesheet", o.type = "text/css", o.onerror = o.onload = r => {
                    if (o.onerror = o.onload = null, "load" === r.type) a();
                    else {
                      var s = r && ("load" === r.type ? "missing" : r.type),
                        i = r && r.target && r.target.href || t,
                        d = new Error("Loading CSS chunk " + e + " failed.\n(" + i + ")");
                      d.code = "CSS_CHUNK_LOAD_FAILED", d.type = s, d.request = i, o.parentNode && o.parentNode.removeChild(o), n(d)
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
            188: 0
          };
          u.f.j = (t, r) => {
            var a = u.o(e, t) ? e[t] : void 0;
            if (0 !== a)
              if (a) r.push(a[2]);
              else if (/^(588|61|664)$/.test(t)) e[t] = 0;
            else {
              var n = new Promise(((r, n) => a = e[t] = [r, n]));
              r.push(a[2] = n);
              var o = u.p + u.u(t),
                s = new Error;
              u.l(o, (r => {
                if (u.o(e, t) && (0 !== (a = e[t]) && (e[t] = void 0), a)) {
                  var n = r && ("load" === r.type ? "missing" : r.type),
                    o = r && r.target && r.target.src;
                  s.message = "Loading chunk " + t + " failed.\n(" + n + ": " + o + ")", s.name = "ChunkLoadError", s.type = n, s.request = o, a[1](s)
                }
              }), "chunk-" + t, t)
            }
          };
          var t = (t, r) => {
              var a, n, o = r[0],
                s = r[1],
                i = r[2],
                d = 0;
              if (o.some((t => 0 !== e[t]))) {
                for (a in s) u.o(s, a) && (u.m[a] = s[a]);
                i && i(u)
              }
              for (t && t(r); d < o.length; d++) n = o[d], u.o(e, n) && e[n] && e[n][0](), e[n] = 0
            },
            r = self.webpackChunk_rockstargames_modules_core_engagement = self.webpackChunk_rockstargames_modules_core_engagement || [];
          r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
        })(), u(3824), u(8680)
      })())
    }
  }
}));
//# sourceMappingURL=remote-entry.js.map