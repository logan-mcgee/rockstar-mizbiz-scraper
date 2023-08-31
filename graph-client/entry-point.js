System.register([], (function(e, r) {
  return {
    execute: function() {
      e((() => {
        var e, t, n, o, a, i, s = {
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
            8489: (e, r, t) => {
              "use strict";
              var n = {
                  "./bootstrap": () => t.e(39).then((() => () => t(5039))),
                  "./index": () => Promise.all([t.e(719), t.e(851), t.e(843), t.e(792)]).then((() => () => t(3330))),
                  "./operations/fragments/": () => t.e(149).then((() => () => t(1149))),
                  "./operations/fragments/newswire-post.graphql": () => t.e(975).then((() => () => t(3975))),
                  "./operations/fragments/paging.graphql": () => t.e(44).then((() => () => t(7044))),
                  "./operations/fragments/video-fields.graphql": () => t.e(684).then((() => () => t(4684))),
                  "./operations/queries": () => t.e(97).then((() => () => t(3097))),
                  "./reactive": () => Promise.all([t.e(719), t.e(843), t.e(315)]).then((() => () => t(6315)))
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
            }
          },
          f = {};

        function u(e) {
          var r = f[e];
          if (void 0 !== r) return r.exports;
          var t = f[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return s[e].call(t.exports, t, t.exports, u), t.loaded = !0, t.exports
        }
        return u.m = s, u.c = f, u.y = r, u.n = e => {
          var r = e && e.__esModule ? () => e.default : () => e;
          return u.d(r, {
            a: r
          }), r
        }, t = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, u.t = function(r, n) {
          if (1 & n && (r = this(r)), 8 & n) return r;
          if ("object" == typeof r && r) {
            if (4 & n && r.__esModule) return r;
            if (16 & n && "function" == typeof r.then) return r
          }
          var o = Object.create(null);
          u.r(o);
          var a = {};
          e = e || [null, t({}), t([]), t(t)];
          for (var i = 2 & n && r;
            "object" == typeof i && !~e.indexOf(i); i = t(i)) Object.getOwnPropertyNames(i).forEach((e => a[e] = () => r[e]));
          return a.default = () => r, u.d(o, a), o
        }, u.d = (e, r) => {
          for (var t in r) u.o(r, t) && !u.o(e, t) && Object.defineProperty(e, t, {
            enumerable: !0,
            get: r[t]
          })
        }, u.f = {}, u.e = e => Promise.all(Object.keys(u.f).reduce(((r, t) => (u.f[t](e, r), r)), [])), u.u = e => "js/" + {
          39: "96035105b0b53b83c4be",
          44: "0f16f3332d0d2028a3e7",
          97: "fbde9be4728d7bc296f2",
          149: "8602f6c8af1e7be52be5",
          170: "947306c4dc90ae1c5ba3",
          230: "091414f387267372cdd4",
          252: "2872b4628a41f3a87780",
          315: "7860ccbeb91f9ca3a93d",
          684: "d24a023fceb1ee59d1b1",
          719: "986e8fee137987c43de0",
          792: "68db16e0b74aeec4752e",
          843: "2e94ff69353890373269",
          851: "d9c52fa446e9b9fb3e2b",
          975: "3b0957ef4983ec31b2a9"
        } [e] + ".js", u.miniCssF = e => {}, u.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), u.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r), n = {}, o = "@rockstargames/graph-client:", u.l = (e, r, t, a) => {
          if (n[e]) n[e].push(r);
          else {
            var i, s;
            if (void 0 !== t)
              for (var f = document.getElementsByTagName("script"), l = 0; l < f.length; l++) {
                var c = f[l];
                if (c.getAttribute("src") == e || c.getAttribute("data-webpack") == o + t) {
                  i = c;
                  break
                }
              }
            i || (s = !0, (i = document.createElement("script")).charset = "utf-8", i.timeout = 120, u.nc && i.setAttribute("nonce", u.nc), i.setAttribute("data-webpack", o + t), i.src = e), n[e] = [r];
            var d = (r, t) => {
                i.onerror = i.onload = null, clearTimeout(p);
                var o = n[e];
                if (delete n[e], i.parentNode && i.parentNode.removeChild(i), o && o.forEach((e => e(t))), r) return r(t)
              },
              p = setTimeout(d.bind(null, void 0, {
                type: "timeout",
                target: i
              }), 12e4);
            i.onerror = d.bind(null, i.onerror), i.onload = d.bind(null, i.onload), s && document.head.appendChild(i)
          }
        }, u.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, u.nmd = e => (e.paths = [], e.children || (e.children = []), e), a = {}, i = {}, u.f.remotes = (e, r) => {
          u.o(a, e) && a[e].forEach((e => {
            var t = u.R;
            t || (t = []);
            var n = i[e];
            if (!(t.indexOf(n) >= 0)) {
              if (t.push(n), n.p) return r.push(n.p);
              var o = r => {
                  r || (r = new Error("Container missing")), "string" == typeof r.message && (r.message += '\nwhile loading "' + n[1] + '" from ' + n[2]), u.m[e] = () => {
                    throw r
                  }, n.p = 0
                },
                a = (e, t, a, i, s, f) => {
                  try {
                    var u = e(t, a);
                    if (!u || !u.then) return s(u, i, f);
                    var l = u.then((e => s(e, i)), o);
                    if (!f) return l;
                    r.push(n.p = l)
                  } catch (e) {
                    o(e)
                  }
                },
                s = (e, r, o) => a(r.get, n[1], t, 0, f, o),
                f = r => {
                  n.p = 1, u.m[e] = e => {
                    e.exports = r()
                  }
                };
              a(u, n[2], 0, 0, ((e, r, t) => e ? a(u.I, n[0], 0, e, s, t) : o()), 1)
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
                i = "@rockstargames/graph-client",
                s = [];
              return "default" === t && ((e, r, t, n) => {
                var o = a[e] = a[e] || {},
                  s = o[r];
                (!s || !s.loaded && (1 != !s.eager ? n : i > s.from)) && (o[r] = {
                  get: () => u.e(252).then((() => () => u(8252))),
                  from: i,
                  eager: !1
                })
              })("react", "18.2.0"), e[t] = s.length ? Promise.all(s).then((() => e[t] = 1)) : 1
            }
          }
        })(), u.p = "", (() => {
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
                for (var i = 0, s = 1, f = !0;; s++, i++) {
                  var u, l, c = s < t.length ? (typeof t[s])[0] : "";
                  if (i >= n.length || "o" == (l = (typeof(u = n[i]))[0])) return !f || ("u" == c ? s > o && !a : "" == c != a);
                  if ("u" == l) {
                    if (!f || "u" != c) return !1
                  } else if (f)
                    if (c == l)
                      if (s <= o) {
                        if (u != t[s]) return !1
                      } else {
                        if (a ? u > t[s] : u < t[s]) return !1;
                        u != t[s] && (f = !1)
                      }
                  else if ("s" != c && "n" != c) {
                    if (a || s <= o) return !1;
                    f = !1, s--
                  } else {
                    if (s <= o || l < c != a) return !1;
                    f = !1
                  } else "s" != c && "n" != c && (f = !1, s--)
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
              5843: () => n("default", "react", [2, 18, 2, 0], (() => u.e(252).then((() => () => u(8252)))))
            },
            i = {
              843: [5843]
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
            823: 0
          };
          u.f.j = (r, t) => {
            var n = u.o(e, r) ? e[r] : void 0;
            if (0 !== n)
              if (n) t.push(n[2]);
              else if (843 != r) {
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
            } else e[r] = 0
          };
          var r = (r, t) => {
              var n, o, a = t[0],
                i = t[1],
                s = t[2],
                f = 0;
              if (a.some((r => 0 !== e[r]))) {
                for (n in i) u.o(i, n) && (u.m[n] = i[n]);
                s && s(u)
              }
              for (r && r(t); f < a.length; f++) o = a[f], u.o(e, o) && e[o] && e[o][0](), e[o] = 0
            },
            t = self.webpackChunk_rockstargames_graph_client = self.webpackChunk_rockstargames_graph_client || [];
          t.forEach(r.bind(null, 0)), t.push = r.bind(null, t.push.bind(t))
        })(), u(1308), u(8489)
      })())
    }
  }
}));