! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "27a53e72-0503-4b62-8c53-e09afec583d6", e._sentryDebugIdIdentifier = "sentry-dbid-27a53e72-0503-4b62-8c53-e09afec583d6")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-videoplayer",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register([], (function(e, a) {
  return {
    execute: function() {
      e((() => {
        var e, t, r, d, f, c, b = {
            49293: (e, a, t) => {
              (0, t(31789).w)(1)
            },
            31789: (e, a, t) => {
              const r = t(90569).y;
              a.w = function(e) {
                if (e || (e = 1), !t.y.meta || !t.y.meta.url) throw console.error("__system_context__", t.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                t.p = r(t.y.meta.url, e)
              }
            },
            23358: (e, a, t) => {
              t(49293)
            },
            90569: (e, a, t) => {
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
            58157: (e, a, t) => {
              "use strict";
              var r = {
                  "./bootstrap": () => t.e(7902).then((() => () => t(37902))),
                  "./index": () => Promise.all([t.e(6996), t.e(2229), t.e(9623), t.e(6188), t.e(5966), t.e(9010), t.e(3581), t.e(2918), t.e(3906), t.e(1552)]).then((() => () => t(41552))),
                  "./tina": () => Promise.all([t.e(2229), t.e(6188), t.e(5966), t.e(4853), t.e(9010), t.e(1877)]).then((() => () => t(91877))),
                  "./tinaBlockTemplates": () => Promise.all([t.e(2229), t.e(6188), t.e(5966), t.e(4853), t.e(9010), t.e(1877)]).then((() => () => t(91877)))
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
            }
          },
          o = {};

        function n(e) {
          var a = o[e];
          if (void 0 !== a) return a.exports;
          var t = o[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return b[e].call(t.exports, t, t.exports, n), t.loaded = !0, t.exports
        }
        return n.m = b, n.c = o, n.y = a, n.amdO = {}, n.n = e => {
          var a = e && e.__esModule ? () => e.default : () => e;
          return n.d(a, {
            a
          }), a
        }, t = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, n.t = function(a, r) {
          if (1 & r && (a = this(a)), 8 & r) return a;
          if ("object" == typeof a && a) {
            if (4 & r && a.__esModule) return a;
            if (16 & r && "function" == typeof a.then) return a
          }
          var d = Object.create(null);
          n.r(d);
          var f = {};
          e = e || [null, t({}), t([]), t(t)];
          for (var c = 2 & r && a;
            "object" == typeof c && !~e.indexOf(c); c = t(c)) Object.getOwnPropertyNames(c).forEach((e => f[e] = () => a[e]));
          return f.default = () => a, n.d(d, f), d
        }, n.d = (e, a) => {
          for (var t in a) n.o(a, t) && !n.o(e, t) && Object.defineProperty(e, t, {
            enumerable: !0,
            get: a[t]
          })
        }, n.f = {}, n.e = e => Promise.all(Object.keys(n.f).reduce(((a, t) => (n.f[t](e, a), a)), [])), n.u = e => "js/" + {
          131: "e49d54d9e6bd063b882cced79495a713",
          278: "92b3f93f671f04316d6b1a5ee7413da7",
          299: "048dfdc9686d07cc6ddc2802ea1e8669",
          314: "fd206c2a563876ecbd0e9db1acb69adb",
          662: "d4390cb1cf4082405b3b28a6011ad8f5",
          824: "9260a38ec8f721c63a8a07534e1911c6",
          907: "c2432f8818e1c828ca0e3d23d80e108d",
          1029: "de4f8f44a32efdaba476f0c569b6bd26",
          1041: "4cecb768c49bcceb78fce173fe8cddf4",
          1054: "ba2cf406fe2144d9314c70ba5e3bb0ff",
          1242: "6b529ce38049fcfa2bf44ed53d3162a6",
          1552: "67c6f82994ad368c6001dd887b5302e8",
          1604: "4f6d93d1236a64d2f20017cf733ea16a",
          1822: "3769b1bb7b80d0493aee26f74703c025",
          1868: "ab7d0bc9b2801d6e15cca74eb6b25afa",
          1877: "60d56f818dbbb121357d65590d57aa9a",
          2156: "3f071681fc3025fb1cd025580b0ef93c",
          2171: "8f8d30967b8da8639cc15742a7d70de4",
          2221: "7ba89ca18d71f4f957479e2793b46dd9",
          2229: "694e45c1bdc83f48f126dc7ace434947",
          2243: "297345da01d472ba0bf0020c77029105",
          2347: "6c6c14099a64dc31108990593b115a02",
          2365: "03a4b72fd2ea549a74d6e20b4938b617",
          2398: "adf72af1d3602175dfad7a9a2d32dea7",
          2407: "8a79ea843dd88a00025ab4b59d711c01",
          2466: "597c6fda107bb621dd49fd4b6407b09d",
          2642: "f07576dd55872e5bfa9586a1a32eca12",
          2670: "b3bf3227e278a7a1757b5fbf1328bc29",
          2678: "29d8e7a5de3c21c9297832bc92e7cbaf",
          2864: "c7e9b4b2593e3fc76d067a7a37264d73",
          2918: "c48f222def00e0dc340c684a29fdcc11",
          3034: "d6e64950bf1c6f3766f6739d3aa5dcc0",
          3197: "9211d4307b2189a3cac3d46d2a24bc28",
          3217: "1a4d734c9ec2f664a54db448583c4a35",
          3343: "aa8dc63a23bf06f26914125690ffa068",
          3370: "bc489edd47011f6079bbc2eb320caef8",
          3422: "b63a22c43fb92071e2ef248b0109a82d",
          3475: "9b89e5570031196a3e0214c6b0024c93",
          3486: "2634a30ab1c5b6874ac2daf2888b5326",
          3581: "4038d09d8a5a6cab7676fb396cfb6c60",
          3697: "b91d0e43099f44877c4fd7e28e3be13c",
          3811: "ce550e7cb831ab1fa7153f2407055112",
          3885: "3cd68a656c9a91b10f5a9566048aa60b",
          3906: "5db10e1b377f3e6c9eeb6313c1a52109",
          3941: "e435b4744e38a693e1b45be1af718461",
          4011: "9c6f2a6e8df5682e546027f09cd09abf",
          4059: "9012440263ab32ff5ec2275eb6925769",
          4282: "a217469e7b444ccd360c96a321f1ca3c",
          4528: "2c971c365324abf770ddccd92c6cc3b8",
          4621: "c3dbf0ae0bf7b0614dd2acde186952b8",
          4700: "530167ae78b0fae1532681711fdb6bc1",
          4710: "96cb83cbadf0699fc594e00e084748c9",
          4731: "ad72e6d022c47db4593c3bc67f9be92f",
          4799: "bcfb333650e00124121c51176c85ae1d",
          4851: "4aaa15cd35c26ee948755c631ae22753",
          4853: "24fd39970cceb3912231faa6d0c8f8c0",
          4861: "303e66cbfea3d5ba4942aa932f0311c6",
          4913: "6becb349fb2f882be53c1ca2309f9554",
          5018: "043fdcf9bf8ec94dfa508a9310809d73",
          5219: "1275189e17b16100e4016e9e406e21ea",
          5233: "abfff5a8a68e986cf74fd2593be7fa8a",
          5259: "ed9f88475568d0e23505b8c03ed7bea7",
          5409: "e0a62beda77a79abe2a19e3c4ae2f01e",
          5483: "b43d142e84d6de5a7279d7ec5b2832ab",
          5507: "b838935462db9348fb57f7264c0aa5f5",
          5530: "950039f51bdb16b1669818d11074d782",
          5639: "4ae13e68342589dceabe4f5e5054f7b5",
          5663: "a5a349c26705fa9755a1c5bcc7245e23",
          5742: "bff94dbecbf1e9cc8c3af7a4a28950ab",
          5808: "075d360a38c6bfc43c829a19a27131bd",
          5828: "731f157c0ee892f7f840bf783880e7ff",
          5830: "f9630b528e575e5798540d451dd07661",
          5832: "6075bb07af6fcaa2767c395fb254626d",
          5966: "b291de7cefd353995511032eb1a82a4e",
          6188: "fbc5b6848dcceb32ea5990c581a10150",
          6265: "9cbd8efc5e248d622b2e4d1cc5b67c16",
          6267: "a6c401544199123ac406d0f2d340e7e8",
          6280: "4e25e6c195dbe7540e457f591070dc03",
          6285: "f1f12b7e701c745b2c191999dc1f59ce",
          6286: "24276598e07c6cb136a9b4f1f042441f",
          6361: "bf924e156c3134d3ba56b1242cc55dc5",
          6440: "a52d49dbb71a8b04b3fe546675debd2d",
          6519: "91ddfd416d0c9cd45b01b336e7b9d000",
          6664: "ef97d9c8c36e313d7d33587bd2ca2232",
          6695: "d2437e700aa8c0f4af50d628d62d5b1f",
          6832: "aab2fb342d0d512ecd67502de6aa0e71",
          6879: "01fefc0fce019fb762846663fe5d42f1",
          6891: "569144ade5d645767c45b1090cf73b86",
          6996: "6c4c4d7a9fa732d34599e78ea6f309cc",
          6997: "2e754a06c2d0070efdbb55e6315afe4c",
          7010: "eef78ac5586dd5880cfac7daf1e94f72",
          7073: "a50e4248b88d0b43c4b39432fd14ff4e",
          7360: "8d7e2ea441e2d845a047c6cf3fb4aba5",
          7436: "9229d28f621490ecd971e287e9896f8e",
          7452: "6e2d643ab9343c9ca43309dabdbfea43",
          7453: "f8b5d9af112da8a99bc351f8d96e47bc",
          7600: "53fda3dfa462db61064a5831d998080a",
          7888: "6a0395f677409b611c6aede73d894acb",
          7902: "896c5c995aea3b82f47325fa679a63db",
          7970: "8189639a15deeafa480c37c233be640f",
          8272: "98283f6cbad40af34f41e70c5771cf5b",
          8329: "e633be2d4bb035b6177cd470108c3377",
          8391: "8d5c372b02f13cf0465ff4da1c2a1541",
          8646: "589c2a3e0cee932feb1ece4bbce9bf6b",
          8755: "13a6cd97f49bf369ebc3a8234237d4c9",
          8880: "810d5b2679bb14e6f2bc67f142d6b5ae",
          8970: "4c424f2cdb862b2a41c2ada05dd24069",
          9005: "72e4c9af03011a4a7af11b5ed527171c",
          9010: "4b5be9bcd3964cf1e944111149aa580e",
          9022: "16111393b5639786bd916ff9dbfcdba5",
          9028: "e536c1effb3c46afdb508287af33ece9",
          9126: "4d42a5cf333b11a16beeb87e1b7ba8ef",
          9377: "e81616a732ec7b98e7e0e6323003a1af",
          9491: "fd156a720ff185ad01bd7d1dbef04553",
          9550: "b4846a06b3c860beca4b7300914c8c2a",
          9615: "6a7db5d6fafa7cb594e6a5ba407847c4",
          9623: "fb134a5684b6756100e88f7db34936fc",
          9936: "d721063e8063055507167d4ecffc974f",
          9990: "ef818a70658f635cab560a5c3b51a89f"
        } [e] + ".js", n.miniCssF = e => "css/" + {
          1552: "0046b5682c8fe97c8afdbca1931f1243",
          1877: "e1ecfbd5d60b0822f094e505eee8adf4",
          3811: "a126229ede95b503bfddbd53efcedae3",
          3906: "526395c36cb3c58329b9ba0c5175fc0e",
          6265: "c93a94af96ec28203142bf5e00fef0f7",
          8646: "c93a94af96ec28203142bf5e00fef0f7"
        } [e] + ".css", n.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), n.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), r = {}, d = "@rockstargames/modules-core-videoplayer:", n.l = (e, a, t, f) => {
          if (r[e]) r[e].push(a);
          else {
            var c, b;
            if (void 0 !== t)
              for (var o = document.getElementsByTagName("script"), l = 0; l < o.length; l++) {
                var i = o[l];
                if (i.getAttribute("src") == e || i.getAttribute("data-webpack") == d + t) {
                  c = i;
                  break
                }
              }
            c || (b = !0, (c = document.createElement("script")).charset = "utf-8", c.timeout = 120, n.nc && c.setAttribute("nonce", n.nc), c.setAttribute("data-webpack", d + t), c.src = e), r[e] = [a];
            var s = (a, t) => {
                c.onerror = c.onload = null, clearTimeout(u);
                var d = r[e];
                if (delete r[e], c.parentNode && c.parentNode.removeChild(c), d && d.forEach((e => e(t))), a) return a(t)
              },
              u = setTimeout(s.bind(null, void 0, {
                type: "timeout",
                target: c
              }), 12e4);
            c.onerror = s.bind(null, c.onerror), c.onload = s.bind(null, c.onload), b && document.head.appendChild(c)
          }
        }, n.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, n.nmd = e => (e.paths = [], e.children || (e.children = []), e), f = {}, c = {}, n.f.remotes = (e, a) => {
          n.o(f, e) && f[e].forEach((e => {
            var t = n.R;
            t || (t = []);
            var r = c[e];
            if (!(t.indexOf(r) >= 0)) {
              if (t.push(r), r.p) return a.push(r.p);
              var d = a => {
                  a || (a = new Error("Container missing")), "string" == typeof a.message && (a.message += '\nwhile loading "' + r[1] + '" from ' + r[2]), n.m[e] = () => {
                    throw a
                  }, r.p = 0
                },
                f = (e, t, f, c, b, o) => {
                  try {
                    var n = e(t, f);
                    if (!n || !n.then) return b(n, c, o);
                    var l = n.then((e => b(e, c)), d);
                    if (!o) return l;
                    a.push(r.p = l)
                  } catch (e) {
                    d(e)
                  }
                },
                b = (e, a, d) => f(a.get, r[1], t, 0, o, d),
                o = a => {
                  r.p = 1, n.m[e] = e => {
                    e.exports = a()
                  }
                };
              f(n, r[2], 0, 0, ((e, a, t) => e ? f(n.I, r[0], 0, e, b, t) : d()), 1)
            }
          }))
        }, (() => {
          n.S = {};
          var e = {},
            a = {};
          n.I = (t, r) => {
            r || (r = []);
            var d = a[t];
            if (d || (d = a[t] = {}), !(r.indexOf(d) >= 0)) {
              if (r.push(d), e[t]) return e[t];
              n.o(n.S, t) || (n.S[t] = {});
              var f = n.S[t],
                c = "@rockstargames/modules-core-videoplayer",
                b = (e, a, t, r) => {
                  var d = f[e] = f[e] || {},
                    b = d[a];
                  (!b || !b.loaded && (!r != !b.eager ? r : c > b.from)) && (d[a] = {
                    get: t,
                    from: c,
                    eager: !!r
                  })
                },
                o = [];
              return "default" === t && (b("@gsap/react", "2.1.0", (() => Promise.all([n.e(2229), n.e(3581), n.e(7888)]).then((() => () => n(87888))))), b("@popperjs/core", "2.11.8", (() => n.e(6519).then((() => () => n(66519))))), b("@rsgweb/locale-tools", "1.0.0", (() => Promise.all([n.e(5483), n.e(2229), n.e(5219)]).then((() => () => n(87768))))), b("@rsgweb/modules-core-agegate", "0.0.0", (() => Promise.all([n.e(6695), n.e(2229), n.e(5966), n.e(2918), n.e(6265)]).then((() => () => n(6265))))), b("@rsgweb/rockstar-account", "0.0.0", (() => Promise.all([n.e(5828), n.e(8329), n.e(2229), n.e(9623), n.e(6188), n.e(5966), n.e(5808), n.e(3422)]).then((() => () => n(41041))))), b("@rsgweb/utils", "1.0.0", (() => Promise.all([n.e(5828), n.e(2229), n.e(9623), n.e(6188), n.e(5808), n.e(1029)]).then((() => () => n(24602))))), b("graphql", "16.10.0", (() => n.e(6286).then((() => () => n(26286))))), b("gsap", "0.0.0", (() => n.e(2407).then((() => () => n(12407))))), b("hammerjs", "2.0.8", (() => n.e(5409).then((() => () => n(15409))))), b("lodash", "4.17.21", (() => n.e(4282).then((() => () => n(14282))))), b("react-dom", "18.2.0", (() => Promise.all([n.e(7360), n.e(2229)]).then((() => () => n(57360))))), b("react-popper", "2.3.0", (() => Promise.all([n.e(2229), n.e(4853), n.e(9005), n.e(4059)]).then((() => () => n(44059))))), b("react-router-dom", "6.17.0", (() => Promise.all([n.e(1604), n.e(2229)]).then((() => () => n(21604))))), b("react", "18.2.0", (() => n.e(3217).then((() => () => n(23217))))), b("uuid", "9.0.1", (() => n.e(2670).then((() => () => n(32670)))))), e[t] = o.length ? Promise.all(o).then((() => e[t] = 1)) : 1
            }
          }
        })(), (() => {
          var e;
          n.g.importScripts && (e = n.g.location + "");
          var a = n.g.document;
          if (!e && a && (a.currentScript && (e = a.currentScript.src), !e)) {
            var t = a.getElementsByTagName("script");
            if (t.length)
              for (var r = t.length - 1; r > -1 && (!e || !/^http(s?):/.test(e));) e = t[r--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), n.p = e
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
                for (var c = 0, b = 1, o = !0;; b++, c++) {
                  var n, l, i = b < t.length ? (typeof t[b])[0] : "";
                  if (c >= r.length || "o" == (l = (typeof(n = r[c]))[0])) return !o || ("u" == i ? b > d && !f : "" == i != f);
                  if ("u" == l) {
                    if (!o || "u" != i) return !1
                  } else if (o)
                    if (i == l)
                      if (b <= d) {
                        if (n != t[b]) return !1
                      } else {
                        if (f ? n > t[b] : n < t[b]) return !1;
                        n != t[b] && (o = !1)
                      }
                  else if ("s" != i && "n" != i) {
                    if (f || b <= d) return !1;
                    o = !1, b--
                  } else {
                    if (b <= d || l < i != f) return !1;
                    o = !1
                  } else "s" != i && "n" != i && (o = !1, b--)
                }
              }
              var s = [],
                u = s.pop.bind(s);
              for (c = 1; c < t.length; c++) {
                var p = t[c];
                s.push(1 == p ? u() | u() : 2 == p ? u() & u() : p ? a(p, r) : !u())
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
                    b = (typeof c)[0];
                  if (f != b) return "o" == f && "n" == b || "s" == b || "u" == f;
                  if ("o" != f && "u" != f && d != c) return d < c;
                  r++
                }
              })(t, r) ? t : r), 0)) && f[r]
            },
            r = (e => function(a, t, r, d) {
              var f = n.I(a);
              return f && f.then ? f.then(e.bind(e, a, n.S[a], t, r, d)) : e(a, n.S[a], t, r, d)
            })(((e, a, r, d, f) => {
              var c = a && n.o(a, r) && t(a, r, d);
              return c ? (e => (e.loaded = 1, e.get()))(c) : f()
            })),
            d = {},
            f = {
              62229: () => r("default", "react", [1, 18, 2, 0], (() => n.e(3217).then((() => () => n(23217))))),
              9623: () => r("default", "react-router-dom", [1, 6, 11, 2], (() => n.e(1604).then((() => () => n(21604))))),
              16188: () => r("default", "lodash", [1, 4, 17, 21], (() => n.e(4282).then((() => () => n(14282))))),
              95966: () => r("default", "@rsgweb/utils", [1, "workspace:^"], (() => Promise.all([n.e(5828), n.e(9623), n.e(6188), n.e(5808)]).then((() => () => n(24602))))),
              81569: () => r("default", "uuid", [1, 9, 0, 0], (() => n.e(2670).then((() => () => n(32670))))),
              81788: () => r("default", "@rsgweb/locale-tools", [1, "workspace:^"], (() => Promise.all([n.e(5483), n.e(7600)]).then((() => () => n(87768))))),
              13581: () => r("default", "gsap", [1, "workspace:^"], (() => n.e(2407).then((() => () => n(12407))))),
              2918: () => r("default", "@rsgweb/rockstar-account", [1, "workspace:^"], (() => Promise.all([n.e(5828), n.e(8329), n.e(9623), n.e(6188), n.e(5808), n.e(1041)]).then((() => () => n(41041))))),
              4848: () => r("default", "hammerjs", [1, 2, 0, 8], (() => n.e(5409).then((() => () => n(15409))))),
              27654: () => r("default", "@gsap/react", [1, 2, 1, 0], (() => n.e(5507).then((() => () => n(87888))))),
              47224: () => r("default", "@rsgweb/modules-core-agegate", [1, "workspace:^"], (() => Promise.all([n.e(6695), n.e(8646)]).then((() => () => n(6265))))),
              75971: () => r("default", "react-popper", [1, 2, 3, 0], (() => Promise.all([n.e(4853), n.e(9005), n.e(6440)]).then((() => () => n(44059))))),
              44853: () => r("default", "react-dom", [1, 18, 2, 0], (() => n.e(7360).then((() => () => n(57360))))),
              16565: () => r("default", "graphql", [1, 16, 9, 0], (() => n.e(6286).then((() => () => n(26286))))),
              9005: () => r("default", "@popperjs/core", [1, 2, 11, 7], (() => n.e(6519).then((() => () => n(66519)))))
            },
            c = {
              2229: [62229],
              2918: [2918],
              3581: [13581],
              3906: [4848, 27654, 47224, 75971],
              4853: [44853],
              5808: [16565],
              5966: [95966],
              6188: [16188],
              9005: [9005],
              9010: [81569, 81788],
              9623: [9623]
            },
            b = {};
          n.f.consumes = (e, a) => {
            n.o(c, e) && c[e].forEach((e => {
              if (n.o(d, e)) return a.push(d[e]);
              if (!b[e]) {
                var t = a => {
                  d[e] = 0, n.m[e] = t => {
                    delete n.c[e], t.exports = a()
                  }
                };
                b[e] = !0;
                var r = a => {
                  delete d[e], n.m[e] = t => {
                    throw delete n.c[e], a
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
          if ("undefined" != typeof document) {
            var e = {
              7614: 0
            };
            n.f.miniCss = (a, t) => {
              e[a] ? t.push(e[a]) : 0 !== e[a] && {
                1552: 1,
                1877: 1,
                3811: 1,
                3906: 1,
                6265: 1,
                8646: 1
              } [a] && t.push(e[a] = (e => new Promise(((a, t) => {
                var r = n.miniCssF(e),
                  d = n.p + r;
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
                  f.rel = "stylesheet", f.type = "text/css", f.onerror = f.onload = t => {
                    if (f.onerror = f.onload = null, "load" === t.type) r();
                    else {
                      var c = t && ("load" === t.type ? "missing" : t.type),
                        b = t && t.target && t.target.href || a,
                        o = new Error("Loading CSS chunk " + e + " failed.\n(" + b + ")");
                      o.code = "CSS_CHUNK_LOAD_FAILED", o.type = c, o.request = b, f.parentNode && f.parentNode.removeChild(f), d(o)
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
            7614: 0
          };
          n.f.j = (a, t) => {
            var r = n.o(e, a) ? e[a] : void 0;
            if (0 !== r)
              if (r) t.push(r[2]);
              else if (/^(9(005|010|623)|2229|2918|3581|4853|5966|6188)$/.test(a)) e[a] = 0;
            else {
              var d = new Promise(((t, d) => r = e[a] = [t, d]));
              t.push(r[2] = d);
              var f = n.p + n.u(a),
                c = new Error;
              n.l(f, (t => {
                if (n.o(e, a) && (0 !== (r = e[a]) && (e[a] = void 0), r)) {
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
                b = t[2],
                o = 0;
              if (f.some((a => 0 !== e[a]))) {
                for (r in c) n.o(c, r) && (n.m[r] = c[r]);
                b && b(n)
              }
              for (a && a(t); o < f.length; o++) d = f[o], n.o(e, d) && e[d] && e[d][0](), e[d] = 0
            },
            t = self.webpackChunk_rockstargames_modules_core_videoplayer = self.webpackChunk_rockstargames_modules_core_videoplayer || [];
          t.forEach(a.bind(null, 0)), t.push = a.bind(null, t.push.bind(t))
        })(), n(23358), n(58157)
      })())
    }
  }
}));