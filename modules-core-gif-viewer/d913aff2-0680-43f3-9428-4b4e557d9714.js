! function() {
  try {
    var n = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      e = (new Error).stack;
    e && (n._sentryDebugIds = n._sentryDebugIds || {}, n._sentryDebugIds[e] = "d913aff2-0680-43f3-9428-4b4e557d9714", n._sentryDebugIdIdentifier = "sentry-dbid-d913aff2-0680-43f3-9428-4b4e557d9714")
  } catch (n) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-gif-viewer",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_gif_viewer = self.webpackChunk_rockstargames_modules_core_gif_viewer || []).push([
  [7171, 3855], {
    3178: n => {
      "use strict";
      var e = [];

      function a(n) {
        for (var a = -1, i = 0; i < e.length; i++)
          if (e[i].identifier === n) {
            a = i;
            break
          } return a
      }

      function i(n, i) {
        for (var r = {}, o = [], d = 0; d < n.length; d++) {
          var s = n[d],
            l = i.base ? s[0] + i.base : s[0],
            c = r[l] || 0,
            m = "".concat(l, " ").concat(c);
          r[l] = c + 1;
          var g = a(m),
            f = {
              css: s[1],
              media: s[2],
              sourceMap: s[3],
              supports: s[4],
              layer: s[5]
            };
          if (-1 !== g) e[g].references++, e[g].updater(f);
          else {
            var p = t(f, i);
            i.byIndex = d, e.splice(d, 0, {
              identifier: m,
              updater: p,
              references: 1
            })
          }
          o.push(m)
        }
        return o
      }

      function t(n, e) {
        var a = e.domAPI(e);
        return a.update(n),
          function(e) {
            if (e) {
              if (e.css === n.css && e.media === n.media && e.sourceMap === n.sourceMap && e.supports === n.supports && e.layer === n.layer) return;
              a.update(n = e)
            } else a.remove()
          }
      }
      n.exports = function(n, t) {
        var r = i(n = n || [], t = t || {});
        return function(n) {
          n = n || [];
          for (var o = 0; o < r.length; o++) {
            var d = a(r[o]);
            e[d].references--
          }
          for (var s = i(n, t), l = 0; l < r.length; l++) {
            var c = a(r[l]);
            0 === e[c].references && (e[c].updater(), e.splice(c, 1))
          }
          r = s
        }
      }
    },
    7529: n => {
      "use strict";
      var e = {};
      n.exports = function(n, a) {
        var i = function(n) {
          if (void 0 === e[n]) {
            var a = document.querySelector(n);
            if (window.HTMLIFrameElement && a instanceof window.HTMLIFrameElement) try {
              a = a.contentDocument.head
            } catch (n) {
              a = null
            }
            e[n] = a
          }
          return e[n]
        }(n);
        if (!i) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
        i.appendChild(a)
      }
    },
    2510: n => {
      "use strict";
      n.exports = function(n) {
        var e = document.createElement("style");
        return n.setAttributes(e, n.attributes), n.insert(e, n.options), e
      }
    },
    2162: (n, e, a) => {
      "use strict";
      n.exports = function(n) {
        var e = a.nc;
        e && n.setAttribute("nonce", e)
      }
    },
    7835: n => {
      "use strict";
      n.exports = function(n) {
        if ("undefined" == typeof document) return {
          update: function() {},
          remove: function() {}
        };
        var e = n.insertStyleElement(n);
        return {
          update: function(a) {
            ! function(n, e, a) {
              var i = "";
              a.supports && (i += "@supports (".concat(a.supports, ") {")), a.media && (i += "@media ".concat(a.media, " {"));
              var t = void 0 !== a.layer;
              t && (i += "@layer".concat(a.layer.length > 0 ? " ".concat(a.layer) : "", " {")), i += a.css, t && (i += "}"), a.media && (i += "}"), a.supports && (i += "}");
              var r = a.sourceMap;
              r && "undefined" != typeof btoa && (i += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r)))), " */")), e.styleTagTransform(i, n, e.options)
            }(e, n, a)
          },
          remove: function() {
            ! function(n) {
              if (null === n.parentNode) return !1;
              n.parentNode.removeChild(n)
            }(e)
          }
        }
      }
    },
    675: n => {
      "use strict";
      n.exports = function(n, e) {
        if (e.styleSheet) e.styleSheet.cssText = n;
        else {
          for (; e.firstChild;) e.removeChild(e.firstChild);
          e.appendChild(document.createTextNode(n))
        }
      }
    },
    5081: n => {
      "use strict";
      n.exports = function(n) {
        var e = [];
        return e.toString = function() {
          return this.map((function(e) {
            var a = "",
              i = void 0 !== e[5];
            return e[4] && (a += "@supports (".concat(e[4], ") {")), e[2] && (a += "@media ".concat(e[2], " {")), i && (a += "@layer".concat(e[5].length > 0 ? " ".concat(e[5]) : "", " {")), a += n(e), i && (a += "}"), e[2] && (a += "}"), e[4] && (a += "}"), a
          })).join("")
        }, e.i = function(n, a, i, t, r) {
          "string" == typeof n && (n = [
            [null, n, void 0]
          ]);
          var o = {};
          if (i)
            for (var d = 0; d < this.length; d++) {
              var s = this[d][0];
              null != s && (o[s] = !0)
            }
          for (var l = 0; l < n.length; l++) {
            var c = [].concat(n[l]);
            i && o[c[0]] || (void 0 !== r && (void 0 === c[5] || (c[1] = "@layer".concat(c[5].length > 0 ? " ".concat(c[5]) : "", " {").concat(c[1], "}")), c[5] = r), a && (c[2] ? (c[1] = "@media ".concat(c[2], " {").concat(c[1], "}"), c[2] = a) : c[2] = a), t && (c[4] ? (c[1] = "@supports (".concat(c[4], ") {").concat(c[1], "}"), c[4] = t) : c[4] = "".concat(t)), e.push(c))
          }
        }, e
      }
    },
    9908: n => {
      "use strict";
      n.exports = function(n, e) {
        return e || (e = {}), n ? (n = String(n.__esModule ? n.default : n), /^['"].*['"]$/.test(n) && (n = n.slice(1, -1)), e.hash && (n += e.hash), /["'() \t\n]|(%20)/.test(n) || e.needQuotes ? '"'.concat(n.replace(/"/g, '\\"').replace(/\n/g, "\\n"), '"') : n) : n
      }
    },
    2587: n => {
      "use strict";
      n.exports = function(n) {
        var e = n[1],
          a = n[3];
        if (!a) return e;
        if ("function" == typeof btoa) {
          var i = btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
            t = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),
            r = "/*# ".concat(t, " */");
          return [e].concat([r]).join("\n")
        }
        return [e].join("\n")
      }
    },
    2469: (n, e, a) => {
      "use strict";
      var i = a(2229),
        t = Symbol.for("react.element"),
        r = (Symbol.for("react.fragment"), Object.prototype.hasOwnProperty),
        o = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        d = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function s(n, e, a) {
        var i, s = {},
          l = null,
          c = null;
        for (i in void 0 !== a && (l = "" + a), void 0 !== e.key && (l = "" + e.key), void 0 !== e.ref && (c = e.ref), e) r.call(e, i) && !d.hasOwnProperty(i) && (s[i] = e[i]);
        if (n && n.defaultProps)
          for (i in e = n.defaultProps) void 0 === s[i] && (s[i] = e[i]);
        return {
          $$typeof: t,
          type: n,
          key: l,
          ref: c,
          props: s,
          _owner: o.current
        }
      }
      e.jsx = s, e.jsxs = s
    },
    3855: (n, e, a) => {
      "use strict";
      n.exports = a(2469)
    },
    7171: (n, e, a) => {
      "use strict";
      a.d(e, {
        A: () => k
      });
      var i = a(2229),
        t = a(5966),
        r = a(3178),
        o = a.n(r),
        d = a(7835),
        s = a.n(d),
        l = a(7529),
        c = a.n(l),
        m = a(2162),
        g = a.n(m),
        f = a(2510),
        p = a.n(f),
        u = a(675),
        h = a.n(u),
        v = a(8418),
        b = {};
      b.styleTagTransform = h(), b.setAttributes = g(), b.insert = c().bind(null, "head"), b.domAPI = s(), b.insertStyleElement = p(), o()(v.A, b);
      const w = v.A && v.A.locals ? v.A.locals : void 0;
      var A = a(4235),
        x = a(3855);
      const y = n => {
          let {
            hashes: e,
            hover: a,
            loop: t,
            sound: r
          } = n;
          const {
            desktop: o = null,
            mobile: d = null
          } = e, [s, l] = (0, i.useState)(!0), c = {
            autoPlay: !a,
            hover: a,
            loop: t,
            sound: r,
            muted: s
          };
          return (0, x.jsxs)("div", {
            onClick: () => l(!s),
            children: [o && (0, x.jsx)(C, {
              className: [d ? w.hiddenMobile : "", w.videoDesktop].join(" "),
              hash: o,
              ...c
            }), d && (0, x.jsx)(C, {
              className: [o ? w.hiddenLarge : "", w.videoMobile].join(" "),
              hash: d,
              ...c
            }), c.sound ? (0, x.jsx)("div", {
              className: [w.muteBtn, s ? "" : w.unMuted].join(" ")
            }) : ""]
          })
        },
        C = n => {
          let {
            className: e,
            hash: a,
            hover: r,
            autoPlay: o,
            loop: d,
            muted: s,
            sound: l
          } = n;
          const {
            data: c
          } = (0, t.useQuery)(A.GifInfo, {
            variables: {
              hash: a
            }
          }), m = (0, i.useRef)();
          return c ? (0, x.jsx)("div", {
            className: [e, w.video, l ? w.mutable : ""].join(" "),
            onMouseEnter: () => r && void m.current.play(),
            onMouseLeave: () => r && (m.current.pause(), void(m.current.currentTime = 0)),
            children: (0, x.jsx)("video", {
              ref: m,
              src: c.gifInfo.file,
              autoPlay: o,
              loop: d,
              muted: s,
              playsInline: !0
            })
          }) : null
        },
        k = n => {
          let {
            hash: e,
            style: a,
            title: i,
            caption: t,
            hero: r = !1,
            loop: o = !0,
            sound: d = !1,
            hover: s = !1
          } = n;
          if (!e) return null;
          const l = "object" == typeof e ? e : Object.keys(e).map((n => ({
            [n]: e[n]
          })));
          return (0, x.jsxs)("figure", {
            className: `${w.gifWrapper} ${r?w.gifWrapperHero:""}`,
            style: a,
            children: [(0, x.jsx)(y, {
              hashes: l,
              hover: s,
              loop: o,
              sound: d,
              title: i ?? "R* Games"
            }), t && (0, x.jsx)("figcaption", {
              dangerouslySetInnerHTML: {
                __html: t
              }
            })]
          })
        }
    },
    8418: (n, e, a) => {
      "use strict";
      a.d(e, {
        A: () => p
      });
      var i = a(2587),
        t = a.n(i),
        r = a(5081),
        o = a.n(r),
        d = a(9908),
        s = a.n(d),
        l = new URL(a(202), a.b),
        c = new URL(a(7863), a.b),
        m = o()(t()),
        g = s()(l),
        f = s()(c);
      m.push([n.id, `.rockstargames-modules-core-gif-viewerabb297e5eb4b30107497c5af3b977524{display:none}@media (min-width:768px){.rockstargames-modules-core-gif-viewerabb297e5eb4b30107497c5af3b977524{display:var(--display-original,block)}}.rockstargames-modules-core-gif-viewerb8ebff1e6c6fc120a77104f6a7edc21d{display:var(--display-original,block)}@media (min-width:768px){.rockstargames-modules-core-gif-viewerb8ebff1e6c6fc120a77104f6a7edc21d{display:none}}.rockstargames-modules-core-gif-vieweraac271d5fdbd3f76a2f95154f54f56f3{display:var(--display-original,block)}@media (min-width:0px){.rockstargames-modules-core-gif-vieweraac271d5fdbd3f76a2f95154f54f56f3{display:none}.rockstargames-modules-core-gif-viewerd8b46b1e13206714908c4ba62343bb7d{display:var(--display-original,block)}}.rockstargames-modules-core-gif-viewerea1e161efb3286f18acc4ca224776b52{display:var(--display-original,block)}@media (min-width:768px){.rockstargames-modules-core-gif-viewerea1e161efb3286f18acc4ca224776b52{display:none}.rockstargames-modules-core-gif-viewere3451141fab2f5a3cc092cfe4cc95654{display:var(--display-original,block)}}.rockstargames-modules-core-gif-viewere1e026f5e3c3b3dbeca879b01e49da10{display:var(--display-original,block)}@media (min-width:1024px){.rockstargames-modules-core-gif-viewere1e026f5e3c3b3dbeca879b01e49da10{display:none}.rockstargames-modules-core-gif-viewerc7ff5218a9d689524fb1f41925045edc{display:var(--display-original,block)}}.rockstargames-modules-core-gif-viewerb76b86f8931dabffacb746e1088bd06f{display:var(--display-original,block)}@media (min-width:1920px){.rockstargames-modules-core-gif-viewerb76b86f8931dabffacb746e1088bd06f{display:none}.rockstargames-modules-core-gif-viewerea13d7c61982adf247792719febab3e8{display:var(--display-original,block)}}.rockstargames-modules-core-gif-viewerbc195247a1f0dd5b7d5f5f94a70d90a0{display:var(--display-original,block)}@media (min-width:2560px){.rockstargames-modules-core-gif-viewerbc195247a1f0dd5b7d5f5f94a70d90a0{display:none}.rockstargames-modules-core-gif-viewerc56987d4c3541e92c7f916ad8f648e23{display:var(--display-original,block)}}.rockstargames-modules-core-gif-viewera44ea239a96fa21be5803aa8597935f3{left:50%;margin-left:calc((100vw / 2) * -1);margin-right:calc((100vw / 2) * -1);max-width:100vw!important;position:relative;right:50%;width:100vw}@media (max-width:767px){.rockstargames-modules-core-gif-viewerd7a211eb98231158320e9010496f41ad{display:flex;flex-direction:column-reverse}}.rockstargames-modules-core-gif-viewerf2784956deb5076d08b115ab9f0de65b{align-items:center;display:flex;justify-content:center}.rockstargames-modules-core-gif-viewercc8c0e3543ec9ea6e406cd5d60661547{--padding-dynamic:var(--padding-static)}@media (min-width:1024px){.rockstargames-modules-core-gif-viewercc8c0e3543ec9ea6e406cd5d60661547{--padding-dynamic:0}}.rockstargames-modules-core-gif-viewere2e4a9d2a67fa93b20ba2d2c3bfb18d6{--padding-dynamic:0}@media (min-width:1024px){.rockstargames-modules-core-gif-viewere2e4a9d2a67fa93b20ba2d2c3bfb18d6{--padding-dynamic:var(--padding-static)}}.rockstargames-modules-core-gif-viewerb33830da2f964a317241cf53c7e5773a{background:#fff;height:2px;margin-top:var(--grid-gap-static-sm);width:100%}@media (max-width:1023px){.rockstargames-modules-core-gif-viewerb33830da2f964a317241cf53c7e5773a{margin-top:var(--grid-gap-static-xs)}}.rockstargames-modules-core-gif-viewerb33830da2f964a317241cf53c7e5773a.rockstargames-modules-core-gif-viewerf70025cd962a532f67afe3f67f16efb7{background:linear-gradient(96deg,#977b52 18%,#ded0a4 51%,#b19b6b 85%)}.rockstargames-modules-core-gif-viewerf9ae1cdda1f485a1da00edfec5947239{align-content:center;background:#000;border-radius:var(--image-rounding-dynamic,0);height:100%;justify-content:center}[data-game=gtao] .rockstargames-modules-core-gif-viewerf9ae1cdda1f485a1da00edfec5947239{--image-rounding-dynamic:16px}[data-template=community] .rockstargames-modules-core-gif-viewerf9ae1cdda1f485a1da00edfec5947239{--image-rounding-dynamic:var(--image-rounding-static);margin:0 auto;max-width:calc(var(--max-width-dynamic, var(--max-width-static-md)) + var(--padding-dynamic, 0px) * 2)!important;overflow:hidden;width:100%}.rockstargames-modules-core-gif-viewerf1ae0b7e0b8f54f7883d7a5810ff67d1{margin:0 auto;max-height:70vh;min-height:30vw}.rockstargames-modules-core-gif-viewera385e95337be85fde170dc13e35beb24{background-image:url(${g});bottom:5px;cursor:pointer;height:35px;left:5px;position:absolute;width:35px;z-index:10}.rockstargames-modules-core-gif-viewera385e95337be85fde170dc13e35beb24.rockstargames-modules-core-gif-viewere906711c6535a405f565f647a9db24d6{background-image:url(${f})}.rockstargames-modules-core-gif-viewerc4b1d579f91603be5e73eec4ba724711 video{height:100%;object-fit:cover;width:100%}.rockstargames-modules-core-gif-viewere8988d4c734162926922754c59a024e7{--aspect-ratio:1;--aspect-ratio-default:1;position:relative}@media (min-width:1024px){.rockstargames-modules-core-gif-viewere8988d4c734162926922754c59a024e7{--aspect-ratio-default:16/9}}.rockstargames-modules-core-gif-viewere8988d4c734162926922754c59a024e7:before{content:"";display:block;height:0;padding-bottom:calc(100% / calc(var(--aspect-ratio, var(--aspect-ratio-default))));width:100%}.rockstargames-modules-core-gif-viewere8988d4c734162926922754c59a024e7>*{height:100%;left:0;position:absolute;top:0;width:100%}.rockstargames-modules-core-gif-viewereb026b8ffe62b23b039f9a358c313b09{--aspect-ratio:16/9;--aspect-ratio-default:1;position:relative}@media (min-width:1024px){.rockstargames-modules-core-gif-viewereb026b8ffe62b23b039f9a358c313b09{--aspect-ratio-default:16/9}}.rockstargames-modules-core-gif-viewereb026b8ffe62b23b039f9a358c313b09:before{content:"";display:block;height:0;padding-bottom:calc(100% / calc(var(--aspect-ratio, var(--aspect-ratio-default))));width:100%}.rockstargames-modules-core-gif-viewereb026b8ffe62b23b039f9a358c313b09>*{height:100%;left:0;position:absolute;top:0;width:100%}.rockstargames-modules-core-gif-viewera093729df8a4878dc8a2f4ff1af1eada{cursor:pointer}`, "", {
        version: 3,
        sources: ["webpack://./../../buildtime/legacy-design-system/less/global-exposed.less", "webpack://./src/components/Root/index.less", "webpack://./../../buildtime/legacy-design-system/less/mixins.less"],
        names: [],
        mappings: "AAAA,uEACI,YCgCJ,CCuBI,yBAAA,uEFtDK,qCCmCP,CACF,CDlCA,uEACI,qCCoCJ,CCeI,yBAAA,uEFlDK,YCuCP,CACF,CDrCA,uEACI,qCCuCJ,CCXI,uBAAA,uEF3BQ,YC0CV,CCfE,uEFvBQ,qCC2CV,CAJF,CDpCA,uEACI,qCC2CJ,CCNI,yBAAA,uEFpCQ,YC8CV,CCVE,uEFhCQ,qCC+CV,CAJF,CDxCA,uEACI,qCC+CJ,CCDI,0BAAA,uEF7CQ,YCkDV,CCLE,uEFzCQ,qCCmDV,CAJF,CD5CA,uEACI,qCCmDJ,CCII,0BAAA,uEFtDQ,YCsDV,CCAE,uEFlDQ,qCCuDV,CAJF,CDhDA,uEACI,qCCuDJ,CCSI,0BAAA,uEF/DS,YC0DX,CCKE,uEF3DS,qCC2DX,CAJF,CDpDA,uEE0WI,QAAA,CAEA,kCAAA,CACA,mCAAA,CALA,yBAAA,CACA,iBAAA,CAEA,SAAA,CAJA,WDrSJ,CC7EI,yBAAA,uEFyBI,YAAA,CADA,6BC0DN,CACF,CDtDA,uEEgPI,kBAAA,CADA,YAAA,CAHA,sBDjLJ,CDvDA,uEACI,uCCyDJ,CC5DI,0BAAA,uEFIS,mBC4DX,CACF,CD1DA,uEACI,mBC4DJ,CCpEI,0BAAA,uEFSS,uCC+DX,CACF,CD7DA,uEAGI,eAAA,CADA,UAAA,CAEA,oCAAA,CAHA,UCkEJ,CC5FI,0BAAA,uEFgCI,oCCgEN,CACF,CD9DI,6IACI,qECgER,CA9JA,uEAGI,oBAAA,CAFA,eAAA,CCwdA,6CAAA,CDrdA,WAAA,CAFA,sBAmKJ,CA/JI,wFACI,6BAiKR,CA9JI,iGAKI,qDAAA,CCsYJ,aAAA,CAJA,gHAAA,CDpYI,eAAA,CCmYJ,UDjOJ,CA5JA,uEACI,aAAA,CACA,eAAA,CACA,eA8JJ,CA3JA,uEAKI,wDAAA,CAIA,UAAA,CAEA,cAAA,CATA,WAAA,CAQA,QAAA,CAPA,iBAAA,CAFA,UAAA,CAGA,UAiKJ,CA/JI,6IACI,wDAiKR,CA1JA,6EAGQ,WAAA,CACA,gBAAA,CAFA,UA6JR,CAxJA,uECmZI,gBAAA,CAxBA,wBAAA,CAKA,iBDnOJ,CCpII,0BAAA,uEAoWI,2BD5NN,CACF,CC+NI,8EACI,UAAA,CAGA,aAAA,CAFA,QAAA,CAGA,kFAAA,CAFA,UD3NR,CAzKA,yEC+YQ,WAAA,CAFA,MAAA,CAFA,iBAAA,CACA,KAAA,CAEA,UD9NR,CA7KA,uECgZI,mBAAA,CAxBA,wBAAA,CAKA,iBD3MJ,CC5JI,0BAAA,uEAoWI,2BDpMN,CACF,CCuMI,8EACI,UAAA,CAGA,aAAA,CAFA,QAAA,CAGA,kFAAA,CAFA,UDnMR,CA9LA,yEC4YQ,WAAA,CAFA,MAAA,CAFA,iBAAA,CACA,KAAA,CAEA,UDtMR,CAlMA,uEACI,cAoMJ",
        sourcesContent: [".hiddenMobile {\n    display: none;\n    .md({display: var(--display-original, block) ;});\n}\n.hiddenLarge {\n    display: var(--display-original, block);\n    .md({display: none;});\n}\n\n.hidden-sm {\n    display: var(--display-original, block);\n    .smMin({display: none;});\n}\n\n.show-sm {\n    .smMin({display: var(--display-original, block) ;});\n}\n\n.hidden-md {\n    display: var(--display-original, block);\n    .mdMin({display: none;});\n}\n\n.show-md {\n    .mdMin({display: var(--display-original, block) ;});\n}\n\n.hidden-lg {\n    display: var(--display-original, block);\n    .lgMin({display: none;});\n}\n\n.show-lg {\n    .lgMin({display: var(--display-original, block) ;});\n}\n\n.hidden-xl {\n    display: var(--display-original, block);\n    .xlMin({display: none;});\n}\n\n.show-xl {\n    .xlMin({display: var(--display-original, block) ;});\n}\n\n.hidden-xxl {\n    display: var(--display-original, block);\n    .xxlMin({display: none;});\n}\n\n.show-xxl {\n    .xxlMin({display: var(--display-original, block) ;});\n}\n\n.full-width {\n    .fullWidth();\n}\n\n.fullWidthPadding() {\n    .fullWidth();\n    --padding-dynamic: calc((100vw - var(--max-width-static)) / 2);\n    padding-left: var(--padding-dynamic);\n    padding-right: var(--padding-dynamic);\n}\n\n.reverse-mobile {\n    .smMax({\n        flex-direction: column-reverse;\n        display: flex;\n    });\n}\n\n.center-children {\n    .flexCenterChildren();\n}\n\n.std-padding-mobile-desktop-none {\n    --padding-dynamic: var(--padding-static);\n    .lgMin({ --padding-dynamic: 0; });\n}\n\n.std-padding-desktop-mobile-none {\n    --padding-dynamic: 0;\n    .lgMin({ --padding-dynamic: var(--padding-static); });\n}\n\n.horizontal-line {\n    width: 100%;\n    height: 2px;\n    background: #fff;\n    margin-top: var(--grid-gap-static-sm);\n\n    .mdMax({\n        margin-top: var(--grid-gap-static-xs);\n    });\n\n    &.gold {\n        background: linear-gradient(\n            96deg,\n            #977b52 18%,\n            #ded0a4 51%,\n            #b19b6b 85%\n        );\n    }\n}\n", "@import '@rsgweb/legacy-design-system/less/mixins.less';\n@import '@rsgweb/legacy-design-system/less/global-exposed.less';\n\n.gifWrapper {\n    background: black;\n    justify-content: center;\n    align-content: center;\n    height: 100%;\n\n    [data-game='gtao'] & {\n        --image-rounding-dynamic: 16px;\n    }\n\n    [data-template='community'] & {\n        width: 100%;\n        margin: 0 auto;\n        overflow: hidden;\n        .handleMaxWidth(var(--max-width-static-md));\n        --image-rounding-dynamic: var(--image-rounding-static);\n    }\n    .handleImageRounding;\n}\n.gifWrapperHero {\n    margin: 0 auto;\n    max-height: 70vh;\n    min-height: 30vw;\n}\n\n.muteBtn {\n    width: 35px;\n    height: 35px;\n    position: absolute;\n    z-index: 10;\n    background-image: data-uri('./img/off.svg');\n    &.unMuted {\n        background-image: data-uri('./img/on.svg');\n    }\n    bottom: 5px;\n    left: 5px;\n    cursor: pointer;\n}\n\n.video {\n    video {\n        width: 100%;\n        height: 100%;\n        object-fit: cover;\n    }\n}\n.videoMobile {\n    .setAspectRatio(1);\n}\n.videoDesktop {\n    .setAspectRatio(16/9);\n}\n.mutable {\n    cursor: pointer;\n}\n", "/*\n * New Design System:\n * 1. Breakpoints\n * 2. Typography\n * 3. Variables\n * 4. Utility\n *     4.1 Flex\n *     4.2 Grid\n *     4.3 Max-Width\n *     4.4 Images\n *     4.5 Padding\n *     4.6 Fonts\n *     4.7 Games\n *     4.8 Tina\n *     4.9 Hacks\n * 5. Presentational\n */\n\n/* 1. Breakpoints */\n@screen-sm: 0px;\n@screen-md: 768px;\n@screen-lg: 1024px;\n@screen-xl: 1920px;\n@screen-xxl: 2560px;\n@sm-min-width: @screen-sm;\n@md-min-width: @screen-md;\n@lg-min-width: @screen-lg;\n@xl-min-width: @screen-xl;\n@xxl-min-width: @screen-xxl;\n@sm-max-width: (@md-min-width - 1px);\n@md-max-width: (@lg-min-width - 1px);\n@lg-max-width: (@xl-min-width - 1px);\n@xl-max-width: (@xxl-min-width - 1px);\n\n.sm(@rules) {\n    .smMin(@rules);\n}\n.smMin(@rules) {\n    @media (min-width: @sm-min-width) {\n        @rules();\n    }\n}\n.smMax(@rules) {\n    @media (max-width: @sm-max-width) {\n        @rules();\n    }\n}\n.smOnly(@rules) {\n    @media (min-width: @sm-min-width) and (max-width: @sm-max-width) {\n        @rules();\n    }\n}\n.md(@rules) {\n    .mdMin(@rules);\n}\n.mdMin(@rules) {\n    @media (min-width: @md-min-width) {\n        @rules();\n    }\n}\n.mdMax(@rules) {\n    @media (max-width: @md-max-width) {\n        @rules();\n    }\n}\n.mdOnly(@rules) {\n    @media (min-width: @md-min-width) and (max-width: @md-max-width) {\n        @rules();\n    }\n}\n.lg(@rules) {\n    .lgMin(@rules);\n}\n.lgMin(@rules) {\n    @media (min-width: @lg-min-width) {\n        @rules();\n    }\n}\n.lgMax(@rules) {\n    @media (max-width: @lg-max-width) {\n        @rules();\n    }\n}\n.lgOnly(@rules) {\n    @media (min-width: @lg-min-width) and (max-width: @lg-max-width) {\n        @rules();\n    }\n}\n.xl(@rules) {\n    .xlMin(@rules);\n}\n.xlMin(@rules) {\n    @media (min-width: @xl-min-width) {\n        @rules();\n    }\n}\n.xlMax(@rules) {\n    @media (max-width: @xl-max-width) {\n        @rules();\n    }\n}\n.xlOnly(@rules) {\n    @media (min-width: @xl-min-width) and (max-width: @xl-max-width) {\n        @rules();\n    }\n}\n.xxl(@rules) {\n    .xxlMin(@rules);\n}\n.xxlMin(@rules) {\n    @media (min-width: @xxl-min-width) {\n        @rules();\n    }\n}\n\n.notoBackup(@varName; @stdFont) {\n    @{varName}: @stdFont;\n\n    &:lang(ja_jp) {\n        @{varName}: @stdFont, NotoSansJP;\n    }\n    &:lang(zh_hans) {\n        @{varName}: @stdFont, NotoSansSC;\n    }\n    &:lang(zh_tw) {\n        @{varName}: @stdFont, NotoSansTC;\n    }\n}\n\n/* 2. Typography */\n.handleFontDeclarations() {\n    .notoBackup(--rsg-font-family-std, HelveticaNowText);\n    .notoBackup(--rsg-font-family-h, HelveticaNowDisplayBold);\n    .notoBackup(--gta-font-family-std, Chalet);\n    .notoBackup(--gta-font-family-h, ChaletComprime);\n    .notoBackup(--gta-font-family-badge, Pricedown);\n    .notoBackup(--rdr-font-family-std, HapnaSlabSerif);\n    .notoBackup(--rdr-font-family-h, RDRLino-Regular);\n    .notoBackup(--rdr-font-family-newswire-subtitle, HapnaSlabSerif);\n    .notoBackup(--rdr-area-font, RDRCatalogueBold);\n\n    --header-multiplier: var(--header-numerator, var(--root-font-size)) /\n        var(--root-font-size);\n    font-family: var(--font-family-std, HelveticaNowText);\n    font-weight: var(--font-weight-std, 400);\n    letter-spacing: var(--letter-spacing-std, -0.025em);\n    line-height: var(--line-height-std, 1.6);\n    font-size: calc(var(--root-font-size) * 1px);\n    -webkit-font-smoothing: antialiased;\n\n    h1.large,\n    h1,\n    h2,\n    h3,\n    h4 {\n        font-family: var(--font-family-h, HelveticaNowDisplayBold);\n        letter-spacing: var(--letter-spacing-h, -0.025em);\n    }\n    h1.large,\n    h1 {\n        font-weight: var(--font-weight-h1, var(--font-weight-h, 700));\n        text-transform: var(--text-transform-h1, var(--text-transform-h, none));\n        line-height: var(--line-height-h1, var(--line-height-h, 1.1));\n    }\n\n    h1.large {\n        font-size: calc(var(--font-size-8) * var(--header-multiplier));\n    }\n    h1 {\n        font-size: calc(var(--font-size-7) * var(--header-multiplier));\n    }\n    h2 {\n        font-size: calc(var(--font-size-6) * var(--header-multiplier));\n        font-weight: var(--font-weight-h2, var(--font-weight-h, 700));\n        text-transform: var(--text-transform-h2, var(--text-transform-h, none));\n        line-height: var(--line-height-h, 1.1);\n    }\n    h3 {\n        font-size: calc(var(--font-size-5) * var(--header-multiplier));\n        font-weight: var(--font-weight-h3, var(--font-weight-h, 700));\n        text-transform: var(--text-transform-h3, var(--text-transform-h, none));\n        line-height: var(--line-height-h, 1.1);\n\n        &[data-context='newswire-subtitle'] {\n            font-size: calc(\n                var(--font-size-5) *\n                    var(\n                        --h3-numerator-override-newswire-subtitle,\n                        var(--header-multiplier)\n                    )\n            );\n            font-weight: var(\n                --font-weight-newswire-subtitle,\n                var(--font-weight-h)\n            );\n            font-family: var(\n                --font-family-newswire-subtitle,\n                var(--font-family-h)\n            );\n            text-transform: var(--text-transform-newswire-subtitle);\n        }\n\n        .isRdr({\n            font-weight: var(--font-weight-h3, var(--font-weight-h, 400));\n        });\n    }\n\n    h4,\n    h5,\n    h6 {\n        font-size: calc(var(--font-size-4) * var(--header-multiplier));\n        line-height: var(--line-height-h, 1.1);\n    }\n}\n\n.handleColors() {\n    h1.large,\n    h1 {\n        color: var(--color-h-dynamic, var(--color-h1, var(--color-h, inherit)));\n    }\n    h2 {\n        color: var(--color-h-dynamic, var(--color-h2, var(--color-h, inherit)));\n    }\n    h3 {\n        color: var(--color-h-dynamic, var(--color-h3, var(--color-h, inherit)));\n\n        &[data-context='newswire-subtitle'] {\n            color: var(\n                --color-subtitle-dynamic,\n                var(--color-h-dynamic, var(--color-h3, var(--color-h, inherit)))\n            );\n        }\n    }\n    h4,\n    h5,\n    h6 {\n        color: var(--color-h-dynamic, var(--color-h, inherit));\n    }\n    background-color: var(--background-color, transparent);\n\n    [template='community'] {\n        --time-color: var(--body-color, #2d2d2d);\n        --breadcrumb-separator-filter-invert: invert(0);\n\n        main {\n            color: var(--color-h, #161616);\n        }\n        p {\n            color: var(--body-color, #2d2d2d);\n        }\n    }\n}\n\n/* 3. Variables */\n.resetVariables() {\n    --text-section-max-width: 640px;\n    --base-pixel-size: 12px;\n    --base-rem-size: 0.75rem;\n    --half-rem-size: calc(var(--base-rem-size) / 2);\n    --twice-rem-size: calc(var(--base-rem-size) * 2);\n    --section-margin-bottom: calc(var(--base-rem-size) * 4);\n    --header-height: 80px;\n    --breadcrumbs-height: calc(var(--base-pixel-size) * 3.5);\n    --max-width: 1920px;\n    --standard-color: #fcaf17;\n    --color-h: #ffffff;\n    --body-color: #e8e8e8;\n    --background-color: #0b0b0b;\n    --card-background-color: #000;\n    --border-color: #282828;\n    --privacy-banner-height: 0px;\n    --game-header-height: 50px;\n    --standard-grid-gap: calc(var(--base-rem-size) * 2);\n    --image-margin-bottom: inherit;\n    --image-rounding: 0px;\n    --image-rounding-static: 16px;\n    --image-rounding-static-sm: 8px;\n    --image-rounding-static-xs: 4px;\n\n    --grid-gap-static-xs: 0.5rem;\n    --grid-gap-static-sm: 1rem;\n    --grid-gap-static-md: 2rem;\n    --grid-gap-static-lg: 4rem;\n    --grid-gap-static-xl: 8rem;\n    .smMax({--grid-gap-static-lg: 2rem; --grid-gap-static-xl: 4rem;});\n\n    --max-width-static: 640px;\n    --max-width-static-md: 1088px;\n    --max-width-static-lg: 1920px;\n    --max-width-static-xl: 2560px;\n    .xxlMin({--max-width-static-md: 1440px;});\n\n    --margin-static: 0 0 2rem;\n    --h2-margin: 2rem 0 0 0;\n\n    --padding-sides: var(--grid-gap-static-lg);\n    --padding-top-bottom: var(--padding-sides);\n    --padding-static: var(--padding-sides);\n}\n\n/* 4. Utility */\n/* 4.1 Flex */\n.flex() {\n    display: flex;\n    flex-flow: column;\n}\n.horizontalCenterChildren() {\n    display: flex;\n    justify-content: center;\n}\n.verticalCenterChildren() {\n    display: flex;\n    align-items: center;\n}\n.flexCenterChildren() {\n    .horizontalCenterChildren();\n    .verticalCenterChildren();\n}\n\n/* 4.2 Grid */\n.gridMinWidth(@minWidth: 480px; @rowGap: var(--standard-grid-gap); @colGap: var(--standard-grid-gap); @autoType: 'auto-fit') {\n    display: grid;\n    grid-row-gap: @rowGap;\n    grid-column-gap: @colGap;\n    grid-template-columns: ~'repeat(@{autoType}, minmax(@{minWidth}, 1fr))';\n}\n.gridHideExtraRows(@colGap: var(--standard-grid-gap)) {\n    ::-webkit-scrollbar {\n        display: none;\n    }\n    -ms-overflow-style: none;\n    display: grid;\n    grid-auto-flow: column;\n    grid-column-gap: @colGap;\n    overflow-y: hidden;\n    scroll-snap-type: x mandatory;\n    > * {\n        scroll-snap-align: start;\n    }\n    --per-page: 4;\n    .lgMax({--per-page: 3;});\n    .mdMax({--per-page: 2;});\n    .smMax({--per-page: 1;});\n\n    grid-auto-columns: calc(\n        100% / var(--per-page) - (var(--per-page) - 1) / var(--per-page) *\n            @colGap\n    );\n}\n.gridNumCols(@numInitialItems) {\n    display: grid;\n    grid-gap: var(--standard-grid-gap);\n    .smMax({grid-template-columns: repeat(1, minmax(0px, 1fr)) ;});\n    @media screen and (min-width: @screen-sm) and (max-width: @md-max-width) {\n        grid-template-columns: repeat(2, minmax(0px, 1fr));\n    }\n    @media screen and (min-width: @screen-lg) {\n        grid-template-columns: repeat(4, minmax(0px, 1fr));\n    }\n}\n.gridNumColsSmall(@colGap: var(--padding-top-bottom); @rowGap: var(--padding-top-bottom)) {\n    display: grid;\n    grid-row-gap: @rowGap;\n    grid-column-gap: @colGap;\n    grid-template-columns: repeat(1, minmax(0px, 1fr));\n    .md({grid-template-columns: repeat(2, minmax(0px, 1fr)) ;});\n}\n\n.standardLayoutGridItem(@maxWidth: var(--max-width-static-md), @padding: var(--padding-static)) {\n    .handleMaxWidth(@maxWidth);\n    .handlePadding(@padding);\n}\n\n.handleGridStyles(@grid-gap-dynamic: var(--grid-gap-static-md)) {\n    --grid-gap-dynamic: @grid-gap-dynamic;\n    display: grid;\n    grid-template-columns: repeat(var(--grid-num-columns, 1), minmax(0px, 1fr));\n    grid-template: var(\n        --grid-template-override,\n        auto / repeat(var(--grid-num-columns, 1), minmax(0, 1fr))\n    );\n    grid-gap: var(--grid-gap-dynamic);\n    align-items: var(--grid-align-items);\n    align-content: var(--grid-align-content);\n    align-self: var(--grid-align-self);\n    justify-items: var(--grid-justify-items);\n    justify-content: var(--grid-justify-content);\n    justify-self: var(--grid-justify-self);\n}\n\n/* 4.3 Max-Width */\n.maxWidth(@padding: 0) {\n    max-width: var(--max-width);\n    width: 100%;\n    margin: 0 auto;\n    padding-left: @padding;\n    padding-right: @padding;\n}\n.maxWidthWithNormalPadding() {\n    .maxWidth(var(--padding-sides));\n}\n\n.handleMaxWidth(@max-width-default: 1000000px) {\n    width: 100%;\n    max-width: calc(\n        var(--max-width-dynamic, @max-width-default) +\n            var(--padding-dynamic, 0px) * 2\n    ) !important;\n    margin: 0 auto;\n}\n\n.breakout(@max-width-default: 100vw) {\n    @margin: calc((@max-width-default / 2) * -1);\n    width: @max-width-default;\n    max-width: @max-width-default !important;\n    position: relative;\n    left: 50%;\n    right: 50%;\n    margin-left: @margin;\n    margin-right: @margin;\n}\n\n.fullWidth() {\n    .breakout;\n}\n\n/* 4.4 Images */\n.handleAspectRatio() {\n    --aspect-ratio-default: 1;\n    .lgMin({\n        --aspect-ratio-default: 16/9;\n    });\n\n    position: relative;\n    &:before {\n        content: '';\n        height: 0;\n        width: 100%;\n        display: block;\n        padding-bottom: calc(\n            100% / calc(var(--aspect-ratio, var(--aspect-ratio-default)))\n        );\n    }\n    > * {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n    }\n}\n.setAspectRatio(@ratio) {\n    --aspect-ratio: @ratio;\n    .handleAspectRatio;\n}\n\n.handleParallaxPerspective() {\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    overflow-x: hidden;\n    overflow-y: scroll;\n    perspective: var(--parallax-perspective);\n    perspective-origin: 0 0;\n}\n.handleParallaxDistance() {\n    transform: translateZ(var(--parallax-distance))\n        scale(\n            calc(\n                (var(--parallax-perspective) - var(--parallax-distance)) /\n                    var(--parallax-distance)\n            )\n        );\n}\n\n.handleImageRounding() {\n    border-radius: var(--image-rounding-dynamic, 0px);\n}\n\n/* 4.5 Padding */\n.handlePadding(@paddingSides: initial, @paddingTopBottom: initial) {\n    --padding-dynamic: @paddingSides;\n    --padding-dynamic-tb: @paddingTopBottom;\n\n    padding: var(--padding-t, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0) var(--padding-b, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0);\n}\n\n/* 4.6 Fonts */\n.loadFont(@family, @weight: 400, @style: normal, @file: @family) {\n    @font-face {\n        font-family: @family;\n        font-style: @style;\n        font-weight: @weight;\n        src: url('../fonts/@{file}.woff') format('woff');\n    }\n}\n.loadFontWoff2(@family, @weight: 400, @style: normal, @file: @family) {\n    @font-face {\n        font-family: @family;\n        font-style: @style;\n        font-weight: @weight;\n        src: url('../fonts/@{file}.woff2') format('woff2');\n    }\n}\n.fontClip(@backgroundImg) {\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    @backgroundImg();\n}\n\n/* 4.7 Games */\n.gta(@rules) {\n    [data-game^='gta'] {\n        @rules();\n    }\n}\n\n.isGta(@rules) {\n    [data-game^='gta'] & {\n        @rules();\n    }\n}\n\n.rdr(@rules) {\n    [data-game='rdo'],\n    [data-game^='rdr'] {\n        @rules();\n    }\n}\n\n.isRdr(@rules) {\n    [data-game='rdo'] &,\n    [data-game^='rdr'] & {\n        @rules();\n    }\n}\n\n/* 4.8 Tina */\n.tinaTextField() {\n    padding: var(--tina-padding-small);\n    border-radius: var(--tina-radius-small);\n    background: var(--tina-color-grey-0);\n    color: var(--tina-color-grey-10);\n    background-color: var(--tina-color-grey-0);\n    border: 1px solid var(--tina-color-grey-2);\n    box-shadow: 0 0 0 2px transparent;\n    margin-bottom: 14px;\n}\n\n/* 4.9 Hacks */\n.safariBorderRadiusOverflowFix() {\n    // https://stackoverflow.com/questions/49066011/overflow-hidden-with-border-radius-not-working-on-safari\n    -webkit-mask-image: -webkit-radial-gradient(white, black);\n}\n\n.forceGpuRendering() {\n    // https://web.dev/animations-guide/#force\n    transform: translateZ(0);\n}\n\n/* 5. Presentational */\n@locales: en_us, fr_fr, de_de, es_es, es_mx, it_it, pt_br, pl_pl, ru_ru, ja_jp,\n    ko_kr, zh_tw, zh_hans;\n\n.placeholder(@rules) {\n    &::-webkit-input-placeholder {\n        @rules();\n    }\n    &:-moz-placeholder {\n        @rules();\n    }\n    &::-moz-placeholder {\n        @rules();\n    }\n    &:-ms-input-placeholder {\n        @rules();\n    }\n}\n\n.bgImg() {\n    background-size: cover;\n    background-position: center center;\n    background-repeat: no-repeat;\n}\n\n.themeDark() {\n    color: #e8e8e8;\n    --tag-color: #e8e8e8;\n}\n\n.outbound() {\n    content: '';\n    display: inline-block;\n    background-size: 100%;\n    background-repeat: no-repeat;\n    background-position: 0% 50%;\n    vertical-align: baseline;\n    margin-left: var(--grid-gap-static-xs);\n    width: 1rem;\n    height: 1rem;\n    background-image: data-uri('../img/outbound.svg');\n}\n\n.blurryBg() {\n    transition: filter 0.8s;\n    filter: blur(var(--blur-because-in-bg, 0px));\n}\n\n.fancyLink() {\n    position: relative;\n    background: transparent;\n    padding: 0;\n    z-index: 1;\n    @media (min-width: @screen-sm) {\n        transition: all 0.2s ease;\n        &:before {\n            content: '';\n            display: block;\n            position: absolute;\n            bottom: 0;\n            left: -0.1rem;\n            width: calc(100% + 0.2rem);\n            height: 2px;\n            background: var(--body-color);\n            transition: all 0.2s ease;\n            z-index: -1;\n            border-radius: 0.25rem;\n        }\n        &:hover {\n            color: #161616;\n\n            &:before {\n                left: -0.25rem;\n                width: calc(100% + 0.5rem);\n                height: 100%;\n            }\n        }\n    }\n    img {\n        display: block;\n    }\n}\n.stdHover() {\n    transition:\n        color 0.2s ease,\n        opacity 0.2s ease;\n    &:hover {\n        color: var(--standard-color);\n        opacity: 1;\n    }\n}\n.stdIconHover() {\n    &:hover {\n        filter: brightness(0) saturate(100%) invert(76%) sepia(15%)\n            saturate(5173%) hue-rotate(348deg) brightness(105%) contrast(98%);\n    }\n}\n.card() {\n    .handleImageRounding;\n    --image-rounding-dynamic: var(--image-rounding-static-sm);\n    background: var(--card-background-color);\n    overflow: hidden;\n    display: flex;\n    flex-flow: column;\n    transition: transform 0.2s ease;\n    border: 1px solid var(--border-color);\n    .info {\n        .handleGridStyles;\n        --grid-gap-dynamic: var(--grid-gap-static-xs);\n        padding: 2rem 1.5rem;\n        .title {\n            --line-height-h: 1.3;\n            color: var(--color-h);\n        }\n    }\n}\n\n.cardHover() {\n    transition:\n        transform 0.3s cubic-bezier(0, 0, 0.5, 1),\n        box-shadow 0.3s cubic-bezier(0, 0, 0.5, 1);\n    box-shadow: 0px 0px 40px -25px rgba(0, 0, 0, 0);\n\n    &:hover {\n        transform: scale(1.025);\n        box-shadow: 0px 30px 40px -25px rgba(0, 0, 0, 1);\n    }\n}\n\n.cardSecondary() {\n    .card();\n    .info {\n        padding: 1.5rem;\n    }\n    .title {\n        font-size: var(--font-size-3);\n        font-weight: 400;\n    }\n}\n\n.cardTertiary() {\n    .cardSecondary();\n    --image-rounding-dynamic: 0;\n    --card-background-color: transparent;\n    grid-gap: var(--grid-gap-static-sm);\n    overflow: unset;\n    border: none;\n    .info {\n        padding: 0;\n    }\n    .img {\n        .handleImageRounding;\n        --image-rounding-dynamic: var(--image-rounding-static-sm);\n    }\n}\n\n.standardPage() {\n    .maxWidthWithNormalPadding;\n    padding-top: var(--padding-top-bottom);\n    padding-bottom: var(--padding-top-bottom);\n}\n\n.dropdownThing(@defaultDeg: 0deg; @openDeg: 180deg) {\n    position: relative;\n    padding-right: calc(var(--grid-gap-static-xs) + 24px);\n    .dropdownCaret(yellow; @defaultDeg; @openDeg);\n}\n.dropdownCaret(@color; @defaultDeg: 0deg; @openDeg: 180deg) {\n    &:after {\n        display: inline-block;\n        content: '';\n        position: absolute;\n        top: 0;\n        right: 0;\n        @img: '../img/dropdown-@{color}.svg';\n        background-image: data-uri(@img);\n        background-repeat: no-repeat;\n        width: image-width(@img);\n        height: 100%;\n        background-position: center;\n        background-size: 100%;\n        transform: rotate(@defaultDeg);\n        transition: transform 0.3s;\n        .open& {\n            transform: rotate(@openDeg);\n        }\n    }\n}\n\n.sectionHeader() {\n    margin: 0 0 1.5rem;\n    font-size: var(--font-size-5);\n    font-family: var(--font-family-h);\n    font-weight: var(--font-weight-h);\n    --line-height-h: 1.3;\n\n    .xlMin ({\n        font-size: var(--font-size-6);\n    });;\n}\n.sectionHeaderSmall() {\n    .sectionHeader;\n    font-size: var(--font-size-4);\n\n    .xlMin ({\n        font-size: var(--font-size-5);\n    });;\n}\n\n.tag() {\n    color: var(--tag-color, var(--body-color));\n    font-weight: 700;\n    font-size: var(--font-size-2);\n    line-height: 1.6;\n}\n\n.date() {\n    .tag;\n    font-weight: 400;\n    opacity: 0.65;\n}\n.animationFadeInUp() {\n    :global {\n        animation: globalFadeInUp 0.75s;\n        animation-play-state: paused;\n    }\n}\n.animationPaused() {\n    animation-play-state: paused;\n}\n.animationRunning() {\n    animation-play-state: running;\n}\n\n.button() {\n    font-weight: 700;\n    align-self: center;\n    display: inline-block;\n    text-transform: uppercase;\n    background: transparent;\n    border: 1px solid var(--color-h);\n    padding: 1rem 3rem;\n    color: inherit;\n    cursor: pointer;\n    border-radius: 0.25rem;\n    color: var(--color-h);\n    line-height: 100%;\n    transition: all 0.2s ease;\n    &:focus,\n    &:hover {\n        background: var(--standard-color);\n        border-color: var(--standard-color);\n        color: #161616;\n    }\n    &.secondary {\n        .fancyLink;\n        outline: none;\n        border: none;\n        text-transform: none;\n        font-weight: 400;\n        line-height: unset;\n        .smMin ({\n            &:before {\n                background: var(--standard-color);\n                height:4px;\n            }\n            &:focus,\n            &:hover {\n                &:before {\n                    left: -0.5rem;\n                    width: calc(100% + 1rem);\n                    height: 100%;\n                }\n            }\n         });;\n    }\n    &[disabled] {\n        opacity: 0.5;\n    }\n}\n\n.expandToEdges() {\n    margin-top: calc(var(--padding-top-bottom) * -1);\n    margin-left: calc(var(--padding-sides) * -1);\n    width: 100vw;\n    width: calc(100% + calc(var(--padding-sides) * 2));\n}\n\n.shadow(@boxShadow: 0 10px 30px rgba(0, 0, 0, 0.5)) {\n    // border: 1px solid rgba(0, 0, 0, 0.15);\n    box-shadow: @boxShadow;\n}\n.shadowTop() {\n    box-shadow: -3px -3px 6px 0 rgba(0, 0, 0, 0.2);\n}\n\n.aspect-ratio(@width, @height, @selector: div, @pre: ~'') {\n    @supports not (aspect-ratio: @width / @height) {\n        position: relative;\n        &:before {\n            display: block;\n            content: '';\n            width: 100%;\n            padding-top: calc((@height / @width) * 100%);\n        }\n        > @{pre}@{selector} {\n            position: absolute;\n            top: 0;\n            left: 0;\n            right: 0;\n            bottom: 0;\n            width: 100% !important;\n            height: 100% !important;\n        }\n    }\n\n    @supports (aspect-ratio: @width / @height) {\n        @{pre}@{selector} {\n            aspect-ratio: @width / @height !important;\n            width: 100% !important;\n            height: auto !important;\n        }\n    }\n}\n.unset-aspect-ratio(@selector, @pre: ~'') {\n    @supports not (aspect-ratio: 1/1) {\n        position: unset;\n        &:before {\n            display: none;\n        }\n        > @{pre}@{selector} {\n            position: unset;\n            width: 100% !important;\n            height: unset !important;\n        }\n    }\n\n    @supports (aspect-ratio: 1/1) {\n        @{pre}@{selector} {\n            aspect-ratio: unset !important;\n        }\n    }\n}\n\n.rockstarTypography() {\n    --font-family-std: NeueHelveticaPaneuropean, sans-serif;\n    --leter-spacing-std: 0;\n\n    font-size: var(--font-size-2);\n    font-family: var(--font-family-std);\n    letter-spacing: var(--leter-spacing-std);\n\n    button {\n        letter-spacing: var(--leter-spacing-std);\n    }\n}\n\n.setNodeFontSizing() {\n    // TODO audit this. .5rem is very small.\n    --font-size-1: 0.75rem;\n\n    --font-size-2: 0.75rem;\n    --font-size-3: 1rem;\n    --font-size-4: 1.25rem;\n    --font-size-5: 1.5rem;\n    --font-size-6: 2rem;\n    --font-size-7: 2.5rem;\n    --font-size-8: 3rem;\n    --font-size-9: 4rem;\n    --font-size-10: 5rem;\n}\n\n.setRootFontSizing() {\n    .sm({--root-font-size: 16;});\n    .md({--root-font-size: 18;});\n    .lg({--root-font-size: 20;});\n    .xl({--root-font-size: 22;});\n}\n\n.button-text () {\n    font-size: var(--font-size-4);\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-sm);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    text-transform: uppercase;\n}\n\n.button-text-sm () {\n    .button-text;\n    font-size: var(--font-size-3);\n}\n\n.button-text-md () {\n    .button-text;\n    font-size: var(--font-size-4);\n    padding: 0 var(--padding-md);\n}\n\n.button-text-lg () {\n    .button-text;\n    font-size: var(--font-size-5);\n    padding: 0 var(--padding-lg);\n}\n\n.button-text-xl () {\n    .button-text;\n    font-size: var(--font-size-7);\n    padding: 0 var(--padding-xl);\n}\n\n.cta-button() {\n    @import '../less/gen9-vars';\n\n    --button-text-color-hover: var(--white-100);\n\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    gap: var(--grid-gap-xs, 0.5rem);\n\n    background: var(\n        --button-background-color,\n        var(--black-65, hsla(0, 0%, 7%, 0.65))\n    );\n    border: 1px solid var(--white-100, #fff);\n    border-radius: var(--border-radius-sm, 4px);\n    color: var(--button-text-color, var(--white-100));\n    cursor: pointer;\n    padding: 0 var(--padding-sm);\n\n    width: 100%;\n    height: var(--button-height-3, 3rem);\n\n    transition: all 0.3s ease-in-out;\n\n    &[data-brand='reddeadredemption'],\n    [data-brand='reddeadredemption'] & {\n        --accent-color: #cc0000;\n        --font-family-h: RDRUltra;\n\n        :lang(pl_pl) {\n            --font-family-h: RDRUltra, NeueHelveticaPaneuropean;\n        }\n    }\n\n    &[data-brand='bully'],\n    [data-brand='bully'] & {\n        --accent-color: #f8ad00;\n        --font-family-h: HelveticaNowDisplayBold;\n        --button-background-color: var(--white-100);\n        --button-background-color-hover: var(--accent-color);\n        --button-text-color: var(--black-100);\n        --button-text-color-hover: var(--black-100);\n\n        backdrop-filter: blur(25px);\n        padding: 0 var(--padding-md, 32px);\n    }\n\n    img {\n        height: 1rem;\n        width: auto;\n    }\n\n    .label {\n        .button-text();\n        display: flex;\n        flex-shrink: 0;\n    }\n\n    &.primary {\n        color: var(--black-100);\n        background-color: var(--white-100);\n    }\n\n    &:hover {\n        border-color: var(--accent-color, var(--btn-active-color));\n        background-color: var(--accent-color, var(--btn-active-color));\n        color: var(--button-text-color-hover, var(--btn-active-color));\n\n        &.primary {\n            color: var(--button-text-color-hover, var(--white-100));\n        }\n    }\n\n    @media (min-width: 1280px) {\n        padding: 0 var(--padding-md);\n    }\n\n    @media (min-width: 768px) and (max-width: 1539px) {\n        height: 2.5rem;\n\n        img {\n            height: 1rem;\n        }\n\n        .label {\n            .button-text-sm();\n        }\n    }\n}\n"],
        sourceRoot: ""
      }]), m.locals = {
        hiddenMobile: "rockstargames-modules-core-gif-viewerabb297e5eb4b30107497c5af3b977524",
        hiddenLarge: "rockstargames-modules-core-gif-viewerb8ebff1e6c6fc120a77104f6a7edc21d",
        "hidden-sm": "rockstargames-modules-core-gif-vieweraac271d5fdbd3f76a2f95154f54f56f3",
        "show-sm": "rockstargames-modules-core-gif-viewerd8b46b1e13206714908c4ba62343bb7d",
        "hidden-md": "rockstargames-modules-core-gif-viewerea1e161efb3286f18acc4ca224776b52",
        "show-md": "rockstargames-modules-core-gif-viewere3451141fab2f5a3cc092cfe4cc95654",
        "hidden-lg": "rockstargames-modules-core-gif-viewere1e026f5e3c3b3dbeca879b01e49da10",
        "show-lg": "rockstargames-modules-core-gif-viewerc7ff5218a9d689524fb1f41925045edc",
        "hidden-xl": "rockstargames-modules-core-gif-viewerb76b86f8931dabffacb746e1088bd06f",
        "show-xl": "rockstargames-modules-core-gif-viewerea13d7c61982adf247792719febab3e8",
        "hidden-xxl": "rockstargames-modules-core-gif-viewerbc195247a1f0dd5b7d5f5f94a70d90a0",
        "show-xxl": "rockstargames-modules-core-gif-viewerc56987d4c3541e92c7f916ad8f648e23",
        "full-width": "rockstargames-modules-core-gif-viewera44ea239a96fa21be5803aa8597935f3",
        "reverse-mobile": "rockstargames-modules-core-gif-viewerd7a211eb98231158320e9010496f41ad",
        "center-children": "rockstargames-modules-core-gif-viewerf2784956deb5076d08b115ab9f0de65b",
        "std-padding-mobile-desktop-none": "rockstargames-modules-core-gif-viewercc8c0e3543ec9ea6e406cd5d60661547",
        "std-padding-desktop-mobile-none": "rockstargames-modules-core-gif-viewere2e4a9d2a67fa93b20ba2d2c3bfb18d6",
        "horizontal-line": "rockstargames-modules-core-gif-viewerb33830da2f964a317241cf53c7e5773a",
        gold: "rockstargames-modules-core-gif-viewerf70025cd962a532f67afe3f67f16efb7",
        gifWrapper: "rockstargames-modules-core-gif-viewerf9ae1cdda1f485a1da00edfec5947239",
        gifWrapperHero: "rockstargames-modules-core-gif-viewerf1ae0b7e0b8f54f7883d7a5810ff67d1",
        muteBtn: "rockstargames-modules-core-gif-viewera385e95337be85fde170dc13e35beb24",
        unMuted: "rockstargames-modules-core-gif-viewere906711c6535a405f565f647a9db24d6",
        video: "rockstargames-modules-core-gif-viewerc4b1d579f91603be5e73eec4ba724711",
        videoMobile: "rockstargames-modules-core-gif-viewere8988d4c734162926922754c59a024e7",
        videoDesktop: "rockstargames-modules-core-gif-viewereb026b8ffe62b23b039f9a358c313b09",
        mutable: "rockstargames-modules-core-gif-viewera093729df8a4878dc8a2f4ff1af1eada"
      };
      const p = m
    },
    4235: n => {
      var e = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "GifsList"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "cache"
              }
            },
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Boolean"
              }
            },
            defaultValue: {
              kind: "BooleanValue",
              value: !0
            },
            directives: []
          }],
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              name: {
                kind: "Name",
                value: "gifsList"
              },
              arguments: [],
              directives: [],
              selectionSet: {
                kind: "SelectionSet",
                selections: [{
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "hash"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "name"
                  },
                  arguments: [],
                  directives: []
                }]
              }
            }]
          }
        }, {
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "GifInfo"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "locale"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String"
                }
              }
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "hash"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String"
                }
              }
            },
            directives: []
          }],
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              name: {
                kind: "Name",
                value: "gifInfo"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "locale"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "locale"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "hash"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "hash"
                  }
                }
              }],
              directives: [],
              selectionSet: {
                kind: "SelectionSet",
                selections: [{
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "file"
                  },
                  arguments: [],
                  directives: []
                }]
              }
            }]
          }
        }],
        loc: {
          start: 0,
          end: 206
        }
      };

      function a(n, e) {
        if ("FragmentSpread" === n.kind) e.add(n.name.value);
        else if ("VariableDefinition" === n.kind) {
          var i = n.type;
          "NamedType" === i.kind && e.add(i.name.value)
        }
        n.selectionSet && n.selectionSet.selections.forEach((function(n) {
          a(n, e)
        })), n.variableDefinitions && n.variableDefinitions.forEach((function(n) {
          a(n, e)
        })), n.definitions && n.definitions.forEach((function(n) {
          a(n, e)
        }))
      }
      e.loc.source = {
        body: "query GifsList($cache: Boolean = true) {\n    gifsList {\n        hash\n        name\n    }\n}\n\nquery GifInfo($locale: String!, $hash: String!) {\n    gifInfo(locale: $locale, hash: $hash) {\n        file\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var i = {};

      function t(n, e) {
        for (var a = 0; a < n.definitions.length; a++) {
          var i = n.definitions[a];
          if (i.name && i.name.value == e) return i
        }
      }

      function r(n, e) {
        var a = {
          kind: n.kind,
          definitions: [t(n, e)]
        };
        n.hasOwnProperty("loc") && (a.loc = n.loc);
        var r = i[e] || new Set,
          o = new Set,
          d = new Set;
        for (r.forEach((function(n) {
            d.add(n)
          })); d.size > 0;) {
          var s = d;
          d = new Set, s.forEach((function(n) {
            o.has(n) || (o.add(n), (i[n] || new Set).forEach((function(n) {
              d.add(n)
            })))
          }))
        }
        return o.forEach((function(e) {
          var i = t(n, e);
          i && a.definitions.push(i)
        })), a
      }
      e.definitions.forEach((function(n) {
        if (n.name) {
          var e = new Set;
          a(n, e), i[n.name.value] = e
        }
      })), n.exports = e, n.exports.GifsList = r(e, "GifsList"), n.exports.GifInfo = r(e, "GifInfo")
    },
    202: n => {
      "use strict";
      n.exports = "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 xml:space=%27preserve%27 style=%27enable-background:new 0 0 100 100%27 viewBox=%270 0 100 100%27%3E%3Cdefs%3E%3Cfilter id=%27a%27 width=%27200%25%27 height=%27200%25%27 x=%270%27 y=%270%27%3E%3CfeOffset dx=%274%27 dy=%275%27 in=%27SourceAlpha%27 result=%27offOut%27/%3E%3CfeGaussianBlur in=%27offOut%27 result=%27blurOut%27 stdDeviation=%272%27/%3E%3CfeBlend in=%27SourceGraphic%27 in2=%27blurOut%27/%3E%3C/filter%3E%3C/defs%3E%3Cpath d=%27M30.126 35.274H9.755v30h20.371L49.755 81V19zm51.775 14.559 9.172-9.171a4 4 0 1 0-5.656-5.657l-9.172 9.172-9.172-9.172a4 4 0 1 0-5.656 5.657l9.172 9.171-9.172 9.172a3.997 3.997 0 0 0 0 5.656c.781.781 1.805 1.172 2.828 1.172s2.048-.391 2.828-1.172l9.172-9.172 9.172 9.172c.781.781 1.805 1.172 2.828 1.172s2.048-.391 2.828-1.172a3.997 3.997 0 0 0 0-5.656l-9.172-9.172z%27 filter=%27url%28%23a%29%27 style=%27fill:%23fff%27/%3E%3C/svg%3E"
    },
    7863: n => {
      "use strict";
      n.exports = "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 xml:space=%27preserve%27 style=%27enable-background:new 0 0 100 100%27 viewBox=%270 0 100 100%27%3E%3Cdefs%3E%3Cfilter id=%27filter1%27 width=%27200%25%27 height=%27200%25%27 x=%270%27 y=%270%27%3E%3CfeOffset dx=%274%27 dy=%275%27 in=%27SourceAlpha%27 result=%27offOut%27/%3E%3CfeGaussianBlur in=%27offOut%27 result=%27blurOut%27 stdDeviation=%272%27/%3E%3CfeBlend in=%27SourceGraphic%27 in2=%27blurOut%27/%3E%3C/filter%3E%3Cfilter id=%27filter2%27 width=%27200%25%27 height=%27200%25%27 x=%270%27 y=%270%27%3E%3CfeOffset dx=%274%27 dy=%275%27 in=%27SourceAlpha%27 result=%27offOut%27/%3E%3CfeGaussianBlur in=%27offOut%27 result=%27blurOut%27 stdDeviation=%272%27/%3E%3CfeBlend in=%27SourceGraphic%27 in2=%27blurOut%27/%3E%3C/filter%3E%3C/defs%3E%3Cstyle%3E.st0{fill:%23fff}%3C/style%3E%3Cg id=%27Layer_1%27%3E%3Cpath d=%27M30.126 35.274H9.755v30h20.371L49.755 81V19z%27 class=%27st0%27 filter=%27url%28%23filter1%29%27/%3E%3Cpath d=%27M79.459 82a3.499 3.499 0 0 1-2.106-6.298C82.888 71.545 86.744 58.82 86.744 50s-3.856-21.544-9.391-25.702a3.5 3.5 0 0 1 4.205-5.596C89.186 24.432 93.744 39.115 93.744 50c0 10.885-4.559 25.568-12.186 31.299a3.492 3.492 0 0 1-2.099.701z%27 class=%27st0%27 filter=%27url%28%23filter2%29%27/%3E%3Cpath d=%27M65.857 71.839a3.502 3.502 0 0 1-2.617-5.823c3.63-4.089 5.394-9.328 5.394-16.016 0-6.688-1.764-11.926-5.393-16.015a3.5 3.5 0 0 1 5.234-4.647c4.75 5.351 7.158 12.303 7.158 20.662 0 8.358-2.408 15.311-7.157 20.662a3.493 3.493 0 0 1-2.619 1.177z%27 class=%27st0%27 filter=%27url%28%23filter2%29%27/%3E%3Cpath d=%27M65.857 71.839a3.502 3.502 0 0 1-2.617-5.823c3.63-4.089 5.394-9.328 5.394-16.016 0-6.688-1.764-11.926-5.393-16.015a3.5 3.5 0 0 1 5.234-4.647c4.75 5.351 7.158 12.303 7.158 20.662 0 8.358-2.408 15.311-7.157 20.662a3.493 3.493 0 0 1-2.619 1.177z%27 class=%27st0%27 filter=%27url%28%23filter2%29%27/%3E%3C/g%3E%3C/svg%3E"
    }
  }
]);