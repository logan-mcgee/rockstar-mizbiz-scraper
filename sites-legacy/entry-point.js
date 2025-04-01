! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "40ff0cff-dbd9-4935-bedf-43489831d18f", e._sentryDebugIdIdentifier = "sentry-dbid-40ff0cff-dbd9-4935-bedf-43489831d18f")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-legacy",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register(["@rockstargames/modules-core-videoplayer"], (function(e, a) {
  var f = {};
  return Object.defineProperty(f, "__esModule", {
    value: !0
  }), {
    setters: [function(e) {
      Object.keys(e).forEach((function(a) {
        f[a] = e[a]
      }))
    }],
    execute: function() {
      e((() => {
        var e, d, t, r, c, b, o = {
            24075: (e, a, f) => {
              (0, f(47387).w)(1)
            },
            47387: (e, a, f) => {
              const d = f(13099).y;
              a.w = function(e) {
                if (e || (e = 1), !f.y.meta || !f.y.meta.url) throw console.error("__system_context__", f.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                f.p = d(f.y.meta.url, e)
              }
            },
            45408: (e, a, f) => {
              f(24075)
            },
            13099: (e, a, f) => {
              a.y = function(e, a) {
                var f = document.createElement("a");
                f.href = e;
                for (var d = "/" === f.pathname[0] ? f.pathname : "/" + f.pathname, t = 0, r = d.length; t !== a && r >= 0;) "/" === d[--r] && t++;
                if (t !== a) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + a + ") is greater than the number of directories (" + t + ") in the URL path " + e);
                var c = d.slice(0, r + 1);
                return f.protocol + "//" + f.host + c
              };
              Number.isInteger
            },
            58639: (e, a, f) => {
              "use strict";
              var d = {
                  "./bootstrap": () => Promise.all([f.e(7868), f.e(9840), f.e(1426), f.e(4116), f.e(3088), f.e(5771), f.e(2229), f.e(9623), f.e(5966), f.e(2246), f.e(4281), f.e(5267), f.e(2440), f.e(842), f.e(2738), f.e(7145), f.e(8156), f.e(9679)]).then((() => () => f(9679))),
                  "./index": () => Promise.all([f.e(7868), f.e(9840), f.e(1426), f.e(4116), f.e(3088), f.e(2229), f.e(9623), f.e(5966), f.e(2246), f.e(4281), f.e(5267), f.e(2440), f.e(842), f.e(2738), f.e(7145), f.e(8156), f.e(9978)]).then((() => () => f(79978))),
                  "./site-routes/Bully": () => Promise.all([f.e(7868), f.e(9840), f.e(1426), f.e(4116), f.e(3088), f.e(2229), f.e(9623), f.e(5966), f.e(2246), f.e(4281), f.e(5267), f.e(2440), f.e(842), f.e(2738), f.e(7145), f.e(8156), f.e(2349), f.e(818)]).then((() => () => f(30818))),
                  "./site-routes/RedDeadRedemption": () => Promise.all([f.e(7868), f.e(9840), f.e(1426), f.e(4116), f.e(3088), f.e(2229), f.e(9623), f.e(5966), f.e(2246), f.e(4281), f.e(5267), f.e(2440), f.e(842), f.e(2738), f.e(7145), f.e(8156), f.e(2349), f.e(8830)]).then((() => () => f(58830))),
                  "./tina": () => Promise.all([f.e(7868), f.e(9840), f.e(1426), f.e(4116), f.e(3088), f.e(2229), f.e(9623), f.e(5966), f.e(2246), f.e(4281), f.e(5267), f.e(2440), f.e(842), f.e(2738), f.e(7145), f.e(8156), f.e(2349)]).then((() => () => f(22349)))
                },
                t = (e, a) => (f.R = a, a = f.o(d, e) ? d[e]() : Promise.resolve().then((() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                })), f.R = void 0, a),
                r = (e, a) => {
                  if (f.S) {
                    var d = "default",
                      t = f.S[d];
                    if (t && t !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return f.S[d] = e, f.I(d, a)
                  }
                };
              f.d(a, {
                get: () => t,
                init: () => r
              })
            },
            25136: e => {
              "use strict";
              e.exports = f
            }
          },
          n = {};

        function i(e) {
          var a = n[e];
          if (void 0 !== a) return a.exports;
          var f = n[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return o[e].call(f.exports, f, f.exports, i), f.loaded = !0, f.exports
        }
        return i.m = o, i.c = n, i.y = a, i.amdO = {}, i.n = e => {
          var a = e && e.__esModule ? () => e.default : () => e;
          return i.d(a, {
            a
          }), a
        }, d = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, i.t = function(a, f) {
          if (1 & f && (a = this(a)), 8 & f) return a;
          if ("object" == typeof a && a) {
            if (4 & f && a.__esModule) return a;
            if (16 & f && "function" == typeof a.then) return a
          }
          var t = Object.create(null);
          i.r(t);
          var r = {};
          e = e || [null, d({}), d([]), d(d)];
          for (var c = 2 & f && a;
            "object" == typeof c && !~e.indexOf(c); c = d(c)) Object.getOwnPropertyNames(c).forEach((e => r[e] = () => a[e]));
          return r.default = () => a, i.d(t, r), t
        }, i.d = (e, a) => {
          for (var f in a) i.o(a, f) && !i.o(e, f) && Object.defineProperty(e, f, {
            enumerable: !0,
            get: a[f]
          })
        }, i.f = {}, i.e = e => Promise.all(Object.keys(i.f).reduce(((a, f) => (i.f[f](e, a), a)), [])), i.u = e => "js/" + {
          131: "27783a4693edd4efb7823f15b4ee3f55",
          278: "8dbcf2207947fed492eaec3a427ae6d9",
          299: "3db260dbb113fb3522683525bdf495a1",
          314: "1a50626358165bf431dbb0cf4014b49e",
          364: "ed8300ec2a68b64115829ce8b5f3a286",
          377: "46e97a35f486d42d9825cd6f86292292",
          391: "a2f3196973174a6a8c9924e6878b809e",
          542: "97b30c8659883bf573ac6bcd3adbffcc",
          662: "5e07775bae1d8192408c5e982e6cec9e",
          721: "855633830973fd3a02976f1979af7459",
          818: "256aaf909c6517ac3b23e7e208a177d1",
          824: "35c49440984a9b0432516e32d7217229",
          842: "94f0753665feda0ed0b63fbc15e9c094",
          888: "0f997f81e22e1c99ec0a4074c59ac954",
          907: "ab94497d61e66dc2bd2515e6f36937f5",
          969: "24e872eed9e9b1198544a2ac5162e35d",
          1054: "8d69f36c1ffcafa17113eac3c702146e",
          1242: "b45c608d4be4f4f27283c6300e0ac0e7",
          1426: "9691d62cf81df1cf2dc2ab25580b3c59",
          1607: "4ae55ed1f6682b4ebf760ff09643642e",
          1673: "0b3750fefc2bb8a63c17fa029371c6db",
          1720: "573018b065ec2dda3e46d297385a5d5a",
          1822: "a7f9587b44dd08817c2526afffb6772c",
          1868: "194bcaa0734aaafcb7dafaaaef3bb30f",
          2024: "d06602bbb88e58ebe71ec66738825138",
          2156: "7c122b8d1c8af81238f9ba6a7eaea1e7",
          2171: "01ecb5a38d079c40a636ac755e07a321",
          2221: "199ffecc36a9314464db6221e4bd24cb",
          2229: "d2d18ecff8d4927cf46bf4f3aa674dc2",
          2243: "52d4464d33b0b6c0905b7078c599e210",
          2246: "8f25a6a63de13acd1753fae94c105c58",
          2347: "245dd1f7a2d1d9eb94bd5ecd4cca750b",
          2349: "76ab631b2cd9a1432e2b9e938b6598ca",
          2365: "c992fd7e387dfcd09e1166db05f6db2d",
          2398: "b3d7f85b94f4fd807595d50428d529d8",
          2440: "c30750136d805475662f793509d9f4b5",
          2466: "228a4e4120247792904557670cb7f3e2",
          2637: "314c098d8f331d591a214b281256656b",
          2642: "ae11cd580269c3ed0373657b5164b43d",
          2678: "a5f5aa901d8ca886069618d160f4b071",
          2738: "5e5c951d3b969fbec7eb30c5096b56cf",
          2772: "59b0b1c83610d63efa1799aff55d4424",
          2781: "c95700d87f6eecb9c2603a365abf560a",
          2817: "63b9af073713b961ec18d275804616b3",
          2864: "e922d6539425afe37aca309b6a74bf6d",
          2941: "8be9179b5f3f42bde8495a83ff2901c8",
          3034: "4235c9489c454191614dbc5ceea8f61f",
          3088: "76870980712642497c6c84948e606691",
          3197: "933d2c615e811752aeb3d147d1f4184d",
          3343: "c4f692da53e5107624c805822188d588",
          3370: "d93ef837bf9ca7fc6e4975ee72250384",
          3447: "96f8972296cb6f9d12221aea44b57526",
          3475: "596cd349507ef81a143e186b797682ce",
          3486: "e43769050954308301a997863f24e207",
          3622: "f7528b92fb795d49902a9bf26ab0e9ee",
          3697: "58b44c347fc7fc994f8ae9f510e1d7ee",
          3855: "216b801393576b6898179450a0e13b67",
          3885: "65a7a5b80f21e6eec949f4fcd4f2691b",
          3941: "c001fa82e9c8884cd8c72a615731f70e",
          4011: "5b5775f1983a3b5425f9ab1884583602",
          4018: "6472213faa1a19b09c55d5ae30e8d6ad",
          4054: "5075e1cd382c1c613ce3078f1761a1aa",
          4116: "62c27a3a6ab61d36a70e0897e4ce8419",
          4186: "b964195480894899e3a10a8d13d894d0",
          4220: "fa62b4f436789a32b912f0d8801f3563",
          4281: "deef2a08a50dec93ca2b55597dc45107",
          4528: "8ff7a362ed0c3bf895a6c9bb6d57d868",
          4621: "1b21df9783ca3e382fd55dcf432f0a88",
          4700: "eddd6dce420ba97d153c6007c39b3ffb",
          4710: "9a125c6d9aec2ceea2276f0c87f56172",
          4731: "09d95ad3b1a6900a9600031ce270c960",
          4799: "f1877efb125239dcfbe563f64976fd1b",
          4851: "d28614fcecb69bb548dee2e53c04be6d",
          4861: "4eadaf70e827b3891d0b4ec13e997791",
          4913: "abc424b6a0eada3d7777f2358d8ae40a",
          4977: "60a70f771abc9b3a9be99fe35b760d8e",
          5018: "3d8e780341ece433a652dc53c453cd76",
          5233: "2b510e3ed929b9177e16adc8c5b493d6",
          5247: "3f23e85095d01f7124af4d736b5cb24d",
          5254: "52e1c346a3e73ac8ff1807f4586d62e4",
          5259: "791dd81a3b7e074dc98be88cc72c73bb",
          5267: "7f653bac60bdffbb9d5c764a6af3ea8a",
          5440: "ce8541908ffc45e5f1ea4903f47fa9ae",
          5530: "ee34aa42c59e29d4343201ca83cf7810",
          5639: "43ba8583e6e810194976e07d6d11c585",
          5663: "d51b3cbea3e58be0f0386edaee701b22",
          5742: "75f8e2a833179fa0db55aba12bba526c",
          5771: "139ba5796cb8b449251e0eefe234a216",
          5794: "b5cde86c2ca0da0f545f48169824ae2e",
          5830: "d9d794195568dea90708ccc6bf647757",
          5832: "c44b9d00791fbbe68f87dea3eb3fe0ff",
          5966: "b5c6d9a6da4ebb8f1f9445c8972b7b0e",
          6267: "bde1f6cfa060163eb9061796e05c341c",
          6280: "a3ceeec01f664ead7db4684fc642d327",
          6285: "ec31806c45ec0177e3b24326273244ce",
          6361: "eadc6d4f0673c654bf8ad4f65271cd93",
          6383: "5c30dc83720a1b2f63c63a0707375487",
          6497: "a09c820eaf81e3c0edbaec0eed485b59",
          6664: "052af347dbb0648b50a87a2a6521bea3",
          6879: "f313668dca6004eb0956353b091f11cb",
          6891: "00ba0719732d882c9eff1819d465fdab",
          6940: "bd02a9747a7d511c5e768c37cd3698d2",
          6997: "4e7066aa168b53723d941118f016552a",
          7010: "507b953c0912f590f5143007edb37208",
          7039: "ac6621f9714d627f81e9b0ce28f7a2ca",
          7073: "ac4979610dbb909451cef5a72779775e",
          7145: "c1d60b87acc9fd2c37d8b07e9f5d676c",
          7436: "7874cd575bb2d8f005b968485570c21f",
          7452: "d3033e5f40140f0beca9ada92947b6be",
          7453: "26427796ee4913f094ade4634f66c7b8",
          7868: "6a793a99ca1cc73f59339699f20caf85",
          7970: "81a12feadeb91d354eb745cf866b1d6a",
          8156: "6f83c0620e2ba7eaa70e4549307b14ae",
          8272: "5819c1f5e5cc75a8a44582121281c5d2",
          8391: "d5212a8647d2af806a3aa270d24082fa",
          8714: "8ba19b81a09dfe099536c0c6d4a3ae90",
          8755: "23d7001a0d313db52a23a14c88ce1d2e",
          8764: "6f4f05f46fa450af94f42d1378e01196",
          8830: "bd052e63891ab68e4baf961823ad45db",
          8880: "92583102bab54a9f79996db2d3dd11c4",
          8970: "10362373f26174d25ee1798e7ae241be",
          9022: "87821d92896354859ce98dd40021db7b",
          9028: "44741b8c752ca25c0878951b4c3227d2",
          9126: "d0e9574ce408ad995fa2464d9a9e652e",
          9235: "98e20ef63bc431efe04e4547d9f55895",
          9377: "bee53a5594ee292a3d446abad9faa4ca",
          9474: "f9badf1cc3f0bde2d5dbce41cb797c13",
          9540: "76d341130faa49f5adf344e4659c215b",
          9615: "5852a872a02e732efad77e62ee4c5cc6",
          9623: "b331f66641cca59b2a0c2ff87e976a2b",
          9642: "1e960b180f6db8ad18b7612de6ae98f3",
          9679: "f520265b34929a868c6cb88cf59e3b5c",
          9840: "abbc5881a795e03651f9e32a2cefbf49",
          9936: "6964a0ef293d6ba8ee091267f609e11f",
          9964: "734c2857265b7de6414d46feca0383b6",
          9978: "273f5d9ab71bd86d43aca4cfb087cba4",
          9990: "70e49151b06179f21daf51a0db683621"
        } [e] + ".js", i.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), i.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), t = {}, r = "@rockstargames/sites-legacy:", i.l = (e, a, f, d) => {
          if (t[e]) t[e].push(a);
          else {
            var c, b;
            if (void 0 !== f)
              for (var o = document.getElementsByTagName("script"), n = 0; n < o.length; n++) {
                var s = o[n];
                if (s.getAttribute("src") == e || s.getAttribute("data-webpack") == r + f) {
                  c = s;
                  break
                }
              }
            c || (b = !0, (c = document.createElement("script")).charset = "utf-8", c.timeout = 120, i.nc && c.setAttribute("nonce", i.nc), c.setAttribute("data-webpack", r + f), c.src = e), t[e] = [a];
            var l = (a, f) => {
                c.onerror = c.onload = null, clearTimeout(u);
                var d = t[e];
                if (delete t[e], c.parentNode && c.parentNode.removeChild(c), d && d.forEach((e => e(f))), a) return a(f)
              },
              u = setTimeout(l.bind(null, void 0, {
                type: "timeout",
                target: c
              }), 12e4);
            c.onerror = l.bind(null, c.onerror), c.onload = l.bind(null, c.onload), b && document.head.appendChild(c)
          }
        }, i.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, i.nmd = e => (e.paths = [], e.children || (e.children = []), e), c = {
          2349: [17523],
          8156: [31879]
        }, b = {
          17523: ["default", "./tina", 25136],
          31879: ["default", "./index", 25136]
        }, i.f.remotes = (e, a) => {
          i.o(c, e) && c[e].forEach((e => {
            var f = i.R;
            f || (f = []);
            var d = b[e];
            if (!(f.indexOf(d) >= 0)) {
              if (f.push(d), d.p) return a.push(d.p);
              var t = a => {
                  a || (a = new Error("Container missing")), "string" == typeof a.message && (a.message += '\nwhile loading "' + d[1] + '" from ' + d[2]), i.m[e] = () => {
                    throw a
                  }, d.p = 0
                },
                r = (e, f, r, c, b, o) => {
                  try {
                    var n = e(f, r);
                    if (!n || !n.then) return b(n, c, o);
                    var i = n.then((e => b(e, c)), t);
                    if (!o) return i;
                    a.push(d.p = i)
                  } catch (e) {
                    t(e)
                  }
                },
                c = (e, a, t) => r(a.get, d[1], f, 0, o, t),
                o = a => {
                  d.p = 1, i.m[e] = e => {
                    e.exports = a()
                  }
                };
              r(i, d[2], 0, 0, ((e, a, f) => e ? r(i.I, d[0], 0, e, c, f) : t()), 1)
            }
          }))
        }, (() => {
          i.S = {};
          var e = {},
            a = {};
          i.I = (f, d) => {
            d || (d = []);
            var t = a[f];
            if (t || (t = a[f] = {}), !(d.indexOf(t) >= 0)) {
              if (d.push(t), e[f]) return e[f];
              i.o(i.S, f) || (i.S[f] = {});
              var r = i.S[f],
                c = "@rockstargames/sites-legacy",
                b = (e, a, f, d) => {
                  var t = r[e] = r[e] || {},
                    b = t[a];
                  (!b || !b.loaded && (!d != !b.eager ? d : c > b.from)) && (t[a] = {
                    get: f,
                    from: c,
                    eager: !!d
                  })
                },
                o = [];
              return "default" === f && (b("@rsgweb/locale-tools", "1.0.0", (() => Promise.all([i.e(2024), i.e(2229), i.e(1673)]).then((() => () => i(85950))))), b("@rsgweb/modules-core-hero", "0.0.0", (() => Promise.all([i.e(2229), i.e(9623), i.e(5966), i.e(4281), i.e(2440), i.e(842), i.e(364), i.e(2781)]).then((() => () => i(29592))))), b("@rsgweb/modules-core-highlights", "0.0.0", (() => Promise.all([i.e(4116), i.e(2229), i.e(4281), i.e(2440), i.e(2738), i.e(6497), i.e(9964)]).then((() => () => i(86497))))), b("@rsgweb/rockstar-account", "0.0.0", (() => Promise.all([i.e(7868), i.e(9840), i.e(1720), i.e(2229), i.e(9623), i.e(5966), i.e(2246), i.e(391)]).then((() => () => i(2772))))), b("@rsgweb/tina", "0.0.0", (() => Promise.all([i.e(7868), i.e(1426), i.e(2229), i.e(5966), i.e(4281), i.e(5267), i.e(8714)]).then((() => () => i(69540))))), b("@rsgweb/utils", "1.0.0", (() => Promise.all([i.e(7868), i.e(9840), i.e(2229), i.e(9623), i.e(2246), i.e(3855)]).then((() => () => i(46323))))), b("focus-trap-react", "10.2.3", (() => Promise.all([i.e(4977), i.e(2229), i.e(7145)]).then((() => () => i(24977))))), b("framer-motion", "10.16.4", (() => Promise.all([i.e(542), i.e(2229)]).then((() => () => i(10542))))), b("framer-motion", "10.16.4", (() => Promise.all([i.e(2637), i.e(2229)]).then((() => () => i(72637))))), b("framer-motion", "7.10.3", (() => Promise.all([i.e(9235), i.e(2229)]).then((() => () => i(19235))))), b("graphql", "16.10.0", (() => i.e(5440).then((() => () => i(55440))))), b("prop-types", "15.8.1", (() => i.e(2817).then((() => () => i(72817))))), b("react-dom", "18.2.0", (() => Promise.all([i.e(5794), i.e(2229)]).then((() => () => i(83413))))), b("react-intersection-observer", "9.10.3", (() => Promise.all([i.e(2229), i.e(6383)]).then((() => () => i(56383))))), b("react-router-dom", "6.17.0", (() => Promise.all([i.e(4018), i.e(2229)]).then((() => () => i(54018))))), b("react", "18.2.0", (() => i.e(3447).then((() => () => i(13447))))), (e => {
                var a = e => {
                  return a = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(a));
                  var a
                };
                try {
                  var t = i(25136);
                  if (!t) return;
                  var r = e => e && e.init && e.init(i.S[f], d);
                  if (t.then) return o.push(t.then(r, a));
                  var c = r(t);
                  if (c && c.then) return o.push(c.catch(a))
                } catch (e) {
                  a(e)
                }
              })()), o.length ? e[f] = Promise.all(o).then((() => e[f] = 1)) : e[f] = 1
            }
          }
        })(), (() => {
          var e;
          i.g.importScripts && (e = i.g.location + "");
          var a = i.g.document;
          if (!e && a && (a.currentScript && (e = a.currentScript.src), !e)) {
            var f = a.getElementsByTagName("script");
            if (f.length)
              for (var d = f.length - 1; d > -1 && (!e || !/^http(s?):/.test(e));) e = f[d--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), i.p = e
        })(), (() => {
          var e = e => {
              var a = e => e.split(".").map((e => +e == e ? +e : e)),
                f = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
                d = f[1] ? a(f[1]) : [];
              return f[2] && (d.length++, d.push.apply(d, a(f[2]))), f[3] && (d.push([]), d.push.apply(d, a(f[3]))), d
            },
            a = (f, d) => {
              if (0 in f) {
                d = e(d);
                var t = f[0],
                  r = t < 0;
                r && (t = -t - 1);
                for (var c = 0, b = 1, o = !0;; b++, c++) {
                  var n, i, s = b < f.length ? (typeof f[b])[0] : "";
                  if (c >= d.length || "o" == (i = (typeof(n = d[c]))[0])) return !o || ("u" == s ? b > t && !r : "" == s != r);
                  if ("u" == i) {
                    if (!o || "u" != s) return !1
                  } else if (o)
                    if (s == i)
                      if (b <= t) {
                        if (n != f[b]) return !1
                      } else {
                        if (r ? n > f[b] : n < f[b]) return !1;
                        n != f[b] && (o = !1)
                      }
                  else if ("s" != s && "n" != s) {
                    if (r || b <= t) return !1;
                    o = !1, b--
                  } else {
                    if (b <= t || i < s != r) return !1;
                    o = !1
                  } else "s" != s && "n" != s && (o = !1, b--)
                }
              }
              var l = [],
                u = l.pop.bind(l);
              for (c = 1; c < f.length; c++) {
                var h = f[c];
                l.push(1 == h ? u() | u() : 2 == h ? u() & u() : h ? a(h, d) : !u())
              }
              return !!u()
            },
            f = (f, d, t) => {
              var r = f[d];
              return (d = Object.keys(r).reduce(((f, d) => !a(t, d) || f && !((a, f) => {
                a = e(a), f = e(f);
                for (var d = 0;;) {
                  if (d >= a.length) return d < f.length && "u" != (typeof f[d])[0];
                  var t = a[d],
                    r = (typeof t)[0];
                  if (d >= f.length) return "u" == r;
                  var c = f[d],
                    b = (typeof c)[0];
                  if (r != b) return "o" == r && "n" == b || "s" == b || "u" == r;
                  if ("o" != r && "u" != r && t != c) return t < c;
                  d++
                }
              })(f, d) ? f : d), 0)) && r[d]
            },
            d = (e => function(a, f, d, t) {
              var r = i.I(a);
              return r && r.then ? r.then(e.bind(e, a, i.S[a], f, d, t)) : e(a, i.S[a], f, d, t)
            })(((e, a, d, t, r) => {
              var c = a && i.o(a, d) && f(a, d, t);
              return c ? (e => (e.loaded = 1, e.get()))(c) : r()
            })),
            t = {},
            r = {
              62229: () => d("default", "react", [1, 18, 2, 0], (() => i.e(3447).then((() => () => i(13447))))),
              9623: () => d("default", "react-router-dom", [1, 6, 11, 2], (() => i.e(4018).then((() => () => i(54018))))),
              95966: () => d("default", "@rsgweb/utils", [1, "workspace:^"], (() => Promise.all([i.e(7868), i.e(9840), i.e(9623), i.e(2246)]).then((() => () => i(46323))))),
              16565: () => d("default", "graphql", [1, 16, 9, 0], (() => i.e(5440).then((() => () => i(55440))))),
              2918: () => d("default", "@rsgweb/rockstar-account", [1, "workspace:^"], (() => Promise.all([i.e(7868), i.e(9840), i.e(1720), i.e(9623), i.e(5966), i.e(2246), i.e(2772)]).then((() => () => i(2772))))),
              81788: () => d("default", "@rsgweb/locale-tools", [1, "workspace:^"], (() => Promise.all([i.e(2024), i.e(4054)]).then((() => () => i(85950))))),
              44853: () => d("default", "react-dom", [1, 18, 2, 0], (() => i.e(5794).then((() => () => i(83413))))),
              92440: () => d("default", "@rsgweb/tina", [1, "workspace:^"], (() => Promise.all([i.e(7868), i.e(1426), i.e(5966), i.e(5267), i.e(9540)]).then((() => () => i(69540))))),
              90660: () => d("default", "framer-motion", [1, 10, 12, 18], (() => i.e(9235).then((() => () => i(19235))))),
              22738: () => d("default", "react-intersection-observer", [1, 9, 10, 3], (() => i.e(8764).then((() => () => i(56383))))),
              57145: () => d("default", "prop-types", [1, 15, 8, 1], (() => i.e(2817).then((() => () => i(72817))))),
              2765: () => d("default", "focus-trap-react", [1, 10, 2, 3], (() => i.e(4977).then((() => () => i(24977))))),
              82849: () => d("default", "framer-motion", [1, 10, 12, 18], (() => i.e(2637).then((() => () => i(72637))))),
              84590: () => d("default", "@rsgweb/modules-core-hero", [1, "workspace:^"], (() => i.e(364).then((() => () => i(29592))))),
              87330: () => d("default", "@rsgweb/modules-core-highlights", [1, "workspace:^"], (() => i.e(6497).then((() => () => i(86497))))),
              87052: () => d("default", "framer-motion", [1, 10, 12, 18], (() => i.e(542).then((() => () => i(10542)))))
            },
            c = {
              842: [90660],
              2229: [62229],
              2246: [16565],
              2440: [92440],
              2738: [22738],
              4281: [2918, 81788],
              5267: [44853],
              5966: [95966],
              6497: [87052],
              7145: [57145],
              8156: [2765, 82849, 84590, 87330],
              9623: [9623]
            },
            b = {};
          i.f.consumes = (e, a) => {
            i.o(c, e) && c[e].forEach((e => {
              if (i.o(t, e)) return a.push(t[e]);
              if (!b[e]) {
                var f = a => {
                  t[e] = 0, i.m[e] = f => {
                    delete i.c[e], f.exports = a()
                  }
                };
                b[e] = !0;
                var d = a => {
                  delete t[e], i.m[e] = f => {
                    throw delete i.c[e], a
                  }
                };
                try {
                  var c = r[e]();
                  c.then ? a.push(t[e] = c.then(f).catch(d)) : f(c)
                } catch (e) {
                  d(e)
                }
              }
            }))
          }
        })(), (() => {
          i.b = document.baseURI || self.location.href;
          var e = {
            8106: 0
          };
          i.f.j = (a, f) => {
            var d = i.o(e, a) ? e[a] : void 0;
            if (0 !== d)
              if (d) f.push(d[2]);
              else if (/^(2(229|440|738)|4281|5966|7145|9623)$/.test(a)) e[a] = 0;
            else {
              var t = new Promise(((f, t) => d = e[a] = [f, t]));
              f.push(d[2] = t);
              var r = i.p + i.u(a),
                c = new Error;
              i.l(r, (f => {
                if (i.o(e, a) && (0 !== (d = e[a]) && (e[a] = void 0), d)) {
                  var t = f && ("load" === f.type ? "missing" : f.type),
                    r = f && f.target && f.target.src;
                  c.message = "Loading chunk " + a + " failed.\n(" + t + ": " + r + ")", c.name = "ChunkLoadError", c.type = t, c.request = r, d[1](c)
                }
              }), "chunk-" + a, a)
            }
          };
          var a = (a, f) => {
              var d, t, r = f[0],
                c = f[1],
                b = f[2],
                o = 0;
              if (r.some((a => 0 !== e[a]))) {
                for (d in c) i.o(c, d) && (i.m[d] = c[d]);
                b && b(i)
              }
              for (a && a(f); o < r.length; o++) t = r[o], i.o(e, t) && e[t] && e[t][0](), e[t] = 0
            },
            f = self.webpackChunk_rockstargames_sites_legacy = self.webpackChunk_rockstargames_sites_legacy || [];
          f.forEach(a.bind(null, 0)), f.push = a.bind(null, f.push.bind(f))
        })(), i.nc = void 0, i(45408), i(58639)
      })())
    }
  }
}));