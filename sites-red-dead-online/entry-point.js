try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "478661e4-0d1e-49da-a6df-2e0302a14d14", e._sentryDebugIdIdentifier = "sentry-dbid-478661e4-0d1e-49da-a6df-2e0302a14d14")
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
                "./index": () => Promise.all([r.e(6256), r.e(8207), r.e(1116), r.e(883), r.e(7033), r.e(8393), r.e(3082), r.e(4017), r.e(1270), r.e(195), r.e(6406), r.e(2198), r.e(9653), r.e(803)]).then(() => () => r(30803))
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
          162: "849d725d856370c58d72c34e6a8f009f",
          195: "ad969ab2466ff9beb86831a8379af313",
          197: "0aeba4445403b30a968efdfb3b3a11f1",
          331: "cdbe072bb6da3ade5350e205119527d1",
          573: "d644f27b521d3cea24c5dec13a4bd2f3",
          607: "5644edcb9171c9cbe0922f1b1deb158d",
          761: "cfad0ec218e6f034c8059be5973a88df",
          788: "e4811362249bf06cdb5255330fe28b07",
          803: "f57dda445317d9c909b58720d598c8b0",
          883: "2be654ec6cdf301424927f33b4e64226",
          1020: "5a6a4661efa15903ee100eaaa4d10b1c",
          1116: "74b757ed38b03cf10832216333c6b44d",
          1820: "13f75fb2e8c327d3c89e43b7fab0c66b",
          2198: "ea2c03044f1abde09879872fb5bf1ed7",
          2578: "66be650e949363e32439e0988ed2d736",
          2581: "456ed1b1a0f3732128bb20a653dd8730",
          2841: "2171bef05354c9438421ae563eb0e60a",
          3253: "527c03379ab44a76f6fa2d91b843360f",
          3275: "429dc2907206e9982d72f1afada0ff91",
          3633: "2730cbb1537d889873cdf306ed1c4448",
          3852: "b529c14316684aa6d4479f8160b8b520",
          4047: "e152bb6f6cbf70fbc5fb32a7e394be7e",
          4497: "7ebbce791575df34f0bedd7971a7691f",
          4514: "fa02dcfe41262a40e2867bcc87553795",
          4590: "01ec6ffc87b79beee91feb7ed24816d6",
          4597: "4fb51429262013a139d36bb21f90c2a1",
          4632: "d6c11980ce205e0942bd25054b4d7727",
          4711: "97f38e6879a95afb5e7b01e675584fed",
          4791: "90fae908471c50e1dda7ac99ce29b430",
          4921: "cb66ebeee5d9173a1687b77b88e24c63",
          5962: "7400a6bcd5523a878ea6e988f569e5fc",
          6256: "e1d0865499c61f7c89d1c2ef91b65141",
          6406: "1bd7406c4c67e47998e04e46a6a62c85",
          7033: "e7d39d969ac8be4af822e8032b686573",
          7377: "2369658ad403123caf471fd9ed53c529",
          7861: "aec5f077023bfd0de38d107abad83754",
          7946: "a52d9bfd5f846e6c04c10d6417c25275",
          8207: "8ace6f483ec2843ab7918715445bcc1e",
          8393: "1680fdd0f9ba08bdcad453ae2a0adb65",
          8511: "e55f1872131a5d14cb9008d43ed931a1",
          8940: "4dcb3eb2ca2ae35889518301b313c31b",
          9206: "4d0ca8839adae2c979671b8ef18edea0",
          9249: "101dbf770c73f2e42652dbc6499c8444",
          9758: "f8f54e3bdfec01c699ab1c822d068440",
          9860: "81f8a9ddcb142068d580ac15d4abf230"
        } [e] + ".js", o.miniCssF = e => "css/" + {
          82: "7c575cc0a210038808b12a81bf37629b",
          607: "1c9b55705ab693054730e10b48cf08f1",
          803: "af46c6919832bb57abd0cc6085639100",
          1820: "7c575cc0a210038808b12a81bf37629b",
          8940: "10f43f39d06c645b9abe3aff8e8728e9"
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
              803: [9566, 31879]
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
            return "default" === r && (s("@foundry-int/utils", "6.5.0", () => Promise.all([o.e(883), o.e(9249), o.e(1270), o.e(4791)]).then(() => () => o(4791))), s("@foundry-int/utils", "6.5.0", () => Promise.all([o.e(883), o.e(9249), o.e(1270), o.e(197)]).then(() => () => o(30197))), s("@foundry/icons", "6.5.0", () => Promise.all([o.e(3253), o.e(3082), o.e(4017), o.e(5229), o.e(1820)]).then(() => () => o(63253))), s("@foundry/react", "6.5.0", () => Promise.all([o.e(761), o.e(8940), o.e(3082), o.e(4017), o.e(1270), o.e(5229), o.e(3762), o.e(4597)]).then(() => () => o(98940))), s("@rsgweb/locale-tools", "0.0.0", () => Promise.all([o.e(6256), o.e(761), o.e(8207), o.e(573), o.e(3082), o.e(7377)]).then(() => () => o(77377))), s("@rsgweb/modules-core-feedback", "0.0.0", () => Promise.all([o.e(8207), o.e(1116), o.e(7033), o.e(3082), o.e(1270), o.e(195), o.e(607), o.e(2198)]).then(() => () => o(607))), s("@rsgweb/utils", "0.0.0-development", () => Promise.all([o.e(6256), o.e(8207), o.e(573), o.e(1116), o.e(2841), o.e(3082), o.e(195), o.e(6406), o.e(4047)]).then(() => () => o(64047))), s("clsx", "2.1.1", () => o.e(4921).then(() => () => o(4921))), s("date-fns", "4.4.0", () => o.e(7946).then(() => () => o(87946))), s("focus-trap-react", "10.3.1", () => Promise.all([o.e(4514), o.e(3082), o.e(9653)]).then(() => () => o(44514))), s("prop-types", "15.8.1", () => o.e(331).then(() => () => o(60331))), s("react-dom", "18.3.1", () => Promise.all([o.e(162), o.e(3082)]).then(() => () => o(30162))), s("react-router-dom", "6.30.4", () => Promise.all([o.e(9860), o.e(3082), o.e(4017)]).then(() => () => o(79860))), s("react", "18.3.1", () => o.e(2581).then(() => () => o(22581))), f(66819), f(25136)), i.length ? e[r] = Promise.all(i).then(() => e[r] = 1) : e[r] = 1
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
              13331: () => d("default", "@rsgweb/utils", !1, [0], () => Promise.all([o.e(6256), o.e(573), o.e(2841), o.e(6406), o.e(4047)]).then(() => () => o(64047))),
              23592: () => d("default", "date-fns", !1, [1, 4, 4, 0], () => o.e(7946).then(() => () => o(87946))),
              44392: () => d("default", "@foundry/react", !1, [0], () => Promise.all([o.e(761), o.e(8940), o.e(4017), o.e(5229), o.e(3762)]).then(() => () => o(98940))),
              89653: () => d("default", "prop-types", !1, [1, 15, 8, 1], () => o.e(331).then(() => () => o(60331))),
              56082: () => d("default", "@foundry-int/utils", !1, [0], () => Promise.all([o.e(9249), o.e(2578)]).then(() => () => o(30197))),
              56263: () => d("default", "@rsgweb/modules-core-feedback", !1, [0], () => o.e(607).then(() => () => o(607))),
              79955: () => d("default", "focus-trap-react", !1, [1, 10, 3, 1], () => o.e(4514).then(() => () => o(44514))),
              95229: () => d("default", "@foundry-int/utils", !1, [0], () => Promise.all([o.e(883), o.e(9249), o.e(1270), o.e(4791)]).then(() => () => o(4791))),
              33762: () => d("default", "@foundry/icons", !1, [0], () => Promise.all([o.e(3253), o.e(82)]).then(() => () => o(63253)))
            },
            f = {
              195: [42909, 99225],
              803: [56082, 56263, 79955],
              1270: [81270],
              2198: [13331, 23592, 44392],
              3082: [93082],
              3762: [33762],
              4017: [84017],
              5229: [95229],
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
                82: 1,
                607: 1,
                803: 1,
                1820: 1,
                8940: 1
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
              else if (/^((308|376|8)2|1270|4017|5229|9653)$/.test(t)) e[t] = 0;
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