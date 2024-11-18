! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "83f24bc6-ff5b-4783-9eaf-2641f0af977b", e._sentryDebugIdIdentifier = "sentry-dbid-83f24bc6-ff5b-4783-9eaf-2641f0af977b")
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
    f = {};
  return Object.defineProperty(r, "__esModule", {
    value: !0
  }), Object.defineProperty(a, "__esModule", {
    value: !0
  }), Object.defineProperty(o, "__esModule", {
    value: !0
  }), Object.defineProperty(n, "__esModule", {
    value: !0
  }), Object.defineProperty(f, "__esModule", {
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
        f[t] = e[t]
      }))
    }],
    execute: function() {
      e((() => {
        var e, d, s, c, i = {
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
                var f = a.slice(0, n + 1);
                return r.protocol + "//" + r.host + f
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
              e.exports = f
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
          28: "9780475c8e33a6e0ebba04fc3c8be022",
          40: "d88b84fb5cf56650e5076be4bd9b1c77",
          66: "27d4ddad8066ab3b5caaa694da29a604",
          106: "95edeffbce5286ee28fc41cf84e15137",
          124: "2e2fb0145ba70c150f29d19843eabcbd",
          143: "9bc1c7a25ef792b36c118c583dbfe964",
          149: "2e4c1addc912529082ba32c54e92beff",
          169: "751d280aa89b0700bdcae52f10decfc7",
          189: "2fd06307c0a8aa49a906324980a74f01",
          252: "be5848b684a64e43e5b487d2a133ae6d",
          277: "35135ce7515725c3a37386e2081dc072",
          380: "1704908add63f4b8084f8dbfbb976d0c",
          398: "a51c637628a0a507a89a7f68bb8289f4",
          403: "423ab428abb6864344aa452513d5886a",
          407: "3c7daf9beec4a893fc5cccc38293fce2",
          429: "21468eb5a96b5b8e55d1daa3b4701e77",
          462: "958d57504a872fa305d54ad84f8b395d",
          470: "0414954912a9e5efbd427e56ea5b504b",
          493: "e522e1bac7def9a8ff29eb5425830e9a",
          524: "56bfad69ad6c2163bcc9f5f6253cf1f6",
          533: "639eb64f3bd6bf8d64f7234e4a8db0bb",
          570: "6f0e04d82107fdd123f5d876c74ebaeb",
          598: "00ba00490becda7fd71ac86668fd9519",
          646: "6f7e55d1605059e21ed778d1695282d9",
          658: "b4d5a4fcc6c747900603548ef1a1a291",
          725: "ef03e0a7d45a223366ee882aec231102",
          837: "3cad0789c9e62a87959d92355ab3585f",
          851: "7928c5680a51a0aff63473c5a5df65ff",
          852: "1871827ce24df5817df8f3af0638a63a",
          889: "9242d40cbf79f9a22c3375c18cfebd60",
          946: "7ec3dee7f4317573ab695e0ad64f8c07",
          949: "9c5c8ee753715b3cc12e4c4fc7ace127"
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
        }(), u.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), e = {}, d = "@rockstargames/modules-core-videoplayer:", u.l = (t, r, a, o) => {
          if (e[t]) e[t].push(r);
          else {
            var n, f;
            if (void 0 !== a)
              for (var s = document.getElementsByTagName("script"), c = 0; c < s.length; c++) {
                var i = s[c];
                if (i.getAttribute("src") == t || i.getAttribute("data-webpack") == d + a) {
                  n = i;
                  break
                }
              }
            n || (f = !0, (n = document.createElement("script")).charset = "utf-8", n.timeout = 120, u.nc && n.setAttribute("nonce", u.nc), n.setAttribute("data-webpack", d + a), n.src = t), e[t] = [r];
            var l = (r, a) => {
                n.onerror = n.onload = null, clearTimeout(p);
                var o = e[t];
                if (delete e[t], n.parentNode && n.parentNode.removeChild(n), o && o.forEach((e => e(a))), r) return r(a)
              },
              p = setTimeout(l.bind(null, void 0, {
                type: "timeout",
                target: n
              }), 12e4);
            n.onerror = l.bind(null, n.onerror), n.onload = l.bind(null, n.onload), f && document.head.appendChild(n)
          }
        }, u.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, u.nmd = e => (e.paths = [], e.children || (e.children = []), e), s = {
          169: [2757, 5662],
          407: [8407],
          462: [207, 2756],
          470: [3902, 4401, 4566],
          949: [472, 3809, 5140]
        }, c = {
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
          u.o(s, e) && s[e].forEach((e => {
            var r = u.R;
            r || (r = []);
            var a = c[e];
            if (!(r.indexOf(a) >= 0)) {
              if (r.push(a), a.p) return t.push(a.p);
              var o = t => {
                  t || (t = new Error("Container missing")), "string" == typeof t.message && (t.message += '\nwhile loading "' + a[1] + '" from ' + a[2]), u.m[e] = () => {
                    throw t
                  }, a.p = 0
                },
                n = (e, r, n, f, d, s) => {
                  try {
                    var c = e(r, n);
                    if (!c || !c.then) return d(c, f, s);
                    var i = c.then((e => d(e, f)), o);
                    if (!s) return i;
                    t.push(a.p = i)
                  } catch (e) {
                    o(e)
                  }
                },
                f = (e, t, o) => n(t.get, a[1], r, 0, d, o),
                d = t => {
                  a.p = 1, u.m[e] = e => {
                    e.exports = t()
                  }
                };
              n(u, a[2], 0, 0, ((e, t, r) => e ? n(u.I, a[0], 0, e, f, r) : o()), 1)
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
                f = "@rockstargames/modules-core-videoplayer",
                d = (e, t, r, a) => {
                  var o = n[e] = n[e] || {},
                    d = o[t];
                  (!d || !d.loaded && (!a != !d.eager ? a : f > d.from)) && (o[t] = {
                    get: r,
                    from: f,
                    eager: !!a
                  })
                },
                s = e => {
                  var t = e => {
                    return t = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(t));
                    var t
                  };
                  try {
                    var o = u(e);
                    if (!o) return;
                    var n = e => e && e.init && e.init(u.S[r], a);
                    if (o.then) return c.push(o.then(n, t));
                    var f = n(o);
                    if (f && f.then) return c.push(f.catch(t))
                  } catch (e) {
                    t(e)
                  }
                },
                c = [];
              return "default" === r && (d("@gsap/react", "2.1.0", (() => Promise.all([u.e(403), u.e(40), u.e(277)]).then((() => () => u(3277))))), d("@popperjs/core", "2.11.8", (() => u.e(124).then((() => () => u(2124))))), d("@rockstargames/locale-tools", "1.0.0", (() => Promise.all([u.e(66), u.e(403), u.e(143)]).then((() => () => u(4143))))), d("@rockstargames/modules-core-agegate", "1.0.39", (() => Promise.all([u.e(946), u.e(403), u.e(462), u.e(725)]).then((() => () => u(33))))), d("gsap", "0.0.0", (() => u.e(149).then((() => () => u(3149))))), d("hammerjs", "2.0.8", (() => u.e(28).then((() => () => u(9028))))), d("lodash", "4.17.21", (() => u.e(429).then((() => () => u(9429))))), d("react-dom", "18.2.0", (() => Promise.all([u.e(533), u.e(403)]).then((() => () => u(7533))))), d("react-popper", "2.3.0", (() => Promise.all([u.e(403), u.e(493), u.e(851), u.e(570)]).then((() => () => u(6570))))), d("react-router-dom", "6.17.0", (() => Promise.all([u.e(398), u.e(403)]).then((() => () => u(3398))))), d("react", "18.2.0", (() => u.e(380).then((() => () => u(3380))))), d("uuid", "9.0.1", (() => u.e(646).then((() => () => u(4646))))), s(404), s(2969), s(1024), s(9787), s(9466)), c.length ? e[r] = Promise.all(c).then((() => e[r] = 1)) : e[r] = 1
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
                for (var f = 0, d = 1, s = !0;; d++, f++) {
                  var c, i, l = d < r.length ? (typeof r[d])[0] : "";
                  if (f >= a.length || "o" == (i = (typeof(c = a[f]))[0])) return !s || ("u" == l ? d > o && !n : "" == l != n);
                  if ("u" == i) {
                    if (!s || "u" != l) return !1
                  } else if (s)
                    if (l == i)
                      if (d <= o) {
                        if (c != r[d]) return !1
                      } else {
                        if (n ? c > r[d] : c < r[d]) return !1;
                        c != r[d] && (s = !1)
                      }
                  else if ("s" != l && "n" != l) {
                    if (n || d <= o) return !1;
                    s = !1, d--
                  } else {
                    if (d <= o || i < l != n) return !1;
                    s = !1
                  } else "s" != l && "n" != l && (s = !1, d--)
                }
              }
              var u = [],
                p = u.pop.bind(u);
              for (f = 1; f < r.length; f++) {
                var b = r[f];
                u.push(1 == b ? p() | p() : 2 == b ? p() & p() : b ? t(b, a) : !p())
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
                  var f = r[a],
                    d = (typeof f)[0];
                  if (n != d) return "o" == n && "n" == d || "s" == d || "u" == n;
                  if ("o" != n && "u" != n && o != f) return o < f;
                  a++
                }
              })(r, a) ? r : a), 0)) && n[a]
            },
            a = (e => function(t, r, a, o) {
              var n = u.I(t);
              return n && n.then ? n.then(e.bind(e, t, u.S[t], r, a, o)) : e(t, u.S[t], r, a, o)
            })(((e, t, a, o, n) => {
              var f = t && u.o(t, a) && r(t, a, o);
              return f ? (e => (e.loaded = 1, e.get()))(f) : n()
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
            f = {
              40: [6040],
              252: [4252],
              403: [1403],
              470: [720, 1041, 3004, 5638, 6717, 8588, 9779],
              493: [9493],
              851: [851]
            },
            d = {};
          u.f.consumes = (e, t) => {
            u.o(f, e) && f[e].forEach((e => {
              if (u.o(o, e)) return t.push(o[e]);
              if (!d[e]) {
                var r = t => {
                  o[e] = 0, u.m[e] = r => {
                    delete u.c[e], r.exports = t()
                  }
                };
                d[e] = !0;
                var a = t => {
                  delete o[e], u.m[e] = r => {
                    throw delete u.c[e], t
                  }
                };
                try {
                  var f = n[e]();
                  f.then ? t.push(o[e] = f.then(r).catch(a)) : r(f)
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
                      var o = (f = r[a]).getAttribute("data-href") || f.getAttribute("href");
                      if ("stylesheet" === f.rel && (o === e || o === t)) return f
                    }
                    var n = document.getElementsByTagName("style");
                    for (a = 0; a < n.length; a++) {
                      var f;
                      if ((o = (f = n[a]).getAttribute("data-href")) === e || o === t) return f
                    }
                  })(a, o)) return t();
                ((e, t, r, a, o) => {
                  var n = document.createElement("link");
                  n.rel = "stylesheet", n.type = "text/css", n.onerror = n.onload = r => {
                    if (n.onerror = n.onload = null, "load" === r.type) a();
                    else {
                      var f = r && ("load" === r.type ? "missing" : r.type),
                        d = r && r.target && r.target.href || t,
                        s = new Error("Loading CSS chunk " + e + " failed.\n(" + d + ")");
                      s.code = "CSS_CHUNK_LOAD_FAILED", s.type = f, s.request = d, n.parentNode && n.parentNode.removeChild(n), o(s)
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
                f = new Error;
              u.l(n, (r => {
                if (u.o(e, t) && (0 !== (a = e[t]) && (e[t] = void 0), a)) {
                  var o = r && ("load" === r.type ? "missing" : r.type),
                    n = r && r.target && r.target.src;
                  f.message = "Loading chunk " + t + " failed.\n(" + o + ": " + n + ")", f.name = "ChunkLoadError", f.type = o, f.request = n, a[1](f)
                }
              }), "chunk-" + t, t)
            }
          };
          var t = (t, r) => {
              var a, o, n = r[0],
                f = r[1],
                d = r[2],
                s = 0;
              if (n.some((t => 0 !== e[t]))) {
                for (a in f) u.o(f, a) && (u.m[a] = f[a]);
                d && d(u)
              }
              for (t && t(r); s < n.length; s++) o = n[s], u.o(e, o) && e[o] && e[o][0](), e[o] = 0
            },
            r = self.webpackChunk_rockstargames_modules_core_videoplayer = self.webpackChunk_rockstargames_modules_core_videoplayer || [];
          r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
        })(), u(2160), u(4930)
      })())
    }
  }
}));