! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "7abc704d-4c21-4985-b85b-0bfaabc76a17", e._sentryDebugIdIdentifier = "sentry-dbid-7abc704d-4c21-4985-b85b-0bfaabc76a17")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/tina",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register(["@rockstargames/graph-client", "@rockstargames/modules-core-sc-user", "@rockstargames/tina", "@rockstargames/utils"], (function(e, t) {
  var r = {},
    a = {},
    n = {},
    o = {};
  return Object.defineProperty(r, "__esModule", {
    value: !0
  }), Object.defineProperty(a, "__esModule", {
    value: !0
  }), Object.defineProperty(n, "__esModule", {
    value: !0
  }), Object.defineProperty(o, "__esModule", {
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
        n[t] = e[t]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(t) {
        o[t] = e[t]
      }))
    }],
    execute: function() {
      e((() => {
        var e, i, d, s, c = {
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
                for (var a = "/" === r.pathname[0] ? r.pathname : "/" + r.pathname, n = 0, o = a.length; n !== t && o >= 0;) "/" === a[--o] && n++;
                if (n !== t) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + t + ") is greater than the number of directories (" + n + ") in the URL path " + e);
                var i = a.slice(0, o + 1);
                return r.protocol + "//" + r.host + i
              };
              Number.isInteger
            },
            35436: (e, t, r) => {
              "use strict";
              var a = {
                  "./helpers": () => r.e(864).then((() => () => r(89864))),
                  "./helpers/payload": () => Promise.all([r.e(42), r.e(496)]).then((() => () => r(91496))),
                  "./helpers/uploads": () => Promise.all([r.e(664), r.e(792), r.e(544)]).then((() => () => r(83924))),
                  "./index": () => Promise.all([r.e(664), r.e(792), r.e(660), r.e(952), r.e(42), r.e(400), r.e(860), r.e(272)]).then((() => () => r(59880))),
                  "./properties": () => Promise.all([r.e(664), r.e(792), r.e(660), r.e(952), r.e(400), r.e(524)]).then((() => () => r(27400))),
                  "./tinaBlockTemplates": () => r.e(104).then((() => () => r(82104))),
                  "./ui": () => Promise.all([r.e(664), r.e(952), r.e(460)]).then((() => () => r(36460)))
                },
                n = (e, t) => (r.R = t, t = r.o(a, e) ? a[e]() : Promise.resolve().then((() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                })), r.R = void 0, t),
                o = (e, t) => {
                  if (r.S) {
                    var a = "default",
                      n = r.S[a];
                    if (n && n !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return r.S[a] = e, r.I(a, t)
                  }
                };
              r.d(t, {
                get: () => n,
                init: () => o
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
            88428: e => {
              "use strict";
              e.exports = n
            },
            9344: e => {
              "use strict";
              e.exports = o
            }
          },
          l = {};

        function f(e) {
          var t = l[e];
          if (void 0 !== t) return t.exports;
          var r = l[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return c[e].call(r.exports, r, r.exports, f), r.loaded = !0, r.exports
        }
        return f.m = c, f.c = l, f.y = t, f.amdO = {}, f.n = e => {
          var t = e && e.__esModule ? () => e.default : () => e;
          return f.d(t, {
            a: t
          }), t
        }, f.d = (e, t) => {
          for (var r in t) f.o(t, r) && !f.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: t[r]
          })
        }, f.f = {}, f.e = e => Promise.all(Object.keys(f.f).reduce(((t, r) => (f.f[r](e, t), t)), [])), f.u = e => "js/" + {
          39: "e1c686d50d9d9c28dfd44d22b6928045",
          42: "0ce5b816c098b12d644a4bbee49098dd",
          100: "3b2eb79355e181a3fac164a76d5c0038",
          104: "12a638853842ec401532f8b258813767",
          240: "18860e7fea2477824609f991cef91ea1",
          272: "6a12f875ffe5b4c50ef058d6e6bb5d10",
          328: "4c1af794bcc5c7b9a5bc08a16099ad1d",
          342: "0bad1260b435a564b6723ef5d57516b8",
          344: "e05beb43addb7bc7dbeab9288da0f44f",
          378: "8504c9380508c96c13366f4c052c2e33",
          400: "79749749ab58ce446ab446be956270d2",
          420: "840ab529336dced1881fcdcb3efa8474",
          448: "5a626559d43b2b3c4cef6f508c6adb0c",
          460: "f1e96bc62066fb97e7d49b16b693e86f",
          496: "e6c08d3f2ed671586c07abc0d6f0bac5",
          512: "fb44d7a19855cbb34980df9c5d61a329",
          524: "c06106466320f53460e339a05a5f770d",
          540: "e0f877b6dd2283bc1655e1ea378401c8",
          544: "fa703a9b5cc6f4b125fe0f8a60c8cb46",
          660: "367195fc468808c041e16808bb0455f9",
          664: "1494b4c1881ca0bce6e7206a8e5e1f97",
          716: "ca5ea314fdda1349d02931ccbd588403",
          760: "6baa2df7b75eab224ecfa165a69c2514",
          784: "f087ea242ed20224d74c9e3b5194a892",
          792: "57e7ba9aa934888bf2a5dec01e6fb3c3",
          860: "b5dd3a788a0bc5ba8e9e3a7cb547482e",
          864: "0345bcf92abd5589bfe76d92e1977c48",
          952: "bdfc642c2babeb96a9bf3fc8d02d63db",
          960: "9c88aa2c04f9dbb799217033cdc17838"
        } [e] + ".js", f.miniCssF = e => "css/" + {
          272: "1514f6d072638cd2c86d8a41f3eb9252",
          460: "22964693c61c3167369e822eef4d3510",
          524: "1514f6d072638cd2c86d8a41f3eb9252",
          760: "9bef2556309c08cc5fa1fa368b75f4c3"
        } [e] + ".css", f.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), f.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), e = {}, i = "@rockstargames/tina:", f.l = (t, r, a, n) => {
          if (e[t]) e[t].push(r);
          else {
            var o, d;
            if (void 0 !== a)
              for (var s = document.getElementsByTagName("script"), c = 0; c < s.length; c++) {
                var l = s[c];
                if (l.getAttribute("src") == t || l.getAttribute("data-webpack") == i + a) {
                  o = l;
                  break
                }
              }
            o || (d = !0, (o = document.createElement("script")).charset = "utf-8", o.timeout = 120, f.nc && o.setAttribute("nonce", f.nc), o.setAttribute("data-webpack", i + a), o.src = t), e[t] = [r];
            var u = (r, a) => {
                o.onerror = o.onload = null, clearTimeout(b);
                var n = e[t];
                if (delete e[t], o.parentNode && o.parentNode.removeChild(o), n && n.forEach((e => e(a))), r) return r(a)
              },
              b = setTimeout(u.bind(null, void 0, {
                type: "timeout",
                target: o
              }), 12e4);
            o.onerror = u.bind(null, o.onerror), o.onload = u.bind(null, o.onload), d && document.head.appendChild(o)
          }
        }, f.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, f.nmd = e => (e.paths = [], e.children || (e.children = []), e), d = {
          104: [89468],
          660: [33052],
          760: [1740, 3061, 28540, 42836, 45652, 73784, 95356],
          792: [45792]
        }, s = {
          1740: ["default", "./index", 88428],
          3061: ["default", "./hooks", 9344],
          28540: ["default", "./operations/fragments/paging.graphql", 33864],
          33052: ["default", "./index", 33864],
          42836: ["default", "./index", 81128],
          45652: ["default", "./helpers/uploads", 88428],
          45792: ["default", "./index", 9344],
          73784: ["default", "./operations/fragments/newswire-post.graphql", 33864],
          89468: ["default", "./properties", 88428],
          95356: ["default", "./helpers", 88428]
        }, f.f.remotes = (e, t) => {
          f.o(d, e) && d[e].forEach((e => {
            var r = f.R;
            r || (r = []);
            var a = s[e];
            if (!(r.indexOf(a) >= 0)) {
              if (r.push(a), a.p) return t.push(a.p);
              var n = t => {
                  t || (t = new Error("Container missing")), "string" == typeof t.message && (t.message += '\nwhile loading "' + a[1] + '" from ' + a[2]), f.m[e] = () => {
                    throw t
                  }, a.p = 0
                },
                o = (e, r, o, i, d, s) => {
                  try {
                    var c = e(r, o);
                    if (!c || !c.then) return d(c, i, s);
                    var l = c.then((e => d(e, i)), n);
                    if (!s) return l;
                    t.push(a.p = l)
                  } catch (e) {
                    n(e)
                  }
                },
                i = (e, t, n) => o(t.get, a[1], r, 0, d, n),
                d = t => {
                  a.p = 1, f.m[e] = e => {
                    e.exports = t()
                  }
                };
              o(f, a[2], 0, 0, ((e, t, r) => e ? o(f.I, a[0], 0, e, i, r) : n()), 1)
            }
          }))
        }, (() => {
          f.S = {};
          var e = {},
            t = {};
          f.I = (r, a) => {
            a || (a = []);
            var n = t[r];
            if (n || (n = t[r] = {}), !(a.indexOf(n) >= 0)) {
              if (a.push(n), e[r]) return e[r];
              f.o(f.S, r) || (f.S[r] = {});
              var o = f.S[r],
                i = "@rockstargames/tina",
                d = (e, t, r, a) => {
                  var n = o[e] = o[e] || {},
                    d = n[t];
                  (!d || !d.loaded && (!a != !d.eager ? a : i > d.from)) && (n[t] = {
                    get: r,
                    from: i,
                    eager: !!a
                  })
                },
                s = e => {
                  var t = e => {
                    return t = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(t));
                    var t
                  };
                  try {
                    var n = f(e);
                    if (!n) return;
                    var o = e => e && e.init && e.init(f.S[r], a);
                    if (n.then) return c.push(n.then(o, t));
                    var i = o(n);
                    if (i && i.then) return c.push(i.catch(t))
                  } catch (e) {
                    t(e)
                  }
                },
                c = [];
              return "default" === r && (d("@rockstargames/components", "1.14.0", (() => Promise.all([f.e(344), f.e(664), f.e(792), f.e(660), f.e(42), f.e(760), f.e(860), f.e(240)]).then((() => () => f(33544))))), d("flat", "5.0.2", (() => f.e(328).then((() => () => f(51328))))), d("lodash", "4.17.21", (() => f.e(784).then((() => () => f(79784))))), d("re-resizable", "6.9.11", (() => Promise.all([f.e(512), f.e(664), f.e(540)]).then((() => () => f(34512))))), d("react-dom", "18.2.0", (() => Promise.all([f.e(448), f.e(664)]).then((() => () => f(18448))))), d("react-dom", "18.2.0", (() => Promise.all([f.e(716), f.e(664)]).then((() => () => f(63716))))), d("react-intersection-observer", "9.10.3", (() => Promise.all([f.e(664), f.e(420)]).then((() => () => f(36420))))), d("react-intersection-observer", "9.10.3", (() => Promise.all([f.e(664), f.e(960)]).then((() => () => f(37960))))), d("react", "18.2.0", (() => f.e(100).then((() => () => f(99480))))), d("uuid", "9.0.1", (() => f.e(378).then((() => () => f(11378))))), s(9344), s(33864), s(88428), s(81128)), c.length ? e[r] = Promise.all(c).then((() => e[r] = 1)) : e[r] = 1
            }
          }
        })(), (() => {
          var e;
          f.g.importScripts && (e = f.g.location + "");
          var t = f.g.document;
          if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
            var r = t.getElementsByTagName("script");
            if (r.length)
              for (var a = r.length - 1; a > -1 && !e;) e = r[a--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), f.p = e
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
                var n = r[0],
                  o = n < 0;
                o && (n = -n - 1);
                for (var i = 0, d = 1, s = !0;; d++, i++) {
                  var c, l, f = d < r.length ? (typeof r[d])[0] : "";
                  if (i >= a.length || "o" == (l = (typeof(c = a[i]))[0])) return !s || ("u" == f ? d > n && !o : "" == f != o);
                  if ("u" == l) {
                    if (!s || "u" != f) return !1
                  } else if (s)
                    if (f == l)
                      if (d <= n) {
                        if (c != r[d]) return !1
                      } else {
                        if (o ? c > r[d] : c < r[d]) return !1;
                        c != r[d] && (s = !1)
                      }
                  else if ("s" != f && "n" != f) {
                    if (o || d <= n) return !1;
                    s = !1, d--
                  } else {
                    if (d <= n || l < f != o) return !1;
                    s = !1
                  } else "s" != f && "n" != f && (s = !1, d--)
                }
              }
              var u = [],
                b = u.pop.bind(u);
              for (i = 1; i < r.length; i++) {
                var h = r[i];
                u.push(1 == h ? b() | b() : 2 == h ? b() & b() : h ? t(h, a) : !b())
              }
              return !!b()
            },
            r = (r, a, n) => {
              var o = r[a];
              return (a = Object.keys(o).reduce(((r, a) => !t(n, a) || r && !((t, r) => {
                t = e(t), r = e(r);
                for (var a = 0;;) {
                  if (a >= t.length) return a < r.length && "u" != (typeof r[a])[0];
                  var n = t[a],
                    o = (typeof n)[0];
                  if (a >= r.length) return "u" == o;
                  var i = r[a],
                    d = (typeof i)[0];
                  if (o != d) return "o" == o && "n" == d || "s" == d || "u" == o;
                  if ("o" != o && "u" != o && n != i) return n < i;
                  a++
                }
              })(r, a) ? r : a), 0)) && o[a]
            },
            a = (e => function(t, r, a, n) {
              var o = f.I(t);
              return o && o.then ? o.then(e.bind(e, t, f.S[t], r, a, n)) : e(t, f.S[t], r, a, n)
            })(((e, t, a, n, o) => {
              var i = t && f.o(t, a) && r(t, a, n);
              return i ? (e => (e.loaded = 1, e.get()))(i) : o()
            })),
            n = {},
            o = {
              73660: () => a("default", "lodash", [1, 4, 17, 21], (() => f.e(784).then((() => () => f(79784))))),
              51664: () => a("default", "react", [1, 18, 2, 0], (() => f.e(100).then((() => () => f(99480))))),
              68e3: () => a("default", "uuid", [1, 9, 0, 0], (() => f.e(378).then((() => () => f(11378))))),
              4952: () => a("default", "re-resizable", [1, 6, 9, 9], (() => Promise.all([f.e(512), f.e(540)]).then((() => () => f(34512))))),
              9860: () => a("default", "@rockstargames/components", [1, "workspace:*"], (() => Promise.all([f.e(344), f.e(760)]).then((() => () => f(33544))))),
              87020: () => a("default", "flat", [1, 5, 0, 2], (() => f.e(328).then((() => () => f(51328))))),
              51616: () => a("default", "react-intersection-observer", [1, 9, 10, 3], (() => f.e(39).then((() => () => f(36420))))),
              17228: () => a("default", "react-intersection-observer", [1, 9, 10, 3], (() => f.e(342).then((() => () => f(37960))))),
              77364: () => a("default", "react-dom", [1, 18, 2, 0], (() => f.e(716).then((() => () => f(63716))))),
              26540: () => a("default", "react-dom", [1, 18, 2, 0], (() => f.e(448).then((() => () => f(18448)))))
            },
            i = {
              42: [73660],
              272: [87020],
              460: [51616],
              540: [26540],
              660: [68e3],
              664: [51664],
              760: [17228, 77364],
              860: [9860],
              952: [4952]
            },
            d = {};
          f.f.consumes = (e, t) => {
            f.o(i, e) && i[e].forEach((e => {
              if (f.o(n, e)) return t.push(n[e]);
              if (!d[e]) {
                var r = t => {
                  n[e] = 0, f.m[e] = r => {
                    delete f.c[e], r.exports = t()
                  }
                };
                d[e] = !0;
                var a = t => {
                  delete n[e], f.m[e] = r => {
                    throw delete f.c[e], t
                  }
                };
                try {
                  var i = o[e]();
                  i.then ? t.push(n[e] = i.then(r).catch(a)) : r(i)
                } catch (e) {
                  a(e)
                }
              }
            }))
          }
        })(), (() => {
          if ("undefined" != typeof document) {
            var e = {
              924: 0
            };
            f.f.miniCss = (t, r) => {
              e[t] ? r.push(e[t]) : 0 !== e[t] && {
                272: 1,
                460: 1,
                524: 1,
                760: 1
              } [t] && r.push(e[t] = (e => new Promise(((t, r) => {
                var a = f.miniCssF(e),
                  n = f.p + a;
                if (((e, t) => {
                    for (var r = document.getElementsByTagName("link"), a = 0; a < r.length; a++) {
                      var n = (i = r[a]).getAttribute("data-href") || i.getAttribute("href");
                      if ("stylesheet" === i.rel && (n === e || n === t)) return i
                    }
                    var o = document.getElementsByTagName("style");
                    for (a = 0; a < o.length; a++) {
                      var i;
                      if ((n = (i = o[a]).getAttribute("data-href")) === e || n === t) return i
                    }
                  })(a, n)) return t();
                ((e, t, r, a, n) => {
                  var o = document.createElement("link");
                  o.rel = "stylesheet", o.type = "text/css", o.onerror = o.onload = r => {
                    if (o.onerror = o.onload = null, "load" === r.type) a();
                    else {
                      var i = r && ("load" === r.type ? "missing" : r.type),
                        d = r && r.target && r.target.href || t,
                        s = new Error("Loading CSS chunk " + e + " failed.\n(" + d + ")");
                      s.code = "CSS_CHUNK_LOAD_FAILED", s.type = i, s.request = d, o.parentNode && o.parentNode.removeChild(o), n(s)
                    }
                  }, o.href = t, document.head.appendChild(o)
                })(e, n, 0, t, r)
              })))(t).then((() => {
                e[t] = 0
              }), (r => {
                throw delete e[t], r
              })))
            }
          }
        })(), (() => {
          var e = {
            924: 0
          };
          f.f.j = (t, r) => {
            var a = f.o(e, t) ? e[t] : void 0;
            if (0 !== a)
              if (a) r.push(a[2]);
              else if (/^(66[04]|(4|79|95)2|524|540|860)$/.test(t)) e[t] = 0;
            else {
              var n = new Promise(((r, n) => a = e[t] = [r, n]));
              r.push(a[2] = n);
              var o = f.p + f.u(t),
                i = new Error;
              f.l(o, (r => {
                if (f.o(e, t) && (0 !== (a = e[t]) && (e[t] = void 0), a)) {
                  var n = r && ("load" === r.type ? "missing" : r.type),
                    o = r && r.target && r.target.src;
                  i.message = "Loading chunk " + t + " failed.\n(" + n + ": " + o + ")", i.name = "ChunkLoadError", i.type = n, i.request = o, a[1](i)
                }
              }), "chunk-" + t, t)
            }
          };
          var t = (t, r) => {
              var a, n, o = r[0],
                i = r[1],
                d = r[2],
                s = 0;
              if (o.some((t => 0 !== e[t]))) {
                for (a in i) f.o(i, a) && (f.m[a] = i[a]);
                d && d(f)
              }
              for (t && t(r); s < o.length; s++) n = o[s], f.o(e, n) && e[n] && e[n][0](), e[n] = 0
            },
            r = self.webpackChunk_rockstargames_tina = self.webpackChunk_rockstargames_tina || [];
          r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
        })(), f.nc = void 0, f(93824), f(35436)
      })())
    }
  }
}));