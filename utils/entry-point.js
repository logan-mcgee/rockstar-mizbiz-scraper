! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "d76bff3e-c4ae-4966-9af3-5f16a8bc9aff", e._sentryDebugIdIdentifier = "sentry-dbid-d76bff3e-c4ae-4966-9af3-5f16a8bc9aff")
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

        function s(e) {
          var t = f[e];
          if (void 0 !== t) return t.exports;
          var r = f[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return d[e].call(r.exports, r, r.exports, s), r.loaded = !0, r.exports
        }
        return s.m = d, s.c = f, s.y = t, s.amdO = {}, s.n = e => {
          var t = e && e.__esModule ? () => e.default : () => e;
          return s.d(t, {
            a: t
          }), t
        }, s.d = (e, t) => {
          for (var r in t) s.o(t, r) && !s.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: t[r]
          })
        }, s.f = {}, s.e = e => Promise.all(Object.keys(s.f).reduce(((t, r) => (s.f[r](e, t), t)), [])), s.u = e => "js/" + {
          50: "78ddeb703e1c5b77c3920454e7b378a4",
          136: "efd41f4c8d3b88fb4fe43c7de672275d",
          150: "53d8de9daa907bb4009459caee7156ab",
          244: "454398722ac50dda13c5e597e6ae6360",
          252: "3fc32d9a38186c5d66de6088885b50ac",
          327: "854f526f1f25cd1cc2fa9b840f03d0c6",
          369: "c9ebead90853e85338127e32249872b2",
          380: "26c1be7c84bf34c19d2bef826a47deab",
          398: "970bfb06f4e01fdcdebcb1f59888c2d5",
          403: "6d2499285b8ef978a74780129750e875",
          407: "afeee0d8645ef44371880cb2c531f2b0",
          429: "51080ce57e431ec56ce1dc2b1ebd5083",
          482: "ad6aedf1c0208dc6c6a9d4a3db0d7974",
          509: "f33c8dc7b30e894cf21dba6a4e25a5d2",
          551: "243f60676212b97f24719d6a345c33fa",
          705: "8096fc165af59890156bcfa94ba85c69",
          714: "7f7e4a1a0aa1ecaf04e9aa45959b6f32",
          750: "0fd3beedea647be780b020ea1cef58c0",
          779: "b139f7747f8124e8d3f7d0e65b7cf725",
          847: "1c96b0fae63db8f1a5d4d9e5202dd257",
          886: "9cafa73cd65a3c40672be79d3bf9a4d3",
          961: "8295a2f55a1fd3a99b90e68cfd6ef3ae",
          977: "f86923e7db2b1026a0c64d03eeeefb01"
        } [e] + ".js", s.miniCssF = e => {}, s.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), s.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), e = {}, n = "@rockstargames/utils:", s.l = (t, r, a, o) => {
          if (e[t]) e[t].push(r);
          else {
            var i, d;
            if (void 0 !== a)
              for (var f = document.getElementsByTagName("script"), c = 0; c < f.length; c++) {
                var l = f[c];
                if (l.getAttribute("src") == t || l.getAttribute("data-webpack") == n + a) {
                  i = l;
                  break
                }
              }
            i || (d = !0, (i = document.createElement("script")).charset = "utf-8", i.timeout = 120, s.nc && i.setAttribute("nonce", s.nc), i.setAttribute("data-webpack", n + a), i.src = t), e[t] = [r];
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
        }, s.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, s.nmd = e => (e.paths = [], e.children || (e.children = []), e), o = {
          136: [136],
          407: [8407],
          705: [2756]
        }, i = {
          136: ["default", "./reactive", 1024],
          2756: ["default", "./index", 2969],
          8407: ["default", "./index", 1024]
        }, s.f.remotes = (e, t) => {
          s.o(o, e) && o[e].forEach((e => {
            var r = s.R;
            r || (r = []);
            var a = i[e];
            if (!(r.indexOf(a) >= 0)) {
              if (r.push(a), a.p) return t.push(a.p);
              var n = t => {
                  t || (t = new Error("Container missing")), "string" == typeof t.message && (t.message += '\nwhile loading "' + a[1] + '" from ' + a[2]), s.m[e] = () => {
                    throw t
                  }, a.p = 0
                },
                o = (e, r, o, i, d, f) => {
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
                d = (e, t, n) => o(t.get, a[1], r, 0, f, n),
                f = t => {
                  a.p = 1, s.m[e] = e => {
                    e.exports = t()
                  }
                };
              o(s, a[2], 0, 0, ((e, t, r) => e ? o(s.I, a[0], 0, e, d, r) : n()), 1)
            }
          }))
        }, (() => {
          s.S = {};
          var e = {},
            t = {};
          s.I = (r, a) => {
            a || (a = []);
            var n = t[r];
            if (n || (n = t[r] = {}), !(a.indexOf(n) >= 0)) {
              if (a.push(n), e[r]) return e[r];
              s.o(s.S, r) || (s.S[r] = {});
              var o = s.S[r],
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
                    var n = s(e);
                    if (!n) return;
                    var o = e => e && e.init && e.init(s.S[r], a);
                    if (n.then) return c.push(n.then(o, t));
                    var i = o(n);
                    if (i && i.then) return c.push(i.catch(t))
                  } catch (e) {
                    t(e)
                  }
                },
                c = [];
              return "default" === r && (d("crypto-hash", "2.0.1", (() => s.e(961).then((() => () => s(9961))))), d("deepmerge", "4.3.1", (() => s.e(327).then((() => () => s(7327))))), d("lodash", "4.17.21", (() => s.e(429).then((() => () => s(9429))))), d("react-adaptive-hooks", "0.0.8", (() => Promise.all([s.e(403), s.e(369)]).then((() => () => s(4369))))), d("react-device-detect", "2.2.3", (() => Promise.all([s.e(977), s.e(403)]).then((() => () => s(1977))))), d("react-gtm-module", "2.0.11", (() => s.e(714).then((() => () => s(714))))), d("react-router-dom", "6.17.0", (() => Promise.all([s.e(398), s.e(403)]).then((() => () => s(3398))))), d("react", "18.2.0", (() => s.e(380).then((() => () => s(3380))))), f(1024), f(2969)), c.length ? e[r] = Promise.all(c).then((() => e[r] = 1)) : e[r] = 1
            }
          }
        })(), (() => {
          var e;
          s.g.importScripts && (e = s.g.location + "");
          var t = s.g.document;
          if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
            var r = t.getElementsByTagName("script");
            if (r.length)
              for (var a = r.length - 1; a > -1 && (!e || !/^http(s?):/.test(e));) e = r[a--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), s.p = e
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
              var o = s.I(t);
              return o && o.then ? o.then(e.bind(e, t, s.S[t], r, a, n)) : e(t, s.S[t], r, a, n)
            })(((e, t, a, n, o) => {
              var i = t && s.o(t, a) && r(t, a, n);
              return i ? (e => (e.loaded = 1, e.get()))(i) : o()
            })),
            n = {},
            o = {
              1403: () => a("default", "react", [1, 18, 2, 0], (() => s.e(380).then((() => () => s(3380))))),
              4252: () => a("default", "lodash", [1, 4, 17, 21], (() => s.e(429).then((() => () => s(9429))))),
              9779: () => a("default", "react-router-dom", [1, 6, 11, 2], (() => s.e(398).then((() => () => s(3398))))),
              1482: () => a("default", "react-gtm-module", [1, 2, 0, 11], (() => s.e(714).then((() => () => s(714))))),
              4686: () => a("default", "crypto-hash", [1, 2, 0, 1], (() => s.e(961).then((() => () => s(9961))))),
              4999: () => a("default", "react-device-detect", [1, 2, 2, 3], (() => s.e(977).then((() => () => s(1977))))),
              6540: () => a("default", "deepmerge", [1, 4, 2, 2], (() => s.e(327).then((() => () => s(7327))))),
              9928: () => a("default", "react-adaptive-hooks", [3, 0, 0, 8], (() => s.e(750).then((() => () => s(4369)))))
            },
            i = {
              252: [4252],
              403: [1403],
              482: [1482],
              705: [4686, 4999, 6540, 9928],
              779: [9779]
            },
            d = {};
          s.f.consumes = (e, t) => {
            s.o(i, e) && i[e].forEach((e => {
              if (s.o(n, e)) return t.push(n[e]);
              if (!d[e]) {
                var r = t => {
                  n[e] = 0, s.m[e] = r => {
                    delete s.c[e], r.exports = t()
                  }
                };
                d[e] = !0;
                var a = t => {
                  delete n[e], s.m[e] = r => {
                    throw delete s.c[e], t
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
          s.f.j = (t, r) => {
            var a = s.o(e, t) ? e[t] : void 0;
            if (0 !== a)
              if (a) r.push(a[2]);
              else if (/^(4(03|07|82)|136|252|779)$/.test(t)) e[t] = 0;
            else {
              var n = new Promise(((r, n) => a = e[t] = [r, n]));
              r.push(a[2] = n);
              var o = s.p + s.u(t),
                i = new Error;
              s.l(o, (r => {
                if (s.o(e, t) && (0 !== (a = e[t]) && (e[t] = void 0), a)) {
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
                for (a in i) s.o(i, a) && (s.m[a] = i[a]);
                d && d(s)
              }
              for (t && t(r); f < o.length; f++) n = o[f], s.o(e, n) && e[n] && e[n][0](), e[n] = 0
            },
            r = self.webpackChunk_rockstargames_utils = self.webpackChunk_rockstargames_utils || [];
          r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
        })(), s(2160), s(3930)
      })())
    }
  }
}));