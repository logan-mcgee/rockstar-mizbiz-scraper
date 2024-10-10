! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "12cf8166-76e0-4830-b441-e54087aa0f54", e._sentryDebugIdIdentifier = "sentry-dbid-12cf8166-76e0-4830-b441-e54087aa0f54")
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
}, System.register(["@rockstargames/graph-client", "@rockstargames/modules-core-sc-user", "@rockstargames/utils"], (function(e, t) {
  var r = {},
    a = {},
    n = {};
  return Object.defineProperty(r, "__esModule", {
    value: !0
  }), Object.defineProperty(a, "__esModule", {
    value: !0
  }), Object.defineProperty(n, "__esModule", {
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
    }],
    execute: function() {
      e((() => {
        var e, o, s, i, d = {
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
                var s = a.slice(0, o + 1);
                return r.protocol + "//" + r.host + s
              };
              Number.isInteger
            },
            4516: (e, t, r) => {
              "use strict";
              var a = {
                  "./bootstrap": () => r.e(362).then((() => () => r(7362))),
                  "./index": () => Promise.all([r.e(386), r.e(403), r.e(37), r.e(493), r.e(24), r.e(179)]).then((() => () => r(8179)))
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
            404: e => {
              "use strict";
              e.exports = a
            },
            2969: e => {
              "use strict";
              e.exports = n
            }
          },
          l = {};

        function f(e) {
          var t = l[e];
          if (void 0 !== t) return t.exports;
          var r = l[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return d[e].call(r.exports, r, r.exports, f), r.loaded = !0, r.exports
        }
        return f.m = d, f.c = l, f.y = t, f.amdO = {}, f.n = e => {
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
          24: "d4da38bbd4fc9923eb33a5b2d53dc4de",
          37: "697c094228efc68071ab486eabe80211",
          66: "759a03f4a1fb0628987b4e5d70a06bb3",
          141: "df928354429a3e7bf5b9ad0271269058",
          143: "feefdf57ce01a91a40078d0d1e1000f8",
          149: "1083b07d1c3aa34cfe38b654e42d69cf",
          179: "115a1a2ce001d02923177a13a702fcf3",
          362: "0ac2802ef2de32522f7e72291681a17a",
          380: "73faf3cf2ee5139af8b2039795f69ccb",
          386: "deae4f3f54ccede38132a7d2d0f66748",
          398: "96bc6b5f1f75bcf7bda9be526de45cfd",
          403: "0219be6d00c90780f3157851115f3f68",
          429: "e244723c0dd538e3cad7e2e1e675ef44",
          487: "b3158c3b8d9881bcf88e3ccb7cd509e4",
          493: "05956063d4fd2640a858d44161485d1c",
          522: "659df2e8e2b63150895eccea34e36730",
          524: "512765a0f2128cab202d096ea002cd64",
          533: "f891f492a8123da62915d1fa7f68d995",
          642: "5ec30073f8e19257c33e62851d12f1cd",
          844: "2b4a5720d7025c6f58c899d8e74917b6",
          852: "2099b52c496613a5d9315705fcc8bd5f",
          952: "4643d9fe8065b130c0c620be36a01d80"
        } [e] + ".js", f.miniCssF = e => "css/" + {
          24: "7e2653af33b38ebd7b34e08de6b498d4",
          952: "83985883a5ba81f90576b4722c3b7900"
        } [e] + ".css", f.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), f.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), e = {}, o = "@rockstargames/modules-gtao-license-plate:", f.l = (t, r, a, n) => {
          if (e[t]) e[t].push(r);
          else {
            var s, i;
            if (void 0 !== a)
              for (var d = document.getElementsByTagName("script"), l = 0; l < d.length; l++) {
                var c = d[l];
                if (c.getAttribute("src") == t || c.getAttribute("data-webpack") == o + a) {
                  s = c;
                  break
                }
              }
            s || (i = !0, (s = document.createElement("script")).charset = "utf-8", s.timeout = 120, f.nc && s.setAttribute("nonce", f.nc), s.setAttribute("data-webpack", o + a), s.src = t), e[t] = [r];
            var u = (r, a) => {
                s.onerror = s.onload = null, clearTimeout(h);
                var n = e[t];
                if (delete e[t], s.parentNode && s.parentNode.removeChild(s), n && n.forEach((e => e(a))), r) return r(a)
              },
              h = setTimeout(u.bind(null, void 0, {
                type: "timeout",
                target: s
              }), 12e4);
            s.onerror = u.bind(null, s.onerror), s.onload = u.bind(null, s.onload), i && document.head.appendChild(s)
          }
        }, f.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, f.nmd = e => (e.paths = [], e.children || (e.children = []), e), s = {
          24: [207, 396, 2756, 2757, 8407],
          952: [2158]
        }, i = {
          207: ["default", "./index", 404],
          396: ["default", "./hooks", 2969],
          2158: ["default", "./providers", 2969],
          2756: ["default", "./index", 2969],
          2757: ["default", "./providers", 404],
          8407: ["default", "./index", 1024]
        }, f.f.remotes = (e, t) => {
          f.o(s, e) && s[e].forEach((e => {
            var r = f.R;
            r || (r = []);
            var a = i[e];
            if (!(r.indexOf(a) >= 0)) {
              if (r.push(a), a.p) return t.push(a.p);
              var n = t => {
                  t || (t = new Error("Container missing")), "string" == typeof t.message && (t.message += '\nwhile loading "' + a[1] + '" from ' + a[2]), f.m[e] = () => {
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
                s = (e, t, n) => o(t.get, a[1], r, 0, d, n),
                d = t => {
                  a.p = 1, f.m[e] = e => {
                    e.exports = t()
                  }
                };
              o(f, a[2], 0, 0, ((e, t, r) => e ? o(f.I, a[0], 0, e, s, r) : n()), 1)
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
                s = "@rockstargames/modules-gtao-license-plate",
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
                    var n = f(e);
                    if (!n) return;
                    var o = e => e && e.init && e.init(f.S[r], a);
                    if (n.then) return l.push(n.then(o, t));
                    var s = o(n);
                    if (s && s.then) return l.push(s.catch(t))
                  } catch (e) {
                    t(e)
                  }
                },
                l = [];
              return "default" === r && (i("@react-spring/web", "9.7.3", (() => Promise.all([f.e(522), f.e(403), f.e(493)]).then((() => () => f(522))))), i("@react-three/fiber", "7.0.29", (() => Promise.all([f.e(642), f.e(403), f.e(37)]).then((() => () => f(3642))))), i("@rockstargames/locale-tools", "1.0.0", (() => Promise.all([f.e(66), f.e(403), f.e(143)]).then((() => () => f(4143))))), i("@use-gesture/react", "10.3.0", (() => Promise.all([f.e(844), f.e(403)]).then((() => () => f(2463))))), i("gsap", "0.0.0", (() => f.e(149).then((() => () => f(3149))))), i("lodash", "4.17.21", (() => f.e(429).then((() => () => f(9429))))), i("react-dom", "18.2.0", (() => Promise.all([f.e(533), f.e(403)]).then((() => () => f(7533))))), i("react-router-dom", "6.17.0", (() => Promise.all([f.e(398), f.e(403)]).then((() => () => f(3398))))), i("react", "18.2.0", (() => f.e(380).then((() => () => f(3380))))), i("stackblur-canvas", "2.6.0", (() => f.e(487).then((() => () => f(9487))))), i("three", "0.141.0", (() => f.e(141).then((() => () => f(4522))))), d(1024), d(404), d(2969)), l.length ? e[r] = Promise.all(l).then((() => e[r] = 1)) : e[r] = 1
            }
          }
        })(), (() => {
          var e;
          f.g.importScripts && (e = f.g.location + "");
          var t = f.g.document;
          if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
            var r = t.getElementsByTagName("script");
            if (r.length)
              for (var a = r.length - 1; a > -1 && (!e || !/^http(s?):/.test(e));) e = r[a--].src
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
                h = u.pop.bind(u);
              for (s = 1; s < r.length; s++) {
                var p = r[s];
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
                  var s = r[a],
                    i = (typeof s)[0];
                  if (o != i) return "o" == o && "n" == i || "s" == i || "u" == o;
                  if ("o" != o && "u" != o && n != s) return n < s;
                  a++
                }
              })(r, a) ? r : a), 0)) && o[a]
            },
            a = (e => function(t, r, a, n) {
              var o = f.I(t);
              return o && o.then ? o.then(e.bind(e, t, f.S[t], r, a, n)) : e(t, f.S[t], r, a, n)
            })(((e, t, a, n, o) => {
              var s = t && f.o(t, a) && r(t, a, n);
              return s ? (e => (e.loaded = 1, e.get()))(s) : o()
            })),
            n = {},
            o = {
              1403: () => a("default", "react", [1, 18, 2, 0], (() => f.e(380).then((() => () => f(3380))))),
              2037: () => a("default", "three", [4, 0, 141, 0], (() => f.e(141).then((() => () => f(4522))))),
              1874: () => a("default", "react-dom", [1, 18, 2, 0], (() => f.e(533).then((() => () => f(7533))))),
              1410: () => a("default", "@react-spring/web", [1, 9, 6, 1], (() => f.e(522).then((() => () => f(522))))),
              2227: () => a("default", "stackblur-canvas", [1, 2, 5, 0], (() => f.e(487).then((() => () => f(9487))))),
              4252: () => a("default", "lodash", [1, 4, 17, 21], (() => f.e(429).then((() => () => f(9429))))),
              6040: () => a("default", "gsap", [1, "workspace:*"], (() => f.e(149).then((() => () => f(3149))))),
              6717: () => a("default", "@rockstargames/locale-tools", [1, "workspace:*"], (() => Promise.all([f.e(66), f.e(524)]).then((() => () => f(4143))))),
              7377: () => a("default", "@react-three/fiber", [1, 7, 0, 0], (() => f.e(642).then((() => () => f(3642))))),
              8448: () => a("default", "@use-gesture/react", [1, 10, 2, 23], (() => f.e(844).then((() => () => f(2463))))),
              9779: () => a("default", "react-router-dom", [1, 6, 11, 2], (() => f.e(398).then((() => () => f(3398)))))
            },
            s = {
              24: [1410, 2227, 4252, 6040, 6717, 7377, 8448, 9779],
              37: [2037],
              403: [1403],
              493: [1874]
            },
            i = {};
          f.f.consumes = (e, t) => {
            f.o(s, e) && s[e].forEach((e => {
              if (f.o(n, e)) return t.push(n[e]);
              if (!i[e]) {
                var r = t => {
                  n[e] = 0, f.m[e] = r => {
                    delete f.c[e], r.exports = t()
                  }
                };
                i[e] = !0;
                var a = t => {
                  delete n[e], f.m[e] = r => {
                    throw delete f.c[e], t
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
              502: 0
            };
            f.f.miniCss = (t, r) => {
              e[t] ? r.push(e[t]) : 0 !== e[t] && {
                24: 1,
                952: 1
              } [t] && r.push(e[t] = (e => new Promise(((t, r) => {
                var a = f.miniCssF(e),
                  n = f.p + a;
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
            502: 0
          };
          f.f.j = (t, r) => {
            var a = f.o(e, t) ? e[t] : void 0;
            if (0 !== a)
              if (a) r.push(a[2]);
              else if (/^(37|403|493)$/.test(t)) e[t] = 0;
            else {
              var n = new Promise(((r, n) => a = e[t] = [r, n]));
              r.push(a[2] = n);
              var o = f.p + f.u(t),
                s = new Error;
              f.l(o, (r => {
                if (f.o(e, t) && (0 !== (a = e[t]) && (e[t] = void 0), a)) {
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
                for (a in s) f.o(s, a) && (f.m[a] = s[a]);
                i && i(f)
              }
              for (t && t(r); d < o.length; d++) n = o[d], f.o(e, n) && e[n] && e[n][0](), e[n] = 0
            },
            r = self.webpackChunk_rockstargames_modules_gtao_license_plate = self.webpackChunk_rockstargames_modules_gtao_license_plate || [];
          r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
        })(), f(2160), f(4516)
      })())
    }
  }
}));