try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "ceea9ffe-8ecf-4254-980e-89d4b6e9987f", e._sentryDebugIdIdentifier = "sentry-dbid-ceea9ffe-8ecf-4254-980e-89d4b6e9987f")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-gif-viewer",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register([], function(e, t) {
  return {
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
              var d = n.slice(0, a + 1);
              return r.protocol + "//" + r.host + d
            };
            Number.isInteger
          },
          14848(e, t, r) {
            "use strict";
            const n = {
                "./index": () => Promise.all([r.e(82), r.e(331), r.e(642)]).then(() => () => r(11642)),
                "./lazy": () => Promise.all([r.e(82), r.e(225), r.e(331), r.e(740)]).then(() => () => r(49740)),
                "./tina": () => Promise.all([r.e(217), r.e(986), r.e(82), r.e(17), r.e(331), r.e(163), r.e(542)]).then(() => () => r(19438)),
                "./tinaBlockTemplates": () => Promise.all([r.e(217), r.e(986), r.e(82), r.e(17), r.e(331), r.e(163), r.e(542)]).then(() => () => r(19438))
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
          }
        };
        const r = {};

        function n(t) {
          const o = r[t];
          if (void 0 !== o) return o.exports;
          const a = r[t] = {
            id: t,
            loaded: !1,
            exports: {}
          };
          return e[t].call(a.exports, a, a.exports, n), a.loaded = !0, a.exports
        }
        return n.m = e, n.c = r, n.y = t, n.amdO = {}, n.n = e => {
          const t = e && e.__esModule ? () => e.default : () => e;
          return n.d(t, {
            a: t
          }), t
        }, (() => {
          const e = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__;
          let t;
          n.t = function(r, o) {
            if (1 & o && (r = this(r)), 8 & o) return r;
            if ("object" == typeof r && r) {
              if (4 & o && r.__esModule) return r;
              if (16 & o && "function" == typeof r.then) return r
            }
            const a = Object.create(null);
            n.r(a);
            const d = {};
            t = t || [null, e({}), e([]), e(e)];
            for (var i = 2 & o && r;
              ("object" == typeof i || "function" == typeof i) && !~t.indexOf(i); i = e(i)) Object.getOwnPropertyNames(i).forEach(e => d[e] = () => r[e]);
            return d.default = () => r, n.d(a, d), a
          }
        })(), n.d = (e, t) => {
          if (Array.isArray(t))
            for (var r = 0; r < t.length;) {
              var o = t[r++],
                a = t[r++];
              n.o(e, o) ? 0 === a && r++ : 0 === a ? Object.defineProperty(e, o, {
                enumerable: !0,
                value: t[r++]
              }) : Object.defineProperty(e, o, {
                enumerable: !0,
                get: a
              })
            } else
              for (var o in t) n.o(t, o) && !n.o(e, o) && Object.defineProperty(e, o, {
                enumerable: !0,
                get: t[o]
              })
        }, n.f = {}, n.e = e => Promise.all(Object.keys(n.f).reduce((t, r) => (n.f[r](e, t), t), [])), n.u = e => "js/" + {
          2: "57dc757cba388a493a46f4f072520fa5",
          47: "eec0e2ecb94e3025cb21ebe76fa99926",
          162: "8ecbd23d6812f61e89e47b36c08f7a6e",
          163: "bfa3a0629c608d96c1d1f2c94a74ac42",
          217: "b61351333c24c6c47cf28dbb22812414",
          264: "063c0bc4d787958d38a1ec991d1efc01",
          428: "06ad0cc9a1fc1836664295eb26b5f707",
          436: "55a63c9454af3e454aaea36fc7b19fbf",
          501: "2484e7153b01c69f5e89d9e0b7f2ab57",
          542: "086cc26ae2e7e548584f48b1904b6305",
          581: "d0e43b4990d1b3753ee8ff6258626302",
          642: "79f2856c2eadb68a9487ceb05c88c440",
          659: "a102373e70e49750ae704088042f3af1",
          683: "0f6dc712e52c553823d3ec1b66ff9671",
          740: "c5d0aa501b81c9c95cfa3f2e1711633d",
          860: "2f752300d9c062a420f761d33324bfab",
          986: "a57d42d73ca52b4db62375916f3c03e0"
        } [e] + ".js", n.miniCssF = e => "css/" + {
          501: "9b2658ef6c5d8454d59ccd4f1949bdff",
          542: "b5328e2f95f5b178239a08711e5d52f6",
          642: "5e608aa107d624a061bf5c1486a248e3",
          740: "069b49906581e555f7e91f6dcda37312"
        } [e] + ".css", n.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), (() => {
          const e = {},
            t = "@rockstargames/modules-core-gif-viewer:";
          n.l = (r, o, a, d) => {
            if (e[r]) return void e[r].push(o);
            let i, s;
            if (void 0 !== a) {
              const e = document.getElementsByTagName("script");
              for (var f = 0; f < e.length; f++) {
                const n = e[f];
                if (n.getAttribute("src") == r || n.getAttribute("data-webpack") == t + a) {
                  i = n;
                  break
                }
              }
            }
            i || (s = !0, i = document.createElement("script"), i.charset = "utf-8", n.nc && i.setAttribute("nonce", n.nc), i.setAttribute("data-webpack", t + a), i.src = r), e[r] = [o];
            const c = (t, n) => {
                i.onerror = i.onload = null, clearTimeout(l);
                const o = e[r];
                if (delete e[r], i.parentNode?.removeChild(i), o?.forEach(e => e(n)), t) return t(n)
              },
              l = setTimeout(c.bind(null, void 0, {
                type: "timeout",
                target: i
              }), 12e4);
            i.onerror = c.bind(null, i.onerror), i.onload = c.bind(null, i.onload), s && document.head.appendChild(i)
          }
        })(), n.r = e => {
          Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, n.nmd = e => (e.paths = [], e.children || (e.children = []), e), (() => {
          n.S = {};
          const e = {},
            t = {};
          n.I = (r, o) => {
            o || (o = []);
            let a = t[r];
            if (a || (a = t[r] = {}), o.indexOf(a) >= 0) return;
            if (o.push(a), e[r]) return e[r];
            n.o(n.S, r) || (n.S[r] = {});
            const d = n.S[r],
              i = "@rockstargames/modules-core-gif-viewer",
              s = (e, t, r, n) => {
                const o = d[e] = d[e] || {},
                  a = o[t];
                (!a || !a.loaded && (!n != !a.eager ? n : i > a.from)) && (o[t] = {
                  get: r,
                  from: i,
                  eager: !!n
                })
              },
              f = [];
            return "default" === r && (s("@rsgweb/tina", "0.0.0", () => Promise.all([n.e(217), n.e(264), n.e(2), n.e(986), n.e(82), n.e(225), n.e(436), n.e(17), n.e(331), n.e(163), n.e(501)]).then(() => () => n(89683))), s("@rsgweb/utils", "0.0.0-development", () => Promise.all([n.e(217), n.e(264), n.e(659), n.e(82), n.e(225), n.e(436), n.e(47)]).then(() => () => n(64047))), s("react-dom", "18.3.1", () => Promise.all([n.e(162), n.e(82)]).then(() => () => n(30162))), s("react-router-dom", "6.30.4", () => Promise.all([n.e(860), n.e(82), n.e(17)]).then(() => () => n(79860))), s("react", "18.3.1", () => n.e(581).then(() => () => n(22581)))), e[r] = f.length ? Promise.all(f).then(() => e[r] = 1) : 1
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
                n = r[1] ? t(r[1]) : [];
              return r[2] && (n.length++, n.push.apply(n, t(r[2]))), r[3] && (n.push([]), n.push.apply(n, t(r[3]))), n
            },
            t = e => {
              var r = e[0],
                n = "";
              if (1 === e.length) return "*";
              if (r + .5) {
                n += 0 == r ? ">=" : -1 == r ? "<" : 1 == r ? "^" : 2 == r ? "~" : r > 0 ? "=" : "!=";
                for (var o = 1, a = 1; a < e.length; a++) o--, n += "u" == (typeof(i = e[a]))[0] ? "-" : (o > 0 ? "." : "") + (o = 2, i);
                return n
              }
              var d = [];
              for (a = 1; a < e.length; a++) {
                var i = e[a];
                d.push(0 === i ? "not(" + s() + ")" : 1 === i ? "(" + s() + " || " + s() + ")" : 2 === i ? d.pop() + " " + d.pop() : t(i))
              }
              return s();

              function s() {
                return d.pop().replace(/^\((.+)\)$/, "$1")
              }
            },
            r = (t, n) => {
              if (0 in t) {
                n = e(n);
                var o = t[0],
                  a = o < 0;
                a && (o = -o - 1);
                for (var d = 0, i = 1, s = !0;; i++, d++) {
                  var f, c, l = i < t.length ? (typeof t[i])[0] : "";
                  if (d >= n.length || "o" == (c = (typeof(f = n[d]))[0])) return !s || ("u" == l ? i > o && !a : "" == l != a);
                  if ("u" == c) {
                    if (!s || "u" != l) return !1
                  } else if (s)
                    if (l == c)
                      if (i <= o) {
                        if (f != t[i]) return !1
                      } else {
                        if (a ? f > t[i] : f < t[i]) return !1;
                        f != t[i] && (s = !1)
                      }
                  else if ("s" != l && "n" != l) {
                    if (a || i <= o) return !1;
                    s = !1, i--
                  } else {
                    if (i <= o || c < l != a) return !1;
                    s = !1
                  } else "s" != l && "n" != l && (s = !1, i--)
                }
              }
              var u = [],
                p = u.pop.bind(u);
              for (d = 1; d < t.length; d++) {
                var h = t[d];
                u.push(1 == h ? p() | p() : 2 == h ? p() & p() : h ? r(h, n) : !p())
              }
              return !!p()
            };
          const o = (t, r, n) => {
              const o = n ? (e => Object.keys(e).reduce((t, r) => (e[r].eager && (t[r] = e[r]), t), {}))(t[r]) : t[r];
              return Object.keys(o).reduce((t, r) => !t || !o[t].loaded && ((t, r) => {
                t = e(t), r = e(r);
                for (var n = 0;;) {
                  if (n >= t.length) return n < r.length && "u" != (typeof r[n])[0];
                  var o = t[n],
                    a = (typeof o)[0];
                  if (n >= r.length) return "u" == a;
                  var d = r[n],
                    i = (typeof d)[0];
                  if (a != i) return "o" == a && "n" == i || "s" == i || "u" == a;
                  if ("o" != a && "u" != a && o != d) return o < d;
                  n++
                }
              })(t, r) ? r : t, 0)
            },
            a = (e, t, r) => r ? r() : ((e, t) => (e => {
              throw new Error(e)
            })("Shared module " + t + " doesn't exist in shared scope " + e))(e, t),
            d = (e => function(t, r, o, a, d) {
              const i = n.I(t);
              return i?.then && !o ? i.then(e.bind(e, t, n.S[t], r, !1, a, d)) : e(t, n.S[t], r, o, a, d)
            })((e, d, i, s, f, c) => {
              if (!((e, t) => e && n.o(e, t))(d, i)) return a(e, i, c);
              const l = o(d, i, s);
              return r(f, l) || (p = ((e, r, n, o) => "Unsatisfied version " + n + " from " + (n && e[r][n].from) + " of shared singleton module " + r + " (required " + t(o) + ")")(d, i, l, f), "undefined" != typeof console && console.warn && console.warn(p)), (u = d[i][l]).loaded = 1, u.get();
              var u, p
            }),
            i = {},
            s = {
              93082: () => d("default", "react", !1, [0], () => n.e(581).then(() => () => n(22581))),
              13331: () => d("default", "@rsgweb/utils", !1, [0], () => Promise.all([n.e(217), n.e(264), n.e(659), n.e(225), n.e(436), n.e(428)]).then(() => () => n(64047))),
              99225: () => d("default", "react-router-dom", !1, [0], () => Promise.all([n.e(860), n.e(17)]).then(() => () => n(79860))),
              84017: () => d("default", "react-dom", !1, [1, 18, 2, 0], () => n.e(162).then(() => () => n(30162))),
              17301: () => d("default", "@rsgweb/tina", !1, [0], () => Promise.all([n.e(264), n.e(2), n.e(225), n.e(436), n.e(683)]).then(() => () => n(89683)))
            },
            f = {
              17: [84017],
              82: [93082],
              225: [99225],
              331: [13331],
              542: [17301]
            },
            c = {};
          n.f.consumes = (e, t) => {
            n.o(f, e) && f[e].forEach(e => {
              if (n.o(i, e)) return t.push(i[e]);
              if (!c[e]) {
                const r = t => {
                  i[e] = 0, n.m[e] = r => {
                    delete n.c[e], r.exports = t()
                  }
                };
                c[e] = !0;
                const o = t => {
                  delete i[e], n.m[e] = r => {
                    throw delete n.c[e], t
                  }
                };
                try {
                  const n = s[e]();
                  n.then ? t.push(i[e] = n.then(r).catch(o)) : r(n)
                } catch (e) {
                  o(e)
                }
              }
            })
          }
        })(), (() => {
          if ("undefined" != typeof document) {
            var e = {
              737: 0
            };
            n.f.miniCss = (t, r) => {
              e[t] ? r.push(e[t]) : 0 !== e[t] && {
                501: 1,
                542: 1,
                642: 1,
                740: 1
              } [t] && r.push(e[t] = (e => new Promise((t, r) => {
                var o = n.miniCssF(e),
                  a = n.p + o;
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
                  })(o, a)) return t();
                ((e, t, r, o, a) => {
                  var d = document.createElement("link");
                  d.rel = "stylesheet", d.type = "text/css", n.nc && (d.nonce = n.nc), d.onerror = d.onload = r => {
                    if (d.onerror = d.onload = null, "load" === r.type) o();
                    else {
                      var n = r && r.type,
                        i = r && r.target && r.target.href || t,
                        s = new Error("Loading CSS chunk " + e + " failed.\n(" + n + ": " + i + ")");
                      s.name = "ChunkLoadError", s.code = "CSS_CHUNK_LOAD_FAILED", s.type = n, s.request = i, d.parentNode && d.parentNode.removeChild(d), a(s)
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
            737: 0
          };
          n.f.j = (t, r) => {
            let o = n.o(e, t) ? e[t] : void 0;
            if (0 !== o)
              if (o) r.push(o[2]);
              else if (/^(17|225|331|82)$/.test(t)) e[t] = 0;
            else {
              const a = new Promise((r, n) => o = e[t] = [r, n]);
              r.push(o[2] = a);
              const d = n.p + n.u(t),
                i = new Error,
                s = r => {
                  if (n.o(e, t) && (o = e[t], 0 !== o && (e[t] = void 0), o)) {
                    const e = r && ("load" === r.type ? "missing" : r.type),
                      n = r && r.target && r.target.src;
                    i.message = "Loading chunk " + t + " failed.\n(" + e + ": " + n + ")", i.name = "ChunkLoadError", i.type = e, i.request = n, o[1](i)
                  }
                };
              n.l(d, s, "chunk-" + t, t)
            }
          };
          const t = (t, r) => {
              let [o, a, d] = r;
              var i, s, f = 0;
              if (o.some(t => 0 !== e[t])) {
                for (i in a) n.o(a, i) && (n.m[i] = a[i]);
                d && d(n)
              }
              for (t && t(r); f < o.length; f++) s = o[f], n.o(e, s) && e[s] && e[s][0](), e[s] = 0
            },
            r = self.webpackChunk_rockstargames_modules_core_gif_viewer = self.webpackChunk_rockstargames_modules_core_gif_viewer || [];
          r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
        })(), n.nc = void 0, n(87732), n(14848)
      })())
    }
  }
});