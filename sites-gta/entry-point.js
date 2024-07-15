! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "278f0214-b779-4bc4-98bc-65b6ec4154ae", e._sentryDebugIdIdentifier = "sentry-dbid-278f0214-b779-4bc4-98bc-65b6ec4154ae")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-gta",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register(["@rockstargames/graph-client", "@rockstargames/modules-core-sc-user", "@rockstargames/sites-rockstargames", "@rockstargames/tina", "@rockstargames/utils"], (function(e, t) {
  var r = {},
    a = {},
    o = {},
    n = {},
    s = {};
  return Object.defineProperty(r, "__esModule", {
    value: !0
  }), Object.defineProperty(a, "__esModule", {
    value: !0
  }), Object.defineProperty(o, "__esModule", {
    value: !0
  }), Object.defineProperty(n, "__esModule", {
    value: !0
  }), Object.defineProperty(s, "__esModule", {
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
        o[t] = e[t]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(t) {
        n[t] = e[t]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(t) {
        s[t] = e[t]
      }))
    }],
    execute: function() {
      e((() => {
        var e, i, c, d, f = {
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
                var s = a.slice(0, n + 1);
                return r.protocol + "//" + r.host + s
              };
              Number.isInteger
            },
            22218: (e, t, r) => {
              "use strict";
              var a = {
                  "./destination": () => Promise.all([r.e(664), r.e(496), r.e(576), r.e(860), r.e(232)]).then((() => () => r(31380))),
                  "./index": () => Promise.all([r.e(348), r.e(664), r.e(496), r.e(576), r.e(380)]).then((() => () => r(26724)))
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
            },
            33864: e => {
              "use strict";
              e.exports = r
            },
            81128: e => {
              "use strict";
              e.exports = a
            },
            95190: e => {
              "use strict";
              e.exports = o
            },
            88428: e => {
              "use strict";
              e.exports = n
            },
            9344: e => {
              "use strict";
              e.exports = s
            }
          },
          l = {};

        function u(e) {
          var t = l[e];
          if (void 0 !== t) return t.exports;
          var r = l[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return f[e].call(r.exports, r, r.exports, u), r.loaded = !0, r.exports
        }
        return u.m = f, u.c = l, u.y = t, u.amdO = {}, u.n = e => {
          var t = e && e.__esModule ? () => e.default : () => e;
          return u.d(t, {
            a: t
          }), t
        }, u.d = (e, t) => {
          for (var r in t) u.o(t, r) && !u.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: t[r]
          })
        }, u.f = {}, u.e = e => Promise.all(Object.keys(u.f).reduce(((t, r) => (u.f[r](e, t), t)), [])), u.u = e => "js/" + {
          61: "03b4d0d4efce44951a9bba6a965449d9",
          88: "01e77cf1241c68e740767e7b0183822a",
          100: "8d47ce0d62b472cd7f4bdbce52fb282c",
          155: "c1e5daae1e67c9bff0ea613474dad911",
          168: "251c729121dc6172f2c213d89f697204",
          232: "e2e425318f39f6d38848b095158f8be5",
          239: "761da1e7342c56db2b5f0437db9dc689",
          276: "5dd298b4c59f3ff923f855a7a92e51ba",
          288: "9065f910ad8c53d59118735f60d545db",
          304: "0733280bef08efa6644827e1f4b3c6e8",
          312: "81bbe372011ea67a2e095a8f815e963e",
          348: "ae631a0ff16c3c12f85cbbe086486261",
          380: "a7d8a11ad380c34ce514a021cc256ea7",
          408: "813652b4e058020cb12084bc9ead9901",
          496: "38609350a6e4e339e76b4b325bd3689d",
          576: "2ef2d6b8ba09993c34e70336de2ee727",
          584: "911222e11a651f5c5e6f43765201bef7",
          620: "5069cf356b9b02fa22594f59b2ef440f",
          664: "a55864df1972eb1c1035e4c46b2b728b",
          720: "dc1e540a9e865bcc8d5e193a6e8d6a2d",
          804: "cdeecaf3b96fd7ec3639baa00f4d81fe",
          818: "b30379b1c190aecc052504154d074121",
          832: "38bbe5963b0dd92175afc95429cd107a",
          852: "bd3c1c1391c2fcec5092a9888d24380b",
          860: "2fb173cbac2b366ebd83732b4fb242a9",
          895: "009514bcc38c18d15d38c8624267c707",
          924: "234026fc000052f0908b9fe2ca671132",
          980: "0eb72b65032d86f668ad02e07dbc45ba"
        } [e] + ".js", u.miniCssF = e => "css/" + {
          232: "eb6aea591cbf2f4ea95fdb6c521d40dc",
          380: "3d6ccc9df193a95b2805568a21ba7be3",
          852: "5043294fe1511e238323a46c41aeff9b"
        } [e] + ".css", u.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), u.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), e = {}, i = "@rockstargames/sites-gta:", u.l = (t, r, a, o) => {
          if (e[t]) e[t].push(r);
          else {
            var n, s;
            if (void 0 !== a)
              for (var c = document.getElementsByTagName("script"), d = 0; d < c.length; d++) {
                var f = c[d];
                if (f.getAttribute("src") == t || f.getAttribute("data-webpack") == i + a) {
                  n = f;
                  break
                }
              }
            n || (s = !0, (n = document.createElement("script")).charset = "utf-8", n.timeout = 120, u.nc && n.setAttribute("nonce", u.nc), n.setAttribute("data-webpack", i + a), n.src = t), e[t] = [r];
            var l = (r, a) => {
                n.onerror = n.onload = null, clearTimeout(p);
                var o = e[t];
                if (delete e[t], n.parentNode && n.parentNode.removeChild(n), o && o.forEach((e => e(a))), r) return r(a)
              },
              p = setTimeout(l.bind(null, void 0, {
                type: "timeout",
                target: n
              }), 12e4);
            n.onerror = l.bind(null, n.onerror), n.onload = l.bind(null, n.onload), s && document.head.appendChild(n)
          }
        }, u.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, u.nmd = e => (e.paths = [], e.children || (e.children = []), e), c = {
          61: [3061],
          232: [47036],
          496: [33052, 42836, 45792],
          852: [1740, 28540, 45652, 73784, 95356]
        }, d = {
          1740: ["default", "./index", 88428],
          3061: ["default", "./hooks", 9344],
          28540: ["default", "./operations/fragments/paging.graphql", 33864],
          33052: ["default", "./index", 33864],
          42836: ["default", "./index", 81128],
          45652: ["default", "./helpers/uploads", 88428],
          45792: ["default", "./index", 9344],
          47036: ["default", "./components", 95190],
          73784: ["default", "./operations/fragments/newswire-post.graphql", 33864],
          95356: ["default", "./helpers", 88428]
        }, u.f.remotes = (e, t) => {
          u.o(c, e) && c[e].forEach((e => {
            var r = u.R;
            r || (r = []);
            var a = d[e];
            if (!(r.indexOf(a) >= 0)) {
              if (r.push(a), a.p) return t.push(a.p);
              var o = t => {
                  t || (t = new Error("Container missing")), "string" == typeof t.message && (t.message += '\nwhile loading "' + a[1] + '" from ' + a[2]), u.m[e] = () => {
                    throw t
                  }, a.p = 0
                },
                n = (e, r, n, s, i, c) => {
                  try {
                    var d = e(r, n);
                    if (!d || !d.then) return i(d, s, c);
                    var f = d.then((e => i(e, s)), o);
                    if (!c) return f;
                    t.push(a.p = f)
                  } catch (e) {
                    o(e)
                  }
                },
                s = (e, t, o) => n(t.get, a[1], r, 0, i, o),
                i = t => {
                  a.p = 1, u.m[e] = e => {
                    e.exports = t()
                  }
                };
              n(u, a[2], 0, 0, ((e, t, r) => e ? n(u.I, a[0], 0, e, s, r) : o()), 1)
            }
          }))
        }, (() => {
          u.S = {};
          var e = {},
            t = {};
          u.I = (r, a) => {
            a || (a = []);
            var o = t[r];
            if (o || (o = t[r] = {}), !(a.indexOf(o) >= 0)) {
              if (a.push(o), e[r]) return e[r];
              u.o(u.S, r) || (u.S[r] = {});
              var n = u.S[r],
                s = "@rockstargames/sites-gta",
                i = (e, t, r, a) => {
                  var o = n[e] = n[e] || {},
                    i = o[t];
                  (!i || !i.loaded && (!a != !i.eager ? a : s > i.from)) && (o[t] = {
                    get: r,
                    from: s,
                    eager: !!a
                  })
                },
                c = e => {
                  var t = e => {
                    return t = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(t));
                    var t
                  };
                  try {
                    var o = u(e);
                    if (!o) return;
                    var n = e => e && e.init && e.init(u.S[r], a);
                    if (o.then) return d.push(o.then(n, t));
                    var s = n(o);
                    if (s && s.then) return d.push(s.catch(t))
                  } catch (e) {
                    t(e)
                  }
                },
                d = [];
              return "default" === r && (i("@rockstargames/components", "1.14.0", (() => Promise.all([u.e(155), u.e(664), u.e(496), u.e(852), u.e(860), u.e(980)]).then((() => () => u(65596))))), i("@rockstargames/locale-tools", "1.0.0", (() => Promise.all([u.e(408), u.e(664), u.e(61), u.e(304)]).then((() => () => u(8304))))), i("@rockstargames/router", "1.0.0", (() => Promise.all([u.e(664), u.e(584), u.e(895)]).then((() => () => u(85276))))), i("gsap", "0.0.0", (() => u.e(720).then((() => () => u(77100))))), i("react-focus-lock", "2.9.6", (() => Promise.all([u.e(804), u.e(312), u.e(664)]).then((() => () => u(90312))))), i("react-remove-scroll", "2.5.7", (() => Promise.all([u.e(804), u.e(664), u.e(620)]).then((() => () => u(91620))))), i("react-router-dom", "6.17.0", (() => Promise.all([u.e(168), u.e(88), u.e(832), u.e(664)]).then((() => () => u(84832))))), i("react-router-dom", "6.17.0", (() => Promise.all([u.e(168), u.e(88), u.e(288), u.e(664)]).then((() => () => u(40288))))), i("react-router-dom", "6.17.0", (() => Promise.all([u.e(168), u.e(818), u.e(664)]).then((() => () => u(64818))))), i("react", "18.2.0", (() => u.e(100).then((() => () => u(99480))))), c(33864), c(81128), c(9344), c(95190), c(88428)), d.length ? e[r] = Promise.all(d).then((() => e[r] = 1)) : e[r] = 1
            }
          }
        })(), (() => {
          var e;
          u.g.importScripts && (e = u.g.location + "");
          var t = u.g.document;
          if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
            var r = t.getElementsByTagName("script");
            if (r.length)
              for (var a = r.length - 1; a > -1 && !e;) e = r[a--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), u.p = e
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
                var o = r[0],
                  n = o < 0;
                n && (o = -o - 1);
                for (var s = 0, i = 1, c = !0;; i++, s++) {
                  var d, f, l = i < r.length ? (typeof r[i])[0] : "";
                  if (s >= a.length || "o" == (f = (typeof(d = a[s]))[0])) return !c || ("u" == l ? i > o && !n : "" == l != n);
                  if ("u" == f) {
                    if (!c || "u" != l) return !1
                  } else if (c)
                    if (l == f)
                      if (i <= o) {
                        if (d != r[i]) return !1
                      } else {
                        if (n ? d > r[i] : d < r[i]) return !1;
                        d != r[i] && (c = !1)
                      }
                  else if ("s" != l && "n" != l) {
                    if (n || i <= o) return !1;
                    c = !1, i--
                  } else {
                    if (i <= o || f < l != n) return !1;
                    c = !1
                  } else "s" != l && "n" != l && (c = !1, i--)
                }
              }
              var u = [],
                p = u.pop.bind(u);
              for (s = 1; s < r.length; s++) {
                var b = r[s];
                u.push(1 == b ? p() | p() : 2 == b ? p() & p() : b ? t(b, a) : !p())
              }
              return !!p()
            },
            r = (r, a, o) => {
              var n = r[a];
              return (a = Object.keys(n).reduce(((r, a) => !t(o, a) || r && !((t, r) => {
                t = e(t), r = e(r);
                for (var a = 0;;) {
                  if (a >= t.length) return a < r.length && "u" != (typeof r[a])[0];
                  var o = t[a],
                    n = (typeof o)[0];
                  if (a >= r.length) return "u" == n;
                  var s = r[a],
                    i = (typeof s)[0];
                  if (n != i) return "o" == n && "n" == i || "s" == i || "u" == n;
                  if ("o" != n && "u" != n && o != s) return o < s;
                  a++
                }
              })(r, a) ? r : a), 0)) && n[a]
            },
            a = (e => function(t, r, a, o) {
              var n = u.I(t);
              return n && n.then ? n.then(e.bind(e, t, u.S[t], r, a, o)) : e(t, u.S[t], r, a, o)
            })(((e, t, a, o, n) => {
              var s = t && u.o(t, a) && r(t, a, o);
              return s ? (e => (e.loaded = 1, e.get()))(s) : n()
            })),
            o = {},
            n = {
              51664: () => a("default", "react", [1, 18, 2, 0], (() => u.e(100).then((() => () => u(99480))))),
              36960: () => a("default", "react-focus-lock", [1, 2, 9, 6], (() => Promise.all([u.e(804), u.e(312)]).then((() => () => u(90312))))),
              41272: () => a("default", "@rockstargames/locale-tools", [1, "workspace:*"], (() => Promise.all([u.e(408), u.e(61), u.e(924)]).then((() => () => u(8304))))),
              67356: () => a("default", "gsap", [1, "workspace:*"], (() => u.e(720).then((() => () => u(77100))))),
              76745: () => a("default", "react-remove-scroll", [1, 2, 5, 7], (() => Promise.all([u.e(804), u.e(239)]).then((() => () => u(91620))))),
              69844: () => a("default", "react-router-dom", [1, 6, 11, 2], (() => Promise.all([u.e(168), u.e(88), u.e(288)]).then((() => () => u(40288))))),
              9860: () => a("default", "@rockstargames/components", [1, "workspace:*"], (() => Promise.all([u.e(155), u.e(852)]).then((() => () => u(65596))))),
              81968: () => a("default", "@rockstargames/router", [1, "workspace:*"], (() => Promise.all([u.e(584), u.e(276)]).then((() => () => u(85276))))),
              57013: () => a("default", "react-router-dom", [1, 6, 11, 2], (() => Promise.all([u.e(168), u.e(88), u.e(832)]).then((() => () => u(84832))))),
              98584: () => a("default", "react-router-dom", [1, 6, 11, 2], (() => Promise.all([u.e(168), u.e(818)]).then((() => () => u(64818)))))
            },
            s = {
              380: [81968],
              496: [36960, 41272, 67356, 76745],
              576: [69844],
              584: [98584],
              664: [51664],
              852: [57013],
              860: [9860]
            },
            i = {};
          u.f.consumes = (e, t) => {
            u.o(s, e) && s[e].forEach((e => {
              if (u.o(o, e)) return t.push(o[e]);
              if (!i[e]) {
                var r = t => {
                  o[e] = 0, u.m[e] = r => {
                    delete u.c[e], r.exports = t()
                  }
                };
                i[e] = !0;
                var a = t => {
                  delete o[e], u.m[e] = r => {
                    throw delete u.c[e], t
                  }
                };
                try {
                  var s = n[e]();
                  s.then ? t.push(o[e] = s.then(r).catch(a)) : r(s)
                } catch (e) {
                  a(e)
                }
              }
            }))
          }
        })(), (() => {
          if ("undefined" != typeof document) {
            var e = {
              1: 0
            };
            u.f.miniCss = (t, r) => {
              e[t] ? r.push(e[t]) : 0 !== e[t] && {
                232: 1,
                380: 1,
                852: 1
              } [t] && r.push(e[t] = (e => new Promise(((t, r) => {
                var a = u.miniCssF(e),
                  o = u.p + a;
                if (((e, t) => {
                    for (var r = document.getElementsByTagName("link"), a = 0; a < r.length; a++) {
                      var o = (s = r[a]).getAttribute("data-href") || s.getAttribute("href");
                      if ("stylesheet" === s.rel && (o === e || o === t)) return s
                    }
                    var n = document.getElementsByTagName("style");
                    for (a = 0; a < n.length; a++) {
                      var s;
                      if ((o = (s = n[a]).getAttribute("data-href")) === e || o === t) return s
                    }
                  })(a, o)) return t();
                ((e, t, r, a, o) => {
                  var n = document.createElement("link");
                  n.rel = "stylesheet", n.type = "text/css", n.onerror = n.onload = r => {
                    if (n.onerror = n.onload = null, "load" === r.type) a();
                    else {
                      var s = r && ("load" === r.type ? "missing" : r.type),
                        i = r && r.target && r.target.href || t,
                        c = new Error("Loading CSS chunk " + e + " failed.\n(" + i + ")");
                      c.code = "CSS_CHUNK_LOAD_FAILED", c.type = s, c.request = i, n.parentNode && n.parentNode.removeChild(n), o(c)
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
            1: 0
          };
          u.f.j = (t, r) => {
            var a = u.o(e, t) ? e[t] : void 0;
            if (0 !== a)
              if (a) r.push(a[2]);
              else if (/^(496|584|61|664|860)$/.test(t)) e[t] = 0;
            else {
              var o = new Promise(((r, o) => a = e[t] = [r, o]));
              r.push(a[2] = o);
              var n = u.p + u.u(t),
                s = new Error;
              u.l(n, (r => {
                if (u.o(e, t) && (0 !== (a = e[t]) && (e[t] = void 0), a)) {
                  var o = r && ("load" === r.type ? "missing" : r.type),
                    n = r && r.target && r.target.src;
                  s.message = "Loading chunk " + t + " failed.\n(" + o + ": " + n + ")", s.name = "ChunkLoadError", s.type = o, s.request = n, a[1](s)
                }
              }), "chunk-" + t, t)
            }
          };
          var t = (t, r) => {
              var a, o, n = r[0],
                s = r[1],
                i = r[2],
                c = 0;
              if (n.some((t => 0 !== e[t]))) {
                for (a in s) u.o(s, a) && (u.m[a] = s[a]);
                i && i(u)
              }
              for (t && t(r); c < n.length; c++) o = n[c], u.o(e, o) && e[o] && e[o][0](), e[o] = 0
            },
            r = self.webpackChunk_rockstargames_sites_gta = self.webpackChunk_rockstargames_sites_gta || [];
          r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
        })(), u.nc = void 0, u(93824), u(22218)
      })())
    }
  }
}));