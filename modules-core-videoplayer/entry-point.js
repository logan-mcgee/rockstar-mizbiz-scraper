! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "c2458163-cd81-4c20-856f-2a3a1f15ff46", e._sentryDebugIdIdentifier = "sentry-dbid-c2458163-cd81-4c20-856f-2a3a1f15ff46")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "692b6956abd6177da3ac6da14c81527e5159ed6d",
  packageName: "@rockstargames/modules-core-videoplayer",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "692b6956abd6177da3ac6da14c81527e5159ed6d"
}, System.register(["@rockstargames/graph-client", "@rockstargames/intl", "@rockstargames/modules-core-agegate", "@rockstargames/modules-core-sc-user", "@rockstargames/tina", "@rockstargames/utils"], (function(e, t) {
  var r = {},
    a = {},
    o = {},
    n = {},
    d = {},
    s = {};
  return Object.defineProperty(r, "__esModule", {
    value: !0
  }), Object.defineProperty(a, "__esModule", {
    value: !0
  }), Object.defineProperty(o, "__esModule", {
    value: !0
  }), Object.defineProperty(n, "__esModule", {
    value: !0
  }), Object.defineProperty(d, "__esModule", {
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
        d[t] = e[t]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(t) {
        s[t] = e[t]
      }))
    }],
    execute: function() {
      e((() => {
        var e, f, i, c, l = {
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
            65536: (e, t, r) => {
              "use strict";
              var a = {
                  "./bootstrap": () => r.e(236).then((() => () => r(46236))),
                  "./index": () => Promise.all([r.e(664), r.e(372), r.e(804), r.e(660), r.e(724), r.e(800)]).then((() => () => r(6800))),
                  "./tina": () => Promise.all([r.e(664), r.e(804), r.e(660), r.e(532), r.e(68)]).then((() => () => r(65068))),
                  "./tinaBlockTemplates": () => Promise.all([r.e(664), r.e(804), r.e(660), r.e(532), r.e(68)]).then((() => () => r(65068)))
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
            50800: e => {
              "use strict";
              e.exports = a
            },
            25430: e => {
              "use strict";
              e.exports = o
            },
            81128: e => {
              "use strict";
              e.exports = n
            },
            88428: e => {
              "use strict";
              e.exports = d
            },
            9344: e => {
              "use strict";
              e.exports = s
            }
          },
          u = {};

        function p(e) {
          var t = u[e];
          if (void 0 !== t) return t.exports;
          var r = u[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return l[e].call(r.exports, r, r.exports, p), r.loaded = !0, r.exports
        }
        return p.m = l, p.c = u, p.y = t, p.amdO = {}, p.n = e => {
          var t = e && e.__esModule ? () => e.default : () => e;
          return p.d(t, {
            a: t
          }), t
        }, p.d = (e, t) => {
          for (var r in t) p.o(t, r) && !p.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: t[r]
          })
        }, p.f = {}, p.e = e => Promise.all(Object.keys(p.f).reduce(((t, r) => (p.f[r](e, t), t)), [])), p.u = e => "js/" + {
          61: "4badf4f19163415b16d3eec26bdf7b75",
          68: "5d7ecd7719f3ac9d0d70bdc3d52941ef",
          84: "e079ec96e35148223615134d1fd0c523",
          92: "9e0f6674e3d0f7fbdc8556ade3a475c0",
          100: "0048e0875a048b19a5453faaa5fb7a81",
          132: "79fe2cf88915b1d415f41152c4abdf37",
          236: "ccfbf96e9181321d13c52d5811c0d93e",
          240: "879985486230fa80d33b7e812cb5ea10",
          304: "1f75f89bb06f249e1a4f5ef6d38187bb",
          324: "f1c8d10d5f2cb0b7b791c4d4f76363d6",
          364: "298e6a2b6ff50fdbc938bdcd30aea3e1",
          372: "f91bde5c6e398c71b513dcded7df63de",
          378: "8da46e6667e39cf13f854e4d670f81a8",
          408: "d41ce2901131ac90f3b31a3fff4fb6a7",
          512: "d69c86661b765d1cb316b3316b62f79f",
          532: "4a1323184690a9e97bd030edb45df771",
          544: "b734ebecc56872640b9496d9d750093a",
          560: "ba8c54da0cec219b95f8da4189c398b1",
          660: "ef1299e0420fc4c03c1334731567fa4b",
          664: "ac868ef8a85fd8d71926d723b8773d61",
          716: "29f8c4b93dd8bc127cef27b0edfb9e59",
          718: "cafe3ec7475d9121fcb29c7f88ca7017",
          724: "dd001067496ca3b1cf8680bf32d91cd9",
          772: "2684141872d6d5c768ab896cae3cb6a3",
          784: "6d2ec2a1c1f7d974d450c698cfea2fe4",
          792: "b095272e9db1a6ef6576aa75638315e2",
          800: "c2b671f11ebd119330c8baa06b7043fb",
          804: "c16dc7e47fa9edf16cd0804b8cb529a0",
          924: "407fe5ef61860bdbb1c8ac43e0034569"
        } [e] + ".js", p.miniCssF = e => "css/" + {
          84: "d7ca61fd6a2aad8173bb0f6e692cae25",
          324: "a126229ede95b503bfddbd53efcedae3",
          724: "b487ba29e6f65821b1fffd89c37e0fef",
          800: "62034eb29621b1ccaf0c43836e9b5782"
        } [e] + ".css", p.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), p.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), e = {}, f = "@rockstargames/modules-core-videoplayer:", p.l = (t, r, a, o) => {
          if (e[t]) e[t].push(r);
          else {
            var n, d;
            if (void 0 !== a)
              for (var s = document.getElementsByTagName("script"), i = 0; i < s.length; i++) {
                var c = s[i];
                if (c.getAttribute("src") == t || c.getAttribute("data-webpack") == f + a) {
                  n = c;
                  break
                }
              }
            n || (d = !0, (n = document.createElement("script")).charset = "utf-8", n.timeout = 120, p.nc && n.setAttribute("nonce", p.nc), n.setAttribute("data-webpack", f + a), n.src = t), e[t] = [r];
            var l = (r, a) => {
                n.onerror = n.onload = null, clearTimeout(u);
                var o = e[t];
                if (delete e[t], n.parentNode && n.parentNode.removeChild(n), o && o.forEach((e => e(a))), r) return r(a)
              },
              u = setTimeout(l.bind(null, void 0, {
                type: "timeout",
                target: n
              }), 12e4);
            n.onerror = l.bind(null, n.onerror), n.onload = l.bind(null, n.onload), d && document.head.appendChild(n)
          }
        }, p.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, p.nmd = e => (e.paths = [], e.children || (e.children = []), e), i = {
          61: [3061],
          68: [32104, 89468],
          84: [1740, 28540, 45652, 73784, 95356],
          324: [42708, 75016, 85092],
          372: [42836, 45792],
          532: [1532],
          724: [16660, 55120],
          804: [33052]
        }, c = {
          1532: ["default", "./operations/queries", 33864],
          1740: ["default", "./index", 88428],
          3061: ["default", "./hooks", 9344],
          16660: ["default", "./index", 25430],
          28540: ["default", "./operations/fragments/paging.graphql", 33864],
          32104: ["default", "./ui", 88428],
          33052: ["default", "./index", 33864],
          42708: ["default", "./providers", 81128],
          42836: ["default", "./index", 81128],
          45652: ["default", "./helpers/uploads", 88428],
          45792: ["default", "./index", 9344],
          55120: ["default", "./messages", 50800],
          73784: ["default", "./operations/fragments/newswire-post.graphql", 33864],
          75016: ["default", "./index", 50800],
          85092: ["default", "./gtm", 9344],
          89468: ["default", "./properties", 88428],
          95356: ["default", "./helpers", 88428]
        }, p.f.remotes = (e, t) => {
          p.o(i, e) && i[e].forEach((e => {
            var r = p.R;
            r || (r = []);
            var a = c[e];
            if (!(r.indexOf(a) >= 0)) {
              if (r.push(a), a.p) return t.push(a.p);
              var o = t => {
                  t || (t = new Error("Container missing")), "string" == typeof t.message && (t.message += '\nwhile loading "' + a[1] + '" from ' + a[2]), p.m[e] = () => {
                    throw t
                  }, a.p = 0
                },
                n = (e, r, n, d, s, f) => {
                  try {
                    var i = e(r, n);
                    if (!i || !i.then) return s(i, d, f);
                    var c = i.then((e => s(e, d)), o);
                    if (!f) return c;
                    t.push(a.p = c)
                  } catch (e) {
                    o(e)
                  }
                },
                d = (e, t, o) => n(t.get, a[1], r, 0, s, o),
                s = t => {
                  a.p = 1, p.m[e] = e => {
                    e.exports = t()
                  }
                };
              n(p, a[2], 0, 0, ((e, t, r) => e ? n(p.I, a[0], 0, e, d, r) : o()), 1)
            }
          }))
        }, (() => {
          p.S = {};
          var e = {},
            t = {};
          p.I = (r, a) => {
            a || (a = []);
            var o = t[r];
            if (o || (o = t[r] = {}), !(a.indexOf(o) >= 0)) {
              if (a.push(o), e[r]) return e[r];
              p.o(p.S, r) || (p.S[r] = {});
              var n = p.S[r],
                d = "@rockstargames/modules-core-videoplayer",
                s = (e, t, r, a) => {
                  var o = n[e] = n[e] || {},
                    s = o[t];
                  (!s || !s.loaded && (!a != !s.eager ? a : d > s.from)) && (o[t] = {
                    get: r,
                    from: d,
                    eager: !!a
                  })
                },
                f = e => {
                  var t = e => {
                    return t = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(t));
                    var t
                  };
                  try {
                    var o = p(e);
                    if (!o) return;
                    var n = e => e && e.init && e.init(p.S[r], a);
                    if (o.then) return i.push(o.then(n, t));
                    var d = n(o);
                    if (d && d.then) return i.push(d.catch(t))
                  } catch (e) {
                    t(e)
                  }
                },
                i = [];
              return "default" === r && (s("@rockstargames/components", "1.14.0", (() => Promise.all([p.e(92), p.e(544), p.e(664), p.e(372), p.e(804), p.e(660), p.e(364), p.e(532), p.e(84), p.e(240)]).then((() => () => p(43080))))), s("@rockstargames/locale-tools", "1.0.0", (() => Promise.all([p.e(92), p.e(408), p.e(664), p.e(61), p.e(924)]).then((() => () => p(8304))))), s("dompurify", "2.4.7", (() => p.e(560).then((() => () => p(8560))))), s("hammerjs", "2.0.8", (() => p.e(772).then((() => () => p(65772))))), s("lodash", "4.17.21", (() => p.e(784).then((() => () => p(79784))))), s("react-dom", "18.2.0", (() => Promise.all([p.e(716), p.e(664)]).then((() => () => p(63716))))), s("react-intersection-observer", "9.5.2", (() => Promise.all([p.e(664), p.e(512)]).then((() => () => p(41512))))), s("react-router-dom", "6.17.0", (() => Promise.all([p.e(718), p.e(664)]).then((() => () => p(45718))))), s("react", "18.2.0", (() => p.e(100).then((() => () => p(77100))))), s("uuid", "9.0.1", (() => p.e(378).then((() => () => p(11378))))), f(81128), f(9344), f(33864), f(50800), f(25430), f(88428)), i.length ? e[r] = Promise.all(i).then((() => e[r] = 1)) : e[r] = 1
            }
          }
        })(), (() => {
          var e;
          p.g.importScripts && (e = p.g.location + "");
          var t = p.g.document;
          if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
            var r = t.getElementsByTagName("script");
            if (r.length)
              for (var a = r.length - 1; a > -1 && !e;) e = r[a--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), p.p = e
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
                for (var d = 0, s = 1, f = !0;; s++, d++) {
                  var i, c, l = s < r.length ? (typeof r[s])[0] : "";
                  if (d >= a.length || "o" == (c = (typeof(i = a[d]))[0])) return !f || ("u" == l ? s > o && !n : "" == l != n);
                  if ("u" == c) {
                    if (!f || "u" != l) return !1
                  } else if (f)
                    if (l == c)
                      if (s <= o) {
                        if (i != r[s]) return !1
                      } else {
                        if (n ? i > r[s] : i < r[s]) return !1;
                        i != r[s] && (f = !1)
                      }
                  else if ("s" != l && "n" != l) {
                    if (n || s <= o) return !1;
                    f = !1, s--
                  } else {
                    if (s <= o || c < l != n) return !1;
                    f = !1
                  } else "s" != l && "n" != l && (f = !1, s--)
                }
              }
              var u = [],
                p = u.pop.bind(u);
              for (d = 1; d < r.length; d++) {
                var h = r[d];
                u.push(1 == h ? p() | p() : 2 == h ? p() & p() : h ? t(h, a) : !p())
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
                  var d = r[a],
                    s = (typeof d)[0];
                  if (n != s) return "o" == n && "n" == s || "s" == s || "u" == n;
                  if ("o" != n && "u" != n && o != d) return o < d;
                  a++
                }
              })(r, a) ? r : a), 0)) && n[a]
            },
            a = (e => function(t, r, a, o) {
              var n = p.I(t);
              return n && n.then ? n.then(e.bind(e, t, p.S[t], r, a, o)) : e(t, p.S[t], r, a, o)
            })(((e, t, a, o, n) => {
              var d = t && p.o(t, a) && r(t, a, o);
              return d ? (e => (e.loaded = 1, e.get()))(d) : n()
            })),
            o = {},
            n = {
              51664: () => a("default", "react", [1, 18, 2, 0], (() => p.e(100).then((() => () => p(77100))))),
              41272: () => a("default", "@rockstargames/locale-tools", [1, "workspace:*"], (() => Promise.all([p.e(92), p.e(408), p.e(61), p.e(304)]).then((() => () => p(8304))))),
              57013: () => a("default", "react-router-dom", [1, 6, 11, 2], (() => p.e(718).then((() => () => p(45718))))),
              68e3: () => a("default", "uuid", [1, 9, 0, 0], (() => p.e(378).then((() => () => p(11378))))),
              97860: () => a("default", "hammerjs", [1, 2, 0, 8], (() => p.e(772).then((() => () => p(65772))))),
              9860: () => a("default", "@rockstargames/components", [1, "workspace:*"], (() => Promise.all([p.e(92), p.e(544), p.e(372), p.e(660), p.e(364), p.e(532), p.e(84)]).then((() => () => p(43080))))),
              73660: () => a("default", "lodash", [1, 4, 17, 21], (() => p.e(784).then((() => () => p(79784))))),
              77364: () => a("default", "react-dom", [1, 18, 2, 0], (() => p.e(716).then((() => () => p(63716))))),
              60380: () => a("default", "react-intersection-observer", [1, 9, 5, 2], (() => p.e(132).then((() => () => p(41512))))),
              89416: () => a("default", "dompurify", [1, 2, 4, 1], (() => p.e(560).then((() => () => p(8560)))))
            },
            d = {
              84: [60380, 89416],
              364: [77364],
              372: [41272, 57013, 68e3, 97860],
              660: [73660],
              664: [51664],
              804: [9860]
            },
            s = {};
          p.f.consumes = (e, t) => {
            p.o(d, e) && d[e].forEach((e => {
              if (p.o(o, e)) return t.push(o[e]);
              if (!s[e]) {
                var r = t => {
                  o[e] = 0, p.m[e] = r => {
                    delete p.c[e], r.exports = t()
                  }
                };
                s[e] = !0;
                var a = t => {
                  delete o[e], p.m[e] = r => {
                    throw delete p.c[e], t
                  }
                };
                try {
                  var d = n[e]();
                  d.then ? t.push(o[e] = d.then(r).catch(a)) : r(d)
                } catch (e) {
                  a(e)
                }
              }
            }))
          }
        })(), (() => {
          if ("undefined" != typeof document) {
            var e = {
              968: 0
            };
            p.f.miniCss = (t, r) => {
              e[t] ? r.push(e[t]) : 0 !== e[t] && {
                84: 1,
                324: 1,
                724: 1,
                800: 1
              } [t] && r.push(e[t] = (e => new Promise(((t, r) => {
                var a = p.miniCssF(e),
                  o = p.p + a;
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
                        s = r && r.target && r.target.href || t,
                        f = new Error("Loading CSS chunk " + e + " failed.\n(" + s + ")");
                      f.code = "CSS_CHUNK_LOAD_FAILED", f.type = d, f.request = s, n.parentNode && n.parentNode.removeChild(n), o(f)
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
            968: 0
          };
          p.f.j = (t, r) => {
            var a = p.o(e, t) ? e[t] : void 0;
            if (0 !== a)
              if (a) r.push(a[2]);
              else if (/^(6(1|60|64)|364|372|532|804)$/.test(t)) e[t] = 0;
            else {
              var o = new Promise(((r, o) => a = e[t] = [r, o]));
              r.push(a[2] = o);
              var n = p.p + p.u(t),
                d = new Error;
              p.l(n, (r => {
                if (p.o(e, t) && (0 !== (a = e[t]) && (e[t] = void 0), a)) {
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
                s = r[2],
                f = 0;
              if (n.some((t => 0 !== e[t]))) {
                for (a in d) p.o(d, a) && (p.m[a] = d[a]);
                s && s(p)
              }
              for (t && t(r); f < n.length; f++) o = n[f], p.o(e, o) && e[o] && e[o][0](), e[o] = 0
            },
            r = self.webpackChunk_rockstargames_modules_core_videoplayer = self.webpackChunk_rockstargames_modules_core_videoplayer || [];
          r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
        })(), p(93824), p(65536)
      })())
    }
  }
}));
//# sourceMappingURL=remote-entry.js.map