! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "7f64c98c-c9d2-416a-8701-8d5fa15ef489", e._sentryDebugIdIdentifier = "sentry-dbid-7f64c98c-c9d2-416a-8701-8d5fa15ef489")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-gta-tv",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register(["@rockstargames/graph-client", "@rockstargames/modules-core-videoplayer", "@rockstargames/utils"], (function(e, t) {
  var r = {},
    n = {},
    a = {};
  return Object.defineProperty(r, "__esModule", {
    value: !0
  }), Object.defineProperty(n, "__esModule", {
    value: !0
  }), Object.defineProperty(a, "__esModule", {
    value: !0
  }), {
    setters: [function(e) {
      Object.keys(e).forEach((function(t) {
        r[t] = e[t]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(t) {
        n[t] = e[t]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(t) {
        a[t] = e[t]
      }))
    }],
    execute: function() {
      e((() => {
        var e, o, i, s, f = {
            6539: (e, t, r) => {
              (0, r(3403).w)(1)
            },
            3403: (e, t, r) => {
              const n = r(5659).y;
              t.w = function(e) {
                if (e || (e = 1), !r.y.meta || !r.y.meta.url) throw console.error("__system_context__", r.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                r.p = n(r.y.meta.url, e)
              }
            },
            2160: (e, t, r) => {
              r(6539)
            },
            5659: (e, t, r) => {
              t.y = function(e, t) {
                var r = document.createElement("a");
                r.href = e;
                for (var n = "/" === r.pathname[0] ? r.pathname : "/" + r.pathname, a = 0, o = n.length; a !== t && o >= 0;) "/" === n[--o] && a++;
                if (a !== t) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + t + ") is greater than the number of directories (" + a + ") in the URL path " + e);
                var i = n.slice(0, o + 1);
                return r.protocol + "//" + r.host + i
              };
              Number.isInteger
            },
            8527: (e, t, r) => {
              "use strict";
              var n = {
                  "./index": () => Promise.all([r.e(785), r.e(403), r.e(968)]).then((() => () => r(5968)))
                },
                a = (e, t) => (r.R = t, t = r.o(n, e) ? n[e]() : Promise.resolve().then((() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                })), r.R = void 0, t),
                o = (e, t) => {
                  if (r.S) {
                    var n = "default",
                      a = r.S[n];
                    if (a && a !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return r.S[n] = e, r.I(n, t)
                  }
                };
              r.d(t, {
                get: () => a,
                init: () => o
              })
            },
            1024: e => {
              "use strict";
              e.exports = r
            },
            5136: e => {
              "use strict";
              e.exports = n
            },
            2969: e => {
              "use strict";
              e.exports = a
            }
          },
          l = {};

        function u(e) {
          var t = l[e];
          if (void 0 !== t) return t.exports;
          var r = l[e] = {
            exports: {}
          };
          return f[e](r, r.exports, u), r.exports
        }
        return u.m = f, u.c = l, u.y = t, u.n = e => {
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
          49: "9223f27db774661ae48a2f145a1a1391",
          261: "7d5146c31e8a62932e4bb3dfbb92250b",
          380: "261b91843eeed791db6ea2b24e60b7c9",
          403: "ff9ec9f80eaf0eb9acf84c2ec4644ce2",
          776: "5fd831e1caa3f96c7d69d8bbdc69a9d0",
          785: "81bdd8ebb062dc4ecf3a044a75488dd6",
          968: "6220c47351b856c681655e20b1754834"
        } [e] + ".js", u.miniCssF = e => "css/00c96d0e221657c074bde949535f789a.css", u.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), u.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), e = {}, o = "@rockstargames/sites-gta-tv:", u.l = (t, r, n, a) => {
          if (e[t]) e[t].push(r);
          else {
            var i, s;
            if (void 0 !== n)
              for (var f = document.getElementsByTagName("script"), l = 0; l < f.length; l++) {
                var d = f[l];
                if (d.getAttribute("src") == t || d.getAttribute("data-webpack") == o + n) {
                  i = d;
                  break
                }
              }
            i || (s = !0, (i = document.createElement("script")).charset = "utf-8", i.timeout = 120, u.nc && i.setAttribute("nonce", u.nc), i.setAttribute("data-webpack", o + n), i.src = t), e[t] = [r];
            var c = (r, n) => {
                i.onerror = i.onload = null, clearTimeout(p);
                var a = e[t];
                if (delete e[t], i.parentNode && i.parentNode.removeChild(i), a && a.forEach((e => e(n))), r) return r(n)
              },
              p = setTimeout(c.bind(null, void 0, {
                type: "timeout",
                target: i
              }), 12e4);
            i.onerror = c.bind(null, i.onerror), i.onload = c.bind(null, i.onload), s && document.head.appendChild(i)
          }
        }, u.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, i = {
          968: [1879, 2756, 8407]
        }, s = {
          1879: ["default", "./index", 5136],
          2756: ["default", "./index", 2969],
          8407: ["default", "./index", 1024]
        }, u.f.remotes = (e, t) => {
          u.o(i, e) && i[e].forEach((e => {
            var r = u.R;
            r || (r = []);
            var n = s[e];
            if (!(r.indexOf(n) >= 0)) {
              if (r.push(n), n.p) return t.push(n.p);
              var a = t => {
                  t || (t = new Error("Container missing")), "string" == typeof t.message && (t.message += '\nwhile loading "' + n[1] + '" from ' + n[2]), u.m[e] = () => {
                    throw t
                  }, n.p = 0
                },
                o = (e, r, o, i, s, f) => {
                  try {
                    var l = e(r, o);
                    if (!l || !l.then) return s(l, i, f);
                    var u = l.then((e => s(e, i)), a);
                    if (!f) return u;
                    t.push(n.p = u)
                  } catch (e) {
                    a(e)
                  }
                },
                i = (e, t, a) => o(t.get, n[1], r, 0, f, a),
                f = t => {
                  n.p = 1, u.m[e] = e => {
                    e.exports = t()
                  }
                };
              o(u, n[2], 0, 0, ((e, t, r) => e ? o(u.I, n[0], 0, e, i, r) : a()), 1)
            }
          }))
        }, (() => {
          u.S = {};
          var e = {},
            t = {};
          u.I = (r, n) => {
            n || (n = []);
            var a = t[r];
            if (a || (a = t[r] = {}), !(n.indexOf(a) >= 0)) {
              if (n.push(a), e[r]) return e[r];
              u.o(u.S, r) || (u.S[r] = {});
              var o = u.S[r],
                i = "@rockstargames/sites-gta-tv",
                s = (e, t, r, n) => {
                  var a = o[e] = o[e] || {},
                    s = a[t];
                  (!s || !s.loaded && (!n != !s.eager ? n : i > s.from)) && (a[t] = {
                    get: r,
                    from: i,
                    eager: !!n
                  })
                },
                f = e => {
                  var t = e => {
                    return t = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(t));
                    var t
                  };
                  try {
                    var a = u(e);
                    if (!a) return;
                    var o = e => e && e.init && e.init(u.S[r], n);
                    if (a.then) return l.push(a.then(o, t));
                    var i = o(a);
                    if (i && i.then) return l.push(i.catch(t))
                  } catch (e) {
                    t(e)
                  }
                },
                l = [];
              return "default" === r && (s("react-router-dom", "6.17.0", (() => Promise.all([u.e(261), u.e(49), u.e(403)]).then((() => () => u(2049))))), s("react-router-dom", "6.17.0", (() => Promise.all([u.e(261), u.e(776), u.e(403)]).then((() => () => u(2776))))), s("react", "18.2.0", (() => u.e(380).then((() => () => u(3380))))), f(1024), f(5136), f(2969)), l.length ? e[r] = Promise.all(l).then((() => e[r] = 1)) : e[r] = 1
            }
          }
        })(), (() => {
          var e;
          u.g.importScripts && (e = u.g.location + "");
          var t = u.g.document;
          if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
            var r = t.getElementsByTagName("script");
            if (r.length)
              for (var n = r.length - 1; n > -1 && (!e || !/^http(s?):/.test(e));) e = r[n--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), u.p = e
        })(), (() => {
          var e = e => {
              var t = e => e.split(".").map((e => +e == e ? +e : e)),
                r = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
                n = r[1] ? t(r[1]) : [];
              return r[2] && (n.length++, n.push.apply(n, t(r[2]))), r[3] && (n.push([]), n.push.apply(n, t(r[3]))), n
            },
            t = (r, n) => {
              if (0 in r) {
                n = e(n);
                var a = r[0],
                  o = a < 0;
                o && (a = -a - 1);
                for (var i = 0, s = 1, f = !0;; s++, i++) {
                  var l, u, d = s < r.length ? (typeof r[s])[0] : "";
                  if (i >= n.length || "o" == (u = (typeof(l = n[i]))[0])) return !f || ("u" == d ? s > a && !o : "" == d != o);
                  if ("u" == u) {
                    if (!f || "u" != d) return !1
                  } else if (f)
                    if (d == u)
                      if (s <= a) {
                        if (l != r[s]) return !1
                      } else {
                        if (o ? l > r[s] : l < r[s]) return !1;
                        l != r[s] && (f = !1)
                      }
                  else if ("s" != d && "n" != d) {
                    if (o || s <= a) return !1;
                    f = !1, s--
                  } else {
                    if (s <= a || u < d != o) return !1;
                    f = !1
                  } else "s" != d && "n" != d && (f = !1, s--)
                }
              }
              var c = [],
                p = c.pop.bind(c);
              for (i = 1; i < r.length; i++) {
                var h = r[i];
                c.push(1 == h ? p() | p() : 2 == h ? p() & p() : h ? t(h, n) : !p())
              }
              return !!p()
            },
            r = (r, n, a) => {
              var o = r[n];
              return (n = Object.keys(o).reduce(((r, n) => !t(a, n) || r && !((t, r) => {
                t = e(t), r = e(r);
                for (var n = 0;;) {
                  if (n >= t.length) return n < r.length && "u" != (typeof r[n])[0];
                  var a = t[n],
                    o = (typeof a)[0];
                  if (n >= r.length) return "u" == o;
                  var i = r[n],
                    s = (typeof i)[0];
                  if (o != s) return "o" == o && "n" == s || "s" == s || "u" == o;
                  if ("o" != o && "u" != o && a != i) return a < i;
                  n++
                }
              })(r, n) ? r : n), 0)) && o[n]
            },
            n = (e => function(t, r, n, a) {
              var o = u.I(t);
              return o && o.then ? o.then(e.bind(e, t, u.S[t], r, n, a)) : e(t, u.S[t], r, n, a)
            })(((e, t, n, a, o) => {
              var i = t && u.o(t, n) && r(t, n, a);
              return i ? (e => (e.loaded = 1, e.get()))(i) : o()
            })),
            a = {},
            o = {
              1403: () => n("default", "react", [1, 18, 2, 0], (() => u.e(380).then((() => () => u(3380))))),
              4410: () => n("default", "react-router-dom", [1, 6, 11, 2], (() => Promise.all([u.e(261), u.e(776)]).then((() => () => u(2776))))),
              9779: () => n("default", "react-router-dom", [1, 6, 11, 2], (() => Promise.all([u.e(261), u.e(49)]).then((() => () => u(2049)))))
            },
            i = {
              403: [1403],
              968: [4410, 9779]
            },
            s = {};
          u.f.consumes = (e, t) => {
            u.o(i, e) && i[e].forEach((e => {
              if (u.o(a, e)) return t.push(a[e]);
              if (!s[e]) {
                var r = t => {
                  a[e] = 0, u.m[e] = r => {
                    delete u.c[e], r.exports = t()
                  }
                };
                s[e] = !0;
                var n = t => {
                  delete a[e], u.m[e] = r => {
                    throw delete u.c[e], t
                  }
                };
                try {
                  var i = o[e]();
                  i.then ? t.push(a[e] = i.then(r).catch(n)) : r(i)
                } catch (e) {
                  n(e)
                }
              }
            }))
          }
        })(), (() => {
          if ("undefined" != typeof document) {
            var e = {
              970: 0
            };
            u.f.miniCss = (t, r) => {
              e[t] ? r.push(e[t]) : 0 !== e[t] && {
                968: 1
              } [t] && r.push(e[t] = (e => new Promise(((t, r) => {
                var n = u.miniCssF(e),
                  a = u.p + n;
                if (((e, t) => {
                    for (var r = document.getElementsByTagName("link"), n = 0; n < r.length; n++) {
                      var a = (i = r[n]).getAttribute("data-href") || i.getAttribute("href");
                      if ("stylesheet" === i.rel && (a === e || a === t)) return i
                    }
                    var o = document.getElementsByTagName("style");
                    for (n = 0; n < o.length; n++) {
                      var i;
                      if ((a = (i = o[n]).getAttribute("data-href")) === e || a === t) return i
                    }
                  })(n, a)) return t();
                ((e, t, r, n, a) => {
                  var o = document.createElement("link");
                  o.rel = "stylesheet", o.type = "text/css", o.onerror = o.onload = r => {
                    if (o.onerror = o.onload = null, "load" === r.type) n();
                    else {
                      var i = r && ("load" === r.type ? "missing" : r.type),
                        s = r && r.target && r.target.href || t,
                        f = new Error("Loading CSS chunk " + e + " failed.\n(" + s + ")");
                      f.code = "CSS_CHUNK_LOAD_FAILED", f.type = i, f.request = s, o.parentNode && o.parentNode.removeChild(o), a(f)
                    }
                  }, o.href = t, document.head.appendChild(o)
                })(e, a, 0, t, r)
              })))(t).then((() => {
                e[t] = 0
              }), (r => {
                throw delete e[t], r
              })))
            }
          }
        })(), (() => {
          var e = {
            970: 0
          };
          u.f.j = (t, r) => {
            var n = u.o(e, t) ? e[t] : void 0;
            if (0 !== n)
              if (n) r.push(n[2]);
              else if (403 != t) {
              var a = new Promise(((r, a) => n = e[t] = [r, a]));
              r.push(n[2] = a);
              var o = u.p + u.u(t),
                i = new Error;
              u.l(o, (r => {
                if (u.o(e, t) && (0 !== (n = e[t]) && (e[t] = void 0), n)) {
                  var a = r && ("load" === r.type ? "missing" : r.type),
                    o = r && r.target && r.target.src;
                  i.message = "Loading chunk " + t + " failed.\n(" + a + ": " + o + ")", i.name = "ChunkLoadError", i.type = a, i.request = o, n[1](i)
                }
              }), "chunk-" + t, t)
            } else e[t] = 0
          };
          var t = (t, r) => {
              var n, a, o = r[0],
                i = r[1],
                s = r[2],
                f = 0;
              if (o.some((t => 0 !== e[t]))) {
                for (n in i) u.o(i, n) && (u.m[n] = i[n]);
                s && s(u)
              }
              for (t && t(r); f < o.length; f++) a = o[f], u.o(e, a) && e[a] && e[a][0](), e[a] = 0
            },
            r = self.webpackChunk_rockstargames_sites_gta_tv = self.webpackChunk_rockstargames_sites_gta_tv || [];
          r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
        })(), u(2160), u(8527)
      })())
    }
  }
}));