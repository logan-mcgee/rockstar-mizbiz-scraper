! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "7aa0284e-b5f4-4369-b203-f411088874e8", e._sentryDebugIdIdentifier = "sentry-dbid-7aa0284e-b5f4-4369-b203-f411088874e8")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/utils",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register(["@rockstargames/graph-client", "@rockstargames/utils"], (function(e, t) {
  var r = {},
    a = {};
  return Object.defineProperty(r, "__esModule", {
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
        a[t] = e[t]
      }))
    }],
    execute: function() {
      e((() => {
        var e, n, o, i, s = {
            364: (e, t, r) => {
              (0, r(284).G)(1)
            },
            284: (e, t, r) => {
              const a = r(984).Q;
              t.G = function(e) {
                if (e || (e = 1), !r.y.meta || !r.y.meta.url) throw console.error("__system_context__", r.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                r.p = a(r.y.meta.url, e)
              }
            },
            824: (e, t, r) => {
              r(364)
            },
            984: (e, t, r) => {
              t.Q = function(e, t) {
                var r = document.createElement("a");
                r.href = e;
                for (var a = "/" === r.pathname[0] ? r.pathname : "/" + r.pathname, n = 0, o = a.length; n !== t && o >= 0;) "/" === a[--o] && n++;
                if (n !== t) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + t + ") is greater than the number of directories (" + n + ") in the URL path " + e);
                var i = a.slice(0, o + 1);
                return r.protocol + "//" + r.host + i
              };
              Number.isInteger
            },
            520: (e, t, r) => {
              "use strict";
              var a = {
                  "./functions": () => Promise.all([r.e(664), r.e(660), r.e(400)]).then((() => () => r(400))),
                  "./gtm": () => Promise.all([r.e(664), r.e(13), r.e(204), r.e(442)]).then((() => () => r(442))),
                  "./hocs": () => Promise.all([r.e(664), r.e(52), r.e(660), r.e(204), r.e(680), r.e(32)]).then((() => () => r(32))),
                  "./hooks": () => Promise.all([r.e(664), r.e(52), r.e(660), r.e(13), r.e(680), r.e(992), r.e(240)]).then((() => () => r(860))),
                  "./index": () => Promise.all([r.e(664), r.e(52), r.e(660), r.e(13), r.e(204), r.e(680), r.e(992), r.e(372)]).then((() => () => r(372))),
                  "./local-storage-settings": () => Promise.all([r.e(52), r.e(744)]).then((() => () => r(744))),
                  "./onetrust": () => r.e(76).then((() => () => r(76))),
                  "./providers": () => Promise.all([r.e(664), r.e(52), r.e(543)]).then((() => () => r(543)))
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
            864: e => {
              "use strict";
              e.exports = r
            },
            344: e => {
              "use strict";
              e.exports = a
            }
          },
          f = {};

        function c(e) {
          var t = f[e];
          if (void 0 !== t) return t.exports;
          var r = f[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return s[e].call(r.exports, r, r.exports, c), r.loaded = !0, r.exports
        }
        return c.m = s, c.c = f, c.y = t, c.n = e => {
          var t = e && e.__esModule ? () => e.default : () => e;
          return c.d(t, {
            a: t
          }), t
        }, c.d = (e, t) => {
          for (var r in t) c.o(t, r) && !c.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: t[r]
          })
        }, c.f = {}, c.e = e => Promise.all(Object.keys(c.f).reduce(((t, r) => (c.f[r](e, t), t)), [])), c.u = e => "js/" + {
          13: "b5dbf5df6fc1bac2024ba6456d73a4ca",
          32: "cdf39ff363150b3f9059059f44aa2c62",
          52: "285e2dd0d811a3e11375c8e645c292cf",
          76: "4c0645b74cd51d2d63ce0cd7202048d6",
          100: "7d8edd6c1665148ba746ed494c6d6be7",
          204: "5cdfcc562ac5ad57d3d4d3fa4784f689",
          240: "beaa8a754abc29804d40618810b79f5b",
          372: "61a87344102542f72a5281faaa0c0400",
          400: "3436741945a180fafee3a2af0dd5027f",
          442: "23ee9506944647bd36aa3e1ce7b89cee",
          543: "c4fa1576b342db2d853f6c83ab2aeabb",
          560: "14742b5bd31074fcf14dfa0df4acdbab",
          632: "87edbda2e0bd714ab4aa80e59f7a436b",
          660: "4862166afe7b40dfad9317a7baf53a7f",
          664: "4c0dc6a6b584fc3136e7aad495b5c5a3",
          680: "9e30c99a103ca32cd3433c9d2c031cd2",
          718: "303741ccc3cc35ea686e1f97af401467",
          744: "c2cdddaf754496086a8f54e315bc0afc",
          784: "870447a22ce32e74803924026bffc53a",
          908: "ee6ccd33e89072f1b5ea50923b10ac4e",
          992: "a6181e5db0cbe23258a2aac03b9af97c"
        } [e] + ".js", c.miniCssF = e => {}, c.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), c.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), e = {}, n = "@rockstargames/utils:", c.l = (t, r, a, o) => {
          if (e[t]) e[t].push(r);
          else {
            var i, s;
            if (void 0 !== a)
              for (var f = document.getElementsByTagName("script"), d = 0; d < f.length; d++) {
                var l = f[d];
                if (l.getAttribute("src") == t || l.getAttribute("data-webpack") == n + a) {
                  i = l;
                  break
                }
              }
            i || (s = !0, (i = document.createElement("script")).charset = "utf-8", i.timeout = 120, c.nc && i.setAttribute("nonce", c.nc), i.setAttribute("data-webpack", n + a), i.src = t), e[t] = [r];
            var u = (r, a) => {
                i.onerror = i.onload = null, clearTimeout(h);
                var n = e[t];
                if (delete e[t], i.parentNode && i.parentNode.removeChild(i), n && n.forEach((e => e(a))), r) return r(a)
              },
              h = setTimeout(u.bind(null, void 0, {
                type: "timeout",
                target: i
              }), 12e4);
            i.onerror = u.bind(null, i.onerror), i.onload = u.bind(null, i.onload), s && document.head.appendChild(i)
          }
        }, c.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, c.nmd = e => (e.paths = [], e.children || (e.children = []), e), o = {
          52: [52],
          680: [680],
          992: [792]
        }, i = {
          52: ["default", "./index", 864],
          680: ["default", "./reactive", 864],
          792: ["default", "./index", 344]
        }, c.f.remotes = (e, t) => {
          c.o(o, e) && o[e].forEach((e => {
            var r = c.R;
            r || (r = []);
            var a = i[e];
            if (!(r.indexOf(a) >= 0)) {
              if (r.push(a), a.p) return t.push(a.p);
              var n = t => {
                  t || (t = new Error("Container missing")), "string" == typeof t.message && (t.message += '\nwhile loading "' + a[1] + '" from ' + a[2]), c.m[e] = () => {
                    throw t
                  }, a.p = 0
                },
                o = (e, r, o, i, s, f) => {
                  try {
                    var c = e(r, o);
                    if (!c || !c.then) return s(c, i, f);
                    var d = c.then((e => s(e, i)), n);
                    if (!f) return d;
                    t.push(a.p = d)
                  } catch (e) {
                    n(e)
                  }
                },
                s = (e, t, n) => o(t.get, a[1], r, 0, f, n),
                f = t => {
                  a.p = 1, c.m[e] = e => {
                    e.exports = t()
                  }
                };
              o(c, a[2], 0, 0, ((e, t, r) => e ? o(c.I, a[0], 0, e, s, r) : n()), 1)
            }
          }))
        }, (() => {
          c.S = {};
          var e = {},
            t = {};
          c.I = (r, a) => {
            a || (a = []);
            var n = t[r];
            if (n || (n = t[r] = {}), !(a.indexOf(n) >= 0)) {
              if (a.push(n), e[r]) return e[r];
              c.o(c.S, r) || (c.S[r] = {});
              var o = c.S[r],
                i = "@rockstargames/utils",
                s = (e, t, r, a) => {
                  var n = o[e] = o[e] || {},
                    s = n[t];
                  (!s || !s.loaded && (!a != !s.eager ? a : i > s.from)) && (n[t] = {
                    get: r,
                    from: i,
                    eager: !!a
                  })
                },
                f = e => {
                  var t = e => {
                    return t = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(t));
                    var t
                  };
                  try {
                    var n = c(e);
                    if (!n) return;
                    var o = e => e && e.init && e.init(c.S[r], a);
                    if (n.then) return d.push(n.then(o, t));
                    var i = o(n);
                    if (i && i.then) return d.push(i.catch(t))
                  } catch (e) {
                    t(e)
                  }
                },
                d = [];
              return "default" === r && (s("crypto-hash", "2.0.1", (() => c.e(560).then((() => () => c(560))))), s("deepmerge", "4.3.1", (() => c.e(632).then((() => () => c(632))))), s("lodash", "4.17.21", (() => c.e(784).then((() => () => c(784))))), s("react-gtm-module", "2.0.11", (() => c.e(908).then((() => () => c(908))))), s("react-router-dom", "6.17.0", (() => Promise.all([c.e(718), c.e(664)]).then((() => () => c(718))))), s("react", "18.2.0", (() => c.e(100).then((() => () => c(100))))), f(864), f(344)), d.length ? e[r] = Promise.all(d).then((() => e[r] = 1)) : e[r] = 1
            }
          }
        })(), (() => {
          var e;
          c.g.importScripts && (e = c.g.location + "");
          var t = c.g.document;
          if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
            var r = t.getElementsByTagName("script");
            if (r.length)
              for (var a = r.length - 1; a > -1 && !e;) e = r[a--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), c.p = e
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
                for (var i = 0, s = 1, f = !0;; s++, i++) {
                  var c, d, l = s < r.length ? (typeof r[s])[0] : "";
                  if (i >= a.length || "o" == (d = (typeof(c = a[i]))[0])) return !f || ("u" == l ? s > n && !o : "" == l != o);
                  if ("u" == d) {
                    if (!f || "u" != l) return !1
                  } else if (f)
                    if (l == d)
                      if (s <= n) {
                        if (c != r[s]) return !1
                      } else {
                        if (o ? c > r[s] : c < r[s]) return !1;
                        c != r[s] && (f = !1)
                      }
                  else if ("s" != l && "n" != l) {
                    if (o || s <= n) return !1;
                    f = !1, s--
                  } else {
                    if (s <= n || d < l != o) return !1;
                    f = !1
                  } else "s" != l && "n" != l && (f = !1, s--)
                }
              }
              var u = [],
                h = u.pop.bind(u);
              for (i = 1; i < r.length; i++) {
                var p = r[i];
                u.push(1 == p ? h() | h() : 2 == p ? h() & h() : p ? t(p, a) : !h())
              }
              return !!h()
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
                  var i = r[a],
                    s = (typeof i)[0];
                  if (o != s) return "o" == o && "n" == s || "s" == s || "u" == o;
                  if ("o" != o && "u" != o && n != i) return n < i;
                  a++
                }
              })(r, a) ? r : a), 0)) && o[a]
            },
            a = (e => function(t, r, a, n) {
              var o = c.I(t);
              return o && o.then ? o.then(e.bind(e, t, c.S[t], r, a, n)) : e(t, c.S[t], r, a, n)
            })(((e, t, a, n, o) => {
              var i = t && c.o(t, a) && r(t, a, n);
              return i ? (e => (e.loaded = 1, e.get()))(i) : o()
            })),
            n = {},
            o = {
              664: () => a("default", "react", [1, 18, 2, 0], (() => c.e(100).then((() => () => c(100))))),
              660: () => a("default", "lodash", [1, 4, 17, 21], (() => c.e(784).then((() => () => c(784))))),
              13: () => a("default", "react-router-dom", [1, 6, 11, 2], (() => c.e(718).then((() => () => c(718))))),
              204: () => a("default", "react-gtm-module", [1, 2, 0, 11], (() => c.e(908).then((() => () => c(908))))),
              128: () => a("default", "deepmerge", [1, 4, 2, 2], (() => c.e(632).then((() => () => c(632))))),
              456: () => a("default", "crypto-hash", [1, 2, 0, 1], (() => c.e(560).then((() => () => c(560)))))
            },
            i = {
              13: [13],
              204: [204],
              660: [660],
              664: [664],
              992: [128, 456]
            },
            s = {};
          c.f.consumes = (e, t) => {
            c.o(i, e) && i[e].forEach((e => {
              if (c.o(n, e)) return t.push(n[e]);
              if (!s[e]) {
                var r = t => {
                  n[e] = 0, c.m[e] = r => {
                    delete c.c[e], r.exports = t()
                  }
                };
                s[e] = !0;
                var a = t => {
                  delete n[e], c.m[e] = r => {
                    throw delete c.c[e], t
                  }
                };
                try {
                  var i = o[e]();
                  i.then ? t.push(n[e] = i.then(r).catch(a)) : r(i)
                } catch (e) {
                  a(e)
                }
              }
            }))
          }
        })(), (() => {
          var e = {
            676: 0
          };
          c.f.j = (t, r) => {
            var a = c.o(e, t) ? e[t] : void 0;
            if (0 !== a)
              if (a) r.push(a[2]);
              else if (/^(6(60|64|80)|13|204|52|992)$/.test(t)) e[t] = 0;
            else {
              var n = new Promise(((r, n) => a = e[t] = [r, n]));
              r.push(a[2] = n);
              var o = c.p + c.u(t),
                i = new Error;
              c.l(o, (r => {
                if (c.o(e, t) && (0 !== (a = e[t]) && (e[t] = void 0), a)) {
                  var n = r && ("load" === r.type ? "missing" : r.type),
                    o = r && r.target && r.target.src;
                  i.message = "Loading chunk " + t + " failed.\n(" + n + ": " + o + ")", i.name = "ChunkLoadError", i.type = n, i.request = o, a[1](i)
                }
              }), "chunk-" + t, t)
            }
          };
          var t = (t, r) => {
              var a, n, o = r[0],
                i = r[1],
                s = r[2],
                f = 0;
              if (o.some((t => 0 !== e[t]))) {
                for (a in i) c.o(i, a) && (c.m[a] = i[a]);
                s && s(c)
              }
              for (t && t(r); f < o.length; f++) n = o[f], c.o(e, n) && e[n] && e[n][0](), e[n] = 0
            },
            r = self.webpackChunk_rockstargames_utils = self.webpackChunk_rockstargames_utils || [];
          r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
        })(), c(824), c(520)
      })())
    }
  }
}));