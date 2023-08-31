System.register(["@rockstargames/components", "@rockstargames/graph-client", "@rockstargames/utils"], (function(e, r) {
  var t = {},
    n = {},
    o = {};
  return Object.defineProperty(t, "__esModule", {
    value: !0
  }), Object.defineProperty(n, "__esModule", {
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
        o[r] = e[r]
      }))
    }],
    execute: function() {
      e((() => {
        var e, a, s, i, u = {
            580: (e, r, t) => {
              (0, t(879).s)(1)
            },
            879: (e, r, t) => {
              const n = t(490).R;
              r.s = function(e) {
                if (e || (e = 1), !t.y.meta || !t.y.meta.url) throw console.error("__system_context__", t.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                t.p = n(t.y.meta.url, e)
              }
            },
            308: (e, r, t) => {
              t(580)
            },
            490: (e, r, t) => {
              r.R = function(e, r) {
                var t = document.createElement("a");
                t.href = e;
                for (var n = "/" === t.pathname[0] ? t.pathname : "/" + t.pathname, o = 0, a = n.length; o !== r && a >= 0;) "/" === n[--a] && o++;
                if (o !== r) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + r + ") is greater than the number of directories (" + o + ") in the URL path " + e);
                var s = n.slice(0, a + 1);
                return t.protocol + "//" + t.host + s
              };
              Number.isInteger
            },
            926: (e, r, t) => {
              "use strict";
              var n = {
                  "./index": () => Promise.all([t.e(69), t.e(29)]).then((() => () => t(29)))
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
            286: e => {
              "use strict";
              e.exports = t
            },
            81: e => {
              "use strict";
              e.exports = n
            },
            369: e => {
              "use strict";
              e.exports = o
            }
          },
          l = {};

        function f(e) {
          var r = l[e];
          if (void 0 !== r) return r.exports;
          var t = l[e] = {
            exports: {}
          };
          return u[e].call(t.exports, t, t.exports, f), t.exports
        }
        return f.m = u, f.c = l, f.y = r, f.n = e => {
          var r = e && e.__esModule ? () => e.default : () => e;
          return f.d(r, {
            a: r
          }), r
        }, f.d = (e, r) => {
          for (var t in r) f.o(r, t) && !f.o(e, t) && Object.defineProperty(e, t, {
            enumerable: !0,
            get: r[t]
          })
        }, f.f = {}, f.e = e => Promise.all(Object.keys(f.f).reduce(((r, t) => (f.f[t](e, r), r)), [])), f.u = e => "js/" + {
          29: "d2bb0b3cbbe0e1ca4ac1",
          69: "18677e34109313b6807f",
          252: "04da04f7274b1f5bb9d1"
        } [e] + ".js", f.miniCssF = e => "css/eed5ef3d210fabd2eb0f.css", f.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r), e = {}, a = "@rockstargames/sites-rockstargames-downloads:", f.l = (r, t, n, o) => {
          if (e[r]) e[r].push(t);
          else {
            var s, i;
            if (void 0 !== n)
              for (var u = document.getElementsByTagName("script"), l = 0; l < u.length; l++) {
                var d = u[l];
                if (d.getAttribute("src") == r || d.getAttribute("data-webpack") == a + n) {
                  s = d;
                  break
                }
              }
            s || (i = !0, (s = document.createElement("script")).charset = "utf-8", s.timeout = 120, f.nc && s.setAttribute("nonce", f.nc), s.setAttribute("data-webpack", a + n), s.src = r), e[r] = [t];
            var c = (t, n) => {
                s.onerror = s.onload = null, clearTimeout(h);
                var o = e[r];
                if (delete e[r], s.parentNode && s.parentNode.removeChild(s), o && o.forEach((e => e(n))), t) return t(n)
              },
              h = setTimeout(c.bind(null, void 0, {
                type: "timeout",
                target: s
              }), 12e4);
            s.onerror = c.bind(null, s.onerror), s.onload = c.bind(null, s.onload), i && document.head.appendChild(s)
          }
        }, f.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, s = {
          29: [657, 859, 929, 976]
        }, i = {
          657: ["default", "./hooks", 369],
          859: ["default", "./index", 81],
          929: ["default", "./index", 369],
          976: ["default", "./index", 286]
        }, f.f.remotes = (e, r) => {
          f.o(s, e) && s[e].forEach((e => {
            var t = f.R;
            t || (t = []);
            var n = i[e];
            if (!(t.indexOf(n) >= 0)) {
              if (t.push(n), n.p) return r.push(n.p);
              var o = r => {
                  r || (r = new Error("Container missing")), "string" == typeof r.message && (r.message += '\nwhile loading "' + n[1] + '" from ' + n[2]), f.m[e] = () => {
                    throw r
                  }, n.p = 0
                },
                a = (e, t, a, s, i, u) => {
                  try {
                    var l = e(t, a);
                    if (!l || !l.then) return i(l, s, u);
                    var f = l.then((e => i(e, s)), o);
                    if (!u) return f;
                    r.push(n.p = f)
                  } catch (e) {
                    o(e)
                  }
                },
                s = (e, r, o) => a(r.get, n[1], t, 0, u, o),
                u = r => {
                  n.p = 1, f.m[e] = e => {
                    e.exports = r()
                  }
                };
              a(f, n[2], 0, 0, ((e, r, t) => e ? a(f.I, n[0], 0, e, s, t) : o()), 1)
            }
          }))
        }, (() => {
          f.S = {};
          var e = {},
            r = {};
          f.I = (t, n) => {
            n || (n = []);
            var o = r[t];
            if (o || (o = r[t] = {}), !(n.indexOf(o) >= 0)) {
              if (n.push(o), e[t]) return e[t];
              f.o(f.S, t) || (f.S[t] = {});
              var a = f.S[t],
                s = "@rockstargames/sites-rockstargames-downloads",
                i = e => {
                  var r = e => {
                    return r = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(r));
                    var r
                  };
                  try {
                    var o = f(e);
                    if (!o) return;
                    var a = e => e && e.init && e.init(f.S[t], n);
                    if (o.then) return u.push(o.then(a, r));
                    var s = a(o);
                    if (s && s.then) return u.push(s.catch(r))
                  } catch (e) {
                    r(e)
                  }
                },
                u = [];
              return "default" === t && (((e, r, t, n) => {
                var o = a[e] = a[e] || {},
                  i = o[r];
                (!i || !i.loaded && (1 != !i.eager ? n : s > i.from)) && (o[r] = {
                  get: () => f.e(252).then((() => () => f(252))),
                  from: s,
                  eager: !1
                })
              })("react", "18.2.0"), i(286), i(81), i(369)), u.length ? e[t] = Promise.all(u).then((() => e[t] = 1)) : e[t] = 1
            }
          }
        })(), f.p = "", (() => {
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
                for (var s = 0, i = 1, u = !0;; i++, s++) {
                  var l, f, d = i < t.length ? (typeof t[i])[0] : "";
                  if (s >= n.length || "o" == (f = (typeof(l = n[s]))[0])) return !u || ("u" == d ? i > o && !a : "" == d != a);
                  if ("u" == f) {
                    if (!u || "u" != d) return !1
                  } else if (u)
                    if (d == f)
                      if (i <= o) {
                        if (l != t[i]) return !1
                      } else {
                        if (a ? l > t[i] : l < t[i]) return !1;
                        l != t[i] && (u = !1)
                      }
                  else if ("s" != d && "n" != d) {
                    if (a || i <= o) return !1;
                    u = !1, i--
                  } else {
                    if (i <= o || f < d != a) return !1;
                    u = !1
                  } else "s" != d && "n" != d && (u = !1, i--)
                }
              }
              var c = [],
                h = c.pop.bind(c);
              for (s = 1; s < t.length; s++) {
                var p = t[s];
                c.push(1 == p ? h() | h() : 2 == p ? h() & h() : p ? r(p, n) : !h())
              }
              return !!h()
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
                  var s = t[n],
                    i = (typeof s)[0];
                  if (a != i) return "o" == a && "n" == i || "s" == i || "u" == a;
                  if ("o" != a && "u" != a && o != s) return o < s;
                  n++
                }
              })(t, n) ? t : n), 0)) && a[n]
            },
            n = (e => function(r, t, n, o) {
              var a = f.I(r);
              return a && a.then ? a.then(e.bind(e, r, f.S[r], t, n, o)) : e(r, f.S[r], t, n, o)
            })(((e, r, n, o, a) => {
              var s = r && f.o(r, n) && t(r, n, o);
              return s ? (e => (e.loaded = 1, e.get()))(s) : a()
            })),
            o = {},
            a = {
              932: () => n("default", "react", [1, 18, 2, 0], (() => f.e(252).then((() => () => f(252)))))
            },
            s = {
              29: [932]
            };
          f.f.consumes = (e, r) => {
            f.o(s, e) && s[e].forEach((e => {
              if (f.o(o, e)) return r.push(o[e]);
              var t = r => {
                  o[e] = 0, f.m[e] = t => {
                    delete f.c[e], t.exports = r()
                  }
                },
                n = r => {
                  delete o[e], f.m[e] = t => {
                    throw delete f.c[e], r
                  }
                };
              try {
                var s = a[e]();
                s.then ? r.push(o[e] = s.then(t).catch(n)) : t(s)
              } catch (e) {
                n(e)
              }
            }))
          }
        })(), (() => {
          if ("undefined" != typeof document) {
            var e = {
              241: 0
            };
            f.f.miniCss = (r, t) => {
              e[r] ? t.push(e[r]) : 0 !== e[r] && {
                29: 1
              } [r] && t.push(e[r] = (e => new Promise(((r, t) => {
                var n = f.miniCssF(e),
                  o = f.p + n;
                if (((e, r) => {
                    for (var t = document.getElementsByTagName("link"), n = 0; n < t.length; n++) {
                      var o = (s = t[n]).getAttribute("data-href") || s.getAttribute("href");
                      if ("stylesheet" === s.rel && (o === e || o === r)) return s
                    }
                    var a = document.getElementsByTagName("style");
                    for (n = 0; n < a.length; n++) {
                      var s;
                      if ((o = (s = a[n]).getAttribute("data-href")) === e || o === r) return s
                    }
                  })(n, o)) return r();
                ((e, r, t, n, o) => {
                  var a = document.createElement("link");
                  a.rel = "stylesheet", a.type = "text/css", a.onerror = a.onload = t => {
                    if (a.onerror = a.onload = null, "load" === t.type) n();
                    else {
                      var s = t && ("load" === t.type ? "missing" : t.type),
                        i = t && t.target && t.target.href || r,
                        u = new Error("Loading CSS chunk " + e + " failed.\n(" + i + ")");
                      u.code = "CSS_CHUNK_LOAD_FAILED", u.type = s, u.request = i, a.parentNode && a.parentNode.removeChild(a), o(u)
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
            241: 0
          };
          f.f.j = (r, t) => {
            var n = f.o(e, r) ? e[r] : void 0;
            if (0 !== n)
              if (n) t.push(n[2]);
              else {
                var o = new Promise(((t, o) => n = e[r] = [t, o]));
                t.push(n[2] = o);
                var a = f.p + f.u(r),
                  s = new Error;
                f.l(a, (t => {
                  if (f.o(e, r) && (0 !== (n = e[r]) && (e[r] = void 0), n)) {
                    var o = t && ("load" === t.type ? "missing" : t.type),
                      a = t && t.target && t.target.src;
                    s.message = "Loading chunk " + r + " failed.\n(" + o + ": " + a + ")", s.name = "ChunkLoadError", s.type = o, s.request = a, n[1](s)
                  }
                }), "chunk-" + r, r)
              }
          };
          var r = (r, t) => {
              var n, o, a = t[0],
                s = t[1],
                i = t[2],
                u = 0;
              if (a.some((r => 0 !== e[r]))) {
                for (n in s) f.o(s, n) && (f.m[n] = s[n]);
                i && i(f)
              }
              for (r && r(t); u < a.length; u++) o = a[u], f.o(e, o) && e[o] && e[o][0](), e[o] = 0
            },
            t = self.webpackChunk_rockstargames_sites_rockstargames_downloads = self.webpackChunk_rockstargames_sites_rockstargames_downloads || [];
          t.forEach(r.bind(null, 0)), t.push = r.bind(null, t.push.bind(t))
        })(), f(308), f(926)
      })())
    }
  }
}));