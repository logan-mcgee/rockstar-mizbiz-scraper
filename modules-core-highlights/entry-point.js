! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      r = (new Error).stack;
    r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "789635aa-2a02-47dc-9ae4-c868c5251659", e._sentryDebugIdIdentifier = "sentry-dbid-789635aa-2a02-47dc-9ae4-c868c5251659")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "692b6956abd6177da3ac6da14c81527e5159ed6d",
  packageName: "@rockstargames/modules-core-highlights",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "692b6956abd6177da3ac6da14c81527e5159ed6d"
}, System.register(["@rockstargames/modules-core-sc-user", "@rockstargames/tina", "@rockstargames/utils"], (function(e, r) {
  var t = {},
    a = {},
    n = {};
  return Object.defineProperty(t, "__esModule", {
    value: !0
  }), Object.defineProperty(a, "__esModule", {
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
        a[r] = e[r]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(r) {
        n[r] = e[r]
      }))
    }],
    execute: function() {
      e((() => {
        var e, o, i, s, l = {
            4364: (e, r, t) => {
              (0, t(7284).G)(1)
            },
            7284: (e, r, t) => {
              const a = t(7984).Q;
              r.G = function(e) {
                if (e || (e = 1), !t.y.meta || !t.y.meta.url) throw console.error("__system_context__", t.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                t.p = a(t.y.meta.url, e)
              }
            },
            3824: (e, r, t) => {
              t(4364)
            },
            7984: (e, r, t) => {
              r.Q = function(e, r) {
                var t = document.createElement("a");
                t.href = e;
                for (var a = "/" === t.pathname[0] ? t.pathname : "/" + t.pathname, n = 0, o = a.length; n !== r && o >= 0;) "/" === a[--o] && n++;
                if (n !== r) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + r + ") is greater than the number of directories (" + n + ") in the URL path " + e);
                var i = a.slice(0, o + 1);
                return t.protocol + "//" + t.host + i
              };
              Number.isInteger
            },
            1616: (e, r, t) => {
              "use strict";
              var a = {
                  "./index": () => Promise.all([t.e(848), t.e(664), t.e(504)]).then((() => () => t(6504))),
                  "./tina": () => t.e(568).then((() => () => t(4568)))
                },
                n = (e, r) => (t.R = r, r = t.o(a, e) ? a[e]() : Promise.resolve().then((() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                })), t.R = void 0, r),
                o = (e, r) => {
                  if (t.S) {
                    var a = "default",
                      n = t.S[a];
                    if (n && n !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return t.S[a] = e, t.I(a, r)
                  }
                };
              t.d(r, {
                get: () => n,
                init: () => o
              })
            },
            1128: e => {
              "use strict";
              e.exports = t
            },
            8428: e => {
              "use strict";
              e.exports = a
            },
            9344: e => {
              "use strict";
              e.exports = n
            }
          },
          d = {};

        function f(e) {
          var r = d[e];
          if (void 0 !== r) return r.exports;
          var t = d[e] = {
            exports: {}
          };
          return l[e](t, t.exports, f), t.exports
        }
        return f.m = l, f.c = d, f.y = r, f.n = e => {
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
          61: "7cfe60191f932d3f71269aa59b898196",
          100: "2e0e30f8cd5b53e02374df966b329927",
          132: "1c93630ab0d2fd5bc378aa1390076d8f",
          304: "97c26d26348c2b4086c81052d97306eb",
          408: "fb9abef94441715768e21637bdc5b255",
          424: "b5a10b67efc0df6d018e8b2f02fbeda7",
          504: "74304f894a91d8d27b294eb497df10e8",
          512: "76c89ceb81a7dd90fbdb8595417c0e48",
          568: "8dc643beefc777bd9575b2f0ced905de",
          664: "2b1991a17874988bf6338c05640d7d05",
          848: "de45d22384a9af718e7ec68e9a08d130",
          924: "b46a621a34558435d51d41433ab67e5e"
        } [e] + ".js", f.miniCssF = e => "css/b6ba11b2a476a23d90947792c69c3d44.css", f.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), f.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r), e = {}, o = "@rockstargames/modules-core-highlights:", f.l = (r, t, a, n) => {
          if (e[r]) e[r].push(t);
          else {
            var i, s;
            if (void 0 !== a)
              for (var l = document.getElementsByTagName("script"), d = 0; d < l.length; d++) {
                var u = l[d];
                if (u.getAttribute("src") == r || u.getAttribute("data-webpack") == o + a) {
                  i = u;
                  break
                }
              }
            i || (s = !0, (i = document.createElement("script")).charset = "utf-8", i.timeout = 120, f.nc && i.setAttribute("nonce", f.nc), i.setAttribute("data-webpack", o + a), i.src = r), e[r] = [t];
            var c = (t, a) => {
                i.onerror = i.onload = null, clearTimeout(h);
                var n = e[r];
                if (delete e[r], i.parentNode && i.parentNode.removeChild(i), n && n.forEach((e => e(a))), t) return t(a)
              },
              h = setTimeout(c.bind(null, void 0, {
                type: "timeout",
                target: i
              }), 12e4);
            i.onerror = c.bind(null, i.onerror), i.onload = c.bind(null, i.onload), s && document.head.appendChild(i)
          }
        }, f.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, i = {
          61: [3061],
          504: [1740, 2836],
          568: [5652, 9468]
        }, s = {
          1740: ["default", "./index", 8428],
          2836: ["default", "./index", 1128],
          3061: ["default", "./hooks", 9344],
          5652: ["default", "./helpers/uploads", 8428],
          9468: ["default", "./properties", 8428]
        }, f.f.remotes = (e, r) => {
          f.o(i, e) && i[e].forEach((e => {
            var t = f.R;
            t || (t = []);
            var a = s[e];
            if (!(t.indexOf(a) >= 0)) {
              if (t.push(a), a.p) return r.push(a.p);
              var n = r => {
                  r || (r = new Error("Container missing")), "string" == typeof r.message && (r.message += '\nwhile loading "' + a[1] + '" from ' + a[2]), f.m[e] = () => {
                    throw r
                  }, a.p = 0
                },
                o = (e, t, o, i, s, l) => {
                  try {
                    var d = e(t, o);
                    if (!d || !d.then) return s(d, i, l);
                    var f = d.then((e => s(e, i)), n);
                    if (!l) return f;
                    r.push(a.p = f)
                  } catch (e) {
                    n(e)
                  }
                },
                i = (e, r, n) => o(r.get, a[1], t, 0, l, n),
                l = r => {
                  a.p = 1, f.m[e] = e => {
                    e.exports = r()
                  }
                };
              o(f, a[2], 0, 0, ((e, r, t) => e ? o(f.I, a[0], 0, e, i, t) : n()), 1)
            }
          }))
        }, (() => {
          f.S = {};
          var e = {},
            r = {};
          f.I = (t, a) => {
            a || (a = []);
            var n = r[t];
            if (n || (n = r[t] = {}), !(a.indexOf(n) >= 0)) {
              if (a.push(n), e[t]) return e[t];
              f.o(f.S, t) || (f.S[t] = {});
              var o = f.S[t],
                i = "@rockstargames/modules-core-highlights",
                s = (e, r, t, a) => {
                  var n = o[e] = o[e] || {},
                    s = n[r];
                  (!s || !s.loaded && (!a != !s.eager ? a : i > s.from)) && (n[r] = {
                    get: t,
                    from: i,
                    eager: !!a
                  })
                },
                l = e => {
                  var r = e => {
                    return r = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(r));
                    var r
                  };
                  try {
                    var n = f(e);
                    if (!n) return;
                    var o = e => e && e.init && e.init(f.S[t], a);
                    if (n.then) return d.push(n.then(o, r));
                    var i = o(n);
                    if (i && i.then) return d.push(i.catch(r))
                  } catch (e) {
                    r(e)
                  }
                },
                d = [];
              return "default" === t && (s("@rockstargames/locale-tools", "1.0.0", (() => Promise.all([f.e(408), f.e(664), f.e(61), f.e(304)]).then((() => () => f(8304))))), s("framer-motion", "10.16.4", (() => Promise.all([f.e(424), f.e(664)]).then((() => () => f(6424))))), s("react-intersection-observer", "9.5.2", (() => Promise.all([f.e(664), f.e(512)]).then((() => () => f(1512))))), s("react", "18.2.0", (() => f.e(100).then((() => () => f(7100))))), l(1128), l(8428), l(9344)), d.length ? e[t] = Promise.all(d).then((() => e[t] = 1)) : e[t] = 1
            }
          }
        })(), (() => {
          var e;
          f.g.importScripts && (e = f.g.location + "");
          var r = f.g.document;
          if (!e && r && (r.currentScript && (e = r.currentScript.src), !e)) {
            var t = r.getElementsByTagName("script");
            if (t.length)
              for (var a = t.length - 1; a > -1 && !e;) e = t[a--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), f.p = e
        })(), (() => {
          var e = e => {
              var r = e => e.split(".").map((e => +e == e ? +e : e)),
                t = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
                a = t[1] ? r(t[1]) : [];
              return t[2] && (a.length++, a.push.apply(a, r(t[2]))), t[3] && (a.push([]), a.push.apply(a, r(t[3]))), a
            },
            r = (t, a) => {
              if (0 in t) {
                a = e(a);
                var n = t[0],
                  o = n < 0;
                o && (n = -n - 1);
                for (var i = 0, s = 1, l = !0;; s++, i++) {
                  var d, f, u = s < t.length ? (typeof t[s])[0] : "";
                  if (i >= a.length || "o" == (f = (typeof(d = a[i]))[0])) return !l || ("u" == u ? s > n && !o : "" == u != o);
                  if ("u" == f) {
                    if (!l || "u" != u) return !1
                  } else if (l)
                    if (u == f)
                      if (s <= n) {
                        if (d != t[s]) return !1
                      } else {
                        if (o ? d > t[s] : d < t[s]) return !1;
                        d != t[s] && (l = !1)
                      }
                  else if ("s" != u && "n" != u) {
                    if (o || s <= n) return !1;
                    l = !1, s--
                  } else {
                    if (s <= n || f < u != o) return !1;
                    l = !1
                  } else "s" != u && "n" != u && (l = !1, s--)
                }
              }
              var c = [],
                h = c.pop.bind(c);
              for (i = 1; i < t.length; i++) {
                var p = t[i];
                c.push(1 == p ? h() | h() : 2 == p ? h() & h() : p ? r(p, a) : !h())
              }
              return !!h()
            },
            t = (t, a, n) => {
              var o = t[a];
              return (a = Object.keys(o).reduce(((t, a) => !r(n, a) || t && !((r, t) => {
                r = e(r), t = e(t);
                for (var a = 0;;) {
                  if (a >= r.length) return a < t.length && "u" != (typeof t[a])[0];
                  var n = r[a],
                    o = (typeof n)[0];
                  if (a >= t.length) return "u" == o;
                  var i = t[a],
                    s = (typeof i)[0];
                  if (o != s) return "o" == o && "n" == s || "s" == s || "u" == o;
                  if ("o" != o && "u" != o && n != i) return n < i;
                  a++
                }
              })(t, a) ? t : a), 0)) && o[a]
            },
            a = (e => function(r, t, a, n) {
              var o = f.I(r);
              return o && o.then ? o.then(e.bind(e, r, f.S[r], t, a, n)) : e(r, f.S[r], t, a, n)
            })(((e, r, a, n, o) => {
              var i = r && f.o(r, a) && t(r, a, n);
              return i ? (e => (e.loaded = 1, e.get()))(i) : o()
            })),
            n = {},
            o = {
              1664: () => a("default", "react", [1, 18, 2, 0], (() => f.e(100).then((() => () => f(7100))))),
              1272: () => a("default", "@rockstargames/locale-tools", [1, "workspace:*"], (() => Promise.all([f.e(408), f.e(61), f.e(924)]).then((() => () => f(8304))))),
              3488: () => a("default", "framer-motion", [1, 10, 15, 1], (() => f.e(424).then((() => () => f(6424))))),
              9496: () => a("default", "react-intersection-observer", [1, 9, 4, 3], (() => f.e(132).then((() => () => f(1512)))))
            },
            i = {
              504: [1272, 3488, 9496],
              664: [1664]
            },
            s = {};
          f.f.consumes = (e, r) => {
            f.o(i, e) && i[e].forEach((e => {
              if (f.o(n, e)) return r.push(n[e]);
              if (!s[e]) {
                var t = r => {
                  n[e] = 0, f.m[e] = t => {
                    delete f.c[e], t.exports = r()
                  }
                };
                s[e] = !0;
                var a = r => {
                  delete n[e], f.m[e] = t => {
                    throw delete f.c[e], r
                  }
                };
                try {
                  var i = o[e]();
                  i.then ? r.push(n[e] = i.then(t).catch(a)) : t(i)
                } catch (e) {
                  a(e)
                }
              }
            }))
          }
        })(), (() => {
          if ("undefined" != typeof document) {
            var e = {
              148: 0
            };
            f.f.miniCss = (r, t) => {
              e[r] ? t.push(e[r]) : 0 !== e[r] && {
                504: 1
              } [r] && t.push(e[r] = (e => new Promise(((r, t) => {
                var a = f.miniCssF(e),
                  n = f.p + a;
                if (((e, r) => {
                    for (var t = document.getElementsByTagName("link"), a = 0; a < t.length; a++) {
                      var n = (i = t[a]).getAttribute("data-href") || i.getAttribute("href");
                      if ("stylesheet" === i.rel && (n === e || n === r)) return i
                    }
                    var o = document.getElementsByTagName("style");
                    for (a = 0; a < o.length; a++) {
                      var i;
                      if ((n = (i = o[a]).getAttribute("data-href")) === e || n === r) return i
                    }
                  })(a, n)) return r();
                ((e, r, t, a, n) => {
                  var o = document.createElement("link");
                  o.rel = "stylesheet", o.type = "text/css", o.onerror = o.onload = t => {
                    if (o.onerror = o.onload = null, "load" === t.type) a();
                    else {
                      var i = t && ("load" === t.type ? "missing" : t.type),
                        s = t && t.target && t.target.href || r,
                        l = new Error("Loading CSS chunk " + e + " failed.\n(" + s + ")");
                      l.code = "CSS_CHUNK_LOAD_FAILED", l.type = i, l.request = s, o.parentNode && o.parentNode.removeChild(o), n(l)
                    }
                  }, o.href = r, document.head.appendChild(o)
                })(e, n, 0, r, t)
              })))(r).then((() => {
                e[r] = 0
              }), (t => {
                throw delete e[r], t
              })))
            }
          }
        })(), (() => {
          var e = {
            148: 0
          };
          f.f.j = (r, t) => {
            var a = f.o(e, r) ? e[r] : void 0;
            if (0 !== a)
              if (a) t.push(a[2]);
              else if (/^6(1|64)$/.test(r)) e[r] = 0;
            else {
              var n = new Promise(((t, n) => a = e[r] = [t, n]));
              t.push(a[2] = n);
              var o = f.p + f.u(r),
                i = new Error;
              f.l(o, (t => {
                if (f.o(e, r) && (0 !== (a = e[r]) && (e[r] = void 0), a)) {
                  var n = t && ("load" === t.type ? "missing" : t.type),
                    o = t && t.target && t.target.src;
                  i.message = "Loading chunk " + r + " failed.\n(" + n + ": " + o + ")", i.name = "ChunkLoadError", i.type = n, i.request = o, a[1](i)
                }
              }), "chunk-" + r, r)
            }
          };
          var r = (r, t) => {
              var a, n, o = t[0],
                i = t[1],
                s = t[2],
                l = 0;
              if (o.some((r => 0 !== e[r]))) {
                for (a in i) f.o(i, a) && (f.m[a] = i[a]);
                s && s(f)
              }
              for (r && r(t); l < o.length; l++) n = o[l], f.o(e, n) && e[n] && e[n][0](), e[n] = 0
            },
            t = self.webpackChunk_rockstargames_modules_core_highlights = self.webpackChunk_rockstargames_modules_core_highlights || [];
          t.forEach(r.bind(null, 0)), t.push = r.bind(null, t.push.bind(t))
        })(), f(3824), f(1616)
      })())
    }
  }
}));
//# sourceMappingURL=remote-entry.js.map