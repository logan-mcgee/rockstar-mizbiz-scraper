! function() {
  try {
    var a = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      l = (new Error).stack;
    l && (a._sentryDebugIds = a._sentryDebugIds || {}, a._sentryDebugIds[l] = "edf9e7cc-471c-44fc-9c2f-b45acd519b35", a._sentryDebugIdIdentifier = "sentry-dbid-edf9e7cc-471c-44fc-9c2f-b45acd519b35")
  } catch (a) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-footer",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_footer = self.webpackChunk_rockstargames_modules_core_footer || []).push([
  [9269, 2180, 3855], {
    53178: a => {
      var l = [];

      function o(a) {
        for (var o = -1, r = 0; r < l.length; r++)
          if (l[r].identifier === a) {
            o = r;
            break
          } return o
      }

      function r(a, r) {
        for (var s = {}, f = [], e = 0; e < a.length; e++) {
          var c = a[e],
            t = r.base ? c[0] + r.base : c[0],
            d = s[t] || 0,
            g = "".concat(t, " ").concat(d);
          s[t] = d + 1;
          var i = o(g),
            u = {
              css: c[1],
              media: c[2],
              sourceMap: c[3],
              supports: c[4],
              layer: c[5]
            };
          if (-1 !== i) l[i].references++, l[i].updater(u);
          else {
            var y = n(u, r);
            r.byIndex = e, l.splice(e, 0, {
              identifier: g,
              updater: y,
              references: 1
            })
          }
          f.push(g)
        }
        return f
      }

      function n(a, l) {
        var o = l.domAPI(l);
        return o.update(a),
          function(l) {
            if (l) {
              if (l.css === a.css && l.media === a.media && l.sourceMap === a.sourceMap && l.supports === a.supports && l.layer === a.layer) return;
              o.update(a = l)
            } else o.remove()
          }
      }
      a.exports = function(a, n) {
        var s = r(a = a || [], n = n || {});
        return function(a) {
          a = a || [];
          for (var f = 0; f < s.length; f++) {
            var e = o(s[f]);
            l[e].references--
          }
          for (var c = r(a, n), t = 0; t < s.length; t++) {
            var d = o(s[t]);
            0 === l[d].references && (l[d].updater(), l.splice(d, 1))
          }
          s = c
        }
      }
    },
    17529: a => {
      var l = {};
      a.exports = function(a, o) {
        var r = function(a) {
          if (void 0 === l[a]) {
            var o = document.querySelector(a);
            if (window.HTMLIFrameElement && o instanceof window.HTMLIFrameElement) try {
              o = o.contentDocument.head
            } catch (a) {
              o = null
            }
            l[a] = o
          }
          return l[a]
        }(a);
        if (!r) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
        r.appendChild(o)
      }
    },
    82510: a => {
      a.exports = function(a) {
        var l = document.createElement("style");
        return a.setAttributes(l, a.attributes), a.insert(l, a.options), l
      }
    },
    72162: (a, l, o) => {
      a.exports = function(a) {
        var l = o.nc;
        l && a.setAttribute("nonce", l)
      }
    },
    27835: a => {
      a.exports = function(a) {
        if ("undefined" == typeof document) return {
          update: function() {},
          remove: function() {}
        };
        var l = a.insertStyleElement(a);
        return {
          update: function(o) {
            ! function(a, l, o) {
              var r = "";
              o.supports && (r += "@supports (".concat(o.supports, ") {")), o.media && (r += "@media ".concat(o.media, " {"));
              var n = void 0 !== o.layer;
              n && (r += "@layer".concat(o.layer.length > 0 ? " ".concat(o.layer) : "", " {")), r += o.css, n && (r += "}"), o.media && (r += "}"), o.supports && (r += "}");
              var s = o.sourceMap;
              s && "undefined" != typeof btoa && (r += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s)))), " */")), l.styleTagTransform(r, a, l.options)
            }(l, a, o)
          },
          remove: function() {
            ! function(a) {
              if (null === a.parentNode) return !1;
              a.parentNode.removeChild(a)
            }(l)
          }
        }
      }
    },
    90675: a => {
      a.exports = function(a, l) {
        if (l.styleSheet) l.styleSheet.cssText = a;
        else {
          for (; l.firstChild;) l.removeChild(l.firstChild);
          l.appendChild(document.createTextNode(a))
        }
      }
    },
    15081: a => {
      a.exports = function(a) {
        var l = [];
        return l.toString = function() {
          return this.map((function(l) {
            var o = "",
              r = void 0 !== l[5];
            return l[4] && (o += "@supports (".concat(l[4], ") {")), l[2] && (o += "@media ".concat(l[2], " {")), r && (o += "@layer".concat(l[5].length > 0 ? " ".concat(l[5]) : "", " {")), o += a(l), r && (o += "}"), l[2] && (o += "}"), l[4] && (o += "}"), o
          })).join("")
        }, l.i = function(a, o, r, n, s) {
          "string" == typeof a && (a = [
            [null, a, void 0]
          ]);
          var f = {};
          if (r)
            for (var e = 0; e < this.length; e++) {
              var c = this[e][0];
              null != c && (f[c] = !0)
            }
          for (var t = 0; t < a.length; t++) {
            var d = [].concat(a[t]);
            r && f[d[0]] || (void 0 !== s && (void 0 === d[5] || (d[1] = "@layer".concat(d[5].length > 0 ? " ".concat(d[5]) : "", " {").concat(d[1], "}")), d[5] = s), o && (d[2] ? (d[1] = "@media ".concat(d[2], " {").concat(d[1], "}"), d[2] = o) : d[2] = o), n && (d[4] ? (d[1] = "@supports (".concat(d[4], ") {").concat(d[1], "}"), d[4] = n) : d[4] = "".concat(n)), l.push(d))
          }
        }, l
      }
    },
    42587: a => {
      a.exports = function(a) {
        var l = a[1],
          o = a[3];
        if (!o) return l;
        if ("function" == typeof btoa) {
          var r = btoa(unescape(encodeURIComponent(JSON.stringify(o)))),
            n = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),
            s = "/*# ".concat(n, " */");
          return [l].concat([s]).join("\n")
        }
        return [l].join("\n")
      }
    },
    32469: (a, l, o) => {
      var r = o(62229),
        n = Symbol.for("react.element"),
        s = Symbol.for("react.fragment"),
        f = Object.prototype.hasOwnProperty,
        e = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        c = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function t(a, l, o) {
        var r, s = {},
          t = null,
          d = null;
        for (r in void 0 !== o && (t = "" + o), void 0 !== l.key && (t = "" + l.key), void 0 !== l.ref && (d = l.ref), l) f.call(l, r) && !c.hasOwnProperty(r) && (s[r] = l[r]);
        if (a && a.defaultProps)
          for (r in l = a.defaultProps) void 0 === s[r] && (s[r] = l[r]);
        return {
          $$typeof: n,
          type: a,
          key: t,
          ref: d,
          props: s,
          _owner: e.current
        }
      }
      l.Fragment = s, l.jsx = t, l.jsxs = t
    },
    73855: (a, l, o) => {
      a.exports = o(32469)
    },
    44051: (a, l, o) => {
      o.d(l, {
        A: () => e
      });
      var r = o(42587),
        n = o.n(r),
        s = o(15081),
        f = o.n(s)()(n());
      f.push([a.id, ':root{--foundry-global-font-line-height-150:150%;--foundry-global-font-line-height-130:130%;--foundry-global-font-letter-spacing-neg-10:-1%;--foundry-global-font-letter-spacing-neg-33:-2.5%;--foundry-global-font-letter-spacing-33:2.5%;--foundry-global-font-letter-spacing-10:1%;--foundry-global-font-letter-spacing-0:0%;--foundry-global-font-weight-700:700;--foundry-global-font-weight-400:400;--foundry-global-font-family-consolas:"Consolas";--foundry-global-font-family-helvetica-now-text:"Helvetica Now Text";--foundry-global-font-family-helvetica-now-display:"Helvetica Now Display";--foundry-global-font-family-arial:"Arial";--foundry-global-border-width-50:4px;--foundry-global-border-width-33:3px;--foundry-global-border-width-25:2px;--foundry-global-border-width-10:1px;--foundry-global-border-width-0:0px;--foundry-global-border-radius-pill:1000px;--foundry-global-border-radius-circle:9999px;--foundry-global-border-radius-400:32px;--foundry-global-border-radius-300:24px;--foundry-global-border-radius-200:16px;--foundry-global-border-radius-150:12px;--foundry-global-border-radius-100:8px;--foundry-global-border-radius-50:4px;--foundry-global-border-radius-25:2px;--foundry-global-border-radius-0:0px;--foundry-alias-font-line-height-body:var(--foundry-global-font-line-height-150);--foundry-alias-font-line-height-heading:var(--foundry-global-font-line-height-130);--foundry-alias-font-weight-bold:var(--foundry-global-font-weight-700);--foundry-alias-font-weight-regular:var(--foundry-global-font-weight-400);--foundry-alias-font-letter-spacing-all-caps-fallback:var(--foundry-global-font-letter-spacing-10);--foundry-alias-font-letter-spacing-all-caps-primary:var(--foundry-global-font-letter-spacing-10);--foundry-alias-font-letter-spacing-body-fallback:var(--foundry-global-font-letter-spacing-neg-33);--foundry-alias-font-letter-spacing-body-primary:var(--foundry-global-font-letter-spacing-neg-33);--foundry-alias-font-letter-spacing-heading-fallback:var(--foundry-global-font-letter-spacing-neg-33);--foundry-alias-font-letter-spacing-heading-primary:var(--foundry-global-font-letter-spacing-neg-33);--foundry-alias-font-family-code-fallback:var(--foundry-global-font-family-consolas);--foundry-alias-font-family-code-primary:var(--foundry-global-font-family-consolas);--foundry-alias-font-family-body-fallback:var(--foundry-global-font-family-arial);--foundry-alias-font-family-body-primary:var(--foundry-global-font-family-helvetica-now-text);--foundry-alias-font-family-heading-fallback:var(--foundry-global-font-family-arial);--foundry-alias-font-family-heading-primary:var(--foundry-global-font-family-helvetica-now-display);--__foundry-global-platform-scales-scale-6250:calc(500px * var(--__foundry-global-platform-scales-ratio));--__foundry-global-platform-scales-scale-5000:calc(400px * var(--__foundry-global-platform-scales-ratio));--__foundry-global-platform-scales-scale-4500:calc(360px * var(--__foundry-global-platform-scales-ratio));--__foundry-global-platform-scales-scale-4000:calc(320px * var(--__foundry-global-platform-scales-ratio));--__foundry-global-platform-scales-scale-3500:calc(280px * var(--__foundry-global-platform-scales-ratio));--__foundry-global-platform-scales-scale-3000:calc(240px * var(--__foundry-global-platform-scales-ratio));--__foundry-global-platform-scales-scale-2500:calc(200px * var(--__foundry-global-platform-scales-ratio));--__foundry-global-platform-scales-scale-2200:calc(176px * var(--__foundry-global-platform-scales-ratio));--__foundry-global-platform-scales-scale-2000:calc(160px * var(--__foundry-global-platform-scales-ratio));--__foundry-global-platform-scales-scale-1800:calc(144px * var(--__foundry-global-platform-scales-ratio));--__foundry-global-platform-scales-scale-1600:calc(128px * var(--__foundry-global-platform-scales-ratio));--__foundry-global-platform-scales-scale-1400:calc(112px * var(--__foundry-global-platform-scales-ratio));--__foundry-global-platform-scales-scale-1200:calc(96px * var(--__foundry-global-platform-scales-ratio));--__foundry-global-platform-scales-scale-1100:calc(88px * var(--__foundry-global-platform-scales-ratio));--__foundry-global-platform-scales-scale-1000:calc(80px * var(--__foundry-global-platform-scales-ratio));--__foundry-global-platform-scales-scale-900:calc(72px * var(--__foundry-global-platform-scales-ratio));--__foundry-global-platform-scales-scale-800:calc(64px * var(--__foundry-global-platform-scales-ratio));--__foundry-global-platform-scales-scale-700:calc(56px * var(--__foundry-global-platform-scales-ratio));--__foundry-global-platform-scales-scale-600:calc(48px * var(--__foundry-global-platform-scales-ratio));--__foundry-global-platform-scales-scale-500:calc(40px * var(--__foundry-global-platform-scales-ratio));--__foundry-global-platform-scales-scale-400:calc(32px * var(--__foundry-global-platform-scales-ratio));--__foundry-global-platform-scales-scale-300:calc(24px * var(--__foundry-global-platform-scales-ratio));--__foundry-global-platform-scales-scale-250:calc(20px * var(--__foundry-global-platform-scales-ratio));--__foundry-global-platform-scales-scale-225:calc(18px * var(--__foundry-global-platform-scales-ratio));--__foundry-global-platform-scales-scale-200:calc(16px * var(--__foundry-global-platform-scales-ratio));--__foundry-global-platform-scales-scale-175:calc(14px * var(--__foundry-global-platform-scales-ratio));--__foundry-global-platform-scales-scale-150:calc(12px * var(--__foundry-global-platform-scales-ratio));--__foundry-global-platform-scales-scale-100:calc(8px * var(--__foundry-global-platform-scales-ratio));--__foundry-global-platform-scales-scale-50:calc(4px * var(--__foundry-global-platform-scales-ratio));--__foundry-global-platform-scales-scale-33:calc(3px * var(--__foundry-global-platform-scales-ratio));--__foundry-global-platform-scales-scale-25:calc(2px * var(--__foundry-global-platform-scales-ratio));--__foundry-global-platform-scales-scale-10:calc(1px * var(--__foundry-global-platform-scales-ratio));--__foundry-global-platform-scales-scale-0:calc(0px * var(--__foundry-global-platform-scales-ratio));--foundry-global-font-spacing-400:var(--__foundry-global-platform-scales-scale-400);--foundry-global-font-size-1100:var(--__foundry-global-platform-scales-scale-1100);--foundry-global-font-size-1000:var(--__foundry-global-platform-scales-scale-1000);--foundry-global-font-size-900:var(--__foundry-global-platform-scales-scale-900);--foundry-global-font-size-800:var(--__foundry-global-platform-scales-scale-800);--foundry-global-font-size-700:var(--__foundry-global-platform-scales-scale-700);--foundry-global-font-size-600:var(--__foundry-global-platform-scales-scale-600);--foundry-global-font-size-500:var(--__foundry-global-platform-scales-scale-500);--foundry-global-font-size-400:var(--__foundry-global-platform-scales-scale-400);--foundry-global-font-size-300:var(--__foundry-global-platform-scales-scale-300);--foundry-global-font-size-250:var(--__foundry-global-platform-scales-scale-250);--foundry-global-font-size-225:var(--__foundry-global-platform-scales-scale-225);--foundry-global-font-size-200:var(--__foundry-global-platform-scales-scale-200);--foundry-global-font-size-175:var(--__foundry-global-platform-scales-scale-175);--foundry-global-font-size-150:var(--__foundry-global-platform-scales-scale-150);--foundry-global-spacing-dimensions-6250:var(--__foundry-global-platform-scales-scale-6250);--foundry-global-spacing-dimensions-5000:var(--__foundry-global-platform-scales-scale-5000);--foundry-global-spacing-dimensions-4500:var(--__foundry-global-platform-scales-scale-4500);--foundry-global-spacing-dimensions-4000:var(--__foundry-global-platform-scales-scale-4000);--foundry-global-spacing-dimensions-3500:var(--__foundry-global-platform-scales-scale-3500);--foundry-global-spacing-dimensions-3000:var(--__foundry-global-platform-scales-scale-3000);--foundry-global-spacing-dimensions-2500:var(--__foundry-global-platform-scales-scale-2500);--foundry-global-spacing-dimensions-2200:var(--__foundry-global-platform-scales-scale-2200);--foundry-global-spacing-dimensions-2000:var(--__foundry-global-platform-scales-scale-2000);--foundry-global-spacing-dimensions-1800:var(--__foundry-global-platform-scales-scale-1800);--foundry-global-spacing-dimensions-1600:var(--__foundry-global-platform-scales-scale-1600);--foundry-global-spacing-dimensions-1400:var(--__foundry-global-platform-scales-scale-1400);--foundry-global-spacing-dimensions-1200:var(--__foundry-global-platform-scales-scale-1200);--foundry-global-spacing-dimensions-1100:var(--__foundry-global-platform-scales-scale-1100);--foundry-global-spacing-dimensions-1000:var(--__foundry-global-platform-scales-scale-1000);--foundry-global-spacing-dimensions-900:var(--__foundry-global-platform-scales-scale-900);--foundry-global-spacing-dimensions-800:var(--__foundry-global-platform-scales-scale-800);--foundry-global-spacing-dimensions-700:var(--__foundry-global-platform-scales-scale-700);--foundry-global-spacing-dimensions-600:var(--__foundry-global-platform-scales-scale-600);--foundry-global-spacing-dimensions-500:var(--__foundry-global-platform-scales-scale-500);--foundry-global-spacing-dimensions-400:var(--__foundry-global-platform-scales-scale-400);--foundry-global-spacing-dimensions-300:var(--__foundry-global-platform-scales-scale-300);--foundry-global-spacing-dimensions-250:var(--__foundry-global-platform-scales-scale-250);--foundry-global-spacing-dimensions-200:var(--__foundry-global-platform-scales-scale-200);--foundry-global-spacing-dimensions-175:var(--__foundry-global-platform-scales-scale-175);--foundry-global-spacing-dimensions-150:var(--__foundry-global-platform-scales-scale-150);--foundry-global-spacing-dimensions-100:var(--__foundry-global-platform-scales-scale-100);--foundry-global-spacing-dimensions-50:var(--__foundry-global-platform-scales-scale-50);--foundry-global-spacing-dimensions-25:var(--__foundry-global-platform-scales-scale-25);--foundry-global-spacing-gap-1600:var(--__foundry-global-platform-scales-scale-1600);--foundry-global-spacing-gap-1400:var(--__foundry-global-platform-scales-scale-1400);--foundry-global-spacing-gap-1200:var(--__foundry-global-platform-scales-scale-1200);--foundry-global-spacing-gap-1100:var(--__foundry-global-platform-scales-scale-1100);--foundry-global-spacing-gap-1000:var(--__foundry-global-platform-scales-scale-1000);--foundry-global-spacing-gap-900:var(--__foundry-global-platform-scales-scale-900);--foundry-global-spacing-gap-800:var(--__foundry-global-platform-scales-scale-800);--foundry-global-spacing-gap-700:var(--__foundry-global-platform-scales-scale-700);--foundry-global-spacing-gap-600:var(--__foundry-global-platform-scales-scale-600);--foundry-global-spacing-gap-500:var(--__foundry-global-platform-scales-scale-500);--foundry-global-spacing-gap-400:var(--__foundry-global-platform-scales-scale-400);--foundry-global-spacing-gap-300:var(--__foundry-global-platform-scales-scale-300);--foundry-global-spacing-gap-250:var(--__foundry-global-platform-scales-scale-250);--foundry-global-spacing-gap-200:var(--__foundry-global-platform-scales-scale-200);--foundry-global-spacing-gap-175:var(--__foundry-global-platform-scales-scale-175);--foundry-global-spacing-gap-150:var(--__foundry-global-platform-scales-scale-150);--foundry-global-spacing-gap-100:var(--__foundry-global-platform-scales-scale-100);--foundry-global-spacing-gap-50:var(--__foundry-global-platform-scales-scale-50);--foundry-global-spacing-gap-25:var(--__foundry-global-platform-scales-scale-25);--foundry-alias-font-size-body-code:var(--foundry-global-font-size-200);--foundry-alias-font-size-body-all-caps:var(--foundry-global-font-size-150);--foundry-alias-font-size-body-metadata:var(--foundry-global-font-size-150);--foundry-alias-font-size-body-caption:var(--foundry-global-font-size-175);--foundry-alias-font-size-body-paragraph:var(--foundry-global-font-size-200);--foundry-alias-font-size-heading-06:var(--foundry-global-font-size-250);--foundry-alias-font-size-heading-05:var(--foundry-global-font-size-250);--foundry-alias-font-size-heading-04:var(--foundry-global-font-size-300);--foundry-alias-font-size-heading-03:var(--foundry-global-font-size-400);--foundry-alias-font-size-heading-02:var(--foundry-global-font-size-500);--foundry-alias-font-size-heading-01:var(--foundry-global-font-size-700);--foundry-alias-font-spacing-paragraph:var(--foundry-global-font-spacing-400)}', "", {
        version: 3,
        sources: ["webpack://./../../../../node_modules/@foundry/tokens/dist/css/common.css"],
        names: [],
        mappings: "AAKA,MACE,0CAA2C,CAC3C,0CAA2C,CAC3C,+CAAgD,CAChD,iDAAkD,CAClD,4CAA6C,CAC7C,0CAA2C,CAC3C,yCAA0C,CAC1C,oCAAqC,CACrC,oCAAqC,CACrC,gDAAiD,CACjD,oEAAqE,CACrE,0EAA2E,CAC3E,0CAA2C,CAC3C,oCAAqC,CACrC,oCAAqC,CACrC,oCAAqC,CACrC,oCAAqC,CACrC,mCAAoC,CACpC,0CAA2C,CAC3C,4CAA6C,CAC7C,uCAAwC,CACxC,uCAAwC,CACxC,uCAAwC,CACxC,uCAAwC,CACxC,sCAAuC,CACvC,qCAAsC,CACtC,qCAAsC,CACtC,oCAAqC,CACrC,gFAAiF,CACjF,mFAAoF,CACpF,sEAAuE,CACvE,yEAA0E,CAC1E,kGAAmG,CACnG,iGAAkG,CAClG,kGAAmG,CACnG,iGAAkG,CAClG,qGAAsG,CACtG,oGAAqG,CACrG,oFAAqF,CACrF,mFAAoF,CACpF,iFAAkF,CAClF,6FAA8F,CAC9F,oFAAqF,CACrF,mGAAoG,CACpG,yGAA0G,CAC1G,yGAA0G,CAC1G,yGAA0G,CAC1G,yGAA0G,CAC1G,yGAA0G,CAC1G,yGAA0G,CAC1G,yGAA0G,CAC1G,yGAA0G,CAC1G,yGAA0G,CAC1G,yGAA0G,CAC1G,yGAA0G,CAC1G,yGAA0G,CAC1G,wGAAyG,CACzG,wGAAyG,CACzG,wGAAyG,CACzG,uGAAwG,CACxG,uGAAwG,CACxG,uGAAwG,CACxG,uGAAwG,CACxG,uGAAwG,CACxG,uGAAwG,CACxG,uGAAwG,CACxG,uGAAwG,CACxG,uGAAwG,CACxG,uGAAwG,CACxG,uGAAwG,CACxG,uGAAwG,CACxG,sGAAuG,CACvG,qGAAsG,CACtG,qGAAsG,CACtG,qGAAsG,CACtG,qGAAsG,CACtG,oGAAqG,CACrG,mFAAoF,CACpF,kFAAmF,CACnF,kFAAmF,CACnF,gFAAiF,CACjF,gFAAiF,CACjF,gFAAiF,CACjF,gFAAiF,CACjF,gFAAiF,CACjF,gFAAiF,CACjF,gFAAiF,CACjF,gFAAiF,CACjF,gFAAiF,CACjF,gFAAiF,CACjF,gFAAiF,CACjF,gFAAiF,CACjF,2FAA4F,CAC5F,2FAA4F,CAC5F,2FAA4F,CAC5F,2FAA4F,CAC5F,2FAA4F,CAC5F,2FAA4F,CAC5F,2FAA4F,CAC5F,2FAA4F,CAC5F,2FAA4F,CAC5F,2FAA4F,CAC5F,2FAA4F,CAC5F,2FAA4F,CAC5F,2FAA4F,CAC5F,2FAA4F,CAC5F,2FAA4F,CAC5F,yFAA0F,CAC1F,yFAA0F,CAC1F,yFAA0F,CAC1F,yFAA0F,CAC1F,yFAA0F,CAC1F,yFAA0F,CAC1F,yFAA0F,CAC1F,yFAA0F,CAC1F,yFAA0F,CAC1F,yFAA0F,CAC1F,yFAA0F,CAC1F,yFAA0F,CAC1F,uFAAwF,CACxF,uFAAwF,CACxF,oFAAqF,CACrF,oFAAqF,CACrF,oFAAqF,CACrF,oFAAqF,CACrF,oFAAqF,CACrF,kFAAmF,CACnF,kFAAmF,CACnF,kFAAmF,CACnF,kFAAmF,CACnF,kFAAmF,CACnF,kFAAmF,CACnF,kFAAmF,CACnF,kFAAmF,CACnF,kFAAmF,CACnF,kFAAmF,CACnF,kFAAmF,CACnF,kFAAmF,CACnF,gFAAiF,CACjF,gFAAiF,CACjF,uEAAwE,CACxE,2EAA4E,CAC5E,2EAA4E,CAC5E,0EAA2E,CAC3E,4EAA6E,CAC7E,wEAAyE,CACzE,wEAAyE,CACzE,wEAAyE,CACzE,wEAAyE,CACzE,wEAAyE,CACzE,wEAAyE,CACzE,6EACF",
        sourcesContent: ['/**\n * Do not edit directly\n * Generated on Thu, 08 Aug 2024 09:34:15 GMT\n */\n\n:root {\n  --foundry-global-font-line-height-150: 150%;\n  --foundry-global-font-line-height-130: 130%;\n  --foundry-global-font-letter-spacing-neg-10: -1%;\n  --foundry-global-font-letter-spacing-neg-33: -2.5%;\n  --foundry-global-font-letter-spacing-33: 2.5%;\n  --foundry-global-font-letter-spacing-10: 1%;\n  --foundry-global-font-letter-spacing-0: 0%;\n  --foundry-global-font-weight-700: 700;\n  --foundry-global-font-weight-400: 400;\n  --foundry-global-font-family-consolas: "Consolas";\n  --foundry-global-font-family-helvetica-now-text: "Helvetica Now Text";\n  --foundry-global-font-family-helvetica-now-display: "Helvetica Now Display";\n  --foundry-global-font-family-arial: "Arial";\n  --foundry-global-border-width-50: 4px;\n  --foundry-global-border-width-33: 3px;\n  --foundry-global-border-width-25: 2px;\n  --foundry-global-border-width-10: 1px;\n  --foundry-global-border-width-0: 0px;\n  --foundry-global-border-radius-pill: 1000px;\n  --foundry-global-border-radius-circle: 9999px;\n  --foundry-global-border-radius-400: 32px;\n  --foundry-global-border-radius-300: 24px;\n  --foundry-global-border-radius-200: 16px;\n  --foundry-global-border-radius-150: 12px;\n  --foundry-global-border-radius-100: 8px;\n  --foundry-global-border-radius-50: 4px;\n  --foundry-global-border-radius-25: 2px;\n  --foundry-global-border-radius-0: 0px;\n  --foundry-alias-font-line-height-body: var(--foundry-global-font-line-height-150);\n  --foundry-alias-font-line-height-heading: var(--foundry-global-font-line-height-130);\n  --foundry-alias-font-weight-bold: var(--foundry-global-font-weight-700);\n  --foundry-alias-font-weight-regular: var(--foundry-global-font-weight-400);\n  --foundry-alias-font-letter-spacing-all-caps-fallback: var(--foundry-global-font-letter-spacing-10);\n  --foundry-alias-font-letter-spacing-all-caps-primary: var(--foundry-global-font-letter-spacing-10);\n  --foundry-alias-font-letter-spacing-body-fallback: var(--foundry-global-font-letter-spacing-neg-33);\n  --foundry-alias-font-letter-spacing-body-primary: var(--foundry-global-font-letter-spacing-neg-33);\n  --foundry-alias-font-letter-spacing-heading-fallback: var(--foundry-global-font-letter-spacing-neg-33);\n  --foundry-alias-font-letter-spacing-heading-primary: var(--foundry-global-font-letter-spacing-neg-33);\n  --foundry-alias-font-family-code-fallback: var(--foundry-global-font-family-consolas);\n  --foundry-alias-font-family-code-primary: var(--foundry-global-font-family-consolas);\n  --foundry-alias-font-family-body-fallback: var(--foundry-global-font-family-arial);\n  --foundry-alias-font-family-body-primary: var(--foundry-global-font-family-helvetica-now-text);\n  --foundry-alias-font-family-heading-fallback: var(--foundry-global-font-family-arial);\n  --foundry-alias-font-family-heading-primary: var(--foundry-global-font-family-helvetica-now-display);\n  --__foundry-global-platform-scales-scale-6250: calc(500px * var(--__foundry-global-platform-scales-ratio));\n  --__foundry-global-platform-scales-scale-5000: calc(400px * var(--__foundry-global-platform-scales-ratio));\n  --__foundry-global-platform-scales-scale-4500: calc(360px * var(--__foundry-global-platform-scales-ratio));\n  --__foundry-global-platform-scales-scale-4000: calc(320px * var(--__foundry-global-platform-scales-ratio));\n  --__foundry-global-platform-scales-scale-3500: calc(280px * var(--__foundry-global-platform-scales-ratio));\n  --__foundry-global-platform-scales-scale-3000: calc(240px * var(--__foundry-global-platform-scales-ratio));\n  --__foundry-global-platform-scales-scale-2500: calc(200px * var(--__foundry-global-platform-scales-ratio));\n  --__foundry-global-platform-scales-scale-2200: calc(176px * var(--__foundry-global-platform-scales-ratio));\n  --__foundry-global-platform-scales-scale-2000: calc(160px * var(--__foundry-global-platform-scales-ratio));\n  --__foundry-global-platform-scales-scale-1800: calc(144px * var(--__foundry-global-platform-scales-ratio));\n  --__foundry-global-platform-scales-scale-1600: calc(128px * var(--__foundry-global-platform-scales-ratio));\n  --__foundry-global-platform-scales-scale-1400: calc(112px * var(--__foundry-global-platform-scales-ratio));\n  --__foundry-global-platform-scales-scale-1200: calc(96px * var(--__foundry-global-platform-scales-ratio));\n  --__foundry-global-platform-scales-scale-1100: calc(88px * var(--__foundry-global-platform-scales-ratio));\n  --__foundry-global-platform-scales-scale-1000: calc(80px * var(--__foundry-global-platform-scales-ratio));\n  --__foundry-global-platform-scales-scale-900: calc(72px * var(--__foundry-global-platform-scales-ratio));\n  --__foundry-global-platform-scales-scale-800: calc(64px * var(--__foundry-global-platform-scales-ratio));\n  --__foundry-global-platform-scales-scale-700: calc(56px * var(--__foundry-global-platform-scales-ratio));\n  --__foundry-global-platform-scales-scale-600: calc(48px * var(--__foundry-global-platform-scales-ratio));\n  --__foundry-global-platform-scales-scale-500: calc(40px * var(--__foundry-global-platform-scales-ratio));\n  --__foundry-global-platform-scales-scale-400: calc(32px * var(--__foundry-global-platform-scales-ratio));\n  --__foundry-global-platform-scales-scale-300: calc(24px * var(--__foundry-global-platform-scales-ratio));\n  --__foundry-global-platform-scales-scale-250: calc(20px * var(--__foundry-global-platform-scales-ratio));\n  --__foundry-global-platform-scales-scale-225: calc(18px * var(--__foundry-global-platform-scales-ratio));\n  --__foundry-global-platform-scales-scale-200: calc(16px * var(--__foundry-global-platform-scales-ratio));\n  --__foundry-global-platform-scales-scale-175: calc(14px * var(--__foundry-global-platform-scales-ratio));\n  --__foundry-global-platform-scales-scale-150: calc(12px * var(--__foundry-global-platform-scales-ratio));\n  --__foundry-global-platform-scales-scale-100: calc(8px * var(--__foundry-global-platform-scales-ratio));\n  --__foundry-global-platform-scales-scale-50: calc(4px * var(--__foundry-global-platform-scales-ratio));\n  --__foundry-global-platform-scales-scale-33: calc(3px * var(--__foundry-global-platform-scales-ratio));\n  --__foundry-global-platform-scales-scale-25: calc(2px * var(--__foundry-global-platform-scales-ratio));\n  --__foundry-global-platform-scales-scale-10: calc(1px * var(--__foundry-global-platform-scales-ratio));\n  --__foundry-global-platform-scales-scale-0: calc(0px * var(--__foundry-global-platform-scales-ratio));\n  --foundry-global-font-spacing-400: var(--__foundry-global-platform-scales-scale-400);\n  --foundry-global-font-size-1100: var(--__foundry-global-platform-scales-scale-1100);\n  --foundry-global-font-size-1000: var(--__foundry-global-platform-scales-scale-1000);\n  --foundry-global-font-size-900: var(--__foundry-global-platform-scales-scale-900);\n  --foundry-global-font-size-800: var(--__foundry-global-platform-scales-scale-800);\n  --foundry-global-font-size-700: var(--__foundry-global-platform-scales-scale-700);\n  --foundry-global-font-size-600: var(--__foundry-global-platform-scales-scale-600);\n  --foundry-global-font-size-500: var(--__foundry-global-platform-scales-scale-500);\n  --foundry-global-font-size-400: var(--__foundry-global-platform-scales-scale-400);\n  --foundry-global-font-size-300: var(--__foundry-global-platform-scales-scale-300);\n  --foundry-global-font-size-250: var(--__foundry-global-platform-scales-scale-250);\n  --foundry-global-font-size-225: var(--__foundry-global-platform-scales-scale-225);\n  --foundry-global-font-size-200: var(--__foundry-global-platform-scales-scale-200);\n  --foundry-global-font-size-175: var(--__foundry-global-platform-scales-scale-175);\n  --foundry-global-font-size-150: var(--__foundry-global-platform-scales-scale-150);\n  --foundry-global-spacing-dimensions-6250: var(--__foundry-global-platform-scales-scale-6250);\n  --foundry-global-spacing-dimensions-5000: var(--__foundry-global-platform-scales-scale-5000);\n  --foundry-global-spacing-dimensions-4500: var(--__foundry-global-platform-scales-scale-4500);\n  --foundry-global-spacing-dimensions-4000: var(--__foundry-global-platform-scales-scale-4000);\n  --foundry-global-spacing-dimensions-3500: var(--__foundry-global-platform-scales-scale-3500);\n  --foundry-global-spacing-dimensions-3000: var(--__foundry-global-platform-scales-scale-3000);\n  --foundry-global-spacing-dimensions-2500: var(--__foundry-global-platform-scales-scale-2500);\n  --foundry-global-spacing-dimensions-2200: var(--__foundry-global-platform-scales-scale-2200);\n  --foundry-global-spacing-dimensions-2000: var(--__foundry-global-platform-scales-scale-2000);\n  --foundry-global-spacing-dimensions-1800: var(--__foundry-global-platform-scales-scale-1800);\n  --foundry-global-spacing-dimensions-1600: var(--__foundry-global-platform-scales-scale-1600);\n  --foundry-global-spacing-dimensions-1400: var(--__foundry-global-platform-scales-scale-1400);\n  --foundry-global-spacing-dimensions-1200: var(--__foundry-global-platform-scales-scale-1200);\n  --foundry-global-spacing-dimensions-1100: var(--__foundry-global-platform-scales-scale-1100);\n  --foundry-global-spacing-dimensions-1000: var(--__foundry-global-platform-scales-scale-1000);\n  --foundry-global-spacing-dimensions-900: var(--__foundry-global-platform-scales-scale-900);\n  --foundry-global-spacing-dimensions-800: var(--__foundry-global-platform-scales-scale-800);\n  --foundry-global-spacing-dimensions-700: var(--__foundry-global-platform-scales-scale-700);\n  --foundry-global-spacing-dimensions-600: var(--__foundry-global-platform-scales-scale-600);\n  --foundry-global-spacing-dimensions-500: var(--__foundry-global-platform-scales-scale-500);\n  --foundry-global-spacing-dimensions-400: var(--__foundry-global-platform-scales-scale-400);\n  --foundry-global-spacing-dimensions-300: var(--__foundry-global-platform-scales-scale-300);\n  --foundry-global-spacing-dimensions-250: var(--__foundry-global-platform-scales-scale-250);\n  --foundry-global-spacing-dimensions-200: var(--__foundry-global-platform-scales-scale-200);\n  --foundry-global-spacing-dimensions-175: var(--__foundry-global-platform-scales-scale-175);\n  --foundry-global-spacing-dimensions-150: var(--__foundry-global-platform-scales-scale-150);\n  --foundry-global-spacing-dimensions-100: var(--__foundry-global-platform-scales-scale-100);\n  --foundry-global-spacing-dimensions-50: var(--__foundry-global-platform-scales-scale-50);\n  --foundry-global-spacing-dimensions-25: var(--__foundry-global-platform-scales-scale-25);\n  --foundry-global-spacing-gap-1600: var(--__foundry-global-platform-scales-scale-1600);\n  --foundry-global-spacing-gap-1400: var(--__foundry-global-platform-scales-scale-1400);\n  --foundry-global-spacing-gap-1200: var(--__foundry-global-platform-scales-scale-1200);\n  --foundry-global-spacing-gap-1100: var(--__foundry-global-platform-scales-scale-1100);\n  --foundry-global-spacing-gap-1000: var(--__foundry-global-platform-scales-scale-1000);\n  --foundry-global-spacing-gap-900: var(--__foundry-global-platform-scales-scale-900);\n  --foundry-global-spacing-gap-800: var(--__foundry-global-platform-scales-scale-800);\n  --foundry-global-spacing-gap-700: var(--__foundry-global-platform-scales-scale-700);\n  --foundry-global-spacing-gap-600: var(--__foundry-global-platform-scales-scale-600);\n  --foundry-global-spacing-gap-500: var(--__foundry-global-platform-scales-scale-500);\n  --foundry-global-spacing-gap-400: var(--__foundry-global-platform-scales-scale-400);\n  --foundry-global-spacing-gap-300: var(--__foundry-global-platform-scales-scale-300);\n  --foundry-global-spacing-gap-250: var(--__foundry-global-platform-scales-scale-250);\n  --foundry-global-spacing-gap-200: var(--__foundry-global-platform-scales-scale-200);\n  --foundry-global-spacing-gap-175: var(--__foundry-global-platform-scales-scale-175);\n  --foundry-global-spacing-gap-150: var(--__foundry-global-platform-scales-scale-150);\n  --foundry-global-spacing-gap-100: var(--__foundry-global-platform-scales-scale-100);\n  --foundry-global-spacing-gap-50: var(--__foundry-global-platform-scales-scale-50);\n  --foundry-global-spacing-gap-25: var(--__foundry-global-platform-scales-scale-25);\n  --foundry-alias-font-size-body-code: var(--foundry-global-font-size-200);\n  --foundry-alias-font-size-body-all-caps: var(--foundry-global-font-size-150);\n  --foundry-alias-font-size-body-metadata: var(--foundry-global-font-size-150);\n  --foundry-alias-font-size-body-caption: var(--foundry-global-font-size-175);\n  --foundry-alias-font-size-body-paragraph: var(--foundry-global-font-size-200);\n  --foundry-alias-font-size-heading-06: var(--foundry-global-font-size-250);\n  --foundry-alias-font-size-heading-05: var(--foundry-global-font-size-250);\n  --foundry-alias-font-size-heading-04: var(--foundry-global-font-size-300);\n  --foundry-alias-font-size-heading-03: var(--foundry-global-font-size-400);\n  --foundry-alias-font-size-heading-02: var(--foundry-global-font-size-500);\n  --foundry-alias-font-size-heading-01: var(--foundry-global-font-size-700);\n  --foundry-alias-font-spacing-paragraph: var(--foundry-global-font-spacing-400);\n}\n'],
        sourceRoot: ""
      }]), f.locals = {};
      const e = f
    },
    22758: (a, l, o) => {
      o.d(l, {
        A: () => e
      });
      var r = o(42587),
        n = o.n(r),
        s = o(15081),
        f = o.n(s)()(n());
      f.push([a.id, ":root{--__foundry-global-platform-scales-ratio:1}", "", {
        version: 3,
        sources: ["webpack://./../../../../node_modules/@foundry/tokens/dist/css/mobile.css"],
        names: [],
        mappings: "AAKA,MACE,0CACF",
        sourcesContent: ["/**\n * Do not edit directly\n * Generated on Thu, 08 Aug 2024 09:34:15 GMT\n */\n\n:root {\n  --__foundry-global-platform-scales-ratio: 1;\n}\n"],
        sourceRoot: ""
      }]), f.locals = {};
      const e = f
    }
  }
]);