! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "c38ff393-5e21-49eb-ab83-51eb78cc2651", e._sentryDebugIdIdentifier = "sentry-dbid-c38ff393-5e21-49eb-ab83-51eb78cc2651")
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
        var e, r, a, o, n, c, d, f, l, s, i, u, b, h, p = {
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
                var c = a.slice(0, n + 1);
                return r.protocol + "//" + r.host + c
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
          for (var c = 2 & a && t;
            "object" == typeof c && !~e.indexOf(c); c = r(c)) Object.getOwnPropertyNames(c).forEach((e => n[e] = () => t[e]));
          return n.default = () => t, g.d(o, n), o
        }, g.d = (e, t) => {
          for (var r in t) g.o(t, r) && !g.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: t[r]
          })
        }, g.f = {}, g.e = e => Promise.all(Object.keys(g.f).reduce(((t, r) => (g.f[r](e, t), t)), [])), g.u = e => "js/" + {
          37: "69860f99c5f8f8c53448032eccf56a5b",
          64: "f9810e54ffea343e8e9b7c90509ca938",
          100: "0d9e099e48e6bd13dff57a426721c57a",
          176: "d6b5b0c4a62c27c3ea7cb71308c653a7",
          239: "d170273295a4c9a279128d8eec3e43c8",
          276: "e6e7145e734333fbd79516b8867868cb",
          304: "b662fdcfd6711f4989926732fb9e9626",
          312: "5360096f14ddedf9da7bab6144c0d3c4",
          334: "2818744d4658c79e663e8802117f726c",
          364: "0a83dca00d1f18b07735b030284a390a",
          404: "aa0afeb072edb9bfc84bb89d1d77cf85",
          408: "f5c48b8bd3732d0aa68cbc5c91519338",
          412: "f8ae1b66e3300ea33ee033bbed220d99",
          448: "c549b57fb5f1811af16067124e7db6e0",
          584: "8ea19e057a82f0c9187231016b2fd585",
          608: "05ba3e26b2270b59ece66a71d30ca3ba",
          620: "a5dbf107ac7b8dcbc12f5891b32295aa",
          648: "9f997aa3d775d5cbe32458ea9406d321",
          664: "aadca6ff75cfae183d7205598ec5bae6",
          668: "74ade09bc87f96bee208f6560319d830",
          672: "bf7a3167c6f721e0989cc58499eeff03",
          688: "86988e03f739d4619172916fca461d92",
          716: "3cdbe2eccbdd8a827854c7a60300a720",
          720: "9a4f9bda939ccc4299ab8841b82aefda",
          724: "c168e7545009fe9148f72d8431a742a8",
          748: "85a6c4f284d0c3ab0c4b9940368b68fb",
          772: "15202c3943ae6933dbb82978d1c22e93",
          784: "f0d43bf0f5fb6f694ad303f7a3283c21",
          788: "8bc7bb4fecbf57869f6743945719d4d3",
          818: "1c77e90ab62e8e1a13b92cc0646308bc",
          856: "3ae80d0b9f9533e28ca9e2a8f6767f0a",
          880: "d0e73c2ab23201d18dc10a829933cb40",
          892: "b2f8622a295e004ecf6028b03a81e1ae",
          895: "e14e85f2a49edc0f2aaf3de92e24ea19",
          924: "3359dc62c17e9ace0106e5a3b3652e98",
          932: "027e2c98b50ae7f493c590f213f2a35b",
          940: "cad965b4d744db47f87d7c1e9d8b5002",
          953: "fd398eafb44028691484d258c1cbe1f6",
          972: "143da22ea2c591326bc64e7e7db9bcc0",
          981: "6ad182f4b9fc7b34f5a48ebcdab08ab1"
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
            var c, d;
            if (void 0 !== r)
              for (var f = document.getElementsByTagName("script"), l = 0; l < f.length; l++) {
                var s = f[l];
                if (s.getAttribute("src") == e || s.getAttribute("data-webpack") == o + r) {
                  c = s;
                  break
                }
              }
            c || (d = !0, (c = document.createElement("script")).charset = "utf-8", c.timeout = 120, g.nc && c.setAttribute("nonce", g.nc), c.setAttribute("data-webpack", o + r), c.src = e), a[e] = [t];
            var i = (t, r) => {
                c.onerror = c.onload = null, clearTimeout(u);
                var o = a[e];
                if (delete a[e], c.parentNode && c.parentNode.removeChild(c), o && o.forEach((e => e(r))), t) return t(r)
              },
              u = setTimeout(i.bind(null, void 0, {
                type: "timeout",
                target: c
              }), 12e4);
            c.onerror = i.bind(null, c.onerror), c.onload = i.bind(null, c.onload), d && document.head.appendChild(c)
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
                c = "@rockstargames/modules-core-header",
                d = (e, t, r, a) => {
                  var o = n[e] = n[e] || {},
                    d = o[t];
                  (!d || !d.loaded && (!a != !d.eager ? a : c > d.from)) && (o[t] = {
                    get: r,
                    from: c,
                    eager: !!a
                  })
                },
                f = [];
              return "default" === r && (d("@popperjs/core", "2.11.8", (() => g.e(748).then((() => () => g(5748))))), d("@rockstargames/components", "1.14.0", (() => Promise.all([g.e(176), g.e(972), g.e(688), g.e(64), g.e(664), g.e(784), g.e(364), g.e(856), g.e(981), g.e(672)]).then((() => () => g(60368))))), d("@rockstargames/locale-tools", "1.0.0", (() => Promise.all([g.e(176), g.e(972), g.e(408), g.e(664), g.e(784), g.e(304)]).then((() => () => g(8304))))), d("@rockstargames/router", "1.0.0", (() => Promise.all([g.e(664), g.e(584), g.e(895)]).then((() => () => g(85276))))), d("classnames", "2.5.1", (() => g.e(772).then((() => () => g(89772))))), d("framer-motion", "7.10.3", (() => Promise.all([g.e(176), g.e(648), g.e(664)]).then((() => () => g(57648))))), d("gsap", "0.0.0", (() => g.e(720).then((() => () => g(77100))))), d("lodash", "4.17.21", (() => g.e(404).then((() => () => g(79784))))), d("react-dom", "18.2.0", (() => Promise.all([g.e(448), g.e(664)]).then((() => () => g(18448))))), d("react-dom", "18.2.0", (() => Promise.all([g.e(716), g.e(664)]).then((() => () => g(63716))))), d("react-focus-lock", "2.9.6", (() => Promise.all([g.e(664), g.e(312)]).then((() => () => g(90312))))), d("react-popper", "2.3.0", (() => Promise.all([g.e(664), g.e(364), g.e(892), g.e(334)]).then((() => () => g(5334))))), d("react-remove-scroll", "2.5.7", (() => Promise.all([g.e(664), g.e(620)]).then((() => () => g(91620))))), d("react-router-dom", "6.17.0", (() => Promise.all([g.e(788), g.e(668), g.e(664)]).then((() => () => g(69668))))), d("react-router-dom", "6.17.0", (() => Promise.all([g.e(788), g.e(818), g.e(664)]).then((() => () => g(64818))))), d("react", "18.2.0", (() => g.e(100).then((() => () => g(99480))))), d("spatial-navigation-polyfill", "1.3.1", (() => g.e(608).then((() => () => g(55608)))))), e[r] = f.length ? Promise.all(f).then((() => e[r] = 1)) : 1
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
        }, c = (e, t) => {
          e = n(e), t = n(t);
          for (var r = 0;;) {
            if (r >= e.length) return r < t.length && "u" != (typeof t[r])[0];
            var a = e[r],
              o = (typeof a)[0];
            if (r >= t.length) return "u" == o;
            var c = t[r],
              d = (typeof c)[0];
            if (o != d) return "o" == o && "n" == d || "s" == d || "u" == o;
            if ("o" != o && "u" != o && a != c) return a < c;
            r++
          }
        }, d = (e, t) => {
          if (0 in e) {
            t = n(t);
            var r = e[0],
              a = r < 0;
            a && (r = -r - 1);
            for (var o = 0, c = 1, f = !0;; c++, o++) {
              var l, s, i = c < e.length ? (typeof e[c])[0] : "";
              if (o >= t.length || "o" == (s = (typeof(l = t[o]))[0])) return !f || ("u" == i ? c > r && !a : "" == i != a);
              if ("u" == s) {
                if (!f || "u" != i) return !1
              } else if (f)
                if (i == s)
                  if (c <= r) {
                    if (l != e[c]) return !1
                  } else {
                    if (a ? l > e[c] : l < e[c]) return !1;
                    l != e[c] && (f = !1)
                  }
              else if ("s" != i && "n" != i) {
                if (a || c <= r) return !1;
                f = !1, c--
              } else {
                if (c <= r || s < i != a) return !1;
                f = !1
              } else "s" != i && "n" != i && (f = !1, c--)
            }
          }
          var u = [],
            b = u.pop.bind(u);
          for (o = 1; o < e.length; o++) {
            var h = e[o];
            u.push(1 == h ? b() | b() : 2 == h ? b() & b() : h ? d(h, t) : !b())
          }
          return !!b()
        }, f = (e, t, r) => {
          var a = e[t];
          return (t = Object.keys(a).reduce(((e, t) => !d(r, t) || e && !c(e, t) ? e : t), 0)) && a[t]
        }, l = e => (e.loaded = 1, e.get()), s = (e => function(t, r, a, o) {
          var n = g.I(t);
          return n && n.then ? n.then(e.bind(e, t, g.S[t], r, a, o)) : e(0, g.S[t], r, a, o)
        })(((e, t, r, a, o) => {
          var n = t && g.o(t, r) && f(t, r, a);
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
                      var o = (c = r[a]).getAttribute("data-href") || c.getAttribute("href");
                      if ("stylesheet" === c.rel && (o === e || o === t)) return c
                    }
                    var n = document.getElementsByTagName("style");
                    for (a = 0; a < n.length; a++) {
                      var c;
                      if ((o = (c = n[a]).getAttribute("data-href")) === e || o === t) return c
                    }
                  })(a, o)) return t();
                ((e, t, r, a, o) => {
                  var n = document.createElement("link");
                  n.rel = "stylesheet", n.type = "text/css", n.onerror = n.onload = r => {
                    if (n.onerror = n.onload = null, "load" === r.type) a();
                    else {
                      var c = r && ("load" === r.type ? "missing" : r.type),
                        d = r && r.target && r.target.href || t,
                        f = new Error("Loading CSS chunk " + e + " failed.\n(" + d + ")");
                      f.code = "CSS_CHUNK_LOAD_FAILED", f.type = c, f.request = d, n.parentNode && n.parentNode.removeChild(n), o(f)
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
                c = new Error;
              g.l(n, (r => {
                if (g.o(e, t) && (0 !== (a = e[t]) && (e[t] = void 0), a)) {
                  var o = r && ("load" === r.type ? "missing" : r.type),
                    n = r && r.target && r.target.src;
                  c.message = "Loading chunk " + t + " failed.\n(" + o + ": " + n + ")", c.name = "ChunkLoadError", c.type = o, c.request = n, a[1](c)
                }
              }), "chunk-" + t, t)
            }
          };
          var t = (t, r) => {
              var a, o, n = r[0],
                c = r[1],
                d = r[2],
                f = 0;
              if (n.some((t => 0 !== e[t]))) {
                for (a in c) g.o(c, a) && (g.m[a] = c[a]);
                d && d(g)
              }
              for (t && t(r); f < n.length; f++) o = n[f], g.o(e, o) && e[o] && e[o][0](), e[o] = 0
            },
            r = self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || [];
          r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
        })(), g.nc = void 0, g(93824), g(4444)
      })())
    }
  }
}));