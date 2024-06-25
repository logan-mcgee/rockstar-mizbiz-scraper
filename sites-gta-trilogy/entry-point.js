! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "142dce69-b737-4066-8997-93848346bb2c", e._sentryDebugIdIdentifier = "sentry-dbid-142dce69-b737-4066-8997-93848346bb2c")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-gta-trilogy",
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
    i = {};
  return Object.defineProperty(r, "__esModule", {
    value: !0
  }), Object.defineProperty(a, "__esModule", {
    value: !0
  }), Object.defineProperty(n, "__esModule", {
    value: !0
  }), Object.defineProperty(o, "__esModule", {
    value: !0
  }), Object.defineProperty(i, "__esModule", {
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
        i[t] = e[t]
      }))
    }],
    execute: function() {
      e((() => {
        var e, s, f, l, d = {
            4364: (e, t, r) => {
              (0, r(7284).G)(1)
            },
            7284: (e, t, r) => {
              const a = r(7984).Q;
              t.G = function(e) {
                if (e || (e = 1), !r.y.meta || !r.y.meta.url) throw console.error("__system_context__", r.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                r.p = a(r.y.meta.url, e)
              }
            },
            3824: (e, t, r) => {
              r(4364)
            },
            7984: (e, t, r) => {
              t.Q = function(e, t) {
                var r = document.createElement("a");
                r.href = e;
                for (var a = "/" === r.pathname[0] ? r.pathname : "/" + r.pathname, n = 0, o = a.length; n !== t && o >= 0;) "/" === a[--o] && n++;
                if (n !== t) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + t + ") is greater than the number of directories (" + n + ") in the URL path " + e);
                var i = a.slice(0, o + 1);
                return r.protocol + "//" + r.host + i
              };
              Number.isInteger
            },
            7461: (e, t, r) => {
              "use strict";
              var a = {
                  "./index": () => Promise.all([r.e(848), r.e(664), r.e(20), r.e(368)]).then((() => () => r(9368)))
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
            3864: e => {
              "use strict";
              e.exports = r
            },
            1128: e => {
              "use strict";
              e.exports = a
            },
            4472: e => {
              "use strict";
              e.exports = n
            },
            8428: e => {
              "use strict";
              e.exports = o
            },
            9344: e => {
              "use strict";
              e.exports = i
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
          return d[e].call(r.exports, r, r.exports, u), r.loaded = !0, r.exports
        }
        return u.m = d, u.c = c, u.y = t, u.amdO = {}, u.n = e => {
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
          20: "b9f1b6c188acd0c838841f569b01fec3",
          100: "ffcfa82efac31d9a249fd8f14e77bdee",
          168: "9d525d71b4148d09935dd07dffc3fd49",
          176: "bc62a20b7df4b93a416d012b8c3177e4",
          368: "1237aa4e6d3287b0811e3f154df1bb5b",
          524: "4ab00bf29b08a6cb7b8e6ae4833f285f",
          652: "44180d6ec81c9c332cd7a0a4d7c96e85",
          664: "42e2d039cf9a5ceb74b83a244e243018",
          668: "90c0b0ca70f046239c1df2ee52ef27e8",
          760: "356990a52f637b098b75d54ae3b32acb",
          818: "67f0d3bd41490eda09c65300af9c87f5",
          848: "79d60c4dbf2406afa60aecea71ac7f7a",
          884: "592d3eed12b9df8f4d7ac6d8378a19f5",
          952: "9d4e73f057e8ef1b66980ac2b8b86150"
        } [e] + ".js", u.miniCssF = e => "css/" + {
          368: "0ba90b8e2a1d23f3191f1f43a69417cc",
          760: "99df8002ac4dfabc31414fcbef9c06c7",
          884: "bbe7656ee8f2772c0474d95d1fa4b891"
        } [e] + ".css", u.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), u.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), e = {}, s = "@rockstargames/sites-gta-trilogy:", u.l = (t, r, a, n) => {
          if (e[t]) e[t].push(r);
          else {
            var o, i;
            if (void 0 !== a)
              for (var f = document.getElementsByTagName("script"), l = 0; l < f.length; l++) {
                var d = f[l];
                if (d.getAttribute("src") == t || d.getAttribute("data-webpack") == s + a) {
                  o = d;
                  break
                }
              }
            o || (i = !0, (o = document.createElement("script")).charset = "utf-8", o.timeout = 120, u.nc && o.setAttribute("nonce", u.nc), o.setAttribute("data-webpack", s + a), o.src = t), e[t] = [r];
            var c = (r, a) => {
                o.onerror = o.onload = null, clearTimeout(p);
                var n = e[t];
                if (delete e[t], o.parentNode && o.parentNode.removeChild(o), n && n.forEach((e => e(a))), r) return r(a)
              },
              p = setTimeout(c.bind(null, void 0, {
                type: "timeout",
                target: o
              }), 12e4);
            o.onerror = c.bind(null, o.onerror), o.onload = c.bind(null, o.onload), i && document.head.appendChild(o)
          }
        }, u.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, u.nmd = e => (e.paths = [], e.children || (e.children = []), e), f = {
          20: [5356, 5792],
          368: [4644],
          884: [1532, 1740, 2836, 3052, 3061, 3784, 5652, 8540]
        }, l = {
          1532: ["default", "./operations/queries", 3864],
          1740: ["default", "./index", 8428],
          2836: ["default", "./index", 1128],
          3052: ["default", "./index", 3864],
          3061: ["default", "./hooks", 9344],
          3784: ["default", "./operations/fragments/newswire-post.graphql", 3864],
          4644: ["default", "./index", 4472],
          5356: ["default", "./helpers", 8428],
          5652: ["default", "./helpers/uploads", 8428],
          5792: ["default", "./index", 9344],
          8540: ["default", "./operations/fragments/paging.graphql", 3864]
        }, u.f.remotes = (e, t) => {
          u.o(f, e) && f[e].forEach((e => {
            var r = u.R;
            r || (r = []);
            var a = l[e];
            if (!(r.indexOf(a) >= 0)) {
              if (r.push(a), a.p) return t.push(a.p);
              var n = t => {
                  t || (t = new Error("Container missing")), "string" == typeof t.message && (t.message += '\nwhile loading "' + a[1] + '" from ' + a[2]), u.m[e] = () => {
                    throw t
                  }, a.p = 0
                },
                o = (e, r, o, i, s, f) => {
                  try {
                    var l = e(r, o);
                    if (!l || !l.then) return s(l, i, f);
                    var d = l.then((e => s(e, i)), n);
                    if (!f) return d;
                    t.push(a.p = d)
                  } catch (e) {
                    n(e)
                  }
                },
                i = (e, t, n) => o(t.get, a[1], r, 0, s, n),
                s = t => {
                  a.p = 1, u.m[e] = e => {
                    e.exports = t()
                  }
                };
              o(u, a[2], 0, 0, ((e, t, r) => e ? o(u.I, a[0], 0, e, i, r) : n()), 1)
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
                i = "@rockstargames/sites-gta-trilogy",
                s = (e, t, r, a) => {
                  var n = o[e] = o[e] || {},
                    s = n[t];
                  (!s || !s.loaded && (!a != !s.eager ? a : i > s.from)) && (n[t] = {
                    get: r,
                    from: i,
                    eager: !!a
                  })
                },
                f = e => {
                  var t = e => {
                    return t = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(t));
                    var t
                  };
                  try {
                    var n = u(e);
                    if (!n) return;
                    var o = e => e && e.init && e.init(u.S[r], a);
                    if (n.then) return l.push(n.then(o, t));
                    var i = o(n);
                    if (i && i.then) return l.push(i.catch(t))
                  } catch (e) {
                    t(e)
                  }
                },
                l = [];
              return "default" === r && (s("@rockstargames/components", "1.14.0", (() => Promise.all([u.e(176), u.e(760), u.e(848), u.e(664), u.e(884), u.e(20)]).then((() => () => u(3544))))), s("framer-motion", "7.10.3", (() => Promise.all([u.e(176), u.e(652), u.e(664)]).then((() => () => u(652))))), s("framer-motion", "7.10.3", (() => Promise.all([u.e(176), u.e(952), u.e(664)]).then((() => () => u(5952))))), s("react-router-dom", "6.17.0", (() => Promise.all([u.e(168), u.e(668), u.e(664)]).then((() => () => u(9668))))), s("react-router-dom", "6.17.0", (() => Promise.all([u.e(168), u.e(818), u.e(664)]).then((() => () => u(4818))))), s("react", "18.2.0", (() => u.e(100).then((() => () => u(9480))))), s("usehooks-ts", "2.9.1", (() => Promise.all([u.e(524), u.e(664)]).then((() => () => u(8524))))), f(8428), f(9344), f(4472), f(3864), f(1128)), l.length ? e[r] = Promise.all(l).then((() => e[r] = 1)) : e[r] = 1
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
                for (var i = 0, s = 1, f = !0;; s++, i++) {
                  var l, d, c = s < r.length ? (typeof r[s])[0] : "";
                  if (i >= a.length || "o" == (d = (typeof(l = a[i]))[0])) return !f || ("u" == c ? s > n && !o : "" == c != o);
                  if ("u" == d) {
                    if (!f || "u" != c) return !1
                  } else if (f)
                    if (c == d)
                      if (s <= n) {
                        if (l != r[s]) return !1
                      } else {
                        if (o ? l > r[s] : l < r[s]) return !1;
                        l != r[s] && (f = !1)
                      }
                  else if ("s" != c && "n" != c) {
                    if (o || s <= n) return !1;
                    f = !1, s--
                  } else {
                    if (s <= n || d < c != o) return !1;
                    f = !1
                  } else "s" != c && "n" != c && (f = !1, s--)
                }
              }
              var u = [],
                p = u.pop.bind(u);
              for (i = 1; i < r.length; i++) {
                var h = r[i];
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
                  var i = r[a],
                    s = (typeof i)[0];
                  if (o != s) return "o" == o && "n" == s || "s" == s || "u" == o;
                  if ("o" != o && "u" != o && n != i) return n < i;
                  a++
                }
              })(r, a) ? r : a), 0)) && o[a]
            },
            a = (e => function(t, r, a, n) {
              var o = u.I(t);
              return o && o.then ? o.then(e.bind(e, t, u.S[t], r, a, n)) : e(t, u.S[t], r, a, n)
            })(((e, t, a, n, o) => {
              var i = t && u.o(t, a) && r(t, a, n);
              return i ? (e => (e.loaded = 1, e.get()))(i) : o()
            })),
            n = {},
            o = {
              1664: () => a("default", "react", [1, 18, 2, 0], (() => u.e(100).then((() => () => u(9480))))),
              9860: () => a("default", "@rockstargames/components", [1, "workspace:*"], (() => Promise.all([u.e(176), u.e(760), u.e(884)]).then((() => () => u(3544))))),
              4900: () => a("default", "framer-motion", [1, 7, 5, 1], (() => Promise.all([u.e(176), u.e(652)]).then((() => () => u(652))))),
              5620: () => a("default", "usehooks-ts", [1, 2, 7, 2], (() => u.e(524).then((() => () => u(8524))))),
              8584: () => a("default", "react-router-dom", [1, 6, 11, 2], (() => Promise.all([u.e(168), u.e(818)]).then((() => () => u(4818))))),
              968: () => a("default", "framer-motion", [1, 7, 5, 1], (() => u.e(952).then((() => () => u(5952))))),
              7013: () => a("default", "react-router-dom", [1, 6, 11, 2], (() => Promise.all([u.e(168), u.e(668)]).then((() => () => u(9668)))))
            },
            i = {
              20: [9860],
              368: [4900, 5620, 8584],
              664: [1664],
              884: [968, 7013]
            },
            s = {};
          u.f.consumes = (e, t) => {
            u.o(i, e) && i[e].forEach((e => {
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
                  var i = o[e]();
                  i.then ? t.push(n[e] = i.then(r).catch(a)) : r(i)
                } catch (e) {
                  a(e)
                }
              }
            }))
          }
        })(), (() => {
          if ("undefined" != typeof document) {
            var e = {
              224: 0
            };
            u.f.miniCss = (t, r) => {
              e[t] ? r.push(e[t]) : 0 !== e[t] && {
                368: 1,
                760: 1,
                884: 1
              } [t] && r.push(e[t] = (e => new Promise(((t, r) => {
                var a = u.miniCssF(e),
                  n = u.p + a;
                if (((e, t) => {
                    for (var r = document.getElementsByTagName("link"), a = 0; a < r.length; a++) {
                      var n = (i = r[a]).getAttribute("data-href") || i.getAttribute("href");
                      if ("stylesheet" === i.rel && (n === e || n === t)) return i
                    }
                    var o = document.getElementsByTagName("style");
                    for (a = 0; a < o.length; a++) {
                      var i;
                      if ((n = (i = o[a]).getAttribute("data-href")) === e || n === t) return i
                    }
                  })(a, n)) return t();
                ((e, t, r, a, n) => {
                  var o = document.createElement("link");
                  o.rel = "stylesheet", o.type = "text/css", o.onerror = o.onload = r => {
                    if (o.onerror = o.onload = null, "load" === r.type) a();
                    else {
                      var i = r && ("load" === r.type ? "missing" : r.type),
                        s = r && r.target && r.target.href || t,
                        f = new Error("Loading CSS chunk " + e + " failed.\n(" + s + ")");
                      f.code = "CSS_CHUNK_LOAD_FAILED", f.type = i, f.request = s, o.parentNode && o.parentNode.removeChild(o), n(f)
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
            224: 0
          };
          u.f.j = (t, r) => {
            var a = u.o(e, t) ? e[t] : void 0;
            if (0 !== a)
              if (a) r.push(a[2]);
              else if (/^(20|664)$/.test(t)) e[t] = 0;
            else {
              var n = new Promise(((r, n) => a = e[t] = [r, n]));
              r.push(a[2] = n);
              var o = u.p + u.u(t),
                i = new Error;
              u.l(o, (r => {
                if (u.o(e, t) && (0 !== (a = e[t]) && (e[t] = void 0), a)) {
                  var n = r && ("load" === r.type ? "missing" : r.type),
                    o = r && r.target && r.target.src;
                  i.message = "Loading chunk " + t + " failed.\n(" + n + ": " + o + ")", i.name = "ChunkLoadError", i.type = n, i.request = o, a[1](i)
                }
              }), "chunk-" + t, t)
            }
          };
          var t = (t, r) => {
              var a, n, o = r[0],
                i = r[1],
                s = r[2],
                f = 0;
              if (o.some((t => 0 !== e[t]))) {
                for (a in i) u.o(i, a) && (u.m[a] = i[a]);
                s && s(u)
              }
              for (t && t(r); f < o.length; f++) n = o[f], u.o(e, n) && e[n] && e[n][0](), e[n] = 0
            },
            r = self.webpackChunk_rockstargames_sites_gta_trilogy = self.webpackChunk_rockstargames_sites_gta_trilogy || [];
          r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
        })(), u.nc = void 0, u(3824), u(7461)
      })())
    }
  }
}));