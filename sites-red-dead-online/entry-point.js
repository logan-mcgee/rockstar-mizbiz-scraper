try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "8b4123a0-6f95-42d3-989a-4a42a1b159c2", e._sentryDebugIdIdentifier = "sentry-dbid-8b4123a0-6f95-42d3-989a-4a42a1b159c2")
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
    a = {};
  return Object.defineProperty(r, "__esModule", {
    value: !0
  }), Object.defineProperty(a, "__esModule", {
    value: !0
  }), {
    setters: [function(e) {
      r.default = e.default || e, Object.keys(e).forEach(function(t) {
        r[t] = e[t]
      })
    }, function(e) {
      a.default = e.default || e, Object.keys(e).forEach(function(t) {
        a[t] = e[t]
      })
    }],
    execute: function() {
      e((() => {
        var e, n, o, d, f, i, c = {
            20154(e, t, r) {
              (0, r(89160).w)(1)
            },
            89160(e, t, r) {
              const a = r(51908).y;
              t.w = function(e) {
                if (e || (e = 1), !r.y.meta || !r.y.meta.url) throw console.error("__system_context__", r.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                r.p = a(r.y.meta.url, e)
              }
            },
            35649(e, t, r) {
              r(20154)
            },
            51908(e, t, r) {
              t.y = function(e, t) {
                var r = document.createElement("a");
                r.href = e;
                for (var a = "/" === r.pathname[0] ? r.pathname : "/" + r.pathname, n = 0, o = a.length; n !== t && o >= 0;) "/" === a[--o] && n++;
                if (n !== t) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + t + ") is greater than the number of directories (" + n + ") in the URL path " + e);
                var d = a.slice(0, o + 1);
                return r.protocol + "//" + r.host + d
              };
              Number.isInteger
            },
            82021(e, t, r) {
              "use strict";
              var a = {
                  "./index": () => Promise.all([r.e(207), r.e(95), r.e(174), r.e(958), r.e(82), r.e(17), r.e(997), r.e(600), r.e(762)]).then(() => () => r(1762))
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
            66819(e) {
              "use strict";
              e.exports = r
            },
            25136(e) {
              "use strict";
              e.exports = a
            }
          },
          s = {};

        function l(e) {
          var t = s[e];
          if (void 0 !== t) return t.exports;
          var r = s[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return c[e].call(r.exports, r, r.exports, l), r.loaded = !0, r.exports
        }
        return l.m = c, l.c = s, l.y = t, l.amdO = {}, l.n = e => {
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
          for (var d = 2 & r && t;
            ("object" == typeof d || "function" == typeof d) && !~e.indexOf(d); d = n(d)) Object.getOwnPropertyNames(d).forEach(e => o[e] = () => t[e]);
          return o.default = () => t, l.d(a, o), a
        }, l.d = (e, t) => {
          for (var r in t) l.o(t, r) && !l.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: t[r]
          })
        }, l.f = {}, l.e = e => Promise.all(Object.keys(l.f).reduce((t, r) => (l.f[r](e, t), t), [])), l.u = e => "js/" + {
          32: "a85cc99e442e855145d59be95599aa72",
          62: "d1c9ffe01f3c772ea33ddb9eb4dc5549",
          95: "74657e1a82a6641c5cd81b20768988a4",
          109: "2203d5048258ecad4102a15cd1a1fd0f",
          145: "111951d312410e46234ec16311bb8bbb",
          162: "802dad6e081a68a5e41f955e85c92044",
          171: "4fa73b00e2a26250f37dd5041203b371",
          174: "4c66e8d8ed0da0a38ee63e7ca1a26487",
          207: "fcbdf95fb45ef1334e58d607677fff25",
          221: "f89f1b38ba03796b32fa448ac118f4e2",
          225: "50767096ef0c8fab8debadd515d8cc23",
          269: "2d9019e2d634e0d771584c181909f44e",
          298: "8a3a320be9fe258a4f6a4fc420e84311",
          316: "67cdf2816ff8fe5e4af2b04c509565f3",
          331: "e3ce0abf5bd8c42e97f8d823c9d4f1c6",
          338: "9e6f7735ab8447948524ed1033a69489",
          367: "dde21357508e6360c6b609d4b0d93d2e",
          378: "5e554aeca139a7ddf2f754f59208e957",
          404: "574bb2583eaa83d79bc6855fe4a36eee",
          406: "522b47a75c3a25fc26fd9b5d2193a160",
          447: "bc11535ef617ed66bc306b835aea41c4",
          514: "0d78c90dc00d0369bc6ea30c480858ad",
          581: "b8c70971488130290480c0da2f0bbba6",
          597: "a2de15421a4eda79d56640f3fe6d7c76",
          600: "bd035b740c223fb59fcd101b96f63e9c",
          602: "08980faeb27c573a2092c120352528c1",
          617: "dd605d50fd56214bc805f2211598bc80",
          649: "20e969c5c25b17f46406ac9b315173fc",
          669: "6c63e2b2bbd2a675396ebf786628ee79",
          762: "0358323c4f3e081dcad1b82ea8e45852",
          921: "42b69b7e176debd58e2b83868b29eb9e",
          924: "63d1e1ea20da772e246a7672e03687ad",
          951: "352ebd57dc33bab499cc703d985c7b4d",
          958: "56f3d7e27549f4b6ef48642bf418f2db",
          959: "a2c995e38ba5902a4fcc5f9821539bb7",
          997: "97306a90171a385cbe41c582978f287f"
        } [e] + ".js", l.miniCssF = e => "css/" + {
          225: "374ad48d9bf6f6b61a3da48391a4dbfd",
          669: "859ff60d203649276b2b1da4dc5ade79",
          762: "080afbba1983fa9fc844b38852ed32f6"
        } [e] + ".css", l.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), l.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), o = {}, d = "@rockstargames/sites-red-dead-online:", l.l = (e, t, r, a) => {
          if (o[e]) o[e].push(t);
          else {
            var n, f;
            if (void 0 !== r)
              for (var i = document.getElementsByTagName("script"), c = 0; c < i.length; c++) {
                var s = i[c];
                if (s.getAttribute("src") == e || s.getAttribute("data-webpack") == d + r) {
                  n = s;
                  break
                }
              }
            n || (f = !0, (n = document.createElement("script")).charset = "utf-8", l.nc && n.setAttribute("nonce", l.nc), n.setAttribute("data-webpack", d + r), n.src = e), o[e] = [t];
            var u = (t, r) => {
                n.onerror = n.onload = null, clearTimeout(b);
                var a = o[e];
                if (delete o[e], n.parentNode && n.parentNode.removeChild(n), a && a.forEach(e => e(r)), t) return t(r)
              },
              b = setTimeout(u.bind(null, void 0, {
                type: "timeout",
                target: n
              }), 12e4);
            n.onerror = u.bind(null, n.onerror), n.onload = u.bind(null, n.onload), f && document.head.appendChild(n)
          }
        }, l.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, l.nmd = e => (e.paths = [], e.children || (e.children = []), e), f = {
          762: [9566, 31879]
        }, i = {
          9566: ["default", "./index", 66819],
          31879: ["default", "./index", 25136]
        }, l.f.remotes = (e, t) => {
          l.o(f, e) && f[e].forEach(e => {
            var r = l.R;
            r || (r = []);
            var a = i[e];
            if (!(r.indexOf(a) >= 0)) {
              if (r.push(a), a.p) return t.push(a.p);
              var n = t => {
                  t || (t = new Error("Container missing")), "string" == typeof t.message && (t.message += '\nwhile loading "' + a[1] + '" from ' + a[2]), l.m[e] = () => {
                    throw t
                  }, a.p = 0
                },
                o = (e, r, o, d, f, i) => {
                  try {
                    var c = e(r, o);
                    if (!c || !c.then) return f(c, d, i);
                    var s = c.then(e => f(e, d), n);
                    if (!i) return s;
                    t.push(a.p = s)
                  } catch (e) {
                    n(e)
                  }
                },
                d = (e, t, n) => o(t.get, a[1], r, 0, f, n),
                f = t => {
                  a.p = 1, l.m[e] = e => {
                    e.exports = t()
                  }
                };
              o(l, a[2], 0, 0, (e, t, r) => e ? o(l.I, a[0], 0, e, d, r) : n(), 1)
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
                d = "@rockstargames/sites-red-dead-online",
                f = (e, t, r, a) => {
                  var n = o[e] = o[e] || {},
                    f = n[t];
                  (!f || !f.loaded && (!a != !f.eager ? a : d > f.from)) && (n[t] = {
                    get: r,
                    from: d,
                    eager: !!a
                  })
                },
                i = e => {
                  var t = e => {
                    return t = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(t));
                    var t
                  };
                  try {
                    var n = l(e);
                    if (!n) return;
                    var o = e => e && e.init && e.init(l.S[r], a);
                    if (n.then) return c.push(n.then(o, t));
                    var d = o(n);
                    if (d && d.then) return c.push(d.catch(t))
                  } catch (e) {
                    t(e)
                  }
                },
                c = [];
              return "default" === r && (f("@rsgweb/locale-tools", "0.0.0", () => Promise.all([l.e(338), l.e(145), l.e(207), l.e(959), l.e(82), l.e(602)]).then(() => () => l(76602))), f("@rsgweb/modules-core-feedback", "0.0.0", () => Promise.all([l.e(338), l.e(207), l.e(95), l.e(225), l.e(174), l.e(82), l.e(17), l.e(997), l.e(669), l.e(600)]).then(() => () => l(66669))), f("@rsgweb/utils", "0.0.0-development", () => Promise.all([l.e(145), l.e(207), l.e(95), l.e(378), l.e(82), l.e(997), l.e(597)]).then(() => () => l(60597))), f("clsx", "2.1.1", () => l.e(921).then(() => () => l(4921))), f("date-fns", "4.1.0", () => l.e(951).then(() => () => l(26951))), f("focus-trap-react", "10.3.1", () => Promise.all([l.e(514), l.e(82), l.e(653)]).then(() => () => l(44514))), f("prop-types", "15.8.1", () => l.e(331).then(() => () => l(60331))), f("react-dom", "18.3.1", () => Promise.all([l.e(162), l.e(82)]).then(() => () => l(30162))), f("react-router-dom", "6.30.3", () => Promise.all([l.e(269), l.e(82), l.e(17)]).then(() => () => l(74269))), f("react", "18.3.1", () => l.e(581).then(() => () => l(22581))), i(66819), i(25136)), c.length ? e[r] = Promise.all(c).then(() => e[r] = 1) : e[r] = 1
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
              var d = [];
              for (o = 1; o < e.length; o++) {
                var f = e[o];
                d.push(0 === f ? "not(" + i() + ")" : 1 === f ? "(" + i() + " || " + i() + ")" : 2 === f ? d.pop() + " " + d.pop() : t(f))
              }
              return i();

              function i() {
                return d.pop().replace(/^\((.+)\)$/, "$1")
              }
            },
            r = (t, a) => {
              if (0 in t) {
                a = e(a);
                var n = t[0],
                  o = n < 0;
                o && (n = -n - 1);
                for (var d = 0, f = 1, i = !0;; f++, d++) {
                  var c, s, l = f < t.length ? (typeof t[f])[0] : "";
                  if (d >= a.length || "o" == (s = (typeof(c = a[d]))[0])) return !i || ("u" == l ? f > n && !o : "" == l != o);
                  if ("u" == s) {
                    if (!i || "u" != l) return !1
                  } else if (i)
                    if (l == s)
                      if (f <= n) {
                        if (c != t[f]) return !1
                      } else {
                        if (o ? c > t[f] : c < t[f]) return !1;
                        c != t[f] && (i = !1)
                      }
                  else if ("s" != l && "n" != l) {
                    if (o || f <= n) return !1;
                    i = !1, f--
                  } else {
                    if (f <= n || s < l != o) return !1;
                    i = !1
                  } else "s" != l && "n" != l && (i = !1, f--)
                }
              }
              var u = [],
                b = u.pop.bind(u);
              for (d = 1; d < t.length; d++) {
                var p = t[d];
                u.push(1 == p ? b() | b() : 2 == p ? b() & b() : p ? r(p, a) : !b())
              }
              return !!b()
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
                  var d = r[a],
                    f = (typeof d)[0];
                  if (o != f) return "o" == o && "n" == f || "s" == f || "u" == o;
                  if ("o" != o && "u" != o && n != d) return n < d;
                  a++
                }
              })(t, r) ? r : t, 0)
            },
            n = (e, t, r) => r ? r() : ((e, t) => (e => {
              throw new Error(e)
            })("Shared module " + t + " doesn't exist in shared scope " + e))(e, t),
            o = (e => function(t, r, a, n, o) {
              var d = l.I(t);
              return d && d.then && !a ? d.then(e.bind(e, t, l.S[t], r, !1, n, o)) : e(t, l.S[t], r, a, n, o)
            })((e, o, d, f, i, c) => {
              if (!((e, t) => e && l.o(e, t))(o, d)) return n(e, d, c);
              var s, u, b = a(o, d, f);
              return r(i, b) || (u = ((e, r, a, n) => "Unsatisfied version " + a + " from " + (a && e[r][a].from) + " of shared singleton module " + r + " (required " + t(n) + ")")(o, d, b, i), "undefined" != typeof console && console.warn && console.warn(u)), (s = o[d][b]).loaded = 1, s.get()
            }),
            d = {},
            f = {
              93082: () => o("default", "react", !1, [0], () => l.e(581).then(() => () => l(22581))),
              84017: () => o("default", "react-dom", !1, [1, 18, 2, 0], () => l.e(162).then(() => () => l(30162))),
              36416: () => o("default", "react-router-dom", !1, [0], () => Promise.all([l.e(269), l.e(17)]).then(() => () => l(74269))),
              42909: () => o("default", "@rsgweb/locale-tools", !1, [0], () => Promise.all([l.e(338), l.e(145), l.e(959), l.e(221)]).then(() => () => l(76602))),
              1896: () => o("default", "date-fns", !1, [1, 4, 1, 0], () => l.e(951).then(() => () => l(26951))),
              13331: () => o("default", "@rsgweb/utils", !1, [0], () => Promise.all([l.e(145), l.e(378), l.e(597)]).then(() => () => l(60597))),
              81270: () => o("default", "clsx", !1, [1, 2, 1, 1], () => l.e(921).then(() => () => l(4921))),
              56263: () => o("default", "@rsgweb/modules-core-feedback", !1, [0], () => Promise.all([l.e(338), l.e(225), l.e(669)]).then(() => () => l(66669))),
              79955: () => o("default", "focus-trap-react", !1, [1, 10, 3, 1], () => Promise.all([l.e(514), l.e(653)]).then(() => () => l(44514))),
              89653: () => o("default", "prop-types", !1, [1, 15, 8, 1], () => l.e(331).then(() => () => l(60331)))
            },
            i = {
              17: [84017],
              82: [93082],
              600: [1896, 13331, 81270],
              653: [89653],
              762: [56263, 79955],
              997: [36416, 42909]
            },
            c = {};
          l.f.consumes = (e, t) => {
            l.o(i, e) && i[e].forEach(e => {
              if (l.o(d, e)) return t.push(d[e]);
              if (!c[e]) {
                var r = t => {
                  d[e] = 0, l.m[e] = r => {
                    delete l.c[e], r.exports = t()
                  }
                };
                c[e] = !0;
                var a = t => {
                  delete d[e], l.m[e] = r => {
                    throw delete l.c[e], t
                  }
                };
                try {
                  var n = f[e]();
                  n.then ? t.push(d[e] = n.then(r).catch(a)) : r(n)
                } catch (e) {
                  a(e)
                }
              }
            })
          }
        })(), (() => {
          if ("undefined" != typeof document) {
            var e = {
              129: 0
            };
            l.f.miniCss = (t, r) => {
              e[t] ? r.push(e[t]) : 0 !== e[t] && {
                225: 1,
                669: 1,
                762: 1
              } [t] && r.push(e[t] = (e => new Promise((t, r) => {
                var a = l.miniCssF(e),
                  n = l.p + a;
                if (((e, t) => {
                    for (var r = document.getElementsByTagName("link"), a = 0; a < r.length; a++) {
                      var n = (d = r[a]).getAttribute("data-href") || d.getAttribute("href");
                      if ("stylesheet" === d.rel && (n === e || n === t)) return d
                    }
                    var o = document.getElementsByTagName("style");
                    for (a = 0; a < o.length; a++) {
                      var d;
                      if ((n = (d = o[a]).getAttribute("data-href")) === e || n === t) return d
                    }
                  })(a, n)) return t();
                ((e, t, r, a, n) => {
                  var o = document.createElement("link");
                  o.rel = "stylesheet", o.type = "text/css", l.nc && (o.nonce = l.nc), o.onerror = o.onload = r => {
                    if (o.onerror = o.onload = null, "load" === r.type) a();
                    else {
                      var d = r && r.type,
                        f = r && r.target && r.target.href || t,
                        i = new Error("Loading CSS chunk " + e + " failed.\n(" + d + ": " + f + ")");
                      i.name = "ChunkLoadError", i.code = "CSS_CHUNK_LOAD_FAILED", i.type = d, i.request = f, o.parentNode && o.parentNode.removeChild(o), n(i)
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
            129: 0
          };
          l.f.j = (t, r) => {
            var a = l.o(e, t) ? e[t] : void 0;
            if (0 !== a)
              if (a) r.push(a[2]);
              else if (/^(17|653|82)$/.test(t)) e[t] = 0;
            else {
              var n = new Promise((r, n) => a = e[t] = [r, n]);
              r.push(a[2] = n);
              var o = l.p + l.u(t),
                d = new Error;
              l.l(o, r => {
                if (l.o(e, t) && (0 !== (a = e[t]) && (e[t] = void 0), a)) {
                  var n = r && ("load" === r.type ? "missing" : r.type),
                    o = r && r.target && r.target.src;
                  d.message = "Loading chunk " + t + " failed.\n(" + n + ": " + o + ")", d.name = "ChunkLoadError", d.type = n, d.request = o, a[1](d)
                }
              }, "chunk-" + t, t)
            }
          };
          var t = (t, r) => {
              var a, n, [o, d, f] = r,
                i = 0;
              if (o.some(t => 0 !== e[t])) {
                for (a in d) l.o(d, a) && (l.m[a] = d[a]);
                f && f(l)
              }
              for (t && t(r); i < o.length; i++) n = o[i], l.o(e, n) && e[n] && e[n][0](), e[n] = 0
            },
            r = self.webpackChunk_rockstargames_sites_red_dead_online = self.webpackChunk_rockstargames_sites_red_dead_online || [];
          r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
        })(), l.nc = void 0, l(35649), l(82021)
      })())
    }
  }
});