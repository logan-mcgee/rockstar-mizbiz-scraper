! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "7ce3a6c7-f745-4b37-8af2-3047cc68f634", e._sentryDebugIdIdentifier = "sentry-dbid-7ce3a6c7-f745-4b37-8af2-3047cc68f634")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/utils",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_utils = self.webpackChunk_rockstargames_utils || []).push([
  [714], {
    2522: (e, t, a) => {
      var n, d = (n = a(3102)) && n.__esModule ? n : {
          default: n
        },
        r = {
          tags: function(e) {
            var t = e.id,
              a = e.events,
              n = e.dataLayer,
              r = e.dataLayerName,
              i = e.preview,
              o = "&gtm_auth=" + e.auth,
              s = "&gtm_preview=" + i;
            return t || (0, d.default)("GTM Id is required"), {
              iframe: '\n      <iframe src="https://www.googletagmanager.com/ns.html?id=' + t + o + s + '&gtm_cookies_win=x"\n        height="0" width="0" style="display:none;visibility:hidden" id="tag-manager"></iframe>',
              script: "\n      (function(w,d,s,l,i){w[l]=w[l]||[];\n        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js', " + JSON.stringify(a).slice(1, -1) + "});\n        var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';\n        j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl+'" + o + s + "&gtm_cookies_win=x';\n        f.parentNode.insertBefore(j,f);\n      })(window,document,'script','" + r + "','" + t + "');",
              dataLayerVar: this.dataLayer(n, r)
            }
          },
          dataLayer: function(e, t) {
            return "\n      window." + t + " = window." + t + " || [];\n      window." + t + ".push(" + JSON.stringify(e) + ")"
          }
        };
      e.exports = r
    },
    8295: (e, t, a) => {
      var n, d = (n = a(2522)) && n.__esModule ? n : {
          default: n
        },
        r = {
          dataScript: function(e) {
            var t = document.createElement("script");
            return t.innerHTML = e, t
          },
          gtm: function(e) {
            var t = d.default.tags(e);
            return {
              noScript: function() {
                var e = document.createElement("noscript");
                return e.innerHTML = t.iframe, e
              },
              script: function() {
                var e = document.createElement("script");
                return e.innerHTML = t.script, e
              },
              dataScript: this.dataScript(t.dataLayerVar)
            }
          },
          initialize: function(e) {
            var t = e.gtmId,
              a = e.events,
              n = void 0 === a ? {} : a,
              d = e.dataLayer,
              r = e.dataLayerName,
              i = void 0 === r ? "dataLayer" : r,
              o = e.auth,
              s = void 0 === o ? "" : o,
              l = e.preview,
              c = void 0 === l ? "" : l,
              f = this.gtm({
                id: t,
                events: n,
                dataLayer: d || void 0,
                dataLayerName: i,
                auth: s,
                preview: c
              });
            d && document.head.appendChild(f.dataScript), document.head.insertBefore(f.script(), document.head.childNodes[0]), document.body.insertBefore(f.noScript(), document.body.childNodes[0])
          },
          dataLayer: function(e) {
            var t = e.dataLayer,
              a = e.dataLayerName,
              n = void 0 === a ? "dataLayer" : a;
            if (window[n]) return window[n].push(t);
            var r = d.default.dataLayer(t, n),
              i = this.dataScript(r);
            document.head.insertBefore(i, document.head.childNodes[0])
          }
        };
      e.exports = r
    },
    714: (e, t, a) => {
      var n, d = (n = a(8295)) && n.__esModule ? n : {
        default: n
      };
      e.exports = d.default
    },
    3102: (e, t) => {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = function(e) {
        console.warn("[react-gtm]", e)
      }
    }
  }
]);