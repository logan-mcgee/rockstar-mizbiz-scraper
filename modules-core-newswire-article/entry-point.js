try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "7459ceab-a967-4195-af17-333811afe715", e._sentryDebugIdIdentifier = "sentry-dbid-7459ceab-a967-4195-af17-333811afe715")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-newswire-article",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register(["@rockstargames/modules-core-gif-viewer", "@rockstargames/modules-core-videoplayer"], function(e, a) {
  var r = {},
    t = {};
  return Object.defineProperty(r, "__esModule", {
    value: !0
  }), Object.defineProperty(t, "__esModule", {
    value: !0
  }), {
    setters: [function(e) {
      r.default = e.default || e, Object.keys(e).forEach(function(a) {
        r[a] = e[a]
      })
    }, function(e) {
      t.default = e.default || e, Object.keys(e).forEach(function(a) {
        t[a] = e[a]
      })
    }],
    execute: function() {
      e((() => {
        var e, f, d, c, n, o, l = {
            20154(e, a, r) {
              (0, r(89160).w)(1)
            },
            89160(e, a, r) {
              const t = r(51908).y;
              a.w = function(e) {
                if (e || (e = 1), !r.y.meta || !r.y.meta.url) throw console.error("__system_context__", r.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                r.p = t(r.y.meta.url, e)
              }
            },
            35649(e, a, r) {
              r(20154)
            },
            51908(e, a, r) {
              a.y = function(e, a) {
                var r = document.createElement("a");
                r.href = e;
                for (var t = "/" === r.pathname[0] ? r.pathname : "/" + r.pathname, f = 0, d = t.length; f !== a && d >= 0;) "/" === t[--d] && f++;
                if (f !== a) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + a + ") is greater than the number of directories (" + f + ") in the URL path " + e);
                var c = t.slice(0, d + 1);
                return r.protocol + "//" + r.host + c
              };
              Number.isInteger
            },
            55974(e, a, r) {
              "use strict";
              var t = {
                  "./index": () => Promise.all([r.e(883), r.e(2951), r.e(6765), r.e(2760), r.e(3600), r.e(1414), r.e(8479), r.e(986), r.e(9441), r.e(4815), r.e(1462), r.e(5811), r.e(6903), r.e(3082), r.e(4017), r.e(283), r.e(3331), r.e(2909), r.e(1270), r.e(6416), r.e(2199), r.e(4453), r.e(6589), r.e(5847), r.e(7301), r.e(8248), r.e(2285), r.e(9810), r.e(6936), r.e(6685)]).then(() => () => r(38951)),
                  "./tinaBlockTemplates": () => Promise.all([r.e(883), r.e(2951), r.e(6765), r.e(1414), r.e(986), r.e(9441), r.e(3082), r.e(4017), r.e(283), r.e(3331), r.e(2909), r.e(1270), r.e(4453), r.e(6589), r.e(5847), r.e(8248), r.e(6936), r.e(9822)]).then(() => () => r(26047)),
                  "./types": () => Promise.all([r.e(883), r.e(2951), r.e(6765), r.e(2760), r.e(3600), r.e(1414), r.e(8479), r.e(986), r.e(9441), r.e(4815), r.e(1462), r.e(5811), r.e(6903), r.e(3082), r.e(4017), r.e(283), r.e(3331), r.e(2909), r.e(1270), r.e(6416), r.e(2199), r.e(4453), r.e(6589), r.e(5847), r.e(7301), r.e(8248), r.e(2285), r.e(9810), r.e(6936), r.e(6685)]).then(() => () => r(21667))
                },
                f = (e, a) => (r.R = a, a = r.o(t, e) ? t[e]() : Promise.resolve().then(() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                }), r.R = void 0, a),
                d = (e, a) => {
                  if (r.S) {
                    var t = "default",
                      f = r.S[t];
                    if (f && f !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return r.S[t] = e, r.I(t, a)
                  }
                };
              r.d(a, {
                get: () => f,
                init: () => d
              })
            },
            29441(e) {
              "use strict";
              e.exports = r
            },
            25136(e) {
              "use strict";
              e.exports = t
            }
          },
          s = {};

        function b(e) {
          var a = s[e];
          if (void 0 !== a) return a.exports;
          var r = s[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return l[e].call(r.exports, r, r.exports, b), r.loaded = !0, r.exports
        }
        return b.m = l, b.c = s, b.y = a, b.amdO = {}, b.n = e => {
          var a = e && e.__esModule ? () => e.default : () => e;
          return b.d(a, {
            a
          }), a
        }, f = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, b.t = function(a, r) {
          if (1 & r && (a = this(a)), 8 & r) return a;
          if ("object" == typeof a && a) {
            if (4 & r && a.__esModule) return a;
            if (16 & r && "function" == typeof a.then) return a
          }
          var t = Object.create(null);
          b.r(t);
          var d = {};
          e = e || [null, f({}), f([]), f(f)];
          for (var c = 2 & r && a;
            ("object" == typeof c || "function" == typeof c) && !~e.indexOf(c); c = f(c)) Object.getOwnPropertyNames(c).forEach(e => d[e] = () => a[e]);
          return d.default = () => a, b.d(t, d), t
        }, b.d = (e, a) => {
          for (var r in a) b.o(a, r) && !b.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: a[r]
          })
        }, b.f = {}, b.e = e => Promise.all(Object.keys(b.f).reduce((a, r) => (b.f[r](e, a), a), [])), b.u = e => "js/" + {
          62: "11106e5961280e04b8d42e204045c31c",
          162: "b00f4ab5a5c9207f17fe23f8fbbe074a",
          447: "c12c3acff6b9ac52ffda13c1b990a9ce",
          622: "cb03051bcccef811ba5c67e301ad761f",
          649: "0c1a146ab597e595994d6399df5e6b39",
          698: "d27e575aa38632f28b4916905f1f73b9",
          799: "ccbdd32e3747f4ed4fa52fd35625b86b",
          883: "a448c756768024f0989664d3d0dee41e",
          939: "e37e9fd175b252ee260511df82e62ea1",
          986: "5c9a926d69fef38a014c10a284e82f67",
          1411: "502164fc612271cb1cdf3a45fc47aed2",
          1414: "75f4b84a0521151f2a8f02abfdfa9fc1",
          1462: "d00b5ffc61ea15c44692c982b9eaccf6",
          1924: "c87a21d2993d0e6c083dcfa30c796867",
          2032: "d3109b9e41f5695894453957e2f8ae92",
          2066: "c4b0cf3ba30cb03965484d948def12e9",
          2316: "7226d43b6add58676d9ee051e53003e2",
          2404: "d43b7ab374a940b2d8eb8bd81d676f94",
          2497: "62578a87f89397a498d263d7c4448954",
          2581: "9fade95c45842067bc02280555ff96ef",
          2760: "dbdfa53d3c1de5abe37fbc5e7a9bf474",
          2837: "fa6426bf38fc45f1bf02ddcf0a0100a5",
          2860: "f114c279776724d5de8215a3e01716c9",
          2951: "51d52fc092a490dc6a026a5ac826d59d",
          3171: "8e9940e2364f98c9f63d4a3efcb31937",
          3180: "71e2c9948a2a274dbf2897101842a622",
          3320: "d69e2657997b96d3e244fedc46d004ad",
          3406: "2be14dfe44b20c6ed85de261b4729c90",
          3600: "94428d8bc0de72106480ae7df5df6156",
          3631: "f93dcbad73dfd89442ceb719420eac74",
          3769: "9e56c0220d62359f1884974a10943d68",
          3792: "1de3178d557616e9c44442c892e81e12",
          3939: "0720680dfdd8e7124075f30e077dd578",
          4016: "161722b2e72ec9db2d4b46abdb2cf4f7",
          4053: "bab6cc71c35899a776ef1ee619d45d05",
          4144: "84b6e9447c85ea4df2836611b597990a",
          4235: "393c3c6302b5f974f5885287cef89890",
          4255: "c40fedb80f674ebcbe08c06f9fc96568",
          4269: "dd2960f8102bab7d931772ed7063cddc",
          4309: "a71fd5b3fe289855b9f1e3ffe3df19bb",
          4453: "46d8e69899bbeca9a1f621f4f001f6d9",
          4572: "73c67635733e340c0a0c67e317e1954d",
          4643: "162d07d9e6372b38508338ab6cea9aef",
          4756: "87618e9584631f57a167cb7546832cad",
          4815: "260267de696e796b93784f926257cb9e",
          4921: "6a0cf9135b4f705142f665aa0256c5ff",
          4974: "8170d5cb03dd0be897ba857a765954fd",
          5038: "2e14624cad5fb4481cb5945738bd0bae",
          5389: "b003dbe606cb83d98c3b7d9d989ec7c8",
          5505: "2b6ddfe1a0b54601779927f231a3f2fe",
          5811: "16236a487d14109ff98282ba3be52687",
          5829: "49a434b2a104004c1aabba196f187048",
          5847: "98b80b06eca32d86a9feb36ba4fae65c",
          5864: "97a7e89d2b0d1d230a58ca7e36fd305e",
          5997: "b7288f594d7ea4d2592d6baabc567b3e",
          6109: "0d9638bf65a9991caf81d4b83fa494a6",
          6150: "7ff5b5692c4742fa6a121347b1c4d96e",
          6241: "e95677c51d684d5d34c7a943fbcedc62",
          6320: "febf2641eb0c3da29e388b55f4a38568",
          6501: "bab7b9aee73660439445558acba30516",
          6583: "e3e8decfd45f5a9d52e3ce341ae804b9",
          6589: "390fdb5498864ee97913f952a271a5a2",
          6617: "3e39ca84e5ab85316a72715cbc324d6c",
          6685: "317cc2b88b0a78ef0c0482181f1f1602",
          6765: "b8adc9cf6bcec0bd748740be6cdd02b4",
          6903: "86b1893f33a7a65ea6c5ff954a6782c1",
          6932: "aad792a2cc00de0416d48e6b7e528a07",
          6936: "766674e700728f840cd55e6f37649f4a",
          7024: "df54e8e82b53ee6d20ec0ba3ca066075",
          7367: "b50bafcd331898b255ef4179d3535bd4",
          8349: "71ea0a849b2f03ba82a37ae06aec6496",
          8479: "ef6d1f11abfa74046401315f8309c4ad",
          8587: "1e9ead6e9df90b64f8599566ba1ecc72",
          8622: "d3b2b3bda75bef19a10d298c216cace4",
          8915: "c15332222195cb4ae3c217a4a8435e66",
          9062: "ff995de50542eab788e21becd947f552",
          9298: "b1534d288b551033a63eaa0a3cb8ec9b",
          9441: "4c490073da7b9aff3de3e768954f12ff",
          9447: "a5452e940a6b8a4430e62a9c6d8e3610",
          9511: "49269d75b79bd89e998903314b3914e6",
          9810: "d3d16049b32508bcc944a0661e3d3978",
          9822: "6aa011557ab967dd859cd14001c89de3",
          9947: "1b6e912c7cb8e9759239bb50fd59ad01",
          9988: "eefd392e058a6537ef315a09953417d4"
        } [e] + ".js", b.miniCssF = e => "css/" + {
          698: "79cfbfea4fb4517cc8a0596af5cd3e08",
          1089: "bfe4e4109fd9c58c236be27a4498cde6",
          1462: "6375eab2647ea5ee53b8db8ebc800a29",
          2860: "e7f1c6ad45574c02110cf2cba6265fb4",
          3351: "101537b924f4411033bd9d2d8536a01a",
          3631: "c5961ff45ab2f26ffb7e50308f79c617",
          3769: "384cddac2173849afd90c4a73e287f5e",
          4053: "ed3f109ca8e618a42129f11c50049888",
          4453: "915d373fd494468e9b0648f0fc1b6314",
          4643: "7c575cc0a210038808b12a81bf37629b",
          4852: "dd3dc51d96ce54cf1d6fc8fd4da5a62f",
          5811: "e291a59fad4af1c8e17af485bee174d3",
          5829: "bfe4e4109fd9c58c236be27a4498cde6",
          6150: "384cddac2173849afd90c4a73e287f5e",
          6685: "3fc7c2ca6fb3fd1af81b6b39098a274f",
          6903: "0e672e63f3950726b1d12db9d6af6da7",
          6936: "e79a4105235290f9d2d864ea28c87921",
          7024: "7c575cc0a210038808b12a81bf37629b",
          8248: "3a4070d4c77506d8955255a1ccc7b2a6",
          8587: "63de1640a21881ef00a13956465fdc14",
          9511: "0442df3ba84ee229e0291d807fa07623",
          9810: "90181f5f503830695ace14869df4afa3",
          9822: "c5961ff45ab2f26ffb7e50308f79c617"
        } [e] + ".css", b.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), b.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), d = {}, c = "@rockstargames/modules-core-newswire-article:", b.l = (e, a, r, t) => {
          if (d[e]) d[e].push(a);
          else {
            var f, n;
            if (void 0 !== r)
              for (var o = document.getElementsByTagName("script"), l = 0; l < o.length; l++) {
                var s = o[l];
                if (s.getAttribute("src") == e || s.getAttribute("data-webpack") == c + r) {
                  f = s;
                  break
                }
              }
            f || (n = !0, (f = document.createElement("script")).charset = "utf-8", b.nc && f.setAttribute("nonce", b.nc), f.setAttribute("data-webpack", c + r), f.src = e), d[e] = [a];
            var i = (a, r) => {
                f.onerror = f.onload = null, clearTimeout(u);
                var t = d[e];
                if (delete d[e], f.parentNode && f.parentNode.removeChild(f), t && t.forEach(e => e(r)), a) return a(r)
              },
              u = setTimeout(i.bind(null, void 0, {
                type: "timeout",
                target: f
              }), 12e4);
            f.onerror = i.bind(null, f.onerror), f.onload = i.bind(null, f.onload), n && document.head.appendChild(f)
          }
        }, b.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, b.nmd = e => (e.paths = [], e.children || (e.children = []), e), n = {
          6936: [64064],
          8248: [31879],
          9822: [11438, 17523, 44019, 83166]
        }, o = {
          11438: ["default", "./tinaBlockTemplates", 29441],
          17523: ["default", "./tina", 25136],
          31879: ["default", "./index", 25136],
          44019: ["default", "./tinaBlockTemplates", 25136],
          64064: ["default", "./index", 29441],
          83166: ["default", "./tina", 29441]
        }, b.f.remotes = (e, a) => {
          b.o(n, e) && n[e].forEach(e => {
            var r = b.R;
            r || (r = []);
            var t = o[e];
            if (!(r.indexOf(t) >= 0)) {
              if (r.push(t), t.p) return a.push(t.p);
              var f = a => {
                  a || (a = new Error("Container missing")), "string" == typeof a.message && (a.message += '\nwhile loading "' + t[1] + '" from ' + t[2]), b.m[e] = () => {
                    throw a
                  }, t.p = 0
                },
                d = (e, r, d, c, n, o) => {
                  try {
                    var l = e(r, d);
                    if (!l || !l.then) return n(l, c, o);
                    var s = l.then(e => n(e, c), f);
                    if (!o) return s;
                    a.push(t.p = s)
                  } catch (e) {
                    f(e)
                  }
                },
                c = (e, a, f) => d(a.get, t[1], r, 0, n, f),
                n = a => {
                  t.p = 1, b.m[e] = e => {
                    e.exports = a()
                  }
                };
              d(b, t[2], 0, 0, (e, a, r) => e ? d(b.I, t[0], 0, e, c, r) : f(), 1)
            }
          })
        }, (() => {
          b.S = {};
          var e = {},
            a = {};
          b.I = (r, t) => {
            t || (t = []);
            var f = a[r];
            if (f || (f = a[r] = {}), !(t.indexOf(f) >= 0)) {
              if (t.push(f), e[r]) return e[r];
              b.o(b.S, r) || (b.S[r] = {});
              var d = b.S[r],
                c = "@rockstargames/modules-core-newswire-article",
                n = (e, a, r, t) => {
                  var f = d[e] = d[e] || {},
                    n = f[a];
                  (!n || !n.loaded && (!t != !n.eager ? t : c > n.from)) && (f[a] = {
                    get: r,
                    from: c,
                    eager: !!t
                  })
                },
                o = e => {
                  var a = e => {
                    return a = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(a));
                    var a
                  };
                  try {
                    var f = b(e);
                    if (!f) return;
                    var d = e => e && e.init && e.init(b.S[r], t);
                    if (f.then) return l.push(f.then(d, a));
                    var c = d(f);
                    if (c && c.then) return l.push(c.catch(a))
                  } catch (e) {
                    a(e)
                  }
                },
                l = [];
              return "default" === r && (n("@foundry/react", "6.1.0", () => Promise.all([b.e(883), b.e(2951), b.e(6765), b.e(2497), b.e(2760), b.e(9511), b.e(8479), b.e(8587), b.e(3082), b.e(4017), b.e(1270), b.e(4643)]).then(() => () => b(8587))), n("@foundry/react", "6.1.0", () => Promise.all([b.e(883), b.e(2951), b.e(6765), b.e(2497), b.e(2760), b.e(1414), b.e(9511), b.e(8479), b.e(9441), b.e(698), b.e(5811), b.e(3082), b.e(4017), b.e(1270), b.e(7024)]).then(() => () => b(40698))), n("@rsgweb/locale-tools", "0.0.0", () => Promise.all([b.e(2497), b.e(3082), b.e(283), b.e(8622)]).then(() => () => b(68403))), n("@rsgweb/modules-core-carousel", "0.0.0", () => Promise.all([b.e(883), b.e(2951), b.e(6765), b.e(2760), b.e(3600), b.e(1414), b.e(3082), b.e(4017), b.e(3331), b.e(1270), b.e(4453), b.e(3351), b.e(3631)]).then(() => () => b(42066))), n("@rsgweb/modules-core-engagement", "0.0.0", () => Promise.all([b.e(883), b.e(6765), b.e(2760), b.e(3600), b.e(4815), b.e(1462), b.e(3082), b.e(4017), b.e(283), b.e(3331), b.e(2909), b.e(1270), b.e(6416), b.e(2199), b.e(7301), b.e(2285), b.e(4255), b.e(9810), b.e(5829)]).then(() => () => b(28699))), n("@rsgweb/modules-core-group-of-items", "0.0.0", () => Promise.all([b.e(883), b.e(2951), b.e(6765), b.e(3600), b.e(1414), b.e(3082), b.e(4017), b.e(3331), b.e(1270), b.e(4453), b.e(7301), b.e(8248), b.e(2860)]).then(() => () => b(44053))), n("@rsgweb/modules-core-highlights", "0.0.0", () => Promise.all([b.e(3600), b.e(4815), b.e(3082), b.e(2909), b.e(2199), b.e(7301), b.e(2285), b.e(4852), b.e(3792)]).then(() => () => b(83792))), n("@rsgweb/rockstar-account", "0.0.0", () => Promise.all([b.e(5864), b.e(6583), b.e(3082), b.e(283), b.e(3331), b.e(2909), b.e(6416), b.e(5997), b.e(799)]).then(() => () => b(90799))), n("@rsgweb/tina", "0.0.0", () => Promise.all([b.e(883), b.e(986), b.e(4309), b.e(8349), b.e(3082), b.e(4017), b.e(283), b.e(3331), b.e(2909), b.e(2199), b.e(6589), b.e(6150)]).then(() => () => b(60620))), n("@rsgweb/utils", "0.0.0-development", () => Promise.all([b.e(5864), b.e(9988), b.e(3082), b.e(283), b.e(2909), b.e(6416), b.e(5997), b.e(5847), b.e(3320)]).then(() => () => b(83320))), n("clsx", "2.1.1", () => b.e(4921).then(() => () => b(4921))), n("dompurify", "2.5.9", () => b.e(62).then(() => () => b(50062))), n("lodash-es", "4.18.1", () => Promise.all([b.e(4309), b.e(5505)]).then(() => () => b(65505))), n("react-dom", "18.3.1", () => Promise.all([b.e(162), b.e(3082)]).then(() => () => b(30162))), n("react-intersection-observer", "9.16.0", () => Promise.all([b.e(3082), b.e(6320)]).then(() => () => b(26320))), n("react-jsx-parser", "2.4.1", () => Promise.all([b.e(6932), b.e(3082)]).then(() => () => b(76932))), n("react-router-dom", "6.30.3", () => Promise.all([b.e(4269), b.e(3082), b.e(4017)]).then(() => () => b(74269))), n("react", "18.3.1", () => b.e(2581).then(() => () => b(22581))), n("text-balancer", "1.0.5", () => b.e(4016).then(() => () => b(34016))), o(25136), o(29441)), l.length ? e[r] = Promise.all(l).then(() => e[r] = 1) : e[r] = 1
            }
          }
        })(), (() => {
          var e;
          b.g.importScripts && (e = b.g.location + "");
          var a = b.g.document;
          if (!e && a && (a.currentScript && "SCRIPT" === a.currentScript.tagName.toUpperCase() && (e = a.currentScript.src), !e)) {
            var r = a.getElementsByTagName("script");
            if (r.length)
              for (var t = r.length - 1; t > -1 && (!e || !/^http(s?):/.test(e));) e = r[t--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), b.p = e
        })(), (() => {
          var e = e => {
              var a = e => e.split(".").map(e => +e == e ? +e : e),
                r = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
                t = r[1] ? a(r[1]) : [];
              return r[2] && (t.length++, t.push.apply(t, a(r[2]))), r[3] && (t.push([]), t.push.apply(t, a(r[3]))), t
            },
            a = e => {
              var r = e[0],
                t = "";
              if (1 === e.length) return "*";
              if (r + .5) {
                t += 0 == r ? ">=" : -1 == r ? "<" : 1 == r ? "^" : 2 == r ? "~" : r > 0 ? "=" : "!=";
                for (var f = 1, d = 1; d < e.length; d++) f--, t += "u" == (typeof(n = e[d]))[0] ? "-" : (f > 0 ? "." : "") + (f = 2, n);
                return t
              }
              var c = [];
              for (d = 1; d < e.length; d++) {
                var n = e[d];
                c.push(0 === n ? "not(" + o() + ")" : 1 === n ? "(" + o() + " || " + o() + ")" : 2 === n ? c.pop() + " " + c.pop() : a(n))
              }
              return o();

              function o() {
                return c.pop().replace(/^\((.+)\)$/, "$1")
              }
            },
            r = (a, t) => {
              if (0 in a) {
                t = e(t);
                var f = a[0],
                  d = f < 0;
                d && (f = -f - 1);
                for (var c = 0, n = 1, o = !0;; n++, c++) {
                  var l, s, b = n < a.length ? (typeof a[n])[0] : "";
                  if (c >= t.length || "o" == (s = (typeof(l = t[c]))[0])) return !o || ("u" == b ? n > f && !d : "" == b != d);
                  if ("u" == s) {
                    if (!o || "u" != b) return !1
                  } else if (o)
                    if (b == s)
                      if (n <= f) {
                        if (l != a[n]) return !1
                      } else {
                        if (d ? l > a[n] : l < a[n]) return !1;
                        l != a[n] && (o = !1)
                      }
                  else if ("s" != b && "n" != b) {
                    if (d || n <= f) return !1;
                    o = !1, n--
                  } else {
                    if (n <= f || s < b != d) return !1;
                    o = !1
                  } else "s" != b && "n" != b && (o = !1, n--)
                }
              }
              var i = [],
                u = i.pop.bind(i);
              for (c = 1; c < a.length; c++) {
                var h = a[c];
                i.push(1 == h ? u() | u() : 2 == h ? u() & u() : h ? r(h, t) : !u())
              }
              return !!u()
            },
            t = (a, r, t) => {
              var f = t ? (e => Object.keys(e).reduce((a, r) => (e[r].eager && (a[r] = e[r]), a), {}))(a[r]) : a[r];
              return Object.keys(f).reduce((a, r) => !a || !f[a].loaded && ((a, r) => {
                a = e(a), r = e(r);
                for (var t = 0;;) {
                  if (t >= a.length) return t < r.length && "u" != (typeof r[t])[0];
                  var f = a[t],
                    d = (typeof f)[0];
                  if (t >= r.length) return "u" == d;
                  var c = r[t],
                    n = (typeof c)[0];
                  if (d != n) return "o" == d && "n" == n || "s" == n || "u" == d;
                  if ("o" != d && "u" != d && f != c) return f < c;
                  t++
                }
              })(a, r) ? r : a, 0)
            },
            f = (e, a, r) => r ? r() : ((e, a) => (e => {
              throw new Error(e)
            })("Shared module " + a + " doesn't exist in shared scope " + e))(e, a),
            d = (e => function(a, r, t, f, d) {
              var c = b.I(a);
              return c && c.then && !t ? c.then(e.bind(e, a, b.S[a], r, !1, f, d)) : e(a, b.S[a], r, t, f, d)
            })((e, d, c, n, o, l) => {
              if (!((e, a) => e && b.o(e, a))(d, c)) return f(e, c, l);
              var s, i, u = t(d, c, n);
              return r(o, u) || (i = ((e, r, t, f) => "Unsatisfied version " + t + " from " + (t && e[r][t].from) + " of shared singleton module " + r + " (required " + a(f) + ")")(d, c, u, o), "undefined" != typeof console && console.warn && console.warn(i)), (s = d[c][u]).loaded = 1, s.get()
            }),
            c = {},
            n = {
              93082: () => d("default", "react", !1, [0], () => b.e(2581).then(() => () => b(22581))),
              84017: () => d("default", "react-dom", !1, [1, 18, 2, 0], () => b.e(162).then(() => () => b(30162))),
              40283: () => d("default", "lodash-es", !1, [0], () => Promise.all([b.e(4309), b.e(5505)]).then(() => () => b(65505))),
              13331: () => d("default", "@rsgweb/utils", !1, [0], () => Promise.all([b.e(5864), b.e(9988), b.e(283), b.e(2909), b.e(6416), b.e(5997), b.e(5847), b.e(939)]).then(() => () => b(83320))),
              42909: () => d("default", "@rsgweb/locale-tools", !1, [0], () => Promise.all([b.e(2497), b.e(283), b.e(6241)]).then(() => () => b(68403))),
              81270: () => d("default", "clsx", !1, [1, 2, 1, 1], () => b.e(4921).then(() => () => b(4921))),
              36416: () => d("default", "react-router-dom", !1, [0], () => Promise.all([b.e(4269), b.e(4017)]).then(() => () => b(74269))),
              82199: () => d("default", "@rsgweb/rockstar-account", !1, [0], () => Promise.all([b.e(5864), b.e(6583), b.e(283), b.e(3331), b.e(6416), b.e(5997), b.e(3180)]).then(() => () => b(90799))),
              17301: () => d("default", "@rsgweb/tina", !1, [0], () => Promise.all([b.e(883), b.e(986), b.e(4309), b.e(8349), b.e(4017), b.e(283), b.e(3331), b.e(2909), b.e(2199), b.e(6589), b.e(3769)]).then(() => () => b(60620))),
              91681: () => d("default", "dompurify", !1, [1, 2, 5, 9], () => b.e(62).then(() => () => b(50062))),
              42285: () => d("default", "react-intersection-observer", !1, [1, 9, 16, 0], () => b.e(3939).then(() => () => b(26320))),
              31655: () => d("default", "@foundry/react", !1, [0], () => Promise.all([b.e(2951), b.e(2497), b.e(9511), b.e(8479), b.e(8587)]).then(() => () => b(8587))),
              10475: () => d("default", "@rsgweb/modules-core-highlights", !1, [0], () => Promise.all([b.e(4852), b.e(1411)]).then(() => () => b(83792))),
              35643: () => d("default", "@rsgweb/modules-core-carousel", !1, [0], () => Promise.all([b.e(3351), b.e(2066)]).then(() => () => b(42066))),
              59139: () => d("default", "@rsgweb/modules-core-engagement", !1, [0], () => Promise.all([b.e(4255), b.e(1089)]).then(() => () => b(28699))),
              72527: () => d("default", "@rsgweb/modules-core-group-of-items", !1, [0], () => b.e(4053).then(() => () => b(44053))),
              74645: () => d("default", "@foundry/react", !1, [0], () => Promise.all([b.e(2497), b.e(9511), b.e(698)]).then(() => () => b(40698))),
              87486: () => d("default", "text-balancer", !1, [1, 1, 0, 5], () => b.e(4016).then(() => () => b(34016))),
              92910: () => d("default", "react-jsx-parser", !1, [1, 2, 4, 1], () => b.e(6932).then(() => () => b(76932)))
            },
            o = {
              283: [40283],
              1270: [81270],
              2199: [82199],
              2285: [42285],
              2909: [42909],
              3082: [93082],
              3331: [13331],
              4017: [84017],
              6416: [36416],
              6685: [10475, 35643, 59139, 72527, 74645, 87486, 92910],
              7301: [17301],
              8248: [91681],
              9810: [31655]
            },
            l = {};
          b.f.consumes = (e, a) => {
            b.o(o, e) && o[e].forEach(e => {
              if (b.o(c, e)) return a.push(c[e]);
              if (!l[e]) {
                var r = a => {
                  c[e] = 0, b.m[e] = r => {
                    delete b.c[e], r.exports = a()
                  }
                };
                l[e] = !0;
                var t = a => {
                  delete c[e], b.m[e] = r => {
                    throw delete b.c[e], a
                  }
                };
                try {
                  var f = n[e]();
                  f.then ? a.push(c[e] = f.then(r).catch(t)) : r(f)
                } catch (e) {
                  t(e)
                }
              }
            })
          }
        })(), (() => {
          if ("undefined" != typeof document) {
            var e = {
              6947: 0
            };
            b.f.miniCss = (a, r) => {
              e[a] ? r.push(e[a]) : 0 !== e[a] && {
                698: 1,
                1089: 1,
                1462: 1,
                2860: 1,
                3351: 1,
                3631: 1,
                3769: 1,
                4053: 1,
                4453: 1,
                4643: 1,
                4852: 1,
                5811: 1,
                5829: 1,
                6150: 1,
                6685: 1,
                6903: 1,
                6936: 1,
                7024: 1,
                8248: 1,
                8587: 1,
                9511: 1,
                9810: 1,
                9822: 1
              } [a] && r.push(e[a] = (e => new Promise((a, r) => {
                var t = b.miniCssF(e),
                  f = b.p + t;
                if (((e, a) => {
                    for (var r = document.getElementsByTagName("link"), t = 0; t < r.length; t++) {
                      var f = (c = r[t]).getAttribute("data-href") || c.getAttribute("href");
                      if ("stylesheet" === c.rel && (f === e || f === a)) return c
                    }
                    var d = document.getElementsByTagName("style");
                    for (t = 0; t < d.length; t++) {
                      var c;
                      if ((f = (c = d[t]).getAttribute("data-href")) === e || f === a) return c
                    }
                  })(t, f)) return a();
                ((e, a, r, t, f) => {
                  var d = document.createElement("link");
                  d.rel = "stylesheet", d.type = "text/css", b.nc && (d.nonce = b.nc), d.onerror = d.onload = r => {
                    if (d.onerror = d.onload = null, "load" === r.type) t();
                    else {
                      var c = r && r.type,
                        n = r && r.target && r.target.href || a,
                        o = new Error("Loading CSS chunk " + e + " failed.\n(" + c + ": " + n + ")");
                      o.name = "ChunkLoadError", o.code = "CSS_CHUNK_LOAD_FAILED", o.type = c, o.request = n, d.parentNode && d.parentNode.removeChild(d), f(o)
                    }
                  }, d.href = a, document.head.appendChild(d)
                })(e, f, 0, a, r)
              }))(a).then(() => {
                e[a] = 0
              }, r => {
                throw delete e[a], r
              }))
            }
          }
        })(), (() => {
          var e = {
            6947: 0
          };
          b.f.j = (a, r) => {
            var t = b.o(e, a) ? e[a] : void 0;
            if (0 !== t)
              if (t) r.push(t[2]);
              else if (/^(2(199|285|83|909)|3(082|331|351)|1089|1270|4017|4852|6416|7301|8248)$/.test(a)) e[a] = 0;
            else {
              var f = new Promise((r, f) => t = e[a] = [r, f]);
              r.push(t[2] = f);
              var d = b.p + b.u(a),
                c = new Error;
              b.l(d, r => {
                if (b.o(e, a) && (0 !== (t = e[a]) && (e[a] = void 0), t)) {
                  var f = r && ("load" === r.type ? "missing" : r.type),
                    d = r && r.target && r.target.src;
                  c.message = "Loading chunk " + a + " failed.\n(" + f + ": " + d + ")", c.name = "ChunkLoadError", c.type = f, c.request = d, t[1](c)
                }
              }, "chunk-" + a, a)
            }
          };
          var a = (a, r) => {
              var t, f, [d, c, n] = r,
                o = 0;
              if (d.some(a => 0 !== e[a])) {
                for (t in c) b.o(c, t) && (b.m[t] = c[t]);
                n && n(b)
              }
              for (a && a(r); o < d.length; o++) f = d[o], b.o(e, f) && e[f] && e[f][0](), e[f] = 0
            },
            r = self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || [];
          r.forEach(a.bind(null, 0)), r.push = a.bind(null, r.push.bind(r))
        })(), b.nc = void 0, b(35649), b(55974)
      })())
    }
  }
});