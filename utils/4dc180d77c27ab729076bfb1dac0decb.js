/*! For license information please see 4dc180d77c27ab729076bfb1dac0decb.js.LICENSE.txt */
"use strict";
(self.webpackChunk_rockstargames_utils = self.webpackChunk_rockstargames_utils || []).push([
  [269], {
    634: (e, t, a) => {
      var r, n = (r = a(571)) && r.__esModule ? r : {
          default: r
        },
        i = {
          tags: function(e) {
            var t = e.id,
              a = e.events,
              r = e.dataLayer,
              i = e.dataLayerName,
              o = e.preview,
              d = "&gtm_auth=" + e.auth,
              s = "&gtm_preview=" + o;
            return t || (0, n.default)("GTM Id is required"), {
              iframe: '\n      <iframe src="https://www.googletagmanager.com/ns.html?id=' + t + d + s + '&gtm_cookies_win=x"\n        height="0" width="0" style="display:none;visibility:hidden" id="tag-manager"></iframe>',
              script: "\n      (function(w,d,s,l,i){w[l]=w[l]||[];\n        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js', " + JSON.stringify(a).slice(1, -1) + "});\n        var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';\n        j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl+'" + d + s + "&gtm_cookies_win=x';\n        f.parentNode.insertBefore(j,f);\n      })(window,document,'script','" + i + "','" + t + "');",
              dataLayerVar: this.dataLayer(r, i)
            }
          },
          dataLayer: function(e, t) {
            return "\n      window." + t + " = window." + t + " || [];\n      window." + t + ".push(" + JSON.stringify(e) + ")"
          }
        };
      e.exports = i
    },
    653: (e, t, a) => {
      var r, n = (r = a(634)) && r.__esModule ? r : {
          default: r
        },
        i = {
          dataScript: function(e) {
            var t = document.createElement("script");
            return t.innerHTML = e, t
          },
          gtm: function(e) {
            var t = n.default.tags(e);
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
              r = void 0 === a ? {} : a,
              n = e.dataLayer,
              i = e.dataLayerName,
              o = void 0 === i ? "dataLayer" : i,
              d = e.auth,
              s = void 0 === d ? "" : d,
              c = e.preview,
              u = void 0 === c ? "" : c,
              l = this.gtm({
                id: t,
                events: r,
                dataLayer: n || void 0,
                dataLayerName: o,
                auth: s,
                preview: u
              });
            n && document.head.appendChild(l.dataScript), document.head.insertBefore(l.script(), document.head.childNodes[0]), document.body.insertBefore(l.noScript(), document.body.childNodes[0])
          },
          dataLayer: function(e) {
            var t = e.dataLayer,
              a = e.dataLayerName,
              r = void 0 === a ? "dataLayer" : a;
            if (window[r]) return window[r].push(t);
            var i = n.default.dataLayer(t, r),
              o = this.dataScript(i);
            document.head.insertBefore(o, document.head.childNodes[0])
          }
        };
      e.exports = i
    },
    629: (e, t, a) => {
      var r, n = (r = a(653)) && r.__esModule ? r : {
        default: r
      };
      e.exports = n.default
    },
    571: (e, t) => {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = function(e) {
        console.warn("[react-gtm]", e)
      }
    },
    32: (e, t, a) => {
      var r = a(927),
        n = Symbol.for("react.element"),
        i = (Symbol.for("react.fragment"), Object.prototype.hasOwnProperty),
        o = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        d = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };
      t.jsx = function(e, t, a) {
        var r, s = {},
          c = null,
          u = null;
        for (r in void 0 !== a && (c = "" + a), void 0 !== t.key && (c = "" + t.key), void 0 !== t.ref && (u = t.ref), t) i.call(t, r) && !d.hasOwnProperty(r) && (s[r] = t[r]);
        if (e && e.defaultProps)
          for (r in t = e.defaultProps) void 0 === s[r] && (s[r] = t[r]);
        return {
          $$typeof: n,
          type: e,
          key: c,
          ref: u,
          props: s,
          _owner: o.current
        }
      }
    },
    705: (e, t, a) => {
      e.exports = a(32)
    },
    269: (e, t, a) => {
      a.r(t), a.d(t, {
        TagManager: () => n(),
        init: () => u,
        track: () => i.Z,
        withAutoRouteTracking: () => c
      });
      var r = a(629),
        n = a.n(r),
        i = a(9),
        o = a(927),
        d = a(375),
        s = a(705);
      const c = e => t => ((e, t) => {
          const {
            pathname: a
          } = (0, d.useLocation)();
          return (0, o.useEffect)((() => {
            (0, i.Z)({
              event: "trackPageview"
            })
          }), [a]), (0, s.jsx)(e, {
            ...t
          })
        })(e, t),
        u = e => {
          let {
            id: t
          } = e;
          if (!t) return;
          const a = {
            gtmId: t
          };
          n().initialize(a)
        }
    },
    9: (e, t, a) => {
      a.d(t, {
        Z: () => c
      });
      var r = a(629),
        n = a.n(r);
      const i = [{
          id: "prod",
          sites: {
            www: "www",
            socialClub: "socialclub",
            support: "support",
            store: "store"
          },
          cookieIdentifier: "prod"
        }],
        o = (() => {
          let e;
          const {
            location: t
          } = window, a = t.hostname.substring(0, t.hostname.indexOf(".rockstargames.com")), r = i.findIndex((t => Object.entries(t.sites).findIndex((t => {
            let [r, n] = t;
            return n === a && (e = {
              site: r,
              subDomain: n
            }, !0)
          })) >= 0));
          return {
            ...i[r >= 0 ? r : 0],
            currentSite: e
          }
        })(),
        d = o?.id,
        s = /Mobi/i.test(window.navigator.userAgent) ? "mobile" : "desktop",
        c = e => {
          const t = {
            ...e,
            environment: d,
            display_type: s
          };
          n().dataLayer({
            dataLayer: t
          })
        }
    }
  }
]);