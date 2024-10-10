! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "72732d06-d41f-4a25-b6b0-93141f6f7c95", e._sentryDebugIdIdentifier = "sentry-dbid-72732d06-d41f-4a25-b6b0-93141f6f7c95")
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
        var e, r, a, o, n, d, l, i, f, c, s, u, b, p, h = {
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
                  "./bootstrap": () => Promise.all([r.e(689), r.e(117), r.e(403), r.e(344), r.e(493), r.e(63)]).then((() => () => r(1063))),
                  "./core": () => Promise.all([r.e(689), r.e(117), r.e(403), r.e(344), r.e(963)]).then((() => () => r(4344))),
                  "./index": () => Promise.all([r.e(689), r.e(117), r.e(403), r.e(344)]).then((() => () => r(7573))),
                  "./GlobalNavigationWrapper": () => r.e(398).then((() => () => r(9398)))
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
          2: "699c0f5b298b9c6473153225dbc972ce",
          4: "e72207df602fcbc6c1f960e45d70e846",
          49: "be12f680108380bcd734a2d0585ee7fa",
          63: "30f580fcc2c368d06ee6cce10f0c6c42",
          66: "ab978ef35ce0568d89d277c83ee0f6b0",
          117: "15c81aad2191c688fbd5c77320eb0f94",
          124: "73c57364e5de6133b4ee902fb5ff84a2",
          143: "46ed6d37464d3563d603dbed1688d914",
          149: "e7175537f604aa788f09f14da3238eae",
          189: "b24d218fcb200f9752392160295b49ab",
          240: "18146f49822ae3c647a99a76c1bd70cd",
          261: "d7a5c2a8d529fe9d9c4261c9ed9f3762",
          344: "aae3e5b908719ab512672ad73e38bb2d",
          380: "eadb99fd84f34cb4b28233262cf3c184",
          398: "480634534b418b1deda2b2f3f39eb061",
          403: "312be5725d20393940e5ec42c154bc62",
          410: "b0adfba5de6db44a0a9d45fc7a4aa7d1",
          429: "bb63b1f87473d0edd95e016fbf3097ba",
          493: "a207c78af1164e83038c21316c883ce7",
          533: "0e8635eb9f9ad79e79c37d92bb61c658",
          570: "a69de7c68e693920464b44e7a5e863bb",
          613: "4b273001ef7fba37f82f80a3fbb79957",
          621: "cc512a26cd1998e4cc0969ec59e2e609",
          689: "4ad5c704ea41f3c60e4f699fa9d82f17",
          749: "0df4b8629ed10d5c39ba28724a361a70",
          776: "4a851840b794b931e04e0265b161fc43",
          963: "7149a279469940ddc8e965ecf79c762d",
          984: "60544b8ac9dff7fb3ce89065de3c7edd",
          994: "455fd9f37c1fa5290c10e78e54edaa87"
        } [e] + ".js", g.miniCssF = e => "css/9a53a8b81ead338fc25bea67c951a356.css", g.g = function() {
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
              for (var i = document.getElementsByTagName("script"), f = 0; f < i.length; f++) {
                var c = i[f];
                if (c.getAttribute("src") == e || c.getAttribute("data-webpack") == o + r) {
                  d = c;
                  break
                }
              }
            d || (l = !0, (d = document.createElement("script")).charset = "utf-8", d.timeout = 120, g.nc && d.setAttribute("nonce", g.nc), d.setAttribute("data-webpack", o + r), d.src = e), a[e] = [t];
            var s = (t, r) => {
                d.onerror = d.onload = null, clearTimeout(u);
                var o = a[e];
                if (delete a[e], d.parentNode && d.parentNode.removeChild(d), o && o.forEach((e => e(r))), t) return t(r)
              },
              u = setTimeout(s.bind(null, void 0, {
                type: "timeout",
                target: d
              }), 12e4);
            d.onerror = s.bind(null, d.onerror), d.onload = s.bind(null, d.onload), l && document.head.appendChild(d)
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
                i = [];
              return "default" === r && (l("@popperjs/core", "2.11.8", (() => g.e(124).then((() => () => g(2124))))), l("@rockstargames/locale-tools", "1.0.0", (() => Promise.all([g.e(66), g.e(403), g.e(240)]).then((() => () => g(4143))))), l("@rockstargames/router", "1.0.0", (() => Promise.all([g.e(403), g.e(410), g.e(621)]).then((() => () => g(3002))))), l("framer-motion", "7.10.3", (() => Promise.all([g.e(689), g.e(749), g.e(403)]).then((() => () => g(5749))))), l("gsap", "0.0.0", (() => g.e(149).then((() => () => g(3149))))), l("lodash", "4.17.21", (() => g.e(429).then((() => () => g(9429))))), l("react-dom", "18.2.0", (() => Promise.all([g.e(533), g.e(403)]).then((() => () => g(7533))))), l("react-popper", "2.3.0", (() => Promise.all([g.e(403), g.e(493), g.e(4), g.e(570)]).then((() => () => g(6570))))), l("react-remove-scroll", "2.5.7", (() => Promise.all([g.e(403), g.e(613)]).then((() => () => g(8613))))), l("react-router-dom", "6.17.0", (() => Promise.all([g.e(261), g.e(49), g.e(403)]).then((() => () => g(2049))))), l("react-router-dom", "6.17.0", (() => Promise.all([g.e(261), g.e(776), g.e(403)]).then((() => () => g(2776))))), l("react", "18.2.0", (() => g.e(380).then((() => () => g(3380))))), l("spatial-navigation-polyfill", "1.3.1", (() => g.e(984).then((() => () => g(8984)))))), e[r] = i.length ? Promise.all(i).then((() => e[r] = 1)) : 1
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
            for (var o = 0, d = 1, i = !0;; d++, o++) {
              var f, c, s = d < e.length ? (typeof e[d])[0] : "";
              if (o >= t.length || "o" == (c = (typeof(f = t[o]))[0])) return !i || ("u" == s ? d > r && !a : "" == s != a);
              if ("u" == c) {
                if (!i || "u" != s) return !1
              } else if (i)
                if (s == c)
                  if (d <= r) {
                    if (f != e[d]) return !1
                  } else {
                    if (a ? f > e[d] : f < e[d]) return !1;
                    f != e[d] && (i = !1)
                  }
              else if ("s" != s && "n" != s) {
                if (a || d <= r) return !1;
                i = !1, d--
              } else {
                if (d <= r || c < s != a) return !1;
                i = !1
              } else "s" != s && "n" != s && (i = !1, d--)
            }
          }
          var u = [],
            b = u.pop.bind(u);
          for (o = 1; o < e.length; o++) {
            var p = e[o];
            u.push(1 == p ? b() | b() : 2 == p ? b() & b() : p ? l(p, t) : !b())
          }
          return !!b()
        }, i = (e, t, r) => {
          var a = e[t];
          return (t = Object.keys(a).reduce(((e, t) => !l(r, t) || e && !d(e, t) ? e : t), 0)) && a[t]
        }, f = e => (e.loaded = 1, e.get()), c = (e => function(t, r, a, o) {
          var n = g.I(t);
          return n && n.then ? n.then(e.bind(e, t, g.S[t], r, a, o)) : e(0, g.S[t], r, a, o)
        })(((e, t, r, a, o) => {
          var n = t && g.o(t, r) && i(t, r, a);
          return n ? f(n) : o()
        })), s = {}, u = {
          1403: () => c("default", "react", [1, 18, 2, 0], (() => g.e(380).then((() => () => g(3380))))),
          3181: () => c("default", "framer-motion", [1, 7, 5, 1], (() => g.e(749).then((() => () => g(5749))))),
          4252: () => c("default", "lodash", [1, 4, 17, 21], (() => g.e(429).then((() => () => g(9429))))),
          5301: () => c("default", "@rockstargames/router", [1, "workspace:*"], (() => Promise.all([g.e(410), g.e(2)]).then((() => () => g(3002))))),
          6040: () => c("default", "gsap", [1, "workspace:*"], (() => g.e(149).then((() => () => g(3149))))),
          6649: () => c("default", "spatial-navigation-polyfill", [1, 1, 3, 1], (() => g.e(984).then((() => () => g(8984))))),
          6717: () => c("default", "@rockstargames/locale-tools", [1, "workspace:*"], (() => Promise.all([g.e(66), g.e(143)]).then((() => () => g(4143))))),
          7460: () => c("default", "react-remove-scroll", [1, 2, 5, 7], (() => g.e(994).then((() => () => g(8613))))),
          8588: () => c("default", "react-popper", [1, 2, 3, 0], (() => Promise.all([g.e(493), g.e(4), g.e(189)]).then((() => () => g(6570))))),
          9779: () => c("default", "react-router-dom", [1, 6, 11, 2], (() => Promise.all([g.e(261), g.e(49)]).then((() => () => g(2049))))),
          9493: () => c("default", "react-dom", [1, 18, 2, 0], (() => g.e(533).then((() => () => g(7533))))),
          4410: () => c("default", "react-router-dom", [1, 6, 11, 2], (() => Promise.all([g.e(261), g.e(776)]).then((() => () => g(2776))))),
          5004: () => c("default", "@popperjs/core", [1, 2, 11, 8], (() => g.e(124).then((() => () => g(2124)))))
        }, b = {
          4: [5004],
          344: [3181, 4252, 5301, 6040, 6649, 6717, 7460, 8588, 9779],
          403: [1403],
          410: [4410],
          493: [9493]
        }, p = {}, g.f.consumes = (e, t) => {
          g.o(b, e) && b[e].forEach((e => {
            if (g.o(s, e)) return t.push(s[e]);
            if (!p[e]) {
              var r = t => {
                s[e] = 0, g.m[e] = r => {
                  delete g.c[e], r.exports = t()
                }
              };
              p[e] = !0;
              var a = t => {
                delete s[e], g.m[e] = r => {
                  throw delete g.c[e], t
                }
              };
              try {
                var o = u[e]();
                o.then ? t.push(s[e] = o.then(r).catch(a)) : r(o)
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
                344: 1
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
                        i = new Error("Loading CSS chunk " + e + " failed.\n(" + l + ")");
                      i.code = "CSS_CHUNK_LOAD_FAILED", i.type = d, i.request = l, n.parentNode && n.parentNode.removeChild(n), o(i)
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
              else if (/^4(|03|10|93)$/.test(t)) e[t] = 0;
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
                i = 0;
              if (n.some((t => 0 !== e[t]))) {
                for (a in d) g.o(d, a) && (g.m[a] = d[a]);
                l && l(g)
              }
              for (t && t(r); i < n.length; i++) o = n[i], g.o(e, o) && e[o] && e[o][0](), e[o] = 0
            },
            r = self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || [];
          r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
        })(), g.nc = void 0, g(2160), g(2609)
      })())
    }
  }
}));