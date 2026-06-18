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
        var e, n, a, o, i, s, f = {
            154(e, t, r) {
              (0, r(9160).w)(1)
            },
            9160(e, t, r) {
              const n = r(1908).y;
              t.w = function(e) {
                if (e || (e = 1), !r.y.meta || !r.y.meta.url) throw console.error("__system_context__", r.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                r.p = n(r.y.meta.url, e)
              }
            },
            5649(e, t, r) {
              r(154)
            },
            1908(e, t, r) {
              t.y = function(e, t) {
                var r = document.createElement("a");
                r.href = e;
                for (var n = "/" === r.pathname[0] ? r.pathname : "/" + r.pathname, a = 0, o = n.length; a !== t && o >= 0;) "/" === n[--o] && a++;
                if (a !== t) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + t + ") is greater than the number of directories (" + a + ") in the URL path " + e);
                var i = n.slice(0, o + 1);
                return r.protocol + "//" + r.host + i
              };
              Number.isInteger
            },
            5819(e, t, r) {
              "use strict";
              var n = {
                  "./index": () => Promise.all([r.e(207), r.e(95), r.e(863), r.e(82), r.e(997), r.e(430)]).then(() => () => r(5430))
                },
                a = (e, t) => (r.R = t, t = r.o(n, e) ? n[e]() : Promise.resolve().then(() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                }), r.R = void 0, t),
                o = (e, t) => {
                  if (r.S) {
                    var n = "default",
                      a = r.S[n];
                    if (a && a !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return r.S[n] = e, r.I(n, t)
                  }
                };
              r.d(t, {
                get: () => a,
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
          return f[e].call(r.exports, r, r.exports, l), r.exports
        }
        return l.m = f, l.c = d, l.y = t, l.amdO = {}, l.n = e => {
          var t = e && e.__esModule ? () => e.default : () => e;
          return l.d(t, {
            a: t
          }), t
        }, n = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, l.t = function(t, r) {
          if (1 & r && (t = this(t)), 8 & r) return t;
          if ("object" == typeof t && t) {
            if (4 & r && t.__esModule) return t;
            if (16 & r && "function" == typeof t.then) return t
          }
          var a = Object.create(null);
          l.r(a);
          var o = {};
          e = e || [null, n({}), n([]), n(n)];
          for (var i = 2 & r && t;
            ("object" == typeof i || "function" == typeof i) && !~e.indexOf(i); i = n(i)) Object.getOwnPropertyNames(i).forEach(e => o[e] = () => t[e]);
          return o.default = () => t, l.d(a, o), a
        }, l.d = (e, t) => {
          for (var r in t) l.o(t, r) && !l.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: t[r]
          })
        }, l.f = {}, l.e = e => Promise.all(Object.keys(l.f).reduce((t, r) => (l.f[r](e, t), t), [])), l.u = e => "js/" + {
          70: "8843de3ed6f5f493baae57d0f8b5819a",
          95: "02235f06973d3b0aa692bba034a8bcee",
          145: "cb3f221154a6bc4d2e9160c506f6e854",
          162: "068738f6124f420bf5e5e3cff378cf92",
          207: "c2ffd853c514274228137c15404d0483",
          221: "41dbc1dd36e0945d956b453d926f7c6c",
          269: "f7251f7dc7fbdf93c46e13bcf4ca7c9f",
          378: "31f26903349b159b0c4db95af37cc555",
          430: "3a00b53647fd65628b25350a62642499",
          581: "ca07a973eb39015f9207d3ab68b818a7",
          583: "6ee618a024f7ead483a17e9d3d0dc3c3",
          597: "2f0938129c0112dbab8c7126bdc117fe",
          602: "6974c1176f76907ca165d01420a768ef",
          663: "cba74869dd60183540cd5e415133d8ef",
          793: "ad53f09fc920e340cc66a64ff877330c",
          863: "8cd173a01a858d3e16523682fc1f1f31",
          921: "fd3ade9db6d4dd99942e83a81d52a28f",
          997: "fea8cf8b76207b8492cf2d736636a9ca"
        } [e] + ".js", l.miniCssF = e => "css/e83618ae9e6416fc1e9cfead82e5be2f.css", l.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), l.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), a = {}, o = "@rockstargames/sites-gta-trilogy:", l.l = (e, t, r, n) => {
          if (a[e]) a[e].push(t);
          else {
            var i, s;
            if (void 0 !== r)
              for (var f = document.getElementsByTagName("script"), d = 0; d < f.length; d++) {
                var c = f[d];
                if (c.getAttribute("src") == e || c.getAttribute("data-webpack") == o + r) {
                  i = c;
                  break
                }
              }
            i || (s = !0, (i = document.createElement("script")).charset = "utf-8", l.nc && i.setAttribute("nonce", l.nc), i.setAttribute("data-webpack", o + r), i.src = e), a[e] = [t];
            var u = (t, r) => {
                i.onerror = i.onload = null, clearTimeout(p);
                var n = a[e];
                if (delete a[e], i.parentNode && i.parentNode.removeChild(i), n && n.forEach(e => e(r)), t) return t(r)
              },
              p = setTimeout(u.bind(null, void 0, {
                type: "timeout",
                target: i
              }), 12e4);
            i.onerror = u.bind(null, i.onerror), i.onload = u.bind(null, i.onload), s && document.head.appendChild(i)
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
            var n = s[e];
            if (!(r.indexOf(n) >= 0)) {
              if (r.push(n), n.p) return t.push(n.p);
              var a = t => {
                  t || (t = new Error("Container missing")), "string" == typeof t.message && (t.message += '\nwhile loading "' + n[1] + '" from ' + n[2]), l.m[e] = () => {
                    throw t
                  }, n.p = 0
                },
                o = (e, r, o, i, s, f) => {
                  try {
                    var d = e(r, o);
                    if (!d || !d.then) return s(d, i, f);
                    var l = d.then(e => s(e, i), a);
                    if (!f) return l;
                    t.push(n.p = l)
                  } catch (e) {
                    a(e)
                  }
                },
                i = (e, t, a) => o(t.get, n[1], r, 0, f, a),
                f = t => {
                  n.p = 1, l.m[e] = e => {
                    e.exports = t()
                  }
                };
              o(l, n[2], 0, 0, (e, t, r) => e ? o(l.I, n[0], 0, e, i, r) : a(), 1)
            }
          })
        }, (() => {
          l.S = {};
          var e = {},
            t = {};
          l.I = (r, n) => {
            n || (n = []);
            var a = t[r];
            if (a || (a = t[r] = {}), !(n.indexOf(a) >= 0)) {
              if (n.push(a), e[r]) return e[r];
              l.o(l.S, r) || (l.S[r] = {});
              var o = l.S[r],
                i = "@rockstargames/sites-gta-trilogy",
                s = (e, t, r, n) => {
                  var a = o[e] = o[e] || {},
                    s = a[t];
                  (!s || !s.loaded && (!n != !s.eager ? n : i > s.from)) && (a[t] = {
                    get: r,
                    from: i,
                    eager: !!n
                  })
                },
                f = [];
              return "default" === r && (s("@rsgweb/locale-tools", "0.0.0", () => Promise.all([l.e(145), l.e(207), l.e(70), l.e(82), l.e(602)]).then(() => () => l(6602))), s("@rsgweb/utils", "0.0.0-development", () => Promise.all([l.e(145), l.e(207), l.e(378), l.e(95), l.e(82), l.e(597), l.e(997)]).then(() => () => l(597))), s("clsx", "2.1.1", () => l.e(921).then(() => () => l(4921))), s("framer-motion", "12.38.0", () => Promise.all([l.e(663), l.e(82), l.e(793)]).then(() => () => l(6663))), s("react-dom", "18.3.1", () => Promise.all([l.e(162), l.e(82)]).then(() => () => l(162))), s("react-router-dom", "6.30.3", () => Promise.all([l.e(269), l.e(82), l.e(17)]).then(() => () => l(6650))), s("react", "18.3.1", () => l.e(581).then(() => () => l(2581))), s("usehooks-ts", "2.16.0", () => Promise.all([l.e(583), l.e(82)]).then(() => () => l(5583))), (() => {
                var e = e => {
                  return t = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(t));
                  var t
                };
                try {
                  var t = l(5136);
                  if (!t) return;
                  var a = e => e && e.init && e.init(l.S[r], n);
                  if (t.then) return f.push(t.then(a, e));
                  var o = a(t);
                  if (o && o.then) return f.push(o.catch(e))
                } catch (t) {
                  e(t)
                }
              })()), f.length ? e[r] = Promise.all(f).then(() => e[r] = 1) : e[r] = 1
            }
          }
        })(), (() => {
          var e;
          l.g.importScripts && (e = l.g.location + "");
          var t = l.g.document;
          if (!e && t && (t.currentScript && "SCRIPT" === t.currentScript.tagName.toUpperCase() && (e = t.currentScript.src), !e)) {
            var r = t.getElementsByTagName("script");
            if (r.length)
              for (var n = r.length - 1; n > -1 && (!e || !/^http(s?):/.test(e));) e = r[n--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), l.p = e
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
                for (var a = 1, o = 1; o < e.length; o++) a--, n += "u" == (typeof(s = e[o]))[0] ? "-" : (a > 0 ? "." : "") + (a = 2, s);
                return n
              }
              var i = [];
              for (o = 1; o < e.length; o++) {
                var s = e[o];
                i.push(0 === s ? "not(" + f() + ")" : 1 === s ? "(" + f() + " || " + f() + ")" : 2 === s ? i.pop() + " " + i.pop() : t(s))
              }
              return f();

              function f() {
                return i.pop().replace(/^\((.+)\)$/, "$1")
              }
            },
            r = (t, n) => {
              if (0 in t) {
                n = e(n);
                var a = t[0],
                  o = a < 0;
                o && (a = -a - 1);
                for (var i = 0, s = 1, f = !0;; s++, i++) {
                  var d, l, c = s < t.length ? (typeof t[s])[0] : "";
                  if (i >= n.length || "o" == (l = (typeof(d = n[i]))[0])) return !f || ("u" == c ? s > a && !o : "" == c != o);
                  if ("u" == l) {
                    if (!f || "u" != c) return !1
                  } else if (f)
                    if (c == l)
                      if (s <= a) {
                        if (d != t[s]) return !1
                      } else {
                        if (o ? d > t[s] : d < t[s]) return !1;
                        d != t[s] && (f = !1)
                      }
                  else if ("s" != c && "n" != c) {
                    if (o || s <= a) return !1;
                    f = !1, s--
                  } else {
                    if (s <= a || l < c != o) return !1;
                    f = !1
                  } else "s" != c && "n" != c && (f = !1, s--)
                }
              }
              var u = [],
                p = u.pop.bind(u);
              for (i = 1; i < t.length; i++) {
                var h = t[i];
                u.push(1 == h ? p() | p() : 2 == h ? p() & p() : h ? r(h, n) : !p())
              }
              return !!p()
            },
            n = (t, r, n) => {
              var a = n ? (e => Object.keys(e).reduce((t, r) => (e[r].eager && (t[r] = e[r]), t), {}))(t[r]) : t[r];
              return Object.keys(a).reduce((t, r) => !t || !a[t].loaded && ((t, r) => {
                t = e(t), r = e(r);
                for (var n = 0;;) {
                  if (n >= t.length) return n < r.length && "u" != (typeof r[n])[0];
                  var a = t[n],
                    o = (typeof a)[0];
                  if (n >= r.length) return "u" == o;
                  var i = r[n],
                    s = (typeof i)[0];
                  if (o != s) return "o" == o && "n" == s || "s" == s || "u" == o;
                  if ("o" != o && "u" != o && a != i) return a < i;
                  n++
                }
              })(t, r) ? r : t, 0)
            },
            a = (e, t, r) => r ? r() : ((e, t) => (e => {
              throw new Error(e)
            })("Shared module " + t + " doesn't exist in shared scope " + e))(e, t),
            o = (e => function(t, r, n, a, o) {
              var i = l.I(t);
              return i && i.then && !n ? i.then(e.bind(e, t, l.S[t], r, !1, a, o)) : e(t, l.S[t], r, n, a, o)
            })((e, o, i, s, f, d) => {
              if (!((e, t) => e && l.o(e, t))(o, i)) return a(e, i, d);
              var c, u, p = n(o, i, s);
              return r(f, p) || (u = ((e, r, n, a) => "Unsatisfied version " + n + " from " + (n && e[r][n].from) + " of shared singleton module " + r + " (required " + t(a) + ")")(o, i, p, f), "undefined" != typeof console && console.warn && console.warn(u)), (c = o[i][p]).loaded = 1, c.get()
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
            f = {
              17: [4017],
              82: [3082],
              430: [1270, 3331, 3517, 6265],
              997: [2909, 6416]
            },
            d = {};
          l.f.consumes = (e, t) => {
            l.o(f, e) && f[e].forEach(e => {
              if (l.o(i, e)) return t.push(i[e]);
              if (!d[e]) {
                var r = t => {
                  i[e] = 0, l.m[e] = r => {
                    delete l.c[e], r.exports = t()
                  }
                };
                d[e] = !0;
                var n = t => {
                  delete i[e], l.m[e] = r => {
                    throw delete l.c[e], t
                  }
                };
                try {
                  var a = s[e]();
                  a.then ? t.push(i[e] = a.then(r).catch(n)) : r(a)
                } catch (e) {
                  n(e)
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
                var n = l.miniCssF(e),
                  a = l.p + n;
                if (((e, t) => {
                    for (var r = document.getElementsByTagName("link"), n = 0; n < r.length; n++) {
                      var a = (i = r[n]).getAttribute("data-href") || i.getAttribute("href");
                      if ("stylesheet" === i.rel && (a === e || a === t)) return i
                    }
                    var o = document.getElementsByTagName("style");
                    for (n = 0; n < o.length; n++) {
                      var i;
                      if ((a = (i = o[n]).getAttribute("data-href")) === e || a === t) return i
                    }
                  })(n, a)) return t();
                ((e, t, r, n, a) => {
                  var o = document.createElement("link");
                  o.rel = "stylesheet", o.type = "text/css", l.nc && (o.nonce = l.nc), o.onerror = o.onload = r => {
                    if (o.onerror = o.onload = null, "load" === r.type) n();
                    else {
                      var i = r && r.type,
                        s = r && r.target && r.target.href || t,
                        f = new Error("Loading CSS chunk " + e + " failed.\n(" + i + ": " + s + ")");
                      f.name = "ChunkLoadError", f.code = "CSS_CHUNK_LOAD_FAILED", f.type = i, f.request = s, o.parentNode && o.parentNode.removeChild(o), a(f)
                    }
                  }, o.href = t, document.head.appendChild(o)
                })(e, a, 0, t, r)
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
            var n = l.o(e, t) ? e[t] : void 0;
            if (0 !== n)
              if (n) r.push(n[2]);
              else if (/^(17|82)$/.test(t)) e[t] = 0;
            else {
              var a = new Promise((r, a) => n = e[t] = [r, a]);
              r.push(n[2] = a);
              var o = l.p + l.u(t),
                i = new Error;
              l.l(o, r => {
                if (l.o(e, t) && (0 !== (n = e[t]) && (e[t] = void 0), n)) {
                  var a = r && ("load" === r.type ? "missing" : r.type),
                    o = r && r.target && r.target.src;
                  i.message = "Loading chunk " + t + " failed.\n(" + a + ": " + o + ")", i.name = "ChunkLoadError", i.type = a, i.request = o, n[1](i)
                }
              }, "chunk-" + t, t)
            }
          };
          var t = (t, r) => {
              var n, a, [o, i, s] = r,
                f = 0;
              if (o.some(t => 0 !== e[t])) {
                for (n in i) l.o(i, n) && (l.m[n] = i[n]);
                s && s(l)
              }
              for (t && t(r); f < o.length; f++) a = o[f], l.o(e, a) && e[a] && e[a][0](), e[a] = 0
            },
            r = self.webpackChunk_rockstargames_sites_gta_trilogy = self.webpackChunk_rockstargames_sites_gta_trilogy || [];
          r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
        })(), l(5649), l(5819)
      })())
    }
  }
});