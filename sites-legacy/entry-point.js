! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "5a28a30c-b623-4284-b1d1-e8ce8e9d29fd", e._sentryDebugIdIdentifier = "sentry-dbid-5a28a30c-b623-4284-b1d1-e8ce8e9d29fd")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-legacy",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register(["@rockstargames/graph-client", "@rockstargames/intl", "@rockstargames/modules-core-sc-user", "@rockstargames/modules-core-videoplayer", "@rockstargames/tina", "@rockstargames/utils"], (function(e, t) {
  var r = {},
    a = {},
    o = {},
    n = {},
    d = {},
    f = {};
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
  }), Object.defineProperty(f, "__esModule", {
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
        f[t] = e[t]
      }))
    }],
    execute: function() {
      e((() => {
        var e, c, s, i, l, u, b = {
            6539: (e, t, r) => {
              (0, r(13403).w)(1)
            },
            13403: (e, t, r) => {
              const a = r(75659).y;
              t.w = function(e) {
                if (e || (e = 1), !r.y.meta || !r.y.meta.url) throw console.error("__system_context__", r.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                r.p = a(r.y.meta.url, e)
              }
            },
            32160: (e, t, r) => {
              r(6539)
            },
            75659: (e, t, r) => {
              t.y = function(e, t) {
                var r = document.createElement("a");
                r.href = e;
                for (var a = "/" === r.pathname[0] ? r.pathname : "/" + r.pathname, o = 0, n = a.length; o !== t && n >= 0;) "/" === a[--n] && o++;
                if (o !== t) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + t + ") is greater than the number of directories (" + o + ") in the URL path " + e);
                var d = a.slice(0, n + 1);
                return r.protocol + "//" + r.host + d
              };
              Number.isInteger
            },
            29501: (e, t, r) => {
              "use strict";
              var a = {
                  "./bootstrap": () => Promise.all([r.e(1689), r.e(3165), r.e(9377), r.e(9852), r.e(1403), r.e(6747), r.e(8626), r.e(9516), r.e(3666), r.e(2846)]).then((() => () => r(12846))),
                  "./index": () => Promise.all([r.e(1689), r.e(3165), r.e(9377), r.e(1403), r.e(6747), r.e(8626), r.e(9516), r.e(3666), r.e(8179)]).then((() => () => r(28179))),
                  "./site-routes/Bully": () => Promise.all([r.e(1689), r.e(3165), r.e(9377), r.e(1403), r.e(6747), r.e(8626), r.e(9516), r.e(3666), r.e(7819), r.e(4969)]).then((() => () => r(74969))),
                  "./site-routes/RedDeadRedemption": () => Promise.all([r.e(1689), r.e(3165), r.e(9377), r.e(1403), r.e(6747), r.e(8626), r.e(9516), r.e(3666), r.e(7819), r.e(2861)]).then((() => () => r(92861))),
                  "./tina": () => Promise.all([r.e(1689), r.e(3165), r.e(9377), r.e(1403), r.e(6747), r.e(8626), r.e(9516), r.e(3666), r.e(7819)]).then((() => () => r(97819)))
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
            61024: e => {
              "use strict";
              e.exports = r
            },
            49787: e => {
              "use strict";
              e.exports = a
            },
            60404: e => {
              "use strict";
              e.exports = o
            },
            25136: e => {
              "use strict";
              e.exports = n
            },
            99466: e => {
              "use strict";
              e.exports = d
            },
            92969: e => {
              "use strict";
              e.exports = f
            }
          },
          h = {};

        function p(e) {
          var t = h[e];
          if (void 0 !== t) return t.exports;
          var r = h[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return b[e].call(r.exports, r, r.exports, p), r.loaded = !0, r.exports
        }
        return p.m = b, p.c = h, p.y = t, p.amdO = {}, p.n = e => {
          var t = e && e.__esModule ? () => e.default : () => e;
          return p.d(t, {
            a: t
          }), t
        }, c = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, p.t = function(t, r) {
          if (1 & r && (t = this(t)), 8 & r) return t;
          if ("object" == typeof t && t) {
            if (4 & r && t.__esModule) return t;
            if (16 & r && "function" == typeof t.then) return t
          }
          var a = Object.create(null);
          p.r(a);
          var o = {};
          e = e || [null, c({}), c([]), c(c)];
          for (var n = 2 & r && t;
            "object" == typeof n && !~e.indexOf(n); n = c(n)) Object.getOwnPropertyNames(n).forEach((e => o[e] = () => t[e]));
          return o.default = () => t, p.d(a, o), a
        }, p.d = (e, t) => {
          for (var r in t) p.o(t, r) && !p.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: t[r]
          })
        }, p.f = {}, p.e = e => Promise.all(Object.keys(p.f).reduce(((t, r) => (p.f[r](e, t), t)), [])), p.u = e => "js/" + {
          300: "c2b1463e9f7466eb48f043ff126a2eac",
          581: "08b3489d0268571641a8b85a8594f8ba",
          588: "11bf3fabbab0a323589a0be937de2a87",
          881: "c56330b90b2e18831fa8d0ea2773bc8e",
          973: "53a790ae225599e79f2a09218d135a15",
          1171: "b69ea169de166839f20e2860ff79e1f0",
          1403: "d02e561c7f49a6feaf6e0e5fcabcb363",
          1622: "49856d9208f253988888ccd5aa470877",
          1689: "b95f161c44fddbc901d3fd9f816c7b9f",
          1774: "aefd6098bb22f72df2743548a7c04c53",
          2052: "7e9279f666b440352686b0404aaa4767",
          2808: "b833c3cfca4d9f43485b2e20f9c7c0b2",
          2846: "350a1a4ba709c52b722502a87a0461dc",
          2861: "261067ea26d540ad834610744b9f51fc",
          2939: "518b4d01a0c3530b89ec4443abd5057e",
          3165: "2d2df7a4af27c1d6197b042ef7affbd3",
          3354: "cbfaca1deabcd8fe9ae89022e8cfb2ba",
          3380: "4dd6d69ef6ed998d6736cac1ce41f7a2",
          3431: "249308dc3dd06d5b124bbbb9de93689f",
          3464: "ffcc61285a40499bb76c8fbb17b665f8",
          3666: "e4eab7da39849719959b786dbd8b657a",
          4105: "3848a3505cdd86120e0635e1101271d3",
          4143: "ca0e5d6563d022afa46a607499358d65",
          4433: "37e9ee4ef9efe6da00e1c5f3e7e9f6d8",
          4969: "bb87f7ecf1dd89b30051913fee6e03db",
          6008: "ee618b526dbe256a9dfd08f2d31295e6",
          6105: "3e3d65d849244879f476082d35583e77",
          6131: "a7a455cd28861cf93510e53fec03c584",
          6177: "4690e49c08f0a04bbac402b2ab61409c",
          6524: "822c7d6144bd4b919528af785855f18a",
          6747: "82da41107bc07fcd6f0a0d967248ba04",
          6808: "22cf16ccf92b0d80304bd34068b475f6",
          6996: "083ef589228f3d83c2d713654b46da2d",
          7123: "53e1dbb6c296ac771c8534c6b460a061",
          7533: "c75acbf70c60ab84023f4b7282c37f7c",
          7588: "493ea96723fdbe1da32e5f5a6a779385",
          7781: "f64aba5f7587d4d4c51e0af8cca2512d",
          7819: "7d14d1cc299893adf2af67ea125b26e4",
          7919: "975ed8b1485f04a205c1f33cd1c39d02",
          7977: "6e2dd0fa8a5d9565762b3aa04b8c26a0",
          8066: "5ccc6add0ecc785f40484c4bef87cdb1",
          8179: "c008b12d748ec4b8b554111a85a48e10",
          8290: "9dc3d7a5041608096d152127ba1109be",
          8314: "e6538ac61b5f40f49308e255760090de",
          8486: "9aa117d8d345b3675e608ca86b979d31",
          8512: "8ecbf53c2a687d9f9a95b97224fc4a65",
          8626: "cf265ec322068c57dfedf672c8c48ec4",
          9259: "8710aea4694c715886ead7311d24c7ee",
          9377: "4dbed6f25dae841375007a03cfe4f05c",
          9516: "8b135237b2bcaea781c9e0b758b1baa0",
          9695: "8d2b264e29a75a2284aafd72f1537954",
          9852: "889cee823c0c894ad7dfe6607921ac14",
          9853: "7c529a746859cdf8a17eb38f8d15b94a"
        } [e] + ".js", p.miniCssF = e => "css/" + {
          2846: "2e2c2d79838c3959e62808fd28ef0e6c",
          2861: "916e74d8d50f64d8f556da06d20283dd",
          3666: "186e8c97bd601962c433ea8e8974ac18",
          4433: "b07f327cbe7e2679a4d5423b745ed168",
          4969: "916e74d8d50f64d8f556da06d20283dd",
          9259: "17e0d09461145002d267130d162b77a0",
          9377: "2b35314f2a2d77a8a199e02d5cb9bad0",
          9695: "eabd0090b264526a2c6b0be09a27619d"
        } [e] + ".css", p.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), p.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), s = {}, i = "@rockstargames/sites-legacy:", p.l = (e, t, r, a) => {
          if (s[e]) s[e].push(t);
          else {
            var o, n;
            if (void 0 !== r)
              for (var d = document.getElementsByTagName("script"), f = 0; f < d.length; f++) {
                var c = d[f];
                if (c.getAttribute("src") == e || c.getAttribute("data-webpack") == i + r) {
                  o = c;
                  break
                }
              }
            o || (n = !0, (o = document.createElement("script")).charset = "utf-8", o.timeout = 120, p.nc && o.setAttribute("nonce", p.nc), o.setAttribute("data-webpack", i + r), o.src = e), s[e] = [t];
            var l = (t, r) => {
                o.onerror = o.onload = null, clearTimeout(u);
                var a = s[e];
                if (delete s[e], o.parentNode && o.parentNode.removeChild(o), a && a.forEach((e => e(r))), t) return t(r)
              },
              u = setTimeout(l.bind(null, void 0, {
                type: "timeout",
                target: o
              }), 12e4);
            o.onerror = l.bind(null, o.onerror), o.onload = l.bind(null, o.onload), n && document.head.appendChild(o)
          }
        }, p.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, p.nmd = e => (e.paths = [], e.children || (e.children = []), e), l = {
          2846: [42158, 52757, 63902],
          3666: [26398, 28089, 31879, 55140, 58407, 73379, 78417, 90588, 94566],
          6747: [40207, 74401],
          7819: [17523, 33809],
          8626: [42756]
        }, u = {
          17523: ["default", "./tina", 25136],
          26398: ["default", "./helpers", 99466],
          28089: ["default", "./helpers/uploads", 99466],
          31879: ["default", "./index", 25136],
          33809: ["default", "./ui", 99466],
          40207: ["default", "./index", 60404],
          42158: ["default", "./providers", 92969],
          42756: ["default", "./index", 92969],
          52757: ["default", "./providers", 60404],
          55140: ["default", "./properties", 99466],
          58407: ["default", "./index", 61024],
          63902: ["default", "./index", 49787],
          73379: ["default", "./functions", 92969],
          74401: ["default", "./index", 99466],
          78417: ["default", "./operations/fragments/paging.graphql", 61024],
          90588: ["default", "./operations/fragments/newswire-post.graphql", 61024],
          94566: ["default", "./messages", 49787]
        }, p.f.remotes = (e, t) => {
          p.o(l, e) && l[e].forEach((e => {
            var r = p.R;
            r || (r = []);
            var a = u[e];
            if (!(r.indexOf(a) >= 0)) {
              if (r.push(a), a.p) return t.push(a.p);
              var o = t => {
                  t || (t = new Error("Container missing")), "string" == typeof t.message && (t.message += '\nwhile loading "' + a[1] + '" from ' + a[2]), p.m[e] = () => {
                    throw t
                  }, a.p = 0
                },
                n = (e, r, n, d, f, c) => {
                  try {
                    var s = e(r, n);
                    if (!s || !s.then) return f(s, d, c);
                    var i = s.then((e => f(e, d)), o);
                    if (!c) return i;
                    t.push(a.p = i)
                  } catch (e) {
                    o(e)
                  }
                },
                d = (e, t, o) => n(t.get, a[1], r, 0, f, o),
                f = t => {
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
                d = "@rockstargames/sites-legacy",
                f = (e, t, r, a) => {
                  var o = n[e] = n[e] || {},
                    f = o[t];
                  (!f || !f.loaded && (!a != !f.eager ? a : d > f.from)) && (o[t] = {
                    get: r,
                    from: d,
                    eager: !!a
                  })
                },
                c = e => {
                  var t = e => {
                    return t = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(t));
                    var t
                  };
                  try {
                    var o = p(e);
                    if (!o) return;
                    var n = e => e && e.init && e.init(p.S[r], a);
                    if (o.then) return s.push(o.then(n, t));
                    var d = n(o);
                    if (d && d.then) return s.push(d.catch(t))
                  } catch (e) {
                    t(e)
                  }
                },
                s = [];
              return "default" === r && (f("@rockstargames/locale-tools", "1.0.0", (() => Promise.all([p.e(8066), p.e(1403), p.e(4143)]).then((() => () => p(24143))))), f("@rockstargames/modules-core-hero", "0.1.2", (() => Promise.all([p.e(1403), p.e(6747), p.e(8626), p.e(581), p.e(9695)]).then((() => () => p(25155))))), f("@rockstargames/modules-core-highlights", "0.0.2", (() => Promise.all([p.e(3165), p.e(1403), p.e(6747), p.e(4433), p.e(6131)]).then((() => () => p(76131))))), f("focus-trap-react", "10.2.3", (() => Promise.all([p.e(7588), p.e(1403), p.e(9516)]).then((() => () => p(57588))))), f("framer-motion", "10.16.4", (() => Promise.all([p.e(588), p.e(1403)]).then((() => () => p(70588))))), f("framer-motion", "10.16.4", (() => Promise.all([p.e(6177), p.e(1403)]).then((() => () => p(96177))))), f("framer-motion", "7.10.3", (() => Promise.all([p.e(1689), p.e(2052), p.e(1403)]).then((() => () => p(72052))))), f("framer-motion", "7.10.3", (() => Promise.all([p.e(1689), p.e(1774), p.e(1403)]).then((() => () => p(51774))))), f("prop-types", "15.8.1", (() => p.e(7977).then((() => () => p(37977))))), f("react-dom", "18.2.0", (() => Promise.all([p.e(7533), p.e(1403)]).then((() => () => p(47533))))), f("react-intersection-observer", "9.10.3", (() => Promise.all([p.e(1403), p.e(6105)]).then((() => () => p(66105))))), f("react-intersection-observer", "9.10.3", (() => Promise.all([p.e(1403), p.e(3354)]).then((() => () => p(83354))))), f("react-intersection-observer", "9.10.3", (() => Promise.all([p.e(1403), p.e(300)]).then((() => () => p(300))))), f("react-router-dom", "6.17.0", (() => Promise.all([p.e(4105), p.e(6008), p.e(1403)]).then((() => () => p(76008))))), f("react-router-dom", "6.17.0", (() => Promise.all([p.e(4105), p.e(1171), p.e(1403)]).then((() => () => p(31171))))), f("react", "18.2.0", (() => p.e(3380).then((() => () => p(23380))))), c(60404), c(99466), c(92969), c(61024), c(49787), c(25136)), s.length ? e[r] = Promise.all(s).then((() => e[r] = 1)) : e[r] = 1
            }
          }
        })(), (() => {
          var e;
          p.g.importScripts && (e = p.g.location + "");
          var t = p.g.document;
          if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
            var r = t.getElementsByTagName("script");
            if (r.length)
              for (var a = r.length - 1; a > -1 && (!e || !/^http(s?):/.test(e));) e = r[a--].src
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
                for (var d = 0, f = 1, c = !0;; f++, d++) {
                  var s, i, l = f < r.length ? (typeof r[f])[0] : "";
                  if (d >= a.length || "o" == (i = (typeof(s = a[d]))[0])) return !c || ("u" == l ? f > o && !n : "" == l != n);
                  if ("u" == i) {
                    if (!c || "u" != l) return !1
                  } else if (c)
                    if (l == i)
                      if (f <= o) {
                        if (s != r[f]) return !1
                      } else {
                        if (n ? s > r[f] : s < r[f]) return !1;
                        s != r[f] && (c = !1)
                      }
                  else if ("s" != l && "n" != l) {
                    if (n || f <= o) return !1;
                    c = !1, f--
                  } else {
                    if (f <= o || i < l != n) return !1;
                    c = !1
                  } else "s" != l && "n" != l && (c = !1, f--)
                }
              }
              var u = [],
                b = u.pop.bind(u);
              for (d = 1; d < r.length; d++) {
                var h = r[d];
                u.push(1 == h ? b() | b() : 2 == h ? b() & b() : h ? t(h, a) : !b())
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
                    f = (typeof d)[0];
                  if (n != f) return "o" == n && "n" == f || "s" == f || "u" == n;
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
              71403: () => a("default", "react", [1, 18, 2, 0], (() => p.e(3380).then((() => () => p(23380))))),
              96717: () => a("default", "@rockstargames/locale-tools", [1, "workspace:*"], (() => Promise.all([p.e(8066), p.e(6524)]).then((() => () => p(24143))))),
              89779: () => a("default", "react-router-dom", [1, 6, 11, 2], (() => Promise.all([p.e(4105), p.e(6008)]).then((() => () => p(76008))))),
              39516: () => a("default", "prop-types", [1, 15, 8, 1], (() => p.e(7977).then((() => () => p(37977))))),
              7117: () => a("default", "focus-trap-react", [1, 10, 2, 3], (() => p.e(7588).then((() => () => p(57588))))),
              13953: () => a("default", "framer-motion", [1, 10, 12, 18], (() => p.e(6177).then((() => () => p(96177))))),
              17891: () => a("default", "@rockstargames/modules-core-highlights", [1, "workspace:*"], (() => Promise.all([p.e(4433), p.e(8512)]).then((() => () => p(76131))))),
              25076: () => a("default", "react-router-dom", [1, 6, 11, 2], (() => Promise.all([p.e(4105), p.e(1171)]).then((() => () => p(31171))))),
              49948: () => a("default", "react-intersection-observer", [1, 9, 10, 3], (() => p.e(7919).then((() => () => p(300))))),
              66335: () => a("default", "@rockstargames/modules-core-hero", [1, "workspace:*"], (() => p.e(9259).then((() => () => p(25155))))),
              70834: () => a("default", "react-intersection-observer", [1, 9, 10, 3], (() => p.e(973).then((() => () => p(83354))))),
              79493: () => a("default", "react-dom", [1, 18, 2, 0], (() => p.e(7533).then((() => () => p(47533))))),
              80791: () => a("default", "framer-motion", [1, 10, 12, 18], (() => p.e(1774).then((() => () => p(51774))))),
              40581: () => a("default", "framer-motion", [1, 10, 12, 18], (() => Promise.all([p.e(1689), p.e(2052)]).then((() => () => p(72052))))),
              174: () => a("default", "framer-motion", [1, 10, 12, 18], (() => p.e(588).then((() => () => p(70588))))),
              59217: () => a("default", "react-intersection-observer", [1, 9, 10, 3], (() => p.e(8486).then((() => () => p(66105)))))
            },
            d = {
              581: [40581],
              1403: [71403],
              3666: [7117, 13953, 17891, 25076, 49948, 66335, 70834, 79493, 80791],
              4433: [174, 59217],
              6747: [96717],
              8626: [89779],
              9259: [40581],
              9516: [39516]
            },
            f = {};
          p.f.consumes = (e, t) => {
            p.o(d, e) && d[e].forEach((e => {
              if (p.o(o, e)) return t.push(o[e]);
              if (!f[e]) {
                var r = t => {
                  o[e] = 0, p.m[e] = r => {
                    delete p.c[e], r.exports = t()
                  }
                };
                f[e] = !0;
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
              8106: 0
            };
            p.f.miniCss = (t, r) => {
              e[t] ? r.push(e[t]) : 0 !== e[t] && {
                2846: 1,
                2861: 1,
                3666: 1,
                4433: 1,
                4969: 1,
                9259: 1,
                9377: 1,
                9695: 1
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
                        f = r && r.target && r.target.href || t,
                        c = new Error("Loading CSS chunk " + e + " failed.\n(" + f + ")");
                      c.code = "CSS_CHUNK_LOAD_FAILED", c.type = d, c.request = f, n.parentNode && n.parentNode.removeChild(n), o(c)
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
            8106: 0
          };
          p.f.j = (t, r) => {
            var a = p.o(e, t) ? e[t] : void 0;
            if (0 !== a)
              if (a) r.push(a[2]);
              else if (/^(1403|4433|581|6747|9516)$/.test(t)) e[t] = 0;
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
                f = r[2],
                c = 0;
              if (n.some((t => 0 !== e[t]))) {
                for (a in d) p.o(d, a) && (p.m[a] = d[a]);
                f && f(p)
              }
              for (t && t(r); c < n.length; c++) o = n[c], p.o(e, o) && e[o] && e[o][0](), e[o] = 0
            },
            r = self.webpackChunk_rockstargames_sites_legacy = self.webpackChunk_rockstargames_sites_legacy || [];
          r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
        })(), p.nc = void 0, p(32160), p(29501)
      })())
    }
  }
}));