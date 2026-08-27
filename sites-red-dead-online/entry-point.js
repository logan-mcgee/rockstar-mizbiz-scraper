try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "06cd9c75-b38c-4f48-89c7-25614c8577c7", e._sentryDebugIdIdentifier = "sentry-dbid-06cd9c75-b38c-4f48-89c7-25614c8577c7")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-red-dead-online",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register(["@rockstargames/modules-core-newswire-article", "@rockstargames/modules-core-videoplayer"], function(e, t) {
  var r = {},
    n = {};
  return Object.defineProperty(r, "__esModule", {
    value: !0
  }), Object.defineProperty(n, "__esModule", {
    value: !0
  }), {
    setters: [function(e) {
      r.default = e.default || e, Object.keys(e).forEach(function(t) {
        r[t] = e[t]
      })
    }, function(e) {
      n.default = e.default || e, Object.keys(e).forEach(function(t) {
        n[t] = e[t]
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
              for (var n = "/" === r.pathname[0] ? r.pathname : "/" + r.pathname, o = 0, a = n.length; o !== t && a >= 0;) "/" === n[--a] && o++;
              if (o !== t) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + t + ") is greater than the number of directories (" + o + ") in the URL path " + e);
              var c = n.slice(0, a + 1);
              return r.protocol + "//" + r.host + c
            };
            Number.isInteger
          },
          82021(e, t, r) {
            "use strict";
            const n = {
                "./index": () => Promise.all([r.e(6256), r.e(8207), r.e(5140), r.e(883), r.e(7033), r.e(2351), r.e(3082), r.e(4017), r.e(1270), r.e(2272), r.e(9192), r.e(625), r.e(9653), r.e(9809)]).then(() => () => r(99809))
              },
              o = (e, t) => (r.R = t, t = r.o(n, e) ? n[e]() : Promise.resolve().then(() => {
                throw new Error('Module "' + e + '" does not exist in container.')
              }), r.R = void 0, t),
              a = (e, t) => {
                if (!r.S) return;
                const n = "default",
                  o = r.S[n];
                if (o && o !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                return r.S[n] = e, r.I(n, t)
              };
            r.d(t, {
              get: () => o,
              init: () => a
            })
          },
          66819(e) {
            "use strict";
            e.exports = r
          },
          25136(e) {
            "use strict";
            e.exports = n
          }
        };
        const o = {};

        function a(t) {
          const r = o[t];
          if (void 0 !== r) return r.exports;
          const n = o[t] = {
            id: t,
            loaded: !1,
            exports: {}
          };
          return e[t].call(n.exports, n, n.exports, a), n.loaded = !0, n.exports
        }
        return a.m = e, a.c = o, a.y = t, a.amdO = {}, a.n = e => {
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
            for (var f = 2 & n && r;
              ("object" == typeof f || "function" == typeof f) && !~t.indexOf(f); f = e(f)) Object.getOwnPropertyNames(f).forEach(e => c[e] = () => r[e]);
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
          162: "1fb8b2296c02827997642155620fd180",
          331: "3a56a219be27f36a157e6f7e990236b6",
          573: "8d1fd693c10595cb6112dcbf9b31e078",
          606: "343cce7f4e3550c68210708f65302bb3",
          625: "f04f9bbd277979162f5e8ea3272e45ed",
          761: "1854dcbd041f46584eb2362273a708fb",
          883: "77ba71a6bbcf6ae449ae7e46f938981e",
          1125: "7e62336c3347bca26456f004dd1f5725",
          1203: "26bcac6d9f59e90df103f1c169a8e114",
          2272: "44b8d54884c58a9f6f3e3363c7a5fc1f",
          2351: "b173b3bb0befa49c8de0606382d822b7",
          2581: "6c959e3cc17619f5851b062eb32668de",
          2656: "fc28651ddc5310ce748d3aa239546b90",
          3506: "5646ad09446b8bd33d56b21f481b7be6",
          3769: "83e4c8d9b07a77ef8b04928c3ebd492a",
          4514: "574af2fcb7313b7193921e5f21dc2d5e",
          4597: "f87ae589a37700668591edcf859ca286",
          4607: "b2854f4f4acb4d81accd7da67ad90efb",
          4921: "b5854a80c6d2bf0660b92ae194d2d016",
          4962: "1cfa91682ac60b1ab0a2b9d9204929c4",
          5140: "b6320b24196a11be8c3c063615f7fa8a",
          5529: "a1303e6997762f07c5d24fe00ad83797",
          5847: "4061465b70cf455578d4a046b40484c6",
          6256: "8a371d0a187b18b728870db1069cac88",
          6372: "ef2f9b90f6c17e847524b2a5b2b54690",
          6405: "9a5dc9fdbf43937217a581858c4bb941",
          6807: "48296d0f9cf41dc810c24ad02fd116d8",
          7033: "e875805d145a53fbab1c34abfae3e946",
          7110: "b9b52f2204d64e811bf97afc43342cb2",
          7602: "3b680be161e4775c8d33973528ae62aa",
          7725: "9662d4ab917c3ddadfc1c08840de0b26",
          7946: "bbe6394ba7ab2e42e2b2265182a8d99d",
          8207: "992337f568dcfdce6b4cf604a787acf2",
          8504: "f707ed1312824b81054f81183f15f61b",
          8696: "a60ec5344dc926d5fa46ca058edacc35",
          9086: "363981d9a3811ef0009e4527ccf3ffa1",
          9103: "693c2523c0c086a9b3a3dd9c038b2d6d",
          9188: "02e2ef1722ee4e29892c5fea0649ce2e",
          9192: "198a8890f363caa5b4b7984410de71ee",
          9249: "70f5d5c26378e4cf15f01dd4db327c26",
          9269: "160ddc08ace77aeeac585fcaab57306d",
          9708: "b5807a0e6db9f0bef83dd67c0f2fe50f",
          9809: "7465d3041a29c98997b1334b81a69d84",
          9860: "e617a81b02e5b4189725ef53ab1bd498",
          9933: "ef2f3decc50be7ff5889814cc9b399d4"
        } [e] + ".js", a.miniCssF = e => "css/" + {
          704: "7c575cc0a210038808b12a81bf37629b",
          1203: "1c9b55705ab693054730e10b48cf08f1",
          6372: "7c575cc0a210038808b12a81bf37629b",
          9086: "5d0bafec817936de7cf8fe6576505c75",
          9809: "af46c6919832bb57abd0cc6085639100"
        } [e] + ".css", a.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), a.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), (() => {
          const e = {},
            t = "@rockstargames/sites-red-dead-online:";
          a.l = (r, n, o, c) => {
            if (e[r]) return void e[r].push(n);
            let f, d;
            if (void 0 !== o) {
              const e = document.getElementsByTagName("script");
              for (var s = 0; s < e.length; s++) {
                const n = e[s];
                if (n.getAttribute("src") == r || n.getAttribute("data-webpack") == t + o) {
                  f = n;
                  break
                }
              }
            }
            f || (d = !0, f = document.createElement("script"), f.charset = "utf-8", a.nc && f.setAttribute("nonce", a.nc), f.setAttribute("data-webpack", t + o), f.src = r), e[r] = [n];
            const i = (t, n) => {
                f.onerror = f.onload = null, clearTimeout(l);
                const o = e[r];
                if (delete e[r], f.parentNode?.removeChild(f), o?.forEach(e => e(n)), t) return t(n)
              },
              l = setTimeout(i.bind(null, void 0, {
                type: "timeout",
                target: f
              }), 12e4);
            f.onerror = i.bind(null, f.onerror), f.onload = i.bind(null, f.onload), d && document.head.appendChild(f)
          }
        })(), a.r = e => {
          Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, a.nmd = e => (e.paths = [], e.children || (e.children = []), e), (() => {
          const e = {
              9809: [9566, 31879]
            },
            t = {
              9566: ["default", "./index", 66819],
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
                f = (e, t, r, a, f, d) => {
                  try {
                    const s = e(t, r);
                    if (!s?.then) return f(s, a, d); {
                      const e = s.then(e => f(e, a), c);
                      if (!d) return e;
                      n.push(o.p = e)
                    }
                  } catch (e) {
                    c(e)
                  }
                },
                d = (e, t, n) => f(t.get, o[1], r, 0, s, n),
                s = t => {
                  o.p = 1, a.m[e] = e => {
                    e.exports = t()
                  }
                };
              f(a, o[2], 0, 0, (e, t, r) => e ? f(a.I, o[0], 0, e, d, r) : c(), 1)
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
              f = "@rockstargames/sites-red-dead-online",
              d = (e, t, r, n) => {
                const o = c[e] = c[e] || {},
                  a = o[t];
                (!a || !a.loaded && (!n != !a.eager ? n : f > a.from)) && (o[t] = {
                  get: r,
                  from: f,
                  eager: !!n
                })
              },
              s = e => {
                const t = e => {
                  return t = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(t));
                  var t
                };
                try {
                  const o = a(e);
                  if (!o) return;
                  const c = e => e && e.init && e.init(a.S[r], n);
                  if (o.then) return i.push(o.then(c, t));
                  const f = c(o);
                  if (f?.then) return i.push(f.catch(t))
                } catch (e) {
                  t(e)
                }
              },
              i = [];
            return "default" === r && (d("@foundry-int/utils", "6.6.1", () => Promise.all([a.e(883), a.e(9249), a.e(1270), a.e(8504)]).then(() => () => a(98504))), d("@foundry-int/utils", "6.6.1", () => Promise.all([a.e(883), a.e(9249), a.e(1270), a.e(6807)]).then(() => () => a(36807))), d("@foundry/icons", "6.6.1", () => Promise.all([a.e(7725), a.e(3082), a.e(4017), a.e(2874), a.e(6372)]).then(() => () => a(47725))), d("@foundry/react", "6.6.1", () => Promise.all([a.e(761), a.e(9086), a.e(3082), a.e(4017), a.e(1270), a.e(2874), a.e(5866), a.e(4597)]).then(() => () => a(19086))), d("@rsgweb/locale-tools", "0.0.0", () => Promise.all([a.e(6256), a.e(761), a.e(8207), a.e(573), a.e(3082), a.e(3506)]).then(() => () => a(93506))), d("@rsgweb/modules-core-feedback", "0.0.0", () => Promise.all([a.e(8207), a.e(5140), a.e(7033), a.e(3082), a.e(1270), a.e(2272), a.e(1203), a.e(625)]).then(() => () => a(21203))), d("@rsgweb/utils", "0.0.0-development", () => Promise.all([a.e(6256), a.e(8207), a.e(573), a.e(5140), a.e(3769), a.e(3082), a.e(2272), a.e(9192), a.e(606)]).then(() => () => a(40606))), d("clsx", "2.1.1", () => a.e(4921).then(() => () => a(4921))), d("date-fns", "4.4.0", () => a.e(7946).then(() => () => a(87946))), d("focus-trap-react", "10.3.1", () => Promise.all([a.e(4514), a.e(3082), a.e(9653)]).then(() => () => a(44514))), d("prop-types", "15.8.1", () => a.e(331).then(() => () => a(60331))), d("react-dom", "18.3.1", () => Promise.all([a.e(162), a.e(3082)]).then(() => () => a(30162))), d("react-router-dom", "6.30.4", () => Promise.all([a.e(9860), a.e(3082), a.e(4017)]).then(() => () => a(79860))), d("react", "18.3.1", () => a.e(2581).then(() => () => a(22581))), s(66819), s(25136)), i.length ? e[r] = Promise.all(i).then(() => e[r] = 1) : e[r] = 1
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
                for (var o = 1, a = 1; a < e.length; a++) o--, n += "u" == (typeof(f = e[a]))[0] ? "-" : (o > 0 ? "." : "") + (o = 2, f);
                return n
              }
              var c = [];
              for (a = 1; a < e.length; a++) {
                var f = e[a];
                c.push(0 === f ? "not(" + d() + ")" : 1 === f ? "(" + d() + " || " + d() + ")" : 2 === f ? c.pop() + " " + c.pop() : t(f))
              }
              return d();

              function d() {
                return c.pop().replace(/^\((.+)\)$/, "$1")
              }
            },
            r = (t, n) => {
              if (0 in t) {
                n = e(n);
                var o = t[0],
                  a = o < 0;
                a && (o = -o - 1);
                for (var c = 0, f = 1, d = !0;; f++, c++) {
                  var s, i, l = f < t.length ? (typeof t[f])[0] : "";
                  if (c >= n.length || "o" == (i = (typeof(s = n[c]))[0])) return !d || ("u" == l ? f > o && !a : "" == l != a);
                  if ("u" == i) {
                    if (!d || "u" != l) return !1
                  } else if (d)
                    if (l == i)
                      if (f <= o) {
                        if (s != t[f]) return !1
                      } else {
                        if (a ? s > t[f] : s < t[f]) return !1;
                        s != t[f] && (d = !1)
                      }
                  else if ("s" != l && "n" != l) {
                    if (a || f <= o) return !1;
                    d = !1, f--
                  } else {
                    if (f <= o || i < l != a) return !1;
                    d = !1
                  } else "s" != l && "n" != l && (d = !1, f--)
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
              const o = n ? (e => Object.keys(e).reduce((t, r) => (e[r].eager && (t[r] = e[r]), t), {}))(t[r]) : t[r];
              return Object.keys(o).reduce((t, r) => !t || !o[t].loaded && ((t, r) => {
                t = e(t), r = e(r);
                for (var n = 0;;) {
                  if (n >= t.length) return n < r.length && "u" != (typeof r[n])[0];
                  var o = t[n],
                    a = (typeof o)[0];
                  if (n >= r.length) return "u" == a;
                  var c = r[n],
                    f = (typeof c)[0];
                  if (a != f) return "o" == a && "n" == f || "s" == f || "u" == a;
                  if ("o" != a && "u" != a && o != c) return o < c;
                  n++
                }
              })(t, r) ? r : t, 0)
            },
            o = (e, t, r) => r ? r() : ((e, t) => (e => {
              throw new Error(e)
            })("Shared module " + t + " doesn't exist in shared scope " + e))(e, t),
            c = (e => function(t, r, n, o, c) {
              const f = a.I(t);
              return f?.then && !n ? f.then(e.bind(e, t, a.S[t], r, !1, o, c)) : e(t, a.S[t], r, n, o, c)
            })((e, c, f, d, s, i) => {
              if (!((e, t) => e && a.o(e, t))(c, f)) return o(e, f, i);
              const l = n(c, f, d);
              return r(s, l) || (b = ((e, r, n, o) => "Unsatisfied version " + n + " from " + (n && e[r][n].from) + " of shared singleton module " + r + " (required " + t(o) + ")")(c, f, l, s), "undefined" != typeof console && console.warn && console.warn(b)), (u = c[f][l]).loaded = 1, u.get();
              var u, b
            }),
            f = {},
            d = {
              93082: () => c("default", "react", !1, [0], () => a.e(2581).then(() => () => a(22581))),
              84017: () => c("default", "react-dom", !1, [1, 18, 2, 0], () => a.e(162).then(() => () => a(30162))),
              81270: () => c("default", "clsx", !1, [1, 2, 1, 1], () => a.e(4921).then(() => () => a(4921))),
              42909: () => c("default", "@rsgweb/locale-tools", !1, [0], () => Promise.all([a.e(6256), a.e(761), a.e(573), a.e(1125)]).then(() => () => a(93506))),
              99225: () => c("default", "react-router-dom", !1, [0], () => Promise.all([a.e(9860), a.e(4017)]).then(() => () => a(79860))),
              13331: () => c("default", "@rsgweb/utils", !1, [0], () => Promise.all([a.e(6256), a.e(573), a.e(3769), a.e(9192), a.e(606)]).then(() => () => a(40606))),
              20005: () => c("default", "@foundry/react", !1, [0], () => Promise.all([a.e(761), a.e(9086), a.e(4017), a.e(2874), a.e(5866)]).then(() => () => a(19086))),
              23592: () => c("default", "date-fns", !1, [1, 4, 4, 0], () => a.e(7946).then(() => () => a(87946))),
              89653: () => c("default", "prop-types", !1, [1, 15, 8, 1], () => a.e(331).then(() => () => a(60331))),
              56263: () => c("default", "@rsgweb/modules-core-feedback", !1, [0], () => a.e(1203).then(() => () => a(21203))),
              58912: () => c("default", "@foundry-int/utils", !1, [0], () => Promise.all([a.e(9249), a.e(9188)]).then(() => () => a(36807))),
              79955: () => c("default", "focus-trap-react", !1, [1, 10, 3, 1], () => a.e(4514).then(() => () => a(44514))),
              32874: () => c("default", "@foundry-int/utils", !1, [0], () => Promise.all([a.e(883), a.e(9249), a.e(1270), a.e(8504)]).then(() => () => a(98504))),
              45866: () => c("default", "@foundry/icons", !1, [0], () => Promise.all([a.e(7725), a.e(704)]).then(() => () => a(47725)))
            },
            s = {
              625: [13331, 20005, 23592],
              1270: [81270],
              2272: [42909, 99225],
              2874: [32874],
              3082: [93082],
              4017: [84017],
              5866: [45866],
              9653: [89653],
              9809: [56263, 58912, 79955]
            },
            i = {};
          a.f.consumes = (e, t) => {
            a.o(s, e) && s[e].forEach(e => {
              if (a.o(f, e)) return t.push(f[e]);
              if (!i[e]) {
                const r = t => {
                  f[e] = 0, a.m[e] = r => {
                    delete a.c[e], r.exports = t()
                  }
                };
                i[e] = !0;
                const n = t => {
                  delete f[e], a.m[e] = r => {
                    throw delete a.c[e], t
                  }
                };
                try {
                  const o = d[e]();
                  o.then ? t.push(f[e] = o.then(r).catch(n)) : r(o)
                } catch (e) {
                  n(e)
                }
              }
            })
          }
        })(), (() => {
          if ("undefined" != typeof document) {
            var e = {
              129: 0
            };
            a.f.miniCss = (t, r) => {
              e[t] ? r.push(e[t]) : 0 !== e[t] && {
                704: 1,
                1203: 1,
                6372: 1,
                9086: 1,
                9809: 1
              } [t] && r.push(e[t] = (e => new Promise((t, r) => {
                var n = a.miniCssF(e),
                  o = a.p + n;
                if (((e, t) => {
                    for (var r = document.getElementsByTagName("link"), n = 0; n < r.length; n++) {
                      var o = (c = r[n]).getAttribute("data-href") || c.getAttribute("href");
                      if ("stylesheet" === c.rel && (o === e || o === t)) return c
                    }
                    var a = document.getElementsByTagName("style");
                    for (n = 0; n < a.length; n++) {
                      var c;
                      if ((o = (c = a[n]).getAttribute("data-href")) === e || o === t) return c
                    }
                  })(n, o)) return t();
                ((e, t, r, n, o) => {
                  var c = document.createElement("link");
                  c.rel = "stylesheet", c.type = "text/css", a.nc && (c.nonce = a.nc), c.onerror = c.onload = r => {
                    if (c.onerror = c.onload = null, "load" === r.type) n();
                    else {
                      var a = r && r.type,
                        f = r && r.target && r.target.href || t,
                        d = new Error("Loading CSS chunk " + e + " failed.\n(" + a + ": " + f + ")");
                      d.name = "ChunkLoadError", d.code = "CSS_CHUNK_LOAD_FAILED", d.type = a, d.request = f, c.parentNode && c.parentNode.removeChild(c), o(d)
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
            129: 0
          };
          a.f.j = (t, r) => {
            let n = a.o(e, t) ? e[t] : void 0;
            if (0 !== n)
              if (n) r.push(n[2]);
              else if (/^(1270|2874|3082|4017|5866|704|9653)$/.test(t)) e[t] = 0;
            else {
              const o = new Promise((r, o) => n = e[t] = [r, o]);
              r.push(n[2] = o);
              const c = a.p + a.u(t),
                f = new Error,
                d = r => {
                  if (a.o(e, t) && (n = e[t], 0 !== n && (e[t] = void 0), n)) {
                    const e = r && ("load" === r.type ? "missing" : r.type),
                      o = r && r.target && r.target.src;
                    f.message = "Loading chunk " + t + " failed.\n(" + e + ": " + o + ")", f.name = "ChunkLoadError", f.type = e, f.request = o, f.event = r, n[1](f)
                  }
                };
              a.l(c, d, "chunk-" + t, t)
            }
          };
          const t = (t, r) => {
              let [n, o, c] = r;
              var f, d, s = 0;
              if (n.some(t => 0 !== e[t])) {
                for (f in o) a.o(o, f) && (a.m[f] = o[f]);
                c && c(a)
              }
              for (t && t(r); s < n.length; s++) d = n[s], a.o(e, d) && e[d] && e[d][0](), e[d] = 0
            },
            r = self.webpackChunk_rockstargames_sites_red_dead_online = self.webpackChunk_rockstargames_sites_red_dead_online || [];
          r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
        })(), a.nc = void 0, a(64769), a(82021)
      })())
    }
  }
});