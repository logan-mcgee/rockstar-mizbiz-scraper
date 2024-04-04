! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "88f1374e-6a2f-4b05-ae0f-45d8fb2c0913", e._sentryDebugIdIdentifier = "sentry-dbid-88f1374e-6a2f-4b05-ae0f-45d8fb2c0913")
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
        var e, s, f, i, d = {
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
                  "./bootstrap": () => r.e(804).then((() => () => r(83184))),
                  "./index": () => Promise.all([r.e(20), r.e(664), r.e(320), r.e(606), r.e(296), r.e(212), r.e(880)]).then((() => () => r(61880)))
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
          20: "3e9fdda910e860246a640083841b88f4",
          100: "a1ce8e1cb08c44f3ef4a221a58865ccd",
          128: "d6d6075ac7edda082b858842e192827b",
          168: "855a654623f84d22fc2ae0b04c57bc37",
          184: "487e58ce51208df32b2a0ecc9dc88f47",
          212: "2707849e3467640275fa65369dc2e691",
          220: "33ee046af6536832323094f3b58bd706",
          224: "eada8c0c858d97c798709df0ae5e3d06",
          240: "cde803d816968a2ef385e76eb3fdea56",
          296: "b466be9597f36d9f59ee569690b6a1c2",
          320: "06d7a518ac16bb8b0333a5338c295a3c",
          584: "8d1d1da83e2911740adbafafa4177858",
          606: "d8d797a0a7f718df9ee6a8534775cb1d",
          639: "fbcd975a758e088782a8eb1606d4bb1f",
          664: "f169589ff7bf8ac54735873b8381390b",
          668: "94c073202b1b03abe4cc2475064da08e",
          696: "2b2ae9254c824f4b733f46268fd86948",
          704: "a2ccb9a7b417122fd1b943c3a980e432",
          716: "efaa41736edfc8c5df41c2fade4828df",
          720: "bc227daee61e85b2284e2f9d6d801843",
          724: "60faf4e23adb156f0eff07175a60edbb",
          784: "f9fd7e3f98ba1a5c3e9ff9ba5c5f05da",
          804: "af64e64141a32e51a55da49db1e90348",
          848: "c9cb83a16229cdb193737b99c33f41b9",
          874: "93392bf2a3304d0c81b497da924a6139",
          880: "ed567e2c6d4880c0e55a87fbf14b244f"
        } [e] + ".js", c.miniCssF = e => "css/" + {
          184: "a38e9e0c589659d66cb9ebf3ec9e0a99",
          212: "01a119e3602ce0e220e6ea618fa74452",
          639: "ef93f66a1e639fd1146c94624dd801a8"
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
            var o, f;
            if (void 0 !== a)
              for (var i = document.getElementsByTagName("script"), d = 0; d < i.length; d++) {
                var l = i[d];
                if (l.getAttribute("src") == t || l.getAttribute("data-webpack") == s + a) {
                  o = l;
                  break
                }
              }
            o || (f = !0, (o = document.createElement("script")).charset = "utf-8", o.timeout = 120, c.nc && o.setAttribute("nonce", c.nc), o.setAttribute("data-webpack", s + a), o.src = t), e[t] = [r];
            var u = (r, a) => {
                o.onerror = o.onload = null, clearTimeout(h);
                var n = e[t];
                if (delete e[t], o.parentNode && o.parentNode.removeChild(o), n && n.forEach((e => e(a))), r) return r(a)
              },
              h = setTimeout(u.bind(null, void 0, {
                type: "timeout",
                target: o
              }), 12e4);
            o.onerror = u.bind(null, o.onerror), o.onload = u.bind(null, o.onload), f && document.head.appendChild(o)
          }
        }, c.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, c.nmd = e => (e.paths = [], e.children || (e.children = []), e), f = {
          184: [1532, 1740, 28540, 45652, 73784, 95356],
          212: [42708],
          320: [3061, 33052, 42836, 45792],
          639: [77715]
        }, i = {
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
          c.o(f, e) && f[e].forEach((e => {
            var r = c.R;
            r || (r = []);
            var a = i[e];
            if (!(r.indexOf(a) >= 0)) {
              if (r.push(a), a.p) return t.push(a.p);
              var n = t => {
                  t || (t = new Error("Container missing")), "string" == typeof t.message && (t.message += '\nwhile loading "' + a[1] + '" from ' + a[2]), c.m[e] = () => {
                    throw t
                  }, a.p = 0
                },
                o = (e, r, o, s, f, i) => {
                  try {
                    var d = e(r, o);
                    if (!d || !d.then) return f(d, s, i);
                    var l = d.then((e => f(e, s)), n);
                    if (!i) return l;
                    t.push(a.p = l)
                  } catch (e) {
                    n(e)
                  }
                },
                s = (e, t, n) => o(t.get, a[1], r, 0, f, n),
                f = t => {
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
                f = (e, t, r, a) => {
                  var n = o[e] = o[e] || {},
                    f = n[t];
                  (!f || !f.loaded && (!a != !f.eager ? a : s > f.from)) && (n[t] = {
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
              return "default" === r && (f("@react-spring/web", "9.7.3", (() => Promise.all([c.e(584), c.e(664), c.e(296)]).then((() => () => c(98584))))), f("@react-three/fiber", "7.0.29", (() => Promise.all([c.e(704), c.e(664), c.e(606)]).then((() => () => c(21704))))), f("@rockstargames/components", "1.14.0", (() => Promise.all([c.e(220), c.e(664), c.e(320), c.e(184), c.e(240)]).then((() => () => c(57212))))), f("@use-gesture/react", "10.3.0", (() => Promise.all([c.e(128), c.e(664)]).then((() => () => c(64128))))), f("gsap", "0.0.0", (() => c.e(720).then((() => () => c(77100))))), f("lodash", "4.17.21", (() => c.e(784).then((() => () => c(79784))))), f("react-dom", "18.2.0", (() => Promise.all([c.e(848), c.e(664)]).then((() => () => c(30848))))), f("react-dom", "18.2.0", (() => Promise.all([c.e(716), c.e(664)]).then((() => () => c(63716))))), f("react-router-dom", "6.17.0", (() => Promise.all([c.e(168), c.e(668), c.e(664)]).then((() => () => c(69668))))), f("react-router-dom", "6.17.0", (() => Promise.all([c.e(168), c.e(874), c.e(664)]).then((() => () => c(11874))))), f("react", "18.2.0", (() => c.e(100).then((() => () => c(99480))))), f("stackblur-canvas", "2.6.0", (() => c.e(696).then((() => () => c(49696))))), f("three", "0.141.0", (() => c.e(724).then((() => () => c(7724))))), i(33864), i(81128), i(9344), i(88428)), d.length ? e[r] = Promise.all(d).then((() => e[r] = 1)) : e[r] = 1
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
                for (var s = 0, f = 1, i = !0;; f++, s++) {
                  var d, l, c = f < r.length ? (typeof r[f])[0] : "";
                  if (s >= a.length || "o" == (l = (typeof(d = a[s]))[0])) return !i || ("u" == c ? f > n && !o : "" == c != o);
                  if ("u" == l) {
                    if (!i || "u" != c) return !1
                  } else if (i)
                    if (c == l)
                      if (f <= n) {
                        if (d != r[f]) return !1
                      } else {
                        if (o ? d > r[f] : d < r[f]) return !1;
                        d != r[f] && (i = !1)
                      }
                  else if ("s" != c && "n" != c) {
                    if (o || f <= n) return !1;
                    i = !1, f--
                  } else {
                    if (f <= n || l < c != o) return !1;
                    i = !1
                  } else "s" != c && "n" != c && (i = !1, f--)
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
                    f = (typeof s)[0];
                  if (o != f) return "o" == o && "n" == f || "s" == f || "u" == o;
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
              9860: () => a("default", "@rockstargames/components", [1, "workspace:*"], (() => Promise.all([c.e(220), c.e(184)]).then((() => () => c(57212))))),
              73660: () => a("default", "lodash", [1, 4, 17, 21], (() => c.e(784).then((() => () => c(79784))))),
              68224: () => a("default", "three", [4, 0, 141, 0], (() => c.e(724).then((() => () => c(7724))))),
              2296: () => a("default", "react-dom", [1, 18, 2, 0], (() => c.e(848).then((() => () => c(30848))))),
              1328: () => a("default", "@react-three/fiber", [1, 7, 0, 0], (() => c.e(704).then((() => () => c(21704))))),
              6628: () => a("default", "stackblur-canvas", [1, 2, 5, 0], (() => c.e(696).then((() => () => c(49696))))),
              6936: () => a("default", "react-router-dom", [1, 6, 11, 2], (() => Promise.all([c.e(168), c.e(874)]).then((() => () => c(11874))))),
              24372: () => a("default", "@react-spring/web", [1, 9, 6, 1], (() => c.e(584).then((() => () => c(98584))))),
              59641: () => a("default", "@use-gesture/react", [1, 10, 2, 23], (() => c.e(128).then((() => () => c(64128))))),
              67356: () => a("default", "gsap", [1, "workspace:*"], (() => c.e(720).then((() => () => c(77100))))),
              57013: () => a("default", "react-router-dom", [1, 6, 11, 2], (() => Promise.all([c.e(168), c.e(668)]).then((() => () => c(69668))))),
              77364: () => a("default", "react-dom", [1, 18, 2, 0], (() => c.e(716).then((() => () => c(63716)))))
            },
            s = {
              184: [57013, 77364],
              212: [1328, 6628, 6936, 24372, 59641, 67356],
              296: [2296],
              320: [9860, 73660],
              606: [68224],
              664: [51664]
            },
            f = {};
          c.f.consumes = (e, t) => {
            c.o(s, e) && s[e].forEach((e => {
              if (c.o(n, e)) return t.push(n[e]);
              if (!f[e]) {
                var r = t => {
                  n[e] = 0, c.m[e] = r => {
                    delete c.c[e], r.exports = t()
                  }
                };
                f[e] = !0;
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
                184: 1,
                212: 1,
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
                        f = r && r.target && r.target.href || t,
                        i = new Error("Loading CSS chunk " + e + " failed.\n(" + f + ")");
                      i.code = "CSS_CHUNK_LOAD_FAILED", i.type = s, i.request = f, o.parentNode && o.parentNode.removeChild(o), n(i)
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
              else if (/^(296|320|606|664)$/.test(t)) e[t] = 0;
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
                f = r[2],
                i = 0;
              if (o.some((t => 0 !== e[t]))) {
                for (a in s) c.o(s, a) && (c.m[a] = s[a]);
                f && f(c)
              }
              for (t && t(r); i < o.length; i++) n = o[i], c.o(e, n) && e[n] && e[n][0](), e[n] = 0
            },
            r = self.webpackChunk_rockstargames_modules_gtao_license_plate = self.webpackChunk_rockstargames_modules_gtao_license_plate || [];
          r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
        })(), c(93824), c(12564)
      })())
    }
  }
}));