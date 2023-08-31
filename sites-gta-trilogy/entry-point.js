System.register(["@rockstargames/components", "@rockstargames/modules-core-videoplayer", "@rockstargames/tina", "@rockstargames/utils"], (function(e, r) {
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
                for (var n = "/" === t.pathname[0] ? t.pathname : "/" + t.pathname, o = 0, a = n.length; o !== r && a >= 0;) "/" === n[--a] && o++;
                if (o !== r) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + r + ") is greater than the number of directories (" + o + ") in the URL path " + e);
                var i = n.slice(0, a + 1);
                return t.protocol + "//" + t.host + i
              };
              Number.isInteger
            },
            3288: (e, r, t) => {
              "use strict";
              var n = {
                  "./index": () => Promise.all([t.e(424), t.e(932), t.e(916)]).then((() => () => t(9916)))
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
            7124: e => {
              "use strict";
              e.exports = n
            },
            7559: e => {
              "use strict";
              e.exports = o
            },
            2369: e => {
              "use strict";
              e.exports = a
            }
          },
          f = {};

        function c(e) {
          var r = f[e];
          if (void 0 !== r) return r.exports;
          var t = f[e] = {
            exports: {}
          };
          return l[e](t, t.exports, c), t.exports
        }
        return c.m = l, c.c = f, c.y = r, c.n = e => {
          var r = e && e.__esModule ? () => e.default : () => e;
          return c.d(r, {
            a: r
          }), r
        }, c.d = (e, r) => {
          for (var t in r) c.o(r, t) && !c.o(e, t) && Object.defineProperty(e, t, {
            enumerable: !0,
            get: r[t]
          })
        }, c.f = {}, c.e = e => Promise.all(Object.keys(c.f).reduce(((r, t) => (c.f[t](e, r), r)), [])), c.u = e => "js/" + {
          252: "d54d23f3ed6faf12601e",
          424: "6d1928de6d699c810e6f",
          528: "0a514f3bf864f669534b",
          916: "190bdf22fc6873c1d27f",
          932: "5621301b05bb92956fcc"
        } [e] + ".js", c.miniCssF = e => "css/7cf61368207ea3841e52.css", c.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r), e = {}, i = "@rockstargames/sites-gta-trilogy:", c.l = (r, t, n, o) => {
          if (e[r]) e[r].push(t);
          else {
            var a, s;
            if (void 0 !== n)
              for (var u = document.getElementsByTagName("script"), l = 0; l < u.length; l++) {
                var f = u[l];
                if (f.getAttribute("src") == r || f.getAttribute("data-webpack") == i + n) {
                  a = f;
                  break
                }
              }
            a || (s = !0, (a = document.createElement("script")).charset = "utf-8", a.timeout = 120, c.nc && a.setAttribute("nonce", c.nc), a.setAttribute("data-webpack", i + n), a.src = r), e[r] = [t];
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
        }, c.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, s = {
          916: [2324, 4224, 8976, 9929]
        }, u = {
          2324: ["default", "./helpers", 7559],
          4224: ["default", "./index", 7124],
          8976: ["default", "./index", 5286],
          9929: ["default", "./index", 2369]
        }, c.f.remotes = (e, r) => {
          c.o(s, e) && s[e].forEach((e => {
            var t = c.R;
            t || (t = []);
            var n = u[e];
            if (!(t.indexOf(n) >= 0)) {
              if (t.push(n), n.p) return r.push(n.p);
              var o = r => {
                  r || (r = new Error("Container missing")), "string" == typeof r.message && (r.message += '\nwhile loading "' + n[1] + '" from ' + n[2]), c.m[e] = () => {
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
                i = (e, r, o) => a(r.get, n[1], t, 0, s, o),
                s = r => {
                  n.p = 1, c.m[e] = e => {
                    e.exports = r()
                  }
                };
              a(c, n[2], 0, 0, ((e, r, t) => e ? a(c.I, n[0], 0, e, i, t) : o()), 1)
            }
          }))
        }, (() => {
          c.S = {};
          var e = {},
            r = {};
          c.I = (t, n) => {
            n || (n = []);
            var o = r[t];
            if (o || (o = r[t] = {}), !(n.indexOf(o) >= 0)) {
              if (n.push(o), e[t]) return e[t];
              c.o(c.S, t) || (c.S[t] = {});
              var a = c.S[t],
                i = "@rockstargames/sites-gta-trilogy",
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
                    var o = c(e);
                    if (!o) return;
                    var a = e => e && e.init && e.init(c.S[t], n);
                    if (o.then) return l.push(o.then(a, r));
                    var i = a(o);
                    if (i && i.then) return l.push(i.catch(r))
                  } catch (e) {
                    r(e)
                  }
                },
                l = [];
              return "default" === t && (s("react-router-dom", "6.11.2", (() => Promise.all([c.e(528), c.e(932)]).then((() => () => c(4528))))), s("react", "18.2.0", (() => c.e(252).then((() => () => c(8252))))), u(5286), u(7124), u(7559), u(2369)), l.length ? e[t] = Promise.all(l).then((() => e[t] = 1)) : e[t] = 1
            }
          }
        })(), c.p = "", (() => {
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
              var a = c.I(r);
              return a && a.then ? a.then(e.bind(e, r, c.S[r], t, n, o)) : e(r, c.S[r], t, n, o)
            })(((e, r, n, o, a) => {
              var i = r && c.o(r, n) && t(r, n, o);
              return i ? (e => (e.loaded = 1, e.get()))(i) : a()
            })),
            o = {},
            a = {
              4932: () => n("default", "react", [1, 18, 2, 0], (() => c.e(252).then((() => () => c(8252))))),
              7455: () => n("default", "react-router-dom", [1, 6, 11, 2], (() => c.e(528).then((() => () => c(4528)))))
            },
            i = {
              916: [7455],
              932: [4932]
            };
          c.f.consumes = (e, r) => {
            c.o(i, e) && i[e].forEach((e => {
              if (c.o(o, e)) return r.push(o[e]);
              var t = r => {
                  o[e] = 0, c.m[e] = t => {
                    delete c.c[e], t.exports = r()
                  }
                },
                n = r => {
                  delete o[e], c.m[e] = t => {
                    throw delete c.c[e], r
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
              644: 0
            };
            c.f.miniCss = (r, t) => {
              e[r] ? t.push(e[r]) : 0 !== e[r] && {
                916: 1
              } [r] && t.push(e[r] = (e => new Promise(((r, t) => {
                var n = c.miniCssF(e),
                  o = c.p + n;
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
            644: 0
          };
          c.f.j = (r, t) => {
            var n = c.o(e, r) ? e[r] : void 0;
            if (0 !== n)
              if (n) t.push(n[2]);
              else if (932 != r) {
              var o = new Promise(((t, o) => n = e[r] = [t, o]));
              t.push(n[2] = o);
              var a = c.p + c.u(r),
                i = new Error;
              c.l(a, (t => {
                if (c.o(e, r) && (0 !== (n = e[r]) && (e[r] = void 0), n)) {
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
                for (n in i) c.o(i, n) && (c.m[n] = i[n]);
                s && s(c)
              }
              for (r && r(t); u < a.length; u++) o = a[u], c.o(e, o) && e[o] && e[o][0](), e[o] = 0
            },
            t = self.webpackChunk_rockstargames_sites_gta_trilogy = self.webpackChunk_rockstargames_sites_gta_trilogy || [];
          t.forEach(r.bind(null, 0)), t.push = r.bind(null, t.push.bind(t))
        })(), c(1308), c(3288)
      })())
    }
  }
}));