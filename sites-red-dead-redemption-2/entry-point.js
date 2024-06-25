! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "2d46781d-14cf-437d-8873-13352c483483", e._sentryDebugIdIdentifier = "sentry-dbid-2d46781d-14cf-437d-8873-13352c483483")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-red-dead-redemption-2",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register(["@rockstargames/graph-client", "@rockstargames/modules-core-sc-user", "@rockstargames/modules-core-videoplayer", "@rockstargames/tina", "@rockstargames/utils"], (function(e, t) {
  var r = {},
    a = {},
    n = {},
    o = {},
    d = {};
  return Object.defineProperty(r, "__esModule", {
    value: !0
  }), Object.defineProperty(a, "__esModule", {
    value: !0
  }), Object.defineProperty(n, "__esModule", {
    value: !0
  }), Object.defineProperty(o, "__esModule", {
    value: !0
  }), Object.defineProperty(d, "__esModule", {
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
    }, function(e) {
      Object.keys(e).forEach((function(t) {
        d[t] = e[t]
      }))
    }],
    execute: function() {
      e((() => {
        var e, s, i, f, l = {
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
            47461: (e, t, r) => {
              "use strict";
              var a = {
                  "./index": () => Promise.all([r.e(664), r.e(792), r.e(0), r.e(108)]).then((() => () => r(29108)))
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
            14472: e => {
              "use strict";
              e.exports = n
            },
            88428: e => {
              "use strict";
              e.exports = o
            },
            9344: e => {
              "use strict";
              e.exports = d
            }
          },
          c = {};

        function u(e) {
          var t = c[e];
          if (void 0 !== t) return t.exports;
          var r = c[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return l[e].call(r.exports, r, r.exports, u), r.loaded = !0, r.exports
        }
        return u.m = l, u.c = c, u.y = t, u.amdO = {}, u.n = e => {
          var t = e && e.__esModule ? () => e.default : () => e;
          return u.d(t, {
            a: t
          }), t
        }, u.d = (e, t) => {
          for (var r in t) u.o(t, r) && !u.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: t[r]
          })
        }, u.f = {}, u.e = e => Promise.all(Object.keys(u.f).reduce(((t, r) => (u.f[r](e, t), t)), [])), u.u = e => "js/" + {
          0: "3379436ffe3e7f3ad4b5809d6cf96070",
          61: "84da87f19fae4033e1b14e81559a7d6c",
          92: "39dd731d4ea2800a2ce81d45ad9a5814",
          100: "f438033b39af69a9b4b15180e0127bfc",
          108: "b23726398d4abcc5337be3a220ff9675",
          240: "ac761e74c2d7ccba9cdb408787909248",
          304: "1a7dcb7872cd94ea69bd786438362e95",
          408: "f5bf21373e523542e38f5729a631387f",
          440: "114dbd5799666a279efde38c113c9d99",
          452: "9e39d5aef3e2ae4a47e871fadba48f8f",
          516: "3bcae1d282ce2f7bb9933307e1e15b9a",
          664: "6b71c9f09c4ebbc9b2c7e075ed522379",
          716: "5fa809ddcb469633bdf8cf33c00e64cf",
          718: "431515492a5fafa860cdfde7679507d6",
          784: "df9f3725148acf98b9c4ed42c3b9be27",
          792: "ba124523fb5ab61edbe4a8b1b3ab95da",
          832: "395e0d4ad9823d14df52be9e4c42b012",
          836: "3b78745f7e302b0674b83a91dfcadabe",
          924: "26bd79e80e197e526abc64daa7d5d917",
          936: "fca1b68d7fe8e7d70ae5c918e2e87849"
        } [e] + ".js", u.miniCssF = e => "css/" + {
          108: "a9ac022d15ed1ba08108733addd01692",
          440: "f68b3422175dcc3e588827af547e2045",
          452: "b7fd239e304dcd961f6015ac377a42dd",
          832: "b7fd239e304dcd961f6015ac377a42dd",
          936: "99df8002ac4dfabc31414fcbef9c06c7"
        } [e] + ".css", u.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), u.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), e = {}, s = "@rockstargames/sites-red-dead-redemption-2:", u.l = (t, r, a, n) => {
          if (e[t]) e[t].push(r);
          else {
            var o, d;
            if (void 0 !== a)
              for (var i = document.getElementsByTagName("script"), f = 0; f < i.length; f++) {
                var l = i[f];
                if (l.getAttribute("src") == t || l.getAttribute("data-webpack") == s + a) {
                  o = l;
                  break
                }
              }
            o || (d = !0, (o = document.createElement("script")).charset = "utf-8", o.timeout = 120, u.nc && o.setAttribute("nonce", u.nc), o.setAttribute("data-webpack", s + a), o.src = t), e[t] = [r];
            var c = (r, a) => {
                o.onerror = o.onload = null, clearTimeout(p);
                var n = e[t];
                if (delete e[t], o.parentNode && o.parentNode.removeChild(o), n && n.forEach((e => e(a))), r) return r(a)
              },
              p = setTimeout(c.bind(null, void 0, {
                type: "timeout",
                target: o
              }), 12e4);
            o.onerror = c.bind(null, o.onerror), o.onload = c.bind(null, o.onload), d && document.head.appendChild(o)
          }
        }, u.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, u.nmd = e => (e.paths = [], e.children || (e.children = []), e), i = {
          0: [33052],
          61: [3061],
          108: [53264, 84644],
          440: [1532, 1740, 28540, 45652, 73784, 95356],
          792: [45792],
          836: [42836]
        }, f = {
          1532: ["default", "./operations/queries", 33864],
          1740: ["default", "./index", 88428],
          3061: ["default", "./hooks", 9344],
          28540: ["default", "./operations/fragments/paging.graphql", 33864],
          33052: ["default", "./index", 33864],
          42836: ["default", "./index", 81128],
          45652: ["default", "./helpers/uploads", 88428],
          45792: ["default", "./index", 9344],
          53264: ["default", "./operations/fragments/video2-fields.graphql", 33864],
          73784: ["default", "./operations/fragments/newswire-post.graphql", 33864],
          84644: ["default", "./index", 14472],
          95356: ["default", "./helpers", 88428]
        }, u.f.remotes = (e, t) => {
          u.o(i, e) && i[e].forEach((e => {
            var r = u.R;
            r || (r = []);
            var a = f[e];
            if (!(r.indexOf(a) >= 0)) {
              if (r.push(a), a.p) return t.push(a.p);
              var n = t => {
                  t || (t = new Error("Container missing")), "string" == typeof t.message && (t.message += '\nwhile loading "' + a[1] + '" from ' + a[2]), u.m[e] = () => {
                    throw t
                  }, a.p = 0
                },
                o = (e, r, o, d, s, i) => {
                  try {
                    var f = e(r, o);
                    if (!f || !f.then) return s(f, d, i);
                    var l = f.then((e => s(e, d)), n);
                    if (!i) return l;
                    t.push(a.p = l)
                  } catch (e) {
                    n(e)
                  }
                },
                d = (e, t, n) => o(t.get, a[1], r, 0, s, n),
                s = t => {
                  a.p = 1, u.m[e] = e => {
                    e.exports = t()
                  }
                };
              o(u, a[2], 0, 0, ((e, t, r) => e ? o(u.I, a[0], 0, e, d, r) : n()), 1)
            }
          }))
        }, (() => {
          u.S = {};
          var e = {},
            t = {};
          u.I = (r, a) => {
            a || (a = []);
            var n = t[r];
            if (n || (n = t[r] = {}), !(a.indexOf(n) >= 0)) {
              if (a.push(n), e[r]) return e[r];
              u.o(u.S, r) || (u.S[r] = {});
              var o = u.S[r],
                d = "@rockstargames/sites-red-dead-redemption-2",
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
                    var n = u(e);
                    if (!n) return;
                    var o = e => e && e.init && e.init(u.S[r], a);
                    if (n.then) return f.push(n.then(o, t));
                    var d = o(n);
                    if (d && d.then) return f.push(d.catch(t))
                  } catch (e) {
                    t(e)
                  }
                },
                f = [];
              return "default" === r && (s("@rockstargames/components", "1.14.0", (() => Promise.all([u.e(92), u.e(936), u.e(664), u.e(836), u.e(792), u.e(440), u.e(0), u.e(240)]).then((() => () => u(65596))))), s("@rockstargames/locale-tools", "1.0.0", (() => Promise.all([u.e(92), u.e(408), u.e(664), u.e(61), u.e(924)]).then((() => () => u(8304))))), s("@rockstargames/modules-core-agegate", "1.0.39", (() => Promise.all([u.e(516), u.e(664), u.e(836), u.e(792), u.e(452)]).then((() => () => u(24))))), s("lodash", "4.17.21", (() => u.e(784).then((() => () => u(79784))))), s("react-dom", "18.2.0", (() => Promise.all([u.e(716), u.e(664)]).then((() => () => u(63716))))), s("react-router-dom", "6.17.0", (() => Promise.all([u.e(718), u.e(664)]).then((() => () => u(45718))))), s("react", "18.2.0", (() => u.e(100).then((() => () => u(99480))))), i(9344), i(33864), i(14472), i(81128), i(88428)), f.length ? e[r] = Promise.all(f).then((() => e[r] = 1)) : e[r] = 1
            }
          }
        })(), (() => {
          var e;
          u.g.importScripts && (e = u.g.location + "");
          var t = u.g.document;
          if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
            var r = t.getElementsByTagName("script");
            if (r.length)
              for (var a = r.length - 1; a > -1 && !e;) e = r[a--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), u.p = e
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
                  var f, l, c = s < r.length ? (typeof r[s])[0] : "";
                  if (d >= a.length || "o" == (l = (typeof(f = a[d]))[0])) return !i || ("u" == c ? s > n && !o : "" == c != o);
                  if ("u" == l) {
                    if (!i || "u" != c) return !1
                  } else if (i)
                    if (c == l)
                      if (s <= n) {
                        if (f != r[s]) return !1
                      } else {
                        if (o ? f > r[s] : f < r[s]) return !1;
                        f != r[s] && (i = !1)
                      }
                  else if ("s" != c && "n" != c) {
                    if (o || s <= n) return !1;
                    i = !1, s--
                  } else {
                    if (s <= n || l < c != o) return !1;
                    i = !1
                  } else "s" != c && "n" != c && (i = !1, s--)
                }
              }
              var u = [],
                p = u.pop.bind(u);
              for (d = 1; d < r.length; d++) {
                var b = r[d];
                u.push(1 == b ? p() | p() : 2 == b ? p() & p() : b ? t(b, a) : !p())
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
                  var d = r[a],
                    s = (typeof d)[0];
                  if (o != s) return "o" == o && "n" == s || "s" == s || "u" == o;
                  if ("o" != o && "u" != o && n != d) return n < d;
                  a++
                }
              })(r, a) ? r : a), 0)) && o[a]
            },
            a = (e => function(t, r, a, n) {
              var o = u.I(t);
              return o && o.then ? o.then(e.bind(e, t, u.S[t], r, a, n)) : e(t, u.S[t], r, a, n)
            })(((e, t, a, n, o) => {
              var d = t && u.o(t, a) && r(t, a, n);
              return d ? (e => (e.loaded = 1, e.get()))(d) : o()
            })),
            n = {},
            o = {
              51664: () => a("default", "react", [1, 18, 2, 0], (() => u.e(100).then((() => () => u(99480))))),
              9860: () => a("default", "@rockstargames/components", [1, "workspace:*"], (() => Promise.all([u.e(92), u.e(936), u.e(836), u.e(440)]).then((() => () => u(65596))))),
              41272: () => a("default", "@rockstargames/locale-tools", [1, "workspace:*"], (() => Promise.all([u.e(92), u.e(408), u.e(61), u.e(304)]).then((() => () => u(8304))))),
              57013: () => a("default", "react-router-dom", [1, 6, 11, 2], (() => u.e(718).then((() => () => u(45718))))),
              73660: () => a("default", "lodash", [1, 4, 17, 21], (() => u.e(784).then((() => () => u(79784))))),
              92372: () => a("default", "@rockstargames/modules-core-agegate", [1, "workspace:*"], (() => Promise.all([u.e(516), u.e(836), u.e(832)]).then((() => () => u(24))))),
              77364: () => a("default", "react-dom", [1, 18, 2, 0], (() => u.e(716).then((() => () => u(63716)))))
            },
            d = {
              0: [9860, 41272, 57013, 73660],
              108: [92372],
              440: [77364],
              664: [51664]
            },
            s = {};
          u.f.consumes = (e, t) => {
            u.o(d, e) && d[e].forEach((e => {
              if (u.o(n, e)) return t.push(n[e]);
              if (!s[e]) {
                var r = t => {
                  n[e] = 0, u.m[e] = r => {
                    delete u.c[e], r.exports = t()
                  }
                };
                s[e] = !0;
                var a = t => {
                  delete n[e], u.m[e] = r => {
                    throw delete u.c[e], t
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
              480: 0
            };
            u.f.miniCss = (t, r) => {
              e[t] ? r.push(e[t]) : 0 !== e[t] && {
                108: 1,
                440: 1,
                452: 1,
                832: 1,
                936: 1
              } [t] && r.push(e[t] = (e => new Promise(((t, r) => {
                var a = u.miniCssF(e),
                  n = u.p + a;
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
            480: 0
          };
          u.f.j = (t, r) => {
            var a = u.o(e, t) ? e[t] : void 0;
            if (0 !== a)
              if (a) r.push(a[2]);
              else if (/^(0|61|664|792|836)$/.test(t)) e[t] = 0;
            else {
              var n = new Promise(((r, n) => a = e[t] = [r, n]));
              r.push(a[2] = n);
              var o = u.p + u.u(t),
                d = new Error;
              u.l(o, (r => {
                if (u.o(e, t) && (0 !== (a = e[t]) && (e[t] = void 0), a)) {
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
                for (a in d) u.o(d, a) && (u.m[a] = d[a]);
                s && s(u)
              }
              for (t && t(r); i < o.length; i++) n = o[i], u.o(e, n) && e[n] && e[n][0](), e[n] = 0
            },
            r = self.webpackChunk_rockstargames_sites_red_dead_redemption_2 = self.webpackChunk_rockstargames_sites_red_dead_redemption_2 || [];
          r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
        })(), u.nc = void 0, u(93824), u(47461)
      })())
    }
  }
}));