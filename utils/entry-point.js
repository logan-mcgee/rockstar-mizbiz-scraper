! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "69880fbb-97d2-4193-a348-45d4c865a47f", e._sentryDebugIdIdentifier = "sentry-dbid-69880fbb-97d2-4193-a348-45d4c865a47f")
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
        var e, n, o, i, d = {
            6539: (e, t, r) => {
              (0, r(3403).w)(1)
            },
            3403: (e, t, r) => {
              const a = r(5659).y;
              t.w = function(e) {
                if (e || (e = 1), !r.y.meta || !r.y.meta.url) throw console.error("__system_context__", r.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                r.p = a(r.y.meta.url, e)
              }
            },
            2160: (e, t, r) => {
              r(6539)
            },
            5659: (e, t, r) => {
              t.y = function(e, t) {
                var r = document.createElement("a");
                r.href = e;
                for (var a = "/" === r.pathname[0] ? r.pathname : "/" + r.pathname, n = 0, o = a.length; n !== t && o >= 0;) "/" === a[--o] && n++;
                if (n !== t) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + t + ") is greater than the number of directories (" + n + ") in the URL path " + e);
                var i = a.slice(0, o + 1);
                return r.protocol + "//" + r.host + i
              };
              Number.isInteger
            },
            3930: (e, t, r) => {
              "use strict";
              var a = {
                  "./functions": () => Promise.all([r.e(403), r.e(252), r.e(509)]).then((() => () => r(6509))),
                  "./gtm": () => Promise.all([r.e(403), r.e(779), r.e(482), r.e(551)]).then((() => () => r(6551))),
                  "./hocs": () => Promise.all([r.e(403), r.e(407), r.e(252), r.e(482), r.e(136), r.e(244)]).then((() => () => r(3244))),
                  "./hooks": () => Promise.all([r.e(403), r.e(407), r.e(252), r.e(779), r.e(136), r.e(705)]).then((() => () => r(8705))),
                  "./index": () => Promise.all([r.e(403), r.e(407), r.e(252), r.e(779), r.e(482), r.e(136), r.e(705), r.e(886)]).then((() => () => r(3886))),
                  "./local-storage-settings": () => Promise.all([r.e(407), r.e(847)]).then((() => () => r(6847))),
                  "./onetrust": () => r.e(150).then((() => () => r(2150))),
                  "./providers": () => Promise.all([r.e(403), r.e(407), r.e(50)]).then((() => () => r(4050)))
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
            1024: e => {
              "use strict";
              e.exports = r
            },
            2969: e => {
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
          return d[e].call(r.exports, r, r.exports, c), r.loaded = !0, r.exports
        }
        return c.m = d, c.c = f, c.y = t, c.amdO = {}, c.n = e => {
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
          50: "c1ac29ffc1484a9ed9d1a9f086066fc6",
          136: "efd41f4c8d3b88fb4fe43c7de672275d",
          150: "43aceac13cacde409095989d1658f31e",
          244: "0664a5292f3673c8fdcc2083ef15eee6",
          252: "3fc32d9a38186c5d66de6088885b50ac",
          327: "eb104d9bbee92680cdeb4c3ae55807c7",
          369: "6b22995d22e824de5617712578a1dc31",
          380: "fbce3b6bd32c486519238d92cb9edce7",
          398: "a35c264e99cb5676073689afaef72a24",
          403: "6d2499285b8ef978a74780129750e875",
          407: "afeee0d8645ef44371880cb2c531f2b0",
          429: "8835f36ee2687e620f144c4f5d38e665",
          482: "ad6aedf1c0208dc6c6a9d4a3db0d7974",
          509: "24bdbb1ca0b7736cb5952bd497f963ff",
          551: "5d4f8e91ddf465fec302e429efb09561",
          705: "4cfb89cb3278298683059d09c6fab2b7",
          714: "32fe108643106dda5866c6cbe1cad49f",
          750: "219cdfe2ca638a74957db1e55d805852",
          779: "b139f7747f8124e8d3f7d0e65b7cf725",
          847: "5a10541d17d5e8a6e6ff4f8b612a337a",
          886: "25da25e927e5ef751e99d268a33ce6f0",
          961: "048e0817c5b9e5ab514a77643e4d27f1",
          977: "74fe8c603f1cb170e4ae6e8047ec7326"
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
            var i, d;
            if (void 0 !== a)
              for (var f = document.getElementsByTagName("script"), s = 0; s < f.length; s++) {
                var l = f[s];
                if (l.getAttribute("src") == t || l.getAttribute("data-webpack") == n + a) {
                  i = l;
                  break
                }
              }
            i || (d = !0, (i = document.createElement("script")).charset = "utf-8", i.timeout = 120, c.nc && i.setAttribute("nonce", c.nc), i.setAttribute("data-webpack", n + a), i.src = t), e[t] = [r];
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
        }, c.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, c.nmd = e => (e.paths = [], e.children || (e.children = []), e), o = {
          136: [136],
          407: [8407],
          705: [2756]
        }, i = {
          136: ["default", "./reactive", 1024],
          2756: ["default", "./index", 2969],
          8407: ["default", "./index", 1024]
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
                o = (e, r, o, i, d, f) => {
                  try {
                    var c = e(r, o);
                    if (!c || !c.then) return d(c, i, f);
                    var s = c.then((e => d(e, i)), n);
                    if (!f) return s;
                    t.push(a.p = s)
                  } catch (e) {
                    n(e)
                  }
                },
                d = (e, t, n) => o(t.get, a[1], r, 0, f, n),
                f = t => {
                  a.p = 1, c.m[e] = e => {
                    e.exports = t()
                  }
                };
              o(c, a[2], 0, 0, ((e, t, r) => e ? o(c.I, a[0], 0, e, d, r) : n()), 1)
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
                d = (e, t, r, a) => {
                  var n = o[e] = o[e] || {},
                    d = n[t];
                  (!d || !d.loaded && (!a != !d.eager ? a : i > d.from)) && (n[t] = {
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
                    if (n.then) return s.push(n.then(o, t));
                    var i = o(n);
                    if (i && i.then) return s.push(i.catch(t))
                  } catch (e) {
                    t(e)
                  }
                },
                s = [];
              return "default" === r && (d("crypto-hash", "2.0.1", (() => c.e(961).then((() => () => c(9961))))), d("deepmerge", "4.3.1", (() => c.e(327).then((() => () => c(7327))))), d("lodash", "4.17.21", (() => c.e(429).then((() => () => c(9429))))), d("react-adaptive-hooks", "0.0.8", (() => Promise.all([c.e(403), c.e(369)]).then((() => () => c(4369))))), d("react-device-detect", "2.2.3", (() => Promise.all([c.e(977), c.e(403)]).then((() => () => c(1977))))), d("react-gtm-module", "2.0.11", (() => c.e(714).then((() => () => c(714))))), d("react-router-dom", "6.17.0", (() => Promise.all([c.e(398), c.e(403)]).then((() => () => c(3398))))), d("react", "18.2.0", (() => c.e(380).then((() => () => c(3380))))), f(1024), f(2969)), s.length ? e[r] = Promise.all(s).then((() => e[r] = 1)) : e[r] = 1
            }
          }
        })(), (() => {
          var e;
          c.g.importScripts && (e = c.g.location + "");
          var t = c.g.document;
          if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
            var r = t.getElementsByTagName("script");
            if (r.length)
              for (var a = r.length - 1; a > -1 && (!e || !/^http(s?):/.test(e));) e = r[a--].src
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
                for (var i = 0, d = 1, f = !0;; d++, i++) {
                  var c, s, l = d < r.length ? (typeof r[d])[0] : "";
                  if (i >= a.length || "o" == (s = (typeof(c = a[i]))[0])) return !f || ("u" == l ? d > n && !o : "" == l != o);
                  if ("u" == s) {
                    if (!f || "u" != l) return !1
                  } else if (f)
                    if (l == s)
                      if (d <= n) {
                        if (c != r[d]) return !1
                      } else {
                        if (o ? c > r[d] : c < r[d]) return !1;
                        c != r[d] && (f = !1)
                      }
                  else if ("s" != l && "n" != l) {
                    if (o || d <= n) return !1;
                    f = !1, d--
                  } else {
                    if (d <= n || s < l != o) return !1;
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
              var o = c.I(t);
              return o && o.then ? o.then(e.bind(e, t, c.S[t], r, a, n)) : e(t, c.S[t], r, a, n)
            })(((e, t, a, n, o) => {
              var i = t && c.o(t, a) && r(t, a, n);
              return i ? (e => (e.loaded = 1, e.get()))(i) : o()
            })),
            n = {},
            o = {
              1403: () => a("default", "react", [1, 18, 2, 0], (() => c.e(380).then((() => () => c(3380))))),
              4252: () => a("default", "lodash", [1, 4, 17, 21], (() => c.e(429).then((() => () => c(9429))))),
              9779: () => a("default", "react-router-dom", [1, 6, 11, 2], (() => c.e(398).then((() => () => c(3398))))),
              1482: () => a("default", "react-gtm-module", [1, 2, 0, 11], (() => c.e(714).then((() => () => c(714))))),
              4686: () => a("default", "crypto-hash", [1, 2, 0, 1], (() => c.e(961).then((() => () => c(9961))))),
              4999: () => a("default", "react-device-detect", [1, 2, 2, 3], (() => c.e(977).then((() => () => c(1977))))),
              6540: () => a("default", "deepmerge", [1, 4, 2, 2], (() => c.e(327).then((() => () => c(7327))))),
              9928: () => a("default", "react-adaptive-hooks", [3, 0, 0, 8], (() => c.e(750).then((() => () => c(4369)))))
            },
            i = {
              252: [4252],
              403: [1403],
              482: [1482],
              705: [4686, 4999, 6540, 9928],
              779: [9779]
            },
            d = {};
          c.f.consumes = (e, t) => {
            c.o(i, e) && i[e].forEach((e => {
              if (c.o(n, e)) return t.push(n[e]);
              if (!d[e]) {
                var r = t => {
                  n[e] = 0, c.m[e] = r => {
                    delete c.c[e], r.exports = t()
                  }
                };
                d[e] = !0;
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
            689: 0
          };
          c.f.j = (t, r) => {
            var a = c.o(e, t) ? e[t] : void 0;
            if (0 !== a)
              if (a) r.push(a[2]);
              else if (/^(4(03|07|82)|136|252|779)$/.test(t)) e[t] = 0;
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
                d = r[2],
                f = 0;
              if (o.some((t => 0 !== e[t]))) {
                for (a in i) c.o(i, a) && (c.m[a] = i[a]);
                d && d(c)
              }
              for (t && t(r); f < o.length; f++) n = o[f], c.o(e, n) && e[n] && e[n][0](), e[n] = 0
            },
            r = self.webpackChunk_rockstargames_utils = self.webpackChunk_rockstargames_utils || [];
          r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
        })(), c(2160), c(3930)
      })())
    }
  }
}));