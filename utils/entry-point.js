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
        var e, n, o, i, f = {
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
          s = {};

        function d(e) {
          var t = s[e];
          if (void 0 !== t) return t.exports;
          var r = s[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return f[e].call(r.exports, r, r.exports, d), r.loaded = !0, r.exports
        }
        return d.m = f, d.c = s, d.y = t, d.n = e => {
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
          32: "d5a0fc12787621af3a9f1d5de4fc1aab",
          52: "285e2dd0d811a3e11375c8e645c292cf",
          76: "c6e2bb9e388d74d6574ec1c1c26d8238",
          100: "409398cf54fff42895e7694bc8133a57",
          204: "5cdfcc562ac5ad57d3d4d3fa4784f689",
          240: "ea5d8a57a5431badf590576617e7c335",
          372: "262a68ea9d0089f33c52afa041c8bc97",
          400: "879a217f5bf37dbf7670b38a67fda648",
          442: "4124c845682e97f9f8ed44bb1d0df4c7",
          543: "dfd6490f964cb54cab9f3f45166506a4",
          560: "10bbc54653be73fa5b1ba7e10bc22be5",
          632: "833e069dfa2586699f623411ed41a9a6",
          660: "4862166afe7b40dfad9317a7baf53a7f",
          664: "4c0dc6a6b584fc3136e7aad495b5c5a3",
          680: "9e30c99a103ca32cd3433c9d2c031cd2",
          718: "4aac5c9102ccd1d6d8adfc19dc6136f2",
          744: "60d4db8406e479227d5cb679c78ba4dc",
          784: "0ca678f8ceefe37d99d3d2dd9dbfce39",
          908: "4bafff27b4998f1c9322e1331de270c5",
          992: "a6181e5db0cbe23258a2aac03b9af97c"
        } [e] + ".js", d.miniCssF = e => {}, d.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), d.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), e = {}, n = "@rockstargames/utils:", d.l = (t, r, a, o) => {
          if (e[t]) e[t].push(r);
          else {
            var i, f;
            if (void 0 !== a)
              for (var s = document.getElementsByTagName("script"), c = 0; c < s.length; c++) {
                var l = s[c];
                if (l.getAttribute("src") == t || l.getAttribute("data-webpack") == n + a) {
                  i = l;
                  break
                }
              }
            i || (f = !0, (i = document.createElement("script")).charset = "utf-8", i.timeout = 120, d.nc && i.setAttribute("nonce", d.nc), i.setAttribute("data-webpack", n + a), i.src = t), e[t] = [r];
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
        }, d.nmd = e => (e.paths = [], e.children || (e.children = []), e), o = {
          52: [52],
          680: [680],
          992: [792]
        }, i = {
          52: ["default", "./index", 864],
          680: ["default", "./reactive", 864],
          792: ["default", "./index", 344]
        }, d.f.remotes = (e, t) => {
          d.o(o, e) && o[e].forEach((e => {
            var r = d.R;
            r || (r = []);
            var a = i[e];
            if (!(r.indexOf(a) >= 0)) {
              if (r.push(a), a.p) return t.push(a.p);
              var n = t => {
                  t || (t = new Error("Container missing")), "string" == typeof t.message && (t.message += '\nwhile loading "' + a[1] + '" from ' + a[2]), d.m[e] = () => {
                    throw t
                  }, a.p = 0
                },
                o = (e, r, o, i, f, s) => {
                  try {
                    var d = e(r, o);
                    if (!d || !d.then) return f(d, i, s);
                    var c = d.then((e => f(e, i)), n);
                    if (!s) return c;
                    t.push(a.p = c)
                  } catch (e) {
                    n(e)
                  }
                },
                f = (e, t, n) => o(t.get, a[1], r, 0, s, n),
                s = t => {
                  a.p = 1, d.m[e] = e => {
                    e.exports = t()
                  }
                };
              o(d, a[2], 0, 0, ((e, t, r) => e ? o(d.I, a[0], 0, e, f, r) : n()), 1)
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
                s = e => {
                  var t = e => {
                    return t = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(t));
                    var t
                  };
                  try {
                    var n = d(e);
                    if (!n) return;
                    var o = e => e && e.init && e.init(d.S[r], a);
                    if (n.then) return c.push(n.then(o, t));
                    var i = o(n);
                    if (i && i.then) return c.push(i.catch(t))
                  } catch (e) {
                    t(e)
                  }
                },
                c = [];
              return "default" === r && (f("crypto-hash", "2.0.1", (() => d.e(560).then((() => () => d(560))))), f("deepmerge", "4.3.1", (() => d.e(632).then((() => () => d(632))))), f("lodash", "4.17.21", (() => d.e(784).then((() => () => d(784))))), f("react-gtm-module", "2.0.11", (() => d.e(908).then((() => () => d(908))))), f("react-router-dom", "6.17.0", (() => Promise.all([d.e(718), d.e(664)]).then((() => () => d(718))))), f("react", "18.2.0", (() => d.e(100).then((() => () => d(100))))), s(864), s(344)), c.length ? e[r] = Promise.all(c).then((() => e[r] = 1)) : e[r] = 1
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
                for (var i = 0, f = 1, s = !0;; f++, i++) {
                  var d, c, l = f < r.length ? (typeof r[f])[0] : "";
                  if (i >= a.length || "o" == (c = (typeof(d = a[i]))[0])) return !s || ("u" == l ? f > n && !o : "" == l != o);
                  if ("u" == c) {
                    if (!s || "u" != l) return !1
                  } else if (s)
                    if (l == c)
                      if (f <= n) {
                        if (d != r[f]) return !1
                      } else {
                        if (o ? d > r[f] : d < r[f]) return !1;
                        d != r[f] && (s = !1)
                      }
                  else if ("s" != l && "n" != l) {
                    if (o || f <= n) return !1;
                    s = !1, f--
                  } else {
                    if (f <= n || c < l != o) return !1;
                    s = !1
                  } else "s" != l && "n" != l && (s = !1, f--)
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
              204: [204],
              660: [660],
              664: [664],
              992: [128, 456]
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
              else if (/^(6(60|64|80)|13|204|52|992)$/.test(t)) e[t] = 0;
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