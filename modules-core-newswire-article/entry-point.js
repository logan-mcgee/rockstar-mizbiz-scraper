System.register(["@rockstargames/components", "@rockstargames/graph-client", "@rockstargames/modules-core-card", "@rockstargames/modules-core-carousel", "@rockstargames/modules-core-gif-viewer", "@rockstargames/modules-core-group-of-items", "@rockstargames/modules-core-videoplayer", "@rockstargames/modules-sc-ugc-spotlight", "@rockstargames/tina", "@rockstargames/utils"], (function(e, t) {
  var r = {},
    o = {},
    a = {},
    n = {},
    i = {},
    s = {},
    c = {},
    u = {},
    l = {},
    d = {};
  return Object.defineProperty(r, "__esModule", {
    value: !0
  }), Object.defineProperty(o, "__esModule", {
    value: !0
  }), Object.defineProperty(a, "__esModule", {
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
  }), Object.defineProperty(l, "__esModule", {
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
        o[t] = e[t]
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
    }, function(e) {
      Object.keys(e).forEach((function(t) {
        l[t] = e[t]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(t) {
        d[t] = e[t]
      }))
    }],
    execute: function() {
      e((() => {
        var e, f, p, h, m = {
            6100: (e, t, r) => {
              (0, r(487).s)(1)
            },
            487: (e, t, r) => {
              const o = r(6175).R;
              t.s = function(e) {
                if (e || (e = 1), !r.y.meta || !r.y.meta.url) throw console.error("__system_context__", r.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                r.p = o(r.y.meta.url, e)
              }
            },
            9473: (e, t, r) => {
              r(6100)
            },
            6175: (e, t, r) => {
              t.R = function(e, t) {
                var r = document.createElement("a");
                r.href = e;
                for (var o = "/" === r.pathname[0] ? r.pathname : "/" + r.pathname, a = 0, n = o.length; a !== t && n >= 0;) "/" === o[--n] && a++;
                if (a !== t) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + t + ") is greater than the number of directories (" + a + ") in the URL path " + e);
                var i = o.slice(0, n + 1);
                return r.protocol + "//" + r.host + i
              };
              Number.isInteger
            },
            6801: (e, t, r) => {
              "use strict";
              var o = {
                  "./NewswireArticle": () => Promise.all([r.e(615), r.e(394), r.e(976), r.e(985), r.e(715), r.e(510), r.e(297), r.e(705)]).then((() => () => r(705))),
                  "./NewswireTitle": () => Promise.all([r.e(976), r.e(985), r.e(211)]).then((() => () => r(4211))),
                  "./components": () => Promise.all([r.e(615), r.e(976), r.e(985), r.e(715)]).then((() => () => r(4715))),
                  "./index": () => Promise.all([r.e(615), r.e(976), r.e(985), r.e(715), r.e(510), r.e(344)]).then((() => () => r(2344))),
                  "./tinaBlockTemplates": () => Promise.all([r.e(976), r.e(429)]).then((() => () => r(8429))),
                  "./types": () => Promise.all([r.e(615), r.e(394), r.e(976), r.e(985), r.e(715), r.e(510), r.e(297), r.e(383)]).then((() => () => r(3383)))
                },
                a = (e, t) => (r.R = t, t = r.o(o, e) ? o[e]() : Promise.resolve().then((() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                })), r.R = void 0, t),
                n = (e, t) => {
                  if (r.S) {
                    var o = "default",
                      a = r.S[o];
                    if (a && a !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return r.S[o] = e, r.I(o, t)
                  }
                };
              r.d(t, {
                get: () => a,
                init: () => n
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
              e.exports = a
            },
            9838: e => {
              "use strict";
              e.exports = n
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
              e.exports = c
            },
            871: e => {
              "use strict";
              e.exports = u
            },
            7559: e => {
              "use strict";
              e.exports = l
            },
            2369: e => {
              "use strict";
              e.exports = d
            }
          },
          b = {};

        function v(e) {
          var t = b[e];
          if (void 0 !== t) return t.exports;
          var r = b[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return m[e].call(r.exports, r, r.exports, v), r.loaded = !0, r.exports
        }
        return v.m = m, v.c = b, v.y = t, v.n = e => {
          var t = e && e.__esModule ? () => e.default : () => e;
          return v.d(t, {
            a: t
          }), t
        }, v.d = (e, t) => {
          for (var r in t) v.o(t, r) && !v.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: t[r]
          })
        }, v.f = {}, v.e = e => Promise.all(Object.keys(v.f).reduce(((t, r) => (v.f[r](e, t), t)), [])), v.u = e => "js/" + {
          211: "76774ac8a5a10d976c3defa27ad4707c",
          297: "d4bbcdb7e1c86737429686fafce0d76e",
          344: "b8f17aa3180a152f50d50867ab43f7aa",
          377: "8a71b2f10082d8ba832a85384bcd9013",
          383: "bb20562b518938d047ad475f25e357ff",
          394: "95e9a146a54695f186ab41d4b199db49",
          429: "5e953fb219c94e0a5189f944be8cc13c",
          510: "11e1d25762636f3b3b53bcf3a4701e75",
          615: "89ff51d5bf22d111f2df9ec0de37e46a",
          705: "192bc1cc202112e0e586229cb625f7bf",
          715: "1468a05de26b5f829a7c09604d13e545",
          976: "a52889672cc3ae2703699984b50e09e6",
          985: "b028b6ac635d9e2c50cc8b255b00d235"
        } [e] + ".js", v.miniCssF = e => "css/" + {
          211: "066c965abe29c9e80cb31009b180c446",
          297: "e4f7b83ac014aa46a95da11d4e2cde8d",
          715: "c09be69681d5b3d67a911233c74425c8"
        } [e] + ".css", v.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), v.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), e = {}, f = "@rockstargames/modules-core-newswire-article:", v.l = (t, r, o, a) => {
          if (e[t]) e[t].push(r);
          else {
            var n, i;
            if (void 0 !== o)
              for (var s = document.getElementsByTagName("script"), c = 0; c < s.length; c++) {
                var u = s[c];
                if (u.getAttribute("src") == t || u.getAttribute("data-webpack") == f + o) {
                  n = u;
                  break
                }
              }
            n || (i = !0, (n = document.createElement("script")).charset = "utf-8", n.timeout = 120, v.nc && n.setAttribute("nonce", v.nc), n.setAttribute("data-webpack", f + o), n.src = t), e[t] = [r];
            var l = (r, o) => {
                n.onerror = n.onload = null, clearTimeout(d);
                var a = e[t];
                if (delete e[t], n.parentNode && n.parentNode.removeChild(n), a && a.forEach((e => e(o))), r) return r(o)
              },
              d = setTimeout(l.bind(null, void 0, {
                type: "timeout",
                target: n
              }), 12e4);
            n.onerror = l.bind(null, n.onerror), n.onload = l.bind(null, n.onload), i && document.head.appendChild(n)
          }
        }, v.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, v.nmd = e => (e.paths = [], e.children || (e.children = []), e), p = {
          429: [334, 559, 1719, 2324, 3204, 3616, 6307, 6904],
          510: [3750, 5551],
          705: [1968, 6077],
          715: [420, 3657, 4224, 4859, 6947, 8356],
          976: [8976],
          985: [9542, 9929]
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
        }, v.f.remotes = (e, t) => {
          v.o(p, e) && p[e].forEach((e => {
            var r = v.R;
            r || (r = []);
            var o = h[e];
            if (!(r.indexOf(o) >= 0)) {
              if (r.push(o), o.p) return t.push(o.p);
              var a = t => {
                  t || (t = new Error("Container missing")), "string" == typeof t.message && (t.message += '\nwhile loading "' + o[1] + '" from ' + o[2]), v.m[e] = () => {
                    throw t
                  }, o.p = 0
                },
                n = (e, r, n, i, s, c) => {
                  try {
                    var u = e(r, n);
                    if (!u || !u.then) return s(u, i, c);
                    var l = u.then((e => s(e, i)), a);
                    if (!c) return l;
                    t.push(o.p = l)
                  } catch (e) {
                    a(e)
                  }
                },
                i = (e, t, a) => n(t.get, o[1], r, 0, s, a),
                s = t => {
                  o.p = 1, v.m[e] = e => {
                    e.exports = t()
                  }
                };
              n(v, o[2], 0, 0, ((e, t, r) => e ? n(v.I, o[0], 0, e, i, r) : a()), 1)
            }
          }))
        }, (() => {
          v.S = {};
          var e = {},
            t = {};
          v.I = (r, o) => {
            o || (o = []);
            var a = t[r];
            if (a || (a = t[r] = {}), !(o.indexOf(a) >= 0)) {
              if (o.push(a), e[r]) return e[r];
              v.o(v.S, r) || (v.S[r] = {});
              var n = v.S[r],
                i = "@rockstargames/modules-core-newswire-article",
                s = e => {
                  var t = e => {
                    return t = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(t));
                    var t
                  };
                  try {
                    var a = v(e);
                    if (!a) return;
                    var n = e => e && e.init && e.init(v.S[r], o);
                    if (a.then) return c.push(a.then(n, t));
                    var i = n(a);
                    if (i && i.then) return c.push(i.catch(t))
                  } catch (e) {
                    t(e)
                  }
                },
                c = [];
              return "default" === r && (((e, t, r, o) => {
                var a = n[e] = n[e] || {},
                  s = a[t];
                (!s || !s.loaded && (1 != !s.eager ? o : i > s.from)) && (a[t] = {
                  get: () => v.e(377).then((() => () => v(5377))),
                  from: i,
                  eager: !1
                })
              })("react", "18.2.0"), s(5286), s(7559), s(2369), s(5081), s(4110), s(3642), s(299), s(7124), s(9838), s(871)), c.length ? e[r] = Promise.all(c).then((() => e[r] = 1)) : e[r] = 1
            }
          }
        })(), (() => {
          var e;
          v.g.importScripts && (e = v.g.location + "");
          var t = v.g.document;
          if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
            var r = t.getElementsByTagName("script");
            if (r.length)
              for (var o = r.length - 1; o > -1 && !e;) e = r[o--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), v.p = e
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
                var a = r[0],
                  n = a < 0;
                n && (a = -a - 1);
                for (var i = 0, s = 1, c = !0;; s++, i++) {
                  var u, l, d = s < r.length ? (typeof r[s])[0] : "";
                  if (i >= o.length || "o" == (l = (typeof(u = o[i]))[0])) return !c || ("u" == d ? s > a && !n : "" == d != n);
                  if ("u" == l) {
                    if (!c || "u" != d) return !1
                  } else if (c)
                    if (d == l)
                      if (s <= a) {
                        if (u != r[s]) return !1
                      } else {
                        if (n ? u > r[s] : u < r[s]) return !1;
                        u != r[s] && (c = !1)
                      }
                  else if ("s" != d && "n" != d) {
                    if (n || s <= a) return !1;
                    c = !1, s--
                  } else {
                    if (s <= a || l < d != n) return !1;
                    c = !1
                  } else "s" != d && "n" != d && (c = !1, s--)
                }
              }
              var f = [],
                p = f.pop.bind(f);
              for (i = 1; i < r.length; i++) {
                var h = r[i];
                f.push(1 == h ? p() | p() : 2 == h ? p() & p() : h ? t(h, o) : !p())
              }
              return !!p()
            },
            r = (r, o, a) => {
              var n = r[o];
              return (o = Object.keys(n).reduce(((r, o) => !t(a, o) || r && !((t, r) => {
                t = e(t), r = e(r);
                for (var o = 0;;) {
                  if (o >= t.length) return o < r.length && "u" != (typeof r[o])[0];
                  var a = t[o],
                    n = (typeof a)[0];
                  if (o >= r.length) return "u" == n;
                  var i = r[o],
                    s = (typeof i)[0];
                  if (n != s) return "o" == n && "n" == s || "s" == s || "u" == n;
                  if ("o" != n && "u" != n && a != i) return a < i;
                  o++
                }
              })(r, o) ? r : o), 0)) && n[o]
            },
            o = (e => function(t, r, o, a) {
              var n = v.I(t);
              return n && n.then ? n.then(e.bind(e, t, v.S[t], r, o, a)) : e(t, v.S[t], r, o, a)
            })(((e, t, o, a, n) => {
              var i = t && v.o(t, o) && r(t, o, a);
              return i ? (e => (e.loaded = 1, e.get()))(i) : n()
            })),
            a = {},
            n = {
              927: () => o("default", "react", [1, 18, 2, 0], (() => v.e(377).then((() => () => v(5377)))))
            },
            i = {
              985: [927]
            };
          v.f.consumes = (e, t) => {
            v.o(i, e) && i[e].forEach((e => {
              if (v.o(a, e)) return t.push(a[e]);
              var r = t => {
                  a[e] = 0, v.m[e] = r => {
                    delete v.c[e], r.exports = t()
                  }
                },
                o = t => {
                  delete a[e], v.m[e] = r => {
                    throw delete v.c[e], t
                  }
                };
              try {
                var i = n[e]();
                i.then ? t.push(a[e] = i.then(r).catch(o)) : r(i)
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
            v.f.miniCss = (t, r) => {
              e[t] ? r.push(e[t]) : 0 !== e[t] && {
                211: 1,
                297: 1,
                715: 1
              } [t] && r.push(e[t] = (e => new Promise(((t, r) => {
                var o = v.miniCssF(e),
                  a = v.p + o;
                if (((e, t) => {
                    for (var r = document.getElementsByTagName("link"), o = 0; o < r.length; o++) {
                      var a = (i = r[o]).getAttribute("data-href") || i.getAttribute("href");
                      if ("stylesheet" === i.rel && (a === e || a === t)) return i
                    }
                    var n = document.getElementsByTagName("style");
                    for (o = 0; o < n.length; o++) {
                      var i;
                      if ((a = (i = n[o]).getAttribute("data-href")) === e || a === t) return i
                    }
                  })(o, a)) return t();
                ((e, t, r, o, a) => {
                  var n = document.createElement("link");
                  n.rel = "stylesheet", n.type = "text/css", n.onerror = n.onload = r => {
                    if (n.onerror = n.onload = null, "load" === r.type) o();
                    else {
                      var i = r && ("load" === r.type ? "missing" : r.type),
                        s = r && r.target && r.target.href || t,
                        c = new Error("Loading CSS chunk " + e + " failed.\n(" + s + ")");
                      c.code = "CSS_CHUNK_LOAD_FAILED", c.type = i, c.request = s, n.parentNode && n.parentNode.removeChild(n), a(c)
                    }
                  }, n.href = t, document.head.appendChild(n)
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
            947: 0
          };
          v.f.j = (t, r) => {
            var o = v.o(e, t) ? e[t] : void 0;
            if (0 !== o)
              if (o) r.push(o[2]);
              else if (/^(297|510|976|985)$/.test(t)) e[t] = 0;
            else {
              var a = new Promise(((r, a) => o = e[t] = [r, a]));
              r.push(o[2] = a);
              var n = v.p + v.u(t),
                i = new Error;
              v.l(n, (r => {
                if (v.o(e, t) && (0 !== (o = e[t]) && (e[t] = void 0), o)) {
                  var a = r && ("load" === r.type ? "missing" : r.type),
                    n = r && r.target && r.target.src;
                  i.message = "Loading chunk " + t + " failed.\n(" + a + ": " + n + ")", i.name = "ChunkLoadError", i.type = a, i.request = n, o[1](i)
                }
              }), "chunk-" + t, t)
            }
          };
          var t = (t, r) => {
              var o, a, n = r[0],
                i = r[1],
                s = r[2],
                c = 0;
              if (n.some((t => 0 !== e[t]))) {
                for (o in i) v.o(i, o) && (v.m[o] = i[o]);
                s && s(v)
              }
              for (t && t(r); c < n.length; c++) a = n[c], v.o(e, a) && e[a] && e[a][0](), e[a] = 0
            },
            r = self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || [];
          r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
        })(), v(9473), v(6801)
      })())
    }
  }
}));