try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "4e101cea-344d-4b42-9d4f-70a545a7eccd", e._sentryDebugIdIdentifier = "sentry-dbid-4e101cea-344d-4b42-9d4f-70a545a7eccd")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-newswire-article",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register(["@rockstargames/modules-core-gif-viewer", "@rockstargames/modules-core-videoplayer"], function(e, t) {
  var a = {},
    r = {};
  return Object.defineProperty(a, "__esModule", {
    value: !0
  }), Object.defineProperty(r, "__esModule", {
    value: !0
  }), {
    setters: [function(e) {
      a.default = e.default || e, Object.keys(e).forEach(function(t) {
        a[t] = e[t]
      })
    }, function(e) {
      r.default = e.default || e, Object.keys(e).forEach(function(t) {
        r[t] = e[t]
      })
    }],
    execute: function() {
      e((() => {
        var e = {
          89863(e, t, a) {
            (0, a(35039).w)(1)
          },
          35039(e, t, a) {
            const r = a(20103).y;
            t.w = function(e) {
              if (e || (e = 1), !a.y.meta || !a.y.meta.url) throw console.error("__system_context__", a.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
              a.p = r(a.y.meta.url, e)
            }
          },
          87732(e, t, a) {
            a(89863)
          },
          20103(e, t, a) {
            t.y = function(e, t) {
              var a = document.createElement("a");
              a.href = e;
              for (var r = "/" === a.pathname[0] ? a.pathname : "/" + a.pathname, n = 0, o = r.length; n !== t && o >= 0;) "/" === r[--o] && n++;
              if (n !== t) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + t + ") is greater than the number of directories (" + n + ") in the URL path " + e);
              var c = r.slice(0, o + 1);
              return a.protocol + "//" + a.host + c
            };
            Number.isInteger
          },
          57761(e, t, a) {
            "use strict";
            const r = {
                "./index": () => Promise.all([a.e(883), a.e(5756), a.e(516), a.e(3253), a.e(4940), a.e(2396), a.e(5606), a.e(5255), a.e(6722), a.e(6982), a.e(5980), a.e(2612), a.e(3082), a.e(4017), a.e(283), a.e(3331), a.e(2909), a.e(9225), a.e(1270), a.e(7301), a.e(2199), a.e(4110), a.e(2285), a.e(1588), a.e(9775), a.e(6936)]).then(() => () => a(27192)),
                "./tina": () => a.e(2562).then(() => () => a(2562))
              },
              n = (e, t) => (a.R = t, t = a.o(r, e) ? r[e]() : Promise.resolve().then(() => {
                throw new Error('Module "' + e + '" does not exist in container.')
              }), a.R = void 0, t),
              o = (e, t) => {
                if (!a.S) return;
                const r = "default",
                  n = a.S[r];
                if (n && n !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                return a.S[r] = e, a.I(r, t)
              };
            a.d(t, {
              get: () => n,
              init: () => o
            })
          },
          29441(e) {
            "use strict";
            e.exports = a
          },
          25136(e) {
            "use strict";
            e.exports = r
          }
        };
        const n = {};

        function o(t) {
          const a = n[t];
          if (void 0 !== a) return a.exports;
          const r = n[t] = {
            id: t,
            loaded: !1,
            exports: {}
          };
          return e[t].call(r.exports, r, r.exports, o), r.loaded = !0, r.exports
        }
        return o.m = e, o.c = n, o.y = t, o.amdO = {}, o.n = e => {
          const t = e && e.__esModule ? () => e.default : () => e;
          return o.d(t, {
            a: t
          }), t
        }, (() => {
          const e = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__;
          let t;
          o.t = function(a, r) {
            if (1 & r && (a = this(a)), 8 & r) return a;
            if ("object" == typeof a && a) {
              if (4 & r && a.__esModule) return a;
              if (16 & r && "function" == typeof a.then) return a
            }
            const n = Object.create(null);
            o.r(n);
            const c = {};
            t = t || [null, e({}), e([]), e(e)];
            for (var d = 2 & r && a;
              ("object" == typeof d || "function" == typeof d) && !~t.indexOf(d); d = e(d)) Object.getOwnPropertyNames(d).forEach(e => c[e] = () => a[e]);
            return c.default = () => a, o.d(n, c), n
          }
        })(), o.d = (e, t) => {
          if (Array.isArray(t))
            for (var a = 0; a < t.length;) {
              var r = t[a++],
                n = t[a++];
              o.o(e, r) ? 0 === n && a++ : 0 === n ? Object.defineProperty(e, r, {
                enumerable: !0,
                value: t[a++]
              }) : Object.defineProperty(e, r, {
                enumerable: !0,
                get: n
              })
            } else
              for (var r in t) o.o(t, r) && !o.o(e, r) && Object.defineProperty(e, r, {
                enumerable: !0,
                get: t[r]
              })
        }, o.f = {}, o.e = e => Promise.all(Object.keys(o.f).reduce((t, a) => (o.f[a](e, t), t), [])), o.u = e => "js/" + {
          62: "e73f151dae830a8116eac04299740d28",
          162: "1064e99cbaf57f41da8d76774e4ceafd",
          195: "d0589d0868cbe7fd5f5e7c78912a0131",
          323: "dee93af320538a53ff65e0f1aac49d3e",
          325: "7e9cb447fd3502a48212e5b6cad19cc9",
          516: "ed030523a0583cfbdca3f831607a151d",
          761: "972532df3e46a0274afd51cc2aea2289",
          788: "4d57b61d4608fac664a8ebdf48987645",
          883: "fffb4033aff68e993000c8d604d4c661",
          1020: "3d93f305d0da9b0aac75133c28992646",
          1076: "9b50c9342c0cd6de20cbbd306b1ba853",
          1588: "417b8cbbe1d8de9f8905d4de34a08501",
          1682: "4d26b618bedd8bc3c10e60ab255346f9",
          1933: "96ae2401456db95a842acb567417ac1f",
          2154: "a87b2acdd3a4894615636c73b79596b8",
          2325: "2ef325155a93e852155211ab9c547242",
          2381: "225d6b5e3ee0430640bbc853bbf82c06",
          2396: "cf3425940991a1d19027ec0310fc7a34",
          2562: "f89a203e653748f66056a9e081a96e72",
          2581: "6d638ee913e2a306ec18497e3b872b38",
          2605: "0963522108e1224c630106ea234e8682",
          2612: "27c11a231d279f15ce4fcb2ab72eaa6a",
          2704: "8d0270c638bb368c9e7d2d417789478f",
          2741: "f6d3424a1eae02ad1d7a070fdf3db294",
          2992: "81df3b1e4dcf7bb157ee55693f1bbbe5",
          3253: "3497b248028ad3bfd2acb794bb9e8db2",
          3275: "8c41d773e165ad4e9b6386571bcc16cd",
          3431: "b793909e7c30b69b47304924de8fbc04",
          3477: "bc3502c8716ccc543647dced8707923b",
          3496: "783bcfcdafd5262c2d9d23dd5cd5bf0d",
          3542: "aba50cd3ed16f1c823d60facc0b546d0",
          3565: "14950e2010c9dc38fa554b3d310bbc2c",
          3633: "45496fce56c71a601831279b95e2dd1e",
          3852: "e0ace7ba86977f5c6042904465861fb5",
          3939: "ff4bc5718b328bb57a4607f37d9f8531",
          4016: "b1b6ac35e8264fa1544d2a75d73c140a",
          4047: "40e8e2efaa948ea9fb3366d128ae106d",
          4110: "10db0c1a6fce64b7621801b34127f55a",
          4309: "929cde9157bc900da548de8da8ffc2ce",
          4314: "121f78884ae143c0a446c981eba467af",
          4497: "4c0d3c4216501e506ab18b7ea12cdbd6",
          4590: "367a84a911a40f2274b4dbcdd19f6a39",
          4612: "0ba308cb63eae39977d90cdbe3e85d41",
          4632: "10b2a08ff27f95eabb6cead0d29d7c8a",
          4692: "de406abee9469a718a89ea74361adde5",
          4706: "e2460fbd04d8c9289f3cc9ed06eca69c",
          4711: "38f3dceeddfe53335a33096706c2d130",
          4830: "022ea864c7f3d413747b6ce499c4d466",
          4921: "6d9b6dbe848a5839c6fa0f5ec0d504cc",
          4940: "bf3296b410dbd4ef43e41fa425f5e6bd",
          5051: "c1b192e19d3137d8d4e34f67eada2bd3",
          5255: "b4261c8ec8e6558ee3feb906c56b851f",
          5361: "40bdb0947923ca9131f06568b3fbd37a",
          5462: "eedadc68be65c3efaac8866ae912cc76",
          5505: "e381d4dc3f8a13e3dde059a32617671a",
          5606: "20325e492af7762437f038b12ae39bfe",
          5750: "6ffcae666023ece0036f2952c543430f",
          5756: "45e0375ceab5522021bd37534ee5186b",
          5962: "f3d3e0a92c3bfe37be8628ffb67b8c59",
          5980: "41eb41469e2786d00874812a32c21c28",
          6320: "936732c5b5953602984e4615bb0fabee",
          6406: "2a5f23eeb7a84912d7b6f1f238dacfca",
          6428: "e012d77aefc67339a3ba926653eefb47",
          6722: "9b53275144d693b7e2fd332fcef28c47",
          6763: "362850d21d58c3a315d1c904af47b710",
          6918: "499169d782e95bfe07869f7d7121124a",
          6932: "bbf1347cb2cae72415bc0dcff73b9d3e",
          6936: "fc4fdfd6f2b60928366102d83f181418",
          6982: "d539c56e6c43826414d93dd94efcf28b",
          7267: "cb892c25313d1ae502fdda5303d6351c",
          7384: "35c68700c9092d36dccb6a96b60f3b64",
          7419: "22e5b2d1e401e305ab9c5f439b579c81",
          7861: "6aef786c148c8bb9dfdc77a5ac114b21",
          8021: "b355fdc7c7448a3c659b4e0d2082cd1f",
          8511: "892beda9364a68bf06ad4d3dbd7af553",
          8601: "a145f8c9829fbab43bdff1d16bb02dcd",
          9206: "d020eaba7a86f301f9efae1a681f050a",
          9357: "9ade4a1e8ac54fc8f89f4c17499e2f98",
          9763: "da3a4d4d6ec85405f1fbc7b97eb58d25",
          9860: "609c25058fa6d48d021878b1a2b5da9b",
          9896: "3c19eaf207fab722da7272a925922098"
        } [e] + ".js", o.miniCssF = e => "css/" + {
          1588: "90181f5f503830695ace14869df4afa3",
          2154: "6ed68eb31bbf53b95d93ca8b891950a4",
          2612: "ba1b9439fa8ad4315b612d938fd84075",
          3115: "384cddac2173849afd90c4a73e287f5e",
          3496: "7f95fd369db8ff4d7aff8dd6daecce91",
          4110: "915d373fd494468e9b0648f0fc1b6314",
          4612: "7c575cc0a210038808b12a81bf37629b",
          4830: "f39de8b0c76a56f0ce42b624f3f0a652",
          5051: "fc87901d26c616fb6163d1992b094cea",
          5367: "101537b924f4411033bd9d2d8536a01a",
          6722: "1509e6ded142f7912c73b4ffd9412a78",
          6936: "792f832a00089fd96b931f9d43b9c083",
          7419: "384cddac2173849afd90c4a73e287f5e",
          8021: "41c7d6822d60ff731131faba38922938",
          8601: "c5961ff45ab2f26ffb7e50308f79c617",
          9357: "ef81dd31a2acf40a379ebf06814ce854",
          9633: "88a9b4d18fecd8b492423ffebbf2bb03",
          9732: "bfe4e4109fd9c58c236be27a4498cde6",
          9775: "4790c1b9de793e76e3beb46ef6e70fdb"
        } [e] + ".css", o.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), o.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), (() => {
          const e = {},
            t = "@rockstargames/modules-core-newswire-article:";
          o.l = (a, r, n, c) => {
            if (e[a]) return void e[a].push(r);
            let d, f;
            if (void 0 !== n) {
              const e = document.getElementsByTagName("script");
              for (var s = 0; s < e.length; s++) {
                const r = e[s];
                if (r.getAttribute("src") == a || r.getAttribute("data-webpack") == t + n) {
                  d = r;
                  break
                }
              }
            }
            d || (f = !0, d = document.createElement("script"), d.charset = "utf-8", o.nc && d.setAttribute("nonce", o.nc), d.setAttribute("data-webpack", t + n), d.src = a), e[a] = [r];
            const l = (t, r) => {
                d.onerror = d.onload = null, clearTimeout(i);
                const n = e[a];
                if (delete e[a], d.parentNode?.removeChild(d), n?.forEach(e => e(r)), t) return t(r)
              },
              i = setTimeout(l.bind(null, void 0, {
                type: "timeout",
                target: d
              }), 12e4);
            d.onerror = l.bind(null, d.onerror), d.onload = l.bind(null, d.onload), f && document.head.appendChild(d)
          }
        })(), o.r = e => {
          Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, o.nmd = e => (e.paths = [], e.children || (e.children = []), e), (() => {
          const e = {
              6936: [64064],
              9775: [31879]
            },
            t = {
              31879: ["default", "./index", 25136],
              64064: ["default", "./index", 29441]
            };
          o.f.remotes = (a, r) => {
            o.o(e, a) && e[a].forEach(e => {
              let a = o.R;
              a || (a = []);
              const n = t[e];
              if (a.indexOf(n) >= 0) return;
              if (a.push(n), n.p) return r.push(n.p);
              const c = t => {
                  t || (t = new Error("Container missing")), "string" == typeof t.message && (t.message += '\nwhile loading "' + n[1] + '" from ' + n[2]), o.m[e] = () => {
                    throw t
                  }, n.p = 0
                },
                d = (e, t, a, o, d, f) => {
                  try {
                    const s = e(t, a);
                    if (!s?.then) return d(s, o, f); {
                      const e = s.then(e => d(e, o), c);
                      if (!f) return e;
                      r.push(n.p = e)
                    }
                  } catch (e) {
                    c(e)
                  }
                },
                f = (e, t, r) => d(t.get, n[1], a, 0, s, r),
                s = t => {
                  n.p = 1, o.m[e] = e => {
                    e.exports = t()
                  }
                };
              d(o, n[2], 0, 0, (e, t, a) => e ? d(o.I, n[0], 0, e, f, a) : c(), 1)
            })
          }
        })(), (() => {
          o.S = {};
          const e = {},
            t = {};
          o.I = (a, r) => {
            r || (r = []);
            let n = t[a];
            if (n || (n = t[a] = {}), r.indexOf(n) >= 0) return;
            if (r.push(n), e[a]) return e[a];
            o.o(o.S, a) || (o.S[a] = {});
            const c = o.S[a],
              d = "@rockstargames/modules-core-newswire-article",
              f = (e, t, a, r) => {
                const n = c[e] = c[e] || {},
                  o = n[t];
                (!o || !o.loaded && (!r != !o.eager ? r : d > o.from)) && (n[t] = {
                  get: a,
                  from: d,
                  eager: !!r
                })
              },
              s = e => {
                const t = e => {
                  return t = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(t));
                  var t
                };
                try {
                  const n = o(e);
                  if (!n) return;
                  const c = e => e && e.init && e.init(o.S[a], r);
                  if (n.then) return l.push(n.then(c, t));
                  const d = c(n);
                  if (d?.then) return l.push(d.catch(t))
                } catch (e) {
                  t(e)
                }
              },
              l = [];
            return "default" === a && (f("@foundry/react", "6.5.0", () => Promise.all([o.e(883), o.e(761), o.e(5756), o.e(516), o.e(3253), o.e(5051), o.e(2396), o.e(2154), o.e(3082), o.e(4017), o.e(1270), o.e(4612)]).then(() => () => o(62154))), f("@foundry/react", "6.5.0", () => Promise.all([o.e(883), o.e(761), o.e(5756), o.e(516), o.e(3253), o.e(5051), o.e(2396), o.e(5606), o.e(3496), o.e(6722), o.e(3082), o.e(4017), o.e(1270), o.e(3431)]).then(() => () => o(33496))), f("@rsgweb/locale-tools", "0.0.0", () => Promise.all([o.e(761), o.e(3082), o.e(283), o.e(4706)]).then(() => () => o(77377))), f("@rsgweb/modules-core-carousel", "0.0.0", () => Promise.all([o.e(883), o.e(5756), o.e(516), o.e(3253), o.e(4940), o.e(5606), o.e(3082), o.e(4017), o.e(3331), o.e(1270), o.e(7301), o.e(4110), o.e(5367), o.e(8601)]).then(() => () => o(4692))), f("@rsgweb/modules-core-engagement", "0.0.0", () => Promise.all([o.e(883), o.e(516), o.e(3253), o.e(4940), o.e(5255), o.e(6982), o.e(3082), o.e(4017), o.e(283), o.e(3331), o.e(2909), o.e(9225), o.e(1270), o.e(7301), o.e(2199), o.e(2285), o.e(2992), o.e(1588), o.e(4830)]).then(() => () => o(52840))), f("@rsgweb/modules-core-group-of-items", "0.0.0", () => Promise.all([o.e(883), o.e(5756), o.e(516), o.e(4940), o.e(5606), o.e(3082), o.e(4017), o.e(3331), o.e(1270), o.e(7301), o.e(4110), o.e(9775), o.e(8021)]).then(() => () => o(99357))), f("@rsgweb/modules-core-highlights", "0.0.0", () => Promise.all([o.e(4940), o.e(5255), o.e(5980), o.e(3082), o.e(2909), o.e(7301), o.e(2199), o.e(2285), o.e(9633), o.e(4314)]).then(() => () => o(21933))), f("@rsgweb/rockstar-account", "0.0.0", () => Promise.all([o.e(2381), o.e(6918), o.e(3082), o.e(283), o.e(3331), o.e(2909), o.e(9225), o.e(195), o.e(2704)]).then(() => () => o(323))), f("@rsgweb/tina", "0.0.0", () => Promise.all([o.e(883), o.e(4309), o.e(325), o.e(3082), o.e(4017), o.e(283), o.e(3331), o.e(2909), o.e(2199), o.e(6406), o.e(2741), o.e(7419)]).then(() => () => o(51145))), f("@rsgweb/utils", "0.0.0-development", () => Promise.all([o.e(2381), o.e(3565), o.e(3082), o.e(283), o.e(2909), o.e(9225), o.e(195), o.e(6406), o.e(4047)]).then(() => () => o(64047))), f("clsx", "2.1.1", () => o.e(4921).then(() => () => o(4921))), f("dompurify", "2.5.9", () => o.e(62).then(() => () => o(50062))), f("lodash-es", "4.18.1", () => Promise.all([o.e(4309), o.e(5505)]).then(() => () => o(65505))), f("react-dom", "18.3.1", () => Promise.all([o.e(162), o.e(3082)]).then(() => () => o(30162))), f("react-intersection-observer", "9.16.0", () => Promise.all([o.e(3082), o.e(6320)]).then(() => () => o(26320))), f("react-jsx-parser", "2.4.1", () => Promise.all([o.e(6932), o.e(3082)]).then(() => () => o(76932))), f("react-router-dom", "6.30.4", () => Promise.all([o.e(9860), o.e(3082), o.e(4017)]).then(() => () => o(79860))), f("react", "18.3.1", () => o.e(2581).then(() => () => o(22581))), f("text-balancer", "1.0.5", () => o.e(4016).then(() => () => o(34016))), s(25136), s(29441)), l.length ? e[a] = Promise.all(l).then(() => e[a] = 1) : e[a] = 1
          }
        })(), (() => {
          let e;
          o.g.importScripts && (e = o.g.location + "");
          const t = o.g.document;
          if (!e && t && ("SCRIPT" === t.currentScript?.tagName.toUpperCase() && (e = t.currentScript.src), !e)) {
            const a = t.getElementsByTagName("script");
            if (a.length) {
              let t = a.length - 1;
              for (; t > -1 && (!e || !/^http(s?):/.test(e));) e = a[t--].src
            }
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), o.p = e
        })(), (() => {
          var e = e => {
              var t = e => e.split(".").map(e => +e == e ? +e : e),
                a = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
                r = a[1] ? t(a[1]) : [];
              return a[2] && (r.length++, r.push.apply(r, t(a[2]))), a[3] && (r.push([]), r.push.apply(r, t(a[3]))), r
            },
            t = e => {
              var a = e[0],
                r = "";
              if (1 === e.length) return "*";
              if (a + .5) {
                r += 0 == a ? ">=" : -1 == a ? "<" : 1 == a ? "^" : 2 == a ? "~" : a > 0 ? "=" : "!=";
                for (var n = 1, o = 1; o < e.length; o++) n--, r += "u" == (typeof(d = e[o]))[0] ? "-" : (n > 0 ? "." : "") + (n = 2, d);
                return r
              }
              var c = [];
              for (o = 1; o < e.length; o++) {
                var d = e[o];
                c.push(0 === d ? "not(" + f() + ")" : 1 === d ? "(" + f() + " || " + f() + ")" : 2 === d ? c.pop() + " " + c.pop() : t(d))
              }
              return f();

              function f() {
                return c.pop().replace(/^\((.+)\)$/, "$1")
              }
            },
            a = (t, r) => {
              if (0 in t) {
                r = e(r);
                var n = t[0],
                  o = n < 0;
                o && (n = -n - 1);
                for (var c = 0, d = 1, f = !0;; d++, c++) {
                  var s, l, i = d < t.length ? (typeof t[d])[0] : "";
                  if (c >= r.length || "o" == (l = (typeof(s = r[c]))[0])) return !f || ("u" == i ? d > n && !o : "" == i != o);
                  if ("u" == l) {
                    if (!f || "u" != i) return !1
                  } else if (f)
                    if (i == l)
                      if (d <= n) {
                        if (s != t[d]) return !1
                      } else {
                        if (o ? s > t[d] : s < t[d]) return !1;
                        s != t[d] && (f = !1)
                      }
                  else if ("s" != i && "n" != i) {
                    if (o || d <= n) return !1;
                    f = !1, d--
                  } else {
                    if (d <= n || l < i != o) return !1;
                    f = !1
                  } else "s" != i && "n" != i && (f = !1, d--)
                }
              }
              var b = [],
                u = b.pop.bind(b);
              for (c = 1; c < t.length; c++) {
                var h = t[c];
                b.push(1 == h ? u() | u() : 2 == h ? u() & u() : h ? a(h, r) : !u())
              }
              return !!u()
            };
          const r = (t, a, r) => {
              const n = r ? (e => Object.keys(e).reduce((t, a) => (e[a].eager && (t[a] = e[a]), t), {}))(t[a]) : t[a];
              return Object.keys(n).reduce((t, a) => !t || !n[t].loaded && ((t, a) => {
                t = e(t), a = e(a);
                for (var r = 0;;) {
                  if (r >= t.length) return r < a.length && "u" != (typeof a[r])[0];
                  var n = t[r],
                    o = (typeof n)[0];
                  if (r >= a.length) return "u" == o;
                  var c = a[r],
                    d = (typeof c)[0];
                  if (o != d) return "o" == o && "n" == d || "s" == d || "u" == o;
                  if ("o" != o && "u" != o && n != c) return n < c;
                  r++
                }
              })(t, a) ? a : t, 0)
            },
            n = (e, t, a) => a ? a() : ((e, t) => (e => {
              throw new Error(e)
            })("Shared module " + t + " doesn't exist in shared scope " + e))(e, t),
            c = (e => function(t, a, r, n, c) {
              const d = o.I(t);
              return d?.then && !r ? d.then(e.bind(e, t, o.S[t], a, !1, n, c)) : e(t, o.S[t], a, r, n, c)
            })((e, c, d, f, s, l) => {
              if (!((e, t) => e && o.o(e, t))(c, d)) return n(e, d, l);
              const i = r(c, d, f);
              return a(s, i) || (u = ((e, a, r, n) => "Unsatisfied version " + r + " from " + (r && e[a][r].from) + " of shared singleton module " + a + " (required " + t(n) + ")")(c, d, i, s), "undefined" != typeof console && console.warn && console.warn(u)), (b = c[d][i]).loaded = 1, b.get();
              var b, u
            }),
            d = {},
            f = {
              93082: () => c("default", "react", !1, [0], () => o.e(2581).then(() => () => o(22581))),
              84017: () => c("default", "react-dom", !1, [1, 18, 2, 0], () => o.e(162).then(() => () => o(30162))),
              40283: () => c("default", "lodash-es", !1, [0], () => Promise.all([o.e(4309), o.e(5505)]).then(() => () => o(65505))),
              13331: () => c("default", "@rsgweb/utils", !1, [0], () => Promise.all([o.e(2381), o.e(3565), o.e(283), o.e(2909), o.e(9225), o.e(195), o.e(6406), o.e(6428)]).then(() => () => o(64047))),
              42909: () => c("default", "@rsgweb/locale-tools", !1, [0], () => Promise.all([o.e(761), o.e(283), o.e(2325)]).then(() => () => o(77377))),
              99225: () => c("default", "react-router-dom", !1, [0], () => Promise.all([o.e(9860), o.e(4017)]).then(() => () => o(79860))),
              81270: () => c("default", "clsx", !1, [1, 2, 1, 1], () => o.e(4921).then(() => () => o(4921))),
              17301: () => c("default", "@rsgweb/tina", !1, [0], () => Promise.all([o.e(883), o.e(4309), o.e(325), o.e(4017), o.e(283), o.e(3331), o.e(2909), o.e(2199), o.e(6406), o.e(2741), o.e(3115)]).then(() => () => o(51145))),
              82199: () => c("default", "@rsgweb/rockstar-account", !1, [0], () => Promise.all([o.e(2381), o.e(6918), o.e(283), o.e(3331), o.e(9225), o.e(195), o.e(323)]).then(() => () => o(323))),
              42285: () => c("default", "react-intersection-observer", !1, [1, 9, 16, 0], () => o.e(3939).then(() => () => o(26320))),
              44392: () => c("default", "@foundry/react", !1, [0], () => Promise.all([o.e(761), o.e(5756), o.e(5051), o.e(2396), o.e(2154)]).then(() => () => o(62154))),
              91681: () => c("default", "dompurify", !1, [1, 2, 5, 9], () => o.e(62).then(() => () => o(50062))),
              10475: () => c("default", "@rsgweb/modules-core-highlights", !1, [0], () => Promise.all([o.e(9633), o.e(1933)]).then(() => () => o(21933))),
              35643: () => c("default", "@rsgweb/modules-core-carousel", !1, [0], () => Promise.all([o.e(5367), o.e(4692)]).then(() => () => o(4692))),
              59139: () => c("default", "@rsgweb/modules-core-engagement", !1, [0], () => Promise.all([o.e(2992), o.e(9732)]).then(() => () => o(52840))),
              72527: () => c("default", "@rsgweb/modules-core-group-of-items", !1, [0], () => o.e(9357).then(() => () => o(99357))),
              87486: () => c("default", "text-balancer", !1, [1, 1, 0, 5], () => o.e(4016).then(() => () => o(34016))),
              92910: () => c("default", "react-jsx-parser", !1, [1, 2, 4, 1], () => o.e(6932).then(() => () => o(76932))),
              93488: () => c("default", "@foundry/react", !1, [0], () => Promise.all([o.e(761), o.e(5051), o.e(3496)]).then(() => () => o(33496)))
            },
            s = {
              283: [40283],
              1270: [81270],
              1588: [44392],
              2199: [82199],
              2285: [42285],
              2909: [42909],
              3082: [93082],
              3331: [13331],
              4017: [84017],
              6936: [10475, 35643, 59139, 72527, 87486, 92910, 93488],
              7301: [17301],
              9225: [99225],
              9775: [91681]
            },
            l = {};
          o.f.consumes = (e, t) => {
            o.o(s, e) && s[e].forEach(e => {
              if (o.o(d, e)) return t.push(d[e]);
              if (!l[e]) {
                const a = t => {
                  d[e] = 0, o.m[e] = a => {
                    delete o.c[e], a.exports = t()
                  }
                };
                l[e] = !0;
                const r = t => {
                  delete d[e], o.m[e] = a => {
                    throw delete o.c[e], t
                  }
                };
                try {
                  const n = f[e]();
                  n.then ? t.push(d[e] = n.then(a).catch(r)) : a(n)
                } catch (e) {
                  r(e)
                }
              }
            })
          }
        })(), (() => {
          if ("undefined" != typeof document) {
            var e = {
              6947: 0
            };
            o.f.miniCss = (t, a) => {
              e[t] ? a.push(e[t]) : 0 !== e[t] && {
                1588: 1,
                2154: 1,
                2612: 1,
                3115: 1,
                3496: 1,
                4110: 1,
                4612: 1,
                4830: 1,
                5051: 1,
                5367: 1,
                6722: 1,
                6936: 1,
                7419: 1,
                8021: 1,
                8601: 1,
                9357: 1,
                9633: 1,
                9732: 1,
                9775: 1
              } [t] && a.push(e[t] = (e => new Promise((t, a) => {
                var r = o.miniCssF(e),
                  n = o.p + r;
                if (((e, t) => {
                    for (var a = document.getElementsByTagName("link"), r = 0; r < a.length; r++) {
                      var n = (c = a[r]).getAttribute("data-href") || c.getAttribute("href");
                      if ("stylesheet" === c.rel && (n === e || n === t)) return c
                    }
                    var o = document.getElementsByTagName("style");
                    for (r = 0; r < o.length; r++) {
                      var c;
                      if ((n = (c = o[r]).getAttribute("data-href")) === e || n === t) return c
                    }
                  })(r, n)) return t();
                ((e, t, a, r, n) => {
                  var c = document.createElement("link");
                  c.rel = "stylesheet", c.type = "text/css", o.nc && (c.nonce = o.nc), c.onerror = c.onload = a => {
                    if (c.onerror = c.onload = null, "load" === a.type) r();
                    else {
                      var o = a && a.type,
                        d = a && a.target && a.target.href || t,
                        f = new Error("Loading CSS chunk " + e + " failed.\n(" + o + ": " + d + ")");
                      f.name = "ChunkLoadError", f.code = "CSS_CHUNK_LOAD_FAILED", f.type = o, f.request = d, c.parentNode && c.parentNode.removeChild(c), n(f)
                    }
                  }, c.href = t, document.head.appendChild(c)
                })(e, n, 0, t, a)
              }))(t).then(() => {
                e[t] = 0
              }, a => {
                throw delete e[t], a
              }))
            }
          }
        })(), (() => {
          const e = {
            6947: 0
          };
          o.f.j = (t, a) => {
            let r = o.o(e, t) ? e[t] : void 0;
            if (0 !== r)
              if (r) a.push(r[2]);
              else if (/^(2(199|285|83|909)|3(082|115|331)|9(225|633|732|775)|1270|4017|5367|7301)$/.test(t)) e[t] = 0;
            else {
              const n = new Promise((a, n) => r = e[t] = [a, n]);
              a.push(r[2] = n);
              const c = o.p + o.u(t),
                d = new Error,
                f = a => {
                  if (o.o(e, t) && (r = e[t], 0 !== r && (e[t] = void 0), r)) {
                    const e = a && ("load" === a.type ? "missing" : a.type),
                      n = a && a.target && a.target.src;
                    d.message = "Loading chunk " + t + " failed.\n(" + e + ": " + n + ")", d.name = "ChunkLoadError", d.type = e, d.request = n, r[1](d)
                  }
                };
              o.l(c, f, "chunk-" + t, t)
            }
          };
          const t = (t, a) => {
              let [r, n, c] = a;
              var d, f, s = 0;
              if (r.some(t => 0 !== e[t])) {
                for (d in n) o.o(n, d) && (o.m[d] = n[d]);
                c && c(o)
              }
              for (t && t(a); s < r.length; s++) f = r[s], o.o(e, f) && e[f] && e[f][0](), e[f] = 0
            },
            a = self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || [];
          a.forEach(t.bind(null, 0)), a.push = t.bind(null, a.push.bind(a))
        })(), o.nc = void 0, o(87732), o(57761)
      })())
    }
  }
});