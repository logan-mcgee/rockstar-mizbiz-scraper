try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "0ee3471a-94a4-4144-b520-e7e2402a6ed9", e._sentryDebugIdIdentifier = "sentry-dbid-0ee3471a-94a4-4144-b520-e7e2402a6ed9")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "23734b3e70371e18a05f141b62211d2d95128dc9",
    packageName: "@rockstargames/modules-core-header",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "23734b3e70371e18a05f141b62211d2d95128dc9"
}, System.register([], (function(e, a) {
  return {
    execute: function() {
      e((() => {
        var e, d, r, t, f, c, o = {
            9944: (e, a, d) => {
              a.y = function(e, a) {
                var d = document.createElement("a");
                d.href = e;
                for (var r = "/" === d.pathname[0] ? d.pathname : "/" + d.pathname, t = 0, f = r.length; t !== a && f >= 0;) "/" === r[--f] && t++;
                if (t !== a) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + a + ") is greater than the number of directories (" + t + ") in the URL path " + e);
                var c = r.slice(0, f + 1);
                return d.protocol + "//" + d.host + c
              };
              Number.isInteger
            },
            21998: (e, a, d) => {
              (0, d(82788).w)(1)
            },
            37389: (e, a, d) => {
              d(21998)
            },
            82788: (e, a, d) => {
              const r = d(9944).y;
              a.w = function(e) {
                if (e || (e = 1), !d.y.meta || !d.y.meta.url) throw console.error("__system_context__", d.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                d.p = r(d.y.meta.url, e)
              }
            },
            84823: (e, a, d) => {
              "use strict";
              var r = {
                  "./core": () => Promise.all([d.e(7405), d.e(1689), d.e(6204), d.e(490), d.e(1127), d.e(9158), d.e(1222), d.e(4406), d.e(3694), d.e(1379), d.e(4902), d.e(1755), d.e(5966), d.e(8618), d.e(4036), d.e(1788), d.e(4780), d.e(9100), d.e(2918), d.e(1898), d.e(8846), d.e(5809), d.e(5137)]).then((() => () => d(95137))),
                  "./GlobalNavigationWrapper": () => Promise.all([d.e(1689), d.e(490), d.e(1127), d.e(1222), d.e(4406), d.e(3694), d.e(4902), d.e(1755), d.e(5966), d.e(8618), d.e(4036), d.e(1788), d.e(4780), d.e(9100), d.e(8846), d.e(3084)]).then((() => () => d(43084))),
                  "./vanilla": () => Promise.all([d.e(7405), d.e(6204), d.e(490), d.e(1127), d.e(8429), d.e(1379), d.e(5966), d.e(1788), d.e(9100), d.e(2918), d.e(5809), d.e(7818)]).then((() => () => d(23916)))
                },
                t = (e, a) => (d.R = a, a = d.o(r, e) ? r[e]() : Promise.resolve().then((() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                })), d.R = void 0, a),
                f = (e, a) => {
                  if (d.S) {
                    var r = "default",
                      t = d.S[r];
                    if (t && t !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return d.S[r] = e, d.I(r, a)
                  }
                };
              d.d(a, {
                get: () => t,
                init: () => f
              })
            }
          },
          n = {};

        function b(e) {
          var a = n[e];
          if (void 0 !== a) return a.exports;
          var d = n[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return o[e].call(d.exports, d, d.exports, b), d.loaded = !0, d.exports
        }
        return b.m = o, b.c = n, b.y = a, b.amdO = {}, b.n = e => {
          var a = e && e.__esModule ? () => e.default : () => e;
          return b.d(a, {
            a
          }), a
        }, d = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, b.t = function(a, r) {
          if (1 & r && (a = this(a)), 8 & r) return a;
          if ("object" == typeof a && a) {
            if (4 & r && a.__esModule) return a;
            if (16 & r && "function" == typeof a.then) return a
          }
          var t = Object.create(null);
          b.r(t);
          var f = {};
          e = e || [null, d({}), d([]), d(d)];
          for (var c = 2 & r && a;
            "object" == typeof c && !~e.indexOf(c); c = d(c)) Object.getOwnPropertyNames(c).forEach((e => f[e] = () => a[e]));
          return f.default = () => a, b.d(t, f), t
        }, b.d = (e, a) => {
          for (var d in a) b.o(a, d) && !b.o(e, d) && Object.defineProperty(e, d, {
            enumerable: !0,
            get: a[d]
          })
        }, b.f = {}, b.e = e => Promise.all(Object.keys(b.f).reduce(((a, d) => (b.f[d](e, a), a)), [])), b.u = e => "js/" + {
          114: "bfa7f2bf1ede1f37a913235912456547",
          131: "f3f7d0e51d5f321e8a36cf05d664f585",
          278: "8054708c1b69c121215fe8eee121a2d4",
          299: "c38497774a6260b89be5abe95532d9f5",
          314: "e6ddbeec7f7362da05df071326b75da9",
          377: "2fdd4d7763029377071fab71d23770f8",
          490: "5ce0d4ee9474028d39b2872403a70447",
          507: "f69843cf260608f2628ad6ec5567a639",
          614: "611d2547cf3ced9fe977bdcd4f7ad49a",
          648: "d69e437199f04216be2511e29097ea45",
          662: "882df3a9c83556b1186837f6eae6b3d1",
          824: "15f8ddfed7a8ef08112b8a845f7cbede",
          888: "c2cc4cac456fe25435dfaa919cea4b59",
          907: "e6531a0ecc1333e88b83b27ab64f5ba5",
          954: "db2178ecf7f1426ce9fad06c5850b196",
          969: "80a1fedbe04badb9be81338c78f6100c",
          1054: "c2fe29482055530fd59eeb84dce297de",
          1138: "94ff8e53ca4a4ebd61a0df4bb55e4e9c",
          1154: "f8862ab05796dcc47b6bdbb058af538e",
          1242: "a77dc9f0f15b931ddc348f7234551d47",
          1379: "5e72aed28d21fd5deec0dab62f09f4f8",
          1579: "4b3cba6a1c65e2f90d354110c9405894",
          1589: "852edbb4866b9b28b75bb9da74e0a2ae",
          1607: "5dde0acbf3de738ab694cab64bd66a8a",
          1689: "4cecbb471e61ec2420d96f9909004191",
          1822: "b468c54a54dcdcd1b9ccf85fa0cdbc67",
          1868: "59e417ec76e627b7bc1dc6cc9283ce68",
          2109: "2591425ac3925e21951d5a757bd97a03",
          2156: "33284346b07eb410d4aa9c87f1e3b9e8",
          2171: "651721a5fb21ed26ba347c3272ed22ba",
          2221: "fb35d8e38d4dd1e865e35afa9cdc8e94",
          2243: "5f9917b9f4ac82abc0295d3ab0bdbd6f",
          2315: "0e048dac9b138f4d2de2dd5f2a56f588",
          2347: "4c395e21b981f0eb873c8e3e11ddcd19",
          2365: "f77b0946fcfeb53a1d76087cf7a13f4f",
          2398: "ce37c8fa70f54dd883f453e661954476",
          2466: "22da59a17d0d13a37e03de56a484b3d2",
          2501: "e0ea2edcb65305f142b4d968071e0545",
          2642: "30fd3e855d1f5993db7a5cfae08ea038",
          2678: "54c3c7ae5374b4f0c09e7f7c7939ba3d",
          2864: "e369c9aecfba5b08bd3f1be19ed9e475",
          2888: "cc476a14452f7aea54a83910a0d55dee",
          2941: "87f21b3693850dc7e0d5543547957b96",
          3034: "358ee215d9e4ba87e809861a331db1c8",
          3084: "618834b80491b0d03e9012118ede2231",
          3197: "00b6000a6e03eb22f625910e11b9c1da",
          3286: "c4d8d5f4e5051d9f37910ac1a79ee9b3",
          3343: "6ec60d53a6d1e86ceee6f6ff20fd7902",
          3370: "a572f71100b0f179c4bd756e700fe75d",
          3475: "46761e5b241f06be0a2697a8104d6121",
          3486: "70e1c05867702d9ce949143ba2858f97",
          3622: "31dc45f5710530d3cbe26639803603c7",
          3684: "f083c6f7352e50ac2d74783cb8ca5b09",
          3697: "a58851cac4148bbd4ca659405f05abe4",
          3724: "a327a7c05b12f2b1b9e6b0de3cc87c33",
          3770: "4615bb0151e32cf3976ced9f2a759964",
          3885: "2d91dc161f6a8d0946531d5686158f33",
          3941: "d8ba789a153101710dee81a502347bd3",
          3963: "f4cc2068f3aef1a99297aedd5635a064",
          3970: "15511e15b4b07bd7bc37087075a8e6c1",
          4011: "ffb5df15686a5839fb86e65fecdde31e",
          4082: "11093247a2e5a0139a7bd541d0df4588",
          4105: "e3a5c0d05aeaa7f7e788aa0d167a8ff6",
          4171: "d50cc17f21e5d8645ab6c0699bfb1560",
          4186: "7871e4180b641b7cd957d11bef625e76",
          4220: "f6e790ec842fc78a03b825cb598884b4",
          4528: "b2855d1887b41784ec78253c5582865f",
          4621: "e3933460ec3175649717319f6c6f411f",
          4700: "fd48477352d2db34db87cf5981252600",
          4710: "297ae76e94a01b7be642a2ce30f48198",
          4731: "039c7ddf39e13ffaa72003438926eb35",
          4799: "4b82fe6d269bc2ad1a412e72c896ef16",
          4851: "824d468cfd6732e7251b5aecc9a82c7f",
          4861: "c6fe9dcf77dc516f586d6eed468d6419",
          4913: "ff0b012512243c07f2707fe0f0041718",
          5018: "752d728325d2c927869f5c5d0e2fb4a9",
          5137: "e5f709e81bbf0ec0afd484f3f6b7a3d7",
          5187: "9a584196fdef9a4b39b5d795d903d428",
          5233: "70011115187f6a7803844910966b25a9",
          5247: "d568a12da47ede76f663eee51e54bf61",
          5259: "ad1827765061a95e02b599dbf6851807",
          5526: "4ac6b93cb248596f3d2bc18a6218a778",
          5530: "e79cd19ca5d572c1efb7e48100a83d24",
          5639: "556378c298fcf2217be9e9dafe0ad0a7",
          5663: "704d029eae70105ed1cf559d8a9e99d7",
          5716: "e100acd24d2c6dc2f54fef7cbf9f531c",
          5742: "5eba41e27bf6e68fec61d36251559d2c",
          5775: "14cd4b47d665f0376cd2f44af10e4d79",
          5809: "dbe19f81cfdef1df6f4bfda9519e267c",
          5830: "dd036f0f1d7d80bfaa7ab31ce1fa1650",
          5832: "2b07a1594a5629f118b6a6a0914429cd",
          6019: "9dd82e618c6b629d7ebf1a1b7e2bc4b4",
          6204: "21fd1bcbf84e411ac8f3cc7693cd6da7",
          6207: "f4d777dae2a1c38c299100ccf98a9c8c",
          6247: "b644ce36f0cd2b06704a1e724b59236a",
          6267: "168ea5c190a12c5baa34005ec84f2e29",
          6280: "4202d73401c6f46cd85950c762bd900e",
          6285: "c718a2a4f10b2b5cf089bcc3add7060c",
          6361: "3687c807057e07d29d9ce18dc4faf63f",
          6394: "a953800a60d9ff2f0c6d855aad0a2e6f",
          6552: "05d0eb222565851be07a4df8002ddfdf",
          6664: "1dd67d9f96a103fa8534da9c6ed17250",
          6681: "d5a88d69f1266e3e9837a41aca343f28",
          6773: "b5dfa48f95878f8b364b8932e12f84da",
          6846: "1f0294aa5c85471b3af3e7e1d75e8f5a",
          6879: "c8beb20c59b98f9576ddb2292053630c",
          6891: "ea78d27e981e033d7ebbeeaa4350254d",
          6940: "a6e53994176edffa339fff5d1ed16e62",
          6997: "742ea5baa25d8010d3ba79e62c9a113b",
          7010: "2c50ca093bf1d7cb8618c65a6734ba36",
          7039: "b27adb54f88d57f8102125f1ad9132f9",
          7073: "228f761116cfbf2dc9612723e2c448e9",
          7405: "420975ed03e78db5a1cfa7592538bde2",
          7413: "5f841e579e5b97fe73b6ebc1599a11eb",
          7436: "cd2d31854e05ee3291c773173470bb95",
          7452: "b96a0feba0992616a46d0697e8d01954",
          7453: "4c5b42e0254f494b546037b392233215",
          7568: "87633a9c981a9332f19a5d4ba736dcb8",
          7798: "830747fb8643613cf97d6b81f1d31d3f",
          7818: "3bf0bb9874aca31ed1bd84cecacea4f2",
          7919: "94dec54289fae57dd4b0209ae3076a2b",
          7970: "cdab0126fbf823ce945f7299fe575801",
          8156: "dbbf1a5ce04fe057976665b6019758de",
          8258: "cc18d87e527c5b2ed83ab0e68249281b",
          8272: "465977e9b8bd0f215c096d4c149baa21",
          8305: "a56f16228db997d71479dfaac68b61b1",
          8391: "7ce7cc875eb09b9a67083a2a643fb71b",
          8513: "0e4ef46a1dae85ddcb51f47f86c0210b",
          8573: "05c395ea35fb178111d157c2300aa64d",
          8588: "a21ac52f5186a0457a3d0c88f47192d1",
          8628: "2c2db012188e64ec41233acac1531940",
          8755: "51d20856c0356f1ccf824ff8baa5b3a7",
          8773: "5664c0ba537b7a42902bb0beb32c68e1",
          8784: "04c6c873afee3a3028fc48528c4f4488",
          8846: "73cc6a89c9a4530d133907f8d1540c4b",
          8880: "b31936698f2f90fa90e6e07a8b1ece29",
          8970: "8b943282545c7ccf002d612ec27e8d49",
          9022: "e745d8d8e628b5c88574492280fc4de9",
          9028: "8a635e076278a76b5700b20e04a2905c",
          9100: "539ec2c7d57e2c170ab145cd089fab54",
          9126: "5c8d5e431d535830b8d850b2699ffcf8",
          9368: "837d32202809692dc012a83f4018fdcf",
          9377: "98897cffb758981129f54eef7befb030",
          9474: "d990c68c3d25eed540599576f0f13abc",
          9489: "b9aaf3bd1b37f362b72a3a73ddcde117",
          9615: "32adc7e2508563e75b38de354e3e28a4",
          9642: "f14ee6a2b51d8027bcb06c3e2ba3c931",
          9728: "fd57c6598c21cbd92e7d62acdf8632bc",
          9794: "b239d7821442d19ed9c87248a1f6720d",
          9936: "2450f25799a5b7d45d7466d16298e099",
          9990: "7e8b62f55f5d504c505b63f09f103846"
        } [e] + ".js", b.miniCssF = e => "css/" + {
          1689: "b9dc2235e776e8726e4d5f609c428a07",
          3684: "8b73c442ec2b588e00961f240409b9a1",
          3770: "94889ac34912db41f5debeb477992c85",
          5137: "0b7c6b739ca7c4028a37a76ae61d20c6",
          5809: "cc964df1c18a49208796013887093ade",
          6394: "df4fb15e923548db296a78dc23b812b4",
          7421: "8b73c442ec2b588e00961f240409b9a1",
          7818: "94edb376d1a211556a5bb2b298f38183",
          8846: "7c800c7a770ab32668bac9b0e70b8476"
        } [e] + ".css", b.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), b.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), r = {}, t = "@rockstargames/modules-core-header:", b.l = (e, a, d, f) => {
          if (r[e]) r[e].push(a);
          else {
            var c, o;
            if (void 0 !== d)
              for (var n = document.getElementsByTagName("script"), i = 0; i < n.length; i++) {
                var l = n[i];
                if (l.getAttribute("src") == e || l.getAttribute("data-webpack") == t + d) {
                  c = l;
                  break
                }
              }
            c || (o = !0, (c = document.createElement("script")).charset = "utf-8", c.timeout = 120, b.nc && c.setAttribute("nonce", b.nc), c.setAttribute("data-webpack", t + d), c.src = e), r[e] = [a];
            var s = (a, d) => {
                c.onerror = c.onload = null, clearTimeout(u);
                var t = r[e];
                if (delete r[e], c.parentNode && c.parentNode.removeChild(c), t && t.forEach((e => e(d))), a) return a(d)
              },
              u = setTimeout(s.bind(null, void 0, {
                type: "timeout",
                target: c
              }), 12e4);
            c.onerror = s.bind(null, c.onerror), c.onload = s.bind(null, c.onload), o && document.head.appendChild(c)
          }
        }, b.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, b.nmd = e => (e.paths = [], e.children || (e.children = []), e), f = {}, c = {}, b.f.remotes = (e, a) => {
          b.o(f, e) && f[e].forEach((e => {
            var d = b.R;
            d || (d = []);
            var r = c[e];
            if (!(d.indexOf(r) >= 0)) {
              if (d.push(r), r.p) return a.push(r.p);
              var t = a => {
                  a || (a = new Error("Container missing")), "string" == typeof a.message && (a.message += '\nwhile loading "' + r[1] + '" from ' + r[2]), b.m[e] = () => {
                    throw a
                  }, r.p = 0
                },
                f = (e, d, f, c, o, n) => {
                  try {
                    var b = e(d, f);
                    if (!b || !b.then) return o(b, c, n);
                    var i = b.then((e => o(e, c)), t);
                    if (!n) return i;
                    a.push(r.p = i)
                  } catch (e) {
                    t(e)
                  }
                },
                o = (e, a, t) => f(a.get, r[1], d, 0, n, t),
                n = a => {
                  r.p = 1, b.m[e] = e => {
                    e.exports = a()
                  }
                };
              f(b, r[2], 0, 0, ((e, a, d) => e ? f(b.I, r[0], 0, e, o, d) : t()), 1)
            }
          }))
        }, (() => {
          b.S = {};
          var e = {},
            a = {};
          b.I = (d, r) => {
            r || (r = []);
            var t = a[d];
            if (t || (t = a[d] = {}), !(r.indexOf(t) >= 0)) {
              if (r.push(t), e[d]) return e[d];
              b.o(b.S, d) || (b.S[d] = {});
              var f = b.S[d],
                c = "@rockstargames/modules-core-header",
                o = (e, a, d, r) => {
                  var t = f[e] = f[e] || {},
                    o = t[a];
                  (!o || !o.loaded && (!r != !o.eager ? r : c > o.from)) && (t[a] = {
                    get: d,
                    from: c,
                    eager: !!r
                  })
                },
                n = [];
              return "default" === d && (o("@foundry-int/utils", "1.5.4", (() => Promise.all([b.e(3286), b.e(4105)]).then((() => () => b(84105))))), o("@foundry-int/utils", "1.5.5-rc.1", (() => Promise.all([b.e(3286), b.e(2888)]).then((() => () => b(32888))))), o("@foundry/icons", "4.1.4", (() => Promise.all([b.e(2109), b.e(1127), b.e(3694), b.e(1755), b.e(3684)]).then((() => () => b(32109))))), o("@foundry/react", "4.1.5", (() => Promise.all([b.e(2501), b.e(1689), b.e(1579), b.e(3770), b.e(1127), b.e(8429), b.e(9158), b.e(1222), b.e(9690), b.e(4406), b.e(3694), b.e(4902), b.e(1755), b.e(8618), b.e(4780), b.e(1044), b.e(8513)]).then((() => () => b(93770))))), o("@popperjs/core", "2.11.8", (() => b.e(8258).then((() => () => b(18258))))), o("@radix-ui/react-accordion", "1.2.8", (() => Promise.all([b.e(8784), b.e(1127), b.e(8429), b.e(9158), b.e(1222), b.e(4406), b.e(954)]).then((() => () => b(48784))))), o("@radix-ui/react-dialog", "1.1.11", (() => Promise.all([b.e(2501), b.e(6846), b.e(1127), b.e(8429), b.e(9158), b.e(1222), b.e(9690), b.e(4406), b.e(4902), b.e(8573)]).then((() => () => b(56846))))), o("@radix-ui/react-id", "1.1.1", (() => Promise.all([b.e(1127), b.e(5187)]).then((() => () => b(95187))))), o("@radix-ui/react-navigation-menu", "1.2.10", (() => Promise.all([b.e(2501), b.e(648), b.e(1127), b.e(8429), b.e(9158), b.e(1222), b.e(4406), b.e(3694), b.e(5716)]).then((() => () => b(40648))))), o("@radix-ui/react-popover", "1.1.11", (() => Promise.all([b.e(2501), b.e(1579), b.e(1127), b.e(8429), b.e(9158), b.e(1222), b.e(9690), b.e(4406), b.e(4902), b.e(6207)]).then((() => () => b(76207))))), o("@radix-ui/react-portal", "1.1.6", (() => Promise.all([b.e(1127), b.e(8429), b.e(1222), b.e(6552)]).then((() => () => b(96552))))), o("@radix-ui/react-slot", "1.2.0", (() => Promise.all([b.e(1127), b.e(3970)]).then((() => () => b(83970))))), o("@radix-ui/react-use-controllable-state", "1.2.2", (() => Promise.all([b.e(1127), b.e(8156)]).then((() => () => b(38156))))), o("@radix-ui/react-visually-hidden", "1.2.0", (() => Promise.all([b.e(1127), b.e(8429), b.e(1222), b.e(6247)]).then((() => () => b(18628))))), o("@rsgweb/locale-tools", "1.0.0", (() => Promise.all([b.e(2315), b.e(1127), b.e(1154)]).then((() => () => b(67439))))), o("@rsgweb/modules-core-user-action-menu", "0.0.0", (() => Promise.all([b.e(7405), b.e(1127), b.e(9690), b.e(1379), b.e(1755), b.e(5966), b.e(8618), b.e(4036), b.e(1788), b.e(2918), b.e(1898), b.e(6394), b.e(6773)]).then((() => () => b(96906))))), o("@rsgweb/rockstar-account", "0.0.0", (() => Promise.all([b.e(7405), b.e(6204), b.e(1127), b.e(1379), b.e(5966), b.e(7798)]).then((() => () => b(70344))))), o("@rsgweb/utils", "1.0.0", (() => Promise.all([b.e(7405), b.e(1127), b.e(1379), b.e(6681)]).then((() => () => b(81635))))), o("classnames", "2.5.1", (() => b.e(4082).then((() => () => b(84082))))), o("framer-motion", "7.10.3", (() => Promise.all([b.e(3963), b.e(1127)]).then((() => () => b(53963))))), o("gsap", "0.0.0", (() => b.e(5526).then((() => () => b(65526))))), o("lodash", "4.17.21", (() => b.e(9489).then((() => () => b(99489))))), o("react-dom", "18.3.1", (() => Promise.all([b.e(6019), b.e(1127)]).then((() => () => b(66019))))), o("react-popper", "2.3.0", (() => Promise.all([b.e(1127), b.e(8429), b.e(3386), b.e(9794)]).then((() => () => b(99794))))), o("react-remove-scroll", "2.6.3", (() => Promise.all([b.e(3724), b.e(1127)]).then((() => () => b(33724))))), o("react-router-dom", "6.30.0", (() => Promise.all([b.e(9728), b.e(1127), b.e(8429)]).then((() => () => b(49728))))), o("react", "18.2.0", (() => b.e(614).then((() => () => b(20614))))), o("react", "18.3.1", (() => b.e(1138).then((() => () => b(11138))))), o("spatial-navigation-polyfill", "1.3.1", (() => b.e(7919).then((() => () => b(37919)))))), e[d] = n.length ? Promise.all(n).then((() => e[d] = 1)) : 1
            }
          }
        })(), (() => {
          var e;
          b.g.importScripts && (e = b.g.location + "");
          var a = b.g.document;
          if (!e && a && (a.currentScript && "SCRIPT" === a.currentScript.tagName.toUpperCase() && (e = a.currentScript.src), !e)) {
            var d = a.getElementsByTagName("script");
            if (d.length)
              for (var r = d.length - 1; r > -1 && (!e || !/^http(s?):/.test(e));) e = d[r--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), b.p = e
        })(), (() => {
          var e = e => {
              var a = e => e.split(".").map((e => +e == e ? +e : e)),
                d = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
                r = d[1] ? a(d[1]) : [];
              return d[2] && (r.length++, r.push.apply(r, a(d[2]))), d[3] && (r.push([]), r.push.apply(r, a(d[3]))), r
            },
            a = (a, d) => {
              a = e(a), d = e(d);
              for (var r = 0;;) {
                if (r >= a.length) return r < d.length && "u" != (typeof d[r])[0];
                var t = a[r],
                  f = (typeof t)[0];
                if (r >= d.length) return "u" == f;
                var c = d[r],
                  o = (typeof c)[0];
                if (f != o) return "o" == f && "n" == o || "s" == o || "u" == f;
                if ("o" != f && "u" != f && t != c) return t < c;
                r++
              }
            },
            d = e => {
              var a = e[0],
                r = "";
              if (1 === e.length) return "*";
              if (a + .5) {
                r += 0 == a ? ">=" : -1 == a ? "<" : 1 == a ? "^" : 2 == a ? "~" : a > 0 ? "=" : "!=";
                for (var t = 1, f = 1; f < e.length; f++) t--, r += "u" == (typeof(o = e[f]))[0] ? "-" : (t > 0 ? "." : "") + (t = 2, o);
                return r
              }
              var c = [];
              for (f = 1; f < e.length; f++) {
                var o = e[f];
                c.push(0 === o ? "not(" + n() + ")" : 1 === o ? "(" + n() + " || " + n() + ")" : 2 === o ? c.pop() + " " + c.pop() : d(o))
              }
              return n();

              function n() {
                return c.pop().replace(/^\((.+)\)$/, "$1")
              }
            },
            r = (a, d) => {
              if (0 in a) {
                d = e(d);
                var t = a[0],
                  f = t < 0;
                f && (t = -t - 1);
                for (var c = 0, o = 1, n = !0;; o++, c++) {
                  var b, i, l = o < a.length ? (typeof a[o])[0] : "";
                  if (c >= d.length || "o" == (i = (typeof(b = d[c]))[0])) return !n || ("u" == l ? o > t && !f : "" == l != f);
                  if ("u" == i) {
                    if (!n || "u" != l) return !1
                  } else if (n)
                    if (l == i)
                      if (o <= t) {
                        if (b != a[o]) return !1
                      } else {
                        if (f ? b > a[o] : b < a[o]) return !1;
                        b != a[o] && (n = !1)
                      }
                  else if ("s" != l && "n" != l) {
                    if (f || o <= t) return !1;
                    n = !1, o--
                  } else {
                    if (o <= t || i < l != f) return !1;
                    n = !1
                  } else "s" != l && "n" != l && (n = !1, o--)
                }
              }
              var s = [],
                u = s.pop.bind(s);
              for (c = 1; c < a.length; c++) {
                var h = a[c];
                s.push(1 == h ? u() | u() : 2 == h ? u() & u() : h ? r(h, d) : !u())
              }
              return !!u()
            },
            t = (e, a) => e && b.o(e, a),
            f = e => (e.loaded = 1, e.get()),
            c = e => Object.keys(e).reduce(((a, d) => (e[d].eager && (a[d] = e[d]), a)), {}),
            o = e => {
              throw new Error(e)
            },
            n = e => function(a, d, r, t, f) {
              var c = b.I(a);
              return c && c.then && !r ? c.then(e.bind(e, a, b.S[a], d, !1, t, f)) : e(a, b.S[a], d, r, t, f)
            },
            i = (e, a, d) => d ? d() : ((e, a) => o("Shared module " + a + " doesn't exist in shared scope " + e))(e, a),
            l = n(((e, n, b, l, s, u) => {
              if (!t(n, b)) return i(e, b, u);
              var h = ((e, d, t, f) => {
                var o = f ? c(e[d]) : e[d];
                return (d = Object.keys(o).reduce(((e, d) => !r(t, d) || e && !a(e, d) ? e : d), 0)) && o[d]
              })(n, b, s, l);
              return h ? f(h) : u ? u() : void o(((e, a, r, t, f) => {
                var c = e[r];
                return "No satisfying version (" + d(t) + ")" + (f ? " for eager consumption" : "") + " of shared module " + r + " found in shared scope " + a + ".\nAvailable versions: " + Object.keys(c).map((e => e + " from " + c[e].from)).join(", ")
              })(n, e, b, s, l))
            })),
            s = n(((e, o, n, b, l, s) => {
              if (!t(o, n)) return i(e, n, s);
              var u, h = ((e, d, r) => {
                var t = r ? c(e[d]) : e[d];
                return Object.keys(t).reduce(((e, d) => !e || !t[e].loaded && a(e, d) ? d : e), 0)
              })(o, n, b);
              return r(l, h) || (u = ((e, a, r, t) => "Unsatisfied version " + r + " from " + (r && e[a][r].from) + " of shared singleton module " + a + " (required " + d(t) + ")")(o, n, h, l), "undefined" != typeof console && console.warn && console.warn(u)), f(o[n][h])
            })),
            u = {},
            h = {
              71127: () => s("default", "react", !1, [1, 18, 2, 0], (() => b.e(1138).then((() => () => b(11138))))),
              79158: () => l("default", "@radix-ui/react-use-controllable-state", !1, [1, 1, 1, 0], (() => b.e(5775).then((() => () => b(38156))))),
              21222: () => l("default", "@radix-ui/react-slot", !1, [1, 1, 1, 0], (() => b.e(1589).then((() => () => b(83970))))),
              74406: () => l("default", "@radix-ui/react-id", !1, [1, 1, 1, 0], (() => b.e(7568).then((() => () => b(95187))))),
              63694: () => l("default", "@radix-ui/react-visually-hidden", !1, [1, 1, 1, 2], (() => Promise.all([b.e(8429), b.e(1222), b.e(8628)]).then((() => () => b(18628))))),
              9623: () => l("default", "react-router-dom", !1, [1, 6, 11, 2], (() => Promise.all([b.e(9728), b.e(8429)]).then((() => () => b(49728))))),
              16188: () => l("default", "lodash", !1, [1, 4, 17, 21], (() => b.e(9489).then((() => () => b(99489))))),
              34902: () => l("default", "@radix-ui/react-portal", !1, [1, 1, 1, 4], (() => Promise.all([b.e(8429), b.e(4171)]).then((() => () => b(96552))))),
              91755: () => l("default", "@foundry-int/utils", !1, [1, 1], (() => Promise.all([b.e(3286), b.e(4105)]).then((() => () => b(84105))))),
              95966: () => l("default", "@rsgweb/utils", !1, [1, "workspace:^"], (() => Promise.all([b.e(7405), b.e(1379)]).then((() => () => b(81635))))),
              78618: () => l("default", "@foundry/icons", !1, [1, 4], (() => Promise.all([b.e(2109), b.e(3694), b.e(7421)]).then((() => () => b(32109))))),
              24036: () => l("default", "classnames", !1, [1, 2, 5, 1], (() => b.e(4082).then((() => () => b(84082))))),
              81788: () => l("default", "@rsgweb/locale-tools", !1, [1, "workspace:^"], (() => Promise.all([b.e(2315), b.e(8773)]).then((() => () => b(67439))))),
              24780: () => l("default", "@radix-ui/react-dialog", !1, [1, 1, 1, 6], (() => Promise.all([b.e(2501), b.e(6846), b.e(8429), b.e(9158), b.e(9690)]).then((() => () => b(56846))))),
              63582: () => l("default", "framer-motion", !1, [1, 7, 5, 1], (() => b.e(3963).then((() => () => b(53963))))),
              73579: () => s("default", "react", !1, [1, 18, 2, 0], (() => b.e(614).then((() => () => b(20614))))),
              79952: () => l("default", "spatial-navigation-polyfill", !1, [1, 1, 3, 1], (() => b.e(7919).then((() => () => b(37919))))),
              2918: () => l("default", "@rsgweb/rockstar-account", !1, [1, "workspace:^"], (() => Promise.all([b.e(6204), b.e(8305)]).then((() => () => b(70344))))),
              61898: () => l("default", "@foundry/react", !1, [1, 4, 1, 5], (() => Promise.all([b.e(2501), b.e(1689), b.e(1579), b.e(3770), b.e(8429), b.e(9158), b.e(1222), b.e(9690), b.e(4406), b.e(3694), b.e(4902), b.e(4780), b.e(1044)]).then((() => () => b(93770))))),
              9046: () => l("default", "@radix-ui/react-navigation-menu", !1, [1, 1, 2, 1], (() => Promise.all([b.e(2501), b.e(648), b.e(8429), b.e(9158)]).then((() => () => b(40648))))),
              42638: () => l("default", "@radix-ui/react-popover", !1, [1, 1, 1, 4], (() => Promise.all([b.e(2501), b.e(1579), b.e(8429), b.e(9158), b.e(9690), b.e(8588)]).then((() => () => b(76207))))),
              61339: () => l("default", "@radix-ui/react-accordion", !1, [1, 1, 2, 2], (() => Promise.all([b.e(8784), b.e(8429), b.e(9158)]).then((() => () => b(48784))))),
              13581: () => l("default", "gsap", !1, [1, "workspace:^"], (() => b.e(5526).then((() => () => b(65526))))),
              20270: () => l("default", "@rsgweb/modules-core-user-action-menu", !1, [1, "workspace:^"], (() => Promise.all([b.e(9690), b.e(1755), b.e(8618), b.e(4036), b.e(1898), b.e(6394)]).then((() => () => b(96906))))),
              75971: () => l("default", "react-popper", !1, [1, 2, 3, 0], (() => Promise.all([b.e(8429), b.e(3386), b.e(7413)]).then((() => () => b(99794))))),
              18429: () => s("default", "react-dom", !1, [1, 18, 2, 0], (() => b.e(6019).then((() => () => b(66019))))),
              19690: () => l("default", "react-remove-scroll", !1, [1, 2, 5, 7], (() => b.e(3724).then((() => () => b(33724))))),
              21044: () => l("default", "@foundry-int/utils", !1, [1, 1], (() => Promise.all([b.e(3286), b.e(507)]).then((() => () => b(32888))))),
              43386: () => l("default", "@popperjs/core", !1, [1, 2, 11, 8], (() => b.e(8258).then((() => () => b(18258)))))
            },
            p = {
              1044: [21044],
              1127: [71127],
              1222: [21222],
              1379: [9623, 16188],
              1755: [91755],
              1788: [81788],
              1898: [61898],
              2918: [2918],
              3386: [43386],
              3694: [63694],
              4036: [24036],
              4406: [74406],
              4780: [24780],
              4902: [34902],
              5809: [13581, 20270, 75971],
              5966: [95966],
              8429: [18429],
              8618: [78618],
              8846: [9046, 42638, 61339],
              9100: [63582, 73579, 79952],
              9158: [79158],
              9690: [19690]
            },
            m = {};
          b.f.consumes = (e, a) => {
            b.o(p, e) && p[e].forEach((e => {
              if (b.o(u, e)) return a.push(u[e]);
              if (!m[e]) {
                var d = a => {
                  u[e] = 0, b.m[e] = d => {
                    delete b.c[e], d.exports = a()
                  }
                };
                m[e] = !0;
                var r = a => {
                  delete u[e], b.m[e] = d => {
                    throw delete b.c[e], a
                  }
                };
                try {
                  var t = h[e]();
                  t.then ? a.push(u[e] = t.then(d).catch(r)) : d(t)
                } catch (e) {
                  r(e)
                }
              }
            }))
          }
        })(), (() => {
          if ("undefined" != typeof document) {
            var e = {
              4295: 0
            };
            b.f.miniCss = (a, d) => {
              e[a] ? d.push(e[a]) : 0 !== e[a] && {
                1689: 1,
                3684: 1,
                3770: 1,
                5137: 1,
                5809: 1,
                6394: 1,
                7421: 1,
                7818: 1,
                8846: 1
              } [a] && d.push(e[a] = (e => new Promise(((a, d) => {
                var r = b.miniCssF(e),
                  t = b.p + r;
                if (((e, a) => {
                    for (var d = document.getElementsByTagName("link"), r = 0; r < d.length; r++) {
                      var t = (c = d[r]).getAttribute("data-href") || c.getAttribute("href");
                      if ("stylesheet" === c.rel && (t === e || t === a)) return c
                    }
                    var f = document.getElementsByTagName("style");
                    for (r = 0; r < f.length; r++) {
                      var c;
                      if ((t = (c = f[r]).getAttribute("data-href")) === e || t === a) return c
                    }
                  })(r, t)) return a();
                ((e, a, d, r, t) => {
                  var f = document.createElement("link");
                  f.rel = "stylesheet", f.type = "text/css", b.nc && (f.nonce = b.nc), f.onerror = f.onload = d => {
                    if (f.onerror = f.onload = null, "load" === d.type) r();
                    else {
                      var c = d && d.type,
                        o = d && d.target && d.target.href || a,
                        n = new Error("Loading CSS chunk " + e + " failed.\n(" + c + ": " + o + ")");
                      n.name = "ChunkLoadError", n.code = "CSS_CHUNK_LOAD_FAILED", n.type = c, n.request = o, f.parentNode && f.parentNode.removeChild(f), t(n)
                    }
                  }, f.href = a, document.head.appendChild(f)
                })(e, t, 0, a, d)
              })))(a).then((() => {
                e[a] = 0
              }), (d => {
                throw delete e[a], d
              })))
            }
          }
        })(), (() => {
          var e = {
            4295: 0
          };
          b.f.j = (a, d) => {
            var r = b.o(e, a) ? e[a] : void 0;
            if (0 !== r)
              if (r) d.push(r[2]);
              else if (/^(1(044|127|222|755|788|898)|4(036|406|780|902)|(291|861|915)8|3386|3694|5966|7421|8429|9690)$/.test(a)) e[a] = 0;
            else {
              var t = new Promise(((d, t) => r = e[a] = [d, t]));
              d.push(r[2] = t);
              var f = b.p + b.u(a),
                c = new Error;
              b.l(f, (d => {
                if (b.o(e, a) && (0 !== (r = e[a]) && (e[a] = void 0), r)) {
                  var t = d && ("load" === d.type ? "missing" : d.type),
                    f = d && d.target && d.target.src;
                  c.message = "Loading chunk " + a + " failed.\n(" + t + ": " + f + ")", c.name = "ChunkLoadError", c.type = t, c.request = f, r[1](c)
                }
              }), "chunk-" + a, a)
            }
          };
          var a = (a, d) => {
              var r, t, f = d[0],
                c = d[1],
                o = d[2],
                n = 0;
              if (f.some((a => 0 !== e[a]))) {
                for (r in c) b.o(c, r) && (b.m[r] = c[r]);
                o && o(b)
              }
              for (a && a(d); n < f.length; n++) t = f[n], b.o(e, t) && e[t] && e[t][0](), e[t] = 0
            },
            d = self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || [];
          d.forEach(a.bind(null, 0)), d.push = a.bind(null, d.push.bind(d))
        })(), b.nc = void 0, b(37389), b(84823)
      })())
    }
  }
}));