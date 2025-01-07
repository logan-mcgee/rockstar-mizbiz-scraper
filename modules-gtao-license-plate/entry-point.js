! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "ba4c8039-9bd0-43b6-808c-8c4e8ff7c340", e._sentryDebugIdIdentifier = "sentry-dbid-ba4c8039-9bd0-43b6-808c-8c4e8ff7c340")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-gtao-license-plate",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register(["@rockstargames/graph-client", "@rockstargames/modules-core-sc-user", "@rockstargames/utils"], (function(e, t) {
  var r = {},
    a = {},
    n = {};
  return Object.defineProperty(r, "__esModule", {
    value: !0
  }), Object.defineProperty(a, "__esModule", {
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
        n[t] = e[t]
      }))
    }],
    execute: function() {
      e((() => {
        var e, o, d, s, i = {
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
                for (var a = "/" === r.pathname[0] ? r.pathname : "/" + r.pathname, n = 0, o = a.length; n !== t && o >= 0;) "/" === a[--o] && n++;
                if (n !== t) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + t + ") is greater than the number of directories (" + n + ") in the URL path " + e);
                var d = a.slice(0, o + 1);
                return r.protocol + "//" + r.host + d
              };
              Number.isInteger
            },
            4516: (e, t, r) => {
              "use strict";
              var a = {
                  "./bootstrap": () => r.e(362).then((() => () => r(7362))),
                  "./index": () => Promise.all([r.e(386), r.e(403), r.e(37), r.e(493), r.e(24), r.e(179)]).then((() => () => r(8179)))
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
            1024: e => {
              "use strict";
              e.exports = r
            },
            404: e => {
              "use strict";
              e.exports = a
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
            id: e,
            loaded: !1,
            exports: {}
          };
          return i[e].call(r.exports, r, r.exports, c), r.loaded = !0, r.exports
        }
        return c.m = i, c.c = l, c.y = t, c.amdO = {}, c.n = e => {
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
          24: "067a7db118f5b0dc9d5120ffcfbcd649",
          37: "697c094228efc68071ab486eabe80211",
          66: "bf6d537f240ac21262825b3652e97eba",
          141: "be9e2e2172d097f7c672732b175c83eb",
          143: "6ef8468e3175632d15889f981002eecf",
          149: "16a279edec9f57ba3c32dbe78dbcb3b1",
          179: "6bd95f0bb366febfae2371f97dc0e8aa",
          362: "453ec6a0bbbea6107b53735ce32ea605",
          380: "ec48a176fc3c8d285367e99c045f2b60",
          386: "9a6c1f520ba94fbb1d68fd2f6dcb9614",
          398: "1974eda0db83787e4dd9d794bccdb3a8",
          403: "0219be6d00c90780f3157851115f3f68",
          429: "3e4709106a6a9e85f94179f92e4c1a20",
          487: "604923ea0ff57b13f269d67303771306",
          493: "05956063d4fd2640a858d44161485d1c",
          522: "005f384fc3e1c58fca617e955c353fb1",
          524: "2d123f76f0f86ea48d841987413b35e2",
          533: "ac99d9a12504191752a61615d2161143",
          642: "18d55effd1a117db8ace2e4dc7e1d4b2",
          811: "568fd1db7f44030e9ffd0944299562c4",
          844: "cee2d450390ffffc19fe92f9ebe0143b",
          852: "440cd8d7f45b3bee6dd352d933df15d1"
        } [e] + ".js", c.miniCssF = e => "css/b8b84a51b07dc4fdb38e2eaae2542ba8.css", c.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), c.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), e = {}, o = "@rockstargames/modules-gtao-license-plate:", c.l = (t, r, a, n) => {
          if (e[t]) e[t].push(r);
          else {
            var d, s;
            if (void 0 !== a)
              for (var i = document.getElementsByTagName("script"), l = 0; l < i.length; l++) {
                var f = i[l];
                if (f.getAttribute("src") == t || f.getAttribute("data-webpack") == o + a) {
                  d = f;
                  break
                }
              }
            d || (s = !0, (d = document.createElement("script")).charset = "utf-8", d.timeout = 120, c.nc && d.setAttribute("nonce", c.nc), d.setAttribute("data-webpack", o + a), d.src = t), e[t] = [r];
            var u = (r, a) => {
                d.onerror = d.onload = null, clearTimeout(h);
                var n = e[t];
                if (delete e[t], d.parentNode && d.parentNode.removeChild(d), n && n.forEach((e => e(a))), r) return r(a)
              },
              h = setTimeout(u.bind(null, void 0, {
                type: "timeout",
                target: d
              }), 12e4);
            d.onerror = u.bind(null, d.onerror), d.onload = u.bind(null, d.onload), s && document.head.appendChild(d)
          }
        }, c.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, c.nmd = e => (e.paths = [], e.children || (e.children = []), e), d = {
          24: [207, 396, 2756, 2757, 8407],
          811: [2158]
        }, s = {
          207: ["default", "./index", 404],
          396: ["default", "./hooks", 2969],
          2158: ["default", "./providers", 2969],
          2756: ["default", "./index", 2969],
          2757: ["default", "./providers", 404],
          8407: ["default", "./index", 1024]
        }, c.f.remotes = (e, t) => {
          c.o(d, e) && d[e].forEach((e => {
            var r = c.R;
            r || (r = []);
            var a = s[e];
            if (!(r.indexOf(a) >= 0)) {
              if (r.push(a), a.p) return t.push(a.p);
              var n = t => {
                  t || (t = new Error("Container missing")), "string" == typeof t.message && (t.message += '\nwhile loading "' + a[1] + '" from ' + a[2]), c.m[e] = () => {
                    throw t
                  }, a.p = 0
                },
                o = (e, r, o, d, s, i) => {
                  try {
                    var l = e(r, o);
                    if (!l || !l.then) return s(l, d, i);
                    var c = l.then((e => s(e, d)), n);
                    if (!i) return c;
                    t.push(a.p = c)
                  } catch (e) {
                    n(e)
                  }
                },
                d = (e, t, n) => o(t.get, a[1], r, 0, i, n),
                i = t => {
                  a.p = 1, c.m[e] = e => {
                    e.exports = t()
                  }
                };
              o(c, a[2], 0, 0, ((e, t, r) => e ? o(c.I, a[0], 0, e, d, r) : n()), 1)
            }
          }))
        }, (() => {
          c.S = {};
          var e = {},
            t = {};
          c.I = (r, a) => {
            a || (a = []);
            var n = t[r];
            if (n || (n = t[r] = {}), !(a.indexOf(n) >= 0)) {
              if (a.push(n), e[r]) return e[r];
              c.o(c.S, r) || (c.S[r] = {});
              var o = c.S[r],
                d = "@rockstargames/modules-gtao-license-plate",
                s = (e, t, r, a) => {
                  var n = o[e] = o[e] || {},
                    s = n[t];
                  (!s || !s.loaded && (!a != !s.eager ? a : d > s.from)) && (n[t] = {
                    get: r,
                    from: d,
                    eager: !!a
                  })
                },
                i = e => {
                  var t = e => {
                    return t = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(t));
                    var t
                  };
                  try {
                    var n = c(e);
                    if (!n) return;
                    var o = e => e && e.init && e.init(c.S[r], a);
                    if (n.then) return l.push(n.then(o, t));
                    var d = o(n);
                    if (d && d.then) return l.push(d.catch(t))
                  } catch (e) {
                    t(e)
                  }
                },
                l = [];
              return "default" === r && (s("@react-spring/web", "9.7.3", (() => Promise.all([c.e(522), c.e(403), c.e(493)]).then((() => () => c(522))))), s("@react-three/fiber", "7.0.29", (() => Promise.all([c.e(642), c.e(403), c.e(37)]).then((() => () => c(3642))))), s("@rockstargames/locale-tools", "1.0.0", (() => Promise.all([c.e(66), c.e(403), c.e(143)]).then((() => () => c(4143))))), s("@use-gesture/react", "10.3.0", (() => Promise.all([c.e(844), c.e(403)]).then((() => () => c(2463))))), s("gsap", "0.0.0", (() => c.e(149).then((() => () => c(3149))))), s("lodash", "4.17.21", (() => c.e(429).then((() => () => c(9429))))), s("react-dom", "18.2.0", (() => Promise.all([c.e(533), c.e(403)]).then((() => () => c(7533))))), s("react-router-dom", "6.17.0", (() => Promise.all([c.e(398), c.e(403)]).then((() => () => c(3398))))), s("react", "18.2.0", (() => c.e(380).then((() => () => c(3380))))), s("stackblur-canvas", "2.6.0", (() => c.e(487).then((() => () => c(9487))))), s("three", "0.141.0", (() => c.e(141).then((() => () => c(4522))))), i(1024), i(404), i(2969)), l.length ? e[r] = Promise.all(l).then((() => e[r] = 1)) : e[r] = 1
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
                var n = r[0],
                  o = n < 0;
                o && (n = -n - 1);
                for (var d = 0, s = 1, i = !0;; s++, d++) {
                  var l, c, f = s < r.length ? (typeof r[s])[0] : "";
                  if (d >= a.length || "o" == (c = (typeof(l = a[d]))[0])) return !i || ("u" == f ? s > n && !o : "" == f != o);
                  if ("u" == c) {
                    if (!i || "u" != f) return !1
                  } else if (i)
                    if (f == c)
                      if (s <= n) {
                        if (l != r[s]) return !1
                      } else {
                        if (o ? l > r[s] : l < r[s]) return !1;
                        l != r[s] && (i = !1)
                      }
                  else if ("s" != f && "n" != f) {
                    if (o || s <= n) return !1;
                    i = !1, s--
                  } else {
                    if (s <= n || c < f != o) return !1;
                    i = !1
                  } else "s" != f && "n" != f && (i = !1, s--)
                }
              }
              var u = [],
                h = u.pop.bind(u);
              for (d = 1; d < r.length; d++) {
                var p = r[d];
                u.push(1 == p ? h() | h() : 2 == p ? h() & h() : p ? t(p, a) : !h())
              }
              return !!h()
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
                  var d = r[a],
                    s = (typeof d)[0];
                  if (o != s) return "o" == o && "n" == s || "s" == s || "u" == o;
                  if ("o" != o && "u" != o && n != d) return n < d;
                  a++
                }
              })(r, a) ? r : a), 0)) && o[a]
            },
            a = (e => function(t, r, a, n) {
              var o = c.I(t);
              return o && o.then ? o.then(e.bind(e, t, c.S[t], r, a, n)) : e(t, c.S[t], r, a, n)
            })(((e, t, a, n, o) => {
              var d = t && c.o(t, a) && r(t, a, n);
              return d ? (e => (e.loaded = 1, e.get()))(d) : o()
            })),
            n = {},
            o = {
              1403: () => a("default", "react", [1, 18, 2, 0], (() => c.e(380).then((() => () => c(3380))))),
              2037: () => a("default", "three", [4, 0, 141, 0], (() => c.e(141).then((() => () => c(4522))))),
              1874: () => a("default", "react-dom", [1, 18, 2, 0], (() => c.e(533).then((() => () => c(7533))))),
              1410: () => a("default", "@react-spring/web", [1, 9, 6, 1], (() => c.e(522).then((() => () => c(522))))),
              2227: () => a("default", "stackblur-canvas", [1, 2, 5, 0], (() => c.e(487).then((() => () => c(9487))))),
              4252: () => a("default", "lodash", [1, 4, 17, 21], (() => c.e(429).then((() => () => c(9429))))),
              6040: () => a("default", "gsap", [1, "workspace:*"], (() => c.e(149).then((() => () => c(3149))))),
              6717: () => a("default", "@rockstargames/locale-tools", [1, "workspace:*"], (() => Promise.all([c.e(66), c.e(524)]).then((() => () => c(4143))))),
              7377: () => a("default", "@react-three/fiber", [1, 7, 0, 0], (() => c.e(642).then((() => () => c(3642))))),
              8448: () => a("default", "@use-gesture/react", [1, 10, 2, 23], (() => c.e(844).then((() => () => c(2463))))),
              9779: () => a("default", "react-router-dom", [1, 6, 11, 2], (() => c.e(398).then((() => () => c(3398)))))
            },
            d = {
              24: [1410, 2227, 4252, 6040, 6717, 7377, 8448, 9779],
              37: [2037],
              403: [1403],
              493: [1874]
            },
            s = {};
          c.f.consumes = (e, t) => {
            c.o(d, e) && d[e].forEach((e => {
              if (c.o(n, e)) return t.push(n[e]);
              if (!s[e]) {
                var r = t => {
                  n[e] = 0, c.m[e] = r => {
                    delete c.c[e], r.exports = t()
                  }
                };
                s[e] = !0;
                var a = t => {
                  delete n[e], c.m[e] = r => {
                    throw delete c.c[e], t
                  }
                };
                try {
                  var d = o[e]();
                  d.then ? t.push(n[e] = d.then(r).catch(a)) : r(d)
                } catch (e) {
                  a(e)
                }
              }
            }))
          }
        })(), (() => {
          if ("undefined" != typeof document) {
            var e = {
              502: 0
            };
            c.f.miniCss = (t, r) => {
              e[t] ? r.push(e[t]) : 0 !== e[t] && {
                24: 1
              } [t] && r.push(e[t] = (e => new Promise(((t, r) => {
                var a = c.miniCssF(e),
                  n = c.p + a;
                if (((e, t) => {
                    for (var r = document.getElementsByTagName("link"), a = 0; a < r.length; a++) {
                      var n = (d = r[a]).getAttribute("data-href") || d.getAttribute("href");
                      if ("stylesheet" === d.rel && (n === e || n === t)) return d
                    }
                    var o = document.getElementsByTagName("style");
                    for (a = 0; a < o.length; a++) {
                      var d;
                      if ((n = (d = o[a]).getAttribute("data-href")) === e || n === t) return d
                    }
                  })(a, n)) return t();
                ((e, t, r, a, n) => {
                  var o = document.createElement("link");
                  o.rel = "stylesheet", o.type = "text/css", o.onerror = o.onload = r => {
                    if (o.onerror = o.onload = null, "load" === r.type) a();
                    else {
                      var d = r && ("load" === r.type ? "missing" : r.type),
                        s = r && r.target && r.target.href || t,
                        i = new Error("Loading CSS chunk " + e + " failed.\n(" + s + ")");
                      i.code = "CSS_CHUNK_LOAD_FAILED", i.type = d, i.request = s, o.parentNode && o.parentNode.removeChild(o), n(i)
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
            502: 0
          };
          c.f.j = (t, r) => {
            var a = c.o(e, t) ? e[t] : void 0;
            if (0 !== a)
              if (a) r.push(a[2]);
              else if (/^(37|403|493)$/.test(t)) e[t] = 0;
            else {
              var n = new Promise(((r, n) => a = e[t] = [r, n]));
              r.push(a[2] = n);
              var o = c.p + c.u(t),
                d = new Error;
              c.l(o, (r => {
                if (c.o(e, t) && (0 !== (a = e[t]) && (e[t] = void 0), a)) {
                  var n = r && ("load" === r.type ? "missing" : r.type),
                    o = r && r.target && r.target.src;
                  d.message = "Loading chunk " + t + " failed.\n(" + n + ": " + o + ")", d.name = "ChunkLoadError", d.type = n, d.request = o, a[1](d)
                }
              }), "chunk-" + t, t)
            }
          };
          var t = (t, r) => {
              var a, n, o = r[0],
                d = r[1],
                s = r[2],
                i = 0;
              if (o.some((t => 0 !== e[t]))) {
                for (a in d) c.o(d, a) && (c.m[a] = d[a]);
                s && s(c)
              }
              for (t && t(r); i < o.length; i++) n = o[i], c.o(e, n) && e[n] && e[n][0](), e[n] = 0
            },
            r = self.webpackChunk_rockstargames_modules_gtao_license_plate = self.webpackChunk_rockstargames_modules_gtao_license_plate || [];
          r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
        })(), c(2160), c(4516)
      })())
    }
  }
}));