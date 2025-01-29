! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "1931c687-5f17-4a25-85a9-8bd16196a093", e._sentryDebugIdIdentifier = "sentry-dbid-1931c687-5f17-4a25-85a9-8bd16196a093")
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
}, System.register(["@rockstargames/modules-core-videoplayer"], (function(e, t) {
  var r = {};
  return Object.defineProperty(r, "__esModule", {
    value: !0
  }), {
    setters: [function(e) {
      Object.keys(e).forEach((function(t) {
        r[t] = e[t]
      }))
    }],
    execute: function() {
      e((() => {
        var e, a, n, d, o, f, c = {
            35144: (e, t, r) => {
              (0, r(13454).w)(1)
            },
            13454: (e, t, r) => {
              const a = r(38294).y;
              t.w = function(e) {
                if (e || (e = 1), !r.y.meta || !r.y.meta.url) throw console.error("__system_context__", r.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                r.p = a(r.y.meta.url, e)
              }
            },
            23787: (e, t, r) => {
              r(35144)
            },
            38294: (e, t, r) => {
              t.y = function(e, t) {
                var r = document.createElement("a");
                r.href = e;
                for (var a = "/" === r.pathname[0] ? r.pathname : "/" + r.pathname, n = 0, d = a.length; n !== t && d >= 0;) "/" === a[--d] && n++;
                if (n !== t) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + t + ") is greater than the number of directories (" + n + ") in the URL path " + e);
                var o = a.slice(0, d + 1);
                return r.protocol + "//" + r.host + o
              };
              Number.isInteger
            },
            58639: (e, t, r) => {
              "use strict";
              var a = {
                  "./bootstrap": () => Promise.all([r.e(1999), r.e(2688), r.e(8370), r.e(7512), r.e(5157), r.e(7196), r.e(3735), r.e(2229), r.e(5966), r.e(9623), r.e(7170), r.e(4281), r.e(600), r.e(2440), r.e(2491), r.e(2738), r.e(7145), r.e(2002), r.e(5861)]).then((() => () => r(35861))),
                  "./index": () => Promise.all([r.e(1999), r.e(2688), r.e(8370), r.e(7512), r.e(5157), r.e(7196), r.e(2229), r.e(5966), r.e(9623), r.e(7170), r.e(4281), r.e(600), r.e(2440), r.e(2491), r.e(2738), r.e(7145), r.e(2002), r.e(6862)]).then((() => () => r(56862))),
                  "./site-routes/Bully": () => Promise.all([r.e(1999), r.e(2688), r.e(8370), r.e(7512), r.e(5157), r.e(7196), r.e(2229), r.e(5966), r.e(9623), r.e(7170), r.e(4281), r.e(600), r.e(2440), r.e(2491), r.e(2738), r.e(7145), r.e(2002), r.e(6258), r.e(4238)]).then((() => () => r(24238))),
                  "./site-routes/RedDeadRedemption": () => Promise.all([r.e(1999), r.e(2688), r.e(8370), r.e(7512), r.e(5157), r.e(7196), r.e(2229), r.e(5966), r.e(9623), r.e(7170), r.e(4281), r.e(600), r.e(2440), r.e(2491), r.e(2738), r.e(7145), r.e(2002), r.e(6258), r.e(6034)]).then((() => () => r(36034))),
                  "./tina": () => Promise.all([r.e(1999), r.e(2688), r.e(8370), r.e(7512), r.e(5157), r.e(7196), r.e(2229), r.e(5966), r.e(9623), r.e(7170), r.e(4281), r.e(600), r.e(2440), r.e(2491), r.e(2738), r.e(7145), r.e(2002), r.e(6258)]).then((() => () => r(26258)))
                },
                n = (e, t) => (r.R = t, t = r.o(a, e) ? a[e]() : Promise.resolve().then((() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                })), r.R = void 0, t),
                d = (e, t) => {
                  if (r.S) {
                    var a = "default",
                      n = r.S[a];
                    if (n && n !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return r.S[a] = e, r.I(a, t)
                  }
                };
              r.d(t, {
                get: () => n,
                init: () => d
              })
            },
            25136: e => {
              "use strict";
              e.exports = r
            }
          },
          i = {};

        function s(e) {
          var t = i[e];
          if (void 0 !== t) return t.exports;
          var r = i[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return c[e].call(r.exports, r, r.exports, s), r.loaded = !0, r.exports
        }
        return s.m = c, s.c = i, s.y = t, s.amdO = {}, s.n = e => {
          var t = e && e.__esModule ? () => e.default : () => e;
          return s.d(t, {
            a: t
          }), t
        }, a = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, s.t = function(t, r) {
          if (1 & r && (t = this(t)), 8 & r) return t;
          if ("object" == typeof t && t) {
            if (4 & r && t.__esModule) return t;
            if (16 & r && "function" == typeof t.then) return t
          }
          var n = Object.create(null);
          s.r(n);
          var d = {};
          e = e || [null, a({}), a([]), a(a)];
          for (var o = 2 & r && t;
            "object" == typeof o && !~e.indexOf(o); o = a(o)) Object.getOwnPropertyNames(o).forEach((e => d[e] = () => t[e]));
          return d.default = () => t, s.d(n, d), n
        }, s.d = (e, t) => {
          for (var r in t) s.o(t, r) && !s.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: t[r]
          })
        }, s.f = {}, s.e = e => Promise.all(Object.keys(s.f).reduce(((t, r) => (s.f[r](e, t), t)), [])), s.u = e => "js/" + {
          68: "e23fc2d86fac013ecfab49c27c583679",
          173: "fd0abc86a5b8cdc77132a027e0f16d00",
          282: "deea8bac818c1a2f7e15573408e56503",
          508: "24c63e425caaacc1745665cd283d21db",
          570: "552d969ffbebbc9e61330e871073efff",
          600: "ad915d9e37c4ebca726526e0f9376fcd",
          601: "be672d36f33d962a7f12e32549fda807",
          819: "dce7a7023291d23ab986ea5dc1267647",
          1758: "db19019476fc3aa2dd2c8516e597ac54",
          1927: "e88d1e090a0c382ba1138f2f5c67d694",
          1999: "fcc5fa1ac530113a8b2f446b90243ec4",
          2002: "3350c00886ee37892242775332f76710",
          2117: "3d7c6bc19346e8ade03e7ba19cf5dd12",
          2229: "d2d18ecff8d4927cf46bf4f3aa674dc2",
          2234: "1cf053ca80b453503d1d3d076f7ea4fe",
          2440: "c30750136d805475662f793509d9f4b5",
          2491: "d255550b3edd16f7b6eb169446ee64dc",
          2647: "04ac951feea1a65f75c5cd8ccdd8654b",
          2688: "471879124e5912bcb64b5e10f9516f41",
          2738: "5e5c951d3b969fbec7eb30c5096b56cf",
          3075: "a20959075a8b23aa4a822c83ca73a9c3",
          3200: "79eeebcde04cc1fdc112787481d15f94",
          3313: "2dcb191ff06e70895974113a443caee3",
          3565: "0ea6d71a5b7678a59ed1a1f08fcc8dbb",
          3735: "b8a215e9f39c284b2684025110d16ff6",
          3896: "d50319d003253175929ef354dff120bb",
          4238: "551967118a122a17a28b638d40fb99c2",
          4281: "deef2a08a50dec93ca2b55597dc45107",
          4498: "2e3ce843c0a6f40d7d571ab6247f254d",
          4730: "a5c030dddb5ea8e131b25b0e4bed0fae",
          5157: "c09c7ca0e469d4bbe6eede260e2bb971",
          5265: "273b483e5a8cde250a41dc00cff79ef8",
          5415: "9132a03e7ee0352657a031c077d03100",
          5456: "4875a3b83b90caa7d6bcd858a591dec3",
          5796: "99cced197f2e8bbbf67ea64187ccf2d0",
          5861: "000af3c91e24b50eab0aee4ae4ace246",
          5966: "b5c6d9a6da4ebb8f1f9445c8972b7b0e",
          6034: "84309df34ce0e8dbb47034c73c6adfc3",
          6258: "d1fe5e79e9cc71dfbf47c046f4dd159e",
          6404: "fd4d49be5a2d7da297214a8198f11435",
          6471: "86de7ce33ce31868a09ca182626fb2f6",
          6862: "1b9d90f1cd8bb6709deb98fb028a4b03",
          7145: "c1d60b87acc9fd2c37d8b07e9f5d676c",
          7170: "ca88d2c410d55b7ae6b37ff9532f30a0",
          7196: "2c915446bcf6b7358c8497c5f5e2365c",
          7407: "9c3c51d1f7bdc6184ec1c2f333aadc24",
          7512: "b7b415b480327cbaaddbd420e47bf287",
          7605: "2240579449c55f66cec0e46659d10060",
          7924: "81403b2145c153c4148ac1df47db28e3",
          8096: "56d71715071d982771c540f4fb1445b1",
          8189: "f8515668bcb0e60ac529c91d9655d09e",
          8242: "ed91859047556cd8696f60b0aab9a712",
          8325: "92cfad21432bf0c4ae119662991c8fd4",
          8370: "aa65a0774e175a1d62e1aea6bf946bf8",
          8384: "be1589307d78a30bae18e40d0273e1a6",
          8385: "f73bf91d57fc1bf647a3f2e376dd3773",
          8577: "b34b0e02ac6b973540349d2aa69385f4",
          8845: "8558307ac23df75abee1a10acb2645f6",
          8938: "36d3f8ab2e2270539825d45f081b7e9c",
          9623: "b331f66641cca59b2a0c2ff87e976a2b",
          9760: "e3251caacd777e3af8d120fd127b5842",
          9986: "0487e3e86c2844e0136bdbaa49ad538e"
        } [e] + ".js", s.miniCssF = e => "css/" + {
          819: "82b8e41eb90eae7db3adfb9fff54d045",
          2002: "0c843088a3585b0be03659be33f5006e",
          2647: "7b4764475ca420e9ef256cff3db37704",
          3200: "82b8e41eb90eae7db3adfb9fff54d045",
          3313: "6e70c6eb034e182b48671d7b4694e780",
          3565: "acd527f8b8605a84d960f7f210a58825",
          4238: "52e55b769351b6e3f1602fe5d2baacd1",
          5861: "2e2c2d79838c3959e62808fd28ef0e6c",
          6034: "52e55b769351b6e3f1602fe5d2baacd1",
          7196: "7b082508ccf0d5795ef37f651862835d"
        } [e] + ".css", s.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), s.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), n = {}, d = "@rockstargames/sites-legacy:", s.l = (e, t, r, a) => {
          if (n[e]) n[e].push(t);
          else {
            var o, f;
            if (void 0 !== r)
              for (var c = document.getElementsByTagName("script"), i = 0; i < c.length; i++) {
                var l = c[i];
                if (l.getAttribute("src") == e || l.getAttribute("data-webpack") == d + r) {
                  o = l;
                  break
                }
              }
            o || (f = !0, (o = document.createElement("script")).charset = "utf-8", o.timeout = 120, s.nc && o.setAttribute("nonce", s.nc), o.setAttribute("data-webpack", d + r), o.src = e), n[e] = [t];
            var b = (t, r) => {
                o.onerror = o.onload = null, clearTimeout(u);
                var a = n[e];
                if (delete n[e], o.parentNode && o.parentNode.removeChild(o), a && a.forEach((e => e(r))), t) return t(r)
              },
              u = setTimeout(b.bind(null, void 0, {
                type: "timeout",
                target: o
              }), 12e4);
            o.onerror = b.bind(null, o.onerror), o.onload = b.bind(null, o.onload), f && document.head.appendChild(o)
          }
        }, s.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, s.nmd = e => (e.paths = [], e.children || (e.children = []), e), o = {
          2002: [31879],
          6258: [17523]
        }, f = {
          17523: ["default", "./tina", 25136],
          31879: ["default", "./index", 25136]
        }, s.f.remotes = (e, t) => {
          s.o(o, e) && o[e].forEach((e => {
            var r = s.R;
            r || (r = []);
            var a = f[e];
            if (!(r.indexOf(a) >= 0)) {
              if (r.push(a), a.p) return t.push(a.p);
              var n = t => {
                  t || (t = new Error("Container missing")), "string" == typeof t.message && (t.message += '\nwhile loading "' + a[1] + '" from ' + a[2]), s.m[e] = () => {
                    throw t
                  }, a.p = 0
                },
                d = (e, r, d, o, f, c) => {
                  try {
                    var i = e(r, d);
                    if (!i || !i.then) return f(i, o, c);
                    var s = i.then((e => f(e, o)), n);
                    if (!c) return s;
                    t.push(a.p = s)
                  } catch (e) {
                    n(e)
                  }
                },
                o = (e, t, n) => d(t.get, a[1], r, 0, c, n),
                c = t => {
                  a.p = 1, s.m[e] = e => {
                    e.exports = t()
                  }
                };
              d(s, a[2], 0, 0, ((e, t, r) => e ? d(s.I, a[0], 0, e, o, r) : n()), 1)
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
              var d = s.S[r],
                o = "@rockstargames/sites-legacy",
                f = (e, t, r, a) => {
                  var n = d[e] = d[e] || {},
                    f = n[t];
                  (!f || !f.loaded && (!a != !f.eager ? a : o > f.from)) && (n[t] = {
                    get: r,
                    from: o,
                    eager: !!a
                  })
                },
                c = [];
              return "default" === r && (f("@rsgweb/intl", "0.0.0", (() => s.e(7924).then((() => () => s(37924))))), f("@rsgweb/locale-tools", "1.0.0", (() => Promise.all([s.e(1999), s.e(2688), s.e(1927), s.e(2229), s.e(9986)]).then((() => () => s(89986))))), f("@rsgweb/modules-core-hero", "0.0.0", (() => Promise.all([s.e(2229), s.e(5966), s.e(9623), s.e(4281), s.e(2440), s.e(2491), s.e(3313)]).then((() => () => s(86067))))), f("@rsgweb/modules-core-highlights", "0.0.0", (() => Promise.all([s.e(5157), s.e(2229), s.e(4281), s.e(2440), s.e(2738), s.e(2647), s.e(8189)]).then((() => () => s(78189))))), f("@rsgweb/rockstar-account", "0.0.0", (() => Promise.all([s.e(1999), s.e(2688), s.e(8370), s.e(8384), s.e(2229), s.e(5966), s.e(9623), s.e(7170), s.e(3075)]).then((() => () => s(93075))))), f("@rsgweb/tina", "0.0.0", (() => Promise.all([s.e(1999), s.e(7512), s.e(2229), s.e(5966), s.e(4281), s.e(600), s.e(3200)]).then((() => () => s(52437))))), f("@rsgweb/utils", "1.0.0", (() => Promise.all([s.e(1999), s.e(2688), s.e(8370), s.e(2229), s.e(5966), s.e(9623), s.e(7170), s.e(8096)]).then((() => () => s(75811))))), f("focus-trap-react", "10.2.3", (() => Promise.all([s.e(6404), s.e(2229), s.e(7145)]).then((() => () => s(86404))))), f("framer-motion", "10.16.4", (() => Promise.all([s.e(4730), s.e(2229)]).then((() => () => s(74730))))), f("framer-motion", "10.16.4", (() => Promise.all([s.e(8242), s.e(2229)]).then((() => () => s(58242))))), f("framer-motion", "7.10.3", (() => Promise.all([s.e(8385), s.e(2229)]).then((() => () => s(58385))))), f("graphql", "16.10.0", (() => s.e(601).then((() => () => s(30601))))), f("prop-types", "15.8.1", (() => s.e(5796).then((() => () => s(5796))))), f("react-dom", "18.2.0", (() => Promise.all([s.e(8577), s.e(2229)]).then((() => () => s(78577))))), f("react-intersection-observer", "9.10.3", (() => Promise.all([s.e(2229), s.e(4498)]).then((() => () => s(44498))))), f("react-router-dom", "6.17.0", (() => Promise.all([s.e(282), s.e(2229)]).then((() => () => s(70282))))), f("react", "18.2.0", (() => s.e(508).then((() => () => s(50508))))), (e => {
                var t = e => {
                  return t = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(t));
                  var t
                };
                try {
                  var n = s(25136);
                  if (!n) return;
                  var d = e => e && e.init && e.init(s.S[r], a);
                  if (n.then) return c.push(n.then(d, t));
                  var o = d(n);
                  if (o && o.then) return c.push(o.catch(t))
                } catch (e) {
                  t(e)
                }
              })()), c.length ? e[r] = Promise.all(c).then((() => e[r] = 1)) : e[r] = 1
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
                  d = n < 0;
                d && (n = -n - 1);
                for (var o = 0, f = 1, c = !0;; f++, o++) {
                  var i, s, l = f < r.length ? (typeof r[f])[0] : "";
                  if (o >= a.length || "o" == (s = (typeof(i = a[o]))[0])) return !c || ("u" == l ? f > n && !d : "" == l != d);
                  if ("u" == s) {
                    if (!c || "u" != l) return !1
                  } else if (c)
                    if (l == s)
                      if (f <= n) {
                        if (i != r[f]) return !1
                      } else {
                        if (d ? i > r[f] : i < r[f]) return !1;
                        i != r[f] && (c = !1)
                      }
                  else if ("s" != l && "n" != l) {
                    if (d || f <= n) return !1;
                    c = !1, f--
                  } else {
                    if (f <= n || s < l != d) return !1;
                    c = !1
                  } else "s" != l && "n" != l && (c = !1, f--)
                }
              }
              var b = [],
                u = b.pop.bind(b);
              for (o = 1; o < r.length; o++) {
                var h = r[o];
                b.push(1 == h ? u() | u() : 2 == h ? u() & u() : h ? t(h, a) : !u())
              }
              return !!u()
            },
            r = (r, a, n) => {
              var d = r[a];
              return (a = Object.keys(d).reduce(((r, a) => !t(n, a) || r && !((t, r) => {
                t = e(t), r = e(r);
                for (var a = 0;;) {
                  if (a >= t.length) return a < r.length && "u" != (typeof r[a])[0];
                  var n = t[a],
                    d = (typeof n)[0];
                  if (a >= r.length) return "u" == d;
                  var o = r[a],
                    f = (typeof o)[0];
                  if (d != f) return "o" == d && "n" == f || "s" == f || "u" == d;
                  if ("o" != d && "u" != d && n != o) return n < o;
                  a++
                }
              })(r, a) ? r : a), 0)) && d[a]
            },
            a = (e => function(t, r, a, n) {
              var d = s.I(t);
              return d && d.then ? d.then(e.bind(e, t, s.S[t], r, a, n)) : e(t, s.S[t], r, a, n)
            })(((e, t, a, n, d) => {
              var o = t && s.o(t, a) && r(t, a, n);
              return o ? (e => (e.loaded = 1, e.get()))(o) : d()
            })),
            n = {},
            d = {
              62229: () => a("default", "react", [1, 18, 2, 0], (() => s.e(508).then((() => () => s(50508))))),
              95966: () => a("default", "@rsgweb/utils", [1, "workspace:^"], (() => Promise.all([s.e(1999), s.e(2688), s.e(8370), s.e(9623), s.e(7170)]).then((() => () => s(75811))))),
              9623: () => a("default", "react-router-dom", [1, 6, 11, 2], (() => s.e(282).then((() => () => s(70282))))),
              16565: () => a("default", "graphql", [1, 16, 9, 0], (() => s.e(601).then((() => () => s(30601))))),
              2918: () => a("default", "@rsgweb/rockstar-account", [1, "workspace:^"], (() => Promise.all([s.e(1999), s.e(2688), s.e(8370), s.e(8384), s.e(5966), s.e(9623), s.e(7170), s.e(5456)]).then((() => () => s(93075))))),
              81788: () => a("default", "@rsgweb/locale-tools", [1, "workspace:^"], (() => Promise.all([s.e(1999), s.e(2688), s.e(1927), s.e(7605)]).then((() => () => s(89986))))),
              44853: () => a("default", "react-dom", [1, 18, 2, 0], (() => s.e(8577).then((() => () => s(78577))))),
              92440: () => a("default", "@rsgweb/tina", [1, "workspace:^"], (() => Promise.all([s.e(1999), s.e(7512), s.e(5966), s.e(600), s.e(819)]).then((() => () => s(52437))))),
              90660: () => a("default", "framer-motion", [1, 10, 12, 18], (() => s.e(8385).then((() => () => s(58385))))),
              22738: () => a("default", "react-intersection-observer", [1, 9, 10, 3], (() => s.e(2117).then((() => () => s(44498))))),
              57145: () => a("default", "prop-types", [1, 15, 8, 1], (() => s.e(5796).then((() => () => s(5796))))),
              2765: () => a("default", "focus-trap-react", [1, 10, 2, 3], (() => s.e(6404).then((() => () => s(86404))))),
              82849: () => a("default", "framer-motion", [1, 10, 12, 18], (() => s.e(8242).then((() => () => s(58242))))),
              84590: () => a("default", "@rsgweb/modules-core-hero", [1, "workspace:^"], (() => s.e(3565).then((() => () => s(86067))))),
              87330: () => a("default", "@rsgweb/modules-core-highlights", [1, "workspace:^"], (() => Promise.all([s.e(2647), s.e(570)]).then((() => () => s(78189))))),
              10066: () => a("default", "@rsgweb/intl", [1, "workspace:^"], (() => s.e(7924).then((() => () => s(37924))))),
              87052: () => a("default", "framer-motion", [1, 10, 12, 18], (() => s.e(4730).then((() => () => s(74730)))))
            },
            o = {
              600: [44853],
              2002: [2765, 82849, 84590, 87330],
              2229: [62229],
              2440: [92440],
              2491: [90660],
              2647: [87052],
              2738: [22738],
              4281: [2918, 81788],
              5861: [10066],
              5966: [95966],
              7145: [57145],
              7170: [16565],
              9623: [9623]
            },
            f = {};
          s.f.consumes = (e, t) => {
            s.o(o, e) && o[e].forEach((e => {
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
                  var o = d[e]();
                  o.then ? t.push(n[e] = o.then(r).catch(a)) : r(o)
                } catch (e) {
                  a(e)
                }
              }
            }))
          }
        })(), (() => {
          if ("undefined" != typeof document) {
            var e = {
              8106: 0
            };
            s.f.miniCss = (t, r) => {
              e[t] ? r.push(e[t]) : 0 !== e[t] && {
                819: 1,
                2002: 1,
                2647: 1,
                3200: 1,
                3313: 1,
                3565: 1,
                4238: 1,
                5861: 1,
                6034: 1,
                7196: 1
              } [t] && r.push(e[t] = (e => new Promise(((t, r) => {
                var a = s.miniCssF(e),
                  n = s.p + a;
                if (((e, t) => {
                    for (var r = document.getElementsByTagName("link"), a = 0; a < r.length; a++) {
                      var n = (o = r[a]).getAttribute("data-href") || o.getAttribute("href");
                      if ("stylesheet" === o.rel && (n === e || n === t)) return o
                    }
                    var d = document.getElementsByTagName("style");
                    for (a = 0; a < d.length; a++) {
                      var o;
                      if ((n = (o = d[a]).getAttribute("data-href")) === e || n === t) return o
                    }
                  })(a, n)) return t();
                ((e, t, r, a, n) => {
                  var d = document.createElement("link");
                  d.rel = "stylesheet", d.type = "text/css", d.onerror = d.onload = r => {
                    if (d.onerror = d.onload = null, "load" === r.type) a();
                    else {
                      var o = r && ("load" === r.type ? "missing" : r.type),
                        f = r && r.target && r.target.href || t,
                        c = new Error("Loading CSS chunk " + e + " failed.\n(" + f + ")");
                      c.code = "CSS_CHUNK_LOAD_FAILED", c.type = o, c.request = f, d.parentNode && d.parentNode.removeChild(d), n(c)
                    }
                  }, d.href = t, document.head.appendChild(d)
                })(e, n, 0, t, r)
              })))(t).then((() => {
                e[t] = 0
              }), (r => {
                throw delete e[t], r
              })))
            }
          }
        })(), (() => {
          var e = {
            8106: 0
          };
          s.f.j = (t, r) => {
            var a = s.o(e, t) ? e[t] : void 0;
            if (0 !== a)
              if (a) r.push(a[2]);
              else if (/^(2(229|440|647|738)|4281|5966|7145|9623)$/.test(t)) e[t] = 0;
            else {
              var n = new Promise(((r, n) => a = e[t] = [r, n]));
              r.push(a[2] = n);
              var d = s.p + s.u(t),
                o = new Error;
              s.l(d, (r => {
                if (s.o(e, t) && (0 !== (a = e[t]) && (e[t] = void 0), a)) {
                  var n = r && ("load" === r.type ? "missing" : r.type),
                    d = r && r.target && r.target.src;
                  o.message = "Loading chunk " + t + " failed.\n(" + n + ": " + d + ")", o.name = "ChunkLoadError", o.type = n, o.request = d, a[1](o)
                }
              }), "chunk-" + t, t)
            }
          };
          var t = (t, r) => {
              var a, n, d = r[0],
                o = r[1],
                f = r[2],
                c = 0;
              if (d.some((t => 0 !== e[t]))) {
                for (a in o) s.o(o, a) && (s.m[a] = o[a]);
                f && f(s)
              }
              for (t && t(r); c < d.length; c++) n = d[c], s.o(e, n) && e[n] && e[n][0](), e[n] = 0
            },
            r = self.webpackChunk_rockstargames_sites_legacy = self.webpackChunk_rockstargames_sites_legacy || [];
          r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
        })(), s.nc = void 0, s(23787), s(58639)
      })())
    }
  }
}));