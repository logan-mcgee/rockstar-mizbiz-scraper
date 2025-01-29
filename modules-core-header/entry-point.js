! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      r = (new Error).stack;
    r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "15d11aee-1647-4f67-b30f-24a50eba878a", e._sentryDebugIdIdentifier = "sentry-dbid-15d11aee-1647-4f67-b30f-24a50eba878a")
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
}, System.register([], (function(e, r) {
  return {
    execute: function() {
      e((() => {
        var e, t, a, o, n, d, f = {
            5144: (e, r, t) => {
              (0, t(3454).w)(1)
            },
            3454: (e, r, t) => {
              const a = t(8294).y;
              r.w = function(e) {
                if (e || (e = 1), !t.y.meta || !t.y.meta.url) throw console.error("__system_context__", t.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                t.p = a(t.y.meta.url, e)
              }
            },
            3787: (e, r, t) => {
              t(5144)
            },
            8294: (e, r, t) => {
              r.y = function(e, r) {
                var t = document.createElement("a");
                t.href = e;
                for (var a = "/" === t.pathname[0] ? t.pathname : "/" + t.pathname, o = 0, n = a.length; o !== r && n >= 0;) "/" === a[--n] && o++;
                if (o !== r) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + r + ") is greater than the number of directories (" + o + ") in the URL path " + e);
                var d = a.slice(0, n + 1);
                return t.protocol + "//" + t.host + d
              };
              Number.isInteger
            },
            4197: (e, r, t) => {
              "use strict";
              var a = {
                  "./vanilla": () => Promise.all([t.e(688), t.e(646), t.e(384), t.e(654), t.e(229), t.e(188), t.e(113), t.e(788), t.e(454), t.e(853), t.e(918), t.e(948), t.e(641)]).then((() => () => t(5641))),
                  "./core": () => Promise.all([t.e(688), t.e(646), t.e(384), t.e(654), t.e(229), t.e(188), t.e(113), t.e(788), t.e(454), t.e(918), t.e(948), t.e(99), t.e(184)]).then((() => () => t(1184))),
                  "./GlobalNavigationWrapper": () => Promise.all([t.e(229), t.e(788), t.e(454), t.e(99), t.e(679)]).then((() => () => t(1932)))
                },
                o = (e, r) => (t.R = r, r = t.o(a, e) ? a[e]() : Promise.resolve().then((() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                })), t.R = void 0, r),
                n = (e, r) => {
                  if (t.S) {
                    var a = "default",
                      o = t.S[a];
                    if (o && o !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return t.S[a] = e, t.I(a, r)
                  }
                };
              t.d(r, {
                get: () => o,
                init: () => n
              })
            }
          },
          c = {};

        function l(e) {
          var r = c[e];
          if (void 0 !== r) return r.exports;
          var t = c[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return f[e].call(t.exports, t, t.exports, l), t.loaded = !0, t.exports
        }
        return l.m = f, l.c = c, l.y = r, l.amdO = {}, l.n = e => {
          var r = e && e.__esModule ? () => e.default : () => e;
          return l.d(r, {
            a: r
          }), r
        }, t = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, l.t = function(r, a) {
          if (1 & a && (r = this(r)), 8 & a) return r;
          if ("object" == typeof r && r) {
            if (4 & a && r.__esModule) return r;
            if (16 & a && "function" == typeof r.then) return r
          }
          var o = Object.create(null);
          l.r(o);
          var n = {};
          e = e || [null, t({}), t([]), t(t)];
          for (var d = 2 & a && r;
            "object" == typeof d && !~e.indexOf(d); d = t(d)) Object.getOwnPropertyNames(d).forEach((e => n[e] = () => r[e]));
          return n.default = () => r, l.d(o, n), o
        }, l.d = (e, r) => {
          for (var t in r) l.o(r, t) && !l.o(e, t) && Object.defineProperty(e, t, {
            enumerable: !0,
            get: r[t]
          })
        }, l.f = {}, l.e = e => Promise.all(Object.keys(l.f).reduce(((r, t) => (l.f[t](e, r), r)), [])), l.u = e => "js/" + {
          63: "8bf380783ca5caff7076cfcb57fbd28a",
          89: "39cf4cbde5ccfea964e2ab574a0d7bb0",
          99: "e6d9f3d54ac99fae2d5af2f4e9398297",
          113: "2b2730f445bbcf144ce8739586c30b31",
          138: "7b2eaeebf66522a5f4958fd1385d4322",
          184: "cfbfcc20433714c931c4e1eb4e045725",
          188: "13282b60e85df29ecc601cfc82fe6327",
          229: "1c0f7064cc52a6f61167d2e7f95c1f1c",
          282: "c2a06800983d5726a0e788eccff2556b",
          322: "25e1e7a5398736addfcc63b1e678539e",
          384: "96e89af21a5712f32e0cc0e85cf2c734",
          385: "89f1c78884858327bce19d61a4f460b8",
          386: "6e8728d308069cbb0c9e609e90665c63",
          395: "f954038fd09727e63d1430b5131ef884",
          425: "0c0badc1a08ef4cbdd1489a97a5e0158",
          429: "b57324fe7e51f4799dfbe2b168b50699",
          454: "a9a69b9474274862b6cf24b66019b309",
          508: "862827b9d764792ed720a8a670ef7f17",
          577: "20a6d9d5fc0f955d518103a34fddedf7",
          605: "72228f943c27bcf5766d24302b8e9405",
          641: "850e527a109b66f85b489b68e117f020",
          646: "f4f802cf377dc5d32d1ee0c89ed18152",
          654: "c6b549ddef130166cbd4b6f941447d61",
          679: "802d034f9ad2870ea8105b4863a33539",
          688: "ade74a3b4ed8b46f970e22ff37a632eb",
          741: "fde64b28c2cf5780cfb1d948e1211dfb",
          776: "2e1a87e9c936c078edb46805197a183f",
          788: "d06942ce9dd97e6fa5ad1c5d5f7ab0f8",
          806: "f4152539f7f9cbda53d59699a71262b0",
          810: "3c70ddaabada9a20dc8b9cb3447b7ee6",
          853: "d648d66957fe20f2dd182aaf3176e1c4",
          901: "b47382d697610b139b7bb0c783c71459",
          918: "2ba7bd4d147f95f511ef66ceeb0d916a",
          927: "2baff31d4690e89eeef351a71b2b71d1",
          948: "0e9c0e8549be66af89336bc35b5b3358",
          986: "9d2250ec0e23a3b0d5053c928059dfb6",
          999: "c6c6ffd221b6c70ca597251f219c631f"
        } [e] + ".js", l.miniCssF = e => "css/" + {
          89: "d75a6be9c9cf7965c0ebc30bc450989c",
          948: "034a0a602334e4d9c47ecbe29a8dbd4a"
        } [e] + ".css", l.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), l.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r), a = {}, o = "@rockstargames/modules-core-header:", l.l = (e, r, t, n) => {
          if (a[e]) a[e].push(r);
          else {
            var d, f;
            if (void 0 !== t)
              for (var c = document.getElementsByTagName("script"), i = 0; i < c.length; i++) {
                var s = c[i];
                if (s.getAttribute("src") == e || s.getAttribute("data-webpack") == o + t) {
                  d = s;
                  break
                }
              }
            d || (f = !0, (d = document.createElement("script")).charset = "utf-8", d.timeout = 120, l.nc && d.setAttribute("nonce", l.nc), d.setAttribute("data-webpack", o + t), d.src = e), a[e] = [r];
            var u = (r, t) => {
                d.onerror = d.onload = null, clearTimeout(b);
                var o = a[e];
                if (delete a[e], d.parentNode && d.parentNode.removeChild(d), o && o.forEach((e => e(t))), r) return r(t)
              },
              b = setTimeout(u.bind(null, void 0, {
                type: "timeout",
                target: d
              }), 12e4);
            d.onerror = u.bind(null, d.onerror), d.onload = u.bind(null, d.onload), f && document.head.appendChild(d)
          }
        }, l.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, l.nmd = e => (e.paths = [], e.children || (e.children = []), e), n = {}, d = {}, l.f.remotes = (e, r) => {
          l.o(n, e) && n[e].forEach((e => {
            var t = l.R;
            t || (t = []);
            var a = d[e];
            if (!(t.indexOf(a) >= 0)) {
              if (t.push(a), a.p) return r.push(a.p);
              var o = r => {
                  r || (r = new Error("Container missing")), "string" == typeof r.message && (r.message += '\nwhile loading "' + a[1] + '" from ' + a[2]), l.m[e] = () => {
                    throw r
                  }, a.p = 0
                },
                n = (e, t, n, d, f, c) => {
                  try {
                    var l = e(t, n);
                    if (!l || !l.then) return f(l, d, c);
                    var i = l.then((e => f(e, d)), o);
                    if (!c) return i;
                    r.push(a.p = i)
                  } catch (e) {
                    o(e)
                  }
                },
                f = (e, r, o) => n(r.get, a[1], t, 0, c, o),
                c = r => {
                  a.p = 1, l.m[e] = e => {
                    e.exports = r()
                  }
                };
              n(l, a[2], 0, 0, ((e, r, t) => e ? n(l.I, a[0], 0, e, f, t) : o()), 1)
            }
          }))
        }, (() => {
          l.S = {};
          var e = {},
            r = {};
          l.I = (t, a) => {
            a || (a = []);
            var o = r[t];
            if (o || (o = r[t] = {}), !(a.indexOf(o) >= 0)) {
              if (a.push(o), e[t]) return e[t];
              l.o(l.S, t) || (l.S[t] = {});
              var n = l.S[t],
                d = "@rockstargames/modules-core-header",
                f = (e, r, t, a) => {
                  var o = n[e] = n[e] || {},
                    f = o[r];
                  (!f || !f.loaded && (!a != !f.eager ? a : d > f.from)) && (o[r] = {
                    get: t,
                    from: d,
                    eager: !!a
                  })
                },
                c = [];
              return "default" === t && (f("@popperjs/core", "2.11.8", (() => l.e(63).then((() => () => l(1063))))), f("@rsgweb/locale-tools", "1.0.0", (() => Promise.all([l.e(688), l.e(927), l.e(229), l.e(188), l.e(986)]).then((() => () => l(9986))))), f("@rsgweb/modules-core-user-action-menu", "0.0.0", (() => Promise.all([l.e(688), l.e(646), l.e(229), l.e(188), l.e(113), l.e(788), l.e(918), l.e(89), l.e(901)]).then((() => () => l(7089))))), f("@rsgweb/rockstar-account", "0.0.0", (() => Promise.all([l.e(688), l.e(646), l.e(384), l.e(229), l.e(188), l.e(113), l.e(429)]).then((() => () => l(5327))))), f("@rsgweb/utils", "1.0.0", (() => Promise.all([l.e(688), l.e(646), l.e(229), l.e(188), l.e(113)]).then((() => () => l(3012))))), f("framer-motion", "7.10.3", (() => Promise.all([l.e(385), l.e(229), l.e(322)]).then((() => () => l(8385))))), f("gsap", "0.0.0", (() => l.e(138).then((() => () => l(3138))))), f("lodash", "4.17.21", (() => l.e(999).then((() => () => l(1999))))), f("react-dom", "18.2.0", (() => Promise.all([l.e(577), l.e(229)]).then((() => () => l(8577))))), f("react-popper", "2.3.0", (() => Promise.all([l.e(229), l.e(853), l.e(386), l.e(806)]).then((() => () => l(2806))))), f("react-remove-scroll", "2.6.2", (() => Promise.all([l.e(229), l.e(395)]).then((() => () => l(3776))))), f("react-router-dom", "6.17.0", (() => Promise.all([l.e(282), l.e(229)]).then((() => () => l(282))))), f("react", "18.2.0", (() => l.e(508).then((() => () => l(508))))), f("spatial-navigation-polyfill", "1.3.1", (() => l.e(741).then((() => () => l(2741)))))), e[t] = c.length ? Promise.all(c).then((() => e[t] = 1)) : 1
            }
          }
        })(), (() => {
          var e;
          l.g.importScripts && (e = l.g.location + "");
          var r = l.g.document;
          if (!e && r && (r.currentScript && (e = r.currentScript.src), !e)) {
            var t = r.getElementsByTagName("script");
            if (t.length)
              for (var a = t.length - 1; a > -1 && (!e || !/^http(s?):/.test(e));) e = t[a--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), l.p = e
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
                var o = t[0],
                  n = o < 0;
                n && (o = -o - 1);
                for (var d = 0, f = 1, c = !0;; f++, d++) {
                  var l, i, s = f < t.length ? (typeof t[f])[0] : "";
                  if (d >= a.length || "o" == (i = (typeof(l = a[d]))[0])) return !c || ("u" == s ? f > o && !n : "" == s != n);
                  if ("u" == i) {
                    if (!c || "u" != s) return !1
                  } else if (c)
                    if (s == i)
                      if (f <= o) {
                        if (l != t[f]) return !1
                      } else {
                        if (n ? l > t[f] : l < t[f]) return !1;
                        l != t[f] && (c = !1)
                      }
                  else if ("s" != s && "n" != s) {
                    if (n || f <= o) return !1;
                    c = !1, f--
                  } else {
                    if (f <= o || i < s != n) return !1;
                    c = !1
                  } else "s" != s && "n" != s && (c = !1, f--)
                }
              }
              var u = [],
                b = u.pop.bind(u);
              for (d = 1; d < t.length; d++) {
                var p = t[d];
                u.push(1 == p ? b() | b() : 2 == p ? b() & b() : p ? r(p, a) : !b())
              }
              return !!b()
            },
            t = (t, a, o) => {
              var n = t[a];
              return (a = Object.keys(n).reduce(((t, a) => !r(o, a) || t && !((r, t) => {
                r = e(r), t = e(t);
                for (var a = 0;;) {
                  if (a >= r.length) return a < t.length && "u" != (typeof t[a])[0];
                  var o = r[a],
                    n = (typeof o)[0];
                  if (a >= t.length) return "u" == n;
                  var d = t[a],
                    f = (typeof d)[0];
                  if (n != f) return "o" == n && "n" == f || "s" == f || "u" == n;
                  if ("o" != n && "u" != n && o != d) return o < d;
                  a++
                }
              })(t, a) ? t : a), 0)) && n[a]
            },
            a = (e => function(r, t, a, o) {
              var n = l.I(r);
              return n && n.then ? n.then(e.bind(e, r, l.S[r], t, a, o)) : e(r, l.S[r], t, a, o)
            })(((e, r, a, o, n) => {
              var d = r && l.o(r, a) && t(r, a, o);
              return d ? (e => (e.loaded = 1, e.get()))(d) : n()
            })),
            o = {},
            n = {
              2229: () => a("default", "react", [1, 18, 2, 0], (() => l.e(508).then((() => () => l(508))))),
              6188: () => a("default", "lodash", [1, 4, 17, 21], (() => l.e(999).then((() => () => l(1999))))),
              5966: () => a("default", "@rsgweb/utils", [1, "workspace:^"], (() => () => l(3012))),
              9623: () => a("default", "react-router-dom", [1, 6, 11, 2], (() => l.e(282).then((() => () => l(282))))),
              1788: () => a("default", "@rsgweb/locale-tools", [1, "workspace:^"], (() => Promise.all([l.e(688), l.e(927), l.e(188), l.e(605)]).then((() => () => l(9986))))),
              4853: () => a("default", "react-dom", [1, 18, 2, 0], (() => l.e(577).then((() => () => l(8577))))),
              2918: () => a("default", "@rsgweb/rockstar-account", [1, "workspace:^"], (() => Promise.all([l.e(384), l.e(810)]).then((() => () => l(5327))))),
              270: () => a("default", "@rsgweb/modules-core-user-action-menu", [1, "workspace:^"], (() => l.e(89).then((() => () => l(7089))))),
              3581: () => a("default", "gsap", [1, "workspace:^"], (() => l.e(138).then((() => () => l(3138))))),
              3582: () => a("default", "framer-motion", [1, 7, 5, 1], (() => l.e(385).then((() => () => l(8385))))),
              5971: () => a("default", "react-popper", [1, 2, 3, 0], (() => Promise.all([l.e(853), l.e(386), l.e(425)]).then((() => () => l(2806))))),
              9952: () => a("default", "spatial-navigation-polyfill", [1, 1, 3, 1], (() => l.e(741).then((() => () => l(2741))))),
              4269: () => a("default", "react-remove-scroll", [1, 2, 5, 7], (() => l.e(776).then((() => () => l(3776))))),
              3386: () => a("default", "@popperjs/core", [1, 2, 11, 8], (() => l.e(63).then((() => () => l(1063)))))
            },
            d = {
              89: [4269],
              113: [5966, 9623],
              188: [6188],
              229: [2229],
              386: [3386],
              788: [1788],
              853: [4853],
              918: [2918],
              948: [270, 3581, 3582, 5971, 9952]
            },
            f = {};
          l.f.consumes = (e, r) => {
            l.o(d, e) && d[e].forEach((e => {
              if (l.o(o, e)) return r.push(o[e]);
              if (!f[e]) {
                var t = r => {
                  o[e] = 0, l.m[e] = t => {
                    delete l.c[e], t.exports = r()
                  }
                };
                f[e] = !0;
                var a = r => {
                  delete o[e], l.m[e] = t => {
                    throw delete l.c[e], r
                  }
                };
                try {
                  var d = n[e]();
                  d.then ? r.push(o[e] = d.then(t).catch(a)) : t(d)
                } catch (e) {
                  a(e)
                }
              }
            }))
          }
        })(), (() => {
          if ("undefined" != typeof document) {
            var e = {
              295: 0
            };
            l.f.miniCss = (r, t) => {
              e[r] ? t.push(e[r]) : 0 !== e[r] && {
                89: 1,
                948: 1
              } [r] && t.push(e[r] = (e => new Promise(((r, t) => {
                var a = l.miniCssF(e),
                  o = l.p + a;
                if (((e, r) => {
                    for (var t = document.getElementsByTagName("link"), a = 0; a < t.length; a++) {
                      var o = (d = t[a]).getAttribute("data-href") || d.getAttribute("href");
                      if ("stylesheet" === d.rel && (o === e || o === r)) return d
                    }
                    var n = document.getElementsByTagName("style");
                    for (a = 0; a < n.length; a++) {
                      var d;
                      if ((o = (d = n[a]).getAttribute("data-href")) === e || o === r) return d
                    }
                  })(a, o)) return r();
                ((e, r, t, a, o) => {
                  var n = document.createElement("link");
                  n.rel = "stylesheet", n.type = "text/css", n.onerror = n.onload = t => {
                    if (n.onerror = n.onload = null, "load" === t.type) a();
                    else {
                      var d = t && ("load" === t.type ? "missing" : t.type),
                        f = t && t.target && t.target.href || r,
                        c = new Error("Loading CSS chunk " + e + " failed.\n(" + f + ")");
                      c.code = "CSS_CHUNK_LOAD_FAILED", c.type = d, c.request = f, n.parentNode && n.parentNode.removeChild(n), o(c)
                    }
                  }, n.href = r, document.head.appendChild(n)
                })(e, o, 0, r, t)
              })))(r).then((() => {
                e[r] = 0
              }), (t => {
                throw delete e[r], t
              })))
            }
          }
        })(), (() => {
          var e = {
            295: 0
          };
          l.f.j = (r, t) => {
            var a = l.o(e, r) ? e[r] : void 0;
            if (0 !== a)
              if (a) t.push(a[2]);
              else if (/^((18|78|91)8|229|386|853)$/.test(r)) e[r] = 0;
            else {
              var o = new Promise(((t, o) => a = e[r] = [t, o]));
              t.push(a[2] = o);
              var n = l.p + l.u(r),
                d = new Error;
              l.l(n, (t => {
                if (l.o(e, r) && (0 !== (a = e[r]) && (e[r] = void 0), a)) {
                  var o = t && ("load" === t.type ? "missing" : t.type),
                    n = t && t.target && t.target.src;
                  d.message = "Loading chunk " + r + " failed.\n(" + o + ": " + n + ")", d.name = "ChunkLoadError", d.type = o, d.request = n, a[1](d)
                }
              }), "chunk-" + r, r)
            }
          };
          var r = (r, t) => {
              var a, o, n = t[0],
                d = t[1],
                f = t[2],
                c = 0;
              if (n.some((r => 0 !== e[r]))) {
                for (a in d) l.o(d, a) && (l.m[a] = d[a]);
                f && f(l)
              }
              for (r && r(t); c < n.length; c++) o = n[c], l.o(e, o) && e[o] && e[o][0](), e[o] = 0
            },
            t = self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || [];
          t.forEach(r.bind(null, 0)), t.push = r.bind(null, t.push.bind(t))
        })(), l.nc = void 0, l(3787), l(4197)
      })())
    }
  }
}));