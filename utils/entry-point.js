! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "cee2cca5-d76e-4f68-90e2-9434c76dca60", e._sentryDebugIdIdentifier = "sentry-dbid-cee2cca5-d76e-4f68-90e2-9434c76dca60")
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
}, System.register(["@rockstargames/graph-client"], (function(e, t) {
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
        var e, a, n, o, i = {
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
                  "./hooks": () => Promise.all([r.e(664), r.e(52), r.e(660), r.e(13), r.e(680), r.e(44), r.e(828)]).then((() => () => r(828))),
                  "./index": () => Promise.all([r.e(664), r.e(52), r.e(660), r.e(13), r.e(204), r.e(680), r.e(44), r.e(372)]).then((() => () => r(372))),
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
            }
          },
          f = {};

        function d(e) {
          var t = f[e];
          if (void 0 !== t) return t.exports;
          var r = f[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return i[e].call(r.exports, r, r.exports, d), r.loaded = !0, r.exports
        }
        return d.m = i, d.c = f, d.y = t, d.n = e => {
          var t = e && e.__esModule ? () => e.default : () => e;
          return d.d(t, {
            a: t
          }), t
        }, d.d = (e, t) => {
          for (var r in t) d.o(t, r) && !d.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: t[r]
          })
        }, d.f = {}, d.e = e => Promise.all(Object.keys(d.f).reduce(((t, r) => (d.f[r](e, t), t)), [])), d.u = e => "js/" + {
          13: "b5dbf5df6fc1bac2024ba6456d73a4ca",
          32: "cf1ae29ee56c41b28bc1e2a7f05e35c9",
          44: "f6e37c42710dd03083dbba2f451aaf1f",
          52: "285e2dd0d811a3e11375c8e645c292cf",
          76: "f5e211d61e6eca39c728fae67c22479e",
          100: "ae68d7db13ce63fdd93212422bdeeb94",
          204: "5cdfcc562ac5ad57d3d4d3fa4784f689",
          372: "c49ec9c5d96d0038558a1815e0e73172",
          400: "a1f9b691164df387371cdb86c0a31813",
          442: "194c435bc6f440afbc56f6c6a6c0eb52",
          543: "c358d36b5b3be8141d0212c71ae2ff41",
          560: "fd84d45e74034917b125a801f68ceb43",
          632: "ae6ad3f831dd569d9f82b03410f56412",
          660: "4862166afe7b40dfad9317a7baf53a7f",
          664: "4c0dc6a6b584fc3136e7aad495b5c5a3",
          680: "9e30c99a103ca32cd3433c9d2c031cd2",
          718: "f36e9ecfd49be9fa557b2034d0a26229",
          744: "0801c755c17b603be93bf5c23d607c75",
          784: "d570c32695b8dba9a266c286687ef220",
          828: "9a07af8735558217be9e336911a8c94c",
          908: "eb911c1492d1ff39c98d732b24670a12"
        } [e] + ".js", d.miniCssF = e => {}, d.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), d.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), e = {}, a = "@rockstargames/utils:", d.l = (t, r, n, o) => {
          if (e[t]) e[t].push(r);
          else {
            var i, f;
            if (void 0 !== n)
              for (var s = document.getElementsByTagName("script"), c = 0; c < s.length; c++) {
                var l = s[c];
                if (l.getAttribute("src") == t || l.getAttribute("data-webpack") == a + n) {
                  i = l;
                  break
                }
              }
            i || (f = !0, (i = document.createElement("script")).charset = "utf-8", i.timeout = 120, d.nc && i.setAttribute("nonce", d.nc), i.setAttribute("data-webpack", a + n), i.src = t), e[t] = [r];
            var u = (r, a) => {
                i.onerror = i.onload = null, clearTimeout(h);
                var n = e[t];
                if (delete e[t], i.parentNode && i.parentNode.removeChild(i), n && n.forEach((e => e(a))), r) return r(a)
              },
              h = setTimeout(u.bind(null, void 0, {
                type: "timeout",
                target: i
              }), 12e4);
            i.onerror = u.bind(null, i.onerror), i.onload = u.bind(null, i.onload), f && document.head.appendChild(i)
          }
        }, d.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, d.nmd = e => (e.paths = [], e.children || (e.children = []), e), n = {
          52: [52],
          680: [680]
        }, o = {
          52: ["default", "./index", 864],
          680: ["default", "./reactive", 864]
        }, d.f.remotes = (e, t) => {
          d.o(n, e) && n[e].forEach((e => {
            var r = d.R;
            r || (r = []);
            var a = o[e];
            if (!(r.indexOf(a) >= 0)) {
              if (r.push(a), a.p) return t.push(a.p);
              var n = t => {
                  t || (t = new Error("Container missing")), "string" == typeof t.message && (t.message += '\nwhile loading "' + a[1] + '" from ' + a[2]), d.m[e] = () => {
                    throw t
                  }, a.p = 0
                },
                i = (e, r, o, i, f, d) => {
                  try {
                    var s = e(r, o);
                    if (!s || !s.then) return f(s, i, d);
                    var c = s.then((e => f(e, i)), n);
                    if (!d) return c;
                    t.push(a.p = c)
                  } catch (e) {
                    n(e)
                  }
                },
                f = (e, t, n) => i(t.get, a[1], r, 0, s, n),
                s = t => {
                  a.p = 1, d.m[e] = e => {
                    e.exports = t()
                  }
                };
              i(d, a[2], 0, 0, ((e, t, r) => e ? i(d.I, a[0], 0, e, f, r) : n()), 1)
            }
          }))
        }, (() => {
          d.S = {};
          var e = {},
            t = {};
          d.I = (r, a) => {
            a || (a = []);
            var n = t[r];
            if (n || (n = t[r] = {}), !(a.indexOf(n) >= 0)) {
              if (a.push(n), e[r]) return e[r];
              d.o(d.S, r) || (d.S[r] = {});
              var o = d.S[r],
                i = "@rockstargames/utils",
                f = (e, t, r, a) => {
                  var n = o[e] = o[e] || {},
                    f = n[t];
                  (!f || !f.loaded && (!a != !f.eager ? a : i > f.from)) && (n[t] = {
                    get: r,
                    from: i,
                    eager: !!a
                  })
                },
                s = [];
              return "default" === r && (f("crypto-hash", "2.0.1", (() => d.e(560).then((() => () => d(560))))), f("deepmerge", "4.3.1", (() => d.e(632).then((() => () => d(632))))), f("lodash", "4.17.21", (() => d.e(784).then((() => () => d(784))))), f("react-gtm-module", "2.0.11", (() => d.e(908).then((() => () => d(908))))), f("react-router-dom", "6.17.0", (() => Promise.all([d.e(718), d.e(664)]).then((() => () => d(718))))), f("react", "18.2.0", (() => d.e(100).then((() => () => d(100))))), (e => {
                var t = e => {
                  return t = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(t));
                  var t
                };
                try {
                  var n = d(864);
                  if (!n) return;
                  var o = e => e && e.init && e.init(d.S[r], a);
                  if (n.then) return s.push(n.then(o, t));
                  var i = o(n);
                  if (i && i.then) return s.push(i.catch(t))
                } catch (e) {
                  t(e)
                }
              })()), s.length ? e[r] = Promise.all(s).then((() => e[r] = 1)) : e[r] = 1
            }
          }
        })(), (() => {
          var e;
          d.g.importScripts && (e = d.g.location + "");
          var t = d.g.document;
          if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
            var r = t.getElementsByTagName("script");
            if (r.length)
              for (var a = r.length - 1; a > -1 && !e;) e = r[a--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), d.p = e
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
                for (var i = 0, f = 1, d = !0;; f++, i++) {
                  var s, c, l = f < r.length ? (typeof r[f])[0] : "";
                  if (i >= a.length || "o" == (c = (typeof(s = a[i]))[0])) return !d || ("u" == l ? f > n && !o : "" == l != o);
                  if ("u" == c) {
                    if (!d || "u" != l) return !1
                  } else if (d)
                    if (l == c)
                      if (f <= n) {
                        if (s != r[f]) return !1
                      } else {
                        if (o ? s > r[f] : s < r[f]) return !1;
                        s != r[f] && (d = !1)
                      }
                  else if ("s" != l && "n" != l) {
                    if (o || f <= n) return !1;
                    d = !1, f--
                  } else {
                    if (f <= n || c < l != o) return !1;
                    d = !1
                  } else "s" != l && "n" != l && (d = !1, f--)
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
                    f = (typeof i)[0];
                  if (o != f) return "o" == o && "n" == f || "s" == f || "u" == o;
                  if ("o" != o && "u" != o && n != i) return n < i;
                  a++
                }
              })(r, a) ? r : a), 0)) && o[a]
            },
            a = (e => function(t, r, a, n) {
              var o = d.I(t);
              return o && o.then ? o.then(e.bind(e, t, d.S[t], r, a, n)) : e(t, d.S[t], r, a, n)
            })(((e, t, a, n, o) => {
              var i = t && d.o(t, a) && r(t, a, n);
              return i ? (e => (e.loaded = 1, e.get()))(i) : o()
            })),
            n = {},
            o = {
              664: () => a("default", "react", [1, 18, 2, 0], (() => d.e(100).then((() => () => d(100))))),
              660: () => a("default", "lodash", [1, 4, 17, 21], (() => d.e(784).then((() => () => d(784))))),
              13: () => a("default", "react-router-dom", [1, 6, 11, 2], (() => d.e(718).then((() => () => d(718))))),
              204: () => a("default", "react-gtm-module", [1, 2, 0, 11], (() => d.e(908).then((() => () => d(908))))),
              128: () => a("default", "deepmerge", [1, 4, 2, 2], (() => d.e(632).then((() => () => d(632))))),
              456: () => a("default", "crypto-hash", [1, 2, 0, 1], (() => d.e(560).then((() => () => d(560)))))
            },
            i = {
              13: [13],
              44: [128, 456],
              204: [204],
              660: [660],
              664: [664]
            },
            f = {};
          d.f.consumes = (e, t) => {
            d.o(i, e) && i[e].forEach((e => {
              if (d.o(n, e)) return t.push(n[e]);
              if (!f[e]) {
                var r = t => {
                  n[e] = 0, d.m[e] = r => {
                    delete d.c[e], r.exports = t()
                  }
                };
                f[e] = !0;
                var a = t => {
                  delete n[e], d.m[e] = r => {
                    throw delete d.c[e], t
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
          d.f.j = (t, r) => {
            var a = d.o(e, t) ? e[t] : void 0;
            if (0 !== a)
              if (a) r.push(a[2]);
              else if (/^(6(60|64|80)|13|204|44|52)$/.test(t)) e[t] = 0;
            else {
              var n = new Promise(((r, n) => a = e[t] = [r, n]));
              r.push(a[2] = n);
              var o = d.p + d.u(t),
                i = new Error;
              d.l(o, (r => {
                if (d.o(e, t) && (0 !== (a = e[t]) && (e[t] = void 0), a)) {
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
                f = r[2],
                s = 0;
              if (o.some((t => 0 !== e[t]))) {
                for (a in i) d.o(i, a) && (d.m[a] = i[a]);
                f && f(d)
              }
              for (t && t(r); s < o.length; s++) n = o[s], d.o(e, n) && e[n] && e[n][0](), e[n] = 0
            },
            r = self.webpackChunk_rockstargames_utils = self.webpackChunk_rockstargames_utils || [];
          r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
        })(), d(824), d(520)
      })())
    }
  }
}));