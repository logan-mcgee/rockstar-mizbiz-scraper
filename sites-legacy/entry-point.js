! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "3513e17d-84d3-445a-8a54-08cf1f045919", e._sentryDebugIdIdentifier = "sentry-dbid-3513e17d-84d3-445a-8a54-08cf1f045919")
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
                  "./bootstrap": () => Promise.all([f.e(7868), f.e(9840), f.e(1426), f.e(4116), f.e(3755), f.e(5771), f.e(2229), f.e(9623), f.e(5966), f.e(2246), f.e(4281), f.e(5267), f.e(2440), f.e(842), f.e(2738), f.e(7145), f.e(8156), f.e(9679)]).then((() => () => f(9679))),
                  "./index": () => Promise.all([f.e(7868), f.e(9840), f.e(1426), f.e(4116), f.e(3755), f.e(2229), f.e(9623), f.e(5966), f.e(2246), f.e(4281), f.e(5267), f.e(2440), f.e(842), f.e(2738), f.e(7145), f.e(8156), f.e(9978)]).then((() => () => f(79978))),
                  "./site-routes/Bully": () => Promise.all([f.e(7868), f.e(9840), f.e(1426), f.e(4116), f.e(3755), f.e(2229), f.e(9623), f.e(5966), f.e(2246), f.e(4281), f.e(5267), f.e(2440), f.e(842), f.e(2738), f.e(7145), f.e(8156), f.e(2349), f.e(818)]).then((() => () => f(30818))),
                  "./site-routes/RedDeadRedemption": () => Promise.all([f.e(7868), f.e(9840), f.e(1426), f.e(4116), f.e(3755), f.e(2229), f.e(9623), f.e(5966), f.e(2246), f.e(4281), f.e(5267), f.e(2440), f.e(842), f.e(2738), f.e(7145), f.e(8156), f.e(2349), f.e(8830)]).then((() => () => f(58830))),
                  "./tina": () => Promise.all([f.e(7868), f.e(9840), f.e(1426), f.e(4116), f.e(3755), f.e(2229), f.e(9623), f.e(5966), f.e(2246), f.e(4281), f.e(5267), f.e(2440), f.e(842), f.e(2738), f.e(7145), f.e(8156), f.e(2349)]).then((() => () => f(22349)))
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
          131: "ec50aff0b221d0cb5a7439eafdd874c3",
          278: "7ed624d528ccf3a46c4d34472df5a6e7",
          299: "778c303538e75c3804007ac02b0a4332",
          314: "68aef8aaadbe3fa3016865521a757f50",
          364: "09f64ab3d34f8547a477998156fee1a2",
          377: "33be0924737726991d8372d3e4ea1f2f",
          391: "91ce4d735d28ac12351c9b0c72e20f84",
          542: "e0c2d86f2bea4332dc29939e3b215710",
          662: "2068e39740fb53865178c8eec06f650b",
          721: "1cd9511f4577b57188c86fee0f292bfe",
          818: "7993555e7c88bd9a292222723344bf72",
          824: "90118e762344d4105130d2c443df9a9c",
          842: "183a1067cec6990545de44882ce1f22a",
          888: "990cdeda2a7526ef8792bc63d6351c39",
          907: "fcbcff50ed8f872c27df5347fc6030a8",
          969: "822099856fc917f494c7565620c1f989",
          1054: "7eed3f00e6a384542529c5c665310e97",
          1242: "0377382dab77086b3124dc27f82029b0",
          1426: "bf1a9006f12377141ca0036584378158",
          1607: "44bfc79e52925a516d54604be312bc56",
          1673: "4320d6e81a9579d1da768be5ab035202",
          1720: "f085d358bd746c52e1950406f0dde6c6",
          1822: "292ec4b75313a89cb3fe2376809e6882",
          1868: "9c5eb582c7c566e62e6e9d06816330b5",
          2024: "18d008c77b31164f8c30bd8aae29332a",
          2156: "15687d2085501fbf2dafd04247535ea2",
          2171: "3d6441c229461ea468d839f69915dd5f",
          2221: "82337d0c44fc78df634bb9babdbe7000",
          2229: "d2d18ecff8d4927cf46bf4f3aa674dc2",
          2243: "e96d48df231fc4dcea0690276b24bec3",
          2246: "4aa9c32a10d02b628f9c7f4dfb14f1ea",
          2347: "9f0d660f3ca43d58741a02f20edcf017",
          2349: "551f6317703a384dfbab6d22bc26016f",
          2365: "0496ec3ccc98ed395c81f80b941f3dbc",
          2398: "430d3bd55919909fc7bec6ecc79c17d9",
          2440: "c30750136d805475662f793509d9f4b5",
          2466: "a3235fa091c172bd930fce0898dde821",
          2637: "31d6ef80f11803b9fb2b56b1bb81bd4e",
          2642: "24a322c2c9b97030ecd05f5912a04e60",
          2678: "f3c72908e7dfc34b6b917ca53dffebbb",
          2738: "5e5c951d3b969fbec7eb30c5096b56cf",
          2772: "f5cfc0356db8310f8d91e98ff74c830d",
          2781: "23fe2255c8fb88df1d4edf0f704c322b",
          2817: "01e88e4f3ff538fea3bb3944975f2572",
          2864: "3cc7da9e71d2e650c2f60c3bf3280d1d",
          2941: "28b12517fe5269d2ee9f3ee46b5ce259",
          3034: "98de1fee003b89c7b57be8b4201c82b5",
          3197: "70b9193c1a73a85f7138d6caeba9787b",
          3343: "756520330bc0577efe05bd431b087af4",
          3370: "8e90435fdf59d4d8534f46dd0b6c2354",
          3447: "a40cd521676e61fab968b59f7ac44491",
          3475: "6a8c1ff490e11c52cbba0b21a858faa5",
          3486: "bfe43f7d7d54f64cae15fa5e2a2b94a9",
          3622: "7d7c066475a45d7c88f63c6a8666ad7b",
          3697: "4736fad41effb27fce64da4578f5b75d",
          3755: "235aa238470f6601296ee8fb89df75a1",
          3855: "2018fafdb75bddbdda18f685a51c2540",
          3885: "c10ace771e5bc5b765b46d79a301cb2f",
          3941: "c4ed43ed5d7281bcfd5113347ef5eeb3",
          4011: "f7c1ecb8831dc173e369e3dde5b6ef90",
          4018: "c2f999138e9b0a3517f4b30d4b65e7c6",
          4054: "52df2295bd1bc53dc9834c4a1e2a7fb5",
          4116: "31ce9352d7aefbde7c3237382dd9befb",
          4186: "a3fe7ab24e6c43e77b464fdc7ab5a845",
          4220: "87a73c469d8c26e54f99979d1f3db579",
          4281: "deef2a08a50dec93ca2b55597dc45107",
          4528: "aa599d579129ce25da760aa3fc791d67",
          4621: "43bf694fdc4a04884bf5868e1f973fae",
          4700: "71112bdfaeacedf6508ed7315ddc0ef9",
          4710: "1414b333c295aad94bafcc9e31b10e7b",
          4731: "f6d9cd8e31b1e54cf8af1101064c8679",
          4799: "79c0f7d6230c530389ae059d53ef01fa",
          4851: "55aab3be5ff327cc6598c46cd22dc3e5",
          4861: "a53e9f0ddc71f23211ba8667bfeb493b",
          4913: "f0e45714a93f30272c0a0a6095ab4647",
          4977: "81f864bcb3777385d85b2412f05ea0ac",
          5018: "01150746b604e8c92e7721f5718e0f76",
          5233: "d5cc42dcec83627e30983c3e549c940c",
          5247: "b26fa8b885f14251e6f9e918ca13d01a",
          5254: "82c00d71a28ba69a778fe4de71bae4b0",
          5259: "0925efa902b3cf841bd725dc745debe1",
          5267: "de1221a7513f403a74236c72dc723359",
          5440: "7638544d814e8cd21adff5e4e0815737",
          5530: "904761d564e003329982603d9ace1018",
          5639: "6a983e2015f5421dc735cbe932e99367",
          5663: "35800f31250e352a521f449c45540930",
          5742: "b262b7af9f1a8c804dd5b58df63cc7a8",
          5771: "07b4bcd237766b1091918d25b26e7eb3",
          5794: "d6a2a415fa599fe78fb1d93b43bf2a29",
          5830: "9dcbf6d28ab648aeee2ecd5b28a7f243",
          5832: "4a32c4a337fb2c015a0c23a2d5fd044f",
          5966: "b5c6d9a6da4ebb8f1f9445c8972b7b0e",
          6267: "2029579d037c69487f7305b0d6df969a",
          6280: "2578fb71d34a133d33cca479ee5d38ce",
          6285: "0f5ca35a3bed64762bd5277980063e90",
          6361: "afa78a0b5a3d910752df9f382369979b",
          6383: "14571ed89bd641683f5ff1de576e2b6c",
          6664: "46f4f3d307cb0ed1343ad2bf80716f3e",
          6879: "5850bc7fb9279e967f7a8a4f8d2c7c0d",
          6891: "2276b75862c5251c733014d9a523a0fe",
          6940: "12e7b8fc8f64ff6a326bee0d920e765e",
          6997: "fe5ab633f3616eb2eef809eb68137cf7",
          7010: "ae7bdf53d8f8f0b119d07a3e16786aea",
          7039: "2e639f2b67c62f6048810a61ef6383a1",
          7073: "e89b5b710a98e9f7df7e1a07e814dda9",
          7145: "c1d60b87acc9fd2c37d8b07e9f5d676c",
          7436: "be1307fdd6b4a7fa3841987e4f28c93f",
          7452: "f5048f4154f95ed3c8b211ae774652b5",
          7453: "014d6788c1943bc6adc2af7c6b37668a",
          7783: "38dc6a539ccb88393f3e31e853d68599",
          7868: "9fdef6aa6f3e9b2b1361fad0d32ae568",
          7970: "48e3e85478ac6de978bd9e88184b779e",
          8156: "12032e2cd39f3124c5b300c02ac5705d",
          8272: "e32cb30d6c1d94eb43a4d352a61b179f",
          8391: "25b38de0dc08c938c3a901b7548d7d1c",
          8714: "0cc38d456cc6c630aae66606ba7eb04f",
          8755: "dc5e73f752adc070f3db13d4c3c9d825",
          8764: "c0457529a5ef2101c91aef8a92e51810",
          8830: "c2b077baf8afe8ea9961f6595781c95f",
          8880: "c33ee7cbd89e62286840987c34bcaff6",
          8970: "8258aeaf6266cf2b99830f9a24044973",
          9022: "bd01065542deffa6ba7f8e54d712a626",
          9028: "efa66574fefc937cea84bec4e08b9b26",
          9126: "ffccd77323b7dfe0776029813de32d08",
          9235: "f58b3b777e365a61fa3b318b253c1cc1",
          9377: "577f18dcae20d7926ef5d30c82f44bcf",
          9474: "a4d3723cd8af09ad9b3254225c14ca54",
          9540: "e578cd2fbef863cf6cb4a32e7383e831",
          9615: "85892a4411a779a08c7a774fda387abe",
          9623: "b331f66641cca59b2a0c2ff87e976a2b",
          9642: "dfed5a77717a81ee186c28bc0326af0f",
          9679: "8abe8fc51d57440a8b19e3cbc48b185a",
          9840: "22c28005d5ed4cf6bb6e02b1e56de010",
          9936: "3933e442f7f2aec929f1b7a185960f6f",
          9964: "519cea7d03e29fb143aa3564340e1036",
          9978: "485d0857b26144dc6b442ffc50eae313",
          9990: "f92afe9861bc86c98250c19187b61aaf"
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
              return "default" === f && (b("@rsgweb/locale-tools", "1.0.0", (() => Promise.all([i.e(2024), i.e(2229), i.e(1673)]).then((() => () => i(85950))))), b("@rsgweb/modules-core-hero", "0.0.0", (() => Promise.all([i.e(2229), i.e(9623), i.e(5966), i.e(4281), i.e(2440), i.e(842), i.e(364), i.e(2781)]).then((() => () => i(29592))))), b("@rsgweb/modules-core-highlights", "0.0.0", (() => Promise.all([i.e(4116), i.e(2229), i.e(4281), i.e(2440), i.e(2738), i.e(7783), i.e(9964)]).then((() => () => i(27783))))), b("@rsgweb/rockstar-account", "0.0.0", (() => Promise.all([i.e(7868), i.e(9840), i.e(1720), i.e(2229), i.e(9623), i.e(5966), i.e(2246), i.e(391)]).then((() => () => i(2772))))), b("@rsgweb/tina", "0.0.0", (() => Promise.all([i.e(7868), i.e(1426), i.e(2229), i.e(5966), i.e(4281), i.e(5267), i.e(8714)]).then((() => () => i(69540))))), b("@rsgweb/utils", "1.0.0", (() => Promise.all([i.e(7868), i.e(9840), i.e(2229), i.e(9623), i.e(2246), i.e(3855)]).then((() => () => i(46323))))), b("focus-trap-react", "10.2.3", (() => Promise.all([i.e(4977), i.e(2229), i.e(7145)]).then((() => () => i(24977))))), b("framer-motion", "10.16.4", (() => Promise.all([i.e(542), i.e(2229)]).then((() => () => i(10542))))), b("framer-motion", "10.16.4", (() => Promise.all([i.e(2637), i.e(2229)]).then((() => () => i(72637))))), b("framer-motion", "7.10.3", (() => Promise.all([i.e(9235), i.e(2229)]).then((() => () => i(19235))))), b("graphql", "16.10.0", (() => i.e(5440).then((() => () => i(55440))))), b("prop-types", "15.8.1", (() => i.e(2817).then((() => () => i(72817))))), b("react-dom", "18.2.0", (() => Promise.all([i.e(5794), i.e(2229)]).then((() => () => i(83413))))), b("react-intersection-observer", "9.10.3", (() => Promise.all([i.e(2229), i.e(6383)]).then((() => () => i(56383))))), b("react-router-dom", "6.17.0", (() => Promise.all([i.e(4018), i.e(2229)]).then((() => () => i(54018))))), b("react", "18.2.0", (() => i.e(3447).then((() => () => i(13447))))), (e => {
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
              87330: () => d("default", "@rsgweb/modules-core-highlights", [1, "workspace:^"], (() => i.e(7783).then((() => () => i(27783))))),
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
              7145: [57145],
              7783: [87052],
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