! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "81932b4b-dfc0-4879-a7f6-6a16313069f1", e._sentryDebugIdIdentifier = "sentry-dbid-81932b4b-dfc0-4879-a7f6-6a16313069f1")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "692b6956abd6177da3ac6da14c81527e5159ed6d",
  packageName: "@rockstargames/utils",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "692b6956abd6177da3ac6da14c81527e5159ed6d"
}, (self.webpackChunk_rockstargames_utils = self.webpackChunk_rockstargames_utils || []).push([
  [908], {
    464: (e, a, t) => {
      var d, n = (d = t(616)) && d.__esModule ? d : {
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
    912: (e, a, t) => {
      var d, n = (d = t(464)) && d.__esModule ? d : {
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
              u = void 0 === l ? "" : l,
              c = this.gtm({
                id: a,
                events: d,
                dataLayer: n || void 0,
                dataLayerName: i,
                auth: s,
                preview: u
              });
            n && document.head.appendChild(c.dataScript), document.head.insertBefore(c.script(), document.head.childNodes[0]), document.body.insertBefore(c.noScript(), document.body.childNodes[0])
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
    908: (e, a, t) => {
      var d, n = (d = t(912)) && d.__esModule ? d : {
        default: d
      };
      e.exports = n.default
    },
    616: (e, a) => {
      Object.defineProperty(a, "__esModule", {
        value: !0
      }), a.default = function(e) {
        console.warn("[react-gtm]", e)
      }
    }
  }
]);
//# sourceMappingURL=7f73e89c81b2815dad46c84cda0c6eed.js.map