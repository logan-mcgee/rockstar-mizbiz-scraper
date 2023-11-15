System.register([], (function(e, r) {
  return {
    execute: function() {
      e((() => {
        var e, t, n, a, o, i, s = {
            6100: (e, r, t) => {
              (0, t(487).s)(1)
            },
            487: (e, r, t) => {
              const n = t(6175).R;
              r.s = function(e) {
                if (e || (e = 1), !t.y.meta || !t.y.meta.url) throw console.error("__system_context__", t.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                t.p = n(t.y.meta.url, e)
              }
            },
            9473: (e, r, t) => {
              t(6100)
            },
            6175: (e, r, t) => {
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
            8489: (e, r, t) => {
              "use strict";
              var n = {
                  "./bootstrap": () => t.e(828).then((() => () => t(2828))),
                  "./index": () => Promise.all([t.e(848), t.e(466), t.e(927), t.e(52)]).then((() => () => t(7714))),
                  "./operations/fragments/": () => t.e(362).then((() => () => t(3362))),
                  "./operations/fragments/newswire-post.graphql": () => t.e(726).then((() => () => t(1726))),
                  "./operations/fragments/paging.graphql": () => t.e(444).then((() => () => t(8444))),
                  "./operations/fragments/video-fields.graphql": () => t.e(601).then((() => () => t(601))),
                  "./operations/queries": () => t.e(593).then((() => () => t(3593))),
                  "./reactive": () => Promise.all([t.e(848), t.e(927), t.e(739)]).then((() => () => t(8739)))
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
          return s[e].call(t.exports, t, t.exports, f), t.loaded = !0, t.exports
        }
        return f.m = s, f.c = c, f.y = r, f.n = e => {
          var r = e && e.__esModule ? () => e.default : () => e;
          return f.d(r, {
            a: r
          }), r
        }, t = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, f.t = function(r, n) {
          if (1 & n && (r = this(r)), 8 & n) return r;
          if ("object" == typeof r && r) {
            if (4 & n && r.__esModule) return r;
            if (16 & n && "function" == typeof r.then) return r
          }
          var a = Object.create(null);
          f.r(a);
          var o = {};
          e = e || [null, t({}), t([]), t(t)];
          for (var i = 2 & n && r;
            "object" == typeof i && !~e.indexOf(i); i = t(i)) Object.getOwnPropertyNames(i).forEach((e => o[e] = () => r[e]));
          return o.default = () => r, f.d(a, o), a
        }, f.d = (e, r) => {
          for (var t in r) f.o(r, t) && !f.o(e, t) && Object.defineProperty(e, t, {
            enumerable: !0,
            get: r[t]
          })
        }, f.f = {}, f.e = e => Promise.all(Object.keys(f.f).reduce(((r, t) => (f.f[t](e, r), r)), [])), f.u = e => "js/" + {
          52: "a9de841104603f696e0ed5e2c27d1722",
          362: "0a26498eaf5ab0a13b73ceba0a7db21b",
          377: "0e20091fbaeda61ceafa7702a8a417f2",
          441: "ec92ef29f4990104ddfd5d7b9d174964",
          444: "28f184df0b2d7f43824385a8d3100654",
          466: "030f090a27af040b87e321c8a4e8d4e7",
          593: "07eaf9379750b9db7d0d2180af350ef9",
          601: "2551ed59be517d0741d06d761eada4d7",
          726: "cba0168948012b1592f0b7c18b8e368a",
          739: "767ece7b1ec89e4d0838e3f624ea1f25",
          741: "87aeda246c234813af83f083286e0389",
          828: "c83febaa0b378842f7710875005887bb",
          848: "62446c360258c1b04e98b798f18af409",
          927: "71386610007aaebb12ce6bcbcdd222c6"
        } [e] + ".js", f.miniCssF = e => {}, f.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), f.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r), n = {}, a = "@rockstargames/graph-client:", f.l = (e, r, t, o) => {
          if (n[e]) n[e].push(r);
          else {
            var i, s;
            if (void 0 !== t)
              for (var c = document.getElementsByTagName("script"), u = 0; u < c.length; u++) {
                var l = c[u];
                if (l.getAttribute("src") == e || l.getAttribute("data-webpack") == a + t) {
                  i = l;
                  break
                }
              }
            i || (s = !0, (i = document.createElement("script")).charset = "utf-8", i.timeout = 120, f.nc && i.setAttribute("nonce", f.nc), i.setAttribute("data-webpack", a + t), i.src = e), n[e] = [r];
            var d = (r, t) => {
                i.onerror = i.onload = null, clearTimeout(p);
                var a = n[e];
                if (delete n[e], i.parentNode && i.parentNode.removeChild(i), a && a.forEach((e => e(t))), r) return r(t)
              },
              p = setTimeout(d.bind(null, void 0, {
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
        }, f.nmd = e => (e.paths = [], e.children || (e.children = []), e), o = {}, i = {}, f.f.remotes = (e, r) => {
          f.o(o, e) && o[e].forEach((e => {
            var t = f.R;
            t || (t = []);
            var n = i[e];
            if (!(t.indexOf(n) >= 0)) {
              if (t.push(n), n.p) return r.push(n.p);
              var a = r => {
                  r || (r = new Error("Container missing")), "string" == typeof r.message && (r.message += '\nwhile loading "' + n[1] + '" from ' + n[2]), f.m[e] = () => {
                    throw r
                  }, n.p = 0
                },
                o = (e, t, o, i, s, c) => {
                  try {
                    var f = e(t, o);
                    if (!f || !f.then) return s(f, i, c);
                    var u = f.then((e => s(e, i)), a);
                    if (!c) return u;
                    r.push(n.p = u)
                  } catch (e) {
                    a(e)
                  }
                },
                s = (e, r, a) => o(r.get, n[1], t, 0, c, a),
                c = r => {
                  n.p = 1, f.m[e] = e => {
                    e.exports = r()
                  }
                };
              o(f, n[2], 0, 0, ((e, r, t) => e ? o(f.I, n[0], 0, e, s, t) : a()), 1)
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
                i = "@rockstargames/graph-client",
                s = [];
              return "default" === t && ((e, r, t, n) => {
                var a = o[e] = o[e] || {},
                  s = a[r];
                (!s || !s.loaded && (1 != !s.eager ? n : i > s.from)) && (a[r] = {
                  get: () => f.e(377).then((() => () => f(5377))),
                  from: i,
                  eager: !1
                })
              })("react", "18.2.0"), e[t] = s.length ? Promise.all(s).then((() => e[t] = 1)) : 1
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
                for (var i = 0, s = 1, c = !0;; s++, i++) {
                  var f, u, l = s < t.length ? (typeof t[s])[0] : "";
                  if (i >= n.length || "o" == (u = (typeof(f = n[i]))[0])) return !c || ("u" == l ? s > a && !o : "" == l != o);
                  if ("u" == u) {
                    if (!c || "u" != l) return !1
                  } else if (c)
                    if (l == u)
                      if (s <= a) {
                        if (f != t[s]) return !1
                      } else {
                        if (o ? f > t[s] : f < t[s]) return !1;
                        f != t[s] && (c = !1)
                      }
                  else if ("s" != l && "n" != l) {
                    if (o || s <= a) return !1;
                    c = !1, s--
                  } else {
                    if (s <= a || u < l != o) return !1;
                    c = !1
                  } else "s" != l && "n" != l && (c = !1, s--)
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
              927: () => n("default", "react", [1, 18, 2, 0], (() => f.e(377).then((() => () => f(5377)))))
            },
            i = {
              927: [927]
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
          var e = {
            823: 0
          };
          f.f.j = (r, t) => {
            var n = f.o(e, r) ? e[r] : void 0;
            if (0 !== n)
              if (n) t.push(n[2]);
              else if (927 != r) {
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
            } else e[r] = 0
          };
          var r = (r, t) => {
              var n, a, o = t[0],
                i = t[1],
                s = t[2],
                c = 0;
              if (o.some((r => 0 !== e[r]))) {
                for (n in i) f.o(i, n) && (f.m[n] = i[n]);
                s && s(f)
              }
              for (r && r(t); c < o.length; c++) a = o[c], f.o(e, a) && e[a] && e[a][0](), e[a] = 0
            },
            t = self.webpackChunk_rockstargames_graph_client = self.webpackChunk_rockstargames_graph_client || [];
          t.forEach(r.bind(null, 0)), t.push = r.bind(null, t.push.bind(t))
        })(), f(9473), f(8489)
      })())
    }
  }
}));