! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "82e3d884-e2a8-4371-9dfe-649d5ac93490", e._sentryDebugIdIdentifier = "sentry-dbid-82e3d884-e2a8-4371-9dfe-649d5ac93490")
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

        function f(e) {
          var t = l[e];
          if (void 0 !== t) return t.exports;
          var r = l[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return i[e].call(r.exports, r, r.exports, f), r.loaded = !0, r.exports
        }
        return f.m = i, f.c = l, f.y = t, f.amdO = {}, f.n = e => {
          var t = e && e.__esModule ? () => e.default : () => e;
          return f.d(t, {
            a: t
          }), t
        }, f.d = (e, t) => {
          for (var r in t) f.o(t, r) && !f.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: t[r]
          })
        }, f.f = {}, f.e = e => Promise.all(Object.keys(f.f).reduce(((t, r) => (f.f[r](e, t), t)), [])), f.u = e => "js/" + {
          24: "3091a206c731fe3c3114682b9dc0bd00",
          37: "697c094228efc68071ab486eabe80211",
          66: "0ddb7a3d66f230a5a059fd24f4796791",
          141: "e0aba28b4a167fd06a480518ba2544d2",
          143: "831e81ba37d28921241f68335aeee720",
          149: "a7670c1063e0d2b2e5057779f0040656",
          179: "35b02defe2864e10ab16e42b04e0e1ff",
          362: "44764072c31b655afda623c734f2e77e",
          380: "c6420e1745bf13d54cc6ff2747c89d85",
          386: "9a654d2a648bc0d8802330680e8793e8",
          398: "030f7177695a7b30050e2ab3a17d6e82",
          403: "0219be6d00c90780f3157851115f3f68",
          429: "16dae7a39027f6b9b2605974e4bcb4d0",
          487: "9bd080c0d4c046a07a854fb9264bc3df",
          493: "05956063d4fd2640a858d44161485d1c",
          522: "4613511e966bd49af668bf59954bdd37",
          524: "88471e02345f79bd4f5f161993accec6",
          533: "304c31a75ea9222e0b98c6ebce08334b",
          642: "87e1c03f006c60af284d511501d3e5c4",
          811: "85e06c903457caf79c2b9a81e3879f11",
          844: "2038784190e100bd5ceed078c4f936ce",
          852: "39d1761b240e87f9de15345013e34cf7"
        } [e] + ".js", f.miniCssF = e => "css/8c5cd3ca0402f262a66713a38ced642e.css", f.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), f.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), e = {}, o = "@rockstargames/modules-gtao-license-plate:", f.l = (t, r, a, n) => {
          if (e[t]) e[t].push(r);
          else {
            var d, s;
            if (void 0 !== a)
              for (var i = document.getElementsByTagName("script"), l = 0; l < i.length; l++) {
                var c = i[l];
                if (c.getAttribute("src") == t || c.getAttribute("data-webpack") == o + a) {
                  d = c;
                  break
                }
              }
            d || (s = !0, (d = document.createElement("script")).charset = "utf-8", d.timeout = 120, f.nc && d.setAttribute("nonce", f.nc), d.setAttribute("data-webpack", o + a), d.src = t), e[t] = [r];
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
        }, f.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, f.nmd = e => (e.paths = [], e.children || (e.children = []), e), d = {
          24: [207, 396, 2756, 2757, 8407],
          811: [2158]
        }, s = {
          207: ["default", "./index", 404],
          396: ["default", "./hooks", 2969],
          2158: ["default", "./providers", 2969],
          2756: ["default", "./index", 2969],
          2757: ["default", "./providers", 404],
          8407: ["default", "./index", 1024]
        }, f.f.remotes = (e, t) => {
          f.o(d, e) && d[e].forEach((e => {
            var r = f.R;
            r || (r = []);
            var a = s[e];
            if (!(r.indexOf(a) >= 0)) {
              if (r.push(a), a.p) return t.push(a.p);
              var n = t => {
                  t || (t = new Error("Container missing")), "string" == typeof t.message && (t.message += '\nwhile loading "' + a[1] + '" from ' + a[2]), f.m[e] = () => {
                    throw t
                  }, a.p = 0
                },
                o = (e, r, o, d, s, i) => {
                  try {
                    var l = e(r, o);
                    if (!l || !l.then) return s(l, d, i);
                    var f = l.then((e => s(e, d)), n);
                    if (!i) return f;
                    t.push(a.p = f)
                  } catch (e) {
                    n(e)
                  }
                },
                d = (e, t, n) => o(t.get, a[1], r, 0, i, n),
                i = t => {
                  a.p = 1, f.m[e] = e => {
                    e.exports = t()
                  }
                };
              o(f, a[2], 0, 0, ((e, t, r) => e ? o(f.I, a[0], 0, e, d, r) : n()), 1)
            }
          }))
        }, (() => {
          f.S = {};
          var e = {},
            t = {};
          f.I = (r, a) => {
            a || (a = []);
            var n = t[r];
            if (n || (n = t[r] = {}), !(a.indexOf(n) >= 0)) {
              if (a.push(n), e[r]) return e[r];
              f.o(f.S, r) || (f.S[r] = {});
              var o = f.S[r],
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
                    var n = f(e);
                    if (!n) return;
                    var o = e => e && e.init && e.init(f.S[r], a);
                    if (n.then) return l.push(n.then(o, t));
                    var d = o(n);
                    if (d && d.then) return l.push(d.catch(t))
                  } catch (e) {
                    t(e)
                  }
                },
                l = [];
              return "default" === r && (s("@react-spring/web", "9.7.3", (() => Promise.all([f.e(522), f.e(403), f.e(493)]).then((() => () => f(522))))), s("@react-three/fiber", "7.0.29", (() => Promise.all([f.e(642), f.e(403), f.e(37)]).then((() => () => f(3642))))), s("@rockstargames/locale-tools", "1.0.0", (() => Promise.all([f.e(66), f.e(403), f.e(143)]).then((() => () => f(4143))))), s("@use-gesture/react", "10.3.0", (() => Promise.all([f.e(844), f.e(403)]).then((() => () => f(2463))))), s("gsap", "0.0.0", (() => f.e(149).then((() => () => f(3149))))), s("lodash", "4.17.21", (() => f.e(429).then((() => () => f(9429))))), s("react-dom", "18.2.0", (() => Promise.all([f.e(533), f.e(403)]).then((() => () => f(7533))))), s("react-router-dom", "6.17.0", (() => Promise.all([f.e(398), f.e(403)]).then((() => () => f(3398))))), s("react", "18.2.0", (() => f.e(380).then((() => () => f(3380))))), s("stackblur-canvas", "2.6.0", (() => f.e(487).then((() => () => f(9487))))), s("three", "0.141.0", (() => f.e(141).then((() => () => f(4522))))), i(1024), i(404), i(2969)), l.length ? e[r] = Promise.all(l).then((() => e[r] = 1)) : e[r] = 1
            }
          }
        })(), (() => {
          var e;
          f.g.importScripts && (e = f.g.location + "");
          var t = f.g.document;
          if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
            var r = t.getElementsByTagName("script");
            if (r.length)
              for (var a = r.length - 1; a > -1 && (!e || !/^http(s?):/.test(e));) e = r[a--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), f.p = e
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
                  var l, f, c = s < r.length ? (typeof r[s])[0] : "";
                  if (d >= a.length || "o" == (f = (typeof(l = a[d]))[0])) return !i || ("u" == c ? s > n && !o : "" == c != o);
                  if ("u" == f) {
                    if (!i || "u" != c) return !1
                  } else if (i)
                    if (c == f)
                      if (s <= n) {
                        if (l != r[s]) return !1
                      } else {
                        if (o ? l > r[s] : l < r[s]) return !1;
                        l != r[s] && (i = !1)
                      }
                  else if ("s" != c && "n" != c) {
                    if (o || s <= n) return !1;
                    i = !1, s--
                  } else {
                    if (s <= n || f < c != o) return !1;
                    i = !1
                  } else "s" != c && "n" != c && (i = !1, s--)
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
              var o = f.I(t);
              return o && o.then ? o.then(e.bind(e, t, f.S[t], r, a, n)) : e(t, f.S[t], r, a, n)
            })(((e, t, a, n, o) => {
              var d = t && f.o(t, a) && r(t, a, n);
              return d ? (e => (e.loaded = 1, e.get()))(d) : o()
            })),
            n = {},
            o = {
              1403: () => a("default", "react", [1, 18, 2, 0], (() => f.e(380).then((() => () => f(3380))))),
              2037: () => a("default", "three", [4, 0, 141, 0], (() => f.e(141).then((() => () => f(4522))))),
              1874: () => a("default", "react-dom", [1, 18, 2, 0], (() => f.e(533).then((() => () => f(7533))))),
              1410: () => a("default", "@react-spring/web", [1, 9, 6, 1], (() => f.e(522).then((() => () => f(522))))),
              2227: () => a("default", "stackblur-canvas", [1, 2, 5, 0], (() => f.e(487).then((() => () => f(9487))))),
              4252: () => a("default", "lodash", [1, 4, 17, 21], (() => f.e(429).then((() => () => f(9429))))),
              6040: () => a("default", "gsap", [1, "workspace:*"], (() => f.e(149).then((() => () => f(3149))))),
              6717: () => a("default", "@rockstargames/locale-tools", [1, "workspace:*"], (() => Promise.all([f.e(66), f.e(524)]).then((() => () => f(4143))))),
              7377: () => a("default", "@react-three/fiber", [1, 7, 0, 0], (() => f.e(642).then((() => () => f(3642))))),
              8448: () => a("default", "@use-gesture/react", [1, 10, 2, 23], (() => f.e(844).then((() => () => f(2463))))),
              9779: () => a("default", "react-router-dom", [1, 6, 11, 2], (() => f.e(398).then((() => () => f(3398)))))
            },
            d = {
              24: [1410, 2227, 4252, 6040, 6717, 7377, 8448, 9779],
              37: [2037],
              403: [1403],
              493: [1874]
            },
            s = {};
          f.f.consumes = (e, t) => {
            f.o(d, e) && d[e].forEach((e => {
              if (f.o(n, e)) return t.push(n[e]);
              if (!s[e]) {
                var r = t => {
                  n[e] = 0, f.m[e] = r => {
                    delete f.c[e], r.exports = t()
                  }
                };
                s[e] = !0;
                var a = t => {
                  delete n[e], f.m[e] = r => {
                    throw delete f.c[e], t
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
            f.f.miniCss = (t, r) => {
              e[t] ? r.push(e[t]) : 0 !== e[t] && {
                24: 1
              } [t] && r.push(e[t] = (e => new Promise(((t, r) => {
                var a = f.miniCssF(e),
                  n = f.p + a;
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
          f.f.j = (t, r) => {
            var a = f.o(e, t) ? e[t] : void 0;
            if (0 !== a)
              if (a) r.push(a[2]);
              else if (/^(37|403|493)$/.test(t)) e[t] = 0;
            else {
              var n = new Promise(((r, n) => a = e[t] = [r, n]));
              r.push(a[2] = n);
              var o = f.p + f.u(t),
                d = new Error;
              f.l(o, (r => {
                if (f.o(e, t) && (0 !== (a = e[t]) && (e[t] = void 0), a)) {
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
                for (a in d) f.o(d, a) && (f.m[a] = d[a]);
                s && s(f)
              }
              for (t && t(r); i < o.length; i++) n = o[i], f.o(e, n) && e[n] && e[n][0](), e[n] = 0
            },
            r = self.webpackChunk_rockstargames_modules_gtao_license_plate = self.webpackChunk_rockstargames_modules_gtao_license_plate || [];
          r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
        })(), f(2160), f(4516)
      })())
    }
  }
}));