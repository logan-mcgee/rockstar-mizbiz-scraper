try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "16cf46a1-5e82-44fa-a429-fbb045612e43", e._sentryDebugIdIdentifier = "sentry-dbid-16cf46a1-5e82-44fa-a429-fbb045612e43")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-red-dead-redemption-2",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register(["@rockstargames/modules-core-videoplayer"], function(e, a) {
  var d = {};
  return Object.defineProperty(d, "__esModule", {
    value: !0
  }), {
    setters: [function(e) {
      Object.keys(e).forEach(function(a) {
        d[a] = e[a]
      })
    }],
    execute: function() {
      e((() => {
        var e, f, c, r, t, n, o = {
            17411: (e, a, d) => {
              const f = d(77027).y;
              a.w = function(e) {
                if (e || (e = 1), !d.y.meta || !d.y.meta.url) throw console.error("__system_context__", d.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                d.p = f(d.y.meta.url, e)
              }
            },
            25136: e => {
              "use strict";
              e.exports = d
            },
            28419: (e, a, d) => {
              (0, d(17411).w)(1)
            },
            77027: (e, a, d) => {
              a.y = function(e, a) {
                var d = document.createElement("a");
                d.href = e;
                for (var f = "/" === d.pathname[0] ? d.pathname : "/" + d.pathname, c = 0, r = f.length; c !== a && r >= 0;) "/" === f[--r] && c++;
                if (c !== a) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + a + ") is greater than the number of directories (" + c + ") in the URL path " + e);
                var t = f.slice(0, r + 1);
                return d.protocol + "//" + d.host + t
              };
              Number.isInteger
            },
            85819: (e, a, d) => {
              "use strict";
              var f = {
                  "./index": () => Promise.all([d.e(3004), d.e(832), d.e(2065), d.e(9763), d.e(7304), d.e(1127), d.e(1556), d.e(5085), d.e(2169), d.e(8032)]).then(() => () => d(98032))
                },
                c = (e, a) => (d.R = a, a = d.o(f, e) ? f[e]() : Promise.resolve().then(() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                }), d.R = void 0, a),
                r = (e, a) => {
                  if (d.S) {
                    var f = "default",
                      c = d.S[f];
                    if (c && c !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return d.S[f] = e, d.I(f, a)
                  }
                };
              d.d(a, {
                get: () => c,
                init: () => r
              })
            },
            93032: (e, a, d) => {
              d(28419)
            }
          },
          b = {};

        function i(e) {
          var a = b[e];
          if (void 0 !== a) return a.exports;
          var d = b[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return o[e].call(d.exports, d, d.exports, i), d.loaded = !0, d.exports
        }
        return i.m = o, i.c = b, i.y = a, i.amdO = {}, i.n = e => {
          var a = e && e.__esModule ? () => e.default : () => e;
          return i.d(a, {
            a
          }), a
        }, f = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, i.t = function(a, d) {
          if (1 & d && (a = this(a)), 8 & d) return a;
          if ("object" == typeof a && a) {
            if (4 & d && a.__esModule) return a;
            if (16 & d && "function" == typeof a.then) return a
          }
          var c = Object.create(null);
          i.r(c);
          var r = {};
          e = e || [null, f({}), f([]), f(f)];
          for (var t = 2 & d && a;
            ("object" == typeof t || "function" == typeof t) && !~e.indexOf(t); t = f(t)) Object.getOwnPropertyNames(t).forEach(e => r[e] = () => a[e]);
          return r.default = () => a, i.d(c, r), c
        }, i.d = (e, a) => {
          for (var d in a) i.o(a, d) && !i.o(e, d) && Object.defineProperty(e, d, {
            enumerable: !0,
            get: a[d]
          })
        }, i.f = {}, i.e = e => Promise.all(Object.keys(i.f).reduce((a, d) => (i.f[d](e, a), a), [])), i.u = e => "js/" + {
          8: "123703c87a042f78c3e20fc7031f02a6",
          68: "07ef00809e8245a942cd729f7e4e90a4",
          131: "1667f1eb75dd3a66cbe6b4929c81a6de",
          173: "2f6d7730609ab62eb9973e63f36cfaf8",
          278: "f157d84a1ed32af2f558bf128d0f3f9c",
          287: "bb70e32fa2aae7989471d745236237a5",
          299: "31afb4efad6e6f4c930d9e5389140603",
          314: "825b65efb58cd5709d0398974f6e0df6",
          379: "d111c8a7c74673f44bb7d5fb085f9d3e",
          439: "b7296375f9324307feb05820e784a0cd",
          662: "417ea7470caa372bb9d038d6cd26484b",
          768: "ece149b75378e7b2c15585aa0a4904fe",
          824: "07506470c8bafc6a33dc04d0b6b86882",
          832: "f900e15a15dc659632ea943a2bb4f9c4",
          907: "d348695fe046f3fbe384140a6b2dda91",
          1027: "845f946fc8a68e977f3f0cf480ef0c0e",
          1054: "61bd3c1ddf849e82cf56ebbb47e7c4cd",
          1098: "9bff61cde1da55c4a606ebbe3c0252f3",
          1242: "69ce59a728590adab78fbf79b83b7a24",
          1569: "fe2068a9a27d90e23f39f2bc366799b0",
          1573: "5e104c8b7bb450ba6ee03c3dbbe672a6",
          1730: "ad5e2bbee19e62643b9682c6834ddbaf",
          1758: "fe6aeed8681b07427c6ae38ac3985004",
          1822: "1e2d9ee2a5eb9c12f667e6cf41eb6a6a",
          1868: "753c45daf163cea3c31ead429e45fe31",
          1982: "10531518876233c3ddc1af0ce8de6dba",
          2065: "c5869752661fb443622d95b14e3afcc3",
          2156: "f2296c42af1edfc634957098de149be7",
          2169: "bafec6fac417774d1d0b8bf7cd836852",
          2171: "c7eb1ed9f1c8aeb6cd1851e720de2eae",
          2217: "0be51cd28d23e00c127c2016cc5ff0cd",
          2221: "5b73262eddb79b51b66562fddb3acba1",
          2234: "e3ed308e50edce1d75352d78414ee58b",
          2243: "454e2b27b14a2b936827c9c6b3d7aba1",
          2306: "f8dbca90a772134556f3928e3f24d056",
          2319: "aefa24dadbbadea9c86a531f7b42d878",
          2347: "e0a8b5d2d61c4c5d89f06cf1409db820",
          2365: "b579fb368f9d762b73eb07836391da18",
          2398: "5ad48203e2d5529e2784627c93d52929",
          2446: "0d0ce0cd19d352033a50d0beb553de65",
          2466: "b6d4541134ee84db960c64680eafb6a3",
          2508: "5d0f88d94a26bf1db5dacb3914d0ef53",
          2642: "4c6cfa26bc33717f6b970a77d17b7ea7",
          2678: "0c216cbd6ad9b38b7cd5df863bff70c3",
          2787: "5d0ad5e36d2cbc3cd2ad5ea878d21c97",
          2864: "e4087dff78b94baf6caf0c884a86a1ac",
          3004: "e585a5f1b2221772701add271694253b",
          3034: "d63badbb9679b81a170948ab0ed7f40d",
          3197: "ae3c4ae5f69492ee168df447bfb4f385",
          3343: "2eacd9155ea0b7d7de30fce7b88682ee",
          3370: "87b4dcf4d42e7e0297d015e71a3313cc",
          3475: "88b64f1fc0bc590c5e2a0c648902e53f",
          3486: "e6e2055a6d96931043ebdfe3f36c2bff",
          3491: "4fc0224e560c86138a517a9a1148f81b",
          3613: "a3298d05dbae6afc34fc267fdcc72a0d",
          3697: "829d4b4849d3868f3cd6b8ec66226034",
          3885: "2403b03138ebb0792071a0f355944245",
          3896: "a1fd5cdec88b5adac5a2323245f8560c",
          3941: "f2351d03f190eedbc88bc515011cd064",
          4011: "a5805e97cb3ba427cf2aa1e1413e12f0",
          4057: "3d52f0721e164d4a4898438a1b96d2f9",
          4228: "fa0c229fd4f9e95a49afa596a8da0860",
          4348: "7722366a34a3a6b01757788d3c9a547c",
          4528: "542febea2f89c4168aea03185c5234f1",
          4578: "fb461524d40571a4682422e2a5750a99",
          4598: "95197ddc4523ca3405815034d7759d39",
          4621: "207bbd84a6447057976d3af81db29ee6",
          4627: "265d20c9954154a06c4de55881e4140b",
          4700: "c507ac7e6769c309bcdeb897150ab210",
          4710: "7c25acd8106fe9ece7b941f7e9d6f585",
          4731: "ba944b38940d37d80fd001549321bbdb",
          4799: "e2944f4fdccde950c123034be64b16d0",
          4851: "7672f3956a23a1a665489d9917dc1ab0",
          4861: "3b5f1c50be069017150236c4336cc4c2",
          4913: "ff441aa443224806e9290e63e6de5e98",
          5018: "a2d5c6b51ca4acc0b9e73b0584426487",
          5076: "28a8d590dd8c1d3a187f489c96b64d1d",
          5085: "43fbc7583494ce6baeef12a0edd591dc",
          5233: "d71b4e461b101359632ac9402188a933",
          5259: "abbdbbab58b66fdc6cbbf9de424e6c21",
          5265: "8f8f18bf28a50ca5526ef7b044826067",
          5389: "74e1b3f01f815a900590ea283323ecd9",
          5415: "2ed50fbb9e20d3755d25c452b82255d8",
          5530: "08c6ffc8fbdb7ecfe20ac3227cf27cb6",
          5639: "8d681031122695af24fab46c79c00622",
          5663: "057329830d58614feb78680de08c6b77",
          5686: "8c10dd4a2ccb3e6a93586f41226a7540",
          5742: "741f52e8b5d9c65b1adb51999fec7d1d",
          5830: "c5e8d6b31326b7c4b7b5ee7ef757f9c0",
          5832: "464db37b24c63a8362d523ea74e94c0e",
          6267: "27e3c0947cd49aef3a263efcc84e66cd",
          6280: "572534f03de6fb70fe65cd5637c5bd25",
          6285: "cb31782d9636b5eedb49e5eaa30377b3",
          6361: "aef56a28c3b5c257fdc035e41505b3bf",
          6471: "8bb58d6065ddff81ff62e1f4b2a8f566",
          6617: "73cffac0f53fe3d063493a83d8fb89d7",
          6664: "8fea8663565a78c528ee7f3d2f3e0616",
          6737: "38d865aea825b8a920481007607def73",
          6879: "d6525620fb5280b1327b38fee2b07ae2",
          6891: "be25000c4d299d69e2059e4547e5ebcc",
          6916: "959cef3dcb060a3f94a470a0c58ea663",
          6997: "4d5eb8276461669da008cabd4d39b93b",
          7010: "ebe80834dab298671270f8c154345f63",
          7073: "ce09c7250cbb2bb760489bc921bbe1fb",
          7304: "a541e842255aa99ae9adcdae50c39372",
          7407: "ffcd54b5cff3e3f1aca0b9a28a2ea3e2",
          7436: "72e0d583a877924f8334ea3d5be80799",
          7452: "9a66eee2ffcc3d3c7ba1ed653fd4f0a0",
          7453: "572087e48b0002109bc38f56631a2145",
          7518: "05cc9d757e1642ab61d9e13f943ab676",
          7557: "7214c5ff66c1d078ac593265dd14039e",
          7582: "933567bf8a78269abf6afd148cb29c37",
          7770: "2835b3ebe314219918a3d38fae79e35b",
          7850: "556ee6de46c662672a07a5469a5be513",
          7970: "4e653fa008e67398a5bce8187370d3ed",
          8032: "6fe6302a46628e0e1ae810e9ae59eecd",
          8272: "03958c67b129b1dfaf36aab9c6d6da35",
          8325: "f60de440e6d9d16ae3ed351762534919",
          8391: "215babd611439b05a7b9c1c80c05ec18",
          8431: "906cd806160711100acf6233c8c6516a",
          8755: "15600f89a893ce9a2df579aba3349984",
          8845: "99a3ee0a42a4bbeedb5effb9fa7a265e",
          8880: "07de3e79c1c8b1357f0cf64242f187ac",
          8938: "8dda65c7255d197265e0ecb337813e53",
          8970: "aefd1b4557a715eea472e4210e45e0ae",
          9022: "b4cc8ae46132dd025017aed120dee9c8",
          9028: "9bfa0aa7805c2cdbd4310b1dc3cf6523",
          9126: "bd3e2ff2a5567c239cf0b5d07d75a1e7",
          9158: "d0eb7ba3b345eb330e878fb10f453582",
          9308: "9dcc78fc2ac16d9cfcabb5edb23bbb69",
          9377: "fdfe0eb94fa324cff52161c28b374484",
          9434: "d0abae3b00e024217f72cc7677afec07",
          9615: "d2be7379af549cffc0dba6f14a276485",
          9760: "fb5840daa2364baa2f2d4b7856974b68",
          9763: "ff436435884823683b1ebffb2ec22773",
          9810: "0b15958c201c48643d98c01d0f57293d",
          9936: "57e77bcebb6eaf35a9edd81f5032b9f4",
          9990: "6f3daed946d9a6b638c346f8c8aeacae"
        } [e] + ".js", i.miniCssF = e => "css/" + {
          8: "c1eb0999629396bc2adecd5b07d203b7",
          287: "c1eb0999629396bc2adecd5b07d203b7",
          625: "c1eb0999629396bc2adecd5b07d203b7",
          1027: "c1eb0999629396bc2adecd5b07d203b7",
          1573: "c1eb0999629396bc2adecd5b07d203b7",
          1695: "c1eb0999629396bc2adecd5b07d203b7",
          1913: "c1eb0999629396bc2adecd5b07d203b7",
          1982: "c1eb0999629396bc2adecd5b07d203b7",
          2217: "7a77eb02cd7db9e2b0a8533884b05191",
          2446: "dc27f95b899adb1bcfde610126557db8",
          4228: "c1eb0999629396bc2adecd5b07d203b7",
          4598: "7a77eb02cd7db9e2b0a8533884b05191",
          4618: "c1eb0999629396bc2adecd5b07d203b7",
          4858: "c1eb0999629396bc2adecd5b07d203b7",
          5423: "c1eb0999629396bc2adecd5b07d203b7",
          5686: "c1eb0999629396bc2adecd5b07d203b7",
          6135: "c1eb0999629396bc2adecd5b07d203b7",
          6617: "c1eb0999629396bc2adecd5b07d203b7",
          6737: "c1eb0999629396bc2adecd5b07d203b7",
          6916: "c1eb0999629396bc2adecd5b07d203b7",
          7518: "c1eb0999629396bc2adecd5b07d203b7",
          7595: "c1eb0999629396bc2adecd5b07d203b7",
          7605: "c1eb0999629396bc2adecd5b07d203b7",
          7850: "c1eb0999629396bc2adecd5b07d203b7",
          7864: "c1eb0999629396bc2adecd5b07d203b7",
          8032: "74c2d9ad0fb852b62f25b36c64b362de",
          8065: "c1eb0999629396bc2adecd5b07d203b7",
          8804: "c1eb0999629396bc2adecd5b07d203b7"
        } [e] + ".css", i.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), i.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), c = {}, r = "@rockstargames/sites-red-dead-redemption-2:", i.l = (e, a, d, f) => {
          if (c[e]) c[e].push(a);
          else {
            var t, n;
            if (void 0 !== d)
              for (var o = document.getElementsByTagName("script"), b = 0; b < o.length; b++) {
                var s = o[b];
                if (s.getAttribute("src") == e || s.getAttribute("data-webpack") == r + d) {
                  t = s;
                  break
                }
              }
            t || (n = !0, (t = document.createElement("script")).charset = "utf-8", t.timeout = 120, i.nc && t.setAttribute("nonce", i.nc), t.setAttribute("data-webpack", r + d), t.src = e), c[e] = [a];
            var l = (a, d) => {
                t.onerror = t.onload = null, clearTimeout(u);
                var f = c[e];
                if (delete c[e], t.parentNode && t.parentNode.removeChild(t), f && f.forEach(e => e(d)), a) return a(d)
              },
              u = setTimeout(l.bind(null, void 0, {
                type: "timeout",
                target: t
              }), 12e4);
            t.onerror = l.bind(null, t.onerror), t.onload = l.bind(null, t.onload), n && document.head.appendChild(t)
          }
        }, i.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, i.nmd = e => (e.paths = [], e.children || (e.children = []), e), t = {
          8032: [31879]
        }, n = {
          31879: ["default", "./index", 25136]
        }, i.f.remotes = (e, a) => {
          i.o(t, e) && t[e].forEach(e => {
            var d = i.R;
            d || (d = []);
            var f = n[e];
            if (!(d.indexOf(f) >= 0)) {
              if (d.push(f), f.p) return a.push(f.p);
              var c = a => {
                  a || (a = new Error("Container missing")), "string" == typeof a.message && (a.message += '\nwhile loading "' + f[1] + '" from ' + f[2]), i.m[e] = () => {
                    throw a
                  }, f.p = 0
                },
                r = (e, d, r, t, n, o) => {
                  try {
                    var b = e(d, r);
                    if (!b || !b.then) return n(b, t, o);
                    var i = b.then(e => n(e, t), c);
                    if (!o) return i;
                    a.push(f.p = i)
                  } catch (e) {
                    c(e)
                  }
                },
                t = (e, a, c) => r(a.get, f[1], d, 0, o, c),
                o = a => {
                  f.p = 1, i.m[e] = e => {
                    e.exports = a()
                  }
                };
              r(i, f[2], 0, 0, (e, a, d) => e ? r(i.I, f[0], 0, e, t, d) : c(), 1)
            }
          })
        }, (() => {
          i.S = {};
          var e = {},
            a = {};
          i.I = (d, f) => {
            f || (f = []);
            var c = a[d];
            if (c || (c = a[d] = {}), !(f.indexOf(c) >= 0)) {
              if (f.push(c), e[d]) return e[d];
              i.o(i.S, d) || (i.S[d] = {});
              var r = i.S[d],
                t = "@rockstargames/sites-red-dead-redemption-2",
                n = (e, a, d, f) => {
                  var c = r[e] = r[e] || {},
                    n = c[a];
                  (!n || !n.loaded && (!f != !n.eager ? f : t > n.from)) && (c[a] = {
                    get: d,
                    from: t,
                    eager: !!f
                  })
                },
                o = [];
              return "default" === d && (n("@foundry/icons", "5.19.0", () => Promise.all([i.e(3004), i.e(3613), i.e(1127), i.e(8429), i.e(1556), i.e(6737)]).then(() => () => i(83613))), n("@foundry/icons", "5.21.0", () => Promise.all([i.e(3004), i.e(3491), i.e(1127), i.e(8429), i.e(1556), i.e(1027)]).then(() => () => i(43491))), n("@foundry/icons", "5.21.0", () => Promise.all([i.e(3004), i.e(9810), i.e(1127), i.e(8429), i.e(1556), i.e(7518)]).then(() => () => i(89810))), n("@foundry/icons", "5.21.0", () => Promise.all([i.e(3004), i.e(7582), i.e(1127), i.e(8429), i.e(1556), i.e(4228)]).then(() => () => i(7582))), n("@foundry/icons", "5.21.0", () => Promise.all([i.e(3004), i.e(1730), i.e(1127), i.e(8429), i.e(1556), i.e(7850)]).then(() => () => i(1730))), n("@foundry/icons", "5.21.0", () => Promise.all([i.e(3004), i.e(4627), i.e(1127), i.e(8429), i.e(1556), i.e(6916)]).then(() => () => i(94627))), n("@foundry/icons", "5.21.0", () => Promise.all([i.e(3004), i.e(768), i.e(1127), i.e(8429), i.e(1556), i.e(8)]).then(() => () => i(30768))), n("@foundry/icons", "5.21.0", () => Promise.all([i.e(3004), i.e(379), i.e(1127), i.e(8429), i.e(1556), i.e(287)]).then(() => () => i(30379))), n("@foundry/icons", "5.21.0", () => Promise.all([i.e(3004), i.e(7770), i.e(1127), i.e(8429), i.e(1556), i.e(1982)]).then(() => () => i(27770))), n("@foundry/icons", "5.21.0", () => Promise.all([i.e(3004), i.e(4348), i.e(1127), i.e(8429), i.e(1556), i.e(5686)]).then(() => () => i(4348))), n("@foundry/icons", "5.21.0", () => Promise.all([i.e(3004), i.e(9434), i.e(1127), i.e(8429), i.e(1556), i.e(6617)]).then(() => () => i(9434))), n("@foundry/icons", "5.21.0", () => Promise.all([i.e(3004), i.e(1569), i.e(1127), i.e(8429), i.e(1556), i.e(1573)]).then(() => () => i(51569))), n("@foundry/react", "5.19.0", () => Promise.all([i.e(3004), i.e(2787), i.e(832), i.e(2446), i.e(1127), i.e(8429), i.e(1556), i.e(1097), i.e(9158)]).then(() => () => i(82446))), n("@rsgweb/locale-tools", "0.0.0", () => Promise.all([i.e(3004), i.e(2787), i.e(1127), i.e(2319)]).then(() => () => i(2319))), n("@rsgweb/modules-core-agegate", "0.0.0", () => Promise.all([i.e(832), i.e(2065), i.e(9763), i.e(2508), i.e(1127), i.e(5085), i.e(2169), i.e(2217)]).then(() => () => i(42217))), n("@rsgweb/utils", "0.0.0", () => Promise.all([i.e(3004), i.e(832), i.e(2065), i.e(4057), i.e(1127), i.e(5085), i.e(9308)]).then(() => () => i(79308))), n("clsx", "2.1.1", () => i.e(439).then(() => () => i(10439))), n("lodash", "4.17.21", () => i.e(5076).then(() => () => i(15076))), n("react-dom", "18.3.1", () => Promise.all([i.e(1098), i.e(1127)]).then(() => () => i(71098))), n("react-router-dom", "6.30.1", () => Promise.all([i.e(5389), i.e(1127), i.e(8429)]).then(() => () => i(15389))), n("react", "18.3.1", () => i.e(8431).then(() => () => i(48431))), (() => {
                var e = e => {
                  return a = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(a));
                  var a
                };
                try {
                  var a = i(25136);
                  if (!a) return;
                  var c = e => e && e.init && e.init(i.S[d], f);
                  if (a.then) return o.push(a.then(c, e));
                  var r = c(a);
                  if (r && r.then) return o.push(r.catch(e))
                } catch (a) {
                  e(a)
                }
              })()), o.length ? e[d] = Promise.all(o).then(() => e[d] = 1) : e[d] = 1
            }
          }
        })(), (() => {
          var e;
          i.g.importScripts && (e = i.g.location + "");
          var a = i.g.document;
          if (!e && a && (a.currentScript && "SCRIPT" === a.currentScript.tagName.toUpperCase() && (e = a.currentScript.src), !e)) {
            var d = a.getElementsByTagName("script");
            if (d.length)
              for (var f = d.length - 1; f > -1 && (!e || !/^http(s?):/.test(e));) e = d[f--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), i.p = e
        })(), (() => {
          var e = e => {
              var a = e => e.split(".").map(e => +e == e ? +e : e),
                d = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
                f = d[1] ? a(d[1]) : [];
              return d[2] && (f.length++, f.push.apply(f, a(d[2]))), d[3] && (f.push([]), f.push.apply(f, a(d[3]))), f
            },
            a = e => {
              var d = e[0],
                f = "";
              if (1 === e.length) return "*";
              if (d + .5) {
                f += 0 == d ? ">=" : -1 == d ? "<" : 1 == d ? "^" : 2 == d ? "~" : d > 0 ? "=" : "!=";
                for (var c = 1, r = 1; r < e.length; r++) c--, f += "u" == (typeof(n = e[r]))[0] ? "-" : (c > 0 ? "." : "") + (c = 2, n);
                return f
              }
              var t = [];
              for (r = 1; r < e.length; r++) {
                var n = e[r];
                t.push(0 === n ? "not(" + o() + ")" : 1 === n ? "(" + o() + " || " + o() + ")" : 2 === n ? t.pop() + " " + t.pop() : a(n))
              }
              return o();

              function o() {
                return t.pop().replace(/^\((.+)\)$/, "$1")
              }
            },
            d = (a, f) => {
              if (0 in a) {
                f = e(f);
                var c = a[0],
                  r = c < 0;
                r && (c = -c - 1);
                for (var t = 0, n = 1, o = !0;; n++, t++) {
                  var b, i, s = n < a.length ? (typeof a[n])[0] : "";
                  if (t >= f.length || "o" == (i = (typeof(b = f[t]))[0])) return !o || ("u" == s ? n > c && !r : "" == s != r);
                  if ("u" == i) {
                    if (!o || "u" != s) return !1
                  } else if (o)
                    if (s == i)
                      if (n <= c) {
                        if (b != a[n]) return !1
                      } else {
                        if (r ? b > a[n] : b < a[n]) return !1;
                        b != a[n] && (o = !1)
                      }
                  else if ("s" != s && "n" != s) {
                    if (r || n <= c) return !1;
                    o = !1, n--
                  } else {
                    if (n <= c || i < s != r) return !1;
                    o = !1
                  } else "s" != s && "n" != s && (o = !1, n--)
                }
              }
              var l = [],
                u = l.pop.bind(l);
              for (t = 1; t < a.length; t++) {
                var h = a[t];
                l.push(1 == h ? u() | u() : 2 == h ? u() & u() : h ? d(h, f) : !u())
              }
              return !!u()
            },
            f = (a, d, f) => {
              var c = f ? (e => Object.keys(e).reduce((a, d) => (e[d].eager && (a[d] = e[d]), a), {}))(a[d]) : a[d];
              return Object.keys(c).reduce((a, d) => !a || !c[a].loaded && ((a, d) => {
                a = e(a), d = e(d);
                for (var f = 0;;) {
                  if (f >= a.length) return f < d.length && "u" != (typeof d[f])[0];
                  var c = a[f],
                    r = (typeof c)[0];
                  if (f >= d.length) return "u" == r;
                  var t = d[f],
                    n = (typeof t)[0];
                  if (r != n) return "o" == r && "n" == n || "s" == n || "u" == r;
                  if ("o" != r && "u" != r && c != t) return c < t;
                  f++
                }
              })(a, d) ? d : a, 0)
            },
            c = (e, a, d) => d ? d() : ((e, a) => (e => {
              throw new Error(e)
            })("Shared module " + a + " doesn't exist in shared scope " + e))(e, a),
            r = (e => function(a, d, f, c, r) {
              var t = i.I(a);
              return t && t.then && !f ? t.then(e.bind(e, a, i.S[a], d, !1, c, r)) : e(a, i.S[a], d, f, c, r)
            })((e, r, t, n, o, b) => {
              if (!((e, a) => e && i.o(e, a))(r, t)) return c(e, t, b);
              var s, l, u = f(r, t, n);
              return d(o, u) || (l = ((e, d, f, c) => "Unsatisfied version " + f + " from " + (f && e[d][f].from) + " of shared singleton module " + d + " (required " + a(c) + ")")(r, t, u, o), "undefined" != typeof console && console.warn && console.warn(l)), (s = r[t][u]).loaded = 1, s.get()
            }),
            t = {},
            n = {
              71127: () => r("default", "react", !1, [1, 18, 2, 0], () => i.e(8431).then(() => () => i(48431))),
              1556: () => r("default", "clsx", !1, [1, 2, 1, 1], () => i.e(439).then(() => () => i(10439))),
              10181: () => r("default", "react-router-dom", !1, [1, 6, 11, 2], () => Promise.all([i.e(5389), i.e(8429)]).then(() => () => i(15389))),
              10336: () => r("default", "lodash", !1, [1, 4, 17, 21], () => i.e(5076).then(() => () => i(15076))),
              56990: () => r("default", "@rsgweb/locale-tools", !1, [4, 0, 0, 0], () => Promise.all([i.e(3004), i.e(2787), i.e(7557)]).then(() => () => i(2319))),
              58136: () => r("default", "@rsgweb/utils", !1, [4, 0, 0, 0], () => Promise.all([i.e(3004), i.e(4057), i.e(9308)]).then(() => () => i(79308))),
              23529: () => r("default", "@foundry/react", !1, [2, 5, 19], () => Promise.all([i.e(2787), i.e(2446), i.e(8429), i.e(1097)]).then(() => () => i(82446))),
              48974: () => r("default", "@rsgweb/modules-core-agegate", !1, [4, 0, 0, 0], () => Promise.all([i.e(2508), i.e(4598)]).then(() => () => i(42217))),
              18429: () => r("default", "react-dom", !1, [1, 18, 2, 0], () => i.e(1098).then(() => () => i(71098))),
              24335: () => r("default", "@foundry/icons", !1, [2, 5, 19], () => Promise.all([i.e(768), i.e(1695)]).then(() => () => i(30768))),
              39045: () => r("default", "@foundry/icons", !1, [2, 5, 19], () => Promise.all([i.e(9810), i.e(625)]).then(() => () => i(89810))),
              44123: () => r("default", "@foundry/icons", !1, [2, 5, 19], () => Promise.all([i.e(1730), i.e(7595)]).then(() => () => i(1730))),
              50731: () => r("default", "@foundry/icons", !1, [2, 5, 19], () => Promise.all([i.e(4348), i.e(5423)]).then(() => () => i(4348))),
              55222: () => r("default", "@foundry/icons", !1, [2, 5, 19], () => Promise.all([i.e(3491), i.e(8804)]).then(() => () => i(43491))),
              68037: () => r("default", "@foundry/icons", !1, [2, 5, 19], () => Promise.all([i.e(9434), i.e(7605)]).then(() => () => i(9434))),
              68497: () => r("default", "@foundry/icons", !1, [2, 5, 19], () => Promise.all([i.e(7582), i.e(8065)]).then(() => () => i(7582))),
              68876: () => r("default", "@foundry/icons", !1, [2, 5, 19], () => Promise.all([i.e(379), i.e(4858)]).then(() => () => i(30379))),
              71617: () => r("default", "@foundry/icons", !1, [2, 5, 19], () => Promise.all([i.e(3613), i.e(1913)]).then(() => () => i(83613))),
              75571: () => r("default", "@foundry/icons", !1, [2, 5, 19], () => Promise.all([i.e(7770), i.e(6135)]).then(() => () => i(27770))),
              76994: () => r("default", "@foundry/icons", !1, [2, 5, 19], () => Promise.all([i.e(1569), i.e(7864)]).then(() => () => i(51569))),
              97916: () => r("default", "@foundry/icons", !1, [2, 5, 19], () => Promise.all([i.e(4627), i.e(4618)]).then(() => () => i(94627)))
            },
            o = {
              1097: [24335, 39045, 44123, 50731, 55222, 68037, 68497, 68876, 71617, 75571, 76994, 97916],
              1127: [71127],
              1556: [1556],
              2169: [58136],
              5085: [10181, 10336, 56990],
              8032: [23529, 48974],
              8429: [18429]
            },
            b = {};
          i.f.consumes = (e, a) => {
            i.o(o, e) && o[e].forEach(e => {
              if (i.o(t, e)) return a.push(t[e]);
              if (!b[e]) {
                var d = a => {
                  t[e] = 0, i.m[e] = d => {
                    delete i.c[e], d.exports = a()
                  }
                };
                b[e] = !0;
                var f = a => {
                  delete t[e], i.m[e] = d => {
                    throw delete i.c[e], a
                  }
                };
                try {
                  var c = n[e]();
                  c.then ? a.push(t[e] = c.then(d).catch(f)) : d(c)
                } catch (e) {
                  f(e)
                }
              }
            })
          }
        })(), (() => {
          if ("undefined" != typeof document) {
            var e = {
              5082: 0
            };
            i.f.miniCss = (a, d) => {
              e[a] ? d.push(e[a]) : 0 !== e[a] && {
                8: 1,
                287: 1,
                625: 1,
                1027: 1,
                1573: 1,
                1695: 1,
                1913: 1,
                1982: 1,
                2217: 1,
                2446: 1,
                4228: 1,
                4598: 1,
                4618: 1,
                4858: 1,
                5423: 1,
                5686: 1,
                6135: 1,
                6617: 1,
                6737: 1,
                6916: 1,
                7518: 1,
                7595: 1,
                7605: 1,
                7850: 1,
                7864: 1,
                8032: 1,
                8065: 1,
                8804: 1
              } [a] && d.push(e[a] = (e => new Promise((a, d) => {
                var f = i.miniCssF(e),
                  c = i.p + f;
                if (((e, a) => {
                    for (var d = document.getElementsByTagName("link"), f = 0; f < d.length; f++) {
                      var c = (t = d[f]).getAttribute("data-href") || t.getAttribute("href");
                      if ("stylesheet" === t.rel && (c === e || c === a)) return t
                    }
                    var r = document.getElementsByTagName("style");
                    for (f = 0; f < r.length; f++) {
                      var t;
                      if ((c = (t = r[f]).getAttribute("data-href")) === e || c === a) return t
                    }
                  })(f, c)) return a();
                ((e, a, d, f, c) => {
                  var r = document.createElement("link");
                  r.rel = "stylesheet", r.type = "text/css", i.nc && (r.nonce = i.nc), r.onerror = r.onload = d => {
                    if (r.onerror = r.onload = null, "load" === d.type) f();
                    else {
                      var t = d && d.type,
                        n = d && d.target && d.target.href || a,
                        o = new Error("Loading CSS chunk " + e + " failed.\n(" + t + ": " + n + ")");
                      o.name = "ChunkLoadError", o.code = "CSS_CHUNK_LOAD_FAILED", o.type = t, o.request = n, r.parentNode && r.parentNode.removeChild(r), c(o)
                    }
                  }, r.href = a, document.head.appendChild(r)
                })(e, c, 0, a, d)
              }))(a).then(() => {
                e[a] = 0
              }, d => {
                throw delete e[a], d
              }))
            }
          }
        })(), (() => {
          var e = {
            5082: 0
          };
          i.f.j = (a, d) => {
            var f = i.o(e, a) ? e[a] : void 0;
            if (0 !== f)
              if (f) d.push(f[2]);
              else if (/^(1(097|127|556|695|913)|7(595|605|864)|8(065|429|804)|4618|4858|5423|6135|625)$/.test(a)) e[a] = 0;
            else {
              var c = new Promise((d, c) => f = e[a] = [d, c]);
              d.push(f[2] = c);
              var r = i.p + i.u(a),
                t = new Error;
              i.l(r, d => {
                if (i.o(e, a) && (0 !== (f = e[a]) && (e[a] = void 0), f)) {
                  var c = d && ("load" === d.type ? "missing" : d.type),
                    r = d && d.target && d.target.src;
                  t.message = "Loading chunk " + a + " failed.\n(" + c + ": " + r + ")", t.name = "ChunkLoadError", t.type = c, t.request = r, f[1](t)
                }
              }, "chunk-" + a, a)
            }
          };
          var a = (a, d) => {
              var f, c, [r, t, n] = d,
                o = 0;
              if (r.some(a => 0 !== e[a])) {
                for (f in t) i.o(t, f) && (i.m[f] = t[f]);
                n && n(i)
              }
              for (a && a(d); o < r.length; o++) c = r[o], i.o(e, c) && e[c] && e[c][0](), e[c] = 0
            },
            d = self.webpackChunk_rockstargames_sites_red_dead_redemption_2 = self.webpackChunk_rockstargames_sites_red_dead_redemption_2 || [];
          d.forEach(a.bind(null, 0)), d.push = a.bind(null, d.push.bind(d))
        })(), i.nc = void 0, i(93032), i(85819)
      })())
    }
  }
});