System.register(["@rockstargames/components", "@rockstargames/graph-client", "@rockstargames/modules-core-feedback", "@rockstargames/modules-core-newswire-article", "@rockstargames/modules-core-videoplayer", "@rockstargames/utils"], (function(e, r) {
  var t = {},
    n = {},
    o = {},
    a = {},
    i = {},
    s = {};
  return Object.defineProperty(t, "__esModule", {
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
        o[r] = e[r]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(r) {
        a[r] = e[r]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(r) {
        i[r] = e[r]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(r) {
        s[r] = e[r]
      }))
    }],
    execute: function() {
      e((() => {
        var e, u, c, f, l = {
            6100: (e, r, t) => {
              (0, t(487).s)(1)
            },
            487: (e, r, t) => {
              const n = t(6175).R;
              r.s = function(e) {
                if (e || (e = 1), !t.y.meta || !t.y.meta.url) throw console.error("__system_context__", t.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                t.p = n(t.y.meta.url, e)
              }
            },
            9473: (e, r, t) => {
              t(6100)
            },
            6175: (e, r, t) => {
              r.R = function(e, r) {
                var t = document.createElement("a");
                t.href = e;
                for (var n = "/" === t.pathname[0] ? t.pathname : "/" + t.pathname, o = 0, a = n.length; o !== r && a >= 0;) "/" === n[--a] && o++;
                if (o !== r) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + r + ") is greater than the number of directories (" + o + ") in the URL path " + e);
                var i = n.slice(0, a + 1);
                return t.protocol + "//" + t.host + i
              };
              Number.isInteger
            },
            6380: (e, r, t) => {
              "use strict";
              var n = {
                  "./index": () => Promise.all([t.e(332), t.e(927), t.e(322)]).then((() => () => t(4322)))
                },
                o = (e, r) => (t.R = r, r = t.o(n, e) ? n[e]() : Promise.resolve().then((() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                })), t.R = void 0, r),
                a = (e, r) => {
                  if (t.S) {
                    var n = "default",
                      o = t.S[n];
                    if (o && o !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return t.S[n] = e, t.I(n, r)
                  }
                };
              t.d(r, {
                get: () => o,
                init: () => a
              })
            },
            5286: e => {
              "use strict";
              e.exports = t
            },
            5081: e => {
              "use strict";
              e.exports = n
            },
            2845: e => {
              "use strict";
              e.exports = o
            },
            9724: e => {
              "use strict";
              e.exports = a
            },
            7124: e => {
              "use strict";
              e.exports = i
            },
            2369: e => {
              "use strict";
              e.exports = s
            }
          },
          d = {};

        function p(e) {
          var r = d[e];
          if (void 0 !== r) return r.exports;
          var t = d[e] = {
            exports: {}
          };
          return l[e](t, t.exports, p), t.exports
        }
        return p.m = l, p.c = d, p.y = r, p.n = e => {
          var r = e && e.__esModule ? () => e.default : () => e;
          return p.d(r, {
            a: r
          }), r
        }, p.d = (e, r) => {
          for (var t in r) p.o(r, t) && !p.o(e, t) && Object.defineProperty(e, t, {
            enumerable: !0,
            get: r[t]
          })
        }, p.f = {}, p.e = e => Promise.all(Object.keys(p.f).reduce(((r, t) => (p.f[t](e, r), r)), [])), p.u = e => "js/" + {
          73: "5016af6bf1261d95afd0bbbfa41727b3",
          322: "f2136be02888d297dfab19ad06699f25",
          332: "88b38b1f0d70aba417db70c8d6414505",
          377: "e5430a820b5b8a22267d6abcd415609d",
          927: "3887301e085f8dbf137f5489c24f7363"
        } [e] + ".js", p.miniCssF = e => "css/f24496783725b7f20403365f5948f924.css", p.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), p.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r), e = {}, u = "@rockstargames/sites-red-dead-online:", p.l = (r, t, n, o) => {
          if (e[r]) e[r].push(t);
          else {
            var a, i;
            if (void 0 !== n)
              for (var s = document.getElementsByTagName("script"), c = 0; c < s.length; c++) {
                var f = s[c];
                if (f.getAttribute("src") == r || f.getAttribute("data-webpack") == u + n) {
                  a = f;
                  break
                }
              }
            a || (i = !0, (a = document.createElement("script")).charset = "utf-8", a.timeout = 120, p.nc && a.setAttribute("nonce", p.nc), a.setAttribute("data-webpack", u + n), a.src = r), e[r] = [t];
            var l = (t, n) => {
                a.onerror = a.onload = null, clearTimeout(d);
                var o = e[r];
                if (delete e[r], a.parentNode && a.parentNode.removeChild(a), o && o.forEach((e => e(n))), t) return t(n)
              },
              d = setTimeout(l.bind(null, void 0, {
                type: "timeout",
                target: a
              }), 12e4);
            a.onerror = l.bind(null, a.onerror), a.onload = l.bind(null, a.onload), i && document.head.appendChild(a)
          }
        }, p.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, c = {
          322: [3761, 4224, 4524, 4859, 6921, 8865, 8976, 9929]
        }, f = {
          3761: ["default", "./operations/queries", 5081],
          4224: ["default", "./index", 7124],
          4524: ["default", "./NewswireArticle", 9724],
          4859: ["default", "./index", 5081],
          6921: ["default", "./operations/fragments/video-fields.graphql", 5081],
          8865: ["default", "./index", 2845],
          8976: ["default", "./index", 5286],
          9929: ["default", "./index", 2369]
        }, p.f.remotes = (e, r) => {
          p.o(c, e) && c[e].forEach((e => {
            var t = p.R;
            t || (t = []);
            var n = f[e];
            if (!(t.indexOf(n) >= 0)) {
              if (t.push(n), n.p) return r.push(n.p);
              var o = r => {
                  r || (r = new Error("Container missing")), "string" == typeof r.message && (r.message += '\nwhile loading "' + n[1] + '" from ' + n[2]), p.m[e] = () => {
                    throw r
                  }, n.p = 0
                },
                a = (e, t, a, i, s, u) => {
                  try {
                    var c = e(t, a);
                    if (!c || !c.then) return s(c, i, u);
                    var f = c.then((e => s(e, i)), o);
                    if (!u) return f;
                    r.push(n.p = f)
                  } catch (e) {
                    o(e)
                  }
                },
                i = (e, r, o) => a(r.get, n[1], t, 0, s, o),
                s = r => {
                  n.p = 1, p.m[e] = e => {
                    e.exports = r()
                  }
                };
              a(p, n[2], 0, 0, ((e, r, t) => e ? a(p.I, n[0], 0, e, i, t) : o()), 1)
            }
          }))
        }, (() => {
          p.S = {};
          var e = {},
            r = {};
          p.I = (t, n) => {
            n || (n = []);
            var o = r[t];
            if (o || (o = r[t] = {}), !(n.indexOf(o) >= 0)) {
              if (n.push(o), e[t]) return e[t];
              p.o(p.S, t) || (p.S[t] = {});
              var a = p.S[t],
                i = "@rockstargames/sites-red-dead-online",
                s = (e, r, t, n) => {
                  var o = a[e] = a[e] || {},
                    s = o[r];
                  (!s || !s.loaded && (!n != !s.eager ? n : i > s.from)) && (o[r] = {
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
                    var o = p(e);
                    if (!o) return;
                    var a = e => e && e.init && e.init(p.S[t], n);
                    if (o.then) return c.push(o.then(a, r));
                    var i = a(o);
                    if (i && i.then) return c.push(i.catch(r))
                  } catch (e) {
                    r(e)
                  }
                },
                c = [];
              return "default" === t && (s("react-router-dom", "6.17.0", (() => Promise.all([p.e(73), p.e(927)]).then((() => () => p(3073))))), s("react", "18.2.0", (() => p.e(377).then((() => () => p(5377))))), u(5286), u(5081), u(2845), u(9724), u(7124), u(2369)), c.length ? e[t] = Promise.all(c).then((() => e[t] = 1)) : e[t] = 1
            }
          }
        })(), (() => {
          var e;
          p.g.importScripts && (e = p.g.location + "");
          var r = p.g.document;
          if (!e && r && (r.currentScript && (e = r.currentScript.src), !e)) {
            var t = r.getElementsByTagName("script");
            if (t.length)
              for (var n = t.length - 1; n > -1 && !e;) e = t[n--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), p.p = e
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
                var o = t[0],
                  a = o < 0;
                a && (o = -o - 1);
                for (var i = 0, s = 1, u = !0;; s++, i++) {
                  var c, f, l = s < t.length ? (typeof t[s])[0] : "";
                  if (i >= n.length || "o" == (f = (typeof(c = n[i]))[0])) return !u || ("u" == l ? s > o && !a : "" == l != a);
                  if ("u" == f) {
                    if (!u || "u" != l) return !1
                  } else if (u)
                    if (l == f)
                      if (s <= o) {
                        if (c != t[s]) return !1
                      } else {
                        if (a ? c > t[s] : c < t[s]) return !1;
                        c != t[s] && (u = !1)
                      }
                  else if ("s" != l && "n" != l) {
                    if (a || s <= o) return !1;
                    u = !1, s--
                  } else {
                    if (s <= o || f < l != a) return !1;
                    u = !1
                  } else "s" != l && "n" != l && (u = !1, s--)
                }
              }
              var d = [],
                p = d.pop.bind(d);
              for (i = 1; i < t.length; i++) {
                var h = t[i];
                d.push(1 == h ? p() | p() : 2 == h ? p() & p() : h ? r(h, n) : !p())
              }
              return !!p()
            },
            t = (t, n, o) => {
              var a = t[n];
              return (n = Object.keys(a).reduce(((t, n) => !r(o, n) || t && !((r, t) => {
                r = e(r), t = e(t);
                for (var n = 0;;) {
                  if (n >= r.length) return n < t.length && "u" != (typeof t[n])[0];
                  var o = r[n],
                    a = (typeof o)[0];
                  if (n >= t.length) return "u" == a;
                  var i = t[n],
                    s = (typeof i)[0];
                  if (a != s) return "o" == a && "n" == s || "s" == s || "u" == a;
                  if ("o" != a && "u" != a && o != i) return o < i;
                  n++
                }
              })(t, n) ? t : n), 0)) && a[n]
            },
            n = (e => function(r, t, n, o) {
              var a = p.I(r);
              return a && a.then ? a.then(e.bind(e, r, p.S[r], t, n, o)) : e(r, p.S[r], t, n, o)
            })(((e, r, n, o, a) => {
              var i = r && p.o(r, n) && t(r, n, o);
              return i ? (e => (e.loaded = 1, e.get()))(i) : a()
            })),
            o = {},
            a = {
              927: () => n("default", "react", [1, 18, 2, 0], (() => p.e(377).then((() => () => p(5377))))),
              7583: () => n("default", "react-router-dom", [1, 6, 11, 2], (() => p.e(73).then((() => () => p(3073)))))
            },
            i = {
              322: [7583],
              927: [927]
            };
          p.f.consumes = (e, r) => {
            p.o(i, e) && i[e].forEach((e => {
              if (p.o(o, e)) return r.push(o[e]);
              var t = r => {
                  o[e] = 0, p.m[e] = t => {
                    delete p.c[e], t.exports = r()
                  }
                },
                n = r => {
                  delete o[e], p.m[e] = t => {
                    throw delete p.c[e], r
                  }
                };
              try {
                var i = a[e]();
                i.then ? r.push(o[e] = i.then(t).catch(n)) : t(i)
              } catch (e) {
                n(e)
              }
            }))
          }
        })(), (() => {
          if ("undefined" != typeof document) {
            var e = {
              595: 0
            };
            p.f.miniCss = (r, t) => {
              e[r] ? t.push(e[r]) : 0 !== e[r] && {
                322: 1
              } [r] && t.push(e[r] = (e => new Promise(((r, t) => {
                var n = p.miniCssF(e),
                  o = p.p + n;
                if (((e, r) => {
                    for (var t = document.getElementsByTagName("link"), n = 0; n < t.length; n++) {
                      var o = (i = t[n]).getAttribute("data-href") || i.getAttribute("href");
                      if ("stylesheet" === i.rel && (o === e || o === r)) return i
                    }
                    var a = document.getElementsByTagName("style");
                    for (n = 0; n < a.length; n++) {
                      var i;
                      if ((o = (i = a[n]).getAttribute("data-href")) === e || o === r) return i
                    }
                  })(n, o)) return r();
                ((e, r, t, n, o) => {
                  var a = document.createElement("link");
                  a.rel = "stylesheet", a.type = "text/css", a.onerror = a.onload = t => {
                    if (a.onerror = a.onload = null, "load" === t.type) n();
                    else {
                      var i = t && ("load" === t.type ? "missing" : t.type),
                        s = t && t.target && t.target.href || r,
                        u = new Error("Loading CSS chunk " + e + " failed.\n(" + s + ")");
                      u.code = "CSS_CHUNK_LOAD_FAILED", u.type = i, u.request = s, a.parentNode && a.parentNode.removeChild(a), o(u)
                    }
                  }, a.href = r, document.head.appendChild(a)
                })(e, o, 0, r, t)
              })))(r).then((() => {
                e[r] = 0
              }), (t => {
                throw delete e[r], t
              })))
            }
          }
        })(), (() => {
          var e = {
            595: 0
          };
          p.f.j = (r, t) => {
            var n = p.o(e, r) ? e[r] : void 0;
            if (0 !== n)
              if (n) t.push(n[2]);
              else if (927 != r) {
              var o = new Promise(((t, o) => n = e[r] = [t, o]));
              t.push(n[2] = o);
              var a = p.p + p.u(r),
                i = new Error;
              p.l(a, (t => {
                if (p.o(e, r) && (0 !== (n = e[r]) && (e[r] = void 0), n)) {
                  var o = t && ("load" === t.type ? "missing" : t.type),
                    a = t && t.target && t.target.src;
                  i.message = "Loading chunk " + r + " failed.\n(" + o + ": " + a + ")", i.name = "ChunkLoadError", i.type = o, i.request = a, n[1](i)
                }
              }), "chunk-" + r, r)
            } else e[r] = 0
          };
          var r = (r, t) => {
              var n, o, a = t[0],
                i = t[1],
                s = t[2],
                u = 0;
              if (a.some((r => 0 !== e[r]))) {
                for (n in i) p.o(i, n) && (p.m[n] = i[n]);
                s && s(p)
              }
              for (r && r(t); u < a.length; u++) o = a[u], p.o(e, o) && e[o] && e[o][0](), e[o] = 0
            },
            t = self.webpackChunk_rockstargames_sites_red_dead_online = self.webpackChunk_rockstargames_sites_red_dead_online || [];
          t.forEach(r.bind(null, 0)), t.push = r.bind(null, t.push.bind(t))
        })(), p(9473), p(6380)
      })())
    }
  }
}));