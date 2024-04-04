! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "30d9902c-a0c5-4935-b46d-c159dab4ad8f", e._sentryDebugIdIdentifier = "sentry-dbid-30d9902c-a0c5-4935-b46d-c159dab4ad8f")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "692b6956abd6177da3ac6da14c81527e5159ed6d",
  packageName: "@rockstargames/utils",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "692b6956abd6177da3ac6da14c81527e5159ed6d"
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

        function s(e) {
          var t = d[e];
          if (void 0 !== t) return t.exports;
          var r = d[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return i[e].call(r.exports, r, r.exports, s), r.loaded = !0, r.exports
        }
        return s.m = i, s.c = d, s.y = t, s.n = e => {
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
          13: "b5dbf5df6fc1bac2024ba6456d73a4ca",
          32: "8d6c4a7b79b535178de3035574c18e9f",
          44: "f6e37c42710dd03083dbba2f451aaf1f",
          52: "285e2dd0d811a3e11375c8e645c292cf",
          76: "08fb7763419f85057dff63051a80e727",
          96: "a77d8d7b18093fd4b7cfffa7b8b2fc6b",
          100: "10ed8130fb823ea9b4a998afc52e09d7",
          204: "5cdfcc562ac5ad57d3d4d3fa4784f689",
          372: "959df54e39f47a1c40ad0a8f7ec638bb",
          442: "ad138a90747f63ae594c212d41738cc5",
          543: "5dd21867dfd102c37ea6170a708054d5",
          560: "5f377e70bc61e6431be2dc4f5efbc88b",
          632: "8fd2b26c166b69ce5d6da6c09d2c06d7",
          660: "4862166afe7b40dfad9317a7baf53a7f",
          664: "4c0dc6a6b584fc3136e7aad495b5c5a3",
          680: "9e30c99a103ca32cd3433c9d2c031cd2",
          718: "7416ef86860a76a5c89d1f3b2087b517",
          744: "52e0453b2fb4f4936db247f3d59d7ddd",
          776: "8797892c318a73f612a576b2b0fd67d2",
          784: "cf2251f67b39772aa4c992f97154917c",
          908: "7f73e89c81b2815dad46c84cda0c6eed"
        } [e] + ".js", s.miniCssF = e => {}, s.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), s.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), e = {}, a = "@rockstargames/utils:", s.l = (t, r, n, o) => {
          if (e[t]) e[t].push(r);
          else {
            var i, d;
            if (void 0 !== n)
              for (var f = document.getElementsByTagName("script"), c = 0; c < f.length; c++) {
                var l = f[c];
                if (l.getAttribute("src") == t || l.getAttribute("data-webpack") == a + n) {
                  i = l;
                  break
                }
              }
            i || (d = !0, (i = document.createElement("script")).charset = "utf-8", i.timeout = 120, s.nc && i.setAttribute("nonce", s.nc), i.setAttribute("data-webpack", a + n), i.src = t), e[t] = [r];
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
        }, s.nmd = e => (e.paths = [], e.children || (e.children = []), e), n = {
          52: [52],
          680: [680]
        }, o = {
          52: ["default", "./index", 864],
          680: ["default", "./reactive", 864]
        }, s.f.remotes = (e, t) => {
          s.o(n, e) && n[e].forEach((e => {
            var r = s.R;
            r || (r = []);
            var a = o[e];
            if (!(r.indexOf(a) >= 0)) {
              if (r.push(a), a.p) return t.push(a.p);
              var n = t => {
                  t || (t = new Error("Container missing")), "string" == typeof t.message && (t.message += '\nwhile loading "' + a[1] + '" from ' + a[2]), s.m[e] = () => {
                    throw t
                  }, a.p = 0
                },
                i = (e, r, o, i, d, s) => {
                  try {
                    var f = e(r, o);
                    if (!f || !f.then) return d(f, i, s);
                    var c = f.then((e => d(e, i)), n);
                    if (!s) return c;
                    t.push(a.p = c)
                  } catch (e) {
                    n(e)
                  }
                },
                d = (e, t, n) => i(t.get, a[1], r, 0, f, n),
                f = t => {
                  a.p = 1, s.m[e] = e => {
                    e.exports = t()
                  }
                };
              i(s, a[2], 0, 0, ((e, t, r) => e ? i(s.I, a[0], 0, e, d, r) : n()), 1)
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
                f = [];
              return "default" === r && (d("crypto-hash", "2.0.1", (() => s.e(560).then((() => () => s(560))))), d("deepmerge", "4.3.1", (() => s.e(632).then((() => () => s(632))))), d("lodash", "4.17.21", (() => s.e(784).then((() => () => s(784))))), d("react-gtm-module", "2.0.11", (() => s.e(908).then((() => () => s(908))))), d("react-router-dom", "6.17.0", (() => Promise.all([s.e(718), s.e(664)]).then((() => () => s(718))))), d("react", "18.2.0", (() => s.e(100).then((() => () => s(100))))), (e => {
                var t = e => {
                  return t = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(t));
                  var t
                };
                try {
                  var n = s(864);
                  if (!n) return;
                  var o = e => e && e.init && e.init(s.S[r], a);
                  if (n.then) return f.push(n.then(o, t));
                  var i = o(n);
                  if (i && i.then) return f.push(i.catch(t))
                } catch (e) {
                  t(e)
                }
              })()), f.length ? e[r] = Promise.all(f).then((() => e[r] = 1)) : e[r] = 1
            }
          }
        })(), (() => {
          var e;
          s.g.importScripts && (e = s.g.location + "");
          var t = s.g.document;
          if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
            var r = t.getElementsByTagName("script");
            if (r.length)
              for (var a = r.length - 1; a > -1 && !e;) e = r[a--].src
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
                for (var i = 0, d = 1, s = !0;; d++, i++) {
                  var f, c, l = d < r.length ? (typeof r[d])[0] : "";
                  if (i >= a.length || "o" == (c = (typeof(f = a[i]))[0])) return !s || ("u" == l ? d > n && !o : "" == l != o);
                  if ("u" == c) {
                    if (!s || "u" != l) return !1
                  } else if (s)
                    if (l == c)
                      if (d <= n) {
                        if (f != r[d]) return !1
                      } else {
                        if (o ? f > r[d] : f < r[d]) return !1;
                        f != r[d] && (s = !1)
                      }
                  else if ("s" != l && "n" != l) {
                    if (o || d <= n) return !1;
                    s = !1, d--
                  } else {
                    if (d <= n || c < l != o) return !1;
                    s = !1
                  } else "s" != l && "n" != l && (s = !1, d--)
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
              664: () => a("default", "react", [1, 18, 2, 0], (() => s.e(100).then((() => () => s(100))))),
              660: () => a("default", "lodash", [1, 4, 17, 21], (() => s.e(784).then((() => () => s(784))))),
              13: () => a("default", "react-router-dom", [1, 6, 11, 2], (() => s.e(718).then((() => () => s(718))))),
              204: () => a("default", "react-gtm-module", [1, 2, 0, 11], (() => s.e(908).then((() => () => s(908))))),
              128: () => a("default", "deepmerge", [1, 4, 2, 2], (() => s.e(632).then((() => () => s(632))))),
              456: () => a("default", "crypto-hash", [1, 2, 0, 1], (() => s.e(560).then((() => () => s(560)))))
            },
            i = {
              13: [13],
              44: [128, 456],
              204: [204],
              660: [660],
              664: [664]
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
            676: 0
          };
          s.f.j = (t, r) => {
            var a = s.o(e, t) ? e[t] : void 0;
            if (0 !== a)
              if (a) r.push(a[2]);
              else if (/^(6(60|64|80)|13|204|44|52)$/.test(t)) e[t] = 0;
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
        })(), s(824), s(520)
      })())
    }
  }
}));
//# sourceMappingURL=remote-entry.js.map