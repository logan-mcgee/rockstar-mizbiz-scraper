try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "0fb32676-e88c-470a-ae4d-def89f002db5", e._sentryDebugIdIdentifier = "sentry-dbid-0fb32676-e88c-470a-ae4d-def89f002db5")
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
        var e, d, r, t, c, f, o = {
            17411: (e, a, d) => {
              const r = d(77027).y;
              a.w = function(e) {
                if (e || (e = 1), !d.y.meta || !d.y.meta.url) throw console.error("__system_context__", d.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                d.p = r(d.y.meta.url, e)
              }
            },
            28419: (e, a, d) => {
              (0, d(17411).w)(1)
            },
            72892: (e, a, d) => {
              "use strict";
              var r = {
                  "./core": () => Promise.all([d.e(3004), d.e(8379), d.e(6683), d.e(1127), d.e(8429), d.e(5824), d.e(229), d.e(4112), d.e(1556), d.e(6990), d.e(9630), d.e(4473), d.e(8531), d.e(5035), d.e(8136), d.e(3187)]).then(() => () => d(56655))
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
            },
            77027: (e, a, d) => {
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
            93032: (e, a, d) => {
              d(28419)
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
          var c = {};
          e = e || [null, d({}), d([]), d(d)];
          for (var f = 2 & r && a;
            ("object" == typeof f || "function" == typeof f) && !~e.indexOf(f); f = d(f)) Object.getOwnPropertyNames(f).forEach(e => c[e] = () => a[e]);
          return c.default = () => a, b.d(t, c), t
        }, b.d = (e, a) => {
          for (var d in a) b.o(a, d) && !b.o(e, d) && Object.defineProperty(e, d, {
            enumerable: !0,
            get: a[d]
          })
        }, b.f = {}, b.e = e => Promise.all(Object.keys(b.f).reduce((a, d) => (b.f[d](e, a), a), [])), b.u = e => "js/" + {
          61: "2a3bace4858c884e077be8756cca08f3",
          68: "aac33348aa6d5b4b353f4df6b1950a0a",
          131: "89212dc499e7bf9c4482e6872d571d86",
          145: "94fbd89ee38be2a105b1dc675dc9803a",
          173: "d09047e4fc0c4d7c9281ed15b4bcd573",
          278: "5d8cdca888716c44896e3de0f908cfd0",
          299: "d1abc69a0da8d2c0e7443128cc3c9808",
          314: "3ecbf7cfd47c69d5fc4c11a89db53b90",
          395: "15c896853ab7ef8521e89a431eb6d168",
          439: "6e98feabf0fc6f16cbe8b0c1e82ff669",
          540: "7f7651f445bd5163f4b7b730e6e9c8a6",
          662: "7ec8ae128c547de93620da534b1cd8db",
          710: "a5cd43f51840c5961e56b23509da9156",
          824: "0b36610097e589692059e51d9a7958aa",
          837: "bd5040e2f6549b75d6797fc18a51003d",
          852: "5d4f7081859f058c16ec932446fb239d",
          887: "8e83775787f65180cd6f72657728d6e8",
          907: "f3f2d38da8773595ee62886093951e10",
          1054: "e564816beb6641ee5c20042d7f023461",
          1064: "cffd8932ef4570d848ecaf4a58b3aa50",
          1098: "13d3d2ff272566bdf86664074bdff0c8",
          1101: "bee6d6f179da741ff90e922fed175f76",
          1242: "93c72ef861dd5c6d7e9adf142d942677",
          1436: "3006238e1f540274eefda78bd25c10dc",
          1758: "d5fb2ce87b05b548a05ab5e1edb21897",
          1822: "6a2c0cd077abfb04cafceaad791659ce",
          1828: "4eb7bd4a71b0ab017f50d83cf748e687",
          1868: "bbddd6b240c909b789ace2c3c73a23a6",
          2156: "caf221317d04347357ce8f49d8eb21b9",
          2169: "9dfcee1d69572e006344e0845462192f",
          2171: "877c71c37d802f2e85cb186d51131f9d",
          2221: "5c445f3deda748435f88c98f7b6e57e5",
          2234: "3ebb44b24a84ba8c4661950b96ad45df",
          2243: "738aea98679b5f6b56652522606272a0",
          2280: "4e1213067c396963354e5ad45ac8cf25",
          2295: "957917037439feecef4f142cf16620fa",
          2306: "a2f41f3527f120aa2057e09790cc0172",
          2319: "8f9bb5b7626fad357f730ec3042dec84",
          2347: "5c508cfdd6e6c6e94613d836ca86f86a",
          2365: "8f4fc6e6f0e6ba2c90deca8b0883f33b",
          2398: "ee241f1a6c2178e3364e0c8b4f388e0c",
          2442: "4394f0366560feeabd97f5e60f70b80b",
          2455: "02ada09a9d7fc395301e265b08418a6c",
          2466: "cfeeba3dfd4f3487a761eb1c93e4f2e3",
          2642: "0f523c86a31e99417dc89f6f99b74acf",
          2678: "9d817b306b1afb82e1a3af688620f640",
          2776: "4e6db4efc3810bcbd4d296126c633e51",
          2787: "ae2f4e372248e89ac1cf76a3ef4922bf",
          2853: "3a4c2e3c26673b02f964a7739a246c3d",
          2864: "111aad9ca1dd8ec3840da81ad3ecefe6",
          2865: "f1d42360893a898f631e0cbf16bca502",
          3004: "066aec580eddc93d4bbb7cfb24d42682",
          3034: "5d1c7c4cdece6e4f1a17863307dc2a22",
          3117: "5f1cbe3ea735bba057f9b2478ccee440",
          3187: "60ae5cf2b1582e9818773ff684236543",
          3197: "c90ab712c05eeb13a3741e6c8c02fc4a",
          3343: "f1ad55b7a54a6536ffc8d8e1df3951f4",
          3370: "d6de0e827d1efc7027a19b7dfcfe2d5b",
          3475: "ac7bc9c9c778add36c09ba6d744c5805",
          3486: "ffda6c53c5705c3dc3367a56ed574574",
          3505: "fe49394588cadd9cbb84d1d60e0cf01a",
          3571: "b8a0860f0cf36f3154e95590248ee9e1",
          3697: "214814a9070cce33574521515e3ff5de",
          3745: "7d1049c19d1169342b785893d5abe1f6",
          3885: "c280ca65a830eabe7f05ee3a60c07dcc",
          3896: "db3ce37e79cb89a7c4ea43cbd822d22b",
          3911: "426382fdcbf1c42d7ce488d7e3832ffe",
          3941: "5fd0d3f78a03e9510566ba6e95aad178",
          4011: "409a70bf236da3afb7767831e48f67e4",
          4057: "26f75001e752edab07489947c79a4f0d",
          4115: "770097909c4e0729cfb91c6dab4e91b1",
          4213: "384aafd632e1e8148b19201535b4f7ad",
          4528: "ce40e3513625814b91217dbbb639c899",
          4578: "1f50e4ea5e185a015f8d8430449bfc28",
          4621: "09282c75b706f3c11207229f7b45ef0b",
          4676: "71f04a8b3d7bd8e1409d2ee8266f1b77",
          4700: "a776c0dc3476adec2e2539670ab40bd5",
          4710: "122c6752720591e46dec3fe08915aa8d",
          4731: "9936956c314bcf0a8fdd3b9f98ad3c19",
          4799: "483af1445911cd962a121e34d785a5ac",
          4836: "12a01b1b1be60ad67025b5dd984158cc",
          4851: "e5dafd3cd52544770ddee5196d32f10f",
          4861: "9f3a76d45d1967515f11b7268da9c8e9",
          4913: "8996a4ecb41bdf2c8706b64455702c9d",
          5018: "523c0291049f5a1d01af02083228b124",
          5233: "d13fe54c32d3828a537fcc58c1010fac",
          5246: "bc15843e8292c81d8b7a07092fce45bf",
          5259: "a38ae2b6352b3399588373d613e6817a",
          5265: "6218617665101b5e2b1017e05e16412b",
          5288: "73ac0eeb59e7678de5a169affc2381fc",
          5415: "145835bbce200c80395603e5499b12bc",
          5498: "a64efe9e2f008bed3eb1c49fe0c8c5a4",
          5515: "f7be6b45e2ab5b310e0c31340f9a5460",
          5530: "bf71455318dce0b7e8eaedc6bd017bc4",
          5639: "4abe93c6f998f5a089ef6a3581cebf7d",
          5656: "e3c562e769729596a528b0b83e3879d5",
          5663: "f60249dd4c68b2b7080754bd9557f62d",
          5742: "b6e06c50d7560a39e96db57760a1f82d",
          5783: "17cfef884cc8c36ccae07dd9a4992e76",
          5830: "63a4ea83bb273c9be18085ca77660eec",
          5832: "ada864e26734206366e5f30c56d7a1ef",
          5886: "987157e454c1b6540c2a7886a0bfae4b",
          6088: "6af3fc177846a62299da310cd897f31f",
          6126: "53736341fdccb4d8659932e7a0cb42ac",
          6267: "537c51274cc4abb64d04070976b789d0",
          6280: "d1a726aa5d5379a82f1888671ce9f68b",
          6285: "03ca4e7c750c7c137d2d6d6b44f6b272",
          6292: "201f3edcdf5f9c32e2271fb9745d79e7",
          6361: "a72ed3a5ff74a8f263f1d83de10989c1",
          6471: "0e0f7a363e667adee0df9d651a837175",
          6491: "1b670d7938d7978a0f535dea5126ab60",
          6496: "67c46384c3a1631157f963ba32931c1f",
          6594: "327fad359c83e23ce4219cee8130f984",
          6664: "ad61a2d47bbdc829240e391e5167d3bb",
          6683: "5ad968aadc1ed5c91d686da574d11e65",
          6827: "c19ea819d1ae54513eee09f88ad226e4",
          6879: "2e4cd05c9f848d5867e9eb0b80c5373b",
          6891: "d7395bcd1ea35dfcf970ae07dc0378b2",
          6997: "9aac51b5649a51c984008896018c67c5",
          7010: "1773adb0c12ab00aef9d1626b0b6e6c9",
          7071: "c3bcc37bc95a1b6436dd32a36655f829",
          7073: "78542503a7818adb7cbba621b914eaba",
          7090: "372d359e935b91ae6d16f4d9d9afd782",
          7145: "daf73eb0e2b0cb4038dc003ae4b0713b",
          7407: "37ca86916242be3b0a23710d1fe7f1c1",
          7436: "1de3651fcbbba231c2e9fa6a0d6fb5f2",
          7452: "d5fa0d4c5b7dddbb8188f76186fe7041",
          7453: "7566ddd38dfb115a60693ac17a771aaa",
          7557: "e10a546628ad5f0015da7ac1b90e7fd4",
          7780: "1bd5fc9a3c519936c6a4cef8db035d0d",
          7896: "ce50d346f378194382a68742afe54cce",
          7970: "dc284a9640923115cf73cd0145ff5bb1",
          8068: "4676c6fd974723c0867d763d9171c19f",
          8113: "f4b71952711fa80579a7014f703e3ad4",
          8159: "0e66179d97a6535056111ef2694bfdb5",
          8272: "8e421ac340ea83e38b806e6d865f70a1",
          8325: "40406e81c700bd9f774386654b385fc1",
          8329: "c603c08d6950c611ff67d4b94e475d83",
          8379: "c7aac1e6a47c4b3549d9f95a210a6f50",
          8391: "b4dee86f5401978d4f87978173c5271f",
          8431: "005b017ba884f273a3ac291e650c7389",
          8471: "2c474ce046dabbcc52b7fc169d94fdbb",
          8683: "4cc9b2d075c3ba64dae4a7610b960aa7",
          8755: "7e7811619c71656e57d67ee1b6e2f3b4",
          8845: "f0ce26f086ac24637b8bd8298a58800e",
          8872: "dd2dbfc7dd7d28dcfb888a543d082129",
          8880: "8b64d683f0b9e122c9c2eca65cb61b43",
          8938: "2825dd6adbe687d46fcb1f73af767ff7",
          8970: "b82bd400515b08249d60dfdb1290ac8a",
          9022: "06a62fdec0ce3147e5615885fc41fbba",
          9028: "beb016bbf24b2708578a49e999c00eee",
          9055: "2d58c22b7e9583ca6bdabb7ceb4134ea",
          9126: "cb7916ac00cadc47e0e5dd1c1d534c05",
          9377: "9e3c381ce6119e8084a4a64cdced2a48",
          9407: "26245c597957576482ce728b9f3e81ea",
          9447: "ef4670ba7d79248997a1b261b404c3ec",
          9452: "8726c80cc2d09c6305105782a9670556",
          9487: "54746aab4c66aedca6f6bc87234a39fb",
          9511: "5c456427109db2c7f11af9a10bace14e",
          9615: "210e200dd634e038e4336ff4587b9ca2",
          9627: "1d37d6020623f3d1072b44d259a87c8e",
          9760: "03ccaa5d3d242112fcab4e00c7187bb4",
          9936: "a9b611650acd75b13f1d8e39fc549fb6",
          9990: "f2f0363528264e2a068a966c06691403"
        } [e] + ".js", b.miniCssF = e => "css/" + {
          1913: "ed8a18e4768c2cfb55476973c2d36ae0",
          3187: "60ad1bb61763a8c2c1661f17a7bb57ab",
          6683: "f6b1c81c82c805a425a29dfe01a117bb",
          6827: "ed8a18e4768c2cfb55476973c2d36ae0",
          8379: "9218e3284d43f5d85a99a051984a00f9",
          9487: "bdbc37d78d379403cbfaa33a63326ee8"
        } [e] + ".css", b.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), b.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), r = {}, t = "@rockstargames/modules-core-header:", b.l = (e, a, d, c) => {
          if (r[e]) r[e].push(a);
          else {
            var f, o;
            if (void 0 !== d)
              for (var n = document.getElementsByTagName("script"), i = 0; i < n.length; i++) {
                var l = n[i];
                if (l.getAttribute("src") == e || l.getAttribute("data-webpack") == t + d) {
                  f = l;
                  break
                }
              }
            f || (o = !0, (f = document.createElement("script")).charset = "utf-8", f.timeout = 120, b.nc && f.setAttribute("nonce", b.nc), f.setAttribute("data-webpack", t + d), f.src = e), r[e] = [a];
            var s = (a, d) => {
                f.onerror = f.onload = null, clearTimeout(u);
                var t = r[e];
                if (delete r[e], f.parentNode && f.parentNode.removeChild(f), t && t.forEach(e => e(d)), a) return a(d)
              },
              u = setTimeout(s.bind(null, void 0, {
                type: "timeout",
                target: f
              }), 12e4);
            f.onerror = s.bind(null, f.onerror), f.onload = s.bind(null, f.onload), o && document.head.appendChild(f)
          }
        }, b.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, b.nmd = e => (e.paths = [], e.children || (e.children = []), e), c = {}, f = {}, b.f.remotes = (e, a) => {
          b.o(c, e) && c[e].forEach(e => {
            var d = b.R;
            d || (d = []);
            var r = f[e];
            if (!(d.indexOf(r) >= 0)) {
              if (d.push(r), r.p) return a.push(r.p);
              var t = a => {
                  a || (a = new Error("Container missing")), "string" == typeof a.message && (a.message += '\nwhile loading "' + r[1] + '" from ' + r[2]), b.m[e] = () => {
                    throw a
                  }, r.p = 0
                },
                c = (e, d, c, f, o, n) => {
                  try {
                    var b = e(d, c);
                    if (!b || !b.then) return o(b, f, n);
                    var i = b.then(e => o(e, f), t);
                    if (!n) return i;
                    a.push(r.p = i)
                  } catch (e) {
                    t(e)
                  }
                },
                o = (e, a, t) => c(a.get, r[1], d, 0, n, t),
                n = a => {
                  r.p = 1, b.m[e] = e => {
                    e.exports = a()
                  }
                };
              c(b, r[2], 0, 0, (e, a, d) => e ? c(b.I, r[0], 0, e, o, d) : t(), 1)
            }
          })
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
              var c = b.S[d],
                f = "@rockstargames/modules-core-header",
                o = (e, a, d, r) => {
                  var t = c[e] = c[e] || {},
                    o = t[a];
                  (!o || !o.loaded && (!r != !o.eager ? r : f > o.from)) && (t[a] = {
                    get: d,
                    from: f,
                    eager: !!r
                  })
                },
                n = [];
              switch (d) {
                case "default":
                  o("@foundry-int/utils", "5.17.3", () => Promise.all([b.e(3004), b.e(2280), b.e(1556)]).then(() => () => b(2280))), o("@foundry/icons", "5.17.3", () => Promise.all([b.e(5783), b.e(1127), b.e(8531), b.e(8130), b.e(6827)]).then(() => () => b(95783))), o("@radix-ui/react-accordion", "1.2.12", () => Promise.all([b.e(1127), b.e(8429), b.e(5824), b.e(229), b.e(710)]).then(() => () => b(90710))), o("@radix-ui/react-dialog", "1.1.11", () => Promise.all([b.e(3571), b.e(1127), b.e(8429), b.e(229), b.e(2422), b.e(2878), b.e(8456), b.e(2295)]).then(() => () => b(53571))), o("@radix-ui/react-dialog", "1.1.15", () => Promise.all([b.e(887), b.e(1127), b.e(8429), b.e(5824), b.e(229), b.e(2422), b.e(4112), b.e(6491)]).then(() => () => b(96491))), o("@radix-ui/react-dialog", "1.1.15", () => Promise.all([b.e(887), b.e(1127), b.e(8429), b.e(5824), b.e(229), b.e(2422), b.e(4112), b.e(4213)]).then(() => () => b(6594))), o("@radix-ui/react-focus-scope", "1.1.4", () => Promise.all([b.e(1127), b.e(8429), b.e(2878), b.e(5886)]).then(() => () => b(35886))), o("@radix-ui/react-focus-scope", "1.1.7", () => Promise.all([b.e(1127), b.e(8429), b.e(5824), b.e(5656)]).then(() => () => b(25656))), o("@radix-ui/react-id", "1.1.1", () => Promise.all([b.e(1127), b.e(6126)]).then(() => () => b(86126))), o("@radix-ui/react-navigation-menu", "1.2.14", () => Promise.all([b.e(887), b.e(9511), b.e(1127), b.e(8429), b.e(5824), b.e(229), b.e(9630), b.e(4676)]).then(() => () => b(69511))), o("@radix-ui/react-popover", "1.1.15", () => Promise.all([b.e(887), b.e(7145), b.e(1127), b.e(8429), b.e(5824), b.e(229), b.e(2422), b.e(4112), b.e(395)]).then(() => () => b(2776))), o("@radix-ui/react-portal", "1.1.6", () => Promise.all([b.e(1127), b.e(8429), b.e(2878), b.e(5515)]).then(() => () => b(65515))), o("@radix-ui/react-portal", "1.1.9", () => Promise.all([b.e(1127), b.e(8429), b.e(5824), b.e(61)]).then(() => () => b(80061))), o("@radix-ui/react-slot", "1.2.0", () => Promise.all([b.e(1127), b.e(3117)]).then(() => () => b(13117))), o("@radix-ui/react-slot", "1.2.3", () => Promise.all([b.e(1127), b.e(9447)]).then(() => () => b(39447))), o("@radix-ui/react-slot", "1.2.4", () => Promise.all([b.e(1127), b.e(9452)]).then(() => () => b(39452))), o("@radix-ui/react-slot", "1.2.4", () => Promise.all([b.e(1127), b.e(8683)]).then(() => () => b(28683))), o("@radix-ui/react-slot", "1.2.4", () => Promise.all([b.e(1127), b.e(4836)]).then(() => () => b(24836))), o("@radix-ui/react-slot", "1.2.4", () => Promise.all([b.e(1127), b.e(852)]).then(() => () => b(90852))), o("@radix-ui/react-use-controllable-state", "1.2.2", () => Promise.all([b.e(1127), b.e(2865)]).then(() => () => b(22865))), o("@radix-ui/react-visually-hidden", "1.2.3", () => Promise.all([b.e(1127), b.e(8429), b.e(5824), b.e(9055)]).then(() => () => b(69055))), o("@radix-ui/react-visually-hidden", "1.2.4", () => Promise.all([b.e(1127), b.e(8429), b.e(4473), b.e(6292)]).then(() => () => b(76292))), o("@radix-ui/react-visually-hidden", "1.2.4", () => Promise.all([b.e(1127), b.e(8429), b.e(7428), b.e(4115)]).then(() => () => b(94115))), o("@radix-ui/react-visually-hidden", "1.2.4", () => Promise.all([b.e(1127), b.e(8429), b.e(4537), b.e(540)]).then(() => () => b(80540))), o("@rsgweb/locale-tools", "0.0.0", () => Promise.all([b.e(3004), b.e(2787), b.e(1127), b.e(2319)]).then(() => () => b(2319))), o("@rsgweb/rockstar-account", "0.0.0", () => Promise.all([b.e(837), b.e(8068), b.e(1127), b.e(6088), b.e(8136), b.e(8113)]).then(() => () => b(32169))), o("@rsgweb/utils", "0.0.0", () => Promise.all([b.e(3004), b.e(837), b.e(4057), b.e(1127), b.e(6088), b.e(6990), b.e(1101)]).then(() => () => b(42853))), o("clsx", "2.1.1", () => b.e(439).then(() => () => b(10439))), o("framer-motion", "12.35.0", () => Promise.all([b.e(5288), b.e(1127), b.e(9407)]).then(() => () => b(45288))), o("gsap", "3.14.2", () => b.e(7090).then(() => () => b(87090))), o("react-dom", "18.3.1", () => Promise.all([b.e(1098), b.e(1127)]).then(() => () => b(71098))), o("react-remove-scroll", "2.7.1", () => Promise.all([b.e(145), b.e(1127)]).then(() => () => b(80145))), o("react", "18.3.1", () => b.e(8431).then(() => () => b(48431))), o("spatial-navigation-polyfill", "1.3.1", () => b.e(7780).then(() => () => b(17780)));
                  break;
                case "header":
                  o("@foundry/react", "5.17.3", () => Promise.all([b.e(887), b.e(2787), b.e(7145), b.e(9487), b.e(8379), b.e(1127), b.e(8429), b.e(5824), b.e(229), b.e(2422), b.e(4112), b.e(1556), b.e(9630), b.e(4473), b.e(8531), b.e(1724), b.e(5035)]).then(() => () => b(49487)))
              }
              return e[d] = n.length ? Promise.all(n).then(() => e[d] = 1) : 1
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
                  o = (typeof f)[0];
                if (c != o) return "o" == c && "n" == o || "s" == o || "u" == c;
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
                for (var t = 1, c = 1; c < e.length; c++) t--, r += "u" == (typeof(o = e[c]))[0] ? "-" : (t > 0 ? "." : "") + (t = 2, o);
                return r
              }
              var f = [];
              for (c = 1; c < e.length; c++) {
                var o = e[c];
                f.push(0 === o ? "not(" + n() + ")" : 1 === o ? "(" + n() + " || " + n() + ")" : 2 === o ? f.pop() + " " + f.pop() : d(o))
              }
              return n();

              function n() {
                return f.pop().replace(/^\((.+)\)$/, "$1")
              }
            },
            r = (a, d) => {
              if (0 in a) {
                d = e(d);
                var t = a[0],
                  c = t < 0;
                c && (t = -t - 1);
                for (var f = 0, o = 1, n = !0;; o++, f++) {
                  var b, i, l = o < a.length ? (typeof a[o])[0] : "";
                  if (f >= d.length || "o" == (i = (typeof(b = d[f]))[0])) return !n || ("u" == l ? o > t && !c : "" == l != c);
                  if ("u" == i) {
                    if (!n || "u" != l) return !1
                  } else if (n)
                    if (l == i)
                      if (o <= t) {
                        if (b != a[o]) return !1
                      } else {
                        if (c ? b > a[o] : b < a[o]) return !1;
                        b != a[o] && (n = !1)
                      }
                  else if ("s" != l && "n" != l) {
                    if (c || o <= t) return !1;
                    n = !1, o--
                  } else {
                    if (o <= t || i < l != c) return !1;
                    n = !1
                  } else "s" != l && "n" != l && (n = !1, o--)
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
            t = (e, a) => e && b.o(e, a),
            c = e => (e.loaded = 1, e.get()),
            f = e => Object.keys(e).reduce((a, d) => (e[d].eager && (a[d] = e[d]), a), {}),
            o = e => {
              throw new Error(e)
            },
            n = e => function(a, d, r, t, c) {
              var f = b.I(a);
              return f && f.then && !r ? f.then(e.bind(e, a, b.S[a], d, !1, t, c)) : e(a, b.S[a], d, r, t, c)
            },
            i = (e, a, d) => d ? d() : ((e, a) => o("Shared module " + a + " doesn't exist in shared scope " + e))(e, a),
            l = n((e, n, b, l, s, u) => {
              if (!t(n, b)) return i(e, b, u);
              var h = ((e, d, t, c) => {
                var o = c ? f(e[d]) : e[d];
                return (d = Object.keys(o).reduce((e, d) => !r(t, d) || e && !a(e, d) ? e : d, 0)) && o[d]
              })(n, b, s, l);
              return h ? c(h) : u ? u() : void o(((e, a, r, t, c) => {
                var f = e[r];
                return "No satisfying version (" + d(t) + ")" + (c ? " for eager consumption" : "") + " of shared module " + r + " found in shared scope " + a + ".\nAvailable versions: " + Object.keys(f).map(e => e + " from " + f[e].from).join(", ")
              })(n, e, b, s, l))
            }),
            s = n((e, o, n, b, l, s) => {
              if (!t(o, n)) return i(e, n, s);
              var u, h = ((e, d, r) => {
                var t = r ? f(e[d]) : e[d];
                return Object.keys(t).reduce((e, d) => !e || !t[e].loaded && a(e, d) ? d : e, 0)
              })(o, n, b);
              return r(l, h) || (u = ((e, a, r, t) => "Unsatisfied version " + r + " from " + (r && e[a][r].from) + " of shared singleton module " + a + " (required " + d(t) + ")")(o, n, h, l), "undefined" != typeof console && console.warn && console.warn(u)), c(o[n][h])
            }),
            u = {},
            h = {
              71127: () => s("default", "react", !1, [1, 18, 2, 0], () => b.e(8431).then(() => () => b(48431))),
              18429: () => s("default", "react-dom", !1, [1, 18, 2, 0], () => b.e(1098).then(() => () => b(71098))),
              45824: () => s("default", "@radix-ui/react-slot", !1, [1, 1, 1, 0], () => b.e(1828).then(() => () => b(39447))),
              10250: () => s("default", "@radix-ui/react-id", !1, [1, 1, 1, 0], () => b.e(3745).then(() => () => b(86126))),
              66190: () => s("default", "@radix-ui/react-use-controllable-state", !1, [1, 1, 1, 0], () => b.e(5246).then(() => () => b(22865))),
              4683: () => s("default", "@radix-ui/react-portal", !1, [1, 1, 1, 4], () => b.e(2442).then(() => () => b(80061))),
              6329: () => s("default", "@radix-ui/react-focus-scope", !1, [1, 1, 1, 7], () => b.e(9627).then(() => () => b(25656))),
              1556: () => s("default", "clsx", !1, [1, 2, 1, 1], () => b.e(439).then(() => () => b(10439))),
              56990: () => s("default", "@rsgweb/locale-tools", !1, [4, 0, 0, 0], () => Promise.all([b.e(2787), b.e(7557)]).then(() => () => b(2319))),
              89630: () => s("default", "@radix-ui/react-visually-hidden", !1, [1, 1, 1, 2], () => b.e(1436).then(() => () => b(69055))),
              44473: () => s("default", "@radix-ui/react-slot", !1, [1, 1, 1, 0], () => b.e(7071).then(() => () => b(39452))),
              58531: () => s("default", "@foundry-int/utils", !1, [2, 5, 17], () => Promise.all([b.e(3004), b.e(2280), b.e(1556)]).then(() => () => b(2280))),
              75881: () => s("default", "@radix-ui/react-visually-hidden", !1, [1, 1, 1, 2], () => b.e(3911).then(() => () => b(76292))),
              84531: () => s("default", "@foundry/icons", !1, [2, 5, 17], () => Promise.all([b.e(5783), b.e(8130), b.e(1913)]).then(() => () => b(95783))),
              58136: () => s("default", "@rsgweb/utils", !1, [4, 0, 0, 0], () => Promise.all([b.e(3004), b.e(837), b.e(4057), b.e(6088), b.e(6990), b.e(2853)]).then(() => () => b(42853))),
              2538: () => s("default", "@radix-ui/react-navigation-menu", !1, [1, 1, 2, 1], () => Promise.all([b.e(887), b.e(9511)]).then(() => () => b(69511))),
              42512: () => s("default", "@radix-ui/react-popover", !1, [1, 1, 1, 4], () => Promise.all([b.e(887), b.e(7145), b.e(2422), b.e(2776)]).then(() => () => b(2776))),
              46514: () => s("default", "@radix-ui/react-dialog", !1, [1, 1, 1, 6], () => Promise.all([b.e(3571), b.e(2422), b.e(2878), b.e(8456)]).then(() => () => b(53571))),
              48586: () => s("default", "framer-motion", !1, [1, 12, 34, 5], () => b.e(5288).then(() => () => b(45288))),
              56047: () => s("default", "@radix-ui/react-accordion", !1, [1, 1, 2, 2], () => b.e(8329).then(() => () => b(90710))),
              61874: () => s("default", "@rsgweb/rockstar-account", !1, [4, 0, 0, 0], () => Promise.all([b.e(837), b.e(8068), b.e(6088), b.e(2169)]).then(() => () => b(32169))),
              64255: () => l("header", "@foundry/react", !1, [2, 5, 17], () => Promise.all([b.e(887), b.e(2787), b.e(7145), b.e(9487), b.e(2422), b.e(1724)]).then(() => () => b(49487))),
              77650: () => s("default", "spatial-navigation-polyfill", !1, [1, 1, 3, 1], () => b.e(7780).then(() => () => b(17780))),
              28130: () => s("default", "@radix-ui/react-visually-hidden", !1, [1, 1, 1, 2], () => Promise.all([b.e(8429), b.e(7428), b.e(6496)]).then(() => () => b(94115))),
              82422: () => s("default", "react-remove-scroll", !1, [1, 2, 5, 7], () => b.e(145).then(() => () => b(80145))),
              12878: () => s("default", "@radix-ui/react-slot", !1, [1, 1, 1, 0], () => b.e(5498).then(() => () => b(13117))),
              23111: () => s("default", "@radix-ui/react-focus-scope", !1, [1, 1, 1, 7], () => b.e(3505).then(() => () => b(35886))),
              84594: () => s("default", "@radix-ui/react-portal", !1, [1, 1, 1, 4], () => b.e(7896).then(() => () => b(65515))),
              47428: () => s("default", "@radix-ui/react-slot", !1, [1, 1, 1, 0], () => b.e(1064).then(() => () => b(28683))),
              44537: () => s("default", "@radix-ui/react-slot", !1, [1, 1, 1, 0], () => b.e(2455).then(() => () => b(24836))),
              7911: () => s("default", "gsap", !1, [4, "latest", , "licensed"], () => b.e(7090).then(() => () => b(87090))),
              9145: () => s("default", "@radix-ui/react-dialog", !1, [1, 1, 1, 6], () => b.e(6594).then(() => () => b(6594))),
              15034: () => s("default", "@radix-ui/react-dialog", !1, [1, 1, 1, 6], () => b.e(8872).then(() => () => b(96491))),
              43529: () => s("default", "@radix-ui/react-visually-hidden", !1, [1, 1, 1, 2], () => Promise.all([b.e(4537), b.e(8159)]).then(() => () => b(80540))),
              80649: () => s("default", "@radix-ui/react-slot", !1, [1, 1, 1, 0], () => b.e(8471).then(() => () => b(90852)))
            },
            p = {
              229: [10250, 66190],
              1127: [71127],
              1556: [1556],
              1724: [7911, 9145, 15034, 43529, 80649],
              2422: [82422],
              2878: [12878],
              3187: [2538, 42512, 46514, 48586, 56047, 61874, 64255, 77650],
              4112: [4683, 6329],
              4473: [44473],
              4537: [44537],
              5035: [75881, 84531],
              5824: [45824],
              6990: [56990],
              7428: [47428],
              8130: [28130],
              8136: [58136],
              8429: [18429],
              8456: [23111, 84594],
              8531: [58531],
              9630: [89630]
            },
            m = {};
          b.f.consumes = (e, a) => {
            b.o(p, e) && p[e].forEach(e => {
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
            })
          }
        })(), (() => {
          if ("undefined" != typeof document) {
            var e = {
              4295: 0
            };
            b.f.miniCss = (a, d) => {
              e[a] ? d.push(e[a]) : 0 !== e[a] && {
                1913: 1,
                3187: 1,
                6683: 1,
                6827: 1,
                8379: 1,
                9487: 1
              } [a] && d.push(e[a] = (e => new Promise((a, d) => {
                var r = b.miniCssF(e),
                  t = b.p + r;
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
                  c.rel = "stylesheet", c.type = "text/css", b.nc && (c.nonce = b.nc), c.onerror = c.onload = d => {
                    if (c.onerror = c.onload = null, "load" === d.type) r();
                    else {
                      var f = d && d.type,
                        o = d && d.target && d.target.href || a,
                        n = new Error("Loading CSS chunk " + e + " failed.\n(" + f + ": " + o + ")");
                      n.name = "ChunkLoadError", n.code = "CSS_CHUNK_LOAD_FAILED", n.type = f, n.request = o, c.parentNode && c.parentNode.removeChild(c), t(n)
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
          b.f.j = (a, d) => {
            var r = b.o(e, a) ? e[a] : void 0;
            if (0 !== r)
              if (r) d.push(r[2]);
              else if (/^(1(127|556|724|913)|2(29|422|878)|4(112|473|537)|8(13[06]|429|456|531)|5035|5824|6990|7428|9630)$/.test(a)) e[a] = 0;
            else {
              var t = new Promise((d, t) => r = e[a] = [d, t]);
              d.push(r[2] = t);
              var c = b.p + b.u(a),
                f = new Error;
              b.l(c, d => {
                if (b.o(e, a) && (0 !== (r = e[a]) && (e[a] = void 0), r)) {
                  var t = d && ("load" === d.type ? "missing" : d.type),
                    c = d && d.target && d.target.src;
                  f.message = "Loading chunk " + a + " failed.\n(" + t + ": " + c + ")", f.name = "ChunkLoadError", f.type = t, f.request = c, r[1](f)
                }
              }, "chunk-" + a, a)
            }
          };
          var a = (a, d) => {
              var r, t, [c, f, o] = d,
                n = 0;
              if (c.some(a => 0 !== e[a])) {
                for (r in f) b.o(f, r) && (b.m[r] = f[r]);
                o && o(b)
              }
              for (a && a(d); n < c.length; n++) t = c[n], b.o(e, t) && e[t] && e[t][0](), e[t] = 0
            },
            d = self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || [];
          d.forEach(a.bind(null, 0)), d.push = a.bind(null, d.push.bind(d))
        })(), b.nc = void 0, b(93032), b(72892)
      })())
    }
  }
});