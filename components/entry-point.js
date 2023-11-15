System.register(["@rockstargames/graph-client", "@rockstargames/intl", "@rockstargames/modules-core-sc-user", "@rockstargames/tina", "@rockstargames/utils"], (function(e, t) {
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
        var e, s, f, u, c = {
            6100: (e, t, r) => {
              (0, r(487).s)(1)
            },
            487: (e, t, r) => {
              const a = r(6175).R;
              t.s = function(e) {
                if (e || (e = 1), !r.y.meta || !r.y.meta.url) throw console.error("__system_context__", r.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                r.p = a(r.y.meta.url, e)
              }
            },
            9473: (e, t, r) => {
              r(6100)
            },
            6175: (e, t, r) => {
              t.R = function(e, t) {
                var r = document.createElement("a");
                r.href = e;
                for (var a = "/" === r.pathname[0] ? r.pathname : "/" + r.pathname, n = 0, o = a.length; n !== t && o >= 0;) "/" === a[--o] && n++;
                if (n !== t) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + t + ") is greater than the number of directories (" + n + ") in the URL path " + e);
                var i = a.slice(0, o + 1);
                return r.protocol + "//" + r.host + i
              };
              Number.isInteger
            },
            8656: (e, t, r) => {
              "use strict";
              var a = {
                  "./index": () => Promise.all([r.e(825), r.e(885), r.e(702), r.e(190), r.e(542), r.e(927), r.e(721), r.e(59)]).then((() => () => r(3788))),
                  "./providers": () => Promise.all([r.e(825), r.e(190), r.e(542), r.e(721), r.e(71)]).then((() => () => r(5071))),
                  "./tinaBlockTemplates": () => Promise.all([r.e(885), r.e(190), r.e(542), r.e(927), r.e(270)]).then((() => () => r(2270)))
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
            5081: e => {
              "use strict";
              e.exports = r
            },
            5016: e => {
              "use strict";
              e.exports = a
            },
            4031: e => {
              "use strict";
              e.exports = n
            },
            7559: e => {
              "use strict";
              e.exports = o
            },
            2369: e => {
              "use strict";
              e.exports = i
            }
          },
          l = {};

        function d(e) {
          var t = l[e];
          if (void 0 !== t) return t.exports;
          var r = l[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return c[e].call(r.exports, r, r.exports, d), r.loaded = !0, r.exports
        }
        return d.m = c, d.c = l, d.y = t, d.amdO = {}, d.n = e => {
          var t = e && e.__esModule ? () => e.default : () => e;
          return d.d(t, {
            a: t
          }), t
        }, d.d = (e, t) => {
          for (var r in t) d.o(t, r) && !d.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: t[r]
          })
        }, d.f = {}, d.e = e => Promise.all(Object.keys(d.f).reduce(((t, r) => (d.f[r](e, t), t)), [])), d.u = e => "js/" + {
          59: "9f5d126ea8e0559ae109bc569b2cf2ce",
          71: "e02077b45d2f0afd541d7cbe92b73cbf",
          190: "30a6df3976595661e35ab88ffdb9c6c0",
          270: "4c594f83c4ac2670a139c582d87375cb",
          377: "bcb7ea06a2d7695d26e0e8028d7590be",
          542: "aff0e6f853449469565dbbea06ac2150",
          621: "16631afbadf2beffc0d3fd32965fe2fa",
          702: "f601f1d3b8a6e4e06e7b9ed37277918a",
          721: "c9a6decf2eff3fcc95ff34cf18ea662f",
          825: "766ae34beec485cb887da3ed44929434",
          885: "017cd0b51d6309477c816aa0f7547609",
          927: "53f994863f3ab821126e7bf6b654c267"
        } [e] + ".js", d.miniCssF = e => "css/" + {
          59: "78be62582ae8de01cc23332f1088aa34",
          71: "101264745b4f6bae897af56b3b11b223",
          927: "1d7c15aafa12365b63d6a97daa377566"
        } [e] + ".css", d.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), d.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), e = {}, s = "@rockstargames/components:", d.l = (t, r, a, n) => {
          if (e[t]) e[t].push(r);
          else {
            var o, i;
            if (void 0 !== a)
              for (var f = document.getElementsByTagName("script"), u = 0; u < f.length; u++) {
                var c = f[u];
                if (c.getAttribute("src") == t || c.getAttribute("data-webpack") == s + a) {
                  o = c;
                  break
                }
              }
            o || (i = !0, (o = document.createElement("script")).charset = "utf-8", o.timeout = 120, d.nc && o.setAttribute("nonce", d.nc), o.setAttribute("data-webpack", s + a), o.src = t), e[t] = [r];
            var l = (r, a) => {
                o.onerror = o.onload = null, clearTimeout(p);
                var n = e[t];
                if (delete e[t], o.parentNode && o.parentNode.removeChild(o), n && n.forEach((e => e(a))), r) return r(a)
              },
              p = setTimeout(l.bind(null, void 0, {
                type: "timeout",
                target: o
              }), 12e4);
            o.onerror = l.bind(null, o.onerror), o.onload = l.bind(null, o.onload), i && document.head.appendChild(o)
          }
        }, d.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, d.nmd = e => (e.paths = [], e.children || (e.children = []), e), f = {
          59: [2324, 3111, 3657, 3761, 6077, 9349],
          270: [3374, 3616, 5607],
          542: [9542],
          721: [6711],
          927: [559, 4859, 9929]
        }, u = {
          559: ["default", "./helpers/uploads", 7559],
          2324: ["default", "./helpers", 7559],
          3111: ["default", "./messages", 5016],
          3374: ["default", "./ui", 7559],
          3616: ["default", "./properties", 7559],
          3657: ["default", "./hooks", 2369],
          3761: ["default", "./operations/queries", 5081],
          4859: ["default", "./index", 5081],
          5607: ["default", "./functions", 2369],
          6077: ["default", "./operations/fragments/newswire-post.graphql", 5081],
          6711: ["default", "./index", 4031],
          9349: ["default", "./operations/fragments/paging.graphql", 5081],
          9542: ["default", "./index", 7559],
          9929: ["default", "./index", 2369]
        }, d.f.remotes = (e, t) => {
          d.o(f, e) && f[e].forEach((e => {
            var r = d.R;
            r || (r = []);
            var a = u[e];
            if (!(r.indexOf(a) >= 0)) {
              if (r.push(a), a.p) return t.push(a.p);
              var n = t => {
                  t || (t = new Error("Container missing")), "string" == typeof t.message && (t.message += '\nwhile loading "' + a[1] + '" from ' + a[2]), d.m[e] = () => {
                    throw t
                  }, a.p = 0
                },
                o = (e, r, o, i, s, f) => {
                  try {
                    var u = e(r, o);
                    if (!u || !u.then) return s(u, i, f);
                    var c = u.then((e => s(e, i)), n);
                    if (!f) return c;
                    t.push(a.p = c)
                  } catch (e) {
                    n(e)
                  }
                },
                i = (e, t, n) => o(t.get, a[1], r, 0, s, n),
                s = t => {
                  a.p = 1, d.m[e] = e => {
                    e.exports = t()
                  }
                };
              o(d, a[2], 0, 0, ((e, t, r) => e ? o(d.I, a[0], 0, e, i, r) : n()), 1)
            }
          }))
        }, (() => {
          d.S = {};
          var e = {},
            t = {};
          d.I = (r, a) => {
            a || (a = []);
            var n = t[r];
            if (n || (n = t[r] = {}), !(a.indexOf(n) >= 0)) {
              if (a.push(n), e[r]) return e[r];
              d.o(d.S, r) || (d.S[r] = {});
              var o = d.S[r],
                i = "@rockstargames/components",
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
                    var n = d(e);
                    if (!n) return;
                    var o = e => e && e.init && e.init(d.S[r], a);
                    if (n.then) return u.push(n.then(o, t));
                    var i = o(n);
                    if (i && i.then) return u.push(i.catch(t))
                  } catch (e) {
                    t(e)
                  }
                },
                u = [];
              return "default" === r && (s("react-router-dom", "6.17.0", (() => Promise.all([d.e(621), d.e(190)]).then((() => () => d(621))))), s("react", "18.2.0", (() => d.e(377).then((() => () => d(5377))))), f(7559), f(5081), f(2369), f(4031), f(5016)), u.length ? e[r] = Promise.all(u).then((() => e[r] = 1)) : e[r] = 1
            }
          }
        })(), (() => {
          var e;
          d.g.importScripts && (e = d.g.location + "");
          var t = d.g.document;
          if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
            var r = t.getElementsByTagName("script");
            if (r.length)
              for (var a = r.length - 1; a > -1 && !e;) e = r[a--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), d.p = e
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
                  var u, c, l = s < r.length ? (typeof r[s])[0] : "";
                  if (i >= a.length || "o" == (c = (typeof(u = a[i]))[0])) return !f || ("u" == l ? s > n && !o : "" == l != o);
                  if ("u" == c) {
                    if (!f || "u" != l) return !1
                  } else if (f)
                    if (l == c)
                      if (s <= n) {
                        if (u != r[s]) return !1
                      } else {
                        if (o ? u > r[s] : u < r[s]) return !1;
                        u != r[s] && (f = !1)
                      }
                  else if ("s" != l && "n" != l) {
                    if (o || s <= n) return !1;
                    f = !1, s--
                  } else {
                    if (s <= n || c < l != o) return !1;
                    f = !1
                  } else "s" != l && "n" != l && (f = !1, s--)
                }
              }
              var d = [],
                p = d.pop.bind(d);
              for (i = 1; i < r.length; i++) {
                var h = r[i];
                d.push(1 == h ? p() | p() : 2 == h ? p() & p() : h ? t(h, a) : !p())
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
              var o = d.I(t);
              return o && o.then ? o.then(e.bind(e, t, d.S[t], r, a, n)) : e(t, d.S[t], r, a, n)
            })(((e, t, a, n, o) => {
              var i = t && d.o(t, a) && r(t, a, n);
              return i ? (e => (e.loaded = 1, e.get()))(i) : o()
            })),
            n = {},
            o = {
              927: () => a("default", "react", [1, 18, 2, 0], (() => d.e(377).then((() => () => d(5377))))),
              4175: () => a("default", "react-router-dom", [1, 6, 11, 2], (() => d.e(621).then((() => () => d(621)))))
            },
            i = {
              190: [927],
              721: [4175]
            };
          d.f.consumes = (e, t) => {
            d.o(i, e) && i[e].forEach((e => {
              if (d.o(n, e)) return t.push(n[e]);
              var r = t => {
                  n[e] = 0, d.m[e] = r => {
                    delete d.c[e], r.exports = t()
                  }
                },
                a = t => {
                  delete n[e], d.m[e] = r => {
                    throw delete d.c[e], t
                  }
                };
              try {
                var i = o[e]();
                i.then ? t.push(n[e] = i.then(r).catch(a)) : r(i)
              } catch (e) {
                a(e)
              }
            }))
          }
        })(), (() => {
          if ("undefined" != typeof document) {
            var e = {
              215: 0
            };
            d.f.miniCss = (t, r) => {
              e[t] ? r.push(e[t]) : 0 !== e[t] && {
                59: 1,
                71: 1,
                927: 1
              } [t] && r.push(e[t] = (e => new Promise(((t, r) => {
                var a = d.miniCssF(e),
                  n = d.p + a;
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
            215: 0
          };
          d.f.j = (t, r) => {
            var a = d.o(e, t) ? e[t] : void 0;
            if (0 !== a)
              if (a) r.push(a[2]);
              else if (/^(190|542|721|927)$/.test(t)) e[t] = 0;
            else {
              var n = new Promise(((r, n) => a = e[t] = [r, n]));
              r.push(a[2] = n);
              var o = d.p + d.u(t),
                i = new Error;
              d.l(o, (r => {
                if (d.o(e, t) && (0 !== (a = e[t]) && (e[t] = void 0), a)) {
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
                for (a in i) d.o(i, a) && (d.m[a] = i[a]);
                s && s(d)
              }
              for (t && t(r); f < o.length; f++) n = o[f], d.o(e, n) && e[n] && e[n][0](), e[n] = 0
            },
            r = self.webpackChunk_rockstargames_components = self.webpackChunk_rockstargames_components || [];
          r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
        })(), d(9473), d(8656)
      })())
    }
  }
}));