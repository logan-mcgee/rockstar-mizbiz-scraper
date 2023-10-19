System.register(["@rockstargames/graph-client", "@rockstargames/modules-core-sc-user", "@rockstargames/tina", "@rockstargames/utils"], (function(e, r) {
  var t = {},
    n = {},
    a = {},
    o = {};
  return Object.defineProperty(t, "__esModule", {
    value: !0
  }), Object.defineProperty(n, "__esModule", {
    value: !0
  }), Object.defineProperty(a, "__esModule", {
    value: !0
  }), Object.defineProperty(o, "__esModule", {
    value: !0
  }), {
    setters: [function(e) {
      Object.keys(e).forEach((function(r) {
        t[r] = e[r]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(r) {
        n[r] = e[r]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(r) {
        a[r] = e[r]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(r) {
        o[r] = e[r]
      }))
    }],
    execute: function() {
      e((() => {
        var e, i, s, u, f = {
            488: (e, r, t) => {
              (0, t(5902).s)(1)
            },
            5902: (e, r, t) => {
              const n = t(5374).R;
              r.s = function(e) {
                if (e || (e = 1), !t.y.meta || !t.y.meta.url) throw console.error("__system_context__", t.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                t.p = n(t.y.meta.url, e)
              }
            },
            2467: (e, r, t) => {
              t(488)
            },
            5374: (e, r, t) => {
              r.R = function(e, r) {
                var t = document.createElement("a");
                t.href = e;
                for (var n = "/" === t.pathname[0] ? t.pathname : "/" + t.pathname, a = 0, o = n.length; a !== r && o >= 0;) "/" === n[--o] && a++;
                if (a !== r) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + r + ") is greater than the number of directories (" + a + ") in the URL path " + e);
                var i = n.slice(0, o + 1);
                return t.protocol + "//" + t.host + i
              };
              Number.isInteger
            },
            8656: (e, r, t) => {
              "use strict";
              var n = {
                  "./index": () => Promise.all([t.e(262), t.e(192), t.e(487), t.e(927), t.e(542), t.e(647), t.e(899), t.e(703)]).then((() => () => t(2541))),
                  "./providers": () => Promise.all([t.e(262), t.e(927), t.e(542), t.e(899), t.e(94)]).then((() => () => t(1094))),
                  "./tinaBlockTemplates": () => Promise.all([t.e(192), t.e(927), t.e(542), t.e(647), t.e(77)]).then((() => () => t(8527)))
                },
                a = (e, r) => (t.R = r, r = t.o(n, e) ? n[e]() : Promise.resolve().then((() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                })), t.R = void 0, r),
                o = (e, r) => {
                  if (t.S) {
                    var n = "default",
                      a = t.S[n];
                    if (a && a !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return t.S[n] = e, t.I(n, r)
                  }
                };
              t.d(r, {
                get: () => a,
                init: () => o
              })
            },
            5081: e => {
              "use strict";
              e.exports = t
            },
            4031: e => {
              "use strict";
              e.exports = n
            },
            7559: e => {
              "use strict";
              e.exports = a
            },
            2369: e => {
              "use strict";
              e.exports = o
            }
          },
          l = {};

        function d(e) {
          var r = l[e];
          if (void 0 !== r) return r.exports;
          var t = l[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return f[e].call(t.exports, t, t.exports, d), t.loaded = !0, t.exports
        }
        return d.m = f, d.c = l, d.y = r, d.amdO = {}, d.n = e => {
          var r = e && e.__esModule ? () => e.default : () => e;
          return d.d(r, {
            a: r
          }), r
        }, d.d = (e, r) => {
          for (var t in r) d.o(r, t) && !d.o(e, t) && Object.defineProperty(e, t, {
            enumerable: !0,
            get: r[t]
          })
        }, d.f = {}, d.e = e => Promise.all(Object.keys(d.f).reduce(((r, t) => (d.f[t](e, r), r)), [])), d.u = e => "js/" + {
          77: "163e23f4bd8b01735770",
          94: "6cc3a81f5d608eaac827",
          192: "706d6f6f65542cbd39e9",
          262: "b2e045d2b47b670bfede",
          487: "fcd1fb3b6c55308ea093",
          542: "fd5cc288a3c790cfa9b3",
          647: "3809250761d959f2820f",
          674: "4503be7e926577ab6d8b",
          703: "739080ba2b2991d350a9",
          893: "ec2191b7243bc13271bd",
          899: "42b4f336a76e4c59c9e4",
          927: "f65faaf1207e170d913b"
        } [e] + ".js", d.miniCssF = e => "css/" + {
          94: "506f616e58eb4bc2ba9d",
          647: "3edf1d1f3f91208339ff",
          703: "2bec98c6330fc7cdbde9"
        } [e] + ".css", d.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), d.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r), e = {}, i = "@rockstargames/components:", d.l = (r, t, n, a) => {
          if (e[r]) e[r].push(t);
          else {
            var o, s;
            if (void 0 !== n)
              for (var u = document.getElementsByTagName("script"), f = 0; f < u.length; f++) {
                var l = u[f];
                if (l.getAttribute("src") == r || l.getAttribute("data-webpack") == i + n) {
                  o = l;
                  break
                }
              }
            o || (s = !0, (o = document.createElement("script")).charset = "utf-8", o.timeout = 120, d.nc && o.setAttribute("nonce", d.nc), o.setAttribute("data-webpack", i + n), o.src = r), e[r] = [t];
            var c = (t, n) => {
                o.onerror = o.onload = null, clearTimeout(p);
                var a = e[r];
                if (delete e[r], o.parentNode && o.parentNode.removeChild(o), a && a.forEach((e => e(n))), t) return t(n)
              },
              p = setTimeout(c.bind(null, void 0, {
                type: "timeout",
                target: o
              }), 12e4);
            o.onerror = c.bind(null, o.onerror), o.onload = c.bind(null, o.onload), s && document.head.appendChild(o)
          }
        }, d.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, d.nmd = e => (e.paths = [], e.children || (e.children = []), e), s = {
          77: [3374, 3616, 5607],
          542: [9542],
          647: [559, 4859, 9929],
          703: [2324, 3657, 3761, 6077, 9349],
          899: [6711]
        }, u = {
          559: ["default", "./helpers/uploads", 7559],
          2324: ["default", "./helpers", 7559],
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
        }, d.f.remotes = (e, r) => {
          d.o(s, e) && s[e].forEach((e => {
            var t = d.R;
            t || (t = []);
            var n = u[e];
            if (!(t.indexOf(n) >= 0)) {
              if (t.push(n), n.p) return r.push(n.p);
              var a = r => {
                  r || (r = new Error("Container missing")), "string" == typeof r.message && (r.message += '\nwhile loading "' + n[1] + '" from ' + n[2]), d.m[e] = () => {
                    throw r
                  }, n.p = 0
                },
                o = (e, t, o, i, s, u) => {
                  try {
                    var f = e(t, o);
                    if (!f || !f.then) return s(f, i, u);
                    var l = f.then((e => s(e, i)), a);
                    if (!u) return l;
                    r.push(n.p = l)
                  } catch (e) {
                    a(e)
                  }
                },
                i = (e, r, a) => o(r.get, n[1], t, 0, s, a),
                s = r => {
                  n.p = 1, d.m[e] = e => {
                    e.exports = r()
                  }
                };
              o(d, n[2], 0, 0, ((e, r, t) => e ? o(d.I, n[0], 0, e, i, t) : a()), 1)
            }
          }))
        }, (() => {
          d.S = {};
          var e = {},
            r = {};
          d.I = (t, n) => {
            n || (n = []);
            var a = r[t];
            if (a || (a = r[t] = {}), !(n.indexOf(a) >= 0)) {
              if (n.push(a), e[t]) return e[t];
              d.o(d.S, t) || (d.S[t] = {});
              var o = d.S[t],
                i = "@rockstargames/components",
                s = (e, r, t, n) => {
                  var a = o[e] = o[e] || {},
                    s = a[r];
                  (!s || !s.loaded && (!n != !s.eager ? n : i > s.from)) && (a[r] = {
                    get: t,
                    from: i,
                    eager: !!n
                  })
                },
                u = e => {
                  var r = e => {
                    return r = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(r));
                    var r
                  };
                  try {
                    var a = d(e);
                    if (!a) return;
                    var o = e => e && e.init && e.init(d.S[t], n);
                    if (a.then) return f.push(a.then(o, r));
                    var i = o(a);
                    if (i && i.then) return f.push(i.catch(r))
                  } catch (e) {
                    r(e)
                  }
                },
                f = [];
              return "default" === t && (s("react-router-dom", "6.16.0", (() => Promise.all([d.e(893), d.e(927)]).then((() => () => d(7893))))), s("react", "18.2.0", (() => d.e(674).then((() => () => d(1674))))), u(7559), u(5081), u(2369), u(4031)), f.length ? e[t] = Promise.all(f).then((() => e[t] = 1)) : e[t] = 1
            }
          }
        })(), (() => {
          var e;
          d.g.importScripts && (e = d.g.location + "");
          var r = d.g.document;
          if (!e && r && (r.currentScript && (e = r.currentScript.src), !e)) {
            var t = r.getElementsByTagName("script");
            if (t.length)
              for (var n = t.length - 1; n > -1 && !e;) e = t[n--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), d.p = e
        })(), (() => {
          var e = e => {
              var r = e => e.split(".").map((e => +e == e ? +e : e)),
                t = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
                n = t[1] ? r(t[1]) : [];
              return t[2] && (n.length++, n.push.apply(n, r(t[2]))), t[3] && (n.push([]), n.push.apply(n, r(t[3]))), n
            },
            r = (t, n) => {
              if (0 in t) {
                n = e(n);
                var a = t[0],
                  o = a < 0;
                o && (a = -a - 1);
                for (var i = 0, s = 1, u = !0;; s++, i++) {
                  var f, l, d = s < t.length ? (typeof t[s])[0] : "";
                  if (i >= n.length || "o" == (l = (typeof(f = n[i]))[0])) return !u || ("u" == d ? s > a && !o : "" == d != o);
                  if ("u" == l) {
                    if (!u || "u" != d) return !1
                  } else if (u)
                    if (d == l)
                      if (s <= a) {
                        if (f != t[s]) return !1
                      } else {
                        if (o ? f > t[s] : f < t[s]) return !1;
                        f != t[s] && (u = !1)
                      }
                  else if ("s" != d && "n" != d) {
                    if (o || s <= a) return !1;
                    u = !1, s--
                  } else {
                    if (s <= a || l < d != o) return !1;
                    u = !1
                  } else "s" != d && "n" != d && (u = !1, s--)
                }
              }
              var c = [],
                p = c.pop.bind(c);
              for (i = 1; i < t.length; i++) {
                var h = t[i];
                c.push(1 == h ? p() | p() : 2 == h ? p() & p() : h ? r(h, n) : !p())
              }
              return !!p()
            },
            t = (t, n, a) => {
              var o = t[n];
              return (n = Object.keys(o).reduce(((t, n) => !r(a, n) || t && !((r, t) => {
                r = e(r), t = e(t);
                for (var n = 0;;) {
                  if (n >= r.length) return n < t.length && "u" != (typeof t[n])[0];
                  var a = r[n],
                    o = (typeof a)[0];
                  if (n >= t.length) return "u" == o;
                  var i = t[n],
                    s = (typeof i)[0];
                  if (o != s) return "o" == o && "n" == s || "s" == s || "u" == o;
                  if ("o" != o && "u" != o && a != i) return a < i;
                  n++
                }
              })(t, n) ? t : n), 0)) && o[n]
            },
            n = (e => function(r, t, n, a) {
              var o = d.I(r);
              return o && o.then ? o.then(e.bind(e, r, d.S[r], t, n, a)) : e(r, d.S[r], t, n, a)
            })(((e, r, n, a, o) => {
              var i = r && d.o(r, n) && t(r, n, a);
              return i ? (e => (e.loaded = 1, e.get()))(i) : o()
            })),
            a = {},
            o = {
              927: () => n("default", "react", [1, 18, 2, 0], (() => d.e(674).then((() => () => d(1674))))),
              6602: () => n("default", "react-router-dom", [1, 6, 11, 2], (() => d.e(893).then((() => () => d(7893)))))
            },
            i = {
              899: [6602],
              927: [927]
            };
          d.f.consumes = (e, r) => {
            d.o(i, e) && i[e].forEach((e => {
              if (d.o(a, e)) return r.push(a[e]);
              var t = r => {
                  a[e] = 0, d.m[e] = t => {
                    delete d.c[e], t.exports = r()
                  }
                },
                n = r => {
                  delete a[e], d.m[e] = t => {
                    throw delete d.c[e], r
                  }
                };
              try {
                var i = o[e]();
                i.then ? r.push(a[e] = i.then(t).catch(n)) : t(i)
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
            d.f.miniCss = (r, t) => {
              e[r] ? t.push(e[r]) : 0 !== e[r] && {
                94: 1,
                647: 1,
                703: 1
              } [r] && t.push(e[r] = (e => new Promise(((r, t) => {
                var n = d.miniCssF(e),
                  a = d.p + n;
                if (((e, r) => {
                    for (var t = document.getElementsByTagName("link"), n = 0; n < t.length; n++) {
                      var a = (i = t[n]).getAttribute("data-href") || i.getAttribute("href");
                      if ("stylesheet" === i.rel && (a === e || a === r)) return i
                    }
                    var o = document.getElementsByTagName("style");
                    for (n = 0; n < o.length; n++) {
                      var i;
                      if ((a = (i = o[n]).getAttribute("data-href")) === e || a === r) return i
                    }
                  })(n, a)) return r();
                ((e, r, t, n, a) => {
                  var o = document.createElement("link");
                  o.rel = "stylesheet", o.type = "text/css", o.onerror = o.onload = t => {
                    if (o.onerror = o.onload = null, "load" === t.type) n();
                    else {
                      var i = t && ("load" === t.type ? "missing" : t.type),
                        s = t && t.target && t.target.href || r,
                        u = new Error("Loading CSS chunk " + e + " failed.\n(" + s + ")");
                      u.code = "CSS_CHUNK_LOAD_FAILED", u.type = i, u.request = s, o.parentNode && o.parentNode.removeChild(o), a(u)
                    }
                  }, o.href = r, document.head.appendChild(o)
                })(e, a, 0, r, t)
              })))(r).then((() => {
                e[r] = 0
              }), (t => {
                throw delete e[r], t
              })))
            }
          }
        })(), (() => {
          var e = {
            215: 0
          };
          d.f.j = (r, t) => {
            var n = d.o(e, r) ? e[r] : void 0;
            if (0 !== n)
              if (n) t.push(n[2]);
              else if (/^(542|647|899|927)$/.test(r)) e[r] = 0;
            else {
              var a = new Promise(((t, a) => n = e[r] = [t, a]));
              t.push(n[2] = a);
              var o = d.p + d.u(r),
                i = new Error;
              d.l(o, (t => {
                if (d.o(e, r) && (0 !== (n = e[r]) && (e[r] = void 0), n)) {
                  var a = t && ("load" === t.type ? "missing" : t.type),
                    o = t && t.target && t.target.src;
                  i.message = "Loading chunk " + r + " failed.\n(" + a + ": " + o + ")", i.name = "ChunkLoadError", i.type = a, i.request = o, n[1](i)
                }
              }), "chunk-" + r, r)
            }
          };
          var r = (r, t) => {
              var n, a, o = t[0],
                i = t[1],
                s = t[2],
                u = 0;
              if (o.some((r => 0 !== e[r]))) {
                for (n in i) d.o(i, n) && (d.m[n] = i[n]);
                s && s(d)
              }
              for (r && r(t); u < o.length; u++) a = o[u], d.o(e, a) && e[a] && e[a][0](), e[a] = 0
            },
            t = self.webpackChunk_rockstargames_components = self.webpackChunk_rockstargames_components || [];
          t.forEach(r.bind(null, 0)), t.push = r.bind(null, t.push.bind(t))
        })(), d(2467), d(8656)
      })())
    }
  }
}));