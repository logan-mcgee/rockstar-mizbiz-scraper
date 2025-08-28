try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "6499115c-b21e-4784-80f6-65d827af30d1", e._sentryDebugIdIdentifier = "sentry-dbid-6499115c-b21e-4784-80f6-65d827af30d1")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "1abf2adfc44dda687079577dcca1257a51fb3eb0",
    packageName: "@rockstargames/sites-gta-trilogy",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "1abf2adfc44dda687079577dcca1257a51fb3eb0"
}, System.register(["@rockstargames/modules-core-videoplayer"], (function(e, a) {
  var t = {};
  return Object.defineProperty(t, "__esModule", {
    value: !0
  }), {
    setters: [function(e) {
      Object.keys(e).forEach((function(a) {
        t[a] = e[a]
      }))
    }],
    execute: function() {
      e((() => {
        var e, r, d, f, c, n, o = {
            1998: (e, a, t) => {
              (0, t(2788).w)(1)
            },
            2788: (e, a, t) => {
              const r = t(9944).y;
              a.w = function(e) {
                if (e || (e = 1), !t.y.meta || !t.y.meta.url) throw console.error("__system_context__", t.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                t.p = r(t.y.meta.url, e)
              }
            },
            5136: e => {
              "use strict";
              e.exports = t
            },
            5819: (e, a, t) => {
              "use strict";
              var r = {
                  "./index": () => Promise.all([t.e(3827), t.e(1220), t.e(2229), t.e(1379), t.e(8354)]).then((() => () => t(4872)))
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
            7389: (e, a, t) => {
              t(1998)
            },
            9944: (e, a, t) => {
              a.y = function(e, a) {
                var t = document.createElement("a");
                t.href = e;
                for (var r = "/" === t.pathname[0] ? t.pathname : "/" + t.pathname, d = 0, f = r.length; d !== a && f >= 0;) "/" === r[--f] && d++;
                if (d !== a) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + a + ") is greater than the number of directories (" + d + ") in the URL path " + e);
                var c = r.slice(0, f + 1);
                return t.protocol + "//" + t.host + c
              };
              Number.isInteger
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
          return o[e].call(t.exports, t, t.exports, s), t.loaded = !0, t.exports
        }
        return s.m = o, s.c = i, s.y = a, s.amdO = {}, s.n = e => {
          var a = e && e.__esModule ? () => e.default : () => e;
          return s.d(a, {
            a
          }), a
        }, r = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, s.t = function(a, t) {
          if (1 & t && (a = this(a)), 8 & t) return a;
          if ("object" == typeof a && a) {
            if (4 & t && a.__esModule) return a;
            if (16 & t && "function" == typeof a.then) return a
          }
          var d = Object.create(null);
          s.r(d);
          var f = {};
          e = e || [null, r({}), r([]), r(r)];
          for (var c = 2 & t && a;
            "object" == typeof c && !~e.indexOf(c); c = r(c)) Object.getOwnPropertyNames(c).forEach((e => f[e] = () => a[e]));
          return f.default = () => a, s.d(d, f), d
        }, s.d = (e, a) => {
          for (var t in a) s.o(a, t) && !s.o(e, t) && Object.defineProperty(e, t, {
            enumerable: !0,
            get: a[t]
          })
        }, s.f = {}, s.e = e => Promise.all(Object.keys(s.f).reduce(((a, t) => (s.f[t](e, a), a)), [])), s.u = e => "js/" + {
          114: "ac3400703783d8572a8bfc087d8acfec",
          131: "667a1ffab7935d211e4e8ae24c0dcc51",
          278: "8ffebc1da45009e53796103600654d83",
          299: "4a2ce321a30eb5b518bf22df35f7e2c8",
          314: "3d3b1b6a984de625b3b88ca0a0c81928",
          614: "b68c97f7df7b2e81edf0db8c56e0c170",
          662: "38341f56774124cecad5056791539f83",
          824: "1eb91aee1defce458bdc59d138ce8c6f",
          907: "348e46a8f4971bffb7cc6278484ff54e",
          1054: "ff90f0d7c89dd362e571542f9447d2fd",
          1109: "bb1d8301ef0ac17bbaec3f27b74490de",
          1138: "574363222f88813c77079e4b8f97f0c3",
          1220: "248d549380dba0662f90da4e81666240",
          1242: "9cc1a430a799c00154ff121ae79c46af",
          1299: "24cc0607182d94b02e0d2956fb4344f4",
          1379: "b4bb4d034897c9200084af7718184845",
          1503: "4ff08f91b151d801b1fc1da60fb3dc34",
          1822: "822b6e57296ea71bee908a5451de75d1",
          1868: "789943e5b4659d7597ec129693395f51",
          2156: "52eda29f5d50fd7db24d22aa877459f3",
          2171: "74285602e8ef8821e22d5e3b79672c4d",
          2221: "5c9c65007c827bfb54477b0a7bad99e9",
          2243: "f5f3fbb731237f9a57f9909c7e74c170",
          2315: "356dd2ec90a66545a6fe6ceef07c368a",
          2347: "2508bff29aa802eaa723da1211cdccc8",
          2365: "8607eeabaaca5899e34fd3a19197a5a1",
          2398: "44221219f29196a911d53c9a7d946acf",
          2466: "22e99ccd21fd7d5fe88fcb3af32ae393",
          2642: "0c452e17f600ed8dcffb8661c66fa133",
          2678: "75ddd5cd5e929b28ba8f3c480d663b2e",
          2864: "03ec213eb53c042f648202de68de6586",
          3034: "fbfb130a04dd21bc17f665a65cbc95e4",
          3197: "7e49c8eb15089cb9b8a59881d953862c",
          3343: "e5207d8fb604893518f340d12ee61e84",
          3370: "569c4b7ff49da7aa52db599f21ba6f02",
          3475: "1ee921566f1aeca9c13d55fe247c5767",
          3486: "c4ee55a43ef770d43ea1bb8f463d2cfe",
          3697: "a2e4a13467908a51c155ab0d1b45443c",
          3827: "e1f4c9150b46fede828c6aec878352cc",
          3885: "836d2dc105634bb96899c13f55809b7b",
          3941: "8def6d9da60d2b9ddfeb8fe041c91211",
          3963: "95cc383e1866e5bb25a82a08ddf84126",
          4011: "78c3b3a96abe3e731fcbf5bbad0aa91d",
          4528: "c95c097b14232ed0dbb5be6899394b32",
          4621: "5ff1182327f51d3b00acb19326ff9378",
          4700: "80ac1605c3c62280b80e5575d2308c58",
          4710: "ae3a33ca11d26ebe9bbabf1a86fb37f1",
          4731: "9c0be7a5d3c6314f9edc4d759b42fe38",
          4799: "516c2d7d1f74b16f789806bf8a58f623",
          4851: "f31b8af185f9db4d87fc4b85b56d8d2b",
          4861: "787e74c9a6ad00faa0a34fca224b7ef5",
          4913: "3c0e4d98ef7609241af32aa01ff77ecf",
          5018: "d89ab5166faf40a2c9395730fbb10ce2",
          5233: "5a140e01d9ab2f407f58946a0c4be124",
          5259: "28c36df879a7f00fb7d9cb7fd55977e3",
          5530: "f0b6d903b3737f59fa121221582d616f",
          5639: "5d27b7a99b8c2a8d38be0c409ae4df2d",
          5663: "e28da1014e8531f8386479853edc67f7",
          5742: "ff9490671b0dce03cdaf98e3bbd523c6",
          5830: "81075254cf7aab55fc3669c966ebf54f",
          5832: "7b86e98f9d4dbca6ec3912d303cb155c",
          6267: "0e13fbb61c357a466da5e283bb811543",
          6280: "b3d852c56e1c9b557d4982204d407766",
          6285: "6d439f26862b9d0233ab88af798d8e91",
          6361: "b42ece4417ec6ccadcc11f31e364c5b7",
          6664: "e32b9648ee3d4729a832ef3d2b96339b",
          6879: "2a76079dd9964103c175d810ad99078a",
          6891: "2c202562217a086dcbd5c4f406ada8cb",
          6997: "e585167d4b9069c16f595bf5211c540a",
          7010: "ebff7ea60dfb352200626fa10b21b8ee",
          7073: "c3b4dd9dde6d036b4957d284a265ed1e",
          7436: "dc905c4aa66f6ee0d3d5bf57d706253e",
          7452: "f0433a42c368043855b7803323f763b5",
          7453: "c4f4605f8888ebac3e9250109b754083",
          7970: "91a1f083f45f187d845c23120661d15a",
          8272: "1ae4f132cb47123cca791031cffbf2ed",
          8354: "8e12594ae6b593038e08bf370ab2ae06",
          8391: "21008852673733d1c1de6a5349c7ea04",
          8755: "ceab8d487173878754098fd3a983c188",
          8880: "c18bfa5df6b76ff822f3f0632135ffef",
          8970: "ab431b198e57622602996b1ccb9c6f5b",
          9022: "8f96b09da5c76db2519160b7611654c6",
          9028: "1eb7b3706488e53dc2f57e30b780b528",
          9126: "c0236bc165c3fdbfef1e5585d7e9d44d",
          9368: "f8d452a405c4d89ba2a06dd8a68b053c",
          9377: "867f540b7ed819cf3d9aabe53f3b3d18",
          9615: "ffbc2a9e5b58d3aa125f6b2386516d2b",
          9625: "bae1fc8067d1513162a6275c0ba5367c",
          9728: "af4c8075101e4a49bcb07aca54c6351e",
          9936: "e797e3fc2e9500640fa8326b6c7658c6",
          9990: "f511760ac8c1215eaf5fc00738fe2358"
        } [e] + ".js", s.miniCssF = e => "css/6a5fe84429bbdc6b0429287f94356eea.css", s.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), s.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), d = {}, f = "@rockstargames/sites-gta-trilogy:", s.l = (e, a, t, r) => {
          if (d[e]) d[e].push(a);
          else {
            var c, n;
            if (void 0 !== t)
              for (var o = document.getElementsByTagName("script"), i = 0; i < o.length; i++) {
                var b = o[i];
                if (b.getAttribute("src") == e || b.getAttribute("data-webpack") == f + t) {
                  c = b;
                  break
                }
              }
            c || (n = !0, (c = document.createElement("script")).charset = "utf-8", c.timeout = 120, s.nc && c.setAttribute("nonce", s.nc), c.setAttribute("data-webpack", f + t), c.src = e), d[e] = [a];
            var l = (a, t) => {
                c.onerror = c.onload = null, clearTimeout(u);
                var r = d[e];
                if (delete d[e], c.parentNode && c.parentNode.removeChild(c), r && r.forEach((e => e(t))), a) return a(t)
              },
              u = setTimeout(l.bind(null, void 0, {
                type: "timeout",
                target: c
              }), 12e4);
            c.onerror = l.bind(null, c.onerror), c.onload = l.bind(null, c.onload), n && document.head.appendChild(c)
          }
        }, s.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, s.nmd = e => (e.paths = [], e.children || (e.children = []), e), c = {
          8354: [1879]
        }, n = {
          1879: ["default", "./index", 5136]
        }, s.f.remotes = (e, a) => {
          s.o(c, e) && c[e].forEach((e => {
            var t = s.R;
            t || (t = []);
            var r = n[e];
            if (!(t.indexOf(r) >= 0)) {
              if (t.push(r), r.p) return a.push(r.p);
              var d = a => {
                  a || (a = new Error("Container missing")), "string" == typeof a.message && (a.message += '\nwhile loading "' + r[1] + '" from ' + r[2]), s.m[e] = () => {
                    throw a
                  }, r.p = 0
                },
                f = (e, t, f, c, n, o) => {
                  try {
                    var i = e(t, f);
                    if (!i || !i.then) return n(i, c, o);
                    var s = i.then((e => n(e, c)), d);
                    if (!o) return s;
                    a.push(r.p = s)
                  } catch (e) {
                    d(e)
                  }
                },
                c = (e, a, d) => f(a.get, r[1], t, 0, o, d),
                o = a => {
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
                c = "@rockstargames/sites-gta-trilogy",
                n = (e, a, t, r) => {
                  var d = f[e] = f[e] || {},
                    n = d[a];
                  (!n || !n.loaded && (!r != !n.eager ? r : c > n.from)) && (d[a] = {
                    get: t,
                    from: c,
                    eager: !!r
                  })
                },
                o = [];
              return "default" === t && (n("@rsgweb/locale-tools", "1.0.0", (() => Promise.all([s.e(2315), s.e(2229), s.e(9625)]).then((() => () => s(8718))))), n("@rsgweb/utils", "1.0.0", (() => Promise.all([s.e(3827), s.e(2229), s.e(1379)]).then((() => () => s(1635))))), n("framer-motion", "7.10.3", (() => Promise.all([s.e(3963), s.e(2229), s.e(1299)]).then((() => () => s(3963))))), n("react-router-dom", "6.30.0", (() => Promise.all([s.e(9728), s.e(2229)]).then((() => () => s(9728))))), n("react", "18.2.0", (() => s.e(614).then((() => () => s(614))))), n("react", "18.3.1", (() => s.e(1138).then((() => () => s(1138))))), n("usehooks-ts", "2.16.0", (() => Promise.all([s.e(1109), s.e(2229)]).then((() => () => s(1109))))), (() => {
                var e = e => {
                  return a = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(a));
                  var a
                };
                try {
                  var a = s(5136);
                  if (!a) return;
                  var d = e => e && e.init && e.init(s.S[t], r);
                  if (a.then) return o.push(a.then(d, e));
                  var f = d(a);
                  if (f && f.then) return o.push(f.catch(e))
                } catch (a) {
                  e(a)
                }
              })()), o.length ? e[t] = Promise.all(o).then((() => e[t] = 1)) : e[t] = 1
            }
          }
        })(), (() => {
          var e;
          s.g.importScripts && (e = s.g.location + "");
          var a = s.g.document;
          if (!e && a && (a.currentScript && "SCRIPT" === a.currentScript.tagName.toUpperCase() && (e = a.currentScript.src), !e)) {
            var t = a.getElementsByTagName("script");
            if (t.length)
              for (var r = t.length - 1; r > -1 && (!e || !/^http(s?):/.test(e));) e = t[r--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), s.p = e
        })(), (() => {
          var e = e => {
              var a = e => e.split(".").map((e => +e == e ? +e : e)),
                t = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
                r = t[1] ? a(t[1]) : [];
              return t[2] && (r.length++, r.push.apply(r, a(t[2]))), t[3] && (r.push([]), r.push.apply(r, a(t[3]))), r
            },
            a = e => {
              var t = e[0],
                r = "";
              if (1 === e.length) return "*";
              if (t + .5) {
                r += 0 == t ? ">=" : -1 == t ? "<" : 1 == t ? "^" : 2 == t ? "~" : t > 0 ? "=" : "!=";
                for (var d = 1, f = 1; f < e.length; f++) d--, r += "u" == (typeof(n = e[f]))[0] ? "-" : (d > 0 ? "." : "") + (d = 2, n);
                return r
              }
              var c = [];
              for (f = 1; f < e.length; f++) {
                var n = e[f];
                c.push(0 === n ? "not(" + o() + ")" : 1 === n ? "(" + o() + " || " + o() + ")" : 2 === n ? c.pop() + " " + c.pop() : a(n))
              }
              return o();

              function o() {
                return c.pop().replace(/^\((.+)\)$/, "$1")
              }
            },
            t = (a, r) => {
              if (0 in a) {
                r = e(r);
                var d = a[0],
                  f = d < 0;
                f && (d = -d - 1);
                for (var c = 0, n = 1, o = !0;; n++, c++) {
                  var i, s, b = n < a.length ? (typeof a[n])[0] : "";
                  if (c >= r.length || "o" == (s = (typeof(i = r[c]))[0])) return !o || ("u" == b ? n > d && !f : "" == b != f);
                  if ("u" == s) {
                    if (!o || "u" != b) return !1
                  } else if (o)
                    if (b == s)
                      if (n <= d) {
                        if (i != a[n]) return !1
                      } else {
                        if (f ? i > a[n] : i < a[n]) return !1;
                        i != a[n] && (o = !1)
                      }
                  else if ("s" != b && "n" != b) {
                    if (f || n <= d) return !1;
                    o = !1, n--
                  } else {
                    if (n <= d || s < b != f) return !1;
                    o = !1
                  } else "s" != b && "n" != b && (o = !1, n--)
                }
              }
              var l = [],
                u = l.pop.bind(l);
              for (c = 1; c < a.length; c++) {
                var p = a[c];
                l.push(1 == p ? u() | u() : 2 == p ? u() & u() : p ? t(p, r) : !u())
              }
              return !!u()
            },
            r = (a, r, d, f) => {
              var c = f ? (e => Object.keys(e).reduce(((a, t) => (e[t].eager && (a[t] = e[t]), a)), {}))(a[r]) : a[r];
              return (r = Object.keys(c).reduce(((a, r) => !t(d, r) || a && !((a, t) => {
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
              })(a, r) ? a : r), 0)) && c[r]
            },
            d = e => {
              throw new Error(e)
            },
            f = (e => function(a, t, r, d, f) {
              var c = s.I(a);
              return c && c.then && !r ? c.then(e.bind(e, a, s.S[a], t, !1, d, f)) : e(a, s.S[a], t, r, d, f)
            })(((e, t, f, c, n, o) => {
              if (!((e, a) => e && s.o(e, a))(t, f)) return ((e, a, t) => t ? t() : ((e, a) => d("Shared module " + a + " doesn't exist in shared scope " + e))(e, a))(e, f, o);
              var i, b = r(t, f, n, c);
              return b ? ((i = b).loaded = 1, i.get()) : o ? o() : void d(((e, t, r, d, f) => {
                var c = e[r];
                return "No satisfying version (" + a(d) + ")" + (f ? " for eager consumption" : "") + " of shared module " + r + " found in shared scope " + t + ".\nAvailable versions: " + Object.keys(c).map((e => e + " from " + c[e].from)).join(", ")
              })(t, e, f, n, c))
            })),
            c = {},
            n = {
              2229: () => f("default", "react", !1, [1, 18, 2, 0], (() => s.e(1138).then((() => () => s(1138))))),
              9623: () => f("default", "react-router-dom", !1, [1, 6, 11, 2], (() => s.e(9728).then((() => () => s(9728))))),
              1788: () => f("default", "@rsgweb/locale-tools", !1, [1, "workspace:^"], (() => Promise.all([s.e(2315), s.e(1503)]).then((() => () => s(8718))))),
              1913: () => f("default", "react", !1, [1, 18, 2, 0], (() => s.e(614).then((() => () => s(614))))),
              3582: () => f("default", "framer-motion", !1, [1, 7, 5, 1], (() => s.e(3963).then((() => () => s(3963))))),
              5587: () => f("default", "usehooks-ts", !1, [1, 2, 7, 2], (() => s.e(1109).then((() => () => s(1109))))),
              5966: () => f("default", "@rsgweb/utils", !1, [1, "workspace:^"], (() => () => s(1635)))
            },
            o = {
              1379: [9623],
              2229: [2229],
              8354: [1788, 1913, 3582, 5587, 5966]
            },
            i = {};
          s.f.consumes = (e, a) => {
            s.o(o, e) && o[e].forEach((e => {
              if (s.o(c, e)) return a.push(c[e]);
              if (!i[e]) {
                var t = a => {
                  c[e] = 0, s.m[e] = t => {
                    delete s.c[e], t.exports = a()
                  }
                };
                i[e] = !0;
                var r = a => {
                  delete c[e], s.m[e] = t => {
                    throw delete s.c[e], a
                  }
                };
                try {
                  var d = n[e]();
                  d.then ? a.push(c[e] = d.then(t).catch(r)) : t(d)
                } catch (e) {
                  r(e)
                }
              }
            }))
          }
        })(), (() => {
          if ("undefined" != typeof document) {
            var e = {
              7060: 0
            };
            s.f.miniCss = (a, t) => {
              e[a] ? t.push(e[a]) : 0 !== e[a] && {
                8354: 1
              } [a] && t.push(e[a] = (e => new Promise(((a, t) => {
                var r = s.miniCssF(e),
                  d = s.p + r;
                if (((e, a) => {
                    for (var t = document.getElementsByTagName("link"), r = 0; r < t.length; r++) {
                      var d = (c = t[r]).getAttribute("data-href") || c.getAttribute("href");
                      if ("stylesheet" === c.rel && (d === e || d === a)) return c
                    }
                    var f = document.getElementsByTagName("style");
                    for (r = 0; r < f.length; r++) {
                      var c;
                      if ((d = (c = f[r]).getAttribute("data-href")) === e || d === a) return c
                    }
                  })(r, d)) return a();
                ((e, a, t, r, d) => {
                  var f = document.createElement("link");
                  f.rel = "stylesheet", f.type = "text/css", s.nc && (f.nonce = s.nc), f.onerror = f.onload = t => {
                    if (f.onerror = f.onload = null, "load" === t.type) r();
                    else {
                      var c = t && t.type,
                        n = t && t.target && t.target.href || a,
                        o = new Error("Loading CSS chunk " + e + " failed.\n(" + c + ": " + n + ")");
                      o.name = "ChunkLoadError", o.code = "CSS_CHUNK_LOAD_FAILED", o.type = c, o.request = n, f.parentNode && f.parentNode.removeChild(f), d(o)
                    }
                  }, f.href = a, document.head.appendChild(f)
                })(e, d, 0, a, t)
              })))(a).then((() => {
                e[a] = 0
              }), (t => {
                throw delete e[a], t
              })))
            }
          }
        })(), (() => {
          var e = {
            7060: 0
          };
          s.f.j = (a, t) => {
            var r = s.o(e, a) ? e[a] : void 0;
            if (0 !== r)
              if (r) t.push(r[2]);
              else if (2229 != a) {
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
            } else e[a] = 0
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
            t = self.webpackChunk_rockstargames_sites_gta_trilogy = self.webpackChunk_rockstargames_sites_gta_trilogy || [];
          t.forEach(a.bind(null, 0)), t.push = a.bind(null, t.push.bind(t))
        })(), s(7389), s(5819)
      })())
    }
  }
}));