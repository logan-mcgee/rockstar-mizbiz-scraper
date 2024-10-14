! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "4e8f909b-0784-4a42-8801-2afc3098da5c", e._sentryDebugIdIdentifier = "sentry-dbid-4e8f909b-0784-4a42-8801-2afc3098da5c")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-legacy",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register(["@rockstargames/graph-client", "@rockstargames/intl", "@rockstargames/modules-core-sc-user", "@rockstargames/modules-core-videoplayer", "@rockstargames/tina", "@rockstargames/utils"], (function(e, t) {
  var r = {},
    a = {},
    o = {},
    n = {},
    d = {},
    s = {};
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
  }), Object.defineProperty(s, "__esModule", {
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
    }, function(e) {
      Object.keys(e).forEach((function(t) {
        s[t] = e[t]
      }))
    }],
    execute: function() {
      e((() => {
        var e, c, i, f, l = {
            6539: (e, t, r) => {
              (0, r(13403).w)(1)
            },
            13403: (e, t, r) => {
              const a = r(75659).y;
              t.w = function(e) {
                if (e || (e = 1), !r.y.meta || !r.y.meta.url) throw console.error("__system_context__", r.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                r.p = a(r.y.meta.url, e)
              }
            },
            32160: (e, t, r) => {
              r(6539)
            },
            75659: (e, t, r) => {
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
            29501: (e, t, r) => {
              "use strict";
              var a = {
                  "./bootstrap": () => Promise.all([r.e(689), r.e(165), r.e(473), r.e(852), r.e(403), r.e(747), r.e(626), r.e(516), r.e(393), r.e(846)]).then((() => () => r(12846))),
                  "./index": () => Promise.all([r.e(689), r.e(165), r.e(473), r.e(403), r.e(747), r.e(626), r.e(516), r.e(393), r.e(179)]).then((() => () => r(28179))),
                  "./site-routes/Bully": () => Promise.all([r.e(689), r.e(165), r.e(473), r.e(403), r.e(747), r.e(626), r.e(516), r.e(393), r.e(770), r.e(969)]).then((() => () => r(74969))),
                  "./site-routes/RedDeadRedemption": () => Promise.all([r.e(689), r.e(165), r.e(473), r.e(403), r.e(747), r.e(626), r.e(516), r.e(393), r.e(770), r.e(861)]).then((() => () => r(92861))),
                  "./tina": () => Promise.all([r.e(689), r.e(165), r.e(473), r.e(403), r.e(747), r.e(626), r.e(516), r.e(393), r.e(770)]).then((() => () => r(85770)))
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
            61024: e => {
              "use strict";
              e.exports = r
            },
            49787: e => {
              "use strict";
              e.exports = a
            },
            60404: e => {
              "use strict";
              e.exports = o
            },
            25136: e => {
              "use strict";
              e.exports = n
            },
            99466: e => {
              "use strict";
              e.exports = d
            },
            92969: e => {
              "use strict";
              e.exports = s
            }
          },
          u = {};

        function b(e) {
          var t = u[e];
          if (void 0 !== t) return t.exports;
          var r = u[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return l[e].call(r.exports, r, r.exports, b), r.loaded = !0, r.exports
        }
        return b.m = l, b.c = u, b.y = t, b.amdO = {}, b.n = e => {
          var t = e && e.__esModule ? () => e.default : () => e;
          return b.d(t, {
            a: t
          }), t
        }, b.d = (e, t) => {
          for (var r in t) b.o(t, r) && !b.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: t[r]
          })
        }, b.f = {}, b.e = e => Promise.all(Object.keys(b.f).reduce(((t, r) => (b.f[r](e, t), t)), [])), b.u = e => "js/" + {
          4: "3940785ec4aaa613bbededbbe648a898",
          8: "4cdb60982ac7d781010b41bd4d4a0045",
          52: "d378fd3d15064ed3c91e720aa156549b",
          66: "e88852aeeb1f82d4fee6809279a8b50f",
          105: "fb61cacc3d428b1f0edb5213974bd713",
          131: "50b70178a44a5462e630f1ca6d1022ba",
          143: "7c7b1249b9ab5d593709424e8661dfc7",
          165: "8194d7ccf2bff8be4d3821651e8758cf",
          171: "f558ff476ebc0109dd2de699704c66aa",
          177: "69937e1f0caae3e9474133f101fd4c68",
          179: "b9a28df9f6305b617bd03f411292f216",
          207: "044f31331d3a920c55313619831af8f5",
          300: "521ee021be6d2b81830bb4f63f4b544a",
          354: "1b128c5d7c7806ab07176e84a03b1d73",
          380: "3e86e26d5561fe73f738ba2a9785383c",
          393: "ecb3153a5ff5f1099e04824a270be122",
          403: "e1af37c3416a76bceb3ed283ad101177",
          433: "261937838d245dcfac60c4518b641536",
          473: "f18507f3909663c44f5d431ec4d01e7b",
          486: "13651e7838ab292fd6251cc05d05f1d6",
          512: "f9dbaaa31ac008e8ff71098779b36d86",
          516: "5e4e10f5582f145a69c4720c01953538",
          524: "37e97da84a4224963db797468aa1c3af",
          533: "a59301c61bc4d066cd0ae8c209b74bc1",
          581: "08b3489d0268571641a8b85a8594f8ba",
          588: "838e27a883ac27873ab1de1faf989bf0",
          626: "6e674f82d9524907e37816632072aec8",
          689: "674a5b39d83c55bddb451dc862d173b4",
          747: "880280ada80bcf22435c0607eb5e09bd",
          770: "a9059b4dccd70515dd615f34a0a3bf44",
          774: "8de26b980d4a3ea1b9c2f9d3f1f961fe",
          846: "002300776e4273adedd68efc7c5870d0",
          852: "cb7f23fac24684fecf0734c95fb655d4",
          861: "0e3d2316fc5ca8c4324c9d094f6a7cb1",
          862: "3b3eb12b5d54a1716c6263159c3c924c",
          867: "f339b2c72c47d1b6df0b5e267c283b4c",
          919: "1e380b97fa48ad1553a89f8862fc0ead",
          969: "9582c69763347908d6d9c6e3463bff51",
          973: "cc52ecb12d87430deaedced4979374ae",
          977: "a3c609c4c4eb5fabd16e48350dd75cd9"
        } [e] + ".js", b.miniCssF = e => "css/" + {
          4: "ec375cd8457f99785b185813b04990cd",
          393: "7c7036a5c2a9ce44e372cd3386fe717d",
          433: "b07f327cbe7e2679a4d5423b745ed168",
          846: "32af9d0c26e64e23edfa1eb3071ff9c6",
          861: "916e74d8d50f64d8f556da06d20283dd",
          862: "854e00a357d948027baaa513629be0c3",
          969: "916e74d8d50f64d8f556da06d20283dd"
        } [e] + ".css", b.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), b.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), e = {}, c = "@rockstargames/sites-legacy:", b.l = (t, r, a, o) => {
          if (e[t]) e[t].push(r);
          else {
            var n, d;
            if (void 0 !== a)
              for (var s = document.getElementsByTagName("script"), i = 0; i < s.length; i++) {
                var f = s[i];
                if (f.getAttribute("src") == t || f.getAttribute("data-webpack") == c + a) {
                  n = f;
                  break
                }
              }
            n || (d = !0, (n = document.createElement("script")).charset = "utf-8", n.timeout = 120, b.nc && n.setAttribute("nonce", b.nc), n.setAttribute("data-webpack", c + a), n.src = t), e[t] = [r];
            var l = (r, a) => {
                n.onerror = n.onload = null, clearTimeout(u);
                var o = e[t];
                if (delete e[t], n.parentNode && n.parentNode.removeChild(n), o && o.forEach((e => e(a))), r) return r(a)
              },
              u = setTimeout(l.bind(null, void 0, {
                type: "timeout",
                target: n
              }), 12e4);
            n.onerror = l.bind(null, n.onerror), n.onload = l.bind(null, n.onload), d && document.head.appendChild(n)
          }
        }, b.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, b.nmd = e => (e.paths = [], e.children || (e.children = []), e), i = {
          393: [26398, 28089, 31879, 55140, 58407, 73379, 78417, 90588, 94566],
          626: [42756],
          747: [40207, 74401],
          770: [17523, 33809],
          846: [42158, 52757, 63902]
        }, f = {
          17523: ["default", "./tina", 25136],
          26398: ["default", "./helpers", 99466],
          28089: ["default", "./helpers/uploads", 99466],
          31879: ["default", "./index", 25136],
          33809: ["default", "./ui", 99466],
          40207: ["default", "./index", 60404],
          42158: ["default", "./providers", 92969],
          42756: ["default", "./index", 92969],
          52757: ["default", "./providers", 60404],
          55140: ["default", "./properties", 99466],
          58407: ["default", "./index", 61024],
          63902: ["default", "./index", 49787],
          73379: ["default", "./functions", 92969],
          74401: ["default", "./index", 99466],
          78417: ["default", "./operations/fragments/paging.graphql", 61024],
          90588: ["default", "./operations/fragments/newswire-post.graphql", 61024],
          94566: ["default", "./messages", 49787]
        }, b.f.remotes = (e, t) => {
          b.o(i, e) && i[e].forEach((e => {
            var r = b.R;
            r || (r = []);
            var a = f[e];
            if (!(r.indexOf(a) >= 0)) {
              if (r.push(a), a.p) return t.push(a.p);
              var o = t => {
                  t || (t = new Error("Container missing")), "string" == typeof t.message && (t.message += '\nwhile loading "' + a[1] + '" from ' + a[2]), b.m[e] = () => {
                    throw t
                  }, a.p = 0
                },
                n = (e, r, n, d, s, c) => {
                  try {
                    var i = e(r, n);
                    if (!i || !i.then) return s(i, d, c);
                    var f = i.then((e => s(e, d)), o);
                    if (!c) return f;
                    t.push(a.p = f)
                  } catch (e) {
                    o(e)
                  }
                },
                d = (e, t, o) => n(t.get, a[1], r, 0, s, o),
                s = t => {
                  a.p = 1, b.m[e] = e => {
                    e.exports = t()
                  }
                };
              n(b, a[2], 0, 0, ((e, t, r) => e ? n(b.I, a[0], 0, e, d, r) : o()), 1)
            }
          }))
        }, (() => {
          b.S = {};
          var e = {},
            t = {};
          b.I = (r, a) => {
            a || (a = []);
            var o = t[r];
            if (o || (o = t[r] = {}), !(a.indexOf(o) >= 0)) {
              if (a.push(o), e[r]) return e[r];
              b.o(b.S, r) || (b.S[r] = {});
              var n = b.S[r],
                d = "@rockstargames/sites-legacy",
                s = (e, t, r, a) => {
                  var o = n[e] = n[e] || {},
                    s = o[t];
                  (!s || !s.loaded && (!a != !s.eager ? a : d > s.from)) && (o[t] = {
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
                    var o = b(e);
                    if (!o) return;
                    var n = e => e && e.init && e.init(b.S[r], a);
                    if (o.then) return i.push(o.then(n, t));
                    var d = n(o);
                    if (d && d.then) return i.push(d.catch(t))
                  } catch (e) {
                    t(e)
                  }
                },
                i = [];
              return "default" === r && (s("@rockstargames/locale-tools", "1.0.0", (() => Promise.all([b.e(66), b.e(403), b.e(143)]).then((() => () => b(24143))))), s("@rockstargames/modules-core-hero", "0.1.2", (() => Promise.all([b.e(403), b.e(747), b.e(626), b.e(581), b.e(862)]).then((() => () => b(86240))))), s("@rockstargames/modules-core-highlights", "0.0.2", (() => Promise.all([b.e(165), b.e(403), b.e(747), b.e(433), b.e(131)]).then((() => () => b(76131))))), s("focus-trap-react", "10.2.3", (() => Promise.all([b.e(588), b.e(403), b.e(516)]).then((() => () => b(57588))))), s("framer-motion", "10.16.4", (() => Promise.all([b.e(207), b.e(403)]).then((() => () => b(70588))))), s("framer-motion", "10.16.4", (() => Promise.all([b.e(177), b.e(403)]).then((() => () => b(96177))))), s("framer-motion", "7.10.3", (() => Promise.all([b.e(689), b.e(52), b.e(403)]).then((() => () => b(72052))))), s("framer-motion", "7.10.3", (() => Promise.all([b.e(689), b.e(774), b.e(403)]).then((() => () => b(51774))))), s("prop-types", "15.8.1", (() => b.e(977).then((() => () => b(37977))))), s("react-dom", "18.2.0", (() => Promise.all([b.e(533), b.e(403)]).then((() => () => b(47533))))), s("react-intersection-observer", "9.10.3", (() => Promise.all([b.e(403), b.e(486)]).then((() => () => b(66105))))), s("react-intersection-observer", "9.10.3", (() => Promise.all([b.e(403), b.e(354)]).then((() => () => b(83354))))), s("react-intersection-observer", "9.10.3", (() => Promise.all([b.e(403), b.e(300)]).then((() => () => b(300))))), s("react-router-dom", "6.17.0", (() => Promise.all([b.e(105), b.e(8), b.e(403)]).then((() => () => b(76008))))), s("react-router-dom", "6.17.0", (() => Promise.all([b.e(105), b.e(171), b.e(403)]).then((() => () => b(31171))))), s("react", "18.2.0", (() => b.e(380).then((() => () => b(23380))))), c(60404), c(99466), c(92969), c(61024), c(49787), c(25136)), i.length ? e[r] = Promise.all(i).then((() => e[r] = 1)) : e[r] = 1
            }
          }
        })(), (() => {
          var e;
          b.g.importScripts && (e = b.g.location + "");
          var t = b.g.document;
          if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
            var r = t.getElementsByTagName("script");
            if (r.length)
              for (var a = r.length - 1; a > -1 && (!e || !/^http(s?):/.test(e));) e = r[a--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), b.p = e
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
                for (var d = 0, s = 1, c = !0;; s++, d++) {
                  var i, f, l = s < r.length ? (typeof r[s])[0] : "";
                  if (d >= a.length || "o" == (f = (typeof(i = a[d]))[0])) return !c || ("u" == l ? s > o && !n : "" == l != n);
                  if ("u" == f) {
                    if (!c || "u" != l) return !1
                  } else if (c)
                    if (l == f)
                      if (s <= o) {
                        if (i != r[s]) return !1
                      } else {
                        if (n ? i > r[s] : i < r[s]) return !1;
                        i != r[s] && (c = !1)
                      }
                  else if ("s" != l && "n" != l) {
                    if (n || s <= o) return !1;
                    c = !1, s--
                  } else {
                    if (s <= o || f < l != n) return !1;
                    c = !1
                  } else "s" != l && "n" != l && (c = !1, s--)
                }
              }
              var u = [],
                b = u.pop.bind(u);
              for (d = 1; d < r.length; d++) {
                var h = r[d];
                u.push(1 == h ? b() | b() : 2 == h ? b() & b() : h ? t(h, a) : !b())
              }
              return !!b()
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
                    s = (typeof d)[0];
                  if (n != s) return "o" == n && "n" == s || "s" == s || "u" == n;
                  if ("o" != n && "u" != n && o != d) return o < d;
                  a++
                }
              })(r, a) ? r : a), 0)) && n[a]
            },
            a = (e => function(t, r, a, o) {
              var n = b.I(t);
              return n && n.then ? n.then(e.bind(e, t, b.S[t], r, a, o)) : e(t, b.S[t], r, a, o)
            })(((e, t, a, o, n) => {
              var d = t && b.o(t, a) && r(t, a, o);
              return d ? (e => (e.loaded = 1, e.get()))(d) : n()
            })),
            o = {},
            n = {
              71403: () => a("default", "react", [1, 18, 2, 0], (() => b.e(380).then((() => () => b(23380))))),
              96717: () => a("default", "@rockstargames/locale-tools", [1, "workspace:*"], (() => Promise.all([b.e(66), b.e(524)]).then((() => () => b(24143))))),
              89779: () => a("default", "react-router-dom", [1, 6, 11, 2], (() => Promise.all([b.e(105), b.e(8)]).then((() => () => b(76008))))),
              39516: () => a("default", "prop-types", [1, 15, 8, 1], (() => b.e(977).then((() => () => b(37977))))),
              7117: () => a("default", "focus-trap-react", [1, 10, 2, 3], (() => b.e(588).then((() => () => b(57588))))),
              13953: () => a("default", "framer-motion", [1, 10, 12, 18], (() => b.e(177).then((() => () => b(96177))))),
              17891: () => a("default", "@rockstargames/modules-core-highlights", [1, "workspace:*"], (() => Promise.all([b.e(433), b.e(512)]).then((() => () => b(76131))))),
              25076: () => a("default", "react-router-dom", [1, 6, 11, 2], (() => Promise.all([b.e(105), b.e(171)]).then((() => () => b(31171))))),
              49948: () => a("default", "react-intersection-observer", [1, 9, 10, 3], (() => b.e(919).then((() => () => b(300))))),
              66335: () => a("default", "@rockstargames/modules-core-hero", [1, "workspace:*"], (() => b.e(4).then((() => () => b(86240))))),
              70834: () => a("default", "react-intersection-observer", [1, 9, 10, 3], (() => b.e(973).then((() => () => b(83354))))),
              79493: () => a("default", "react-dom", [1, 18, 2, 0], (() => b.e(533).then((() => () => b(47533))))),
              80791: () => a("default", "framer-motion", [1, 10, 12, 18], (() => b.e(774).then((() => () => b(51774))))),
              40581: () => a("default", "framer-motion", [1, 10, 12, 18], (() => Promise.all([b.e(689), b.e(52)]).then((() => () => b(72052))))),
              174: () => a("default", "framer-motion", [1, 10, 12, 18], (() => b.e(207).then((() => () => b(70588))))),
              59217: () => a("default", "react-intersection-observer", [1, 9, 10, 3], (() => b.e(867).then((() => () => b(66105)))))
            },
            d = {
              4: [40581],
              393: [7117, 13953, 17891, 25076, 49948, 66335, 70834, 79493, 80791],
              403: [71403],
              433: [174, 59217],
              516: [39516],
              581: [40581],
              626: [89779],
              747: [96717]
            },
            s = {};
          b.f.consumes = (e, t) => {
            b.o(d, e) && d[e].forEach((e => {
              if (b.o(o, e)) return t.push(o[e]);
              if (!s[e]) {
                var r = t => {
                  o[e] = 0, b.m[e] = r => {
                    delete b.c[e], r.exports = t()
                  }
                };
                s[e] = !0;
                var a = t => {
                  delete o[e], b.m[e] = r => {
                    throw delete b.c[e], t
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
              106: 0
            };
            b.f.miniCss = (t, r) => {
              e[t] ? r.push(e[t]) : 0 !== e[t] && {
                4: 1,
                393: 1,
                433: 1,
                846: 1,
                861: 1,
                862: 1,
                969: 1
              } [t] && r.push(e[t] = (e => new Promise(((t, r) => {
                var a = b.miniCssF(e),
                  o = b.p + a;
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
                        s = r && r.target && r.target.href || t,
                        c = new Error("Loading CSS chunk " + e + " failed.\n(" + s + ")");
                      c.code = "CSS_CHUNK_LOAD_FAILED", c.type = d, c.request = s, n.parentNode && n.parentNode.removeChild(n), o(c)
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
            106: 0
          };
          b.f.j = (t, r) => {
            var a = b.o(e, t) ? e[t] : void 0;
            if (0 !== a)
              if (a) r.push(a[2]);
              else if (/^(403|433|516|581|747)$/.test(t)) e[t] = 0;
            else {
              var o = new Promise(((r, o) => a = e[t] = [r, o]));
              r.push(a[2] = o);
              var n = b.p + b.u(t),
                d = new Error;
              b.l(n, (r => {
                if (b.o(e, t) && (0 !== (a = e[t]) && (e[t] = void 0), a)) {
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
                s = r[2],
                c = 0;
              if (n.some((t => 0 !== e[t]))) {
                for (a in d) b.o(d, a) && (b.m[a] = d[a]);
                s && s(b)
              }
              for (t && t(r); c < n.length; c++) o = n[c], b.o(e, o) && e[o] && e[o][0](), e[o] = 0
            },
            r = self.webpackChunk_rockstargames_sites_legacy = self.webpackChunk_rockstargames_sites_legacy || [];
          r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
        })(), b.nc = void 0, b(32160), b(29501)
      })())
    }
  }
}));