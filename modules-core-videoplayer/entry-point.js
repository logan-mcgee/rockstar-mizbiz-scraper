System.register(["@rockstargames/components", "@rockstargames/graph-client", "@rockstargames/intl", "@rockstargames/modules-core-agegate", "@rockstargames/modules-core-sc-user", "@rockstargames/polyfills", "@rockstargames/tina", "@rockstargames/utils"], (function(e, t) {
  var r = {},
    o = {},
    n = {},
    a = {},
    i = {},
    s = {},
    u = {},
    c = {};
  return Object.defineProperty(r, "__esModule", {
    value: !0
  }), Object.defineProperty(o, "__esModule", {
    value: !0
  }), Object.defineProperty(n, "__esModule", {
    value: !0
  }), Object.defineProperty(a, "__esModule", {
    value: !0
  }), Object.defineProperty(i, "__esModule", {
    value: !0
  }), Object.defineProperty(s, "__esModule", {
    value: !0
  }), Object.defineProperty(u, "__esModule", {
    value: !0
  }), Object.defineProperty(c, "__esModule", {
    value: !0
  }), {
    setters: [function(e) {
      Object.keys(e).forEach((function(t) {
        r[t] = e[t]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(t) {
        o[t] = e[t]
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
        i[t] = e[t]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(t) {
        s[t] = e[t]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(t) {
        u[t] = e[t]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(t) {
        c[t] = e[t]
      }))
    }],
    execute: function() {
      e((() => {
        var e, l, f, d, p = {
            3580: (e, t, r) => {
              (0, r(4879).s)(1)
            },
            4879: (e, t, r) => {
              const o = r(2490).R;
              t.s = function(e) {
                if (e || (e = 1), !r.y.meta || !r.y.meta.url) throw console.error("__system_context__", r.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                r.p = o(r.y.meta.url, e)
              }
            },
            1308: (e, t, r) => {
              r(3580)
            },
            2490: (e, t, r) => {
              t.R = function(e, t) {
                var r = document.createElement("a");
                r.href = e;
                for (var o = "/" === r.pathname[0] ? r.pathname : "/" + r.pathname, n = 0, a = o.length; n !== t && a >= 0;) "/" === o[--a] && n++;
                if (n !== t) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + t + ") is greater than the number of directories (" + n + ") in the URL path " + e);
                var i = o.slice(0, a + 1);
                return r.protocol + "//" + r.host + i
              };
              Number.isInteger
            },
            5086: (e, t, r) => {
              "use strict";
              var o = {
                  "./bootstrap": () => r.e(533).then((() => () => r(6533))),
                  "./index": () => Promise.all([r.e(798), r.e(557), r.e(932), r.e(773), r.e(610), r.e(872)]).then((() => () => r(4872))),
                  "./tina": () => Promise.all([r.e(798), r.e(932), r.e(773), r.e(215)]).then((() => () => r(6215))),
                  "./tinaBlockTemplates": () => Promise.all([r.e(798), r.e(932), r.e(773), r.e(215)]).then((() => () => r(6215)))
                },
                n = (e, t) => (r.R = t, t = r.o(o, e) ? o[e]() : Promise.resolve().then((() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                })), r.R = void 0, t),
                a = (e, t) => {
                  if (r.S) {
                    var o = "default",
                      n = r.S[o];
                    if (n && n !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return r.S[o] = e, r.I(o, t)
                  }
                };
              r.d(t, {
                get: () => n,
                init: () => a
              })
            },
            5286: e => {
              "use strict";
              e.exports = r
            },
            5081: e => {
              "use strict";
              e.exports = o
            },
            5016: e => {
              "use strict";
              e.exports = n
            },
            649: e => {
              "use strict";
              e.exports = a
            },
            4031: e => {
              "use strict";
              e.exports = i
            },
            1861: e => {
              "use strict";
              e.exports = s
            },
            7559: e => {
              "use strict";
              e.exports = u
            },
            2369: e => {
              "use strict";
              e.exports = c
            }
          },
          h = {};

        function m(e) {
          var t = h[e];
          if (void 0 !== t) return t.exports;
          var r = h[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return p[e].call(r.exports, r, r.exports, m), r.loaded = !0, r.exports
        }
        return m.m = p, m.c = h, m.y = t, m.n = e => {
          var t = e && e.__esModule ? () => e.default : () => e;
          return m.d(t, {
            a: t
          }), t
        }, m.d = (e, t) => {
          for (var r in t) m.o(t, r) && !m.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: t[r]
          })
        }, m.f = {}, m.e = e => Promise.all(Object.keys(m.f).reduce(((t, r) => (m.f[r](e, t), t)), [])), m.u = e => "js/" + {
          215: "ab0447fb17222be06a5e",
          252: "d96468e286ed0356f53e",
          280: "140bca1c10332347dbf1",
          334: "e8a3aa140f6f7758f6df",
          533: "a49bddf9f101aac9cd4a",
          557: "91505e1d1a4b54ba58b5",
          610: "43b899e9a2d2324c328f",
          773: "12ece128f810ad940287",
          798: "46a8f2d0871807fb9f1e",
          872: "9010f73c3775d3bc55d8",
          932: "5dc5fb5ebfc9fc7df0f2",
          944: "7563fe1a212281988896"
        } [e] + ".js", m.miniCssF = e => "css/" + {
          610: "195cfa7128518433f7ae",
          872: "e430b5e92e0bf78da416",
          944: "9a9bca87de61a48e3c36"
        } [e] + ".css", m.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), m.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), e = {}, l = "@rockstargames/modules-core-videoplayer:", m.l = (t, r, o, n) => {
          if (e[t]) e[t].push(r);
          else {
            var a, i;
            if (void 0 !== o)
              for (var s = document.getElementsByTagName("script"), u = 0; u < s.length; u++) {
                var c = s[u];
                if (c.getAttribute("src") == t || c.getAttribute("data-webpack") == l + o) {
                  a = c;
                  break
                }
              }
            a || (i = !0, (a = document.createElement("script")).charset = "utf-8", a.timeout = 120, m.nc && a.setAttribute("nonce", m.nc), a.setAttribute("data-webpack", l + o), a.src = t), e[t] = [r];
            var f = (r, o) => {
                a.onerror = a.onload = null, clearTimeout(d);
                var n = e[t];
                if (delete e[t], a.parentNode && a.parentNode.removeChild(a), n && n.forEach((e => e(o))), r) return r(o)
              },
              d = setTimeout(f.bind(null, void 0, {
                type: "timeout",
                target: a
              }), 12e4);
            a.onerror = f.bind(null, a.onerror), a.onload = f.bind(null, a.onload), i && document.head.appendChild(a)
          }
        }, m.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, m.nmd = e => (e.paths = [], e.children || (e.children = []), e), f = {
          215: [3374, 3616, 3761],
          610: [3657, 6711, 7194, 9929],
          773: [8976, 4859],
          944: [1458, 1570, 6331, 7842]
        }, d = {
          1458: ["default", "./providers", 4031],
          1570: ["default", "./index", 5016],
          3374: ["default", "./ui", 7559],
          3616: ["default", "./properties", 7559],
          3657: ["default", "./hooks", 2369],
          3761: ["default", "./operations/queries", 5081],
          4859: ["default", "./index", 5081],
          6331: ["default", "./gtm", 2369],
          6711: ["default", "./index", 4031],
          7194: ["default", "./index", 649],
          7842: ["default", "./browser", 1861],
          8976: ["default", "./index", 5286],
          9929: ["default", "./index", 2369]
        }, m.f.remotes = (e, t) => {
          m.o(f, e) && f[e].forEach((e => {
            var r = m.R;
            r || (r = []);
            var o = d[e];
            if (!(r.indexOf(o) >= 0)) {
              if (r.push(o), o.p) return t.push(o.p);
              var n = t => {
                  t || (t = new Error("Container missing")), "string" == typeof t.message && (t.message += '\nwhile loading "' + o[1] + '" from ' + o[2]), m.m[e] = () => {
                    throw t
                  }, o.p = 0
                },
                a = (e, r, a, i, s, u) => {
                  try {
                    var c = e(r, a);
                    if (!c || !c.then) return s(c, i, u);
                    var l = c.then((e => s(e, i)), n);
                    if (!u) return l;
                    t.push(o.p = l)
                  } catch (e) {
                    n(e)
                  }
                },
                i = (e, t, n) => a(t.get, o[1], r, 0, s, n),
                s = t => {
                  o.p = 1, m.m[e] = e => {
                    e.exports = t()
                  }
                };
              a(m, o[2], 0, 0, ((e, t, r) => e ? a(m.I, o[0], 0, e, i, r) : n()), 1)
            }
          }))
        }, (() => {
          m.S = {};
          var e = {},
            t = {};
          m.I = (r, o) => {
            o || (o = []);
            var n = t[r];
            if (n || (n = t[r] = {}), !(o.indexOf(n) >= 0)) {
              if (o.push(n), e[r]) return e[r];
              m.o(m.S, r) || (m.S[r] = {});
              var a = m.S[r],
                i = "@rockstargames/modules-core-videoplayer",
                s = (e, t, r, o) => {
                  var n = a[e] = a[e] || {},
                    s = n[t];
                  (!s || !s.loaded && (!o != !s.eager ? o : i > s.from)) && (n[t] = {
                    get: r,
                    from: i,
                    eager: !!o
                  })
                },
                u = e => {
                  var t = e => {
                    return t = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(t));
                    var t
                  };
                  try {
                    var n = m(e);
                    if (!n) return;
                    var a = e => e && e.init && e.init(m.S[r], o);
                    if (n.then) return c.push(n.then(a, t));
                    var i = a(n);
                    if (i && i.then) return c.push(i.catch(t))
                  } catch (e) {
                    t(e)
                  }
                },
                c = [];
              return "default" === r && (s("react-dom", "18.2.0", (() => Promise.all([m.e(280), m.e(932)]).then((() => () => m(2280))))), s("react-router-dom", "6.11.2", (() => Promise.all([m.e(334), m.e(932)]).then((() => () => m(5334))))), s("react", "18.2.0", (() => m.e(252).then((() => () => m(8252))))), u(5286), u(5081), u(649), u(4031), u(2369), u(7559), u(5016), u(1861)), c.length ? e[r] = Promise.all(c).then((() => e[r] = 1)) : e[r] = 1
            }
          }
        })(), (() => {
          var e;
          m.g.importScripts && (e = m.g.location + "");
          var t = m.g.document;
          if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
            var r = t.getElementsByTagName("script");
            if (r.length)
              for (var o = r.length - 1; o > -1 && !e;) e = r[o--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), m.p = e
        })(), (() => {
          var e = e => {
              var t = e => e.split(".").map((e => +e == e ? +e : e)),
                r = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
                o = r[1] ? t(r[1]) : [];
              return r[2] && (o.length++, o.push.apply(o, t(r[2]))), r[3] && (o.push([]), o.push.apply(o, t(r[3]))), o
            },
            t = (r, o) => {
              if (0 in r) {
                o = e(o);
                var n = r[0],
                  a = n < 0;
                a && (n = -n - 1);
                for (var i = 0, s = 1, u = !0;; s++, i++) {
                  var c, l, f = s < r.length ? (typeof r[s])[0] : "";
                  if (i >= o.length || "o" == (l = (typeof(c = o[i]))[0])) return !u || ("u" == f ? s > n && !a : "" == f != a);
                  if ("u" == l) {
                    if (!u || "u" != f) return !1
                  } else if (u)
                    if (f == l)
                      if (s <= n) {
                        if (c != r[s]) return !1
                      } else {
                        if (a ? c > r[s] : c < r[s]) return !1;
                        c != r[s] && (u = !1)
                      }
                  else if ("s" != f && "n" != f) {
                    if (a || s <= n) return !1;
                    u = !1, s--
                  } else {
                    if (s <= n || l < f != a) return !1;
                    u = !1
                  } else "s" != f && "n" != f && (u = !1, s--)
                }
              }
              var d = [],
                p = d.pop.bind(d);
              for (i = 1; i < r.length; i++) {
                var h = r[i];
                d.push(1 == h ? p() | p() : 2 == h ? p() & p() : h ? t(h, o) : !p())
              }
              return !!p()
            },
            r = (r, o, n) => {
              var a = r[o];
              return (o = Object.keys(a).reduce(((r, o) => !t(n, o) || r && !((t, r) => {
                t = e(t), r = e(r);
                for (var o = 0;;) {
                  if (o >= t.length) return o < r.length && "u" != (typeof r[o])[0];
                  var n = t[o],
                    a = (typeof n)[0];
                  if (o >= r.length) return "u" == a;
                  var i = r[o],
                    s = (typeof i)[0];
                  if (a != s) return "o" == a && "n" == s || "s" == s || "u" == a;
                  if ("o" != a && "u" != a && n != i) return n < i;
                  o++
                }
              })(r, o) ? r : o), 0)) && a[o]
            },
            o = (e => function(t, r, o, n) {
              var a = m.I(t);
              return a && a.then ? a.then(e.bind(e, t, m.S[t], r, o, n)) : e(t, m.S[t], r, o, n)
            })(((e, t, o, n, a) => {
              var i = t && m.o(t, o) && r(t, o, n);
              return i ? (e => (e.loaded = 1, e.get()))(i) : a()
            })),
            n = {},
            a = {
              4932: () => o("default", "react", [1, 18, 2, 0], (() => m.e(252).then((() => () => m(8252))))),
              1424: () => o("default", "react-router-dom", [1, 6, 11, 2], (() => m.e(334).then((() => () => m(5334))))),
              8677: () => o("default", "react-dom", [1, 18, 2, 0], (() => m.e(280).then((() => () => m(2280)))))
            },
            i = {
              610: [1424],
              932: [4932],
              944: [8677]
            };
          m.f.consumes = (e, t) => {
            m.o(i, e) && i[e].forEach((e => {
              if (m.o(n, e)) return t.push(n[e]);
              var r = t => {
                  n[e] = 0, m.m[e] = r => {
                    delete m.c[e], r.exports = t()
                  }
                },
                o = t => {
                  delete n[e], m.m[e] = r => {
                    throw delete m.c[e], t
                  }
                };
              try {
                var i = a[e]();
                i.then ? t.push(n[e] = i.then(r).catch(o)) : r(i)
              } catch (e) {
                o(e)
              }
            }))
          }
        })(), (() => {
          if ("undefined" != typeof document) {
            var e = {
              673: 0
            };
            m.f.miniCss = (t, r) => {
              e[t] ? r.push(e[t]) : 0 !== e[t] && {
                610: 1,
                872: 1,
                944: 1
              } [t] && r.push(e[t] = (e => new Promise(((t, r) => {
                var o = m.miniCssF(e),
                  n = m.p + o;
                if (((e, t) => {
                    for (var r = document.getElementsByTagName("link"), o = 0; o < r.length; o++) {
                      var n = (i = r[o]).getAttribute("data-href") || i.getAttribute("href");
                      if ("stylesheet" === i.rel && (n === e || n === t)) return i
                    }
                    var a = document.getElementsByTagName("style");
                    for (o = 0; o < a.length; o++) {
                      var i;
                      if ((n = (i = a[o]).getAttribute("data-href")) === e || n === t) return i
                    }
                  })(o, n)) return t();
                ((e, t, r, o, n) => {
                  var a = document.createElement("link");
                  a.rel = "stylesheet", a.type = "text/css", a.onerror = a.onload = r => {
                    if (a.onerror = a.onload = null, "load" === r.type) o();
                    else {
                      var i = r && ("load" === r.type ? "missing" : r.type),
                        s = r && r.target && r.target.href || t,
                        u = new Error("Loading CSS chunk " + e + " failed.\n(" + s + ")");
                      u.code = "CSS_CHUNK_LOAD_FAILED", u.type = i, u.request = s, a.parentNode && a.parentNode.removeChild(a), n(u)
                    }
                  }, a.href = t, document.head.appendChild(a)
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
            673: 0
          };
          m.f.j = (t, r) => {
            var o = m.o(e, t) ? e[t] : void 0;
            if (0 !== o)
              if (o) r.push(o[2]);
              else if (/^(773|932)$/.test(t)) e[t] = 0;
            else {
              var n = new Promise(((r, n) => o = e[t] = [r, n]));
              r.push(o[2] = n);
              var a = m.p + m.u(t),
                i = new Error;
              m.l(a, (r => {
                if (m.o(e, t) && (0 !== (o = e[t]) && (e[t] = void 0), o)) {
                  var n = r && ("load" === r.type ? "missing" : r.type),
                    a = r && r.target && r.target.src;
                  i.message = "Loading chunk " + t + " failed.\n(" + n + ": " + a + ")", i.name = "ChunkLoadError", i.type = n, i.request = a, o[1](i)
                }
              }), "chunk-" + t, t)
            }
          };
          var t = (t, r) => {
              var o, n, a = r[0],
                i = r[1],
                s = r[2],
                u = 0;
              if (a.some((t => 0 !== e[t]))) {
                for (o in i) m.o(i, o) && (m.m[o] = i[o]);
                s && s(m)
              }
              for (t && t(r); u < a.length; u++) n = a[u], m.o(e, n) && e[n] && e[n][0](), e[n] = 0
            },
            r = self.webpackChunk_rockstargames_modules_core_videoplayer = self.webpackChunk_rockstargames_modules_core_videoplayer || [];
          r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
        })(), m(1308), m(5086)
      })())
    }
  }
}));
//# sourceMappingURL=remote-entry.js.map