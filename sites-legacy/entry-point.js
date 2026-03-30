try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "5c914c32-fa99-4921-91f3-0aaa031578f1", e._sentryDebugIdIdentifier = "sentry-dbid-5c914c32-fa99-4921-91f3-0aaa031578f1")
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
      Object.keys(e).forEach(function(a) {
        t[a] = e[a]
      })
    }],
    execute: function() {
      e((() => {
        var e, f, r, d, c, n, o = {
            17411: (e, a, t) => {
              const f = t(77027).y;
              a.w = function(e) {
                if (e || (e = 1), !t.y.meta || !t.y.meta.url) throw console.error("__system_context__", t.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                t.p = f(t.y.meta.url, e)
              }
            },
            25136: e => {
              "use strict";
              e.exports = t
            },
            28419: (e, a, t) => {
              (0, t(17411).w)(1)
            },
            58639: (e, a, t) => {
              "use strict";
              var f = {
                  "./bootstrap": () => Promise.all([t.e(5076), t.e(3611), t.e(2787), t.e(5117), t.e(6266), t.e(5194), t.e(1127), t.e(181), t.e(8136), t.e(6990), t.e(8429), t.e(1874), t.e(2323), t.e(9915), t.e(4708), t.e(1352), t.e(8793), t.e(38), t.e(8437)]).then(() => () => t(58437)),
                  "./index": () => Promise.all([t.e(5076), t.e(3611), t.e(2787), t.e(5117), t.e(6266), t.e(5194), t.e(1127), t.e(181), t.e(8136), t.e(6990), t.e(8429), t.e(1874), t.e(2323), t.e(9915), t.e(4708), t.e(1352), t.e(8793), t.e(38), t.e(9741)]).then(() => () => t(19741)),
                  "./site-routes/Bully": () => Promise.all([t.e(5076), t.e(3611), t.e(2787), t.e(5117), t.e(6266), t.e(5194), t.e(1127), t.e(181), t.e(8136), t.e(6990), t.e(8429), t.e(1874), t.e(2323), t.e(9915), t.e(4708), t.e(1352), t.e(8793), t.e(38), t.e(1649), t.e(6019)]).then(() => () => t(86019)),
                  "./site-routes/RedDeadRedemption": () => Promise.all([t.e(5076), t.e(3611), t.e(2787), t.e(5117), t.e(6266), t.e(5194), t.e(1127), t.e(181), t.e(8136), t.e(6990), t.e(8429), t.e(1874), t.e(2323), t.e(9915), t.e(4708), t.e(1352), t.e(8793), t.e(38), t.e(1649), t.e(9171)]).then(() => () => t(99171)),
                  "./tina": () => Promise.all([t.e(5076), t.e(3611), t.e(2787), t.e(5117), t.e(6266), t.e(5194), t.e(1127), t.e(181), t.e(8136), t.e(6990), t.e(8429), t.e(1874), t.e(2323), t.e(9915), t.e(4708), t.e(1352), t.e(8793), t.e(38), t.e(1649)]).then(() => () => t(81649))
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
            77027: (e, a, t) => {
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
            93032: (e, a, t) => {
              t(28419)
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
          38: "7c510ee9c2ed1409890df2339c5a644f",
          68: "6644f1a521b19e37cf9c2caa482590c4",
          131: "05f322eaf48d8a405211e5be34df321a",
          173: "84e32b61f6f503b04c88a44d6f8fb8e3",
          278: "1e8890c0cf7d939e34433e46bc2c2321",
          299: "6bedb69f5d7450ed432d4400c8160af7",
          314: "08152f6179859d0dd40cc68fe4c61d31",
          439: "77197d51f1cfe6f70f4401eaef0f32de",
          601: "a1e2bbab6e1678e225385477707fc81d",
          662: "753a40eb6bdc4e4e5ba12fae4c838294",
          824: "cfa27e2244fe97d29d1fd4b53632d54a",
          907: "bc58a9495c5f43e648b231a6a248ca79",
          1054: "bd2e6e63f4270cab6012b1bc10233d7a",
          1057: "403ac6189c35a1628c81415beb990774",
          1098: "95b19bb4c7ccca68648f5b91ce44ec34",
          1242: "5f2c28b26e9b2a9022c55deef5859412",
          1649: "34dd230b927e04ed2d150e6e7632a797",
          1673: "1cef05178d587454658537f8ddf70c1e",
          1758: "b74fa7762517cad8716271e1538e5824",
          1785: "7a705f28fbbbe0c93d13ea344bd56f7d",
          1822: "3ff1c6a54d8ad4a26d2e845ac69d0784",
          1868: "3981868ff99d20b3dec1a8b884e5fea3",
          2156: "067a0c9419c120f8934b7da612982c56",
          2169: "d78703469bcffa4fd2bdf740a0480bb9",
          2171: "5d44325e02af0285c47b876f11e1269c",
          2221: "0a3c68373d0fc66eb513c6024375b354",
          2234: "17d47029262915f7f1bad8d91430ce94",
          2243: "8b2556b01fe0a9460a244bec78f3ed88",
          2295: "4ff107397b95158506767f23e5cf9dc8",
          2306: "0dfd908b43656cb7753ed44ac4c075d0",
          2319: "d244d14da4aaf3a261ebcbd5ae4b012d",
          2323: "adf744652314331a011b54457a43dd11",
          2347: "a2f2f02816f10ee1cd49b9e88ead9d37",
          2365: "e41ee386abef62e4b7b215609477a3fa",
          2368: "d4c2bbaf037156e3ae034f696c43be9b",
          2398: "07bc5f547741ddbf0115c2568334ef42",
          2466: "3fc3b96d7befd0cc24fa48c3fdef2c50",
          2642: "397f0c34df79aca284ed70607f01173a",
          2678: "0d51c6de202d2e612056242432b7b4cd",
          2787: "093146e050ac16451230b258f19d7477",
          2864: "ad09c5c0bbffe0a5c4725a89bd0e3b82",
          3034: "1f9a309b6f22a51318b396f1c6b982f1",
          3197: "f26ead7a84db7a8c36010039b0e02a7c",
          3342: "621bfdfcd95732a5c9d60b04948bd291",
          3343: "8d18d4b14398a1caaebd99171b9fba57",
          3370: "9e69391e218c824bc8433f318ae5b7f6",
          3438: "ed14cf135e8b21d8dad1776074683b9a",
          3475: "e6873cf2a37cb430ab07b3f8aadbe192",
          3486: "9e6760495db6e20a27376dd683b9c4e4",
          3611: "631e879e8fecb00e96e8d7cc59a6c63e",
          3697: "67c1ac6da1135adea84fcf95092668fe",
          3885: "b7b74a34472d90c235884e7cb233745d",
          3896: "86f0a9beba5c1fe69b1b21344f83e935",
          3941: "c2328c369642aff2b8e7905694b6d945",
          4011: "dc2a5c01243f4263a4d31b5fbe1a2ed3",
          4528: "f327df6cdd9cc179d2bd93868fe8b2c6",
          4550: "733215f9c3f666950a5673541fd35d46",
          4578: "a02a604dacab2257c07d896eb5585fe9",
          4621: "a05c9adbf5a8425d978da935dfcad798",
          4700: "5d7fb6d51dcf99f190122c347b47e2dd",
          4708: "f195c11e73e8305cf5d9966b261b6ca4",
          4710: "30921dcab9365392af5d7ebe4800f159",
          4731: "05a601d3bbfc50442a6b99ef882d0603",
          4799: "2e037289c7b791863c55498fc71156e4",
          4851: "b3edbe75a1c5704564fe493cfe0004ee",
          4861: "d909ccb0496a90cca81c666a262fa93c",
          4913: "f71c813d4527dffafbc91438dc7d39f6",
          4931: "c474593738db7aa91100da9f1795ca04",
          5018: "8b222c181b6909ac35184e0db4a92570",
          5076: "fe335bfc107b730ef6637376a1f36580",
          5117: "25e6f09cc008b9d80b65fef28695f692",
          5194: "9f940123ceba11c585298c87376dc9fd",
          5233: "8389ebddc46dcba23bed5dfab6961b16",
          5259: "f503bc7a0132e8e535a71b2ce686b4dd",
          5265: "f173d05af4496a9fe528fcf07d1e63b3",
          5288: "48ac5ff1900343bdd496aa62694ab324",
          5389: "337288ff6a71ab191bf7d17cd75a7700",
          5415: "bef629cc80cc8d64c88eb670cad0c877",
          5530: "e28be790245a207d26b12f655298fac6",
          5639: "4a7e570c4278e394a7b9a180c356ccc0",
          5663: "8f4167e6bf1d9916c6fec8a86b62ab04",
          5742: "353184da9f171050b2b9eb91dcd3d011",
          5830: "ca098db19a1b8cd2b960bd933eeb2092",
          5832: "4482f10dc5c589c6ab61371edd27762f",
          6019: "b034d1496e92ad88b23ac0c348984775",
          6088: "38458208479ccef5ea188786e4d0cd26",
          6266: "ff9dc0de2aa0519886191f4f466bcd14",
          6267: "cd066b36da091351a3aa48eb257fbf5d",
          6280: "09b939cfeec05c5639ec0ed73694c69f",
          6285: "4013fa3cc5447211fe026ad384b583fd",
          6327: "c6fbdb7e67b7eab76d5648d53f1b9a00",
          6361: "5f949de63196a88e8688593d3ea53a15",
          6471: "b7d06dfcb01e8ead53fff55624b06e30",
          6664: "4d49bbc5fd2f770b207b9fb281732807",
          6879: "3eb748089959c4ef6c83ff5747f4173a",
          6891: "d659c78edd66a349959c94d3dc1b3282",
          6997: "f473a04f9f4499df83d21e7f200d74bf",
          7010: "f147145b540f0a2c4e9b673c00129ed0",
          7073: "7522d99775c2bebc447eaf47a63b9507",
          7129: "89a51438ecf3473e941487a6282fc378",
          7407: "8f055a3410c6288e786e1e573d94a7b8",
          7436: "365b7c2df8fd78fc1dea8e0627330ded",
          7452: "2f63b45004eefc9b8265992220e71742",
          7453: "753994f5c56b07102565feb01af7d419",
          7465: "64c534ab8d26f73c48c47e864df83bcf",
          7557: "1e79fb8504a28f16284832082f49e39c",
          7970: "3edf97562465871c3c58f2065edfcc8e",
          8068: "05b60ce07747c2d45f6a200ee5a054a7",
          8272: "9a75eea1dc8a186ffe92237c3774721a",
          8325: "7e3c631ad4e9e957e527c1a8c4957932",
          8391: "434728622d34b5acf86bf709c9b3fdd1",
          8431: "4b1ff768a352a9f3259ffac86c332900",
          8437: "16ec9ca6f818143cc155b777509d5c78",
          8665: "f461a3f4260927e1d203d796fe757df4",
          8708: "ba8caacabca9049cdd50c8625add886d",
          8755: "4b931dfb6c3bf78d7d47b78f37fcf583",
          8844: "4861bd015283cf4b8f825ec7fc3d6490",
          8845: "b5fb7d2eadcbea8aa367b3a5509f16c2",
          8880: "4a1d0d51996017a32798dfa9d5f3f2c9",
          8938: "c813ce493be9869e838240114cf6eecf",
          8970: "fc5d654a4734a77e20428938b6b16030",
          9022: "241647b2d6940bc4f9439d6695f42e80",
          9028: "5e0beff703022065d3af37e837719446",
          9126: "cd8f150ad6862319617a0cc3895eb648",
          9171: "cd0f8b59537fdaddaaed98c2e722ddd5",
          9377: "315ee580a75e067b521d115158fe83ad",
          9615: "c9974c287118694ff8d84da6b9644152",
          9741: "0aedad2bbc83e63ac1b331b109a248e7",
          9760: "f7c11a12bd36600b9251e08802f6d02a",
          9936: "e9573ddb04074b175b5d49b626b971fd",
          9987: "fffaa42b2b467f948051d4d142affe0f",
          9990: "f18f2f8142b7378d73df2ef304ac0efe"
        } [e] + ".js", i.miniCssF = e => "css/" + {
          38: "f94c7054d4e986c11cdac638a3dfbd45",
          1057: "e11267b2b9a024fdab4347cb9ada8f14",
          1785: "01fd4a1b7dcafeb5ed7fca9004268171",
          3438: "e11267b2b9a024fdab4347cb9ada8f14",
          4297: "4fc9b1b7dc3a3f98aa7535db17648e4e",
          5194: "8af84a027a4fbef1a99621cf58d0e055",
          6019: "52e55b769351b6e3f1602fe5d2baacd1",
          8437: "7b7e81de8ef95d17fe40bdb1530d8afb",
          8665: "b3313fda99862d6d64bd2a829ae71ca3",
          9171: "52e55b769351b6e3f1602fe5d2baacd1"
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
        }), e), i.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), r = {}, d = "@rockstargames/sites-legacy:", i.l = (e, a, t, f) => {
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
            c || (n = !0, (c = document.createElement("script")).charset = "utf-8", c.timeout = 120, i.nc && c.setAttribute("nonce", i.nc), c.setAttribute("data-webpack", d + t), c.src = e), r[e] = [a];
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
          38: [31879],
          1649: [17523]
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
              return "default" === t && (n("@rsgweb/locale-tools", "0.0.0", () => Promise.all([i.e(3611), i.e(2787), i.e(1127), i.e(2319)]).then(() => () => i(2319))), n("@rsgweb/modules-core-hero", "0.0.0", () => Promise.all([i.e(1127), i.e(181), i.e(8136), i.e(6990), i.e(1874), i.e(9915), i.e(4708), i.e(1785)]).then(() => () => i(21375))), n("@rsgweb/modules-core-highlights", "0.0.0", () => Promise.all([i.e(6266), i.e(1127), i.e(6990), i.e(1874), i.e(9915), i.e(1352), i.e(4297), i.e(2368)]).then(() => () => i(32368))), n("@rsgweb/rockstar-account", "0.0.0", () => Promise.all([i.e(5076), i.e(7129), i.e(8068), i.e(1127), i.e(181), i.e(8136), i.e(6088), i.e(4550)]).then(() => () => i(32169))), n("@rsgweb/tina", "0.0.0", () => Promise.all([i.e(5076), i.e(5117), i.e(1127), i.e(8136), i.e(6990), i.e(8429), i.e(1874), i.e(2323), i.e(1057)]).then(() => () => i(99747))), n("@rsgweb/utils", "0.0.0", () => Promise.all([i.e(5076), i.e(3611), i.e(7129), i.e(4931), i.e(1127), i.e(181), i.e(6990), i.e(6088), i.e(811), i.e(3342)]).then(() => () => i(43342))), n("clsx", "2.1.1", () => i.e(439).then(() => () => i(10439))), n("focus-trap-react", "10.3.1", () => Promise.all([i.e(1673), i.e(1127), i.e(8793)]).then(() => () => i(51673))), n("framer-motion", "12.35.0", () => Promise.all([i.e(5288), i.e(1127), i.e(2295)]).then(() => () => i(45288))), n("graphql", "16.11.0", () => i.e(601).then(() => () => i(30601))), n("prop-types", "15.8.1", () => i.e(7465).then(() => () => i(97465))), n("react-dom", "18.3.1", () => Promise.all([i.e(1098), i.e(1127)]).then(() => () => i(71098))), n("react-intersection-observer", "9.16.0", () => Promise.all([i.e(1127), i.e(6327)]).then(() => () => i(76327))), n("react-router-dom", "6.30.1", () => Promise.all([i.e(5389), i.e(1127), i.e(8429)]).then(() => () => i(15389))), n("react", "18.3.1", () => i.e(8431).then(() => () => i(48431))), (() => {
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
              71127: () => d("default", "react", !1, [1, 18, 2, 0], () => i.e(8431).then(() => () => i(48431))),
              10181: () => d("default", "react-router-dom", !1, [1, 6, 11, 2], () => Promise.all([i.e(5389), i.e(8429)]).then(() => () => i(15389))),
              58136: () => d("default", "@rsgweb/utils", !1, [4, 0, 0, 0], () => Promise.all([i.e(5076), i.e(3611), i.e(7129), i.e(4931), i.e(181), i.e(6990), i.e(6088), i.e(8844)]).then(() => () => i(43342))),
              56990: () => d("default", "@rsgweb/locale-tools", !1, [4, 0, 0, 0], () => Promise.all([i.e(3611), i.e(2787), i.e(7557)]).then(() => () => i(2319))),
              18429: () => d("default", "react-dom", !1, [1, 18, 2, 0], () => i.e(1098).then(() => () => i(71098))),
              61874: () => d("default", "@rsgweb/rockstar-account", !1, [4, 0, 0, 0], () => Promise.all([i.e(5076), i.e(7129), i.e(8068), i.e(181), i.e(8136), i.e(6088), i.e(2169)]).then(() => () => i(32169))),
              22030: () => d("default", "@rsgweb/tina", !1, [4, 0, 0, 0], () => Promise.all([i.e(5076), i.e(5117), i.e(8136), i.e(8429), i.e(2323), i.e(3438)]).then(() => () => i(99747))),
              48586: () => d("default", "framer-motion", !1, [1, 12, 34, 5], () => i.e(5288).then(() => () => i(45288))),
              1556: () => d("default", "clsx", !1, [1, 2, 1, 1], () => i.e(439).then(() => () => i(10439))),
              21352: () => d("default", "react-intersection-observer", !1, [1, 9, 16, 0], () => i.e(8708).then(() => () => i(76327))),
              28793: () => d("default", "prop-types", !1, [1, 15, 8, 1], () => i.e(7465).then(() => () => i(97465))),
              36444: () => d("default", "@rsgweb/modules-core-highlights", !1, [4, 0, 0, 0], () => Promise.all([i.e(4297), i.e(9987)]).then(() => () => i(32368))),
              60478: () => d("default", "@rsgweb/modules-core-hero", !1, [4, 0, 0, 0], () => i.e(8665).then(() => () => i(21375))),
              99101: () => d("default", "focus-trap-react", !1, [1, 10, 2, 3], () => i.e(1673).then(() => () => i(51673))),
              811: () => d("default", "graphql", !1, [1, 16, 9, 0], () => i.e(601).then(() => () => i(30601)))
            },
            o = {
              38: [36444, 60478, 99101],
              181: [10181],
              811: [811],
              1127: [71127],
              1352: [21352],
              1874: [61874],
              4708: [1556],
              6990: [56990],
              8136: [58136],
              8429: [18429],
              8793: [28793],
              8844: [811],
              9915: [22030, 48586]
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
                38: 1,
                1057: 1,
                1785: 1,
                3438: 1,
                4297: 1,
                5194: 1,
                6019: 1,
                8437: 1,
                8665: 1,
                9171: 1
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
              else if (/^(1(127|352|81|874)|8(11|136|429|793)|4297|6990|9915)$/.test(a)) e[a] = 0;
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
        })(), i.nc = void 0, i(93032), i(58639)
      })())
    }
  }
});