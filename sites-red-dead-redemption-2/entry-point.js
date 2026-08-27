try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "8056cbc9-e560-4931-95df-213a95b2aa2e", e._sentryDebugIdIdentifier = "sentry-dbid-8056cbc9-e560-4931-95df-213a95b2aa2e")
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
              var d = n.slice(0, a + 1);
              return r.protocol + "//" + r.host + d
            };
            Number.isInteger
          },
          85819(e, t, r) {
            "use strict";
            const n = {
                "./index": () => Promise.all([r.e(988), r.e(277), r.e(34), r.e(497), r.e(33), r.e(701), r.e(17), r.e(270), r.e(283), r.e(272), r.e(284), r.e(687)]).then(() => () => r(55687))
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
            const d = {};
            t = t || [null, e({}), e([]), e(e)];
            for (var s = 2 & n && r;
              ("object" == typeof s || "function" == typeof s) && !~t.indexOf(s); s = e(s)) Object.getOwnPropertyNames(s).forEach(e => d[e] = () => r[e]);
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
          33: "0f2a9370c61041491e4d67701bc06efc",
          34: "79eb5f182c917b80e5231c4326c9c44a",
          42: "04a68a24a68b1d96304445cbb8a64a52",
          78: "7e5ac950e9c2c02f645900ac39d31790",
          96: "905b36185ca2a8a213ffaea93cc8a866",
          123: "fb7c1861e0cd636d0b8a2ef5ffb4cecf",
          125: "aeb132e6598455fadc6d40941021924a",
          160: "00c2ee24ace3a9cb5412c781bed3f428",
          162: "a0e6601dcc43b4b43fca5735a2c8d604",
          195: "9d863fc79ef2d990effc1d6d9d1a53db",
          232: "7ed201811ddea0ea5362363e04e9a79e",
          272: "e59ee3d0e4bd6a89a2a9afb8dbd3f93e",
          277: "f47e98b7d251ab3dddb022ca50c1ffcc",
          278: "21ec65d3635d50d3d1a683e0232f3ae3",
          284: "fe81635d514e3417f2734f5afff0a9cf",
          309: "7089e253039a34a09b0c04241c0d917d",
          326: "6dae51d3d2c8c7bad28b15c972b0ee6f",
          329: "dfb4860d5b5b87bdfe440831b13d3499",
          333: "bd61ab03e7471a6bd8fe541e9bd3f12a",
          346: "af6fc65b5c0c035cc4d3a684e86f529f",
          390: "4ec557c46e05984520f2a4c45ccdc4fa",
          465: "f89b0fa1441806c24286efa9dc6d948f",
          497: "f41bb1e4ed7e9a82082118e549093478",
          505: "e46434e5706fcd3136aebdc86be04697",
          506: "e537b50a3a304be96572a7817cd6aa12",
          581: "0469f1076737ce11320ff1994683e8b8",
          660: "4ba6e3f028ca2f48f4d9bbb3bb2eefcc",
          687: "92a6c19d2012b20f3312b313db6c9ede",
          710: "431bb108f52a168d99005ae53829e493",
          725: "cb6cd8c485fe7c9001155cba34d890ad",
          731: "02a3f94b339943f2dec49724dbfee814",
          761: "60d65a77054529fd72c6298e3dc03cf6",
          860: "217ce5e879713124d0e49210d9aa0b1d",
          881: "0a7bad72ca59ba7691bc75696a3d5040",
          910: "6454c1183ad7d7a4e41fa5e48c8703f5",
          921: "dffeb3b82d6864bd5377318b26b84e5c",
          971: "b38197ce71e269bcc192a5c1493a6354",
          972: "483f4b020ea49ce459cbd8d8fe09f1ca",
          988: "21ba1e007d30adcf718d05cbf502ce17"
        } [e] + ".js", o.miniCssF = e => "css/" + {
          78: "7c575cc0a210038808b12a81bf37629b",
          129: "7c575cc0a210038808b12a81bf37629b",
          160: "9396d2a2fdc659091ea624b50e5e56d3",
          219: "13a52afa646f270058f2f0437b5fdf00",
          329: "7c575cc0a210038808b12a81bf37629b",
          600: "13a52afa646f270058f2f0437b5fdf00",
          687: "2a20740f633cf2bfad2e1d58b68e6f1d",
          704: "7c575cc0a210038808b12a81bf37629b"
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
          o.l = (r, n, a, d) => {
            if (e[r]) return void e[r].push(n);
            let s, f;
            if (void 0 !== a) {
              const e = document.getElementsByTagName("script");
              for (var c = 0; c < e.length; c++) {
                const n = e[c];
                if (n.getAttribute("src") == r || n.getAttribute("data-webpack") == t + a) {
                  s = n;
                  break
                }
              }
            }
            s || (f = !0, s = document.createElement("script"), s.charset = "utf-8", o.nc && s.setAttribute("nonce", o.nc), s.setAttribute("data-webpack", t + a), s.src = r), e[r] = [n];
            const i = (t, n) => {
                s.onerror = s.onload = null, clearTimeout(l);
                const o = e[r];
                if (delete e[r], s.parentNode?.removeChild(s), o?.forEach(e => e(n)), t) return t(n)
              },
              l = setTimeout(i.bind(null, void 0, {
                type: "timeout",
                target: s
              }), 12e4);
            s.onerror = i.bind(null, s.onerror), s.onload = i.bind(null, s.onload), f && document.head.appendChild(s)
          }
        })(), o.r = e => {
          Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, o.nmd = e => (e.paths = [], e.children || (e.children = []), e), (() => {
          const e = {
              687: [31879]
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
              const d = t => {
                  t || (t = new Error("Container missing")), "string" == typeof t.message && (t.message += '\nwhile loading "' + a[1] + '" from ' + a[2]), o.m[e] = () => {
                    throw t
                  }, a.p = 0
                },
                s = (e, t, r, o, s, f) => {
                  try {
                    const c = e(t, r);
                    if (!c?.then) return s(c, o, f); {
                      const e = c.then(e => s(e, o), d);
                      if (!f) return e;
                      n.push(a.p = e)
                    }
                  } catch (e) {
                    d(e)
                  }
                },
                f = (e, t, n) => s(t.get, a[1], r, 0, c, n),
                c = t => {
                  a.p = 1, o.m[e] = e => {
                    e.exports = t()
                  }
                };
              s(o, a[2], 0, 0, (e, t, r) => e ? s(o.I, a[0], 0, e, f, r) : d(), 1)
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
              s = "@rockstargames/sites-red-dead-redemption-2",
              f = (e, t, r, n) => {
                const o = d[e] = d[e] || {},
                  a = o[t];
                (!a || !a.loaded && (!n != !a.eager ? n : s > a.from)) && (o[t] = {
                  get: r,
                  from: s,
                  eager: !!n
                })
              },
              c = [];
            return "default" === r && (f("@foundry/icons", "6.6.1", () => Promise.all([o.e(988), o.e(725), o.e(701), o.e(17), o.e(270), o.e(78)]).then(() => () => o(47725))), f("@foundry/icons", "6.6.1", () => Promise.all([o.e(988), o.e(278), o.e(701), o.e(17), o.e(270), o.e(329)]).then(() => () => o(77278))), f("@foundry/react", "6.6.1", () => Promise.all([o.e(988), o.e(761), o.e(277), o.e(34), o.e(160), o.e(701), o.e(17), o.e(270), o.e(801), o.e(866)]).then(() => () => o(85160))), f("@rsgweb/locale-tools", "0.0.0", () => Promise.all([o.e(761), o.e(701), o.e(283), o.e(506)]).then(() => () => o(93506))), f("@rsgweb/modules-core-agegate", "0.0.0", () => Promise.all([o.e(988), o.e(277), o.e(34), o.e(497), o.e(33), o.e(232), o.e(701), o.e(17), o.e(270), o.e(283), o.e(801), o.e(272), o.e(123), o.e(284), o.e(600)]).then(() => () => o(21123))), f("@rsgweb/utils", "0.0.0-development", () => Promise.all([o.e(277), o.e(497), o.e(333), o.e(701), o.e(283), o.e(272), o.e(910)]).then(() => () => o(98910))), f("clsx", "2.1.1", () => o.e(921).then(() => () => o(4921))), f("lodash-es", "4.18.1", () => o.e(42).then(() => () => o(92042))), f("react-dom", "18.3.1", () => Promise.all([o.e(162), o.e(701)]).then(() => () => o(30162))), f("react-router-dom", "6.30.4", () => Promise.all([o.e(860), o.e(701), o.e(17)]).then(() => () => o(79860))), f("react", "18.3.1", () => o.e(581).then(() => () => o(22581))), (e => {
              const t = e => {
                return t = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(t));
                var t
              };
              try {
                const a = o(e);
                if (!a) return;
                const d = e => e && e.init && e.init(o.S[r], n);
                if (a.then) return c.push(a.then(d, t));
                const s = d(a);
                if (s?.then) return c.push(s.catch(t))
              } catch (e) {
                t(e)
              }
            })(25136)), c.length ? e[r] = Promise.all(c).then(() => e[r] = 1) : e[r] = 1
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
                for (var o = 1, a = 1; a < e.length; a++) o--, n += "u" == (typeof(s = e[a]))[0] ? "-" : (o > 0 ? "." : "") + (o = 2, s);
                return n
              }
              var d = [];
              for (a = 1; a < e.length; a++) {
                var s = e[a];
                d.push(0 === s ? "not(" + f() + ")" : 1 === s ? "(" + f() + " || " + f() + ")" : 2 === s ? d.pop() + " " + d.pop() : t(s))
              }
              return f();

              function f() {
                return d.pop().replace(/^\((.+)\)$/, "$1")
              }
            },
            r = (t, n) => {
              if (0 in t) {
                n = e(n);
                var o = t[0],
                  a = o < 0;
                a && (o = -o - 1);
                for (var d = 0, s = 1, f = !0;; s++, d++) {
                  var c, i, l = s < t.length ? (typeof t[s])[0] : "";
                  if (d >= n.length || "o" == (i = (typeof(c = n[d]))[0])) return !f || ("u" == l ? s > o && !a : "" == l != a);
                  if ("u" == i) {
                    if (!f || "u" != l) return !1
                  } else if (f)
                    if (l == i)
                      if (s <= o) {
                        if (c != t[s]) return !1
                      } else {
                        if (a ? c > t[s] : c < t[s]) return !1;
                        c != t[s] && (f = !1)
                      }
                  else if ("s" != l && "n" != l) {
                    if (a || s <= o) return !1;
                    f = !1, s--
                  } else {
                    if (s <= o || i < l != a) return !1;
                    f = !1
                  } else "s" != l && "n" != l && (f = !1, s--)
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
              const o = n ? (e => Object.keys(e).reduce((t, r) => (e[r].eager && (t[r] = e[r]), t), {}))(t[r]) : t[r];
              return Object.keys(o).reduce((t, r) => !t || !o[t].loaded && ((t, r) => {
                t = e(t), r = e(r);
                for (var n = 0;;) {
                  if (n >= t.length) return n < r.length && "u" != (typeof r[n])[0];
                  var o = t[n],
                    a = (typeof o)[0];
                  if (n >= r.length) return "u" == a;
                  var d = r[n],
                    s = (typeof d)[0];
                  if (a != s) return "o" == a && "n" == s || "s" == s || "u" == a;
                  if ("o" != a && "u" != a && o != d) return o < d;
                  n++
                }
              })(t, r) ? r : t, 0)
            },
            a = (e, t, r) => r ? r() : ((e, t) => (e => {
              throw new Error(e)
            })("Shared module " + t + " doesn't exist in shared scope " + e))(e, t),
            d = (e => function(t, r, n, a, d) {
              const s = o.I(t);
              return s?.then && !n ? s.then(e.bind(e, t, o.S[t], r, !1, a, d)) : e(t, o.S[t], r, n, a, d)
            })((e, d, s, f, c, i) => {
              if (!((e, t) => e && o.o(e, t))(d, s)) return a(e, s, i);
              const l = n(d, s, f);
              return r(c, l) || (b = ((e, r, n, o) => "Unsatisfied version " + n + " from " + (n && e[r][n].from) + " of shared singleton module " + r + " (required " + t(o) + ")")(d, s, l, c), "undefined" != typeof console && console.warn && console.warn(b)), (u = d[s][l]).loaded = 1, u.get();
              var u, b
            }),
            s = {},
            f = {
              93082: () => d("default", "react", !1, [0], () => o.e(581).then(() => () => o(22581))),
              84017: () => d("default", "react-dom", !1, [1, 18, 2, 0], () => o.e(162).then(() => () => o(30162))),
              81270: () => d("default", "clsx", !1, [1, 2, 1, 1], () => o.e(921).then(() => () => o(4921))),
              40283: () => d("default", "lodash-es", !1, [0], () => o.e(42).then(() => () => o(92042))),
              42909: () => d("default", "@rsgweb/locale-tools", !1, [0], () => Promise.all([o.e(761), o.e(125)]).then(() => () => o(93506))),
              99225: () => d("default", "react-router-dom", !1, [0], () => Promise.all([o.e(860), o.e(17)]).then(() => () => o(79860))),
              13331: () => d("default", "@rsgweb/utils", !1, [0], () => Promise.all([o.e(333), o.e(881)]).then(() => () => o(98910))),
              32552: () => d("default", "@foundry/react", !1, [0], () => Promise.all([o.e(761), o.e(160), o.e(801), o.e(866)]).then(() => () => o(85160))),
              87613: () => d("default", "@rsgweb/modules-core-agegate", !1, [0], () => Promise.all([o.e(232), o.e(801), o.e(123), o.e(219)]).then(() => () => o(21123))),
              41801: () => d("default", "@foundry/icons", !1, [0], () => Promise.all([o.e(278), o.e(129)]).then(() => () => o(77278))),
              45866: () => d("default", "@foundry/icons", !1, [0], () => Promise.all([o.e(725), o.e(704)]).then(() => () => o(47725)))
            },
            c = {
              17: [84017],
              270: [81270],
              272: [42909, 99225],
              283: [40283],
              284: [13331, 32552],
              687: [87613],
              701: [93082],
              801: [41801],
              866: [45866]
            },
            i = {};
          o.f.consumes = (e, t) => {
            o.o(c, e) && c[e].forEach(e => {
              if (o.o(s, e)) return t.push(s[e]);
              if (!i[e]) {
                const r = t => {
                  s[e] = 0, o.m[e] = r => {
                    delete o.c[e], r.exports = t()
                  }
                };
                i[e] = !0;
                const n = t => {
                  delete s[e], o.m[e] = r => {
                    throw delete o.c[e], t
                  }
                };
                try {
                  const o = f[e]();
                  o.then ? t.push(s[e] = o.then(r).catch(n)) : r(o)
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
                78: 1,
                129: 1,
                160: 1,
                219: 1,
                329: 1,
                600: 1,
                687: 1,
                704: 1
              } [t] && r.push(e[t] = (e => new Promise((t, r) => {
                var n = o.miniCssF(e),
                  a = o.p + n;
                if (((e, t) => {
                    for (var r = document.getElementsByTagName("link"), n = 0; n < r.length; n++) {
                      var o = (d = r[n]).getAttribute("data-href") || d.getAttribute("href");
                      if ("stylesheet" === d.rel && (o === e || o === t)) return d
                    }
                    var a = document.getElementsByTagName("style");
                    for (n = 0; n < a.length; n++) {
                      var d;
                      if ((o = (d = a[n]).getAttribute("data-href")) === e || o === t) return d
                    }
                  })(n, a)) return t();
                ((e, t, r, n, a) => {
                  var d = document.createElement("link");
                  d.rel = "stylesheet", d.type = "text/css", o.nc && (d.nonce = o.nc), d.onerror = d.onload = r => {
                    if (d.onerror = d.onload = null, "load" === r.type) n();
                    else {
                      var o = r && r.type,
                        s = r && r.target && r.target.href || t,
                        f = new Error("Loading CSS chunk " + e + " failed.\n(" + o + ": " + s + ")");
                      f.name = "ChunkLoadError", f.code = "CSS_CHUNK_LOAD_FAILED", f.type = o, f.request = s, d.parentNode && d.parentNode.removeChild(d), a(f)
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
            82: 0
          };
          o.f.j = (t, r) => {
            let n = o.o(e, t) ? e[t] : void 0;
            if (0 !== n)
              if (n) r.push(n[2]);
              else if (/^(2(19|70|83)|70[14]|129|17|600|801|866)$/.test(t)) e[t] = 0;
            else {
              const a = new Promise((r, o) => n = e[t] = [r, o]);
              r.push(n[2] = a);
              const d = o.p + o.u(t),
                s = new Error,
                f = r => {
                  if (o.o(e, t) && (n = e[t], 0 !== n && (e[t] = void 0), n)) {
                    const e = r && ("load" === r.type ? "missing" : r.type),
                      o = r && r.target && r.target.src;
                    s.message = "Loading chunk " + t + " failed.\n(" + e + ": " + o + ")", s.name = "ChunkLoadError", s.type = e, s.request = o, s.event = r, n[1](s)
                  }
                };
              o.l(d, f, "chunk-" + t, t)
            }
          };
          const t = (t, r) => {
              let [n, a, d] = r;
              var s, f, c = 0;
              if (n.some(t => 0 !== e[t])) {
                for (s in a) o.o(a, s) && (o.m[s] = a[s]);
                d && d(o)
              }
              for (t && t(r); c < n.length; c++) f = n[c], o.o(e, f) && e[f] && e[f][0](), e[f] = 0
            },
            r = self.webpackChunk_rockstargames_sites_red_dead_redemption_2 = self.webpackChunk_rockstargames_sites_red_dead_redemption_2 || [];
          r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
        })(), o.nc = void 0, o(64769), o(85819)
      })())
    }
  }
});