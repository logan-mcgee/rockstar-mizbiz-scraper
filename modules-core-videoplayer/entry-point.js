! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "bf9340c3-3e83-4242-af14-29281de5177a", e._sentryDebugIdIdentifier = "sentry-dbid-bf9340c3-3e83-4242-af14-29281de5177a")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-videoplayer",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register(["@rockstargames/graph-client", "@rockstargames/intl", "@rockstargames/modules-core-sc-user", "@rockstargames/tina", "@rockstargames/utils"], (function(e, t) {
  var r = {},
    a = {},
    o = {},
    n = {},
    d = {};
  return Object.defineProperty(r, "__esModule", {
    value: !0
  }), Object.defineProperty(a, "__esModule", {
    value: !0
  }), Object.defineProperty(o, "__esModule", {
    value: !0
  }), Object.defineProperty(n, "__esModule", {
    value: !0
  }), Object.defineProperty(d, "__esModule", {
    value: !0
  }), {
    setters: [function(e) {
      Object.keys(e).forEach((function(t) {
        r[t] = e[t]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(t) {
        a[t] = e[t]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(t) {
        o[t] = e[t]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(t) {
        n[t] = e[t]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(t) {
        d[t] = e[t]
      }))
    }],
    execute: function() {
      e((() => {
        var e, f, c, s, i = {
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
                for (var a = "/" === r.pathname[0] ? r.pathname : "/" + r.pathname, o = 0, n = a.length; o !== t && n >= 0;) "/" === a[--n] && o++;
                if (o !== t) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + t + ") is greater than the number of directories (" + o + ") in the URL path " + e);
                var d = a.slice(0, n + 1);
                return r.protocol + "//" + r.host + d
              };
              Number.isInteger
            },
            4930: (e, t, r) => {
              "use strict";
              var a = {
                  "./bootstrap": () => r.e(837).then((() => () => r(8837))),
                  "./index": () => Promise.all([r.e(598), r.e(403), r.e(40), r.e(462), r.e(407), r.e(470), r.e(252), r.e(889)]).then((() => () => r(6889))),
                  "./tina": () => Promise.all([r.e(403), r.e(407), r.e(252), r.e(949)]).then((() => () => r(8949))),
                  "./tinaBlockTemplates": () => Promise.all([r.e(403), r.e(407), r.e(252), r.e(949)]).then((() => () => r(8949)))
                },
                o = (e, t) => (r.R = t, t = r.o(a, e) ? a[e]() : Promise.resolve().then((() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                })), r.R = void 0, t),
                n = (e, t) => {
                  if (r.S) {
                    var a = "default",
                      o = r.S[a];
                    if (o && o !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return r.S[a] = e, r.I(a, t)
                  }
                };
              r.d(t, {
                get: () => o,
                init: () => n
              })
            },
            1024: e => {
              "use strict";
              e.exports = r
            },
            9787: e => {
              "use strict";
              e.exports = a
            },
            404: e => {
              "use strict";
              e.exports = o
            },
            9466: e => {
              "use strict";
              e.exports = n
            },
            2969: e => {
              "use strict";
              e.exports = d
            }
          },
          l = {};

        function u(e) {
          var t = l[e];
          if (void 0 !== t) return t.exports;
          var r = l[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return i[e].call(r.exports, r, r.exports, u), r.loaded = !0, r.exports
        }
        return u.m = i, u.c = l, u.y = t, u.amdO = {}, u.n = e => {
          var t = e && e.__esModule ? () => e.default : () => e;
          return u.d(t, {
            a: t
          }), t
        }, u.d = (e, t) => {
          for (var r in t) u.o(t, r) && !u.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: t[r]
          })
        }, u.f = {}, u.e = e => Promise.all(Object.keys(u.f).reduce(((t, r) => (u.f[r](e, t), t)), [])), u.u = e => "js/" + {
          28: "0b964cc4e0c8c5456d4cdca63f1cca5d",
          40: "d88b84fb5cf56650e5076be4bd9b1c77",
          66: "8b555723830009b7354c0f99c2027ad6",
          106: "acca496fa47c11ea8eb24c022a705044",
          124: "9a8441d876ddf9e07beb17c960a5c6ef",
          143: "dcdbaa19816dd56e51dff8a0b5a65933",
          149: "1d0f3694fea76c84b92a44c5dd9d8356",
          169: "be20353810db9bc4ad4117751be84363",
          189: "8823cd9c46b40899198984225382e93a",
          252: "be5848b684a64e43e5b487d2a133ae6d",
          277: "2d7ddafc2b8a15191aae2211f65b0503",
          380: "8f8ff8771584fc80ead7418f88509b1f",
          398: "ea3c59032107d56b8799cde382f4c138",
          403: "423ab428abb6864344aa452513d5886a",
          407: "3c7daf9beec4a893fc5cccc38293fce2",
          429: "50fd46aba1f05e8ba0a469aaa3f1b232",
          462: "958d57504a872fa305d54ad84f8b395d",
          470: "e533b16076d2792f056fa4647450708a",
          493: "e522e1bac7def9a8ff29eb5425830e9a",
          524: "41a1e0fd9b52bb96afefb430288ba606",
          533: "b76a36342b5a502b7d80ff1700199104",
          570: "8ed5cbec219263a95d5f36d8598ce46d",
          598: "e6fa0f829bd177242e4a283aa8c596d0",
          646: "b9f0e194c88ad80aeb412dee8a6e8546",
          658: "cf4e6e8976c82e5292e7e89c6f490942",
          725: "344921bdc06ceaa462dbc73c0cf855de",
          837: "eeeab030ccb42612bc0b414583fa0bb0",
          851: "7928c5680a51a0aff63473c5a5df65ff",
          852: "e6ed9f1363c39bc4c686cd43bdf34788",
          889: "213c93ff7c233bbfb7492aaaa674b3f2",
          946: "8437212d4bb7df91d859c02cf6715953",
          949: "452dd82c77cdf8c1a594b6ffd2541717"
        } [e] + ".js", u.miniCssF = e => "css/" + {
          106: "16159a73f916ef1fe487d3701d83cdf1",
          169: "a126229ede95b503bfddbd53efcedae3",
          470: "e4f9171811f3a33fd5f8d0a916f15b4c",
          725: "16159a73f916ef1fe487d3701d83cdf1",
          889: "43e5f4e91ba9d24b9c545af6808be678",
          949: "9dfcc7b2daa118f1e606ebcdb0eb1237"
        } [e] + ".css", u.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), u.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), e = {}, f = "@rockstargames/modules-core-videoplayer:", u.l = (t, r, a, o) => {
          if (e[t]) e[t].push(r);
          else {
            var n, d;
            if (void 0 !== a)
              for (var c = document.getElementsByTagName("script"), s = 0; s < c.length; s++) {
                var i = c[s];
                if (i.getAttribute("src") == t || i.getAttribute("data-webpack") == f + a) {
                  n = i;
                  break
                }
              }
            n || (d = !0, (n = document.createElement("script")).charset = "utf-8", n.timeout = 120, u.nc && n.setAttribute("nonce", u.nc), n.setAttribute("data-webpack", f + a), n.src = t), e[t] = [r];
            var l = (r, a) => {
                n.onerror = n.onload = null, clearTimeout(p);
                var o = e[t];
                if (delete e[t], n.parentNode && n.parentNode.removeChild(n), o && o.forEach((e => e(a))), r) return r(a)
              },
              p = setTimeout(l.bind(null, void 0, {
                type: "timeout",
                target: n
              }), 12e4);
            n.onerror = l.bind(null, n.onerror), n.onload = l.bind(null, n.onload), d && document.head.appendChild(n)
          }
        }, u.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, u.nmd = e => (e.paths = [], e.children || (e.children = []), e), c = {
          169: [2757, 5662],
          407: [8407],
          462: [207, 2756],
          470: [3902, 4401, 4566],
          949: [472, 3809, 5140]
        }, s = {
          207: ["default", "./index", 404],
          472: ["default", "./operations/queries/videos2.graphql", 1024],
          2756: ["default", "./index", 2969],
          2757: ["default", "./providers", 404],
          3809: ["default", "./ui", 9466],
          3902: ["default", "./index", 9787],
          4401: ["default", "./index", 9466],
          4566: ["default", "./messages", 9787],
          5140: ["default", "./properties", 9466],
          5662: ["default", "./gtm", 2969],
          8407: ["default", "./index", 1024]
        }, u.f.remotes = (e, t) => {
          u.o(c, e) && c[e].forEach((e => {
            var r = u.R;
            r || (r = []);
            var a = s[e];
            if (!(r.indexOf(a) >= 0)) {
              if (r.push(a), a.p) return t.push(a.p);
              var o = t => {
                  t || (t = new Error("Container missing")), "string" == typeof t.message && (t.message += '\nwhile loading "' + a[1] + '" from ' + a[2]), u.m[e] = () => {
                    throw t
                  }, a.p = 0
                },
                n = (e, r, n, d, f, c) => {
                  try {
                    var s = e(r, n);
                    if (!s || !s.then) return f(s, d, c);
                    var i = s.then((e => f(e, d)), o);
                    if (!c) return i;
                    t.push(a.p = i)
                  } catch (e) {
                    o(e)
                  }
                },
                d = (e, t, o) => n(t.get, a[1], r, 0, f, o),
                f = t => {
                  a.p = 1, u.m[e] = e => {
                    e.exports = t()
                  }
                };
              n(u, a[2], 0, 0, ((e, t, r) => e ? n(u.I, a[0], 0, e, d, r) : o()), 1)
            }
          }))
        }, (() => {
          u.S = {};
          var e = {},
            t = {};
          u.I = (r, a) => {
            a || (a = []);
            var o = t[r];
            if (o || (o = t[r] = {}), !(a.indexOf(o) >= 0)) {
              if (a.push(o), e[r]) return e[r];
              u.o(u.S, r) || (u.S[r] = {});
              var n = u.S[r],
                d = "@rockstargames/modules-core-videoplayer",
                f = (e, t, r, a) => {
                  var o = n[e] = n[e] || {},
                    f = o[t];
                  (!f || !f.loaded && (!a != !f.eager ? a : d > f.from)) && (o[t] = {
                    get: r,
                    from: d,
                    eager: !!a
                  })
                },
                c = e => {
                  var t = e => {
                    return t = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(t));
                    var t
                  };
                  try {
                    var o = u(e);
                    if (!o) return;
                    var n = e => e && e.init && e.init(u.S[r], a);
                    if (o.then) return s.push(o.then(n, t));
                    var d = n(o);
                    if (d && d.then) return s.push(d.catch(t))
                  } catch (e) {
                    t(e)
                  }
                },
                s = [];
              return "default" === r && (f("@gsap/react", "2.1.0", (() => Promise.all([u.e(403), u.e(40), u.e(277)]).then((() => () => u(3277))))), f("@popperjs/core", "2.11.8", (() => u.e(124).then((() => () => u(2124))))), f("@rockstargames/locale-tools", "1.0.0", (() => Promise.all([u.e(66), u.e(403), u.e(143)]).then((() => () => u(4143))))), f("@rockstargames/modules-core-agegate", "1.0.39", (() => Promise.all([u.e(946), u.e(403), u.e(462), u.e(725)]).then((() => () => u(33))))), f("gsap", "0.0.0", (() => u.e(149).then((() => () => u(3149))))), f("hammerjs", "2.0.8", (() => u.e(28).then((() => () => u(9028))))), f("lodash", "4.17.21", (() => u.e(429).then((() => () => u(9429))))), f("react-dom", "18.2.0", (() => Promise.all([u.e(533), u.e(403)]).then((() => () => u(7533))))), f("react-popper", "2.3.0", (() => Promise.all([u.e(403), u.e(493), u.e(851), u.e(570)]).then((() => () => u(6570))))), f("react-router-dom", "6.17.0", (() => Promise.all([u.e(398), u.e(403)]).then((() => () => u(3398))))), f("react", "18.2.0", (() => u.e(380).then((() => () => u(3380))))), f("uuid", "9.0.1", (() => u.e(646).then((() => () => u(4646))))), c(404), c(2969), c(1024), c(9787), c(9466)), s.length ? e[r] = Promise.all(s).then((() => e[r] = 1)) : e[r] = 1
            }
          }
        })(), (() => {
          var e;
          u.g.importScripts && (e = u.g.location + "");
          var t = u.g.document;
          if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
            var r = t.getElementsByTagName("script");
            if (r.length)
              for (var a = r.length - 1; a > -1 && (!e || !/^http(s?):/.test(e));) e = r[a--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), u.p = e
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
                var o = r[0],
                  n = o < 0;
                n && (o = -o - 1);
                for (var d = 0, f = 1, c = !0;; f++, d++) {
                  var s, i, l = f < r.length ? (typeof r[f])[0] : "";
                  if (d >= a.length || "o" == (i = (typeof(s = a[d]))[0])) return !c || ("u" == l ? f > o && !n : "" == l != n);
                  if ("u" == i) {
                    if (!c || "u" != l) return !1
                  } else if (c)
                    if (l == i)
                      if (f <= o) {
                        if (s != r[f]) return !1
                      } else {
                        if (n ? s > r[f] : s < r[f]) return !1;
                        s != r[f] && (c = !1)
                      }
                  else if ("s" != l && "n" != l) {
                    if (n || f <= o) return !1;
                    c = !1, f--
                  } else {
                    if (f <= o || i < l != n) return !1;
                    c = !1
                  } else "s" != l && "n" != l && (c = !1, f--)
                }
              }
              var u = [],
                p = u.pop.bind(u);
              for (d = 1; d < r.length; d++) {
                var h = r[d];
                u.push(1 == h ? p() | p() : 2 == h ? p() & p() : h ? t(h, a) : !p())
              }
              return !!p()
            },
            r = (r, a, o) => {
              var n = r[a];
              return (a = Object.keys(n).reduce(((r, a) => !t(o, a) || r && !((t, r) => {
                t = e(t), r = e(r);
                for (var a = 0;;) {
                  if (a >= t.length) return a < r.length && "u" != (typeof r[a])[0];
                  var o = t[a],
                    n = (typeof o)[0];
                  if (a >= r.length) return "u" == n;
                  var d = r[a],
                    f = (typeof d)[0];
                  if (n != f) return "o" == n && "n" == f || "s" == f || "u" == n;
                  if ("o" != n && "u" != n && o != d) return o < d;
                  a++
                }
              })(r, a) ? r : a), 0)) && n[a]
            },
            a = (e => function(t, r, a, o) {
              var n = u.I(t);
              return n && n.then ? n.then(e.bind(e, t, u.S[t], r, a, o)) : e(t, u.S[t], r, a, o)
            })(((e, t, a, o, n) => {
              var d = t && u.o(t, a) && r(t, a, o);
              return d ? (e => (e.loaded = 1, e.get()))(d) : n()
            })),
            o = {},
            n = {
              1403: () => a("default", "react", [1, 18, 2, 0], (() => u.e(380).then((() => () => u(3380))))),
              6040: () => a("default", "gsap", [1, "workspace:*"], (() => u.e(149).then((() => () => u(3149))))),
              720: () => a("default", "hammerjs", [1, 2, 0, 8], (() => u.e(28).then((() => () => u(9028))))),
              1041: () => a("default", "@rockstargames/modules-core-agegate", [1, "workspace:*"], (() => Promise.all([u.e(946), u.e(106)]).then((() => () => u(33))))),
              3004: () => a("default", "uuid", [1, 9, 0, 0], (() => u.e(646).then((() => () => u(4646))))),
              5638: () => a("default", "@gsap/react", [1, 2, 1, 0], (() => u.e(658).then((() => () => u(3277))))),
              6717: () => a("default", "@rockstargames/locale-tools", [1, "workspace:*"], (() => Promise.all([u.e(66), u.e(524)]).then((() => () => u(4143))))),
              8588: () => a("default", "react-popper", [1, 2, 3, 0], (() => Promise.all([u.e(493), u.e(851), u.e(189)]).then((() => () => u(6570))))),
              9779: () => a("default", "react-router-dom", [1, 6, 11, 2], (() => u.e(398).then((() => () => u(3398))))),
              4252: () => a("default", "lodash", [1, 4, 17, 21], (() => u.e(429).then((() => () => u(9429))))),
              9493: () => a("default", "react-dom", [1, 18, 2, 0], (() => u.e(533).then((() => () => u(7533))))),
              851: () => a("default", "@popperjs/core", [1, 2, 11, 7], (() => u.e(124).then((() => () => u(2124)))))
            },
            d = {
              40: [6040],
              252: [4252],
              403: [1403],
              470: [720, 1041, 3004, 5638, 6717, 8588, 9779],
              493: [9493],
              851: [851]
            },
            f = {};
          u.f.consumes = (e, t) => {
            u.o(d, e) && d[e].forEach((e => {
              if (u.o(o, e)) return t.push(o[e]);
              if (!f[e]) {
                var r = t => {
                  o[e] = 0, u.m[e] = r => {
                    delete u.c[e], r.exports = t()
                  }
                };
                f[e] = !0;
                var a = t => {
                  delete o[e], u.m[e] = r => {
                    throw delete u.c[e], t
                  }
                };
                try {
                  var d = n[e]();
                  d.then ? t.push(o[e] = d.then(r).catch(a)) : r(d)
                } catch (e) {
                  a(e)
                }
              }
            }))
          }
        })(), (() => {
          if ("undefined" != typeof document) {
            var e = {
              614: 0
            };
            u.f.miniCss = (t, r) => {
              e[t] ? r.push(e[t]) : 0 !== e[t] && {
                106: 1,
                169: 1,
                470: 1,
                725: 1,
                889: 1,
                949: 1
              } [t] && r.push(e[t] = (e => new Promise(((t, r) => {
                var a = u.miniCssF(e),
                  o = u.p + a;
                if (((e, t) => {
                    for (var r = document.getElementsByTagName("link"), a = 0; a < r.length; a++) {
                      var o = (d = r[a]).getAttribute("data-href") || d.getAttribute("href");
                      if ("stylesheet" === d.rel && (o === e || o === t)) return d
                    }
                    var n = document.getElementsByTagName("style");
                    for (a = 0; a < n.length; a++) {
                      var d;
                      if ((o = (d = n[a]).getAttribute("data-href")) === e || o === t) return d
                    }
                  })(a, o)) return t();
                ((e, t, r, a, o) => {
                  var n = document.createElement("link");
                  n.rel = "stylesheet", n.type = "text/css", n.onerror = n.onload = r => {
                    if (n.onerror = n.onload = null, "load" === r.type) a();
                    else {
                      var d = r && ("load" === r.type ? "missing" : r.type),
                        f = r && r.target && r.target.href || t,
                        c = new Error("Loading CSS chunk " + e + " failed.\n(" + f + ")");
                      c.code = "CSS_CHUNK_LOAD_FAILED", c.type = d, c.request = f, n.parentNode && n.parentNode.removeChild(n), o(c)
                    }
                  }, n.href = t, document.head.appendChild(n)
                })(e, o, 0, t, r)
              })))(t).then((() => {
                e[t] = 0
              }), (r => {
                throw delete e[t], r
              })))
            }
          }
        })(), (() => {
          var e = {
            614: 0
          };
          u.f.j = (t, r) => {
            var a = u.o(e, t) ? e[t] : void 0;
            if (0 !== a)
              if (a) r.push(a[2]);
              else if (/^(4(0(|3|7)|62|93)|252|851)$/.test(t)) e[t] = 0;
            else {
              var o = new Promise(((r, o) => a = e[t] = [r, o]));
              r.push(a[2] = o);
              var n = u.p + u.u(t),
                d = new Error;
              u.l(n, (r => {
                if (u.o(e, t) && (0 !== (a = e[t]) && (e[t] = void 0), a)) {
                  var o = r && ("load" === r.type ? "missing" : r.type),
                    n = r && r.target && r.target.src;
                  d.message = "Loading chunk " + t + " failed.\n(" + o + ": " + n + ")", d.name = "ChunkLoadError", d.type = o, d.request = n, a[1](d)
                }
              }), "chunk-" + t, t)
            }
          };
          var t = (t, r) => {
              var a, o, n = r[0],
                d = r[1],
                f = r[2],
                c = 0;
              if (n.some((t => 0 !== e[t]))) {
                for (a in d) u.o(d, a) && (u.m[a] = d[a]);
                f && f(u)
              }
              for (t && t(r); c < n.length; c++) o = n[c], u.o(e, o) && e[o] && e[o][0](), e[o] = 0
            },
            r = self.webpackChunk_rockstargames_modules_core_videoplayer = self.webpackChunk_rockstargames_modules_core_videoplayer || [];
          r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
        })(), u(2160), u(4930)
      })())
    }
  }
}));