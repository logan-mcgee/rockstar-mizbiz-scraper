! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "9a479e79-1c0c-445a-a0d2-734771beec5c", e._sentryDebugIdIdentifier = "sentry-dbid-9a479e79-1c0c-445a-a0d2-734771beec5c")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/graph-client",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register([], (function(e, t) {
  return {
    execute: function() {
      e((() => {
        var e, r, a, n, o, i, d = {
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
            6904: (e, t, r) => {
              "use strict";
              var a = {
                  "./bootstrap": () => r.e(184).then((() => () => r(3184))),
                  "./index": () => Promise.all([r.e(244), r.e(664), r.e(336), r.e(240), r.e(500)]).then((() => () => r(1408))),
                  "./operations/fragments/": () => r.e(744).then((() => () => r(9744))),
                  "./operations/fragments/newswire-post.graphql": () => r.e(544).then((() => () => r(4544))),
                  "./operations/fragments/paging.graphql": () => r.e(840).then((() => () => r(6840))),
                  "./operations/fragments/video-fields.graphql": () => r.e(252).then((() => () => r(8252))),
                  "./operations/fragments/video2-fields.graphql": () => r.e(980).then((() => () => r(3980))),
                  "./operations/queries": () => r.e(352).then((() => () => r(6352))),
                  "./operations/queries/videos.graphql": () => r.e(392).then((() => () => r(2011))),
                  "./operations/queries/videos2.graphql": () => r.e(572).then((() => () => r(7572))),
                  "./reactive": () => Promise.all([r.e(336), r.e(920)]).then((() => () => r(1920)))
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
            }
          },
          f = {};

        function s(e) {
          var t = f[e];
          if (void 0 !== t) return t.exports;
          var r = f[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return d[e].call(r.exports, r, r.exports, s), r.loaded = !0, r.exports
        }
        return s.m = d, s.c = f, s.y = t, s.n = e => {
          var t = e && e.__esModule ? () => e.default : () => e;
          return s.d(t, {
            a: t
          }), t
        }, r = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, s.t = function(t, a) {
          if (1 & a && (t = this(t)), 8 & a) return t;
          if ("object" == typeof t && t) {
            if (4 & a && t.__esModule) return t;
            if (16 & a && "function" == typeof t.then) return t
          }
          var n = Object.create(null);
          s.r(n);
          var o = {};
          e = e || [null, r({}), r([]), r(r)];
          for (var i = 2 & a && t;
            "object" == typeof i && !~e.indexOf(i); i = r(i)) Object.getOwnPropertyNames(i).forEach((e => o[e] = () => t[e]));
          return o.default = () => t, s.d(n, o), n
        }, s.d = (e, t) => {
          for (var r in t) s.o(t, r) && !s.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: t[r]
          })
        }, s.f = {}, s.e = e => Promise.all(Object.keys(s.f).reduce(((t, r) => (s.f[r](e, t), t)), [])), s.u = e => "js/" + {
          100: "147687daefac4ee62044cf47ff81a738",
          132: "3a713cd554cc4d73b40568e42e104c79",
          184: "64407995f7df80f0de2124598a1bf4e4",
          240: "db1fa215ec182e50aad23e2315dafd54",
          244: "710d7b7e8da10f06fe74d29cd6741ca9",
          252: "84de1c5318fa8351a624039eade0a196",
          336: "a906914f2b007748a5ae6102d7a9cac5",
          344: "5432755c33557f0c674461fe4638089a",
          352: "c26d79a319ee83e01951dab8e3f02f6a",
          392: "2b865c16bfee357e4078f3f73abeb26f",
          460: "e949ceb143921118c6a57d1269e0255c",
          500: "e8a319d3555d39fd4b973e66a2f464ec",
          544: "0afead89f9339661b50fc1f01775ff46",
          560: "7d3e162b626eac7d24906e6c902eb9bd",
          572: "2f76c0d94909667a62ef31b6b91a137f",
          664: "cf2ca239e86ade32ed3d63ffaf2daea0",
          716: "a592f31bfc77da8c67876bef114a8fa3",
          744: "df4fb55fc40c3813d8113558b49f84f0",
          784: "27d0a5f596a90457d71bc3872c08c80b",
          840: "bbc62cfb761d3a924d84424e9193d02e",
          920: "f33655ec49f0517b65328274ec0c1448",
          980: "fa82dc46c93a017fbbf14e6290c3fce3"
        } [e] + ".js", s.miniCssF = e => {}, s.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), s.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), a = {}, n = "@rockstargames/graph-client:", s.l = (e, t, r, o) => {
          if (a[e]) a[e].push(t);
          else {
            var i, d;
            if (void 0 !== r)
              for (var f = document.getElementsByTagName("script"), c = 0; c < f.length; c++) {
                var l = f[c];
                if (l.getAttribute("src") == e || l.getAttribute("data-webpack") == n + r) {
                  i = l;
                  break
                }
              }
            i || (d = !0, (i = document.createElement("script")).charset = "utf-8", i.timeout = 120, s.nc && i.setAttribute("nonce", s.nc), i.setAttribute("data-webpack", n + r), i.src = e), a[e] = [t];
            var u = (t, r) => {
                i.onerror = i.onload = null, clearTimeout(p);
                var n = a[e];
                if (delete a[e], i.parentNode && i.parentNode.removeChild(i), n && n.forEach((e => e(r))), t) return t(r)
              },
              p = setTimeout(u.bind(null, void 0, {
                type: "timeout",
                target: i
              }), 12e4);
            i.onerror = u.bind(null, i.onerror), i.onload = u.bind(null, i.onload), d && document.head.appendChild(i)
          }
        }, s.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, s.nmd = e => (e.paths = [], e.children || (e.children = []), e), o = {}, i = {}, s.f.remotes = (e, t) => {
          s.o(o, e) && o[e].forEach((e => {
            var r = s.R;
            r || (r = []);
            var a = i[e];
            if (!(r.indexOf(a) >= 0)) {
              if (r.push(a), a.p) return t.push(a.p);
              var n = t => {
                  t || (t = new Error("Container missing")), "string" == typeof t.message && (t.message += '\nwhile loading "' + a[1] + '" from ' + a[2]), s.m[e] = () => {
                    throw t
                  }, a.p = 0
                },
                o = (e, r, o, i, d, f) => {
                  try {
                    var s = e(r, o);
                    if (!s || !s.then) return d(s, i, f);
                    var c = s.then((e => d(e, i)), n);
                    if (!f) return c;
                    t.push(a.p = c)
                  } catch (e) {
                    n(e)
                  }
                },
                d = (e, t, n) => o(t.get, a[1], r, 0, f, n),
                f = t => {
                  a.p = 1, s.m[e] = e => {
                    e.exports = t()
                  }
                };
              o(s, a[2], 0, 0, ((e, t, r) => e ? o(s.I, a[0], 0, e, d, r) : n()), 1)
            }
          }))
        }, (() => {
          s.S = {};
          var e = {},
            t = {};
          s.I = (r, a) => {
            a || (a = []);
            var n = t[r];
            if (n || (n = t[r] = {}), !(a.indexOf(n) >= 0)) {
              if (a.push(n), e[r]) return e[r];
              s.o(s.S, r) || (s.S[r] = {});
              var o = s.S[r],
                i = "@rockstargames/graph-client",
                d = (e, t, r, a) => {
                  var n = o[e] = o[e] || {},
                    d = n[t];
                  (!d || !d.loaded && (!a != !d.eager ? a : i > d.from)) && (n[t] = {
                    get: r,
                    from: i,
                    eager: !!a
                  })
                },
                f = [];
              return "default" === r && (d("@apollo/client", "3.7.17", (() => Promise.all([s.e(244), s.e(460), s.e(664)]).then((() => () => s(5460))))), d("cross-fetch", "3.1.8", (() => s.e(344).then((() => () => s(1344))))), d("crypto-hash", "2.0.1", (() => s.e(560).then((() => () => s(2560))))), d("lodash", "4.17.21", (() => s.e(784).then((() => () => s(9784))))), d("react-dom", "18.2.0", (() => Promise.all([s.e(716), s.e(664)]).then((() => () => s(3716))))), d("react", "18.2.0", (() => s.e(100).then((() => () => s(7100)))))), e[r] = f.length ? Promise.all(f).then((() => e[r] = 1)) : 1
            }
          }
        })(), (() => {
          var e;
          s.g.importScripts && (e = s.g.location + "");
          var t = s.g.document;
          if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
            var r = t.getElementsByTagName("script");
            if (r.length)
              for (var a = r.length - 1; a > -1 && !e;) e = r[a--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), s.p = e
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
                for (var i = 0, d = 1, f = !0;; d++, i++) {
                  var s, c, l = d < r.length ? (typeof r[d])[0] : "";
                  if (i >= a.length || "o" == (c = (typeof(s = a[i]))[0])) return !f || ("u" == l ? d > n && !o : "" == l != o);
                  if ("u" == c) {
                    if (!f || "u" != l) return !1
                  } else if (f)
                    if (l == c)
                      if (d <= n) {
                        if (s != r[d]) return !1
                      } else {
                        if (o ? s > r[d] : s < r[d]) return !1;
                        s != r[d] && (f = !1)
                      }
                  else if ("s" != l && "n" != l) {
                    if (o || d <= n) return !1;
                    f = !1, d--
                  } else {
                    if (d <= n || c < l != o) return !1;
                    f = !1
                  } else "s" != l && "n" != l && (f = !1, d--)
                }
              }
              var u = [],
                p = u.pop.bind(u);
              for (i = 1; i < r.length; i++) {
                var h = r[i];
                u.push(1 == h ? p() | p() : 2 == h ? p() & p() : h ? t(h, a) : !p())
              }
              return !!p()
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
                    d = (typeof i)[0];
                  if (o != d) return "o" == o && "n" == d || "s" == d || "u" == o;
                  if ("o" != o && "u" != o && n != i) return n < i;
                  a++
                }
              })(r, a) ? r : a), 0)) && o[a]
            },
            a = (e => function(t, r, a, n) {
              var o = s.I(t);
              return o && o.then ? o.then(e.bind(e, t, s.S[t], r, a, n)) : e(t, s.S[t], r, a, n)
            })(((e, t, a, n, o) => {
              var i = t && s.o(t, a) && r(t, a, n);
              return i ? (e => (e.loaded = 1, e.get()))(i) : o()
            })),
            n = {},
            o = {
              1664: () => a("default", "react", [1, 18, 2, 0], (() => s.e(100).then((() => () => s(7100))))),
              3336: () => a("default", "@apollo/client", [2, 3, 7], (() => Promise.all([s.e(244), s.e(460), s.e(664)]).then((() => () => s(5460))))),
              456: () => a("default", "crypto-hash", [1, 2, 0, 1], (() => s.e(560).then((() => () => s(2560))))),
              3660: () => a("default", "lodash", [1, 4, 17, 21], (() => s.e(784).then((() => () => s(9784))))),
              6020: () => a("default", "cross-fetch", [1, 3, 1, 5], (() => s.e(344).then((() => () => s(1344))))),
              7364: () => a("default", "react-dom", [1, 18, 2, 0], (() => s.e(716).then((() => () => s(3716)))))
            },
            i = {
              132: [7364],
              240: [456, 3660, 6020],
              336: [3336],
              664: [1664]
            },
            d = {};
          s.f.consumes = (e, t) => {
            s.o(i, e) && i[e].forEach((e => {
              if (s.o(n, e)) return t.push(n[e]);
              if (!d[e]) {
                var r = t => {
                  n[e] = 0, s.m[e] = r => {
                    delete s.c[e], r.exports = t()
                  }
                };
                d[e] = !0;
                var a = t => {
                  delete n[e], s.m[e] = r => {
                    throw delete s.c[e], t
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
          var e = {
            136: 0
          };
          s.f.j = (t, r) => {
            var a = s.o(e, t) ? e[t] : void 0;
            if (0 !== a)
              if (a) r.push(a[2]);
              else if (/^(240|336|664)$/.test(t)) e[t] = 0;
            else {
              var n = new Promise(((r, n) => a = e[t] = [r, n]));
              r.push(a[2] = n);
              var o = s.p + s.u(t),
                i = new Error;
              s.l(o, (r => {
                if (s.o(e, t) && (0 !== (a = e[t]) && (e[t] = void 0), a)) {
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
                d = r[2],
                f = 0;
              if (o.some((t => 0 !== e[t]))) {
                for (a in i) s.o(i, a) && (s.m[a] = i[a]);
                d && d(s)
              }
              for (t && t(r); f < o.length; f++) n = o[f], s.o(e, n) && e[n] && e[n][0](), e[n] = 0
            },
            r = self.webpackChunk_rockstargames_graph_client = self.webpackChunk_rockstargames_graph_client || [];
          r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
        })(), s(3824), s(6904)
      })())
    }
  }
}));