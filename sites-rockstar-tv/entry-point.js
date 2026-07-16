try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "7bcd38c6-5980-491a-a60e-bf9770477a1e", e._sentryDebugIdIdentifier = "sentry-dbid-7bcd38c6-5980-491a-a60e-bf9770477a1e")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-rockstar-tv",
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
          4801(e, t, r) {
            (0, r(6745).w)(1)
          },
          6745(e, t, r) {
            const n = r(6029).y;
            t.w = function(e) {
              if (e || (e = 1), !r.y.meta || !r.y.meta.url) throw console.error("__system_context__", r.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
              r.p = n(r.y.meta.url, e)
            }
          },
          4010(e, t, r) {
            r(4801)
          },
          6029(e, t, r) {
            t.y = function(e, t) {
              var r = document.createElement("a");
              r.href = e;
              for (var n = "/" === r.pathname[0] ? r.pathname : "/" + r.pathname, o = 0, a = n.length; o !== t && a >= 0;) "/" === n[--a] && o++;
              if (o !== t) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + t + ") is greater than the number of directories (" + o + ") in the URL path " + e);
              var s = n.slice(0, a + 1);
              return r.protocol + "//" + r.host + s
            };
            Number.isInteger
          },
          5819(e, t, r) {
            "use strict";
            const n = {
                "./index": () => Promise.all([r.e(995), r.e(82), r.e(225), r.e(373)]).then(() => () => r(8373))
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
          5136(e) {
            "use strict";
            e.exports = r
          }
        };
        const n = {};

        function o(t) {
          const r = n[t];
          if (void 0 !== r) return r.exports;
          const a = n[t] = {
            exports: {}
          };
          return e[t].call(a.exports, a, a.exports, o), a.exports
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
            const s = {};
            t = t || [null, e({}), e([]), e(e)];
            for (var i = 2 & n && r;
              ("object" == typeof i || "function" == typeof i) && !~t.indexOf(i); i = e(i)) Object.getOwnPropertyNames(i).forEach(e => s[e] = () => r[e]);
            return s.default = () => r, o.d(a, s), a
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
          57: "64c284c5eee1923f5405a9bab1bf2740",
          162: "21cd1fb5be5b4ca117936900ecdb9696",
          319: "95f11c2e90b1620f726747bc355ad8b2",
          320: "11eb7180f0d82a7a33be19e75f80295c",
          373: "ef4a0ffba877db1d22afb84e77326873",
          581: "af839ccfbf483c956da2a3bdf37eb3da",
          860: "dd0373ec0e18004bc222ebad60f1a96b",
          995: "8eabdc97a3b80c9d5229d264b7ffbe60"
        } [e] + ".js", o.miniCssF = e => "css/d3aed2f918e98d6df62a73adec6169ce.css", o.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), o.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), (() => {
          const e = {},
            t = "@rockstargames/sites-rockstar-tv:";
          o.l = (r, n, a, s) => {
            if (e[r]) return void e[r].push(n);
            let i, c;
            if (void 0 !== a) {
              const e = document.getElementsByTagName("script");
              for (var l = 0; l < e.length; l++) {
                const n = e[l];
                if (n.getAttribute("src") == r || n.getAttribute("data-webpack") == t + a) {
                  i = n;
                  break
                }
              }
            }
            i || (c = !0, i = document.createElement("script"), i.charset = "utf-8", o.nc && i.setAttribute("nonce", o.nc), i.setAttribute("data-webpack", t + a), i.src = r), e[r] = [n];
            const f = (t, n) => {
                i.onerror = i.onload = null, clearTimeout(u);
                const o = e[r];
                if (delete e[r], i.parentNode?.removeChild(i), o?.forEach(e => e(n)), t) return t(n)
              },
              u = setTimeout(f.bind(null, void 0, {
                type: "timeout",
                target: i
              }), 12e4);
            i.onerror = f.bind(null, i.onerror), i.onload = f.bind(null, i.onload), c && document.head.appendChild(i)
          }
        })(), o.r = e => {
          Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, (() => {
          const e = {
              373: [1879]
            },
            t = {
              1879: ["default", "./index", 5136]
            };
          o.f.remotes = (r, n) => {
            o.o(e, r) && e[r].forEach(e => {
              let r = o.R;
              r || (r = []);
              const a = t[e];
              if (r.indexOf(a) >= 0) return;
              if (r.push(a), a.p) return n.push(a.p);
              const s = t => {
                  t || (t = new Error("Container missing")), "string" == typeof t.message && (t.message += '\nwhile loading "' + a[1] + '" from ' + a[2]), o.m[e] = () => {
                    throw t
                  }, a.p = 0
                },
                i = (e, t, r, o, i, c) => {
                  try {
                    const l = e(t, r);
                    if (!l?.then) return i(l, o, c); {
                      const e = l.then(e => i(e, o), s);
                      if (!c) return e;
                      n.push(a.p = e)
                    }
                  } catch (e) {
                    s(e)
                  }
                },
                c = (e, t, n) => i(t.get, a[1], r, 0, l, n),
                l = t => {
                  a.p = 1, o.m[e] = e => {
                    e.exports = t()
                  }
                };
              i(o, a[2], 0, 0, (e, t, r) => e ? i(o.I, a[0], 0, e, c, r) : s(), 1)
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
            const s = o.S[r],
              i = "@rockstargames/sites-rockstar-tv",
              c = (e, t, r, n) => {
                const o = s[e] = s[e] || {},
                  a = o[t];
                (!a || !a.loaded && (!n != !a.eager ? n : i > a.from)) && (o[t] = {
                  get: r,
                  from: i,
                  eager: !!n
                })
              },
              l = [];
            return "default" === r && (c("@rsgweb/utils", "0.0.0-development", () => Promise.all([o.e(319), o.e(995), o.e(82), o.e(57), o.e(225), o.e(320)]).then(() => () => o(6057))), c("react-dom", "18.3.1", () => Promise.all([o.e(162), o.e(82)]).then(() => () => o(162))), c("react-router-dom", "6.30.4", () => Promise.all([o.e(860), o.e(82), o.e(17)]).then(() => () => o(9860))), c("react", "18.3.1", () => o.e(581).then(() => () => o(2581))), (e => {
              const t = e => {
                return t = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(t));
                var t
              };
              try {
                const a = o(e);
                if (!a) return;
                const s = e => e && e.init && e.init(o.S[r], n);
                if (a.then) return l.push(a.then(s, t));
                const i = s(a);
                if (i?.then) return l.push(i.catch(t))
              } catch (e) {
                t(e)
              }
            })(5136)), l.length ? e[r] = Promise.all(l).then(() => e[r] = 1) : e[r] = 1
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
                for (var o = 1, a = 1; a < e.length; a++) o--, n += "u" == (typeof(i = e[a]))[0] ? "-" : (o > 0 ? "." : "") + (o = 2, i);
                return n
              }
              var s = [];
              for (a = 1; a < e.length; a++) {
                var i = e[a];
                s.push(0 === i ? "not(" + c() + ")" : 1 === i ? "(" + c() + " || " + c() + ")" : 2 === i ? s.pop() + " " + s.pop() : t(i))
              }
              return c();

              function c() {
                return s.pop().replace(/^\((.+)\)$/, "$1")
              }
            },
            r = (t, n) => {
              if (0 in t) {
                n = e(n);
                var o = t[0],
                  a = o < 0;
                a && (o = -o - 1);
                for (var s = 0, i = 1, c = !0;; i++, s++) {
                  var l, f, u = i < t.length ? (typeof t[i])[0] : "";
                  if (s >= n.length || "o" == (f = (typeof(l = n[s]))[0])) return !c || ("u" == u ? i > o && !a : "" == u != a);
                  if ("u" == f) {
                    if (!c || "u" != u) return !1
                  } else if (c)
                    if (u == f)
                      if (i <= o) {
                        if (l != t[i]) return !1
                      } else {
                        if (a ? l > t[i] : l < t[i]) return !1;
                        l != t[i] && (c = !1)
                      }
                  else if ("s" != u && "n" != u) {
                    if (a || i <= o) return !1;
                    c = !1, i--
                  } else {
                    if (i <= o || f < u != a) return !1;
                    c = !1
                  } else "s" != u && "n" != u && (c = !1, i--)
                }
              }
              var d = [],
                p = d.pop.bind(d);
              for (s = 1; s < t.length; s++) {
                var h = t[s];
                d.push(1 == h ? p() | p() : 2 == h ? p() & p() : h ? r(h, n) : !p())
              }
              return !!p()
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
                  var s = r[n],
                    i = (typeof s)[0];
                  if (a != i) return "o" == a && "n" == i || "s" == i || "u" == a;
                  if ("o" != a && "u" != a && o != s) return o < s;
                  n++
                }
              })(t, r) ? r : t, 0)
            },
            a = (e, t, r) => r ? r() : ((e, t) => (e => {
              throw new Error(e)
            })("Shared module " + t + " doesn't exist in shared scope " + e))(e, t),
            s = (e => function(t, r, n, a, s) {
              const i = o.I(t);
              return i?.then && !n ? i.then(e.bind(e, t, o.S[t], r, !1, a, s)) : e(t, o.S[t], r, n, a, s)
            })((e, s, i, c, l, f) => {
              if (!((e, t) => e && o.o(e, t))(s, i)) return a(e, i, f);
              const u = n(s, i, c);
              return r(l, u) || (p = ((e, r, n, o) => "Unsatisfied version " + n + " from " + (n && e[r][n].from) + " of shared singleton module " + r + " (required " + t(o) + ")")(s, i, u, l), "undefined" != typeof console && console.warn && console.warn(p)), (d = s[i][u]).loaded = 1, d.get();
              var d, p
            }),
            i = {},
            c = {
              3082: () => s("default", "react", !1, [0], () => o.e(581).then(() => () => o(2581))),
              9225: () => s("default", "react-router-dom", !1, [0], () => Promise.all([o.e(860), o.e(17)]).then(() => () => o(9860))),
              3331: () => s("default", "@rsgweb/utils", !1, [0], () => Promise.all([o.e(319), o.e(57)]).then(() => () => o(6057))),
              4017: () => s("default", "react-dom", !1, [1, 18, 2, 0], () => o.e(162).then(() => () => o(162)))
            },
            l = {
              17: [4017],
              82: [3082],
              225: [9225],
              373: [3331]
            },
            f = {};
          o.f.consumes = (e, t) => {
            o.o(l, e) && l[e].forEach(e => {
              if (o.o(i, e)) return t.push(i[e]);
              if (!f[e]) {
                const r = t => {
                  i[e] = 0, o.m[e] = r => {
                    delete o.c[e], r.exports = t()
                  }
                };
                f[e] = !0;
                const n = t => {
                  delete i[e], o.m[e] = r => {
                    throw delete o.c[e], t
                  }
                };
                try {
                  const o = c[e]();
                  o.then ? t.push(i[e] = o.then(r).catch(n)) : r(o)
                } catch (e) {
                  n(e)
                }
              }
            })
          }
        })(), (() => {
          if ("undefined" != typeof document) {
            var e = {
              483: 0
            };
            o.f.miniCss = (t, r) => {
              e[t] ? r.push(e[t]) : 0 !== e[t] && {
                373: 1
              } [t] && r.push(e[t] = (e => new Promise((t, r) => {
                var n = o.miniCssF(e),
                  a = o.p + n;
                if (((e, t) => {
                    for (var r = document.getElementsByTagName("link"), n = 0; n < r.length; n++) {
                      var o = (s = r[n]).getAttribute("data-href") || s.getAttribute("href");
                      if ("stylesheet" === s.rel && (o === e || o === t)) return s
                    }
                    var a = document.getElementsByTagName("style");
                    for (n = 0; n < a.length; n++) {
                      var s;
                      if ((o = (s = a[n]).getAttribute("data-href")) === e || o === t) return s
                    }
                  })(n, a)) return t();
                ((e, t, r, n, a) => {
                  var s = document.createElement("link");
                  s.rel = "stylesheet", s.type = "text/css", o.nc && (s.nonce = o.nc), s.onerror = s.onload = r => {
                    if (s.onerror = s.onload = null, "load" === r.type) n();
                    else {
                      var o = r && r.type,
                        i = r && r.target && r.target.href || t,
                        c = new Error("Loading CSS chunk " + e + " failed.\n(" + o + ": " + i + ")");
                      c.name = "ChunkLoadError", c.code = "CSS_CHUNK_LOAD_FAILED", c.type = o, c.request = i, s.parentNode && s.parentNode.removeChild(s), a(c)
                    }
                  }, s.href = t, document.head.appendChild(s)
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
            483: 0
          };
          o.f.j = (t, r) => {
            let n = o.o(e, t) ? e[t] : void 0;
            if (0 !== n)
              if (n) r.push(n[2]);
              else if (/^(17|225|82)$/.test(t)) e[t] = 0;
            else {
              const a = new Promise((r, o) => n = e[t] = [r, o]);
              r.push(n[2] = a);
              const s = o.p + o.u(t),
                i = new Error,
                c = r => {
                  if (o.o(e, t) && (n = e[t], 0 !== n && (e[t] = void 0), n)) {
                    const e = r && ("load" === r.type ? "missing" : r.type),
                      o = r && r.target && r.target.src;
                    i.message = "Loading chunk " + t + " failed.\n(" + e + ": " + o + ")", i.name = "ChunkLoadError", i.type = e, i.request = o, n[1](i)
                  }
                };
              o.l(s, c, "chunk-" + t, t)
            }
          };
          const t = (t, r) => {
              let [n, a, s] = r;
              var i, c, l = 0;
              if (n.some(t => 0 !== e[t])) {
                for (i in a) o.o(a, i) && (o.m[i] = a[i]);
                s && s(o)
              }
              for (t && t(r); l < n.length; l++) c = n[l], o.o(e, c) && e[c] && e[c][0](), e[c] = 0
            },
            r = self.webpackChunk_rockstargames_sites_rockstar_tv = self.webpackChunk_rockstargames_sites_rockstar_tv || [];
          r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
        })(), o(4010), o(5819)
      })())
    }
  }
});