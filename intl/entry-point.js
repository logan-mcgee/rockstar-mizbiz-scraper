! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      r = (new Error).stack;
    r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "4698e9d9-cd09-497f-b1ee-5ea715edb6e0", e._sentryDebugIdIdentifier = "sentry-dbid-4698e9d9-cd09-497f-b1ee-5ea715edb6e0")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/intl",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register(["@rockstargames/utils"], (function(e, r) {
  var t = {};
  return Object.defineProperty(t, "__esModule", {
    value: !0
  }), {
    setters: [function(e) {
      Object.keys(e).forEach((function(r) {
        t[r] = e[r]
      }))
    }],
    execute: function() {
      e((() => {
        var e, n, a, o, i = {
            364: (e, r, t) => {
              (0, t(284).G)(1)
            },
            284: (e, r, t) => {
              const n = t(984).Q;
              r.G = function(e) {
                if (e || (e = 1), !t.y.meta || !t.y.meta.url) throw console.error("__system_context__", t.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                t.p = n(t.y.meta.url, e)
              }
            },
            824: (e, r, t) => {
              t(364)
            },
            984: (e, r, t) => {
              r.Q = function(e, r) {
                var t = document.createElement("a");
                t.href = e;
                for (var n = "/" === t.pathname[0] ? t.pathname : "/" + t.pathname, a = 0, o = n.length; a !== r && o >= 0;) "/" === n[--o] && a++;
                if (a !== r) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + r + ") is greater than the number of directories (" + a + ") in the URL path " + e);
                var i = n.slice(0, o + 1);
                return t.protocol + "//" + t.host + i
              };
              Number.isInteger
            },
            612: (e, r, t) => {
              "use strict";
              var n = {
                  "./index": () => t.e(664).then((() => () => t(664))),
                  "./messages": () => t.e(160).then((() => () => t(160)))
                },
                a = (e, r) => (t.R = r, r = t.o(n, e) ? n[e]() : Promise.resolve().then((() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                })), t.R = void 0, r),
                o = (e, r) => {
                  if (t.S) {
                    var n = "default",
                      a = t.S[n];
                    if (a && a !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return t.S[n] = e, t.I(n, r)
                  }
                };
              t.d(r, {
                get: () => a,
                init: () => o
              })
            },
            344: e => {
              "use strict";
              e.exports = t
            }
          },
          s = {};

        function l(e) {
          var r = s[e];
          if (void 0 !== r) return r.exports;
          var t = s[e] = {
            exports: {}
          };
          return i[e](t, t.exports, l), t.exports
        }
        return l.m = i, l.c = s, l.y = r, l.n = e => {
          var r = e && e.__esModule ? () => e.default : () => e;
          return l.d(r, {
            a: r
          }), r
        }, l.d = (e, r) => {
          for (var t in r) l.o(r, t) && !l.o(e, t) && Object.defineProperty(e, t, {
            enumerable: !0,
            get: r[t]
          })
        }, l.f = {}, l.e = e => Promise.all(Object.keys(l.f).reduce(((r, t) => (l.f[t](e, r), r)), [])), l.u = e => "js/" + {
          11: "1519d025fabacc51458e07100ade4399",
          160: "6e7e1417df1f4981b3dc14b35292ddb0",
          304: "53b8b9a832654d42b632475bd06d62e1",
          664: "f9dde5a4e47e447ec310a0230ee99183"
        } [e] + ".js", l.miniCssF = e => {}, l.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), l.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r), e = {}, n = "@rockstargames/intl:", l.l = (r, t, a, o) => {
          if (e[r]) e[r].push(t);
          else {
            var i, s;
            if (void 0 !== a)
              for (var u = document.getElementsByTagName("script"), f = 0; f < u.length; f++) {
                var d = u[f];
                if (d.getAttribute("src") == r || d.getAttribute("data-webpack") == n + a) {
                  i = d;
                  break
                }
              }
            i || (s = !0, (i = document.createElement("script")).charset = "utf-8", i.timeout = 120, l.nc && i.setAttribute("nonce", l.nc), i.setAttribute("data-webpack", n + a), i.src = r), e[r] = [t];
            var c = (t, n) => {
                i.onerror = i.onload = null, clearTimeout(p);
                var a = e[r];
                if (delete e[r], i.parentNode && i.parentNode.removeChild(i), a && a.forEach((e => e(n))), t) return t(n)
              },
              p = setTimeout(c.bind(null, void 0, {
                type: "timeout",
                target: i
              }), 12e4);
            i.onerror = c.bind(null, i.onerror), i.onload = c.bind(null, i.onload), s && document.head.appendChild(i)
          }
        }, l.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, a = {
          304: [61]
        }, o = {
          61: ["default", "./hooks", 344]
        }, l.f.remotes = (e, r) => {
          l.o(a, e) && a[e].forEach((e => {
            var t = l.R;
            t || (t = []);
            var n = o[e];
            if (!(t.indexOf(n) >= 0)) {
              if (t.push(n), n.p) return r.push(n.p);
              var a = r => {
                  r || (r = new Error("Container missing")), "string" == typeof r.message && (r.message += '\nwhile loading "' + n[1] + '" from ' + n[2]), l.m[e] = () => {
                    throw r
                  }, n.p = 0
                },
                i = (e, t, o, i, s, l) => {
                  try {
                    var u = e(t, o);
                    if (!u || !u.then) return s(u, i, l);
                    var f = u.then((e => s(e, i)), a);
                    if (!l) return f;
                    r.push(n.p = f)
                  } catch (e) {
                    a(e)
                  }
                },
                s = (e, r, a) => i(r.get, n[1], t, 0, u, a),
                u = r => {
                  n.p = 1, l.m[e] = e => {
                    e.exports = r()
                  }
                };
              i(l, n[2], 0, 0, ((e, r, t) => e ? i(l.I, n[0], 0, e, s, t) : a()), 1)
            }
          }))
        }, (() => {
          l.S = {};
          var e = {},
            r = {};
          l.I = (t, n) => {
            n || (n = []);
            var a = r[t];
            if (a || (a = r[t] = {}), !(n.indexOf(a) >= 0)) {
              if (n.push(a), e[t]) return e[t];
              l.o(l.S, t) || (l.S[t] = {});
              var o = l.S[t],
                i = "@rockstargames/intl",
                s = [];
              return "default" === t && (((e, r, t, n) => {
                var a = o[e] = o[e] || {},
                  s = a[r];
                (!s || !s.loaded && (1 != !s.eager ? n : i > s.from)) && (a[r] = {
                  get: () => Promise.all([l.e(11), l.e(304)]).then((() => () => l(304))),
                  from: i,
                  eager: !1
                })
              })("@rockstargames/locale-tools", "1.0.0"), (e => {
                var r = e => {
                  return r = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(r));
                  var r
                };
                try {
                  var a = l(344);
                  if (!a) return;
                  var o = e => e && e.init && e.init(l.S[t], n);
                  if (a.then) return s.push(a.then(o, r));
                  var i = o(a);
                  if (i && i.then) return s.push(i.catch(r))
                } catch (e) {
                  r(e)
                }
              })()), s.length ? e[t] = Promise.all(s).then((() => e[t] = 1)) : e[t] = 1
            }
          }
        })(), (() => {
          var e;
          l.g.importScripts && (e = l.g.location + "");
          var r = l.g.document;
          if (!e && r && (r.currentScript && (e = r.currentScript.src), !e)) {
            var t = r.getElementsByTagName("script");
            if (t.length)
              for (var n = t.length - 1; n > -1 && !e;) e = t[n--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), l.p = e
        })(), (() => {
          var e = e => {
              var r = e => e.split(".").map((e => +e == e ? +e : e)),
                t = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
                n = t[1] ? r(t[1]) : [];
              return t[2] && (n.length++, n.push.apply(n, r(t[2]))), t[3] && (n.push([]), n.push.apply(n, r(t[3]))), n
            },
            r = (t, n) => {
              if (0 in t) {
                n = e(n);
                var a = t[0],
                  o = a < 0;
                o && (a = -a - 1);
                for (var i = 0, s = 1, l = !0;; s++, i++) {
                  var u, f, d = s < t.length ? (typeof t[s])[0] : "";
                  if (i >= n.length || "o" == (f = (typeof(u = n[i]))[0])) return !l || ("u" == d ? s > a && !o : "" == d != o);
                  if ("u" == f) {
                    if (!l || "u" != d) return !1
                  } else if (l)
                    if (d == f)
                      if (s <= a) {
                        if (u != t[s]) return !1
                      } else {
                        if (o ? u > t[s] : u < t[s]) return !1;
                        u != t[s] && (l = !1)
                      }
                  else if ("s" != d && "n" != d) {
                    if (o || s <= a) return !1;
                    l = !1, s--
                  } else {
                    if (s <= a || f < d != o) return !1;
                    l = !1
                  } else "s" != d && "n" != d && (l = !1, s--)
                }
              }
              var c = [],
                p = c.pop.bind(c);
              for (i = 1; i < t.length; i++) {
                var h = t[i];
                c.push(1 == h ? p() | p() : 2 == h ? p() & p() : h ? r(h, n) : !p())
              }
              return !!p()
            },
            t = (t, n, a) => {
              var o = t[n];
              return (n = Object.keys(o).reduce(((t, n) => !r(a, n) || t && !((r, t) => {
                r = e(r), t = e(t);
                for (var n = 0;;) {
                  if (n >= r.length) return n < t.length && "u" != (typeof t[n])[0];
                  var a = r[n],
                    o = (typeof a)[0];
                  if (n >= t.length) return "u" == o;
                  var i = t[n],
                    s = (typeof i)[0];
                  if (o != s) return "o" == o && "n" == s || "s" == s || "u" == o;
                  if ("o" != o && "u" != o && a != i) return a < i;
                  n++
                }
              })(t, n) ? t : n), 0)) && o[n]
            },
            n = (e => function(r, t, n, a) {
              var o = l.I(r);
              return o && o.then ? o.then(e.bind(e, r, l.S[r], t, n, a)) : e(r, l.S[r], t, n, a)
            })(((e, r, n, a, o) => {
              var i = r && l.o(r, n) && t(r, n, a);
              return i ? (e => (e.loaded = 1, e.get()))(i) : o()
            })),
            a = {},
            o = {
              272: () => n("default", "@rockstargames/locale-tools", [1, "workspace:*"], (() => Promise.all([l.e(11), l.e(304)]).then((() => () => l(304)))))
            },
            i = {
              160: [272]
            },
            s = {};
          l.f.consumes = (e, r) => {
            l.o(i, e) && i[e].forEach((e => {
              if (l.o(a, e)) return r.push(a[e]);
              if (!s[e]) {
                var t = r => {
                  a[e] = 0, l.m[e] = t => {
                    delete l.c[e], t.exports = r()
                  }
                };
                s[e] = !0;
                var n = r => {
                  delete a[e], l.m[e] = t => {
                    throw delete l.c[e], r
                  }
                };
                try {
                  var i = o[e]();
                  i.then ? r.push(a[e] = i.then(t).catch(n)) : t(i)
                } catch (e) {
                  n(e)
                }
              }
            }))
          }
        })(), (() => {
          var e = {
            68: 0
          };
          l.f.j = (r, t) => {
            var n = l.o(e, r) ? e[r] : void 0;
            if (0 !== n)
              if (n) t.push(n[2]);
              else {
                var a = new Promise(((t, a) => n = e[r] = [t, a]));
                t.push(n[2] = a);
                var o = l.p + l.u(r),
                  i = new Error;
                l.l(o, (t => {
                  if (l.o(e, r) && (0 !== (n = e[r]) && (e[r] = void 0), n)) {
                    var a = t && ("load" === t.type ? "missing" : t.type),
                      o = t && t.target && t.target.src;
                    i.message = "Loading chunk " + r + " failed.\n(" + a + ": " + o + ")", i.name = "ChunkLoadError", i.type = a, i.request = o, n[1](i)
                  }
                }), "chunk-" + r, r)
              }
          };
          var r = (r, t) => {
              var n, a, o = t[0],
                i = t[1],
                s = t[2],
                u = 0;
              if (o.some((r => 0 !== e[r]))) {
                for (n in i) l.o(i, n) && (l.m[n] = i[n]);
                s && s(l)
              }
              for (r && r(t); u < o.length; u++) a = o[u], l.o(e, a) && e[a] && e[a][0](), e[a] = 0
            },
            t = self.webpackChunk_rockstargames_intl = self.webpackChunk_rockstargames_intl || [];
          t.forEach(r.bind(null, 0)), t.push = r.bind(null, t.push.bind(t))
        })(), l(824), l(612)
      })())
    }
  }
}));