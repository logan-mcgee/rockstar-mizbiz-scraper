System.register(["@rockstargames/components", "@rockstargames/graph-client", "@rockstargames/intl", "@rockstargames/modules-core-agegate", "@rockstargames/modules-core-sc-user", "@rockstargames/polyfills", "@rockstargames/tina", "@rockstargames/utils"], (function(e, t) {
  var r = {},
    a = {},
    o = {},
    n = {},
    i = {},
    s = {},
    c = {},
    u = {};
  return Object.defineProperty(r, "__esModule", {
    value: !0
  }), Object.defineProperty(a, "__esModule", {
    value: !0
  }), Object.defineProperty(o, "__esModule", {
    value: !0
  }), Object.defineProperty(n, "__esModule", {
    value: !0
  }), Object.defineProperty(i, "__esModule", {
    value: !0
  }), Object.defineProperty(s, "__esModule", {
    value: !0
  }), Object.defineProperty(c, "__esModule", {
    value: !0
  }), Object.defineProperty(u, "__esModule", {
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
        o[t] = e[t]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(t) {
        n[t] = e[t]
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
        c[t] = e[t]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(t) {
        u[t] = e[t]
      }))
    }],
    execute: function() {
      e((() => {
        var e, f, l, d, p = {
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
                for (var a = "/" === r.pathname[0] ? r.pathname : "/" + r.pathname, o = 0, n = a.length; o !== t && n >= 0;) "/" === a[--n] && o++;
                if (o !== t) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + t + ") is greater than the number of directories (" + o + ") in the URL path " + e);
                var i = a.slice(0, n + 1);
                return r.protocol + "//" + r.host + i
              };
              Number.isInteger
            },
            5086: (e, t, r) => {
              "use strict";
              var a = {
                  "./bootstrap": () => r.e(564).then((() => () => r(9564))),
                  "./index": () => Promise.all([r.e(877), r.e(648), r.e(927), r.e(773), r.e(110), r.e(501)]).then((() => () => r(2501))),
                  "./tina": () => Promise.all([r.e(877), r.e(927), r.e(773), r.e(968)]).then((() => () => r(8968))),
                  "./tinaBlockTemplates": () => Promise.all([r.e(877), r.e(927), r.e(773), r.e(968)]).then((() => () => r(8968)))
                },
                o = (e, t) => (r.R = t, t = r.o(a, e) ? a[e]() : Promise.resolve().then((() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                })), r.R = void 0, t),
                n = (e, t) => {
                  if (r.S) {
                    var a = "default",
                      o = r.S[a];
                    if (o && o !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return r.S[a] = e, r.I(a, t)
                  }
                };
              r.d(t, {
                get: () => o,
                init: () => n
              })
            },
            5286: e => {
              "use strict";
              e.exports = r
            },
            5081: e => {
              "use strict";
              e.exports = a
            },
            5016: e => {
              "use strict";
              e.exports = o
            },
            649: e => {
              "use strict";
              e.exports = n
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
              e.exports = c
            },
            2369: e => {
              "use strict";
              e.exports = u
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
          110: "8d065463a098e448703a66b3b06c5955",
          377: "5c7afa71a9bb44e2e1400843390fca60",
          501: "c896b8a8497c6d2e2357ea0020c6359e",
          564: "4236ec998e61b5ac42761d4db52b3e5c",
          621: "8d9850813ff0f412f1a948900c484947",
          648: "074ce26901b17045278026f72df425a0",
          763: "b4845ae8601262dc9cd9bb9cfb1bbaf8",
          771: "2ed7e507f1ef072af7c2f0e3e618a438",
          773: "06a669896b90cf79507aa7e19381c96d",
          877: "1be399257e1e0159bda88caa59dc2199",
          927: "0432978a9a121c2385c59b5bde80d4ff",
          968: "d660c8364ae793262e51a61d715f37ec"
        } [e] + ".js", m.miniCssF = e => "css/" + {
          110: "06827b5870f6e57ba4811ba6ca7c34ce",
          501: "861dcb2cd249f6cb450cbaf79acdcf9f",
          771: "d001f419ae7c887a412c51ad7f51057e"
        } [e] + ".css", m.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), m.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), e = {}, f = "@rockstargames/modules-core-videoplayer:", m.l = (t, r, a, o) => {
          if (e[t]) e[t].push(r);
          else {
            var n, i;
            if (void 0 !== a)
              for (var s = document.getElementsByTagName("script"), c = 0; c < s.length; c++) {
                var u = s[c];
                if (u.getAttribute("src") == t || u.getAttribute("data-webpack") == f + a) {
                  n = u;
                  break
                }
              }
            n || (i = !0, (n = document.createElement("script")).charset = "utf-8", n.timeout = 120, m.nc && n.setAttribute("nonce", m.nc), n.setAttribute("data-webpack", f + a), n.src = t), e[t] = [r];
            var l = (r, a) => {
                n.onerror = n.onload = null, clearTimeout(d);
                var o = e[t];
                if (delete e[t], n.parentNode && n.parentNode.removeChild(n), o && o.forEach((e => e(a))), r) return r(a)
              },
              d = setTimeout(l.bind(null, void 0, {
                type: "timeout",
                target: n
              }), 12e4);
            n.onerror = l.bind(null, n.onerror), n.onload = l.bind(null, n.onload), i && document.head.appendChild(n)
          }
        }, m.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, m.nmd = e => (e.paths = [], e.children || (e.children = []), e), l = {
          110: [3111, 3657, 6711, 7194, 9929],
          771: [1458, 1570, 6331, 7842],
          773: [8976, 4859],
          968: [3374, 3616, 3761]
        }, d = {
          1458: ["default", "./providers", 4031],
          1570: ["default", "./index", 5016],
          3111: ["default", "./messages", 5016],
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
          m.o(l, e) && l[e].forEach((e => {
            var r = m.R;
            r || (r = []);
            var a = d[e];
            if (!(r.indexOf(a) >= 0)) {
              if (r.push(a), a.p) return t.push(a.p);
              var o = t => {
                  t || (t = new Error("Container missing")), "string" == typeof t.message && (t.message += '\nwhile loading "' + a[1] + '" from ' + a[2]), m.m[e] = () => {
                    throw t
                  }, a.p = 0
                },
                n = (e, r, n, i, s, c) => {
                  try {
                    var u = e(r, n);
                    if (!u || !u.then) return s(u, i, c);
                    var f = u.then((e => s(e, i)), o);
                    if (!c) return f;
                    t.push(a.p = f)
                  } catch (e) {
                    o(e)
                  }
                },
                i = (e, t, o) => n(t.get, a[1], r, 0, s, o),
                s = t => {
                  a.p = 1, m.m[e] = e => {
                    e.exports = t()
                  }
                };
              n(m, a[2], 0, 0, ((e, t, r) => e ? n(m.I, a[0], 0, e, i, r) : o()), 1)
            }
          }))
        }, (() => {
          m.S = {};
          var e = {},
            t = {};
          m.I = (r, a) => {
            a || (a = []);
            var o = t[r];
            if (o || (o = t[r] = {}), !(a.indexOf(o) >= 0)) {
              if (a.push(o), e[r]) return e[r];
              m.o(m.S, r) || (m.S[r] = {});
              var n = m.S[r],
                i = "@rockstargames/modules-core-videoplayer",
                s = (e, t, r, a) => {
                  var o = n[e] = n[e] || {},
                    s = o[t];
                  (!s || !s.loaded && (!a != !s.eager ? a : i > s.from)) && (o[t] = {
                    get: r,
                    from: i,
                    eager: !!a
                  })
                },
                c = e => {
                  var t = e => {
                    return t = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(t));
                    var t
                  };
                  try {
                    var o = m(e);
                    if (!o) return;
                    var n = e => e && e.init && e.init(m.S[r], a);
                    if (o.then) return u.push(o.then(n, t));
                    var i = n(o);
                    if (i && i.then) return u.push(i.catch(t))
                  } catch (e) {
                    t(e)
                  }
                },
                u = [];
              return "default" === r && (s("react-dom", "18.2.0", (() => Promise.all([m.e(763), m.e(927)]).then((() => () => m(6763))))), s("react-router-dom", "6.17.0", (() => Promise.all([m.e(621), m.e(927)]).then((() => () => m(621))))), s("react", "18.2.0", (() => m.e(377).then((() => () => m(5377))))), c(5286), c(5081), c(5016), c(649), c(4031), c(2369), c(7559), c(1861)), u.length ? e[r] = Promise.all(u).then((() => e[r] = 1)) : e[r] = 1
            }
          }
        })(), (() => {
          var e;
          m.g.importScripts && (e = m.g.location + "");
          var t = m.g.document;
          if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
            var r = t.getElementsByTagName("script");
            if (r.length)
              for (var a = r.length - 1; a > -1 && !e;) e = r[a--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), m.p = e
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
                var o = r[0],
                  n = o < 0;
                n && (o = -o - 1);
                for (var i = 0, s = 1, c = !0;; s++, i++) {
                  var u, f, l = s < r.length ? (typeof r[s])[0] : "";
                  if (i >= a.length || "o" == (f = (typeof(u = a[i]))[0])) return !c || ("u" == l ? s > o && !n : "" == l != n);
                  if ("u" == f) {
                    if (!c || "u" != l) return !1
                  } else if (c)
                    if (l == f)
                      if (s <= o) {
                        if (u != r[s]) return !1
                      } else {
                        if (n ? u > r[s] : u < r[s]) return !1;
                        u != r[s] && (c = !1)
                      }
                  else if ("s" != l && "n" != l) {
                    if (n || s <= o) return !1;
                    c = !1, s--
                  } else {
                    if (s <= o || f < l != n) return !1;
                    c = !1
                  } else "s" != l && "n" != l && (c = !1, s--)
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
            r = (r, a, o) => {
              var n = r[a];
              return (a = Object.keys(n).reduce(((r, a) => !t(o, a) || r && !((t, r) => {
                t = e(t), r = e(r);
                for (var a = 0;;) {
                  if (a >= t.length) return a < r.length && "u" != (typeof r[a])[0];
                  var o = t[a],
                    n = (typeof o)[0];
                  if (a >= r.length) return "u" == n;
                  var i = r[a],
                    s = (typeof i)[0];
                  if (n != s) return "o" == n && "n" == s || "s" == s || "u" == n;
                  if ("o" != n && "u" != n && o != i) return o < i;
                  a++
                }
              })(r, a) ? r : a), 0)) && n[a]
            },
            a = (e => function(t, r, a, o) {
              var n = m.I(t);
              return n && n.then ? n.then(e.bind(e, t, m.S[t], r, a, o)) : e(t, m.S[t], r, a, o)
            })(((e, t, a, o, n) => {
              var i = t && m.o(t, a) && r(t, a, o);
              return i ? (e => (e.loaded = 1, e.get()))(i) : n()
            })),
            o = {},
            n = {
              927: () => a("default", "react", [1, 18, 2, 0], (() => m.e(377).then((() => () => m(5377))))),
              4175: () => a("default", "react-router-dom", [1, 6, 11, 2], (() => m.e(621).then((() => () => m(621))))),
              9087: () => a("default", "react-dom", [1, 18, 2, 0], (() => m.e(763).then((() => () => m(6763)))))
            },
            i = {
              110: [4175],
              771: [9087],
              927: [927]
            };
          m.f.consumes = (e, t) => {
            m.o(i, e) && i[e].forEach((e => {
              if (m.o(o, e)) return t.push(o[e]);
              var r = t => {
                  o[e] = 0, m.m[e] = r => {
                    delete m.c[e], r.exports = t()
                  }
                },
                a = t => {
                  delete o[e], m.m[e] = r => {
                    throw delete m.c[e], t
                  }
                };
              try {
                var i = n[e]();
                i.then ? t.push(o[e] = i.then(r).catch(a)) : r(i)
              } catch (e) {
                a(e)
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
                110: 1,
                501: 1,
                771: 1
              } [t] && r.push(e[t] = (e => new Promise(((t, r) => {
                var a = m.miniCssF(e),
                  o = m.p + a;
                if (((e, t) => {
                    for (var r = document.getElementsByTagName("link"), a = 0; a < r.length; a++) {
                      var o = (i = r[a]).getAttribute("data-href") || i.getAttribute("href");
                      if ("stylesheet" === i.rel && (o === e || o === t)) return i
                    }
                    var n = document.getElementsByTagName("style");
                    for (a = 0; a < n.length; a++) {
                      var i;
                      if ((o = (i = n[a]).getAttribute("data-href")) === e || o === t) return i
                    }
                  })(a, o)) return t();
                ((e, t, r, a, o) => {
                  var n = document.createElement("link");
                  n.rel = "stylesheet", n.type = "text/css", n.onerror = n.onload = r => {
                    if (n.onerror = n.onload = null, "load" === r.type) a();
                    else {
                      var i = r && ("load" === r.type ? "missing" : r.type),
                        s = r && r.target && r.target.href || t,
                        c = new Error("Loading CSS chunk " + e + " failed.\n(" + s + ")");
                      c.code = "CSS_CHUNK_LOAD_FAILED", c.type = i, c.request = s, n.parentNode && n.parentNode.removeChild(n), o(c)
                    }
                  }, n.href = t, document.head.appendChild(n)
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
            var a = m.o(e, t) ? e[t] : void 0;
            if (0 !== a)
              if (a) r.push(a[2]);
              else if (/^(773|927)$/.test(t)) e[t] = 0;
            else {
              var o = new Promise(((r, o) => a = e[t] = [r, o]));
              r.push(a[2] = o);
              var n = m.p + m.u(t),
                i = new Error;
              m.l(n, (r => {
                if (m.o(e, t) && (0 !== (a = e[t]) && (e[t] = void 0), a)) {
                  var o = r && ("load" === r.type ? "missing" : r.type),
                    n = r && r.target && r.target.src;
                  i.message = "Loading chunk " + t + " failed.\n(" + o + ": " + n + ")", i.name = "ChunkLoadError", i.type = o, i.request = n, a[1](i)
                }
              }), "chunk-" + t, t)
            }
          };
          var t = (t, r) => {
              var a, o, n = r[0],
                i = r[1],
                s = r[2],
                c = 0;
              if (n.some((t => 0 !== e[t]))) {
                for (a in i) m.o(i, a) && (m.m[a] = i[a]);
                s && s(m)
              }
              for (t && t(r); c < n.length; c++) o = n[c], m.o(e, o) && e[o] && e[o][0](), e[o] = 0
            },
            r = self.webpackChunk_rockstargames_modules_core_videoplayer = self.webpackChunk_rockstargames_modules_core_videoplayer || [];
          r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
        })(), m(9473), m(5086)
      })())
    }
  }
}));