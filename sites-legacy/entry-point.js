try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "e59d417f-e103-46dc-b8a4-73f80b353f49", e._sentryDebugIdIdentifier = "sentry-dbid-e59d417f-e103-46dc-b8a4-73f80b353f49")
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
          64801(e, t, r) {
            (0, r(26745).w)(1)
          },
          26745(e, t, r) {
            const a = r(86029).y;
            t.w = function(e) {
              if (e || (e = 1), !r.y.meta || !r.y.meta.url) throw console.error("__system_context__", r.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
              r.p = a(r.y.meta.url, e)
            }
          },
          4010(e, t, r) {
            r(64801)
          },
          86029(e, t, r) {
            t.y = function(e, t) {
              var r = document.createElement("a");
              r.href = e;
              for (var a = "/" === r.pathname[0] ? r.pathname : "/" + r.pathname, n = 0, o = a.length; n !== t && o >= 0;) "/" === a[--o] && n++;
              if (n !== t) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + t + ") is greater than the number of directories (" + n + ") in the URL path " + e);
              var c = a.slice(0, o + 1);
              return r.protocol + "//" + r.host + c
            };
            Number.isInteger
          },
          54334(e, t, r) {
            "use strict";
            const a = {
                "./site-routes/Bully": () => Promise.all([r.e(3279), r.e(2194), r.e(761), r.e(3974), r.e(3262), r.e(5725), r.e(3082), r.e(9225), r.e(3331), r.e(2909), r.e(4017), r.e(9653), r.e(2199), r.e(515), r.e(2262), r.e(2285), r.e(1519), r.e(7150)]).then(() => () => r(67150)),
                "./site-routes/RedDeadRedemption": () => Promise.all([r.e(3279), r.e(2194), r.e(761), r.e(3974), r.e(3262), r.e(5725), r.e(3082), r.e(9225), r.e(3331), r.e(2909), r.e(4017), r.e(9653), r.e(2199), r.e(515), r.e(2262), r.e(2285), r.e(1519), r.e(5922)]).then(() => () => r(5922)),
                "./tina": () => Promise.all([r.e(3279), r.e(2194), r.e(761), r.e(3974), r.e(3262), r.e(5725), r.e(3082), r.e(9225), r.e(3331), r.e(2909), r.e(4017), r.e(9653), r.e(2199), r.e(515), r.e(2262), r.e(2285), r.e(1519)]).then(() => () => r(64915))
              },
              n = (e, t) => (r.R = t, t = r.o(a, e) ? a[e]() : Promise.resolve().then(() => {
                throw new Error('Module "' + e + '" does not exist in container.')
              }), r.R = void 0, t),
              o = (e, t) => {
                if (!r.S) return;
                const a = "default",
                  n = r.S[a];
                if (n && n !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                return r.S[a] = e, r.I(a, t)
              };
            r.d(t, {
              get: () => n,
              init: () => o
            })
          },
          25136(e) {
            "use strict";
            e.exports = r
          }
        };
        const a = {};

        function n(t) {
          const r = a[t];
          if (void 0 !== r) return r.exports;
          const o = a[t] = {
            id: t,
            loaded: !1,
            exports: {}
          };
          return e[t].call(o.exports, o, o.exports, n), o.loaded = !0, o.exports
        }
        return n.m = e, n.c = a, n.y = t, n.amdO = {}, n.n = e => {
          const t = e && e.__esModule ? () => e.default : () => e;
          return n.d(t, {
            a: t
          }), t
        }, (() => {
          const e = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__;
          let t;
          n.t = function(r, a) {
            if (1 & a && (r = this(r)), 8 & a) return r;
            if ("object" == typeof r && r) {
              if (4 & a && r.__esModule) return r;
              if (16 & a && "function" == typeof r.then) return r
            }
            const o = Object.create(null);
            n.r(o);
            const c = {};
            t = t || [null, e({}), e([]), e(e)];
            for (var f = 2 & a && r;
              ("object" == typeof f || "function" == typeof f) && !~t.indexOf(f); f = e(f)) Object.getOwnPropertyNames(f).forEach(e => c[e] = () => r[e]);
            return c.default = () => r, n.d(o, c), o
          }
        })(), n.d = (e, t) => {
          if (Array.isArray(t))
            for (var r = 0; r < t.length;) {
              var a = t[r++],
                o = t[r++];
              n.o(e, a) ? 0 === o && r++ : 0 === o ? Object.defineProperty(e, a, {
                enumerable: !0,
                value: t[r++]
              }) : Object.defineProperty(e, a, {
                enumerable: !0,
                get: o
              })
            } else
              for (var a in t) n.o(t, a) && !n.o(e, a) && Object.defineProperty(e, a, {
                enumerable: !0,
                get: t[a]
              })
        }, n.f = {}, n.e = e => Promise.all(Object.keys(n.f).reduce((t, r) => (n.f[r](e, t), t), [])), n.u = e => "js/" + {
          162: "99d80f50ca7758b686183223b20cc3fc",
          331: "ece5d16ff6455d6d37a6b54b8af5e78e",
          476: "882e386ae63a228266b1bff0a2bff97b",
          739: "622588890dd14b90cf8b9f213da8cd01",
          761: "db8866e3f715d2049891f1fb509c499d",
          774: "2cff14a03ac3a83cd0a209a95ac121a9",
          925: "ab5c0fe990464b343b783621ed33e609",
          1116: "d3a6042f9586a17e802f12128fa417c0",
          1519: "79d2090969c8d663c483d2dcad9bf7fa",
          1709: "253cfdea42fca2b9cf51ec274568b42d",
          1734: "2abee1d299927472c3cc1784c081ba95",
          2194: "55d7f175ee2718db46df52be8008c0fc",
          2210: "1ed333b4661ea15b56abc31a655d1ae0",
          2262: "b17b15cd30d1255d7c02c670447abef4",
          2454: "a29731fb8aaefe26705010432b781324",
          2581: "9eeb7722af36ea8435fdb0894719a027",
          3262: "4e70715d7c6bd54eb6778151ce16e721",
          3264: "997eafe3d263f4bec68a03e38a2e81d1",
          3279: "aee515f868a996505d127f13a58808b6",
          3462: "240fc429c0ccb571daf5cee6b0651c7c",
          3477: "902b44f97b7c4d8356ace34ad324ffed",
          3767: "51e862cc8f37bcff0c3125d789991b0c",
          3900: "4c6ae535b8a50eee7514a49ee9f01f8c",
          3939: "37c33a2e174564b8ea7557f6e3d1e883",
          3974: "3ed50246624a1bfd231fc9eab33184f6",
          4514: "4ce27030daee68aac1fabc2a83284cd8",
          4546: "0232e02af8227d574f71b19218d89550",
          4620: "4f3e310e70b594b019338db8062498df",
          4874: "d914ac2df83045109597d1d82b24cd25",
          4921: "259772b3e24946c084a61d9c72589c36",
          5073: "4858508f2561488f8b5a01eacf464e2b",
          5725: "997b9a11346ebe9f0649f2f235b6b7c8",
          5822: "72a8f49f89aa0ba056713c9af4b34796",
          5922: "61eff48bc9594d1c29bcbdb7b39662e1",
          6035: "9da67221c22818992c1497a2eab76081",
          6320: "03f22b72903d12f6a16e93c3192a3786",
          6596: "b59c6eac88be6af9943cfb370782e39f",
          6768: "78942f403b7a819e6f36e7caac54d9a3",
          6918: "fa74db41de672bbded6a27e27085a063",
          7150: "0e7aede2524ee903a3fa0e53be4d5771",
          7215: "b31e55e278bae430f71bc79dd254a589",
          7877: "414f1d02def6220d8e3e5b219e24d024",
          7989: "697f797a976a52181f4c4c56ae1e0a00",
          8095: "891ff787484484170785c6d2d2ad8445",
          8169: "eacfe87bc15f32a3bdd0a50ee305fed8",
          8393: "55074a27d2850229130e49392baea1a6",
          8416: "b5e3712cfd8a5593b01d179c4369ea0c",
          8936: "cb2cc9f773a0154772bb59dbb444ce7a",
          9079: "94ba0eeaa7ee86f6aafa32cf18a1924b",
          9096: "bf28a05bf33dd125a663d22b74dc13c0",
          9199: "700639c1a0bc1efdf9b67e97d0733ef5",
          9529: "23d66643b06ddea0a78ddc3702cec036",
          9793: "c7a6c456af73835e682347b063c896bd",
          9860: "6a9222407e5a4d5042f7313ddddba478"
        } [e] + ".js", n.miniCssF = e => "css/" + {
          1519: "c91c68780eaf23eb716ea02a285c3a34",
          1734: "b3313fda99862d6d64bd2a829ae71ca3",
          5725: "c2b7593f6a183e3cb7e38b96ba7d2796",
          5922: "52e55b769351b6e3f1602fe5d2baacd1",
          6064: "018cfd7a9af327fe52bcb5c886489c3c",
          6768: "01fd4a1b7dcafeb5ed7fca9004268171",
          7150: "52e55b769351b6e3f1602fe5d2baacd1",
          7609: "82b8e41eb90eae7db3adfb9fff54d045",
          8169: "82b8e41eb90eae7db3adfb9fff54d045"
        } [e] + ".css", n.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), (() => {
          const e = {},
            t = "@rockstargames/sites-legacy:";
          n.l = (r, a, o, c) => {
            if (e[r]) return void e[r].push(a);
            let f, d;
            if (void 0 !== o) {
              const e = document.getElementsByTagName("script");
              for (var s = 0; s < e.length; s++) {
                const a = e[s];
                if (a.getAttribute("src") == r || a.getAttribute("data-webpack") == t + o) {
                  f = a;
                  break
                }
              }
            }
            f || (d = !0, f = document.createElement("script"), f.charset = "utf-8", n.nc && f.setAttribute("nonce", n.nc), f.setAttribute("data-webpack", t + o), f.src = r), e[r] = [a];
            const i = (t, a) => {
                f.onerror = f.onload = null, clearTimeout(l);
                const n = e[r];
                if (delete e[r], f.parentNode?.removeChild(f), n?.forEach(e => e(a)), t) return t(a)
              },
              l = setTimeout(i.bind(null, void 0, {
                type: "timeout",
                target: f
              }), 12e4);
            f.onerror = i.bind(null, f.onerror), f.onload = i.bind(null, f.onload), d && document.head.appendChild(f)
          }
        })(), n.r = e => {
          Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, n.nmd = e => (e.paths = [], e.children || (e.children = []), e), (() => {
          const e = {
              1519: [31879]
            },
            t = {
              31879: ["default", "./index", 25136]
            };
          n.f.remotes = (r, a) => {
            n.o(e, r) && e[r].forEach(e => {
              let r = n.R;
              r || (r = []);
              const o = t[e];
              if (r.indexOf(o) >= 0) return;
              if (r.push(o), o.p) return a.push(o.p);
              const c = t => {
                  t || (t = new Error("Container missing")), "string" == typeof t.message && (t.message += '\nwhile loading "' + o[1] + '" from ' + o[2]), n.m[e] = () => {
                    throw t
                  }, o.p = 0
                },
                f = (e, t, r, n, f, d) => {
                  try {
                    const s = e(t, r);
                    if (!s?.then) return f(s, n, d); {
                      const e = s.then(e => f(e, n), c);
                      if (!d) return e;
                      a.push(o.p = e)
                    }
                  } catch (e) {
                    c(e)
                  }
                },
                d = (e, t, a) => f(t.get, o[1], r, 0, s, a),
                s = t => {
                  o.p = 1, n.m[e] = e => {
                    e.exports = t()
                  }
                };
              f(n, o[2], 0, 0, (e, t, r) => e ? f(n.I, o[0], 0, e, d, r) : c(), 1)
            })
          }
        })(), (() => {
          n.S = {};
          const e = {},
            t = {};
          n.I = (r, a) => {
            a || (a = []);
            let o = t[r];
            if (o || (o = t[r] = {}), a.indexOf(o) >= 0) return;
            if (a.push(o), e[r]) return e[r];
            n.o(n.S, r) || (n.S[r] = {});
            const c = n.S[r],
              f = "@rockstargames/sites-legacy",
              d = (e, t, r, a) => {
                const n = c[e] = c[e] || {},
                  o = n[t];
                (!o || !o.loaded && (!a != !o.eager ? a : f > o.from)) && (n[t] = {
                  get: r,
                  from: f,
                  eager: !!a
                })
              },
              s = [];
            return "default" === r && (d("@rsgweb/locale-tools", "0.0.0", () => Promise.all([n.e(3279), n.e(2194), n.e(761), n.e(4874), n.e(3082), n.e(8416)]).then(() => () => n(58416))), d("@rsgweb/modules-core-hero", "0.0.0", () => Promise.all([n.e(3082), n.e(9225), n.e(3331), n.e(2909), n.e(2199), n.e(515), n.e(2262), n.e(6768)]).then(() => () => n(7842))), d("@rsgweb/modules-core-highlights", "0.0.0", () => Promise.all([n.e(3262), n.e(3082), n.e(2909), n.e(2199), n.e(515), n.e(2285), n.e(6064), n.e(8393)]).then(() => () => n(58393))), d("@rsgweb/rockstar-account", "0.0.0", () => Promise.all([n.e(3279), n.e(1116), n.e(6918), n.e(3082), n.e(9225), n.e(3331), n.e(2909), n.e(6596), n.e(8095)]).then(() => () => n(58095))), d("@rsgweb/tina", "0.0.0", () => Promise.all([n.e(3279), n.e(2194), n.e(3974), n.e(5073), n.e(925), n.e(3082), n.e(3331), n.e(2909), n.e(4017), n.e(9653), n.e(2199), n.e(2454), n.e(739), n.e(8169)]).then(() => () => n(11215))), d("@rsgweb/utils", "0.0.0-development", () => Promise.all([n.e(3279), n.e(2194), n.e(1116), n.e(5073), n.e(9079), n.e(3082), n.e(9225), n.e(2909), n.e(6596), n.e(2454), n.e(2054), n.e(9096)]).then(() => () => n(19096))), d("clsx", "2.1.1", () => n.e(4921).then(() => () => n(4921))), d("focus-trap-react", "10.3.1", () => Promise.all([n.e(4514), n.e(3082), n.e(9653)]).then(() => () => n(44514))), d("framer-motion", "12.42.1", () => Promise.all([n.e(5822), n.e(3082), n.e(9793)]).then(() => () => n(95822))), d("graphql", "16.14.2", () => n.e(3900).then(() => () => n(91519))), d("prop-types", "15.8.1", () => n.e(331).then(() => () => n(60331))), d("react-dom", "18.3.1", () => Promise.all([n.e(162), n.e(3082)]).then(() => () => n(30162))), d("react-intersection-observer", "9.16.0", () => Promise.all([n.e(3082), n.e(6320)]).then(() => () => n(26320))), d("react-router-dom", "6.30.4", () => Promise.all([n.e(9860), n.e(3082), n.e(4017)]).then(() => () => n(79860))), d("react", "18.3.1", () => n.e(2581).then(() => () => n(22581))), (e => {
              const t = e => {
                return t = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(t));
                var t
              };
              try {
                const o = n(e);
                if (!o) return;
                const c = e => e && e.init && e.init(n.S[r], a);
                if (o.then) return s.push(o.then(c, t));
                const f = c(o);
                if (f?.then) return s.push(f.catch(t))
              } catch (e) {
                t(e)
              }
            })(25136)), s.length ? e[r] = Promise.all(s).then(() => e[r] = 1) : e[r] = 1
          }
        })(), (() => {
          let e;
          n.g.importScripts && (e = n.g.location + "");
          const t = n.g.document;
          if (!e && t && ("SCRIPT" === t.currentScript?.tagName.toUpperCase() && (e = t.currentScript.src), !e)) {
            const r = t.getElementsByTagName("script");
            if (r.length) {
              let t = r.length - 1;
              for (; t > -1 && (!e || !/^http(s?):/.test(e));) e = r[t--].src
            }
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), n.p = e
        })(), (() => {
          var e = e => {
              var t = e => e.split(".").map(e => +e == e ? +e : e),
                r = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
                a = r[1] ? t(r[1]) : [];
              return r[2] && (a.length++, a.push.apply(a, t(r[2]))), r[3] && (a.push([]), a.push.apply(a, t(r[3]))), a
            },
            t = e => {
              var r = e[0],
                a = "";
              if (1 === e.length) return "*";
              if (r + .5) {
                a += 0 == r ? ">=" : -1 == r ? "<" : 1 == r ? "^" : 2 == r ? "~" : r > 0 ? "=" : "!=";
                for (var n = 1, o = 1; o < e.length; o++) n--, a += "u" == (typeof(f = e[o]))[0] ? "-" : (n > 0 ? "." : "") + (n = 2, f);
                return a
              }
              var c = [];
              for (o = 1; o < e.length; o++) {
                var f = e[o];
                c.push(0 === f ? "not(" + d() + ")" : 1 === f ? "(" + d() + " || " + d() + ")" : 2 === f ? c.pop() + " " + c.pop() : t(f))
              }
              return d();

              function d() {
                return c.pop().replace(/^\((.+)\)$/, "$1")
              }
            },
            r = (t, a) => {
              if (0 in t) {
                a = e(a);
                var n = t[0],
                  o = n < 0;
                o && (n = -n - 1);
                for (var c = 0, f = 1, d = !0;; f++, c++) {
                  var s, i, l = f < t.length ? (typeof t[f])[0] : "";
                  if (c >= a.length || "o" == (i = (typeof(s = a[c]))[0])) return !d || ("u" == l ? f > n && !o : "" == l != o);
                  if ("u" == i) {
                    if (!d || "u" != l) return !1
                  } else if (d)
                    if (l == i)
                      if (f <= n) {
                        if (s != t[f]) return !1
                      } else {
                        if (o ? s > t[f] : s < t[f]) return !1;
                        s != t[f] && (d = !1)
                      }
                  else if ("s" != l && "n" != l) {
                    if (o || f <= n) return !1;
                    d = !1, f--
                  } else {
                    if (f <= n || i < l != o) return !1;
                    d = !1
                  } else "s" != l && "n" != l && (d = !1, f--)
                }
              }
              var u = [],
                b = u.pop.bind(u);
              for (c = 1; c < t.length; c++) {
                var h = t[c];
                u.push(1 == h ? b() | b() : 2 == h ? b() & b() : h ? r(h, a) : !b())
              }
              return !!b()
            };
          const a = (t, r, a) => {
              const n = a ? (e => Object.keys(e).reduce((t, r) => (e[r].eager && (t[r] = e[r]), t), {}))(t[r]) : t[r];
              return Object.keys(n).reduce((t, r) => !t || !n[t].loaded && ((t, r) => {
                t = e(t), r = e(r);
                for (var a = 0;;) {
                  if (a >= t.length) return a < r.length && "u" != (typeof r[a])[0];
                  var n = t[a],
                    o = (typeof n)[0];
                  if (a >= r.length) return "u" == o;
                  var c = r[a],
                    f = (typeof c)[0];
                  if (o != f) return "o" == o && "n" == f || "s" == f || "u" == o;
                  if ("o" != o && "u" != o && n != c) return n < c;
                  a++
                }
              })(t, r) ? r : t, 0)
            },
            o = (e, t, r) => r ? r() : ((e, t) => (e => {
              throw new Error(e)
            })("Shared module " + t + " doesn't exist in shared scope " + e))(e, t),
            c = (e => function(t, r, a, o, c) {
              const f = n.I(t);
              return f?.then && !a ? f.then(e.bind(e, t, n.S[t], r, !1, o, c)) : e(t, n.S[t], r, a, o, c)
            })((e, c, f, d, s, i) => {
              if (!((e, t) => e && n.o(e, t))(c, f)) return o(e, f, i);
              const l = a(c, f, d);
              return r(s, l) || (b = ((e, r, a, n) => "Unsatisfied version " + a + " from " + (a && e[r][a].from) + " of shared singleton module " + r + " (required " + t(n) + ")")(c, f, l, s), "undefined" != typeof console && console.warn && console.warn(b)), (u = c[f][l]).loaded = 1, u.get();
              var u, b
            }),
            f = {},
            d = {
              93082: () => c("default", "react", !1, [0], () => n.e(2581).then(() => () => n(22581))),
              99225: () => c("default", "react-router-dom", !1, [0], () => Promise.all([n.e(9860), n.e(4017)]).then(() => () => n(79860))),
              13331: () => c("default", "@rsgweb/utils", !1, [0], () => Promise.all([n.e(3279), n.e(2194), n.e(1116), n.e(5073), n.e(9079), n.e(9225), n.e(6596), n.e(2454), n.e(7989)]).then(() => () => n(19096))),
              42909: () => c("default", "@rsgweb/locale-tools", !1, [0], () => Promise.all([n.e(3279), n.e(2194), n.e(761), n.e(4874), n.e(6035)]).then(() => () => n(58416))),
              84017: () => c("default", "react-dom", !1, [1, 18, 2, 0], () => n.e(162).then(() => () => n(30162))),
              89653: () => c("default", "prop-types", !1, [1, 15, 8, 1], () => n.e(331).then(() => () => n(60331))),
              82199: () => c("default", "@rsgweb/rockstar-account", !1, [0], () => Promise.all([n.e(3279), n.e(1116), n.e(6918), n.e(9225), n.e(3331), n.e(6596), n.e(476)]).then(() => () => n(58095))),
              17301: () => c("default", "@rsgweb/tina", !1, [0], () => Promise.all([n.e(3279), n.e(2194), n.e(3974), n.e(5073), n.e(925), n.e(3331), n.e(4017), n.e(9653), n.e(2454), n.e(739), n.e(7609)]).then(() => () => n(11215))),
              88447: () => c("default", "framer-motion", !1, [1, 12, 38, 0], () => n.e(5822).then(() => () => n(95822))),
              81270: () => c("default", "clsx", !1, [1, 2, 1, 1], () => n.e(4921).then(() => () => n(4921))),
              42285: () => c("default", "react-intersection-observer", !1, [1, 9, 16, 0], () => n.e(3939).then(() => () => n(26320))),
              10475: () => c("default", "@rsgweb/modules-core-highlights", !1, [0], () => Promise.all([n.e(6064), n.e(774)]).then(() => () => n(58393))),
              79955: () => c("default", "focus-trap-react", !1, [1, 10, 3, 1], () => n.e(4514).then(() => () => n(44514))),
              97819: () => c("default", "@rsgweb/modules-core-hero", !1, [0], () => n.e(1734).then(() => () => n(7842))),
              32054: () => c("default", "graphql", !1, [0], () => n.e(3900).then(() => () => n(91519)))
            },
            s = {
              515: [17301, 88447],
              1519: [10475, 79955, 97819],
              2054: [32054],
              2199: [82199],
              2262: [81270],
              2285: [42285],
              2909: [42909],
              3082: [93082],
              3331: [13331],
              4017: [84017],
              7989: [32054],
              9225: [99225],
              9653: [89653]
            },
            i = {};
          n.f.consumes = (e, t) => {
            n.o(s, e) && s[e].forEach(e => {
              if (n.o(f, e)) return t.push(f[e]);
              if (!i[e]) {
                const r = t => {
                  f[e] = 0, n.m[e] = r => {
                    delete n.c[e], r.exports = t()
                  }
                };
                i[e] = !0;
                const a = t => {
                  delete f[e], n.m[e] = r => {
                    throw delete n.c[e], t
                  }
                };
                try {
                  const n = d[e]();
                  n.then ? t.push(f[e] = n.then(r).catch(a)) : r(n)
                } catch (e) {
                  a(e)
                }
              }
            })
          }
        })(), (() => {
          if ("undefined" != typeof document) {
            var e = {
              8106: 0
            };
            n.f.miniCss = (t, r) => {
              e[t] ? r.push(e[t]) : 0 !== e[t] && {
                1519: 1,
                1734: 1,
                5725: 1,
                5922: 1,
                6064: 1,
                6768: 1,
                7150: 1,
                7609: 1,
                8169: 1
              } [t] && r.push(e[t] = (e => new Promise((t, r) => {
                var a = n.miniCssF(e),
                  o = n.p + a;
                if (((e, t) => {
                    for (var r = document.getElementsByTagName("link"), a = 0; a < r.length; a++) {
                      var n = (c = r[a]).getAttribute("data-href") || c.getAttribute("href");
                      if ("stylesheet" === c.rel && (n === e || n === t)) return c
                    }
                    var o = document.getElementsByTagName("style");
                    for (a = 0; a < o.length; a++) {
                      var c;
                      if ((n = (c = o[a]).getAttribute("data-href")) === e || n === t) return c
                    }
                  })(a, o)) return t();
                ((e, t, r, a, o) => {
                  var c = document.createElement("link");
                  c.rel = "stylesheet", c.type = "text/css", n.nc && (c.nonce = n.nc), c.onerror = c.onload = r => {
                    if (c.onerror = c.onload = null, "load" === r.type) a();
                    else {
                      var n = r && r.type,
                        f = r && r.target && r.target.href || t,
                        d = new Error("Loading CSS chunk " + e + " failed.\n(" + n + ": " + f + ")");
                      d.name = "ChunkLoadError", d.code = "CSS_CHUNK_LOAD_FAILED", d.type = n, d.request = f, c.parentNode && c.parentNode.removeChild(c), o(d)
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
          n.f.j = (t, r) => {
            let a = n.o(e, t) ? e[t] : void 0;
            if (0 !== a)
              if (a) r.push(a[2]);
              else if (/^(2(054|199|285|909)|3082|3331|4017|515|6064|7609|9225|9653)$/.test(t)) e[t] = 0;
            else {
              const o = new Promise((r, n) => a = e[t] = [r, n]);
              r.push(a[2] = o);
              const c = n.p + n.u(t),
                f = new Error,
                d = r => {
                  if (n.o(e, t) && (a = e[t], 0 !== a && (e[t] = void 0), a)) {
                    const e = r && ("load" === r.type ? "missing" : r.type),
                      n = r && r.target && r.target.src;
                    f.message = "Loading chunk " + t + " failed.\n(" + e + ": " + n + ")", f.name = "ChunkLoadError", f.type = e, f.request = n, a[1](f)
                  }
                };
              n.l(c, d, "chunk-" + t, t)
            }
          };
          const t = (t, r) => {
              let [a, o, c] = r;
              var f, d, s = 0;
              if (a.some(t => 0 !== e[t])) {
                for (f in o) n.o(o, f) && (n.m[f] = o[f]);
                c && c(n)
              }
              for (t && t(r); s < a.length; s++) d = a[s], n.o(e, d) && e[d] && e[d][0](), e[d] = 0
            },
            r = self.webpackChunk_rockstargames_sites_legacy = self.webpackChunk_rockstargames_sites_legacy || [];
          r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
        })(), n.nc = void 0, n(4010), n(54334)
      })())
    }
  }
});