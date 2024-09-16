! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "7c58a821-2298-4d21-92ee-b274dd3755b0", e._sentryDebugIdIdentifier = "sentry-dbid-7c58a821-2298-4d21-92ee-b274dd3755b0")
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
    f = {};
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
        d[t] = e[t]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(t) {
        f[t] = e[t]
      }))
    }],
    execute: function() {
      e((() => {
        var e, s, c, i, l = {
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
                  "./bootstrap": () => Promise.all([r.e(689), r.e(165), r.e(821), r.e(852), r.e(403), r.e(747), r.e(407), r.e(516), r.e(264), r.e(775), r.e(846)]).then((() => () => r(12846))),
                  "./index": () => Promise.all([r.e(689), r.e(165), r.e(821), r.e(403), r.e(747), r.e(407), r.e(516), r.e(264), r.e(775), r.e(179)]).then((() => () => r(28179))),
                  "./site-routes/Bully": () => Promise.all([r.e(689), r.e(165), r.e(821), r.e(855), r.e(403), r.e(747), r.e(407), r.e(516), r.e(264), r.e(775), r.e(700), r.e(389), r.e(969)]).then((() => () => r(74969))),
                  "./site-routes/RedDeadRedemption": () => Promise.all([r.e(689), r.e(165), r.e(821), r.e(855), r.e(403), r.e(747), r.e(407), r.e(516), r.e(264), r.e(775), r.e(700), r.e(389), r.e(861)]).then((() => () => r(92861))),
                  "./tina": () => Promise.all([r.e(689), r.e(165), r.e(821), r.e(403), r.e(747), r.e(407), r.e(516), r.e(264), r.e(775), r.e(389), r.e(556)]).then((() => () => r(51389)))
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
              e.exports = f
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
          4: "cdde7e084db41c9e4738bace9d3b9748",
          8: "ef3d5813e037f6eda1cc892a241dc88d",
          52: "a6f6c650c1b57a7c509d46600387411f",
          66: "879a51031e16f30997be454cfe6cce5b",
          105: "99d3e9a45e3175c609cc844140b95a52",
          131: "88259eae754b3c37e1131ce716b73e57",
          143: "d351e08f9757ac8156809f358201893d",
          165: "c71bdd82dd12d8ad3f2ecd1f413890e5",
          171: "a56b42160b01783be8b31d804c006f53",
          177: "8f2f78f542efd8f68f673b5c84afb57a",
          179: "4e5ff0a055e5c397cacd6982a139137f",
          207: "a9462451d6fd13aaefe46a376b5ec7fe",
          226: "b14114a258b03dd34a6f3c79de373ce2",
          264: "977e7f8ebc9306875d328fa9ff6cce05",
          300: "463136bfd2e87da1b22045234d3336c6",
          354: "fb7c96295eed0265e2faa7579f679c8b",
          380: "85f6d7859532b5390f223bea528b4b62",
          389: "acc6068600a7566dcfddcc9b302695cb",
          396: "984755461a2f32727de54cde7720f808",
          403: "e1af37c3416a76bceb3ed283ad101177",
          407: "70e01d3e61c2caa07d97d920409473d6",
          433: "261937838d245dcfac60c4518b641536",
          455: "f984d17554f95fdf9743085de88e472d",
          486: "0da1f037c8fb5b971325a20781eeb826",
          512: "e0c8e5b891fe21046028c688cf793f43",
          516: "5e4e10f5582f145a69c4720c01953538",
          524: "90937fe21ac0ed8e108cc11805d73c5a",
          533: "8fc599861911c130175900e5ff96ecf1",
          556: "7693d0447eb0a81b342d902a3d5e3dd7",
          581: "08b3489d0268571641a8b85a8594f8ba",
          588: "99aa656c25d0bea2be12a76183625c37",
          637: "9d005484d40823788bd6fc33a921f2b2",
          689: "f97701b74b285ba2b0d3aad47b26649c",
          700: "2f216d3a9001c188eae781134fb763f9",
          747: "880280ada80bcf22435c0607eb5e09bd",
          774: "1820feaf601e6e52f007c7617c14c6b4",
          775: "626abe2196e243953ad5b79b79be7932",
          821: "0bc355b00aea157cced9899633b9ce85",
          846: "08214678b58352fe0c8dad75942f0ca1",
          852: "dc26f7fa1fda5aab13154cb54e8ef772",
          855: "88043535275eb301bf2deafd1237dced",
          861: "8d0658d62c15f62cef99cb814e0f24ef",
          867: "d42b7f74f166aa6d5fe504c578dabdb6",
          919: "053eecf1ee1c3bf2f0b0959fc6db6243",
          969: "949b1e54d90bad1043c862c6b08af2e2",
          973: "57267b08e70be0b275e6e1f8dc78a6a0",
          977: "fc8a5e862bcbb976232b1dbbe6fccaa3"
        } [e] + ".js", b.miniCssF = e => "css/" + {
          4: "c23539512bf948a9d4eeb6f443be1d16",
          226: "7d73eb7b17b2921205b182148be151d1",
          264: "2b8837cfbf5943bc8e5a7c7e599bc2be",
          433: "66cd962a3eb964395328270c11ae3827",
          556: "d4ec94804b933f4dba6d4ea9b28a8f2f",
          637: "85ec8652f77102f3e5e67020301acc8f",
          700: "70c2eb046051d2a0c71f5572b4ffc990",
          775: "36086fd244eca88ee5b2ca20a9e9af2a",
          846: "32af9d0c26e64e23edfa1eb3071ff9c6",
          861: "916e74d8d50f64d8f556da06d20283dd",
          969: "916e74d8d50f64d8f556da06d20283dd"
        } [e] + ".css", b.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), b.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), e = {}, s = "@rockstargames/sites-legacy:", b.l = (t, r, a, o) => {
          if (e[t]) e[t].push(r);
          else {
            var n, d;
            if (void 0 !== a)
              for (var f = document.getElementsByTagName("script"), c = 0; c < f.length; c++) {
                var i = f[c];
                if (i.getAttribute("src") == t || i.getAttribute("data-webpack") == s + a) {
                  n = i;
                  break
                }
              }
            n || (d = !0, (n = document.createElement("script")).charset = "utf-8", n.timeout = 120, b.nc && n.setAttribute("nonce", b.nc), n.setAttribute("data-webpack", s + a), n.src = t), e[t] = [r];
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
        }, b.nmd = e => (e.paths = [], e.children || (e.children = []), e), c = {
          226: [78417, 90588],
          264: [26398, 28089, 58407],
          389: [17523, 33809],
          396: [70396],
          407: [42756],
          747: [40207, 74401],
          775: [31879, 55140, 73379, 94566],
          846: [42158, 52757, 63902]
        }, i = {
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
          70396: ["default", "./hooks", 92969],
          73379: ["default", "./functions", 92969],
          74401: ["default", "./index", 99466],
          78417: ["default", "./operations/fragments/paging.graphql", 61024],
          90588: ["default", "./operations/fragments/newswire-post.graphql", 61024],
          94566: ["default", "./messages", 49787]
        }, b.f.remotes = (e, t) => {
          b.o(c, e) && c[e].forEach((e => {
            var r = b.R;
            r || (r = []);
            var a = i[e];
            if (!(r.indexOf(a) >= 0)) {
              if (r.push(a), a.p) return t.push(a.p);
              var o = t => {
                  t || (t = new Error("Container missing")), "string" == typeof t.message && (t.message += '\nwhile loading "' + a[1] + '" from ' + a[2]), b.m[e] = () => {
                    throw t
                  }, a.p = 0
                },
                n = (e, r, n, d, f, s) => {
                  try {
                    var c = e(r, n);
                    if (!c || !c.then) return f(c, d, s);
                    var i = c.then((e => f(e, d)), o);
                    if (!s) return i;
                    t.push(a.p = i)
                  } catch (e) {
                    o(e)
                  }
                },
                d = (e, t, o) => n(t.get, a[1], r, 0, f, o),
                f = t => {
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
                f = (e, t, r, a) => {
                  var o = n[e] = n[e] || {},
                    f = o[t];
                  (!f || !f.loaded && (!a != !f.eager ? a : d > f.from)) && (o[t] = {
                    get: r,
                    from: d,
                    eager: !!a
                  })
                },
                s = e => {
                  var t = e => {
                    return t = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(t));
                    var t
                  };
                  try {
                    var o = b(e);
                    if (!o) return;
                    var n = e => e && e.init && e.init(b.S[r], a);
                    if (o.then) return c.push(o.then(n, t));
                    var d = n(o);
                    if (d && d.then) return c.push(d.catch(t))
                  } catch (e) {
                    t(e)
                  }
                },
                c = [];
              return "default" === r && (f("@rockstargames/components", "1.14.0", (() => Promise.all([b.e(689), b.e(165), b.e(821), b.e(855), b.e(455), b.e(403), b.e(747), b.e(407), b.e(516), b.e(264), b.e(700), b.e(226)]).then((() => () => b(55226))))), f("@rockstargames/locale-tools", "1.0.0", (() => Promise.all([b.e(66), b.e(403), b.e(396), b.e(143)]).then((() => () => b(24143))))), f("@rockstargames/modules-core-hero", "0.1.2", (() => Promise.all([b.e(403), b.e(747), b.e(407), b.e(581), b.e(637)]).then((() => () => b(86240))))), f("@rockstargames/modules-core-highlights", "0.0.2", (() => Promise.all([b.e(165), b.e(403), b.e(747), b.e(433), b.e(131)]).then((() => () => b(76131))))), f("focus-trap-react", "10.2.3", (() => Promise.all([b.e(588), b.e(403), b.e(516)]).then((() => () => b(57588))))), f("framer-motion", "10.16.4", (() => Promise.all([b.e(207), b.e(403)]).then((() => () => b(70588))))), f("framer-motion", "10.16.4", (() => Promise.all([b.e(177), b.e(403)]).then((() => () => b(96177))))), f("framer-motion", "7.10.3", (() => Promise.all([b.e(689), b.e(52), b.e(403)]).then((() => () => b(72052))))), f("framer-motion", "7.10.3", (() => Promise.all([b.e(689), b.e(774), b.e(403)]).then((() => () => b(51774))))), f("prop-types", "15.8.1", (() => b.e(977).then((() => () => b(37977))))), f("react-dom", "18.2.0", (() => Promise.all([b.e(533), b.e(403)]).then((() => () => b(47533))))), f("react-intersection-observer", "9.10.3", (() => Promise.all([b.e(403), b.e(486)]).then((() => () => b(66105))))), f("react-intersection-observer", "9.10.3", (() => Promise.all([b.e(403), b.e(354)]).then((() => () => b(83354))))), f("react-intersection-observer", "9.10.3", (() => Promise.all([b.e(403), b.e(300)]).then((() => () => b(300))))), f("react-router-dom", "6.17.0", (() => Promise.all([b.e(105), b.e(8), b.e(403)]).then((() => () => b(76008))))), f("react-router-dom", "6.17.0", (() => Promise.all([b.e(105), b.e(171), b.e(403)]).then((() => () => b(31171))))), f("react", "18.2.0", (() => b.e(380).then((() => () => b(23380))))), s(60404), s(99466), s(92969), s(61024), s(49787), s(25136)), c.length ? e[r] = Promise.all(c).then((() => e[r] = 1)) : e[r] = 1
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
                for (var d = 0, f = 1, s = !0;; f++, d++) {
                  var c, i, l = f < r.length ? (typeof r[f])[0] : "";
                  if (d >= a.length || "o" == (i = (typeof(c = a[d]))[0])) return !s || ("u" == l ? f > o && !n : "" == l != n);
                  if ("u" == i) {
                    if (!s || "u" != l) return !1
                  } else if (s)
                    if (l == i)
                      if (f <= o) {
                        if (c != r[f]) return !1
                      } else {
                        if (n ? c > r[f] : c < r[f]) return !1;
                        c != r[f] && (s = !1)
                      }
                  else if ("s" != l && "n" != l) {
                    if (n || f <= o) return !1;
                    s = !1, f--
                  } else {
                    if (f <= o || i < l != n) return !1;
                    s = !1
                  } else "s" != l && "n" != l && (s = !1, f--)
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
                    f = (typeof d)[0];
                  if (n != f) return "o" == n && "n" == f || "s" == f || "u" == n;
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
              96717: () => a("default", "@rockstargames/locale-tools", [1, "workspace:*"], (() => Promise.all([b.e(66), b.e(396), b.e(524)]).then((() => () => b(24143))))),
              89779: () => a("default", "react-router-dom", [1, 6, 11, 2], (() => Promise.all([b.e(105), b.e(8)]).then((() => () => b(76008))))),
              39516: () => a("default", "prop-types", [1, 15, 8, 1], (() => b.e(977).then((() => () => b(37977))))),
              49948: () => a("default", "react-intersection-observer", [1, 9, 10, 3], (() => b.e(919).then((() => () => b(300))))),
              79493: () => a("default", "react-dom", [1, 18, 2, 0], (() => b.e(533).then((() => () => b(47533))))),
              80791: () => a("default", "framer-motion", [1, 10, 12, 18], (() => b.e(774).then((() => () => b(51774))))),
              7117: () => a("default", "focus-trap-react", [1, 10, 2, 3], (() => b.e(588).then((() => () => b(57588))))),
              13953: () => a("default", "framer-motion", [1, 10, 12, 18], (() => b.e(177).then((() => () => b(96177))))),
              17891: () => a("default", "@rockstargames/modules-core-highlights", [1, "workspace:*"], (() => Promise.all([b.e(433), b.e(512)]).then((() => () => b(76131))))),
              20009: () => a("default", "@rockstargames/components", [1, "workspace:*"], (() => Promise.all([b.e(855), b.e(455), b.e(700), b.e(226)]).then((() => () => b(55226))))),
              25076: () => a("default", "react-router-dom", [1, 6, 11, 2], (() => Promise.all([b.e(105), b.e(171)]).then((() => () => b(31171))))),
              66335: () => a("default", "@rockstargames/modules-core-hero", [1, "workspace:*"], (() => b.e(4).then((() => () => b(86240))))),
              70834: () => a("default", "react-intersection-observer", [1, 9, 10, 3], (() => b.e(973).then((() => () => b(83354))))),
              40581: () => a("default", "framer-motion", [1, 10, 12, 18], (() => Promise.all([b.e(689), b.e(52)]).then((() => () => b(72052))))),
              174: () => a("default", "framer-motion", [1, 10, 12, 18], (() => b.e(207).then((() => () => b(70588))))),
              59217: () => a("default", "react-intersection-observer", [1, 9, 10, 3], (() => b.e(867).then((() => () => b(66105)))))
            },
            d = {
              4: [40581],
              264: [49948, 79493, 80791],
              403: [71403],
              407: [89779],
              433: [174, 59217],
              516: [39516],
              581: [40581],
              747: [96717],
              775: [7117, 13953, 17891, 20009, 25076, 66335, 70834]
            },
            f = {};
          b.f.consumes = (e, t) => {
            b.o(d, e) && d[e].forEach((e => {
              if (b.o(o, e)) return t.push(o[e]);
              if (!f[e]) {
                var r = t => {
                  o[e] = 0, b.m[e] = r => {
                    delete b.c[e], r.exports = t()
                  }
                };
                f[e] = !0;
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
                226: 1,
                264: 1,
                433: 1,
                556: 1,
                637: 1,
                700: 1,
                775: 1,
                846: 1,
                861: 1,
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
                        f = r && r.target && r.target.href || t,
                        s = new Error("Loading CSS chunk " + e + " failed.\n(" + f + ")");
                      s.code = "CSS_CHUNK_LOAD_FAILED", s.type = d, s.request = f, n.parentNode && n.parentNode.removeChild(n), o(s)
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
              else if (/^(5(16|56|81)|396|403|433|700|747)$/.test(t)) e[t] = 0;
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
                f = r[2],
                s = 0;
              if (n.some((t => 0 !== e[t]))) {
                for (a in d) b.o(d, a) && (b.m[a] = d[a]);
                f && f(b)
              }
              for (t && t(r); s < n.length; s++) o = n[s], b.o(e, o) && e[o] && e[o][0](), e[o] = 0
            },
            r = self.webpackChunk_rockstargames_sites_legacy = self.webpackChunk_rockstargames_sites_legacy || [];
          r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
        })(), b.nc = void 0, b(32160), b(29501)
      })())
    }
  }
}));