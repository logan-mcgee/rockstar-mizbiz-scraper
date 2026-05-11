try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "aefe6943-7533-4a08-9847-b4fae468fbcc", e._sentryDebugIdIdentifier = "sentry-dbid-aefe6943-7533-4a08-9847-b4fae468fbcc")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-header",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register([], function(e, a) {
  return {
    execute: function() {
      e((() => {
        var e, d, r, t, c, f, b = {
            28419(e, a, d) {
              (0, d(17411).w)(1)
            },
            17411(e, a, d) {
              const r = d(77027).y;
              a.w = function(e) {
                if (e || (e = 1), !d.y.meta || !d.y.meta.url) throw console.error("__system_context__", d.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                d.p = r(d.y.meta.url, e)
              }
            },
            93032(e, a, d) {
              d(28419)
            },
            77027(e, a, d) {
              a.y = function(e, a) {
                var d = document.createElement("a");
                d.href = e;
                for (var r = "/" === d.pathname[0] ? d.pathname : "/" + d.pathname, t = 0, c = r.length; t !== a && c >= 0;) "/" === r[--c] && t++;
                if (t !== a) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + a + ") is greater than the number of directories (" + t + ") in the URL path " + e);
                var f = r.slice(0, c + 1);
                return d.protocol + "//" + d.host + f
              };
              Number.isInteger
            },
            72892(e, a, d) {
              "use strict";
              var r = {
                  "./core": () => Promise.all([d.e(3004), d.e(3214), d.e(6282), d.e(1127), d.e(8429), d.e(229), d.e(5824), d.e(6745), d.e(1556), d.e(2909), d.e(6052), d.e(3331), d.e(6752)]).then(() => () => d(57821))
                },
                t = (e, a) => (d.R = a, a = d.o(r, e) ? r[e]() : Promise.resolve().then(() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                }), d.R = void 0, a),
                c = (e, a) => {
                  if (d.S) {
                    var r = "default",
                      t = d.S[r];
                    if (t && t !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return d.S[r] = e, d.I(r, a)
                  }
                };
              d.d(a, {
                get: () => t,
                init: () => c
              })
            }
          },
          o = {};

        function n(e) {
          var a = o[e];
          if (void 0 !== a) return a.exports;
          var d = o[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return b[e].call(d.exports, d, d.exports, n), d.loaded = !0, d.exports
        }
        return n.m = b, n.c = o, n.y = a, n.amdO = {}, n.n = e => {
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
          var c = {};
          e = e || [null, d({}), d([]), d(d)];
          for (var f = 2 & r && a;
            ("object" == typeof f || "function" == typeof f) && !~e.indexOf(f); f = d(f)) Object.getOwnPropertyNames(f).forEach(e => c[e] = () => a[e]);
          return c.default = () => a, n.d(t, c), t
        }, n.d = (e, a) => {
          for (var d in a) n.o(a, d) && !n.o(e, d) && Object.defineProperty(e, d, {
            enumerable: !0,
            get: a[d]
          })
        }, n.f = {}, n.e = e => Promise.all(Object.keys(n.f).reduce((a, d) => (n.f[d](e, a), a), [])), n.u = e => "js/" + {
          68: "f50a748eca64d864ffa7c80461827b65",
          131: "2334e442ce52087162fc00123f333d60",
          145: "2935523c5911be6594d5ea127b3888ec",
          173: "09df3e74eb24e0a61e4071db6c5bb3b4",
          199: "2daa7440838a4c27ae76cad2950faad0",
          278: "125b67c2152dd04efd9a1f94a699b206",
          299: "5f2028752fa3b9cec88eea9012f80615",
          314: "1782e78e3c3f1a800cd6e54da13d08b1",
          368: "4b98bdec51a67084dcabf8e06b292d1d",
          395: "02d7e93f378107a77cf10867132cb414",
          439: "99a93b3d4d1ece5772e4354bdc4ddc4b",
          637: "a33ab8dca2ab53a482a393ad91844990",
          662: "0f791851035250dd6742f02158620761",
          710: "81401c183416d34edf2e0f280e41c1b1",
          778: "86d81b11007069756135cb5bb28400f6",
          824: "84e278203a5fe4c42e8542c8294ced28",
          837: "a0f0b06b3ae6bf5a773f6ce3991cf562",
          907: "2ec4cbc277267b321f4ec0a6c50a2358",
          1054: "23da21dc18c0f099ab1d281c84d9641f",
          1098: "a4b5e694d5011aa090fe4cf833e397a8",
          1121: "e6aafb30b4cbd8b81f19f5877d3897f4",
          1242: "70c32b01ffab9b26c4ac0924eeb660d5",
          1254: "142e68099bfa0d322d90d9891b572d70",
          1370: "c03ef39035b84f0cd85138308ee66e7a",
          1629: "d02f1fa60c88cafa928b170aa953ee90",
          1750: "f51541763f5188698379ef7547cefd7d",
          1758: "f7df7508a5e82b89d807319824ce3863",
          1795: "8fcfc1497655947af480f721a17545ab",
          1822: "66e0cfd25ddf380f77c0b2bfe04f4c27",
          1828: "e65cd8a5fd015dbf04eec23202c91eb0",
          1837: "ce9dff749fb8781e16f7b306e78393bd",
          1868: "6dce340f0e05569db4f24c236f52168e",
          2156: "801a528f527f6b1f9c1362083b2e62e0",
          2169: "a76f8a2d3467765bfab0c258de6fad18",
          2171: "af6a5e2d9d5eb3e8bd27e1debacd3c77",
          2202: "5319e368e0c22f670040de5209fa40c7",
          2221: "0dc330304d85015e681896b854baf100",
          2234: "d080005363c4b26b77227901cbc4826c",
          2243: "cc09545c0e8af917bf4e6a078582f057",
          2280: "a2adc345aca17fb702e1bf1f6f16186f",
          2295: "6828dc37d0452996839635b99c2f61dc",
          2306: "4a006d28d4244be1d50ecd430a15e447",
          2347: "2493295a03cd19fe295a2190fa43fe76",
          2365: "9da953dee7bf8726df1d83b374f669be",
          2398: "bda05ddb8f4b370eb17e44cacd09adbd",
          2466: "9d1d79a67de437fb2202f44143d8fe8e",
          2551: "7ebc1d8298e5d50f63166ef14f438c1e",
          2580: "5f813bb10319cb8e6975de813ef922f2",
          2642: "6ea91b995d9d6558edf2f439d5075bc8",
          2678: "f1379523f6db6d733fa771823d0e20d6",
          2776: "aac886a1193318504c2a6ebebaceb409",
          2864: "0b6a11d3d4979d7233b3d12b18239f20",
          2865: "d0c637ee72d9ebc28a59afbec0b176ba",
          3004: "d82bfa490d3a1380815d0466a0226b8b",
          3025: "9f002334a72bfca7cc75edeb5dd2dc44",
          3034: "cef4d3a3ba79cdb69faf9380e373ee9a",
          3117: "c0bc1f23286343b1f2fb7e4fb0411f3b",
          3197: "61f43fe431127c73bd984cf05606ef4c",
          3214: "01c37ca7b80d3ab91030eedae067349e",
          3343: "8fe5b35ffdef4ee7c517d26d816b5ffa",
          3370: "1bee079cd86d348e5f8d53f2e52f4d86",
          3475: "cb541766709ca7e09fa2fe94c18c3358",
          3477: "7a0c66fc4992bae1cdf1f20b6b113b91",
          3486: "21a40909610b815e48b9043dde16beae",
          3502: "18d5d263cd121b256189f590ff0109f8",
          3505: "90962d495b6705e21624a9c528e000b7",
          3697: "14e549067156c4932b9936f3a1bc57fe",
          3745: "3382d5097aedcbd263ed63fb43f76ed1",
          3885: "dc8e3a95b3ce2eb354b6a8dc914fbb7b",
          3896: "96704ed38da0d3e14bed56c8cd28b9f6",
          3941: "f22610b401c66374f343dd9c922b93eb",
          4010: "e0e9aafaecefef4856eb04ca79b8640b",
          4011: "8151c06c4fe848befd75fecde3e08b52",
          4069: "5b6aa233a72c20959b8faa42df6eda09",
          4218: "c409cbac9bd5034e094e32cfd10ef18a",
          4501: "eb7967efcf0a0ee8293a4181529636b4",
          4511: "54024e05809ee05a1346d19e8995f7b0",
          4528: "87bc7ac383be658d2520f7378b9ec569",
          4578: "76d136033d2713f35f6cfae390c4857f",
          4621: "3ed16b388c915feb72e11b19038ff002",
          4655: "773e804001fea0f309eb36528a00b5ba",
          4676: "423cecf2da9cb6507ab4f924455f716c",
          4700: "09f42b4289ed26f4254ef12b646340ca",
          4710: "ea565140fc216e7ddcbf913289df129f",
          4731: "04ac8961a637fc9d577f6a56c88c7094",
          4799: "ac78aea3304edbfd3720167233237f80",
          4851: "42440ebc25a682011837917588d9a10a",
          4861: "042403ab5851d6d1fd02032c86bcd5da",
          4913: "c547197b1624082242047a93e6cd2d07",
          5018: "ecaaf147171b3fbe964cbf8a23ae9880",
          5205: "55111e8d3a1223e6cf208feb3ff58ac0",
          5233: "b12468b5d8a0c980063edbf463daff00",
          5246: "4e2324cc8a4479912a9c63c140795bd7",
          5259: "e28a5720d4b46a13a0a994e1435cba47",
          5265: "3c7aba515098d8ea13bde5f4bbd043c1",
          5279: "77d271478843cd8194db9dfc2baefee7",
          5406: "add9f7ba68c8747987dff19d0cfd37c9",
          5415: "5b4e44913a92fa4865a1e9a240ce1c90",
          5423: "9177277bf675b72795d0c9137a5f1b1b",
          5488: "1e2c94176352082b304c632ca8e51d73",
          5498: "233ee55649d24209f34bcc3f6a6f378c",
          5515: "bf07308a76d0f73bd6cbdc879e3e3be4",
          5530: "c4881c99a1a443ca6cd2fea6428675ea",
          5639: "ae057ae888a4440367f3d8fd04d96b7c",
          5663: "d591f0186eaf8d2a93e33c61efd65896",
          5705: "a68ad33f8d0da47a5dd9c32fa7d2fedf",
          5742: "45122f18ea412c5ad5640913fc266630",
          5830: "dcbd5b9985fa37d4dd806011aa86b034",
          5832: "fa2c3d1e205de4bb52737ba572805711",
          5886: "453ff61f80e02b1c94d0348e29e019b7",
          5961: "3ba1376e13469e189e73fa3aab1265f6",
          6126: "ba3ca6b4137ac6a35ac9233e6417ad74",
          6267: "b81593b61e799b0fde605b0ad62abbc2",
          6280: "40a1b8c9676b1269eaf00d8f551722e3",
          6282: "69f8e989e0ab00c88bb9b1c398d35b1e",
          6285: "337a76a02bbfc4f004b234b27bf78c96",
          6361: "e1720af8f6a09e597cda70a07130fb19",
          6471: "75f57bdc6a0876025fb75d22aa4bad72",
          6664: "a2141c21732bf11b1c74b0729a2926d8",
          6752: "0f3396d5fa86b0caf79eb57fe52be8fd",
          6827: "b0a5c5c7e36a256a468b996cabb70378",
          6879: "b566c65de2b780ec1a00371ced74ad2e",
          6882: "65451a45d1c44cde3d94a34b02f97fb7",
          6891: "416685fc863e23100e4bfdec42d037f7",
          6892: "1827130f97f169b79fa065d17f5e2c52",
          6997: "1c6a208455d10ef43ecef96110882bb6",
          7010: "a79ebf466e29455c327e5b9dd2e2658a",
          7036: "7c2a2e950b409fbd8b15b0724ba57232",
          7073: "21b1dfc0ab39d5fcad6b097f59594ac8",
          7145: "8cb0fb6464fccb81f83f4c29ace8e114",
          7283: "9c33a38243b05a6297f9b38e8b38f41f",
          7301: "cb5f1c963f91a59d6083f70f8f489080",
          7407: "651e8cfadc80df10e28e59293025a1d1",
          7436: "81a0a92437e15e10a7395c70ad3ae647",
          7452: "68471884b5a4badbccf6fea1f26f0782",
          7453: "5a43b9d0ee72bc8d7414f3ab24494ef4",
          7533: "5db5ad864f09403cc36c7554a5e96424",
          7586: "3d07d0f6248a5889faf88b66fbe12e42",
          7660: "c2c8d8a610ff76f811e4bc3bfed1b7e7",
          7780: "1f96c4b881515033f07f8cddc7d8607b",
          7804: "bbc78f189a07b658c5e12ce7e3875453",
          7896: "ebb81b8c6214fcaea08431112a871f08",
          7970: "36651a416f27d05c293804283fa58106",
          7987: "bf6e48d9881896eed18e76a7b5532ade",
          8068: "3a954035583f8ff0d89dd5272380281f",
          8086: "c7c0cc97045e4643c1a6215a20ae67fd",
          8113: "ad978c9ac314295a75216b26389f5dcb",
          8272: "409834e12b86d256d51bb1816700b26d",
          8325: "c59283ad271211d5ea69243f8914aa67",
          8342: "9a9517ffe0f256ad7eafb8dfe3c2626d",
          8391: "f6f3896643a9575164180aa602be675d",
          8397: "d9022e644b67369975812fa1e608a628",
          8431: "a333306f84a3c5be01d281e1b5a3bbdb",
          8454: "7340ebc68484198dd35139de7d8cbbef",
          8755: "72d2de553b05cda3909dd3361f75eaca",
          8845: "7891afe356587bf38cc6b0fa6a1dbfb9",
          8873: "c5a30cd7c5a95b0a3e9209741cec4d65",
          8880: "b1d0ee9fcc49dd3cfa1508ff654cac97",
          8938: "a17d827923433259a94a9c527d62e36f",
          8970: "ec0611f6699e311c01a559673dd350d9",
          8989: "03cfb32c3cf2d8247d9d7df973919e09",
          9022: "07c84f510858f7ba3c798bdd340f1de8",
          9028: "7a6f0d6289b75d2a33cb4990bf350763",
          9126: "da880083bd9122a5e62e81fc7be83e70",
          9369: "d66baa293cebd534b3266fac089ff14e",
          9377: "63e87a3f4c6fa6a2e85ada3e7732edf1",
          9407: "2d50f6a308b2ece7c1565e1a7d910f2a",
          9447: "9cc1c4f1500c19dd07f5c88406dbda51",
          9511: "0945f3cf347e3aef74bd0dd169296c22",
          9615: "d17cc13f6926fdea5561ae0013239aeb",
          9629: "85a6b76b1acc6fc4ad9f202700b0b638",
          9673: "18d356fe19a5fa2151d938bf8c346a46",
          9719: "bc30759ebb1929278334e5350ce4860d",
          9760: "b9f5faf3b9a9b2f5660395fa716daf72",
          9821: "aac365c8df2689bde631a7d5e0996559",
          9936: "50064b05960ac7f63068466e2833a453",
          9990: "13cdc6f37ec992edfebe3b90241e6c46"
        } [e] + ".js", n.miniCssF = e => "css/" + {
          1913: "9605e4661b50b9d4fc907ee456d15b70",
          3214: "afee11c162463b8bccdddb5037b08daf",
          5488: "defe23ce18b1f088a9c9f5a2863ec2da",
          6282: "1c658bbf339ec3394ebdea7bf7ecf2c2",
          6752: "a82091a4a0f4576c791ed75fd895530b",
          6827: "9605e4661b50b9d4fc907ee456d15b70"
        } [e] + ".css", n.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), n.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), r = {}, t = "@rockstargames/modules-core-header:", n.l = (e, a, d, c) => {
          if (r[e]) r[e].push(a);
          else {
            var f, b;
            if (void 0 !== d)
              for (var o = document.getElementsByTagName("script"), i = 0; i < o.length; i++) {
                var l = o[i];
                if (l.getAttribute("src") == e || l.getAttribute("data-webpack") == t + d) {
                  f = l;
                  break
                }
              }
            f || (b = !0, (f = document.createElement("script")).charset = "utf-8", n.nc && f.setAttribute("nonce", n.nc), f.setAttribute("data-webpack", t + d), f.src = e), r[e] = [a];
            var s = (a, d) => {
                f.onerror = f.onload = null, clearTimeout(u);
                var t = r[e];
                if (delete r[e], f.parentNode && f.parentNode.removeChild(f), t && t.forEach(e => e(d)), a) return a(d)
              },
              u = setTimeout(s.bind(null, void 0, {
                type: "timeout",
                target: f
              }), 12e4);
            f.onerror = s.bind(null, f.onerror), f.onload = s.bind(null, f.onload), b && document.head.appendChild(f)
          }
        }, n.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, n.nmd = e => (e.paths = [], e.children || (e.children = []), e), c = {}, f = {}, n.f.remotes = (e, a) => {
          n.o(c, e) && c[e].forEach(e => {
            var d = n.R;
            d || (d = []);
            var r = f[e];
            if (!(d.indexOf(r) >= 0)) {
              if (d.push(r), r.p) return a.push(r.p);
              var t = a => {
                  a || (a = new Error("Container missing")), "string" == typeof a.message && (a.message += '\nwhile loading "' + r[1] + '" from ' + r[2]), n.m[e] = () => {
                    throw a
                  }, r.p = 0
                },
                c = (e, d, c, f, b, o) => {
                  try {
                    var n = e(d, c);
                    if (!n || !n.then) return b(n, f, o);
                    var i = n.then(e => b(e, f), t);
                    if (!o) return i;
                    a.push(r.p = i)
                  } catch (e) {
                    t(e)
                  }
                },
                b = (e, a, t) => c(a.get, r[1], d, 0, o, t),
                o = a => {
                  r.p = 1, n.m[e] = e => {
                    e.exports = a()
                  }
                };
              c(n, r[2], 0, 0, (e, a, d) => e ? c(n.I, r[0], 0, e, b, d) : t(), 1)
            }
          })
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
              var c = n.S[d],
                f = "@rockstargames/modules-core-header",
                b = (e, a, d, r) => {
                  var t = c[e] = c[e] || {},
                    b = t[a];
                  (!b || !b.loaded && (!r != !b.eager ? r : f > b.from)) && (t[a] = {
                    get: d,
                    from: f,
                    eager: !!r
                  })
                },
                o = [];
              switch (d) {
                case "default":
                  b("@foundry-int/utils", "5.23.1", () => Promise.all([n.e(3004), n.e(2280), n.e(1556)]).then(() => () => n(2280))), b("@foundry/icons", "5.23.1", () => Promise.all([n.e(9629), n.e(1127), n.e(6745), n.e(6827)]).then(() => () => n(19629))), b("@radix-ui/react-accordion", "1.2.12", () => Promise.all([n.e(710), n.e(1127), n.e(8429), n.e(8863), n.e(229), n.e(1738), n.e(2295)]).then(() => () => n(90710))), b("@radix-ui/react-dialog", "1.1.15", () => Promise.all([n.e(3477), n.e(2551), n.e(1127), n.e(8429), n.e(8863), n.e(229), n.e(2422), n.e(8487), n.e(4676)]).then(() => () => n(22551))), b("@radix-ui/react-focus-scope", "1.1.7", () => Promise.all([n.e(1127), n.e(8429), n.e(8863), n.e(3505)]).then(() => () => n(35886))), b("@radix-ui/react-focus-scope", "1.1.7", () => Promise.all([n.e(1127), n.e(8429), n.e(8863), n.e(199)]).then(() => () => n(60199))), b("@radix-ui/react-focus-scope", "1.1.7", () => Promise.all([n.e(1127), n.e(8429), n.e(8863), n.e(6882)]).then(() => () => n(66882))), b("@radix-ui/react-focus-scope", "1.1.8", () => Promise.all([n.e(1127), n.e(8429), n.e(5824), n.e(7804)]).then(() => () => n(67804))), b("@radix-ui/react-id", "1.1.1", () => Promise.all([n.e(1127), n.e(6126)]).then(() => () => n(86126))), b("@radix-ui/react-navigation-menu", "1.2.14", () => Promise.all([n.e(3477), n.e(9511), n.e(1127), n.e(8429), n.e(8863), n.e(229), n.e(1738), n.e(4628), n.e(7533)]).then(() => () => n(69511))), b("@radix-ui/react-popover", "1.1.15", () => Promise.all([n.e(3477), n.e(7145), n.e(1127), n.e(8429), n.e(8863), n.e(229), n.e(2422), n.e(1076), n.e(395)]).then(() => () => n(2776))), b("@radix-ui/react-portal", "1.1.10", () => Promise.all([n.e(1127), n.e(8429), n.e(5824), n.e(7987)]).then(() => () => n(7987))), b("@radix-ui/react-portal", "1.1.9", () => Promise.all([n.e(1127), n.e(8429), n.e(8863), n.e(5515)]).then(() => () => n(65515))), b("@radix-ui/react-portal", "1.1.9", () => Promise.all([n.e(1127), n.e(8429), n.e(8863), n.e(7660)]).then(() => () => n(97660))), b("@radix-ui/react-portal", "1.1.9", () => Promise.all([n.e(1127), n.e(8429), n.e(8863), n.e(6892)]).then(() => () => n(34511))), b("@radix-ui/react-portal", "1.1.9", () => Promise.all([n.e(1127), n.e(8429), n.e(8863), n.e(5205)]).then(() => () => n(37586))), b("@radix-ui/react-portal", "1.1.9", () => Promise.all([n.e(1127), n.e(8429), n.e(8863), n.e(9821)]).then(() => () => n(2202))), b("@radix-ui/react-slot", "1.2.3", () => Promise.all([n.e(1127), n.e(8086)]).then(() => () => n(25705))), b("@radix-ui/react-slot", "1.2.3", () => Promise.all([n.e(1127), n.e(5498)]).then(() => () => n(13117))), b("@radix-ui/react-slot", "1.2.3", () => Promise.all([n.e(1127), n.e(5961)]).then(() => () => n(18342))), b("@radix-ui/react-slot", "1.2.3", () => Promise.all([n.e(1127), n.e(778)]).then(() => () => n(70778))), b("@radix-ui/react-slot", "1.2.3", () => Promise.all([n.e(1127), n.e(3025)]).then(() => () => n(63025))), b("@radix-ui/react-slot", "1.2.3", () => Promise.all([n.e(1127), n.e(7036)]).then(() => () => n(47036))), b("@radix-ui/react-slot", "1.2.4", () => Promise.all([n.e(1127), n.e(9447)]).then(() => () => n(39447))), b("@radix-ui/react-use-controllable-state", "1.2.2", () => Promise.all([n.e(1127), n.e(2865)]).then(() => () => n(22865))), b("@radix-ui/react-visually-hidden", "1.2.3", () => Promise.all([n.e(1127), n.e(8429), n.e(8863), n.e(1629)]).then(() => () => n(81629))), b("@radix-ui/react-visually-hidden", "1.2.3", () => Promise.all([n.e(1127), n.e(8429), n.e(8863), n.e(9369)]).then(() => () => n(59369))), b("@radix-ui/react-visually-hidden", "1.2.3", () => Promise.all([n.e(1127), n.e(8429), n.e(8863), n.e(1254)]).then(() => () => n(81254))), b("@radix-ui/react-visually-hidden", "1.2.3", () => Promise.all([n.e(1127), n.e(8429), n.e(8863), n.e(1121)]).then(() => () => n(33502))), b("@radix-ui/react-visually-hidden", "1.2.4", () => Promise.all([n.e(1127), n.e(8429), n.e(5824), n.e(8989)]).then(() => () => n(48989))), b("@rsgweb/locale-tools", "0.0.0", () => Promise.all([n.e(3004), n.e(1795), n.e(1127), n.e(1837)]).then(() => () => n(12841))), b("@rsgweb/rockstar-account", "0.0.0", () => Promise.all([n.e(837), n.e(8068), n.e(1127), n.e(7301), n.e(2909), n.e(3331), n.e(8113)]).then(() => () => n(32169))), b("@rsgweb/utils", "0.0.0", () => Promise.all([n.e(3004), n.e(837), n.e(8454), n.e(1127), n.e(7301), n.e(2909), n.e(4069)]).then(() => () => n(60637))), b("clsx", "2.1.1", () => n.e(439).then(() => () => n(10439))), b("framer-motion", "12.38.0", () => Promise.all([n.e(7283), n.e(1127), n.e(9407)]).then(() => () => n(87283))), b("gsap", "3.12.5", () => n.e(9719).then(() => () => n(79719))), b("react-dom", "18.3.1", () => Promise.all([n.e(1098), n.e(1127)]).then(() => () => n(71098))), b("react-remove-scroll", "2.7.2", () => Promise.all([n.e(145), n.e(1127)]).then(() => () => n(80145))), b("react", "18.3.1", () => n.e(8431).then(() => () => n(48431))), b("spatial-navigation-polyfill", "1.3.1", () => n.e(7780).then(() => () => n(17780)));
                  break;
                case "header":
                  b("@foundry/react", "5.23.1", () => Promise.all([n.e(3477), n.e(9673), n.e(7145), n.e(5488), n.e(3214), n.e(1127), n.e(8429), n.e(8863), n.e(229), n.e(2422), n.e(5824), n.e(1738), n.e(6745), n.e(1556), n.e(8983), n.e(6052)]).then(() => () => n(5488)))
              }
              return e[d] = o.length ? Promise.all(o).then(() => e[d] = 1) : 1
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
              var a = e => e.split(".").map(e => +e == e ? +e : e),
                d = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
                r = d[1] ? a(d[1]) : [];
              return d[2] && (r.length++, r.push.apply(r, a(d[2]))), d[3] && (r.push([]), r.push.apply(r, a(d[3]))), r
            },
            a = (a, d) => {
              a = e(a), d = e(d);
              for (var r = 0;;) {
                if (r >= a.length) return r < d.length && "u" != (typeof d[r])[0];
                var t = a[r],
                  c = (typeof t)[0];
                if (r >= d.length) return "u" == c;
                var f = d[r],
                  b = (typeof f)[0];
                if (c != b) return "o" == c && "n" == b || "s" == b || "u" == c;
                if ("o" != c && "u" != c && t != f) return t < f;
                r++
              }
            },
            d = e => {
              var a = e[0],
                r = "";
              if (1 === e.length) return "*";
              if (a + .5) {
                r += 0 == a ? ">=" : -1 == a ? "<" : 1 == a ? "^" : 2 == a ? "~" : a > 0 ? "=" : "!=";
                for (var t = 1, c = 1; c < e.length; c++) t--, r += "u" == (typeof(b = e[c]))[0] ? "-" : (t > 0 ? "." : "") + (t = 2, b);
                return r
              }
              var f = [];
              for (c = 1; c < e.length; c++) {
                var b = e[c];
                f.push(0 === b ? "not(" + o() + ")" : 1 === b ? "(" + o() + " || " + o() + ")" : 2 === b ? f.pop() + " " + f.pop() : d(b))
              }
              return o();

              function o() {
                return f.pop().replace(/^\((.+)\)$/, "$1")
              }
            },
            r = (a, d) => {
              if (0 in a) {
                d = e(d);
                var t = a[0],
                  c = t < 0;
                c && (t = -t - 1);
                for (var f = 0, b = 1, o = !0;; b++, f++) {
                  var n, i, l = b < a.length ? (typeof a[b])[0] : "";
                  if (f >= d.length || "o" == (i = (typeof(n = d[f]))[0])) return !o || ("u" == l ? b > t && !c : "" == l != c);
                  if ("u" == i) {
                    if (!o || "u" != l) return !1
                  } else if (o)
                    if (l == i)
                      if (b <= t) {
                        if (n != a[b]) return !1
                      } else {
                        if (c ? n > a[b] : n < a[b]) return !1;
                        n != a[b] && (o = !1)
                      }
                  else if ("s" != l && "n" != l) {
                    if (c || b <= t) return !1;
                    o = !1, b--
                  } else {
                    if (b <= t || i < l != c) return !1;
                    o = !1
                  } else "s" != l && "n" != l && (o = !1, b--)
                }
              }
              var s = [],
                u = s.pop.bind(s);
              for (f = 1; f < a.length; f++) {
                var h = a[f];
                s.push(1 == h ? u() | u() : 2 == h ? u() & u() : h ? r(h, d) : !u())
              }
              return !!u()
            },
            t = (e, a) => e && n.o(e, a),
            c = e => (e.loaded = 1, e.get()),
            f = e => Object.keys(e).reduce((a, d) => (e[d].eager && (a[d] = e[d]), a), {}),
            b = e => {
              throw new Error(e)
            },
            o = e => function(a, d, r, t, c) {
              var f = n.I(a);
              return f && f.then && !r ? f.then(e.bind(e, a, n.S[a], d, !1, t, c)) : e(a, n.S[a], d, r, t, c)
            },
            i = (e, a, d) => d ? d() : ((e, a) => b("Shared module " + a + " doesn't exist in shared scope " + e))(e, a),
            l = o((e, o, n, l, s, u) => {
              if (!t(o, n)) return i(e, n, u);
              var h = ((e, d, t, c) => {
                var b = c ? f(e[d]) : e[d];
                return (d = Object.keys(b).reduce((e, d) => !r(t, d) || e && !a(e, d) ? e : d, 0)) && b[d]
              })(o, n, s, l);
              return h ? c(h) : u ? u() : void b(((e, a, r, t, c) => {
                var f = e[r];
                return "No satisfying version (" + d(t) + ")" + (c ? " for eager consumption" : "") + " of shared module " + r + " found in shared scope " + a + ".\nAvailable versions: " + Object.keys(f).map(e => e + " from " + f[e].from).join(", ")
              })(o, e, n, s, l))
            }),
            s = o((e, b, o, n, l, s) => {
              if (!t(b, o)) return i(e, o, s);
              var u, h = ((e, d, r) => {
                var t = r ? f(e[d]) : e[d];
                return Object.keys(t).reduce((e, d) => !e || !t[e].loaded && a(e, d) ? d : e, 0)
              })(b, o, n);
              return r(l, h) || (u = ((e, a, r, t) => "Unsatisfied version " + r + " from " + (r && e[a][r].from) + " of shared singleton module " + a + " (required " + d(t) + ")")(b, o, h, l), "undefined" != typeof console && console.warn && console.warn(u)), c(b[o][h])
            }),
            u = {},
            h = {
              71127: () => s("default", "react", !1, [1, 18, 2, 0], () => n.e(8431).then(() => () => n(48431))),
              18429: () => s("default", "react-dom", !1, [1, 18, 2, 0], () => n.e(1098).then(() => () => n(71098))),
              10250: () => s("default", "@radix-ui/react-id", !1, [1, 1, 1, 0], () => n.e(3745).then(() => () => n(86126))),
              66190: () => s("default", "@radix-ui/react-use-controllable-state", !1, [1, 1, 1, 0], () => n.e(5246).then(() => () => n(22865))),
              45824: () => s("default", "@radix-ui/react-slot", !1, [1, 1, 1, 0], () => n.e(1828).then(() => () => n(39447))),
              78806: () => s("default", "@foundry-int/utils", !1, [4, 5, 23, 1], () => Promise.all([n.e(3004), n.e(2280), n.e(1556)]).then(() => () => n(2280))),
              89630: () => s("default", "@radix-ui/react-visually-hidden", !1, [1, 1, 1, 2], () => Promise.all([n.e(8429), n.e(5824), n.e(1370)]).then(() => () => n(48989))),
              1556: () => s("default", "clsx", !1, [1, 2, 1, 1], () => n.e(439).then(() => () => n(10439))),
              42909: () => s("default", "@rsgweb/locale-tools", !1, [0], () => Promise.all([n.e(3004), n.e(1795), n.e(4218)]).then(() => () => n(12841))),
              42512: () => s("default", "@radix-ui/react-popover", !1, [1, 1, 1, 4], () => Promise.all([n.e(3477), n.e(7145), n.e(8863), n.e(2422), n.e(1076), n.e(2776)]).then(() => () => n(2776))),
              46514: () => s("default", "@radix-ui/react-dialog", !1, [1, 1, 1, 6], () => Promise.all([n.e(3477), n.e(2551), n.e(8863), n.e(2422), n.e(8487)]).then(() => () => n(22551))),
              67774: () => s("default", "@foundry/icons", !1, [4, 5, 23, 1], () => Promise.all([n.e(9629), n.e(1913)]).then(() => () => n(19629))),
              13331: () => s("default", "@rsgweb/utils", !1, [0], () => Promise.all([n.e(3004), n.e(837), n.e(8454), n.e(7301), n.e(637)]).then(() => () => n(60637))),
              4683: () => s("default", "@radix-ui/react-portal", !1, [1, 1, 1, 4], () => n.e(368).then(() => () => n(7987))),
              4878: () => l("header", "@foundry/react", !1, [4, 5, 23, 1], () => Promise.all([n.e(3477), n.e(9673), n.e(7145), n.e(5488), n.e(8863), n.e(2422), n.e(1738), n.e(8983)]).then(() => () => n(5488))),
              6329: () => s("default", "@radix-ui/react-focus-scope", !1, [1, 1, 1, 7], () => n.e(5423).then(() => () => n(67804))),
              48586: () => s("default", "framer-motion", !1, [1, 12, 34, 5], () => n.e(7283).then(() => () => n(87283))),
              56047: () => s("default", "@radix-ui/react-accordion", !1, [1, 1, 2, 2], () => Promise.all([n.e(710), n.e(8863), n.e(1738)]).then(() => () => n(90710))),
              73444: () => s("default", "@radix-ui/react-navigation-menu", !1, [1, 1, 2, 14], () => Promise.all([n.e(3477), n.e(9511), n.e(8863), n.e(1738), n.e(4628)]).then(() => () => n(69511))),
              77650: () => s("default", "spatial-navigation-polyfill", !1, [1, 1, 3, 1], () => n.e(7780).then(() => () => n(17780))),
              82199: () => s("default", "@rsgweb/rockstar-account", !1, [0], () => Promise.all([n.e(837), n.e(8068), n.e(7301), n.e(2169)]).then(() => () => n(32169))),
              38863: () => s("default", "@radix-ui/react-slot", !1, [1, 1, 1, 0], () => n.e(8397).then(() => () => n(70778))),
              91738: () => s("default", "@radix-ui/react-slot", !1, [1, 1, 1, 0], () => n.e(5705).then(() => () => n(25705))),
              82422: () => s("default", "react-remove-scroll", !1, [1, 2, 5, 7], () => n.e(145).then(() => () => n(80145))),
              12878: () => s("default", "@radix-ui/react-slot", !1, [1, 1, 1, 0], () => n.e(3117).then(() => () => n(13117))),
              23111: () => s("default", "@radix-ui/react-focus-scope", !1, [1, 1, 1, 7], () => n.e(5886).then(() => () => n(35886))),
              84594: () => s("default", "@radix-ui/react-portal", !1, [1, 1, 1, 4], () => n.e(7896).then(() => () => n(65515))),
              44628: () => s("default", "@radix-ui/react-visually-hidden", !1, [1, 1, 1, 2], () => n.e(4010).then(() => () => n(81629))),
              30267: () => s("default", "@radix-ui/react-portal", !1, [1, 1, 1, 4], () => n.e(5279).then(() => () => n(97660))),
              80996: () => s("default", "@radix-ui/react-focus-scope", !1, [1, 1, 1, 7], () => n.e(2580).then(() => () => n(60199))),
              88419: () => s("default", "@radix-ui/react-slot", !1, [1, 1, 1, 0], () => n.e(8342).then(() => () => n(18342))),
              3425: () => s("default", "@radix-ui/react-visually-hidden", !1, [1, 1, 1, 2], () => n.e(3502).then(() => () => n(33502))),
              18692: () => s("default", "@radix-ui/react-visually-hidden", !1, [1, 1, 1, 2], () => n.e(1750).then(() => () => n(59369))),
              31142: () => s("default", "gsap", !1, [0], () => n.e(9719).then(() => () => n(79719))),
              46169: () => s("default", "@radix-ui/react-portal", !1, [1, 1, 1, 4], () => n.e(2202).then(() => () => n(2202))),
              49715: () => s("default", "@radix-ui/react-focus-scope", !1, [1, 1, 1, 7], () => n.e(4501).then(() => () => n(66882))),
              50281: () => s("default", "@radix-ui/react-portal", !1, [1, 1, 1, 4], () => n.e(7586).then(() => () => n(37586))),
              72753: () => s("default", "@radix-ui/react-visually-hidden", !1, [1, 1, 1, 2], () => n.e(8873).then(() => () => n(81254))),
              83674: () => s("default", "@radix-ui/react-slot", !1, [1, 1, 1, 0], () => n.e(5406).then(() => () => n(63025))),
              90273: () => s("default", "@radix-ui/react-slot", !1, [1, 1, 1, 0], () => n.e(4655).then(() => () => n(47036))),
              92302: () => s("default", "@radix-ui/react-portal", !1, [1, 1, 1, 4], () => n.e(4511).then(() => () => n(34511)))
            },
            p = {
              229: [10250, 66190],
              1076: [30267, 80996, 88419],
              1127: [71127],
              1556: [1556],
              1738: [91738],
              2422: [82422],
              2909: [42909],
              3331: [13331],
              4628: [44628],
              5824: [45824],
              6052: [42512, 46514, 67774],
              6745: [78806, 89630],
              6752: [4683, 4878, 6329, 48586, 56047, 73444, 77650, 82199],
              8429: [18429],
              8487: [12878, 23111, 84594],
              8863: [38863],
              8983: [3425, 18692, 31142, 46169, 49715, 50281, 72753, 83674, 90273, 92302]
            },
            m = {};
          n.f.consumes = (e, a) => {
            n.o(p, e) && p[e].forEach(e => {
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
            })
          }
        })(), (() => {
          if ("undefined" != typeof document) {
            var e = {
              4295: 0
            };
            n.f.miniCss = (a, d) => {
              e[a] ? d.push(e[a]) : 0 !== e[a] && {
                1913: 1,
                3214: 1,
                5488: 1,
                6282: 1,
                6752: 1,
                6827: 1
              } [a] && d.push(e[a] = (e => new Promise((a, d) => {
                var r = n.miniCssF(e),
                  t = n.p + r;
                if (((e, a) => {
                    for (var d = document.getElementsByTagName("link"), r = 0; r < d.length; r++) {
                      var t = (f = d[r]).getAttribute("data-href") || f.getAttribute("href");
                      if ("stylesheet" === f.rel && (t === e || t === a)) return f
                    }
                    var c = document.getElementsByTagName("style");
                    for (r = 0; r < c.length; r++) {
                      var f;
                      if ((t = (f = c[r]).getAttribute("data-href")) === e || t === a) return f
                    }
                  })(r, t)) return a();
                ((e, a, d, r, t) => {
                  var c = document.createElement("link");
                  c.rel = "stylesheet", c.type = "text/css", n.nc && (c.nonce = n.nc), c.onerror = c.onload = d => {
                    if (c.onerror = c.onload = null, "load" === d.type) r();
                    else {
                      var f = d && d.type,
                        b = d && d.target && d.target.href || a,
                        o = new Error("Loading CSS chunk " + e + " failed.\n(" + f + ": " + b + ")");
                      o.name = "ChunkLoadError", o.code = "CSS_CHUNK_LOAD_FAILED", o.type = f, o.request = b, c.parentNode && c.parentNode.removeChild(c), t(o)
                    }
                  }, c.href = a, document.head.appendChild(c)
                })(e, t, 0, a, d)
              }))(a).then(() => {
                e[a] = 0
              }, d => {
                throw delete e[a], d
              }))
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
              else if (/^(1(076|127|556|738|913)|2(29|422|909)|8(429|487|863|983)|3331|4628|5824|6052|6745)$/.test(a)) e[a] = 0;
            else {
              var t = new Promise((d, t) => r = e[a] = [d, t]);
              d.push(r[2] = t);
              var c = n.p + n.u(a),
                f = new Error;
              n.l(c, d => {
                if (n.o(e, a) && (0 !== (r = e[a]) && (e[a] = void 0), r)) {
                  var t = d && ("load" === d.type ? "missing" : d.type),
                    c = d && d.target && d.target.src;
                  f.message = "Loading chunk " + a + " failed.\n(" + t + ": " + c + ")", f.name = "ChunkLoadError", f.type = t, f.request = c, r[1](f)
                }
              }, "chunk-" + a, a)
            }
          };
          var a = (a, d) => {
              var r, t, [c, f, b] = d,
                o = 0;
              if (c.some(a => 0 !== e[a])) {
                for (r in f) n.o(f, r) && (n.m[r] = f[r]);
                b && b(n)
              }
              for (a && a(d); o < c.length; o++) t = c[o], n.o(e, t) && e[t] && e[t][0](), e[t] = 0
            },
            d = self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || [];
          d.forEach(a.bind(null, 0)), d.push = a.bind(null, d.push.bind(d))
        })(), n.nc = void 0, n(93032), n(72892)
      })())
    }
  }
});