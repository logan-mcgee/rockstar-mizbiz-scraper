! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "237d2c85-707a-4199-a9c6-2c698275f447", e._sentryDebugIdIdentifier = "sentry-dbid-237d2c85-707a-4199-a9c6-2c698275f447")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-red-dead-online",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register(["@rockstargames/modules-core-videoplayer", "@rockstargames/modules-core-newswire-article"], (function(e, a) {
  var t = {},
    r = {};
  return Object.defineProperty(t, "__esModule", {
    value: !0
  }), Object.defineProperty(r, "__esModule", {
    value: !0
  }), {
    setters: [function(e) {
      Object.keys(e).forEach((function(a) {
        t[a] = e[a]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(a) {
        r[a] = e[a]
      }))
    }],
    execute: function() {
      e((() => {
        var e, d, f, c, n, o, b = {
            24075: (e, a, t) => {
              (0, t(47387).w)(1)
            },
            47387: (e, a, t) => {
              const r = t(13099).y;
              a.w = function(e) {
                if (e || (e = 1), !t.y.meta || !t.y.meta.url) throw console.error("__system_context__", t.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                t.p = r(t.y.meta.url, e)
              }
            },
            45408: (e, a, t) => {
              t(24075)
            },
            13099: (e, a, t) => {
              a.y = function(e, a) {
                var t = document.createElement("a");
                t.href = e;
                for (var r = "/" === t.pathname[0] ? t.pathname : "/" + t.pathname, d = 0, f = r.length; d !== a && f >= 0;) "/" === r[--f] && d++;
                if (d !== a) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + a + ") is greater than the number of directories (" + d + ") in the URL path " + e);
                var c = r.slice(0, f + 1);
                return t.protocol + "//" + t.host + c
              };
              Number.isInteger
            },
            82021: (e, a, t) => {
              "use strict";
              var r = {
                  "./index": () => Promise.all([t.e(8481), t.e(3681), t.e(6102), t.e(2229), t.e(6682), t.e(1179), t.e(7145), t.e(8155)]).then((() => () => t(38155)))
                },
                d = (e, a) => (t.R = a, a = t.o(r, e) ? r[e]() : Promise.resolve().then((() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                })), t.R = void 0, a),
                f = (e, a) => {
                  if (t.S) {
                    var r = "default",
                      d = t.S[r];
                    if (d && d !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return t.S[r] = e, t.I(r, a)
                  }
                };
              t.d(a, {
                get: () => d,
                init: () => f
              })
            },
            66819: e => {
              "use strict";
              e.exports = r
            },
            25136: e => {
              "use strict";
              e.exports = t
            }
          },
          i = {};

        function s(e) {
          var a = i[e];
          if (void 0 !== a) return a.exports;
          var t = i[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return b[e].call(t.exports, t, t.exports, s), t.loaded = !0, t.exports
        }
        return s.m = b, s.c = i, s.y = a, s.amdO = {}, s.n = e => {
          var a = e && e.__esModule ? () => e.default : () => e;
          return s.d(a, {
            a
          }), a
        }, d = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, s.t = function(a, t) {
          if (1 & t && (a = this(a)), 8 & t) return a;
          if ("object" == typeof a && a) {
            if (4 & t && a.__esModule) return a;
            if (16 & t && "function" == typeof a.then) return a
          }
          var r = Object.create(null);
          s.r(r);
          var f = {};
          e = e || [null, d({}), d([]), d(d)];
          for (var c = 2 & t && a;
            "object" == typeof c && !~e.indexOf(c); c = d(c)) Object.getOwnPropertyNames(c).forEach((e => f[e] = () => a[e]));
          return f.default = () => a, s.d(r, f), r
        }, s.d = (e, a) => {
          for (var t in a) s.o(a, t) && !s.o(e, t) && Object.defineProperty(e, t, {
            enumerable: !0,
            get: a[t]
          })
        }, s.f = {}, s.e = e => Promise.all(Object.keys(s.f).reduce(((a, t) => (s.f[t](e, a), a)), [])), s.u = e => "js/" + {
          131: "bafc757c54bba47f81fd0e0512450068",
          278: "25d4701b4f3c3a831dfe74f37520b200",
          299: "507c4f52970006dc14d18360986fc59b",
          314: "609df799b28d0de43e424d2894f64111",
          662: "f40453f3c4871c4cb0943b50b41d1aee",
          721: "83b95d3a083f598a7083ce102ca11cdb",
          824: "ee9620327cf0bb0e0072a27c1bb26475",
          907: "3a60bc038f48435051a39eeaa4f2d289",
          920: "b80ca776945acd2fbbaa82efa0f6b683",
          1054: "fc1e9098faaf6ae5f2c56ddb613d9883",
          1179: "d28a0a923f52f9094631afe6340c369a",
          1242: "30c75410d2c88218cd87db5b77facb45",
          1673: "227c525afa5c79b8233a80f7cb52b4de",
          1822: "601513f4c429eee050c239c0bec3851f",
          1868: "e13c6df1991c6bf1582424aeb023dbe6",
          2024: "cb82f5f1f8462f209d6eb671ad0f7521",
          2156: "719b18b9ec1d3c3d080e8e3c9d995839",
          2171: "9262cbddda4a337381e04c5a70ddf258",
          2221: "62e4c23fdc6be452d49aa83efc87c134",
          2229: "6078f3faa0b6603161b40f1628b60c56",
          2243: "af2580d95d3322130b4116f130c633e7",
          2324: "04f924e0b9275ca2b11c4c3d97a16ea9",
          2347: "3c5b7db07f55dd12edebf70a2fbe3637",
          2365: "1a70a6c163a0706a225dc53732d6cd95",
          2398: "a927028b30aa58c5f15d0cba2b90fd35",
          2466: "6a0f80369a8e6e8f3ff697e90f5435f2",
          2642: "9a00246726181a85d9f45db34967d7ba",
          2678: "02194fc9c710a6470759c23892a6e93d",
          2772: "7b0e999b6aeef44f31ba7ff62cdc020a",
          2817: "d081f3328fa38848eb856ea4dc2e6143",
          2864: "43ae3c72c872fc85bdb2bfe32114a913",
          3034: "476185c03ef478692ac2b0a843b5a04c",
          3197: "d04c838328c25a8acc9bcbc78b96a558",
          3343: "5e041e264e79d45d1f2009b2f6b95efa",
          3370: "b22f4b79b91274deca4c05c784825ae9",
          3447: "47ae76027879d30f93d5f5351a4d7000",
          3475: "24c28b0d5d67b3cf45744b6ca73df92a",
          3486: "c9221c675ed3a081cff0d878b43a4284",
          3681: "a82e387ba940305552a7be8b455f9029",
          3697: "08d8023fb0d1e9929c719980f5769425",
          3885: "7ca3d68cd33c88c36a2b513e5e720183",
          3941: "854d5509632d7895cc6a5971f562f26f",
          4011: "bc0e0671387849bc5ec61cd3ee3decd2",
          4018: "e84dd76e35be5775190f2445058b120f",
          4054: "a2dd92f5fb5c0254ae8c708ff3feb459",
          4528: "a442a03980192ef62b52f8388bf45613",
          4621: "678b7d147c537bfbab6e4a9a1b16a0a7",
          4700: "6f90d812b884dcc1906fc22b5801f73a",
          4710: "fe306da497a6bc82c91625a2e4edfaeb",
          4731: "d154a063f84f902c5af7a16e72145762",
          4781: "8bc9c40d7be3d800616bbbe95c37b6a7",
          4799: "3988195305dbffc1764f0715d014fd73",
          4851: "8b35e84321e31129e4df800ca0db20e8",
          4861: "4c5e9cd776f5a23b41f015e8dbba27ca",
          4913: "653bd66b709476b90a9361d56e5f8857",
          5018: "2fc25f8bfb7a4680c87cc94f7d5e61dc",
          5233: "7fef6435edc7f3e45fdf21fbd8228d79",
          5254: "dcbc46d14ed1c242933abad26e4c9e6e",
          5259: "ef89f6b3158d34fa37c5a4df7b2853f2",
          5530: "a03b32819c9c586645fd8c30b8e2d54b",
          5639: "6d3a63f89cc98f29e0cf1113c5c20f39",
          5663: "852e398f7a31894ba68a53e992590088",
          5742: "beb551e93533204240f7cc62c69d8a51",
          5830: "4d631a141e8b0aae5fc55f9af24d2d40",
          5832: "7a4ad269bc2f89e81b529c37c64430b2",
          6102: "1d55b030d817c2c5bb1f6814dbdc357e",
          6267: "d1344a17f11108545989c323ebfc667e",
          6280: "709a7048af880492018e9dcaa30ea9f9",
          6285: "9fd84b56597073cf64d7e08446b3a485",
          6361: "5e49e766b0065b040a5d4f2292b74fdc",
          6664: "b6e5a2e114c331713fe4d3f65d6fe30c",
          6682: "bb8f474a36cc2848f6466d0a32213423",
          6879: "d5bdb296b46a7f42c5ccd8c0a8fc2a6e",
          6891: "2dd7794f2cab0938bd6709997f487620",
          6997: "c49150c5b89025f961062fea4b2afafb",
          7010: "e4ac6bfce6c99eb1916cf1db03d51bdd",
          7073: "167cc9f24ae608342ae3aded549b5b13",
          7145: "d3cc9515d8197d3602e685ada13fc8e1",
          7436: "5b2a7182e7f1d43eebbae1ac60556ee1",
          7452: "05ef93466b04c435244e102794debd4c",
          7453: "c50d693ade9c4c5c4a5b8e91664f635b",
          7970: "0cf170beb0c1880d00f72561ab0096ed",
          8155: "cfd7b9380b8388533ca13ebc4c79696d",
          8272: "97f71d6ea963f3ace25d21263e3d88e3",
          8391: "7b0e39b6d056e7adcc9051e77442a9c1",
          8481: "9dd638c33942947ca9b35850820ad3c5",
          8755: "7eb6f60b8f0cb690d564f23274dd6891",
          8880: "c992bd774f849b26924457a99d292d3f",
          8970: "d6b50105cef1bd338197f5b34c0cddef",
          9022: "f81b6e0fae48dd2e87f312f60e74b12b",
          9028: "07747a4893e365509ca5775cd6be5200",
          9126: "b3869d824c667c9ec005398111c295b0",
          9323: "1b68873e061d32528d29e262fb2c1ee0",
          9377: "3a5d9ab6e99b304eea23b0ab0fecd29a",
          9615: "e3b03445dff08638d306ababcd338d01",
          9936: "e91792de4df596de79f8c4083abf75ff",
          9943: "851005b5e88e6b6deec889b13b7ec166",
          9990: "b59a7402c252f1c51985c693820c8fef"
        } [e] + ".js", s.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), s.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), f = {}, c = "@rockstargames/sites-red-dead-online:", s.l = (e, a, t, r) => {
          if (f[e]) f[e].push(a);
          else {
            var d, n;
            if (void 0 !== t)
              for (var o = document.getElementsByTagName("script"), b = 0; b < o.length; b++) {
                var i = o[b];
                if (i.getAttribute("src") == e || i.getAttribute("data-webpack") == c + t) {
                  d = i;
                  break
                }
              }
            d || (n = !0, (d = document.createElement("script")).charset = "utf-8", d.timeout = 120, s.nc && d.setAttribute("nonce", s.nc), d.setAttribute("data-webpack", c + t), d.src = e), f[e] = [a];
            var l = (a, t) => {
                d.onerror = d.onload = null, clearTimeout(u);
                var r = f[e];
                if (delete f[e], d.parentNode && d.parentNode.removeChild(d), r && r.forEach((e => e(t))), a) return a(t)
              },
              u = setTimeout(l.bind(null, void 0, {
                type: "timeout",
                target: d
              }), 12e4);
            d.onerror = l.bind(null, d.onerror), d.onload = l.bind(null, d.onload), n && document.head.appendChild(d)
          }
        }, s.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, s.nmd = e => (e.paths = [], e.children || (e.children = []), e), n = {
          8155: [9566, 31879]
        }, o = {
          9566: ["default", "./index", 66819],
          31879: ["default", "./index", 25136]
        }, s.f.remotes = (e, a) => {
          s.o(n, e) && n[e].forEach((e => {
            var t = s.R;
            t || (t = []);
            var r = o[e];
            if (!(t.indexOf(r) >= 0)) {
              if (t.push(r), r.p) return a.push(r.p);
              var d = a => {
                  a || (a = new Error("Container missing")), "string" == typeof a.message && (a.message += '\nwhile loading "' + r[1] + '" from ' + r[2]), s.m[e] = () => {
                    throw a
                  }, r.p = 0
                },
                f = (e, t, f, c, n, o) => {
                  try {
                    var b = e(t, f);
                    if (!b || !b.then) return n(b, c, o);
                    var i = b.then((e => n(e, c)), d);
                    if (!o) return i;
                    a.push(r.p = i)
                  } catch (e) {
                    d(e)
                  }
                },
                c = (e, a, d) => f(a.get, r[1], t, 0, n, d),
                n = a => {
                  r.p = 1, s.m[e] = e => {
                    e.exports = a()
                  }
                };
              f(s, r[2], 0, 0, ((e, a, t) => e ? f(s.I, r[0], 0, e, c, t) : d()), 1)
            }
          }))
        }, (() => {
          s.S = {};
          var e = {},
            a = {};
          s.I = (t, r) => {
            r || (r = []);
            var d = a[t];
            if (d || (d = a[t] = {}), !(r.indexOf(d) >= 0)) {
              if (r.push(d), e[t]) return e[t];
              s.o(s.S, t) || (s.S[t] = {});
              var f = s.S[t],
                c = "@rockstargames/sites-red-dead-online",
                n = (e, a, t, r) => {
                  var d = f[e] = f[e] || {},
                    n = d[a];
                  (!n || !n.loaded && (!r != !n.eager ? r : c > n.from)) && (d[a] = {
                    get: t,
                    from: c,
                    eager: !!r
                  })
                },
                o = e => {
                  var a = e => {
                    return a = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(a));
                    var a
                  };
                  try {
                    var d = s(e);
                    if (!d) return;
                    var f = e => e && e.init && e.init(s.S[t], r);
                    if (d.then) return b.push(d.then(f, a));
                    var c = f(d);
                    if (c && c.then) return b.push(c.catch(a))
                  } catch (e) {
                    a(e)
                  }
                },
                b = [];
              return "default" === t && (n("@rsgweb/locale-tools", "1.0.0", (() => Promise.all([s.e(2024), s.e(2229), s.e(1673)]).then((() => () => s(85950))))), n("@rsgweb/modules-core-feedback", "1.0.0", (() => Promise.all([s.e(8481), s.e(3681), s.e(2229), s.e(6682), s.e(4781), s.e(1179), s.e(2772)]).then((() => () => s(74781))))), n("@rsgweb/utils", "1.0.0", (() => Promise.all([s.e(8481), s.e(2229), s.e(6682)]).then((() => () => s(17560))))), n("date-fns", "4.1.0", (() => s.e(920).then((() => () => s(60920))))), n("hammerjs", "2.0.8", (() => s.e(9323).then((() => () => s(29323))))), n("prop-types", "15.8.1", (() => s.e(2817).then((() => () => s(72817))))), n("react-focus-lock", "2.9.6", (() => Promise.all([s.e(2229), s.e(7145), s.e(9943)]).then((() => () => s(12324))))), n("react-router-dom", "6.17.0", (() => Promise.all([s.e(4018), s.e(2229)]).then((() => () => s(54018))))), n("react", "18.2.0", (() => s.e(3447).then((() => () => s(13447))))), o(66819), o(25136)), b.length ? e[t] = Promise.all(b).then((() => e[t] = 1)) : e[t] = 1
            }
          }
        })(), (() => {
          var e;
          s.g.importScripts && (e = s.g.location + "");
          var a = s.g.document;
          if (!e && a && (a.currentScript && (e = a.currentScript.src), !e)) {
            var t = a.getElementsByTagName("script");
            if (t.length)
              for (var r = t.length - 1; r > -1 && (!e || !/^http(s?):/.test(e));) e = t[r--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), s.p = e
        })(), (() => {
          var e = e => {
              var a = e => e.split(".").map((e => +e == e ? +e : e)),
                t = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
                r = t[1] ? a(t[1]) : [];
              return t[2] && (r.length++, r.push.apply(r, a(t[2]))), t[3] && (r.push([]), r.push.apply(r, a(t[3]))), r
            },
            a = (t, r) => {
              if (0 in t) {
                r = e(r);
                var d = t[0],
                  f = d < 0;
                f && (d = -d - 1);
                for (var c = 0, n = 1, o = !0;; n++, c++) {
                  var b, i, s = n < t.length ? (typeof t[n])[0] : "";
                  if (c >= r.length || "o" == (i = (typeof(b = r[c]))[0])) return !o || ("u" == s ? n > d && !f : "" == s != f);
                  if ("u" == i) {
                    if (!o || "u" != s) return !1
                  } else if (o)
                    if (s == i)
                      if (n <= d) {
                        if (b != t[n]) return !1
                      } else {
                        if (f ? b > t[n] : b < t[n]) return !1;
                        b != t[n] && (o = !1)
                      }
                  else if ("s" != s && "n" != s) {
                    if (f || n <= d) return !1;
                    o = !1, n--
                  } else {
                    if (n <= d || i < s != f) return !1;
                    o = !1
                  } else "s" != s && "n" != s && (o = !1, n--)
                }
              }
              var l = [],
                u = l.pop.bind(l);
              for (c = 1; c < t.length; c++) {
                var p = t[c];
                l.push(1 == p ? u() | u() : 2 == p ? u() & u() : p ? a(p, r) : !u())
              }
              return !!u()
            },
            t = (t, r, d) => {
              var f = t[r];
              return (r = Object.keys(f).reduce(((t, r) => !a(d, r) || t && !((a, t) => {
                a = e(a), t = e(t);
                for (var r = 0;;) {
                  if (r >= a.length) return r < t.length && "u" != (typeof t[r])[0];
                  var d = a[r],
                    f = (typeof d)[0];
                  if (r >= t.length) return "u" == f;
                  var c = t[r],
                    n = (typeof c)[0];
                  if (f != n) return "o" == f && "n" == n || "s" == n || "u" == f;
                  if ("o" != f && "u" != f && d != c) return d < c;
                  r++
                }
              })(t, r) ? t : r), 0)) && f[r]
            },
            r = (e => function(a, t, r, d) {
              var f = s.I(a);
              return f && f.then ? f.then(e.bind(e, a, s.S[a], t, r, d)) : e(a, s.S[a], t, r, d)
            })(((e, a, r, d, f) => {
              var c = a && s.o(a, r) && t(a, r, d);
              return c ? (e => (e.loaded = 1, e.get()))(c) : f()
            })),
            d = {},
            f = {
              62229: () => r("default", "react", [1, 18, 2, 0], (() => s.e(3447).then((() => () => s(13447))))),
              9623: () => r("default", "react-router-dom", [1, 6, 11, 2], (() => s.e(4018).then((() => () => s(54018))))),
              30763: () => r("default", "date-fns", [1, 4, 1, 0], (() => s.e(920).then((() => () => s(60920))))),
              81788: () => r("default", "@rsgweb/locale-tools", [1, "workspace:^"], (() => Promise.all([s.e(2024), s.e(4054)]).then((() => () => s(85950))))),
              95966: () => r("default", "@rsgweb/utils", [1, "workspace:^"], (() => () => s(17560))),
              57145: () => r("default", "prop-types", [1, 15, 8, 1], (() => s.e(2817).then((() => () => s(72817))))),
              994: () => r("default", "@rsgweb/modules-core-feedback", [1, "workspace:^"], (() => s.e(4781).then((() => () => s(74781))))),
              4848: () => r("default", "hammerjs", [1, 2, 0, 8], (() => s.e(9323).then((() => () => s(29323))))),
              95945: () => r("default", "react-focus-lock", [1, 2, 9, 6], (() => s.e(2324).then((() => () => s(12324)))))
            },
            c = {
              1179: [30763, 81788, 95966],
              2229: [62229],
              6682: [9623],
              7145: [57145],
              8155: [994, 4848, 95945]
            },
            n = {};
          s.f.consumes = (e, a) => {
            s.o(c, e) && c[e].forEach((e => {
              if (s.o(d, e)) return a.push(d[e]);
              if (!n[e]) {
                var t = a => {
                  d[e] = 0, s.m[e] = t => {
                    delete s.c[e], t.exports = a()
                  }
                };
                n[e] = !0;
                var r = a => {
                  delete d[e], s.m[e] = t => {
                    throw delete s.c[e], a
                  }
                };
                try {
                  var c = f[e]();
                  c.then ? a.push(d[e] = c.then(t).catch(r)) : t(c)
                } catch (e) {
                  r(e)
                }
              }
            }))
          }
        })(), (() => {
          s.b = document.baseURI || self.location.href;
          var e = {
            129: 0
          };
          s.f.j = (a, t) => {
            var r = s.o(e, a) ? e[a] : void 0;
            if (0 !== r)
              if (r) t.push(r[2]);
              else if (/^(1179|2229|7145)$/.test(a)) e[a] = 0;
            else {
              var d = new Promise(((t, d) => r = e[a] = [t, d]));
              t.push(r[2] = d);
              var f = s.p + s.u(a),
                c = new Error;
              s.l(f, (t => {
                if (s.o(e, a) && (0 !== (r = e[a]) && (e[a] = void 0), r)) {
                  var d = t && ("load" === t.type ? "missing" : t.type),
                    f = t && t.target && t.target.src;
                  c.message = "Loading chunk " + a + " failed.\n(" + d + ": " + f + ")", c.name = "ChunkLoadError", c.type = d, c.request = f, r[1](c)
                }
              }), "chunk-" + a, a)
            }
          };
          var a = (a, t) => {
              var r, d, f = t[0],
                c = t[1],
                n = t[2],
                o = 0;
              if (f.some((a => 0 !== e[a]))) {
                for (r in c) s.o(c, r) && (s.m[r] = c[r]);
                n && n(s)
              }
              for (a && a(t); o < f.length; o++) d = f[o], s.o(e, d) && e[d] && e[d][0](), e[d] = 0
            },
            t = self.webpackChunk_rockstargames_sites_red_dead_online = self.webpackChunk_rockstargames_sites_red_dead_online || [];
          t.forEach(a.bind(null, 0)), t.push = a.bind(null, t.push.bind(t))
        })(), s.nc = void 0, s(45408), s(82021)
      })())
    }
  }
}));