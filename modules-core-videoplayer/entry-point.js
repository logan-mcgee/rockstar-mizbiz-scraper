try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "72a61206-7268-4f4b-89fb-170ccb5b1fc8", e._sentryDebugIdIdentifier = "sentry-dbid-72a61206-7268-4f4b-89fb-170ccb5b1fc8")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-videoplayer",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register([], function(e, a) {
  return {
    execute: function() {
      e((() => {
        var e, d, t, r, f, c, o, n, b, l, i, s, u, p, h, m, g, y, v, w, _, k = {
            20154(e, a, d) {
              (0, d(89160).w)(1)
            },
            89160(e, a, d) {
              const t = d(51908).y;
              a.w = function(e) {
                if (e || (e = 1), !d.y.meta || !d.y.meta.url) throw console.error("__system_context__", d.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                d.p = t(d.y.meta.url, e)
              }
            },
            35649(e, a, d) {
              d(20154)
            },
            51908(e, a, d) {
              a.y = function(e, a) {
                var d = document.createElement("a");
                d.href = e;
                for (var t = "/" === d.pathname[0] ? d.pathname : "/" + d.pathname, r = 0, f = t.length; r !== a && f >= 0;) "/" === t[--f] && r++;
                if (r !== a) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + a + ") is greater than the number of directories (" + r + ") in the URL path " + e);
                var c = t.slice(0, f + 1);
                return d.protocol + "//" + d.host + c
              };
              Number.isInteger
            },
            58157(e, a, d) {
              "use strict";
              var t = {
                  "./bootstrap": () => d.e(4827).then(() => () => d(4827)),
                  "./index": () => Promise.all([d.e(9512), d.e(3746), d.e(3082), d.e(2909), d.e(6416), d.e(9646), d.e(3331), d.e(4815), d.e(5812), d.e(2199), d.e(9599), d.e(5095)]).then(() => () => d(5095)),
                  "./tina": () => Promise.all([d.e(3082), d.e(2909), d.e(4017), d.e(9646), d.e(3331), d.e(4815), d.e(3659)]).then(() => () => d(53659)),
                  "./tinaBlockTemplates": () => Promise.all([d.e(3082), d.e(2909), d.e(4017), d.e(9646), d.e(3331), d.e(4815), d.e(3659)]).then(() => () => d(53659))
                },
                r = (e, a) => (d.R = a, a = d.o(t, e) ? t[e]() : Promise.resolve().then(() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                }), d.R = void 0, a),
                f = (e, a) => {
                  if (d.S) {
                    var t = "default",
                      r = d.S[t];
                    if (r && r !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return d.S[t] = e, d.I(t, a)
                  }
                };
              d.d(a, {
                get: () => r,
                init: () => f
              })
            }
          },
          P = {};

        function E(e) {
          var a = P[e];
          if (void 0 !== a) return a.exports;
          var d = P[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return k[e].call(d.exports, d, d.exports, E), d.loaded = !0, d.exports
        }
        return E.m = k, E.c = P, E.y = a, E.amdO = {}, E.n = e => {
          var a = e && e.__esModule ? () => e.default : () => e;
          return E.d(a, {
            a
          }), a
        }, d = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, E.t = function(a, t) {
          if (1 & t && (a = this(a)), 8 & t) return a;
          if ("object" == typeof a && a) {
            if (4 & t && a.__esModule) return a;
            if (16 & t && "function" == typeof a.then) return a
          }
          var r = Object.create(null);
          E.r(r);
          var f = {};
          e = e || [null, d({}), d([]), d(d)];
          for (var c = 2 & t && a;
            ("object" == typeof c || "function" == typeof c) && !~e.indexOf(c); c = d(c)) Object.getOwnPropertyNames(c).forEach(e => f[e] = () => a[e]);
          return f.default = () => a, E.d(r, f), r
        }, E.d = (e, a) => {
          for (var d in a) E.o(a, d) && !E.o(e, d) && Object.defineProperty(e, d, {
            enumerable: !0,
            get: a[d]
          })
        }, E.f = {}, E.e = e => Promise.all(Object.keys(E.f).reduce((a, d) => (E.f[d](e, a), a), [])), E.u = e => "js/" + {
          131: "95a3fb93a9b8ea1df9db26649ee3b789",
          162: "c1b16a38527aa9b37f3a795d842f09bb",
          243: "e2e3e56bef5dc359d59ede5ac9033c4a",
          278: "02874e086ba1488014650daf703fd034",
          299: "6b3828a0cafd837e4cdf44fc2a551aa0",
          314: "501e25d6f5547af40caba0e035f21ef6",
          481: "77b33aa59761930ab618f6cee62f225a",
          662: "2504d924ee9747310dcba18854d0ec65",
          824: "3f622face5609761b015ac1c061b9deb",
          907: "1781ceb80799f9d6523f9f5fff679962",
          951: "6ff80d9437831fc65e674cfbb64c5da2",
          1054: "f1fcf51dec3849d31f4ae5a10568e9b0",
          1075: "4a6668c695e9f25919705ded405faf3a",
          1242: "73450aa34808362e937c1381d6d37529",
          1822: "2bda9cbfa5d7cb922e59eea581afd502",
          1868: "1bb9d0534066b5664f3a60748060a6fb",
          2156: "3a8aa02d9f33101950d8abcf67f57e59",
          2171: "134f25bf3d8345fa1db8eda5d9854cdf",
          2221: "ffe57c937beb1f43da9cdad5ba156818",
          2243: "bc948852f78524cce272451832b4ea1a",
          2347: "ca3dbff5a0c83c6808f476f1f10579da",
          2365: "7f1671316076ec90d313241f7d74a075",
          2398: "cd143cd189af28c464ff91c4ae9cc58e",
          2466: "790597206225bd620a20c11380b959ba",
          2581: "d326e02d2eb77ad12bd9bc1bea99ea52",
          2624: "2a9a97e34e267f294aa047780a92c91b",
          2631: "4b1d61118bdbacb47d3812e38f3b65ae",
          2642: "a6b91fced6dee12dc2b80fc7d00424c8",
          2678: "dcf3e20e3a510ffefe4a7f4ace8bea80",
          2680: "f0147d314c149b51cd4ef40409bc88e1",
          2864: "eb7a26d52c5829d4438c6a2121b3c20a",
          3034: "db70e5fb8fb27882df5560fd2a5ff796",
          3197: "a5c2af5af1818833072cd6b055fc3d89",
          3343: "4dba86e4dd1da6482a370dc8cb37c9e5",
          3370: "f566b5d8a93d314442a46bcd1f366ef3",
          3475: "58139c66637686fd494ff44cf4b1b63f",
          3486: "dea91ab8625e9ac0b516bbc7142021dd",
          3529: "2e836eff2c6f752216c6fe9b9df30f41",
          3659: "a70f3ec7598aa7ee8b3d21ef243fe25f",
          3697: "7c37a816f5d4ad578d5990a9ff127cbe",
          3746: "b50d2e3366f9f9c83312e0bb004eac63",
          3770: "50fa9a2164fe18b2647b9cbf3bf0297a",
          3885: "6a34f453f5305e8a478f1f6df4e13031",
          3902: "800e92c79bbeea4de0bd3c8b345daa6c",
          3941: "8d6719c4a6016d894ddbd64899427b97",
          4011: "19f33fa802ed3a6037df16a304e8770a",
          4168: "adbd688294ef1e18939e1add1389def0",
          4269: "a9518ac36404de1dc8541a152ed594c4",
          4514: "cbd89c9a763465c784b678ffb0e3b04c",
          4528: "936667f27e2a6903effd45646a6e8f95",
          4621: "773fb4dfa10dd7777aa54085afebadb5",
          4700: "7e92e0d86cd195d371d0cd996bd1c322",
          4710: "75829ede95ed2ba461cbbe7b8a2ad7ec",
          4731: "726923fd6686018354aae256829bc276",
          4799: "be78f2fc22440de03db850721c2665e5",
          4827: "a1904ee92f50d6cc1eddd740191949bc",
          4851: "e3e7450f10c3e6ee4f458a0b1ca84652",
          4861: "56d2fb91b10311794a91b3418df0e442",
          4913: "32e0a6e9abb6e950e6d56ea6a186aa62",
          4921: "14071f1535980864c7c8bb1f80cb7776",
          5018: "a343b8ca182005f0de1cede65d1d6012",
          5095: "646474b7eef2a0553a542b85d6269201",
          5233: "835051815c455991fcb1dfd4d5472247",
          5259: "8f595fc71788fde95ac3b50200558d48",
          5511: "5a283340ea8b77a4b8250968a794dd0b",
          5530: "79e568773fa7e2090c5c285b6379de16",
          5537: "c913d8b0e917bf3b1419c9b6158dded0",
          5639: "31e2230372d233f505fbe8cdb4382c4d",
          5663: "1d0a2e0547df41fbb6afe723012830ba",
          5742: "fb2758a7e9ec6f771e9c3c416b711091",
          5830: "214a281fa3489f45e03990143cc0c6bc",
          5832: "0719ddde9dab8c48ab1b5a8ba6bea1dd",
          5864: "fe271fe27c3297fba3c11aed2b5d0788",
          5997: "780577ada8c364773f099b5ca1834075",
          6038: "882751931bfc45dbf695338e3575c70b",
          6048: "bf9db62b35c4fa9f3fd650d75d062335",
          6265: "16189cc487a0c70d6c224d157a68799a",
          6267: "0f76f4262855cca1b669cea42e0327f1",
          6280: "1d143c21ca0d9c010f42c2875de282bc",
          6285: "e2d3253d5147d62da1e6fccd3ca230f8",
          6361: "780e5684e57b888114cfb9783780fb42",
          6664: "09c9fcea8af68393895861eccb90a71a",
          6825: "2fb5e9428b6a57d80042491be05c9857",
          6836: "8603bbf514680bd727925a2885734773",
          6879: "f2c0ad835e3e1bd12fa26afdf3aca9c1",
          6891: "75b15cb906bf5629ede5d1f70e58f4b2",
          6963: "fcb9a1e4bd7105842dcedba17c0f1853",
          6997: "edbf7778b9d2a76243b2f31f8fa74dbb",
          7010: "8c5a189c3b142007b0b34819be0a70a0",
          7073: "b231b77366253b7520a3a5367037603a",
          7436: "183591d29182b9e6afc90a1b46a1bf8e",
          7452: "acdfc8e2180d9858215e3117d5971ee9",
          7453: "e4496ef6d99b37adf3ce54d03cedf724",
          7837: "0894c7c222d451da47d2937775b4587c",
          7892: "98c3c9706f7f26a6d576872465c11c92",
          7970: "cfd9334814a8669cf5cb560cc9469ae5",
          8272: "ecd552e58f98f3855bea8b0858dfc3bc",
          8391: "ae3e266124bc25cd8d75dfb4ec769410",
          8646: "4da1dfcc63e8f0a0a7d1e6b58ac18a0e",
          8679: "4e8949e605e817bec39b95b60a0d98dc",
          8755: "7e01a74fc43fcf87526e12adde76a3ee",
          8880: "553149f6953160e1f6f6ef34718474fe",
          8970: "c8022b55f2dce5f05a1ba05ec92aae76",
          9022: "0d1e35771abcbeec09908e0f95d429ff",
          9028: "e801d339c26594df33a086028c356fc0",
          9126: "e107b23b45c291ff52972fc718c1cf95",
          9206: "5403ae24c58cdc5d071e3a02b795a9ba",
          9377: "ac3f4f0b22f56a9a872f8a689f6d4a04",
          9512: "f3d204062667c81c1974b6871481ba54",
          9599: "969950a6959f2319e10edbe165ebd1b6",
          9615: "d401bd32e7ef30066dd410df31d62767",
          9764: "be605806f66e4b49a0592ae5a4b7e4d3",
          9936: "4bb5b62f9895b9fcd5541701e9f8b50f",
          9990: "ba4b22b9b39a2ef37d5f91ec62cd3282"
        } [e] + ".js", E.miniCssF = e => "css/" + {
          2680: "d5d80fb65b4d279f563a59abb371d37e",
          3659: "e1ecfbd5d60b0822f094e505eee8adf4",
          5095: "a2de55ecc45a6c72e39a13f1cfa094e7",
          5537: "d5d80fb65b4d279f563a59abb371d37e",
          7837: "98d2f7207c07838416399fe63c3fcbc4",
          9599: "23f21891e0b0831895f7bce0863c04ec"
        } [e] + ".css", E.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), E.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), t = {}, r = "@rockstargames/modules-core-videoplayer:", E.l = (e, a, d, f) => {
          if (t[e]) t[e].push(a);
          else {
            var c, o;
            if (void 0 !== d)
              for (var n = document.getElementsByTagName("script"), b = 0; b < n.length; b++) {
                var l = n[b];
                if (l.getAttribute("src") == e || l.getAttribute("data-webpack") == r + d) {
                  c = l;
                  break
                }
              }
            c || (o = !0, (c = document.createElement("script")).charset = "utf-8", E.nc && c.setAttribute("nonce", E.nc), c.setAttribute("data-webpack", r + d), c.src = e), t[e] = [a];
            var i = (a, d) => {
                c.onerror = c.onload = null, clearTimeout(s);
                var r = t[e];
                if (delete t[e], c.parentNode && c.parentNode.removeChild(c), r && r.forEach(e => e(d)), a) return a(d)
              },
              s = setTimeout(i.bind(null, void 0, {
                type: "timeout",
                target: c
              }), 12e4);
            c.onerror = i.bind(null, c.onerror), c.onload = i.bind(null, c.onload), o && document.head.appendChild(c)
          }
        }, E.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, E.nmd = e => (e.paths = [], e.children || (e.children = []), e), (() => {
          E.S = {};
          var e = {},
            a = {};
          E.I = (d, t) => {
            t || (t = []);
            var r = a[d];
            if (r || (r = a[d] = {}), !(t.indexOf(r) >= 0)) {
              if (t.push(r), e[d]) return e[d];
              E.o(E.S, d) || (E.S[d] = {});
              var f = E.S[d],
                c = "@rockstargames/modules-core-videoplayer",
                o = (e, a, d, t) => {
                  var r = f[e] = f[e] || {},
                    o = r[a];
                  (!o || !o.loaded && (!t != !o.eager ? t : c > o.from)) && (r[a] = {
                    get: d,
                    from: c,
                    eager: !!t
                  })
                },
                n = [];
              return "default" === d && (o("@gsap/react", "2.1.2", () => Promise.all([E.e(3082), E.e(5812), E.e(9206)]).then(() => () => E(99206))), o("@popperjs/core", "2.11.8", () => E.e(4168).then(() => () => E(14168))), o("@rsgweb/locale-tools", "0.0.0", () => Promise.all([E.e(9512), E.e(6836), E.e(3082), E.e(8646)]).then(() => () => E(76602))), o("@rsgweb/modules-core-agegate", "0.0.0", () => Promise.all([E.e(6963), E.e(3082), E.e(3331), E.e(2199), E.e(2680)]).then(() => () => E(299))), o("@rsgweb/rockstar-account", "0.0.0", () => Promise.all([E.e(5864), E.e(481), E.e(3082), E.e(2909), E.e(6416), E.e(9646), E.e(3331), E.e(5997), E.e(5511)]).then(() => () => E(27892))), o("@rsgweb/utils", "0.0.0-development", () => Promise.all([E.e(9512), E.e(5864), E.e(3902), E.e(3082), E.e(2909), E.e(6416), E.e(9646), E.e(5997), E.e(7122), E.e(6048)]).then(() => () => E(36048))), o("clsx", "2.1.1", () => E.e(4921).then(() => () => E(4921))), o("focus-trap-react", "10.3.1", () => Promise.all([E.e(4514), E.e(3082)]).then(() => () => E(44514))), o("graphql", "16.13.2", () => E.e(9764).then(() => () => E(29764))), o("gsap", "3.12.5", () => E.e(3529).then(() => () => E(93529))), o("hammerjs", "2.0.8", () => E.e(6038).then(() => () => E(36038))), o("lodash", "4.18.1", () => E.e(2631).then(() => () => E(2631))), o("react-dom", "18.3.1", () => Promise.all([E.e(162), E.e(3082)]).then(() => () => E(30162))), o("react-popper", "2.3.0", () => Promise.all([E.e(3082), E.e(4017), E.e(7755), E.e(243)]).then(() => () => E(50243))), o("react-router-dom", "6.30.3", () => Promise.all([E.e(4269), E.e(3082), E.e(4017)]).then(() => () => E(74269))), o("react", "18.3.1", () => E.e(2581).then(() => () => E(22581))), o("uuid", "9.0.1", () => E.e(3770).then(() => () => E(3770)))), e[d] = n.length ? Promise.all(n).then(() => e[d] = 1) : 1
            }
          }
        })(), (() => {
          var e;
          E.g.importScripts && (e = E.g.location + "");
          var a = E.g.document;
          if (!e && a && (a.currentScript && "SCRIPT" === a.currentScript.tagName.toUpperCase() && (e = a.currentScript.src), !e)) {
            var d = a.getElementsByTagName("script");
            if (d.length)
              for (var t = d.length - 1; t > -1 && (!e || !/^http(s?):/.test(e));) e = d[t--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), E.p = e
        })(), f = e => {
          var a = e => e.split(".").map(e => +e == e ? +e : e),
            d = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
            t = d[1] ? a(d[1]) : [];
          return d[2] && (t.length++, t.push.apply(t, a(d[2]))), d[3] && (t.push([]), t.push.apply(t, a(d[3]))), t
        }, c = (e, a) => {
          e = f(e), a = f(a);
          for (var d = 0;;) {
            if (d >= e.length) return d < a.length && "u" != (typeof a[d])[0];
            var t = e[d],
              r = (typeof t)[0];
            if (d >= a.length) return "u" == r;
            var c = a[d],
              o = (typeof c)[0];
            if (r != o) return "o" == r && "n" == o || "s" == o || "u" == r;
            if ("o" != r && "u" != r && t != c) return t < c;
            d++
          }
        }, o = e => {
          var a = e[0],
            d = "";
          if (1 === e.length) return "*";
          if (a + .5) {
            d += 0 == a ? ">=" : -1 == a ? "<" : 1 == a ? "^" : 2 == a ? "~" : a > 0 ? "=" : "!=";
            for (var t = 1, r = 1; r < e.length; r++) t--, d += "u" == (typeof(c = e[r]))[0] ? "-" : (t > 0 ? "." : "") + (t = 2, c);
            return d
          }
          var f = [];
          for (r = 1; r < e.length; r++) {
            var c = e[r];
            f.push(0 === c ? "not(" + n() + ")" : 1 === c ? "(" + n() + " || " + n() + ")" : 2 === c ? f.pop() + " " + f.pop() : o(c))
          }
          return n();

          function n() {
            return f.pop().replace(/^\((.+)\)$/, "$1")
          }
        }, n = (e, a) => {
          if (0 in e) {
            a = f(a);
            var d = e[0],
              t = d < 0;
            t && (d = -d - 1);
            for (var r = 0, c = 1, o = !0;; c++, r++) {
              var b, l, i = c < e.length ? (typeof e[c])[0] : "";
              if (r >= a.length || "o" == (l = (typeof(b = a[r]))[0])) return !o || ("u" == i ? c > d && !t : "" == i != t);
              if ("u" == l) {
                if (!o || "u" != i) return !1
              } else if (o)
                if (i == l)
                  if (c <= d) {
                    if (b != e[c]) return !1
                  } else {
                    if (t ? b > e[c] : b < e[c]) return !1;
                    b != e[c] && (o = !1)
                  }
              else if ("s" != i && "n" != i) {
                if (t || c <= d) return !1;
                o = !1, c--
              } else {
                if (c <= d || l < i != t) return !1;
                o = !1
              } else "s" != i && "n" != i && (o = !1, c--)
            }
          }
          var s = [],
            u = s.pop.bind(s);
          for (r = 1; r < e.length; r++) {
            var p = e[r];
            s.push(1 == p ? u() | u() : 2 == p ? u() & u() : p ? n(p, a) : !u())
          }
          return !!u()
        }, b = (e, a) => e && E.o(e, a), l = e => (e.loaded = 1, e.get()), i = e => Object.keys(e).reduce((a, d) => (e[d].eager && (a[d] = e[d]), a), {}), s = (e, a, d) => {
          var t = d ? i(e[a]) : e[a];
          return Object.keys(t).reduce((e, a) => !e || !t[e].loaded && c(e, a) ? a : e, 0)
        }, u = (e, a, d, t) => "Unsatisfied version " + d + " from " + (d && e[a][d].from) + " of shared singleton module " + a + " (required " + o(t) + ")", p = e => {
          throw new Error(e)
        }, h = e => {
          "undefined" != typeof console && console.warn && console.warn(e)
        }, m = (e, a, d) => d ? d() : ((e, a) => p("Shared module " + a + " doesn't exist in shared scope " + e))(e, a), g = (e => function(a, d, t, r, f) {
          var c = E.I(a);
          return c && c.then && !t ? c.then(e.bind(e, a, E.S[a], d, !1, r, f)) : e(a, E.S[a], d, t, r, f)
        })((e, a, d, t, r, f) => {
          if (!b(a, d)) return m(e, d, f);
          var c = s(a, d, t);
          return n(r, c) || h(u(a, d, c, r)), l(a[d][c])
        }), y = {}, v = {
          93082: () => g("default", "react", !1, [0], () => E.e(2581).then(() => () => E(22581))),
          42909: () => g("default", "@rsgweb/locale-tools", !1, [0], () => Promise.all([E.e(9512), E.e(6836), E.e(6265)]).then(() => () => E(76602))),
          36416: () => g("default", "react-router-dom", !1, [0], () => Promise.all([E.e(4269), E.e(4017)]).then(() => () => E(74269))),
          69646: () => g("default", "lodash", !1, [1, 4, 18, 1], () => E.e(2631).then(() => () => E(2631))),
          13331: () => g("default", "@rsgweb/utils", !1, [0], () => Promise.all([E.e(9512), E.e(5864), E.e(3902), E.e(2909), E.e(6416), E.e(9646), E.e(5997), E.e(1075)]).then(() => () => E(36048))),
          74815: () => g("default", "uuid", !1, [1, 9, 0, 1], () => E.e(3770).then(() => () => E(3770))),
          35812: () => g("default", "gsap", !1, [0], () => E.e(3529).then(() => () => E(93529))),
          82199: () => g("default", "@rsgweb/rockstar-account", !1, [0], () => Promise.all([E.e(5864), E.e(481), E.e(2909), E.e(6416), E.e(9646), E.e(5997), E.e(7892)]).then(() => () => E(27892))),
          12341: () => g("default", "hammerjs", !1, [1, 2, 0, 8], () => E.e(6038).then(() => () => E(36038))),
          67347: () => g("default", "@gsap/react", !1, [0], () => E.e(6825).then(() => () => E(99206))),
          81038: () => g("default", "focus-trap-react", !1, [1, 10, 2, 3], () => E.e(4514).then(() => () => E(44514))),
          81270: () => g("default", "clsx", !1, [1, 2, 1, 1], () => E.e(4921).then(() => () => E(4921))),
          87613: () => g("default", "@rsgweb/modules-core-agegate", !1, [0], () => Promise.all([E.e(6963), E.e(5537)]).then(() => () => E(299))),
          92745: () => g("default", "react-popper", !1, [1, 2, 3, 0], () => Promise.all([E.e(4017), E.e(7755), E.e(2624)]).then(() => () => E(50243))),
          84017: () => g("default", "react-dom", !1, [1, 18, 2, 0], () => E.e(162).then(() => () => E(30162))),
          67122: () => g("default", "graphql", !1, [1, 16, 13, 2], () => E.e(9764).then(() => () => E(29764))),
          57755: () => g("default", "@popperjs/core", !1, [1, 2, 11, 8], () => E.e(4168).then(() => () => E(14168)))
        }, w = {
          1075: [67122],
          2199: [82199],
          2909: [42909],
          3082: [93082],
          3331: [13331],
          4017: [84017],
          4815: [74815],
          5812: [35812],
          6416: [36416],
          7122: [67122],
          7755: [57755],
          9599: [12341, 67347, 81038, 81270, 87613, 92745],
          9646: [69646]
        }, _ = {}, E.f.consumes = (e, a) => {
          E.o(w, e) && w[e].forEach(e => {
            if (E.o(y, e)) return a.push(y[e]);
            if (!_[e]) {
              var d = a => {
                y[e] = 0, E.m[e] = d => {
                  delete E.c[e], d.exports = a()
                }
              };
              _[e] = !0;
              var t = a => {
                delete y[e], E.m[e] = d => {
                  throw delete E.c[e], a
                }
              };
              try {
                var r = v[e]();
                r.then ? a.push(y[e] = r.then(d).catch(t)) : d(r)
              } catch (e) {
                t(e)
              }
            }
          })
        }, (() => {
          if ("undefined" != typeof document) {
            var e = {
              7614: 0
            };
            E.f.miniCss = (a, d) => {
              e[a] ? d.push(e[a]) : 0 !== e[a] && {
                2680: 1,
                3659: 1,
                5095: 1,
                5537: 1,
                7837: 1,
                9599: 1
              } [a] && d.push(e[a] = (e => new Promise((a, d) => {
                var t = E.miniCssF(e),
                  r = E.p + t;
                if (((e, a) => {
                    for (var d = document.getElementsByTagName("link"), t = 0; t < d.length; t++) {
                      var r = (c = d[t]).getAttribute("data-href") || c.getAttribute("href");
                      if ("stylesheet" === c.rel && (r === e || r === a)) return c
                    }
                    var f = document.getElementsByTagName("style");
                    for (t = 0; t < f.length; t++) {
                      var c;
                      if ((r = (c = f[t]).getAttribute("data-href")) === e || r === a) return c
                    }
                  })(t, r)) return a();
                ((e, a, d, t, r) => {
                  var f = document.createElement("link");
                  f.rel = "stylesheet", f.type = "text/css", E.nc && (f.nonce = E.nc), f.onerror = f.onload = d => {
                    if (f.onerror = f.onload = null, "load" === d.type) t();
                    else {
                      var c = d && d.type,
                        o = d && d.target && d.target.href || a,
                        n = new Error("Loading CSS chunk " + e + " failed.\n(" + c + ": " + o + ")");
                      n.name = "ChunkLoadError", n.code = "CSS_CHUNK_LOAD_FAILED", n.type = c, n.request = o, f.parentNode && f.parentNode.removeChild(f), r(n)
                    }
                  }, f.href = a, document.head.appendChild(f)
                })(e, r, 0, a, d)
              }))(a).then(() => {
                e[a] = 0
              }, d => {
                throw delete e[a], d
              }))
            }
          }
        })(), (() => {
          var e = {
            7614: 0
          };
          E.f.j = (a, d) => {
            var t = E.o(e, a) ? e[a] : void 0;
            if (0 !== t)
              if (t) d.push(t[2]);
              else if (/^((308|581|712)2|2199|2909|3331|4017|4815|6416|7755|9646)$/.test(a)) e[a] = 0;
            else {
              var r = new Promise((d, r) => t = e[a] = [d, r]);
              d.push(t[2] = r);
              var f = E.p + E.u(a),
                c = new Error;
              E.l(f, d => {
                if (E.o(e, a) && (0 !== (t = e[a]) && (e[a] = void 0), t)) {
                  var r = d && ("load" === d.type ? "missing" : d.type),
                    f = d && d.target && d.target.src;
                  c.message = "Loading chunk " + a + " failed.\n(" + r + ": " + f + ")", c.name = "ChunkLoadError", c.type = r, c.request = f, t[1](c)
                }
              }, "chunk-" + a, a)
            }
          };
          var a = (a, d) => {
              var t, r, [f, c, o] = d,
                n = 0;
              if (f.some(a => 0 !== e[a])) {
                for (t in c) E.o(c, t) && (E.m[t] = c[t]);
                o && o(E)
              }
              for (a && a(d); n < f.length; n++) r = f[n], E.o(e, r) && e[r] && e[r][0](), e[r] = 0
            },
            d = self.webpackChunk_rockstargames_modules_core_videoplayer = self.webpackChunk_rockstargames_modules_core_videoplayer || [];
          d.forEach(a.bind(null, 0)), d.push = a.bind(null, d.push.bind(d))
        })(), E(35649), E(58157)
      })())
    }
  }
});