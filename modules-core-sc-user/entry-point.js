! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      r = (new Error).stack;
    r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "3b910bda-2573-487b-869f-9592d959f656", e._sentryDebugIdIdentifier = "sentry-dbid-3b910bda-2573-487b-869f-9592d959f656")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-sc-user",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register(["@rockstargames/graph-client", "@rockstargames/utils"], (function(e, r) {
  var t = {},
    n = {};
  return Object.defineProperty(t, "__esModule", {
    value: !0
  }), Object.defineProperty(n, "__esModule", {
    value: !0
  }), {
    setters: [function(e) {
      Object.keys(e).forEach((function(r) {
        t[r] = e[r]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(r) {
        n[r] = e[r]
      }))
    }],
    execute: function() {
      e((() => {
        var e, a, o, i, s = {
            539: (e, r, t) => {
              (0, t(403).w)(1)
            },
            403: (e, r, t) => {
              const n = t(659).y;
              r.w = function(e) {
                if (e || (e = 1), !t.y.meta || !t.y.meta.url) throw console.error("__system_context__", t.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                t.p = n(t.y.meta.url, e)
              }
            },
            160: (e, r, t) => {
              t(539)
            },
            659: (e, r, t) => {
              r.y = function(e, r) {
                var t = document.createElement("a");
                t.href = e;
                for (var n = "/" === t.pathname[0] ? t.pathname : "/" + t.pathname, a = 0, o = n.length; a !== r && o >= 0;) "/" === n[--o] && a++;
                if (a !== r) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + r + ") is greater than the number of directories (" + a + ") in the URL path " + e);
                var i = n.slice(0, o + 1);
                return t.protocol + "//" + t.host + i
              };
              Number.isInteger
            },
            527: (e, r, t) => {
              "use strict";
              var n = {
                  "./graph/policies": () => Promise.all([t.e(756), t.e(847)]).then((() => () => t(847))),
                  "./index": () => Promise.all([t.e(756), t.e(563)]).then((() => () => t(36))),
                  "./providers": () => Promise.all([t.e(756), t.e(563)]).then((() => () => t(896)))
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
            24: e => {
              "use strict";
              e.exports = t
            },
            969: e => {
              "use strict";
              e.exports = n
            }
          },
          f = {};

        function u(e) {
          var r = f[e];
          if (void 0 !== r) return r.exports;
          var t = f[e] = {
            exports: {}
          };
          return s[e](t, t.exports, u), t.exports
        }
        return u.m = s, u.c = f, u.y = r, u.n = e => {
          var r = e && e.__esModule ? () => e.default : () => e;
          return u.d(r, {
            a: r
          }), r
        }, u.d = (e, r) => {
          for (var t in r) u.o(r, t) && !u.o(e, t) && Object.defineProperty(e, t, {
            enumerable: !0,
            get: r[t]
          })
        }, u.f = {}, u.e = e => Promise.all(Object.keys(u.f).reduce(((r, t) => (u.f[t](e, r), r)), [])), u.u = e => "js/" + {
          377: "0028816ca7a390dbada43fbcaf9ce674",
          380: "c678a93a38350c3654dee0bc096b86be",
          563: "da3ffb779b7b311e26e78c51660a4fa7",
          756: "078fd74e421144441ef2a89b9930d6af",
          847: "ad60c6b736dd58e1b206478f7933fd34"
        } [e] + ".js", u.miniCssF = e => {}, u.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), u.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r), e = {}, a = "@rockstargames/modules-core-sc-user:", u.l = (r, t, n, o) => {
          if (e[r]) e[r].push(t);
          else {
            var i, s;
            if (void 0 !== n)
              for (var f = document.getElementsByTagName("script"), l = 0; l < f.length; l++) {
                var d = f[l];
                if (d.getAttribute("src") == r || d.getAttribute("data-webpack") == a + n) {
                  i = d;
                  break
                }
              }
            i || (s = !0, (i = document.createElement("script")).charset = "utf-8", i.timeout = 120, u.nc && i.setAttribute("nonce", u.nc), i.setAttribute("data-webpack", a + n), i.src = r), e[r] = [t];
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
        }, u.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, o = {
          563: [396, 407, 662],
          756: [756]
        }, i = {
          396: ["default", "./hooks", 969],
          407: ["default", "./index", 24],
          662: ["default", "./gtm", 969],
          756: ["default", "./index", 969]
        }, u.f.remotes = (e, r) => {
          u.o(o, e) && o[e].forEach((e => {
            var t = u.R;
            t || (t = []);
            var n = i[e];
            if (!(t.indexOf(n) >= 0)) {
              if (t.push(n), n.p) return r.push(n.p);
              var a = r => {
                  r || (r = new Error("Container missing")), "string" == typeof r.message && (r.message += '\nwhile loading "' + n[1] + '" from ' + n[2]), u.m[e] = () => {
                    throw r
                  }, n.p = 0
                },
                o = (e, t, o, i, s, f) => {
                  try {
                    var u = e(t, o);
                    if (!u || !u.then) return s(u, i, f);
                    var l = u.then((e => s(e, i)), a);
                    if (!f) return l;
                    r.push(n.p = l)
                  } catch (e) {
                    a(e)
                  }
                },
                s = (e, r, a) => o(r.get, n[1], t, 0, f, a),
                f = r => {
                  n.p = 1, u.m[e] = e => {
                    e.exports = r()
                  }
                };
              o(u, n[2], 0, 0, ((e, r, t) => e ? o(u.I, n[0], 0, e, s, t) : a()), 1)
            }
          }))
        }, (() => {
          u.S = {};
          var e = {},
            r = {};
          u.I = (t, n) => {
            n || (n = []);
            var a = r[t];
            if (a || (a = r[t] = {}), !(n.indexOf(a) >= 0)) {
              if (n.push(a), e[t]) return e[t];
              u.o(u.S, t) || (u.S[t] = {});
              var o = u.S[t],
                i = "@rockstargames/modules-core-sc-user",
                s = (e, r, t, n) => {
                  var a = o[e] = o[e] || {},
                    s = a[r];
                  (!s || !s.loaded && (!n != !s.eager ? n : i > s.from)) && (a[r] = {
                    get: t,
                    from: i,
                    eager: !!n
                  })
                },
                f = e => {
                  var r = e => {
                    return r = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(r));
                    var r
                  };
                  try {
                    var a = u(e);
                    if (!a) return;
                    var o = e => e && e.init && e.init(u.S[t], n);
                    if (a.then) return l.push(a.then(o, r));
                    var i = o(a);
                    if (i && i.then) return l.push(i.catch(r))
                  } catch (e) {
                    r(e)
                  }
                },
                l = [];
              return "default" === t && (s("@rockstar/fingerprint-js", "1.0.0", (() => u.e(377).then((() => () => u(377))))), s("react", "18.2.0", (() => u.e(380).then((() => () => u(380))))), f(969), f(24)), l.length ? e[t] = Promise.all(l).then((() => e[t] = 1)) : e[t] = 1
            }
          }
        })(), (() => {
          var e;
          u.g.importScripts && (e = u.g.location + "");
          var r = u.g.document;
          if (!e && r && (r.currentScript && (e = r.currentScript.src), !e)) {
            var t = r.getElementsByTagName("script");
            if (t.length)
              for (var n = t.length - 1; n > -1 && (!e || !/^http(s?):/.test(e));) e = t[n--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), u.p = e
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
                for (var i = 0, s = 1, f = !0;; s++, i++) {
                  var u, l, d = s < t.length ? (typeof t[s])[0] : "";
                  if (i >= n.length || "o" == (l = (typeof(u = n[i]))[0])) return !f || ("u" == d ? s > a && !o : "" == d != o);
                  if ("u" == l) {
                    if (!f || "u" != d) return !1
                  } else if (f)
                    if (d == l)
                      if (s <= a) {
                        if (u != t[s]) return !1
                      } else {
                        if (o ? u > t[s] : u < t[s]) return !1;
                        u != t[s] && (f = !1)
                      }
                  else if ("s" != d && "n" != d) {
                    if (o || s <= a) return !1;
                    f = !1, s--
                  } else {
                    if (s <= a || l < d != o) return !1;
                    f = !1
                  } else "s" != d && "n" != d && (f = !1, s--)
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
              var o = u.I(r);
              return o && o.then ? o.then(e.bind(e, r, u.S[r], t, n, a)) : e(r, u.S[r], t, n, a)
            })(((e, r, n, a, o) => {
              var i = r && u.o(r, n) && t(r, n, a);
              return i ? (e => (e.loaded = 1, e.get()))(i) : o()
            })),
            a = {},
            o = {
              525: () => n("default", "@rockstar/fingerprint-js", [1, 1, 0, 0], (() => u.e(377).then((() => () => u(377))))),
              784: () => n("default", "react", [1, 18, 2, 0], (() => u.e(380).then((() => () => u(380)))))
            },
            i = {
              563: [525, 784]
            },
            s = {};
          u.f.consumes = (e, r) => {
            u.o(i, e) && i[e].forEach((e => {
              if (u.o(a, e)) return r.push(a[e]);
              if (!s[e]) {
                var t = r => {
                  a[e] = 0, u.m[e] = t => {
                    delete u.c[e], t.exports = r()
                  }
                };
                s[e] = !0;
                var n = r => {
                  delete a[e], u.m[e] = t => {
                    throw delete u.c[e], r
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
            178: 0
          };
          u.f.j = (r, t) => {
            var n = u.o(e, r) ? e[r] : void 0;
            if (0 !== n)
              if (n) t.push(n[2]);
              else if (756 != r) {
              var a = new Promise(((t, a) => n = e[r] = [t, a]));
              t.push(n[2] = a);
              var o = u.p + u.u(r),
                i = new Error;
              u.l(o, (t => {
                if (u.o(e, r) && (0 !== (n = e[r]) && (e[r] = void 0), n)) {
                  var a = t && ("load" === t.type ? "missing" : t.type),
                    o = t && t.target && t.target.src;
                  i.message = "Loading chunk " + r + " failed.\n(" + a + ": " + o + ")", i.name = "ChunkLoadError", i.type = a, i.request = o, n[1](i)
                }
              }), "chunk-" + r, r)
            } else e[r] = 0
          };
          var r = (r, t) => {
              var n, a, o = t[0],
                i = t[1],
                s = t[2],
                f = 0;
              if (o.some((r => 0 !== e[r]))) {
                for (n in i) u.o(i, n) && (u.m[n] = i[n]);
                s && s(u)
              }
              for (r && r(t); f < o.length; f++) a = o[f], u.o(e, a) && e[a] && e[a][0](), e[a] = 0
            },
            t = self.webpackChunk_rockstargames_modules_core_sc_user = self.webpackChunk_rockstargames_modules_core_sc_user || [];
          t.forEach(r.bind(null, 0)), t.push = r.bind(null, t.push.bind(t))
        })(), u(160), u(527)
      })())
    }
  }
}));