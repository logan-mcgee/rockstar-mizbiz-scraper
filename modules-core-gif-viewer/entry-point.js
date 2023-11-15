System.register(["@rockstargames/components", "@rockstargames/graph-client", "@rockstargames/tina"], (function(e, r) {
  var t = {},
    n = {},
    a = {};
  return Object.defineProperty(t, "__esModule", {
    value: !0
  }), Object.defineProperty(n, "__esModule", {
    value: !0
  }), Object.defineProperty(a, "__esModule", {
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
    }],
    execute: function() {
      e((() => {
        var e, o, i, s, u = {
            100: (e, r, t) => {
              (0, t(487).s)(1)
            },
            487: (e, r, t) => {
              const n = t(175).R;
              r.s = function(e) {
                if (e || (e = 1), !t.y.meta || !t.y.meta.url) throw console.error("__system_context__", t.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                t.p = n(t.y.meta.url, e)
              }
            },
            473: (e, r, t) => {
              t(100)
            },
            175: (e, r, t) => {
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
            847: (e, r, t) => {
              "use strict";
              var n = {
                  "./index": () => Promise.all([t.e(927), t.e(859), t.e(357)]).then((() => () => t(357))),
                  "./lazy": () => Promise.all([t.e(927), t.e(859), t.e(371)]).then((() => () => t(371))),
                  "./tina": () => Promise.all([t.e(927), t.e(859), t.e(968)]).then((() => () => t(968))),
                  "./tinaBlockTemplates": () => Promise.all([t.e(927), t.e(859), t.e(968)]).then((() => () => t(968)))
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
            286: e => {
              "use strict";
              e.exports = t
            },
            81: e => {
              "use strict";
              e.exports = n
            },
            559: e => {
              "use strict";
              e.exports = a
            }
          },
          c = {};

        function l(e) {
          var r = c[e];
          if (void 0 !== r) return r.exports;
          var t = c[e] = {
            exports: {}
          };
          return u[e](t, t.exports, l), t.exports
        }
        return l.m = u, l.c = c, l.y = r, l.n = e => {
          var r = e && e.__esModule ? () => e.default : () => e;
          return l.d(r, {
            a: r
          }), r
        }, l.d = (e, r) => {
          for (var t in r) l.o(r, t) && !l.o(e, t) && Object.defineProperty(e, t, {
            enumerable: !0,
            get: r[t]
          })
        }, l.f = {}, l.e = e => Promise.all(Object.keys(l.f).reduce(((r, t) => (l.f[t](e, r), r)), [])), l.u = e => "js/" + {
          73: "b3601da89f2aa5d87dbde891d5aa955f",
          357: "4978da2ab92f046e83b9560ddc183e28",
          371: "60d074f09a4bc8ecc429a1a0ced0e405",
          377: "e993dbc8c229167b973052ffae3982bd",
          859: "a6d777339d630718eca99b3a99d83d3a",
          927: "32383c8a32aa45a813b93b7b0accd9a3",
          968: "1c17a76506d84552c08a4b1f7a157a9e"
        } [e] + ".js", l.miniCssF = e => "css/" + {
          357: "52f2cb7623609c1fa5f471f87057f6b2",
          371: "c1b60746a15181e0f817591031d48004"
        } [e] + ".css", l.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), l.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r), e = {}, o = "@rockstargames/modules-core-gif-viewer:", l.l = (r, t, n, a) => {
          if (e[r]) e[r].push(t);
          else {
            var i, s;
            if (void 0 !== n)
              for (var u = document.getElementsByTagName("script"), c = 0; c < u.length; c++) {
                var f = u[c];
                if (f.getAttribute("src") == r || f.getAttribute("data-webpack") == o + n) {
                  i = f;
                  break
                }
              }
            i || (s = !0, (i = document.createElement("script")).charset = "utf-8", i.timeout = 120, l.nc && i.setAttribute("nonce", l.nc), i.setAttribute("data-webpack", o + n), i.src = r), e[r] = [t];
            var d = (t, n) => {
                i.onerror = i.onload = null, clearTimeout(h);
                var a = e[r];
                if (delete e[r], i.parentNode && i.parentNode.removeChild(i), a && a.forEach((e => e(n))), t) return t(n)
              },
              h = setTimeout(d.bind(null, void 0, {
                type: "timeout",
                target: i
              }), 12e4);
            i.onerror = d.bind(null, i.onerror), i.onload = d.bind(null, i.onload), s && document.head.appendChild(i)
          }
        }, l.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, i = {
          859: [859],
          968: [374, 616, 976]
        }, s = {
          374: ["default", "./ui", 559],
          616: ["default", "./properties", 559],
          859: ["default", "./index", 81],
          976: ["default", "./index", 286]
        }, l.f.remotes = (e, r) => {
          l.o(i, e) && i[e].forEach((e => {
            var t = l.R;
            t || (t = []);
            var n = s[e];
            if (!(t.indexOf(n) >= 0)) {
              if (t.push(n), n.p) return r.push(n.p);
              var a = r => {
                  r || (r = new Error("Container missing")), "string" == typeof r.message && (r.message += '\nwhile loading "' + n[1] + '" from ' + n[2]), l.m[e] = () => {
                    throw r
                  }, n.p = 0
                },
                o = (e, t, o, i, s, u) => {
                  try {
                    var c = e(t, o);
                    if (!c || !c.then) return s(c, i, u);
                    var l = c.then((e => s(e, i)), a);
                    if (!u) return l;
                    r.push(n.p = l)
                  } catch (e) {
                    a(e)
                  }
                },
                i = (e, r, a) => o(r.get, n[1], t, 0, u, a),
                u = r => {
                  n.p = 1, l.m[e] = e => {
                    e.exports = r()
                  }
                };
              o(l, n[2], 0, 0, ((e, r, t) => e ? o(l.I, n[0], 0, e, i, t) : a()), 1)
            }
          }))
        }, (() => {
          l.S = {};
          var e = {},
            r = {};
          l.I = (t, n) => {
            n || (n = []);
            var a = r[t];
            if (a || (a = r[t] = {}), !(n.indexOf(a) >= 0)) {
              if (n.push(a), e[t]) return e[t];
              l.o(l.S, t) || (l.S[t] = {});
              var o = l.S[t],
                i = "@rockstargames/modules-core-gif-viewer",
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
                    var a = l(e);
                    if (!a) return;
                    var o = e => e && e.init && e.init(l.S[t], n);
                    if (a.then) return c.push(a.then(o, r));
                    var i = o(a);
                    if (i && i.then) return c.push(i.catch(r))
                  } catch (e) {
                    r(e)
                  }
                },
                c = [];
              return "default" === t && (s("react-router-dom", "6.17.0", (() => Promise.all([l.e(73), l.e(927)]).then((() => () => l(73))))), s("react", "18.2.0", (() => l.e(377).then((() => () => l(377))))), u(81), u(286), u(559)), c.length ? e[t] = Promise.all(c).then((() => e[t] = 1)) : e[t] = 1
            }
          }
        })(), (() => {
          var e;
          l.g.importScripts && (e = l.g.location + "");
          var r = l.g.document;
          if (!e && r && (r.currentScript && (e = r.currentScript.src), !e)) {
            var t = r.getElementsByTagName("script");
            if (t.length)
              for (var n = t.length - 1; n > -1 && !e;) e = t[n--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), l.p = e
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
                  var c, l, f = s < t.length ? (typeof t[s])[0] : "";
                  if (i >= n.length || "o" == (l = (typeof(c = n[i]))[0])) return !u || ("u" == f ? s > a && !o : "" == f != o);
                  if ("u" == l) {
                    if (!u || "u" != f) return !1
                  } else if (u)
                    if (f == l)
                      if (s <= a) {
                        if (c != t[s]) return !1
                      } else {
                        if (o ? c > t[s] : c < t[s]) return !1;
                        c != t[s] && (u = !1)
                      }
                  else if ("s" != f && "n" != f) {
                    if (o || s <= a) return !1;
                    u = !1, s--
                  } else {
                    if (s <= a || l < f != o) return !1;
                    u = !1
                  } else "s" != f && "n" != f && (u = !1, s--)
                }
              }
              var d = [],
                h = d.pop.bind(d);
              for (i = 1; i < t.length; i++) {
                var p = t[i];
                d.push(1 == p ? h() | h() : 2 == p ? h() & h() : p ? r(p, n) : !h())
              }
              return !!h()
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
              var o = l.I(r);
              return o && o.then ? o.then(e.bind(e, r, l.S[r], t, n, a)) : e(r, l.S[r], t, n, a)
            })(((e, r, n, a, o) => {
              var i = r && l.o(r, n) && t(r, n, a);
              return i ? (e => (e.loaded = 1, e.get()))(i) : o()
            })),
            a = {},
            o = {
              927: () => n("default", "react", [1, 18, 2, 0], (() => l.e(377).then((() => () => l(377))))),
              583: () => n("default", "react-router-dom", [1, 6, 11, 2], (() => l.e(73).then((() => () => l(73)))))
            },
            i = {
              371: [583],
              927: [927]
            };
          l.f.consumes = (e, r) => {
            l.o(i, e) && i[e].forEach((e => {
              if (l.o(a, e)) return r.push(a[e]);
              var t = r => {
                  a[e] = 0, l.m[e] = t => {
                    delete l.c[e], t.exports = r()
                  }
                },
                n = r => {
                  delete a[e], l.m[e] = t => {
                    throw delete l.c[e], r
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
              560: 0
            };
            l.f.miniCss = (r, t) => {
              e[r] ? t.push(e[r]) : 0 !== e[r] && {
                357: 1,
                371: 1
              } [r] && t.push(e[r] = (e => new Promise(((r, t) => {
                var n = l.miniCssF(e),
                  a = l.p + n;
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
            560: 0
          };
          l.f.j = (r, t) => {
            var n = l.o(e, r) ? e[r] : void 0;
            if (0 !== n)
              if (n) t.push(n[2]);
              else if (/^(859|927)$/.test(r)) e[r] = 0;
            else {
              var a = new Promise(((t, a) => n = e[r] = [t, a]));
              t.push(n[2] = a);
              var o = l.p + l.u(r),
                i = new Error;
              l.l(o, (t => {
                if (l.o(e, r) && (0 !== (n = e[r]) && (e[r] = void 0), n)) {
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
                for (n in i) l.o(i, n) && (l.m[n] = i[n]);
                s && s(l)
              }
              for (r && r(t); u < o.length; u++) a = o[u], l.o(e, a) && e[a] && e[a][0](), e[a] = 0
            },
            t = self.webpackChunk_rockstargames_modules_core_gif_viewer = self.webpackChunk_rockstargames_modules_core_gif_viewer || [];
          t.forEach(r.bind(null, 0)), t.push = r.bind(null, t.push.bind(t))
        })(), l(473), l(847)
      })())
    }
  }
}));