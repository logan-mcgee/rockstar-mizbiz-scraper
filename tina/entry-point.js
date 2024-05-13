! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "a419d99c-2314-4475-8cc1-719f484c6588", e._sentryDebugIdIdentifier = "sentry-dbid-a419d99c-2314-4475-8cc1-719f484c6588")
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
        var e, i, s, f, c = {
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
                for (var a = "/" === r.pathname[0] ? r.pathname : "/" + r.pathname, n = 0, o = a.length; n !== t && o >= 0;) "/" === a[--o] && n++;
                if (n !== t) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + t + ") is greater than the number of directories (" + n + ") in the URL path " + e);
                var i = a.slice(0, o + 1);
                return r.protocol + "//" + r.host + i
              };
              Number.isInteger
            },
            5436: (e, t, r) => {
              "use strict";
              var a = {
                  "./helpers": () => r.e(864).then((() => () => r(9864))),
                  "./helpers/payload": () => Promise.all([r.e(42), r.e(496)]).then((() => () => r(1496))),
                  "./helpers/uploads": () => Promise.all([r.e(664), r.e(792), r.e(544)]).then((() => () => r(3924))),
                  "./index": () => Promise.all([r.e(664), r.e(792), r.e(660), r.e(952), r.e(42), r.e(8), r.e(860), r.e(272)]).then((() => () => r(9880))),
                  "./properties": () => Promise.all([r.e(664), r.e(792), r.e(660), r.e(952), r.e(8), r.e(524)]).then((() => () => r(9008))),
                  "./tinaBlockTemplates": () => r.e(104).then((() => () => r(2104))),
                  "./ui": () => Promise.all([r.e(664), r.e(952), r.e(460)]).then((() => () => r(6460)))
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
            3864: e => {
              "use strict";
              e.exports = r
            },
            1128: e => {
              "use strict";
              e.exports = a
            },
            8428: e => {
              "use strict";
              e.exports = n
            },
            9344: e => {
              "use strict";
              e.exports = o
            }
          },
          d = {};

        function l(e) {
          var t = d[e];
          if (void 0 !== t) return t.exports;
          var r = d[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return c[e].call(r.exports, r, r.exports, l), r.loaded = !0, r.exports
        }
        return l.m = c, l.c = d, l.y = t, l.amdO = {}, l.n = e => {
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
          8: "ddd3a194e496ddc71e659dfc0db4df6a",
          42: "0ce5b816c098b12d644a4bbee49098dd",
          100: "8a4c61366b5baf9c0c5ed3f3ed2cfabb",
          104: "cfaa094c75573b5ccb2f456a2012901b",
          132: "70e4e4b21aa7b64311a3075de7e4f5df",
          240: "b83e92584ba897a1b842b080cf845b6e",
          272: "412f256cccb64f9a455b50650c9d7eb7",
          328: "03a0290897e94941ae6cf8251c1ce11b",
          378: "eb7151fd2b73bab9148d80f8ab2ca9e1",
          396: "7d640fa84dce1eed18a92de011d58c58",
          448: "e36682602f272755fad35e49b27a67f7",
          460: "b7f3fec0904cc2f76438beec7b66471b",
          481: "55b3b48e071904c0059dc79d13f2a03e",
          496: "019933efec576ab09cd886a096e5cde1",
          512: "ae973d3e4d1bae62be4a2e0b8b13df06",
          524: "c06106466320f53460e339a05a5f770d",
          540: "e0f877b6dd2283bc1655e1ea378401c8",
          544: "c3ed19482e4d6011296a203575389c8e",
          660: "367195fc468808c041e16808bb0455f9",
          664: "1494b4c1881ca0bce6e7206a8e5e1f97",
          716: "42aece99b131286fcb93e343ddd9541a",
          720: "79379231239f2c4e5c5cc0cbf6f09d06",
          750: "2e539722e43e8b7024307ec59dac1dbf",
          776: "26a11daf227e70c83f966d74e468c65d",
          784: "2aebd5344a7ca5f286aebbf1616fde23",
          792: "57e7ba9aa934888bf2a5dec01e6fb3c3",
          860: "b5dd3a788a0bc5ba8e9e3a7cb547482e",
          864: "777269fbcb7111db91d227935454626c",
          952: "bdfc642c2babeb96a9bf3fc8d02d63db"
        } [e] + ".js", l.miniCssF = e => "css/" + {
          272: "1514f6d072638cd2c86d8a41f3eb9252",
          460: "22964693c61c3167369e822eef4d3510",
          524: "1514f6d072638cd2c86d8a41f3eb9252",
          720: "97fab6031a3baa46f7d54a5d4dd97945"
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
            var o, s;
            if (void 0 !== a)
              for (var f = document.getElementsByTagName("script"), c = 0; c < f.length; c++) {
                var d = f[c];
                if (d.getAttribute("src") == t || d.getAttribute("data-webpack") == i + a) {
                  o = d;
                  break
                }
              }
            o || (s = !0, (o = document.createElement("script")).charset = "utf-8", o.timeout = 120, l.nc && o.setAttribute("nonce", l.nc), o.setAttribute("data-webpack", i + a), o.src = t), e[t] = [r];
            var u = (r, a) => {
                o.onerror = o.onload = null, clearTimeout(h);
                var n = e[t];
                if (delete e[t], o.parentNode && o.parentNode.removeChild(o), n && n.forEach((e => e(a))), r) return r(a)
              },
              h = setTimeout(u.bind(null, void 0, {
                type: "timeout",
                target: o
              }), 12e4);
            o.onerror = u.bind(null, o.onerror), o.onload = u.bind(null, o.onload), s && document.head.appendChild(o)
          }
        }, l.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, l.nmd = e => (e.paths = [], e.children || (e.children = []), e), s = {
          104: [9468],
          660: [3052],
          720: [1532, 1740, 2836, 3061, 3272, 3784, 5356, 8540],
          792: [5792]
        }, f = {
          1532: ["default", "./operations/queries", 3864],
          1740: ["default", "./index", 8428],
          2836: ["default", "./index", 1128],
          3052: ["default", "./index", 3864],
          3061: ["default", "./hooks", 9344],
          3272: ["default", "./helpers/uploads", 8428],
          3784: ["default", "./operations/fragments/newswire-post.graphql", 3864],
          5356: ["default", "./helpers", 8428],
          5792: ["default", "./index", 9344],
          8540: ["default", "./operations/fragments/paging.graphql", 3864],
          9468: ["default", "./properties", 8428]
        }, l.f.remotes = (e, t) => {
          l.o(s, e) && s[e].forEach((e => {
            var r = l.R;
            r || (r = []);
            var a = f[e];
            if (!(r.indexOf(a) >= 0)) {
              if (r.push(a), a.p) return t.push(a.p);
              var n = t => {
                  t || (t = new Error("Container missing")), "string" == typeof t.message && (t.message += '\nwhile loading "' + a[1] + '" from ' + a[2]), l.m[e] = () => {
                    throw t
                  }, a.p = 0
                },
                o = (e, r, o, i, s, f) => {
                  try {
                    var c = e(r, o);
                    if (!c || !c.then) return s(c, i, f);
                    var d = c.then((e => s(e, i)), n);
                    if (!f) return d;
                    t.push(a.p = d)
                  } catch (e) {
                    n(e)
                  }
                },
                i = (e, t, n) => o(t.get, a[1], r, 0, s, n),
                s = t => {
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
                s = (e, t, r, a) => {
                  var n = o[e] = o[e] || {},
                    s = n[t];
                  (!s || !s.loaded && (!a != !s.eager ? a : i > s.from)) && (n[t] = {
                    get: r,
                    from: i,
                    eager: !!a
                  })
                },
                f = e => {
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
              return "default" === r && (s("@rockstargames/components", "1.14.0", (() => Promise.all([l.e(481), l.e(664), l.e(792), l.e(660), l.e(42), l.e(720), l.e(860), l.e(240)]).then((() => () => l(232))))), s("flat", "5.0.2", (() => l.e(328).then((() => () => l(1328))))), s("lodash", "4.17.21", (() => l.e(784).then((() => () => l(9784))))), s("re-resizable", "6.9.11", (() => Promise.all([l.e(750), l.e(664), l.e(540)]).then((() => () => l(4512))))), s("react-dom", "18.2.0", (() => Promise.all([l.e(448), l.e(664)]).then((() => () => l(8448))))), s("react-dom", "18.2.0", (() => Promise.all([l.e(716), l.e(664)]).then((() => () => l(8952))))), s("react-intersection-observer", "9.5.2", (() => Promise.all([l.e(664), l.e(396)]).then((() => () => l(8396))))), s("react-intersection-observer", "9.5.2", (() => Promise.all([l.e(664), l.e(512)]).then((() => () => l(1512))))), s("react", "18.2.0", (() => l.e(100).then((() => () => l(9480))))), s("uuid", "9.0.1", (() => l.e(378).then((() => () => l(1378))))), f(9344), f(3864), f(8428), f(1128)), c.length ? e[r] = Promise.all(c).then((() => e[r] = 1)) : e[r] = 1
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
                for (var i = 0, s = 1, f = !0;; s++, i++) {
                  var c, d, l = s < r.length ? (typeof r[s])[0] : "";
                  if (i >= a.length || "o" == (d = (typeof(c = a[i]))[0])) return !f || ("u" == l ? s > n && !o : "" == l != o);
                  if ("u" == d) {
                    if (!f || "u" != l) return !1
                  } else if (f)
                    if (l == d)
                      if (s <= n) {
                        if (c != r[s]) return !1
                      } else {
                        if (o ? c > r[s] : c < r[s]) return !1;
                        c != r[s] && (f = !1)
                      }
                  else if ("s" != l && "n" != l) {
                    if (o || s <= n) return !1;
                    f = !1, s--
                  } else {
                    if (s <= n || d < l != o) return !1;
                    f = !1
                  } else "s" != l && "n" != l && (f = !1, s--)
                }
              }
              var u = [],
                h = u.pop.bind(u);
              for (i = 1; i < r.length; i++) {
                var p = r[i];
                u.push(1 == p ? h() | h() : 2 == p ? h() & h() : p ? t(p, a) : !h())
              }
              return !!h()
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
                    s = (typeof i)[0];
                  if (o != s) return "o" == o && "n" == s || "s" == s || "u" == o;
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
              3660: () => a("default", "lodash", [1, 4, 17, 21], (() => l.e(784).then((() => () => l(9784))))),
              1664: () => a("default", "react", [1, 18, 2, 0], (() => l.e(100).then((() => () => l(9480))))),
              8e3: () => a("default", "uuid", [1, 9, 0, 0], (() => l.e(378).then((() => () => l(1378))))),
              4952: () => a("default", "re-resizable", [1, 6, 9, 9], (() => Promise.all([l.e(750), l.e(540)]).then((() => () => l(4512))))),
              9860: () => a("default", "@rockstargames/components", [1, "workspace:*"], (() => Promise.all([l.e(481), l.e(720)]).then((() => () => l(232))))),
              7020: () => a("default", "flat", [1, 5, 0, 2], (() => l.e(328).then((() => () => l(1328))))),
              2656: () => a("default", "react-intersection-observer", [1, 9, 4, 0], (() => l.e(776).then((() => () => l(8396))))),
              4348: () => a("default", "react-intersection-observer", [1, 9, 4, 0], (() => l.e(132).then((() => () => l(1512))))),
              7364: () => a("default", "react-dom", [1, 18, 2, 0], (() => l.e(716).then((() => () => l(8952))))),
              6540: () => a("default", "react-dom", [1, 18, 2, 0], (() => l.e(448).then((() => () => l(8448)))))
            },
            i = {
              42: [3660],
              272: [7020],
              460: [2656],
              540: [6540],
              660: [8e3],
              664: [1664],
              720: [4348, 7364],
              860: [9860],
              952: [4952]
            },
            s = {};
          l.f.consumes = (e, t) => {
            l.o(i, e) && i[e].forEach((e => {
              if (l.o(n, e)) return t.push(n[e]);
              if (!s[e]) {
                var r = t => {
                  n[e] = 0, l.m[e] = r => {
                    delete l.c[e], r.exports = t()
                  }
                };
                s[e] = !0;
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
                272: 1,
                460: 1,
                524: 1,
                720: 1
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
                        s = r && r.target && r.target.href || t,
                        f = new Error("Loading CSS chunk " + e + " failed.\n(" + s + ")");
                      f.code = "CSS_CHUNK_LOAD_FAILED", f.type = i, f.request = s, o.parentNode && o.parentNode.removeChild(o), n(f)
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
                s = r[2],
                f = 0;
              if (o.some((t => 0 !== e[t]))) {
                for (a in i) l.o(i, a) && (l.m[a] = i[a]);
                s && s(l)
              }
              for (t && t(r); f < o.length; f++) n = o[f], l.o(e, n) && e[n] && e[n][0](), e[n] = 0
            },
            r = self.webpackChunk_rockstargames_tina = self.webpackChunk_rockstargames_tina || [];
          r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
        })(), l(3824), l(5436)
      })())
    }
  }
}));