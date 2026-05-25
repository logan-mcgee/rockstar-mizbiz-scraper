try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "36f2ae2b-9aed-4ad4-9d83-b24f1926eb5f", e._sentryDebugIdIdentifier = "sentry-dbid-36f2ae2b-9aed-4ad4-9d83-b24f1926eb5f")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-legacy",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register(["@rockstargames/modules-core-videoplayer"], function(e, a) {
  var t = {};
  return Object.defineProperty(t, "__esModule", {
    value: !0
  }), {
    setters: [function(e) {
      t.default = e.default || e, Object.keys(e).forEach(function(a) {
        t[a] = e[a]
      })
    }],
    execute: function() {
      e((() => {
        var e, f, r, d, c, n, o = {
            20154(e, a, t) {
              (0, t(89160).w)(1)
            },
            89160(e, a, t) {
              const f = t(51908).y;
              a.w = function(e) {
                if (e || (e = 1), !t.y.meta || !t.y.meta.url) throw console.error("__system_context__", t.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                t.p = f(t.y.meta.url, e)
              }
            },
            35649(e, a, t) {
              t(20154)
            },
            51908(e, a, t) {
              a.y = function(e, a) {
                var t = document.createElement("a");
                t.href = e;
                for (var f = "/" === t.pathname[0] ? t.pathname : "/" + t.pathname, r = 0, d = f.length; r !== a && d >= 0;) "/" === f[--d] && r++;
                if (r !== a) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + a + ") is greater than the number of directories (" + r + ") in the URL path " + e);
                var c = f.slice(0, d + 1);
                return t.protocol + "//" + t.host + c
              };
              Number.isInteger
            },
            58639(e, a, t) {
              "use strict";
              var f = {
                  "./bootstrap": () => Promise.all([t.e(9799), t.e(4577), t.e(9512), t.e(2497), t.e(831), t.e(5248), t.e(4763), t.e(3082), t.e(6416), t.e(3331), t.e(2909), t.e(4017), t.e(9653), t.e(2199), t.e(6351), t.e(7497), t.e(7759), t.e(2285), t.e(8561), t.e(4315)]).then(() => () => t(54315)),
                  "./index": () => Promise.all([t.e(9799), t.e(4577), t.e(9512), t.e(2497), t.e(831), t.e(5248), t.e(4763), t.e(3082), t.e(6416), t.e(3331), t.e(2909), t.e(4017), t.e(9653), t.e(2199), t.e(6351), t.e(7497), t.e(7759), t.e(2285), t.e(8561), t.e(6721)]).then(() => () => t(26721)),
                  "./site-routes/Bully": () => Promise.all([t.e(9799), t.e(4577), t.e(9512), t.e(2497), t.e(831), t.e(5248), t.e(4763), t.e(3082), t.e(6416), t.e(3331), t.e(2909), t.e(4017), t.e(9653), t.e(2199), t.e(6351), t.e(7497), t.e(7759), t.e(2285), t.e(8561), t.e(9781), t.e(239)]).then(() => () => t(20239)),
                  "./site-routes/RedDeadRedemption": () => Promise.all([t.e(9799), t.e(4577), t.e(9512), t.e(2497), t.e(831), t.e(5248), t.e(4763), t.e(3082), t.e(6416), t.e(3331), t.e(2909), t.e(4017), t.e(9653), t.e(2199), t.e(6351), t.e(7497), t.e(7759), t.e(2285), t.e(8561), t.e(9781), t.e(7047)]).then(() => () => t(17047)),
                  "./tina": () => Promise.all([t.e(9799), t.e(4577), t.e(9512), t.e(2497), t.e(831), t.e(5248), t.e(4763), t.e(3082), t.e(6416), t.e(3331), t.e(2909), t.e(4017), t.e(9653), t.e(2199), t.e(6351), t.e(7497), t.e(7759), t.e(2285), t.e(8561), t.e(9781)]).then(() => () => t(29781))
                },
                r = (e, a) => (t.R = a, a = t.o(f, e) ? f[e]() : Promise.resolve().then(() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                }), t.R = void 0, a),
                d = (e, a) => {
                  if (t.S) {
                    var f = "default",
                      r = t.S[f];
                    if (r && r !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return t.S[f] = e, t.I(f, a)
                  }
                };
              t.d(a, {
                get: () => r,
                init: () => d
              })
            },
            25136(e) {
              "use strict";
              e.exports = t
            }
          },
          b = {};

        function i(e) {
          var a = b[e];
          if (void 0 !== a) return a.exports;
          var t = b[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return o[e].call(t.exports, t, t.exports, i), t.loaded = !0, t.exports
        }
        return i.m = o, i.c = b, i.y = a, i.amdO = {}, i.n = e => {
          var a = e && e.__esModule ? () => e.default : () => e;
          return i.d(a, {
            a
          }), a
        }, f = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, i.t = function(a, t) {
          if (1 & t && (a = this(a)), 8 & t) return a;
          if ("object" == typeof a && a) {
            if (4 & t && a.__esModule) return a;
            if (16 & t && "function" == typeof a.then) return a
          }
          var r = Object.create(null);
          i.r(r);
          var d = {};
          e = e || [null, f({}), f([]), f(f)];
          for (var c = 2 & t && a;
            ("object" == typeof c || "function" == typeof c) && !~e.indexOf(c); c = f(c)) Object.getOwnPropertyNames(c).forEach(e => d[e] = () => a[e]);
          return d.default = () => a, i.d(r, d), r
        }, i.d = (e, a) => {
          for (var t in a) i.o(a, t) && !i.o(e, t) && Object.defineProperty(e, t, {
            enumerable: !0,
            get: a[t]
          })
        }, i.f = {}, i.e = e => Promise.all(Object.keys(i.f).reduce((a, t) => (i.f[t](e, a), a), [])), i.u = e => "js/" + {
          22: "bd42a0128e55bbe7d4b1dca608d39ab7",
          131: "c4c250f5de6bec3cb16a20e03363791f",
          162: "ef1be984348f0fb4aaf84f4ebbd1b60f",
          239: "1ce27574454ae9a1467f15c3ac988854",
          277: "90e60593ba99b51eaca124dff81218a9",
          278: "25b7750c282ef6468cd8a3909f3f8110",
          299: "29c23936dfc97da7d6717b615747a6dc",
          314: "289bae76c372f932d0e9c75669050532",
          331: "6627f81b4dfa831dd06a42aec003b4af",
          662: "44cefe6a48355d6300e18cd908fc3910",
          755: "cb9185ca6a0c6b0d858c2632b9bb26fd",
          824: "fc109b519396e54981d1e297cef2c9b0",
          831: "f6466f67bc0f07a947f1896c23b2cd8d",
          906: "ed4677c8a123447e74cf3fed87cb2a74",
          907: "0d13e3cffbb7da0441286e6620e45a83",
          951: "0128a2df7e76a140c02816b462a6c097",
          1054: "6ce76af7f432ada388be23dd0674282c",
          1242: "522b4d0400c095a78b8ea434bdb4bdd8",
          1411: "8bf91bdf2af343d5d6b02612cea2d2ed",
          1822: "04bfed3e105d985f41b463cffeb533d0",
          1868: "453228302446b5f0b11bfe3d69c44945",
          2e3: "873348e9962da5581c59c5b35a3be2db",
          2062: "771c8b17513fd99662d6d53b9617e939",
          2156: "6f890ef64481fb4f6056b0b435305669",
          2171: "27d6fe15938b9c98b7f3c3fa3e366419",
          2221: "cfc53ab9318aa2fece796b190649b78c",
          2243: "8b503c6699cbb1da1ef8922c7683a0f9",
          2301: "9c7e4a73b01e6ac96357d598107d91d7",
          2347: "fc690560ac56282548006e14c1ce4155",
          2365: "b0aab62f5bf3f410a563ac2b42bb21b5",
          2398: "ca5291b99caceb12b90c2338f6bb7874",
          2466: "3ab8bae4fd337b4fe2c54ff2f7ee4c2d",
          2497: "8a02677b880c0d4837b564782c94984e",
          2526: "0934d2ed13cf52bc454af4f48252bc63",
          2571: "471a66b41bba32c0b52c94d3dbb0c27c",
          2581: "4d0722a3ae3b4fb63b7e6651ea36780b",
          2642: "77a8ff34cfd3bb5f488a5c115ea839c9",
          2678: "8815f7eccbf52a3593c0ea47ec9f97ce",
          2864: "3cfa1bc43218340c83af98daea22c7fc",
          3034: "231a176baabe03e2248f2ae032c74c7c",
          3197: "3897f9cbaea02c0c76177fc8d6f820f2",
          3343: "69e3928ce891503ae5703825f3c0d984",
          3370: "8323e9f9d95b6fec47b6cc0639ecbabf",
          3475: "f768a5cb0e48000d576785124a5d04ee",
          3486: "7b4df1cd5b74fdbb93cbc5f91057cb14",
          3694: "b04e8daf92f6786a1b88ced50ffb73d2",
          3697: "b29cc546fa7bb233dda7fa5eb44ec461",
          3769: "635e15d8479e12c1df29d9c9202f2723",
          3792: "92b7218ac8715d7a1912d47670e69bf3",
          3884: "a1ea254b67a306b510047343322c83fc",
          3885: "e07657d429c832201e2d50609af04530",
          3902: "86f8c3f685672124b81984ec55176cad",
          3939: "385646369b32046fb7059055c2382841",
          3941: "41cf3b1222f3b94627353ba6cd7589b4",
          4011: "ca6f78055ec8722876f29796709777c7",
          4078: "ac0fbdc6d037cdbb4668046d3dd3bb09",
          4269: "a50a8a4bc5bf719252e3cf770941c959",
          4315: "33542b7b84dbfff5d313da3e070f21ae",
          4514: "4d3464252eccc4fe289d2eea51b7cfe4",
          4528: "8a8b2974eb94171b8366c08584412f30",
          4537: "bc7f2f3206b1db4de23e0888db4bdf46",
          4577: "db162f16fbd5b0167ad02aac7d5578d6",
          4621: "c6374f5bc61866aca173ca767a72b3e7",
          4700: "f23d6aa74464400d248acaffcf494746",
          4710: "c468020b96e640700ec4961578b0ae6f",
          4731: "84c2ce03ee1af6936f676376f2c1a167",
          4763: "78ccc69d9ab9b3afed33806a58dbb3e4",
          4799: "c57cad1540a9b3bd1e040018882c2c26",
          4851: "cc687b63f9265551a7df569b7c6ffdde",
          4861: "ea0b5b60e20ab960afa83433d2f23be2",
          4913: "ff7c925a49e8065a4a0735620abd1056",
          4921: "d33cebec6fc8c45507672f25424a7ab6",
          5018: "6739f548f2a815c7c0f3722e2b5a2a9a",
          5056: "7210866cd22a077a96e4e38d1cf2f90a",
          5233: "0e3eb6d018ce10471ec891839b05df22",
          5248: "713221fbdba90e9b3c838521fe3d3b18",
          5259: "bf17c90460950dfe52e77093a68ec3dc",
          5511: "f1fc8986a1f716fd3c6d444205225e4e",
          5530: "35bc6d92f4c1182f0a29d07759faf8ce",
          5639: "11007ab0f7cbe55e5a5fe18670587fb3",
          5663: "50eabf9a54521084d208ccc67bf17235",
          5742: "26a7ad7ffde70915b6176230f7b7305c",
          5830: "0f210c1845429bdc0afce0bdfd748e24",
          5832: "c9bcf1b58cb0a78eb61f7762ea1434be",
          5864: "af0c6ace161a9791089266f301eb1b1d",
          5997: "ea1a3d1438009385214cd1aebb82ca6e",
          6150: "805efe54a6dd9e1c6999c00bf345d573",
          6265: "b22377a1c3339d77a37f33230b800b5e",
          6267: "aed54ba2b39d14befcda1a3fdd274024",
          6280: "759bea2ccd6577bcb2bfd1c67082122b",
          6285: "9d01c1248ee1f767edf9c37e3a8b109a",
          6320: "4ee672a334d1c37320c1b9637ac3c47a",
          6338: "52f2d5a517d55e3bf3c484f3fd44cf27",
          6351: "905c6e5884be125e73bb5a45a2f2e9ea",
          6361: "f6d0660b587f55601d0572512b2052af",
          6583: "f185a3f9554a27aafd13dc3ef1853293",
          6663: "5e129c4cec179378be9e238b59edb297",
          6664: "24b62854e45088aa62ba650e64631930",
          6721: "193650fdaed48505b50570d075c76212",
          6879: "041bae9a88944a60e8e6d2f80a168575",
          6891: "8ab00c86b78eade4e5ae9a9dd0c5db59",
          6997: "f6741ae7f388b5c4ba0af9345d4646c4",
          7010: "7ca04df99357790ed5fe95a46f767982",
          7047: "cbf460e345642a13e075a190ab964aaa",
          7073: "a58bdc3ab4d8416f45943a40ef451fc1",
          7196: "3e2cd5a5ec487d8e570d95c0261b2ecf",
          7436: "c2ad555c359d151d62202e39afe928d3",
          7452: "26311b27717d3af46b7f803a60f8791a",
          7453: "6c1d975951c7e541f467d43d55d555c0",
          7645: "94cc1d646c35b85690f7af477e2ad767",
          7759: "43bc8f7f9596183d93df549e28ffdf95",
          7892: "87f544d2d66cedc6f89ca7c0ec782815",
          7970: "ed7a83fc1d8717384c9cebac23a73fb6",
          8272: "acba1f809aabf45b494b2dac6173951e",
          8349: "f706bcd7e97b56ac6c3fe54a01ca14d0",
          8391: "9a0e034484e53f0b4e8e71b914ef6c92",
          8561: "58500e618ec2e23fd278c1d9bceef145",
          8646: "cedb56838b852d8594459ee72567821e",
          8679: "a59f2502559ad1b327b68778e06bf7e7",
          8683: "bf49b2169f64e89523b4affaa285e9e6",
          8755: "ec73c5c9fddf8587a031ac11bc266e84",
          8880: "3fe31c87edcd266ae5bc997fe0a62ae1",
          8970: "e07beea7c07ec8e8ec5fc0f1c1dd17a9",
          9022: "e14d3d09a4121d6d2372d59db1d5295b",
          9028: "45f545774826c3e8370330854a79f3cd",
          9126: "8879d3e1f9eb154a4415b1102ad8f869",
          9377: "66a0d951b02e86613827837f64d0c749",
          9512: "26f0866ebca1ac11514dc5edefe632a3",
          9615: "6b55583ab14fc8cd7510936e8798b422",
          9764: "6f44fcf8e9347cd00134f986e95ecc03",
          9781: "66a03d6331fb64b3056fadccb51ddac3",
          9793: "561ca56f6af076a00c300877782f604f",
          9799: "f1273aa6b96fcad937652b3cef4c82b5",
          9936: "64355b40319d04b699f73e2a9c48e00c",
          9990: "515502efbebee486d6c1ff72c27c76ba"
        } [e] + ".js", i.miniCssF = e => "css/" + {
          239: "52e55b769351b6e3f1602fe5d2baacd1",
          3769: "82b8e41eb90eae7db3adfb9fff54d045",
          4315: "0c95627356de588eb25a2b02a7d32803",
          4763: "1e92a2ae1515f20ea65febcfa68922ce",
          4852: "d5fbf956683b6a3bd196cbced86d6be7",
          6150: "82b8e41eb90eae7db3adfb9fff54d045",
          6338: "b3313fda99862d6d64bd2a829ae71ca3",
          7047: "52e55b769351b6e3f1602fe5d2baacd1",
          7196: "01fd4a1b7dcafeb5ed7fca9004268171",
          8561: "ad7ac72ddc46f90c604ef2cc7248b7bf"
        } [e] + ".css", i.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), i.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), r = {}, d = "@rockstargames/sites-legacy:", i.l = (e, a, t, f) => {
          if (r[e]) r[e].push(a);
          else {
            var c, n;
            if (void 0 !== t)
              for (var o = document.getElementsByTagName("script"), b = 0; b < o.length; b++) {
                var s = o[b];
                if (s.getAttribute("src") == e || s.getAttribute("data-webpack") == d + t) {
                  c = s;
                  break
                }
              }
            c || (n = !0, (c = document.createElement("script")).charset = "utf-8", i.nc && c.setAttribute("nonce", i.nc), c.setAttribute("data-webpack", d + t), c.src = e), r[e] = [a];
            var l = (a, t) => {
                c.onerror = c.onload = null, clearTimeout(u);
                var f = r[e];
                if (delete r[e], c.parentNode && c.parentNode.removeChild(c), f && f.forEach(e => e(t)), a) return a(t)
              },
              u = setTimeout(l.bind(null, void 0, {
                type: "timeout",
                target: c
              }), 12e4);
            c.onerror = l.bind(null, c.onerror), c.onload = l.bind(null, c.onload), n && document.head.appendChild(c)
          }
        }, i.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, i.nmd = e => (e.paths = [], e.children || (e.children = []), e), c = {
          8561: [31879],
          9781: [17523]
        }, n = {
          17523: ["default", "./tina", 25136],
          31879: ["default", "./index", 25136]
        }, i.f.remotes = (e, a) => {
          i.o(c, e) && c[e].forEach(e => {
            var t = i.R;
            t || (t = []);
            var f = n[e];
            if (!(t.indexOf(f) >= 0)) {
              if (t.push(f), f.p) return a.push(f.p);
              var r = a => {
                  a || (a = new Error("Container missing")), "string" == typeof a.message && (a.message += '\nwhile loading "' + f[1] + '" from ' + f[2]), i.m[e] = () => {
                    throw a
                  }, f.p = 0
                },
                d = (e, t, d, c, n, o) => {
                  try {
                    var b = e(t, d);
                    if (!b || !b.then) return n(b, c, o);
                    var i = b.then(e => n(e, c), r);
                    if (!o) return i;
                    a.push(f.p = i)
                  } catch (e) {
                    r(e)
                  }
                },
                c = (e, a, r) => d(a.get, f[1], t, 0, o, r),
                o = a => {
                  f.p = 1, i.m[e] = e => {
                    e.exports = a()
                  }
                };
              d(i, f[2], 0, 0, (e, a, t) => e ? d(i.I, f[0], 0, e, c, t) : r(), 1)
            }
          })
        }, (() => {
          i.S = {};
          var e = {},
            a = {};
          i.I = (t, f) => {
            f || (f = []);
            var r = a[t];
            if (r || (r = a[t] = {}), !(f.indexOf(r) >= 0)) {
              if (f.push(r), e[t]) return e[t];
              i.o(i.S, t) || (i.S[t] = {});
              var d = i.S[t],
                c = "@rockstargames/sites-legacy",
                n = (e, a, t, f) => {
                  var r = d[e] = d[e] || {},
                    n = r[a];
                  (!n || !n.loaded && (!f != !n.eager ? f : c > n.from)) && (r[a] = {
                    get: t,
                    from: c,
                    eager: !!f
                  })
                },
                o = [];
              return "default" === t && (n("@rsgweb/locale-tools", "0.0.0", () => Promise.all([i.e(4577), i.e(9512), i.e(2497), i.e(22), i.e(3082), i.e(8646)]).then(() => () => i(76602))), n("@rsgweb/modules-core-hero", "0.0.0", () => Promise.all([i.e(3082), i.e(6416), i.e(3331), i.e(2909), i.e(2199), i.e(7497), i.e(7759), i.e(7196)]).then(() => () => i(84238))), n("@rsgweb/modules-core-highlights", "0.0.0", () => Promise.all([i.e(5248), i.e(3082), i.e(2909), i.e(2199), i.e(7497), i.e(2285), i.e(4852), i.e(3792)]).then(() => () => i(83792))), n("@rsgweb/rockstar-account", "0.0.0", () => Promise.all([i.e(9799), i.e(5864), i.e(6583), i.e(3082), i.e(6416), i.e(3331), i.e(2909), i.e(5997), i.e(5511)]).then(() => () => i(27892))), n("@rsgweb/tina", "0.0.0", () => Promise.all([i.e(9799), i.e(4577), i.e(831), i.e(8349), i.e(3082), i.e(3331), i.e(2909), i.e(4017), i.e(9653), i.e(2199), i.e(6351), i.e(6150)]).then(() => () => i(60620))), n("@rsgweb/utils", "0.0.0-development", () => Promise.all([i.e(9799), i.e(4577), i.e(9512), i.e(5864), i.e(3902), i.e(3082), i.e(6416), i.e(2909), i.e(5997), i.e(7122), i.e(2301)]).then(() => () => i(42301))), n("clsx", "2.1.1", () => i.e(4921).then(() => () => i(4921))), n("focus-trap-react", "10.3.1", () => Promise.all([i.e(4514), i.e(3082), i.e(9653)]).then(() => () => i(44514))), n("framer-motion", "12.38.0", () => Promise.all([i.e(6663), i.e(3082), i.e(9793)]).then(() => () => i(36663))), n("graphql", "16.13.2", () => i.e(9764).then(() => () => i(29764))), n("prop-types", "15.8.1", () => i.e(331).then(() => () => i(60331))), n("react-dom", "18.3.1", () => Promise.all([i.e(162), i.e(3082)]).then(() => () => i(30162))), n("react-intersection-observer", "9.16.0", () => Promise.all([i.e(3082), i.e(6320)]).then(() => () => i(26320))), n("react-router-dom", "6.30.3", () => Promise.all([i.e(4269), i.e(3082), i.e(4017)]).then(() => () => i(74269))), n("react", "18.3.1", () => i.e(2581).then(() => () => i(22581))), (() => {
                var e = e => {
                  return a = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(a));
                  var a
                };
                try {
                  var a = i(25136);
                  if (!a) return;
                  var r = e => e && e.init && e.init(i.S[t], f);
                  if (a.then) return o.push(a.then(r, e));
                  var d = r(a);
                  if (d && d.then) return o.push(d.catch(e))
                } catch (a) {
                  e(a)
                }
              })()), o.length ? e[t] = Promise.all(o).then(() => e[t] = 1) : e[t] = 1
            }
          }
        })(), (() => {
          var e;
          i.g.importScripts && (e = i.g.location + "");
          var a = i.g.document;
          if (!e && a && (a.currentScript && "SCRIPT" === a.currentScript.tagName.toUpperCase() && (e = a.currentScript.src), !e)) {
            var t = a.getElementsByTagName("script");
            if (t.length)
              for (var f = t.length - 1; f > -1 && (!e || !/^http(s?):/.test(e));) e = t[f--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), i.p = e
        })(), (() => {
          var e = e => {
              var a = e => e.split(".").map(e => +e == e ? +e : e),
                t = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
                f = t[1] ? a(t[1]) : [];
              return t[2] && (f.length++, f.push.apply(f, a(t[2]))), t[3] && (f.push([]), f.push.apply(f, a(t[3]))), f
            },
            a = e => {
              var t = e[0],
                f = "";
              if (1 === e.length) return "*";
              if (t + .5) {
                f += 0 == t ? ">=" : -1 == t ? "<" : 1 == t ? "^" : 2 == t ? "~" : t > 0 ? "=" : "!=";
                for (var r = 1, d = 1; d < e.length; d++) r--, f += "u" == (typeof(n = e[d]))[0] ? "-" : (r > 0 ? "." : "") + (r = 2, n);
                return f
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
            t = (a, f) => {
              if (0 in a) {
                f = e(f);
                var r = a[0],
                  d = r < 0;
                d && (r = -r - 1);
                for (var c = 0, n = 1, o = !0;; n++, c++) {
                  var b, i, s = n < a.length ? (typeof a[n])[0] : "";
                  if (c >= f.length || "o" == (i = (typeof(b = f[c]))[0])) return !o || ("u" == s ? n > r && !d : "" == s != d);
                  if ("u" == i) {
                    if (!o || "u" != s) return !1
                  } else if (o)
                    if (s == i)
                      if (n <= r) {
                        if (b != a[n]) return !1
                      } else {
                        if (d ? b > a[n] : b < a[n]) return !1;
                        b != a[n] && (o = !1)
                      }
                  else if ("s" != s && "n" != s) {
                    if (d || n <= r) return !1;
                    o = !1, n--
                  } else {
                    if (n <= r || i < s != d) return !1;
                    o = !1
                  } else "s" != s && "n" != s && (o = !1, n--)
                }
              }
              var l = [],
                u = l.pop.bind(l);
              for (c = 1; c < a.length; c++) {
                var h = a[c];
                l.push(1 == h ? u() | u() : 2 == h ? u() & u() : h ? t(h, f) : !u())
              }
              return !!u()
            },
            f = (a, t, f) => {
              var r = f ? (e => Object.keys(e).reduce((a, t) => (e[t].eager && (a[t] = e[t]), a), {}))(a[t]) : a[t];
              return Object.keys(r).reduce((a, t) => !a || !r[a].loaded && ((a, t) => {
                a = e(a), t = e(t);
                for (var f = 0;;) {
                  if (f >= a.length) return f < t.length && "u" != (typeof t[f])[0];
                  var r = a[f],
                    d = (typeof r)[0];
                  if (f >= t.length) return "u" == d;
                  var c = t[f],
                    n = (typeof c)[0];
                  if (d != n) return "o" == d && "n" == n || "s" == n || "u" == d;
                  if ("o" != d && "u" != d && r != c) return r < c;
                  f++
                }
              })(a, t) ? t : a, 0)
            },
            r = (e, a, t) => t ? t() : ((e, a) => (e => {
              throw new Error(e)
            })("Shared module " + a + " doesn't exist in shared scope " + e))(e, a),
            d = (e => function(a, t, f, r, d) {
              var c = i.I(a);
              return c && c.then && !f ? c.then(e.bind(e, a, i.S[a], t, !1, r, d)) : e(a, i.S[a], t, f, r, d)
            })((e, d, c, n, o, b) => {
              if (!((e, a) => e && i.o(e, a))(d, c)) return r(e, c, b);
              var s, l, u = f(d, c, n);
              return t(o, u) || (l = ((e, t, f, r) => "Unsatisfied version " + f + " from " + (f && e[t][f].from) + " of shared singleton module " + t + " (required " + a(r) + ")")(d, c, u, o), "undefined" != typeof console && console.warn && console.warn(l)), (s = d[c][u]).loaded = 1, s.get()
            }),
            c = {},
            n = {
              93082: () => d("default", "react", !1, [0], () => i.e(2581).then(() => () => i(22581))),
              36416: () => d("default", "react-router-dom", !1, [0], () => Promise.all([i.e(4269), i.e(4017)]).then(() => () => i(74269))),
              13331: () => d("default", "@rsgweb/utils", !1, [0], () => Promise.all([i.e(9799), i.e(4577), i.e(9512), i.e(5864), i.e(3902), i.e(6416), i.e(5997), i.e(2526)]).then(() => () => i(42301))),
              42909: () => d("default", "@rsgweb/locale-tools", !1, [0], () => Promise.all([i.e(4577), i.e(9512), i.e(2497), i.e(22), i.e(6265)]).then(() => () => i(76602))),
              84017: () => d("default", "react-dom", !1, [1, 18, 2, 0], () => i.e(162).then(() => () => i(30162))),
              89653: () => d("default", "prop-types", !1, [1, 15, 8, 1], () => i.e(331).then(() => () => i(60331))),
              82199: () => d("default", "@rsgweb/rockstar-account", !1, [0], () => Promise.all([i.e(9799), i.e(5864), i.e(6583), i.e(6416), i.e(3331), i.e(5997), i.e(7892)]).then(() => () => i(27892))),
              13517: () => d("default", "framer-motion", !1, [1, 12, 38, 0], () => i.e(6663).then(() => () => i(36663))),
              17301: () => d("default", "@rsgweb/tina", !1, [0], () => Promise.all([i.e(9799), i.e(4577), i.e(831), i.e(8349), i.e(3331), i.e(4017), i.e(9653), i.e(6351), i.e(3769)]).then(() => () => i(60620))),
              81270: () => d("default", "clsx", !1, [1, 2, 1, 1], () => i.e(4921).then(() => () => i(4921))),
              42285: () => d("default", "react-intersection-observer", !1, [1, 9, 16, 0], () => i.e(3939).then(() => () => i(26320))),
              10475: () => d("default", "@rsgweb/modules-core-highlights", !1, [0], () => Promise.all([i.e(4852), i.e(1411)]).then(() => () => i(83792))),
              79955: () => d("default", "focus-trap-react", !1, [1, 10, 3, 1], () => i.e(4514).then(() => () => i(44514))),
              97819: () => d("default", "@rsgweb/modules-core-hero", !1, [0], () => i.e(6338).then(() => () => i(84238))),
              67122: () => d("default", "graphql", !1, [1, 16, 13, 2], () => i.e(9764).then(() => () => i(29764)))
            },
            o = {
              2199: [82199],
              2285: [42285],
              2526: [67122],
              2909: [42909],
              3082: [93082],
              3331: [13331],
              4017: [84017],
              6416: [36416],
              7122: [67122],
              7497: [13517, 17301],
              7759: [81270],
              8561: [10475, 79955, 97819],
              9653: [89653]
            },
            b = {};
          i.f.consumes = (e, a) => {
            i.o(o, e) && o[e].forEach(e => {
              if (i.o(c, e)) return a.push(c[e]);
              if (!b[e]) {
                var t = a => {
                  c[e] = 0, i.m[e] = t => {
                    delete i.c[e], t.exports = a()
                  }
                };
                b[e] = !0;
                var f = a => {
                  delete c[e], i.m[e] = t => {
                    throw delete i.c[e], a
                  }
                };
                try {
                  var r = n[e]();
                  r.then ? a.push(c[e] = r.then(t).catch(f)) : t(r)
                } catch (e) {
                  f(e)
                }
              }
            })
          }
        })(), (() => {
          if ("undefined" != typeof document) {
            var e = {
              8106: 0
            };
            i.f.miniCss = (a, t) => {
              e[a] ? t.push(e[a]) : 0 !== e[a] && {
                239: 1,
                3769: 1,
                4315: 1,
                4763: 1,
                4852: 1,
                6150: 1,
                6338: 1,
                7047: 1,
                7196: 1,
                8561: 1
              } [a] && t.push(e[a] = (e => new Promise((a, t) => {
                var f = i.miniCssF(e),
                  r = i.p + f;
                if (((e, a) => {
                    for (var t = document.getElementsByTagName("link"), f = 0; f < t.length; f++) {
                      var r = (c = t[f]).getAttribute("data-href") || c.getAttribute("href");
                      if ("stylesheet" === c.rel && (r === e || r === a)) return c
                    }
                    var d = document.getElementsByTagName("style");
                    for (f = 0; f < d.length; f++) {
                      var c;
                      if ((r = (c = d[f]).getAttribute("data-href")) === e || r === a) return c
                    }
                  })(f, r)) return a();
                ((e, a, t, f, r) => {
                  var d = document.createElement("link");
                  d.rel = "stylesheet", d.type = "text/css", i.nc && (d.nonce = i.nc), d.onerror = d.onload = t => {
                    if (d.onerror = d.onload = null, "load" === t.type) f();
                    else {
                      var c = t && t.type,
                        n = t && t.target && t.target.href || a,
                        o = new Error("Loading CSS chunk " + e + " failed.\n(" + c + ": " + n + ")");
                      o.name = "ChunkLoadError", o.code = "CSS_CHUNK_LOAD_FAILED", o.type = c, o.request = n, d.parentNode && d.parentNode.removeChild(d), r(o)
                    }
                  }, d.href = a, document.head.appendChild(d)
                })(e, r, 0, a, t)
              }))(a).then(() => {
                e[a] = 0
              }, t => {
                throw delete e[a], t
              }))
            }
          }
        })(), (() => {
          var e = {
            8106: 0
          };
          i.f.j = (a, t) => {
            var f = i.o(e, a) ? e[a] : void 0;
            if (0 !== f)
              if (f) t.push(f[2]);
              else if (/^(2(199|285|909)|(308|485|712)2|3331|4017|6416|7497|9653)$/.test(a)) e[a] = 0;
            else {
              var r = new Promise((t, r) => f = e[a] = [t, r]);
              t.push(f[2] = r);
              var d = i.p + i.u(a),
                c = new Error;
              i.l(d, t => {
                if (i.o(e, a) && (0 !== (f = e[a]) && (e[a] = void 0), f)) {
                  var r = t && ("load" === t.type ? "missing" : t.type),
                    d = t && t.target && t.target.src;
                  c.message = "Loading chunk " + a + " failed.\n(" + r + ": " + d + ")", c.name = "ChunkLoadError", c.type = r, c.request = d, f[1](c)
                }
              }, "chunk-" + a, a)
            }
          };
          var a = (a, t) => {
              var f, r, [d, c, n] = t,
                o = 0;
              if (d.some(a => 0 !== e[a])) {
                for (f in c) i.o(c, f) && (i.m[f] = c[f]);
                n && n(i)
              }
              for (a && a(t); o < d.length; o++) r = d[o], i.o(e, r) && e[r] && e[r][0](), e[r] = 0
            },
            t = self.webpackChunk_rockstargames_sites_legacy = self.webpackChunk_rockstargames_sites_legacy || [];
          t.forEach(a.bind(null, 0)), t.push = a.bind(null, t.push.bind(t))
        })(), i.nc = void 0, i(35649), i(58639)
      })())
    }
  }
});