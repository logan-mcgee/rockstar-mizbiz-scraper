! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "565c4b93-69a7-4e24-a365-3f82ef994f58", e._sentryDebugIdIdentifier = "sentry-dbid-565c4b93-69a7-4e24-a365-3f82ef994f58")
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
        var e, c, i, f, l = {
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
                  "./destination": () => Promise.all([r.e(664), r.e(628), r.e(576), r.e(860), r.e(232)]).then((() => () => r(31380))),
                  "./index": () => Promise.all([r.e(348), r.e(664), r.e(628), r.e(576), r.e(380)]).then((() => () => r(26724)))
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
          d = {};

        function u(e) {
          var t = d[e];
          if (void 0 !== t) return t.exports;
          var r = d[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return l[e].call(r.exports, r, r.exports, u), r.loaded = !0, r.exports
        }
        return u.m = l, u.c = d, u.y = t, u.amdO = {}, u.n = e => {
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
          68: "e932f27c8c36ff59db3c6e28ff645dd6",
          88: "939281f0596c498a3cfc5a68748e1473",
          100: "dd3c1b4a2cb06352670bf6f7c9d0b1af",
          156: "259107fcb3376b75b054f04f672b2ce2",
          168: "d7e5287a6db4b132add6065ebceb7f06",
          232: "117449cf35f61519cee5b77ad57e55d5",
          276: "2c8053479190486bfe6b79dbdbb5b777",
          288: "da8f425f4e16172ae1ffa4a4b1a64022",
          304: "477b173f39cdf491a39c1819700f2174",
          312: "2dc1042564e32aade3b94e1bad6c861a",
          348: "5bbf918c82bfa02c96ad0d41bf6f52c3",
          380: "f4bb5bb4a8deceda3333616187f8be9b",
          408: "4656e1dca8ab58e3979ee6db3b7a3fb7",
          448: "7c7216046e195f27edc27bea08edfb76",
          576: "e15775815d4a5f956bfe644b8e1dd2c4",
          584: "911222e11a651f5c5e6f43765201bef7",
          628: "c6452a3c8ecb730a26c3006987b57abe",
          664: "a55864df1972eb1c1035e4c46b2b728b",
          720: "d440d64db03509792d274435aef961b0",
          804: "833e225c7aae42b326166a8c39801ce5",
          818: "845e38be5d75bfc364c057444ac0f7ab",
          832: "60423065fd7f65c66f58d65a5898ba12",
          860: "2fb173cbac2b366ebd83732b4fb242a9",
          864: "8030b6a38da5999a80ae38fc2343d26a",
          895: "f8cf017c9c3148796edbe08495fb5839",
          924: "e018d3d6843b394fec2304f1da2454d4",
          980: "6e1a57407c97645eeb070c804781a9c4"
        } [e] + ".js", u.miniCssF = e => "css/" + {
          232: "eb6aea591cbf2f4ea95fdb6c521d40dc",
          380: "3d6ccc9df193a95b2805568a21ba7be3",
          864: "b5f6833a5ceb4de3c915ee63117852d7"
        } [e] + ".css", u.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), u.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), e = {}, c = "@rockstargames/sites-gta:", u.l = (t, r, a, o) => {
          if (e[t]) e[t].push(r);
          else {
            var n, s;
            if (void 0 !== a)
              for (var i = document.getElementsByTagName("script"), f = 0; f < i.length; f++) {
                var l = i[f];
                if (l.getAttribute("src") == t || l.getAttribute("data-webpack") == c + a) {
                  n = l;
                  break
                }
              }
            n || (s = !0, (n = document.createElement("script")).charset = "utf-8", n.timeout = 120, u.nc && n.setAttribute("nonce", u.nc), n.setAttribute("data-webpack", c + a), n.src = t), e[t] = [r];
            var d = (r, a) => {
                n.onerror = n.onload = null, clearTimeout(p);
                var o = e[t];
                if (delete e[t], n.parentNode && n.parentNode.removeChild(n), o && o.forEach((e => e(a))), r) return r(a)
              },
              p = setTimeout(d.bind(null, void 0, {
                type: "timeout",
                target: n
              }), 12e4);
            n.onerror = d.bind(null, n.onerror), n.onload = d.bind(null, n.onload), s && document.head.appendChild(n)
          }
        }, u.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, u.nmd = e => (e.paths = [], e.children || (e.children = []), e), i = {
          61: [3061],
          232: [47036],
          628: [33052, 42836, 45792],
          864: [1532, 1740, 28540, 45652, 73784, 95356]
        }, f = {
          1532: ["default", "./operations/queries", 33864],
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
          u.o(i, e) && i[e].forEach((e => {
            var r = u.R;
            r || (r = []);
            var a = f[e];
            if (!(r.indexOf(a) >= 0)) {
              if (r.push(a), a.p) return t.push(a.p);
              var o = t => {
                  t || (t = new Error("Container missing")), "string" == typeof t.message && (t.message += '\nwhile loading "' + a[1] + '" from ' + a[2]), u.m[e] = () => {
                    throw t
                  }, a.p = 0
                },
                n = (e, r, n, s, c, i) => {
                  try {
                    var f = e(r, n);
                    if (!f || !f.then) return c(f, s, i);
                    var l = f.then((e => c(e, s)), o);
                    if (!i) return l;
                    t.push(a.p = l)
                  } catch (e) {
                    o(e)
                  }
                },
                s = (e, t, o) => n(t.get, a[1], r, 0, c, o),
                c = t => {
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
                c = (e, t, r, a) => {
                  var o = n[e] = n[e] || {},
                    c = o[t];
                  (!c || !c.loaded && (!a != !c.eager ? a : s > c.from)) && (o[t] = {
                    get: r,
                    from: s,
                    eager: !!a
                  })
                },
                i = e => {
                  var t = e => {
                    return t = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(t));
                    var t
                  };
                  try {
                    var o = u(e);
                    if (!o) return;
                    var n = e => e && e.init && e.init(u.S[r], a);
                    if (o.then) return f.push(o.then(n, t));
                    var s = n(o);
                    if (s && s.then) return f.push(s.catch(t))
                  } catch (e) {
                    t(e)
                  }
                },
                f = [];
              return "default" === r && (c("@rockstargames/components", "1.14.0", (() => Promise.all([u.e(156), u.e(664), u.e(628), u.e(864), u.e(860), u.e(980)]).then((() => () => u(18424))))), c("@rockstargames/locale-tools", "1.0.0", (() => Promise.all([u.e(408), u.e(664), u.e(61), u.e(304)]).then((() => () => u(8304))))), c("@rockstargames/router", "1.0.0", (() => Promise.all([u.e(664), u.e(584), u.e(895)]).then((() => () => u(85276))))), c("gsap", "0.0.0", (() => u.e(720).then((() => () => u(77100))))), c("react-focus-lock", "2.9.6", (() => Promise.all([u.e(804), u.e(312), u.e(664)]).then((() => () => u(90312))))), c("react-remove-scroll", "2.5.7", (() => Promise.all([u.e(804), u.e(664), u.e(68)]).then((() => () => u(49068))))), c("react-router-dom", "6.17.0", (() => Promise.all([u.e(168), u.e(88), u.e(832), u.e(664)]).then((() => () => u(84832))))), c("react-router-dom", "6.17.0", (() => Promise.all([u.e(168), u.e(88), u.e(288), u.e(664)]).then((() => () => u(40288))))), c("react-router-dom", "6.17.0", (() => Promise.all([u.e(168), u.e(818), u.e(664)]).then((() => () => u(64818))))), c("react", "18.2.0", (() => u.e(100).then((() => () => u(99480))))), i(33864), i(81128), i(9344), i(95190), i(88428)), f.length ? e[r] = Promise.all(f).then((() => e[r] = 1)) : e[r] = 1
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
                for (var s = 0, c = 1, i = !0;; c++, s++) {
                  var f, l, d = c < r.length ? (typeof r[c])[0] : "";
                  if (s >= a.length || "o" == (l = (typeof(f = a[s]))[0])) return !i || ("u" == d ? c > o && !n : "" == d != n);
                  if ("u" == l) {
                    if (!i || "u" != d) return !1
                  } else if (i)
                    if (d == l)
                      if (c <= o) {
                        if (f != r[c]) return !1
                      } else {
                        if (n ? f > r[c] : f < r[c]) return !1;
                        f != r[c] && (i = !1)
                      }
                  else if ("s" != d && "n" != d) {
                    if (n || c <= o) return !1;
                    i = !1, c--
                  } else {
                    if (c <= o || l < d != n) return !1;
                    i = !1
                  } else "s" != d && "n" != d && (i = !1, c--)
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
                    c = (typeof s)[0];
                  if (n != c) return "o" == n && "n" == c || "s" == c || "u" == n;
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
              69844: () => a("default", "react-router-dom", [1, 6, 11, 2], (() => Promise.all([u.e(168), u.e(88), u.e(288)]).then((() => () => u(40288))))),
              77328: () => a("default", "react-remove-scroll", [1, 2, 5, 7], (() => Promise.all([u.e(804), u.e(448)]).then((() => () => u(49068))))),
              9860: () => a("default", "@rockstargames/components", [1, "workspace:*"], (() => Promise.all([u.e(156), u.e(864)]).then((() => () => u(18424))))),
              81968: () => a("default", "@rockstargames/router", [1, "workspace:*"], (() => Promise.all([u.e(584), u.e(276)]).then((() => () => u(85276))))),
              57013: () => a("default", "react-router-dom", [1, 6, 11, 2], (() => Promise.all([u.e(168), u.e(88), u.e(832)]).then((() => () => u(84832))))),
              98584: () => a("default", "react-router-dom", [1, 6, 11, 2], (() => Promise.all([u.e(168), u.e(818)]).then((() => () => u(64818)))))
            },
            s = {
              380: [81968],
              576: [69844, 77328],
              584: [98584],
              628: [36960, 41272, 67356],
              664: [51664],
              860: [9860],
              864: [57013]
            },
            c = {};
          u.f.consumes = (e, t) => {
            u.o(s, e) && s[e].forEach((e => {
              if (u.o(o, e)) return t.push(o[e]);
              if (!c[e]) {
                var r = t => {
                  o[e] = 0, u.m[e] = r => {
                    delete u.c[e], r.exports = t()
                  }
                };
                c[e] = !0;
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
                864: 1
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
                        c = r && r.target && r.target.href || t,
                        i = new Error("Loading CSS chunk " + e + " failed.\n(" + c + ")");
                      i.code = "CSS_CHUNK_LOAD_FAILED", i.type = s, i.request = c, n.parentNode && n.parentNode.removeChild(n), o(i)
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
              else if (/^(6(1|28|64)|584|860)$/.test(t)) e[t] = 0;
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
                c = r[2],
                i = 0;
              if (n.some((t => 0 !== e[t]))) {
                for (a in s) u.o(s, a) && (u.m[a] = s[a]);
                c && c(u)
              }
              for (t && t(r); i < n.length; i++) o = n[i], u.o(e, o) && e[o] && e[o][0](), e[o] = 0
            },
            r = self.webpackChunk_rockstargames_sites_gta = self.webpackChunk_rockstargames_sites_gta || [];
          r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
        })(), u.nc = void 0, u(93824), u(22218)
      })())
    }
  }
}));