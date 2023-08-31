System.register(["@rockstargames/graph-client", "@rockstargames/utils"], (function(e, r) {
  var t = {},
    n = {};
  return Object.defineProperty(t, "__esModule", {
    value: !0
  }), Object.defineProperty(n, "__esModule", {
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
    }],
    execute: function() {
      e((() => {
        var e, o, a, i, s = {
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
            422: (e, r, t) => {
              "use strict";
              var n = {
                  "./graph/policies": () => Promise.all([t.e(332), t.e(929), t.e(33)]).then((() => () => t(756))),
                  "./index": () => Promise.all([t.e(685), t.e(929), t.e(239)]).then((() => () => t(732))),
                  "./providers": () => Promise.all([t.e(685), t.e(929), t.e(239)]).then((() => () => t(59)))
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
            81: e => {
              "use strict";
              e.exports = t
            },
            369: e => {
              "use strict";
              e.exports = n
            }
          },
          u = {};

        function l(e) {
          var r = u[e];
          if (void 0 !== r) return r.exports;
          var t = u[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return s[e].call(t.exports, t, t.exports, l), t.loaded = !0, t.exports
        }
        return l.m = s, l.c = u, l.y = r, l.n = e => {
          var r = e && e.__esModule ? () => e.default : () => e;
          return l.d(r, {
            a: r
          }), r
        }, l.d = (e, r) => {
          for (var t in r) l.o(r, t) && !l.o(e, t) && Object.defineProperty(e, t, {
            enumerable: !0,
            get: r[t]
          })
        }, l.f = {}, l.e = e => Promise.all(Object.keys(l.f).reduce(((r, t) => (l.f[t](e, r), r)), [])), l.u = e => "js/" + {
          33: "f79f83886e6fb8fb7a5a",
          239: "4143a388cd732fa95dbb",
          252: "08a1541d283014f7d1d5",
          332: "5e1da703fd5b102f994d",
          685: "e75dec3ef4483af1e389",
          929: "b73f12c2b9f047694cc5"
        } [e] + ".js", l.miniCssF = e => "css/991fe3c91f4abffd0179.css", l.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), l.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r), e = {}, o = "@rockstargames/modules-core-sc-user:", l.l = (r, t, n, a) => {
          if (e[r]) e[r].push(t);
          else {
            var i, s;
            if (void 0 !== n)
              for (var u = document.getElementsByTagName("script"), c = 0; c < u.length; c++) {
                var f = u[c];
                if (f.getAttribute("src") == r || f.getAttribute("data-webpack") == o + n) {
                  i = f;
                  break
                }
              }
            i || (s = !0, (i = document.createElement("script")).charset = "utf-8", i.timeout = 120, l.nc && i.setAttribute("nonce", l.nc), i.setAttribute("data-webpack", o + n), i.src = r), e[r] = [t];
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
        }, l.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, l.nmd = e => (e.paths = [], e.children || (e.children = []), e), a = {
          239: [331, 859],
          929: [929]
        }, i = {
          331: ["default", "./gtm", 369],
          859: ["default", "./index", 81],
          929: ["default", "./index", 369]
        }, l.f.remotes = (e, r) => {
          l.o(a, e) && a[e].forEach((e => {
            var t = l.R;
            t || (t = []);
            var n = i[e];
            if (!(t.indexOf(n) >= 0)) {
              if (t.push(n), n.p) return r.push(n.p);
              var o = r => {
                  r || (r = new Error("Container missing")), "string" == typeof r.message && (r.message += '\nwhile loading "' + n[1] + '" from ' + n[2]), l.m[e] = () => {
                    throw r
                  }, n.p = 0
                },
                a = (e, t, a, i, s, u) => {
                  try {
                    var l = e(t, a);
                    if (!l || !l.then) return s(l, i, u);
                    var c = l.then((e => s(e, i)), o);
                    if (!u) return c;
                    r.push(n.p = c)
                  } catch (e) {
                    o(e)
                  }
                },
                s = (e, r, o) => a(r.get, n[1], t, 0, u, o),
                u = r => {
                  n.p = 1, l.m[e] = e => {
                    e.exports = r()
                  }
                };
              a(l, n[2], 0, 0, ((e, r, t) => e ? a(l.I, n[0], 0, e, s, t) : o()), 1)
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
                i = "@rockstargames/modules-core-sc-user",
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
              })("react", "18.2.0"), s(369), s(81)), u.length ? e[t] = Promise.all(u).then((() => e[t] = 1)) : e[t] = 1
            }
          }
        })(), (() => {
          var e;
          l.g.importScripts && (e = l.g.location + "");
          var r = l.g.document;
          if (!e && r && (r.currentScript && (e = r.currentScript.src), !e)) {
            var t = r.getElementsByTagName("script");
            if (t.length)
              for (var n = t.length - 1; n > -1 && !e;) e = t[n--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), l.p = e
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
                  var l, c, f = s < t.length ? (typeof t[s])[0] : "";
                  if (i >= n.length || "o" == (c = (typeof(l = n[i]))[0])) return !u || ("u" == f ? s > o && !a : "" == f != a);
                  if ("u" == c) {
                    if (!u || "u" != f) return !1
                  } else if (u)
                    if (f == c)
                      if (s <= o) {
                        if (l != t[s]) return !1
                      } else {
                        if (a ? l > t[s] : l < t[s]) return !1;
                        l != t[s] && (u = !1)
                      }
                  else if ("s" != f && "n" != f) {
                    if (a || s <= o) return !1;
                    u = !1, s--
                  } else {
                    if (s <= o || c < f != a) return !1;
                    u = !1
                  } else "s" != f && "n" != f && (u = !1, s--)
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
              239: [932]
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
              791: 0
            };
            l.f.miniCss = (r, t) => {
              e[r] ? t.push(e[r]) : 0 !== e[r] && {
                239: 1
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
            791: 0
          };
          l.f.j = (r, t) => {
            var n = l.o(e, r) ? e[r] : void 0;
            if (0 !== n)
              if (n) t.push(n[2]);
              else if (929 != r) {
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
            } else e[r] = 0
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
            t = self.webpackChunk_rockstargames_modules_core_sc_user = self.webpackChunk_rockstargames_modules_core_sc_user || [];
          t.forEach(r.bind(null, 0)), t.push = r.bind(null, t.push.bind(t))
        })(), l(308), l(422)
      })())
    }
  }
}));