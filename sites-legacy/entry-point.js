try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "6c0cb6f5-9b79-4e70-9ef7-745710b68408", e._sentryDebugIdIdentifier = "sentry-dbid-6c0cb6f5-9b79-4e70-9ef7-745710b68408")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-legacy",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register(["@rockstargames/modules-core-videoplayer"], function(e, t) {
  var r = {};
  return Object.defineProperty(r, "__esModule", {
    value: !0
  }), {
    setters: [function(e) {
      r.default = e.default || e, Object.keys(e).forEach(function(t) {
        r[t] = e[t]
      })
    }],
    execute: function() {
      e((() => {
        var e = {
          85946(e, t, r) {
            (0, r(69e3).w)(1)
          },
          69e3(e, t, r) {
            const n = r(31364).y;
            t.w = function(e) {
              if (e || (e = 1), !r.y.meta || !r.y.meta.url) throw console.error("__system_context__", r.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
              r.p = n(r.y.meta.url, e)
            }
          },
          64769(e, t, r) {
            r(85946)
          },
          31364(e, t, r) {
            t.y = function(e, t) {
              var r = document.createElement("a");
              r.href = e;
              for (var n = "/" === r.pathname[0] ? r.pathname : "/" + r.pathname, a = 0, o = n.length; a !== t && o >= 0;) "/" === n[--o] && a++;
              if (a !== t) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + t + ") is greater than the number of directories (" + a + ") in the URL path " + e);
              var c = n.slice(0, o + 1);
              return r.protocol + "//" + r.host + c
            };
            Number.isInteger
          },
          54334(e, t, r) {
            "use strict";
            const n = {
                "./site-routes/Bully": () => Promise.all([r.e(3279), r.e(2194), r.e(761), r.e(3974), r.e(3262), r.e(420), r.e(3082), r.e(9225), r.e(3331), r.e(2909), r.e(4017), r.e(9653), r.e(2199), r.e(3807), r.e(713), r.e(2285), r.e(3823), r.e(8892)]).then(() => () => r(18892)),
                "./site-routes/RedDeadRedemption": () => Promise.all([r.e(3279), r.e(2194), r.e(761), r.e(3974), r.e(3262), r.e(420), r.e(3082), r.e(9225), r.e(3331), r.e(2909), r.e(4017), r.e(9653), r.e(2199), r.e(3807), r.e(713), r.e(2285), r.e(3823), r.e(5812)]).then(() => () => r(75812)),
                "./tina": () => Promise.all([r.e(3279), r.e(2194), r.e(761), r.e(3974), r.e(3262), r.e(420), r.e(3082), r.e(9225), r.e(3331), r.e(2909), r.e(4017), r.e(9653), r.e(2199), r.e(3807), r.e(713), r.e(2285), r.e(3823)]).then(() => () => r(41511))
              },
              a = (e, t) => (r.R = t, t = r.o(n, e) ? n[e]() : Promise.resolve().then(() => {
                throw new Error('Module "' + e + '" does not exist in container.')
              }), r.R = void 0, t),
              o = (e, t) => {
                if (!r.S) return;
                const n = "default",
                  a = r.S[n];
                if (a && a !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                return r.S[n] = e, r.I(n, t)
              };
            r.d(t, {
              get: () => a,
              init: () => o
            })
          },
          25136(e) {
            "use strict";
            e.exports = r
          }
        };
        const n = {};

        function a(t) {
          const r = n[t];
          if (void 0 !== r) return r.exports;
          const o = n[t] = {
            id: t,
            loaded: !1,
            exports: {}
          };
          return e[t].call(o.exports, o, o.exports, a), o.loaded = !0, o.exports
        }
        return a.m = e, a.c = n, a.y = t, a.amdO = {}, a.n = e => {
          const t = e && e.__esModule ? () => e.default : () => e;
          return a.d(t, {
            a: t
          }), t
        }, (() => {
          const e = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__;
          let t;
          a.t = function(r, n) {
            if (1 & n && (r = this(r)), 8 & n) return r;
            if ("object" == typeof r && r) {
              if (4 & n && r.__esModule) return r;
              if (16 & n && "function" == typeof r.then) return r
            }
            const o = Object.create(null);
            a.r(o);
            const c = {};
            t = t || [null, e({}), e([]), e(e)];
            for (var d = 2 & n && r;
              ("object" == typeof d || "function" == typeof d) && !~t.indexOf(d); d = e(d)) Object.getOwnPropertyNames(d).forEach(e => c[e] = () => r[e]);
            return c.default = () => r, a.d(o, c), o
          }
        })(), a.d = (e, t) => {
          if (Array.isArray(t))
            for (var r = 0; r < t.length;) {
              var n = t[r++],
                o = t[r++];
              a.o(e, n) ? 0 === o && r++ : 0 === o ? Object.defineProperty(e, n, {
                enumerable: !0,
                value: t[r++]
              }) : Object.defineProperty(e, n, {
                enumerable: !0,
                get: o
              })
            } else
              for (var n in t) a.o(t, n) && !a.o(e, n) && Object.defineProperty(e, n, {
                enumerable: !0,
                get: t[n]
              })
        }, a.f = {}, a.e = e => Promise.all(Object.keys(a.f).reduce((t, r) => (a.f[r](e, t), t), [])), a.u = e => "js/" + {
          162: "441e8925e93c931fcf479a921cc9bc19",
          331: "5e10e5b9368cfa9fe7d912cbe19ce2d4",
          420: "d0c57a8294bfafc103fe5d83b3f09968",
          606: "925f8495e8169931ac003f8d6e52e9a2",
          713: "74b1310c32125300e6fc98e677260f01",
          761: "d502bc6eaf5c4c96cdc4852d3395c996",
          890: "2bef7037c154e2d2e7df9e6185355d59",
          1503: "2cd1d5e48284afab9233365e7239bbf1",
          1519: "b64b8d1cce068fb93c44e779e0e22867",
          1731: "d56729a66a1821a4ccb918f4f8ecad68",
          2194: "31e327941521d14bd6ce7112d1b6bc5a",
          2272: "aa0ade014e79a10d8d29da2b2088be2b",
          2309: "59390400110f6e1c3505fea562ed4d15",
          2329: "9e5b3402e719062a01a8f6fc77e2a231",
          2346: "d14ddb4ca6b24f780c042610d3a0b9aa",
          2581: "e1ae2926e5a2ea5ee0147e3323da6256",
          3195: "28d847dc52dbdc4482dc68da20c6e893",
          3262: "5efd7f5469c0f95d04636a6b83200512",
          3279: "2e02286bf0ff3b5776ced8a245e58132",
          3548: "846ce4cc4f56860304f287572eaccd29",
          3615: "b972da9188a2d5de910caa344f664b50",
          3667: "6003481994742ffb263590115fbbc310",
          3823: "2e5b4b88df2e982a0bfa6cc12839bf41",
          3939: "98a07bd2cb04f860b47b4acd2d806bcf",
          3974: "b4b54c285635d8d0d5f7c6e95af695f2",
          4250: "14a3a5897c704a822a2509b784fad4c4",
          4326: "b6e28707392ab1a3822341c50750b573",
          4514: "96e6e303f6dbcf48e3dd229c8f6165de",
          4874: "2e3d2d90b349e53b2560b4664fb43bf4",
          4921: "24c9660de4b3367f3674859787c9c3ef",
          4971: "ab1b3082045f10293a56c4cdf24f3d4e",
          5073: "d4a239f310f28b378fb3871d7ed5855f",
          5096: "1c3ffac83eeb044af4a074c08f5c9cc2",
          5140: "5a7aace7ddbe8b233119f4e0b01ef735",
          5505: "6a03334b955a2c0639ca836c6cf32520",
          5660: "546e4981b97fd3e01320e96968bfcca7",
          5812: "61c0217b6d40d15e0feeecec32bf3f49",
          5996: "7b5d9e841e5fa66e255dd36ac5d1b8ad",
          6048: "a94c7ff15775d98f84b8ef0587c52d64",
          6279: "f5d1580f89e797197382cddae4c4864c",
          6320: "b6935ee6a4e4bd5932309215a25fb54b",
          6918: "80292dd5216675de1f85a22d2a99b556",
          6972: "e3e87df4bb7fcab39e52e20ffc4ea90a",
          7390: "a5cdadff9d3fe37116a99ff07600cca3",
          7395: "7f04a7ae1f7efd070aa4d286d07f0689",
          7465: "2d1c7c9ce5e49a611f6b15b488a073d4",
          7687: "f728716a024ce43f3e0d9a70a45b3025",
          8232: "99ea691439c92db4827d08ce822665f9",
          8509: "330826f09a92dca7fa92132cf946f529",
          8892: "17babfe835d27114015e08b964d3f126",
          9192: "2be2244b9c5c37110a5614a7910ec937",
          9635: "e6e56ec6780278b55051be78c637b511",
          9793: "7181eaee758a27b173e97373fbf79fad",
          9860: "c24e1e37a7edb33c6cc4b3f8316047b7"
        } [e] + ".js", a.miniCssF = e => "css/" + {
          420: "36d76fadc9088b31c0f8c1d0a1906cb2",
          1503: "82b8e41eb90eae7db3adfb9fff54d045",
          1583: "82b8e41eb90eae7db3adfb9fff54d045",
          3823: "8a93c2048a4bb11b659371959f96682a",
          4250: "b3313fda99862d6d64bd2a829ae71ca3",
          5812: "52e55b769351b6e3f1602fe5d2baacd1",
          8232: "01fd4a1b7dcafeb5ed7fca9004268171",
          8892: "52e55b769351b6e3f1602fe5d2baacd1",
          9733: "018cfd7a9af327fe52bcb5c886489c3c"
        } [e] + ".css", a.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), a.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), (() => {
          const e = {},
            t = "@rockstargames/sites-legacy:";
          a.l = (r, n, o, c) => {
            if (e[r]) return void e[r].push(n);
            let d, f;
            if (void 0 !== o) {
              const e = document.getElementsByTagName("script");
              for (var s = 0; s < e.length; s++) {
                const n = e[s];
                if (n.getAttribute("src") == r || n.getAttribute("data-webpack") == t + o) {
                  d = n;
                  break
                }
              }
            }
            d || (f = !0, d = document.createElement("script"), d.charset = "utf-8", a.nc && d.setAttribute("nonce", a.nc), d.setAttribute("data-webpack", t + o), d.src = r), e[r] = [n];
            const i = (t, n) => {
                d.onerror = d.onload = null, clearTimeout(l);
                const a = e[r];
                if (delete e[r], d.parentNode?.removeChild(d), a?.forEach(e => e(n)), t) return t(n)
              },
              l = setTimeout(i.bind(null, void 0, {
                type: "timeout",
                target: d
              }), 12e4);
            d.onerror = i.bind(null, d.onerror), d.onload = i.bind(null, d.onload), f && document.head.appendChild(d)
          }
        })(), a.r = e => {
          Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, a.nmd = e => (e.paths = [], e.children || (e.children = []), e), (() => {
          const e = {
              3823: [31879]
            },
            t = {
              31879: ["default", "./index", 25136]
            };
          a.f.remotes = (r, n) => {
            a.o(e, r) && e[r].forEach(e => {
              let r = a.R;
              r || (r = []);
              const o = t[e];
              if (r.indexOf(o) >= 0) return;
              if (r.push(o), o.p) return n.push(o.p);
              const c = t => {
                  t || (t = new Error("Container missing")), "string" == typeof t.message && (t.message += '\nwhile loading "' + o[1] + '" from ' + o[2]), a.m[e] = () => {
                    throw t
                  }, o.p = 0
                },
                d = (e, t, r, a, d, f) => {
                  try {
                    const s = e(t, r);
                    if (!s?.then) return d(s, a, f); {
                      const e = s.then(e => d(e, a), c);
                      if (!f) return e;
                      n.push(o.p = e)
                    }
                  } catch (e) {
                    c(e)
                  }
                },
                f = (e, t, n) => d(t.get, o[1], r, 0, s, n),
                s = t => {
                  o.p = 1, a.m[e] = e => {
                    e.exports = t()
                  }
                };
              d(a, o[2], 0, 0, (e, t, r) => e ? d(a.I, o[0], 0, e, f, r) : c(), 1)
            })
          }
        })(), (() => {
          a.S = {};
          const e = {},
            t = {};
          a.I = (r, n) => {
            n || (n = []);
            let o = t[r];
            if (o || (o = t[r] = {}), n.indexOf(o) >= 0) return;
            if (n.push(o), e[r]) return e[r];
            a.o(a.S, r) || (a.S[r] = {});
            const c = a.S[r],
              d = "@rockstargames/sites-legacy",
              f = (e, t, r, n) => {
                const a = c[e] = c[e] || {},
                  o = a[t];
                (!o || !o.loaded && (!n != !o.eager ? n : d > o.from)) && (a[t] = {
                  get: r,
                  from: d,
                  eager: !!n
                })
              },
              s = [];
            return "default" === r && (f("@rsgweb/locale-tools", "0.0.0", () => Promise.all([a.e(3279), a.e(2194), a.e(761), a.e(4874), a.e(3082), a.e(5996)]).then(() => () => a(75996))), f("@rsgweb/modules-core-hero", "0.0.0", () => Promise.all([a.e(3082), a.e(9225), a.e(3331), a.e(2909), a.e(2199), a.e(3807), a.e(713), a.e(8232)]).then(() => () => a(40262))), f("@rsgweb/modules-core-highlights", "0.0.0", () => Promise.all([a.e(3262), a.e(3082), a.e(2909), a.e(2199), a.e(3807), a.e(2285), a.e(9733), a.e(6048)]).then(() => () => a(6048))), f("@rsgweb/rockstar-account", "0.0.0", () => Promise.all([a.e(3279), a.e(5140), a.e(6918), a.e(3082), a.e(9225), a.e(3331), a.e(2909), a.e(2272), a.e(890)]).then(() => () => a(18509))), f("@rsgweb/tina", "0.0.0", () => Promise.all([a.e(3279), a.e(2194), a.e(3974), a.e(5073), a.e(9635), a.e(3082), a.e(3331), a.e(2909), a.e(4017), a.e(9653), a.e(2199), a.e(9192), a.e(3548), a.e(1503)]).then(() => () => a(38512))), f("@rsgweb/utils", "0.0.0-development", () => Promise.all([a.e(3279), a.e(2194), a.e(5140), a.e(5073), a.e(7687), a.e(3082), a.e(9225), a.e(2909), a.e(2272), a.e(9192), a.e(2054), a.e(606)]).then(() => () => a(40606))), f("clsx", "2.1.1", () => a.e(4921).then(() => () => a(4921))), f("focus-trap-react", "10.3.1", () => Promise.all([a.e(4514), a.e(3082), a.e(9653)]).then(() => () => a(44514))), f("framer-motion", "12.43.0", () => Promise.all([a.e(6279), a.e(3082), a.e(9793)]).then(() => () => a(76279))), f("graphql", "16.14.2", () => a.e(1519).then(() => () => a(91519))), f("prop-types", "15.8.1", () => a.e(331).then(() => () => a(60331))), f("react-dom", "18.3.1", () => Promise.all([a.e(162), a.e(3082)]).then(() => () => a(30162))), f("react-intersection-observer", "9.16.0", () => Promise.all([a.e(3082), a.e(6320)]).then(() => () => a(26320))), f("react-router-dom", "6.30.4", () => Promise.all([a.e(9860), a.e(3082), a.e(4017)]).then(() => () => a(79860))), f("react", "18.3.1", () => a.e(2581).then(() => () => a(22581))), (e => {
              const t = e => {
                return t = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(t));
                var t
              };
              try {
                const o = a(e);
                if (!o) return;
                const c = e => e && e.init && e.init(a.S[r], n);
                if (o.then) return s.push(o.then(c, t));
                const d = c(o);
                if (d?.then) return s.push(d.catch(t))
              } catch (e) {
                t(e)
              }
            })(25136)), s.length ? e[r] = Promise.all(s).then(() => e[r] = 1) : e[r] = 1
          }
        })(), (() => {
          let e;
          a.g.importScripts && (e = a.g.location + "");
          const t = a.g.document;
          if (!e && t && ("SCRIPT" === t.currentScript?.tagName.toUpperCase() && (e = t.currentScript.src), !e)) {
            const r = t.getElementsByTagName("script");
            if (r.length) {
              let t = r.length - 1;
              for (; t > -1 && (!e || !/^http(s?):/.test(e));) e = r[t--].src
            }
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), a.p = e
        })(), (() => {
          var e = e => {
              var t = e => e.split(".").map(e => +e == e ? +e : e),
                r = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
                n = r[1] ? t(r[1]) : [];
              return r[2] && (n.length++, n.push.apply(n, t(r[2]))), r[3] && (n.push([]), n.push.apply(n, t(r[3]))), n
            },
            t = e => {
              var r = e[0],
                n = "";
              if (1 === e.length) return "*";
              if (r + .5) {
                n += 0 == r ? ">=" : -1 == r ? "<" : 1 == r ? "^" : 2 == r ? "~" : r > 0 ? "=" : "!=";
                for (var a = 1, o = 1; o < e.length; o++) a--, n += "u" == (typeof(d = e[o]))[0] ? "-" : (a > 0 ? "." : "") + (a = 2, d);
                return n
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
            r = (t, n) => {
              if (0 in t) {
                n = e(n);
                var a = t[0],
                  o = a < 0;
                o && (a = -a - 1);
                for (var c = 0, d = 1, f = !0;; d++, c++) {
                  var s, i, l = d < t.length ? (typeof t[d])[0] : "";
                  if (c >= n.length || "o" == (i = (typeof(s = n[c]))[0])) return !f || ("u" == l ? d > a && !o : "" == l != o);
                  if ("u" == i) {
                    if (!f || "u" != l) return !1
                  } else if (f)
                    if (l == i)
                      if (d <= a) {
                        if (s != t[d]) return !1
                      } else {
                        if (o ? s > t[d] : s < t[d]) return !1;
                        s != t[d] && (f = !1)
                      }
                  else if ("s" != l && "n" != l) {
                    if (o || d <= a) return !1;
                    f = !1, d--
                  } else {
                    if (d <= a || i < l != o) return !1;
                    f = !1
                  } else "s" != l && "n" != l && (f = !1, d--)
                }
              }
              var u = [],
                b = u.pop.bind(u);
              for (c = 1; c < t.length; c++) {
                var h = t[c];
                u.push(1 == h ? b() | b() : 2 == h ? b() & b() : h ? r(h, n) : !b())
              }
              return !!b()
            };
          const n = (t, r, n) => {
              const a = n ? (e => Object.keys(e).reduce((t, r) => (e[r].eager && (t[r] = e[r]), t), {}))(t[r]) : t[r];
              return Object.keys(a).reduce((t, r) => !t || !a[t].loaded && ((t, r) => {
                t = e(t), r = e(r);
                for (var n = 0;;) {
                  if (n >= t.length) return n < r.length && "u" != (typeof r[n])[0];
                  var a = t[n],
                    o = (typeof a)[0];
                  if (n >= r.length) return "u" == o;
                  var c = r[n],
                    d = (typeof c)[0];
                  if (o != d) return "o" == o && "n" == d || "s" == d || "u" == o;
                  if ("o" != o && "u" != o && a != c) return a < c;
                  n++
                }
              })(t, r) ? r : t, 0)
            },
            o = (e, t, r) => r ? r() : ((e, t) => (e => {
              throw new Error(e)
            })("Shared module " + t + " doesn't exist in shared scope " + e))(e, t),
            c = (e => function(t, r, n, o, c) {
              const d = a.I(t);
              return d?.then && !n ? d.then(e.bind(e, t, a.S[t], r, !1, o, c)) : e(t, a.S[t], r, n, o, c)
            })((e, c, d, f, s, i) => {
              if (!((e, t) => e && a.o(e, t))(c, d)) return o(e, d, i);
              const l = n(c, d, f);
              return r(s, l) || (b = ((e, r, n, a) => "Unsatisfied version " + n + " from " + (n && e[r][n].from) + " of shared singleton module " + r + " (required " + t(a) + ")")(c, d, l, s), "undefined" != typeof console && console.warn && console.warn(b)), (u = c[d][l]).loaded = 1, u.get();
              var u, b
            }),
            d = {},
            f = {
              93082: () => c("default", "react", !1, [0], () => a.e(2581).then(() => () => a(22581))),
              99225: () => c("default", "react-router-dom", !1, [0], () => Promise.all([a.e(9860), a.e(4017)]).then(() => () => a(79860))),
              13331: () => c("default", "@rsgweb/utils", !1, [0], () => Promise.all([a.e(3279), a.e(2194), a.e(5140), a.e(5073), a.e(7687), a.e(9225), a.e(2272), a.e(9192), a.e(7395)]).then(() => () => a(40606))),
              42909: () => c("default", "@rsgweb/locale-tools", !1, [0], () => Promise.all([a.e(3279), a.e(2194), a.e(761), a.e(4874), a.e(3615)]).then(() => () => a(75996))),
              84017: () => c("default", "react-dom", !1, [1, 18, 2, 0], () => a.e(162).then(() => () => a(30162))),
              89653: () => c("default", "prop-types", !1, [1, 15, 8, 1], () => a.e(331).then(() => () => a(60331))),
              82199: () => c("default", "@rsgweb/rockstar-account", !1, [0], () => Promise.all([a.e(3279), a.e(5140), a.e(6918), a.e(9225), a.e(3331), a.e(2272), a.e(8509)]).then(() => () => a(18509))),
              17301: () => c("default", "@rsgweb/tina", !1, [0], () => Promise.all([a.e(3279), a.e(2194), a.e(3974), a.e(5073), a.e(9635), a.e(3331), a.e(4017), a.e(9653), a.e(9192), a.e(3548), a.e(1583)]).then(() => () => a(38512))),
              20155: () => c("default", "framer-motion", !1, [1, 12, 38, 0], () => a.e(6279).then(() => () => a(76279))),
              81270: () => c("default", "clsx", !1, [1, 2, 1, 1], () => a.e(4921).then(() => () => a(4921))),
              42285: () => c("default", "react-intersection-observer", !1, [1, 9, 16, 0], () => a.e(3939).then(() => () => a(26320))),
              10475: () => c("default", "@rsgweb/modules-core-highlights", !1, [0], () => Promise.all([a.e(9733), a.e(3667)]).then(() => () => a(6048))),
              79955: () => c("default", "focus-trap-react", !1, [1, 10, 3, 1], () => a.e(4514).then(() => () => a(44514))),
              97819: () => c("default", "@rsgweb/modules-core-hero", !1, [0], () => a.e(4250).then(() => () => a(40262))),
              32054: () => c("default", "graphql", !1, [0], () => a.e(1519).then(() => () => a(91519)))
            },
            s = {
              713: [81270],
              2054: [32054],
              2199: [82199],
              2285: [42285],
              2909: [42909],
              3082: [93082],
              3331: [13331],
              3807: [17301, 20155],
              3823: [10475, 79955, 97819],
              4017: [84017],
              7395: [32054],
              9225: [99225],
              9653: [89653]
            },
            i = {};
          a.f.consumes = (e, t) => {
            a.o(s, e) && s[e].forEach(e => {
              if (a.o(d, e)) return t.push(d[e]);
              if (!i[e]) {
                const r = t => {
                  d[e] = 0, a.m[e] = r => {
                    delete a.c[e], r.exports = t()
                  }
                };
                i[e] = !0;
                const n = t => {
                  delete d[e], a.m[e] = r => {
                    throw delete a.c[e], t
                  }
                };
                try {
                  const a = f[e]();
                  a.then ? t.push(d[e] = a.then(r).catch(n)) : r(a)
                } catch (e) {
                  n(e)
                }
              }
            })
          }
        })(), (() => {
          if ("undefined" != typeof document) {
            var e = {
              8106: 0
            };
            a.f.miniCss = (t, r) => {
              e[t] ? r.push(e[t]) : 0 !== e[t] && {
                420: 1,
                1503: 1,
                1583: 1,
                3823: 1,
                4250: 1,
                5812: 1,
                8232: 1,
                8892: 1,
                9733: 1
              } [t] && r.push(e[t] = (e => new Promise((t, r) => {
                var n = a.miniCssF(e),
                  o = a.p + n;
                if (((e, t) => {
                    for (var r = document.getElementsByTagName("link"), n = 0; n < r.length; n++) {
                      var a = (c = r[n]).getAttribute("data-href") || c.getAttribute("href");
                      if ("stylesheet" === c.rel && (a === e || a === t)) return c
                    }
                    var o = document.getElementsByTagName("style");
                    for (n = 0; n < o.length; n++) {
                      var c;
                      if ((a = (c = o[n]).getAttribute("data-href")) === e || a === t) return c
                    }
                  })(n, o)) return t();
                ((e, t, r, n, o) => {
                  var c = document.createElement("link");
                  c.rel = "stylesheet", c.type = "text/css", a.nc && (c.nonce = a.nc), c.onerror = c.onload = r => {
                    if (c.onerror = c.onload = null, "load" === r.type) n();
                    else {
                      var a = r && r.type,
                        d = r && r.target && r.target.href || t,
                        f = new Error("Loading CSS chunk " + e + " failed.\n(" + a + ": " + d + ")");
                      f.name = "ChunkLoadError", f.code = "CSS_CHUNK_LOAD_FAILED", f.type = a, f.request = d, c.parentNode && c.parentNode.removeChild(c), o(f)
                    }
                  }, c.href = t, document.head.appendChild(c)
                })(e, o, 0, t, r)
              }))(t).then(() => {
                e[t] = 0
              }, r => {
                throw delete e[t], r
              }))
            }
          }
        })(), (() => {
          const e = {
            8106: 0
          };
          a.f.j = (t, r) => {
            let n = a.o(e, t) ? e[t] : void 0;
            if (0 !== n)
              if (n) r.push(n[2]);
              else if (/^(2(054|199|285|909)|3(082|331|807)|9(225|653|733)|1583|4017)$/.test(t)) e[t] = 0;
            else {
              const o = new Promise((r, a) => n = e[t] = [r, a]);
              r.push(n[2] = o);
              const c = a.p + a.u(t),
                d = new Error,
                f = r => {
                  if (a.o(e, t) && (n = e[t], 0 !== n && (e[t] = void 0), n)) {
                    const e = r && ("load" === r.type ? "missing" : r.type),
                      a = r && r.target && r.target.src;
                    d.message = "Loading chunk " + t + " failed.\n(" + e + ": " + a + ")", d.name = "ChunkLoadError", d.type = e, d.request = a, d.event = r, n[1](d)
                  }
                };
              a.l(c, f, "chunk-" + t, t)
            }
          };
          const t = (t, r) => {
              let [n, o, c] = r;
              var d, f, s = 0;
              if (n.some(t => 0 !== e[t])) {
                for (d in o) a.o(o, d) && (a.m[d] = o[d]);
                c && c(a)
              }
              for (t && t(r); s < n.length; s++) f = n[s], a.o(e, f) && e[f] && e[f][0](), e[f] = 0
            },
            r = self.webpackChunk_rockstargames_sites_legacy = self.webpackChunk_rockstargames_sites_legacy || [];
          r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
        })(), a.nc = void 0, a(64769), a(54334)
      })())
    }
  }
});