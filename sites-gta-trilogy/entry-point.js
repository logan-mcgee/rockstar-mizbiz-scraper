try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "c0e99681-2b55-40af-ad9b-7674b27873f9", e._sentryDebugIdIdentifier = "sentry-dbid-c0e99681-2b55-40af-ad9b-7674b27873f9")
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
                  "./index": () => Promise.all([t.e(4910), t.e(4656), t.e(2229), t.e(5811), t.e(9105)]).then(() => () => t(1961))
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
          131: "e9b4d408ef3f3a29122ee084e8d375fb",
          278: "e61cc72fe7c62ad714df52a04af28af3",
          299: "181956da852ad8303bc51087f8d7d478",
          314: "9fd67245cda2433563c048868e06899d",
          439: "64b34ba0e3e286d22d322b62cd6039b9",
          450: "8ef29bf068d6e5d946a0a5e85bf73c5d",
          662: "fc9c79998749cd36b5f859766b77de89",
          824: "f2f3d857d10a3f190f62be61c48fd58f",
          907: "8f183e981507ec7d621edbd8df67338b",
          1054: "cb117693335f83f06943e7d62e64eb0b",
          1098: "7bf2853c479e3da86a511268c39d6041",
          1242: "2bba5078765b4b2ed75fff7a65ff55af",
          1822: "494e3f33039a53772d9f3769fbe3fbeb",
          1868: "5bf7e9734211550088b623a8418ce415",
          2156: "d3b991d7db00e7ce6cfe52fcca2ea116",
          2171: "0b7a8dfd8b02444fd5c44bd56134fe25",
          2221: "e02940dd13dcdef8a6df27bba2909222",
          2243: "2ffd13bb428088bbb3f7b2c3c8169d2e",
          2306: "ca67e080711e456d4864f16e12b220c3",
          2347: "4bae535d4e23683de05bedfab631bd98",
          2365: "12699cc59044887f323e8fa32114151a",
          2398: "2651f9561aade9c7ae8b26cea9c1b2e3",
          2466: "d6a6b817319a581a95199d1f777240d7",
          2562: "399f87de38c627e4d679c8f590f299ce",
          2642: "b9d90895b2b2be6f034b8d2bf7462ef8",
          2678: "d2f3fe4eac55368340e938d68fe6e910",
          2864: "0f4663c0c0553c7e57b11b609917ffff",
          3034: "f43fa94465fceb89052416d4f7b46a9b",
          3197: "44f266863663b3d995a9acae4ef0bc4b",
          3343: "1e993b68f78a944dbc10bdcb031231e1",
          3370: "90e48c795ee1de4a790b10ecb5851019",
          3475: "6c34c681a087089abfa330ba89e1b3a8",
          3486: "97101bedd140802b6de7e78a63944b79",
          3697: "7878de2b4d44ddd25c59d2a152ec18d9",
          3885: "744a471ce08a239c3c236181a3e2fc83",
          3941: "c7612401d819954c27a1114c3ec4637f",
          4011: "86f22a60d77bb13f6de993513ee7d511",
          4528: "7d42e257b906a4f996cad639e07155a9",
          4578: "7eecac26d64ef64709611499069c87c4",
          4621: "2327924cd7e4526f1064587e0d578f2f",
          4656: "29810d3b76351a67300c7c32504cb882",
          4700: "27e95a58830a3a4d29452cf7e2bf7280",
          4710: "5975f7052cf62e5b32fffb9753c9d3c4",
          4731: "f527f3500a85d842f4c9e09876bbd659",
          4799: "8edeee7533e53a07b6a69ae4c485cfcc",
          4851: "b17caf51c6a9e68d9fb4389c1c946eeb",
          4861: "67d9d79e6967ec5fed91ae7f02f6c5af",
          4910: "116d696b9fd6b4428919c94be715e5f7",
          4913: "7b2275014ff54053dce1214d8bab418b",
          5018: "06d04e138946728802a0aa28f1b97954",
          5233: "0387e75bd48304403cc9f5b8e63869e4",
          5259: "94744d359e316111a518ff71ea54d6c5",
          5389: "e4b4f6aea2ed53ac5c2d9bd0d58c9766",
          5530: "2c43b81eb37ea0191c92c2eb1a9c6d88",
          5639: "52fe10bccae566cd3e1dc9b205f16d56",
          5663: "5986ff6356c5939165849a5bca4c7b73",
          5742: "fc08a7adfb8344721493a72183776b69",
          5811: "22c1a2f8b4d43c6538d27ee7e3b8bedf",
          5830: "eb8b1e465de50edcdc5edb0dd3385bd2",
          5832: "061c7ed60c78255caa15f8a03335d4f5",
          5912: "dc2c88471b62cdde09bfc5eb54f94595",
          6267: "cf51488d9a9556df252ba94304f3cf21",
          6280: "58f7ba603a8d185e8f6b733c3b11a912",
          6285: "b6b5baafa50471fba80fe86c86a06852",
          6361: "19c10be642faeb6c58232dc772f95ea6",
          6664: "5e1d8cdb48a95ea8eb798234ad620231",
          6879: "1cea3616788636903e3159b6b1596771",
          6891: "eb32c9bc2204217b04c5f7e8f391a47b",
          6997: "67d36e27bb8d8fe128ceb907eed75aa3",
          7010: "5cc3c5e5de68ac57f563afa411971fd3",
          7073: "88c63c8c9716e4537f965340d44697f5",
          7436: "140a133f90bb4184726dd97660c6759b",
          7452: "10b7608dee1905c96ad47298fc2159eb",
          7453: "0bcdc052c153ab81e19c7a90283d81cd",
          7970: "2ed1b247d5b65ef57053d13f064cb9e2",
          8240: "548ce65b62c55d8f3a35484c24983ddd",
          8272: "978447ae0f0d56423dd092bc2b2c3fa9",
          8322: "7d97d7e0ca691b2a0b91ecf8f434f255",
          8391: "bdac8e8702ca9dd0ce405a7956228a3d",
          8431: "3a138b65d8b995861915a1ed5503a33c",
          8659: "2994c1761a500f7a85db0102672a76fe",
          8755: "9e02f1bb175228c88d6839ea5237f7d3",
          8880: "0dd522044f75de1486d4c3c4b710d3ba",
          8970: "6ed2766e8863788a5fe802d130ce60de",
          9022: "8e4cb1756365301b9ffad5c87f738e53",
          9028: "d08dd2e64515ab1e761180848c4ed911",
          9105: "3dd78cf0a0c080900a035271a9712069",
          9126: "afbb77c07c1ac00ef23400c1c69ff032",
          9377: "9278315305fac43f192a046890e6348e",
          9587: "523ed5f65a97b9b00c4c637cbb6926b6",
          9615: "0c451eed37ebfd57bfd213fa30fc4726",
          9757: "8b2287b19add5a2fef8d3f2ea8e6fcd1",
          9936: "090f58dc55e498d4e0e28f94a1bfc241",
          9975: "0454fec75f79ba8f2632b592da1b4c98",
          9990: "9f777f56bd01f7f65387c9d9c1c58cfc"
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
          9105: [1879]
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
              return "default" === t && (n("@rsgweb/locale-tools", "1.0.0", () => Promise.all([s.e(9587), s.e(2229), s.e(9975)]).then(() => () => s(2841))), n("@rsgweb/utils", "1.0.0", () => Promise.all([s.e(450), s.e(4910), s.e(2229), s.e(9757), s.e(5811)]).then(() => () => s(9757))), n("clsx", "2.1.1", () => s.e(439).then(() => () => s(439))), n("framer-motion", "7.10.3", () => Promise.all([s.e(5912), s.e(2229), s.e(8322)]).then(() => () => s(5912))), n("react-dom", "18.3.1", () => Promise.all([s.e(1098), s.e(2229)]).then(() => () => s(1098))), n("react-router-dom", "6.30.1", () => Promise.all([s.e(5389), s.e(2229), s.e(8429)]).then(() => () => s(5389))), n("react", "18.2.0", () => s.e(8659).then(() => () => s(8659))), n("react", "18.3.1", () => s.e(8431).then(() => () => s(8431))), n("usehooks-ts", "2.16.0", () => Promise.all([s.e(2562), s.e(2229)]).then(() => () => s(2562))), (() => {
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
            a = (a, t) => {
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
            },
            t = e => {
              var a = e[0],
                r = "";
              if (1 === e.length) return "*";
              if (a + .5) {
                r += 0 == a ? ">=" : -1 == a ? "<" : 1 == a ? "^" : 2 == a ? "~" : a > 0 ? "=" : "!=";
                for (var d = 1, f = 1; f < e.length; f++) d--, r += "u" == (typeof(n = e[f]))[0] ? "-" : (d > 0 ? "." : "") + (d = 2, n);
                return r
              }
              var c = [];
              for (f = 1; f < e.length; f++) {
                var n = e[f];
                c.push(0 === n ? "not(" + o() + ")" : 1 === n ? "(" + o() + " || " + o() + ")" : 2 === n ? c.pop() + " " + c.pop() : t(n))
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
                  var i, s, b = n < a.length ? (typeof a[n])[0] : "";
                  if (c >= t.length || "o" == (s = (typeof(i = t[c]))[0])) return !o || ("u" == b ? n > d && !f : "" == b != f);
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
                var h = a[c];
                l.push(1 == h ? u() | u() : 2 == h ? u() & u() : h ? r(h, t) : !u())
              }
              return !!u()
            },
            d = (e, a) => e && s.o(e, a),
            f = e => (e.loaded = 1, e.get()),
            c = e => Object.keys(e).reduce((a, t) => (e[t].eager && (a[t] = e[t]), a), {}),
            n = e => {
              throw new Error(e)
            },
            o = e => function(a, t, r, d, f) {
              var c = s.I(a);
              return c && c.then && !r ? c.then(e.bind(e, a, s.S[a], t, !1, d, f)) : e(a, s.S[a], t, r, d, f)
            },
            i = (e, a, t) => t ? t() : ((e, a) => n("Shared module " + a + " doesn't exist in shared scope " + e))(e, a),
            b = o((e, o, s, b, l, u) => {
              if (!d(o, s)) return i(e, s, u);
              var h = ((e, t, d, f) => {
                var n = f ? c(e[t]) : e[t];
                return (t = Object.keys(n).reduce((e, t) => !r(d, t) || e && !a(e, t) ? e : t, 0)) && n[t]
              })(o, s, l, b);
              return h ? f(h) : u ? u() : void n(((e, a, r, d, f) => {
                var c = e[r];
                return "No satisfying version (" + t(d) + ")" + (f ? " for eager consumption" : "") + " of shared module " + r + " found in shared scope " + a + ".\nAvailable versions: " + Object.keys(c).map(e => e + " from " + c[e].from).join(", ")
              })(o, e, s, l, b))
            }),
            l = o((e, n, o, s, b, l) => {
              if (!d(n, o)) return i(e, o, l);
              var u, h = ((e, t, r) => {
                var d = r ? c(e[t]) : e[t];
                return Object.keys(d).reduce((e, t) => !e || !d[e].loaded && a(e, t) ? t : e, 0)
              })(n, o, s);
              return r(b, h) || (u = ((e, a, r, d) => "Unsatisfied version " + r + " from " + (r && e[a][r].from) + " of shared singleton module " + a + " (required " + t(d) + ")")(n, o, h, b), "undefined" != typeof console && console.warn && console.warn(u)), f(n[o][h])
            }),
            u = {},
            h = {
              2229: () => b("default", "react", !1, [1, 18, 2, 0], () => s.e(8431).then(() => () => s(8431))),
              1788: () => b("default", "@rsgweb/locale-tools", !1, [1, "workspace:^"], () => Promise.all([s.e(9587), s.e(8240)]).then(() => () => s(2841))),
              9623: () => b("default", "react-router-dom", !1, [1, 6, 11, 2], () => Promise.all([s.e(5389), s.e(8429)]).then(() => () => s(5389))),
              1913: () => b("default", "react", !1, [1, 18, 2, 0], () => s.e(8659).then(() => () => s(8659))),
              3582: () => b("default", "framer-motion", !1, [1, 7, 5, 1], () => s.e(5912).then(() => () => s(5912))),
              4572: () => b("default", "clsx", !1, [1, 2, 1, 1], () => s.e(439).then(() => () => s(439))),
              5587: () => b("default", "usehooks-ts", !1, [1, 2, 7, 2], () => s.e(2562).then(() => () => s(2562))),
              5966: () => b("default", "@rsgweb/utils", !1, [1, "workspace:^"], () => Promise.all([s.e(450), s.e(9757)]).then(() => () => s(9757))),
              8429: () => l("default", "react-dom", !1, [1, 18, 2, 0], () => s.e(1098).then(() => () => s(1098)))
            },
            p = {
              2229: [2229],
              5811: [1788, 9623],
              8429: [8429],
              9105: [1913, 3582, 4572, 5587, 5966]
            },
            m = {};
          s.f.consumes = (e, a) => {
            s.o(p, e) && p[e].forEach(e => {
              if (s.o(u, e)) return a.push(u[e]);
              if (!m[e]) {
                var t = a => {
                  u[e] = 0, s.m[e] = t => {
                    delete s.c[e], t.exports = a()
                  }
                };
                m[e] = !0;
                var r = a => {
                  delete u[e], s.m[e] = t => {
                    throw delete s.c[e], a
                  }
                };
                try {
                  var d = h[e]();
                  d.then ? a.push(u[e] = d.then(t).catch(r)) : t(d)
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
                9105: 1
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
              else if (/^(22|84)29$/.test(a)) e[a] = 0;
            else {
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
            }
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