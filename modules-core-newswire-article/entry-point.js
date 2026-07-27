try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "3a1be817-1543-46fd-b8e9-6525f9d7a63d", e._sentryDebugIdIdentifier = "sentry-dbid-3a1be817-1543-46fd-b8e9-6525f9d7a63d")
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
              for (var r = "/" === a.pathname[0] ? a.pathname : "/" + a.pathname, c = 0, n = r.length; c !== t && n >= 0;) "/" === r[--n] && c++;
              if (c !== t) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + t + ") is greater than the number of directories (" + c + ") in the URL path " + e);
              var o = r.slice(0, n + 1);
              return a.protocol + "//" + a.host + o
            };
            Number.isInteger
          },
          57761(e, t, a) {
            "use strict";
            const r = {
                "./index": () => Promise.all([a.e(883), a.e(5756), a.e(516), a.e(1827), a.e(4940), a.e(2357), a.e(2538), a.e(5255), a.e(5545), a.e(6982), a.e(5980), a.e(9944), a.e(3082), a.e(4017), a.e(283), a.e(3331), a.e(2909), a.e(9225), a.e(1270), a.e(7301), a.e(2199), a.e(4110), a.e(2285), a.e(4894), a.e(9775), a.e(1242)]).then(() => () => a(46190)),
                "./tina": () => a.e(2562).then(() => () => a(2562))
              },
              c = (e, t) => (a.R = t, t = a.o(r, e) ? r[e]() : Promise.resolve().then(() => {
                throw new Error('Module "' + e + '" does not exist in container.')
              }), a.R = void 0, t),
              n = (e, t) => {
                if (!a.S) return;
                const r = "default",
                  c = a.S[r];
                if (c && c !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                return a.S[r] = e, a.I(r, t)
              };
            a.d(t, {
              get: () => c,
              init: () => n
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
        const c = {};

        function n(t) {
          const a = c[t];
          if (void 0 !== a) return a.exports;
          const r = c[t] = {
            id: t,
            loaded: !1,
            exports: {}
          };
          return e[t].call(r.exports, r, r.exports, n), r.loaded = !0, r.exports
        }
        return n.m = e, n.c = c, n.y = t, n.amdO = {}, n.n = e => {
          const t = e && e.__esModule ? () => e.default : () => e;
          return n.d(t, {
            a: t
          }), t
        }, (() => {
          const e = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__;
          let t;
          n.t = function(a, r) {
            if (1 & r && (a = this(a)), 8 & r) return a;
            if ("object" == typeof a && a) {
              if (4 & r && a.__esModule) return a;
              if (16 & r && "function" == typeof a.then) return a
            }
            const c = Object.create(null);
            n.r(c);
            const o = {};
            t = t || [null, e({}), e([]), e(e)];
            for (var d = 2 & r && a;
              ("object" == typeof d || "function" == typeof d) && !~t.indexOf(d); d = e(d)) Object.getOwnPropertyNames(d).forEach(e => o[e] = () => a[e]);
            return o.default = () => a, n.d(c, o), c
          }
        })(), n.d = (e, t) => {
          if (Array.isArray(t))
            for (var a = 0; a < t.length;) {
              var r = t[a++],
                c = t[a++];
              n.o(e, r) ? 0 === c && a++ : 0 === c ? Object.defineProperty(e, r, {
                enumerable: !0,
                value: t[a++]
              }) : Object.defineProperty(e, r, {
                enumerable: !0,
                get: c
              })
            } else
              for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, {
                enumerable: !0,
                get: t[r]
              })
        }, n.f = {}, n.e = e => Promise.all(Object.keys(n.f).reduce((t, a) => (n.f[a](e, t), t), [])), n.u = e => "js/" + {
          4: "368bc6ef4a950bb7de4aa3946178a34a",
          62: "ea78862aa4e93b082144e7fe78380bc5",
          162: "e2e48d49e10f1bb0c6b1c4f77663b7d1",
          195: "25c3d9ef1ac98c5fa897016b56601ac0",
          247: "fdfa24d6fc9b372ee1066a4c516b2c39",
          323: "cf1849ccf8fc89d65e36e708795ff853",
          325: "82c68226a42138fe8108094bc117e65d",
          516: "92a0e954e5e83466e68518afa2958d45",
          700: "b697c150fe879943daba23170bbfd47e",
          754: "69c605bd00cca51a5a07cee416319843",
          761: "d9f1b5db3df7891e0b19dfed8d5c9e8e",
          883: "69f81c90eb7fa73aeed3cea3a872f160",
          937: "d406f3724f3d6c9cef400880f8ee6ff7",
          1242: "e323bf32cf46618d1cd8343818891cf6",
          1376: "e2a29669e412ba62724a558381036514",
          1827: "24049b566b2df1c9ea0113d3a8ec534b",
          1887: "502ac9acb313081f0f75a650ac682091",
          1933: "15a5fe508e9c832cfdef3e7962cbcd44",
          2325: "7336aaac2f5d0cd0a4f2dc6d1c127745",
          2357: "dcd70f0ab60b39239a0a78f09bb49733",
          2381: "b4fd452d1bee6ebf47ca6b7c7f3ee7a1",
          2414: "89ef42e68464705d92be5308f42cfc39",
          2538: "3ae87cb5d15a35f328bacd7a730492dd",
          2562: "ba49b39ed1e21754cb3df900c08fe101",
          2581: "a465560602978aa538db5425c312a583",
          2662: "13a4d62ec98c12e1eb3e25a2077bdd4a",
          2704: "ac8148fc8189cbc98df910d10fe9165d",
          2741: "fcce202ffcbacf2e19d2df26ecdda5e0",
          3431: "d0732bcf54a961169d5467966e5155f8",
          3565: "fc19489a1969e1e679ef3fe1fe745f37",
          3619: "d293590cc8371f72c85c55e57f6a005f",
          3622: "18c64ea3b7ec0a0148c60775568de2c9",
          3656: "bc4593d8f0aa92249702a7f7bf4b3162",
          3939: "eb91c70a29909b3e4c2f711e84aacf9f",
          4016: "6609c4477d22969bd21034418400c08a",
          4047: "f0ba9985c311c5c1a4bfb7aaf259afb8",
          4110: "f1deec22ae6e803bcef137aceb2df380",
          4143: "0a6fedc91cb188e12e9ff06b55fd3bef",
          4309: "07e8a3a4e7b71c80938bd7c3a048d86a",
          4314: "271c7d912fe263739c14094dcc01e2ea",
          4421: "a7b5392b82ed480e361ab5ac32f9c16b",
          4692: "ccf496803075079ac92b2b5da18f3de0",
          4706: "a48e7a1b5ca7c19525c744cf514a72d9",
          4894: "29ca5916786b94d075f1949f2d19e0f9",
          4921: "ad7e95b8ce89afd8caaa4e8383f7ad68",
          4940: "b5605486645984802400080dbfc3c7e2",
          5140: "04a11ccd4cbf179e90d46397b068b23e",
          5255: "9ec5a640042f81de0b8fbd544f21f4c0",
          5296: "9a6f9d13f8bb8a4f8fffb454e2b1f2fb",
          5505: "31e80723f23f68ce6f1c40fe2265ad7b",
          5545: "1404f892acabdb1444267526331495bf",
          5756: "db624c1c6b20d1c196e6cfc9ecf015e8",
          5980: "f26658c0c82fc3aaa5af9d1a07390d08",
          6320: "0db43423de98ea0510be425a25721496",
          6383: "2af2cf0c31897677f9e09b98ec637d0d",
          6406: "3890c67c2111d4992f062ba837447b47",
          6428: "d7ea5186fb3091bb7752612674a64b47",
          6469: "d1e617aa1bb788cd12b8b37a9f8ebfbb",
          6574: "9e0c15100d40ecd68113f1aa1cf2f4e7",
          6701: "94d1f294c010756cee4aeb35c36e853c",
          6918: "1ca796affaba5f466a5dfaf3e1bd9736",
          6932: "eecb658f99b6e7c9626b4573ecc5ced2",
          6982: "c40c8c6b80618227101ad1e6b167280b",
          6994: "acf32380928e76bfae14a8ad05e8acb9",
          6998: "b9d85af90e65865ccd2d1ec321921f9e",
          7419: "1ab5f181481c402bc8c4cb143ab3288f",
          7471: "467ac6712d5909955071b70d742d4cde",
          8224: "551fb0abb11f43c61ae7c33253ef3155",
          8268: "0d432ccc9ac94b61c41138f25d151fed",
          8553: "40818e4ecd1914de5b7b954ef8b36c33",
          8578: "7728c0c9b1e6678da50797f13519dbe5",
          8727: "90958b68f4d62ca4408a462b1eead07b",
          8775: "6d4024f1dbe1a8a2e5eba7ea04c0e465",
          8898: "c18a4faa915a0cd8d7d7cd60f09ebbf2",
          8921: "b7a352b74cb56bd1c285c4544404b81a",
          9017: "e2c4e3fe8028ec5c4af3ab4b5e62255e",
          9022: "0cb24becb41dd823014176a3766404fc",
          9357: "aa1433f3321422ae1d7ac9007eda82f5",
          9629: "a7c6b60de909eb46924ff3f72a3c2e50",
          9860: "8cbac7d0591b08dd53c44a55e0d0e82a",
          9944: "0ead307ad65bce894084e3726b70fb04"
        } [e] + ".js", n.miniCssF = e => "css/" + {
          937: "c5961ff45ab2f26ffb7e50308f79c617",
          1242: "792f832a00089fd96b931f9d43b9c083",
          2414: "4927775c4763f94bb7eac3e9434b1567",
          3115: "384cddac2173849afd90c4a73e287f5e",
          4062: "bfe4e4109fd9c58c236be27a4498cde6",
          4110: "915d373fd494468e9b0648f0fc1b6314",
          4894: "90181f5f503830695ace14869df4afa3",
          5367: "101537b924f4411033bd9d2d8536a01a",
          5545: "1509e6ded142f7912c73b4ffd9412a78",
          6574: "f39de8b0c76a56f0ce42b624f3f0a652",
          6998: "fc87901d26c616fb6163d1992b094cea",
          7419: "384cddac2173849afd90c4a73e287f5e",
          8224: "5c3606a52c6a74868527c53c27971514",
          8578: "7c575cc0a210038808b12a81bf37629b",
          8727: "41c7d6822d60ff731131faba38922938",
          9357: "ef81dd31a2acf40a379ebf06814ce854",
          9633: "88a9b4d18fecd8b492423ffebbf2bb03",
          9775: "4790c1b9de793e76e3beb46ef6e70fdb",
          9944: "ba1b9439fa8ad4315b612d938fd84075"
        } [e] + ".css", n.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), (() => {
          const e = {},
            t = "@rockstargames/modules-core-newswire-article:";
          n.l = (a, r, c, o) => {
            if (e[a]) return void e[a].push(r);
            let d, f;
            if (void 0 !== c) {
              const e = document.getElementsByTagName("script");
              for (var s = 0; s < e.length; s++) {
                const r = e[s];
                if (r.getAttribute("src") == a || r.getAttribute("data-webpack") == t + c) {
                  d = r;
                  break
                }
              }
            }
            d || (f = !0, d = document.createElement("script"), d.charset = "utf-8", n.nc && d.setAttribute("nonce", n.nc), d.setAttribute("data-webpack", t + c), d.src = a), e[a] = [r];
            const l = (t, r) => {
                d.onerror = d.onload = null, clearTimeout(b);
                const c = e[a];
                if (delete e[a], d.parentNode?.removeChild(d), c?.forEach(e => e(r)), t) return t(r)
              },
              b = setTimeout(l.bind(null, void 0, {
                type: "timeout",
                target: d
              }), 12e4);
            d.onerror = l.bind(null, d.onerror), d.onload = l.bind(null, d.onload), f && document.head.appendChild(d)
          }
        })(), n.r = e => {
          Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, n.nmd = e => (e.paths = [], e.children || (e.children = []), e), (() => {
          const e = {
              1242: [64064],
              9775: [31879]
            },
            t = {
              31879: ["default", "./index", 25136],
              64064: ["default", "./index", 29441]
            };
          n.f.remotes = (a, r) => {
            n.o(e, a) && e[a].forEach(e => {
              let a = n.R;
              a || (a = []);
              const c = t[e];
              if (a.indexOf(c) >= 0) return;
              if (a.push(c), c.p) return r.push(c.p);
              const o = t => {
                  t || (t = new Error("Container missing")), "string" == typeof t.message && (t.message += '\nwhile loading "' + c[1] + '" from ' + c[2]), n.m[e] = () => {
                    throw t
                  }, c.p = 0
                },
                d = (e, t, a, n, d, f) => {
                  try {
                    const s = e(t, a);
                    if (!s?.then) return d(s, n, f); {
                      const e = s.then(e => d(e, n), o);
                      if (!f) return e;
                      r.push(c.p = e)
                    }
                  } catch (e) {
                    o(e)
                  }
                },
                f = (e, t, r) => d(t.get, c[1], a, 0, s, r),
                s = t => {
                  c.p = 1, n.m[e] = e => {
                    e.exports = t()
                  }
                };
              d(n, c[2], 0, 0, (e, t, a) => e ? d(n.I, c[0], 0, e, f, a) : o(), 1)
            })
          }
        })(), (() => {
          n.S = {};
          const e = {},
            t = {};
          n.I = (a, r) => {
            r || (r = []);
            let c = t[a];
            if (c || (c = t[a] = {}), r.indexOf(c) >= 0) return;
            if (r.push(c), e[a]) return e[a];
            n.o(n.S, a) || (n.S[a] = {});
            const o = n.S[a],
              d = "@rockstargames/modules-core-newswire-article",
              f = (e, t, a, r) => {
                const c = o[e] = o[e] || {},
                  n = c[t];
                (!n || !n.loaded && (!r != !n.eager ? r : d > n.from)) && (c[t] = {
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
                  const c = n(e);
                  if (!c) return;
                  const o = e => e && e.init && e.init(n.S[a], r);
                  if (c.then) return l.push(c.then(o, t));
                  const d = o(c);
                  if (d?.then) return l.push(d.catch(t))
                } catch (e) {
                  t(e)
                }
              },
              l = [];
            return "default" === a && (f("@foundry/react", "6.4.0", () => Promise.all([n.e(883), n.e(761), n.e(5756), n.e(516), n.e(1827), n.e(6998), n.e(2357), n.e(2414), n.e(3082), n.e(4017), n.e(1270), n.e(8578)]).then(() => () => n(32414))), f("@foundry/react", "6.4.0", () => Promise.all([n.e(883), n.e(761), n.e(5756), n.e(516), n.e(1827), n.e(6998), n.e(2357), n.e(2538), n.e(8224), n.e(5545), n.e(3082), n.e(4017), n.e(1270), n.e(3431)]).then(() => () => n(8224))), f("@rsgweb/locale-tools", "0.0.0", () => Promise.all([n.e(761), n.e(3082), n.e(283), n.e(4706)]).then(() => () => n(77377))), f("@rsgweb/modules-core-carousel", "0.0.0", () => Promise.all([n.e(883), n.e(5756), n.e(516), n.e(1827), n.e(4940), n.e(2538), n.e(3082), n.e(4017), n.e(3331), n.e(1270), n.e(7301), n.e(4110), n.e(5367), n.e(937)]).then(() => () => n(4692))), f("@rsgweb/modules-core-engagement", "0.0.0", () => Promise.all([n.e(883), n.e(516), n.e(1827), n.e(4940), n.e(5255), n.e(6982), n.e(3082), n.e(4017), n.e(283), n.e(3331), n.e(2909), n.e(9225), n.e(1270), n.e(7301), n.e(2199), n.e(2285), n.e(1887), n.e(4894), n.e(6574)]).then(() => () => n(96507))), f("@rsgweb/modules-core-group-of-items", "0.0.0", () => Promise.all([n.e(883), n.e(5756), n.e(516), n.e(4940), n.e(2538), n.e(3082), n.e(4017), n.e(3331), n.e(1270), n.e(7301), n.e(4110), n.e(9775), n.e(8727)]).then(() => () => n(99357))), f("@rsgweb/modules-core-highlights", "0.0.0", () => Promise.all([n.e(4940), n.e(5255), n.e(5980), n.e(3082), n.e(2909), n.e(7301), n.e(2199), n.e(2285), n.e(9633), n.e(4314)]).then(() => () => n(21933))), f("@rsgweb/rockstar-account", "0.0.0", () => Promise.all([n.e(2381), n.e(6918), n.e(3082), n.e(283), n.e(3331), n.e(2909), n.e(9225), n.e(195), n.e(2704)]).then(() => () => n(323))), f("@rsgweb/tina", "0.0.0", () => Promise.all([n.e(883), n.e(4309), n.e(325), n.e(3082), n.e(4017), n.e(283), n.e(3331), n.e(2909), n.e(2199), n.e(6406), n.e(2741), n.e(7419)]).then(() => () => n(51145))), f("@rsgweb/utils", "0.0.0-development", () => Promise.all([n.e(2381), n.e(3565), n.e(3082), n.e(283), n.e(2909), n.e(9225), n.e(195), n.e(6406), n.e(4047)]).then(() => () => n(64047))), f("clsx", "2.1.1", () => n.e(4921).then(() => () => n(4921))), f("dompurify", "2.5.9", () => n.e(62).then(() => () => n(50062))), f("lodash-es", "4.18.1", () => Promise.all([n.e(4309), n.e(5505)]).then(() => () => n(65505))), f("react-dom", "18.3.1", () => Promise.all([n.e(162), n.e(3082)]).then(() => () => n(30162))), f("react-intersection-observer", "9.16.0", () => Promise.all([n.e(3082), n.e(6320)]).then(() => () => n(26320))), f("react-jsx-parser", "2.4.1", () => Promise.all([n.e(6932), n.e(3082)]).then(() => () => n(76932))), f("react-router-dom", "6.30.4", () => Promise.all([n.e(9860), n.e(3082), n.e(4017)]).then(() => () => n(79860))), f("react", "18.3.1", () => n.e(2581).then(() => () => n(22581))), f("text-balancer", "1.0.5", () => n.e(4016).then(() => () => n(34016))), s(25136), s(29441)), l.length ? e[a] = Promise.all(l).then(() => e[a] = 1) : e[a] = 1
          }
        })(), (() => {
          let e;
          n.g.importScripts && (e = n.g.location + "");
          const t = n.g.document;
          if (!e && t && ("SCRIPT" === t.currentScript?.tagName.toUpperCase() && (e = t.currentScript.src), !e)) {
            const a = t.getElementsByTagName("script");
            if (a.length) {
              let t = a.length - 1;
              for (; t > -1 && (!e || !/^http(s?):/.test(e));) e = a[t--].src
            }
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), n.p = e
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
                for (var c = 1, n = 1; n < e.length; n++) c--, r += "u" == (typeof(d = e[n]))[0] ? "-" : (c > 0 ? "." : "") + (c = 2, d);
                return r
              }
              var o = [];
              for (n = 1; n < e.length; n++) {
                var d = e[n];
                o.push(0 === d ? "not(" + f() + ")" : 1 === d ? "(" + f() + " || " + f() + ")" : 2 === d ? o.pop() + " " + o.pop() : t(d))
              }
              return f();

              function f() {
                return o.pop().replace(/^\((.+)\)$/, "$1")
              }
            },
            a = (t, r) => {
              if (0 in t) {
                r = e(r);
                var c = t[0],
                  n = c < 0;
                n && (c = -c - 1);
                for (var o = 0, d = 1, f = !0;; d++, o++) {
                  var s, l, b = d < t.length ? (typeof t[d])[0] : "";
                  if (o >= r.length || "o" == (l = (typeof(s = r[o]))[0])) return !f || ("u" == b ? d > c && !n : "" == b != n);
                  if ("u" == l) {
                    if (!f || "u" != b) return !1
                  } else if (f)
                    if (b == l)
                      if (d <= c) {
                        if (s != t[d]) return !1
                      } else {
                        if (n ? s > t[d] : s < t[d]) return !1;
                        s != t[d] && (f = !1)
                      }
                  else if ("s" != b && "n" != b) {
                    if (n || d <= c) return !1;
                    f = !1, d--
                  } else {
                    if (d <= c || l < b != n) return !1;
                    f = !1
                  } else "s" != b && "n" != b && (f = !1, d--)
                }
              }
              var i = [],
                u = i.pop.bind(i);
              for (o = 1; o < t.length; o++) {
                var h = t[o];
                i.push(1 == h ? u() | u() : 2 == h ? u() & u() : h ? a(h, r) : !u())
              }
              return !!u()
            };
          const r = (t, a, r) => {
              const c = r ? (e => Object.keys(e).reduce((t, a) => (e[a].eager && (t[a] = e[a]), t), {}))(t[a]) : t[a];
              return Object.keys(c).reduce((t, a) => !t || !c[t].loaded && ((t, a) => {
                t = e(t), a = e(a);
                for (var r = 0;;) {
                  if (r >= t.length) return r < a.length && "u" != (typeof a[r])[0];
                  var c = t[r],
                    n = (typeof c)[0];
                  if (r >= a.length) return "u" == n;
                  var o = a[r],
                    d = (typeof o)[0];
                  if (n != d) return "o" == n && "n" == d || "s" == d || "u" == n;
                  if ("o" != n && "u" != n && c != o) return c < o;
                  r++
                }
              })(t, a) ? a : t, 0)
            },
            c = (e, t, a) => a ? a() : ((e, t) => (e => {
              throw new Error(e)
            })("Shared module " + t + " doesn't exist in shared scope " + e))(e, t),
            o = (e => function(t, a, r, c, o) {
              const d = n.I(t);
              return d?.then && !r ? d.then(e.bind(e, t, n.S[t], a, !1, c, o)) : e(t, n.S[t], a, r, c, o)
            })((e, o, d, f, s, l) => {
              if (!((e, t) => e && n.o(e, t))(o, d)) return c(e, d, l);
              const b = r(o, d, f);
              return a(s, b) || (u = ((e, a, r, c) => "Unsatisfied version " + r + " from " + (r && e[a][r].from) + " of shared singleton module " + a + " (required " + t(c) + ")")(o, d, b, s), "undefined" != typeof console && console.warn && console.warn(u)), (i = o[d][b]).loaded = 1, i.get();
              var i, u
            }),
            d = {},
            f = {
              93082: () => o("default", "react", !1, [0], () => n.e(2581).then(() => () => n(22581))),
              84017: () => o("default", "react-dom", !1, [1, 18, 2, 0], () => n.e(162).then(() => () => n(30162))),
              40283: () => o("default", "lodash-es", !1, [0], () => Promise.all([n.e(4309), n.e(5505)]).then(() => () => n(65505))),
              13331: () => o("default", "@rsgweb/utils", !1, [0], () => Promise.all([n.e(2381), n.e(3565), n.e(283), n.e(2909), n.e(9225), n.e(195), n.e(6406), n.e(6428)]).then(() => () => n(64047))),
              42909: () => o("default", "@rsgweb/locale-tools", !1, [0], () => Promise.all([n.e(761), n.e(283), n.e(2325)]).then(() => () => n(77377))),
              99225: () => o("default", "react-router-dom", !1, [0], () => Promise.all([n.e(9860), n.e(4017)]).then(() => () => n(79860))),
              81270: () => o("default", "clsx", !1, [1, 2, 1, 1], () => n.e(4921).then(() => () => n(4921))),
              17301: () => o("default", "@rsgweb/tina", !1, [0], () => Promise.all([n.e(883), n.e(4309), n.e(325), n.e(4017), n.e(283), n.e(3331), n.e(2909), n.e(2199), n.e(6406), n.e(2741), n.e(3115)]).then(() => () => n(51145))),
              82199: () => o("default", "@rsgweb/rockstar-account", !1, [0], () => Promise.all([n.e(2381), n.e(6918), n.e(283), n.e(3331), n.e(9225), n.e(195), n.e(323)]).then(() => () => n(323))),
              42285: () => o("default", "react-intersection-observer", !1, [1, 9, 16, 0], () => n.e(3939).then(() => () => n(26320))),
              12394: () => o("default", "@foundry/react", !1, [0], () => Promise.all([n.e(761), n.e(5756), n.e(6998), n.e(2357), n.e(2414)]).then(() => () => n(32414))),
              91681: () => o("default", "dompurify", !1, [1, 2, 5, 9], () => n.e(62).then(() => () => n(50062))),
              10475: () => o("default", "@rsgweb/modules-core-highlights", !1, [0], () => Promise.all([n.e(9633), n.e(1933)]).then(() => () => n(21933))),
              35643: () => o("default", "@rsgweb/modules-core-carousel", !1, [0], () => Promise.all([n.e(5367), n.e(4692)]).then(() => () => n(4692))),
              46014: () => o("default", "@foundry/react", !1, [0], () => Promise.all([n.e(761), n.e(6998), n.e(8224)]).then(() => () => n(8224))),
              59139: () => o("default", "@rsgweb/modules-core-engagement", !1, [0], () => Promise.all([n.e(1887), n.e(4062)]).then(() => () => n(96507))),
              72527: () => o("default", "@rsgweb/modules-core-group-of-items", !1, [0], () => n.e(9357).then(() => () => n(99357))),
              87486: () => o("default", "text-balancer", !1, [1, 1, 0, 5], () => n.e(4016).then(() => () => n(34016))),
              92910: () => o("default", "react-jsx-parser", !1, [1, 2, 4, 1], () => n.e(6932).then(() => () => n(76932)))
            },
            s = {
              283: [40283],
              1242: [10475, 35643, 46014, 59139, 72527, 87486, 92910],
              1270: [81270],
              2199: [82199],
              2285: [42285],
              2909: [42909],
              3082: [93082],
              3331: [13331],
              4017: [84017],
              4894: [12394],
              7301: [17301],
              9225: [99225],
              9775: [91681]
            },
            l = {};
          n.f.consumes = (e, t) => {
            n.o(s, e) && s[e].forEach(e => {
              if (n.o(d, e)) return t.push(d[e]);
              if (!l[e]) {
                const a = t => {
                  d[e] = 0, n.m[e] = a => {
                    delete n.c[e], a.exports = t()
                  }
                };
                l[e] = !0;
                const r = t => {
                  delete d[e], n.m[e] = a => {
                    throw delete n.c[e], t
                  }
                };
                try {
                  const c = f[e]();
                  c.then ? t.push(d[e] = c.then(a).catch(r)) : a(c)
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
            n.f.miniCss = (t, a) => {
              e[t] ? a.push(e[t]) : 0 !== e[t] && {
                937: 1,
                1242: 1,
                2414: 1,
                3115: 1,
                4062: 1,
                4110: 1,
                4894: 1,
                5367: 1,
                5545: 1,
                6574: 1,
                6998: 1,
                7419: 1,
                8224: 1,
                8578: 1,
                8727: 1,
                9357: 1,
                9633: 1,
                9775: 1,
                9944: 1
              } [t] && a.push(e[t] = (e => new Promise((t, a) => {
                var r = n.miniCssF(e),
                  c = n.p + r;
                if (((e, t) => {
                    for (var a = document.getElementsByTagName("link"), r = 0; r < a.length; r++) {
                      var c = (o = a[r]).getAttribute("data-href") || o.getAttribute("href");
                      if ("stylesheet" === o.rel && (c === e || c === t)) return o
                    }
                    var n = document.getElementsByTagName("style");
                    for (r = 0; r < n.length; r++) {
                      var o;
                      if ((c = (o = n[r]).getAttribute("data-href")) === e || c === t) return o
                    }
                  })(r, c)) return t();
                ((e, t, a, r, c) => {
                  var o = document.createElement("link");
                  o.rel = "stylesheet", o.type = "text/css", n.nc && (o.nonce = n.nc), o.onerror = o.onload = a => {
                    if (o.onerror = o.onload = null, "load" === a.type) r();
                    else {
                      var n = a && a.type,
                        d = a && a.target && a.target.href || t,
                        f = new Error("Loading CSS chunk " + e + " failed.\n(" + n + ": " + d + ")");
                      f.name = "ChunkLoadError", f.code = "CSS_CHUNK_LOAD_FAILED", f.type = n, f.request = d, o.parentNode && o.parentNode.removeChild(o), c(f)
                    }
                  }, o.href = t, document.head.appendChild(o)
                })(e, c, 0, t, a)
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
          n.f.j = (t, a) => {
            let r = n.o(e, t) ? e[t] : void 0;
            if (0 !== r)
              if (r) a.push(r[2]);
              else if (/^(2(199|285|83|909)|3(082|115|331)|40(17|62)|9(225|633|775)|1270|5367|7301)$/.test(t)) e[t] = 0;
            else {
              const c = new Promise((a, c) => r = e[t] = [a, c]);
              a.push(r[2] = c);
              const o = n.p + n.u(t),
                d = new Error,
                f = a => {
                  if (n.o(e, t) && (r = e[t], 0 !== r && (e[t] = void 0), r)) {
                    const e = a && ("load" === a.type ? "missing" : a.type),
                      c = a && a.target && a.target.src;
                    d.message = "Loading chunk " + t + " failed.\n(" + e + ": " + c + ")", d.name = "ChunkLoadError", d.type = e, d.request = c, r[1](d)
                  }
                };
              n.l(o, f, "chunk-" + t, t)
            }
          };
          const t = (t, a) => {
              let [r, c, o] = a;
              var d, f, s = 0;
              if (r.some(t => 0 !== e[t])) {
                for (d in c) n.o(c, d) && (n.m[d] = c[d]);
                o && o(n)
              }
              for (t && t(a); s < r.length; s++) f = r[s], n.o(e, f) && e[f] && e[f][0](), e[f] = 0
            },
            a = self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || [];
          a.forEach(t.bind(null, 0)), a.push = t.bind(null, a.push.bind(a))
        })(), n.nc = void 0, n(87732), n(57761)
      })())
    }
  }
});