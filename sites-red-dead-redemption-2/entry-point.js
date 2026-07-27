try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "113121c1-41c1-4190-bf5d-0200776f6f28", e._sentryDebugIdIdentifier = "sentry-dbid-113121c1-41c1-4190-bf5d-0200776f6f28")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-red-dead-redemption-2",
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
              for (var n = "/" === r.pathname[0] ? r.pathname : "/" + r.pathname, o = 0, a = n.length; o !== t && a >= 0;) "/" === n[--a] && o++;
              if (o !== t) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + t + ") is greater than the number of directories (" + o + ") in the URL path " + e);
              var c = n.slice(0, a + 1);
              return r.protocol + "//" + r.host + c
            };
            Number.isInteger
          },
          85819(e, t, r) {
            "use strict";
            const n = {
                "./index": () => Promise.all([r.e(988), r.e(277), r.e(113), r.e(538), r.e(33), r.e(844), r.e(17), r.e(283), r.e(270), r.e(195), r.e(323), r.e(298)]).then(() => () => r(72298))
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
          25136(e) {
            "use strict";
            e.exports = r
          }
        };
        const n = {};

        function o(t) {
          const r = n[t];
          if (void 0 !== r) return r.exports;
          const a = n[t] = {
            id: t,
            loaded: !1,
            exports: {}
          };
          return e[t].call(a.exports, a, a.exports, o), a.loaded = !0, a.exports
        }
        return o.m = e, o.c = n, o.y = t, o.amdO = {}, o.n = e => {
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
            const c = {};
            t = t || [null, e({}), e([]), e(e)];
            for (var d = 2 & n && r;
              ("object" == typeof d || "function" == typeof d) && !~t.indexOf(d); d = e(d)) Object.getOwnPropertyNames(d).forEach(e => c[e] = () => r[e]);
            return c.default = () => r, o.d(a, c), a
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
          33: "357cfcbdebb1d1b40603e1926f22b11e",
          34: "f8423e50f2e3092d29e9d9ba027f3bed",
          42: "735dd3da5372faf54c979500841b8366",
          113: "f4a04fe8e713304ed1e7a0977bc32fa8",
          143: "1392c191c2891480fdd8ddd7d8729a02",
          162: "3f86b41c47204a980d5f53e8f5cad99d",
          195: "77b692c9a5f5b7027c2b939007dbc9c7",
          268: "6e69e49794403ac972077634b7e2ae9d",
          277: "5f61535979c4e61c2f4163242162432e",
          298: "fdb5f44331e4f09728109d50d00f656a",
          323: "e1d7123ccbf30624012e942d1dccdf46",
          376: "b0b60c8668ca3ef37746563c9cc4a581",
          377: "4b4df0e4efa9ed894a689849d286c20e",
          381: "ebb9b996668984ee3cc4dcadefe43ef7",
          421: "42338b385dfca241585ac54f74a6a8f8",
          469: "c01044160c7fcac6cc4821de719f0d84",
          471: "90472ecad339efa41c5addd58f408360",
          519: "4aefefe0cae9fab96dccf21c12c67bf4",
          524: "82587e846fe2cae6f539fc7549fa8748",
          538: "f275804975a1e4b5c42249a5596fa0d0",
          553: "20591fbac56ce4ff9b8344407a331541",
          565: "8f8398e1119045d798972d89cff7eb1b",
          581: "910ce60dfcf6a3a12272b2e9b6d16b09",
          622: "5f43a3a7f3006706ef7b5b7dda853c55",
          656: "27e374fc7a9bfed9afdea6b8e67e68ee",
          701: "8ff8dc397b2a4ccb5136ad4cb148cfeb",
          754: "379ab90b2740bcec7be525f9f65d4133",
          758: "8cc6ab32f1001f86108724b1c96fd1f4",
          761: "efd65ce3074b60fd5a5e613c149a3f0e",
          771: "fc43a5ae8af9d39faf778ae5c6027327",
          775: "98850ef57def544ffeaec7f5295e5818",
          827: "ec58ae6778e19817a41b9b27baf0e12b",
          846: "909fb9448a491c10ceab4815067bfe67",
          860: "0004a555cb0115a28cf3bf82a0d6e42c",
          898: "39e5e871d029db0b2f07553456cef408",
          900: "ed575a1499446c78158a716edc56e520",
          921: "ce39cdc7f88d293420ce55bfe98036d8",
          959: "8112d9c8a035eeeb9ca0ef80b8a1c8f1",
          964: "c5ff9bdde9ee65bc34b623f1ca2532ea",
          988: "c1fe0e1088c4165f3ae6b7e6dee980bf"
        } [e] + ".js", o.miniCssF = e => "css/" + {
          111: "7c575cc0a210038808b12a81bf37629b",
          143: "68e10351293e1cb623f94152132387b0",
          144: "7c575cc0a210038808b12a81bf37629b",
          298: "2a20740f633cf2bfad2e1d58b68e6f1d",
          524: "68e10351293e1cb623f94152132387b0",
          771: "7c575cc0a210038808b12a81bf37629b",
          846: "7c575cc0a210038808b12a81bf37629b",
          959: "8246c4163cfab334e4507605dab20f7b"
        } [e] + ".css", o.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), o.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), (() => {
          const e = {},
            t = "@rockstargames/sites-red-dead-redemption-2:";
          o.l = (r, n, a, c) => {
            if (e[r]) return void e[r].push(n);
            let d, f;
            if (void 0 !== a) {
              const e = document.getElementsByTagName("script");
              for (var s = 0; s < e.length; s++) {
                const n = e[s];
                if (n.getAttribute("src") == r || n.getAttribute("data-webpack") == t + a) {
                  d = n;
                  break
                }
              }
            }
            d || (f = !0, d = document.createElement("script"), d.charset = "utf-8", o.nc && d.setAttribute("nonce", o.nc), d.setAttribute("data-webpack", t + a), d.src = r), e[r] = [n];
            const i = (t, n) => {
                d.onerror = d.onload = null, clearTimeout(l);
                const o = e[r];
                if (delete e[r], d.parentNode?.removeChild(d), o?.forEach(e => e(n)), t) return t(n)
              },
              l = setTimeout(i.bind(null, void 0, {
                type: "timeout",
                target: d
              }), 12e4);
            d.onerror = i.bind(null, d.onerror), d.onload = i.bind(null, d.onload), f && document.head.appendChild(d)
          }
        })(), o.r = e => {
          Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, o.nmd = e => (e.paths = [], e.children || (e.children = []), e), (() => {
          const e = {
              298: [31879]
            },
            t = {
              31879: ["default", "./index", 25136]
            };
          o.f.remotes = (r, n) => {
            o.o(e, r) && e[r].forEach(e => {
              let r = o.R;
              r || (r = []);
              const a = t[e];
              if (r.indexOf(a) >= 0) return;
              if (r.push(a), a.p) return n.push(a.p);
              const c = t => {
                  t || (t = new Error("Container missing")), "string" == typeof t.message && (t.message += '\nwhile loading "' + a[1] + '" from ' + a[2]), o.m[e] = () => {
                    throw t
                  }, a.p = 0
                },
                d = (e, t, r, o, d, f) => {
                  try {
                    const s = e(t, r);
                    if (!s?.then) return d(s, o, f); {
                      const e = s.then(e => d(e, o), c);
                      if (!f) return e;
                      n.push(a.p = e)
                    }
                  } catch (e) {
                    c(e)
                  }
                },
                f = (e, t, n) => d(t.get, a[1], r, 0, s, n),
                s = t => {
                  a.p = 1, o.m[e] = e => {
                    e.exports = t()
                  }
                };
              d(o, a[2], 0, 0, (e, t, r) => e ? d(o.I, a[0], 0, e, f, r) : c(), 1)
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
            const c = o.S[r],
              d = "@rockstargames/sites-red-dead-redemption-2",
              f = (e, t, r, n) => {
                const o = c[e] = c[e] || {},
                  a = o[t];
                (!a || !a.loaded && (!n != !a.eager ? n : d > a.from)) && (o[t] = {
                  get: r,
                  from: d,
                  eager: !!n
                })
              },
              s = [];
            return "default" === r && (f("@foundry/icons", "6.4.0", () => Promise.all([o.e(988), o.e(827), o.e(844), o.e(17), o.e(270), o.e(771)]).then(() => () => o(21827))), f("@foundry/icons", "6.4.0", () => Promise.all([o.e(988), o.e(34), o.e(844), o.e(17), o.e(270), o.e(846)]).then(() => () => o(47034))), f("@foundry/react", "6.4.0", () => Promise.all([o.e(761), o.e(988), o.e(277), o.e(959), o.e(538), o.e(844), o.e(17), o.e(270), o.e(274)]).then(() => () => o(32959))), f("@rsgweb/locale-tools", "0.0.0", () => Promise.all([o.e(761), o.e(844), o.e(283), o.e(377)]).then(() => () => o(77377))), f("@rsgweb/modules-core-agegate", "0.0.0", () => Promise.all([o.e(277), o.e(113), o.e(33), o.e(964), o.e(844), o.e(283), o.e(195), o.e(323), o.e(143)]).then(() => () => o(21143))), f("@rsgweb/utils", "0.0.0-development", () => Promise.all([o.e(277), o.e(113), o.e(565), o.e(844), o.e(283), o.e(195), o.e(519)]).then(() => () => o(40519))), f("clsx", "2.1.1", () => o.e(921).then(() => () => o(4921))), f("lodash-es", "4.18.1", () => o.e(42).then(() => () => o(92042))), f("react-dom", "18.3.1", () => Promise.all([o.e(162), o.e(844)]).then(() => () => o(30162))), f("react-router-dom", "6.30.4", () => Promise.all([o.e(860), o.e(844), o.e(17)]).then(() => () => o(79860))), f("react", "18.3.1", () => o.e(581).then(() => () => o(22581))), (e => {
              const t = e => {
                return t = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(t));
                var t
              };
              try {
                const a = o(e);
                if (!a) return;
                const c = e => e && e.init && e.init(o.S[r], n);
                if (a.then) return s.push(a.then(c, t));
                const d = c(a);
                if (d?.then) return s.push(d.catch(t))
              } catch (e) {
                t(e)
              }
            })(25136)), s.length ? e[r] = Promise.all(s).then(() => e[r] = 1) : e[r] = 1
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
                for (var o = 1, a = 1; a < e.length; a++) o--, n += "u" == (typeof(d = e[a]))[0] ? "-" : (o > 0 ? "." : "") + (o = 2, d);
                return n
              }
              var c = [];
              for (a = 1; a < e.length; a++) {
                var d = e[a];
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
                var o = t[0],
                  a = o < 0;
                a && (o = -o - 1);
                for (var c = 0, d = 1, f = !0;; d++, c++) {
                  var s, i, l = d < t.length ? (typeof t[d])[0] : "";
                  if (c >= n.length || "o" == (i = (typeof(s = n[c]))[0])) return !f || ("u" == l ? d > o && !a : "" == l != a);
                  if ("u" == i) {
                    if (!f || "u" != l) return !1
                  } else if (f)
                    if (l == i)
                      if (d <= o) {
                        if (s != t[d]) return !1
                      } else {
                        if (a ? s > t[d] : s < t[d]) return !1;
                        s != t[d] && (f = !1)
                      }
                  else if ("s" != l && "n" != l) {
                    if (a || d <= o) return !1;
                    f = !1, d--
                  } else {
                    if (d <= o || i < l != a) return !1;
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
              const o = n ? (e => Object.keys(e).reduce((t, r) => (e[r].eager && (t[r] = e[r]), t), {}))(t[r]) : t[r];
              return Object.keys(o).reduce((t, r) => !t || !o[t].loaded && ((t, r) => {
                t = e(t), r = e(r);
                for (var n = 0;;) {
                  if (n >= t.length) return n < r.length && "u" != (typeof r[n])[0];
                  var o = t[n],
                    a = (typeof o)[0];
                  if (n >= r.length) return "u" == a;
                  var c = r[n],
                    d = (typeof c)[0];
                  if (a != d) return "o" == a && "n" == d || "s" == d || "u" == a;
                  if ("o" != a && "u" != a && o != c) return o < c;
                  n++
                }
              })(t, r) ? r : t, 0)
            },
            a = (e, t, r) => r ? r() : ((e, t) => (e => {
              throw new Error(e)
            })("Shared module " + t + " doesn't exist in shared scope " + e))(e, t),
            c = (e => function(t, r, n, a, c) {
              const d = o.I(t);
              return d?.then && !n ? d.then(e.bind(e, t, o.S[t], r, !1, a, c)) : e(t, o.S[t], r, n, a, c)
            })((e, c, d, f, s, i) => {
              if (!((e, t) => e && o.o(e, t))(c, d)) return a(e, d, i);
              const l = n(c, d, f);
              return r(s, l) || (b = ((e, r, n, o) => "Unsatisfied version " + n + " from " + (n && e[r][n].from) + " of shared singleton module " + r + " (required " + t(o) + ")")(c, d, l, s), "undefined" != typeof console && console.warn && console.warn(b)), (u = c[d][l]).loaded = 1, u.get();
              var u, b
            }),
            d = {},
            f = {
              93082: () => c("default", "react", !1, [0], () => o.e(581).then(() => () => o(22581))),
              84017: () => c("default", "react-dom", !1, [1, 18, 2, 0], () => o.e(162).then(() => () => o(30162))),
              40283: () => c("default", "lodash-es", !1, [0], () => o.e(42).then(() => () => o(92042))),
              81270: () => c("default", "clsx", !1, [1, 2, 1, 1], () => o.e(921).then(() => () => o(4921))),
              42909: () => c("default", "@rsgweb/locale-tools", !1, [0], () => Promise.all([o.e(761), o.e(758)]).then(() => () => o(77377))),
              99225: () => c("default", "react-router-dom", !1, [0], () => Promise.all([o.e(860), o.e(17)]).then(() => () => o(79860))),
              13331: () => c("default", "@rsgweb/utils", !1, [0], () => Promise.all([o.e(565), o.e(900)]).then(() => () => o(40519))),
              46014: () => c("default", "@foundry/react", !1, [0], () => Promise.all([o.e(761), o.e(959), o.e(274)]).then(() => () => o(32959))),
              87613: () => c("default", "@rsgweb/modules-core-agegate", !1, [0], () => Promise.all([o.e(964), o.e(524)]).then(() => () => o(21143))),
              32933: () => c("default", "@foundry/icons", !1, [0], () => Promise.all([o.e(34), o.e(111)]).then(() => () => o(47034))),
              36616: () => c("default", "@foundry/icons", !1, [0], () => Promise.all([o.e(827), o.e(144)]).then(() => () => o(21827)))
            },
            s = {
              17: [84017],
              195: [42909, 99225],
              270: [81270],
              274: [32933, 36616],
              283: [40283],
              298: [46014, 87613],
              323: [13331],
              844: [93082]
            },
            i = {};
          o.f.consumes = (e, t) => {
            o.o(s, e) && s[e].forEach(e => {
              if (o.o(d, e)) return t.push(d[e]);
              if (!i[e]) {
                const r = t => {
                  d[e] = 0, o.m[e] = r => {
                    delete o.c[e], r.exports = t()
                  }
                };
                i[e] = !0;
                const n = t => {
                  delete d[e], o.m[e] = r => {
                    throw delete o.c[e], t
                  }
                };
                try {
                  const o = f[e]();
                  o.then ? t.push(d[e] = o.then(r).catch(n)) : r(o)
                } catch (e) {
                  n(e)
                }
              }
            })
          }
        })(), (() => {
          if ("undefined" != typeof document) {
            var e = {
              82: 0
            };
            o.f.miniCss = (t, r) => {
              e[t] ? r.push(e[t]) : 0 !== e[t] && {
                111: 1,
                143: 1,
                144: 1,
                298: 1,
                524: 1,
                771: 1,
                846: 1,
                959: 1
              } [t] && r.push(e[t] = (e => new Promise((t, r) => {
                var n = o.miniCssF(e),
                  a = o.p + n;
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
                  })(n, a)) return t();
                ((e, t, r, n, a) => {
                  var c = document.createElement("link");
                  c.rel = "stylesheet", c.type = "text/css", o.nc && (c.nonce = o.nc), c.onerror = c.onload = r => {
                    if (c.onerror = c.onload = null, "load" === r.type) n();
                    else {
                      var o = r && r.type,
                        d = r && r.target && r.target.href || t,
                        f = new Error("Loading CSS chunk " + e + " failed.\n(" + o + ": " + d + ")");
                      f.name = "ChunkLoadError", f.code = "CSS_CHUNK_LOAD_FAILED", f.type = o, f.request = d, c.parentNode && c.parentNode.removeChild(c), a(f)
                    }
                  }, c.href = t, document.head.appendChild(c)
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
            82: 0
          };
          o.f.j = (t, r) => {
            let n = o.o(e, t) ? e[t] : void 0;
            if (0 !== n)
              if (n) r.push(n[2]);
              else if (/^(1(11|44|7)|2(70|74|83)|844)$/.test(t)) e[t] = 0;
            else {
              const a = new Promise((r, o) => n = e[t] = [r, o]);
              r.push(n[2] = a);
              const c = o.p + o.u(t),
                d = new Error,
                f = r => {
                  if (o.o(e, t) && (n = e[t], 0 !== n && (e[t] = void 0), n)) {
                    const e = r && ("load" === r.type ? "missing" : r.type),
                      o = r && r.target && r.target.src;
                    d.message = "Loading chunk " + t + " failed.\n(" + e + ": " + o + ")", d.name = "ChunkLoadError", d.type = e, d.request = o, n[1](d)
                  }
                };
              o.l(c, f, "chunk-" + t, t)
            }
          };
          const t = (t, r) => {
              let [n, a, c] = r;
              var d, f, s = 0;
              if (n.some(t => 0 !== e[t])) {
                for (d in a) o.o(a, d) && (o.m[d] = a[d]);
                c && c(o)
              }
              for (t && t(r); s < n.length; s++) f = n[s], o.o(e, f) && e[f] && e[f][0](), e[f] = 0
            },
            r = self.webpackChunk_rockstargames_sites_red_dead_redemption_2 = self.webpackChunk_rockstargames_sites_red_dead_redemption_2 || [];
          r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
        })(), o.nc = void 0, o(87732), o(85819)
      })())
    }
  }
});