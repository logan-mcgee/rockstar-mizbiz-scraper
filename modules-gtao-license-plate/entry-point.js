! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "7194bc13-1c81-4e22-a4c2-32b211d32e7b", e._sentryDebugIdIdentifier = "sentry-dbid-7194bc13-1c81-4e22-a4c2-32b211d32e7b")
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
        var e, o, s, d, i = {
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
                var s = a.slice(0, o + 1);
                return r.protocol + "//" + r.host + s
              };
              Number.isInteger
            },
            4516: (e, t, r) => {
              "use strict";
              var a = {
                  "./bootstrap": () => r.e(362).then((() => () => r(7362))),
                  "./index": () => Promise.all([r.e(386), r.e(403), r.e(37), r.e(493), r.e(396), r.e(598), r.e(179)]).then((() => () => r(8179)))
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
          f = {};

        function l(e) {
          var t = f[e];
          if (void 0 !== t) return t.exports;
          var r = f[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return i[e].call(r.exports, r, r.exports, l), r.loaded = !0, r.exports
        }
        return l.m = i, l.c = f, l.y = t, l.amdO = {}, l.n = e => {
          var t = e && e.__esModule ? () => e.default : () => e;
          return l.d(t, {
            a: t
          }), t
        }, l.d = (e, t) => {
          for (var r in t) l.o(t, r) && !l.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: t[r]
          })
        }, l.f = {}, l.e = e => Promise.all(Object.keys(l.f).reduce(((t, r) => (l.f[r](e, t), t)), [])), l.u = e => "js/" + {
          37: "697c094228efc68071ab486eabe80211",
          66: "e6b8fc76ea7c9a81bf8277818fd76e98",
          141: "0baf5f944c9a31fc1799e928ccbfaaff",
          143: "1c72cdc52b37b78a37f6e7ddeb410b7c",
          149: "a96e3f9d4f19367cdeca2f6aae93d23c",
          179: "b402766672577e9aa95af40085d52417",
          362: "12a5be5c7e92c3a6707e30379f2b418d",
          380: "2febdcdbd617f9d78bf479451d8846ff",
          386: "4afe18322c23cccaaf159fcc668f53a0",
          396: "22e5576056f71cd6d709a18fa4dc0d7c",
          398: "af3cb9921773a255027ec4ea67a3ec4b",
          403: "0219be6d00c90780f3157851115f3f68",
          429: "26042c40501099f17b8136dac0d48fea",
          487: "8ec11147ea1d2243d454f24b7ae2bc93",
          493: "05956063d4fd2640a858d44161485d1c",
          522: "05f8290c72255bbf867486d714130af3",
          524: "d238a1a32d2f9a63a8502c47520fc954",
          533: "a45a627a0edca8e2642c9ea65bd6dd61",
          598: "7f0f299e1fd37cf82b5384e85492ebeb",
          642: "a845bb58e26eda6d95e18aee281dc8ac",
          844: "1f347ac5b01aa2a27239fb82e0111b9f",
          852: "0beca416dec849f6a943a4b84e2226d9",
          952: "aca18da556b9c03d5ce4f9fb43990865"
        } [e] + ".js", l.miniCssF = e => "css/" + {
          598: "a2a1e29460251352ab9296db83bccbd3",
          952: "7ccb5b70358221784b996934fdb801d3"
        } [e] + ".css", l.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), l.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), e = {}, o = "@rockstargames/modules-gtao-license-plate:", l.l = (t, r, a, n) => {
          if (e[t]) e[t].push(r);
          else {
            var s, d;
            if (void 0 !== a)
              for (var i = document.getElementsByTagName("script"), f = 0; f < i.length; f++) {
                var c = i[f];
                if (c.getAttribute("src") == t || c.getAttribute("data-webpack") == o + a) {
                  s = c;
                  break
                }
              }
            s || (d = !0, (s = document.createElement("script")).charset = "utf-8", s.timeout = 120, l.nc && s.setAttribute("nonce", l.nc), s.setAttribute("data-webpack", o + a), s.src = t), e[t] = [r];
            var u = (r, a) => {
                s.onerror = s.onload = null, clearTimeout(h);
                var n = e[t];
                if (delete e[t], s.parentNode && s.parentNode.removeChild(s), n && n.forEach((e => e(a))), r) return r(a)
              },
              h = setTimeout(u.bind(null, void 0, {
                type: "timeout",
                target: s
              }), 12e4);
            s.onerror = u.bind(null, s.onerror), s.onload = u.bind(null, s.onload), d && document.head.appendChild(s)
          }
        }, l.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, l.nmd = e => (e.paths = [], e.children || (e.children = []), e), s = {
          396: [396],
          598: [207, 2756, 2757, 8407],
          952: [2158]
        }, d = {
          207: ["default", "./index", 404],
          396: ["default", "./hooks", 2969],
          2158: ["default", "./providers", 2969],
          2756: ["default", "./index", 2969],
          2757: ["default", "./providers", 404],
          8407: ["default", "./index", 1024]
        }, l.f.remotes = (e, t) => {
          l.o(s, e) && s[e].forEach((e => {
            var r = l.R;
            r || (r = []);
            var a = d[e];
            if (!(r.indexOf(a) >= 0)) {
              if (r.push(a), a.p) return t.push(a.p);
              var n = t => {
                  t || (t = new Error("Container missing")), "string" == typeof t.message && (t.message += '\nwhile loading "' + a[1] + '" from ' + a[2]), l.m[e] = () => {
                    throw t
                  }, a.p = 0
                },
                o = (e, r, o, s, d, i) => {
                  try {
                    var f = e(r, o);
                    if (!f || !f.then) return d(f, s, i);
                    var l = f.then((e => d(e, s)), n);
                    if (!i) return l;
                    t.push(a.p = l)
                  } catch (e) {
                    n(e)
                  }
                },
                s = (e, t, n) => o(t.get, a[1], r, 0, i, n),
                i = t => {
                  a.p = 1, l.m[e] = e => {
                    e.exports = t()
                  }
                };
              o(l, a[2], 0, 0, ((e, t, r) => e ? o(l.I, a[0], 0, e, s, r) : n()), 1)
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
                s = "@rockstargames/modules-gtao-license-plate",
                d = (e, t, r, a) => {
                  var n = o[e] = o[e] || {},
                    d = n[t];
                  (!d || !d.loaded && (!a != !d.eager ? a : s > d.from)) && (n[t] = {
                    get: r,
                    from: s,
                    eager: !!a
                  })
                },
                i = e => {
                  var t = e => {
                    return t = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(t));
                    var t
                  };
                  try {
                    var n = l(e);
                    if (!n) return;
                    var o = e => e && e.init && e.init(l.S[r], a);
                    if (n.then) return f.push(n.then(o, t));
                    var s = o(n);
                    if (s && s.then) return f.push(s.catch(t))
                  } catch (e) {
                    t(e)
                  }
                },
                f = [];
              return "default" === r && (d("@react-spring/web", "9.7.3", (() => Promise.all([l.e(522), l.e(403), l.e(493)]).then((() => () => l(522))))), d("@react-three/fiber", "7.0.29", (() => Promise.all([l.e(642), l.e(403), l.e(37)]).then((() => () => l(3642))))), d("@rockstargames/locale-tools", "1.0.0", (() => Promise.all([l.e(66), l.e(403), l.e(396), l.e(143)]).then((() => () => l(4143))))), d("@use-gesture/react", "10.3.0", (() => Promise.all([l.e(844), l.e(403)]).then((() => () => l(2463))))), d("gsap", "0.0.0", (() => l.e(149).then((() => () => l(3149))))), d("lodash", "4.17.21", (() => l.e(429).then((() => () => l(9429))))), d("react-dom", "18.2.0", (() => Promise.all([l.e(533), l.e(403)]).then((() => () => l(7533))))), d("react-router-dom", "6.17.0", (() => Promise.all([l.e(398), l.e(403)]).then((() => () => l(3398))))), d("react", "18.2.0", (() => l.e(380).then((() => () => l(3380))))), d("stackblur-canvas", "2.6.0", (() => l.e(487).then((() => () => l(9487))))), d("three", "0.141.0", (() => l.e(141).then((() => () => l(4522))))), i(2969), i(1024), i(404)), f.length ? e[r] = Promise.all(f).then((() => e[r] = 1)) : e[r] = 1
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
                for (var s = 0, d = 1, i = !0;; d++, s++) {
                  var f, l, c = d < r.length ? (typeof r[d])[0] : "";
                  if (s >= a.length || "o" == (l = (typeof(f = a[s]))[0])) return !i || ("u" == c ? d > n && !o : "" == c != o);
                  if ("u" == l) {
                    if (!i || "u" != c) return !1
                  } else if (i)
                    if (c == l)
                      if (d <= n) {
                        if (f != r[d]) return !1
                      } else {
                        if (o ? f > r[d] : f < r[d]) return !1;
                        f != r[d] && (i = !1)
                      }
                  else if ("s" != c && "n" != c) {
                    if (o || d <= n) return !1;
                    i = !1, d--
                  } else {
                    if (d <= n || l < c != o) return !1;
                    i = !1
                  } else "s" != c && "n" != c && (i = !1, d--)
                }
              }
              var u = [],
                h = u.pop.bind(u);
              for (s = 1; s < r.length; s++) {
                var p = r[s];
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
                  var s = r[a],
                    d = (typeof s)[0];
                  if (o != d) return "o" == o && "n" == d || "s" == d || "u" == o;
                  if ("o" != o && "u" != o && n != s) return n < s;
                  a++
                }
              })(r, a) ? r : a), 0)) && o[a]
            },
            a = (e => function(t, r, a, n) {
              var o = l.I(t);
              return o && o.then ? o.then(e.bind(e, t, l.S[t], r, a, n)) : e(t, l.S[t], r, a, n)
            })(((e, t, a, n, o) => {
              var s = t && l.o(t, a) && r(t, a, n);
              return s ? (e => (e.loaded = 1, e.get()))(s) : o()
            })),
            n = {},
            o = {
              1403: () => a("default", "react", [1, 18, 2, 0], (() => l.e(380).then((() => () => l(3380))))),
              2037: () => a("default", "three", [4, 0, 141, 0], (() => l.e(141).then((() => () => l(4522))))),
              1874: () => a("default", "react-dom", [1, 18, 2, 0], (() => l.e(533).then((() => () => l(7533))))),
              1410: () => a("default", "@react-spring/web", [1, 9, 6, 1], (() => l.e(522).then((() => () => l(522))))),
              2227: () => a("default", "stackblur-canvas", [1, 2, 5, 0], (() => l.e(487).then((() => () => l(9487))))),
              4252: () => a("default", "lodash", [1, 4, 17, 21], (() => l.e(429).then((() => () => l(9429))))),
              6040: () => a("default", "gsap", [1, "workspace:*"], (() => l.e(149).then((() => () => l(3149))))),
              6717: () => a("default", "@rockstargames/locale-tools", [1, "workspace:*"], (() => Promise.all([l.e(66), l.e(524)]).then((() => () => l(4143))))),
              7377: () => a("default", "@react-three/fiber", [1, 7, 0, 0], (() => l.e(642).then((() => () => l(3642))))),
              8448: () => a("default", "@use-gesture/react", [1, 10, 2, 23], (() => l.e(844).then((() => () => l(2463))))),
              9779: () => a("default", "react-router-dom", [1, 6, 11, 2], (() => l.e(398).then((() => () => l(3398)))))
            },
            s = {
              37: [2037],
              403: [1403],
              493: [1874],
              598: [1410, 2227, 4252, 6040, 6717, 7377, 8448, 9779]
            },
            d = {};
          l.f.consumes = (e, t) => {
            l.o(s, e) && s[e].forEach((e => {
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
                  var s = o[e]();
                  s.then ? t.push(n[e] = s.then(r).catch(a)) : r(s)
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
            l.f.miniCss = (t, r) => {
              e[t] ? r.push(e[t]) : 0 !== e[t] && {
                598: 1,
                952: 1
              } [t] && r.push(e[t] = (e => new Promise(((t, r) => {
                var a = l.miniCssF(e),
                  n = l.p + a;
                if (((e, t) => {
                    for (var r = document.getElementsByTagName("link"), a = 0; a < r.length; a++) {
                      var n = (s = r[a]).getAttribute("data-href") || s.getAttribute("href");
                      if ("stylesheet" === s.rel && (n === e || n === t)) return s
                    }
                    var o = document.getElementsByTagName("style");
                    for (a = 0; a < o.length; a++) {
                      var s;
                      if ((n = (s = o[a]).getAttribute("data-href")) === e || n === t) return s
                    }
                  })(a, n)) return t();
                ((e, t, r, a, n) => {
                  var o = document.createElement("link");
                  o.rel = "stylesheet", o.type = "text/css", o.onerror = o.onload = r => {
                    if (o.onerror = o.onload = null, "load" === r.type) a();
                    else {
                      var s = r && ("load" === r.type ? "missing" : r.type),
                        d = r && r.target && r.target.href || t,
                        i = new Error("Loading CSS chunk " + e + " failed.\n(" + d + ")");
                      i.code = "CSS_CHUNK_LOAD_FAILED", i.type = s, i.request = d, o.parentNode && o.parentNode.removeChild(o), n(i)
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
          l.f.j = (t, r) => {
            var a = l.o(e, t) ? e[t] : void 0;
            if (0 !== a)
              if (a) r.push(a[2]);
              else if (/^(37|396|403|493)$/.test(t)) e[t] = 0;
            else {
              var n = new Promise(((r, n) => a = e[t] = [r, n]));
              r.push(a[2] = n);
              var o = l.p + l.u(t),
                s = new Error;
              l.l(o, (r => {
                if (l.o(e, t) && (0 !== (a = e[t]) && (e[t] = void 0), a)) {
                  var n = r && ("load" === r.type ? "missing" : r.type),
                    o = r && r.target && r.target.src;
                  s.message = "Loading chunk " + t + " failed.\n(" + n + ": " + o + ")", s.name = "ChunkLoadError", s.type = n, s.request = o, a[1](s)
                }
              }), "chunk-" + t, t)
            }
          };
          var t = (t, r) => {
              var a, n, o = r[0],
                s = r[1],
                d = r[2],
                i = 0;
              if (o.some((t => 0 !== e[t]))) {
                for (a in s) l.o(s, a) && (l.m[a] = s[a]);
                d && d(l)
              }
              for (t && t(r); i < o.length; i++) n = o[i], l.o(e, n) && e[n] && e[n][0](), e[n] = 0
            },
            r = self.webpackChunk_rockstargames_modules_gtao_license_plate = self.webpackChunk_rockstargames_modules_gtao_license_plate || [];
          r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
        })(), l(2160), l(4516)
      })())
    }
  }
}));