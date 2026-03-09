try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "76ddfd77-ced9-4859-854f-78e710597fb0", e._sentryDebugIdIdentifier = "sentry-dbid-76ddfd77-ced9-4859-854f-78e710597fb0")
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
                  "./index": () => Promise.all([r.e(602), r.e(4237), r.e(4488), r.e(539), r.e(5117), r.e(8505), r.e(5827), r.e(1302), r.e(5345), r.e(5550), r.e(2229), r.e(8429), r.e(6188), r.e(5966), r.e(1788), r.e(9623), r.e(4572), r.e(6088), r.e(6130), r.e(6069), r.e(1913), r.e(2918), r.e(6536), r.e(2440), r.e(2358), r.e(3774), r.e(76), r.e(1125)]).then(() => () => r(28674)),
                  "./tinaBlockTemplates": () => Promise.all([r.e(5117), r.e(8661), r.e(2229), r.e(8429), r.e(6188), r.e(5966), r.e(1788), r.e(4572), r.e(6130), r.e(6069), r.e(6536), r.e(2358), r.e(3410)]).then(() => () => r(4984)),
                  "./types": () => Promise.all([r.e(602), r.e(4237), r.e(4488), r.e(539), r.e(5117), r.e(8505), r.e(5827), r.e(1302), r.e(5345), r.e(5550), r.e(2229), r.e(8429), r.e(6188), r.e(5966), r.e(1788), r.e(9623), r.e(4572), r.e(6088), r.e(6130), r.e(6069), r.e(1913), r.e(2918), r.e(6536), r.e(2440), r.e(2358), r.e(3774), r.e(76), r.e(1125)]).then(() => () => r(76808))
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
          68: "9603ab6a7375d19639bfbc00240eca93",
          131: "4670dd579735f8b0ee7dd97b7a19a73f",
          173: "2352ff61d88aeb81e1224e1c029ffc15",
          278: "fe71f087659839636d375cad8ed182ef",
          299: "672c7712ba6522b5faea78b88d6c02f2",
          314: "b3fb3a0f931f85ff3f7852afa74dbca6",
          439: "909e2b3f02271543f72d0ffa49e3a1c6",
          539: "a12554291f00726d38b47a83c5242d51",
          602: "4d0c453acf85bc2187521bc208a367a7",
          662: "867224bfd244ab10a722154077647781",
          824: "be94a547e5c1b98eccb99310bd1cb159",
          884: "38d02d18f2ec09b1d581b8c0abd45c8f",
          907: "3deeb29d9e15b5f46bd61d0d4139f22b",
          1054: "ac595c9534398f2c2f50bd721261415b",
          1057: "5194bc4b3a87cf6d6bada863327f2f55",
          1098: "f83856023a7b098cdf026863040cee32",
          1125: "2d38873e727083ced31bc2257359069a",
          1242: "9ee03cebef26ec1483dc523763b2dca7",
          1302: "fb1eaba0564a208bad414f6ea565ee53",
          1758: "08fc1bac8251215113fd00c642ce8fec",
          1822: "520427046a94d6ac5cd2767b9ae09f37",
          1858: "c45bbf929795cea1fb9bea65744789f5",
          1868: "9bc58d03c023a60b8e2c3d30cb293bf5",
          2156: "8963572926c05afd3eb946bf1f707023",
          2169: "e34a42df19450b05f7d5c40c97e664a6",
          2171: "d6ab760305a90d06e594daa692b7ff0b",
          2221: "5e6400c6245f83f3c27a84e552dfc621",
          2234: "3a7ca2a2b13317a2903065bcf34f286e",
          2243: "758817af7528d9de6c5660691dde6629",
          2306: "45ecfe90c1de3233c214560c58b7b1f4",
          2347: "6311b818d9825312b34580146e50b9d2",
          2358: "9c04cd16160d147b4d3da826381e5df6",
          2365: "9a0f82a188c766d5adab4036db9698a4",
          2398: "428caab44f3f0d03fda3067b8d5d0aa9",
          2424: "5c12d05c0eea3aac61a52ce4034b2a9c",
          2466: "e00ba64ab4e68a5f5864f4b156f5b3cd",
          2642: "fd4f0fdee66874b2cc38b079d7ca5b0c",
          2678: "b8d8bca0a03a90c12ae26151885fd306",
          2864: "d8868fa8129bfb949f40fe301eb3e287",
          3034: "9a5f55efbc9d53a319a5e6ce2c169666",
          3197: "0938fb158aae16ed8c0f8c6f8f7843f0",
          3343: "32d0b56c9ee70d20ca8cebb6d547550f",
          3370: "1be25119acb4fdcf13936a9d7d7340ac",
          3387: "5246581592928194c497cffeb10a0d2c",
          3410: "dc5c9e438663ef247636419874cc74c3",
          3438: "79a7e125facbb86cdb2e07d162d59e3a",
          3475: "d397cb29538feb1864a1f4f8231daf7c",
          3486: "f5afc1b047ba8846a75a4952cd5653c5",
          3697: "9915996c95c9c1b9143c878f58a5a7a3",
          3774: "80c0921dfe101e1ce93edd13377d5421",
          3885: "2b0dd17be878a94b87253636fe038bd1",
          3896: "c2901ab9f1a3dff727295814359d2712",
          3941: "ad79c5f17e9dc856f5dab4e1cfa43664",
          4011: "a99c1ac95cc2ec1992cda973295d22b2",
          4237: "8489245696247457df74f65f98efedf3",
          4488: "905f07fbeda48d7fe8a40814f91a6c57",
          4528: "7fbbcd7b52d8bf0f9890c03318b7d0a9",
          4550: "5ae87c5ba97b1cfe8e3ca77802d27265",
          4578: "be052860ff0b33db4ba0b5d8cbea5757",
          4621: "3f048379518b152d57483999563db2c7",
          4700: "fd9d44355d9a81e8d6edb28a0f6337e1",
          4710: "663895f4ee8497db5284d0165ba26832",
          4731: "4bbe486ba385d371459a719d91a6a5c6",
          4799: "f8504ba68011acde9d6e27776da3e343",
          4851: "e857685b6ccb97ba99159d96ceacd2ec",
          4861: "7a6cdd28cba4666670b6aed372aacea8",
          4913: "c4f3173f01d5f06c00d465732c5f184c",
          4965: "b863644a117bf18bff25027d20e5d68c",
          5018: "f27a3d57b246d171c93850ce84673c5f",
          5076: "52e3c83bb889180845c9cfec55033a42",
          5117: "06b9d30f8cc15bcf42b1e025194a8dea",
          5233: "f9e9a1cef93a0e4354ea562ab2f068e4",
          5259: "ab1a630bc95df63a8f64628cb6cf410f",
          5265: "9deca0db53a16d8c54a2c821ce917b29",
          5345: "9aa04fc8ceb2cca33f8f87c502f5066a",
          5389: "0c372a84a1827f014ac8399c06b3cbfe",
          5400: "822446f5da571d288591d3b0b2507d92",
          5415: "83b7c97448d4173ae6debb2b2087e128",
          5454: "d031cd784e5358dd8845978aa0a3efc7",
          5530: "52a1dbf89ad934e5dae904a77a719f2c",
          5550: "6df1eaea06bffe02dfe5e85db5c9b78c",
          5639: "c6d531c77bad8a88168ec3673f9f7ad7",
          5663: "6791fe712f13a17d3a17cea6864f50f3",
          5742: "3c4951fd536e7222a39289157e206e83",
          5827: "f9e4d6c0d0750f87fed29305a433e5f9",
          5830: "a094a5bccfdf90ba136ffff82e9f23c5",
          5832: "33e6c76e12d7097fafcc5ea8630f1b44",
          5859: "b8c532b380fabb4cc4a8bb187499159a",
          6088: "42372deed6f8413b98bb59c810e033eb",
          6130: "f9ca6be5af6dae76823d1342b2c02095",
          6267: "f8c0deced866fb42e466d9faf6b8f5c0",
          6280: "136e67bfbab33db4e6bd718cd0893dc0",
          6285: "6fde9f9025061455f1c9171f41fadc92",
          6321: "4212d4638412b721bf580be265405b3e",
          6327: "3160667f3fb694f222be08a4354795be",
          6361: "a2b3d9ec66bd2231dc7b082163d5083d",
          6471: "528d06ade767628622cc4e9fcc2378ca",
          6664: "d2954e94eebe6ce34f4bc87832f7622c",
          6879: "ff6fc5651fd359a546863aeea9accad2",
          6891: "25b7db2b540273c99a6cb3bf046cffe0",
          6997: "36e4279f8d3b325bad01ffd13fb1651a",
          7010: "a99bc2394434cc2834b554bc38379d09",
          7073: "b80c71439471b020a6ea576ef5b98138",
          7407: "40c6547b3985a7ed1c458240cb40a266",
          7436: "fbf873ffef5d22fab61151d41cd995e3",
          7452: "9a76fe8672f8520ef38562c3d6f62fef",
          7453: "418206fa59a0943cfd778ef0b44d175a",
          7785: "659d0bb2b2f645e141daedfae705e441",
          7970: "b664b380554cfbbc994a31edeba16b4f",
          8068: "771574298fbccbb361616ff4ac3e9f45",
          8240: "d0e2adbf87bdc86e97b0bad0a601e7b8",
          8272: "909ee8ef2f5bce4146cc95b5db8bfb65",
          8325: "dfa357d013f1e97ec42d49e9c1647d9f",
          8391: "f68616dc381aacacb721a184bb475449",
          8431: "47796acae2ce3104f0e1aa324c988a0e",
          8503: "b6a667a9aa8f8390710eba01a5ea81a1",
          8505: "7b932e0962e9d23344f07ed8fbe49946",
          8659: "508c78e5204fda2ce8c15fd5a6e0ecbd",
          8661: "d93965233ca2a8691da8f0431366938f",
          8702: "ea5144b3f9f39287ed8cf3c2dfe0ff87",
          8708: "2ffa8ac86c62e91936d237eca9919a10",
          8755: "d2ff12606fd5c3f1e96480a311064a2a",
          8845: "193182782dc25fa0ffd6895ad45457e2",
          8880: "54ede12ca61798303d6f1b44a3c68ca8",
          8938: "bf01d7157414c1ffe37be310c488c5e3",
          8970: "87a3272e04a09fab89bf2ec425af1ea8",
          9022: "e055f19b943cb8c7f19ed8759778e5a4",
          9028: "47b57bae3ede94eff6b34fb1acc392da",
          9126: "987f7f7ce688a3cf358e2cb4ee46227a",
          9377: "5529f31b8c05847e20d531dd4ffde939",
          9407: "b8768aef2d2252de39eb1418b4f02a01",
          9477: "814b468243d7d9903b827903af250160",
          9520: "58e1f7b4506875dcc4f46e1f1fa4241f",
          9587: "4e089ee19819acef636627bae39b2017",
          9615: "3841cd59f38fce0ebf87debb3450d112",
          9760: "c064d9b5fdd7b34092d8671e4a1c1a43",
          9936: "697046f1e95129b78fe31647c6b70003",
          9990: "7fa9373b9fddf6f77e3720d4466f55e5"
        } [e] + ".js", i.miniCssF = e => "css/" + {
          76: "537c3654e32745a846faf8bafb6e84bd",
          884: "214e2f94528af5f726d2150d0a4f2215",
          1057: "3af92259c369f40eec2a7d0f90f67d96",
          1125: "e940e33b19a2dacd5a6405d8eea0e912",
          2358: "165fa99f963184aba806d81f713ae37c",
          3438: "3af92259c369f40eec2a7d0f90f67d96",
          3774: "78d5cc4c5783f428f329035572c896cf",
          4965: "ba8d0f69b0835ff0704b10057e7c091c",
          5040: "c30f3c8a99525fcaf9c0832853c3f081",
          5550: "ed78d69898cf7c75ad9f3c7f513105b2",
          6069: "ff5d40a08af069c8bbed595ff7e87c9b",
          6536: "3a4070d4c77506d8955255a1ccc7b2a6",
          8427: "64d7f9e177dae263f83a61669b860024",
          8503: "214e2f94528af5f726d2150d0a4f2215",
          8683: "ec396ec8a36762ae49c6722682ad4e04"
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
              return "default" === r && (n("@foundry/react", "5.17.2", () => Promise.all([i.e(602), i.e(9520), i.e(539), i.e(1302), i.e(4965), i.e(2229), i.e(8429), i.e(4572), i.e(9407)]).then(() => () => i(16733))), n("@rsgweb/locale-tools", "1.0.0", () => Promise.all([i.e(9587), i.e(2229), i.e(8240)]).then(() => () => i(12841))), n("@rsgweb/modules-core-carousel", "0.0.0", () => Promise.all([i.e(9520), i.e(4488), i.e(539), i.e(5827), i.e(2229), i.e(8429), i.e(5966), i.e(4572), i.e(6069), i.e(1913), i.e(8683), i.e(9477)]).then(() => () => i(89477))), n("@rsgweb/modules-core-engagement", "0.0.0", () => Promise.all([i.e(9520), i.e(4488), i.e(539), i.e(5827), i.e(5345), i.e(2229), i.e(8429), i.e(5966), i.e(1788), i.e(9623), i.e(4572), i.e(1913), i.e(2918), i.e(2440), i.e(2424), i.e(3774), i.e(8427)]).then(() => () => i(89600))), n("@rsgweb/modules-core-group-of-items", "1.0.0", () => Promise.all([i.e(4488), i.e(2229), i.e(5966), i.e(4572), i.e(6069), i.e(1913), i.e(6536), i.e(2440), i.e(76), i.e(884)]).then(() => () => i(90884))), n("@rsgweb/rockstar-account", "0.0.0", () => Promise.all([i.e(602), i.e(4237), i.e(8068), i.e(2229), i.e(6188), i.e(5966), i.e(9623), i.e(6088), i.e(4550)]).then(() => () => i(32169))), n("@rsgweb/tina", "0.0.0", () => Promise.all([i.e(5117), i.e(2229), i.e(8429), i.e(6188), i.e(5966), i.e(1788), i.e(6130), i.e(2918), i.e(1057)]).then(() => () => i(99747))), n("@rsgweb/utils", "1.0.0", () => Promise.all([i.e(602), i.e(4237), i.e(8505), i.e(5454), i.e(2229), i.e(6188), i.e(1788), i.e(9623), i.e(6088), i.e(8702)]).then(() => () => i(58702))), n("clsx", "2.1.1", () => i.e(439).then(() => () => i(10439))), n("dompurify", "2.5.8", () => i.e(7785).then(() => () => i(27785))), n("lodash", "4.17.21", () => i.e(5076).then(() => () => i(15076))), n("react-dom", "18.3.1", () => Promise.all([i.e(1098), i.e(2229)]).then(() => () => i(71098))), n("react-intersection-observer", "9.16.0", () => Promise.all([i.e(2229), i.e(6327)]).then(() => () => i(76327))), n("react-jsx-parser", "2.4.1", () => Promise.all([i.e(3387), i.e(2229)]).then(() => () => i(43387))), n("react-router-dom", "6.30.1", () => Promise.all([i.e(5389), i.e(2229), i.e(8429)]).then(() => () => i(15389))), n("react", "18.2.0", () => i.e(8659).then(() => () => i(68659))), n("react", "18.3.1", () => i.e(8431).then(() => () => i(48431))), n("text-balancer", "1.0.5", () => i.e(5400).then(() => () => i(75400))), o(25136), o(29441)), b.length ? e[r] = Promise.all(b).then(() => e[r] = 1) : e[r] = 1
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
              10299: () => s("default", "@foundry/react", !1, [1, 5, 17, 2], () => Promise.all([i.e(602), i.e(9520), i.e(1302), i.e(4965)]).then(() => () => i(16733))),
              61128: () => s("default", "react-intersection-observer", !1, [1, 9, 16, 0], () => i.e(8708).then(() => () => i(76327))),
              15310: () => s("default", "@rsgweb/modules-core-group-of-items", !1, [1, "workspace:^"], () => i.e(8503).then(() => () => i(90884))),
              20206: () => s("default", "@rsgweb/modules-core-engagement", !1, [1, "workspace:^"], () => Promise.all([i.e(9520), i.e(2424), i.e(5040)]).then(() => () => i(89600))),
              42602: () => s("default", "@rsgweb/modules-core-carousel", !1, [1, "workspace:^"], () => Promise.all([i.e(9520), i.e(8683), i.e(1858)]).then(() => () => i(89477))),
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
              3774: [10299, 61128],
              4572: [4572],
              5966: [95966],
              6188: [16188],
              6536: [2973],
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
                3774: 1,
                4965: 1,
                5040: 1,
                5550: 1,
                6069: 1,
                6536: 1,
                8427: 1,
                8503: 1,
                8683: 1
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