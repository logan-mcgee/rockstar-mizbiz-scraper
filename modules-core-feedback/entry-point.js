System.register(["@rockstargames/components", "@rockstargames/graph-client", "@rockstargames/modules-core-sc-user", "@rockstargames/utils"], (function(e, r) {
  var t = {},
    n = {},
    o = {},
    a = {};
  return Object.defineProperty(t, "__esModule", {
    value: !0
  }), Object.defineProperty(n, "__esModule", {
    value: !0
  }), Object.defineProperty(o, "__esModule", {
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
        o[r] = e[r]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(r) {
        a[r] = e[r]
      }))
    }],
    execute: function() {
      e((() => {
        var e, i, s, u, f = {
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
                var i = n.slice(0, a + 1);
                return t.protocol + "//" + t.host + i
              };
              Number.isInteger
            },
            288: (e, r, t) => {
              "use strict";
              var n = {
                  "./index": () => t.e(878).then((() => () => t(878)))
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
            31: e => {
              "use strict";
              e.exports = o
            },
            369: e => {
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
          return f[e](t, t.exports, l), t.exports
        }
        return l.m = f, l.c = c, l.y = r, l.d = (e, r) => {
          for (var t in r) l.o(r, t) && !l.o(e, t) && Object.defineProperty(e, t, {
            enumerable: !0,
            get: r[t]
          })
        }, l.f = {}, l.e = e => Promise.all(Object.keys(l.f).reduce(((r, t) => (l.f[t](e, r), r)), [])), l.u = e => "js/" + {
          252: "7282d0b455d060806b85",
          878: "307f685d2eb3539d6831"
        } [e] + ".js", l.miniCssF = e => "css/f4b6c69fd95b560ba18a.css", l.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r), e = {}, i = "@rockstargames/modules-core-feedback:", l.l = (r, t, n, o) => {
          if (e[r]) e[r].push(t);
          else {
            var a, s;
            if (void 0 !== n)
              for (var u = document.getElementsByTagName("script"), f = 0; f < u.length; f++) {
                var c = u[f];
                if (c.getAttribute("src") == r || c.getAttribute("data-webpack") == i + n) {
                  a = c;
                  break
                }
              }
            a || (s = !0, (a = document.createElement("script")).charset = "utf-8", a.timeout = 120, l.nc && a.setAttribute("nonce", l.nc), a.setAttribute("data-webpack", i + n), a.src = r), e[r] = [t];
            var d = (t, n) => {
                a.onerror = a.onload = null, clearTimeout(h);
                var o = e[r];
                if (delete e[r], a.parentNode && a.parentNode.removeChild(a), o && o.forEach((e => e(n))), t) return t(n)
              },
              h = setTimeout(d.bind(null, void 0, {
                type: "timeout",
                target: a
              }), 12e4);
            a.onerror = d.bind(null, a.onerror), a.onload = d.bind(null, a.onload), s && document.head.appendChild(a)
          }
        }, l.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, s = {
          878: [711, 859, 929, 976]
        }, u = {
          711: ["default", "./index", 31],
          859: ["default", "./index", 81],
          929: ["default", "./index", 369],
          976: ["default", "./index", 286]
        }, l.f.remotes = (e, r) => {
          l.o(s, e) && s[e].forEach((e => {
            var t = l.R;
            t || (t = []);
            var n = u[e];
            if (!(t.indexOf(n) >= 0)) {
              if (t.push(n), n.p) return r.push(n.p);
              var o = r => {
                  r || (r = new Error("Container missing")), "string" == typeof r.message && (r.message += '\nwhile loading "' + n[1] + '" from ' + n[2]), l.m[e] = () => {
                    throw r
                  }, n.p = 0
                },
                a = (e, t, a, i, s, u) => {
                  try {
                    var f = e(t, a);
                    if (!f || !f.then) return s(f, i, u);
                    var c = f.then((e => s(e, i)), o);
                    if (!u) return c;
                    r.push(n.p = c)
                  } catch (e) {
                    o(e)
                  }
                },
                i = (e, r, o) => a(r.get, n[1], t, 0, s, o),
                s = r => {
                  n.p = 1, l.m[e] = e => {
                    e.exports = r()
                  }
                };
              a(l, n[2], 0, 0, ((e, r, t) => e ? a(l.I, n[0], 0, e, i, t) : o()), 1)
            }
          }))
        }, (() => {
          l.S = {};
          var e = {},
            r = {};
          l.I = (t, n) => {
            n || (n = []);
            var o = r[t];
            if (o || (o = r[t] = {}), !(n.indexOf(o) >= 0)) {
              if (n.push(o), e[t]) return e[t];
              l.o(l.S, t) || (l.S[t] = {});
              var a = l.S[t],
                i = "@rockstargames/modules-core-feedback",
                s = e => {
                  var r = e => {
                    return r = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(r));
                    var r
                  };
                  try {
                    var o = l(e);
                    if (!o) return;
                    var a = e => e && e.init && e.init(l.S[t], n);
                    if (o.then) return u.push(o.then(a, r));
                    var i = a(o);
                    if (i && i.then) return u.push(i.catch(r))
                  } catch (e) {
                    r(e)
                  }
                },
                u = [];
              return "default" === t && (((e, r, t, n) => {
                var o = a[e] = a[e] || {},
                  s = o[r];
                (!s || !s.loaded && (1 != !s.eager ? n : i > s.from)) && (o[r] = {
                  get: () => l.e(252).then((() => () => l(252))),
                  from: i,
                  eager: !1
                })
              })("react", "18.2.0"), s(286), s(81), s(31), s(369)), u.length ? e[t] = Promise.all(u).then((() => e[t] = 1)) : e[t] = 1
            }
          }
        })(), l.p = "", (() => {
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
                  var f, c, l = s < t.length ? (typeof t[s])[0] : "";
                  if (i >= n.length || "o" == (c = (typeof(f = n[i]))[0])) return !u || ("u" == l ? s > o && !a : "" == l != a);
                  if ("u" == c) {
                    if (!u || "u" != l) return !1
                  } else if (u)
                    if (l == c)
                      if (s <= o) {
                        if (f != t[s]) return !1
                      } else {
                        if (a ? f > t[s] : f < t[s]) return !1;
                        f != t[s] && (u = !1)
                      }
                  else if ("s" != l && "n" != l) {
                    if (a || s <= o) return !1;
                    u = !1, s--
                  } else {
                    if (s <= o || c < l != a) return !1;
                    u = !1
                  } else "s" != l && "n" != l && (u = !1, s--)
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
              var a = l.I(r);
              return a && a.then ? a.then(e.bind(e, r, l.S[r], t, n, o)) : e(r, l.S[r], t, n, o)
            })(((e, r, n, o, a) => {
              var i = r && l.o(r, n) && t(r, n, o);
              return i ? (e => (e.loaded = 1, e.get()))(i) : a()
            })),
            o = {},
            a = {
              932: () => n("default", "react", [1, 18, 2, 0], (() => l.e(252).then((() => () => l(252)))))
            },
            i = {
              878: [932]
            };
          l.f.consumes = (e, r) => {
            l.o(i, e) && i[e].forEach((e => {
              if (l.o(o, e)) return r.push(o[e]);
              var t = r => {
                  o[e] = 0, l.m[e] = t => {
                    delete l.c[e], t.exports = r()
                  }
                },
                n = r => {
                  delete o[e], l.m[e] = t => {
                    throw delete l.c[e], r
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
              496: 0
            };
            l.f.miniCss = (r, t) => {
              e[r] ? t.push(e[r]) : 0 !== e[r] && {
                878: 1
              } [r] && t.push(e[r] = (e => new Promise(((r, t) => {
                var n = l.miniCssF(e),
                  o = l.p + n;
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
            496: 0
          };
          l.f.j = (r, t) => {
            var n = l.o(e, r) ? e[r] : void 0;
            if (0 !== n)
              if (n) t.push(n[2]);
              else {
                var o = new Promise(((t, o) => n = e[r] = [t, o]));
                t.push(n[2] = o);
                var a = l.p + l.u(r),
                  i = new Error;
                l.l(a, (t => {
                  if (l.o(e, r) && (0 !== (n = e[r]) && (e[r] = void 0), n)) {
                    var o = t && ("load" === t.type ? "missing" : t.type),
                      a = t && t.target && t.target.src;
                    i.message = "Loading chunk " + r + " failed.\n(" + o + ": " + a + ")", i.name = "ChunkLoadError", i.type = o, i.request = a, n[1](i)
                  }
                }), "chunk-" + r, r)
              }
          };
          var r = (r, t) => {
              var n, o, a = t[0],
                i = t[1],
                s = t[2],
                u = 0;
              if (a.some((r => 0 !== e[r]))) {
                for (n in i) l.o(i, n) && (l.m[n] = i[n]);
                s && s(l)
              }
              for (r && r(t); u < a.length; u++) o = a[u], l.o(e, o) && e[o] && e[o][0](), e[o] = 0
            },
            t = self.webpackChunk_rockstargames_modules_core_feedback = self.webpackChunk_rockstargames_modules_core_feedback || [];
          t.forEach(r.bind(null, 0)), t.push = r.bind(null, t.push.bind(t))
        })(), l(308), l(288)
      })())
    }
  }
}));