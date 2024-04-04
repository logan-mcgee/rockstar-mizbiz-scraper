! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "3eccec4e-b1b5-4773-859c-7b7c6a700e07", e._sentryDebugIdIdentifier = "sentry-dbid-3eccec4e-b1b5-4773-859c-7b7c6a700e07")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-card",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register(["@rockstargames/graph-client", "@rockstargames/intl", "@rockstargames/modules-core-group-of-items", "@rockstargames/modules-core-sc-user", "@rockstargames/tina", "@rockstargames/utils"], (function(e, t) {
  var r = {},
    a = {},
    o = {},
    n = {},
    d = {},
    c = {};
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
  }), Object.defineProperty(c, "__esModule", {
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
        c[t] = e[t]
      }))
    }],
    execute: function() {
      e((() => {
        var e, s, f, i, l = {
            4364: (e, t, r) => {
              (0, r(7284).G)(1)
            },
            7284: (e, t, r) => {
              const a = r(7984).Q;
              t.G = function(e) {
                if (e || (e = 1), !r.y.meta || !r.y.meta.url) throw console.error("__system_context__", r.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                r.p = a(r.y.meta.url, e)
              }
            },
            3824: (e, t, r) => {
              r(4364)
            },
            7984: (e, t, r) => {
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
            9176: (e, t, r) => {
              "use strict";
              var a = {
                  "./bootstrap": () => r.e(184).then((() => () => r(3184))),
                  "./components": () => Promise.all([r.e(284), r.e(228), r.e(664), r.e(272), r.e(92), r.e(711), r.e(740)]).then((() => () => r(6756))),
                  "./modules": () => Promise.all([r.e(284), r.e(228), r.e(664), r.e(272), r.e(92), r.e(711), r.e(148)]).then((() => () => r(4052))),
                  "./tina": () => Promise.all([r.e(560), r.e(284), r.e(228), r.e(552), r.e(16)]).then((() => () => r(2016)))
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
            3864: e => {
              "use strict";
              e.exports = r
            },
            800: e => {
              "use strict";
              e.exports = a
            },
            72: e => {
              "use strict";
              e.exports = o
            },
            1128: e => {
              "use strict";
              e.exports = n
            },
            8428: e => {
              "use strict";
              e.exports = d
            },
            9344: e => {
              "use strict";
              e.exports = c
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
          16: "88a71f43d060b880cacf833928a8e5ee",
          61: "5a4cfa1aa0a874e0562a223a9878bc43",
          92: "828d4422699d3ad68eaa09e02887024c",
          100: "80a13ea9be6394ca8b60fb65d025a817",
          148: "a25ae355401cb91606f50251453338f4",
          176: "39732c0dafd5111a4db65b06b57ffa3e",
          184: "10b94ad24447c3e5f0d0fe35d125e294",
          228: "16c2efcd52ae833c5ea1a8575f7a9f43",
          272: "aba018ced401b514427ab956c33f1ec2",
          284: "f2979a26dc32488f46ea3d4034874590",
          304: "7981d14525255d96ae852caeb237a29d",
          364: "baffddee05246303755dd04e653db722",
          408: "3169961282f48cc5ec50cc935604c729",
          512: "3bad1a58b2cfae8d84e66019c87a0577",
          542: "217c82427d97666e8b8c9029130a5821",
          552: "ab4d9f4f04e090e8ccb431a4e3488448",
          560: "5f8ebafb64391d5b84fa38b054bd68a8",
          648: "3aab19d5d795e2a9da0404cddb5946ae",
          664: "7bf67c93c3c3fad15fbfd74dc15b42da",
          711: "43610a473bbe79ab3aa2539df4f4daf8",
          712: "760856095b5ba554ee2d216c6d2cacfe",
          716: "ce71e24eae9303304220c7ba530d20df",
          718: "bd6d20a6484b07ffb965f442200a0432",
          740: "f4dda9566b391b368d554484450f2afd",
          784: "b2293605faf1f45e592b31b8230499ae",
          924: "2b2c1aa281a4ba364ff528d241094094",
          996: "e5dcdb2b009a5e2368fbd20e165ca5a8"
        } [e] + ".js", p.miniCssF = e => "css/" + {
          92: "ef1d75d90e54cb337ad74daaa3daa222",
          512: "ac7070246f2e5018bcc3ad7be62f36f2",
          552: "b2fb661980c7833007e51ccc04cd69f0",
          711: "1ebeff4ff04f60c95fe7c544e8548a8d",
          740: "49bbdf6f5aff39fe74e0a49c7c5692d9",
          996: "73617f29f3218ef2bfd5a77cc018119f"
        } [e] + ".css", p.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), p.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), e = {}, s = "@rockstargames/modules-core-card:", p.l = (t, r, a, o) => {
          if (e[t]) e[t].push(r);
          else {
            var n, d;
            if (void 0 !== a)
              for (var c = document.getElementsByTagName("script"), f = 0; f < c.length; f++) {
                var i = c[f];
                if (i.getAttribute("src") == t || i.getAttribute("data-webpack") == s + a) {
                  n = i;
                  break
                }
              }
            n || (d = !0, (n = document.createElement("script")).charset = "utf-8", n.timeout = 120, p.nc && n.setAttribute("nonce", p.nc), n.setAttribute("data-webpack", s + a), n.src = t), e[t] = [r];
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
        }, p.nmd = e => (e.paths = [], e.children || (e.children = []), e), f = {
          16: [2104, 5988, 9468],
          61: [3061],
          92: [9812],
          228: [3052, 5652, 1740, 5792],
          512: [1532, 3784, 5356, 8540],
          664: [2836],
          711: [5120]
        }, i = {
          1532: ["default", "./operations/queries", 3864],
          1740: ["default", "./index", 8428],
          2104: ["default", "./ui", 8428],
          2836: ["default", "./index", 1128],
          3052: ["default", "./index", 3864],
          3061: ["default", "./hooks", 9344],
          3784: ["default", "./operations/fragments/newswire-post.graphql", 3864],
          5120: ["default", "./messages", 800],
          5356: ["default", "./helpers", 8428],
          5652: ["default", "./helpers/uploads", 8428],
          5792: ["default", "./index", 9344],
          5988: ["default", "./functions", 9344],
          8540: ["default", "./operations/fragments/paging.graphql", 3864],
          9468: ["default", "./properties", 8428],
          9812: ["default", "./index", 72]
        }, p.f.remotes = (e, t) => {
          p.o(f, e) && f[e].forEach((e => {
            var r = p.R;
            r || (r = []);
            var a = i[e];
            if (!(r.indexOf(a) >= 0)) {
              if (r.push(a), a.p) return t.push(a.p);
              var o = t => {
                  t || (t = new Error("Container missing")), "string" == typeof t.message && (t.message += '\nwhile loading "' + a[1] + '" from ' + a[2]), p.m[e] = () => {
                    throw t
                  }, a.p = 0
                },
                n = (e, r, n, d, c, s) => {
                  try {
                    var f = e(r, n);
                    if (!f || !f.then) return c(f, d, s);
                    var i = f.then((e => c(e, d)), o);
                    if (!s) return i;
                    t.push(a.p = i)
                  } catch (e) {
                    o(e)
                  }
                },
                d = (e, t, o) => n(t.get, a[1], r, 0, c, o),
                c = t => {
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
                d = "@rockstargames/modules-core-card",
                c = (e, t, r, a) => {
                  var o = n[e] = n[e] || {},
                    c = o[t];
                  (!c || !c.loaded && (!a != !c.eager ? a : d > c.from)) && (o[t] = {
                    get: r,
                    from: d,
                    eager: !!a
                  })
                },
                s = e => {
                  var t = e => {
                    return t = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(t));
                    var t
                  };
                  try {
                    var o = p(e);
                    if (!o) return;
                    var n = e => e && e.init && e.init(p.S[r], a);
                    if (o.then) return f.push(o.then(n, t));
                    var d = n(o);
                    if (d && d.then) return f.push(d.catch(t))
                  } catch (e) {
                    t(e)
                  }
                },
                f = [];
              return "default" === r && (c("@rockstargames/components", "1.14.0", (() => Promise.all([p.e(712), p.e(560), p.e(924), p.e(284), p.e(228), p.e(664), p.e(272), p.e(552), p.e(364), p.e(512), p.e(176)]).then((() => () => p(9038))))), c("@rockstargames/locale-tools", "1.0.0", (() => Promise.all([p.e(712), p.e(408), p.e(284), p.e(61), p.e(304)]).then((() => () => p(8304))))), c("framer-motion", "7.10.3", (() => Promise.all([p.e(648), p.e(284)]).then((() => () => p(7648))))), c("lodash", "4.17.21", (() => p.e(784).then((() => () => p(9784))))), c("react-dom", "18.2.0", (() => Promise.all([p.e(716), p.e(284)]).then((() => () => p(8952))))), c("react-router-dom", "6.17.0", (() => Promise.all([p.e(718), p.e(284)]).then((() => () => p(5718))))), c("react", "18.2.0", (() => p.e(100).then((() => () => p(7100))))), s(3864), s(8428), s(9344), s(1128), s(72), s(800)), f.length ? e[r] = Promise.all(f).then((() => e[r] = 1)) : e[r] = 1
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
                for (var d = 0, c = 1, s = !0;; c++, d++) {
                  var f, i, l = c < r.length ? (typeof r[c])[0] : "";
                  if (d >= a.length || "o" == (i = (typeof(f = a[d]))[0])) return !s || ("u" == l ? c > o && !n : "" == l != n);
                  if ("u" == i) {
                    if (!s || "u" != l) return !1
                  } else if (s)
                    if (l == i)
                      if (c <= o) {
                        if (f != r[c]) return !1
                      } else {
                        if (n ? f > r[c] : f < r[c]) return !1;
                        f != r[c] && (s = !1)
                      }
                  else if ("s" != l && "n" != l) {
                    if (n || c <= o) return !1;
                    s = !1, c--
                  } else {
                    if (c <= o || i < l != n) return !1;
                    s = !1
                  } else "s" != l && "n" != l && (s = !1, c--)
                }
              }
              var u = [],
                p = u.pop.bind(u);
              for (d = 1; d < r.length; d++) {
                var b = r[d];
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
                  var d = r[a],
                    c = (typeof d)[0];
                  if (n != c) return "o" == n && "n" == c || "s" == c || "u" == n;
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
              1664: () => a("default", "react", [1, 18, 2, 0], (() => p.e(100).then((() => () => p(7100))))),
              968: () => a("default", "framer-motion", [1, 7, 5, 1], (() => p.e(648).then((() => () => p(7648))))),
              3660: () => a("default", "lodash", [1, 4, 17, 21], (() => p.e(784).then((() => () => p(9784))))),
              7013: () => a("default", "react-router-dom", [1, 6, 11, 2], (() => p.e(718).then((() => () => p(5718))))),
              9860: () => a("default", "@rockstargames/components", [1, "workspace:*"], (() => Promise.all([p.e(712), p.e(560), p.e(924), p.e(272), p.e(552), p.e(364), p.e(512)]).then((() => () => p(9038))))),
              1272: () => a("default", "@rockstargames/locale-tools", [1, "workspace:*"], (() => Promise.all([p.e(712), p.e(408), p.e(61), p.e(542)]).then((() => () => p(8304))))),
              7364: () => a("default", "react-dom", [1, 18, 2, 0], (() => p.e(716).then((() => () => p(8952)))))
            },
            d = {
              272: [1272],
              284: [1664],
              364: [7364],
              664: [968, 3660, 7013, 9860]
            },
            c = {};
          p.f.consumes = (e, t) => {
            p.o(d, e) && d[e].forEach((e => {
              if (p.o(o, e)) return t.push(o[e]);
              if (!c[e]) {
                var r = t => {
                  o[e] = 0, p.m[e] = r => {
                    delete p.c[e], r.exports = t()
                  }
                };
                c[e] = !0;
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
              212: 0
            };
            p.f.miniCss = (t, r) => {
              e[t] ? r.push(e[t]) : 0 !== e[t] && {
                92: 1,
                512: 1,
                552: 1,
                711: 1,
                740: 1,
                996: 1
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
                        c = r && r.target && r.target.href || t,
                        s = new Error("Loading CSS chunk " + e + " failed.\n(" + c + ")");
                      s.code = "CSS_CHUNK_LOAD_FAILED", s.type = d, s.request = c, n.parentNode && n.parentNode.removeChild(n), o(s)
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
            212: 0
          };
          p.f.j = (t, r) => {
            var a = p.o(e, t) ? e[t] : void 0;
            if (0 !== a)
              if (a) r.push(a[2]);
              else if (/^(2(28|72|84)|[36]64|552|61|711)$/.test(t)) e[t] = 0;
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
                c = r[2],
                s = 0;
              if (n.some((t => 0 !== e[t]))) {
                for (a in d) p.o(d, a) && (p.m[a] = d[a]);
                c && c(p)
              }
              for (t && t(r); s < n.length; s++) o = n[s], p.o(e, o) && e[o] && e[o][0](), e[o] = 0
            },
            r = self.webpackChunk_rockstargames_modules_core_card = self.webpackChunk_rockstargames_modules_core_card || [];
          r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
        })(), p(3824), p(9176)
      })())
    }
  }
}));