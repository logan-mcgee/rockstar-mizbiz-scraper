try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "144db1a3-5211-4ccb-a338-4b88e5a2a76a", e._sentryDebugIdIdentifier = "sentry-dbid-144db1a3-5211-4ccb-a338-4b88e5a2a76a")
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
          89863(e, t, r) {
            (0, r(35039).w)(1)
          },
          35039(e, t, r) {
            const n = r(20103).y;
            t.w = function(e) {
              if (e || (e = 1), !r.y.meta || !r.y.meta.url) throw console.error("__system_context__", r.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
              r.p = n(r.y.meta.url, e)
            }
          },
          87732(e, t, r) {
            r(89863)
          },
          20103(e, t, r) {
            t.y = function(e, t) {
              var r = document.createElement("a");
              r.href = e;
              for (var n = "/" === r.pathname[0] ? r.pathname : "/" + r.pathname, a = 0, o = n.length; a !== t && o >= 0;) "/" === n[--o] && a++;
              if (a !== t) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + t + ") is greater than the number of directories (" + a + ") in the URL path " + e);
              var d = n.slice(0, o + 1);
              return r.protocol + "//" + r.host + d
            };
            Number.isInteger
          },
          82021(e, t, r) {
            "use strict";
            const n = {
                "./index": () => Promise.all([r.e(6256), r.e(8207), r.e(1116), r.e(883), r.e(7033), r.e(5681), r.e(3082), r.e(4017), r.e(1270), r.e(195), r.e(6406), r.e(2612), r.e(9653), r.e(6522)]).then(() => () => r(86522))
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
          66819(e) {
            "use strict";
            e.exports = r
          },
          25136(e) {
            "use strict";
            e.exports = n
          }
        };
        const a = {};

        function o(t) {
          const r = a[t];
          if (void 0 !== r) return r.exports;
          const n = a[t] = {
            id: t,
            loaded: !1,
            exports: {}
          };
          return e[t].call(n.exports, n, n.exports, o), n.loaded = !0, n.exports
        }
        return o.m = e, o.c = a, o.y = t, o.amdO = {}, o.n = e => {
          const t = e && e.__esModule ? () => e.default : () => e;
          return o.d(t, {
            a: t
          }), t
        }, (() => {
          const e = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__;
          let t;
          o.t = function(r, n) {
            if (1 & n && (r = this(r)), 8 & n) return r;
            if ("object" == typeof r && r) {
              if (4 & n && r.__esModule) return r;
              if (16 & n && "function" == typeof r.then) return r
            }
            const a = Object.create(null);
            o.r(a);
            const d = {};
            t = t || [null, e({}), e([]), e(e)];
            for (var c = 2 & n && r;
              ("object" == typeof c || "function" == typeof c) && !~t.indexOf(c); c = e(c)) Object.getOwnPropertyNames(c).forEach(e => d[e] = () => r[e]);
            return d.default = () => r, o.d(a, d), a
          }
        })(), o.d = (e, t) => {
          if (Array.isArray(t))
            for (var r = 0; r < t.length;) {
              var n = t[r++],
                a = t[r++];
              o.o(e, n) ? 0 === a && r++ : 0 === a ? Object.defineProperty(e, n, {
                enumerable: !0,
                value: t[r++]
              }) : Object.defineProperty(e, n, {
                enumerable: !0,
                get: a
              })
            } else
              for (var n in t) o.o(t, n) && !o.o(e, n) && Object.defineProperty(e, n, {
                enumerable: !0,
                get: t[n]
              })
        }, o.f = {}, o.e = e => Promise.all(Object.keys(o.f).reduce((t, r) => (o.f[r](e, t), t), [])), o.u = e => "js/" + {
          4: "fbfcf75705bf77a007e505247e634b53",
          162: "d7047c4e0e97cba4d53ee7a3b79a6d11",
          195: "be0a8797514a0cee4363a3002e3cc035",
          247: "91eecc89e20bb08d735f68b2a9a168ec",
          331: "48c9e4d2d57c3f582a43f4a5ca2dd5c3",
          573: "2eebfaaa6adaded7dd75bf82364a08d6",
          607: "35fdf640d36e97a503f5b825941d27fc",
          700: "27ea055217724dc0a4e9818a531fcd5a",
          761: "9c32e55c0a9267694186c81639de7bce",
          883: "60fdff6c1a64281174c8d849dc2ba84b",
          1116: "6df274c167f8d0562690dc64c94a2ecf",
          1827: "1c61ba57df380c2d01c0359c7877cb05",
          2581: "4aa38a5f011206d554facebf03422161",
          2612: "cd3037d0233aabd26a98ffb4f5a08065",
          2662: "54d86564d564ef1395beec40f0283cb7",
          2841: "3c171f79d58675f4f6b604b1f61aba87",
          3619: "dacdb75ba076fd96cfc81f2c830c3ab7",
          4047: "38ba8a28958f9bda6108f7cfcbf3d76c",
          4114: "8255afe128d0ccb49b862845c6f06fcd",
          4514: "be38d7d8ad7ec62a8ad3c50c52627e3f",
          4569: "7511d79861cf34a632f74f8b05bf2ff0",
          4597: "394067dca2cc7014a5d25d6693141c49",
          4921: "8911ef55c894c0475948c46c3e1395c6",
          5140: "93d9f01f641d711c2aa2183b9d4cec31",
          5296: "f287c129553242520b4d8fc420a733a8",
          5681: "6ebcd7e7a9463ea1985a728ad72be895",
          6256: "40fa7e12686a792d50a789d93e656689",
          6383: "8def1aac8429e19af4aa9e194f80ff6c",
          6406: "9996a8375e2294d12a9af2c3a0b129f1",
          6522: "5b74671e28ce356db40231acf335918a",
          6950: "13bd24761ba0c2654a7fb17dafc4f25e",
          6994: "8217766076e08e6f84cdcce46a17bbbf",
          7018: "6fd8ca3693d283a64ab7c41376c81ff8",
          7033: "bd2e856280420594414bc926a82584f0",
          7377: "6e7cd5b1b81f062b230fda75217e9428",
          7746: "a875937e93c3d97d070ff817fee2ce21",
          7946: "94babb41bfe3a52b2ca3a3cba80b15d3",
          8207: "08d2fa6b1982e18155df704ccb958d9c",
          8921: "ad2091c41d2dc2acde49b60b36fab170",
          9017: "2b0dc07dfecf01fb3aeb6848f32a8ee2",
          9022: "c2ba4d4e0789de63c658e196acc5f42f",
          9249: "06b073aa7ddf9f1c0352c6fe3211f513",
          9629: "1fa8f57d1f9b333e189de3362c20ec3f",
          9758: "9c98665f307dd60c8f90089310d634ed",
          9860: "4284f038ae421c31f3325f5e6f037cc6"
        } [e] + ".js", o.miniCssF = e => "css/" + {
          607: "dcffe2b4cdeb5fc17a43cbad21929388",
          6522: "af46c6919832bb57abd0cc6085639100",
          7018: "7c575cc0a210038808b12a81bf37629b",
          7746: "bb45f174e141ff2f79d55e591223e370",
          8144: "7c575cc0a210038808b12a81bf37629b"
        } [e] + ".css", o.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), o.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), (() => {
          const e = {},
            t = "@rockstargames/sites-red-dead-online:";
          o.l = (r, n, a, d) => {
            if (e[r]) return void e[r].push(n);
            let c, s;
            if (void 0 !== a) {
              const e = document.getElementsByTagName("script");
              for (var f = 0; f < e.length; f++) {
                const n = e[f];
                if (n.getAttribute("src") == r || n.getAttribute("data-webpack") == t + a) {
                  c = n;
                  break
                }
              }
            }
            c || (s = !0, c = document.createElement("script"), c.charset = "utf-8", o.nc && c.setAttribute("nonce", o.nc), c.setAttribute("data-webpack", t + a), c.src = r), e[r] = [n];
            const i = (t, n) => {
                c.onerror = c.onload = null, clearTimeout(l);
                const a = e[r];
                if (delete e[r], c.parentNode?.removeChild(c), a?.forEach(e => e(n)), t) return t(n)
              },
              l = setTimeout(i.bind(null, void 0, {
                type: "timeout",
                target: c
              }), 12e4);
            c.onerror = i.bind(null, c.onerror), c.onload = i.bind(null, c.onload), s && document.head.appendChild(c)
          }
        })(), o.r = e => {
          Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, o.nmd = e => (e.paths = [], e.children || (e.children = []), e), (() => {
          const e = {
              6522: [9566, 31879]
            },
            t = {
              9566: ["default", "./index", 66819],
              31879: ["default", "./index", 25136]
            };
          o.f.remotes = (r, n) => {
            o.o(e, r) && e[r].forEach(e => {
              let r = o.R;
              r || (r = []);
              const a = t[e];
              if (r.indexOf(a) >= 0) return;
              if (r.push(a), a.p) return n.push(a.p);
              const d = t => {
                  t || (t = new Error("Container missing")), "string" == typeof t.message && (t.message += '\nwhile loading "' + a[1] + '" from ' + a[2]), o.m[e] = () => {
                    throw t
                  }, a.p = 0
                },
                c = (e, t, r, o, c, s) => {
                  try {
                    const f = e(t, r);
                    if (!f?.then) return c(f, o, s); {
                      const e = f.then(e => c(e, o), d);
                      if (!s) return e;
                      n.push(a.p = e)
                    }
                  } catch (e) {
                    d(e)
                  }
                },
                s = (e, t, n) => c(t.get, a[1], r, 0, f, n),
                f = t => {
                  a.p = 1, o.m[e] = e => {
                    e.exports = t()
                  }
                };
              c(o, a[2], 0, 0, (e, t, r) => e ? c(o.I, a[0], 0, e, s, r) : d(), 1)
            })
          }
        })(), (() => {
          o.S = {};
          const e = {},
            t = {};
          o.I = (r, n) => {
            n || (n = []);
            let a = t[r];
            if (a || (a = t[r] = {}), n.indexOf(a) >= 0) return;
            if (n.push(a), e[r]) return e[r];
            o.o(o.S, r) || (o.S[r] = {});
            const d = o.S[r],
              c = "@rockstargames/sites-red-dead-online",
              s = (e, t, r, n) => {
                const a = d[e] = d[e] || {},
                  o = a[t];
                (!o || !o.loaded && (!n != !o.eager ? n : c > o.from)) && (a[t] = {
                  get: r,
                  from: c,
                  eager: !!n
                })
              },
              f = e => {
                const t = e => {
                  return t = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(t));
                  var t
                };
                try {
                  const a = o(e);
                  if (!a) return;
                  const d = e => e && e.init && e.init(o.S[r], n);
                  if (a.then) return i.push(a.then(d, t));
                  const c = d(a);
                  if (c?.then) return i.push(c.catch(t))
                } catch (e) {
                  t(e)
                }
              },
              i = [];
            return "default" === r && (s("@foundry-int/utils", "6.4.0", () => Promise.all([o.e(883), o.e(9249), o.e(1270), o.e(4114)]).then(() => () => o(34114))), s("@foundry-int/utils", "6.4.0", () => Promise.all([o.e(883), o.e(9249), o.e(1270), o.e(6950)]).then(() => () => o(4569))), s("@foundry/icons", "6.4.0", () => Promise.all([o.e(1827), o.e(3082), o.e(4017), o.e(548), o.e(7018)]).then(() => () => o(21827))), s("@foundry/react", "6.4.0", () => Promise.all([o.e(761), o.e(7746), o.e(3082), o.e(4017), o.e(1270), o.e(548), o.e(6616), o.e(4597)]).then(() => () => o(77746))), s("@rsgweb/locale-tools", "0.0.0", () => Promise.all([o.e(6256), o.e(761), o.e(8207), o.e(573), o.e(3082), o.e(7377)]).then(() => () => o(77377))), s("@rsgweb/modules-core-feedback", "0.0.0", () => Promise.all([o.e(8207), o.e(1116), o.e(7033), o.e(3082), o.e(1270), o.e(195), o.e(607), o.e(2612)]).then(() => () => o(607))), s("@rsgweb/utils", "0.0.0-development", () => Promise.all([o.e(6256), o.e(8207), o.e(573), o.e(1116), o.e(2841), o.e(3082), o.e(195), o.e(6406), o.e(4047)]).then(() => () => o(64047))), s("clsx", "2.1.1", () => o.e(4921).then(() => () => o(4921))), s("date-fns", "4.4.0", () => o.e(7946).then(() => () => o(87946))), s("focus-trap-react", "10.3.1", () => Promise.all([o.e(4514), o.e(3082), o.e(9653)]).then(() => () => o(44514))), s("prop-types", "15.8.1", () => o.e(331).then(() => () => o(60331))), s("react-dom", "18.3.1", () => Promise.all([o.e(162), o.e(3082)]).then(() => () => o(30162))), s("react-router-dom", "6.30.4", () => Promise.all([o.e(9860), o.e(3082), o.e(4017)]).then(() => () => o(79860))), s("react", "18.3.1", () => o.e(2581).then(() => () => o(22581))), f(66819), f(25136)), i.length ? e[r] = Promise.all(i).then(() => e[r] = 1) : e[r] = 1
          }
        })(), (() => {
          let e;
          o.g.importScripts && (e = o.g.location + "");
          const t = o.g.document;
          if (!e && t && ("SCRIPT" === t.currentScript?.tagName.toUpperCase() && (e = t.currentScript.src), !e)) {
            const r = t.getElementsByTagName("script");
            if (r.length) {
              let t = r.length - 1;
              for (; t > -1 && (!e || !/^http(s?):/.test(e));) e = r[t--].src
            }
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), o.p = e
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
                for (var a = 1, o = 1; o < e.length; o++) a--, n += "u" == (typeof(c = e[o]))[0] ? "-" : (a > 0 ? "." : "") + (a = 2, c);
                return n
              }
              var d = [];
              for (o = 1; o < e.length; o++) {
                var c = e[o];
                d.push(0 === c ? "not(" + s() + ")" : 1 === c ? "(" + s() + " || " + s() + ")" : 2 === c ? d.pop() + " " + d.pop() : t(c))
              }
              return s();

              function s() {
                return d.pop().replace(/^\((.+)\)$/, "$1")
              }
            },
            r = (t, n) => {
              if (0 in t) {
                n = e(n);
                var a = t[0],
                  o = a < 0;
                o && (a = -a - 1);
                for (var d = 0, c = 1, s = !0;; c++, d++) {
                  var f, i, l = c < t.length ? (typeof t[c])[0] : "";
                  if (d >= n.length || "o" == (i = (typeof(f = n[d]))[0])) return !s || ("u" == l ? c > a && !o : "" == l != o);
                  if ("u" == i) {
                    if (!s || "u" != l) return !1
                  } else if (s)
                    if (l == i)
                      if (c <= a) {
                        if (f != t[c]) return !1
                      } else {
                        if (o ? f > t[c] : f < t[c]) return !1;
                        f != t[c] && (s = !1)
                      }
                  else if ("s" != l && "n" != l) {
                    if (o || c <= a) return !1;
                    s = !1, c--
                  } else {
                    if (c <= a || i < l != o) return !1;
                    s = !1
                  } else "s" != l && "n" != l && (s = !1, c--)
                }
              }
              var u = [],
                b = u.pop.bind(u);
              for (d = 1; d < t.length; d++) {
                var h = t[d];
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
                  var d = r[n],
                    c = (typeof d)[0];
                  if (o != c) return "o" == o && "n" == c || "s" == c || "u" == o;
                  if ("o" != o && "u" != o && a != d) return a < d;
                  n++
                }
              })(t, r) ? r : t, 0)
            },
            a = (e, t, r) => r ? r() : ((e, t) => (e => {
              throw new Error(e)
            })("Shared module " + t + " doesn't exist in shared scope " + e))(e, t),
            d = (e => function(t, r, n, a, d) {
              const c = o.I(t);
              return c?.then && !n ? c.then(e.bind(e, t, o.S[t], r, !1, a, d)) : e(t, o.S[t], r, n, a, d)
            })((e, d, c, s, f, i) => {
              if (!((e, t) => e && o.o(e, t))(d, c)) return a(e, c, i);
              const l = n(d, c, s);
              return r(f, l) || (b = ((e, r, n, a) => "Unsatisfied version " + n + " from " + (n && e[r][n].from) + " of shared singleton module " + r + " (required " + t(a) + ")")(d, c, l, f), "undefined" != typeof console && console.warn && console.warn(b)), (u = d[c][l]).loaded = 1, u.get();
              var u, b
            }),
            c = {},
            s = {
              93082: () => d("default", "react", !1, [0], () => o.e(2581).then(() => () => o(22581))),
              84017: () => d("default", "react-dom", !1, [1, 18, 2, 0], () => o.e(162).then(() => () => o(30162))),
              81270: () => d("default", "clsx", !1, [1, 2, 1, 1], () => o.e(4921).then(() => () => o(4921))),
              42909: () => d("default", "@rsgweb/locale-tools", !1, [0], () => Promise.all([o.e(6256), o.e(761), o.e(573), o.e(9758)]).then(() => () => o(77377))),
              99225: () => d("default", "react-router-dom", !1, [0], () => Promise.all([o.e(9860), o.e(4017)]).then(() => () => o(79860))),
              12394: () => d("default", "@foundry/react", !1, [0], () => Promise.all([o.e(761), o.e(7746), o.e(4017), o.e(548), o.e(6616)]).then(() => () => o(77746))),
              13331: () => d("default", "@rsgweb/utils", !1, [0], () => Promise.all([o.e(6256), o.e(573), o.e(2841), o.e(6406), o.e(4047)]).then(() => () => o(64047))),
              23592: () => d("default", "date-fns", !1, [1, 4, 4, 0], () => o.e(7946).then(() => () => o(87946))),
              89653: () => d("default", "prop-types", !1, [1, 15, 8, 1], () => o.e(331).then(() => () => o(60331))),
              56263: () => d("default", "@rsgweb/modules-core-feedback", !1, [0], () => o.e(607).then(() => () => o(607))),
              60646: () => d("default", "@foundry-int/utils", !1, [0], () => Promise.all([o.e(9249), o.e(4569)]).then(() => () => o(4569))),
              79955: () => d("default", "focus-trap-react", !1, [1, 10, 3, 1], () => o.e(4514).then(() => () => o(44514))),
              50548: () => d("default", "@foundry-int/utils", !1, [0], () => Promise.all([o.e(883), o.e(9249), o.e(1270), o.e(4114)]).then(() => () => o(34114))),
              36616: () => d("default", "@foundry/icons", !1, [0], () => Promise.all([o.e(1827), o.e(8144)]).then(() => () => o(21827)))
            },
            f = {
              195: [42909, 99225],
              548: [50548],
              1270: [81270],
              2612: [12394, 13331, 23592],
              3082: [93082],
              4017: [84017],
              6522: [56263, 60646, 79955],
              6616: [36616],
              9653: [89653]
            },
            i = {};
          o.f.consumes = (e, t) => {
            o.o(f, e) && f[e].forEach(e => {
              if (o.o(c, e)) return t.push(c[e]);
              if (!i[e]) {
                const r = t => {
                  c[e] = 0, o.m[e] = r => {
                    delete o.c[e], r.exports = t()
                  }
                };
                i[e] = !0;
                const n = t => {
                  delete c[e], o.m[e] = r => {
                    throw delete o.c[e], t
                  }
                };
                try {
                  const a = s[e]();
                  a.then ? t.push(c[e] = a.then(r).catch(n)) : r(a)
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
            o.f.miniCss = (t, r) => {
              e[t] ? r.push(e[t]) : 0 !== e[t] && {
                607: 1,
                6522: 1,
                7018: 1,
                7746: 1,
                8144: 1
              } [t] && r.push(e[t] = (e => new Promise((t, r) => {
                var n = o.miniCssF(e),
                  a = o.p + n;
                if (((e, t) => {
                    for (var r = document.getElementsByTagName("link"), n = 0; n < r.length; n++) {
                      var a = (d = r[n]).getAttribute("data-href") || d.getAttribute("href");
                      if ("stylesheet" === d.rel && (a === e || a === t)) return d
                    }
                    var o = document.getElementsByTagName("style");
                    for (n = 0; n < o.length; n++) {
                      var d;
                      if ((a = (d = o[n]).getAttribute("data-href")) === e || a === t) return d
                    }
                  })(n, a)) return t();
                ((e, t, r, n, a) => {
                  var d = document.createElement("link");
                  d.rel = "stylesheet", d.type = "text/css", o.nc && (d.nonce = o.nc), d.onerror = d.onload = r => {
                    if (d.onerror = d.onload = null, "load" === r.type) n();
                    else {
                      var o = r && r.type,
                        c = r && r.target && r.target.href || t,
                        s = new Error("Loading CSS chunk " + e + " failed.\n(" + o + ": " + c + ")");
                      s.name = "ChunkLoadError", s.code = "CSS_CHUNK_LOAD_FAILED", s.type = o, s.request = c, d.parentNode && d.parentNode.removeChild(d), a(s)
                    }
                  }, d.href = t, document.head.appendChild(d)
                })(e, a, 0, t, r)
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
          o.f.j = (t, r) => {
            let n = o.o(e, t) ? e[t] : void 0;
            if (0 !== n)
              if (n) r.push(n[2]);
              else if (/^(1270|3082|4017|548|6616|8144|9653)$/.test(t)) e[t] = 0;
            else {
              const a = new Promise((r, a) => n = e[t] = [r, a]);
              r.push(n[2] = a);
              const d = o.p + o.u(t),
                c = new Error,
                s = r => {
                  if (o.o(e, t) && (n = e[t], 0 !== n && (e[t] = void 0), n)) {
                    const e = r && ("load" === r.type ? "missing" : r.type),
                      a = r && r.target && r.target.src;
                    c.message = "Loading chunk " + t + " failed.\n(" + e + ": " + a + ")", c.name = "ChunkLoadError", c.type = e, c.request = a, n[1](c)
                  }
                };
              o.l(d, s, "chunk-" + t, t)
            }
          };
          const t = (t, r) => {
              let [n, a, d] = r;
              var c, s, f = 0;
              if (n.some(t => 0 !== e[t])) {
                for (c in a) o.o(a, c) && (o.m[c] = a[c]);
                d && d(o)
              }
              for (t && t(r); f < n.length; f++) s = n[f], o.o(e, s) && e[s] && e[s][0](), e[s] = 0
            },
            r = self.webpackChunk_rockstargames_sites_red_dead_online = self.webpackChunk_rockstargames_sites_red_dead_online || [];
          r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
        })(), o.nc = void 0, o(87732), o(82021)
      })())
    }
  }
});