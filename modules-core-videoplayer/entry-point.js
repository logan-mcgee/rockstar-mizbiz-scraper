! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "f8daf662-603a-438f-9810-c10d54c85001", e._sentryDebugIdIdentifier = "sentry-dbid-f8daf662-603a-438f-9810-c10d54c85001")
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
        var e, d, c, s, i = {
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
          28: "67151bb6230317020d880e0f66f1fba9",
          40: "d88b84fb5cf56650e5076be4bd9b1c77",
          66: "d3f9ae810f3431563ed6c82132f4a735",
          106: "27a6ea2502504bfaa905b40993ef1ece",
          124: "0db700edddbccbc001bf6dd4006ca4ab",
          143: "9ea13bc1e23d141e209769e35100eb7e",
          149: "aeecee4747db10125003b477bae74597",
          169: "02f13735da719d94ac15503d60b00641",
          189: "c4b3ea2bb107e5a0220d1e70781512da",
          252: "be5848b684a64e43e5b487d2a133ae6d",
          277: "7f8dee270eb061ba8929ba8c4e33701e",
          380: "397554eb5615c2418e8522da5c4b9813",
          396: "aec105474dbe05c69484cf08f4e6e564",
          398: "2264207c258b6e806482da2cee025334",
          403: "423ab428abb6864344aa452513d5886a",
          407: "3c7daf9beec4a893fc5cccc38293fce2",
          429: "57a2e92eec829df17888ec084eebe826",
          462: "958d57504a872fa305d54ad84f8b395d",
          470: "7d8fc2e36e16140da0083d46e3ce2116",
          493: "e522e1bac7def9a8ff29eb5425830e9a",
          524: "172d1ef235adf60e29077ff03fb30017",
          533: "9d52004642b5294e3913ccbc68d3ff22",
          570: "327fe4babb6d4ffafbacca52a3cd941d",
          598: "0066d94e5a93b99181e4ad295457c301",
          646: "ab77a3521976659bf9894a1479a03860",
          658: "e7845a3209d838fc8f3ebe2c3f1a01f0",
          725: "21d1a38ee666b09da376119f6bb45c3d",
          837: "9495372e5e0ef7a0bf6214010e6246e4",
          851: "7928c5680a51a0aff63473c5a5df65ff",
          852: "827f7c1663920006a57dea10985377ea",
          889: "7f319cf972bd9710354eb046c29ca796",
          946: "c3ab3f86c96c0076d2c94ba119998730",
          949: "8a95e66ff4e1b8f344b554cc0d5a17b2"
        } [e] + ".js", u.miniCssF = e => "css/" + {
          106: "16159a73f916ef1fe487d3701d83cdf1",
          169: "a126229ede95b503bfddbd53efcedae3",
          470: "3b9b581065aa77b0da7df73bf452193c",
          725: "16159a73f916ef1fe487d3701d83cdf1",
          889: "80b4e1f00ad588a724c2f955bdec9c52",
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
              for (var c = document.getElementsByTagName("script"), s = 0; s < c.length; s++) {
                var i = c[s];
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
        }, u.nmd = e => (e.paths = [], e.children || (e.children = []), e), c = {
          169: [2757, 5662],
          396: [396],
          407: [8407],
          462: [207, 2756],
          470: [3902, 4401, 4566],
          949: [472, 3809, 5140]
        }, s = {
          207: ["default", "./index", 404],
          396: ["default", "./hooks", 2969],
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
                n = (e, r, n, f, d, c) => {
                  try {
                    var s = e(r, n);
                    if (!s || !s.then) return d(s, f, c);
                    var i = s.then((e => d(e, f)), o);
                    if (!c) return i;
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
                    var f = n(o);
                    if (f && f.then) return s.push(f.catch(t))
                  } catch (e) {
                    t(e)
                  }
                },
                s = [];
              return "default" === r && (d("@gsap/react", "2.1.0", (() => Promise.all([u.e(403), u.e(40), u.e(277)]).then((() => () => u(3277))))), d("@popperjs/core", "2.11.8", (() => u.e(124).then((() => () => u(2124))))), d("@rockstargames/locale-tools", "1.0.0", (() => Promise.all([u.e(66), u.e(403), u.e(396), u.e(143)]).then((() => () => u(4143))))), d("@rockstargames/modules-core-agegate", "1.0.39", (() => Promise.all([u.e(946), u.e(403), u.e(462), u.e(725)]).then((() => () => u(33))))), d("gsap", "0.0.0", (() => u.e(149).then((() => () => u(3149))))), d("hammerjs", "2.0.8", (() => u.e(28).then((() => () => u(9028))))), d("lodash", "4.17.21", (() => u.e(429).then((() => () => u(9429))))), d("react-dom", "18.2.0", (() => Promise.all([u.e(533), u.e(403)]).then((() => () => u(7533))))), d("react-popper", "2.3.0", (() => Promise.all([u.e(403), u.e(493), u.e(851), u.e(570)]).then((() => () => u(6570))))), d("react-router-dom", "6.17.0", (() => Promise.all([u.e(398), u.e(403)]).then((() => () => u(3398))))), d("react", "18.2.0", (() => u.e(380).then((() => () => u(3380))))), d("uuid", "9.0.1", (() => u.e(646).then((() => () => u(4646))))), c(404), c(2969), c(1024), c(9787), c(9466)), s.length ? e[r] = Promise.all(s).then((() => e[r] = 1)) : e[r] = 1
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
                for (var f = 0, d = 1, c = !0;; d++, f++) {
                  var s, i, l = d < r.length ? (typeof r[d])[0] : "";
                  if (f >= a.length || "o" == (i = (typeof(s = a[f]))[0])) return !c || ("u" == l ? d > o && !n : "" == l != n);
                  if ("u" == i) {
                    if (!c || "u" != l) return !1
                  } else if (c)
                    if (l == i)
                      if (d <= o) {
                        if (s != r[d]) return !1
                      } else {
                        if (n ? s > r[d] : s < r[d]) return !1;
                        s != r[d] && (c = !1)
                      }
                  else if ("s" != l && "n" != l) {
                    if (n || d <= o) return !1;
                    c = !1, d--
                  } else {
                    if (d <= o || i < l != n) return !1;
                    c = !1
                  } else "s" != l && "n" != l && (c = !1, d--)
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
              6717: () => a("default", "@rockstargames/locale-tools", [1, "workspace:*"], (() => Promise.all([u.e(66), u.e(396), u.e(524)]).then((() => () => u(4143))))),
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
                        c = new Error("Loading CSS chunk " + e + " failed.\n(" + d + ")");
                      c.code = "CSS_CHUNK_LOAD_FAILED", c.type = f, c.request = d, n.parentNode && n.parentNode.removeChild(n), o(c)
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
              else if (/^(4(0(|3|7)|62|93)|252|396|851)$/.test(t)) e[t] = 0;
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
                c = 0;
              if (n.some((t => 0 !== e[t]))) {
                for (a in f) u.o(f, a) && (u.m[a] = f[a]);
                d && d(u)
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