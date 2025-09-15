try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "73995905-1cad-4023-bfe1-bcef4534690e", e._sentryDebugIdIdentifier = "sentry-dbid-73995905-1cad-4023-bfe1-bcef4534690e")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "7e6a862245c0f03cf7f976b07fd639dca846e391",
    packageName: "@rockstargames/modules-core-newswire-article",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "7e6a862245c0f03cf7f976b07fd639dca846e391"
}, (self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || []).push([
  [4237], {
    325: (e, t, i) => {
      "use strict";
      var n;
      i.d(t, {
        r: () => u
      });
      var r = i(60276),
        o = i(82540),
        a = i(46026),
        s = !1,
        u = (n || (n = i.t(o, 2))).useSyncExternalStore || function(e, t, i) {
          var n = t();
          !1 === globalThis.__DEV__ || s || n === t() || (s = !0, !1 !== globalThis.__DEV__ && r.V1.error(68));
          var u = o.useState({
              inst: {
                value: n,
                getSnapshot: t
              }
            }),
            c = u[0].inst,
            d = u[1];
          return a.JR ? o.useLayoutEffect((function() {
            Object.assign(c, {
              value: n,
              getSnapshot: t
            }), l(c) && d({
              inst: c
            })
          }), [e, n, t]) : Object.assign(c, {
            value: n,
            getSnapshot: t
          }), o.useEffect((function() {
            return l(c) && d({
              inst: c
            }), e((function() {
              l(c) && d({
                inst: c
              })
            }))
          }), [e]), n
        };

      function l(e) {
        var t = e.value,
          i = e.getSnapshot;
        try {
          return t !== i()
        } catch (e) {
          return !0
        }
      }
    },
    21823: (e, t, i) => {
      "use strict";
      i.d(t, {
        MS: () => u,
        UT: () => l,
        WR: () => s,
        bl: () => r
      });
      var n = i(87552),
        r = new n.DX,
        o = new WeakMap;

      function a(e) {
        var t = o.get(e);
        return t || o.set(e, t = {
          vars: new Set,
          dep: (0, n.yN)()
        }), t
      }

      function s(e) {
        a(e).vars.forEach((function(t) {
          return t.forgetCache(e)
        }))
      }

      function u(e) {
        a(e).vars.forEach((function(t) {
          return t.attachCache(e)
        }))
      }

      function l(e) {
        var t = new Set,
          i = new Set,
          n = function(s) {
            if (arguments.length > 0) {
              if (e !== s) {
                e = s, t.forEach((function(e) {
                  a(e).dep.dirty(n),
                    function(e) {
                      e.broadcastWatches && e.broadcastWatches()
                    }(e)
                }));
                var u = Array.from(i);
                i.clear(), u.forEach((function(t) {
                  return t(e)
                }))
              }
            } else {
              var l = r.getValue();
              l && (o(l), a(l).dep(n))
            }
            return e
          };
        n.onNextChange = function(e) {
          return i.add(e),
            function() {
              i.delete(e)
            }
        };
        var o = n.attachCache = function(e) {
          return t.add(e), a(e).vars.add(n), n
        };
        return n.forgetCache = function(e) {
          return t.delete(e)
        }, n
      }
    },
    25906: (e, t, i) => {
      "use strict";
      if (i(62229), !("undefined" != typeof navigator && "deviceMemory" in navigator));
      else {
        var n = "memory" in performance ? performance.memory : null;
        navigator.deviceMemory, n && n.totalJSHeapSize, n && n.usedJSHeapSize, n && n.jsHeapSizeLimit
      }
      "undefined" != typeof navigator && "hardwareConcurrency" in navigator && navigator.hardwareConcurrency
    },
    35394: (e, t, i) => {
      "use strict";

      function n() {}
      i.d(t, {
        C: () => r
      });
      class r {
        constructor(e = 1 / 0, t = n) {
          this.max = e, this.dispose = t, this.map = new Map, this.newest = null, this.oldest = null
        }
        has(e) {
          return this.map.has(e)
        }
        get(e) {
          const t = this.getNode(e);
          return t && t.value
        }
        get size() {
          return this.map.size
        }
        getNode(e) {
          const t = this.map.get(e);
          if (t && t !== this.newest) {
            const {
              older: e,
              newer: i
            } = t;
            i && (i.older = e), e && (e.newer = i), t.older = this.newest, t.older.newer = t, t.newer = null, this.newest = t, t === this.oldest && (this.oldest = i)
          }
          return t
        }
        set(e, t) {
          let i = this.getNode(e);
          return i ? i.value = t : (i = {
            key: e,
            value: t,
            newer: null,
            older: this.newest
          }, this.newest && (this.newest.newer = i), this.newest = i, this.oldest = this.oldest || i, this.map.set(e, i), i.value)
        }
        clean() {
          for (; this.oldest && this.map.size > this.max;) this.delete(this.oldest.key)
        }
        delete(e) {
          const t = this.map.get(e);
          return !!t && (t === this.newest && (this.newest = t.older), t === this.oldest && (this.oldest = t.newer), t.newer && (t.newer.older = t.older), t.older && (t.older.newer = t.newer), this.map.delete(e), this.dispose(t.value, e), !0)
        }
      }
    },
    35907: (e, t, i) => {
      "use strict";
      i.d(t, {
        v: () => r
      });
      var n = new Map;

      function r(e) {
        var t = n.get(e) || 1;
        return n.set(e, t + 1), "".concat(e, ":").concat(t, ":").concat(Math.random().toString(36).slice(2))
      }
    },
    40139: function(e, t, i) {
      var n;
      ! function(r, o) {
        "use strict";
        var a = "function",
          s = "undefined",
          u = "object",
          l = "string",
          c = "major",
          d = "model",
          f = "name",
          w = "type",
          b = "vendor",
          p = "version",
          h = "architecture",
          m = "console",
          g = "mobile",
          v = "tablet",
          y = "smarttv",
          k = "wearable",
          x = "embedded",
          _ = "Amazon",
          S = "Apple",
          E = "ASUS",
          O = "BlackBerry",
          T = "Browser",
          C = "Chrome",
          A = "Firefox",
          N = "Google",
          z = "Huawei",
          M = "LG",
          D = "Microsoft",
          R = "Motorola",
          j = "Opera",
          V = "Samsung",
          I = "Sharp",
          P = "Sony",
          U = "Xiaomi",
          q = "Zebra",
          L = "Facebook",
          B = "Chromium OS",
          H = "Mac OS",
          W = " Browser",
          F = function(e) {
            for (var t = {}, i = 0; i < e.length; i++) t[e[i].toUpperCase()] = e[i];
            return t
          },
          $ = function(e, t) {
            return typeof e === l && -1 !== G(t).indexOf(G(e))
          },
          G = function(e) {
            return e.toLowerCase()
          },
          J = function(e, t) {
            if (typeof e === l) return e = e.replace(/^\s\s*/, ""), typeof t === s ? e : e.substring(0, 500)
          },
          K = function(e, t) {
            for (var i, n, r, s, l, c, d = 0; d < t.length && !l;) {
              var f = t[d],
                w = t[d + 1];
              for (i = n = 0; i < f.length && !l && f[i];)
                if (l = f[i++].exec(e))
                  for (r = 0; r < w.length; r++) c = l[++n], typeof(s = w[r]) === u && s.length > 0 ? 2 === s.length ? typeof s[1] == a ? this[s[0]] = s[1].call(this, c) : this[s[0]] = s[1] : 3 === s.length ? typeof s[1] !== a || s[1].exec && s[1].test ? this[s[0]] = c ? c.replace(s[1], s[2]) : o : this[s[0]] = c ? s[1].call(this, c, s[2]) : o : 4 === s.length && (this[s[0]] = c ? s[3].call(this, c.replace(s[1], s[2])) : o) : this[s] = c || o;
              d += 2
            }
          },
          X = function(e, t) {
            for (var i in t)
              if (typeof t[i] === u && t[i].length > 0) {
                for (var n = 0; n < t[i].length; n++)
                  if ($(t[i][n], e)) return "?" === i ? o : i
              } else if ($(t[i], e)) return "?" === i ? o : i;
            return t.hasOwnProperty("*") ? t["*"] : e
          },
          Y = {
            ME: "4.90",
            "NT 3.11": "NT3.51",
            "NT 4.0": "NT4.0",
            2e3: "NT 5.0",
            XP: ["NT 5.1", "NT 5.2"],
            Vista: "NT 6.0",
            7: "NT 6.1",
            8: "NT 6.2",
            8.1: "NT 6.3",
            10: ["NT 6.4", "NT 10.0"],
            RT: "ARM"
          },
          Z = {
            browser: [
              [/\b(?:crmo|crios)\/([\w\.]+)/i],
              [p, [f, "Chrome"]],
              [/edg(?:e|ios|a)?\/([\w\.]+)/i],
              [p, [f, "Edge"]],
              [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],
              [f, p],
              [/opios[\/ ]+([\w\.]+)/i],
              [p, [f, j + " Mini"]],
              [/\bop(?:rg)?x\/([\w\.]+)/i],
              [p, [f, j + " GX"]],
              [/\bopr\/([\w\.]+)/i],
              [p, [f, j]],
              [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],
              [p, [f, "Baidu"]],
              [/\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i],
              [p, [f, "Maxthon"]],
              [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i, /(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon)\/([-\w\.]+)/i, /(heytap|ovi|115)browser\/([\d\.]+)/i, /(weibo)__([\d\.]+)/i],
              [f, p],
              [/quark(?:pc)?\/([-\w\.]+)/i],
              [p, [f, "Quark"]],
              [/\bddg\/([\w\.]+)/i],
              [p, [f, "DuckDuckGo"]],
              [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
              [p, [f, "UC" + T]],
              [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i, /micromessenger\/([\w\.]+)/i],
              [p, [f, "WeChat"]],
              [/konqueror\/([\w\.]+)/i],
              [p, [f, "Konqueror"]],
              [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
              [p, [f, "IE"]],
              [/ya(?:search)?browser\/([\w\.]+)/i],
              [p, [f, "Yandex"]],
              [/slbrowser\/([\w\.]+)/i],
              [p, [f, "Smart Lenovo " + T]],
              [/(avast|avg)\/([\w\.]+)/i],
              [
                [f, /(.+)/, "$1 Secure " + T], p
              ],
              [/\bfocus\/([\w\.]+)/i],
              [p, [f, A + " Focus"]],
              [/\bopt\/([\w\.]+)/i],
              [p, [f, j + " Touch"]],
              [/coc_coc\w+\/([\w\.]+)/i],
              [p, [f, "Coc Coc"]],
              [/dolfin\/([\w\.]+)/i],
              [p, [f, "Dolphin"]],
              [/coast\/([\w\.]+)/i],
              [p, [f, j + " Coast"]],
              [/miuibrowser\/([\w\.]+)/i],
              [p, [f, "MIUI" + W]],
              [/fxios\/([\w\.-]+)/i],
              [p, [f, A]],
              [/\bqihoobrowser\/?([\w\.]*)/i],
              [p, [f, "360"]],
              [/\b(qq)\/([\w\.]+)/i],
              [
                [f, /(.+)/, "$1Browser"], p
              ],
              [/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],
              [
                [f, /(.+)/, "$1" + W], p
              ],
              [/samsungbrowser\/([\w\.]+)/i],
              [p, [f, V + " Internet"]],
              [/metasr[\/ ]?([\d\.]+)/i],
              [p, [f, "Sogou Explorer"]],
              [/(sogou)mo\w+\/([\d\.]+)/i],
              [
                [f, "Sogou Mobile"], p
              ],
              [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i],
              [f, p],
              [/(lbbrowser|rekonq)/i, /\[(linkedin)app\]/i],
              [f],
              [/ome\/([\w\.]+) \w* ?(iron) saf/i, /ome\/([\w\.]+).+qihu (360)[es]e/i],
              [p, f],
              [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
              [
                [f, L], p
              ],
              [/(Klarna)\/([\w\.]+)/i, /(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(alipay)client\/([\w\.]+)/i, /(twitter)(?:and| f.+e\/([\w\.]+))/i, /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i],
              [f, p],
              [/\bgsa\/([\w\.]+) .*safari\//i],
              [p, [f, "GSA"]],
              [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
              [p, [f, "TikTok"]],
              [/headlesschrome(?:\/([\w\.]+)| )/i],
              [p, [f, C + " Headless"]],
              [/ wv\).+(chrome)\/([\w\.]+)/i],
              [
                [f, C + " WebView"], p
              ],
              [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
              [p, [f, "Android " + T]],
              [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
              [f, p],
              [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
              [p, [f, "Mobile Safari"]],
              [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
              [p, f],
              [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
              [f, [p, X, {
                "1.0": "/8",
                1.2: "/1",
                1.3: "/3",
                "2.0": "/412",
                "2.0.2": "/416",
                "2.0.3": "/417",
                "2.0.4": "/419",
                "?": "/"
              }]],
              [/(webkit|khtml)\/([\w\.]+)/i],
              [f, p],
              [/(navigator|netscape\d?)\/([-\w\.]+)/i],
              [
                [f, "Netscape"], p
              ],
              [/(wolvic|librewolf)\/([\w\.]+)/i],
              [f, p],
              [/mobile vr; rv:([\w\.]+)\).+firefox/i],
              [p, [f, A + " Reality"]],
              [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /(links) \(([\w\.]+)/i],
              [f, [p, /_/g, "."]],
              [/(cobalt)\/([\w\.]+)/i],
              [f, [p, /master.|lts./, ""]]
            ],
            cpu: [
              [/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],
              [
                [h, "amd64"]
              ],
              [/(ia32(?=;))/i],
              [
                [h, G]
              ],
              [/((?:i[346]|x)86)[;\)]/i],
              [
                [h, "ia32"]
              ],
              [/\b(aarch64|arm(v?8e?l?|_?64))\b/i],
              [
                [h, "arm64"]
              ],
              [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
              [
                [h, "armhf"]
              ],
              [/windows (ce|mobile); ppc;/i],
              [
                [h, "arm"]
              ],
              [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],
              [
                [h, /ower/, "", G]
              ],
              [/(sun4\w)[;\)]/i],
              [
                [h, "sparc"]
              ],
              [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],
              [
                [h, G]
              ]
            ],
            device: [
              [/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
              [d, [b, V],
                [w, v]
              ],
              [/\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]((?!sm-[lr])[-\w]+)/i, /sec-(sgh\w+)/i],
              [d, [b, V],
                [w, g]
              ],
              [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
              [d, [b, S],
                [w, g]
              ],
              [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
              [d, [b, S],
                [w, v]
              ],
              [/(macintosh);/i],
              [d, [b, S]],
              [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
              [d, [b, I],
                [w, g]
              ],
              [/(?:honor)([-\w ]+)[;\)]/i],
              [d, [b, "Honor"],
                [w, g]
              ],
              [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],
              [d, [b, z],
                [w, v]
              ],
              [/(?:huawei)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],
              [d, [b, z],
                [w, g]
              ],
              [/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i],
              [
                [d, /_/g, " "],
                [b, U],
                [w, g]
              ],
              [/oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i, /\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],
              [
                [d, /_/g, " "],
                [b, U],
                [w, v]
              ],
              [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
              [d, [b, "OPPO"],
                [w, g]
              ],
              [/\b(opd2\d{3}a?) bui/i],
              [d, [b, "OPPO"],
                [w, v]
              ],
              [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
              [d, [b, "Vivo"],
                [w, g]
              ],
              [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],
              [d, [b, "Realme"],
                [w, g]
              ],
              [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],
              [d, [b, R],
                [w, g]
              ],
              [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
              [d, [b, R],
                [w, v]
              ],
              [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
              [d, [b, M],
                [w, v]
              ],
              [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i, /\blg-?([\d\w]+) bui/i],
              [d, [b, M],
                [w, g]
              ],
              [/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],
              [d, [b, "Lenovo"],
                [w, v]
              ],
              [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i],
              [
                [d, /_/g, " "],
                [b, "Nokia"],
                [w, g]
              ],
              [/(pixel c)\b/i],
              [d, [b, N],
                [w, v]
              ],
              [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
              [d, [b, N],
                [w, g]
              ],
              [/droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
              [d, [b, P],
                [w, g]
              ],
              [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
              [
                [d, "Xperia Tablet"],
                [b, P],
                [w, v]
              ],
              [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
              [d, [b, "OnePlus"],
                [w, g]
              ],
              [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
              [d, [b, _],
                [w, v]
              ],
              [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
              [
                [d, /(.+)/g, "Fire Phone $1"],
                [b, _],
                [w, g]
              ],
              [/(playbook);[-\w\),; ]+(rim)/i],
              [d, b, [w, v]],
              [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
              [d, [b, O],
                [w, g]
              ],
              [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
              [d, [b, E],
                [w, v]
              ],
              [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
              [d, [b, E],
                [w, g]
              ],
              [/(nexus 9)/i],
              [d, [b, "HTC"],
                [w, v]
              ],
              [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],
              [b, [d, /_/g, " "],
                [w, g]
              ],
              [/droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])\w*(\)| bui)/i],
              [d, [b, "TCL"],
                [w, v]
              ],
              [/(itel) ((\w+))/i],
              [
                [b, G], d, [w, X, {
                  tablet: ["p10001l", "w7001"],
                  "*": "mobile"
                }]
              ],
              [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
              [d, [b, "Acer"],
                [w, v]
              ],
              [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
              [d, [b, "Meizu"],
                [w, g]
              ],
              [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
              [d, [b, "Ulefone"],
                [w, g]
              ],
              [/; (energy ?\w+)(?: bui|\))/i, /; energizer ([\w ]+)(?: bui|\))/i],
              [d, [b, "Energizer"],
                [w, g]
              ],
              [/; cat (b35);/i, /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i],
              [d, [b, "Cat"],
                [w, g]
              ],
              [/((?:new )?andromax[\w- ]+)(?: bui|\))/i],
              [d, [b, "Smartfren"],
                [w, g]
              ],
              [/droid.+; (a(?:015|06[35]|142p?))/i],
              [d, [b, "Nothing"],
                [w, g]
              ],
              [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno|micromax|advan)[-_ ]?([-\w]*)/i, /; (imo) ((?!tab)[\w ]+?)(?: bui|\))/i, /(hp) ([\w ]+\w)/i, /(asus)-?(\w+)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w]+)/i, /(jolla)/i, /(oppo) ?([\w ]+) bui/i],
              [b, d, [w, g]],
              [/(imo) (tab \w+)/i, /(kobo)\s(ereader|touch)/i, /(archos) (gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i],
              [b, d, [w, v]],
              [/(surface duo)/i],
              [d, [b, D],
                [w, v]
              ],
              [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
              [d, [b, "Fairphone"],
                [w, g]
              ],
              [/(u304aa)/i],
              [d, [b, "AT&T"],
                [w, g]
              ],
              [/\bsie-(\w*)/i],
              [d, [b, "Siemens"],
                [w, g]
              ],
              [/\b(rct\w+) b/i],
              [d, [b, "RCA"],
                [w, v]
              ],
              [/\b(venue[\d ]{2,7}) b/i],
              [d, [b, "Dell"],
                [w, v]
              ],
              [/\b(q(?:mv|ta)\w+) b/i],
              [d, [b, "Verizon"],
                [w, v]
              ],
              [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
              [d, [b, "Barnes & Noble"],
                [w, v]
              ],
              [/\b(tm\d{3}\w+) b/i],
              [d, [b, "NuVision"],
                [w, v]
              ],
              [/\b(k88) b/i],
              [d, [b, "ZTE"],
                [w, v]
              ],
              [/\b(nx\d{3}j) b/i],
              [d, [b, "ZTE"],
                [w, g]
              ],
              [/\b(gen\d{3}) b.+49h/i],
              [d, [b, "Swiss"],
                [w, g]
              ],
              [/\b(zur\d{3}) b/i],
              [d, [b, "Swiss"],
                [w, v]
              ],
              [/\b((zeki)?tb.*\b) b/i],
              [d, [b, "Zeki"],
                [w, v]
              ],
              [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
              [
                [b, "Dragon Touch"], d, [w, v]
              ],
              [/\b(ns-?\w{0,9}) b/i],
              [d, [b, "Insignia"],
                [w, v]
              ],
              [/\b((nxa|next)-?\w{0,9}) b/i],
              [d, [b, "NextBook"],
                [w, v]
              ],
              [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
              [
                [b, "Voice"], d, [w, g]
              ],
              [/\b(lvtel\-)?(v1[12]) b/i],
              [
                [b, "LvTel"], d, [w, g]
              ],
              [/\b(ph-1) /i],
              [d, [b, "Essential"],
                [w, g]
              ],
              [/\b(v(100md|700na|7011|917g).*\b) b/i],
              [d, [b, "Envizen"],
                [w, v]
              ],
              [/\b(trio[-\w\. ]+) b/i],
              [d, [b, "MachSpeed"],
                [w, v]
              ],
              [/\btu_(1491) b/i],
              [d, [b, "Rotor"],
                [w, v]
              ],
              [/(shield[\w ]+) b/i],
              [d, [b, "Nvidia"],
                [w, v]
              ],
              [/(sprint) (\w+)/i],
              [b, d, [w, g]],
              [/(kin\.[onetw]{3})/i],
              [
                [d, /\./g, " "],
                [b, D],
                [w, g]
              ],
              [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
              [d, [b, q],
                [w, v]
              ],
              [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
              [d, [b, q],
                [w, g]
              ],
              [/smart-tv.+(samsung)/i],
              [b, [w, y]],
              [/hbbtv.+maple;(\d+)/i],
              [
                [d, /^/, "SmartTV"],
                [b, V],
                [w, y]
              ],
              [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
              [
                [b, M],
                [w, y]
              ],
              [/(apple) ?tv/i],
              [b, [d, S + " TV"],
                [w, y]
              ],
              [/crkey/i],
              [
                [d, C + "cast"],
                [b, N],
                [w, y]
              ],
              [/droid.+aft(\w+)( bui|\))/i],
              [d, [b, _],
                [w, y]
              ],
              [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
              [d, [b, I],
                [w, y]
              ],
              [/(bravia[\w ]+)( bui|\))/i],
              [d, [b, P],
                [w, y]
              ],
              [/(mitv-\w{5}) bui/i],
              [d, [b, U],
                [w, y]
              ],
              [/Hbbtv.*(technisat) (.*);/i],
              [b, d, [w, y]],
              [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],
              [
                [b, J],
                [d, J],
                [w, y]
              ],
              [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
              [
                [w, y]
              ],
              [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
              [b, d, [w, m]],
              [/droid.+; (shield) bui/i],
              [d, [b, "Nvidia"],
                [w, m]
              ],
              [/(playstation [345portablevi]+)/i],
              [d, [b, P],
                [w, m]
              ],
              [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
              [d, [b, D],
                [w, m]
              ],
              [/\b(sm-[lr]\d\d[05][fnuw]?s?)\b/i],
              [d, [b, V],
                [w, k]
              ],
              [/((pebble))app/i],
              [b, d, [w, k]],
              [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
              [d, [b, S],
                [w, k]
              ],
              [/droid.+; (glass) \d/i],
              [d, [b, N],
                [w, k]
              ],
              [/droid.+; (wt63?0{2,3})\)/i],
              [d, [b, q],
                [w, k]
              ],
              [/droid.+; (glass) \d/i],
              [d, [b, N],
                [w, k]
              ],
              [/(pico) (4|neo3(?: link|pro)?)/i],
              [b, d, [w, k]],
              [/; (quest( \d| pro)?)/i],
              [d, [b, L],
                [w, k]
              ],
              [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
              [b, [w, x]],
              [/(aeobc)\b/i],
              [d, [b, _],
                [w, x]
              ],
              [/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],
              [d, [w, g]],
              [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
              [d, [w, v]],
              [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
              [
                [w, v]
              ],
              [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
              [
                [w, g]
              ],
              [/(android[-\w\. ]{0,9});.+buil/i],
              [d, [b, "Generic"]]
            ],
            engine: [
              [/windows.+ edge\/([\w\.]+)/i],
              [p, [f, "EdgeHTML"]],
              [/(arkweb)\/([\w\.]+)/i],
              [f, p],
              [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
              [p, [f, "Blink"]],
              [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i],
              [f, p],
              [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
              [p, f]
            ],
            os: [
              [/microsoft (windows) (vista|xp)/i],
              [f, p],
              [/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i],
              [f, [p, X, Y]],
              [/windows nt 6\.2; (arm)/i, /windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i, /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
              [
                [p, X, Y],
                [f, "Windows"]
              ],
              [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i, /cfnetwork\/.+darwin/i],
              [
                [p, /_/g, "."],
                [f, "iOS"]
              ],
              [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
              [
                [f, H],
                [p, /_/g, "."]
              ],
              [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
              [p, f],
              [/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish|openharmony)[-\/ ]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/ ]([\w\.]+)/i, /\((series40);/i],
              [f, p],
              [/\(bb(10);/i],
              [p, [f, O]],
              [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],
              [p, [f, "Symbian"]],
              [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
              [p, [f, A + " OS"]],
              [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
              [p, [f, "webOS"]],
              [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
              [p, [f, "watchOS"]],
              [/crkey\/([\d\.]+)/i],
              [p, [f, C + "cast"]],
              [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
              [
                [f, B], p
              ],
              [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux) ?([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i],
              [f, p],
              [/(sunos) ?([\w\.\d]*)/i],
              [
                [f, "Solaris"], p
              ],
              [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i],
              [f, p]
            ]
          },
          Q = function(e, t) {
            if (typeof e === u && (t = e, e = o), !(this instanceof Q)) return new Q(e, t).getResult();
            var i = typeof r !== s && r.navigator ? r.navigator : o,
              n = e || (i && i.userAgent ? i.userAgent : ""),
              m = i && i.userAgentData ? i.userAgentData : o,
              y = t ? function(e, t) {
                var i = {};
                for (var n in e) t[n] && t[n].length % 2 == 0 ? i[n] = t[n].concat(e[n]) : i[n] = e[n];
                return i
              }(Z, t) : Z,
              k = i && i.userAgent == n;
            return this.getBrowser = function() {
              var e, t = {};
              return t[f] = o, t[p] = o, K.call(t, n, y.browser), t[c] = typeof(e = t[p]) === l ? e.replace(/[^\d\.]/g, "").split(".")[0] : o, k && i && i.brave && typeof i.brave.isBrave == a && (t[f] = "Brave"), t
            }, this.getCPU = function() {
              var e = {};
              return e[h] = o, K.call(e, n, y.cpu), e
            }, this.getDevice = function() {
              var e = {};
              return e[b] = o, e[d] = o, e[w] = o, K.call(e, n, y.device), k && !e[w] && m && m.mobile && (e[w] = g), k && "Macintosh" == e[d] && i && typeof i.standalone !== s && i.maxTouchPoints && i.maxTouchPoints > 2 && (e[d] = "iPad", e[w] = v), e
            }, this.getEngine = function() {
              var e = {};
              return e[f] = o, e[p] = o, K.call(e, n, y.engine), e
            }, this.getOS = function() {
              var e = {};
              return e[f] = o, e[p] = o, K.call(e, n, y.os), k && !e[f] && m && m.platform && "Unknown" != m.platform && (e[f] = m.platform.replace(/chrome os/i, B).replace(/macos/i, H)), e
            }, this.getResult = function() {
              return {
                ua: this.getUA(),
                browser: this.getBrowser(),
                engine: this.getEngine(),
                os: this.getOS(),
                device: this.getDevice(),
                cpu: this.getCPU()
              }
            }, this.getUA = function() {
              return n
            }, this.setUA = function(e) {
              return n = typeof e === l && e.length > 500 ? J(e, 500) : e, this
            }, this.setUA(n), this
          };
        Q.VERSION = "1.0.40", Q.BROWSER = F([f, p, c]), Q.CPU = F([h]), Q.DEVICE = F([d, b, w, m, g, y, v, k, x]), Q.ENGINE = Q.OS = F([f, p]), typeof t !== s ? (e.exports && (t = e.exports = Q), t.UAParser = Q) : i.amdO ? (n = function() {
          return Q
        }.call(t, i, t, e)) === o || (e.exports = n) : typeof r !== s && (r.UAParser = Q);
        var ee = typeof r !== s && (r.jQuery || r.Zepto);
        if (ee && !ee.ua) {
          var te = new Q;
          ee.ua = te.getResult(), ee.ua.get = function() {
            return te.getUA()
          }, ee.ua.set = function(e) {
            te.setUA(e);
            var t = te.getResult();
            for (var i in t) ee.ua[i] = t[i]
          }
        }
      }("object" == typeof window ? window : this)
    },
    42887: (e, t, i) => {
      "use strict";
      i.d(t, {
        sc: () => r
      });
      const n = e => async (t, {
        outputFormat: i = "hex"
      } = {}) => {
        "string" == typeof t && (t = (new globalThis.TextEncoder).encode(t));
        const n = await globalThis.crypto.subtle.digest(e, t);
        return "hex" === i ? (e => {
          const t = new DataView(e);
          let i = "";
          for (let e = 0; e < t.byteLength; e += 4) i += t.getUint32(e).toString(16).padStart(8, "0");
          return i
        })(n) : n
      }, r = (n("SHA-1"), n("SHA-256"));
      n("SHA-384"), n("SHA-512")
    },
    46026: (e, t, i) => {
      "use strict";
      i.d(t, {
        En: () => a,
        JR: () => d,
        Sw: () => l,
        et: () => o,
        ol: () => s,
        uJ: () => u
      });
      var n = i(60276),
        r = "ReactNative" == (0, n.no)((function() {
          return navigator.product
        })),
        o = "function" == typeof WeakMap && !(r && !global.HermesInternal),
        a = "function" == typeof WeakSet,
        s = "function" == typeof Symbol && "function" == typeof Symbol.for,
        u = s && Symbol.asyncIterator,
        l = "function" == typeof(0, n.no)((function() {
          return window.document.createElement
        })),
        c = (0, n.no)((function() {
          return navigator.userAgent.indexOf("jsdom") >= 0
        })) || !1,
        d = (l || r) && !c
    },
    46465: (e, t, i) => {
      "use strict";
      i.d(t, {
        p: () => r
      });
      var n = i(35907);

      function r(e, t) {
        void 0 === t && (t = 0);
        var i = (0, n.v)("stringifyForDisplay");
        return JSON.stringify(e, (function(e, t) {
          return void 0 === t ? i : t
        }), t).split(JSON.stringify(i)).join("<undefined>")
      }
    },
    48914: (e, t, i) => {
      "use strict";
      i.d(t, {
        r: () => n
      });
      var n = "3.13.8"
    },
    56926: (e, t, i) => {
      "use strict";
      i.d(t, {
        b: () => s
      });
      const n = () => Object.create(null),
        {
          forEach: r,
          slice: o
        } = Array.prototype,
        {
          hasOwnProperty: a
        } = Object.prototype;
      class s {
        constructor(e = !0, t = n) {
          this.weakness = e, this.makeData = t
        }
        lookup() {
          return this.lookupArray(arguments)
        }
        lookupArray(e) {
          let t = this;
          return r.call(e, (e => t = t.getChildTrie(e))), a.call(t, "data") ? t.data : t.data = this.makeData(o.call(e))
        }
        peek() {
          return this.peekArray(arguments)
        }
        peekArray(e) {
          let t = this;
          for (let i = 0, n = e.length; t && i < n; ++i) {
            const n = t.mapFor(e[i], !1);
            t = n && n.get(e[i])
          }
          return t && t.data
        }
        remove() {
          return this.removeArray(arguments)
        }
        removeArray(e) {
          let t;
          if (e.length) {
            const i = e[0],
              n = this.mapFor(i, !1),
              r = n && n.get(i);
            r && (t = r.removeArray(o.call(e, 1)), r.data || r.weak || r.strong && r.strong.size || n.delete(i))
          } else t = this.data, delete this.data;
          return t
        }
        getChildTrie(e) {
          const t = this.mapFor(e, !0);
          let i = t.get(e);
          return i || t.set(e, i = new s(this.weakness, this.makeData)), i
        }
        mapFor(e, t) {
          return this.weakness && function(e) {
            switch (typeof e) {
              case "object":
                if (null === e) break;
              case "function":
                return !0
            }
            return !1
          }(e) ? this.weak || (t ? this.weak = new WeakMap : void 0) : this.strong || (t ? this.strong = new Map : void 0)
        }
      }
    },
    58128: (e, t, i) => {
      "use strict";
      i.d(t, {
        s: () => r
      });
      class n extends Error {}

      function r(e, t) {
        if ("string" != typeof e) throw new n("Invalid token specified: must be a string");
        t || (t = {});
        const i = !0 === t.header ? 0 : 1,
          r = e.split(".")[i];
        if ("string" != typeof r) throw new n(`Invalid token specified: missing part #${i+1}`);
        let o;
        try {
          o = function(e) {
            let t = e.replace(/-/g, "+").replace(/_/g, "/");
            switch (t.length % 4) {
              case 0:
                break;
              case 2:
                t += "==";
                break;
              case 3:
                t += "=";
                break;
              default:
                throw new Error("base64 string is not of the correct length")
            }
            try {
              return function(e) {
                return decodeURIComponent(atob(e).replace(/(.)/g, ((e, t) => {
                  let i = t.charCodeAt(0).toString(16).toUpperCase();
                  return i.length < 2 && (i = "0" + i), "%" + i
                })))
              }(t)
            } catch (e) {
              return atob(t)
            }
          }(r)
        } catch (e) {
          throw new n(`Invalid token specified: invalid base64 for part #${i+1} (${e.message})`)
        }
        try {
          return JSON.parse(o)
        } catch (e) {
          throw new n(`Invalid token specified: invalid json for part #${i+1} (${e.message})`)
        }
      }
      n.prototype.name = "InvalidTokenError"
    },
    60276: (e, t, i) => {
      "use strict";
      i.d(t, {
        Sf: () => p,
        V1: () => g,
        no: () => b,
        vA: () => v
      });
      var n = i(78322),
        r = "Invariant Violation",
        o = Object.setPrototypeOf,
        a = void 0 === o ? function(e, t) {
          return e.__proto__ = t, e
        } : o,
        s = function(e) {
          function t(i) {
            void 0 === i && (i = r);
            var n = e.call(this, "number" == typeof i ? r + ": " + i + " (see https://github.com/apollographql/invariant-packages)" : i) || this;
            return n.framesToPop = 1, n.name = r, a(n, t.prototype), n
          }
          return (0, n.__extends)(t, e), t
        }(Error);

      function u(e, t) {
        if (!e) throw new s(t)
      }
      var l, c = ["debug", "log", "warn", "error", "silent"],
        d = c.indexOf("log");

      function f(e) {
        return function() {
          if (c.indexOf(e) >= d) return (console[e] || console.log).apply(console, arguments)
        }
      }(l = u || (u = {})).debug = f("debug"), l.log = f("log"), l.warn = f("warn"), l.error = f("error");
      var w = i(48914);

      function b(e) {
        try {
          return e()
        } catch (e) {}
      }
      const p = b((function() {
        return globalThis
      })) || b((function() {
        return window
      })) || b((function() {
        return self
      })) || b((function() {
        return global
      })) || b((function() {
        return b.constructor("return this")()
      }));
      var h = i(46465);

      function m(e) {
        return function(t) {
          for (var i = [], n = 1; n < arguments.length; n++) i[n - 1] = arguments[n];
          if ("number" == typeof t) {
            var r = t;
            (t = x(r)) || (t = _(r, i), i = [])
          }
          e.apply(void 0, [t].concat(i))
        }
      }
      var g = Object.assign((function(e, t) {
        for (var i = [], n = 2; n < arguments.length; n++) i[n - 2] = arguments[n];
        e || u(e, x(t, i) || _(t, i))
      }), {
        debug: m(u.debug),
        log: m(u.log),
        warn: m(u.warn),
        error: m(u.error)
      });

      function v(e) {
        for (var t = [], i = 1; i < arguments.length; i++) t[i - 1] = arguments[i];
        return new s(x(e, t) || _(e, t))
      }
      var y = Symbol.for("ApolloErrorMessageHandler_" + w.r);

      function k(e) {
        if ("string" == typeof e) return e;
        try {
          return (0, h.p)(e, 2).slice(0, 1e3)
        } catch (e) {
          return "<non-serializable>"
        }
      }

      function x(e, t) {
        if (void 0 === t && (t = []), e) return p[y] && p[y](e, t.map(k))
      }

      function _(e, t) {
        if (void 0 === t && (t = []), e) return "An error occurred! For more details, see the full error text at https://go.apollo.dev/c/err#".concat(encodeURIComponent(JSON.stringify({
          version: w.r,
          message: e,
          args: t.map(k)
        })))
      }
      globalThis.__DEV__
    },
    81878: (e, t, i) => {
      "use strict";
      (n = i(62229)) && "object" == typeof n && "default" in n && n.default;
      var n, r = i(40139),
        o = new r,
        a = o.getBrowser(),
        s = (o.getCPU(), o.getDevice()),
        u = o.getEngine(),
        l = o.getOS(),
        c = o.getUA();
      var d = "mobile",
        f = "tablet",
        w = "Chrome",
        b = "Firefox",
        p = "Opera",
        h = "Yandex",
        m = "Safari",
        g = "Internet Explorer",
        v = "Edge",
        y = "Chromium",
        k = "IE",
        x = "Mobile Safari",
        _ = "MIUI Browser",
        S = "Samsung Browser",
        E = "iOS",
        O = "Android",
        T = "Windows Phone",
        C = "Windows",
        A = "Mac OS",
        N = function(e) {
          return e || (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "none")
        },
        z = function() {
          return !("undefined" == typeof window || !window.navigator && !navigator) && (window.navigator || navigator)
        },
        M = function(e) {
          var t = z();
          return t && t.platform && (-1 !== t.platform.indexOf(e) || "MacIntel" === t.platform && t.maxTouchPoints > 1 && !window.MSStream)
        },
        D = function(e) {
          return e.type === d
        },
        R = function(e) {
          return e.type === f
        },
        j = function(e) {
          var t = e.type;
          return t === d || t === f
        },
        V = function(e) {
          return "smarttv" === e.type
        },
        I = function(e) {
          return undefined === e.type
        },
        P = function(e) {
          return "wearable" === e.type
        },
        U = function(e) {
          return "console" === e.type
        },
        q = function(e) {
          return "embedded" === e.type
        },
        L = function(e) {
          var t = e.vendor;
          return N(t)
        },
        B = function(e) {
          var t = e.model;
          return N(t)
        },
        H = function(e) {
          var t = e.type;
          return N(t, "browser")
        },
        W = function(e) {
          return e.name === O
        },
        F = function(e) {
          return e.name === C
        },
        $ = function(e) {
          return e.name === A
        },
        G = function(e) {
          return e.name === T
        },
        J = function(e) {
          return e.name === E
        },
        K = function(e) {
          var t = e.version;
          return N(t)
        },
        X = function(e) {
          var t = e.name;
          return N(t)
        },
        Y = function(e) {
          return e.name === w
        },
        Z = function(e) {
          return e.name === b
        },
        Q = function(e) {
          return e.name === y
        },
        ee = function(e) {
          return e.name === v
        },
        te = function(e) {
          return e.name === h
        },
        ie = function(e) {
          var t = e.name;
          return t === m || t === x
        },
        ne = function(e) {
          return e.name === x
        },
        re = function(e) {
          return e.name === p
        },
        oe = function(e) {
          var t = e.name;
          return t === g || t === k
        },
        ae = function(e) {
          return e.name === _
        },
        se = function(e) {
          return e.name === S
        },
        ue = function(e) {
          var t = e.version;
          return N(t)
        },
        le = function(e) {
          var t = e.major;
          return N(t)
        },
        ce = function(e) {
          var t = e.name;
          return N(t)
        },
        de = function(e) {
          var t = e.name;
          return N(t)
        },
        fe = function(e) {
          var t = e.version;
          return N(t)
        },
        we = function() {
          var e = z(),
            t = e && e.userAgent && e.userAgent.toLowerCase();
          return "string" == typeof t && /electron/.test(t)
        },
        be = function(e) {
          return "string" == typeof e && -1 !== e.indexOf("Edg/")
        },
        pe = function() {
          var e = z();
          return e && (/iPad|iPhone|iPod/.test(e.platform) || "MacIntel" === e.platform && e.maxTouchPoints > 1) && !window.MSStream
        },
        he = function() {
          return M("iPad")
        },
        me = function() {
          return M("iPhone")
        },
        ge = function() {
          return M("iPod")
        },
        ve = function(e) {
          return N(e)
        };
      V(s), U(s), P(s), q(s), ne(a) || he(), Q(a), j(s) || he(), D(s), R(s) || he(), I(s), I(s), W(l), G(l), J(l) || he(), Y(a), Z(a), ie(a), re(a), oe(a), K(l), X(l), ue(a), le(a), ce(a), L(s), B(s), de(u), fe(u), ve(c), ee(a) || be(c), te(a), H(s), pe(), he(), me(), ge(), we(), be(c), ee(a) && be(c), F(l), $(l), ae(a), se(a)
    },
    82540: (e, t, i) => {
      "use strict";
      e.exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = void 0, e.exports.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = void 0, e.exports.__SERVER_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = void 0, Object.assign(e.exports, i(62229))
    },
    87552: (e, t, i) => {
      "use strict";
      i.d(t, {
        DX: () => d,
        yN: () => V,
        LV: () => q
      });
      var n = i(56926),
        r = i(35394);
      let o = null;
      const a = {};
      let s = 1;

      function u(e) {
        try {
          return e()
        } catch (e) {}
      }
      const l = "@wry/context:Slot",
        c = u((() => globalThis)) || u((() => global)) || Object.create(null),
        d = c[l] || Array[l] || function(e) {
          try {
            Object.defineProperty(c, l, {
              value: e,
              enumerable: !1,
              writable: !1,
              configurable: !0
            })
          } finally {
            return e
          }
        }(class {
          constructor() {
            this.id = ["slot", s++, Date.now(), Math.random().toString(36).slice(2)].join(":")
          }
          hasValue() {
            for (let e = o; e; e = e.parent)
              if (this.id in e.slots) {
                const t = e.slots[this.id];
                if (t === a) break;
                return e !== o && (o.slots[this.id] = t), !0
              } return o && (o.slots[this.id] = a), !1
          }
          getValue() {
            if (this.hasValue()) return o.slots[this.id]
          }
          withValue(e, t, i, n) {
            const r = {
                __proto__: null,
                [this.id]: e
              },
              a = o;
            o = {
              parent: a,
              slots: r
            };
            try {
              return t.apply(n, i)
            } finally {
              o = a
            }
          }
          static bind(e) {
            const t = o;
            return function() {
              const i = o;
              try {
                return o = t, e.apply(this, arguments)
              } finally {
                o = i
              }
            }
          }
          static noContext(e, t, i) {
            if (!o) return e.apply(i, t); {
              const n = o;
              try {
                return o = null, e.apply(i, t)
              } finally {
                o = n
              }
            }
          }
        }),
        {
          bind: f,
          noContext: w
        } = d,
        b = new d,
        {
          hasOwnProperty: p
        } = Object.prototype,
        h = Array.from || function(e) {
          const t = [];
          return e.forEach((e => t.push(e))), t
        };

      function m(e) {
        const {
          unsubscribe: t
        } = e;
        "function" == typeof t && (e.unsubscribe = void 0, t())
      }
      const g = [];

      function v(e, t) {
        if (!e) throw new Error(t || "assertion failure")
      }

      function y(e, t) {
        const i = e.length;
        return i > 0 && i === t.length && e[i - 1] === t[i - 1]
      }

      function k(e) {
        switch (e.length) {
          case 0:
            throw new Error("unknown value");
          case 1:
            return e[0];
          case 2:
            throw e[1]
        }
      }

      function x(e) {
        return e.slice(0)
      }
      class _ {
        constructor(e) {
          this.fn = e, this.parents = new Set, this.childValues = new Map, this.dirtyChildren = null, this.dirty = !0, this.recomputing = !1, this.value = [], this.deps = null, ++_.count
        }
        peek() {
          if (1 === this.value.length && !O(this)) return S(this), this.value[0]
        }
        recompute(e) {
          return v(!this.recomputing, "already recomputing"), S(this), O(this) ? function(e, t) {
            return D(e), b.withValue(e, E, [e, t]),
              function(e, t) {
                if ("function" == typeof e.subscribe) try {
                  m(e), e.unsubscribe = e.subscribe.apply(null, t)
                } catch (t) {
                  return e.setDirty(), !1
                }
                return !0
              }(e, t) && function(e) {
                e.dirty = !1, O(e) || C(e)
              }(e), k(e.value)
          }(this, e) : k(this.value)
        }
        setDirty() {
          this.dirty || (this.dirty = !0, T(this), m(this))
        }
        dispose() {
          this.setDirty(), D(this), A(this, ((e, t) => {
            e.setDirty(), R(e, this)
          }))
        }
        forget() {
          this.dispose()
        }
        dependOn(e) {
          e.add(this), this.deps || (this.deps = g.pop() || new Set), this.deps.add(e)
        }
        forgetDeps() {
          this.deps && (h(this.deps).forEach((e => e.delete(this))), this.deps.clear(), g.push(this.deps), this.deps = null)
        }
      }

      function S(e) {
        const t = b.getValue();
        if (t) return e.parents.add(t), t.childValues.has(e) || t.childValues.set(e, []), O(e) ? N(t, e) : z(t, e), t
      }

      function E(e, t) {
        e.recomputing = !0;
        const {
          normalizeResult: i
        } = e;
        let n;
        i && 1 === e.value.length && (n = x(e.value)), e.value.length = 0;
        try {
          if (e.value[0] = e.fn.apply(null, t), i && n && !y(n, e.value)) try {
            e.value[0] = i(e.value[0], n[0])
          } catch (e) {}
        } catch (t) {
          e.value[1] = t
        }
        e.recomputing = !1
      }

      function O(e) {
        return e.dirty || !(!e.dirtyChildren || !e.dirtyChildren.size)
      }

      function T(e) {
        A(e, N)
      }

      function C(e) {
        A(e, z)
      }

      function A(e, t) {
        const i = e.parents.size;
        if (i) {
          const n = h(e.parents);
          for (let r = 0; r < i; ++r) t(n[r], e)
        }
      }

      function N(e, t) {
        v(e.childValues.has(t)), v(O(t));
        const i = !O(e);
        if (e.dirtyChildren) {
          if (e.dirtyChildren.has(t)) return
        } else e.dirtyChildren = g.pop() || new Set;
        e.dirtyChildren.add(t), i && T(e)
      }

      function z(e, t) {
        v(e.childValues.has(t)), v(!O(t));
        const i = e.childValues.get(t);
        0 === i.length ? e.childValues.set(t, x(t.value)) : y(i, t.value) || e.setDirty(), M(e, t), O(e) || C(e)
      }

      function M(e, t) {
        const i = e.dirtyChildren;
        i && (i.delete(t), 0 === i.size && (g.length < 100 && g.push(i), e.dirtyChildren = null))
      }

      function D(e) {
        e.childValues.size > 0 && e.childValues.forEach(((t, i) => {
          R(e, i)
        })), e.forgetDeps(), v(null === e.dirtyChildren)
      }

      function R(e, t) {
        t.parents.delete(e), e.childValues.delete(t), M(e, t)
      }
      _.count = 0;
      const j = {
        setDirty: !0,
        dispose: !0,
        forget: !0
      };

      function V(e) {
        const t = new Map,
          i = e && e.subscribe;

        function n(e) {
          const n = b.getValue();
          if (n) {
            let r = t.get(e);
            r || t.set(e, r = new Set), n.dependOn(r), "function" == typeof i && (m(r), r.unsubscribe = i(e))
          }
        }
        return n.dirty = function(e, i) {
          const n = t.get(e);
          if (n) {
            const r = i && p.call(j, i) ? i : "setDirty";
            h(n).forEach((e => e[r]())), t.delete(e), m(n)
          }
        }, n
      }
      let I;

      function P(...e) {
        return (I || (I = new n.b("function" == typeof WeakMap))).lookupArray(e)
      }
      const U = new Set;

      function q(e, {
        max: t = Math.pow(2, 16),
        keyArgs: i,
        makeCacheKey: n = P,
        normalizeResult: o,
        subscribe: a,
        cache: s = r.C
      } = Object.create(null)) {
        const u = "function" == typeof s ? new s(t, (e => e.dispose())) : s,
          l = function() {
            const t = n.apply(null, i ? i.apply(null, arguments) : arguments);
            if (void 0 === t) return e.apply(null, arguments);
            let r = u.get(t);
            r || (u.set(t, r = new _(e)), r.normalizeResult = o, r.subscribe = a, r.forget = () => u.delete(t));
            const s = r.recompute(Array.prototype.slice.call(arguments));
            return u.set(t, r), U.add(u), b.hasValue() || (U.forEach((e => e.clean())), U.clear()), s
          };

        function c(e) {
          const t = e && u.get(e);
          t && t.setDirty()
        }

        function d(e) {
          const t = e && u.get(e);
          if (t) return t.peek()
        }

        function f(e) {
          return !!e && u.delete(e)
        }
        return Object.defineProperty(l, "size", {
          get: () => u.size,
          configurable: !1,
          enumerable: !1
        }), Object.freeze(l.options = {
          max: t,
          keyArgs: i,
          makeCacheKey: n,
          normalizeResult: o,
          subscribe: a,
          cache: u
        }), l.dirtyKey = c, l.dirty = function() {
          c(n.apply(null, arguments))
        }, l.peekKey = d, l.peek = function() {
          return d(n.apply(null, arguments))
        }, l.forgetKey = f, l.forget = function() {
          return f(n.apply(null, arguments))
        }, l.makeCacheKey = n, l.getKey = i ? function() {
          return n.apply(null, i.apply(null, arguments))
        } : n, Object.freeze(l)
      }
    },
    93452: (e, t, i) => {
      "use strict";
      i.d(t, {
        q: () => o
      });
      var n = i(82540),
        r = i(325);

      function o(e) {
        return (0, r.r)(n.useCallback((function(t) {
          return e.onNextChange((function i() {
            t(), e.onNextChange(i)
          }))
        }), [e]), e, e)
      }
    }
  }
]);