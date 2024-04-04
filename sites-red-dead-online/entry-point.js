! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "428a839b-9212-414e-8da7-6913c509cf18", e._sentryDebugIdIdentifier = "sentry-dbid-428a839b-9212-414e-8da7-6913c509cf18")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-red-dead-online",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register(["@rockstargames/graph-client", "@rockstargames/modules-core-feedback", "@rockstargames/modules-core-newswire-article", "@rockstargames/modules-core-sc-user", "@rockstargames/modules-core-videoplayer", "@rockstargames/tina", "@rockstargames/utils"], (function(e, t) {
  var r = {},
    a = {},
    n = {},
    o = {},
    s = {},
    i = {},
    d = {};
  return Object.defineProperty(r, "__esModule", {
    value: !0
  }), Object.defineProperty(a, "__esModule", {
    value: !0
  }), Object.defineProperty(n, "__esModule", {
    value: !0
  }), Object.defineProperty(o, "__esModule", {
    value: !0
  }), Object.defineProperty(s, "__esModule", {
    value: !0
  }), Object.defineProperty(i, "__esModule", {
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
        s[t] = e[t]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(t) {
        i[t] = e[t]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(t) {
        d[t] = e[t]
      }))
    }],
    execute: function() {
      e((() => {
        var e, f, l, c, u = {
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
            87736: (e, t, r) => {
              "use strict";
              var a = {
                  "./index": () => Promise.all([r.e(664), r.e(928), r.e(548)]).then((() => () => r(97548)))
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
            57296: e => {
              "use strict";
              e.exports = a
            },
            25358: e => {
              "use strict";
              e.exports = n
            },
            81128: e => {
              "use strict";
              e.exports = o
            },
            14472: e => {
              "use strict";
              e.exports = s
            },
            88428: e => {
              "use strict";
              e.exports = i
            },
            9344: e => {
              "use strict";
              e.exports = d
            }
          },
          p = {};

        function h(e) {
          var t = p[e];
          if (void 0 !== t) return t.exports;
          var r = p[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return u[e].call(r.exports, r, r.exports, h), r.loaded = !0, r.exports
        }
        return h.m = u, h.c = p, h.y = t, h.amdO = {}, h.n = e => {
          var t = e && e.__esModule ? () => e.default : () => e;
          return h.d(t, {
            a: t
          }), t
        }, h.d = (e, t) => {
          for (var r in t) h.o(t, r) && !h.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: t[r]
          })
        }, h.f = {}, h.e = e => Promise.all(Object.keys(h.f).reduce(((t, r) => (h.f[r](e, t), t)), [])), h.u = e => "js/" + {
          61: "a8fd763b6e67c1fcdaa02a1a167ac77e",
          88: "19c615fc8d0504fb04d0573554d32f1a",
          100: "85eff3aad274225fafb0a852897454e9",
          240: "69fd575c6ac3ffeacc10e7525dca8b51",
          288: "2da391c2a0388472f2e2fe5af398a961",
          304: "17739e2778d0e0c6682600124b68d096",
          408: "78b06a2f9c6dca2e538f48bdc2e06653",
          472: "f4ea8eddab331a53611553033e93f2be",
          480: "3f8299a7dae792737b26ba5c88ccfe85",
          548: "0fc5b67d4243bf8977defac080f25f83",
          664: "8f7679e65c8d4a010368fbe0f94285d7",
          772: "430f485f6c5d9be67fd22a0eabd0b699",
          832: "fd3f042c2c629620232c9b9b38ab2dc6",
          924: "fc8ef2a8d0e9dff32d9f0d461c3c211a",
          928: "90a82516e09b106d4043b31988f8d941",
          968: "b198b96d04bf6d040a9dd2fac779b57c"
        } [e] + ".js", h.miniCssF = e => "css/" + {
          480: "528068743757cd665a7438fa11dfa9fb",
          548: "e890f580c2c1479b4878396987f40c23"
        } [e] + ".css", h.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), h.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), e = {}, f = "@rockstargames/sites-red-dead-online:", h.l = (t, r, a, n) => {
          if (e[t]) e[t].push(r);
          else {
            var o, s;
            if (void 0 !== a)
              for (var i = document.getElementsByTagName("script"), d = 0; d < i.length; d++) {
                var l = i[d];
                if (l.getAttribute("src") == t || l.getAttribute("data-webpack") == f + a) {
                  o = l;
                  break
                }
              }
            o || (s = !0, (o = document.createElement("script")).charset = "utf-8", o.timeout = 120, h.nc && o.setAttribute("nonce", h.nc), o.setAttribute("data-webpack", f + a), o.src = t), e[t] = [r];
            var c = (r, a) => {
                o.onerror = o.onload = null, clearTimeout(u);
                var n = e[t];
                if (delete e[t], o.parentNode && o.parentNode.removeChild(o), n && n.forEach((e => e(a))), r) return r(a)
              },
              u = setTimeout(c.bind(null, void 0, {
                type: "timeout",
                target: o
              }), 12e4);
            o.onerror = c.bind(null, o.onerror), o.onload = c.bind(null, o.onload), s && document.head.appendChild(o)
          }
        }, h.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, h.nmd = e => (e.paths = [], e.children || (e.children = []), e), l = {
          61: [3061],
          480: [1740, 28540, 42836, 45652, 73784, 95356],
          548: [29572, 67308, 84644, 91336],
          928: [1532, 33052, 45792]
        }, c = {
          1532: ["default", "./operations/queries", 33864],
          1740: ["default", "./index", 88428],
          3061: ["default", "./hooks", 9344],
          28540: ["default", "./operations/fragments/paging.graphql", 33864],
          29572: ["default", "./index", 57296],
          33052: ["default", "./index", 33864],
          42836: ["default", "./index", 81128],
          45652: ["default", "./helpers/uploads", 88428],
          45792: ["default", "./index", 9344],
          67308: ["default", "./operations/fragments/video-fields.graphql", 33864],
          73784: ["default", "./operations/fragments/newswire-post.graphql", 33864],
          84644: ["default", "./index", 14472],
          91336: ["default", "./NewswireArticle", 25358],
          95356: ["default", "./helpers", 88428]
        }, h.f.remotes = (e, t) => {
          h.o(l, e) && l[e].forEach((e => {
            var r = h.R;
            r || (r = []);
            var a = c[e];
            if (!(r.indexOf(a) >= 0)) {
              if (r.push(a), a.p) return t.push(a.p);
              var n = t => {
                  t || (t = new Error("Container missing")), "string" == typeof t.message && (t.message += '\nwhile loading "' + a[1] + '" from ' + a[2]), h.m[e] = () => {
                    throw t
                  }, a.p = 0
                },
                o = (e, r, o, s, i, d) => {
                  try {
                    var f = e(r, o);
                    if (!f || !f.then) return i(f, s, d);
                    var l = f.then((e => i(e, s)), n);
                    if (!d) return l;
                    t.push(a.p = l)
                  } catch (e) {
                    n(e)
                  }
                },
                s = (e, t, n) => o(t.get, a[1], r, 0, i, n),
                i = t => {
                  a.p = 1, h.m[e] = e => {
                    e.exports = t()
                  }
                };
              o(h, a[2], 0, 0, ((e, t, r) => e ? o(h.I, a[0], 0, e, s, r) : n()), 1)
            }
          }))
        }, (() => {
          h.S = {};
          var e = {},
            t = {};
          h.I = (r, a) => {
            a || (a = []);
            var n = t[r];
            if (n || (n = t[r] = {}), !(a.indexOf(n) >= 0)) {
              if (a.push(n), e[r]) return e[r];
              h.o(h.S, r) || (h.S[r] = {});
              var o = h.S[r],
                s = "@rockstargames/sites-red-dead-online",
                i = (e, t, r, a) => {
                  var n = o[e] = o[e] || {},
                    i = n[t];
                  (!i || !i.loaded && (!a != !i.eager ? a : s > i.from)) && (n[t] = {
                    get: r,
                    from: s,
                    eager: !!a
                  })
                },
                d = e => {
                  var t = e => {
                    return t = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(t));
                    var t
                  };
                  try {
                    var n = h(e);
                    if (!n) return;
                    var o = e => e && e.init && e.init(h.S[r], a);
                    if (n.then) return f.push(n.then(o, t));
                    var s = o(n);
                    if (s && s.then) return f.push(s.catch(t))
                  } catch (e) {
                    t(e)
                  }
                },
                f = [];
              return "default" === r && (i("@rockstargames/components", "1.14.0", (() => Promise.all([h.e(968), h.e(664), h.e(480), h.e(928), h.e(240)]).then((() => () => h(58568))))), i("@rockstargames/locale-tools", "1.0.0", (() => Promise.all([h.e(408), h.e(664), h.e(61), h.e(924)]).then((() => () => h(8304))))), i("hammerjs", "2.0.8", (() => h.e(772).then((() => () => h(65772))))), i("react-focus-lock", "2.9.6", (() => Promise.all([h.e(472), h.e(664)]).then((() => () => h(21472))))), i("react-router-dom", "6.17.0", (() => Promise.all([h.e(88), h.e(832), h.e(664)]).then((() => () => h(84832))))), i("react-router-dom", "6.17.0", (() => Promise.all([h.e(88), h.e(288), h.e(664)]).then((() => () => h(40288))))), i("react", "18.2.0", (() => h.e(100).then((() => () => h(77100))))), d(33864), d(9344), d(57296), d(25358), d(14472), d(81128), d(88428)), f.length ? e[r] = Promise.all(f).then((() => e[r] = 1)) : e[r] = 1
            }
          }
        })(), (() => {
          var e;
          h.g.importScripts && (e = h.g.location + "");
          var t = h.g.document;
          if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
            var r = t.getElementsByTagName("script");
            if (r.length)
              for (var a = r.length - 1; a > -1 && !e;) e = r[a--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), h.p = e
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
                for (var s = 0, i = 1, d = !0;; i++, s++) {
                  var f, l, c = i < r.length ? (typeof r[i])[0] : "";
                  if (s >= a.length || "o" == (l = (typeof(f = a[s]))[0])) return !d || ("u" == c ? i > n && !o : "" == c != o);
                  if ("u" == l) {
                    if (!d || "u" != c) return !1
                  } else if (d)
                    if (c == l)
                      if (i <= n) {
                        if (f != r[i]) return !1
                      } else {
                        if (o ? f > r[i] : f < r[i]) return !1;
                        f != r[i] && (d = !1)
                      }
                  else if ("s" != c && "n" != c) {
                    if (o || i <= n) return !1;
                    d = !1, i--
                  } else {
                    if (i <= n || l < c != o) return !1;
                    d = !1
                  } else "s" != c && "n" != c && (d = !1, i--)
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
              var o = h.I(t);
              return o && o.then ? o.then(e.bind(e, t, h.S[t], r, a, n)) : e(t, h.S[t], r, a, n)
            })(((e, t, a, n, o) => {
              var s = t && h.o(t, a) && r(t, a, n);
              return s ? (e => (e.loaded = 1, e.get()))(s) : o()
            })),
            n = {},
            o = {
              51664: () => a("default", "react", [1, 18, 2, 0], (() => h.e(100).then((() => () => h(77100))))),
              9860: () => a("default", "@rockstargames/components", [1, "workspace:*"], (() => Promise.all([h.e(968), h.e(480)]).then((() => () => h(58568))))),
              36960: () => a("default", "react-focus-lock", [1, 2, 9, 6], (() => h.e(472).then((() => () => h(21472))))),
              41272: () => a("default", "@rockstargames/locale-tools", [1, "workspace:*"], (() => Promise.all([h.e(408), h.e(61), h.e(304)]).then((() => () => h(8304))))),
              97860: () => a("default", "hammerjs", [1, 2, 0, 8], (() => h.e(772).then((() => () => h(65772))))),
              69844: () => a("default", "react-router-dom", [1, 6, 11, 2], (() => Promise.all([h.e(88), h.e(288)]).then((() => () => h(40288))))),
              57013: () => a("default", "react-router-dom", [1, 6, 11, 2], (() => Promise.all([h.e(88), h.e(832)]).then((() => () => h(84832)))))
            },
            s = {
              480: [57013],
              548: [69844],
              664: [51664],
              928: [9860, 36960, 41272, 97860]
            },
            i = {};
          h.f.consumes = (e, t) => {
            h.o(s, e) && s[e].forEach((e => {
              if (h.o(n, e)) return t.push(n[e]);
              if (!i[e]) {
                var r = t => {
                  n[e] = 0, h.m[e] = r => {
                    delete h.c[e], r.exports = t()
                  }
                };
                i[e] = !0;
                var a = t => {
                  delete n[e], h.m[e] = r => {
                    throw delete h.c[e], t
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
              352: 0
            };
            h.f.miniCss = (t, r) => {
              e[t] ? r.push(e[t]) : 0 !== e[t] && {
                480: 1,
                548: 1
              } [t] && r.push(e[t] = (e => new Promise(((t, r) => {
                var a = h.miniCssF(e),
                  n = h.p + a;
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
                        d = new Error("Loading CSS chunk " + e + " failed.\n(" + i + ")");
                      d.code = "CSS_CHUNK_LOAD_FAILED", d.type = s, d.request = i, o.parentNode && o.parentNode.removeChild(o), n(d)
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
            352: 0
          };
          h.f.j = (t, r) => {
            var a = h.o(e, t) ? e[t] : void 0;
            if (0 !== a)
              if (a) r.push(a[2]);
              else if (/^(61|664|928)$/.test(t)) e[t] = 0;
            else {
              var n = new Promise(((r, n) => a = e[t] = [r, n]));
              r.push(a[2] = n);
              var o = h.p + h.u(t),
                s = new Error;
              h.l(o, (r => {
                if (h.o(e, t) && (0 !== (a = e[t]) && (e[t] = void 0), a)) {
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
                d = 0;
              if (o.some((t => 0 !== e[t]))) {
                for (a in s) h.o(s, a) && (h.m[a] = s[a]);
                i && i(h)
              }
              for (t && t(r); d < o.length; d++) n = o[d], h.o(e, n) && e[n] && e[n][0](), e[n] = 0
            },
            r = self.webpackChunk_rockstargames_sites_red_dead_online = self.webpackChunk_rockstargames_sites_red_dead_online || [];
          r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
        })(), h(93824), h(87736)
      })())
    }
  }
}));