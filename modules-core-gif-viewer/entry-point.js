System.register(["@rockstargames/components", "@rockstargames/graph-client", "@rockstargames/tina"], (function(e, r) {
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
        var e, a, i, s, u = {
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
            749: (e, r, t) => {
              "use strict";
              var n = {
                  "./index": () => Promise.all([t.e(932), t.e(859), t.e(248)]).then((() => () => t(248))),
                  "./lazy": () => Promise.all([t.e(932), t.e(859), t.e(182)]).then((() => () => t(182))),
                  "./tinaBlockTemplates": () => Promise.all([t.e(932), t.e(859), t.e(215)]).then((() => () => t(215))),
                  "./tina": () => Promise.all([t.e(932), t.e(859), t.e(215)]).then((() => () => t(215)))
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
            559: e => {
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
          return u[e](t, t.exports, f), t.exports
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
          182: "b8cd7b96ac18bb63264c",
          215: "0947186146e0f4783014",
          248: "d15636bb0497c28998f2",
          252: "c8f83a9d436318076953",
          528: "3219d59fd678d2e1e7fb",
          859: "8138c0838b6d63535b79",
          932: "fe660ac2529756c9938d"
        } [e] + ".js", f.miniCssF = e => "css/" + {
          182: "232943d98420a9ab46de",
          248: "ab137fa062082e67f260"
        } [e] + ".css", f.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r), e = {}, a = "@rockstargames/modules-core-gif-viewer:", f.l = (r, t, n, o) => {
          if (e[r]) e[r].push(t);
          else {
            var i, s;
            if (void 0 !== n)
              for (var u = document.getElementsByTagName("script"), l = 0; l < u.length; l++) {
                var c = u[l];
                if (c.getAttribute("src") == r || c.getAttribute("data-webpack") == a + n) {
                  i = c;
                  break
                }
              }
            i || (s = !0, (i = document.createElement("script")).charset = "utf-8", i.timeout = 120, f.nc && i.setAttribute("nonce", f.nc), i.setAttribute("data-webpack", a + n), i.src = r), e[r] = [t];
            var d = (t, n) => {
                i.onerror = i.onload = null, clearTimeout(h);
                var o = e[r];
                if (delete e[r], i.parentNode && i.parentNode.removeChild(i), o && o.forEach((e => e(n))), t) return t(n)
              },
              h = setTimeout(d.bind(null, void 0, {
                type: "timeout",
                target: i
              }), 12e4);
            i.onerror = d.bind(null, i.onerror), i.onload = d.bind(null, i.onload), s && document.head.appendChild(i)
          }
        }, f.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, i = {
          215: [374, 616, 976],
          859: [859]
        }, s = {
          374: ["default", "./ui", 559],
          616: ["default", "./properties", 559],
          859: ["default", "./index", 81],
          976: ["default", "./index", 286]
        }, f.f.remotes = (e, r) => {
          f.o(i, e) && i[e].forEach((e => {
            var t = f.R;
            t || (t = []);
            var n = s[e];
            if (!(t.indexOf(n) >= 0)) {
              if (t.push(n), n.p) return r.push(n.p);
              var o = r => {
                  r || (r = new Error("Container missing")), "string" == typeof r.message && (r.message += '\nwhile loading "' + n[1] + '" from ' + n[2]), f.m[e] = () => {
                    throw r
                  }, n.p = 0
                },
                a = (e, t, a, i, s, u) => {
                  try {
                    var l = e(t, a);
                    if (!l || !l.then) return s(l, i, u);
                    var f = l.then((e => s(e, i)), o);
                    if (!u) return f;
                    r.push(n.p = f)
                  } catch (e) {
                    o(e)
                  }
                },
                i = (e, r, o) => a(r.get, n[1], t, 0, u, o),
                u = r => {
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
                i = "@rockstargames/modules-core-gif-viewer",
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
                    if (o.then) return l.push(o.then(a, r));
                    var i = a(o);
                    if (i && i.then) return l.push(i.catch(r))
                  } catch (e) {
                    r(e)
                  }
                },
                l = [];
              return "default" === t && (s("react-router-dom", "6.11.2", (() => Promise.all([f.e(528), f.e(932)]).then((() => () => f(528))))), s("react", "18.2.0", (() => f.e(252).then((() => () => f(252))))), u(81), u(286), u(559)), l.length ? e[t] = Promise.all(l).then((() => e[t] = 1)) : e[t] = 1
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
                for (var i = 0, s = 1, u = !0;; s++, i++) {
                  var l, f, c = s < t.length ? (typeof t[s])[0] : "";
                  if (i >= n.length || "o" == (f = (typeof(l = n[i]))[0])) return !u || ("u" == c ? s > o && !a : "" == c != a);
                  if ("u" == f) {
                    if (!u || "u" != c) return !1
                  } else if (u)
                    if (c == f)
                      if (s <= o) {
                        if (l != t[s]) return !1
                      } else {
                        if (a ? l > t[s] : l < t[s]) return !1;
                        l != t[s] && (u = !1)
                      }
                  else if ("s" != c && "n" != c) {
                    if (a || s <= o) return !1;
                    u = !1, s--
                  } else {
                    if (s <= o || f < c != a) return !1;
                    u = !1
                  } else "s" != c && "n" != c && (u = !1, s--)
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
              var a = f.I(r);
              return a && a.then ? a.then(e.bind(e, r, f.S[r], t, n, o)) : e(r, f.S[r], t, n, o)
            })(((e, r, n, o, a) => {
              var i = r && f.o(r, n) && t(r, n, o);
              return i ? (e => (e.loaded = 1, e.get()))(i) : a()
            })),
            o = {},
            a = {
              932: () => n("default", "react", [1, 18, 2, 0], (() => f.e(252).then((() => () => f(252))))),
              455: () => n("default", "react-router-dom", [1, 6, 11, 2], (() => f.e(528).then((() => () => f(528)))))
            },
            i = {
              182: [455],
              932: [932]
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
              560: 0
            };
            f.f.miniCss = (r, t) => {
              e[r] ? t.push(e[r]) : 0 !== e[r] && {
                182: 1,
                248: 1
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
            560: 0
          };
          f.f.j = (r, t) => {
            var n = f.o(e, r) ? e[r] : void 0;
            if (0 !== n)
              if (n) t.push(n[2]);
              else if (/^(859|932)$/.test(r)) e[r] = 0;
            else {
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
            }
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
            t = self.webpackChunk_rockstargames_modules_core_gif_viewer = self.webpackChunk_rockstargames_modules_core_gif_viewer || [];
          t.forEach(r.bind(null, 0)), t.push = r.bind(null, t.push.bind(t))
        })(), f(308), f(749)
      })())
    }
  }
}));