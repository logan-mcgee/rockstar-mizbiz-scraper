try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "d70e23dd-9cce-478e-8073-c704ebcc285d", e._sentryDebugIdIdentifier = "sentry-dbid-d70e23dd-9cce-478e-8073-c704ebcc285d")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-gta-trilogy",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register(["@rockstargames/modules-core-videoplayer"], function(e, a) {
  var t = {};
  return Object.defineProperty(t, "__esModule", {
    value: !0
  }), {
    setters: [function(e) {
      Object.keys(e).forEach(function(a) {
        t[a] = e[a]
      })
    }],
    execute: function() {
      e((() => {
        var e, r, d, f, c, n, o = {
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
                  "./index": () => Promise.all([t.e(4910), t.e(4656), t.e(2229), t.e(5811), t.e(1657)]).then(() => () => t(9249))
                },
                d = (e, a) => (t.R = a, a = t.o(r, e) ? r[e]() : Promise.resolve().then(() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                }), t.R = void 0, a),
                f = (e, a) => {
                  if (t.S) {
                    var r = "default",
                      d = t.S[r];
                    if (d && d !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return t.S[r] = e, t.I(r, a)
                  }
                };
              t.d(a, {
                get: () => d,
                init: () => f
              })
            },
            7027: (e, a, t) => {
              a.y = function(e, a) {
                var t = document.createElement("a");
                t.href = e;
                for (var r = "/" === t.pathname[0] ? t.pathname : "/" + t.pathname, d = 0, f = r.length; d !== a && f >= 0;) "/" === r[--f] && d++;
                if (d !== a) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + a + ") is greater than the number of directories (" + d + ") in the URL path " + e);
                var c = r.slice(0, f + 1);
                return t.protocol + "//" + t.host + c
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
          var d = Object.create(null);
          s.r(d);
          var f = {};
          e = e || [null, r({}), r([]), r(r)];
          for (var c = 2 & t && a;
            ("object" == typeof c || "function" == typeof c) && !~e.indexOf(c); c = r(c)) Object.getOwnPropertyNames(c).forEach(e => f[e] = () => a[e]);
          return f.default = () => a, s.d(d, f), d
        }, s.d = (e, a) => {
          for (var t in a) s.o(a, t) && !s.o(e, t) && Object.defineProperty(e, t, {
            enumerable: !0,
            get: a[t]
          })
        }, s.f = {}, s.e = e => Promise.all(Object.keys(s.f).reduce((a, t) => (s.f[t](e, a), a), [])), s.u = e => "js/" + {
          131: "172e1a3ad328e7184ffdf7665eceb851",
          278: "e9edd5a783291f83859431c228b3c4f9",
          299: "6a58b0eadd28f310d5be96d29706e9c5",
          314: "b8cef7a55276a4f307c8436b53dc2681",
          439: "022a79ad5f457572d567844d86e84cda",
          450: "1f112efb41c3b1297464a4cdc084971a",
          662: "b9b67ec934085c275684cef512e5975e",
          824: "a91d8d4bfeff362be3f47c51ee992f51",
          907: "3c72e737294bdb3801b55a56b9fbe5c3",
          1054: "bb2aac508ce169c68ce6441de6f98f16",
          1242: "0eb49241e612e083c93653c98bae99fe",
          1657: "ac3b7c6d05ee2f7b15554a84714cc376",
          1822: "21d8e8f9b04837f1913f56e7c0652772",
          1868: "efb7943123e11a90d2e869432f5a281c",
          2156: "a76c897b28a16675a5d66541c6016ba0",
          2171: "72ce644db57e6a9cbe5e785416b866c1",
          2221: "631158d5cbf0ff1c38d8f45c1edf5991",
          2243: "0ee0cd18658a70c34aa583a7a15c48d5",
          2306: "095b80b4ac6067aed09fdaa396668fe0",
          2347: "c5e70b837491f323da71b5ef6b49aab4",
          2365: "b71f242208b39103d2f6104462cfb086",
          2398: "2395345725fc6ebaaf106a584f590507",
          2466: "839062a7aae80ad79dc55611cfc8e2cb",
          2562: "911b0f089493e32c622edd83ca9f35f7",
          2642: "35c5d9fd3889e774d5ffc19f2e725750",
          2678: "750b38dd22297f8d8e13c2684bfa23de",
          2864: "f47c68370f9022a400501db2da237a96",
          3034: "bb8ca118a4c5c24ad503fb950d5bcebc",
          3197: "3c1c9d64724bd9afd8fc310f264e512b",
          3343: "59cd6a1c8f36a16ec8c96cd83e1b6c16",
          3370: "99ceccd0dde81218d15caab5b5d9fa39",
          3475: "f1e0111b70af682685f4c2dd6a2d7a4f",
          3486: "775dcdd03daa2338b27a5bd99281b836",
          3697: "3874acf43863d7cae9b41781f05f5bf8",
          3885: "0a12de462def7ec1c4e0913f975f2ded",
          3941: "742cf9800b49c5a2b5580af9c39e3a55",
          4011: "c9bf0aa4d31365292af94a0baedbd872",
          4528: "eecbfde41b2257f7a6357e5380309bba",
          4578: "15047581917ad5983a07d9fac6e36ec8",
          4621: "3f867c93b73016304f1faaf7b4944bd8",
          4656: "d251ac51d453bcf9920d88735c7e6b43",
          4700: "0f3a56417f5b0a450c299fcc88fea363",
          4710: "436d51ede8685bcbeef96cdd9fe83761",
          4731: "0f6268d3722612288df427a0104e23d2",
          4799: "16a3b4c136843ca79145fc8ae9978547",
          4851: "f17e5b8c00106c5adde59561fc34072a",
          4861: "abc1cc4dfc51458185b35b7a59c7f376",
          4910: "39bc26ef3721669fe6932e539080a9af",
          4913: "c6002cda48111bc6202ab55fe31c0789",
          5018: "8d7499ba1e07a93f4bfcf6e82cf39e51",
          5233: "70de79d662960e3dbe459e579023dbcc",
          5259: "0b1c451872e17e38bd6c1477da5162c6",
          5389: "ee61e49c8ff31eb3964cc92651038884",
          5530: "2c6c09c542c5bf32beb6515ae6f6763e",
          5639: "269ed4778943c35abd97bf33d6609590",
          5663: "a88c512ab0a1f8fc3d54d32d143d1b95",
          5742: "989413e9555ebe430e37953ac931aea5",
          5811: "a9695a71bf9179f06c15ba81ae2bd872",
          5830: "7e6724cfdb06025f5d879ef06645348f",
          5832: "21ef8e8328b89ba68ff3e33e0bfa8e73",
          5912: "ab900215646a73c06a23f7bb31691cc5",
          6267: "9ae65bcaafe5bdef368f5f5406da1488",
          6280: "8be6c361d4bf712fc17a379fcd99556d",
          6285: "36f864eee3f539c1b23cef68775a13d8",
          6361: "df4ccbf3626a7866b882b0de40cb0c15",
          6664: "b63c739f8da1d845c0cb2ca80c52936c",
          6879: "ab05297b7aceaa7e849e78e86c00e322",
          6891: "c8c74285c42cabf1e57529937ce0671e",
          6997: "283236a7723dbc21ac55d95c6c348c9c",
          7010: "ff1a811a52d5213f86c931a8ace7db4b",
          7073: "ac5768532ff036a16b233cecd56098b0",
          7436: "baa3f31f79b9be9ae456a2ab85f8ea84",
          7452: "9761df1d0874461956220ccd872dd6b2",
          7453: "fa5196cd273991c7db66cdaaf702b2aa",
          7970: "52109e3cb72934c7ecb0eca5ed8da5c0",
          8240: "ed515f48dab5eaa6ba229ac9c264656a",
          8272: "95d5b82dec8b3dc85468d636e29e8407",
          8322: "83bd3dc858d69f02b775e470a8f8a70f",
          8391: "a6d0e7dee13262275bb3ae3c694ff076",
          8431: "b5c20d7525fa8c61b8ffad1272519175",
          8659: "61375c5cee4ca9aa47b3b36eaae61cb6",
          8755: "f26f1d6420418c43a88678862fff1ea9",
          8880: "5ea7f729664fc53160db768d4ebe3b25",
          8970: "f1a5d6da0c9caa95b032cb6e4df05d14",
          9022: "24db4d4b8ed0cb7ffa4290b8aa964e25",
          9028: "85e2425b47d6771972e68eb845117b06",
          9126: "a9cb620bf6586d6c0e35cea48fab3706",
          9377: "c6827479629806d550e3cecf8436ae18",
          9587: "4e2aefa9be29c6dd236d6591f1b6609e",
          9615: "a0739cda6fa9421507bef2ee99b08ffc",
          9757: "d27ccc3163edfc8cc31d7fefc2e90c25",
          9936: "2fa568bfc1a746d3df8b4879ebb14145",
          9975: "11dce78b16e0f4cf76ecc2ffb7828a2a",
          9990: "6d2cac7c587a2514776188d1b1c337e5"
        } [e] + ".js", s.miniCssF = e => "css/b00df4b72b841993e7bc5c20ee7ecbac.css", s.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), s.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), d = {}, f = "@rockstargames/sites-gta-trilogy:", s.l = (e, a, t, r) => {
          if (d[e]) d[e].push(a);
          else {
            var c, n;
            if (void 0 !== t)
              for (var o = document.getElementsByTagName("script"), i = 0; i < o.length; i++) {
                var b = o[i];
                if (b.getAttribute("src") == e || b.getAttribute("data-webpack") == f + t) {
                  c = b;
                  break
                }
              }
            c || (n = !0, (c = document.createElement("script")).charset = "utf-8", c.timeout = 120, s.nc && c.setAttribute("nonce", s.nc), c.setAttribute("data-webpack", f + t), c.src = e), d[e] = [a];
            var l = (a, t) => {
                c.onerror = c.onload = null, clearTimeout(u);
                var r = d[e];
                if (delete d[e], c.parentNode && c.parentNode.removeChild(c), r && r.forEach(e => e(t)), a) return a(t)
              },
              u = setTimeout(l.bind(null, void 0, {
                type: "timeout",
                target: c
              }), 12e4);
            c.onerror = l.bind(null, c.onerror), c.onload = l.bind(null, c.onload), n && document.head.appendChild(c)
          }
        }, s.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, s.nmd = e => (e.paths = [], e.children || (e.children = []), e), c = {
          1657: [1879]
        }, n = {
          1879: ["default", "./index", 5136]
        }, s.f.remotes = (e, a) => {
          s.o(c, e) && c[e].forEach(e => {
            var t = s.R;
            t || (t = []);
            var r = n[e];
            if (!(t.indexOf(r) >= 0)) {
              if (t.push(r), r.p) return a.push(r.p);
              var d = a => {
                  a || (a = new Error("Container missing")), "string" == typeof a.message && (a.message += '\nwhile loading "' + r[1] + '" from ' + r[2]), s.m[e] = () => {
                    throw a
                  }, r.p = 0
                },
                f = (e, t, f, c, n, o) => {
                  try {
                    var i = e(t, f);
                    if (!i || !i.then) return n(i, c, o);
                    var s = i.then(e => n(e, c), d);
                    if (!o) return s;
                    a.push(r.p = s)
                  } catch (e) {
                    d(e)
                  }
                },
                c = (e, a, d) => f(a.get, r[1], t, 0, o, d),
                o = a => {
                  r.p = 1, s.m[e] = e => {
                    e.exports = a()
                  }
                };
              f(s, r[2], 0, 0, (e, a, t) => e ? f(s.I, r[0], 0, e, c, t) : d(), 1)
            }
          })
        }, (() => {
          s.S = {};
          var e = {},
            a = {};
          s.I = (t, r) => {
            r || (r = []);
            var d = a[t];
            if (d || (d = a[t] = {}), !(r.indexOf(d) >= 0)) {
              if (r.push(d), e[t]) return e[t];
              s.o(s.S, t) || (s.S[t] = {});
              var f = s.S[t],
                c = "@rockstargames/sites-gta-trilogy",
                n = (e, a, t, r) => {
                  var d = f[e] = f[e] || {},
                    n = d[a];
                  (!n || !n.loaded && (!r != !n.eager ? r : c > n.from)) && (d[a] = {
                    get: t,
                    from: c,
                    eager: !!r
                  })
                },
                o = [];
              return "default" === t && (n("@rsgweb/locale-tools", "1.0.0", () => Promise.all([s.e(9587), s.e(2229), s.e(9975)]).then(() => () => s(2841))), n("@rsgweb/utils", "1.0.0", () => Promise.all([s.e(450), s.e(4910), s.e(2229), s.e(9757), s.e(5811)]).then(() => () => s(9757))), n("clsx", "2.1.1", () => s.e(439).then(() => () => s(439))), n("framer-motion", "7.10.3", () => Promise.all([s.e(5912), s.e(2229), s.e(8322)]).then(() => () => s(5912))), n("react-router-dom", "6.30.1", () => Promise.all([s.e(5389), s.e(2229)]).then(() => () => s(5389))), n("react", "18.2.0", () => s.e(8659).then(() => () => s(8659))), n("react", "18.3.1", () => s.e(8431).then(() => () => s(8431))), n("usehooks-ts", "2.16.0", () => Promise.all([s.e(2562), s.e(2229)]).then(() => () => s(2562))), (() => {
                var e = e => {
                  return a = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(a));
                  var a
                };
                try {
                  var a = s(5136);
                  if (!a) return;
                  var d = e => e && e.init && e.init(s.S[t], r);
                  if (a.then) return o.push(a.then(d, e));
                  var f = d(a);
                  if (f && f.then) return o.push(f.catch(e))
                } catch (a) {
                  e(a)
                }
              })()), o.length ? e[t] = Promise.all(o).then(() => e[t] = 1) : e[t] = 1
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
              var a = e => e.split(".").map(e => +e == e ? +e : e),
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
                for (var d = 1, f = 1; f < e.length; f++) d--, r += "u" == (typeof(n = e[f]))[0] ? "-" : (d > 0 ? "." : "") + (d = 2, n);
                return r
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
            t = (a, r) => {
              if (0 in a) {
                r = e(r);
                var d = a[0],
                  f = d < 0;
                f && (d = -d - 1);
                for (var c = 0, n = 1, o = !0;; n++, c++) {
                  var i, s, b = n < a.length ? (typeof a[n])[0] : "";
                  if (c >= r.length || "o" == (s = (typeof(i = r[c]))[0])) return !o || ("u" == b ? n > d && !f : "" == b != f);
                  if ("u" == s) {
                    if (!o || "u" != b) return !1
                  } else if (o)
                    if (b == s)
                      if (n <= d) {
                        if (i != a[n]) return !1
                      } else {
                        if (f ? i > a[n] : i < a[n]) return !1;
                        i != a[n] && (o = !1)
                      }
                  else if ("s" != b && "n" != b) {
                    if (f || n <= d) return !1;
                    o = !1, n--
                  } else {
                    if (n <= d || s < b != f) return !1;
                    o = !1
                  } else "s" != b && "n" != b && (o = !1, n--)
                }
              }
              var l = [],
                u = l.pop.bind(l);
              for (c = 1; c < a.length; c++) {
                var p = a[c];
                l.push(1 == p ? u() | u() : 2 == p ? u() & u() : p ? t(p, r) : !u())
              }
              return !!u()
            },
            r = (a, r, d, f) => {
              var c = f ? (e => Object.keys(e).reduce((a, t) => (e[t].eager && (a[t] = e[t]), a), {}))(a[r]) : a[r];
              return (r = Object.keys(c).reduce((a, r) => !t(d, r) || a && !((a, t) => {
                a = e(a), t = e(t);
                for (var r = 0;;) {
                  if (r >= a.length) return r < t.length && "u" != (typeof t[r])[0];
                  var d = a[r],
                    f = (typeof d)[0];
                  if (r >= t.length) return "u" == f;
                  var c = t[r],
                    n = (typeof c)[0];
                  if (f != n) return "o" == f && "n" == n || "s" == n || "u" == f;
                  if ("o" != f && "u" != f && d != c) return d < c;
                  r++
                }
              })(a, r) ? a : r, 0)) && c[r]
            },
            d = e => {
              throw new Error(e)
            },
            f = (e => function(a, t, r, d, f) {
              var c = s.I(a);
              return c && c.then && !r ? c.then(e.bind(e, a, s.S[a], t, !1, d, f)) : e(a, s.S[a], t, r, d, f)
            })((e, t, f, c, n, o) => {
              if (!((e, a) => e && s.o(e, a))(t, f)) return ((e, a, t) => t ? t() : ((e, a) => d("Shared module " + a + " doesn't exist in shared scope " + e))(e, a))(e, f, o);
              var i, b = r(t, f, n, c);
              return b ? ((i = b).loaded = 1, i.get()) : o ? o() : void d(((e, t, r, d, f) => {
                var c = e[r];
                return "No satisfying version (" + a(d) + ")" + (f ? " for eager consumption" : "") + " of shared module " + r + " found in shared scope " + t + ".\nAvailable versions: " + Object.keys(c).map(e => e + " from " + c[e].from).join(", ")
              })(t, e, f, n, c))
            }),
            c = {},
            n = {
              2229: () => f("default", "react", !1, [1, 18, 2, 0], () => s.e(8431).then(() => () => s(8431))),
              1788: () => f("default", "@rsgweb/locale-tools", !1, [1, "workspace:^"], () => Promise.all([s.e(9587), s.e(8240)]).then(() => () => s(2841))),
              9623: () => f("default", "react-router-dom", !1, [1, 6, 11, 2], () => s.e(5389).then(() => () => s(5389))),
              1913: () => f("default", "react", !1, [1, 18, 2, 0], () => s.e(8659).then(() => () => s(8659))),
              3582: () => f("default", "framer-motion", !1, [1, 7, 5, 1], () => s.e(5912).then(() => () => s(5912))),
              4572: () => f("default", "clsx", !1, [1, 2, 1, 1], () => s.e(439).then(() => () => s(439))),
              5587: () => f("default", "usehooks-ts", !1, [1, 2, 7, 2], () => s.e(2562).then(() => () => s(2562))),
              5966: () => f("default", "@rsgweb/utils", !1, [1, "workspace:^"], () => Promise.all([s.e(450), s.e(9757)]).then(() => () => s(9757)))
            },
            o = {
              1657: [1913, 3582, 4572, 5587, 5966],
              2229: [2229],
              5811: [1788, 9623]
            },
            i = {};
          s.f.consumes = (e, a) => {
            s.o(o, e) && o[e].forEach(e => {
              if (s.o(c, e)) return a.push(c[e]);
              if (!i[e]) {
                var t = a => {
                  c[e] = 0, s.m[e] = t => {
                    delete s.c[e], t.exports = a()
                  }
                };
                i[e] = !0;
                var r = a => {
                  delete c[e], s.m[e] = t => {
                    throw delete s.c[e], a
                  }
                };
                try {
                  var d = n[e]();
                  d.then ? a.push(c[e] = d.then(t).catch(r)) : t(d)
                } catch (e) {
                  r(e)
                }
              }
            })
          }
        })(), (() => {
          if ("undefined" != typeof document) {
            var e = {
              7060: 0
            };
            s.f.miniCss = (a, t) => {
              e[a] ? t.push(e[a]) : 0 !== e[a] && {
                1657: 1
              } [a] && t.push(e[a] = (e => new Promise((a, t) => {
                var r = s.miniCssF(e),
                  d = s.p + r;
                if (((e, a) => {
                    for (var t = document.getElementsByTagName("link"), r = 0; r < t.length; r++) {
                      var d = (c = t[r]).getAttribute("data-href") || c.getAttribute("href");
                      if ("stylesheet" === c.rel && (d === e || d === a)) return c
                    }
                    var f = document.getElementsByTagName("style");
                    for (r = 0; r < f.length; r++) {
                      var c;
                      if ((d = (c = f[r]).getAttribute("data-href")) === e || d === a) return c
                    }
                  })(r, d)) return a();
                ((e, a, t, r, d) => {
                  var f = document.createElement("link");
                  f.rel = "stylesheet", f.type = "text/css", s.nc && (f.nonce = s.nc), f.onerror = f.onload = t => {
                    if (f.onerror = f.onload = null, "load" === t.type) r();
                    else {
                      var c = t && t.type,
                        n = t && t.target && t.target.href || a,
                        o = new Error("Loading CSS chunk " + e + " failed.\n(" + c + ": " + n + ")");
                      o.name = "ChunkLoadError", o.code = "CSS_CHUNK_LOAD_FAILED", o.type = c, o.request = n, f.parentNode && f.parentNode.removeChild(f), d(o)
                    }
                  }, f.href = a, document.head.appendChild(f)
                })(e, d, 0, a, t)
              }))(a).then(() => {
                e[a] = 0
              }, t => {
                throw delete e[a], t
              }))
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
              var d = new Promise((t, d) => r = e[a] = [t, d]);
              t.push(r[2] = d);
              var f = s.p + s.u(a),
                c = new Error;
              s.l(f, t => {
                if (s.o(e, a) && (0 !== (r = e[a]) && (e[a] = void 0), r)) {
                  var d = t && ("load" === t.type ? "missing" : t.type),
                    f = t && t.target && t.target.src;
                  c.message = "Loading chunk " + a + " failed.\n(" + d + ": " + f + ")", c.name = "ChunkLoadError", c.type = d, c.request = f, r[1](c)
                }
              }, "chunk-" + a, a)
            } else e[a] = 0
          };
          var a = (a, t) => {
              var r, d, [f, c, n] = t,
                o = 0;
              if (f.some(a => 0 !== e[a])) {
                for (r in c) s.o(c, r) && (s.m[r] = c[r]);
                n && n(s)
              }
              for (a && a(t); o < f.length; o++) d = f[o], s.o(e, d) && e[d] && e[d][0](), e[d] = 0
            },
            t = self.webpackChunk_rockstargames_sites_gta_trilogy = self.webpackChunk_rockstargames_sites_gta_trilogy || [];
          t.forEach(a.bind(null, 0)), t.push = a.bind(null, t.push.bind(t))
        })(), s(3032), s(5819)
      })())
    }
  }
});