! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "43ba9aff-56b7-40c4-a457-f85c112baa8b", e._sentryDebugIdIdentifier = "sentry-dbid-43ba9aff-56b7-40c4-a457-f85c112baa8b")
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
                  "./hooks": () => Promise.all([r.e(403), r.e(407), r.e(252), r.e(779), r.e(136), r.e(279), r.e(324)]).then((() => () => r(3324))),
                  "./index": () => Promise.all([r.e(403), r.e(407), r.e(252), r.e(779), r.e(482), r.e(136), r.e(279), r.e(886)]).then((() => () => r(3886))),
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
          d = {};

        function s(e) {
          var t = d[e];
          if (void 0 !== t) return t.exports;
          var r = d[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return f[e].call(r.exports, r, r.exports, s), r.loaded = !0, r.exports
        }
        return s.m = f, s.c = d, s.y = t, s.amdO = {}, s.n = e => {
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
          50: "ab51234af24a7fd9842efe1b11cd2b2a",
          136: "efd41f4c8d3b88fb4fe43c7de672275d",
          150: "3d45a8310f3d032dd673c382b5a9d6a4",
          244: "e01597dcb005551c125d4e71c8b4030b",
          252: "3fc32d9a38186c5d66de6088885b50ac",
          279: "49cf4a9a16abe5a043d563c37419e7cb",
          324: "207a9406977874f16fbeafeb5fa3b6a9",
          327: "d930f5be54fc327014f48d4b3919861a",
          369: "a7543786360be60d627c219665c10932",
          380: "7b8705f694e10880df22ebdc78229e61",
          398: "e375524cfc071b64dd3245872c83232b",
          403: "6d2499285b8ef978a74780129750e875",
          407: "afeee0d8645ef44371880cb2c531f2b0",
          429: "0886e0887c4899e456659c78c6834c45",
          482: "ad6aedf1c0208dc6c6a9d4a3db0d7974",
          509: "11db35945e8ce0d34ab6745c3ac1431f",
          551: "6f9e051423cd7122bcacd8ac93d414fa",
          714: "c1bc554db458aa63106f75e0917a800c",
          750: "60970c8a1c23efacef232c811557a943",
          779: "b139f7747f8124e8d3f7d0e65b7cf725",
          847: "0a44055be63225ba392a76100a65b2d5",
          886: "ad5f95e028ca1408c16298e8989fd919",
          961: "c2558e3a5eb056f948629cbaec25e8b4",
          977: "ed600202dd4992c1fd823902599937a8"
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
            var i, f;
            if (void 0 !== a)
              for (var d = document.getElementsByTagName("script"), c = 0; c < d.length; c++) {
                var l = d[c];
                if (l.getAttribute("src") == t || l.getAttribute("data-webpack") == n + a) {
                  i = l;
                  break
                }
              }
            i || (f = !0, (i = document.createElement("script")).charset = "utf-8", i.timeout = 120, s.nc && i.setAttribute("nonce", s.nc), i.setAttribute("data-webpack", n + a), i.src = t), e[t] = [r];
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
        }, s.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, s.nmd = e => (e.paths = [], e.children || (e.children = []), e), o = {
          136: [136],
          279: [2756],
          407: [8407]
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
                o = (e, r, o, i, f, d) => {
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
                f = (e, t, n) => o(t.get, a[1], r, 0, d, n),
                d = t => {
                  a.p = 1, s.m[e] = e => {
                    e.exports = t()
                  }
                };
              o(s, a[2], 0, 0, ((e, t, r) => e ? o(s.I, a[0], 0, e, f, r) : n()), 1)
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
                f = (e, t, r, a) => {
                  var n = o[e] = o[e] || {},
                    f = n[t];
                  (!f || !f.loaded && (!a != !f.eager ? a : i > f.from)) && (n[t] = {
                    get: r,
                    from: i,
                    eager: !!a
                  })
                },
                d = e => {
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
              return "default" === r && (f("crypto-hash", "2.0.1", (() => s.e(961).then((() => () => s(9961))))), f("deepmerge", "4.3.1", (() => s.e(327).then((() => () => s(7327))))), f("lodash", "4.17.21", (() => s.e(429).then((() => () => s(9429))))), f("react-adaptive-hooks", "0.0.8", (() => Promise.all([s.e(403), s.e(369)]).then((() => () => s(4369))))), f("react-device-detect", "2.2.3", (() => Promise.all([s.e(977), s.e(403)]).then((() => () => s(1977))))), f("react-gtm-module", "2.0.11", (() => s.e(714).then((() => () => s(714))))), f("react-router-dom", "6.17.0", (() => Promise.all([s.e(398), s.e(403)]).then((() => () => s(3398))))), f("react", "18.2.0", (() => s.e(380).then((() => () => s(3380))))), d(1024), d(2969)), c.length ? e[r] = Promise.all(c).then((() => e[r] = 1)) : e[r] = 1
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
              279: [4686, 4999, 6540, 9928],
              403: [1403],
              482: [1482],
              779: [9779]
            },
            f = {};
          s.f.consumes = (e, t) => {
            s.o(i, e) && i[e].forEach((e => {
              if (s.o(n, e)) return t.push(n[e]);
              if (!f[e]) {
                var r = t => {
                  n[e] = 0, s.m[e] = r => {
                    delete s.c[e], r.exports = t()
                  }
                };
                f[e] = !0;
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
              else if (/^(4(03|07|82)|[27]79|136|252)$/.test(t)) e[t] = 0;
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
                f = r[2],
                d = 0;
              if (o.some((t => 0 !== e[t]))) {
                for (a in i) s.o(i, a) && (s.m[a] = i[a]);
                f && f(s)
              }
              for (t && t(r); d < o.length; d++) n = o[d], s.o(e, n) && e[n] && e[n][0](), e[n] = 0
            },
            r = self.webpackChunk_rockstargames_utils = self.webpackChunk_rockstargames_utils || [];
          r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
        })(), s(2160), s(3930)
      })())
    }
  }
}));