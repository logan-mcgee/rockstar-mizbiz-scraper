! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "2d691e69-837b-4438-8a34-d9a741a43597", e._sentryDebugIdIdentifier = "sentry-dbid-2d691e69-837b-4438-8a34-d9a741a43597")
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
        var e, d, s, f, i = {
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
                var d = a.slice(0, o + 1);
                return r.protocol + "//" + r.host + d
              };
              Number.isInteger
            },
            12564: (e, t, r) => {
              "use strict";
              var a = {
                  "./bootstrap": () => r.e(184).then((() => () => r(83184))),
                  "./index": () => Promise.all([r.e(20), r.e(664), r.e(364), r.e(61), r.e(176), r.e(224), r.e(712), r.e(880)]).then((() => () => r(61880)))
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
          20: "7177ff10a7a6a1b146e32c748b3b7b5f",
          61: "e25840debd432681ff6d6bb771c644be",
          92: "4b11e57ae01a8d3c68d5b64823d1df29",
          100: "672cada6bc7d033279fa82f8dfdc1cb1",
          128: "a78f5336eaed00a44420001826631d77",
          176: "1a46a5416720659d75d1ae76c86103cb",
          184: "1950d208bfac5c87a2430f8657be94bb",
          224: "e1cf52e2a56e4c7151f64316fd17a5ed",
          240: "fbbeeec243090048c6fd8cac6fb4654a",
          304: "6d48dc2a4ee62c318f99850bc82d3fb2",
          360: "22182aaeb6661bf4982395d3c991f9d7",
          364: "419b7e44a18512584e096e20ab1531fa",
          408: "fc99039e4a298e4c7cb1c4ec11405ff0",
          584: "475854e6f0f7bbc8a0711bc53737192e",
          639: "fe3b3f7335bce89422eb12bd6686fdab",
          664: "f169589ff7bf8ac54735873b8381390b",
          696: "7d19c75ee9f1f40e17f3fc9521334728",
          704: "fc5591a4180715ec34ac5dc717721302",
          712: "576a9e73248b6276e93522d106e34324",
          716: "2558e982ec1aa80d66db3243485fe4ed",
          718: "30ec5dab32baebab410eb33fcc94e432",
          720: "fffa9a669a8c3891c7e6a270a1c18b1a",
          724: "fa456de169a1e9a51871d887b646c631",
          784: "8bf2180800ec2ae60d3d716abf53da08",
          852: "cf33036eabee178cf798c97b1c414c70",
          880: "bae6ac209877a14fea6f039c8d9c5fe0",
          924: "99cf849da8106c328d57cd16efd990e1",
          936: "72eb11dab4cd92826d5204f9a07d9156"
        } [e] + ".js", c.miniCssF = e => "css/" + {
          639: "6d8923228026d5824698ebfad974da13",
          712: "a40b7b8094398aacdce77ff118448155",
          852: "1768fb2de23429c2eabb3e3a6b22658d",
          936: "99df8002ac4dfabc31414fcbef9c06c7"
        } [e] + ".css", c.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), c.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), e = {}, d = "@rockstargames/modules-gtao-license-plate:", c.l = (t, r, a, n) => {
          if (e[t]) e[t].push(r);
          else {
            var o, s;
            if (void 0 !== a)
              for (var f = document.getElementsByTagName("script"), i = 0; i < f.length; i++) {
                var l = f[i];
                if (l.getAttribute("src") == t || l.getAttribute("data-webpack") == d + a) {
                  o = l;
                  break
                }
              }
            o || (s = !0, (o = document.createElement("script")).charset = "utf-8", o.timeout = 120, c.nc && o.setAttribute("nonce", c.nc), o.setAttribute("data-webpack", d + a), o.src = t), e[t] = [r];
            var u = (r, a) => {
                o.onerror = o.onload = null, clearTimeout(b);
                var n = e[t];
                if (delete e[t], o.parentNode && o.parentNode.removeChild(o), n && n.forEach((e => e(a))), r) return r(a)
              },
              b = setTimeout(u.bind(null, void 0, {
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
          61: [3061],
          176: [33052, 42836, 45792],
          639: [77715],
          712: [42708],
          852: [1532, 1740, 28540, 45652, 73784, 95356]
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
          c.o(s, e) && s[e].forEach((e => {
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
                o = (e, r, o, d, s, f) => {
                  try {
                    var i = e(r, o);
                    if (!i || !i.then) return s(i, d, f);
                    var l = i.then((e => s(e, d)), n);
                    if (!f) return l;
                    t.push(a.p = l)
                  } catch (e) {
                    n(e)
                  }
                },
                d = (e, t, n) => o(t.get, a[1], r, 0, s, n),
                s = t => {
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
                f = e => {
                  var t = e => {
                    return t = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(t));
                    var t
                  };
                  try {
                    var n = c(e);
                    if (!n) return;
                    var o = e => e && e.init && e.init(c.S[r], a);
                    if (n.then) return i.push(n.then(o, t));
                    var d = o(n);
                    if (d && d.then) return i.push(d.catch(t))
                  } catch (e) {
                    t(e)
                  }
                },
                i = [];
              return "default" === r && (s("@react-spring/web", "9.7.3", (() => Promise.all([c.e(584), c.e(664), c.e(364)]).then((() => () => c(98584))))), s("@react-three/fiber", "7.0.29", (() => Promise.all([c.e(704), c.e(664), c.e(224)]).then((() => () => c(21704))))), s("@rockstargames/components", "1.14.0", (() => Promise.all([c.e(92), c.e(936), c.e(664), c.e(364), c.e(176), c.e(852), c.e(240)]).then((() => () => c(65596))))), s("@rockstargames/locale-tools", "1.0.0", (() => Promise.all([c.e(92), c.e(408), c.e(664), c.e(61), c.e(924)]).then((() => () => c(8304))))), s("@use-gesture/react", "10.3.0", (() => Promise.all([c.e(128), c.e(664)]).then((() => () => c(64128))))), s("gsap", "0.0.0", (() => c.e(720).then((() => () => c(77100))))), s("lodash", "4.17.21", (() => c.e(784).then((() => () => c(79784))))), s("react-dom", "18.2.0", (() => Promise.all([c.e(716), c.e(664)]).then((() => () => c(63716))))), s("react-router-dom", "6.17.0", (() => Promise.all([c.e(718), c.e(664)]).then((() => () => c(45718))))), s("react", "18.2.0", (() => c.e(100).then((() => () => c(99480))))), s("stackblur-canvas", "2.6.0", (() => c.e(696).then((() => () => c(49696))))), s("three", "0.141.0", (() => c.e(724).then((() => () => c(7724))))), f(9344), f(33864), f(81128), f(88428)), i.length ? e[r] = Promise.all(i).then((() => e[r] = 1)) : e[r] = 1
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
                for (var d = 0, s = 1, f = !0;; s++, d++) {
                  var i, l, c = s < r.length ? (typeof r[s])[0] : "";
                  if (d >= a.length || "o" == (l = (typeof(i = a[d]))[0])) return !f || ("u" == c ? s > n && !o : "" == c != o);
                  if ("u" == l) {
                    if (!f || "u" != c) return !1
                  } else if (f)
                    if (c == l)
                      if (s <= n) {
                        if (i != r[s]) return !1
                      } else {
                        if (o ? i > r[s] : i < r[s]) return !1;
                        i != r[s] && (f = !1)
                      }
                  else if ("s" != c && "n" != c) {
                    if (o || s <= n) return !1;
                    f = !1, s--
                  } else {
                    if (s <= n || l < c != o) return !1;
                    f = !1
                  } else "s" != c && "n" != c && (f = !1, s--)
                }
              }
              var u = [],
                b = u.pop.bind(u);
              for (d = 1; d < r.length; d++) {
                var p = r[d];
                u.push(1 == p ? b() | b() : 2 == p ? b() & b() : p ? t(p, a) : !b())
              }
              return !!b()
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
              51664: () => a("default", "react", [1, 18, 2, 0], (() => c.e(100).then((() => () => c(99480))))),
              77364: () => a("default", "react-dom", [1, 18, 2, 0], (() => c.e(716).then((() => () => c(63716))))),
              9860: () => a("default", "@rockstargames/components", [1, "workspace:*"], (() => Promise.all([c.e(92), c.e(936), c.e(852)]).then((() => () => c(65596))))),
              41272: () => a("default", "@rockstargames/locale-tools", [1, "workspace:*"], (() => Promise.all([c.e(92), c.e(408), c.e(61), c.e(304)]).then((() => () => c(8304))))),
              57013: () => a("default", "react-router-dom", [1, 6, 11, 2], (() => c.e(718).then((() => () => c(45718))))),
              67356: () => a("default", "gsap", [1, "workspace:*"], (() => c.e(720).then((() => () => c(77100))))),
              73660: () => a("default", "lodash", [1, 4, 17, 21], (() => c.e(784).then((() => () => c(79784))))),
              68224: () => a("default", "three", [4, 0, 141, 0], (() => c.e(724).then((() => () => c(7724))))),
              1328: () => a("default", "@react-three/fiber", [1, 7, 0, 0], (() => c.e(704).then((() => () => c(21704))))),
              6628: () => a("default", "stackblur-canvas", [1, 2, 5, 0], (() => c.e(696).then((() => () => c(49696))))),
              24372: () => a("default", "@react-spring/web", [1, 9, 6, 1], (() => c.e(584).then((() => () => c(98584))))),
              59641: () => a("default", "@use-gesture/react", [1, 10, 2, 23], (() => c.e(128).then((() => () => c(64128)))))
            },
            d = {
              176: [9860, 41272, 57013, 67356, 73660],
              224: [68224],
              364: [77364],
              664: [51664],
              712: [1328, 6628, 24372, 59641]
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
              656: 0
            };
            c.f.miniCss = (t, r) => {
              e[t] ? r.push(e[t]) : 0 !== e[t] && {
                639: 1,
                712: 1,
                852: 1,
                936: 1
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
                        f = new Error("Loading CSS chunk " + e + " failed.\n(" + s + ")");
                      f.code = "CSS_CHUNK_LOAD_FAILED", f.type = d, f.request = s, o.parentNode && o.parentNode.removeChild(o), n(f)
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
              else if (/^((22|36|66)4|176|61)$/.test(t)) e[t] = 0;
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
                f = 0;
              if (o.some((t => 0 !== e[t]))) {
                for (a in d) c.o(d, a) && (c.m[a] = d[a]);
                s && s(c)
              }
              for (t && t(r); f < o.length; f++) n = o[f], c.o(e, n) && e[n] && e[n][0](), e[n] = 0
            },
            r = self.webpackChunk_rockstargames_modules_gtao_license_plate = self.webpackChunk_rockstargames_modules_gtao_license_plate || [];
          r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
        })(), c.nc = void 0, c(93824), c(12564)
      })())
    }
  }
}));