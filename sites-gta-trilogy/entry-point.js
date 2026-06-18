try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "57498092-bd78-4747-86c2-5c8103cfd676", e._sentryDebugIdIdentifier = "sentry-dbid-57498092-bd78-4747-86c2-5c8103cfd676")
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
        var e, a, n, o, i, s, d = {
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
          f = {};

        function l(e) {
          var t = f[e];
          if (void 0 !== t) return t.exports;
          var r = f[e] = {
            exports: {}
          };
          return d[e].call(r.exports, r, r.exports, l), r.exports
        }
        return l.m = d, l.c = f, l.y = t, l.amdO = {}, l.n = e => {
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
          70: "df17dd6ada95871b2f34e9a04e23e08f",
          95: "cc6be6dabd3a56463435c116b55248bd",
          145: "57b0b9c41d2c9155a1f2e4c5f08a8d92",
          162: "807b0f70c583ae54917a4b35e94e4826",
          207: "8f5eed429f24fc629d61504cc48dc034",
          221: "d441207be526e008009ab84175403e67",
          269: "76d97cf5014abdd7015758ecf95064fe",
          378: "9f35fb422e6889c423288a299e3a09b6",
          430: "f44edf79cced24939dfd0ce194273aab",
          581: "d2d0c1ae0b07abfbe6ead14f48f7506f",
          583: "3ed219c8113e894bc0a21834a9c8e11e",
          597: "7505579e39822bdae66a65c215733643",
          602: "f9268005d6d956250af9eb98e7111b88",
          663: "3ebdd2f9dd07bcca09f2f857f040bc88",
          793: "67b85ba51b03cb944127e65286f18380",
          863: "e8e1837c137e9462b4d13f37d99ae3e6",
          921: "79230d93a652b89ae932f51d50f02c58",
          997: "e0713e45dac2b1bf9ac367e47a9acbb7"
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
            var i, s;
            if (void 0 !== r)
              for (var d = document.getElementsByTagName("script"), f = 0; f < d.length; f++) {
                var u = d[f];
                if (u.getAttribute("src") == e || u.getAttribute("data-webpack") == o + r) {
                  i = u;
                  break
                }
              }
            i || (s = !0, (i = document.createElement("script")).charset = "utf-8", l.nc && i.setAttribute("nonce", l.nc), i.setAttribute("data-webpack", o + r), i.src = e), n[e] = [t];
            var c = (t, r) => {
                i.onerror = i.onload = null, clearTimeout(p);
                var a = n[e];
                if (delete n[e], i.parentNode && i.parentNode.removeChild(i), a && a.forEach(e => e(r)), t) return t(r)
              },
              p = setTimeout(c.bind(null, void 0, {
                type: "timeout",
                target: i
              }), 12e4);
            i.onerror = c.bind(null, i.onerror), i.onload = c.bind(null, i.onload), s && document.head.appendChild(i)
          }
        }, l.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, i = {
          430: [1879]
        }, s = {
          1879: ["default", "./index", 5136]
        }, l.f.remotes = (e, t) => {
          l.o(i, e) && i[e].forEach(e => {
            var r = l.R;
            r || (r = []);
            var a = s[e];
            if (!(r.indexOf(a) >= 0)) {
              if (r.push(a), a.p) return t.push(a.p);
              var n = t => {
                  t || (t = new Error("Container missing")), "string" == typeof t.message && (t.message += '\nwhile loading "' + a[1] + '" from ' + a[2]), l.m[e] = () => {
                    throw t
                  }, a.p = 0
                },
                o = (e, r, o, i, s, d) => {
                  try {
                    var f = e(r, o);
                    if (!f || !f.then) return s(f, i, d);
                    var l = f.then(e => s(e, i), n);
                    if (!d) return l;
                    t.push(a.p = l)
                  } catch (e) {
                    n(e)
                  }
                },
                i = (e, t, n) => o(t.get, a[1], r, 0, d, n),
                d = t => {
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
                s = (e, t, r, a) => {
                  var n = o[e] = o[e] || {},
                    s = n[t];
                  (!s || !s.loaded && (!a != !s.eager ? a : i > s.from)) && (n[t] = {
                    get: r,
                    from: i,
                    eager: !!a
                  })
                },
                d = [];
              return "default" === r && (s("@rsgweb/locale-tools", "0.0.0", () => Promise.all([l.e(145), l.e(207), l.e(70), l.e(82), l.e(602)]).then(() => () => l(6602))), s("@rsgweb/utils", "0.0.0-development", () => Promise.all([l.e(145), l.e(207), l.e(378), l.e(95), l.e(82), l.e(597), l.e(997)]).then(() => () => l(597))), s("clsx", "2.1.1", () => l.e(921).then(() => () => l(4921))), s("framer-motion", "12.38.0", () => Promise.all([l.e(663), l.e(82), l.e(793)]).then(() => () => l(6663))), s("react-dom", "18.3.1", () => Promise.all([l.e(162), l.e(82)]).then(() => () => l(162))), s("react-router-dom", "6.30.3", () => Promise.all([l.e(269), l.e(82), l.e(17)]).then(() => () => l(6650))), s("react", "18.3.1", () => l.e(581).then(() => () => l(2581))), s("usehooks-ts", "2.16.0", () => Promise.all([l.e(583), l.e(82)]).then(() => () => l(5583))), (() => {
                var e = e => {
                  return t = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(t));
                  var t
                };
                try {
                  var t = l(5136);
                  if (!t) return;
                  var n = e => e && e.init && e.init(l.S[r], a);
                  if (t.then) return d.push(t.then(n, e));
                  var o = n(t);
                  if (o && o.then) return d.push(o.catch(e))
                } catch (t) {
                  e(t)
                }
              })()), d.length ? e[r] = Promise.all(d).then(() => e[r] = 1) : e[r] = 1
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
                for (var n = 1, o = 1; o < e.length; o++) n--, a += "u" == (typeof(s = e[o]))[0] ? "-" : (n > 0 ? "." : "") + (n = 2, s);
                return a
              }
              var i = [];
              for (o = 1; o < e.length; o++) {
                var s = e[o];
                i.push(0 === s ? "not(" + d() + ")" : 1 === s ? "(" + d() + " || " + d() + ")" : 2 === s ? i.pop() + " " + i.pop() : t(s))
              }
              return d();

              function d() {
                return i.pop().replace(/^\((.+)\)$/, "$1")
              }
            },
            r = (t, a) => {
              if (0 in t) {
                a = e(a);
                var n = t[0],
                  o = n < 0;
                o && (n = -n - 1);
                for (var i = 0, s = 1, d = !0;; s++, i++) {
                  var f, l, u = s < t.length ? (typeof t[s])[0] : "";
                  if (i >= a.length || "o" == (l = (typeof(f = a[i]))[0])) return !d || ("u" == u ? s > n && !o : "" == u != o);
                  if ("u" == l) {
                    if (!d || "u" != u) return !1
                  } else if (d)
                    if (u == l)
                      if (s <= n) {
                        if (f != t[s]) return !1
                      } else {
                        if (o ? f > t[s] : f < t[s]) return !1;
                        f != t[s] && (d = !1)
                      }
                  else if ("s" != u && "n" != u) {
                    if (o || s <= n) return !1;
                    d = !1, s--
                  } else {
                    if (s <= n || l < u != o) return !1;
                    d = !1
                  } else "s" != u && "n" != u && (d = !1, s--)
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
                    s = (typeof i)[0];
                  if (o != s) return "o" == o && "n" == s || "s" == s || "u" == o;
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
            })((e, o, i, s, d, f) => {
              if (!((e, t) => e && l.o(e, t))(o, i)) return n(e, i, f);
              var u, c, p = a(o, i, s);
              return r(d, p) || (c = ((e, r, a, n) => "Unsatisfied version " + a + " from " + (a && e[r][a].from) + " of shared singleton module " + r + " (required " + t(n) + ")")(o, i, p, d), "undefined" != typeof console && console.warn && console.warn(c)), (u = o[i][p]).loaded = 1, u.get()
            }),
            i = {},
            s = {
              3082: () => o("default", "react", !1, [0], () => l.e(581).then(() => () => l(2581))),
              2909: () => o("default", "@rsgweb/locale-tools", !1, [0], () => Promise.all([l.e(145), l.e(70), l.e(221)]).then(() => () => l(6602))),
              6416: () => o("default", "react-router-dom", !1, [0], () => Promise.all([l.e(269), l.e(17)]).then(() => () => l(6650))),
              1270: () => o("default", "clsx", !1, [1, 2, 1, 1], () => l.e(921).then(() => () => l(4921))),
              3331: () => o("default", "@rsgweb/utils", !1, [0], () => Promise.all([l.e(145), l.e(378), l.e(597)]).then(() => () => l(597))),
              3517: () => o("default", "framer-motion", !1, [1, 12, 38, 0], () => l.e(663).then(() => () => l(6663))),
              6265: () => o("default", "usehooks-ts", !1, [0], () => l.e(583).then(() => () => l(5583))),
              4017: () => o("default", "react-dom", !1, [1, 18, 2, 0], () => l.e(162).then(() => () => l(162)))
            },
            d = {
              17: [4017],
              82: [3082],
              430: [1270, 3331, 3517, 6265],
              997: [2909, 6416]
            },
            f = {};
          l.f.consumes = (e, t) => {
            l.o(d, e) && d[e].forEach(e => {
              if (l.o(i, e)) return t.push(i[e]);
              if (!f[e]) {
                var r = t => {
                  i[e] = 0, l.m[e] = r => {
                    delete l.c[e], r.exports = t()
                  }
                };
                f[e] = !0;
                var a = t => {
                  delete i[e], l.m[e] = r => {
                    throw delete l.c[e], t
                  }
                };
                try {
                  var n = s[e]();
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
                        s = r && r.target && r.target.href || t,
                        d = new Error("Loading CSS chunk " + e + " failed.\n(" + i + ": " + s + ")");
                      d.name = "ChunkLoadError", d.code = "CSS_CHUNK_LOAD_FAILED", d.type = i, d.request = s, o.parentNode && o.parentNode.removeChild(o), n(d)
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
              var a, n, [o, i, s] = r,
                d = 0;
              if (o.some(t => 0 !== e[t])) {
                for (a in i) l.o(i, a) && (l.m[a] = i[a]);
                s && s(l)
              }
              for (t && t(r); d < o.length; d++) n = o[d], l.o(e, n) && e[n] && e[n][0](), e[n] = 0
            },
            r = self.webpackChunk_rockstargames_sites_gta_trilogy = self.webpackChunk_rockstargames_sites_gta_trilogy || [];
          r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
        })(), l(5649), l(5819)
      })())
    }
  }
});