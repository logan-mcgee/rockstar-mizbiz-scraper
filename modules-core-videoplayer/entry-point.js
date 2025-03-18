! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "a1156c1c-b85d-41ed-9aab-6d5c9b97b73f", e._sentryDebugIdIdentifier = "sentry-dbid-a1156c1c-b85d-41ed-9aab-6d5c9b97b73f")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-videoplayer",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register([], (function(e, a) {
  return {
    execute: function() {
      e((() => {
        var e, t, d, r, c, f, b = {
            49293: (e, a, t) => {
              (0, t(31789).w)(1)
            },
            31789: (e, a, t) => {
              const d = t(90569).y;
              a.w = function(e) {
                if (e || (e = 1), !t.y.meta || !t.y.meta.url) throw console.error("__system_context__", t.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                t.p = d(t.y.meta.url, e)
              }
            },
            23358: (e, a, t) => {
              t(49293)
            },
            90569: (e, a, t) => {
              a.y = function(e, a) {
                var t = document.createElement("a");
                t.href = e;
                for (var d = "/" === t.pathname[0] ? t.pathname : "/" + t.pathname, r = 0, c = d.length; r !== a && c >= 0;) "/" === d[--c] && r++;
                if (r !== a) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + a + ") is greater than the number of directories (" + r + ") in the URL path " + e);
                var f = d.slice(0, c + 1);
                return t.protocol + "//" + t.host + f
              };
              Number.isInteger
            },
            58157: (e, a, t) => {
              "use strict";
              var d = {
                  "./bootstrap": () => t.e(7902).then((() => () => t(37902))),
                  "./index": () => Promise.all([t.e(6996), t.e(2229), t.e(9623), t.e(6188), t.e(5966), t.e(9010), t.e(3581), t.e(2918), t.e(3906), t.e(1552)]).then((() => () => t(41552))),
                  "./tina": () => Promise.all([t.e(2229), t.e(6188), t.e(5966), t.e(4853), t.e(9010), t.e(1877)]).then((() => () => t(91877))),
                  "./tinaBlockTemplates": () => Promise.all([t.e(2229), t.e(6188), t.e(5966), t.e(4853), t.e(9010), t.e(1877)]).then((() => () => t(91877)))
                },
                r = (e, a) => (t.R = a, a = t.o(d, e) ? d[e]() : Promise.resolve().then((() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                })), t.R = void 0, a),
                c = (e, a) => {
                  if (t.S) {
                    var d = "default",
                      r = t.S[d];
                    if (r && r !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return t.S[d] = e, t.I(d, a)
                  }
                };
              t.d(a, {
                get: () => r,
                init: () => c
              })
            }
          },
          o = {};

        function n(e) {
          var a = o[e];
          if (void 0 !== a) return a.exports;
          var t = o[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return b[e].call(t.exports, t, t.exports, n), t.loaded = !0, t.exports
        }
        return n.m = b, n.c = o, n.y = a, n.amdO = {}, n.n = e => {
          var a = e && e.__esModule ? () => e.default : () => e;
          return n.d(a, {
            a
          }), a
        }, t = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, n.t = function(a, d) {
          if (1 & d && (a = this(a)), 8 & d) return a;
          if ("object" == typeof a && a) {
            if (4 & d && a.__esModule) return a;
            if (16 & d && "function" == typeof a.then) return a
          }
          var r = Object.create(null);
          n.r(r);
          var c = {};
          e = e || [null, t({}), t([]), t(t)];
          for (var f = 2 & d && a;
            "object" == typeof f && !~e.indexOf(f); f = t(f)) Object.getOwnPropertyNames(f).forEach((e => c[e] = () => a[e]));
          return c.default = () => a, n.d(r, c), r
        }, n.d = (e, a) => {
          for (var t in a) n.o(a, t) && !n.o(e, t) && Object.defineProperty(e, t, {
            enumerable: !0,
            get: a[t]
          })
        }, n.f = {}, n.e = e => Promise.all(Object.keys(n.f).reduce(((a, t) => (n.f[t](e, a), a)), [])), n.u = e => "js/" + {
          131: "dec9ee78c2f2d7d4d6b2fe020b37ef3f",
          278: "ab1b3e1550ba5220adfaca2b52ca60c6",
          299: "2e435de68c8246902c19281adcc48d78",
          314: "1e18394afdb6c4f9c9912544f188304c",
          662: "99e88354c1571bbfaf08d1553c6235ec",
          824: "4cb560fced160360da6b48f42eec20fc",
          907: "7b81de509c4d67560395e6878ce33e19",
          1029: "c7806bc669f961bda32e9bf1be9c9089",
          1041: "ea42f078901af7837d2680d99c0380c2",
          1054: "23b74ac8dbec4556ec0ed1f971205e1b",
          1242: "df21047a55ca868505536a150bc6d9e2",
          1552: "6ca5b0b355fb97759392e1e8551ea36a",
          1604: "acba25cfee3e331e12e7814bc79032b5",
          1822: "dddbdf5ed03e8f8c1441dc340d9f074d",
          1868: "aed3c250f5a91f2bcfc87f78cd3eb4fe",
          1877: "bed0e93e17a462a4f3267c0c448350c8",
          2156: "66132fd62950a0be095e488299ee7795",
          2171: "faefbc3d543a7975cbbdff2049553a81",
          2221: "cd854f2f005b2a9b958f793524f0ba7e",
          2229: "694e45c1bdc83f48f126dc7ace434947",
          2243: "88657c082d21550d3f5312c45f109eab",
          2347: "741dba94457059a169ac2676829468fb",
          2365: "9e4fdb2f81e36a0050314c13558a9707",
          2398: "85285179e16aa0a6a2449465c810dcca",
          2407: "d866c90672e139c97e123ca7998ead48",
          2466: "109f9fa215a38833f4984b6e233806e3",
          2642: "32cf0cd9dc55bc46e49b827554d0d783",
          2670: "f7ba934da9f5dae31fddd9ee7e23e361",
          2678: "c1fbd30c2daca703d3814f410e1922d4",
          2864: "9fc25895ce41bb06e6e7a5846e6d1cb4",
          2918: "c48f222def00e0dc340c684a29fdcc11",
          3034: "69066e0a435fea380ca61a1953849a5c",
          3197: "c5193952ae2a09b37801619dc8a97a21",
          3217: "f769510a6d27b64ac741387b0a3271c5",
          3343: "f99c700ad1efea47fbe3491e0cc10d49",
          3370: "ea4767bca1b1b3db09e979ed3f72ee49",
          3422: "162cdf92c89ab8a07a28b241bf824652",
          3475: "bafc9b18cacab9986d2f39fe40eaa55f",
          3486: "9d593d585a8cca34998ea1aec3f17e7d",
          3581: "4038d09d8a5a6cab7676fb396cfb6c60",
          3697: "6f2baed326b08efaf203d24e396f5b6f",
          3811: "a789a6c565ff206ac06aa1cdfff1dfac",
          3885: "81ed9a4e6bd7e7d91ca5175df1168398",
          3906: "486a609c9e3d5112c4e5269d0f1c1b38",
          3941: "20f217afdaa43fa26cef8eb2b674d95e",
          4011: "e4a7da2a9f28e82b84f13689dae852dd",
          4059: "5b760f5f6e3e0418417847d4331a1f76",
          4282: "937e4ac362e2cd6db0f8a1b31cd9e997",
          4528: "ab18bd500d5d3353ecf33796c1ccd31a",
          4621: "123add44914c73d883a473350de26022",
          4700: "b93a329331eb34a1c326bc6ceddec595",
          4710: "d4d7a639eff4cd189742500c3ad8ea40",
          4731: "6bdbab8d1470ded97967b1ff45222c51",
          4799: "a39fe9a2ce5414ff82924172b4449b8f",
          4851: "ddfd39338b86d6c85155ebcd4b4a8972",
          4853: "24fd39970cceb3912231faa6d0c8f8c0",
          4861: "6e3dfe2b1536887a5605854fc8b2e02d",
          4913: "7230274d821e712c91acfaa4bddbb884",
          5018: "b038b5b8f5e08b30e911c1c92d1f0062",
          5219: "dede0e2fa9b55c8a8e7ffcf81f5aa109",
          5233: "ee0357437c0f749ccf0e2199aac4502d",
          5259: "4d3f17badc5147819a771de02bfee566",
          5409: "a24d601ba1c2b4c4236e0a2f4ba41558",
          5483: "e04d701dc58d6554d7ef0b98907667e2",
          5507: "c3809cff65e6d89630f4af0d02464e25",
          5530: "4e08fd628d4acc757861a1f824b60135",
          5639: "64391ae1b357b5367aa8cf5883841ede",
          5663: "b14f5793a3c63b8b0f2293d377b1f0f1",
          5742: "dd29eed4bdfc79e6842cdc28471e6bce",
          5808: "32b7f05df74ce6a0f2d35d2315241b49",
          5828: "b4180af0df6cd43bf7f9780730704022",
          5830: "ac6571a55ed287461b587f5dce32a1d6",
          5832: "19c90907ab3f3a24e7fc2f83aa48c12b",
          5966: "b291de7cefd353995511032eb1a82a4e",
          6188: "fbc5b6848dcceb32ea5990c581a10150",
          6265: "412e09ed4023868286ec10499faf8849",
          6267: "b3a7719f4c79f4cf9c78cb36a06a8311",
          6280: "6386bf1a11f847299003f8a7f71dc3d6",
          6285: "c6ce0668e71b959a1436a94887543f1b",
          6286: "705e49f14b22c00ed863ce38f6e45aaa",
          6361: "cb9d48a52d2c9a5cd41dc9f089721c17",
          6440: "fa92fbca1acf9413fc8daec2ba9209b5",
          6519: "641d2f54641a59bac89b08f8f026c852",
          6664: "45802b81dc4eabfbae9d30a82819d155",
          6695: "4f857698ec306025dce5337e430061a2",
          6832: "c785088209050a8f1d001dc898b6e3e7",
          6879: "7e6401b9d4db587be4c2f597ab17c568",
          6891: "0cde1d1e45045c7f8d791a31f9c88f45",
          6996: "4a68a254b97701598c94fa7174e8385f",
          6997: "9d0ad473543dca9e36791294643f13a8",
          7010: "ca6ade8ecd8cf3750e241ff5ea2f41f9",
          7073: "f68e045bd0eef963578efada6d7f8ada",
          7360: "6c3a269a19d2a7b56f8de8801811d767",
          7436: "d6d8ad770b7e439c6bfdcbc2e21d00ca",
          7452: "d4b9313d827e9a3f7b70ce60f825ccd0",
          7453: "3ce272a522518f3b446befa509422b9b",
          7600: "733c637ce157c077d3aaae32315eb16b",
          7888: "80fbcf7d06c9adaacfcc4c3dcac8652a",
          7902: "30b505ea0cecf2fc15dc1a5306ccc85c",
          7970: "501fbeac0aeec60fdfa06920ed05e31f",
          8272: "77fbd3baeb452791c46ea8029844c1b0",
          8329: "5ab937e35a268f11145efe57ae4bb62a",
          8391: "3fb907e8377d3f5a56da1bb67e9f6f46",
          8646: "5e3400b144022e63b28641fe793db17a",
          8755: "4f6a1d5a1017ca01b8cb5773af2e49bc",
          8880: "a284f6dedbdb2335503c694a581989d5",
          8970: "bc682558c4fbfb98e1737f04aec71768",
          9005: "72e4c9af03011a4a7af11b5ed527171c",
          9010: "4b5be9bcd3964cf1e944111149aa580e",
          9022: "b23eaa79d06ead702d65939bc22ca07e",
          9028: "7b8e9331d6e6cf11aac2fe894a9695a9",
          9126: "8aca9d596a5fed23991487714949d3c5",
          9377: "8bd14557cfbb67e141d048f008a69afa",
          9491: "af5791df541b5eec06e8ace5ba1be834",
          9550: "fe4e271f3d302d80550fd9cbfef39f5d",
          9615: "5ffd39ebdaebb3d1e9a2d9ef76b08900",
          9623: "fb134a5684b6756100e88f7db34936fc",
          9936: "e31f622356a98fc8f8f52ebb81fd6a02",
          9990: "f44c2dfd60efc1d3a90f4b966a5d558a"
        } [e] + ".js", n.miniCssF = e => "css/" + {
          1552: "0046b5682c8fe97c8afdbca1931f1243",
          1877: "e1ecfbd5d60b0822f094e505eee8adf4",
          3811: "a126229ede95b503bfddbd53efcedae3",
          3906: "526395c36cb3c58329b9ba0c5175fc0e",
          6265: "c93a94af96ec28203142bf5e00fef0f7",
          8646: "c93a94af96ec28203142bf5e00fef0f7"
        } [e] + ".css", n.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), n.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), d = {}, r = "@rockstargames/modules-core-videoplayer:", n.l = (e, a, t, c) => {
          if (d[e]) d[e].push(a);
          else {
            var f, b;
            if (void 0 !== t)
              for (var o = document.getElementsByTagName("script"), l = 0; l < o.length; l++) {
                var i = o[l];
                if (i.getAttribute("src") == e || i.getAttribute("data-webpack") == r + t) {
                  f = i;
                  break
                }
              }
            f || (b = !0, (f = document.createElement("script")).charset = "utf-8", f.timeout = 120, n.nc && f.setAttribute("nonce", n.nc), f.setAttribute("data-webpack", r + t), f.src = e), d[e] = [a];
            var s = (a, t) => {
                f.onerror = f.onload = null, clearTimeout(u);
                var r = d[e];
                if (delete d[e], f.parentNode && f.parentNode.removeChild(f), r && r.forEach((e => e(t))), a) return a(t)
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
          n.o(c, e) && c[e].forEach((e => {
            var t = n.R;
            t || (t = []);
            var d = f[e];
            if (!(t.indexOf(d) >= 0)) {
              if (t.push(d), d.p) return a.push(d.p);
              var r = a => {
                  a || (a = new Error("Container missing")), "string" == typeof a.message && (a.message += '\nwhile loading "' + d[1] + '" from ' + d[2]), n.m[e] = () => {
                    throw a
                  }, d.p = 0
                },
                c = (e, t, c, f, b, o) => {
                  try {
                    var n = e(t, c);
                    if (!n || !n.then) return b(n, f, o);
                    var l = n.then((e => b(e, f)), r);
                    if (!o) return l;
                    a.push(d.p = l)
                  } catch (e) {
                    r(e)
                  }
                },
                b = (e, a, r) => c(a.get, d[1], t, 0, o, r),
                o = a => {
                  d.p = 1, n.m[e] = e => {
                    e.exports = a()
                  }
                };
              c(n, d[2], 0, 0, ((e, a, t) => e ? c(n.I, d[0], 0, e, b, t) : r()), 1)
            }
          }))
        }, (() => {
          n.S = {};
          var e = {},
            a = {};
          n.I = (t, d) => {
            d || (d = []);
            var r = a[t];
            if (r || (r = a[t] = {}), !(d.indexOf(r) >= 0)) {
              if (d.push(r), e[t]) return e[t];
              n.o(n.S, t) || (n.S[t] = {});
              var c = n.S[t],
                f = "@rockstargames/modules-core-videoplayer",
                b = (e, a, t, d) => {
                  var r = c[e] = c[e] || {},
                    b = r[a];
                  (!b || !b.loaded && (!d != !b.eager ? d : f > b.from)) && (r[a] = {
                    get: t,
                    from: f,
                    eager: !!d
                  })
                },
                o = [];
              return "default" === t && (b("@gsap/react", "2.1.0", (() => Promise.all([n.e(2229), n.e(3581), n.e(7888)]).then((() => () => n(87888))))), b("@popperjs/core", "2.11.8", (() => n.e(6519).then((() => () => n(66519))))), b("@rsgweb/locale-tools", "1.0.0", (() => Promise.all([n.e(5483), n.e(2229), n.e(5219)]).then((() => () => n(87768))))), b("@rsgweb/modules-core-agegate", "0.0.0", (() => Promise.all([n.e(6695), n.e(2229), n.e(5966), n.e(2918), n.e(6265)]).then((() => () => n(6265))))), b("@rsgweb/rockstar-account", "0.0.0", (() => Promise.all([n.e(5828), n.e(8329), n.e(2229), n.e(9623), n.e(6188), n.e(5966), n.e(5808), n.e(3422)]).then((() => () => n(41041))))), b("@rsgweb/utils", "1.0.0", (() => Promise.all([n.e(5828), n.e(2229), n.e(9623), n.e(6188), n.e(5808), n.e(1029)]).then((() => () => n(24602))))), b("graphql", "16.10.0", (() => n.e(6286).then((() => () => n(26286))))), b("gsap", "0.0.0", (() => n.e(2407).then((() => () => n(12407))))), b("hammerjs", "2.0.8", (() => n.e(5409).then((() => () => n(15409))))), b("lodash", "4.17.21", (() => n.e(4282).then((() => () => n(14282))))), b("react-dom", "18.2.0", (() => Promise.all([n.e(7360), n.e(2229)]).then((() => () => n(57360))))), b("react-popper", "2.3.0", (() => Promise.all([n.e(2229), n.e(4853), n.e(9005), n.e(4059)]).then((() => () => n(44059))))), b("react-router-dom", "6.17.0", (() => Promise.all([n.e(1604), n.e(2229)]).then((() => () => n(21604))))), b("react", "18.2.0", (() => n.e(3217).then((() => () => n(23217))))), b("uuid", "9.0.1", (() => n.e(2670).then((() => () => n(32670)))))), e[t] = o.length ? Promise.all(o).then((() => e[t] = 1)) : 1
            }
          }
        })(), (() => {
          var e;
          n.g.importScripts && (e = n.g.location + "");
          var a = n.g.document;
          if (!e && a && (a.currentScript && (e = a.currentScript.src), !e)) {
            var t = a.getElementsByTagName("script");
            if (t.length)
              for (var d = t.length - 1; d > -1 && (!e || !/^http(s?):/.test(e));) e = t[d--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), n.p = e
        })(), (() => {
          var e = e => {
              var a = e => e.split(".").map((e => +e == e ? +e : e)),
                t = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
                d = t[1] ? a(t[1]) : [];
              return t[2] && (d.length++, d.push.apply(d, a(t[2]))), t[3] && (d.push([]), d.push.apply(d, a(t[3]))), d
            },
            a = (t, d) => {
              if (0 in t) {
                d = e(d);
                var r = t[0],
                  c = r < 0;
                c && (r = -r - 1);
                for (var f = 0, b = 1, o = !0;; b++, f++) {
                  var n, l, i = b < t.length ? (typeof t[b])[0] : "";
                  if (f >= d.length || "o" == (l = (typeof(n = d[f]))[0])) return !o || ("u" == i ? b > r && !c : "" == i != c);
                  if ("u" == l) {
                    if (!o || "u" != i) return !1
                  } else if (o)
                    if (i == l)
                      if (b <= r) {
                        if (n != t[b]) return !1
                      } else {
                        if (c ? n > t[b] : n < t[b]) return !1;
                        n != t[b] && (o = !1)
                      }
                  else if ("s" != i && "n" != i) {
                    if (c || b <= r) return !1;
                    o = !1, b--
                  } else {
                    if (b <= r || l < i != c) return !1;
                    o = !1
                  } else "s" != i && "n" != i && (o = !1, b--)
                }
              }
              var s = [],
                u = s.pop.bind(s);
              for (f = 1; f < t.length; f++) {
                var p = t[f];
                s.push(1 == p ? u() | u() : 2 == p ? u() & u() : p ? a(p, d) : !u())
              }
              return !!u()
            },
            t = (t, d, r) => {
              var c = t[d];
              return (d = Object.keys(c).reduce(((t, d) => !a(r, d) || t && !((a, t) => {
                a = e(a), t = e(t);
                for (var d = 0;;) {
                  if (d >= a.length) return d < t.length && "u" != (typeof t[d])[0];
                  var r = a[d],
                    c = (typeof r)[0];
                  if (d >= t.length) return "u" == c;
                  var f = t[d],
                    b = (typeof f)[0];
                  if (c != b) return "o" == c && "n" == b || "s" == b || "u" == c;
                  if ("o" != c && "u" != c && r != f) return r < f;
                  d++
                }
              })(t, d) ? t : d), 0)) && c[d]
            },
            d = (e => function(a, t, d, r) {
              var c = n.I(a);
              return c && c.then ? c.then(e.bind(e, a, n.S[a], t, d, r)) : e(a, n.S[a], t, d, r)
            })(((e, a, d, r, c) => {
              var f = a && n.o(a, d) && t(a, d, r);
              return f ? (e => (e.loaded = 1, e.get()))(f) : c()
            })),
            r = {},
            c = {
              62229: () => d("default", "react", [1, 18, 2, 0], (() => n.e(3217).then((() => () => n(23217))))),
              9623: () => d("default", "react-router-dom", [1, 6, 11, 2], (() => n.e(1604).then((() => () => n(21604))))),
              16188: () => d("default", "lodash", [1, 4, 17, 21], (() => n.e(4282).then((() => () => n(14282))))),
              95966: () => d("default", "@rsgweb/utils", [1, "workspace:^"], (() => Promise.all([n.e(5828), n.e(9623), n.e(6188), n.e(5808)]).then((() => () => n(24602))))),
              81569: () => d("default", "uuid", [1, 9, 0, 0], (() => n.e(2670).then((() => () => n(32670))))),
              81788: () => d("default", "@rsgweb/locale-tools", [1, "workspace:^"], (() => Promise.all([n.e(5483), n.e(7600)]).then((() => () => n(87768))))),
              13581: () => d("default", "gsap", [1, "workspace:^"], (() => n.e(2407).then((() => () => n(12407))))),
              2918: () => d("default", "@rsgweb/rockstar-account", [1, "workspace:^"], (() => Promise.all([n.e(5828), n.e(8329), n.e(9623), n.e(6188), n.e(5808), n.e(1041)]).then((() => () => n(41041))))),
              4848: () => d("default", "hammerjs", [1, 2, 0, 8], (() => n.e(5409).then((() => () => n(15409))))),
              27654: () => d("default", "@gsap/react", [1, 2, 1, 0], (() => n.e(5507).then((() => () => n(87888))))),
              47224: () => d("default", "@rsgweb/modules-core-agegate", [1, "workspace:^"], (() => Promise.all([n.e(6695), n.e(8646)]).then((() => () => n(6265))))),
              75971: () => d("default", "react-popper", [1, 2, 3, 0], (() => Promise.all([n.e(4853), n.e(9005), n.e(6440)]).then((() => () => n(44059))))),
              44853: () => d("default", "react-dom", [1, 18, 2, 0], (() => n.e(7360).then((() => () => n(57360))))),
              16565: () => d("default", "graphql", [1, 16, 9, 0], (() => n.e(6286).then((() => () => n(26286))))),
              9005: () => d("default", "@popperjs/core", [1, 2, 11, 7], (() => n.e(6519).then((() => () => n(66519)))))
            },
            f = {
              2229: [62229],
              2918: [2918],
              3581: [13581],
              3906: [4848, 27654, 47224, 75971],
              4853: [44853],
              5808: [16565],
              5966: [95966],
              6188: [16188],
              9005: [9005],
              9010: [81569, 81788],
              9623: [9623]
            },
            b = {};
          n.f.consumes = (e, a) => {
            n.o(f, e) && f[e].forEach((e => {
              if (n.o(r, e)) return a.push(r[e]);
              if (!b[e]) {
                var t = a => {
                  r[e] = 0, n.m[e] = t => {
                    delete n.c[e], t.exports = a()
                  }
                };
                b[e] = !0;
                var d = a => {
                  delete r[e], n.m[e] = t => {
                    throw delete n.c[e], a
                  }
                };
                try {
                  var f = c[e]();
                  f.then ? a.push(r[e] = f.then(t).catch(d)) : t(f)
                } catch (e) {
                  d(e)
                }
              }
            }))
          }
        })(), (() => {
          if ("undefined" != typeof document) {
            var e = {
              7614: 0
            };
            n.f.miniCss = (a, t) => {
              e[a] ? t.push(e[a]) : 0 !== e[a] && {
                1552: 1,
                1877: 1,
                3811: 1,
                3906: 1,
                6265: 1,
                8646: 1
              } [a] && t.push(e[a] = (e => new Promise(((a, t) => {
                var d = n.miniCssF(e),
                  r = n.p + d;
                if (((e, a) => {
                    for (var t = document.getElementsByTagName("link"), d = 0; d < t.length; d++) {
                      var r = (f = t[d]).getAttribute("data-href") || f.getAttribute("href");
                      if ("stylesheet" === f.rel && (r === e || r === a)) return f
                    }
                    var c = document.getElementsByTagName("style");
                    for (d = 0; d < c.length; d++) {
                      var f;
                      if ((r = (f = c[d]).getAttribute("data-href")) === e || r === a) return f
                    }
                  })(d, r)) return a();
                ((e, a, t, d, r) => {
                  var c = document.createElement("link");
                  c.rel = "stylesheet", c.type = "text/css", c.onerror = c.onload = t => {
                    if (c.onerror = c.onload = null, "load" === t.type) d();
                    else {
                      var f = t && ("load" === t.type ? "missing" : t.type),
                        b = t && t.target && t.target.href || a,
                        o = new Error("Loading CSS chunk " + e + " failed.\n(" + b + ")");
                      o.code = "CSS_CHUNK_LOAD_FAILED", o.type = f, o.request = b, c.parentNode && c.parentNode.removeChild(c), r(o)
                    }
                  }, c.href = a, document.head.appendChild(c)
                })(e, r, 0, a, t)
              })))(a).then((() => {
                e[a] = 0
              }), (t => {
                throw delete e[a], t
              })))
            }
          }
        })(), (() => {
          var e = {
            7614: 0
          };
          n.f.j = (a, t) => {
            var d = n.o(e, a) ? e[a] : void 0;
            if (0 !== d)
              if (d) t.push(d[2]);
              else if (/^(9(005|010|623)|2229|2918|3581|4853|5966|6188)$/.test(a)) e[a] = 0;
            else {
              var r = new Promise(((t, r) => d = e[a] = [t, r]));
              t.push(d[2] = r);
              var c = n.p + n.u(a),
                f = new Error;
              n.l(c, (t => {
                if (n.o(e, a) && (0 !== (d = e[a]) && (e[a] = void 0), d)) {
                  var r = t && ("load" === t.type ? "missing" : t.type),
                    c = t && t.target && t.target.src;
                  f.message = "Loading chunk " + a + " failed.\n(" + r + ": " + c + ")", f.name = "ChunkLoadError", f.type = r, f.request = c, d[1](f)
                }
              }), "chunk-" + a, a)
            }
          };
          var a = (a, t) => {
              var d, r, c = t[0],
                f = t[1],
                b = t[2],
                o = 0;
              if (c.some((a => 0 !== e[a]))) {
                for (d in f) n.o(f, d) && (n.m[d] = f[d]);
                b && b(n)
              }
              for (a && a(t); o < c.length; o++) r = c[o], n.o(e, r) && e[r] && e[r][0](), e[r] = 0
            },
            t = self.webpackChunk_rockstargames_modules_core_videoplayer = self.webpackChunk_rockstargames_modules_core_videoplayer || [];
          t.forEach(a.bind(null, 0)), t.push = a.bind(null, t.push.bind(t))
        })(), n(23358), n(58157)
      })())
    }
  }
}));