! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "7df59465-8a63-4226-84be-9e7a378abcaf", e._sentryDebugIdIdentifier = "sentry-dbid-7df59465-8a63-4226-84be-9e7a378abcaf")
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
        var e, r, a, o, n, d, l, f, c, i, s, u, b, h, p = {
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
                  "./bootstrap": () => Promise.all([r.e(176), r.e(243), r.e(376), r.e(940), r.e(664), r.e(608), r.e(364), r.e(772), r.e(236), r.e(412)]).then((() => () => r(66412))),
                  "./core": () => Promise.all([r.e(176), r.e(243), r.e(376), r.e(940), r.e(664), r.e(608), r.e(772), r.e(236), r.e(37)]).then((() => () => r(87037))),
                  "./index": () => Promise.all([r.e(176), r.e(243), r.e(376), r.e(940), r.e(664), r.e(608), r.e(772), r.e(236), r.e(880)]).then((() => () => r(61880)))
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
          37: "44de713a2c0c1cf39a6c08637efb50e1",
          100: "89316ebd08b6083d31a2c4963eaf291e",
          176: "8d08d874d74f7fea01a6fd2b569c38bb",
          228: "95f68ee65c52b81519705487b4d8fdc6",
          236: "6bcfbc8ecee196b1efaabae13b62202e",
          239: "bcf637c2d65c97c27a16ae1414c76196",
          243: "f828df5ac176fe231c26101918fdb19b",
          276: "e3da1f2df01522ff3046ca9c7dc9b09b",
          288: "62f68ac328465ba129a2bb589880c9d4",
          304: "8f0f8b83bbc91727dc4ba752b3a016e3",
          312: "3b7d1e8a01e0e10e7f41948ada03c3f0",
          334: "b86836633946a6e6d35c94ab1b7beb8b",
          364: "0a83dca00d1f18b07735b030284a390a",
          376: "b7de5b645ba727d92834b311050051d1",
          408: "4b8b6109aeda4e382213b988957ef6a6",
          412: "96a0d89a05de980bbeafef55db66c5cd",
          448: "5f99c7f13a38c2991745fd14795cac10",
          584: "8ea19e057a82f0c9187231016b2fd585",
          608: "46700a5b935f22476756843627648628",
          620: "0ece27de66aad12bc306f44c876f3c50",
          648: "13b19a9ae758228ead25623a46a1aa66",
          664: "aadca6ff75cfae183d7205598ec5bae6",
          668: "eb88ceb9b1b4b8ae0a9f32998fe91b7a",
          716: "bc758c404fc5531035e940391a93d658",
          720: "234117c900b8d34b7bf7075072558c24",
          748: "f7b6287aa6858136253504983bad0143",
          772: "b25ed8f8e1e7d2aa85415e55215d4673",
          784: "49ff0a96d566564a239eed7441ef4720",
          788: "e9916fea7fe44f7b14c5eba8a25aabeb",
          812: "acfe8ae6e16ee8e851c7ff99ed2fe5a6",
          818: "d3893c354e1b5c484e5be689d141ec92",
          880: "914d45a1ec44f709f2b9c5a6839657c1",
          892: "b2f8622a295e004ecf6028b03a81e1ae",
          895: "d20d154911e39dba8e7251134d9d09fc",
          924: "d1e5b0f55998b9c8d809ed150210610b",
          932: "6bf4dd3e9747cd430f702eaeda217068",
          940: "a1a988d666dd450a1f68664a22ddf1cf",
          953: "4cfc7dc4278bee3d06dc119254716a9a"
        } [e] + ".js", g.miniCssF = e => "css/" + {
          236: "5c61dd655060b55ad8785000ef57f10e",
          812: "5ddbd5251ba2fc8a3e728cb9744e7cb2"
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
            var d, l;
            if (void 0 !== r)
              for (var f = document.getElementsByTagName("script"), c = 0; c < f.length; c++) {
                var i = f[c];
                if (i.getAttribute("src") == e || i.getAttribute("data-webpack") == o + r) {
                  d = i;
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
                f = [];
              return "default" === r && (l("@popperjs/core", "2.11.8", (() => g.e(748).then((() => () => g(5748))))), l("@rockstargames/components", "1.14.0", (() => Promise.all([g.e(176), g.e(243), g.e(376), g.e(668), g.e(664), g.e(608), g.e(364), g.e(772), g.e(812)]).then((() => () => g(90688))))), l("@rockstargames/locale-tools", "1.0.0", (() => Promise.all([g.e(176), g.e(243), g.e(408), g.e(664), g.e(608), g.e(304)]).then((() => () => g(8304))))), l("@rockstargames/router", "1.0.0", (() => Promise.all([g.e(664), g.e(584), g.e(895)]).then((() => () => g(85276))))), l("framer-motion", "7.10.3", (() => Promise.all([g.e(176), g.e(648), g.e(664)]).then((() => () => g(57648))))), l("gsap", "0.0.0", (() => g.e(720).then((() => () => g(77100))))), l("lodash", "4.17.21", (() => g.e(784).then((() => () => g(79784))))), l("react-dom", "18.2.0", (() => Promise.all([g.e(448), g.e(664)]).then((() => () => g(18448))))), l("react-dom", "18.2.0", (() => Promise.all([g.e(716), g.e(664)]).then((() => () => g(63716))))), l("react-focus-lock", "2.9.6", (() => Promise.all([g.e(664), g.e(312)]).then((() => () => g(90312))))), l("react-popper", "2.3.0", (() => Promise.all([g.e(664), g.e(364), g.e(892), g.e(334)]).then((() => () => g(5334))))), l("react-remove-scroll", "2.5.7", (() => Promise.all([g.e(664), g.e(620)]).then((() => () => g(91620))))), l("react-router-dom", "6.17.0", (() => Promise.all([g.e(788), g.e(288), g.e(664)]).then((() => () => g(69668))))), l("react-router-dom", "6.17.0", (() => Promise.all([g.e(788), g.e(818), g.e(664)]).then((() => () => g(64818))))), l("react", "18.2.0", (() => g.e(100).then((() => () => g(99480))))), l("spatial-navigation-polyfill", "1.3.1", (() => g.e(228).then((() => () => g(55608)))))), e[r] = f.length ? Promise.all(f).then((() => e[r] = 1)) : 1
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
              var c, i, s = d < e.length ? (typeof e[d])[0] : "";
              if (o >= t.length || "o" == (i = (typeof(c = t[o]))[0])) return !f || ("u" == s ? d > r && !a : "" == s != a);
              if ("u" == i) {
                if (!f || "u" != s) return !1
              } else if (f)
                if (s == i)
                  if (d <= r) {
                    if (c != e[d]) return !1
                  } else {
                    if (a ? c > e[d] : c < e[d]) return !1;
                    c != e[d] && (f = !1)
                  }
              else if ("s" != s && "n" != s) {
                if (a || d <= r) return !1;
                f = !1, d--
              } else {
                if (d <= r || i < s != a) return !1;
                f = !1
              } else "s" != s && "n" != s && (f = !1, d--)
            }
          }
          var u = [],
            b = u.pop.bind(u);
          for (o = 1; o < e.length; o++) {
            var h = e[o];
            u.push(1 == h ? b() | b() : 2 == h ? b() & b() : h ? l(h, t) : !b())
          }
          return !!b()
        }, f = (e, t, r) => {
          var a = e[t];
          return (t = Object.keys(a).reduce(((e, t) => !l(r, t) || e && !d(e, t) ? e : t), 0)) && a[t]
        }, c = e => (e.loaded = 1, e.get()), i = (e => function(t, r, a, o) {
          var n = g.I(t);
          return n && n.then ? n.then(e.bind(e, t, g.S[t], r, a, o)) : e(0, g.S[t], r, a, o)
        })(((e, t, r, a, o) => {
          var n = t && g.o(t, r) && f(t, r, a);
          return n ? c(n) : o()
        })), s = {}, u = {
          51664: () => i("default", "react", [1, 18, 2, 0], (() => g.e(100).then((() => () => g(99480))))),
          57013: () => i("default", "react-router-dom", [1, 6, 11, 2], (() => Promise.all([g.e(788), g.e(288)]).then((() => () => g(69668))))),
          73660: () => i("default", "lodash", [1, 4, 17, 21], (() => g.e(784).then((() => () => g(79784))))),
          77364: () => i("default", "react-dom", [1, 18, 2, 0], (() => g.e(716).then((() => () => g(63716))))),
          9860: () => i("default", "@rockstargames/components", [1, "workspace:*"], (() => Promise.all([g.e(668), g.e(364), g.e(812)]).then((() => () => g(90688))))),
          41272: () => i("default", "@rockstargames/locale-tools", [1, "workspace:*"], (() => Promise.all([g.e(408), g.e(924)]).then((() => () => g(8304))))),
          50968: () => i("default", "framer-motion", [1, 7, 5, 1], (() => g.e(648).then((() => () => g(57648))))),
          67356: () => i("default", "gsap", [1, "workspace:*"], (() => g.e(720).then((() => () => g(77100))))),
          37925: () => i("default", "react-popper", [1, 2, 3, 0], (() => Promise.all([g.e(364), g.e(892), g.e(953)]).then((() => () => g(5334))))),
          51184: () => i("default", "spatial-navigation-polyfill", [1, 1, 3, 1], (() => g.e(228).then((() => () => g(55608))))),
          81968: () => i("default", "@rockstargames/router", [1, "workspace:*"], (() => Promise.all([g.e(584), g.e(276)]).then((() => () => g(85276))))),
          26540: () => i("default", "react-dom", [1, 18, 2, 0], (() => g.e(448).then((() => () => g(18448))))),
          36960: () => i("default", "react-focus-lock", [1, 2, 9, 6], (() => g.e(932).then((() => () => g(90312))))),
          76745: () => i("default", "react-remove-scroll", [1, 2, 5, 7], (() => g.e(239).then((() => () => g(91620))))),
          98584: () => i("default", "react-router-dom", [1, 6, 11, 2], (() => Promise.all([g.e(788), g.e(818)]).then((() => () => g(64818))))),
          18892: () => i("default", "@popperjs/core", [1, 2, 11, 8], (() => g.e(748).then((() => () => g(5748)))))
        }, b = {
          236: [37925, 51184, 81968],
          364: [77364],
          584: [98584],
          608: [57013, 73660],
          664: [51664],
          772: [9860, 41272, 50968, 67356],
          812: [26540, 36960, 76745],
          892: [18892]
        }, h = {}, g.f.consumes = (e, t) => {
          g.o(b, e) && b[e].forEach((e => {
            if (g.o(s, e)) return t.push(s[e]);
            if (!h[e]) {
              var r = t => {
                s[e] = 0, g.m[e] = r => {
                  delete g.c[e], r.exports = t()
                }
              };
              h[e] = !0;
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
              168: 0
            };
            g.f.miniCss = (t, r) => {
              e[t] ? r.push(e[t]) : 0 !== e[t] && {
                236: 1,
                812: 1
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
            168: 0
          };
          g.f.j = (t, r) => {
            var a = g.o(e, t) ? e[t] : void 0;
            if (0 !== a)
              if (a) r.push(a[2]);
              else if (/^((36|58|66)4|892)$/.test(t)) e[t] = 0;
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
        })(), g.nc = void 0, g(93824), g(4444)
      })())
    }
  }
}));