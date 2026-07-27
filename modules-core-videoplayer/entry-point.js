try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "30d43fe9-1ea9-4dba-a8f7-ac5e6fd46d50", e._sentryDebugIdIdentifier = "sentry-dbid-30d43fe9-1ea9-4dba-a8f7-ac5e6fd46d50")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-videoplayer",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register([], function(e, t) {
  return {
    execute: function() {
      e((() => {
        var e = {
          9863(e, t, r) {
            (0, r(5039).w)(1)
          },
          5039(e, t, r) {
            const a = r(103).y;
            t.w = function(e) {
              if (e || (e = 1), !r.y.meta || !r.y.meta.url) throw console.error("__system_context__", r.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
              r.p = a(r.y.meta.url, e)
            }
          },
          7732(e, t, r) {
            r(9863)
          },
          103(e, t, r) {
            t.y = function(e, t) {
              var r = document.createElement("a");
              r.href = e;
              for (var a = "/" === r.pathname[0] ? r.pathname : "/" + r.pathname, n = 0, o = a.length; n !== t && o >= 0;) "/" === a[--o] && n++;
              if (n !== t) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + t + ") is greater than the number of directories (" + n + ") in the URL path " + e);
              var d = a.slice(0, o + 1);
              return r.protocol + "//" + r.host + d
            };
            Number.isInteger
          },
          8157(e, t, r) {
            "use strict";
            const a = {
                "./bootstrap": () => r.e(400).then(() => () => r(3400)),
                "./index": () => Promise.all([r.e(405), r.e(82), r.e(283), r.e(453), r.e(331), r.e(812), r.e(270), r.e(199), r.e(633), r.e(360)]).then(() => () => r(1360)),
                "./tina": () => r.e(562).then(() => () => r(2562)),
                "./tinaBlockTemplates": () => r.e(562).then(() => () => r(2562))
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
          }
        };
        const r = {};

        function a(t) {
          const n = r[t];
          if (void 0 !== n) return n.exports;
          const o = r[t] = {
            id: t,
            loaded: !1,
            exports: {}
          };
          return e[t].call(o.exports, o, o.exports, a), o.loaded = !0, o.exports
        }
        return a.m = e, a.c = r, a.y = t, a.amdO = {}, a.n = e => {
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
            const d = {};
            t = t || [null, e({}), e([]), e(e)];
            for (var f = 2 & n && r;
              ("object" == typeof f || "function" == typeof f) && !~t.indexOf(f); f = e(f)) Object.getOwnPropertyNames(f).forEach(e => d[e] = () => r[e]);
            return d.default = () => r, a.d(o, d), o
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
          38: "65857b36feb28dda7b61f27f4cf0d646",
          42: "a34c801f7133a139a479d5990de9791e",
          111: "c26156cbc70a4919610a5bbdc538ee4b",
          143: "7db4f25ccf2e71b6259f026e43537b1b",
          162: "ca25270576e659d5930480e0659c10b6",
          195: "c4018f351c651811ea8493c09e3b1551",
          206: "8988a7b94dafcbb5e42e3e7984d2c35f",
          244: "ccc9e79a9b2853ac60c54ee12c8b523f",
          278: "4547a6f4a9abc82870bd5c8d68cc8feb",
          295: "0e8aea0b63341508a275992eeaed0f2f",
          323: "ea4a893a28ac9dd476be57bf950f5fd8",
          336: "cad1f9815b31c9fb38880c2655ff3552",
          360: "c51f003a76abb2234a495a8b5dabd462",
          381: "2b563a6d8b7bcddf24042989286da246",
          400: "4552af8f22cf52bb43ac6797149603cc",
          405: "22f344ac152be820ff5c47402a4257d5",
          464: "05e406d5373b22fbd2bcb952f6f5704f",
          508: "92b955a1b2ed503b3dea1f24d8b9d65d",
          514: "6eca6d2db1251fedb90d6912a68f6644",
          519: "70cbd07604b89afb1e9d46b8aa1fa3d7",
          524: "994601ea5570d7ddf317d2722472e937",
          529: "8e4d5284a91b3f73c42c48147b4db8ab",
          562: "9eaf367d37e2e244b01370e9895c77ac",
          581: "75d32f55f6bc70fb688c2e5e49562e14",
          623: "05365f610d33dd105a7369d5d6bb84bf",
          633: "0bade36cb8f8efd30f08edd6694bf7e2",
          679: "d201f5884c3206642d0958d48e230f25",
          704: "b2e353773c7ceacdcf834e0e4b955dc0",
          750: "1446a87cd4b31bf8784beac6be4f3843",
          770: "917dad2241144a244232a99e3ce79e98",
          793: "c1f81c21f668722270caefdb713cc453",
          825: "ce1116333b6b0e6a04d8f26e813739a2",
          860: "58338344a6c658549780c79eb85ca78a",
          897: "a551c3f01f6b97bfb4c211e1aab85184",
          900: "b2fd779cce3fd2a76d56046b33b16578",
          921: "f00713655283b973aa9e325eb8316963",
          997: "c8a1420c41e338fb116592bbcdf4bee2"
        } [e] + ".js", a.miniCssF = e => "css/" + {
          143: "d5d80fb65b4d279f563a59abb371d37e",
          360: "23388f0bfe8b45c81248082fe7b331d1",
          524: "d5d80fb65b4d279f563a59abb371d37e",
          633: "9d0ee20239dcf81e1f5b01a50f3056c1",
          750: "98d2f7207c07838416399fe63c3fcbc4"
        } [e] + ".css", a.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), a.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), (() => {
          const e = {},
            t = "@rockstargames/modules-core-videoplayer:";
          a.l = (r, n, o, d) => {
            if (e[r]) return void e[r].push(n);
            let f, c;
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
            f || (c = !0, f = document.createElement("script"), f.charset = "utf-8", a.nc && f.setAttribute("nonce", a.nc), f.setAttribute("data-webpack", t + o), f.src = r), e[r] = [n];
            const l = (t, a) => {
                f.onerror = f.onload = null, clearTimeout(i);
                const n = e[r];
                if (delete e[r], f.parentNode?.removeChild(f), n?.forEach(e => e(a)), t) return t(a)
              },
              i = setTimeout(l.bind(null, void 0, {
                type: "timeout",
                target: f
              }), 12e4);
            f.onerror = l.bind(null, f.onerror), f.onload = l.bind(null, f.onload), c && document.head.appendChild(f)
          }
        })(), a.r = e => {
          Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, a.nmd = e => (e.paths = [], e.children || (e.children = []), e), (() => {
          a.S = {};
          const e = {},
            t = {};
          a.I = (r, n) => {
            n || (n = []);
            let o = t[r];
            if (o || (o = t[r] = {}), n.indexOf(o) >= 0) return;
            if (n.push(o), e[r]) return e[r];
            a.o(a.S, r) || (a.S[r] = {});
            const d = a.S[r],
              f = "@rockstargames/modules-core-videoplayer",
              c = (e, t, r, a) => {
                const n = d[e] = d[e] || {},
                  o = n[t];
                (!o || !o.loaded && (!a != !o.eager ? a : f > o.from)) && (n[t] = {
                  get: r,
                  from: f,
                  eager: !!a
                })
              },
              s = [];
            return "default" === r && (c("@floating-ui/react", "0.27.19", () => Promise.all([a.e(295), a.e(464), a.e(82), a.e(17), a.e(793)]).then(() => () => a(2464))), c("@foundry-int/utils", "6.4.0", () => Promise.all([a.e(679), a.e(270), a.e(997)]).then(() => () => a(9679))), c("@gsap/react", "2.1.2", () => Promise.all([a.e(82), a.e(812), a.e(206)]).then(() => () => a(9206))), c("@rsgweb/locale-tools", "0.0.0", () => Promise.all([a.e(336), a.e(82), a.e(283), a.e(897)]).then(() => () => a(5897))), c("@rsgweb/modules-core-agegate", "0.0.0", () => Promise.all([a.e(111), a.e(82), a.e(331), a.e(199), a.e(143)]).then(() => () => a(1143))), c("@rsgweb/rockstar-account", "0.0.0", () => Promise.all([a.e(381), a.e(508), a.e(82), a.e(283), a.e(453), a.e(195), a.e(331), a.e(704)]).then(() => () => a(323))), c("@rsgweb/utils", "0.0.0-development", () => Promise.all([a.e(381), a.e(623), a.e(82), a.e(283), a.e(453), a.e(195), a.e(54), a.e(519)]).then(() => () => a(519))), c("clsx", "2.1.1", () => a.e(921).then(() => () => a(4921))), c("focus-trap-react", "10.3.1", () => Promise.all([a.e(295), a.e(514), a.e(82)]).then(() => () => a(4514))), c("graphql", "16.14.2", () => a.e(900).then(() => () => a(1519))), c("gsap", "3.12.5", () => a.e(529).then(() => () => a(3529))), c("hammerjs", "2.0.8", () => a.e(38).then(() => () => a(6038))), c("lodash-es", "4.18.1", () => a.e(42).then(() => () => a(2042))), c("react-dom", "18.3.1", () => Promise.all([a.e(162), a.e(82)]).then(() => () => a(162))), c("react-router-dom", "6.30.4", () => Promise.all([a.e(860), a.e(82), a.e(17)]).then(() => () => a(9860))), c("react", "18.3.1", () => a.e(581).then(() => () => a(2581))), c("uuid", "9.0.1", () => a.e(770).then(() => () => a(3770)))), e[r] = s.length ? Promise.all(s).then(() => e[r] = 1) : 1
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
              var d = [];
              for (o = 1; o < e.length; o++) {
                var f = e[o];
                d.push(0 === f ? "not(" + c() + ")" : 1 === f ? "(" + c() + " || " + c() + ")" : 2 === f ? d.pop() + " " + d.pop() : t(f))
              }
              return c();

              function c() {
                return d.pop().replace(/^\((.+)\)$/, "$1")
              }
            },
            r = (t, a) => {
              if (0 in t) {
                a = e(a);
                var n = t[0],
                  o = n < 0;
                o && (n = -n - 1);
                for (var d = 0, f = 1, c = !0;; f++, d++) {
                  var s, l, i = f < t.length ? (typeof t[f])[0] : "";
                  if (d >= a.length || "o" == (l = (typeof(s = a[d]))[0])) return !c || ("u" == i ? f > n && !o : "" == i != o);
                  if ("u" == l) {
                    if (!c || "u" != i) return !1
                  } else if (c)
                    if (i == l)
                      if (f <= n) {
                        if (s != t[f]) return !1
                      } else {
                        if (o ? s > t[f] : s < t[f]) return !1;
                        s != t[f] && (c = !1)
                      }
                  else if ("s" != i && "n" != i) {
                    if (o || f <= n) return !1;
                    c = !1, f--
                  } else {
                    if (f <= n || l < i != o) return !1;
                    c = !1
                  } else "s" != i && "n" != i && (c = !1, f--)
                }
              }
              var u = [],
                b = u.pop.bind(u);
              for (d = 1; d < t.length; d++) {
                var h = t[d];
                u.push(1 == h ? b() | b() : 2 == h ? b() & b() : h ? r(h, a) : !b())
              }
              return !!b()
            };
          const n = (t, r, a) => {
              const n = a ? (e => Object.keys(e).reduce((t, r) => (e[r].eager && (t[r] = e[r]), t), {}))(t[r]) : t[r];
              return Object.keys(n).reduce((t, r) => !t || !n[t].loaded && ((t, r) => {
                t = e(t), r = e(r);
                for (var a = 0;;) {
                  if (a >= t.length) return a < r.length && "u" != (typeof r[a])[0];
                  var n = t[a],
                    o = (typeof n)[0];
                  if (a >= r.length) return "u" == o;
                  var d = r[a],
                    f = (typeof d)[0];
                  if (o != f) return "o" == o && "n" == f || "s" == f || "u" == o;
                  if ("o" != o && "u" != o && n != d) return n < d;
                  a++
                }
              })(t, r) ? r : t, 0)
            },
            o = (e, t, r) => r ? r() : ((e, t) => (e => {
              throw new Error(e)
            })("Shared module " + t + " doesn't exist in shared scope " + e))(e, t),
            d = (e => function(t, r, n, o, d) {
              const f = a.I(t);
              return f?.then && !n ? f.then(e.bind(e, t, a.S[t], r, !1, o, d)) : e(t, a.S[t], r, n, o, d)
            })((e, d, f, c, s, l) => {
              if (!((e, t) => e && a.o(e, t))(d, f)) return o(e, f, l);
              const i = n(d, f, c);
              return r(s, i) || (b = ((e, r, a, n) => "Unsatisfied version " + a + " from " + (a && e[r][a].from) + " of shared singleton module " + r + " (required " + t(n) + ")")(d, f, i, s), "undefined" != typeof console && console.warn && console.warn(b)), (u = d[f][i]).loaded = 1, u.get();
              var u, b
            }),
            f = {},
            c = {
              3082: () => d("default", "react", !1, [0], () => a.e(581).then(() => () => a(2581))),
              283: () => d("default", "lodash-es", !1, [0], () => a.e(42).then(() => () => a(2042))),
              2909: () => d("default", "@rsgweb/locale-tools", !1, [0], () => Promise.all([a.e(336), a.e(278)]).then(() => () => a(5897))),
              9225: () => d("default", "react-router-dom", !1, [0], () => Promise.all([a.e(860), a.e(17)]).then(() => () => a(9860))),
              3331: () => d("default", "@rsgweb/utils", !1, [0], () => Promise.all([a.e(381), a.e(623), a.e(283), a.e(453), a.e(195), a.e(244)]).then(() => () => a(519))),
              5812: () => d("default", "gsap", !1, [0], () => a.e(529).then(() => () => a(3529))),
              1270: () => d("default", "clsx", !1, [1, 2, 1, 1], () => a.e(921).then(() => () => a(4921))),
              2199: () => d("default", "@rsgweb/rockstar-account", !1, [0], () => Promise.all([a.e(381), a.e(508), a.e(283), a.e(453), a.e(195), a.e(323)]).then(() => () => a(323))),
              646: () => d("default", "@foundry-int/utils", !1, [0], () => a.e(679).then(() => () => a(9679))),
              1038: () => d("default", "focus-trap-react", !1, [1, 10, 2, 3], () => Promise.all([a.e(295), a.e(514)]).then(() => () => a(4514))),
              1404: () => d("default", "@floating-ui/react", !1, [2, 0, 27, 19], () => Promise.all([a.e(295), a.e(464), a.e(17)]).then(() => () => a(2464))),
              2341: () => d("default", "hammerjs", !1, [1, 2, 0, 8], () => a.e(38).then(() => () => a(6038))),
              4815: () => d("default", "uuid", !1, [1, 9, 0, 1], () => a.e(770).then(() => () => a(3770))),
              7347: () => d("default", "@gsap/react", !1, [0], () => a.e(825).then(() => () => a(9206))),
              7613: () => d("default", "@rsgweb/modules-core-agegate", !1, [0], () => Promise.all([a.e(111), a.e(524)]).then(() => () => a(1143))),
              4017: () => d("default", "react-dom", !1, [1, 18, 2, 0], () => a.e(162).then(() => () => a(162))),
              2054: () => d("default", "graphql", !1, [0], () => a.e(900).then(() => () => a(1519)))
            },
            s = {
              17: [4017],
              54: [2054],
              82: [3082],
              199: [2199],
              244: [2054],
              270: [1270],
              283: [283],
              331: [3331],
              453: [2909, 9225],
              633: [646, 1038, 1404, 2341, 4815, 7347, 7613],
              812: [5812]
            },
            l = {};
          a.f.consumes = (e, t) => {
            a.o(s, e) && s[e].forEach(e => {
              if (a.o(f, e)) return t.push(f[e]);
              if (!l[e]) {
                const r = t => {
                  f[e] = 0, a.m[e] = r => {
                    delete a.c[e], r.exports = t()
                  }
                };
                l[e] = !0;
                const n = t => {
                  delete f[e], a.m[e] = r => {
                    throw delete a.c[e], t
                  }
                };
                try {
                  const a = c[e]();
                  a.then ? t.push(f[e] = a.then(r).catch(n)) : r(a)
                } catch (e) {
                  n(e)
                }
              }
            })
          }
        })(), (() => {
          if ("undefined" != typeof document) {
            var e = {
              614: 0
            };
            a.f.miniCss = (t, r) => {
              e[t] ? r.push(e[t]) : 0 !== e[t] && {
                143: 1,
                360: 1,
                524: 1,
                633: 1,
                750: 1
              } [t] && r.push(e[t] = (e => new Promise((t, r) => {
                var n = a.miniCssF(e),
                  o = a.p + n;
                if (((e, t) => {
                    for (var r = document.getElementsByTagName("link"), a = 0; a < r.length; a++) {
                      var n = (d = r[a]).getAttribute("data-href") || d.getAttribute("href");
                      if ("stylesheet" === d.rel && (n === e || n === t)) return d
                    }
                    var o = document.getElementsByTagName("style");
                    for (a = 0; a < o.length; a++) {
                      var d;
                      if ((n = (d = o[a]).getAttribute("data-href")) === e || n === t) return d
                    }
                  })(n, o)) return t();
                ((e, t, r, n, o) => {
                  var d = document.createElement("link");
                  d.rel = "stylesheet", d.type = "text/css", a.nc && (d.nonce = a.nc), d.onerror = d.onload = r => {
                    if (d.onerror = d.onload = null, "load" === r.type) n();
                    else {
                      var a = r && r.type,
                        f = r && r.target && r.target.href || t,
                        c = new Error("Loading CSS chunk " + e + " failed.\n(" + a + ": " + f + ")");
                      c.name = "ChunkLoadError", c.code = "CSS_CHUNK_LOAD_FAILED", c.type = a, c.request = f, d.parentNode && d.parentNode.removeChild(d), o(c)
                    }
                  }, d.href = t, document.head.appendChild(d)
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
            614: 0
          };
          a.f.j = (t, r) => {
            let n = a.o(e, t) ? e[t] : void 0;
            if (0 !== n)
              if (n) r.push(n[2]);
              else if (/^(17|199|270|283|331|453|54|812|82)$/.test(t)) e[t] = 0;
            else {
              const o = new Promise((r, a) => n = e[t] = [r, a]);
              r.push(n[2] = o);
              const d = a.p + a.u(t),
                f = new Error,
                c = r => {
                  if (a.o(e, t) && (n = e[t], 0 !== n && (e[t] = void 0), n)) {
                    const e = r && ("load" === r.type ? "missing" : r.type),
                      a = r && r.target && r.target.src;
                    f.message = "Loading chunk " + t + " failed.\n(" + e + ": " + a + ")", f.name = "ChunkLoadError", f.type = e, f.request = a, n[1](f)
                  }
                };
              a.l(d, c, "chunk-" + t, t)
            }
          };
          const t = (t, r) => {
              let [n, o, d] = r;
              var f, c, s = 0;
              if (n.some(t => 0 !== e[t])) {
                for (f in o) a.o(o, f) && (a.m[f] = o[f]);
                d && d(a)
              }
              for (t && t(r); s < n.length; s++) c = n[s], a.o(e, c) && e[c] && e[c][0](), e[c] = 0
            },
            r = self.webpackChunk_rockstargames_modules_core_videoplayer = self.webpackChunk_rockstargames_modules_core_videoplayer || [];
          r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
        })(), a(7732), a(8157)
      })())
    }
  }
});