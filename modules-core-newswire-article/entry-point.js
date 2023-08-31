System.register(["@rockstargames/components", "@rockstargames/graph-client", "@rockstargames/modules-core-card", "@rockstargames/modules-core-carousel", "@rockstargames/modules-core-gif-viewer", "@rockstargames/modules-core-group-of-items", "@rockstargames/modules-core-videoplayer", "@rockstargames/modules-sc-ugc-spotlight", "@rockstargames/tina", "@rockstargames/utils"], (function(e, t) {
  var r = {},
    n = {},
    o = {},
    a = {},
    s = {},
    i = {},
    u = {},
    c = {},
    l = {},
    f = {};
  return Object.defineProperty(r, "__esModule", {
    value: !0
  }), Object.defineProperty(n, "__esModule", {
    value: !0
  }), Object.defineProperty(o, "__esModule", {
    value: !0
  }), Object.defineProperty(a, "__esModule", {
    value: !0
  }), Object.defineProperty(s, "__esModule", {
    value: !0
  }), Object.defineProperty(i, "__esModule", {
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
        s[t] = e[t]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(t) {
        i[t] = e[t]
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
                var s = n.slice(0, a + 1);
                return r.protocol + "//" + r.host + s
              };
              Number.isInteger
            },
            1103: (e, t, r) => {
              "use strict";
              var n = {
                  "./NewswireArticle": () => Promise.all([r.e(688), r.e(218), r.e(976), r.e(634), r.e(975), r.e(510), r.e(357), r.e(76)]).then((() => () => r(8076))),
                  "./NewswireTitle": () => Promise.all([r.e(976), r.e(634), r.e(765)]).then((() => () => r(1765))),
                  "./index": () => Promise.all([r.e(688), r.e(976), r.e(634), r.e(975), r.e(510), r.e(986)]).then((() => () => r(7986))),
                  "./components": () => Promise.all([r.e(688), r.e(976), r.e(634), r.e(975)]).then((() => () => r(3975))),
                  "./types": () => Promise.all([r.e(688), r.e(218), r.e(976), r.e(634), r.e(975), r.e(510), r.e(357), r.e(417)]).then((() => () => r(417))),
                  "./tinaBlockTemplates": () => Promise.all([r.e(976), r.e(814)]).then((() => () => r(8814)))
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
            4110: e => {
              "use strict";
              e.exports = o
            },
            9838: e => {
              "use strict";
              e.exports = a
            },
            3642: e => {
              "use strict";
              e.exports = s
            },
            299: e => {
              "use strict";
              e.exports = i
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
          76: "551e314c55e2afeee696",
          218: "daa90d938067bcf9c323",
          252: "470f98c9c3c9818c84c9",
          357: "24a013e2186f65eaee90",
          417: "5cac79d5e62016b2e4dd",
          510: "113b89b9f4c8ad0af64c",
          634: "6394a7f512b11408aa93",
          688: "a62fa47fcf9bc82f8a8f",
          765: "f709174dad4026f5d4df",
          814: "b6f497970c2f08634db4",
          975: "cb60eeaea15c9066dc1a",
          976: "8588115fb29797f8a174",
          986: "0aeb428f93a989461b29"
        } [e] + ".js", b.miniCssF = e => "css/" + {
          357: "824ad19611a859d31a73",
          765: "9dd6b269fafbfba94abc",
          975: "3191df2bb33326844f1b"
        } [e] + ".css", b.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), b.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), e = {}, d = "@rockstargames/modules-core-newswire-article:", b.l = (t, r, n, o) => {
          if (e[t]) e[t].push(r);
          else {
            var a, s;
            if (void 0 !== n)
              for (var i = document.getElementsByTagName("script"), u = 0; u < i.length; u++) {
                var c = i[u];
                if (c.getAttribute("src") == t || c.getAttribute("data-webpack") == d + n) {
                  a = c;
                  break
                }
              }
            a || (s = !0, (a = document.createElement("script")).charset = "utf-8", a.timeout = 120, b.nc && a.setAttribute("nonce", b.nc), a.setAttribute("data-webpack", d + n), a.src = t), e[t] = [r];
            var l = (r, n) => {
                a.onerror = a.onload = null, clearTimeout(f);
                var o = e[t];
                if (delete e[t], a.parentNode && a.parentNode.removeChild(a), o && o.forEach((e => e(n))), r) return r(n)
              },
              f = setTimeout(l.bind(null, void 0, {
                type: "timeout",
                target: a
              }), 12e4);
            a.onerror = l.bind(null, a.onerror), a.onload = l.bind(null, a.onload), s && document.head.appendChild(a)
          }
        }, b.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, b.nmd = e => (e.paths = [], e.children || (e.children = []), e), p = {
          76: [1968, 6077],
          510: [3750, 5551],
          634: [9542, 9929],
          814: [334, 559, 1719, 2324, 3204, 3616, 6307, 6904],
          975: [420, 3657, 4224, 4859, 6947, 8356],
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
            var n = h[e];
            if (!(r.indexOf(n) >= 0)) {
              if (r.push(n), n.p) return t.push(n.p);
              var o = t => {
                  t || (t = new Error("Container missing")), "string" == typeof t.message && (t.message += '\nwhile loading "' + n[1] + '" from ' + n[2]), b.m[e] = () => {
                    throw t
                  }, n.p = 0
                },
                a = (e, r, a, s, i, u) => {
                  try {
                    var c = e(r, a);
                    if (!c || !c.then) return i(c, s, u);
                    var l = c.then((e => i(e, s)), o);
                    if (!u) return l;
                    t.push(n.p = l)
                  } catch (e) {
                    o(e)
                  }
                },
                s = (e, t, o) => a(t.get, n[1], r, 0, i, o),
                i = t => {
                  n.p = 1, b.m[e] = e => {
                    e.exports = t()
                  }
                };
              a(b, n[2], 0, 0, ((e, t, r) => e ? a(b.I, n[0], 0, e, s, r) : o()), 1)
            }
          }))
        }, (() => {
          b.S = {};
          var e = {},
            t = {};
          b.I = (r, n) => {
            n || (n = []);
            var o = t[r];
            if (o || (o = t[r] = {}), !(n.indexOf(o) >= 0)) {
              if (n.push(o), e[r]) return e[r];
              b.o(b.S, r) || (b.S[r] = {});
              var a = b.S[r],
                s = "@rockstargames/modules-core-newswire-article",
                i = e => {
                  var t = e => {
                    return t = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(t));
                    var t
                  };
                  try {
                    var o = b(e);
                    if (!o) return;
                    var a = e => e && e.init && e.init(b.S[r], n);
                    if (o.then) return u.push(o.then(a, t));
                    var s = a(o);
                    if (s && s.then) return u.push(s.catch(t))
                  } catch (e) {
                    t(e)
                  }
                },
                u = [];
              return "default" === r && (((e, t, r, n) => {
                var o = a[e] = a[e] || {},
                  i = o[t];
                (!i || !i.loaded && (1 != !i.eager ? n : s > i.from)) && (o[t] = {
                  get: () => b.e(252).then((() => () => b(8252))),
                  from: s,
                  eager: !1
                })
              })("react", "18.2.0"), i(5286), i(7559), i(2369), i(5081), i(4110), i(3642), i(299), i(7124), i(9838), i(871)), u.length ? e[r] = Promise.all(u).then((() => e[r] = 1)) : e[r] = 1
            }
          }
        })(), b.p = "", (() => {
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
                for (var s = 0, i = 1, u = !0;; i++, s++) {
                  var c, l, f = i < r.length ? (typeof r[i])[0] : "";
                  if (s >= n.length || "o" == (l = (typeof(c = n[s]))[0])) return !u || ("u" == f ? i > o && !a : "" == f != a);
                  if ("u" == l) {
                    if (!u || "u" != f) return !1
                  } else if (u)
                    if (f == l)
                      if (i <= o) {
                        if (c != r[i]) return !1
                      } else {
                        if (a ? c > r[i] : c < r[i]) return !1;
                        c != r[i] && (u = !1)
                      }
                  else if ("s" != f && "n" != f) {
                    if (a || i <= o) return !1;
                    u = !1, i--
                  } else {
                    if (i <= o || l < f != a) return !1;
                    u = !1
                  } else "s" != f && "n" != f && (u = !1, i--)
                }
              }
              var d = [],
                p = d.pop.bind(d);
              for (s = 1; s < r.length; s++) {
                var h = r[s];
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
                  var s = r[n],
                    i = (typeof s)[0];
                  if (a != i) return "o" == a && "n" == i || "s" == i || "u" == a;
                  if ("o" != a && "u" != a && o != s) return o < s;
                  n++
                }
              })(r, n) ? r : n), 0)) && a[n]
            },
            n = (e => function(t, r, n, o) {
              var a = b.I(t);
              return a && a.then ? a.then(e.bind(e, t, b.S[t], r, n, o)) : e(t, b.S[t], r, n, o)
            })(((e, t, n, o, a) => {
              var s = t && b.o(t, n) && r(t, n, o);
              return s ? (e => (e.loaded = 1, e.get()))(s) : a()
            })),
            o = {},
            a = {
              4932: () => n("default", "react", [1, 18, 2, 0], (() => b.e(252).then((() => () => b(8252)))))
            },
            s = {
              634: [4932]
            };
          b.f.consumes = (e, t) => {
            b.o(s, e) && s[e].forEach((e => {
              if (b.o(o, e)) return t.push(o[e]);
              var r = t => {
                  o[e] = 0, b.m[e] = r => {
                    delete b.c[e], r.exports = t()
                  }
                },
                n = t => {
                  delete o[e], b.m[e] = r => {
                    throw delete b.c[e], t
                  }
                };
              try {
                var s = a[e]();
                s.then ? t.push(o[e] = s.then(r).catch(n)) : r(s)
              } catch (e) {
                n(e)
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
                357: 1,
                765: 1,
                975: 1
              } [t] && r.push(e[t] = (e => new Promise(((t, r) => {
                var n = b.miniCssF(e),
                  o = b.p + n;
                if (((e, t) => {
                    for (var r = document.getElementsByTagName("link"), n = 0; n < r.length; n++) {
                      var o = (s = r[n]).getAttribute("data-href") || s.getAttribute("href");
                      if ("stylesheet" === s.rel && (o === e || o === t)) return s
                    }
                    var a = document.getElementsByTagName("style");
                    for (n = 0; n < a.length; n++) {
                      var s;
                      if ((o = (s = a[n]).getAttribute("data-href")) === e || o === t) return s
                    }
                  })(n, o)) return t();
                ((e, t, r, n, o) => {
                  var a = document.createElement("link");
                  a.rel = "stylesheet", a.type = "text/css", a.onerror = a.onload = r => {
                    if (a.onerror = a.onload = null, "load" === r.type) n();
                    else {
                      var s = r && ("load" === r.type ? "missing" : r.type),
                        i = r && r.target && r.target.href || t,
                        u = new Error("Loading CSS chunk " + e + " failed.\n(" + i + ")");
                      u.code = "CSS_CHUNK_LOAD_FAILED", u.type = s, u.request = i, a.parentNode && a.parentNode.removeChild(a), o(u)
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
            947: 0
          };
          b.f.j = (t, r) => {
            var n = b.o(e, t) ? e[t] : void 0;
            if (0 !== n)
              if (n) r.push(n[2]);
              else if (/^(357|510|634|976)$/.test(t)) e[t] = 0;
            else {
              var o = new Promise(((r, o) => n = e[t] = [r, o]));
              r.push(n[2] = o);
              var a = b.p + b.u(t),
                s = new Error;
              b.l(a, (r => {
                if (b.o(e, t) && (0 !== (n = e[t]) && (e[t] = void 0), n)) {
                  var o = r && ("load" === r.type ? "missing" : r.type),
                    a = r && r.target && r.target.src;
                  s.message = "Loading chunk " + t + " failed.\n(" + o + ": " + a + ")", s.name = "ChunkLoadError", s.type = o, s.request = a, n[1](s)
                }
              }), "chunk-" + t, t)
            }
          };
          var t = (t, r) => {
              var n, o, a = r[0],
                s = r[1],
                i = r[2],
                u = 0;
              if (a.some((t => 0 !== e[t]))) {
                for (n in s) b.o(s, n) && (b.m[n] = s[n]);
                i && i(b)
              }
              for (t && t(r); u < a.length; u++) o = a[u], b.o(e, o) && e[o] && e[o][0](), e[o] = 0
            },
            r = self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || [];
          r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
        })(), b(1308), b(1103)
      })())
    }
  }
}));