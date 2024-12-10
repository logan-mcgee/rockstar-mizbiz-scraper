! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "73a2fb45-e66e-41a0-b089-31146bede720", e._sentryDebugIdIdentifier = "sentry-dbid-73a2fb45-e66e-41a0-b089-31146bede720")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/graph-client",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register([], (function(e, t) {
  return {
    execute: function() {
      e((() => {
        var e, r, a, n, o, i, f = {
            6539: (e, t, r) => {
              (0, r(3403).w)(1)
            },
            3403: (e, t, r) => {
              const a = r(5659).y;
              t.w = function(e) {
                if (e || (e = 1), !r.y.meta || !r.y.meta.url) throw console.error("__system_context__", r.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                r.p = a(r.y.meta.url, e)
              }
            },
            2160: (e, t, r) => {
              r(6539)
            },
            5659: (e, t, r) => {
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
            5882: (e, t, r) => {
              "use strict";
              var a = {
                  "./bootstrap": () => r.e(362).then((() => () => r(7362))),
                  "./index": () => Promise.all([r.e(540), r.e(403), r.e(264), r.e(870), r.e(4)]).then((() => () => r(6710))),
                  "./operations/fragments/": () => r.e(369).then((() => () => r(1369))),
                  "./operations/fragments/newswire-post.graphql": () => r.e(818).then((() => () => r(4818))),
                  "./operations/fragments/paging.graphql": () => r.e(651).then((() => () => r(2651))),
                  "./operations/fragments/video-fields.graphql": () => r.e(562).then((() => () => r(4562))),
                  "./operations/fragments/video2-fields.graphql": () => r.e(746).then((() => () => r(9746))),
                  "./operations/queries": () => r.e(681).then((() => () => r(7681))),
                  "./operations/queries/videos.graphql": () => r.e(318).then((() => () => r(318))),
                  "./operations/queries/videos2.graphql": () => r.e(110).then((() => () => r(9110))),
                  "./reactive": () => Promise.all([r.e(264), r.e(108)]).then((() => () => r(3108)))
                },
                n = (e, t) => (r.R = t, t = r.o(a, e) ? a[e]() : Promise.resolve().then((() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                })), r.R = void 0, t),
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
            }
          },
          d = {};

        function s(e) {
          var t = d[e];
          if (void 0 !== t) return t.exports;
          var r = d[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return f[e].call(r.exports, r, r.exports, s), r.loaded = !0, r.exports
        }
        return s.m = f, s.c = d, s.y = t, s.n = e => {
          var t = e && e.__esModule ? () => e.default : () => e;
          return s.d(t, {
            a: t
          }), t
        }, r = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, s.t = function(t, a) {
          if (1 & a && (t = this(t)), 8 & a) return t;
          if ("object" == typeof t && t) {
            if (4 & a && t.__esModule) return t;
            if (16 & a && "function" == typeof t.then) return t
          }
          var n = Object.create(null);
          s.r(n);
          var o = {};
          e = e || [null, r({}), r([]), r(r)];
          for (var i = 2 & a && t;
            "object" == typeof i && !~e.indexOf(i); i = r(i)) Object.getOwnPropertyNames(i).forEach((e => o[e] = () => t[e]));
          return o.default = () => t, s.d(n, o), n
        }, s.d = (e, t) => {
          for (var r in t) s.o(t, r) && !s.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: t[r]
          })
        }, s.f = {}, s.e = e => Promise.all(Object.keys(s.f).reduce(((t, r) => (s.f[r](e, t), t)), [])), s.u = e => "js/" + {
          4: "1bbd3f28e8b409a2bbebc5f8f71f7b6d",
          108: "31468e09295be63aa518241ac29c59a3",
          110: "393a0eac90615e718bdcfab8e21012aa",
          264: "2fc4cd7057d36c801c634579f28e22e0",
          318: "5b82b0ac321f761006644638fb4dbf24",
          362: "9aaf994b688c0ec24d44f8397b7a189a",
          369: "cd44876eac90a3d38df1785f36bdf769",
          380: "ed9cdb4b23b09b4e00fea1b4029e70b5",
          403: "8be960dd568cafa6d097d7c27483390e",
          429: "939d94d776f51a6eeb4c8d44064a0f12",
          533: "9b3ba47978b0067f53cfeb60b9f22830",
          540: "6f05bfe2c2735acb8a8e120bfce395fc",
          562: "be97547ee30d4cb8d5cf78daf905031b",
          651: "603f186196e94b7b749c96ebeb3e64c6",
          681: "8bb0346f716a59df2d4805a2c3256f52",
          746: "ced0d96cf2367b460377c5731eb359d0",
          793: "ef0c318516ab728cf9b61bc6a84e887d",
          818: "cb0e5807f089fa299808b1c148ea503e",
          870: "a528bc7f114ae0affaf605c598112dda",
          881: "667de378ac93eb75c0b8db92b81d692d",
          930: "dd281eba80536218a3c9ac5a413b056e",
          961: "21c3d746c7cf20fd899950931e80d2d8"
        } [e] + ".js", s.miniCssF = e => {}, s.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), s.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), a = {}, n = "@rockstargames/graph-client:", s.l = (e, t, r, o) => {
          if (a[e]) a[e].push(t);
          else {
            var i, f;
            if (void 0 !== r)
              for (var d = document.getElementsByTagName("script"), c = 0; c < d.length; c++) {
                var l = d[c];
                if (l.getAttribute("src") == e || l.getAttribute("data-webpack") == n + r) {
                  i = l;
                  break
                }
              }
            i || (f = !0, (i = document.createElement("script")).charset = "utf-8", i.timeout = 120, s.nc && i.setAttribute("nonce", s.nc), i.setAttribute("data-webpack", n + r), i.src = e), a[e] = [t];
            var u = (t, r) => {
                i.onerror = i.onload = null, clearTimeout(p);
                var n = a[e];
                if (delete a[e], i.parentNode && i.parentNode.removeChild(i), n && n.forEach((e => e(r))), t) return t(r)
              },
              p = setTimeout(u.bind(null, void 0, {
                type: "timeout",
                target: i
              }), 12e4);
            i.onerror = u.bind(null, i.onerror), i.onload = u.bind(null, i.onload), f && document.head.appendChild(i)
          }
        }, s.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, s.nmd = e => (e.paths = [], e.children || (e.children = []), e), o = {}, i = {}, s.f.remotes = (e, t) => {
          s.o(o, e) && o[e].forEach((e => {
            var r = s.R;
            r || (r = []);
            var a = i[e];
            if (!(r.indexOf(a) >= 0)) {
              if (r.push(a), a.p) return t.push(a.p);
              var n = t => {
                  t || (t = new Error("Container missing")), "string" == typeof t.message && (t.message += '\nwhile loading "' + a[1] + '" from ' + a[2]), s.m[e] = () => {
                    throw t
                  }, a.p = 0
                },
                o = (e, r, o, i, f, d) => {
                  try {
                    var s = e(r, o);
                    if (!s || !s.then) return f(s, i, d);
                    var c = s.then((e => f(e, i)), n);
                    if (!d) return c;
                    t.push(a.p = c)
                  } catch (e) {
                    n(e)
                  }
                },
                f = (e, t, n) => o(t.get, a[1], r, 0, d, n),
                d = t => {
                  a.p = 1, s.m[e] = e => {
                    e.exports = t()
                  }
                };
              o(s, a[2], 0, 0, ((e, t, r) => e ? o(s.I, a[0], 0, e, f, r) : n()), 1)
            }
          }))
        }, (() => {
          s.S = {};
          var e = {},
            t = {};
          s.I = (r, a) => {
            a || (a = []);
            var n = t[r];
            if (n || (n = t[r] = {}), !(a.indexOf(n) >= 0)) {
              if (a.push(n), e[r]) return e[r];
              s.o(s.S, r) || (s.S[r] = {});
              var o = s.S[r],
                i = "@rockstargames/graph-client",
                f = (e, t, r, a) => {
                  var n = o[e] = o[e] || {},
                    f = n[t];
                  (!f || !f.loaded && (!a != !f.eager ? a : i > f.from)) && (n[t] = {
                    get: r,
                    from: i,
                    eager: !!a
                  })
                },
                d = [];
              return "default" === r && (f("@apollo/client", "3.7.17", (() => Promise.all([s.e(540), s.e(881), s.e(403)]).then((() => () => s(6881))))), f("cross-fetch", "3.1.8", (() => s.e(793).then((() => () => s(8793))))), f("crypto-hash", "2.0.1", (() => s.e(961).then((() => () => s(9961))))), f("lodash", "4.17.21", (() => s.e(429).then((() => () => s(9429))))), f("react-dom", "18.2.0", (() => Promise.all([s.e(533), s.e(403)]).then((() => () => s(7533))))), f("react", "18.2.0", (() => s.e(380).then((() => () => s(3380)))))), e[r] = d.length ? Promise.all(d).then((() => e[r] = 1)) : 1
            }
          }
        })(), (() => {
          var e;
          s.g.importScripts && (e = s.g.location + "");
          var t = s.g.document;
          if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
            var r = t.getElementsByTagName("script");
            if (r.length)
              for (var a = r.length - 1; a > -1 && (!e || !/^http(s?):/.test(e));) e = r[a--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), s.p = e
        })(), (() => {
          var e = e => {
              var t = e => e.split(".").map((e => +e == e ? +e : e)),
                r = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
                a = r[1] ? t(r[1]) : [];
              return r[2] && (a.length++, a.push.apply(a, t(r[2]))), r[3] && (a.push([]), a.push.apply(a, t(r[3]))), a
            },
            t = (r, a) => {
              if (0 in r) {
                a = e(a);
                var n = r[0],
                  o = n < 0;
                o && (n = -n - 1);
                for (var i = 0, f = 1, d = !0;; f++, i++) {
                  var s, c, l = f < r.length ? (typeof r[f])[0] : "";
                  if (i >= a.length || "o" == (c = (typeof(s = a[i]))[0])) return !d || ("u" == l ? f > n && !o : "" == l != o);
                  if ("u" == c) {
                    if (!d || "u" != l) return !1
                  } else if (d)
                    if (l == c)
                      if (f <= n) {
                        if (s != r[f]) return !1
                      } else {
                        if (o ? s > r[f] : s < r[f]) return !1;
                        s != r[f] && (d = !1)
                      }
                  else if ("s" != l && "n" != l) {
                    if (o || f <= n) return !1;
                    d = !1, f--
                  } else {
                    if (f <= n || c < l != o) return !1;
                    d = !1
                  } else "s" != l && "n" != l && (d = !1, f--)
                }
              }
              var u = [],
                p = u.pop.bind(u);
              for (i = 1; i < r.length; i++) {
                var h = r[i];
                u.push(1 == h ? p() | p() : 2 == h ? p() & p() : h ? t(h, a) : !p())
              }
              return !!p()
            },
            r = (r, a, n) => {
              var o = r[a];
              return (a = Object.keys(o).reduce(((r, a) => !t(n, a) || r && !((t, r) => {
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
              })(r, a) ? r : a), 0)) && o[a]
            },
            a = (e => function(t, r, a, n) {
              var o = s.I(t);
              return o && o.then ? o.then(e.bind(e, t, s.S[t], r, a, n)) : e(t, s.S[t], r, a, n)
            })(((e, t, a, n, o) => {
              var i = t && s.o(t, a) && r(t, a, n);
              return i ? (e => (e.loaded = 1, e.get()))(i) : o()
            })),
            n = {},
            o = {
              1403: () => a("default", "react", [1, 18, 2, 0], (() => s.e(380).then((() => () => s(3380))))),
              7264: () => a("default", "@apollo/client", [2, 3, 7], (() => Promise.all([s.e(540), s.e(881), s.e(403)]).then((() => () => s(6881))))),
              4252: () => a("default", "lodash", [1, 4, 17, 21], (() => s.e(429).then((() => () => s(9429))))),
              4686: () => a("default", "crypto-hash", [1, 2, 0, 1], (() => s.e(961).then((() => () => s(9961))))),
              7124: () => a("default", "cross-fetch", [1, 3, 1, 5], (() => s.e(793).then((() => () => s(8793))))),
              9493: () => a("default", "react-dom", [1, 18, 2, 0], (() => s.e(533).then((() => () => s(7533)))))
            },
            i = {
              264: [7264],
              403: [1403],
              870: [4252, 4686, 7124],
              930: [9493]
            },
            f = {};
          s.f.consumes = (e, t) => {
            s.o(i, e) && i[e].forEach((e => {
              if (s.o(n, e)) return t.push(n[e]);
              if (!f[e]) {
                var r = t => {
                  n[e] = 0, s.m[e] = r => {
                    delete s.c[e], r.exports = t()
                  }
                };
                f[e] = !0;
                var a = t => {
                  delete n[e], s.m[e] = r => {
                    throw delete s.c[e], t
                  }
                };
                try {
                  var i = o[e]();
                  i.then ? t.push(n[e] = i.then(r).catch(a)) : r(i)
                } catch (e) {
                  a(e)
                }
              }
            }))
          }
        })(), (() => {
          var e = {
            134: 0
          };
          s.f.j = (t, r) => {
            var a = s.o(e, t) ? e[t] : void 0;
            if (0 !== a)
              if (a) r.push(a[2]);
              else if (/^(264|403|870)$/.test(t)) e[t] = 0;
            else {
              var n = new Promise(((r, n) => a = e[t] = [r, n]));
              r.push(a[2] = n);
              var o = s.p + s.u(t),
                i = new Error;
              s.l(o, (r => {
                if (s.o(e, t) && (0 !== (a = e[t]) && (e[t] = void 0), a)) {
                  var n = r && ("load" === r.type ? "missing" : r.type),
                    o = r && r.target && r.target.src;
                  i.message = "Loading chunk " + t + " failed.\n(" + n + ": " + o + ")", i.name = "ChunkLoadError", i.type = n, i.request = o, a[1](i)
                }
              }), "chunk-" + t, t)
            }
          };
          var t = (t, r) => {
              var a, n, o = r[0],
                i = r[1],
                f = r[2],
                d = 0;
              if (o.some((t => 0 !== e[t]))) {
                for (a in i) s.o(i, a) && (s.m[a] = i[a]);
                f && f(s)
              }
              for (t && t(r); d < o.length; d++) n = o[d], s.o(e, n) && e[n] && e[n][0](), e[n] = 0
            },
            r = self.webpackChunk_rockstargames_graph_client = self.webpackChunk_rockstargames_graph_client || [];
          r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
        })(), s(2160), s(5882)
      })())
    }
  }
}));