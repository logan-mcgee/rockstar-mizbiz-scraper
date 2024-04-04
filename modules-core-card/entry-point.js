! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "587bb42d-abd1-40b5-acf7-b8eb72afe3fa", e._sentryDebugIdIdentifier = "sentry-dbid-587bb42d-abd1-40b5-acf7-b8eb72afe3fa")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "692b6956abd6177da3ac6da14c81527e5159ed6d",
  packageName: "@rockstargames/modules-core-card",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "692b6956abd6177da3ac6da14c81527e5159ed6d"
}, System.register(["@rockstargames/graph-client", "@rockstargames/intl", "@rockstargames/modules-core-group-of-items", "@rockstargames/modules-core-sc-user", "@rockstargames/tina", "@rockstargames/utils"], (function(e, t) {
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
        var e, f, c, i, l = {
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
              e.exports = s
            }
          },
          u = {};

        function b(e) {
          var t = u[e];
          if (void 0 !== t) return t.exports;
          var r = u[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return l[e].call(r.exports, r, r.exports, b), r.loaded = !0, r.exports
        }
        return b.m = l, b.c = u, b.y = t, b.amdO = {}, b.n = e => {
          var t = e && e.__esModule ? () => e.default : () => e;
          return b.d(t, {
            a: t
          }), t
        }, b.d = (e, t) => {
          for (var r in t) b.o(t, r) && !b.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: t[r]
          })
        }, b.f = {}, b.e = e => Promise.all(Object.keys(b.f).reduce(((t, r) => (b.f[r](e, t), t)), [])), b.u = e => "js/" + {
          16: "2efaf83565589069579776e35ec62a91",
          61: "5a4cfa1aa0a874e0562a223a9878bc43",
          92: "1589fed4fd580c1e88b8061cc55b1147",
          100: "a82fcaecd427968c0c6af6fa9b552ecc",
          148: "e166b2b128c8dce41c3edc0be3f258a7",
          176: "a8f0754e9a73165e321eb8689567b4d0",
          184: "fd2c6a352fc1fac058a1911e343c4adb",
          228: "16c2efcd52ae833c5ea1a8575f7a9f43",
          272: "aba018ced401b514427ab956c33f1ec2",
          284: "f2979a26dc32488f46ea3d4034874590",
          304: "dbbff74653a4b0cdb1a11f77c5145923",
          364: "baffddee05246303755dd04e653db722",
          408: "1235d761b0ce580af2afcbea52d929c5",
          512: "c302c7bd828c5582dce584e1fde1724b",
          542: "f6bf0f7da7c851419507d3b4ec656008",
          552: "ab4d9f4f04e090e8ccb431a4e3488448",
          560: "789dd71f1b742da3f9852e2a50af4b9f",
          648: "ecee103309863d0da7313d940e71f7b8",
          664: "7bf67c93c3c3fad15fbfd74dc15b42da",
          711: "43610a473bbe79ab3aa2539df4f4daf8",
          712: "9477d649fcd6f7ca584f518aa8947065",
          716: "668483a245fa0d8b2d88fac94721de06",
          718: "12ddc44dc748b986ed9139182bdc90de",
          740: "b6e3459e0b2dbb69b15ecae63af3e09e",
          784: "2b7455d42adbf8067fc501988aad20e6",
          924: "acf57f3a9e1b8042f7f2a38868095428",
          996: "5c7f234cb45030da622fb99c126d6f07"
        } [e] + ".js", b.miniCssF = e => "css/" + {
          92: "a8af36482d33a98fd2a29158ebc9cc6c",
          512: "ac7070246f2e5018bcc3ad7be62f36f2",
          552: "b2fb661980c7833007e51ccc04cd69f0",
          711: "1ebeff4ff04f60c95fe7c544e8548a8d",
          740: "49bbdf6f5aff39fe74e0a49c7c5692d9",
          996: "73617f29f3218ef2bfd5a77cc018119f"
        } [e] + ".css", b.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), b.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), e = {}, f = "@rockstargames/modules-core-card:", b.l = (t, r, a, o) => {
          if (e[t]) e[t].push(r);
          else {
            var n, d;
            if (void 0 !== a)
              for (var s = document.getElementsByTagName("script"), c = 0; c < s.length; c++) {
                var i = s[c];
                if (i.getAttribute("src") == t || i.getAttribute("data-webpack") == f + a) {
                  n = i;
                  break
                }
              }
            n || (d = !0, (n = document.createElement("script")).charset = "utf-8", n.timeout = 120, b.nc && n.setAttribute("nonce", b.nc), n.setAttribute("data-webpack", f + a), n.src = t), e[t] = [r];
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
        }, b.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, b.nmd = e => (e.paths = [], e.children || (e.children = []), e), c = {
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
        }, b.f.remotes = (e, t) => {
          b.o(c, e) && c[e].forEach((e => {
            var r = b.R;
            r || (r = []);
            var a = i[e];
            if (!(r.indexOf(a) >= 0)) {
              if (r.push(a), a.p) return t.push(a.p);
              var o = t => {
                  t || (t = new Error("Container missing")), "string" == typeof t.message && (t.message += '\nwhile loading "' + a[1] + '" from ' + a[2]), b.m[e] = () => {
                    throw t
                  }, a.p = 0
                },
                n = (e, r, n, d, s, f) => {
                  try {
                    var c = e(r, n);
                    if (!c || !c.then) return s(c, d, f);
                    var i = c.then((e => s(e, d)), o);
                    if (!f) return i;
                    t.push(a.p = i)
                  } catch (e) {
                    o(e)
                  }
                },
                d = (e, t, o) => n(t.get, a[1], r, 0, s, o),
                s = t => {
                  a.p = 1, b.m[e] = e => {
                    e.exports = t()
                  }
                };
              n(b, a[2], 0, 0, ((e, t, r) => e ? n(b.I, a[0], 0, e, d, r) : o()), 1)
            }
          }))
        }, (() => {
          b.S = {};
          var e = {},
            t = {};
          b.I = (r, a) => {
            a || (a = []);
            var o = t[r];
            if (o || (o = t[r] = {}), !(a.indexOf(o) >= 0)) {
              if (a.push(o), e[r]) return e[r];
              b.o(b.S, r) || (b.S[r] = {});
              var n = b.S[r],
                d = "@rockstargames/modules-core-card",
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
                    var o = b(e);
                    if (!o) return;
                    var n = e => e && e.init && e.init(b.S[r], a);
                    if (o.then) return c.push(o.then(n, t));
                    var d = n(o);
                    if (d && d.then) return c.push(d.catch(t))
                  } catch (e) {
                    t(e)
                  }
                },
                c = [];
              return "default" === r && (s("@rockstargames/components", "1.14.0", (() => Promise.all([b.e(712), b.e(560), b.e(924), b.e(284), b.e(228), b.e(664), b.e(272), b.e(552), b.e(364), b.e(512), b.e(176)]).then((() => () => b(9038))))), s("@rockstargames/locale-tools", "1.0.0", (() => Promise.all([b.e(712), b.e(408), b.e(284), b.e(61), b.e(304)]).then((() => () => b(8304))))), s("framer-motion", "7.10.3", (() => Promise.all([b.e(648), b.e(284)]).then((() => () => b(7648))))), s("lodash", "4.17.21", (() => b.e(784).then((() => () => b(9784))))), s("react-dom", "18.2.0", (() => Promise.all([b.e(716), b.e(284)]).then((() => () => b(8952))))), s("react-router-dom", "6.17.0", (() => Promise.all([b.e(718), b.e(284)]).then((() => () => b(5718))))), s("react", "18.2.0", (() => b.e(100).then((() => () => b(7100))))), f(3864), f(8428), f(9344), f(1128), f(72), f(800)), c.length ? e[r] = Promise.all(c).then((() => e[r] = 1)) : e[r] = 1
            }
          }
        })(), (() => {
          var e;
          b.g.importScripts && (e = b.g.location + "");
          var t = b.g.document;
          if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
            var r = t.getElementsByTagName("script");
            if (r.length)
              for (var a = r.length - 1; a > -1 && !e;) e = r[a--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), b.p = e
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
                  var c, i, l = s < r.length ? (typeof r[s])[0] : "";
                  if (d >= a.length || "o" == (i = (typeof(c = a[d]))[0])) return !f || ("u" == l ? s > o && !n : "" == l != n);
                  if ("u" == i) {
                    if (!f || "u" != l) return !1
                  } else if (f)
                    if (l == i)
                      if (s <= o) {
                        if (c != r[s]) return !1
                      } else {
                        if (n ? c > r[s] : c < r[s]) return !1;
                        c != r[s] && (f = !1)
                      }
                  else if ("s" != l && "n" != l) {
                    if (n || s <= o) return !1;
                    f = !1, s--
                  } else {
                    if (s <= o || i < l != n) return !1;
                    f = !1
                  } else "s" != l && "n" != l && (f = !1, s--)
                }
              }
              var u = [],
                b = u.pop.bind(u);
              for (d = 1; d < r.length; d++) {
                var p = r[d];
                u.push(1 == p ? b() | b() : 2 == p ? b() & b() : p ? t(p, a) : !b())
              }
              return !!b()
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
              var n = b.I(t);
              return n && n.then ? n.then(e.bind(e, t, b.S[t], r, a, o)) : e(t, b.S[t], r, a, o)
            })(((e, t, a, o, n) => {
              var d = t && b.o(t, a) && r(t, a, o);
              return d ? (e => (e.loaded = 1, e.get()))(d) : n()
            })),
            o = {},
            n = {
              1664: () => a("default", "react", [1, 18, 2, 0], (() => b.e(100).then((() => () => b(7100))))),
              968: () => a("default", "framer-motion", [1, 7, 5, 1], (() => b.e(648).then((() => () => b(7648))))),
              3660: () => a("default", "lodash", [1, 4, 17, 21], (() => b.e(784).then((() => () => b(9784))))),
              7013: () => a("default", "react-router-dom", [1, 6, 11, 2], (() => b.e(718).then((() => () => b(5718))))),
              9860: () => a("default", "@rockstargames/components", [1, "workspace:*"], (() => Promise.all([b.e(712), b.e(560), b.e(924), b.e(272), b.e(552), b.e(364), b.e(512)]).then((() => () => b(9038))))),
              1272: () => a("default", "@rockstargames/locale-tools", [1, "workspace:*"], (() => Promise.all([b.e(712), b.e(408), b.e(61), b.e(542)]).then((() => () => b(8304))))),
              7364: () => a("default", "react-dom", [1, 18, 2, 0], (() => b.e(716).then((() => () => b(8952)))))
            },
            d = {
              272: [1272],
              284: [1664],
              364: [7364],
              664: [968, 3660, 7013, 9860]
            },
            s = {};
          b.f.consumes = (e, t) => {
            b.o(d, e) && d[e].forEach((e => {
              if (b.o(o, e)) return t.push(o[e]);
              if (!s[e]) {
                var r = t => {
                  o[e] = 0, b.m[e] = r => {
                    delete b.c[e], r.exports = t()
                  }
                };
                s[e] = !0;
                var a = t => {
                  delete o[e], b.m[e] = r => {
                    throw delete b.c[e], t
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
            b.f.miniCss = (t, r) => {
              e[t] ? r.push(e[t]) : 0 !== e[t] && {
                92: 1,
                512: 1,
                552: 1,
                711: 1,
                740: 1,
                996: 1
              } [t] && r.push(e[t] = (e => new Promise(((t, r) => {
                var a = b.miniCssF(e),
                  o = b.p + a;
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
            212: 0
          };
          b.f.j = (t, r) => {
            var a = b.o(e, t) ? e[t] : void 0;
            if (0 !== a)
              if (a) r.push(a[2]);
              else if (/^(2(28|72|84)|[36]64|552|61|711)$/.test(t)) e[t] = 0;
            else {
              var o = new Promise(((r, o) => a = e[t] = [r, o]));
              r.push(a[2] = o);
              var n = b.p + b.u(t),
                d = new Error;
              b.l(n, (r => {
                if (b.o(e, t) && (0 !== (a = e[t]) && (e[t] = void 0), a)) {
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
                for (a in d) b.o(d, a) && (b.m[a] = d[a]);
                s && s(b)
              }
              for (t && t(r); f < n.length; f++) o = n[f], b.o(e, o) && e[o] && e[o][0](), e[o] = 0
            },
            r = self.webpackChunk_rockstargames_modules_core_card = self.webpackChunk_rockstargames_modules_core_card || [];
          r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
        })(), b(3824), b(9176)
      })())
    }
  }
}));
//# sourceMappingURL=remote-entry.js.map