try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "fa08202e-4919-4209-86ed-9a6054ac79f6", e._sentryDebugIdIdentifier = "sentry-dbid-fa08202e-4919-4209-86ed-9a6054ac79f6")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-gta-trilogy",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register(["@rockstargames/modules-core-videoplayer"], (function(e, a) {
  var t = {};
  return Object.defineProperty(t, "__esModule", {
    value: !0
  }), {
    setters: [function(e) {
      Object.keys(e).forEach((function(a) {
        t[a] = e[a]
      }))
    }],
    execute: function() {
      e((() => {
        var e, r, f, c, d, n, o = {
            3032: (e, a, t) => {
              t(8419)
            },
            5136: e => {
              "use strict";
              e.exports = t
            },
            5819: (e, a, t) => {
              "use strict";
              var r = {
                  "./index": () => Promise.all([t.e(4910), t.e(7662), t.e(2229), t.e(7583), t.e(1657)]).then((() => () => t(9249)))
                },
                f = (e, a) => (t.R = a, a = t.o(r, e) ? r[e]() : Promise.resolve().then((() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                })), t.R = void 0, a),
                c = (e, a) => {
                  if (t.S) {
                    var r = "default",
                      f = t.S[r];
                    if (f && f !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return t.S[r] = e, t.I(r, a)
                  }
                };
              t.d(a, {
                get: () => f,
                init: () => c
              })
            },
            7027: (e, a, t) => {
              a.y = function(e, a) {
                var t = document.createElement("a");
                t.href = e;
                for (var r = "/" === t.pathname[0] ? t.pathname : "/" + t.pathname, f = 0, c = r.length; f !== a && c >= 0;) "/" === r[--c] && f++;
                if (f !== a) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + a + ") is greater than the number of directories (" + f + ") in the URL path " + e);
                var d = r.slice(0, c + 1);
                return t.protocol + "//" + t.host + d
              };
              Number.isInteger
            },
            7411: (e, a, t) => {
              const r = t(7027).y;
              a.w = function(e) {
                if (e || (e = 1), !t.y.meta || !t.y.meta.url) throw console.error("__system_context__", t.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                t.p = r(t.y.meta.url, e)
              }
            },
            8419: (e, a, t) => {
              (0, t(7411).w)(1)
            }
          },
          i = {};

        function s(e) {
          var a = i[e];
          if (void 0 !== a) return a.exports;
          var t = i[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return o[e].call(t.exports, t, t.exports, s), t.loaded = !0, t.exports
        }
        return s.m = o, s.c = i, s.y = a, s.amdO = {}, s.n = e => {
          var a = e && e.__esModule ? () => e.default : () => e;
          return s.d(a, {
            a
          }), a
        }, r = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, s.t = function(a, t) {
          if (1 & t && (a = this(a)), 8 & t) return a;
          if ("object" == typeof a && a) {
            if (4 & t && a.__esModule) return a;
            if (16 & t && "function" == typeof a.then) return a
          }
          var f = Object.create(null);
          s.r(f);
          var c = {};
          e = e || [null, r({}), r([]), r(r)];
          for (var d = 2 & t && a;
            ("object" == typeof d || "function" == typeof d) && !~e.indexOf(d); d = r(d)) Object.getOwnPropertyNames(d).forEach((e => c[e] = () => a[e]));
          return c.default = () => a, s.d(f, c), f
        }, s.d = (e, a) => {
          for (var t in a) s.o(a, t) && !s.o(e, t) && Object.defineProperty(e, t, {
            enumerable: !0,
            get: a[t]
          })
        }, s.f = {}, s.e = e => Promise.all(Object.keys(s.f).reduce(((a, t) => (s.f[t](e, a), a)), [])), s.u = e => "js/" + {
          131: "00fd628cc19f83339c7e1e226d89217d",
          278: "37288c29900839e7fcd3dba07b3a6a62",
          299: "a17225589ee922a7f8ede443e7bb48ee",
          314: "19b69e725e6110a50127242dcb04d492",
          439: "9df56f251b45fef4d27f9b56d71703c4",
          450: "d85c231db2ddce09999c92b83d28f412",
          662: "e55dcb33de182df2e0eb4c3ffc5ba549",
          824: "72fe1d07c12831fef9c1001484fb9e8b",
          907: "8b33423556e5f6ad47cf085e7b58b335",
          1054: "037b6f3b43549c091b7adcecd5f89433",
          1242: "21c1456985d0eb39ebdc2cd689c17698",
          1657: "131619bcb2c444b19060693126eb929c",
          1822: "f93a2c573a8443791880e61413cad03c",
          1868: "b63b0824569a8a5db96f687629336245",
          2156: "19405fd7c4fd80c9fb96c587bc567389",
          2171: "71ac09fca3e17c3752cd61364577bcc6",
          2221: "259c0fe895126bdf554c5ff29cc5250e",
          2243: "313efd4901857ed2ec02233f8dc3091e",
          2306: "32d758d00e49a1292d3668e83c599821",
          2347: "05109f42e210d68794ba8a665806cf77",
          2365: "b5d52049bb8a1093b639dc01c23bbd90",
          2398: "ccaa18382ec35b01d371599ffad4cc87",
          2466: "8622576a595a9b8ff368a6eaf01cca8c",
          2562: "b29d01e43a1be31ed167878080a8bad4",
          2642: "dc93e36dca27721af3eaf92ddaf4f254",
          2678: "58ca9c72c7771fd4dfcef74d9a960066",
          2864: "6241b252ffa286541aec90910fdc10f5",
          3034: "f96c392144adcc194a5194b5c533626b",
          3197: "e5dd0bdbaa7b50fa9d3515c09d100dea",
          3343: "5d41b4129771e1bdea778d7b3700798b",
          3370: "81e5ae2b97299fa99c3612ba59875a83",
          3475: "ea399e8f930d6c94935dfcb1fc201733",
          3486: "45076c609d20336975bc557e2dcc4562",
          3697: "30cf308896fc45baca81ccb1f19017b2",
          3885: "1e5c499bf6b91b855745e5115ba66a80",
          3941: "a7f27527504ab0537ec2c780b361d477",
          4011: "1bcd68fc7b695948b25e26011b3d8e97",
          4528: "c6a271c2a96cf56389df67f76f001c9a",
          4578: "0e8ec3ce12d29eb5008621e7d7078a73",
          4621: "5d4ccc51d479f3ef949b2c7bd02f8322",
          4700: "f3fa401d6489a6792b9a6fcd24177ead",
          4710: "5384c38b185acc3ce6453d245a424759",
          4731: "77b967dd02306ca57854a39f30d40491",
          4799: "5499295359a90f8f5c9082a99f194da3",
          4851: "aeff823036877e2845fc2fd3adbb72c2",
          4861: "663066e6a392ebb681794cc2eedfe1a9",
          4910: "77ee1c92fbd0c0539c7434ff403fc9be",
          4913: "f8518d33ca019567ed45b4c206f0af68",
          5018: "e94a51a319faf0239a68d7cf7a12fb2a",
          5233: "74798c8a20fc7856adcf1ee8816d2af9",
          5259: "2a6cdcc0f9fb868d2afd8d418a30990f",
          5389: "dfcae45a20b85b8f67cbe1f629664588",
          5530: "2ee15e4f40d16acbc286a5498d0b0213",
          5639: "9549d4967d683bb836d12e346d3f95b7",
          5663: "f325f47d833fda9e20c98b66fbbfaf6e",
          5742: "2bc20f615d969d2fbb7b1ebfb86ee02b",
          5830: "fbdbc925391c2106f197051a359478b5",
          5832: "df324dbb71af432f8db0b8d7ae2d4288",
          5912: "c7c8e46e962151f725c1dab136ca697e",
          6267: "172f90a7a029a6827c480451c4d02ccb",
          6280: "62fea11aa45ac62de91520dca775d48d",
          6285: "4002cda7512c1b5b8c960abc9463679a",
          6361: "b1bd1421da6a4c736f2ed83cb8192fb7",
          6664: "d4537948c4bbd350501c8f3bcac432eb",
          6879: "d6f05961b6f52dc7dd3e9ab178337064",
          6891: "ba962d2a8e46041514f4b7a3465b500b",
          6997: "9e20698f7789c35283f349c85f440da3",
          7010: "37946dff4ddb420b7cf173369ff50405",
          7073: "5a74554627d6b369dd78ba7e8182d42b",
          7436: "c0234542199d08625e3d8703270b17e9",
          7452: "4d756da19c9212fd96f8f9d8bb62a3ba",
          7453: "81ef76375aa5b8c62011201d842ec6ee",
          7583: "37671cb1d0f295a2631ab6eaec3605d0",
          7662: "9dda1b183d9ff2ffdcba805e32f7c137",
          7970: "b809f6f44211ed22566d733c2db57caa",
          8240: "58c5d5e7d96a961815ed92edff697d74",
          8272: "5c0bcd91da0f67b22d4b92e583f0a302",
          8322: "de686e2639c565a470365f8dc22ec8ed",
          8391: "fc3a204c25151cdadfdfbaae8f30afa7",
          8431: "27706d7beba6b79a73a16ba8c6091a5f",
          8659: "a100fc71401191be380605de5d98b5d2",
          8755: "713a6d94c44e495cec8226990117a8d3",
          8880: "792d73e2a1a580de3b304c3e87cc337c",
          8970: "e8d1b8e454342662345c0ec2255d13a0",
          9022: "0e6109f26f77bdcca07959016b6cb67e",
          9028: "d1eaeb58a15dbfdb85b734867ed0a6d3",
          9126: "d4d35a049c4ce59ce5f46679c5ef8c74",
          9377: "abe7447aacc3cdbe6c59f70ff057b1d6",
          9587: "da889a10164357b0edca9ccf82590fc4",
          9615: "12b0f16562f90915e467fd106997b286",
          9757: "b41cbf30b96bd9a10b147209edaf5cc9",
          9936: "c06b02958bf25b5e3fe722a1672965b1",
          9975: "1c16a7d72fe3ddd54ffe6eb7c8611155",
          9990: "d4e6d6b3ba5a4a768b323585843360c4"
        } [e] + ".js", s.miniCssF = e => "css/e78c3ee290f204e2b3dd5bed2b3ce7fc.css", s.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), s.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), f = {}, c = "@rockstargames/sites-gta-trilogy:", s.l = (e, a, t, r) => {
          if (f[e]) f[e].push(a);
          else {
            var d, n;
            if (void 0 !== t)
              for (var o = document.getElementsByTagName("script"), i = 0; i < o.length; i++) {
                var b = o[i];
                if (b.getAttribute("src") == e || b.getAttribute("data-webpack") == c + t) {
                  d = b;
                  break
                }
              }
            d || (n = !0, (d = document.createElement("script")).charset = "utf-8", d.timeout = 120, s.nc && d.setAttribute("nonce", s.nc), d.setAttribute("data-webpack", c + t), d.src = e), f[e] = [a];
            var l = (a, t) => {
                d.onerror = d.onload = null, clearTimeout(u);
                var r = f[e];
                if (delete f[e], d.parentNode && d.parentNode.removeChild(d), r && r.forEach((e => e(t))), a) return a(t)
              },
              u = setTimeout(l.bind(null, void 0, {
                type: "timeout",
                target: d
              }), 12e4);
            d.onerror = l.bind(null, d.onerror), d.onload = l.bind(null, d.onload), n && document.head.appendChild(d)
          }
        }, s.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, s.nmd = e => (e.paths = [], e.children || (e.children = []), e), d = {
          1657: [1879]
        }, n = {
          1879: ["default", "./index", 5136]
        }, s.f.remotes = (e, a) => {
          s.o(d, e) && d[e].forEach((e => {
            var t = s.R;
            t || (t = []);
            var r = n[e];
            if (!(t.indexOf(r) >= 0)) {
              if (t.push(r), r.p) return a.push(r.p);
              var f = a => {
                  a || (a = new Error("Container missing")), "string" == typeof a.message && (a.message += '\nwhile loading "' + r[1] + '" from ' + r[2]), s.m[e] = () => {
                    throw a
                  }, r.p = 0
                },
                c = (e, t, c, d, n, o) => {
                  try {
                    var i = e(t, c);
                    if (!i || !i.then) return n(i, d, o);
                    var s = i.then((e => n(e, d)), f);
                    if (!o) return s;
                    a.push(r.p = s)
                  } catch (e) {
                    f(e)
                  }
                },
                d = (e, a, f) => c(a.get, r[1], t, 0, o, f),
                o = a => {
                  r.p = 1, s.m[e] = e => {
                    e.exports = a()
                  }
                };
              c(s, r[2], 0, 0, ((e, a, t) => e ? c(s.I, r[0], 0, e, d, t) : f()), 1)
            }
          }))
        }, (() => {
          s.S = {};
          var e = {},
            a = {};
          s.I = (t, r) => {
            r || (r = []);
            var f = a[t];
            if (f || (f = a[t] = {}), !(r.indexOf(f) >= 0)) {
              if (r.push(f), e[t]) return e[t];
              s.o(s.S, t) || (s.S[t] = {});
              var c = s.S[t],
                d = "@rockstargames/sites-gta-trilogy",
                n = (e, a, t, r) => {
                  var f = c[e] = c[e] || {},
                    n = f[a];
                  (!n || !n.loaded && (!r != !n.eager ? r : d > n.from)) && (f[a] = {
                    get: t,
                    from: d,
                    eager: !!r
                  })
                },
                o = [];
              return "default" === t && (n("@rsgweb/locale-tools", "1.0.0", (() => Promise.all([s.e(9587), s.e(2229), s.e(9975)]).then((() => () => s(2841))))), n("@rsgweb/utils", "1.0.0", (() => Promise.all([s.e(450), s.e(4910), s.e(2229), s.e(9757), s.e(7583)]).then((() => () => s(9757))))), n("clsx", "2.1.1", (() => s.e(439).then((() => () => s(439))))), n("framer-motion", "7.10.3", (() => Promise.all([s.e(5912), s.e(2229), s.e(8322)]).then((() => () => s(5912))))), n("react-router-dom", "6.30.0", (() => Promise.all([s.e(5389), s.e(2229)]).then((() => () => s(5389))))), n("react", "18.2.0", (() => s.e(8659).then((() => () => s(8659))))), n("react", "18.3.1", (() => s.e(8431).then((() => () => s(8431))))), n("usehooks-ts", "2.16.0", (() => Promise.all([s.e(2562), s.e(2229)]).then((() => () => s(2562))))), (() => {
                var e = e => {
                  return a = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(a));
                  var a
                };
                try {
                  var a = s(5136);
                  if (!a) return;
                  var f = e => e && e.init && e.init(s.S[t], r);
                  if (a.then) return o.push(a.then(f, e));
                  var c = f(a);
                  if (c && c.then) return o.push(c.catch(e))
                } catch (a) {
                  e(a)
                }
              })()), o.length ? e[t] = Promise.all(o).then((() => e[t] = 1)) : e[t] = 1
            }
          }
        })(), (() => {
          var e;
          s.g.importScripts && (e = s.g.location + "");
          var a = s.g.document;
          if (!e && a && (a.currentScript && "SCRIPT" === a.currentScript.tagName.toUpperCase() && (e = a.currentScript.src), !e)) {
            var t = a.getElementsByTagName("script");
            if (t.length)
              for (var r = t.length - 1; r > -1 && (!e || !/^http(s?):/.test(e));) e = t[r--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), s.p = e
        })(), (() => {
          var e = e => {
              var a = e => e.split(".").map((e => +e == e ? +e : e)),
                t = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
                r = t[1] ? a(t[1]) : [];
              return t[2] && (r.length++, r.push.apply(r, a(t[2]))), t[3] && (r.push([]), r.push.apply(r, a(t[3]))), r
            },
            a = e => {
              var t = e[0],
                r = "";
              if (1 === e.length) return "*";
              if (t + .5) {
                r += 0 == t ? ">=" : -1 == t ? "<" : 1 == t ? "^" : 2 == t ? "~" : t > 0 ? "=" : "!=";
                for (var f = 1, c = 1; c < e.length; c++) f--, r += "u" == (typeof(n = e[c]))[0] ? "-" : (f > 0 ? "." : "") + (f = 2, n);
                return r
              }
              var d = [];
              for (c = 1; c < e.length; c++) {
                var n = e[c];
                d.push(0 === n ? "not(" + o() + ")" : 1 === n ? "(" + o() + " || " + o() + ")" : 2 === n ? d.pop() + " " + d.pop() : a(n))
              }
              return o();

              function o() {
                return d.pop().replace(/^\((.+)\)$/, "$1")
              }
            },
            t = (a, r) => {
              if (0 in a) {
                r = e(r);
                var f = a[0],
                  c = f < 0;
                c && (f = -f - 1);
                for (var d = 0, n = 1, o = !0;; n++, d++) {
                  var i, s, b = n < a.length ? (typeof a[n])[0] : "";
                  if (d >= r.length || "o" == (s = (typeof(i = r[d]))[0])) return !o || ("u" == b ? n > f && !c : "" == b != c);
                  if ("u" == s) {
                    if (!o || "u" != b) return !1
                  } else if (o)
                    if (b == s)
                      if (n <= f) {
                        if (i != a[n]) return !1
                      } else {
                        if (c ? i > a[n] : i < a[n]) return !1;
                        i != a[n] && (o = !1)
                      }
                  else if ("s" != b && "n" != b) {
                    if (c || n <= f) return !1;
                    o = !1, n--
                  } else {
                    if (n <= f || s < b != c) return !1;
                    o = !1
                  } else "s" != b && "n" != b && (o = !1, n--)
                }
              }
              var l = [],
                u = l.pop.bind(l);
              for (d = 1; d < a.length; d++) {
                var p = a[d];
                l.push(1 == p ? u() | u() : 2 == p ? u() & u() : p ? t(p, r) : !u())
              }
              return !!u()
            },
            r = (a, r, f, c) => {
              var d = c ? (e => Object.keys(e).reduce(((a, t) => (e[t].eager && (a[t] = e[t]), a)), {}))(a[r]) : a[r];
              return (r = Object.keys(d).reduce(((a, r) => !t(f, r) || a && !((a, t) => {
                a = e(a), t = e(t);
                for (var r = 0;;) {
                  if (r >= a.length) return r < t.length && "u" != (typeof t[r])[0];
                  var f = a[r],
                    c = (typeof f)[0];
                  if (r >= t.length) return "u" == c;
                  var d = t[r],
                    n = (typeof d)[0];
                  if (c != n) return "o" == c && "n" == n || "s" == n || "u" == c;
                  if ("o" != c && "u" != c && f != d) return f < d;
                  r++
                }
              })(a, r) ? a : r), 0)) && d[r]
            },
            f = e => {
              throw new Error(e)
            },
            c = (e => function(a, t, r, f, c) {
              var d = s.I(a);
              return d && d.then && !r ? d.then(e.bind(e, a, s.S[a], t, !1, f, c)) : e(a, s.S[a], t, r, f, c)
            })(((e, t, c, d, n, o) => {
              if (!((e, a) => e && s.o(e, a))(t, c)) return ((e, a, t) => t ? t() : ((e, a) => f("Shared module " + a + " doesn't exist in shared scope " + e))(e, a))(e, c, o);
              var i, b = r(t, c, n, d);
              return b ? ((i = b).loaded = 1, i.get()) : o ? o() : void f(((e, t, r, f, c) => {
                var d = e[r];
                return "No satisfying version (" + a(f) + ")" + (c ? " for eager consumption" : "") + " of shared module " + r + " found in shared scope " + t + ".\nAvailable versions: " + Object.keys(d).map((e => e + " from " + d[e].from)).join(", ")
              })(t, e, c, n, d))
            })),
            d = {},
            n = {
              2229: () => c("default", "react", !1, [1, 18, 2, 0], (() => s.e(8431).then((() => () => s(8431))))),
              1788: () => c("default", "@rsgweb/locale-tools", !1, [1, "workspace:^"], (() => Promise.all([s.e(9587), s.e(8240)]).then((() => () => s(2841))))),
              9623: () => c("default", "react-router-dom", !1, [1, 6, 11, 2], (() => s.e(5389).then((() => () => s(5389))))),
              1913: () => c("default", "react", !1, [1, 18, 2, 0], (() => s.e(8659).then((() => () => s(8659))))),
              3582: () => c("default", "framer-motion", !1, [1, 7, 5, 1], (() => s.e(5912).then((() => () => s(5912))))),
              4572: () => c("default", "clsx", !1, [1, 2, 1, 1], (() => s.e(439).then((() => () => s(439))))),
              5587: () => c("default", "usehooks-ts", !1, [1, 2, 7, 2], (() => s.e(2562).then((() => () => s(2562))))),
              5966: () => c("default", "@rsgweb/utils", !1, [1, "workspace:^"], (() => Promise.all([s.e(450), s.e(9757)]).then((() => () => s(9757)))))
            },
            o = {
              1657: [1913, 3582, 4572, 5587, 5966],
              2229: [2229],
              7583: [1788, 9623]
            },
            i = {};
          s.f.consumes = (e, a) => {
            s.o(o, e) && o[e].forEach((e => {
              if (s.o(d, e)) return a.push(d[e]);
              if (!i[e]) {
                var t = a => {
                  d[e] = 0, s.m[e] = t => {
                    delete s.c[e], t.exports = a()
                  }
                };
                i[e] = !0;
                var r = a => {
                  delete d[e], s.m[e] = t => {
                    throw delete s.c[e], a
                  }
                };
                try {
                  var f = n[e]();
                  f.then ? a.push(d[e] = f.then(t).catch(r)) : t(f)
                } catch (e) {
                  r(e)
                }
              }
            }))
          }
        })(), (() => {
          if ("undefined" != typeof document) {
            var e = {
              7060: 0
            };
            s.f.miniCss = (a, t) => {
              e[a] ? t.push(e[a]) : 0 !== e[a] && {
                1657: 1
              } [a] && t.push(e[a] = (e => new Promise(((a, t) => {
                var r = s.miniCssF(e),
                  f = s.p + r;
                if (((e, a) => {
                    for (var t = document.getElementsByTagName("link"), r = 0; r < t.length; r++) {
                      var f = (d = t[r]).getAttribute("data-href") || d.getAttribute("href");
                      if ("stylesheet" === d.rel && (f === e || f === a)) return d
                    }
                    var c = document.getElementsByTagName("style");
                    for (r = 0; r < c.length; r++) {
                      var d;
                      if ((f = (d = c[r]).getAttribute("data-href")) === e || f === a) return d
                    }
                  })(r, f)) return a();
                ((e, a, t, r, f) => {
                  var c = document.createElement("link");
                  c.rel = "stylesheet", c.type = "text/css", s.nc && (c.nonce = s.nc), c.onerror = c.onload = t => {
                    if (c.onerror = c.onload = null, "load" === t.type) r();
                    else {
                      var d = t && t.type,
                        n = t && t.target && t.target.href || a,
                        o = new Error("Loading CSS chunk " + e + " failed.\n(" + d + ": " + n + ")");
                      o.name = "ChunkLoadError", o.code = "CSS_CHUNK_LOAD_FAILED", o.type = d, o.request = n, c.parentNode && c.parentNode.removeChild(c), f(o)
                    }
                  }, c.href = a, document.head.appendChild(c)
                })(e, f, 0, a, t)
              })))(a).then((() => {
                e[a] = 0
              }), (t => {
                throw delete e[a], t
              })))
            }
          }
        })(), (() => {
          var e = {
            7060: 0
          };
          s.f.j = (a, t) => {
            var r = s.o(e, a) ? e[a] : void 0;
            if (0 !== r)
              if (r) t.push(r[2]);
              else if (2229 != a) {
              var f = new Promise(((t, f) => r = e[a] = [t, f]));
              t.push(r[2] = f);
              var c = s.p + s.u(a),
                d = new Error;
              s.l(c, (t => {
                if (s.o(e, a) && (0 !== (r = e[a]) && (e[a] = void 0), r)) {
                  var f = t && ("load" === t.type ? "missing" : t.type),
                    c = t && t.target && t.target.src;
                  d.message = "Loading chunk " + a + " failed.\n(" + f + ": " + c + ")", d.name = "ChunkLoadError", d.type = f, d.request = c, r[1](d)
                }
              }), "chunk-" + a, a)
            } else e[a] = 0
          };
          var a = (a, t) => {
              var r, f, [c, d, n] = t,
                o = 0;
              if (c.some((a => 0 !== e[a]))) {
                for (r in d) s.o(d, r) && (s.m[r] = d[r]);
                n && n(s)
              }
              for (a && a(t); o < c.length; o++) f = c[o], s.o(e, f) && e[f] && e[f][0](), e[f] = 0
            },
            t = self.webpackChunk_rockstargames_sites_gta_trilogy = self.webpackChunk_rockstargames_sites_gta_trilogy || [];
          t.forEach(a.bind(null, 0)), t.push = a.bind(null, t.push.bind(t))
        })(), s(3032), s(5819)
      })())
    }
  }
}));