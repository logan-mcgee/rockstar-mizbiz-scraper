System.register(["@rockstargames/components", "@rockstargames/graph-client", "@rockstargames/modules-core-agegate", "@rockstargames/modules-core-videoplayer", "@rockstargames/utils"], (function(e, r) {
  var t = {},
    n = {},
    o = {},
    a = {},
    i = {};
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
    }],
    execute: function() {
      e((() => {
        var e, s, u, d, c = {
            86100: (e, r, t) => {
              (0, t(80487).s)(1)
            },
            80487: (e, r, t) => {
              const n = t(26175).R;
              r.s = function(e) {
                if (e || (e = 1), !t.y.meta || !t.y.meta.url) throw console.error("__system_context__", t.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                t.p = n(t.y.meta.url, e)
              }
            },
            29473: (e, r, t) => {
              t(86100)
            },
            26175: (e, r, t) => {
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
            93288: (e, r, t) => {
              "use strict";
              var n = {
                  "./index": () => Promise.all([t.e(876), t.e(927), t.e(322)]).then((() => () => t(22322)))
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
            85286: e => {
              "use strict";
              e.exports = t
            },
            25081: e => {
              "use strict";
              e.exports = n
            },
            90649: e => {
              "use strict";
              e.exports = o
            },
            47124: e => {
              "use strict";
              e.exports = a
            },
            22369: e => {
              "use strict";
              e.exports = i
            }
          },
          l = {};

        function f(e) {
          var r = l[e];
          if (void 0 !== r) return r.exports;
          var t = l[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return c[e].call(t.exports, t, t.exports, f), t.loaded = !0, t.exports
        }
        return f.m = c, f.c = l, f.y = r, f.n = e => {
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
          73: "c8919c62fe49d2408bcac33064309fbf",
          322: "95fee2241bf81feccd24b9a0320219b6",
          377: "9814ff4e6c8a05bca81d194cb01a9b43",
          876: "941703cd0ebab10e196c93ff950360b0",
          927: "84dfdc7872856a05c355e9d2dee198ae"
        } [e] + ".js", f.miniCssF = e => "css/c1c4c6854d7df30ca2693d20718000c2.css", f.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), f.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r), e = {}, s = "@rockstargames/sites-red-dead-redemption-2:", f.l = (r, t, n, o) => {
          if (e[r]) e[r].push(t);
          else {
            var a, i;
            if (void 0 !== n)
              for (var u = document.getElementsByTagName("script"), d = 0; d < u.length; d++) {
                var c = u[d];
                if (c.getAttribute("src") == r || c.getAttribute("data-webpack") == s + n) {
                  a = c;
                  break
                }
              }
            a || (i = !0, (a = document.createElement("script")).charset = "utf-8", a.timeout = 120, f.nc && a.setAttribute("nonce", f.nc), a.setAttribute("data-webpack", s + n), a.src = r), e[r] = [t];
            var l = (t, n) => {
                a.onerror = a.onload = null, clearTimeout(p);
                var o = e[r];
                if (delete e[r], a.parentNode && a.parentNode.removeChild(a), o && o.forEach((e => e(n))), t) return t(n)
              },
              p = setTimeout(l.bind(null, void 0, {
                type: "timeout",
                target: a
              }), 12e4);
            a.onerror = l.bind(null, a.onerror), a.onload = l.bind(null, a.onload), i && document.head.appendChild(a)
          }
        }, f.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, f.nmd = e => (e.paths = [], e.children || (e.children = []), e), u = {
          322: [7194, 29929, 34224, 43657, 64859, 68976, 76921]
        }, d = {
          7194: ["default", "./index", 90649],
          29929: ["default", "./index", 22369],
          34224: ["default", "./index", 47124],
          43657: ["default", "./hooks", 22369],
          64859: ["default", "./index", 25081],
          68976: ["default", "./index", 85286],
          76921: ["default", "./operations/fragments/video-fields.graphql", 25081]
        }, f.f.remotes = (e, r) => {
          f.o(u, e) && u[e].forEach((e => {
            var t = f.R;
            t || (t = []);
            var n = d[e];
            if (!(t.indexOf(n) >= 0)) {
              if (t.push(n), n.p) return r.push(n.p);
              var o = r => {
                  r || (r = new Error("Container missing")), "string" == typeof r.message && (r.message += '\nwhile loading "' + n[1] + '" from ' + n[2]), f.m[e] = () => {
                    throw r
                  }, n.p = 0
                },
                a = (e, t, a, i, s, u) => {
                  try {
                    var d = e(t, a);
                    if (!d || !d.then) return s(d, i, u);
                    var c = d.then((e => s(e, i)), o);
                    if (!u) return c;
                    r.push(n.p = c)
                  } catch (e) {
                    o(e)
                  }
                },
                i = (e, r, o) => a(r.get, n[1], t, 0, s, o),
                s = r => {
                  n.p = 1, f.m[e] = e => {
                    e.exports = r()
                  }
                };
              a(f, n[2], 0, 0, ((e, r, t) => e ? a(f.I, n[0], 0, e, i, t) : o()), 1)
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
                i = "@rockstargames/sites-red-dead-redemption-2",
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
                    var o = f(e);
                    if (!o) return;
                    var a = e => e && e.init && e.init(f.S[t], n);
                    if (o.then) return d.push(o.then(a, r));
                    var i = a(o);
                    if (i && i.then) return d.push(i.catch(r))
                  } catch (e) {
                    r(e)
                  }
                },
                d = [];
              return "default" === t && (s("react-router-dom", "6.17.0", (() => Promise.all([f.e(73), f.e(927)]).then((() => () => f(63073))))), s("react", "18.2.0", (() => f.e(377).then((() => () => f(65377))))), u(85286), u(25081), u(90649), u(47124), u(22369)), d.length ? e[t] = Promise.all(d).then((() => e[t] = 1)) : e[t] = 1
            }
          }
        })(), (() => {
          var e;
          f.g.importScripts && (e = f.g.location + "");
          var r = f.g.document;
          if (!e && r && (r.currentScript && (e = r.currentScript.src), !e)) {
            var t = r.getElementsByTagName("script");
            if (t.length)
              for (var n = t.length - 1; n > -1 && !e;) e = t[n--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), f.p = e
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
                  var d, c, l = s < t.length ? (typeof t[s])[0] : "";
                  if (i >= n.length || "o" == (c = (typeof(d = n[i]))[0])) return !u || ("u" == l ? s > o && !a : "" == l != a);
                  if ("u" == c) {
                    if (!u || "u" != l) return !1
                  } else if (u)
                    if (l == c)
                      if (s <= o) {
                        if (d != t[s]) return !1
                      } else {
                        if (a ? d > t[s] : d < t[s]) return !1;
                        d != t[s] && (u = !1)
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
              var f = [],
                p = f.pop.bind(f);
              for (i = 1; i < t.length; i++) {
                var h = t[i];
                f.push(1 == h ? p() | p() : 2 == h ? p() & p() : h ? r(h, n) : !p())
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
              var a = f.I(r);
              return a && a.then ? a.then(e.bind(e, r, f.S[r], t, n, o)) : e(r, f.S[r], t, n, o)
            })(((e, r, n, o, a) => {
              var i = r && f.o(r, n) && t(r, n, o);
              return i ? (e => (e.loaded = 1, e.get()))(i) : a()
            })),
            o = {},
            a = {
              80927: () => n("default", "react", [1, 18, 2, 0], (() => f.e(377).then((() => () => f(65377))))),
              57583: () => n("default", "react-router-dom", [1, 6, 11, 2], (() => f.e(73).then((() => () => f(63073)))))
            },
            i = {
              322: [57583],
              927: [80927]
            };
          f.f.consumes = (e, r) => {
            f.o(i, e) && i[e].forEach((e => {
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
              857: 0
            };
            f.f.miniCss = (r, t) => {
              e[r] ? t.push(e[r]) : 0 !== e[r] && {
                322: 1
              } [r] && t.push(e[r] = (e => new Promise(((r, t) => {
                var n = f.miniCssF(e),
                  o = f.p + n;
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
            857: 0
          };
          f.f.j = (r, t) => {
            var n = f.o(e, r) ? e[r] : void 0;
            if (0 !== n)
              if (n) t.push(n[2]);
              else if (927 != r) {
              var o = new Promise(((t, o) => n = e[r] = [t, o]));
              t.push(n[2] = o);
              var a = f.p + f.u(r),
                i = new Error;
              f.l(a, (t => {
                if (f.o(e, r) && (0 !== (n = e[r]) && (e[r] = void 0), n)) {
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
                for (n in i) f.o(i, n) && (f.m[n] = i[n]);
                s && s(f)
              }
              for (r && r(t); u < a.length; u++) o = a[u], f.o(e, o) && e[o] && e[o][0](), e[o] = 0
            },
            t = self.webpackChunk_rockstargames_sites_red_dead_redemption_2 = self.webpackChunk_rockstargames_sites_red_dead_redemption_2 || [];
          t.forEach(r.bind(null, 0)), t.push = r.bind(null, t.push.bind(t))
        })(), f(29473), f(93288)
      })())
    }
  }
}));