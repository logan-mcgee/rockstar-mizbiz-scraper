System.register(["@rockstargames/graph-client", "@rockstargames/modules-core-sc-user", "@rockstargames/tina", "@rockstargames/utils"], (function(e, r) {
  var t = {},
    n = {},
    a = {},
    o = {};
  return Object.defineProperty(t, "__esModule", {
    value: !0
  }), Object.defineProperty(n, "__esModule", {
    value: !0
  }), Object.defineProperty(a, "__esModule", {
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
        a[r] = e[r]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(r) {
        o[r] = e[r]
      }))
    }],
    execute: function() {
      e((() => {
        var e, i, s, u, l = {
            3580: (e, r, t) => {
              (0, t(4879).s)(1)
            },
            4879: (e, r, t) => {
              const n = t(2490).R;
              r.s = function(e) {
                if (e || (e = 1), !t.y.meta || !t.y.meta.url) throw console.error("__system_context__", t.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                t.p = n(t.y.meta.url, e)
              }
            },
            1308: (e, r, t) => {
              t(3580)
            },
            2490: (e, r, t) => {
              r.R = function(e, r) {
                var t = document.createElement("a");
                t.href = e;
                for (var n = "/" === t.pathname[0] ? t.pathname : "/" + t.pathname, a = 0, o = n.length; a !== r && o >= 0;) "/" === n[--o] && a++;
                if (a !== r) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + r + ") is greater than the number of directories (" + a + ") in the URL path " + e);
                var i = n.slice(0, o + 1);
                return t.protocol + "//" + t.host + i
              };
              Number.isInteger
            },
            8656: (e, r, t) => {
              "use strict";
              var n = {
                  "./index": () => Promise.all([t.e(235), t.e(205), t.e(692), t.e(932), t.e(542), t.e(749), t.e(711), t.e(320)]).then((() => () => t(9668))),
                  "./providers": () => Promise.all([t.e(235), t.e(932), t.e(542), t.e(711), t.e(515)]).then((() => () => t(7515))),
                  "./tinaBlockTemplates": () => Promise.all([t.e(205), t.e(932), t.e(542), t.e(749), t.e(916)]).then((() => () => t(2916)))
                },
                a = (e, r) => (t.R = r, r = t.o(n, e) ? n[e]() : Promise.resolve().then((() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                })), t.R = void 0, r),
                o = (e, r) => {
                  if (t.S) {
                    var n = "default",
                      a = t.S[n];
                    if (a && a !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return t.S[n] = e, t.I(n, r)
                  }
                };
              t.d(r, {
                get: () => a,
                init: () => o
              })
            },
            5081: e => {
              "use strict";
              e.exports = t
            },
            4031: e => {
              "use strict";
              e.exports = n
            },
            7559: e => {
              "use strict";
              e.exports = a
            },
            2369: e => {
              "use strict";
              e.exports = o
            }
          },
          c = {};

        function f(e) {
          var r = c[e];
          if (void 0 !== r) return r.exports;
          var t = c[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return l[e].call(t.exports, t, t.exports, f), t.loaded = !0, t.exports
        }
        return f.m = l, f.c = c, f.y = r, f.amdO = {}, f.n = e => {
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
          205: "83438b62b056a087af0c",
          235: "5ff555c107f549741119",
          252: "f72a27cc5a8ab7a2a626",
          320: "17bf005c42873e8c7114",
          334: "49b97df7c2c7dc30fcfa",
          515: "ea584db3e20c49f22c9f",
          542: "622bae699c0617d133ce",
          692: "f870230159a0ff5a1241",
          711: "516d8d1a94bc38afeb5f",
          749: "ab89075c7be3540a5e87",
          916: "207a0b572fd09713e8a2",
          932: "53578ef7882b4ae2c780"
        } [e] + ".js", f.miniCssF = e => "css/" + {
          320: "24966454181815434821",
          515: "bb9641fdbb339f4ce4ed",
          749: "e7305f1aa213072418ef"
        } [e] + ".css", f.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), f.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r), e = {}, i = "@rockstargames/components:", f.l = (r, t, n, a) => {
          if (e[r]) e[r].push(t);
          else {
            var o, s;
            if (void 0 !== n)
              for (var u = document.getElementsByTagName("script"), l = 0; l < u.length; l++) {
                var c = u[l];
                if (c.getAttribute("src") == r || c.getAttribute("data-webpack") == i + n) {
                  o = c;
                  break
                }
              }
            o || (s = !0, (o = document.createElement("script")).charset = "utf-8", o.timeout = 120, f.nc && o.setAttribute("nonce", f.nc), o.setAttribute("data-webpack", i + n), o.src = r), e[r] = [t];
            var d = (t, n) => {
                o.onerror = o.onload = null, clearTimeout(p);
                var a = e[r];
                if (delete e[r], o.parentNode && o.parentNode.removeChild(o), a && a.forEach((e => e(n))), t) return t(n)
              },
              p = setTimeout(d.bind(null, void 0, {
                type: "timeout",
                target: o
              }), 12e4);
            o.onerror = d.bind(null, o.onerror), o.onload = d.bind(null, o.onload), s && document.head.appendChild(o)
          }
        }, f.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, f.nmd = e => (e.paths = [], e.children || (e.children = []), e), s = {
          320: [2324, 3657, 3761, 6077, 9349],
          542: [9542],
          711: [6711],
          749: [559, 4859, 9929],
          916: [3374, 3616, 5607]
        }, u = {
          559: ["default", "./helpers/uploads", 7559],
          2324: ["default", "./helpers", 7559],
          3374: ["default", "./ui", 7559],
          3616: ["default", "./properties", 7559],
          3657: ["default", "./hooks", 2369],
          3761: ["default", "./operations/queries", 5081],
          4859: ["default", "./index", 5081],
          5607: ["default", "./functions", 2369],
          6077: ["default", "./operations/fragments/newswire-post.graphql", 5081],
          6711: ["default", "./index", 4031],
          9349: ["default", "./operations/fragments/paging.graphql", 5081],
          9542: ["default", "./index", 7559],
          9929: ["default", "./index", 2369]
        }, f.f.remotes = (e, r) => {
          f.o(s, e) && s[e].forEach((e => {
            var t = f.R;
            t || (t = []);
            var n = u[e];
            if (!(t.indexOf(n) >= 0)) {
              if (t.push(n), n.p) return r.push(n.p);
              var a = r => {
                  r || (r = new Error("Container missing")), "string" == typeof r.message && (r.message += '\nwhile loading "' + n[1] + '" from ' + n[2]), f.m[e] = () => {
                    throw r
                  }, n.p = 0
                },
                o = (e, t, o, i, s, u) => {
                  try {
                    var l = e(t, o);
                    if (!l || !l.then) return s(l, i, u);
                    var c = l.then((e => s(e, i)), a);
                    if (!u) return c;
                    r.push(n.p = c)
                  } catch (e) {
                    a(e)
                  }
                },
                i = (e, r, a) => o(r.get, n[1], t, 0, s, a),
                s = r => {
                  n.p = 1, f.m[e] = e => {
                    e.exports = r()
                  }
                };
              o(f, n[2], 0, 0, ((e, r, t) => e ? o(f.I, n[0], 0, e, i, t) : a()), 1)
            }
          }))
        }, (() => {
          f.S = {};
          var e = {},
            r = {};
          f.I = (t, n) => {
            n || (n = []);
            var a = r[t];
            if (a || (a = r[t] = {}), !(n.indexOf(a) >= 0)) {
              if (n.push(a), e[t]) return e[t];
              f.o(f.S, t) || (f.S[t] = {});
              var o = f.S[t],
                i = "@rockstargames/components",
                s = (e, r, t, n) => {
                  var a = o[e] = o[e] || {},
                    s = a[r];
                  (!s || !s.loaded && (!n != !s.eager ? n : i > s.from)) && (a[r] = {
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
                    var a = f(e);
                    if (!a) return;
                    var o = e => e && e.init && e.init(f.S[t], n);
                    if (a.then) return l.push(a.then(o, r));
                    var i = o(a);
                    if (i && i.then) return l.push(i.catch(r))
                  } catch (e) {
                    r(e)
                  }
                },
                l = [];
              return "default" === t && (s("react-router-dom", "6.11.2", (() => Promise.all([f.e(334), f.e(932)]).then((() => () => f(5334))))), s("react", "18.2.0", (() => f.e(252).then((() => () => f(8252))))), u(7559), u(5081), u(2369), u(4031)), l.length ? e[t] = Promise.all(l).then((() => e[t] = 1)) : e[t] = 1
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
                var a = t[0],
                  o = a < 0;
                o && (a = -a - 1);
                for (var i = 0, s = 1, u = !0;; s++, i++) {
                  var l, c, f = s < t.length ? (typeof t[s])[0] : "";
                  if (i >= n.length || "o" == (c = (typeof(l = n[i]))[0])) return !u || ("u" == f ? s > a && !o : "" == f != o);
                  if ("u" == c) {
                    if (!u || "u" != f) return !1
                  } else if (u)
                    if (f == c)
                      if (s <= a) {
                        if (l != t[s]) return !1
                      } else {
                        if (o ? l > t[s] : l < t[s]) return !1;
                        l != t[s] && (u = !1)
                      }
                  else if ("s" != f && "n" != f) {
                    if (o || s <= a) return !1;
                    u = !1, s--
                  } else {
                    if (s <= a || c < f != o) return !1;
                    u = !1
                  } else "s" != f && "n" != f && (u = !1, s--)
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
            t = (t, n, a) => {
              var o = t[n];
              return (n = Object.keys(o).reduce(((t, n) => !r(a, n) || t && !((r, t) => {
                r = e(r), t = e(t);
                for (var n = 0;;) {
                  if (n >= r.length) return n < t.length && "u" != (typeof t[n])[0];
                  var a = r[n],
                    o = (typeof a)[0];
                  if (n >= t.length) return "u" == o;
                  var i = t[n],
                    s = (typeof i)[0];
                  if (o != s) return "o" == o && "n" == s || "s" == s || "u" == o;
                  if ("o" != o && "u" != o && a != i) return a < i;
                  n++
                }
              })(t, n) ? t : n), 0)) && o[n]
            },
            n = (e => function(r, t, n, a) {
              var o = f.I(r);
              return o && o.then ? o.then(e.bind(e, r, f.S[r], t, n, a)) : e(r, f.S[r], t, n, a)
            })(((e, r, n, a, o) => {
              var i = r && f.o(r, n) && t(r, n, a);
              return i ? (e => (e.loaded = 1, e.get()))(i) : o()
            })),
            a = {},
            o = {
              4932: () => n("default", "react", [1, 18, 2, 0], (() => f.e(252).then((() => () => f(8252))))),
              1424: () => n("default", "react-router-dom", [1, 6, 11, 2], (() => f.e(334).then((() => () => f(5334)))))
            },
            i = {
              320: [1424],
              932: [4932]
            };
          f.f.consumes = (e, r) => {
            f.o(i, e) && i[e].forEach((e => {
              if (f.o(a, e)) return r.push(a[e]);
              var t = r => {
                  a[e] = 0, f.m[e] = t => {
                    delete f.c[e], t.exports = r()
                  }
                },
                n = r => {
                  delete a[e], f.m[e] = t => {
                    throw delete f.c[e], r
                  }
                };
              try {
                var i = o[e]();
                i.then ? r.push(a[e] = i.then(t).catch(n)) : t(i)
              } catch (e) {
                n(e)
              }
            }))
          }
        })(), (() => {
          if ("undefined" != typeof document) {
            var e = {
              215: 0
            };
            f.f.miniCss = (r, t) => {
              e[r] ? t.push(e[r]) : 0 !== e[r] && {
                320: 1,
                515: 1,
                749: 1
              } [r] && t.push(e[r] = (e => new Promise(((r, t) => {
                var n = f.miniCssF(e),
                  a = f.p + n;
                if (((e, r) => {
                    for (var t = document.getElementsByTagName("link"), n = 0; n < t.length; n++) {
                      var a = (i = t[n]).getAttribute("data-href") || i.getAttribute("href");
                      if ("stylesheet" === i.rel && (a === e || a === r)) return i
                    }
                    var o = document.getElementsByTagName("style");
                    for (n = 0; n < o.length; n++) {
                      var i;
                      if ((a = (i = o[n]).getAttribute("data-href")) === e || a === r) return i
                    }
                  })(n, a)) return r();
                ((e, r, t, n, a) => {
                  var o = document.createElement("link");
                  o.rel = "stylesheet", o.type = "text/css", o.onerror = o.onload = t => {
                    if (o.onerror = o.onload = null, "load" === t.type) n();
                    else {
                      var i = t && ("load" === t.type ? "missing" : t.type),
                        s = t && t.target && t.target.href || r,
                        u = new Error("Loading CSS chunk " + e + " failed.\n(" + s + ")");
                      u.code = "CSS_CHUNK_LOAD_FAILED", u.type = i, u.request = s, o.parentNode && o.parentNode.removeChild(o), a(u)
                    }
                  }, o.href = r, document.head.appendChild(o)
                })(e, a, 0, r, t)
              })))(r).then((() => {
                e[r] = 0
              }), (t => {
                throw delete e[r], t
              })))
            }
          }
        })(), (() => {
          var e = {
            215: 0
          };
          f.f.j = (r, t) => {
            var n = f.o(e, r) ? e[r] : void 0;
            if (0 !== n)
              if (n) t.push(n[2]);
              else if (/^(542|711|749|932)$/.test(r)) e[r] = 0;
            else {
              var a = new Promise(((t, a) => n = e[r] = [t, a]));
              t.push(n[2] = a);
              var o = f.p + f.u(r),
                i = new Error;
              f.l(o, (t => {
                if (f.o(e, r) && (0 !== (n = e[r]) && (e[r] = void 0), n)) {
                  var a = t && ("load" === t.type ? "missing" : t.type),
                    o = t && t.target && t.target.src;
                  i.message = "Loading chunk " + r + " failed.\n(" + a + ": " + o + ")", i.name = "ChunkLoadError", i.type = a, i.request = o, n[1](i)
                }
              }), "chunk-" + r, r)
            }
          };
          var r = (r, t) => {
              var n, a, o = t[0],
                i = t[1],
                s = t[2],
                u = 0;
              if (o.some((r => 0 !== e[r]))) {
                for (n in i) f.o(i, n) && (f.m[n] = i[n]);
                s && s(f)
              }
              for (r && r(t); u < o.length; u++) a = o[u], f.o(e, a) && e[a] && e[a][0](), e[a] = 0
            },
            t = self.webpackChunk_rockstargames_components = self.webpackChunk_rockstargames_components || [];
          t.forEach(r.bind(null, 0)), t.push = r.bind(null, t.push.bind(t))
        })(), f(1308), f(8656)
      })())
    }
  }
}));
//# sourceMappingURL=remote-entry.js.map