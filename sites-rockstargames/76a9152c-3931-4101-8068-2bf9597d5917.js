try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "76a9152c-3931-4101-8068-2bf9597d5917", e._sentryDebugIdIdentifier = "sentry-dbid-76a9152c-3931-4101-8068-2bf9597d5917")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "7e6a862245c0f03cf7f976b07fd639dca846e391",
    packageName: "@rockstargames/sites-rockstargames",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "7e6a862245c0f03cf7f976b07fd639dca846e391"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
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
            l = u[0].inst,
            d = u[1];
          return a.JR ? o.useLayoutEffect((function() {
            Object.assign(l, {
              value: n,
              getSnapshot: t
            }), c(l) && d({
              inst: l
            })
          }), [e, n, t]) : Object.assign(l, {
            value: n,
            getSnapshot: t
          }), o.useEffect((function() {
            return c(l) && d({
              inst: l
            }), e((function() {
              c(l) && d({
                inst: l
              })
            }))
          }), [e]), n
        };

      function c(e) {
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
        UT: () => c,
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

      function c(e) {
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
              var c = r.getValue();
              c && (o(c), a(c).dep(n))
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
      i.d(t, {
        M5: () => d,
        XB: () => w,
        xV: () => h,
        zp: () => f
      });
      var n = i(62229);

      function r(e, t, i) {
        return t in e ? Object.defineProperty(e, t, {
          value: i,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = i, e
      }

      function o(e, t) {
        var i = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), i.push.apply(i, n)
        }
        return i
      }

      function a(e) {
        for (var t = 1; t < arguments.length; t++) {
          var i = null != arguments[t] ? arguments[t] : {};
          t % 2 ? o(i, !0).forEach((function(t) {
            r(e, t, i[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : o(i).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
          }))
        }
        return e
      }
      var s, u, c, l, d = function(e) {
          var t, i = {
              unsupported: s = !("undefined" != typeof navigator && "connection" in navigator && "effectiveType" in navigator.connection),
              effectiveConnectionType: s ? e : navigator.connection.effectiveType
            },
            r = function(e) {
              if (Array.isArray(e)) return e
            }(t = (0, n.useState)(i)) || function(e) {
              if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) {
                var t = [],
                  i = !0,
                  n = !1,
                  r = void 0;
                try {
                  for (var o, a = e[Symbol.iterator](); !(i = (o = a.next()).done) && (t.push(o.value), 2 !== t.length); i = !0);
                } catch (e) {
                  n = !0, r = e
                } finally {
                  try {
                    i || null == a.return || a.return()
                  } finally {
                    if (n) throw r
                  }
                }
                return t
              }
            }(t) || function() {
              throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }(),
            o = r[0],
            u = r[1];
          return (0, n.useEffect)((function() {
            if (!s) {
              var e = navigator.connection,
                t = function() {
                  u({
                    effectiveConnectionType: e.effectiveType
                  })
                };
              return e.addEventListener("change", t),
                function() {
                  e.removeEventListener("change", t)
                }
            }
          }), []), a({}, o, {
            setNetworkStatus: u
          })
        },
        f = function() {
          return {
            unsupported: u = !("undefined" != typeof navigator && "connection" in navigator && "saveData" in navigator.connection),
            saveData: u ? arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null : !0 === navigator.connection.saveData
          }
        };
      if (c = !("undefined" != typeof navigator && "deviceMemory" in navigator)) l = {
        unsupported: c
      };
      else {
        var b = "memory" in performance ? performance.memory : null;
        l = {
          unsupported: c,
          deviceMemory: navigator.deviceMemory,
          totalJSHeapSize: b ? b.totalJSHeapSize : null,
          usedJSHeapSize: b ? b.usedJSHeapSize : null,
          jsHeapSizeLimit: b ? b.jsHeapSizeLimit : null
        }
      }
      var p, w = function(e) {
        return c && e ? a({}, l, {}, e) : a({}, l)
      };
      p = "undefined" != typeof navigator && "hardwareConcurrency" in navigator ? {
        unsupported: !1,
        numberOfLogicalProcessors: navigator.hardwareConcurrency
      } : {
        unsupported: !0
      };
      var h = function() {
        return a({}, p)
      }
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
          c = "string",
          l = "major",
          d = "model",
          f = "name",
          b = "type",
          p = "vendor",
          w = "version",
          h = "architecture",
          g = "console",
          m = "mobile",
          v = "tablet",
          y = "smarttv",
          k = "wearable",
          x = "embedded",
          _ = "Amazon",
          S = "Apple",
          O = "ASUS",
          E = "BlackBerry",
          T = "Browser",
          C = "Chrome",
          A = "Firefox",
          N = "Google",
          j = "Huawei",
          z = "LG",
          D = "Microsoft",
          M = "Motorola",
          P = "Opera",
          R = "Samsung",
          V = "Sharp",
          I = "Sony",
          U = "Xiaomi",
          q = "Zebra",
          L = "Facebook",
          H = "Chromium OS",
          B = "Mac OS",
          W = " Browser",
          F = function(e) {
            for (var t = {}, i = 0; i < e.length; i++) t[e[i].toUpperCase()] = e[i];
            return t
          },
          J = function(e, t) {
            return typeof e === c && -1 !== $(t).indexOf($(e))
          },
          $ = function(e) {
            return e.toLowerCase()
          },
          G = function(e, t) {
            if (typeof e === c) return e = e.replace(/^\s\s*/, ""), typeof t === s ? e : e.substring(0, 500)
          },
          K = function(e, t) {
            for (var i, n, r, s, c, l, d = 0; d < t.length && !c;) {
              var f = t[d],
                b = t[d + 1];
              for (i = n = 0; i < f.length && !c && f[i];)
                if (c = f[i++].exec(e))
                  for (r = 0; r < b.length; r++) l = c[++n], typeof(s = b[r]) === u && s.length > 0 ? 2 === s.length ? typeof s[1] == a ? this[s[0]] = s[1].call(this, l) : this[s[0]] = s[1] : 3 === s.length ? typeof s[1] !== a || s[1].exec && s[1].test ? this[s[0]] = l ? l.replace(s[1], s[2]) : o : this[s[0]] = l ? s[1].call(this, l, s[2]) : o : 4 === s.length && (this[s[0]] = l ? s[3].call(this, l.replace(s[1], s[2])) : o) : this[s] = l || o;
              d += 2
            }
          },
          X = function(e, t) {
            for (var i in t)
              if (typeof t[i] === u && t[i].length > 0) {
                for (var n = 0; n < t[i].length; n++)
                  if (J(t[i][n], e)) return "?" === i ? o : i
              } else if (J(t[i], e)) return "?" === i ? o : i;
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
              [w, [f, "Chrome"]],
              [/edg(?:e|ios|a)?\/([\w\.]+)/i],
              [w, [f, "Edge"]],
              [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],
              [f, w],
              [/opios[\/ ]+([\w\.]+)/i],
              [w, [f, P + " Mini"]],
              [/\bop(?:rg)?x\/([\w\.]+)/i],
              [w, [f, P + " GX"]],
              [/\bopr\/([\w\.]+)/i],
              [w, [f, P]],
              [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],
              [w, [f, "Baidu"]],
              [/\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i],
              [w, [f, "Maxthon"]],
              [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i, /(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon)\/([-\w\.]+)/i, /(heytap|ovi|115)browser\/([\d\.]+)/i, /(weibo)__([\d\.]+)/i],
              [f, w],
              [/quark(?:pc)?\/([-\w\.]+)/i],
              [w, [f, "Quark"]],
              [/\bddg\/([\w\.]+)/i],
              [w, [f, "DuckDuckGo"]],
              [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
              [w, [f, "UC" + T]],
              [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i, /micromessenger\/([\w\.]+)/i],
              [w, [f, "WeChat"]],
              [/konqueror\/([\w\.]+)/i],
              [w, [f, "Konqueror"]],
              [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
              [w, [f, "IE"]],
              [/ya(?:search)?browser\/([\w\.]+)/i],
              [w, [f, "Yandex"]],
              [/slbrowser\/([\w\.]+)/i],
              [w, [f, "Smart Lenovo " + T]],
              [/(avast|avg)\/([\w\.]+)/i],
              [
                [f, /(.+)/, "$1 Secure " + T], w
              ],
              [/\bfocus\/([\w\.]+)/i],
              [w, [f, A + " Focus"]],
              [/\bopt\/([\w\.]+)/i],
              [w, [f, P + " Touch"]],
              [/coc_coc\w+\/([\w\.]+)/i],
              [w, [f, "Coc Coc"]],
              [/dolfin\/([\w\.]+)/i],
              [w, [f, "Dolphin"]],
              [/coast\/([\w\.]+)/i],
              [w, [f, P + " Coast"]],
              [/miuibrowser\/([\w\.]+)/i],
              [w, [f, "MIUI" + W]],
              [/fxios\/([\w\.-]+)/i],
              [w, [f, A]],
              [/\bqihoobrowser\/?([\w\.]*)/i],
              [w, [f, "360"]],
              [/\b(qq)\/([\w\.]+)/i],
              [
                [f, /(.+)/, "$1Browser"], w
              ],
              [/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],
              [
                [f, /(.+)/, "$1" + W], w
              ],
              [/samsungbrowser\/([\w\.]+)/i],
              [w, [f, R + " Internet"]],
              [/metasr[\/ ]?([\d\.]+)/i],
              [w, [f, "Sogou Explorer"]],
              [/(sogou)mo\w+\/([\d\.]+)/i],
              [
                [f, "Sogou Mobile"], w
              ],
              [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i],
              [f, w],
              [/(lbbrowser|rekonq)/i, /\[(linkedin)app\]/i],
              [f],
              [/ome\/([\w\.]+) \w* ?(iron) saf/i, /ome\/([\w\.]+).+qihu (360)[es]e/i],
              [w, f],
              [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
              [
                [f, L], w
              ],
              [/(Klarna)\/([\w\.]+)/i, /(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(alipay)client\/([\w\.]+)/i, /(twitter)(?:and| f.+e\/([\w\.]+))/i, /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i],
              [f, w],
              [/\bgsa\/([\w\.]+) .*safari\//i],
              [w, [f, "GSA"]],
              [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
              [w, [f, "TikTok"]],
              [/headlesschrome(?:\/([\w\.]+)| )/i],
              [w, [f, C + " Headless"]],
              [/ wv\).+(chrome)\/([\w\.]+)/i],
              [
                [f, C + " WebView"], w
              ],
              [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
              [w, [f, "Android " + T]],
              [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
              [f, w],
              [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
              [w, [f, "Mobile Safari"]],
              [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
              [w, f],
              [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
              [f, [w, X, {
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
              [f, w],
              [/(navigator|netscape\d?)\/([-\w\.]+)/i],
              [
                [f, "Netscape"], w
              ],
              [/(wolvic|librewolf)\/([\w\.]+)/i],
              [f, w],
              [/mobile vr; rv:([\w\.]+)\).+firefox/i],
              [w, [f, A + " Reality"]],
              [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /(links) \(([\w\.]+)/i],
              [f, [w, /_/g, "."]],
              [/(cobalt)\/([\w\.]+)/i],
              [f, [w, /master.|lts./, ""]]
            ],
            cpu: [
              [/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],
              [
                [h, "amd64"]
              ],
              [/(ia32(?=;))/i],
              [
                [h, $]
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
                [h, /ower/, "", $]
              ],
              [/(sun4\w)[;\)]/i],
              [
                [h, "sparc"]
              ],
              [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],
              [
                [h, $]
              ]
            ],
            device: [
              [/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
              [d, [p, R],
                [b, v]
              ],
              [/\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]((?!sm-[lr])[-\w]+)/i, /sec-(sgh\w+)/i],
              [d, [p, R],
                [b, m]
              ],
              [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
              [d, [p, S],
                [b, m]
              ],
              [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
              [d, [p, S],
                [b, v]
              ],
              [/(macintosh);/i],
              [d, [p, S]],
              [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
              [d, [p, V],
                [b, m]
              ],
              [/(?:honor)([-\w ]+)[;\)]/i],
              [d, [p, "Honor"],
                [b, m]
              ],
              [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],
              [d, [p, j],
                [b, v]
              ],
              [/(?:huawei)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],
              [d, [p, j],
                [b, m]
              ],
              [/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i],
              [
                [d, /_/g, " "],
                [p, U],
                [b, m]
              ],
              [/oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i, /\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],
              [
                [d, /_/g, " "],
                [p, U],
                [b, v]
              ],
              [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
              [d, [p, "OPPO"],
                [b, m]
              ],
              [/\b(opd2\d{3}a?) bui/i],
              [d, [p, "OPPO"],
                [b, v]
              ],
              [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
              [d, [p, "Vivo"],
                [b, m]
              ],
              [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],
              [d, [p, "Realme"],
                [b, m]
              ],
              [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],
              [d, [p, M],
                [b, m]
              ],
              [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
              [d, [p, M],
                [b, v]
              ],
              [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
              [d, [p, z],
                [b, v]
              ],
              [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i, /\blg-?([\d\w]+) bui/i],
              [d, [p, z],
                [b, m]
              ],
              [/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],
              [d, [p, "Lenovo"],
                [b, v]
              ],
              [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i],
              [
                [d, /_/g, " "],
                [p, "Nokia"],
                [b, m]
              ],
              [/(pixel c)\b/i],
              [d, [p, N],
                [b, v]
              ],
              [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
              [d, [p, N],
                [b, m]
              ],
              [/droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
              [d, [p, I],
                [b, m]
              ],
              [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
              [
                [d, "Xperia Tablet"],
                [p, I],
                [b, v]
              ],
              [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
              [d, [p, "OnePlus"],
                [b, m]
              ],
              [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
              [d, [p, _],
                [b, v]
              ],
              [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
              [
                [d, /(.+)/g, "Fire Phone $1"],
                [p, _],
                [b, m]
              ],
              [/(playbook);[-\w\),; ]+(rim)/i],
              [d, p, [b, v]],
              [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
              [d, [p, E],
                [b, m]
              ],
              [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
              [d, [p, O],
                [b, v]
              ],
              [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
              [d, [p, O],
                [b, m]
              ],
              [/(nexus 9)/i],
              [d, [p, "HTC"],
                [b, v]
              ],
              [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],
              [p, [d, /_/g, " "],
                [b, m]
              ],
              [/droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])\w*(\)| bui)/i],
              [d, [p, "TCL"],
                [b, v]
              ],
              [/(itel) ((\w+))/i],
              [
                [p, $], d, [b, X, {
                  tablet: ["p10001l", "w7001"],
                  "*": "mobile"
                }]
              ],
              [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
              [d, [p, "Acer"],
                [b, v]
              ],
              [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
              [d, [p, "Meizu"],
                [b, m]
              ],
              [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
              [d, [p, "Ulefone"],
                [b, m]
              ],
              [/; (energy ?\w+)(?: bui|\))/i, /; energizer ([\w ]+)(?: bui|\))/i],
              [d, [p, "Energizer"],
                [b, m]
              ],
              [/; cat (b35);/i, /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i],
              [d, [p, "Cat"],
                [b, m]
              ],
              [/((?:new )?andromax[\w- ]+)(?: bui|\))/i],
              [d, [p, "Smartfren"],
                [b, m]
              ],
              [/droid.+; (a(?:015|06[35]|142p?))/i],
              [d, [p, "Nothing"],
                [b, m]
              ],
              [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno|micromax|advan)[-_ ]?([-\w]*)/i, /; (imo) ((?!tab)[\w ]+?)(?: bui|\))/i, /(hp) ([\w ]+\w)/i, /(asus)-?(\w+)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w]+)/i, /(jolla)/i, /(oppo) ?([\w ]+) bui/i],
              [p, d, [b, m]],
              [/(imo) (tab \w+)/i, /(kobo)\s(ereader|touch)/i, /(archos) (gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i],
              [p, d, [b, v]],
              [/(surface duo)/i],
              [d, [p, D],
                [b, v]
              ],
              [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
              [d, [p, "Fairphone"],
                [b, m]
              ],
              [/(u304aa)/i],
              [d, [p, "AT&T"],
                [b, m]
              ],
              [/\bsie-(\w*)/i],
              [d, [p, "Siemens"],
                [b, m]
              ],
              [/\b(rct\w+) b/i],
              [d, [p, "RCA"],
                [b, v]
              ],
              [/\b(venue[\d ]{2,7}) b/i],
              [d, [p, "Dell"],
                [b, v]
              ],
              [/\b(q(?:mv|ta)\w+) b/i],
              [d, [p, "Verizon"],
                [b, v]
              ],
              [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
              [d, [p, "Barnes & Noble"],
                [b, v]
              ],
              [/\b(tm\d{3}\w+) b/i],
              [d, [p, "NuVision"],
                [b, v]
              ],
              [/\b(k88) b/i],
              [d, [p, "ZTE"],
                [b, v]
              ],
              [/\b(nx\d{3}j) b/i],
              [d, [p, "ZTE"],
                [b, m]
              ],
              [/\b(gen\d{3}) b.+49h/i],
              [d, [p, "Swiss"],
                [b, m]
              ],
              [/\b(zur\d{3}) b/i],
              [d, [p, "Swiss"],
                [b, v]
              ],
              [/\b((zeki)?tb.*\b) b/i],
              [d, [p, "Zeki"],
                [b, v]
              ],
              [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
              [
                [p, "Dragon Touch"], d, [b, v]
              ],
              [/\b(ns-?\w{0,9}) b/i],
              [d, [p, "Insignia"],
                [b, v]
              ],
              [/\b((nxa|next)-?\w{0,9}) b/i],
              [d, [p, "NextBook"],
                [b, v]
              ],
              [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
              [
                [p, "Voice"], d, [b, m]
              ],
              [/\b(lvtel\-)?(v1[12]) b/i],
              [
                [p, "LvTel"], d, [b, m]
              ],
              [/\b(ph-1) /i],
              [d, [p, "Essential"],
                [b, m]
              ],
              [/\b(v(100md|700na|7011|917g).*\b) b/i],
              [d, [p, "Envizen"],
                [b, v]
              ],
              [/\b(trio[-\w\. ]+) b/i],
              [d, [p, "MachSpeed"],
                [b, v]
              ],
              [/\btu_(1491) b/i],
              [d, [p, "Rotor"],
                [b, v]
              ],
              [/(shield[\w ]+) b/i],
              [d, [p, "Nvidia"],
                [b, v]
              ],
              [/(sprint) (\w+)/i],
              [p, d, [b, m]],
              [/(kin\.[onetw]{3})/i],
              [
                [d, /\./g, " "],
                [p, D],
                [b, m]
              ],
              [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
              [d, [p, q],
                [b, v]
              ],
              [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
              [d, [p, q],
                [b, m]
              ],
              [/smart-tv.+(samsung)/i],
              [p, [b, y]],
              [/hbbtv.+maple;(\d+)/i],
              [
                [d, /^/, "SmartTV"],
                [p, R],
                [b, y]
              ],
              [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
              [
                [p, z],
                [b, y]
              ],
              [/(apple) ?tv/i],
              [p, [d, S + " TV"],
                [b, y]
              ],
              [/crkey/i],
              [
                [d, C + "cast"],
                [p, N],
                [b, y]
              ],
              [/droid.+aft(\w+)( bui|\))/i],
              [d, [p, _],
                [b, y]
              ],
              [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
              [d, [p, V],
                [b, y]
              ],
              [/(bravia[\w ]+)( bui|\))/i],
              [d, [p, I],
                [b, y]
              ],
              [/(mitv-\w{5}) bui/i],
              [d, [p, U],
                [b, y]
              ],
              [/Hbbtv.*(technisat) (.*);/i],
              [p, d, [b, y]],
              [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],
              [
                [p, G],
                [d, G],
                [b, y]
              ],
              [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
              [
                [b, y]
              ],
              [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
              [p, d, [b, g]],
              [/droid.+; (shield) bui/i],
              [d, [p, "Nvidia"],
                [b, g]
              ],
              [/(playstation [345portablevi]+)/i],
              [d, [p, I],
                [b, g]
              ],
              [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
              [d, [p, D],
                [b, g]
              ],
              [/\b(sm-[lr]\d\d[05][fnuw]?s?)\b/i],
              [d, [p, R],
                [b, k]
              ],
              [/((pebble))app/i],
              [p, d, [b, k]],
              [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
              [d, [p, S],
                [b, k]
              ],
              [/droid.+; (glass) \d/i],
              [d, [p, N],
                [b, k]
              ],
              [/droid.+; (wt63?0{2,3})\)/i],
              [d, [p, q],
                [b, k]
              ],
              [/droid.+; (glass) \d/i],
              [d, [p, N],
                [b, k]
              ],
              [/(pico) (4|neo3(?: link|pro)?)/i],
              [p, d, [b, k]],
              [/; (quest( \d| pro)?)/i],
              [d, [p, L],
                [b, k]
              ],
              [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
              [p, [b, x]],
              [/(aeobc)\b/i],
              [d, [p, _],
                [b, x]
              ],
              [/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],
              [d, [b, m]],
              [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
              [d, [b, v]],
              [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
              [
                [b, v]
              ],
              [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
              [
                [b, m]
              ],
              [/(android[-\w\. ]{0,9});.+buil/i],
              [d, [p, "Generic"]]
            ],
            engine: [
              [/windows.+ edge\/([\w\.]+)/i],
              [w, [f, "EdgeHTML"]],
              [/(arkweb)\/([\w\.]+)/i],
              [f, w],
              [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
              [w, [f, "Blink"]],
              [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i],
              [f, w],
              [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
              [w, f]
            ],
            os: [
              [/microsoft (windows) (vista|xp)/i],
              [f, w],
              [/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i],
              [f, [w, X, Y]],
              [/windows nt 6\.2; (arm)/i, /windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i, /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
              [
                [w, X, Y],
                [f, "Windows"]
              ],
              [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i, /cfnetwork\/.+darwin/i],
              [
                [w, /_/g, "."],
                [f, "iOS"]
              ],
              [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
              [
                [f, B],
                [w, /_/g, "."]
              ],
              [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
              [w, f],
              [/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish|openharmony)[-\/ ]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/ ]([\w\.]+)/i, /\((series40);/i],
              [f, w],
              [/\(bb(10);/i],
              [w, [f, E]],
              [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],
              [w, [f, "Symbian"]],
              [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
              [w, [f, A + " OS"]],
              [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
              [w, [f, "webOS"]],
              [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
              [w, [f, "watchOS"]],
              [/crkey\/([\d\.]+)/i],
              [w, [f, C + "cast"]],
              [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
              [
                [f, H], w
              ],
              [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux) ?([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i],
              [f, w],
              [/(sunos) ?([\w\.\d]*)/i],
              [
                [f, "Solaris"], w
              ],
              [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i],
              [f, w]
            ]
          },
          Q = function(e, t) {
            if (typeof e === u && (t = e, e = o), !(this instanceof Q)) return new Q(e, t).getResult();
            var i = typeof r !== s && r.navigator ? r.navigator : o,
              n = e || (i && i.userAgent ? i.userAgent : ""),
              g = i && i.userAgentData ? i.userAgentData : o,
              y = t ? function(e, t) {
                var i = {};
                for (var n in e) t[n] && t[n].length % 2 == 0 ? i[n] = t[n].concat(e[n]) : i[n] = e[n];
                return i
              }(Z, t) : Z,
              k = i && i.userAgent == n;
            return this.getBrowser = function() {
              var e, t = {};
              return t[f] = o, t[w] = o, K.call(t, n, y.browser), t[l] = typeof(e = t[w]) === c ? e.replace(/[^\d\.]/g, "").split(".")[0] : o, k && i && i.brave && typeof i.brave.isBrave == a && (t[f] = "Brave"), t
            }, this.getCPU = function() {
              var e = {};
              return e[h] = o, K.call(e, n, y.cpu), e
            }, this.getDevice = function() {
              var e = {};
              return e[p] = o, e[d] = o, e[b] = o, K.call(e, n, y.device), k && !e[b] && g && g.mobile && (e[b] = m), k && "Macintosh" == e[d] && i && typeof i.standalone !== s && i.maxTouchPoints && i.maxTouchPoints > 2 && (e[d] = "iPad", e[b] = v), e
            }, this.getEngine = function() {
              var e = {};
              return e[f] = o, e[w] = o, K.call(e, n, y.engine), e
            }, this.getOS = function() {
              var e = {};
              return e[f] = o, e[w] = o, K.call(e, n, y.os), k && !e[f] && g && g.platform && "Unknown" != g.platform && (e[f] = g.platform.replace(/chrome os/i, H).replace(/macos/i, B)), e
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
              return n = typeof e === c && e.length > 500 ? G(e, 500) : e, this
            }, this.setUA(n), this
          };
        Q.VERSION = "1.0.40", Q.BROWSER = F([f, w, l]), Q.CPU = F([h]), Q.DEVICE = F([d, p, b, g, m, y, v, k, x]), Q.ENGINE = Q.OS = F([f, w]), typeof t !== s ? (e.exports && (t = e.exports = Q), t.UAParser = Q) : i.amdO ? (n = function() {
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
        Sw: () => c,
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
        c = "function" == typeof(0, n.no)((function() {
          return window.document.createElement
        })),
        l = (0, n.no)((function() {
          return navigator.userAgent.indexOf("jsdom") >= 0
        })) || !1,
        d = (c || r) && !l
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
        Sf: () => w,
        V1: () => m,
        no: () => p,
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
      var c, l = ["debug", "log", "warn", "error", "silent"],
        d = l.indexOf("log");

      function f(e) {
        return function() {
          if (l.indexOf(e) >= d) return (console[e] || console.log).apply(console, arguments)
        }
      }(c = u || (u = {})).debug = f("debug"), c.log = f("log"), c.warn = f("warn"), c.error = f("error");
      var b = i(48914);

      function p(e) {
        try {
          return e()
        } catch (e) {}
      }
      const w = p((function() {
        return globalThis
      })) || p((function() {
        return window
      })) || p((function() {
        return self
      })) || p((function() {
        return global
      })) || p((function() {
        return p.constructor("return this")()
      }));
      var h = i(46465);

      function g(e) {
        return function(t) {
          for (var i = [], n = 1; n < arguments.length; n++) i[n - 1] = arguments[n];
          if ("number" == typeof t) {
            var r = t;
            (t = x(r)) || (t = _(r, i), i = [])
          }
          e.apply(void 0, [t].concat(i))
        }
      }
      var m = Object.assign((function(e, t) {
        for (var i = [], n = 2; n < arguments.length; n++) i[n - 2] = arguments[n];
        e || u(e, x(t, i) || _(t, i))
      }), {
        debug: g(u.debug),
        log: g(u.log),
        warn: g(u.warn),
        error: g(u.error)
      });

      function v(e) {
        for (var t = [], i = 1; i < arguments.length; i++) t[i - 1] = arguments[i];
        return new s(x(e, t) || _(e, t))
      }
      var y = Symbol.for("ApolloErrorMessageHandler_" + b.r);

      function k(e) {
        if ("string" == typeof e) return e;
        try {
          return (0, h.p)(e, 2).slice(0, 1e3)
        } catch (e) {
          return "<non-serializable>"
        }
      }

      function x(e, t) {
        if (void 0 === t && (t = []), e) return w[y] && w[y](e, t.map(k))
      }

      function _(e, t) {
        if (void 0 === t && (t = []), e) return "An error occurred! For more details, see the full error text at https://go.apollo.dev/c/err#".concat(encodeURIComponent(JSON.stringify({
          version: b.r,
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
        c = o.getOS(),
        l = o.getUA();
      var d = "mobile",
        f = "tablet",
        b = "Chrome",
        p = "Firefox",
        w = "Opera",
        h = "Yandex",
        g = "Safari",
        m = "Internet Explorer",
        v = "Edge",
        y = "Chromium",
        k = "IE",
        x = "Mobile Safari",
        _ = "MIUI Browser",
        S = "Samsung Browser",
        O = "iOS",
        E = "Android",
        T = "Windows Phone",
        C = "Windows",
        A = "Mac OS",
        N = function(e) {
          return e || (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "none")
        },
        j = function() {
          return !("undefined" == typeof window || !window.navigator && !navigator) && (window.navigator || navigator)
        },
        z = function(e) {
          var t = j();
          return t && t.platform && (-1 !== t.platform.indexOf(e) || "MacIntel" === t.platform && t.maxTouchPoints > 1 && !window.MSStream)
        },
        D = function(e) {
          return e.type === d
        },
        M = function(e) {
          return e.type === f
        },
        P = function(e) {
          var t = e.type;
          return t === d || t === f
        },
        R = function(e) {
          return "smarttv" === e.type
        },
        V = function(e) {
          return undefined === e.type
        },
        I = function(e) {
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
        H = function(e) {
          var t = e.model;
          return N(t)
        },
        B = function(e) {
          var t = e.type;
          return N(t, "browser")
        },
        W = function(e) {
          return e.name === E
        },
        F = function(e) {
          return e.name === C
        },
        J = function(e) {
          return e.name === A
        },
        $ = function(e) {
          return e.name === T
        },
        G = function(e) {
          return e.name === O
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
          return e.name === b
        },
        Z = function(e) {
          return e.name === p
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
          return t === g || t === x
        },
        ne = function(e) {
          return e.name === x
        },
        re = function(e) {
          return e.name === w
        },
        oe = function(e) {
          var t = e.name;
          return t === m || t === k
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
        ce = function(e) {
          var t = e.major;
          return N(t)
        },
        le = function(e) {
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
        be = function() {
          var e = j(),
            t = e && e.userAgent && e.userAgent.toLowerCase();
          return "string" == typeof t && /electron/.test(t)
        },
        pe = function(e) {
          return "string" == typeof e && -1 !== e.indexOf("Edg/")
        },
        we = function() {
          var e = j();
          return e && (/iPad|iPhone|iPod/.test(e.platform) || "MacIntel" === e.platform && e.maxTouchPoints > 1) && !window.MSStream
        },
        he = function() {
          return z("iPad")
        },
        ge = function() {
          return z("iPhone")
        },
        me = function() {
          return z("iPod")
        },
        ve = function(e) {
          return N(e)
        };
      var ye = R(s),
        ke = (U(s), I(s)),
        xe = (q(s), ne(a) || he(), Q(a), P(s) || he(), D(s), M(s) || he(), V(s), V(s), W(c), $(c), G(c) || he(), Y(a), Z(a), ie(a), re(a), oe(a)),
        _e = (K(c), X(c), ue(a), ce(a), le(a)),
        Se = (L(s), H(s), de(u), fe(u), ve(l), ee(a) || pe(l), te(a), B(s), we(), he(), ge(), me(), be(), pe(l), ee(a) && !pe(l));
      F(c), J(c), ae(a), se(a);
      t.C0 = _e, t.lT = xe, t.n8 = Se, t.UX = ye, t.w = ke
    },
    82540: (e, t, i) => {
      "use strict";
      e.exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = void 0, e.exports.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = void 0, e.exports.__SERVER_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = void 0, Object.assign(e.exports, i(62229))
    },
    87552: (e, t, i) => {
      "use strict";
      i.d(t, {
        DX: () => d,
        yN: () => R,
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
      const c = "@wry/context:Slot",
        l = u((() => globalThis)) || u((() => global)) || Object.create(null),
        d = l[c] || Array[c] || function(e) {
          try {
            Object.defineProperty(l, c, {
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
          noContext: b
        } = d,
        p = new d,
        {
          hasOwnProperty: w
        } = Object.prototype,
        h = Array.from || function(e) {
          const t = [];
          return e.forEach((e => t.push(e))), t
        };

      function g(e) {
        const {
          unsubscribe: t
        } = e;
        "function" == typeof t && (e.unsubscribe = void 0, t())
      }
      const m = [];

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
          if (1 === this.value.length && !E(this)) return S(this), this.value[0]
        }
        recompute(e) {
          return v(!this.recomputing, "already recomputing"), S(this), E(this) ? function(e, t) {
            return D(e), p.withValue(e, O, [e, t]),
              function(e, t) {
                if ("function" == typeof e.subscribe) try {
                  g(e), e.unsubscribe = e.subscribe.apply(null, t)
                } catch (t) {
                  return e.setDirty(), !1
                }
                return !0
              }(e, t) && function(e) {
                e.dirty = !1, E(e) || C(e)
              }(e), k(e.value)
          }(this, e) : k(this.value)
        }
        setDirty() {
          this.dirty || (this.dirty = !0, T(this), g(this))
        }
        dispose() {
          this.setDirty(), D(this), A(this, ((e, t) => {
            e.setDirty(), M(e, this)
          }))
        }
        forget() {
          this.dispose()
        }
        dependOn(e) {
          e.add(this), this.deps || (this.deps = m.pop() || new Set), this.deps.add(e)
        }
        forgetDeps() {
          this.deps && (h(this.deps).forEach((e => e.delete(this))), this.deps.clear(), m.push(this.deps), this.deps = null)
        }
      }

      function S(e) {
        const t = p.getValue();
        if (t) return e.parents.add(t), t.childValues.has(e) || t.childValues.set(e, []), E(e) ? N(t, e) : j(t, e), t
      }

      function O(e, t) {
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

      function E(e) {
        return e.dirty || !(!e.dirtyChildren || !e.dirtyChildren.size)
      }

      function T(e) {
        A(e, N)
      }

      function C(e) {
        A(e, j)
      }

      function A(e, t) {
        const i = e.parents.size;
        if (i) {
          const n = h(e.parents);
          for (let r = 0; r < i; ++r) t(n[r], e)
        }
      }

      function N(e, t) {
        v(e.childValues.has(t)), v(E(t));
        const i = !E(e);
        if (e.dirtyChildren) {
          if (e.dirtyChildren.has(t)) return
        } else e.dirtyChildren = m.pop() || new Set;
        e.dirtyChildren.add(t), i && T(e)
      }

      function j(e, t) {
        v(e.childValues.has(t)), v(!E(t));
        const i = e.childValues.get(t);
        0 === i.length ? e.childValues.set(t, x(t.value)) : y(i, t.value) || e.setDirty(), z(e, t), E(e) || C(e)
      }

      function z(e, t) {
        const i = e.dirtyChildren;
        i && (i.delete(t), 0 === i.size && (m.length < 100 && m.push(i), e.dirtyChildren = null))
      }

      function D(e) {
        e.childValues.size > 0 && e.childValues.forEach(((t, i) => {
          M(e, i)
        })), e.forgetDeps(), v(null === e.dirtyChildren)
      }

      function M(e, t) {
        t.parents.delete(e), e.childValues.delete(t), z(e, t)
      }
      _.count = 0;
      const P = {
        setDirty: !0,
        dispose: !0,
        forget: !0
      };

      function R(e) {
        const t = new Map,
          i = e && e.subscribe;

        function n(e) {
          const n = p.getValue();
          if (n) {
            let r = t.get(e);
            r || t.set(e, r = new Set), n.dependOn(r), "function" == typeof i && (g(r), r.unsubscribe = i(e))
          }
        }
        return n.dirty = function(e, i) {
          const n = t.get(e);
          if (n) {
            const r = i && w.call(P, i) ? i : "setDirty";
            h(n).forEach((e => e[r]())), t.delete(e), g(n)
          }
        }, n
      }
      let V;

      function I(...e) {
        return (V || (V = new n.b("function" == typeof WeakMap))).lookupArray(e)
      }
      const U = new Set;

      function q(e, {
        max: t = Math.pow(2, 16),
        keyArgs: i,
        makeCacheKey: n = I,
        normalizeResult: o,
        subscribe: a,
        cache: s = r.C
      } = Object.create(null)) {
        const u = "function" == typeof s ? new s(t, (e => e.dispose())) : s,
          c = function() {
            const t = n.apply(null, i ? i.apply(null, arguments) : arguments);
            if (void 0 === t) return e.apply(null, arguments);
            let r = u.get(t);
            r || (u.set(t, r = new _(e)), r.normalizeResult = o, r.subscribe = a, r.forget = () => u.delete(t));
            const s = r.recompute(Array.prototype.slice.call(arguments));
            return u.set(t, r), U.add(u), p.hasValue() || (U.forEach((e => e.clean())), U.clear()), s
          };

        function l(e) {
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
        return Object.defineProperty(c, "size", {
          get: () => u.size,
          configurable: !1,
          enumerable: !1
        }), Object.freeze(c.options = {
          max: t,
          keyArgs: i,
          makeCacheKey: n,
          normalizeResult: o,
          subscribe: a,
          cache: u
        }), c.dirtyKey = l, c.dirty = function() {
          l(n.apply(null, arguments))
        }, c.peekKey = d, c.peek = function() {
          return d(n.apply(null, arguments))
        }, c.forgetKey = f, c.forget = function() {
          return f(n.apply(null, arguments))
        }, c.makeCacheKey = n, c.getKey = i ? function() {
          return n.apply(null, i.apply(null, arguments))
        } : n, Object.freeze(c)
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