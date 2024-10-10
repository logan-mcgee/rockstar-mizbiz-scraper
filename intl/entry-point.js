! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      r = (new Error).stack;
    r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "4428da10-3e87-468a-9271-44fd4008b861", e._sentryDebugIdIdentifier = "sentry-dbid-4428da10-3e87-468a-9271-44fd4008b861")
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
}, System.register([], (function(e, r) {
  return {
    execute: function() {
      e((() => {
        var e, t, n, o, a = {
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
            243: (e, r, t) => {
              "use strict";
              var n = {
                  "./index": () => t.e(785).then((() => () => t(785))),
                  "./messages": () => t.e(135).then((() => () => t(135)))
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
            }
          },
          i = {};

        function s(e) {
          var r = i[e];
          if (void 0 !== r) return r.exports;
          var t = i[e] = {
            exports: {}
          };
          return a[e](t, t.exports, s), t.exports
        }
        return s.m = a, s.c = i, s.y = r, s.n = e => {
          var r = e && e.__esModule ? () => e.default : () => e;
          return s.d(r, {
            a: r
          }), r
        }, s.d = (e, r) => {
          for (var t in r) s.o(r, t) && !s.o(e, t) && Object.defineProperty(e, t, {
            enumerable: !0,
            get: r[t]
          })
        }, s.f = {}, s.e = e => Promise.all(Object.keys(s.f).reduce(((r, t) => (s.f[t](e, r), r)), [])), s.u = e => "js/" + {
          135: "d3c5e6a88321dcd6e4eb5ff15a5e641c",
          143: "161ed8f81800b223f35d169a0451750e",
          667: "4bed97679a673b7f9af645ddf718384a",
          785: "1a8f39d415a0f638b057748224b8d66e"
        } [e] + ".js", s.miniCssF = e => {}, s.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), s.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r), e = {}, t = "@rockstargames/intl:", s.l = (r, n, o, a) => {
          if (e[r]) e[r].push(n);
          else {
            var i, l;
            if (void 0 !== o)
              for (var d = document.getElementsByTagName("script"), f = 0; f < d.length; f++) {
                var u = d[f];
                if (u.getAttribute("src") == r || u.getAttribute("data-webpack") == t + o) {
                  i = u;
                  break
                }
              }
            i || (l = !0, (i = document.createElement("script")).charset = "utf-8", i.timeout = 120, s.nc && i.setAttribute("nonce", s.nc), i.setAttribute("data-webpack", t + o), i.src = r), e[r] = [n];
            var c = (t, n) => {
                i.onerror = i.onload = null, clearTimeout(p);
                var o = e[r];
                if (delete e[r], i.parentNode && i.parentNode.removeChild(i), o && o.forEach((e => e(n))), t) return t(n)
              },
              p = setTimeout(c.bind(null, void 0, {
                type: "timeout",
                target: i
              }), 12e4);
            i.onerror = c.bind(null, i.onerror), i.onload = c.bind(null, i.onload), l && document.head.appendChild(i)
          }
        }, s.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, n = {}, o = {}, s.f.remotes = (e, r) => {
          s.o(n, e) && n[e].forEach((e => {
            var t = s.R;
            t || (t = []);
            var n = o[e];
            if (!(t.indexOf(n) >= 0)) {
              if (t.push(n), n.p) return r.push(n.p);
              var a = r => {
                  r || (r = new Error("Container missing")), "string" == typeof r.message && (r.message += '\nwhile loading "' + n[1] + '" from ' + n[2]), s.m[e] = () => {
                    throw r
                  }, n.p = 0
                },
                i = (e, t, o, i, s, l) => {
                  try {
                    var d = e(t, o);
                    if (!d || !d.then) return s(d, i, l);
                    var f = d.then((e => s(e, i)), a);
                    if (!l) return f;
                    r.push(n.p = f)
                  } catch (e) {
                    a(e)
                  }
                },
                l = (e, r, o) => i(r.get, n[1], t, 0, d, o),
                d = r => {
                  n.p = 1, s.m[e] = e => {
                    e.exports = r()
                  }
                };
              i(s, n[2], 0, 0, ((e, r, t) => e ? i(s.I, n[0], 0, e, l, t) : a()), 1)
            }
          }))
        }, (() => {
          s.S = {};
          var e = {},
            r = {};
          s.I = (t, n) => {
            n || (n = []);
            var o = r[t];
            if (o || (o = r[t] = {}), !(n.indexOf(o) >= 0)) {
              if (n.push(o), e[t]) return e[t];
              s.o(s.S, t) || (s.S[t] = {});
              var a = s.S[t],
                i = "@rockstargames/intl",
                l = [];
              return "default" === t && ((e, r, t, n) => {
                var o = a[e] = a[e] || {},
                  l = o[r];
                (!l || !l.loaded && (1 != !l.eager ? n : i > l.from)) && (o[r] = {
                  get: () => Promise.all([s.e(667), s.e(143)]).then((() => () => s(143))),
                  from: i,
                  eager: !1
                })
              })("@rockstargames/locale-tools", "1.0.0"), e[t] = l.length ? Promise.all(l).then((() => e[t] = 1)) : 1
            }
          }
        })(), (() => {
          var e;
          s.g.importScripts && (e = s.g.location + "");
          var r = s.g.document;
          if (!e && r && (r.currentScript && (e = r.currentScript.src), !e)) {
            var t = r.getElementsByTagName("script");
            if (t.length)
              for (var n = t.length - 1; n > -1 && (!e || !/^http(s?):/.test(e));) e = t[n--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), s.p = e
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
                for (var i = 0, s = 1, l = !0;; s++, i++) {
                  var d, f, u = s < t.length ? (typeof t[s])[0] : "";
                  if (i >= n.length || "o" == (f = (typeof(d = n[i]))[0])) return !l || ("u" == u ? s > o && !a : "" == u != a);
                  if ("u" == f) {
                    if (!l || "u" != u) return !1
                  } else if (l)
                    if (u == f)
                      if (s <= o) {
                        if (d != t[s]) return !1
                      } else {
                        if (a ? d > t[s] : d < t[s]) return !1;
                        d != t[s] && (l = !1)
                      }
                  else if ("s" != u && "n" != u) {
                    if (a || s <= o) return !1;
                    l = !1, s--
                  } else {
                    if (s <= o || f < u != a) return !1;
                    l = !1
                  } else "s" != u && "n" != u && (l = !1, s--)
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
              var a = s.I(r);
              return a && a.then ? a.then(e.bind(e, r, s.S[r], t, n, o)) : e(r, s.S[r], t, n, o)
            })(((e, r, n, o, a) => {
              var i = r && s.o(r, n) && t(r, n, o);
              return i ? (e => (e.loaded = 1, e.get()))(i) : a()
            })),
            o = {},
            a = {
              717: () => n("default", "@rockstargames/locale-tools", [1, "workspace:*"], (() => Promise.all([s.e(667), s.e(143)]).then((() => () => s(143)))))
            },
            i = {
              135: [717]
            },
            l = {};
          s.f.consumes = (e, r) => {
            s.o(i, e) && i[e].forEach((e => {
              if (s.o(o, e)) return r.push(o[e]);
              if (!l[e]) {
                var t = r => {
                  o[e] = 0, s.m[e] = t => {
                    delete s.c[e], t.exports = r()
                  }
                };
                l[e] = !0;
                var n = r => {
                  delete o[e], s.m[e] = t => {
                    throw delete s.c[e], r
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
            323: 0
          };
          s.f.j = (r, t) => {
            var n = s.o(e, r) ? e[r] : void 0;
            if (0 !== n)
              if (n) t.push(n[2]);
              else {
                var o = new Promise(((t, o) => n = e[r] = [t, o]));
                t.push(n[2] = o);
                var a = s.p + s.u(r),
                  i = new Error;
                s.l(a, (t => {
                  if (s.o(e, r) && (0 !== (n = e[r]) && (e[r] = void 0), n)) {
                    var o = t && ("load" === t.type ? "missing" : t.type),
                      a = t && t.target && t.target.src;
                    i.message = "Loading chunk " + r + " failed.\n(" + o + ": " + a + ")", i.name = "ChunkLoadError", i.type = o, i.request = a, n[1](i)
                  }
                }), "chunk-" + r, r)
              }
          };
          var r = (r, t) => {
              var n, o, a = t[0],
                i = t[1],
                l = t[2],
                d = 0;
              if (a.some((r => 0 !== e[r]))) {
                for (n in i) s.o(i, n) && (s.m[n] = i[n]);
                l && l(s)
              }
              for (r && r(t); d < a.length; d++) o = a[d], s.o(e, o) && e[o] && e[o][0](), e[o] = 0
            },
            t = self.webpackChunk_rockstargames_intl = self.webpackChunk_rockstargames_intl || [];
          t.forEach(r.bind(null, 0)), t.push = r.bind(null, t.push.bind(t))
        })(), s(160), s(243)
      })())
    }
  }
}));