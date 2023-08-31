System.register(["@rockstargames/components", "@rockstargames/graph-client", "@rockstargames/modules-core-sc-user", "@rockstargames/polyfills", "@rockstargames/tina", "@rockstargames/utils"], (function(e, t) {
  var r = {},
    n = {},
    o = {},
    a = {},
    s = {},
    i = {};
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
    }],
    execute: function() {
      e((() => {
        var e, u, c, l, f = {
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
            5041: (e, t, r) => {
              "use strict";
              var n = {
                  "./bootstrap": () => r.e(39).then((() => () => r(5039))),
                  "./index": () => r.e(986).then((() => () => r(7986))),
                  "./tinaBlockTemplates": () => r.e(879).then((() => () => r(1879)))
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
              e.exports = s
            },
            2369: e => {
              "use strict";
              e.exports = i
            }
          },
          d = {};

        function p(e) {
          var t = d[e];
          if (void 0 !== t) return t.exports;
          var r = d[e] = {
            exports: {}
          };
          return f[e](r, r.exports, p), r.exports
        }
        return p.m = f, p.c = d, p.y = t, p.n = e => {
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
          39: "9370237fcffe0f6db9ec",
          252: "c9b51df55d64f193500c",
          690: "a1c114b0fa883b0ec372",
          741: "46df2864524586c99309",
          879: "b522c892944ce46f52bb",
          986: "b9d53ec7f96dd755a6d8"
        } [e] + ".js", p.miniCssF = e => "css/3f6a0d49dbecb7ccc503.css", p.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), e = {}, u = "@rockstargames/modules-sc-ugc-spotlight:", p.l = (t, r, n, o) => {
          if (e[t]) e[t].push(r);
          else {
            var a, s;
            if (void 0 !== n)
              for (var i = document.getElementsByTagName("script"), c = 0; c < i.length; c++) {
                var l = i[c];
                if (l.getAttribute("src") == t || l.getAttribute("data-webpack") == u + n) {
                  a = l;
                  break
                }
              }
            a || (s = !0, (a = document.createElement("script")).charset = "utf-8", a.timeout = 120, p.nc && a.setAttribute("nonce", p.nc), a.setAttribute("data-webpack", u + n), a.src = t), e[t] = [r];
            var f = (r, n) => {
                a.onerror = a.onload = null, clearTimeout(d);
                var o = e[t];
                if (delete e[t], a.parentNode && a.parentNode.removeChild(a), o && o.forEach((e => e(n))), r) return r(n)
              },
              d = setTimeout(f.bind(null, void 0, {
                type: "timeout",
                target: a
              }), 12e4);
            a.onerror = f.bind(null, a.onerror), a.onload = f.bind(null, a.onload), s && document.head.appendChild(a)
          }
        }, p.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, c = {
          741: [1458, 2324, 3657, 4859, 5269, 6711, 7842, 8976],
          879: [3616]
        }, l = {
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
            var n = l[e];
            if (!(r.indexOf(n) >= 0)) {
              if (r.push(n), n.p) return t.push(n.p);
              var o = t => {
                  t || (t = new Error("Container missing")), "string" == typeof t.message && (t.message += '\nwhile loading "' + n[1] + '" from ' + n[2]), p.m[e] = () => {
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
                  n.p = 1, p.m[e] = e => {
                    e.exports = t()
                  }
                };
              a(p, n[2], 0, 0, ((e, t, r) => e ? a(p.I, n[0], 0, e, s, r) : o()), 1)
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
                s = "@rockstargames/modules-sc-ugc-spotlight",
                i = e => {
                  var t = e => {
                    return t = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(t));
                    var t
                  };
                  try {
                    var o = p(e);
                    if (!o) return;
                    var a = e => e && e.init && e.init(p.S[r], n);
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
                  get: () => p.e(252).then((() => () => p(8252))),
                  from: s,
                  eager: !1
                })
              })("react", "18.2.0"), i(7559), i(5286), i(5081), i(4031), i(1861), i(2369)), u.length ? e[r] = Promise.all(u).then((() => e[r] = 1)) : e[r] = 1
            }
          }
        })(), p.p = "", (() => {
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
              var a = p.I(t);
              return a && a.then ? a.then(e.bind(e, t, p.S[t], r, n, o)) : e(t, p.S[t], r, n, o)
            })(((e, t, n, o, a) => {
              var s = t && p.o(t, n) && r(t, n, o);
              return s ? (e => (e.loaded = 1, e.get()))(s) : a()
            })),
            o = {},
            a = {
              4932: () => n("default", "react", [1, 18, 2, 0], (() => p.e(252).then((() => () => p(8252)))))
            },
            s = {
              741: [4932]
            };
          p.f.consumes = (e, t) => {
            p.o(s, e) && s[e].forEach((e => {
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
              817: 0
            };
            p.f.miniCss = (t, r) => {
              e[t] ? r.push(e[t]) : 0 !== e[t] && {
                741: 1
              } [t] && r.push(e[t] = (e => new Promise(((t, r) => {
                var n = p.miniCssF(e),
                  o = p.p + n;
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
                  s = new Error;
                p.l(a, (r => {
                  if (p.o(e, t) && (0 !== (n = e[t]) && (e[t] = void 0), n)) {
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
                for (n in s) p.o(s, n) && (p.m[n] = s[n]);
                i && i(p)
              }
              for (t && t(r); u < a.length; u++) o = a[u], p.o(e, o) && e[o] && e[o][0](), e[o] = 0
            },
            r = self.webpackChunk_rockstargames_modules_sc_ugc_spotlight = self.webpackChunk_rockstargames_modules_sc_ugc_spotlight || [];
          r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
        })(), p(1308), p(5041)
      })())
    }
  }
}));