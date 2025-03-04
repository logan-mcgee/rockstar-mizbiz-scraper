! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "f8cacace-3a11-4def-95ba-c8691b415cdd", e._sentryDebugIdIdentifier = "sentry-dbid-f8cacace-3a11-4def-95ba-c8691b415cdd")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-header",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register([], (function(e, a) {
  return {
    execute: function() {
      e((() => {
        var e, d, f, c, r, t, b = {
            49293: (e, a, d) => {
              (0, d(31789).w)(1)
            },
            31789: (e, a, d) => {
              const f = d(90569).y;
              a.w = function(e) {
                if (e || (e = 1), !d.y.meta || !d.y.meta.url) throw console.error("__system_context__", d.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                d.p = f(d.y.meta.url, e)
              }
            },
            23358: (e, a, d) => {
              d(49293)
            },
            90569: (e, a, d) => {
              a.y = function(e, a) {
                var d = document.createElement("a");
                d.href = e;
                for (var f = "/" === d.pathname[0] ? d.pathname : "/" + d.pathname, c = 0, r = f.length; c !== a && r >= 0;) "/" === f[--r] && c++;
                if (c !== a) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + a + ") is greater than the number of directories (" + c + ") in the URL path " + e);
                var t = f.slice(0, r + 1);
                return d.protocol + "//" + d.host + t
              };
              Number.isInteger
            },
            14197: (e, a, d) => {
              "use strict";
              var f = {
                  "./vanilla": () => Promise.all([d.e(7313), d.e(1095), d.e(5853), d.e(2229), d.e(4853), d.e(4204), d.e(5966), d.e(1788), d.e(9420), d.e(2918), d.e(7712), d.e(1925)]).then((() => () => d(43696))),
                  "./core": () => Promise.all([d.e(7313), d.e(1095), d.e(5853), d.e(2229), d.e(1222), d.e(4406), d.e(4204), d.e(5966), d.e(7780), d.e(1788), d.e(9420), d.e(2918), d.e(4902), d.e(7251), d.e(7712), d.e(1663)]).then((() => () => d(61663))),
                  "./GlobalNavigationWrapper": () => Promise.all([d.e(5853), d.e(2229), d.e(1222), d.e(4406), d.e(5966), d.e(7780), d.e(1788), d.e(9420), d.e(4902), d.e(7251)]).then((() => () => d(77273)))
                },
                c = (e, a) => (d.R = a, a = d.o(f, e) ? f[e]() : Promise.resolve().then((() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                })), d.R = void 0, a),
                r = (e, a) => {
                  if (d.S) {
                    var f = "default",
                      c = d.S[f];
                    if (c && c !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return d.S[f] = e, d.I(f, a)
                  }
                };
              d.d(a, {
                get: () => c,
                init: () => r
              })
            }
          },
          o = {};

        function l(e) {
          var a = o[e];
          if (void 0 !== a) return a.exports;
          var d = o[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return b[e].call(d.exports, d, d.exports, l), d.loaded = !0, d.exports
        }
        return l.m = b, l.c = o, l.y = a, l.amdO = {}, l.n = e => {
          var a = e && e.__esModule ? () => e.default : () => e;
          return l.d(a, {
            a
          }), a
        }, d = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, l.t = function(a, f) {
          if (1 & f && (a = this(a)), 8 & f) return a;
          if ("object" == typeof a && a) {
            if (4 & f && a.__esModule) return a;
            if (16 & f && "function" == typeof a.then) return a
          }
          var c = Object.create(null);
          l.r(c);
          var r = {};
          e = e || [null, d({}), d([]), d(d)];
          for (var t = 2 & f && a;
            "object" == typeof t && !~e.indexOf(t); t = d(t)) Object.getOwnPropertyNames(t).forEach((e => r[e] = () => a[e]));
          return r.default = () => a, l.d(c, r), c
        }, l.d = (e, a) => {
          for (var d in a) l.o(a, d) && !l.o(e, d) && Object.defineProperty(e, d, {
            enumerable: !0,
            get: a[d]
          })
        }, l.f = {}, l.e = e => Promise.all(Object.keys(l.f).reduce(((a, d) => (l.f[d](e, a), a)), [])), l.u = e => "js/" + {
          25: "66223434dc3fd16697a99cf44c23a8e3",
          85: "174973b2a2ad1a309de420cba38a0d21",
          131: "5fa8d3084734a48b2a4cd1b5d3a63d2f",
          194: "eed178a0154a1de561c917d948cff4f6",
          235: "7f2caadf74a47209381941515cf60f30",
          278: "34601d7548f8acca6e4ed4f31c22460c",
          299: "0c67a51678f5fd7748edf42995189650",
          314: "c0987d556fa6e0281b6281cc899140a9",
          662: "31a6ad2b45e652a1a0479119fc75a5dd",
          707: "219922b295499a36c1f9ca2881d63537",
          736: "ac1a33436e971f12a6aa04fd3d67dcc3",
          786: "544a54578d33072aef31fda07b3b5f37",
          824: "feda619ad2b5c5417da37cf08ed3357f",
          907: "e4d0e021182e065d9f8dddb7a7fe251d",
          1029: "0fc8a265a11193db2906f1f48a17712c",
          1054: "3b2eeebfb205a458f10b6fe00cc5b6ee",
          1095: "d194571553eea7f18dcb52958bad519e",
          1100: "49afcc59519bfd39579f98189c875bf8",
          1222: "a311b7139afbc4b01de1be6651a2c016",
          1242: "a6711fe12b99eac1bc4b364be2724261",
          1252: "4f2f194648efa84348d501f11e488a8f",
          1358: "93b99c9729ac0283873a74537d72aea0",
          1397: "394e622f3235852d40377240b6e17cba",
          1506: "16f5ec54a3f3c6a8ac1bc57fc9edc40d",
          1526: "b766c770186f2a05b0cd55dda8efa7af",
          1554: "0ca235c74b2aff8139f6632a59b086ab",
          1604: "df4d148abe391596db7540598cf761aa",
          1663: "6e3058e3b9b67317e85706aefc133c75",
          1701: "68a4d6ddf0fad86ece5dbcad93724766",
          1788: "80b3bedd40be6b87b58529875d91cf8e",
          1822: "815c9f6f259a07679ab2e290f44707ab",
          1868: "475c153ba659f555d42b4850db29d5bb",
          1925: "7d391e392c80f3a4ab76f180a1a9f2ff",
          2156: "4c6bc2491193157556125c31a3b808c2",
          2171: "b1a34b4868a2bf44b9905876f4010ebb",
          2221: "f3042de12b1c804f11453f0a66f09628",
          2229: "b378d04b4e35f05b2ff03797a33e8151",
          2243: "184d285af10fb39c696d97b6319736a1",
          2343: "a3cef3e1c94a97d4f03ede591beb8894",
          2347: "919f2c28b436b0c319fa6f07cfcfbf75",
          2365: "b920c619606396ccec28fada2ad321ae",
          2398: "9d948ac883c3f21205d5e7137c9289f5",
          2403: "76143477fad8f05d15843ece35dcfc67",
          2407: "a424ed57083795750f8b1d9e3b24d44b",
          2466: "c67431664551241f079e26bc0034fdfb",
          2642: "92a100229f859b71de505f47d1e99ba6",
          2678: "ef2f715002b13f2c49632c3ca4aad308",
          2683: "28378afc352d388661f4c13b31f630ca",
          2864: "885d69eda99e9d6a43ad22e5631ed0fd",
          2918: "e7b339e12193081d6373cf262792b5ae",
          3034: "827f56917a20a580364995c4af0b5ecb",
          3035: "df2ab6bea83b054efdc27bc263113dd9",
          3067: "650593891cd04079bb9731c5c8575dd8",
          3131: "11dc3a23e419dd4096a06f74aa3970f6",
          3197: "918138baf657edd457c2187137dc8e14",
          3217: "a8038d5c7ef4adbb0a11301e0ace581e",
          3219: "2e575f9d54a822f978f36bb991259c39",
          3343: "4d59ed8738fc301b99324b1b9818b716",
          3360: "e0a47041bd5dec0dc54336cf120e2de1",
          3370: "96fadde503141a11adffca0afab415ea",
          3386: "982164ab7e15dbcbd9b334ed8a8251dd",
          3410: "f56fe60d2a85bdc4c0b6eae617f17120",
          3475: "ce7a52bcbe0255adf79011875efbd3c0",
          3486: "e7f536a296c87cdcc0fdea6f84b90202",
          3487: "a5ee7d260566b58f8b8c3d2ac68341fb",
          3692: "5c7fe2aaf979f4468689fc50b34f435a",
          3694: "5214625641369eabcb130c2a269415a1",
          3697: "89787e52d89a0d2c942d32d6bd061106",
          3759: "6d7ea9996bb88e60d566613eff664ecd",
          3823: "85ec1b85168593ff471fb22736717a38",
          3871: "9f5457f96e5daba3f4f4a949b0961f99",
          3885: "3dc950df5ee245e2bc4ec3f675e47e91",
          3925: "95b067f21f14e29704c5771810c3245e",
          3941: "f254ed7992e9081605174531d4252ac9",
          3954: "936a19d713fc6e1bdf73f00413eeb2c7",
          4011: "35de3361bd3d64604a113d50f1fd3a3a",
          4059: "cb949c917e613210595cb4eaf61d76ca",
          4082: "e347ae12e727ce9bf3ec2901e6f888ed",
          4204: "e7f2f9836dcb62e7b17c28cc79cd069d",
          4282: "3bdee121c1a7bc6b220ff3cfd806070e",
          4337: "013329de7a8f07eb7b969d7d28ab01a2",
          4357: "d1d18958434427f3c1801c1425bcdd72",
          4406: "7dbefc086a53ce0def313160625a0880",
          4528: "b9b6f757f9a5ee9423d59528da772bb0",
          4538: "27db2605d04cb5736b583da78a369016",
          4621: "2778f75b521dbda957b5fb950cc3f0ff",
          4700: "0c3cfe38a868e7122c946461a34eab79",
          4710: "f95545b2076db804c2d5fb62f07d6e2c",
          4724: "0f47ab4f48f7d941892191eeb9906721",
          4730: "247d553ac4ca5f26d8c45220e4ca5619",
          4731: "245e526847ce7f56bc7496c9dd8482cf",
          4783: "7d169f1595674a7988430894acbb4f26",
          4784: "305cc8b2741c76b91812cdc27df72e2e",
          4799: "d097750b9369b08b197ad609a8b815ff",
          4851: "099e28aa1fb39c85a4023b9104691570",
          4853: "18ffef5508dbbf483ae4c0a3acbb95fa",
          4861: "d286fd3767d980485161284b503320c4",
          4902: "161298f7ba551acf7f8db4a968107535",
          4913: "ae1e2731ecd9ee01f46827f21b16cb53",
          5018: "4f59fee94a12b02d6de871b9ab869d28",
          5219: "fbc5ebf43b2472d621d21128f143746f",
          5233: "a1ba2f889b9ff5251113466286f70687",
          5259: "bb3cae132f3ece801e10d0e76ac7e57f",
          5309: "4e1e4a711ddcc9332e22cc1dd6dc9f20",
          5365: "1d7269ce6fa3b10f4b62b8fa512f8f20",
          5416: "3aa3b9000f45492ddea3e609f0ee0278",
          5483: "2057f93dfb607aa27fa04a647ab864bf",
          5485: "ca290ba71523dd22b7e1ffc68eac4f9d",
          5523: "8a7d8f77896fa994f0660bb85796c1a5",
          5530: "bef1bd7ceca43b499a186a7f309d7972",
          5548: "cc51d6523886f32967cbc90e266b7f70",
          5600: "7c1de1216c210cb45f9ae9461f7f6130",
          5629: "0872ccfd9ddbcd2829e665ee6652beb8",
          5639: "3e0802643c14aec7070463642f7d02d0",
          5663: "717830e9d0fab0ce64d8d59a5f9a08e9",
          5710: "aff4e09b5b5d11fc7dd9a36d03fb7f92",
          5742: "af591edc91b108185bdc0e36c37bcee4",
          5767: "1da9f1ac53a7ba31774fc5fb1b974b4e",
          5791: "fddce80c08795438404f58a8c2fdf80b",
          5830: "f5655c6a13f3223e102afc0ca7d5f67a",
          5832: "360259dbb056cb5584c60f8cb4f5b78d",
          5853: "c4e9cd7e0d0c16ce9fec75634591ebfd",
          5868: "0bf1b3fe7767bfb122f6980a136989e5",
          5875: "3e9fa37e69521cf82f4e7f4854f6f3e1",
          5966: "caca9fd6857f55e2664fa56995b167e8",
          6037: "d6e0a4fb360e5606fca0142a21e58d0e",
          6055: "9a0ed73b8bdb40236570cb945c9da968",
          6204: "1a6278b8880a585b83432a636998a6f9",
          6252: "821f992db7b7a49038cfaa0502aa680f",
          6267: "4e8bd13c4d0bac17a25ddf8615318f79",
          6271: "bb1630d87507e23619426dbf85383e79",
          6280: "2689f7b429e7723142a5a346308aa88a",
          6285: "35856b77c1c20e4acd24943c38b2ec71",
          6304: "9a39ecfbf6e29e2772f225bc14972960",
          6306: "35d09b6785c2b82707aef9d3030e9e6a",
          6361: "2606b1501374b6f16c0f48cd0f927c6b",
          6440: "f473afbe4e518e50e257d303dccc1ddb",
          6519: "ab001401f086c5cdacdd00985c5bed70",
          6521: "af5be77102d787aa6b849f0761f795a6",
          6664: "82afd111fd17d6cdf55d3d5b5c2408cc",
          6718: "e0228196ca32547a53047a2e6242e782",
          6738: "70128d4795f9ffd21a3c68821a638a7e",
          6741: "d9ebaf9e3c3ee3ae5e60358867532798",
          6832: "040dcfb4145b88b1019dba34b1bdab1d",
          6864: "14c1be9e6faba8aa88c8d3593da727e0",
          6879: "d99c278a13a35bd5b1c7ec399253b423",
          6891: "9d3b474866950d864c66a78f35b9b0dc",
          6997: "28e9bb48b067cbaf3e2c54d6f5a69819",
          7010: "3dd65a19ab9803850be08e854af5c799",
          7051: "d0d2a6e6381e9f3869d4d7702192cb71",
          7070: "eea6a7bf461d949b471e1481a542b416",
          7073: "ca68e4b590eba940253a74fe54325936",
          7120: "8af15e8cb717abeec301d70985984009",
          7164: "40c26c8150f5f47b251beceda88740b4",
          7219: "0eb2bf9c36db9cd27ed5f4bcd163ab09",
          7251: "6fbd0a6546e87a8b3816c8c60dbe78d2",
          7313: "76ddd7d31f934e1bf1ea0772febd2655",
          7360: "f94afcf8d4ab3af4025c57e601fe46fd",
          7436: "42137bdfa4e87987cb33e33f3d461a99",
          7452: "6b6e9403da6a13488ec789d7480e45de",
          7453: "488c9a702bb15f3333c7ef285c481516",
          7492: "b08491fdd156bc90cc3517f385584bf5",
          7600: "7de76527334a897ec575f11c0fcabeec",
          7654: "e91fa0dddbeb15bd57993706ddc7abcc",
          7712: "a2f83517cd3fdf6185006b46d85011ed",
          7746: "e8cefa4ec8ccba97ff4bb935fbf70f02",
          7780: "a1c4c13de15e1fba5cec314994cefc74",
          7813: "55066bbe6e4663c7877846f069382d5f",
          7970: "2a2a438b9a6aecff17f0785260da9e8d",
          8010: "de7da58a241e1783177cd0858670c036",
          8172: "03285f9677a74b3e4ceb87a5aafdb734",
          8174: "012069c0b390b33f27fa72ca897e058d",
          8272: "c998d18ea7698dea884ec43875f1c6c6",
          8391: "c8c74e0b9a45b3ea6f2a4ce99ce48b83",
          8405: "4c0422c41d39f2f01776a6412a3ed6ef",
          8418: "0ce78a984618c5b46d21e021762b925e",
          8652: "26506565d9f5222208a440422347dbd0",
          8726: "12f4048d2ce0731fb09bce4361b88cc5",
          8755: "b29b1e0896d72e8a3875ec055b1a39c3",
          8880: "0c50b2094db5fd8ea86e431a8673d3b6",
          8970: "e2fc582c8e6581e77bd1e6f7dfa2e4a6",
          8977: "98fa9b57a70f57f804c633dfe2904843",
          9022: "913ba120730ce67023d086adfd1731d7",
          9028: "6f67476f9eee8b9f1a0664dce9f7929f",
          9043: "b9f42d8a7e5e56ef6d3573845851d2ad",
          9126: "5c896f95e310ba8f0f6ee719db3d1bf9",
          9130: "7cb6de57855b83b1239ea7af46075d39",
          9145: "66f3cd4f29add927d8606be6cc888b25",
          9157: "20ad08ad17522e00211691e65ac8dcc9",
          9292: "97c4de86becabb0199c02ed3a23cc871",
          9377: "7180ab97749cf3f812911e3fb2dee094",
          9408: "39cae8ce37a32a44394214e042ac8e0b",
          9420: "eb9f72d4a9610766ae8f497f548fe268",
          9432: "0e927bbd5461012b099b73785dd2c18b",
          9550: "aa1ca562213397d9ea14471155bdd45b",
          9600: "c6533cb27df2458715eca8fc4575d420",
          9615: "120f5847a86f010199d6223b89999acb",
          9690: "da9b08db957f2fd6cbd5c28cd026dd16",
          9931: "2d49627f39eda70f32cc45845228a0a6",
          9936: "af6043f651b10f3eedc74a67bc278e0b",
          9990: "633474ee54c0231cc904b6d7734533ca"
        } [e] + ".js", l.miniCssF = e => "css/" + {
          1397: "2110aa580ede3aaa6fa9094ec80a1050",
          1554: "5a1bac0da265ecf3b269d6332115a3de",
          1663: "99cb7aafd7be4155d8a990710242271e",
          1925: "ef4dcf0f4a799818d3360ebdb2b872e6",
          5710: "5a1bac0da265ecf3b269d6332115a3de",
          6718: "c27d1f8563067a9b5dd7fa8690e8d6ad",
          7251: "02a2504d86a9b48b13052d4528a3870b",
          7712: "78a589cc356175aa298935c8b5434dd1"
        } [e] + ".css", l.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), l.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), f = {}, c = "@rockstargames/modules-core-header:", l.l = (e, a, d, r) => {
          if (f[e]) f[e].push(a);
          else {
            var t, b;
            if (void 0 !== d)
              for (var o = document.getElementsByTagName("script"), i = 0; i < o.length; i++) {
                var n = o[i];
                if (n.getAttribute("src") == e || n.getAttribute("data-webpack") == c + d) {
                  t = n;
                  break
                }
              }
            t || (b = !0, (t = document.createElement("script")).charset = "utf-8", t.timeout = 120, l.nc && t.setAttribute("nonce", l.nc), t.setAttribute("data-webpack", c + d), t.src = e), f[e] = [a];
            var s = (a, d) => {
                t.onerror = t.onload = null, clearTimeout(u);
                var c = f[e];
                if (delete f[e], t.parentNode && t.parentNode.removeChild(t), c && c.forEach((e => e(d))), a) return a(d)
              },
              u = setTimeout(s.bind(null, void 0, {
                type: "timeout",
                target: t
              }), 12e4);
            t.onerror = s.bind(null, t.onerror), t.onload = s.bind(null, t.onload), b && document.head.appendChild(t)
          }
        }, l.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, l.nmd = e => (e.paths = [], e.children || (e.children = []), e), r = {}, t = {}, l.f.remotes = (e, a) => {
          l.o(r, e) && r[e].forEach((e => {
            var d = l.R;
            d || (d = []);
            var f = t[e];
            if (!(d.indexOf(f) >= 0)) {
              if (d.push(f), f.p) return a.push(f.p);
              var c = a => {
                  a || (a = new Error("Container missing")), "string" == typeof a.message && (a.message += '\nwhile loading "' + f[1] + '" from ' + f[2]), l.m[e] = () => {
                    throw a
                  }, f.p = 0
                },
                r = (e, d, r, t, b, o) => {
                  try {
                    var l = e(d, r);
                    if (!l || !l.then) return b(l, t, o);
                    var i = l.then((e => b(e, t)), c);
                    if (!o) return i;
                    a.push(f.p = i)
                  } catch (e) {
                    c(e)
                  }
                },
                b = (e, a, c) => r(a.get, f[1], d, 0, o, c),
                o = a => {
                  f.p = 1, l.m[e] = e => {
                    e.exports = a()
                  }
                };
              r(l, f[2], 0, 0, ((e, a, d) => e ? r(l.I, f[0], 0, e, b, d) : c()), 1)
            }
          }))
        }, (() => {
          l.S = {};
          var e = {},
            a = {};
          l.I = (d, f) => {
            f || (f = []);
            var c = a[d];
            if (c || (c = a[d] = {}), !(f.indexOf(c) >= 0)) {
              if (f.push(c), e[d]) return e[d];
              l.o(l.S, d) || (l.S[d] = {});
              var r = l.S[d],
                t = "@rockstargames/modules-core-header",
                b = (e, a, d, f) => {
                  var c = r[e] = r[e] || {},
                    b = c[a];
                  (!b || !b.loaded && (!f != !b.eager ? f : t > b.from)) && (c[a] = {
                    get: d,
                    from: t,
                    eager: !!f
                  })
                },
                o = [];
              return "default" === d && (b("@foundry/icons", "3.5.9", (() => Promise.all([l.e(7120), l.e(4538), l.e(2229), l.e(7492), l.e(5710)]).then((() => () => l(24538))))), b("@popperjs/core", "2.11.8", (() => l.e(6519).then((() => () => l(66519))))), b("@radix-ui/react-accordion", "1.2.2", (() => Promise.all([l.e(2683), l.e(2229), l.e(4853), l.e(4406), l.e(6741), l.e(1252), l.e(1029)]).then((() => () => l(52683))))), b("@radix-ui/react-dialog", "1.1.1", (() => Promise.all([l.e(5767), l.e(2229), l.e(4853), l.e(1222), l.e(4406), l.e(9690), l.e(4337), l.e(3067)]).then((() => () => l(55767))))), b("@radix-ui/react-dialog", "1.1.6", (() => Promise.all([l.e(7654), l.e(2229), l.e(4853), l.e(4406), l.e(786), l.e(4902), l.e(9043), l.e(3410)]).then((() => () => l(57654))))), b("@radix-ui/react-id", "1.1.0", (() => Promise.all([l.e(2229), l.e(5365)]).then((() => () => l(35365))))), b("@radix-ui/react-navigation-menu", "1.2.3", (() => Promise.all([l.e(8726), l.e(2229), l.e(4853), l.e(4406), l.e(6741), l.e(1252), l.e(3694), l.e(5791)]).then((() => () => l(58726))))), b("@radix-ui/react-popover", "1.1.4", (() => Promise.all([l.e(1100), l.e(9408), l.e(2229), l.e(4853), l.e(4406), l.e(6741), l.e(235), l.e(8172)]).then((() => () => l(69408))))), b("@radix-ui/react-portal", "1.1.1", (() => Promise.all([l.e(2229), l.e(4853), l.e(1222), l.e(7813)]).then((() => () => l(97813))))), b("@radix-ui/react-portal", "1.1.1", (() => Promise.all([l.e(2229), l.e(4853), l.e(1222), l.e(5868)]).then((() => () => l(15868))))), b("@radix-ui/react-portal", "1.1.1", (() => Promise.all([l.e(2229), l.e(4853), l.e(1222), l.e(3035)]).then((() => () => l(23035))))), b("@radix-ui/react-portal", "1.1.3", (() => Promise.all([l.e(2229), l.e(4853), l.e(6741), l.e(8418)]).then((() => () => l(6037))))), b("@radix-ui/react-portal", "1.1.4", (() => Promise.all([l.e(2229), l.e(4853), l.e(4730), l.e(2403)]).then((() => () => l(12403))))), b("@radix-ui/react-slot", "1.0.2", (() => Promise.all([l.e(2229), l.e(1526)]).then((() => () => l(1526))))), b("@radix-ui/react-slot", "1.1.0", (() => Promise.all([l.e(2229), l.e(5548)]).then((() => () => l(50786))))), b("@radix-ui/react-slot", "1.1.1", (() => Promise.all([l.e(2229), l.e(4357)]).then((() => () => l(16738))))), b("@radix-ui/react-slot", "1.1.1", (() => Promise.all([l.e(2229), l.e(8652)]).then((() => () => l(16271))))), b("@radix-ui/react-slot", "1.1.1", (() => Promise.all([l.e(2229), l.e(3219)]).then((() => () => l(73219))))), b("@radix-ui/react-slot", "1.1.2", (() => Promise.all([l.e(2229), l.e(7164)]).then((() => () => l(27164))))), b("@radix-ui/react-slot", "1.1.2", (() => Promise.all([l.e(2229), l.e(4724)]).then((() => () => l(22343))))), b("@radix-ui/react-slot", "1.1.2", (() => Promise.all([l.e(2229), l.e(9432)]).then((() => () => l(59432))))), b("@radix-ui/react-visually-hidden", "1.0.3", (() => Promise.all([l.e(2229), l.e(4853), l.e(25), l.e(3823)]).then((() => () => l(73823))))), b("@radix-ui/react-visually-hidden", "1.1.0", (() => Promise.all([l.e(2229), l.e(4853), l.e(1222), l.e(4082)]).then((() => () => l(84082))))), b("@radix-ui/react-visually-hidden", "1.1.0", (() => Promise.all([l.e(2229), l.e(4853), l.e(1222), l.e(9600)]).then((() => () => l(29600))))), b("@radix-ui/react-visually-hidden", "1.1.0", (() => Promise.all([l.e(2229), l.e(4853), l.e(1222), l.e(5629)]).then((() => () => l(45629))))), b("@radix-ui/react-visually-hidden", "1.1.1", (() => Promise.all([l.e(2229), l.e(4853), l.e(6741), l.e(1358)]).then((() => () => l(41358))))), b("@radix-ui/react-visually-hidden", "1.1.2", (() => Promise.all([l.e(2229), l.e(4853), l.e(786), l.e(3925)]).then((() => () => l(83925))))), b("@rsgweb/locale-tools", "1.0.0", (() => Promise.all([l.e(5483), l.e(2229), l.e(5219)]).then((() => () => l(87768))))), b("@rsgweb/modules-core-user-action-menu", "0.0.0", (() => Promise.all([l.e(7313), l.e(7120), l.e(1100), l.e(6718), l.e(2229), l.e(4853), l.e(1222), l.e(4406), l.e(4204), l.e(5966), l.e(7780), l.e(1788), l.e(9690), l.e(2918), l.e(25), l.e(1397), l.e(8174)]).then((() => () => l(4585))))), b("@rsgweb/rockstar-account", "0.0.0", (() => Promise.all([l.e(7313), l.e(1095), l.e(2229), l.e(4204), l.e(5966), l.e(85)]).then((() => () => l(7607))))), b("@rsgweb/utils", "1.0.0", (() => Promise.all([l.e(7313), l.e(2229), l.e(4204), l.e(3692)]).then((() => () => l(24602))))), b("classnames", "2.5.1", (() => l.e(5485).then((() => () => l(65485))))), b("framer-motion", "7.10.3", (() => Promise.all([l.e(9931), l.e(2229)]).then((() => () => l(69931))))), b("gsap", "0.0.0", (() => l.e(2407).then((() => () => l(12407))))), b("lodash", "4.17.21", (() => l.e(4282).then((() => () => l(14282))))), b("react-dom", "18.2.0", (() => Promise.all([l.e(7360), l.e(2229)]).then((() => () => l(57360))))), b("react-popper", "2.3.0", (() => Promise.all([l.e(2229), l.e(4853), l.e(3386), l.e(4059)]).then((() => () => l(44059))))), b("react-remove-scroll", "2.5.7", (() => Promise.all([l.e(5875), l.e(2229)]).then((() => () => l(95875))))), b("react-remove-scroll", "2.6.2", (() => Promise.all([l.e(736), l.e(2229)]).then((() => () => l(10736))))), b("react-remove-scroll", "2.6.2", (() => Promise.all([l.e(2229), l.e(3871)]).then((() => () => l(53871))))), b("react-remove-scroll", "2.6.3", (() => Promise.all([l.e(6055), l.e(2229)]).then((() => () => l(76055))))), b("react-router-dom", "6.17.0", (() => Promise.all([l.e(1604), l.e(2229)]).then((() => () => l(21604))))), b("react", "18.2.0", (() => l.e(3217).then((() => () => l(23217))))), b("spatial-navigation-polyfill", "1.3.1", (() => l.e(1506).then((() => () => l(31506)))))), e[d] = o.length ? Promise.all(o).then((() => e[d] = 1)) : 1
            }
          }
        })(), (() => {
          var e;
          l.g.importScripts && (e = l.g.location + "");
          var a = l.g.document;
          if (!e && a && (a.currentScript && (e = a.currentScript.src), !e)) {
            var d = a.getElementsByTagName("script");
            if (d.length)
              for (var f = d.length - 1; f > -1 && (!e || !/^http(s?):/.test(e));) e = d[f--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), l.p = e
        })(), (() => {
          var e = e => {
              var a = e => e.split(".").map((e => +e == e ? +e : e)),
                d = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
                f = d[1] ? a(d[1]) : [];
              return d[2] && (f.length++, f.push.apply(f, a(d[2]))), d[3] && (f.push([]), f.push.apply(f, a(d[3]))), f
            },
            a = (d, f) => {
              if (0 in d) {
                f = e(f);
                var c = d[0],
                  r = c < 0;
                r && (c = -c - 1);
                for (var t = 0, b = 1, o = !0;; b++, t++) {
                  var l, i, n = b < d.length ? (typeof d[b])[0] : "";
                  if (t >= f.length || "o" == (i = (typeof(l = f[t]))[0])) return !o || ("u" == n ? b > c && !r : "" == n != r);
                  if ("u" == i) {
                    if (!o || "u" != n) return !1
                  } else if (o)
                    if (n == i)
                      if (b <= c) {
                        if (l != d[b]) return !1
                      } else {
                        if (r ? l > d[b] : l < d[b]) return !1;
                        l != d[b] && (o = !1)
                      }
                  else if ("s" != n && "n" != n) {
                    if (r || b <= c) return !1;
                    o = !1, b--
                  } else {
                    if (b <= c || i < n != r) return !1;
                    o = !1
                  } else "s" != n && "n" != n && (o = !1, b--)
                }
              }
              var s = [],
                u = s.pop.bind(s);
              for (t = 1; t < d.length; t++) {
                var h = d[t];
                s.push(1 == h ? u() | u() : 2 == h ? u() & u() : h ? a(h, f) : !u())
              }
              return !!u()
            },
            d = (d, f, c) => {
              var r = d[f];
              return (f = Object.keys(r).reduce(((d, f) => !a(c, f) || d && !((a, d) => {
                a = e(a), d = e(d);
                for (var f = 0;;) {
                  if (f >= a.length) return f < d.length && "u" != (typeof d[f])[0];
                  var c = a[f],
                    r = (typeof c)[0];
                  if (f >= d.length) return "u" == r;
                  var t = d[f],
                    b = (typeof t)[0];
                  if (r != b) return "o" == r && "n" == b || "s" == b || "u" == r;
                  if ("o" != r && "u" != r && c != t) return c < t;
                  f++
                }
              })(d, f) ? d : f), 0)) && r[f]
            },
            f = (e => function(a, d, f, c) {
              var r = l.I(a);
              return r && r.then ? r.then(e.bind(e, a, l.S[a], d, f, c)) : e(a, l.S[a], d, f, c)
            })(((e, a, f, c, r) => {
              var t = a && l.o(a, f) && d(a, f, c);
              return t ? (e => (e.loaded = 1, e.get()))(t) : r()
            })),
            c = {},
            r = {
              62229: () => f("default", "react", [1, 18, 2, 0], (() => l.e(3217).then((() => () => l(23217))))),
              44853: () => f("default", "react-dom", [1, 18, 2, 0], (() => l.e(7360).then((() => () => l(57360))))),
              9623: () => f("default", "react-router-dom", [1, 6, 11, 2], (() => l.e(1604).then((() => () => l(21604))))),
              16188: () => f("default", "lodash", [1, 4, 17, 21], (() => l.e(4282).then((() => () => l(14282))))),
              95966: () => f("default", "@rsgweb/utils", [1, "workspace:^"], (() => Promise.all([l.e(7313), l.e(4204)]).then((() => () => l(24602))))),
              81788: () => f("default", "@rsgweb/locale-tools", [1, "workspace:^"], (() => Promise.all([l.e(5483), l.e(7600)]).then((() => () => l(87768))))),
              63582: () => f("default", "framer-motion", [1, 7, 5, 1], (() => l.e(9931).then((() => () => l(69931))))),
              79952: () => f("default", "spatial-navigation-polyfill", [1, 1, 3, 1], (() => l.e(1506).then((() => () => l(31506))))),
              2918: () => f("default", "@rsgweb/rockstar-account", [1, "workspace:^"], (() => Promise.all([l.e(1095), l.e(5523)]).then((() => () => l(7607))))),
              13581: () => f("default", "gsap", [1, "workspace:^"], (() => l.e(2407).then((() => () => l(12407))))),
              20270: () => f("default", "@rsgweb/modules-core-user-action-menu", [1, "workspace:^"], (() => Promise.all([l.e(7120), l.e(1100), l.e(6718), l.e(4853), l.e(1222), l.e(4406), l.e(7780), l.e(9690), l.e(25), l.e(1397)]).then((() => () => l(4585))))),
              75971: () => f("default", "react-popper", [1, 2, 3, 0], (() => Promise.all([l.e(4853), l.e(3386), l.e(6440)]).then((() => () => l(44059))))),
              21222: () => f("default", "@radix-ui/react-slot", [1, 1, 1, 0], (() => l.e(8405).then((() => () => l(50786))))),
              74406: () => f("default", "@radix-ui/react-id", [1, 1, 1, 0], (() => l.e(7746).then((() => () => l(35365))))),
              24036: () => f("default", "classnames", [1, 2, 5, 1], (() => l.e(5485).then((() => () => l(65485))))),
              81409: () => f("default", "@foundry/icons", [1, 3], (() => Promise.all([l.e(7120), l.e(4538), l.e(7492), l.e(1554)]).then((() => () => l(24538))))),
              34902: () => f("default", "@radix-ui/react-portal", [1, 1, 1, 4], (() => Promise.all([l.e(4853), l.e(4730), l.e(4784)]).then((() => () => l(12403))))),
              9046: () => f("default", "@radix-ui/react-navigation-menu", [1, 1, 2, 1], (() => Promise.all([l.e(8726), l.e(4853), l.e(6741), l.e(1252), l.e(3694)]).then((() => () => l(58726))))),
              18425: () => f("default", "@radix-ui/react-dialog", [1, 1, 1, 6], (() => Promise.all([l.e(7654), l.e(4853), l.e(786), l.e(9043)]).then((() => () => l(57654))))),
              42638: () => f("default", "@radix-ui/react-popover", [1, 1, 1, 4], (() => Promise.all([l.e(1100), l.e(9408), l.e(4853), l.e(6741), l.e(235)]).then((() => () => l(69408))))),
              61339: () => f("default", "@radix-ui/react-accordion", [1, 1, 2, 2], (() => Promise.all([l.e(2683), l.e(4853), l.e(6741), l.e(1252)]).then((() => () => l(52683))))),
              71925: () => f("default", "@radix-ui/react-visually-hidden", [1, 1, 1, 2], (() => Promise.all([l.e(4853), l.e(786), l.e(6306)]).then((() => () => l(83925))))),
              7492: () => f("default", "@radix-ui/react-visually-hidden", [1, 1, 1, 2], (() => Promise.all([l.e(4853), l.e(1222), l.e(1701)]).then((() => () => l(84082))))),
              16741: () => f("default", "@radix-ui/react-slot", [1, 1, 1, 0], (() => l.e(5600).then((() => () => l(73219))))),
              91252: () => f("default", "@radix-ui/react-slot", [1, 1, 1, 0], (() => l.e(6738).then((() => () => l(16738))))),
              19690: () => f("default", "react-remove-scroll", [1, 2, 5, 7], (() => l.e(5875).then((() => () => l(95875))))),
              14337: () => f("default", "@radix-ui/react-portal", [1, 1, 1, 4], (() => l.e(194).then((() => () => l(97813))))),
              30786: () => f("default", "@radix-ui/react-slot", [1, 1, 1, 0], (() => l.e(7051).then((() => () => l(59432))))),
              5959: () => f("default", "react-remove-scroll", [1, 2, 5, 7], (() => l.e(6055).then((() => () => l(76055))))),
              69101: () => f("default", "@radix-ui/react-slot", [1, 1, 1, 0], (() => l.e(2343).then((() => () => l(22343))))),
              63694: () => f("default", "@radix-ui/react-visually-hidden", [1, 1, 1, 2], (() => l.e(8977).then((() => () => l(41358))))),
              31393: () => f("default", "@radix-ui/react-portal", [1, 1, 1, 4], (() => l.e(6037).then((() => () => l(6037))))),
              38291: () => f("default", "react-remove-scroll", [1, 2, 5, 7], (() => l.e(736).then((() => () => l(10736))))),
              58857: () => f("default", "@radix-ui/react-slot", [1, 1, 1, 0], (() => l.e(6271).then((() => () => l(16271))))),
              34730: () => f("default", "@radix-ui/react-slot", [1, 1, 1, 0], (() => l.e(4783).then((() => () => l(27164))))),
              20025: () => f("default", "@radix-ui/react-slot", [1, 1, 1, 0], (() => l.e(9145).then((() => () => l(1526))))),
              35755: () => f("default", "@radix-ui/react-dialog", [1, 1, 1, 6], (() => Promise.all([l.e(5767), l.e(4337)]).then((() => () => l(55767))))),
              47773: () => f("default", "@radix-ui/react-visually-hidden", [1, 1, 1, 2], (() => l.e(8010).then((() => () => l(45629))))),
              52072: () => f("default", "@radix-ui/react-portal", [1, 1, 1, 4], (() => l.e(3487).then((() => () => l(15868))))),
              53648: () => f("default", "@radix-ui/react-visually-hidden", [1, 1, 1, 2], (() => l.e(7219).then((() => () => l(29600))))),
              56679: () => f("default", "@radix-ui/react-portal", [1, 1, 1, 4], (() => l.e(5416).then((() => () => l(23035))))),
              75199: () => f("default", "@radix-ui/react-visually-hidden", [1, 1, 1, 2], (() => l.e(6204).then((() => () => l(73823))))),
              84269: () => f("default", "react-remove-scroll", [1, 2, 5, 7], (() => l.e(6252).then((() => () => l(53871))))),
              43386: () => f("default", "@popperjs/core", [1, 2, 11, 8], (() => l.e(6519).then((() => () => l(66519)))))
            },
            t = {
              25: [20025],
              235: [31393, 38291, 58857],
              786: [30786],
              1222: [21222],
              1252: [91252],
              1397: [35755, 47773, 52072, 53648, 56679, 75199, 84269],
              1788: [81788],
              2229: [62229],
              2918: [2918],
              3386: [43386],
              3694: [63694],
              4204: [9623, 16188],
              4337: [14337],
              4406: [74406],
              4730: [34730],
              4853: [44853],
              4902: [34902],
              5966: [95966],
              6741: [16741],
              7251: [9046, 18425, 42638, 61339, 71925],
              7492: [7492],
              7712: [13581, 20270, 75971],
              7780: [24036, 81409],
              9043: [5959, 69101],
              9420: [63582, 79952],
              9690: [19690]
            },
            b = {};
          l.f.consumes = (e, a) => {
            l.o(t, e) && t[e].forEach((e => {
              if (l.o(c, e)) return a.push(c[e]);
              if (!b[e]) {
                var d = a => {
                  c[e] = 0, l.m[e] = d => {
                    delete l.c[e], d.exports = a()
                  }
                };
                b[e] = !0;
                var f = a => {
                  delete c[e], l.m[e] = d => {
                    throw delete l.c[e], a
                  }
                };
                try {
                  var t = r[e]();
                  t.then ? a.push(c[e] = t.then(d).catch(f)) : d(t)
                } catch (e) {
                  f(e)
                }
              }
            }))
          }
        })(), (() => {
          if ("undefined" != typeof document) {
            var e = {
              4295: 0
            };
            l.f.miniCss = (a, d) => {
              e[a] ? d.push(e[a]) : 0 !== e[a] && {
                1397: 1,
                1554: 1,
                1663: 1,
                1925: 1,
                5710: 1,
                6718: 1,
                7251: 1,
                7712: 1
              } [a] && d.push(e[a] = (e => new Promise(((a, d) => {
                var f = l.miniCssF(e),
                  c = l.p + f;
                if (((e, a) => {
                    for (var d = document.getElementsByTagName("link"), f = 0; f < d.length; f++) {
                      var c = (t = d[f]).getAttribute("data-href") || t.getAttribute("href");
                      if ("stylesheet" === t.rel && (c === e || c === a)) return t
                    }
                    var r = document.getElementsByTagName("style");
                    for (f = 0; f < r.length; f++) {
                      var t;
                      if ((c = (t = r[f]).getAttribute("data-href")) === e || c === a) return t
                    }
                  })(f, c)) return a();
                ((e, a, d, f, c) => {
                  var r = document.createElement("link");
                  r.rel = "stylesheet", r.type = "text/css", r.onerror = r.onload = d => {
                    if (r.onerror = r.onload = null, "load" === d.type) f();
                    else {
                      var t = d && ("load" === d.type ? "missing" : d.type),
                        b = d && d.target && d.target.href || a,
                        o = new Error("Loading CSS chunk " + e + " failed.\n(" + b + ")");
                      o.code = "CSS_CHUNK_LOAD_FAILED", o.type = t, o.request = b, r.parentNode && r.parentNode.removeChild(r), c(o)
                    }
                  }, r.href = a, document.head.appendChild(r)
                })(e, c, 0, a, d)
              })))(a).then((() => {
                e[a] = 0
              }), (d => {
                throw delete e[a], d
              })))
            }
          }
        })(), (() => {
          var e = {
            4295: 0
          };
          l.f.j = (a, d) => {
            var f = l.o(e, a) ? e[a] : void 0;
            if (0 !== f)
              if (f) d.push(f[2]);
              else if (/^(1(222|252|554|788)|2(229|35|5|918)|4(337|406|730|853|902)|7(492|780|86)|3386|3694|5966|6741|9043|9690)$/.test(a)) e[a] = 0;
            else {
              var c = new Promise(((d, c) => f = e[a] = [d, c]));
              d.push(f[2] = c);
              var r = l.p + l.u(a),
                t = new Error;
              l.l(r, (d => {
                if (l.o(e, a) && (0 !== (f = e[a]) && (e[a] = void 0), f)) {
                  var c = d && ("load" === d.type ? "missing" : d.type),
                    r = d && d.target && d.target.src;
                  t.message = "Loading chunk " + a + " failed.\n(" + c + ": " + r + ")", t.name = "ChunkLoadError", t.type = c, t.request = r, f[1](t)
                }
              }), "chunk-" + a, a)
            }
          };
          var a = (a, d) => {
              var f, c, r = d[0],
                t = d[1],
                b = d[2],
                o = 0;
              if (r.some((a => 0 !== e[a]))) {
                for (f in t) l.o(t, f) && (l.m[f] = t[f]);
                b && b(l)
              }
              for (a && a(d); o < r.length; o++) c = r[o], l.o(e, c) && e[c] && e[c][0](), e[c] = 0
            },
            d = self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || [];
          d.forEach(a.bind(null, 0)), d.push = a.bind(null, d.push.bind(d))
        })(), l.nc = void 0, l(23358), l(14197)
      })())
    }
  }
}));