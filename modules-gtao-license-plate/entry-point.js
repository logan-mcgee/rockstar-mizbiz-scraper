! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "e5e2939f-5365-4473-875a-8ece5506a551", e._sentryDebugIdIdentifier = "sentry-dbid-e5e2939f-5365-4473-875a-8ece5506a551")
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
}, System.register(["@rockstargames/graph-client", "@rockstargames/modules-core-sc-user", "@rockstargames/tina", "@rockstargames/utils"], (function(e, t) {
  var r = {},
    a = {},
    n = {},
    o = {};
  return Object.defineProperty(r, "__esModule", {
    value: !0
  }), Object.defineProperty(a, "__esModule", {
    value: !0
  }), Object.defineProperty(n, "__esModule", {
    value: !0
  }), Object.defineProperty(o, "__esModule", {
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
    }, function(e) {
      Object.keys(e).forEach((function(t) {
        o[t] = e[t]
      }))
    }],
    execute: function() {
      e((() => {
        var e, s, i, f, d = {
            54364: (e, t, r) => {
              (0, r(47284).G)(1)
            },
            47284: (e, t, r) => {
              const a = r(87984).Q;
              t.G = function(e) {
                if (e || (e = 1), !r.y.meta || !r.y.meta.url) throw console.error("__system_context__", r.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                r.p = a(r.y.meta.url, e)
              }
            },
            93824: (e, t, r) => {
              r(54364)
            },
            87984: (e, t, r) => {
              t.Q = function(e, t) {
                var r = document.createElement("a");
                r.href = e;
                for (var a = "/" === r.pathname[0] ? r.pathname : "/" + r.pathname, n = 0, o = a.length; n !== t && o >= 0;) "/" === a[--o] && n++;
                if (n !== t) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + t + ") is greater than the number of directories (" + n + ") in the URL path " + e);
                var s = a.slice(0, o + 1);
                return r.protocol + "//" + r.host + s
              };
              Number.isInteger
            },
            12564: (e, t, r) => {
              "use strict";
              var a = {
                  "./bootstrap": () => r.e(184).then((() => () => r(83184))),
                  "./index": () => Promise.all([r.e(20), r.e(664), r.e(364), r.e(112), r.e(224), r.e(212), r.e(880)]).then((() => () => r(61880)))
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
            33864: e => {
              "use strict";
              e.exports = r
            },
            81128: e => {
              "use strict";
              e.exports = a
            },
            88428: e => {
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
          var t = l[e];
          if (void 0 !== t) return t.exports;
          var r = l[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return d[e].call(r.exports, r, r.exports, c), r.loaded = !0, r.exports
        }
        return c.m = d, c.c = l, c.y = t, c.amdO = {}, c.n = e => {
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
          20: "ec9115463771ca82d7b4a5c24f6b4362",
          100: "6d75cdd6166a44a802629b1f3d9513e1",
          112: "4c272afabe80aecde64a1b87b1db3956",
          128: "ee1ab076c8ad0670a440c17afa5c5212",
          144: "e38b5f00220992ab4fd11024f56b02ea",
          184: "b267454b9440a6ebea79cfb6c6a8fbe2",
          212: "468dbb57027e83a9ba25ffccabe8ecfd",
          224: "e1cf52e2a56e4c7151f64316fd17a5ed",
          240: "9ebb28c19888b4ef5cd23d45522f5b90",
          268: "329c991925ea25f653462c15d7da37a6",
          360: "4238d92b5f57b8bf164db001a79e910e",
          364: "419b7e44a18512584e096e20ab1531fa",
          584: "4e21b886abaef49f9f3a60a9d171b97d",
          639: "6a8504eaf9401ebf1838d075939c2e23",
          664: "f169589ff7bf8ac54735873b8381390b",
          696: "37bc6f6addbc9fad33c52707738567bb",
          704: "4f948374333b948a50d641017473eb03",
          716: "bf6a4768ba205ca89c0bc7ab68e9ee09",
          718: "312744f16a6e770cf42a5267f2c091cf",
          720: "e1c9ef905e969d0f8f4fb1dd141a54cf",
          724: "4c06f27b8be0293e784638a53ccef0f7",
          784: "e9dd276753a2df80ba99d50c76ddd6a7",
          880: "6c299f7f6d4be080810ec14a6c624e83"
        } [e] + ".js", c.miniCssF = e => "css/" + {
          212: "0fe509c19253af693e9e7fcd6a0e105f",
          268: "dda8992d843d4953c537be6af0c3d5c2",
          639: "9a55b4db7e97b1594f1e4ce1a12bd651"
        } [e] + ".css", c.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), c.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), e = {}, s = "@rockstargames/modules-gtao-license-plate:", c.l = (t, r, a, n) => {
          if (e[t]) e[t].push(r);
          else {
            var o, i;
            if (void 0 !== a)
              for (var f = document.getElementsByTagName("script"), d = 0; d < f.length; d++) {
                var l = f[d];
                if (l.getAttribute("src") == t || l.getAttribute("data-webpack") == s + a) {
                  o = l;
                  break
                }
              }
            o || (i = !0, (o = document.createElement("script")).charset = "utf-8", o.timeout = 120, c.nc && o.setAttribute("nonce", c.nc), o.setAttribute("data-webpack", s + a), o.src = t), e[t] = [r];
            var u = (r, a) => {
                o.onerror = o.onload = null, clearTimeout(p);
                var n = e[t];
                if (delete e[t], o.parentNode && o.parentNode.removeChild(o), n && n.forEach((e => e(a))), r) return r(a)
              },
              p = setTimeout(u.bind(null, void 0, {
                type: "timeout",
                target: o
              }), 12e4);
            o.onerror = u.bind(null, o.onerror), o.onload = u.bind(null, o.onload), i && document.head.appendChild(o)
          }
        }, c.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, c.nmd = e => (e.paths = [], e.children || (e.children = []), e), i = {
          112: [3061, 33052, 42836, 45792],
          212: [42708],
          268: [1532, 1740, 28540, 45652, 73784, 95356],
          639: [77715]
        }, f = {
          1532: ["default", "./operations/queries", 33864],
          1740: ["default", "./index", 88428],
          3061: ["default", "./hooks", 9344],
          28540: ["default", "./operations/fragments/paging.graphql", 33864],
          33052: ["default", "./index", 33864],
          42708: ["default", "./providers", 81128],
          42836: ["default", "./index", 81128],
          45652: ["default", "./helpers/uploads", 88428],
          45792: ["default", "./index", 9344],
          73784: ["default", "./operations/fragments/newswire-post.graphql", 33864],
          77715: ["default", "./providers", 9344],
          95356: ["default", "./helpers", 88428]
        }, c.f.remotes = (e, t) => {
          c.o(i, e) && i[e].forEach((e => {
            var r = c.R;
            r || (r = []);
            var a = f[e];
            if (!(r.indexOf(a) >= 0)) {
              if (r.push(a), a.p) return t.push(a.p);
              var n = t => {
                  t || (t = new Error("Container missing")), "string" == typeof t.message && (t.message += '\nwhile loading "' + a[1] + '" from ' + a[2]), c.m[e] = () => {
                    throw t
                  }, a.p = 0
                },
                o = (e, r, o, s, i, f) => {
                  try {
                    var d = e(r, o);
                    if (!d || !d.then) return i(d, s, f);
                    var l = d.then((e => i(e, s)), n);
                    if (!f) return l;
                    t.push(a.p = l)
                  } catch (e) {
                    n(e)
                  }
                },
                s = (e, t, n) => o(t.get, a[1], r, 0, i, n),
                i = t => {
                  a.p = 1, c.m[e] = e => {
                    e.exports = t()
                  }
                };
              o(c, a[2], 0, 0, ((e, t, r) => e ? o(c.I, a[0], 0, e, s, r) : n()), 1)
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
                s = "@rockstargames/modules-gtao-license-plate",
                i = (e, t, r, a) => {
                  var n = o[e] = o[e] || {},
                    i = n[t];
                  (!i || !i.loaded && (!a != !i.eager ? a : s > i.from)) && (n[t] = {
                    get: r,
                    from: s,
                    eager: !!a
                  })
                },
                f = e => {
                  var t = e => {
                    return t = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(t));
                    var t
                  };
                  try {
                    var n = c(e);
                    if (!n) return;
                    var o = e => e && e.init && e.init(c.S[r], a);
                    if (n.then) return d.push(n.then(o, t));
                    var s = o(n);
                    if (s && s.then) return d.push(s.catch(t))
                  } catch (e) {
                    t(e)
                  }
                },
                d = [];
              return "default" === r && (i("@react-spring/web", "9.7.3", (() => Promise.all([c.e(584), c.e(664), c.e(364)]).then((() => () => c(98584))))), i("@react-three/fiber", "7.0.29", (() => Promise.all([c.e(704), c.e(664), c.e(224)]).then((() => () => c(21704))))), i("@rockstargames/components", "1.14.0", (() => Promise.all([c.e(144), c.e(664), c.e(364), c.e(112), c.e(268), c.e(240)]).then((() => () => c(19360))))), i("@use-gesture/react", "10.3.0", (() => Promise.all([c.e(128), c.e(664)]).then((() => () => c(64128))))), i("gsap", "0.0.0", (() => c.e(720).then((() => () => c(77100))))), i("lodash", "4.17.21", (() => c.e(784).then((() => () => c(79784))))), i("react-dom", "18.2.0", (() => Promise.all([c.e(716), c.e(664)]).then((() => () => c(63716))))), i("react-router-dom", "6.17.0", (() => Promise.all([c.e(718), c.e(664)]).then((() => () => c(45718))))), i("react", "18.2.0", (() => c.e(100).then((() => () => c(99480))))), i("stackblur-canvas", "2.6.0", (() => c.e(696).then((() => () => c(49696))))), i("three", "0.141.0", (() => c.e(724).then((() => () => c(7724))))), f(33864), f(81128), f(9344), f(88428)), d.length ? e[r] = Promise.all(d).then((() => e[r] = 1)) : e[r] = 1
            }
          }
        })(), (() => {
          var e;
          c.g.importScripts && (e = c.g.location + "");
          var t = c.g.document;
          if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
            var r = t.getElementsByTagName("script");
            if (r.length)
              for (var a = r.length - 1; a > -1 && !e;) e = r[a--].src
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
                for (var s = 0, i = 1, f = !0;; i++, s++) {
                  var d, l, c = i < r.length ? (typeof r[i])[0] : "";
                  if (s >= a.length || "o" == (l = (typeof(d = a[s]))[0])) return !f || ("u" == c ? i > n && !o : "" == c != o);
                  if ("u" == l) {
                    if (!f || "u" != c) return !1
                  } else if (f)
                    if (c == l)
                      if (i <= n) {
                        if (d != r[i]) return !1
                      } else {
                        if (o ? d > r[i] : d < r[i]) return !1;
                        d != r[i] && (f = !1)
                      }
                  else if ("s" != c && "n" != c) {
                    if (o || i <= n) return !1;
                    f = !1, i--
                  } else {
                    if (i <= n || l < c != o) return !1;
                    f = !1
                  } else "s" != c && "n" != c && (f = !1, i--)
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
                    i = (typeof s)[0];
                  if (o != i) return "o" == o && "n" == i || "s" == i || "u" == o;
                  if ("o" != o && "u" != o && n != s) return n < s;
                  a++
                }
              })(r, a) ? r : a), 0)) && o[a]
            },
            a = (e => function(t, r, a, n) {
              var o = c.I(t);
              return o && o.then ? o.then(e.bind(e, t, c.S[t], r, a, n)) : e(t, c.S[t], r, a, n)
            })(((e, t, a, n, o) => {
              var s = t && c.o(t, a) && r(t, a, n);
              return s ? (e => (e.loaded = 1, e.get()))(s) : o()
            })),
            n = {},
            o = {
              51664: () => a("default", "react", [1, 18, 2, 0], (() => c.e(100).then((() => () => c(99480))))),
              77364: () => a("default", "react-dom", [1, 18, 2, 0], (() => c.e(716).then((() => () => c(63716))))),
              9860: () => a("default", "@rockstargames/components", [1, "workspace:*"], (() => Promise.all([c.e(144), c.e(268)]).then((() => () => c(19360))))),
              57013: () => a("default", "react-router-dom", [1, 6, 11, 2], (() => c.e(718).then((() => () => c(45718))))),
              67356: () => a("default", "gsap", [1, "workspace:*"], (() => c.e(720).then((() => () => c(77100))))),
              73660: () => a("default", "lodash", [1, 4, 17, 21], (() => c.e(784).then((() => () => c(79784))))),
              68224: () => a("default", "three", [4, 0, 141, 0], (() => c.e(724).then((() => () => c(7724))))),
              1328: () => a("default", "@react-three/fiber", [1, 7, 0, 0], (() => c.e(704).then((() => () => c(21704))))),
              6628: () => a("default", "stackblur-canvas", [1, 2, 5, 0], (() => c.e(696).then((() => () => c(49696))))),
              24372: () => a("default", "@react-spring/web", [1, 9, 6, 1], (() => c.e(584).then((() => () => c(98584))))),
              59641: () => a("default", "@use-gesture/react", [1, 10, 2, 23], (() => c.e(128).then((() => () => c(64128)))))
            },
            s = {
              112: [9860, 57013, 67356, 73660],
              212: [1328, 6628, 24372, 59641],
              224: [68224],
              364: [77364],
              664: [51664]
            },
            i = {};
          c.f.consumes = (e, t) => {
            c.o(s, e) && s[e].forEach((e => {
              if (c.o(n, e)) return t.push(n[e]);
              if (!i[e]) {
                var r = t => {
                  n[e] = 0, c.m[e] = r => {
                    delete c.c[e], r.exports = t()
                  }
                };
                i[e] = !0;
                var a = t => {
                  delete n[e], c.m[e] = r => {
                    throw delete c.c[e], t
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
              656: 0
            };
            c.f.miniCss = (t, r) => {
              e[t] ? r.push(e[t]) : 0 !== e[t] && {
                212: 1,
                268: 1,
                639: 1
              } [t] && r.push(e[t] = (e => new Promise(((t, r) => {
                var a = c.miniCssF(e),
                  n = c.p + a;
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
                        i = r && r.target && r.target.href || t,
                        f = new Error("Loading CSS chunk " + e + " failed.\n(" + i + ")");
                      f.code = "CSS_CHUNK_LOAD_FAILED", f.type = s, f.request = i, o.parentNode && o.parentNode.removeChild(o), n(f)
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
            656: 0
          };
          c.f.j = (t, r) => {
            var a = c.o(e, t) ? e[t] : void 0;
            if (0 !== a)
              if (a) r.push(a[2]);
              else if (/^((22|36|66)4|112)$/.test(t)) e[t] = 0;
            else {
              var n = new Promise(((r, n) => a = e[t] = [r, n]));
              r.push(a[2] = n);
              var o = c.p + c.u(t),
                s = new Error;
              c.l(o, (r => {
                if (c.o(e, t) && (0 !== (a = e[t]) && (e[t] = void 0), a)) {
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
                i = r[2],
                f = 0;
              if (o.some((t => 0 !== e[t]))) {
                for (a in s) c.o(s, a) && (c.m[a] = s[a]);
                i && i(c)
              }
              for (t && t(r); f < o.length; f++) n = o[f], c.o(e, n) && e[n] && e[n][0](), e[n] = 0
            },
            r = self.webpackChunk_rockstargames_modules_gtao_license_plate = self.webpackChunk_rockstargames_modules_gtao_license_plate || [];
          r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
        })(), c(93824), c(12564)
      })())
    }
  }
}));