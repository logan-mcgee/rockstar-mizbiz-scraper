try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "96de6352-7d17-4de8-8983-095307059d63", e._sentryDebugIdIdentifier = "sentry-dbid-96de6352-7d17-4de8-8983-095307059d63")
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

        function i(e) {
          var a = s[e];
          if (void 0 !== a) return a.exports;
          var r = s[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return l[e].call(r.exports, r, r.exports, i), r.loaded = !0, r.exports
        }
        return i.m = l, i.c = s, i.y = a, i.amdO = {}, i.n = e => {
          var a = e && e.__esModule ? () => e.default : () => e;
          return i.d(a, {
            a
          }), a
        }, f = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, i.t = function(a, r) {
          if (1 & r && (a = this(a)), 8 & r) return a;
          if ("object" == typeof a && a) {
            if (4 & r && a.__esModule) return a;
            if (16 & r && "function" == typeof a.then) return a
          }
          var t = Object.create(null);
          i.r(t);
          var d = {};
          e = e || [null, f({}), f([]), f(f)];
          for (var c = 2 & r && a;
            ("object" == typeof c || "function" == typeof c) && !~e.indexOf(c); c = f(c)) Object.getOwnPropertyNames(c).forEach(e => d[e] = () => a[e]);
          return d.default = () => a, i.d(t, d), t
        }, i.d = (e, a) => {
          for (var r in a) i.o(a, r) && !i.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: a[r]
          })
        }, i.f = {}, i.e = e => Promise.all(Object.keys(i.f).reduce((a, r) => (i.f[r](e, a), a), [])), i.u = e => "js/" + {
          62: "8de0e561c54f0cd99a6075c3dc022f2e",
          162: "0cb805832bba6245607bb6021f909add",
          447: "d527448e766c7016375914793cb3405a",
          622: "d0820113a584876b48c1ed73fa23f726",
          649: "f5bb10cd6bf55b1d0369f5887ff6334a",
          698: "b2b58c6bf66d537d10913e24c257ba45",
          799: "32cef52b3ac2fc87edebef0c21cb8b4a",
          883: "d90295356c937d21ded356facd9fa365",
          939: "422016cd3ad1f0d7d13d10ecd063ae5f",
          986: "9dedcb905ecaabab837977ffc897ee12",
          1411: "888db4537b23078b90b21af0851ef296",
          1414: "b39be76bc6ffebcda3c785e8bc3f5545",
          1462: "230ea9653933028aca0f6696948a3ac0",
          1924: "a911f231f46eff35459bfee4f28f3806",
          2032: "08c3bb9405d075170b0ff31ef5431481",
          2066: "0616c12539f44ffe84539b40fcc73f95",
          2316: "f501527a0a22e775048490f59b618369",
          2404: "8982943788c867e272d5bfcba687b9b7",
          2497: "7cde866d87f787da5839361d6d63fd08",
          2581: "c6269edcb7326b7d52d940b3ffbdec37",
          2760: "dc8bedd9a8ddf55f08936cf40fb99023",
          2837: "783f6f691205ebab44cfa8ce97aceaef",
          2860: "c8b13241770c716b25b65fc364e79604",
          2951: "afda87342af776e41b7cabc247c033d1",
          3171: "eb172aeecf1a54bc6bb2418ddd472a7b",
          3180: "d93edbf89680c9be76a0816bf0a8b288",
          3320: "026e4bc458bdad4cc8866d9f8a506d2a",
          3406: "3179abef4777961347440e6138771f22",
          3600: "f812928476dc4acce2bc8af8907208df",
          3631: "b2ffdd47f7c4213ab749a08fa4c1b50d",
          3769: "c2adf81e8eb59721d47fd0469cf61892",
          3792: "a2444f98139a187b8da53c2f27134db2",
          3939: "26d824555888c9681390ec39cdbf2b01",
          4016: "a844a045e20322e6b191a36044dfc6b6",
          4053: "bbb8da1ae2c2bfa03c24631c4ad4db2f",
          4144: "7841b5b154cc83191efcda28a52f4c11",
          4235: "77d2dcdeb563fabf401c35680a6cc886",
          4255: "aaa9fc758f88e11f00ac5f236daa55b5",
          4269: "60369029f9828678d0cdc3b8c824cfc9",
          4309: "01b4b798097cb04adcb201b09c0a6978",
          4453: "944a7a37956008aa0a5584fda8f7ec1d",
          4572: "ac8b6b45244c70dee2425b1a2a40d3fd",
          4643: "75e0fd19f8d4d24656f61c956de055c6",
          4756: "6b69f16335f1c118bd5e40beafb512bc",
          4815: "dd6ae633b26e7fa7d6f74bd087517ba1",
          4921: "920954a723b929919fb18a3fa1a97c4d",
          4974: "cf8f86c507241bdc32fbdd711541d79d",
          5038: "0d5b707f06ced0207667a8c6bd3dbd5a",
          5389: "bb7f8ab5afb24399b089c4233325665e",
          5505: "d2df6b41c68c4f5b19227c87355c64a1",
          5811: "7267789b00dde9c337fd6e136515d1bd",
          5829: "2d0d779c129c0ceed91148a0e6f936cd",
          5847: "6efa32f9c83bf116640fcbc1946976ab",
          5864: "b6681f211e9f1ed1a768b8422ba724cc",
          5997: "99cca0e2a4d1221358d362eff8a001a4",
          6109: "7b59bc5c4282ec05b5038c8a442d8e8d",
          6150: "20d3279387a6ad353b9a4b426fe5828d",
          6241: "4b0d1d491b9ef0674f149821ca017a43",
          6320: "9e2d46b58e0ee75154dac300bb843859",
          6501: "c370f2abb41fec8c917af4bea4244093",
          6583: "9815a52fd0b9672ffbe35d67545469a4",
          6589: "64b787efa4ba0904a3455a8b1ee353e9",
          6617: "518adad8f7c6a4915c08f6e574d3b03a",
          6685: "b72e2b2c66f6d6820fdce830d862492f",
          6765: "492ba2e75ca5ea535e01e2cadd3612cf",
          6903: "dfe68fd266918b6609c7779a91182d00",
          6932: "6458c7857fe9e676c48db3c21b6f3d5f",
          6936: "980d63bf636e1dc3a4a3665c6226f237",
          7024: "6aded26eee4f7843bfddde4dfabbccbe",
          7367: "5b5c3ea928e01208c909d5c71a39dac1",
          8349: "f24bbd07ad00472a25f0c83e53a855c7",
          8479: "b92e0d9164de494084d441f308268c4d",
          8587: "7c93ae8642e7052faef3bd55c8ec9112",
          8622: "8ca06bf2115ee6a10caa5ee1a3bf42bd",
          8915: "544118f43b2352815c54bd01477fdddf",
          9062: "03a38e505217d8a267f3d4f55819e43e",
          9298: "a45732f11eb6030ee59ca5cdc0d8ee98",
          9441: "0ebdcc8d3797d78638e5cedb1faeac76",
          9447: "e24dd03370748ace704cc2340d5dbfe1",
          9511: "6f5c52705bb543927c3e3b1ceade1434",
          9810: "f7ef76caff5f6eed963e41a0d626881a",
          9822: "b9e1682b47663a2a55f3041ebff06d11",
          9947: "cc6e227e5fd7166a8e9e22126b5393e0",
          9988: "7449d12fe6c813a3a132bdbaf1f9fc8c"
        } [e] + ".js", i.miniCssF = e => "css/" + {
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
        } [e] + ".css", i.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), i.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), d = {}, c = "@rockstargames/modules-core-newswire-article:", i.l = (e, a, r, t) => {
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
            f || (n = !0, (f = document.createElement("script")).charset = "utf-8", i.nc && f.setAttribute("nonce", i.nc), f.setAttribute("data-webpack", c + r), f.src = e), d[e] = [a];
            var b = (a, r) => {
                f.onerror = f.onload = null, clearTimeout(u);
                var t = d[e];
                if (delete d[e], f.parentNode && f.parentNode.removeChild(f), t && t.forEach(e => e(r)), a) return a(r)
              },
              u = setTimeout(b.bind(null, void 0, {
                type: "timeout",
                target: f
              }), 12e4);
            f.onerror = b.bind(null, f.onerror), f.onload = b.bind(null, f.onload), n && document.head.appendChild(f)
          }
        }, i.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, i.nmd = e => (e.paths = [], e.children || (e.children = []), e), n = {
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
        }, i.f.remotes = (e, a) => {
          i.o(n, e) && n[e].forEach(e => {
            var r = i.R;
            r || (r = []);
            var t = o[e];
            if (!(r.indexOf(t) >= 0)) {
              if (r.push(t), t.p) return a.push(t.p);
              var f = a => {
                  a || (a = new Error("Container missing")), "string" == typeof a.message && (a.message += '\nwhile loading "' + t[1] + '" from ' + t[2]), i.m[e] = () => {
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
                  t.p = 1, i.m[e] = e => {
                    e.exports = a()
                  }
                };
              d(i, t[2], 0, 0, (e, a, r) => e ? d(i.I, t[0], 0, e, c, r) : f(), 1)
            }
          })
        }, (() => {
          i.S = {};
          var e = {},
            a = {};
          i.I = (r, t) => {
            t || (t = []);
            var f = a[r];
            if (f || (f = a[r] = {}), !(t.indexOf(f) >= 0)) {
              if (t.push(f), e[r]) return e[r];
              i.o(i.S, r) || (i.S[r] = {});
              var d = i.S[r],
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
                    var f = i(e);
                    if (!f) return;
                    var d = e => e && e.init && e.init(i.S[r], t);
                    if (f.then) return l.push(f.then(d, a));
                    var c = d(f);
                    if (c && c.then) return l.push(c.catch(a))
                  } catch (e) {
                    a(e)
                  }
                },
                l = [];
              return "default" === r && (n("@foundry/react", "6.1.0", () => Promise.all([i.e(883), i.e(2951), i.e(6765), i.e(2497), i.e(2760), i.e(9511), i.e(8479), i.e(8587), i.e(3082), i.e(4017), i.e(1270), i.e(4643)]).then(() => () => i(8587))), n("@foundry/react", "6.1.0", () => Promise.all([i.e(883), i.e(2951), i.e(6765), i.e(2497), i.e(2760), i.e(1414), i.e(9511), i.e(8479), i.e(9441), i.e(698), i.e(5811), i.e(3082), i.e(4017), i.e(1270), i.e(7024)]).then(() => () => i(40698))), n("@rsgweb/locale-tools", "0.0.0", () => Promise.all([i.e(2497), i.e(3082), i.e(283), i.e(8622)]).then(() => () => i(68403))), n("@rsgweb/modules-core-carousel", "0.0.0", () => Promise.all([i.e(883), i.e(2951), i.e(6765), i.e(2760), i.e(3600), i.e(1414), i.e(3082), i.e(4017), i.e(3331), i.e(1270), i.e(4453), i.e(3351), i.e(3631)]).then(() => () => i(42066))), n("@rsgweb/modules-core-engagement", "0.0.0", () => Promise.all([i.e(883), i.e(6765), i.e(2760), i.e(3600), i.e(4815), i.e(1462), i.e(3082), i.e(4017), i.e(283), i.e(3331), i.e(2909), i.e(1270), i.e(6416), i.e(2199), i.e(7301), i.e(2285), i.e(4255), i.e(9810), i.e(5829)]).then(() => () => i(28699))), n("@rsgweb/modules-core-group-of-items", "0.0.0", () => Promise.all([i.e(883), i.e(2951), i.e(6765), i.e(3600), i.e(1414), i.e(3082), i.e(4017), i.e(3331), i.e(1270), i.e(4453), i.e(7301), i.e(8248), i.e(2860)]).then(() => () => i(44053))), n("@rsgweb/modules-core-highlights", "0.0.0", () => Promise.all([i.e(3600), i.e(4815), i.e(3082), i.e(2909), i.e(2199), i.e(7301), i.e(2285), i.e(4852), i.e(3792)]).then(() => () => i(83792))), n("@rsgweb/rockstar-account", "0.0.0", () => Promise.all([i.e(5864), i.e(6583), i.e(3082), i.e(283), i.e(3331), i.e(2909), i.e(6416), i.e(5997), i.e(799)]).then(() => () => i(90799))), n("@rsgweb/tina", "0.0.0", () => Promise.all([i.e(883), i.e(986), i.e(4309), i.e(8349), i.e(3082), i.e(4017), i.e(283), i.e(3331), i.e(2909), i.e(2199), i.e(6589), i.e(6150)]).then(() => () => i(60620))), n("@rsgweb/utils", "0.0.0-development", () => Promise.all([i.e(5864), i.e(9988), i.e(3082), i.e(283), i.e(2909), i.e(6416), i.e(5997), i.e(5847), i.e(3320)]).then(() => () => i(83320))), n("clsx", "2.1.1", () => i.e(4921).then(() => () => i(4921))), n("dompurify", "2.5.9", () => i.e(62).then(() => () => i(50062))), n("lodash-es", "4.18.1", () => Promise.all([i.e(4309), i.e(5505)]).then(() => () => i(65505))), n("react-dom", "18.3.1", () => Promise.all([i.e(162), i.e(3082)]).then(() => () => i(30162))), n("react-intersection-observer", "9.16.0", () => Promise.all([i.e(3082), i.e(6320)]).then(() => () => i(26320))), n("react-jsx-parser", "2.4.1", () => Promise.all([i.e(6932), i.e(3082)]).then(() => () => i(76932))), n("react-router-dom", "6.30.3", () => Promise.all([i.e(4269), i.e(3082), i.e(4017)]).then(() => () => i(74269))), n("react", "18.3.1", () => i.e(2581).then(() => () => i(22581))), n("text-balancer", "1.0.5", () => i.e(4016).then(() => () => i(34016))), o(25136), o(29441)), l.length ? e[r] = Promise.all(l).then(() => e[r] = 1) : e[r] = 1
            }
          }
        })(), (() => {
          var e;
          i.g.importScripts && (e = i.g.location + "");
          var a = i.g.document;
          if (!e && a && (a.currentScript && "SCRIPT" === a.currentScript.tagName.toUpperCase() && (e = a.currentScript.src), !e)) {
            var r = a.getElementsByTagName("script");
            if (r.length)
              for (var t = r.length - 1; t > -1 && (!e || !/^http(s?):/.test(e));) e = r[t--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), i.p = e
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
                  var l, s, i = n < a.length ? (typeof a[n])[0] : "";
                  if (c >= t.length || "o" == (s = (typeof(l = t[c]))[0])) return !o || ("u" == i ? n > f && !d : "" == i != d);
                  if ("u" == s) {
                    if (!o || "u" != i) return !1
                  } else if (o)
                    if (i == s)
                      if (n <= f) {
                        if (l != a[n]) return !1
                      } else {
                        if (d ? l > a[n] : l < a[n]) return !1;
                        l != a[n] && (o = !1)
                      }
                  else if ("s" != i && "n" != i) {
                    if (d || n <= f) return !1;
                    o = !1, n--
                  } else {
                    if (n <= f || s < i != d) return !1;
                    o = !1
                  } else "s" != i && "n" != i && (o = !1, n--)
                }
              }
              var b = [],
                u = b.pop.bind(b);
              for (c = 1; c < a.length; c++) {
                var h = a[c];
                b.push(1 == h ? u() | u() : 2 == h ? u() & u() : h ? r(h, t) : !u())
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
              var c = i.I(a);
              return c && c.then && !t ? c.then(e.bind(e, a, i.S[a], r, !1, f, d)) : e(a, i.S[a], r, t, f, d)
            })((e, d, c, n, o, l) => {
              if (!((e, a) => e && i.o(e, a))(d, c)) return f(e, c, l);
              var s, b, u = t(d, c, n);
              return r(o, u) || (b = ((e, r, t, f) => "Unsatisfied version " + t + " from " + (t && e[r][t].from) + " of shared singleton module " + r + " (required " + a(f) + ")")(d, c, u, o), "undefined" != typeof console && console.warn && console.warn(b)), (s = d[c][u]).loaded = 1, s.get()
            }),
            c = {},
            n = {
              93082: () => d("default", "react", !1, [0], () => i.e(2581).then(() => () => i(22581))),
              84017: () => d("default", "react-dom", !1, [1, 18, 2, 0], () => i.e(162).then(() => () => i(30162))),
              40283: () => d("default", "lodash-es", !1, [0], () => Promise.all([i.e(4309), i.e(5505)]).then(() => () => i(65505))),
              13331: () => d("default", "@rsgweb/utils", !1, [0], () => Promise.all([i.e(5864), i.e(9988), i.e(283), i.e(2909), i.e(6416), i.e(5997), i.e(5847), i.e(939)]).then(() => () => i(83320))),
              42909: () => d("default", "@rsgweb/locale-tools", !1, [0], () => Promise.all([i.e(2497), i.e(283), i.e(6241)]).then(() => () => i(68403))),
              81270: () => d("default", "clsx", !1, [1, 2, 1, 1], () => i.e(4921).then(() => () => i(4921))),
              36416: () => d("default", "react-router-dom", !1, [0], () => Promise.all([i.e(4269), i.e(4017)]).then(() => () => i(74269))),
              82199: () => d("default", "@rsgweb/rockstar-account", !1, [0], () => Promise.all([i.e(5864), i.e(6583), i.e(283), i.e(3331), i.e(6416), i.e(5997), i.e(3180)]).then(() => () => i(90799))),
              17301: () => d("default", "@rsgweb/tina", !1, [0], () => Promise.all([i.e(883), i.e(986), i.e(4309), i.e(8349), i.e(4017), i.e(283), i.e(3331), i.e(2909), i.e(2199), i.e(6589), i.e(3769)]).then(() => () => i(60620))),
              91681: () => d("default", "dompurify", !1, [1, 2, 5, 9], () => i.e(62).then(() => () => i(50062))),
              42285: () => d("default", "react-intersection-observer", !1, [1, 9, 16, 0], () => i.e(3939).then(() => () => i(26320))),
              31655: () => d("default", "@foundry/react", !1, [0], () => Promise.all([i.e(2951), i.e(2497), i.e(9511), i.e(8479), i.e(8587)]).then(() => () => i(8587))),
              10475: () => d("default", "@rsgweb/modules-core-highlights", !1, [0], () => Promise.all([i.e(4852), i.e(1411)]).then(() => () => i(83792))),
              35643: () => d("default", "@rsgweb/modules-core-carousel", !1, [0], () => Promise.all([i.e(3351), i.e(2066)]).then(() => () => i(42066))),
              59139: () => d("default", "@rsgweb/modules-core-engagement", !1, [0], () => Promise.all([i.e(4255), i.e(1089)]).then(() => () => i(28699))),
              72527: () => d("default", "@rsgweb/modules-core-group-of-items", !1, [0], () => i.e(4053).then(() => () => i(44053))),
              74645: () => d("default", "@foundry/react", !1, [0], () => Promise.all([i.e(2497), i.e(9511), i.e(698)]).then(() => () => i(40698))),
              87486: () => d("default", "text-balancer", !1, [1, 1, 0, 5], () => i.e(4016).then(() => () => i(34016))),
              92910: () => d("default", "react-jsx-parser", !1, [1, 2, 4, 1], () => i.e(6932).then(() => () => i(76932)))
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
          i.f.consumes = (e, a) => {
            i.o(o, e) && o[e].forEach(e => {
              if (i.o(c, e)) return a.push(c[e]);
              if (!l[e]) {
                var r = a => {
                  c[e] = 0, i.m[e] = r => {
                    delete i.c[e], r.exports = a()
                  }
                };
                l[e] = !0;
                var t = a => {
                  delete c[e], i.m[e] = r => {
                    throw delete i.c[e], a
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
            i.f.miniCss = (a, r) => {
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
                var t = i.miniCssF(e),
                  f = i.p + t;
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
                  d.rel = "stylesheet", d.type = "text/css", i.nc && (d.nonce = i.nc), d.onerror = d.onload = r => {
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
          i.f.j = (a, r) => {
            var t = i.o(e, a) ? e[a] : void 0;
            if (0 !== t)
              if (t) r.push(t[2]);
              else if (/^(2(199|285|83|909)|3(082|331|351)|1089|1270|4017|4852|6416|7301|8248)$/.test(a)) e[a] = 0;
            else {
              var f = new Promise((r, f) => t = e[a] = [r, f]);
              r.push(t[2] = f);
              var d = i.p + i.u(a),
                c = new Error;
              i.l(d, r => {
                if (i.o(e, a) && (0 !== (t = e[a]) && (e[a] = void 0), t)) {
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
                for (t in c) i.o(c, t) && (i.m[t] = c[t]);
                n && n(i)
              }
              for (a && a(r); o < d.length; o++) f = d[o], i.o(e, f) && e[f] && e[f][0](), e[f] = 0
            },
            r = self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || [];
          r.forEach(a.bind(null, 0)), r.push = a.bind(null, r.push.bind(r))
        })(), i.nc = void 0, i(35649), i(55974)
      })())
    }
  }
});