! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      r = (new Error).stack;
    r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "eb08437a-86a1-41d7-a173-20587082c12a", e._sentryDebugIdIdentifier = "sentry-dbid-eb08437a-86a1-41d7-a173-20587082c12a")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "90b9af281bd1b5c2955354a97f6fab1985234888",
  packageName: "@rockstargames/modules-core-carousel",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "90b9af281bd1b5c2955354a97f6fab1985234888"
}, System.register(["@rockstargames/graph-client", "@rockstargames/modules-core-sc-user", "@rockstargames/tina", "@rockstargames/utils"], (function(e, r) {
  var t = {},
    a = {},
    n = {},
    o = {};
  return Object.defineProperty(t, "__esModule", {
    value: !0
  }), Object.defineProperty(a, "__esModule", {
    value: !0
  }), Object.defineProperty(n, "__esModule", {
    value: !0
  }), Object.defineProperty(o, "__esModule", {
    value: !0
  }), {
    setters: [function(e) {
      Object.keys(e).forEach((function(r) {
        t[r] = e[r]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(r) {
        a[r] = e[r]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(r) {
        n[r] = e[r]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(r) {
        o[r] = e[r]
      }))
    }],
    execute: function() {
      e((() => {
        var e, i, s, d, l = {
            4364: (e, r, t) => {
              (0, t(7284).G)(1)
            },
            7284: (e, r, t) => {
              const a = t(7984).Q;
              r.G = function(e) {
                if (e || (e = 1), !t.y.meta || !t.y.meta.url) throw console.error("__system_context__", t.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                t.p = a(t.y.meta.url, e)
              }
            },
            3824: (e, r, t) => {
              t(4364)
            },
            7984: (e, r, t) => {
              r.Q = function(e, r) {
                var t = document.createElement("a");
                t.href = e;
                for (var a = "/" === t.pathname[0] ? t.pathname : "/" + t.pathname, n = 0, o = a.length; n !== r && o >= 0;) "/" === a[--o] && n++;
                if (n !== r) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + r + ") is greater than the number of directories (" + n + ") in the URL path " + e);
                var i = a.slice(0, o + 1);
                return t.protocol + "//" + t.host + i
              };
              Number.isInteger
            },
            7828: (e, r, t) => {
              "use strict";
              var a = {
                  "./index": () => Promise.all([t.e(848), t.e(664), t.e(740), t.e(860), t.e(272)]).then((() => () => t(7272))),
                  "./tinaBlockTemplates": () => Promise.all([t.e(560), t.e(664), t.e(988), t.e(740), t.e(144)]).then((() => () => t(1144)))
                },
                n = (e, r) => (t.R = r, r = t.o(a, e) ? a[e]() : Promise.resolve().then((() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                })), t.R = void 0, r),
                o = (e, r) => {
                  if (t.S) {
                    var a = "default",
                      n = t.S[a];
                    if (n && n !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return t.S[a] = e, t.I(a, r)
                  }
                };
              t.d(r, {
                get: () => n,
                init: () => o
              })
            },
            3864: e => {
              "use strict";
              e.exports = t
            },
            1128: e => {
              "use strict";
              e.exports = a
            },
            8428: e => {
              "use strict";
              e.exports = n
            },
            9344: e => {
              "use strict";
              e.exports = o
            }
          },
          u = {};

        function f(e) {
          var r = u[e];
          if (void 0 !== r) return r.exports;
          var t = u[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return l[e].call(t.exports, t, t.exports, f), t.loaded = !0, t.exports
        }
        return f.m = l, f.c = u, f.y = r, f.amdO = {}, f.n = e => {
          var r = e && e.__esModule ? () => e.default : () => e;
          return f.d(r, {
            a: r
          }), r
        }, f.d = (e, r) => {
          for (var t in r) f.o(r, t) && !f.o(e, t) && Object.defineProperty(e, t, {
            enumerable: !0,
            get: r[t]
          })
        }, f.f = {}, f.e = e => Promise.all(Object.keys(f.f).reduce(((r, t) => (f.f[t](e, r), r)), [])), f.u = e => "js/" + {
          100: "91e3c20fdf37b976ad8d375b3a779040",
          144: "b2b2e92e762e97fac577418b543ddbe9",
          272: "564073a86ada8b441680e3b6263cf96e",
          488: "b2b52be2dbaa705e24fdfc873dbb7f5c",
          512: "b1dd8a049259acd0a59e0f12e1e281f5",
          560: "49f52c52b151d1b34aead23269388a70",
          664: "05bad5c6ba7d3735c70375b482203935",
          718: "bd3e34366dccd8d64947eb9ee32dc4ce",
          740: "b0bac244071eb128310df11c58a48d25",
          848: "2055a6104f77bfaf56d35dc410ef9fd8",
          860: "ee0076234d76a50d69ff4d475594bb6c",
          988: "8e382dfbda32579d2054ab5d4320b37e"
        } [e] + ".js", f.miniCssF = e => "css/" + {
          272: "ac1e9227f63817d283887e19c5e783ae",
          488: "64ec344fded786187ad18adbe4189f67",
          988: "4dbf5330681b3abe68ce06d4cd0a4470"
        } [e] + ".css", f.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), f.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r), e = {}, i = "@rockstargames/modules-core-carousel:", f.l = (r, t, a, n) => {
          if (e[r]) e[r].push(t);
          else {
            var o, s;
            if (void 0 !== a)
              for (var d = document.getElementsByTagName("script"), l = 0; l < d.length; l++) {
                var u = d[l];
                if (u.getAttribute("src") == r || u.getAttribute("data-webpack") == i + a) {
                  o = u;
                  break
                }
              }
            o || (s = !0, (o = document.createElement("script")).charset = "utf-8", o.timeout = 120, f.nc && o.setAttribute("nonce", f.nc), o.setAttribute("data-webpack", i + a), o.src = r), e[r] = [t];
            var c = (t, a) => {
                o.onerror = o.onload = null, clearTimeout(p);
                var n = e[r];
                if (delete e[r], o.parentNode && o.parentNode.removeChild(o), n && n.forEach((e => e(a))), t) return t(a)
              },
              p = setTimeout(c.bind(null, void 0, {
                type: "timeout",
                target: o
              }), 12e4);
            o.onerror = c.bind(null, o.onerror), o.onload = c.bind(null, o.onload), s && document.head.appendChild(o)
          }
        }, f.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, f.nmd = e => (e.paths = [], e.children || (e.children = []), e), s = {
          144: [2104, 5988, 9468],
          488: [1532, 2836, 3061, 3784, 5356, 8540],
          740: [1740],
          988: [3052, 5652, 5792]
        }, d = {
          1532: ["default", "./operations/queries", 3864],
          1740: ["default", "./index", 8428],
          2104: ["default", "./ui", 8428],
          2836: ["default", "./index", 1128],
          3052: ["default", "./index", 3864],
          3061: ["default", "./hooks", 9344],
          3784: ["default", "./operations/fragments/newswire-post.graphql", 3864],
          5356: ["default", "./helpers", 8428],
          5652: ["default", "./helpers/uploads", 8428],
          5792: ["default", "./index", 9344],
          5988: ["default", "./functions", 9344],
          8540: ["default", "./operations/fragments/paging.graphql", 3864],
          9468: ["default", "./properties", 8428]
        }, f.f.remotes = (e, r) => {
          f.o(s, e) && s[e].forEach((e => {
            var t = f.R;
            t || (t = []);
            var a = d[e];
            if (!(t.indexOf(a) >= 0)) {
              if (t.push(a), a.p) return r.push(a.p);
              var n = r => {
                  r || (r = new Error("Container missing")), "string" == typeof r.message && (r.message += '\nwhile loading "' + a[1] + '" from ' + a[2]), f.m[e] = () => {
                    throw r
                  }, a.p = 0
                },
                o = (e, t, o, i, s, d) => {
                  try {
                    var l = e(t, o);
                    if (!l || !l.then) return s(l, i, d);
                    var u = l.then((e => s(e, i)), n);
                    if (!d) return u;
                    r.push(a.p = u)
                  } catch (e) {
                    n(e)
                  }
                },
                i = (e, r, n) => o(r.get, a[1], t, 0, s, n),
                s = r => {
                  a.p = 1, f.m[e] = e => {
                    e.exports = r()
                  }
                };
              o(f, a[2], 0, 0, ((e, r, t) => e ? o(f.I, a[0], 0, e, i, t) : n()), 1)
            }
          }))
        }, (() => {
          f.S = {};
          var e = {},
            r = {};
          f.I = (t, a) => {
            a || (a = []);
            var n = r[t];
            if (n || (n = r[t] = {}), !(a.indexOf(n) >= 0)) {
              if (a.push(n), e[t]) return e[t];
              f.o(f.S, t) || (f.S[t] = {});
              var o = f.S[t],
                i = "@rockstargames/modules-core-carousel",
                s = (e, r, t, a) => {
                  var n = o[e] = o[e] || {},
                    s = n[r];
                  (!s || !s.loaded && (!a != !s.eager ? a : i > s.from)) && (n[r] = {
                    get: t,
                    from: i,
                    eager: !!a
                  })
                },
                d = e => {
                  var r = e => {
                    return r = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(r));
                    var r
                  };
                  try {
                    var n = f(e);
                    if (!n) return;
                    var o = e => e && e.init && e.init(f.S[t], a);
                    if (n.then) return l.push(n.then(o, r));
                    var i = o(n);
                    if (i && i.then) return l.push(i.catch(r))
                  } catch (e) {
                    r(e)
                  }
                },
                l = [];
              return "default" === t && (s("@rockstargames/components", "1.14.0", (() => Promise.all([f.e(560), f.e(512), f.e(848), f.e(664), f.e(988), f.e(740), f.e(488), f.e(860)]).then((() => () => f(5120))))), s("react-router-dom", "6.17.0", (() => Promise.all([f.e(718), f.e(664)]).then((() => () => f(5718))))), s("react", "18.2.0", (() => f.e(100).then((() => () => f(7100))))), d(8428), d(3864), d(9344), d(1128)), l.length ? e[t] = Promise.all(l).then((() => e[t] = 1)) : e[t] = 1
            }
          }
        })(), (() => {
          var e;
          f.g.importScripts && (e = f.g.location + "");
          var r = f.g.document;
          if (!e && r && (r.currentScript && (e = r.currentScript.src), !e)) {
            var t = r.getElementsByTagName("script");
            if (t.length)
              for (var a = t.length - 1; a > -1 && !e;) e = t[a--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), f.p = e
        })(), (() => {
          var e = e => {
              var r = e => e.split(".").map((e => +e == e ? +e : e)),
                t = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
                a = t[1] ? r(t[1]) : [];
              return t[2] && (a.length++, a.push.apply(a, r(t[2]))), t[3] && (a.push([]), a.push.apply(a, r(t[3]))), a
            },
            r = (t, a) => {
              if (0 in t) {
                a = e(a);
                var n = t[0],
                  o = n < 0;
                o && (n = -n - 1);
                for (var i = 0, s = 1, d = !0;; s++, i++) {
                  var l, u, f = s < t.length ? (typeof t[s])[0] : "";
                  if (i >= a.length || "o" == (u = (typeof(l = a[i]))[0])) return !d || ("u" == f ? s > n && !o : "" == f != o);
                  if ("u" == u) {
                    if (!d || "u" != f) return !1
                  } else if (d)
                    if (f == u)
                      if (s <= n) {
                        if (l != t[s]) return !1
                      } else {
                        if (o ? l > t[s] : l < t[s]) return !1;
                        l != t[s] && (d = !1)
                      }
                  else if ("s" != f && "n" != f) {
                    if (o || s <= n) return !1;
                    d = !1, s--
                  } else {
                    if (s <= n || u < f != o) return !1;
                    d = !1
                  } else "s" != f && "n" != f && (d = !1, s--)
                }
              }
              var c = [],
                p = c.pop.bind(c);
              for (i = 1; i < t.length; i++) {
                var h = t[i];
                c.push(1 == h ? p() | p() : 2 == h ? p() & p() : h ? r(h, a) : !p())
              }
              return !!p()
            },
            t = (t, a, n) => {
              var o = t[a];
              return (a = Object.keys(o).reduce(((t, a) => !r(n, a) || t && !((r, t) => {
                r = e(r), t = e(t);
                for (var a = 0;;) {
                  if (a >= r.length) return a < t.length && "u" != (typeof t[a])[0];
                  var n = r[a],
                    o = (typeof n)[0];
                  if (a >= t.length) return "u" == o;
                  var i = t[a],
                    s = (typeof i)[0];
                  if (o != s) return "o" == o && "n" == s || "s" == s || "u" == o;
                  if ("o" != o && "u" != o && n != i) return n < i;
                  a++
                }
              })(t, a) ? t : a), 0)) && o[a]
            },
            a = (e => function(r, t, a, n) {
              var o = f.I(r);
              return o && o.then ? o.then(e.bind(e, r, f.S[r], t, a, n)) : e(r, f.S[r], t, a, n)
            })(((e, r, a, n, o) => {
              var i = r && f.o(r, a) && t(r, a, n);
              return i ? (e => (e.loaded = 1, e.get()))(i) : o()
            })),
            n = {},
            o = {
              1664: () => a("default", "react", [1, 18, 2, 0], (() => f.e(100).then((() => () => f(7100))))),
              9860: () => a("default", "@rockstargames/components", [1, "workspace:*"], (() => Promise.all([f.e(560), f.e(512), f.e(988), f.e(488)]).then((() => () => f(5120))))),
              7013: () => a("default", "react-router-dom", [1, 6, 11, 2], (() => f.e(718).then((() => () => f(5718)))))
            },
            i = {
              488: [7013],
              664: [1664],
              860: [9860]
            },
            s = {};
          f.f.consumes = (e, r) => {
            f.o(i, e) && i[e].forEach((e => {
              if (f.o(n, e)) return r.push(n[e]);
              if (!s[e]) {
                var t = r => {
                  n[e] = 0, f.m[e] = t => {
                    delete f.c[e], t.exports = r()
                  }
                };
                s[e] = !0;
                var a = r => {
                  delete n[e], f.m[e] = t => {
                    throw delete f.c[e], r
                  }
                };
                try {
                  var i = o[e]();
                  i.then ? r.push(n[e] = i.then(t).catch(a)) : t(i)
                } catch (e) {
                  a(e)
                }
              }
            }))
          }
        })(), (() => {
          if ("undefined" != typeof document) {
            var e = {
              208: 0
            };
            f.f.miniCss = (r, t) => {
              e[r] ? t.push(e[r]) : 0 !== e[r] && {
                272: 1,
                488: 1,
                988: 1
              } [r] && t.push(e[r] = (e => new Promise(((r, t) => {
                var a = f.miniCssF(e),
                  n = f.p + a;
                if (((e, r) => {
                    for (var t = document.getElementsByTagName("link"), a = 0; a < t.length; a++) {
                      var n = (i = t[a]).getAttribute("data-href") || i.getAttribute("href");
                      if ("stylesheet" === i.rel && (n === e || n === r)) return i
                    }
                    var o = document.getElementsByTagName("style");
                    for (a = 0; a < o.length; a++) {
                      var i;
                      if ((n = (i = o[a]).getAttribute("data-href")) === e || n === r) return i
                    }
                  })(a, n)) return r();
                ((e, r, t, a, n) => {
                  var o = document.createElement("link");
                  o.rel = "stylesheet", o.type = "text/css", o.onerror = o.onload = t => {
                    if (o.onerror = o.onload = null, "load" === t.type) a();
                    else {
                      var i = t && ("load" === t.type ? "missing" : t.type),
                        s = t && t.target && t.target.href || r,
                        d = new Error("Loading CSS chunk " + e + " failed.\n(" + s + ")");
                      d.code = "CSS_CHUNK_LOAD_FAILED", d.type = i, d.request = s, o.parentNode && o.parentNode.removeChild(o), n(d)
                    }
                  }, o.href = r, document.head.appendChild(o)
                })(e, n, 0, r, t)
              })))(r).then((() => {
                e[r] = 0
              }), (t => {
                throw delete e[r], t
              })))
            }
          }
        })(), (() => {
          var e = {
            208: 0
          };
          f.f.j = (r, t) => {
            var a = f.o(e, r) ? e[r] : void 0;
            if (0 !== a)
              if (a) t.push(a[2]);
              else if (/^(664|740|860|988)$/.test(r)) e[r] = 0;
            else {
              var n = new Promise(((t, n) => a = e[r] = [t, n]));
              t.push(a[2] = n);
              var o = f.p + f.u(r),
                i = new Error;
              f.l(o, (t => {
                if (f.o(e, r) && (0 !== (a = e[r]) && (e[r] = void 0), a)) {
                  var n = t && ("load" === t.type ? "missing" : t.type),
                    o = t && t.target && t.target.src;
                  i.message = "Loading chunk " + r + " failed.\n(" + n + ": " + o + ")", i.name = "ChunkLoadError", i.type = n, i.request = o, a[1](i)
                }
              }), "chunk-" + r, r)
            }
          };
          var r = (r, t) => {
              var a, n, o = t[0],
                i = t[1],
                s = t[2],
                d = 0;
              if (o.some((r => 0 !== e[r]))) {
                for (a in i) f.o(i, a) && (f.m[a] = i[a]);
                s && s(f)
              }
              for (r && r(t); d < o.length; d++) n = o[d], f.o(e, n) && e[n] && e[n][0](), e[n] = 0
            },
            t = self.webpackChunk_rockstargames_modules_core_carousel = self.webpackChunk_rockstargames_modules_core_carousel || [];
          t.forEach(r.bind(null, 0)), t.push = r.bind(null, t.push.bind(t))
        })(), f(3824), f(7828)
      })())
    }
  }
}));
//# sourceMappingURL=remote-entry.js.map