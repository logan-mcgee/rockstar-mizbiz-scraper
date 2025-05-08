! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "a1b623c3-454d-4011-a772-6f50d335229b", e._sentryDebugIdIdentifier = "sentry-dbid-a1b623c3-454d-4011-a772-6f50d335229b")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-rockstargames",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [3774], {
    18687: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.addSocialClubHeaders = t.removeReduxLog = t.addDataUiName = t.removeScbeError = void 0, t.removeScbeError = function(e) {
        return "console" === e.category && e.message.match(/^SCBE\sERROR/) ? null : e
      }, t.addDataUiName = function() {
        return function(e) {
          const t = Object.assign({}, e);
          if (t.category && t.category.match(/^ui\./)) try {
            const e = document.querySelectorAll(t.message);
            if (!e || e.length > 1) return t;
            const n = e[0] && e[0].getAttribute("data-ui-name");
            n && (t.data = Object.assign(Object.assign({}, t.data), {
              "data-ui-name": n
            }))
          } catch (e) {}
          return t
        }
      }, t.removeReduxLog = function(e, t) {
        return function(n) {
          const r = Object.assign({}, n);
          if ("console" === r.category && r.message.match(/^%c\s(prev\sstate|action|next\sstate)/)) {
            const n = e && r.data.extra && Array.isArray(r.data.extra.arguments) && r.data.extra.arguments.find((e => e.hasOwnProperty("type")));
            if (!n) return null;
            r.message = `redux action ${n.type}`, r.data = n, t || delete r.data.payload
          }
          return r
        }
      }, t.addSocialClubHeaders = function() {
        return function(e, t) {
          const n = Object.assign({}, e),
            r = "fetch" === n.category,
            o = "xhr" === n.category;
          if (r || o) {
            let e, s;
            o && (-1 !== t.xhr.getAllResponseHeaders().indexOf("dbi") && (e = t.xhr.getResponseHeader("dbi")), -1 !== t.xhr.getAllResponseHeaders().indexOf("correlationid") && (s = t.xhr.getResponseHeader("correlationid"))), r && (e = t.response.headers.get("dbi"), s = t.response.headers.get("correlationid")), e && (n.data.DBI = e), s && (n.data.CorrelationId = s)
          }
          return n
        }
      }
    },
    48927: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.TransactionStatus = t.ExceptionalPageloadNames = t.TagKeys = void 0, t.TagKeys = {
        Custom: {
          RoutingReactRouterMatch: "routing.react_router_match",
          RoutingLegacyRoute: "routing.legacy_route"
        },
        Official: {
          RoutingInstrumentation: "routing.instrumentation"
        }
      }, t.ExceptionalPageloadNames = {
        UnmatchedReactRouterPath: "sentry-unmatched-path-pageload",
        InternalError: "sentry-internal-error-pageload",
        IncompletePageload: "sentry-incomplete-pageload",
        Legacy: "sentry-legacy-pageload"
      }, t.TransactionStatus = {
        Unknown: "unknown",
        InternalError: "internal_error",
        DeadlineExceeded: "deadline_exceeded"
      }
    },
    22447: function(e, t, n) {
      "use strict";
      var r = this && this.__createBinding || (Object.create ? function(e, t, n, r) {
          void 0 === r && (r = n);
          var o = Object.getOwnPropertyDescriptor(t, n);
          o && !("get" in o ? !t.__esModule : o.writable || o.configurable) || (o = {
            enumerable: !0,
            get: function() {
              return t[n]
            }
          }), Object.defineProperty(e, r, o)
        } : function(e, t, n, r) {
          void 0 === r && (r = n), e[r] = t[n]
        }),
        o = this && this.__setModuleDefault || (Object.create ? function(e, t) {
          Object.defineProperty(e, "default", {
            enumerable: !0,
            value: t
          })
        } : function(e, t) {
          e.default = t
        }),
        s = this && this.__importStar || function(e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var n in e) "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && r(t, e, n);
          return o(t, e), t
        };
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.addGlobalTransactionFilters = t.withSentryRouting = t.removeRecaptchaTimeout = t.createRegexList = t.createEventTransformer = t.createBreadcrumbTransformer = void 0;
      const i = s(n(62229)),
        a = s(n(62607)),
        c = n(48927),
        u = n(63262),
        l = a.default || a;
      t.createBreadcrumbTransformer = function() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return function(t, n) {
          for (const r of e)
            if (null == (t = r(t, n))) break;
          return t
        }
      }, t.createEventTransformer = function() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return function(t, n) {
          for (const r of e)
            if (null == (t = r(t, n))) break;
          return t
        }
      }, t.createRegexList = function(e) {
        return e && e.map((e => new RegExp(e, "i"))) || []
      };
      const d = /Timeout \(.\)/;
      t.removeRecaptchaTimeout = function() {
        return (e, t) => "Timeout" === t.originalException || d.test(t.originalException) ? null : e
      }, t.withSentryRouting = function(e) {
        const t = e.displayName || e.name,
          n = t => ((0, u.configureScope)((e => {
            var n;
            const r = e.getTransaction();
            if (r)
              if (null === (n = null == t ? void 0 : t.computedMatch) || void 0 === n ? void 0 : n.isExact) {
                let e = r.tags.transactionPrefix,
                  n = r.tags.transactionPostfix,
                  o = `${e||""}${t.computedMatch.path}${n||""}`;
                r.setName(o), r.setTag(c.TagKeys.Custom.RoutingReactRouterMatch, !0)
              } else e.setTag(c.TagKeys.Custom.RoutingReactRouterMatch, !1)
          })), i.createElement(e, Object.assign({}, t)));
        return n.displayName = `sentryRoute(${t})`, l(n, e), (0, u.withProfiler)(n, {
          name: t
        })
      }, t.addGlobalTransactionFilters = function() {
        (0, u.addGlobalEventProcessor)((e => {
          var t, n, r;
          if ("transaction" === e.type) {
            const o = null === (t = e.contexts) || void 0 === t ? void 0 : t.trace,
              s = null !== (n = null == o ? void 0 : o.status) && void 0 !== n ? n : c.TransactionStatus.Unknown;
            if ("pageload" === (null !== (r = null == o ? void 0 : o.op) && void 0 !== r ? r : ""))
              if (s === c.TransactionStatus.InternalError) e.transaction = c.ExceptionalPageloadNames.InternalError;
              else if (s === c.TransactionStatus.DeadlineExceeded) e.transaction = c.ExceptionalPageloadNames.IncompletePageload;
            else if (o.tags && o.tags[c.TagKeys.Custom.RoutingLegacyRoute]) e.transaction = c.ExceptionalPageloadNames.Legacy;
            else {
              const t = o.tags && o.tags[c.TagKeys.Official.RoutingInstrumentation];
              "string" == typeof t && (null == t ? void 0 : t.includes("react-router")) && o.tags && !o.tags[c.TagKeys.Custom.RoutingReactRouterMatch] && (e.transaction = c.ExceptionalPageloadNames.UnmatchedReactRouterPath)
            }
          }
          return e
        }))
      }
    },
    93774: function(e, t, n) {
      "use strict";
      var r = this && this.__createBinding || (Object.create ? function(e, t, n, r) {
          void 0 === r && (r = n);
          var o = Object.getOwnPropertyDescriptor(t, n);
          o && !("get" in o ? !t.__esModule : o.writable || o.configurable) || (o = {
            enumerable: !0,
            get: function() {
              return t[n]
            }
          }), Object.defineProperty(e, r, o)
        } : function(e, t, n, r) {
          void 0 === r && (r = n), e[r] = t[n]
        }),
        o = this && this.__setModuleDefault || (Object.create ? function(e, t) {
          Object.defineProperty(e, "default", {
            enumerable: !0,
            value: t
          })
        } : function(e, t) {
          e.default = t
        }),
        s = this && this.__importStar || function(e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var n in e) "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && r(t, e, n);
          return o(t, e), t
        };
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.getCurrentTransaction = t.startTransaction = t.setUser = t.setTag = t.setExtra = t.setTags = t.setExtras = t.setContext = t.addBreadcrumb = t.captureEvent = t.captureMessage = t.captureException = t.configureScope = t.browserClient = t.initSentry = t.Severity = t.addSocialClubHeaders = t.removeReduxLog = t.addDataUiName = t.ExceptionalPageloadNames = t.TagKeys = t.createSentryMiddleware = t.withSentryRouting = t.getCurrentHub = t.makeMain = t.Hub = t.createSentryReduxEnhancer = t.withProfiler = t.SpanStatus = void 0;
      const i = s(n(39436)),
        a = n(63262),
        c = n(36358),
        u = n(77794),
        l = n(18687),
        d = n(80771),
        p = n(22447);
      var h = n(55339);
      Object.defineProperty(t, "SpanStatus", {
        enumerable: !0,
        get: function() {
          return h.SpanStatus
        }
      });
      var f = n(63262);
      Object.defineProperty(t, "withProfiler", {
        enumerable: !0,
        get: function() {
          return f.withProfiler
        }
      });
      var m = n(63262);
      Object.defineProperty(t, "createSentryReduxEnhancer", {
        enumerable: !0,
        get: function() {
          return m.createReduxEnhancer
        }
      });
      var g = n(39436);
      Object.defineProperty(t, "Hub", {
        enumerable: !0,
        get: function() {
          return g.Hub
        }
      }), Object.defineProperty(t, "makeMain", {
        enumerable: !0,
        get: function() {
          return g.makeMain
        }
      });
      var v = n(36358);
      Object.defineProperty(t, "getCurrentHub", {
        enumerable: !0,
        get: function() {
          return v.getCurrentHub
        }
      });
      var y = n(22447);
      Object.defineProperty(t, "withSentryRouting", {
        enumerable: !0,
        get: function() {
          return y.withSentryRouting
        }
      });
      var _ = n(84909);
      Object.defineProperty(t, "createSentryMiddleware", {
        enumerable: !0,
        get: function() {
          return _.createSentryMiddleware
        }
      });
      var b = n(48927);
      Object.defineProperty(t, "TagKeys", {
        enumerable: !0,
        get: function() {
          return b.TagKeys
        }
      }), Object.defineProperty(t, "ExceptionalPageloadNames", {
        enumerable: !0,
        get: function() {
          return b.ExceptionalPageloadNames
        }
      });
      var S = n(18687);
      Object.defineProperty(t, "addDataUiName", {
        enumerable: !0,
        get: function() {
          return S.addDataUiName
        }
      }), Object.defineProperty(t, "removeReduxLog", {
        enumerable: !0,
        get: function() {
          return S.removeReduxLog
        }
      }), Object.defineProperty(t, "addSocialClubHeaders", {
        enumerable: !0,
        get: function() {
          return S.addSocialClubHeaders
        }
      });
      var w = n(80771);

      function k(e) {
        const t = [l.removeScbeError, ...e.breadcrumbTransforms || []],
          n = [(0, p.removeRecaptchaTimeout)(), ...e.eventTransforms || []],
          r = [new u.Dedupe, new u.ExtraErrorData, new i.ModuleMetadata];
        if (e.sentryConfig.performanceTracing.enabled) {
          const t = {
            tracingOrigins: (0, p.createRegexList)(e.sentryConfig.performanceTracing.tracingOrigins),
            startTransactionOnPageLoad: e.sentryConfig.performanceTracing.includePageLoadTransactions,
            startTransactionOnLocationChange: e.sentryConfig.performanceTracing.includeClientSideTransactions
          };
          e.transactionTransform && (t.beforeNavigate = e.transactionTransform), history && (t.routingInstrumentation = (0, a.reactRouterV5Instrumentation)(history)), r.push(new c.BrowserTracing(t))
        }
        if (e.sentryConfig.sessionReplay.enabled) {
          const t = {
            maskAllText: e.sentryConfig.sessionReplay.includeMaskAllText,
            blockAllMedia: e.sentryConfig.sessionReplay.includeBlockAllMedia
          };
          r.push(new a.Replay(t))
        }
        const o = function() {
          if (!("fetch" in c.WINDOW)) return !1;
          try {
            return new Headers, new Request("http://www.example.rockstargames.com"), new Response, !0
          } catch (e) {
            return !1
          }
        }() ? c.makeFetchTransport : c.makeXHRTransport;
        return {
          dsn: e.sentryConfig.dsn,
          release: e.sentryConfig.release,
          environment: e.sentryConfig.environment,
          attachStacktrace: !0,
          beforeSend: (0, p.createEventTransformer)(n),
          beforeBreadcrumb: (0, p.createBreadcrumbTransformer)(t),
          ignoreErrors: (0, p.createRegexList)(e.sentryConfig.errorReporting.ignoreErrors),
          allowUrls: (0, p.createRegexList)(e.sentryConfig.errorReporting.allowUrls),
          denyUrls: (0, p.createRegexList)(e.sentryConfig.errorReporting.denyUrls),
          sampleRate: e.sentryConfig.errorReporting.enabled ? e.sentryConfig.errorReporting.sampleRate : 0,
          integrations: r,
          tracesSampleRate: e.sentryConfig.performanceTracing.enabled ? e.sentryConfig.performanceTracing.sampleRate : 0,
          transport: e.multiplexedTransport ? i.makeMultiplexedTransport(o, e.multiplexedTransport) : o,
          stackParser: c.defaultStackParser,
          replaysSessionSampleRate: e.sentryConfig.sessionReplay.enabled ? e.sentryConfig.sessionReplay.replaysSessionSampleRate : 0,
          replaysOnErrorSampleRate: e.sentryConfig.sessionReplay.enabled ? e.sentryConfig.sessionReplay.replaysOnErrorSampleRate : 0
        }
      }

      function T(e) {
        const t = e instanceof Error ? e : new Error(e);
        return i.captureException(t)
      }

      function E(e, t) {
        return i.captureMessage(e, t)
      }

      function x(e) {
        return i.captureEvent(e)
      }

      function C(e) {
        return i.addBreadcrumb(e)
      }

      function I(e, t) {
        return i.setContext(e, t)
      }

      function R(e) {
        return i.setExtras(e)
      }

      function O(e) {
        return i.setTags(e)
      }

      function M(e, t) {
        return i.setExtra(e, t)
      }

      function A(e, t) {
        return i.setTag(e, t)
      }

      function F(e) {
        return i.setUser(e)
      }
      Object.defineProperty(t, "Severity", {
        enumerable: !0,
        get: function() {
          return w.Severity
        }
      }), t.initSentry = function(e) {
        const t = k(e);
        return (0, p.addGlobalTransactionFilters)(), (0, c.init)(t)
      }, t.browserClient = function(e) {
        const t = k(e);
        return new c.BrowserClient(t)
      }, t.configureScope = function(e) {
        i.configureScope((t => {
          e(t)
        }))
      }, t.captureException = T, t.captureMessage = E, t.captureEvent = x, t.addBreadcrumb = C, t.setContext = I, t.setExtras = R, t.setTags = O, t.setExtra = M, t.setTag = A, t.setUser = F, t.startTransaction = function(e, t) {
        return i.startTransaction(e, t)
      }, t.getCurrentTransaction = function() {
        var e, t;
        return null === (t = null === (e = (0, c.getCurrentHub)()) || void 0 === e ? void 0 : e.getScope()) || void 0 === t ? void 0 : t.getTransaction()
      };
      const D = {
        [d.RpcMethod.captureException]: T,
        [d.RpcMethod.captureMessage]: E,
        [d.RpcMethod.captureEvent]: x,
        [d.RpcMethod.addBreadcrumb]: C,
        [d.RpcMethod.setContext]: I,
        [d.RpcMethod.setExtras]: R,
        [d.RpcMethod.setTags]: O,
        [d.RpcMethod.setExtra]: M,
        [d.RpcMethod.setTag]: A,
        [d.RpcMethod.setUser]: F
      };
      window.addEventListener("message", (e => {
        try {
          const t = JSON.parse(e.data);
          D[t.method] && D[t.method] instanceof Function && D[t.method].apply(this, t.args)
        } catch (e) {}
      }))
    },
    84909: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.createSentryMiddleware = t.flattenObject = t.diffObject = void 0;
      const r = n(80771),
        o = n(39436);

      function s(e, t) {
        const n = {};
        return Object.keys(Object.assign(Object.assign({}, e), t)).forEach((r => {
          e[r] !== t[r] && ("object" == typeof t[r] && null !== t[r] && null !== e[r] && void 0 !== e[r] ? n[r] = s(e[r], t[r]) : n[r] = `${JSON.stringify(e[r])} => ${JSON.stringify(t[r])}`)
        })), n
      }

      function i(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
          n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        return Object.keys(e).forEach((r => {
          if ("object" == typeof e[r] && null !== e[r]) return i(e[r], t + r + ".", n);
          n[t + r] = e[r]
        })), n
      }
      t.diffObject = s, t.flattenObject = i, t.createSentryMiddleware = function() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return t => n => a => {
          const c = a.type;
          if (e.includeActions && e.includeActions.indexOf(c) < 0 || e.excludeActions && e.excludeActions.indexOf(c) >= 0) return n(a);
          const u = t.getState(),
            l = n(a),
            d = t.getState(),
            p = {
              category: "redux.action",
              message: c,
              level: r.Severity.Log
            };
          if (u !== d && (!e.excludeActionDiffs || e.excludeActionDiffs.indexOf(c) < 0)) try {
            const e = s(u, d);
            p.data = Object.assign({}, i(e))
          } catch (e) {
            p.level = r.Severity.Error, p.data = {
              message: "Unable to create diff",
              error: e && (e.stack || e.toString())
            }
          }
          return (0, o.addBreadcrumb)(p), l
        }
      }
    },
    55339: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.SpanStatus = void 0, t.SpanStatus = {
        Ok: "ok",
        DeadlineExceeded: "deadline_exceeded",
        Unauthenticated: "unauthenticated",
        PermissionDenied: "permission_denied",
        NotFound: "not_found",
        ResourceExhausted: "resource_exhausted",
        InvalidArgument: "invalid_argument",
        Unimplemented: "unimplemented",
        Unavailable: "unavailable",
        InternalError: "internal_error",
        UnknownError: "unknown_error",
        Cancelled: "cancelled",
        AlreadyExists: "already_exists",
        FailedPrecondition: "failed_precondition",
        Aborted: "aborted",
        OutOfRange: "out_of_range",
        DataLoss: "data_loss"
      }
    },
    80771: (e, t) => {
      "use strict";
      var n, r;
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.Severity = t.RpcMethod = t.PostMessageOrigin = void 0, (t.PostMessageOrigin || (t.PostMessageOrigin = {})).Puppeteer = "*", (r = t.RpcMethod || (t.RpcMethod = {}))[r.captureException = 0] = "captureException", r[r.captureMessage = 1] = "captureMessage", r[r.captureEvent = 2] = "captureEvent", r[r.addBreadcrumb = 3] = "addBreadcrumb", r[r.setContext = 4] = "setContext", r[r.setExtras = 5] = "setExtras", r[r.setTags = 6] = "setTags", r[r.setExtra = 7] = "setExtra", r[r.setTag = 8] = "setTag", r[r.setUser = 9] = "setUser", (n = t.Severity || (t.Severity = {})).Fatal = "fatal", n.Error = "error", n.Warning = "warning", n.Log = "log", n.Info = "info", n.Debug = "debug"
    },
    21321: (e, t, n) => {
      "use strict";
      n.d(t, {
        y: () => m
      });
      var r = n(80670),
        o = n(24456),
        s = n(72450),
        i = n(97205),
        a = n(21249),
        c = n(65460);

      function u(e, t, n) {
        const r = [{
          type: "client_report"
        }, {
          timestamp: n || (0, c.lu)(),
          discarded_events: e
        }];
        return (0, a.h4)(t ? {
          dsn: t
        } : {}, [r])
      }
      var l = n(93088),
        d = n(52358),
        p = n(3665),
        h = n(22517),
        f = n(7194);
      class m extends r.V {
        constructor(e) {
          const t = h.jf.SENTRY_SDK_SOURCE || (0, s.e)();
          (0, o.K)(e, "browser", ["browser"], t), super(e), e.sendClientReports && h.jf.document && h.jf.document.addEventListener("visibilitychange", (() => {
            "hidden" === h.jf.document.visibilityState && this._flushOutcomes()
          }))
        }
        eventFromException(e, t) {
          return (0, p.u)(this._options.stackParser, e, t, this._options.attachStacktrace)
        }
        eventFromMessage(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "info",
            n = arguments.length > 2 ? arguments[2] : void 0;
          return (0, p.qv)(this._options.stackParser, e, t, n, this._options.attachStacktrace)
        }
        captureUserFeedback(e) {
          if (!this._isEnabled()) return void(d.T && i.vF.warn("SDK not enabled, will not capture user feedback."));
          const t = (0, f.L)(e, {
            metadata: this.getSdkMetadata(),
            dsn: this.getDsn(),
            tunnel: this.getOptions().tunnel
          });
          this._sendEnvelope(t)
        }
        _prepareEvent(e, t, n) {
          return e.platform = e.platform || "javascript", super._prepareEvent(e, t, n)
        }
        _flushOutcomes() {
          const e = this._clearOutcomes();
          if (0 === e.length) return void(d.T && i.vF.log("No outcomes to send"));
          if (!this._dsn) return void(d.T && i.vF.log("No dsn provided, will not send outcomes"));
          d.T && i.vF.log("Sending outcomes:", e);
          const t = u(e, this._options.tunnel && (0, l.SB)(this._dsn));
          this._sendEnvelope(t)
        }
      }
    },
    52358: (e, t, n) => {
      "use strict";
      n.d(t, {
        T: () => r
      });
      const r = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__
    },
    3665: (e, t, n) => {
      "use strict";
      n.d(t, {
        H7: () => g,
        K8: () => u,
        qv: () => m,
        u: () => f
      });
      var r = n(23388),
        o = n(44877),
        s = n(50767),
        i = n(13817),
        a = n(84541),
        c = n(98478);

      function u(e, t) {
        const n = d(e, t),
          r = {
            type: t && t.name,
            value: h(t)
          };
        return n.length && (r.stacktrace = {
          frames: n
        }), void 0 === r.type && "" === r.value && (r.value = "Unrecoverable error caught"), r
      }

      function l(e, t) {
        return {
          exception: {
            values: [u(e, t)]
          }
        }
      }

      function d(e, t) {
        const n = t.stacktrace || t.stack || "",
          r = function(e) {
            if (e) {
              if ("number" == typeof e.framesToPop) return e.framesToPop;
              if (p.test(e.message)) return 1
            }
            return 0
          }(t);
        try {
          return e(n, r)
        } catch (e) {}
        return []
      }
      const p = /Minified React error #\d+;/i;

      function h(e) {
        const t = e && e.message;
        return t ? t.error && "string" == typeof t.error.message ? t.error.message : t : "No error message"
      }

      function f(e, t, n, r) {
        const o = g(e, t, n && n.syntheticException || void 0, r);
        return (0, i.M6)(o), o.level = "error", n && n.event_id && (o.event_id = n.event_id), (0, a.XW)(o)
      }

      function m(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "info",
          r = arguments.length > 3 ? arguments[3] : void 0,
          o = arguments.length > 4 ? arguments[4] : void 0;
        const s = v(e, t, r && r.syntheticException || void 0, o);
        return s.level = n, r && r.event_id && (s.event_id = r.event_id), (0, a.XW)(s)
      }

      function g(e, t, n, a, c) {
        let u;
        if ((0, o.T2)(t) && t.error) return l(e, t.error);
        if ((0, o.BD)(t) || (0, o.W6)(t)) {
          const r = t;
          if ("stack" in t) u = l(e, t);
          else {
            const t = r.name || ((0, o.BD)(r) ? "DOMError" : "DOMException"),
              s = r.message ? `${t}: ${r.message}` : t;
            u = v(e, s, n, a), (0, i.gO)(u, s)
          }
          return "code" in r && (u.tags = {
            ...u.tags,
            "DOMException.code": `${r.code}`
          }), u
        }
        return (0, o.bJ)(t) ? l(e, t) : (0, o.Qd)(t) || (0, o.xH)(t) ? (u = function(e, t, n, i) {
          const a = (0, r.KU)(),
            c = a && a.getOptions().normalizeDepth,
            u = {
              exception: {
                values: [{
                  type: (0, o.xH)(t) ? t.constructor.name : i ? "UnhandledRejection" : "Error",
                  value: y(t, {
                    isUnhandledRejection: i
                  })
                }]
              },
              extra: {
                __serialized__: (0, s.cd)(t, c)
              }
            };
          if (n) {
            const t = d(e, n);
            t.length && (u.exception.values[0].stacktrace = {
              frames: t
            })
          }
          return u
        }(e, t, n, c), (0, i.M6)(u, {
          synthetic: !0
        }), u) : (u = v(e, t, n, a), (0, i.gO)(u, `${t}`, void 0), (0, i.M6)(u, {
          synthetic: !0
        }), u)
      }

      function v(e, t, n, r) {
        const s = {};
        if (r && n) {
          const r = d(e, n);
          r.length && (s.exception = {
            values: [{
              value: t,
              stacktrace: {
                frames: r
              }
            }]
          })
        }
        if ((0, o.NF)(t)) {
          const {
            __sentry_template_string__: e,
            __sentry_template_values__: n
          } = t;
          return s.logentry = {
            message: e,
            params: n
          }, s
        }
        return s.message = t, s
      }

      function y(e, t) {
        let {
          isUnhandledRejection: n
        } = t;
        const r = (0, c.HF)(e),
          s = n ? "promise rejection" : "exception";
        return (0, o.T2)(e) ? `Event \`ErrorEvent\` captured as ${s} with message \`${e.message}\`` : (0, o.xH)(e) ? `Event \`${function(e){try{const t=Object.getPrototypeOf(e);return t?t.constructor.name:void 0}catch(e){}}(e)}\` (type=${e.type}) captured as ${s}` : `Object captured as ${s} with keys: ${r}`
      }
    },
    22517: (e, t, n) => {
      "use strict";
      n.d(t, {
        LV: () => l,
        jN: () => u,
        jf: () => a
      });
      var r = n(23388),
        o = n(2254),
        s = n(98478),
        i = n(13817);
      const a = o.OW;
      let c = 0;

      function u() {
        return c > 0
      }

      function l(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = arguments.length > 2 ? arguments[2] : void 0;
        if ("function" != typeof e) return e;
        try {
          const t = e.__sentry_wrapped__;
          if (t) return t;
          if ((0, s.sp)(e)) return e
        } catch (t) {
          return e
        }
        const o = function() {
          const o = Array.prototype.slice.call(arguments);
          try {
            n && "function" == typeof n && n.apply(this, arguments);
            const r = o.map((e => l(e, t)));
            return e.apply(this, r)
          } catch (e) {
            throw c++, setTimeout((() => {
              c--
            })), (0, r.v4)((n => {
              n.addEventProcessor((e => (t.mechanism && ((0, i.gO)(e, void 0, void 0), (0, i.M6)(e, t.mechanism)), e.extra = {
                ...e.extra,
                arguments: o
              }, e))), (0, r.Cp)(e)
            })), e
          }
        };
        try {
          for (const t in e) Object.prototype.hasOwnProperty.call(e, t) && (o[t] = e[t])
        } catch (e) {}(0, s.pO)(o, e), (0, s.my)(e, "__sentry_wrapped__", o);
        try {
          Object.getOwnPropertyDescriptor(o, "name").configurable && Object.defineProperty(o, "name", {
            get: () => e.name
          })
        } catch (e) {}
        return o
      }
    },
    36358: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, {
        Breadcrumbs: () => F.B,
        BrowserClient: () => x.y,
        BrowserProfilingIntegration: () => Pi,
        BrowserTracing: () => Zs,
        Dedupe: () => D.U,
        Feedback: () => ks,
        FunctionToString: () => s.$,
        GlobalHandlers: () => N.R,
        HttpContext: () => L._,
        Hub: () => i.YZ,
        InboundFilters: () => a.H,
        Integrations: () => $i,
        LinkedErrors: () => P.l,
        ModuleMetadata: () => c.Y,
        Replay: () => uo,
        ReplayCanvas: () => Po,
        SDK_VERSION: () => u.M,
        Scope: () => l.HG,
        TryCatch: () => j.h,
        WINDOW: () => E.jf,
        addBreadcrumb: () => d.ZQ,
        addEventProcessor: () => p.S,
        addGlobalEventProcessor: () => h.lb,
        addIntegration: () => f.Q8,
        addTracingExtensions: () => m.U,
        breadcrumbsIntegration: () => F.F,
        browserApiErrorsIntegration: () => j.G,
        browserTracingIntegration: () => ni,
        captureEvent: () => d.r,
        captureException: () => d.Cp,
        captureMessage: () => d.wd,
        captureUserFeedback: () => A.lo,
        chromeStackLineParser: () => R.Yj,
        close: () => d.VN,
        configureScope: () => d.PN,
        continueTrace: () => g.V4,
        createTransport: () => v.o,
        createUserFeedbackEnvelope: () => M.L,
        dedupeIntegration: () => D.s,
        defaultIntegrations: () => A.xg,
        defaultRequestInstrumentationOptions: () => Vs,
        defaultStackLineParsers: () => R.c9,
        defaultStackParser: () => R.lG,
        eventFromException: () => O.u,
        eventFromMessage: () => O.qv,
        exceptionFromError: () => O.K8,
        extractTraceparentData: () => y.nc,
        feedbackIntegration: () => ws,
        flush: () => d.bX,
        forceLoad: () => A.w7,
        functionToStringIntegration: () => s.Z,
        geckoStackLineParser: () => R.dY,
        getActiveSpan: () => g.Bk,
        getActiveTransaction: () => y.Z7,
        getClient: () => d.KU,
        getCurrentHub: () => i.BF,
        getCurrentScope: () => d.o5,
        getDefaultIntegrations: () => A.nI,
        getHubFromCarrier: () => i.Me,
        getSpanStatusFromHttpCode: () => _.AJ,
        globalHandlersIntegration: () => N.L,
        httpContextIntegration: () => L.M,
        inboundFiltersIntegration: () => a.D,
        init: () => A.Ts,
        instrumentOutgoingRequests: () => Js,
        isInitialized: () => d.Dp,
        lastEventId: () => d.Q,
        linkedErrorsIntegration: () => P.p,
        makeBrowserOfflineTransport: () => li,
        makeFetchTransport: () => C._,
        makeMain: () => i.gM,
        makeMultiplexedTransport: () => b.N,
        makeXHRTransport: () => I.u,
        metrics: () => S.qd,
        moduleMetadataIntegration: () => c.Q,
        onLoad: () => A.kF,
        onProfilingStartRouteTransaction: () => Di,
        opera10StackLineParser: () => R.Q_,
        opera11StackLineParser: () => R.Vv,
        parameterize: () => w.y,
        replayCanvasIntegration: () => Lo,
        replayIntegration: () => co,
        sendFeedback: () => ss,
        setContext: () => d.o,
        setCurrentClient: () => k.B,
        setExtra: () => d.l7,
        setExtras: () => d.cx,
        setMeasurement: () => T.X,
        setTag: () => d.NA,
        setTags: () => d.Wt,
        setUser: () => d.gV,
        showReportDialog: () => A.mn,
        spanStatusfromHttpCode: () => _.o6,
        startBrowserTracingNavigationSpan: () => oi,
        startBrowserTracingPageLoadSpan: () => ri,
        startInactiveSpan: () => g.Uk,
        startSpan: () => g.Lk,
        startSpanManual: () => g.nV,
        startTransaction: () => d.nb,
        trace: () => g.uP,
        winjsStackLineParser: () => R.$2,
        withIsolationScope: () => d.rB,
        withScope: () => d.v4,
        wrap: () => A.LV
      });
      var r = {};
      n.r(r), n.d(r, {
        Breadcrumbs: () => F.B,
        Dedupe: () => D.U,
        GlobalHandlers: () => N.R,
        HttpContext: () => L._,
        LinkedErrors: () => P.l,
        TryCatch: () => j.h
      });
      var o = n(39436),
        s = n(903),
        i = n(37452),
        a = n(58943),
        c = n(97372),
        u = n(99371),
        l = n(6131),
        d = n(23388),
        p = n(80670),
        h = n(72270),
        f = n(90197),
        m = n(66924),
        g = n(69867),
        v = n(38521),
        y = n(8599),
        _ = n(70334),
        b = n(53743),
        S = n(96139),
        w = n(82522),
        k = n(49451),
        T = n(84894),
        E = n(22517),
        x = n(21321),
        C = n(64019),
        I = n(60965),
        R = n(52953),
        O = n(3665),
        M = n(7194),
        A = n(68664),
        F = n(99024),
        D = n(20279),
        N = n(94586),
        L = n(45633),
        P = n(14646),
        j = n(54292);

      function $(e) {
        let t, n = e[0],
          r = 1;
        for (; r < e.length;) {
          const o = e[r],
            s = e[r + 1];
          if (r += 2, ("optionalAccess" === o || "optionalCall" === o) && null == n) return;
          "access" === o || "optionalAccess" === o ? (t = n, n = s(n)) : "call" !== o && "optionalCall" !== o || (n = s((function() {
            for (var e = arguments.length, r = new Array(e), o = 0; o < e; o++) r[o] = arguments[o];
            return n.call(t, ...r)
          })), t = void 0)
        }
        return n
      }
      var B = n(49192),
        U = n(9332),
        H = n(67752),
        q = n(98030),
        z = n(2254),
        W = n(50767),
        K = n(98478),
        G = n(33421),
        V = n(65460),
        J = n(97205),
        Y = n(13817),
        X = n(27817),
        Q = n(34860),
        Z = n(63335),
        ee = n(6803),
        te = n(77548),
        ne = n(21249),
        re = n(80836),
        oe = n(38085);

      function se() {
        return "undefined" != typeof window && (!(0, oe.wD)() || void 0 !== z.OW.process && "renderer" === z.OW.process.type)
      }
      var ie = n(46600);
      const ae = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__,
        ce = (e, t, n) => {
          let r, o;
          return s => {
            t.value >= 0 && (s || n) && (o = t.value - (r || 0), (o || void 0 === r) && (r = t.value, t.delta = o, e(t)))
          }
        },
        ue = z.OW,
        le = () => ue.__WEB_VITALS_POLYFILL__ ? ue.performance && (performance.getEntriesByType && performance.getEntriesByType("navigation")[0] || (() => {
          const e = ue.performance.timing,
            t = ue.performance.navigation.type,
            n = {
              entryType: "navigation",
              startTime: 0,
              type: 2 == t ? "back_forward" : 1 === t ? "reload" : "navigate"
            };
          for (const t in e) "navigationStart" !== t && "toJSON" !== t && (n[t] = Math.max(e[t] - e.navigationStart, 0));
          return n
        })()) : ue.performance && performance.getEntriesByType && performance.getEntriesByType("navigation")[0],
        de = () => {
          const e = le();
          return e && e.activationStart || 0
        },
        pe = (e, t) => {
          const n = le();
          let r = "navigate";
          return n && (r = ue.document.prerendering || de() > 0 ? "prerender" : n.type.replace(/_/g, "-")), {
            name: e,
            value: void 0 === t ? -1 : t,
            rating: "good",
            delta: 0,
            entries: [],
            id: `v3-${Date.now()}-${Math.floor(8999999999999*Math.random())+1e12}`,
            navigationType: r
          }
        },
        he = (e, t, n) => {
          try {
            if (PerformanceObserver.supportedEntryTypes.includes(e)) {
              const r = new PerformanceObserver((e => {
                t(e.getEntries())
              }));
              return r.observe(Object.assign({
                type: e,
                buffered: !0
              }, n || {})), r
            }
          } catch (e) {}
        },
        fe = (e, t) => {
          const n = r => {
            "pagehide" !== r.type && "hidden" !== ue.document.visibilityState || (e(r), t && (removeEventListener("visibilitychange", n, !0), removeEventListener("pagehide", n, !0)))
          };
          addEventListener("visibilitychange", n, !0), addEventListener("pagehide", n, !0)
        },
        me = e => {
          const t = pe("CLS", 0);
          let n, r = 0,
            o = [];
          const s = e => {
              e.forEach((e => {
                if (!e.hadRecentInput) {
                  const s = o[0],
                    i = o[o.length - 1];
                  r && 0 !== o.length && e.startTime - i.startTime < 1e3 && e.startTime - s.startTime < 5e3 ? (r += e.value, o.push(e)) : (r = e.value, o = [e]), r > t.value && (t.value = r, t.entries = o, n && n())
                }
              }))
            },
            i = he("layout-shift", s);
          if (i) {
            n = ce(e, t);
            const r = () => {
              s(i.takeRecords()), n(!0)
            };
            return fe(r), r
          }
        };
      let ge = -1;
      const ve = () => (ge < 0 && (ge = "hidden" !== ue.document.visibilityState || ue.document.prerendering ? 1 / 0 : 0, fe((e => {
          let {
            timeStamp: t
          } = e;
          ge = t
        }), !0)), {
          get firstHiddenTime() {
            return ge
          }
        }),
        ye = e => {
          const t = ve(),
            n = pe("FID");
          let r;
          const o = e => {
              e.startTime < t.firstHiddenTime && (n.value = e.processingStart - e.startTime, n.entries.push(e), r(!0))
            },
            s = e => {
              e.forEach(o)
            },
            i = he("first-input", s);
          r = ce(e, n), i && fe((() => {
            s(i.takeRecords()), i.disconnect()
          }), !0)
        },
        _e = {},
        be = e => {
          const t = ve(),
            n = pe("LCP");
          let r;
          const o = e => {
              const o = e[e.length - 1];
              if (o) {
                const e = Math.max(o.startTime - de(), 0);
                e < t.firstHiddenTime && (n.value = e, n.entries = [o], r())
              }
            },
            s = he("largest-contentful-paint", o);
          if (s) {
            r = ce(e, n);
            const t = () => {
              _e[n.id] || (o(s.takeRecords()), s.disconnect(), _e[n.id] = !0, r(!0))
            };
            return ["keydown", "click"].forEach((e => {
              addEventListener(e, t, {
                once: !0,
                capture: !0
              })
            })), fe(t, !0), t
          }
        },
        Se = {},
        we = {};
      let ke, Te, Ee;

      function xe(e) {
        return Ae("lcp", e, Me, Ee, arguments.length > 1 && void 0 !== arguments[1] && arguments[1])
      }

      function Ce(e, t) {
        return Fe(e, t), we[e] || (function(e) {
          const t = {};
          "event" === e && (t.durationThreshold = 0), he(e, (t => {
            Ie(e, {
              entries: t
            })
          }), t)
        }(e), we[e] = !0), De(e, t)
      }

      function Ie(e, t) {
        const n = Se[e];
        if (n && n.length)
          for (const r of n) try {
            r(t)
          } catch (t) {
            ae && J.vF.error(`Error while triggering instrumentation handler.\nType: ${e}\nName: ${(0,ie.qQ)(r)}\nError:`, t)
          }
      }

      function Re() {
        return me((e => {
          Ie("cls", {
            metric: e
          }), ke = e
        }))
      }

      function Oe() {
        return ye((e => {
          Ie("fid", {
            metric: e
          }), Te = e
        }))
      }

      function Me() {
        return be((e => {
          Ie("lcp", {
            metric: e
          }), Ee = e
        }))
      }

      function Ae(e, t, n, r) {
        let o, s = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        return Fe(e, t), we[e] || (o = n(), we[e] = !0), r && t({
          metric: r
        }), De(e, t, s ? o : void 0)
      }

      function Fe(e, t) {
        Se[e] = Se[e] || [], Se[e].push(t)
      }

      function De(e, t, n) {
        return () => {
          n && n();
          const r = Se[e];
          if (!r) return;
          const o = r.indexOf(t); - 1 !== o && r.splice(o, 1)
        }
      }
      const Ne = z.OW,
        Le = "sentryReplaySession",
        Pe = "replay_event",
        je = "Unable to send Replay",
        $e = 5e3,
        Be = 5500,
        Ue = 15e4,
        He = 5e3,
        qe = 2e7,
        ze = 4999,
        We = 36e5;

      function Ke(e) {
        let t, n = e[0],
          r = 1;
        for (; r < e.length;) {
          const o = e[r],
            s = e[r + 1];
          if (r += 2, ("optionalAccess" === o || "optionalCall" === o) && null == n) return;
          "access" === o || "optionalAccess" === o ? (t = n, n = s(n)) : "call" !== o && "optionalCall" !== o || (n = s((function() {
            for (var e = arguments.length, r = new Array(e), o = 0; o < e; o++) r[o] = arguments[o];
            return n.call(t, ...r)
          })), t = void 0)
        }
        return n
      }
      var Ge;

      function Ve(e) {
        const t = Ke([e, "optionalAccess", e => e.host]);
        return Boolean(Ke([t, "optionalAccess", e => e.shadowRoot]) === e)
      }

      function Je(e) {
        return "[object ShadowRoot]" === Object.prototype.toString.call(e)
      }

      function Ye(e) {
        try {
          const n = e.rules || e.cssRules;
          return n ? ((t = Array.from(n, Xe).join("")).includes(" background-clip: text;") && !t.includes(" -webkit-background-clip: text;") && (t = t.replace(" background-clip: text;", " -webkit-background-clip: text; background-clip: text;")), t) : null
        } catch (e) {
          return null
        }
        var t
      }

      function Xe(e) {
        let t;
        if (function(e) {
            return "styleSheet" in e
          }(e)) try {
          t = Ye(e.styleSheet) || function(e) {
            const {
              cssText: t
            } = e;
            if (t.split('"').length < 3) return t;
            const n = ["@import", `url(${JSON.stringify(e.href)})`];
            return "" === e.layerName ? n.push("layer") : e.layerName && n.push(`layer(${e.layerName})`), e.supportsText && n.push(`supports(${e.supportsText})`), e.media.length && n.push(e.media.mediaText), n.join(" ") + ";"
          }(e)
        } catch (e) {} else if (function(e) {
            return "selectorText" in e
          }(e) && e.selectorText.includes(":")) return e.cssText.replace(/(\[(?:[\w-]+)[^\\])(:(?:[\w-]+)\])/gm, "$1\\$2");
        return t || e.cssText
      }! function(e) {
        e[e.Document = 0] = "Document", e[e.DocumentType = 1] = "DocumentType", e[e.Element = 2] = "Element", e[e.Text = 3] = "Text", e[e.CDATA = 4] = "CDATA", e[e.Comment = 5] = "Comment"
      }(Ge || (Ge = {}));
      class Qe {
        constructor() {
          this.idNodeMap = new Map, this.nodeMetaMap = new WeakMap
        }
        getId(e) {
          if (!e) return -1;
          return () => -1, null != (t = Ke([this, "access", e => e.getMeta, "call", t => t(e), "optionalAccess", e => e.id])) ? t : -1;
          var t
        }
        getNode(e) {
          return this.idNodeMap.get(e) || null
        }
        getIds() {
          return Array.from(this.idNodeMap.keys())
        }
        getMeta(e) {
          return this.nodeMetaMap.get(e) || null
        }
        removeNodeFromMap(e) {
          const t = this.getId(e);
          this.idNodeMap.delete(t), e.childNodes && e.childNodes.forEach((e => this.removeNodeFromMap(e)))
        }
        has(e) {
          return this.idNodeMap.has(e)
        }
        hasNode(e) {
          return this.nodeMetaMap.has(e)
        }
        add(e, t) {
          const n = t.id;
          this.idNodeMap.set(n, e), this.nodeMetaMap.set(e, t)
        }
        replace(e, t) {
          const n = this.getNode(e);
          if (n) {
            const e = this.nodeMetaMap.get(n);
            e && this.nodeMetaMap.set(t, e)
          }
          this.idNodeMap.set(e, t)
        }
        reset() {
          this.idNodeMap = new Map, this.nodeMetaMap = new WeakMap
        }
      }

      function Ze(e) {
        let {
          maskInputOptions: t,
          tagName: n,
          type: r
        } = e;
        return "OPTION" === n && (n = "SELECT"), Boolean(t[n.toLowerCase()] || r && t[r] || "password" === r || "INPUT" === n && !r && t.text)
      }

      function et(e) {
        let {
          isMasked: t,
          element: n,
          value: r,
          maskInputFn: o
        } = e, s = r || "";
        return t ? (o && (s = o(s, n)), "*".repeat(s.length)) : s
      }

      function tt(e) {
        return e.toLowerCase()
      }

      function nt(e) {
        return e.toUpperCase()
      }
      const rt = "__rrweb_original__";

      function ot(e) {
        const t = e.type;
        return e.hasAttribute("data-rr-is-password") ? "password" : t ? tt(t) : null
      }

      function st(e, t, n) {
        return "INPUT" !== t || "radio" !== n && "checkbox" !== n ? e.value : e.getAttribute("value") || ""
      }
      let it = 1;
      const at = new RegExp("[^a-z0-9-_:]"),
        ct = -2;

      function ut() {
        return it++
      }
      let lt, dt;
      const pt = /url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm,
        ht = /^(?:[a-z+]+:)?\/\//i,
        ft = /^www\..*/i,
        mt = /^(data:)([^,]*),(.*)/i;

      function gt(e, t) {
        return (e || "").replace(pt, ((e, n, r, o, s, i) => {
          const a = r || s || i,
            c = n || o || "";
          if (!a) return e;
          if (ht.test(a) || ft.test(a)) return `url(${c}${a}${c})`;
          if (mt.test(a)) return `url(${c}${a}${c})`;
          if ("/" === a[0]) return `url(${c}${function(e){let t="";return t=e.indexOf("//")>-1?e.split("/").slice(0,3).join("/"):e.split("/")[0],t=t.split("?")[0],t}(t)+a}${c})`;
          const u = t.split("/"),
            l = a.split("/");
          u.pop();
          for (const e of l) "." !== e && (".." === e ? u.pop() : u.push(e));
          return `url(${c}${u.join("/")}${c})`
        }))
      }
      const vt = /^[^ \t\n\r\u000c]+/,
        yt = /^[, \t\n\r\u000c]+/;

      function _t(e, t) {
        if (!t || "" === t.trim()) return t;
        const n = e.createElement("a");
        return n.href = t, n.href
      }

      function bt() {
        const e = document.createElement("a");
        return e.href = "", e.href
      }

      function St(e, t, n, r, o, s) {
        return r ? "src" === n || "href" === n && ("use" !== t || "#" !== r[0]) || "xlink:href" === n && "#" !== r[0] ? _t(e, r) : "background" !== n || "table" !== t && "td" !== t && "th" !== t ? "srcset" === n ? function(e, t) {
          if ("" === t.trim()) return t;
          let n = 0;

          function r(e) {
            let r;
            const o = e.exec(t.substring(n));
            return o ? (r = o[0], n += r.length, r) : ""
          }
          const o = [];
          for (; r(yt), !(n >= t.length);) {
            let s = r(vt);
            if ("," === s.slice(-1)) s = _t(e, s.substring(0, s.length - 1)), o.push(s);
            else {
              let r = "";
              s = _t(e, s);
              let i = !1;
              for (;;) {
                const e = t.charAt(n);
                if ("" === e) {
                  o.push((s + r).trim());
                  break
                }
                if (i) ")" === e && (i = !1);
                else {
                  if ("," === e) {
                    n += 1, o.push((s + r).trim());
                    break
                  }
                  "(" === e && (i = !0)
                }
                r += e, n += 1
              }
            }
          }
          return o.join(", ")
        }(e, r) : "style" === n ? gt(r, bt()) : "object" === t && "data" === n ? _t(e, r) : "function" == typeof s ? s(n, r, o) : r : _t(e, r) : r
      }

      function wt(e, t, n) {
        return ("video" === e || "audio" === e) && "autoplay" === t
      }

      function kt(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1 / 0,
          r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        return e ? e.nodeType !== e.ELEMENT_NODE || r > n ? -1 : t(e) ? r : kt(e.parentNode, t, n, r + 1) : -1
      }

      function Tt(e, t) {
        return n => {
          const r = n;
          if (null === r) return !1;
          try {
            if (e)
              if ("string" == typeof e) {
                if (r.matches(`.${e}`)) return !0
              } else if (function(e, t) {
                for (let n = e.classList.length; n--;) {
                  const r = e.classList[n];
                  if (t.test(r)) return !0
                }
                return !1
              }(r, e)) return !0;
            return !(!t || !r.matches(t))
          } catch (e) {
            return !1
          }
        }
      }

      function Et(e, t, n, r, o, s) {
        try {
          const i = e.nodeType === e.ELEMENT_NODE ? e : e.parentElement;
          if (null === i) return !1;
          let a = -1,
            c = -1;
          if (s) {
            if (c = kt(i, Tt(r, o)), c < 0) return !0;
            a = kt(i, Tt(t, n), c >= 0 ? c : 1 / 0)
          } else {
            if (a = kt(i, Tt(t, n)), a < 0) return !1;
            c = kt(i, Tt(r, o), a >= 0 ? a : 1 / 0)
          }
          return a >= 0 ? !(c >= 0) || a <= c : !(c >= 0 || !s)
        } catch (e) {}
        return !!s
      }

      function xt(e) {
        return null == e ? "" : e.toLowerCase()
      }

      function Ct(e, t) {
        const {
          doc: n,
          mirror: r,
          blockClass: o,
          blockSelector: s,
          unblockSelector: i,
          maskAllText: a,
          maskTextClass: c,
          unmaskTextClass: u,
          maskTextSelector: l,
          unmaskTextSelector: d,
          skipChild: p = !1,
          inlineStylesheet: h = !0,
          maskInputOptions: f = {},
          maskAttributeFn: m,
          maskTextFn: g,
          maskInputFn: v,
          slimDOMOptions: y,
          dataURLOptions: _ = {},
          inlineImages: b = !1,
          recordCanvas: S = !1,
          onSerialize: w,
          onIframeLoad: k,
          iframeLoadTimeout: T = 5e3,
          onStylesheetLoad: E,
          stylesheetLoadTimeout: x = 5e3,
          keepIframeSrcFn: C = (() => !1),
          newlyAddedElement: I = !1
        } = t;
        let {
          preserveWhiteSpace: R = !0
        } = t;
        const O = function(e, t) {
          const {
            doc: n,
            mirror: r,
            blockClass: o,
            blockSelector: s,
            unblockSelector: i,
            maskAllText: a,
            maskAttributeFn: c,
            maskTextClass: u,
            unmaskTextClass: l,
            maskTextSelector: d,
            unmaskTextSelector: p,
            inlineStylesheet: h,
            maskInputOptions: f = {},
            maskTextFn: m,
            maskInputFn: g,
            dataURLOptions: v = {},
            inlineImages: y,
            recordCanvas: _,
            keepIframeSrcFn: b,
            newlyAddedElement: S = !1
          } = t, w = function(e, t) {
            if (!t.hasNode(e)) return;
            const n = t.getId(e);
            return 1 === n ? void 0 : n
          }(n, r);
          switch (e.nodeType) {
            case e.DOCUMENT_NODE:
              return "CSS1Compat" !== e.compatMode ? {
                type: Ge.Document,
                childNodes: [],
                compatMode: e.compatMode
              } : {
                type: Ge.Document,
                childNodes: []
              };
            case e.DOCUMENT_TYPE_NODE:
              return {
                type: Ge.DocumentType, name: e.name, publicId: e.publicId, systemId: e.systemId, rootId: w
              };
            case e.ELEMENT_NODE:
              return function(e, t) {
                const {
                  doc: n,
                  blockClass: r,
                  blockSelector: o,
                  unblockSelector: s,
                  inlineStylesheet: i,
                  maskInputOptions: a = {},
                  maskAttributeFn: c,
                  maskInputFn: u,
                  dataURLOptions: l = {},
                  inlineImages: d,
                  recordCanvas: p,
                  keepIframeSrcFn: h,
                  newlyAddedElement: f = !1,
                  rootId: m,
                  maskAllText: g,
                  maskTextClass: v,
                  unmaskTextClass: y,
                  maskTextSelector: _,
                  unmaskTextSelector: b
                } = t, S = function(e, t, n, r) {
                  try {
                    if (r && e.matches(r)) return !1;
                    if ("string" == typeof t) {
                      if (e.classList.contains(t)) return !0
                    } else
                      for (let n = e.classList.length; n--;) {
                        const r = e.classList[n];
                        if (t.test(r)) return !0
                      }
                    if (n) return e.matches(n)
                  } catch (e) {}
                  return !1
                }(e, r, o, s), w = function(e) {
                  if (e instanceof HTMLFormElement) return "form";
                  const t = tt(e.tagName);
                  return at.test(t) ? "div" : t
                }(e);
                let k = {};
                const T = e.attributes.length;
                for (let t = 0; t < T; t++) {
                  const r = e.attributes[t];
                  wt(w, r.name, r.value) || (k[r.name] = St(n, w, tt(r.name), r.value, e, c))
                }
                if ("link" === w && i) {
                  const t = Array.from(n.styleSheets).find((t => t.href === e.href));
                  let r = null;
                  t && (r = Ye(t)), r && (delete k.rel, delete k.href, k._cssText = gt(r, t.href))
                }
                if ("style" === w && e.sheet && !(e.innerText || e.textContent || "").trim().length) {
                  const t = Ye(e.sheet);
                  t && (k._cssText = gt(t, bt()))
                }
                if ("input" === w || "textarea" === w || "select" === w || "option" === w) {
                  const t = e,
                    n = ot(t),
                    r = st(t, nt(w), n),
                    o = t.checked;
                  if ("submit" !== n && "button" !== n && r) {
                    const e = Et(t, v, _, y, b, Ze({
                      type: n,
                      tagName: nt(w),
                      maskInputOptions: a
                    }));
                    k.value = et({
                      isMasked: e,
                      element: t,
                      value: r,
                      maskInputFn: u
                    })
                  }
                  o && (k.checked = o)
                }
                if ("option" === w && (e.selected && !a.select ? k.selected = !0 : delete k.selected), "canvas" === w && p)
                  if ("2d" === e.__context)(function(e) {
                    const t = e.getContext("2d");
                    if (!t) return !0;
                    for (let n = 0; n < e.width; n += 50)
                      for (let r = 0; r < e.height; r += 50) {
                        const o = t.getImageData,
                          s = rt in o ? o[rt] : o;
                        if (new Uint32Array(s.call(t, n, r, Math.min(50, e.width - n), Math.min(50, e.height - r)).data.buffer).some((e => 0 !== e))) return !1
                      }
                    return !0
                  })(e) || (k.rr_dataURL = e.toDataURL(l.type, l.quality));
                  else if (!("__context" in e)) {
                  const t = e.toDataURL(l.type, l.quality),
                    n = document.createElement("canvas");
                  n.width = e.width, n.height = e.height, t !== n.toDataURL(l.type, l.quality) && (k.rr_dataURL = t)
                }
                if ("img" === w && d) {
                  lt || (lt = n.createElement("canvas"), dt = lt.getContext("2d"));
                  const t = e,
                    r = t.crossOrigin;
                  t.crossOrigin = "anonymous";
                  const o = () => {
                    t.removeEventListener("load", o);
                    try {
                      lt.width = t.naturalWidth, lt.height = t.naturalHeight, dt.drawImage(t, 0, 0), k.rr_dataURL = lt.toDataURL(l.type, l.quality)
                    } catch (e) {
                      console.warn(`Cannot inline img src=${t.currentSrc}! Error: ${e}`)
                    }
                    r ? k.crossOrigin = r : t.removeAttribute("crossorigin")
                  };
                  t.complete && 0 !== t.naturalWidth ? o() : t.addEventListener("load", o)
                }
                if ("audio" !== w && "video" !== w || (k.rr_mediaState = e.paused ? "paused" : "played", k.rr_mediaCurrentTime = e.currentTime), f || (e.scrollLeft && (k.rr_scrollLeft = e.scrollLeft), e.scrollTop && (k.rr_scrollTop = e.scrollTop)), S) {
                  const {
                    width: t,
                    height: n
                  } = e.getBoundingClientRect();
                  k = {
                    class: k.class,
                    rr_width: `${t}px`,
                    rr_height: `${n}px`
                  }
                }
                let E;
                "iframe" !== w || h(k.src) || (e.contentDocument || (k.rr_src = k.src), delete k.src);
                try {
                  customElements.get(w) && (E = !0)
                } catch (e) {}
                return {
                  type: Ge.Element,
                  tagName: w,
                  attributes: k,
                  childNodes: [],
                  isSVG: (x = e, Boolean("svg" === x.tagName || x.ownerSVGElement) || void 0),
                  needBlock: S,
                  rootId: m,
                  isCustom: E
                };
                var x
              }(e, {
                doc: n,
                blockClass: o,
                blockSelector: s,
                unblockSelector: i,
                inlineStylesheet: h,
                maskAttributeFn: c,
                maskInputOptions: f,
                maskInputFn: g,
                dataURLOptions: v,
                inlineImages: y,
                recordCanvas: _,
                keepIframeSrcFn: b,
                newlyAddedElement: S,
                rootId: w,
                maskAllText: a,
                maskTextClass: u,
                unmaskTextClass: l,
                maskTextSelector: d,
                unmaskTextSelector: p
              });
            case e.TEXT_NODE:
              return function(e, t) {
                const {
                  maskAllText: n,
                  maskTextClass: r,
                  unmaskTextClass: o,
                  maskTextSelector: s,
                  unmaskTextSelector: i,
                  maskTextFn: a,
                  maskInputOptions: c,
                  maskInputFn: u,
                  rootId: l
                } = t, d = e.parentNode && e.parentNode.tagName;
                let p = e.textContent;
                const h = "STYLE" === d || void 0,
                  f = "SCRIPT" === d || void 0,
                  m = "TEXTAREA" === d || void 0;
                if (h && p) {
                  try {
                    e.nextSibling || e.previousSibling || Ke([e, "access", e => e.parentNode, "access", e => e.sheet, "optionalAccess", e => e.cssRules]) && (p = Ye(e.parentNode.sheet))
                  } catch (t) {
                    console.warn(`Cannot get CSS styles from text's parentNode. Error: ${t}`, e)
                  }
                  p = gt(p, bt())
                }
                f && (p = "SCRIPT_PLACEHOLDER");
                const g = Et(e, r, s, o, i, n);
                return h || f || m || !p || !g || (p = a ? a(p) : p.replace(/[\S]/g, "*")), m && p && (c.textarea || g) && (p = u ? u(p, e.parentNode) : p.replace(/[\S]/g, "*")), "OPTION" === d && p && (p = et({
                  isMasked: Et(e, r, s, o, i, Ze({
                    type: null,
                    tagName: d,
                    maskInputOptions: c
                  })),
                  element: e,
                  value: p,
                  maskInputFn: u
                })), {
                  type: Ge.Text,
                  textContent: p || "",
                  isStyle: h,
                  rootId: l
                }
              }(e, {
                maskAllText: a,
                maskTextClass: u,
                unmaskTextClass: l,
                maskTextSelector: d,
                unmaskTextSelector: p,
                maskTextFn: m,
                maskInputOptions: f,
                maskInputFn: g,
                rootId: w
              });
            case e.CDATA_SECTION_NODE:
              return {
                type: Ge.CDATA, textContent: "", rootId: w
              };
            case e.COMMENT_NODE:
              return {
                type: Ge.Comment, textContent: e.textContent || "", rootId: w
              };
            default:
              return !1
          }
        }(e, {
          doc: n,
          mirror: r,
          blockClass: o,
          blockSelector: s,
          maskAllText: a,
          unblockSelector: i,
          maskTextClass: c,
          unmaskTextClass: u,
          maskTextSelector: l,
          unmaskTextSelector: d,
          inlineStylesheet: h,
          maskInputOptions: f,
          maskAttributeFn: m,
          maskTextFn: g,
          maskInputFn: v,
          dataURLOptions: _,
          inlineImages: b,
          recordCanvas: S,
          keepIframeSrcFn: C,
          newlyAddedElement: I
        });
        if (!O) return console.warn(e, "not serialized"), null;
        let M;
        M = r.hasNode(e) ? r.getId(e) : ! function(e, t) {
          if (t.comment && e.type === Ge.Comment) return !0;
          if (e.type === Ge.Element) {
            if (t.script && ("script" === e.tagName || "link" === e.tagName && ("preload" === e.attributes.rel || "modulepreload" === e.attributes.rel) && "script" === e.attributes.as || "link" === e.tagName && "prefetch" === e.attributes.rel && "string" == typeof e.attributes.href && e.attributes.href.endsWith(".js"))) return !0;
            if (t.headFavicon && ("link" === e.tagName && "shortcut icon" === e.attributes.rel || "meta" === e.tagName && (xt(e.attributes.name).match(/^msapplication-tile(image|color)$/) || "application-name" === xt(e.attributes.name) || "icon" === xt(e.attributes.rel) || "apple-touch-icon" === xt(e.attributes.rel) || "shortcut icon" === xt(e.attributes.rel)))) return !0;
            if ("meta" === e.tagName) {
              if (t.headMetaDescKeywords && xt(e.attributes.name).match(/^description|keywords$/)) return !0;
              if (t.headMetaSocial && (xt(e.attributes.property).match(/^(og|twitter|fb):/) || xt(e.attributes.name).match(/^(og|twitter):/) || "pinterest" === xt(e.attributes.name))) return !0;
              if (t.headMetaRobots && ("robots" === xt(e.attributes.name) || "googlebot" === xt(e.attributes.name) || "bingbot" === xt(e.attributes.name))) return !0;
              if (t.headMetaHttpEquiv && void 0 !== e.attributes["http-equiv"]) return !0;
              if (t.headMetaAuthorship && ("author" === xt(e.attributes.name) || "generator" === xt(e.attributes.name) || "framework" === xt(e.attributes.name) || "publisher" === xt(e.attributes.name) || "progid" === xt(e.attributes.name) || xt(e.attributes.property).match(/^article:/) || xt(e.attributes.property).match(/^product:/))) return !0;
              if (t.headMetaVerification && ("google-site-verification" === xt(e.attributes.name) || "yandex-verification" === xt(e.attributes.name) || "csrf-token" === xt(e.attributes.name) || "p:domain_verify" === xt(e.attributes.name) || "verify-v1" === xt(e.attributes.name) || "verification" === xt(e.attributes.name) || "shopify-checkout-api-token" === xt(e.attributes.name))) return !0
            }
          }
          return !1
        }(O, y) && (R || O.type !== Ge.Text || O.isStyle || O.textContent.replace(/^\s+|\s+$/gm, "").length) ? ut() : ct;
        const A = Object.assign(O, {
          id: M
        });
        if (r.add(e, A), M === ct) return null;
        w && w(e);
        let F = !p;
        if (A.type === Ge.Element) {
          F = F && !A.needBlock, delete A.needBlock;
          const t = e.shadowRoot;
          t && Je(t) && (A.isShadowHost = !0)
        }
        if ((A.type === Ge.Document || A.type === Ge.Element) && F) {
          y.headWhitespace && A.type === Ge.Element && "head" === A.tagName && (R = !1);
          const t = {
            doc: n,
            mirror: r,
            blockClass: o,
            blockSelector: s,
            maskAllText: a,
            unblockSelector: i,
            maskTextClass: c,
            unmaskTextClass: u,
            maskTextSelector: l,
            unmaskTextSelector: d,
            skipChild: p,
            inlineStylesheet: h,
            maskInputOptions: f,
            maskAttributeFn: m,
            maskTextFn: g,
            maskInputFn: v,
            slimDOMOptions: y,
            dataURLOptions: _,
            inlineImages: b,
            recordCanvas: S,
            preserveWhiteSpace: R,
            onSerialize: w,
            onIframeLoad: k,
            iframeLoadTimeout: T,
            onStylesheetLoad: E,
            stylesheetLoadTimeout: x,
            keepIframeSrcFn: C
          };
          for (const n of Array.from(e.childNodes)) {
            const e = Ct(n, t);
            e && A.childNodes.push(e)
          }
          if (function(e) {
              return e.nodeType === e.ELEMENT_NODE
            }(e) && e.shadowRoot)
            for (const n of Array.from(e.shadowRoot.childNodes)) {
              const r = Ct(n, t);
              r && (Je(e.shadowRoot) && (r.isShadow = !0), A.childNodes.push(r))
            }
        }
        return e.parentNode && Ve(e.parentNode) && Je(e.parentNode) && (A.isShadow = !0), A.type === Ge.Element && "iframe" === A.tagName && function(e, t, n) {
          const r = e.contentWindow;
          if (!r) return;
          let o, s = !1;
          try {
            o = r.document.readyState
          } catch (e) {
            return
          }
          if ("complete" !== o) {
            const r = setTimeout((() => {
              s || (t(), s = !0)
            }), n);
            return void e.addEventListener("load", (() => {
              clearTimeout(r), s = !0, t()
            }))
          }
          const i = "about:blank";
          if (r.location.href !== i || e.src === i || "" === e.src) return setTimeout(t, 0), e.addEventListener("load", t);
          e.addEventListener("load", t)
        }(e, (() => {
          const t = e.contentDocument;
          if (t && k) {
            const n = Ct(t, {
              doc: t,
              mirror: r,
              blockClass: o,
              blockSelector: s,
              unblockSelector: i,
              maskAllText: a,
              maskTextClass: c,
              unmaskTextClass: u,
              maskTextSelector: l,
              unmaskTextSelector: d,
              skipChild: !1,
              inlineStylesheet: h,
              maskInputOptions: f,
              maskAttributeFn: m,
              maskTextFn: g,
              maskInputFn: v,
              slimDOMOptions: y,
              dataURLOptions: _,
              inlineImages: b,
              recordCanvas: S,
              preserveWhiteSpace: R,
              onSerialize: w,
              onIframeLoad: k,
              iframeLoadTimeout: T,
              onStylesheetLoad: E,
              stylesheetLoadTimeout: x,
              keepIframeSrcFn: C
            });
            n && k(e, n)
          }
        }), T), A.type === Ge.Element && "link" === A.tagName && "stylesheet" === A.attributes.rel && function(e, t, n) {
          let r, o = !1;
          try {
            r = e.sheet
          } catch (e) {
            return
          }
          if (r) return;
          const s = setTimeout((() => {
            o || (t(), o = !0)
          }), n);
          e.addEventListener("load", (() => {
            clearTimeout(s), o = !0, t()
          }))
        }(e, (() => {
          if (E) {
            const t = Ct(e, {
              doc: n,
              mirror: r,
              blockClass: o,
              blockSelector: s,
              unblockSelector: i,
              maskAllText: a,
              maskTextClass: c,
              unmaskTextClass: u,
              maskTextSelector: l,
              unmaskTextSelector: d,
              skipChild: !1,
              inlineStylesheet: h,
              maskInputOptions: f,
              maskAttributeFn: m,
              maskTextFn: g,
              maskInputFn: v,
              slimDOMOptions: y,
              dataURLOptions: _,
              inlineImages: b,
              recordCanvas: S,
              preserveWhiteSpace: R,
              onSerialize: w,
              onIframeLoad: k,
              iframeLoadTimeout: T,
              onStylesheetLoad: E,
              stylesheetLoadTimeout: x,
              keepIframeSrcFn: C
            });
            t && E(e, t)
          }
        }), x), A
      }

      function It(e) {
        let t, n = e[0],
          r = 1;
        for (; r < e.length;) {
          const o = e[r],
            s = e[r + 1];
          if (r += 2, ("optionalAccess" === o || "optionalCall" === o) && null == n) return;
          "access" === o || "optionalAccess" === o ? (t = n, n = s(n)) : "call" !== o && "optionalCall" !== o || (n = s((function() {
            for (var e = arguments.length, r = new Array(e), o = 0; o < e; o++) r[o] = arguments[o];
            return n.call(t, ...r)
          })), t = void 0)
        }
        return n
      }

      function Rt(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : document;
        const r = {
          capture: !0,
          passive: !0
        };
        return n.addEventListener(e, t, r), () => n.removeEventListener(e, t, r)
      }
      const Ot = "Please stop import mirror directly. Instead of that,\r\nnow you can use replayer.getMirror() to access the mirror instance of a replayer,\r\nor you can use record.mirror to access the mirror instance during recording.";
      let Mt = {
        map: {},
        getId: () => (console.error(Ot), -1),
        getNode: () => (console.error(Ot), null),
        removeNodeFromMap() {
          console.error(Ot)
        },
        has: () => (console.error(Ot), !1),
        reset() {
          console.error(Ot)
        }
      };

      function At(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          r = null,
          o = 0;
        return function() {
          for (var s = arguments.length, i = new Array(s), a = 0; a < s; a++) i[a] = arguments[a];
          const c = Date.now();
          o || !1 !== n.leading || (o = c);
          const u = t - (c - o),
            l = this;
          u <= 0 || u > t ? (r && (clearTimeout(r), r = null), o = c, e.apply(l, i)) : r || !1 === n.trailing || (r = setTimeout((() => {
            o = !1 === n.leading ? 0 : Date.now(), r = null, e.apply(l, i)
          }), u))
        }
      }

      function Ft(e, t, n, r) {
        let o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : window;
        const s = o.Object.getOwnPropertyDescriptor(e, t);
        return o.Object.defineProperty(e, t, r ? n : {
          set(e) {
            setTimeout((() => {
              n.set.call(this, e)
            }), 0), s && s.set && s.set.call(this, e)
          }
        }), () => Ft(e, t, s || {}, !0)
      }

      function Dt(e, t, n) {
        try {
          if (!(t in e)) return () => {};
          const r = e[t],
            o = n(r);
          return "function" == typeof o && (o.prototype = o.prototype || {}, Object.defineProperties(o, {
            __rrweb_original__: {
              enumerable: !1,
              value: r
            }
          })), e[t] = o, () => {
            e[t] = r
          }
        } catch (e) {
          return () => {}
        }
      }
      "undefined" != typeof window && window.Proxy && window.Reflect && (Mt = new Proxy(Mt, {
        get: (e, t, n) => ("map" === t && console.error(Ot), Reflect.get(e, t, n))
      }));
      let Nt, Lt = Date.now;

      function Pt(e) {
        const t = e.document;
        return {
          left: t.scrollingElement ? t.scrollingElement.scrollLeft : void 0 !== e.pageXOffset ? e.pageXOffset : It([t, "optionalAccess", e => e.documentElement, "access", e => e.scrollLeft]) || It([t, "optionalAccess", e => e.body, "optionalAccess", e => e.parentElement, "optionalAccess", e => e.scrollLeft]) || It([t, "optionalAccess", e => e.body, "optionalAccess", e => e.scrollLeft]) || 0,
          top: t.scrollingElement ? t.scrollingElement.scrollTop : void 0 !== e.pageYOffset ? e.pageYOffset : It([t, "optionalAccess", e => e.documentElement, "access", e => e.scrollTop]) || It([t, "optionalAccess", e => e.body, "optionalAccess", e => e.parentElement, "optionalAccess", e => e.scrollTop]) || It([t, "optionalAccess", e => e.body, "optionalAccess", e => e.scrollTop]) || 0
        }
      }

      function jt() {
        return window.innerHeight || document.documentElement && document.documentElement.clientHeight || document.body && document.body.clientHeight
      }

      function $t() {
        return window.innerWidth || document.documentElement && document.documentElement.clientWidth || document.body && document.body.clientWidth
      }

      function Bt(e, t, n, r, o) {
        if (!e) return !1;
        const s = e.nodeType === e.ELEMENT_NODE ? e : e.parentElement;
        if (!s) return !1;
        const i = Tt(t, n);
        if (!o) {
          const e = r && s.matches(r);
          return i(s) && !e
        }
        const a = kt(s, i);
        let c = -1;
        return !(a < 0) && (r && (c = kt(s, Tt(null, r))), a > -1 && c < 0 || a < c)
      }

      function Ut(e, t) {
        return t.getId(e) === ct
      }

      function Ht(e, t) {
        if (Ve(e)) return !1;
        const n = t.getId(e);
        return !t.has(n) || (!e.parentNode || e.parentNode.nodeType !== e.DOCUMENT_NODE) && (!e.parentNode || Ht(e.parentNode, t))
      }

      function qt(e) {
        return Boolean(e.changedTouches)
      }

      function zt(e, t) {
        return Boolean("IFRAME" === e.nodeName && t.getMeta(e))
      }

      function Wt(e, t) {
        return Boolean("LINK" === e.nodeName && e.nodeType === e.ELEMENT_NODE && e.getAttribute && "stylesheet" === e.getAttribute("rel") && t.getMeta(e))
      }

      function Kt(e) {
        return Boolean(It([e, "optionalAccess", e => e.shadowRoot]))
      }
      /[1-9][0-9]{12}/.test(Date.now().toString()) || (Lt = () => (new Date).getTime());
      class Gt {
        constructor() {
          this.id = 1, this.styleIDMap = new WeakMap, this.idStyleMap = new Map
        }
        getId(e) {
          return () => -1, null != (t = this.styleIDMap.get(e)) ? t : -1;
          var t
        }
        has(e) {
          return this.styleIDMap.has(e)
        }
        add(e, t) {
          if (this.has(e)) return this.getId(e);
          let n;
          return n = void 0 === t ? this.id++ : t, this.styleIDMap.set(e, n), this.idStyleMap.set(n, e), n
        }
        getStyle(e) {
          return this.idStyleMap.get(e) || null
        }
        reset() {
          this.styleIDMap = new WeakMap, this.idStyleMap = new Map, this.id = 1
        }
        generateId() {
          return this.id++
        }
      }

      function Vt(e) {
        let t = null;
        return It([e, "access", e => e.getRootNode, "optionalCall", e => e(), "optionalAccess", e => e.nodeType]) === Node.DOCUMENT_FRAGMENT_NODE && e.getRootNode().host && (t = e.getRootNode().host), t
      }

      function Jt(e) {
        const t = e.ownerDocument;
        return !!t && (t.contains(e) || function(e) {
          const t = e.ownerDocument;
          if (!t) return !1;
          const n = function(e) {
            let t, n = e;
            for (; t = Vt(n);) n = t;
            return n
          }(e);
          return t.contains(n)
        }(e))
      }
      var Yt = (e => (e[e.DomContentLoaded = 0] = "DomContentLoaded", e[e.Load = 1] = "Load", e[e.FullSnapshot = 2] = "FullSnapshot", e[e.IncrementalSnapshot = 3] = "IncrementalSnapshot", e[e.Meta = 4] = "Meta", e[e.Custom = 5] = "Custom", e[e.Plugin = 6] = "Plugin", e))(Yt || {}),
        Xt = (e => (e[e.Mutation = 0] = "Mutation", e[e.MouseMove = 1] = "MouseMove", e[e.MouseInteraction = 2] = "MouseInteraction", e[e.Scroll = 3] = "Scroll", e[e.ViewportResize = 4] = "ViewportResize", e[e.Input = 5] = "Input", e[e.TouchMove = 6] = "TouchMove", e[e.MediaInteraction = 7] = "MediaInteraction", e[e.StyleSheetRule = 8] = "StyleSheetRule", e[e.CanvasMutation = 9] = "CanvasMutation", e[e.Font = 10] = "Font", e[e.Log = 11] = "Log", e[e.Drag = 12] = "Drag", e[e.StyleDeclaration = 13] = "StyleDeclaration", e[e.Selection = 14] = "Selection", e[e.AdoptedStyleSheet = 15] = "AdoptedStyleSheet", e[e.CustomElement = 16] = "CustomElement", e))(Xt || {}),
        Qt = (e => (e[e.MouseUp = 0] = "MouseUp", e[e.MouseDown = 1] = "MouseDown", e[e.Click = 2] = "Click", e[e.ContextMenu = 3] = "ContextMenu", e[e.DblClick = 4] = "DblClick", e[e.Focus = 5] = "Focus", e[e.Blur = 6] = "Blur", e[e.TouchStart = 7] = "TouchStart", e[e.TouchMove_Departed = 8] = "TouchMove_Departed", e[e.TouchEnd = 9] = "TouchEnd", e[e.TouchCancel = 10] = "TouchCancel", e))(Qt || {}),
        Zt = (e => (e[e.Mouse = 0] = "Mouse", e[e.Pen = 1] = "Pen", e[e.Touch = 2] = "Touch", e))(Zt || {});

      function en(e) {
        let t, n = e[0],
          r = 1;
        for (; r < e.length;) {
          const o = e[r],
            s = e[r + 1];
          if (r += 2, ("optionalAccess" === o || "optionalCall" === o) && null == n) return;
          "access" === o || "optionalAccess" === o ? (t = n, n = s(n)) : "call" !== o && "optionalCall" !== o || (n = s((function() {
            for (var e = arguments.length, r = new Array(e), o = 0; o < e; o++) r[o] = arguments[o];
            return n.call(t, ...r)
          })), t = void 0)
        }
        return n
      }

      function tn(e) {
        return "__ln" in e
      }
      class nn {
        constructor() {
          this.length = 0, this.head = null, this.tail = null
        }
        get(e) {
          if (e >= this.length) throw new Error("Position outside of list range");
          let t = this.head;
          for (let n = 0; n < e; n++) t = en([t, "optionalAccess", e => e.next]) || null;
          return t
        }
        addNode(e) {
          const t = {
            value: e,
            previous: null,
            next: null
          };
          if (e.__ln = t, e.previousSibling && tn(e.previousSibling)) {
            const n = e.previousSibling.__ln.next;
            t.next = n, t.previous = e.previousSibling.__ln, e.previousSibling.__ln.next = t, n && (n.previous = t)
          } else if (e.nextSibling && tn(e.nextSibling) && e.nextSibling.__ln.previous) {
            const n = e.nextSibling.__ln.previous;
            t.previous = n, t.next = e.nextSibling.__ln, e.nextSibling.__ln.previous = t, n && (n.next = t)
          } else this.head && (this.head.previous = t), t.next = this.head, this.head = t;
          null === t.next && (this.tail = t), this.length++
        }
        removeNode(e) {
          const t = e.__ln;
          this.head && (t.previous ? (t.previous.next = t.next, t.next ? t.next.previous = t.previous : this.tail = t.previous) : (this.head = t.next, this.head ? this.head.previous = null : this.tail = null), e.__ln && delete e.__ln, this.length--)
        }
      }
      const rn = (e, t) => `${e}@${t}`;
      class on {
        constructor() {
          this.frozen = !1, this.locked = !1, this.texts = [], this.attributes = [], this.removes = [], this.mapRemoves = [], this.movedMap = {}, this.addedSet = new Set, this.movedSet = new Set, this.droppedSet = new Set, this.processMutations = e => {
            e.forEach(this.processMutation), this.emit()
          }, this.emit = () => {
            if (this.frozen || this.locked) return;
            const e = [],
              t = new Set,
              n = new nn,
              r = e => {
                let t = e,
                  n = ct;
                for (; n === ct;) t = t && t.nextSibling, n = t && this.mirror.getId(t);
                return n
              },
              o = o => {
                if (!o.parentNode || !Jt(o)) return;
                const s = Ve(o.parentNode) ? this.mirror.getId(Vt(o)) : this.mirror.getId(o.parentNode),
                  i = r(o);
                if (-1 === s || -1 === i) return n.addNode(o);
                const a = Ct(o, {
                  doc: this.doc,
                  mirror: this.mirror,
                  blockClass: this.blockClass,
                  blockSelector: this.blockSelector,
                  maskAllText: this.maskAllText,
                  unblockSelector: this.unblockSelector,
                  maskTextClass: this.maskTextClass,
                  unmaskTextClass: this.unmaskTextClass,
                  maskTextSelector: this.maskTextSelector,
                  unmaskTextSelector: this.unmaskTextSelector,
                  skipChild: !0,
                  newlyAddedElement: !0,
                  inlineStylesheet: this.inlineStylesheet,
                  maskInputOptions: this.maskInputOptions,
                  maskAttributeFn: this.maskAttributeFn,
                  maskTextFn: this.maskTextFn,
                  maskInputFn: this.maskInputFn,
                  slimDOMOptions: this.slimDOMOptions,
                  dataURLOptions: this.dataURLOptions,
                  recordCanvas: this.recordCanvas,
                  inlineImages: this.inlineImages,
                  onSerialize: e => {
                    zt(e, this.mirror) && this.iframeManager.addIframe(e), Wt(e, this.mirror) && this.stylesheetManager.trackLinkElement(e), Kt(o) && this.shadowDomManager.addShadowRoot(o.shadowRoot, this.doc)
                  },
                  onIframeLoad: (e, t) => {
                    this.iframeManager.attachIframe(e, t), this.shadowDomManager.observeAttachShadow(e)
                  },
                  onStylesheetLoad: (e, t) => {
                    this.stylesheetManager.attachLinkElement(e, t)
                  }
                });
                a && (e.push({
                  parentId: s,
                  nextId: i,
                  node: a
                }), t.add(a.id))
              };
            for (; this.mapRemoves.length;) this.mirror.removeNodeFromMap(this.mapRemoves.shift());
            for (const e of this.movedSet) an(this.removes, e, this.mirror) && !this.movedSet.has(e.parentNode) || o(e);
            for (const e of this.addedSet) un(this.droppedSet, e) || an(this.removes, e, this.mirror) ? un(this.movedSet, e) ? o(e) : this.droppedSet.add(e) : o(e);
            let s = null;
            for (; n.length;) {
              let e = null;
              if (s) {
                const t = this.mirror.getId(s.value.parentNode),
                  n = r(s.value); - 1 !== t && -1 !== n && (e = s)
              }
              if (!e) {
                let t = n.tail;
                for (; t;) {
                  const n = t;
                  if (t = t.previous, n) {
                    const t = this.mirror.getId(n.value.parentNode);
                    if (-1 === r(n.value)) continue;
                    if (-1 !== t) {
                      e = n;
                      break
                    } {
                      const t = n.value;
                      if (t.parentNode && t.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
                        const r = t.parentNode.host;
                        if (-1 !== this.mirror.getId(r)) {
                          e = n;
                          break
                        }
                      }
                    }
                  }
                }
              }
              if (!e) {
                for (; n.head;) n.removeNode(n.head.value);
                break
              }
              s = e.previous, n.removeNode(e.value), o(e.value)
            }
            const i = {
              texts: this.texts.map((e => ({
                id: this.mirror.getId(e.node),
                value: e.value
              }))).filter((e => !t.has(e.id))).filter((e => this.mirror.has(e.id))),
              attributes: this.attributes.map((e => {
                const {
                  attributes: t
                } = e;
                if ("string" == typeof t.style) {
                  const n = JSON.stringify(e.styleDiff),
                    r = JSON.stringify(e._unchangedStyles);
                  n.length < t.style.length && (n + r).split("var(").length === t.style.split("var(").length && (t.style = e.styleDiff)
                }
                return {
                  id: this.mirror.getId(e.node),
                  attributes: t
                }
              })).filter((e => !t.has(e.id))).filter((e => this.mirror.has(e.id))),
              removes: this.removes,
              adds: e
            };
            (i.texts.length || i.attributes.length || i.removes.length || i.adds.length) && (this.texts = [], this.attributes = [], this.removes = [], this.addedSet = new Set, this.movedSet = new Set, this.droppedSet = new Set, this.movedMap = {}, this.mutationCb(i))
          }, this.processMutation = e => {
            if (Ut(e.target, this.mirror)) return;
            let t;
            try {
              t = document.implementation.createHTMLDocument()
            } catch (e) {
              t = this.doc
            }
            switch (e.type) {
              case "characterData": {
                const t = e.target.textContent;
                Bt(e.target, this.blockClass, this.blockSelector, this.unblockSelector, !1) || t === e.oldValue || this.texts.push({
                  value: Et(e.target, this.maskTextClass, this.maskTextSelector, this.unmaskTextClass, this.unmaskTextSelector, this.maskAllText) && t ? this.maskTextFn ? this.maskTextFn(t) : t.replace(/[\S]/g, "*") : t,
                  node: e.target
                });
                break
              }
              case "attributes": {
                const n = e.target;
                let r = e.attributeName,
                  o = e.target.getAttribute(r);
                if ("value" === r) {
                  const t = ot(n),
                    r = n.tagName;
                  o = st(n, r, t);
                  const s = Ze({
                    maskInputOptions: this.maskInputOptions,
                    tagName: r,
                    type: t
                  });
                  o = et({
                    isMasked: Et(e.target, this.maskTextClass, this.maskTextSelector, this.unmaskTextClass, this.unmaskTextSelector, s),
                    element: n,
                    value: o,
                    maskInputFn: this.maskInputFn
                  })
                }
                if (Bt(e.target, this.blockClass, this.blockSelector, this.unblockSelector, !1) || o === e.oldValue) return;
                let s = this.attributes.find((t => t.node === e.target));
                if ("IFRAME" === n.tagName && "src" === r && !this.keepIframeSrcFn(o)) {
                  if (n.contentDocument) return;
                  r = "rr_src"
                }
                if (s || (s = {
                    node: e.target,
                    attributes: {},
                    styleDiff: {},
                    _unchangedStyles: {}
                  }, this.attributes.push(s)), "type" === r && "INPUT" === n.tagName && "password" === (e.oldValue || "").toLowerCase() && n.setAttribute("data-rr-is-password", "true"), !wt(n.tagName, r) && (s.attributes[r] = St(this.doc, tt(n.tagName), tt(r), o, n, this.maskAttributeFn), "style" === r)) {
                  const r = t.createElement("span");
                  e.oldValue && r.setAttribute("style", e.oldValue);
                  for (const e of Array.from(n.style)) {
                    const t = n.style.getPropertyValue(e),
                      o = n.style.getPropertyPriority(e);
                    t !== r.style.getPropertyValue(e) || o !== r.style.getPropertyPriority(e) ? s.styleDiff[e] = "" === o ? t : [t, o] : s._unchangedStyles[e] = [t, o]
                  }
                  for (const e of Array.from(r.style)) "" === n.style.getPropertyValue(e) && (s.styleDiff[e] = !1)
                }
                break
              }
              case "childList":
                if (Bt(e.target, this.blockClass, this.blockSelector, this.unblockSelector, !0)) return;
                e.addedNodes.forEach((t => this.genAdds(t, e.target))), e.removedNodes.forEach((t => {
                  const n = this.mirror.getId(t),
                    r = Ve(e.target) ? this.mirror.getId(e.target.host) : this.mirror.getId(e.target);
                  Bt(e.target, this.blockClass, this.blockSelector, this.unblockSelector, !1) || Ut(t, this.mirror) || ! function(e, t) {
                    return -1 !== t.getId(e)
                  }(t, this.mirror) || (this.addedSet.has(t) ? (sn(this.addedSet, t), this.droppedSet.add(t)) : this.addedSet.has(e.target) && -1 === n || Ht(e.target, this.mirror) || (this.movedSet.has(t) && this.movedMap[rn(n, r)] ? sn(this.movedSet, t) : this.removes.push({
                    parentId: r,
                    id: n,
                    isShadow: !(!Ve(e.target) || !Je(e.target)) || void 0
                  })), this.mapRemoves.push(t))
                }))
            }
          }, this.genAdds = (e, t) => {
            if (!this.processedNodeManager.inOtherBuffer(e, this) && !this.addedSet.has(e) && !this.movedSet.has(e)) {
              if (this.mirror.hasNode(e)) {
                if (Ut(e, this.mirror)) return;
                this.movedSet.add(e);
                let n = null;
                t && this.mirror.hasNode(t) && (n = this.mirror.getId(t)), n && -1 !== n && (this.movedMap[rn(this.mirror.getId(e), n)] = !0)
              } else this.addedSet.add(e), this.droppedSet.delete(e);
              Bt(e, this.blockClass, this.blockSelector, this.unblockSelector, !1) || (e.childNodes.forEach((e => this.genAdds(e))), Kt(e) && e.shadowRoot.childNodes.forEach((t => {
                this.processedNodeManager.add(t, this), this.genAdds(t, e)
              })))
            }
          }
        }
        init(e) {
          ["mutationCb", "blockClass", "blockSelector", "unblockSelector", "maskAllText", "maskTextClass", "unmaskTextClass", "maskTextSelector", "unmaskTextSelector", "inlineStylesheet", "maskInputOptions", "maskAttributeFn", "maskTextFn", "maskInputFn", "keepIframeSrcFn", "recordCanvas", "inlineImages", "slimDOMOptions", "dataURLOptions", "doc", "mirror", "iframeManager", "stylesheetManager", "shadowDomManager", "canvasManager", "processedNodeManager"].forEach((t => {
            this[t] = e[t]
          }))
        }
        freeze() {
          this.frozen = !0, this.canvasManager.freeze()
        }
        unfreeze() {
          this.frozen = !1, this.canvasManager.unfreeze(), this.emit()
        }
        isFrozen() {
          return this.frozen
        }
        lock() {
          this.locked = !0, this.canvasManager.lock()
        }
        unlock() {
          this.locked = !1, this.canvasManager.unlock(), this.emit()
        }
        reset() {
          this.shadowDomManager.reset(), this.canvasManager.reset()
        }
      }

      function sn(e, t) {
        e.delete(t), t.childNodes.forEach((t => sn(e, t)))
      }

      function an(e, t, n) {
        return 0 !== e.length && cn(e, t, n)
      }

      function cn(e, t, n) {
        const {
          parentNode: r
        } = t;
        if (!r) return !1;
        const o = n.getId(r);
        return !!e.some((e => e.id === o)) || cn(e, r, n)
      }

      function un(e, t) {
        return 0 !== e.size && ln(e, t)
      }

      function ln(e, t) {
        const {
          parentNode: n
        } = t;
        return !!n && (!!e.has(n) || ln(e, n))
      }
      let dn;

      function pn(e) {
        dn = e
      }

      function hn() {
        dn = void 0
      }
      const fn = e => dn ? function() {
        try {
          return e(...arguments)
        } catch (e) {
          if (dn && !0 === dn(e)) return () => {};
          throw e
        }
      } : e;

      function mn(e) {
        let t, n = e[0],
          r = 1;
        for (; r < e.length;) {
          const o = e[r],
            s = e[r + 1];
          if (r += 2, ("optionalAccess" === o || "optionalCall" === o) && null == n) return;
          "access" === o || "optionalAccess" === o ? (t = n, n = s(n)) : "call" !== o && "optionalCall" !== o || (n = s((function() {
            for (var e = arguments.length, r = new Array(e), o = 0; o < e; o++) r[o] = arguments[o];
            return n.call(t, ...r)
          })), t = void 0)
        }
        return n
      }
      const gn = [];

      function vn(e) {
        try {
          if ("composedPath" in e) {
            const t = e.composedPath();
            if (t.length) return t[0]
          } else if ("path" in e && e.path.length) return e.path[0]
        } catch (e) {}
        return e && e.target
      }

      function yn(e, t) {
        const n = new on;
        gn.push(n), n.init(e);
        let r = window.MutationObserver || window.__rrMutationObserver;
        const o = mn([window, "optionalAccess", e => e.Zone, "optionalAccess", e => e.__symbol__, "optionalCall", e => e("MutationObserver")]);
        o && window[o] && (r = window[o]);
        const s = new r(fn((t => {
          e.onMutation && !1 === e.onMutation(t) || n.processMutations.bind(n)(t)
        })));
        return s.observe(t, {
          attributes: !0,
          attributeOldValue: !0,
          characterData: !0,
          characterDataOldValue: !0,
          childList: !0,
          subtree: !0
        }), s
      }

      function _n(e) {
        let {
          scrollCb: t,
          doc: n,
          mirror: r,
          blockClass: o,
          blockSelector: s,
          unblockSelector: i,
          sampling: a
        } = e;
        return Rt("scroll", fn(At(fn((e => {
          const a = vn(e);
          if (!a || Bt(a, o, s, i, !0)) return;
          const c = r.getId(a);
          if (a === n && n.defaultView) {
            const e = Pt(n.defaultView);
            t({
              id: c,
              x: e.left,
              y: e.top
            })
          } else t({
            id: c,
            x: a.scrollLeft,
            y: a.scrollTop
          })
        })), a.scroll || 100)), n)
      }
      const bn = ["INPUT", "TEXTAREA", "SELECT"],
        Sn = new WeakMap;

      function wn(e) {
        let {
          inputCb: t,
          doc: n,
          mirror: r,
          blockClass: o,
          blockSelector: s,
          unblockSelector: i,
          ignoreClass: a,
          ignoreSelector: c,
          maskInputOptions: u,
          maskInputFn: l,
          sampling: d,
          userTriggeredOnInput: p,
          maskTextClass: h,
          unmaskTextClass: f,
          maskTextSelector: m,
          unmaskTextSelector: g
        } = e;

        function v(e) {
          let t = vn(e);
          const r = e.isTrusted,
            d = t && nt(t.tagName);
          if ("OPTION" === d && (t = t.parentElement), !t || !d || bn.indexOf(d) < 0 || Bt(t, o, s, i, !0)) return;
          const v = t;
          if (v.classList.contains(a) || c && v.matches(c)) return;
          const _ = ot(t);
          let b = st(v, d, _),
            S = !1;
          const w = Ze({
              maskInputOptions: u,
              tagName: d,
              type: _
            }),
            k = Et(t, h, m, f, g, w);
          "radio" !== _ && "checkbox" !== _ || (S = t.checked), b = et({
            isMasked: k,
            element: t,
            value: b,
            maskInputFn: l
          }), y(t, p ? {
            text: b,
            isChecked: S,
            userTriggered: r
          } : {
            text: b,
            isChecked: S
          });
          const T = t.name;
          "radio" === _ && T && S && n.querySelectorAll(`input[type="radio"][name="${T}"]`).forEach((e => {
            if (e !== t) {
              const t = et({
                isMasked: k,
                element: e,
                value: st(e, d, _),
                maskInputFn: l
              });
              y(e, p ? {
                text: t,
                isChecked: !S,
                userTriggered: !1
              } : {
                text: t,
                isChecked: !S
              })
            }
          }))
        }

        function y(e, n) {
          const o = Sn.get(e);
          if (!o || o.text !== n.text || o.isChecked !== n.isChecked) {
            Sn.set(e, n);
            const o = r.getId(e);
            fn(t)({
              ...n,
              id: o
            })
          }
        }
        const _ = ("last" === d.input ? ["change"] : ["input", "change"]).map((e => Rt(e, fn(v), n))),
          b = n.defaultView;
        if (!b) return () => {
          _.forEach((e => e()))
        };
        const S = b.Object.getOwnPropertyDescriptor(b.HTMLInputElement.prototype, "value"),
          w = [
            [b.HTMLInputElement.prototype, "value"],
            [b.HTMLInputElement.prototype, "checked"],
            [b.HTMLSelectElement.prototype, "value"],
            [b.HTMLTextAreaElement.prototype, "value"],
            [b.HTMLSelectElement.prototype, "selectedIndex"],
            [b.HTMLOptionElement.prototype, "selected"]
          ];
        return S && S.set && _.push(...w.map((e => Ft(e[0], e[1], {
          set() {
            fn(v)({
              target: this,
              isTrusted: !1
            })
          }
        }, !1, b)))), fn((() => {
          _.forEach((e => e()))
        }))
      }

      function kn(e) {
        return function(e, t) {
          if (Cn("CSSGroupingRule") && e.parentRule instanceof CSSGroupingRule || Cn("CSSMediaRule") && e.parentRule instanceof CSSMediaRule || Cn("CSSSupportsRule") && e.parentRule instanceof CSSSupportsRule || Cn("CSSConditionRule") && e.parentRule instanceof CSSConditionRule) {
            const n = Array.from(e.parentRule.cssRules).indexOf(e);
            t.unshift(n)
          } else if (e.parentStyleSheet) {
            const n = Array.from(e.parentStyleSheet.cssRules).indexOf(e);
            t.unshift(n)
          }
          return t
        }(e, [])
      }

      function Tn(e, t, n) {
        let r, o;
        return e ? (e.ownerNode ? r = t.getId(e.ownerNode) : o = n.getId(e), {
          styleId: o,
          id: r
        }) : {}
      }

      function En(e, t) {
        let {
          mirror: n,
          stylesheetManager: r
        } = e, o = null;
        o = "#document" === t.nodeName ? n.getId(t) : n.getId(t.host);
        const s = "#document" === t.nodeName ? mn([t, "access", e => e.defaultView, "optionalAccess", e => e.Document]) : mn([t, "access", e => e.ownerDocument, "optionalAccess", e => e.defaultView, "optionalAccess", e => e.ShadowRoot]),
          i = mn([s, "optionalAccess", e => e.prototype]) ? Object.getOwnPropertyDescriptor(mn([s, "optionalAccess", e => e.prototype]), "adoptedStyleSheets") : void 0;
        return null !== o && -1 !== o && s && i ? (Object.defineProperty(t, "adoptedStyleSheets", {
          configurable: i.configurable,
          enumerable: i.enumerable,
          get() {
            return mn([i, "access", e => e.get, "optionalAccess", e => e.call, "call", e => e(this)])
          },
          set(e) {
            const t = mn([i, "access", e => e.set, "optionalAccess", e => e.call, "call", t => t(this, e)]);
            if (null !== o && -1 !== o) try {
              r.adoptStyleSheets(e, o)
            } catch (e) {}
            return t
          }
        }), fn((() => {
          Object.defineProperty(t, "adoptedStyleSheets", {
            configurable: i.configurable,
            enumerable: i.enumerable,
            get: i.get,
            set: i.set
          })
        }))) : () => {}
      }

      function xn(e) {
        const t = e.doc.defaultView;
        if (!t) return () => {};
        const n = yn(e, e.doc),
          r = function(e) {
            let {
              mousemoveCb: t,
              sampling: n,
              doc: r,
              mirror: o
            } = e;
            if (!1 === n.mousemove) return () => {};
            const s = "number" == typeof n.mousemove ? n.mousemove : 50,
              i = "number" == typeof n.mousemoveCallback ? n.mousemoveCallback : 500;
            let a, c = [];
            const u = At(fn((e => {
                const n = Date.now() - a;
                t(c.map((e => (e.timeOffset -= n, e))), e), c = [], a = null
              })), i),
              l = fn(At(fn((e => {
                const t = vn(e),
                  {
                    clientX: n,
                    clientY: r
                  } = qt(e) ? e.changedTouches[0] : e;
                a || (a = Lt()), c.push({
                  x: n,
                  y: r,
                  id: o.getId(t),
                  timeOffset: Lt() - a
                }), u("undefined" != typeof DragEvent && e instanceof DragEvent ? Xt.Drag : e instanceof MouseEvent ? Xt.MouseMove : Xt.TouchMove)
              })), s, {
                trailing: !1
              })),
              d = [Rt("mousemove", l, r), Rt("touchmove", l, r), Rt("drag", l, r)];
            return fn((() => {
              d.forEach((e => e()))
            }))
          }(e),
          o = function(e) {
            let {
              mouseInteractionCb: t,
              doc: n,
              mirror: r,
              blockClass: o,
              blockSelector: s,
              unblockSelector: i,
              sampling: a
            } = e;
            if (!1 === a.mouseInteraction) return () => {};
            const c = !0 === a.mouseInteraction || void 0 === a.mouseInteraction ? {} : a.mouseInteraction,
              u = [];
            let l = null;
            return Object.keys(Qt).filter((e => Number.isNaN(Number(e)) && !e.endsWith("_Departed") && !1 !== c[e])).forEach((e => {
              let a = tt(e);
              const c = (e => n => {
                const a = vn(n);
                if (Bt(a, o, s, i, !0)) return;
                let c = null,
                  u = e;
                if ("pointerType" in n) {
                  switch (n.pointerType) {
                    case "mouse":
                      c = Zt.Mouse;
                      break;
                    case "touch":
                      c = Zt.Touch;
                      break;
                    case "pen":
                      c = Zt.Pen
                  }
                  c === Zt.Touch ? Qt[e] === Qt.MouseDown ? u = "TouchStart" : Qt[e] === Qt.MouseUp && (u = "TouchEnd") : Zt.Pen
                } else qt(n) && (c = Zt.Touch);
                null !== c ? (l = c, (u.startsWith("Touch") && c === Zt.Touch || u.startsWith("Mouse") && c === Zt.Mouse) && (c = null)) : Qt[e] === Qt.Click && (c = l, l = null);
                const d = qt(n) ? n.changedTouches[0] : n;
                if (!d) return;
                const p = r.getId(a),
                  {
                    clientX: h,
                    clientY: f
                  } = d;
                fn(t)({
                  type: Qt[u],
                  id: p,
                  x: h,
                  y: f,
                  ...null !== c && {
                    pointerType: c
                  }
                })
              })(e);
              if (window.PointerEvent) switch (Qt[e]) {
                case Qt.MouseDown:
                case Qt.MouseUp:
                  a = a.replace("mouse", "pointer");
                  break;
                case Qt.TouchStart:
                case Qt.TouchEnd:
                  return
              }
              u.push(Rt(a, c, n))
            })), fn((() => {
              u.forEach((e => e()))
            }))
          }(e),
          s = _n(e),
          i = function(e, t) {
            let {
              viewportResizeCb: n
            } = e, {
              win: r
            } = t, o = -1, s = -1;
            return Rt("resize", fn(At(fn((() => {
              const e = jt(),
                t = $t();
              o === e && s === t || (n({
                width: Number(t),
                height: Number(e)
              }), o = e, s = t)
            })), 200)), r)
          }(e, {
            win: t
          }),
          a = wn(e),
          c = function(e) {
            let {
              mediaInteractionCb: t,
              blockClass: n,
              blockSelector: r,
              unblockSelector: o,
              mirror: s,
              sampling: i,
              doc: a
            } = e;
            const c = fn((e => At(fn((i => {
                const a = vn(i);
                if (!a || Bt(a, n, r, o, !0)) return;
                const {
                  currentTime: c,
                  volume: u,
                  muted: l,
                  playbackRate: d
                } = a;
                t({
                  type: e,
                  id: s.getId(a),
                  currentTime: c,
                  volume: u,
                  muted: l,
                  playbackRate: d
                })
              })), i.media || 500))),
              u = [Rt("play", c(0), a), Rt("pause", c(1), a), Rt("seeked", c(2), a), Rt("volumechange", c(3), a), Rt("ratechange", c(4), a)];
            return fn((() => {
              u.forEach((e => e()))
            }))
          }(e),
          u = function(e, t) {
            let {
              styleSheetRuleCb: n,
              mirror: r,
              stylesheetManager: o
            } = e, {
              win: s
            } = t;
            if (!s.CSSStyleSheet || !s.CSSStyleSheet.prototype) return () => {};
            const i = s.CSSStyleSheet.prototype.insertRule;
            s.CSSStyleSheet.prototype.insertRule = new Proxy(i, {
              apply: fn(((e, t, s) => {
                const [i, a] = s, {
                  id: c,
                  styleId: u
                } = Tn(t, r, o.styleMirror);
                return (c && -1 !== c || u && -1 !== u) && n({
                  id: c,
                  styleId: u,
                  adds: [{
                    rule: i,
                    index: a
                  }]
                }), e.apply(t, s)
              }))
            });
            const a = s.CSSStyleSheet.prototype.deleteRule;
            let c, u;
            s.CSSStyleSheet.prototype.deleteRule = new Proxy(a, {
              apply: fn(((e, t, s) => {
                const [i] = s, {
                  id: a,
                  styleId: c
                } = Tn(t, r, o.styleMirror);
                return (a && -1 !== a || c && -1 !== c) && n({
                  id: a,
                  styleId: c,
                  removes: [{
                    index: i
                  }]
                }), e.apply(t, s)
              }))
            }), s.CSSStyleSheet.prototype.replace && (c = s.CSSStyleSheet.prototype.replace, s.CSSStyleSheet.prototype.replace = new Proxy(c, {
              apply: fn(((e, t, s) => {
                const [i] = s, {
                  id: a,
                  styleId: c
                } = Tn(t, r, o.styleMirror);
                return (a && -1 !== a || c && -1 !== c) && n({
                  id: a,
                  styleId: c,
                  replace: i
                }), e.apply(t, s)
              }))
            })), s.CSSStyleSheet.prototype.replaceSync && (u = s.CSSStyleSheet.prototype.replaceSync, s.CSSStyleSheet.prototype.replaceSync = new Proxy(u, {
              apply: fn(((e, t, s) => {
                const [i] = s, {
                  id: a,
                  styleId: c
                } = Tn(t, r, o.styleMirror);
                return (a && -1 !== a || c && -1 !== c) && n({
                  id: a,
                  styleId: c,
                  replaceSync: i
                }), e.apply(t, s)
              }))
            }));
            const l = {};
            In("CSSGroupingRule") ? l.CSSGroupingRule = s.CSSGroupingRule : (In("CSSMediaRule") && (l.CSSMediaRule = s.CSSMediaRule), In("CSSConditionRule") && (l.CSSConditionRule = s.CSSConditionRule), In("CSSSupportsRule") && (l.CSSSupportsRule = s.CSSSupportsRule));
            const d = {};
            return Object.entries(l).forEach((e => {
              let [t, s] = e;
              d[t] = {
                insertRule: s.prototype.insertRule,
                deleteRule: s.prototype.deleteRule
              }, s.prototype.insertRule = new Proxy(d[t].insertRule, {
                apply: fn(((e, t, s) => {
                  const [i, a] = s, {
                    id: c,
                    styleId: u
                  } = Tn(t.parentStyleSheet, r, o.styleMirror);
                  return (c && -1 !== c || u && -1 !== u) && n({
                    id: c,
                    styleId: u,
                    adds: [{
                      rule: i,
                      index: [...kn(t), a || 0]
                    }]
                  }), e.apply(t, s)
                }))
              }), s.prototype.deleteRule = new Proxy(d[t].deleteRule, {
                apply: fn(((e, t, s) => {
                  const [i] = s, {
                    id: a,
                    styleId: c
                  } = Tn(t.parentStyleSheet, r, o.styleMirror);
                  return (a && -1 !== a || c && -1 !== c) && n({
                    id: a,
                    styleId: c,
                    removes: [{
                      index: [...kn(t), i]
                    }]
                  }), e.apply(t, s)
                }))
              })
            })), fn((() => {
              s.CSSStyleSheet.prototype.insertRule = i, s.CSSStyleSheet.prototype.deleteRule = a, c && (s.CSSStyleSheet.prototype.replace = c), u && (s.CSSStyleSheet.prototype.replaceSync = u), Object.entries(l).forEach((e => {
                let [t, n] = e;
                n.prototype.insertRule = d[t].insertRule, n.prototype.deleteRule = d[t].deleteRule
              }))
            }))
          }(e, {
            win: t
          }),
          l = En(e, e.doc),
          d = function(e, t) {
            let {
              styleDeclarationCb: n,
              mirror: r,
              ignoreCSSAttributes: o,
              stylesheetManager: s
            } = e, {
              win: i
            } = t;
            const a = i.CSSStyleDeclaration.prototype.setProperty;
            i.CSSStyleDeclaration.prototype.setProperty = new Proxy(a, {
              apply: fn(((e, t, i) => {
                const [c, u, l] = i;
                if (o.has(c)) return a.apply(t, [c, u, l]);
                const {
                  id: d,
                  styleId: p
                } = Tn(mn([t, "access", e => e.parentRule, "optionalAccess", e => e.parentStyleSheet]), r, s.styleMirror);
                return (d && -1 !== d || p && -1 !== p) && n({
                  id: d,
                  styleId: p,
                  set: {
                    property: c,
                    value: u,
                    priority: l
                  },
                  index: kn(t.parentRule)
                }), e.apply(t, i)
              }))
            });
            const c = i.CSSStyleDeclaration.prototype.removeProperty;
            return i.CSSStyleDeclaration.prototype.removeProperty = new Proxy(c, {
              apply: fn(((e, t, i) => {
                const [a] = i;
                if (o.has(a)) return c.apply(t, [a]);
                const {
                  id: u,
                  styleId: l
                } = Tn(mn([t, "access", e => e.parentRule, "optionalAccess", e => e.parentStyleSheet]), r, s.styleMirror);
                return (u && -1 !== u || l && -1 !== l) && n({
                  id: u,
                  styleId: l,
                  remove: {
                    property: a
                  },
                  index: kn(t.parentRule)
                }), e.apply(t, i)
              }))
            }), fn((() => {
              i.CSSStyleDeclaration.prototype.setProperty = a, i.CSSStyleDeclaration.prototype.removeProperty = c
            }))
          }(e, {
            win: t
          }),
          p = e.collectFonts ? function(e) {
            let {
              fontCb: t,
              doc: n
            } = e;
            const r = n.defaultView;
            if (!r) return () => {};
            const o = [],
              s = new WeakMap,
              i = r.FontFace;
            r.FontFace = function(e, t, n) {
              const r = new i(e, t, n);
              return s.set(r, {
                family: e,
                buffer: "string" != typeof t,
                descriptors: n,
                fontSource: "string" == typeof t ? t : JSON.stringify(Array.from(new Uint8Array(t)))
              }), r
            };
            const a = Dt(n.fonts, "add", (function(e) {
              return function(n) {
                return setTimeout(fn((() => {
                  const e = s.get(n);
                  e && (t(e), s.delete(n))
                })), 0), e.apply(this, [n])
              }
            }));
            return o.push((() => {
              r.FontFace = i
            })), o.push(a), fn((() => {
              o.forEach((e => e()))
            }))
          }(e) : () => {},
          h = function(e) {
            const {
              doc: t,
              mirror: n,
              blockClass: r,
              blockSelector: o,
              unblockSelector: s,
              selectionCb: i
            } = e;
            let a = !0;
            const c = fn((() => {
              const e = t.getSelection();
              if (!e || a && mn([e, "optionalAccess", e => e.isCollapsed])) return;
              a = e.isCollapsed || !1;
              const c = [],
                u = e.rangeCount || 0;
              for (let t = 0; t < u; t++) {
                const i = e.getRangeAt(t),
                  {
                    startContainer: a,
                    startOffset: u,
                    endContainer: l,
                    endOffset: d
                  } = i;
                Bt(a, r, o, s, !0) || Bt(l, r, o, s, !0) || c.push({
                  start: n.getId(a),
                  startOffset: u,
                  end: n.getId(l),
                  endOffset: d
                })
              }
              i({
                ranges: c
              })
            }));
            return c(), Rt("selectionchange", c)
          }(e),
          f = function(e) {
            let {
              doc: t,
              customElementCb: n
            } = e;
            const r = t.defaultView;
            return r && r.customElements ? Dt(r.customElements, "define", (function(e) {
              return function(t, r, o) {
                try {
                  n({
                    define: {
                      name: t
                    }
                  })
                } catch (e) {}
                return e.apply(this, [t, r, o])
              }
            })) : () => {}
          }(e),
          m = [];
        for (const n of e.plugins) m.push(n.observer(n.callback, t, n.options));
        return fn((() => {
          gn.forEach((e => e.reset())), n.disconnect(), r(), o(), s(), i(), a(), c(), u(), l(), d(), p(), h(), f(), m.forEach((e => e()))
        }))
      }

      function Cn(e) {
        return void 0 !== window[e]
      }

      function In(e) {
        return Boolean(void 0 !== window[e] && window[e].prototype && "insertRule" in window[e].prototype && "deleteRule" in window[e].prototype)
      }
      class Rn {
        constructor(e) {
          this.generateIdFn = e, this.iframeIdToRemoteIdMap = new WeakMap, this.iframeRemoteIdToIdMap = new WeakMap
        }
        getId(e, t, n, r) {
          const o = n || this.getIdToRemoteIdMap(e),
            s = r || this.getRemoteIdToIdMap(e);
          let i = o.get(t);
          return i || (i = this.generateIdFn(), o.set(t, i), s.set(i, t)), i
        }
        getIds(e, t) {
          const n = this.getIdToRemoteIdMap(e),
            r = this.getRemoteIdToIdMap(e);
          return t.map((t => this.getId(e, t, n, r)))
        }
        getRemoteId(e, t, n) {
          const r = n || this.getRemoteIdToIdMap(e);
          if ("number" != typeof t) return t;
          return r.get(t) || -1
        }
        getRemoteIds(e, t) {
          const n = this.getRemoteIdToIdMap(e);
          return t.map((t => this.getRemoteId(e, t, n)))
        }
        reset(e) {
          if (!e) return this.iframeIdToRemoteIdMap = new WeakMap, void(this.iframeRemoteIdToIdMap = new WeakMap);
          this.iframeIdToRemoteIdMap.delete(e), this.iframeRemoteIdToIdMap.delete(e)
        }
        getIdToRemoteIdMap(e) {
          let t = this.iframeIdToRemoteIdMap.get(e);
          return t || (t = new Map, this.iframeIdToRemoteIdMap.set(e, t)), t
        }
        getRemoteIdToIdMap(e) {
          let t = this.iframeRemoteIdToIdMap.get(e);
          return t || (t = new Map, this.iframeRemoteIdToIdMap.set(e, t)), t
        }
      }

      function On(e) {
        let t, n = e[0],
          r = 1;
        for (; r < e.length;) {
          const o = e[r],
            s = e[r + 1];
          if (r += 2, ("optionalAccess" === o || "optionalCall" === o) && null == n) return;
          "access" === o || "optionalAccess" === o ? (t = n, n = s(n)) : "call" !== o && "optionalCall" !== o || (n = s((function() {
            for (var e = arguments.length, r = new Array(e), o = 0; o < e; o++) r[o] = arguments[o];
            return n.call(t, ...r)
          })), t = void 0)
        }
        return n
      }
      class Mn {
        constructor() {
          this.crossOriginIframeMirror = new Rn(ut), this.crossOriginIframeRootIdMap = new WeakMap
        }
        addIframe() {}
        addLoadListener() {}
        attachIframe() {}
      }
      class An {
        constructor(e) {
          this.iframes = new WeakMap, this.crossOriginIframeMap = new WeakMap, this.crossOriginIframeMirror = new Rn(ut), this.crossOriginIframeRootIdMap = new WeakMap, this.mutationCb = e.mutationCb, this.wrappedEmit = e.wrappedEmit, this.stylesheetManager = e.stylesheetManager, this.recordCrossOriginIframes = e.recordCrossOriginIframes, this.crossOriginIframeStyleMirror = new Rn(this.stylesheetManager.styleMirror.generateId.bind(this.stylesheetManager.styleMirror)), this.mirror = e.mirror, this.recordCrossOriginIframes && window.addEventListener("message", this.handleMessage.bind(this))
        }
        addIframe(e) {
          this.iframes.set(e, !0), e.contentWindow && this.crossOriginIframeMap.set(e.contentWindow, e)
        }
        addLoadListener(e) {
          this.loadListener = e
        }
        attachIframe(e, t) {
          this.mutationCb({
            adds: [{
              parentId: this.mirror.getId(e),
              nextId: null,
              node: t
            }],
            removes: [],
            texts: [],
            attributes: [],
            isAttachIframe: !0
          }), On([this, "access", e => e.loadListener, "optionalCall", t => t(e)]), e.contentDocument && e.contentDocument.adoptedStyleSheets && e.contentDocument.adoptedStyleSheets.length > 0 && this.stylesheetManager.adoptStyleSheets(e.contentDocument.adoptedStyleSheets, this.mirror.getId(e.contentDocument))
        }
        handleMessage(e) {
          const t = e;
          if ("rrweb" !== t.data.type || t.origin !== t.data.origin) return;
          if (!e.source) return;
          const n = this.crossOriginIframeMap.get(e.source);
          if (!n) return;
          const r = this.transformCrossOriginEvent(n, t.data.event);
          r && this.wrappedEmit(r, t.data.isCheckout)
        }
        transformCrossOriginEvent(e, t) {
          switch (t.type) {
            case Yt.FullSnapshot: {
              this.crossOriginIframeMirror.reset(e), this.crossOriginIframeStyleMirror.reset(e), this.replaceIdOnNode(t.data.node, e);
              const n = t.data.node.id;
              return this.crossOriginIframeRootIdMap.set(e, n), this.patchRootIdOnNode(t.data.node, n), {
                timestamp: t.timestamp,
                type: Yt.IncrementalSnapshot,
                data: {
                  source: Xt.Mutation,
                  adds: [{
                    parentId: this.mirror.getId(e),
                    nextId: null,
                    node: t.data.node
                  }],
                  removes: [],
                  texts: [],
                  attributes: [],
                  isAttachIframe: !0
                }
              }
            }
            case Yt.Meta:
            case Yt.Load:
            case Yt.DomContentLoaded:
              return !1;
            case Yt.Plugin:
              return t;
            case Yt.Custom:
              return this.replaceIds(t.data.payload, e, ["id", "parentId", "previousId", "nextId"]), t;
            case Yt.IncrementalSnapshot:
              switch (t.data.source) {
                case Xt.Mutation:
                  return t.data.adds.forEach((t => {
                    this.replaceIds(t, e, ["parentId", "nextId", "previousId"]), this.replaceIdOnNode(t.node, e);
                    const n = this.crossOriginIframeRootIdMap.get(e);
                    n && this.patchRootIdOnNode(t.node, n)
                  })), t.data.removes.forEach((t => {
                    this.replaceIds(t, e, ["parentId", "id"])
                  })), t.data.attributes.forEach((t => {
                    this.replaceIds(t, e, ["id"])
                  })), t.data.texts.forEach((t => {
                    this.replaceIds(t, e, ["id"])
                  })), t;
                case Xt.Drag:
                case Xt.TouchMove:
                case Xt.MouseMove:
                  return t.data.positions.forEach((t => {
                    this.replaceIds(t, e, ["id"])
                  })), t;
                case Xt.ViewportResize:
                  return !1;
                case Xt.MediaInteraction:
                case Xt.MouseInteraction:
                case Xt.Scroll:
                case Xt.CanvasMutation:
                case Xt.Input:
                  return this.replaceIds(t.data, e, ["id"]), t;
                case Xt.StyleSheetRule:
                case Xt.StyleDeclaration:
                  return this.replaceIds(t.data, e, ["id"]), this.replaceStyleIds(t.data, e, ["styleId"]), t;
                case Xt.Font:
                  return t;
                case Xt.Selection:
                  return t.data.ranges.forEach((t => {
                    this.replaceIds(t, e, ["start", "end"])
                  })), t;
                case Xt.AdoptedStyleSheet:
                  return this.replaceIds(t.data, e, ["id"]), this.replaceStyleIds(t.data, e, ["styleIds"]), On([t, "access", e => e.data, "access", e => e.styles, "optionalAccess", e => e.forEach, "call", t => t((t => {
                    this.replaceStyleIds(t, e, ["styleId"])
                  }))]), t
              }
          }
          return !1
        }
        replace(e, t, n, r) {
          for (const o of r)(Array.isArray(t[o]) || "number" == typeof t[o]) && (Array.isArray(t[o]) ? t[o] = e.getIds(n, t[o]) : t[o] = e.getId(n, t[o]));
          return t
        }
        replaceIds(e, t, n) {
          return this.replace(this.crossOriginIframeMirror, e, t, n)
        }
        replaceStyleIds(e, t, n) {
          return this.replace(this.crossOriginIframeStyleMirror, e, t, n)
        }
        replaceIdOnNode(e, t) {
          this.replaceIds(e, t, ["id", "rootId"]), "childNodes" in e && e.childNodes.forEach((e => {
            this.replaceIdOnNode(e, t)
          }))
        }
        patchRootIdOnNode(e, t) {
          e.type === Ge.Document || e.rootId || (e.rootId = t), "childNodes" in e && e.childNodes.forEach((e => {
            this.patchRootIdOnNode(e, t)
          }))
        }
      }
      class Fn {
        init() {}
        addShadowRoot() {}
        observeAttachShadow() {}
        reset() {}
      }
      class Dn {
        constructor(e) {
          this.shadowDoms = new WeakSet, this.restoreHandlers = [], this.mutationCb = e.mutationCb, this.scrollCb = e.scrollCb, this.bypassOptions = e.bypassOptions, this.mirror = e.mirror, this.init()
        }
        init() {
          this.reset(), this.patchAttachShadow(Element, document)
        }
        addShadowRoot(e, t) {
          if (!Je(e)) return;
          if (this.shadowDoms.has(e)) return;
          this.shadowDoms.add(e);
          const n = yn({
            ...this.bypassOptions,
            doc: t,
            mutationCb: this.mutationCb,
            mirror: this.mirror,
            shadowDomManager: this
          }, e);
          this.restoreHandlers.push((() => n.disconnect())), this.restoreHandlers.push(_n({
            ...this.bypassOptions,
            scrollCb: this.scrollCb,
            doc: e,
            mirror: this.mirror
          })), setTimeout((() => {
            e.adoptedStyleSheets && e.adoptedStyleSheets.length > 0 && this.bypassOptions.stylesheetManager.adoptStyleSheets(e.adoptedStyleSheets, this.mirror.getId(e.host)), this.restoreHandlers.push(En({
              mirror: this.mirror,
              stylesheetManager: this.bypassOptions.stylesheetManager
            }, e))
          }), 0)
        }
        observeAttachShadow(e) {
          e.contentWindow && e.contentDocument && this.patchAttachShadow(e.contentWindow.Element, e.contentDocument)
        }
        patchAttachShadow(e, t) {
          const n = this;
          this.restoreHandlers.push(Dt(e.prototype, "attachShadow", (function(e) {
            return function(r) {
              const o = e.call(this, r);
              return this.shadowRoot && Jt(this) && n.addShadowRoot(this.shadowRoot, t), o
            }
          })))
        }
        reset() {
          this.restoreHandlers.forEach((e => {
            try {
              e()
            } catch (e) {}
          })), this.restoreHandlers = [], this.shadowDoms = new WeakSet
        }
      }
      class Nn {
        reset() {}
        freeze() {}
        unfreeze() {}
        lock() {}
        unlock() {}
        snapshot() {}
      }
      class Ln {
        constructor(e) {
          this.trackedLinkElements = new WeakSet, this.styleMirror = new Gt, this.mutationCb = e.mutationCb, this.adoptedStyleSheetCb = e.adoptedStyleSheetCb
        }
        attachLinkElement(e, t) {
          "_cssText" in t.attributes && this.mutationCb({
            adds: [],
            removes: [],
            texts: [],
            attributes: [{
              id: t.id,
              attributes: t.attributes
            }]
          }), this.trackLinkElement(e)
        }
        trackLinkElement(e) {
          this.trackedLinkElements.has(e) || (this.trackedLinkElements.add(e), this.trackStylesheetInLinkElement(e))
        }
        adoptStyleSheets(e, t) {
          if (0 === e.length) return;
          const n = {
              id: t,
              styleIds: []
            },
            r = [];
          for (const t of e) {
            let e;
            this.styleMirror.has(t) ? e = this.styleMirror.getId(t) : (e = this.styleMirror.add(t), r.push({
              styleId: e,
              rules: Array.from(t.rules || CSSRule, ((e, t) => ({
                rule: Xe(e),
                index: t
              })))
            })), n.styleIds.push(e)
          }
          r.length > 0 && (n.styles = r), this.adoptedStyleSheetCb(n)
        }
        reset() {
          this.styleMirror.reset(), this.trackedLinkElements = new WeakSet
        }
        trackStylesheetInLinkElement(e) {}
      }
      class Pn {
        constructor() {
          this.nodeMap = new WeakMap, this.loop = !0, this.periodicallyClear()
        }
        periodicallyClear() {
          ! function() {
            (function() {
              if (Nt) return Nt;
              const e = window.document;
              let t = window.requestAnimationFrame;
              if (e && "function" == typeof e.createElement) try {
                const n = e.createElement("iframe");
                n.hidden = !0, e.head.appendChild(n);
                const r = n.contentWindow;
                r && r.requestAnimationFrame && (t = r.requestAnimationFrame), e.head.removeChild(n)
              } catch (e) {}
              return Nt = t.bind(window)
            })()(...arguments)
          }((() => {
            this.clear(), this.loop && this.periodicallyClear()
          }))
        }
        inOtherBuffer(e, t) {
          const n = this.nodeMap.get(e);
          return n && Array.from(n).some((e => e !== t))
        }
        add(e, t) {
          this.nodeMap.set(e, (this.nodeMap.get(e) || new Set).add(t))
        }
        clear() {
          this.nodeMap = new WeakMap
        }
        destroy() {
          this.loop = !1
        }
      }

      function jn(e) {
        const t = e;
        return t.timestamp = Lt(), t
      }
      let $n;
      const Bn = new Qe;

      function Un() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        const {
          emit: t,
          checkoutEveryNms: n,
          checkoutEveryNth: r,
          blockClass: o = "rr-block",
          blockSelector: s = null,
          unblockSelector: i = null,
          ignoreClass: a = "rr-ignore",
          ignoreSelector: c = null,
          maskAllText: u = !1,
          maskTextClass: l = "rr-mask",
          unmaskTextClass: d = null,
          maskTextSelector: p = null,
          unmaskTextSelector: h = null,
          inlineStylesheet: f = !0,
          maskAllInputs: m,
          maskInputOptions: g,
          slimDOMOptions: v,
          maskAttributeFn: y,
          maskInputFn: _,
          maskTextFn: b,
          packFn: S,
          sampling: w = {},
          dataURLOptions: k = {},
          mousemoveWait: T,
          recordCanvas: E = !1,
          recordCrossOriginIframes: x = !1,
          recordAfter: C = ("DOMContentLoaded" === e.recordAfter ? e.recordAfter : "load"),
          userTriggeredOnInput: I = !1,
          collectFonts: R = !1,
          inlineImages: O = !1,
          plugins: M,
          keepIframeSrcFn: A = (() => !1),
          ignoreCSSAttributes: F = new Set([]),
          errorHandler: D,
          onMutation: N,
          getCanvasManager: L
        } = e;
        pn(D);
        const P = !x || window.parent === window;
        let j = !1;
        if (!P) try {
          window.parent.document && (j = !1)
        } catch (e) {
          j = !0
        }
        if (P && !t) throw new Error("emit function is required");
        void 0 !== T && void 0 === w.mousemove && (w.mousemove = T), Bn.reset();
        const B = !0 === m ? {
            color: !0,
            date: !0,
            "datetime-local": !0,
            email: !0,
            month: !0,
            number: !0,
            range: !0,
            search: !0,
            tel: !0,
            text: !0,
            time: !0,
            url: !0,
            week: !0,
            textarea: !0,
            select: !0,
            radio: !0,
            checkbox: !0
          } : void 0 !== g ? g : {},
          U = !0 === v || "all" === v ? {
            script: !0,
            comment: !0,
            headFavicon: !0,
            headWhitespace: !0,
            headMetaSocial: !0,
            headMetaRobots: !0,
            headMetaHttpEquiv: !0,
            headMetaVerification: !0,
            headMetaAuthorship: "all" === v,
            headMetaDescKeywords: "all" === v
          } : v || {};
        let H;
        ! function() {
          var e = this;
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window;
          "NodeList" in t && !t.NodeList.prototype.forEach && (t.NodeList.prototype.forEach = Array.prototype.forEach), "DOMTokenList" in t && !t.DOMTokenList.prototype.forEach && (t.DOMTokenList.prototype.forEach = Array.prototype.forEach), Node.prototype.contains || (Node.prototype.contains = function() {
            for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
            let o = n[0];
            if (!(0 in n)) throw new TypeError("1 argument is required");
            do {
              if (e === o) return !0
            } while (o = o && o.parentNode);
            return !1
          })
        }();
        let q = 0;
        const z = e => {
            for (const t of M || []) t.eventProcessor && (e = t.eventProcessor(e));
            return S && !j && (e = S(e)), e
          },
          W = (e, o) => {
            if (!$([gn, "access", e => e[0], "optionalAccess", e => e.isFrozen, "call", e => e()]) || e.type === Yt.FullSnapshot || e.type === Yt.IncrementalSnapshot && e.data.source === Xt.Mutation || gn.forEach((e => e.unfreeze())), P) $([t, "optionalCall", t => t(z(e), o)]);
            else if (j) {
              const t = {
                type: "rrweb",
                event: z(e),
                origin: window.location.origin,
                isCheckout: o
              };
              window.parent.postMessage(t, "*")
            }
            if (e.type === Yt.FullSnapshot) H = e, q = 0;
            else if (e.type === Yt.IncrementalSnapshot) {
              if (e.data.source === Xt.Mutation && e.data.isAttachIframe) return;
              q++;
              const t = r && q >= r,
                o = n && e.timestamp - H.timestamp > n;
              (t || o) && ee(!0)
            }
          },
          K = e => {
            W(jn({
              type: Yt.IncrementalSnapshot,
              data: {
                source: Xt.Mutation,
                ...e
              }
            }))
          },
          G = e => W(jn({
            type: Yt.IncrementalSnapshot,
            data: {
              source: Xt.Scroll,
              ...e
            }
          })),
          V = e => W(jn({
            type: Yt.IncrementalSnapshot,
            data: {
              source: Xt.CanvasMutation,
              ...e
            }
          })),
          J = new Ln({
            mutationCb: K,
            adoptedStyleSheetCb: e => W(jn({
              type: Yt.IncrementalSnapshot,
              data: {
                source: Xt.AdoptedStyleSheet,
                ...e
              }
            }))
          }),
          Y = "boolean" == typeof __RRWEB_EXCLUDE_IFRAME__ && __RRWEB_EXCLUDE_IFRAME__ ? new Mn : new An({
            mirror: Bn,
            mutationCb: K,
            stylesheetManager: J,
            recordCrossOriginIframes: x,
            wrappedEmit: W
          });
        for (const e of M || []) e.getMirror && e.getMirror({
          nodeMirror: Bn,
          crossOriginIframeMirror: Y.crossOriginIframeMirror,
          crossOriginIframeStyleMirror: Y.crossOriginIframeStyleMirror
        });
        const X = new Pn,
          Q = function(e, t) {
            try {
              return e ? e(t) : new Nn
            } catch (e) {
              return console.warn("Unable to initialize CanvasManager"), new Nn
            }
          }(L, {
            mirror: Bn,
            win: window,
            mutationCb: e => W(jn({
              type: Yt.IncrementalSnapshot,
              data: {
                source: Xt.CanvasMutation,
                ...e
              }
            })),
            recordCanvas: E,
            blockClass: o,
            blockSelector: s,
            unblockSelector: i,
            sampling: w.canvas,
            dataURLOptions: k
          }),
          Z = "boolean" == typeof __RRWEB_EXCLUDE_SHADOW_DOM__ && __RRWEB_EXCLUDE_SHADOW_DOM__ ? new Fn : new Dn({
            mutationCb: K,
            scrollCb: G,
            bypassOptions: {
              onMutation: N,
              blockClass: o,
              blockSelector: s,
              unblockSelector: i,
              maskAllText: u,
              maskTextClass: l,
              unmaskTextClass: d,
              maskTextSelector: p,
              unmaskTextSelector: h,
              inlineStylesheet: f,
              maskInputOptions: B,
              dataURLOptions: k,
              maskAttributeFn: y,
              maskTextFn: b,
              maskInputFn: _,
              recordCanvas: E,
              inlineImages: O,
              sampling: w,
              slimDOMOptions: U,
              iframeManager: Y,
              stylesheetManager: J,
              canvasManager: Q,
              keepIframeSrcFn: A,
              processedNodeManager: X
            },
            mirror: Bn
          }),
          ee = function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            W(jn({
              type: Yt.Meta,
              data: {
                href: window.location.href,
                width: $t(),
                height: jt()
              }
            }), e), J.reset(), Z.init(), gn.forEach((e => e.lock()));
            const t = function(e, t) {
              const {
                mirror: n = new Qe,
                blockClass: r = "rr-block",
                blockSelector: o = null,
                unblockSelector: s = null,
                maskAllText: i = !1,
                maskTextClass: a = "rr-mask",
                unmaskTextClass: c = null,
                maskTextSelector: u = null,
                unmaskTextSelector: l = null,
                inlineStylesheet: d = !0,
                inlineImages: p = !1,
                recordCanvas: h = !1,
                maskAllInputs: f = !1,
                maskAttributeFn: m,
                maskTextFn: g,
                maskInputFn: v,
                slimDOM: y = !1,
                dataURLOptions: _,
                preserveWhiteSpace: b,
                onSerialize: S,
                onIframeLoad: w,
                iframeLoadTimeout: k,
                onStylesheetLoad: T,
                stylesheetLoadTimeout: E,
                keepIframeSrcFn: x = (() => !1)
              } = t || {};
              return Ct(e, {
                doc: e,
                mirror: n,
                blockClass: r,
                blockSelector: o,
                unblockSelector: s,
                maskAllText: i,
                maskTextClass: a,
                unmaskTextClass: c,
                maskTextSelector: u,
                unmaskTextSelector: l,
                skipChild: !1,
                inlineStylesheet: d,
                maskInputOptions: !0 === f ? {
                  color: !0,
                  date: !0,
                  "datetime-local": !0,
                  email: !0,
                  month: !0,
                  number: !0,
                  range: !0,
                  search: !0,
                  tel: !0,
                  text: !0,
                  time: !0,
                  url: !0,
                  week: !0,
                  textarea: !0,
                  select: !0
                } : !1 === f ? {} : f,
                maskAttributeFn: m,
                maskTextFn: g,
                maskInputFn: v,
                slimDOMOptions: !0 === y || "all" === y ? {
                  script: !0,
                  comment: !0,
                  headFavicon: !0,
                  headWhitespace: !0,
                  headMetaDescKeywords: "all" === y,
                  headMetaSocial: !0,
                  headMetaRobots: !0,
                  headMetaHttpEquiv: !0,
                  headMetaAuthorship: !0,
                  headMetaVerification: !0
                } : !1 === y ? {} : y,
                dataURLOptions: _,
                inlineImages: p,
                recordCanvas: h,
                preserveWhiteSpace: b,
                onSerialize: S,
                onIframeLoad: w,
                iframeLoadTimeout: k,
                onStylesheetLoad: T,
                stylesheetLoadTimeout: E,
                keepIframeSrcFn: x,
                newlyAddedElement: !1
              })
            }(document, {
              mirror: Bn,
              blockClass: o,
              blockSelector: s,
              unblockSelector: i,
              maskAllText: u,
              maskTextClass: l,
              unmaskTextClass: d,
              maskTextSelector: p,
              unmaskTextSelector: h,
              inlineStylesheet: f,
              maskAllInputs: B,
              maskAttributeFn: y,
              maskInputFn: _,
              maskTextFn: b,
              slimDOM: U,
              dataURLOptions: k,
              recordCanvas: E,
              inlineImages: O,
              onSerialize: e => {
                zt(e, Bn) && Y.addIframe(e), Wt(e, Bn) && J.trackLinkElement(e), Kt(e) && Z.addShadowRoot(e.shadowRoot, document)
              },
              onIframeLoad: (e, t) => {
                Y.attachIframe(e, t), Z.observeAttachShadow(e)
              },
              onStylesheetLoad: (e, t) => {
                J.attachLinkElement(e, t)
              },
              keepIframeSrcFn: A
            });
            if (!t) return console.warn("Failed to snapshot the document");
            W(jn({
              type: Yt.FullSnapshot,
              data: {
                node: t,
                initialOffset: Pt(window)
              }
            })), gn.forEach((e => e.unlock())), document.adoptedStyleSheets && document.adoptedStyleSheets.length > 0 && J.adoptStyleSheets(document.adoptedStyleSheets, Bn.getId(document))
          };
        $n = ee;
        try {
          const e = [],
            t = e => fn(xn)({
              onMutation: N,
              mutationCb: K,
              mousemoveCb: (e, t) => W(jn({
                type: Yt.IncrementalSnapshot,
                data: {
                  source: t,
                  positions: e
                }
              })),
              mouseInteractionCb: e => W(jn({
                type: Yt.IncrementalSnapshot,
                data: {
                  source: Xt.MouseInteraction,
                  ...e
                }
              })),
              scrollCb: G,
              viewportResizeCb: e => W(jn({
                type: Yt.IncrementalSnapshot,
                data: {
                  source: Xt.ViewportResize,
                  ...e
                }
              })),
              inputCb: e => W(jn({
                type: Yt.IncrementalSnapshot,
                data: {
                  source: Xt.Input,
                  ...e
                }
              })),
              mediaInteractionCb: e => W(jn({
                type: Yt.IncrementalSnapshot,
                data: {
                  source: Xt.MediaInteraction,
                  ...e
                }
              })),
              styleSheetRuleCb: e => W(jn({
                type: Yt.IncrementalSnapshot,
                data: {
                  source: Xt.StyleSheetRule,
                  ...e
                }
              })),
              styleDeclarationCb: e => W(jn({
                type: Yt.IncrementalSnapshot,
                data: {
                  source: Xt.StyleDeclaration,
                  ...e
                }
              })),
              canvasMutationCb: V,
              fontCb: e => W(jn({
                type: Yt.IncrementalSnapshot,
                data: {
                  source: Xt.Font,
                  ...e
                }
              })),
              selectionCb: e => {
                W(jn({
                  type: Yt.IncrementalSnapshot,
                  data: {
                    source: Xt.Selection,
                    ...e
                  }
                }))
              },
              customElementCb: e => {
                W(jn({
                  type: Yt.IncrementalSnapshot,
                  data: {
                    source: Xt.CustomElement,
                    ...e
                  }
                }))
              },
              blockClass: o,
              ignoreClass: a,
              ignoreSelector: c,
              maskAllText: u,
              maskTextClass: l,
              unmaskTextClass: d,
              maskTextSelector: p,
              unmaskTextSelector: h,
              maskInputOptions: B,
              inlineStylesheet: f,
              sampling: w,
              recordCanvas: E,
              inlineImages: O,
              userTriggeredOnInput: I,
              collectFonts: R,
              doc: e,
              maskAttributeFn: y,
              maskInputFn: _,
              maskTextFn: b,
              keepIframeSrcFn: A,
              blockSelector: s,
              unblockSelector: i,
              slimDOMOptions: U,
              dataURLOptions: k,
              mirror: Bn,
              iframeManager: Y,
              stylesheetManager: J,
              shadowDomManager: Z,
              processedNodeManager: X,
              canvasManager: Q,
              ignoreCSSAttributes: F,
              plugins: $([M, "optionalAccess", e => e.filter, "call", e => e((e => e.observer)), "optionalAccess", e => e.map, "call", e => e((e => ({
                observer: e.observer,
                options: e.options,
                callback: t => W(jn({
                  type: Yt.Plugin,
                  data: {
                    plugin: e.name,
                    payload: t
                  }
                }))
              })))]) || []
            }, {});
          Y.addLoadListener((n => {
            try {
              e.push(t(n.contentDocument))
            } catch (e) {
              console.warn(e)
            }
          }));
          const n = () => {
            ee(), e.push(t(document))
          };
          return "interactive" === document.readyState || "complete" === document.readyState ? n() : (e.push(Rt("DOMContentLoaded", (() => {
            W(jn({
              type: Yt.DomContentLoaded,
              data: {}
            })), "DOMContentLoaded" === C && n()
          }))), e.push(Rt("load", (() => {
            W(jn({
              type: Yt.Load,
              data: {}
            })), "load" === C && n()
          }), window))), () => {
            e.forEach((e => e())), X.destroy(), $n = void 0, hn()
          }
        } catch (e) {
          console.warn(e)
        }
      }
      Un.mirror = Bn, Un.takeFullSnapshot = function(e) {
        if (!$n) throw new Error("please take full snapshot after start recording");
        $n(e)
      };
      const Hn = 3;

      function qn(e) {
        return e > 9999999999 ? e : 1e3 * e
      }

      function zn(e) {
        return e > 9999999999 ? e / 1e3 : e
      }

      function Wn(e, t) {
        "sentry.transaction" !== t.category && (["ui.click", "ui.input"].includes(t.category) ? e.triggerUserActivity() : e.checkAndHandleExpiredSession(), e.addUpdate((() => (e.throttledAddEvent({
          type: Yt.Custom,
          timestamp: 1e3 * (t.timestamp || 0),
          data: {
            tag: "breadcrumb",
            payload: (0, W.S8)(t, 10, 1e3)
          }
        }), "console" === t.category))))
      }
      const Kn = "button,a";

      function Gn(e) {
        return e.closest(Kn) || e
      }

      function Vn(e) {
        const t = Jn(e);
        return t && t instanceof Element ? Gn(t) : t
      }

      function Jn(e) {
        return function(e) {
          return "object" == typeof e && !!e && "target" in e
        }(e) ? e.target : e
      }
      let Yn;
      class Xn {
        constructor(e, t) {
          let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Wn;
          this._lastMutation = 0, this._lastScroll = 0, this._clicks = [], this._timeout = t.timeout / 1e3, this._threshold = t.threshold / 1e3, this._scollTimeout = t.scrollTimeout / 1e3, this._replay = e, this._ignoreSelector = t.ignoreSelector, this._addBreadcrumbEvent = n
        }
        addListeners() {
          const e = (t = () => {
            this._lastMutation = Zn()
          }, Yn || (Yn = [], (0, K.GS)(Ne, "open", (function(e) {
            return function() {
              if (Yn) try {
                Yn.forEach((e => e()))
              } catch (e) {}
              for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
              return e.apply(Ne, n)
            }
          }))), Yn.push(t), () => {
            const e = Yn ? Yn.indexOf(t) : -1;
            e > -1 && Yn.splice(e, 1)
          });
          var t;
          this._teardown = () => {
            e(), this._clicks = [], this._lastMutation = 0, this._lastScroll = 0
          }
        }
        removeListeners() {
          this._teardown && this._teardown(), this._checkClickTimeout && clearTimeout(this._checkClickTimeout)
        }
        handleClick(e, t) {
          if (function(e, t) {
              return !Qn.includes(e.tagName) || ("INPUT" === e.tagName && !["submit", "button"].includes(e.getAttribute("type") || "") || (!("A" !== e.tagName || !(e.hasAttribute("download") || e.hasAttribute("target") && "_self" !== e.getAttribute("target"))) || !(!t || !e.matches(t))))
            }(t, this._ignoreSelector) || ! function(e) {
              return !(!e.data || "number" != typeof e.data.nodeId || !e.timestamp)
            }(e)) return;
          const n = {
            timestamp: zn(e.timestamp),
            clickBreadcrumb: e,
            clickCount: 0,
            node: t
          };
          this._clicks.some((e => e.node === n.node && Math.abs(e.timestamp - n.timestamp) < 1)) || (this._clicks.push(n), 1 === this._clicks.length && this._scheduleCheckClicks())
        }
        registerMutation() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now();
          this._lastMutation = zn(e)
        }
        registerScroll() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now();
          this._lastScroll = zn(e)
        }
        registerClick(e) {
          const t = Gn(e);
          this._handleMultiClick(t)
        }
        _handleMultiClick(e) {
          this._getClicks(e).forEach((e => {
            e.clickCount++
          }))
        }
        _getClicks(e) {
          return this._clicks.filter((t => t.node === e))
        }
        _checkClicks() {
          const e = [],
            t = Zn();
          this._clicks.forEach((n => {
            !n.mutationAfter && this._lastMutation && (n.mutationAfter = n.timestamp <= this._lastMutation ? this._lastMutation - n.timestamp : void 0), !n.scrollAfter && this._lastScroll && (n.scrollAfter = n.timestamp <= this._lastScroll ? this._lastScroll - n.timestamp : void 0), n.timestamp + this._timeout <= t && e.push(n)
          }));
          for (const t of e) {
            const e = this._clicks.indexOf(t);
            e > -1 && (this._generateBreadcrumbs(t), this._clicks.splice(e, 1))
          }
          this._clicks.length && this._scheduleCheckClicks()
        }
        _generateBreadcrumbs(e) {
          const t = this._replay,
            n = e.scrollAfter && e.scrollAfter <= this._scollTimeout,
            r = e.mutationAfter && e.mutationAfter <= this._threshold,
            o = !n && !r,
            {
              clickCount: s,
              clickBreadcrumb: i
            } = e;
          if (o) {
            const n = 1e3 * Math.min(e.mutationAfter || this._timeout, this._timeout),
              r = n < 1e3 * this._timeout ? "mutation" : "timeout",
              o = {
                type: "default",
                message: i.message,
                timestamp: i.timestamp,
                category: "ui.slowClickDetected",
                data: {
                  ...i.data,
                  url: Ne.location.href,
                  route: t.getCurrentRoute(),
                  timeAfterClickMs: n,
                  endReason: r,
                  clickCount: s || 1
                }
              };
            this._addBreadcrumbEvent(t, o)
          } else if (s > 1) {
            const e = {
              type: "default",
              message: i.message,
              timestamp: i.timestamp,
              category: "ui.multiClick",
              data: {
                ...i.data,
                url: Ne.location.href,
                route: t.getCurrentRoute(),
                clickCount: s,
                metric: !0
              }
            };
            this._addBreadcrumbEvent(t, e)
          }
        }
        _scheduleCheckClicks() {
          this._checkClickTimeout && clearTimeout(this._checkClickTimeout), this._checkClickTimeout = setTimeout((() => this._checkClicks()), 1e3)
        }
      }
      const Qn = ["A", "BUTTON", "INPUT"];

      function Zn() {
        return Date.now() / 1e3
      }

      function er(e) {
        return {
          timestamp: Date.now() / 1e3,
          type: "default",
          ...e
        }
      }
      var tr;
      ! function(e) {
        e[e.Document = 0] = "Document", e[e.DocumentType = 1] = "DocumentType", e[e.Element = 2] = "Element", e[e.Text = 3] = "Text", e[e.CDATA = 4] = "CDATA", e[e.Comment = 5] = "Comment"
      }(tr || (tr = {}));
      const nr = new Set(["id", "class", "aria-label", "role", "name", "alt", "title", "data-test-id", "data-testid", "disabled", "aria-disabled", "data-sentry-component"]);

      function rr(e) {
        const t = {};
        for (const n in e)
          if (nr.has(n)) {
            let r = n;
            "data-testid" !== n && "data-test-id" !== n || (r = "testId"), t[r] = e[n]
          } return t
      }

      function or(e, t) {
        const n = Un.mirror.getId(e),
          r = n && Un.mirror.getNode(n),
          o = r && Un.mirror.getMeta(r),
          s = o && function(e) {
            return e.type === tr.Element
          }(o) ? o : null;
        return {
          message: t,
          data: s ? {
            nodeId: n,
            node: {
              id: n,
              tagName: s.tagName,
              textContent: Array.from(s.childNodes).map((e => e.type === tr.Text && e.textContent)).filter(Boolean).map((e => e.trim())).join(""),
              attributes: rr(s.attributes)
            }
          } : {}
        }
      }
      const sr = {
        resource: function(e) {
          const {
            entryType: t,
            initiatorType: n,
            name: r,
            responseEnd: o,
            startTime: s,
            decodedBodySize: i,
            encodedBodySize: a,
            responseStatus: c,
            transferSize: u
          } = e;
          return ["fetch", "xmlhttprequest"].includes(n) ? null : {
            type: `${t}.${n}`,
            start: ar(s),
            end: ar(o),
            name: r,
            data: {
              size: u,
              statusCode: c,
              decodedBodySize: i,
              encodedBodySize: a
            }
          }
        },
        paint: function(e) {
          const {
            duration: t,
            entryType: n,
            name: r,
            startTime: o
          } = e, s = ar(o);
          return {
            type: n,
            name: r,
            start: s,
            end: s + t,
            data: void 0
          }
        },
        navigation: function(e) {
          const {
            entryType: t,
            name: n,
            decodedBodySize: r,
            duration: o,
            domComplete: s,
            encodedBodySize: i,
            domContentLoadedEventStart: a,
            domContentLoadedEventEnd: c,
            domInteractive: u,
            loadEventStart: l,
            loadEventEnd: d,
            redirectCount: p,
            startTime: h,
            transferSize: f,
            type: m
          } = e;
          return 0 === o ? null : {
            type: `${t}.${m}`,
            start: ar(h),
            end: ar(s),
            name: n,
            data: {
              size: f,
              decodedBodySize: r,
              encodedBodySize: i,
              duration: o,
              domInteractive: u,
              domContentLoadedEventStart: a,
              domContentLoadedEventEnd: c,
              loadEventStart: l,
              loadEventEnd: d,
              domComplete: s,
              redirectCount: p
            }
          }
        }
      };

      function ir(e) {
        return sr[e.entryType] ? sr[e.entryType](e) : null
      }

      function ar(e) {
        return ((V.k3 || Ne.performance.timeOrigin) + e) / 1e3
      }
      const cr = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__;

      function ur(e, t) {
        cr && (J.vF.info(e), t && dr(e))
      }

      function lr(e, t) {
        cr && (J.vF.info(e), t && setTimeout((() => {
          dr(e)
        }), 0))
      }

      function dr(e) {
        (0, d.ZQ)({
          category: "console",
          data: {
            logger: "replay"
          },
          level: "info",
          message: e
        }, {
          level: "info"
        })
      }
      class pr extends Error {
        constructor() {
          super("Event buffer exceeded maximum size of 20000000.")
        }
      }
      class hr {
        constructor() {
          this.events = [], this._totalSize = 0, this.hasCheckout = !1
        }
        get hasEvents() {
          return this.events.length > 0
        }
        get type() {
          return "sync"
        }
        destroy() {
          this.events = []
        }
        async addEvent(e) {
          const t = JSON.stringify(e).length;
          if (this._totalSize += t, this._totalSize > qe) throw new pr;
          this.events.push(e)
        }
        finish() {
          return new Promise((e => {
            const t = this.events;
            this.clear(), e(JSON.stringify(t))
          }))
        }
        clear() {
          this.events = [], this._totalSize = 0, this.hasCheckout = !1
        }
        getEarliestTimestamp() {
          const e = this.events.map((e => e.timestamp)).sort()[0];
          return e ? qn(e) : null
        }
      }
      class fr {
        constructor(e) {
          this._worker = e, this._id = 0
        }
        ensureReady() {
          return this._ensureReadyPromise || (this._ensureReadyPromise = new Promise(((e, t) => {
            this._worker.addEventListener("message", (n => {
              let {
                data: r
              } = n;
              r.success ? e() : t()
            }), {
              once: !0
            }), this._worker.addEventListener("error", (e => {
              t(e)
            }), {
              once: !0
            })
          }))), this._ensureReadyPromise
        }
        destroy() {
          ur("[Replay] Destroying compression worker"), this._worker.terminate()
        }
        postMessage(e, t) {
          const n = this._getAndIncrementId();
          return new Promise(((r, o) => {
            const s = t => {
              let {
                data: i
              } = t;
              const a = i;
              if (a.method === e && a.id === n) {
                if (this._worker.removeEventListener("message", s), !a.success) return cr && J.vF.error("[Replay]", a.response), void o(new Error("Error in compression worker"));
                r(a.response)
              }
            };
            this._worker.addEventListener("message", s), this._worker.postMessage({
              id: n,
              method: e,
              arg: t
            })
          }))
        }
        _getAndIncrementId() {
          return this._id++
        }
      }
      class mr {
        constructor(e) {
          this._worker = new fr(e), this._earliestTimestamp = null, this._totalSize = 0, this.hasCheckout = !1
        }
        get hasEvents() {
          return !!this._earliestTimestamp
        }
        get type() {
          return "worker"
        }
        ensureReady() {
          return this._worker.ensureReady()
        }
        destroy() {
          this._worker.destroy()
        }
        addEvent(e) {
          const t = qn(e.timestamp);
          (!this._earliestTimestamp || t < this._earliestTimestamp) && (this._earliestTimestamp = t);
          const n = JSON.stringify(e);
          return this._totalSize += n.length, this._totalSize > qe ? Promise.reject(new pr) : this._sendEventToWorker(n)
        }
        finish() {
          return this._finishRequest()
        }
        clear() {
          this._earliestTimestamp = null, this._totalSize = 0, this.hasCheckout = !1, this._worker.postMessage("clear").then(null, (e => {
            cr && J.vF.warn('[Replay] Sending "clear" message to worker failed', e)
          }))
        }
        getEarliestTimestamp() {
          return this._earliestTimestamp
        }
        _sendEventToWorker(e) {
          return this._worker.postMessage("addEvent", e)
        }
        async _finishRequest() {
          const e = await this._worker.postMessage("finish");
          return this._earliestTimestamp = null, this._totalSize = 0, e
        }
      }
      class gr {
        constructor(e) {
          this._fallback = new hr, this._compression = new mr(e), this._used = this._fallback, this._ensureWorkerIsLoadedPromise = this._ensureWorkerIsLoaded()
        }
        get type() {
          return this._used.type
        }
        get hasEvents() {
          return this._used.hasEvents
        }
        get hasCheckout() {
          return this._used.hasCheckout
        }
        set hasCheckout(e) {
          this._used.hasCheckout = e
        }
        destroy() {
          this._fallback.destroy(), this._compression.destroy()
        }
        clear() {
          return this._used.clear()
        }
        getEarliestTimestamp() {
          return this._used.getEarliestTimestamp()
        }
        addEvent(e) {
          return this._used.addEvent(e)
        }
        async finish() {
          return await this.ensureWorkerIsLoaded(), this._used.finish()
        }
        ensureWorkerIsLoaded() {
          return this._ensureWorkerIsLoadedPromise
        }
        async _ensureWorkerIsLoaded() {
          try {
            await this._compression.ensureReady()
          } catch (e) {
            return void ur("[Replay] Failed to load the compression worker, falling back to simple buffer")
          }
          await this._switchToCompressionWorker()
        }
        async _switchToCompressionWorker() {
          const {
            events: e,
            hasCheckout: t
          } = this._fallback, n = [];
          for (const t of e) n.push(this._compression.addEvent(t));
          this._compression.hasCheckout = t, this._used = this._compression;
          try {
            await Promise.all(n)
          } catch (e) {
            cr && J.vF.warn("[Replay] Failed to add events when switching buffers.", e)
          }
        }
      }

      function vr() {
        try {
          return "sessionStorage" in Ne && !!Ne.sessionStorage
        } catch (e) {
          return !1
        }
      }

      function yr(e) {
        return void 0 !== e && Math.random() < e
      }

      function _r(e) {
        const t = Date.now();
        return {
          id: e.id || (0, Y.eJ)(),
          started: e.started || t,
          lastActivity: e.lastActivity || t,
          segmentId: e.segmentId || 0,
          sampled: e.sampled,
          previousSessionId: e.previousSessionId
        }
      }

      function br(e) {
        if (vr()) try {
          Ne.sessionStorage.setItem(Le, JSON.stringify(e))
        } catch (e) {}
      }

      function Sr(e) {
        let {
          sessionSampleRate: t,
          allowBuffering: n,
          stickySession: r = !1
        } = e, {
          previousSessionId: o
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const s = function(e, t) {
            return yr(e) ? "session" : !!t && "buffer"
          }(t, n),
          i = _r({
            sampled: s,
            previousSessionId: o
          });
        return r && br(i), i
      }

      function wr(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : +new Date;
        return null === e || void 0 === t || t < 0 || 0 !== t && e + t <= n
      }

      function kr(e, t) {
        let {
          maxReplayDuration: n,
          sessionIdleExpire: r,
          targetTime: o = Date.now()
        } = t;
        return wr(e.started, n, o) || wr(e.lastActivity, r, o)
      }

      function Tr(e, t) {
        let {
          sessionIdleExpire: n,
          maxReplayDuration: r
        } = t;
        return !!kr(e, {
          sessionIdleExpire: n,
          maxReplayDuration: r
        }) && ("buffer" !== e.sampled || 0 !== e.segmentId)
      }

      function Er(e, t) {
        let {
          traceInternals: n,
          sessionIdleExpire: r,
          maxReplayDuration: o,
          previousSessionId: s
        } = e;
        const i = t.stickySession && function(e) {
          if (!vr()) return null;
          try {
            const t = Ne.sessionStorage.getItem(Le);
            if (!t) return null;
            const n = JSON.parse(t);
            return lr("[Replay] Loading existing session", e), _r(n)
          } catch (e) {
            return null
          }
        }(n);
        return i ? Tr(i, {
          sessionIdleExpire: r,
          maxReplayDuration: o
        }) ? (lr("[Replay] Session in sessionStorage is expired, creating new one..."), Sr(t, {
          previousSessionId: i.id
        })) : i : (lr("[Replay] Creating new session", n), Sr(t, {
          previousSessionId: s
        }))
      }

      function xr(e, t, n) {
        return !!Ir(e, t) && (Cr(e, t, n), !0)
      }
      async function Cr(e, t, n) {
        if (!e.eventBuffer) return null;
        try {
          n && "buffer" === e.recordingMode && e.eventBuffer.clear(), n && (e.eventBuffer.hasCheckout = !0);
          const r = function(e, t) {
            try {
              if ("function" == typeof t && function(e) {
                  return e.type === Yt.Custom
                }(e)) return t(e)
            } catch (e) {
              return cr && J.vF.error("[Replay] An error occured in the `beforeAddRecordingEvent` callback, skipping the event...", e), null
            }
            return e
          }(t, e.getOptions().beforeAddRecordingEvent);
          if (!r) return;
          return await e.eventBuffer.addEvent(r)
        } catch (t) {
          const n = t && t instanceof pr ? "addEventSizeExceeded" : "addEvent";
          cr && J.vF.error(t), await e.stop({
            reason: n
          });
          const r = (0, d.KU)();
          r && r.recordDroppedEvent("internal_sdk_error", "replay")
        }
      }

      function Ir(e, t) {
        if (!e.eventBuffer || e.isPaused() || !e.isEnabled()) return !1;
        const n = qn(t.timestamp);
        return !(n + e.timeouts.sessionIdlePause < Date.now() || n > e.getContext().initialTimestamp + e.getOptions().maxReplayDuration && (ur(`[Replay] Skipping event with timestamp ${n} because it is after maxReplayDuration`, e.getOptions()._experiments.traceInternals), 1))
      }

      function Rr(e) {
        return !e.type
      }

      function Or(e) {
        return "transaction" === e.type
      }

      function Mr(e) {
        return "feedback" === e.type
      }

      function Ar(e) {
        const t = function() {
          const e = (0, d.KU)();
          if (!e) return !1;
          const t = e.getTransport();
          return t && t.send.__sentry__baseTransport__ || !1
        }();
        return (n, r) => {
          if (!e.isEnabled() || !Rr(n) && !Or(n)) return;
          const o = r && r.statusCode;
          t && (!o || o < 200 || o >= 300) || (Or(n) ? function(e, t) {
            const n = e.getContext();
            t.contexts && t.contexts.trace && t.contexts.trace.trace_id && n.traceIds.size < 100 && n.traceIds.add(t.contexts.trace.trace_id)
          }(e, n) : function(e, t) {
            const n = e.getContext();
            if (t.event_id && n.errorIds.size < 100 && n.errorIds.add(t.event_id), "buffer" !== e.recordingMode || !t.tags || !t.tags.replayId) return;
            const {
              beforeErrorSampling: r
            } = e.getOptions();
            ("function" != typeof r || r(t)) && setTimeout((() => {
              e.sendBufferedReplayOrFlush()
            }))
          }(e, n))
        }
      }

      function Fr(e, t) {
        return t.map((t => {
          let {
            type: n,
            start: r,
            end: o,
            name: s,
            data: i
          } = t;
          const a = e.throttledAddEvent({
            type: Yt.Custom,
            timestamp: r,
            data: {
              tag: "performanceSpan",
              payload: {
                op: n,
                description: s,
                startTimestamp: r,
                endTimestamp: o,
                data: i
              }
            }
          });
          return "string" == typeof a ? Promise.resolve(null) : a
        }))
      }

      function Dr(e, t) {
        e.isEnabled() && null !== t && (function(e, t) {
          return (!cr || !e.getOptions()._experiments.traceInternals) && (0, B.A)(t, (0, d.KU)())
        }(e, t.name) || e.addUpdate((() => (Fr(e, [t]), !0))))
      }

      function Nr(e, t) {
        if (e) try {
          if ("string" == typeof e) return t.encode(e).length;
          if (e instanceof URLSearchParams) return t.encode(e.toString()).length;
          if (e instanceof FormData) {
            const n = qr(e);
            return t.encode(n).length
          }
          if (e instanceof Blob) return e.size;
          if (e instanceof ArrayBuffer) return e.byteLength
        } catch (e) {}
      }

      function Lr(e) {
        if (!e) return;
        const t = parseInt(e, 10);
        return isNaN(t) ? void 0 : t
      }

      function Pr(e) {
        try {
          if ("string" == typeof e) return [e];
          if (e instanceof URLSearchParams) return [e.toString()];
          if (e instanceof FormData) return [qr(e)];
          if (!e) return [void 0]
        } catch (t) {
          return cr && J.vF.warn("[Replay] Failed to serialize body", e), [void 0, "BODY_PARSE_ERROR"]
        }
        return cr && J.vF.info("[Replay] Skipping network body because of body type", e), [void 0, "UNPARSEABLE_BODY_TYPE"]
      }

      function jr(e, t) {
        if (!e) return {
          headers: {},
          size: void 0,
          _meta: {
            warnings: [t]
          }
        };
        const n = {
            ...e._meta
          },
          r = n.warnings || [];
        return n.warnings = [...r, t], e._meta = n, e
      }

      function $r(e, t) {
        if (!t) return null;
        const {
          startTimestamp: n,
          endTimestamp: r,
          url: o,
          method: s,
          statusCode: i,
          request: a,
          response: c
        } = t;
        return {
          type: e,
          start: n / 1e3,
          end: r / 1e3,
          name: o,
          data: (0, K.Ce)({
            method: s,
            statusCode: i,
            request: a,
            response: c
          })
        }
      }

      function Br(e) {
        return {
          headers: {},
          size: e,
          _meta: {
            warnings: ["URL_SKIPPED"]
          }
        }
      }

      function Ur(e, t, n) {
        if (!t && 0 === Object.keys(e).length) return;
        if (!t) return {
          headers: e
        };
        if (!n) return {
          headers: e,
          size: t
        };
        const r = {
            headers: e,
            size: t
          },
          {
            body: o,
            warnings: s
          } = function(e) {
            if (!e || "string" != typeof e) return {
              body: e
            };
            const t = e.length > Ue,
              n = function(e) {
                const t = e[0],
                  n = e[e.length - 1];
                return "[" === t && "]" === n || "{" === t && "}" === n
              }(e);
            if (t) {
              const t = e.slice(0, Ue);
              return n ? {
                body: t,
                warnings: ["MAYBE_JSON_TRUNCATED"]
              } : {
                body: `${t}…`,
                warnings: ["TEXT_TRUNCATED"]
              }
            }
            if (n) try {
              return {
                body: JSON.parse(e)
              }
            } catch (e) {}
            return {
              body: e
            }
          }(n);
        return r.body = o, s && s.length > 0 && (r._meta = {
          warnings: s
        }), r
      }

      function Hr(e, t) {
        return Object.keys(e).reduce(((n, r) => {
          const o = r.toLowerCase();
          return t.includes(o) && e[r] && (n[o] = e[r]), n
        }), {})
      }

      function qr(e) {
        return new URLSearchParams(e).toString()
      }

      function zr(e, t) {
        const n = function(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ne.document.baseURI;
          if (e.startsWith("http://") || e.startsWith("https://") || e.startsWith(Ne.location.origin)) return e;
          const n = new URL(e, t);
          if (n.origin !== new URL(t).origin) return e;
          const r = n.href;
          return !e.endsWith("/") && r.endsWith("/") ? r.slice(0, -1) : r
        }(e);
        return (0, Q.Xr)(n, t)
      }

      function Wr() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        if (2 === e.length && "object" == typeof e[1]) return e[1].body
      }

      function Kr(e, t) {
        const n = {};
        return t.forEach((t => {
          e.get(t) && (n[t] = e.get(t))
        })), n
      }

      function Gr(e, t) {
        if (!e) return {};
        const n = e.headers;
        return n ? n instanceof Headers ? Kr(n, t) : Array.isArray(n) ? {} : Hr(n, t) : {}
      }

      function Vr(e) {
        const t = (0, d.KU)();
        try {
          const n = new TextEncoder,
            {
              networkDetailAllowUrls: r,
              networkDetailDenyUrls: o,
              networkCaptureBodies: s,
              networkRequestHeaders: i,
              networkResponseHeaders: a
            } = e.getOptions(),
            c = {
              replay: e,
              textEncoder: n,
              networkDetailAllowUrls: r,
              networkDetailDenyUrls: o,
              networkCaptureBodies: s,
              networkRequestHeaders: i,
              networkResponseHeaders: a
            };
          t && t.on ? t.on("beforeAddBreadcrumb", ((e, t) => function(e, t, n) {
            if (t.data) try {
              (function(e) {
                return "xhr" === e.category
              })(t) && function(e) {
                return e && e.xhr
              }(n) && (function(e, t, n) {
                const {
                  xhr: r,
                  input: o
                } = t;
                if (!r) return;
                const s = Nr(o, n.textEncoder),
                  i = r.getResponseHeader("content-length") ? Lr(r.getResponseHeader("content-length")) : function(e, t, n) {
                    try {
                      return Nr("json" === t && e && "object" == typeof e ? JSON.stringify(e) : e, n)
                    } catch (e) {
                      return
                    }
                  }(r.response, r.responseType, n.textEncoder);
                void 0 !== s && (e.data.request_body_size = s), void 0 !== i && (e.data.response_body_size = i)
              }(t, n, e), async function(e, t, n) {
                try {
                  const r = function(e, t, n) {
                      const r = Date.now(),
                        {
                          startTimestamp: o = r,
                          endTimestamp: s = r,
                          input: i,
                          xhr: a
                        } = t,
                        {
                          url: c,
                          method: u,
                          status_code: l = 0,
                          request_body_size: d,
                          response_body_size: p
                        } = e.data;
                      if (!c) return null;
                      if (!a || !zr(c, n.networkDetailAllowUrls) || zr(c, n.networkDetailDenyUrls)) return {
                        startTimestamp: o,
                        endTimestamp: s,
                        url: c,
                        method: u,
                        statusCode: l,
                        request: Br(d),
                        response: Br(p)
                      };
                      const h = a[X.Er],
                        f = h ? Hr(h.request_headers, n.networkRequestHeaders) : {},
                        m = Hr(function(e) {
                          const t = e.getAllResponseHeaders();
                          return t ? t.split("\r\n").reduce(((e, t) => {
                            const [n, r] = t.split(": ");
                            return e[n.toLowerCase()] = r, e
                          }), {}) : {}
                        }(a), n.networkResponseHeaders),
                        [g, v] = n.networkCaptureBodies ? Pr(i) : [void 0],
                        [y, _] = n.networkCaptureBodies ? function(e) {
                          const t = [];
                          try {
                            return [e.responseText]
                          } catch (e) {
                            t.push(e)
                          }
                          try {
                            return function(e, t) {
                              try {
                                if ("string" == typeof e) return [e];
                                if (e instanceof Document) return [e.body.outerHTML];
                                if ("json" === t && e && "object" == typeof e) return [JSON.stringify(e)];
                                if (!e) return [void 0]
                              } catch (t) {
                                return cr && J.vF.warn("[Replay] Failed to serialize body", e), [void 0, "BODY_PARSE_ERROR"]
                              }
                              return cr && J.vF.info("[Replay] Skipping network body because of body type", e), [void 0, "UNPARSEABLE_BODY_TYPE"]
                            }(e.response, e.responseType)
                          } catch (e) {
                            t.push(e)
                          }
                          return cr && J.vF.warn("[Replay] Failed to get xhr response body", ...t), [void 0]
                        }(a) : [void 0],
                        b = Ur(f, d, g),
                        S = Ur(m, p, y);
                      return {
                        startTimestamp: o,
                        endTimestamp: s,
                        url: c,
                        method: u,
                        statusCode: l,
                        request: v ? jr(b, v) : b,
                        response: _ ? jr(S, _) : S
                      }
                    }(e, t, n),
                    o = $r("resource.xhr", r);
                  Dr(n.replay, o)
                } catch (e) {
                  cr && J.vF.error("[Replay] Failed to capture xhr breadcrumb", e)
                }
              }(t, n, e)),
              function(e) {
                return "fetch" === e.category
              }(t) && function(e) {
                return e && e.response
              }(n) && (function(e, t, n) {
                const {
                  input: r,
                  response: o
                } = t, s = Nr(r ? Wr(r) : void 0, n.textEncoder), i = o ? Lr(o.headers.get("content-length")) : void 0;
                void 0 !== s && (e.data.request_body_size = s), void 0 !== i && (e.data.response_body_size = i)
              }(t, n, e), async function(e, t, n) {
                try {
                  const r = await async function(e, t, n) {
                    const r = Date.now(),
                      {
                        startTimestamp: o = r,
                        endTimestamp: s = r
                      } = t,
                      {
                        url: i,
                        method: a,
                        status_code: c = 0,
                        request_body_size: u,
                        response_body_size: l
                      } = e.data,
                      d = zr(i, n.networkDetailAllowUrls) && !zr(i, n.networkDetailDenyUrls),
                      p = d ? function(e, t, n) {
                        let {
                          networkCaptureBodies: r,
                          networkRequestHeaders: o
                        } = e;
                        const s = t ? (a = o, 1 === (i = t).length && "string" != typeof i[0] ? Gr(i[0], a) : 2 === i.length ? Gr(i[1], a) : {}) : {};
                        var i, a;
                        if (!r) return Ur(s, n, void 0);
                        const c = Wr(t),
                          [u, l] = Pr(c),
                          d = Ur(s, n, u);
                        return l ? jr(d, l) : d
                      }(n, t.input, u) : Br(u),
                      h = await async function(e, t, n, r) {
                        let {
                          networkCaptureBodies: o,
                          textEncoder: s,
                          networkResponseHeaders: i
                        } = t;
                        if (!e && void 0 !== r) return Br(r);
                        const a = n ? Kr(n.headers, i) : {};
                        if (!n || !o && void 0 !== r) return Ur(a, r, void 0);
                        const [c, u] = await async function(e) {
                          const t = function(e) {
                            try {
                              return e.clone()
                            } catch (e) {
                              cr && J.vF.warn("[Replay] Failed to clone response body", e)
                            }
                          }(e);
                          if (!t) return [void 0, "BODY_PARSE_ERROR"];
                          try {
                            const e = await
                            function(e) {
                              return new Promise(((t, n) => {
                                const r = setTimeout((() => n(new Error("Timeout while trying to read response body"))), 500);
                                (async function(e) {
                                  return await e.text()
                                })(e).then((e => t(e)), (e => n(e))).finally((() => clearTimeout(r)))
                              }))
                            }(t);
                            return [e]
                          } catch (e) {
                            return cr && J.vF.warn("[Replay] Failed to get text body from response", e), [void 0, "BODY_PARSE_ERROR"]
                          }
                        }(n), l = function(e, t) {
                          let {
                            networkCaptureBodies: n,
                            textEncoder: r,
                            responseBodySize: o,
                            captureDetails: s,
                            headers: i
                          } = t;
                          try {
                            const t = e && e.length && void 0 === o ? Nr(e, r) : o;
                            return s ? Ur(i, t, n ? e : void 0) : Br(t)
                          } catch (e) {
                            return cr && J.vF.warn("[Replay] Failed to serialize response body", e), Ur(i, o, void 0)
                          }
                        }(c, {
                          networkCaptureBodies: o,
                          textEncoder: s,
                          responseBodySize: r,
                          captureDetails: e,
                          headers: a
                        });
                        return u ? jr(l, u) : l
                      }(d, n, t.response, l);
                    return {
                      startTimestamp: o,
                      endTimestamp: s,
                      url: i,
                      method: a,
                      statusCode: c,
                      request: p,
                      response: h
                    }
                  }(e, t, n), o = $r("resource.fetch", r);
                  Dr(n.replay, o)
                } catch (e) {
                  cr && J.vF.error("[Replay] Failed to capture fetch breadcrumb", e)
                }
              }(t, n, e))
            } catch (e) {
              cr && J.vF.warn("Error when enriching network breadcrumb")
            }
          }(c, e, t))) : ((0, Z.u)(function(e) {
            return t => {
              if (!e.isEnabled()) return;
              const n = function(e) {
                const {
                  startTimestamp: t,
                  endTimestamp: n,
                  fetchData: r,
                  response: o
                } = e;
                if (!n) return null;
                const {
                  method: s,
                  url: i
                } = r;
                return {
                  type: "resource.fetch",
                  start: t / 1e3,
                  end: n / 1e3,
                  name: i,
                  data: {
                    method: s,
                    statusCode: o ? o.status : void 0
                  }
                }
              }(t);
              Dr(e, n)
            }
          }(e)), (0, X.Mn)(function(e) {
            return t => {
              if (!e.isEnabled()) return;
              const n = function(e) {
                const {
                  startTimestamp: t,
                  endTimestamp: n,
                  xhr: r
                } = e, o = r[X.Er];
                if (!t || !n || !o) return null;
                const {
                  method: s,
                  url: i,
                  status_code: a
                } = o;
                return void 0 === i ? null : {
                  type: "resource.xhr",
                  name: i,
                  start: t / 1e3,
                  end: n / 1e3,
                  data: {
                    method: s,
                    statusCode: a
                  }
                }
              }(t);
              Dr(e, n)
            }
          }(e)))
        } catch (e) {}
      }
      let Jr = null;

      function Yr(e) {
        return !(!e || !e.on)
      }

      function Xr(e) {
        const {
          jsHeapSizeLimit: t,
          totalJSHeapSize: n,
          usedJSHeapSize: r
        } = e, o = Date.now() / 1e3;
        return {
          type: "memory",
          name: "memory",
          start: o,
          end: o,
          data: {
            memory: {
              jsHeapSizeLimit: t,
              totalJSHeapSize: n,
              usedJSHeapSize: r
            }
          }
        }
      }

      function Qr(e) {
        let t = !1;
        return (n, r) => {
          if (!e.checkAndHandleExpiredSession()) return void(cr && J.vF.warn("[Replay] Received replay event after session expired."));
          const o = r || !t;
          t = !0, e.clickDetector && function(e, t) {
            try {
              if (! function(e) {
                  return e.type === Hn
                }(t)) return;
              const {
                source: n
              } = t.data;
              if (n === Xt.Mutation && e.registerMutation(t.timestamp), n === Xt.Scroll && e.registerScroll(t.timestamp), function(e) {
                  return e.data.source === Xt.MouseInteraction
                }(t)) {
                const {
                  type: n,
                  id: r
                } = t.data, o = Un.mirror.getNode(r);
                o instanceof HTMLElement && n === Qt.Click && e.registerClick(o)
              }
            } catch (e) {}
          }(e.clickDetector, n), e.addUpdate((() => {
            if ("buffer" === e.recordingMode && o && e.setInitialState(), !xr(e, n, o)) return !0;
            if (!o) return !1;
            if (function(e, t) {
                t && e.session && 0 === e.session.segmentId && xr(e, function(e) {
                  const t = e.getOptions();
                  return {
                    type: Yt.Custom,
                    timestamp: Date.now(),
                    data: {
                      tag: "options",
                      payload: {
                        shouldRecordCanvas: e.isRecordingCanvas(),
                        sessionSampleRate: t.sessionSampleRate,
                        errorSampleRate: t.errorSampleRate,
                        useCompressionOption: t.useCompression,
                        blockAllMedia: t.blockAllMedia,
                        maskAllText: t.maskAllText,
                        maskAllInputs: t.maskAllInputs,
                        useCompression: !!e.eventBuffer && "worker" === e.eventBuffer.type,
                        networkDetailHasUrls: t.networkDetailAllowUrls.length > 0,
                        networkCaptureBodies: t.networkCaptureBodies,
                        networkRequestHasHeaders: t.networkRequestHeaders.length > 0,
                        networkResponseHasHeaders: t.networkResponseHeaders.length > 0
                      }
                    }
                  }
                }(e), !1)
              }(e, o), e.session && e.session.previousSessionId) return !0;
            if ("buffer" === e.recordingMode && e.session && e.eventBuffer) {
              const t = e.eventBuffer.getEarliestTimestamp();
              t && (ur(`[Replay] Updating session start time to earliest event in buffer to ${new Date(t)}`, e.getOptions()._experiments.traceInternals), e.session.started = t, e.getOptions().stickySession && br(e.session))
            }
            return "session" === e.recordingMode && e.flush(), !0
          }))
        }
      }
      class Zr extends Error {
        constructor(e) {
          super(`Transport returned status code ${e}`)
        }
      }
      class eo extends Error {
        constructor(e) {
          super("Rate limit hit"), this.rateLimits = e
        }
      }
      async function to(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
          count: 0,
          interval: 5e3
        };
        const {
          recordingData: n,
          options: r
        } = e;
        if (n.length) try {
          return await async function(e) {
            let {
              recordingData: t,
              replayId: n,
              segmentId: r,
              eventContext: o,
              timestamp: s,
              session: a
            } = e;
            const c = function(e) {
                let t, {
                  recordingData: n,
                  headers: r
                } = e;
                const o = `${JSON.stringify(r)}\n`;
                if ("string" == typeof n) t = `${o}${n}`;
                else {
                  const e = (new TextEncoder).encode(o);
                  t = new Uint8Array(e.length + n.length), t.set(e), t.set(n, e.length)
                }
                return t
              }({
                recordingData: t,
                headers: {
                  segment_id: r
                }
              }),
              {
                urls: u,
                errorIds: l,
                traceIds: p,
                initialTimestamp: h
              } = o,
              f = (0, d.KU)(),
              m = (0, d.o5)(),
              g = f && f.getTransport(),
              v = f && f.getDsn();
            if (!(f && g && v && a.sampled)) return;
            const y = {
                type: Pe,
                replay_start_timestamp: h / 1e3,
                timestamp: s / 1e3,
                error_ids: l,
                trace_ids: p,
                urls: u,
                replay_id: n,
                segment_id: r,
                replay_type: a.sampled
              },
              _ = await async function(e) {
                let {
                  client: t,
                  scope: n,
                  replayId: r,
                  event: o
                } = e;
                const s = {
                  event_id: r,
                  integrations: "object" != typeof t._integrations || null === t._integrations || Array.isArray(t._integrations) ? void 0 : Object.keys(t._integrations)
                };
                t.emit && t.emit("preprocessEvent", o, s);
                const a = await (0, U.mG)(t.getOptions(), o, s, n, t, (0, i.rm)());
                if (!a) return null;
                a.platform = a.platform || "javascript";
                const c = t.getSdkMetadata && t.getSdkMetadata(),
                  {
                    name: u,
                    version: l
                  } = c && c.sdk || {};
                return a.sdk = {
                  ...a.sdk,
                  name: u || "sentry.javascript.unknown",
                  version: l || "0.0.0"
                }, a
              }({
                scope: m,
                client: f,
                replayId: n,
                event: y
              });
            if (!_) return f.recordDroppedEvent("event_processor", "replay", y), void ur("An event processor returned `null`, will not send event.");
            delete _.sdkProcessingMetadata;
            const b = function(e, t, n, r) {
              return (0, ne.h4)((0, ne.n2)(e, (0, ne.Cj)(e), r, n), [
                [{
                  type: "replay_event"
                }, e],
                [{
                  type: "replay_recording",
                  length: "string" == typeof t ? (new TextEncoder).encode(t).length : t.length
                }, t]
              ])
            }(_, c, v, f.getOptions().tunnel);
            let S;
            try {
              S = await g.send(b)
            } catch (e) {
              const t = new Error(je);
              try {
                t.cause = e
              } catch (e) {}
              throw t
            }
            if (!S) return S;
            if ("number" == typeof S.statusCode && (S.statusCode < 200 || S.statusCode >= 300)) throw new Zr(S.statusCode);
            const w = (0, re.wq)({}, S);
            if ((0, re.Jz)(w, "replay")) throw new eo(w);
            return S
          }(e), !0
        } catch (n) {
          if (n instanceof Zr || n instanceof eo) throw n;
          if ((0, d.o)("Replays", {
              _retryCount: t.count
            }), cr && r._experiments && r._experiments.captureExceptions && (0, d.Cp)(n), t.count >= 3) {
            const e = new Error(`${je} - max retries exceeded`);
            try {
              e.cause = n
            } catch (e) {}
            throw e
          }
          return t.interval *= ++t.count, new Promise(((n, r) => {
            setTimeout((async () => {
              try {
                await to(e, t), n(!0)
              } catch (e) {
                r(e)
              }
            }), t.interval)
          }))
        }
      }
      const no = "__THROTTLED";
      class ro {
        constructor(e) {
          let {
            options: t,
            recordingOptions: n
          } = e;
          ro.prototype.__init.call(this), ro.prototype.__init2.call(this), ro.prototype.__init3.call(this), ro.prototype.__init4.call(this), ro.prototype.__init5.call(this), ro.prototype.__init6.call(this), this.eventBuffer = null, this.performanceEntries = [], this.replayPerformanceEntries = [], this.recordingMode = "session", this.timeouts = {
            sessionIdlePause: 3e5,
            sessionIdleExpire: 9e5
          }, this._lastActivity = Date.now(), this._isEnabled = !1, this._isPaused = !1, this._hasInitializedCoreListeners = !1, this._context = {
            errorIds: new Set,
            traceIds: new Set,
            urls: [],
            initialTimestamp: Date.now(),
            initialUrl: ""
          }, this._recordingOptions = n, this._options = t, this._debouncedFlush = function(e, t, n) {
            let r, o, s;
            const i = n && n.maxWait ? Math.max(n.maxWait, t) : 0;

            function a() {
              return c(), r = e(), r
            }

            function c() {
              void 0 !== o && clearTimeout(o), void 0 !== s && clearTimeout(s), o = s = void 0
            }

            function u() {
              return o && clearTimeout(o), o = setTimeout(a, t), i && void 0 === s && (s = setTimeout(a, i)), r
            }
            return u.cancel = c, u.flush = function() {
              return void 0 !== o || void 0 !== s ? a() : r
            }, u
          }((() => this._flush()), this._options.flushMinDelay, {
            maxWait: this._options.flushMaxDelay
          }), this._throttledAddEvent = function(e, t, n) {
            const r = new Map;
            let o = !1;
            return function() {
              const s = Math.floor(Date.now() / 1e3);
              if ((e => {
                  const t = e - n;
                  r.forEach(((e, n) => {
                    n < t && r.delete(n)
                  }))
                })(s), [...r.values()].reduce(((e, t) => e + t), 0) >= t) {
                const e = o;
                return o = !0, e ? "__SKIPPED" : no
              }
              o = !1;
              const i = r.get(s) || 0;
              return r.set(s, i + 1), e(...arguments)
            }
          }(((e, t) => function(e, t, n) {
            return Ir(e, t) ? Cr(e, t, n) : Promise.resolve(null)
          }(this, e, t)), 300, 5);
          const {
            slowClickTimeout: r,
            slowClickIgnoreSelectors: o
          } = this.getOptions(), s = r ? {
            threshold: Math.min(3e3, r),
            timeout: r,
            scrollTimeout: 300,
            ignoreSelector: o ? o.join(",") : ""
          } : void 0;
          s && (this.clickDetector = new Xn(this, s))
        }
        getContext() {
          return this._context
        }
        isEnabled() {
          return this._isEnabled
        }
        isPaused() {
          return this._isPaused
        }
        isRecordingCanvas() {
          return Boolean(this._canvas)
        }
        getOptions() {
          return this._options
        }
        initializeSampling(e) {
          const {
            errorSampleRate: t,
            sessionSampleRate: n
          } = this._options;
          t <= 0 && n <= 0 || (this._initializeSessionForSampling(e), this.session ? !1 !== this.session.sampled && (this.recordingMode = "buffer" === this.session.sampled && 0 === this.session.segmentId ? "buffer" : "session", lr(`[Replay] Starting replay in ${this.recordingMode} mode`, this._options._experiments.traceInternals), this._initializeRecording()) : this._handleException(new Error("Unable to initialize and create session")))
        }
        start() {
          if (this._isEnabled && "session" === this.recordingMode) throw new Error("Replay recording is already in progress");
          if (this._isEnabled && "buffer" === this.recordingMode) throw new Error("Replay buffering is in progress, call `flush()` to save the replay");
          lr("[Replay] Starting replay in session mode", this._options._experiments.traceInternals);
          const e = Er({
            maxReplayDuration: this._options.maxReplayDuration,
            sessionIdleExpire: this.timeouts.sessionIdleExpire,
            traceInternals: this._options._experiments.traceInternals
          }, {
            stickySession: this._options.stickySession,
            sessionSampleRate: 1,
            allowBuffering: !1
          });
          this.session = e, this._initializeRecording()
        }
        startBuffering() {
          if (this._isEnabled) throw new Error("Replay recording is already in progress");
          lr("[Replay] Starting replay in buffer mode", this._options._experiments.traceInternals);
          const e = Er({
            sessionIdleExpire: this.timeouts.sessionIdleExpire,
            maxReplayDuration: this._options.maxReplayDuration,
            traceInternals: this._options._experiments.traceInternals
          }, {
            stickySession: this._options.stickySession,
            sessionSampleRate: 0,
            allowBuffering: !0
          });
          this.session = e, this.recordingMode = "buffer", this._initializeRecording()
        }
        startRecording() {
          try {
            const e = this._canvas;
            this._stopRecording = Un({
              ...this._recordingOptions,
              ..."buffer" === this.recordingMode && {
                checkoutEveryNms: 6e4
              },
              emit: Qr(this),
              onMutation: this._onMutationHandler,
              ...e ? {
                recordCanvas: e.recordCanvas,
                getCanvasManager: e.getCanvasManager,
                sampling: e.sampling,
                dataURLOptions: e.dataURLOptions
              } : {}
            })
          } catch (e) {
            this._handleException(e)
          }
        }
        stopRecording() {
          try {
            return this._stopRecording && (this._stopRecording(), this._stopRecording = void 0), !0
          } catch (e) {
            return this._handleException(e), !1
          }
        }
        async stop() {
          let {
            forceFlush: e = !1,
            reason: t
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          if (this._isEnabled) {
            this._isEnabled = !1;
            try {
              ur("[Replay] Stopping Replay" + (t ? ` triggered by ${t}` : ""), this._options._experiments.traceInternals), this._removeListeners(), this.stopRecording(), this._debouncedFlush.cancel(), e && await this._flush({
                  force: !0
                }), this.eventBuffer && this.eventBuffer.destroy(), this.eventBuffer = null, n = this,
                function() {
                  if (vr()) try {
                    Ne.sessionStorage.removeItem(Le)
                  } catch (e) {}
                }(), n.session = void 0
            } catch (e) {
              this._handleException(e)
            }
          }
          var n
        }
        pause() {
          this._isPaused || (this._isPaused = !0, this.stopRecording(), ur("[Replay] Pausing replay", this._options._experiments.traceInternals))
        }
        resume() {
          this._isPaused && this._checkSession() && (this._isPaused = !1, this.startRecording(), ur("[Replay] Resuming replay", this._options._experiments.traceInternals))
        }
        async sendBufferedReplayOrFlush() {
          let {
            continueRecording: e = !0
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          if ("session" === this.recordingMode) return this.flushImmediate();
          const t = Date.now();
          ur("[Replay] Converting buffer to session", this._options._experiments.traceInternals), await this.flushImmediate();
          const n = this.stopRecording();
          e && n && "session" !== this.recordingMode && (this.recordingMode = "session", this.session && (this._updateUserActivity(t), this._updateSessionActivity(t), this._maybeSaveSession()), this.startRecording())
        }
        addUpdate(e) {
          const t = e();
          "buffer" !== this.recordingMode && !0 !== t && this._debouncedFlush()
        }
        triggerUserActivity() {
          if (this._updateUserActivity(), this._stopRecording) this.checkAndHandleExpiredSession(), this._updateSessionActivity();
          else {
            if (!this._checkSession()) return;
            this.resume()
          }
        }
        updateUserActivity() {
          this._updateUserActivity(), this._updateSessionActivity()
        }
        conditionalFlush() {
          return "buffer" === this.recordingMode ? Promise.resolve() : this.flushImmediate()
        }
        flush() {
          return this._debouncedFlush()
        }
        flushImmediate() {
          return this._debouncedFlush(), this._debouncedFlush.flush()
        }
        cancelFlush() {
          this._debouncedFlush.cancel()
        }
        getSessionId() {
          return this.session && this.session.id
        }
        checkAndHandleExpiredSession() {
          if (!(this._lastActivity && wr(this._lastActivity, this.timeouts.sessionIdlePause) && this.session && "session" === this.session.sampled)) return !!this._checkSession();
          this.pause()
        }
        setInitialState() {
          const e = `${Ne.location.pathname}${Ne.location.hash}${Ne.location.search}`,
            t = `${Ne.location.origin}${e}`;
          this.performanceEntries = [], this.replayPerformanceEntries = [], this._clearContext(), this._context.initialUrl = t, this._context.initialTimestamp = Date.now(), this._context.urls.push(t)
        }
        throttledAddEvent(e, t) {
          const n = this._throttledAddEvent(e, t);
          if (n === no) {
            const e = er({
              category: "replay.throttled"
            });
            this.addUpdate((() => !xr(this, {
              type: 5,
              timestamp: e.timestamp || 0,
              data: {
                tag: "breadcrumb",
                payload: e,
                metric: !0
              }
            })))
          }
          return n
        }
        getCurrentRoute() {
          const e = this.lastTransaction || (0, d.o5)().getTransaction(),
            t = (e && (0, H.et)(e).data || {})[q.i_];
          if (e && t && ["route", "custom"].includes(t)) return (0, H.et)(e).description
        }
        _initializeRecording() {
          this.setInitialState(), this._updateSessionActivity(), this.eventBuffer = function(e) {
            let {
              useCompression: t,
              workerUrl: n
            } = e;
            if (t && window.Worker) {
              const e = function(e) {
                try {
                  const t = e || ("undefined" != typeof __SENTRY_EXCLUDE_REPLAY_WORKER__ && __SENTRY_EXCLUDE_REPLAY_WORKER__ ? "" : function() {
                    const e = new Blob(['var t=Uint8Array,n=Uint16Array,r=Int32Array,e=new t([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),i=new t([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),a=new t([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),s=function(t,e){for(var i=new n(31),a=0;a<31;++a)i[a]=e+=1<<t[a-1];var s=new r(i[30]);for(a=1;a<30;++a)for(var o=i[a];o<i[a+1];++o)s[o]=o-i[a]<<5|a;return{b:i,r:s}},o=s(e,2),f=o.b,h=o.r;f[28]=258,h[258]=28;for(var l=s(i,0).r,u=new n(32768),c=0;c<32768;++c){var v=(43690&c)>>1|(21845&c)<<1;v=(61680&(v=(52428&v)>>2|(13107&v)<<2))>>4|(3855&v)<<4,u[c]=((65280&v)>>8|(255&v)<<8)>>1}var d=function(t,r,e){for(var i=t.length,a=0,s=new n(r);a<i;++a)t[a]&&++s[t[a]-1];var o,f=new n(r);for(a=1;a<r;++a)f[a]=f[a-1]+s[a-1]<<1;if(e){o=new n(1<<r);var h=15-r;for(a=0;a<i;++a)if(t[a])for(var l=a<<4|t[a],c=r-t[a],v=f[t[a]-1]++<<c,d=v|(1<<c)-1;v<=d;++v)o[u[v]>>h]=l}else for(o=new n(i),a=0;a<i;++a)t[a]&&(o[a]=u[f[t[a]-1]++]>>15-t[a]);return o},g=new t(288);for(c=0;c<144;++c)g[c]=8;for(c=144;c<256;++c)g[c]=9;for(c=256;c<280;++c)g[c]=7;for(c=280;c<288;++c)g[c]=8;var w=new t(32);for(c=0;c<32;++c)w[c]=5;var p=d(g,9,0),y=d(w,5,0),m=function(t){return(t+7)/8|0},b=function(n,r,e){return(null==r||r<0)&&(r=0),(null==e||e>n.length)&&(e=n.length),new t(n.subarray(r,e))},M=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],E=function(t,n,r){var e=new Error(n||M[t]);if(e.code=t,Error.captureStackTrace&&Error.captureStackTrace(e,E),!r)throw e;return e},z=function(t,n,r){r<<=7&n;var e=n/8|0;t[e]|=r,t[e+1]|=r>>8},A=function(t,n,r){r<<=7&n;var e=n/8|0;t[e]|=r,t[e+1]|=r>>8,t[e+2]|=r>>16},_=function(r,e){for(var i=[],a=0;a<r.length;++a)r[a]&&i.push({s:a,f:r[a]});var s=i.length,o=i.slice();if(!s)return{t:F,l:0};if(1==s){var f=new t(i[0].s+1);return f[i[0].s]=1,{t:f,l:1}}i.sort((function(t,n){return t.f-n.f})),i.push({s:-1,f:25001});var h=i[0],l=i[1],u=0,c=1,v=2;for(i[0]={s:-1,f:h.f+l.f,l:h,r:l};c!=s-1;)h=i[i[u].f<i[v].f?u++:v++],l=i[u!=c&&i[u].f<i[v].f?u++:v++],i[c++]={s:-1,f:h.f+l.f,l:h,r:l};var d=o[0].s;for(a=1;a<s;++a)o[a].s>d&&(d=o[a].s);var g=new n(d+1),w=x(i[c-1],g,0);if(w>e){a=0;var p=0,y=w-e,m=1<<y;for(o.sort((function(t,n){return g[n.s]-g[t.s]||t.f-n.f}));a<s;++a){var b=o[a].s;if(!(g[b]>e))break;p+=m-(1<<w-g[b]),g[b]=e}for(p>>=y;p>0;){var M=o[a].s;g[M]<e?p-=1<<e-g[M]++-1:++a}for(;a>=0&&p;--a){var E=o[a].s;g[E]==e&&(--g[E],++p)}w=e}return{t:new t(g),l:w}},x=function(t,n,r){return-1==t.s?Math.max(x(t.l,n,r+1),x(t.r,n,r+1)):n[t.s]=r},D=function(t){for(var r=t.length;r&&!t[--r];);for(var e=new n(++r),i=0,a=t[0],s=1,o=function(t){e[i++]=t},f=1;f<=r;++f)if(t[f]==a&&f!=r)++s;else{if(!a&&s>2){for(;s>138;s-=138)o(32754);s>2&&(o(s>10?s-11<<5|28690:s-3<<5|12305),s=0)}else if(s>3){for(o(a),--s;s>6;s-=6)o(8304);s>2&&(o(s-3<<5|8208),s=0)}for(;s--;)o(a);s=1,a=t[f]}return{c:e.subarray(0,i),n:r}},T=function(t,n){for(var r=0,e=0;e<n.length;++e)r+=t[e]*n[e];return r},k=function(t,n,r){var e=r.length,i=m(n+2);t[i]=255&e,t[i+1]=e>>8,t[i+2]=255^t[i],t[i+3]=255^t[i+1];for(var a=0;a<e;++a)t[i+a+4]=r[a];return 8*(i+4+e)},C=function(t,r,s,o,f,h,l,u,c,v,m){z(r,m++,s),++f[256];for(var b=_(f,15),M=b.t,E=b.l,x=_(h,15),C=x.t,U=x.l,F=D(M),I=F.c,S=F.n,L=D(C),O=L.c,j=L.n,q=new n(19),B=0;B<I.length;++B)++q[31&I[B]];for(B=0;B<O.length;++B)++q[31&O[B]];for(var G=_(q,7),H=G.t,J=G.l,K=19;K>4&&!H[a[K-1]];--K);var N,P,Q,R,V=v+5<<3,W=T(f,g)+T(h,w)+l,X=T(f,M)+T(h,C)+l+14+3*K+T(q,H)+2*q[16]+3*q[17]+7*q[18];if(c>=0&&V<=W&&V<=X)return k(r,m,t.subarray(c,c+v));if(z(r,m,1+(X<W)),m+=2,X<W){N=d(M,E,0),P=M,Q=d(C,U,0),R=C;var Y=d(H,J,0);z(r,m,S-257),z(r,m+5,j-1),z(r,m+10,K-4),m+=14;for(B=0;B<K;++B)z(r,m+3*B,H[a[B]]);m+=3*K;for(var Z=[I,O],$=0;$<2;++$){var tt=Z[$];for(B=0;B<tt.length;++B){var nt=31&tt[B];z(r,m,Y[nt]),m+=H[nt],nt>15&&(z(r,m,tt[B]>>5&127),m+=tt[B]>>12)}}}else N=p,P=g,Q=y,R=w;for(B=0;B<u;++B){var rt=o[B];if(rt>255){A(r,m,N[(nt=rt>>18&31)+257]),m+=P[nt+257],nt>7&&(z(r,m,rt>>23&31),m+=e[nt]);var et=31&rt;A(r,m,Q[et]),m+=R[et],et>3&&(A(r,m,rt>>5&8191),m+=i[et])}else A(r,m,N[rt]),m+=P[rt]}return A(r,m,N[256]),m+P[256]},U=new r([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),F=new t(0),I=function(){for(var t=new Int32Array(256),n=0;n<256;++n){for(var r=n,e=9;--e;)r=(1&r&&-306674912)^r>>>1;t[n]=r}return t}(),S=function(){var t=1,n=0;return{p:function(r){for(var e=t,i=n,a=0|r.length,s=0;s!=a;){for(var o=Math.min(s+2655,a);s<o;++s)i+=e+=r[s];e=(65535&e)+15*(e>>16),i=(65535&i)+15*(i>>16)}t=e,n=i},d:function(){return(255&(t%=65521))<<24|(65280&t)<<8|(255&(n%=65521))<<8|n>>8}}},L=function(a,s,o,f,u){if(!u&&(u={l:1},s.dictionary)){var c=s.dictionary.subarray(-32768),v=new t(c.length+a.length);v.set(c),v.set(a,c.length),a=v,u.w=c.length}return function(a,s,o,f,u,c){var v=c.z||a.length,d=new t(f+v+5*(1+Math.ceil(v/7e3))+u),g=d.subarray(f,d.length-u),w=c.l,p=7&(c.r||0);if(s){p&&(g[0]=c.r>>3);for(var y=U[s-1],M=y>>13,E=8191&y,z=(1<<o)-1,A=c.p||new n(32768),_=c.h||new n(z+1),x=Math.ceil(o/3),D=2*x,T=function(t){return(a[t]^a[t+1]<<x^a[t+2]<<D)&z},F=new r(25e3),I=new n(288),S=new n(32),L=0,O=0,j=c.i||0,q=0,B=c.w||0,G=0;j+2<v;++j){var H=T(j),J=32767&j,K=_[H];if(A[J]=K,_[H]=J,B<=j){var N=v-j;if((L>7e3||q>24576)&&(N>423||!w)){p=C(a,g,0,F,I,S,O,q,G,j-G,p),q=L=O=0,G=j;for(var P=0;P<286;++P)I[P]=0;for(P=0;P<30;++P)S[P]=0}var Q=2,R=0,V=E,W=J-K&32767;if(N>2&&H==T(j-W))for(var X=Math.min(M,N)-1,Y=Math.min(32767,j),Z=Math.min(258,N);W<=Y&&--V&&J!=K;){if(a[j+Q]==a[j+Q-W]){for(var $=0;$<Z&&a[j+$]==a[j+$-W];++$);if($>Q){if(Q=$,R=W,$>X)break;var tt=Math.min(W,$-2),nt=0;for(P=0;P<tt;++P){var rt=j-W+P&32767,et=rt-A[rt]&32767;et>nt&&(nt=et,K=rt)}}}W+=(J=K)-(K=A[J])&32767}if(R){F[q++]=268435456|h[Q]<<18|l[R];var it=31&h[Q],at=31&l[R];O+=e[it]+i[at],++I[257+it],++S[at],B=j+Q,++L}else F[q++]=a[j],++I[a[j]]}}for(j=Math.max(j,B);j<v;++j)F[q++]=a[j],++I[a[j]];p=C(a,g,w,F,I,S,O,q,G,j-G,p),w||(c.r=7&p|g[p/8|0]<<3,p-=7,c.h=_,c.p=A,c.i=j,c.w=B)}else{for(j=c.w||0;j<v+w;j+=65535){var st=j+65535;st>=v&&(g[p/8|0]=w,st=v),p=k(g,p+1,a.subarray(j,st))}c.i=v}return b(d,0,f+m(p)+u)}(a,null==s.level?6:s.level,null==s.mem?Math.ceil(1.5*Math.max(8,Math.min(13,Math.log(a.length)))):12+s.mem,o,f,u)},O=function(t,n,r){for(;r;++n)t[n]=r,r>>>=8},j=function(){function n(n,r){if("function"==typeof n&&(r=n,n={}),this.ondata=r,this.o=n||{},this.s={l:0,i:32768,w:32768,z:32768},this.b=new t(98304),this.o.dictionary){var e=this.o.dictionary.subarray(-32768);this.b.set(e,32768-e.length),this.s.i=32768-e.length}}return n.prototype.p=function(t,n){this.ondata(L(t,this.o,0,0,this.s),n)},n.prototype.push=function(n,r){this.ondata||E(5),this.s.l&&E(4);var e=n.length+this.s.z;if(e>this.b.length){if(e>2*this.b.length-32768){var i=new t(-32768&e);i.set(this.b.subarray(0,this.s.z)),this.b=i}var a=this.b.length-this.s.z;a&&(this.b.set(n.subarray(0,a),this.s.z),this.s.z=this.b.length,this.p(this.b,!1)),this.b.set(this.b.subarray(-32768)),this.b.set(n.subarray(a),32768),this.s.z=n.length-a+32768,this.s.i=32766,this.s.w=32768}else this.b.set(n,this.s.z),this.s.z+=n.length;this.s.l=1&r,(this.s.z>this.s.w+8191||r)&&(this.p(this.b,r||!1),this.s.w=this.s.i,this.s.i-=2)},n}();function q(t,n){n||(n={});var r=function(){var t=-1;return{p:function(n){for(var r=t,e=0;e<n.length;++e)r=I[255&r^n[e]]^r>>>8;t=r},d:function(){return~t}}}(),e=t.length;r.p(t);var i,a=L(t,n,10+((i=n).filename?i.filename.length+1:0),8),s=a.length;return function(t,n){var r=n.filename;if(t[0]=31,t[1]=139,t[2]=8,t[8]=n.level<2?4:9==n.level?2:0,t[9]=3,0!=n.mtime&&O(t,4,Math.floor(new Date(n.mtime||Date.now())/1e3)),r){t[3]=8;for(var e=0;e<=r.length;++e)t[e+10]=r.charCodeAt(e)}}(a,n),O(a,s-8,r.d()),O(a,s-4,e),a}var B=function(){function t(t,n){this.c=S(),this.v=1,j.call(this,t,n)}return t.prototype.push=function(t,n){this.c.p(t),j.prototype.push.call(this,t,n)},t.prototype.p=function(t,n){var r=L(t,this.o,this.v&&(this.o.dictionary?6:2),n&&4,this.s);this.v&&(function(t,n){var r=n.level,e=0==r?0:r<6?1:9==r?3:2;if(t[0]=120,t[1]=e<<6|(n.dictionary&&32),t[1]|=31-(t[0]<<8|t[1])%31,n.dictionary){var i=S();i.p(n.dictionary),O(t,2,i.d())}}(r,this.o),this.v=0),n&&O(r,r.length-4,this.c.d()),this.ondata(r,n)},t}(),G="undefined"!=typeof TextEncoder&&new TextEncoder,H="undefined"!=typeof TextDecoder&&new TextDecoder;try{H.decode(F,{stream:!0})}catch(t){}var J=function(){function t(t){this.ondata=t}return t.prototype.push=function(t,n){this.ondata||E(5),this.d&&E(4),this.ondata(K(t),this.d=n||!1)},t}();function K(n,r){if(r){for(var e=new t(n.length),i=0;i<n.length;++i)e[i]=n.charCodeAt(i);return e}if(G)return G.encode(n);var a=n.length,s=new t(n.length+(n.length>>1)),o=0,f=function(t){s[o++]=t};for(i=0;i<a;++i){if(o+5>s.length){var h=new t(o+8+(a-i<<1));h.set(s),s=h}var l=n.charCodeAt(i);l<128||r?f(l):l<2048?(f(192|l>>6),f(128|63&l)):l>55295&&l<57344?(f(240|(l=65536+(1047552&l)|1023&n.charCodeAt(++i))>>18),f(128|l>>12&63),f(128|l>>6&63),f(128|63&l)):(f(224|l>>12),f(128|l>>6&63),f(128|63&l))}return b(s,0,o)}const N=new class{constructor(){this._init()}clear(){this._init()}addEvent(t){if(!t)throw new Error("Adding invalid event");const n=this._hasEvents?",":"";this.stream.push(n+t),this._hasEvents=!0}finish(){this.stream.push("]",!0);const t=function(t){let n=0;for(let r=0,e=t.length;r<e;r++)n+=t[r].length;const r=new Uint8Array(n);for(let n=0,e=0,i=t.length;n<i;n++){const i=t[n];r.set(i,e),e+=i.length}return r}(this._deflatedData);return this._init(),t}_init(){this._hasEvents=!1,this._deflatedData=[],this.deflate=new B,this.deflate.ondata=(t,n)=>{this._deflatedData.push(t)},this.stream=new J(((t,n)=>{this.deflate.push(t,n)})),this.stream.push("[")}},P={clear:()=>{N.clear()},addEvent:t=>N.addEvent(t),finish:()=>N.finish(),compress:t=>function(t){return q(K(t))}(t)};addEventListener("message",(function(t){const n=t.data.method,r=t.data.id,e=t.data.arg;if(n in P&&"function"==typeof P[n])try{const t=P[n](e);postMessage({id:r,method:n,success:!0,response:t})}catch(t){postMessage({id:r,method:n,success:!1,response:t.message}),console.error(t)}})),postMessage({id:void 0,method:"init",success:!0,response:void 0});']);
                    return URL.createObjectURL(e)
                  }());
                  if (!t) return;
                  ur("[Replay] Using compression worker" + (e ? ` from ${e}` : ""));
                  const n = new Worker(t);
                  return new gr(n)
                } catch (e) {
                  ur("[Replay] Failed to create compression worker")
                }
              }(n);
              if (e) return e
            }
            return ur("[Replay] Using simple buffer"), new hr
          }({
            useCompression: this._options.useCompression,
            workerUrl: this._options.workerUrl
          }), this._removeListeners(), this._addListeners(), this._isEnabled = !0, this._isPaused = !1, this.startRecording()
        }
        _handleException(e) {
          cr && J.vF.error("[Replay]", e), cr && this._options._experiments && this._options._experiments.captureExceptions && (0, d.Cp)(e)
        }
        _initializeSessionForSampling(e) {
          const t = this._options.errorSampleRate > 0,
            n = Er({
              sessionIdleExpire: this.timeouts.sessionIdleExpire,
              maxReplayDuration: this._options.maxReplayDuration,
              traceInternals: this._options._experiments.traceInternals,
              previousSessionId: e
            }, {
              stickySession: this._options.stickySession,
              sessionSampleRate: this._options.sessionSampleRate,
              allowBuffering: t
            });
          this.session = n
        }
        _checkSession() {
          if (!this.session) return !1;
          const e = this.session;
          return !Tr(e, {
            sessionIdleExpire: this.timeouts.sessionIdleExpire,
            maxReplayDuration: this._options.maxReplayDuration
          }) || (this._refreshSession(e), !1)
        }
        async _refreshSession(e) {
          this._isEnabled && (await this.stop({
            reason: "refresh session"
          }), this.initializeSampling(e.id))
        }
        _addListeners() {
          try {
            Ne.document.addEventListener("visibilitychange", this._handleVisibilityChange), Ne.addEventListener("blur", this._handleWindowBlur), Ne.addEventListener("focus", this._handleWindowFocus), Ne.addEventListener("keydown", this._handleKeyboardEvent), this.clickDetector && this.clickDetector.addListeners(), this._hasInitializedCoreListeners || (function(e) {
              const t = (0, d.o5)(),
                n = (0, d.KU)();
              t.addScopeListener((e => t => {
                if (!e.isEnabled()) return;
                const n = function(e) {
                  const t = e.getLastBreadcrumb && e.getLastBreadcrumb();
                  return Jr !== t && t ? (Jr = t, !t.category || ["fetch", "xhr", "sentry.event", "sentry.transaction"].includes(t.category) || t.category.startsWith("ui.") ? null : "console" === t.category ? function(e) {
                    const t = e.data && e.data.arguments;
                    if (!Array.isArray(t) || 0 === t.length) return er(e);
                    let n = !1;
                    const r = t.map((e => {
                      if (!e) return e;
                      if ("string" == typeof e) return e.length > He ? (n = !0, `${e.slice(0,He)}…`) : e;
                      if ("object" == typeof e) try {
                        const t = (0, W.S8)(e, 7);
                        return JSON.stringify(t).length > He ? (n = !0, `${JSON.stringify(t,null,2).slice(0,He)}…`) : t
                      } catch (e) {}
                      return e
                    }));
                    return er({
                      ...e,
                      data: {
                        ...e.data,
                        arguments: r,
                        ...n ? {
                          _meta: {
                            warnings: ["CONSOLE_ARG_TRUNCATED"]
                          }
                        } : {}
                      }
                    })
                  }(t) : er(t)) : null
                }(t);
                n && Wn(e, n)
              })(e)), (0, ee.i)((e => t => {
                if (!e.isEnabled()) return;
                const n = function(e) {
                  const {
                    target: t,
                    message: n
                  } = function(e) {
                    const t = "click" === e.name;
                    let n, r = null;
                    try {
                      r = t ? Vn(e.event) : Jn(e.event), n = (0, G.Hd)(r, {
                        maxStringLength: 200
                      }) || "<unknown>"
                    } catch (e) {
                      n = "<unknown>"
                    }
                    return {
                      target: r,
                      message: n
                    }
                  }(e);
                  return er({
                    category: `ui.${e.name}`,
                    ...or(t, n)
                  })
                }(t);
                if (!n) return;
                const r = "click" === t.name,
                  o = r ? t.event : void 0;
                !(r && e.clickDetector && o && o.target) || o.altKey || o.metaKey || o.ctrlKey || o.shiftKey || function(e, t, n) {
                  e.handleClick(t, n)
                }(e.clickDetector, n, Vn(t.event)), Wn(e, n)
              })(e)), (0, te._)(function(e) {
                return t => {
                  if (!e.isEnabled()) return;
                  const n = function(e) {
                    const {
                      from: t,
                      to: n
                    } = e, r = Date.now() / 1e3;
                    return {
                      type: "navigation.push",
                      start: r,
                      end: r,
                      name: n,
                      data: {
                        previous: t
                      }
                    }
                  }(t);
                  null !== n && (e.getContext().urls.push(n.name), e.triggerUserActivity(), e.addUpdate((() => (Fr(e, [n]), !1))))
                }
              }(e)), Vr(e);
              const r = function(e) {
                const t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? Ar(e) : void 0;
                return Object.assign(((n, r) => {
                  if (!e.isEnabled()) return n;
                  if (function(e) {
                      return "replay_event" === e.type
                    }(n)) return delete n.breadcrumbs, n;
                  if (!Rr(n) && !Or(n) && !Mr(n)) return n;
                  if (!e.checkAndHandleExpiredSession()) return n;
                  if (Mr(n)) return e.flush(), n.contexts.feedback.replay_id = e.getSessionId(),
                    function(e, t) {
                      e.triggerUserActivity(), e.addUpdate((() => !t.timestamp || (e.throttledAddEvent({
                        type: Yt.Custom,
                        timestamp: 1e3 * t.timestamp,
                        data: {
                          timestamp: t.timestamp,
                          tag: "breadcrumb",
                          payload: {
                            category: "sentry.feedback",
                            data: {
                              feedbackId: t.event_id
                            }
                          }
                        }
                      }), !1)))
                    }(e, n), n;
                  if (function(e, t) {
                      return !(e.type || !e.exception || !e.exception.values || !e.exception.values.length || !t.originalException || !t.originalException.__rrweb__)
                    }(n, r) && !e.getOptions()._experiments.captureExceptions) return cr && J.vF.log("[Replay] Ignoring error from rrweb internals", n), null;
                  const o = function(e, t) {
                    return "buffer" === e.recordingMode && t.message !== je && !(!t.exception || t.type) && yr(e.getOptions().errorSampleRate)
                  }(e, n);
                  return (o || "session" === e.recordingMode) && (n.tags = {
                    ...n.tags,
                    replayId: e.getSessionId()
                  }), t && t(n, {
                    statusCode: 200
                  }), n
                }), {
                  id: "Replay"
                })
              }(e, !Yr(n));
              n && n.addEventProcessor ? n.addEventProcessor(r) : (0, p.S)(r), Yr(n) && (n.on("beforeSendEvent", function(e) {
                return t => {
                  e.isEnabled() && Rr(t) && function(e, t) {
                    const n = t.exception && t.exception.values && t.exception.values[0].value;
                    "string" == typeof n && (n.match(/reactjs\.org\/docs\/error-decoder\.html\?invariant=(418|419|422|423|425)/) || n.match(/(does not match server-rendered HTML|Hydration failed because)/i)) && Wn(e, er({
                      category: "replay.hydrate-error"
                    }))
                  }(e, t)
                }
              }(e)), n.on("afterSendEvent", Ar(e)), n.on("createDsc", (t => {
                const n = e.getSessionId();
                n && e.isEnabled() && "session" === e.recordingMode && e.checkAndHandleExpiredSession() && (t.replay_id = n)
              })), n.on("startTransaction", (t => {
                e.lastTransaction = t
              })), n.on("finishTransaction", (t => {
                e.lastTransaction = t
              })), n.on("beforeSendFeedback", ((t, n) => {
                const r = e.getSessionId();
                n && n.includeReplay && e.isEnabled() && r && (e.flush(), t.contexts && t.contexts.feedback && (t.contexts.feedback.replay_id = r))
              })))
            }(this), this._hasInitializedCoreListeners = !0)
          } catch (e) {
            this._handleException(e)
          }
          this._performanceCleanupCallback = function(e) {
            function t(t) {
              e.performanceEntries.includes(t) || e.performanceEntries.push(t)
            }

            function n(e) {
              let {
                entries: n
              } = e;
              n.forEach(t)
            }
            const r = [];
            return ["navigation", "paint", "resource"].forEach((e => {
              r.push(Ce(e, n))
            })), r.push(xe((t => {
              let {
                metric: n
              } = t;
              e.replayPerformanceEntries.push(function(e) {
                const t = e.entries,
                  n = t[t.length - 1],
                  r = n ? n.element : void 0,
                  o = e.value,
                  s = ar(o);
                return {
                  type: "largest-contentful-paint",
                  name: "largest-contentful-paint",
                  start: s,
                  end: s,
                  data: {
                    value: o,
                    size: o,
                    nodeId: r ? Un.mirror.getId(r) : void 0
                  }
                }
              }(n))
            }))), () => {
              r.forEach((e => e()))
            }
          }(this)
        }
        _removeListeners() {
          try {
            Ne.document.removeEventListener("visibilitychange", this._handleVisibilityChange), Ne.removeEventListener("blur", this._handleWindowBlur), Ne.removeEventListener("focus", this._handleWindowFocus), Ne.removeEventListener("keydown", this._handleKeyboardEvent), this.clickDetector && this.clickDetector.removeListeners(), this._performanceCleanupCallback && this._performanceCleanupCallback()
          } catch (e) {
            this._handleException(e)
          }
        }
        __init() {
          this._handleVisibilityChange = () => {
            "visible" === Ne.document.visibilityState ? this._doChangeToForegroundTasks() : this._doChangeToBackgroundTasks()
          }
        }
        __init2() {
          this._handleWindowBlur = () => {
            const e = er({
              category: "ui.blur"
            });
            this._doChangeToBackgroundTasks(e)
          }
        }
        __init3() {
          this._handleWindowFocus = () => {
            const e = er({
              category: "ui.focus"
            });
            this._doChangeToForegroundTasks(e)
          }
        }
        __init4() {
          this._handleKeyboardEvent = e => {
            ! function(e, t) {
              if (!e.isEnabled()) return;
              e.updateUserActivity();
              const n = function(e) {
                const {
                  metaKey: t,
                  shiftKey: n,
                  ctrlKey: r,
                  altKey: o,
                  key: s,
                  target: i
                } = e;
                if (!i || function(e) {
                    return "INPUT" === e.tagName || "TEXTAREA" === e.tagName || e.isContentEditable
                  }(i) || !s) return null;
                const a = t || r || o,
                  c = 1 === s.length;
                if (!a && c) return null;
                const u = (0, G.Hd)(i, {
                  maxStringLength: 200
                }) || "<unknown>";
                return er({
                  category: "ui.keyDown",
                  message: u,
                  data: {
                    ...or(i, u).data,
                    metaKey: t,
                    shiftKey: n,
                    ctrlKey: r,
                    altKey: o,
                    key: s
                  }
                })
              }(t);
              n && Wn(e, n)
            }(this, e)
          }
        }
        _doChangeToBackgroundTasks(e) {
          this.session && (kr(this.session, {
            maxReplayDuration: this._options.maxReplayDuration,
            sessionIdleExpire: this.timeouts.sessionIdleExpire
          }) || (e && this._createCustomBreadcrumb(e), this.conditionalFlush()))
        }
        _doChangeToForegroundTasks(e) {
          this.session && (this.checkAndHandleExpiredSession() ? e && this._createCustomBreadcrumb(e) : ur("[Replay] Document has become active, but session has expired"))
        }
        _updateUserActivity() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now();
          this._lastActivity = e
        }
        _updateSessionActivity() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now();
          this.session && (this.session.lastActivity = e, this._maybeSaveSession())
        }
        _createCustomBreadcrumb(e) {
          this.addUpdate((() => {
            this.throttledAddEvent({
              type: Yt.Custom,
              timestamp: e.timestamp || 0,
              data: {
                tag: "breadcrumb",
                payload: e
              }
            })
          }))
        }
        _addPerformanceEntries() {
          const e = (t = this.performanceEntries, t.map(ir).filter(Boolean)).concat(this.replayPerformanceEntries);
          var t;
          return this.performanceEntries = [], this.replayPerformanceEntries = [], Promise.all(Fr(this, e))
        }
        _clearContext() {
          this._context.errorIds.clear(), this._context.traceIds.clear(), this._context.urls = []
        }
        _updateInitialTimestampFromEventBuffer() {
          const {
            session: e,
            eventBuffer: t
          } = this;
          if (!e || !t) return;
          if (e.segmentId) return;
          const n = t.getEarliestTimestamp();
          n && n < this._context.initialTimestamp && (this._context.initialTimestamp = n)
        }
        _popEventContext() {
          const e = {
            initialTimestamp: this._context.initialTimestamp,
            initialUrl: this._context.initialUrl,
            errorIds: Array.from(this._context.errorIds),
            traceIds: Array.from(this._context.traceIds),
            urls: this._context.urls
          };
          return this._clearContext(), e
        }
        async _runFlush() {
          const e = this.getSessionId();
          if (this.session && this.eventBuffer && e) {
            if (await this._addPerformanceEntries(), this.eventBuffer && this.eventBuffer.hasEvents && (await async function(e) {
                try {
                  return Promise.all(Fr(e, [Xr(Ne.performance.memory)]))
                } catch (e) {
                  return []
                }
              }(this), this.eventBuffer && e === this.getSessionId())) try {
              this._updateInitialTimestampFromEventBuffer();
              const t = Date.now();
              if (t - this._context.initialTimestamp > this._options.maxReplayDuration + 3e4) throw new Error("Session is too long, not sending replay");
              const n = this._popEventContext(),
                r = this.session.segmentId++;
              this._maybeSaveSession();
              const o = await this.eventBuffer.finish();
              await to({
                replayId: e,
                recordingData: o,
                segmentId: r,
                eventContext: n,
                session: this.session,
                options: this.getOptions(),
                timestamp: t
              })
            } catch (e) {
              this._handleException(e), this.stop({
                reason: "sendReplay"
              });
              const t = (0, d.KU)();
              t && t.recordDroppedEvent("send_error", "replay")
            }
          } else cr && J.vF.error("[Replay] No session or eventBuffer found to flush.")
        }
        __init5() {
          var e = this;
          this._flush = async function() {
            let {
              force: t = !1
            } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            if (!e._isEnabled && !t) return;
            if (!e.checkAndHandleExpiredSession()) return void(cr && J.vF.error("[Replay] Attempting to finish replay event after session expired."));
            if (!e.session) return;
            const n = e.session.started,
              r = Date.now() - n;
            e._debouncedFlush.cancel();
            const o = r < e._options.minReplayDuration,
              s = r > e._options.maxReplayDuration + 5e3;
            if (o || s) return ur(`[Replay] Session duration (${Math.floor(r/1e3)}s) is too ${o?"short":"long"}, not sending replay.`, e._options._experiments.traceInternals), void(o && e._debouncedFlush());
            const i = e.eventBuffer;
            if (i && 0 === e.session.segmentId && !i.hasCheckout && ur("[Replay] Flushing initial segment without checkout.", e._options._experiments.traceInternals), !e._flushLock) return e._flushLock = e._runFlush(), await e._flushLock, void(e._flushLock = void 0);
            try {
              await e._flushLock
            } catch (e) {
              cr && J.vF.error(e)
            } finally {
              e._debouncedFlush()
            }
          }
        }
        _maybeSaveSession() {
          this.session && this._options.stickySession && br(this.session)
        }
        __init6() {
          this._onMutationHandler = e => {
            const t = e.length,
              n = this._options.mutationLimit,
              r = n && t > n;
            if (t > this._options.mutationBreadcrumbLimit || r) {
              const e = er({
                category: "replay.mutations",
                data: {
                  count: t,
                  limit: r
                }
              });
              this._createCustomBreadcrumb(e)
            }
            return !r || (this.stop({
              reason: "mutationLimit",
              forceFlush: "session" === this.recordingMode
            }), !1)
          }
        }
      }

      function oo(e, t, n, r) {
        const o = [...e, ..."string" == typeof r ? r.split(",") : [], ...t];
        return void 0 !== n && ("string" == typeof n && o.push(`.${n}`), (0, J.pq)((() => {
          console.warn("[Replay] You are using a deprecated configuration item for privacy. Read the documentation on how to use the new privacy configuration.")
        }))), o.join(",")
      }
      const so = 'img,image,svg,video,object,picture,embed,map,audio,link[rel="icon"],link[rel="apple-touch-icon"]',
        io = ["content-length", "content-type", "accept"];
      let ao = !1;
      const co = e => new uo(e);
      class uo {
        static __initStatic() {
          this.id = "Replay"
        }
        constructor() {
          let {
            flushMinDelay: e = $e,
            flushMaxDelay: t = Be,
            minReplayDuration: n = ze,
            maxReplayDuration: r = We,
            stickySession: o = !0,
            useCompression: s = !0,
            workerUrl: i,
            _experiments: a = {},
            sessionSampleRate: c,
            errorSampleRate: u,
            maskAllText: l = !0,
            maskAllInputs: d = !0,
            blockAllMedia: p = !0,
            mutationBreadcrumbLimit: h = 750,
            mutationLimit: f = 1e4,
            slowClickTimeout: m = 7e3,
            slowClickIgnoreSelectors: g = [],
            networkDetailAllowUrls: v = [],
            networkDetailDenyUrls: y = [],
            networkCaptureBodies: _ = !0,
            networkRequestHeaders: b = [],
            networkResponseHeaders: S = [],
            mask: w = [],
            maskAttributes: k = ["title", "placeholder"],
            unmask: T = [],
            block: E = [],
            unblock: x = [],
            ignore: C = [],
            maskFn: I,
            beforeAddRecordingEvent: R,
            beforeErrorSampling: O,
            blockClass: M,
            blockSelector: A,
            maskInputOptions: F,
            maskTextClass: D,
            maskTextSelector: N,
            ignoreClass: L
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          this.name = uo.id;
          const P = function(e) {
            let {
              mask: t,
              unmask: n,
              block: r,
              unblock: o,
              ignore: s,
              blockClass: i,
              blockSelector: a,
              maskTextClass: c,
              maskTextSelector: u,
              ignoreClass: l
            } = e;
            const d = {
              maskTextSelector: oo(t, [".sentry-mask", "[data-sentry-mask]"], c, u),
              unmaskTextSelector: oo(n, [".sentry-unmask", "[data-sentry-unmask]"]),
              blockSelector: oo(r, [".sentry-block", "[data-sentry-block]", 'base[href="/"]'], i, a),
              unblockSelector: oo(o, [".sentry-unblock", "[data-sentry-unblock]"]),
              ignoreSelector: oo(s, [".sentry-ignore", "[data-sentry-ignore]", 'input[type="file"]'], l)
            };
            return i instanceof RegExp && (d.blockClass = i), c instanceof RegExp && (d.maskTextClass = c), d
          }({
            mask: w,
            unmask: T,
            block: E,
            unblock: x,
            ignore: C,
            blockClass: M,
            blockSelector: A,
            maskTextClass: D,
            maskTextSelector: N,
            ignoreClass: L
          });
          if (this._recordingOptions = {
              maskAllInputs: d,
              maskAllText: l,
              maskInputOptions: {
                ...F || {},
                password: !0
              },
              maskTextFn: I,
              maskInputFn: I,
              maskAttributeFn: (e, t, n) => function(e) {
                let {
                  el: t,
                  key: n,
                  maskAttributes: r,
                  maskAllText: o,
                  privacyOptions: s,
                  value: i
                } = e;
                return o ? s.unmaskTextSelector && t.matches(s.unmaskTextSelector) ? i : r.includes(n) || "value" === n && "INPUT" === t.tagName && ["submit", "button"].includes(t.getAttribute("type") || "") ? i.replace(/[\S]/g, "*") : i : i
              }({
                maskAttributes: k,
                maskAllText: l,
                privacyOptions: P,
                key: e,
                value: t,
                el: n
              }),
              ...P,
              slimDOMOptions: "all",
              inlineStylesheet: !0,
              inlineImages: !1,
              collectFonts: !0,
              errorHandler: e => {
                try {
                  e.__rrweb__ = !0
                } catch (e) {}
              }
            }, this._initialOptions = {
              flushMinDelay: e,
              flushMaxDelay: t,
              minReplayDuration: Math.min(n, 15e3),
              maxReplayDuration: Math.min(r, We),
              stickySession: o,
              sessionSampleRate: c,
              errorSampleRate: u,
              useCompression: s,
              workerUrl: i,
              blockAllMedia: p,
              maskAllInputs: d,
              maskAllText: l,
              mutationBreadcrumbLimit: h,
              mutationLimit: f,
              slowClickTimeout: m,
              slowClickIgnoreSelectors: g,
              networkDetailAllowUrls: v,
              networkDetailDenyUrls: y,
              networkCaptureBodies: _,
              networkRequestHeaders: lo(b),
              networkResponseHeaders: lo(S),
              beforeAddRecordingEvent: R,
              beforeErrorSampling: O,
              _experiments: a
            }, "number" == typeof c && (console.warn(`[Replay] You are passing \`sessionSampleRate\` to the Replay integration.\nThis option is deprecated and will be removed soon.\nInstead, configure \`replaysSessionSampleRate\` directly in the SDK init options, e.g.:\nSentry.init({ replaysSessionSampleRate: ${c} })`), this._initialOptions.sessionSampleRate = c), "number" == typeof u && (console.warn(`[Replay] You are passing \`errorSampleRate\` to the Replay integration.\nThis option is deprecated and will be removed soon.\nInstead, configure \`replaysOnErrorSampleRate\` directly in the SDK init options, e.g.:\nSentry.init({ replaysOnErrorSampleRate: ${u} })`), this._initialOptions.errorSampleRate = u), this._initialOptions.blockAllMedia && (this._recordingOptions.blockSelector = this._recordingOptions.blockSelector ? `${this._recordingOptions.blockSelector},${so}` : so), this._isInitialized && se()) throw new Error("Multiple Sentry Session Replay instances are not supported");
          this._isInitialized = !0
        }
        get _isInitialized() {
          return ao
        }
        set _isInitialized(e) {
          ao = e
        }
        setupOnce() {
          se() && (this._setup(), setTimeout((() => this._initialize())))
        }
        start() {
          this._replay && this._replay.start()
        }
        startBuffering() {
          this._replay && this._replay.startBuffering()
        }
        stop() {
          return this._replay ? this._replay.stop({
            forceFlush: "session" === this._replay.recordingMode
          }) : Promise.resolve()
        }
        flush(e) {
          return this._replay && this._replay.isEnabled() ? this._replay.sendBufferedReplayOrFlush(e) : Promise.resolve()
        }
        getReplayId() {
          if (this._replay && this._replay.isEnabled()) return this._replay.getSessionId()
        }
        _initialize() {
          this._replay && (this._maybeLoadFromReplayCanvasIntegration(), this._replay.initializeSampling())
        }
        _setup() {
          const e = function(e) {
            const t = (0, d.KU)(),
              n = t && t.getOptions(),
              r = {
                sessionSampleRate: 0,
                errorSampleRate: 0,
                ...(0, K.Ce)(e)
              };
            return n ? (null == e.sessionSampleRate && null == e.errorSampleRate && null == n.replaysSessionSampleRate && null == n.replaysOnErrorSampleRate && (0, J.pq)((() => {
              console.warn("Replay is disabled because neither `replaysSessionSampleRate` nor `replaysOnErrorSampleRate` are set.")
            })), "number" == typeof n.replaysSessionSampleRate && (r.sessionSampleRate = n.replaysSessionSampleRate), "number" == typeof n.replaysOnErrorSampleRate && (r.errorSampleRate = n.replaysOnErrorSampleRate), r) : ((0, J.pq)((() => {
              console.warn("SDK client is not available.")
            })), r)
          }(this._initialOptions);
          this._replay = new ro({
            options: e,
            recordingOptions: this._recordingOptions
          })
        }
        _maybeLoadFromReplayCanvasIntegration() {
          try {
            const e = (0, d.KU)().getIntegrationByName("ReplayCanvas");
            if (!e) return;
            this._replay._canvas = e.getOptions()
          } catch (e) {}
        }
      }

      function lo(e) {
        return [...io, ...e.map((e => e.toLowerCase()))]
      }
      var po;

      function ho(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1 / 0,
          r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        return e ? e.nodeType !== e.ELEMENT_NODE || r > n ? -1 : t(e) ? r : ho(e.parentNode, t, n, r + 1) : -1
      }

      function fo(e, t) {
        return n => {
          const r = n;
          if (null === r) return !1;
          try {
            if (e)
              if ("string" == typeof e) {
                if (r.matches(`.${e}`)) return !0
              } else if (function(e, t) {
                for (let n = e.classList.length; n--;) {
                  const r = e.classList[n];
                  if (t.test(r)) return !0
                }
                return !1
              }(r, e)) return !0;
            return !(!t || !r.matches(t))
          } catch (e) {
            return !1
          }
        }
      }
      uo.__initStatic(),
        function(e) {
          e[e.Document = 0] = "Document", e[e.DocumentType = 1] = "DocumentType", e[e.Element = 2] = "Element", e[e.Text = 3] = "Text", e[e.CDATA = 4] = "CDATA", e[e.Comment = 5] = "Comment"
        }(po || (po = {}));
      const mo = "Please stop import mirror directly. Instead of that,\r\nnow you can use replayer.getMirror() to access the mirror instance of a replayer,\r\nor you can use record.mirror to access the mirror instance during recording.";
      let go, vo = {
        map: {},
        getId: () => (console.error(mo), -1),
        getNode: () => (console.error(mo), null),
        removeNodeFromMap() {
          console.error(mo)
        },
        has: () => (console.error(mo), !1),
        reset() {
          console.error(mo)
        }
      };

      function yo(e, t, n, r) {
        let o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : window;
        const s = o.Object.getOwnPropertyDescriptor(e, t);
        return o.Object.defineProperty(e, t, r ? n : {
          set(e) {
            setTimeout((() => {
              n.set.call(this, e)
            }), 0), s && s.set && s.set.call(this, e)
          }
        }), () => yo(e, t, s || {}, !0)
      }

      function _o(e, t, n) {
        try {
          if (!(t in e)) return () => {};
          const r = e[t],
            o = n(r);
          return "function" == typeof o && (o.prototype = o.prototype || {}, Object.defineProperties(o, {
            __rrweb_original__: {
              enumerable: !1,
              value: r
            }
          })), e[t] = o, () => {
            e[t] = r
          }
        } catch (e) {
          return () => {}
        }
      }

      function bo(e, t, n, r, o) {
        if (!e) return !1;
        const s = e.nodeType === e.ELEMENT_NODE ? e : e.parentElement;
        if (!s) return !1;
        const i = fo(t, n);
        if (!o) {
          const e = r && s.matches(r);
          return i(s) && !e
        }
        const a = ho(s, i);
        let c = -1;
        return !(a < 0) && (r && (c = ho(s, fo(null, r))), a > -1 && c < 0 || a < c)
      }

      function So() {
        return function() {
          if (go) return go;
          const e = window.document;
          let t = window.requestAnimationFrame;
          if (e && "function" == typeof e.createElement) try {
            const n = e.createElement("iframe");
            n.hidden = !0, e.head.appendChild(n);
            const r = n.contentWindow;
            r && r.requestAnimationFrame && (t = r.requestAnimationFrame), e.head.removeChild(n)
          } catch (e) {}
          return go = t.bind(window)
        }()(...arguments)
      }
      "undefined" != typeof window && window.Proxy && window.Reflect && (vo = new Proxy(vo, {
        get: (e, t, n) => ("map" === t && console.error(mo), Reflect.get(e, t, n))
      })), /[1-9][0-9]{12}/.test(Date.now().toString());
      for (var wo = (e => (e[e["2D"] = 0] = "2D", e[e.WebGL = 1] = "WebGL", e[e.WebGL2 = 2] = "WebGL2", e))(wo || {}), ko = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", To = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256), Eo = 0; Eo < 64; Eo++) To[ko.charCodeAt(Eo)] = Eo;
      const xo = new Map,
        Co = (e, t, n) => {
          if (!e || !Oo(e, t) && "object" != typeof e) return;
          const r = function(e, t) {
            let n = xo.get(e);
            return n || (n = new Map, xo.set(e, n)), n.has(t) || n.set(t, []), n.get(t)
          }(n, e.constructor.name);
          let o = r.indexOf(e);
          return -1 === o && (o = r.length, r.push(e)), o
        };

      function Io(e, t, n) {
        if (e instanceof Array) return e.map((e => Io(e, t, n)));
        if (null === e) return e;
        if (e instanceof Float32Array || e instanceof Float64Array || e instanceof Int32Array || e instanceof Uint32Array || e instanceof Uint8Array || e instanceof Uint16Array || e instanceof Int16Array || e instanceof Int8Array || e instanceof Uint8ClampedArray) return {
          rr_type: e.constructor.name,
          args: [Object.values(e)]
        };
        if (e instanceof ArrayBuffer) {
          const t = e.constructor.name,
            n = function(e) {
              var t, n = new Uint8Array(e),
                r = n.length,
                o = "";
              for (t = 0; t < r; t += 3) o += ko[n[t] >> 2], o += ko[(3 & n[t]) << 4 | n[t + 1] >> 4], o += ko[(15 & n[t + 1]) << 2 | n[t + 2] >> 6], o += ko[63 & n[t + 2]];
              return r % 3 == 2 ? o = o.substring(0, o.length - 1) + "=" : r % 3 == 1 && (o = o.substring(0, o.length - 2) + "=="), o
            }(e);
          return {
            rr_type: t,
            base64: n
          }
        }
        if (e instanceof DataView) return {
          rr_type: e.constructor.name,
          args: [Io(e.buffer, t, n), e.byteOffset, e.byteLength]
        };
        if (e instanceof HTMLImageElement) {
          const t = e.constructor.name,
            {
              src: n
            } = e;
          return {
            rr_type: t,
            src: n
          }
        }
        return e instanceof HTMLCanvasElement ? {
          rr_type: "HTMLImageElement",
          src: e.toDataURL()
        } : e instanceof ImageData ? {
          rr_type: e.constructor.name,
          args: [Io(e.data, t, n), e.width, e.height]
        } : Oo(e, t) || "object" == typeof e ? {
          rr_type: e.constructor.name,
          index: Co(e, t, n)
        } : e
      }
      const Ro = (e, t, n) => e.map((e => Io(e, t, n))),
        Oo = (e, t) => {
          const n = ["WebGLActiveInfo", "WebGLBuffer", "WebGLFramebuffer", "WebGLProgram", "WebGLRenderbuffer", "WebGLShader", "WebGLShaderPrecisionFormat", "WebGLTexture", "WebGLUniformLocation", "WebGLVertexArrayObject", "WebGLVertexArrayObjectOES"].filter((e => "function" == typeof t[e]));
          return Boolean(n.find((n => e instanceof t[n])))
        };

      function Mo(e, t, n, r, o) {
        const s = [];
        try {
          const i = _o(e.HTMLCanvasElement.prototype, "getContext", (function(e) {
            return function(s) {
              for (var i = arguments.length, a = new Array(i > 1 ? i - 1 : 0), c = 1; c < i; c++) a[c - 1] = arguments[c];
              if (!bo(this, t, n, r, !0)) {
                const e = function(e) {
                  return "experimental-webgl" === e ? "webgl" : e
                }(s);
                if ("__context" in this || (this.__context = e), o && ["webgl", "webgl2"].includes(e))
                  if (a[0] && "object" == typeof a[0]) {
                    const e = a[0];
                    e.preserveDrawingBuffer || (e.preserveDrawingBuffer = !0)
                  } else a.splice(0, 1, {
                    preserveDrawingBuffer: !0
                  })
              }
              return e.apply(this, [s, ...a])
            }
          }));
          s.push(i)
        } catch (e) {
          console.error("failed to patch HTMLCanvasElement.prototype.getContext")
        }
        return () => {
          s.forEach((e => e()))
        }
      }

      function Ao(e, t, n, r, o, s, i, a) {
        const c = [],
          u = Object.getOwnPropertyNames(e);
        for (const i of u)
          if (!["isContextLost", "canvas", "drawingBufferWidth", "drawingBufferHeight"].includes(i)) try {
            if ("function" != typeof e[i]) continue;
            const u = _o(e, i, (function(e) {
              return function() {
                for (var c = arguments.length, u = new Array(c), l = 0; l < c; l++) u[l] = arguments[l];
                const d = e.apply(this, u);
                if (Co(d, a, this), "tagName" in this.canvas && !bo(this.canvas, r, o, s, !0)) {
                  const e = Ro(u, a, this),
                    r = {
                      type: t,
                      property: i,
                      args: e
                    };
                  n(this.canvas, r)
                }
                return d
              }
            }));
            c.push(u)
          } catch (r) {
            const o = yo(e, i, {
              set(e) {
                n(this.canvas, {
                  type: t,
                  property: i,
                  args: [e],
                  setter: !0
                })
              }
            });
            c.push(o)
          }
        return c
      }
      class Fo {
        reset() {
          this.pendingCanvasMutations.clear(), this.resetObservers && this.resetObservers()
        }
        freeze() {
          this.frozen = !0
        }
        unfreeze() {
          this.frozen = !1
        }
        lock() {
          this.locked = !0
        }
        unlock() {
          this.locked = !1
        }
        constructor(e) {
          this.pendingCanvasMutations = new Map, this.rafStamps = {
            latestId: 0,
            invokeId: null
          }, this.frozen = !1, this.locked = !1, this.processMutation = (e, t) => {
            !(this.rafStamps.invokeId && this.rafStamps.latestId !== this.rafStamps.invokeId) && this.rafStamps.invokeId || (this.rafStamps.invokeId = this.rafStamps.latestId), this.pendingCanvasMutations.has(e) || this.pendingCanvasMutations.set(e, []), this.pendingCanvasMutations.get(e).push(t)
          };
          const {
            sampling: t = "all",
            win: n,
            blockClass: r,
            blockSelector: o,
            unblockSelector: s,
            recordCanvas: i,
            dataURLOptions: a
          } = e;
          this.mutationCb = e.mutationCb, this.mirror = e.mirror, this.options = e, e.enableManualSnapshot || (() => {
            i && "all" === t && this.initCanvasMutationObserver(n, r, o, s), i && "number" == typeof t && this.initCanvasFPSObserver(t, n, r, o, s, {
              dataURLOptions: a
            })
          })()
        }
        initCanvasFPSObserver(e, t, n, r, o, s) {
          const i = Mo(t, n, r, o, !0),
            a = this.takeSnapshot(!1, e, t, n, r, o, s.dataURLOptions);
          this.resetObservers = () => {
            i(), cancelAnimationFrame(a)
          }
        }
        initCanvasMutationObserver(e, t, n, r) {
          this.startRAFTimestamping(), this.startPendingCanvasMutationFlusher();
          const o = Mo(e, t, n, r, !1),
            s = function(e, t, n, r, o) {
              const s = [],
                i = Object.getOwnPropertyNames(t.CanvasRenderingContext2D.prototype);
              for (const a of i) try {
                if ("function" != typeof t.CanvasRenderingContext2D.prototype[a]) continue;
                const i = _o(t.CanvasRenderingContext2D.prototype, a, (function(s) {
                  return function() {
                    for (var i = arguments.length, c = new Array(i), u = 0; u < i; u++) c[u] = arguments[u];
                    return bo(this.canvas, n, r, o, !0) || setTimeout((() => {
                      const n = Ro(c, t, this);
                      e(this.canvas, {
                        type: wo["2D"],
                        property: a,
                        args: n
                      })
                    }), 0), s.apply(this, c)
                  }
                }));
                s.push(i)
              } catch (n) {
                const r = yo(t.CanvasRenderingContext2D.prototype, a, {
                  set(t) {
                    e(this.canvas, {
                      type: wo["2D"],
                      property: a,
                      args: [t],
                      setter: !0
                    })
                  }
                });
                s.push(r)
              }
              return () => {
                s.forEach((e => e()))
              }
            }(this.processMutation.bind(this), e, t, n, r),
            i = function(e, t, n, r, o, s) {
              const i = [];
              return i.push(...Ao(t.WebGLRenderingContext.prototype, wo.WebGL, e, n, r, o, 0, t)), void 0 !== t.WebGL2RenderingContext && i.push(...Ao(t.WebGL2RenderingContext.prototype, wo.WebGL2, e, n, r, o, 0, t)), () => {
                i.forEach((e => e()))
              }
            }(this.processMutation.bind(this), e, t, n, r, this.mirror);
          this.resetObservers = () => {
            o(), s(), i()
          }
        }
        snapshot(e) {
          const {
            options: t
          } = this, n = this.takeSnapshot(!0, "all" === t.sampling ? 2 : t.sampling || 2, t.win, t.blockClass, t.blockSelector, t.unblockSelector, t.dataURLOptions, e);
          this.resetObservers = () => {
            cancelAnimationFrame(n)
          }
        }
        takeSnapshot(e, t, n, r, o, s, i, a) {
          const c = new Map,
            u = new Worker(function() {
              const e = new Blob(['for(var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",e="undefined"==typeof Uint8Array?[]:new Uint8Array(256),n=0;n<64;n++)e[t.charCodeAt(n)]=n;var a=function(e){var n,a=new Uint8Array(e),s=a.length,r="";for(n=0;n<s;n+=3)r+=t[a[n]>>2],r+=t[(3&a[n])<<4|a[n+1]>>4],r+=t[(15&a[n+1])<<2|a[n+2]>>6],r+=t[63&a[n+2]];return s%3==2?r=r.substring(0,r.length-1)+"=":s%3==1&&(r=r.substring(0,r.length-2)+"=="),r};const s=new Map,r=new Map;const i=self;i.onmessage=async function(t){if(!("OffscreenCanvas"in globalThis))return i.postMessage({id:t.data.id});{const{id:e,bitmap:n,width:o,height:f,dataURLOptions:c}=t.data,g=async function(t,e,n){const s=t+"-"+e;if("OffscreenCanvas"in globalThis){if(r.has(s))return r.get(s);const i=new OffscreenCanvas(t,e);i.getContext("2d");const o=await i.convertToBlob(n),f=await o.arrayBuffer(),c=a(f);return r.set(s,c),c}return""}(o,f,c),d=new OffscreenCanvas(o,f);d.getContext("2d").drawImage(n,0,0),n.close();const u=await d.convertToBlob(c),h=u.type,w=await u.arrayBuffer(),l=a(w);if(!s.has(e)&&await g===l)return s.set(e,l),i.postMessage({id:e});if(s.get(e)===l)return i.postMessage({id:e});i.postMessage({id:e,type:h,base64:l,width:o,height:f}),s.set(e,l)}};']);
              return URL.createObjectURL(e)
            }());
          u.onmessage = e => {
            const t = e.data,
              {
                id: n
              } = t;
            if (c.set(n, !1), !("base64" in t)) return;
            const {
              base64: r,
              type: o,
              width: s,
              height: i
            } = t;
            this.mutationCb({
              id: n,
              type: wo["2D"],
              commands: [{
                property: "clearRect",
                args: [0, 0, s, i]
              }, {
                property: "drawImage",
                args: [{
                  rr_type: "ImageBitmap",
                  args: [{
                    rr_type: "Blob",
                    data: [{
                      rr_type: "ArrayBuffer",
                      base64: r
                    }],
                    type: o
                  }]
                }, 0, 0]
              }]
            })
          };
          const l = 1e3 / t;
          let d, p = 0;
          const h = t => {
            p && t - p < l || (p = t, (e => {
              if (e) return [e];
              const t = [];
              return n.document.querySelectorAll("canvas").forEach((e => {
                bo(e, r, o, s, !0) || t.push(e)
              })), t
            })(a).forEach((t => {
              const n = this.mirror.getId(t);
              if (!c.get(n)) {
                if (c.set(n, !0), !e && ["webgl", "webgl2"].includes(t.__context)) {
                  const e = t.getContext(t.__context);
                  !1 === $([e, "optionalAccess", e => e.getContextAttributes, "call", e => e(), "optionalAccess", e => e.preserveDrawingBuffer]) && e.clear(e.COLOR_BUFFER_BIT)
                }
                createImageBitmap(t).then((e => {
                  u.postMessage({
                    id: n,
                    bitmap: e,
                    width: t.width,
                    height: t.height,
                    dataURLOptions: i
                  }, [e])
                })).catch((e => {
                  (() => {
                    throw e
                  })()
                }))
              }
            }))), d = So(h)
          };
          return d = So(h), d
        }
        startPendingCanvasMutationFlusher() {
          So((() => this.flushPendingCanvasMutations()))
        }
        startRAFTimestamping() {
          const e = t => {
            this.rafStamps.latestId = t, So(e)
          };
          So(e)
        }
        flushPendingCanvasMutations() {
          this.pendingCanvasMutations.forEach(((e, t) => {
            const n = this.mirror.getId(t);
            this.flushPendingCanvasMutationFor(t, n)
          })), So((() => this.flushPendingCanvasMutations()))
        }
        flushPendingCanvasMutationFor(e, t) {
          if (this.frozen || this.locked) return;
          const n = this.pendingCanvasMutations.get(e);
          if (!n || -1 === t) return;
          const r = n.map((e => {
              const {
                type: t,
                ...n
              } = e;
              return n
            })),
            {
              type: o
            } = n[0];
          this.mutationCb({
            id: t,
            type: o,
            commands: r
          }), this.pendingCanvasMutations.delete(e)
        }
      }
      const Do = {
          low: {
            sampling: {
              canvas: 1
            },
            dataURLOptions: {
              type: "image/webp",
              quality: .25
            }
          },
          medium: {
            sampling: {
              canvas: 2
            },
            dataURLOptions: {
              type: "image/webp",
              quality: .4
            }
          },
          high: {
            sampling: {
              canvas: 4
            },
            dataURLOptions: {
              type: "image/webp",
              quality: .5
            }
          }
        },
        No = "ReplayCanvas",
        Lo = (0, f._C)((function() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          const t = {
            quality: e.quality || "medium",
            enableManualSnapshot: e.enableManualSnapshot
          };
          let n;
          const r = new Promise((e => n = e));
          return {
            name: No,
            setupOnce() {},
            getOptions() {
              const {
                quality: e,
                enableManualSnapshot: r
              } = t;
              return {
                enableManualSnapshot: r,
                recordCanvas: !0,
                getCanvasManager: e => {
                  const t = new Fo({
                    ...e,
                    enableManualSnapshot: r
                  });
                  return n(t), t
                },
                ...Do[e || "medium"] || Do.medium
              }
            },
            async snapshot(e) {
              (await r).snapshot(e)
            }
          }
        })),
        Po = (0, f.F)(No, Lo);
      var jo = n(73051);
      const $o = z.OW,
        Bo = "#ffffff",
        Uo = "inherit",
        Ho = "rgba(108, 95, 199, 1)",
        qo = {
          fontFamily: "'Helvetica Neue', Arial, sans-serif",
          fontSize: "14px",
          background: Bo,
          backgroundHover: "#f6f6f7",
          foreground: "#2b2233",
          border: "1.5px solid rgba(41, 35, 47, 0.13)",
          borderRadius: "12px",
          boxShadow: "0px 4px 24px 0px rgba(43, 34, 51, 0.12)",
          success: "#268d75",
          error: "#df3338",
          submitBackground: "rgba(88, 74, 192, 1)",
          submitBackgroundHover: Ho,
          submitBorder: Ho,
          submitOutlineFocus: "#29232f",
          submitForeground: Bo,
          submitForegroundHover: Bo,
          cancelBackground: "transparent",
          cancelBackgroundHover: "var(--background-hover)",
          cancelBorder: "var(--border)",
          cancelOutlineFocus: "var(--input-outline-focus)",
          cancelForeground: "var(--foreground)",
          cancelForegroundHover: "var(--foreground)",
          inputBackground: Uo,
          inputForeground: Uo,
          inputBorder: "var(--border)",
          inputOutlineFocus: Ho,
          formBorderRadius: "20px",
          formContentBorderRadius: "6px"
        },
        zo = qo,
        Wo = {
          ...qo,
          background: "#29232f",
          backgroundHover: "#352f3b",
          foreground: "#ebe6ef",
          border: "1.5px solid rgba(235, 230, 239, 0.15)",
          success: "#2da98c",
          error: "#f55459"
        },
        Ko = "Report a Bug",
        Go = "Cancel",
        Vo = "Send Bug Report",
        Jo = "Report a Bug",
        Yo = "your.email@example.org",
        Xo = "Email",
        Qo = "What's the bug? What did you expect?",
        Zo = "Description",
        es = "Your Name",
        ts = "Name",
        ns = "Thank you for your report!",
        rs = "widget",
        os = "api";

      function ss(e) {
        let {
          name: t,
          email: n,
          message: r,
          source: o = os,
          url: s = (0, G.$N)()
        } = e, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!r) throw new Error("Unable to submit feedback with empty message");
        return async function(e) {
          let {
            feedback: {
              message: t,
              email: n,
              name: r,
              source: o,
              url: s
            }
          } = e, {
            includeReplay: a = !0
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          const c = (0, d.KU)(),
            u = c && c.getTransport(),
            l = c && c.getDsn();
          if (!c || !u || !l) return;
          const p = {
            contexts: {
              feedback: {
                contact_email: n,
                name: r,
                message: t,
                url: s,
                source: o
              }
            },
            type: "feedback"
          };
          return (0, d.v4)((async e => {
            e.clearBreadcrumbs(), [os, rs].includes(String(o)) && e.setLevel("info");
            const t = await async function(e) {
              let {
                client: t,
                scope: n,
                event: r
              } = e;
              const o = {};
              t.emit && t.emit("preprocessEvent", r, o);
              const s = await (0, U.mG)(t.getOptions(), r, o, n, t, (0, i.rm)());
              return null === s ? (t.recordDroppedEvent("event_processor", "feedback", r), null) : (s.platform = s.platform || "javascript", s)
            }({
              scope: e,
              client: c,
              event: p
            });
            if (!t) return;
            c.emit && c.emit("beforeSendFeedback", t, {
              includeReplay: Boolean(a)
            });
            const n = (0, jo.V)(t, l, c.getOptions()._metadata, c.getOptions().tunnel);
            let r;
            try {
              r = await u.send(n)
            } catch (e) {
              const t = new Error("Unable to send Feedback");
              try {
                t.cause = e
              } catch (e) {}
              throw t
            }
            if (r) {
              if ("number" == typeof r.statusCode && (r.statusCode < 200 || r.statusCode >= 300)) throw new Error("Unable to send Feedback");
              return r
            }
          }))
        }({
          feedback: {
            name: t,
            email: n,
            message: r,
            url: s,
            source: o
          }
        }, a)
      }
      const is = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__;

      function as(e, t) {
        return {
          ...e,
          ...t,
          themeDark: {
            ...e.themeDark,
            ...t.themeDark
          },
          themeLight: {
            ...e.themeLight,
            ...t.themeLight
          }
        }
      }

      function cs(e) {
        return `\n  --background: ${e.background};\n  --background-hover: ${e.backgroundHover};\n  --foreground: ${e.foreground};\n  --error: ${e.error};\n  --success: ${e.success};\n  --border: ${e.border};\n  --border-radius: ${e.borderRadius};\n  --box-shadow: ${e.boxShadow};\n\n  --submit-background: ${e.submitBackground};\n  --submit-background-hover: ${e.submitBackgroundHover};\n  --submit-border: ${e.submitBorder};\n  --submit-outline-focus: ${e.submitOutlineFocus};\n  --submit-foreground: ${e.submitForeground};\n  --submit-foreground-hover: ${e.submitForegroundHover};\n\n  --cancel-background: ${e.cancelBackground};\n  --cancel-background-hover: ${e.cancelBackgroundHover};\n  --cancel-border: ${e.cancelBorder};\n  --cancel-outline-focus: ${e.cancelOutlineFocus};\n  --cancel-foreground: ${e.cancelForeground};\n  --cancel-foreground-hover: ${e.cancelForegroundHover};\n\n  --input-background: ${e.inputBackground};\n  --input-foreground: ${e.inputForeground};\n  --input-border: ${e.inputBorder};\n  --input-outline-focus: ${e.inputOutlineFocus};\n\n  --form-border-radius: ${e.formBorderRadius};\n  --form-content-border-radius: ${e.formContentBorderRadius};\n  `
      }

      function us(e, t) {
        return Object.entries(t).forEach((t => {
          let [n, r] = t;
          e.setAttributeNS(null, n, r)
        })), e
      }
      const ls = 20,
        ds = "http://www.w3.org/2000/svg";

      function ps(e, t) {
        const n = $o.document.createElement(e);
        t && Object.entries(t).forEach((e => {
          let [t, r] = e;
          "className" === t && "string" == typeof r ? n.setAttribute("class", r) : "boolean" == typeof r && r ? n.setAttribute(t, "") : "string" == typeof r ? n.setAttribute(t, r) : t.startsWith("on") && "function" == typeof r && n.addEventListener(t.substring(2).toLowerCase(), r)
        }));
        for (var r = arguments.length, o = new Array(r > 2 ? r - 2 : 0), s = 2; s < r; s++) o[s - 2] = arguments[s];
        for (const e of o) hs(n, e);
        return n
      }

      function hs(e, t) {
        const n = $o.document;
        if (null != t)
          if (Array.isArray(t))
            for (const n of t) hs(e, n);
          else !1 === t || ("string" == typeof t ? e.appendChild(n.createTextNode(t)) : t instanceof Node ? e.appendChild(t) : e.appendChild(n.createTextNode(String(t))))
      }

      function fs(e, t) {
        const n = e.get(t);
        return "string" == typeof n ? n.trim() : ""
      }
      const ms = "http://www.w3.org/2000/svg";

      function gs(e) {
        let {
          formTitle: t,
          showBranding: n,
          showName: r,
          showEmail: o,
          isNameRequired: s,
          isEmailRequired: i,
          colorScheme: a,
          defaultName: c,
          defaultEmail: u,
          onClosed: l,
          onCancel: d,
          onSubmit: p,
          ...h
        } = e, f = null;

        function m() {
          f && (f.open = !1)
        }
        const {
          el: g,
          showError: v,
          hideError: y
        } = function(e) {
          let {
            nameLabel: t,
            namePlaceholder: n,
            emailLabel: r,
            emailPlaceholder: o,
            messageLabel: s,
            messagePlaceholder: i,
            cancelButtonLabel: a,
            submitButtonLabel: c,
            showName: u,
            showEmail: l,
            isNameRequired: d,
            isEmailRequired: p,
            defaultName: h,
            defaultEmail: f,
            onCancel: m,
            onSubmit: g
          } = e;
          const {
            el: v
          } = function(e) {
            let {
              label: t
            } = e;
            return {
              el: ps("button", {
                type: "submit",
                className: "btn btn--primary",
                "aria-label": t
              }, t)
            }
          }({
            label: c
          }), y = ps("div", {
            className: "form__error-container form__error-container--hidden",
            "aria-hidden": "true"
          }), _ = ps("input", {
            id: "name",
            type: u ? "text" : "hidden",
            "aria-hidden": u ? "false" : "true",
            name: "name",
            required: d,
            className: "form__input",
            placeholder: n,
            value: h
          }), b = ps("input", {
            id: "email",
            type: l ? "text" : "hidden",
            "aria-hidden": l ? "false" : "true",
            name: "email",
            required: p,
            className: "form__input",
            placeholder: o,
            value: f
          }), S = ps("textarea", {
            id: "message",
            autoFocus: "true",
            rows: "5",
            name: "message",
            required: !0,
            className: "form__input form__input--textarea",
            placeholder: i
          }), w = ps("button", {
            type: "button",
            className: "btn btn--default",
            "aria-label": a,
            onClick: e => {
              m && m(e)
            }
          }, a), k = ps("form", {
            className: "form",
            onSubmit: function(e) {
              if (e.preventDefault(), e.target instanceof HTMLFormElement) try {
                if (g) {
                  const t = new FormData(e.target),
                    n = {
                      name: fs(t, "name"),
                      email: fs(t, "email"),
                      message: fs(t, "message")
                    };
                  g(n)
                }
              } catch (e) {}
            }
          }, [y, u && ps("label", {
            htmlFor: "name",
            className: "form__label"
          }, [ps("span", {
            className: "form__label__text"
          }, t, d && ps("span", {
            className: "form__label__text--required"
          }, " (required)")), _]), !u && _, l && ps("label", {
            htmlFor: "email",
            className: "form__label"
          }, [ps("span", {
            className: "form__label__text"
          }, r, p && ps("span", {
            className: "form__label__text--required"
          }, " (required)")), b]), !l && b, ps("label", {
            htmlFor: "message",
            className: "form__label"
          }, [ps("span", {
            className: "form__label__text"
          }, s, ps("span", {
            className: "form__label__text--required"
          }, " (required)")), S]), ps("div", {
            className: "btn-group"
          }, [v, w])]);
          return {
            get el() {
              return k
            },
            showError: function(e) {
              y.textContent = e, y.classList.remove("form__error-container--hidden"), y.setAttribute("aria-hidden", "false")
            },
            hideError: function() {
              y.textContent = "", y.classList.add("form__error-container--hidden"), y.setAttribute("aria-hidden", "true")
            }
          }
        }({
          showEmail: o,
          showName: r,
          isEmailRequired: i,
          isNameRequired: s,
          defaultName: c,
          defaultEmail: u,
          onSubmit: p,
          onCancel: d,
          ...h
        });
        return f = ps("dialog", {
          className: "dialog",
          open: !0,
          onClick: function() {
            m(), l && l()
          }
        }, ps("div", {
          className: "dialog__content",
          onClick: e => {
            e.stopPropagation()
          }
        }, ps("h2", {
          className: "dialog__header"
        }, t, n && ps("a", {
          className: "brand-link",
          target: "_blank",
          href: "https://sentry.io/welcome/",
          title: "Powered by Sentry",
          rel: "noopener noreferrer"
        }, function(e) {
          let {
            colorScheme: t
          } = e;
          const n = e => $o.document.createElementNS(ms, e),
            r = us(n("svg"), {
              class: "sentry-logo",
              width: "32",
              height: "30",
              viewBox: "0 0 72 66",
              fill: "none"
            }),
            o = us(n("path"), {
              transform: "translate(11, 11)",
              d: "M29,2.26a4.67,4.67,0,0,0-8,0L14.42,13.53A32.21,32.21,0,0,1,32.17,40.19H27.55A27.68,27.68,0,0,0,12.09,17.47L6,28a15.92,15.92,0,0,1,9.23,12.17H4.62A.76.76,0,0,1,4,39.06l2.94-5a10.74,10.74,0,0,0-3.36-1.9l-2.91,5a4.54,4.54,0,0,0,1.69,6.24A4.66,4.66,0,0,0,4.62,44H19.15a19.4,19.4,0,0,0-8-17.31l2.31-4A23.87,23.87,0,0,1,23.76,44H36.07a35.88,35.88,0,0,0-16.41-31.8l4.67-8a.77.77,0,0,1,1.05-.27c.53.29,20.29,34.77,20.66,35.17a.76.76,0,0,1-.68,1.13H40.6q.09,1.91,0,3.81h4.78A4.59,4.59,0,0,0,50,39.43a4.49,4.49,0,0,0-.62-2.28Z"
            });
          r.append(o);
          const s = n("defs"),
            i = n("style");
          return "system" === t && (i.textContent = "\n    @media (prefers-color-scheme: dark) {\n      path: {\n        fill: '#fff';\n      }\n    }\n    "), i.textContent = `\n    path {\n      fill: ${"dark"===t?"#fff":"#362d59"};\n    }`, s.append(i), r.append(s), {
            get el() {
              return r
            }
          }
        }({
          colorScheme: a
        }).el)), g)), {
          get el() {
            return f
          },
          showError: v,
          hideError: y,
          open: function() {
            f && (f.open = !0)
          },
          close: m,
          checkIsOpen: function() {
            return f && !0 === f.open || !1
          }
        }
      }
      const vs = 16,
        ys = 17,
        _s = "http://www.w3.org/2000/svg";

      function bs(e) {
        let t, n, {
            shadow: r,
            options: {
              shouldCreateActor: o = !0,
              ...s
            },
            attachTo: i
          } = e,
          a = !1;
        async function c(e) {
          if (!n) return;
          const t = [];
          s.isNameRequired && !e.name && t.push(s.nameLabel), s.isEmailRequired && !e.email && t.push(s.emailLabel), e.message || t.push(s.messageLabel), t.length > 0 ? n.showError(`Please enter in the following required fields: ${t.join(", ")}`) : await async function(e, t, n) {
            if (e) {
              e.hideError();
              try {
                return await ss({
                  ...t,
                  source: rs
                }, n)
              } catch (t) {
                is && J.vF.error(t), e && e.showError("There was a problem submitting feedback, please wait and try again.")
              }
            }
          }(n, e) ? (f(), function() {
            if (r) try {
              const e = function(e) {
                let {
                  message: t,
                  onRemove: n
                } = e;

                function r() {
                  o && (o.remove(), n && n())
                }
                const o = ps("div", {
                  className: "success-message",
                  onClick: r
                }, function() {
                  const e = e => $o.document.createElementNS(_s, e),
                    t = us(e("svg"), {
                      class: "success-icon",
                      width: `${vs}`,
                      height: `${ys}`,
                      viewBox: `0 0 ${vs} ${ys}`,
                      fill: "none"
                    }),
                    n = us(e("g"), {
                      clipPath: "url(#clip0_57_156)"
                    }),
                    r = us(e("path"), {
                      "fill-rule": "evenodd",
                      "clip-rule": "evenodd",
                      d: "M3.55544 15.1518C4.87103 16.0308 6.41775 16.5 8 16.5C10.1217 16.5 12.1566 15.6571 13.6569 14.1569C15.1571 12.6566 16 10.6217 16 8.5C16 6.91775 15.5308 5.37103 14.6518 4.05544C13.7727 2.73985 12.5233 1.71447 11.0615 1.10897C9.59966 0.503466 7.99113 0.34504 6.43928 0.653721C4.88743 0.962403 3.46197 1.72433 2.34315 2.84315C1.22433 3.96197 0.462403 5.38743 0.153721 6.93928C-0.15496 8.49113 0.00346625 10.0997 0.608967 11.5615C1.21447 13.0233 2.23985 14.2727 3.55544 15.1518ZM4.40546 3.1204C5.46945 2.40946 6.72036 2.03 8 2.03C9.71595 2.03 11.3616 2.71166 12.575 3.92502C13.7883 5.13838 14.47 6.78405 14.47 8.5C14.47 9.77965 14.0905 11.0306 13.3796 12.0945C12.6687 13.1585 11.6582 13.9878 10.476 14.4775C9.29373 14.9672 7.99283 15.0953 6.73777 14.8457C5.48271 14.596 4.32987 13.9798 3.42502 13.075C2.52018 12.1701 1.90397 11.0173 1.65432 9.76224C1.40468 8.50718 1.5328 7.20628 2.0225 6.02404C2.5122 4.8418 3.34148 3.83133 4.40546 3.1204Z"
                    }),
                    o = us(e("path"), {
                      d: "M6.68775 12.4297C6.78586 12.4745 6.89218 12.4984 7 12.5C7.11275 12.4955 7.22315 12.4664 7.32337 12.4145C7.4236 12.3627 7.51121 12.2894 7.58 12.2L12 5.63999C12.0848 5.47724 12.1071 5.28902 12.0625 5.11098C12.0178 4.93294 11.9095 4.77744 11.7579 4.67392C11.6064 4.57041 11.4221 4.52608 11.24 4.54931C11.0579 4.57254 10.8907 4.66173 10.77 4.79999L6.88 10.57L5.13 8.56999C5.06508 8.49566 4.98613 8.43488 4.89768 8.39111C4.80922 8.34735 4.713 8.32148 4.61453 8.31498C4.51605 8.30847 4.41727 8.32147 4.32382 8.35322C4.23038 8.38497 4.14413 8.43484 4.07 8.49999C3.92511 8.63217 3.83692 8.81523 3.82387 9.01092C3.81083 9.2066 3.87393 9.39976 4 9.54999L6.43 12.24C6.50187 12.3204 6.58964 12.385 6.68775 12.4297Z"
                    });
                  t.appendChild(n).append(o, r);
                  const s = e("defs"),
                    i = us(e("clipPath"), {
                      id: "clip0_57_156"
                    }),
                    a = us(e("rect"), {
                      width: `${vs}`,
                      height: `${vs}`,
                      fill: "white",
                      transform: "translate(0 0.5)"
                    });
                  return i.appendChild(a), s.appendChild(i), t.appendChild(s).appendChild(i).appendChild(a), {
                    get el() {
                      return t
                    }
                  }
                }().el, t);
                return {
                  el: o,
                  remove: r
                }
              }({
                message: s.successMessageText,
                onRemove: () => {
                  t && clearTimeout(t), u()
                }
              });
              if (!e.el) throw new Error("Unable to show success message");
              r.appendChild(e.el);
              const t = setTimeout((() => {
                e && e.remove()
              }), 5e3)
            } catch (e) {
              J.vF.error(e)
            }
          }(), s.onSubmitSuccess && s.onSubmitSuccess()) : s.onSubmitError && s.onSubmitError()
        }

        function u() {
          t && t.show()
        }

        function l() {
          t && t.hide()
        }

        function p() {
          try {
            if (n) return n.open(), a = !0, void(s.onFormOpen && s.onFormOpen());
            const e = s.useSentryUser,
              t = (0, d.o5)(),
              o = t && t.getUser();
            if (n = gs({
                colorScheme: s.colorScheme,
                showBranding: s.showBranding,
                showName: s.showName || s.isNameRequired,
                showEmail: s.showEmail || s.isEmailRequired,
                isNameRequired: s.isNameRequired,
                isEmailRequired: s.isEmailRequired,
                formTitle: s.formTitle,
                cancelButtonLabel: s.cancelButtonLabel,
                submitButtonLabel: s.submitButtonLabel,
                emailLabel: s.emailLabel,
                emailPlaceholder: s.emailPlaceholder,
                messageLabel: s.messageLabel,
                messagePlaceholder: s.messagePlaceholder,
                nameLabel: s.nameLabel,
                namePlaceholder: s.namePlaceholder,
                defaultName: e && o && o[e.name] || "",
                defaultEmail: e && o && o[e.email] || "",
                onClosed: () => {
                  u(), a = !1, s.onFormClose && s.onFormClose()
                },
                onCancel: () => {
                  h(), u()
                },
                onSubmit: c
              }), !n.el) throw new Error("Unable to open Feedback dialog");
            r.appendChild(n.el), l(), s.onFormOpen && s.onFormOpen()
          } catch (e) {
            J.vF.error(e)
          }
        }

        function h() {
          n && (n.close(), a = !1, s.onFormClose && s.onFormClose())
        }

        function f() {
          if (n) {
            h();
            const e = n.el;
            e && e.remove(), n = void 0
          }
        }

        function m() {
          a || p(), l()
        }
        return i ? i.addEventListener("click", m) : o && (t = function(e) {
          let {
            buttonLabel: t,
            onClick: n
          } = e;
          const r = ps("button", {
            type: "button",
            className: "widget__actor",
            "aria-label": t,
            "aria-hidden": "false"
          }, function() {
            const e = e => $o.document.createElementNS(ds, e),
              t = us(e("svg"), {
                class: "feedback-icon",
                width: `${ls}`,
                height: `${ls}`,
                viewBox: `0 0 ${ls} ${ls}`,
                fill: "none"
              }),
              n = us(e("g"), {
                clipPath: "url(#clip0_57_80)"
              }),
              r = us(e("path"), {
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                d: "M15.6622 15H12.3997C12.2129 14.9959 12.031 14.9396 11.8747 14.8375L8.04965 12.2H7.49956V19.1C7.4875 19.3348 7.3888 19.5568 7.22256 19.723C7.05632 19.8892 6.83435 19.9879 6.59956 20H2.04956C1.80193 19.9968 1.56535 19.8969 1.39023 19.7218C1.21511 19.5467 1.1153 19.3101 1.11206 19.0625V12.2H0.949652C0.824431 12.2017 0.700142 12.1783 0.584123 12.1311C0.468104 12.084 0.362708 12.014 0.274155 11.9255C0.185602 11.8369 0.115689 11.7315 0.0685419 11.6155C0.0213952 11.4995 -0.00202913 11.3752 -0.00034808 11.25V3.75C-0.00900498 3.62067 0.0092504 3.49095 0.0532651 3.36904C0.0972798 3.24712 0.166097 3.13566 0.255372 3.04168C0.344646 2.94771 0.452437 2.87327 0.571937 2.82307C0.691437 2.77286 0.82005 2.74798 0.949652 2.75H8.04965L11.8747 0.1625C12.031 0.0603649 12.2129 0.00407221 12.3997 0H15.6622C15.9098 0.00323746 16.1464 0.103049 16.3215 0.278167C16.4966 0.453286 16.5964 0.689866 16.5997 0.9375V3.25269C17.3969 3.42959 18.1345 3.83026 18.7211 4.41679C19.5322 5.22788 19.9878 6.32796 19.9878 7.47502C19.9878 8.62209 19.5322 9.72217 18.7211 10.5333C18.1345 11.1198 17.3969 11.5205 16.5997 11.6974V14.0125C16.6047 14.1393 16.5842 14.2659 16.5395 14.3847C16.4948 14.5035 16.4268 14.6121 16.3394 14.7042C16.252 14.7962 16.147 14.8698 16.0307 14.9206C15.9144 14.9714 15.7891 14.9984 15.6622 15ZM1.89695 10.325H1.88715V4.625H8.33715C8.52423 4.62301 8.70666 4.56654 8.86215 4.4625L12.6872 1.875H14.7247V13.125H12.6872L8.86215 10.4875C8.70666 10.3835 8.52423 10.327 8.33715 10.325H2.20217C2.15205 10.3167 2.10102 10.3125 2.04956 10.3125C1.9981 10.3125 1.94708 10.3167 1.89695 10.325ZM2.98706 12.2V18.1625H5.66206V12.2H2.98706ZM16.5997 9.93612V5.01393C16.6536 5.02355 16.7072 5.03495 16.7605 5.04814C17.1202 5.13709 17.4556 5.30487 17.7425 5.53934C18.0293 5.77381 18.2605 6.06912 18.4192 6.40389C18.578 6.73866 18.6603 7.10452 18.6603 7.47502C18.6603 7.84552 18.578 8.21139 18.4192 8.54616C18.2605 8.88093 18.0293 9.17624 17.7425 9.41071C17.4556 9.64518 17.1202 9.81296 16.7605 9.90191C16.7072 9.91509 16.6536 9.9265 16.5997 9.93612Z"
              });
            t.appendChild(n).appendChild(r);
            const o = e("defs"),
              s = us(e("clipPath"), {
                id: "clip0_57_80"
              }),
              i = us(e("rect"), {
                width: `${ls}`,
                height: `${ls}`,
                fill: "white"
              });
            return s.appendChild(i), o.appendChild(s), t.appendChild(o).appendChild(s).appendChild(i), {
              get el() {
                return t
              }
            }
          }().el, t ? ps("span", {
            className: "widget__actor__text"
          }, t) : null);
          return r.addEventListener("click", (function(e) {
            n && n(e)
          })), {
            get el() {
              return r
            },
            show: () => {
              r.classList.remove("widget__actor--hidden"), r.setAttribute("aria-hidden", "false")
            },
            hide: () => {
              r.classList.add("widget__actor--hidden"), r.setAttribute("aria-hidden", "true")
            }
          }
        }({
          buttonLabel: s.buttonLabel,
          onClick: m
        }), t.el && r.appendChild(t.el)), {
          get actor() {
            return t
          },
          get dialog() {
            return n
          },
          showActor: u,
          hideActor: l,
          removeActor: function() {
            t && t.el && t.el.remove()
          },
          openDialog: p,
          closeDialog: h,
          removeDialog: f
        }
      }
      const Ss = $o.document,
        ws = e => new ks(e);
      class ks {
        static __initStatic() {
          this.id = "Feedback"
        }
        constructor() {
          let {
            id: e = "sentry-feedback",
            showBranding: t = !0,
            autoInject: n = !0,
            showEmail: r = !0,
            showName: o = !0,
            useSentryUser: s = {
              email: "email",
              name: "username"
            },
            isEmailRequired: i = !1,
            isNameRequired: a = !1,
            themeDark: c,
            themeLight: u,
            colorScheme: l = "system",
            buttonLabel: d = Ko,
            cancelButtonLabel: p = Go,
            submitButtonLabel: h = Vo,
            formTitle: f = Jo,
            emailPlaceholder: m = Yo,
            emailLabel: g = Xo,
            messagePlaceholder: v = Qo,
            messageLabel: y = Zo,
            namePlaceholder: _ = es,
            nameLabel: b = ts,
            successMessageText: S = ns,
            onFormClose: w,
            onFormOpen: k,
            onSubmitError: T,
            onSubmitSuccess: E
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          this.name = ks.id, this._host = null, this._shadow = null, this._widget = null, this._widgets = new Set, this._hasInsertedActorStyles = !1, this.options = {
            id: e,
            showBranding: t,
            autoInject: n,
            isEmailRequired: i,
            isNameRequired: a,
            showEmail: r,
            showName: o,
            useSentryUser: s,
            colorScheme: l,
            themeDark: {
              ...Wo,
              ...c
            },
            themeLight: {
              ...zo,
              ...u
            },
            buttonLabel: d,
            cancelButtonLabel: p,
            submitButtonLabel: h,
            formTitle: f,
            emailLabel: g,
            emailPlaceholder: m,
            messageLabel: y,
            messagePlaceholder: v,
            nameLabel: b,
            namePlaceholder: _,
            successMessageText: S,
            onFormClose: w,
            onFormOpen: k,
            onSubmitError: T,
            onSubmitSuccess: E
          }
        }
        setupOnce() {
          if (se()) try {
            this._cleanupWidgetIfExists();
            const {
              autoInject: e
            } = this.options;
            if (!e) return;
            this._createWidget(this.options)
          } catch (e) {
            is && J.vF.error(e)
          }
        }
        openDialog() {
          this._widget || this._createWidget({
            ...this.options,
            shouldCreateActor: !1
          }), this._widget && this._widget.openDialog()
        }
        closeDialog() {
          this._widget && this._widget.closeDialog()
        }
        attachTo(e, t) {
          try {
            const n = as(this.options, t || {});
            return this._ensureShadowHost(n, (t => {
              let {
                shadow: r
              } = t;
              const o = "string" == typeof e ? Ss.querySelector(e) : "function" == typeof e.addEventListener ? e : null;
              if (!o) return is && J.vF.error("[Feedback] Unable to attach to target element"), null;
              const s = bs({
                shadow: r,
                options: n,
                attachTo: o
              });
              return this._widgets.add(s), this._widget || (this._widget = s), s
            }))
          } catch (e) {
            return is && J.vF.error(e), null
          }
        }
        createWidget(e) {
          try {
            return this._createWidget(as(this.options, e || {}))
          } catch (e) {
            return is && J.vF.error(e), null
          }
        }
        removeWidget(e) {
          if (!e) return !1;
          try {
            if (this._widgets.has(e)) return e.removeActor(), e.removeDialog(), this._widgets.delete(e), this._widget === e && (this._widget = null), !0
          } catch (e) {
            is && J.vF.error(e)
          }
          return !1
        }
        getWidget() {
          return this._widget
        }
        remove() {
          this._host && this._host.remove(), this._initialize()
        }
        _initialize() {
          this._host = null, this._shadow = null, this._widget = null, this._widgets = new Set, this._hasInsertedActorStyles = !1
        }
        _cleanupWidgetIfExists() {
          this._host && this.remove();
          const e = Ss.querySelector(`#${this.options.id}`);
          e && e.remove()
        }
        _createWidget(e) {
          return this._ensureShadowHost(e, (t => {
            let {
              shadow: n
            } = t;
            const r = bs({
              shadow: n,
              options: e
            });
            return !this._hasInsertedActorStyles && r.actor && (n.appendChild(function(e) {
              const t = e.createElement("style");
              return t.textContent = "\n.widget__actor {\n  line-height: 25px;\n\n  display: flex;\n  align-items: center;\n  gap: 8px;\n\n  border-radius: var(--border-radius);\n  cursor: pointer;\n  font-size: 14px;\n  font-weight: 600;\n  padding: 12px 16px;\n  text-decoration: none;\n  z-index: 9000;\n\n  color: var(--foreground);\n  background-color: var(--background);\n  border: var(--border);\n  box-shadow: var(--box-shadow);\n  opacity: 1;\n  transition: opacity 0.1s ease-in-out;\n}\n\n.widget__actor:hover {\n  background-color: var(--background-hover);\n}\n\n.widget__actor svg {\n  width: 16px;\n  height: 16px;\n}\n\n.widget__actor--hidden {\n  opacity: 0;\n  pointer-events: none;\n  visibility: hidden;\n}\n\n.widget__actor__text {\n}\n\n.feedback-icon path {\n  fill: var(--foreground);\n}\n", t
            }(Ss)), this._hasInsertedActorStyles = !0), this._widgets.add(r), this._widget || (this._widget = r), r
          }))
        }
        _ensureShadowHost(e, t) {
          let n = !1;
          if (!this._shadow || !this._host) {
            const {
              id: t,
              colorScheme: r,
              themeLight: o,
              themeDark: s
            } = e, {
              shadow: i,
              host: a
            } = function(e) {
              let {
                id: t,
                colorScheme: n,
                themeDark: r,
                themeLight: o
              } = e;
              try {
                const e = $o.document,
                  s = e.createElement("div");
                s.id = t;
                const i = s.attachShadow({
                  mode: "open"
                });
                return i.appendChild(function(e, t, n) {
                  const r = e.createElement("style");
                  return r.textContent = `\n:host {\n  --bottom: 1rem;\n  --right: 1rem;\n  --top: auto;\n  --left: auto;\n  --z-index: 100000;\n  --font-family: ${n.light.fontFamily};\n  --font-size: ${n.light.fontSize};\n\n  position: fixed;\n  left: var(--left);\n  right: var(--right);\n  bottom: var(--bottom);\n  top: var(--top);\n  z-index: var(--z-index);\n\n  font-family: var(--font-family);\n  font-size: var(--font-size);\n\n  ${cs("dark"===t?n.dark:n.light)}\n}\n\n${"system"===t?`\n@media (prefers-color-scheme: dark) {\n  :host {\n    ${cs(n.dark)}\n  }\n}`:""}\n}`, r
                }(e, n, {
                  dark: r,
                  light: o
                })), i.appendChild(function(e) {
                  const t = e.createElement("style");
                  return t.textContent = "\n.dialog {\n  line-height: 25px;\n  background-color: rgba(0, 0, 0, 0.05);\n  border: none;\n  position: fixed;\n  inset: 0;\n  z-index: 10000;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  opacity: 1;\n  transition: opacity 0.2s ease-in-out;\n}\n\n.dialog:not([open]) {\n  opacity: 0;\n  pointer-events: none;\n  visibility: hidden;\n}\n.dialog:not([open]) .dialog__content {\n  transform: translate(0, -16px) scale(0.98);\n}\n\n.dialog__content {\n  position: fixed;\n  left: var(--left);\n  right: var(--right);\n  bottom: var(--bottom);\n  top: var(--top);\n\n  border: var(--border);\n  border-radius: var(--form-border-radius);\n  background-color: var(--background);\n  color: var(--foreground);\n\n  width: 320px;\n  max-width: 100%;\n  max-height: calc(100% - 2rem);\n  display: flex;\n  flex-direction: column;\n  box-shadow: var(--box-shadow);\n  transition: transform 0.2s ease-in-out;\n  transform: translate(0, 0) scale(1);\n}\n\n.dialog__header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-size: 20px;\n  font-weight: 600;\n  padding: 24px 24px 0 24px;\n  margin: 0;\n  margin-bottom: 16px;\n}\n\n.brand-link {\n  display: inline-flex;\n}\n\n.error {\n  color: var(--error);\n  margin-bottom: 16px;\n}\n\n.form {\n  display: grid;\n  overflow: auto;\n  flex-direction: column;\n  gap: 16px;\n  padding: 0 24px 24px;\n}\n\n.form__error-container {\n  color: var(--error);\n}\n\n.form__error-container--hidden {\n  display: none;\n}\n\n.form__label {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  margin: 0px;\n}\n\n.form__label__text {\n  display: grid;\n  gap: 4px;\n  align-items: center;\n  grid-auto-flow: column;\n  grid-auto-columns: max-content;\n}\n\n.form__label__text--required {\n  font-size: 0.85em;\n}\n\n.form__input {\n  font-family: inherit;\n  line-height: inherit;\n  background-color: var(--input-background);\n  box-sizing: border-box;\n  border: var(--input-border);\n  border-radius: var(--form-content-border-radius);\n  color: var(--input-foreground);\n  font-size: 14px;\n  font-weight: 500;\n  padding: 6px 12px;\n}\n\n.form__input:focus-visible {\n  outline: 1px auto var(--input-outline-focus);\n}\n\n.form__input--textarea {\n  font-family: inherit;\n  resize: vertical;\n}\n\n.btn-group {\n  display: grid;\n  gap: 8px;\n  margin-top: 8px;\n}\n\n.btn {\n  line-height: inherit;\n  border: var(--cancel-border);\n  border-radius: var(--form-content-border-radius);\n  cursor: pointer;\n  font-size: 14px;\n  font-weight: 600;\n  padding: 6px 16px;\n}\n.btn[disabled] {\n  opacity: 0.6;\n  pointer-events: none;\n}\n\n.btn--primary {\n  background-color: var(--submit-background);\n  border-color: var(--submit-border);\n  color: var(--submit-foreground);\n}\n.btn--primary:hover {\n  background-color: var(--submit-background-hover);\n  color: var(--submit-foreground-hover);\n}\n.btn--primary:focus-visible {\n  outline: 1px auto var(--submit-outline-focus);\n}\n\n.btn--default {\n  background-color: var(--cancel-background);\n  color: var(--cancel-foreground);\n  font-weight: 500;\n}\n.btn--default:hover {\n  background-color: var(--cancel-background-hover);\n  color: var(--cancel-foreground-hover);\n}\n.btn--default:focus-visible {\n  outline: 1px auto var(--cancel-outline-focus);\n}\n\n.success-message {\n  background-color: var(--background);\n  border: var(--border);\n  border-radius: var(--border-radius);\n  box-shadow: var(--box-shadow);\n  font-weight: 600;\n  color: var(--success);\n  padding: 12px 24px;\n  line-height: 25px;\n  display: grid;\n  align-items: center;\n  grid-auto-flow: column;\n  gap: 6px;\n  cursor: default;\n}\n\n.success-icon path {\n  fill: var(--success);\n}\n", t
                }(e)), {
                  shadow: i,
                  host: s
                }
              } catch (e) {
                throw J.vF.warn("[Feedback] Browser does not support shadow DOM API"), new Error("Browser does not support shadow DOM API.")
              }
            }({
              id: t,
              colorScheme: r,
              themeLight: o,
              themeDark: s
            });
            this._shadow = i, this._host = a, n = !0
          }
          this._host.dataset.sentryFeedbackColorscheme = e.colorScheme;
          const r = t({
            shadow: this._shadow,
            host: this._host
          });
          return n && Ss.body.appendChild(this._host), r
        }
      }
      ks.__initStatic();
      var Ts = n(9304),
        Es = n(37427);

      function xs() {
        ue && ue.document ? ue.document.addEventListener("visibilitychange", (() => {
          const e = (0, y.Z7)();
          if (ue.document.hidden && e) {
            const t = "cancelled",
              {
                op: n,
                status: r
              } = (0, H.et)(e);
            ae && J.vF.log(`[Tracing] Transaction: ${t} -> since tab moved to the background, op: ${n}`), r || e.setStatus(t), e.setTag("visibilitychange", "document.hidden"), e.end()
          }
        })) : ae && J.vF.warn("[Tracing] Could not set up background tab detection due to lack of global document")
      }
      var Cs = n(59100);

      function Is(e) {
        return "number" == typeof e && isFinite(e)
      }

      function Rs(e, t) {
        let {
          startTimestamp: n,
          ...r
        } = t;
        return n && e.startTimestamp > n && (e.startTimestamp = n), e.startChild({
          startTimestamp: n,
          ...r
        })
      }
      const Os = 2147483647;

      function Ms(e) {
        return e / 1e3
      }

      function As() {
        return ue && ue.addEventListener && ue.performance
      }
      let Fs, Ds, Ns = 0,
        Ls = {};

      function Ps() {
        const e = As();
        if (e && V.k3) {
          e.mark && ue.performance.mark("sentry-tracing-init");
          const t = Ae("fid", (e => {
              let {
                metric: t
              } = e;
              const n = t.entries[t.entries.length - 1];
              if (!n) return;
              const r = Ms(V.k3),
                o = Ms(n.startTime);
              ae && J.vF.log("[Measurements] Adding FID"), Ls.fid = {
                value: t.value,
                unit: "millisecond"
              }, Ls["mark.fid"] = {
                value: r + o,
                unit: "second"
              }
            }), Oe, Te),
            n = function(e) {
              return Ae("cls", e, Re, ke, arguments.length > 1 && void 0 !== arguments[1] && arguments[1])
            }((e => {
              let {
                metric: t
              } = e;
              const n = t.entries[t.entries.length - 1];
              n && (ae && J.vF.log("[Measurements] Adding CLS"), Ls.cls = {
                value: t.value,
                unit: ""
              }, Ds = n)
            }), !0),
            r = xe((e => {
              let {
                metric: t
              } = e;
              const n = t.entries[t.entries.length - 1];
              n && (ae && J.vF.log("[Measurements] Adding LCP"), Ls.lcp = {
                value: t.value,
                unit: "millisecond"
              }, Fs = n)
            }), !0);
          return () => {
            t(), n(), r()
          }
        }
        return () => {}
      }

      function js() {
        Ce("longtask", (e => {
          let {
            entries: t
          } = e;
          for (const e of t) {
            const t = (0, y.Z7)();
            if (!t) return;
            const n = Ms(V.k3 + e.startTime),
              r = Ms(e.duration);
            t.startChild({
              description: "Main UI thread blocked",
              op: "ui.long-task",
              origin: "auto.ui.browser.metrics",
              startTimestamp: n,
              endTimestamp: n + r
            })
          }
        }))
      }

      function $s() {
        Ce("event", (e => {
          let {
            entries: t
          } = e;
          for (const e of t) {
            const t = (0, y.Z7)();
            if (!t) return;
            if ("click" === e.name) {
              const n = Ms(V.k3 + e.startTime),
                r = Ms(e.duration),
                o = {
                  description: (0, G.Hd)(e.target),
                  op: `ui.interaction.${e.name}`,
                  origin: "auto.ui.browser.metrics",
                  startTimestamp: n,
                  endTimestamp: n + r
                },
                s = (0, G.xE)(e.target);
              s && (o.attributes = {
                "ui.component_name": s
              }), t.startChild(o)
            }
          }
        }))
      }

      function Bs(e) {
        const t = As();
        if (!t || !ue.performance.getEntries || !V.k3) return;
        ae && J.vF.log("[Tracing] Adding & adjusting spans using Performance API");
        const n = Ms(V.k3),
          r = t.getEntries();
        let o, s;
        const {
          op: i,
          start_timestamp: a
        } = (0, H.et)(e);
        if (r.slice(Ns).forEach((t => {
            const r = Ms(t.startTime),
              i = Ms(t.duration);
            if (!("navigation" === e.op && a && n + r < a)) switch (t.entryType) {
              case "navigation":
                ! function(e, t, n) {
                  ["unloadEvent", "redirect", "domContentLoadedEvent", "loadEvent", "connect"].forEach((r => {
                      Us(e, t, r, n)
                    })), Us(e, t, "secureConnection", n, "TLS/SSL", "connectEnd"), Us(e, t, "fetch", n, "cache", "domainLookupStart"), Us(e, t, "domainLookup", n, "DNS"),
                    function(e, t, n) {
                      t.responseEnd && (Rs(e, {
                        op: "browser",
                        origin: "auto.browser.browser.metrics",
                        description: "request",
                        startTimestamp: n + Ms(t.requestStart),
                        endTimestamp: n + Ms(t.responseEnd)
                      }), Rs(e, {
                        op: "browser",
                        origin: "auto.browser.browser.metrics",
                        description: "response",
                        startTimestamp: n + Ms(t.responseStart),
                        endTimestamp: n + Ms(t.responseEnd)
                      }))
                    }(e, t, n)
                }(e, t, n), o = n + Ms(t.responseStart), s = n + Ms(t.requestStart);
                break;
              case "mark":
              case "paint":
              case "measure": {
                ! function(e, t, n, r, o) {
                  const s = o + n,
                    i = s + r;
                  Rs(e, {
                    description: t.name,
                    endTimestamp: i,
                    op: t.entryType,
                    origin: "auto.resource.browser.metrics",
                    startTimestamp: s
                  })
                }(e, t, r, i, n);
                const o = ve(),
                  s = t.startTime < o.firstHiddenTime;
                "first-paint" === t.name && s && (ae && J.vF.log("[Measurements] Adding FP"), Ls.fp = {
                  value: t.startTime,
                  unit: "millisecond"
                }), "first-contentful-paint" === t.name && s && (ae && J.vF.log("[Measurements] Adding FCP"), Ls.fcp = {
                  value: t.startTime,
                  unit: "millisecond"
                });
                break
              }
              case "resource":
                ! function(e, t, n, r, o, s) {
                  if ("xmlhttprequest" === t.initiatorType || "fetch" === t.initiatorType) return;
                  const i = (0, Cs.Dl)(n),
                    a = {};
                  Hs(a, t, "transferSize", "http.response_transfer_size"), Hs(a, t, "encodedBodySize", "http.response_content_length"), Hs(a, t, "decodedBodySize", "http.decoded_response_content_length"), "renderBlockingStatus" in t && (a["resource.render_blocking_status"] = t.renderBlockingStatus), i.protocol && (a["url.scheme"] = i.protocol.split(":").pop()), i.host && (a["server.address"] = i.host), a["url.same_origin"] = n.includes(ue.location.origin);
                  const c = s + r,
                    u = c + o;
                  Rs(e, {
                    description: n.replace(ue.location.origin, ""),
                    endTimestamp: u,
                    op: t.initiatorType ? `resource.${t.initiatorType}` : "resource.other",
                    origin: "auto.resource.browser.metrics",
                    startTimestamp: c,
                    data: a
                  })
                }(e, t, t.name, r, i, n)
            }
          })), Ns = Math.max(r.length - 1, 0), function(e) {
            const t = ue.navigator;
            if (!t) return;
            const n = t.connection;
            n && (n.effectiveType && e.setTag("effectiveConnectionType", n.effectiveType), n.type && e.setTag("connectionType", n.type), Is(n.rtt) && (Ls["connection.rtt"] = {
              value: n.rtt,
              unit: "millisecond"
            })), Is(t.deviceMemory) && e.setTag("deviceMemory", `${t.deviceMemory} GB`), Is(t.hardwareConcurrency) && e.setTag("hardwareConcurrency", String(t.hardwareConcurrency))
          }(e), "pageload" === i) {
          ! function(e, t, n, r) {
            "number" == typeof t && r && (ae && J.vF.log("[Measurements] Adding TTFB"), e.ttfb = {
              value: 1e3 * Math.max(t - r, 0),
              unit: "millisecond"
            }, "number" == typeof n && n <= t && (e["ttfb.requestTime"] = {
              value: 1e3 * (t - n),
              unit: "millisecond"
            }))
          }(Ls, o, s, a), ["fcp", "fp", "lcp"].forEach((e => {
            if (!Ls[e] || !a || n >= a) return;
            const t = Ls[e].value,
              r = n + Ms(t),
              o = Math.abs(1e3 * (r - a)),
              s = o - t;
            ae && J.vF.log(`[Measurements] Normalized ${e} from ${t} to ${o} (${s})`), Ls[e].value = o
          }));
          const t = Ls["mark.fid"];
          t && Ls.fid && (Rs(e, {
              description: "first input delay",
              endTimestamp: t.value + Ms(Ls.fid.value),
              op: "ui.action",
              origin: "auto.ui.browser.metrics",
              startTimestamp: t.value
            }), delete Ls["mark.fid"]), "fcp" in Ls || delete Ls.cls, Object.keys(Ls).forEach((e => {
              (0, T.X)(e, Ls[e].value, Ls[e].unit)
            })),
            function(e) {
              Fs && (ae && J.vF.log("[Measurements] Adding LCP Data"), Fs.element && e.setTag("lcp.element", (0, G.Hd)(Fs.element)), Fs.id && e.setTag("lcp.id", Fs.id), Fs.url && e.setTag("lcp.url", Fs.url.trim().slice(0, 200)), e.setTag("lcp.size", Fs.size)), Ds && Ds.sources && (ae && J.vF.log("[Measurements] Adding CLS Data"), Ds.sources.forEach(((t, n) => e.setTag(`cls.source.${n+1}`, (0, G.Hd)(t.node)))))
            }(e)
        }
        Fs = void 0, Ds = void 0, Ls = {}
      }

      function Us(e, t, n, r, o, s) {
        const i = s ? t[s] : t[`${n}End`],
          a = t[`${n}Start`];
        a && i && Rs(e, {
          op: "browser",
          origin: "auto.browser.browser.metrics",
          description: o || n,
          startTimestamp: r + Ms(a),
          endTimestamp: r + Ms(i)
        })
      }

      function Hs(e, t, n, r) {
        const o = t[n];
        null != o && o < Os && (e[r] = o)
      }
      var qs = n(17638),
        zs = n(53951),
        Ws = n(76203),
        Ks = n(44877);
      const Gs = ["localhost", /^\/(?!\/)/],
        Vs = {
          traceFetch: !0,
          traceXHR: !0,
          enableHTTPTimings: !0,
          tracingOrigins: Gs,
          tracePropagationTargets: Gs
        };

      function Js(e) {
        const {
          traceFetch: t,
          traceXHR: n,
          tracePropagationTargets: r,
          tracingOrigins: o,
          shouldCreateSpanForRequest: s,
          enableHTTPTimings: a
        } = {
          traceFetch: Vs.traceFetch,
          traceXHR: Vs.traceXHR,
          ...e
        }, c = "function" == typeof s ? s : e => !0, u = e => function(e, t) {
          return (0, Q.Xr)(e, t || Gs)
        }(e, r || o), l = {};
        t && (0, Z.u)((e => {
          const t = function(e, t, n, r) {
            let o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "auto.http.browser";
            if (!(0, qs.w)() || !e.fetchData) return;
            const s = t(e.fetchData.url);
            if (e.endTimestamp && s) {
              const t = e.fetchData.__span;
              if (!t) return;
              const n = r[t];
              if (n) {
                if (e.response) {
                  (0, _.N8)(n, e.response.status);
                  const t = e.response && e.response.headers && e.response.headers.get("content-length");
                  if (t) {
                    const e = parseInt(t);
                    e > 0 && n.setAttribute("http.response_content_length", e)
                  }
                } else e.error && n.setStatus("internal_error");
                n.end(), delete r[t]
              }
              return
            }
            const a = (0, d.o5)(),
              c = (0, d.KU)(),
              {
                method: u,
                url: l
              } = e.fetchData,
              p = s ? (0, g.Uk)({
                name: `${u} ${l}`,
                onlyIfParent: !0,
                attributes: {
                  url: l,
                  type: "fetch",
                  "http.method": u,
                  [q.JD]: o
                },
                op: "http.client"
              }) : void 0;
            if (p && (e.fetchData.__span = p.spanContext().spanId, r[p.spanContext().spanId] = p), n(e.fetchData.url) && c) {
              const t = e.args[0];
              e.args[1] = e.args[1] || {};
              const n = e.args[1];
              n.headers = function(e, t, n, r, o) {
                const s = o || n.getSpan(),
                  a = (0, i.rm)(),
                  {
                    traceId: c,
                    spanId: u,
                    sampled: l,
                    dsc: d
                  } = {
                    ...a.getPropagationContext(),
                    ...n.getPropagationContext()
                  },
                  p = s ? (0, H.Qh)(s) : (0, Es.TC)(c, u, l),
                  h = (0, Ws.De)(d || (s ? (0, zs.k)(s) : (0, zs.l)(c, t, n))),
                  f = r.headers || ("undefined" != typeof Request && (0, Ks.tH)(e, Request) ? e.headers : void 0);
                if (f) {
                  if ("undefined" != typeof Headers && (0, Ks.tH)(f, Headers)) {
                    const e = new Headers(f);
                    return e.append("sentry-trace", p), h && e.append(Ws.hF, h), e
                  }
                  if (Array.isArray(f)) {
                    const e = [...f, ["sentry-trace", p]];
                    return h && e.push([Ws.hF, h]), e
                  } {
                    const e = "baggage" in f ? f.baggage : void 0,
                      t = [];
                    return Array.isArray(e) ? t.push(...e) : e && t.push(e), h && t.push(h), {
                      ...f,
                      "sentry-trace": p,
                      baggage: t.length > 0 ? t.join(",") : void 0
                    }
                  }
                }
                return {
                  "sentry-trace": p,
                  baggage: h
                }
              }(t, c, a, n, p)
            }
            return p
          }(e, c, u, l);
          a && t && Ys(t)
        })), n && (0, X.Mn)((e => {
          const t = function(e, t, n, r) {
            const o = e.xhr,
              s = o && o[X.Er];
            if (!(0, qs.w)() || !o || o.__sentry_own_request__ || !s) return;
            const a = t(s.url);
            if (e.endTimestamp && a) {
              const e = o.__sentry_xhr_span_id__;
              if (!e) return;
              const t = r[e];
              return void(t && void 0 !== s.status_code && ((0, _.N8)(t, s.status_code), t.end(), delete r[e]))
            }
            const c = (0, d.o5)(),
              u = (0, i.rm)(),
              l = a ? (0, g.Uk)({
                name: `${s.method} ${s.url}`,
                onlyIfParent: !0,
                attributes: {
                  type: "xhr",
                  "http.method": s.method,
                  url: s.url,
                  [q.JD]: "auto.http.browser"
                },
                op: "http.client"
              }) : void 0;
            l && (o.__sentry_xhr_span_id__ = l.spanContext().spanId, r[o.__sentry_xhr_span_id__] = l);
            const p = (0, d.KU)();
            if (o.setRequestHeader && n(s.url) && p) {
              const {
                traceId: e,
                spanId: t,
                sampled: n,
                dsc: r
              } = {
                ...u.getPropagationContext(),
                ...c.getPropagationContext()
              };
              ! function(e, t, n) {
                try {
                  e.setRequestHeader("sentry-trace", t), n && e.setRequestHeader(Ws.hF, n)
                } catch (e) {}
              }(o, l ? (0, H.Qh)(l) : (0, Es.TC)(e, t, n), (0, Ws.De)(r || (l ? (0, zs.k)(l) : (0, zs.l)(e, p, c))))
            }
            return l
          }(e, c, u, l);
          a && t && Ys(t)
        }))
      }

      function Ys(e) {
        const {
          url: t
        } = (0, H.et)(e).data || {};
        if (!t || "string" != typeof t) return;
        const n = Ce("resource", (r => {
          let {
            entries: o
          } = r;
          o.forEach((r => {
            if (function(e) {
                return "resource" === e.entryType && "initiatorType" in e && "string" == typeof e.nextHopProtocol && ("fetch" === e.initiatorType || "xmlhttprequest" === e.initiatorType)
              }(r) && r.name.endsWith(t)) {
              const t = function(e) {
                const {
                  name: t,
                  version: n
                } = function(e) {
                  let t = "unknown",
                    n = "unknown",
                    r = "";
                  for (const o of e) {
                    if ("/" === o) {
                      [t, n] = e.split("/");
                      break
                    }
                    if (!isNaN(Number(o))) {
                      t = "h" === r ? "http" : r, n = e.split(r)[1];
                      break
                    }
                    r += o
                  }
                  return r === e && (t = r), {
                    name: t,
                    version: n
                  }
                }(e.nextHopProtocol), r = [];
                return r.push(["network.protocol.version", n], ["network.protocol.name", t]), V.k3 ? [...r, ["http.request.redirect_start", Xs(e.redirectStart)],
                  ["http.request.fetch_start", Xs(e.fetchStart)],
                  ["http.request.domain_lookup_start", Xs(e.domainLookupStart)],
                  ["http.request.domain_lookup_end", Xs(e.domainLookupEnd)],
                  ["http.request.connect_start", Xs(e.connectStart)],
                  ["http.request.secure_connection_start", Xs(e.secureConnectionStart)],
                  ["http.request.connection_end", Xs(e.connectEnd)],
                  ["http.request.request_start", Xs(e.requestStart)],
                  ["http.request.response_start", Xs(e.responseStart)],
                  ["http.request.response_end", Xs(e.responseEnd)]
                ] : r
              }(r);
              t.forEach((t => e.setAttribute(...t))), setTimeout(n)
            }
          }))
        }))
      }

      function Xs() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return ((V.k3 || performance.timeOrigin) + e) / 1e3
      }
      const Qs = {
        ...Ts.Cq,
        markBackgroundTransactions: !0,
        routingInstrumentation: function(e) {
          let t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          if (!ue || !ue.location) return void(ae && J.vF.warn("Could not initialize routing instrumentation due to invalid location"));
          let r, o = ue.location.href;
          t && (r = e({
            name: ue.location.pathname,
            startTimestamp: V.k3 ? V.k3 / 1e3 : void 0,
            op: "pageload",
            origin: "auto.pageload.browser",
            metadata: {
              source: "url"
            }
          })), n && (0, te._)((t => {
            let {
              to: n,
              from: s
            } = t;
            void 0 === s && o && -1 !== o.indexOf(n) ? o = void 0 : s !== n && (o = void 0, r && (ae && J.vF.log(`[Tracing] Finishing current transaction with op: ${r.op}`), r.end()), r = e({
              name: ue.location.pathname,
              op: "navigation",
              origin: "auto.navigation.browser",
              metadata: {
                source: "url"
              }
            }))
          }))
        },
        startTransactionOnLocationChange: !0,
        startTransactionOnPageLoad: !0,
        enableLongTask: !0,
        _experiments: {},
        ...Vs
      };
      class Zs {
        constructor(e) {
          this.name = "BrowserTracing", this._hasSetTracePropagationTargets = !1, (0, m.U)(), ae && (this._hasSetTracePropagationTargets = !(!e || !e.tracePropagationTargets && !e.tracingOrigins)), this.options = {
            ...Qs,
            ...e
          }, void 0 !== this.options._experiments.enableLongTask && (this.options.enableLongTask = this.options._experiments.enableLongTask), e && !e.tracePropagationTargets && e.tracingOrigins && (this.options.tracePropagationTargets = e.tracingOrigins), this._collectWebVitals = Ps(), this.options.enableLongTask && js(), this.options._experiments.enableInteractions && $s()
        }
        setupOnce(e, t) {
          this._getCurrentHub = t;
          const n = t().getClient(),
            r = n && n.getOptions(),
            {
              routingInstrumentation: o,
              startTransactionOnLocationChange: s,
              startTransactionOnPageLoad: i,
              markBackgroundTransactions: a,
              traceFetch: c,
              traceXHR: u,
              shouldCreateSpanForRequest: l,
              enableHTTPTimings: d,
              _experiments: p
            } = this.options,
            h = r && r.tracePropagationTargets,
            f = h || this.options.tracePropagationTargets;
          ae && this._hasSetTracePropagationTargets && h && J.vF.warn("[Tracing] The `tracePropagationTargets` option was set in the BrowserTracing integration and top level `Sentry.init`. The top level `Sentry.init` value is being used."), o((e => {
            const n = this._createRouteTransaction(e);
            return this.options._experiments.onStartRouteTransaction && this.options._experiments.onStartRouteTransaction(n, e, t), n
          }), i, s), a && xs(), p.enableInteractions && this._registerInteractionListener(), Js({
            traceFetch: c,
            traceXHR: u,
            tracePropagationTargets: f,
            shouldCreateSpanForRequest: l,
            enableHTTPTimings: d
          })
        }
        _createRouteTransaction(e) {
          if (!this._getCurrentHub) return void(ae && J.vF.warn(`[Tracing] Did not create ${e.op} transaction because _getCurrentHub is invalid.`));
          const t = this._getCurrentHub(),
            {
              beforeNavigate: n,
              idleTimeout: r,
              finalTimeout: o,
              heartbeatInterval: s
            } = this.options,
            i = "pageload" === e.op;
          let a;
          if (i) {
            const t = i ? ei("sentry-trace") : "",
              n = i ? ei("baggage") : void 0,
              {
                traceparentData: r,
                dynamicSamplingContext: o
              } = (0, Es.E0)(t, n);
            a = {
              ...e,
              ...r,
              metadata: {
                ...e.metadata,
                dynamicSamplingContext: r && !o ? {} : o
              },
              trimEnd: !0
            }
          } else a = {
            ...e,
            trimEnd: !0
          };
          const c = "function" == typeof n ? n(a) : a,
            u = void 0 === c ? {
              ...a,
              sampled: !1
            } : c;
          u.metadata = u.name !== a.name ? {
            ...u.metadata,
            source: "custom"
          } : u.metadata, this._latestRouteName = u.name, this._latestRouteSource = function(e) {
            const t = e.attributes && e.attributes[q.i_],
              n = e.data && e.data[q.i_],
              r = e.metadata && e.metadata.source;
            return t || n || r
          }(u), !1 === u.sampled && ae && J.vF.log(`[Tracing] Will not send ${u.op} transaction because of beforeNavigate.`), ae && J.vF.log(`[Tracing] Starting ${u.op} transaction on scope`);
          const {
            location: l
          } = ue, d = (0, m.p)(t, u, r, o, !0, {
            location: l
          }, s, i);
          return i && (ue.document.addEventListener("readystatechange", (() => {
            ["interactive", "complete"].includes(ue.document.readyState) && d.sendAutoFinishSignal()
          })), ["interactive", "complete"].includes(ue.document.readyState) && d.sendAutoFinishSignal()), d.registerBeforeFinishCallback((e => {
            this._collectWebVitals(), Bs(e)
          })), d
        }
        _registerInteractionListener() {
          let e;
          const t = () => {
            const {
              idleTimeout: t,
              finalTimeout: n,
              heartbeatInterval: r
            } = this.options, o = "ui.action.click", s = (0, y.Z7)();
            if (s && s.op && ["navigation", "pageload"].includes(s.op)) return void(ae && J.vF.warn(`[Tracing] Did not create ${o} transaction because a pageload or navigation transaction is in progress.`));
            if (e && (e.setFinishReason("interactionInterrupted"), e.end(), e = void 0), !this._getCurrentHub) return void(ae && J.vF.warn(`[Tracing] Did not create ${o} transaction because _getCurrentHub is invalid.`));
            if (!this._latestRouteName) return void(ae && J.vF.warn(`[Tracing] Did not create ${o} transaction because _latestRouteName is missing.`));
            const i = this._getCurrentHub(),
              {
                location: a
              } = ue,
              c = {
                name: this._latestRouteName,
                op: o,
                trimEnd: !0,
                data: {
                  [q.i_]: this._latestRouteSource || "url"
                }
              };
            e = (0, m.p)(i, c, t, n, !0, {
              location: a
            }, r)
          };
          ["click"].forEach((e => {
            addEventListener(e, t, {
              once: !1,
              capture: !0
            })
          }))
        }
      }

      function ei(e) {
        const t = (0, G.NX)(`meta[name=${e}]`);
        return t ? t.getAttribute("content") : void 0
      }
      const ti = {
          ...Ts.Cq,
          instrumentNavigation: !0,
          instrumentPageLoad: !0,
          markBackgroundSpan: !0,
          enableLongTask: !0,
          _experiments: {},
          ...Vs
        },
        ni = function() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          const t = !(!ae || !e.tracePropagationTargets && !e.tracingOrigins);
          (0, m.U)(), !e.tracePropagationTargets && e.tracingOrigins && (e.tracePropagationTargets = e.tracingOrigins);
          const n = {
              ...ti,
              ...e
            },
            r = Ps();
          let o, s;

          function a(e) {
            const t = (0, i.BF)(),
              {
                beforeStartSpan: a,
                idleTimeout: c,
                finalTimeout: u,
                heartbeatInterval: l
              } = n,
              d = "pageload" === e.op;
            let p;
            if (d) {
              const t = d ? si("sentry-trace") : "",
                n = d ? si("baggage") : void 0,
                {
                  traceparentData: r,
                  dynamicSamplingContext: o
                } = (0, Es.E0)(t, n);
              p = {
                ...e,
                ...r,
                metadata: {
                  ...e.metadata,
                  dynamicSamplingContext: r && !o ? {} : o
                },
                trimEnd: !0
              }
            } else p = {
              ...e,
              trimEnd: !0
            };
            const h = a ? a(p) : p;
            h.metadata = h.name !== p.name ? {
              ...h.metadata,
              source: "custom"
            } : h.metadata, o = h.name, s = function(e) {
              const t = e.attributes && e.attributes[q.i_],
                n = e.data && e.data[q.i_],
                r = e.metadata && e.metadata.source;
              return t || n || r
            }(h), !1 === h.sampled && ae && J.vF.log(`[Tracing] Will not send ${h.op} transaction because of beforeNavigate.`), ae && J.vF.log(`[Tracing] Starting ${h.op} transaction on scope`);
            const {
              location: f
            } = ue, g = (0, m.p)(t, h, c, u, !0, {
              location: f
            }, l, d);
            return d && (ue.document.addEventListener("readystatechange", (() => {
              ["interactive", "complete"].includes(ue.document.readyState) && g.sendAutoFinishSignal()
            })), ["interactive", "complete"].includes(ue.document.readyState) && g.sendAutoFinishSignal()), g.registerBeforeFinishCallback((e => {
              r(), Bs(e)
            })), g
          }
          return n.enableLongTask && js(), n._experiments.enableInteractions && $s(), {
            name: "BrowserTracing",
            setupOnce: () => {},
            afterAllSetup(e) {
              const r = e.getOptions(),
                {
                  markBackgroundSpan: c,
                  traceFetch: u,
                  traceXHR: l,
                  shouldCreateSpanForRequest: d,
                  enableHTTPTimings: p,
                  _experiments: h
                } = n,
                f = r && r.tracePropagationTargets,
                g = f || n.tracePropagationTargets;
              let v;
              ae && t && f && J.vF.warn("[Tracing] The `tracePropagationTargets` option was set in the BrowserTracing integration and top level `Sentry.init`. The top level `Sentry.init` value is being used.");
              let _ = ue.location.href;
              if (e.on && (e.on("startNavigationSpan", (e => {
                  v && (ae && J.vF.log(`[Tracing] Finishing current transaction with op: ${(0,H.et)(v).op}`), v.end()), v = a(e)
                })), e.on("startPageLoadSpan", (e => {
                  v && (ae && J.vF.log(`[Tracing] Finishing current transaction with op: ${(0,H.et)(v).op}`), v.end()), v = a(e)
                }))), n.instrumentPageLoad && e.emit) {
                const t = {
                  name: ue.location.pathname,
                  startTimestamp: V.k3 ? V.k3 / 1e3 : void 0,
                  op: "pageload",
                  origin: "auto.pageload.browser",
                  metadata: {
                    source: "url"
                  }
                };
                ri(e, t)
              }
              n.instrumentNavigation && e.emit && (0, te._)((t => {
                let {
                  to: n,
                  from: r
                } = t;
                if (void 0 === r && _ && -1 !== _.indexOf(n)) _ = void 0;
                else if (r !== n) {
                  _ = void 0;
                  const t = {
                    name: ue.location.pathname,
                    op: "navigation",
                    origin: "auto.navigation.browser",
                    metadata: {
                      source: "url"
                    }
                  };
                  oi(e, t)
                }
              })), c && xs(), h.enableInteractions && function(e, t, n) {
                let r;
                const o = () => {
                  const {
                    idleTimeout: o,
                    finalTimeout: s,
                    heartbeatInterval: a
                  } = e, c = "ui.action.click", u = (0, y.Z7)();
                  if (u && u.op && ["navigation", "pageload"].includes(u.op)) return void(ae && J.vF.warn(`[Tracing] Did not create ${c} transaction because a pageload or navigation transaction is in progress.`));
                  if (r && (r.setFinishReason("interactionInterrupted"), r.end(), r = void 0), !t) return void(ae && J.vF.warn(`[Tracing] Did not create ${c} transaction because _latestRouteName is missing.`));
                  const {
                    location: l
                  } = ue, d = {
                    name: t,
                    op: c,
                    trimEnd: !0,
                    data: {
                      [q.i_]: n || "url"
                    }
                  };
                  r = (0, m.p)((0, i.BF)(), d, o, s, !0, {
                    location: l
                  }, a)
                };
                ["click"].forEach((e => {
                  addEventListener(e, o, {
                    once: !1,
                    capture: !0
                  })
                }))
              }(n, o, s), Js({
                traceFetch: u,
                traceXHR: l,
                tracePropagationTargets: g,
                shouldCreateSpanForRequest: d,
                enableHTTPTimings: p
              })
            },
            options: n
          }
        };

      function ri(e, t) {
        e.emit && e.emit("startPageLoadSpan", t)
      }

      function oi(e, t) {
        e.emit && e.emit("startNavigationSpan", t)
      }

      function si(e) {
        const t = (0, G.NX)(`meta[name=${e}]`);
        return t ? t.getAttribute("content") : void 0
      }
      var ii = n(60809);

      function ai(e) {
        return new Promise(((t, n) => {
          e.oncomplete = e.onsuccess = () => t(e.result), e.onabort = e.onerror = () => n(e.error)
        }))
      }

      function ci(e) {
        return ai(e.getAllKeys())
      }

      function ui(e) {
        let t;

        function n() {
          return null == t && (t = function(e, t) {
            const n = indexedDB.open(e);
            n.onupgradeneeded = () => n.result.createObjectStore(t);
            const r = ai(n);
            return e => r.then((n => e(n.transaction(t, "readwrite").objectStore(t))))
          }(e.dbName || "sentry-offline", e.storeName || "queue")), t
        }
        return {
          insert: async t => {
            try {
              const r = await (0, ne.bN)(t, e.textEncoder);
              await
              function(e, t, n) {
                return e((e => ci(e).then((r => {
                  if (!(r.length >= n)) return e.put(t, Math.max(...r, 0) + 1), ai(e.transaction)
                }))))
              }(n(), r, e.maxQueueSize || 30)
            } catch (e) {}
          },
          pop: async () => {
            try {
              const t = await
              function(e) {
                return e((e => ci(e).then((t => {
                  if (0 !== t.length) return ai(e.get(t[0])).then((n => (e.delete(t[0]), ai(e.transaction).then((() => n)))))
                }))))
              }(n());
              if (t) return (0, ne.mE)(t, e.textEncoder || new TextEncoder, e.textDecoder || new TextDecoder)
            } catch (e) {}
          }
        }
      }

      function li(e) {
        return function(e) {
          return t => e({
            ...t,
            createStore: ui
          })
        }((0, ii.BP)(e))
      }
      var di = n(52358),
        pi = n(67606);
      const hi = 1e6,
        fi = String(0),
        mi = "main";
      let gi = "",
        vi = "",
        yi = "",
        _i = E.jf.navigator && E.jf.navigator.userAgent || "",
        bi = "";
      const Si = E.jf.navigator && E.jf.navigator.language || E.jf.navigator && E.jf.navigator.languages && E.jf.navigator.languages[0] || "",
        wi = E.jf.navigator && E.jf.navigator.userAgentData;
      var ki;

      function Ti(e, t, n, r) {
        if ("transaction" !== r.type) throw new TypeError("Profiling events may only be attached to transactions, this should never occur.");
        if (null == n) throw new TypeError(`Cannot construct profiling event envelope without a valid profile. Got ${n} instead.`);
        const o = function(e) {
            const t = e && e.contexts && e.contexts.trace && e.contexts.trace.trace_id;
            return "string" == typeof t && 32 !== t.length && di.T && J.vF.log(`[Profiling] Invalid traceId: ${t} on profiled event`), "string" != typeof t ? "" : t
          }(r),
          s = function(e) {
            return !("thread_metadata" in e)
          }(c = n) ? function(e) {
            let t, n = 0;
            const r = {
              samples: [],
              stacks: [],
              frames: [],
              thread_metadata: {
                [fi]: {
                  name: mi
                }
              }
            };
            if (!e.samples.length) return r;
            const o = e.samples[0].timestamp,
              s = "number" == typeof performance.timeOrigin ? performance.timeOrigin : V.k3 || 0,
              i = s - (V.k3 || s);
            for (let s = 0; s < e.samples.length; s++) {
              const a = e.samples[s];
              if (void 0 === a.stackId) {
                void 0 === t && (t = n, r.stacks[t] = [], n++), r.samples[s] = {
                  elapsed_since_start_ns: ((a.timestamp + i - o) * hi).toFixed(0),
                  stack_id: t,
                  thread_id: fi
                };
                continue
              }
              let c = e.stacks[a.stackId];
              const u = [];
              for (; c;) {
                u.push(c.frameId);
                const t = e.frames[c.frameId];
                void 0 === r.frames[c.frameId] && (r.frames[c.frameId] = {
                  function: t.name,
                  abs_path: "number" == typeof t.resourceId ? e.resources[t.resourceId] : void 0,
                  lineno: t.line,
                  colno: t.column
                }), c = void 0 === c.parentId ? void 0 : e.stacks[c.parentId]
              }
              const l = {
                elapsed_since_start_ns: ((a.timestamp + i - o) * hi).toFixed(0),
                stack_id: n,
                thread_id: fi
              };
              r.stacks[n] = u, r.samples[s] = l, n++
            }
            return r
          }(c) : c,
          i = t || ("number" == typeof r.start_timestamp ? 1e3 * r.start_timestamp : Date.now()),
          a = "number" == typeof r.timestamp ? 1e3 * r.timestamp : Date.now();
        var c;
        return {
          event_id: e,
          timestamp: new Date(i).toISOString(),
          platform: "javascript",
          version: "1",
          release: r.release || "",
          environment: r.environment || pi.U,
          runtime: {
            name: "javascript",
            version: E.jf.navigator.userAgent
          },
          os: {
            name: gi,
            version: vi,
            build_number: _i
          },
          device: {
            locale: Si,
            model: bi,
            manufacturer: _i,
            architecture: yi,
            is_emulator: !1
          },
          debug_meta: {
            images: Ci(n.resources)
          },
          profile: s,
          transactions: [{
            name: r.transaction || "",
            id: r.event_id || (0, Y.eJ)(),
            trace_id: o,
            active_thread_id: fi,
            relative_start_ns: "0",
            relative_end_ns: (1e6 * (a - i)).toFixed(0)
          }]
        }
      }

      function Ei(e) {
        return "pageload" === e.op
      }
      "object" == typeof(ki = wi) && null !== ki && "getHighEntropyValues" in ki && wi.getHighEntropyValues(["architecture", "model", "platform", "platformVersion", "fullVersionList"]).then((e => {
        if (gi = e.platform || "", yi = e.architecture || "", bi = e.model || "", vi = e.platformVersion || "", e.fullVersionList && e.fullVersionList.length > 0) {
          const t = e.fullVersionList[e.fullVersionList.length - 1];
          _i = `${t.brand} ${t.version}`
        }
      })).catch((e => {}));
      const xi = new WeakMap;

      function Ci(e) {
        const t = z.OW._sentryDebugIds;
        if (!t) return [];
        const n = (0, d.KU)(),
          r = n && n.getOptions(),
          o = r && r.stackParser;
        if (!o) return [];
        let s;
        const i = xi.get(o);
        i ? s = i : (s = new Map, xi.set(o, s));
        const a = Object.keys(t).reduce(((e, n) => {
            let r;
            const i = s.get(n);
            i ? r = i : (r = o(n), s.set(n, r));
            for (let o = r.length - 1; o >= 0; o--) {
              const s = r[o],
                i = s && s.filename;
              if (s && i) {
                e[i] = t[n];
                break
              }
            }
            return e
          }), {}),
          c = [];
        for (const t of e) t && a[t] && c.push({
          type: "sourcemap",
          code_file: t,
          debug_id: a[t]
        });
        return c
      }
      let Ii = !1;
      const Ri = 3e4;

      function Oi(e) {
        if (Ii) return di.T && J.vF.log("[Profiling] Profiling has been disabled for the duration of the current user session."), !1;
        if (!e.isRecording()) return di.T && J.vF.log("[Profiling] Discarding profile because transaction was not sampled."), !1;
        const t = (0, d.KU)(),
          n = t && t.getOptions();
        if (!n) return di.T && J.vF.log("[Profiling] Profiling disabled, no options found."), !1;
        const r = n.profilesSampleRate;
        return ("number" != typeof(o = r) && "boolean" != typeof o || "number" == typeof o && isNaN(o) ? (di.T && J.vF.warn(`[Profiling] Invalid sample rate. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(o)} of type ${JSON.stringify(typeof o)}.`), 0) : !0 === o || !1 === o || !(o < 0 || o > 1) || (di.T && J.vF.warn(`[Profiling] Invalid sample rate. Sample rate must be between 0 and 1. Got ${o}.`), 0)) ? r ? !!(!0 === r || Math.random() < r) || (di.T && J.vF.log(`[Profiling] Discarding profile because it's not included in the random sample (sampling rate = ${Number(r)})`), !1) : (di.T && J.vF.log("[Profiling] Discarding profile because a negative sampling decision was inherited or profileSampleRate is set to 0"), !1) : (di.T && J.vF.warn("[Profiling] Discarding profile because of invalid sample rate."), !1);
        var o
      }

      function Mi(e, t, n, r) {
        return function(e) {
          return e.samples.length < 2 ? (di.T && J.vF.log("[Profiling] Discarding profile because it contains less than 2 samples"), !1) : !!e.frames.length || (di.T && J.vF.log("[Profiling] Discarding profile because it contains no frames"), !1)
        }(n) ? Ti(e, t, n, r) : null
      }
      const Ai = new Map;

      function Fi(e) {
        const t = Ai.get(e);
        return t && Ai.delete(e), t
      }

      function Di(e) {
        return e ? Oi(e) ? Ni(e) : e : (di.T && J.vF.log("[Profiling] Transaction is undefined, skipping profiling"), e)
      }

      function Ni(e) {
        let t;
        Ei(e) && (t = 1e3 * (0, V.zf)());
        const n = function() {
          const e = E.jf.Profiler;
          if ("function" != typeof e) return void(di.T && J.vF.log("[Profiling] Profiling is not supported by this browser, Profiler interface missing on window object."));
          const t = Math.floor(Ri / 10);
          try {
            return new e({
              sampleInterval: 10,
              maxBufferSize: t
            })
          } catch (e) {
            di.T && (J.vF.log("[Profiling] Failed to initialize the Profiling constructor, this is likely due to a missing 'Document-Policy': 'js-profiling' header."), J.vF.log("[Profiling] Disabling profiling for current user session.")), Ii = !0
          }
        }();
        if (!n) return e;
        di.T && J.vF.log(`[Profiling] started profiling transaction: ${(0,H.et)(e).description}`);
        const r = (0, Y.eJ)();
        async function o() {
          return e && n ? n.stop().then((t => (s && (E.jf.clearTimeout(s), s = void 0), di.T && J.vF.log(`[Profiling] stopped profiling of transaction: ${(0,H.et)(e).description}`), t ? (function(e, t) {
            if (Ai.set(e, t), Ai.size > 30) {
              const e = Ai.keys().next().value;
              Ai.delete(e)
            }
          }(r, t), null) : (di.T && J.vF.log(`[Profiling] profiler returned null profile for: ${(0,H.et)(e).description}`, "this may indicate an overlapping transaction or a call to stopProfiling with a profile title that was never started"), null)))).catch((e => (di.T && J.vF.log("[Profiling] error while stopping profiler:", e), null))) : null
        }
        let s = E.jf.setTimeout((() => {
          di.T && J.vF.log("[Profiling] max profile duration elapsed, stopping profiling for:", (0, H.et)(e).description), o()
        }), Ri);
        const i = e.end.bind(e);
        return e.end = function() {
          return e ? (o().then((() => {
            e.setContext("profile", {
              profile_id: r,
              start_timestamp: t
            }), i()
          }), (() => {
            i()
          })), e) : i()
        }, e
      }
      const Li = "BrowserProfiling",
        Pi = (0, f.F)(Li, (() => ({
          name: Li,
          setupOnce() {},
          setup(e) {
            const t = (0, d.o5)().getTransaction();
            t && Ei(t) && Oi(t) && Ni(t), "function" == typeof e.on ? (e.on("startTransaction", (e => {
              Oi(e) && Ni(e)
            })), e.on("beforeEnvelope", (e => {
              if (!Ai.size) return;
              const t = function(e) {
                const t = [];
                return (0, ne.yH)(e, ((e, n) => {
                  if ("transaction" === n)
                    for (let n = 1; n < e.length; n++) {
                      const r = e[n];
                      r && r.contexts && r.contexts.profile && r.contexts.profile.profile_id && t.push(e[n])
                    }
                })), t
              }(e);
              if (!t.length) return;
              const n = [];
              for (const e of t) {
                const t = e && e.contexts,
                  r = t && t.profile && t.profile.profile_id,
                  o = t && t.profile && t.profile.start_timestamp;
                if ("string" != typeof r) {
                  di.T && J.vF.log("[Profiling] cannot find profile for a transaction without a profile context");
                  continue
                }
                if (!r) {
                  di.T && J.vF.log("[Profiling] cannot find profile for a transaction without a profile context");
                  continue
                }
                t && t.profile && delete t.profile;
                const s = Fi(r);
                if (!s) {
                  di.T && J.vF.log(`[Profiling] Could not retrieve profile for transaction: ${r}`);
                  continue
                }
                const i = Mi(r, o, s, e);
                i && n.push(i)
              }! function(e, t) {
                if (!t.length) return e;
                for (const n of t) e[1].push([{
                  type: "profile"
                }, n])
              }(e, n)
            }))) : J.vF.warn("[Profiling] Client does not support hooks, profiling will be disabled")
          }
        })));
      let ji = {};
      E.jf.Sentry && E.jf.Sentry.Integrations && (ji = E.jf.Sentry.Integrations);
      const $i = {
        ...ji,
        ...o.Integrations,
        ...r
      }
    },
    99024: (e, t, n) => {
      "use strict";
      n.d(t, {
        B: () => b,
        F: () => _
      });
      var r = n(90197),
        o = n(23388),
        s = n(78546),
        i = n(6803),
        a = n(27817),
        c = n(63335),
        u = n(77548),
        l = n(13817),
        d = n(97205),
        p = n(33421),
        h = n(69514),
        f = n(34860),
        m = n(59100),
        g = n(52358),
        v = n(22517);
      const y = "Breadcrumbs",
        _ = (0, r._C)((function() {
          const e = {
            console: !0,
            dom: !0,
            fetch: !0,
            history: !0,
            sentry: !0,
            xhr: !0,
            ...arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          };
          return {
            name: y,
            setupOnce() {},
            setup(t) {
              e.console && (0, s.P)(function(e) {
                return function(t) {
                  if ((0, o.KU)() !== e) return;
                  const n = {
                    category: "console",
                    data: {
                      arguments: t.args,
                      logger: "console"
                    },
                    level: (0, h.te)(t.level),
                    message: (0, f.gt)(t.args, " ")
                  };
                  if ("assert" === t.level) {
                    if (!1 !== t.args[0]) return;
                    n.message = `Assertion failed: ${(0,f.gt)(t.args.slice(1)," ")||"console.assert"}`, n.data.arguments = t.args.slice(1)
                  }(0, o.ZQ)(n, {
                    input: t.args,
                    level: t.level
                  })
                }
              }(t)), e.dom && (0, i.i)(function(e, t) {
                return function(n) {
                  if ((0, o.KU)() !== e) return;
                  let r, s, i = "object" == typeof t ? t.serializeAttribute : void 0,
                    a = "object" == typeof t && "number" == typeof t.maxStringLength ? t.maxStringLength : void 0;
                  a && a > 1024 && (g.T && d.vF.warn(`\`dom.maxStringLength\` cannot exceed 1024, but a value of ${a} was configured. Sentry will use 1024 instead.`), a = 1024), "string" == typeof i && (i = [i]);
                  try {
                    const e = n.event,
                      t = function(e) {
                        return !!e && !!e.target
                      }(e) ? e.target : e;
                    r = (0, p.Hd)(t, {
                      keyAttrs: i,
                      maxStringLength: a
                    }), s = (0, p.xE)(t)
                  } catch (e) {
                    r = "<unknown>"
                  }
                  if (0 === r.length) return;
                  const c = {
                    category: `ui.${n.name}`,
                    message: r
                  };
                  s && (c.data = {
                    "ui.component_name": s
                  }), (0, o.ZQ)(c, {
                    event: n.event,
                    name: n.name,
                    global: n.global
                  })
                }
              }(t, e.dom)), e.xhr && (0, a.Mn)(function(e) {
                return function(t) {
                  if ((0, o.KU)() !== e) return;
                  const {
                    startTimestamp: n,
                    endTimestamp: r
                  } = t, s = t.xhr[a.Er];
                  if (!n || !r || !s) return;
                  const {
                    method: i,
                    url: c,
                    status_code: u,
                    body: l
                  } = s, d = {
                    method: i,
                    url: c,
                    status_code: u
                  }, p = {
                    xhr: t.xhr,
                    input: l,
                    startTimestamp: n,
                    endTimestamp: r
                  };
                  (0, o.ZQ)({
                    category: "xhr",
                    data: d,
                    type: "http"
                  }, p)
                }
              }(t)), e.fetch && (0, c.u)(function(e) {
                return function(t) {
                  if ((0, o.KU)() !== e) return;
                  const {
                    startTimestamp: n,
                    endTimestamp: r
                  } = t;
                  if (r && (!t.fetchData.url.match(/sentry_key/) || "POST" !== t.fetchData.method))
                    if (t.error) {
                      const e = t.fetchData,
                        s = {
                          data: t.error,
                          input: t.args,
                          startTimestamp: n,
                          endTimestamp: r
                        };
                      (0, o.ZQ)({
                        category: "fetch",
                        data: e,
                        level: "error",
                        type: "http"
                      }, s)
                    } else {
                      const e = t.response,
                        s = {
                          ...t.fetchData,
                          status_code: e && e.status
                        },
                        i = {
                          input: t.args,
                          response: e,
                          startTimestamp: n,
                          endTimestamp: r
                        };
                      (0, o.ZQ)({
                        category: "fetch",
                        data: s,
                        type: "http"
                      }, i)
                    }
                }
              }(t)), e.history && (0, u._)(function(e) {
                return function(t) {
                  if ((0, o.KU)() !== e) return;
                  let n = t.from,
                    r = t.to;
                  const s = (0, m.Dl)(v.jf.location.href);
                  let i = n ? (0, m.Dl)(n) : void 0;
                  const a = (0, m.Dl)(r);
                  i && i.path || (i = s), s.protocol === a.protocol && s.host === a.host && (r = a.relative), s.protocol === i.protocol && s.host === i.host && (n = i.relative), (0, o.ZQ)({
                    category: "navigation",
                    data: {
                      from: n,
                      to: r
                    }
                  })
                }
              }(t)), e.sentry && t.on && t.on("beforeSendEvent", function(e) {
                return function(t) {
                  (0, o.KU)() === e && (0, o.ZQ)({
                    category: "sentry." + ("transaction" === t.type ? "transaction" : "event"),
                    event_id: t.event_id,
                    level: t.level,
                    message: (0, l.$X)(t)
                  }, {
                    event: t
                  })
                }
              }(t))
            }
          }
        })),
        b = (0, r.F)(y, _)
    },
    20279: (e, t, n) => {
      "use strict";
      n.d(t, {
        U: () => c,
        s: () => a
      });
      var r = n(90197),
        o = n(97205),
        s = n(52358);
      const i = "Dedupe",
        a = (0, r._C)((() => {
          let e;
          return {
            name: i,
            setupOnce() {},
            processEvent(t) {
              if (t.type) return t;
              try {
                if (function(e, t) {
                    return !!t && (!! function(e, t) {
                      const n = e.message,
                        r = t.message;
                      return !(!n && !r) && (!(n && !r || !n && r) && (n === r && (!!l(e, t) && !!u(e, t))))
                    }(e, t) || !! function(e, t) {
                      const n = d(t),
                        r = d(e);
                      return !(!n || !r) && (n.type === r.type && n.value === r.value && (!!l(e, t) && !!u(e, t)))
                    }(e, t))
                  }(t, e)) return s.T && o.vF.warn("Event dropped due to being a duplicate of previously captured event."), null
              } catch (e) {}
              return e = t
            }
          }
        })),
        c = (0, r.F)(i, a);

      function u(e, t) {
        let n = p(e),
          r = p(t);
        if (!n && !r) return !0;
        if (n && !r || !n && r) return !1;
        if (r.length !== n.length) return !1;
        for (let e = 0; e < r.length; e++) {
          const t = r[e],
            o = n[e];
          if (t.filename !== o.filename || t.lineno !== o.lineno || t.colno !== o.colno || t.function !== o.function) return !1
        }
        return !0
      }

      function l(e, t) {
        let n = e.fingerprint,
          r = t.fingerprint;
        if (!n && !r) return !0;
        if (n && !r || !n && r) return !1;
        try {
          return !(n.join("") !== r.join(""))
        } catch (e) {
          return !1
        }
      }

      function d(e) {
        return e.exception && e.exception.values && e.exception.values[0]
      }

      function p(e) {
        const t = e.exception;
        if (t) try {
          return t.values[0].stacktrace.frames
        } catch (e) {
          return
        }
      }
    },
    94586: (e, t, n) => {
      "use strict";
      n.d(t, {
        L: () => f,
        R: () => m
      });
      var r = n(90197),
        o = n(23388),
        s = n(82076),
        i = n(44877),
        a = n(11526),
        c = n(33421),
        u = n(97205),
        l = n(52358),
        d = n(3665),
        p = n(22517);
      const h = "GlobalHandlers",
        f = (0, r._C)((function() {
          const e = {
            onerror: !0,
            onunhandledrejection: !0,
            ...arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          };
          return {
            name: h,
            setupOnce() {
              Error.stackTraceLimit = 50
            },
            setup(t) {
              e.onerror && (function(e) {
                (0, s.L)((t => {
                  const {
                    stackParser: n,
                    attachStacktrace: r
                  } = y();
                  if ((0, o.KU)() !== e || (0, p.jN)()) return;
                  const {
                    msg: s,
                    url: a,
                    line: c,
                    column: u,
                    error: l
                  } = t, h = void 0 === l && (0, i.Kg)(s) ? function(e, t, n, r) {
                    let o = (0, i.T2)(e) ? e.message : e,
                      s = "Error";
                    const a = o.match(/^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i);
                    a && (s = a[1], o = a[2]);
                    return g({
                      exception: {
                        values: [{
                          type: s,
                          value: o
                        }]
                      }
                    }, t, n, r)
                  }(s, a, c, u) : g((0, d.H7)(n, l || s, void 0, r, !1), a, c, u);
                  h.level = "error", (0, o.r)(h, {
                    originalException: l,
                    mechanism: {
                      handled: !1,
                      type: "onerror"
                    }
                  })
                }))
              }(t), v("onerror")), e.onunhandledrejection && (function(e) {
                (0, a.r)((t => {
                  const {
                    stackParser: n,
                    attachStacktrace: r
                  } = y();
                  if ((0, o.KU)() !== e || (0, p.jN)()) return;
                  const s = function(e) {
                      if ((0, i.sO)(e)) return e;
                      const t = e;
                      try {
                        if ("reason" in t) return t.reason;
                        if ("detail" in t && "reason" in t.detail) return t.detail.reason
                      } catch (e) {}
                      return e
                    }(t),
                    a = (0, i.sO)(s) ? {
                      exception: {
                        values: [{
                          type: "UnhandledRejection",
                          value: `Non-Error promise rejection captured with value: ${String(s)}`
                        }]
                      }
                    } : (0, d.H7)(n, s, void 0, r, !0);
                  a.level = "error", (0, o.r)(a, {
                    originalException: s,
                    mechanism: {
                      handled: !1,
                      type: "onunhandledrejection"
                    }
                  })
                }))
              }(t), v("onunhandledrejection"))
            }
          }
        })),
        m = (0, r.F)(h, f);

      function g(e, t, n, r) {
        const o = e.exception = e.exception || {},
          s = o.values = o.values || [],
          a = s[0] = s[0] || {},
          u = a.stacktrace = a.stacktrace || {},
          l = u.frames = u.frames || [],
          d = isNaN(parseInt(r, 10)) ? void 0 : r,
          p = isNaN(parseInt(n, 10)) ? void 0 : n,
          h = (0, i.Kg)(t) && t.length > 0 ? t : (0, c.$N)();
        return 0 === l.length && l.push({
          colno: d,
          filename: h,
          function: "?",
          in_app: !0,
          lineno: p
        }), e
      }

      function v(e) {
        l.T && u.vF.log(`Global Handler attached: ${e}`)
      }

      function y() {
        const e = (0, o.KU)();
        return e && e.getOptions() || {
          stackParser: () => [],
          attachStacktrace: !1
        }
      }
    },
    45633: (e, t, n) => {
      "use strict";
      n.d(t, {
        M: () => i,
        _: () => a
      });
      var r = n(90197),
        o = n(22517);
      const s = "HttpContext",
        i = (0, r._C)((() => ({
          name: s,
          setupOnce() {},
          preprocessEvent(e) {
            if (!o.jf.navigator && !o.jf.location && !o.jf.document) return;
            const t = e.request && e.request.url || o.jf.location && o.jf.location.href,
              {
                referrer: n
              } = o.jf.document || {},
              {
                userAgent: r
              } = o.jf.navigator || {},
              s = {
                ...e.request && e.request.headers,
                ...n && {
                  Referer: n
                },
                ...r && {
                  "User-Agent": r
                }
              },
              i = {
                ...e.request,
                ...t && {
                  url: t
                },
                headers: s
              };
            e.request = i
          }
        }))),
        a = (0, r.F)(s, i)
    },
    14646: (e, t, n) => {
      "use strict";
      n.d(t, {
        l: () => c,
        p: () => a
      });
      var r = n(90197),
        o = n(47220),
        s = n(3665);
      const i = "LinkedErrors",
        a = (0, r._C)((function() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          const t = e.limit || 5,
            n = e.key || "cause";
          return {
            name: i,
            setupOnce() {},
            preprocessEvent(e, r, i) {
              const a = i.getOptions();
              (0, o.Q)(s.K8, a.stackParser, a.maxValueLength, n, t, e, r)
            }
          }
        })),
        c = (0, r.F)(i, a)
    },
    54292: (e, t, n) => {
      "use strict";
      n.d(t, {
        G: () => u,
        h: () => l
      });
      var r = n(90197),
        o = n(98478),
        s = n(46600),
        i = n(22517);
      const a = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "BroadcastChannel", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "SharedWorker", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"],
        c = "TryCatch",
        u = (0, r._C)((function() {
          const e = {
            XMLHttpRequest: !0,
            eventTarget: !0,
            requestAnimationFrame: !0,
            setInterval: !0,
            setTimeout: !0,
            ...arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          };
          return {
            name: c,
            setupOnce() {
              e.setTimeout && (0, o.GS)(i.jf, "setTimeout", d), e.setInterval && (0, o.GS)(i.jf, "setInterval", d), e.requestAnimationFrame && (0, o.GS)(i.jf, "requestAnimationFrame", p), e.XMLHttpRequest && "XMLHttpRequest" in i.jf && (0, o.GS)(XMLHttpRequest.prototype, "send", h);
              const t = e.eventTarget;
              t && (Array.isArray(t) ? t : a).forEach(f)
            }
          }
        })),
        l = (0, r.F)(c, u);

      function d(e) {
        return function() {
          for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
          const o = n[0];
          return n[0] = (0, i.LV)(o, {
            mechanism: {
              data: {
                function: (0, s.qQ)(e)
              },
              handled: !1,
              type: "instrument"
            }
          }), e.apply(this, n)
        }
      }

      function p(e) {
        return function(t) {
          return e.apply(this, [(0, i.LV)(t, {
            mechanism: {
              data: {
                function: "requestAnimationFrame",
                handler: (0, s.qQ)(e)
              },
              handled: !1,
              type: "instrument"
            }
          })])
        }
      }

      function h(e) {
        return function() {
          const t = this;
          ["onload", "onerror", "onprogress", "onreadystatechange"].forEach((e => {
            e in t && "function" == typeof t[e] && (0, o.GS)(t, e, (function(t) {
              const n = {
                  mechanism: {
                    data: {
                      function: e,
                      handler: (0, s.qQ)(t)
                    },
                    handled: !1,
                    type: "instrument"
                  }
                },
                r = (0, o.sp)(t);
              return r && (n.mechanism.data.handler = (0, s.qQ)(r)), (0, i.LV)(t, n)
            }))
          }));
          for (var n = arguments.length, r = new Array(n), a = 0; a < n; a++) r[a] = arguments[a];
          return e.apply(this, r)
        }
      }

      function f(e) {
        const t = i.jf,
          n = t[e] && t[e].prototype;
        n && n.hasOwnProperty && n.hasOwnProperty("addEventListener") && ((0, o.GS)(n, "addEventListener", (function(t) {
          return function(n, r, o) {
            try {
              "function" == typeof r.handleEvent && (r.handleEvent = (0, i.LV)(r.handleEvent, {
                mechanism: {
                  data: {
                    function: "handleEvent",
                    handler: (0, s.qQ)(r),
                    target: e
                  },
                  handled: !1,
                  type: "instrument"
                }
              }))
            } catch (e) {}
            return t.apply(this, [n, (0, i.LV)(r, {
              mechanism: {
                data: {
                  function: "addEventListener",
                  handler: (0, s.qQ)(r),
                  target: e
                },
                handled: !1,
                type: "instrument"
              }
            }), o])
          }
        })), (0, o.GS)(n, "removeEventListener", (function(e) {
          return function(t, n, r) {
            const o = n;
            try {
              const n = o && o.__sentry_wrapped__;
              n && e.call(this, t, n, r)
            } catch (e) {}
            return e.call(this, t, o, r)
          }
        })))
      }
    },
    68664: (e, t, n) => {
      "use strict";
      n.d(t, {
        LV: () => A,
        Ts: () => I,
        kF: () => M,
        lo: () => F,
        mn: () => R,
        nI: () => C,
        w7: () => O,
        xg: () => x
      });
      var r = n(58943),
        o = n(903),
        s = n(90197),
        i = n(49451),
        a = n(37452),
        c = n(36839),
        u = n(23388),
        l = n(46600),
        d = n(40285),
        p = n(97205),
        h = n(77548),
        f = n(21321),
        m = n(52358),
        g = n(22517),
        v = n(99024),
        y = n(20279),
        _ = n(94586),
        b = n(45633),
        S = n(14646),
        w = n(54292),
        k = n(52953),
        T = n(64019),
        E = n(60965);
      const x = [(0, r.D)(), (0, o.Z)(), (0, w.G)(), (0, v.F)(), (0, _.L)(), (0, S.p)(), (0, y.s)(), (0, b.M)()];

      function C(e) {
        return [...x]
      }

      function I() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        void 0 === e.defaultIntegrations && (e.defaultIntegrations = C()), void 0 === e.release && ("string" == typeof __SENTRY_RELEASE__ && (e.release = __SENTRY_RELEASE__), g.jf.SENTRY_RELEASE && g.jf.SENTRY_RELEASE.id && (e.release = g.jf.SENTRY_RELEASE.id)), void 0 === e.autoSessionTracking && (e.autoSessionTracking = !0), void 0 === e.sendClientReports && (e.sendClientReports = !0);
        const t = {
          ...e,
          stackParser: (0, l.vk)(e.stackParser || k.lG),
          integrations: (0, s.mH)(e),
          transport: e.transport || ((0, d.vm)() ? T._ : E.u)
        };
        (0, i.J)(f.y, t), e.autoSessionTracking && (void 0 !== g.jf.document ? ((0, u.J0)({
          ignoreDuration: !0
        }), (0, u.J5)(), (0, h._)((e => {
          let {
            from: t,
            to: n
          } = e;
          void 0 !== t && t !== n && ((0, u.J0)({
            ignoreDuration: !0
          }), (0, u.J5)())
        }))) : m.T && p.vF.warn("Session tracking in non-browser environment with @sentry/browser is not supported."))
      }
      const R = function() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : (0, a.BF)();
        if (!g.jf.document) return void(m.T && p.vF.error("Global document not defined in showReportDialog call"));
        const {
          client: n,
          scope: r
        } = t.getStackTop(), o = e.dsn || n && n.getDsn();
        if (!o) return void(m.T && p.vF.error("DSN not configured for showReportDialog call"));
        r && (e.user = {
          ...r.getUser(),
          ...e.user
        }), e.eventId || (e.eventId = t.lastEventId());
        const s = g.jf.document.createElement("script");
        s.async = !0, s.crossOrigin = "anonymous", s.src = (0, c.k)(o, e), e.onLoad && (s.onload = e.onLoad);
        const {
          onClose: i
        } = e;
        if (i) {
          const e = t => {
            if ("__sentry_reportdialog_closed__" === t.data) try {
              i()
            } finally {
              g.jf.removeEventListener("message", e)
            }
          };
          g.jf.addEventListener("message", e)
        }
        const u = g.jf.document.head || g.jf.document.body;
        u ? u.appendChild(s) : m.T && p.vF.error("Not injecting report dialog. No injection point found in HTML")
      };

      function O() {}

      function M(e) {
        e()
      }

      function A(e) {
        return (0, g.LV)(e)()
      }

      function F(e) {
        const t = (0, u.KU)();
        t && t.captureUserFeedback(e)
      }
    },
    52953: (e, t, n) => {
      "use strict";
      n.d(t, {
        $2: () => h,
        Q_: () => m,
        Vv: () => v,
        Yj: () => c,
        c9: () => y,
        dY: () => d,
        lG: () => _
      });
      var r = n(46600);
      const o = "?";

      function s(e, t, n, r) {
        const o = {
          filename: e,
          function: t,
          in_app: !0
        };
        return void 0 !== n && (o.lineno = n), void 0 !== r && (o.colno = r), o
      }
      const i = /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
        a = /\((\S*)(?::(\d+))(?::(\d+))\)/,
        c = [30, e => {
          const t = i.exec(e);
          if (t) {
            if (t[2] && 0 === t[2].indexOf("eval")) {
              const e = a.exec(t[2]);
              e && (t[2] = e[1], t[3] = e[2], t[4] = e[3])
            }
            const [e, n] = b(t[1] || o, t[2]);
            return s(n, e, t[3] ? +t[3] : void 0, t[4] ? +t[4] : void 0)
          }
        }],
        u = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
        l = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
        d = [50, e => {
          const t = u.exec(e);
          if (t) {
            if (t[3] && t[3].indexOf(" > eval") > -1) {
              const e = l.exec(t[3]);
              e && (t[1] = t[1] || "eval", t[3] = e[1], t[4] = e[2], t[5] = "")
            }
            let e = t[3],
              n = t[1] || o;
            return [n, e] = b(n, e), s(e, n, t[4] ? +t[4] : void 0, t[5] ? +t[5] : void 0)
          }
        }],
        p = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:[-a-z]+):.*?):(\d+)(?::(\d+))?\)?\s*$/i,
        h = [40, e => {
          const t = p.exec(e);
          return t ? s(t[2], t[1] || o, +t[3], t[4] ? +t[4] : void 0) : void 0
        }],
        f = / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i,
        m = [10, e => {
          const t = f.exec(e);
          return t ? s(t[2], t[3] || o, +t[1]) : void 0
        }],
        g = / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^)]+))\(.*\))? in (.*):\s*$/i,
        v = [20, e => {
          const t = g.exec(e);
          return t ? s(t[5], t[3] || t[4] || o, +t[1], +t[2]) : void 0
        }],
        y = [c, d, h],
        _ = (0, r.gd)(...y),
        b = (e, t) => {
          const n = -1 !== e.indexOf("safari-extension"),
            r = -1 !== e.indexOf("safari-web-extension");
          return n || r ? [-1 !== e.indexOf("@") ? e.split("@")[0] : o, n ? `safari-extension:${t}` : `safari-web-extension:${t}`] : [e, t]
        }
    },
    64019: (e, t, n) => {
      "use strict";
      n.d(t, {
        _: () => l
      });
      var r = n(38521),
        o = n(84541),
        s = n(40285),
        i = n(97205),
        a = n(52358),
        c = n(22517);
      let u;

      function l(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {
            if (u) return u;
            if ((0, s.ap)(c.jf.fetch)) return u = c.jf.fetch.bind(c.jf);
            const e = c.jf.document;
            let t = c.jf.fetch;
            if (e && "function" == typeof e.createElement) try {
              const n = e.createElement("iframe");
              n.hidden = !0, e.head.appendChild(n);
              const r = n.contentWindow;
              r && r.fetch && (t = r.fetch), e.head.removeChild(n)
            } catch (e) {
              a.T && i.vF.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", e)
            }
            return u = t.bind(c.jf)
          }(),
          n = 0,
          l = 0;
        return (0, r.o)(e, (function(r) {
          const s = r.body.length;
          n += s, l++;
          const i = {
            body: r.body,
            method: "POST",
            referrerPolicy: "origin",
            headers: e.headers,
            keepalive: n <= 6e4 && l < 15,
            ...e.fetchOptions
          };
          try {
            return t(e.url, i).then((e => (n -= s, l--, {
              statusCode: e.status,
              headers: {
                "x-sentry-rate-limits": e.headers.get("X-Sentry-Rate-Limits"),
                "retry-after": e.headers.get("Retry-After")
              }
            })))
          } catch (e) {
            return u = void 0, n -= s, l--, (0, o.xg)(e)
          }
        }))
      }
    },
    60965: (e, t, n) => {
      "use strict";
      n.d(t, {
        u: () => i
      });
      var r = n(38521),
        o = n(84541);
      const s = 4;

      function i(e) {
        return (0, r.o)(e, (function(t) {
          return new o.T2(((n, r) => {
            const o = new XMLHttpRequest;
            o.onerror = r, o.onreadystatechange = () => {
              o.readyState === s && n({
                statusCode: o.status,
                headers: {
                  "x-sentry-rate-limits": o.getResponseHeader("X-Sentry-Rate-Limits"),
                  "retry-after": o.getResponseHeader("Retry-After")
                }
              })
            }, o.open("POST", e.url);
            for (const t in e.headers) Object.prototype.hasOwnProperty.call(e.headers, t) && o.setRequestHeader(t, e.headers[t]);
            o.send(t.body)
          }))
        }))
      }
    },
    7194: (e, t, n) => {
      "use strict";
      n.d(t, {
        L: () => s
      });
      var r = n(93088),
        o = n(21249);

      function s(e, t) {
        let {
          metadata: n,
          tunnel: s,
          dsn: i
        } = t;
        const a = {
            event_id: e.event_id,
            sent_at: (new Date).toISOString(),
            ...n && n.sdk && {
              sdk: {
                name: n.sdk.name,
                version: n.sdk.version
              }
            },
            ...!!s && !!i && {
              dsn: (0, r.SB)(i)
            }
          },
          c = function(e) {
            return [{
              type: "user_report"
            }, e]
          }(e);
        return (0, o.h4)(a, [c])
      }
    },
    36839: (e, t, n) => {
      "use strict";
      n.d(t, {
        Z: () => a,
        k: () => c
      });
      var r = n(98478),
        o = n(93088);
      const s = "7";

      function i(e) {
        const t = e.protocol ? `${e.protocol}:` : "",
          n = e.port ? `:${e.port}` : "";
        return `${t}//${e.host}${n}${e.path?`/${e.path}`:""}/api/`
      }

      function a(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const n = "string" == typeof t ? t : t.tunnel,
          o = "string" != typeof t && t._metadata ? t._metadata.sdk : void 0;
        return n || `${function(e){return`${i(e)}${e.projectId}/envelope/`}(e)}?${function(e,t){return(0,r.u4)({sentry_key:e.publicKey,sentry_version:s,...t&&{sentry_client:`${t.name}/${t.version}`}})}(e,o)}`
      }

      function c(e, t) {
        const n = (0, o.AD)(e);
        if (!n) return "";
        const r = `${i(n)}embed/error-page/`;
        let s = `dsn=${(0,o.SB)(n)}`;
        for (const e in t)
          if ("dsn" !== e && "onClose" !== e)
            if ("user" === e) {
              const e = t.user;
              if (!e) continue;
              e.name && (s += `&name=${encodeURIComponent(e.name)}`), e.email && (s += `&email=${encodeURIComponent(e.email)}`)
            } else s += `&${encodeURIComponent(e)}=${encodeURIComponent(t[e])}`;
        return `${r}?${s}`
      }
    },
    80670: (e, t, n) => {
      "use strict";
      n.d(t, {
        V: () => S,
        S: () => T
      });
      var r = n(93088),
        o = n(97205),
        s = n(13817),
        i = n(44877),
        a = n(84541),
        c = n(21249),
        u = n(46951),
        l = n(36839),
        d = n(95033),
        p = n(73051),
        h = n(23388),
        f = n(37452),
        m = n(90197),
        g = n(17504);
      var v = n(1587),
        y = n(53951),
        _ = n(9332);
      const b = "Not capturing exception because it's already been captured.";
      class S {
        constructor(e) {
          if (this._options = e, this._integrations = {}, this._integrationsInitialized = !1, this._numProcessing = 0, this._outcomes = {}, this._hooks = {}, this._eventProcessors = [], e.dsn ? this._dsn = (0, r.AD)(e.dsn) : d.T && o.vF.warn("No DSN provided, client will not send events."), this._dsn) {
            const t = (0, l.Z)(this._dsn, e);
            this._transport = e.transport({
              recordDroppedEvent: this.recordDroppedEvent.bind(this),
              ...e.transportOptions,
              url: t
            })
          }
        }
        captureException(e, t, n) {
          if ((0, s.GR)(e)) return void(d.T && o.vF.log(b));
          let r = t && t.event_id;
          return this._process(this.eventFromException(e, t).then((e => this._captureEvent(e, t, n))).then((e => {
            r = e
          }))), r
        }
        captureMessage(e, t, n, r) {
          let o = n && n.event_id;
          const s = (0, i.NF)(e) ? e : String(e),
            a = (0, i.sO)(e) ? this.eventFromMessage(s, t, n) : this.eventFromException(e, n);
          return this._process(a.then((e => this._captureEvent(e, n, r))).then((e => {
            o = e
          }))), o
        }
        captureEvent(e, t, n) {
          if (t && t.originalException && (0, s.GR)(t.originalException)) return void(d.T && o.vF.log(b));
          let r = t && t.event_id;
          return this._process(this._captureEvent(e, t, n).then((e => {
            r = e
          }))), r
        }
        captureSession(e) {
          "string" != typeof e.release ? d.T && o.vF.warn("Discarded session because of missing or non-string release") : (this.sendSession(e), (0, v.qO)(e, {
            init: !1
          }))
        }
        getDsn() {
          return this._dsn
        }
        getOptions() {
          return this._options
        }
        getSdkMetadata() {
          return this._options._metadata
        }
        getTransport() {
          return this._transport
        }
        flush(e) {
          const t = this._transport;
          return t ? (this.metricsAggregator && this.metricsAggregator.flush(), this._isClientDoneProcessing(e).then((n => t.flush(e).then((e => n && e))))) : (0, a.XW)(!0)
        }
        close(e) {
          return this.flush(e).then((e => (this.getOptions().enabled = !1, this.metricsAggregator && this.metricsAggregator.close(), e)))
        }
        getEventProcessors() {
          return this._eventProcessors
        }
        addEventProcessor(e) {
          this._eventProcessors.push(e)
        }
        setupIntegrations(e) {
          (e && !this._integrationsInitialized || this._isEnabled() && !this._integrationsInitialized) && this._setupIntegrations()
        }
        init() {
          this._isEnabled() && this._setupIntegrations()
        }
        getIntegrationById(e) {
          return this.getIntegrationByName(e)
        }
        getIntegrationByName(e) {
          return this._integrations[e]
        }
        getIntegration(e) {
          try {
            return this._integrations[e.id] || null
          } catch (t) {
            return d.T && o.vF.warn(`Cannot retrieve integration ${e.id} from the current Client`), null
          }
        }
        addIntegration(e) {
          const t = this._integrations[e.name];
          (0, m.qm)(this, e, this._integrations), t || (0, m.lc)(this, [e])
        }
        sendEvent(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          this.emit("beforeSendEvent", e, t);
          let n = (0, p.V)(e, this._dsn, this._options._metadata, this._options.tunnel);
          for (const e of t.attachments || []) n = (0, c.W3)(n, (0, c.bm)(e, this._options.transportOptions && this._options.transportOptions.textEncoder));
          const r = this._sendEnvelope(n);
          r && r.then((t => this.emit("afterSendEvent", e, t)), null)
        }
        sendSession(e) {
          const t = (0, p.L)(e, this._dsn, this._options._metadata, this._options.tunnel);
          this._sendEnvelope(t)
        }
        recordDroppedEvent(e, t, n) {
          if (this._options.sendClientReports) {
            const n = `${e}:${t}`;
            d.T && o.vF.log(`Adding outcome: "${n}"`), this._outcomes[n] = this._outcomes[n] + 1 || 1
          }
        }
        captureAggregateMetrics(e) {
          d.T && o.vF.log(`Flushing aggregated metrics, number of metrics: ${e.length}`);
          const t = function(e, t, n, o) {
            const s = {
              sent_at: (new Date).toISOString()
            };
            n && n.sdk && (s.sdk = {
              name: n.sdk.name,
              version: n.sdk.version
            }), o && t && (s.dsn = (0, r.SB)(t));
            const i = function(e) {
              const t = (0, g.ik)(e);
              return [{
                type: "statsd",
                length: t.length
              }, t]
            }(e);
            return (0, c.h4)(s, [i])
          }(e, this._dsn, this._options._metadata, this._options.tunnel);
          this._sendEnvelope(t)
        }
        on(e, t) {
          this._hooks[e] || (this._hooks[e] = []), this._hooks[e].push(t)
        }
        emit(e) {
          for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
          this._hooks[e] && this._hooks[e].forEach((e => e(...n)))
        }
        _setupIntegrations() {
          const {
            integrations: e
          } = this._options;
          this._integrations = (0, m.P$)(this, e), (0, m.lc)(this, e), this._integrationsInitialized = !0
        }
        _updateSessionFromEvent(e, t) {
          let n = !1,
            r = !1;
          const o = t.exception && t.exception.values;
          if (o) {
            r = !0;
            for (const e of o) {
              const t = e.mechanism;
              if (t && !1 === t.handled) {
                n = !0;
                break
              }
            }
          }
          const s = "ok" === e.status;
          (s && 0 === e.errors || s && n) && ((0, v.qO)(e, {
            ...n && {
              status: "crashed"
            },
            errors: e.errors || Number(r || n)
          }), this.captureSession(e))
        }
        _isClientDoneProcessing(e) {
          return new a.T2((t => {
            let n = 0;
            const r = setInterval((() => {
              0 == this._numProcessing ? (clearInterval(r), t(!0)) : (n += 1, e && n >= e && (clearInterval(r), t(!1)))
            }), 1)
          }))
        }
        _isEnabled() {
          return !1 !== this.getOptions().enabled && void 0 !== this._transport
        }
        _prepareEvent(e, t, n) {
          let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : (0, f.rm)();
          const o = this.getOptions(),
            s = Object.keys(this._integrations);
          return !t.integrations && s.length > 0 && (t.integrations = s), this.emit("preprocessEvent", e, t), (0, _.mG)(o, e, t, n, this, r).then((e => {
            if (null === e) return e;
            const t = {
              ...r.getPropagationContext(),
              ...n ? n.getPropagationContext() : void 0
            };
            if ((!e.contexts || !e.contexts.trace) && t) {
              const {
                traceId: r,
                spanId: o,
                parentSpanId: s,
                dsc: i
              } = t;
              e.contexts = {
                trace: {
                  trace_id: r,
                  span_id: o,
                  parent_span_id: s
                },
                ...e.contexts
              };
              const a = i || (0, y.l)(r, this, n);
              e.sdkProcessingMetadata = {
                dynamicSamplingContext: a,
                ...e.sdkProcessingMetadata
              }
            }
            return e
          }))
        }
        _captureEvent(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = arguments.length > 2 ? arguments[2] : void 0;
          return this._processEvent(e, t, n).then((e => e.event_id), (e => {
            if (d.T) {
              const t = e;
              "log" === t.logLevel ? o.vF.log(t.message) : o.vF.warn(t)
            }
          }))
        }
        _processEvent(e, t, n) {
          const r = this.getOptions(),
            {
              sampleRate: o
            } = r,
            s = k(e),
            c = w(e),
            l = e.type || "error",
            d = `before send for type \`${l}\``;
          if (c && "number" == typeof o && Math.random() > o) return this.recordDroppedEvent("sample_rate", "error", e), (0, a.xg)(new u.U(`Discarding event because it's not included in the random sample (sampling rate = ${o})`, "log"));
          const p = "replay_event" === l ? "replay" : l;
          return this._prepareEvent(e, t, n).then((n => {
            if (null === n) throw this.recordDroppedEvent("event_processor", p, e), new u.U("An event processor returned `null`, will not send event.", "log");
            if (t.data && !0 === t.data.__sentry__) return n;
            const o = function(e, t, n) {
              const {
                beforeSend: r,
                beforeSendTransaction: o
              } = e;
              return w(t) && r ? r(t, n) : k(t) && o ? o(t, n) : t
            }(r, n, t);
            return function(e, t) {
              const n = `${t} must return \`null\` or a valid event.`;
              if ((0, i.Qg)(e)) return e.then((e => {
                if (!(0, i.Qd)(e) && null !== e) throw new u.U(n);
                return e
              }), (e => {
                throw new u.U(`${t} rejected with ${e}`)
              }));
              if (!(0, i.Qd)(e) && null !== e) throw new u.U(n);
              return e
            }(o, d)
          })).then((r => {
            if (null === r) throw this.recordDroppedEvent("before_send", p, e), new u.U(`${d} returned \`null\`, will not send event.`, "log");
            const o = n && n.getSession();
            !s && o && this._updateSessionFromEvent(o, r);
            const i = r.transaction_info;
            if (s && i && r.transaction !== e.transaction) {
              const e = "custom";
              r.transaction_info = {
                ...i,
                source: e
              }
            }
            return this.sendEvent(r, t), r
          })).then(null, (e => {
            if (e instanceof u.U) throw e;
            throw this.captureException(e, {
              data: {
                __sentry__: !0
              },
              originalException: e
            }), new u.U(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.\nReason: ${e}`)
          }))
        }
        _process(e) {
          this._numProcessing++, e.then((e => (this._numProcessing--, e)), (e => (this._numProcessing--, e)))
        }
        _sendEnvelope(e) {
          if (this.emit("beforeEnvelope", e), this._isEnabled() && this._transport) return this._transport.send(e).then(null, (e => {
            d.T && o.vF.error("Error while sending event:", e)
          }));
          d.T && o.vF.error("Transport disabled")
        }
        _clearOutcomes() {
          const e = this._outcomes;
          return this._outcomes = {}, Object.keys(e).map((t => {
            const [n, r] = t.split(":");
            return {
              reason: n,
              category: r,
              quantity: e[t]
            }
          }))
        }
      }

      function w(e) {
        return void 0 === e.type
      }

      function k(e) {
        return "transaction" === e.type
      }

      function T(e) {
        const t = (0, h.KU)();
        t && t.addEventProcessor && t.addEventProcessor(e)
      }
    },
    67606: (e, t, n) => {
      "use strict";
      n.d(t, {
        U: () => r
      });
      const r = "production"
    },
    95033: (e, t, n) => {
      "use strict";
      n.d(t, {
        T: () => r
      });
      const r = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__
    },
    73051: (e, t, n) => {
      "use strict";
      n.d(t, {
        L: () => s,
        V: () => i
      });
      var r = n(21249),
        o = n(93088);

      function s(e, t, n, s) {
        const i = (0, r.Cj)(n),
          a = {
            sent_at: (new Date).toISOString(),
            ...i && {
              sdk: i
            },
            ...!!s && t && {
              dsn: (0, o.SB)(t)
            }
          },
          c = "aggregates" in e ? [{
            type: "sessions"
          }, e] : [{
            type: "session"
          }, e.toJSON()];
        return (0, r.h4)(a, [c])
      }

      function i(e, t, n, o) {
        const s = (0, r.Cj)(n),
          i = e.type && "replay_event" !== e.type ? e.type : "event";
        ! function(e, t) {
          t && (e.sdk = e.sdk || {}, e.sdk.name = e.sdk.name || t.name, e.sdk.version = e.sdk.version || t.version, e.sdk.integrations = [...e.sdk.integrations || [], ...t.integrations || []], e.sdk.packages = [...e.sdk.packages || [], ...t.packages || []])
        }(e, n && n.sdk);
        const a = (0, r.n2)(e, s, o, t);
        delete e.sdkProcessingMetadata;
        const c = [{
          type: i
        }, e];
        return (0, r.h4)(a, [c])
      }
    },
    72270: (e, t, n) => {
      "use strict";
      n.d(t, {
        jB: () => l,
        lG: () => c,
        lb: () => u
      });
      var r = n(2254),
        o = n(84541),
        s = n(97205),
        i = n(44877),
        a = n(95033);

      function c() {
        return (0, r.BY)("globalEventProcessors", (() => []))
      }

      function u(e) {
        c().push(e)
      }

      function l(e, t, n) {
        let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        return new o.T2(((o, c) => {
          const u = e[r];
          if (null === t || "function" != typeof u) o(t);
          else {
            const d = u({
              ...t
            }, n);
            a.T && u.id && null === d && s.vF.log(`Event processor "${u.id}" dropped event`), (0, i.Qg)(d) ? d.then((t => l(e, t, n, r + 1).then(o))).then(null, c) : l(e, d, n, r + 1).then(o).then(null, c)
          }
        }))
      }
    },
    23388: (e, t, n) => {
      "use strict";
      n.d(t, {
        Cp: () => h,
        Dp: () => D,
        J0: () => L,
        J5: () => $,
        KU: () => F,
        NA: () => w,
        PN: () => g,
        Q: () => A,
        SE: () => I,
        T$: () => R,
        VN: () => M,
        Wt: () => S,
        ZQ: () => v,
        bX: () => O,
        cx: () => _,
        gV: () => k,
        hb: () => x,
        ky: () => P,
        l7: () => b,
        nb: () => C,
        o: () => y,
        o5: () => N,
        r: () => m,
        rB: () => E,
        v4: () => T,
        wd: () => f
      });
      var r = n(97205),
        o = n(13817),
        s = n(65460),
        i = n(44877),
        a = n(2254),
        c = n(67606),
        u = n(95033),
        l = n(37452),
        d = n(1587),
        p = n(9332);

      function h(e, t) {
        return (0, l.BF)().captureException(e, (0, p.li)(t))
      }

      function f(e, t) {
        const n = "string" == typeof t ? t : void 0,
          r = "string" != typeof t ? {
            captureContext: t
          } : void 0;
        return (0, l.BF)().captureMessage(e, n, r)
      }

      function m(e, t) {
        return (0, l.BF)().captureEvent(e, t)
      }

      function g(e) {
        (0, l.BF)().configureScope(e)
      }

      function v(e, t) {
        (0, l.BF)().addBreadcrumb(e, t)
      }

      function y(e, t) {
        (0, l.BF)().setContext(e, t)
      }

      function _(e) {
        (0, l.BF)().setExtras(e)
      }

      function b(e, t) {
        (0, l.BF)().setExtra(e, t)
      }

      function S(e) {
        (0, l.BF)().setTags(e)
      }

      function w(e, t) {
        (0, l.BF)().setTag(e, t)
      }

      function k(e) {
        (0, l.BF)().setUser(e)
      }

      function T() {
        const e = (0, l.BF)();
        for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
        if (2 === n.length) {
          const [t, r] = n;
          return t ? e.withScope((() => (e.getStackTop().scope = t, r(t)))) : e.withScope(r)
        }
        return e.withScope(n[0])
      }

      function E(e) {
        return (0, l.fx)((() => e((0, l.rm)())))
      }

      function x(e, t) {
        return T((n => (n.setSpan(e), t(n))))
      }

      function C(e, t) {
        return (0, l.BF)().startTransaction({
          ...e
        }, t)
      }

      function I(e, t) {
        const n = N(),
          s = F();
        if (s) {
          if (s.captureCheckIn) return s.captureCheckIn(e, t, n);
          u.T && r.vF.warn("Cannot capture check-in. Client does not support sending check-ins.")
        } else u.T && r.vF.warn("Cannot capture check-in. No client defined.");
        return (0, o.eJ)()
      }

      function R(e, t, n) {
        const r = I({
            monitorSlug: e,
            status: "in_progress"
          }, n),
          o = (0, s.zf)();

        function a(t) {
          I({
            monitorSlug: e,
            status: t,
            checkInId: r,
            duration: (0, s.zf)() - o
          })
        }
        let c;
        try {
          c = t()
        } catch (e) {
          throw a("error"), e
        }
        return (0, i.Qg)(c) ? Promise.resolve(c).then((() => {
          a("ok")
        }), (() => {
          a("error")
        })) : a("ok"), c
      }
      async function O(e) {
        const t = F();
        return t ? t.flush(e) : (u.T && r.vF.warn("Cannot flush events. No client defined."), Promise.resolve(!1))
      }
      async function M(e) {
        const t = F();
        return t ? t.close(e) : (u.T && r.vF.warn("Cannot flush events and disable SDK. No client defined."), Promise.resolve(!1))
      }

      function A() {
        return (0, l.BF)().lastEventId()
      }

      function F() {
        return (0, l.BF)().getClient()
      }

      function D() {
        return !!F()
      }

      function N() {
        return (0, l.BF)().getScope()
      }

      function L(e) {
        const t = F(),
          n = (0, l.rm)(),
          r = N(),
          {
            release: o,
            environment: s = c.U
          } = t && t.getOptions() || {},
          {
            userAgent: i
          } = a.OW.navigator || {},
          u = (0, d.fj)({
            release: o,
            environment: s,
            user: r.getUser() || n.getUser(),
            ...i && {
              userAgent: i
            },
            ...e
          }),
          p = n.getSession();
        return p && "ok" === p.status && (0, d.qO)(p, {
          status: "exited"
        }), P(), n.setSession(u), r.setSession(u), u
      }

      function P() {
        const e = (0, l.rm)(),
          t = N(),
          n = t.getSession() || e.getSession();
        n && (0, d.Vu)(n), j(), e.setSession(), t.setSession()
      }

      function j() {
        const e = (0, l.rm)(),
          t = N(),
          n = F(),
          r = t.getSession() || e.getSession();
        r && n && n.captureSession && n.captureSession(r)
      }

      function $() {
        arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? P() : j()
      }
    },
    37452: (e, t, n) => {
      "use strict";
      n.d(t, {
        BF: () => y,
        EU: () => g,
        Me: () => E,
        TF: () => S,
        YZ: () => m,
        fx: () => k,
        gM: () => v,
        lq: () => x,
        nX: () => w,
        rm: () => _
      });
      var r = n(44877),
        o = n(13817),
        s = n(65460),
        i = n(97205),
        a = n(2254),
        c = n(67606),
        u = n(95033),
        l = n(6131),
        d = n(1587),
        p = n(99371);
      const h = parseFloat(p.M),
        f = 100;
      class m {
        constructor(e, t, n) {
          let r, o, s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : h;
          this._version = s, t ? r = t : (r = new l.HG, r.setClient(e)), n ? o = n : (o = new l.HG, o.setClient(e)), this._stack = [{
            scope: r
          }], e && this.bindClient(e), this._isolationScope = o
        }
        isOlderThan(e) {
          return this._version < e
        }
        bindClient(e) {
          const t = this.getStackTop();
          t.client = e, t.scope.setClient(e), e && e.setupIntegrations && e.setupIntegrations()
        }
        pushScope() {
          const e = this.getScope().clone();
          return this.getStack().push({
            client: this.getClient(),
            scope: e
          }), e
        }
        popScope() {
          return !(this.getStack().length <= 1 || !this.getStack().pop())
        }
        withScope(e) {
          const t = this.pushScope();
          let n;
          try {
            n = e(t)
          } catch (e) {
            throw this.popScope(), e
          }
          return (0, r.Qg)(n) ? n.then((e => (this.popScope(), e)), (e => {
            throw this.popScope(), e
          })) : (this.popScope(), n)
        }
        getClient() {
          return this.getStackTop().client
        }
        getScope() {
          return this.getStackTop().scope
        }
        getIsolationScope() {
          return this._isolationScope
        }
        getStack() {
          return this._stack
        }
        getStackTop() {
          return this._stack[this._stack.length - 1]
        }
        captureException(e, t) {
          const n = this._lastEventId = t && t.event_id ? t.event_id : (0, o.eJ)(),
            r = new Error("Sentry syntheticException");
          return this.getScope().captureException(e, {
            originalException: e,
            syntheticException: r,
            ...t,
            event_id: n
          }), n
        }
        captureMessage(e, t, n) {
          const r = this._lastEventId = n && n.event_id ? n.event_id : (0, o.eJ)(),
            s = new Error(e);
          return this.getScope().captureMessage(e, t, {
            originalException: e,
            syntheticException: s,
            ...n,
            event_id: r
          }), r
        }
        captureEvent(e, t) {
          const n = t && t.event_id ? t.event_id : (0, o.eJ)();
          return e.type || (this._lastEventId = n), this.getScope().captureEvent(e, {
            ...t,
            event_id: n
          }), n
        }
        lastEventId() {
          return this._lastEventId
        }
        addBreadcrumb(e, t) {
          const {
            scope: n,
            client: r
          } = this.getStackTop();
          if (!r) return;
          const {
            beforeBreadcrumb: o = null,
            maxBreadcrumbs: a = f
          } = r.getOptions && r.getOptions() || {};
          if (a <= 0) return;
          const c = {
              timestamp: (0, s.lu)(),
              ...e
            },
            u = o ? (0, i.pq)((() => o(c, t))) : c;
          null !== u && (r.emit && r.emit("beforeAddBreadcrumb", u, t), n.addBreadcrumb(u, a))
        }
        setUser(e) {
          this.getScope().setUser(e), this.getIsolationScope().setUser(e)
        }
        setTags(e) {
          this.getScope().setTags(e), this.getIsolationScope().setTags(e)
        }
        setExtras(e) {
          this.getScope().setExtras(e), this.getIsolationScope().setExtras(e)
        }
        setTag(e, t) {
          this.getScope().setTag(e, t), this.getIsolationScope().setTag(e, t)
        }
        setExtra(e, t) {
          this.getScope().setExtra(e, t), this.getIsolationScope().setExtra(e, t)
        }
        setContext(e, t) {
          this.getScope().setContext(e, t), this.getIsolationScope().setContext(e, t)
        }
        configureScope(e) {
          const {
            scope: t,
            client: n
          } = this.getStackTop();
          n && e(t)
        }
        run(e) {
          const t = v(this);
          try {
            e(this)
          } finally {
            v(t)
          }
        }
        getIntegration(e) {
          const t = this.getClient();
          if (!t) return null;
          try {
            return t.getIntegration(e)
          } catch (t) {
            return u.T && i.vF.warn(`Cannot retrieve integration ${e.id} from the current Hub`), null
          }
        }
        startTransaction(e, t) {
          const n = this._callExtensionMethod("startTransaction", e, t);
          return u.T && !n && (this.getClient() ? i.vF.warn("Tracing extension 'startTransaction' has not been added. Call 'addTracingExtensions' before calling 'init':\nSentry.addTracingExtensions();\nSentry.init({...});\n") : i.vF.warn("Tracing extension 'startTransaction' is missing. You should 'init' the SDK before calling 'startTransaction'")), n
        }
        traceHeaders() {
          return this._callExtensionMethod("traceHeaders")
        }
        captureSession() {
          if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) return this.endSession();
          this._sendSessionUpdate()
        }
        endSession() {
          const e = this.getStackTop().scope,
            t = e.getSession();
          t && (0, d.Vu)(t), this._sendSessionUpdate(), e.setSession()
        }
        startSession(e) {
          const {
            scope: t,
            client: n
          } = this.getStackTop(), {
            release: r,
            environment: o = c.U
          } = n && n.getOptions() || {}, {
            userAgent: s
          } = a.OW.navigator || {}, i = (0, d.fj)({
            release: r,
            environment: o,
            user: t.getUser(),
            ...s && {
              userAgent: s
            },
            ...e
          }), u = t.getSession && t.getSession();
          return u && "ok" === u.status && (0, d.qO)(u, {
            status: "exited"
          }), this.endSession(), t.setSession(i), i
        }
        shouldSendDefaultPii() {
          const e = this.getClient(),
            t = e && e.getOptions();
          return Boolean(t && t.sendDefaultPii)
        }
        _sendSessionUpdate() {
          const {
            scope: e,
            client: t
          } = this.getStackTop(), n = e.getSession();
          n && t && t.captureSession && t.captureSession(n)
        }
        _callExtensionMethod(e) {
          const t = g().__SENTRY__;
          if (t && t.extensions && "function" == typeof t.extensions[e]) {
            for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) r[o - 1] = arguments[o];
            return t.extensions[e].apply(this, r)
          }
          u.T && i.vF.warn(`Extension method ${e} couldn't be found, doing nothing.`)
        }
      }

      function g() {
        return a.OW.__SENTRY__ = a.OW.__SENTRY__ || {
          extensions: {},
          hub: void 0
        }, a.OW
      }

      function v(e) {
        const t = g(),
          n = E(t);
        return x(t, e), n
      }

      function y() {
        const e = g();
        if (e.__SENTRY__ && e.__SENTRY__.acs) {
          const t = e.__SENTRY__.acs.getCurrentHub();
          if (t) return t
        }
        return b(e)
      }

      function _() {
        return y().getIsolationScope()
      }

      function b() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : g();
        return T(e) && !E(e).isOlderThan(h) || x(e, new m), E(e)
      }

      function S(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : b();
        if (!T(e) || E(e).isOlderThan(h)) {
          const n = t.getClient(),
            r = t.getScope(),
            o = t.getIsolationScope();
          x(e, new m(n, r.clone(), o.clone()))
        }
      }

      function w(e) {
        const t = g();
        t.__SENTRY__ = t.__SENTRY__ || {}, t.__SENTRY__.acs = e
      }

      function k(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const n = g();
        return n.__SENTRY__ && n.__SENTRY__.acs ? n.__SENTRY__.acs.runWithAsyncContext(e, t) : e()
      }

      function T(e) {
        return !!(e && e.__SENTRY__ && e.__SENTRY__.hub)
      }

      function E(e) {
        return (0, a.BY)("hub", (() => new m), e)
      }

      function x(e, t) {
        return !!e && ((e.__SENTRY__ = e.__SENTRY__ || {}).hub = t, !0)
      }
    },
    39436: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, {
        BaseClient: () => k.V,
        DEFAULT_ENVIRONMENT: () => ne.U,
        FunctionToString: () => ge.$,
        Hub: () => g.YZ,
        IdleTransaction: () => s.zX,
        InboundFilters: () => me.H,
        Integrations: () => we,
        LinkedErrors: () => be,
        ModuleMetadata: () => re.Y,
        RequestData: () => fe,
        SDK_VERSION: () => G.M,
        SEMANTIC_ATTRIBUTE_SENTRY_OP: () => h.uT,
        SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN: () => h.JD,
        SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE: () => h.sy,
        SEMANTIC_ATTRIBUTE_SENTRY_SOURCE: () => h.i_,
        Scope: () => b.HG,
        ServerRuntimeClient: () => H,
        SessionFlusher: () => _,
        Span: () => i.L,
        SpanStatus: () => u.Fp,
        TRACING_DEFAULTS: () => s.Cq,
        Transaction: () => a.Z,
        addBreadcrumb: () => m.ZQ,
        addEventProcessor: () => k.S,
        addGlobalEventProcessor: () => S.lb,
        addIntegration: () => V.Q8,
        addTracingExtensions: () => o.U,
        applyScopeDataToEvent: () => J.e2,
        applySdkMetadata: () => te.K,
        captureCheckIn: () => m.SE,
        captureEvent: () => m.r,
        captureException: () => m.Cp,
        captureMessage: () => m.wd,
        captureSession: () => m.J5,
        close: () => m.VN,
        closeSession: () => v.Vu,
        configureScope: () => m.PN,
        continueTrace: () => l.V4,
        convertIntegrationFnToClass: () => V.F,
        createCheckInEnvelope: () => F,
        createEventEnvelope: () => f.V,
        createSessionEnvelope: () => f.L,
        createTransport: () => z.o,
        defineIntegration: () => V._C,
        endSession: () => m.ky,
        ensureHubOnCarrier: () => g.TF,
        extractTraceparentData: () => c.nc,
        flush: () => m.bX,
        functionToStringIntegration: () => ge.Z,
        getActiveSpan: () => l.Bk,
        getActiveTransaction: () => c.Z7,
        getClient: () => m.KU,
        getCurrentHub: () => g.BF,
        getCurrentScope: () => m.o5,
        getDynamicSamplingContextFromClient: () => d.l,
        getDynamicSamplingContextFromSpan: () => d.k,
        getEnvelopeEndpointWithUrlEncodedAuth: () => w.Z,
        getGlobalScope: () => b.m6,
        getHubFromCarrier: () => g.Me,
        getIntegrationsToSetup: () => V.mH,
        getIsolationScope: () => g.rm,
        getMainCarrier: () => g.EU,
        getReportDialogEndpoint: () => w.k,
        getRootSpan: () => U.z,
        getSpanStatusFromHttpCode: () => u.AJ,
        handleCallbackErrors: () => Z.x,
        hasTracingEnabled: () => X.w,
        inboundFiltersIntegration: () => me.D,
        initAndBind: () => q.J,
        isInitialized: () => m.Dp,
        isSentryRequestUrl: () => Q.A,
        lastEventId: () => m.Q,
        linkedErrorsIntegration: () => _e,
        makeMain: () => g.gM,
        makeMultiplexedTransport: () => K.N,
        makeOfflineTransport: () => W.BP,
        makeSession: () => v.fj,
        mergeScopeData: () => J.Rg,
        metrics: () => Se.qd,
        moduleMetadataIntegration: () => re.Q,
        notifyEventProcessors: () => S.jB,
        parameterize: () => ee.y,
        prepareEvent: () => Y.mG,
        requestDataIntegration: () => he,
        runWithAsyncContext: () => g.fx,
        setAsyncContextStrategy: () => g.nX,
        setContext: () => m.o,
        setCurrentClient: () => q.B,
        setExtra: () => m.l7,
        setExtras: () => m.cx,
        setGlobalScope: () => b.ik,
        setHttpStatus: () => u.N8,
        setHubOnCarrier: () => g.lq,
        setMeasurement: () => p.X,
        setTag: () => m.NA,
        setTags: () => m.Wt,
        setUser: () => m.gV,
        spanIsSampled: () => B.pK,
        spanStatusfromHttpCode: () => u.o6,
        spanToJSON: () => B.et,
        spanToTraceContext: () => B.kX,
        spanToTraceHeader: () => B.Qh,
        startActiveSpan: () => l.D7,
        startIdleTransaction: () => o.p,
        startInactiveSpan: () => l.Uk,
        startSession: () => m.J0,
        startSpan: () => l.Lk,
        startSpanManual: () => l.nV,
        startTransaction: () => m.nb,
        trace: () => l.uP,
        updateSession: () => v.qO,
        withActiveSpan: () => m.hb,
        withIsolationScope: () => m.rB,
        withMonitor: () => m.T$,
        withScope: () => m.v4
      });
      var r = {};
      n.r(r), n.d(r, {
        FunctionToString: () => ge.$,
        InboundFilters: () => me.H,
        LinkedErrors: () => be
      });
      var o = n(66924),
        s = n(9304),
        i = n(15512),
        a = n(53578),
        c = n(8599),
        u = n(70334),
        l = n(69867),
        d = n(53951),
        p = n(84894),
        h = n(98030),
        f = n(73051),
        m = n(23388),
        g = n(37452),
        v = n(1587),
        y = n(98478);
      class _ {
        constructor(e, t) {
          this._client = e, this.flushTimeout = 60, this._pendingAggregates = {}, this._isEnabled = !0, this._intervalId = setInterval((() => this.flush()), 1e3 * this.flushTimeout), this._sessionAttrs = t
        }
        flush() {
          const e = this.getSessionAggregates();
          0 !== e.aggregates.length && (this._pendingAggregates = {}, this._client.sendSession(e))
        }
        getSessionAggregates() {
          const e = Object.keys(this._pendingAggregates).map((e => this._pendingAggregates[parseInt(e)])),
            t = {
              attrs: this._sessionAttrs,
              aggregates: e
            };
          return (0, y.Ce)(t)
        }
        close() {
          clearInterval(this._intervalId), this._isEnabled = !1, this.flush()
        }
        incrementSessionStatusCount() {
          if (!this._isEnabled) return;
          const e = (0, m.o5)(),
            t = e.getRequestSession();
          t && t.status && (this._incrementSessionStatusCount(t.status, new Date), e.setRequestSession(void 0))
        }
        _incrementSessionStatusCount(e, t) {
          const n = new Date(t).setSeconds(0, 0);
          this._pendingAggregates[n] = this._pendingAggregates[n] || {};
          const r = this._pendingAggregates[n];
          switch (r.started || (r.started = new Date(n).toISOString()), e) {
            case "errored":
              return r.errored = (r.errored || 0) + 1, r.errored;
            case "ok":
              return r.exited = (r.exited || 0) + 1, r.exited;
            default:
              return r.crashed = (r.crashed || 0) + 1, r.crashed
          }
        }
      }
      var b = n(6131),
        S = n(72270),
        w = n(36839),
        k = n(80670),
        T = n(84541),
        E = n(44877),
        x = n(13817),
        C = n(50767);

      function I(e, t) {
        return e(t.stack || "", 1)
      }

      function R(e, t) {
        const n = {
            type: t.name || t.constructor.name,
            value: t.message
          },
          r = I(e, t);
        return r.length && (n.stacktrace = {
          frames: r
        }), n
      }
      var O = n(97205),
        M = n(93088),
        A = n(21249);

      function F(e, t, n, r, o) {
        const s = {
          sent_at: (new Date).toISOString()
        };
        n && n.sdk && (s.sdk = {
          name: n.sdk.name,
          version: n.sdk.version
        }), r && o && (s.dsn = (0, M.SB)(o)), t && (s.trace = (0, y.Ce)(t));
        const i = function(e) {
          return [{
            type: "check_in"
          }, e]
        }(e);
        return (0, A.h4)(s, [i])
      }
      var D = n(95033),
        N = n(65460),
        L = n(36092),
        P = n(17330),
        j = n(17504);
      class $ {
        constructor(e) {
          this._client = e, this._buckets = new Map, this._bucketsTotalWeight = 0, this._interval = setInterval((() => this._flush()), L.TP), this._flushShift = Math.floor(Math.random() * L.TP / 1e3), this._forceFlush = !1
        }
        add(e, t, n) {
          let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "none",
            o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
            s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : (0, N.zf)();
          const i = Math.floor(s),
            a = t.replace(L.v7, "_"),
            c = (0, j.VZ)(o),
            u = (0, j.eG)(e, a, r, c);
          let l = this._buckets.get(u);
          l ? (l.metric.add(n), l.timestamp < i && (l.timestamp = i)) : (l = {
            metric: new P.wz[e](n),
            timestamp: i,
            metricType: e,
            name: a,
            unit: r,
            tags: c
          }, this._buckets.set(u, l)), this._bucketsTotalWeight += l.metric.weight, this._bucketsTotalWeight >= L.K3 && this.flush()
        }
        flush() {
          this._forceFlush = !0, this._flush()
        }
        close() {
          this._forceFlush = !0, clearInterval(this._interval), this._flush()
        }
        _flush() {
          if (this._forceFlush) return this._forceFlush = !1, this._bucketsTotalWeight = 0, this._captureMetrics(this._buckets), void this._buckets.clear();
          const e = Math.floor((0, N.zf)()) - L.TP / 1e3 - this._flushShift,
            t = new Map;
          for (const [n, r] of this._buckets) r.timestamp <= e && (t.set(n, r), this._bucketsTotalWeight -= r.metric.weight);
          for (const [e] of t) this._buckets.delete(e);
          this._captureMetrics(t)
        }
        _captureMetrics(e) {
          if (e.size > 0 && this._client.captureAggregateMetrics) {
            const t = Array.from(e).map((e => {
              let [, t] = e;
              return t
            }));
            this._client.captureAggregateMetrics(t)
          }
        }
      }
      var B = n(67752),
        U = n(54569);
      class H extends k.V {
        constructor(e) {
          (0, o.U)(), super(e), e._experiments && e._experiments.metricsAggregator && (this.metricsAggregator = new $(this))
        }
        eventFromException(e, t) {
          return (0, T.XW)(function(e, t, n, r) {
            const o = "function" == typeof e ? e().getClient() : e;
            let s = n;
            const i = r && r.data && r.data.mechanism || {
              handled: !0,
              type: "generic"
            };
            let a;
            if (!(0, E.bJ)(n)) {
              if ((0, E.Qd)(n)) {
                const e = o && o.getOptions().normalizeDepth;
                a = {
                  __serialized__: (0, C.cd)(n, e)
                };
                const t = function(e) {
                  if ("name" in e && "string" == typeof e.name) {
                    let t = `'${e.name}' captured as exception`;
                    return "message" in e && "string" == typeof e.message && (t += ` with message '${e.message}'`), t
                  }
                  return "message" in e && "string" == typeof e.message ? e.message : `Object captured as exception with keys: ${(0,y.HF)(e)}`
                }(n);
                s = r && r.syntheticException || new Error(t), s.message = t
              } else s = r && r.syntheticException || new Error(n), s.message = n;
              i.synthetic = !0
            }
            const c = {
              exception: {
                values: [R(t, s)]
              }
            };
            return a && (c.extra = a), (0, x.gO)(c, void 0, void 0), (0, x.M6)(c, i), {
              ...c,
              event_id: r && r.event_id
            }
          }((0, m.KU)(), this._options.stackParser, e, t))
        }
        eventFromMessage(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "info",
            n = arguments.length > 2 ? arguments[2] : void 0;
          return (0, T.XW)(function(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "info",
              r = arguments.length > 3 ? arguments[3] : void 0,
              o = arguments.length > 4 ? arguments[4] : void 0;
            const s = {
              event_id: r && r.event_id,
              level: n
            };
            if (o && r && r.syntheticException) {
              const n = I(e, r.syntheticException);
              n.length && (s.exception = {
                values: [{
                  value: t,
                  stacktrace: {
                    frames: n
                  }
                }]
              })
            }
            if ((0, E.NF)(t)) {
              const {
                __sentry_template_string__: e,
                __sentry_template_values__: n
              } = t;
              return s.logentry = {
                message: e,
                params: n
              }, s
            }
            return s.message = t, s
          }(this._options.stackParser, e, t, n, this._options.attachStacktrace))
        }
        captureException(e, t, n) {
          if (this._options.autoSessionTracking && this._sessionFlusher && n) {
            const e = n.getRequestSession();
            e && "ok" === e.status && (e.status = "errored")
          }
          return super.captureException(e, t, n)
        }
        captureEvent(e, t, n) {
          if (this._options.autoSessionTracking && this._sessionFlusher && n && "exception" === (e.type || "exception") && e.exception && e.exception.values && e.exception.values.length > 0) {
            const e = n.getRequestSession();
            e && "ok" === e.status && (e.status = "errored")
          }
          return super.captureEvent(e, t, n)
        }
        close(e) {
          return this._sessionFlusher && this._sessionFlusher.close(), super.close(e)
        }
        initSessionFlusher() {
          const {
            release: e,
            environment: t
          } = this._options;
          e ? this._sessionFlusher = new _(this, {
            release: e,
            environment: t
          }) : D.T && O.vF.warn("Cannot initialise an instance of SessionFlusher if no release is provided!")
        }
        captureCheckIn(e, t, n) {
          const r = "checkInId" in e && e.checkInId ? e.checkInId : (0, x.eJ)();
          if (!this._isEnabled()) return D.T && O.vF.warn("SDK not enabled, will not capture checkin."), r;
          const o = this.getOptions(),
            {
              release: s,
              environment: i,
              tunnel: a
            } = o,
            c = {
              check_in_id: r,
              monitor_slug: e.monitorSlug,
              status: e.status,
              release: s,
              environment: i
            };
          "duration" in e && (c.duration = e.duration), t && (c.monitor_config = {
            schedule: t.schedule,
            checkin_margin: t.checkinMargin,
            max_runtime: t.maxRuntime,
            timezone: t.timezone
          });
          const [u, l] = this._getTraceInfoFromScope(n);
          l && (c.contexts = {
            trace: l
          });
          const d = F(c, u, this.getSdkMetadata(), a, this.getDsn());
          return D.T && O.vF.info("Sending checkin:", e.monitorSlug, e.status), this._sendEnvelope(d), r
        }
        _captureRequestSession() {
          this._sessionFlusher ? this._sessionFlusher.incrementSessionStatusCount() : D.T && O.vF.warn("Discarded request mode session because autoSessionTracking option was disabled")
        }
        _prepareEvent(e, t, n, r) {
          return this._options.platform && (e.platform = e.platform || this._options.platform), this._options.runtime && (e.contexts = {
            ...e.contexts,
            runtime: (e.contexts || {}).runtime || this._options.runtime
          }), this._options.serverName && (e.server_name = e.server_name || this._options.serverName), super._prepareEvent(e, t, n, r)
        }
        _getTraceInfoFromScope(e) {
          if (!e) return [void 0, void 0];
          const t = e.getSpan();
          if (t) return [(0, U.z)(t) ? (0, d.k)(t) : void 0, (0, B.kX)(t)];
          const {
            traceId: n,
            spanId: r,
            parentSpanId: o,
            dsc: s
          } = e.getPropagationContext(), i = {
            trace_id: n,
            span_id: r,
            parent_span_id: o
          };
          return s ? [s, i] : [(0, d.l)(n, this, e), i]
        }
      }
      var q = n(49451),
        z = n(38521),
        W = n(60809),
        K = n(53743),
        G = n(99371),
        V = n(90197),
        J = n(44006),
        Y = n(9332),
        X = n(17638),
        Q = n(49192),
        Z = n(62495),
        ee = n(82522),
        te = n(24456),
        ne = n(67606),
        re = n(97372),
        oe = n(59100);
      const se = {
          ip: !1,
          request: !0,
          transaction: !0,
          user: !0
        },
        ie = ["cookies", "data", "headers", "method", "query_string", "url"],
        ae = ["id", "username", "email"];

      function ce(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const n = e.method && e.method.toUpperCase();
        let r = "",
          o = "url";
        t.customRoute || e.route ? (r = t.customRoute || `${e.baseUrl||""}${e.route&&e.route.path}`, o = "route") : (e.originalUrl || e.url) && (r = (0, oe.f)(e.originalUrl || e.url || ""));
        let s = "";
        return t.method && n && (s += n), t.method && t.path && (s += " "), t.path && r && (s += r), [s, o]
      }

      function ue(e, t) {
        const {
          include: n = ie,
          deps: r
        } = t || {}, o = {}, s = e.headers || {}, i = e.method, a = s.host || e.hostname || e.host || "<no host>", c = "https" === e.protocol || e.socket && e.socket.encrypted ? "https" : "http", u = e.originalUrl || e.url || "", l = u.startsWith(c) ? u : `${c}://${a}${u}`;
        return n.forEach((t => {
          switch (t) {
            case "headers":
              o.headers = s, n.includes("cookies") || delete o.headers.cookie;
              break;
            case "method":
              o.method = i;
              break;
            case "url":
              o.url = l;
              break;
            case "cookies":
              o.cookies = e.cookies || s.cookie && function(e) {
                const t = {};
                let n = 0;
                for (; n < e.length;) {
                  const r = e.indexOf("=", n);
                  if (-1 === r) break;
                  let o = e.indexOf(";", n);
                  if (-1 === o) o = e.length;
                  else if (o < r) {
                    n = e.lastIndexOf(";", r - 1) + 1;
                    continue
                  }
                  const s = e.slice(n, r).trim();
                  if (void 0 === t[s]) {
                    let n = e.slice(r + 1, o).trim();
                    34 === n.charCodeAt(0) && (n = n.slice(1, -1));
                    try {
                      t[s] = -1 !== n.indexOf("%") ? decodeURIComponent(n) : n
                    } catch (e) {
                      t[s] = n
                    }
                  }
                  n = o + 1
                }
                return t
              }(s.cookie) || {};
              break;
            case "query_string":
              o.query_string = function(e, t) {
                let n = e.originalUrl || e.url || "";
                if (n) {
                  n.startsWith("/") && (n = `http://dogs.are.great${n}`);
                  try {
                    return e.query || "undefined" != typeof URL && new URL(n).search.slice(1) || t && t.url && t.url.parse(n).query || void 0
                  } catch (e) {
                    return
                  }
                }
              }(e, r);
              break;
            case "data":
              if ("GET" === i || "HEAD" === i) break;
              void 0 !== e.body && (o.data = (0, E.Kg)(e.body) ? e.body : JSON.stringify((0, C.S8)(e.body)));
              break;
            default:
              ({}).hasOwnProperty.call(e, t) && (o[t] = e[t])
          }
        })), o
      }

      function le(e, t, n) {
        const r = {
          ...se,
          ...n && n.include
        };
        if (r.request) {
          const o = Array.isArray(r.request) ? ue(t, {
            include: r.request,
            deps: n && n.deps
          }) : ue(t, {
            deps: n && n.deps
          });
          e.request = {
            ...e.request,
            ...o
          }
        }
        if (r.user) {
          const n = t.user && (0, E.Qd)(t.user) ? function(e, t) {
            const n = {};
            return (Array.isArray(t) ? t : ae).forEach((t => {
              e && t in e && (n[t] = e[t])
            })), n
          }(t.user, r.user) : {};
          Object.keys(n).length && (e.user = {
            ...e.user,
            ...n
          })
        }
        if (r.ip) {
          const n = t.ip || t.socket && t.socket.remoteAddress;
          n && (e.user = {
            ...e.user,
            ip_address: n
          })
        }
        return r.transaction && !e.transaction && (e.transaction = function(e, t) {
          switch (t) {
            case "path":
              return ce(e, {
                path: !0
              })[0];
            case "handler":
              return e.route && e.route.stack && e.route.stack[0] && e.route.stack[0].name || "<anonymous>";
            default:
              return ce(e, {
                path: !0,
                method: !0,
                customRoute: e._reconstructedRoute ? e._reconstructedRoute : void 0
              })[0]
          }
        }(t, r.transaction)), e
      }
      const de = {
          include: {
            cookies: !0,
            data: !0,
            headers: !0,
            ip: !1,
            query_string: !0,
            url: !0,
            user: {
              id: !0,
              username: !0,
              email: !0
            }
          },
          transactionNamingScheme: "methodPath"
        },
        pe = "RequestData",
        he = (0, V._C)((function() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          const t = le,
            n = {
              ...de,
              ...e,
              include: {
                method: !0,
                ...de.include,
                ...e.include,
                user: e.include && "boolean" == typeof e.include.user ? e.include.user : {
                  ...de.include.user,
                  ...(e.include || {}).user
                }
              }
            };
          return {
            name: pe,
            setupOnce() {},
            processEvent(e, r, o) {
              const {
                transactionNamingScheme: s
              } = n, {
                sdkProcessingMetadata: i = {}
              } = e, a = i.request;
              if (!a) return e;
              const c = i.requestDataOptionsFromExpressHandler || i.requestDataOptionsFromGCPWrapper || function(e) {
                  const {
                    transactionNamingScheme: t,
                    include: {
                      ip: n,
                      user: r,
                      ...o
                    }
                  } = e, s = [];
                  for (const [e, t] of Object.entries(o)) t && s.push(e);
                  let i;
                  if (void 0 === r) i = !0;
                  else if ("boolean" == typeof r) i = r;
                  else {
                    const e = [];
                    for (const [t, n] of Object.entries(r)) n && e.push(t);
                    i = e
                  }
                  return {
                    include: {
                      ip: n,
                      user: i,
                      request: 0 !== s.length ? s : void 0,
                      transaction: t
                    }
                  }
                }(n),
                u = t(e, a, c);
              if ("transaction" === e.type || "handler" === s) return u;
              const l = a._sentryTransaction;
              if (l) {
                const e = (0, B.et)(l).description || "",
                  t = "sentry.javascript.nextjs" === function(e) {
                    try {
                      return e.getOptions()._metadata.sdk.name
                    } catch (e) {
                      return
                    }
                  }(o) ? e.startsWith("/api") : "path" !== s,
                  [n] = ce(a, {
                    path: !0,
                    method: t,
                    customRoute: e
                  });
                u.transaction = n
              }
              return u
            }
          }
        })),
        fe = (0, V.F)(pe, he);
      var me = n(58943),
        ge = n(903),
        ve = n(47220);
      const ye = "LinkedErrors",
        _e = (0, V._C)((function() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          const t = e.limit || 5,
            n = e.key || "cause";
          return {
            name: ye,
            setupOnce() {},
            preprocessEvent(e, r, o) {
              const s = o.getOptions();
              (0, ve.Q)(R, s.stackParser, s.maxValueLength, n, t, e, r)
            }
          }
        })),
        be = (0, V.F)(ye, _e);
      var Se = n(96139);
      const we = r
    },
    90197: (e, t, n) => {
      "use strict";
      n.d(t, {
        F: () => m,
        P$: () => d,
        Q8: () => f,
        _C: () => g,
        lc: () => p,
        mH: () => l,
        qm: () => h
      });
      var r = n(13817),
        o = n(97205),
        s = n(95033),
        i = n(72270),
        a = n(23388),
        c = n(37452);
      const u = [];

      function l(e) {
        const t = e.defaultIntegrations || [],
          n = e.integrations;
        let o;
        t.forEach((e => {
          e.isDefaultInstance = !0
        })), o = Array.isArray(n) ? [...t, ...n] : "function" == typeof n ? (0, r.k9)(n(t)) : t;
        const s = function(e) {
            const t = {};
            return e.forEach((e => {
              const {
                name: n
              } = e, r = t[n];
              r && !r.isDefaultInstance && e.isDefaultInstance || (t[n] = e)
            })), Object.keys(t).map((e => t[e]))
          }(o),
          i = function(e, t) {
            for (let t = 0; t < e.length; t++)
              if (!0 == ("Debug" === e[t].name)) return t;
            return -1
          }(s);
        if (-1 !== i) {
          const [e] = s.splice(i, 1);
          s.push(e)
        }
        return s
      }

      function d(e, t) {
        const n = {};
        return t.forEach((t => {
          t && h(e, t, n)
        })), n
      }

      function p(e, t) {
        for (const n of t) n && n.afterAllSetup && n.afterAllSetup(e)
      }

      function h(e, t, n) {
        if (n[t.name]) s.T && o.vF.log(`Integration skipped because it was already installed: ${t.name}`);
        else {
          if (n[t.name] = t, -1 === u.indexOf(t.name) && (t.setupOnce(i.lb, c.BF), u.push(t.name)), t.setup && "function" == typeof t.setup && t.setup(e), e.on && "function" == typeof t.preprocessEvent) {
            const n = t.preprocessEvent.bind(t);
            e.on("preprocessEvent", ((t, r) => n(t, r, e)))
          }
          if (e.addEventProcessor && "function" == typeof t.processEvent) {
            const n = t.processEvent.bind(t),
              r = Object.assign(((t, r) => n(t, r, e)), {
                id: t.name
              });
            e.addEventProcessor(r)
          }
          s.T && o.vF.log(`Integration installed: ${t.name}`)
        }
      }

      function f(e) {
        const t = (0, a.KU)();
        t && t.addIntegration ? t.addIntegration(e) : s.T && o.vF.warn(`Cannot add integration "${e.name}" because no SDK Client is available.`)
      }

      function m(e, t) {
        return Object.assign((function() {
          return t(...arguments)
        }), {
          id: e
        })
      }

      function g(e) {
        return e
      }
    },
    903: (e, t, n) => {
      "use strict";
      n.d(t, {
        $: () => l,
        Z: () => u
      });
      var r = n(98478),
        o = n(23388),
        s = n(90197);
      let i;
      const a = "FunctionToString",
        c = new WeakMap,
        u = (0, s._C)((() => ({
          name: a,
          setupOnce() {
            i = Function.prototype.toString;
            try {
              Function.prototype.toString = function() {
                const e = (0, r.sp)(this),
                  t = c.has((0, o.KU)()) && void 0 !== e ? e : this;
                for (var n = arguments.length, s = new Array(n), a = 0; a < n; a++) s[a] = arguments[a];
                return i.apply(t, s)
              }
            } catch (e) {}
          },
          setup(e) {
            c.set(e, !0)
          }
        }))),
        l = (0, s.F)(a, u)
    },
    58943: (e, t, n) => {
      "use strict";
      n.d(t, {
        D: () => d,
        H: () => p
      });
      var r = n(97205),
        o = n(13817),
        s = n(34860),
        i = n(95033),
        a = n(90197);
      const c = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/],
        u = [/^.*\/healthcheck$/, /^.*\/healthy$/, /^.*\/live$/, /^.*\/ready$/, /^.*\/heartbeat$/, /^.*\/health$/, /^.*\/healthz$/],
        l = "InboundFilters",
        d = (0, a._C)((function() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return {
            name: l,
            setupOnce() {},
            processEvent(t, n, a) {
              const l = a.getOptions(),
                d = function() {
                  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                  return {
                    allowUrls: [...e.allowUrls || [], ...t.allowUrls || []],
                    denyUrls: [...e.denyUrls || [], ...t.denyUrls || []],
                    ignoreErrors: [...e.ignoreErrors || [], ...t.ignoreErrors || [], ...e.disableErrorDefaults ? [] : c],
                    ignoreTransactions: [...e.ignoreTransactions || [], ...t.ignoreTransactions || [], ...e.disableTransactionDefaults ? [] : u],
                    ignoreInternal: void 0 === e.ignoreInternal || e.ignoreInternal
                  }
                }(e, l);
              return function(e, t) {
                return t.ignoreInternal && function(e) {
                  try {
                    return "SentryError" === e.exception.values[0].type
                  } catch (e) {}
                  return !1
                }(e) ? (i.T && r.vF.warn(`Event dropped due to being internal Sentry Error.\nEvent: ${(0,o.$X)(e)}`), !0) : function(e, t) {
                  return !(e.type || !t || !t.length) && function(e) {
                    const t = [];
                    let n;
                    e.message && t.push(e.message);
                    try {
                      n = e.exception.values[e.exception.values.length - 1]
                    } catch (e) {}
                    return n && n.value && (t.push(n.value), n.type && t.push(`${n.type}: ${n.value}`)), i.T && 0 === t.length && r.vF.error(`Could not extract message for event ${(0,o.$X)(e)}`), t
                  }(e).some((e => (0, s.Xr)(e, t)))
                }(e, t.ignoreErrors) ? (i.T && r.vF.warn(`Event dropped due to being matched by \`ignoreErrors\` option.\nEvent: ${(0,o.$X)(e)}`), !0) : function(e, t) {
                  if ("transaction" !== e.type || !t || !t.length) return !1;
                  const n = e.transaction;
                  return !!n && (0, s.Xr)(n, t)
                }(e, t.ignoreTransactions) ? (i.T && r.vF.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.\nEvent: ${(0,o.$X)(e)}`), !0) : function(e, t) {
                  if (!t || !t.length) return !1;
                  const n = h(e);
                  return !!n && (0, s.Xr)(n, t)
                }(e, t.denyUrls) ? (i.T && r.vF.warn(`Event dropped due to being matched by \`denyUrls\` option.\nEvent: ${(0,o.$X)(e)}.\nUrl: ${h(e)}`), !0) : ! function(e, t) {
                  if (!t || !t.length) return !0;
                  const n = h(e);
                  return !n || (0, s.Xr)(n, t)
                }(e, t.allowUrls) && (i.T && r.vF.warn(`Event dropped due to not being matched by \`allowUrls\` option.\nEvent: ${(0,o.$X)(e)}.\nUrl: ${h(e)}`), !0)
              }(t, d) ? null : t
            }
          }
        })),
        p = (0, a.F)(l, d);

      function h(e) {
        try {
          let t;
          try {
            t = e.exception.values[0].stacktrace.frames
          } catch (e) {}
          return t ? function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
            for (let t = e.length - 1; t >= 0; t--) {
              const n = e[t];
              if (n && "<anonymous>" !== n.filename && "[native code]" !== n.filename) return n.filename || null
            }
            return null
          }(t) : null
        } catch (t) {
          return i.T && r.vF.error(`Cannot extract url for event ${(0,o.$X)(e)}`), null
        }
      }
    },
    97372: (e, t, n) => {
      "use strict";
      n.d(t, {
        Y: () => d,
        Q: () => l
      });
      var r = n(21249),
        o = n(90197),
        s = n(2254);
      const i = new Map,
        a = new Set;

      function c(e, t) {
        return function(e) {
          if (s.OW._sentryModuleMetadata)
            for (const t of Object.keys(s.OW._sentryModuleMetadata)) {
              const n = s.OW._sentryModuleMetadata[t];
              if (a.has(t)) continue;
              a.add(t);
              const r = e(t);
              for (const e of r.reverse())
                if (e.filename) {
                  i.set(e.filename, n);
                  break
                }
            }
        }(e), i.get(t)
      }
      const u = "ModuleMetadata",
        l = (0, o._C)((() => ({
          name: u,
          setupOnce() {},
          setup(e) {
            "function" == typeof e.on && e.on("beforeEnvelope", (e => {
              (0, r.yH)(e, ((e, t) => {
                if ("event" === t) {
                  const t = Array.isArray(e) ? e[1] : void 0;
                  t && (function(e) {
                    try {
                      e.exception.values.forEach((e => {
                        if (e.stacktrace)
                          for (const t of e.stacktrace.frames || []) delete t.module_metadata
                      }))
                    } catch (e) {}
                  }(t), e[1] = t)
                }
              }))
            }))
          },
          processEvent: (e, t, n) => (function(e, t) {
            try {
              t.exception.values.forEach((t => {
                if (t.stacktrace)
                  for (const n of t.stacktrace.frames || []) {
                    if (!n.filename) continue;
                    const t = c(e, n.filename);
                    t && (n.module_metadata = t)
                  }
              }))
            } catch (e) {}
          }(n.getOptions().stackParser, e), e)
        }))),
        d = (0, o.F)(u, l)
    },
    36092: (e, t, n) => {
      "use strict";
      n.d(t, {
        K3: () => d,
        TP: () => l,
        Vt: () => c,
        bD: () => r,
        co: () => o,
        fN: () => s,
        v7: () => a,
        vR: () => i,
        yQ: () => u
      });
      const r = "c",
        o = "g",
        s = "s",
        i = "d",
        a = /[^a-zA-Z0-9_/.-]+/g,
        c = /[^\w\d_:/@.{}[\]$-]+/g,
        u = 5e3,
        l = 1e4,
        d = 1e4
    },
    96139: (e, t, n) => {
      "use strict";
      n.d(t, {
        qd: () => g
      });
      var r = n(97205),
        o = n(95033),
        s = n(23388),
        i = n(67752),
        a = n(36092),
        c = n(90197),
        u = n(65460),
        l = n(17330),
        d = n(17504);
      class p {
        constructor(e) {
          this._client = e, this._buckets = new Map, this._interval = setInterval((() => this.flush()), a.yQ)
        }
        add(e, t, n) {
          let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "none",
            o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
            s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : (0, u.zf)();
          const i = Math.floor(s),
            c = t.replace(a.v7, "_"),
            p = (0, d.VZ)(o),
            h = (0, d.eG)(e, c, r, p),
            f = this._buckets.get(h);
          f ? (f.metric.add(n), f.timestamp < i && (f.timestamp = i)) : this._buckets.set(h, {
            metric: new l.wz[e](n),
            timestamp: i,
            metricType: e,
            name: c,
            unit: r,
            tags: p
          })
        }
        flush() {
          if (0 !== this._buckets.size) {
            if (this._client.captureAggregateMetrics) {
              const e = Array.from(this._buckets).map((e => {
                let [, t] = e;
                return t
              }));
              this._client.captureAggregateMetrics(e)
            }
            this._buckets.clear()
          }
        }
        close() {
          clearInterval(this._interval), this.flush()
        }
      }
      const h = "MetricsAggregator",
        f = (0, c._C)((() => ({
          name: h,
          setupOnce() {},
          setup(e) {
            e.metricsAggregator = new p(e)
          }
        })));

      function m(e, t, n) {
        let a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        const c = (0, s.KU)(),
          u = (0, s.o5)();
        if (c) {
          if (!c.metricsAggregator) return void(o.T && r.vF.warn("No metrics aggregator enabled. Please add the MetricsAggregator integration to use metrics APIs"));
          const {
            unit: s,
            tags: l,
            timestamp: d
          } = a, {
            release: p,
            environment: h
          } = c.getOptions(), f = u.getTransaction(), m = {};
          p && (m.release = p), h && (m.environment = h), f && (m.transaction = (0, i.et)(f).description || ""), o.T && r.vF.log(`Adding value of ${n} to ${e} metric ${t}`), c.metricsAggregator.add(e, t, n, s, {
            ...m,
            ...l
          }, d)
        }
      }
      const g = {
        increment: function(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            n = arguments.length > 2 ? arguments[2] : void 0;
          m(a.bD, e, t, n)
        },
        distribution: function(e, t, n) {
          m(a.vR, e, t, n)
        },
        set: function(e, t, n) {
          m(a.fN, e, t, n)
        },
        gauge: function(e, t, n) {
          m(a.co, e, t, n)
        },
        MetricsAggregator: (0, c.F)(h, f),
        metricsAggregatorIntegration: f
      }
    },
    17330: (e, t, n) => {
      "use strict";
      n.d(t, {
        wz: () => s
      });
      var r = n(36092),
        o = n(17504);
      const s = {
        [r.bD]: class {
          constructor(e) {
            this._value = e
          }
          get weight() {
            return 1
          }
          add(e) {
            this._value += e
          }
          toString() {
            return `${this._value}`
          }
        },
        [r.co]: class {
          constructor(e) {
            this._last = e, this._min = e, this._max = e, this._sum = e, this._count = 1
          }
          get weight() {
            return 5
          }
          add(e) {
            this._last = e, e < this._min && (this._min = e), e > this._max && (this._max = e), this._sum += e, this._count++
          }
          toString() {
            return `${this._last}:${this._min}:${this._max}:${this._sum}:${this._count}`
          }
        },
        [r.vR]: class {
          constructor(e) {
            this._value = [e]
          }
          get weight() {
            return this._value.length
          }
          add(e) {
            this._value.push(e)
          }
          toString() {
            return this._value.join(":")
          }
        },
        [r.fN]: class {
          constructor(e) {
            this.first = e, this._value = new Set([e])
          }
          get weight() {
            return this._value.size
          }
          add(e) {
            this._value.add(e)
          }
          toString() {
            return Array.from(this._value).map((e => "string" == typeof e ? (0, o.tx)(e) : e)).join(":")
          }
        }
      }
    },
    17504: (e, t, n) => {
      "use strict";
      n.d(t, {
        VZ: () => c,
        eG: () => s,
        ik: () => a,
        tx: () => i
      });
      var r = n(98478),
        o = n(36092);

      function s(e, t, n, o) {
        return `${e}${t}${n}${Object.entries((0,r.Ce)(o)).sort(((e,t)=>e[0].localeCompare(t[0])))}`
      }

      function i(e) {
        let t = 0;
        for (let n = 0; n < e.length; n++) t = (t << 5) - t + e.charCodeAt(n), t &= t;
        return t >>> 0
      }

      function a(e) {
        let t = "";
        for (const n of e) {
          const e = Object.entries(n.tags),
            r = e.length > 0 ? `|#${e.map((e=>{let[t,n]=e;return`${t}:${n}`})).join(",")}` : "";
          t += `${n.name}@${n.unit}:${n.metric}|${n.metricType}${r}|T${n.timestamp}\n`
        }
        return t
      }

      function c(e) {
        const t = {};
        for (const n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n.replace(o.v7, "_")] = String(e[n]).replace(o.Vt, "_"));
        return t
      }
    },
    6131: (e, t, n) => {
      "use strict";
      n.d(t, {
        HG: () => d,
        ik: () => h,
        m6: () => p
      });
      var r = n(44877),
        o = n(65460),
        s = n(13817),
        i = n(97205),
        a = n(72270),
        c = n(1587),
        u = n(44006);
      let l;
      class d {
        constructor() {
          this._notifyingListeners = !1, this._scopeListeners = [], this._eventProcessors = [], this._breadcrumbs = [], this._attachments = [], this._user = {}, this._tags = {}, this._extra = {}, this._contexts = {}, this._sdkProcessingMetadata = {}, this._propagationContext = f()
        }
        static clone(e) {
          return e ? e.clone() : new d
        }
        clone() {
          const e = new d;
          return e._breadcrumbs = [...this._breadcrumbs], e._tags = {
            ...this._tags
          }, e._extra = {
            ...this._extra
          }, e._contexts = {
            ...this._contexts
          }, e._user = this._user, e._level = this._level, e._span = this._span, e._session = this._session, e._transactionName = this._transactionName, e._fingerprint = this._fingerprint, e._eventProcessors = [...this._eventProcessors], e._requestSession = this._requestSession, e._attachments = [...this._attachments], e._sdkProcessingMetadata = {
            ...this._sdkProcessingMetadata
          }, e._propagationContext = {
            ...this._propagationContext
          }, e._client = this._client, e
        }
        setClient(e) {
          this._client = e
        }
        getClient() {
          return this._client
        }
        addScopeListener(e) {
          this._scopeListeners.push(e)
        }
        addEventProcessor(e) {
          return this._eventProcessors.push(e), this
        }
        setUser(e) {
          return this._user = e || {
            email: void 0,
            id: void 0,
            ip_address: void 0,
            segment: void 0,
            username: void 0
          }, this._session && (0, c.qO)(this._session, {
            user: e
          }), this._notifyScopeListeners(), this
        }
        getUser() {
          return this._user
        }
        getRequestSession() {
          return this._requestSession
        }
        setRequestSession(e) {
          return this._requestSession = e, this
        }
        setTags(e) {
          return this._tags = {
            ...this._tags,
            ...e
          }, this._notifyScopeListeners(), this
        }
        setTag(e, t) {
          return this._tags = {
            ...this._tags,
            [e]: t
          }, this._notifyScopeListeners(), this
        }
        setExtras(e) {
          return this._extra = {
            ...this._extra,
            ...e
          }, this._notifyScopeListeners(), this
        }
        setExtra(e, t) {
          return this._extra = {
            ...this._extra,
            [e]: t
          }, this._notifyScopeListeners(), this
        }
        setFingerprint(e) {
          return this._fingerprint = e, this._notifyScopeListeners(), this
        }
        setLevel(e) {
          return this._level = e, this._notifyScopeListeners(), this
        }
        setTransactionName(e) {
          return this._transactionName = e, this._notifyScopeListeners(), this
        }
        setContext(e, t) {
          return null === t ? delete this._contexts[e] : this._contexts[e] = t, this._notifyScopeListeners(), this
        }
        setSpan(e) {
          return this._span = e, this._notifyScopeListeners(), this
        }
        getSpan() {
          return this._span
        }
        getTransaction() {
          const e = this._span;
          return e && e.transaction
        }
        setSession(e) {
          return e ? this._session = e : delete this._session, this._notifyScopeListeners(), this
        }
        getSession() {
          return this._session
        }
        update(e) {
          if (!e) return this;
          if ("function" == typeof e) {
            const t = e(this);
            return t instanceof d ? t : this
          }
          return e instanceof d ? (this._tags = {
            ...this._tags,
            ...e._tags
          }, this._extra = {
            ...this._extra,
            ...e._extra
          }, this._contexts = {
            ...this._contexts,
            ...e._contexts
          }, e._user && Object.keys(e._user).length && (this._user = e._user), e._level && (this._level = e._level), e._fingerprint && (this._fingerprint = e._fingerprint), e._requestSession && (this._requestSession = e._requestSession), e._propagationContext && (this._propagationContext = e._propagationContext)) : (0, r.Qd)(e) && (this._tags = {
            ...this._tags,
            ...e.tags
          }, this._extra = {
            ...this._extra,
            ...e.extra
          }, this._contexts = {
            ...this._contexts,
            ...e.contexts
          }, e.user && (this._user = e.user), e.level && (this._level = e.level), e.fingerprint && (this._fingerprint = e.fingerprint), e.requestSession && (this._requestSession = e.requestSession), e.propagationContext && (this._propagationContext = e.propagationContext)), this
        }
        clear() {
          return this._breadcrumbs = [], this._tags = {}, this._extra = {}, this._user = {}, this._contexts = {}, this._level = void 0, this._transactionName = void 0, this._fingerprint = void 0, this._requestSession = void 0, this._span = void 0, this._session = void 0, this._notifyScopeListeners(), this._attachments = [], this._propagationContext = f(), this
        }
        addBreadcrumb(e, t) {
          const n = "number" == typeof t ? t : 100;
          if (n <= 0) return this;
          const r = {
              timestamp: (0, o.lu)(),
              ...e
            },
            s = this._breadcrumbs;
          return s.push(r), this._breadcrumbs = s.length > n ? s.slice(-n) : s, this._notifyScopeListeners(), this
        }
        getLastBreadcrumb() {
          return this._breadcrumbs[this._breadcrumbs.length - 1]
        }
        clearBreadcrumbs() {
          return this._breadcrumbs = [], this._notifyScopeListeners(), this
        }
        addAttachment(e) {
          return this._attachments.push(e), this
        }
        getAttachments() {
          return this.getScopeData().attachments
        }
        clearAttachments() {
          return this._attachments = [], this
        }
        getScopeData() {
          const {
            _breadcrumbs: e,
            _attachments: t,
            _contexts: n,
            _tags: r,
            _extra: o,
            _user: s,
            _level: i,
            _fingerprint: a,
            _eventProcessors: c,
            _propagationContext: u,
            _sdkProcessingMetadata: l,
            _transactionName: d,
            _span: p
          } = this;
          return {
            breadcrumbs: e,
            attachments: t,
            contexts: n,
            tags: r,
            extra: o,
            user: s,
            level: i,
            fingerprint: a || [],
            eventProcessors: c,
            propagationContext: u,
            sdkProcessingMetadata: l,
            transactionName: d,
            span: p
          }
        }
        applyToEvent(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
          (0, u.e2)(e, this.getScopeData());
          const r = [...n, ...(0, a.lG)(), ...this._eventProcessors];
          return (0, a.jB)(r, e, t)
        }
        setSDKProcessingMetadata(e) {
          return this._sdkProcessingMetadata = {
            ...this._sdkProcessingMetadata,
            ...e
          }, this
        }
        setPropagationContext(e) {
          return this._propagationContext = e, this
        }
        getPropagationContext() {
          return this._propagationContext
        }
        captureException(e, t) {
          const n = t && t.event_id ? t.event_id : (0, s.eJ)();
          if (!this._client) return i.vF.warn("No client configured on scope - will not capture exception!"), n;
          const r = new Error("Sentry syntheticException");
          return this._client.captureException(e, {
            originalException: e,
            syntheticException: r,
            ...t,
            event_id: n
          }, this), n
        }
        captureMessage(e, t, n) {
          const r = n && n.event_id ? n.event_id : (0, s.eJ)();
          if (!this._client) return i.vF.warn("No client configured on scope - will not capture message!"), r;
          const o = new Error(e);
          return this._client.captureMessage(e, t, {
            originalException: e,
            syntheticException: o,
            ...n,
            event_id: r
          }, this), r
        }
        captureEvent(e, t) {
          const n = t && t.event_id ? t.event_id : (0, s.eJ)();
          return this._client ? (this._client.captureEvent(e, {
            ...t,
            event_id: n
          }, this), n) : (i.vF.warn("No client configured on scope - will not capture event!"), n)
        }
        _notifyScopeListeners() {
          this._notifyingListeners || (this._notifyingListeners = !0, this._scopeListeners.forEach((e => {
            e(this)
          })), this._notifyingListeners = !1)
        }
      }

      function p() {
        return l || (l = new d), l
      }

      function h(e) {
        l = e
      }

      function f() {
        return {
          traceId: (0, s.eJ)(),
          spanId: (0, s.eJ)().substring(16)
        }
      }
    },
    49451: (e, t, n) => {
      "use strict";
      n.d(t, {
        B: () => c,
        J: () => a
      });
      var r = n(97205),
        o = n(95033),
        s = n(23388),
        i = n(37452);

      function a(e, t) {
        !0 === t.debug && (o.T ? r.vF.enable() : (0, r.pq)((() => {
          console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.")
        }))), (0, s.o5)().update(t.initialScope);
        const n = new e(t);
        c(n),
          function(e) {
            e.init ? e.init() : e.setupIntegrations && e.setupIntegrations()
          }(n)
      }

      function c(e) {
        const t = (0, i.BF)().getStackTop();
        t.client = e, t.scope.setClient(e)
      }
    },
    98030: (e, t, n) => {
      "use strict";
      n.d(t, {
        JD: () => i,
        i_: () => r,
        sy: () => o,
        uT: () => s
      });
      const r = "sentry.source",
        o = "sentry.sample_rate",
        s = "sentry.op",
        i = "sentry.origin"
    },
    1587: (e, t, n) => {
      "use strict";
      n.d(t, {
        Vu: () => c,
        fj: () => i,
        qO: () => a
      });
      var r = n(65460),
        o = n(13817),
        s = n(98478);

      function i(e) {
        const t = (0, r.zf)(),
          n = {
            sid: (0, o.eJ)(),
            init: !0,
            timestamp: t,
            started: t,
            duration: 0,
            status: "ok",
            errors: 0,
            ignoreDuration: !1,
            toJSON: () => function(e) {
              return (0, s.Ce)({
                sid: `${e.sid}`,
                init: e.init,
                started: new Date(1e3 * e.started).toISOString(),
                timestamp: new Date(1e3 * e.timestamp).toISOString(),
                status: e.status,
                errors: e.errors,
                did: "number" == typeof e.did || "string" == typeof e.did ? `${e.did}` : void 0,
                duration: e.duration,
                abnormal_mechanism: e.abnormal_mechanism,
                attrs: {
                  release: e.release,
                  environment: e.environment,
                  ip_address: e.ipAddress,
                  user_agent: e.userAgent
                }
              })
            }(n)
          };
        return e && a(n, e), n
      }

      function a(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (t.user && (!e.ipAddress && t.user.ip_address && (e.ipAddress = t.user.ip_address), e.did || t.did || (e.did = t.user.id || t.user.email || t.user.username)), e.timestamp = t.timestamp || (0, r.zf)(), t.abnormal_mechanism && (e.abnormal_mechanism = t.abnormal_mechanism), t.ignoreDuration && (e.ignoreDuration = t.ignoreDuration), t.sid && (e.sid = 32 === t.sid.length ? t.sid : (0, o.eJ)()), void 0 !== t.init && (e.init = t.init), !e.did && t.did && (e.did = `${t.did}`), "number" == typeof t.started && (e.started = t.started), e.ignoreDuration) e.duration = void 0;
        else if ("number" == typeof t.duration) e.duration = t.duration;
        else {
          const t = e.timestamp - e.started;
          e.duration = t >= 0 ? t : 0
        }
        t.release && (e.release = t.release), t.environment && (e.environment = t.environment), !e.ipAddress && t.ipAddress && (e.ipAddress = t.ipAddress), !e.userAgent && t.userAgent && (e.userAgent = t.userAgent), "number" == typeof t.errors && (e.errors = t.errors), t.status && (e.status = t.status)
      }

      function c(e, t) {
        let n = {};
        t ? n = {
          status: t
        } : "ok" === e.status && (n = {
          status: "exited"
        }), a(e, n)
      }
    },
    53951: (e, t, n) => {
      "use strict";
      n.d(t, {
        k: () => u,
        l: () => c
      });
      var r = n(98478),
        o = n(67606),
        s = n(23388),
        i = n(54569),
        a = n(67752);

      function c(e, t, n) {
        const s = t.getOptions(),
          {
            publicKey: i
          } = t.getDsn() || {},
          {
            segment: a
          } = n && n.getUser() || {},
          c = (0, r.Ce)({
            environment: s.environment || o.U,
            release: s.release,
            user_segment: a,
            public_key: i,
            trace_id: e
          });
        return t.emit && t.emit("createDsc", c), c
      }

      function u(e) {
        const t = (0, s.KU)();
        if (!t) return {};
        const n = c((0, a.et)(e).trace_id || "", t, (0, s.o5)()),
          r = (0, i.z)(e);
        if (!r) return n;
        const o = r && r._frozenDynamicSamplingContext;
        if (o) return o;
        const {
          sampleRate: u,
          source: l
        } = r.metadata;
        null != u && (n.sample_rate = `${u}`);
        const d = (0, a.et)(r);
        return l && "url" !== l && (n.transaction = d.description), n.sampled = String((0, a.pK)(r)), t.emit && t.emit("createDsc", n), n
      }
    },
    66924: (e, t, n) => {
      "use strict";
      n.d(t, {
        U: () => S,
        p: () => b
      });
      var r = n(97205),
        o = n(95033),
        s = n(37452),
        i = n(67752),
        a = n(82076),
        c = n(11526),
        u = n(8599);
      let l = !1;

      function d() {
        const e = (0, u.Z7)();
        if (e) {
          const t = "internal_error";
          o.T && r.vF.log(`[Tracing] Transaction: ${t} -> Global error occured`), e.setStatus(t)
        }
      }
      d.tag = "sentry_tracingErrorCallback";
      var p = n(9304),
        h = n(44877),
        f = n(98030),
        m = n(17638);

      function g(e, t, n) {
        if (!(0, m.w)(t)) return e.sampled = !1, e;
        if (void 0 !== e.sampled) return e.setAttribute(f.sy, Number(e.sampled)), e;
        let s;
        return "function" == typeof t.tracesSampler ? (s = t.tracesSampler(n), e.setAttribute(f.sy, Number(s))) : void 0 !== n.parentSampled ? s = n.parentSampled : void 0 !== t.tracesSampleRate ? (s = t.tracesSampleRate, e.setAttribute(f.sy, Number(s))) : (s = 1, e.setAttribute(f.sy, s)), a = s, ((0, h.yr)(a) || "number" != typeof a && "boolean" != typeof a ? (o.T && r.vF.warn(`[Tracing] Given sample rate is invalid. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(a)} of type ${JSON.stringify(typeof a)}.`), 0) : !(a < 0 || a > 1) || (o.T && r.vF.warn(`[Tracing] Given sample rate is invalid. Sample rate must be between 0 and 1. Got ${a}.`), 0)) ? s ? (e.sampled = Math.random() < s, e.sampled ? (o.T && r.vF.log(`[Tracing] starting ${e.op} transaction - ${(0,i.et)(e).description}`), e) : (o.T && r.vF.log(`[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = ${Number(s)})`), e)) : (o.T && r.vF.log("[Tracing] Discarding transaction because " + ("function" == typeof t.tracesSampler ? "tracesSampler returned 0 or false" : "a negative sampling decision was inherited or tracesSampleRate is set to 0")), e.sampled = !1, e) : (o.T && r.vF.warn("[Tracing] Discarding transaction because of invalid sample rate."), e.sampled = !1, e);
        var a
      }
      var v = n(53578);

      function y() {
        const e = this.getScope().getSpan();
        return e ? {
          "sentry-trace": (0, i.Qh)(e)
        } : {}
      }

      function _(e, t) {
        const n = this.getClient(),
          s = n && n.getOptions() || {},
          i = s.instrumenter || "sentry",
          a = e.instrumenter || "sentry";
        i !== a && (o.T && r.vF.error(`A transaction was started with instrumenter=\`${a}\`, but the SDK is configured with the \`${i}\` instrumenter.\nThe transaction will not be sampled. Please use the ${i} instrumentation to start transactions.`), e.sampled = !1);
        let c = new v.Z(e, this);
        return c = g(c, s, {
          parentSampled: e.parentSampled,
          transactionContext: e,
          ...t
        }), c.isRecording() && c.initSpanRecorder(s._experiments && s._experiments.maxSpans), n && n.emit && n.emit("startTransaction", c), c
      }

      function b(e, t, n, r, o, s, i) {
        let a = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
        const c = e.getClient(),
          u = c && c.getOptions() || {};
        let l = new p.zX(t, e, n, r, i, o, a);
        return l = g(l, u, {
          parentSampled: t.parentSampled,
          transactionContext: t,
          ...s
        }), l.isRecording() && l.initSpanRecorder(u._experiments && u._experiments.maxSpans), c && c.emit && c.emit("startTransaction", l), l
      }

      function S() {
        const e = (0, s.EU)();
        e.__SENTRY__ && (e.__SENTRY__.extensions = e.__SENTRY__.extensions || {}, e.__SENTRY__.extensions.startTransaction || (e.__SENTRY__.extensions.startTransaction = _), e.__SENTRY__.extensions.traceHeaders || (e.__SENTRY__.extensions.traceHeaders = y), l || (l = !0, (0, a.L)(d), (0, c.r)(d)))
      }
    },
    9304: (e, t, n) => {
      "use strict";
      n.d(t, {
        Cq: () => u,
        zX: () => p
      });
      var r = n(97205),
        o = n(65460),
        s = n(95033),
        i = n(67752),
        a = n(15512),
        c = n(53578);
      const u = {
          idleTimeout: 1e3,
          finalTimeout: 3e4,
          heartbeatInterval: 5e3
        },
        l = ["heartbeatFailed", "idleTimeout", "documentHidden", "finalTimeout", "externalFinish", "cancelled"];
      class d extends a.l {
        constructor(e, t, n, r) {
          super(r), this._pushActivity = e, this._popActivity = t, this.transactionSpanId = n
        }
        add(e) {
          var t = this;
          if (e.spanContext().spanId !== this.transactionSpanId) {
            const n = e.end;
            e.end = function() {
              t._popActivity(e.spanContext().spanId);
              for (var r = arguments.length, o = new Array(r), s = 0; s < r; s++) o[s] = arguments[s];
              return n.apply(e, o)
            }, void 0 === (0, i.et)(e).timestamp && this._pushActivity(e.spanContext().spanId)
          }
          super.add(e)
        }
      }
      class p extends c.Z {
        constructor(e, t) {
          let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : u.idleTimeout,
            o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : u.finalTimeout,
            i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : u.heartbeatInterval,
            a = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
            c = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
          super(e, t), this._idleHub = t, this._idleTimeout = n, this._finalTimeout = o, this._heartbeatInterval = i, this._onScope = a, this.activities = {}, this._heartbeatCounter = 0, this._finished = !1, this._idleTimeoutCanceledPermanently = !1, this._beforeFinishCallbacks = [], this._finishReason = l[4], this._autoFinishAllowed = !c, a && (s.T && r.vF.log(`Setting idle transaction on scope. Span ID: ${this.spanContext().spanId}`), t.getScope().setSpan(this)), c || this._restartIdleTimeout(), setTimeout((() => {
            this._finished || (this.setStatus("deadline_exceeded"), this._finishReason = l[3], this.end())
          }), this._finalTimeout)
        }
        end(e) {
          const t = (0, i.cI)(e);
          if (this._finished = !0, this.activities = {}, "ui.action.click" === this.op && this.setAttribute("finishReason", this._finishReason), this.spanRecorder) {
            s.T && r.vF.log("[Tracing] finishing IdleTransaction", new Date(1e3 * t).toISOString(), this.op);
            for (const e of this._beforeFinishCallbacks) e(this, t);
            this.spanRecorder.spans = this.spanRecorder.spans.filter((e => {
              if (e.spanContext().spanId === this.spanContext().spanId) return !0;
              (0, i.et)(e).timestamp || (e.setStatus("cancelled"), e.end(t), s.T && r.vF.log("[Tracing] cancelling span since transaction ended early", JSON.stringify(e, void 0, 2)));
              const {
                start_timestamp: n,
                timestamp: o
              } = (0, i.et)(e), a = n && n < t, c = (this._finalTimeout + this._idleTimeout) / 1e3, u = o && n && o - n < c;
              if (s.T) {
                const t = JSON.stringify(e, void 0, 2);
                a ? u || r.vF.log("[Tracing] discarding Span since it finished after Transaction final timeout", t) : r.vF.log("[Tracing] discarding Span since it happened after Transaction was finished", t)
              }
              return a && u
            })), s.T && r.vF.log("[Tracing] flushing IdleTransaction")
          } else s.T && r.vF.log("[Tracing] No active IdleTransaction");
          if (this._onScope) {
            const e = this._idleHub.getScope();
            e.getTransaction() === this && e.setSpan(void 0)
          }
          return super.end(e)
        }
        registerBeforeFinishCallback(e) {
          this._beforeFinishCallbacks.push(e)
        }
        initSpanRecorder(e) {
          if (!this.spanRecorder) {
            const t = e => {
                this._finished || this._pushActivity(e)
              },
              n = e => {
                this._finished || this._popActivity(e)
              };
            this.spanRecorder = new d(t, n, this.spanContext().spanId, e), s.T && r.vF.log("Starting heartbeat"), this._pingHeartbeat()
          }
          this.spanRecorder.add(this)
        }
        cancelIdleTimeout(e) {
          let {
            restartOnChildSpanChange: t
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
            restartOnChildSpanChange: !0
          };
          this._idleTimeoutCanceledPermanently = !1 === t, this._idleTimeoutID && (clearTimeout(this._idleTimeoutID), this._idleTimeoutID = void 0, 0 === Object.keys(this.activities).length && this._idleTimeoutCanceledPermanently && (this._finishReason = l[5], this.end(e)))
        }
        setFinishReason(e) {
          this._finishReason = e
        }
        sendAutoFinishSignal() {
          this._autoFinishAllowed || (s.T && r.vF.log("[Tracing] Received finish signal for idle transaction."), this._restartIdleTimeout(), this._autoFinishAllowed = !0)
        }
        _restartIdleTimeout(e) {
          this.cancelIdleTimeout(), this._idleTimeoutID = setTimeout((() => {
            this._finished || 0 !== Object.keys(this.activities).length || (this._finishReason = l[1], this.end(e))
          }), this._idleTimeout)
        }
        _pushActivity(e) {
          this.cancelIdleTimeout(void 0, {
            restartOnChildSpanChange: !this._idleTimeoutCanceledPermanently
          }), s.T && r.vF.log(`[Tracing] pushActivity: ${e}`), this.activities[e] = !0, s.T && r.vF.log("[Tracing] new activities count", Object.keys(this.activities).length)
        }
        _popActivity(e) {
          if (this.activities[e] && (s.T && r.vF.log(`[Tracing] popActivity ${e}`), delete this.activities[e], s.T && r.vF.log("[Tracing] new activities count", Object.keys(this.activities).length)), 0 === Object.keys(this.activities).length) {
            const e = (0, o.zf)();
            this._idleTimeoutCanceledPermanently ? this._autoFinishAllowed && (this._finishReason = l[5], this.end(e)) : this._restartIdleTimeout(e + this._idleTimeout / 1e3)
          }
        }
        _beat() {
          if (this._finished) return;
          const e = Object.keys(this.activities).join("");
          e === this._prevHeartbeatString ? this._heartbeatCounter++ : this._heartbeatCounter = 1, this._prevHeartbeatString = e, this._heartbeatCounter >= 3 ? this._autoFinishAllowed && (s.T && r.vF.log("[Tracing] Transaction finished because of no change for 3 heart beats"), this.setStatus("deadline_exceeded"), this._finishReason = l[0], this.end()) : this._pingHeartbeat()
        }
        _pingHeartbeat() {
          s.T && r.vF.log(`pinging Heartbeat -> current counter: ${this._heartbeatCounter}`), setTimeout((() => {
            this._beat()
          }), this._heartbeatInterval)
        }
      }
    },
    84894: (e, t, n) => {
      "use strict";
      n.d(t, {
        X: () => o
      });
      var r = n(8599);

      function o(e, t, n) {
        const o = (0, r.Z7)();
        o && o.setMeasurement(e, t, n)
      }
    },
    15512: (e, t, n) => {
      "use strict";
      n.d(t, {
        L: () => h,
        l: () => p
      });
      var r = n(13817),
        o = n(65460),
        s = n(97205),
        i = n(98478),
        a = n(95033),
        c = n(98030),
        u = n(54569),
        l = n(67752),
        d = n(70334);
      class p {
        constructor() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1e3;
          this._maxlen = e, this.spans = []
        }
        add(e) {
          this.spans.length > this._maxlen ? e.spanRecorder = void 0 : this.spans.push(e)
        }
      }
      class h {
        constructor() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          this._traceId = e.traceId || (0, r.eJ)(), this._spanId = e.spanId || (0, r.eJ)().substring(16), this._startTime = e.startTimestamp || (0, o.zf)(), this.tags = e.tags ? {
            ...e.tags
          } : {}, this.data = e.data ? {
            ...e.data
          } : {}, this.instrumenter = e.instrumenter || "sentry", this._attributes = {}, this.setAttributes({
            [c.JD]: e.origin || "manual",
            [c.uT]: e.op,
            ...e.attributes
          }), this._name = e.name || e.description, e.parentSpanId && (this._parentSpanId = e.parentSpanId), "sampled" in e && (this._sampled = e.sampled), e.status && (this._status = e.status), e.endTimestamp && (this._endTime = e.endTimestamp)
        }
        get name() {
          return this._name || ""
        }
        set name(e) {
          this.updateName(e)
        }
        get description() {
          return this._name
        }
        set description(e) {
          this._name = e
        }
        get traceId() {
          return this._traceId
        }
        set traceId(e) {
          this._traceId = e
        }
        get spanId() {
          return this._spanId
        }
        set spanId(e) {
          this._spanId = e
        }
        set parentSpanId(e) {
          this._parentSpanId = e
        }
        get parentSpanId() {
          return this._parentSpanId
        }
        get sampled() {
          return this._sampled
        }
        set sampled(e) {
          this._sampled = e
        }
        get attributes() {
          return this._attributes
        }
        set attributes(e) {
          this._attributes = e
        }
        get startTimestamp() {
          return this._startTime
        }
        set startTimestamp(e) {
          this._startTime = e
        }
        get endTimestamp() {
          return this._endTime
        }
        set endTimestamp(e) {
          this._endTime = e
        }
        get status() {
          return this._status
        }
        set status(e) {
          this._status = e
        }
        get op() {
          return this._attributes[c.uT]
        }
        set op(e) {
          this.setAttribute(c.uT, e)
        }
        get origin() {
          return this._attributes[c.JD]
        }
        set origin(e) {
          this.setAttribute(c.JD, e)
        }
        spanContext() {
          const {
            _spanId: e,
            _traceId: t,
            _sampled: n
          } = this;
          return {
            spanId: e,
            traceId: t,
            traceFlags: n ? l.aO : l.CC
          }
        }
        startChild(e) {
          const t = new h({
            ...e,
            parentSpanId: this._spanId,
            sampled: this._sampled,
            traceId: this._traceId
          });
          t.spanRecorder = this.spanRecorder, t.spanRecorder && t.spanRecorder.add(t);
          const n = (0, u.z)(this);
          if (t.transaction = n, a.T && n) {
            const r = `[Tracing] Starting '${e&&e.op||"< unknown op >"}' span on transaction '${(0,l.et)(t).description||"< unknown name >"}' (${n.spanContext().spanId}).`;
            s.vF.log(r), this._logMessage = r
          }
          return t
        }
        setTag(e, t) {
          return this.tags = {
            ...this.tags,
            [e]: t
          }, this
        }
        setData(e, t) {
          return this.data = {
            ...this.data,
            [e]: t
          }, this
        }
        setAttribute(e, t) {
          void 0 === t ? delete this._attributes[e] : this._attributes[e] = t
        }
        setAttributes(e) {
          Object.keys(e).forEach((t => this.setAttribute(t, e[t])))
        }
        setStatus(e) {
          return this._status = e, this
        }
        setHttpStatus(e) {
          return (0, d.N8)(this, e), this
        }
        setName(e) {
          this.updateName(e)
        }
        updateName(e) {
          return this._name = e, this
        }
        isSuccess() {
          return "ok" === this._status
        }
        finish(e) {
          return this.end(e)
        }
        end(e) {
          if (this._endTime) return;
          const t = (0, u.z)(this);
          if (a.T && t && t.spanContext().spanId !== this._spanId) {
            const e = this._logMessage;
            e && s.vF.log(e.replace("Starting", "Finishing"))
          }
          this._endTime = (0, l.cI)(e)
        }
        toTraceparent() {
          return (0, l.Qh)(this)
        }
        toContext() {
          return (0, i.Ce)({
            data: this._getData(),
            description: this._name,
            endTimestamp: this._endTime,
            op: this.op,
            parentSpanId: this._parentSpanId,
            sampled: this._sampled,
            spanId: this._spanId,
            startTimestamp: this._startTime,
            status: this._status,
            tags: this.tags,
            traceId: this._traceId
          })
        }
        updateWithContext(e) {
          return this.data = e.data || {}, this._name = e.name || e.description, this._endTime = e.endTimestamp, this.op = e.op, this._parentSpanId = e.parentSpanId, this._sampled = e.sampled, this._spanId = e.spanId || this._spanId, this._startTime = e.startTimestamp || this._startTime, this._status = e.status, this.tags = e.tags || {}, this._traceId = e.traceId || this._traceId, this
        }
        getTraceContext() {
          return (0, l.kX)(this)
        }
        getSpanJSON() {
          return (0, i.Ce)({
            data: this._getData(),
            description: this._name,
            op: this._attributes[c.uT],
            parent_span_id: this._parentSpanId,
            span_id: this._spanId,
            start_timestamp: this._startTime,
            status: this._status,
            tags: Object.keys(this.tags).length > 0 ? this.tags : void 0,
            timestamp: this._endTime,
            trace_id: this._traceId,
            origin: this._attributes[c.JD]
          })
        }
        isRecording() {
          return !this._endTime && !!this._sampled
        }
        toJSON() {
          return this.getSpanJSON()
        }
        _getData() {
          const {
            data: e,
            _attributes: t
          } = this, n = Object.keys(e).length > 0, r = Object.keys(t).length > 0;
          if (n || r) return n && r ? {
            ...e,
            ...t
          } : n ? e : t
        }
      }
    },
    70334: (e, t, n) => {
      "use strict";
      var r;

      function o(e) {
        if (e < 400 && e >= 100) return "ok";
        if (e >= 400 && e < 500) switch (e) {
          case 401:
            return "unauthenticated";
          case 403:
            return "permission_denied";
          case 404:
            return "not_found";
          case 409:
            return "already_exists";
          case 413:
            return "failed_precondition";
          case 429:
            return "resource_exhausted";
          default:
            return "invalid_argument"
        }
        if (e >= 500 && e < 600) switch (e) {
          case 501:
            return "unimplemented";
          case 503:
            return "unavailable";
          case 504:
            return "deadline_exceeded";
          default:
            return "internal_error"
        }
        return "unknown_error"
      }
      n.d(t, {
          AJ: () => o,
          Fp: () => r,
          N8: () => i,
          o6: () => s
        }),
        function(e) {
          e.Ok = "ok", e.DeadlineExceeded = "deadline_exceeded", e.Unauthenticated = "unauthenticated", e.PermissionDenied = "permission_denied", e.NotFound = "not_found", e.ResourceExhausted = "resource_exhausted", e.InvalidArgument = "invalid_argument", e.Unimplemented = "unimplemented", e.Unavailable = "unavailable", e.InternalError = "internal_error", e.UnknownError = "unknown_error", e.Cancelled = "cancelled", e.AlreadyExists = "already_exists", e.FailedPrecondition = "failed_precondition", e.Aborted = "aborted", e.OutOfRange = "out_of_range", e.DataLoss = "data_loss"
        }(r || (r = {}));
      const s = o;

      function i(e, t) {
        e.setTag("http.status_code", String(t)), e.setData("http.response.status_code", t);
        const n = o(t);
        "unknown_error" !== n && e.setStatus(n)
      }
    },
    69867: (e, t, n) => {
      "use strict";
      n.d(t, {
        Bk: () => v,
        D7: () => f,
        Lk: () => h,
        Uk: () => g,
        V4: () => y,
        nV: () => m,
        uP: () => p
      });
      var r = n(37427),
        o = n(97205),
        s = n(98478),
        i = n(95033),
        a = n(23388),
        c = n(37452),
        u = n(62495),
        l = n(17638),
        d = n(67752);

      function p(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {},
          r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {};
        const o = (0, c.BF)(),
          s = (0, a.o5)(),
          i = s.getSpan(),
          l = b(e),
          d = _(o, i, l);
        return s.setSpan(d), (0, u.x)((() => t(d)), (e => {
          d && d.setStatus("internal_error"), n(e, d)
        }), (() => {
          d && d.end(), s.setSpan(i), r()
        }))
      }

      function h(e, t) {
        const n = b(e);
        return (0, c.fx)((() => (0, a.v4)(e.scope, (r => {
          const o = (0, c.BF)(),
            s = r.getSpan(),
            i = e.onlyIfParent && !s ? void 0 : _(o, s, n);
          return r.setSpan(i), (0, u.x)((() => t(i)), (() => {
            if (i) {
              const {
                status: e
              } = (0, d.et)(i);
              e && "ok" !== e || i.setStatus("internal_error")
            }
          }), (() => i && i.end()))
        }))))
      }
      const f = h;

      function m(e, t) {
        const n = b(e);
        return (0, c.fx)((() => (0, a.v4)(e.scope, (r => {
          const o = (0, c.BF)(),
            s = r.getSpan(),
            i = e.onlyIfParent && !s ? void 0 : _(o, s, n);

          function a() {
            i && i.end()
          }
          return r.setSpan(i), (0, u.x)((() => t(i, a)), (() => {
            if (i && i.isRecording()) {
              const {
                status: e
              } = (0, d.et)(i);
              e && "ok" !== e || i.setStatus("internal_error")
            }
          }))
        }))))
      }

      function g(e) {
        if (!(0, l.w)()) return;
        const t = b(e),
          n = (0, c.BF)(),
          r = e.scope ? e.scope.getSpan() : v();
        if (!e.onlyIfParent || r) {
          if (r) return r.startChild(t); {
            const e = (0, c.rm)(),
              r = (0, a.o5)(),
              {
                traceId: o,
                dsc: s,
                parentSpanId: i,
                sampled: u
              } = {
                ...e.getPropagationContext(),
                ...r.getPropagationContext()
              };
            return n.startTransaction({
              traceId: o,
              parentSpanId: i,
              parentSampled: u,
              ...t,
              metadata: {
                dynamicSamplingContext: s,
                ...t.metadata
              }
            })
          }
        }
      }

      function v() {
        return (0, a.o5)().getSpan()
      }

      function y(e, t) {
        let {
          sentryTrace: n,
          baggage: c
        } = e;
        const u = (0, a.o5)(),
          {
            traceparentData: l,
            dynamicSamplingContext: d,
            propagationContext: p
          } = (0, r.E0)(n, c);
        u.setPropagationContext(p), i.T && l && o.vF.log(`[Tracing] Continuing trace ${l.traceId}.`);
        const h = {
          ...l,
          metadata: (0, s.Ce)({
            dynamicSamplingContext: d
          })
        };
        return t ? t(h) : h
      }

      function _(e, t, n) {
        if ((0, l.w)()) {
          if (t) return t.startChild(n); {
            const t = (0, c.rm)(),
              r = (0, a.o5)(),
              {
                traceId: o,
                dsc: s,
                parentSpanId: i,
                sampled: u
              } = {
                ...t.getPropagationContext(),
                ...r.getPropagationContext()
              };
            return e.startTransaction({
              traceId: o,
              parentSpanId: i,
              parentSampled: u,
              ...n,
              metadata: {
                dynamicSamplingContext: s,
                ...n.metadata
              }
            })
          }
        }
      }

      function b(e) {
        if (e.startTime) {
          const t = {
            ...e
          };
          return t.startTimestamp = (0, d.cI)(e.startTime), delete t.startTime, t
        }
        return e
      }
    },
    53578: (e, t, n) => {
      "use strict";
      n.d(t, {
        Z: () => d
      });
      var r = n(98478),
        o = n(97205),
        s = n(95033),
        i = n(37452),
        a = n(98030),
        c = n(67752),
        u = n(53951),
        l = n(15512);
      class d extends l.L {
        constructor(e, t) {
          super(e), this._measurements = {}, this._contexts = {}, this._hub = t || (0, i.BF)(), this._name = e.name || "", this._metadata = {
            ...e.metadata
          }, this._trimEnd = e.trimEnd, this.transaction = this;
          const n = this._metadata.dynamicSamplingContext;
          n && (this._frozenDynamicSamplingContext = {
            ...n
          })
        }
        get name() {
          return this._name
        }
        set name(e) {
          this.setName(e)
        }
        get metadata() {
          return {
            source: "custom",
            spanMetadata: {},
            ...this._metadata,
            ...this._attributes[a.i_] && {
              source: this._attributes[a.i_]
            },
            ...this._attributes[a.sy] && {
              sampleRate: this._attributes[a.sy]
            }
          }
        }
        set metadata(e) {
          this._metadata = e
        }
        setName(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "custom";
          this._name = e, this.setAttribute(a.i_, t)
        }
        updateName(e) {
          return this._name = e, this
        }
        initSpanRecorder() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1e3;
          this.spanRecorder || (this.spanRecorder = new l.l(e)), this.spanRecorder.add(this)
        }
        setContext(e, t) {
          null === t ? delete this._contexts[e] : this._contexts[e] = t
        }
        setMeasurement(e, t) {
          let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          this._measurements[e] = {
            value: t,
            unit: n
          }
        }
        setMetadata(e) {
          this._metadata = {
            ...this._metadata,
            ...e
          }
        }
        end(e) {
          const t = (0, c.cI)(e),
            n = this._finishTransaction(t);
          if (n) return this._hub.captureEvent(n)
        }
        toContext() {
          const e = super.toContext();
          return (0, r.Ce)({
            ...e,
            name: this._name,
            trimEnd: this._trimEnd
          })
        }
        updateWithContext(e) {
          return super.updateWithContext(e), this._name = e.name || "", this._trimEnd = e.trimEnd, this
        }
        getDynamicSamplingContext() {
          return (0, u.k)(this)
        }
        setHub(e) {
          this._hub = e
        }
        _finishTransaction(e) {
          if (void 0 !== this._endTime) return;
          this._name || (s.T && o.vF.warn("Transaction has no name, falling back to `<unlabeled transaction>`."), this._name = "<unlabeled transaction>"), super.end(e);
          const t = this._hub.getClient();
          if (t && t.emit && t.emit("finishTransaction", this), !0 !== this._sampled) return s.T && o.vF.log("[Tracing] Discarding transaction because its trace was not chosen to be sampled."), void(t && t.recordDroppedEvent("sample_rate", "transaction"));
          const n = this.spanRecorder ? this.spanRecorder.spans.filter((e => e !== this && (0, c.et)(e).timestamp)) : [];
          if (this._trimEnd && n.length > 0) {
            const e = n.map((e => (0, c.et)(e).timestamp)).filter(Boolean);
            this._endTime = e.reduce(((e, t) => e > t ? e : t))
          }
          const {
            metadata: r
          } = this, {
            source: i
          } = r, a = {
            contexts: {
              ...this._contexts,
              trace: (0, c.kX)(this)
            },
            spans: n,
            start_timestamp: this._startTime,
            tags: this.tags,
            timestamp: this._endTime,
            transaction: this._name,
            type: "transaction",
            sdkProcessingMetadata: {
              ...r,
              dynamicSamplingContext: (0, u.k)(this)
            },
            ...i && {
              transaction_info: {
                source: i
              }
            }
          };
          return Object.keys(this._measurements).length > 0 && (s.T && o.vF.log("[Measurements] Adding measurements to transaction", JSON.stringify(this._measurements, void 0, 2)), a.measurements = this._measurements), s.T && o.vF.log(`[Tracing] Finishing ${this.op} transaction: ${this._name}.`), a
        }
      }
    },
    8599: (e, t, n) => {
      "use strict";
      n.d(t, {
        Z7: () => s,
        nc: () => i
      });
      var r = n(37427),
        o = n(37452);

      function s(e) {
        return (e || (0, o.BF)()).getScope().getTransaction()
      }
      const i = r.nc
    },
    38521: (e, t, n) => {
      "use strict";
      n.d(t, {
        o: () => l
      });
      var r = n(46951),
        o = n(84541);
      var s = n(21249),
        i = n(80836),
        a = n(97205),
        c = n(95033);
      const u = 30;

      function l(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function(e) {
            const t = [];

            function n(e) {
              return t.splice(t.indexOf(e), 1)[0]
            }
            return {
              $: t,
              add: function(s) {
                if (!(void 0 === e || t.length < e)) return (0, o.xg)(new r.U("Not adding Promise because buffer limit was reached."));
                const i = s();
                return -1 === t.indexOf(i) && t.push(i), i.then((() => n(i))).then(null, (() => n(i).then(null, (() => {})))), i
              },
              drain: function(e) {
                return new o.T2(((n, r) => {
                  let s = t.length;
                  if (!s) return n(!0);
                  const i = setTimeout((() => {
                    e && e > 0 && n(!1)
                  }), e);
                  t.forEach((e => {
                    (0, o.XW)(e).then((() => {
                      --s || (clearTimeout(i), n(!0))
                    }), r)
                  }))
                }))
              }
            }
          }(e.bufferSize || u),
          l = {};

        function p(u) {
          const p = [];
          if ((0, s.yH)(u, ((t, n) => {
              const r = (0, s.zk)(n);
              if ((0, i.Jz)(l, r)) {
                const o = d(t, n);
                e.recordDroppedEvent("ratelimit_backoff", r, o)
              } else p.push(t)
            })), 0 === p.length) return (0, o.XW)();
          const h = (0, s.h4)(u[0], p),
            f = t => {
              (0, s.yH)(h, ((n, r) => {
                const o = d(n, r);
                e.recordDroppedEvent(t, (0, s.zk)(r), o)
              }))
            };
          return n.add((() => t({
            body: (0, s.bN)(h, e.textEncoder)
          }).then((e => (void 0 !== e.statusCode && (e.statusCode < 200 || e.statusCode >= 300) && c.T && a.vF.warn(`Sentry responded with status code ${e.statusCode} to sent event.`), l = (0, i.wq)(l, e), e)), (e => {
            throw f("network_error"), e
          })))).then((e => e), (e => {
            if (e instanceof r.U) return c.T && a.vF.error("Skipped sending event because buffer is full."), f("queue_overflow"), (0, o.XW)();
            throw e
          }))
        }
        return p.__sentry__baseTransport__ = !0, {
          send: p,
          flush: e => n.drain(e)
        }
      }

      function d(e, t) {
        if ("event" === t || "transaction" === t) return Array.isArray(e) ? e[1] : void 0
      }
    },
    53743: (e, t, n) => {
      "use strict";
      n.d(t, {
        N: () => a
      });
      var r = n(21249),
        o = n(93088),
        s = n(36839);

      function i(e, t) {
        let n;
        return (0, r.yH)(e, ((e, r) => (t.includes(r) && (n = Array.isArray(e) ? e[1] : void 0), !!n))), n
      }

      function a(e, t) {
        return n => {
          const r = e(n),
            a = {};

          function c(t, r) {
            const c = r ? `${t}:${r}` : t;
            if (!a[c]) {
              const u = (0, o.hH)(t);
              if (!u) return;
              const l = (0, s.Z)(u);
              a[c] = r ? function(e, t) {
                return n => {
                  const r = e(n);
                  return {
                    send: async e => {
                      const n = i(e, ["event", "transaction", "profile", "replay_event"]);
                      return n && (n.release = t), r.send(e)
                    },
                    flush: e => r.flush(e)
                  }
                }
              }(e, r)({
                ...n,
                url: l
              }) : e({
                ...n,
                url: l
              })
            }
            return a[c]
          }
          return {
            send: async function(e) {
              const n = t({
                envelope: e,
                getEvent: function(t) {
                  const n = t && t.length ? t : ["event"];
                  return i(e, n)
                }
              }).map((e => "string" == typeof e ? c(e, void 0) : c(e.dsn, e.release))).filter((e => !!e));
              return 0 === n.length && n.push(r), (await Promise.all(n.map((t => t.send(e)))))[0]
            },
            flush: async function(e) {
              const t = [...Object.keys(a).map((e => a[e])), r];
              return (await Promise.all(t.map((t => t.flush(e))))).every((e => e))
            }
          }
        }
      }
    },
    60809: (e, t, n) => {
      "use strict";
      n.d(t, {
        BP: () => d
      });
      var r = n(97205),
        o = n(21249),
        s = n(80836),
        i = n(95033);
      const a = 100,
        c = 5e3,
        u = 36e5;

      function l(e, t) {
        i.T && r.vF.info(`[Offline]: ${e}`, t)
      }

      function d(e) {
        return t => {
          const n = e(t),
            r = t.createStore ? t.createStore(t) : void 0;
          let i, d = c;

          function p(e) {
            r && (i && clearTimeout(i), i = setTimeout((async () => {
              i = void 0;
              const e = await r.pop();
              e && (l("Attempting to send previously queued event"), f(e).catch((e => {
                l("Failed to retry sending", e)
              })))
            }), e), "number" != typeof i && i.unref && i.unref())
          }

          function h() {
            i || (p(d), d = Math.min(2 * d, u))
          }
          async function f(e) {
            try {
              const t = await n.send(e);
              let r = a;
              if (t)
                if (t.headers && t.headers["retry-after"]) r = (0, s.FA)(t.headers["retry-after"]);
                else if ((t.statusCode || 0) >= 400) return t;
              return p(r), d = c, t
            } catch (n) {
              if (r && await
                function(e, n, r) {
                  return !(0, o.hP)(e, ["replay_event", "replay_recording", "client_report"]) && (!t.shouldStore || t.shouldStore(e, n, r))
                }(e, n, d)) return await r.insert(e), h(), l("Error sending. Event queued", n), {};
              throw n
            }
          }
          return t.flushAtStartup && h(), {
            send: f,
            flush: e => n.flush(e)
          }
        }
      }
    },
    44006: (e, t, n) => {
      "use strict";
      n.d(t, {
        Rg: () => u,
        e2: () => c
      });
      var r = n(98478),
        o = n(13817),
        s = n(53951),
        i = n(54569),
        a = n(67752);

      function c(e, t) {
        const {
          fingerprint: n,
          span: c,
          breadcrumbs: u,
          sdkProcessingMetadata: l
        } = t;
        ! function(e, t) {
          const {
            extra: n,
            tags: o,
            user: s,
            contexts: i,
            level: a,
            transactionName: c
          } = t, u = (0, r.Ce)(n);
          u && Object.keys(u).length && (e.extra = {
            ...u,
            ...e.extra
          });
          const l = (0, r.Ce)(o);
          l && Object.keys(l).length && (e.tags = {
            ...l,
            ...e.tags
          });
          const d = (0, r.Ce)(s);
          d && Object.keys(d).length && (e.user = {
            ...d,
            ...e.user
          });
          const p = (0, r.Ce)(i);
          p && Object.keys(p).length && (e.contexts = {
            ...p,
            ...e.contexts
          }), a && (e.level = a), c && (e.transaction = c)
        }(e, t), c && function(e, t) {
            e.contexts = {
              trace: (0, a.kX)(t),
              ...e.contexts
            };
            const n = (0, i.z)(t);
            if (n) {
              e.sdkProcessingMetadata = {
                dynamicSamplingContext: (0, s.k)(t),
                ...e.sdkProcessingMetadata
              };
              const r = (0, a.et)(n).description;
              r && (e.tags = {
                transaction: r,
                ...e.tags
              })
            }
          }(e, c),
          function(e, t) {
            e.fingerprint = e.fingerprint ? (0, o.k9)(e.fingerprint) : [], t && (e.fingerprint = e.fingerprint.concat(t)), e.fingerprint && !e.fingerprint.length && delete e.fingerprint
          }(e, n),
          function(e, t) {
            const n = [...e.breadcrumbs || [], ...t];
            e.breadcrumbs = n.length ? n : void 0
          }(e, u),
          function(e, t) {
            e.sdkProcessingMetadata = {
              ...e.sdkProcessingMetadata,
              ...t
            }
          }(e, l)
      }

      function u(e, t) {
        const {
          extra: n,
          tags: r,
          user: o,
          contexts: s,
          level: i,
          sdkProcessingMetadata: a,
          breadcrumbs: c,
          fingerprint: u,
          eventProcessors: d,
          attachments: p,
          propagationContext: h,
          transactionName: f,
          span: m
        } = t;
        l(e, "extra", n), l(e, "tags", r), l(e, "user", o), l(e, "contexts", s), l(e, "sdkProcessingMetadata", a), i && (e.level = i), f && (e.transactionName = f), m && (e.span = m), c.length && (e.breadcrumbs = [...e.breadcrumbs, ...c]), u.length && (e.fingerprint = [...e.fingerprint, ...u]), d.length && (e.eventProcessors = [...e.eventProcessors, ...d]), p.length && (e.attachments = [...e.attachments, ...p]), e.propagationContext = {
          ...e.propagationContext,
          ...h
        }
      }

      function l(e, t, n) {
        if (n && Object.keys(n).length) {
          e[t] = {
            ...e[t]
          };
          for (const r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[t][r] = n[r])
        }
      }
    },
    54569: (e, t, n) => {
      "use strict";

      function r(e) {
        return e.transaction
      }
      n.d(t, {
        z: () => r
      })
    },
    62495: (e, t, n) => {
      "use strict";
      n.d(t, {
        x: () => o
      });
      var r = n(44877);

      function o(e, t) {
        let n, o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {};
        try {
          n = e()
        } catch (e) {
          throw t(e), o(), e
        }
        return function(e, t, n) {
          return (0, r.Qg)(e) ? e.then((e => (n(), e)), (e => {
            throw t(e), n(), e
          })) : (n(), e)
        }(n, t, o)
      }
    },
    17638: (e, t, n) => {
      "use strict";
      n.d(t, {
        w: () => o
      });
      var r = n(23388);

      function o(e) {
        if ("boolean" == typeof __SENTRY_TRACING__ && !__SENTRY_TRACING__) return !1;
        const t = (0, r.KU)(),
          n = e || t && t.getOptions();
        return !!n && (n.enableTracing || "tracesSampleRate" in n || "tracesSampler" in n)
      }
    },
    49192: (e, t, n) => {
      "use strict";

      function r(e, t) {
        const n = t && function(e) {
            return void 0 !== e.getClient
          }(t) ? t.getClient() : t,
          r = n && n.getDsn(),
          s = n && n.getOptions().tunnel;
        return function(e, t) {
          return !!t && e.includes(t.host)
        }(e, r) || function(e, t) {
          return !!t && o(e) === o(t)
        }(e, s)
      }

      function o(e) {
        return "/" === e[e.length - 1] ? e.slice(0, -1) : e
      }
      n.d(t, {
        A: () => r
      })
    },
    82522: (e, t, n) => {
      "use strict";

      function r(e) {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
        const o = new String(String.raw(e, ...n));
        return o.__sentry_template_string__ = e.join("\0").replace(/%/g, "%%").replace(/\0/g, "%s"), o.__sentry_template_values__ = n, o
      }
      n.d(t, {
        y: () => r
      })
    },
    9332: (e, t, n) => {
      "use strict";
      n.d(t, {
        li: () => m,
        mG: () => h
      });
      var r = n(13817),
        o = n(65460),
        s = n(34860),
        i = n(2254),
        a = n(50767),
        c = n(67606),
        u = n(72270),
        l = n(6131),
        d = n(44006),
        p = n(67752);

      function h(e, t, n, h, m, g) {
        const {
          normalizeDepth: v = 3,
          normalizeMaxBreadth: y = 1e3
        } = e, _ = {
          ...t,
          event_id: t.event_id || n.event_id || (0, r.eJ)(),
          timestamp: t.timestamp || (0, o.lu)()
        }, b = n.integrations || e.integrations.map((e => e.name));
        ! function(e, t) {
          const {
            environment: n,
            release: r,
            dist: o,
            maxValueLength: i = 250
          } = t;
          "environment" in e || (e.environment = "environment" in t ? n : c.U), void 0 === e.release && void 0 !== r && (e.release = r), void 0 === e.dist && void 0 !== o && (e.dist = o), e.message && (e.message = (0, s.xv)(e.message, i));
          const a = e.exception && e.exception.values && e.exception.values[0];
          a && a.value && (a.value = (0, s.xv)(a.value, i));
          const u = e.request;
          u && u.url && (u.url = (0, s.xv)(u.url, i))
        }(_, e),
        function(e, t) {
          t.length > 0 && (e.sdk = e.sdk || {}, e.sdk.integrations = [...e.sdk.integrations || [], ...t])
        }(_, b), void 0 === t.type && function(e, t) {
          const n = i.OW._sentryDebugIds;
          if (!n) return;
          let r;
          const o = f.get(t);
          o ? r = o : (r = new Map, f.set(t, r));
          const s = Object.keys(n).reduce(((e, o) => {
            let s;
            const i = r.get(o);
            i ? s = i : (s = t(o), r.set(o, s));
            for (let t = s.length - 1; t >= 0; t--) {
              const r = s[t];
              if (r.filename) {
                e[r.filename] = n[o];
                break
              }
            }
            return e
          }), {});
          try {
            e.exception.values.forEach((e => {
              e.stacktrace.frames.forEach((e => {
                e.filename && (e.debug_id = s[e.filename])
              }))
            }))
          } catch (e) {}
        }(_, e.stackParser);
        const S = function(e, t) {
          if (!t) return e;
          const n = e ? e.clone() : new l.HG;
          return n.update(t), n
        }(h, n.captureContext);
        n.mechanism && (0, r.M6)(_, n.mechanism);
        const w = m && m.getEventProcessors ? m.getEventProcessors() : [],
          k = (0, l.m6)().getScopeData();
        if (g) {
          const e = g.getScopeData();
          (0, d.Rg)(k, e)
        }
        if (S) {
          const e = S.getScopeData();
          (0, d.Rg)(k, e)
        }
        const T = [...n.attachments || [], ...k.attachments];
        T.length && (n.attachments = T), (0, d.e2)(_, k);
        const E = [...w, ...(0, u.lG)(), ...k.eventProcessors];
        return (0, u.jB)(E, _, n).then((e => (e && function(e) {
          const t = {};
          try {
            e.exception.values.forEach((e => {
              e.stacktrace.frames.forEach((e => {
                e.debug_id && (e.abs_path ? t[e.abs_path] = e.debug_id : e.filename && (t[e.filename] = e.debug_id), delete e.debug_id)
              }))
            }))
          } catch (e) {}
          if (0 === Object.keys(t).length) return;
          e.debug_meta = e.debug_meta || {}, e.debug_meta.images = e.debug_meta.images || [];
          const n = e.debug_meta.images;
          Object.keys(t).forEach((e => {
            n.push({
              type: "sourcemap",
              code_file: e,
              debug_id: t[e]
            })
          }))
        }(e), "number" == typeof v && v > 0 ? function(e, t, n) {
          if (!e) return null;
          const r = {
            ...e,
            ...e.breadcrumbs && {
              breadcrumbs: e.breadcrumbs.map((e => ({
                ...e,
                ...e.data && {
                  data: (0, a.S8)(e.data, t, n)
                }
              })))
            },
            ...e.user && {
              user: (0, a.S8)(e.user, t, n)
            },
            ...e.contexts && {
              contexts: (0, a.S8)(e.contexts, t, n)
            },
            ...e.extra && {
              extra: (0, a.S8)(e.extra, t, n)
            }
          };
          return e.contexts && e.contexts.trace && r.contexts && (r.contexts.trace = e.contexts.trace, e.contexts.trace.data && (r.contexts.trace.data = (0, a.S8)(e.contexts.trace.data, t, n))), e.spans && (r.spans = e.spans.map((e => {
            const r = (0, p.et)(e).data;
            return r && (e.data = (0, a.S8)(r, t, n)), e
          }))), r
        }(e, v, y) : e)))
      }
      const f = new WeakMap;

      function m(e) {
        if (e) return function(e) {
          return e instanceof l.HG || "function" == typeof e
        }(e) || function(e) {
          return Object.keys(e).some((e => g.includes(e)))
        }(e) ? {
          captureContext: e
        } : e
      }
      const g = ["user", "level", "extra", "contexts", "tags", "fingerprint", "requestSession", "propagationContext"]
    },
    24456: (e, t, n) => {
      "use strict";
      n.d(t, {
        K: () => o
      });
      var r = n(99371);

      function o(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [t],
          o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "npm";
        const s = e._metadata || {};
        s.sdk || (s.sdk = {
          name: `sentry.javascript.${t}`,
          packages: n.map((e => ({
            name: `${o}:@sentry/${e}`,
            version: r.M
          }))),
          version: r.M
        }), e._metadata = s
      }
    },
    67752: (e, t, n) => {
      "use strict";
      n.d(t, {
        CC: () => i,
        Qh: () => u,
        aO: () => a,
        cI: () => l,
        et: () => p,
        kX: () => c,
        pK: () => h
      });
      var r = n(98478),
        o = n(37427),
        s = n(65460);
      const i = 0,
        a = 1;

      function c(e) {
        const {
          spanId: t,
          traceId: n
        } = e.spanContext(), {
          data: o,
          op: s,
          parent_span_id: i,
          status: a,
          tags: c,
          origin: u
        } = p(e);
        return (0, r.Ce)({
          data: o,
          op: s,
          parent_span_id: i,
          span_id: t,
          status: a,
          tags: c,
          trace_id: n,
          origin: u
        })
      }

      function u(e) {
        const {
          traceId: t,
          spanId: n
        } = e.spanContext(), r = h(e);
        return (0, o.TC)(t, n, r)
      }

      function l(e) {
        return "number" == typeof e ? d(e) : Array.isArray(e) ? e[0] + e[1] / 1e9 : e instanceof Date ? d(e.getTime()) : (0, s.zf)()
      }

      function d(e) {
        return e > 9999999999 ? e / 1e3 : e
      }

      function p(e) {
        return function(e) {
          return "function" == typeof e.getSpanJSON
        }(e) ? e.getSpanJSON() : "function" == typeof e.toJSON ? e.toJSON() : {}
      }

      function h(e) {
        const {
          traceFlags: t
        } = e.spanContext();
        return Boolean(t & a)
      }
    },
    99371: (e, t, n) => {
      "use strict";
      n.d(t, {
        M: () => r
      });
      const r = "7.99.0"
    },
    77794: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, {
        CaptureConsole: () => h,
        ContextLines: () => fe,
        Debug: () => g,
        Dedupe: () => b,
        ExtraErrorData: () => O,
        HttpClient: () => oe,
        Offline: () => D,
        ReportingObserver: () => B,
        RewriteFrames: () => K,
        SessionTiming: () => J,
        Transaction: () => X,
        captureConsoleIntegration: () => p,
        contextLinesIntegration: () => he,
        debugIntegration: () => m,
        dedupeIntegration: () => _,
        extraErrorDataIntegration: () => R,
        httpClientIntegration: () => re,
        reportingObserverIntegration: () => $,
        rewriteFramesIntegration: () => W,
        sessionTimingIntegration: () => V
      });
      var r = n(23388),
        o = n(90197),
        s = n(97205),
        i = n(2254),
        a = n(78546),
        c = n(69514),
        u = n(13817),
        l = n(34860);
      const d = "CaptureConsole",
        p = (0, o._C)((function() {
          const e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).levels || s.Ow;
          return {
            name: d,
            setupOnce() {},
            setup(t) {
              "console" in i.OW && (0, a.P)((n => {
                let {
                  args: o,
                  level: s
                } = n;
                (0, r.KU)() === t && e.includes(s) && function(e, t) {
                  const n = {
                    level: (0, c.te)(t),
                    extra: {
                      arguments: e
                    }
                  };
                  (0, r.v4)((o => {
                    if (o.addEventProcessor((e => (e.logger = "console", (0, u.M6)(e, {
                        handled: !1,
                        type: "console"
                      }), e))), "assert" === t && !1 === e[0]) {
                      const t = `Assertion failed: ${(0,l.gt)(e.slice(1)," ")||"console.assert"}`;
                      return o.setExtra("arguments", e.slice(1)), void(0, r.wd)(t, n)
                    }
                    const s = e.find((e => e instanceof Error));
                    if ("error" === t && s) return void(0, r.Cp)(s, n);
                    const i = (0, l.gt)(e, " ");
                    (0, r.wd)(i, n)
                  }))
                }(o, s)
              }))
            }
          }
        })),
        h = (0, o.F)(d, p),
        f = "Debug",
        m = (0, o._C)((function() {
          const e = {
            debugger: !1,
            stringify: !1,
            ...arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          };
          return {
            name: f,
            setupOnce() {},
            setup(t) {
              t.on && t.on("beforeSendEvent", ((t, n) => {
                e.debugger, (0, s.pq)((() => {
                  e.stringify ? (console.log(JSON.stringify(t, null, 2)), n && Object.keys(n).length && console.log(JSON.stringify(n, null, 2))) : (console.log(t), n && Object.keys(n).length && console.log(n))
                }))
              }))
            }
          }
        })),
        g = (0, o.F)(f, m),
        v = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__,
        y = "Dedupe",
        _ = (0, o._C)((() => {
          let e;
          return {
            name: y,
            setupOnce() {},
            processEvent(t) {
              if (t.type) return t;
              try {
                if (function(e, t) {
                    return !!t && (!! function(e, t) {
                      const n = e.message,
                        r = t.message;
                      return !(!n && !r) && (!(n && !r || !n && r) && (n === r && (!!w(e, t) && !!S(e, t))))
                    }(e, t) || !! function(e, t) {
                      const n = k(t),
                        r = k(e);
                      return !(!n || !r) && (n.type === r.type && n.value === r.value && (!!w(e, t) && !!S(e, t)))
                    }(e, t))
                  }(t, e)) return v && s.vF.warn("Event dropped due to being a duplicate of previously captured event."), null
              } catch (e) {}
              return e = t
            }
          }
        })),
        b = (0, o.F)(y, _);

      function S(e, t) {
        let n = T(e),
          r = T(t);
        if (!n && !r) return !0;
        if (n && !r || !n && r) return !1;
        if (r.length !== n.length) return !1;
        for (let e = 0; e < r.length; e++) {
          const t = r[e],
            o = n[e];
          if (t.filename !== o.filename || t.lineno !== o.lineno || t.colno !== o.colno || t.function !== o.function) return !1
        }
        return !0
      }

      function w(e, t) {
        let n = e.fingerprint,
          r = t.fingerprint;
        if (!n && !r) return !0;
        if (n && !r || !n && r) return !1;
        try {
          return !(n.join("") !== r.join(""))
        } catch (e) {
          return !1
        }
      }

      function k(e) {
        return e.exception && e.exception.values && e.exception.values[0]
      }

      function T(e) {
        const t = e.exception;
        if (t) try {
          return t.values[0].stacktrace.frames
        } catch (e) {
          return
        }
      }
      var E = n(44877),
        x = n(50767),
        C = n(98478);
      const I = "ExtraErrorData",
        R = (0, o._C)((function() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          const t = e.depth || 3,
            n = e.captureErrorCause || !1;
          return {
            name: I,
            setupOnce() {},
            processEvent: (e, r) => function(e) {
              let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = arguments.length > 2 ? arguments[2] : void 0,
                r = arguments.length > 3 ? arguments[3] : void 0;
              if (!t.originalException || !(0, E.bJ)(t.originalException)) return e;
              const o = t.originalException.name || t.originalException.constructor.name,
                i = function(e, t) {
                  try {
                    const n = ["name", "message", "stack", "line", "column", "fileName", "lineNumber", "columnNumber", "toJSON"],
                      r = {};
                    for (const t of Object.keys(e)) {
                      if (-1 !== n.indexOf(t)) continue;
                      const o = e[t];
                      r[t] = (0, E.bJ)(o) ? o.toString() : o
                    }
                    if (t && void 0 !== e.cause && (r.cause = (0, E.bJ)(e.cause) ? e.cause.toString() : e.cause), "function" == typeof e.toJSON) {
                      const t = e.toJSON();
                      for (const e of Object.keys(t)) {
                        const n = t[e];
                        r[e] = (0, E.bJ)(n) ? n.toString() : n
                      }
                    }
                    return r
                  } catch (e) {
                    v && s.vF.error("Unable to extract extra data from the Error object:", e)
                  }
                  return null
                }(t.originalException, r);
              if (i) {
                const t = {
                    ...e.contexts
                  },
                  r = (0, x.S8)(i, n);
                return (0, E.Qd)(r) && ((0, C.my)(r, "__sentry_skip_normalization__", !0), t[o] = r), {
                  ...e,
                  contexts: t
                }
              }
              return e
            }(e, r, t, n)
          }
        })),
        O = (0, o.F)(I, R);
      var M = n(70899),
        A = n.n(M);
      const F = i.OW;
      class D {
        static __initStatic() {
          this.id = "Offline"
        }
        constructor() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          this.name = D.id, this.maxStoredEvents = e.maxStoredEvents || 30, this.offlineEventStore = A().createInstance({
            name: "sentry/offlineEventStore"
          })
        }
        setupOnce(e, t) {
          this.hub = t(), "addEventListener" in F && F.addEventListener("online", (() => {
            this._sendEvents().catch((() => {
              v && s.vF.warn("could not send cached events")
            }))
          }));
          const n = e => this.hub && this.hub.getIntegration(D) && "navigator" in F && "onLine" in F.navigator && !F.navigator.onLine ? (v && s.vF.log("Event dropped due to being a offline - caching instead"), this._cacheEvent(e).then((e => this._enforceMaxEvents())).catch((e => {
            v && s.vF.warn("could not cache event while offline")
          })), null) : e;
          n.id = this.name, e(n), "navigator" in F && "onLine" in F.navigator && F.navigator.onLine && this._sendEvents().catch((() => {
            v && s.vF.warn("could not send cached events")
          }))
        }
        async _cacheEvent(e) {
          return this.offlineEventStore.setItem((0, u.eJ)(), (0, x.S8)(e))
        }
        async _enforceMaxEvents() {
          const e = [];
          return this.offlineEventStore.iterate(((t, n, r) => {
            e.push({
              cacheKey: n,
              event: t
            })
          })).then((() => this._purgeEvents(e.sort(((e, t) => (t.event.timestamp || 0) - (e.event.timestamp || 0))).slice(this.maxStoredEvents < e.length ? this.maxStoredEvents : e.length).map((e => e.cacheKey))))).catch((e => {
            v && s.vF.warn("could not enforce max events")
          }))
        }
        async _purgeEvent(e) {
          return this.offlineEventStore.removeItem(e)
        }
        async _purgeEvents(e) {
          return Promise.all(e.map((e => this._purgeEvent(e)))).then()
        }
        async _sendEvents() {
          return this.offlineEventStore.iterate(((e, t, n) => {
            this.hub ? (this.hub.captureEvent(e), this._purgeEvent(t).catch((e => {
              v && s.vF.warn("could not purge event from cache")
            }))) : v && s.vF.warn("no hub found - could not send cached event")
          }))
        }
      }
      D.__initStatic();
      var N = n(40285);
      const L = i.OW,
        P = "ReportingObserver",
        j = new WeakMap,
        $ = (0, o._C)((function() {
          const e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).types || ["crash", "deprecation", "intervention"];

          function t(e) {
            if (j.has((0, r.KU)()))
              for (const t of e)(0, r.v4)((e => {
                e.setExtra("url", t.url);
                const n = `ReportingObserver [${t.type}]`;
                let o = "No details available";
                if (t.body) {
                  const n = {};
                  for (const e in t.body) n[e] = t.body[e];
                  if (e.setExtra("body", n), "crash" === t.type) {
                    const e = t.body;
                    o = [e.crashId || "", e.reason || ""].join(" ").trim() || o
                  } else o = t.body.message || o
                }(0, r.wd)(`${n}: ${o}`)
              }))
          }
          return {
            name: P,
            setupOnce() {
              (0, N.vQ)() && new L.ReportingObserver(t, {
                buffered: !0,
                types: e
              }).observe()
            },
            setup(e) {
              j.set(e, !0)
            }
          }
        })),
        B = (0, o.F)(P, $);
      const U = /^(\S+:\\|\/?)([\s\S]*?)((?:\.{1,2}|[^/\\]+?|)(\.[^./\\]*|))(?:[/\\]*)$/;

      function H() {
        let e = "",
          t = !1;
        for (let n = arguments.length - 1; n >= -1 && !t; n--) {
          const r = n >= 0 ? n < 0 || arguments.length <= n ? void 0 : arguments[n] : "/";
          r && (e = `${r}/${e}`, t = "/" === r.charAt(0))
        }
        return e = function(e, t) {
          let n = 0;
          for (let t = e.length - 1; t >= 0; t--) {
            const r = e[t];
            "." === r ? e.splice(t, 1) : ".." === r ? (e.splice(t, 1), n++) : n && (e.splice(t, 1), n--)
          }
          if (t)
            for (; n--; n) e.unshift("..");
          return e
        }(e.split("/").filter((e => !!e)), !t).join("/"), (t ? "/" : "") + e || "."
      }

      function q(e) {
        let t = 0;
        for (; t < e.length && "" === e[t]; t++);
        let n = e.length - 1;
        for (; n >= 0 && "" === e[n]; n--);
        return t > n ? [] : e.slice(t, n - t + 1)
      }
      const z = "RewriteFrames",
        W = (0, o._C)((function() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          const t = e.root,
            n = e.prefix || "app:///",
            r = e.iteratee || (e => {
              if (!e.filename) return e;
              const r = /^[a-zA-Z]:\\/.test(e.filename) || e.filename.includes("\\") && !e.filename.includes("/"),
                o = /^\//.test(e.filename);
              if (r || o) {
                const o = r ? e.filename.replace(/^[a-zA-Z]:/, "").replace(/\\/g, "/") : e.filename,
                  s = t ? function(e, t) {
                    e = H(e).slice(1), t = H(t).slice(1);
                    const n = q(e.split("/")),
                      r = q(t.split("/")),
                      o = Math.min(n.length, r.length);
                    let s = o;
                    for (let e = 0; e < o; e++)
                      if (n[e] !== r[e]) {
                        s = e;
                        break
                      } let i = [];
                    for (let e = s; e < n.length; e++) i.push("..");
                    return i = i.concat(r.slice(s)), i.join("/")
                  }(t, o) : function(e, t) {
                    let n = function(e) {
                      const t = e.length > 1024 ? `<truncated>${e.slice(-1024)}` : e,
                        n = U.exec(t);
                      return n ? n.slice(1) : []
                    }(e)[2];
                    return n
                  }(o);
                e.filename = `${n}${s}`
              }
              return e
            });
          return {
            name: z,
            setupOnce() {},
            processEvent(e) {
              let t = e;
              return e.exception && Array.isArray(e.exception.values) && (t = function(e) {
                try {
                  return {
                    ...e,
                    exception: {
                      ...e.exception,
                      values: e.exception.values.map((e => {
                        return {
                          ...e,
                          ...e.stacktrace && {
                            stacktrace: (t = e.stacktrace, {
                              ...t,
                              frames: t && t.frames && t.frames.map((e => r(e)))
                            })
                          }
                        };
                        var t
                      }))
                    }
                  }
                } catch (t) {
                  return e
                }
              }(t)), t
            }
          }
        })),
        K = (0, o.F)(z, W),
        G = "SessionTiming",
        V = (0, o._C)((() => {
          const e = Date.now();
          return {
            name: G,
            setupOnce() {},
            processEvent(t) {
              const n = Date.now();
              return {
                ...t,
                extra: {
                  ...t.extra,
                  "session:start": e,
                  "session:duration": n - e,
                  "session:end": n
                }
              }
            }
          }
        })),
        J = (0, o.F)(G, V),
        Y = "Transaction",
        X = (0, o.F)(Y, (() => ({
          name: Y,
          setupOnce() {},
          processEvent(e) {
            const t = function(e) {
              const t = e.exception && e.exception.values && e.exception.values[0];
              return t && t.stacktrace && t.stacktrace.frames || []
            }(e);
            for (let n = t.length - 1; n >= 0; n--) {
              const r = t[n];
              if (!0 === r.in_app) {
                e.transaction = Q(r);
                break
              }
            }
            return e
          }
        })));

      function Q(e) {
        return e.module || e.function ? `${e.module||"?"}/${e.function||"?"}` : "<unknown>"
      }
      var Z = n(49192),
        ee = n(63335),
        te = n(27817);
      const ne = "HttpClient",
        re = (0, o._C)((function() {
          const e = {
            failedRequestStatusCodes: [
              [500, 599]
            ],
            failedRequestTargets: [/.*/],
            ...arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          };
          return {
            name: ne,
            setupOnce() {},
            setup(t) {
              ! function(e, t) {
                (0, N.m7)() && (0, ee.u)((n => {
                  if ((0, r.KU)() !== e) return;
                  const {
                    response: o,
                    args: i
                  } = n, [a, c] = i;
                  o && function(e, t, n, o) {
                    if (ae(e, n.status, n.url)) {
                      const e = function(e, t) {
                        return !t && e instanceof Request || e instanceof Request && e.bodyUsed ? e : new Request(e, t)
                      }(t, o);
                      let i, a, c, u;
                      ue() && ([{
                        headers: i,
                        cookies: c
                      }, {
                        headers: a,
                        cookies: u
                      }] = [{
                        cookieHeader: "Cookie",
                        obj: e
                      }, {
                        cookieHeader: "Set-Cookie",
                        obj: n
                      }].map((e => {
                        let {
                          cookieHeader: t,
                          obj: n
                        } = e;
                        const r = function(e) {
                          const t = {};
                          return e.forEach(((e, n) => {
                            t[n] = e
                          })), t
                        }(n.headers);
                        let o;
                        try {
                          const e = r[t] || r[t.toLowerCase()] || void 0;
                          e && (o = ie(e))
                        } catch (e) {
                          v && s.vF.log(`Could not extract cookies from header ${t}`)
                        }
                        return {
                          headers: r,
                          cookies: o
                        }
                      })));
                      const l = ce({
                        url: e.url,
                        method: e.method,
                        status: n.status,
                        requestHeaders: i,
                        responseHeaders: a,
                        requestCookies: c,
                        responseCookies: u
                      });
                      (0, r.r)(l)
                    }
                  }(t, a, o, c)
                }))
              }(t, e),
              function(e, t) {
                "XMLHttpRequest" in i.OW && (0, te.Mn)((n => {
                  if ((0, r.KU)() !== e) return;
                  const o = n.xhr,
                    i = o[te.Er];
                  if (!i) return;
                  const {
                    method: a,
                    request_headers: c
                  } = i;
                  try {
                    ! function(e, t, n, o) {
                      if (ae(e, t.status, t.responseURL)) {
                        let e, i, a;
                        if (ue()) {
                          try {
                            const e = t.getResponseHeader("Set-Cookie") || t.getResponseHeader("set-cookie") || void 0;
                            e && (i = ie(e))
                          } catch (e) {
                            v && s.vF.log("Could not extract cookies from response headers")
                          }
                          try {
                            a = function(e) {
                              const t = e.getAllResponseHeaders();
                              return t ? t.split("\r\n").reduce(((e, t) => {
                                const [n, r] = t.split(": ");
                                return e[n] = r, e
                              }), {}) : {}
                            }(t)
                          } catch (e) {
                            v && s.vF.log("Could not extract headers from response")
                          }
                          e = o
                        }
                        const c = ce({
                          url: t.responseURL,
                          method: n,
                          status: t.status,
                          requestHeaders: e,
                          responseHeaders: a,
                          responseCookies: i
                        });
                        (0, r.r)(c)
                      }
                    }(t, o, a, c)
                  } catch (e) {
                    v && s.vF.warn("Error while extracting response event form XHR response", e)
                  }
                }))
              }(t, e)
            }
          }
        })),
        oe = (0, o.F)(ne, re);

      function se(e) {
        if (e) {
          const t = e["Content-Length"] || e["content-length"];
          if (t) return parseInt(t, 10)
        }
      }

      function ie(e) {
        return e.split("; ").reduce(((e, t) => {
          const [n, r] = t.split("=");
          return e[n] = r, e
        }), {})
      }

      function ae(e, t, n) {
        return function(e, t) {
          return e.some((e => "number" == typeof e ? e === t : t >= e[0] && t <= e[1]))
        }(e.failedRequestStatusCodes, t) && (o = e.failedRequestTargets, s = n, o.some((e => "string" == typeof e ? s.includes(e) : e.test(s)))) && !(0, Z.A)(n, (0, r.KU)());
        var o, s
      }

      function ce(e) {
        const t = `HTTP Client Error with status code: ${e.status}`,
          n = {
            message: t,
            exception: {
              values: [{
                type: "Error",
                value: t
              }]
            },
            request: {
              url: e.url,
              method: e.method,
              headers: e.requestHeaders,
              cookies: e.requestCookies
            },
            contexts: {
              response: {
                status_code: e.status,
                headers: e.responseHeaders,
                cookies: e.responseCookies,
                body_size: se(e.responseHeaders)
              }
            }
          };
        return (0, u.M6)(n, {
          type: "http.client",
          handled: !1
        }), n
      }

      function ue() {
        const e = (0, r.KU)();
        return !!e && Boolean(e.getOptions().sendDefaultPii)
      }
      var le = n(59100);
      const de = i.OW,
        pe = "ContextLines",
        he = (0, o._C)((function() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          const t = null != e.frameContextLines ? e.frameContextLines : 7;
          return {
            name: pe,
            setupOnce() {},
            processEvent: e => function(e, t) {
              const n = de.document,
                r = de.location && (0, le.f)(de.location.href);
              if (!n || !r) return e;
              const o = e.exception && e.exception.values;
              if (!o || !o.length) return e;
              const s = n.documentElement.innerHTML;
              if (!s) return e;
              const i = ["<!DOCTYPE html>", "<html>", ...s.split("\n"), "</html>"];
              return o.forEach((e => {
                const n = e.stacktrace;
                n && n.frames && (n.frames = n.frames.map((e => function(e, t, n, r) {
                  return e.filename === n && e.lineno && t.length ? ((0, u.db)(t, e, r), e) : e
                }(e, i, r, t))))
              })), e
            }(e, t)
          }
        })),
        fe = (0, o.F)(pe, he)
    },
    63262: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, {
        Breadcrumbs: () => r.Breadcrumbs,
        BrowserClient: () => r.BrowserClient,
        BrowserProfilingIntegration: () => r.BrowserProfilingIntegration,
        BrowserTracing: () => r.BrowserTracing,
        Dedupe: () => r.Dedupe,
        ErrorBoundary: () => C,
        Feedback: () => r.Feedback,
        FunctionToString: () => r.FunctionToString,
        GlobalHandlers: () => r.GlobalHandlers,
        HttpContext: () => r.HttpContext,
        Hub: () => r.Hub,
        InboundFilters: () => r.InboundFilters,
        Integrations: () => r.Integrations,
        LinkedErrors: () => r.LinkedErrors,
        ModuleMetadata: () => r.ModuleMetadata,
        Profiler: () => y,
        Replay: () => r.Replay,
        ReplayCanvas: () => r.ReplayCanvas,
        SDK_VERSION: () => r.SDK_VERSION,
        Scope: () => r.Scope,
        TryCatch: () => r.TryCatch,
        WINDOW: () => r.WINDOW,
        addBreadcrumb: () => r.addBreadcrumb,
        addEventProcessor: () => r.addEventProcessor,
        addGlobalEventProcessor: () => r.addGlobalEventProcessor,
        addIntegration: () => r.addIntegration,
        addTracingExtensions: () => r.addTracingExtensions,
        breadcrumbsIntegration: () => r.breadcrumbsIntegration,
        browserApiErrorsIntegration: () => r.browserApiErrorsIntegration,
        browserTracingIntegration: () => r.browserTracingIntegration,
        captureEvent: () => r.captureEvent,
        captureException: () => r.captureException,
        captureMessage: () => r.captureMessage,
        captureUserFeedback: () => r.captureUserFeedback,
        chromeStackLineParser: () => r.chromeStackLineParser,
        close: () => r.close,
        configureScope: () => r.configureScope,
        continueTrace: () => r.continueTrace,
        createReduxEnhancer: () => D,
        createTransport: () => r.createTransport,
        createUserFeedbackEnvelope: () => r.createUserFeedbackEnvelope,
        dedupeIntegration: () => r.dedupeIntegration,
        defaultIntegrations: () => r.defaultIntegrations,
        defaultRequestInstrumentationOptions: () => r.defaultRequestInstrumentationOptions,
        defaultStackLineParsers: () => r.defaultStackLineParsers,
        defaultStackParser: () => r.defaultStackParser,
        eventFromException: () => r.eventFromException,
        eventFromMessage: () => r.eventFromMessage,
        exceptionFromError: () => r.exceptionFromError,
        extractTraceparentData: () => r.extractTraceparentData,
        feedbackIntegration: () => r.feedbackIntegration,
        flush: () => r.flush,
        forceLoad: () => r.forceLoad,
        functionToStringIntegration: () => r.functionToStringIntegration,
        geckoStackLineParser: () => r.geckoStackLineParser,
        getActiveSpan: () => r.getActiveSpan,
        getActiveTransaction: () => r.getActiveTransaction,
        getClient: () => r.getClient,
        getCurrentHub: () => r.getCurrentHub,
        getCurrentScope: () => r.getCurrentScope,
        getDefaultIntegrations: () => r.getDefaultIntegrations,
        getHubFromCarrier: () => r.getHubFromCarrier,
        getSpanStatusFromHttpCode: () => r.getSpanStatusFromHttpCode,
        globalHandlersIntegration: () => r.globalHandlersIntegration,
        httpContextIntegration: () => r.httpContextIntegration,
        inboundFiltersIntegration: () => r.inboundFiltersIntegration,
        init: () => i,
        instrumentOutgoingRequests: () => r.instrumentOutgoingRequests,
        isInitialized: () => r.isInitialized,
        lastEventId: () => r.lastEventId,
        linkedErrorsIntegration: () => r.linkedErrorsIntegration,
        makeBrowserOfflineTransport: () => r.makeBrowserOfflineTransport,
        makeFetchTransport: () => r.makeFetchTransport,
        makeMain: () => r.makeMain,
        makeMultiplexedTransport: () => r.makeMultiplexedTransport,
        makeXHRTransport: () => r.makeXHRTransport,
        metrics: () => r.metrics,
        moduleMetadataIntegration: () => r.moduleMetadataIntegration,
        onLoad: () => r.onLoad,
        onProfilingStartRouteTransaction: () => r.onProfilingStartRouteTransaction,
        opera10StackLineParser: () => r.opera10StackLineParser,
        opera11StackLineParser: () => r.opera11StackLineParser,
        parameterize: () => r.parameterize,
        reactRouterV3Instrumentation: () => L,
        reactRouterV4Instrumentation: () => U,
        reactRouterV5Instrumentation: () => H,
        reactRouterV6Instrumentation: () => oe,
        replayCanvasIntegration: () => r.replayCanvasIntegration,
        replayIntegration: () => r.replayIntegration,
        sendFeedback: () => r.sendFeedback,
        setContext: () => r.setContext,
        setCurrentClient: () => r.setCurrentClient,
        setExtra: () => r.setExtra,
        setExtras: () => r.setExtras,
        setMeasurement: () => r.setMeasurement,
        setTag: () => r.setTag,
        setTags: () => r.setTags,
        setUser: () => r.setUser,
        showReportDialog: () => r.showReportDialog,
        spanStatusfromHttpCode: () => r.spanStatusfromHttpCode,
        startBrowserTracingNavigationSpan: () => r.startBrowserTracingNavigationSpan,
        startBrowserTracingPageLoadSpan: () => r.startBrowserTracingPageLoadSpan,
        startInactiveSpan: () => r.startInactiveSpan,
        startSpan: () => r.startSpan,
        startSpanManual: () => r.startSpanManual,
        startTransaction: () => r.startTransaction,
        trace: () => r.trace,
        useProfiler: () => b,
        winjsStackLineParser: () => r.winjsStackLineParser,
        withErrorBoundary: () => I,
        withIsolationScope: () => r.withIsolationScope,
        withProfiler: () => _,
        withScope: () => r.withScope,
        withSentryReactRouterV6Routing: () => ue,
        withSentryRouting: () => W,
        wrap: () => r.wrap,
        wrapCreateBrowserRouter: () => de,
        wrapUseRoutes: () => le
      });
      var r = n(36358),
        o = n(68664),
        s = n(24456);

      function i(e) {
        const t = {
          ...e
        };
        (0, s.K)(t, "react"), (0, o.Ts)(t)
      }
      var a = n(69867),
        c = n(23388),
        u = n(67752),
        l = n(65460),
        d = n(62607),
        p = n.n(d),
        h = n(62229);
      const f = "ui.react.render",
        m = "ui.react.mount",
        g = "/home/runner/work/sentry-javascript/sentry-javascript/packages/react/src/profiler.tsx",
        v = "unknown";
      class y extends h.Component {
        static __initStatic() {
          this.defaultProps = {
            disabled: !1,
            includeRender: !0,
            includeUpdates: !0
          }
        }
        constructor(e) {
          super(e);
          const {
            name: t,
            disabled: n = !1
          } = this.props;
          n || (this._mountSpan = (0, a.Uk)({
            name: `<${t}>`,
            onlyIfParent: !0,
            op: m,
            origin: "auto.ui.react.profiler",
            attributes: {
              "ui.component_name": t
            }
          }))
        }
        componentDidMount() {
          this._mountSpan && this._mountSpan.end()
        }
        shouldComponentUpdate(e) {
          let {
            updateProps: t,
            includeUpdates: n = !0
          } = e;
          if (n && this._mountSpan && t !== this.props.updateProps) {
            const e = Object.keys(t).filter((e => t[e] !== this.props.updateProps[e]));
            if (e.length > 0) {
              const t = (0, l.zf)();
              this._updateSpan = (0, c.hb)(this._mountSpan, (() => (0, a.Uk)({
                name: `<${this.props.name}>`,
                onlyIfParent: !0,
                op: "ui.react.update",
                origin: "auto.ui.react.profiler",
                startTimestamp: t,
                attributes: {
                  "ui.component_name": this.props.name,
                  "ui.react.changed_props": e
                }
              })))
            }
          }
          return !0
        }
        componentDidUpdate() {
          this._updateSpan && (this._updateSpan.end(), this._updateSpan = void 0)
        }
        componentWillUnmount() {
          const e = (0, l.zf)(),
            {
              name: t,
              includeRender: n = !0
            } = this.props;
          if (this._mountSpan && n) {
            const n = (0, u.et)(this._mountSpan).timestamp;
            (0, c.hb)(this._mountSpan, (() => {
              const r = (0, a.Uk)({
                onlyIfParent: !0,
                name: `<${t}>`,
                op: f,
                origin: "auto.ui.react.profiler",
                startTimestamp: n,
                attributes: {
                  "ui.component_name": t
                }
              });
              r && r.end(e)
            }))
          }
        }
        render() {
          return this.props.children
        }
      }

      function _(e, t) {
        const n = t && t.name || e.displayName || e.name || v,
          r = r => h.createElement(y, {
            ...t,
            name: n,
            updateProps: r,
            __self: this,
            __source: {
              fileName: g,
              lineNumber: 159
            }
          }, h.createElement(e, {
            ...r,
            __self: this,
            __source: {
              fileName: g,
              lineNumber: 160
            }
          }));
        return r.displayName = `profiler(${n})`, p()(r, e), r
      }

      function b(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
          disabled: !1,
          hasRenderSpan: !0
        };
        const [n] = h.useState((() => {
          if (!t || !t.disabled) return (0, a.Uk)({
            name: `<${e}>`,
            onlyIfParent: !0,
            op: m,
            origin: "auto.ui.react.profiler",
            attributes: {
              "ui.component_name": e
            }
          })
        }));
        h.useEffect((() => (n && n.end(), () => {
          if (n && t.hasRenderSpan) {
            const t = (0, u.et)(n).timestamp,
              r = (0, l.zf)(),
              o = (0, a.Uk)({
                name: `<${e}>`,
                onlyIfParent: !0,
                op: f,
                origin: "auto.ui.react.profiler",
                startTimestamp: t,
                attributes: {
                  "ui.component_name": e
                }
              });
            o && o.end(r)
          }
        })), [])
      }
      y.__initStatic();
      var S = n(44877),
        w = n(97205);
      const k = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__,
        T = "/home/runner/work/sentry-javascript/sentry-javascript/packages/react/src/errorboundary.tsx",
        E = "unknown",
        x = {
          componentStack: null,
          error: null,
          eventId: null
        };
      class C extends h.Component {
        constructor(e) {
          super(e), C.prototype.__init.call(this), this.state = x, this._openFallbackReportDialog = !0;
          const t = (0, c.KU)();
          t && t.on && e.showDialog && (this._openFallbackReportDialog = !1, t.on("afterSendEvent", (t => {
            t.type || t.event_id !== this._lastEventId || (0, o.mn)({
              ...e.dialogOptions,
              eventId: this._lastEventId
            })
          })))
        }
        componentDidCatch(e, t) {
          let {
            componentStack: n
          } = t;
          const {
            beforeCapture: r,
            onError: s,
            showDialog: i,
            dialogOptions: a
          } = this.props;
          (0, c.v4)((t => {
            if (function(e) {
                const t = e.match(/^([^.]+)/);
                return null !== t && parseInt(t[0]) >= 17
              }(h.version) && (0, S.bJ)(e)) {
              const t = new Error(e.message);
              t.name = `React ErrorBoundary ${e.name}`, t.stack = n,
                function(e, t) {
                  const n = new WeakMap;
                  ! function e(t, r) {
                    if (!n.has(t)) return t.cause ? (n.set(t, !0), e(t.cause, r)) : void(t.cause = r)
                  }(e, t)
                }(e, t)
            }
            r && r(t, e, n);
            const u = (0, c.Cp)(e, {
              captureContext: {
                contexts: {
                  react: {
                    componentStack: n
                  }
                }
              },
              mechanism: {
                handled: !1
              }
            });
            s && s(e, n, u), i && (this._lastEventId = u, this._openFallbackReportDialog && (0, o.mn)({
              ...a,
              eventId: u
            })), this.setState({
              error: e,
              componentStack: n,
              eventId: u
            })
          }))
        }
        componentDidMount() {
          const {
            onMount: e
          } = this.props;
          e && e()
        }
        componentWillUnmount() {
          const {
            error: e,
            componentStack: t,
            eventId: n
          } = this.state, {
            onUnmount: r
          } = this.props;
          r && r(e, t, n)
        }
        __init() {
          this.resetErrorBoundary = () => {
            const {
              onReset: e
            } = this.props, {
              error: t,
              componentStack: n,
              eventId: r
            } = this.state;
            e && e(t, n, r), this.setState(x)
          }
        }
        render() {
          const {
            fallback: e,
            children: t
          } = this.props, n = this.state;
          if (n.error) {
            let t;
            return t = "function" == typeof e ? e({
              error: n.error,
              componentStack: n.componentStack,
              resetError: this.resetErrorBoundary,
              eventId: n.eventId
            }) : e, h.isValidElement(t) ? t : (e && k && w.vF.warn("fallback did not produce a valid ReactElement"), null)
          }
          return "function" == typeof t ? t() : t
        }
      }

      function I(e, t) {
        const n = e.displayName || e.name || E,
          r = n => h.createElement(C, {
            ...t,
            __self: this,
            __source: {
              fileName: T,
              lineNumber: 238
            }
          }, h.createElement(e, {
            ...n,
            __self: this,
            __source: {
              fileName: T,
              lineNumber: 239
            }
          }));
        return r.displayName = `errorBoundary(${n})`, p()(r, e), r
      }
      var R = n(6131),
        O = n(98478);
      const M = "redux.action",
        A = "info",
        F = {
          attachReduxState: !0,
          actionTransformer: e => e,
          stateTransformer: e => e || null
        };

      function D(e) {
        const t = {
          ...F,
          ...e
        };
        return e => (n, r) => (t.attachReduxState && (0, R.m6)().addEventProcessor(((e, t) => {
          try {
            void 0 === e.type && "redux" === e.contexts.state.state.type && (t.attachments = [...t.attachments || [], {
              filename: "redux_state.json",
              data: JSON.stringify(e.contexts.state.state.value)
            }])
          } catch (e) {}
          return e
        })), e(((e, r) => {
          const o = n(e, r),
            s = (0, c.o5)(),
            i = t.actionTransformer(r);
          null != i && s.addBreadcrumb({
            category: M,
            data: i,
            type: A
          });
          const a = t.stateTransformer(o);
          if (null != a) {
            const e = (0, c.KU)(),
              t = e && e.getOptions(),
              n = t && t.normalizeDepth || 3,
              r = {
                state: {
                  type: "redux",
                  value: a
                }
              };
            (0, O.my)(r, "__sentry_override_normalization_depth__", 3 + n), s.setContext("state", r)
          } else s.setContext("state", null);
          const {
            configureScopeWithState: u
          } = t;
          return "function" == typeof u && u(s, o), o
        }), r))
      }
      var N = n(22517);

      function L(e, t, n) {
        return function(r) {
          let o, s, i = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && N.jf && N.jf.location && P(t, N.jf.location, n, (function(e) {
            s = e, o = r({
              name: s,
              op: "pageload",
              origin: "auto.pageload.react.reactrouterv3",
              tags: {
                "routing.instrumentation": "react-router-v3"
              },
              metadata: {
                source: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "url"
              }
            })
          })), i && e.listen && e.listen((e => {
            if ("PUSH" === e.action || "POP" === e.action) {
              o && o.end();
              const i = {
                "routing.instrumentation": "react-router-v3"
              };
              s && (i.from = s), P(t, e, n, (function(e) {
                s = e, o = r({
                  name: s,
                  op: "navigation",
                  origin: "auto.navigation.react.reactrouterv3",
                  tags: i,
                  metadata: {
                    source: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "url"
                  }
                })
              }))
            }
          }))
        }
      }

      function P(e, t, n, r) {
        let o = t.pathname;
        n({
          location: t,
          routes: e
        }, ((e, t, n) => {
          if (e || !n) return r(o);
          const s = function(e) {
            if (!Array.isArray(e) || 0 === e.length) return "";
            const t = e.filter((e => !!e.path));
            let n = -1;
            for (let e = t.length - 1; e >= 0; e--) {
              const r = t[e];
              if (r.path && r.path.startsWith("/")) {
                n = e;
                break
              }
            }
            return t.slice(n).filter((e => {
              let {
                path: t
              } = e;
              return !!t
            })).map((e => {
              let {
                path: t
              } = e;
              return t
            })).join("")
          }(n.routes || []);
          return 0 === s.length || "/*" === s ? r(o) : (o = s, r(o, "route"))
        }))
      }
      var j = n(98030);
      const $ = "/home/runner/work/sentry-javascript/sentry-javascript/packages/react/src/reactrouter.tsx";
      let B;

      function U(e, t, n) {
        return q(e, "react-router-v4", t, n)
      }

      function H(e, t, n) {
        return q(e, "react-router-v5", t, n)
      }

      function q(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
          r = arguments.length > 3 ? arguments[3] : void 0;

        function o(e) {
          if (0 === n.length || !r) return [e, "url"];
          const t = z(n, e, r);
          for (let e = 0; e < t.length; e++)
            if (t[e].match.isExact) return [t[e].match.path, "route"];
          return [e, "url"]
        }
        const s = {
          "routing.instrumentation": t
        };
        return function(t) {
          let n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            r = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          const i = e && e.location ? e.location.pathname : N.jf && N.jf.location ? N.jf.location.pathname : void 0;
          if (n && i) {
            const [e, n] = o(i);
            B = t({
              name: e,
              op: "pageload",
              origin: "auto.pageload.react.reactrouter",
              tags: s,
              metadata: {
                source: n
              }
            })
          }
          r && e.listen && e.listen(((e, n) => {
            if (n && ("PUSH" === n || "POP" === n)) {
              B && B.end();
              const [n, r] = o(e.pathname);
              B = t({
                name: n,
                op: "navigation",
                origin: "auto.navigation.react.reactrouter",
                tags: s,
                metadata: {
                  source: r
                }
              })
            }
          }))
        }
      }

      function z(e, t, n) {
        let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [];
        return e.some((e => {
          const o = e.path ? n(t, e) : r.length ? r[r.length - 1].match : function(e) {
            return {
              path: "/",
              url: "/",
              params: {},
              isExact: "/" === e
            }
          }(t);
          return o && (r.push({
            route: e,
            match: o
          }), e.routes && z(e.routes, t, n, r)), !!o
        })), r
      }

      function W(e) {
        const t = e.displayName || e.name,
          n = t => (B && t && t.computedMatch && t.computedMatch.isExact && (B.updateName(t.computedMatch.path), B.setAttribute(j.i_, "route")), h.createElement(e, {
            ...t,
            __self: this,
            __source: {
              fileName: $,
              lineNumber: 176
            }
          }));
        return n.displayName = `sentryRoute(${t})`, p()(n, e), n
      }
      var K = n(59100);
      const G = "/home/runner/work/sentry-javascript/sentry-javascript/packages/react/src/reactrouterv6.tsx";
      let V, J, Y, X, Q, Z, ee, te, ne = !1;
      const re = {
        "routing.instrumentation": "react-router-v6"
      };

      function oe(e, t, n, r, o, s) {
        return function(i) {
          let a = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            c = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          const u = N.jf && N.jf.location && N.jf.location.pathname;
          a && u && (V = i({
            name: u,
            op: "pageload",
            origin: "auto.pageload.react.reactrouterv6",
            tags: re,
            metadata: {
              source: "url"
            }
          })), J = e, Y = t, X = n, Z = o, Q = r, ne = s || !1, ee = i, te = c
        }
      }

      function se(e, t) {
        if (!t || "/" === t) return e;
        if (!e.toLowerCase().startsWith(t.toLowerCase())) return e;
        const n = t.endsWith("/") ? t.length - 1 : t.length,
          r = e.charAt(n);
        return r && "/" !== r ? e : e.slice(n) || "/"
      }

      function ie(e, t, n) {
        let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        if (!e || 0 === e.length) return [ne ? se(t.pathname, r) : t.pathname, "url"];
        let o = "";
        if (n)
          for (let e = 0; e < n.length; e++) {
            const s = n[e],
              i = s.route;
            if (i) {
              if (i.index) return [ne ? se(s.pathname, r) : s.pathname, "route"];
              const e = i.path;
              if (e) {
                const n = "/" === e[0] || "/" === o[o.length - 1] ? e : `/${e}`;
                if (o += n, r + s.pathname === t.pathname) return (0, K.c4)(o) !== (0, K.c4)(s.pathname) && "/*" !== o.slice(-2) ? [(ne ? "" : r) + n, "route"] : [(ne ? "" : r) + o, "route"]
              }
            }
          }
        return [ne ? se(t.pathname, r) : t.pathname, "url"]
      }

      function ae(e, t, n, r) {
        const o = Array.isArray(n) ? n : Z(t, e, r);
        if (V && o) {
          const [n, s] = ie(t, e, o, r);
          V.updateName(n), V.setAttribute(j.i_, s)
        }
      }

      function ce(e, t, n, r, o) {
        const s = Array.isArray(r) ? r : Z(t, e, o);
        if (te && ("PUSH" === n || "POP" === n) && s) {
          V && V.end();
          const [n, r] = ie(t, e, s, o);
          V = ee({
            name: n,
            op: "navigation",
            origin: "auto.navigation.react.reactrouterv6",
            tags: re,
            metadata: {
              source: r
            }
          })
        }
      }

      function ue(e) {
        if (!(J && Y && X && Q && Z && ee)) return k && w.vF.warn(`reactRouterV6Instrumentation was unable to wrap Routes because of one or more missing parameters.\n      useEffect: ${J}. useLocation: ${Y}. useNavigationType: ${X}.\n      createRoutesFromChildren: ${Q}. matchRoutes: ${Z}. customStartTransaction: ${ee}.`), e;
        let t = !0;
        const n = n => {
          const r = Y(),
            o = X();
          return J((() => {
            const e = Q(n.children);
            t ? (ae(r, e), t = !1) : ce(r, e, o)
          }), [r, o]), h.createElement(e, {
            ...n,
            __self: this,
            __source: {
              fileName: G,
              lineNumber: 243
            }
          })
        };
        return p()(n, e), n
      }

      function le(e) {
        if (!(J && Y && X && Z && ee)) return k && w.vF.warn("reactRouterV6Instrumentation was unable to wrap `useRoutes` because of one or more missing parameters."), e;
        let t = !0;
        const n = n => {
          const {
            routes: r,
            locationArg: o
          } = n, s = e(r, o), i = Y(), a = X(), c = "string" == typeof o || o && o.pathname ? o : i;
          return J((() => {
            const e = "string" == typeof c ? {
              pathname: c
            } : c;
            t ? (ae(e, r), t = !1) : ce(e, r, a)
          }), [a, c]), s
        };
        return (e, t) => h.createElement(n, {
          routes: e,
          locationArg: t,
          __self: this,
          __source: {
            fileName: G,
            lineNumber: 300
          }
        })
      }

      function de(e) {
        return function(t, n) {
          const r = e(t, n),
            o = n && n.basename;
          return "POP" === r.state.historyAction && V && ae(r.state.location, t, void 0, o), r.subscribe((e => {
            const n = e.location;
            te && ("PUSH" === e.historyAction || "POP" === e.historyAction) && V && ce(n, t, e.historyAction, void 0, o)
          })), r
        }
      }
    },
    47220: (e, t, n) => {
      "use strict";
      n.d(t, {
        Q: () => s
      });
      var r = n(44877),
        o = n(34860);

      function s(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 250,
          s = arguments.length > 3 ? arguments[3] : void 0,
          a = arguments.length > 4 ? arguments[4] : void 0,
          c = arguments.length > 5 ? arguments[5] : void 0,
          u = arguments.length > 6 ? arguments[6] : void 0;
        if (!(c.exception && c.exception.values && u && (0, r.tH)(u.originalException, Error))) return;
        const l = c.exception.values.length > 0 ? c.exception.values[c.exception.values.length - 1] : void 0;
        var d, p;
        l && (c.exception.values = (d = i(e, t, a, u.originalException, s, c.exception.values, l, 0), p = n, d.map((e => (e.value && (e.value = (0, o.xv)(e.value, p)), e)))))
      }

      function i(e, t, n, o, s, u, l, d) {
        if (u.length >= n + 1) return u;
        let p = [...u];
        if ((0, r.tH)(o[s], Error)) {
          a(l, d);
          const r = e(t, o[s]),
            u = p.length;
          c(r, s, u, d), p = i(e, t, n, o[s], s, [r, ...p], r, u)
        }
        return Array.isArray(o.errors) && o.errors.forEach(((o, u) => {
          if ((0, r.tH)(o, Error)) {
            a(l, d);
            const r = e(t, o),
              h = p.length;
            c(r, `errors[${u}]`, h, d), p = i(e, t, n, o, s, [r, ...p], r, h)
          }
        })), p
      }

      function a(e, t) {
        e.mechanism = e.mechanism || {
          type: "generic",
          handled: !0
        }, e.mechanism = {
          ...e.mechanism,
          is_exception_group: !0,
          exception_id: t
        }
      }

      function c(e, t, n, r) {
        e.mechanism = e.mechanism || {
          type: "generic",
          handled: !0
        }, e.mechanism = {
          ...e.mechanism,
          type: "chained",
          source: t,
          exception_id: n,
          parent_id: r
        }
      }
    },
    76203: (e, t, n) => {
      "use strict";
      n.d(t, {
        De: () => d,
        hF: () => i,
        yD: () => l
      });
      var r = n(29427),
        o = n(44877),
        s = n(97205);
      const i = "baggage",
        a = "sentry-",
        c = /^sentry-/,
        u = 8192;

      function l(e) {
        if (!(0, o.Kg)(e) && !Array.isArray(e)) return;
        let t = {};
        if (Array.isArray(e)) t = e.reduce(((e, t) => {
          const n = p(t);
          for (const t of Object.keys(n)) e[t] = n[t];
          return e
        }), {});
        else {
          if (!e) return;
          t = p(e)
        }
        const n = Object.entries(t).reduce(((e, t) => {
          let [n, r] = t;
          return n.match(c) && (e[n.slice(a.length)] = r), e
        }), {});
        return Object.keys(n).length > 0 ? n : void 0
      }

      function d(e) {
        if (e) return function(e) {
          if (0 !== Object.keys(e).length) return Object.entries(e).reduce(((e, t, n) => {
            let [o, i] = t;
            const a = `${encodeURIComponent(o)}=${encodeURIComponent(i)}`,
              c = 0 === n ? a : `${e},${a}`;
            return c.length > u ? (r.T && s.vF.warn(`Not adding key: ${o} with val: ${i} to baggage header due to exceeding baggage size limits.`), e) : c
          }), "")
        }(Object.entries(e).reduce(((e, t) => {
          let [n, r] = t;
          return r && (e[`${a}${n}`] = r), e
        }), {}))
      }

      function p(e) {
        return e.split(",").map((e => e.split("=").map((e => decodeURIComponent(e.trim()))))).reduce(((e, t) => {
          let [n, r] = t;
          return e[n] = r, e
        }), {})
      }
    },
    33421: (e, t, n) => {
      "use strict";
      n.d(t, {
        $N: () => c,
        Hd: () => i,
        NX: () => u,
        xE: () => l
      });
      var r = n(44877);
      const o = (0, n(2254).VZ)(),
        s = 80;

      function i(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!e) return "<unknown>";
        try {
          let n = e;
          const r = 5,
            o = [];
          let i = 0,
            c = 0;
          const u = " > ",
            l = u.length;
          let d;
          const p = Array.isArray(t) ? t : t.keyAttrs,
            h = !Array.isArray(t) && t.maxStringLength || s;
          for (; n && i++ < r && (d = a(n, p), !("html" === d || i > 1 && c + o.length * l + d.length >= h));) o.push(d), c += d.length, n = n.parentNode;
          return o.reverse().join(u)
        } catch (e) {
          return "<unknown>"
        }
      }

      function a(e, t) {
        const n = e,
          s = [];
        let i, a, c, u, l;
        if (!n || !n.tagName) return "";
        if (o.HTMLElement && n instanceof HTMLElement && n.dataset && n.dataset.sentryComponent) return n.dataset.sentryComponent;
        s.push(n.tagName.toLowerCase());
        const d = t && t.length ? t.filter((e => n.getAttribute(e))).map((e => [e, n.getAttribute(e)])) : null;
        if (d && d.length) d.forEach((e => {
          s.push(`[${e[0]}="${e[1]}"]`)
        }));
        else if (n.id && s.push(`#${n.id}`), i = n.className, i && (0, r.Kg)(i))
          for (a = i.split(/\s+/), l = 0; l < a.length; l++) s.push(`.${a[l]}`);
        const p = ["aria-label", "type", "name", "title", "alt"];
        for (l = 0; l < p.length; l++) c = p[l], u = n.getAttribute(c), u && s.push(`[${c}="${u}"]`);
        return s.join("")
      }

      function c() {
        try {
          return o.document.location.href
        } catch (e) {
          return ""
        }
      }

      function u(e) {
        return o.document && o.document.querySelector ? o.document.querySelector(e) : null
      }

      function l(e) {
        if (!o.HTMLElement) return null;
        let t = e;
        for (let e = 0; e < 5; e++) {
          if (!t) return null;
          if (t instanceof HTMLElement && t.dataset.sentryComponent) return t.dataset.sentryComponent;
          t = t.parentNode
        }
        return null
      }
    },
    29427: (e, t, n) => {
      "use strict";
      n.d(t, {
        T: () => r
      });
      const r = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__
    },
    93088: (e, t, n) => {
      "use strict";
      n.d(t, {
        AD: () => u,
        SB: () => i,
        hH: () => a
      });
      var r = n(29427),
        o = n(97205);
      const s = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;

      function i(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const {
          host: n,
          path: r,
          pass: o,
          port: s,
          projectId: i,
          protocol: a,
          publicKey: c
        } = e;
        return `${a}://${c}${t&&o?`:${o}`:""}@${n}${s?`:${s}`:""}/${r?`${r}/`:r}${i}`
      }

      function a(e) {
        const t = s.exec(e);
        if (!t) return void(0, o.pq)((() => {
          console.error(`Invalid Sentry Dsn: ${e}`)
        }));
        const [n, r, i = "", a, u = "", l] = t.slice(1);
        let d = "",
          p = l;
        const h = p.split("/");
        if (h.length > 1 && (d = h.slice(0, -1).join("/"), p = h.pop()), p) {
          const e = p.match(/^\d+/);
          e && (p = e[0])
        }
        return c({
          host: a,
          pass: i,
          path: d,
          projectId: p,
          port: u,
          protocol: n,
          publicKey: r
        })
      }

      function c(e) {
        return {
          protocol: e.protocol,
          publicKey: e.publicKey || "",
          pass: e.pass || "",
          host: e.host,
          port: e.port || "",
          path: e.path || "",
          projectId: e.projectId
        }
      }

      function u(e) {
        const t = "string" == typeof e ? a(e) : c(e);
        if (t && function(e) {
            if (!r.T) return !0;
            const {
              port: t,
              projectId: n,
              protocol: s
            } = e;
            return !(["protocol", "publicKey", "host", "projectId"].find((t => !e[t] && (o.vF.error(`Invalid Sentry Dsn: ${t} missing`), !0))) || (n.match(/^\d+$/) ? function(e) {
              return "http" === e || "https" === e
            }(s) ? t && isNaN(parseInt(t, 10)) && (o.vF.error(`Invalid Sentry Dsn: Invalid port ${t}`), 1) : (o.vF.error(`Invalid Sentry Dsn: Invalid protocol ${s}`), 1) : (o.vF.error(`Invalid Sentry Dsn: Invalid projectId ${n}`), 1)))
          }(t)) return t
      }
    },
    72450: (e, t, n) => {
      "use strict";

      function r() {
        return "undefined" != typeof __SENTRY_BROWSER_BUNDLE__ && !!__SENTRY_BROWSER_BUNDLE__
      }

      function o() {
        return "npm"
      }
      n.d(t, {
        Z: () => r,
        e: () => o
      })
    },
    21249: (e, t, n) => {
      "use strict";
      n.d(t, {
        Cj: () => g,
        W3: () => a,
        bN: () => d,
        bm: () => h,
        h4: () => i,
        hP: () => u,
        mE: () => p,
        n2: () => v,
        yH: () => c,
        zk: () => m
      });
      var r = n(93088),
        o = n(50767),
        s = n(98478);

      function i(e) {
        return [e, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []]
      }

      function a(e, t) {
        const [n, r] = e;
        return [n, [...r, t]]
      }

      function c(e, t) {
        const n = e[1];
        for (const e of n)
          if (t(e, e[0].type)) return !0;
        return !1
      }

      function u(e, t) {
        return c(e, ((e, n) => t.includes(n)))
      }

      function l(e, t) {
        return (t || new TextEncoder).encode(e)
      }

      function d(e, t) {
        const [n, r] = e;
        let s = JSON.stringify(n);

        function i(e) {
          "string" == typeof s ? s = "string" == typeof e ? s + e : [l(s, t), e] : s.push("string" == typeof e ? l(e, t) : e)
        }
        for (const e of r) {
          const [t, n] = e;
          if (i(`\n${JSON.stringify(t)}\n`), "string" == typeof n || n instanceof Uint8Array) i(n);
          else {
            let e;
            try {
              e = JSON.stringify(n)
            } catch (t) {
              e = JSON.stringify((0, o.S8)(n))
            }
            i(e)
          }
        }
        return "string" == typeof s ? s : function(e) {
          const t = e.reduce(((e, t) => e + t.length), 0),
            n = new Uint8Array(t);
          let r = 0;
          for (const t of e) n.set(t, r), r += t.length;
          return n
        }(s)
      }

      function p(e, t, n) {
        let r = "string" == typeof e ? t.encode(e) : e;

        function o(e) {
          const t = r.subarray(0, e);
          return r = r.subarray(e + 1), t
        }

        function s() {
          let e = r.indexOf(10);
          return e < 0 && (e = r.length), JSON.parse(n.decode(o(e)))
        }
        const i = s(),
          a = [];
        for (; r.length;) {
          const e = s(),
            t = "number" == typeof e.length ? e.length : void 0;
          a.push([e, t ? o(t) : s()])
        }
        return [i, a]
      }

      function h(e, t) {
        const n = "string" == typeof e.data ? l(e.data, t) : e.data;
        return [(0, s.Ce)({
          type: "attachment",
          length: n.length,
          filename: e.filename,
          content_type: e.contentType,
          attachment_type: e.attachmentType
        }), n]
      }
      const f = {
        session: "session",
        sessions: "session",
        attachment: "attachment",
        transaction: "transaction",
        event: "error",
        client_report: "internal",
        user_report: "default",
        profile: "profile",
        replay_event: "replay",
        replay_recording: "replay",
        check_in: "monitor",
        feedback: "feedback",
        statsd: "unknown"
      };

      function m(e) {
        return f[e]
      }

      function g(e) {
        if (!e || !e.sdk) return;
        const {
          name: t,
          version: n
        } = e.sdk;
        return {
          name: t,
          version: n
        }
      }

      function v(e, t, n, o) {
        const i = e.sdkProcessingMetadata && e.sdkProcessingMetadata.dynamicSamplingContext;
        return {
          event_id: e.event_id,
          sent_at: (new Date).toISOString(),
          ...t && {
            sdk: t
          },
          ...!!n && o && {
            dsn: (0, r.SB)(o)
          },
          ...i && {
            trace: (0, s.Ce)({
              ...i
            })
          }
        }
      }
    },
    46951: (e, t, n) => {
      "use strict";
      n.d(t, {
        U: () => r
      });
      class r extends Error {
        constructor(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "warn";
          super(e), this.message = e, this.name = new.target.prototype.constructor.name, Object.setPrototypeOf(this, new.target.prototype), this.logLevel = t
        }
      }
    },
    21271: (e, t, n) => {
      "use strict";
      n.d(t, {
        AS: () => u,
        aj: () => l,
        s5: () => c
      });
      var r = n(29427),
        o = n(97205),
        s = n(46600);
      const i = {},
        a = {};

      function c(e, t) {
        i[e] = i[e] || [], i[e].push(t)
      }

      function u(e, t) {
        a[e] || (t(), a[e] = !0)
      }

      function l(e, t) {
        const n = e && i[e];
        if (n)
          for (const i of n) try {
            i(t)
          } catch (t) {
            r.T && o.vF.error(`Error while triggering instrumentation handler.\nType: ${e}\nName: ${(0,s.qQ)(i)}\nError:`, t)
          }
      }
    },
    78546: (e, t, n) => {
      "use strict";
      n.d(t, {
        P: () => a
      });
      var r = n(97205),
        o = n(98478),
        s = n(2254),
        i = n(21271);

      function a(e) {
        const t = "console";
        (0, i.s5)(t, e), (0, i.AS)(t, c)
      }

      function c() {
        "console" in s.OW && r.Ow.forEach((function(e) {
          e in s.OW.console && (0, o.GS)(s.OW.console, e, (function(t) {
            return r.Z9[e] = t,
              function() {
                for (var t = arguments.length, n = new Array(t), o = 0; o < t; o++) n[o] = arguments[o];
                const a = {
                  args: n,
                  level: e
                };
                (0, i.aj)("console", a);
                const c = r.Z9[e];
                c && c.apply(s.OW.console, n)
              }
          }))
        }))
      }
    },
    6803: (e, t, n) => {
      "use strict";
      n.d(t, {
        i: () => p
      });
      var r = n(13817),
        o = n(98478),
        s = n(2254),
        i = n(21271);
      const a = s.OW,
        c = 1e3;
      let u, l, d;

      function p(e) {
        (0, i.s5)("dom", e), (0, i.AS)("dom", h)
      }

      function h() {
        if (!a.document) return;
        const e = i.aj.bind(null, "dom"),
          t = f(e, !0);
        a.document.addEventListener("click", t, !1), a.document.addEventListener("keypress", t, !1), ["EventTarget", "Node"].forEach((t => {
          const n = a[t] && a[t].prototype;
          n && n.hasOwnProperty && n.hasOwnProperty("addEventListener") && ((0, o.GS)(n, "addEventListener", (function(t) {
            return function(n, r, o) {
              if ("click" === n || "keypress" == n) try {
                const r = this,
                  s = r.__sentry_instrumentation_handlers__ = r.__sentry_instrumentation_handlers__ || {},
                  i = s[n] = s[n] || {
                    refCount: 0
                  };
                if (!i.handler) {
                  const r = f(e);
                  i.handler = r, t.call(this, n, r, o)
                }
                i.refCount++
              } catch (e) {}
              return t.call(this, n, r, o)
            }
          })), (0, o.GS)(n, "removeEventListener", (function(e) {
            return function(t, n, r) {
              if ("click" === t || "keypress" == t) try {
                const n = this,
                  o = n.__sentry_instrumentation_handlers__ || {},
                  s = o[t];
                s && (s.refCount--, s.refCount <= 0 && (e.call(this, t, s.handler, r), s.handler = void 0, delete o[t]), 0 === Object.keys(o).length && delete n.__sentry_instrumentation_handlers__)
              } catch (e) {}
              return e.call(this, t, n, r)
            }
          })))
        }))
      }

      function f(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return n => {
          if (!n || n._sentryCaptured) return;
          const s = function(e) {
            try {
              return e.target
            } catch (e) {
              return null
            }
          }(n);
          if (function(e, t) {
              return "keypress" === e && (!t || !t.tagName || "INPUT" !== t.tagName && "TEXTAREA" !== t.tagName && !t.isContentEditable)
            }(n.type, s)) return;
          (0, o.my)(n, "_sentryCaptured", !0), s && !s._sentryId && (0, o.my)(s, "_sentryId", (0, r.eJ)());
          const i = "keypress" === n.type ? "input" : n.type;
          (function(e) {
            if (e.type !== l) return !1;
            try {
              if (!e.target || e.target._sentryId !== d) return !1
            } catch (e) {}
            return !0
          })(n) || (e({
            event: n,
            name: i,
            global: t
          }), l = n.type, d = s ? s._sentryId : void 0), clearTimeout(u), u = a.setTimeout((() => {
            d = void 0, l = void 0
          }), c)
        }
      }
    },
    63335: (e, t, n) => {
      "use strict";
      n.d(t, {
        u: () => a
      });
      var r = n(98478),
        o = n(40285),
        s = n(2254),
        i = n(21271);

      function a(e) {
        const t = "fetch";
        (0, i.s5)(t, e), (0, i.AS)(t, c)
      }

      function c() {
        (0, o.m7)() && (0, r.GS)(s.OW, "fetch", (function(e) {
          return function() {
            for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
            const {
              method: o,
              url: a
            } = function(e) {
              if (0 === e.length) return {
                method: "GET",
                url: ""
              };
              if (2 === e.length) {
                const [t, n] = e;
                return {
                  url: l(t),
                  method: u(n, "method") ? String(n.method).toUpperCase() : "GET"
                }
              }
              const t = e[0];
              return {
                url: l(t),
                method: u(t, "method") ? String(t.method).toUpperCase() : "GET"
              }
            }(n), c = {
              args: n,
              fetchData: {
                method: o,
                url: a
              },
              startTimestamp: Date.now()
            };
            return (0, i.aj)("fetch", {
              ...c
            }), e.apply(s.OW, n).then((e => {
              const t = {
                ...c,
                endTimestamp: Date.now(),
                response: e
              };
              return (0, i.aj)("fetch", t), e
            }), (e => {
              const t = {
                ...c,
                endTimestamp: Date.now(),
                error: e
              };
              throw (0, i.aj)("fetch", t), e
            }))
          }
        }))
      }

      function u(e, t) {
        return !!e && "object" == typeof e && !!e[t]
      }

      function l(e) {
        return "string" == typeof e ? e : e ? u(e, "url") ? e.url : e.toString ? e.toString() : "" : ""
      }
    },
    82076: (e, t, n) => {
      "use strict";
      n.d(t, {
        L: () => i
      });
      var r = n(2254),
        o = n(21271);
      let s = null;

      function i(e) {
        const t = "error";
        (0, o.s5)(t, e), (0, o.AS)(t, a)
      }

      function a() {
        s = r.OW.onerror, r.OW.onerror = function(e, t, n, r, i) {
          const a = {
            column: r,
            error: i,
            line: n,
            msg: e,
            url: t
          };
          return (0, o.aj)("error", a), !(!s || s.__SENTRY_LOADER__) && s.apply(this, arguments)
        }, r.OW.onerror.__SENTRY_INSTRUMENTED__ = !0
      }
    },
    11526: (e, t, n) => {
      "use strict";
      n.d(t, {
        r: () => i
      });
      var r = n(2254),
        o = n(21271);
      let s = null;

      function i(e) {
        const t = "unhandledrejection";
        (0, o.s5)(t, e), (0, o.AS)(t, a)
      }

      function a() {
        s = r.OW.onunhandledrejection, r.OW.onunhandledrejection = function(e) {
          const t = e;
          return (0, o.aj)("unhandledrejection", t), !(s && !s.__SENTRY_LOADER__) || s.apply(this, arguments)
        }, r.OW.onunhandledrejection.__SENTRY_INSTRUMENTED__ = !0
      }
    },
    77548: (e, t, n) => {
      "use strict";
      n.d(t, {
        _: () => u
      });
      var r = n(98478),
        o = n(2254);
      const s = (0, o.VZ)();
      var i = n(21271);
      const a = o.OW;
      let c;

      function u(e) {
        const t = "history";
        (0, i.s5)(t, e), (0, i.AS)(t, l)
      }

      function l() {
        if (! function() {
            const e = s.chrome,
              t = e && e.app && e.app.runtime,
              n = "history" in s && !!s.history.pushState && !!s.history.replaceState;
            return !t && n
          }()) return;
        const e = a.onpopstate;

        function t(e) {
          return function() {
            for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
            const o = n.length > 2 ? n[2] : void 0;
            if (o) {
              const e = c,
                t = String(o);
              c = t;
              const n = {
                from: e,
                to: t
              };
              (0, i.aj)("history", n)
            }
            return e.apply(this, n)
          }
        }
        a.onpopstate = function() {
          const t = a.location.href,
            n = c;
          c = t;
          const r = {
            from: n,
            to: t
          };
          if ((0, i.aj)("history", r), e) try {
            for (var o = arguments.length, s = new Array(o), u = 0; u < o; u++) s[u] = arguments[u];
            return e.apply(this, s)
          } catch (e) {}
        }, (0, r.GS)(a.history, "pushState", t), (0, r.GS)(a.history, "replaceState", t)
      }
    },
    27817: (e, t, n) => {
      "use strict";
      n.d(t, {
        Er: () => c,
        Mn: () => u
      });
      var r = n(44877),
        o = n(98478),
        s = n(2254),
        i = n(21271);
      const a = s.OW,
        c = "__sentry_xhr_v3__";

      function u(e) {
        (0, i.s5)("xhr", e), (0, i.AS)("xhr", l)
      }

      function l() {
        if (!a.XMLHttpRequest) return;
        const e = XMLHttpRequest.prototype;
        (0, o.GS)(e, "open", (function(e) {
          return function() {
            const t = Date.now();
            for (var n = arguments.length, s = new Array(n), a = 0; a < n; a++) s[a] = arguments[a];
            const u = (0, r.Kg)(s[0]) ? s[0].toUpperCase() : void 0,
              l = function(e) {
                if ((0, r.Kg)(e)) return e;
                try {
                  return e.toString()
                } catch (e) {}
              }(s[1]);
            if (!u || !l) return e.apply(this, s);
            this[c] = {
              method: u,
              url: l,
              request_headers: {}
            }, "POST" === u && l.match(/sentry_key/) && (this.__sentry_own_request__ = !0);
            const d = () => {
              const e = this[c];
              if (e && 4 === this.readyState) {
                try {
                  e.status_code = this.status
                } catch (e) {}
                const n = {
                  args: [u, l],
                  endTimestamp: Date.now(),
                  startTimestamp: t,
                  xhr: this
                };
                (0, i.aj)("xhr", n)
              }
            };
            return "onreadystatechange" in this && "function" == typeof this.onreadystatechange ? (0, o.GS)(this, "onreadystatechange", (function(e) {
              return function() {
                d();
                for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                return e.apply(this, n)
              }
            })) : this.addEventListener("readystatechange", d), (0, o.GS)(this, "setRequestHeader", (function(e) {
              return function() {
                for (var t = arguments.length, n = new Array(t), o = 0; o < t; o++) n[o] = arguments[o];
                const [s, i] = n, a = this[c];
                return a && (0, r.Kg)(s) && (0, r.Kg)(i) && (a.request_headers[s.toLowerCase()] = i), e.apply(this, n)
              }
            })), e.apply(this, s)
          }
        })), (0, o.GS)(e, "send", (function(e) {
          return function() {
            const t = this[c];
            for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
            if (!t) return e.apply(this, r);
            void 0 !== r[0] && (t.body = r[0]);
            const s = {
              args: [t.method, t.url],
              startTimestamp: Date.now(),
              xhr: this
            };
            return (0, i.aj)("xhr", s), e.apply(this, r)
          }
        }))
      }
    },
    44877: (e, t, n) => {
      "use strict";
      n.d(t, {
        BD: () => a,
        Kg: () => u,
        L2: () => b,
        NF: () => l,
        Qd: () => p,
        Qg: () => g,
        T2: () => i,
        W6: () => c,
        bJ: () => o,
        gd: () => m,
        mE: () => v,
        sO: () => d,
        tH: () => _,
        vq: () => f,
        xH: () => h,
        yr: () => y
      });
      const r = Object.prototype.toString;

      function o(e) {
        switch (r.call(e)) {
          case "[object Error]":
          case "[object Exception]":
          case "[object DOMException]":
            return !0;
          default:
            return _(e, Error)
        }
      }

      function s(e, t) {
        return r.call(e) === `[object ${t}]`
      }

      function i(e) {
        return s(e, "ErrorEvent")
      }

      function a(e) {
        return s(e, "DOMError")
      }

      function c(e) {
        return s(e, "DOMException")
      }

      function u(e) {
        return s(e, "String")
      }

      function l(e) {
        return "object" == typeof e && null !== e && "__sentry_template_string__" in e && "__sentry_template_values__" in e
      }

      function d(e) {
        return null === e || l(e) || "object" != typeof e && "function" != typeof e
      }

      function p(e) {
        return s(e, "Object")
      }

      function h(e) {
        return "undefined" != typeof Event && _(e, Event)
      }

      function f(e) {
        return "undefined" != typeof Element && _(e, Element)
      }

      function m(e) {
        return s(e, "RegExp")
      }

      function g(e) {
        return Boolean(e && e.then && "function" == typeof e.then)
      }

      function v(e) {
        return p(e) && "nativeEvent" in e && "preventDefault" in e && "stopPropagation" in e
      }

      function y(e) {
        return "number" == typeof e && e != e
      }

      function _(e, t) {
        try {
          return e instanceof t
        } catch (e) {
          return !1
        }
      }

      function b(e) {
        return !("object" != typeof e || null === e || !e.__isVue && !e._isVue)
      }
    },
    97205: (e, t, n) => {
      "use strict";
      n.d(t, {
        Ow: () => s,
        Z9: () => i,
        pq: () => a,
        vF: () => c
      });
      var r = n(29427),
        o = n(2254);
      const s = ["debug", "info", "warn", "error", "log", "assert", "trace"],
        i = {};

      function a(e) {
        if (!("console" in o.OW)) return e();
        const t = o.OW.console,
          n = {},
          r = Object.keys(i);
        r.forEach((e => {
          const r = i[e];
          n[e] = t[e], t[e] = r
        }));
        try {
          return e()
        } finally {
          r.forEach((e => {
            t[e] = n[e]
          }))
        }
      }
      const c = function() {
        let e = !1;
        const t = {
          enable: () => {
            e = !0
          },
          disable: () => {
            e = !1
          },
          isEnabled: () => e
        };
        return r.T ? s.forEach((n => {
          t[n] = function() {
            for (var t = arguments.length, r = new Array(t), s = 0; s < t; s++) r[s] = arguments[s];
            e && a((() => {
              o.OW.console[n](`Sentry Logger [${n}]:`, ...r)
            }))
          }
        })) : s.forEach((e => {
          t[e] = () => {}
        })), t
      }()
    },
    13817: (e, t, n) => {
      "use strict";
      n.d(t, {
        $X: () => c,
        GR: () => p,
        M6: () => l,
        db: () => d,
        eJ: () => i,
        gO: () => u,
        k9: () => h
      });
      var r = n(98478),
        o = n(34860),
        s = n(2254);

      function i() {
        const e = s.OW,
          t = e.crypto || e.msCrypto;
        let n = () => 16 * Math.random();
        try {
          if (t && t.randomUUID) return t.randomUUID().replace(/-/g, "");
          t && t.getRandomValues && (n = () => {
            const e = new Uint8Array(1);
            return t.getRandomValues(e), e[0]
          })
        } catch (e) {}
        return ([1e7] + 1e3 + 4e3 + 8e3 + 1e11).replace(/[018]/g, (e => (e ^ (15 & n()) >> e / 4).toString(16)))
      }

      function a(e) {
        return e.exception && e.exception.values ? e.exception.values[0] : void 0
      }

      function c(e) {
        const {
          message: t,
          event_id: n
        } = e;
        if (t) return t;
        const r = a(e);
        return r ? r.type && r.value ? `${r.type}: ${r.value}` : r.type || r.value || n || "<unknown>" : n || "<unknown>"
      }

      function u(e, t, n) {
        const r = e.exception = e.exception || {},
          o = r.values = r.values || [],
          s = o[0] = o[0] || {};
        s.value || (s.value = t || ""), s.type || (s.type = n || "Error")
      }

      function l(e, t) {
        const n = a(e);
        if (!n) return;
        const r = n.mechanism;
        if (n.mechanism = {
            type: "generic",
            handled: !0,
            ...r,
            ...t
          }, t && "data" in t) {
          const e = {
            ...r && r.data,
            ...t.data
          };
          n.mechanism.data = e
        }
      }

      function d(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 5;
        if (void 0 === t.lineno) return;
        const r = e.length,
          s = Math.max(Math.min(r - 1, t.lineno - 1), 0);
        t.pre_context = e.slice(Math.max(0, s - n), s).map((e => (0, o.nC)(e, 0))), t.context_line = (0, o.nC)(e[Math.min(r - 1, s)], t.colno || 0), t.post_context = e.slice(Math.min(s + 1, r), s + 1 + n).map((e => (0, o.nC)(e, 0)))
      }

      function p(e) {
        if (e && e.__sentry_captured__) return !0;
        try {
          (0, r.my)(e, "__sentry_captured__", !0)
        } catch (e) {}
        return !1
      }

      function h(e) {
        return Array.isArray(e) ? e : [e]
      }
    },
    38085: (e, t, n) => {
      "use strict";
      n.d(t, {
        wD: () => s
      });
      var r = n(72450);
      e = n.hmd(e);
      var o = n(18113);

      function s() {
        return !(0, r.Z)() && "[object process]" === Object.prototype.toString.call(void 0 !== o ? o : 0)
      }
    },
    50767: (e, t, n) => {
      "use strict";
      n.d(t, {
        S8: () => i,
        cd: () => a
      });
      var r = n(44877),
        o = n(98478),
        s = n(46600);

      function i(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100,
          n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1 / 0;
        try {
          return c("", e, t, n)
        } catch (e) {
          return {
            ERROR: `**non-serializable** (${e})`
          }
        }
      }

      function a(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3,
          n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 102400;
        const r = i(e, t);
        return o = r,
          function(e) {
            return ~-encodeURI(e).split(/%..|./).length
          }(JSON.stringify(o)) > n ? a(e, t - 1, n) : r;
        var o
      }

      function c(e, t) {
        let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1 / 0,
          a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1 / 0,
          u = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : function() {
            const e = "function" == typeof WeakSet,
              t = e ? new WeakSet : [];
            return [function(n) {
              if (e) return !!t.has(n) || (t.add(n), !1);
              for (let e = 0; e < t.length; e++)
                if (t[e] === n) return !0;
              return t.push(n), !1
            }, function(n) {
              if (e) t.delete(n);
              else
                for (let e = 0; e < t.length; e++)
                  if (t[e] === n) {
                    t.splice(e, 1);
                    break
                  }
            }]
          }();
        const [l, d] = u;
        if (null == t || ["number", "boolean", "string"].includes(typeof t) && !(0, r.yr)(t)) return t;
        const p = function(e, t) {
          try {
            if ("domain" === e && t && "object" == typeof t && t._events) return "[Domain]";
            if ("domainEmitter" === e) return "[DomainEmitter]";
            if (void 0 !== n.g && t === n.g) return "[Global]";
            if ("undefined" != typeof window && t === window) return "[Window]";
            if ("undefined" != typeof document && t === document) return "[Document]";
            if ((0, r.L2)(t)) return "[VueViewModel]";
            if ((0, r.mE)(t)) return "[SyntheticEvent]";
            if ("number" == typeof t && t != t) return "[NaN]";
            if ("function" == typeof t) return `[Function: ${(0,s.qQ)(t)}]`;
            if ("symbol" == typeof t) return `[${String(t)}]`;
            if ("bigint" == typeof t) return `[BigInt: ${String(t)}]`;
            const o = function(e) {
              const t = Object.getPrototypeOf(e);
              return t ? t.constructor.name : "null prototype"
            }(t);
            return /^HTML(\w*)Element$/.test(o) ? `[HTMLElement: ${o}]` : `[object ${o}]`
          } catch (e) {
            return `**non-serializable** (${e})`
          }
        }(e, t);
        if (!p.startsWith("[object ")) return p;
        if (t.__sentry_skip_normalization__) return t;
        const h = "number" == typeof t.__sentry_override_normalization_depth__ ? t.__sentry_override_normalization_depth__ : i;
        if (0 === h) return p.replace("object ", "");
        if (l(t)) return "[Circular ~]";
        const f = t;
        if (f && "function" == typeof f.toJSON) try {
          return c("", f.toJSON(), h - 1, a, u)
        } catch (e) {}
        const m = Array.isArray(t) ? [] : {};
        let g = 0;
        const v = (0, o.W4)(t);
        for (const e in v) {
          if (!Object.prototype.hasOwnProperty.call(v, e)) continue;
          if (g >= a) {
            m[e] = "[MaxProperties ~]";
            break
          }
          const t = v[e];
          m[e] = c(e, t, h - 1, a, u), g++
        }
        return d(t), m
      }
    },
    98478: (e, t, n) => {
      "use strict";
      n.d(t, {
        Ce: () => v,
        GS: () => c,
        HF: () => g,
        W4: () => h,
        my: () => u,
        pO: () => l,
        sp: () => d,
        u4: () => p
      });
      var r = n(33421),
        o = n(29427),
        s = n(44877),
        i = n(97205),
        a = n(34860);

      function c(e, t, n) {
        if (!(t in e)) return;
        const r = e[t],
          o = n(r);
        "function" == typeof o && l(o, r), e[t] = o
      }

      function u(e, t, n) {
        try {
          Object.defineProperty(e, t, {
            value: n,
            writable: !0,
            configurable: !0
          })
        } catch (n) {
          o.T && i.vF.log(`Failed to add non-enumerable property "${t}" to object`, e)
        }
      }

      function l(e, t) {
        try {
          const n = t.prototype || {};
          e.prototype = t.prototype = n, u(e, "__sentry_original__", t)
        } catch (e) {}
      }

      function d(e) {
        return e.__sentry_original__
      }

      function p(e) {
        return Object.keys(e).map((t => `${encodeURIComponent(t)}=${encodeURIComponent(e[t])}`)).join("&")
      }

      function h(e) {
        if ((0, s.bJ)(e)) return {
          message: e.message,
          name: e.name,
          stack: e.stack,
          ...m(e)
        };
        if ((0, s.xH)(e)) {
          const t = {
            type: e.type,
            target: f(e.target),
            currentTarget: f(e.currentTarget),
            ...m(e)
          };
          return "undefined" != typeof CustomEvent && (0, s.tH)(e, CustomEvent) && (t.detail = e.detail), t
        }
        return e
      }

      function f(e) {
        try {
          return (0, s.vq)(e) ? (0, r.Hd)(e) : Object.prototype.toString.call(e)
        } catch (e) {
          return "<unknown>"
        }
      }

      function m(e) {
        if ("object" == typeof e && null !== e) {
          const t = {};
          for (const n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
          return t
        }
        return {}
      }

      function g(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 40;
        const n = Object.keys(h(e));
        if (n.sort(), !n.length) return "[object has no keys]";
        if (n[0].length >= t) return (0, a.xv)(n[0], t);
        for (let e = n.length; e > 0; e--) {
          const r = n.slice(0, e).join(", ");
          if (!(r.length > t)) return e === n.length ? r : (0, a.xv)(r, t)
        }
        return ""
      }

      function v(e) {
        return y(e, new Map)
      }

      function y(e, t) {
        if (function(e) {
            if (!(0, s.Qd)(e)) return !1;
            try {
              const t = Object.getPrototypeOf(e).constructor.name;
              return !t || "Object" === t
            } catch (e) {
              return !0
            }
          }(e)) {
          const n = t.get(e);
          if (void 0 !== n) return n;
          const r = {};
          t.set(e, r);
          for (const n of Object.keys(e)) void 0 !== e[n] && (r[n] = y(e[n], t));
          return r
        }
        if (Array.isArray(e)) {
          const n = t.get(e);
          if (void 0 !== n) return n;
          const r = [];
          return t.set(e, r), e.forEach((e => {
            r.push(y(e, t))
          })), r
        }
        return e
      }
    },
    80836: (e, t, n) => {
      "use strict";
      n.d(t, {
        FA: () => o,
        Jz: () => s,
        wq: () => i
      });
      const r = 6e4;

      function o(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        const n = parseInt(`${e}`, 10);
        if (!isNaN(n)) return 1e3 * n;
        const o = Date.parse(`${e}`);
        return isNaN(o) ? r : o - t
      }

      function s(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now();
        return function(e, t) {
          return e[t] || e.all || 0
        }(e, t) > n
      }

      function i(e, t) {
        let {
          statusCode: n,
          headers: r
        } = t, s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now();
        const i = {
            ...e
          },
          a = r && r["x-sentry-rate-limits"],
          c = r && r["retry-after"];
        if (a)
          for (const e of a.trim().split(",")) {
            const [t, n] = e.split(":", 2), r = parseInt(t, 10), o = 1e3 * (isNaN(r) ? 60 : r);
            if (n)
              for (const e of n.split(";")) i[e] = s + o;
            else i.all = s + o
          } else c ? i.all = s + o(c, s) : 429 === n && (i.all = s + 6e4);
        return i
      }
    },
    69514: (e, t, n) => {
      "use strict";
      n.d(t, {
        te: () => o
      });
      const r = ["fatal", "error", "warning", "log", "info", "debug"];

      function o(e) {
        return "warn" === e ? "warning" : r.includes(e) ? e : "log"
      }
    },
    46600: (e, t, n) => {
      "use strict";
      n.d(t, {
        gd: () => i,
        qQ: () => u,
        vk: () => a
      });
      const r = 50,
        o = /\(error: (.*)\)/,
        s = /captureMessage|captureException/;

      function i() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        const i = t.sort(((e, t) => e[0] - t[0])).map((e => e[1]));
        return function(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          const n = [],
            a = e.split("\n");
          for (let e = t; e < a.length; e++) {
            const t = a[e];
            if (t.length > 1024) continue;
            const s = o.test(t) ? t.replace(o, "$1") : t;
            if (!s.match(/\S*Error: /)) {
              for (const e of i) {
                const t = e(s);
                if (t) {
                  n.push(t);
                  break
                }
              }
              if (n.length >= r) break
            }
          }
          return function(e) {
            if (!e.length) return [];
            const t = Array.from(e);
            return /sentryWrapped/.test(t[t.length - 1].function || "") && t.pop(), t.reverse(), s.test(t[t.length - 1].function || "") && (t.pop(), s.test(t[t.length - 1].function || "") && t.pop()), t.slice(0, r).map((e => ({
              ...e,
              filename: e.filename || t[t.length - 1].filename,
              function: e.function || "?"
            })))
          }(n)
        }
      }

      function a(e) {
        return Array.isArray(e) ? i(...e) : e
      }
      const c = "<anonymous>";

      function u(e) {
        try {
          return e && "function" == typeof e && e.name || c
        } catch (e) {
          return c
        }
      }
    },
    34860: (e, t, n) => {
      "use strict";
      n.d(t, {
        Xr: () => a,
        gt: () => i,
        nC: () => s,
        xv: () => o
      });
      var r = n(44877);

      function o(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return "string" != typeof e || 0 === t || e.length <= t ? e : `${e.slice(0,t)}...`
      }

      function s(e, t) {
        let n = e;
        const r = n.length;
        if (r <= 150) return n;
        t > r && (t = r);
        let o = Math.max(t - 60, 0);
        o < 5 && (o = 0);
        let s = Math.min(o + 140, r);
        return s > r - 5 && (s = r), s === r && (o = Math.max(s - 140, 0)), n = n.slice(o, s), o > 0 && (n = `'{snip} ${n}`), s < r && (n += " {snip}"), n
      }

      function i(e, t) {
        if (!Array.isArray(e)) return "";
        const n = [];
        for (let t = 0; t < e.length; t++) {
          const o = e[t];
          try {
            (0, r.L2)(o) ? n.push("[VueViewModel]"): n.push(String(o))
          } catch (e) {
            n.push("[value cannot be serialized]")
          }
        }
        return n.join(t)
      }

      function a(e) {
        let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []).some((n => function(e, t) {
          let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          return !!(0, r.Kg)(e) && ((0, r.gd)(t) ? t.test(e) : !!(0, r.Kg)(t) && (n ? e === t : e.includes(t)))
        }(e, n, t)))
      }
    },
    40285: (e, t, n) => {
      "use strict";
      n.d(t, {
        ap: () => a,
        m7: () => c,
        vQ: () => u,
        vm: () => i
      });
      var r = n(29427),
        o = n(97205);
      const s = (0, n(2254).VZ)();

      function i() {
        if (!("fetch" in s)) return !1;
        try {
          return new Headers, new Request("http://www.example.com"), new Response, !0
        } catch (e) {
          return !1
        }
      }

      function a(e) {
        return e && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(e.toString())
      }

      function c() {
        if ("string" == typeof EdgeRuntime) return !0;
        if (!i()) return !1;
        if (a(s.fetch)) return !0;
        let e = !1;
        const t = s.document;
        if (t && "function" == typeof t.createElement) try {
          const n = t.createElement("iframe");
          n.hidden = !0, t.head.appendChild(n), n.contentWindow && n.contentWindow.fetch && (e = a(n.contentWindow.fetch)), t.head.removeChild(n)
        } catch (e) {
          r.T && o.vF.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", e)
        }
        return e
      }

      function u() {
        return "ReportingObserver" in s
      }
    },
    84541: (e, t, n) => {
      "use strict";
      n.d(t, {
        T2: () => a,
        XW: () => s,
        xg: () => i
      });
      var r, o = n(44877);

      function s(e) {
        return new a((t => {
          t(e)
        }))
      }

      function i(e) {
        return new a(((t, n) => {
          n(e)
        }))
      }! function(e) {
        e[e.PENDING = 0] = "PENDING", e[e.RESOLVED = 1] = "RESOLVED", e[e.REJECTED = 2] = "REJECTED"
      }(r || (r = {}));
      class a {
        constructor(e) {
          a.prototype.__init.call(this), a.prototype.__init2.call(this), a.prototype.__init3.call(this), a.prototype.__init4.call(this), this._state = r.PENDING, this._handlers = [];
          try {
            e(this._resolve, this._reject)
          } catch (e) {
            this._reject(e)
          }
        }
        then(e, t) {
          return new a(((n, r) => {
            this._handlers.push([!1, t => {
              if (e) try {
                n(e(t))
              } catch (e) {
                r(e)
              } else n(t)
            }, e => {
              if (t) try {
                n(t(e))
              } catch (e) {
                r(e)
              } else r(e)
            }]), this._executeHandlers()
          }))
        } catch (e) {
          return this.then((e => e), e)
        } finally(e) {
          return new a(((t, n) => {
            let r, o;
            return this.then((t => {
              o = !1, r = t, e && e()
            }), (t => {
              o = !0, r = t, e && e()
            })).then((() => {
              o ? n(r) : t(r)
            }))
          }))
        }
        __init() {
          this._resolve = e => {
            this._setResult(r.RESOLVED, e)
          }
        }
        __init2() {
          this._reject = e => {
            this._setResult(r.REJECTED, e)
          }
        }
        __init3() {
          this._setResult = (e, t) => {
            this._state === r.PENDING && ((0, o.Qg)(t) ? t.then(this._resolve, this._reject) : (this._state = e, this._value = t, this._executeHandlers()))
          }
        }
        __init4() {
          this._executeHandlers = () => {
            if (this._state === r.PENDING) return;
            const e = this._handlers.slice();
            this._handlers = [], e.forEach((e => {
              e[0] || (this._state === r.RESOLVED && e[1](this._value), this._state === r.REJECTED && e[2](this._value), e[0] = !0)
            }))
          }
        }
      }
    },
    65460: (e, t, n) => {
      "use strict";
      n.d(t, {
        k3: () => c,
        lu: () => s,
        zf: () => i
      });
      var r = n(2254);
      const o = 1e3;

      function s() {
        return Date.now() / o
      }
      const i = function() {
        const {
          performance: e
        } = r.OW;
        if (!e || !e.now) return s;
        const t = Date.now() - e.now(),
          n = null == e.timeOrigin ? t : e.timeOrigin;
        return () => (n + e.now()) / o
      }();
      let a;
      const c = (() => {
        const {
          performance: e
        } = r.OW;
        if (!e || !e.now) return void(a = "none");
        const t = 36e5,
          n = e.now(),
          o = Date.now(),
          s = e.timeOrigin ? Math.abs(e.timeOrigin + n - o) : t,
          i = s < t,
          c = e.timing && e.timing.navigationStart,
          u = "number" == typeof c ? Math.abs(c + n - o) : t;
        return i || u < t ? s <= u ? (a = "timeOrigin", e.timeOrigin) : (a = "navigationStart", c) : (a = "dateNow", o)
      })()
    },
    37427: (e, t, n) => {
      "use strict";
      n.d(t, {
        E0: () => a,
        TC: () => c,
        nc: () => i
      });
      var r = n(76203),
        o = n(13817);
      const s = new RegExp("^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$");

      function i(e) {
        if (!e) return;
        const t = e.match(s);
        if (!t) return;
        let n;
        return "1" === t[3] ? n = !0 : "0" === t[3] && (n = !1), {
          traceId: t[1],
          parentSampled: n,
          parentSpanId: t[2]
        }
      }

      function a(e, t) {
        const n = i(e),
          s = (0, r.yD)(t),
          {
            traceId: a,
            parentSpanId: c,
            parentSampled: u
          } = n || {};
        return n ? {
          traceparentData: n,
          dynamicSamplingContext: s || {},
          propagationContext: {
            traceId: a || (0, o.eJ)(),
            parentSpanId: c || (0, o.eJ)().substring(16),
            spanId: (0, o.eJ)().substring(16),
            sampled: u,
            dsc: s || {}
          }
        } : {
          traceparentData: n,
          dynamicSamplingContext: void 0,
          propagationContext: {
            traceId: a || (0, o.eJ)(),
            spanId: (0, o.eJ)().substring(16)
          }
        }
      }

      function c() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, o.eJ)(),
          t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : (0, o.eJ)().substring(16),
          n = arguments.length > 2 ? arguments[2] : void 0,
          r = "";
        return void 0 !== n && (r = n ? "-1" : "-0"), `${e}-${t}${r}`
      }
    },
    59100: (e, t, n) => {
      "use strict";

      function r(e) {
        if (!e) return {};
        const t = e.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
        if (!t) return {};
        const n = t[6] || "",
          r = t[8] || "";
        return {
          host: t[4],
          path: t[5],
          protocol: t[2],
          search: n,
          hash: r,
          relative: t[5] + n + r
        }
      }

      function o(e) {
        return e.split(/[\?#]/, 1)[0]
      }

      function s(e) {
        return e.split(/\\?\//).filter((e => e.length > 0 && "," !== e)).length
      }
      n.d(t, {
        Dl: () => r,
        c4: () => s,
        f: () => o
      })
    },
    2254: (e, t, n) => {
      "use strict";

      function r(e) {
        return e && e.Math == Math ? e : void 0
      }
      n.d(t, {
        BY: () => i,
        OW: () => o,
        VZ: () => s
      });
      const o = "object" == typeof globalThis && r(globalThis) || "object" == typeof window && r(window) || "object" == typeof self && r(self) || "object" == typeof n.g && r(n.g) || function() {
        return this
      }() || {};

      function s() {
        return o
      }

      function i(e, t, n) {
        const r = n || o,
          s = r.__SENTRY__ = r.__SENTRY__ || {};
        return s[e] || (s[e] = t())
      }
    },
    62607: (e, t, n) => {
      "use strict";
      var r = n(95463),
        o = {
          childContextTypes: !0,
          contextType: !0,
          contextTypes: !0,
          defaultProps: !0,
          displayName: !0,
          getDefaultProps: !0,
          getDerivedStateFromError: !0,
          getDerivedStateFromProps: !0,
          mixins: !0,
          propTypes: !0,
          type: !0
        },
        s = {
          name: !0,
          length: !0,
          prototype: !0,
          caller: !0,
          callee: !0,
          arguments: !0,
          arity: !0
        },
        i = {
          $$typeof: !0,
          compare: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
          type: !0
        },
        a = {};

      function c(e) {
        return r.isMemo(e) ? i : a[e.$$typeof] || o
      }
      a[r.ForwardRef] = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0
      }, a[r.Memo] = i;
      var u = Object.defineProperty,
        l = Object.getOwnPropertyNames,
        d = Object.getOwnPropertySymbols,
        p = Object.getOwnPropertyDescriptor,
        h = Object.getPrototypeOf,
        f = Object.prototype;
      e.exports = function e(t, n, r) {
        if ("string" != typeof n) {
          if (f) {
            var o = h(n);
            o && o !== f && e(t, o, r)
          }
          var i = l(n);
          d && (i = i.concat(d(n)));
          for (var a = c(t), m = c(n), g = 0; g < i.length; ++g) {
            var v = i[g];
            if (!(s[v] || r && r[v] || m && m[v] || a && a[v])) {
              var y = p(n, v);
              try {
                u(t, v, y)
              } catch (e) {}
            }
          }
        }
        return t
      }
    },
    85075: (e, t) => {
      "use strict";
      var n = "function" == typeof Symbol && Symbol.for,
        r = n ? Symbol.for("react.element") : 60103,
        o = n ? Symbol.for("react.portal") : 60106,
        s = n ? Symbol.for("react.fragment") : 60107,
        i = n ? Symbol.for("react.strict_mode") : 60108,
        a = n ? Symbol.for("react.profiler") : 60114,
        c = n ? Symbol.for("react.provider") : 60109,
        u = n ? Symbol.for("react.context") : 60110,
        l = n ? Symbol.for("react.async_mode") : 60111,
        d = n ? Symbol.for("react.concurrent_mode") : 60111,
        p = n ? Symbol.for("react.forward_ref") : 60112,
        h = n ? Symbol.for("react.suspense") : 60113,
        f = n ? Symbol.for("react.suspense_list") : 60120,
        m = n ? Symbol.for("react.memo") : 60115,
        g = n ? Symbol.for("react.lazy") : 60116,
        v = n ? Symbol.for("react.block") : 60121,
        y = n ? Symbol.for("react.fundamental") : 60117,
        _ = n ? Symbol.for("react.responder") : 60118,
        b = n ? Symbol.for("react.scope") : 60119;

      function S(e) {
        if ("object" == typeof e && null !== e) {
          var t = e.$$typeof;
          switch (t) {
            case r:
              switch (e = e.type) {
                case l:
                case d:
                case s:
                case a:
                case i:
                case h:
                  return e;
                default:
                  switch (e = e && e.$$typeof) {
                    case u:
                    case p:
                    case g:
                    case m:
                    case c:
                      return e;
                    default:
                      return t
                  }
              }
            case o:
              return t
          }
        }
      }

      function w(e) {
        return S(e) === d
      }
      t.AsyncMode = l, t.ConcurrentMode = d, t.ContextConsumer = u, t.ContextProvider = c, t.Element = r, t.ForwardRef = p, t.Fragment = s, t.Lazy = g, t.Memo = m, t.Portal = o, t.Profiler = a, t.StrictMode = i, t.Suspense = h, t.isAsyncMode = function(e) {
        return w(e) || S(e) === l
      }, t.isConcurrentMode = w, t.isContextConsumer = function(e) {
        return S(e) === u
      }, t.isContextProvider = function(e) {
        return S(e) === c
      }, t.isElement = function(e) {
        return "object" == typeof e && null !== e && e.$$typeof === r
      }, t.isForwardRef = function(e) {
        return S(e) === p
      }, t.isFragment = function(e) {
        return S(e) === s
      }, t.isLazy = function(e) {
        return S(e) === g
      }, t.isMemo = function(e) {
        return S(e) === m
      }, t.isPortal = function(e) {
        return S(e) === o
      }, t.isProfiler = function(e) {
        return S(e) === a
      }, t.isStrictMode = function(e) {
        return S(e) === i
      }, t.isSuspense = function(e) {
        return S(e) === h
      }, t.isValidElementType = function(e) {
        return "string" == typeof e || "function" == typeof e || e === s || e === d || e === a || e === i || e === h || e === f || "object" == typeof e && null !== e && (e.$$typeof === g || e.$$typeof === m || e.$$typeof === c || e.$$typeof === u || e.$$typeof === p || e.$$typeof === y || e.$$typeof === _ || e.$$typeof === b || e.$$typeof === v)
      }, t.typeOf = S
    },
    95463: (e, t, n) => {
      "use strict";
      e.exports = n(85075)
    },
    70899: (e, t, n) => {
      e.exports = function e(t, n, r) {
        function o(i, a) {
          if (!n[i]) {
            if (!t[i]) {
              if (s) return s(i, !0);
              var c = new Error("Cannot find module '" + i + "'");
              throw c.code = "MODULE_NOT_FOUND", c
            }
            var u = n[i] = {
              exports: {}
            };
            t[i][0].call(u.exports, (function(e) {
              return o(t[i][1][e] || e)
            }), u, u.exports, e, t, n, r)
          }
          return n[i].exports
        }
        for (var s = void 0, i = 0; i < r.length; i++) o(r[i]);
        return o
      }({
        1: [function(e, t, r) {
          (function(e) {
            "use strict";
            var n, r, o = e.MutationObserver || e.WebKitMutationObserver;
            if (o) {
              var s = 0,
                i = new o(l),
                a = e.document.createTextNode("");
              i.observe(a, {
                characterData: !0
              }), n = function() {
                a.data = s = ++s % 2
              }
            } else if (e.setImmediate || void 0 === e.MessageChannel) n = "document" in e && "onreadystatechange" in e.document.createElement("script") ? function() {
              var t = e.document.createElement("script");
              t.onreadystatechange = function() {
                l(), t.onreadystatechange = null, t.parentNode.removeChild(t), t = null
              }, e.document.documentElement.appendChild(t)
            } : function() {
              setTimeout(l, 0)
            };
            else {
              var c = new e.MessageChannel;
              c.port1.onmessage = l, n = function() {
                c.port2.postMessage(0)
              }
            }
            var u = [];

            function l() {
              var e, t;
              r = !0;
              for (var n = u.length; n;) {
                for (t = u, u = [], e = -1; ++e < n;) t[e]();
                n = u.length
              }
              r = !1
            }
            t.exports = function(e) {
              1 !== u.push(e) || r || n()
            }
          }).call(this, void 0 !== n.g ? n.g : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {}],
        2: [function(e, t, n) {
          "use strict";
          var r = e(1);

          function o() {}
          var s = {},
            i = ["REJECTED"],
            a = ["FULFILLED"],
            c = ["PENDING"];

          function u(e) {
            if ("function" != typeof e) throw new TypeError("resolver must be a function");
            this.state = c, this.queue = [], this.outcome = void 0, e !== o && h(this, e)
          }

          function l(e, t, n) {
            this.promise = e, "function" == typeof t && (this.onFulfilled = t, this.callFulfilled = this.otherCallFulfilled), "function" == typeof n && (this.onRejected = n, this.callRejected = this.otherCallRejected)
          }

          function d(e, t, n) {
            r((function() {
              var r;
              try {
                r = t(n)
              } catch (t) {
                return s.reject(e, t)
              }
              r === e ? s.reject(e, new TypeError("Cannot resolve promise with itself")) : s.resolve(e, r)
            }))
          }

          function p(e) {
            var t = e && e.then;
            if (e && ("object" == typeof e || "function" == typeof e) && "function" == typeof t) return function() {
              t.apply(e, arguments)
            }
          }

          function h(e, t) {
            var n = !1;

            function r(t) {
              n || (n = !0, s.reject(e, t))
            }

            function o(t) {
              n || (n = !0, s.resolve(e, t))
            }
            var i = f((function() {
              t(o, r)
            }));
            "error" === i.status && r(i.value)
          }

          function f(e, t) {
            var n = {};
            try {
              n.value = e(t), n.status = "success"
            } catch (e) {
              n.status = "error", n.value = e
            }
            return n
          }
          t.exports = u, u.prototype.catch = function(e) {
            return this.then(null, e)
          }, u.prototype.then = function(e, t) {
            if ("function" != typeof e && this.state === a || "function" != typeof t && this.state === i) return this;
            var n = new this.constructor(o);
            return this.state !== c ? d(n, this.state === a ? e : t, this.outcome) : this.queue.push(new l(n, e, t)), n
          }, l.prototype.callFulfilled = function(e) {
            s.resolve(this.promise, e)
          }, l.prototype.otherCallFulfilled = function(e) {
            d(this.promise, this.onFulfilled, e)
          }, l.prototype.callRejected = function(e) {
            s.reject(this.promise, e)
          }, l.prototype.otherCallRejected = function(e) {
            d(this.promise, this.onRejected, e)
          }, s.resolve = function(e, t) {
            var n = f(p, t);
            if ("error" === n.status) return s.reject(e, n.value);
            var r = n.value;
            if (r) h(e, r);
            else {
              e.state = a, e.outcome = t;
              for (var o = -1, i = e.queue.length; ++o < i;) e.queue[o].callFulfilled(t)
            }
            return e
          }, s.reject = function(e, t) {
            e.state = i, e.outcome = t;
            for (var n = -1, r = e.queue.length; ++n < r;) e.queue[n].callRejected(t);
            return e
          }, u.resolve = function(e) {
            return e instanceof this ? e : s.resolve(new this(o), e)
          }, u.reject = function(e) {
            var t = new this(o);
            return s.reject(t, e)
          }, u.all = function(e) {
            var t = this;
            if ("[object Array]" !== Object.prototype.toString.call(e)) return this.reject(new TypeError("must be an array"));
            var n = e.length,
              r = !1;
            if (!n) return this.resolve([]);
            for (var i = new Array(n), a = 0, c = -1, u = new this(o); ++c < n;) l(e[c], c);
            return u;

            function l(e, o) {
              t.resolve(e).then((function(e) {
                i[o] = e, ++a !== n || r || (r = !0, s.resolve(u, i))
              }), (function(e) {
                r || (r = !0, s.reject(u, e))
              }))
            }
          }, u.race = function(e) {
            var t = this;
            if ("[object Array]" !== Object.prototype.toString.call(e)) return this.reject(new TypeError("must be an array"));
            var n, r = e.length,
              i = !1;
            if (!r) return this.resolve([]);
            for (var a = -1, c = new this(o); ++a < r;) n = e[a], t.resolve(n).then((function(e) {
              i || (i = !0, s.resolve(c, e))
            }), (function(e) {
              i || (i = !0, s.reject(c, e))
            }));
            return c
          }
        }, {
          1: 1
        }],
        3: [function(e, t, r) {
          (function(t) {
            "use strict";
            "function" != typeof t.Promise && (t.Promise = e(2))
          }).call(this, void 0 !== n.g ? n.g : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {
          2: 2
        }],
        4: [function(e, t, n) {
          "use strict";
          var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
          } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
          };
          var o = function() {
            try {
              if ("undefined" != typeof indexedDB) return indexedDB;
              if ("undefined" != typeof webkitIndexedDB) return webkitIndexedDB;
              if ("undefined" != typeof mozIndexedDB) return mozIndexedDB;
              if ("undefined" != typeof OIndexedDB) return OIndexedDB;
              if ("undefined" != typeof msIndexedDB) return msIndexedDB
            } catch (e) {
              return
            }
          }();

          function s(e, t) {
            e = e || [], t = t || {};
            try {
              return new Blob(e, t)
            } catch (o) {
              if ("TypeError" !== o.name) throw o;
              for (var n = new("undefined" != typeof BlobBuilder ? BlobBuilder : "undefined" != typeof MSBlobBuilder ? MSBlobBuilder : "undefined" != typeof MozBlobBuilder ? MozBlobBuilder : WebKitBlobBuilder), r = 0; r < e.length; r += 1) n.append(e[r]);
              return n.getBlob(t.type)
            }
          }
          "undefined" == typeof Promise && e(3);
          var i = Promise;

          function a(e, t) {
            t && e.then((function(e) {
              t(null, e)
            }), (function(e) {
              t(e)
            }))
          }

          function c(e, t, n) {
            "function" == typeof t && e.then(t), "function" == typeof n && e.catch(n)
          }

          function u(e) {
            return "string" != typeof e && (console.warn(e + " used as a key, but it is not a string."), e = String(e)), e
          }

          function l() {
            if (arguments.length && "function" == typeof arguments[arguments.length - 1]) return arguments[arguments.length - 1]
          }
          var d = "local-forage-detect-blob-support",
            p = void 0,
            h = {},
            f = Object.prototype.toString,
            m = "readonly",
            g = "readwrite";

          function v(e) {
            for (var t = e.length, n = new ArrayBuffer(t), r = new Uint8Array(n), o = 0; o < t; o++) r[o] = e.charCodeAt(o);
            return n
          }

          function y(e) {
            return "boolean" == typeof p ? i.resolve(p) : function(e) {
              return new i((function(t) {
                var n = e.transaction(d, g),
                  r = s([""]);
                n.objectStore(d).put(r, "key"), n.onabort = function(e) {
                  e.preventDefault(), e.stopPropagation(), t(!1)
                }, n.oncomplete = function() {
                  var e = navigator.userAgent.match(/Chrome\/(\d+)/),
                    n = navigator.userAgent.match(/Edge\//);
                  t(n || !e || parseInt(e[1], 10) >= 43)
                }
              })).catch((function() {
                return !1
              }))
            }(e).then((function(e) {
              return p = e
            }))
          }

          function _(e) {
            var t = h[e.name],
              n = {};
            n.promise = new i((function(e, t) {
              n.resolve = e, n.reject = t
            })), t.deferredOperations.push(n), t.dbReady ? t.dbReady = t.dbReady.then((function() {
              return n.promise
            })) : t.dbReady = n.promise
          }

          function b(e) {
            var t = h[e.name].deferredOperations.pop();
            if (t) return t.resolve(), t.promise
          }

          function S(e, t) {
            var n = h[e.name].deferredOperations.pop();
            if (n) return n.reject(t), n.promise
          }

          function w(e, t) {
            return new i((function(n, r) {
              if (h[e.name] = h[e.name] || {
                  forages: [],
                  db: null,
                  dbReady: null,
                  deferredOperations: []
                }, e.db) {
                if (!t) return n(e.db);
                _(e), e.db.close()
              }
              var s = [e.name];
              t && s.push(e.version);
              var i = o.open.apply(o, s);
              t && (i.onupgradeneeded = function(t) {
                var n = i.result;
                try {
                  n.createObjectStore(e.storeName), t.oldVersion <= 1 && n.createObjectStore(d)
                } catch (n) {
                  if ("ConstraintError" !== n.name) throw n;
                  console.warn('The database "' + e.name + '" has been upgraded from version ' + t.oldVersion + " to version " + t.newVersion + ', but the storage "' + e.storeName + '" already exists.')
                }
              }), i.onerror = function(e) {
                e.preventDefault(), r(i.error)
              }, i.onsuccess = function() {
                var t = i.result;
                t.onversionchange = function(e) {
                  e.target.close()
                }, n(t), b(e)
              }
            }))
          }

          function k(e) {
            return w(e, !1)
          }

          function T(e) {
            return w(e, !0)
          }

          function E(e, t) {
            if (!e.db) return !0;
            var n = !e.db.objectStoreNames.contains(e.storeName),
              r = e.version < e.db.version,
              o = e.version > e.db.version;
            if (r && (e.version !== t && console.warn('The database "' + e.name + "\" can't be downgraded from version " + e.db.version + " to version " + e.version + "."), e.version = e.db.version), o || n) {
              if (n) {
                var s = e.db.version + 1;
                s > e.version && (e.version = s)
              }
              return !0
            }
            return !1
          }

          function x(e) {
            return s([v(atob(e.data))], {
              type: e.type
            })
          }

          function C(e) {
            return e && e.__local_forage_encoded_blob
          }

          function I(e) {
            var t = this,
              n = t._initReady().then((function() {
                var e = h[t._dbInfo.name];
                if (e && e.dbReady) return e.dbReady
              }));
            return c(n, e, e), n
          }

          function R(e, t, n, r) {
            void 0 === r && (r = 1);
            try {
              var o = e.db.transaction(e.storeName, t);
              n(null, o)
            } catch (o) {
              if (r > 0 && (!e.db || "InvalidStateError" === o.name || "NotFoundError" === o.name)) return i.resolve().then((function() {
                if (!e.db || "NotFoundError" === o.name && !e.db.objectStoreNames.contains(e.storeName) && e.version <= e.db.version) return e.db && (e.version = e.db.version + 1), T(e)
              })).then((function() {
                return function(e) {
                  _(e);
                  for (var t = h[e.name], n = t.forages, r = 0; r < n.length; r++) {
                    var o = n[r];
                    o._dbInfo.db && (o._dbInfo.db.close(), o._dbInfo.db = null)
                  }
                  return e.db = null, k(e).then((function(t) {
                    return e.db = t, E(e) ? T(e) : t
                  })).then((function(r) {
                    e.db = t.db = r;
                    for (var o = 0; o < n.length; o++) n[o]._dbInfo.db = r
                  })).catch((function(t) {
                    throw S(e, t), t
                  }))
                }(e).then((function() {
                  R(e, t, n, r - 1)
                }))
              })).catch(n);
              n(o)
            }
          }
          var O = {
            _driver: "asyncStorage",
            _initStorage: function(e) {
              var t = this,
                n = {
                  db: null
                };
              if (e)
                for (var r in e) n[r] = e[r];
              var o = h[n.name];
              o || (o = {
                forages: [],
                db: null,
                dbReady: null,
                deferredOperations: []
              }, h[n.name] = o), o.forages.push(t), t._initReady || (t._initReady = t.ready, t.ready = I);
              var s = [];

              function a() {
                return i.resolve()
              }
              for (var c = 0; c < o.forages.length; c++) {
                var u = o.forages[c];
                u !== t && s.push(u._initReady().catch(a))
              }
              var l = o.forages.slice(0);
              return i.all(s).then((function() {
                return n.db = o.db, k(n)
              })).then((function(e) {
                return n.db = e, E(n, t._defaultConfig.version) ? T(n) : e
              })).then((function(e) {
                n.db = o.db = e, t._dbInfo = n;
                for (var r = 0; r < l.length; r++) {
                  var s = l[r];
                  s !== t && (s._dbInfo.db = n.db, s._dbInfo.version = n.version)
                }
              }))
            },
            _support: function() {
              try {
                if (!o || !o.open) return !1;
                var e = "undefined" != typeof openDatabase && /(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent) && !/BlackBerry/.test(navigator.platform),
                  t = "function" == typeof fetch && -1 !== fetch.toString().indexOf("[native code");
                return (!e || t) && "undefined" != typeof indexedDB && "undefined" != typeof IDBKeyRange
              } catch (e) {
                return !1
              }
            }(),
            iterate: function(e, t) {
              var n = this,
                r = new i((function(t, r) {
                  n.ready().then((function() {
                    R(n._dbInfo, m, (function(o, s) {
                      if (o) return r(o);
                      try {
                        var i = s.objectStore(n._dbInfo.storeName).openCursor(),
                          a = 1;
                        i.onsuccess = function() {
                          var n = i.result;
                          if (n) {
                            var r = n.value;
                            C(r) && (r = x(r));
                            var o = e(r, n.key, a++);
                            void 0 !== o ? t(o) : n.continue()
                          } else t()
                        }, i.onerror = function() {
                          r(i.error)
                        }
                      } catch (e) {
                        r(e)
                      }
                    }))
                  })).catch(r)
                }));
              return a(r, t), r
            },
            getItem: function(e, t) {
              var n = this;
              e = u(e);
              var r = new i((function(t, r) {
                n.ready().then((function() {
                  R(n._dbInfo, m, (function(o, s) {
                    if (o) return r(o);
                    try {
                      var i = s.objectStore(n._dbInfo.storeName).get(e);
                      i.onsuccess = function() {
                        var e = i.result;
                        void 0 === e && (e = null), C(e) && (e = x(e)), t(e)
                      }, i.onerror = function() {
                        r(i.error)
                      }
                    } catch (e) {
                      r(e)
                    }
                  }))
                })).catch(r)
              }));
              return a(r, t), r
            },
            setItem: function(e, t, n) {
              var r = this;
              e = u(e);
              var o = new i((function(n, o) {
                var s;
                r.ready().then((function() {
                  return s = r._dbInfo, "[object Blob]" === f.call(t) ? y(s.db).then((function(e) {
                    return e ? t : (n = t, new i((function(e, t) {
                      var r = new FileReader;
                      r.onerror = t, r.onloadend = function(t) {
                        var r = btoa(t.target.result || "");
                        e({
                          __local_forage_encoded_blob: !0,
                          data: r,
                          type: n.type
                        })
                      }, r.readAsBinaryString(n)
                    })));
                    var n
                  })) : t
                })).then((function(t) {
                  R(r._dbInfo, g, (function(s, i) {
                    if (s) return o(s);
                    try {
                      var a = i.objectStore(r._dbInfo.storeName);
                      null === t && (t = void 0);
                      var c = a.put(t, e);
                      i.oncomplete = function() {
                        void 0 === t && (t = null), n(t)
                      }, i.onabort = i.onerror = function() {
                        var e = c.error ? c.error : c.transaction.error;
                        o(e)
                      }
                    } catch (e) {
                      o(e)
                    }
                  }))
                })).catch(o)
              }));
              return a(o, n), o
            },
            removeItem: function(e, t) {
              var n = this;
              e = u(e);
              var r = new i((function(t, r) {
                n.ready().then((function() {
                  R(n._dbInfo, g, (function(o, s) {
                    if (o) return r(o);
                    try {
                      var i = s.objectStore(n._dbInfo.storeName).delete(e);
                      s.oncomplete = function() {
                        t()
                      }, s.onerror = function() {
                        r(i.error)
                      }, s.onabort = function() {
                        var e = i.error ? i.error : i.transaction.error;
                        r(e)
                      }
                    } catch (e) {
                      r(e)
                    }
                  }))
                })).catch(r)
              }));
              return a(r, t), r
            },
            clear: function(e) {
              var t = this,
                n = new i((function(e, n) {
                  t.ready().then((function() {
                    R(t._dbInfo, g, (function(r, o) {
                      if (r) return n(r);
                      try {
                        var s = o.objectStore(t._dbInfo.storeName).clear();
                        o.oncomplete = function() {
                          e()
                        }, o.onabort = o.onerror = function() {
                          var e = s.error ? s.error : s.transaction.error;
                          n(e)
                        }
                      } catch (e) {
                        n(e)
                      }
                    }))
                  })).catch(n)
                }));
              return a(n, e), n
            },
            length: function(e) {
              var t = this,
                n = new i((function(e, n) {
                  t.ready().then((function() {
                    R(t._dbInfo, m, (function(r, o) {
                      if (r) return n(r);
                      try {
                        var s = o.objectStore(t._dbInfo.storeName).count();
                        s.onsuccess = function() {
                          e(s.result)
                        }, s.onerror = function() {
                          n(s.error)
                        }
                      } catch (e) {
                        n(e)
                      }
                    }))
                  })).catch(n)
                }));
              return a(n, e), n
            },
            key: function(e, t) {
              var n = this,
                r = new i((function(t, r) {
                  e < 0 ? t(null) : n.ready().then((function() {
                    R(n._dbInfo, m, (function(o, s) {
                      if (o) return r(o);
                      try {
                        var i = s.objectStore(n._dbInfo.storeName),
                          a = !1,
                          c = i.openKeyCursor();
                        c.onsuccess = function() {
                          var n = c.result;
                          n ? 0 === e || a ? t(n.key) : (a = !0, n.advance(e)) : t(null)
                        }, c.onerror = function() {
                          r(c.error)
                        }
                      } catch (e) {
                        r(e)
                      }
                    }))
                  })).catch(r)
                }));
              return a(r, t), r
            },
            keys: function(e) {
              var t = this,
                n = new i((function(e, n) {
                  t.ready().then((function() {
                    R(t._dbInfo, m, (function(r, o) {
                      if (r) return n(r);
                      try {
                        var s = o.objectStore(t._dbInfo.storeName).openKeyCursor(),
                          i = [];
                        s.onsuccess = function() {
                          var t = s.result;
                          t ? (i.push(t.key), t.continue()) : e(i)
                        }, s.onerror = function() {
                          n(s.error)
                        }
                      } catch (e) {
                        n(e)
                      }
                    }))
                  })).catch(n)
                }));
              return a(n, e), n
            },
            dropInstance: function(e, t) {
              t = l.apply(this, arguments);
              var n, r = this.config();
              if ((e = "function" != typeof e && e || {}).name || (e.name = e.name || r.name, e.storeName = e.storeName || r.storeName), e.name) {
                var s = e.name === r.name && this._dbInfo.db ? i.resolve(this._dbInfo.db) : k(e).then((function(t) {
                  var n = h[e.name],
                    r = n.forages;
                  n.db = t;
                  for (var o = 0; o < r.length; o++) r[o]._dbInfo.db = t;
                  return t
                }));
                n = e.storeName ? s.then((function(t) {
                  if (t.objectStoreNames.contains(e.storeName)) {
                    var n = t.version + 1;
                    _(e);
                    var r = h[e.name],
                      s = r.forages;
                    t.close();
                    for (var a = 0; a < s.length; a++) {
                      var c = s[a];
                      c._dbInfo.db = null, c._dbInfo.version = n
                    }
                    var u = new i((function(t, r) {
                      var s = o.open(e.name, n);
                      s.onerror = function(e) {
                        s.result.close(), r(e)
                      }, s.onupgradeneeded = function() {
                        s.result.deleteObjectStore(e.storeName)
                      }, s.onsuccess = function() {
                        var e = s.result;
                        e.close(), t(e)
                      }
                    }));
                    return u.then((function(e) {
                      r.db = e;
                      for (var t = 0; t < s.length; t++) {
                        var n = s[t];
                        n._dbInfo.db = e, b(n._dbInfo)
                      }
                    })).catch((function(t) {
                      throw (S(e, t) || i.resolve()).catch((function() {})), t
                    }))
                  }
                })) : s.then((function(t) {
                  _(e);
                  var n = h[e.name],
                    r = n.forages;
                  t.close();
                  for (var s = 0; s < r.length; s++) r[s]._dbInfo.db = null;
                  var a = new i((function(t, n) {
                    var r = o.deleteDatabase(e.name);
                    r.onerror = function() {
                      var e = r.result;
                      e && e.close(), n(r.error)
                    }, r.onblocked = function() {
                      console.warn('dropInstance blocked for database "' + e.name + '" until all open connections are closed')
                    }, r.onsuccess = function() {
                      var e = r.result;
                      e && e.close(), t(e)
                    }
                  }));
                  return a.then((function(e) {
                    n.db = e;
                    for (var t = 0; t < r.length; t++) b(r[t]._dbInfo)
                  })).catch((function(t) {
                    throw (S(e, t) || i.resolve()).catch((function() {})), t
                  }))
                }))
              } else n = i.reject("Invalid arguments");
              return a(n, t), n
            }
          };
          var M = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
            A = /^~~local_forage_type~([^~]+)~/,
            F = "__lfsc__:",
            D = "arbf",
            N = "blob",
            L = "si08",
            P = "ui08",
            j = "uic8",
            $ = "si16",
            B = "si32",
            U = "ur16",
            H = "ui32",
            q = "fl32",
            z = "fl64",
            W = Object.prototype.toString;

          function K(e) {
            var t, n, r, o, s, i = .75 * e.length,
              a = e.length,
              c = 0;
            "=" === e[e.length - 1] && (i--, "=" === e[e.length - 2] && i--);
            var u = new ArrayBuffer(i),
              l = new Uint8Array(u);
            for (t = 0; t < a; t += 4) n = M.indexOf(e[t]), r = M.indexOf(e[t + 1]), o = M.indexOf(e[t + 2]), s = M.indexOf(e[t + 3]), l[c++] = n << 2 | r >> 4, l[c++] = (15 & r) << 4 | o >> 2, l[c++] = (3 & o) << 6 | 63 & s;
            return u
          }

          function G(e) {
            var t, n = new Uint8Array(e),
              r = "";
            for (t = 0; t < n.length; t += 3) r += M[n[t] >> 2], r += M[(3 & n[t]) << 4 | n[t + 1] >> 4], r += M[(15 & n[t + 1]) << 2 | n[t + 2] >> 6], r += M[63 & n[t + 2]];
            return n.length % 3 == 2 ? r = r.substring(0, r.length - 1) + "=" : n.length % 3 == 1 && (r = r.substring(0, r.length - 2) + "=="), r
          }
          var V = {
            serialize: function(e, t) {
              var n = "";
              if (e && (n = W.call(e)), e && ("[object ArrayBuffer]" === n || e.buffer && "[object ArrayBuffer]" === W.call(e.buffer))) {
                var r, o = F;
                e instanceof ArrayBuffer ? (r = e, o += D) : (r = e.buffer, "[object Int8Array]" === n ? o += L : "[object Uint8Array]" === n ? o += P : "[object Uint8ClampedArray]" === n ? o += j : "[object Int16Array]" === n ? o += $ : "[object Uint16Array]" === n ? o += U : "[object Int32Array]" === n ? o += B : "[object Uint32Array]" === n ? o += H : "[object Float32Array]" === n ? o += q : "[object Float64Array]" === n ? o += z : t(new Error("Failed to get type for BinaryArray"))), t(o + G(r))
              } else if ("[object Blob]" === n) {
                var s = new FileReader;
                s.onload = function() {
                  var n = "~~local_forage_type~" + e.type + "~" + G(this.result);
                  t(F + N + n)
                }, s.readAsArrayBuffer(e)
              } else try {
                t(JSON.stringify(e))
              } catch (n) {
                console.error("Couldn't convert value into a JSON string: ", e), t(null, n)
              }
            },
            deserialize: function(e) {
              if (e.substring(0, 9) !== F) return JSON.parse(e);
              var t, n = e.substring(13),
                r = e.substring(9, 13);
              if (r === N && A.test(n)) {
                var o = n.match(A);
                t = o[1], n = n.substring(o[0].length)
              }
              var i = K(n);
              switch (r) {
                case D:
                  return i;
                case N:
                  return s([i], {
                    type: t
                  });
                case L:
                  return new Int8Array(i);
                case P:
                  return new Uint8Array(i);
                case j:
                  return new Uint8ClampedArray(i);
                case $:
                  return new Int16Array(i);
                case U:
                  return new Uint16Array(i);
                case B:
                  return new Int32Array(i);
                case H:
                  return new Uint32Array(i);
                case q:
                  return new Float32Array(i);
                case z:
                  return new Float64Array(i);
                default:
                  throw new Error("Unkown type: " + r)
              }
            },
            stringToBuffer: K,
            bufferToString: G
          };

          function J(e, t, n, r) {
            e.executeSql("CREATE TABLE IF NOT EXISTS " + t.storeName + " (id INTEGER PRIMARY KEY, key unique, value)", [], n, r)
          }

          function Y(e, t, n, r, o, s) {
            e.executeSql(n, r, o, (function(e, i) {
              i.code === i.SYNTAX_ERR ? e.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?", [t.storeName], (function(e, a) {
                a.rows.length ? s(e, i) : J(e, t, (function() {
                  e.executeSql(n, r, o, s)
                }), s)
              }), s) : s(e, i)
            }), s)
          }

          function X(e, t, n, r) {
            var o = this;
            e = u(e);
            var s = new i((function(s, i) {
              o.ready().then((function() {
                void 0 === t && (t = null);
                var a = t,
                  c = o._dbInfo;
                c.serializer.serialize(t, (function(t, u) {
                  u ? i(u) : c.db.transaction((function(n) {
                    Y(n, c, "INSERT OR REPLACE INTO " + c.storeName + " (key, value) VALUES (?, ?)", [e, t], (function() {
                      s(a)
                    }), (function(e, t) {
                      i(t)
                    }))
                  }), (function(t) {
                    if (t.code === t.QUOTA_ERR) {
                      if (r > 0) return void s(X.apply(o, [e, a, n, r - 1]));
                      i(t)
                    }
                  }))
                }))
              })).catch(i)
            }));
            return a(s, n), s
          }
          var Q = {
            _driver: "webSQLStorage",
            _initStorage: function(e) {
              var t = this,
                n = {
                  db: null
                };
              if (e)
                for (var r in e) n[r] = "string" != typeof e[r] ? e[r].toString() : e[r];
              var o = new i((function(e, r) {
                try {
                  n.db = openDatabase(n.name, String(n.version), n.description, n.size)
                } catch (e) {
                  return r(e)
                }
                n.db.transaction((function(o) {
                  J(o, n, (function() {
                    t._dbInfo = n, e()
                  }), (function(e, t) {
                    r(t)
                  }))
                }), r)
              }));
              return n.serializer = V, o
            },
            _support: "function" == typeof openDatabase,
            iterate: function(e, t) {
              var n = this,
                r = new i((function(t, r) {
                  n.ready().then((function() {
                    var o = n._dbInfo;
                    o.db.transaction((function(n) {
                      Y(n, o, "SELECT * FROM " + o.storeName, [], (function(n, r) {
                        for (var s = r.rows, i = s.length, a = 0; a < i; a++) {
                          var c = s.item(a),
                            u = c.value;
                          if (u && (u = o.serializer.deserialize(u)), void 0 !== (u = e(u, c.key, a + 1))) return void t(u)
                        }
                        t()
                      }), (function(e, t) {
                        r(t)
                      }))
                    }))
                  })).catch(r)
                }));
              return a(r, t), r
            },
            getItem: function(e, t) {
              var n = this;
              e = u(e);
              var r = new i((function(t, r) {
                n.ready().then((function() {
                  var o = n._dbInfo;
                  o.db.transaction((function(n) {
                    Y(n, o, "SELECT * FROM " + o.storeName + " WHERE key = ? LIMIT 1", [e], (function(e, n) {
                      var r = n.rows.length ? n.rows.item(0).value : null;
                      r && (r = o.serializer.deserialize(r)), t(r)
                    }), (function(e, t) {
                      r(t)
                    }))
                  }))
                })).catch(r)
              }));
              return a(r, t), r
            },
            setItem: function(e, t, n) {
              return X.apply(this, [e, t, n, 1])
            },
            removeItem: function(e, t) {
              var n = this;
              e = u(e);
              var r = new i((function(t, r) {
                n.ready().then((function() {
                  var o = n._dbInfo;
                  o.db.transaction((function(n) {
                    Y(n, o, "DELETE FROM " + o.storeName + " WHERE key = ?", [e], (function() {
                      t()
                    }), (function(e, t) {
                      r(t)
                    }))
                  }))
                })).catch(r)
              }));
              return a(r, t), r
            },
            clear: function(e) {
              var t = this,
                n = new i((function(e, n) {
                  t.ready().then((function() {
                    var r = t._dbInfo;
                    r.db.transaction((function(t) {
                      Y(t, r, "DELETE FROM " + r.storeName, [], (function() {
                        e()
                      }), (function(e, t) {
                        n(t)
                      }))
                    }))
                  })).catch(n)
                }));
              return a(n, e), n
            },
            length: function(e) {
              var t = this,
                n = new i((function(e, n) {
                  t.ready().then((function() {
                    var r = t._dbInfo;
                    r.db.transaction((function(t) {
                      Y(t, r, "SELECT COUNT(key) as c FROM " + r.storeName, [], (function(t, n) {
                        var r = n.rows.item(0).c;
                        e(r)
                      }), (function(e, t) {
                        n(t)
                      }))
                    }))
                  })).catch(n)
                }));
              return a(n, e), n
            },
            key: function(e, t) {
              var n = this,
                r = new i((function(t, r) {
                  n.ready().then((function() {
                    var o = n._dbInfo;
                    o.db.transaction((function(n) {
                      Y(n, o, "SELECT key FROM " + o.storeName + " WHERE id = ? LIMIT 1", [e + 1], (function(e, n) {
                        var r = n.rows.length ? n.rows.item(0).key : null;
                        t(r)
                      }), (function(e, t) {
                        r(t)
                      }))
                    }))
                  })).catch(r)
                }));
              return a(r, t), r
            },
            keys: function(e) {
              var t = this,
                n = new i((function(e, n) {
                  t.ready().then((function() {
                    var r = t._dbInfo;
                    r.db.transaction((function(t) {
                      Y(t, r, "SELECT key FROM " + r.storeName, [], (function(t, n) {
                        for (var r = [], o = 0; o < n.rows.length; o++) r.push(n.rows.item(o).key);
                        e(r)
                      }), (function(e, t) {
                        n(t)
                      }))
                    }))
                  })).catch(n)
                }));
              return a(n, e), n
            },
            dropInstance: function(e, t) {
              t = l.apply(this, arguments);
              var n = this.config();
              (e = "function" != typeof e && e || {}).name || (e.name = e.name || n.name, e.storeName = e.storeName || n.storeName);
              var r, o = this;
              return a(r = e.name ? new i((function(t) {
                var r;
                r = e.name === n.name ? o._dbInfo.db : openDatabase(e.name, "", "", 0), e.storeName ? t({
                  db: r,
                  storeNames: [e.storeName]
                }) : t(function(e) {
                  return new i((function(t, n) {
                    e.transaction((function(r) {
                      r.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'", [], (function(n, r) {
                        for (var o = [], s = 0; s < r.rows.length; s++) o.push(r.rows.item(s).name);
                        t({
                          db: e,
                          storeNames: o
                        })
                      }), (function(e, t) {
                        n(t)
                      }))
                    }), (function(e) {
                      n(e)
                    }))
                  }))
                }(r))
              })).then((function(e) {
                return new i((function(t, n) {
                  e.db.transaction((function(r) {
                    function o(e) {
                      return new i((function(t, n) {
                        r.executeSql("DROP TABLE IF EXISTS " + e, [], (function() {
                          t()
                        }), (function(e, t) {
                          n(t)
                        }))
                      }))
                    }
                    for (var s = [], a = 0, c = e.storeNames.length; a < c; a++) s.push(o(e.storeNames[a]));
                    i.all(s).then((function() {
                      t()
                    })).catch((function(e) {
                      n(e)
                    }))
                  }), (function(e) {
                    n(e)
                  }))
                }))
              })) : i.reject("Invalid arguments"), t), r
            }
          };

          function Z(e, t) {
            var n = e.name + "/";
            return e.storeName !== t.storeName && (n += e.storeName + "/"), n
          }

          function ee() {
            return ! function() {
              var e = "_localforage_support_test";
              try {
                return localStorage.setItem(e, !0), localStorage.removeItem(e), !1
              } catch (e) {
                return !0
              }
            }() || localStorage.length > 0
          }
          var te = {
              _driver: "localStorageWrapper",
              _initStorage: function(e) {
                var t = {};
                if (e)
                  for (var n in e) t[n] = e[n];
                return t.keyPrefix = Z(e, this._defaultConfig), ee() ? (this._dbInfo = t, t.serializer = V, i.resolve()) : i.reject()
              },
              _support: function() {
                try {
                  return "undefined" != typeof localStorage && "setItem" in localStorage && !!localStorage.setItem
                } catch (e) {
                  return !1
                }
              }(),
              iterate: function(e, t) {
                var n = this,
                  r = n.ready().then((function() {
                    for (var t = n._dbInfo, r = t.keyPrefix, o = r.length, s = localStorage.length, i = 1, a = 0; a < s; a++) {
                      var c = localStorage.key(a);
                      if (0 === c.indexOf(r)) {
                        var u = localStorage.getItem(c);
                        if (u && (u = t.serializer.deserialize(u)), void 0 !== (u = e(u, c.substring(o), i++))) return u
                      }
                    }
                  }));
                return a(r, t), r
              },
              getItem: function(e, t) {
                var n = this;
                e = u(e);
                var r = n.ready().then((function() {
                  var t = n._dbInfo,
                    r = localStorage.getItem(t.keyPrefix + e);
                  return r && (r = t.serializer.deserialize(r)), r
                }));
                return a(r, t), r
              },
              setItem: function(e, t, n) {
                var r = this;
                e = u(e);
                var o = r.ready().then((function() {
                  void 0 === t && (t = null);
                  var n = t;
                  return new i((function(o, s) {
                    var i = r._dbInfo;
                    i.serializer.serialize(t, (function(t, r) {
                      if (r) s(r);
                      else try {
                        localStorage.setItem(i.keyPrefix + e, t), o(n)
                      } catch (e) {
                        "QuotaExceededError" !== e.name && "NS_ERROR_DOM_QUOTA_REACHED" !== e.name || s(e), s(e)
                      }
                    }))
                  }))
                }));
                return a(o, n), o
              },
              removeItem: function(e, t) {
                var n = this;
                e = u(e);
                var r = n.ready().then((function() {
                  var t = n._dbInfo;
                  localStorage.removeItem(t.keyPrefix + e)
                }));
                return a(r, t), r
              },
              clear: function(e) {
                var t = this,
                  n = t.ready().then((function() {
                    for (var e = t._dbInfo.keyPrefix, n = localStorage.length - 1; n >= 0; n--) {
                      var r = localStorage.key(n);
                      0 === r.indexOf(e) && localStorage.removeItem(r)
                    }
                  }));
                return a(n, e), n
              },
              length: function(e) {
                var t = this.keys().then((function(e) {
                  return e.length
                }));
                return a(t, e), t
              },
              key: function(e, t) {
                var n = this,
                  r = n.ready().then((function() {
                    var t, r = n._dbInfo;
                    try {
                      t = localStorage.key(e)
                    } catch (e) {
                      t = null
                    }
                    return t && (t = t.substring(r.keyPrefix.length)), t
                  }));
                return a(r, t), r
              },
              keys: function(e) {
                var t = this,
                  n = t.ready().then((function() {
                    for (var e = t._dbInfo, n = localStorage.length, r = [], o = 0; o < n; o++) {
                      var s = localStorage.key(o);
                      0 === s.indexOf(e.keyPrefix) && r.push(s.substring(e.keyPrefix.length))
                    }
                    return r
                  }));
                return a(n, e), n
              },
              dropInstance: function(e, t) {
                if (t = l.apply(this, arguments), !(e = "function" != typeof e && e || {}).name) {
                  var n = this.config();
                  e.name = e.name || n.name, e.storeName = e.storeName || n.storeName
                }
                var r, o = this;
                return r = e.name ? new i((function(t) {
                  e.storeName ? t(Z(e, o._defaultConfig)) : t(e.name + "/")
                })).then((function(e) {
                  for (var t = localStorage.length - 1; t >= 0; t--) {
                    var n = localStorage.key(t);
                    0 === n.indexOf(e) && localStorage.removeItem(n)
                  }
                })) : i.reject("Invalid arguments"), a(r, t), r
              }
            },
            ne = function(e, t) {
              for (var n = e.length, r = 0; r < n;) {
                if ((o = e[r]) === (s = t) || "number" == typeof o && "number" == typeof s && isNaN(o) && isNaN(s)) return !0;
                r++
              }
              var o, s;
              return !1
            },
            re = Array.isArray || function(e) {
              return "[object Array]" === Object.prototype.toString.call(e)
            },
            oe = {},
            se = {},
            ie = {
              INDEXEDDB: O,
              WEBSQL: Q,
              LOCALSTORAGE: te
            },
            ae = [ie.INDEXEDDB._driver, ie.WEBSQL._driver, ie.LOCALSTORAGE._driver],
            ce = ["dropInstance"],
            ue = ["clear", "getItem", "iterate", "key", "keys", "length", "removeItem", "setItem"].concat(ce),
            le = {
              description: "",
              driver: ae.slice(),
              name: "localforage",
              size: 4980736,
              storeName: "keyvaluepairs",
              version: 1
            };

          function de(e, t) {
            e[t] = function() {
              var n = arguments;
              return e.ready().then((function() {
                return e[t].apply(e, n)
              }))
            }
          }

          function pe() {
            for (var e = 1; e < arguments.length; e++) {
              var t = arguments[e];
              if (t)
                for (var n in t) t.hasOwnProperty(n) && (re(t[n]) ? arguments[0][n] = t[n].slice() : arguments[0][n] = t[n])
            }
            return arguments[0]
          }
          var he = function() {
              function e(t) {
                for (var n in function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                  }(this, e), ie)
                  if (ie.hasOwnProperty(n)) {
                    var r = ie[n],
                      o = r._driver;
                    this[n] = o, oe[o] || this.defineDriver(r)
                  } this._defaultConfig = pe({}, le), this._config = pe({}, this._defaultConfig, t), this._driverSet = null, this._initDriver = null, this._ready = !1, this._dbInfo = null, this._wrapLibraryMethodsWithReady(), this.setDriver(this._config.driver).catch((function() {}))
              }
              return e.prototype.config = function(e) {
                if ("object" === (void 0 === e ? "undefined" : r(e))) {
                  if (this._ready) return new Error("Can't call config() after localforage has been used.");
                  for (var t in e) {
                    if ("storeName" === t && (e[t] = e[t].replace(/\W/g, "_")), "version" === t && "number" != typeof e[t]) return new Error("Database version must be a number.");
                    this._config[t] = e[t]
                  }
                  return !("driver" in e) || !e.driver || this.setDriver(this._config.driver)
                }
                return "string" == typeof e ? this._config[e] : this._config
              }, e.prototype.defineDriver = function(e, t, n) {
                var r = new i((function(t, n) {
                  try {
                    var r = e._driver,
                      o = new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");
                    if (!e._driver) return void n(o);
                    for (var s = ue.concat("_initStorage"), c = 0, u = s.length; c < u; c++) {
                      var l = s[c];
                      if ((!ne(ce, l) || e[l]) && "function" != typeof e[l]) return void n(o)
                    }! function() {
                      for (var t = function(e) {
                          return function() {
                            var t = new Error("Method " + e + " is not implemented by the current driver"),
                              n = i.reject(t);
                            return a(n, arguments[arguments.length - 1]), n
                          }
                        }, n = 0, r = ce.length; n < r; n++) {
                        var o = ce[n];
                        e[o] || (e[o] = t(o))
                      }
                    }();
                    var d = function(n) {
                      oe[r] && console.info("Redefining LocalForage driver: " + r), oe[r] = e, se[r] = n, t()
                    };
                    "_support" in e ? e._support && "function" == typeof e._support ? e._support().then(d, n) : d(!!e._support) : d(!0)
                  } catch (e) {
                    n(e)
                  }
                }));
                return c(r, t, n), r
              }, e.prototype.driver = function() {
                return this._driver || null
              }, e.prototype.getDriver = function(e, t, n) {
                var r = oe[e] ? i.resolve(oe[e]) : i.reject(new Error("Driver not found."));
                return c(r, t, n), r
              }, e.prototype.getSerializer = function(e) {
                var t = i.resolve(V);
                return c(t, e), t
              }, e.prototype.ready = function(e) {
                var t = this,
                  n = t._driverSet.then((function() {
                    return null === t._ready && (t._ready = t._initDriver()), t._ready
                  }));
                return c(n, e, e), n
              }, e.prototype.setDriver = function(e, t, n) {
                var r = this;
                re(e) || (e = [e]);
                var o = this._getSupportedDrivers(e);

                function s() {
                  r._config.driver = r.driver()
                }

                function a(e) {
                  return r._extend(e), s(), r._ready = r._initStorage(r._config), r._ready
                }
                var u = null !== this._driverSet ? this._driverSet.catch((function() {
                  return i.resolve()
                })) : i.resolve();
                return this._driverSet = u.then((function() {
                  var e = o[0];
                  return r._dbInfo = null, r._ready = null, r.getDriver(e).then((function(e) {
                    r._driver = e._driver, s(), r._wrapLibraryMethodsWithReady(), r._initDriver = function(e) {
                      return function() {
                        var t = 0;
                        return function n() {
                          for (; t < e.length;) {
                            var o = e[t];
                            return t++, r._dbInfo = null, r._ready = null, r.getDriver(o).then(a).catch(n)
                          }
                          s();
                          var c = new Error("No available storage method found.");
                          return r._driverSet = i.reject(c), r._driverSet
                        }()
                      }
                    }(o)
                  }))
                })).catch((function() {
                  s();
                  var e = new Error("No available storage method found.");
                  return r._driverSet = i.reject(e), r._driverSet
                })), c(this._driverSet, t, n), this._driverSet
              }, e.prototype.supports = function(e) {
                return !!se[e]
              }, e.prototype._extend = function(e) {
                pe(this, e)
              }, e.prototype._getSupportedDrivers = function(e) {
                for (var t = [], n = 0, r = e.length; n < r; n++) {
                  var o = e[n];
                  this.supports(o) && t.push(o)
                }
                return t
              }, e.prototype._wrapLibraryMethodsWithReady = function() {
                for (var e = 0, t = ue.length; e < t; e++) de(this, ue[e])
              }, e.prototype.createInstance = function(t) {
                return new e(t)
              }, e
            }(),
            fe = new he;
          t.exports = fe
        }, {
          3: 3
        }]
      }, {}, [4])(4)
    },
    18113: e => {
      var t, n, r = e.exports = {};

      function o() {
        throw new Error("setTimeout has not been defined")
      }

      function s() {
        throw new Error("clearTimeout has not been defined")
      }

      function i(e) {
        if (t === setTimeout) return setTimeout(e, 0);
        if ((t === o || !t) && setTimeout) return t = setTimeout, setTimeout(e, 0);
        try {
          return t(e, 0)
        } catch (n) {
          try {
            return t.call(null, e, 0)
          } catch (n) {
            return t.call(this, e, 0)
          }
        }
      }! function() {
        try {
          t = "function" == typeof setTimeout ? setTimeout : o
        } catch (e) {
          t = o
        }
        try {
          n = "function" == typeof clearTimeout ? clearTimeout : s
        } catch (e) {
          n = s
        }
      }();
      var a, c = [],
        u = !1,
        l = -1;

      function d() {
        u && a && (u = !1, a.length ? c = a.concat(c) : l = -1, c.length && p())
      }

      function p() {
        if (!u) {
          var e = i(d);
          u = !0;
          for (var t = c.length; t;) {
            for (a = c, c = []; ++l < t;) a && a[l].run();
            l = -1, t = c.length
          }
          a = null, u = !1,
            function(e) {
              if (n === clearTimeout) return clearTimeout(e);
              if ((n === s || !n) && clearTimeout) return n = clearTimeout, clearTimeout(e);
              try {
                return n(e)
              } catch (t) {
                try {
                  return n.call(null, e)
                } catch (t) {
                  return n.call(this, e)
                }
              }
            }(e)
        }
      }

      function h(e, t) {
        this.fun = e, this.array = t
      }

      function f() {}
      r.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        c.push(new h(e, t)), 1 !== c.length || u || i(p)
      }, h.prototype.run = function() {
        this.fun.apply(null, this.array)
      }, r.title = "browser", r.browser = !0, r.env = {}, r.argv = [], r.version = "", r.versions = {}, r.on = f, r.addListener = f, r.once = f, r.off = f, r.removeListener = f, r.removeAllListeners = f, r.emit = f, r.prependListener = f, r.prependOnceListener = f, r.listeners = function(e) {
        return []
      }, r.binding = function(e) {
        throw new Error("process.binding is not supported")
      }, r.cwd = function() {
        return "/"
      }, r.chdir = function(e) {
        throw new Error("process.chdir is not supported")
      }, r.umask = function() {
        return 0
      }
    }
  }
]);