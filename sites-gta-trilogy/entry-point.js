try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "0ff96552-4aa5-4154-85d7-10fecd7495ab", e._sentryDebugIdIdentifier = "sentry-dbid-0ff96552-4aa5-4154-85d7-10fecd7495ab")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-gta-trilogy",
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
        var e, a, n, o, i, f, s = {
            154(e, t, r) {
              (0, r(9160).w)(1)
            },
            9160(e, t, r) {
              const a = r(1908).y;
              t.w = function(e) {
                if (e || (e = 1), !r.y.meta || !r.y.meta.url) throw console.error("__system_context__", r.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                r.p = a(r.y.meta.url, e)
              }
            },
            5649(e, t, r) {
              r(154)
            },
            1908(e, t, r) {
              t.y = function(e, t) {
                var r = document.createElement("a");
                r.href = e;
                for (var a = "/" === r.pathname[0] ? r.pathname : "/" + r.pathname, n = 0, o = a.length; n !== t && o >= 0;) "/" === a[--o] && n++;
                if (n !== t) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + t + ") is greater than the number of directories (" + n + ") in the URL path " + e);
                var i = a.slice(0, o + 1);
                return r.protocol + "//" + r.host + i
              };
              Number.isInteger
            },
            5819(e, t, r) {
              "use strict";
              var a = {
                  "./index": () => Promise.all([r.e(207), r.e(95), r.e(863), r.e(82), r.e(997), r.e(430)]).then(() => () => r(5430))
                },
                n = (e, t) => (r.R = t, t = r.o(a, e) ? a[e]() : Promise.resolve().then(() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                }), r.R = void 0, t),
                o = (e, t) => {
                  if (r.S) {
                    var a = "default",
                      n = r.S[a];
                    if (n && n !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return r.S[a] = e, r.I(a, t)
                  }
                };
              r.d(t, {
                get: () => n,
                init: () => o
              })
            },
            5136(e) {
              "use strict";
              e.exports = r
            }
          },
          d = {};

        function l(e) {
          var t = d[e];
          if (void 0 !== t) return t.exports;
          var r = d[e] = {
            exports: {}
          };
          return s[e].call(r.exports, r, r.exports, l), r.exports
        }
        return l.m = s, l.c = d, l.y = t, l.amdO = {}, l.n = e => {
          var t = e && e.__esModule ? () => e.default : () => e;
          return l.d(t, {
            a: t
          }), t
        }, a = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, l.t = function(t, r) {
          if (1 & r && (t = this(t)), 8 & r) return t;
          if ("object" == typeof t && t) {
            if (4 & r && t.__esModule) return t;
            if (16 & r && "function" == typeof t.then) return t
          }
          var n = Object.create(null);
          l.r(n);
          var o = {};
          e = e || [null, a({}), a([]), a(a)];
          for (var i = 2 & r && t;
            ("object" == typeof i || "function" == typeof i) && !~e.indexOf(i); i = a(i)) Object.getOwnPropertyNames(i).forEach(e => o[e] = () => t[e]);
          return o.default = () => t, l.d(n, o), n
        }, l.d = (e, t) => {
          for (var r in t) l.o(t, r) && !l.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: t[r]
          })
        }, l.f = {}, l.e = e => Promise.all(Object.keys(l.f).reduce((t, r) => (l.f[r](e, t), t), [])), l.u = e => "js/" + {
          70: "1b04c00a7d2167a3cbc90a90a88a5c26",
          95: "b94edb6a47568ca1242bb69aef40a008",
          145: "1c64effd48ca441395707ff4abfc7110",
          162: "d743935726247dbafd10b87a3fb7a619",
          207: "7fb701f49b77e3cdc0e1a24bd3aaa920",
          221: "638ea95acd9eeee5f20b1b6d75373c8a",
          269: "6508aef003f0ae88e1e0181f91a1b0e9",
          378: "6c99e4f2e192f6d567ceaca54f3ad0d1",
          430: "741b9ed647d25a4ce7d229b2fbf2b619",
          581: "a33aecf4e7d38644129dc28eebd3af49",
          583: "862b21a53e183d8fdfb445ca056aefd2",
          602: "fa8357a03afa0a11a11132ce15b7d780",
          663: "fa749dbf9edbdbdeac28be89bcd10d41",
          793: "e42a42840842155d22752b922a95b8aa",
          863: "96e13bc534bf36a88f965fadd8fc8613",
          921: "93ce7a21b8f07a37ec4e04a6a5826f8a",
          940: "a8de9a79adf9d3ca58931f44abf314ba",
          997: "04fdeb0653635107336881ee5afa7dd0"
        } [e] + ".js", l.miniCssF = e => "css/e83618ae9e6416fc1e9cfead82e5be2f.css", l.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), l.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), n = {}, o = "@rockstargames/sites-gta-trilogy:", l.l = (e, t, r, a) => {
          if (n[e]) n[e].push(t);
          else {
            var i, f;
            if (void 0 !== r)
              for (var s = document.getElementsByTagName("script"), d = 0; d < s.length; d++) {
                var u = s[d];
                if (u.getAttribute("src") == e || u.getAttribute("data-webpack") == o + r) {
                  i = u;
                  break
                }
              }
            i || (f = !0, (i = document.createElement("script")).charset = "utf-8", l.nc && i.setAttribute("nonce", l.nc), i.setAttribute("data-webpack", o + r), i.src = e), n[e] = [t];
            var c = (t, r) => {
                i.onerror = i.onload = null, clearTimeout(p);
                var a = n[e];
                if (delete n[e], i.parentNode && i.parentNode.removeChild(i), a && a.forEach(e => e(r)), t) return t(r)
              },
              p = setTimeout(c.bind(null, void 0, {
                type: "timeout",
                target: i
              }), 12e4);
            i.onerror = c.bind(null, i.onerror), i.onload = c.bind(null, i.onload), f && document.head.appendChild(i)
          }
        }, l.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, i = {
          430: [1879]
        }, f = {
          1879: ["default", "./index", 5136]
        }, l.f.remotes = (e, t) => {
          l.o(i, e) && i[e].forEach(e => {
            var r = l.R;
            r || (r = []);
            var a = f[e];
            if (!(r.indexOf(a) >= 0)) {
              if (r.push(a), a.p) return t.push(a.p);
              var n = t => {
                  t || (t = new Error("Container missing")), "string" == typeof t.message && (t.message += '\nwhile loading "' + a[1] + '" from ' + a[2]), l.m[e] = () => {
                    throw t
                  }, a.p = 0
                },
                o = (e, r, o, i, f, s) => {
                  try {
                    var d = e(r, o);
                    if (!d || !d.then) return f(d, i, s);
                    var l = d.then(e => f(e, i), n);
                    if (!s) return l;
                    t.push(a.p = l)
                  } catch (e) {
                    n(e)
                  }
                },
                i = (e, t, n) => o(t.get, a[1], r, 0, s, n),
                s = t => {
                  a.p = 1, l.m[e] = e => {
                    e.exports = t()
                  }
                };
              o(l, a[2], 0, 0, (e, t, r) => e ? o(l.I, a[0], 0, e, i, r) : n(), 1)
            }
          })
        }, (() => {
          l.S = {};
          var e = {},
            t = {};
          l.I = (r, a) => {
            a || (a = []);
            var n = t[r];
            if (n || (n = t[r] = {}), !(a.indexOf(n) >= 0)) {
              if (a.push(n), e[r]) return e[r];
              l.o(l.S, r) || (l.S[r] = {});
              var o = l.S[r],
                i = "@rockstargames/sites-gta-trilogy",
                f = (e, t, r, a) => {
                  var n = o[e] = o[e] || {},
                    f = n[t];
                  (!f || !f.loaded && (!a != !f.eager ? a : i > f.from)) && (n[t] = {
                    get: r,
                    from: i,
                    eager: !!a
                  })
                },
                s = [];
              return "default" === r && (f("@rsgweb/locale-tools", "0.0.0", () => Promise.all([l.e(145), l.e(207), l.e(70), l.e(82), l.e(602)]).then(() => () => l(6602))), f("@rsgweb/utils", "0.0.0-development", () => Promise.all([l.e(145), l.e(207), l.e(378), l.e(95), l.e(82), l.e(940), l.e(997)]).then(() => () => l(8940))), f("clsx", "2.1.1", () => l.e(921).then(() => () => l(4921))), f("framer-motion", "12.38.0", () => Promise.all([l.e(663), l.e(82), l.e(793)]).then(() => () => l(6663))), f("react-dom", "18.3.1", () => Promise.all([l.e(162), l.e(82)]).then(() => () => l(162))), f("react-router-dom", "6.30.3", () => Promise.all([l.e(269), l.e(82), l.e(17)]).then(() => () => l(6650))), f("react", "18.3.1", () => l.e(581).then(() => () => l(2581))), f("usehooks-ts", "2.16.0", () => Promise.all([l.e(583), l.e(82)]).then(() => () => l(5583))), (() => {
                var e = e => {
                  return t = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(t));
                  var t
                };
                try {
                  var t = l(5136);
                  if (!t) return;
                  var n = e => e && e.init && e.init(l.S[r], a);
                  if (t.then) return s.push(t.then(n, e));
                  var o = n(t);
                  if (o && o.then) return s.push(o.catch(e))
                } catch (t) {
                  e(t)
                }
              })()), s.length ? e[r] = Promise.all(s).then(() => e[r] = 1) : e[r] = 1
            }
          }
        })(), (() => {
          var e;
          l.g.importScripts && (e = l.g.location + "");
          var t = l.g.document;
          if (!e && t && (t.currentScript && "SCRIPT" === t.currentScript.tagName.toUpperCase() && (e = t.currentScript.src), !e)) {
            var r = t.getElementsByTagName("script");
            if (r.length)
              for (var a = r.length - 1; a > -1 && (!e || !/^http(s?):/.test(e));) e = r[a--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), l.p = e
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
              var i = [];
              for (o = 1; o < e.length; o++) {
                var f = e[o];
                i.push(0 === f ? "not(" + s() + ")" : 1 === f ? "(" + s() + " || " + s() + ")" : 2 === f ? i.pop() + " " + i.pop() : t(f))
              }
              return s();

              function s() {
                return i.pop().replace(/^\((.+)\)$/, "$1")
              }
            },
            r = (t, a) => {
              if (0 in t) {
                a = e(a);
                var n = t[0],
                  o = n < 0;
                o && (n = -n - 1);
                for (var i = 0, f = 1, s = !0;; f++, i++) {
                  var d, l, u = f < t.length ? (typeof t[f])[0] : "";
                  if (i >= a.length || "o" == (l = (typeof(d = a[i]))[0])) return !s || ("u" == u ? f > n && !o : "" == u != o);
                  if ("u" == l) {
                    if (!s || "u" != u) return !1
                  } else if (s)
                    if (u == l)
                      if (f <= n) {
                        if (d != t[f]) return !1
                      } else {
                        if (o ? d > t[f] : d < t[f]) return !1;
                        d != t[f] && (s = !1)
                      }
                  else if ("s" != u && "n" != u) {
                    if (o || f <= n) return !1;
                    s = !1, f--
                  } else {
                    if (f <= n || l < u != o) return !1;
                    s = !1
                  } else "s" != u && "n" != u && (s = !1, f--)
                }
              }
              var c = [],
                p = c.pop.bind(c);
              for (i = 1; i < t.length; i++) {
                var h = t[i];
                c.push(1 == h ? p() | p() : 2 == h ? p() & p() : h ? r(h, a) : !p())
              }
              return !!p()
            },
            a = (t, r, a) => {
              var n = a ? (e => Object.keys(e).reduce((t, r) => (e[r].eager && (t[r] = e[r]), t), {}))(t[r]) : t[r];
              return Object.keys(n).reduce((t, r) => !t || !n[t].loaded && ((t, r) => {
                t = e(t), r = e(r);
                for (var a = 0;;) {
                  if (a >= t.length) return a < r.length && "u" != (typeof r[a])[0];
                  var n = t[a],
                    o = (typeof n)[0];
                  if (a >= r.length) return "u" == o;
                  var i = r[a],
                    f = (typeof i)[0];
                  if (o != f) return "o" == o && "n" == f || "s" == f || "u" == o;
                  if ("o" != o && "u" != o && n != i) return n < i;
                  a++
                }
              })(t, r) ? r : t, 0)
            },
            n = (e, t, r) => r ? r() : ((e, t) => (e => {
              throw new Error(e)
            })("Shared module " + t + " doesn't exist in shared scope " + e))(e, t),
            o = (e => function(t, r, a, n, o) {
              var i = l.I(t);
              return i && i.then && !a ? i.then(e.bind(e, t, l.S[t], r, !1, n, o)) : e(t, l.S[t], r, a, n, o)
            })((e, o, i, f, s, d) => {
              if (!((e, t) => e && l.o(e, t))(o, i)) return n(e, i, d);
              var u, c, p = a(o, i, f);
              return r(s, p) || (c = ((e, r, a, n) => "Unsatisfied version " + a + " from " + (a && e[r][a].from) + " of shared singleton module " + r + " (required " + t(n) + ")")(o, i, p, s), "undefined" != typeof console && console.warn && console.warn(c)), (u = o[i][p]).loaded = 1, u.get()
            }),
            i = {},
            f = {
              3082: () => o("default", "react", !1, [0], () => l.e(581).then(() => () => l(2581))),
              2909: () => o("default", "@rsgweb/locale-tools", !1, [0], () => Promise.all([l.e(145), l.e(70), l.e(221)]).then(() => () => l(6602))),
              6416: () => o("default", "react-router-dom", !1, [0], () => Promise.all([l.e(269), l.e(17)]).then(() => () => l(6650))),
              1270: () => o("default", "clsx", !1, [1, 2, 1, 1], () => l.e(921).then(() => () => l(4921))),
              3331: () => o("default", "@rsgweb/utils", !1, [0], () => Promise.all([l.e(145), l.e(378), l.e(940)]).then(() => () => l(8940))),
              3517: () => o("default", "framer-motion", !1, [1, 12, 38, 0], () => l.e(663).then(() => () => l(6663))),
              6265: () => o("default", "usehooks-ts", !1, [0], () => l.e(583).then(() => () => l(5583))),
              4017: () => o("default", "react-dom", !1, [1, 18, 2, 0], () => l.e(162).then(() => () => l(162)))
            },
            s = {
              17: [4017],
              82: [3082],
              430: [1270, 3331, 3517, 6265],
              997: [2909, 6416]
            },
            d = {};
          l.f.consumes = (e, t) => {
            l.o(s, e) && s[e].forEach(e => {
              if (l.o(i, e)) return t.push(i[e]);
              if (!d[e]) {
                var r = t => {
                  i[e] = 0, l.m[e] = r => {
                    delete l.c[e], r.exports = t()
                  }
                };
                d[e] = !0;
                var a = t => {
                  delete i[e], l.m[e] = r => {
                    throw delete l.c[e], t
                  }
                };
                try {
                  var n = f[e]();
                  n.then ? t.push(i[e] = n.then(r).catch(a)) : r(n)
                } catch (e) {
                  a(e)
                }
              }
            })
          }
        })(), (() => {
          if ("undefined" != typeof document) {
            var e = {
              60: 0
            };
            l.f.miniCss = (t, r) => {
              e[t] ? r.push(e[t]) : 0 !== e[t] && {
                430: 1
              } [t] && r.push(e[t] = (e => new Promise((t, r) => {
                var a = l.miniCssF(e),
                  n = l.p + a;
                if (((e, t) => {
                    for (var r = document.getElementsByTagName("link"), a = 0; a < r.length; a++) {
                      var n = (i = r[a]).getAttribute("data-href") || i.getAttribute("href");
                      if ("stylesheet" === i.rel && (n === e || n === t)) return i
                    }
                    var o = document.getElementsByTagName("style");
                    for (a = 0; a < o.length; a++) {
                      var i;
                      if ((n = (i = o[a]).getAttribute("data-href")) === e || n === t) return i
                    }
                  })(a, n)) return t();
                ((e, t, r, a, n) => {
                  var o = document.createElement("link");
                  o.rel = "stylesheet", o.type = "text/css", l.nc && (o.nonce = l.nc), o.onerror = o.onload = r => {
                    if (o.onerror = o.onload = null, "load" === r.type) a();
                    else {
                      var i = r && r.type,
                        f = r && r.target && r.target.href || t,
                        s = new Error("Loading CSS chunk " + e + " failed.\n(" + i + ": " + f + ")");
                      s.name = "ChunkLoadError", s.code = "CSS_CHUNK_LOAD_FAILED", s.type = i, s.request = f, o.parentNode && o.parentNode.removeChild(o), n(s)
                    }
                  }, o.href = t, document.head.appendChild(o)
                })(e, n, 0, t, r)
              }))(t).then(() => {
                e[t] = 0
              }, r => {
                throw delete e[t], r
              }))
            }
          }
        })(), (() => {
          var e = {
            60: 0
          };
          l.f.j = (t, r) => {
            var a = l.o(e, t) ? e[t] : void 0;
            if (0 !== a)
              if (a) r.push(a[2]);
              else if (/^(17|82)$/.test(t)) e[t] = 0;
            else {
              var n = new Promise((r, n) => a = e[t] = [r, n]);
              r.push(a[2] = n);
              var o = l.p + l.u(t),
                i = new Error;
              l.l(o, r => {
                if (l.o(e, t) && (0 !== (a = e[t]) && (e[t] = void 0), a)) {
                  var n = r && ("load" === r.type ? "missing" : r.type),
                    o = r && r.target && r.target.src;
                  i.message = "Loading chunk " + t + " failed.\n(" + n + ": " + o + ")", i.name = "ChunkLoadError", i.type = n, i.request = o, a[1](i)
                }
              }, "chunk-" + t, t)
            }
          };
          var t = (t, r) => {
              var a, n, [o, i, f] = r,
                s = 0;
              if (o.some(t => 0 !== e[t])) {
                for (a in i) l.o(i, a) && (l.m[a] = i[a]);
                f && f(l)
              }
              for (t && t(r); s < o.length; s++) n = o[s], l.o(e, n) && e[n] && e[n][0](), e[n] = 0
            },
            r = self.webpackChunk_rockstargames_sites_gta_trilogy = self.webpackChunk_rockstargames_sites_gta_trilogy || [];
          r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
        })(), l(5649), l(5819)
      })())
    }
  }
});