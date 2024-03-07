! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "9dd5953d-9979-4721-b68d-bb44f5a588ac", e._sentryDebugIdIdentifier = "sentry-dbid-9dd5953d-9979-4721-b68d-bb44f5a588ac")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "63eddca94fa9726ada78d0c14030f13fd7020af7",
  packageName: "@rockstargames/utils",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "63eddca94fa9726ada78d0c14030f13fd7020af7"
}, (self.webpackChunk_rockstargames_utils = self.webpackChunk_rockstargames_utils || []).push([
  [408], {
    748: (e, a, t) => {
      var d, n = (d = t(120)) && d.__esModule ? d : {
          default: d
        },
        r = {
          tags: function(e) {
            var a = e.id,
              t = e.events,
              d = e.dataLayer,
              r = e.dataLayerName,
              i = e.preview,
              o = "&gtm_auth=" + e.auth,
              s = "&gtm_preview=" + i;
            return a || (0, n.default)("GTM Id is required"), {
              iframe: '\n      <iframe src="https://www.googletagmanager.com/ns.html?id=' + a + o + s + '&gtm_cookies_win=x"\n        height="0" width="0" style="display:none;visibility:hidden" id="tag-manager"></iframe>',
              script: "\n      (function(w,d,s,l,i){w[l]=w[l]||[];\n        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js', " + JSON.stringify(t).slice(1, -1) + "});\n        var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';\n        j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl+'" + o + s + "&gtm_cookies_win=x';\n        f.parentNode.insertBefore(j,f);\n      })(window,document,'script','" + r + "','" + a + "');",
              dataLayerVar: this.dataLayer(d, r)
            }
          },
          dataLayer: function(e, a) {
            return "\n      window." + a + " = window." + a + " || [];\n      window." + a + ".push(" + JSON.stringify(e) + ")"
          }
        };
      e.exports = r
    },
    776: (e, a, t) => {
      var d, n = (d = t(748)) && d.__esModule ? d : {
          default: d
        },
        r = {
          dataScript: function(e) {
            var a = document.createElement("script");
            return a.innerHTML = e, a
          },
          gtm: function(e) {
            var a = n.default.tags(e);
            return {
              noScript: function() {
                var e = document.createElement("noscript");
                return e.innerHTML = a.iframe, e
              },
              script: function() {
                var e = document.createElement("script");
                return e.innerHTML = a.script, e
              },
              dataScript: this.dataScript(a.dataLayerVar)
            }
          },
          initialize: function(e) {
            var a = e.gtmId,
              t = e.events,
              d = void 0 === t ? {} : t,
              n = e.dataLayer,
              r = e.dataLayerName,
              i = void 0 === r ? "dataLayer" : r,
              o = e.auth,
              s = void 0 === o ? "" : o,
              l = e.preview,
              f = void 0 === l ? "" : l,
              u = this.gtm({
                id: a,
                events: d,
                dataLayer: n || void 0,
                dataLayerName: i,
                auth: s,
                preview: f
              });
            n && document.head.appendChild(u.dataScript), document.head.insertBefore(u.script(), document.head.childNodes[0]), document.body.insertBefore(u.noScript(), document.body.childNodes[0])
          },
          dataLayer: function(e) {
            var a = e.dataLayer,
              t = e.dataLayerName,
              d = void 0 === t ? "dataLayer" : t;
            if (window[d]) return window[d].push(a);
            var r = n.default.dataLayer(a, d),
              i = this.dataScript(r);
            document.head.insertBefore(i, document.head.childNodes[0])
          }
        };
      e.exports = r
    },
    408: (e, a, t) => {
      var d, n = (d = t(776)) && d.__esModule ? d : {
        default: d
      };
      e.exports = n.default
    },
    120: (e, a) => {
      Object.defineProperty(a, "__esModule", {
        value: !0
      }), a.default = function(e) {
        console.warn("[react-gtm]", e)
      }
    }
  }
]);
//# sourceMappingURL=b0c2d8a15caa9234006103a4a94281d4.js.map