try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "62422995-d7e2-4198-b84a-71aa8d1e7e01", e._sentryDebugIdIdentifier = "sentry-dbid-62422995-d7e2-4198-b84a-71aa8d1e7e01")
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
          64801(e, t, r) {
            (0, r(26745).w)(1)
          },
          26745(e, t, r) {
            const n = r(86029).y;
            t.w = function(e) {
              if (e || (e = 1), !r.y.meta || !r.y.meta.url) throw console.error("__system_context__", r.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
              r.p = n(r.y.meta.url, e)
            }
          },
          4010(e, t, r) {
            r(64801)
          },
          86029(e, t, r) {
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
                "./index": () => Promise.all([r.e(6256), r.e(8207), r.e(1116), r.e(883), r.e(7033), r.e(2719), r.e(3082), r.e(4017), r.e(1270), r.e(6596), r.e(2454), r.e(9571), r.e(9653), r.e(208)]).then(() => () => r(70208))
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
          162: "f862c2322413fe4b5c55dbc5d25cb76f",
          208: "5d7bb60dda30e8cceed15047e62b977f",
          331: "f7bd6f2877fc804fcb830c954b51adcb",
          573: "c06e9df773f63765543c5716a6213294",
          761: "11dc034f41598401c4e7c01eb2c8086d",
          842: "89ade0219848baaeec279e854385e0da",
          883: "25708cc94383f8b154d885d88b645a55",
          1039: "fd066972df6191571fcef57c1497bb0b",
          1116: "993fe62cd83024ff4fc997edea270f3b",
          1205: "892926b4e3534f3fd92898ac74ef2ea1",
          1644: "7122cb28d9254b4f07759332a8c9d7a7",
          1869: "216012fd4f9ab9a4c53cb91ee8eaa775",
          2321: "050b01996e9b4dbb8cc301149652b35f",
          2454: "77c6f5712ad288143eeac838951f685a",
          2581: "3682f202ad444edfe049d81ca660457b",
          2719: "5d2d0d83669007dead10a08a04af8457",
          2796: "3c7213ab41a634ff2843485ba978722d",
          2841: "a4301b91b5b631c0b13648bfe2c5cda0",
          3592: "03ddd3689d79a9f0209cb77f7a07b294",
          3753: "fdaca2e88c28efd56e937668023f6d60",
          4514: "8a3fedc69b674e7d6190d42b2f98b0e6",
          4592: "034a20a99151b3a85a3b64a050e16b71",
          4597: "24913434f99eec85412a6dfacf2d3fcb",
          4693: "647aa886b2fc5139af6e93ea236e9a81",
          4921: "ff1d6aa594592dfa8161f185e6970e21",
          5710: "d5852e4a0272ad13c503a7b47416c888",
          6094: "53df7a1c26a5aefea47fe09bc8a109f4",
          6134: "5cc1b76b12fe5835a7abc6d35de9dfec",
          6256: "44a99ce936311deedc6acad06e1dd99b",
          6543: "83f348ce25de97b2bf511364e93d6dd2",
          6596: "62096e4920de8edc1f40aa38c581dc2b",
          6898: "4ca3a8303e745a00c56cf17f6ac52d97",
          6984: "f2722ca4638a65a0e6ba2c54f4b0d710",
          7033: "9835bfbabb907f2a7fbbfd5f5f1d45d6",
          7465: "40dcd03a9e5bd7c86f436531fcd389c9",
          7783: "f581f42282f2ecd854a3c7a90a109e63",
          7946: "4e93f67ad684de9d2983dc728b4cfef9",
          8207: "31acf135272cd6c0f4079faca868a7e0",
          8461: "aafb101a8e595c1c7524640ed36843de",
          9046: "b6690bb97268a3cffa7ad3265025936d",
          9096: "896c07fc9e7b5d86d49a9eaef717bdce",
          9249: "aea213c8a96a8f199157be6d26673cd8",
          9538: "38733c0cb2892a4a40824f59eb8268b9",
          9571: "bef138287b28622e280ef92bcdd8a8d9",
          9860: "8a6b748eb1d707e2df231a52d14c0780"
        } [e] + ".js", o.miniCssF = e => "css/" + {
          208: "af46c6919832bb57abd0cc6085639100",
          2796: "7c575cc0a210038808b12a81bf37629b",
          3592: "859ff60d203649276b2b1da4dc5ade79",
          3868: "7c575cc0a210038808b12a81bf37629b",
          6094: "8843ca258d15e9ad9b89c8ba94a2af8b"
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
              208: [9566, 31879]
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
            return "default" === r && (s("@foundry-int/utils", "6.3.0", () => Promise.all([o.e(883), o.e(9249), o.e(1270), o.e(5710)]).then(() => () => o(85710))), s("@foundry-int/utils", "6.3.0", () => Promise.all([o.e(883), o.e(9249), o.e(1270), o.e(6134)]).then(() => () => o(56134))), s("@foundry/icons", "6.3.0", () => Promise.all([o.e(2321), o.e(3082), o.e(4017), o.e(9628), o.e(2796)]).then(() => () => o(52321))), s("@foundry/react", "6.3.0", () => Promise.all([o.e(761), o.e(6094), o.e(3082), o.e(4017), o.e(1270), o.e(9628), o.e(357), o.e(4597)]).then(() => () => o(86094))), s("@rsgweb/locale-tools", "0.0.0", () => Promise.all([o.e(6256), o.e(761), o.e(8207), o.e(573), o.e(3082), o.e(842)]).then(() => () => o(40842))), s("@rsgweb/modules-core-feedback", "0.0.0", () => Promise.all([o.e(8207), o.e(1116), o.e(7033), o.e(3082), o.e(1270), o.e(6596), o.e(3592), o.e(9571)]).then(() => () => o(83592))), s("@rsgweb/utils", "0.0.0-development", () => Promise.all([o.e(6256), o.e(8207), o.e(573), o.e(1116), o.e(2841), o.e(3082), o.e(6596), o.e(2454), o.e(9096)]).then(() => () => o(19096))), s("clsx", "2.1.1", () => o.e(4921).then(() => () => o(4921))), s("date-fns", "4.4.0", () => o.e(7946).then(() => () => o(87946))), s("focus-trap-react", "10.3.1", () => Promise.all([o.e(4514), o.e(3082), o.e(9653)]).then(() => () => o(44514))), s("prop-types", "15.8.1", () => o.e(331).then(() => () => o(60331))), s("react-dom", "18.3.1", () => Promise.all([o.e(162), o.e(3082)]).then(() => () => o(30162))), s("react-router-dom", "6.30.4", () => Promise.all([o.e(9860), o.e(3082), o.e(4017)]).then(() => () => o(79860))), s("react", "18.3.1", () => o.e(2581).then(() => () => o(22581))), f(66819), f(25136)), i.length ? e[r] = Promise.all(i).then(() => e[r] = 1) : e[r] = 1
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
              42909: () => d("default", "@rsgweb/locale-tools", !1, [0], () => Promise.all([o.e(6256), o.e(761), o.e(573), o.e(8461)]).then(() => () => o(40842))),
              99225: () => d("default", "react-router-dom", !1, [0], () => Promise.all([o.e(9860), o.e(4017)]).then(() => () => o(79860))),
              13331: () => d("default", "@rsgweb/utils", !1, [0], () => Promise.all([o.e(6256), o.e(573), o.e(2841), o.e(2454), o.e(9096)]).then(() => () => o(19096))),
              23592: () => d("default", "date-fns", !1, [1, 4, 4, 0], () => o.e(7946).then(() => () => o(87946))),
              83841: () => d("default", "@foundry/react", !1, [0], () => Promise.all([o.e(761), o.e(6094), o.e(4017), o.e(9628), o.e(357)]).then(() => () => o(86094))),
              89653: () => d("default", "prop-types", !1, [1, 15, 8, 1], () => o.e(331).then(() => () => o(60331))),
              33949: () => d("default", "@foundry-int/utils", !1, [0], () => Promise.all([o.e(9249), o.e(3753)]).then(() => () => o(56134))),
              56263: () => d("default", "@rsgweb/modules-core-feedback", !1, [0], () => o.e(3592).then(() => () => o(83592))),
              79955: () => d("default", "focus-trap-react", !1, [1, 10, 3, 1], () => o.e(4514).then(() => () => o(44514))),
              39628: () => d("default", "@foundry-int/utils", !1, [0], () => Promise.all([o.e(883), o.e(9249), o.e(1270), o.e(5710)]).then(() => () => o(85710))),
              20357: () => d("default", "@foundry/icons", !1, [0], () => Promise.all([o.e(2321), o.e(3868)]).then(() => () => o(52321)))
            },
            f = {
              208: [33949, 56263, 79955],
              357: [20357],
              1270: [81270],
              3082: [93082],
              4017: [84017],
              6596: [42909, 99225],
              9571: [13331, 23592, 83841],
              9628: [39628],
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
                208: 1,
                2796: 1,
                3592: 1,
                3868: 1,
                6094: 1
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
              else if (/^(3(082|57|868)|96(28|53)|1270|4017)$/.test(t)) e[t] = 0;
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
        })(), o.nc = void 0, o(4010), o(82021)
      })())
    }
  }
});