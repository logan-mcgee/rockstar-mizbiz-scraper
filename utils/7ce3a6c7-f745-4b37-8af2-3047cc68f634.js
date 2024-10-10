! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "7ce3a6c7-f745-4b37-8af2-3047cc68f634", e._sentryDebugIdIdentifier = "sentry-dbid-7ce3a6c7-f745-4b37-8af2-3047cc68f634")
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
    2522: (e, a, t) => {
      var d, n = (d = t(3102)) && d.__esModule ? d : {
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
    8295: (e, a, t) => {
      var d, n = (d = t(2522)) && d.__esModule ? d : {
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
              c = e.preview,
              l = void 0 === c ? "" : c,
              u = this.gtm({
                id: a,
                events: d,
                dataLayer: n || void 0,
                dataLayerName: i,
                auth: s,
                preview: l
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
    714: (e, a, t) => {
      var d, n = (d = t(8295)) && d.__esModule ? d : {
        default: d
      };
      e.exports = n.default
    },
    3102: (e, a) => {
      Object.defineProperty(a, "__esModule", {
        value: !0
      }), a.default = function(e) {
        console.warn("[react-gtm]", e)
      }
    }
  }
]);