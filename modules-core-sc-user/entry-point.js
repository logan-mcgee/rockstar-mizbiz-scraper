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
        var e, o, a, i, s = {
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
                for (var n = "/" === t.pathname[0] ? t.pathname : "/" + t.pathname, o = 0, a = n.length; o !== r && a >= 0;) "/" === n[--a] && o++;
                if (o !== r) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + r + ") is greater than the number of directories (" + o + ") in the URL path " + e);
                var i = n.slice(0, a + 1);
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
                o = (e, r) => (t.R = r, r = t.o(n, e) ? n[e]() : Promise.resolve().then((() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                })), t.R = void 0, r),
                a = (e, r) => {
                  if (t.S) {
                    var n = "default",
                      o = t.S[n];
                    if (o && o !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return t.S[n] = e, t.I(n, r)
                  }
                };
              t.d(r, {
                get: () => o,
                init: () => a
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
          u = {};

        function d(e) {
          var r = u[e];
          if (void 0 !== r) return r.exports;
          var t = u[e] = {
            exports: {}
          };
          return s[e](t, t.exports, d), t.exports
        }
        return d.m = s, d.c = u, d.y = r, d.n = e => {
          var r = e && e.__esModule ? () => e.default : () => e;
          return d.d(r, {
            a: r
          }), r
        }, d.d = (e, r) => {
          for (var t in r) d.o(r, t) && !d.o(e, t) && Object.defineProperty(e, t, {
            enumerable: !0,
            get: r[t]
          })
        }, d.f = {}, d.e = e => Promise.all(Object.keys(d.f).reduce(((r, t) => (d.f[t](e, r), r)), [])), d.u = e => "js/" + {
          377: "33d6e6e5561dac681dcb335f2e7da95f",
          380: "601d2031a769300d6f8ea44af256eafb",
          563: "1e564ab4261cbe85ef40d63640ad8935",
          756: "078fd74e421144441ef2a89b9930d6af",
          847: "1ac681496fc56986af97dfbd84bcfb6e"
        } [e] + ".js", d.miniCssF = e => {}, d.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), d.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r), e = {}, o = "@rockstargames/modules-core-sc-user:", d.l = (r, t, n, a) => {
          if (e[r]) e[r].push(t);
          else {
            var i, s;
            if (void 0 !== n)
              for (var u = document.getElementsByTagName("script"), f = 0; f < u.length; f++) {
                var l = u[f];
                if (l.getAttribute("src") == r || l.getAttribute("data-webpack") == o + n) {
                  i = l;
                  break
                }
              }
            i || (s = !0, (i = document.createElement("script")).charset = "utf-8", i.timeout = 120, d.nc && i.setAttribute("nonce", d.nc), i.setAttribute("data-webpack", o + n), i.src = r), e[r] = [t];
            var c = (t, n) => {
                i.onerror = i.onload = null, clearTimeout(p);
                var o = e[r];
                if (delete e[r], i.parentNode && i.parentNode.removeChild(i), o && o.forEach((e => e(n))), t) return t(n)
              },
              p = setTimeout(c.bind(null, void 0, {
                type: "timeout",
                target: i
              }), 12e4);
            i.onerror = c.bind(null, i.onerror), i.onload = c.bind(null, i.onload), s && document.head.appendChild(i)
          }
        }, d.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, a = {
          563: [396, 407, 662],
          756: [756]
        }, i = {
          396: ["default", "./hooks", 969],
          407: ["default", "./index", 24],
          662: ["default", "./gtm", 969],
          756: ["default", "./index", 969]
        }, d.f.remotes = (e, r) => {
          d.o(a, e) && a[e].forEach((e => {
            var t = d.R;
            t || (t = []);
            var n = i[e];
            if (!(t.indexOf(n) >= 0)) {
              if (t.push(n), n.p) return r.push(n.p);
              var o = r => {
                  r || (r = new Error("Container missing")), "string" == typeof r.message && (r.message += '\nwhile loading "' + n[1] + '" from ' + n[2]), d.m[e] = () => {
                    throw r
                  }, n.p = 0
                },
                a = (e, t, a, i, s, u) => {
                  try {
                    var d = e(t, a);
                    if (!d || !d.then) return s(d, i, u);
                    var f = d.then((e => s(e, i)), o);
                    if (!u) return f;
                    r.push(n.p = f)
                  } catch (e) {
                    o(e)
                  }
                },
                s = (e, r, o) => a(r.get, n[1], t, 0, u, o),
                u = r => {
                  n.p = 1, d.m[e] = e => {
                    e.exports = r()
                  }
                };
              a(d, n[2], 0, 0, ((e, r, t) => e ? a(d.I, n[0], 0, e, s, t) : o()), 1)
            }
          }))
        }, (() => {
          d.S = {};
          var e = {},
            r = {};
          d.I = (t, n) => {
            n || (n = []);
            var o = r[t];
            if (o || (o = r[t] = {}), !(n.indexOf(o) >= 0)) {
              if (n.push(o), e[t]) return e[t];
              d.o(d.S, t) || (d.S[t] = {});
              var a = d.S[t],
                i = "@rockstargames/modules-core-sc-user",
                s = (e, r, t, n) => {
                  var o = a[e] = a[e] || {},
                    s = o[r];
                  (!s || !s.loaded && (!n != !s.eager ? n : i > s.from)) && (o[r] = {
                    get: t,
                    from: i,
                    eager: !!n
                  })
                },
                u = e => {
                  var r = e => {
                    return r = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(r));
                    var r
                  };
                  try {
                    var o = d(e);
                    if (!o) return;
                    var a = e => e && e.init && e.init(d.S[t], n);
                    if (o.then) return f.push(o.then(a, r));
                    var i = a(o);
                    if (i && i.then) return f.push(i.catch(r))
                  } catch (e) {
                    r(e)
                  }
                },
                f = [];
              return "default" === t && (s("@rockstar/fingerprint-js", "1.0.0", (() => d.e(377).then((() => () => d(377))))), s("react", "18.2.0", (() => d.e(380).then((() => () => d(380))))), u(969), u(24)), f.length ? e[t] = Promise.all(f).then((() => e[t] = 1)) : e[t] = 1
            }
          }
        })(), (() => {
          var e;
          d.g.importScripts && (e = d.g.location + "");
          var r = d.g.document;
          if (!e && r && (r.currentScript && (e = r.currentScript.src), !e)) {
            var t = r.getElementsByTagName("script");
            if (t.length)
              for (var n = t.length - 1; n > -1 && (!e || !/^http(s?):/.test(e));) e = t[n--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), d.p = e
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
                var o = t[0],
                  a = o < 0;
                a && (o = -o - 1);
                for (var i = 0, s = 1, u = !0;; s++, i++) {
                  var d, f, l = s < t.length ? (typeof t[s])[0] : "";
                  if (i >= n.length || "o" == (f = (typeof(d = n[i]))[0])) return !u || ("u" == l ? s > o && !a : "" == l != a);
                  if ("u" == f) {
                    if (!u || "u" != l) return !1
                  } else if (u)
                    if (l == f)
                      if (s <= o) {
                        if (d != t[s]) return !1
                      } else {
                        if (a ? d > t[s] : d < t[s]) return !1;
                        d != t[s] && (u = !1)
                      }
                  else if ("s" != l && "n" != l) {
                    if (a || s <= o) return !1;
                    u = !1, s--
                  } else {
                    if (s <= o || f < l != a) return !1;
                    u = !1
                  } else "s" != l && "n" != l && (u = !1, s--)
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
            t = (t, n, o) => {
              var a = t[n];
              return (n = Object.keys(a).reduce(((t, n) => !r(o, n) || t && !((r, t) => {
                r = e(r), t = e(t);
                for (var n = 0;;) {
                  if (n >= r.length) return n < t.length && "u" != (typeof t[n])[0];
                  var o = r[n],
                    a = (typeof o)[0];
                  if (n >= t.length) return "u" == a;
                  var i = t[n],
                    s = (typeof i)[0];
                  if (a != s) return "o" == a && "n" == s || "s" == s || "u" == a;
                  if ("o" != a && "u" != a && o != i) return o < i;
                  n++
                }
              })(t, n) ? t : n), 0)) && a[n]
            },
            n = (e => function(r, t, n, o) {
              var a = d.I(r);
              return a && a.then ? a.then(e.bind(e, r, d.S[r], t, n, o)) : e(r, d.S[r], t, n, o)
            })(((e, r, n, o, a) => {
              var i = r && d.o(r, n) && t(r, n, o);
              return i ? (e => (e.loaded = 1, e.get()))(i) : a()
            })),
            o = {},
            a = {
              525: () => n("default", "@rockstar/fingerprint-js", [1, 1, 0, 0], (() => d.e(377).then((() => () => d(377))))),
              784: () => n("default", "react", [1, 18, 2, 0], (() => d.e(380).then((() => () => d(380)))))
            },
            i = {
              563: [525, 784]
            },
            s = {};
          d.f.consumes = (e, r) => {
            d.o(i, e) && i[e].forEach((e => {
              if (d.o(o, e)) return r.push(o[e]);
              if (!s[e]) {
                var t = r => {
                  o[e] = 0, d.m[e] = t => {
                    delete d.c[e], t.exports = r()
                  }
                };
                s[e] = !0;
                var n = r => {
                  delete o[e], d.m[e] = t => {
                    throw delete d.c[e], r
                  }
                };
                try {
                  var i = a[e]();
                  i.then ? r.push(o[e] = i.then(t).catch(n)) : t(i)
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
          d.f.j = (r, t) => {
            var n = d.o(e, r) ? e[r] : void 0;
            if (0 !== n)
              if (n) t.push(n[2]);
              else if (756 != r) {
              var o = new Promise(((t, o) => n = e[r] = [t, o]));
              t.push(n[2] = o);
              var a = d.p + d.u(r),
                i = new Error;
              d.l(a, (t => {
                if (d.o(e, r) && (0 !== (n = e[r]) && (e[r] = void 0), n)) {
                  var o = t && ("load" === t.type ? "missing" : t.type),
                    a = t && t.target && t.target.src;
                  i.message = "Loading chunk " + r + " failed.\n(" + o + ": " + a + ")", i.name = "ChunkLoadError", i.type = o, i.request = a, n[1](i)
                }
              }), "chunk-" + r, r)
            } else e[r] = 0
          };
          var r = (r, t) => {
              var n, o, a = t[0],
                i = t[1],
                s = t[2],
                u = 0;
              if (a.some((r => 0 !== e[r]))) {
                for (n in i) d.o(i, n) && (d.m[n] = i[n]);
                s && s(d)
              }
              for (r && r(t); u < a.length; u++) o = a[u], d.o(e, o) && e[o] && e[o][0](), e[o] = 0
            },
            t = self.webpackChunk_rockstargames_modules_core_sc_user = self.webpackChunk_rockstargames_modules_core_sc_user || [];
          t.forEach(r.bind(null, 0)), t.push = r.bind(null, t.push.bind(t))
        })(), d(160), d(527)
      })())
    }
  }
}));