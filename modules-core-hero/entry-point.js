! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      r = (new Error).stack;
    r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "e6c94b97-1682-4455-8a80-13ecd5545949", e._sentryDebugIdIdentifier = "sentry-dbid-e6c94b97-1682-4455-8a80-13ecd5545949")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-hero",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register(["@rockstargames/graph-client", "@rockstargames/modules-core-sc-user", "@rockstargames/tina", "@rockstargames/utils"], (function(e, r) {
  var t = {},
    a = {},
    n = {},
    o = {};
  return Object.defineProperty(t, "__esModule", {
    value: !0
  }), Object.defineProperty(a, "__esModule", {
    value: !0
  }), Object.defineProperty(n, "__esModule", {
    value: !0
  }), Object.defineProperty(o, "__esModule", {
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
    }, function(e) {
      Object.keys(e).forEach((function(r) {
        n[r] = e[r]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(r) {
        o[r] = e[r]
      }))
    }],
    execute: function() {
      e((() => {
        var e, i, s, d, f = {
            4364: (e, r, t) => {
              (0, t(7284).G)(1)
            },
            7284: (e, r, t) => {
              const a = t(7984).Q;
              r.G = function(e) {
                if (e || (e = 1), !t.y.meta || !t.y.meta.url) throw console.error("__system_context__", t.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                t.p = a(t.y.meta.url, e)
              }
            },
            3824: (e, r, t) => {
              t(4364)
            },
            7984: (e, r, t) => {
              r.Q = function(e, r) {
                var t = document.createElement("a");
                t.href = e;
                for (var a = "/" === t.pathname[0] ? t.pathname : "/" + t.pathname, n = 0, o = a.length; n !== r && o >= 0;) "/" === a[--o] && n++;
                if (n !== r) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + r + ") is greater than the number of directories (" + n + ") in the URL path " + e);
                var i = a.slice(0, o + 1);
                return t.protocol + "//" + t.host + i
              };
              Number.isInteger
            },
            8680: (e, r, t) => {
              "use strict";
              var a = {
                  "./index": () => Promise.all([t.e(664), t.e(816), t.e(480), t.e(393)]).then((() => () => t(5648))),
                  "./tina": () => Promise.all([t.e(560), t.e(664), t.e(540), t.e(816), t.e(668)]).then((() => () => t(5288)))
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
            3864: e => {
              "use strict";
              e.exports = t
            },
            1128: e => {
              "use strict";
              e.exports = a
            },
            8428: e => {
              "use strict";
              e.exports = n
            },
            9344: e => {
              "use strict";
              e.exports = o
            }
          },
          l = {};

        function c(e) {
          var r = l[e];
          if (void 0 !== r) return r.exports;
          var t = l[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return f[e].call(t.exports, t, t.exports, c), t.loaded = !0, t.exports
        }
        return c.m = f, c.c = l, c.y = r, c.amdO = {}, c.n = e => {
          var r = e && e.__esModule ? () => e.default : () => e;
          return c.d(r, {
            a: r
          }), r
        }, c.d = (e, r) => {
          for (var t in r) c.o(r, t) && !c.o(e, t) && Object.defineProperty(e, t, {
            enumerable: !0,
            get: r[t]
          })
        }, c.f = {}, c.e = e => Promise.all(Object.keys(c.f).reduce(((r, t) => (c.f[t](e, r), r)), [])), c.u = e => "js/" + {
          100: "9a9c380b7b993a8a56c456f84f756812",
          104: "93dccc77fc1802d33411460ea652c2a2",
          176: "be337a4b050a8fd72156c16f14f84acf",
          177: "d407b63f3a8047b86200cd9cc31e12fc",
          204: "83b809fbce7aa7a710b23a96fe17f7b7",
          393: "9262b27045dff6c7aee0b51a2d5567ed",
          480: "b9ac18da5a5e3f31a31cc1570ac50001",
          540: "cd6a9d43d97d20c8b84bfaf373f707c3",
          560: "b3d3dd4e4ccb80f3ad43cd0f2059104d",
          664: "a59c9dbcd0e537ab80224e68d2465548",
          668: "9dde1d19715e90856281ceca041fbbab",
          718: "5c8c67e34788b7755af2b6ae7668aa6e",
          816: "896a4fd1868399d25c89d3ff1c3c3163",
          900: "162fc60b502720715d3c1f8ed57a2124",
          952: "0582333724e3e493914d785c236a1745"
        } [e] + ".js", c.miniCssF = e => "css/" + {
          177: "0cffcec11cd40befccc8e0363d213e0a",
          393: "65245e55e1d76e445871a87dde121813",
          540: "8da2938b7d69328f516c72de05068af8"
        } [e] + ".css", c.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), c.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r), e = {}, i = "@rockstargames/modules-core-hero:", c.l = (r, t, a, n) => {
          if (e[r]) e[r].push(t);
          else {
            var o, s;
            if (void 0 !== a)
              for (var d = document.getElementsByTagName("script"), f = 0; f < d.length; f++) {
                var l = d[f];
                if (l.getAttribute("src") == r || l.getAttribute("data-webpack") == i + a) {
                  o = l;
                  break
                }
              }
            o || (s = !0, (o = document.createElement("script")).charset = "utf-8", o.timeout = 120, c.nc && o.setAttribute("nonce", c.nc), o.setAttribute("data-webpack", i + a), o.src = r), e[r] = [t];
            var u = (t, a) => {
                o.onerror = o.onload = null, clearTimeout(p);
                var n = e[r];
                if (delete e[r], o.parentNode && o.parentNode.removeChild(o), n && n.forEach((e => e(a))), t) return t(a)
              },
              p = setTimeout(u.bind(null, void 0, {
                type: "timeout",
                target: o
              }), 12e4);
            o.onerror = u.bind(null, o.onerror), o.onload = u.bind(null, o.onload), s && document.head.appendChild(o)
          }
        }, c.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, c.nmd = e => (e.paths = [], e.children || (e.children = []), e), s = {
          177: [1532, 3061, 3784, 5356, 8540],
          480: [2836],
          540: [3052, 5652],
          668: [2104, 5988, 9468],
          816: [1740, 5792]
        }, d = {
          1532: ["default", "./operations/queries", 3864],
          1740: ["default", "./index", 8428],
          2104: ["default", "./ui", 8428],
          2836: ["default", "./index", 1128],
          3052: ["default", "./index", 3864],
          3061: ["default", "./hooks", 9344],
          3784: ["default", "./operations/fragments/newswire-post.graphql", 3864],
          5356: ["default", "./helpers", 8428],
          5652: ["default", "./helpers/uploads", 8428],
          5792: ["default", "./index", 9344],
          5988: ["default", "./functions", 9344],
          8540: ["default", "./operations/fragments/paging.graphql", 3864],
          9468: ["default", "./properties", 8428]
        }, c.f.remotes = (e, r) => {
          c.o(s, e) && s[e].forEach((e => {
            var t = c.R;
            t || (t = []);
            var a = d[e];
            if (!(t.indexOf(a) >= 0)) {
              if (t.push(a), a.p) return r.push(a.p);
              var n = r => {
                  r || (r = new Error("Container missing")), "string" == typeof r.message && (r.message += '\nwhile loading "' + a[1] + '" from ' + a[2]), c.m[e] = () => {
                    throw r
                  }, a.p = 0
                },
                o = (e, t, o, i, s, d) => {
                  try {
                    var f = e(t, o);
                    if (!f || !f.then) return s(f, i, d);
                    var l = f.then((e => s(e, i)), n);
                    if (!d) return l;
                    r.push(a.p = l)
                  } catch (e) {
                    n(e)
                  }
                },
                i = (e, r, n) => o(r.get, a[1], t, 0, s, n),
                s = r => {
                  a.p = 1, c.m[e] = e => {
                    e.exports = r()
                  }
                };
              o(c, a[2], 0, 0, ((e, r, t) => e ? o(c.I, a[0], 0, e, i, t) : n()), 1)
            }
          }))
        }, (() => {
          c.S = {};
          var e = {},
            r = {};
          c.I = (t, a) => {
            a || (a = []);
            var n = r[t];
            if (n || (n = r[t] = {}), !(a.indexOf(n) >= 0)) {
              if (a.push(n), e[t]) return e[t];
              c.o(c.S, t) || (c.S[t] = {});
              var o = c.S[t],
                i = "@rockstargames/modules-core-hero",
                s = (e, r, t, a) => {
                  var n = o[e] = o[e] || {},
                    s = n[r];
                  (!s || !s.loaded && (!a != !s.eager ? a : i > s.from)) && (n[r] = {
                    get: t,
                    from: i,
                    eager: !!a
                  })
                },
                d = e => {
                  var r = e => {
                    return r = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(r));
                    var r
                  };
                  try {
                    var n = c(e);
                    if (!n) return;
                    var o = e => e && e.init && e.init(c.S[t], a);
                    if (n.then) return f.push(n.then(o, r));
                    var i = o(n);
                    if (i && i.then) return f.push(i.catch(r))
                  } catch (e) {
                    r(e)
                  }
                },
                f = [];
              return "default" === t && (s("@rockstargames/components", "1.14.0", (() => Promise.all([c.e(176), c.e(560), c.e(104), c.e(664), c.e(540), c.e(816), c.e(177), c.e(480), c.e(204)]).then((() => () => c(1752))))), s("framer-motion", "7.10.3", (() => Promise.all([c.e(176), c.e(900), c.e(664)]).then((() => () => c(1900))))), s("framer-motion", "7.10.3", (() => Promise.all([c.e(176), c.e(952), c.e(664)]).then((() => () => c(5952))))), s("react-router-dom", "6.17.0", (() => Promise.all([c.e(718), c.e(664)]).then((() => () => c(5718))))), s("react", "18.2.0", (() => c.e(100).then((() => () => c(7100))))), d(8428), d(9344), d(1128), d(3864)), f.length ? e[t] = Promise.all(f).then((() => e[t] = 1)) : e[t] = 1
            }
          }
        })(), (() => {
          var e;
          c.g.importScripts && (e = c.g.location + "");
          var r = c.g.document;
          if (!e && r && (r.currentScript && (e = r.currentScript.src), !e)) {
            var t = r.getElementsByTagName("script");
            if (t.length)
              for (var a = t.length - 1; a > -1 && !e;) e = t[a--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), c.p = e
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
                for (var i = 0, s = 1, d = !0;; s++, i++) {
                  var f, l, c = s < t.length ? (typeof t[s])[0] : "";
                  if (i >= a.length || "o" == (l = (typeof(f = a[i]))[0])) return !d || ("u" == c ? s > n && !o : "" == c != o);
                  if ("u" == l) {
                    if (!d || "u" != c) return !1
                  } else if (d)
                    if (c == l)
                      if (s <= n) {
                        if (f != t[s]) return !1
                      } else {
                        if (o ? f > t[s] : f < t[s]) return !1;
                        f != t[s] && (d = !1)
                      }
                  else if ("s" != c && "n" != c) {
                    if (o || s <= n) return !1;
                    d = !1, s--
                  } else {
                    if (s <= n || l < c != o) return !1;
                    d = !1
                  } else "s" != c && "n" != c && (d = !1, s--)
                }
              }
              var u = [],
                p = u.pop.bind(u);
              for (i = 1; i < t.length; i++) {
                var h = t[i];
                u.push(1 == h ? p() | p() : 2 == h ? p() & p() : h ? r(h, a) : !p())
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
              var o = c.I(r);
              return o && o.then ? o.then(e.bind(e, r, c.S[r], t, a, n)) : e(r, c.S[r], t, a, n)
            })(((e, r, a, n, o) => {
              var i = r && c.o(r, a) && t(r, a, n);
              return i ? (e => (e.loaded = 1, e.get()))(i) : o()
            })),
            n = {},
            o = {
              1664: () => a("default", "react", [1, 18, 2, 0], (() => c.e(100).then((() => () => c(7100))))),
              9860: () => a("default", "@rockstargames/components", [1, "workspace:*"], (() => Promise.all([c.e(176), c.e(560), c.e(104), c.e(540), c.e(177)]).then((() => () => c(1752))))),
              7272: () => a("default", "framer-motion", [1, 7, 5, 1], (() => Promise.all([c.e(176), c.e(900)]).then((() => () => c(1900))))),
              968: () => a("default", "framer-motion", [1, 7, 5, 1], (() => c.e(952).then((() => () => c(5952))))),
              7013: () => a("default", "react-router-dom", [1, 6, 11, 2], (() => c.e(718).then((() => () => c(5718)))))
            },
            i = {
              177: [968, 7013],
              393: [7272],
              480: [9860],
              664: [1664]
            },
            s = {};
          c.f.consumes = (e, r) => {
            c.o(i, e) && i[e].forEach((e => {
              if (c.o(n, e)) return r.push(n[e]);
              if (!s[e]) {
                var t = r => {
                  n[e] = 0, c.m[e] = t => {
                    delete c.c[e], t.exports = r()
                  }
                };
                s[e] = !0;
                var a = r => {
                  delete n[e], c.m[e] = t => {
                    throw delete c.c[e], r
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
              820: 0
            };
            c.f.miniCss = (r, t) => {
              e[r] ? t.push(e[r]) : 0 !== e[r] && {
                177: 1,
                393: 1,
                540: 1
              } [r] && t.push(e[r] = (e => new Promise(((r, t) => {
                var a = c.miniCssF(e),
                  n = c.p + a;
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
                        d = new Error("Loading CSS chunk " + e + " failed.\n(" + s + ")");
                      d.code = "CSS_CHUNK_LOAD_FAILED", d.type = i, d.request = s, o.parentNode && o.parentNode.removeChild(o), n(d)
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
            820: 0
          };
          c.f.j = (r, t) => {
            var a = c.o(e, r) ? e[r] : void 0;
            if (0 !== a)
              if (a) t.push(a[2]);
              else if (/^(480|540|664|816)$/.test(r)) e[r] = 0;
            else {
              var n = new Promise(((t, n) => a = e[r] = [t, n]));
              t.push(a[2] = n);
              var o = c.p + c.u(r),
                i = new Error;
              c.l(o, (t => {
                if (c.o(e, r) && (0 !== (a = e[r]) && (e[r] = void 0), a)) {
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
                d = 0;
              if (o.some((r => 0 !== e[r]))) {
                for (a in i) c.o(i, a) && (c.m[a] = i[a]);
                s && s(c)
              }
              for (r && r(t); d < o.length; d++) n = o[d], c.o(e, n) && e[n] && e[n][0](), e[n] = 0
            },
            t = self.webpackChunk_rockstargames_modules_core_hero = self.webpackChunk_rockstargames_modules_core_hero || [];
          t.forEach(r.bind(null, 0)), t.push = r.bind(null, t.push.bind(t))
        })(), c(3824), c(8680)
      })())
    }
  }
}));