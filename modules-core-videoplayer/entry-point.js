System.register(["@rockstargames/components", "@rockstargames/graph-client", "@rockstargames/intl", "@rockstargames/modules-core-agegate", "@rockstargames/modules-core-sc-user", "@rockstargames/polyfills", "@rockstargames/tina", "@rockstargames/utils"], (function(e, t) {
  var r = {},
    n = {},
    o = {},
    a = {},
    i = {},
    s = {},
    u = {},
    c = {};
  return Object.defineProperty(r, "__esModule", {
    value: !0
  }), Object.defineProperty(n, "__esModule", {
    value: !0
  }), Object.defineProperty(o, "__esModule", {
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
        n[t] = e[t]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(t) {
        o[t] = e[t]
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
              const n = r(2490).R;
              t.s = function(e) {
                if (e || (e = 1), !r.y.meta || !r.y.meta.url) throw console.error("__system_context__", r.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                r.p = n(r.y.meta.url, e)
              }
            },
            1308: (e, t, r) => {
              r(3580)
            },
            2490: (e, t, r) => {
              t.R = function(e, t) {
                var r = document.createElement("a");
                r.href = e;
                for (var n = "/" === r.pathname[0] ? r.pathname : "/" + r.pathname, o = 0, a = n.length; o !== t && a >= 0;) "/" === n[--a] && o++;
                if (o !== t) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + t + ") is greater than the number of directories (" + o + ") in the URL path " + e);
                var i = n.slice(0, a + 1);
                return r.protocol + "//" + r.host + i
              };
              Number.isInteger
            },
            2221: (e, t, r) => {
              "use strict";
              var n = {
                  "./index": () => Promise.all([r.e(798), r.e(485), r.e(932), r.e(773), r.e(610), r.e(872)]).then((() => () => r(4872))),
                  "./bootstrap": () => r.e(533).then((() => () => r(6533))),
                  "./tina": () => Promise.all([r.e(798), r.e(932), r.e(773), r.e(215)]).then((() => () => r(6215))),
                  "./tinaBlockTemplates": () => Promise.all([r.e(798), r.e(932), r.e(773), r.e(215)]).then((() => () => r(6215)))
                },
                o = (e, t) => (r.R = t, t = r.o(n, e) ? n[e]() : Promise.resolve().then((() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                })), r.R = void 0, t),
                a = (e, t) => {
                  if (r.S) {
                    var n = "default",
                      o = r.S[n];
                    if (o && o !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return r.S[n] = e, r.I(n, t)
                  }
                };
              r.d(t, {
                get: () => o,
                init: () => a
              })
            },
            5286: e => {
              "use strict";
              e.exports = r
            },
            5081: e => {
              "use strict";
              e.exports = n
            },
            5016: e => {
              "use strict";
              e.exports = o
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
          215: "034238fa59d9d3d74996",
          252: "f27562174d7dafa3e1c4",
          280: "431ec890cceb46fe4d44",
          334: "ce9efb0b7dd76f70e54a",
          485: "4366e010b23f936d495f",
          533: "09d1f85df7d67e419d39",
          610: "eea0c07204d0bbce4c31",
          773: "12ece128f810ad940287",
          798: "fe4b0edb33e917f4d9ce",
          872: "bb3b84c239b03f57920d",
          932: "5dc5fb5ebfc9fc7df0f2",
          944: "7a5d99336f446c2e15b2"
        } [e] + ".js", m.miniCssF = e => "css/" + {
          610: "352d528bc4a5e891dfb7",
          872: "6eb0e5d2195a10f9bde8",
          944: "eca52e67dbc3a7b3f2be"
        } [e] + ".css", m.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), m.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), e = {}, l = "@rockstargames/modules-core-videoplayer:", m.l = (t, r, n, o) => {
          if (e[t]) e[t].push(r);
          else {
            var a, i;
            if (void 0 !== n)
              for (var s = document.getElementsByTagName("script"), u = 0; u < s.length; u++) {
                var c = s[u];
                if (c.getAttribute("src") == t || c.getAttribute("data-webpack") == l + n) {
                  a = c;
                  break
                }
              }
            a || (i = !0, (a = document.createElement("script")).charset = "utf-8", a.timeout = 120, m.nc && a.setAttribute("nonce", m.nc), a.setAttribute("data-webpack", l + n), a.src = t), e[t] = [r];
            var f = (r, n) => {
                a.onerror = a.onload = null, clearTimeout(d);
                var o = e[t];
                if (delete e[t], a.parentNode && a.parentNode.removeChild(a), o && o.forEach((e => e(n))), r) return r(n)
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
          610: [1570, 6711, 7194, 9929],
          773: [8976, 4859],
          944: [1458, 6331, 7842]
        }, d = {
          1458: ["default", "./providers", 4031],
          1570: ["default", "./index", 5016],
          3374: ["default", "./ui", 7559],
          3616: ["default", "./properties", 7559],
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
            var n = d[e];
            if (!(r.indexOf(n) >= 0)) {
              if (r.push(n), n.p) return t.push(n.p);
              var o = t => {
                  t || (t = new Error("Container missing")), "string" == typeof t.message && (t.message += '\nwhile loading "' + n[1] + '" from ' + n[2]), m.m[e] = () => {
                    throw t
                  }, n.p = 0
                },
                a = (e, r, a, i, s, u) => {
                  try {
                    var c = e(r, a);
                    if (!c || !c.then) return s(c, i, u);
                    var l = c.then((e => s(e, i)), o);
                    if (!u) return l;
                    t.push(n.p = l)
                  } catch (e) {
                    o(e)
                  }
                },
                i = (e, t, o) => a(t.get, n[1], r, 0, s, o),
                s = t => {
                  n.p = 1, m.m[e] = e => {
                    e.exports = t()
                  }
                };
              a(m, n[2], 0, 0, ((e, t, r) => e ? a(m.I, n[0], 0, e, i, r) : o()), 1)
            }
          }))
        }, (() => {
          m.S = {};
          var e = {},
            t = {};
          m.I = (r, n) => {
            n || (n = []);
            var o = t[r];
            if (o || (o = t[r] = {}), !(n.indexOf(o) >= 0)) {
              if (n.push(o), e[r]) return e[r];
              m.o(m.S, r) || (m.S[r] = {});
              var a = m.S[r],
                i = "@rockstargames/modules-core-videoplayer",
                s = (e, t, r, n) => {
                  var o = a[e] = a[e] || {},
                    s = o[t];
                  (!s || !s.loaded && (!n != !s.eager ? n : i > s.from)) && (o[t] = {
                    get: r,
                    from: i,
                    eager: !!n
                  })
                },
                u = e => {
                  var t = e => {
                    return t = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(t));
                    var t
                  };
                  try {
                    var o = m(e);
                    if (!o) return;
                    var a = e => e && e.init && e.init(m.S[r], n);
                    if (o.then) return c.push(o.then(a, t));
                    var i = a(o);
                    if (i && i.then) return c.push(i.catch(t))
                  } catch (e) {
                    t(e)
                  }
                },
                c = [];
              return "default" === r && (s("react-dom", "18.2.0", (() => Promise.all([m.e(280), m.e(932)]).then((() => () => m(2280))))), s("react-router-dom", "6.11.2", (() => Promise.all([m.e(334), m.e(932)]).then((() => () => m(5334))))), s("react", "18.2.0", (() => m.e(252).then((() => () => m(8252))))), u(5286), u(5081), u(5016), u(649), u(4031), u(2369), u(7559), u(1861)), c.length ? e[r] = Promise.all(c).then((() => e[r] = 1)) : e[r] = 1
            }
          }
        })(), m.p = "", (() => {
          var e = e => {
              var t = e => e.split(".").map((e => +e == e ? +e : e)),
                r = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
                n = r[1] ? t(r[1]) : [];
              return r[2] && (n.length++, n.push.apply(n, t(r[2]))), r[3] && (n.push([]), n.push.apply(n, t(r[3]))), n
            },
            t = (r, n) => {
              if (0 in r) {
                n = e(n);
                var o = r[0],
                  a = o < 0;
                a && (o = -o - 1);
                for (var i = 0, s = 1, u = !0;; s++, i++) {
                  var c, l, f = s < r.length ? (typeof r[s])[0] : "";
                  if (i >= n.length || "o" == (l = (typeof(c = n[i]))[0])) return !u || ("u" == f ? s > o && !a : "" == f != a);
                  if ("u" == l) {
                    if (!u || "u" != f) return !1
                  } else if (u)
                    if (f == l)
                      if (s <= o) {
                        if (c != r[s]) return !1
                      } else {
                        if (a ? c > r[s] : c < r[s]) return !1;
                        c != r[s] && (u = !1)
                      }
                  else if ("s" != f && "n" != f) {
                    if (a || s <= o) return !1;
                    u = !1, s--
                  } else {
                    if (s <= o || l < f != a) return !1;
                    u = !1
                  } else "s" != f && "n" != f && (u = !1, s--)
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
            r = (r, n, o) => {
              var a = r[n];
              return (n = Object.keys(a).reduce(((r, n) => !t(o, n) || r && !((t, r) => {
                t = e(t), r = e(r);
                for (var n = 0;;) {
                  if (n >= t.length) return n < r.length && "u" != (typeof r[n])[0];
                  var o = t[n],
                    a = (typeof o)[0];
                  if (n >= r.length) return "u" == a;
                  var i = r[n],
                    s = (typeof i)[0];
                  if (a != s) return "o" == a && "n" == s || "s" == s || "u" == a;
                  if ("o" != a && "u" != a && o != i) return o < i;
                  n++
                }
              })(r, n) ? r : n), 0)) && a[n]
            },
            n = (e => function(t, r, n, o) {
              var a = m.I(t);
              return a && a.then ? a.then(e.bind(e, t, m.S[t], r, n, o)) : e(t, m.S[t], r, n, o)
            })(((e, t, n, o, a) => {
              var i = t && m.o(t, n) && r(t, n, o);
              return i ? (e => (e.loaded = 1, e.get()))(i) : a()
            })),
            o = {},
            a = {
              4932: () => n("default", "react", [1, 18, 2, 0], (() => m.e(252).then((() => () => m(8252))))),
              1424: () => n("default", "react-router-dom", [1, 6, 11, 2], (() => m.e(334).then((() => () => m(5334))))),
              8677: () => n("default", "react-dom", [1, 18, 2, 0], (() => m.e(280).then((() => () => m(2280)))))
            },
            i = {
              610: [1424],
              932: [4932],
              944: [8677]
            };
          m.f.consumes = (e, t) => {
            m.o(i, e) && i[e].forEach((e => {
              if (m.o(o, e)) return t.push(o[e]);
              var r = t => {
                  o[e] = 0, m.m[e] = r => {
                    delete m.c[e], r.exports = t()
                  }
                },
                n = t => {
                  delete o[e], m.m[e] = r => {
                    throw delete m.c[e], t
                  }
                };
              try {
                var i = a[e]();
                i.then ? t.push(o[e] = i.then(r).catch(n)) : r(i)
              } catch (e) {
                n(e)
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
                var n = m.miniCssF(e),
                  o = m.p + n;
                if (((e, t) => {
                    for (var r = document.getElementsByTagName("link"), n = 0; n < r.length; n++) {
                      var o = (i = r[n]).getAttribute("data-href") || i.getAttribute("href");
                      if ("stylesheet" === i.rel && (o === e || o === t)) return i
                    }
                    var a = document.getElementsByTagName("style");
                    for (n = 0; n < a.length; n++) {
                      var i;
                      if ((o = (i = a[n]).getAttribute("data-href")) === e || o === t) return i
                    }
                  })(n, o)) return t();
                ((e, t, r, n, o) => {
                  var a = document.createElement("link");
                  a.rel = "stylesheet", a.type = "text/css", a.onerror = a.onload = r => {
                    if (a.onerror = a.onload = null, "load" === r.type) n();
                    else {
                      var i = r && ("load" === r.type ? "missing" : r.type),
                        s = r && r.target && r.target.href || t,
                        u = new Error("Loading CSS chunk " + e + " failed.\n(" + s + ")");
                      u.code = "CSS_CHUNK_LOAD_FAILED", u.type = i, u.request = s, a.parentNode && a.parentNode.removeChild(a), o(u)
                    }
                  }, a.href = t, document.head.appendChild(a)
                })(e, o, 0, t, r)
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
            var n = m.o(e, t) ? e[t] : void 0;
            if (0 !== n)
              if (n) r.push(n[2]);
              else if (/^(773|932)$/.test(t)) e[t] = 0;
            else {
              var o = new Promise(((r, o) => n = e[t] = [r, o]));
              r.push(n[2] = o);
              var a = m.p + m.u(t),
                i = new Error;
              m.l(a, (r => {
                if (m.o(e, t) && (0 !== (n = e[t]) && (e[t] = void 0), n)) {
                  var o = r && ("load" === r.type ? "missing" : r.type),
                    a = r && r.target && r.target.src;
                  i.message = "Loading chunk " + t + " failed.\n(" + o + ": " + a + ")", i.name = "ChunkLoadError", i.type = o, i.request = a, n[1](i)
                }
              }), "chunk-" + t, t)
            }
          };
          var t = (t, r) => {
              var n, o, a = r[0],
                i = r[1],
                s = r[2],
                u = 0;
              if (a.some((t => 0 !== e[t]))) {
                for (n in i) m.o(i, n) && (m.m[n] = i[n]);
                s && s(m)
              }
              for (t && t(r); u < a.length; u++) o = a[u], m.o(e, o) && e[o] && e[o][0](), e[o] = 0
            },
            r = self.webpackChunk_rockstargames_modules_core_videoplayer = self.webpackChunk_rockstargames_modules_core_videoplayer || [];
          r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
        })(), m(1308), m(2221)
      })())
    }
  }
}));