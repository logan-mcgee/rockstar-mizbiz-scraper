System.register(["@rockstargames/components", "@rockstargames/graph-client", "@rockstargames/modules-core-sc-user", "@rockstargames/polyfills", "@rockstargames/tina", "@rockstargames/utils"], (function(e, t) {
  var r = {},
    n = {},
    o = {},
    a = {},
    i = {},
    s = {};
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
    }],
    execute: function() {
      e((() => {
        var e, u, c, f, l = {
            6100: (e, t, r) => {
              (0, r(487).s)(1)
            },
            487: (e, t, r) => {
              const n = r(6175).R;
              t.s = function(e) {
                if (e || (e = 1), !r.y.meta || !r.y.meta.url) throw console.error("__system_context__", r.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                r.p = n(r.y.meta.url, e)
              }
            },
            9473: (e, t, r) => {
              r(6100)
            },
            6175: (e, t, r) => {
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
            5041: (e, t, r) => {
              "use strict";
              var n = {
                  "./bootstrap": () => r.e(828).then((() => () => r(2828))),
                  "./index": () => r.e(344).then((() => () => r(2344))),
                  "./tinaBlockTemplates": () => r.e(296).then((() => () => r(7296)))
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
            4031: e => {
              "use strict";
              e.exports = o
            },
            1861: e => {
              "use strict";
              e.exports = a
            },
            7559: e => {
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
          var t = d[e];
          if (void 0 !== t) return t.exports;
          var r = d[e] = {
            exports: {}
          };
          return l[e](r, r.exports, p), r.exports
        }
        return p.m = l, p.c = d, p.y = t, p.n = e => {
          var t = e && e.__esModule ? () => e.default : () => e;
          return p.d(t, {
            a: t
          }), t
        }, p.d = (e, t) => {
          for (var r in t) p.o(t, r) && !p.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: t[r]
          })
        }, p.f = {}, p.e = e => Promise.all(Object.keys(p.f).reduce(((t, r) => (p.f[r](e, t), t)), [])), p.u = e => "js/" + {
          95: "83dfdf342e14d0546535b35a21e07f10",
          296: "27ac4c9f96c234d043f30c87a6ae9609",
          344: "5b0b7b3a2ba0da04b96e83afb6d839dd",
          358: "db28674e37b69a6e50ea7f8b12d899c4",
          377: "aeeb1eb8870a4523e2fa4a9e69ee1362",
          828: "bccbc19eb77054b367c804ada04b3d51"
        } [e] + ".js", p.miniCssF = e => "css/1f64ec4b2b1c8bb7fd4ce79c3cb0493c.css", p.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), p.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), e = {}, u = "@rockstargames/modules-sc-ugc-spotlight:", p.l = (t, r, n, o) => {
          if (e[t]) e[t].push(r);
          else {
            var a, i;
            if (void 0 !== n)
              for (var s = document.getElementsByTagName("script"), c = 0; c < s.length; c++) {
                var f = s[c];
                if (f.getAttribute("src") == t || f.getAttribute("data-webpack") == u + n) {
                  a = f;
                  break
                }
              }
            a || (i = !0, (a = document.createElement("script")).charset = "utf-8", a.timeout = 120, p.nc && a.setAttribute("nonce", p.nc), a.setAttribute("data-webpack", u + n), a.src = t), e[t] = [r];
            var l = (r, n) => {
                a.onerror = a.onload = null, clearTimeout(d);
                var o = e[t];
                if (delete e[t], a.parentNode && a.parentNode.removeChild(a), o && o.forEach((e => e(n))), r) return r(n)
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
          296: [3616],
          358: [1458, 2324, 3657, 4859, 5269, 6711, 7842, 8976]
        }, f = {
          1458: ["default", "./providers", 4031],
          2324: ["default", "./helpers", 7559],
          3616: ["default", "./properties", 7559],
          3657: ["default", "./hooks", 2369],
          4859: ["default", "./index", 5081],
          5269: ["default", "./graph/policies", 4031],
          6711: ["default", "./index", 4031],
          7842: ["default", "./browser", 1861],
          8976: ["default", "./index", 5286]
        }, p.f.remotes = (e, t) => {
          p.o(c, e) && c[e].forEach((e => {
            var r = p.R;
            r || (r = []);
            var n = f[e];
            if (!(r.indexOf(n) >= 0)) {
              if (r.push(n), n.p) return t.push(n.p);
              var o = t => {
                  t || (t = new Error("Container missing")), "string" == typeof t.message && (t.message += '\nwhile loading "' + n[1] + '" from ' + n[2]), p.m[e] = () => {
                    throw t
                  }, n.p = 0
                },
                a = (e, r, a, i, s, u) => {
                  try {
                    var c = e(r, a);
                    if (!c || !c.then) return s(c, i, u);
                    var f = c.then((e => s(e, i)), o);
                    if (!u) return f;
                    t.push(n.p = f)
                  } catch (e) {
                    o(e)
                  }
                },
                i = (e, t, o) => a(t.get, n[1], r, 0, s, o),
                s = t => {
                  n.p = 1, p.m[e] = e => {
                    e.exports = t()
                  }
                };
              a(p, n[2], 0, 0, ((e, t, r) => e ? a(p.I, n[0], 0, e, i, r) : o()), 1)
            }
          }))
        }, (() => {
          p.S = {};
          var e = {},
            t = {};
          p.I = (r, n) => {
            n || (n = []);
            var o = t[r];
            if (o || (o = t[r] = {}), !(n.indexOf(o) >= 0)) {
              if (n.push(o), e[r]) return e[r];
              p.o(p.S, r) || (p.S[r] = {});
              var a = p.S[r],
                i = "@rockstargames/modules-sc-ugc-spotlight",
                s = e => {
                  var t = e => {
                    return t = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(t));
                    var t
                  };
                  try {
                    var o = p(e);
                    if (!o) return;
                    var a = e => e && e.init && e.init(p.S[r], n);
                    if (o.then) return u.push(o.then(a, t));
                    var i = a(o);
                    if (i && i.then) return u.push(i.catch(t))
                  } catch (e) {
                    t(e)
                  }
                },
                u = [];
              return "default" === r && (((e, t, r, n) => {
                var o = a[e] = a[e] || {},
                  s = o[t];
                (!s || !s.loaded && (1 != !s.eager ? n : i > s.from)) && (o[t] = {
                  get: () => p.e(377).then((() => () => p(5377))),
                  from: i,
                  eager: !1
                })
              })("react", "18.2.0"), s(7559), s(5286), s(5081), s(4031), s(1861), s(2369)), u.length ? e[r] = Promise.all(u).then((() => e[r] = 1)) : e[r] = 1
            }
          }
        })(), (() => {
          var e;
          p.g.importScripts && (e = p.g.location + "");
          var t = p.g.document;
          if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
            var r = t.getElementsByTagName("script");
            if (r.length)
              for (var n = r.length - 1; n > -1 && !e;) e = r[n--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), p.p = e
        })(), (() => {
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
                  var c, f, l = s < r.length ? (typeof r[s])[0] : "";
                  if (i >= n.length || "o" == (f = (typeof(c = n[i]))[0])) return !u || ("u" == l ? s > o && !a : "" == l != a);
                  if ("u" == f) {
                    if (!u || "u" != l) return !1
                  } else if (u)
                    if (l == f)
                      if (s <= o) {
                        if (c != r[s]) return !1
                      } else {
                        if (a ? c > r[s] : c < r[s]) return !1;
                        c != r[s] && (u = !1)
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
              var a = p.I(t);
              return a && a.then ? a.then(e.bind(e, t, p.S[t], r, n, o)) : e(t, p.S[t], r, n, o)
            })(((e, t, n, o, a) => {
              var i = t && p.o(t, n) && r(t, n, o);
              return i ? (e => (e.loaded = 1, e.get()))(i) : a()
            })),
            o = {},
            a = {
              927: () => n("default", "react", [1, 18, 2, 0], (() => p.e(377).then((() => () => p(5377)))))
            },
            i = {
              358: [927]
            };
          p.f.consumes = (e, t) => {
            p.o(i, e) && i[e].forEach((e => {
              if (p.o(o, e)) return t.push(o[e]);
              var r = t => {
                  o[e] = 0, p.m[e] = r => {
                    delete p.c[e], r.exports = t()
                  }
                },
                n = t => {
                  delete o[e], p.m[e] = r => {
                    throw delete p.c[e], t
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
              817: 0
            };
            p.f.miniCss = (t, r) => {
              e[t] ? r.push(e[t]) : 0 !== e[t] && {
                358: 1
              } [t] && r.push(e[t] = (e => new Promise(((t, r) => {
                var n = p.miniCssF(e),
                  o = p.p + n;
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
            817: 0
          };
          p.f.j = (t, r) => {
            var n = p.o(e, t) ? e[t] : void 0;
            if (0 !== n)
              if (n) r.push(n[2]);
              else {
                var o = new Promise(((r, o) => n = e[t] = [r, o]));
                r.push(n[2] = o);
                var a = p.p + p.u(t),
                  i = new Error;
                p.l(a, (r => {
                  if (p.o(e, t) && (0 !== (n = e[t]) && (e[t] = void 0), n)) {
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
                for (n in i) p.o(i, n) && (p.m[n] = i[n]);
                s && s(p)
              }
              for (t && t(r); u < a.length; u++) o = a[u], p.o(e, o) && e[o] && e[o][0](), e[o] = 0
            },
            r = self.webpackChunk_rockstargames_modules_sc_ugc_spotlight = self.webpackChunk_rockstargames_modules_sc_ugc_spotlight || [];
          r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
        })(), p(9473), p(5041)
      })())
    }
  }
}));