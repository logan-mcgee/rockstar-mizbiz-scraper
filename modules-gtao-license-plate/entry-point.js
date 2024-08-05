! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "2dbc7588-6cfa-4d30-a15d-bc7b97d77730", e._sentryDebugIdIdentifier = "sentry-dbid-2dbc7588-6cfa-4d30-a15d-bc7b97d77730")
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
                  "./index": () => Promise.all([r.e(973), r.e(403), r.e(37), r.e(493), r.e(396), r.e(598), r.e(179)]).then((() => () => r(8179)))
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
          c = {};

        function l(e) {
          var t = c[e];
          if (void 0 !== t) return t.exports;
          var r = c[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return i[e].call(r.exports, r, r.exports, l), r.loaded = !0, r.exports
        }
        return l.m = i, l.c = c, l.y = t, l.amdO = {}, l.n = e => {
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
          66: "21012316a0942b222cb9a1a749a44f5c",
          141: "983407c8a43d24b8a36055b8a3b2d5ad",
          143: "0595897446275664f54196786697fd77",
          149: "0049772ff3a2a12e00994a1ad1e2cf33",
          179: "160961ad582e96106718124933488c96",
          362: "b197c9123ad66dd606e1d23ac1591ab3",
          380: "1e7a1fa789752c0fbc0bac4d80a5af98",
          396: "22e5576056f71cd6d709a18fa4dc0d7c",
          398: "ca909b1330f0b0b85163affb98bec9e4",
          403: "0219be6d00c90780f3157851115f3f68",
          429: "e771396334191cf9b10331aeab24a64a",
          487: "a8e41d6046012d8d0a60e0143f49f0e3",
          493: "05956063d4fd2640a858d44161485d1c",
          522: "b9d220e6648ccd0dff54b5d050d08c2c",
          524: "8ef1411f79f129ca7b1a490b0c9ac504",
          533: "946f59fc0f6c865a524fc85880ba3dac",
          598: "3eaeb70bef8c605e7fd71bb1c0bd7485",
          642: "0c9c6dafc348a9bc04b8247699caffb5",
          844: "67e47b239566d385374dd039dfc96996",
          852: "473df44c4dc4acfe5358bb4236294bc9",
          952: "c2f32024b1be3604c4ba0473b5763548",
          973: "aaf75bc2ff9b35f232d4118503ca567f"
        } [e] + ".js", l.miniCssF = e => "css/" + {
          598: "b04a67fc1bb02c15858de372fb04eada",
          952: "d561f048abcf0bbf2c58934c1fd1c755"
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
            var d, s;
            if (void 0 !== a)
              for (var i = document.getElementsByTagName("script"), c = 0; c < i.length; c++) {
                var f = i[c];
                if (f.getAttribute("src") == t || f.getAttribute("data-webpack") == o + a) {
                  d = f;
                  break
                }
              }
            d || (s = !0, (d = document.createElement("script")).charset = "utf-8", d.timeout = 120, l.nc && d.setAttribute("nonce", l.nc), d.setAttribute("data-webpack", o + a), d.src = t), e[t] = [r];
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
        }, l.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, l.nmd = e => (e.paths = [], e.children || (e.children = []), e), d = {
          396: [396],
          598: [207, 2756, 2757, 8407],
          952: [2158]
        }, s = {
          207: ["default", "./index", 404],
          396: ["default", "./hooks", 2969],
          2158: ["default", "./providers", 2969],
          2756: ["default", "./index", 2969],
          2757: ["default", "./providers", 404],
          8407: ["default", "./index", 1024]
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
                o = (e, r, o, d, s, i) => {
                  try {
                    var c = e(r, o);
                    if (!c || !c.then) return s(c, d, i);
                    var l = c.then((e => s(e, d)), n);
                    if (!i) return l;
                    t.push(a.p = l)
                  } catch (e) {
                    n(e)
                  }
                },
                d = (e, t, n) => o(t.get, a[1], r, 0, i, n),
                i = t => {
                  a.p = 1, l.m[e] = e => {
                    e.exports = t()
                  }
                };
              o(l, a[2], 0, 0, ((e, t, r) => e ? o(l.I, a[0], 0, e, d, r) : n()), 1)
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
                    var n = l(e);
                    if (!n) return;
                    var o = e => e && e.init && e.init(l.S[r], a);
                    if (n.then) return c.push(n.then(o, t));
                    var d = o(n);
                    if (d && d.then) return c.push(d.catch(t))
                  } catch (e) {
                    t(e)
                  }
                },
                c = [];
              return "default" === r && (s("@react-spring/web", "9.7.3", (() => Promise.all([l.e(522), l.e(403), l.e(493)]).then((() => () => l(522))))), s("@react-three/fiber", "7.0.29", (() => Promise.all([l.e(642), l.e(403), l.e(37)]).then((() => () => l(3642))))), s("@rockstargames/locale-tools", "1.0.0", (() => Promise.all([l.e(66), l.e(403), l.e(396), l.e(143)]).then((() => () => l(4143))))), s("@use-gesture/react", "10.3.0", (() => Promise.all([l.e(844), l.e(403)]).then((() => () => l(2463))))), s("gsap", "0.0.0", (() => l.e(149).then((() => () => l(3149))))), s("lodash", "4.17.21", (() => l.e(429).then((() => () => l(9429))))), s("react-dom", "18.2.0", (() => Promise.all([l.e(533), l.e(403)]).then((() => () => l(7533))))), s("react-router-dom", "6.17.0", (() => Promise.all([l.e(398), l.e(403)]).then((() => () => l(3398))))), s("react", "18.2.0", (() => l.e(380).then((() => () => l(3380))))), s("stackblur-canvas", "2.6.0", (() => l.e(487).then((() => () => l(9487))))), s("three", "0.141.0", (() => l.e(141).then((() => () => l(4522))))), i(2969), i(1024), i(404)), c.length ? e[r] = Promise.all(c).then((() => e[r] = 1)) : e[r] = 1
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
                for (var d = 0, s = 1, i = !0;; s++, d++) {
                  var c, l, f = s < r.length ? (typeof r[s])[0] : "";
                  if (d >= a.length || "o" == (l = (typeof(c = a[d]))[0])) return !i || ("u" == f ? s > n && !o : "" == f != o);
                  if ("u" == l) {
                    if (!i || "u" != f) return !1
                  } else if (i)
                    if (f == l)
                      if (s <= n) {
                        if (c != r[s]) return !1
                      } else {
                        if (o ? c > r[s] : c < r[s]) return !1;
                        c != r[s] && (i = !1)
                      }
                  else if ("s" != f && "n" != f) {
                    if (o || s <= n) return !1;
                    i = !1, s--
                  } else {
                    if (s <= n || l < f != o) return !1;
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
              var o = l.I(t);
              return o && o.then ? o.then(e.bind(e, t, l.S[t], r, a, n)) : e(t, l.S[t], r, a, n)
            })(((e, t, a, n, o) => {
              var d = t && l.o(t, a) && r(t, a, n);
              return d ? (e => (e.loaded = 1, e.get()))(d) : o()
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
            d = {
              37: [2037],
              403: [1403],
              493: [1874],
              598: [1410, 2227, 4252, 6040, 6717, 7377, 8448, 9779]
            },
            s = {};
          l.f.consumes = (e, t) => {
            l.o(d, e) && d[e].forEach((e => {
              if (l.o(n, e)) return t.push(n[e]);
              if (!s[e]) {
                var r = t => {
                  n[e] = 0, l.m[e] = r => {
                    delete l.c[e], r.exports = t()
                  }
                };
                s[e] = !0;
                var a = t => {
                  delete n[e], l.m[e] = r => {
                    throw delete l.c[e], t
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
            l.f.miniCss = (t, r) => {
              e[t] ? r.push(e[t]) : 0 !== e[t] && {
                598: 1,
                952: 1
              } [t] && r.push(e[t] = (e => new Promise(((t, r) => {
                var a = l.miniCssF(e),
                  n = l.p + a;
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
          l.f.j = (t, r) => {
            var a = l.o(e, t) ? e[t] : void 0;
            if (0 !== a)
              if (a) r.push(a[2]);
              else if (/^(37|396|403|493)$/.test(t)) e[t] = 0;
            else {
              var n = new Promise(((r, n) => a = e[t] = [r, n]));
              r.push(a[2] = n);
              var o = l.p + l.u(t),
                d = new Error;
              l.l(o, (r => {
                if (l.o(e, t) && (0 !== (a = e[t]) && (e[t] = void 0), a)) {
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
                for (a in d) l.o(d, a) && (l.m[a] = d[a]);
                s && s(l)
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