! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "ad79508f-9824-4121-8b46-c084008588fd", e._sentryDebugIdIdentifier = "sentry-dbid-ad79508f-9824-4121-8b46-c084008588fd")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "5e225a56a96343405c858680af91190e5116b19e",
  packageName: "@rockstargames/sites-rockstargames",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "5e225a56a96343405c858680af91190e5116b19e"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [928], {
    6928: (e, t, n) => {
      n.r(t), n.d(t, {
        default: () => c
      });
      var o, r = n(8200),
        i = n(7840),
        a = (o = function(e, t) {
          return o = Object.setPrototypeOf || {
            __proto__: []
          }
          instanceof Array && function(e, t) {
            e.__proto__ = t
          } || function(e, t) {
            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
          }, o(e, t)
        }, function(e, t) {
          if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

          function n() {
            this.constructor = e
          }
          o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
        }),
        s = function() {
          return s = Object.assign || function(e) {
            for (var t, n = 1, o = arguments.length; n < o; n++)
              for (var r in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            return e
          }, s.apply(this, arguments)
        };
      const c = function(e) {
        function t(t) {
          var n = e.call(this, t) || this;
          return n.request = null, n.cancel = function() {
            n.request && n.request.cancel()
          }, n.handleFetchSuccess = function(e) {
            n.props.onSuccess && n.props.onSuccess(e), n.setState({
              html: e.html
            }, (function() {
              window.instgrm.Embeds.process(), n.props.onAfterRender && n.props.onAfterRender()
            }))
          }, n.handleFetchFailure = function(e) {
            clearTimeout(n.timer), n.props.onFailure && n.props.onFailure(e)
          }, n.createRequestPromise = function(e) {
            var t = {};
            return t.promise = new Promise((function(o, r) {
              var i = fetch(e, {
                headers: {
                  Authorization: "Bearer " + n.props.clientAccessToken
                }
              }).then((function(e) {
                return e.json()
              })).then((function(e) {
                return o(e)
              })).catch((function(e) {
                return r(e)
              }));
              return t.cancel = function() {
                return r(new Error("Cancelled"))
              }, i
            })), t
          }, n.state = {
            html: null
          }, n
        }
        return a(t, e), t.prototype.componentDidMount = function() {
          var e = this;
          window.instgrm ? this.fetchEmbed(this.getQueryParams(this.props)) : (this.props.injectScript && !document.getElementById("react-instagram-embed-script") && this.injectScript(), this.checkAPI().then((function() {
            e.fetchEmbed(e.getQueryParams(e.props))
          })))
        }, t.prototype.componentDidUpdate = function(e) {
          var t = this.props,
            n = t.url,
            o = t.clientAccessToken,
            r = t.hideCaption,
            i = t.maxWidth,
            a = t.containerTagName,
            s = t.className;
          e.url === n && e.clientAccessToken === o && e.hideCaption === r && e.maxWidth === i && e.containerTagName === a && e.className === s || (this.request.cancel(), this.fetchEmbed(this.getQueryParams(this.props)))
        }, t.prototype.componentWillUnmount = function() {
          this.cancel()
        }, t.prototype.render = function() {
          var e = this.props.containerTagName;
          return r.createElement(e, s({}, this.omitComponentProps(), {
            dangerouslySetInnerHTML: {
              __html: this.state.html || ""
            }
          }))
        }, t.prototype.fetchEmbed = function(e) {
          this.request = this.createRequestPromise("https://graph.facebook.com/v11.0/instagram_oembed/?" + e), this.props.onLoading && this.props.onLoading(), this.request.promise.then(this.handleFetchSuccess).catch(this.handleFetchFailure)
        }, t.prototype.omitComponentProps = function() {
          var e = this.props;
          return e.url, e.clientAccessToken, e.hideCaption, e.maxWidth, e.containerTagName, e.onLoading, e.onSuccess, e.onAfterRender, e.onFailure, e.protocol, e.injectScript,
            function(e, t) {
              var n = {};
              for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
              if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                var r = 0;
                for (o = Object.getOwnPropertySymbols(e); r < o.length; r++) t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]])
              }
              return n
            }(e, ["url", "clientAccessToken", "hideCaption", "maxWidth", "containerTagName", "onLoading", "onSuccess", "onAfterRender", "onFailure", "protocol", "injectScript"])
        }, t.prototype.injectScript = function() {
          var e = 0 === window.location.protocol.indexOf("file") ? this.props.protocol : "",
            t = document.createElement("script");
          t.async = t.defer = !0, t.src = e + "//platform.instagram.com/en_US/embeds.js", t.id = "react-instagram-embed-script";
          var n = document.body;
          n && n.appendChild(t)
        }, t.prototype.checkAPI = function() {
          var e = this;
          return new Promise((function(t) {
            ! function e(n) {
              n.timer = window.setTimeout((function() {
                window.instgrm ? (clearTimeout(n.timer), t()) : e(n)
              }), 20)
            }(e)
          }))
        }, t.prototype.getQueryParams = function(e) {
          var t = e.url,
            n = e.hideCaption,
            o = e.maxWidth,
            r = {
              url: t,
              hidecaption: n,
              omitscript: !0,
              fields: "html"
            };
          return "number" == typeof o && 320 <= o && o <= 658 && (r.maxwidth = o), (0, i.stringify)(r)
        }, t.defaultProps = {
          hideCaption: !1,
          containerTagName: "div",
          protocol: "https:",
          injectScript: !0
        }, t
      }(r.Component)
    }
  }
]);
//# sourceMappingURL=4a6e115c263722f4475cb081b7fe5db4.js.map