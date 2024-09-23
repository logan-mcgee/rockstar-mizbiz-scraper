! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "414dc4aa-54da-44aa-b892-0677fd929fd9", e._sentryDebugIdIdentifier = "sentry-dbid-414dc4aa-54da-44aa-b892-0677fd929fd9")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-gta",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register(["@rockstargames/graph-client", "@rockstargames/modules-core-sc-user", "@rockstargames/sites-rockstargames", "@rockstargames/utils"], (function(e, t) {
  var r = {},
    a = {},
    o = {},
    n = {};
  return Object.defineProperty(r, "__esModule", {
    value: !0
  }), Object.defineProperty(a, "__esModule", {
    value: !0
  }), Object.defineProperty(o, "__esModule", {
    value: !0
  }), Object.defineProperty(n, "__esModule", {
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
    }, function(e) {
      Object.keys(e).forEach((function(t) {
        o[t] = e[t]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(t) {
        n[t] = e[t]
      }))
    }],
    execute: function() {
      e((() => {
        var e, s, i, d, f = {
            6539: (e, t, r) => {
              (0, r(3403).w)(1)
            },
            3403: (e, t, r) => {
              const a = r(5659).y;
              t.w = function(e) {
                if (e || (e = 1), !r.y.meta || !r.y.meta.url) throw console.error("__system_context__", r.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                r.p = a(r.y.meta.url, e)
              }
            },
            2160: (e, t, r) => {
              r(6539)
            },
            5659: (e, t, r) => {
              t.y = function(e, t) {
                var r = document.createElement("a");
                r.href = e;
                for (var a = "/" === r.pathname[0] ? r.pathname : "/" + r.pathname, o = 0, n = a.length; o !== t && n >= 0;) "/" === a[--n] && o++;
                if (o !== t) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + t + ") is greater than the number of directories (" + o + ") in the URL path " + e);
                var s = a.slice(0, n + 1);
                return r.protocol + "//" + r.host + s
              };
              Number.isInteger
            },
            3588: (e, t, r) => {
              "use strict";
              var a = {
                  "./destination": () => Promise.all([r.e(403), r.e(521), r.e(325)]).then((() => () => r(6817))),
                  "./index": () => Promise.all([r.e(434), r.e(403), r.e(521), r.e(932)]).then((() => () => r(796)))
                },
                o = (e, t) => (r.R = t, t = r.o(a, e) ? a[e]() : Promise.resolve().then((() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                })), r.R = void 0, t),
                n = (e, t) => {
                  if (r.S) {
                    var a = "default",
                      o = r.S[a];
                    if (o && o !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return r.S[a] = e, r.I(a, t)
                  }
                };
              r.d(t, {
                get: () => o,
                init: () => n
              })
            },
            1024: e => {
              "use strict";
              e.exports = r
            },
            404: e => {
              "use strict";
              e.exports = a
            },
            3325: e => {
              "use strict";
              e.exports = o
            },
            2969: e => {
              "use strict";
              e.exports = n
            }
          },
          l = {};

        function c(e) {
          var t = l[e];
          if (void 0 !== t) return t.exports;
          var r = l[e] = {
            exports: {}
          };
          return f[e](r, r.exports, c), r.exports
        }
        return c.m = f, c.c = l, c.y = t, c.n = e => {
          var t = e && e.__esModule ? () => e.default : () => e;
          return c.d(t, {
            a: t
          }), t
        }, c.d = (e, t) => {
          for (var r in t) c.o(t, r) && !c.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: t[r]
          })
        }, c.f = {}, c.e = e => Promise.all(Object.keys(c.f).reduce(((t, r) => (c.f[r](e, t), t)), [])), c.u = e => "js/" + {
          2: "5219b8e3ead17d8da9442583763e2a58",
          8: "dfaa42e236dd099a54df6d9139765366",
          66: "2357d996f982ada1a54ce19a1a14e388",
          105: "0c7ca2b5122787c361c80ef21e231723",
          109: "e5889ee5b7ffead8d64ba5213a1ba075",
          143: "dbc8c320d4f1b62a41d449bfd7bc4287",
          149: "0722ecabb04c192d7649272f861f6b7c",
          155: "83578f7daaadd9cc5c949632200982db",
          261: "c1f613f0c1b12422c0225b4695d13e5b",
          325: "c949ac3f1e4f186c8f2f84347150978e",
          380: "c64f747ebb4870a99d05e451924a278d",
          396: "5ffdb82f9757deb1e8ee673508cb96bd",
          403: "1210e88c990140a4820cfba96a0a6416",
          410: "10d0f3a78b425357258367f6da813e28",
          434: "9c89cf62510590fd74270dd67572a970",
          451: "87523cc01b0ecbc61b1751d5a7312f3e",
          516: "439a0d6cd11fe1678ee6dc76823669d3",
          521: "8d20482511d41b006a95e019f85171e4",
          524: "ddf8ec72f057499a0f160e78660b2fc5",
          621: "eb7c37ae71d06853f50a8585a6b20509",
          776: "1bdad206183a3f1171bd4c0fe8b02f2c",
          839: "d169bcb75d4da5ec96b272cd14e69ee5",
          868: "bc1feb8db7c30d2301f3ac5300d59e84",
          932: "7f0cfaa714776e4ea1e1e311a423de15",
          977: "e3372b072fdd58ed39d443819c6e9479"
        } [e] + ".js", c.miniCssF = e => "css/" + {
          325: "037bb6f23e3bd773c4e74b67e4ff04fc",
          932: "42bd0f622982a88925ddb3a1e9a9f952"
        } [e] + ".css", c.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), c.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), e = {}, s = "@rockstargames/sites-gta:", c.l = (t, r, a, o) => {
          if (e[t]) e[t].push(r);
          else {
            var n, i;
            if (void 0 !== a)
              for (var d = document.getElementsByTagName("script"), f = 0; f < d.length; f++) {
                var l = d[f];
                if (l.getAttribute("src") == t || l.getAttribute("data-webpack") == s + a) {
                  n = l;
                  break
                }
              }
            n || (i = !0, (n = document.createElement("script")).charset = "utf-8", n.timeout = 120, c.nc && n.setAttribute("nonce", c.nc), n.setAttribute("data-webpack", s + a), n.src = t), e[t] = [r];
            var u = (r, a) => {
                n.onerror = n.onload = null, clearTimeout(p);
                var o = e[t];
                if (delete e[t], n.parentNode && n.parentNode.removeChild(n), o && o.forEach((e => e(a))), r) return r(a)
              },
              p = setTimeout(u.bind(null, void 0, {
                type: "timeout",
                target: n
              }), 12e4);
            n.onerror = u.bind(null, n.onerror), n.onload = u.bind(null, n.onload), i && document.head.appendChild(n)
          }
        }, c.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, i = {
          325: [6524],
          396: [396],
          521: [207, 2756, 8407]
        }, d = {
          207: ["default", "./index", 404],
          396: ["default", "./hooks", 2969],
          2756: ["default", "./index", 2969],
          6524: ["default", "./components", 3325],
          8407: ["default", "./index", 1024]
        }, c.f.remotes = (e, t) => {
          c.o(i, e) && i[e].forEach((e => {
            var r = c.R;
            r || (r = []);
            var a = d[e];
            if (!(r.indexOf(a) >= 0)) {
              if (r.push(a), a.p) return t.push(a.p);
              var o = t => {
                  t || (t = new Error("Container missing")), "string" == typeof t.message && (t.message += '\nwhile loading "' + a[1] + '" from ' + a[2]), c.m[e] = () => {
                    throw t
                  }, a.p = 0
                },
                n = (e, r, n, s, i, d) => {
                  try {
                    var f = e(r, n);
                    if (!f || !f.then) return i(f, s, d);
                    var l = f.then((e => i(e, s)), o);
                    if (!d) return l;
                    t.push(a.p = l)
                  } catch (e) {
                    o(e)
                  }
                },
                s = (e, t, o) => n(t.get, a[1], r, 0, i, o),
                i = t => {
                  a.p = 1, c.m[e] = e => {
                    e.exports = t()
                  }
                };
              n(c, a[2], 0, 0, ((e, t, r) => e ? n(c.I, a[0], 0, e, s, r) : o()), 1)
            }
          }))
        }, (() => {
          c.S = {};
          var e = {},
            t = {};
          c.I = (r, a) => {
            a || (a = []);
            var o = t[r];
            if (o || (o = t[r] = {}), !(a.indexOf(o) >= 0)) {
              if (a.push(o), e[r]) return e[r];
              c.o(c.S, r) || (c.S[r] = {});
              var n = c.S[r],
                s = "@rockstargames/sites-gta",
                i = (e, t, r, a) => {
                  var o = n[e] = n[e] || {},
                    i = o[t];
                  (!i || !i.loaded && (!a != !i.eager ? a : s > i.from)) && (o[t] = {
                    get: r,
                    from: s,
                    eager: !!a
                  })
                },
                d = e => {
                  var t = e => {
                    return t = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(t));
                    var t
                  };
                  try {
                    var o = c(e);
                    if (!o) return;
                    var n = e => e && e.init && e.init(c.S[r], a);
                    if (o.then) return f.push(o.then(n, t));
                    var s = n(o);
                    if (s && s.then) return f.push(s.catch(t))
                  } catch (e) {
                    t(e)
                  }
                },
                f = [];
              return "default" === r && (i("@rockstargames/locale-tools", "1.0.0", (() => Promise.all([c.e(66), c.e(403), c.e(396), c.e(143)]).then((() => () => c(4143))))), i("@rockstargames/router", "1.0.0", (() => Promise.all([c.e(403), c.e(410), c.e(621)]).then((() => () => c(3002))))), i("gsap", "0.0.0", (() => c.e(149).then((() => () => c(3149))))), i("prop-types", "15.8.1", (() => c.e(977).then((() => () => c(7977))))), i("react-focus-lock", "2.9.6", (() => Promise.all([c.e(155), c.e(109), c.e(403), c.e(516)]).then((() => () => c(109))))), i("react-remove-scroll", "2.5.7", (() => Promise.all([c.e(155), c.e(403), c.e(868)]).then((() => () => c(6868))))), i("react-router-dom", "6.17.0", (() => Promise.all([c.e(261), c.e(105), c.e(8), c.e(403)]).then((() => () => c(6008))))), i("react-router-dom", "6.17.0", (() => Promise.all([c.e(261), c.e(105), c.e(451), c.e(403)]).then((() => () => c(4451))))), i("react-router-dom", "6.17.0", (() => Promise.all([c.e(261), c.e(776), c.e(403)]).then((() => () => c(2776))))), i("react", "18.2.0", (() => c.e(380).then((() => () => c(3380))))), d(1024), d(404), d(2969), d(3325)), f.length ? e[r] = Promise.all(f).then((() => e[r] = 1)) : e[r] = 1
            }
          }
        })(), (() => {
          var e;
          c.g.importScripts && (e = c.g.location + "");
          var t = c.g.document;
          if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
            var r = t.getElementsByTagName("script");
            if (r.length)
              for (var a = r.length - 1; a > -1 && (!e || !/^http(s?):/.test(e));) e = r[a--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), c.p = e
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
                var o = r[0],
                  n = o < 0;
                n && (o = -o - 1);
                for (var s = 0, i = 1, d = !0;; i++, s++) {
                  var f, l, c = i < r.length ? (typeof r[i])[0] : "";
                  if (s >= a.length || "o" == (l = (typeof(f = a[s]))[0])) return !d || ("u" == c ? i > o && !n : "" == c != n);
                  if ("u" == l) {
                    if (!d || "u" != c) return !1
                  } else if (d)
                    if (c == l)
                      if (i <= o) {
                        if (f != r[i]) return !1
                      } else {
                        if (n ? f > r[i] : f < r[i]) return !1;
                        f != r[i] && (d = !1)
                      }
                  else if ("s" != c && "n" != c) {
                    if (n || i <= o) return !1;
                    d = !1, i--
                  } else {
                    if (i <= o || l < c != n) return !1;
                    d = !1
                  } else "s" != c && "n" != c && (d = !1, i--)
                }
              }
              var u = [],
                p = u.pop.bind(u);
              for (s = 1; s < r.length; s++) {
                var h = r[s];
                u.push(1 == h ? p() | p() : 2 == h ? p() & p() : h ? t(h, a) : !p())
              }
              return !!p()
            },
            r = (r, a, o) => {
              var n = r[a];
              return (a = Object.keys(n).reduce(((r, a) => !t(o, a) || r && !((t, r) => {
                t = e(t), r = e(r);
                for (var a = 0;;) {
                  if (a >= t.length) return a < r.length && "u" != (typeof r[a])[0];
                  var o = t[a],
                    n = (typeof o)[0];
                  if (a >= r.length) return "u" == n;
                  var s = r[a],
                    i = (typeof s)[0];
                  if (n != i) return "o" == n && "n" == i || "s" == i || "u" == n;
                  if ("o" != n && "u" != n && o != s) return o < s;
                  a++
                }
              })(r, a) ? r : a), 0)) && n[a]
            },
            a = (e => function(t, r, a, o) {
              var n = c.I(t);
              return n && n.then ? n.then(e.bind(e, t, c.S[t], r, a, o)) : e(t, c.S[t], r, a, o)
            })(((e, t, a, o, n) => {
              var s = t && c.o(t, a) && r(t, a, o);
              return s ? (e => (e.loaded = 1, e.get()))(s) : n()
            })),
            o = {},
            n = {
              1403: () => a("default", "react", [1, 18, 2, 0], (() => c.e(380).then((() => () => c(3380))))),
              6040: () => a("default", "gsap", [1, "workspace:*"], (() => c.e(149).then((() => () => c(3149))))),
              6717: () => a("default", "@rockstargames/locale-tools", [1, "workspace:*"], (() => Promise.all([c.e(66), c.e(396), c.e(524)]).then((() => () => c(4143))))),
              6864: () => a("default", "react-focus-lock", [1, 2, 9, 6], (() => Promise.all([c.e(155), c.e(109), c.e(516)]).then((() => () => c(109))))),
              7172: () => a("default", "react-router-dom", [1, 6, 11, 2], (() => Promise.all([c.e(261), c.e(105), c.e(451)]).then((() => () => c(4451))))),
              7460: () => a("default", "react-remove-scroll", [1, 2, 5, 7], (() => Promise.all([c.e(155), c.e(839)]).then((() => () => c(6868))))),
              9779: () => a("default", "react-router-dom", [1, 6, 11, 2], (() => Promise.all([c.e(261), c.e(105), c.e(8)]).then((() => () => c(6008))))),
              5301: () => a("default", "@rockstargames/router", [1, "workspace:*"], (() => Promise.all([c.e(410), c.e(2)]).then((() => () => c(3002))))),
              4410: () => a("default", "react-router-dom", [1, 6, 11, 2], (() => Promise.all([c.e(261), c.e(776)]).then((() => () => c(2776))))),
              9516: () => a("default", "prop-types", [1, 15, 8, 1], (() => c.e(977).then((() => () => c(7977)))))
            },
            s = {
              325: [9779],
              403: [1403],
              410: [4410],
              516: [9516],
              521: [6040, 6717, 6864, 7172, 7460],
              932: [5301]
            },
            i = {};
          c.f.consumes = (e, t) => {
            c.o(s, e) && s[e].forEach((e => {
              if (c.o(o, e)) return t.push(o[e]);
              if (!i[e]) {
                var r = t => {
                  o[e] = 0, c.m[e] = r => {
                    delete c.c[e], r.exports = t()
                  }
                };
                i[e] = !0;
                var a = t => {
                  delete o[e], c.m[e] = r => {
                    throw delete c.c[e], t
                  }
                };
                try {
                  var s = n[e]();
                  s.then ? t.push(o[e] = s.then(r).catch(a)) : r(s)
                } catch (e) {
                  a(e)
                }
              }
            }))
          }
        })(), (() => {
          if ("undefined" != typeof document) {
            var e = {
              47: 0
            };
            c.f.miniCss = (t, r) => {
              e[t] ? r.push(e[t]) : 0 !== e[t] && {
                325: 1,
                932: 1
              } [t] && r.push(e[t] = (e => new Promise(((t, r) => {
                var a = c.miniCssF(e),
                  o = c.p + a;
                if (((e, t) => {
                    for (var r = document.getElementsByTagName("link"), a = 0; a < r.length; a++) {
                      var o = (s = r[a]).getAttribute("data-href") || s.getAttribute("href");
                      if ("stylesheet" === s.rel && (o === e || o === t)) return s
                    }
                    var n = document.getElementsByTagName("style");
                    for (a = 0; a < n.length; a++) {
                      var s;
                      if ((o = (s = n[a]).getAttribute("data-href")) === e || o === t) return s
                    }
                  })(a, o)) return t();
                ((e, t, r, a, o) => {
                  var n = document.createElement("link");
                  n.rel = "stylesheet", n.type = "text/css", n.onerror = n.onload = r => {
                    if (n.onerror = n.onload = null, "load" === r.type) a();
                    else {
                      var s = r && ("load" === r.type ? "missing" : r.type),
                        i = r && r.target && r.target.href || t,
                        d = new Error("Loading CSS chunk " + e + " failed.\n(" + i + ")");
                      d.code = "CSS_CHUNK_LOAD_FAILED", d.type = s, d.request = i, n.parentNode && n.parentNode.removeChild(n), o(d)
                    }
                  }, n.href = t, document.head.appendChild(n)
                })(e, o, 0, t, r)
              })))(t).then((() => {
                e[t] = 0
              }), (r => {
                throw delete e[t], r
              })))
            }
          }
        })(), (() => {
          var e = {
            47: 0
          };
          c.f.j = (t, r) => {
            var a = c.o(e, t) ? e[t] : void 0;
            if (0 !== a)
              if (a) r.push(a[2]);
              else if (/^(396|403|410|516)$/.test(t)) e[t] = 0;
            else {
              var o = new Promise(((r, o) => a = e[t] = [r, o]));
              r.push(a[2] = o);
              var n = c.p + c.u(t),
                s = new Error;
              c.l(n, (r => {
                if (c.o(e, t) && (0 !== (a = e[t]) && (e[t] = void 0), a)) {
                  var o = r && ("load" === r.type ? "missing" : r.type),
                    n = r && r.target && r.target.src;
                  s.message = "Loading chunk " + t + " failed.\n(" + o + ": " + n + ")", s.name = "ChunkLoadError", s.type = o, s.request = n, a[1](s)
                }
              }), "chunk-" + t, t)
            }
          };
          var t = (t, r) => {
              var a, o, n = r[0],
                s = r[1],
                i = r[2],
                d = 0;
              if (n.some((t => 0 !== e[t]))) {
                for (a in s) c.o(s, a) && (c.m[a] = s[a]);
                i && i(c)
              }
              for (t && t(r); d < n.length; d++) o = n[d], c.o(e, o) && e[o] && e[o][0](), e[o] = 0
            },
            r = self.webpackChunk_rockstargames_sites_gta = self.webpackChunk_rockstargames_sites_gta || [];
          r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
        })(), c.nc = void 0, c(2160), c(3588)
      })())
    }
  }
}));