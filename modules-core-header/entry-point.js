! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "6fd2fc23-36ab-4556-8256-45ff9b2384db", e._sentryDebugIdIdentifier = "sentry-dbid-6fd2fc23-36ab-4556-8256-45ff9b2384db")
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
        var e, r, a, o, n, d, f, c, l, s, i, u, b, h, p = {
            54364: (e, t, r) => {
              (0, r(47284).G)(1)
            },
            47284: (e, t, r) => {
              const a = r(87984).Q;
              t.G = function(e) {
                if (e || (e = 1), !r.y.meta || !r.y.meta.url) throw console.error("__system_context__", r.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                r.p = a(r.y.meta.url, e)
              }
            },
            93824: (e, t, r) => {
              r(54364)
            },
            87984: (e, t, r) => {
              t.Q = function(e, t) {
                var r = document.createElement("a");
                r.href = e;
                for (var a = "/" === r.pathname[0] ? r.pathname : "/" + r.pathname, o = 0, n = a.length; o !== t && n >= 0;) "/" === a[--n] && o++;
                if (o !== t) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + t + ") is greater than the number of directories (" + o + ") in the URL path " + e);
                var d = a.slice(0, n + 1);
                return r.protocol + "//" + r.host + d
              };
              Number.isInteger
            },
            4444: (e, t, r) => {
              "use strict";
              var a = {
                  "./bootstrap": () => Promise.all([r.e(176), r.e(972), r.e(688), r.e(940), r.e(664), r.e(784), r.e(364), r.e(856), r.e(724), r.e(412)]).then((() => () => r(66412))),
                  "./core": () => Promise.all([r.e(176), r.e(972), r.e(688), r.e(940), r.e(664), r.e(784), r.e(856), r.e(724), r.e(37)]).then((() => () => r(87037))),
                  "./index": () => Promise.all([r.e(176), r.e(972), r.e(688), r.e(940), r.e(664), r.e(784), r.e(856), r.e(724), r.e(880)]).then((() => () => r(61880)))
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
          return p[e].call(r.exports, r, r.exports, g), r.loaded = !0, r.exports
        }
        return g.m = p, g.c = m, g.y = t, g.amdO = {}, g.n = e => {
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
          37: "d1e970161cb182ae82a9ddd30cec51cb",
          64: "db826faa320233193bbc53850c12077b",
          100: "3d2cab0820e56e7e0fcc6bcb091b11a3",
          176: "a2e3cb0ff5b08cae691742c7ea202618",
          239: "01d5facda28c2433d710e7b53f4d09a5",
          276: "c988c20e7d52f3b7caf8a3ccfb508a2d",
          304: "cd237fd43a6416bb7130bf0ede8617d3",
          312: "37a11317cc0205089719b9536c167a5b",
          334: "642b1fc89cbe004b5b4b6a1278e3f51f",
          364: "0a83dca00d1f18b07735b030284a390a",
          404: "bf0ce9280967ff6074f1f9ffaabebd35",
          408: "65ca3233d99f884578a85bf2a41b51ee",
          412: "67d026fd6c995bd64bc45bcfe95132a0",
          448: "23f1ed2dfd68a96d6c472298d0e8e00d",
          584: "8ea19e057a82f0c9187231016b2fd585",
          608: "a238fc71db7d674904e7ceb034bda348",
          620: "00ddeb43e6383f095588e81a6fbc0b67",
          648: "bb058df4e0ca214a2b148ae2acf9656b",
          664: "aadca6ff75cfae183d7205598ec5bae6",
          668: "179c84bc449abd258519d7f17b56e9b9",
          672: "bf7a3167c6f721e0989cc58499eeff03",
          688: "dc5edfedba54324c467d4c8beabd9979",
          716: "ea284136b2ee7491586179761d071c96",
          720: "a6093250428dd3e9c1458a21a6b9f1e6",
          724: "213b86673e9233b60e27d1e7614b8082",
          748: "0db3aa58fd1901d8d859718c6c3f7b01",
          772: "9c709a86467f7f3f6d90618aa50129ab",
          784: "44a44cc1b2af5453d4b17885a462c38d",
          788: "b7376057d4707f9e80c8f3215956b253",
          818: "480ab209ea257f34787b57fc79bd4dd6",
          856: "139e4165b5773abe13787e190dd1cb6c",
          880: "10ba5c0e08102da56c819a87a7a69bb6",
          892: "b2f8622a295e004ecf6028b03a81e1ae",
          895: "96e511c0185465dc3ccc4c616bd95a72",
          924: "3090521bc67fb54386027ce45667ba35",
          932: "25eb36e03b3c011d81a39585467eac86",
          940: "9a3161ae98a8a23661bc43b6b510c48f",
          953: "11718f2d8a00dc8b39546616a36191f2",
          972: "3bf06ec3fb653b55480af32f87258532",
          981: "23c23db32b9347befae93be588133b43"
        } [e] + ".js", g.miniCssF = e => "css/" + {
          672: "4f335b725ac8582e586442592a3f88aa",
          724: "3c43d7c6563bfc0dadca59b9dd28d21e",
          981: "4ac0161174e4888fe58d80fa0a7d1e45"
        } [e] + ".css", g.g = function() {
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
              for (var c = document.getElementsByTagName("script"), l = 0; l < c.length; l++) {
                var s = c[l];
                if (s.getAttribute("src") == e || s.getAttribute("data-webpack") == o + r) {
                  d = s;
                  break
                }
              }
            d || (f = !0, (d = document.createElement("script")).charset = "utf-8", d.timeout = 120, g.nc && d.setAttribute("nonce", g.nc), d.setAttribute("data-webpack", o + r), d.src = e), a[e] = [t];
            var i = (t, r) => {
                d.onerror = d.onload = null, clearTimeout(u);
                var o = a[e];
                if (delete a[e], d.parentNode && d.parentNode.removeChild(d), o && o.forEach((e => e(r))), t) return t(r)
              },
              u = setTimeout(i.bind(null, void 0, {
                type: "timeout",
                target: d
              }), 12e4);
            d.onerror = i.bind(null, d.onerror), d.onload = i.bind(null, d.onload), f && document.head.appendChild(d)
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
                c = [];
              return "default" === r && (f("@popperjs/core", "2.11.8", (() => g.e(748).then((() => () => g(5748))))), f("@rockstargames/components", "1.14.0", (() => Promise.all([g.e(176), g.e(972), g.e(688), g.e(64), g.e(664), g.e(784), g.e(364), g.e(856), g.e(981), g.e(672)]).then((() => () => g(60368))))), f("@rockstargames/locale-tools", "1.0.0", (() => Promise.all([g.e(176), g.e(972), g.e(408), g.e(664), g.e(784), g.e(304)]).then((() => () => g(8304))))), f("@rockstargames/router", "1.0.0", (() => Promise.all([g.e(664), g.e(584), g.e(895)]).then((() => () => g(85276))))), f("classnames", "2.5.1", (() => g.e(772).then((() => () => g(89772))))), f("framer-motion", "7.10.3", (() => Promise.all([g.e(176), g.e(648), g.e(664)]).then((() => () => g(57648))))), f("gsap", "0.0.0", (() => g.e(720).then((() => () => g(77100))))), f("lodash", "4.17.21", (() => g.e(404).then((() => () => g(79784))))), f("react-dom", "18.2.0", (() => Promise.all([g.e(448), g.e(664)]).then((() => () => g(18448))))), f("react-dom", "18.2.0", (() => Promise.all([g.e(716), g.e(664)]).then((() => () => g(63716))))), f("react-focus-lock", "2.9.6", (() => Promise.all([g.e(664), g.e(312)]).then((() => () => g(90312))))), f("react-popper", "2.3.0", (() => Promise.all([g.e(664), g.e(364), g.e(892), g.e(334)]).then((() => () => g(5334))))), f("react-remove-scroll", "2.5.7", (() => Promise.all([g.e(664), g.e(620)]).then((() => () => g(91620))))), f("react-router-dom", "6.17.0", (() => Promise.all([g.e(788), g.e(668), g.e(664)]).then((() => () => g(69668))))), f("react-router-dom", "6.17.0", (() => Promise.all([g.e(788), g.e(818), g.e(664)]).then((() => () => g(64818))))), f("react", "18.2.0", (() => g.e(100).then((() => () => g(99480))))), f("spatial-navigation-polyfill", "1.3.1", (() => g.e(608).then((() => () => g(55608)))))), e[r] = c.length ? Promise.all(c).then((() => e[r] = 1)) : 1
            }
          }
        })(), (() => {
          var e;
          g.g.importScripts && (e = g.g.location + "");
          var t = g.g.document;
          if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
            var r = t.getElementsByTagName("script");
            if (r.length)
              for (var a = r.length - 1; a > -1 && !e;) e = r[a--].src
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
            for (var o = 0, d = 1, c = !0;; d++, o++) {
              var l, s, i = d < e.length ? (typeof e[d])[0] : "";
              if (o >= t.length || "o" == (s = (typeof(l = t[o]))[0])) return !c || ("u" == i ? d > r && !a : "" == i != a);
              if ("u" == s) {
                if (!c || "u" != i) return !1
              } else if (c)
                if (i == s)
                  if (d <= r) {
                    if (l != e[d]) return !1
                  } else {
                    if (a ? l > e[d] : l < e[d]) return !1;
                    l != e[d] && (c = !1)
                  }
              else if ("s" != i && "n" != i) {
                if (a || d <= r) return !1;
                c = !1, d--
              } else {
                if (d <= r || s < i != a) return !1;
                c = !1
              } else "s" != i && "n" != i && (c = !1, d--)
            }
          }
          var u = [],
            b = u.pop.bind(u);
          for (o = 1; o < e.length; o++) {
            var h = e[o];
            u.push(1 == h ? b() | b() : 2 == h ? b() & b() : h ? f(h, t) : !b())
          }
          return !!b()
        }, c = (e, t, r) => {
          var a = e[t];
          return (t = Object.keys(a).reduce(((e, t) => !f(r, t) || e && !d(e, t) ? e : t), 0)) && a[t]
        }, l = e => (e.loaded = 1, e.get()), s = (e => function(t, r, a, o) {
          var n = g.I(t);
          return n && n.then ? n.then(e.bind(e, t, g.S[t], r, a, o)) : e(0, g.S[t], r, a, o)
        })(((e, t, r, a, o) => {
          var n = t && g.o(t, r) && c(t, r, a);
          return n ? l(n) : o()
        })), i = {}, u = {
          51664: () => s("default", "react", [1, 18, 2, 0], (() => g.e(100).then((() => () => g(99480))))),
          57013: () => s("default", "react-router-dom", [1, 6, 11, 2], (() => Promise.all([g.e(788), g.e(668)]).then((() => () => g(69668))))),
          73660: () => s("default", "lodash", [1, 4, 17, 21], (() => g.e(404).then((() => () => g(79784))))),
          77364: () => s("default", "react-dom", [1, 18, 2, 0], (() => g.e(716).then((() => () => g(63716))))),
          9860: () => s("default", "@rockstargames/components", [1, "workspace:*"], (() => Promise.all([g.e(64), g.e(364), g.e(981)]).then((() => () => g(60368))))),
          41272: () => s("default", "@rockstargames/locale-tools", [1, "workspace:*"], (() => Promise.all([g.e(408), g.e(924)]).then((() => () => g(8304))))),
          50968: () => s("default", "framer-motion", [1, 7, 5, 1], (() => g.e(648).then((() => () => g(57648))))),
          67356: () => s("default", "gsap", [1, "workspace:*"], (() => g.e(720).then((() => () => g(77100))))),
          37925: () => s("default", "react-popper", [1, 2, 3, 0], (() => Promise.all([g.e(364), g.e(892), g.e(953)]).then((() => () => g(5334))))),
          51184: () => s("default", "spatial-navigation-polyfill", [1, 1, 3, 1], (() => g.e(608).then((() => () => g(55608))))),
          81968: () => s("default", "@rockstargames/router", [1, "workspace:*"], (() => Promise.all([g.e(584), g.e(276)]).then((() => () => g(85276))))),
          9488: () => s("default", "classnames", [1, 2, 5, 1], (() => g.e(772).then((() => () => g(89772))))),
          26540: () => s("default", "react-dom", [1, 18, 2, 0], (() => g.e(448).then((() => () => g(18448))))),
          36960: () => s("default", "react-focus-lock", [1, 2, 9, 6], (() => g.e(932).then((() => () => g(90312))))),
          76745: () => s("default", "react-remove-scroll", [1, 2, 5, 7], (() => g.e(239).then((() => () => g(91620))))),
          98584: () => s("default", "react-router-dom", [1, 6, 11, 2], (() => Promise.all([g.e(788), g.e(818)]).then((() => () => g(64818))))),
          18892: () => s("default", "@popperjs/core", [1, 2, 11, 8], (() => g.e(748).then((() => () => g(5748)))))
        }, b = {
          364: [77364],
          584: [98584],
          664: [51664],
          724: [37925, 51184, 81968],
          784: [57013, 73660],
          856: [9860, 41272, 50968, 67356],
          892: [18892],
          981: [9488, 26540, 36960, 76745]
        }, h = {}, g.f.consumes = (e, t) => {
          g.o(b, e) && b[e].forEach((e => {
            if (g.o(i, e)) return t.push(i[e]);
            if (!h[e]) {
              var r = t => {
                i[e] = 0, g.m[e] = r => {
                  delete g.c[e], r.exports = t()
                }
              };
              h[e] = !0;
              var a = t => {
                delete i[e], g.m[e] = r => {
                  throw delete g.c[e], t
                }
              };
              try {
                var o = u[e]();
                o.then ? t.push(i[e] = o.then(r).catch(a)) : r(o)
              } catch (e) {
                a(e)
              }
            }
          }))
        }, (() => {
          if ("undefined" != typeof document) {
            var e = {
              168: 0
            };
            g.f.miniCss = (t, r) => {
              e[t] ? r.push(e[t]) : 0 !== e[t] && {
                672: 1,
                724: 1,
                981: 1
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
                        c = new Error("Loading CSS chunk " + e + " failed.\n(" + f + ")");
                      c.code = "CSS_CHUNK_LOAD_FAILED", c.type = d, c.request = f, n.parentNode && n.parentNode.removeChild(n), o(c)
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
            168: 0
          };
          g.f.j = (t, r) => {
            var a = g.o(e, t) ? e[t] : void 0;
            if (0 !== a)
              if (a) r.push(a[2]);
              else if (/^((36|58|66)4|672|892)$/.test(t)) e[t] = 0;
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
                c = 0;
              if (n.some((t => 0 !== e[t]))) {
                for (a in d) g.o(d, a) && (g.m[a] = d[a]);
                f && f(g)
              }
              for (t && t(r); c < n.length; c++) o = n[c], g.o(e, o) && e[o] && e[o][0](), e[o] = 0
            },
            r = self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || [];
          r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
        })(), g.nc = void 0, g(93824), g(4444)
      })())
    }
  }
}));