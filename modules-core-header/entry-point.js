! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "f21e9eff-47aa-4b25-ac80-aa0eaf1c70d1", e._sentryDebugIdIdentifier = "sentry-dbid-f21e9eff-47aa-4b25-ac80-aa0eaf1c70d1")
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
        var e, r, a, o, n, d, f, l, i, c, s, u, b, p, h = {
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
                  "./bootstrap": () => Promise.all([r.e(689), r.e(2), r.e(196), r.e(403), r.e(834), r.e(344), r.e(493), r.e(63)]).then((() => () => r(1063))),
                  "./core": () => Promise.all([r.e(689), r.e(2), r.e(196), r.e(403), r.e(834), r.e(344), r.e(963)]).then((() => () => r(4344))),
                  "./index": () => Promise.all([r.e(689), r.e(2), r.e(196), r.e(403), r.e(834), r.e(344)]).then((() => () => r(7573))),
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
        return g.m = h, g.c = m, g.y = t, g.n = e => {
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
          2: "604c03ec3848118077a6c9ba95a6a8ae",
          4: "e72207df602fcbc6c1f960e45d70e846",
          49: "1d6f65e24b64e3f8aa04e347bc63a2c4",
          63: "e144191bec2f9685293250e3e9de7c8f",
          66: "3a548b9a79d35d267d872ff2fba6975c",
          124: "adbd21ee03cb9b19e17ee8e39af177be",
          143: "3981c2c8aea4b36f7834b2d2ca11b64a",
          149: "e59c1b65821f42d1c85e92ce980dc439",
          189: "eaab33ed847c8029a0bd2f345e6ac2b8",
          196: "888da49aeeca6a7258204fec513f80cf",
          261: "037678c56e72e3d37e4091a5d1f5a7f6",
          344: "6ff938af56cbcb25971be38032aa0bd1",
          380: "4de4e9478cfc494417bf0b7ad71013b7",
          398: "d4a31c6576ef7479b94f891fd3ea456f",
          403: "312be5725d20393940e5ec42c154bc62",
          410: "b0adfba5de6db44a0a9d45fc7a4aa7d1",
          429: "31003594092338d91ffd84e59189e873",
          493: "a207c78af1164e83038c21316c883ce7",
          524: "06f90800483a8418c4b84dfa88afa2ae",
          533: "845990a09c5ae9e14ee930b7f56a87d9",
          570: "b198b64fae9347c976a2836fefd38bf1",
          613: "2dce492ea92edb622e41a4a124d989cc",
          621: "63abb8df15e60dc85f0ab2bc8f1e041c",
          689: "a97d4f87da2fc713376ba2a47fdf3290",
          749: "797bcc1fdcb35452283cbacb308649a8",
          764: "0e1316498940610c490d9657feb7af31",
          776: "1105e3ba3181ced13f326e06519fb466",
          834: "b8482f3c3645702f7b2647f50ad3a312",
          963: "2fbb48d3a986f602539359bfd4f6ad48",
          984: "b6313d2c1f89981e15cb6f75954905cf",
          994: "65e44a82ae2bea96ce08869acfcd9e5e"
        } [e] + ".js", g.miniCssF = e => "css/cfea06fed72e07f047da38be2dedbbd5.css", g.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), g.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), a = {}, o = "@rockstargames/modules-core-header:", g.l = (e, t, r, n) => {
          if (a[e]) a[e].push(t);
          else {
            var d, f;
            if (void 0 !== r)
              for (var l = document.getElementsByTagName("script"), i = 0; i < l.length; i++) {
                var c = l[i];
                if (c.getAttribute("src") == e || c.getAttribute("data-webpack") == o + r) {
                  d = c;
                  break
                }
              }
            d || (f = !0, (d = document.createElement("script")).charset = "utf-8", d.timeout = 120, g.nc && d.setAttribute("nonce", g.nc), d.setAttribute("data-webpack", o + r), d.src = e), a[e] = [t];
            var s = (t, r) => {
                d.onerror = d.onload = null, clearTimeout(u);
                var o = a[e];
                if (delete a[e], d.parentNode && d.parentNode.removeChild(d), o && o.forEach((e => e(r))), t) return t(r)
              },
              u = setTimeout(s.bind(null, void 0, {
                type: "timeout",
                target: d
              }), 12e4);
            d.onerror = s.bind(null, d.onerror), d.onload = s.bind(null, d.onload), f && document.head.appendChild(d)
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
                f = (e, t, r, a) => {
                  var o = n[e] = n[e] || {},
                    f = o[t];
                  (!f || !f.loaded && (!a != !f.eager ? a : d > f.from)) && (o[t] = {
                    get: r,
                    from: d,
                    eager: !!a
                  })
                },
                l = [];
              return "default" === r && (f("@popperjs/core", "2.11.8", (() => g.e(124).then((() => () => g(2124))))), f("@rockstargames/locale-tools", "1.0.0", (() => Promise.all([g.e(689), g.e(2), g.e(66), g.e(403), g.e(834), g.e(143)]).then((() => () => g(4143))))), f("@rockstargames/router", "1.0.0", (() => Promise.all([g.e(403), g.e(410), g.e(764)]).then((() => () => g(3002))))), f("framer-motion", "7.10.3", (() => Promise.all([g.e(689), g.e(749), g.e(403)]).then((() => () => g(5749))))), f("gsap", "0.0.0", (() => g.e(149).then((() => () => g(3149))))), f("lodash", "4.17.21", (() => g.e(429).then((() => () => g(9429))))), f("react-dom", "18.2.0", (() => Promise.all([g.e(533), g.e(403)]).then((() => () => g(7533))))), f("react-popper", "2.3.0", (() => Promise.all([g.e(403), g.e(493), g.e(4), g.e(570)]).then((() => () => g(6570))))), f("react-remove-scroll", "2.5.7", (() => Promise.all([g.e(403), g.e(613)]).then((() => () => g(8613))))), f("react-router-dom", "6.17.0", (() => Promise.all([g.e(261), g.e(49), g.e(403)]).then((() => () => g(2049))))), f("react-router-dom", "6.17.0", (() => Promise.all([g.e(261), g.e(776), g.e(403)]).then((() => () => g(2776))))), f("react", "18.2.0", (() => g.e(380).then((() => () => g(3380))))), f("spatial-navigation-polyfill", "1.3.1", (() => g.e(984).then((() => () => g(8984)))))), e[r] = l.length ? Promise.all(l).then((() => e[r] = 1)) : 1
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
              f = (typeof d)[0];
            if (o != f) return "o" == o && "n" == f || "s" == f || "u" == o;
            if ("o" != o && "u" != o && a != d) return a < d;
            r++
          }
        }, f = (e, t) => {
          if (0 in e) {
            t = n(t);
            var r = e[0],
              a = r < 0;
            a && (r = -r - 1);
            for (var o = 0, d = 1, l = !0;; d++, o++) {
              var i, c, s = d < e.length ? (typeof e[d])[0] : "";
              if (o >= t.length || "o" == (c = (typeof(i = t[o]))[0])) return !l || ("u" == s ? d > r && !a : "" == s != a);
              if ("u" == c) {
                if (!l || "u" != s) return !1
              } else if (l)
                if (s == c)
                  if (d <= r) {
                    if (i != e[d]) return !1
                  } else {
                    if (a ? i > e[d] : i < e[d]) return !1;
                    i != e[d] && (l = !1)
                  }
              else if ("s" != s && "n" != s) {
                if (a || d <= r) return !1;
                l = !1, d--
              } else {
                if (d <= r || c < s != a) return !1;
                l = !1
              } else "s" != s && "n" != s && (l = !1, d--)
            }
          }
          var u = [],
            b = u.pop.bind(u);
          for (o = 1; o < e.length; o++) {
            var p = e[o];
            u.push(1 == p ? b() | b() : 2 == p ? b() & b() : p ? f(p, t) : !b())
          }
          return !!b()
        }, l = (e, t, r) => {
          var a = e[t];
          return (t = Object.keys(a).reduce(((e, t) => !f(r, t) || e && !d(e, t) ? e : t), 0)) && a[t]
        }, i = e => (e.loaded = 1, e.get()), c = (e => function(t, r, a, o) {
          var n = g.I(t);
          return n && n.then ? n.then(e.bind(e, t, g.S[t], r, a, o)) : e(0, g.S[t], r, a, o)
        })(((e, t, r, a, o) => {
          var n = t && g.o(t, r) && l(t, r, a);
          return n ? i(n) : o()
        })), s = {}, u = {
          1403: () => c("default", "react", [1, 18, 2, 0], (() => g.e(380).then((() => () => g(3380))))),
          4252: () => c("default", "lodash", [1, 4, 17, 21], (() => g.e(429).then((() => () => g(9429))))),
          9779: () => c("default", "react-router-dom", [1, 6, 11, 2], (() => Promise.all([g.e(261), g.e(49)]).then((() => () => g(2049))))),
          3181: () => c("default", "framer-motion", [1, 7, 5, 1], (() => g.e(749).then((() => () => g(5749))))),
          5301: () => c("default", "@rockstargames/router", [1, "workspace:*"], (() => Promise.all([g.e(410), g.e(621)]).then((() => () => g(3002))))),
          6040: () => c("default", "gsap", [1, "workspace:*"], (() => g.e(149).then((() => () => g(3149))))),
          6649: () => c("default", "spatial-navigation-polyfill", [1, 1, 3, 1], (() => g.e(984).then((() => () => g(8984))))),
          6717: () => c("default", "@rockstargames/locale-tools", [1, "workspace:*"], (() => Promise.all([g.e(66), g.e(524)]).then((() => () => g(4143))))),
          7460: () => c("default", "react-remove-scroll", [1, 2, 5, 7], (() => g.e(994).then((() => () => g(8613))))),
          8588: () => c("default", "react-popper", [1, 2, 3, 0], (() => Promise.all([g.e(493), g.e(4), g.e(189)]).then((() => () => g(6570))))),
          9493: () => c("default", "react-dom", [1, 18, 2, 0], (() => g.e(533).then((() => () => g(7533))))),
          4410: () => c("default", "react-router-dom", [1, 6, 11, 2], (() => Promise.all([g.e(261), g.e(776)]).then((() => () => g(2776))))),
          5004: () => c("default", "@popperjs/core", [1, 2, 11, 8], (() => g.e(124).then((() => () => g(2124)))))
        }, b = {
          4: [5004],
          344: [3181, 5301, 6040, 6649, 6717, 7460, 8588],
          403: [1403],
          410: [4410],
          493: [9493],
          834: [4252, 9779]
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
                        f = r && r.target && r.target.href || t,
                        l = new Error("Loading CSS chunk " + e + " failed.\n(" + f + ")");
                      l.code = "CSS_CHUNK_LOAD_FAILED", l.type = d, l.request = f, n.parentNode && n.parentNode.removeChild(n), o(l)
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
                f = r[2],
                l = 0;
              if (n.some((t => 0 !== e[t]))) {
                for (a in d) g.o(d, a) && (g.m[a] = d[a]);
                f && f(g)
              }
              for (t && t(r); l < n.length; l++) o = n[l], g.o(e, o) && e[o] && e[o][0](), e[o] = 0
            },
            r = self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || [];
          r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
        })(), g.nc = void 0, g(2160), g(2609)
      })())
    }
  }
}));