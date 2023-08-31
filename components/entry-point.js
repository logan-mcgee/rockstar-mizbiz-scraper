System.register(["@rockstargames/graph-client", "@rockstargames/intl", "@rockstargames/modules-core-sc-user", "@rockstargames/tina", "@rockstargames/utils"], (function(e, t) {
  var r = {},
    n = {},
    a = {},
    o = {},
    i = {};
  return Object.defineProperty(r, "__esModule", {
    value: !0
  }), Object.defineProperty(n, "__esModule", {
    value: !0
  }), Object.defineProperty(a, "__esModule", {
    value: !0
  }), Object.defineProperty(o, "__esModule", {
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
        a[t] = e[t]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(t) {
        o[t] = e[t]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(t) {
        i[t] = e[t]
      }))
    }],
    execute: function() {
      e((() => {
        var e, s, u, c, f = {
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
                for (var n = "/" === r.pathname[0] ? r.pathname : "/" + r.pathname, a = 0, o = n.length; a !== t && o >= 0;) "/" === n[--o] && a++;
                if (a !== t) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + t + ") is greater than the number of directories (" + a + ") in the URL path " + e);
                var i = n.slice(0, o + 1);
                return r.protocol + "//" + r.host + i
              };
              Number.isInteger
            },
            8656: (e, t, r) => {
              "use strict";
              var n = {
                  "./index": () => Promise.all([r.e(235), r.e(205), r.e(856), r.e(932), r.e(542), r.e(813), r.e(711), r.e(154)]).then((() => () => r(6154))),
                  "./providers": () => Promise.all([r.e(235), r.e(932), r.e(542), r.e(711), r.e(515)]).then((() => () => r(7515))),
                  "./tinaBlockTemplates": () => Promise.all([r.e(205), r.e(932), r.e(542), r.e(813), r.e(121)]).then((() => () => r(4121)))
                },
                a = (e, t) => (r.R = t, t = r.o(n, e) ? n[e]() : Promise.resolve().then((() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                })), r.R = void 0, t),
                o = (e, t) => {
                  if (r.S) {
                    var n = "default",
                      a = r.S[n];
                    if (a && a !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return r.S[n] = e, r.I(n, t)
                  }
                };
              r.d(t, {
                get: () => a,
                init: () => o
              })
            },
            5081: e => {
              "use strict";
              e.exports = r
            },
            5016: e => {
              "use strict";
              e.exports = n
            },
            4031: e => {
              "use strict";
              e.exports = a
            },
            7559: e => {
              "use strict";
              e.exports = o
            },
            2369: e => {
              "use strict";
              e.exports = i
            }
          },
          l = {};

        function d(e) {
          var t = l[e];
          if (void 0 !== t) return t.exports;
          var r = l[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return f[e].call(r.exports, r, r.exports, d), r.loaded = !0, r.exports
        }
        return d.m = f, d.c = l, d.y = t, d.amdO = {}, d.n = e => {
          var t = e && e.__esModule ? () => e.default : () => e;
          return d.d(t, {
            a: t
          }), t
        }, d.d = (e, t) => {
          for (var r in t) d.o(t, r) && !d.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: t[r]
          })
        }, d.f = {}, d.e = e => Promise.all(Object.keys(d.f).reduce(((t, r) => (d.f[r](e, t), t)), [])), d.u = e => "js/" + {
          121: "b960df6f3e40fe91586e",
          154: "4d6437aa74d3ac7c2dac",
          205: "522fa8350f686e3e5365",
          235: "3fd4c7aca7a48d2f52ca",
          252: "e7074c0a03dd506b1e19",
          334: "d4fc94f1f289e3f0ab1b",
          515: "d03b8b099a297653cbe8",
          542: "622bae699c0617d133ce",
          711: "516d8d1a94bc38afeb5f",
          813: "ac1b4108051e65f61c6b",
          856: "5210e383c4aaca92ff82",
          932: "53578ef7882b4ae2c780"
        } [e] + ".js", d.miniCssF = e => "css/" + {
          121: "b9787ae5811d61f8fc9a",
          154: "a6e094a8efb755676615",
          515: "fdb16160018f7640168c"
        } [e] + ".css", d.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), d.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), e = {}, s = "@rockstargames/components:", d.l = (t, r, n, a) => {
          if (e[t]) e[t].push(r);
          else {
            var o, i;
            if (void 0 !== n)
              for (var u = document.getElementsByTagName("script"), c = 0; c < u.length; c++) {
                var f = u[c];
                if (f.getAttribute("src") == t || f.getAttribute("data-webpack") == s + n) {
                  o = f;
                  break
                }
              }
            o || (i = !0, (o = document.createElement("script")).charset = "utf-8", o.timeout = 120, d.nc && o.setAttribute("nonce", d.nc), o.setAttribute("data-webpack", s + n), o.src = t), e[t] = [r];
            var l = (r, n) => {
                o.onerror = o.onload = null, clearTimeout(p);
                var a = e[t];
                if (delete e[t], o.parentNode && o.parentNode.removeChild(o), a && a.forEach((e => e(n))), r) return r(n)
              },
              p = setTimeout(l.bind(null, void 0, {
                type: "timeout",
                target: o
              }), 12e4);
            o.onerror = l.bind(null, o.onerror), o.onload = l.bind(null, o.onload), i && document.head.appendChild(o)
          }
        }, d.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, d.nmd = e => (e.paths = [], e.children || (e.children = []), e), u = {
          121: [3374, 3616, 5607],
          154: [1570, 2324, 3761, 6077, 9349],
          542: [9542],
          711: [6711],
          813: [4859, 559, 9929]
        }, c = {
          559: ["default", "./helpers/uploads", 7559],
          1570: ["default", "./index", 5016],
          2324: ["default", "./helpers", 7559],
          3374: ["default", "./ui", 7559],
          3616: ["default", "./properties", 7559],
          3761: ["default", "./operations/queries", 5081],
          4859: ["default", "./index", 5081],
          5607: ["default", "./functions", 2369],
          6077: ["default", "./operations/fragments/newswire-post.graphql", 5081],
          6711: ["default", "./index", 4031],
          9349: ["default", "./operations/fragments/paging.graphql", 5081],
          9542: ["default", "./index", 7559],
          9929: ["default", "./index", 2369]
        }, d.f.remotes = (e, t) => {
          d.o(u, e) && u[e].forEach((e => {
            var r = d.R;
            r || (r = []);
            var n = c[e];
            if (!(r.indexOf(n) >= 0)) {
              if (r.push(n), n.p) return t.push(n.p);
              var a = t => {
                  t || (t = new Error("Container missing")), "string" == typeof t.message && (t.message += '\nwhile loading "' + n[1] + '" from ' + n[2]), d.m[e] = () => {
                    throw t
                  }, n.p = 0
                },
                o = (e, r, o, i, s, u) => {
                  try {
                    var c = e(r, o);
                    if (!c || !c.then) return s(c, i, u);
                    var f = c.then((e => s(e, i)), a);
                    if (!u) return f;
                    t.push(n.p = f)
                  } catch (e) {
                    a(e)
                  }
                },
                i = (e, t, a) => o(t.get, n[1], r, 0, s, a),
                s = t => {
                  n.p = 1, d.m[e] = e => {
                    e.exports = t()
                  }
                };
              o(d, n[2], 0, 0, ((e, t, r) => e ? o(d.I, n[0], 0, e, i, r) : a()), 1)
            }
          }))
        }, (() => {
          d.S = {};
          var e = {},
            t = {};
          d.I = (r, n) => {
            n || (n = []);
            var a = t[r];
            if (a || (a = t[r] = {}), !(n.indexOf(a) >= 0)) {
              if (n.push(a), e[r]) return e[r];
              d.o(d.S, r) || (d.S[r] = {});
              var o = d.S[r],
                i = "@rockstargames/components",
                s = (e, t, r, n) => {
                  var a = o[e] = o[e] || {},
                    s = a[t];
                  (!s || !s.loaded && (!n != !s.eager ? n : i > s.from)) && (a[t] = {
                    get: r,
                    from: i,
                    eager: !!n
                  })
                },
                u = e => {
                  var t = e => {
                    return t = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(t));
                    var t
                  };
                  try {
                    var a = d(e);
                    if (!a) return;
                    var o = e => e && e.init && e.init(d.S[r], n);
                    if (a.then) return c.push(a.then(o, t));
                    var i = o(a);
                    if (i && i.then) return c.push(i.catch(t))
                  } catch (e) {
                    t(e)
                  }
                },
                c = [];
              return "default" === r && (s("react-router-dom", "6.11.2", (() => Promise.all([d.e(334), d.e(932)]).then((() => () => d(5334))))), s("react", "18.2.0", (() => d.e(252).then((() => () => d(8252))))), u(7559), u(5081), u(2369), u(4031), u(5016)), c.length ? e[r] = Promise.all(c).then((() => e[r] = 1)) : e[r] = 1
            }
          }
        })(), (() => {
          var e;
          d.g.importScripts && (e = d.g.location + "");
          var t = d.g.document;
          if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
            var r = t.getElementsByTagName("script");
            if (r.length)
              for (var n = r.length - 1; n > -1 && !e;) e = r[n--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), d.p = e
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
                var a = r[0],
                  o = a < 0;
                o && (a = -a - 1);
                for (var i = 0, s = 1, u = !0;; s++, i++) {
                  var c, f, l = s < r.length ? (typeof r[s])[0] : "";
                  if (i >= n.length || "o" == (f = (typeof(c = n[i]))[0])) return !u || ("u" == l ? s > a && !o : "" == l != o);
                  if ("u" == f) {
                    if (!u || "u" != l) return !1
                  } else if (u)
                    if (l == f)
                      if (s <= a) {
                        if (c != r[s]) return !1
                      } else {
                        if (o ? c > r[s] : c < r[s]) return !1;
                        c != r[s] && (u = !1)
                      }
                  else if ("s" != l && "n" != l) {
                    if (o || s <= a) return !1;
                    u = !1, s--
                  } else {
                    if (s <= a || f < l != o) return !1;
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
            r = (r, n, a) => {
              var o = r[n];
              return (n = Object.keys(o).reduce(((r, n) => !t(a, n) || r && !((t, r) => {
                t = e(t), r = e(r);
                for (var n = 0;;) {
                  if (n >= t.length) return n < r.length && "u" != (typeof r[n])[0];
                  var a = t[n],
                    o = (typeof a)[0];
                  if (n >= r.length) return "u" == o;
                  var i = r[n],
                    s = (typeof i)[0];
                  if (o != s) return "o" == o && "n" == s || "s" == s || "u" == o;
                  if ("o" != o && "u" != o && a != i) return a < i;
                  n++
                }
              })(r, n) ? r : n), 0)) && o[n]
            },
            n = (e => function(t, r, n, a) {
              var o = d.I(t);
              return o && o.then ? o.then(e.bind(e, t, d.S[t], r, n, a)) : e(t, d.S[t], r, n, a)
            })(((e, t, n, a, o) => {
              var i = t && d.o(t, n) && r(t, n, a);
              return i ? (e => (e.loaded = 1, e.get()))(i) : o()
            })),
            a = {},
            o = {
              4932: () => n("default", "react", [1, 18, 2, 0], (() => d.e(252).then((() => () => d(8252))))),
              1424: () => n("default", "react-router-dom", [1, 6, 11, 2], (() => d.e(334).then((() => () => d(5334)))))
            },
            i = {
              154: [1424],
              932: [4932]
            };
          d.f.consumes = (e, t) => {
            d.o(i, e) && i[e].forEach((e => {
              if (d.o(a, e)) return t.push(a[e]);
              var r = t => {
                  a[e] = 0, d.m[e] = r => {
                    delete d.c[e], r.exports = t()
                  }
                },
                n = t => {
                  delete a[e], d.m[e] = r => {
                    throw delete d.c[e], t
                  }
                };
              try {
                var i = o[e]();
                i.then ? t.push(a[e] = i.then(r).catch(n)) : r(i)
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
            d.f.miniCss = (t, r) => {
              e[t] ? r.push(e[t]) : 0 !== e[t] && {
                121: 1,
                154: 1,
                515: 1
              } [t] && r.push(e[t] = (e => new Promise(((t, r) => {
                var n = d.miniCssF(e),
                  a = d.p + n;
                if (((e, t) => {
                    for (var r = document.getElementsByTagName("link"), n = 0; n < r.length; n++) {
                      var a = (i = r[n]).getAttribute("data-href") || i.getAttribute("href");
                      if ("stylesheet" === i.rel && (a === e || a === t)) return i
                    }
                    var o = document.getElementsByTagName("style");
                    for (n = 0; n < o.length; n++) {
                      var i;
                      if ((a = (i = o[n]).getAttribute("data-href")) === e || a === t) return i
                    }
                  })(n, a)) return t();
                ((e, t, r, n, a) => {
                  var o = document.createElement("link");
                  o.rel = "stylesheet", o.type = "text/css", o.onerror = o.onload = r => {
                    if (o.onerror = o.onload = null, "load" === r.type) n();
                    else {
                      var i = r && ("load" === r.type ? "missing" : r.type),
                        s = r && r.target && r.target.href || t,
                        u = new Error("Loading CSS chunk " + e + " failed.\n(" + s + ")");
                      u.code = "CSS_CHUNK_LOAD_FAILED", u.type = i, u.request = s, o.parentNode && o.parentNode.removeChild(o), a(u)
                    }
                  }, o.href = t, document.head.appendChild(o)
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
            215: 0
          };
          d.f.j = (t, r) => {
            var n = d.o(e, t) ? e[t] : void 0;
            if (0 !== n)
              if (n) r.push(n[2]);
              else if (/^(542|711|813|932)$/.test(t)) e[t] = 0;
            else {
              var a = new Promise(((r, a) => n = e[t] = [r, a]));
              r.push(n[2] = a);
              var o = d.p + d.u(t),
                i = new Error;
              d.l(o, (r => {
                if (d.o(e, t) && (0 !== (n = e[t]) && (e[t] = void 0), n)) {
                  var a = r && ("load" === r.type ? "missing" : r.type),
                    o = r && r.target && r.target.src;
                  i.message = "Loading chunk " + t + " failed.\n(" + a + ": " + o + ")", i.name = "ChunkLoadError", i.type = a, i.request = o, n[1](i)
                }
              }), "chunk-" + t, t)
            }
          };
          var t = (t, r) => {
              var n, a, o = r[0],
                i = r[1],
                s = r[2],
                u = 0;
              if (o.some((t => 0 !== e[t]))) {
                for (n in i) d.o(i, n) && (d.m[n] = i[n]);
                s && s(d)
              }
              for (t && t(r); u < o.length; u++) a = o[u], d.o(e, a) && e[a] && e[a][0](), e[a] = 0
            },
            r = self.webpackChunk_rockstargames_components = self.webpackChunk_rockstargames_components || [];
          r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
        })(), d(1308), d(8656)
      })())
    }
  }
}));