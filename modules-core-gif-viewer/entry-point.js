! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      r = (new Error).stack;
    r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "46f2b603-b7e7-440c-9665-a774a3c0de85", e._sentryDebugIdIdentifier = "sentry-dbid-46f2b603-b7e7-440c-9665-a774a3c0de85")
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
}, System.register([], (function(e, r) {
  return {
    execute: function() {
      e((() => {
        var e, t, a, n, o, i, d = {
            5144: (e, r, t) => {
              (0, t(3454).w)(1)
            },
            3454: (e, r, t) => {
              const a = t(8294).y;
              r.w = function(e) {
                if (e || (e = 1), !t.y.meta || !t.y.meta.url) throw console.error("__system_context__", t.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                t.p = a(t.y.meta.url, e)
              }
            },
            3787: (e, r, t) => {
              t(5144)
            },
            8294: (e, r, t) => {
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
            4848: (e, r, t) => {
              "use strict";
              var a = {
                  "./index": () => Promise.all([t.e(229), t.e(966), t.e(862)]).then((() => () => t(6862))),
                  "./lazy": () => Promise.all([t.e(229), t.e(966), t.e(623), t.e(673)]).then((() => () => t(6673))),
                  "./tina": () => Promise.all([t.e(829), t.e(629), t.e(229), t.e(966), t.e(799)]).then((() => () => t(1799))),
                  "./tinaBlockTemplates": () => Promise.all([t.e(829), t.e(629), t.e(229), t.e(966), t.e(799)]).then((() => () => t(1799)))
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
            }
          },
          f = {};

        function s(e) {
          var r = f[e];
          if (void 0 !== r) return r.exports;
          var t = f[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return d[e].call(t.exports, t, t.exports, s), t.loaded = !0, t.exports
        }
        return s.m = d, s.c = f, s.y = r, s.amdO = {}, s.n = e => {
          var r = e && e.__esModule ? () => e.default : () => e;
          return s.d(r, {
            a: r
          }), r
        }, t = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, s.t = function(r, a) {
          if (1 & a && (r = this(r)), 8 & a) return r;
          if ("object" == typeof r && r) {
            if (4 & a && r.__esModule) return r;
            if (16 & a && "function" == typeof r.then) return r
          }
          var n = Object.create(null);
          s.r(n);
          var o = {};
          e = e || [null, t({}), t([]), t(t)];
          for (var i = 2 & a && r;
            "object" == typeof i && !~e.indexOf(i); i = t(i)) Object.getOwnPropertyNames(i).forEach((e => o[e] = () => r[e]));
          return o.default = () => r, s.d(n, o), n
        }, s.d = (e, r) => {
          for (var t in r) s.o(r, t) && !s.o(e, t) && Object.defineProperty(e, t, {
            enumerable: !0,
            get: r[t]
          })
        }, s.f = {}, s.e = e => Promise.all(Object.keys(s.f).reduce(((r, t) => (s.f[t](e, r), r)), [])), s.u = e => "js/" + {
          96: "a17a13c89f2c8381eaaeb0259e2421a9",
          229: "7563e3f8cbdce0491c2cda84ae96f3f5",
          282: "ecc2ed3b614c74ef6d631d56e693d876",
          508: "6938d931c243292909c1018791de1c84",
          623: "de1eeb8cc1a9b94dff7042c1a8089b02",
          629: "67453dd448b34b32cae2c5d69db24e17",
          637: "b06ab96f8a01efcc7de0309fa7370b8c",
          673: "8e749d450172a95a37b36a638e7fa580",
          799: "8827cf779c253f387ec5a54bc1bb0ee2",
          829: "4b3df6cf8151c8ecce337b115a257f2d",
          839: "f7e9be5d31ef44df0acc207e9f648bd4",
          862: "355be9702f9a356bb9a9290da9442ead",
          966: "f9c2a19de6e108a079574c9b1f5bd6c2"
        } [e] + ".js", s.miniCssF = e => "css/" + {
          673: "0ef079019c8839661a10e47732755615",
          799: "b5328e2f95f5b178239a08711e5d52f6",
          862: "736d891058363b24027e39e460789d5f"
        } [e] + ".css", s.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), s.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r), a = {}, n = "@rockstargames/modules-core-gif-viewer:", s.l = (e, r, t, o) => {
          if (a[e]) a[e].push(r);
          else {
            var i, d;
            if (void 0 !== t)
              for (var f = document.getElementsByTagName("script"), l = 0; l < f.length; l++) {
                var u = f[l];
                if (u.getAttribute("src") == e || u.getAttribute("data-webpack") == n + t) {
                  i = u;
                  break
                }
              }
            i || (d = !0, (i = document.createElement("script")).charset = "utf-8", i.timeout = 120, s.nc && i.setAttribute("nonce", s.nc), i.setAttribute("data-webpack", n + t), i.src = e), a[e] = [r];
            var c = (r, t) => {
                i.onerror = i.onload = null, clearTimeout(p);
                var n = a[e];
                if (delete a[e], i.parentNode && i.parentNode.removeChild(i), n && n.forEach((e => e(t))), r) return r(t)
              },
              p = setTimeout(c.bind(null, void 0, {
                type: "timeout",
                target: i
              }), 12e4);
            i.onerror = c.bind(null, i.onerror), i.onload = c.bind(null, i.onload), d && document.head.appendChild(i)
          }
        }, s.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, s.nmd = e => (e.paths = [], e.children || (e.children = []), e), o = {}, i = {}, s.f.remotes = (e, r) => {
          s.o(o, e) && o[e].forEach((e => {
            var t = s.R;
            t || (t = []);
            var a = i[e];
            if (!(t.indexOf(a) >= 0)) {
              if (t.push(a), a.p) return r.push(a.p);
              var n = r => {
                  r || (r = new Error("Container missing")), "string" == typeof r.message && (r.message += '\nwhile loading "' + a[1] + '" from ' + a[2]), s.m[e] = () => {
                    throw r
                  }, a.p = 0
                },
                o = (e, t, o, i, d, f) => {
                  try {
                    var s = e(t, o);
                    if (!s || !s.then) return d(s, i, f);
                    var l = s.then((e => d(e, i)), n);
                    if (!f) return l;
                    r.push(a.p = l)
                  } catch (e) {
                    n(e)
                  }
                },
                d = (e, r, n) => o(r.get, a[1], t, 0, f, n),
                f = r => {
                  a.p = 1, s.m[e] = e => {
                    e.exports = r()
                  }
                };
              o(s, a[2], 0, 0, ((e, r, t) => e ? o(s.I, a[0], 0, e, d, t) : n()), 1)
            }
          }))
        }, (() => {
          s.S = {};
          var e = {},
            r = {};
          s.I = (t, a) => {
            a || (a = []);
            var n = r[t];
            if (n || (n = r[t] = {}), !(a.indexOf(n) >= 0)) {
              if (a.push(n), e[t]) return e[t];
              s.o(s.S, t) || (s.S[t] = {});
              var o = s.S[t],
                i = "@rockstargames/modules-core-gif-viewer",
                d = (e, r, t, a) => {
                  var n = o[e] = o[e] || {},
                    d = n[r];
                  (!d || !d.loaded && (!a != !d.eager ? a : i > d.from)) && (n[r] = {
                    get: t,
                    from: i,
                    eager: !!a
                  })
                },
                f = [];
              return "default" === t && (d("@rsgweb/utils", "1.0.0", (() => Promise.all([s.e(829), s.e(637), s.e(229), s.e(966), s.e(623), s.e(839), s.e(96)]).then((() => () => s(839))))), d("react-router-dom", "6.17.0", (() => Promise.all([s.e(282), s.e(229)]).then((() => () => s(282))))), d("react", "18.2.0", (() => s.e(508).then((() => () => s(508)))))), e[t] = f.length ? Promise.all(f).then((() => e[t] = 1)) : 1
            }
          }
        })(), (() => {
          var e;
          s.g.importScripts && (e = s.g.location + "");
          var r = s.g.document;
          if (!e && r && (r.currentScript && (e = r.currentScript.src), !e)) {
            var t = r.getElementsByTagName("script");
            if (t.length)
              for (var a = t.length - 1; a > -1 && (!e || !/^http(s?):/.test(e));) e = t[a--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), s.p = e
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
                for (var i = 0, d = 1, f = !0;; d++, i++) {
                  var s, l, u = d < t.length ? (typeof t[d])[0] : "";
                  if (i >= a.length || "o" == (l = (typeof(s = a[i]))[0])) return !f || ("u" == u ? d > n && !o : "" == u != o);
                  if ("u" == l) {
                    if (!f || "u" != u) return !1
                  } else if (f)
                    if (u == l)
                      if (d <= n) {
                        if (s != t[d]) return !1
                      } else {
                        if (o ? s > t[d] : s < t[d]) return !1;
                        s != t[d] && (f = !1)
                      }
                  else if ("s" != u && "n" != u) {
                    if (o || d <= n) return !1;
                    f = !1, d--
                  } else {
                    if (d <= n || l < u != o) return !1;
                    f = !1
                  } else "s" != u && "n" != u && (f = !1, d--)
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
                    d = (typeof i)[0];
                  if (o != d) return "o" == o && "n" == d || "s" == d || "u" == o;
                  if ("o" != o && "u" != o && n != i) return n < i;
                  a++
                }
              })(t, a) ? t : a), 0)) && o[a]
            },
            a = (e => function(r, t, a, n) {
              var o = s.I(r);
              return o && o.then ? o.then(e.bind(e, r, s.S[r], t, a, n)) : e(r, s.S[r], t, a, n)
            })(((e, r, a, n, o) => {
              var i = r && s.o(r, a) && t(r, a, n);
              return i ? (e => (e.loaded = 1, e.get()))(i) : o()
            })),
            n = {},
            o = {
              2229: () => a("default", "react", [1, 18, 2, 0], (() => s.e(508).then((() => () => s(508))))),
              5966: () => a("default", "@rsgweb/utils", [1, "workspace:^"], (() => Promise.all([s.e(829), s.e(637), s.e(623), s.e(839)]).then((() => () => s(839))))),
              9623: () => a("default", "react-router-dom", [1, 6, 11, 2], (() => s.e(282).then((() => () => s(282)))))
            },
            i = {
              229: [2229],
              623: [9623],
              966: [5966]
            },
            d = {};
          s.f.consumes = (e, r) => {
            s.o(i, e) && i[e].forEach((e => {
              if (s.o(n, e)) return r.push(n[e]);
              if (!d[e]) {
                var t = r => {
                  n[e] = 0, s.m[e] = t => {
                    delete s.c[e], t.exports = r()
                  }
                };
                d[e] = !0;
                var a = r => {
                  delete n[e], s.m[e] = t => {
                    throw delete s.c[e], r
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
            s.f.miniCss = (r, t) => {
              e[r] ? t.push(e[r]) : 0 !== e[r] && {
                673: 1,
                799: 1,
                862: 1
              } [r] && t.push(e[r] = (e => new Promise(((r, t) => {
                var a = s.miniCssF(e),
                  n = s.p + a;
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
                        d = t && t.target && t.target.href || r,
                        f = new Error("Loading CSS chunk " + e + " failed.\n(" + d + ")");
                      f.code = "CSS_CHUNK_LOAD_FAILED", f.type = i, f.request = d, o.parentNode && o.parentNode.removeChild(o), n(f)
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
          s.f.j = (r, t) => {
            var a = s.o(e, r) ? e[r] : void 0;
            if (0 !== a)
              if (a) t.push(a[2]);
              else if (/^(229|623|966)$/.test(r)) e[r] = 0;
            else {
              var n = new Promise(((t, n) => a = e[r] = [t, n]));
              t.push(a[2] = n);
              var o = s.p + s.u(r),
                i = new Error;
              s.l(o, (t => {
                if (s.o(e, r) && (0 !== (a = e[r]) && (e[r] = void 0), a)) {
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
                d = t[2],
                f = 0;
              if (o.some((r => 0 !== e[r]))) {
                for (a in i) s.o(i, a) && (s.m[a] = i[a]);
                d && d(s)
              }
              for (r && r(t); f < o.length; f++) n = o[f], s.o(e, n) && e[n] && e[n][0](), e[n] = 0
            },
            t = self.webpackChunk_rockstargames_modules_core_gif_viewer = self.webpackChunk_rockstargames_modules_core_gif_viewer || [];
          t.forEach(r.bind(null, 0)), t.push = r.bind(null, t.push.bind(t))
        })(), s(3787), s(4848)
      })())
    }
  }
}));