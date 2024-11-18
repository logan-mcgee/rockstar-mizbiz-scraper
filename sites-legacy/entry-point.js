! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "2616a821-8451-4b27-aeeb-106ed7c43d55", e._sentryDebugIdIdentifier = "sentry-dbid-2616a821-8451-4b27-aeeb-106ed7c43d55")
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
  var a = {},
    r = {},
    o = {},
    n = {},
    d = {},
    f = {};
  return Object.defineProperty(a, "__esModule", {
    value: !0
  }), Object.defineProperty(r, "__esModule", {
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
        a[t] = e[t]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(t) {
        r[t] = e[t]
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
            6539: (e, t, a) => {
              (0, a(13403).w)(1)
            },
            13403: (e, t, a) => {
              const r = a(75659).y;
              t.w = function(e) {
                if (e || (e = 1), !a.y.meta || !a.y.meta.url) throw console.error("__system_context__", a.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                a.p = r(a.y.meta.url, e)
              }
            },
            32160: (e, t, a) => {
              a(6539)
            },
            75659: (e, t, a) => {
              t.y = function(e, t) {
                var a = document.createElement("a");
                a.href = e;
                for (var r = "/" === a.pathname[0] ? a.pathname : "/" + a.pathname, o = 0, n = r.length; o !== t && n >= 0;) "/" === r[--n] && o++;
                if (o !== t) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + t + ") is greater than the number of directories (" + o + ") in the URL path " + e);
                var d = r.slice(0, n + 1);
                return a.protocol + "//" + a.host + d
              };
              Number.isInteger
            },
            29501: (e, t, a) => {
              "use strict";
              var r = {
                  "./bootstrap": () => Promise.all([a.e(1689), a.e(3165), a.e(9377), a.e(9852), a.e(1403), a.e(6747), a.e(8626), a.e(9516), a.e(3666), a.e(2846)]).then((() => () => a(12846))),
                  "./index": () => Promise.all([a.e(1689), a.e(3165), a.e(9377), a.e(1403), a.e(6747), a.e(8626), a.e(9516), a.e(3666), a.e(8179)]).then((() => () => a(28179))),
                  "./site-routes/Bully": () => Promise.all([a.e(1689), a.e(3165), a.e(9377), a.e(1403), a.e(6747), a.e(8626), a.e(9516), a.e(3666), a.e(7819), a.e(4969)]).then((() => () => a(74969))),
                  "./site-routes/RedDeadRedemption": () => Promise.all([a.e(1689), a.e(3165), a.e(9377), a.e(1403), a.e(6747), a.e(8626), a.e(9516), a.e(3666), a.e(7819), a.e(2861)]).then((() => () => a(92861))),
                  "./tina": () => Promise.all([a.e(1689), a.e(3165), a.e(9377), a.e(1403), a.e(6747), a.e(8626), a.e(9516), a.e(3666), a.e(7819)]).then((() => () => a(97819)))
                },
                o = (e, t) => (a.R = t, t = a.o(r, e) ? r[e]() : Promise.resolve().then((() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                })), a.R = void 0, t),
                n = (e, t) => {
                  if (a.S) {
                    var r = "default",
                      o = a.S[r];
                    if (o && o !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return a.S[r] = e, a.I(r, t)
                  }
                };
              a.d(t, {
                get: () => o,
                init: () => n
              })
            },
            61024: e => {
              "use strict";
              e.exports = a
            },
            49787: e => {
              "use strict";
              e.exports = r
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
          var a = h[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return b[e].call(a.exports, a, a.exports, p), a.loaded = !0, a.exports
        }
        return p.m = b, p.c = h, p.y = t, p.amdO = {}, p.n = e => {
          var t = e && e.__esModule ? () => e.default : () => e;
          return p.d(t, {
            a: t
          }), t
        }, c = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, p.t = function(t, a) {
          if (1 & a && (t = this(t)), 8 & a) return t;
          if ("object" == typeof t && t) {
            if (4 & a && t.__esModule) return t;
            if (16 & a && "function" == typeof t.then) return t
          }
          var r = Object.create(null);
          p.r(r);
          var o = {};
          e = e || [null, c({}), c([]), c(c)];
          for (var n = 2 & a && t;
            "object" == typeof n && !~e.indexOf(n); n = c(n)) Object.getOwnPropertyNames(n).forEach((e => o[e] = () => t[e]));
          return o.default = () => t, p.d(r, o), r
        }, p.d = (e, t) => {
          for (var a in t) p.o(t, a) && !p.o(e, a) && Object.defineProperty(e, a, {
            enumerable: !0,
            get: t[a]
          })
        }, p.f = {}, p.e = e => Promise.all(Object.keys(p.f).reduce(((t, a) => (p.f[a](e, t), t)), [])), p.u = e => "js/" + {
          300: "c179a0901042871f803c8bc6a21f80b3",
          581: "08b3489d0268571641a8b85a8594f8ba",
          588: "076658ffeec7cfee072fcf342918f047",
          881: "ec7083473cc8b09e3f5df83dbe503562",
          973: "6c8d194e4bcd9153ee1c75723ee6dcce",
          1171: "ccc9c21c5be2a9e6016664470c0e577a",
          1403: "d02e561c7f49a6feaf6e0e5fcabcb363",
          1622: "3de81d263dfef5b392acec1a47dd853c",
          1689: "ef71005de40ad0c651ab55103aeca4eb",
          1774: "ac1ec2e904d5ce333b0222ab1942b996",
          2052: "191877c480e37db25552c994549e086e",
          2808: "f40b41bc3e6733014ef07b37eafbeb3f",
          2846: "296ef7f95db390198c341a109f5cc9f5",
          2861: "1261baab7bf24c9e06114e39153891b5",
          2862: "4b051c88081c707c756e4ed1faf8bd00",
          2939: "96d9f8174e8213b9726641a08bb3c493",
          3165: "e3565fcafaec96f6c3b36bf9c386ffd4",
          3354: "93eb78b1b458ba038367e8b2a4a9a2aa",
          3380: "278d835835f558470597ec489a989053",
          3431: "20a786b719aed2f002b4a2a6933a875c",
          3464: "de61188f813f9ee7e0812408e2324d32",
          3666: "baf964a8ffe08779f13c6307179b730d",
          4105: "b4537e16e49312b24bb7d8bc33308308",
          4143: "005cb47e7517a8d2f158a0c2e6723512",
          4433: "37e9ee4ef9efe6da00e1c5f3e7e9f6d8",
          4969: "2fbc9a1cc71c9afc9fd78de03ed912cf",
          6008: "19bbf72dc33457f417c98b164a2c0e9d",
          6105: "3f7c8d45c35cba1d110aafed86508d83",
          6131: "16d40aeef8621dbd585e785bb2a3a792",
          6177: "eb2ec5e312625b4cb3e41ea584d98fb3",
          6524: "8a6e0568cdd7c0902b79151bc9427728",
          6747: "82da41107bc07fcd6f0a0d967248ba04",
          6808: "b14ffddc654f09f7dadd207ec1b2d624",
          6996: "1179dc0aa42912900d17724edde919ff",
          7004: "2e186807c69edef4f9904e86a743b332",
          7123: "2f32847939b90dc6ade41d9639832e6d",
          7533: "07ad623ea623239bfac8f886194a2f57",
          7588: "b54ad6d0f5445b5bfa5f577ec751cb79",
          7781: "76898993a42e3be0e919381891780def",
          7819: "252546c6e1fd96dc80973d771c40bfd9",
          7919: "bb22e2a0fcde9c6162e1fd856a57d680",
          7977: "f31abe2e29e997025bd1d7f899bd12df",
          8066: "cd3b0a597ffff03b623237084f5619ab",
          8179: "6c24607bcad3d77f31b3eea188f34ed1",
          8290: "c4dd2cf3cc7489950972e05af693fd19",
          8314: "4fbedcc7f30c925038e69085d3ce7b96",
          8486: "c5706633f209b31f58ed0655300d5e70",
          8512: "a0b4780bedc265ec533fc4602fd9c239",
          8626: "0d605118df647226c6122cded0b2edf6",
          9377: "2be3ba038bfe4b70e094eefa2a09d791",
          9516: "8b135237b2bcaea781c9e0b758b1baa0",
          9852: "bf356687f44e9c61d221835efc918fc5",
          9853: "cba12b9a5935f8ff9eafe1b2635f6f7f"
        } [e] + ".js", p.miniCssF = e => "css/" + {
          2846: "32af9d0c26e64e23edfa1eb3071ff9c6",
          2861: "916e74d8d50f64d8f556da06d20283dd",
          2862: "854e00a357d948027baaa513629be0c3",
          3666: "21fcd4d1748f2f2b263c58596f93343b",
          4433: "b07f327cbe7e2679a4d5423b745ed168",
          4969: "916e74d8d50f64d8f556da06d20283dd",
          7004: "ec375cd8457f99785b185813b04990cd",
          9377: "2b35314f2a2d77a8a199e02d5cb9bad0"
        } [e] + ".css", p.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), p.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), s = {}, i = "@rockstargames/sites-legacy:", p.l = (e, t, a, r) => {
          if (s[e]) s[e].push(t);
          else {
            var o, n;
            if (void 0 !== a)
              for (var d = document.getElementsByTagName("script"), f = 0; f < d.length; f++) {
                var c = d[f];
                if (c.getAttribute("src") == e || c.getAttribute("data-webpack") == i + a) {
                  o = c;
                  break
                }
              }
            o || (n = !0, (o = document.createElement("script")).charset = "utf-8", o.timeout = 120, p.nc && o.setAttribute("nonce", p.nc), o.setAttribute("data-webpack", i + a), o.src = e), s[e] = [t];
            var l = (t, a) => {
                o.onerror = o.onload = null, clearTimeout(u);
                var r = s[e];
                if (delete s[e], o.parentNode && o.parentNode.removeChild(o), r && r.forEach((e => e(a))), t) return t(a)
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
            var a = p.R;
            a || (a = []);
            var r = u[e];
            if (!(a.indexOf(r) >= 0)) {
              if (a.push(r), r.p) return t.push(r.p);
              var o = t => {
                  t || (t = new Error("Container missing")), "string" == typeof t.message && (t.message += '\nwhile loading "' + r[1] + '" from ' + r[2]), p.m[e] = () => {
                    throw t
                  }, r.p = 0
                },
                n = (e, a, n, d, f, c) => {
                  try {
                    var s = e(a, n);
                    if (!s || !s.then) return f(s, d, c);
                    var i = s.then((e => f(e, d)), o);
                    if (!c) return i;
                    t.push(r.p = i)
                  } catch (e) {
                    o(e)
                  }
                },
                d = (e, t, o) => n(t.get, r[1], a, 0, f, o),
                f = t => {
                  r.p = 1, p.m[e] = e => {
                    e.exports = t()
                  }
                };
              n(p, r[2], 0, 0, ((e, t, a) => e ? n(p.I, r[0], 0, e, d, a) : o()), 1)
            }
          }))
        }, (() => {
          p.S = {};
          var e = {},
            t = {};
          p.I = (a, r) => {
            r || (r = []);
            var o = t[a];
            if (o || (o = t[a] = {}), !(r.indexOf(o) >= 0)) {
              if (r.push(o), e[a]) return e[a];
              p.o(p.S, a) || (p.S[a] = {});
              var n = p.S[a],
                d = "@rockstargames/sites-legacy",
                f = (e, t, a, r) => {
                  var o = n[e] = n[e] || {},
                    f = o[t];
                  (!f || !f.loaded && (!r != !f.eager ? r : d > f.from)) && (o[t] = {
                    get: a,
                    from: d,
                    eager: !!r
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
                    var n = e => e && e.init && e.init(p.S[a], r);
                    if (o.then) return s.push(o.then(n, t));
                    var d = n(o);
                    if (d && d.then) return s.push(d.catch(t))
                  } catch (e) {
                    t(e)
                  }
                },
                s = [];
              return "default" === a && (f("@rockstargames/locale-tools", "1.0.0", (() => Promise.all([p.e(8066), p.e(1403), p.e(4143)]).then((() => () => p(24143))))), f("@rockstargames/modules-core-hero", "0.1.2", (() => Promise.all([p.e(1403), p.e(6747), p.e(8626), p.e(581), p.e(2862)]).then((() => () => p(86240))))), f("@rockstargames/modules-core-highlights", "0.0.2", (() => Promise.all([p.e(3165), p.e(1403), p.e(6747), p.e(4433), p.e(6131)]).then((() => () => p(76131))))), f("focus-trap-react", "10.2.3", (() => Promise.all([p.e(7588), p.e(1403), p.e(9516)]).then((() => () => p(57588))))), f("framer-motion", "10.16.4", (() => Promise.all([p.e(588), p.e(1403)]).then((() => () => p(70588))))), f("framer-motion", "10.16.4", (() => Promise.all([p.e(6177), p.e(1403)]).then((() => () => p(96177))))), f("framer-motion", "7.10.3", (() => Promise.all([p.e(1689), p.e(2052), p.e(1403)]).then((() => () => p(72052))))), f("framer-motion", "7.10.3", (() => Promise.all([p.e(1689), p.e(1774), p.e(1403)]).then((() => () => p(51774))))), f("prop-types", "15.8.1", (() => p.e(7977).then((() => () => p(37977))))), f("react-dom", "18.2.0", (() => Promise.all([p.e(7533), p.e(1403)]).then((() => () => p(47533))))), f("react-intersection-observer", "9.10.3", (() => Promise.all([p.e(1403), p.e(6105)]).then((() => () => p(66105))))), f("react-intersection-observer", "9.10.3", (() => Promise.all([p.e(1403), p.e(3354)]).then((() => () => p(83354))))), f("react-intersection-observer", "9.10.3", (() => Promise.all([p.e(1403), p.e(300)]).then((() => () => p(300))))), f("react-router-dom", "6.17.0", (() => Promise.all([p.e(4105), p.e(6008), p.e(1403)]).then((() => () => p(76008))))), f("react-router-dom", "6.17.0", (() => Promise.all([p.e(4105), p.e(1171), p.e(1403)]).then((() => () => p(31171))))), f("react", "18.2.0", (() => p.e(3380).then((() => () => p(23380))))), c(60404), c(99466), c(92969), c(61024), c(49787), c(25136)), s.length ? e[a] = Promise.all(s).then((() => e[a] = 1)) : e[a] = 1
            }
          }
        })(), (() => {
          var e;
          p.g.importScripts && (e = p.g.location + "");
          var t = p.g.document;
          if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
            var a = t.getElementsByTagName("script");
            if (a.length)
              for (var r = a.length - 1; r > -1 && (!e || !/^http(s?):/.test(e));) e = a[r--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), p.p = e
        })(), (() => {
          var e = e => {
              var t = e => e.split(".").map((e => +e == e ? +e : e)),
                a = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
                r = a[1] ? t(a[1]) : [];
              return a[2] && (r.length++, r.push.apply(r, t(a[2]))), a[3] && (r.push([]), r.push.apply(r, t(a[3]))), r
            },
            t = (a, r) => {
              if (0 in a) {
                r = e(r);
                var o = a[0],
                  n = o < 0;
                n && (o = -o - 1);
                for (var d = 0, f = 1, c = !0;; f++, d++) {
                  var s, i, l = f < a.length ? (typeof a[f])[0] : "";
                  if (d >= r.length || "o" == (i = (typeof(s = r[d]))[0])) return !c || ("u" == l ? f > o && !n : "" == l != n);
                  if ("u" == i) {
                    if (!c || "u" != l) return !1
                  } else if (c)
                    if (l == i)
                      if (f <= o) {
                        if (s != a[f]) return !1
                      } else {
                        if (n ? s > a[f] : s < a[f]) return !1;
                        s != a[f] && (c = !1)
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
              for (d = 1; d < a.length; d++) {
                var h = a[d];
                u.push(1 == h ? b() | b() : 2 == h ? b() & b() : h ? t(h, r) : !b())
              }
              return !!b()
            },
            a = (a, r, o) => {
              var n = a[r];
              return (r = Object.keys(n).reduce(((a, r) => !t(o, r) || a && !((t, a) => {
                t = e(t), a = e(a);
                for (var r = 0;;) {
                  if (r >= t.length) return r < a.length && "u" != (typeof a[r])[0];
                  var o = t[r],
                    n = (typeof o)[0];
                  if (r >= a.length) return "u" == n;
                  var d = a[r],
                    f = (typeof d)[0];
                  if (n != f) return "o" == n && "n" == f || "s" == f || "u" == n;
                  if ("o" != n && "u" != n && o != d) return o < d;
                  r++
                }
              })(a, r) ? a : r), 0)) && n[r]
            },
            r = (e => function(t, a, r, o) {
              var n = p.I(t);
              return n && n.then ? n.then(e.bind(e, t, p.S[t], a, r, o)) : e(t, p.S[t], a, r, o)
            })(((e, t, r, o, n) => {
              var d = t && p.o(t, r) && a(t, r, o);
              return d ? (e => (e.loaded = 1, e.get()))(d) : n()
            })),
            o = {},
            n = {
              71403: () => r("default", "react", [1, 18, 2, 0], (() => p.e(3380).then((() => () => p(23380))))),
              96717: () => r("default", "@rockstargames/locale-tools", [1, "workspace:*"], (() => Promise.all([p.e(8066), p.e(6524)]).then((() => () => p(24143))))),
              89779: () => r("default", "react-router-dom", [1, 6, 11, 2], (() => Promise.all([p.e(4105), p.e(6008)]).then((() => () => p(76008))))),
              39516: () => r("default", "prop-types", [1, 15, 8, 1], (() => p.e(7977).then((() => () => p(37977))))),
              7117: () => r("default", "focus-trap-react", [1, 10, 2, 3], (() => p.e(7588).then((() => () => p(57588))))),
              13953: () => r("default", "framer-motion", [1, 10, 12, 18], (() => p.e(6177).then((() => () => p(96177))))),
              17891: () => r("default", "@rockstargames/modules-core-highlights", [1, "workspace:*"], (() => Promise.all([p.e(4433), p.e(8512)]).then((() => () => p(76131))))),
              25076: () => r("default", "react-router-dom", [1, 6, 11, 2], (() => Promise.all([p.e(4105), p.e(1171)]).then((() => () => p(31171))))),
              49948: () => r("default", "react-intersection-observer", [1, 9, 10, 3], (() => p.e(7919).then((() => () => p(300))))),
              66335: () => r("default", "@rockstargames/modules-core-hero", [1, "workspace:*"], (() => p.e(7004).then((() => () => p(86240))))),
              70834: () => r("default", "react-intersection-observer", [1, 9, 10, 3], (() => p.e(973).then((() => () => p(83354))))),
              79493: () => r("default", "react-dom", [1, 18, 2, 0], (() => p.e(7533).then((() => () => p(47533))))),
              80791: () => r("default", "framer-motion", [1, 10, 12, 18], (() => p.e(1774).then((() => () => p(51774))))),
              40581: () => r("default", "framer-motion", [1, 10, 12, 18], (() => Promise.all([p.e(1689), p.e(2052)]).then((() => () => p(72052))))),
              174: () => r("default", "framer-motion", [1, 10, 12, 18], (() => p.e(588).then((() => () => p(70588))))),
              59217: () => r("default", "react-intersection-observer", [1, 9, 10, 3], (() => p.e(8486).then((() => () => p(66105)))))
            },
            d = {
              581: [40581],
              1403: [71403],
              3666: [7117, 13953, 17891, 25076, 49948, 66335, 70834, 79493, 80791],
              4433: [174, 59217],
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
                var a = t => {
                  o[e] = 0, p.m[e] = a => {
                    delete p.c[e], a.exports = t()
                  }
                };
                f[e] = !0;
                var r = t => {
                  delete o[e], p.m[e] = a => {
                    throw delete p.c[e], t
                  }
                };
                try {
                  var d = n[e]();
                  d.then ? t.push(o[e] = d.then(a).catch(r)) : a(d)
                } catch (e) {
                  r(e)
                }
              }
            }))
          }
        })(), (() => {
          if ("undefined" != typeof document) {
            var e = {
              8106: 0
            };
            p.f.miniCss = (t, a) => {
              e[t] ? a.push(e[t]) : 0 !== e[t] && {
                2846: 1,
                2861: 1,
                2862: 1,
                3666: 1,
                4433: 1,
                4969: 1,
                7004: 1,
                9377: 1
              } [t] && a.push(e[t] = (e => new Promise(((t, a) => {
                var r = p.miniCssF(e),
                  o = p.p + r;
                if (((e, t) => {
                    for (var a = document.getElementsByTagName("link"), r = 0; r < a.length; r++) {
                      var o = (d = a[r]).getAttribute("data-href") || d.getAttribute("href");
                      if ("stylesheet" === d.rel && (o === e || o === t)) return d
                    }
                    var n = document.getElementsByTagName("style");
                    for (r = 0; r < n.length; r++) {
                      var d;
                      if ((o = (d = n[r]).getAttribute("data-href")) === e || o === t) return d
                    }
                  })(r, o)) return t();
                ((e, t, a, r, o) => {
                  var n = document.createElement("link");
                  n.rel = "stylesheet", n.type = "text/css", n.onerror = n.onload = a => {
                    if (n.onerror = n.onload = null, "load" === a.type) r();
                    else {
                      var d = a && ("load" === a.type ? "missing" : a.type),
                        f = a && a.target && a.target.href || t,
                        c = new Error("Loading CSS chunk " + e + " failed.\n(" + f + ")");
                      c.code = "CSS_CHUNK_LOAD_FAILED", c.type = d, c.request = f, n.parentNode && n.parentNode.removeChild(n), o(c)
                    }
                  }, n.href = t, document.head.appendChild(n)
                })(e, o, 0, t, a)
              })))(t).then((() => {
                e[t] = 0
              }), (a => {
                throw delete e[t], a
              })))
            }
          }
        })(), (() => {
          var e = {
            8106: 0
          };
          p.f.j = (t, a) => {
            var r = p.o(e, t) ? e[t] : void 0;
            if (0 !== r)
              if (r) a.push(r[2]);
              else if (/^(1403|4433|581|6747|9516)$/.test(t)) e[t] = 0;
            else {
              var o = new Promise(((a, o) => r = e[t] = [a, o]));
              a.push(r[2] = o);
              var n = p.p + p.u(t),
                d = new Error;
              p.l(n, (a => {
                if (p.o(e, t) && (0 !== (r = e[t]) && (e[t] = void 0), r)) {
                  var o = a && ("load" === a.type ? "missing" : a.type),
                    n = a && a.target && a.target.src;
                  d.message = "Loading chunk " + t + " failed.\n(" + o + ": " + n + ")", d.name = "ChunkLoadError", d.type = o, d.request = n, r[1](d)
                }
              }), "chunk-" + t, t)
            }
          };
          var t = (t, a) => {
              var r, o, n = a[0],
                d = a[1],
                f = a[2],
                c = 0;
              if (n.some((t => 0 !== e[t]))) {
                for (r in d) p.o(d, r) && (p.m[r] = d[r]);
                f && f(p)
              }
              for (t && t(a); c < n.length; c++) o = n[c], p.o(e, o) && e[o] && e[o][0](), e[o] = 0
            },
            a = self.webpackChunk_rockstargames_sites_legacy = self.webpackChunk_rockstargames_sites_legacy || [];
          a.forEach(t.bind(null, 0)), a.push = t.bind(null, a.push.bind(a))
        })(), p.nc = void 0, p(32160), p(29501)
      })())
    }
  }
}));