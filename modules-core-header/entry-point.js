! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "b321daba-32dc-496a-a9b2-5bf9b64d251e", e._sentryDebugIdIdentifier = "sentry-dbid-b321daba-32dc-496a-a9b2-5bf9b64d251e")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-header",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register([], (function(e, a) {
  return {
    execute: function() {
      e((() => {
        var e, d, c, f, r, t, b = {
            49293: (e, a, d) => {
              (0, d(31789).w)(1)
            },
            31789: (e, a, d) => {
              const c = d(90569).y;
              a.w = function(e) {
                if (e || (e = 1), !d.y.meta || !d.y.meta.url) throw console.error("__system_context__", d.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                d.p = c(d.y.meta.url, e)
              }
            },
            23358: (e, a, d) => {
              d(49293)
            },
            90569: (e, a, d) => {
              a.y = function(e, a) {
                var d = document.createElement("a");
                d.href = e;
                for (var c = "/" === d.pathname[0] ? d.pathname : "/" + d.pathname, f = 0, r = c.length; f !== a && r >= 0;) "/" === c[--r] && f++;
                if (f !== a) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + a + ") is greater than the number of directories (" + f + ") in the URL path " + e);
                var t = c.slice(0, r + 1);
                return d.protocol + "//" + d.host + t
              };
              Number.isInteger
            },
            14197: (e, a, d) => {
              "use strict";
              var c = {
                  "./vanilla": () => Promise.all([d.e(7313), d.e(1095), d.e(5853), d.e(2229), d.e(4853), d.e(4204), d.e(5966), d.e(1788), d.e(9420), d.e(2918), d.e(7712), d.e(1925)]).then((() => () => d(43696))),
                  "./core": () => Promise.all([d.e(7313), d.e(1095), d.e(5853), d.e(2229), d.e(1222), d.e(4406), d.e(4204), d.e(5966), d.e(7780), d.e(1788), d.e(9420), d.e(2918), d.e(4902), d.e(7251), d.e(7712), d.e(1663)]).then((() => () => d(61663))),
                  "./GlobalNavigationWrapper": () => Promise.all([d.e(5853), d.e(2229), d.e(1222), d.e(4406), d.e(5966), d.e(7780), d.e(1788), d.e(9420), d.e(4902), d.e(7251)]).then((() => () => d(77273)))
                },
                f = (e, a) => (d.R = a, a = d.o(c, e) ? c[e]() : Promise.resolve().then((() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                })), d.R = void 0, a),
                r = (e, a) => {
                  if (d.S) {
                    var c = "default",
                      f = d.S[c];
                    if (f && f !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return d.S[c] = e, d.I(c, a)
                  }
                };
              d.d(a, {
                get: () => f,
                init: () => r
              })
            }
          },
          o = {};

        function l(e) {
          var a = o[e];
          if (void 0 !== a) return a.exports;
          var d = o[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return b[e].call(d.exports, d, d.exports, l), d.loaded = !0, d.exports
        }
        return l.m = b, l.c = o, l.y = a, l.amdO = {}, l.n = e => {
          var a = e && e.__esModule ? () => e.default : () => e;
          return l.d(a, {
            a
          }), a
        }, d = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, l.t = function(a, c) {
          if (1 & c && (a = this(a)), 8 & c) return a;
          if ("object" == typeof a && a) {
            if (4 & c && a.__esModule) return a;
            if (16 & c && "function" == typeof a.then) return a
          }
          var f = Object.create(null);
          l.r(f);
          var r = {};
          e = e || [null, d({}), d([]), d(d)];
          for (var t = 2 & c && a;
            "object" == typeof t && !~e.indexOf(t); t = d(t)) Object.getOwnPropertyNames(t).forEach((e => r[e] = () => a[e]));
          return r.default = () => a, l.d(f, r), f
        }, l.d = (e, a) => {
          for (var d in a) l.o(a, d) && !l.o(e, d) && Object.defineProperty(e, d, {
            enumerable: !0,
            get: a[d]
          })
        }, l.f = {}, l.e = e => Promise.all(Object.keys(l.f).reduce(((a, d) => (l.f[d](e, a), a)), [])), l.u = e => "js/" + {
          25: "66223434dc3fd16697a99cf44c23a8e3",
          85: "06ff2fbde6c18987f2296d25145ccb1b",
          131: "8d6e07d93a18c2a14e863e46d3406528",
          194: "19f1eafdde07832685cdf5c463b9278c",
          235: "7f2caadf74a47209381941515cf60f30",
          278: "f0b33494ebc9c58ed564040d2cb009e5",
          299: "27852b708a8d65fde52d2acb1559c1d0",
          314: "aeb26330e84b222ac6fd822e5770c537",
          662: "ef7906eb39cf652228ae57acd862429a",
          707: "fbf664d8c2cbdcefb13d46dbe46c8e3a",
          736: "3347a75392153f821820d2f86490b823",
          786: "544a54578d33072aef31fda07b3b5f37",
          824: "c80a44d70431f428fe1d63f4f2859460",
          907: "dbe454b641c7475f6a61f92530461b34",
          1029: "a1103d1f6b1a3f447b2bca075f97ea12",
          1054: "359bfb12d4ecfc20dd21884b7a372f63",
          1095: "13af978886f4c56d6d3e0a8c97a685ae",
          1100: "f970c09314112e8a8f64bf44636b3f1f",
          1222: "a311b7139afbc4b01de1be6651a2c016",
          1242: "154f13a567da29a333467343c50eeea9",
          1252: "4f2f194648efa84348d501f11e488a8f",
          1358: "7dd11e9a6879dd798d7129f19b395dd4",
          1397: "a498739fef68850687ca11c14cfd0949",
          1506: "0dedb298229f8aaaae1fc22eae069292",
          1526: "6560cdbb0a2a659587e247f5cd980e68",
          1554: "0ca235c74b2aff8139f6632a59b086ab",
          1604: "c70f809ca6d2fde7926f1afa1cf2f328",
          1663: "509d1f623b2ac5b6a23d7b42ebfe85ed",
          1701: "a697a8237baff5c8120423fd53a02f72",
          1788: "80b3bedd40be6b87b58529875d91cf8e",
          1822: "8651d5a872e889f7f7b735e74dfc5700",
          1868: "2876e0c1de2b09b3689bfffcaa0478a6",
          1925: "a5a7d8ae8a9f6544f6ec93842c1ccd8f",
          2156: "f1c2d407bd66be41d50c604c066eaace",
          2171: "4e831f5e1d7be78a4dc9e02571459a68",
          2221: "09c0f9b74365e6d5137ab06a87f0f609",
          2229: "b378d04b4e35f05b2ff03797a33e8151",
          2243: "61275cf374b612baf4f9d9d07608680d",
          2343: "cf7a28a649cc4e6567d40b84a82b7609",
          2347: "3dcb4741359000457914c0cbe039ef0d",
          2365: "09142c84b55c809b30d5582017be013d",
          2398: "3dc264a7f2e1c6e750e028c8bfdd0f11",
          2403: "e634b0eeb0d55040ed51819466a85a80",
          2407: "c7f50fa654ffb7c8e6067e45acccab1f",
          2466: "847f897e3c733070223d836073ae6b2e",
          2642: "c5bcf9fbc0761d5379bf6d4188a9f894",
          2678: "1daf5f70e6519ce285a466a560f9211d",
          2683: "eb8f89c19f8299ef63111c41f3861666",
          2864: "d7031844f26f63e7c445e29859f075a6",
          2918: "e7b339e12193081d6373cf262792b5ae",
          3034: "7585e1eac10f05c242c4763f38ebe4d5",
          3035: "3ed193ef71113dce07723d55d4009991",
          3067: "55af730d7dfc3239d7161806ca242c0d",
          3131: "2ad4c5ff55b89ec871c890e06ff6b570",
          3197: "d5ae93141c9e0a187f590afb17a6c8ea",
          3217: "12990c9a5fddc3bcfa72fdab3f26b31f",
          3219: "e9305bd92673a4aba8daf412b536b873",
          3343: "3822da8b469ff1e6fd64acdb7b652123",
          3360: "9382d8deb0139b96d8322f9734639341",
          3370: "afe6c3c28d1701700637c3795edab9da",
          3386: "982164ab7e15dbcbd9b334ed8a8251dd",
          3410: "3f056bffb8781b58288063d7b58d4298",
          3475: "d65884d0d5d518bd1180234bb0944715",
          3486: "3f4f28a64ec5593fa75b789df53aabaf",
          3487: "f599bed0cbace094ff4c9557d8f23d66",
          3692: "8f4be9dedbd061eb8d77a9907de71028",
          3694: "5214625641369eabcb130c2a269415a1",
          3697: "b158c5d160176759354df5fd82a25219",
          3759: "5a0297f9dd9830afe061e134044db10c",
          3823: "893194d62f74b18bec315c1c0b7366e4",
          3871: "99f55fe2d07c36b4f859cd9846acdfc7",
          3885: "7e1460a3c5d2c592a2f832e8f379db4d",
          3925: "034533a39c20e94e3b159a6032547c65",
          3941: "1b88564162f9e63092b8e55cd1cfc731",
          3954: "56d6148c1d6ba7b127bb71b22d23d79d",
          4011: "8dc9bfabdfecf6ceab90bb9fc587c82b",
          4059: "6f9868fe9fc523e62c9dd0632744c604",
          4082: "a627c5a0e326102ae578185f1be99e7e",
          4204: "8ede4b76bde0465c9da7e948a6de1f03",
          4282: "eb3aa64f4ca636e114fdb4c5070e09d8",
          4337: "013329de7a8f07eb7b969d7d28ab01a2",
          4357: "cde14ca6b4aa0e22194ae7520c165aa8",
          4406: "7dbefc086a53ce0def313160625a0880",
          4528: "0b213f4fcd5d6d92ce725cfbb3b7282d",
          4538: "4f9dc6367f208c60f778ca40a78370e9",
          4621: "3f365e56e3df1812eb02397df2d1516b",
          4700: "1aa0ff348070a881ae4b2c634e013b11",
          4710: "a2cda076a37e6588aabe52f40928b4a8",
          4724: "76525b203549808d1809e8e149084ee6",
          4730: "247d553ac4ca5f26d8c45220e4ca5619",
          4731: "cac1a97445e947f4dd852e57a405f282",
          4783: "a6cdac4281c5b296995127224a294229",
          4784: "51959d9c135ebb662dc14b660319d453",
          4799: "08f8c100bb5f784f7b1e7ff84997ff6d",
          4851: "37e570086daa535847671880be54c589",
          4853: "18ffef5508dbbf483ae4c0a3acbb95fa",
          4861: "251a8d94c18e2e876ab936fd3aa738d4",
          4902: "161298f7ba551acf7f8db4a968107535",
          4913: "cf588d34c885fa4d69eee26ebfe9417e",
          5018: "468248754bb1ae0a4c473bc462a66f8f",
          5219: "63b9ebb317ad4956a05aaa3b02282b2f",
          5233: "a1edf7c16d9f3a709c9ae37965ae0785",
          5259: "609dc8abb0831b2c2ed2433a5c4a66b7",
          5309: "bb6fb1723a7399122d66d6221b304fb8",
          5365: "e79b41b42d3fca412f9ed7b159b46fc2",
          5416: "b63e0c426f81bbf22c5dbcf379c99c01",
          5483: "47d971b47bb9de52df53eed3027c248a",
          5485: "9e2fa0c7248ae45ecdad6ba972844f02",
          5523: "1e3b0e8f37a8ba72fb965b6a45eea5a8",
          5530: "70a9b0974fa9aecea4dac694e7e24b7d",
          5548: "a20ffd5ec0fc9eea86f6addfb343ebf3",
          5600: "d1c44080e78c0f184206fe225d60d850",
          5629: "0e00eef26f32a2fa3193fac8f78c101f",
          5639: "efd6c3ae669cfd3a169d2877804a8ed7",
          5663: "f2f88fde6b6ce0a1eddafa9f8d1c4106",
          5710: "7e0078af8fbccda5fd0ea281766e4181",
          5742: "29692fafcba6bb0a0a3e3d0368d939e7",
          5767: "9f9a0b9d6174d03584382411cd4eb420",
          5791: "594ee355486e8d7db053db27c7d3e7ad",
          5830: "fe12e7e99ac5d4e1982f876f394ca9c7",
          5832: "78d97fdfe1a3ea6b0a689c545f7140bf",
          5853: "abb927b7dde5b440d2c545ca97e5cfc6",
          5868: "cdebedf28e3b13cd0c7d2b5cce3ef3e2",
          5875: "288556d44bc04a8fd28dbee82f60f94d",
          5966: "caca9fd6857f55e2664fa56995b167e8",
          6037: "9db12a0285916ed52b3bfdae1bee5f5b",
          6055: "58b3ecfb0a81ef10ee502e38b7b0ed9c",
          6204: "3024030691366f1ddc5ad39cbb325f4d",
          6252: "01aa3a58d29ab8ff71b5a49a787b7998",
          6267: "6de14a156c7e45b6ebdd0231169f0867",
          6271: "8ca6681bf2cc64b916f219a051cda7ca",
          6280: "15b6b1058890cd86d384f413a45f512b",
          6285: "80eb8651438617f8e285314d5eab638a",
          6304: "fbf20b4a3737ee1a4aaecf709e4bdd08",
          6306: "da4b2e19f9cffa55125bfe839bf2f75c",
          6361: "a9680ca97997f413aac0fa2f10c1b42f",
          6440: "9a07b240b9cb7852ec6cc01389dfb70f",
          6519: "5bdc10a2a22da1ff59a9dccbc6025951",
          6521: "131878c02de8a5717765cf92215e8278",
          6664: "149ddebb1ab1f03fa46e9dfbdafb1562",
          6718: "3bca1886e8c67437990dbc8a6f144764",
          6738: "0501ee2079a07db18e721d6033934923",
          6741: "d9ebaf9e3c3ee3ae5e60358867532798",
          6832: "3891af5fb9fa3adb72982efc8a835c34",
          6864: "1d62ac667f498c19bbc166e93325b5eb",
          6879: "58b9db1aa64c43fcbc2c035dac8b714f",
          6891: "7fabf31aa19e624c5b9fd943d3fb9ced",
          6997: "2682db0997cd7b2d408e681e13099b09",
          7010: "af226da9d44d844bdd45db59cdb910fe",
          7051: "794c1fecd53cbea36243fdf39f982040",
          7070: "b91eda1434147ff1b14fba2a314edb0b",
          7073: "a47a513d5e7d7b4291f17b789431191a",
          7120: "cc063212bda129530ed047af312726c0",
          7164: "2a5e99f39e421467cc6cb182a3e7a8e2",
          7219: "73bcc06060355f7ec356a04c896e9374",
          7251: "f0cab9e6dfe1a95650272d3c91067106",
          7313: "949facb344fb1db2e63bdec6f35ac8a1",
          7360: "e322d5d3ee15ee26565e72421acb5441",
          7436: "d200880a69eb7539ea2a243c4b78b7fb",
          7452: "3dbe4ec867eb6ee9a315a46ae9d79b5a",
          7453: "70d1db99fbc6e28c11609908b960b2bc",
          7492: "b08491fdd156bc90cc3517f385584bf5",
          7600: "6375cd0d9fae724565c3135d3743aeb4",
          7654: "1a5830fb3db5c5d7b219c9fc6981573c",
          7712: "724f7a71ae2f8da9fd4668b04c925c9f",
          7746: "fe828075061e8d9290bfb1798cd445ed",
          7780: "a1c4c13de15e1fba5cec314994cefc74",
          7813: "6e66694fae634ca7f54eb50a2c96a65d",
          7970: "fc8d2a0b3706d576ed576a423d1a00a4",
          8010: "13233c250ac79d40bffd9606dfa36e62",
          8172: "b5eeacc1449c3e0046ac19b2fbac6ddb",
          8174: "4ee09dea709356826815e57b9c892032",
          8272: "584fe91b21533e1574ddc96c41d61a55",
          8391: "38007af1bd9c8a7663d9fd11c5724a1e",
          8405: "60fe31b6782b90a86d2b8adca277b412",
          8418: "1b4de677cbe8782ee3db368766d24511",
          8652: "9277e8d239c482346a7eda9d1b1932a0",
          8726: "799f0482e0a7969b168ccfecfcfcca50",
          8755: "f3758ab1afc58058301d02b2be864d91",
          8880: "014fb7c452a4c80c89b182582e941c00",
          8970: "5ee63ad0f9530d5852718f85d8a4dbc2",
          8977: "6577bff2114fb934c8737bcf83b3259c",
          9022: "17ff513fc0f50e1fe1cdc375d4523132",
          9028: "8bf24c855983bae0f91b6c56dce43609",
          9043: "b9f42d8a7e5e56ef6d3573845851d2ad",
          9126: "58237d31921c879809b2ddd1ec8baebc",
          9130: "93aeecdafd609cfa572cea6cd1b794f6",
          9145: "04574bf48ac1990a6d0d3918ffa73f4f",
          9157: "f5cea90ba7e8d1114a8a26172a6e58b1",
          9292: "27d84709111cedb5f953633a8d1ca88e",
          9377: "aeea56012d7f20ff6b1c1e93723b5fc9",
          9408: "4816ae04eeabc6dc6ace95992d8a6bc2",
          9420: "ef7b50d826a927864b33dc5fe50c6462",
          9432: "7ee22c7205237538ffe8149aaed0909b",
          9550: "b2fb540305e82ed4d7a6087b655cf429",
          9600: "bfcdda471f969f2a581d8ec84337f11e",
          9615: "1fb48e4bcd54cbf673dcdf4f1434a93e",
          9690: "da9b08db957f2fd6cbd5c28cd026dd16",
          9931: "0a2d49ee514ef05026385ac0d208d0df",
          9936: "03e356501df4ee4455d822ff72d0e7af",
          9990: "3162c810294b5a19dcec32fb5c08bfe9"
        } [e] + ".js", l.miniCssF = e => "css/" + {
          1397: "2110aa580ede3aaa6fa9094ec80a1050",
          1554: "5a1bac0da265ecf3b269d6332115a3de",
          1663: "99cb7aafd7be4155d8a990710242271e",
          1925: "ef4dcf0f4a799818d3360ebdb2b872e6",
          5710: "5a1bac0da265ecf3b269d6332115a3de",
          6718: "c27d1f8563067a9b5dd7fa8690e8d6ad",
          7251: "02a2504d86a9b48b13052d4528a3870b",
          7712: "78a589cc356175aa298935c8b5434dd1"
        } [e] + ".css", l.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), l.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), c = {}, f = "@rockstargames/modules-core-header:", l.l = (e, a, d, r) => {
          if (c[e]) c[e].push(a);
          else {
            var t, b;
            if (void 0 !== d)
              for (var o = document.getElementsByTagName("script"), i = 0; i < o.length; i++) {
                var n = o[i];
                if (n.getAttribute("src") == e || n.getAttribute("data-webpack") == f + d) {
                  t = n;
                  break
                }
              }
            t || (b = !0, (t = document.createElement("script")).charset = "utf-8", t.timeout = 120, l.nc && t.setAttribute("nonce", l.nc), t.setAttribute("data-webpack", f + d), t.src = e), c[e] = [a];
            var s = (a, d) => {
                t.onerror = t.onload = null, clearTimeout(u);
                var f = c[e];
                if (delete c[e], t.parentNode && t.parentNode.removeChild(t), f && f.forEach((e => e(d))), a) return a(d)
              },
              u = setTimeout(s.bind(null, void 0, {
                type: "timeout",
                target: t
              }), 12e4);
            t.onerror = s.bind(null, t.onerror), t.onload = s.bind(null, t.onload), b && document.head.appendChild(t)
          }
        }, l.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, l.nmd = e => (e.paths = [], e.children || (e.children = []), e), r = {}, t = {}, l.f.remotes = (e, a) => {
          l.o(r, e) && r[e].forEach((e => {
            var d = l.R;
            d || (d = []);
            var c = t[e];
            if (!(d.indexOf(c) >= 0)) {
              if (d.push(c), c.p) return a.push(c.p);
              var f = a => {
                  a || (a = new Error("Container missing")), "string" == typeof a.message && (a.message += '\nwhile loading "' + c[1] + '" from ' + c[2]), l.m[e] = () => {
                    throw a
                  }, c.p = 0
                },
                r = (e, d, r, t, b, o) => {
                  try {
                    var l = e(d, r);
                    if (!l || !l.then) return b(l, t, o);
                    var i = l.then((e => b(e, t)), f);
                    if (!o) return i;
                    a.push(c.p = i)
                  } catch (e) {
                    f(e)
                  }
                },
                b = (e, a, f) => r(a.get, c[1], d, 0, o, f),
                o = a => {
                  c.p = 1, l.m[e] = e => {
                    e.exports = a()
                  }
                };
              r(l, c[2], 0, 0, ((e, a, d) => e ? r(l.I, c[0], 0, e, b, d) : f()), 1)
            }
          }))
        }, (() => {
          l.S = {};
          var e = {},
            a = {};
          l.I = (d, c) => {
            c || (c = []);
            var f = a[d];
            if (f || (f = a[d] = {}), !(c.indexOf(f) >= 0)) {
              if (c.push(f), e[d]) return e[d];
              l.o(l.S, d) || (l.S[d] = {});
              var r = l.S[d],
                t = "@rockstargames/modules-core-header",
                b = (e, a, d, c) => {
                  var f = r[e] = r[e] || {},
                    b = f[a];
                  (!b || !b.loaded && (!c != !b.eager ? c : t > b.from)) && (f[a] = {
                    get: d,
                    from: t,
                    eager: !!c
                  })
                },
                o = [];
              return "default" === d && (b("@foundry/icons", "3.5.9", (() => Promise.all([l.e(7120), l.e(4538), l.e(2229), l.e(7492), l.e(5710)]).then((() => () => l(24538))))), b("@popperjs/core", "2.11.8", (() => l.e(6519).then((() => () => l(66519))))), b("@radix-ui/react-accordion", "1.2.2", (() => Promise.all([l.e(2683), l.e(2229), l.e(4853), l.e(4406), l.e(6741), l.e(1252), l.e(1029)]).then((() => () => l(52683))))), b("@radix-ui/react-dialog", "1.1.1", (() => Promise.all([l.e(5767), l.e(2229), l.e(4853), l.e(1222), l.e(4406), l.e(9690), l.e(4337), l.e(3067)]).then((() => () => l(55767))))), b("@radix-ui/react-dialog", "1.1.6", (() => Promise.all([l.e(7654), l.e(2229), l.e(4853), l.e(4406), l.e(786), l.e(4902), l.e(9043), l.e(3410)]).then((() => () => l(57654))))), b("@radix-ui/react-id", "1.1.0", (() => Promise.all([l.e(2229), l.e(5365)]).then((() => () => l(35365))))), b("@radix-ui/react-navigation-menu", "1.2.3", (() => Promise.all([l.e(8726), l.e(2229), l.e(4853), l.e(4406), l.e(6741), l.e(1252), l.e(3694), l.e(5791)]).then((() => () => l(58726))))), b("@radix-ui/react-popover", "1.1.4", (() => Promise.all([l.e(1100), l.e(9408), l.e(2229), l.e(4853), l.e(4406), l.e(6741), l.e(235), l.e(8172)]).then((() => () => l(69408))))), b("@radix-ui/react-portal", "1.1.1", (() => Promise.all([l.e(2229), l.e(4853), l.e(1222), l.e(7813)]).then((() => () => l(97813))))), b("@radix-ui/react-portal", "1.1.1", (() => Promise.all([l.e(2229), l.e(4853), l.e(1222), l.e(5868)]).then((() => () => l(15868))))), b("@radix-ui/react-portal", "1.1.1", (() => Promise.all([l.e(2229), l.e(4853), l.e(1222), l.e(3035)]).then((() => () => l(23035))))), b("@radix-ui/react-portal", "1.1.3", (() => Promise.all([l.e(2229), l.e(4853), l.e(6741), l.e(8418)]).then((() => () => l(6037))))), b("@radix-ui/react-portal", "1.1.4", (() => Promise.all([l.e(2229), l.e(4853), l.e(4730), l.e(2403)]).then((() => () => l(12403))))), b("@radix-ui/react-slot", "1.0.2", (() => Promise.all([l.e(2229), l.e(1526)]).then((() => () => l(1526))))), b("@radix-ui/react-slot", "1.1.0", (() => Promise.all([l.e(2229), l.e(5548)]).then((() => () => l(50786))))), b("@radix-ui/react-slot", "1.1.1", (() => Promise.all([l.e(2229), l.e(4357)]).then((() => () => l(16738))))), b("@radix-ui/react-slot", "1.1.1", (() => Promise.all([l.e(2229), l.e(8652)]).then((() => () => l(16271))))), b("@radix-ui/react-slot", "1.1.1", (() => Promise.all([l.e(2229), l.e(3219)]).then((() => () => l(73219))))), b("@radix-ui/react-slot", "1.1.2", (() => Promise.all([l.e(2229), l.e(7164)]).then((() => () => l(27164))))), b("@radix-ui/react-slot", "1.1.2", (() => Promise.all([l.e(2229), l.e(4724)]).then((() => () => l(22343))))), b("@radix-ui/react-slot", "1.1.2", (() => Promise.all([l.e(2229), l.e(9432)]).then((() => () => l(59432))))), b("@radix-ui/react-visually-hidden", "1.0.3", (() => Promise.all([l.e(2229), l.e(4853), l.e(25), l.e(3823)]).then((() => () => l(73823))))), b("@radix-ui/react-visually-hidden", "1.1.0", (() => Promise.all([l.e(2229), l.e(4853), l.e(1222), l.e(4082)]).then((() => () => l(84082))))), b("@radix-ui/react-visually-hidden", "1.1.0", (() => Promise.all([l.e(2229), l.e(4853), l.e(1222), l.e(9600)]).then((() => () => l(29600))))), b("@radix-ui/react-visually-hidden", "1.1.0", (() => Promise.all([l.e(2229), l.e(4853), l.e(1222), l.e(5629)]).then((() => () => l(45629))))), b("@radix-ui/react-visually-hidden", "1.1.1", (() => Promise.all([l.e(2229), l.e(4853), l.e(6741), l.e(1358)]).then((() => () => l(41358))))), b("@radix-ui/react-visually-hidden", "1.1.2", (() => Promise.all([l.e(2229), l.e(4853), l.e(786), l.e(3925)]).then((() => () => l(83925))))), b("@rsgweb/locale-tools", "1.0.0", (() => Promise.all([l.e(5483), l.e(2229), l.e(5219)]).then((() => () => l(87768))))), b("@rsgweb/modules-core-user-action-menu", "0.0.0", (() => Promise.all([l.e(7313), l.e(7120), l.e(1100), l.e(6718), l.e(2229), l.e(4853), l.e(1222), l.e(4406), l.e(4204), l.e(5966), l.e(7780), l.e(1788), l.e(9690), l.e(2918), l.e(25), l.e(1397), l.e(8174)]).then((() => () => l(4585))))), b("@rsgweb/rockstar-account", "0.0.0", (() => Promise.all([l.e(7313), l.e(1095), l.e(2229), l.e(4204), l.e(5966), l.e(85)]).then((() => () => l(7607))))), b("@rsgweb/utils", "1.0.0", (() => Promise.all([l.e(7313), l.e(2229), l.e(4204), l.e(3692)]).then((() => () => l(24602))))), b("classnames", "2.5.1", (() => l.e(5485).then((() => () => l(65485))))), b("framer-motion", "7.10.3", (() => Promise.all([l.e(9931), l.e(2229)]).then((() => () => l(69931))))), b("gsap", "0.0.0", (() => l.e(2407).then((() => () => l(12407))))), b("lodash", "4.17.21", (() => l.e(4282).then((() => () => l(14282))))), b("react-dom", "18.2.0", (() => Promise.all([l.e(7360), l.e(2229)]).then((() => () => l(57360))))), b("react-popper", "2.3.0", (() => Promise.all([l.e(2229), l.e(4853), l.e(3386), l.e(4059)]).then((() => () => l(44059))))), b("react-remove-scroll", "2.5.7", (() => Promise.all([l.e(5875), l.e(2229)]).then((() => () => l(95875))))), b("react-remove-scroll", "2.6.2", (() => Promise.all([l.e(736), l.e(2229)]).then((() => () => l(10736))))), b("react-remove-scroll", "2.6.2", (() => Promise.all([l.e(2229), l.e(3871)]).then((() => () => l(53871))))), b("react-remove-scroll", "2.6.3", (() => Promise.all([l.e(6055), l.e(2229)]).then((() => () => l(76055))))), b("react-router-dom", "6.17.0", (() => Promise.all([l.e(1604), l.e(2229)]).then((() => () => l(21604))))), b("react", "18.2.0", (() => l.e(3217).then((() => () => l(23217))))), b("spatial-navigation-polyfill", "1.3.1", (() => l.e(1506).then((() => () => l(31506)))))), e[d] = o.length ? Promise.all(o).then((() => e[d] = 1)) : 1
            }
          }
        })(), (() => {
          var e;
          l.g.importScripts && (e = l.g.location + "");
          var a = l.g.document;
          if (!e && a && (a.currentScript && (e = a.currentScript.src), !e)) {
            var d = a.getElementsByTagName("script");
            if (d.length)
              for (var c = d.length - 1; c > -1 && (!e || !/^http(s?):/.test(e));) e = d[c--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), l.p = e
        })(), (() => {
          var e = e => {
              var a = e => e.split(".").map((e => +e == e ? +e : e)),
                d = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
                c = d[1] ? a(d[1]) : [];
              return d[2] && (c.length++, c.push.apply(c, a(d[2]))), d[3] && (c.push([]), c.push.apply(c, a(d[3]))), c
            },
            a = (d, c) => {
              if (0 in d) {
                c = e(c);
                var f = d[0],
                  r = f < 0;
                r && (f = -f - 1);
                for (var t = 0, b = 1, o = !0;; b++, t++) {
                  var l, i, n = b < d.length ? (typeof d[b])[0] : "";
                  if (t >= c.length || "o" == (i = (typeof(l = c[t]))[0])) return !o || ("u" == n ? b > f && !r : "" == n != r);
                  if ("u" == i) {
                    if (!o || "u" != n) return !1
                  } else if (o)
                    if (n == i)
                      if (b <= f) {
                        if (l != d[b]) return !1
                      } else {
                        if (r ? l > d[b] : l < d[b]) return !1;
                        l != d[b] && (o = !1)
                      }
                  else if ("s" != n && "n" != n) {
                    if (r || b <= f) return !1;
                    o = !1, b--
                  } else {
                    if (b <= f || i < n != r) return !1;
                    o = !1
                  } else "s" != n && "n" != n && (o = !1, b--)
                }
              }
              var s = [],
                u = s.pop.bind(s);
              for (t = 1; t < d.length; t++) {
                var h = d[t];
                s.push(1 == h ? u() | u() : 2 == h ? u() & u() : h ? a(h, c) : !u())
              }
              return !!u()
            },
            d = (d, c, f) => {
              var r = d[c];
              return (c = Object.keys(r).reduce(((d, c) => !a(f, c) || d && !((a, d) => {
                a = e(a), d = e(d);
                for (var c = 0;;) {
                  if (c >= a.length) return c < d.length && "u" != (typeof d[c])[0];
                  var f = a[c],
                    r = (typeof f)[0];
                  if (c >= d.length) return "u" == r;
                  var t = d[c],
                    b = (typeof t)[0];
                  if (r != b) return "o" == r && "n" == b || "s" == b || "u" == r;
                  if ("o" != r && "u" != r && f != t) return f < t;
                  c++
                }
              })(d, c) ? d : c), 0)) && r[c]
            },
            c = (e => function(a, d, c, f) {
              var r = l.I(a);
              return r && r.then ? r.then(e.bind(e, a, l.S[a], d, c, f)) : e(a, l.S[a], d, c, f)
            })(((e, a, c, f, r) => {
              var t = a && l.o(a, c) && d(a, c, f);
              return t ? (e => (e.loaded = 1, e.get()))(t) : r()
            })),
            f = {},
            r = {
              62229: () => c("default", "react", [1, 18, 2, 0], (() => l.e(3217).then((() => () => l(23217))))),
              44853: () => c("default", "react-dom", [1, 18, 2, 0], (() => l.e(7360).then((() => () => l(57360))))),
              9623: () => c("default", "react-router-dom", [1, 6, 11, 2], (() => l.e(1604).then((() => () => l(21604))))),
              16188: () => c("default", "lodash", [1, 4, 17, 21], (() => l.e(4282).then((() => () => l(14282))))),
              95966: () => c("default", "@rsgweb/utils", [1, "workspace:^"], (() => Promise.all([l.e(7313), l.e(4204)]).then((() => () => l(24602))))),
              81788: () => c("default", "@rsgweb/locale-tools", [1, "workspace:^"], (() => Promise.all([l.e(5483), l.e(7600)]).then((() => () => l(87768))))),
              63582: () => c("default", "framer-motion", [1, 7, 5, 1], (() => l.e(9931).then((() => () => l(69931))))),
              79952: () => c("default", "spatial-navigation-polyfill", [1, 1, 3, 1], (() => l.e(1506).then((() => () => l(31506))))),
              2918: () => c("default", "@rsgweb/rockstar-account", [1, "workspace:^"], (() => Promise.all([l.e(1095), l.e(5523)]).then((() => () => l(7607))))),
              13581: () => c("default", "gsap", [1, "workspace:^"], (() => l.e(2407).then((() => () => l(12407))))),
              20270: () => c("default", "@rsgweb/modules-core-user-action-menu", [1, "workspace:^"], (() => Promise.all([l.e(7120), l.e(1100), l.e(6718), l.e(4853), l.e(1222), l.e(4406), l.e(7780), l.e(9690), l.e(25), l.e(1397)]).then((() => () => l(4585))))),
              75971: () => c("default", "react-popper", [1, 2, 3, 0], (() => Promise.all([l.e(4853), l.e(3386), l.e(6440)]).then((() => () => l(44059))))),
              21222: () => c("default", "@radix-ui/react-slot", [1, 1, 1, 0], (() => l.e(8405).then((() => () => l(50786))))),
              74406: () => c("default", "@radix-ui/react-id", [1, 1, 1, 0], (() => l.e(7746).then((() => () => l(35365))))),
              24036: () => c("default", "classnames", [1, 2, 5, 1], (() => l.e(5485).then((() => () => l(65485))))),
              81409: () => c("default", "@foundry/icons", [1, 3], (() => Promise.all([l.e(7120), l.e(4538), l.e(7492), l.e(1554)]).then((() => () => l(24538))))),
              34902: () => c("default", "@radix-ui/react-portal", [1, 1, 1, 4], (() => Promise.all([l.e(4853), l.e(4730), l.e(4784)]).then((() => () => l(12403))))),
              9046: () => c("default", "@radix-ui/react-navigation-menu", [1, 1, 2, 1], (() => Promise.all([l.e(8726), l.e(4853), l.e(6741), l.e(1252), l.e(3694)]).then((() => () => l(58726))))),
              18425: () => c("default", "@radix-ui/react-dialog", [1, 1, 1, 6], (() => Promise.all([l.e(7654), l.e(4853), l.e(786), l.e(9043)]).then((() => () => l(57654))))),
              42638: () => c("default", "@radix-ui/react-popover", [1, 1, 1, 4], (() => Promise.all([l.e(1100), l.e(9408), l.e(4853), l.e(6741), l.e(235)]).then((() => () => l(69408))))),
              61339: () => c("default", "@radix-ui/react-accordion", [1, 1, 2, 2], (() => Promise.all([l.e(2683), l.e(4853), l.e(6741), l.e(1252)]).then((() => () => l(52683))))),
              71925: () => c("default", "@radix-ui/react-visually-hidden", [1, 1, 1, 2], (() => Promise.all([l.e(4853), l.e(786), l.e(6306)]).then((() => () => l(83925))))),
              7492: () => c("default", "@radix-ui/react-visually-hidden", [1, 1, 1, 2], (() => Promise.all([l.e(4853), l.e(1222), l.e(1701)]).then((() => () => l(84082))))),
              16741: () => c("default", "@radix-ui/react-slot", [1, 1, 1, 0], (() => l.e(5600).then((() => () => l(73219))))),
              91252: () => c("default", "@radix-ui/react-slot", [1, 1, 1, 0], (() => l.e(6738).then((() => () => l(16738))))),
              19690: () => c("default", "react-remove-scroll", [1, 2, 5, 7], (() => l.e(5875).then((() => () => l(95875))))),
              14337: () => c("default", "@radix-ui/react-portal", [1, 1, 1, 4], (() => l.e(194).then((() => () => l(97813))))),
              30786: () => c("default", "@radix-ui/react-slot", [1, 1, 1, 0], (() => l.e(7051).then((() => () => l(59432))))),
              5959: () => c("default", "react-remove-scroll", [1, 2, 5, 7], (() => l.e(6055).then((() => () => l(76055))))),
              69101: () => c("default", "@radix-ui/react-slot", [1, 1, 1, 0], (() => l.e(2343).then((() => () => l(22343))))),
              63694: () => c("default", "@radix-ui/react-visually-hidden", [1, 1, 1, 2], (() => l.e(8977).then((() => () => l(41358))))),
              31393: () => c("default", "@radix-ui/react-portal", [1, 1, 1, 4], (() => l.e(6037).then((() => () => l(6037))))),
              38291: () => c("default", "react-remove-scroll", [1, 2, 5, 7], (() => l.e(736).then((() => () => l(10736))))),
              58857: () => c("default", "@radix-ui/react-slot", [1, 1, 1, 0], (() => l.e(6271).then((() => () => l(16271))))),
              34730: () => c("default", "@radix-ui/react-slot", [1, 1, 1, 0], (() => l.e(4783).then((() => () => l(27164))))),
              20025: () => c("default", "@radix-ui/react-slot", [1, 1, 1, 0], (() => l.e(9145).then((() => () => l(1526))))),
              35755: () => c("default", "@radix-ui/react-dialog", [1, 1, 1, 6], (() => Promise.all([l.e(5767), l.e(4337)]).then((() => () => l(55767))))),
              47773: () => c("default", "@radix-ui/react-visually-hidden", [1, 1, 1, 2], (() => l.e(8010).then((() => () => l(45629))))),
              52072: () => c("default", "@radix-ui/react-portal", [1, 1, 1, 4], (() => l.e(3487).then((() => () => l(15868))))),
              53648: () => c("default", "@radix-ui/react-visually-hidden", [1, 1, 1, 2], (() => l.e(7219).then((() => () => l(29600))))),
              56679: () => c("default", "@radix-ui/react-portal", [1, 1, 1, 4], (() => l.e(5416).then((() => () => l(23035))))),
              75199: () => c("default", "@radix-ui/react-visually-hidden", [1, 1, 1, 2], (() => l.e(6204).then((() => () => l(73823))))),
              84269: () => c("default", "react-remove-scroll", [1, 2, 5, 7], (() => l.e(6252).then((() => () => l(53871))))),
              43386: () => c("default", "@popperjs/core", [1, 2, 11, 8], (() => l.e(6519).then((() => () => l(66519)))))
            },
            t = {
              25: [20025],
              235: [31393, 38291, 58857],
              786: [30786],
              1222: [21222],
              1252: [91252],
              1397: [35755, 47773, 52072, 53648, 56679, 75199, 84269],
              1788: [81788],
              2229: [62229],
              2918: [2918],
              3386: [43386],
              3694: [63694],
              4204: [9623, 16188],
              4337: [14337],
              4406: [74406],
              4730: [34730],
              4853: [44853],
              4902: [34902],
              5966: [95966],
              6741: [16741],
              7251: [9046, 18425, 42638, 61339, 71925],
              7492: [7492],
              7712: [13581, 20270, 75971],
              7780: [24036, 81409],
              9043: [5959, 69101],
              9420: [63582, 79952],
              9690: [19690]
            },
            b = {};
          l.f.consumes = (e, a) => {
            l.o(t, e) && t[e].forEach((e => {
              if (l.o(f, e)) return a.push(f[e]);
              if (!b[e]) {
                var d = a => {
                  f[e] = 0, l.m[e] = d => {
                    delete l.c[e], d.exports = a()
                  }
                };
                b[e] = !0;
                var c = a => {
                  delete f[e], l.m[e] = d => {
                    throw delete l.c[e], a
                  }
                };
                try {
                  var t = r[e]();
                  t.then ? a.push(f[e] = t.then(d).catch(c)) : d(t)
                } catch (e) {
                  c(e)
                }
              }
            }))
          }
        })(), (() => {
          if ("undefined" != typeof document) {
            var e = {
              4295: 0
            };
            l.f.miniCss = (a, d) => {
              e[a] ? d.push(e[a]) : 0 !== e[a] && {
                1397: 1,
                1554: 1,
                1663: 1,
                1925: 1,
                5710: 1,
                6718: 1,
                7251: 1,
                7712: 1
              } [a] && d.push(e[a] = (e => new Promise(((a, d) => {
                var c = l.miniCssF(e),
                  f = l.p + c;
                if (((e, a) => {
                    for (var d = document.getElementsByTagName("link"), c = 0; c < d.length; c++) {
                      var f = (t = d[c]).getAttribute("data-href") || t.getAttribute("href");
                      if ("stylesheet" === t.rel && (f === e || f === a)) return t
                    }
                    var r = document.getElementsByTagName("style");
                    for (c = 0; c < r.length; c++) {
                      var t;
                      if ((f = (t = r[c]).getAttribute("data-href")) === e || f === a) return t
                    }
                  })(c, f)) return a();
                ((e, a, d, c, f) => {
                  var r = document.createElement("link");
                  r.rel = "stylesheet", r.type = "text/css", r.onerror = r.onload = d => {
                    if (r.onerror = r.onload = null, "load" === d.type) c();
                    else {
                      var t = d && ("load" === d.type ? "missing" : d.type),
                        b = d && d.target && d.target.href || a,
                        o = new Error("Loading CSS chunk " + e + " failed.\n(" + b + ")");
                      o.code = "CSS_CHUNK_LOAD_FAILED", o.type = t, o.request = b, r.parentNode && r.parentNode.removeChild(r), f(o)
                    }
                  }, r.href = a, document.head.appendChild(r)
                })(e, f, 0, a, d)
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
          l.f.j = (a, d) => {
            var c = l.o(e, a) ? e[a] : void 0;
            if (0 !== c)
              if (c) d.push(c[2]);
              else if (/^(1(222|252|554|788)|2(229|35|5|918)|4(337|406|730|853|902)|7(492|780|86)|3386|3694|5966|6741|9043|9690)$/.test(a)) e[a] = 0;
            else {
              var f = new Promise(((d, f) => c = e[a] = [d, f]));
              d.push(c[2] = f);
              var r = l.p + l.u(a),
                t = new Error;
              l.l(r, (d => {
                if (l.o(e, a) && (0 !== (c = e[a]) && (e[a] = void 0), c)) {
                  var f = d && ("load" === d.type ? "missing" : d.type),
                    r = d && d.target && d.target.src;
                  t.message = "Loading chunk " + a + " failed.\n(" + f + ": " + r + ")", t.name = "ChunkLoadError", t.type = f, t.request = r, c[1](t)
                }
              }), "chunk-" + a, a)
            }
          };
          var a = (a, d) => {
              var c, f, r = d[0],
                t = d[1],
                b = d[2],
                o = 0;
              if (r.some((a => 0 !== e[a]))) {
                for (c in t) l.o(t, c) && (l.m[c] = t[c]);
                b && b(l)
              }
              for (a && a(d); o < r.length; o++) f = r[o], l.o(e, f) && e[f] && e[f][0](), e[f] = 0
            },
            d = self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || [];
          d.forEach(a.bind(null, 0)), d.push = a.bind(null, d.push.bind(d))
        })(), l.nc = void 0, l(23358), l(14197)
      })())
    }
  }
}));