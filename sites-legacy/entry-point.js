try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "b08ce146-9741-4a93-b528-45efcd356ff0", e._sentryDebugIdIdentifier = "sentry-dbid-b08ce146-9741-4a93-b528-45efcd356ff0")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-legacy",
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
        var e = {
          89863(e, t, r) {
            (0, r(35039).w)(1)
          },
          35039(e, t, r) {
            const a = r(20103).y;
            t.w = function(e) {
              if (e || (e = 1), !r.y.meta || !r.y.meta.url) throw console.error("__system_context__", r.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
              r.p = a(r.y.meta.url, e)
            }
          },
          87732(e, t, r) {
            r(89863)
          },
          20103(e, t, r) {
            t.y = function(e, t) {
              var r = document.createElement("a");
              r.href = e;
              for (var a = "/" === r.pathname[0] ? r.pathname : "/" + r.pathname, n = 0, o = a.length; n !== t && o >= 0;) "/" === a[--o] && n++;
              if (n !== t) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + t + ") is greater than the number of directories (" + n + ") in the URL path " + e);
              var c = a.slice(0, o + 1);
              return r.protocol + "//" + r.host + c
            };
            Number.isInteger
          },
          54334(e, t, r) {
            "use strict";
            const a = {
                "./site-routes/Bully": () => Promise.all([r.e(3279), r.e(2194), r.e(761), r.e(3974), r.e(3262), r.e(428), r.e(3082), r.e(9225), r.e(3331), r.e(2909), r.e(4017), r.e(9653), r.e(2199), r.e(8950), r.e(2063), r.e(2285), r.e(821), r.e(9202)]).then(() => () => r(29202)),
                "./site-routes/RedDeadRedemption": () => Promise.all([r.e(3279), r.e(2194), r.e(761), r.e(3974), r.e(3262), r.e(428), r.e(3082), r.e(9225), r.e(3331), r.e(2909), r.e(4017), r.e(9653), r.e(2199), r.e(8950), r.e(2063), r.e(2285), r.e(821), r.e(9262)]).then(() => () => r(99262)),
                "./tina": () => Promise.all([r.e(3279), r.e(2194), r.e(761), r.e(3974), r.e(3262), r.e(428), r.e(3082), r.e(9225), r.e(3331), r.e(2909), r.e(4017), r.e(9653), r.e(2199), r.e(8950), r.e(2063), r.e(2285), r.e(821)]).then(() => () => r(69201))
              },
              n = (e, t) => (r.R = t, t = r.o(a, e) ? a[e]() : Promise.resolve().then(() => {
                throw new Error('Module "' + e + '" does not exist in container.')
              }), r.R = void 0, t),
              o = (e, t) => {
                if (!r.S) return;
                const a = "default",
                  n = r.S[a];
                if (n && n !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                return r.S[a] = e, r.I(a, t)
              };
            r.d(t, {
              get: () => n,
              init: () => o
            })
          },
          25136(e) {
            "use strict";
            e.exports = r
          }
        };
        const a = {};

        function n(t) {
          const r = a[t];
          if (void 0 !== r) return r.exports;
          const o = a[t] = {
            id: t,
            loaded: !1,
            exports: {}
          };
          return e[t].call(o.exports, o, o.exports, n), o.loaded = !0, o.exports
        }
        return n.m = e, n.c = a, n.y = t, n.amdO = {}, n.n = e => {
          const t = e && e.__esModule ? () => e.default : () => e;
          return n.d(t, {
            a: t
          }), t
        }, (() => {
          const e = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__;
          let t;
          n.t = function(r, a) {
            if (1 & a && (r = this(r)), 8 & a) return r;
            if ("object" == typeof r && r) {
              if (4 & a && r.__esModule) return r;
              if (16 & a && "function" == typeof r.then) return r
            }
            const o = Object.create(null);
            n.r(o);
            const c = {};
            t = t || [null, e({}), e([]), e(e)];
            for (var d = 2 & a && r;
              ("object" == typeof d || "function" == typeof d) && !~t.indexOf(d); d = e(d)) Object.getOwnPropertyNames(d).forEach(e => c[e] = () => r[e]);
            return c.default = () => r, n.d(o, c), o
          }
        })(), n.d = (e, t) => {
          if (Array.isArray(t))
            for (var r = 0; r < t.length;) {
              var a = t[r++],
                o = t[r++];
              n.o(e, a) ? 0 === o && r++ : 0 === o ? Object.defineProperty(e, a, {
                enumerable: !0,
                value: t[r++]
              }) : Object.defineProperty(e, a, {
                enumerable: !0,
                get: o
              })
            } else
              for (var a in t) n.o(t, a) && !n.o(e, a) && Object.defineProperty(e, a, {
                enumerable: !0,
                get: t[a]
              })
        }, n.f = {}, n.e = e => Promise.all(Object.keys(n.f).reduce((t, r) => (n.f[r](e, t), t), [])), n.u = e => "js/" + {
          162: "883c8cbe25ab654a5c10931e052aeef0",
          195: "0b83c0776eaf06e5b49c0c8fc0d4d563",
          323: "5de8fa264d60e6849972fe01b4a7ea65",
          331: "762925c524e3dd2ab03c1e6405050452",
          428: "7239af25daa8df15145ad2295a201b91",
          754: "e7f30e4ca68ac80307087fc52830e44a",
          761: "ffc89164072c5df1a857017dc5fb82db",
          821: "0971c402c1821840e742d10294bd4312",
          860: "f71fb367097c65854e07f2b0994abcf5",
          925: "5e30cdfc950a918151393cab16e9a7ac",
          1116: "54b7836e1b343bea2ecf1c8a1fb5c05a",
          1376: "ca8a3c50e5cec9906076f3342529649d",
          1519: "af661f78e39f1c47c1a826b71d4c1b5e",
          1933: "bd4fbca94f84a6544b4e5f4765f94034",
          2063: "bba9be5dfdff1af75a15347110c6199e",
          2194: "1fd86ca283c16f376ff42c0ab3496d74",
          2244: "c49bbfad0cc246580fdbcff841341cd6",
          2581: "858e8415b67fef3a935356c0d9f3f3e8",
          2704: "33d139d036b269c7e47bc421962c96d9",
          2741: "17dffee421227f9623afa06847de6636",
          3262: "8c8dfedc0285c6a6cc461da1abcf070e",
          3279: "2fada283bdfdcf38ee8d2070e98bb22d",
          3622: "33859f49d84fbf01f3eae039fe9e8374",
          3656: "db8da48839c9ac19e53a117f0e116243",
          3939: "8677dbec155c4d34e700950e0d08dfb4",
          3974: "286f11cecac0505169d7d8f4773f1235",
          4047: "3b74160d2ae67b041018874240a30082",
          4143: "e4c23d9b03752ebe2b1def39b2e9de3b",
          4314: "cd3be0b776177fe6eba564deef854a85",
          4421: "c21cf89da47b0cecb6366e220a2c2bd4",
          4514: "2e689644cfda6ca40c0dc40ceb8f34ec",
          4874: "e5c067c4a2d83ccf232c1e11e67adafd",
          4921: "4c567611712cedbe429346214cb89e69",
          5073: "e25b7e5133b156b54a66ffc179880c5e",
          5897: "23e295bd0c1905604217ca0d9c31cd2b",
          6320: "79399177a3c43439acf918a806847426",
          6406: "15cd47c5b64dc51814624075bd5a3e62",
          6469: "28404c4be3fa494f67866c94ec4b8622",
          6701: "02ad1b2c9fbd172234d4ff2466ea7f2b",
          6739: "0fe9970403fafe5de669f9bd0c92aacd",
          6918: "a1d7d2999067aff67423c3b428a715c0",
          7302: "273d2c3924f6dbd47c6661cf508e2c1a",
          7419: "80a8c0a34e10b5ee249197f3abee701f",
          7471: "416ee2e291acf78c6f8edc529e5a9ad0",
          8268: "a9709dc88d9a77a92e1e8debe77d16f5",
          8278: "39b2cf280da51eb14acb0d54c2b30dea",
          8553: "c47003efa406c47b77ee04b6f65493a0",
          8775: "b1488d26172fcef99e3ac5f99d891ab0",
          8898: "30cf45f1dd1b659064ce6910cdca25f8",
          9079: "27c121b58b2617f85d58f2b88f2813e0",
          9202: "1562d0e10389707d99139948311fbcc6",
          9262: "64b9b983c0a5267530a0f2fb83d0354f",
          9793: "6a452ff7a4d744851d6f7d7124f2d731",
          9860: "076949561b7a422f5a28659a488be933"
        } [e] + ".js", n.miniCssF = e => "css/" + {
          428: "25dac1e428d6d7ff44e453e576b4f40f",
          821: "8a93c2048a4bb11b659371959f96682a",
          2244: "b3313fda99862d6d64bd2a829ae71ca3",
          3115: "82b8e41eb90eae7db3adfb9fff54d045",
          7302: "01fd4a1b7dcafeb5ed7fca9004268171",
          7419: "82b8e41eb90eae7db3adfb9fff54d045",
          9202: "52e55b769351b6e3f1602fe5d2baacd1",
          9262: "52e55b769351b6e3f1602fe5d2baacd1",
          9633: "018cfd7a9af327fe52bcb5c886489c3c"
        } [e] + ".css", n.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), (() => {
          const e = {},
            t = "@rockstargames/sites-legacy:";
          n.l = (r, a, o, c) => {
            if (e[r]) return void e[r].push(a);
            let d, f;
            if (void 0 !== o) {
              const e = document.getElementsByTagName("script");
              for (var s = 0; s < e.length; s++) {
                const a = e[s];
                if (a.getAttribute("src") == r || a.getAttribute("data-webpack") == t + o) {
                  d = a;
                  break
                }
              }
            }
            d || (f = !0, d = document.createElement("script"), d.charset = "utf-8", n.nc && d.setAttribute("nonce", n.nc), d.setAttribute("data-webpack", t + o), d.src = r), e[r] = [a];
            const i = (t, a) => {
                d.onerror = d.onload = null, clearTimeout(l);
                const n = e[r];
                if (delete e[r], d.parentNode?.removeChild(d), n?.forEach(e => e(a)), t) return t(a)
              },
              l = setTimeout(i.bind(null, void 0, {
                type: "timeout",
                target: d
              }), 12e4);
            d.onerror = i.bind(null, d.onerror), d.onload = i.bind(null, d.onload), f && document.head.appendChild(d)
          }
        })(), n.r = e => {
          Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, n.nmd = e => (e.paths = [], e.children || (e.children = []), e), (() => {
          const e = {
              821: [31879]
            },
            t = {
              31879: ["default", "./index", 25136]
            };
          n.f.remotes = (r, a) => {
            n.o(e, r) && e[r].forEach(e => {
              let r = n.R;
              r || (r = []);
              const o = t[e];
              if (r.indexOf(o) >= 0) return;
              if (r.push(o), o.p) return a.push(o.p);
              const c = t => {
                  t || (t = new Error("Container missing")), "string" == typeof t.message && (t.message += '\nwhile loading "' + o[1] + '" from ' + o[2]), n.m[e] = () => {
                    throw t
                  }, o.p = 0
                },
                d = (e, t, r, n, d, f) => {
                  try {
                    const s = e(t, r);
                    if (!s?.then) return d(s, n, f); {
                      const e = s.then(e => d(e, n), c);
                      if (!f) return e;
                      a.push(o.p = e)
                    }
                  } catch (e) {
                    c(e)
                  }
                },
                f = (e, t, a) => d(t.get, o[1], r, 0, s, a),
                s = t => {
                  o.p = 1, n.m[e] = e => {
                    e.exports = t()
                  }
                };
              d(n, o[2], 0, 0, (e, t, r) => e ? d(n.I, o[0], 0, e, f, r) : c(), 1)
            })
          }
        })(), (() => {
          n.S = {};
          const e = {},
            t = {};
          n.I = (r, a) => {
            a || (a = []);
            let o = t[r];
            if (o || (o = t[r] = {}), a.indexOf(o) >= 0) return;
            if (a.push(o), e[r]) return e[r];
            n.o(n.S, r) || (n.S[r] = {});
            const c = n.S[r],
              d = "@rockstargames/sites-legacy",
              f = (e, t, r, a) => {
                const n = c[e] = c[e] || {},
                  o = n[t];
                (!o || !o.loaded && (!a != !o.eager ? a : d > o.from)) && (n[t] = {
                  get: r,
                  from: d,
                  eager: !!a
                })
              },
              s = [];
            return "default" === r && (f("@rsgweb/locale-tools", "0.0.0", () => Promise.all([n.e(3279), n.e(2194), n.e(761), n.e(4874), n.e(3082), n.e(5897)]).then(() => () => n(65897))), f("@rsgweb/modules-core-hero", "0.0.0", () => Promise.all([n.e(3082), n.e(9225), n.e(3331), n.e(2909), n.e(2199), n.e(8950), n.e(2063), n.e(7302)]).then(() => () => n(29008))), f("@rsgweb/modules-core-highlights", "0.0.0", () => Promise.all([n.e(3262), n.e(3082), n.e(2909), n.e(2199), n.e(8950), n.e(2285), n.e(9633), n.e(1933)]).then(() => () => n(21933))), f("@rsgweb/rockstar-account", "0.0.0", () => Promise.all([n.e(3279), n.e(1116), n.e(6918), n.e(3082), n.e(9225), n.e(3331), n.e(2909), n.e(195), n.e(2704)]).then(() => () => n(323))), f("@rsgweb/tina", "0.0.0", () => Promise.all([n.e(3279), n.e(2194), n.e(3974), n.e(5073), n.e(925), n.e(3082), n.e(3331), n.e(2909), n.e(4017), n.e(9653), n.e(2199), n.e(6406), n.e(2741), n.e(7419)]).then(() => () => n(51145))), f("@rsgweb/utils", "0.0.0-development", () => Promise.all([n.e(3279), n.e(2194), n.e(1116), n.e(5073), n.e(9079), n.e(3082), n.e(9225), n.e(2909), n.e(195), n.e(6406), n.e(2054), n.e(4047)]).then(() => () => n(64047))), f("clsx", "2.1.1", () => n.e(4921).then(() => () => n(4921))), f("focus-trap-react", "10.3.1", () => Promise.all([n.e(4514), n.e(3082), n.e(9653)]).then(() => () => n(44514))), f("framer-motion", "12.42.2", () => Promise.all([n.e(6739), n.e(3082), n.e(9793)]).then(() => () => n(36739))), f("graphql", "16.14.2", () => n.e(1519).then(() => () => n(91519))), f("prop-types", "15.8.1", () => n.e(331).then(() => () => n(60331))), f("react-dom", "18.3.1", () => Promise.all([n.e(162), n.e(3082)]).then(() => () => n(30162))), f("react-intersection-observer", "9.16.0", () => Promise.all([n.e(3082), n.e(6320)]).then(() => () => n(26320))), f("react-router-dom", "6.30.4", () => Promise.all([n.e(9860), n.e(3082), n.e(4017)]).then(() => () => n(79860))), f("react", "18.3.1", () => n.e(2581).then(() => () => n(22581))), (e => {
              const t = e => {
                return t = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(t));
                var t
              };
              try {
                const o = n(e);
                if (!o) return;
                const c = e => e && e.init && e.init(n.S[r], a);
                if (o.then) return s.push(o.then(c, t));
                const d = c(o);
                if (d?.then) return s.push(d.catch(t))
              } catch (e) {
                t(e)
              }
            })(25136)), s.length ? e[r] = Promise.all(s).then(() => e[r] = 1) : e[r] = 1
          }
        })(), (() => {
          let e;
          n.g.importScripts && (e = n.g.location + "");
          const t = n.g.document;
          if (!e && t && ("SCRIPT" === t.currentScript?.tagName.toUpperCase() && (e = t.currentScript.src), !e)) {
            const r = t.getElementsByTagName("script");
            if (r.length) {
              let t = r.length - 1;
              for (; t > -1 && (!e || !/^http(s?):/.test(e));) e = r[t--].src
            }
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), n.p = e
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
                for (var n = 1, o = 1; o < e.length; o++) n--, a += "u" == (typeof(d = e[o]))[0] ? "-" : (n > 0 ? "." : "") + (n = 2, d);
                return a
              }
              var c = [];
              for (o = 1; o < e.length; o++) {
                var d = e[o];
                c.push(0 === d ? "not(" + f() + ")" : 1 === d ? "(" + f() + " || " + f() + ")" : 2 === d ? c.pop() + " " + c.pop() : t(d))
              }
              return f();

              function f() {
                return c.pop().replace(/^\((.+)\)$/, "$1")
              }
            },
            r = (t, a) => {
              if (0 in t) {
                a = e(a);
                var n = t[0],
                  o = n < 0;
                o && (n = -n - 1);
                for (var c = 0, d = 1, f = !0;; d++, c++) {
                  var s, i, l = d < t.length ? (typeof t[d])[0] : "";
                  if (c >= a.length || "o" == (i = (typeof(s = a[c]))[0])) return !f || ("u" == l ? d > n && !o : "" == l != o);
                  if ("u" == i) {
                    if (!f || "u" != l) return !1
                  } else if (f)
                    if (l == i)
                      if (d <= n) {
                        if (s != t[d]) return !1
                      } else {
                        if (o ? s > t[d] : s < t[d]) return !1;
                        s != t[d] && (f = !1)
                      }
                  else if ("s" != l && "n" != l) {
                    if (o || d <= n) return !1;
                    f = !1, d--
                  } else {
                    if (d <= n || i < l != o) return !1;
                    f = !1
                  } else "s" != l && "n" != l && (f = !1, d--)
                }
              }
              var u = [],
                b = u.pop.bind(u);
              for (c = 1; c < t.length; c++) {
                var h = t[c];
                u.push(1 == h ? b() | b() : 2 == h ? b() & b() : h ? r(h, a) : !b())
              }
              return !!b()
            };
          const a = (t, r, a) => {
              const n = a ? (e => Object.keys(e).reduce((t, r) => (e[r].eager && (t[r] = e[r]), t), {}))(t[r]) : t[r];
              return Object.keys(n).reduce((t, r) => !t || !n[t].loaded && ((t, r) => {
                t = e(t), r = e(r);
                for (var a = 0;;) {
                  if (a >= t.length) return a < r.length && "u" != (typeof r[a])[0];
                  var n = t[a],
                    o = (typeof n)[0];
                  if (a >= r.length) return "u" == o;
                  var c = r[a],
                    d = (typeof c)[0];
                  if (o != d) return "o" == o && "n" == d || "s" == d || "u" == o;
                  if ("o" != o && "u" != o && n != c) return n < c;
                  a++
                }
              })(t, r) ? r : t, 0)
            },
            o = (e, t, r) => r ? r() : ((e, t) => (e => {
              throw new Error(e)
            })("Shared module " + t + " doesn't exist in shared scope " + e))(e, t),
            c = (e => function(t, r, a, o, c) {
              const d = n.I(t);
              return d?.then && !a ? d.then(e.bind(e, t, n.S[t], r, !1, o, c)) : e(t, n.S[t], r, a, o, c)
            })((e, c, d, f, s, i) => {
              if (!((e, t) => e && n.o(e, t))(c, d)) return o(e, d, i);
              const l = a(c, d, f);
              return r(s, l) || (b = ((e, r, a, n) => "Unsatisfied version " + a + " from " + (a && e[r][a].from) + " of shared singleton module " + r + " (required " + t(n) + ")")(c, d, l, s), "undefined" != typeof console && console.warn && console.warn(b)), (u = c[d][l]).loaded = 1, u.get();
              var u, b
            }),
            d = {},
            f = {
              93082: () => c("default", "react", !1, [0], () => n.e(2581).then(() => () => n(22581))),
              99225: () => c("default", "react-router-dom", !1, [0], () => Promise.all([n.e(9860), n.e(4017)]).then(() => () => n(79860))),
              13331: () => c("default", "@rsgweb/utils", !1, [0], () => Promise.all([n.e(3279), n.e(2194), n.e(1116), n.e(5073), n.e(9079), n.e(9225), n.e(195), n.e(6406), n.e(860)]).then(() => () => n(64047))),
              42909: () => c("default", "@rsgweb/locale-tools", !1, [0], () => Promise.all([n.e(3279), n.e(2194), n.e(761), n.e(4874), n.e(8278)]).then(() => () => n(65897))),
              84017: () => c("default", "react-dom", !1, [1, 18, 2, 0], () => n.e(162).then(() => () => n(30162))),
              89653: () => c("default", "prop-types", !1, [1, 15, 8, 1], () => n.e(331).then(() => () => n(60331))),
              82199: () => c("default", "@rsgweb/rockstar-account", !1, [0], () => Promise.all([n.e(3279), n.e(1116), n.e(6918), n.e(9225), n.e(3331), n.e(195), n.e(323)]).then(() => () => n(323))),
              17301: () => c("default", "@rsgweb/tina", !1, [0], () => Promise.all([n.e(3279), n.e(2194), n.e(3974), n.e(5073), n.e(925), n.e(3331), n.e(4017), n.e(9653), n.e(6406), n.e(2741), n.e(3115)]).then(() => () => n(51145))),
              45266: () => c("default", "framer-motion", !1, [1, 12, 38, 0], () => n.e(6739).then(() => () => n(36739))),
              81270: () => c("default", "clsx", !1, [1, 2, 1, 1], () => n.e(4921).then(() => () => n(4921))),
              42285: () => c("default", "react-intersection-observer", !1, [1, 9, 16, 0], () => n.e(3939).then(() => () => n(26320))),
              10475: () => c("default", "@rsgweb/modules-core-highlights", !1, [0], () => Promise.all([n.e(9633), n.e(4314)]).then(() => () => n(21933))),
              79955: () => c("default", "focus-trap-react", !1, [1, 10, 3, 1], () => n.e(4514).then(() => () => n(44514))),
              97819: () => c("default", "@rsgweb/modules-core-hero", !1, [0], () => n.e(2244).then(() => () => n(29008))),
              32054: () => c("default", "graphql", !1, [0], () => n.e(1519).then(() => () => n(91519)))
            },
            s = {
              821: [10475, 79955, 97819],
              860: [32054],
              2054: [32054],
              2063: [81270],
              2199: [82199],
              2285: [42285],
              2909: [42909],
              3082: [93082],
              3331: [13331],
              4017: [84017],
              8950: [17301, 45266],
              9225: [99225],
              9653: [89653]
            },
            i = {};
          n.f.consumes = (e, t) => {
            n.o(s, e) && s[e].forEach(e => {
              if (n.o(d, e)) return t.push(d[e]);
              if (!i[e]) {
                const r = t => {
                  d[e] = 0, n.m[e] = r => {
                    delete n.c[e], r.exports = t()
                  }
                };
                i[e] = !0;
                const a = t => {
                  delete d[e], n.m[e] = r => {
                    throw delete n.c[e], t
                  }
                };
                try {
                  const n = f[e]();
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
              8106: 0
            };
            n.f.miniCss = (t, r) => {
              e[t] ? r.push(e[t]) : 0 !== e[t] && {
                428: 1,
                821: 1,
                2244: 1,
                3115: 1,
                7302: 1,
                7419: 1,
                9202: 1,
                9262: 1,
                9633: 1
              } [t] && r.push(e[t] = (e => new Promise((t, r) => {
                var a = n.miniCssF(e),
                  o = n.p + a;
                if (((e, t) => {
                    for (var r = document.getElementsByTagName("link"), a = 0; a < r.length; a++) {
                      var n = (c = r[a]).getAttribute("data-href") || c.getAttribute("href");
                      if ("stylesheet" === c.rel && (n === e || n === t)) return c
                    }
                    var o = document.getElementsByTagName("style");
                    for (a = 0; a < o.length; a++) {
                      var c;
                      if ((n = (c = o[a]).getAttribute("data-href")) === e || n === t) return c
                    }
                  })(a, o)) return t();
                ((e, t, r, a, o) => {
                  var c = document.createElement("link");
                  c.rel = "stylesheet", c.type = "text/css", n.nc && (c.nonce = n.nc), c.onerror = c.onload = r => {
                    if (c.onerror = c.onload = null, "load" === r.type) a();
                    else {
                      var n = r && r.type,
                        d = r && r.target && r.target.href || t,
                        f = new Error("Loading CSS chunk " + e + " failed.\n(" + n + ": " + d + ")");
                      f.name = "ChunkLoadError", f.code = "CSS_CHUNK_LOAD_FAILED", f.type = n, f.request = d, c.parentNode && c.parentNode.removeChild(c), o(f)
                    }
                  }, c.href = t, document.head.appendChild(c)
                })(e, o, 0, t, r)
              }))(t).then(() => {
                e[t] = 0
              }, r => {
                throw delete e[t], r
              }))
            }
          }
        })(), (() => {
          const e = {
            8106: 0
          };
          n.f.j = (t, r) => {
            let a = n.o(e, t) ? e[t] : void 0;
            if (0 !== a)
              if (a) r.push(a[2]);
              else if (/^(2(054|199|285|909)|3(082|115|331)|9(225|633|653)|4017|8950)$/.test(t)) e[t] = 0;
            else {
              const o = new Promise((r, n) => a = e[t] = [r, n]);
              r.push(a[2] = o);
              const c = n.p + n.u(t),
                d = new Error,
                f = r => {
                  if (n.o(e, t) && (a = e[t], 0 !== a && (e[t] = void 0), a)) {
                    const e = r && ("load" === r.type ? "missing" : r.type),
                      n = r && r.target && r.target.src;
                    d.message = "Loading chunk " + t + " failed.\n(" + e + ": " + n + ")", d.name = "ChunkLoadError", d.type = e, d.request = n, a[1](d)
                  }
                };
              n.l(c, f, "chunk-" + t, t)
            }
          };
          const t = (t, r) => {
              let [a, o, c] = r;
              var d, f, s = 0;
              if (a.some(t => 0 !== e[t])) {
                for (d in o) n.o(o, d) && (n.m[d] = o[d]);
                c && c(n)
              }
              for (t && t(r); s < a.length; s++) f = a[s], n.o(e, f) && e[f] && e[f][0](), e[f] = 0
            },
            r = self.webpackChunk_rockstargames_sites_legacy = self.webpackChunk_rockstargames_sites_legacy || [];
          r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
        })(), n.nc = void 0, n(87732), n(54334)
      })())
    }
  }
});