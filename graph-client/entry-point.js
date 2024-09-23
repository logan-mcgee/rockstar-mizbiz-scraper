! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "3e458840-5e2a-4a2b-a56b-20208364e82b", e._sentryDebugIdIdentifier = "sentry-dbid-3e458840-5e2a-4a2b-a56b-20208364e82b")
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
          s = {};

        function d(e) {
          var t = s[e];
          if (void 0 !== t) return t.exports;
          var r = s[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return f[e].call(r.exports, r, r.exports, d), r.loaded = !0, r.exports
        }
        return d.m = f, d.c = s, d.y = t, d.n = e => {
          var t = e && e.__esModule ? () => e.default : () => e;
          return d.d(t, {
            a: t
          }), t
        }, r = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, d.t = function(t, a) {
          if (1 & a && (t = this(t)), 8 & a) return t;
          if ("object" == typeof t && t) {
            if (4 & a && t.__esModule) return t;
            if (16 & a && "function" == typeof t.then) return t
          }
          var n = Object.create(null);
          d.r(n);
          var o = {};
          e = e || [null, r({}), r([]), r(r)];
          for (var i = 2 & a && t;
            "object" == typeof i && !~e.indexOf(i); i = r(i)) Object.getOwnPropertyNames(i).forEach((e => o[e] = () => t[e]));
          return o.default = () => t, d.d(n, o), n
        }, d.d = (e, t) => {
          for (var r in t) d.o(t, r) && !d.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: t[r]
          })
        }, d.f = {}, d.e = e => Promise.all(Object.keys(d.f).reduce(((t, r) => (d.f[r](e, t), t)), [])), d.u = e => "js/" + {
          4: "74b4660ad8f7eb90c92163fe638fea91",
          108: "b166f5ef6697ccf20304318bfc8dfa1a",
          110: "b3ea34bb174e9d58d6fdb2f3e5f5880d",
          264: "2fc4cd7057d36c801c634579f28e22e0",
          318: "9281b3a9a40f579ad88c1b1c116a4cc1",
          362: "1f2a5ea770388d2d5f24d78c5d029710",
          369: "a0d90f6909f48a35e0ff1cdd45d07f76",
          380: "033a6bda12e0763eb631ffe9da8b813b",
          403: "8be960dd568cafa6d097d7c27483390e",
          429: "219a868880465b3fc7305d33ff15b8f2",
          533: "784223d24a19f7688b47bed03ca6946d",
          540: "d97b4f0dd17b5fd24ac37271957ede28",
          562: "31eeec876eda576235f1eb7004a32350",
          651: "6e2e4bb29515dd4519b05b023eb920a6",
          681: "314f03ecc47046123b6970025e5f2bb6",
          746: "6ec2eda418e819bdd42cd7e8e3c44283",
          793: "eaf41b4704a0d843ba9db12b0f150a93",
          818: "f59e34d5c869a9a71fa06e0e52d29eab",
          870: "a528bc7f114ae0affaf605c598112dda",
          881: "55e331048632f5b53b8ee4075fd148f4",
          930: "a8a9ba191a2de3d7e31c51a02f3130ae",
          961: "dbcb4a859b23e3bf61dc1928b0d52912"
        } [e] + ".js", d.miniCssF = e => {}, d.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), d.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), a = {}, n = "@rockstargames/graph-client:", d.l = (e, t, r, o) => {
          if (a[e]) a[e].push(t);
          else {
            var i, f;
            if (void 0 !== r)
              for (var s = document.getElementsByTagName("script"), l = 0; l < s.length; l++) {
                var c = s[l];
                if (c.getAttribute("src") == e || c.getAttribute("data-webpack") == n + r) {
                  i = c;
                  break
                }
              }
            i || (f = !0, (i = document.createElement("script")).charset = "utf-8", i.timeout = 120, d.nc && i.setAttribute("nonce", d.nc), i.setAttribute("data-webpack", n + r), i.src = e), a[e] = [t];
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
        }, d.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, d.nmd = e => (e.paths = [], e.children || (e.children = []), e), o = {}, i = {}, d.f.remotes = (e, t) => {
          d.o(o, e) && o[e].forEach((e => {
            var r = d.R;
            r || (r = []);
            var a = i[e];
            if (!(r.indexOf(a) >= 0)) {
              if (r.push(a), a.p) return t.push(a.p);
              var n = t => {
                  t || (t = new Error("Container missing")), "string" == typeof t.message && (t.message += '\nwhile loading "' + a[1] + '" from ' + a[2]), d.m[e] = () => {
                    throw t
                  }, a.p = 0
                },
                o = (e, r, o, i, f, s) => {
                  try {
                    var d = e(r, o);
                    if (!d || !d.then) return f(d, i, s);
                    var l = d.then((e => f(e, i)), n);
                    if (!s) return l;
                    t.push(a.p = l)
                  } catch (e) {
                    n(e)
                  }
                },
                f = (e, t, n) => o(t.get, a[1], r, 0, s, n),
                s = t => {
                  a.p = 1, d.m[e] = e => {
                    e.exports = t()
                  }
                };
              o(d, a[2], 0, 0, ((e, t, r) => e ? o(d.I, a[0], 0, e, f, r) : n()), 1)
            }
          }))
        }, (() => {
          d.S = {};
          var e = {},
            t = {};
          d.I = (r, a) => {
            a || (a = []);
            var n = t[r];
            if (n || (n = t[r] = {}), !(a.indexOf(n) >= 0)) {
              if (a.push(n), e[r]) return e[r];
              d.o(d.S, r) || (d.S[r] = {});
              var o = d.S[r],
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
                s = [];
              return "default" === r && (f("@apollo/client", "3.7.17", (() => Promise.all([d.e(540), d.e(881), d.e(403)]).then((() => () => d(6881))))), f("cross-fetch", "3.1.8", (() => d.e(793).then((() => () => d(8793))))), f("crypto-hash", "2.0.1", (() => d.e(961).then((() => () => d(9961))))), f("lodash", "4.17.21", (() => d.e(429).then((() => () => d(9429))))), f("react-dom", "18.2.0", (() => Promise.all([d.e(533), d.e(403)]).then((() => () => d(7533))))), f("react", "18.2.0", (() => d.e(380).then((() => () => d(3380)))))), e[r] = s.length ? Promise.all(s).then((() => e[r] = 1)) : 1
            }
          }
        })(), (() => {
          var e;
          d.g.importScripts && (e = d.g.location + "");
          var t = d.g.document;
          if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
            var r = t.getElementsByTagName("script");
            if (r.length)
              for (var a = r.length - 1; a > -1 && (!e || !/^http(s?):/.test(e));) e = r[a--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), d.p = e
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
                for (var i = 0, f = 1, s = !0;; f++, i++) {
                  var d, l, c = f < r.length ? (typeof r[f])[0] : "";
                  if (i >= a.length || "o" == (l = (typeof(d = a[i]))[0])) return !s || ("u" == c ? f > n && !o : "" == c != o);
                  if ("u" == l) {
                    if (!s || "u" != c) return !1
                  } else if (s)
                    if (c == l)
                      if (f <= n) {
                        if (d != r[f]) return !1
                      } else {
                        if (o ? d > r[f] : d < r[f]) return !1;
                        d != r[f] && (s = !1)
                      }
                  else if ("s" != c && "n" != c) {
                    if (o || f <= n) return !1;
                    s = !1, f--
                  } else {
                    if (f <= n || l < c != o) return !1;
                    s = !1
                  } else "s" != c && "n" != c && (s = !1, f--)
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
              var o = d.I(t);
              return o && o.then ? o.then(e.bind(e, t, d.S[t], r, a, n)) : e(t, d.S[t], r, a, n)
            })(((e, t, a, n, o) => {
              var i = t && d.o(t, a) && r(t, a, n);
              return i ? (e => (e.loaded = 1, e.get()))(i) : o()
            })),
            n = {},
            o = {
              1403: () => a("default", "react", [1, 18, 2, 0], (() => d.e(380).then((() => () => d(3380))))),
              7264: () => a("default", "@apollo/client", [2, 3, 7], (() => Promise.all([d.e(540), d.e(881), d.e(403)]).then((() => () => d(6881))))),
              4252: () => a("default", "lodash", [1, 4, 17, 21], (() => d.e(429).then((() => () => d(9429))))),
              4686: () => a("default", "crypto-hash", [1, 2, 0, 1], (() => d.e(961).then((() => () => d(9961))))),
              7124: () => a("default", "cross-fetch", [1, 3, 1, 5], (() => d.e(793).then((() => () => d(8793))))),
              9493: () => a("default", "react-dom", [1, 18, 2, 0], (() => d.e(533).then((() => () => d(7533)))))
            },
            i = {
              264: [7264],
              403: [1403],
              870: [4252, 4686, 7124],
              930: [9493]
            },
            f = {};
          d.f.consumes = (e, t) => {
            d.o(i, e) && i[e].forEach((e => {
              if (d.o(n, e)) return t.push(n[e]);
              if (!f[e]) {
                var r = t => {
                  n[e] = 0, d.m[e] = r => {
                    delete d.c[e], r.exports = t()
                  }
                };
                f[e] = !0;
                var a = t => {
                  delete n[e], d.m[e] = r => {
                    throw delete d.c[e], t
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
          d.f.j = (t, r) => {
            var a = d.o(e, t) ? e[t] : void 0;
            if (0 !== a)
              if (a) r.push(a[2]);
              else if (/^(264|403|870)$/.test(t)) e[t] = 0;
            else {
              var n = new Promise(((r, n) => a = e[t] = [r, n]));
              r.push(a[2] = n);
              var o = d.p + d.u(t),
                i = new Error;
              d.l(o, (r => {
                if (d.o(e, t) && (0 !== (a = e[t]) && (e[t] = void 0), a)) {
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
                s = 0;
              if (o.some((t => 0 !== e[t]))) {
                for (a in i) d.o(i, a) && (d.m[a] = i[a]);
                f && f(d)
              }
              for (t && t(r); s < o.length; s++) n = o[s], d.o(e, n) && e[n] && e[n][0](), e[n] = 0
            },
            r = self.webpackChunk_rockstargames_graph_client = self.webpackChunk_rockstargames_graph_client || [];
          r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
        })(), d(2160), d(5882)
      })())
    }
  }
}));