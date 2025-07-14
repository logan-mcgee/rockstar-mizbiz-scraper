try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "30397d4a-71c3-4ded-8585-4f12c4e8599d", e._sentryDebugIdIdentifier = "sentry-dbid-30397d4a-71c3-4ded-8585-4f12c4e8599d")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "2a74753c0c949d4b2cbcf6cb65742761c430cda0",
    packageName: "@rockstargames/modules-core-header",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "2a74753c0c949d4b2cbcf6cb65742761c430cda0"
}, System.register([], (function(e, a) {
  return {
    execute: function() {
      e((() => {
        var e, d, r, t, f, c, o = {
            13218: (e, a, d) => {
              (0, d(77600).w)(1)
            },
            44857: (e, a, d) => {
              d(13218)
            },
            67884: (e, a, d) => {
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
            77600: (e, a, d) => {
              const r = d(67884).y;
              a.w = function(e) {
                if (e || (e = 1), !d.y.meta || !d.y.meta.url) throw console.error("__system_context__", d.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                d.p = r(d.y.meta.url, e)
              }
            },
            84823: (e, a, d) => {
              "use strict";
              var r = {
                  "./core": () => Promise.all([d.e(5475), d.e(7709), d.e(4005), d.e(1127), d.e(1222), d.e(9158), d.e(4406), d.e(6497), d.e(4902), d.e(5966), d.e(3694), d.e(261), d.e(1788), d.e(3448), d.e(2918), d.e(4461), d.e(3236), d.e(3613)]).then((() => () => d(33613))),
                  "./GlobalNavigationWrapper": () => Promise.all([d.e(4005), d.e(1127), d.e(1222), d.e(4406), d.e(4902), d.e(5966), d.e(3694), d.e(261), d.e(1788), d.e(3448), d.e(4461), d.e(9963)]).then((() => () => d(19963))),
                  "./vanilla": () => Promise.all([d.e(5475), d.e(7709), d.e(4005), d.e(1127), d.e(8429), d.e(6497), d.e(5966), d.e(1788), d.e(3448), d.e(2918), d.e(3236), d.e(835)]).then((() => () => d(65014)))
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
          131: "4330d17f3b181325ecb837967da44d5d",
          147: "d3fa18d1c4c4b7c4647835278433f5f5",
          266: "d3de69a0a9b29501ad690c25d1df764a",
          278: "b7aba4e24b4a8f931bf6eefca9a5aa13",
          299: "89cd6020cd1d5a63cae728521e461cff",
          314: "4f5727fdd487766db76ebeedf90a6360",
          491: "a18cc64808860fee7760d1a6096dafda",
          616: "4fc16adf3dcba3c2c2b10e1503486923",
          621: "89abc8d6ec5f1d16a42ffe8e2a8e6f6a",
          656: "ab88a6b036d551df96def6d50fb5eb65",
          662: "62cb9561ded4287313ebb7d3e36ef502",
          822: "9151070c65d008d83a95e359b2815170",
          823: "8f8a7d32ea5b1496f059ea092cac3824",
          824: "502b1fbde4debba2013fed99b3fa2ac6",
          835: "8763ed9cb1392616951646ce0aa0a57f",
          838: "49c3b2fbd3e6b7b8d962db23c71f0b4f",
          907: "feca0590afdab7153734433cc37919c4",
          1029: "7541dbac06099b7b43bfd4038540ac16",
          1054: "dd9b2b60021ac4f1836230f3dc6b5eff",
          1082: "eee4ed09ebf9e233def4c9c803752a11",
          1155: "bd56116ef93768739419c76ba83bb6cc",
          1242: "9ba5c413d629470fa3ce43608fc4a076",
          1280: "7f6a4d32bcec97fd8da53e76bd96e92e",
          1381: "59fad79413369ab68fe924fe8c8363ca",
          1822: "2083a62082d03d25c94cc5e5a8745e76",
          1868: "0bfa1daae530d517fef0d3e8a2510a0f",
          2030: "6c2d4d2cf0adf3520da055e443c85ec4",
          2083: "cf8765f17337eee5975b034e1b97e74c",
          2156: "23d0e9725b0e837260d30773336aa63b",
          2171: "cd59833159641908c3ce89f925468b07",
          2221: "8a503bb1b8e6a2e9c4c6ee1bc6fb9a3e",
          2243: "39c02e5a5361d6a53868494786a76e26",
          2327: "0b221a81120cb031cc916e8fb35afc4b",
          2347: "179889e37db6a0ab1d2a91ff7456a5aa",
          2365: "51d95e92ab4eec9a853e7d072caee11b",
          2398: "9600f0c3121871f977e45719a8ef71cb",
          2466: "f671c2afa70c83560438f1a16c82a8a9",
          2480: "de0d42b291351dd8bcb24300f8016037",
          2487: "fd5ae2fb2ca684e4547cf6187985b52e",
          2522: "7bfebf38614db2c690cd71a128a76233",
          2528: "9df127c44819658b5007ab6920d3b53b",
          2578: "f8372492ee6c74fed97a659abf39ba98",
          2642: "eaf5d4173930ce7513dec3a1916fe5e4",
          2678: "94831d0abdee879a400d603b9bd6f9c1",
          2864: "9f28d85c32f64ed179cc2ca5924bcf7a",
          2911: "4cd80644268d12d488f343a6f946f546",
          2982: "9b79466e33c6394814bed548dbb16a93",
          2999: "013cf9d2ed95e375dd1c949511dadd28",
          3002: "76dc9c2033121b9aa9558614ad0e5902",
          3034: "ffac128c3de1a9e00ec615d06747f231",
          3041: "a8ab0248cbddeb9c407ff5d52344c231",
          3135: "2f6a4b872f68bba184a238809e8b60b2",
          3197: "c83f07756c9728a1c7d20c27ec66bae5",
          3218: "af021f0ff7b57d9fbbfbe80165c148e0",
          3236: "af3af5ae5a0b25697e7913982a604ec9",
          3343: "0495f6c9eb905e3a24e4b781d68ec86b",
          3370: "a4352ebf536105a80d66f1b2e28b0660",
          3410: "9adeac3328d5ae9dcc22bdc0c30b7a86",
          3448: "ed34bc70df22df3333f426bddd5e87ae",
          3473: "d18863e5b899fd238f488e2ca26a4683",
          3475: "253bbd5bd85f05c48c65e8b1db1d271a",
          3486: "1611c3227bb377845ee5f72052a202ee",
          3536: "dedbf51956817271cf0fce5e4b524fb0",
          3586: "e237aa943c5a8631adbf94400f062a10",
          3613: "278c01f45da16ad8a6217362cd843170",
          3663: "52df91c57b3881e2a0245829fcdb4ce2",
          3672: "90308673266b7391cdfe7fbc74f08ca5",
          3697: "d6efa3ae01cd346bf9a13f5198387572",
          3885: "8843e5be36cdd70b6047107aaa6797de",
          3935: "b3dc564d9e245be60fe575c8abcee06e",
          3941: "9ef0fb44cb26fa87de80ee6494f12ded",
          4005: "58482d95484e6a0bebc741ce2ef9642d",
          4011: "849751299b979560842060b2d47b13f2",
          4105: "d055a56097e896836abd59ed903a2503",
          4153: "d13699d01d08d1d4f4adb8824ffffa84",
          4461: "d7e47e2ea74a930a417456093662ad06",
          4464: "640f56621fa44aac1a7148b287da4d98",
          4480: "ead2bf0364cc10c3a7d7218c44114d5f",
          4528: "dcbae62d0eb63085c428965568d1212d",
          4548: "d6f85e41be2ad36ee8dbc8946b3ff6be",
          4621: "46ca2dcd9a5e133209b1a626a09bbe20",
          4684: "aa981b086fdc3a798d8f3202146e2c23",
          4700: "b14cd562033ad7e30b7a320f57656c41",
          4710: "88c588c94d1b8151b8f975e8979a9cf3",
          4731: "f3800ddee3f11db137f672d0a0d2491e",
          4733: "025b3ed7c3d701de470545feb39b4105",
          4768: "3aae4a4a896c1a89f6014af145d35a92",
          4799: "33950932dc33b7bc073f462a0f1e96a4",
          4851: "5d3e1c7b55e3dde7e6f39a1c08f70449",
          4861: "d6379a07e17ec91402d9d83e48c2a8b6",
          4913: "618616ead5768730ddc091c5719145bf",
          4981: "a0c7de42ddc3f2d0287bfb79e452a945",
          5018: "7973a43434d76fd299f5d7db145234fe",
          5233: "bb9b51a9cac7b4904b13c9d15f3f9611",
          5259: "3b8a195c45910838fc463423a6b46c9e",
          5380: "8b19539891660336953b6e9281421451",
          5422: "fde9f96bd2581f2cee3c10cb617bfcb1",
          5475: "8c087cada20765ef58dc889dba0dd04c",
          5516: "20da2656b2bb4a588eb010badd251c99",
          5530: "a0f3288e764c7f2ad3c45ca5d479dbaa",
          5639: "0c7a47c7f14ec6b7a80c2ad32cfd7097",
          5663: "4165a9c9d3be1b0be0f8979cd27e8949",
          5734: "9c42f249dc2918813bfa97d3b5e53813",
          5742: "486da97faf7eef9961ec69e86337a43b",
          5830: "7f7a45b8d080d0de17b812a771b89454",
          5832: "bed81650b7ffdf516eb159d7a086a99e",
          5839: "53472f8df19892ee7aa16cbedfe3c7be",
          5854: "bcd3ec3658083d857f31be5364bd5353",
          6260: "01dff93f2022f5cddf1a6dca0aefe9a5",
          6267: "ab164b27c15116ef015a016f37d9e06f",
          6280: "672791ab8b6c12487481e1b2d1bac212",
          6285: "d6131d8ea59ae138ea9f873336545902",
          6361: "70db4e5bb0f82b1511f1a993466ba5ba",
          6367: "4defb23721f52cf848023e2797dbaabf",
          6497: "e764df7bd3fd34420ca5483b390b16d5",
          6664: "6a07461166174503f4800c2c001f4347",
          6858: "f3f2cea97226c80e687ecb2669cb46d0",
          6879: "01dad6f1e7202640c6d01174efb977dc",
          6891: "51cd525e0f5f271a4fd60a4b6a100bda",
          6997: "eeb0fb4badc0eebaf917249b6995d3af",
          7010: "60307d98fa878be7e03e0524791e3bb5",
          7073: "29a09671d322473a6a2ffac0ca13ec8c",
          7114: "fd08bea281c45789f8eb0c6a451465c6",
          7353: "8f78ad43cd432d36bffd50d375f5e7ff",
          7385: "866fbd9bd80b0802cd803aa76a2c0620",
          7436: "5e0129045b7edafb6288a0bfdab838aa",
          7452: "41690099a66d0756a192588c5020e800",
          7453: "f4dc55d5b5606acffe99833f705d3c3a",
          7485: "6de10279cf4ddf9635c0961f6e3f0f33",
          7542: "915c32cf1f61a6b643fbfe12889846dc",
          7709: "6a55c927ba683cd445667d6bfba46b13",
          7727: "3f6fbfdb4c3161b63d95389b4086b51e",
          7885: "b07bf10dc6d6eb91a3f0a3fcde823721",
          7893: "392b7e275b56bd270b8e375b899265fc",
          7970: "c8593737ddcd49058d5cb5459b28ba7d",
          8272: "74a1beefb00567b0b26e46d934c29b44",
          8275: "b57d7ced8a8844f3d30542bf60c5a434",
          8376: "bee75fc33d1ac271a26828b96e3bb213",
          8391: "24c941c9dee7b5e6bd2961129c60e094",
          8441: "203f51fde28ba2f59002fe177b752d96",
          8457: "450f5460b2810551b429a6c7b444dc66",
          8557: "ce6927bb060c774d246d718355af1c3a",
          8591: "64edbc39e821504c818539da9b02ff8e",
          8654: "fe901c988f80407855afcd028335be9e",
          8728: "765c09e46179443a3375395b5871b669",
          8755: "c09964c950e44fac16c6814da250c202",
          8880: "6c19783ee60c7d360b8bbc23edf6028b",
          8970: "b89944c513046afdefd82f679c98a5e8",
          9022: "4726ec43207bdaa4f342e5597e310fc0",
          9028: "cdd3cae8553bcb6070a6ccda4ad34d84",
          9126: "1da470d92303f7ffde83f5ddaaa7599a",
          9377: "5d229da2f2d169de4e0e1ab112a49150",
          9583: "c5d73e1619f489042fba72993a37eb28",
          9615: "03de5db6af0768e47b2328ba2ed54869",
          9649: "00fdd0509dd7dfb4bd74f074c29d7165",
          9704: "25aba74eb21ec1f4321eef53474a71e4",
          9766: "ccbbec02b57d2af4197c3093f2ac2b80",
          9936: "469d6d3c4de03a7f1b53696767a6b6ea",
          9963: "eba9cb54c62527198aa5033c4403b921",
          9990: "28ba671607055e5d3773d68153214026"
        } [e] + ".js", b.miniCssF = e => "css/" + {
          835: "94edb376d1a211556a5bb2b298f38183",
          1082: "0f5f20b8f7b79c47e7953feaeb7032ef",
          2487: "8b73c442ec2b588e00961f240409b9a1",
          3236: "cc964df1c18a49208796013887093ade",
          3613: "72afc3dc267e7e7147983f0aab2c8758",
          4461: "f386addf170e141e555afa7170773e92",
          4768: "aca35c45e370a35b907c2bfd1bbba13f",
          6854: "8b73c442ec2b588e00961f240409b9a1"
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
              return "default" === d && (o("@foundry/icons", "4.1.4", (() => Promise.all([b.e(2480), b.e(4548), b.e(1127), b.e(126), b.e(2487)]).then((() => () => b(34548))))), o("@popperjs/core", "2.11.8", (() => b.e(8376).then((() => () => b(78376))))), o("@radix-ui/react-accordion", "1.2.8", (() => Promise.all([b.e(6260), b.e(1127), b.e(8429), b.e(1222), b.e(9158), b.e(4406), b.e(5854)]).then((() => () => b(76260))))), o("@radix-ui/react-dialog", "1.1.11", (() => Promise.all([b.e(6858), b.e(3935), b.e(1127), b.e(8429), b.e(1222), b.e(9158), b.e(4406), b.e(9690), b.e(4902), b.e(3473)]).then((() => () => b(53935))))), o("@radix-ui/react-id", "1.1.1", (() => Promise.all([b.e(1127), b.e(822)]).then((() => () => b(30822))))), o("@radix-ui/react-navigation-menu", "1.2.10", (() => Promise.all([b.e(6858), b.e(6367), b.e(1127), b.e(8429), b.e(1222), b.e(9158), b.e(4406), b.e(3694), b.e(616)]).then((() => () => b(6367))))), o("@radix-ui/react-popover", "1.1.11", (() => Promise.all([b.e(6858), b.e(5839), b.e(1127), b.e(8429), b.e(1222), b.e(9158), b.e(4406), b.e(9690), b.e(4902), b.e(1155)]).then((() => () => b(3536))))), o("@radix-ui/react-portal", "1.1.6", (() => Promise.all([b.e(1127), b.e(8429), b.e(1222), b.e(1029)]).then((() => () => b(61029))))), o("@radix-ui/react-slot", "1.2.0", (() => Promise.all([b.e(1127), b.e(3135)]).then((() => () => b(23135))))), o("@radix-ui/react-use-controllable-state", "1.2.2", (() => Promise.all([b.e(1127), b.e(4464)]).then((() => () => b(44464))))), o("@radix-ui/react-visually-hidden", "1.2.0", (() => Promise.all([b.e(1127), b.e(1222), b.e(306), b.e(7385)]).then((() => () => b(9766))))), o("@radix-ui/react-visually-hidden", "1.2.0", (() => Promise.all([b.e(1127), b.e(1222), b.e(2957), b.e(7885)]).then((() => () => b(87885))))), o("@radix-ui/react-visually-hidden", "1.2.0", (() => Promise.all([b.e(1127), b.e(1222), b.e(3117), b.e(2528)]).then((() => () => b(42528))))), o("@radix-ui/react-visually-hidden", "1.2.0", (() => Promise.all([b.e(1127), b.e(8429), b.e(1222), b.e(2999)]).then((() => () => b(62999))))), o("@rsgweb/locale-tools", "1.0.0", (() => Promise.all([b.e(3218), b.e(1127), b.e(838)]).then((() => () => b(35671))))), o("@rsgweb/modules-core-user-action-menu", "0.0.0", (() => Promise.all([b.e(6858), b.e(5475), b.e(5839), b.e(2480), b.e(4768), b.e(1127), b.e(8429), b.e(1222), b.e(9158), b.e(4406), b.e(6497), b.e(9690), b.e(4902), b.e(5966), b.e(3694), b.e(261), b.e(1788), b.e(2918), b.e(1082), b.e(2982)]).then((() => () => b(62759))))), o("@rsgweb/rockstar-account", "0.0.0", (() => Promise.all([b.e(5475), b.e(7709), b.e(1127), b.e(6497), b.e(5966), b.e(2911)]).then((() => () => b(80763))))), o("@rsgweb/utils", "1.0.0", (() => Promise.all([b.e(5475), b.e(1127), b.e(6497), b.e(2327)]).then((() => () => b(79819))))), o("classnames", "2.5.1", (() => b.e(9704).then((() => () => b(89704))))), o("framer-motion", "7.10.3", (() => Promise.all([b.e(7485), b.e(1127)]).then((() => () => b(17485))))), o("gsap", "0.0.0", (() => b.e(8728).then((() => () => b(58728))))), o("lodash", "4.17.21", (() => b.e(4981).then((() => () => b(4981))))), o("react-dom", "18.3.1", (() => Promise.all([b.e(3663), b.e(1127)]).then((() => () => b(53663))))), o("react-dom", "19.1.0", (() => Promise.all([b.e(1127), b.e(5422)]).then((() => () => b(65422))))), o("react-dom", "19.1.0", (() => Promise.all([b.e(1127), b.e(8275)]).then((() => () => b(78275))))), o("react-dom", "19.1.0", (() => Promise.all([b.e(1127), b.e(9649)]).then((() => () => b(19649))))), o("react-dom", "19.1.0", (() => Promise.all([b.e(1127), b.e(621)]).then((() => () => b(90621))))), o("react-popper", "2.3.0", (() => Promise.all([b.e(1127), b.e(8429), b.e(3386), b.e(4733)]).then((() => () => b(84733))))), o("react-remove-scroll", "2.6.3", (() => Promise.all([b.e(8591), b.e(1127)]).then((() => () => b(28591))))), o("react-router-dom", "6.30.0", (() => Promise.all([b.e(4105), b.e(1127), b.e(2127)]).then((() => () => b(94105))))), o("react", "18.2.0", (() => b.e(2522).then((() => () => b(42522))))), o("react", "18.3.1", (() => b.e(8654).then((() => () => b(98654))))), o("spatial-navigation-polyfill", "1.3.1", (() => b.e(491).then((() => () => b(60491)))))), e[d] = n.length ? Promise.all(n).then((() => e[d] = 1)) : 1
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
              71127: () => s("default", "react", !1, [1, 18, 2, 0], (() => b.e(8654).then((() => () => b(98654))))),
              21222: () => l("default", "@radix-ui/react-slot", !1, [1, 1, 1, 0], (() => b.e(5516).then((() => () => b(23135))))),
              79158: () => l("default", "@radix-ui/react-use-controllable-state", !1, [1, 1, 1, 0], (() => b.e(2083).then((() => () => b(44464))))),
              74406: () => l("default", "@radix-ui/react-id", !1, [1, 1, 1, 0], (() => b.e(8441).then((() => () => b(30822))))),
              9623: () => l("default", "react-router-dom", !1, [1, 6, 11, 2], (() => Promise.all([b.e(4105), b.e(2127)]).then((() => () => b(94105))))),
              16188: () => l("default", "lodash", !1, [1, 4, 17, 21], (() => b.e(4981).then((() => () => b(4981))))),
              34902: () => l("default", "@radix-ui/react-portal", !1, [1, 1, 1, 4], (() => Promise.all([b.e(8429), b.e(3410)]).then((() => () => b(61029))))),
              95966: () => l("default", "@rsgweb/utils", !1, [1, "workspace:^"], (() => Promise.all([b.e(5475), b.e(6497)]).then((() => () => b(79819))))),
              63694: () => l("default", "@radix-ui/react-visually-hidden", !1, [1, 1, 1, 2], (() => Promise.all([b.e(8429), b.e(5380)]).then((() => () => b(62999))))),
              24036: () => l("default", "classnames", !1, [1, 2, 5, 1], (() => b.e(9704).then((() => () => b(89704))))),
              24780: () => l("default", "@radix-ui/react-dialog", !1, [1, 1, 1, 6], (() => Promise.all([b.e(6858), b.e(3935), b.e(8429), b.e(9158), b.e(9690)]).then((() => () => b(53935))))),
              78618: () => l("default", "@foundry/icons", !1, [1, 4], (() => Promise.all([b.e(2480), b.e(4548), b.e(126), b.e(6854)]).then((() => () => b(34548))))),
              81788: () => l("default", "@rsgweb/locale-tools", !1, [1, "workspace:^"], (() => Promise.all([b.e(3218), b.e(8457)]).then((() => () => b(35671))))),
              63582: () => l("default", "framer-motion", !1, [1, 7, 5, 1], (() => b.e(7485).then((() => () => b(17485))))),
              73579: () => s("default", "react", !1, [1, 18, 2, 0], (() => b.e(2522).then((() => () => b(42522))))),
              79952: () => l("default", "spatial-navigation-polyfill", !1, [1, 1, 3, 1], (() => b.e(491).then((() => () => b(60491))))),
              2918: () => l("default", "@rsgweb/rockstar-account", !1, [1, "workspace:^"], (() => Promise.all([b.e(7709), b.e(7542)]).then((() => () => b(80763))))),
              9046: () => l("default", "@radix-ui/react-navigation-menu", !1, [1, 1, 2, 1], (() => Promise.all([b.e(6858), b.e(6367), b.e(8429), b.e(9158)]).then((() => () => b(6367))))),
              42638: () => l("default", "@radix-ui/react-popover", !1, [1, 1, 1, 4], (() => Promise.all([b.e(6858), b.e(5839), b.e(8429), b.e(9158), b.e(9690), b.e(3536)]).then((() => () => b(3536))))),
              61339: () => l("default", "@radix-ui/react-accordion", !1, [1, 1, 2, 2], (() => Promise.all([b.e(6260), b.e(8429), b.e(9158)]).then((() => () => b(76260))))),
              13581: () => l("default", "gsap", !1, [1, "workspace:^"], (() => b.e(8728).then((() => () => b(58728))))),
              20270: () => l("default", "@rsgweb/modules-core-user-action-menu", !1, [1, "workspace:^"], (() => Promise.all([b.e(6858), b.e(5839), b.e(2480), b.e(4768), b.e(8429), b.e(1222), b.e(9158), b.e(4406), b.e(9690), b.e(4902), b.e(3694), b.e(261), b.e(1082)]).then((() => () => b(62759))))),
              75971: () => l("default", "react-popper", !1, [1, 2, 3, 0], (() => Promise.all([b.e(8429), b.e(3386), b.e(7114)]).then((() => () => b(84733))))),
              18429: () => s("default", "react-dom", !1, [1, 18, 2, 0], (() => b.e(3663).then((() => () => b(53663))))),
              80126: () => l("default", "@radix-ui/react-visually-hidden", !1, [1, 1, 1, 2], (() => Promise.all([b.e(1222), b.e(2957), b.e(266)]).then((() => () => b(87885))))),
              19690: () => l("default", "react-remove-scroll", !1, [1, 2, 5, 7], (() => b.e(8591).then((() => () => b(28591))))),
              30306: () => s("default", "react-dom", !1, [1, 18, 2, 0], (() => b.e(3041).then((() => () => b(65422))))),
              52957: () => s("default", "react-dom", !1, [1, 18, 2, 0], (() => b.e(656).then((() => () => b(78275))))),
              23117: () => s("default", "react-dom", !1, [1, 18, 2, 0], (() => b.e(2030).then((() => () => b(19649))))),
              75199: () => l("default", "@radix-ui/react-visually-hidden", !1, [1, 1, 1, 2], (() => Promise.all([b.e(306), b.e(9766)]).then((() => () => b(9766))))),
              79630: () => l("default", "@radix-ui/react-visually-hidden", !1, [1, 1, 1, 2], (() => Promise.all([b.e(3117), b.e(147)]).then((() => () => b(42528))))),
              43386: () => l("default", "@popperjs/core", !1, [1, 2, 11, 8], (() => b.e(8376).then((() => () => b(78376))))),
              22127: () => s("default", "react-dom", !1, [1, 18, 2, 0], (() => b.e(3002).then((() => () => b(90621)))))
            },
            p = {
              126: [80126],
              261: [24036, 24780, 78618],
              306: [30306],
              1082: [75199, 79630],
              1127: [71127],
              1222: [21222],
              1788: [81788],
              2127: [22127],
              2918: [2918],
              2957: [52957],
              3117: [23117],
              3236: [13581, 20270, 75971],
              3386: [43386],
              3448: [63582, 73579, 79952],
              3694: [63694],
              4406: [74406],
              4461: [9046, 42638, 61339],
              4902: [34902],
              5966: [95966],
              6497: [9623, 16188],
              8429: [18429],
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
                835: 1,
                1082: 1,
                2487: 1,
                3236: 1,
                3613: 1,
                4461: 1,
                4768: 1,
                6854: 1
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
              else if (/^(1(127|222|26|788)|2(127|61|918|957)|3(06|117|386|694)|4406|4902|5966|6854|8429|9158|9690)$/.test(a)) e[a] = 0;
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
        })(), b.nc = void 0, b(44857), b(84823)
      })())
    }
  }
}));