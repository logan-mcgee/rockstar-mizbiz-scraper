try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "87f37722-035f-49b6-a108-8efd5b653ca1", e._sentryDebugIdIdentifier = "sentry-dbid-87f37722-035f-49b6-a108-8efd5b653ca1")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "a42314239c99c13d151b1cd32472b6fee265a6cb",
    packageName: "@rockstargames/modules-core-videoplayer",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "a42314239c99c13d151b1cd32472b6fee265a6cb"
}, System.register([], (function(e, a) {
  return {
    execute: function() {
      e((() => {
        var e, r, t, d, f, c, o = {
            13218: (e, a, r) => {
              (0, r(77600).w)(1)
            },
            44857: (e, a, r) => {
              r(13218)
            },
            58157: (e, a, r) => {
              "use strict";
              var t = {
                  "./bootstrap": () => r.e(7706).then((() => () => r(97706))),
                  "./index": () => Promise.all([r.e(1342), r.e(2229), r.e(9623), r.e(6188), r.e(5966), r.e(9010), r.e(3581), r.e(2918), r.e(1120), r.e(4444)]).then((() => () => r(4444))),
                  "./tina": () => Promise.all([r.e(2229), r.e(6188), r.e(5966), r.e(4853), r.e(9010), r.e(8659)]).then((() => () => r(48659))),
                  "./tinaBlockTemplates": () => Promise.all([r.e(2229), r.e(6188), r.e(5966), r.e(4853), r.e(9010), r.e(8659)]).then((() => () => r(48659)))
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
            }
          },
          n = {};

        function b(e) {
          var a = n[e];
          if (void 0 !== a) return a.exports;
          var r = n[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return o[e].call(r.exports, r, r.exports, b), r.loaded = !0, r.exports
        }
        return b.m = o, b.c = n, b.y = a, b.amdO = {}, b.n = e => {
          var a = e && e.__esModule ? () => e.default : () => e;
          return b.d(a, {
            a
          }), a
        }, r = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, b.t = function(a, t) {
          if (1 & t && (a = this(a)), 8 & t) return a;
          if ("object" == typeof a && a) {
            if (4 & t && a.__esModule) return a;
            if (16 & t && "function" == typeof a.then) return a
          }
          var d = Object.create(null);
          b.r(d);
          var f = {};
          e = e || [null, r({}), r([]), r(r)];
          for (var c = 2 & t && a;
            "object" == typeof c && !~e.indexOf(c); c = r(c)) Object.getOwnPropertyNames(c).forEach((e => f[e] = () => a[e]));
          return f.default = () => a, b.d(d, f), d
        }, b.d = (e, a) => {
          for (var r in a) b.o(a, r) && !b.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: a[r]
          })
        }, b.f = {}, b.e = e => Promise.all(Object.keys(b.f).reduce(((a, r) => (b.f[r](e, a), a)), [])), b.u = e => "js/" + {
          19: "ae85f832169b536a8c4bfa4520c5796a",
          131: "8c82d26419fc7bd64d1dbddb3e857cb1",
          276: "03873c5336fce42cae42ee3e6476c8d9",
          278: "441bdbadd87cee671b40732af7e76877",
          299: "26f7f3dbfc3a502219576f4697179fa2",
          314: "f12436b21d374b49a8dcfdb07a864f94",
          621: "0b59a3ba66f277712122c7b3f6cf261e",
          662: "3197d33ac9f8fdd360d635c9a6124585",
          824: "f00950eed4ae9e9068aa1c6307ed1c9a",
          838: "8aee84504c8a7e8a516ce9f6181cc55e",
          907: "20c703acfc0e248c5b3a280e64301e99",
          964: "e3c819f414bb5ee7c7c3e77c5f9cf070",
          1054: "b0173ba443a666a37eddeed7fb4bc6df",
          1120: "6149461318ed95aad22583801020f7c1",
          1242: "39ebef63c99a2efeb8df858c3409d8fb",
          1342: "ff89d56cd78ff383c35b8ee52ccae445",
          1563: "6367b3cbb3547709edf830c81317ae8f",
          1822: "3c9e479ba08f241790785d72779b49e2",
          1868: "363387b37fd6f830748131d7af9b59a7",
          2156: "ab2b5e90ab32035a2dfb13e72251b896",
          2171: "b899aaad9d255187168219f724aae723",
          2221: "c29edb313387d019046bbed1f7807f57",
          2243: "8cbbee4e9529abe58cbc8b1711c776e0",
          2347: "2700d0b34aff8c1b7ff10320958005f5",
          2365: "a070f2ab5ec3bbb5418dd262432cdf37",
          2398: "38e9c289ad265d8d569a59da60829edb",
          2400: "23269ceeaf3bb22abe8d37b58ae55714",
          2466: "ead52c3e73cfd8262d3e4b3a74a6be17",
          2642: "74b8d15da6c9b5353c0517c5f72b3289",
          2678: "2e261fb06852b60c85b49462f58beac3",
          2864: "c4014cde6354e5ede1f54dc8548cbb44",
          3002: "3a52cf4733b795d251890ac17bdcaf6e",
          3034: "cadce4f16bd6bb4e504f4cc18dccdaee",
          3197: "53e3cf71bffac404915e20db77aaf593",
          3218: "5ec3ea4a097ec435cc562dc21b0afd6e",
          3222: "174fdc96c982b8e521c41def5369975f",
          3343: "845aa6493c43fd9c0417a8d081ba146c",
          3370: "ffc7605c8a5fc8cd209bf07688a2c09d",
          3475: "e8ec50461f115224644ab85032f9ade1",
          3486: "cdfff0c2fedace5e23cc8557b4eb078e",
          3663: "812fe053a734e4c961d878366cc2dbf1",
          3697: "f39184f62bfe05cfac55525867ad5a83",
          3736: "0343115f6fc5428ff5e4a41bc8b6654a",
          3885: "43e43cc8040dff1d1a06ac396b1f8931",
          3941: "c30d8b037331d731f7cda2c91b4ea168",
          4011: "0c9973b10c9d7c175cfffbc7134a2af9",
          4105: "bb9cbbf450d3dbd0a59e7fdc8a9512c2",
          4309: "c24e00950ad230e8e11c8239ec3ebb03",
          4444: "94856bfab0af3d7e421e6f3863c02345",
          4480: "e37a56c3caf0e6cb0a217234b9a1232f",
          4528: "eb57b4cd1bd29cb6463c62c66c6f84b0",
          4546: "ae2f6286ec32e0f011d08291a230336e",
          4621: "419d8fe2ee609952aa8398b070ae3e7b",
          4700: "290a271f02a4724b0b842f14d5fbb797",
          4710: "856313c5e21914d84f4364d52b87f0a1",
          4731: "6365bc35e7551f2e2fa9829634931c6b",
          4733: "60d51af1cd50167fe669fbcdf6335484",
          4799: "622035b6199ec313e2df3ae26228b2cf",
          4851: "7a1380692d484c615d90e37a63172af0",
          4861: "43c19769877acd5a3c94cdb7ccd4fe1c",
          4913: "ca199b92703d5f937b13611e3dc077d3",
          4981: "d99592ad650eaaae0ad6848bd9ab52b3",
          5018: "d21d61aef4aa31a8f0188f6d963c5d75",
          5233: "00bf8f2724cd7f546ef04271378e4eb7",
          5259: "d18e4ad4115e377e0b5c5c6cc5256341",
          5265: "81301e0773605d20bad50c1496fad24a",
          5530: "a7c2808e8b137dc509a76dea969e4707",
          5639: "4074d09401179b7b35ee10f24582ac12",
          5663: "e818a3f7ba97f5506cdf0d075987d9ce",
          5742: "6174bcfd97a911bcdc9f8593d7159869",
          5790: "b7f8d1352a803928baa8fe84a0d4252c",
          5830: "93ef467ce0d99ddfb8bf4af60359c5c6",
          5832: "f6fd3c871a2be97554a25cfecce4b88c",
          5854: "5d067a7369ca8c5c13468ee47cc02ef7",
          6018: "1ffd07875828d0b6ff36a4f69a6cbc63",
          6267: "8106798b882b3c4cffad8fe018b5eb9e",
          6280: "061045d6ef9d6df704a6562b9a3a1eeb",
          6285: "9ebb304e5e12f22414520dde7066f131",
          6361: "f161f9c4b4664760d01e8ef9ae697231",
          6399: "1c59fe37d8aee4714132e9d5fed30192",
          6664: "3923fe3d0f04f49f15bedb91f5ec71af",
          6879: "94ea242ef45fce032d973b50094fe060",
          6891: "daf32d386184c7b6af0107f31892211a",
          6997: "6e1cb9c6d15644f2ce9fe74847af16b6",
          7010: "3961b13fc321c131c75f64d9d4e3a842",
          7073: "471fbb49dd9e6816adf3949368a48fe9",
          7114: "ceefd010f861e6e1e26fd4a2b2269dd8",
          7353: "e92f621d2a866834ed79780bf400fd02",
          7436: "6d6dbd3299b9bab5280393713dac738a",
          7452: "24a2c14cd235ab92909e9bad94d0e3d8",
          7453: "385703942c95fe9b28749772e04ffc8f",
          7706: "977e911995888470fdd447d73ee4641e",
          7895: "79128f5381ae5e9bc79acd77e3c1807c",
          7970: "f0159ab638938714729e26d06990e242",
          8272: "40e9ef475bea05e73e8bcd86ed645862",
          8376: "18a4e1f217e9d433b29f0b2f56d1de43",
          8391: "3fa69dbd1ebb3027062697cd6cfe5a40",
          8457: "e9779777d8a244f193412cf53c0a2b72",
          8583: "7d6e0725c102229e2f8608c9cc14f59b",
          8654: "75bf5699ade1f0a63546752581c27de1",
          8659: "6cc2c7c03d9bfb68502d1ba3a867fad7",
          8728: "2a9e9e488db42382f1cce90932336b05",
          8755: "4fe1e50bf614c6953667f7ed5974c9c3",
          8880: "bf53473cf89ea425c39e89dd1fe9c3ce",
          8970: "bf58598c7224b6ee30514603607352ac",
          9022: "8d1904581627b0da87a8e5ad389950cb",
          9028: "dae037b23b5fef4a4a1bb5ba2b3fe784",
          9126: "a09209a97ed8930779b4b8c95c6cf66c",
          9377: "3bc197b1abb5f473d0b056cc72ed8665",
          9615: "a0f0fe0fa08e864e43174a14b916452b",
          9936: "f1ff0adc7998eed8cb3727df876eb01b",
          9990: "5497251ce92bf1354a0fea18110945ab"
        } [e] + ".js", b.miniCssF = e => "css/" + {
          964: "38e1b65ed42810a0761da8831cc88ac9",
          1120: "d0cc3573b112630833aa0e224d9ef931",
          1563: "a126229ede95b503bfddbd53efcedae3",
          4444: "721e303b208c5f38763aab7a2a9ed1eb",
          8583: "38e1b65ed42810a0761da8831cc88ac9",
          8659: "e1ecfbd5d60b0822f094e505eee8adf4"
        } [e] + ".css", b.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), b.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), t = {}, d = "@rockstargames/modules-core-videoplayer:", b.l = (e, a, r, f) => {
          if (t[e]) t[e].push(a);
          else {
            var c, o;
            if (void 0 !== r)
              for (var n = document.getElementsByTagName("script"), s = 0; s < n.length; s++) {
                var i = n[s];
                if (i.getAttribute("src") == e || i.getAttribute("data-webpack") == d + r) {
                  c = i;
                  break
                }
              }
            c || (o = !0, (c = document.createElement("script")).charset = "utf-8", c.timeout = 120, b.nc && c.setAttribute("nonce", b.nc), c.setAttribute("data-webpack", d + r), c.src = e), t[e] = [a];
            var l = (a, r) => {
                c.onerror = c.onload = null, clearTimeout(u);
                var d = t[e];
                if (delete t[e], c.parentNode && c.parentNode.removeChild(c), d && d.forEach((e => e(r))), a) return a(r)
              },
              u = setTimeout(l.bind(null, void 0, {
                type: "timeout",
                target: c
              }), 12e4);
            c.onerror = l.bind(null, c.onerror), c.onload = l.bind(null, c.onload), o && document.head.appendChild(c)
          }
        }, b.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, b.nmd = e => (e.paths = [], e.children || (e.children = []), e), f = {}, c = {}, b.f.remotes = (e, a) => {
          b.o(f, e) && f[e].forEach((e => {
            var r = b.R;
            r || (r = []);
            var t = c[e];
            if (!(r.indexOf(t) >= 0)) {
              if (r.push(t), t.p) return a.push(t.p);
              var d = a => {
                  a || (a = new Error("Container missing")), "string" == typeof a.message && (a.message += '\nwhile loading "' + t[1] + '" from ' + t[2]), b.m[e] = () => {
                    throw a
                  }, t.p = 0
                },
                f = (e, r, f, c, o, n) => {
                  try {
                    var b = e(r, f);
                    if (!b || !b.then) return o(b, c, n);
                    var s = b.then((e => o(e, c)), d);
                    if (!n) return s;
                    a.push(t.p = s)
                  } catch (e) {
                    d(e)
                  }
                },
                o = (e, a, d) => f(a.get, t[1], r, 0, n, d),
                n = a => {
                  t.p = 1, b.m[e] = e => {
                    e.exports = a()
                  }
                };
              f(b, t[2], 0, 0, ((e, a, r) => e ? f(b.I, t[0], 0, e, o, r) : d()), 1)
            }
          }))
        }, (() => {
          b.S = {};
          var e = {},
            a = {};
          b.I = (r, t) => {
            t || (t = []);
            var d = a[r];
            if (d || (d = a[r] = {}), !(t.indexOf(d) >= 0)) {
              if (t.push(d), e[r]) return e[r];
              b.o(b.S, r) || (b.S[r] = {});
              var f = b.S[r],
                c = "@rockstargames/modules-core-videoplayer",
                o = (e, a, r, t) => {
                  var d = f[e] = f[e] || {},
                    o = d[a];
                  (!o || !o.loaded && (!t != !o.eager ? t : c > o.from)) && (d[a] = {
                    get: r,
                    from: c,
                    eager: !!t
                  })
                },
                n = [];
              return "default" === r && (o("@gsap/react", "2.1.2", (() => Promise.all([b.e(2229), b.e(3581), b.e(19)]).then((() => () => b(40019))))), o("@popperjs/core", "2.11.8", (() => b.e(8376).then((() => () => b(78376))))), o("@rsgweb/locale-tools", "1.0.0", (() => Promise.all([b.e(3218), b.e(2229), b.e(838)]).then((() => () => b(35671))))), o("@rsgweb/modules-core-agegate", "0.0.0", (() => Promise.all([b.e(6018), b.e(2229), b.e(5966), b.e(2918), b.e(964)]).then((() => () => b(50964))))), o("@rsgweb/rockstar-account", "0.0.0", (() => Promise.all([b.e(5265), b.e(6399), b.e(2229), b.e(9623), b.e(6188), b.e(5966), b.e(4309), b.e(7895)]).then((() => () => b(57895))))), o("@rsgweb/utils", "1.0.0", (() => Promise.all([b.e(5265), b.e(2229), b.e(9623), b.e(6188), b.e(4309), b.e(5854)]).then((() => () => b(79819))))), o("graphql", "16.11.0", (() => b.e(4546).then((() => () => b(24546))))), o("gsap", "0.0.0", (() => b.e(8728).then((() => () => b(58728))))), o("hammerjs", "2.0.8", (() => b.e(5790).then((() => () => b(35790))))), o("lodash", "4.17.21", (() => b.e(4981).then((() => () => b(4981))))), o("react-dom", "18.3.1", (() => Promise.all([b.e(3663), b.e(2229)]).then((() => () => b(53663))))), o("react-dom", "19.1.0", (() => Promise.all([b.e(2229), b.e(621)]).then((() => () => b(90621))))), o("react-popper", "2.3.0", (() => Promise.all([b.e(2229), b.e(4853), b.e(9005), b.e(4733)]).then((() => () => b(84733))))), o("react-router-dom", "6.30.0", (() => Promise.all([b.e(4105), b.e(2229), b.e(3271)]).then((() => () => b(94105))))), o("react", "18.3.1", (() => b.e(8654).then((() => () => b(98654))))), o("uuid", "9.0.1", (() => b.e(3736).then((() => () => b(33736)))))), e[r] = n.length ? Promise.all(n).then((() => e[r] = 1)) : 1
            }
          }
        })(), (() => {
          var e;
          b.g.importScripts && (e = b.g.location + "");
          var a = b.g.document;
          if (!e && a && (a.currentScript && "SCRIPT" === a.currentScript.tagName.toUpperCase() && (e = a.currentScript.src), !e)) {
            var r = a.getElementsByTagName("script");
            if (r.length)
              for (var t = r.length - 1; t > -1 && (!e || !/^http(s?):/.test(e));) e = r[t--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), b.p = e
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
                for (var d = 1, f = 1; f < e.length; f++) d--, t += "u" == (typeof(o = e[f]))[0] ? "-" : (d > 0 ? "." : "") + (d = 2, o);
                return t
              }
              var c = [];
              for (f = 1; f < e.length; f++) {
                var o = e[f];
                c.push(0 === o ? "not(" + n() + ")" : 1 === o ? "(" + n() + " || " + n() + ")" : 2 === o ? c.pop() + " " + c.pop() : a(o))
              }
              return n();

              function n() {
                return c.pop().replace(/^\((.+)\)$/, "$1")
              }
            },
            r = (a, t) => {
              if (0 in a) {
                t = e(t);
                var d = a[0],
                  f = d < 0;
                f && (d = -d - 1);
                for (var c = 0, o = 1, n = !0;; o++, c++) {
                  var b, s, i = o < a.length ? (typeof a[o])[0] : "";
                  if (c >= t.length || "o" == (s = (typeof(b = t[c]))[0])) return !n || ("u" == i ? o > d && !f : "" == i != f);
                  if ("u" == s) {
                    if (!n || "u" != i) return !1
                  } else if (n)
                    if (i == s)
                      if (o <= d) {
                        if (b != a[o]) return !1
                      } else {
                        if (f ? b > a[o] : b < a[o]) return !1;
                        b != a[o] && (n = !1)
                      }
                  else if ("s" != i && "n" != i) {
                    if (f || o <= d) return !1;
                    n = !1, o--
                  } else {
                    if (o <= d || s < i != f) return !1;
                    n = !1
                  } else "s" != i && "n" != i && (n = !1, o--)
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
                    o = (typeof c)[0];
                  if (f != o) return "o" == f && "n" == o || "s" == o || "u" == f;
                  if ("o" != f && "u" != f && d != c) return d < c;
                  t++
                }
              })(a, t) ? a : t), 0)) && c[t]
            },
            d = e => {
              throw new Error(e)
            },
            f = (e => function(a, r, t, d, f) {
              var c = b.I(a);
              return c && c.then && !t ? c.then(e.bind(e, a, b.S[a], r, !1, d, f)) : e(a, b.S[a], r, t, d, f)
            })(((e, r, f, c, o, n) => {
              if (!((e, a) => e && b.o(e, a))(r, f)) return ((e, a, r) => r ? r() : ((e, a) => d("Shared module " + a + " doesn't exist in shared scope " + e))(e, a))(e, f, n);
              var s, i = t(r, f, o, c);
              return i ? ((s = i).loaded = 1, s.get()) : n ? n() : void d(((e, r, t, d, f) => {
                var c = e[t];
                return "No satisfying version (" + a(d) + ")" + (f ? " for eager consumption" : "") + " of shared module " + t + " found in shared scope " + r + ".\nAvailable versions: " + Object.keys(c).map((e => e + " from " + c[e].from)).join(", ")
              })(r, e, f, o, c))
            })),
            c = {},
            o = {
              62229: () => f("default", "react", !1, [1, 18, 2, 0], (() => b.e(8654).then((() => () => b(98654))))),
              9623: () => f("default", "react-router-dom", !1, [1, 6, 11, 2], (() => Promise.all([b.e(4105), b.e(3271)]).then((() => () => b(94105))))),
              16188: () => f("default", "lodash", !1, [1, 4, 17, 21], (() => b.e(4981).then((() => () => b(4981))))),
              95966: () => f("default", "@rsgweb/utils", !1, [1, "workspace:^"], (() => Promise.all([b.e(5265), b.e(9623), b.e(6188), b.e(4309)]).then((() => () => b(79819))))),
              81569: () => f("default", "uuid", !1, [1, 9, 0, 0], (() => b.e(3736).then((() => () => b(33736))))),
              81788: () => f("default", "@rsgweb/locale-tools", !1, [1, "workspace:^"], (() => Promise.all([b.e(3218), b.e(8457)]).then((() => () => b(35671))))),
              13581: () => f("default", "gsap", !1, [1, "workspace:^"], (() => b.e(8728).then((() => () => b(58728))))),
              2918: () => f("default", "@rsgweb/rockstar-account", !1, [1, "workspace:^"], (() => Promise.all([b.e(5265), b.e(6399), b.e(9623), b.e(6188), b.e(4309), b.e(276)]).then((() => () => b(57895))))),
              4848: () => f("default", "hammerjs", !1, [1, 2, 0, 8], (() => b.e(5790).then((() => () => b(35790))))),
              27654: () => f("default", "@gsap/react", !1, [1, 2, 1, 0], (() => b.e(2400).then((() => () => b(40019))))),
              47224: () => f("default", "@rsgweb/modules-core-agegate", !1, [1, "workspace:^"], (() => Promise.all([b.e(6018), b.e(8583)]).then((() => () => b(50964))))),
              75971: () => f("default", "react-popper", !1, [1, 2, 3, 0], (() => Promise.all([b.e(4853), b.e(9005), b.e(7114)]).then((() => () => b(84733))))),
              44853: () => f("default", "react-dom", !1, [1, 18, 2, 0], (() => b.e(3663).then((() => () => b(53663))))),
              16565: () => f("default", "graphql", !1, [1, 16, 9, 0], (() => b.e(4546).then((() => () => b(24546))))),
              9005: () => f("default", "@popperjs/core", !1, [1, 2, 11, 7], (() => b.e(8376).then((() => () => b(78376))))),
              23271: () => f("default", "react-dom", !1, [1, 18, 2, 0], (() => b.e(3002).then((() => () => b(90621)))))
            },
            n = {
              1120: [4848, 27654, 47224, 75971],
              2229: [62229],
              2918: [2918],
              3271: [23271],
              3581: [13581],
              4309: [16565],
              4853: [44853],
              5966: [95966],
              6188: [16188],
              9005: [9005],
              9010: [81569, 81788],
              9623: [9623]
            },
            s = {};
          b.f.consumes = (e, a) => {
            b.o(n, e) && n[e].forEach((e => {
              if (b.o(c, e)) return a.push(c[e]);
              if (!s[e]) {
                var r = a => {
                  c[e] = 0, b.m[e] = r => {
                    delete b.c[e], r.exports = a()
                  }
                };
                s[e] = !0;
                var t = a => {
                  delete c[e], b.m[e] = r => {
                    throw delete b.c[e], a
                  }
                };
                try {
                  var d = o[e]();
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
              7614: 0
            };
            b.f.miniCss = (a, r) => {
              e[a] ? r.push(e[a]) : 0 !== e[a] && {
                964: 1,
                1120: 1,
                1563: 1,
                4444: 1,
                8583: 1,
                8659: 1
              } [a] && r.push(e[a] = (e => new Promise(((a, r) => {
                var t = b.miniCssF(e),
                  d = b.p + t;
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
                  f.rel = "stylesheet", f.type = "text/css", b.nc && (f.nonce = b.nc), f.onerror = f.onload = r => {
                    if (f.onerror = f.onload = null, "load" === r.type) t();
                    else {
                      var c = r && r.type,
                        o = r && r.target && r.target.href || a,
                        n = new Error("Loading CSS chunk " + e + " failed.\n(" + c + ": " + o + ")");
                      n.name = "ChunkLoadError", n.code = "CSS_CHUNK_LOAD_FAILED", n.type = c, n.request = o, f.parentNode && f.parentNode.removeChild(f), d(n)
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
            7614: 0
          };
          b.f.j = (a, r) => {
            var t = b.o(e, a) ? e[a] : void 0;
            if (0 !== t)
              if (t) r.push(t[2]);
              else if (/^(9(005|010|623)|2229|2918|3271|3581|4853|5966|6188)$/.test(a)) e[a] = 0;
            else {
              var d = new Promise(((r, d) => t = e[a] = [r, d]));
              r.push(t[2] = d);
              var f = b.p + b.u(a),
                c = new Error;
              b.l(f, (r => {
                if (b.o(e, a) && (0 !== (t = e[a]) && (e[a] = void 0), t)) {
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
                o = r[2],
                n = 0;
              if (f.some((a => 0 !== e[a]))) {
                for (t in c) b.o(c, t) && (b.m[t] = c[t]);
                o && o(b)
              }
              for (a && a(r); n < f.length; n++) d = f[n], b.o(e, d) && e[d] && e[d][0](), e[d] = 0
            },
            r = self.webpackChunk_rockstargames_modules_core_videoplayer = self.webpackChunk_rockstargames_modules_core_videoplayer || [];
          r.forEach(a.bind(null, 0)), r.push = a.bind(null, r.push.bind(r))
        })(), b(44857), b(58157)
      })())
    }
  }
}));