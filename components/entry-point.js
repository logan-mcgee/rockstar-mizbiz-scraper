System.register(["@rockstargames/graph-client", "@rockstargames/intl", "@rockstargames/modules-core-sc-user", "@rockstargames/tina", "@rockstargames/utils"], (function(e, t) {
  var r = {},
    n = {},
    a = {},
    o = {},
    i = {};
  return Object.defineProperty(r, "__esModule", {
    value: !0
  }), Object.defineProperty(n, "__esModule", {
    value: !0
  }), Object.defineProperty(a, "__esModule", {
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
        n[t] = e[t]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(t) {
        a[t] = e[t]
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
              const n = r(6175).R;
              t.s = function(e) {
                if (e || (e = 1), !r.y.meta || !r.y.meta.url) throw console.error("__system_context__", r.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                r.p = n(r.y.meta.url, e)
              }
            },
            9473: (e, t, r) => {
              r(6100)
            },
            6175: (e, t, r) => {
              t.R = function(e, t) {
                var r = document.createElement("a");
                r.href = e;
                for (var n = "/" === r.pathname[0] ? r.pathname : "/" + r.pathname, a = 0, o = n.length; a !== t && o >= 0;) "/" === n[--o] && a++;
                if (a !== t) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + t + ") is greater than the number of directories (" + a + ") in the URL path " + e);
                var i = n.slice(0, o + 1);
                return r.protocol + "//" + r.host + i
              };
              Number.isInteger
            },
            8656: (e, t, r) => {
              "use strict";
              var n = {
                  "./index": () => Promise.all([r.e(825), r.e(885), r.e(702), r.e(929), r.e(542), r.e(927), r.e(721), r.e(190)]).then((() => () => r(9832))),
                  "./providers": () => Promise.all([r.e(825), r.e(929), r.e(542), r.e(721), r.e(71)]).then((() => () => r(5071))),
                  "./tinaBlockTemplates": () => Promise.all([r.e(885), r.e(929), r.e(542), r.e(927), r.e(580)]).then((() => () => r(7580)))
                },
                a = (e, t) => (r.R = t, t = r.o(n, e) ? n[e]() : Promise.resolve().then((() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                })), r.R = void 0, t),
                o = (e, t) => {
                  if (r.S) {
                    var n = "default",
                      a = r.S[n];
                    if (a && a !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return r.S[n] = e, r.I(n, t)
                  }
                };
              r.d(t, {
                get: () => a,
                init: () => o
              })
            },
            5081: e => {
              "use strict";
              e.exports = r
            },
            5016: e => {
              "use strict";
              e.exports = n
            },
            4031: e => {
              "use strict";
              e.exports = a
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
          71: "b46ac48bd015e84fb32dab383bceaf2e",
          190: "c710e19b7f425ebbb2b4955839aba122",
          377: "bcb7ea06a2d7695d26e0e8028d7590be",
          542: "aff0e6f853449469565dbbea06ac2150",
          580: "cfa909fc32ec6327f530e56430f212af",
          621: "16631afbadf2beffc0d3fd32965fe2fa",
          702: "f601f1d3b8a6e4e06e7b9ed37277918a",
          721: "c9a6decf2eff3fcc95ff34cf18ea662f",
          825: "766ae34beec485cb887da3ed44929434",
          885: "017cd0b51d6309477c816aa0f7547609",
          927: "53f994863f3ab821126e7bf6b654c267",
          929: "728970afb741e3b599e2f0d8875f3594"
        } [e] + ".js", d.miniCssF = e => "css/" + {
          71: "101264745b4f6bae897af56b3b11b223",
          190: "d7bfbc3ba4e410cc37f6507a748d0a93",
          927: "1d7c15aafa12365b63d6a97daa377566"
        } [e] + ".css", d.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), d.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), e = {}, s = "@rockstargames/components:", d.l = (t, r, n, a) => {
          if (e[t]) e[t].push(r);
          else {
            var o, i;
            if (void 0 !== n)
              for (var f = document.getElementsByTagName("script"), u = 0; u < f.length; u++) {
                var c = f[u];
                if (c.getAttribute("src") == t || c.getAttribute("data-webpack") == s + n) {
                  o = c;
                  break
                }
              }
            o || (i = !0, (o = document.createElement("script")).charset = "utf-8", o.timeout = 120, d.nc && o.setAttribute("nonce", d.nc), o.setAttribute("data-webpack", s + n), o.src = t), e[t] = [r];
            var l = (r, n) => {
                o.onerror = o.onload = null, clearTimeout(p);
                var a = e[t];
                if (delete e[t], o.parentNode && o.parentNode.removeChild(o), a && a.forEach((e => e(n))), r) return r(n)
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
          190: [2324, 3111, 3657, 3761, 6077, 9349],
          542: [9542],
          580: [3374, 3616, 5607],
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
            var n = u[e];
            if (!(r.indexOf(n) >= 0)) {
              if (r.push(n), n.p) return t.push(n.p);
              var a = t => {
                  t || (t = new Error("Container missing")), "string" == typeof t.message && (t.message += '\nwhile loading "' + n[1] + '" from ' + n[2]), d.m[e] = () => {
                    throw t
                  }, n.p = 0
                },
                o = (e, r, o, i, s, f) => {
                  try {
                    var u = e(r, o);
                    if (!u || !u.then) return s(u, i, f);
                    var c = u.then((e => s(e, i)), a);
                    if (!f) return c;
                    t.push(n.p = c)
                  } catch (e) {
                    a(e)
                  }
                },
                i = (e, t, a) => o(t.get, n[1], r, 0, s, a),
                s = t => {
                  n.p = 1, d.m[e] = e => {
                    e.exports = t()
                  }
                };
              o(d, n[2], 0, 0, ((e, t, r) => e ? o(d.I, n[0], 0, e, i, r) : a()), 1)
            }
          }))
        }, (() => {
          d.S = {};
          var e = {},
            t = {};
          d.I = (r, n) => {
            n || (n = []);
            var a = t[r];
            if (a || (a = t[r] = {}), !(n.indexOf(a) >= 0)) {
              if (n.push(a), e[r]) return e[r];
              d.o(d.S, r) || (d.S[r] = {});
              var o = d.S[r],
                i = "@rockstargames/components",
                s = (e, t, r, n) => {
                  var a = o[e] = o[e] || {},
                    s = a[t];
                  (!s || !s.loaded && (!n != !s.eager ? n : i > s.from)) && (a[t] = {
                    get: r,
                    from: i,
                    eager: !!n
                  })
                },
                f = e => {
                  var t = e => {
                    return t = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(t));
                    var t
                  };
                  try {
                    var a = d(e);
                    if (!a) return;
                    var o = e => e && e.init && e.init(d.S[r], n);
                    if (a.then) return u.push(a.then(o, t));
                    var i = o(a);
                    if (i && i.then) return u.push(i.catch(t))
                  } catch (e) {
                    t(e)
                  }
                },
                u = [];
              return "default" === r && (s("react-router-dom", "6.17.0", (() => Promise.all([d.e(621), d.e(929)]).then((() => () => d(621))))), s("react", "18.2.0", (() => d.e(377).then((() => () => d(5377))))), f(7559), f(5081), f(2369), f(4031), f(5016)), u.length ? e[r] = Promise.all(u).then((() => e[r] = 1)) : e[r] = 1
            }
          }
        })(), (() => {
          var e;
          d.g.importScripts && (e = d.g.location + "");
          var t = d.g.document;
          if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
            var r = t.getElementsByTagName("script");
            if (r.length)
              for (var n = r.length - 1; n > -1 && !e;) e = r[n--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), d.p = e
        })(), (() => {
          var e = e => {
              var t = e => e.split(".").map((e => +e == e ? +e : e)),
                r = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
                n = r[1] ? t(r[1]) : [];
              return r[2] && (n.length++, n.push.apply(n, t(r[2]))), r[3] && (n.push([]), n.push.apply(n, t(r[3]))), n
            },
            t = (r, n) => {
              if (0 in r) {
                n = e(n);
                var a = r[0],
                  o = a < 0;
                o && (a = -a - 1);
                for (var i = 0, s = 1, f = !0;; s++, i++) {
                  var u, c, l = s < r.length ? (typeof r[s])[0] : "";
                  if (i >= n.length || "o" == (c = (typeof(u = n[i]))[0])) return !f || ("u" == l ? s > a && !o : "" == l != o);
                  if ("u" == c) {
                    if (!f || "u" != l) return !1
                  } else if (f)
                    if (l == c)
                      if (s <= a) {
                        if (u != r[s]) return !1
                      } else {
                        if (o ? u > r[s] : u < r[s]) return !1;
                        u != r[s] && (f = !1)
                      }
                  else if ("s" != l && "n" != l) {
                    if (o || s <= a) return !1;
                    f = !1, s--
                  } else {
                    if (s <= a || c < l != o) return !1;
                    f = !1
                  } else "s" != l && "n" != l && (f = !1, s--)
                }
              }
              var d = [],
                p = d.pop.bind(d);
              for (i = 1; i < r.length; i++) {
                var h = r[i];
                d.push(1 == h ? p() | p() : 2 == h ? p() & p() : h ? t(h, n) : !p())
              }
              return !!p()
            },
            r = (r, n, a) => {
              var o = r[n];
              return (n = Object.keys(o).reduce(((r, n) => !t(a, n) || r && !((t, r) => {
                t = e(t), r = e(r);
                for (var n = 0;;) {
                  if (n >= t.length) return n < r.length && "u" != (typeof r[n])[0];
                  var a = t[n],
                    o = (typeof a)[0];
                  if (n >= r.length) return "u" == o;
                  var i = r[n],
                    s = (typeof i)[0];
                  if (o != s) return "o" == o && "n" == s || "s" == s || "u" == o;
                  if ("o" != o && "u" != o && a != i) return a < i;
                  n++
                }
              })(r, n) ? r : n), 0)) && o[n]
            },
            n = (e => function(t, r, n, a) {
              var o = d.I(t);
              return o && o.then ? o.then(e.bind(e, t, d.S[t], r, n, a)) : e(t, d.S[t], r, n, a)
            })(((e, t, n, a, o) => {
              var i = t && d.o(t, n) && r(t, n, a);
              return i ? (e => (e.loaded = 1, e.get()))(i) : o()
            })),
            a = {},
            o = {
              927: () => n("default", "react", [1, 18, 2, 0], (() => d.e(377).then((() => () => d(5377))))),
              4175: () => n("default", "react-router-dom", [1, 6, 11, 2], (() => d.e(621).then((() => () => d(621)))))
            },
            i = {
              721: [4175],
              929: [927]
            };
          d.f.consumes = (e, t) => {
            d.o(i, e) && i[e].forEach((e => {
              if (d.o(a, e)) return t.push(a[e]);
              var r = t => {
                  a[e] = 0, d.m[e] = r => {
                    delete d.c[e], r.exports = t()
                  }
                },
                n = t => {
                  delete a[e], d.m[e] = r => {
                    throw delete d.c[e], t
                  }
                };
              try {
                var i = o[e]();
                i.then ? t.push(a[e] = i.then(r).catch(n)) : r(i)
              } catch (e) {
                n(e)
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
                71: 1,
                190: 1,
                927: 1
              } [t] && r.push(e[t] = (e => new Promise(((t, r) => {
                var n = d.miniCssF(e),
                  a = d.p + n;
                if (((e, t) => {
                    for (var r = document.getElementsByTagName("link"), n = 0; n < r.length; n++) {
                      var a = (i = r[n]).getAttribute("data-href") || i.getAttribute("href");
                      if ("stylesheet" === i.rel && (a === e || a === t)) return i
                    }
                    var o = document.getElementsByTagName("style");
                    for (n = 0; n < o.length; n++) {
                      var i;
                      if ((a = (i = o[n]).getAttribute("data-href")) === e || a === t) return i
                    }
                  })(n, a)) return t();
                ((e, t, r, n, a) => {
                  var o = document.createElement("link");
                  o.rel = "stylesheet", o.type = "text/css", o.onerror = o.onload = r => {
                    if (o.onerror = o.onload = null, "load" === r.type) n();
                    else {
                      var i = r && ("load" === r.type ? "missing" : r.type),
                        s = r && r.target && r.target.href || t,
                        f = new Error("Loading CSS chunk " + e + " failed.\n(" + s + ")");
                      f.code = "CSS_CHUNK_LOAD_FAILED", f.type = i, f.request = s, o.parentNode && o.parentNode.removeChild(o), a(f)
                    }
                  }, o.href = t, document.head.appendChild(o)
                })(e, a, 0, t, r)
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
            var n = d.o(e, t) ? e[t] : void 0;
            if (0 !== n)
              if (n) r.push(n[2]);
              else if (/^(92[79]|542|721)$/.test(t)) e[t] = 0;
            else {
              var a = new Promise(((r, a) => n = e[t] = [r, a]));
              r.push(n[2] = a);
              var o = d.p + d.u(t),
                i = new Error;
              d.l(o, (r => {
                if (d.o(e, t) && (0 !== (n = e[t]) && (e[t] = void 0), n)) {
                  var a = r && ("load" === r.type ? "missing" : r.type),
                    o = r && r.target && r.target.src;
                  i.message = "Loading chunk " + t + " failed.\n(" + a + ": " + o + ")", i.name = "ChunkLoadError", i.type = a, i.request = o, n[1](i)
                }
              }), "chunk-" + t, t)
            }
          };
          var t = (t, r) => {
              var n, a, o = r[0],
                i = r[1],
                s = r[2],
                f = 0;
              if (o.some((t => 0 !== e[t]))) {
                for (n in i) d.o(i, n) && (d.m[n] = i[n]);
                s && s(d)
              }
              for (t && t(r); f < o.length; f++) a = o[f], d.o(e, a) && e[a] && e[a][0](), e[a] = 0
            },
            r = self.webpackChunk_rockstargames_components = self.webpackChunk_rockstargames_components || [];
          r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
        })(), d(9473), d(8656)
      })())
    }
  }
}));