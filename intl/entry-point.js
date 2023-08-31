System.register(["@rockstargames/utils"], (function(e, r) {
  var t = {};
  return Object.defineProperty(t, "__esModule", {
    value: !0
  }), {
    setters: [function(e) {
      Object.keys(e).forEach((function(r) {
        t[r] = e[r]
      }))
    }],
    execute: function() {
      e((() => {
        var e, n, o, a, i = {
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
                  "./index": () => Promise.all([t.e(742), t.e(63)]).then((() => () => t(63)))
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
            369: e => {
              "use strict";
              e.exports = t
            }
          },
          s = {};

        function u(e) {
          var r = s[e];
          if (void 0 !== r) return r.exports;
          var t = s[e] = {
            exports: {}
          };
          return i[e](t, t.exports, u), t.exports
        }
        return u.m = i, u.c = s, u.y = r, u.n = e => {
          var r = e && e.__esModule ? () => e.default : () => e;
          return u.d(r, {
            a: r
          }), r
        }, u.d = (e, r) => {
          for (var t in r) u.o(r, t) && !u.o(e, t) && Object.defineProperty(e, t, {
            enumerable: !0,
            get: r[t]
          })
        }, u.f = {}, u.e = e => Promise.all(Object.keys(u.f).reduce(((r, t) => (u.f[t](e, r), r)), [])), u.u = e => "js/" + {
          63: "fe3bef89b84f2d7e3962",
          252: "6716ace7863b42c34f4b",
          742: "907200518539520f6d01"
        } [e] + ".js", u.miniCssF = e => {}, u.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), u.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r), e = {}, n = "@rockstargames/intl:", u.l = (r, t, o, a) => {
          if (e[r]) e[r].push(t);
          else {
            var i, s;
            if (void 0 !== o)
              for (var l = document.getElementsByTagName("script"), c = 0; c < l.length; c++) {
                var f = l[c];
                if (f.getAttribute("src") == r || f.getAttribute("data-webpack") == n + o) {
                  i = f;
                  break
                }
              }
            i || (s = !0, (i = document.createElement("script")).charset = "utf-8", i.timeout = 120, u.nc && i.setAttribute("nonce", u.nc), i.setAttribute("data-webpack", n + o), i.src = r), e[r] = [t];
            var p = (t, n) => {
                i.onerror = i.onload = null, clearTimeout(h);
                var o = e[r];
                if (delete e[r], i.parentNode && i.parentNode.removeChild(i), o && o.forEach((e => e(n))), t) return t(n)
              },
              h = setTimeout(p.bind(null, void 0, {
                type: "timeout",
                target: i
              }), 12e4);
            i.onerror = p.bind(null, i.onerror), i.onload = p.bind(null, i.onload), s && document.head.appendChild(i)
          }
        }, u.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, o = {
          63: [657]
        }, a = {
          657: ["default", "./hooks", 369]
        }, u.f.remotes = (e, r) => {
          u.o(o, e) && o[e].forEach((e => {
            var t = u.R;
            t || (t = []);
            var n = a[e];
            if (!(t.indexOf(n) >= 0)) {
              if (t.push(n), n.p) return r.push(n.p);
              var o = r => {
                  r || (r = new Error("Container missing")), "string" == typeof r.message && (r.message += '\nwhile loading "' + n[1] + '" from ' + n[2]), u.m[e] = () => {
                    throw r
                  }, n.p = 0
                },
                i = (e, t, a, i, s, u) => {
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
                s = (e, r, o) => i(r.get, n[1], t, 0, l, o),
                l = r => {
                  n.p = 1, u.m[e] = e => {
                    e.exports = r()
                  }
                };
              i(u, n[2], 0, 0, ((e, r, t) => e ? i(u.I, n[0], 0, e, s, t) : o()), 1)
            }
          }))
        }, (() => {
          u.S = {};
          var e = {},
            r = {};
          u.I = (t, n) => {
            n || (n = []);
            var o = r[t];
            if (o || (o = r[t] = {}), !(n.indexOf(o) >= 0)) {
              if (n.push(o), e[t]) return e[t];
              u.o(u.S, t) || (u.S[t] = {});
              var a = u.S[t],
                i = "@rockstargames/intl",
                s = [];
              return "default" === t && (((e, r, t, n) => {
                var o = a[e] = a[e] || {},
                  s = o[r];
                (!s || !s.loaded && (1 != !s.eager ? n : i > s.from)) && (o[r] = {
                  get: () => u.e(252).then((() => () => u(252))),
                  from: i,
                  eager: !1
                })
              })("react", "18.2.0"), (e => {
                var r = e => {
                  return r = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(r));
                  var r
                };
                try {
                  var o = u(369);
                  if (!o) return;
                  var a = e => e && e.init && e.init(u.S[t], n);
                  if (o.then) return s.push(o.then(a, r));
                  var i = a(o);
                  if (i && i.then) return s.push(i.catch(r))
                } catch (e) {
                  r(e)
                }
              })()), s.length ? e[t] = Promise.all(s).then((() => e[t] = 1)) : e[t] = 1
            }
          }
        })(), (() => {
          var e;
          u.g.importScripts && (e = u.g.location + "");
          var r = u.g.document;
          if (!e && r && (r.currentScript && (e = r.currentScript.src), !e)) {
            var t = r.getElementsByTagName("script");
            if (t.length)
              for (var n = t.length - 1; n > -1 && !e;) e = t[n--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), u.p = e
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
              var p = [],
                h = p.pop.bind(p);
              for (i = 1; i < t.length; i++) {
                var d = t[i];
                p.push(1 == d ? h() | h() : 2 == d ? h() & h() : d ? r(d, n) : !h())
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
              var a = u.I(r);
              return a && a.then ? a.then(e.bind(e, r, u.S[r], t, n, o)) : e(r, u.S[r], t, n, o)
            })(((e, r, n, o, a) => {
              var i = r && u.o(r, n) && t(r, n, o);
              return i ? (e => (e.loaded = 1, e.get()))(i) : a()
            })),
            o = {},
            a = {
              932: () => n("default", "react", [1, 18, 2, 0], (() => u.e(252).then((() => () => u(252)))))
            },
            i = {
              63: [932]
            };
          u.f.consumes = (e, r) => {
            u.o(i, e) && i[e].forEach((e => {
              if (u.o(o, e)) return r.push(o[e]);
              var t = r => {
                  o[e] = 0, u.m[e] = t => {
                    delete u.c[e], t.exports = r()
                  }
                },
                n = r => {
                  delete o[e], u.m[e] = t => {
                    throw delete u.c[e], r
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
          var e = {
            622: 0
          };
          u.f.j = (r, t) => {
            var n = u.o(e, r) ? e[r] : void 0;
            if (0 !== n)
              if (n) t.push(n[2]);
              else {
                var o = new Promise(((t, o) => n = e[r] = [t, o]));
                t.push(n[2] = o);
                var a = u.p + u.u(r),
                  i = new Error;
                u.l(a, (t => {
                  if (u.o(e, r) && (0 !== (n = e[r]) && (e[r] = void 0), n)) {
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
                l = 0;
              if (a.some((r => 0 !== e[r]))) {
                for (n in i) u.o(i, n) && (u.m[n] = i[n]);
                s && s(u)
              }
              for (r && r(t); l < a.length; l++) o = a[l], u.o(e, o) && e[o] && e[o][0](), e[o] = 0
            },
            t = self.webpackChunk_rockstargames_intl = self.webpackChunk_rockstargames_intl || [];
          t.forEach(r.bind(null, 0)), t.push = r.bind(null, t.push.bind(t))
        })(), u(308), u(288)
      })())
    }
  }
}));