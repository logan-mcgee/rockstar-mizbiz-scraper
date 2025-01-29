! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "0a56b587-994f-44d5-b161-b53462385e81", e._sentryDebugIdIdentifier = "sentry-dbid-0a56b587-994f-44d5-b161-b53462385e81")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-red-dead-online",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register(["@rockstargames/modules-core-newswire-article", "@rockstargames/modules-core-videoplayer"], (function(e, t) {
  var r = {},
    a = {};
  return Object.defineProperty(r, "__esModule", {
    value: !0
  }), Object.defineProperty(a, "__esModule", {
    value: !0
  }), {
    setters: [function(e) {
      Object.keys(e).forEach((function(t) {
        r[t] = e[t]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(t) {
        a[t] = e[t]
      }))
    }],
    execute: function() {
      e((() => {
        var e, n, o, i, d, s, f = {
            35144: (e, t, r) => {
              (0, r(13454).w)(1)
            },
            13454: (e, t, r) => {
              const a = r(38294).y;
              t.w = function(e) {
                if (e || (e = 1), !r.y.meta || !r.y.meta.url) throw console.error("__system_context__", r.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                r.p = a(r.y.meta.url, e)
              }
            },
            23787: (e, t, r) => {
              r(35144)
            },
            38294: (e, t, r) => {
              t.y = function(e, t) {
                var r = document.createElement("a");
                r.href = e;
                for (var a = "/" === r.pathname[0] ? r.pathname : "/" + r.pathname, n = 0, o = a.length; n !== t && o >= 0;) "/" === a[--o] && n++;
                if (n !== t) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + t + ") is greater than the number of directories (" + n + ") in the URL path " + e);
                var i = a.slice(0, o + 1);
                return r.protocol + "//" + r.host + i
              };
              Number.isInteger
            },
            82021: (e, t, r) => {
              "use strict";
              var a = {
                  "./index": () => Promise.all([r.e(819), r.e(207), r.e(384), r.e(615), r.e(229), r.e(118), r.e(145), r.e(788), r.e(264)]).then((() => () => r(32264)))
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
            66819: e => {
              "use strict";
              e.exports = r
            },
            25136: e => {
              "use strict";
              e.exports = a
            }
          },
          c = {};

        function l(e) {
          var t = c[e];
          if (void 0 !== t) return t.exports;
          var r = c[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return f[e].call(r.exports, r, r.exports, l), r.loaded = !0, r.exports
        }
        return l.m = f, l.c = c, l.y = t, l.amdO = {}, l.n = e => {
          var t = e && e.__esModule ? () => e.default : () => e;
          return l.d(t, {
            a: t
          }), t
        }, n = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, l.t = function(t, r) {
          if (1 & r && (t = this(t)), 8 & r) return t;
          if ("object" == typeof t && t) {
            if (4 & r && t.__esModule) return t;
            if (16 & r && "function" == typeof t.then) return t
          }
          var a = Object.create(null);
          l.r(a);
          var o = {};
          e = e || [null, n({}), n([]), n(n)];
          for (var i = 2 & r && t;
            "object" == typeof i && !~e.indexOf(i); i = n(i)) Object.getOwnPropertyNames(i).forEach((e => o[e] = () => t[e]));
          return o.default = () => t, l.d(a, o), a
        }, l.d = (e, t) => {
          for (var r in t) l.o(t, r) && !l.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: t[r]
          })
        }, l.f = {}, l.e = e => Promise.all(Object.keys(l.f).reduce(((t, r) => (l.f[r](e, t), t)), [])), l.u = e => "js/" + {
          118: "b71d3f8699149d87e3ad530fd7167e81",
          145: "ba95993aa41614f35cc7b63ca6c7676e",
          190: "8328d89af243c8542ff800c7456e465a",
          207: "262cb3ec84667aa8a3e6b7e77130b040",
          229: "deb013d1230f14f2fe457a0a38bc34b9",
          264: "b9f1914f3eab0bd3d3db7e6993ba7c2c",
          282: "a2ee8d75d262597aa43e550fc96e177f",
          384: "d1fc60d782496b9f797e73b518803446",
          508: "2da8b021e518ea2a8bc25057f8116e4d",
          597: "c7d161f05d0c3b601a8ce87ec9ee3125",
          605: "5fd61bcb68d2775175a88b13c5da25e5",
          615: "1e414b52892f5b8a9606fafc518f0ee1",
          712: "ee52fc95e650c1c0566b9a622857cb62",
          788: "65b5d670fa5b6a92e84d2c91ba23b96d",
          796: "f46f7c3b59fc3121bcf335dac0f3c186",
          809: "7be63a6d77d51ed5bbb1c5b4c666401f",
          819: "ba1230a2da6f05a79924ca49a57acdef",
          927: "346d5fa15b180f05a1f75d35d8561d83",
          978: "32e1e36c87d787ff61165e3163f39c60",
          986: "a496843ea9107eda1b2398036c731d4e"
        } [e] + ".js", l.miniCssF = e => "css/" + {
          264: "f53a63af6900192669bb2c7ff1d00d96",
          597: "266e6305d550bc71a82a072d53678cd9",
          978: "266e6305d550bc71a82a072d53678cd9"
        } [e] + ".css", l.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), l.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), o = {}, i = "@rockstargames/sites-red-dead-online:", l.l = (e, t, r, a) => {
          if (o[e]) o[e].push(t);
          else {
            var n, d;
            if (void 0 !== r)
              for (var s = document.getElementsByTagName("script"), f = 0; f < s.length; f++) {
                var c = s[f];
                if (c.getAttribute("src") == e || c.getAttribute("data-webpack") == i + r) {
                  n = c;
                  break
                }
              }
            n || (d = !0, (n = document.createElement("script")).charset = "utf-8", n.timeout = 120, l.nc && n.setAttribute("nonce", l.nc), n.setAttribute("data-webpack", i + r), n.src = e), o[e] = [t];
            var u = (t, r) => {
                n.onerror = n.onload = null, clearTimeout(p);
                var a = o[e];
                if (delete o[e], n.parentNode && n.parentNode.removeChild(n), a && a.forEach((e => e(r))), t) return t(r)
              },
              p = setTimeout(u.bind(null, void 0, {
                type: "timeout",
                target: n
              }), 12e4);
            n.onerror = u.bind(null, n.onerror), n.onload = u.bind(null, n.onload), d && document.head.appendChild(n)
          }
        }, l.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, l.nmd = e => (e.paths = [], e.children || (e.children = []), e), d = {
          264: [9566, 31879]
        }, s = {
          9566: ["default", "./index", 66819],
          31879: ["default", "./index", 25136]
        }, l.f.remotes = (e, t) => {
          l.o(d, e) && d[e].forEach((e => {
            var r = l.R;
            r || (r = []);
            var a = s[e];
            if (!(r.indexOf(a) >= 0)) {
              if (r.push(a), a.p) return t.push(a.p);
              var n = t => {
                  t || (t = new Error("Container missing")), "string" == typeof t.message && (t.message += '\nwhile loading "' + a[1] + '" from ' + a[2]), l.m[e] = () => {
                    throw t
                  }, a.p = 0
                },
                o = (e, r, o, i, d, s) => {
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
                i = (e, t, n) => o(t.get, a[1], r, 0, d, n),
                d = t => {
                  a.p = 1, l.m[e] = e => {
                    e.exports = t()
                  }
                };
              o(l, a[2], 0, 0, ((e, t, r) => e ? o(l.I, a[0], 0, e, i, r) : n()), 1)
            }
          }))
        }, (() => {
          l.S = {};
          var e = {},
            t = {};
          l.I = (r, a) => {
            a || (a = []);
            var n = t[r];
            if (n || (n = t[r] = {}), !(a.indexOf(n) >= 0)) {
              if (a.push(n), e[r]) return e[r];
              l.o(l.S, r) || (l.S[r] = {});
              var o = l.S[r],
                i = "@rockstargames/sites-red-dead-online",
                d = (e, t, r, a) => {
                  var n = o[e] = o[e] || {},
                    d = n[t];
                  (!d || !d.loaded && (!a != !d.eager ? a : i > d.from)) && (n[t] = {
                    get: r,
                    from: i,
                    eager: !!a
                  })
                },
                s = e => {
                  var t = e => {
                    return t = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(t));
                    var t
                  };
                  try {
                    var n = l(e);
                    if (!n) return;
                    var o = e => e && e.init && e.init(l.S[r], a);
                    if (n.then) return f.push(n.then(o, t));
                    var i = o(n);
                    if (i && i.then) return f.push(i.catch(t))
                  } catch (e) {
                    t(e)
                  }
                },
                f = [];
              return "default" === r && (d("@rsgweb/locale-tools", "1.0.0", (() => Promise.all([l.e(819), l.e(927), l.e(229), l.e(986)]).then((() => () => l(89986))))), d("@rsgweb/modules-core-feedback", "1.0.0", (() => Promise.all([l.e(819), l.e(207), l.e(384), l.e(229), l.e(118), l.e(788), l.e(978)]).then((() => () => l(95978))))), d("@rsgweb/utils", "1.0.0", (() => Promise.all([l.e(819), l.e(207), l.e(229), l.e(118)]).then((() => () => l(75811))))), d("hammerjs", "2.0.8", (() => l.e(712).then((() => () => l(97712))))), d("prop-types", "15.8.1", (() => l.e(796).then((() => () => l(5796))))), d("react-focus-lock", "2.9.6", (() => Promise.all([l.e(229), l.e(145), l.e(190)]).then((() => () => l(25809))))), d("react-router-dom", "6.17.0", (() => Promise.all([l.e(282), l.e(229)]).then((() => () => l(70282))))), d("react", "18.2.0", (() => l.e(508).then((() => () => l(50508))))), s(66819), s(25136)), f.length ? e[r] = Promise.all(f).then((() => e[r] = 1)) : e[r] = 1
            }
          }
        })(), (() => {
          var e;
          l.g.importScripts && (e = l.g.location + "");
          var t = l.g.document;
          if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
            var r = t.getElementsByTagName("script");
            if (r.length)
              for (var a = r.length - 1; a > -1 && (!e || !/^http(s?):/.test(e));) e = r[a--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), l.p = e
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
                p = u.pop.bind(u);
              for (i = 1; i < r.length; i++) {
                var h = r[i];
                u.push(1 == h ? p() | p() : 2 == h ? p() & p() : h ? t(h, a) : !p())
              }
              return !!p()
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
              var o = l.I(t);
              return o && o.then ? o.then(e.bind(e, t, l.S[t], r, a, n)) : e(t, l.S[t], r, a, n)
            })(((e, t, a, n, o) => {
              var i = t && l.o(t, a) && r(t, a, n);
              return i ? (e => (e.loaded = 1, e.get()))(i) : o()
            })),
            n = {},
            o = {
              62229: () => a("default", "react", [1, 18, 2, 0], (() => l.e(508).then((() => () => l(50508))))),
              9623: () => a("default", "react-router-dom", [1, 6, 11, 2], (() => l.e(282).then((() => () => l(70282))))),
              95966: () => a("default", "@rsgweb/utils", [1, "workspace:^"], (() => () => l(75811))),
              57145: () => a("default", "prop-types", [1, 15, 8, 1], (() => l.e(796).then((() => () => l(5796))))),
              81788: () => a("default", "@rsgweb/locale-tools", [1, "workspace:^"], (() => Promise.all([l.e(927), l.e(605)]).then((() => () => l(89986))))),
              994: () => a("default", "@rsgweb/modules-core-feedback", [1, "workspace:^"], (() => l.e(597).then((() => () => l(95978))))),
              4848: () => a("default", "hammerjs", [1, 2, 0, 8], (() => l.e(712).then((() => () => l(97712))))),
              95945: () => a("default", "react-focus-lock", [1, 2, 9, 6], (() => l.e(809).then((() => () => l(25809)))))
            },
            i = {
              118: [9623, 95966],
              145: [57145],
              229: [62229],
              264: [994, 4848, 95945],
              788: [81788]
            },
            d = {};
          l.f.consumes = (e, t) => {
            l.o(i, e) && i[e].forEach((e => {
              if (l.o(n, e)) return t.push(n[e]);
              if (!d[e]) {
                var r = t => {
                  n[e] = 0, l.m[e] = r => {
                    delete l.c[e], r.exports = t()
                  }
                };
                d[e] = !0;
                var a = t => {
                  delete n[e], l.m[e] = r => {
                    throw delete l.c[e], t
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
          if ("undefined" != typeof document) {
            var e = {
              129: 0
            };
            l.f.miniCss = (t, r) => {
              e[t] ? r.push(e[t]) : 0 !== e[t] && {
                264: 1,
                597: 1,
                978: 1
              } [t] && r.push(e[t] = (e => new Promise(((t, r) => {
                var a = l.miniCssF(e),
                  n = l.p + a;
                if (((e, t) => {
                    for (var r = document.getElementsByTagName("link"), a = 0; a < r.length; a++) {
                      var n = (i = r[a]).getAttribute("data-href") || i.getAttribute("href");
                      if ("stylesheet" === i.rel && (n === e || n === t)) return i
                    }
                    var o = document.getElementsByTagName("style");
                    for (a = 0; a < o.length; a++) {
                      var i;
                      if ((n = (i = o[a]).getAttribute("data-href")) === e || n === t) return i
                    }
                  })(a, n)) return t();
                ((e, t, r, a, n) => {
                  var o = document.createElement("link");
                  o.rel = "stylesheet", o.type = "text/css", o.onerror = o.onload = r => {
                    if (o.onerror = o.onload = null, "load" === r.type) a();
                    else {
                      var i = r && ("load" === r.type ? "missing" : r.type),
                        d = r && r.target && r.target.href || t,
                        s = new Error("Loading CSS chunk " + e + " failed.\n(" + d + ")");
                      s.code = "CSS_CHUNK_LOAD_FAILED", s.type = i, s.request = d, o.parentNode && o.parentNode.removeChild(o), n(s)
                    }
                  }, o.href = t, document.head.appendChild(o)
                })(e, n, 0, t, r)
              })))(t).then((() => {
                e[t] = 0
              }), (r => {
                throw delete e[t], r
              })))
            }
          }
        })(), (() => {
          var e = {
            129: 0
          };
          l.f.j = (t, r) => {
            var a = l.o(e, t) ? e[t] : void 0;
            if (0 !== a)
              if (a) r.push(a[2]);
              else if (/^(145|229|788)$/.test(t)) e[t] = 0;
            else {
              var n = new Promise(((r, n) => a = e[t] = [r, n]));
              r.push(a[2] = n);
              var o = l.p + l.u(t),
                i = new Error;
              l.l(o, (r => {
                if (l.o(e, t) && (0 !== (a = e[t]) && (e[t] = void 0), a)) {
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
                s = 0;
              if (o.some((t => 0 !== e[t]))) {
                for (a in i) l.o(i, a) && (l.m[a] = i[a]);
                d && d(l)
              }
              for (t && t(r); s < o.length; s++) n = o[s], l.o(e, n) && e[n] && e[n][0](), e[n] = 0
            },
            r = self.webpackChunk_rockstargames_sites_red_dead_online = self.webpackChunk_rockstargames_sites_red_dead_online || [];
          r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
        })(), l(23787), l(82021)
      })())
    }
  }
}));