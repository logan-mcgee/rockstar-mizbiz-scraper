! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "7b8af176-6e75-4e15-bd94-7cbd93db737d", e._sentryDebugIdIdentifier = "sentry-dbid-7b8af176-6e75-4e15-bd94-7cbd93db737d")
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
                  "./bootstrap": () => Promise.all([r.e(1689), r.e(3165), r.e(6287), r.e(9852), r.e(1403), r.e(6747), r.e(8626), r.e(9516), r.e(4465), r.e(2846)]).then((() => () => r(12846))),
                  "./index": () => Promise.all([r.e(1689), r.e(3165), r.e(6287), r.e(1403), r.e(6747), r.e(8626), r.e(9516), r.e(4465), r.e(8179)]).then((() => () => r(28179))),
                  "./site-routes/Bully": () => Promise.all([r.e(1689), r.e(3165), r.e(6287), r.e(1403), r.e(6747), r.e(8626), r.e(9516), r.e(4465), r.e(7819), r.e(4969)]).then((() => () => r(74969))),
                  "./site-routes/RedDeadRedemption": () => Promise.all([r.e(1689), r.e(3165), r.e(6287), r.e(1403), r.e(6747), r.e(8626), r.e(9516), r.e(4465), r.e(7819), r.e(2861)]).then((() => () => r(92861))),
                  "./tina": () => Promise.all([r.e(1689), r.e(3165), r.e(6287), r.e(1403), r.e(6747), r.e(8626), r.e(9516), r.e(4465), r.e(7819)]).then((() => () => r(97819)))
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
          300: "158a78fb33944f273905a22219a91c68",
          581: "08b3489d0268571641a8b85a8594f8ba",
          588: "8dce0aa6d247d8c6d68680133a22cd64",
          973: "819e5152d83c4dbd709a0eba6c23c672",
          1171: "efc0fbdb684e953e556b99e407be0d78",
          1360: "584765958c6e87b580d83c4b55fa9571",
          1403: "d02e561c7f49a6feaf6e0e5fcabcb363",
          1689: "668a7bc1ec0f3e1f6a293581eb68c31f",
          1774: "90b49e86be44d77e0f7590504c05d0b4",
          2052: "f317d173fb4b908602e41a2a8c5e35d0",
          2723: "433d2dd950b176490f2f7039c55b7947",
          2846: "1f46ca74a890c1d0ab5e7c303ff3c45b",
          2861: "800fed4c319e85a7beef0a19c4295173",
          2862: "83bcd07563d15328ae740ea83703f1ff",
          3165: "8df44bc2f03e63bf5a64a396f03c9f98",
          3354: "e7b0631e973980092f0302242968fe57",
          3380: "e27dbdd9d55d37693ff86371609aa0aa",
          4105: "2fe10b1740954290867657c9c1a70bc8",
          4143: "e944d04e5779a159f006fd3df777eb6b",
          4196: "bee889f17b73058c31989755ac38b7d5",
          4433: "37e9ee4ef9efe6da00e1c5f3e7e9f6d8",
          4465: "6954c9c5482b4410316e83498bf9d6b2",
          4969: "76eacecbbbb99cab9208193ed096e828",
          5133: "3f2f58ede61f3cab27a6b33f36104f1b",
          6008: "d4a07efab5aee7f5d90de2512bbf24c8",
          6022: "028eca6a0720f6ee21a04b621b77ca5f",
          6105: "6b503c577860a515d2b792ed62c6ea8f",
          6131: "f62f28826714ff57dd9e59f2628723f1",
          6177: "9fc3cd14919c42170240887c225f9ad0",
          6287: "43effc7a61d30526236c72a175a8de6a",
          6524: "09cbed7e2a129fe8f124f55dee9ef637",
          6747: "82da41107bc07fcd6f0a0d967248ba04",
          7004: "55be823ffdea22cb32cc57a605155dc2",
          7426: "9fd64027da5d3f63b228736332b81f0f",
          7533: "08c157519957638e94cd1ee19e216c57",
          7588: "a19e52dc8f173f0d193285a6dcae973b",
          7764: "8ecb6c9fc6c9840de69f595a10771202",
          7819: "f035e423145def1e139234f68649e25c",
          7919: "b52387c628a540515552282d937b0702",
          7977: "e4bc93cfeb3d5f04ba60e90ae31a1291",
          8066: "ba41f9f8f60b1b71242c6872656ad482",
          8158: "ec279044b69c256f2a0a6b6d12a466b4",
          8179: "640f719fde82291322850ff6bf70f290",
          8425: "0bee5750cbc8493096992560ba1647f2",
          8486: "fbdcb6b8d7012deb73f2c5d4762729e5",
          8512: "c94140f8c0d46d935373a1cd9f82b385",
          8626: "8edb9e28dd9b5b8a0ecafd3f28da86d0",
          9100: "e10c7411b124945891c4a4fd93e46cf4",
          9113: "80c1d13098b4dad506c0fdfbd676584b",
          9191: "a2d24154edb410dde63e8d8c9ce3d760",
          9516: "8b135237b2bcaea781c9e0b758b1baa0",
          9663: "3e7fc86538b71d33a7a764414de0c230",
          9852: "8f6daab5723a0d765ad44d00f5e0cc7a"
        } [e] + ".js", p.miniCssF = e => "css/" + {
          2846: "32af9d0c26e64e23edfa1eb3071ff9c6",
          2861: "916e74d8d50f64d8f556da06d20283dd",
          2862: "854e00a357d948027baaa513629be0c3",
          4433: "b07f327cbe7e2679a4d5423b745ed168",
          4465: "ca7b2ea5ba6474a5a0446bed71a73367",
          4969: "916e74d8d50f64d8f556da06d20283dd",
          6287: "1368323c31eba1a41eb9227ad26818d4",
          7004: "ec375cd8457f99785b185813b04990cd"
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
          4465: [26398, 28089, 31879, 55140, 58407, 73379, 78417, 90588, 94566],
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
              return "default" === r && (f("@rockstargames/locale-tools", "1.0.0", (() => Promise.all([p.e(8066), p.e(1403), p.e(4143)]).then((() => () => p(24143))))), f("@rockstargames/modules-core-hero", "0.1.2", (() => Promise.all([p.e(1403), p.e(6747), p.e(8626), p.e(581), p.e(2862)]).then((() => () => p(86240))))), f("@rockstargames/modules-core-highlights", "0.0.2", (() => Promise.all([p.e(3165), p.e(1403), p.e(6747), p.e(4433), p.e(6131)]).then((() => () => p(76131))))), f("focus-trap-react", "10.2.3", (() => Promise.all([p.e(7588), p.e(1403), p.e(9516)]).then((() => () => p(57588))))), f("framer-motion", "10.16.4", (() => Promise.all([p.e(588), p.e(1403)]).then((() => () => p(70588))))), f("framer-motion", "10.16.4", (() => Promise.all([p.e(6177), p.e(1403)]).then((() => () => p(96177))))), f("framer-motion", "7.10.3", (() => Promise.all([p.e(1689), p.e(2052), p.e(1403)]).then((() => () => p(72052))))), f("framer-motion", "7.10.3", (() => Promise.all([p.e(1689), p.e(1774), p.e(1403)]).then((() => () => p(51774))))), f("prop-types", "15.8.1", (() => p.e(7977).then((() => () => p(37977))))), f("react-dom", "18.2.0", (() => Promise.all([p.e(7533), p.e(1403)]).then((() => () => p(47533))))), f("react-intersection-observer", "9.10.3", (() => Promise.all([p.e(1403), p.e(6105)]).then((() => () => p(66105))))), f("react-intersection-observer", "9.10.3", (() => Promise.all([p.e(1403), p.e(3354)]).then((() => () => p(83354))))), f("react-intersection-observer", "9.10.3", (() => Promise.all([p.e(1403), p.e(300)]).then((() => () => p(300))))), f("react-router-dom", "6.17.0", (() => Promise.all([p.e(4105), p.e(6008), p.e(1403)]).then((() => () => p(76008))))), f("react-router-dom", "6.17.0", (() => Promise.all([p.e(4105), p.e(1171), p.e(1403)]).then((() => () => p(31171))))), f("react", "18.2.0", (() => p.e(3380).then((() => () => p(23380))))), c(60404), c(99466), c(92969), c(61024), c(49787), c(25136)), s.length ? e[r] = Promise.all(s).then((() => e[r] = 1)) : e[r] = 1
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
              66335: () => a("default", "@rockstargames/modules-core-hero", [1, "workspace:*"], (() => p.e(7004).then((() => () => p(86240))))),
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
              4433: [174, 59217],
              4465: [7117, 13953, 17891, 25076, 49948, 66335, 70834, 79493, 80791],
              6747: [96717],
              7004: [40581],
              8626: [89779],
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
                2862: 1,
                4433: 1,
                4465: 1,
                4969: 1,
                6287: 1,
                7004: 1
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