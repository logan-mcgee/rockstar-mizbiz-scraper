try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "182fcfb0-dff9-475c-978d-f0e855ee586c", e._sentryDebugIdIdentifier = "sentry-dbid-182fcfb0-dff9-475c-978d-f0e855ee586c")
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
      Object.keys(e).forEach(function(a) {
        r[a] = e[a]
      })
    }, function(e) {
      Object.keys(e).forEach(function(a) {
        t[a] = e[a]
      })
    }],
    execute: function() {
      e((() => {
        var e, d, f, c, n, o, b = {
            17411: (e, a, r) => {
              const t = r(77027).y;
              a.w = function(e) {
                if (e || (e = 1), !r.y.meta || !r.y.meta.url) throw console.error("__system_context__", r.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                r.p = t(r.y.meta.url, e)
              }
            },
            25136: e => {
              "use strict";
              e.exports = t
            },
            28419: (e, a, r) => {
              (0, r(17411).w)(1)
            },
            29441: e => {
              "use strict";
              e.exports = r
            },
            55974: (e, a, r) => {
              "use strict";
              var t = {
                  "./index": () => Promise.all([r.e(602), r.e(4237), r.e(4488), r.e(6833), r.e(5117), r.e(8505), r.e(5827), r.e(1302), r.e(840), r.e(9116), r.e(2229), r.e(8429), r.e(6188), r.e(5966), r.e(1788), r.e(9623), r.e(4572), r.e(6088), r.e(6130), r.e(6069), r.e(1913), r.e(2918), r.e(6536), r.e(2440), r.e(2358), r.e(7409), r.e(76), r.e(1125)]).then(() => () => r(28674)),
                  "./tinaBlockTemplates": () => Promise.all([r.e(5117), r.e(8661), r.e(2229), r.e(8429), r.e(6188), r.e(5966), r.e(1788), r.e(4572), r.e(6130), r.e(6069), r.e(6536), r.e(2358), r.e(3410)]).then(() => () => r(4984)),
                  "./types": () => Promise.all([r.e(602), r.e(4237), r.e(4488), r.e(6833), r.e(5117), r.e(8505), r.e(5827), r.e(1302), r.e(840), r.e(9116), r.e(2229), r.e(8429), r.e(6188), r.e(5966), r.e(1788), r.e(9623), r.e(4572), r.e(6088), r.e(6130), r.e(6069), r.e(1913), r.e(2918), r.e(6536), r.e(2440), r.e(2358), r.e(7409), r.e(76), r.e(1125)]).then(() => () => r(76808))
                },
                d = (e, a) => (r.R = a, a = r.o(t, e) ? t[e]() : Promise.resolve().then(() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                }), r.R = void 0, a),
                f = (e, a) => {
                  if (r.S) {
                    var t = "default",
                      d = r.S[t];
                    if (d && d !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return r.S[t] = e, r.I(t, a)
                  }
                };
              r.d(a, {
                get: () => d,
                init: () => f
              })
            },
            77027: (e, a, r) => {
              a.y = function(e, a) {
                var r = document.createElement("a");
                r.href = e;
                for (var t = "/" === r.pathname[0] ? r.pathname : "/" + r.pathname, d = 0, f = t.length; d !== a && f >= 0;) "/" === t[--f] && d++;
                if (d !== a) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + a + ") is greater than the number of directories (" + d + ") in the URL path " + e);
                var c = t.slice(0, f + 1);
                return r.protocol + "//" + r.host + c
              };
              Number.isInteger
            },
            93032: (e, a, r) => {
              r(28419)
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
          return b[e].call(r.exports, r, r.exports, i), r.loaded = !0, r.exports
        }
        return i.m = b, i.c = s, i.y = a, i.amdO = {}, i.n = e => {
          var a = e && e.__esModule ? () => e.default : () => e;
          return i.d(a, {
            a
          }), a
        }, d = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, i.t = function(a, r) {
          if (1 & r && (a = this(a)), 8 & r) return a;
          if ("object" == typeof a && a) {
            if (4 & r && a.__esModule) return a;
            if (16 & r && "function" == typeof a.then) return a
          }
          var t = Object.create(null);
          i.r(t);
          var f = {};
          e = e || [null, d({}), d([]), d(d)];
          for (var c = 2 & r && a;
            ("object" == typeof c || "function" == typeof c) && !~e.indexOf(c); c = d(c)) Object.getOwnPropertyNames(c).forEach(e => f[e] = () => a[e]);
          return f.default = () => a, i.d(t, f), t
        }, i.d = (e, a) => {
          for (var r in a) i.o(a, r) && !i.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: a[r]
          })
        }, i.f = {}, i.e = e => Promise.all(Object.keys(i.f).reduce((a, r) => (i.f[r](e, a), a), [])), i.u = e => "js/" + {
          68: "92bf647c78105931fc44cdd261982f16",
          131: "8a6adac2e264d871a2c09ada6eb478f0",
          173: "1bd6ff28faadb0a13caba2273b68bbf2",
          278: "079fc606978d12a1d0f4bd651fded5ec",
          299: "14eed3656bde109810e5d55d3887e08d",
          314: "1f31fef2efa023e2906c2c4885414919",
          439: "4f6b3d5d78519a7656ad0ffbc8d98213",
          602: "a87e36437aa6b2c1c6b00289c78b7c8f",
          662: "64d2f9e0dda766767d36a9371c2af066",
          824: "476e61b08125b5bf5cbf48fb71d9c586",
          840: "fd0b1c44ff0ace4dc17689e9414c89dd",
          884: "02b464009f39a4c3582d9e9a600a6917",
          907: "4cf58bf766fafe2aec06b58af6106d60",
          1054: "ba29e98c57940f9aa8ab8e116ee1de1b",
          1057: "457ab9ea3f079b0eb8df4ac72a8f0490",
          1098: "2c516171589157445a73ac6766f9327b",
          1125: "2952275d10cdfeab97b5fad0d9dd381e",
          1242: "25d46284c9c6c7b32409c93eddfd38d7",
          1302: "f0d346feee2054978bf661883269f794",
          1758: "bacbddb9df67fe30fda1e241c22c886f",
          1822: "912c2cb6849b7a93bcdbb776d6daa712",
          1858: "1881bb4d33912c82bece5835f16fe92d",
          1868: "6516e32c8ad7fc3190c18fb9d5d4a37b",
          2156: "7758641142561793003fc1bf360de299",
          2169: "d4b57e5b6f09ec75ea5ca1853a32c889",
          2171: "9e447786a6e1987864d4747bbc7569a5",
          2221: "2ac1091802c7157125e7def79935f877",
          2234: "b5a1e89ef81089da6e0cc7c8b3288144",
          2243: "1bd3ba208e8e37015c43e18082a16730",
          2306: "36b98022193da6384f122a538eb6a0ca",
          2347: "06643c77a5e49a8786bf835f3c3b03f8",
          2358: "56fe570b9b48c583725527f94d0c0690",
          2365: "e1fa582536afc921dfe4c5b7076c256c",
          2398: "190ffa1fba74f1cca6fb21204a96ea50",
          2424: "91dda0ac38b7ed080283cada3a57fb9f",
          2466: "642939cf20b27704273b183e09bd73ec",
          2642: "ee6c8e36bf100d67f56f8d4a1865dacc",
          2678: "08324bbb8c7211b29a24358e128bd363",
          2864: "045b7502c8f07647c6b80690f41d4b3d",
          3034: "8c19d8760a8d1432bd7bb9333bbbbf5f",
          3197: "f979bd253944f79509ef6df00c42d8e3",
          3343: "e440306ee5f6b11b519f223e3c2e69e4",
          3370: "45f8d24b6c7ce84fcf1d1772ae7c4e72",
          3387: "24dd59331bd5f1b06480f67bd336dab5",
          3410: "4cf62a63462dc15f9b32afb57aee3dcc",
          3438: "371a1276ca24a4139ef0c5f1bba81734",
          3475: "55274943bc0c4d68862ba78cdb8257ae",
          3486: "38876d8eee599e578b3cbfad22873c53",
          3697: "5e433d3ff0dbc7efa43fefa188860a4f",
          3885: "da4400e0012a3480b1b31b81ed5db1ca",
          3896: "f810508d8094dd962cecebc60cd56f0f",
          3941: "96f2fbbe146491e553ccc566607a9e23",
          4011: "fcbdca370d6fafe1a92a9a34a1273d41",
          4237: "04efaf1d13f8c392aae5f2a709fabfb3",
          4488: "e66e613b2734e2d13649b7a85c349973",
          4528: "3695dbe7cc387d26a2613debed3d4468",
          4550: "63f9689ac2896da90aedf8361b38937f",
          4578: "5d788a1b29a19f68c8e66bb9418f5eba",
          4621: "10c7e48852ba7180c30229a1dcea2908",
          4700: "eb3897e39df4dc740126b2b2beda063d",
          4710: "fc50dc5eb21176eedf98b52dd7d9b707",
          4731: "e8b0783e3d7019cbc9167d53a1232554",
          4779: "012c20e45b30767d18fa904c109304d6",
          4799: "c8abc9361387b60a7a960d9fcf7e70ab",
          4851: "34cc1ac4901b35b635127f7c92290bf4",
          4861: "9c6e271603d18814389e65ed76bfdd60",
          4913: "c399aa0f9eee7165b6490f864b394b02",
          5018: "bef861f70a7d55244ff2059a970b97b0",
          5021: "0b263ad1977dc6e4b3758a54cf7df81f",
          5076: "d8b3e1972d91123218db7c2232092479",
          5117: "03c83d25306db61542680fe831da2ff2",
          5233: "5da4f8813657b76678ae6ea379bc8036",
          5259: "296bd00c51a7b3773123ef0e14da22fc",
          5265: "2ad28d1fa1b722395cf2b7250628ad11",
          5389: "d699202a220d2a1c6bad2ed1a74a0329",
          5400: "e15474bd7ca700a4423f23163af966b3",
          5415: "c1a4bb9b5c65e13c59449b12583c46af",
          5454: "584ecc6004e1df08578b8f6536bd076a",
          5530: "45a87c7705ada4cf40cd580af7098da2",
          5639: "752331473f058bb2c4112110602bb771",
          5663: "ec465187e38d257bf7ad0d534e2e2c0c",
          5742: "cd136b5b5cdefa0ed2e38397719a33c6",
          5827: "7ecfd14cbc18c869a404b6a6e81c9524",
          5830: "db839d8b97c66448041ac8aba81a3947",
          5832: "54f54ee165327bc19acf3773f84f948e",
          5859: "005551cead52d7e7a15ff2f4001075da",
          6088: "f579d4e4ef3511fcea4901d83fc032d9",
          6130: "7149cca183b05de0cc7e0cf18917c35a",
          6267: "9b925fc6fc8acca1bae6fc6d457a1d3e",
          6280: "737a870248246b80aa31e51f3612bd76",
          6285: "b646c3a3727ce7a93669c498d4b2fd80",
          6321: "fa0afc9fe13892a2c353825f080ede16",
          6327: "d1a42e385da191666fa7cbd5bc6c935e",
          6361: "72fe6f8f6e79ac18a5cdd7900cd48993",
          6471: "13c58c6062eb49d2a10aa899212989b4",
          6664: "d31a08fea0d3f246f0f0005342a87c23",
          6833: "d9d6ed62d3883560ab202bf45715d666",
          6879: "e33d8ad9125506df4e9f5afefc134dac",
          6891: "d8499cf88ed69266b1dcef54a4e204a9",
          6937: "dc5d7df7dc0aa51ae0ec8d5832416ad9",
          6997: "046da235b58864e7e3e935e0d8345096",
          7010: "a04f5c27d4a2232aa3e394add69312f4",
          7073: "43ab8e756bfe6909ba916ce9994c998c",
          7407: "c09fa90ceae2a2c59954571a15c8e1d4",
          7409: "3c80291e8f336a0e9955ec28aef049f6",
          7436: "92f620e8f25bb2b775cff6b94d3ef632",
          7452: "37cbac0c7a6c6d6d9f05edd8ff919297",
          7453: "ae4b6b5c8fea372ef6735fc04695fbbd",
          7785: "10bc39e9d8f434ec291419486d240cc2",
          7970: "7112319bd6d98ad51f263845bfe193dd",
          8068: "fe8384e79af34d64226437d8a648cc5d",
          8240: "135b08ca3f87d41b3e6b7f39028ab477",
          8272: "49c6d803b3d37cc52a72063b11e27198",
          8325: "96eb3651df6792c1d455c253813b6927",
          8391: "649c06ba0f825ffe987b857109413c91",
          8431: "afd6a9f571c128a2683ea39aa30092fa",
          8503: "7e12825a8f6ea202fbd9ce4016b9ce8a",
          8505: "00e9a4e653ef43db9a8e1c92dbb9243e",
          8659: "bec06175c4aee88eaf76448a8f6b6091",
          8661: "4f40d7938c0d55ffcc8a3e926bcbefee",
          8702: "959025eee668a6b5d9aac7dc1721fe12",
          8708: "56a3aabac6a2b933b634d4ec561abb1d",
          8755: "9f64150b6166aaa0b2443e882a8ae13d",
          8845: "a7dfee140d1bdfa6f5f5e2b9034e5b25",
          8880: "6a6f917ba2da15f80dcb57c8d4984273",
          8938: "183ad12b88e59ad8dca1d7c8d6970a14",
          8970: "c4a035f76bca804002c0359b37d036ed",
          9022: "9d02de05b708950e50c26b9b0d03b059",
          9028: "f54383ad123141076d1b16dfd28194b0",
          9116: "e3994aff97d44f0dec4525e70f8a2483",
          9126: "f0bbbbbd17e0db60875409e20bbf2919",
          9377: "4f4bd8912a6a7b863f77db4f71c2280d",
          9477: "e23c044f34f5215bc25046d588e12ca5",
          9587: "c15a9394bde6fd65bb98739bc3b8a0bd",
          9615: "66eff2805e25cc8fd788948f926afa61",
          9760: "74ab2fe04fd1d3d636355443297f4303",
          9936: "6fb8bbf8251254d3812d9be86bcb23de",
          9990: "468da9a83335a1ce5b40f4722d5deaa9"
        } [e] + ".js", i.miniCssF = e => "css/" + {
          76: "537c3654e32745a846faf8bafb6e84bd",
          884: "214e2f94528af5f726d2150d0a4f2215",
          1057: "3af92259c369f40eec2a7d0f90f67d96",
          1125: "1f0b7788c62f125589cc4f20494ca953",
          2358: "165fa99f963184aba806d81f713ae37c",
          3438: "3af92259c369f40eec2a7d0f90f67d96",
          5040: "c30f3c8a99525fcaf9c0832853c3f081",
          6069: "ff5d40a08af069c8bbed595ff7e87c9b",
          6536: "3a4070d4c77506d8955255a1ccc7b2a6",
          6937: "a5afda78cd9e8ba3533ac0f2bf4f063b",
          7409: "bbfc715b58e04a52bcbba01c5d9281fc",
          8427: "64d7f9e177dae263f83a61669b860024",
          8503: "214e2f94528af5f726d2150d0a4f2215",
          8683: "ec396ec8a36762ae49c6722682ad4e04",
          9116: "ed78d69898cf7c75ad9f3c7f513105b2"
        } [e] + ".css", i.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), i.hmd = e => ((e = Object.create(e)).children || (e.children = []), Object.defineProperty(e, "exports", {
          enumerable: !0,
          set: () => {
            throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " + e.id)
          }
        }), e), i.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), f = {}, c = "@rockstargames/modules-core-newswire-article:", i.l = (e, a, r, t) => {
          if (f[e]) f[e].push(a);
          else {
            var d, n;
            if (void 0 !== r)
              for (var o = document.getElementsByTagName("script"), b = 0; b < o.length; b++) {
                var s = o[b];
                if (s.getAttribute("src") == e || s.getAttribute("data-webpack") == c + r) {
                  d = s;
                  break
                }
              }
            d || (n = !0, (d = document.createElement("script")).charset = "utf-8", d.timeout = 120, i.nc && d.setAttribute("nonce", i.nc), d.setAttribute("data-webpack", c + r), d.src = e), f[e] = [a];
            var l = (a, r) => {
                d.onerror = d.onload = null, clearTimeout(u);
                var t = f[e];
                if (delete f[e], d.parentNode && d.parentNode.removeChild(d), t && t.forEach(e => e(r)), a) return a(r)
              },
              u = setTimeout(l.bind(null, void 0, {
                type: "timeout",
                target: d
              }), 12e4);
            d.onerror = l.bind(null, d.onerror), d.onload = l.bind(null, d.onload), n && document.head.appendChild(d)
          }
        }, i.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, i.nmd = e => (e.paths = [], e.children || (e.children = []), e), n = {
          2358: [64064],
          3410: [11438, 17523, 44019, 83166],
          6536: [31879]
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
              var d = a => {
                  a || (a = new Error("Container missing")), "string" == typeof a.message && (a.message += '\nwhile loading "' + t[1] + '" from ' + t[2]), i.m[e] = () => {
                    throw a
                  }, t.p = 0
                },
                f = (e, r, f, c, n, o) => {
                  try {
                    var b = e(r, f);
                    if (!b || !b.then) return n(b, c, o);
                    var s = b.then(e => n(e, c), d);
                    if (!o) return s;
                    a.push(t.p = s)
                  } catch (e) {
                    d(e)
                  }
                },
                c = (e, a, d) => f(a.get, t[1], r, 0, n, d),
                n = a => {
                  t.p = 1, i.m[e] = e => {
                    e.exports = a()
                  }
                };
              f(i, t[2], 0, 0, (e, a, r) => e ? f(i.I, t[0], 0, e, c, r) : d(), 1)
            }
          })
        }, (() => {
          i.S = {};
          var e = {},
            a = {};
          i.I = (r, t) => {
            t || (t = []);
            var d = a[r];
            if (d || (d = a[r] = {}), !(t.indexOf(d) >= 0)) {
              if (t.push(d), e[r]) return e[r];
              i.o(i.S, r) || (i.S[r] = {});
              var f = i.S[r],
                c = "@rockstargames/modules-core-newswire-article",
                n = (e, a, r, t) => {
                  var d = f[e] = f[e] || {},
                    n = d[a];
                  (!n || !n.loaded && (!t != !n.eager ? t : c > n.from)) && (d[a] = {
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
                    var d = i(e);
                    if (!d) return;
                    var f = e => e && e.init && e.init(i.S[r], t);
                    if (d.then) return b.push(d.then(f, a));
                    var c = f(d);
                    if (c && c.then) return b.push(c.catch(a))
                  } catch (e) {
                    a(e)
                  }
                },
                b = [];
              return "default" === r && (n("@foundry/react", "5.13.1", () => Promise.all([i.e(602), i.e(5021), i.e(6833), i.e(1302), i.e(6937), i.e(2229), i.e(8429), i.e(4572), i.e(4779)]).then(() => () => i(41121))), n("@rsgweb/locale-tools", "1.0.0", () => Promise.all([i.e(9587), i.e(2229), i.e(8240)]).then(() => () => i(12841))), n("@rsgweb/modules-core-carousel", "0.0.0", () => Promise.all([i.e(5021), i.e(4488), i.e(6833), i.e(5827), i.e(2229), i.e(8429), i.e(5966), i.e(4572), i.e(6069), i.e(1913), i.e(8683), i.e(9477)]).then(() => () => i(89477))), n("@rsgweb/modules-core-engagement", "0.0.0", () => Promise.all([i.e(5021), i.e(4488), i.e(6833), i.e(5827), i.e(840), i.e(2229), i.e(8429), i.e(5966), i.e(1788), i.e(9623), i.e(4572), i.e(1913), i.e(2918), i.e(2440), i.e(2424), i.e(7409), i.e(8427)]).then(() => () => i(89600))), n("@rsgweb/modules-core-group-of-items", "1.0.0", () => Promise.all([i.e(4488), i.e(2229), i.e(5966), i.e(4572), i.e(6069), i.e(1913), i.e(6536), i.e(2440), i.e(76), i.e(884)]).then(() => () => i(90884))), n("@rsgweb/rockstar-account", "0.0.0", () => Promise.all([i.e(602), i.e(4237), i.e(8068), i.e(2229), i.e(6188), i.e(5966), i.e(9623), i.e(6088), i.e(4550)]).then(() => () => i(32169))), n("@rsgweb/tina", "0.0.0", () => Promise.all([i.e(5117), i.e(2229), i.e(8429), i.e(6188), i.e(5966), i.e(1788), i.e(6130), i.e(2918), i.e(1057)]).then(() => () => i(99747))), n("@rsgweb/utils", "1.0.0", () => Promise.all([i.e(602), i.e(4237), i.e(8505), i.e(5454), i.e(2229), i.e(6188), i.e(1788), i.e(9623), i.e(6088), i.e(8702)]).then(() => () => i(58702))), n("clsx", "2.1.1", () => i.e(439).then(() => () => i(10439))), n("dompurify", "2.5.8", () => i.e(7785).then(() => () => i(27785))), n("lodash", "4.17.21", () => i.e(5076).then(() => () => i(15076))), n("react-dom", "18.3.1", () => Promise.all([i.e(1098), i.e(2229)]).then(() => () => i(71098))), n("react-intersection-observer", "9.16.0", () => Promise.all([i.e(2229), i.e(6327)]).then(() => () => i(76327))), n("react-jsx-parser", "2.4.1", () => Promise.all([i.e(3387), i.e(2229)]).then(() => () => i(43387))), n("react-router-dom", "6.30.1", () => Promise.all([i.e(5389), i.e(2229), i.e(8429)]).then(() => () => i(15389))), n("react", "18.2.0", () => i.e(8659).then(() => () => i(68659))), n("react", "18.3.1", () => i.e(8431).then(() => () => i(48431))), n("text-balancer", "1.0.5", () => i.e(5400).then(() => () => i(75400))), o(25136), o(29441)), b.length ? e[r] = Promise.all(b).then(() => e[r] = 1) : e[r] = 1
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
            a = (a, r) => {
              a = e(a), r = e(r);
              for (var t = 0;;) {
                if (t >= a.length) return t < r.length && "u" != (typeof r[t])[0];
                var d = a[t],
                  f = (typeof d)[0];
                if (t >= r.length) return "u" == f;
                var c = r[t],
                  n = (typeof c)[0];
                if (f != n) return "o" == f && "n" == n || "s" == n || "u" == f;
                if ("o" != f && "u" != f && d != c) return d < c;
                t++
              }
            },
            r = e => {
              var a = e[0],
                t = "";
              if (1 === e.length) return "*";
              if (a + .5) {
                t += 0 == a ? ">=" : -1 == a ? "<" : 1 == a ? "^" : 2 == a ? "~" : a > 0 ? "=" : "!=";
                for (var d = 1, f = 1; f < e.length; f++) d--, t += "u" == (typeof(n = e[f]))[0] ? "-" : (d > 0 ? "." : "") + (d = 2, n);
                return t
              }
              var c = [];
              for (f = 1; f < e.length; f++) {
                var n = e[f];
                c.push(0 === n ? "not(" + o() + ")" : 1 === n ? "(" + o() + " || " + o() + ")" : 2 === n ? c.pop() + " " + c.pop() : r(n))
              }
              return o();

              function o() {
                return c.pop().replace(/^\((.+)\)$/, "$1")
              }
            },
            t = (a, r) => {
              if (0 in a) {
                r = e(r);
                var d = a[0],
                  f = d < 0;
                f && (d = -d - 1);
                for (var c = 0, n = 1, o = !0;; n++, c++) {
                  var b, s, i = n < a.length ? (typeof a[n])[0] : "";
                  if (c >= r.length || "o" == (s = (typeof(b = r[c]))[0])) return !o || ("u" == i ? n > d && !f : "" == i != f);
                  if ("u" == s) {
                    if (!o || "u" != i) return !1
                  } else if (o)
                    if (i == s)
                      if (n <= d) {
                        if (b != a[n]) return !1
                      } else {
                        if (f ? b > a[n] : b < a[n]) return !1;
                        b != a[n] && (o = !1)
                      }
                  else if ("s" != i && "n" != i) {
                    if (f || n <= d) return !1;
                    o = !1, n--
                  } else {
                    if (n <= d || s < i != f) return !1;
                    o = !1
                  } else "s" != i && "n" != i && (o = !1, n--)
                }
              }
              var l = [],
                u = l.pop.bind(l);
              for (c = 1; c < a.length; c++) {
                var h = a[c];
                l.push(1 == h ? u() | u() : 2 == h ? u() & u() : h ? t(h, r) : !u())
              }
              return !!u()
            },
            d = (e, a) => e && i.o(e, a),
            f = e => (e.loaded = 1, e.get()),
            c = e => Object.keys(e).reduce((a, r) => (e[r].eager && (a[r] = e[r]), a), {}),
            n = e => {
              throw new Error(e)
            },
            o = e => function(a, r, t, d, f) {
              var c = i.I(a);
              return c && c.then && !t ? c.then(e.bind(e, a, i.S[a], r, !1, d, f)) : e(a, i.S[a], r, t, d, f)
            },
            b = (e, a, r) => r ? r() : ((e, a) => n("Shared module " + a + " doesn't exist in shared scope " + e))(e, a),
            s = o((e, o, s, i, l, u) => {
              if (!d(o, s)) return b(e, s, u);
              var h = ((e, r, d, f) => {
                var n = f ? c(e[r]) : e[r];
                return (r = Object.keys(n).reduce((e, r) => !t(d, r) || e && !a(e, r) ? e : r, 0)) && n[r]
              })(o, s, l, i);
              return h ? f(h) : u ? u() : void n(((e, a, t, d, f) => {
                var c = e[t];
                return "No satisfying version (" + r(d) + ")" + (f ? " for eager consumption" : "") + " of shared module " + t + " found in shared scope " + a + ".\nAvailable versions: " + Object.keys(c).map(e => e + " from " + c[e].from).join(", ")
              })(o, e, s, l, i))
            }),
            l = o((e, n, o, s, i, l) => {
              if (!d(n, o)) return b(e, o, l);
              var u, h = ((e, r, t) => {
                var d = t ? c(e[r]) : e[r];
                return Object.keys(d).reduce((e, r) => !e || !d[e].loaded && a(e, r) ? r : e, 0)
              })(n, o, s);
              return t(i, h) || (u = ((e, a, t, d) => "Unsatisfied version " + t + " from " + (t && e[a][t].from) + " of shared singleton module " + a + " (required " + r(d) + ")")(n, o, h, i), "undefined" != typeof console && console.warn && console.warn(u)), f(n[o][h])
            }),
            u = {},
            h = {
              62229: () => s("default", "react", !1, [1, 18, 2, 0], () => i.e(8431).then(() => () => i(48431))),
              18429: () => l("default", "react-dom", !1, [1, 18, 2, 0], () => i.e(1098).then(() => () => i(71098))),
              16188: () => s("default", "lodash", !1, [1, 4, 17, 21], () => i.e(5076).then(() => () => i(15076))),
              95966: () => s("default", "@rsgweb/utils", !1, [1, "workspace:^"], () => Promise.all([i.e(602), i.e(4237), i.e(8505), i.e(5454), i.e(6188), i.e(1788), i.e(9623), i.e(6088), i.e(6321)]).then(() => () => i(58702))),
              81788: () => s("default", "@rsgweb/locale-tools", !1, [1, "workspace:^"], () => Promise.all([i.e(9587), i.e(5859)]).then(() => () => i(12841))),
              9623: () => s("default", "react-router-dom", !1, [1, 6, 11, 2], () => Promise.all([i.e(5389), i.e(8429)]).then(() => () => i(15389))),
              4572: () => s("default", "clsx", !1, [1, 2, 1, 1], () => i.e(439).then(() => () => i(10439))),
              61913: () => s("default", "react", !1, [1, 18, 2, 0], () => i.e(8659).then(() => () => i(68659))),
              2918: () => s("default", "@rsgweb/rockstar-account", !1, [1, "workspace:^"], () => Promise.all([i.e(602), i.e(4237), i.e(8068), i.e(6188), i.e(9623), i.e(6088), i.e(2169)]).then(() => () => i(32169))),
              2973: () => s("default", "dompurify", !1, [1, 2, 4, 1], () => i.e(7785).then(() => () => i(27785))),
              92440: () => s("default", "@rsgweb/tina", !1, [1, "workspace:^"], () => Promise.all([i.e(5117), i.e(8429), i.e(6188), i.e(1788), i.e(6130), i.e(2918), i.e(3438)]).then(() => () => i(99747))),
              20820: () => s("default", "@foundry/react", !1, [1, 5, 13, 1], () => Promise.all([i.e(602), i.e(5021), i.e(1302), i.e(6937)]).then(() => () => i(41121))),
              61128: () => s("default", "react-intersection-observer", !1, [1, 9, 16, 0], () => i.e(8708).then(() => () => i(76327))),
              15310: () => s("default", "@rsgweb/modules-core-group-of-items", !1, [1, "workspace:^"], () => i.e(8503).then(() => () => i(90884))),
              20206: () => s("default", "@rsgweb/modules-core-engagement", !1, [1, "workspace:^"], () => Promise.all([i.e(5021), i.e(2424), i.e(5040)]).then(() => () => i(89600))),
              42602: () => s("default", "@rsgweb/modules-core-carousel", !1, [1, "workspace:^"], () => Promise.all([i.e(5021), i.e(8683), i.e(1858)]).then(() => () => i(89477))),
              57770: () => s("default", "react-jsx-parser", !1, [1, 2, 2, 2], () => i.e(3387).then(() => () => i(43387))),
              97384: () => s("default", "text-balancer", !1, [1, 1, 0, 5], () => i.e(5400).then(() => () => i(75400)))
            },
            p = {
              1125: [15310, 20206, 42602, 57770, 97384],
              1788: [81788],
              1913: [61913],
              2229: [62229],
              2440: [92440],
              2918: [2918],
              4572: [4572],
              5966: [95966],
              6188: [16188],
              6536: [2973],
              7409: [20820, 61128],
              8429: [18429],
              9623: [9623]
            },
            m = {};
          i.f.consumes = (e, a) => {
            i.o(p, e) && p[e].forEach(e => {
              if (i.o(u, e)) return a.push(u[e]);
              if (!m[e]) {
                var r = a => {
                  u[e] = 0, i.m[e] = r => {
                    delete i.c[e], r.exports = a()
                  }
                };
                m[e] = !0;
                var t = a => {
                  delete u[e], i.m[e] = r => {
                    throw delete i.c[e], a
                  }
                };
                try {
                  var d = h[e]();
                  d.then ? a.push(u[e] = d.then(r).catch(t)) : r(d)
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
                76: 1,
                884: 1,
                1057: 1,
                1125: 1,
                2358: 1,
                3438: 1,
                5040: 1,
                6069: 1,
                6536: 1,
                6937: 1,
                7409: 1,
                8427: 1,
                8503: 1,
                8683: 1,
                9116: 1
              } [a] && r.push(e[a] = (e => new Promise((a, r) => {
                var t = i.miniCssF(e),
                  d = i.p + t;
                if (((e, a) => {
                    for (var r = document.getElementsByTagName("link"), t = 0; t < r.length; t++) {
                      var d = (c = r[t]).getAttribute("data-href") || c.getAttribute("href");
                      if ("stylesheet" === c.rel && (d === e || d === a)) return c
                    }
                    var f = document.getElementsByTagName("style");
                    for (t = 0; t < f.length; t++) {
                      var c;
                      if ((d = (c = f[t]).getAttribute("data-href")) === e || d === a) return c
                    }
                  })(t, d)) return a();
                ((e, a, r, t, d) => {
                  var f = document.createElement("link");
                  f.rel = "stylesheet", f.type = "text/css", i.nc && (f.nonce = i.nc), f.onerror = f.onload = r => {
                    if (f.onerror = f.onload = null, "load" === r.type) t();
                    else {
                      var c = r && r.type,
                        n = r && r.target && r.target.href || a,
                        o = new Error("Loading CSS chunk " + e + " failed.\n(" + c + ": " + n + ")");
                      o.name = "ChunkLoadError", o.code = "CSS_CHUNK_LOAD_FAILED", o.type = c, o.request = n, f.parentNode && f.parentNode.removeChild(f), d(o)
                    }
                  }, f.href = a, document.head.appendChild(f)
                })(e, d, 0, a, r)
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
              else if (/^(2(229|440|918)|6(069|188|536)|8(42[79]|683)|1788|1913|4572|5040|5966|76|9623)$/.test(a)) e[a] = 0;
            else {
              var d = new Promise((r, d) => t = e[a] = [r, d]);
              r.push(t[2] = d);
              var f = i.p + i.u(a),
                c = new Error;
              i.l(f, r => {
                if (i.o(e, a) && (0 !== (t = e[a]) && (e[a] = void 0), t)) {
                  var d = r && ("load" === r.type ? "missing" : r.type),
                    f = r && r.target && r.target.src;
                  c.message = "Loading chunk " + a + " failed.\n(" + d + ": " + f + ")", c.name = "ChunkLoadError", c.type = d, c.request = f, t[1](c)
                }
              }, "chunk-" + a, a)
            }
          };
          var a = (a, r) => {
              var t, d, [f, c, n] = r,
                o = 0;
              if (f.some(a => 0 !== e[a])) {
                for (t in c) i.o(c, t) && (i.m[t] = c[t]);
                n && n(i)
              }
              for (a && a(r); o < f.length; o++) d = f[o], i.o(e, d) && e[d] && e[d][0](), e[d] = 0
            },
            r = self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || [];
          r.forEach(a.bind(null, 0)), r.push = a.bind(null, r.push.bind(r))
        })(), i.nc = void 0, i(93032), i(55974)
      })())
    }
  }
});