! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "cd18ddc7-68dd-4b53-8d3f-bea3042b7f5f", e._sentryDebugIdIdentifier = "sentry-dbid-cd18ddc7-68dd-4b53-8d3f-bea3042b7f5f")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-gta-trilogy",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register(["@rockstargames/modules-core-videoplayer"], (function(e, t) {
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
        var e, n, a, o, i, d, s = {
            5144: (e, t, r) => {
              (0, r(3454).w)(1)
            },
            3454: (e, t, r) => {
              const n = r(8294).y;
              t.w = function(e) {
                if (e || (e = 1), !r.y.meta || !r.y.meta.url) throw console.error("__system_context__", r.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                r.p = n(r.y.meta.url, e)
              }
            },
            3787: (e, t, r) => {
              r(5144)
            },
            8294: (e, t, r) => {
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
            5819: (e, t, r) => {
              "use strict";
              var n = {
                  "./index": () => Promise.all([r.e(819), r.e(637), r.e(136), r.e(229), r.e(113), r.e(649)]).then((() => () => r(4649)))
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
            5136: e => {
              "use strict";
              e.exports = r
            }
          },
          l = {};

        function f(e) {
          var t = l[e];
          if (void 0 !== t) return t.exports;
          var r = l[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return s[e].call(r.exports, r, r.exports, f), r.loaded = !0, r.exports
        }
        return f.m = s, f.c = l, f.y = t, f.amdO = {}, f.n = e => {
          var t = e && e.__esModule ? () => e.default : () => e;
          return f.d(t, {
            a: t
          }), t
        }, n = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, f.t = function(t, r) {
          if (1 & r && (t = this(t)), 8 & r) return t;
          if ("object" == typeof t && t) {
            if (4 & r && t.__esModule) return t;
            if (16 & r && "function" == typeof t.then) return t
          }
          var a = Object.create(null);
          f.r(a);
          var o = {};
          e = e || [null, n({}), n([]), n(n)];
          for (var i = 2 & r && t;
            "object" == typeof i && !~e.indexOf(i); i = n(i)) Object.getOwnPropertyNames(i).forEach((e => o[e] = () => t[e]));
          return o.default = () => t, f.d(a, o), a
        }, f.d = (e, t) => {
          for (var r in t) f.o(t, r) && !f.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: t[r]
          })
        }, f.f = {}, f.e = e => Promise.all(Object.keys(f.f).reduce(((t, r) => (f.f[r](e, t), t)), [])), f.u = e => "js/" + {
          113: "3826f894e2191cfe600917b41ffa5b3e",
          136: "0a8e686ad30e29c1377c9a548476a06b",
          229: "d241059286208f62e0dc92c22ed340d4",
          282: "fdac3527e1bab2a538707375432dba22",
          322: "057d360a215383f55048b0e886c1462a",
          385: "32feea066e33d323b8b2e35efa16a910",
          508: "f3aa347e68e99a846b42432007d99d14",
          605: "292200044351dfa9f76e477ee09dc239",
          637: "ce2ae5207280511d651c5706c39f71d9",
          649: "8f07eac4ddff22959a6dcb68e674fd11",
          767: "3113b0b456082b910c5768e134032b36",
          819: "31c57da95679994a0fd32e2b72cf198f",
          927: "23c11ac04b5632530eebc56a76c26b64",
          986: "a788cf0546d4552c9ab8075bfcc7d77e"
        } [e] + ".js", f.miniCssF = e => "css/0dca5a2e94bfc1a1e76bbd09c45c386a.css", f.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), f.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), a = {}, o = "@rockstargames/sites-gta-trilogy:", f.l = (e, t, r, n) => {
          if (a[e]) a[e].push(t);
          else {
            var i, d;
            if (void 0 !== r)
              for (var s = document.getElementsByTagName("script"), l = 0; l < s.length; l++) {
                var c = s[l];
                if (c.getAttribute("src") == e || c.getAttribute("data-webpack") == o + r) {
                  i = c;
                  break
                }
              }
            i || (d = !0, (i = document.createElement("script")).charset = "utf-8", i.timeout = 120, f.nc && i.setAttribute("nonce", f.nc), i.setAttribute("data-webpack", o + r), i.src = e), a[e] = [t];
            var u = (t, r) => {
                i.onerror = i.onload = null, clearTimeout(p);
                var n = a[e];
                if (delete a[e], i.parentNode && i.parentNode.removeChild(i), n && n.forEach((e => e(r))), t) return t(r)
              },
              p = setTimeout(u.bind(null, void 0, {
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
        }, f.nmd = e => (e.paths = [], e.children || (e.children = []), e), i = {
          649: [1879]
        }, d = {
          1879: ["default", "./index", 5136]
        }, f.f.remotes = (e, t) => {
          f.o(i, e) && i[e].forEach((e => {
            var r = f.R;
            r || (r = []);
            var n = d[e];
            if (!(r.indexOf(n) >= 0)) {
              if (r.push(n), n.p) return t.push(n.p);
              var a = t => {
                  t || (t = new Error("Container missing")), "string" == typeof t.message && (t.message += '\nwhile loading "' + n[1] + '" from ' + n[2]), f.m[e] = () => {
                    throw t
                  }, n.p = 0
                },
                o = (e, r, o, i, d, s) => {
                  try {
                    var l = e(r, o);
                    if (!l || !l.then) return d(l, i, s);
                    var f = l.then((e => d(e, i)), a);
                    if (!s) return f;
                    t.push(n.p = f)
                  } catch (e) {
                    a(e)
                  }
                },
                i = (e, t, a) => o(t.get, n[1], r, 0, s, a),
                s = t => {
                  n.p = 1, f.m[e] = e => {
                    e.exports = t()
                  }
                };
              o(f, n[2], 0, 0, ((e, t, r) => e ? o(f.I, n[0], 0, e, i, r) : a()), 1)
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
                i = "@rockstargames/sites-gta-trilogy",
                d = (e, t, r, n) => {
                  var a = o[e] = o[e] || {},
                    d = a[t];
                  (!d || !d.loaded && (!n != !d.eager ? n : i > d.from)) && (a[t] = {
                    get: r,
                    from: i,
                    eager: !!n
                  })
                },
                s = [];
              return "default" === r && (d("@rsgweb/locale-tools", "1.0.0", (() => Promise.all([f.e(819), f.e(927), f.e(229), f.e(986)]).then((() => () => f(9986))))), d("@rsgweb/utils", "1.0.0", (() => Promise.all([f.e(819), f.e(637), f.e(229), f.e(113)]).then((() => () => f(3012))))), d("framer-motion", "7.10.3", (() => Promise.all([f.e(385), f.e(229), f.e(322)]).then((() => () => f(8385))))), d("react-router-dom", "6.17.0", (() => Promise.all([f.e(282), f.e(229)]).then((() => () => f(282))))), d("react", "18.2.0", (() => f.e(508).then((() => () => f(508))))), d("usehooks-ts", "2.9.1", (() => Promise.all([f.e(767), f.e(229)]).then((() => () => f(3767))))), (e => {
                var t = e => {
                  return t = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(t));
                  var t
                };
                try {
                  var a = f(5136);
                  if (!a) return;
                  var o = e => e && e.init && e.init(f.S[r], n);
                  if (a.then) return s.push(a.then(o, t));
                  var i = o(a);
                  if (i && i.then) return s.push(i.catch(t))
                } catch (e) {
                  t(e)
                }
              })()), s.length ? e[r] = Promise.all(s).then((() => e[r] = 1)) : e[r] = 1
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
                  var l, f, c = d < r.length ? (typeof r[d])[0] : "";
                  if (i >= n.length || "o" == (f = (typeof(l = n[i]))[0])) return !s || ("u" == c ? d > a && !o : "" == c != o);
                  if ("u" == f) {
                    if (!s || "u" != c) return !1
                  } else if (s)
                    if (c == f)
                      if (d <= a) {
                        if (l != r[d]) return !1
                      } else {
                        if (o ? l > r[d] : l < r[d]) return !1;
                        l != r[d] && (s = !1)
                      }
                  else if ("s" != c && "n" != c) {
                    if (o || d <= a) return !1;
                    s = !1, d--
                  } else {
                    if (d <= a || f < c != o) return !1;
                    s = !1
                  } else "s" != c && "n" != c && (s = !1, d--)
                }
              }
              var u = [],
                p = u.pop.bind(u);
              for (i = 1; i < r.length; i++) {
                var h = r[i];
                u.push(1 == h ? p() | p() : 2 == h ? p() & p() : h ? t(h, n) : !p())
              }
              return !!p()
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
              2229: () => n("default", "react", [1, 18, 2, 0], (() => f.e(508).then((() => () => f(508))))),
              5966: () => n("default", "@rsgweb/utils", [1, "workspace:^"], (() => () => f(3012))),
              9623: () => n("default", "react-router-dom", [1, 6, 11, 2], (() => f.e(282).then((() => () => f(282))))),
              236: () => n("default", "usehooks-ts", [1, 2, 7, 2], (() => f.e(767).then((() => () => f(3767))))),
              1788: () => n("default", "@rsgweb/locale-tools", [1, "workspace:^"], (() => Promise.all([f.e(927), f.e(605)]).then((() => () => f(9986))))),
              3582: () => n("default", "framer-motion", [1, 7, 5, 1], (() => f.e(385).then((() => () => f(8385)))))
            },
            i = {
              113: [5966, 9623],
              229: [2229],
              649: [236, 1788, 3582]
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
          if ("undefined" != typeof document) {
            var e = {
              60: 0
            };
            f.f.miniCss = (t, r) => {
              e[t] ? r.push(e[t]) : 0 !== e[t] && {
                649: 1
              } [t] && r.push(e[t] = (e => new Promise(((t, r) => {
                var n = f.miniCssF(e),
                  a = f.p + n;
                if (((e, t) => {
                    for (var r = document.getElementsByTagName("link"), n = 0; n < r.length; n++) {
                      var a = (i = r[n]).getAttribute("data-href") || i.getAttribute("href");
                      if ("stylesheet" === i.rel && (a === e || a === t)) return i
                    }
                    var o = document.getElementsByTagName("style");
                    for (n = 0; n < o.length; n++) {
                      var i;
                      if ((a = (i = o[n]).getAttribute("data-href")) === e || a === t) return i
                    }
                  })(n, a)) return t();
                ((e, t, r, n, a) => {
                  var o = document.createElement("link");
                  o.rel = "stylesheet", o.type = "text/css", o.onerror = o.onload = r => {
                    if (o.onerror = o.onload = null, "load" === r.type) n();
                    else {
                      var i = r && ("load" === r.type ? "missing" : r.type),
                        d = r && r.target && r.target.href || t,
                        s = new Error("Loading CSS chunk " + e + " failed.\n(" + d + ")");
                      s.code = "CSS_CHUNK_LOAD_FAILED", s.type = i, s.request = d, o.parentNode && o.parentNode.removeChild(o), a(s)
                    }
                  }, o.href = t, document.head.appendChild(o)
                })(e, a, 0, t, r)
              })))(t).then((() => {
                e[t] = 0
              }), (r => {
                throw delete e[t], r
              })))
            }
          }
        })(), (() => {
          var e = {
            60: 0
          };
          f.f.j = (t, r) => {
            var n = f.o(e, t) ? e[t] : void 0;
            if (0 !== n)
              if (n) r.push(n[2]);
              else if (229 != t) {
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
            } else e[t] = 0
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
            r = self.webpackChunk_rockstargames_sites_gta_trilogy = self.webpackChunk_rockstargames_sites_gta_trilogy || [];
          r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
        })(), f(3787), f(5819)
      })())
    }
  }
}));