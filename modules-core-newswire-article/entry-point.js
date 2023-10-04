System.register(["@rockstargames/components", "@rockstargames/graph-client", "@rockstargames/modules-core-card", "@rockstargames/modules-core-carousel", "@rockstargames/modules-core-gif-viewer", "@rockstargames/modules-core-group-of-items", "@rockstargames/modules-core-videoplayer", "@rockstargames/modules-sc-ugc-spotlight", "@rockstargames/tina", "@rockstargames/utils"], (function(e, t) {
  var r = {},
    o = {},
    n = {},
    a = {},
    i = {},
    s = {},
    u = {},
    c = {},
    l = {},
    f = {};
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
  }), Object.defineProperty(l, "__esModule", {
    value: !0
  }), Object.defineProperty(f, "__esModule", {
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
    }, function(e) {
      Object.keys(e).forEach((function(t) {
        l[t] = e[t]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(t) {
        f[t] = e[t]
      }))
    }],
    execute: function() {
      e((() => {
        var e, d, p, h, m = {
            8252: (e, t, r) => {
              (0, r(9555).s)(1)
            },
            9555: (e, t, r) => {
              const o = r(8555).R;
              t.s = function(e) {
                if (e || (e = 1), !r.y.meta || !r.y.meta.url) throw console.error("__system_context__", r.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                r.p = o(r.y.meta.url, e)
              }
            },
            9626: (e, t, r) => {
              r(8252)
            },
            8555: (e, t, r) => {
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
            6801: (e, t, r) => {
              "use strict";
              var o = {
                  "./NewswireArticle": () => Promise.all([r.e(610), r.e(319), r.e(976), r.e(634), r.e(879), r.e(510), r.e(692), r.e(128)]).then((() => () => r(128))),
                  "./NewswireTitle": () => Promise.all([r.e(976), r.e(634), r.e(378)]).then((() => () => r(4378))),
                  "./components": () => Promise.all([r.e(610), r.e(976), r.e(634), r.e(879)]).then((() => () => r(6879))),
                  "./index": () => Promise.all([r.e(610), r.e(976), r.e(634), r.e(879), r.e(510), r.e(595)]).then((() => () => r(6595))),
                  "./tinaBlockTemplates": () => Promise.all([r.e(976), r.e(282)]).then((() => () => r(3282))),
                  "./types": () => Promise.all([r.e(610), r.e(319), r.e(976), r.e(634), r.e(879), r.e(510), r.e(692), r.e(736)]).then((() => () => r(1736)))
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
            4110: e => {
              "use strict";
              e.exports = n
            },
            9838: e => {
              "use strict";
              e.exports = a
            },
            3642: e => {
              "use strict";
              e.exports = i
            },
            299: e => {
              "use strict";
              e.exports = s
            },
            7124: e => {
              "use strict";
              e.exports = u
            },
            871: e => {
              "use strict";
              e.exports = c
            },
            7559: e => {
              "use strict";
              e.exports = l
            },
            2369: e => {
              "use strict";
              e.exports = f
            }
          },
          v = {};

        function b(e) {
          var t = v[e];
          if (void 0 !== t) return t.exports;
          var r = v[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return m[e].call(r.exports, r, r.exports, b), r.loaded = !0, r.exports
        }
        return b.m = m, b.c = v, b.y = t, b.n = e => {
          var t = e && e.__esModule ? () => e.default : () => e;
          return b.d(t, {
            a: t
          }), t
        }, b.d = (e, t) => {
          for (var r in t) b.o(t, r) && !b.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: t[r]
          })
        }, b.f = {}, b.e = e => Promise.all(Object.keys(b.f).reduce(((t, r) => (b.f[r](e, t), t)), [])), b.u = e => "js/" + {
          128: "fe50bf28389153085df9",
          266: "b218214a8ea627e0045d",
          282: "d86326cd6044fee97ff8",
          319: "c3ca07bff0797a1ff21a",
          378: "877c4ff382c6f8775975",
          510: "0e953b9614e51efe60df",
          595: "6c5fd4fed0f84581f616",
          610: "d34b364728489e2507ec",
          634: "31f578ec524ea99c6b6a",
          692: "6d5585ef69a015eb3f05",
          736: "fcdf03825e541589c87b",
          879: "fe60f63155ab93e79bdd",
          976: "008b060d9deb1343aabd"
        } [e] + ".js", b.miniCssF = e => "css/" + {
          378: "1691d463889020de61ff",
          692: "438b240f9b0db9b6cf96",
          879: "03a9ef0b649e66556a18"
        } [e] + ".css", b.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), b.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), e = {}, d = "@rockstargames/modules-core-newswire-article:", b.l = (t, r, o, n) => {
          if (e[t]) e[t].push(r);
          else {
            var a, i;
            if (void 0 !== o)
              for (var s = document.getElementsByTagName("script"), u = 0; u < s.length; u++) {
                var c = s[u];
                if (c.getAttribute("src") == t || c.getAttribute("data-webpack") == d + o) {
                  a = c;
                  break
                }
              }
            a || (i = !0, (a = document.createElement("script")).charset = "utf-8", a.timeout = 120, b.nc && a.setAttribute("nonce", b.nc), a.setAttribute("data-webpack", d + o), a.src = t), e[t] = [r];
            var l = (r, o) => {
                a.onerror = a.onload = null, clearTimeout(f);
                var n = e[t];
                if (delete e[t], a.parentNode && a.parentNode.removeChild(a), n && n.forEach((e => e(o))), r) return r(o)
              },
              f = setTimeout(l.bind(null, void 0, {
                type: "timeout",
                target: a
              }), 12e4);
            a.onerror = l.bind(null, a.onerror), a.onload = l.bind(null, a.onload), i && document.head.appendChild(a)
          }
        }, b.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, b.nmd = e => (e.paths = [], e.children || (e.children = []), e), p = {
          128: [1968, 6077],
          282: [334, 559, 1719, 2324, 3204, 3616, 6307, 6904],
          510: [3750, 5551],
          634: [9542, 9929],
          879: [420, 3657, 4224, 4859, 6947, 8356],
          976: [8976]
        }, h = {
          334: ["default", "./tina", 3642],
          420: ["default", "./index", 299],
          559: ["default", "./helpers/uploads", 7559],
          1719: ["default", "./tina", 7124],
          1968: ["default", "./providers", 2369],
          2324: ["default", "./helpers", 7559],
          3204: ["default", "./tinaBlockTemplates", 7124],
          3616: ["default", "./properties", 7559],
          3657: ["default", "./hooks", 2369],
          3750: ["default", "./index", 9838],
          4224: ["default", "./index", 7124],
          4859: ["default", "./index", 5081],
          5551: ["default", "./index", 871],
          6077: ["default", "./operations/fragments/newswire-post.graphql", 5081],
          6307: ["default", "./tinaBlockTemplates", 5286],
          6904: ["default", "./tinaBlockTemplates", 3642],
          6947: ["default", "./components", 4110],
          8356: ["default", "./index", 3642],
          8976: ["default", "./index", 5286],
          9542: ["default", "./index", 7559],
          9929: ["default", "./index", 2369]
        }, b.f.remotes = (e, t) => {
          b.o(p, e) && p[e].forEach((e => {
            var r = b.R;
            r || (r = []);
            var o = h[e];
            if (!(r.indexOf(o) >= 0)) {
              if (r.push(o), o.p) return t.push(o.p);
              var n = t => {
                  t || (t = new Error("Container missing")), "string" == typeof t.message && (t.message += '\nwhile loading "' + o[1] + '" from ' + o[2]), b.m[e] = () => {
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
                  o.p = 1, b.m[e] = e => {
                    e.exports = t()
                  }
                };
              a(b, o[2], 0, 0, ((e, t, r) => e ? a(b.I, o[0], 0, e, i, r) : n()), 1)
            }
          }))
        }, (() => {
          b.S = {};
          var e = {},
            t = {};
          b.I = (r, o) => {
            o || (o = []);
            var n = t[r];
            if (n || (n = t[r] = {}), !(o.indexOf(n) >= 0)) {
              if (o.push(n), e[r]) return e[r];
              b.o(b.S, r) || (b.S[r] = {});
              var a = b.S[r],
                i = "@rockstargames/modules-core-newswire-article",
                s = e => {
                  var t = e => {
                    return t = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(t));
                    var t
                  };
                  try {
                    var n = b(e);
                    if (!n) return;
                    var a = e => e && e.init && e.init(b.S[r], o);
                    if (n.then) return u.push(n.then(a, t));
                    var i = a(n);
                    if (i && i.then) return u.push(i.catch(t))
                  } catch (e) {
                    t(e)
                  }
                },
                u = [];
              return "default" === r && (((e, t, r, o) => {
                var n = a[e] = a[e] || {},
                  s = n[t];
                (!s || !s.loaded && (1 != !s.eager ? o : i > s.from)) && (n[t] = {
                  get: () => b.e(266).then((() => () => b(9266))),
                  from: i,
                  eager: !1
                })
              })("react", "18.2.0"), s(5286), s(7559), s(2369), s(5081), s(4110), s(3642), s(299), s(7124), s(9838), s(871)), u.length ? e[r] = Promise.all(u).then((() => e[r] = 1)) : e[r] = 1
            }
          }
        })(), (() => {
          var e;
          b.g.importScripts && (e = b.g.location + "");
          var t = b.g.document;
          if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
            var r = t.getElementsByTagName("script");
            if (r.length)
              for (var o = r.length - 1; o > -1 && !e;) e = r[o--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), b.p = e
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
              var a = b.I(t);
              return a && a.then ? a.then(e.bind(e, t, b.S[t], r, o, n)) : e(t, b.S[t], r, o, n)
            })(((e, t, o, n, a) => {
              var i = t && b.o(t, o) && r(t, o, n);
              return i ? (e => (e.loaded = 1, e.get()))(i) : a()
            })),
            n = {},
            a = {
              4932: () => o("default", "react", [1, 18, 2, 0], (() => b.e(266).then((() => () => b(9266)))))
            },
            i = {
              634: [4932]
            };
          b.f.consumes = (e, t) => {
            b.o(i, e) && i[e].forEach((e => {
              if (b.o(n, e)) return t.push(n[e]);
              var r = t => {
                  n[e] = 0, b.m[e] = r => {
                    delete b.c[e], r.exports = t()
                  }
                },
                o = t => {
                  delete n[e], b.m[e] = r => {
                    throw delete b.c[e], t
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
              947: 0
            };
            b.f.miniCss = (t, r) => {
              e[t] ? r.push(e[t]) : 0 !== e[t] && {
                378: 1,
                692: 1,
                879: 1
              } [t] && r.push(e[t] = (e => new Promise(((t, r) => {
                var o = b.miniCssF(e),
                  n = b.p + o;
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
            947: 0
          };
          b.f.j = (t, r) => {
            var o = b.o(e, t) ? e[t] : void 0;
            if (0 !== o)
              if (o) r.push(o[2]);
              else if (/^(510|634|692|976)$/.test(t)) e[t] = 0;
            else {
              var n = new Promise(((r, n) => o = e[t] = [r, n]));
              r.push(o[2] = n);
              var a = b.p + b.u(t),
                i = new Error;
              b.l(a, (r => {
                if (b.o(e, t) && (0 !== (o = e[t]) && (e[t] = void 0), o)) {
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
                for (o in i) b.o(i, o) && (b.m[o] = i[o]);
                s && s(b)
              }
              for (t && t(r); u < a.length; u++) n = a[u], b.o(e, n) && e[n] && e[n][0](), e[n] = 0
            },
            r = self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || [];
          r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
        })(), b(9626), b(6801)
      })())
    }
  }
}));