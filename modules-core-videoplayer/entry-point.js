try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "34e985fb-77eb-49bb-a5cc-d5489e75b355", e._sentryDebugIdIdentifier = "sentry-dbid-34e985fb-77eb-49bb-a5cc-d5489e75b355")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-videoplayer",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register([], function(e, a) {
  return {
    execute: function() {
      e((() => {
        var e, t, d, r, f, c, o, b, n, l, i, s, u, p, h, m, g, y, v, w, _, k = {
            17411: (e, a, t) => {
              const d = t(77027).y;
              a.w = function(e) {
                if (e || (e = 1), !t.y.meta || !t.y.meta.url) throw console.error("__system_context__", t.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                t.p = d(t.y.meta.url, e)
              }
            },
            28419: (e, a, t) => {
              (0, t(17411).w)(1)
            },
            58157: (e, a, t) => {
              "use strict";
              var d = {
                  "./bootstrap": () => t.e(8271).then(() => () => t(8271)),
                  "./index": () => Promise.all([t.e(3004), t.e(5473), t.e(1127), t.e(181), t.e(336), t.e(8136), t.e(6990), t.e(9023), t.e(994), t.e(1874), t.e(8517), t.e(1030)]).then(() => () => t(21030)),
                  "./tina": () => Promise.all([t.e(1127), t.e(8429), t.e(336), t.e(8136), t.e(6990), t.e(9023), t.e(7684)]).then(() => () => t(47684)),
                  "./tinaBlockTemplates": () => Promise.all([t.e(1127), t.e(8429), t.e(336), t.e(8136), t.e(6990), t.e(9023), t.e(7684)]).then(() => () => t(47684))
                },
                r = (e, a) => (t.R = a, a = t.o(d, e) ? d[e]() : Promise.resolve().then(() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                }), t.R = void 0, a),
                f = (e, a) => {
                  if (t.S) {
                    var d = "default",
                      r = t.S[d];
                    if (r && r !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return t.S[d] = e, t.I(d, a)
                  }
                };
              t.d(a, {
                get: () => r,
                init: () => f
              })
            },
            77027: (e, a, t) => {
              a.y = function(e, a) {
                var t = document.createElement("a");
                t.href = e;
                for (var d = "/" === t.pathname[0] ? t.pathname : "/" + t.pathname, r = 0, f = d.length; r !== a && f >= 0;) "/" === d[--f] && r++;
                if (r !== a) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + a + ") is greater than the number of directories (" + r + ") in the URL path " + e);
                var c = d.slice(0, f + 1);
                return t.protocol + "//" + t.host + c
              };
              Number.isInteger
            },
            93032: (e, a, t) => {
              t(28419)
            }
          },
          P = {};

        function E(e) {
          var a = P[e];
          if (void 0 !== a) return a.exports;
          var t = P[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return k[e].call(t.exports, t, t.exports, E), t.loaded = !0, t.exports
        }
        return E.m = k, E.c = P, E.y = a, E.amdO = {}, E.n = e => {
          var a = e && e.__esModule ? () => e.default : () => e;
          return E.d(a, {
            a
          }), a
        }, t = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, E.t = function(a, d) {
          if (1 & d && (a = this(a)), 8 & d) return a;
          if ("object" == typeof a && a) {
            if (4 & d && a.__esModule) return a;
            if (16 & d && "function" == typeof a.then) return a
          }
          var r = Object.create(null);
          E.r(r);
          var f = {};
          e = e || [null, t({}), t([]), t(t)];
          for (var c = 2 & d && a;
            ("object" == typeof c || "function" == typeof c) && !~e.indexOf(c); c = t(c)) Object.getOwnPropertyNames(c).forEach(e => f[e] = () => a[e]);
          return f.default = () => a, E.d(r, f), r
        }, E.d = (e, a) => {
          for (var t in a) E.o(a, t) && !E.o(e, t) && Object.defineProperty(e, t, {
            enumerable: !0,
            get: a[t]
          })
        }, E.f = {}, E.e = e => Promise.all(Object.keys(E.f).reduce((a, t) => (E.f[t](e, a), a), [])), E.u = e => "js/" + {
          131: "d9f7505f23ba59f72135b5c21b88554e",
          278: "347d97820bd95b319d8c39f7cdfcb721",
          299: "a40a7aa0f5cd823a91eef66e224ff77b",
          314: "4c944bbbc2482d969b5e642b54361ee8",
          439: "c8627434004a8dfb2d6445243cc0f069",
          601: "d40eff5d656620b70fc201d239e405f7",
          662: "9fbe007f37cd96e95fd94b6413941b3a",
          824: "a9595d3bcaf49033aaa6ea13a35c82ab",
          907: "29ea026621052429a8ea6dedefe38c5d",
          1030: "cc5a0122563636cbb41973dcb73ca09d",
          1054: "3942059de5af0dce395f6276dfaf3625",
          1098: "945d9510ce462c81454bea258b8fd100",
          1242: "b1a70b977da0822011604ce8c5e3b834",
          1254: "b6c35dae5f678ffa3803a5a9df0fac76",
          1703: "044e840a0db3c1a49de6075135a42b3d",
          1773: "9726f9fe511f60b3eea8cdbac6938785",
          1822: "22122ebb678da3f8e66fe3a853a53827",
          1868: "dd2f50a6f70a4f221e6463948290bec1",
          2156: "39c8374cb339c3348cb680a11e9cb8bf",
          2169: "f6c882ead9a6921b34395a89f6d0cb79",
          2171: "adb8bb92402b262dda3f1aadf1d44730",
          2217: "000867fbbe05a5df25e1e2547755d303",
          2221: "26127a996d160729e0d53ca8c6b2a182",
          2243: "efdc304a22459b4c97ccfddf281e7623",
          2306: "45283a96342054508d400be848ab0bc5",
          2347: "065af10bc1e921f30043a911e2d3e363",
          2365: "8003ca6ede83ac9d63a97e6e9680a075",
          2398: "2c269e375d7a8b010dd243aa1527e487",
          2466: "efd9b5bb4496b613f33309bd14d0b3a8",
          2635: "b49b4950ad4ab7c00d9b4400c845b463",
          2642: "1a2c32235733a57d93072e198cb15340",
          2657: "76682c087f3061595a996c7cb64f5178",
          2678: "1a5924d1c3d9531d91bc487b67dc8d03",
          2853: "f5d3f3d7bd106c344608579dcaad65a8",
          2864: "2508a0c9294628a866f2a83ce5dc4cfe",
          3004: "be86140496865f7c352355e65a98d187",
          3034: "46e2161e5f686602fb3077c667ae4e91",
          3197: "210e2d68f17dd093eb4ffe527fe7c697",
          3343: "6fb91adf4103eaccb741a6a8f98ca874",
          3370: "e267a6717324e25e791e98cfa2243cdb",
          3475: "ed334d1039fb4433c91e46a1c00cdc4b",
          3486: "748fcbe1c59571d40f6a96da2f0686de",
          3697: "454f509eb1f3aa00375cec07dd25fd9b",
          3885: "57f1f839d5cae9121a70c25a5b8f7190",
          3941: "c0262e4189d3dcf40d0c90983f84bc82",
          3983: "a1983c6e059b1cbaee4273581fe36b1b",
          4011: "fd591a6d017e708b041fff7eab297846",
          4154: "037eecc3612bc91dde1feff63d729db1",
          4528: "3d0e54aadf85c1777eaede8b73508411",
          4550: "055006c09ac4829a1bd6c0faa09af282",
          4578: "2279e3b7c5f8f1167f761a51c2fc1318",
          4598: "944a3adb5ce8be6506b29cfcc2bbce7f",
          4621: "3fc782ae1c72a3475c4b9bd32a7004dd",
          4700: "784640967de4cbf77f0a5a43feadd32a",
          4710: "88c1af7c1f7ab9f77eda3aa5aa654199",
          4731: "0c4990b19c6a59b61e9f6fd0a1fa727e",
          4799: "19a94de905905fba490e084c09a378ae",
          4851: "5e8d2b0ecb4b2942efe05f26fe021b49",
          4861: "09ac5cce49b9a4ec39ee514e808b9a9e",
          4913: "403060009bc42a64afbb9075e827a8fc",
          4931: "625d6865aa67166e88a978cb6c699fab",
          5016: "736a0368c207dd25bbc559d63a663461",
          5018: "b6130ef47822887f8b84d5368625dc49",
          5055: "59f55149841eb833be864794d5d55bcf",
          5076: "1de9dee39776c8f318d8235577c633c6",
          5233: "7e79e5cb9f4d520c9295cb420c581dea",
          5259: "013f35b9bea0ace5728f19cbfd5f430d",
          5389: "e2f21c7cfadbccd49a798c0d8d52c12c",
          5473: "c0c4f4fead1d0229b14a67b4ba491d44",
          5530: "9babea8e888b9d274b1c261da3e7d6cb",
          5639: "f0a675771acff5432963c985877166d0",
          5663: "f0741f70a402fe0c4074583be62b5b5f",
          5742: "1cc976a4e646a565f837a3da25f28fc9",
          5830: "d032d6b000aa243b9b7eb3ff3371eeca",
          5832: "06f81c8e9b158f5f73d21e08cd8cf66c",
          5859: "fa30b6578247e66c99c35d6e52398072",
          6088: "beee0285469eb4bd944f6fd553f84f96",
          6267: "9a12cdae2bb6821ebd1d8274cbdec12b",
          6280: "dba9eec427bacc43a9c65216b928f552",
          6285: "c43ad3a29381ed6996c935bf9e36af75",
          6361: "413d38c150e45ca41c94985ec76d93e8",
          6664: "ea521de06981f44ce10e702ff3b1874f",
          6879: "fdca35e280671363f75313992cac2bfe",
          6891: "2766989d139bbe11f837f7df6c219fd0",
          6997: "5c53a90f0094d488e15f1073f04dc034",
          7010: "b049281e33235008422d3b850744ed0a",
          7073: "2ae533c51d7867810ff9da9e90ba90f9",
          7129: "ece93a8495555b9e3a170d6afc94fd8f",
          7436: "c3243e181bcc2609e7322b4bca8177a8",
          7452: "9554b5aa93ee92a3e601df68f272d543",
          7453: "9ec232999b38c05576406f49a78271f0",
          7684: "cb465ab5e626b3598e5464abccfc2ad4",
          7731: "445d096df5b636094682b5d358c8150e",
          7970: "da7e12527c4a4030ac3c0ce686df5f84",
          8240: "a70fa48e225ea1acef8fe20a567a3ab0",
          8271: "cdc0ea38b616376ff38a9c17a2911fd2",
          8272: "8e65bef335d06d8c8b400811a0608ad2",
          8391: "d503f64bc574cdb592562a2c1fac05ea",
          8431: "be7331532e564fdcae4da9d1450a5166",
          8517: "5ba884c6b95620540f23434040e4e487",
          8755: "55fc82f1e55dc3ae5737cfa1c8b2d026",
          8880: "2b08e200592e6dcdbf913ed617d46b4e",
          8970: "f48a989f79dab847a9f4fd34d36db89b",
          9022: "c81e49c5607f6191322ac9687c3be842",
          9028: "b9e747b4cdcfdfbbf51530cbf6c1cd5f",
          9126: "2103eb0d35023853257b516ada9dfe22",
          9377: "2e91e19f215db7adf8319c27b8c526d6",
          9587: "1b449bfaaf9de5b78e53b9d5fb0ddf02",
          9615: "2307f52cdac5d674934e6f69bb942eaf",
          9719: "44d40fd322b0d150bb3a3716dbbf82f8",
          9813: "61cb58ee48c1f0e558d49402be1bd733",
          9936: "72079852e24c24a946e207250f4c4d32",
          9990: "410e1895e5ca61eb368a948724d8c8e5"
        } [e] + ".js", E.miniCssF = e => "css/" + {
          1030: "a36e0cbe058ff11dfb786ef49eb77a52",
          2217: "30c5db481d6b25a478ff5719bcbdf03e",
          4598: "30c5db481d6b25a478ff5719bcbdf03e",
          5055: "98d2f7207c07838416399fe63c3fcbc4",
          7684: "0f3056ce40472624d7ee487fbb173c0a",
          8517: "3f989fd0262dd36662bb9410489c2399"
        } [e] + ".css", E.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), E.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), d = {}, r = "@rockstargames/modules-core-videoplayer:", E.l = (e, a, t, f) => {
          if (d[e]) d[e].push(a);
          else {
            var c, o;
            if (void 0 !== t)
              for (var b = document.getElementsByTagName("script"), n = 0; n < b.length; n++) {
                var l = b[n];
                if (l.getAttribute("src") == e || l.getAttribute("data-webpack") == r + t) {
                  c = l;
                  break
                }
              }
            c || (o = !0, (c = document.createElement("script")).charset = "utf-8", c.timeout = 120, E.nc && c.setAttribute("nonce", E.nc), c.setAttribute("data-webpack", r + t), c.src = e), d[e] = [a];
            var i = (a, t) => {
                c.onerror = c.onload = null, clearTimeout(s);
                var r = d[e];
                if (delete d[e], c.parentNode && c.parentNode.removeChild(c), r && r.forEach(e => e(t)), a) return a(t)
              },
              s = setTimeout(i.bind(null, void 0, {
                type: "timeout",
                target: c
              }), 12e4);
            c.onerror = i.bind(null, c.onerror), c.onload = i.bind(null, c.onload), o && document.head.appendChild(c)
          }
        }, E.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, E.nmd = e => (e.paths = [], e.children || (e.children = []), e), (() => {
          E.S = {};
          var e = {},
            a = {};
          E.I = (t, d) => {
            d || (d = []);
            var r = a[t];
            if (r || (r = a[t] = {}), !(d.indexOf(r) >= 0)) {
              if (d.push(r), e[t]) return e[t];
              E.o(E.S, t) || (E.S[t] = {});
              var f = E.S[t],
                c = "@rockstargames/modules-core-videoplayer",
                o = (e, a, t, d) => {
                  var r = f[e] = f[e] || {},
                    o = r[a];
                  (!o || !o.loaded && (!d != !o.eager ? d : c > o.from)) && (r[a] = {
                    get: t,
                    from: c,
                    eager: !!d
                  })
                },
                b = [];
              return "default" === t && (o("@gsap/react", "2.1.2", () => Promise.all([E.e(1127), E.e(994), E.e(4154)]).then(() => () => E(44154))), o("@popperjs/core", "2.11.8", () => E.e(9813).then(() => () => E(19813))), o("@rsgweb/locale-tools", "0.0.0", () => Promise.all([E.e(3004), E.e(9587), E.e(1127), E.e(8240)]).then(() => () => E(12841))), o("@rsgweb/modules-core-agegate", "0.0.0", () => Promise.all([E.e(1703), E.e(1127), E.e(8136), E.e(1874), E.e(2217)]).then(() => () => E(42217))), o("@rsgweb/rockstar-account", "0.0.0", () => Promise.all([E.e(7129), E.e(1254), E.e(1127), E.e(181), E.e(336), E.e(8136), E.e(6088), E.e(4550)]).then(() => () => E(32169))), o("@rsgweb/utils", "0.0.0", () => Promise.all([E.e(3004), E.e(7129), E.e(4931), E.e(1127), E.e(181), E.e(336), E.e(6990), E.e(6088), E.e(811), E.e(2853)]).then(() => () => E(42853))), o("clsx", "2.1.1", () => E.e(439).then(() => () => E(10439))), o("graphql", "16.11.0", () => E.e(601).then(() => () => E(30601))), o("gsap", "3.12.5", () => E.e(9719).then(() => () => E(79719))), o("hammerjs", "2.0.8", () => E.e(7731).then(() => () => E(87731))), o("lodash", "4.17.21", () => E.e(5076).then(() => () => E(15076))), o("react-dom", "18.3.1", () => Promise.all([E.e(1098), E.e(1127)]).then(() => () => E(71098))), o("react-popper", "2.3.0", () => Promise.all([E.e(1127), E.e(8429), E.e(4041), E.e(2635)]).then(() => () => E(62635))), o("react-router-dom", "6.30.1", () => Promise.all([E.e(5389), E.e(1127), E.e(8429)]).then(() => () => E(15389))), o("react", "18.3.1", () => E.e(8431).then(() => () => E(48431))), o("uuid", "9.0.1", () => E.e(2657).then(() => () => E(62657)))), e[t] = b.length ? Promise.all(b).then(() => e[t] = 1) : 1
            }
          }
        })(), (() => {
          var e;
          E.g.importScripts && (e = E.g.location + "");
          var a = E.g.document;
          if (!e && a && (a.currentScript && "SCRIPT" === a.currentScript.tagName.toUpperCase() && (e = a.currentScript.src), !e)) {
            var t = a.getElementsByTagName("script");
            if (t.length)
              for (var d = t.length - 1; d > -1 && (!e || !/^http(s?):/.test(e));) e = t[d--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), E.p = e
        })(), f = e => {
          var a = e => e.split(".").map(e => +e == e ? +e : e),
            t = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
            d = t[1] ? a(t[1]) : [];
          return t[2] && (d.length++, d.push.apply(d, a(t[2]))), t[3] && (d.push([]), d.push.apply(d, a(t[3]))), d
        }, c = (e, a) => {
          e = f(e), a = f(a);
          for (var t = 0;;) {
            if (t >= e.length) return t < a.length && "u" != (typeof a[t])[0];
            var d = e[t],
              r = (typeof d)[0];
            if (t >= a.length) return "u" == r;
            var c = a[t],
              o = (typeof c)[0];
            if (r != o) return "o" == r && "n" == o || "s" == o || "u" == r;
            if ("o" != r && "u" != r && d != c) return d < c;
            t++
          }
        }, o = e => {
          var a = e[0],
            t = "";
          if (1 === e.length) return "*";
          if (a + .5) {
            t += 0 == a ? ">=" : -1 == a ? "<" : 1 == a ? "^" : 2 == a ? "~" : a > 0 ? "=" : "!=";
            for (var d = 1, r = 1; r < e.length; r++) d--, t += "u" == (typeof(c = e[r]))[0] ? "-" : (d > 0 ? "." : "") + (d = 2, c);
            return t
          }
          var f = [];
          for (r = 1; r < e.length; r++) {
            var c = e[r];
            f.push(0 === c ? "not(" + b() + ")" : 1 === c ? "(" + b() + " || " + b() + ")" : 2 === c ? f.pop() + " " + f.pop() : o(c))
          }
          return b();

          function b() {
            return f.pop().replace(/^\((.+)\)$/, "$1")
          }
        }, b = (e, a) => {
          if (0 in e) {
            a = f(a);
            var t = e[0],
              d = t < 0;
            d && (t = -t - 1);
            for (var r = 0, c = 1, o = !0;; c++, r++) {
              var n, l, i = c < e.length ? (typeof e[c])[0] : "";
              if (r >= a.length || "o" == (l = (typeof(n = a[r]))[0])) return !o || ("u" == i ? c > t && !d : "" == i != d);
              if ("u" == l) {
                if (!o || "u" != i) return !1
              } else if (o)
                if (i == l)
                  if (c <= t) {
                    if (n != e[c]) return !1
                  } else {
                    if (d ? n > e[c] : n < e[c]) return !1;
                    n != e[c] && (o = !1)
                  }
              else if ("s" != i && "n" != i) {
                if (d || c <= t) return !1;
                o = !1, c--
              } else {
                if (c <= t || l < i != d) return !1;
                o = !1
              } else "s" != i && "n" != i && (o = !1, c--)
            }
          }
          var s = [],
            u = s.pop.bind(s);
          for (r = 1; r < e.length; r++) {
            var p = e[r];
            s.push(1 == p ? u() | u() : 2 == p ? u() & u() : p ? b(p, a) : !u())
          }
          return !!u()
        }, n = (e, a) => e && E.o(e, a), l = e => (e.loaded = 1, e.get()), i = e => Object.keys(e).reduce((a, t) => (e[t].eager && (a[t] = e[t]), a), {}), s = (e, a, t) => {
          var d = t ? i(e[a]) : e[a];
          return Object.keys(d).reduce((e, a) => !e || !d[e].loaded && c(e, a) ? a : e, 0)
        }, u = (e, a, t, d) => "Unsatisfied version " + t + " from " + (t && e[a][t].from) + " of shared singleton module " + a + " (required " + o(d) + ")", p = e => {
          throw new Error(e)
        }, h = e => {
          "undefined" != typeof console && console.warn && console.warn(e)
        }, m = (e, a, t) => t ? t() : ((e, a) => p("Shared module " + a + " doesn't exist in shared scope " + e))(e, a), g = (e => function(a, t, d, r, f) {
          var c = E.I(a);
          return c && c.then && !d ? c.then(e.bind(e, a, E.S[a], t, !1, r, f)) : e(a, E.S[a], t, d, r, f)
        })((e, a, t, d, r, f) => {
          if (!n(a, t)) return m(e, t, f);
          var c = s(a, t, d);
          return b(r, c) || h(u(a, t, c, r)), l(a[t][c])
        }), y = {}, v = {
          71127: () => g("default", "react", !1, [1, 18, 2, 0], () => E.e(8431).then(() => () => E(48431))),
          10181: () => g("default", "react-router-dom", !1, [1, 6, 11, 2], () => Promise.all([E.e(5389), E.e(8429)]).then(() => () => E(15389))),
          10336: () => g("default", "lodash", !1, [1, 4, 17, 21], () => E.e(5076).then(() => () => E(15076))),
          58136: () => g("default", "@rsgweb/utils", !1, [4, 0, 0, 0], () => Promise.all([E.e(3004), E.e(7129), E.e(4931), E.e(181), E.e(336), E.e(6990), E.e(6088), E.e(3983)]).then(() => () => E(42853))),
          56990: () => g("default", "@rsgweb/locale-tools", !1, [4, 0, 0, 0], () => Promise.all([E.e(3004), E.e(9587), E.e(5859)]).then(() => () => E(12841))),
          69023: () => g("default", "uuid", !1, [1, 9, 0, 0], () => E.e(2657).then(() => () => E(62657))),
          90994: () => g("default", "gsap", !1, [4, "latest", , "licensed"], () => E.e(9719).then(() => () => E(79719))),
          61874: () => g("default", "@rsgweb/rockstar-account", !1, [4, 0, 0, 0], () => Promise.all([E.e(7129), E.e(1254), E.e(181), E.e(336), E.e(6088), E.e(2169)]).then(() => () => E(32169))),
          1521: () => g("default", "react-popper", !1, [1, 2, 3, 0], () => Promise.all([E.e(8429), E.e(4041), E.e(5016)]).then(() => () => E(62635))),
          1556: () => g("default", "clsx", !1, [1, 2, 1, 1], () => E.e(439).then(() => () => E(10439))),
          39054: () => g("default", "hammerjs", !1, [1, 2, 0, 8], () => E.e(7731).then(() => () => E(87731))),
          48974: () => g("default", "@rsgweb/modules-core-agegate", !1, [4, 0, 0, 0], () => Promise.all([E.e(1703), E.e(4598)]).then(() => () => E(42217))),
          99730: () => g("default", "@gsap/react", !1, [1, 2, 1, 0], () => E.e(1773).then(() => () => E(44154))),
          18429: () => g("default", "react-dom", !1, [1, 18, 2, 0], () => E.e(1098).then(() => () => E(71098))),
          811: () => g("default", "graphql", !1, [1, 16, 9, 0], () => E.e(601).then(() => () => E(30601))),
          24041: () => g("default", "@popperjs/core", !1, [1, 2, 11, 7], () => E.e(9813).then(() => () => E(19813)))
        }, w = {
          181: [10181],
          336: [10336],
          811: [811],
          994: [90994],
          1127: [71127],
          1874: [61874],
          3983: [811],
          4041: [24041],
          6990: [56990],
          8136: [58136],
          8429: [18429],
          8517: [1521, 1556, 39054, 48974, 99730],
          9023: [69023]
        }, _ = {}, E.f.consumes = (e, a) => {
          E.o(w, e) && w[e].forEach(e => {
            if (E.o(y, e)) return a.push(y[e]);
            if (!_[e]) {
              var t = a => {
                y[e] = 0, E.m[e] = t => {
                  delete E.c[e], t.exports = a()
                }
              };
              _[e] = !0;
              var d = a => {
                delete y[e], E.m[e] = t => {
                  throw delete E.c[e], a
                }
              };
              try {
                var r = v[e]();
                r.then ? a.push(y[e] = r.then(t).catch(d)) : t(r)
              } catch (e) {
                d(e)
              }
            }
          })
        }, (() => {
          if ("undefined" != typeof document) {
            var e = {
              7614: 0
            };
            E.f.miniCss = (a, t) => {
              e[a] ? t.push(e[a]) : 0 !== e[a] && {
                1030: 1,
                2217: 1,
                4598: 1,
                5055: 1,
                7684: 1,
                8517: 1
              } [a] && t.push(e[a] = (e => new Promise((a, t) => {
                var d = E.miniCssF(e),
                  r = E.p + d;
                if (((e, a) => {
                    for (var t = document.getElementsByTagName("link"), d = 0; d < t.length; d++) {
                      var r = (c = t[d]).getAttribute("data-href") || c.getAttribute("href");
                      if ("stylesheet" === c.rel && (r === e || r === a)) return c
                    }
                    var f = document.getElementsByTagName("style");
                    for (d = 0; d < f.length; d++) {
                      var c;
                      if ((r = (c = f[d]).getAttribute("data-href")) === e || r === a) return c
                    }
                  })(d, r)) return a();
                ((e, a, t, d, r) => {
                  var f = document.createElement("link");
                  f.rel = "stylesheet", f.type = "text/css", E.nc && (f.nonce = E.nc), f.onerror = f.onload = t => {
                    if (f.onerror = f.onload = null, "load" === t.type) d();
                    else {
                      var c = t && t.type,
                        o = t && t.target && t.target.href || a,
                        b = new Error("Loading CSS chunk " + e + " failed.\n(" + c + ": " + o + ")");
                      b.name = "ChunkLoadError", b.code = "CSS_CHUNK_LOAD_FAILED", b.type = c, b.request = o, f.parentNode && f.parentNode.removeChild(f), r(b)
                    }
                  }, f.href = a, document.head.appendChild(f)
                })(e, r, 0, a, t)
              }))(a).then(() => {
                e[a] = 0
              }, t => {
                throw delete e[a], t
              }))
            }
          }
        })(), (() => {
          var e = {
            7614: 0
          };
          E.f.j = (a, t) => {
            var d = E.o(e, a) ? e[a] : void 0;
            if (0 !== d)
              if (d) t.push(d[2]);
              else if (/^(1(127|81|874)|8(11|136|429)|336|4041|6990|9023|994)$/.test(a)) e[a] = 0;
            else {
              var r = new Promise((t, r) => d = e[a] = [t, r]);
              t.push(d[2] = r);
              var f = E.p + E.u(a),
                c = new Error;
              E.l(f, t => {
                if (E.o(e, a) && (0 !== (d = e[a]) && (e[a] = void 0), d)) {
                  var r = t && ("load" === t.type ? "missing" : t.type),
                    f = t && t.target && t.target.src;
                  c.message = "Loading chunk " + a + " failed.\n(" + r + ": " + f + ")", c.name = "ChunkLoadError", c.type = r, c.request = f, d[1](c)
                }
              }, "chunk-" + a, a)
            }
          };
          var a = (a, t) => {
              var d, r, [f, c, o] = t,
                b = 0;
              if (f.some(a => 0 !== e[a])) {
                for (d in c) E.o(c, d) && (E.m[d] = c[d]);
                o && o(E)
              }
              for (a && a(t); b < f.length; b++) r = f[b], E.o(e, r) && e[r] && e[r][0](), e[r] = 0
            },
            t = self.webpackChunk_rockstargames_modules_core_videoplayer = self.webpackChunk_rockstargames_modules_core_videoplayer || [];
          t.forEach(a.bind(null, 0)), t.push = a.bind(null, t.push.bind(t))
        })(), E(93032), E(58157)
      })())
    }
  }
});