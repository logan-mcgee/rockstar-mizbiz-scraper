! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "7d5a3819-80aa-423a-be2f-ba208fb01ec4", e._sentryDebugIdIdentifier = "sentry-dbid-7d5a3819-80aa-423a-be2f-ba208fb01ec4")
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
    f = {},
    d = {};
  return Object.defineProperty(r, "__esModule", {
    value: !0
  }), Object.defineProperty(a, "__esModule", {
    value: !0
  }), Object.defineProperty(o, "__esModule", {
    value: !0
  }), Object.defineProperty(n, "__esModule", {
    value: !0
  }), Object.defineProperty(f, "__esModule", {
    value: !0
  }), Object.defineProperty(d, "__esModule", {
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
        f[t] = e[t]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(t) {
        d[t] = e[t]
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
                var f = a.slice(0, n + 1);
                return r.protocol + "//" + r.host + f
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
              e.exports = f
            },
            92969: e => {
              "use strict";
              e.exports = d
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
          300: "4c05baf15b194d237b203f74681c41b3",
          581: "08b3489d0268571641a8b85a8594f8ba",
          588: "71aab6d39fe4292a56d4ef6c25c3b75b",
          881: "34fee435a905914b4aeca58bea9fbb1f",
          973: "b71096e6c550a0b46e526af34b25c32e",
          1171: "f45c7eddf52096d5dca76b3c0150858a",
          1403: "d02e561c7f49a6feaf6e0e5fcabcb363",
          1622: "bc3fcc0803081d0e74eb99a0975d7f07",
          1689: "08a40385f2b4921a49bcdd6de1f2e014",
          1774: "4e83bd4d53d53374aa948d2840d02061",
          2052: "5df0df65f8aebeaacbdc8ff9c617f26d",
          2808: "f018444856f56d1f0e1f0c380442c7b7",
          2846: "c518b482b10940656bd8bfb43a6bd4e3",
          2861: "1dff769e015807897f7cc6bfcd570ffd",
          2939: "c7df5e55e51993d1456cb732c7450a16",
          3165: "4962ace56f3f3cf37faee4c0ee17b111",
          3354: "b7f7111faac90eac2d069582d7b2ed97",
          3380: "d0004b6c460b2c5b1287835dbc1b43dd",
          3431: "e8f3a2100923904106937a28e7903f42",
          3464: "c35d55e55aeeecb49c79e13fba3ddc62",
          3666: "07e8d0fa035da0a491f9aae04522b207",
          4105: "f3ff057183e9a13bd216e83852bf2c2c",
          4143: "48efcc461097f950121b84f828b9933f",
          4433: "37e9ee4ef9efe6da00e1c5f3e7e9f6d8",
          4969: "0f23fcbb00f44acb363078e10715e562",
          6008: "7c79f4d893a7cdd89035a6289253f410",
          6105: "796313a907464e5e9f6b974f9dfdf6b1",
          6131: "6a5f8df20d486d3be20a7261a55452ae",
          6177: "2892f682fa7897f7020c5b25151df710",
          6524: "ad9c306e25174dbf3edb259d528cd159",
          6747: "82da41107bc07fcd6f0a0d967248ba04",
          6808: "644a70d50c12b287b4cba11011d6ddd0",
          6996: "1a16d2a86cec5dd1bafdbda7ca497a76",
          7123: "33e22f4a67d6a676c711415207e4e200",
          7533: "04b8746730b12ee0c10b8c4e61d331e4",
          7588: "d2194ccb8a92885b3855da679340ec5a",
          7781: "0839943c9d552e0adb849cada46539f7",
          7819: "6f0a6bb431757cd47bcc0d6664408166",
          7919: "215bb55f6847acb97ef9c59c9d0c6346",
          7977: "6915773da74f33354a23795bf1aab2d8",
          8066: "55363e4f444c849210e57e16b990d5d7",
          8179: "3956c4f249ec6e61a73678ea01b85adf",
          8290: "311b8af1ac908c2e54d9ecdcbf3d9c35",
          8314: "ea6d5fb9a1df41ae7f8f9c4052325a09",
          8486: "3149bc97e0aca31a702b84a7dd89afc4",
          8512: "1f970b838643410bd251e1641f3aa88b",
          8626: "151015e4123e32b677d9604fc659d6f3",
          9259: "42ead8efe8014c28c002e850a7efdd96",
          9377: "ef1ee931111e820350a534a1c67b5381",
          9516: "8b135237b2bcaea781c9e0b758b1baa0",
          9695: "fc0255d872645a35744876a44f1ed92b",
          9852: "5cdbac251c3a07c19d910d1eeec31e54",
          9853: "40ce60d000f205b858aecfd3076857e8"
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
              for (var f = document.getElementsByTagName("script"), d = 0; d < f.length; d++) {
                var c = f[d];
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
                n = (e, r, n, f, d, c) => {
                  try {
                    var s = e(r, n);
                    if (!s || !s.then) return d(s, f, c);
                    var i = s.then((e => d(e, f)), o);
                    if (!c) return i;
                    t.push(a.p = i)
                  } catch (e) {
                    o(e)
                  }
                },
                f = (e, t, o) => n(t.get, a[1], r, 0, d, o),
                d = t => {
                  a.p = 1, p.m[e] = e => {
                    e.exports = t()
                  }
                };
              n(p, a[2], 0, 0, ((e, t, r) => e ? n(p.I, a[0], 0, e, f, r) : o()), 1)
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
                f = "@rockstargames/sites-legacy",
                d = (e, t, r, a) => {
                  var o = n[e] = n[e] || {},
                    d = o[t];
                  (!d || !d.loaded && (!a != !d.eager ? a : f > d.from)) && (o[t] = {
                    get: r,
                    from: f,
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
                    var f = n(o);
                    if (f && f.then) return s.push(f.catch(t))
                  } catch (e) {
                    t(e)
                  }
                },
                s = [];
              return "default" === r && (d("@rockstargames/locale-tools", "1.0.0", (() => Promise.all([p.e(8066), p.e(1403), p.e(4143)]).then((() => () => p(24143))))), d("@rockstargames/modules-core-hero", "0.1.2", (() => Promise.all([p.e(1403), p.e(6747), p.e(8626), p.e(581), p.e(9695)]).then((() => () => p(25155))))), d("@rockstargames/modules-core-highlights", "0.0.2", (() => Promise.all([p.e(3165), p.e(1403), p.e(6747), p.e(4433), p.e(6131)]).then((() => () => p(76131))))), d("focus-trap-react", "10.2.3", (() => Promise.all([p.e(7588), p.e(1403), p.e(9516)]).then((() => () => p(57588))))), d("framer-motion", "10.16.4", (() => Promise.all([p.e(588), p.e(1403)]).then((() => () => p(70588))))), d("framer-motion", "10.16.4", (() => Promise.all([p.e(6177), p.e(1403)]).then((() => () => p(96177))))), d("framer-motion", "7.10.3", (() => Promise.all([p.e(1689), p.e(2052), p.e(1403)]).then((() => () => p(72052))))), d("framer-motion", "7.10.3", (() => Promise.all([p.e(1689), p.e(1774), p.e(1403)]).then((() => () => p(51774))))), d("prop-types", "15.8.1", (() => p.e(7977).then((() => () => p(37977))))), d("react-dom", "18.2.0", (() => Promise.all([p.e(7533), p.e(1403)]).then((() => () => p(47533))))), d("react-intersection-observer", "9.10.3", (() => Promise.all([p.e(1403), p.e(6105)]).then((() => () => p(66105))))), d("react-intersection-observer", "9.10.3", (() => Promise.all([p.e(1403), p.e(3354)]).then((() => () => p(83354))))), d("react-intersection-observer", "9.10.3", (() => Promise.all([p.e(1403), p.e(300)]).then((() => () => p(300))))), d("react-router-dom", "6.17.0", (() => Promise.all([p.e(4105), p.e(6008), p.e(1403)]).then((() => () => p(76008))))), d("react-router-dom", "6.17.0", (() => Promise.all([p.e(4105), p.e(1171), p.e(1403)]).then((() => () => p(31171))))), d("react", "18.2.0", (() => p.e(3380).then((() => () => p(23380))))), c(60404), c(99466), c(92969), c(61024), c(49787), c(25136)), s.length ? e[r] = Promise.all(s).then((() => e[r] = 1)) : e[r] = 1
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
                for (var f = 0, d = 1, c = !0;; d++, f++) {
                  var s, i, l = d < r.length ? (typeof r[d])[0] : "";
                  if (f >= a.length || "o" == (i = (typeof(s = a[f]))[0])) return !c || ("u" == l ? d > o && !n : "" == l != n);
                  if ("u" == i) {
                    if (!c || "u" != l) return !1
                  } else if (c)
                    if (l == i)
                      if (d <= o) {
                        if (s != r[d]) return !1
                      } else {
                        if (n ? s > r[d] : s < r[d]) return !1;
                        s != r[d] && (c = !1)
                      }
                  else if ("s" != l && "n" != l) {
                    if (n || d <= o) return !1;
                    c = !1, d--
                  } else {
                    if (d <= o || i < l != n) return !1;
                    c = !1
                  } else "s" != l && "n" != l && (c = !1, d--)
                }
              }
              var u = [],
                b = u.pop.bind(u);
              for (f = 1; f < r.length; f++) {
                var h = r[f];
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
                  var f = r[a],
                    d = (typeof f)[0];
                  if (n != d) return "o" == n && "n" == d || "s" == d || "u" == n;
                  if ("o" != n && "u" != n && o != f) return o < f;
                  a++
                }
              })(r, a) ? r : a), 0)) && n[a]
            },
            a = (e => function(t, r, a, o) {
              var n = p.I(t);
              return n && n.then ? n.then(e.bind(e, t, p.S[t], r, a, o)) : e(t, p.S[t], r, a, o)
            })(((e, t, a, o, n) => {
              var f = t && p.o(t, a) && r(t, a, o);
              return f ? (e => (e.loaded = 1, e.get()))(f) : n()
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
            f = {
              581: [40581],
              1403: [71403],
              3666: [7117, 13953, 17891, 25076, 49948, 66335, 70834, 79493, 80791],
              4433: [174, 59217],
              6747: [96717],
              8626: [89779],
              9259: [40581],
              9516: [39516]
            },
            d = {};
          p.f.consumes = (e, t) => {
            p.o(f, e) && f[e].forEach((e => {
              if (p.o(o, e)) return t.push(o[e]);
              if (!d[e]) {
                var r = t => {
                  o[e] = 0, p.m[e] = r => {
                    delete p.c[e], r.exports = t()
                  }
                };
                d[e] = !0;
                var a = t => {
                  delete o[e], p.m[e] = r => {
                    throw delete p.c[e], t
                  }
                };
                try {
                  var f = n[e]();
                  f.then ? t.push(o[e] = f.then(r).catch(a)) : r(f)
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
                      var o = (f = r[a]).getAttribute("data-href") || f.getAttribute("href");
                      if ("stylesheet" === f.rel && (o === e || o === t)) return f
                    }
                    var n = document.getElementsByTagName("style");
                    for (a = 0; a < n.length; a++) {
                      var f;
                      if ((o = (f = n[a]).getAttribute("data-href")) === e || o === t) return f
                    }
                  })(a, o)) return t();
                ((e, t, r, a, o) => {
                  var n = document.createElement("link");
                  n.rel = "stylesheet", n.type = "text/css", n.onerror = n.onload = r => {
                    if (n.onerror = n.onload = null, "load" === r.type) a();
                    else {
                      var f = r && ("load" === r.type ? "missing" : r.type),
                        d = r && r.target && r.target.href || t,
                        c = new Error("Loading CSS chunk " + e + " failed.\n(" + d + ")");
                      c.code = "CSS_CHUNK_LOAD_FAILED", c.type = f, c.request = d, n.parentNode && n.parentNode.removeChild(n), o(c)
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
                f = new Error;
              p.l(n, (r => {
                if (p.o(e, t) && (0 !== (a = e[t]) && (e[t] = void 0), a)) {
                  var o = r && ("load" === r.type ? "missing" : r.type),
                    n = r && r.target && r.target.src;
                  f.message = "Loading chunk " + t + " failed.\n(" + o + ": " + n + ")", f.name = "ChunkLoadError", f.type = o, f.request = n, a[1](f)
                }
              }), "chunk-" + t, t)
            }
          };
          var t = (t, r) => {
              var a, o, n = r[0],
                f = r[1],
                d = r[2],
                c = 0;
              if (n.some((t => 0 !== e[t]))) {
                for (a in f) p.o(f, a) && (p.m[a] = f[a]);
                d && d(p)
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