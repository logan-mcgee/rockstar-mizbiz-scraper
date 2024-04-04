! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "30d9902c-a0c5-4935-b46d-c159dab4ad8f", e._sentryDebugIdIdentifier = "sentry-dbid-30d9902c-a0c5-4935-b46d-c159dab4ad8f")
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
                  "./functions": () => Promise.all([r.e(664), r.e(660), r.e(776)]).then((() => () => r(776))),
                  "./gtm": () => Promise.all([r.e(664), r.e(13), r.e(204), r.e(442)]).then((() => () => r(442))),
                  "./hocs": () => Promise.all([r.e(664), r.e(52), r.e(660), r.e(204), r.e(680), r.e(32)]).then((() => () => r(32))),
                  "./hooks": () => Promise.all([r.e(664), r.e(52), r.e(660), r.e(13), r.e(680), r.e(44), r.e(96)]).then((() => () => r(96))),
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
          d = {};

        function f(e) {
          var t = d[e];
          if (void 0 !== t) return t.exports;
          var r = d[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return i[e].call(r.exports, r, r.exports, f), r.loaded = !0, r.exports
        }
        return f.m = i, f.c = d, f.y = t, f.n = e => {
          var t = e && e.__esModule ? () => e.default : () => e;
          return f.d(t, {
            a: t
          }), t
        }, f.d = (e, t) => {
          for (var r in t) f.o(t, r) && !f.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: t[r]
          })
        }, f.f = {}, f.e = e => Promise.all(Object.keys(f.f).reduce(((t, r) => (f.f[r](e, t), t)), [])), f.u = e => "js/" + {
          13: "b5dbf5df6fc1bac2024ba6456d73a4ca",
          32: "347f220746e496d90aba2dc14a9a8bdd",
          44: "f6e37c42710dd03083dbba2f451aaf1f",
          52: "285e2dd0d811a3e11375c8e645c292cf",
          76: "777e6951bef1218aedacd5205f252c81",
          96: "cb38a1449efd53c44f33f1f060cb1223",
          100: "4040e3235dbcdeecec833e9183aa3aeb",
          204: "5cdfcc562ac5ad57d3d4d3fa4784f689",
          372: "62d09006da43cdbd5194ceca436f7e57",
          442: "3b40ac1bbe6a61dfb316228415a093ae",
          543: "1cb4320700633fed8125bd6b3e0868ed",
          560: "a49614934132cef3e76fda9274a8c012",
          632: "995ee85112b3e5c7441a547eb73b9b41",
          660: "4862166afe7b40dfad9317a7baf53a7f",
          664: "4c0dc6a6b584fc3136e7aad495b5c5a3",
          680: "9e30c99a103ca32cd3433c9d2c031cd2",
          718: "6ee78e32ba4061f7c973e518d19caff4",
          744: "ad7a82f7533074c051b4e1381ec1b98e",
          776: "cd52128e7bd87892e568bc8767228a11",
          784: "06a8caebd7737a225906c7c46ce8db9c",
          908: "aaf551fafc9ffe9e642f291f11b078e9"
        } [e] + ".js", f.miniCssF = e => {}, f.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), f.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), e = {}, a = "@rockstargames/utils:", f.l = (t, r, n, o) => {
          if (e[t]) e[t].push(r);
          else {
            var i, d;
            if (void 0 !== n)
              for (var s = document.getElementsByTagName("script"), c = 0; c < s.length; c++) {
                var l = s[c];
                if (l.getAttribute("src") == t || l.getAttribute("data-webpack") == a + n) {
                  i = l;
                  break
                }
              }
            i || (d = !0, (i = document.createElement("script")).charset = "utf-8", i.timeout = 120, f.nc && i.setAttribute("nonce", f.nc), i.setAttribute("data-webpack", a + n), i.src = t), e[t] = [r];
            var u = (r, a) => {
                i.onerror = i.onload = null, clearTimeout(h);
                var n = e[t];
                if (delete e[t], i.parentNode && i.parentNode.removeChild(i), n && n.forEach((e => e(a))), r) return r(a)
              },
              h = setTimeout(u.bind(null, void 0, {
                type: "timeout",
                target: i
              }), 12e4);
            i.onerror = u.bind(null, i.onerror), i.onload = u.bind(null, i.onload), d && document.head.appendChild(i)
          }
        }, f.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, f.nmd = e => (e.paths = [], e.children || (e.children = []), e), n = {
          52: [52],
          680: [680]
        }, o = {
          52: ["default", "./index", 864],
          680: ["default", "./reactive", 864]
        }, f.f.remotes = (e, t) => {
          f.o(n, e) && n[e].forEach((e => {
            var r = f.R;
            r || (r = []);
            var a = o[e];
            if (!(r.indexOf(a) >= 0)) {
              if (r.push(a), a.p) return t.push(a.p);
              var n = t => {
                  t || (t = new Error("Container missing")), "string" == typeof t.message && (t.message += '\nwhile loading "' + a[1] + '" from ' + a[2]), f.m[e] = () => {
                    throw t
                  }, a.p = 0
                },
                i = (e, r, o, i, d, f) => {
                  try {
                    var s = e(r, o);
                    if (!s || !s.then) return d(s, i, f);
                    var c = s.then((e => d(e, i)), n);
                    if (!f) return c;
                    t.push(a.p = c)
                  } catch (e) {
                    n(e)
                  }
                },
                d = (e, t, n) => i(t.get, a[1], r, 0, s, n),
                s = t => {
                  a.p = 1, f.m[e] = e => {
                    e.exports = t()
                  }
                };
              i(f, a[2], 0, 0, ((e, t, r) => e ? i(f.I, a[0], 0, e, d, r) : n()), 1)
            }
          }))
        }, (() => {
          f.S = {};
          var e = {},
            t = {};
          f.I = (r, a) => {
            a || (a = []);
            var n = t[r];
            if (n || (n = t[r] = {}), !(a.indexOf(n) >= 0)) {
              if (a.push(n), e[r]) return e[r];
              f.o(f.S, r) || (f.S[r] = {});
              var o = f.S[r],
                i = "@rockstargames/utils",
                d = (e, t, r, a) => {
                  var n = o[e] = o[e] || {},
                    d = n[t];
                  (!d || !d.loaded && (!a != !d.eager ? a : i > d.from)) && (n[t] = {
                    get: r,
                    from: i,
                    eager: !!a
                  })
                },
                s = [];
              return "default" === r && (d("crypto-hash", "2.0.1", (() => f.e(560).then((() => () => f(560))))), d("deepmerge", "4.3.1", (() => f.e(632).then((() => () => f(632))))), d("lodash", "4.17.21", (() => f.e(784).then((() => () => f(784))))), d("react-gtm-module", "2.0.11", (() => f.e(908).then((() => () => f(908))))), d("react-router-dom", "6.17.0", (() => Promise.all([f.e(718), f.e(664)]).then((() => () => f(718))))), d("react", "18.2.0", (() => f.e(100).then((() => () => f(100))))), (e => {
                var t = e => {
                  return t = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(t));
                  var t
                };
                try {
                  var n = f(864);
                  if (!n) return;
                  var o = e => e && e.init && e.init(f.S[r], a);
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
          f.g.importScripts && (e = f.g.location + "");
          var t = f.g.document;
          if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
            var r = t.getElementsByTagName("script");
            if (r.length)
              for (var a = r.length - 1; a > -1 && !e;) e = r[a--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), f.p = e
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
                for (var i = 0, d = 1, f = !0;; d++, i++) {
                  var s, c, l = d < r.length ? (typeof r[d])[0] : "";
                  if (i >= a.length || "o" == (c = (typeof(s = a[i]))[0])) return !f || ("u" == l ? d > n && !o : "" == l != o);
                  if ("u" == c) {
                    if (!f || "u" != l) return !1
                  } else if (f)
                    if (l == c)
                      if (d <= n) {
                        if (s != r[d]) return !1
                      } else {
                        if (o ? s > r[d] : s < r[d]) return !1;
                        s != r[d] && (f = !1)
                      }
                  else if ("s" != l && "n" != l) {
                    if (o || d <= n) return !1;
                    f = !1, d--
                  } else {
                    if (d <= n || c < l != o) return !1;
                    f = !1
                  } else "s" != l && "n" != l && (f = !1, d--)
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
                    d = (typeof i)[0];
                  if (o != d) return "o" == o && "n" == d || "s" == d || "u" == o;
                  if ("o" != o && "u" != o && n != i) return n < i;
                  a++
                }
              })(r, a) ? r : a), 0)) && o[a]
            },
            a = (e => function(t, r, a, n) {
              var o = f.I(t);
              return o && o.then ? o.then(e.bind(e, t, f.S[t], r, a, n)) : e(t, f.S[t], r, a, n)
            })(((e, t, a, n, o) => {
              var i = t && f.o(t, a) && r(t, a, n);
              return i ? (e => (e.loaded = 1, e.get()))(i) : o()
            })),
            n = {},
            o = {
              664: () => a("default", "react", [1, 18, 2, 0], (() => f.e(100).then((() => () => f(100))))),
              660: () => a("default", "lodash", [1, 4, 17, 21], (() => f.e(784).then((() => () => f(784))))),
              13: () => a("default", "react-router-dom", [1, 6, 11, 2], (() => f.e(718).then((() => () => f(718))))),
              204: () => a("default", "react-gtm-module", [1, 2, 0, 11], (() => f.e(908).then((() => () => f(908))))),
              128: () => a("default", "deepmerge", [1, 4, 2, 2], (() => f.e(632).then((() => () => f(632))))),
              456: () => a("default", "crypto-hash", [1, 2, 0, 1], (() => f.e(560).then((() => () => f(560)))))
            },
            i = {
              13: [13],
              44: [128, 456],
              204: [204],
              660: [660],
              664: [664]
            },
            d = {};
          f.f.consumes = (e, t) => {
            f.o(i, e) && i[e].forEach((e => {
              if (f.o(n, e)) return t.push(n[e]);
              if (!d[e]) {
                var r = t => {
                  n[e] = 0, f.m[e] = r => {
                    delete f.c[e], r.exports = t()
                  }
                };
                d[e] = !0;
                var a = t => {
                  delete n[e], f.m[e] = r => {
                    throw delete f.c[e], t
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
          f.f.j = (t, r) => {
            var a = f.o(e, t) ? e[t] : void 0;
            if (0 !== a)
              if (a) r.push(a[2]);
              else if (/^(6(60|64|80)|13|204|44|52)$/.test(t)) e[t] = 0;
            else {
              var n = new Promise(((r, n) => a = e[t] = [r, n]));
              r.push(a[2] = n);
              var o = f.p + f.u(t),
                i = new Error;
              f.l(o, (r => {
                if (f.o(e, t) && (0 !== (a = e[t]) && (e[t] = void 0), a)) {
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
                d = r[2],
                s = 0;
              if (o.some((t => 0 !== e[t]))) {
                for (a in i) f.o(i, a) && (f.m[a] = i[a]);
                d && d(f)
              }
              for (t && t(r); s < o.length; s++) n = o[s], f.o(e, n) && e[n] && e[n][0](), e[n] = 0
            },
            r = self.webpackChunk_rockstargames_utils = self.webpackChunk_rockstargames_utils || [];
          r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
        })(), f(824), f(520)
      })())
    }
  }
}));