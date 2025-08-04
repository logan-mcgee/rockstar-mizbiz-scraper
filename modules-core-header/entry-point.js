try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "5758b45b-862b-466e-af6b-221b65bbaa6d", e._sentryDebugIdIdentifier = "sentry-dbid-5758b45b-862b-466e-af6b-221b65bbaa6d")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "481a8939e4cf70a1b263cf01cb4b1a83d2a29ebd",
    packageName: "@rockstargames/modules-core-header",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "481a8939e4cf70a1b263cf01cb4b1a83d2a29ebd"
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
          b = {};

        function n(e) {
          var a = b[e];
          if (void 0 !== a) return a.exports;
          var d = b[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return o[e].call(d.exports, d, d.exports, n), d.loaded = !0, d.exports
        }
        return n.m = o, n.c = b, n.y = a, n.amdO = {}, n.n = e => {
          var a = e && e.__esModule ? () => e.default : () => e;
          return n.d(a, {
            a
          }), a
        }, d = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, n.t = function(a, r) {
          if (1 & r && (a = this(a)), 8 & r) return a;
          if ("object" == typeof a && a) {
            if (4 & r && a.__esModule) return a;
            if (16 & r && "function" == typeof a.then) return a
          }
          var t = Object.create(null);
          n.r(t);
          var f = {};
          e = e || [null, d({}), d([]), d(d)];
          for (var c = 2 & r && a;
            "object" == typeof c && !~e.indexOf(c); c = d(c)) Object.getOwnPropertyNames(c).forEach((e => f[e] = () => a[e]));
          return f.default = () => a, n.d(t, f), t
        }, n.d = (e, a) => {
          for (var d in a) n.o(a, d) && !n.o(e, d) && Object.defineProperty(e, d, {
            enumerable: !0,
            get: a[d]
          })
        }, n.f = {}, n.e = e => Promise.all(Object.keys(n.f).reduce(((a, d) => (n.f[d](e, a), a)), [])), n.u = e => "js/" + {
          114: "e6c3fa2657391a44bfb0be492999abbd",
          131: "13bddf0d37e539a8cdcc5840ce898574",
          278: "29434a8fe10235364b8743293ba171d6",
          299: "186c9002930143108c7cef757aec91c8",
          314: "0f256c730dcd10f72c4604c407ec3978",
          377: "16adb7382072bf444c2c199c2167907a",
          490: "15d8ee5f59e42e18dcd1fbd409e3affd",
          507: "81e82b01d70b0cc9d617ce691b117637",
          614: "2bfc0c2dad42e5c08c2a083abbf2be87",
          648: "553095715031f072eb7a2d4fc23454c0",
          662: "b0f5fb4e1642bb60588854cce04221de",
          824: "9f162bb5c86dd108cdcce507a5b7d9c9",
          888: "71a805e14400e99083e5aa9d34f2b75c",
          907: "77198d1a5d10f38ab2bff8a6d4f09812",
          954: "2de317ef22f3b161a8a0919ddaa5fd1a",
          969: "a4c31925f59e2327774a873e5a6ecb7c",
          1054: "f346a9d0d79f2a52dfedbd69e7299758",
          1138: "37ca23a82a9eb9e2d1145ef22b2b6ec8",
          1154: "1f1c77cb03a3dbcaee9912f3941b0ff5",
          1242: "7337f6009d94cffb36d7c7b38e5710e7",
          1379: "bff60ad0e8a94d002b5e828bfc747df0",
          1579: "437ce92ff38c8c45a603e946ff57faa9",
          1589: "41542067d724774cdb1c84d90ae40563",
          1607: "173905f8bc6028f51d21ac5a2a7cc9bb",
          1689: "452a3b156dfc26b5789b7cc6d66aadaf",
          1822: "f8ccf9cf2ed6c090b1fa433ba2027a80",
          1868: "3357384d81ef726ca2d9b802c6deed37",
          2109: "ab956c2d1edf516fbe15b3589aa2faae",
          2156: "f54cf491dc4bea9f5ea7ce27b433b85b",
          2171: "e577380f04bed8749941fd1c091ab0f1",
          2221: "7b06e2fcbc88dad433b914949a0104bc",
          2243: "61772ff3b03fd3f9bb48e25d0e0f2229",
          2315: "a5a9958447e20848a3edeaf8a4c2c2c1",
          2347: "a1d7e5fbb2f909a71f92d5317645bfb9",
          2365: "6136b37d9b37329d822c817d6408f7f7",
          2398: "19f62230e1ab2a2f67d1883eaadd930d",
          2466: "4269d299622ef8b0a9cfea24d0ea6af6",
          2501: "08547a087af71cc262b3d6bee95ffe5f",
          2642: "07bb639d7a1c1e7699d87d90c9abee30",
          2678: "9b232906a2bad3cea916aeeb19017002",
          2864: "9c584c9e8667c13ea2ff61965a232f72",
          2888: "7cd3cd81563d0b9e1ac515eda695dd03",
          2941: "1aa69f57b24080d7fd00b3d9d57a9e51",
          3034: "dd710a9207b86789c9faedc2446f083f",
          3084: "a5082673abadffa121e02aed5c3336a3",
          3197: "a05efb75fa3235d974616551bc37b3c5",
          3286: "cab7396dbd4eabf38e483bbe815a4d01",
          3343: "5aca65a09e3814955a9debb6c6473d26",
          3370: "6df7f91ec3bf4a8ecf24c1ac055b360e",
          3475: "82b33868cf93d0e3571a8421f132cd7a",
          3486: "1cdcb96a8a98176be910a38240fdfe40",
          3622: "5ef46c6a6888181589f567cc664fc009",
          3684: "e612d40f073d8964ce4e1ce9dcf4ad73",
          3697: "0a829789ecfeedc0bf535c146fa551fc",
          3724: "de59be951274287fa56a6e858b0d1c5f",
          3770: "7f2e97d73996e11e62d29983abd7df03",
          3885: "5a8c9fd88330382d725574faacdbd8a2",
          3941: "4aa6812c0fdb82d327d7fec48d34deee",
          3963: "460a3826aa17510c0e7f9fb0c40c5108",
          3970: "70b11670a4e9eb2269609ae2e9fc9fca",
          4011: "c044386250721a86331bb19b2d149deb",
          4082: "3aa5804a6863ffd8dc9e23f30ca37a3c",
          4105: "1ea363da0776efb33be6c674b1f1be69",
          4171: "030bcd206abd3343c14858a717b733f4",
          4186: "b6df233e08432a82da84049a6bf04f31",
          4220: "c4000755061352f376d8bf561a02f560",
          4528: "ff9393dacde28609f1757a90d16be683",
          4621: "bab0c82605ded66c337e304226e539c0",
          4700: "fc066d5a4103529323015e8631001c1d",
          4710: "a7e4922a5a64f57c8fff3f992f2db80c",
          4731: "0d9f693049c07aa41d78aff8cfa32d48",
          4799: "909d20ec301cf2a95c69ff30341a32fd",
          4851: "995e628d86145a861cdb68c839e5ec69",
          4861: "fd1166ce64a4374deb615efcae9663a4",
          4913: "4ba52b79fb16b380dfde314a4a67e4ee",
          5018: "7741d34ac14a127dc99199cebaa9b766",
          5137: "bb2d234f9b2d260e4505d0b1001185b2",
          5187: "f7c529c37c788eedc3e58a1ee0dfd654",
          5233: "fc872712054fe48bd392f838217fc3e3",
          5247: "cfaf0410b20d7eed69e87328977f054f",
          5259: "c61f9c54bbbf979a316c434203924a90",
          5526: "461a9612e54d03783b8f2f0084130eda",
          5530: "dfbe6a90b269a91b6f062280cd2a2316",
          5639: "5cdb0fcdef63de96758bd41336e96f1c",
          5663: "dbe6665911f983b71e29abf095c65e45",
          5716: "dca3535b50ff6b2f16503e5d7f82b283",
          5742: "ef45c3c23c34945e9ffe6b5726d34a57",
          5775: "746b59816c5c672c03c277071fc3afbf",
          5809: "6ad21a43a6b11e62fc59c46aee7f9011",
          5830: "23a5a261cf7999e6709141c9e1f02383",
          5832: "ba09f451a4095c97c4828d2caa7efa4e",
          6019: "be79e635262044893f2f1d3297eb0185",
          6204: "6c7f70af258d159e24fd98d2ee59fd49",
          6207: "a05a9d5f2747c99fbf8b68a348439f33",
          6247: "5be7eb92f3d531d379cb80a140e1019b",
          6267: "ca89d3a8a549f73b33efabbb78e8d2f6",
          6280: "d902212cf3fc336f134cfd99311a275d",
          6285: "fa39caac087438c3c7e2c43a5b47da1b",
          6361: "13b48c8b3db9355139067cbdc07d4245",
          6394: "4fc90dacd9d74d4f019fc55494470960",
          6552: "8120eeccb9e163d421e3258f7816b67d",
          6664: "79e7e9e4dcc9dadc34cf4fbeb78357ec",
          6681: "8a668b8c37327b650d5e0cb699a90882",
          6773: "27386d6cfa628237dbbd9b9a8c27107f",
          6846: "57e4bc20be21d9dedd38782254c1b1fd",
          6879: "b7d863a2f63298ebb0cda3d19de1cfcc",
          6891: "4cafd3e17209b7d10bf728f734a2e79d",
          6940: "244bfe5d72afb337828d9b686f4649bc",
          6997: "c7f4ea439259110c3bfb8bb0f5e52b3b",
          7010: "1a2ad6e08a64f392fb3e48b189d2798d",
          7039: "2f02412621d376b4eec115bd62f1e96b",
          7073: "6b9ad8b42b60454786a26468b35e02bd",
          7405: "5d2eb783c55728434434ee204ce5d9d1",
          7413: "bdababa1c41aa3a7b2c3f41bb96b575f",
          7436: "4b55ba9d8eede88abf323eba8e702960",
          7452: "401057a70894333b4d878cec0e7242ce",
          7453: "7dc5920edc8a5222a2dcd26a9ac7a85e",
          7568: "b64f8287e2277fc82b7c7e66c31957ff",
          7798: "fd5b2afd57600464a67b33894be4b690",
          7818: "8664a1993341dcb2f858f988c646e291",
          7919: "ef0edaa22045cd17bf49926d692f4c80",
          7970: "24fc2be675968c121f43a7d62509bcfd",
          8156: "5910089106494e2cef8a7b2ee11d4119",
          8258: "64c3e4ad75984046c534c9353f80af28",
          8272: "65ef9f9ffb576b5259670597ee241fb0",
          8305: "edc9ccc272f03eec6c2a5fa1a214e7ea",
          8391: "ec759d84c1bac2be94a728199ef70a75",
          8513: "51a23a6ba652bc0316042e60c80aba69",
          8573: "f2564018f4f401e4ed7212e2bffbcda3",
          8588: "0a15b5e12338e3229ee4682237eec1e8",
          8628: "c5773779bca5fe2108d3f1b1924760ed",
          8755: "0226cae5954e83b2a114003fb8e1c2e3",
          8773: "694b5c7cc8511811003705fa02b3a366",
          8784: "7905cda391deeb24c0074840588abe4c",
          8846: "ee3f70f88f4f63aad49761fdfe9ddaf3",
          8880: "808f3e4aaf7275730b4febd12f1ad502",
          8970: "49b52b30b54977773442bd853b0a6a6e",
          9022: "e5632b7996124439d1940f1631e8edd1",
          9028: "7d73f13c0c2e8e3b9f8123895708a466",
          9100: "dbc366b914649353ea55b203f50660e6",
          9126: "3425d8b595eac2f749dac02d38a23b8c",
          9368: "cd423c9407f820a863f8c77845d9293e",
          9377: "22ce5361c5b2390c7d3344182864b957",
          9474: "b8752cb0c5d0714675a2ff5c6068879b",
          9489: "a2bc17ee882c3b2023c3f47c6b244f33",
          9615: "e3f77760ab5176c5570cbd6f88e71f4b",
          9642: "2f462eb59f795563ee15320ec1cd8ee5",
          9728: "e41d87041781b0be9641e4fdd32fb682",
          9794: "e28c7e7a4c60e38bc2af5f6a5d3de63a",
          9936: "a17915573f4783414538bb37b24279d1",
          9990: "bdb501c1d6b6bdc7ae64f5e0b848ee4c"
        } [e] + ".js", n.miniCssF = e => "css/" + {
          1689: "b9dc2235e776e8726e4d5f609c428a07",
          3684: "8b73c442ec2b588e00961f240409b9a1",
          3770: "94889ac34912db41f5debeb477992c85",
          5137: "0b7c6b739ca7c4028a37a76ae61d20c6",
          5809: "cc964df1c18a49208796013887093ade",
          6394: "15aedff087a5dd65b49b5b9915031f50",
          7421: "8b73c442ec2b588e00961f240409b9a1",
          7818: "94edb376d1a211556a5bb2b298f38183",
          8846: "2f36414d0c93e7d0c8d4b92b821e7cbd"
        } [e] + ".css", n.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), n.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), r = {}, t = "@rockstargames/modules-core-header:", n.l = (e, a, d, f) => {
          if (r[e]) r[e].push(a);
          else {
            var c, o;
            if (void 0 !== d)
              for (var b = document.getElementsByTagName("script"), i = 0; i < b.length; i++) {
                var l = b[i];
                if (l.getAttribute("src") == e || l.getAttribute("data-webpack") == t + d) {
                  c = l;
                  break
                }
              }
            c || (o = !0, (c = document.createElement("script")).charset = "utf-8", c.timeout = 120, n.nc && c.setAttribute("nonce", n.nc), c.setAttribute("data-webpack", t + d), c.src = e), r[e] = [a];
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
        }, n.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, n.nmd = e => (e.paths = [], e.children || (e.children = []), e), f = {}, c = {}, n.f.remotes = (e, a) => {
          n.o(f, e) && f[e].forEach((e => {
            var d = n.R;
            d || (d = []);
            var r = c[e];
            if (!(d.indexOf(r) >= 0)) {
              if (d.push(r), r.p) return a.push(r.p);
              var t = a => {
                  a || (a = new Error("Container missing")), "string" == typeof a.message && (a.message += '\nwhile loading "' + r[1] + '" from ' + r[2]), n.m[e] = () => {
                    throw a
                  }, r.p = 0
                },
                f = (e, d, f, c, o, b) => {
                  try {
                    var n = e(d, f);
                    if (!n || !n.then) return o(n, c, b);
                    var i = n.then((e => o(e, c)), t);
                    if (!b) return i;
                    a.push(r.p = i)
                  } catch (e) {
                    t(e)
                  }
                },
                o = (e, a, t) => f(a.get, r[1], d, 0, b, t),
                b = a => {
                  r.p = 1, n.m[e] = e => {
                    e.exports = a()
                  }
                };
              f(n, r[2], 0, 0, ((e, a, d) => e ? f(n.I, r[0], 0, e, o, d) : t()), 1)
            }
          }))
        }, (() => {
          n.S = {};
          var e = {},
            a = {};
          n.I = (d, r) => {
            r || (r = []);
            var t = a[d];
            if (t || (t = a[d] = {}), !(r.indexOf(t) >= 0)) {
              if (r.push(t), e[d]) return e[d];
              n.o(n.S, d) || (n.S[d] = {});
              var f = n.S[d],
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
                b = [];
              return "default" === d && (o("@foundry-int/utils", "1.5.4", (() => Promise.all([n.e(3286), n.e(4105)]).then((() => () => n(84105))))), o("@foundry-int/utils", "1.5.5-rc.1", (() => Promise.all([n.e(3286), n.e(2888)]).then((() => () => n(32888))))), o("@foundry/icons", "4.1.4", (() => Promise.all([n.e(2109), n.e(1127), n.e(3694), n.e(1755), n.e(3684)]).then((() => () => n(32109))))), o("@foundry/react", "4.1.5", (() => Promise.all([n.e(2501), n.e(1689), n.e(1579), n.e(3770), n.e(1127), n.e(8429), n.e(9158), n.e(1222), n.e(9690), n.e(4406), n.e(3694), n.e(4902), n.e(1755), n.e(8618), n.e(4780), n.e(1044), n.e(8513)]).then((() => () => n(93770))))), o("@popperjs/core", "2.11.8", (() => n.e(8258).then((() => () => n(18258))))), o("@radix-ui/react-accordion", "1.2.8", (() => Promise.all([n.e(8784), n.e(1127), n.e(8429), n.e(9158), n.e(1222), n.e(4406), n.e(954)]).then((() => () => n(48784))))), o("@radix-ui/react-dialog", "1.1.11", (() => Promise.all([n.e(2501), n.e(6846), n.e(1127), n.e(8429), n.e(9158), n.e(1222), n.e(9690), n.e(4406), n.e(4902), n.e(8573)]).then((() => () => n(56846))))), o("@radix-ui/react-id", "1.1.1", (() => Promise.all([n.e(1127), n.e(5187)]).then((() => () => n(95187))))), o("@radix-ui/react-navigation-menu", "1.2.10", (() => Promise.all([n.e(2501), n.e(648), n.e(1127), n.e(8429), n.e(9158), n.e(1222), n.e(4406), n.e(3694), n.e(5716)]).then((() => () => n(40648))))), o("@radix-ui/react-popover", "1.1.11", (() => Promise.all([n.e(2501), n.e(1579), n.e(1127), n.e(8429), n.e(9158), n.e(1222), n.e(9690), n.e(4406), n.e(4902), n.e(6207)]).then((() => () => n(76207))))), o("@radix-ui/react-portal", "1.1.6", (() => Promise.all([n.e(1127), n.e(8429), n.e(1222), n.e(6552)]).then((() => () => n(96552))))), o("@radix-ui/react-slot", "1.2.0", (() => Promise.all([n.e(1127), n.e(3970)]).then((() => () => n(83970))))), o("@radix-ui/react-use-controllable-state", "1.2.2", (() => Promise.all([n.e(1127), n.e(8156)]).then((() => () => n(38156))))), o("@radix-ui/react-visually-hidden", "1.2.0", (() => Promise.all([n.e(1127), n.e(8429), n.e(1222), n.e(6247)]).then((() => () => n(18628))))), o("@rsgweb/locale-tools", "1.0.0", (() => Promise.all([n.e(2315), n.e(1127), n.e(1154)]).then((() => () => n(67439))))), o("@rsgweb/modules-core-user-action-menu", "0.0.0", (() => Promise.all([n.e(7405), n.e(1127), n.e(9690), n.e(1379), n.e(1755), n.e(5966), n.e(8618), n.e(4036), n.e(1788), n.e(2918), n.e(1898), n.e(6394), n.e(6773)]).then((() => () => n(96906))))), o("@rsgweb/rockstar-account", "0.0.0", (() => Promise.all([n.e(7405), n.e(6204), n.e(1127), n.e(1379), n.e(5966), n.e(7798)]).then((() => () => n(70344))))), o("@rsgweb/utils", "1.0.0", (() => Promise.all([n.e(7405), n.e(1127), n.e(1379), n.e(6681)]).then((() => () => n(81635))))), o("classnames", "2.5.1", (() => n.e(4082).then((() => () => n(84082))))), o("framer-motion", "7.10.3", (() => Promise.all([n.e(3963), n.e(1127)]).then((() => () => n(53963))))), o("gsap", "0.0.0", (() => n.e(5526).then((() => () => n(65526))))), o("lodash", "4.17.21", (() => n.e(9489).then((() => () => n(99489))))), o("react-dom", "18.3.1", (() => Promise.all([n.e(6019), n.e(1127)]).then((() => () => n(66019))))), o("react-popper", "2.3.0", (() => Promise.all([n.e(1127), n.e(8429), n.e(3386), n.e(9794)]).then((() => () => n(99794))))), o("react-remove-scroll", "2.6.3", (() => Promise.all([n.e(3724), n.e(1127)]).then((() => () => n(33724))))), o("react-router-dom", "6.30.0", (() => Promise.all([n.e(9728), n.e(1127), n.e(8429)]).then((() => () => n(49728))))), o("react", "18.2.0", (() => n.e(614).then((() => () => n(20614))))), o("react", "18.3.1", (() => n.e(1138).then((() => () => n(11138))))), o("spatial-navigation-polyfill", "1.3.1", (() => n.e(7919).then((() => () => n(37919)))))), e[d] = b.length ? Promise.all(b).then((() => e[d] = 1)) : 1
            }
          }
        })(), (() => {
          var e;
          n.g.importScripts && (e = n.g.location + "");
          var a = n.g.document;
          if (!e && a && (a.currentScript && "SCRIPT" === a.currentScript.tagName.toUpperCase() && (e = a.currentScript.src), !e)) {
            var d = a.getElementsByTagName("script");
            if (d.length)
              for (var r = d.length - 1; r > -1 && (!e || !/^http(s?):/.test(e));) e = d[r--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), n.p = e
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
                c.push(0 === o ? "not(" + b() + ")" : 1 === o ? "(" + b() + " || " + b() + ")" : 2 === o ? c.pop() + " " + c.pop() : d(o))
              }
              return b();

              function b() {
                return c.pop().replace(/^\((.+)\)$/, "$1")
              }
            },
            r = (a, d) => {
              if (0 in a) {
                d = e(d);
                var t = a[0],
                  f = t < 0;
                f && (t = -t - 1);
                for (var c = 0, o = 1, b = !0;; o++, c++) {
                  var n, i, l = o < a.length ? (typeof a[o])[0] : "";
                  if (c >= d.length || "o" == (i = (typeof(n = d[c]))[0])) return !b || ("u" == l ? o > t && !f : "" == l != f);
                  if ("u" == i) {
                    if (!b || "u" != l) return !1
                  } else if (b)
                    if (l == i)
                      if (o <= t) {
                        if (n != a[o]) return !1
                      } else {
                        if (f ? n > a[o] : n < a[o]) return !1;
                        n != a[o] && (b = !1)
                      }
                  else if ("s" != l && "n" != l) {
                    if (f || o <= t) return !1;
                    b = !1, o--
                  } else {
                    if (o <= t || i < l != f) return !1;
                    b = !1
                  } else "s" != l && "n" != l && (b = !1, o--)
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
            t = (e, a) => e && n.o(e, a),
            f = e => (e.loaded = 1, e.get()),
            c = e => Object.keys(e).reduce(((a, d) => (e[d].eager && (a[d] = e[d]), a)), {}),
            o = e => {
              throw new Error(e)
            },
            b = e => function(a, d, r, t, f) {
              var c = n.I(a);
              return c && c.then && !r ? c.then(e.bind(e, a, n.S[a], d, !1, t, f)) : e(a, n.S[a], d, r, t, f)
            },
            i = (e, a, d) => d ? d() : ((e, a) => o("Shared module " + a + " doesn't exist in shared scope " + e))(e, a),
            l = b(((e, b, n, l, s, u) => {
              if (!t(b, n)) return i(e, n, u);
              var h = ((e, d, t, f) => {
                var o = f ? c(e[d]) : e[d];
                return (d = Object.keys(o).reduce(((e, d) => !r(t, d) || e && !a(e, d) ? e : d), 0)) && o[d]
              })(b, n, s, l);
              return h ? f(h) : u ? u() : void o(((e, a, r, t, f) => {
                var c = e[r];
                return "No satisfying version (" + d(t) + ")" + (f ? " for eager consumption" : "") + " of shared module " + r + " found in shared scope " + a + ".\nAvailable versions: " + Object.keys(c).map((e => e + " from " + c[e].from)).join(", ")
              })(b, e, n, s, l))
            })),
            s = b(((e, o, b, n, l, s) => {
              if (!t(o, b)) return i(e, b, s);
              var u, h = ((e, d, r) => {
                var t = r ? c(e[d]) : e[d];
                return Object.keys(t).reduce(((e, d) => !e || !t[e].loaded && a(e, d) ? d : e), 0)
              })(o, b, n);
              return r(l, h) || (u = ((e, a, r, t) => "Unsatisfied version " + r + " from " + (r && e[a][r].from) + " of shared singleton module " + a + " (required " + d(t) + ")")(o, b, h, l), "undefined" != typeof console && console.warn && console.warn(u)), f(o[b][h])
            })),
            u = {},
            h = {
              71127: () => s("default", "react", !1, [1, 18, 2, 0], (() => n.e(1138).then((() => () => n(11138))))),
              79158: () => l("default", "@radix-ui/react-use-controllable-state", !1, [1, 1, 1, 0], (() => n.e(5775).then((() => () => n(38156))))),
              21222: () => l("default", "@radix-ui/react-slot", !1, [1, 1, 1, 0], (() => n.e(1589).then((() => () => n(83970))))),
              74406: () => l("default", "@radix-ui/react-id", !1, [1, 1, 1, 0], (() => n.e(7568).then((() => () => n(95187))))),
              63694: () => l("default", "@radix-ui/react-visually-hidden", !1, [1, 1, 1, 2], (() => Promise.all([n.e(8429), n.e(1222), n.e(8628)]).then((() => () => n(18628))))),
              9623: () => l("default", "react-router-dom", !1, [1, 6, 11, 2], (() => Promise.all([n.e(9728), n.e(8429)]).then((() => () => n(49728))))),
              16188: () => l("default", "lodash", !1, [1, 4, 17, 21], (() => n.e(9489).then((() => () => n(99489))))),
              34902: () => l("default", "@radix-ui/react-portal", !1, [1, 1, 1, 4], (() => Promise.all([n.e(8429), n.e(4171)]).then((() => () => n(96552))))),
              91755: () => l("default", "@foundry-int/utils", !1, [1, 1], (() => Promise.all([n.e(3286), n.e(4105)]).then((() => () => n(84105))))),
              95966: () => l("default", "@rsgweb/utils", !1, [1, "workspace:^"], (() => Promise.all([n.e(7405), n.e(1379)]).then((() => () => n(81635))))),
              78618: () => l("default", "@foundry/icons", !1, [1, 4], (() => Promise.all([n.e(2109), n.e(3694), n.e(7421)]).then((() => () => n(32109))))),
              24036: () => l("default", "classnames", !1, [1, 2, 5, 1], (() => n.e(4082).then((() => () => n(84082))))),
              81788: () => l("default", "@rsgweb/locale-tools", !1, [1, "workspace:^"], (() => Promise.all([n.e(2315), n.e(8773)]).then((() => () => n(67439))))),
              24780: () => l("default", "@radix-ui/react-dialog", !1, [1, 1, 1, 6], (() => Promise.all([n.e(2501), n.e(6846), n.e(8429), n.e(9158), n.e(9690)]).then((() => () => n(56846))))),
              63582: () => l("default", "framer-motion", !1, [1, 7, 5, 1], (() => n.e(3963).then((() => () => n(53963))))),
              73579: () => s("default", "react", !1, [1, 18, 2, 0], (() => n.e(614).then((() => () => n(20614))))),
              79952: () => l("default", "spatial-navigation-polyfill", !1, [1, 1, 3, 1], (() => n.e(7919).then((() => () => n(37919))))),
              2918: () => l("default", "@rsgweb/rockstar-account", !1, [1, "workspace:^"], (() => Promise.all([n.e(6204), n.e(8305)]).then((() => () => n(70344))))),
              61898: () => l("default", "@foundry/react", !1, [1, 4, 1, 5], (() => Promise.all([n.e(2501), n.e(1689), n.e(1579), n.e(3770), n.e(8429), n.e(9158), n.e(1222), n.e(9690), n.e(4406), n.e(3694), n.e(4902), n.e(4780), n.e(1044)]).then((() => () => n(93770))))),
              9046: () => l("default", "@radix-ui/react-navigation-menu", !1, [1, 1, 2, 1], (() => Promise.all([n.e(2501), n.e(648), n.e(8429), n.e(9158)]).then((() => () => n(40648))))),
              42638: () => l("default", "@radix-ui/react-popover", !1, [1, 1, 1, 4], (() => Promise.all([n.e(2501), n.e(1579), n.e(8429), n.e(9158), n.e(9690), n.e(8588)]).then((() => () => n(76207))))),
              61339: () => l("default", "@radix-ui/react-accordion", !1, [1, 1, 2, 2], (() => Promise.all([n.e(8784), n.e(8429), n.e(9158)]).then((() => () => n(48784))))),
              13581: () => l("default", "gsap", !1, [1, "workspace:^"], (() => n.e(5526).then((() => () => n(65526))))),
              20270: () => l("default", "@rsgweb/modules-core-user-action-menu", !1, [1, "workspace:^"], (() => Promise.all([n.e(9690), n.e(1755), n.e(8618), n.e(4036), n.e(1898), n.e(6394)]).then((() => () => n(96906))))),
              75971: () => l("default", "react-popper", !1, [1, 2, 3, 0], (() => Promise.all([n.e(8429), n.e(3386), n.e(7413)]).then((() => () => n(99794))))),
              18429: () => s("default", "react-dom", !1, [1, 18, 2, 0], (() => n.e(6019).then((() => () => n(66019))))),
              19690: () => l("default", "react-remove-scroll", !1, [1, 2, 5, 7], (() => n.e(3724).then((() => () => n(33724))))),
              21044: () => l("default", "@foundry-int/utils", !1, [1, 1], (() => Promise.all([n.e(3286), n.e(507)]).then((() => () => n(32888))))),
              43386: () => l("default", "@popperjs/core", !1, [1, 2, 11, 8], (() => n.e(8258).then((() => () => n(18258)))))
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
          n.f.consumes = (e, a) => {
            n.o(p, e) && p[e].forEach((e => {
              if (n.o(u, e)) return a.push(u[e]);
              if (!m[e]) {
                var d = a => {
                  u[e] = 0, n.m[e] = d => {
                    delete n.c[e], d.exports = a()
                  }
                };
                m[e] = !0;
                var r = a => {
                  delete u[e], n.m[e] = d => {
                    throw delete n.c[e], a
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
            n.f.miniCss = (a, d) => {
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
                var r = n.miniCssF(e),
                  t = n.p + r;
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
                  f.rel = "stylesheet", f.type = "text/css", n.nc && (f.nonce = n.nc), f.onerror = f.onload = d => {
                    if (f.onerror = f.onload = null, "load" === d.type) r();
                    else {
                      var c = d && d.type,
                        o = d && d.target && d.target.href || a,
                        b = new Error("Loading CSS chunk " + e + " failed.\n(" + c + ": " + o + ")");
                      b.name = "ChunkLoadError", b.code = "CSS_CHUNK_LOAD_FAILED", b.type = c, b.request = o, f.parentNode && f.parentNode.removeChild(f), t(b)
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
          n.f.j = (a, d) => {
            var r = n.o(e, a) ? e[a] : void 0;
            if (0 !== r)
              if (r) d.push(r[2]);
              else if (/^(1(044|127|222|755|788|898)|4(036|406|780|902)|(291|861|915)8|3386|3694|5966|7421|8429|9690)$/.test(a)) e[a] = 0;
            else {
              var t = new Promise(((d, t) => r = e[a] = [d, t]));
              d.push(r[2] = t);
              var f = n.p + n.u(a),
                c = new Error;
              n.l(f, (d => {
                if (n.o(e, a) && (0 !== (r = e[a]) && (e[a] = void 0), r)) {
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
                b = 0;
              if (f.some((a => 0 !== e[a]))) {
                for (r in c) n.o(c, r) && (n.m[r] = c[r]);
                o && o(n)
              }
              for (a && a(d); b < f.length; b++) t = f[b], n.o(e, t) && e[t] && e[t][0](), e[t] = 0
            },
            d = self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || [];
          d.forEach(a.bind(null, 0)), d.push = a.bind(null, d.push.bind(d))
        })(), n.nc = void 0, n(37389), n(84823)
      })())
    }
  }
}));