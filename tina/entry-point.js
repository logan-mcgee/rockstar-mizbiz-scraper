! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "4ab30f2e-3b5e-400f-b942-2a526e02ef04", e._sentryDebugIdIdentifier = "sentry-dbid-4ab30f2e-3b5e-400f-b942-2a526e02ef04")
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
          f = {};

        function l(e) {
          var t = f[e];
          if (void 0 !== t) return t.exports;
          var r = f[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return c[e].call(r.exports, r, r.exports, l), r.loaded = !0, r.exports
        }
        return l.m = c, l.c = f, l.y = t, l.amdO = {}, l.n = e => {
          var t = e && e.__esModule ? () => e.default : () => e;
          return l.d(t, {
            a: t
          }), t
        }, l.d = (e, t) => {
          for (var r in t) l.o(t, r) && !l.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: t[r]
          })
        }, l.f = {}, l.e = e => Promise.all(Object.keys(l.f).reduce(((t, r) => (l.f[r](e, t), t)), [])), l.u = e => "js/" + {
          39: "d992abb796b7a0c66572a3c5e6f02cd8",
          42: "0ce5b816c098b12d644a4bbee49098dd",
          100: "640f50117261c77f911fb220fc41dc5f",
          104: "0cdda67564527420248eda43270d307d",
          164: "e3d0d731aebe7a356e24729bc6748687",
          240: "182be506715706e01663356cd8c2473c",
          272: "bb372b65c8dc87ac9d05645905d18a8c",
          328: "f2a2cc4b05578fa972a4ff2bf6ee0165",
          342: "a36f9cc8e5ca827cfc67377c9a4436da",
          378: "ad059472e840aff257b712e1f410845f",
          400: "9d3e5a634db1c05169b76670e685c2be",
          420: "97d828fb91d244a92ee8ec798b623b84",
          448: "2cd9401cc7bb72580913b7518ec8746c",
          460: "43814bfde79e44768f7756c769bb38be",
          496: "605fe4b67e9cd749f428095f4dd0f39f",
          512: "39e799fe8cf2908f81d2a05fb6fd53f9",
          524: "c06106466320f53460e339a05a5f770d",
          540: "e0f877b6dd2283bc1655e1ea378401c8",
          544: "a7f3520a075bfe7e31804e160144ca88",
          660: "367195fc468808c041e16808bb0455f9",
          664: "1494b4c1881ca0bce6e7206a8e5e1f97",
          716: "a85d62554327c8a0a6b816b23369798f",
          760: "0912b8a339b516aecc930d7813fade38",
          784: "bdb65b061e3aa8a70cde0287d828674e",
          792: "57e7ba9aa934888bf2a5dec01e6fb3c3",
          860: "b5dd3a788a0bc5ba8e9e3a7cb547482e",
          864: "2e741c18115eb5879836c18fa5fa74dd",
          952: "bdfc642c2babeb96a9bf3fc8d02d63db",
          960: "68cbe9c9a1e449a1b26cf0bfc3fd075b"
        } [e] + ".js", l.miniCssF = e => "css/" + {
          164: "99df8002ac4dfabc31414fcbef9c06c7",
          272: "1514f6d072638cd2c86d8a41f3eb9252",
          460: "22964693c61c3167369e822eef4d3510",
          524: "1514f6d072638cd2c86d8a41f3eb9252",
          760: "5242e809e0fb4c6b1789f710d8c1ba7e"
        } [e] + ".css", l.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), l.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), e = {}, i = "@rockstargames/tina:", l.l = (t, r, a, n) => {
          if (e[t]) e[t].push(r);
          else {
            var o, d;
            if (void 0 !== a)
              for (var s = document.getElementsByTagName("script"), c = 0; c < s.length; c++) {
                var f = s[c];
                if (f.getAttribute("src") == t || f.getAttribute("data-webpack") == i + a) {
                  o = f;
                  break
                }
              }
            o || (d = !0, (o = document.createElement("script")).charset = "utf-8", o.timeout = 120, l.nc && o.setAttribute("nonce", l.nc), o.setAttribute("data-webpack", i + a), o.src = t), e[t] = [r];
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
        }, l.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, l.nmd = e => (e.paths = [], e.children || (e.children = []), e), d = {
          104: [89468],
          660: [33052],
          760: [1532, 1740, 3061, 28540, 42836, 45652, 73784, 95356],
          792: [45792]
        }, s = {
          1532: ["default", "./operations/queries", 33864],
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
        }, l.f.remotes = (e, t) => {
          l.o(d, e) && d[e].forEach((e => {
            var r = l.R;
            r || (r = []);
            var a = s[e];
            if (!(r.indexOf(a) >= 0)) {
              if (r.push(a), a.p) return t.push(a.p);
              var n = t => {
                  t || (t = new Error("Container missing")), "string" == typeof t.message && (t.message += '\nwhile loading "' + a[1] + '" from ' + a[2]), l.m[e] = () => {
                    throw t
                  }, a.p = 0
                },
                o = (e, r, o, i, d, s) => {
                  try {
                    var c = e(r, o);
                    if (!c || !c.then) return d(c, i, s);
                    var f = c.then((e => d(e, i)), n);
                    if (!s) return f;
                    t.push(a.p = f)
                  } catch (e) {
                    n(e)
                  }
                },
                i = (e, t, n) => o(t.get, a[1], r, 0, d, n),
                d = t => {
                  a.p = 1, l.m[e] = e => {
                    e.exports = t()
                  }
                };
              o(l, a[2], 0, 0, ((e, t, r) => e ? o(l.I, a[0], 0, e, i, r) : n()), 1)
            }
          }))
        }, (() => {
          l.S = {};
          var e = {},
            t = {};
          l.I = (r, a) => {
            a || (a = []);
            var n = t[r];
            if (n || (n = t[r] = {}), !(a.indexOf(n) >= 0)) {
              if (a.push(n), e[r]) return e[r];
              l.o(l.S, r) || (l.S[r] = {});
              var o = l.S[r],
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
                    var n = l(e);
                    if (!n) return;
                    var o = e => e && e.init && e.init(l.S[r], a);
                    if (n.then) return c.push(n.then(o, t));
                    var i = o(n);
                    if (i && i.then) return c.push(i.catch(t))
                  } catch (e) {
                    t(e)
                  }
                },
                c = [];
              return "default" === r && (d("@rockstargames/components", "1.14.0", (() => Promise.all([l.e(164), l.e(664), l.e(792), l.e(660), l.e(42), l.e(760), l.e(860), l.e(240)]).then((() => () => l(33544))))), d("flat", "5.0.2", (() => l.e(328).then((() => () => l(51328))))), d("lodash", "4.17.21", (() => l.e(784).then((() => () => l(79784))))), d("re-resizable", "6.9.11", (() => Promise.all([l.e(512), l.e(664), l.e(540)]).then((() => () => l(34512))))), d("react-dom", "18.2.0", (() => Promise.all([l.e(448), l.e(664)]).then((() => () => l(18448))))), d("react-dom", "18.2.0", (() => Promise.all([l.e(716), l.e(664)]).then((() => () => l(63716))))), d("react-intersection-observer", "9.10.3", (() => Promise.all([l.e(664), l.e(420)]).then((() => () => l(36420))))), d("react-intersection-observer", "9.10.3", (() => Promise.all([l.e(664), l.e(960)]).then((() => () => l(37960))))), d("react", "18.2.0", (() => l.e(100).then((() => () => l(99480))))), d("uuid", "9.0.1", (() => l.e(378).then((() => () => l(11378))))), s(9344), s(33864), s(88428), s(81128)), c.length ? e[r] = Promise.all(c).then((() => e[r] = 1)) : e[r] = 1
            }
          }
        })(), (() => {
          var e;
          l.g.importScripts && (e = l.g.location + "");
          var t = l.g.document;
          if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
            var r = t.getElementsByTagName("script");
            if (r.length)
              for (var a = r.length - 1; a > -1 && !e;) e = r[a--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), l.p = e
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
                  var c, f, l = d < r.length ? (typeof r[d])[0] : "";
                  if (i >= a.length || "o" == (f = (typeof(c = a[i]))[0])) return !s || ("u" == l ? d > n && !o : "" == l != o);
                  if ("u" == f) {
                    if (!s || "u" != l) return !1
                  } else if (s)
                    if (l == f)
                      if (d <= n) {
                        if (c != r[d]) return !1
                      } else {
                        if (o ? c > r[d] : c < r[d]) return !1;
                        c != r[d] && (s = !1)
                      }
                  else if ("s" != l && "n" != l) {
                    if (o || d <= n) return !1;
                    s = !1, d--
                  } else {
                    if (d <= n || f < l != o) return !1;
                    s = !1
                  } else "s" != l && "n" != l && (s = !1, d--)
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
              var o = l.I(t);
              return o && o.then ? o.then(e.bind(e, t, l.S[t], r, a, n)) : e(t, l.S[t], r, a, n)
            })(((e, t, a, n, o) => {
              var i = t && l.o(t, a) && r(t, a, n);
              return i ? (e => (e.loaded = 1, e.get()))(i) : o()
            })),
            n = {},
            o = {
              73660: () => a("default", "lodash", [1, 4, 17, 21], (() => l.e(784).then((() => () => l(79784))))),
              51664: () => a("default", "react", [1, 18, 2, 0], (() => l.e(100).then((() => () => l(99480))))),
              68e3: () => a("default", "uuid", [1, 9, 0, 0], (() => l.e(378).then((() => () => l(11378))))),
              4952: () => a("default", "re-resizable", [1, 6, 9, 9], (() => Promise.all([l.e(512), l.e(540)]).then((() => () => l(34512))))),
              9860: () => a("default", "@rockstargames/components", [1, "workspace:*"], (() => Promise.all([l.e(164), l.e(760)]).then((() => () => l(33544))))),
              87020: () => a("default", "flat", [1, 5, 0, 2], (() => l.e(328).then((() => () => l(51328))))),
              51616: () => a("default", "react-intersection-observer", [1, 9, 10, 3], (() => l.e(39).then((() => () => l(36420))))),
              17228: () => a("default", "react-intersection-observer", [1, 9, 10, 3], (() => l.e(342).then((() => () => l(37960))))),
              77364: () => a("default", "react-dom", [1, 18, 2, 0], (() => l.e(716).then((() => () => l(63716))))),
              26540: () => a("default", "react-dom", [1, 18, 2, 0], (() => l.e(448).then((() => () => l(18448)))))
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
          l.f.consumes = (e, t) => {
            l.o(i, e) && i[e].forEach((e => {
              if (l.o(n, e)) return t.push(n[e]);
              if (!d[e]) {
                var r = t => {
                  n[e] = 0, l.m[e] = r => {
                    delete l.c[e], r.exports = t()
                  }
                };
                d[e] = !0;
                var a = t => {
                  delete n[e], l.m[e] = r => {
                    throw delete l.c[e], t
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
            l.f.miniCss = (t, r) => {
              e[t] ? r.push(e[t]) : 0 !== e[t] && {
                164: 1,
                272: 1,
                460: 1,
                524: 1,
                760: 1
              } [t] && r.push(e[t] = (e => new Promise(((t, r) => {
                var a = l.miniCssF(e),
                  n = l.p + a;
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
          l.f.j = (t, r) => {
            var a = l.o(e, t) ? e[t] : void 0;
            if (0 !== a)
              if (a) r.push(a[2]);
              else if (/^(66[04]|(4|79|95)2|524|540|860)$/.test(t)) e[t] = 0;
            else {
              var n = new Promise(((r, n) => a = e[t] = [r, n]));
              r.push(a[2] = n);
              var o = l.p + l.u(t),
                i = new Error;
              l.l(o, (r => {
                if (l.o(e, t) && (0 !== (a = e[t]) && (e[t] = void 0), a)) {
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
                for (a in i) l.o(i, a) && (l.m[a] = i[a]);
                d && d(l)
              }
              for (t && t(r); s < o.length; s++) n = o[s], l.o(e, n) && e[n] && e[n][0](), e[n] = 0
            },
            r = self.webpackChunk_rockstargames_tina = self.webpackChunk_rockstargames_tina || [];
          r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
        })(), l.nc = void 0, l(93824), l(35436)
      })())
    }
  }
}));