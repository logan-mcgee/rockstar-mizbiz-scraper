! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "606ee67c-0970-4295-a37c-2be3e1f33713", e._sentryDebugIdIdentifier = "sentry-dbid-606ee67c-0970-4295-a37c-2be3e1f33713")
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
    n = {};
  return Object.defineProperty(r, "__esModule", {
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
        n[t] = e[t]
      }))
    }],
    execute: function() {
      e((() => {
        var e, a, o, i, d = {
            539: (e, t, r) => {
              (0, r(403).w)(1)
            },
            403: (e, t, r) => {
              const n = r(659).y;
              t.w = function(e) {
                if (e || (e = 1), !r.y.meta || !r.y.meta.url) throw console.error("__system_context__", r.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                r.p = n(r.y.meta.url, e)
              }
            },
            160: (e, t, r) => {
              r(539)
            },
            659: (e, t, r) => {
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
            930: (e, t, r) => {
              "use strict";
              var n = {
                  "./functions": () => Promise.all([r.e(403), r.e(252), r.e(509)]).then((() => () => r(509))),
                  "./gtm": () => Promise.all([r.e(403), r.e(779), r.e(482), r.e(551)]).then((() => () => r(551))),
                  "./hocs": () => Promise.all([r.e(403), r.e(407), r.e(252), r.e(482), r.e(136), r.e(244)]).then((() => () => r(244))),
                  "./hooks": () => Promise.all([r.e(403), r.e(407), r.e(252), r.e(779), r.e(136), r.e(328), r.e(508)]).then((() => () => r(508))),
                  "./index": () => Promise.all([r.e(403), r.e(407), r.e(252), r.e(779), r.e(482), r.e(136), r.e(328), r.e(965)]).then((() => () => r(965))),
                  "./local-storage-settings": () => Promise.all([r.e(407), r.e(847)]).then((() => () => r(847))),
                  "./onetrust": () => r.e(150).then((() => () => r(150))),
                  "./providers": () => Promise.all([r.e(403), r.e(407), r.e(50)]).then((() => () => r(50)))
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
            24: e => {
              "use strict";
              e.exports = r
            },
            969: e => {
              "use strict";
              e.exports = n
            }
          },
          s = {};

        function f(e) {
          var t = s[e];
          if (void 0 !== t) return t.exports;
          var r = s[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return d[e].call(r.exports, r, r.exports, f), r.loaded = !0, r.exports
        }
        return f.m = d, f.c = s, f.y = t, f.n = e => {
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
          50: "58cb4923635812fdeb0e6c9341e81032",
          136: "efd41f4c8d3b88fb4fe43c7de672275d",
          150: "634f49936333bb4f7c72fad90ed61a9d",
          244: "2a9e180a097d30989d7736332ca35a34",
          252: "3fc32d9a38186c5d66de6088885b50ac",
          327: "97b0ee68188a5425e3a67951189e1783",
          328: "3f7bdb947f47b397e872369462c611e5",
          380: "c3591a9d4abcb0d6fb2749c15473c2ed",
          398: "85138ebb4cf19b17f0bf8d40b7f0a516",
          403: "6d2499285b8ef978a74780129750e875",
          407: "afeee0d8645ef44371880cb2c531f2b0",
          429: "cd7e37ffa0ac297ac128cfe23fced356",
          482: "ad6aedf1c0208dc6c6a9d4a3db0d7974",
          508: "b07ab762f5079be0b2a86f72fe29f01a",
          509: "a2aa4d843fafaadb6b43b32808ed5a5d",
          551: "17e6b44cd5e7ea7f7887b14c9212b47b",
          714: "2d99069f287a81a490cab21c608f6780",
          779: "b139f7747f8124e8d3f7d0e65b7cf725",
          847: "57e36772f9982b96efb189399816befa",
          961: "8b026710c22e8f0f94f62d4971ecef62",
          965: "2817b2be7168ab2e2cf68597c9c16e76"
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
            var u = (r, n) => {
                i.onerror = i.onload = null, clearTimeout(h);
                var a = e[t];
                if (delete e[t], i.parentNode && i.parentNode.removeChild(i), a && a.forEach((e => e(n))), r) return r(n)
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
        }, f.nmd = e => (e.paths = [], e.children || (e.children = []), e), o = {
          136: [136],
          328: [756],
          407: [407]
        }, i = {
          136: ["default", "./reactive", 24],
          407: ["default", "./index", 24],
          756: ["default", "./index", 969]
        }, f.f.remotes = (e, t) => {
          f.o(o, e) && o[e].forEach((e => {
            var r = f.R;
            r || (r = []);
            var n = i[e];
            if (!(r.indexOf(n) >= 0)) {
              if (r.push(n), n.p) return t.push(n.p);
              var a = t => {
                  t || (t = new Error("Container missing")), "string" == typeof t.message && (t.message += '\nwhile loading "' + n[1] + '" from ' + n[2]), f.m[e] = () => {
                    throw t
                  }, n.p = 0
                },
                o = (e, r, o, i, d, s) => {
                  try {
                    var f = e(r, o);
                    if (!f || !f.then) return d(f, i, s);
                    var c = f.then((e => d(e, i)), a);
                    if (!s) return c;
                    t.push(n.p = c)
                  } catch (e) {
                    a(e)
                  }
                },
                d = (e, t, a) => o(t.get, n[1], r, 0, s, a),
                s = t => {
                  n.p = 1, f.m[e] = e => {
                    e.exports = t()
                  }
                };
              o(f, n[2], 0, 0, ((e, t, r) => e ? o(f.I, n[0], 0, e, d, r) : a()), 1)
            }
          }))
        }, (() => {
          f.S = {};
          var e = {},
            t = {};
          f.I = (r, n) => {
            n || (n = []);
            var a = t[r];
            if (a || (a = t[r] = {}), !(n.indexOf(a) >= 0)) {
              if (n.push(a), e[r]) return e[r];
              f.o(f.S, r) || (f.S[r] = {});
              var o = f.S[r],
                i = "@rockstargames/utils",
                d = (e, t, r, n) => {
                  var a = o[e] = o[e] || {},
                    d = a[t];
                  (!d || !d.loaded && (!n != !d.eager ? n : i > d.from)) && (a[t] = {
                    get: r,
                    from: i,
                    eager: !!n
                  })
                },
                s = e => {
                  var t = e => {
                    return t = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(t));
                    var t
                  };
                  try {
                    var a = f(e);
                    if (!a) return;
                    var o = e => e && e.init && e.init(f.S[r], n);
                    if (a.then) return c.push(a.then(o, t));
                    var i = o(a);
                    if (i && i.then) return c.push(i.catch(t))
                  } catch (e) {
                    t(e)
                  }
                },
                c = [];
              return "default" === r && (d("crypto-hash", "2.0.1", (() => f.e(961).then((() => () => f(961))))), d("deepmerge", "4.3.1", (() => f.e(327).then((() => () => f(327))))), d("lodash", "4.17.21", (() => f.e(429).then((() => () => f(429))))), d("react-gtm-module", "2.0.11", (() => f.e(714).then((() => () => f(714))))), d("react-router-dom", "6.17.0", (() => Promise.all([f.e(398), f.e(403)]).then((() => () => f(398))))), d("react", "18.2.0", (() => f.e(380).then((() => () => f(380))))), s(24), s(969)), c.length ? e[r] = Promise.all(c).then((() => e[r] = 1)) : e[r] = 1
            }
          }
        })(), (() => {
          var e;
          f.g.importScripts && (e = f.g.location + "");
          var t = f.g.document;
          if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
            var r = t.getElementsByTagName("script");
            if (r.length)
              for (var n = r.length - 1; n > -1 && (!e || !/^http(s?):/.test(e));) e = r[n--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), f.p = e
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
                for (var i = 0, d = 1, s = !0;; d++, i++) {
                  var f, c, l = d < r.length ? (typeof r[d])[0] : "";
                  if (i >= n.length || "o" == (c = (typeof(f = n[i]))[0])) return !s || ("u" == l ? d > a && !o : "" == l != o);
                  if ("u" == c) {
                    if (!s || "u" != l) return !1
                  } else if (s)
                    if (l == c)
                      if (d <= a) {
                        if (f != r[d]) return !1
                      } else {
                        if (o ? f > r[d] : f < r[d]) return !1;
                        f != r[d] && (s = !1)
                      }
                  else if ("s" != l && "n" != l) {
                    if (o || d <= a) return !1;
                    s = !1, d--
                  } else {
                    if (d <= a || c < l != o) return !1;
                    s = !1
                  } else "s" != l && "n" != l && (s = !1, d--)
                }
              }
              var u = [],
                h = u.pop.bind(u);
              for (i = 1; i < r.length; i++) {
                var p = r[i];
                u.push(1 == p ? h() | h() : 2 == p ? h() & h() : p ? t(p, n) : !h())
              }
              return !!h()
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
                    d = (typeof i)[0];
                  if (o != d) return "o" == o && "n" == d || "s" == d || "u" == o;
                  if ("o" != o && "u" != o && a != i) return a < i;
                  n++
                }
              })(r, n) ? r : n), 0)) && o[n]
            },
            n = (e => function(t, r, n, a) {
              var o = f.I(t);
              return o && o.then ? o.then(e.bind(e, t, f.S[t], r, n, a)) : e(t, f.S[t], r, n, a)
            })(((e, t, n, a, o) => {
              var i = t && f.o(t, n) && r(t, n, a);
              return i ? (e => (e.loaded = 1, e.get()))(i) : o()
            })),
            a = {},
            o = {
              784: () => n("default", "react", [1, 18, 2, 0], (() => f.e(380).then((() => () => f(380))))),
              252: () => n("default", "lodash", [1, 4, 17, 21], (() => f.e(429).then((() => () => f(429))))),
              779: () => n("default", "react-router-dom", [1, 6, 11, 2], (() => f.e(398).then((() => () => f(398))))),
              482: () => n("default", "react-gtm-module", [1, 2, 0, 11], (() => f.e(714).then((() => () => f(714))))),
              540: () => n("default", "deepmerge", [1, 4, 2, 2], (() => f.e(327).then((() => () => f(327))))),
              686: () => n("default", "crypto-hash", [1, 2, 0, 1], (() => f.e(961).then((() => () => f(961)))))
            },
            i = {
              252: [252],
              328: [540, 686],
              403: [784],
              482: [482],
              779: [779]
            },
            d = {};
          f.f.consumes = (e, t) => {
            f.o(i, e) && i[e].forEach((e => {
              if (f.o(a, e)) return t.push(a[e]);
              if (!d[e]) {
                var r = t => {
                  a[e] = 0, f.m[e] = r => {
                    delete f.c[e], r.exports = t()
                  }
                };
                d[e] = !0;
                var n = t => {
                  delete a[e], f.m[e] = r => {
                    throw delete f.c[e], t
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
          var e = {
            689: 0
          };
          f.f.j = (t, r) => {
            var n = f.o(e, t) ? e[t] : void 0;
            if (0 !== n)
              if (n) r.push(n[2]);
              else if (/^(4(03|07|82)|136|252|328|779)$/.test(t)) e[t] = 0;
            else {
              var a = new Promise(((r, a) => n = e[t] = [r, a]));
              r.push(n[2] = a);
              var o = f.p + f.u(t),
                i = new Error;
              f.l(o, (r => {
                if (f.o(e, t) && (0 !== (n = e[t]) && (e[t] = void 0), n)) {
                  var a = r && ("load" === r.type ? "missing" : r.type),
                    o = r && r.target && r.target.src;
                  i.message = "Loading chunk " + t + " failed.\n(" + a + ": " + o + ")", i.name = "ChunkLoadError", i.type = a, i.request = o, n[1](i)
                }
              }), "chunk-" + t, t)
            }
          };
          var t = (t, r) => {
              var n, a, o = r[0],
                i = r[1],
                d = r[2],
                s = 0;
              if (o.some((t => 0 !== e[t]))) {
                for (n in i) f.o(i, n) && (f.m[n] = i[n]);
                d && d(f)
              }
              for (t && t(r); s < o.length; s++) a = o[s], f.o(e, a) && e[a] && e[a][0](), e[a] = 0
            },
            r = self.webpackChunk_rockstargames_utils = self.webpackChunk_rockstargames_utils || [];
          r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
        })(), f(160), f(930)
      })())
    }
  }
}));