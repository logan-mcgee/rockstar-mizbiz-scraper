try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "3eac377a-b66a-47e6-9c17-d23237564660", e._sentryDebugIdIdentifier = "sentry-dbid-3eac377a-b66a-47e6-9c17-d23237564660")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "a42314239c99c13d151b1cd32472b6fee265a6cb",
    packageName: "@rockstargames/sites-red-dead-redemption-2",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "a42314239c99c13d151b1cd32472b6fee265a6cb"
}, System.register(["@rockstargames/modules-core-videoplayer"], (function(e, a) {
  var r = {};
  return Object.defineProperty(r, "__esModule", {
    value: !0
  }), {
    setters: [function(e) {
      Object.keys(e).forEach((function(a) {
        r[a] = e[a]
      }))
    }],
    execute: function() {
      e((() => {
        var e, t, d, f, c, n, o = {
            13218: (e, a, r) => {
              (0, r(77600).w)(1)
            },
            25136: e => {
              "use strict";
              e.exports = r
            },
            44857: (e, a, r) => {
              r(13218)
            },
            67884: (e, a, r) => {
              a.y = function(e, a) {
                var r = document.createElement("a");
                r.href = e;
                for (var t = "/" === r.pathname[0] ? r.pathname : "/" + r.pathname, d = 0, f = t.length; d !== a && f >= 0;) "/" === t[--f] && d++;
                if (d !== a) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + a + ") is greater than the number of directories (" + d + ") in the URL path " + e);
                var c = t.slice(0, f + 1);
                return r.protocol + "//" + r.host + c
              };
              Number.isInteger
            },
            77600: (e, a, r) => {
              const t = r(67884).y;
              a.w = function(e) {
                if (e || (e = 1), !r.y.meta || !r.y.meta.url) throw console.error("__system_context__", r.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                r.p = t(r.y.meta.url, e)
              }
            },
            85819: (e, a, r) => {
              "use strict";
              var t = {
                  "./index": () => Promise.all([r.e(7722), r.e(3830), r.e(9320), r.e(2229), r.e(6497), r.e(5966), r.e(5426)]).then((() => () => r(55426)))
                },
                d = (e, a) => (r.R = a, a = r.o(t, e) ? t[e]() : Promise.resolve().then((() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                })), r.R = void 0, a),
                f = (e, a) => {
                  if (r.S) {
                    var t = "default",
                      d = r.S[t];
                    if (d && d !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return r.S[t] = e, r.I(t, a)
                  }
                };
              r.d(a, {
                get: () => d,
                init: () => f
              })
            }
          },
          b = {};

        function i(e) {
          var a = b[e];
          if (void 0 !== a) return a.exports;
          var r = b[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return o[e].call(r.exports, r, r.exports, i), r.loaded = !0, r.exports
        }
        return i.m = o, i.c = b, i.y = a, i.amdO = {}, i.n = e => {
          var a = e && e.__esModule ? () => e.default : () => e;
          return i.d(a, {
            a
          }), a
        }, t = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, i.t = function(a, r) {
          if (1 & r && (a = this(a)), 8 & r) return a;
          if ("object" == typeof a && a) {
            if (4 & r && a.__esModule) return a;
            if (16 & r && "function" == typeof a.then) return a
          }
          var d = Object.create(null);
          i.r(d);
          var f = {};
          e = e || [null, t({}), t([]), t(t)];
          for (var c = 2 & r && a;
            "object" == typeof c && !~e.indexOf(c); c = t(c)) Object.getOwnPropertyNames(c).forEach((e => f[e] = () => a[e]));
          return f.default = () => a, i.d(d, f), d
        }, i.d = (e, a) => {
          for (var r in a) i.o(a, r) && !i.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: a[r]
          })
        }, i.f = {}, i.e = e => Promise.all(Object.keys(i.f).reduce(((a, r) => (i.f[r](e, a), a)), [])), i.u = e => "js/" + {
          5: "136c470a135b7912319eb9256fb6ce4f",
          131: "af194568f1c9fa2294fc08c61c97c8c1",
          278: "b9acc9c913c7f4e53ff8ac0213b8e7d0",
          299: "bc9f8c1de4ddadf0b2ebbeb749157204",
          314: "0bdcd840cf275e43f780765856909941",
          621: "9ba5aa7de64b84dd4fc2de82f9325758",
          662: "847f7d4fece0813e3e19ece48ff494fe",
          824: "fe4979020829acd491b5b20572f3dd93",
          838: "fbb172fb7e4057775cdb4f42b8588f3b",
          907: "f987da1792ad9fa3a83990ccf4ddff44",
          964: "9e724dbf3455223e282210b0d5056747",
          1054: "50b2a400bdb09f1b9e4a0ff4215ddd71",
          1242: "2ab0a9b7a791d3d452e24885478b7907",
          1822: "c0dbccabf6dd26490c7df2c6f58dacf0",
          1868: "9b4b9d8e7d0d8996983aff2aff478ca2",
          2156: "8495e15363896cbf810387a03faef4c8",
          2171: "f59e1853947c6136b4a87ef659ab7fcc",
          2221: "4f8f58318b09eacf8ac31e5282cbfb6c",
          2243: "f962a08faf34e97172d59cbd90c9313a",
          2347: "981fa89ebb73a23b11972f3844137613",
          2365: "9141db20e8467a5678c604d8cab3d4e1",
          2398: "559a9e7477ca9e2d6bebb00fb4f974b9",
          2466: "3630ebe06e9d0deed226d2f57b81418c",
          2592: "96141e21e3988a52d98f90b3d15d6be0",
          2642: "6a2cf9eeb8f272011578f958dc08d5bc",
          2678: "419933878545006ebba083732373568f",
          2864: "2b82e9d0bba1709b529b6f39267fec09",
          3002: "02de2c82be8c926f9026be66d4682bfa",
          3034: "dde7ca6cc9c17b6af955b524c6a4663b",
          3197: "49a69651dae24e38716701148dbe2cf1",
          3218: "580f5f2b7942f7852b6c4c41c415aba1",
          3343: "f8e7c7a4d9bc17f846b6e662412af6d0",
          3370: "51ec8049186ab7bba8d18277a9d0dc9f",
          3475: "aa549926a2666cec511d82f306b4fc57",
          3486: "6fa88c8e70960f9074f6a980e0d20d5d",
          3697: "8422259a9a1d907d31db6f728991a368",
          3830: "24b9d2544cc625493873e295fd4a61a2",
          3885: "745110ac96dd78b7d93b6b929f2cf441",
          3941: "6eecb193baf70c07cc22481d39d98acb",
          4011: "3d20c2e1af8e0b3874c2370c790e872f",
          4105: "0ac067c080f5e3aa6aca91d7057a6506",
          4480: "19fc2e68718717f7e3ffb33c7b584993",
          4528: "6bf23e13049d8da92b5b7bcc63c7b847",
          4621: "253493cf6c0c6fb5aeac9e2324a2b3cf",
          4700: "3b94262798051bd3439810bfc63c3d5b",
          4710: "ea1bf7105795a14394da0a1311ee4f82",
          4731: "5325bb569b6986c211cd3ceffb906ca9",
          4799: "7802ebb4759aeb9d248e3b1303b522a2",
          4851: "5a6fdcd81023a5356ad7f9ad93a6709c",
          4861: "91beb92ed00d2594f06cfcaf5e487365",
          4913: "18a1368db55090c9086186ab6545a727",
          4981: "3d6455ce21913ed4761538649b117bf1",
          5018: "8ac16c11cce88d78a21875bfe3e0db74",
          5233: "0aea9afef52355e4b4d32bb936719dfb",
          5259: "34c0e5f39876046329cdb275d2ece297",
          5426: "c9816a1fee56a05c880835a84db2de3e",
          5530: "61c5b89d49934b46a8d59d0cc20e307d",
          5639: "fdff9b027bcb1dd95ae2f45d9d51b710",
          5663: "e4025bacdbd31106bb848b4e74c262c1",
          5742: "050df28f5399dae47bf3ef8e58ade3fd",
          5830: "66904f6d7fde41dfa6f259ea3fc7fbb9",
          5832: "fd871f17dc0b98b556c0c0ee862b8b92",
          6267: "c258b11b96c170522b4906bfdb847a53",
          6280: "8693ca3cc0b810f2dde54987bdcf334b",
          6285: "917b6a7211030e6c65f44d67cf2ffca0",
          6361: "6c40f165fbbb930f743400b7b8faf14a",
          6497: "7895ccf6298e07273f14b3a469fe48a9",
          6664: "66dd721ff77e1360b0405aa951937969",
          6879: "cf35f2508ffe3d199aca5f177b1cd27f",
          6891: "350a2302595bb3a474e82f6202c1bb18",
          6997: "44eb3230aac14b54e25f3372cee82199",
          7010: "45f89ce6379040dda0598dfadf18ec11",
          7073: "57e6a41645f02eccddfe299fb9cb5be7",
          7353: "b1fc6ee059ea30ccf187bc020d71cac2",
          7436: "680fe2de0b288910151deef2d0a32d6b",
          7452: "416ca82c72726f060aa345bdc181f5f5",
          7453: "f1c261e4004021bcf2219504c7da9787",
          7722: "8c118079ec3dd7ba3af085ea5dafa752",
          7970: "91626d4977d5f46f2544a98e35f5c20d",
          8272: "3698476d8fd10ed2885372b29ebddd9a",
          8391: "dfeff40203d55cd006711dc39dfa25ee",
          8583: "f41646775a4a6b694c82f08992da0cc9",
          8654: "ff2d31e643cf0246441d0fd3de4cc3e7",
          8755: "b97bb0ecdde072952a14eae4f74308e5",
          8880: "871c3d1d51a2decedfcd0bc904e8a893",
          8970: "87ffd39207d6c4f45cdbcd5f05ff5428",
          9022: "5bb73dcf8029396c62f2d055f2e79e2d",
          9028: "16d2ea3b1929c97f803a23e8685c56d4",
          9126: "511791283a5550b572501f27886b903e",
          9320: "768217c5b353f145ad9611e767c642d4",
          9377: "5de704094f9038c8b2a56746888335f4",
          9615: "c475e8d825a49af4e658f6a9a6ea4826",
          9936: "24cf303ac58170bf131870c42a15e44c",
          9990: "4261519451c74ed79e3e47df098f29c1"
        } [e] + ".js", i.miniCssF = e => "css/" + {
          964: "862399b32420b2fbc03810a979eab2e5",
          5426: "5b398003b12b7b4b1d769281f6b4a7ab",
          8583: "862399b32420b2fbc03810a979eab2e5"
        } [e] + ".css", i.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), i.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), d = {}, f = "@rockstargames/sites-red-dead-redemption-2:", i.l = (e, a, r, t) => {
          if (d[e]) d[e].push(a);
          else {
            var c, n;
            if (void 0 !== r)
              for (var o = document.getElementsByTagName("script"), b = 0; b < o.length; b++) {
                var s = o[b];
                if (s.getAttribute("src") == e || s.getAttribute("data-webpack") == f + r) {
                  c = s;
                  break
                }
              }
            c || (n = !0, (c = document.createElement("script")).charset = "utf-8", c.timeout = 120, i.nc && c.setAttribute("nonce", i.nc), c.setAttribute("data-webpack", f + r), c.src = e), d[e] = [a];
            var l = (a, r) => {
                c.onerror = c.onload = null, clearTimeout(u);
                var t = d[e];
                if (delete d[e], c.parentNode && c.parentNode.removeChild(c), t && t.forEach((e => e(r))), a) return a(r)
              },
              u = setTimeout(l.bind(null, void 0, {
                type: "timeout",
                target: c
              }), 12e4);
            c.onerror = l.bind(null, c.onerror), c.onload = l.bind(null, c.onload), n && document.head.appendChild(c)
          }
        }, i.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, i.nmd = e => (e.paths = [], e.children || (e.children = []), e), c = {
          5426: [31879]
        }, n = {
          31879: ["default", "./index", 25136]
        }, i.f.remotes = (e, a) => {
          i.o(c, e) && c[e].forEach((e => {
            var r = i.R;
            r || (r = []);
            var t = n[e];
            if (!(r.indexOf(t) >= 0)) {
              if (r.push(t), t.p) return a.push(t.p);
              var d = a => {
                  a || (a = new Error("Container missing")), "string" == typeof a.message && (a.message += '\nwhile loading "' + t[1] + '" from ' + t[2]), i.m[e] = () => {
                    throw a
                  }, t.p = 0
                },
                f = (e, r, f, c, n, o) => {
                  try {
                    var b = e(r, f);
                    if (!b || !b.then) return n(b, c, o);
                    var i = b.then((e => n(e, c)), d);
                    if (!o) return i;
                    a.push(t.p = i)
                  } catch (e) {
                    d(e)
                  }
                },
                c = (e, a, d) => f(a.get, t[1], r, 0, o, d),
                o = a => {
                  t.p = 1, i.m[e] = e => {
                    e.exports = a()
                  }
                };
              f(i, t[2], 0, 0, ((e, a, r) => e ? f(i.I, t[0], 0, e, c, r) : d()), 1)
            }
          }))
        }, (() => {
          i.S = {};
          var e = {},
            a = {};
          i.I = (r, t) => {
            t || (t = []);
            var d = a[r];
            if (d || (d = a[r] = {}), !(t.indexOf(d) >= 0)) {
              if (t.push(d), e[r]) return e[r];
              i.o(i.S, r) || (i.S[r] = {});
              var f = i.S[r],
                c = "@rockstargames/sites-red-dead-redemption-2",
                n = (e, a, r, t) => {
                  var d = f[e] = f[e] || {},
                    n = d[a];
                  (!n || !n.loaded && (!t != !n.eager ? t : c > n.from)) && (d[a] = {
                    get: r,
                    from: c,
                    eager: !!t
                  })
                },
                o = [];
              return "default" === r && (n("@rsgweb/locale-tools", "1.0.0", (() => Promise.all([i.e(3218), i.e(2229), i.e(5)]).then((() => () => i(35671))))), n("@rsgweb/modules-core-agegate", "0.0.0", (() => Promise.all([i.e(7722), i.e(3830), i.e(2592), i.e(2229), i.e(6497), i.e(5966), i.e(964)]).then((() => () => i(50964))))), n("@rsgweb/utils", "1.0.0", (() => Promise.all([i.e(7722), i.e(2229), i.e(6497)]).then((() => () => i(35553))))), n("lodash", "4.17.21", (() => i.e(4981).then((() => () => i(4981))))), n("react-dom", "19.1.0", (() => Promise.all([i.e(2229), i.e(621)]).then((() => () => i(90621))))), n("react-router-dom", "6.30.0", (() => Promise.all([i.e(4105), i.e(2229), i.e(3271)]).then((() => () => i(94105))))), n("react", "18.3.1", (() => i.e(8654).then((() => () => i(98654))))), (() => {
                var e = e => {
                  return a = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(a));
                  var a
                };
                try {
                  var a = i(25136);
                  if (!a) return;
                  var d = e => e && e.init && e.init(i.S[r], t);
                  if (a.then) return o.push(a.then(d, e));
                  var f = d(a);
                  if (f && f.then) return o.push(f.catch(e))
                } catch (a) {
                  e(a)
                }
              })()), o.length ? e[r] = Promise.all(o).then((() => e[r] = 1)) : e[r] = 1
            }
          }
        })(), (() => {
          var e;
          i.g.importScripts && (e = i.g.location + "");
          var a = i.g.document;
          if (!e && a && (a.currentScript && "SCRIPT" === a.currentScript.tagName.toUpperCase() && (e = a.currentScript.src), !e)) {
            var r = a.getElementsByTagName("script");
            if (r.length)
              for (var t = r.length - 1; t > -1 && (!e || !/^http(s?):/.test(e));) e = r[t--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), i.p = e
        })(), (() => {
          var e = e => {
              var a = e => e.split(".").map((e => +e == e ? +e : e)),
                r = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
                t = r[1] ? a(r[1]) : [];
              return r[2] && (t.length++, t.push.apply(t, a(r[2]))), r[3] && (t.push([]), t.push.apply(t, a(r[3]))), t
            },
            a = e => {
              var r = e[0],
                t = "";
              if (1 === e.length) return "*";
              if (r + .5) {
                t += 0 == r ? ">=" : -1 == r ? "<" : 1 == r ? "^" : 2 == r ? "~" : r > 0 ? "=" : "!=";
                for (var d = 1, f = 1; f < e.length; f++) d--, t += "u" == (typeof(n = e[f]))[0] ? "-" : (d > 0 ? "." : "") + (d = 2, n);
                return t
              }
              var c = [];
              for (f = 1; f < e.length; f++) {
                var n = e[f];
                c.push(0 === n ? "not(" + o() + ")" : 1 === n ? "(" + o() + " || " + o() + ")" : 2 === n ? c.pop() + " " + c.pop() : a(n))
              }
              return o();

              function o() {
                return c.pop().replace(/^\((.+)\)$/, "$1")
              }
            },
            r = (a, t) => {
              if (0 in a) {
                t = e(t);
                var d = a[0],
                  f = d < 0;
                f && (d = -d - 1);
                for (var c = 0, n = 1, o = !0;; n++, c++) {
                  var b, i, s = n < a.length ? (typeof a[n])[0] : "";
                  if (c >= t.length || "o" == (i = (typeof(b = t[c]))[0])) return !o || ("u" == s ? n > d && !f : "" == s != f);
                  if ("u" == i) {
                    if (!o || "u" != s) return !1
                  } else if (o)
                    if (s == i)
                      if (n <= d) {
                        if (b != a[n]) return !1
                      } else {
                        if (f ? b > a[n] : b < a[n]) return !1;
                        b != a[n] && (o = !1)
                      }
                  else if ("s" != s && "n" != s) {
                    if (f || n <= d) return !1;
                    o = !1, n--
                  } else {
                    if (n <= d || i < s != f) return !1;
                    o = !1
                  } else "s" != s && "n" != s && (o = !1, n--)
                }
              }
              var l = [],
                u = l.pop.bind(l);
              for (c = 1; c < a.length; c++) {
                var p = a[c];
                l.push(1 == p ? u() | u() : 2 == p ? u() & u() : p ? r(p, t) : !u())
              }
              return !!u()
            },
            t = (a, t, d, f) => {
              var c = f ? (e => Object.keys(e).reduce(((a, r) => (e[r].eager && (a[r] = e[r]), a)), {}))(a[t]) : a[t];
              return (t = Object.keys(c).reduce(((a, t) => !r(d, t) || a && !((a, r) => {
                a = e(a), r = e(r);
                for (var t = 0;;) {
                  if (t >= a.length) return t < r.length && "u" != (typeof r[t])[0];
                  var d = a[t],
                    f = (typeof d)[0];
                  if (t >= r.length) return "u" == f;
                  var c = r[t],
                    n = (typeof c)[0];
                  if (f != n) return "o" == f && "n" == n || "s" == n || "u" == f;
                  if ("o" != f && "u" != f && d != c) return d < c;
                  t++
                }
              })(a, t) ? a : t), 0)) && c[t]
            },
            d = e => {
              throw new Error(e)
            },
            f = (e => function(a, r, t, d, f) {
              var c = i.I(a);
              return c && c.then && !t ? c.then(e.bind(e, a, i.S[a], r, !1, d, f)) : e(a, i.S[a], r, t, d, f)
            })(((e, r, f, c, n, o) => {
              if (!((e, a) => e && i.o(e, a))(r, f)) return ((e, a, r) => r ? r() : ((e, a) => d("Shared module " + a + " doesn't exist in shared scope " + e))(e, a))(e, f, o);
              var b, s = t(r, f, n, c);
              return s ? ((b = s).loaded = 1, b.get()) : o ? o() : void d(((e, r, t, d, f) => {
                var c = e[t];
                return "No satisfying version (" + a(d) + ")" + (f ? " for eager consumption" : "") + " of shared module " + t + " found in shared scope " + r + ".\nAvailable versions: " + Object.keys(c).map((e => e + " from " + c[e].from)).join(", ")
              })(r, e, f, n, c))
            })),
            c = {},
            n = {
              62229: () => f("default", "react", !1, [1, 18, 2, 0], (() => i.e(8654).then((() => () => i(98654))))),
              9623: () => f("default", "react-router-dom", !1, [1, 6, 11, 2], (() => Promise.all([i.e(4105), i.e(3271)]).then((() => () => i(94105))))),
              16188: () => f("default", "lodash", !1, [1, 4, 17, 21], (() => i.e(4981).then((() => () => i(4981))))),
              95966: () => f("default", "@rsgweb/utils", !1, [1, "workspace:^"], (() => () => i(35553))),
              47224: () => f("default", "@rsgweb/modules-core-agegate", !1, [1, "workspace:^"], (() => Promise.all([i.e(2592), i.e(8583)]).then((() => () => i(50964))))),
              81788: () => f("default", "@rsgweb/locale-tools", !1, [1, "workspace:^"], (() => Promise.all([i.e(3218), i.e(838)]).then((() => () => i(35671))))),
              23271: () => f("default", "react-dom", !1, [1, 18, 2, 0], (() => i.e(3002).then((() => () => i(90621)))))
            },
            o = {
              2229: [62229],
              3271: [23271],
              5426: [47224, 81788],
              5966: [95966],
              6497: [9623, 16188]
            },
            b = {};
          i.f.consumes = (e, a) => {
            i.o(o, e) && o[e].forEach((e => {
              if (i.o(c, e)) return a.push(c[e]);
              if (!b[e]) {
                var r = a => {
                  c[e] = 0, i.m[e] = r => {
                    delete i.c[e], r.exports = a()
                  }
                };
                b[e] = !0;
                var t = a => {
                  delete c[e], i.m[e] = r => {
                    throw delete i.c[e], a
                  }
                };
                try {
                  var d = n[e]();
                  d.then ? a.push(c[e] = d.then(r).catch(t)) : r(d)
                } catch (e) {
                  t(e)
                }
              }
            }))
          }
        })(), (() => {
          if ("undefined" != typeof document) {
            var e = {
              5082: 0
            };
            i.f.miniCss = (a, r) => {
              e[a] ? r.push(e[a]) : 0 !== e[a] && {
                964: 1,
                5426: 1,
                8583: 1
              } [a] && r.push(e[a] = (e => new Promise(((a, r) => {
                var t = i.miniCssF(e),
                  d = i.p + t;
                if (((e, a) => {
                    for (var r = document.getElementsByTagName("link"), t = 0; t < r.length; t++) {
                      var d = (c = r[t]).getAttribute("data-href") || c.getAttribute("href");
                      if ("stylesheet" === c.rel && (d === e || d === a)) return c
                    }
                    var f = document.getElementsByTagName("style");
                    for (t = 0; t < f.length; t++) {
                      var c;
                      if ((d = (c = f[t]).getAttribute("data-href")) === e || d === a) return c
                    }
                  })(t, d)) return a();
                ((e, a, r, t, d) => {
                  var f = document.createElement("link");
                  f.rel = "stylesheet", f.type = "text/css", i.nc && (f.nonce = i.nc), f.onerror = f.onload = r => {
                    if (f.onerror = f.onload = null, "load" === r.type) t();
                    else {
                      var c = r && r.type,
                        n = r && r.target && r.target.href || a,
                        o = new Error("Loading CSS chunk " + e + " failed.\n(" + c + ": " + n + ")");
                      o.name = "ChunkLoadError", o.code = "CSS_CHUNK_LOAD_FAILED", o.type = c, o.request = n, f.parentNode && f.parentNode.removeChild(f), d(o)
                    }
                  }, f.href = a, document.head.appendChild(f)
                })(e, d, 0, a, r)
              })))(a).then((() => {
                e[a] = 0
              }), (r => {
                throw delete e[a], r
              })))
            }
          }
        })(), (() => {
          var e = {
            5082: 0
          };
          i.f.j = (a, r) => {
            var t = i.o(e, a) ? e[a] : void 0;
            if (0 !== t)
              if (t) r.push(t[2]);
              else if (/^(2229|3271|5966)$/.test(a)) e[a] = 0;
            else {
              var d = new Promise(((r, d) => t = e[a] = [r, d]));
              r.push(t[2] = d);
              var f = i.p + i.u(a),
                c = new Error;
              i.l(f, (r => {
                if (i.o(e, a) && (0 !== (t = e[a]) && (e[a] = void 0), t)) {
                  var d = r && ("load" === r.type ? "missing" : r.type),
                    f = r && r.target && r.target.src;
                  c.message = "Loading chunk " + a + " failed.\n(" + d + ": " + f + ")", c.name = "ChunkLoadError", c.type = d, c.request = f, t[1](c)
                }
              }), "chunk-" + a, a)
            }
          };
          var a = (a, r) => {
              var t, d, f = r[0],
                c = r[1],
                n = r[2],
                o = 0;
              if (f.some((a => 0 !== e[a]))) {
                for (t in c) i.o(c, t) && (i.m[t] = c[t]);
                n && n(i)
              }
              for (a && a(r); o < f.length; o++) d = f[o], i.o(e, d) && e[d] && e[d][0](), e[d] = 0
            },
            r = self.webpackChunk_rockstargames_sites_red_dead_redemption_2 = self.webpackChunk_rockstargames_sites_red_dead_redemption_2 || [];
          r.forEach(a.bind(null, 0)), r.push = a.bind(null, r.push.bind(r))
        })(), i(44857), i(85819)
      })())
    }
  }
}));