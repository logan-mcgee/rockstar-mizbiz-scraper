! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "8a382cbf-7819-42b5-b03f-223958374d2d", e._sentryDebugIdIdentifier = "sentry-dbid-8a382cbf-7819-42b5-b03f-223958374d2d")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "90b9af281bd1b5c2955354a97f6fab1985234888",
  packageName: "@rockstargames/tina",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "90b9af281bd1b5c2955354a97f6fab1985234888"
}, System.register(["@rockstargames/graph-client", "@rockstargames/tina", "@rockstargames/utils"], (function(e, t) {
  var r = {},
    a = {},
    n = {};
  return Object.defineProperty(r, "__esModule", {
    value: !0
  }), Object.defineProperty(a, "__esModule", {
    value: !0
  }), Object.defineProperty(n, "__esModule", {
    value: !0
  }), {
    setters: [function(e) {
      Object.keys(e).forEach((function(t) {
        r[t] = e[t]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(t) {
        a[t] = e[t]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(t) {
        n[t] = e[t]
      }))
    }],
    execute: function() {
      e((() => {
        var e, o, i, f, s = {
            4364: (e, t, r) => {
              (0, r(7284).G)(1)
            },
            7284: (e, t, r) => {
              const a = r(7984).Q;
              t.G = function(e) {
                if (e || (e = 1), !r.y.meta || !r.y.meta.url) throw console.error("__system_context__", r.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                r.p = a(r.y.meta.url, e)
              }
            },
            3824: (e, t, r) => {
              r(4364)
            },
            7984: (e, t, r) => {
              t.Q = function(e, t) {
                var r = document.createElement("a");
                r.href = e;
                for (var a = "/" === r.pathname[0] ? r.pathname : "/" + r.pathname, n = 0, o = a.length; n !== t && o >= 0;) "/" === a[--o] && n++;
                if (n !== t) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + t + ") is greater than the number of directories (" + n + ") in the URL path " + e);
                var i = a.slice(0, o + 1);
                return r.protocol + "//" + r.host + i
              };
              Number.isInteger
            },
            5436: (e, t, r) => {
              "use strict";
              var a = {
                  "./helpers": () => r.e(864).then((() => () => r(9864))),
                  "./helpers/payload": () => Promise.all([r.e(660), r.e(496)]).then((() => () => r(1496))),
                  "./helpers/uploads": () => Promise.all([r.e(664), r.e(792), r.e(544)]).then((() => () => r(3924))),
                  "./index": () => Promise.all([r.e(664), r.e(952), r.e(792), r.e(832), r.e(660), r.e(272)]).then((() => () => r(9880))),
                  "./properties": () => Promise.all([r.e(664), r.e(952), r.e(792), r.e(832), r.e(524)]).then((() => () => r(1832))),
                  "./tinaBlockTemplates": () => r.e(104).then((() => () => r(2104))),
                  "./ui": () => Promise.all([r.e(664), r.e(952), r.e(460)]).then((() => () => r(6460)))
                },
                n = (e, t) => (r.R = t, t = r.o(a, e) ? a[e]() : Promise.resolve().then((() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                })), r.R = void 0, t),
                o = (e, t) => {
                  if (r.S) {
                    var a = "default",
                      n = r.S[a];
                    if (n && n !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return r.S[a] = e, r.I(a, t)
                  }
                };
              r.d(t, {
                get: () => n,
                init: () => o
              })
            },
            3864: e => {
              "use strict";
              e.exports = r
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

        function l(e) {
          var t = d[e];
          if (void 0 !== t) return t.exports;
          var r = d[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return s[e].call(r.exports, r, r.exports, l), r.loaded = !0, r.exports
        }
        return l.m = s, l.c = d, l.y = t, l.n = e => {
          var t = e && e.__esModule ? () => e.default : () => e;
          return l.d(t, {
            a: t
          }), t
        }, l.d = (e, t) => {
          for (var r in t) l.o(t, r) && !l.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: t[r]
          })
        }, l.f = {}, l.e = e => Promise.all(Object.keys(l.f).reduce(((t, r) => (l.f[r](e, t), t)), [])), l.u = e => "js/" + {
          100: "e56a9e504583a865bf6cfe4c1c8c69f5",
          104: "1e976197991686f312c770911c9ff92b",
          272: "e4ae1db9dc780b9a9dc0aa9d1391673b",
          296: "2df1ec83aa1817eb57aa464d9d0eba02",
          328: "4b9e6c8dcae2ccd04d8cc210fbcacecb",
          378: "34105170cb820c71edcd9e2bdf0362b0",
          396: "e40b2540c9089db8174cd31018a02a42",
          460: "beb30b5788cbf16faca5d6f7c9b37b91",
          496: "9eefd568b752a1d2a733c19f6fb66fd2",
          512: "8ac1d6287f7230744ef9d5c8da380763",
          524: "c06106466320f53460e339a05a5f770d",
          544: "146ac90d61187ec3cbae0df8febdcccd",
          660: "367195fc468808c041e16808bb0455f9",
          664: "1494b4c1881ca0bce6e7206a8e5e1f97",
          776: "941866a33916e4d9b8241c0684237dcd",
          784: "f453d9810cb1b69ee3cb90de967bd0db",
          792: "57e7ba9aa934888bf2a5dec01e6fb3c3",
          832: "95e9b3bcb0b43ddcaf445bca05495dff",
          848: "3ab44a424dfa1299671996998792f10d",
          864: "062631028c6f107bb7984b0e2991451e",
          952: "bdfc642c2babeb96a9bf3fc8d02d63db"
        } [e] + ".js", l.miniCssF = e => "css/" + {
          272: "1514f6d072638cd2c86d8a41f3eb9252",
          460: "22964693c61c3167369e822eef4d3510",
          524: "1514f6d072638cd2c86d8a41f3eb9252"
        } [e] + ".css", l.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), l.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), e = {}, o = "@rockstargames/tina:", l.l = (t, r, a, n) => {
          if (e[t]) e[t].push(r);
          else {
            var i, f;
            if (void 0 !== a)
              for (var s = document.getElementsByTagName("script"), d = 0; d < s.length; d++) {
                var c = s[d];
                if (c.getAttribute("src") == t || c.getAttribute("data-webpack") == o + a) {
                  i = c;
                  break
                }
              }
            i || (f = !0, (i = document.createElement("script")).charset = "utf-8", i.timeout = 120, l.nc && i.setAttribute("nonce", l.nc), i.setAttribute("data-webpack", o + a), i.src = t), e[t] = [r];
            var u = (r, a) => {
                i.onerror = i.onload = null, clearTimeout(h);
                var n = e[t];
                if (delete e[t], i.parentNode && i.parentNode.removeChild(i), n && n.forEach((e => e(a))), r) return r(a)
              },
              h = setTimeout(u.bind(null, void 0, {
                type: "timeout",
                target: i
              }), 12e4);
            i.onerror = u.bind(null, i.onerror), i.onload = u.bind(null, i.onload), f && document.head.appendChild(i)
          }
        }, l.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, l.nmd = e => (e.paths = [], e.children || (e.children = []), e), i = {
          104: [9468],
          792: [5792],
          832: [3052]
        }, f = {
          3052: ["default", "./index", 3864],
          5792: ["default", "./index", 9344],
          9468: ["default", "./properties", 8428]
        }, l.f.remotes = (e, t) => {
          l.o(i, e) && i[e].forEach((e => {
            var r = l.R;
            r || (r = []);
            var a = f[e];
            if (!(r.indexOf(a) >= 0)) {
              if (r.push(a), a.p) return t.push(a.p);
              var n = t => {
                  t || (t = new Error("Container missing")), "string" == typeof t.message && (t.message += '\nwhile loading "' + a[1] + '" from ' + a[2]), l.m[e] = () => {
                    throw t
                  }, a.p = 0
                },
                o = (e, r, o, i, f, s) => {
                  try {
                    var d = e(r, o);
                    if (!d || !d.then) return f(d, i, s);
                    var l = d.then((e => f(e, i)), n);
                    if (!s) return l;
                    t.push(a.p = l)
                  } catch (e) {
                    n(e)
                  }
                },
                i = (e, t, n) => o(t.get, a[1], r, 0, s, n),
                s = t => {
                  a.p = 1, l.m[e] = e => {
                    e.exports = t()
                  }
                };
              o(l, a[2], 0, 0, ((e, t, r) => e ? o(l.I, a[0], 0, e, i, r) : n()), 1)
            }
          }))
        }, (() => {
          l.S = {};
          var e = {},
            t = {};
          l.I = (r, a) => {
            a || (a = []);
            var n = t[r];
            if (n || (n = t[r] = {}), !(a.indexOf(n) >= 0)) {
              if (a.push(n), e[r]) return e[r];
              l.o(l.S, r) || (l.S[r] = {});
              var o = l.S[r],
                i = "@rockstargames/tina",
                f = (e, t, r, a) => {
                  var n = o[e] = o[e] || {},
                    f = n[t];
                  (!f || !f.loaded && (!a != !f.eager ? a : i > f.from)) && (n[t] = {
                    get: r,
                    from: i,
                    eager: !!a
                  })
                },
                s = e => {
                  var t = e => {
                    return t = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(t));
                    var t
                  };
                  try {
                    var n = l(e);
                    if (!n) return;
                    var o = e => e && e.init && e.init(l.S[r], a);
                    if (n.then) return d.push(n.then(o, t));
                    var i = o(n);
                    if (i && i.then) return d.push(i.catch(t))
                  } catch (e) {
                    t(e)
                  }
                },
                d = [];
              return "default" === r && (f("flat", "5.0.2", (() => l.e(328).then((() => () => l(1328))))), f("lodash", "4.17.21", (() => l.e(784).then((() => () => l(9784))))), f("re-resizable", "6.9.11", (() => Promise.all([l.e(512), l.e(664), l.e(296)]).then((() => () => l(4512))))), f("react-dom", "18.2.0", (() => Promise.all([l.e(848), l.e(664)]).then((() => () => l(848))))), f("react-intersection-observer", "9.5.2", (() => Promise.all([l.e(664), l.e(396)]).then((() => () => l(8396))))), f("react", "18.2.0", (() => l.e(100).then((() => () => l(7100))))), f("uuid", "9.0.1", (() => l.e(378).then((() => () => l(1378))))), s(9344), s(3864), s(8428)), d.length ? e[r] = Promise.all(d).then((() => e[r] = 1)) : e[r] = 1
            }
          }
        })(), (() => {
          var e;
          l.g.importScripts && (e = l.g.location + "");
          var t = l.g.document;
          if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
            var r = t.getElementsByTagName("script");
            if (r.length)
              for (var a = r.length - 1; a > -1 && !e;) e = r[a--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), l.p = e
        })(), (() => {
          var e = e => {
              var t = e => e.split(".").map((e => +e == e ? +e : e)),
                r = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
                a = r[1] ? t(r[1]) : [];
              return r[2] && (a.length++, a.push.apply(a, t(r[2]))), r[3] && (a.push([]), a.push.apply(a, t(r[3]))), a
            },
            t = (r, a) => {
              if (0 in r) {
                a = e(a);
                var n = r[0],
                  o = n < 0;
                o && (n = -n - 1);
                for (var i = 0, f = 1, s = !0;; f++, i++) {
                  var d, l, c = f < r.length ? (typeof r[f])[0] : "";
                  if (i >= a.length || "o" == (l = (typeof(d = a[i]))[0])) return !s || ("u" == c ? f > n && !o : "" == c != o);
                  if ("u" == l) {
                    if (!s || "u" != c) return !1
                  } else if (s)
                    if (c == l)
                      if (f <= n) {
                        if (d != r[f]) return !1
                      } else {
                        if (o ? d > r[f] : d < r[f]) return !1;
                        d != r[f] && (s = !1)
                      }
                  else if ("s" != c && "n" != c) {
                    if (o || f <= n) return !1;
                    s = !1, f--
                  } else {
                    if (f <= n || l < c != o) return !1;
                    s = !1
                  } else "s" != c && "n" != c && (s = !1, f--)
                }
              }
              var u = [],
                h = u.pop.bind(u);
              for (i = 1; i < r.length; i++) {
                var p = r[i];
                u.push(1 == p ? h() | h() : 2 == p ? h() & h() : p ? t(p, a) : !h())
              }
              return !!h()
            },
            r = (r, a, n) => {
              var o = r[a];
              return (a = Object.keys(o).reduce(((r, a) => !t(n, a) || r && !((t, r) => {
                t = e(t), r = e(r);
                for (var a = 0;;) {
                  if (a >= t.length) return a < r.length && "u" != (typeof r[a])[0];
                  var n = t[a],
                    o = (typeof n)[0];
                  if (a >= r.length) return "u" == o;
                  var i = r[a],
                    f = (typeof i)[0];
                  if (o != f) return "o" == o && "n" == f || "s" == f || "u" == o;
                  if ("o" != o && "u" != o && n != i) return n < i;
                  a++
                }
              })(r, a) ? r : a), 0)) && o[a]
            },
            a = (e => function(t, r, a, n) {
              var o = l.I(t);
              return o && o.then ? o.then(e.bind(e, t, l.S[t], r, a, n)) : e(t, l.S[t], r, a, n)
            })(((e, t, a, n, o) => {
              var i = t && l.o(t, a) && r(t, a, n);
              return i ? (e => (e.loaded = 1, e.get()))(i) : o()
            })),
            n = {},
            o = {
              3660: () => a("default", "lodash", [1, 4, 17, 21], (() => l.e(784).then((() => () => l(9784))))),
              1664: () => a("default", "react", [1, 18, 2, 0], (() => l.e(100).then((() => () => l(7100))))),
              4952: () => a("default", "re-resizable", [1, 6, 9, 9], (() => Promise.all([l.e(512), l.e(296)]).then((() => () => l(4512))))),
              8e3: () => a("default", "uuid", [1, 9, 0, 0], (() => l.e(378).then((() => () => l(1378))))),
              7020: () => a("default", "flat", [1, 5, 0, 2], (() => l.e(328).then((() => () => l(1328))))),
              2656: () => a("default", "react-intersection-observer", [1, 9, 4, 0], (() => l.e(776).then((() => () => l(8396))))),
              2296: () => a("default", "react-dom", [1, 18, 2, 0], (() => l.e(848).then((() => () => l(848)))))
            },
            i = {
              272: [7020],
              296: [2296],
              460: [2656],
              660: [3660],
              664: [1664],
              832: [8e3],
              952: [4952]
            },
            f = {};
          l.f.consumes = (e, t) => {
            l.o(i, e) && i[e].forEach((e => {
              if (l.o(n, e)) return t.push(n[e]);
              if (!f[e]) {
                var r = t => {
                  n[e] = 0, l.m[e] = r => {
                    delete l.c[e], r.exports = t()
                  }
                };
                f[e] = !0;
                var a = t => {
                  delete n[e], l.m[e] = r => {
                    throw delete l.c[e], t
                  }
                };
                try {
                  var i = o[e]();
                  i.then ? t.push(n[e] = i.then(r).catch(a)) : r(i)
                } catch (e) {
                  a(e)
                }
              }
            }))
          }
        })(), (() => {
          if ("undefined" != typeof document) {
            var e = {
              924: 0
            };
            l.f.miniCss = (t, r) => {
              e[t] ? r.push(e[t]) : 0 !== e[t] && {
                272: 1,
                460: 1,
                524: 1
              } [t] && r.push(e[t] = (e => new Promise(((t, r) => {
                var a = l.miniCssF(e),
                  n = l.p + a;
                if (((e, t) => {
                    for (var r = document.getElementsByTagName("link"), a = 0; a < r.length; a++) {
                      var n = (i = r[a]).getAttribute("data-href") || i.getAttribute("href");
                      if ("stylesheet" === i.rel && (n === e || n === t)) return i
                    }
                    var o = document.getElementsByTagName("style");
                    for (a = 0; a < o.length; a++) {
                      var i;
                      if ((n = (i = o[a]).getAttribute("data-href")) === e || n === t) return i
                    }
                  })(a, n)) return t();
                ((e, t, r, a, n) => {
                  var o = document.createElement("link");
                  o.rel = "stylesheet", o.type = "text/css", o.onerror = o.onload = r => {
                    if (o.onerror = o.onload = null, "load" === r.type) a();
                    else {
                      var i = r && ("load" === r.type ? "missing" : r.type),
                        f = r && r.target && r.target.href || t,
                        s = new Error("Loading CSS chunk " + e + " failed.\n(" + f + ")");
                      s.code = "CSS_CHUNK_LOAD_FAILED", s.type = i, s.request = f, o.parentNode && o.parentNode.removeChild(o), n(s)
                    }
                  }, o.href = t, document.head.appendChild(o)
                })(e, n, 0, t, r)
              })))(t).then((() => {
                e[t] = 0
              }), (r => {
                throw delete e[t], r
              })))
            }
          }
        })(), (() => {
          var e = {
            924: 0
          };
          l.f.j = (t, r) => {
            var a = l.o(e, t) ? e[t] : void 0;
            if (0 !== a)
              if (a) r.push(a[2]);
              else if (/^(66[04]|296|524|792|952)$/.test(t)) e[t] = 0;
            else {
              var n = new Promise(((r, n) => a = e[t] = [r, n]));
              r.push(a[2] = n);
              var o = l.p + l.u(t),
                i = new Error;
              l.l(o, (r => {
                if (l.o(e, t) && (0 !== (a = e[t]) && (e[t] = void 0), a)) {
                  var n = r && ("load" === r.type ? "missing" : r.type),
                    o = r && r.target && r.target.src;
                  i.message = "Loading chunk " + t + " failed.\n(" + n + ": " + o + ")", i.name = "ChunkLoadError", i.type = n, i.request = o, a[1](i)
                }
              }), "chunk-" + t, t)
            }
          };
          var t = (t, r) => {
              var a, n, o = r[0],
                i = r[1],
                f = r[2],
                s = 0;
              if (o.some((t => 0 !== e[t]))) {
                for (a in i) l.o(i, a) && (l.m[a] = i[a]);
                f && f(l)
              }
              for (t && t(r); s < o.length; s++) n = o[s], l.o(e, n) && e[n] && e[n][0](), e[n] = 0
            },
            r = self.webpackChunk_rockstargames_tina = self.webpackChunk_rockstargames_tina || [];
          r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
        })(), l(3824), l(5436)
      })())
    }
  }
}));
//# sourceMappingURL=remote-entry.js.map