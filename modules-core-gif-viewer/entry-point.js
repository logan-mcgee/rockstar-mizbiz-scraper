! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      r = (new Error).stack;
    r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "02eead48-a88d-47ac-867f-cc929c69aae8", e._sentryDebugIdIdentifier = "sentry-dbid-02eead48-a88d-47ac-867f-cc929c69aae8")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-gif-viewer",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register(["@rockstargames/graph-client", "@rockstargames/tina"], (function(e, r) {
  var t = {},
    a = {};
  return Object.defineProperty(t, "__esModule", {
    value: !0
  }), Object.defineProperty(a, "__esModule", {
    value: !0
  }), {
    setters: [function(e) {
      Object.keys(e).forEach((function(r) {
        t[r] = e[r]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(r) {
        a[r] = e[r]
      }))
    }],
    execute: function() {
      e((() => {
        var e, n, o, i, s = {
            539: (e, r, t) => {
              (0, t(403).w)(1)
            },
            403: (e, r, t) => {
              const a = t(659).y;
              r.w = function(e) {
                if (e || (e = 1), !t.y.meta || !t.y.meta.url) throw console.error("__system_context__", t.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                t.p = a(t.y.meta.url, e)
              }
            },
            160: (e, r, t) => {
              t(539)
            },
            659: (e, r, t) => {
              r.y = function(e, r) {
                var t = document.createElement("a");
                t.href = e;
                for (var a = "/" === t.pathname[0] ? t.pathname : "/" + t.pathname, n = 0, o = a.length; n !== r && o >= 0;) "/" === a[--o] && n++;
                if (n !== r) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + r + ") is greater than the number of directories (" + n + ") in the URL path " + e);
                var i = a.slice(0, o + 1);
                return t.protocol + "//" + t.host + i
              };
              Number.isInteger
            },
            464: (e, r, t) => {
              "use strict";
              var a = {
                  "./index": () => Promise.all([t.e(403), t.e(407), t.e(179)]).then((() => () => t(179))),
                  "./lazy": () => Promise.all([t.e(403), t.e(407), t.e(162)]).then((() => () => t(162))),
                  "./tina": () => Promise.all([t.e(403), t.e(407), t.e(949)]).then((() => () => t(949))),
                  "./tinaBlockTemplates": () => Promise.all([t.e(403), t.e(407), t.e(949)]).then((() => () => t(949)))
                },
                n = (e, r) => (t.R = r, r = t.o(a, e) ? a[e]() : Promise.resolve().then((() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                })), t.R = void 0, r),
                o = (e, r) => {
                  if (t.S) {
                    var a = "default",
                      n = t.S[a];
                    if (n && n !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return t.S[a] = e, t.I(a, r)
                  }
                };
              t.d(r, {
                get: () => n,
                init: () => o
              })
            },
            24: e => {
              "use strict";
              e.exports = t
            },
            466: e => {
              "use strict";
              e.exports = a
            }
          },
          f = {};

        function d(e) {
          var r = f[e];
          if (void 0 !== r) return r.exports;
          var t = f[e] = {
            exports: {}
          };
          return s[e](t, t.exports, d), t.exports
        }
        return d.m = s, d.c = f, d.y = r, d.d = (e, r) => {
          for (var t in r) d.o(r, t) && !d.o(e, t) && Object.defineProperty(e, t, {
            enumerable: !0,
            get: r[t]
          })
        }, d.f = {}, d.e = e => Promise.all(Object.keys(d.f).reduce(((r, t) => (d.f[t](e, r), r)), [])), d.u = e => "js/" + {
          162: "4154d368255fa599c0f32b5dfeebb79e",
          179: "a576c886588e1629a615ba1136da6aa4",
          380: "76f54afd6ad92f0714794dc9897a325f",
          403: "f8992979be13f39b77e9aaec3b0b21b3",
          407: "8e8fe8e5272feb667c05f4e781e7018a",
          748: "69f3521028ffd01e8efede9c8b231b34",
          949: "148323995a0a0dd442fe76b584d23d8a"
        } [e] + ".js", d.miniCssF = e => "css/" + {
          162: "5754518f8676a553fd5fd46915d3a889",
          179: "fe210ed3f04fe64376cb80e4b64a13b3",
          949: "a2c14791497f4da32703f3acc0251cfc"
        } [e] + ".css", d.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), d.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r), e = {}, n = "@rockstargames/modules-core-gif-viewer:", d.l = (r, t, a, o) => {
          if (e[r]) e[r].push(t);
          else {
            var i, s;
            if (void 0 !== a)
              for (var f = document.getElementsByTagName("script"), l = 0; l < f.length; l++) {
                var u = f[l];
                if (u.getAttribute("src") == r || u.getAttribute("data-webpack") == n + a) {
                  i = u;
                  break
                }
              }
            i || (s = !0, (i = document.createElement("script")).charset = "utf-8", i.timeout = 120, d.nc && i.setAttribute("nonce", d.nc), i.setAttribute("data-webpack", n + a), i.src = r), e[r] = [t];
            var c = (t, a) => {
                i.onerror = i.onload = null, clearTimeout(p);
                var n = e[r];
                if (delete e[r], i.parentNode && i.parentNode.removeChild(i), n && n.forEach((e => e(a))), t) return t(a)
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
        }, o = {
          407: [407],
          949: [140, 809]
        }, i = {
          140: ["default", "./properties", 466],
          407: ["default", "./index", 24],
          809: ["default", "./ui", 466]
        }, d.f.remotes = (e, r) => {
          d.o(o, e) && o[e].forEach((e => {
            var t = d.R;
            t || (t = []);
            var a = i[e];
            if (!(t.indexOf(a) >= 0)) {
              if (t.push(a), a.p) return r.push(a.p);
              var n = r => {
                  r || (r = new Error("Container missing")), "string" == typeof r.message && (r.message += '\nwhile loading "' + a[1] + '" from ' + a[2]), d.m[e] = () => {
                    throw r
                  }, a.p = 0
                },
                o = (e, t, o, i, s, f) => {
                  try {
                    var d = e(t, o);
                    if (!d || !d.then) return s(d, i, f);
                    var l = d.then((e => s(e, i)), n);
                    if (!f) return l;
                    r.push(a.p = l)
                  } catch (e) {
                    n(e)
                  }
                },
                s = (e, r, n) => o(r.get, a[1], t, 0, f, n),
                f = r => {
                  a.p = 1, d.m[e] = e => {
                    e.exports = r()
                  }
                };
              o(d, a[2], 0, 0, ((e, r, t) => e ? o(d.I, a[0], 0, e, s, t) : n()), 1)
            }
          }))
        }, (() => {
          d.S = {};
          var e = {},
            r = {};
          d.I = (t, a) => {
            a || (a = []);
            var n = r[t];
            if (n || (n = r[t] = {}), !(a.indexOf(n) >= 0)) {
              if (a.push(n), e[t]) return e[t];
              d.o(d.S, t) || (d.S[t] = {});
              var o = d.S[t],
                i = "@rockstargames/modules-core-gif-viewer",
                s = (e, r, t, a) => {
                  var n = o[e] = o[e] || {},
                    s = n[r];
                  (!s || !s.loaded && (!a != !s.eager ? a : i > s.from)) && (n[r] = {
                    get: t,
                    from: i,
                    eager: !!a
                  })
                },
                f = e => {
                  var r = e => {
                    return r = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(r));
                    var r
                  };
                  try {
                    var n = d(e);
                    if (!n) return;
                    var o = e => e && e.init && e.init(d.S[t], a);
                    if (n.then) return l.push(n.then(o, r));
                    var i = o(n);
                    if (i && i.then) return l.push(i.catch(r))
                  } catch (e) {
                    r(e)
                  }
                },
                l = [];
              return "default" === t && (s("react-router-dom", "6.17.0", (() => Promise.all([d.e(748), d.e(403)]).then((() => () => d(748))))), s("react", "18.2.0", (() => d.e(380).then((() => () => d(380))))), f(24), f(466)), l.length ? e[t] = Promise.all(l).then((() => e[t] = 1)) : e[t] = 1
            }
          }
        })(), (() => {
          var e;
          d.g.importScripts && (e = d.g.location + "");
          var r = d.g.document;
          if (!e && r && (r.currentScript && (e = r.currentScript.src), !e)) {
            var t = r.getElementsByTagName("script");
            if (t.length)
              for (var a = t.length - 1; a > -1 && (!e || !/^http(s?):/.test(e));) e = t[a--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), d.p = e
        })(), (() => {
          var e = e => {
              var r = e => e.split(".").map((e => +e == e ? +e : e)),
                t = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
                a = t[1] ? r(t[1]) : [];
              return t[2] && (a.length++, a.push.apply(a, r(t[2]))), t[3] && (a.push([]), a.push.apply(a, r(t[3]))), a
            },
            r = (t, a) => {
              if (0 in t) {
                a = e(a);
                var n = t[0],
                  o = n < 0;
                o && (n = -n - 1);
                for (var i = 0, s = 1, f = !0;; s++, i++) {
                  var d, l, u = s < t.length ? (typeof t[s])[0] : "";
                  if (i >= a.length || "o" == (l = (typeof(d = a[i]))[0])) return !f || ("u" == u ? s > n && !o : "" == u != o);
                  if ("u" == l) {
                    if (!f || "u" != u) return !1
                  } else if (f)
                    if (u == l)
                      if (s <= n) {
                        if (d != t[s]) return !1
                      } else {
                        if (o ? d > t[s] : d < t[s]) return !1;
                        d != t[s] && (f = !1)
                      }
                  else if ("s" != u && "n" != u) {
                    if (o || s <= n) return !1;
                    f = !1, s--
                  } else {
                    if (s <= n || l < u != o) return !1;
                    f = !1
                  } else "s" != u && "n" != u && (f = !1, s--)
                }
              }
              var c = [],
                p = c.pop.bind(c);
              for (i = 1; i < t.length; i++) {
                var h = t[i];
                c.push(1 == h ? p() | p() : 2 == h ? p() & p() : h ? r(h, a) : !p())
              }
              return !!p()
            },
            t = (t, a, n) => {
              var o = t[a];
              return (a = Object.keys(o).reduce(((t, a) => !r(n, a) || t && !((r, t) => {
                r = e(r), t = e(t);
                for (var a = 0;;) {
                  if (a >= r.length) return a < t.length && "u" != (typeof t[a])[0];
                  var n = r[a],
                    o = (typeof n)[0];
                  if (a >= t.length) return "u" == o;
                  var i = t[a],
                    s = (typeof i)[0];
                  if (o != s) return "o" == o && "n" == s || "s" == s || "u" == o;
                  if ("o" != o && "u" != o && n != i) return n < i;
                  a++
                }
              })(t, a) ? t : a), 0)) && o[a]
            },
            a = (e => function(r, t, a, n) {
              var o = d.I(r);
              return o && o.then ? o.then(e.bind(e, r, d.S[r], t, a, n)) : e(r, d.S[r], t, a, n)
            })(((e, r, a, n, o) => {
              var i = r && d.o(r, a) && t(r, a, n);
              return i ? (e => (e.loaded = 1, e.get()))(i) : o()
            })),
            n = {},
            o = {
              784: () => a("default", "react", [1, 18, 2, 0], (() => d.e(380).then((() => () => d(380))))),
              410: () => a("default", "react-router-dom", [1, 6, 11, 2], (() => d.e(748).then((() => () => d(748)))))
            },
            i = {
              162: [410],
              403: [784]
            },
            s = {};
          d.f.consumes = (e, r) => {
            d.o(i, e) && i[e].forEach((e => {
              if (d.o(n, e)) return r.push(n[e]);
              if (!s[e]) {
                var t = r => {
                  n[e] = 0, d.m[e] = t => {
                    delete d.c[e], t.exports = r()
                  }
                };
                s[e] = !0;
                var a = r => {
                  delete n[e], d.m[e] = t => {
                    throw delete d.c[e], r
                  }
                };
                try {
                  var i = o[e]();
                  i.then ? r.push(n[e] = i.then(t).catch(a)) : t(i)
                } catch (e) {
                  a(e)
                }
              }
            }))
          }
        })(), (() => {
          if ("undefined" != typeof document) {
            var e = {
              737: 0
            };
            d.f.miniCss = (r, t) => {
              e[r] ? t.push(e[r]) : 0 !== e[r] && {
                162: 1,
                179: 1,
                949: 1
              } [r] && t.push(e[r] = (e => new Promise(((r, t) => {
                var a = d.miniCssF(e),
                  n = d.p + a;
                if (((e, r) => {
                    for (var t = document.getElementsByTagName("link"), a = 0; a < t.length; a++) {
                      var n = (i = t[a]).getAttribute("data-href") || i.getAttribute("href");
                      if ("stylesheet" === i.rel && (n === e || n === r)) return i
                    }
                    var o = document.getElementsByTagName("style");
                    for (a = 0; a < o.length; a++) {
                      var i;
                      if ((n = (i = o[a]).getAttribute("data-href")) === e || n === r) return i
                    }
                  })(a, n)) return r();
                ((e, r, t, a, n) => {
                  var o = document.createElement("link");
                  o.rel = "stylesheet", o.type = "text/css", o.onerror = o.onload = t => {
                    if (o.onerror = o.onload = null, "load" === t.type) a();
                    else {
                      var i = t && ("load" === t.type ? "missing" : t.type),
                        s = t && t.target && t.target.href || r,
                        f = new Error("Loading CSS chunk " + e + " failed.\n(" + s + ")");
                      f.code = "CSS_CHUNK_LOAD_FAILED", f.type = i, f.request = s, o.parentNode && o.parentNode.removeChild(o), n(f)
                    }
                  }, o.href = r, document.head.appendChild(o)
                })(e, n, 0, r, t)
              })))(r).then((() => {
                e[r] = 0
              }), (t => {
                throw delete e[r], t
              })))
            }
          }
        })(), (() => {
          var e = {
            737: 0
          };
          d.f.j = (r, t) => {
            var a = d.o(e, r) ? e[r] : void 0;
            if (0 !== a)
              if (a) t.push(a[2]);
              else if (/^40[37]$/.test(r)) e[r] = 0;
            else {
              var n = new Promise(((t, n) => a = e[r] = [t, n]));
              t.push(a[2] = n);
              var o = d.p + d.u(r),
                i = new Error;
              d.l(o, (t => {
                if (d.o(e, r) && (0 !== (a = e[r]) && (e[r] = void 0), a)) {
                  var n = t && ("load" === t.type ? "missing" : t.type),
                    o = t && t.target && t.target.src;
                  i.message = "Loading chunk " + r + " failed.\n(" + n + ": " + o + ")", i.name = "ChunkLoadError", i.type = n, i.request = o, a[1](i)
                }
              }), "chunk-" + r, r)
            }
          };
          var r = (r, t) => {
              var a, n, o = t[0],
                i = t[1],
                s = t[2],
                f = 0;
              if (o.some((r => 0 !== e[r]))) {
                for (a in i) d.o(i, a) && (d.m[a] = i[a]);
                s && s(d)
              }
              for (r && r(t); f < o.length; f++) n = o[f], d.o(e, n) && e[n] && e[n][0](), e[n] = 0
            },
            t = self.webpackChunk_rockstargames_modules_core_gif_viewer = self.webpackChunk_rockstargames_modules_core_gif_viewer || [];
          t.forEach(r.bind(null, 0)), t.push = r.bind(null, t.push.bind(t))
        })(), d(160), d(464)
      })())
    }
  }
}));