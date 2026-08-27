try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "e9a9995a-3a13-4f32-80c7-caa8d2c69f94", e._sentryDebugIdIdentifier = "sentry-dbid-e9a9995a-3a13-4f32-80c7-caa8d2c69f94")
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
          85946(e, t, a) {
            (0, a(69e3).w)(1)
          },
          69e3(e, t, a) {
            const r = a(31364).y;
            t.w = function(e) {
              if (e || (e = 1), !a.y.meta || !a.y.meta.url) throw console.error("__system_context__", a.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
              a.p = r(a.y.meta.url, e)
            }
          },
          64769(e, t, a) {
            a(85946)
          },
          31364(e, t, a) {
            t.y = function(e, t) {
              var a = document.createElement("a");
              a.href = e;
              for (var r = "/" === a.pathname[0] ? a.pathname : "/" + a.pathname, n = 0, d = r.length; n !== t && d >= 0;) "/" === r[--d] && n++;
              if (n !== t) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + t + ") is greater than the number of directories (" + n + ") in the URL path " + e);
              var o = r.slice(0, d + 1);
              return a.protocol + "//" + a.host + o
            };
            Number.isInteger
          },
          57761(e, t, a) {
            "use strict";
            const r = {
                "./index": () => Promise.all([a.e(883), a.e(8061), a.e(4997), a.e(7725), a.e(4940), a.e(5940), a.e(1904), a.e(8724), a.e(3685), a.e(2805), a.e(5980), a.e(8364), a.e(3082), a.e(4017), a.e(283), a.e(3331), a.e(2909), a.e(9225), a.e(1270), a.e(7301), a.e(2199), a.e(9724), a.e(2285), a.e(2957), a.e(3115), a.e(2021)]).then(() => () => a(10601)),
                "./tina": () => a.e(6144).then(() => () => a(46144))
              },
              n = (e, t) => (a.R = t, t = a.o(r, e) ? r[e]() : Promise.resolve().then(() => {
                throw new Error('Module "' + e + '" does not exist in container.')
              }), a.R = void 0, t),
              d = (e, t) => {
                if (!a.S) return;
                const r = "default",
                  n = a.S[r];
                if (n && n !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                return a.S[r] = e, a.I(r, t)
              };
            a.d(t, {
              get: () => n,
              init: () => d
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

        function d(t) {
          const a = n[t];
          if (void 0 !== a) return a.exports;
          const r = n[t] = {
            id: t,
            loaded: !1,
            exports: {}
          };
          return e[t].call(r.exports, r, r.exports, d), r.loaded = !0, r.exports
        }
        return d.m = e, d.c = n, d.y = t, d.amdO = {}, d.n = e => {
          const t = e && e.__esModule ? () => e.default : () => e;
          return d.d(t, {
            a: t
          }), t
        }, (() => {
          const e = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__;
          let t;
          d.t = function(a, r) {
            if (1 & r && (a = this(a)), 8 & r) return a;
            if ("object" == typeof a && a) {
              if (4 & r && a.__esModule) return a;
              if (16 & r && "function" == typeof a.then) return a
            }
            const n = Object.create(null);
            d.r(n);
            const o = {};
            t = t || [null, e({}), e([]), e(e)];
            for (var c = 2 & r && a;
              ("object" == typeof c || "function" == typeof c) && !~t.indexOf(c); c = e(c)) Object.getOwnPropertyNames(c).forEach(e => o[e] = () => a[e]);
            return o.default = () => a, d.d(n, o), n
          }
        })(), d.d = (e, t) => {
          if (Array.isArray(t))
            for (var a = 0; a < t.length;) {
              var r = t[a++],
                n = t[a++];
              d.o(e, r) ? 0 === n && a++ : 0 === n ? Object.defineProperty(e, r, {
                enumerable: !0,
                value: t[a++]
              }) : Object.defineProperty(e, r, {
                enumerable: !0,
                get: n
              })
            } else
              for (var r in t) d.o(t, r) && !d.o(e, r) && Object.defineProperty(e, r, {
                enumerable: !0,
                get: t[r]
              })
        }, d.f = {}, d.e = e => Promise.all(Object.keys(d.f).reduce((t, a) => (d.f[a](e, t), t), [])), d.u = e => "js/" + {
          62: "62eb9e3dc58079a8ad51ce90fcf82b8e",
          162: "531ab468140a2b638f9ecba270b7f8b6",
          606: "508a58a9ad6a7f1d279d1b7f61cf8595",
          761: "eba78cf1be9be61f6ae21b29cdf659b6",
          883: "d992247c8af1d19a58bc0e6fd04e3835",
          890: "2dcb0e3b683100a62b91ce1bbcf7ed84",
          1274: "6e4b66210e954214bf2a7a3348ae1d46",
          1503: "d93f53cc63f48bcd7a6305811d77b3b4",
          1605: "ee21990f0e56892a2acd896457bf5a50",
          1731: "43ac818d6abbc3ace3625f4194538e34",
          1904: "6d02f39396ac63889aa568ea73d71478",
          2021: "4383ab10398948195373a5e98b003be1",
          2219: "421dd9d82310511ccbf54d20b2faea56",
          2272: "92cdf5bcefe44280a99459d9e22fb2d9",
          2309: "09622fc6a4cfbdeade797c66fd053b1f",
          2329: "d00ff834e80c4894f532ed75ef901dc6",
          2333: "837bc706d4bc1a3ea5662ec58583f2c1",
          2346: "450dff14b873ad0b0bee7dadecd995d1",
          2581: "6fdf51d87093643acfe9878d4b05ac94",
          2656: "d2f484d18779ff9874deb00087a85eed",
          2805: "96244de21cc07ea5158d92c39529c0a9",
          2957: "beaee945eaaca57c443cdbf06a973807",
          3195: "297b91d525cff81f1cf4feb9cd33a57d",
          3431: "f2ee4dfc2d57d5151781e9fbf42adf2c",
          3548: "f643aae7757e90bb8806ee7a9682fb78",
          3667: "82bf2aa96402fc2b1c55d9c1bebd765a",
          3685: "48bcab8e69155e8f3eef96cd3a98a6f4",
          3939: "e6ba41cb43130530aaaa432ac6d0468b",
          4016: "05ab61f748c1c1a8f6a65a8e4415ecbd",
          4309: "cf5ae715be18a9d2d168c0ac908ed34b",
          4326: "79238378ae491a53a22e5d859c12d2af",
          4607: "9c253fa6b61eb7fa3688e1ef132da030",
          4921: "54b8ed6180ccf7dd281717c43924bdc8",
          4940: "562560bb27fb4e03b378fbc54138ca75",
          4962: "e6fa183e4378003b10c4e762c97bfe7b",
          4971: "eec0dbdef998742c72babf9aa8e456ac",
          4997: "3625519ae2c8a3c5842c54174b14a2d7",
          5096: "33dd97f67e96fe85dedaafd6ae5e1c32",
          5114: "c43928d8deccc03f496b462586837532",
          5505: "d91ea4784f12b692213b645db377a126",
          5529: "ba50fe94f6fcf8533a85b715a24fec84",
          5592: "94e798cbe6def6a78db663983e4e9468",
          5660: "ae587072e7b913c6cafe171006b4ae20",
          5847: "df9d3c4594d96ed1de113a7c7825e373",
          5901: "87ced9bdac3b835239adb3b680c53f20",
          5940: "59a4bf82a9419829e22b77e7900508f0",
          5980: "d01e5081a60a6fd5814ab4fc31da5c44",
          6048: "98f14d93ef8ed15818dfe47da0c245e4",
          6144: "94ce04e843d8eec9b86193b63a4db19e",
          6295: "395a9a572187200d3127c061cac5260a",
          6320: "4f41d127d118f6c987c13fe8310e6f1e",
          6405: "b2d2d05256545a5766af2b953e511214",
          6569: "c5c735e87a33c444906dd25b2318e5e6",
          6918: "8e3d32da1d7e1c9433ff0baf3384e406",
          6932: "3911e5ee713eac2ecbe1c973b4b10c46",
          6972: "dbc38974394d5a574c443189bd318875",
          7110: "14ef11c58cccdf9e7682c99647d7bd42",
          7177: "fe45d848e803288d02d6659d746ce507",
          7390: "95b129d7d53c657bbdfb14673cd0d289",
          7465: "d10ef7b31e24a243d6586b029dc0015c",
          7602: "b1fe579053968c3e986337b209a757e7",
          7725: "485acca4eabe2df6511709aef058693a",
          7886: "1212912db076e91bb1a1f90b2cce144a",
          8061: "b56c42c7ae9ef39406216cf437c8038e",
          8173: "34e44c1d69f1840a7fb39abb937b48a7",
          8225: "b942e438898769dbab94af77ad4b914f",
          8364: "6c4aae51ce6bba429d5b119c8cbb7318",
          8509: "3e6c75c926cf994a2f8350248cc81b6c",
          8696: "2959feb7e046cfa638400453b3581860",
          8724: "dd474e38bbcaa8e82df4ebd9654a915a",
          8784: "da47e315cd1320232087208ec62683d9",
          8950: "f44a4148133717435f27f1f743f63c2c",
          9103: "0bafd44f2b85466b5dc804ad312e44a7",
          9192: "51cb399eece81e527ffa0360bd3f338b",
          9269: "fd46d3e52ea239df0f5f87af8200bf1a",
          9663: "4b00560ef87a149a17a537175f1f3616",
          9708: "ac928944d3bc711909fac53ddac31a60",
          9724: "b1c2afed2889cf94a83932841e7e34bb",
          9860: "0ad35c62b10f66f134806c521b00a813",
          9933: "1654876066d89772efad3520b03357ab",
          9966: "218375c9240e2f4da60d19f8ef1a3640"
        } [e] + ".js", d.miniCssF = e => "css/" + {
          971: "101537b924f4411033bd9d2d8536a01a",
          1274: "41c7d6822d60ff731131faba38922938",
          1503: "384cddac2173849afd90c4a73e287f5e",
          1583: "384cddac2173849afd90c4a73e287f5e",
          2021: "3a1e70fed5766aafef50499650550ad6",
          2219: "c5961ff45ab2f26ffb7e50308f79c617",
          2432: "bfe4e4109fd9c58c236be27a4498cde6",
          2957: "90181f5f503830695ace14869df4afa3",
          3115: "4790c1b9de793e76e3beb46ef6e70fdb",
          3685: "8e0143f0dabe4c4bb134b07b6895ab9f",
          5114: "ef81dd31a2acf40a379ebf06814ce854",
          5592: "7081af09c3fcdeb9763687e15d45cd67",
          5901: "d4aed82e89f4415a9e05752177cdbf7a",
          7177: "7a3bb720d668a71264bb467d3dd84b28",
          8364: "fd780a7ad7329432c37a24e06508e0ac",
          9663: "0d34e55090095a940c6398ec5ed29ea6",
          9724: "915d373fd494468e9b0648f0fc1b6314",
          9733: "88a9b4d18fecd8b492423ffebbf2bb03",
          9966: "7c575cc0a210038808b12a81bf37629b"
        } [e] + ".css", d.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), d.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), (() => {
          const e = {},
            t = "@rockstargames/modules-core-newswire-article:";
          d.l = (a, r, n, o) => {
            if (e[a]) return void e[a].push(r);
            let c, f;
            if (void 0 !== n) {
              const e = document.getElementsByTagName("script");
              for (var s = 0; s < e.length; s++) {
                const r = e[s];
                if (r.getAttribute("src") == a || r.getAttribute("data-webpack") == t + n) {
                  c = r;
                  break
                }
              }
            }
            c || (f = !0, c = document.createElement("script"), c.charset = "utf-8", d.nc && c.setAttribute("nonce", d.nc), c.setAttribute("data-webpack", t + n), c.src = a), e[a] = [r];
            const b = (t, r) => {
                c.onerror = c.onload = null, clearTimeout(l);
                const n = e[a];
                if (delete e[a], c.parentNode?.removeChild(c), n?.forEach(e => e(r)), t) return t(r)
              },
              l = setTimeout(b.bind(null, void 0, {
                type: "timeout",
                target: c
              }), 12e4);
            c.onerror = b.bind(null, c.onerror), c.onload = b.bind(null, c.onload), f && document.head.appendChild(c)
          }
        })(), d.r = e => {
          Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, d.nmd = e => (e.paths = [], e.children || (e.children = []), e), (() => {
          const e = {
              2021: [64064],
              3115: [31879]
            },
            t = {
              31879: ["default", "./index", 25136],
              64064: ["default", "./index", 29441]
            };
          d.f.remotes = (a, r) => {
            d.o(e, a) && e[a].forEach(e => {
              let a = d.R;
              a || (a = []);
              const n = t[e];
              if (a.indexOf(n) >= 0) return;
              if (a.push(n), n.p) return r.push(n.p);
              const o = t => {
                  t || (t = new Error("Container missing")), "string" == typeof t.message && (t.message += '\nwhile loading "' + n[1] + '" from ' + n[2]), d.m[e] = () => {
                    throw t
                  }, n.p = 0
                },
                c = (e, t, a, d, c, f) => {
                  try {
                    const s = e(t, a);
                    if (!s?.then) return c(s, d, f); {
                      const e = s.then(e => c(e, d), o);
                      if (!f) return e;
                      r.push(n.p = e)
                    }
                  } catch (e) {
                    o(e)
                  }
                },
                f = (e, t, r) => c(t.get, n[1], a, 0, s, r),
                s = t => {
                  n.p = 1, d.m[e] = e => {
                    e.exports = t()
                  }
                };
              c(d, n[2], 0, 0, (e, t, a) => e ? c(d.I, n[0], 0, e, f, a) : o(), 1)
            })
          }
        })(), (() => {
          d.S = {};
          const e = {},
            t = {};
          d.I = (a, r) => {
            r || (r = []);
            let n = t[a];
            if (n || (n = t[a] = {}), r.indexOf(n) >= 0) return;
            if (r.push(n), e[a]) return e[a];
            d.o(d.S, a) || (d.S[a] = {});
            const o = d.S[a],
              c = "@rockstargames/modules-core-newswire-article",
              f = (e, t, a, r) => {
                const n = o[e] = o[e] || {},
                  d = n[t];
                (!d || !d.loaded && (!r != !d.eager ? r : c > d.from)) && (n[t] = {
                  get: a,
                  from: c,
                  eager: !!r
                })
              },
              s = e => {
                const t = e => {
                  return t = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(t));
                  var t
                };
                try {
                  const n = d(e);
                  if (!n) return;
                  const o = e => e && e.init && e.init(d.S[a], r);
                  if (n.then) return b.push(n.then(o, t));
                  const c = o(n);
                  if (c?.then) return b.push(c.catch(t))
                } catch (e) {
                  t(e)
                }
              },
              b = [];
            return "default" === a && (f("@foundry/react", "6.6.1", () => Promise.all([d.e(883), d.e(761), d.e(8061), d.e(4997), d.e(7725), d.e(7177), d.e(5940), d.e(9663), d.e(3082), d.e(4017), d.e(1270), d.e(9966)]).then(() => () => d(89663))), f("@foundry/react", "6.6.1", () => Promise.all([d.e(883), d.e(761), d.e(8061), d.e(4997), d.e(7725), d.e(7177), d.e(5940), d.e(1904), d.e(5901), d.e(3685), d.e(3082), d.e(4017), d.e(1270), d.e(3431)]).then(() => () => d(35901))), f("@rsgweb/locale-tools", "0.0.0", () => Promise.all([d.e(761), d.e(3082), d.e(283), d.e(6569)]).then(() => () => d(93506))), f("@rsgweb/modules-core-carousel", "0.0.0", () => Promise.all([d.e(883), d.e(8061), d.e(4997), d.e(7725), d.e(4940), d.e(1904), d.e(3082), d.e(4017), d.e(3331), d.e(1270), d.e(7301), d.e(9724), d.e(971), d.e(2219)]).then(() => () => d(8784))), f("@rsgweb/modules-core-engagement", "0.0.0", () => Promise.all([d.e(883), d.e(4997), d.e(7725), d.e(4940), d.e(8724), d.e(2805), d.e(3082), d.e(4017), d.e(283), d.e(3331), d.e(2909), d.e(9225), d.e(1270), d.e(7301), d.e(2199), d.e(2285), d.e(8173), d.e(2957), d.e(5592)]).then(() => () => d(76057))), f("@rsgweb/modules-core-group-of-items", "0.0.0", () => Promise.all([d.e(883), d.e(8061), d.e(4997), d.e(4940), d.e(1904), d.e(3082), d.e(4017), d.e(3331), d.e(1270), d.e(7301), d.e(9724), d.e(3115), d.e(1274)]).then(() => () => d(25114))), f("@rsgweb/modules-core-highlights", "0.0.0", () => Promise.all([d.e(4940), d.e(8724), d.e(5980), d.e(3082), d.e(2909), d.e(7301), d.e(2199), d.e(2285), d.e(9733), d.e(3667)]).then(() => () => d(6048))), f("@rsgweb/rockstar-account", "0.0.0", () => Promise.all([d.e(1605), d.e(6918), d.e(3082), d.e(283), d.e(3331), d.e(2909), d.e(9225), d.e(2272), d.e(890)]).then(() => () => d(18509))), f("@rsgweb/tina", "0.0.0", () => Promise.all([d.e(883), d.e(4309), d.e(6295), d.e(3082), d.e(4017), d.e(283), d.e(3331), d.e(2909), d.e(2199), d.e(9192), d.e(3548), d.e(1503)]).then(() => () => d(38512))), f("@rsgweb/utils", "0.0.0-development", () => Promise.all([d.e(1605), d.e(2333), d.e(3082), d.e(283), d.e(2909), d.e(9225), d.e(2272), d.e(9192), d.e(606)]).then(() => () => d(40606))), f("clsx", "2.1.1", () => d.e(4921).then(() => () => d(4921))), f("dompurify", "2.5.9", () => d.e(62).then(() => () => d(50062))), f("lodash-es", "4.18.1", () => Promise.all([d.e(4309), d.e(7886)]).then(() => () => d(65505))), f("react-dom", "18.3.1", () => Promise.all([d.e(162), d.e(3082)]).then(() => () => d(30162))), f("react-intersection-observer", "9.16.0", () => Promise.all([d.e(3082), d.e(6320)]).then(() => () => d(26320))), f("react-jsx-parser", "2.4.1", () => Promise.all([d.e(6932), d.e(3082)]).then(() => () => d(76932))), f("react-router-dom", "6.30.4", () => Promise.all([d.e(9860), d.e(3082), d.e(4017)]).then(() => () => d(79860))), f("react", "18.3.1", () => d.e(2581).then(() => () => d(22581))), f("text-balancer", "1.0.5", () => d.e(4016).then(() => () => d(34016))), s(25136), s(29441)), b.length ? e[a] = Promise.all(b).then(() => e[a] = 1) : e[a] = 1
          }
        })(), (() => {
          let e;
          d.g.importScripts && (e = d.g.location + "");
          const t = d.g.document;
          if (!e && t && ("SCRIPT" === t.currentScript?.tagName.toUpperCase() && (e = t.currentScript.src), !e)) {
            const a = t.getElementsByTagName("script");
            if (a.length) {
              let t = a.length - 1;
              for (; t > -1 && (!e || !/^http(s?):/.test(e));) e = a[t--].src
            }
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), d.p = e
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
                for (var n = 1, d = 1; d < e.length; d++) n--, r += "u" == (typeof(c = e[d]))[0] ? "-" : (n > 0 ? "." : "") + (n = 2, c);
                return r
              }
              var o = [];
              for (d = 1; d < e.length; d++) {
                var c = e[d];
                o.push(0 === c ? "not(" + f() + ")" : 1 === c ? "(" + f() + " || " + f() + ")" : 2 === c ? o.pop() + " " + o.pop() : t(c))
              }
              return f();

              function f() {
                return o.pop().replace(/^\((.+)\)$/, "$1")
              }
            },
            a = (t, r) => {
              if (0 in t) {
                r = e(r);
                var n = t[0],
                  d = n < 0;
                d && (n = -n - 1);
                for (var o = 0, c = 1, f = !0;; c++, o++) {
                  var s, b, l = c < t.length ? (typeof t[c])[0] : "";
                  if (o >= r.length || "o" == (b = (typeof(s = r[o]))[0])) return !f || ("u" == l ? c > n && !d : "" == l != d);
                  if ("u" == b) {
                    if (!f || "u" != l) return !1
                  } else if (f)
                    if (l == b)
                      if (c <= n) {
                        if (s != t[c]) return !1
                      } else {
                        if (d ? s > t[c] : s < t[c]) return !1;
                        s != t[c] && (f = !1)
                      }
                  else if ("s" != l && "n" != l) {
                    if (d || c <= n) return !1;
                    f = !1, c--
                  } else {
                    if (c <= n || b < l != d) return !1;
                    f = !1
                  } else "s" != l && "n" != l && (f = !1, c--)
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
              const n = r ? (e => Object.keys(e).reduce((t, a) => (e[a].eager && (t[a] = e[a]), t), {}))(t[a]) : t[a];
              return Object.keys(n).reduce((t, a) => !t || !n[t].loaded && ((t, a) => {
                t = e(t), a = e(a);
                for (var r = 0;;) {
                  if (r >= t.length) return r < a.length && "u" != (typeof a[r])[0];
                  var n = t[r],
                    d = (typeof n)[0];
                  if (r >= a.length) return "u" == d;
                  var o = a[r],
                    c = (typeof o)[0];
                  if (d != c) return "o" == d && "n" == c || "s" == c || "u" == d;
                  if ("o" != d && "u" != d && n != o) return n < o;
                  r++
                }
              })(t, a) ? a : t, 0)
            },
            n = (e, t, a) => a ? a() : ((e, t) => (e => {
              throw new Error(e)
            })("Shared module " + t + " doesn't exist in shared scope " + e))(e, t),
            o = (e => function(t, a, r, n, o) {
              const c = d.I(t);
              return c?.then && !r ? c.then(e.bind(e, t, d.S[t], a, !1, n, o)) : e(t, d.S[t], a, r, n, o)
            })((e, o, c, f, s, b) => {
              if (!((e, t) => e && d.o(e, t))(o, c)) return n(e, c, b);
              const l = r(o, c, f);
              return a(s, l) || (u = ((e, a, r, n) => "Unsatisfied version " + r + " from " + (r && e[a][r].from) + " of shared singleton module " + a + " (required " + t(n) + ")")(o, c, l, s), "undefined" != typeof console && console.warn && console.warn(u)), (i = o[c][l]).loaded = 1, i.get();
              var i, u
            }),
            c = {},
            f = {
              93082: () => o("default", "react", !1, [0], () => d.e(2581).then(() => () => d(22581))),
              84017: () => o("default", "react-dom", !1, [1, 18, 2, 0], () => d.e(162).then(() => () => d(30162))),
              40283: () => o("default", "lodash-es", !1, [0], () => Promise.all([d.e(4309), d.e(7886)]).then(() => () => d(65505))),
              13331: () => o("default", "@rsgweb/utils", !1, [0], () => Promise.all([d.e(1605), d.e(2333), d.e(283), d.e(2909), d.e(9225), d.e(2272), d.e(9192), d.e(8225)]).then(() => () => d(40606))),
              42909: () => o("default", "@rsgweb/locale-tools", !1, [0], () => Promise.all([d.e(761), d.e(283), d.e(8950)]).then(() => () => d(93506))),
              99225: () => o("default", "react-router-dom", !1, [0], () => Promise.all([d.e(9860), d.e(4017)]).then(() => () => d(79860))),
              81270: () => o("default", "clsx", !1, [1, 2, 1, 1], () => d.e(4921).then(() => () => d(4921))),
              17301: () => o("default", "@rsgweb/tina", !1, [0], () => Promise.all([d.e(883), d.e(4309), d.e(6295), d.e(4017), d.e(283), d.e(3331), d.e(2909), d.e(2199), d.e(9192), d.e(3548), d.e(1583)]).then(() => () => d(38512))),
              82199: () => o("default", "@rsgweb/rockstar-account", !1, [0], () => Promise.all([d.e(1605), d.e(6918), d.e(283), d.e(3331), d.e(9225), d.e(2272), d.e(8509)]).then(() => () => d(18509))),
              42285: () => o("default", "react-intersection-observer", !1, [1, 9, 16, 0], () => d.e(3939).then(() => () => d(26320))),
              20005: () => o("default", "@foundry/react", !1, [0], () => Promise.all([d.e(761), d.e(8061), d.e(7177), d.e(5940), d.e(9663)]).then(() => () => d(89663))),
              91681: () => o("default", "dompurify", !1, [1, 2, 5, 9], () => d.e(62).then(() => () => d(50062))),
              10475: () => o("default", "@rsgweb/modules-core-highlights", !1, [0], () => Promise.all([d.e(9733), d.e(6048)]).then(() => () => d(6048))),
              32552: () => o("default", "@foundry/react", !1, [0], () => Promise.all([d.e(761), d.e(7177), d.e(5901)]).then(() => () => d(35901))),
              35643: () => o("default", "@rsgweb/modules-core-carousel", !1, [0], () => Promise.all([d.e(971), d.e(8784)]).then(() => () => d(8784))),
              59139: () => o("default", "@rsgweb/modules-core-engagement", !1, [0], () => Promise.all([d.e(8173), d.e(2432)]).then(() => () => d(76057))),
              72527: () => o("default", "@rsgweb/modules-core-group-of-items", !1, [0], () => d.e(5114).then(() => () => d(25114))),
              87486: () => o("default", "text-balancer", !1, [1, 1, 0, 5], () => d.e(4016).then(() => () => d(34016))),
              92910: () => o("default", "react-jsx-parser", !1, [1, 2, 4, 1], () => d.e(6932).then(() => () => d(76932)))
            },
            s = {
              283: [40283],
              1270: [81270],
              2021: [10475, 32552, 35643, 59139, 72527, 87486, 92910],
              2199: [82199],
              2285: [42285],
              2909: [42909],
              2957: [20005],
              3082: [93082],
              3115: [91681],
              3331: [13331],
              4017: [84017],
              7301: [17301],
              9225: [99225]
            },
            b = {};
          d.f.consumes = (e, t) => {
            d.o(s, e) && s[e].forEach(e => {
              if (d.o(c, e)) return t.push(c[e]);
              if (!b[e]) {
                const a = t => {
                  c[e] = 0, d.m[e] = a => {
                    delete d.c[e], a.exports = t()
                  }
                };
                b[e] = !0;
                const r = t => {
                  delete c[e], d.m[e] = a => {
                    throw delete d.c[e], t
                  }
                };
                try {
                  const n = f[e]();
                  n.then ? t.push(c[e] = n.then(a).catch(r)) : a(n)
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
            d.f.miniCss = (t, a) => {
              e[t] ? a.push(e[t]) : 0 !== e[t] && {
                971: 1,
                1274: 1,
                1503: 1,
                1583: 1,
                2021: 1,
                2219: 1,
                2432: 1,
                2957: 1,
                3115: 1,
                3685: 1,
                5114: 1,
                5592: 1,
                5901: 1,
                7177: 1,
                8364: 1,
                9663: 1,
                9724: 1,
                9733: 1,
                9966: 1
              } [t] && a.push(e[t] = (e => new Promise((t, a) => {
                var r = d.miniCssF(e),
                  n = d.p + r;
                if (((e, t) => {
                    for (var a = document.getElementsByTagName("link"), r = 0; r < a.length; r++) {
                      var n = (o = a[r]).getAttribute("data-href") || o.getAttribute("href");
                      if ("stylesheet" === o.rel && (n === e || n === t)) return o
                    }
                    var d = document.getElementsByTagName("style");
                    for (r = 0; r < d.length; r++) {
                      var o;
                      if ((n = (o = d[r]).getAttribute("data-href")) === e || n === t) return o
                    }
                  })(r, n)) return t();
                ((e, t, a, r, n) => {
                  var o = document.createElement("link");
                  o.rel = "stylesheet", o.type = "text/css", d.nc && (o.nonce = d.nc), o.onerror = o.onload = a => {
                    if (o.onerror = o.onload = null, "load" === a.type) r();
                    else {
                      var d = a && a.type,
                        c = a && a.target && a.target.href || t,
                        f = new Error("Loading CSS chunk " + e + " failed.\n(" + d + ": " + c + ")");
                      f.name = "ChunkLoadError", f.code = "CSS_CHUNK_LOAD_FAILED", f.type = d, f.request = c, o.parentNode && o.parentNode.removeChild(o), n(f)
                    }
                  }, o.href = t, document.head.appendChild(o)
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
          d.f.j = (t, a) => {
            let r = d.o(e, t) ? e[t] : void 0;
            if (0 !== r)
              if (r) a.push(r[2]);
              else if (/^(2(199|285|432|83|909)|3(082|115|331)|9(225|71|733)|1270|1583|4017|7301)$/.test(t)) e[t] = 0;
            else {
              const n = new Promise((a, n) => r = e[t] = [a, n]);
              a.push(r[2] = n);
              const o = d.p + d.u(t),
                c = new Error,
                f = a => {
                  if (d.o(e, t) && (r = e[t], 0 !== r && (e[t] = void 0), r)) {
                    const e = a && ("load" === a.type ? "missing" : a.type),
                      n = a && a.target && a.target.src;
                    c.message = "Loading chunk " + t + " failed.\n(" + e + ": " + n + ")", c.name = "ChunkLoadError", c.type = e, c.request = n, c.event = a, r[1](c)
                  }
                };
              d.l(o, f, "chunk-" + t, t)
            }
          };
          const t = (t, a) => {
              let [r, n, o] = a;
              var c, f, s = 0;
              if (r.some(t => 0 !== e[t])) {
                for (c in n) d.o(n, c) && (d.m[c] = n[c]);
                o && o(d)
              }
              for (t && t(a); s < r.length; s++) f = r[s], d.o(e, f) && e[f] && e[f][0](), e[f] = 0
            },
            a = self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || [];
          a.forEach(t.bind(null, 0)), a.push = t.bind(null, a.push.bind(a))
        })(), d.nc = void 0, d(64769), d(57761)
      })())
    }
  }
});