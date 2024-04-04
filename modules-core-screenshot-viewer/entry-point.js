! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      r = (new Error).stack;
    r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "2d31cfa2-badb-4494-8451-8f9596e66fdc", e._sentryDebugIdIdentifier = "sentry-dbid-2d31cfa2-badb-4494-8451-8f9596e66fdc")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "90b9af281bd1b5c2955354a97f6fab1985234888",
  packageName: "@rockstargames/modules-core-screenshot-viewer",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "90b9af281bd1b5c2955354a97f6fab1985234888"
}, System.register([], (function(e, r) {
  return {
    execute: function() {
      e((() => {
        var e, t, n, o, a = {
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
                for (var n = "/" === t.pathname[0] ? t.pathname : "/" + t.pathname, o = 0, a = n.length; o !== r && a >= 0;) "/" === n[--a] && o++;
                if (o !== r) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + r + ") is greater than the number of directories (" + o + ") in the URL path " + e);
                var i = n.slice(0, a + 1);
                return t.protocol + "//" + t.host + i
              };
              Number.isInteger
            },
            461: (e, r, t) => {
              "use strict";
              var n = {
                  "./index": () => Promise.all([t.e(664), t.e(624)]).then((() => () => t(624)))
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
        return s.m = a, s.c = i, s.y = r, s.d = (e, r) => {
          for (var t in r) s.o(r, t) && !s.o(e, t) && Object.defineProperty(e, t, {
            enumerable: !0,
            get: r[t]
          })
        }, s.f = {}, s.e = e => Promise.all(Object.keys(s.f).reduce(((r, t) => (s.f[t](e, r), r)), [])), s.u = e => "js/" + {
          100: "f3c2255dac0f032cc19fa0ac44f64111",
          520: "d8d63e5d3ba2424ebfdd616aca0762bc",
          624: "d2325d5601f859bbf284bc0a0c111633",
          664: "63b09c4b04eae212e5ab4fcf2bec0f4d"
        } [e] + ".js", s.miniCssF = e => "css/8ddeaa662a389c67ab26ff2d3e176f9a.css", s.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), s.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r), e = {}, t = "@rockstargames/modules-core-screenshot-viewer:", s.l = (r, n, o, a) => {
          if (e[r]) e[r].push(n);
          else {
            var i, f;
            if (void 0 !== o)
              for (var d = document.getElementsByTagName("script"), l = 0; l < d.length; l++) {
                var u = d[l];
                if (u.getAttribute("src") == r || u.getAttribute("data-webpack") == t + o) {
                  i = u;
                  break
                }
              }
            i || (f = !0, (i = document.createElement("script")).charset = "utf-8", i.timeout = 120, s.nc && i.setAttribute("nonce", s.nc), i.setAttribute("data-webpack", t + o), i.src = r), e[r] = [n];
            var c = (t, n) => {
                i.onerror = i.onload = null, clearTimeout(p);
                var o = e[r];
                if (delete e[r], i.parentNode && i.parentNode.removeChild(i), o && o.forEach((e => e(n))), t) return t(n)
              },
              p = setTimeout(c.bind(null, void 0, {
                type: "timeout",
                target: i
              }), 12e4);
            i.onerror = c.bind(null, i.onerror), i.onload = c.bind(null, i.onload), f && document.head.appendChild(i)
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
                i = (e, t, o, i, s, f) => {
                  try {
                    var d = e(t, o);
                    if (!d || !d.then) return s(d, i, f);
                    var l = d.then((e => s(e, i)), a);
                    if (!f) return l;
                    r.push(n.p = l)
                  } catch (e) {
                    a(e)
                  }
                },
                f = (e, r, o) => i(r.get, n[1], t, 0, d, o),
                d = r => {
                  n.p = 1, s.m[e] = e => {
                    e.exports = r()
                  }
                };
              i(s, n[2], 0, 0, ((e, r, t) => e ? i(s.I, n[0], 0, e, f, t) : a()), 1)
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
                i = "@rockstargames/modules-core-screenshot-viewer",
                f = (e, r, t, n) => {
                  var o = a[e] = a[e] || {},
                    s = o[r];
                  (!s || !s.loaded && (!n != !s.eager ? n : i > s.from)) && (o[r] = {
                    get: t,
                    from: i,
                    eager: !!n
                  })
                },
                d = [];
              return "default" === t && (f("react-router-dom", "6.17.0", (() => Promise.all([s.e(520), s.e(664)]).then((() => () => s(520))))), f("react", "18.2.0", (() => s.e(100).then((() => () => s(100)))))), e[t] = d.length ? Promise.all(d).then((() => e[t] = 1)) : 1
            }
          }
        })(), (() => {
          var e;
          s.g.importScripts && (e = s.g.location + "");
          var r = s.g.document;
          if (!e && r && (r.currentScript && (e = r.currentScript.src), !e)) {
            var t = r.getElementsByTagName("script");
            if (t.length)
              for (var n = t.length - 1; n > -1 && !e;) e = t[n--].src
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
                for (var i = 0, s = 1, f = !0;; s++, i++) {
                  var d, l, u = s < t.length ? (typeof t[s])[0] : "";
                  if (i >= n.length || "o" == (l = (typeof(d = n[i]))[0])) return !f || ("u" == u ? s > o && !a : "" == u != a);
                  if ("u" == l) {
                    if (!f || "u" != u) return !1
                  } else if (f)
                    if (u == l)
                      if (s <= o) {
                        if (d != t[s]) return !1
                      } else {
                        if (a ? d > t[s] : d < t[s]) return !1;
                        d != t[s] && (f = !1)
                      }
                  else if ("s" != u && "n" != u) {
                    if (a || s <= o) return !1;
                    f = !1, s--
                  } else {
                    if (s <= o || l < u != a) return !1;
                    f = !1
                  } else "s" != u && "n" != u && (f = !1, s--)
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
              664: () => n("default", "react", [1, 18, 2, 0], (() => s.e(100).then((() => () => s(100))))),
              584: () => n("default", "react-router-dom", [1, 6, 11, 2], (() => s.e(520).then((() => () => s(520)))))
            },
            i = {
              624: [584],
              664: [664]
            },
            f = {};
          s.f.consumes = (e, r) => {
            s.o(i, e) && i[e].forEach((e => {
              if (s.o(o, e)) return r.push(o[e]);
              if (!f[e]) {
                var t = r => {
                  o[e] = 0, s.m[e] = t => {
                    delete s.c[e], t.exports = r()
                  }
                };
                f[e] = !0;
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
          if ("undefined" != typeof document) {
            var e = {
              132: 0
            };
            s.f.miniCss = (r, t) => {
              e[r] ? t.push(e[r]) : 0 !== e[r] && {
                624: 1
              } [r] && t.push(e[r] = (e => new Promise(((r, t) => {
                var n = s.miniCssF(e),
                  o = s.p + n;
                if (((e, r) => {
                    for (var t = document.getElementsByTagName("link"), n = 0; n < t.length; n++) {
                      var o = (i = t[n]).getAttribute("data-href") || i.getAttribute("href");
                      if ("stylesheet" === i.rel && (o === e || o === r)) return i
                    }
                    var a = document.getElementsByTagName("style");
                    for (n = 0; n < a.length; n++) {
                      var i;
                      if ((o = (i = a[n]).getAttribute("data-href")) === e || o === r) return i
                    }
                  })(n, o)) return r();
                ((e, r, t, n, o) => {
                  var a = document.createElement("link");
                  a.rel = "stylesheet", a.type = "text/css", a.onerror = a.onload = t => {
                    if (a.onerror = a.onload = null, "load" === t.type) n();
                    else {
                      var i = t && ("load" === t.type ? "missing" : t.type),
                        s = t && t.target && t.target.href || r,
                        f = new Error("Loading CSS chunk " + e + " failed.\n(" + s + ")");
                      f.code = "CSS_CHUNK_LOAD_FAILED", f.type = i, f.request = s, a.parentNode && a.parentNode.removeChild(a), o(f)
                    }
                  }, a.href = r, document.head.appendChild(a)
                })(e, o, 0, r, t)
              })))(r).then((() => {
                e[r] = 0
              }), (t => {
                throw delete e[r], t
              })))
            }
          }
        })(), (() => {
          var e = {
            132: 0
          };
          s.f.j = (r, t) => {
            var n = s.o(e, r) ? e[r] : void 0;
            if (0 !== n)
              if (n) t.push(n[2]);
              else if (664 != r) {
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
            } else e[r] = 0
          };
          var r = (r, t) => {
              var n, o, a = t[0],
                i = t[1],
                f = t[2],
                d = 0;
              if (a.some((r => 0 !== e[r]))) {
                for (n in i) s.o(i, n) && (s.m[n] = i[n]);
                f && f(s)
              }
              for (r && r(t); d < a.length; d++) o = a[d], s.o(e, o) && e[o] && e[o][0](), e[o] = 0
            },
            t = self.webpackChunk_rockstargames_modules_core_screenshot_viewer = self.webpackChunk_rockstargames_modules_core_screenshot_viewer || [];
          t.forEach(r.bind(null, 0)), t.push = r.bind(null, t.push.bind(t))
        })(), s(824), s(461)
      })())
    }
  }
}));
//# sourceMappingURL=remote-entry.js.map