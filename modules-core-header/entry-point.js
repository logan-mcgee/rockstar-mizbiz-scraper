! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "95dd04ea-1d9c-490a-90d0-fe61d9b3f8c3", e._sentryDebugIdIdentifier = "sentry-dbid-95dd04ea-1d9c-490a-90d0-fe61d9b3f8c3")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-header",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register([], (function(e, t) {
  return {
    execute: function() {
      e((() => {
        var e, r, a, o, n, d, l, f, i, s, c, u, p, b, h = {
            6539: (e, t, r) => {
              (0, r(3403).w)(1)
            },
            3403: (e, t, r) => {
              const a = r(5659).y;
              t.w = function(e) {
                if (e || (e = 1), !r.y.meta || !r.y.meta.url) throw console.error("__system_context__", r.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                r.p = a(r.y.meta.url, e)
              }
            },
            2160: (e, t, r) => {
              r(6539)
            },
            5659: (e, t, r) => {
              t.y = function(e, t) {
                var r = document.createElement("a");
                r.href = e;
                for (var a = "/" === r.pathname[0] ? r.pathname : "/" + r.pathname, o = 0, n = a.length; o !== t && n >= 0;) "/" === a[--n] && o++;
                if (o !== t) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + t + ") is greater than the number of directories (" + o + ") in the URL path " + e);
                var d = a.slice(0, n + 1);
                return r.protocol + "//" + r.host + d
              };
              Number.isInteger
            },
            2609: (e, t, r) => {
              "use strict";
              var a = {
                  "./bootstrap": () => Promise.all([r.e(689), r.e(949), r.e(403), r.e(396), r.e(235), r.e(493), r.e(63)]).then((() => () => r(1063))),
                  "./core": () => Promise.all([r.e(689), r.e(949), r.e(403), r.e(396), r.e(235), r.e(344)]).then((() => () => r(4344))),
                  "./index": () => Promise.all([r.e(689), r.e(949), r.e(403), r.e(396), r.e(235)]).then((() => () => r(7905))),
                  "./GlobalNavigationWrapper": () => Promise.all([r.e(403), r.e(396), r.e(592)]).then((() => () => r(9965)))
                },
                o = (e, t) => (r.R = t, t = r.o(a, e) ? a[e]() : Promise.resolve().then((() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                })), r.R = void 0, t),
                n = (e, t) => {
                  if (r.S) {
                    var a = "default",
                      o = r.S[a];
                    if (o && o !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return r.S[a] = e, r.I(a, t)
                  }
                };
              r.d(t, {
                get: () => o,
                init: () => n
              })
            }
          },
          m = {};

        function g(e) {
          var t = m[e];
          if (void 0 !== t) return t.exports;
          var r = m[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return h[e].call(r.exports, r, r.exports, g), r.loaded = !0, r.exports
        }
        return g.m = h, g.c = m, g.y = t, g.amdO = {}, g.n = e => {
          var t = e && e.__esModule ? () => e.default : () => e;
          return g.d(t, {
            a: t
          }), t
        }, r = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, g.t = function(t, a) {
          if (1 & a && (t = this(t)), 8 & a) return t;
          if ("object" == typeof t && t) {
            if (4 & a && t.__esModule) return t;
            if (16 & a && "function" == typeof t.then) return t
          }
          var o = Object.create(null);
          g.r(o);
          var n = {};
          e = e || [null, r({}), r([]), r(r)];
          for (var d = 2 & a && t;
            "object" == typeof d && !~e.indexOf(d); d = r(d)) Object.getOwnPropertyNames(d).forEach((e => n[e] = () => t[e]));
          return n.default = () => t, g.d(o, n), o
        }, g.d = (e, t) => {
          for (var r in t) g.o(t, r) && !g.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: t[r]
          })
        }, g.f = {}, g.e = e => Promise.all(Object.keys(g.f).reduce(((t, r) => (g.f[r](e, t), t)), [])), g.u = e => "js/" + {
          4: "e72207df602fcbc6c1f960e45d70e846",
          63: "dc091b41d1971fd5bd2e62a9b9852efc",
          66: "7e474797898ca0980196708ab6b6e153",
          124: "dbe5eb25b219bcaf8cff88b79896535d",
          143: "a9afd4331ee846049bafd50813c6b8fe",
          149: "b04ab919af9fa6b2e520fcf773de1263",
          189: "c949ddb5da1daedfa7a16bd03d69d7c2",
          235: "169150fe3d6f3ba9569ff3785a2b28ad",
          344: "c3a95e00d8152f415fa08c9c77492241",
          380: "b7311d44fd7fa7b5b5df5aa39dd581c4",
          396: "849cbcfaad31e343ff97ee15c39c6568",
          398: "17ff2ff71baa02930c07542c2452ce64",
          403: "312be5725d20393940e5ec42c154bc62",
          429: "4e417c1ee0bcca77893566ea20960f37",
          493: "a207c78af1164e83038c21316c883ce7",
          524: "6e9270a71baaca78ceda3b4510ae144e",
          533: "0dc29e8ee85a5136461a3a698d1db8d9",
          570: "d96b96a67f90bc42e9385fcbd6c842fc",
          592: "3ffd5bfb4e033c3a7cae4cc0abb72f4d",
          613: "6bd52279e5ca88f2231c7770822f95e6",
          689: "c3b85eac6e23ff623f7d6a9e381135fc",
          749: "6d213eabb5c9c56cbb840e522711f788",
          949: "61d66e77a1c4d5ad7797866c4191aae4",
          984: "0357cc3422b35c53203cab66b04e7d8a",
          994: "47bafdc2059c809dce568c3db79cfd57"
        } [e] + ".js", g.miniCssF = e => "css/2d9bae9261e12d96331790adb279d106.css", g.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), g.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), a = {}, o = "@rockstargames/modules-core-header:", g.l = (e, t, r, n) => {
          if (a[e]) a[e].push(t);
          else {
            var d, l;
            if (void 0 !== r)
              for (var f = document.getElementsByTagName("script"), i = 0; i < f.length; i++) {
                var s = f[i];
                if (s.getAttribute("src") == e || s.getAttribute("data-webpack") == o + r) {
                  d = s;
                  break
                }
              }
            d || (l = !0, (d = document.createElement("script")).charset = "utf-8", d.timeout = 120, g.nc && d.setAttribute("nonce", g.nc), d.setAttribute("data-webpack", o + r), d.src = e), a[e] = [t];
            var c = (t, r) => {
                d.onerror = d.onload = null, clearTimeout(u);
                var o = a[e];
                if (delete a[e], d.parentNode && d.parentNode.removeChild(d), o && o.forEach((e => e(r))), t) return t(r)
              },
              u = setTimeout(c.bind(null, void 0, {
                type: "timeout",
                target: d
              }), 12e4);
            d.onerror = c.bind(null, d.onerror), d.onload = c.bind(null, d.onload), l && document.head.appendChild(d)
          }
        }, g.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, g.nmd = e => (e.paths = [], e.children || (e.children = []), e), (() => {
          g.S = {};
          var e = {},
            t = {};
          g.I = (r, a) => {
            a || (a = []);
            var o = t[r];
            if (o || (o = t[r] = {}), !(a.indexOf(o) >= 0)) {
              if (a.push(o), e[r]) return e[r];
              g.o(g.S, r) || (g.S[r] = {});
              var n = g.S[r],
                d = "@rockstargames/modules-core-header",
                l = (e, t, r, a) => {
                  var o = n[e] = n[e] || {},
                    l = o[t];
                  (!l || !l.loaded && (!a != !l.eager ? a : d > l.from)) && (o[t] = {
                    get: r,
                    from: d,
                    eager: !!a
                  })
                },
                f = [];
              return "default" === r && (l("@popperjs/core", "2.11.8", (() => g.e(124).then((() => () => g(2124))))), l("@rockstargames/locale-tools", "1.0.0", (() => Promise.all([g.e(66), g.e(403), g.e(143)]).then((() => () => g(4143))))), l("framer-motion", "7.10.3", (() => Promise.all([g.e(689), g.e(749), g.e(403)]).then((() => () => g(5749))))), l("gsap", "0.0.0", (() => g.e(149).then((() => () => g(3149))))), l("lodash", "4.17.21", (() => g.e(429).then((() => () => g(9429))))), l("react-dom", "18.2.0", (() => Promise.all([g.e(533), g.e(403)]).then((() => () => g(7533))))), l("react-popper", "2.3.0", (() => Promise.all([g.e(403), g.e(493), g.e(4), g.e(570)]).then((() => () => g(6570))))), l("react-remove-scroll", "2.5.7", (() => Promise.all([g.e(403), g.e(613)]).then((() => () => g(8613))))), l("react-router-dom", "6.17.0", (() => Promise.all([g.e(398), g.e(403)]).then((() => () => g(3398))))), l("react", "18.2.0", (() => g.e(380).then((() => () => g(3380))))), l("spatial-navigation-polyfill", "1.3.1", (() => g.e(984).then((() => () => g(8984)))))), e[r] = f.length ? Promise.all(f).then((() => e[r] = 1)) : 1
            }
          }
        })(), (() => {
          var e;
          g.g.importScripts && (e = g.g.location + "");
          var t = g.g.document;
          if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
            var r = t.getElementsByTagName("script");
            if (r.length)
              for (var a = r.length - 1; a > -1 && (!e || !/^http(s?):/.test(e));) e = r[a--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), g.p = e
        })(), n = e => {
          var t = e => e.split(".").map((e => +e == e ? +e : e)),
            r = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
            a = r[1] ? t(r[1]) : [];
          return r[2] && (a.length++, a.push.apply(a, t(r[2]))), r[3] && (a.push([]), a.push.apply(a, t(r[3]))), a
        }, d = (e, t) => {
          e = n(e), t = n(t);
          for (var r = 0;;) {
            if (r >= e.length) return r < t.length && "u" != (typeof t[r])[0];
            var a = e[r],
              o = (typeof a)[0];
            if (r >= t.length) return "u" == o;
            var d = t[r],
              l = (typeof d)[0];
            if (o != l) return "o" == o && "n" == l || "s" == l || "u" == o;
            if ("o" != o && "u" != o && a != d) return a < d;
            r++
          }
        }, l = (e, t) => {
          if (0 in e) {
            t = n(t);
            var r = e[0],
              a = r < 0;
            a && (r = -r - 1);
            for (var o = 0, d = 1, f = !0;; d++, o++) {
              var i, s, c = d < e.length ? (typeof e[d])[0] : "";
              if (o >= t.length || "o" == (s = (typeof(i = t[o]))[0])) return !f || ("u" == c ? d > r && !a : "" == c != a);
              if ("u" == s) {
                if (!f || "u" != c) return !1
              } else if (f)
                if (c == s)
                  if (d <= r) {
                    if (i != e[d]) return !1
                  } else {
                    if (a ? i > e[d] : i < e[d]) return !1;
                    i != e[d] && (f = !1)
                  }
              else if ("s" != c && "n" != c) {
                if (a || d <= r) return !1;
                f = !1, d--
              } else {
                if (d <= r || s < c != a) return !1;
                f = !1
              } else "s" != c && "n" != c && (f = !1, d--)
            }
          }
          var u = [],
            p = u.pop.bind(u);
          for (o = 1; o < e.length; o++) {
            var b = e[o];
            u.push(1 == b ? p() | p() : 2 == b ? p() & p() : b ? l(b, t) : !p())
          }
          return !!p()
        }, f = (e, t, r) => {
          var a = e[t];
          return (t = Object.keys(a).reduce(((e, t) => !l(r, t) || e && !d(e, t) ? e : t), 0)) && a[t]
        }, i = e => (e.loaded = 1, e.get()), s = (e => function(t, r, a, o) {
          var n = g.I(t);
          return n && n.then ? n.then(e.bind(e, t, g.S[t], r, a, o)) : e(0, g.S[t], r, a, o)
        })(((e, t, r, a, o) => {
          var n = t && g.o(t, r) && f(t, r, a);
          return n ? i(n) : o()
        })), c = {}, u = {
          1403: () => s("default", "react", [1, 18, 2, 0], (() => g.e(380).then((() => () => g(3380))))),
          6717: () => s("default", "@rockstargames/locale-tools", [1, "workspace:*"], (() => Promise.all([g.e(66), g.e(524)]).then((() => () => g(4143))))),
          3181: () => s("default", "framer-motion", [1, 7, 5, 1], (() => g.e(749).then((() => () => g(5749))))),
          4252: () => s("default", "lodash", [1, 4, 17, 21], (() => g.e(429).then((() => () => g(9429))))),
          6040: () => s("default", "gsap", [1, "workspace:*"], (() => g.e(149).then((() => () => g(3149))))),
          6649: () => s("default", "spatial-navigation-polyfill", [1, 1, 3, 1], (() => g.e(984).then((() => () => g(8984))))),
          7460: () => s("default", "react-remove-scroll", [1, 2, 5, 7], (() => g.e(994).then((() => () => g(8613))))),
          8588: () => s("default", "react-popper", [1, 2, 3, 0], (() => Promise.all([g.e(493), g.e(4), g.e(189)]).then((() => () => g(6570))))),
          9779: () => s("default", "react-router-dom", [1, 6, 11, 2], (() => g.e(398).then((() => () => g(3398))))),
          9493: () => s("default", "react-dom", [1, 18, 2, 0], (() => g.e(533).then((() => () => g(7533))))),
          5004: () => s("default", "@popperjs/core", [1, 2, 11, 8], (() => g.e(124).then((() => () => g(2124)))))
        }, p = {
          4: [5004],
          235: [3181, 4252, 6040, 6649, 7460, 8588, 9779],
          396: [6717],
          403: [1403],
          493: [9493]
        }, b = {}, g.f.consumes = (e, t) => {
          g.o(p, e) && p[e].forEach((e => {
            if (g.o(c, e)) return t.push(c[e]);
            if (!b[e]) {
              var r = t => {
                c[e] = 0, g.m[e] = r => {
                  delete g.c[e], r.exports = t()
                }
              };
              b[e] = !0;
              var a = t => {
                delete c[e], g.m[e] = r => {
                  throw delete g.c[e], t
                }
              };
              try {
                var o = u[e]();
                o.then ? t.push(c[e] = o.then(r).catch(a)) : r(o)
              } catch (e) {
                a(e)
              }
            }
          }))
        }, (() => {
          if ("undefined" != typeof document) {
            var e = {
              295: 0
            };
            g.f.miniCss = (t, r) => {
              e[t] ? r.push(e[t]) : 0 !== e[t] && {
                235: 1
              } [t] && r.push(e[t] = (e => new Promise(((t, r) => {
                var a = g.miniCssF(e),
                  o = g.p + a;
                if (((e, t) => {
                    for (var r = document.getElementsByTagName("link"), a = 0; a < r.length; a++) {
                      var o = (d = r[a]).getAttribute("data-href") || d.getAttribute("href");
                      if ("stylesheet" === d.rel && (o === e || o === t)) return d
                    }
                    var n = document.getElementsByTagName("style");
                    for (a = 0; a < n.length; a++) {
                      var d;
                      if ((o = (d = n[a]).getAttribute("data-href")) === e || o === t) return d
                    }
                  })(a, o)) return t();
                ((e, t, r, a, o) => {
                  var n = document.createElement("link");
                  n.rel = "stylesheet", n.type = "text/css", n.onerror = n.onload = r => {
                    if (n.onerror = n.onload = null, "load" === r.type) a();
                    else {
                      var d = r && ("load" === r.type ? "missing" : r.type),
                        l = r && r.target && r.target.href || t,
                        f = new Error("Loading CSS chunk " + e + " failed.\n(" + l + ")");
                      f.code = "CSS_CHUNK_LOAD_FAILED", f.type = d, f.request = l, n.parentNode && n.parentNode.removeChild(n), o(f)
                    }
                  }, n.href = t, document.head.appendChild(n)
                })(e, o, 0, t, r)
              })))(t).then((() => {
                e[t] = 0
              }), (r => {
                throw delete e[t], r
              })))
            }
          }
        })(), (() => {
          var e = {
            295: 0
          };
          g.f.j = (t, r) => {
            var a = g.o(e, t) ? e[t] : void 0;
            if (0 !== a)
              if (a) r.push(a[2]);
              else if (/^4(|03|93)$/.test(t)) e[t] = 0;
            else {
              var o = new Promise(((r, o) => a = e[t] = [r, o]));
              r.push(a[2] = o);
              var n = g.p + g.u(t),
                d = new Error;
              g.l(n, (r => {
                if (g.o(e, t) && (0 !== (a = e[t]) && (e[t] = void 0), a)) {
                  var o = r && ("load" === r.type ? "missing" : r.type),
                    n = r && r.target && r.target.src;
                  d.message = "Loading chunk " + t + " failed.\n(" + o + ": " + n + ")", d.name = "ChunkLoadError", d.type = o, d.request = n, a[1](d)
                }
              }), "chunk-" + t, t)
            }
          };
          var t = (t, r) => {
              var a, o, n = r[0],
                d = r[1],
                l = r[2],
                f = 0;
              if (n.some((t => 0 !== e[t]))) {
                for (a in d) g.o(d, a) && (g.m[a] = d[a]);
                l && l(g)
              }
              for (t && t(r); f < n.length; f++) o = n[f], g.o(e, o) && e[o] && e[o][0](), e[o] = 0
            },
            r = self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || [];
          r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
        })(), g.nc = void 0, g(2160), g(2609)
      })())
    }
  }
}));